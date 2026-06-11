import type { CraftItem } from "@/lib/data";
import ImageSlot from "./ImageSlot";

/** pink = makeup/bridal, mint = hair/business. */
const track = {
  pink: {
    num: "var(--cbb-pink)",
    kicker: "var(--cbb-rose-ink)",
    tagColor: "var(--cbb-rose-ink)",
    tagBg: "var(--cbb-pink-tint)",
    imgTone: "pink" as const,
  },
  mint: {
    num: "var(--cbb-mint)",
    kicker: "var(--cbb-mint-deep)",
    tagColor: "var(--cbb-mint-deep)",
    tagBg: "var(--cbb-mint-tint)",
    imgTone: "mint" as const,
  },
};

export default function CraftRow({ item }: { item: CraftItem }) {
  const t = track[item.track];

  const copy = (
    <div key="copy">
      <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
        <span style={{ fontWeight: 900, fontSize: 46, letterSpacing: "-.04em", color: t.num }}>
          {item.num}
        </span>
        <span
          style={{
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: t.kicker,
          }}
        >
          {item.kicker}
        </span>
      </div>
      <h3
        style={{
          fontWeight: 900,
          fontSize: "clamp(24px,2.6vw,34px)",
          letterSpacing: "-.03em",
          lineHeight: 1.02,
          margin: "12px 0 0",
        }}
      >
        {item.title}
      </h3>
      <p style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.6, color: "var(--cbb-ink-2)", margin: "14px 0 0" }}>
        {item.body}
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 20 }}>
        {item.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 12.5,
              fontWeight: 600,
              color: t.tagColor,
              background: t.tagBg,
              padding: "7px 13px",
              borderRadius: 999,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  const img = (
    <div key="img" data-r="techimg">
      <ImageSlot
        src={item.image.src}
        placeholder={item.image.placeholder}
        radius={24}
        tone={t.imgTone}
        style={{ width: "100%", aspectRatio: "5/4" }}
      />
    </div>
  );

  return (
    <div
      data-r="tech"
      data-flip={item.flip ? "1" : "0"}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 48,
        alignItems: "center",
        marginBottom: 64,
      }}
    >
      {item.flip ? [img, copy] : [copy, img]}
    </div>
  );
}
