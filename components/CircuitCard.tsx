import type { CircuitStop } from "@/lib/data";
import CTA from "./CTA";

const kickerColor = { grey: "var(--cbb-grey)", rose: "var(--cbb-rose-ink)" };
const dotColor = { ink: "var(--cbb-ink)", rose: "var(--cbb-rose)" };
const whenColor = { ink2: "var(--cbb-ink-2)", rose: "var(--cbb-rose-ink)" };

const variantStyle = {
  plain: { border: "1px solid var(--cbb-line)" },
  pink: { border: "1px solid var(--cbb-line)", background: "var(--cbb-pink-tint)" },
  highlight: { border: "2px solid var(--cbb-rose)", boxShadow: "var(--cbb-shadow-rose)" },
};

export default function CircuitCard({ stop }: { stop: CircuitStop }) {
  return (
    <div
      style={{
        borderRadius: 24,
        padding: "30px 28px",
        position: "relative",
        ...variantStyle[stop.variant],
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span
          style={{
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: ".16em",
            textTransform: "uppercase",
            color: kickerColor[stop.kickerTone],
          }}
        >
          {stop.kicker}
        </span>
        <span style={{ width: 11, height: 11, borderRadius: 6, background: dotColor[stop.dot] }} />
      </div>

      <div style={{ fontWeight: 900, fontSize: 30, letterSpacing: "-.03em", margin: "14px 0 0" }}>
        {stop.city}
      </div>
      <div style={{ fontSize: 14, fontWeight: 600, color: whenColor[stop.whenTone], marginTop: 4 }}>
        {stop.when}
      </div>
      <p
        style={{
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.5,
          color: stop.variant === "plain" ? "var(--cbb-grey)" : "var(--cbb-ink-2)",
          margin: "14px 0 0",
        }}
      >
        {stop.body}
      </p>

      {stop.cta && (
        <CTA
          href={stop.cta.href}
          variant="rose"
          size="md"
          style={{ marginTop: 18, fontSize: 14, padding: "12px 20px", boxShadow: "none" }}
        >
          {stop.cta.label}
        </CTA>
      )}
    </div>
  );
}
