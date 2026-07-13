const SHEET_NAME = "診斷名單";
const HEADERS = [
  "送出時間",
  "店家名稱",
  "產業類型",
  "聯絡人姓名",
  "電話",
  "LINE ID",
  "目前最大問題",
  "每月廣告預算",
  "備註"
];

function doGet() {
  return jsonResponse_({ ok: true, service: "local-lead-funnel" });
}

function doPost(e) {
  try {
    const body = JSON.parse((e.postData && e.postData.contents) || "{}");

    if (String(body.honeypot || "").trim()) {
      return jsonResponse_({ ok: true, ignored: true });
    }

    const requiredFields = [
      body.storeName,
      body.industry,
      body.contactName,
      body.phone,
      body.adBudget
    ];

    if (requiredFields.some(function (field) { return !String(field || "").trim(); })) {
      return jsonResponse_({ ok: false, message: "缺少必要欄位" });
    }

    const sheet = getSheet_();
    ensureHeaders_(sheet);

    const problems = Array.isArray(body.problems)
      ? body.problems.join("、")
      : String(body.problems || "");

    sheet.appendRow([
      new Date(body.submittedAt || new Date()),
      safeCell_(body.storeName),
      safeCell_(body.industry),
      safeCell_(body.contactName),
      safeCell_(body.phone),
      safeCell_(body.lineId),
      safeCell_(problems),
      safeCell_(body.adBudget),
      safeCell_(body.notes)
    ]);

    return jsonResponse_({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse_({ ok: false, message: "寫入 Google Sheets 失敗" });
  }
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }
}

function safeCell_(value) {
  const text = String(value || "").trim();
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function jsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
