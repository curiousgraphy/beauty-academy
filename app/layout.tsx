import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site, hero } from "@/lib/data";

// Loaded via next/font so the font URLs respect basePath/assetPrefix
// (a plain @font-face url("/fonts/…") would 404 under the Pages subpath).
const pretendard = localFont({
  src: [
    { path: "../public/fonts/Pretendard-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Pretendard-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Pretendard-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/Pretendard-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/Pretendard-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "../public/fonts/Pretendard-Black.woff2", weight: "900", style: "normal" },
  ],
  display: "swap",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: `${site.brand} New York — ${site.tagline}`,
  description: hero.subtitle,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={pretendard.variable}>
      <body>{children}</body>
    </html>
  );
}
