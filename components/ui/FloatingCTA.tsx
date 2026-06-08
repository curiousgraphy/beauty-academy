"use client";

import { useEffect, useState } from "react";
import { eventMeta } from "@/lib/data";

/** 스크롤 100px 이후 우측 하단에 등장하는 floating CTA. */
export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={eventMeta.registerUrl}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full bg-gold px-6 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-background shadow-[0_8px_30px_-6px_rgba(201,169,110,0.6)] transition-all duration-300 hover:bg-gold/90 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      지금 신청하기
    </a>
  );
}
