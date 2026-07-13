# Google Sheets 串接設定

## 1. 建立 Google Sheet

1. 建立一份新的 Google Sheet。
2. 點選「擴充功能」→「Apps Script」。
3. 將 `google-apps-script/Code.gs` 的完整內容貼上，取代原本的程式碼。
4. 按儲存，專案名稱可命名為「Local Lead Funnel Form」。

## 2. 部署成 Web App

1. 右上角按「部署」→「新增部署」。
2. 類型選「網頁應用程式」。
3. 「執行身分」選「我」。
4. 「誰可以存取」選「所有人」。
5. 按「部署」，完成 Google 帳戶授權。
6. 複製「網頁應用程式 URL」，格式會像：

   `https://script.google.com/macros/s/部署ID/exec`

## 3. 設定 Vercel 環境變數

1. 開啟 Vercel 的 `local-lead-funnel` 專案。
2. 進入「Settings」→「Environment Variables」。
3. Name 輸入 `GOOGLE_APPS_SCRIPT_URL`。
4. Value 貼上 Apps Script Web App URL。
5. 勾選 Production、Preview、Development，按「Save」。
6. 到「Deployments」重新部署最新版本。

網站前端只會呼叫 `/api/lead`，Apps Script URL 只存在 Vercel 的伺服器環境變數中。

## 4. 測試

1. 開啟正式網站並填寫診斷表單。
2. 按送出後，按鈕會顯示「資料送出中」。
3. 成功時會顯示「已收到您的診斷需求，我們會盡快與您聯絡」。
4. 回到 Google Sheet，資料會新增在「診斷名單」工作表。
