import type { ReactNode } from "react";
import Chip from "./Chip";

interface SectionHeaderProps {
  /** 작은 상단 라벨 (Chip으로 표시) */
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** 정렬 (기본 center) */
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <Chip variant="gold" className="mb-4">
          {eyebrow}
        </Chip>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight text-offwhite sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl font-body text-base text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
