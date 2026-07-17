import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://local-lead-funnel.vercel.app";
const siteTitle = "本地店家預約成交漏斗系統｜Local Funnel Lab";
const siteDescription =
  "幫健身房、美業、按摩、皮拉提斯、補習班、診所與修繕服務，打造一頁式預約成交頁、LINE 導流與可追蹤的名單流程。";
const shareImage = "/images/local-funnel-hero.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: siteUrl,
    siteName: "Local Funnel Lab",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: shareImage,
        alt: "Local Funnel Lab 本地店家預約成交系統"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [shareImage]
  },
  robots: {
    index: true,
    follow: true
  }
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
