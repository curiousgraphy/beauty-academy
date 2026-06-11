import type { ScheduleEntry } from "@/lib/data";

/** Track → accent dot / day-label color. Pro = rose, Youth = ink/mint. */
const trackStyle = {
  pro: { dot: "var(--cbb-pink)", dayColor: "var(--cbb-rose-ink)", chipBg: "var(--cbb-pink-tint)" },
  youth: { dot: "var(--cbb-mint)", dayColor: "var(--cbb-ink)", chipBg: "var(--cbb-mint-tint)" },
};

/**
 * The schedule card on the landing page: a day + time block tied to a venue.
 * Reused by the 2-day schedule grid; the full `Venue` record (address, transit,
 * map link) lives in lib/data for the /pro and /youth detail pages.
 */
export default function VenueCard({ entry }: { entry: ScheduleEntry }) {
  const t = trackStyle[entry.track];

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 24,
        padding: 32,
        boxShadow: "var(--cbb-shadow-sm)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontWeight: 900, fontSize: 13, letterSpacing: ".14em", color: t.dayColor }}>
          {entry.dayLabel}
        </span>
        <span style={{ width: 12, height: 12, borderRadius: 6, background: t.dot }} />
      </div>

      <div style={{ fontWeight: 900, fontSize: 40, letterSpacing: "-.03em", margin: "16px 0 4px" }}>
        {entry.time}
      </div>
      <div style={{ fontWeight: 700, fontSize: 18 }}>{entry.title}</div>
      <div style={{ fontSize: 15, fontWeight: 500, color: "var(--cbb-ink-2)", marginTop: 6 }}>
        {entry.location}
      </div>

      <div style={{ marginTop: 20, display: "flex", gap: 8, flexWrap: "wrap" }}>
        {entry.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--cbb-ink-2)",
              background: t.chipBg,
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
}
