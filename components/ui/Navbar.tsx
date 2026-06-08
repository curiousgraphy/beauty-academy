"use client";

import { useEffect, useState } from "react";
import { eventMeta } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="font-display text-xl font-bold tracking-tight text-offwhite"
        >
          CBB
        </a>
        <a
          href={eventMeta.registerUrl}
          className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-wider text-background transition-colors hover:bg-gold/90"
        >
          신청하기
        </a>
      </nav>
    </header>
  );
}
