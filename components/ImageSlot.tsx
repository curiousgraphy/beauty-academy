import type { CSSProperties } from "react";

/**
 * Mirrors the prototype's <image-slot>: a droppable image area that renders the
 * real image when a `src` is provided, otherwise a labelled placeholder.
 */
export interface ImageSlotProps {
  src?: string | null;
  alt?: string;
  placeholder?: string;
  radius?: number;
  fit?: "cover" | "contain";
  /** Background tone for the empty placeholder. */
  tone?: "grey" | "mint" | "pink";
  style?: CSSProperties;
}

const tones: Record<NonNullable<ImageSlotProps["tone"]>, string> = {
  grey: "#F4F4F4",
  mint: "var(--cbb-mint-tint)",
  pink: "var(--cbb-pink-tint)",
};

export default function ImageSlot({
  src,
  alt = "",
  placeholder = "Drop image",
  radius = 28,
  fit = "cover",
  tone = "grey",
  style,
}: ImageSlotProps) {
  const box: CSSProperties = {
    display: "block",
    borderRadius: radius,
    overflow: "hidden",
    ...style,
  };

  if (src) {
    // Absolutely-positioned image so it fills the box without contributing
    // height — keeps `aspect-ratio`-sized slots correct across browsers
    // (Safari/Firefox don't resolve `height:100%` against an aspect-ratio height).
    return (
      <div style={{ ...box, position: "relative" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: fit, display: "block" }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        ...box,
        background: tones[tone],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <span
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "var(--cbb-grey)",
          textAlign: "center",
          lineHeight: 1.5,
        }}
      >
        {placeholder}
      </span>
    </div>
  );
}
