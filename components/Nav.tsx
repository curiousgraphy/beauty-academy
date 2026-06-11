"use client";

import { useState } from "react";
import Link from "next/link";
import { nav, site, type NavLink as NavLinkType } from "@/lib/data";
import CTA from "./CTA";

function Wordmark({ size = 28 }: { size?: number }) {
  return (
    <span
      style={{
        fontWeight: 900,
        letterSpacing: "-.05em",
        display: "inline-block",
        transform: "skewX(-9deg)",
        fontSize: size,
        color: "var(--cbb-ink)",
      }}
    >
      {site.brand}
      <span style={{ color: "var(--cbb-rose)" }}>.</span>
    </span>
  );
}

export interface NavBadge {
  text: string;
  /** pill color: ink (dark/white), mint (mint/ink), pink (pink/rose-ink). */
  tone?: "ink" | "mint" | "pink";
}

const badgeTone = {
  ink: { background: "var(--cbb-ink)", color: "#fff" },
  mint: { background: "var(--cbb-mint)", color: "var(--cbb-ink)" },
  pink: { background: "var(--cbb-pink)", color: "var(--cbb-rose-ink)" },
};

export interface NavCta extends NavLinkType {
  variant?: "rose" | "mint";
}

export interface NavProps {
  /** href of the current page, used to highlight the matching nav link. */
  active?: string;
  /** Optional pill rendered beside the wordmark (e.g. "Ambassadors"). */
  badge?: NavBadge;
  /** Override the default "Get tickets" CTA. */
  cta?: NavCta;
}

export default function Nav({ active = "/", badge, cta = nav.cta }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const ctaVariant = cta.variant ?? "rose";
  const ctaShadow = ctaVariant === "mint" ? "var(--cbb-shadow-mint)" : undefined;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,.86)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--cbb-line)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          height: 72,
          display: "flex",
          alignItems: "center",
          gap: 30,
        }}
      >
        <Link
          href="/"
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}
        >
          <Wordmark />
          {badge && (
            <span
              style={{
                fontWeight: 800,
                fontSize: 12,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                ...badgeTone[badge.tone ?? "ink"],
                padding: "6px 11px",
                borderRadius: 999,
              }}
            >
              {badge.text}
            </span>
          )}
        </Link>

        <nav
          data-r="navlinks"
          style={{ display: "flex", gap: 22, marginLeft: 8, alignItems: "center" }}
        >
          {nav.links.map((link) => {
            const isActive = link.href === active;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? undefined : "cbb-navlink"}
                style={{
                  fontSize: 15,
                  fontWeight: isActive ? 700 : 600,
                  color: "var(--cbb-ink)",
                  textDecoration: "none",
                  opacity: isActive ? 1 : 0.55,
                  padding: "4px 0",
                  borderBottom: `2px solid ${isActive ? "var(--cbb-rose)" : "transparent"}`,
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ flex: 1 }} />

        <div data-r="navcta" style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <CTA
            href={cta.href}
            variant={ctaVariant}
            size="md"
            style={{ fontSize: 14, padding: "11px 20px", boxShadow: ctaShadow }}
          >
            {cta.label}
          </CTA>
        </div>

        <button
          data-r="hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 42,
            height: 42,
            borderRadius: 12,
            border: "1px solid var(--cbb-line)",
            background: "#fff",
            cursor: "pointer",
            fontSize: 20,
            color: "var(--cbb-ink)",
          }}
        >
          ≡
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            borderTop: "1px solid var(--cbb-line)",
            background: "#fff",
            padding: "12px 18px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {nav.links.map((link) => {
            const isActive = link.href === active;
            if (isActive) {
              return (
                <span
                  key={link.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    padding: "15px 16px",
                    borderRadius: 14,
                    fontSize: 17,
                    fontWeight: 800,
                    color: "var(--cbb-ink)",
                    background: "#F6F6F6",
                  }}
                >
                  {link.label}
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      color: "var(--cbb-rose-ink)",
                    }}
                  >
                    You&apos;re here
                  </span>
                </span>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  padding: "15px 16px",
                  borderRadius: 14,
                  fontSize: 17,
                  fontWeight: 600,
                  color: "var(--cbb-ink)",
                  textDecoration: "none",
                }}
              >
                {link.label}
                <span style={{ fontSize: 13, fontWeight: 700, color: "var(--cbb-grey)" }}>→</span>
              </Link>
            );
          })}
          <Link
            href={cta.href}
            onClick={() => setMenuOpen(false)}
            style={{
              textAlign: "center",
              fontSize: 15,
              fontWeight: 700,
              color: ctaVariant === "mint" ? "var(--cbb-ink)" : "#fff",
              textDecoration: "none",
              padding: 15,
              borderRadius: 999,
              background: ctaVariant === "mint" ? "var(--cbb-mint)" : "var(--cbb-rose)",
              marginTop: 14,
            }}
          >
            {cta.label}
          </Link>
        </div>
      )}
    </header>
  );
}
