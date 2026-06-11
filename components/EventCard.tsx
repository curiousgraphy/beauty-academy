import Link from "next/link";
import type { EventInfo } from "@/lib/data";
import CTA from "./CTA";

/** Track → header band + CTA treatment. Pro = pink/rose, Youth = mint. */
const trackStyle = {
  pro: {
    headerBg: "var(--cbb-pink)",
    dateColor: "var(--cbb-rose-ink)",
    ctaVariant: "rose" as const,
  },
  youth: {
    headerBg: "var(--cbb-mint)",
    dateColor: "var(--cbb-ink)",
    ctaVariant: "mint" as const,
  },
};

export default function EventCard({ event }: { event: EventInfo }) {
  const t = trackStyle[event.track];

  return (
    <Link
      href={event.href}
      className="cbb-event-card"
      style={{
        textDecoration: "none",
        color: "inherit",
        background: "#fff",
        borderRadius: 28,
        overflow: "hidden",
        display: "block",
      }}
    >
      <div
        style={{
          background: t.headerBg,
          padding: "26px 30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontWeight: 900, fontSize: 14, letterSpacing: ".06em", color: t.dateColor }}>
          {event.dateLabel}
        </span>
        <span
          style={{
            fontWeight: 800,
            fontSize: 12,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            background: "var(--cbb-ink)",
            color: "#fff",
            padding: "7px 13px",
            borderRadius: 999,
          }}
        >
          {event.audienceBadge}
        </span>
      </div>

      <div style={{ padding: 30 }}>
        <h3
          style={{
            fontWeight: 900,
            fontSize: 30,
            letterSpacing: "-.035em",
            lineHeight: 1.02,
            margin: 0,
            color: "var(--cbb-ink)",
          }}
        >
          {event.title}
        </h3>
        <p
          style={{
            fontWeight: 600,
            fontSize: 18,
            color: "var(--cbb-ink-2)",
            margin: "10px 0 0",
            lineHeight: 1.35,
          }}
        >
          {event.tagline}
        </p>

        {event.highlight && (
          <p
            style={{
              fontSize: 13.5,
              fontWeight: 600,
              color: "var(--cbb-ink)",
              margin: "14px 0 0",
              lineHeight: 1.45,
              background: "var(--cbb-mint-tint)",
              padding: "11px 14px",
              borderRadius: 12,
            }}
          >
            {event.highlight}
          </p>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 12, margin: "24px 0 26px" }}>
          {event.details.map((d, i) => {
            const last = i === event.details.length - 1;
            return (
              <div
                key={d.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: last ? "none" : "1px solid var(--cbb-line)",
                  paddingBottom: last ? 0 : 12,
                }}
              >
                <span style={{ fontSize: 14, color: "var(--cbb-grey)", fontWeight: 500 }}>
                  {d.label}
                </span>
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: d.accent ? "var(--cbb-rose-ink)" : "var(--cbb-ink)",
                  }}
                >
                  {d.value}
                </span>
              </div>
            );
          })}
        </div>

        <CTA href={event.href} as="span" variant={t.ctaVariant} size="md">
          {event.cta.label}
        </CTA>
      </div>
    </Link>
  );
}
