import { NextResponse } from "next/server";

export const runtime = "nodejs";

const googleAppsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

function textValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function problemValues(value: unknown) {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

export async function POST(request: Request) {
  if (!googleAppsScriptUrl) {
    return NextResponse.json(
      { ok: false, message: "表單服務尚未完成設定，請稍後再試。" },
      { status: 500 }
    );
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const payload = {
      storeName: textValue(body.storeName),
      industry: textValue(body.industry),
      contactName: textValue(body.contactName),
      phone: textValue(body.phone),
      lineId: textValue(body.lineId),
      problems: problemValues(body.problems),
      adBudget: textValue(body.adBudget),
      notes: textValue(body.notes),
      submittedAt: new Date().toISOString(),
      honeypot: textValue(body.honeypot)
    };

    if (payload.honeypot) {
      return NextResponse.json({ ok: true });
    }

    const requiredFields = [
      payload.storeName,
      payload.industry,
      payload.contactName,
      payload.phone,
      payload.adBudget
    ];

    if (requiredFields.some((field) => !field)) {
      return NextResponse.json(
        { ok: false, message: "請填寫完整的必要欄位。" },
        { status: 400 }
      );
    }

    const response = await fetch(googleAppsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      cache: "no-store"
    });
    const responseText = await response.text();
    let result: { ok?: boolean; message?: string } | null = null;

    try {
      result = JSON.parse(responseText) as { ok?: boolean; message?: string };
    } catch {
      result = null;
    }

    if (!response.ok || result?.ok !== true) {
      return NextResponse.json(
        { ok: false, message: result?.message || "Google Sheets 暫時無法接收資料。" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead API request failed", error);
    return NextResponse.json(
      { ok: false, message: "資料送出失敗，請稍後再試。" },
      { status: 500 }
    );
  }
}
