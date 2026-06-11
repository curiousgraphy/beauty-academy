import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ background: "#fff", borderTop: "1px solid var(--cbb-line)" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
          <span
            style={{
              fontWeight: 900,
              letterSpacing: "-.05em",
              display: "inline-block",
              transform: "skewX(-9deg)",
              fontSize: 28,
              color: "var(--cbb-ink)",
            }}
          >
            {site.brand}
            <span style={{ color: "var(--cbb-rose)" }}>.</span>
          </span>
          <span style={{ width: 1, height: 26, background: "var(--cbb-line)" }} />
          <a
            href={site.colavo.url}
            target="_blank"
            rel="noopener"
            className="cbb-fade"
            style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none" }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "var(--cbb-grey)",
              }}
            >
              Supported by
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/colavo-logo.png" alt={site.colavo.name} style={{ height: 19, width: "auto" }} />
          </a>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 4, textAlign: "right" }}>
          <span style={{ fontSize: 13, fontWeight: 500, color: "var(--cbb-grey)" }}>
            {site.copyright}
          </span>
          <span style={{ fontSize: 13, fontWeight: 500, color: "var(--cbb-grey)" }}>
            {site.locations.join(" · ")}
          </span>
        </div>
      </div>
    </footer>
  );
}
