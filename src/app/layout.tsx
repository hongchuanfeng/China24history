import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleAdSense from "@/components/GoogleAdSense";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "中国24史 - 传道AI",
    template: "%s | 中国24史",
  },
  description: "中国24史在线工具网站，按时间轴方式介绍中国历史各个朝代，包括重大事件、著名人物等。",
  keywords: "中国历史, 24史, 朝代, 历史时间轴, 夏商周, 秦汉, 唐宋元明清",
  authors: [{ name: "传道AI" }],
  creator: "传道AI",
  publisher: "传道AI",
  metadataBase: new URL("https://china.zorezoro.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "中国24史 - 传道AI",
    description: "按时间轴方式浏览中国历史，了解各个朝代的兴衰更替。",
    url: "https://china.zorezoro.com",
    siteName: "中国24史",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "中国24史 - 传道AI",
    description: "按时间轴方式浏览中国历史，了解各个朝代的兴衰更替。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

  return (
      <html
        lang="zh-CN"
        className={`${geistSans.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col bg-gradient-to-b from-amber-50/30 to-white">
        {/* Google AdSense */}
        <GoogleAdSense />
        {/* Google Analytics */}
        <GoogleAnalytics />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
