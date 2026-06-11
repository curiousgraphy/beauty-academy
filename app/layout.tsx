import type { Metadata } from "next";
import "./globals.css";
import { site, hero } from "@/lib/data";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
