import type { AmbassadorCard as AmbassadorCardData } from "@/lib/data";
import ImageSlot from "./ImageSlot";

const specialtyColor = {
  pink: "var(--cbb-rose-ink)",
  mint: "var(--cbb-mint-deep)",
};

const pillStyle = {
  pink: { background: "var(--cbb-pink-tint)", color: "var(--cbb-ink)" },
  grey: { background: "#F5F5F5", color: "var(--cbb-ink-2)" },
};

export default function AmbassadorCard({ card }: { card: AmbassadorCardData }) {
  return (
    <div
      className={card.highlighted ? undefined : "cbb-hover-md"}
      style={{
        background: "#fff",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: card.highlighted ? "var(--cbb-shadow-md)" : "var(--cbb-shadow-sm)",
        border: card.highlighted ? "2px solid var(--cbb-rose)" : undefined,
      }}
    >
      <div style={{ position: "relative" }}>
        <ImageSlot
          src={card.image.src}
          placeholder={card.image.placeholder}
          radius={0}
          tone={card.image.tone}
          style={{ width: "100%", height: 230 }}
        />
        {card.topBadge && (
          <span
            style={{
              position: "absolute",
              top: 14,
              left: 14,
              fontWeight: 800,
              fontSize: 11,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              background: "var(--cbb-rose)",
              color: "#fff",
              padding: "7px 12px",
              borderRadius: 999,
              boxShadow: "var(--cbb-shadow-rose)",
            }}
          >
            {card.topBadge}
          </span>
        )}
      </div>

      <div style={{ padding: "22px 24px 26px" }}>
        <div style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-.02em" }}>{card.name}</div>
        <div style={{ fontSize: 13, fontWeight: 600, color: specialtyColor[card.specialtyTrack], marginTop: 4 }}>
          {card.specialty}
        </div>
        <div style={{ fontSize: 13, fontWeight: 500, color: "var(--cbb-grey)", marginTop: 10 }}>
          {card.salon}
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            marginTop: 14,
            fontSize: 12,
            fontWeight: 700,
            padding: "7px 12px",
            borderRadius: 999,
            ...pillStyle[card.pill.tone],
          }}
        >
          {card.pill.text}
        </div>
      </div>
    </div>
  );
}
