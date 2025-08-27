import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "최보근 포트폴리오 | 웹 개발자",
  description:
    "Next.js · Node.js · PostgreSQL 기반으로 웹 서비스를 개발하고, GIS 데이터 파이프라인과 GeoServer · PostGIS 경험을 보유한 웹 개발자 최보근입니다.",
  openGraph: {
    title: "최보근 포트폴리오 | 웹 개발자 ",
    description:
      "Next.js · Node.js · PostgreSQL 기반으로 웹 서비스를 개발하고, GIS 데이터 파이프라인과 GeoServer · PostGIS 경험을 보유한 웹 개발자 최보근입니다.",
    url: "https://your-domain.vercel.app", // 🔲 배포 후 도메인
    siteName: "최보근 포트폴리오",
    images: [
      {
        url: "/og.png", // 🔲 public/og.png 준비
        width: 1200,
        height: 630,
        alt: "최보근 포트폴리오",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${inter.variable} h-full font-sans`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
