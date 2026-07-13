"use client";

import { FormEvent, useState } from "react";

const problemOptions = [
  "沒有名單",
  "LINE追蹤亂",
  "廣告沒成效",
  "不會寫文案",
  "沒有預約頁",
  "不知道成交率"
];

function buildLeadPayload(formData: FormData) {
  return {
    storeName: formData.get("storeName"),
    industry: formData.get("industry"),
    contactName: formData.get("contactName"),
    phone: formData.get("phone"),
    lineId: formData.get("lineId"),
    problems: formData.getAll("problems"),
    adBudget: formData.get("adBudget"),
    notes: formData.get("notes")
  };
}

export function LeadForm({ lineUrl }: { lineUrl: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const payload = buildLeadPayload(new FormData(form));

    console.log("Lead diagnosis request", payload);
    setSubmitted(true);
    form.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-navy-100 bg-white p-5 shadow-soft sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy-900">
          店家名稱
          <input
            required
            name="storeName"
            type="text"
            placeholder="例如：XX 皮拉提斯"
            className="rounded-md border border-slate-200 px-4 py-3 text-base font-normal outline-none transition focus:border-cta-500 focus:ring-4 focus:ring-cta-500/15"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-navy-900">
          產業類型
          <input
            required
            name="industry"
            type="text"
            placeholder="例如：健身房、美業、修繕"
            className="rounded-md border border-slate-200 px-4 py-3 text-base font-normal outline-none transition focus:border-cta-500 focus:ring-4 focus:ring-cta-500/15"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-navy-900">
          聯絡人姓名
          <input
            required
            name="contactName"
            type="text"
            placeholder="請輸入姓名"
            className="rounded-md border border-slate-200 px-4 py-3 text-base font-normal outline-none transition focus:border-cta-500 focus:ring-4 focus:ring-cta-500/15"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-navy-900">
          電話
          <input
            required
            name="phone"
            type="tel"
            placeholder="請輸入聯絡電話"
            className="rounded-md border border-slate-200 px-4 py-3 text-base font-normal outline-none transition focus:border-cta-500 focus:ring-4 focus:ring-cta-500/15"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-navy-900 sm:col-span-2">
          LINE ID
          <input
            name="lineId"
            type="text"
            placeholder="方便後續用 LINE 聯繫"
            className="rounded-md border border-slate-200 px-4 py-3 text-base font-normal outline-none transition focus:border-cta-500 focus:ring-4 focus:ring-cta-500/15"
          />
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-navy-900">
          目前最大問題，可複選
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {problemOptions.map((problem) => (
            <label
              key={problem}
              className="flex items-center gap-3 rounded-md border border-slate-200 px-4 py-3 text-sm text-slate-700"
            >
              <input
                name="problems"
                type="checkbox"
                value={problem}
                className="h-4 w-4 rounded border-slate-300 text-cta-600 focus:ring-cta-500"
              />
              {problem}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-6 grid gap-2 text-sm font-semibold text-navy-900">
        每月可投入廣告預算
        <select
          required
          name="adBudget"
          className="rounded-md border border-slate-200 bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-cta-500 focus:ring-4 focus:ring-cta-500/15"
        >
          <option value="">請選擇預算區間</option>
          <option value="10000 以下">NT$10,000 以下</option>
          <option value="10000-30000">NT$10,000 - NT$30,000</option>
          <option value="30000-60000">NT$30,000 - NT$60,000</option>
          <option value="60000 以上">NT$60,000 以上</option>
          <option value="尚未決定">尚未決定</option>
        </select>
      </label>

      <label className="mt-6 grid gap-2 text-sm font-semibold text-navy-900">
        備註
        <textarea
          name="notes"
          rows={4}
          placeholder="可以簡單描述目前的廣告、預約或追蹤狀況"
          className="resize-none rounded-md border border-slate-200 px-4 py-3 text-base font-normal outline-none transition focus:border-cta-500 focus:ring-4 focus:ring-cta-500/15"
        />
      </label>

      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-cta-500 px-6 py-4 text-base font-bold text-navy-950 shadow-lg shadow-cta-500/25 transition hover:bg-cta-400 focus:outline-none focus:ring-4 focus:ring-cta-500/25"
      >
        送出免費診斷需求
      </button>

      <p className="mt-3 text-center text-sm font-semibold leading-6 text-slate-600">
        想更快取得診斷，也可以直接
        <a
          href={lineUrl}
          target="_blank"
          rel="noreferrer"
          className="text-cta-600 underline decoration-cta-500/40 underline-offset-4 transition hover:text-cta-500"
        >
          加入官方 LINE
        </a>
      </p>

      {submitted ? (
        <p
          role="status"
          className="mt-4 rounded-md bg-cta-500/10 px-4 py-3 text-sm font-semibold text-cta-600"
        >
          已收到你的預約診斷需求，我們會盡快與你聯繫。
        </p>
      ) : null}
    </form>
  );
}
