import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "本地店家預約成交漏斗系統",
  description:
    "幫本地服務型店家打造一頁式成交網站、預約表單、LINE 導流與名單追蹤流程，把流量變成可追蹤的預約與成交機會。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
