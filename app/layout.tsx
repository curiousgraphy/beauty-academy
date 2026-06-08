import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { eventMeta } from "@/lib/data";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const siteDescription =
  "청담동 K-Beauty 마스터 이언주와 함께하는 글래스 스킨·K-웨딩 메이크업 원데이 클래스. São Paulo Espaço MIND, 2026년 7월 6일.";

export const metadata: Metadata = {
  metadataBase: new URL("https://cbb-kbeauty.example.com"),
  title: {
    default: `${eventMeta.title} — São Paulo 2026`,
    template: `%s · ${eventMeta.title}`,
  },
  description: siteDescription,
  keywords: [
    "K-Beauty",
    "Glass Skin",
    "K-Wedding Makeup",
    "이언주",
    "Master Class",
    "São Paulo",
    "VT Cosmetics",
  ],
  openGraph: {
    title: `${eventMeta.title} — São Paulo 2026`,
    description: siteDescription,
    type: "website",
    locale: "ko_KR",
    siteName: eventMeta.title,
    // og:image placeholder — 실제 OG 이미지로 교체 예정
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: eventMeta.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${eventMeta.title} — São Paulo 2026`,
    description: siteDescription,
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
