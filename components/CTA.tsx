import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

export type CTAVariant = "rose" | "mint" | "outline";
export type CTASize = "md" | "lg";

const base: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  fontWeight: 700,
  textDecoration: "none",
  borderRadius: 999,
  whiteSpace: "nowrap",
};

const sizes: Record<CTASize, CSSProperties> = {
  md: { fontSize: 16, padding: "15px 26px" },
  lg: { fontSize: 17, padding: "19px 34px" },
};

const variants: Record<CTAVariant, CSSProperties> = {
  rose: {
    color: "#fff",
    background: "var(--cbb-rose)",
    boxShadow: "var(--cbb-shadow-rose)",
  },
  mint: { color: "var(--cbb-ink)", background: "var(--cbb-mint)" },
  outline: {
    color: "var(--cbb-ink)",
    background: "transparent",
    boxShadow: "inset 0 0 0 1.5px var(--cbb-ink)",
  },
};

export interface CTAProps {
  href: string;
  children: ReactNode;
  variant?: CTAVariant;
  size?: CTASize;
  /** Render as a non-link visual element (e.g. inside a card that is itself a link). */
  as?: "link" | "span";
  style?: CSSProperties;
  className?: string;
}

export default function CTA({
  href,
  children,
  variant = "rose",
  size = "lg",
  as = "link",
  style,
  className,
}: CTAProps) {
  const cls = `cbb-btn-${variant}${className ? ` ${className}` : ""}`;
  const css: CSSProperties = { ...base, ...sizes[size], ...variants[variant], ...style };

  if (as === "span") {
    return (
      <span className={cls} style={css}>
        {children}
      </span>
    );
  }
  return (
    <Link href={href} className={cls} style={css}>
      {children}
    </Link>
  );
}
