import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://local-lead-funnel.vercel.app";
const siteTitle = "Local Lead Funnel｜預約成交系統";
const siteDescription =
  "幫本地店家把流量變成預約，串接一頁式網站、官方 LINE、預約表單與名單追蹤，建立清楚且可追蹤的預約成交流程。";
const shareImage = "/brand/social-og.png";

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
    siteName: "Local Lead Funnel｜預約成交系統",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: shareImage,
        alt: "Local Lead Funnel｜幫本地店家把流量變成預約"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [shareImage]
  },
  icons: {
    icon: "/brand/logo-square.png",
    shortcut: "/brand/logo-square.png",
    apple: "/brand/logo-square.png"
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
