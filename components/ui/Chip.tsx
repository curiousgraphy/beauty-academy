import type { ReactNode } from "react";

type ChipVariant =
  | "default"
  | "gold"
  | "green"
  | "purple"
  | "steel"
  | "warning";

interface ChipProps {
  children: ReactNode;
  variant?: ChipVariant;
  className?: string;
}

const variantStyles: Record<ChipVariant, string> = {
  default: "border-border bg-card text-muted",
  gold: "border-gold/40 bg-gold/10 text-gold",
  green: "border-session-green/40 bg-session-green/10 text-session-green",
  purple: "border-session-purple/40 bg-session-purple/10 text-session-purple",
  steel: "border-steel/40 bg-steel/10 text-steel",
  warning: "border-red-500/40 bg-red-500/10 text-red-400",
};

export default function Chip({
  children,
  variant = "default",
  className = "",
}: ChipProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wider ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
