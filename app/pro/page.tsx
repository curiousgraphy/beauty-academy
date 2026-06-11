import type { Metadata } from "next";
import Link from "next/link";
import { proPage } from "@/lib/data";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ImageSlot from "@/components/ImageSlot";
import TicketReserve from "@/components/TicketReserve";

const p = proPage;

export const metadata: Metadata = {
  title: "Pro Masterclass · From Glass Skin to Bridal Mastery — CBB New York",
  description: p.hero.subtitle,
};

function Eyebrow({ children, color = "var(--cbb-grey)" }: { children: React.ReactNode; color?: string }) {
  return (
    <span style={{ fontWeight: 700, fontSize: 12, letterSpacing: ".26em", textTransform: "uppercase", color }}>
      {children}
    </span>
  );
}
function Skew({ children }: { children: React.ReactNode }) {
  return <span style={{ display: "inline-block", transform: "skewX(-9deg)" }}>{children}</span>;
}

const programChip = {
  pink: { background: "var(--cbb-pink-tint)", color: "var(--cbb-rose-ink)" },
  rose: { background: "var(--cbb-rose)", color: "#fff" },
};

export default function ProPage() {
  return (
    <div className="cbb-pro" id="top" style={{ background: "#fff", overflowX: "hidden" }}>
      <Nav active="/pro" badge={p.nav.badge} cta={p.nav.cta} />

      {/* ============ HERO ============ */}
      <section
        data-r="hero"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "68px 32px 60px",
          display: "grid",
          gridTemplateColumns: "1.06fr .94fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div>
          <Eyebrow color="var(--cbb-rose-ink)">{p.hero.eyebrow}</Eyebrow>
          <h1
            style={{
              fontWeight: 900,
              letterSpacing: "-.045em",
              lineHeight: 0.9,
              margin: "20px 0 0",
              fontSize: "clamp(42px,5.8vw,76px)",
            }}
          >
            <Skew>
              {p.hero.titleLine1}
              <br />
              <span style={{ color: "var(--cbb-rose)" }}>{p.hero.titleLine2}</span>
            </Skew>
          </h1>
          <p
            style={{
              fontWeight: 500,
              fontSize: "clamp(17px,1.5vw,21px)",
              lineHeight: 1.5,
              letterSpacing: "-.01em",
              color: "var(--cbb-ink-2)",
              maxWidth: 520,
              margin: "24px 0 0",
            }}
          >
            {p.hero.subtitle}
          </p>
          <div style={{ display: "flex", gap: 9, flexWrap: "wrap", marginTop: 28 }}>
            {p.hero.chips.map((chip) => (
              <span
                key={chip.text}
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: chip.tone === "pink" ? "var(--cbb-rose-ink)" : "var(--cbb-ink-2)",
                  background: chip.tone === "pink" ? "var(--cbb-pink-tint)" : "#F5F5F5",
                  padding: "9px 15px",
                  borderRadius: 999,
                }}
              >
                {chip.text}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 30, flexWrap: "wrap", alignItems: "center" }}>
            <CTA href={p.hero.ctas[0].href} variant="rose" size="lg">
              {p.hero.ctas[0].label}
            </CTA>
            <CTA href={p.hero.ctas[1].href} variant="outline" size="md" style={{ padding: "18px 28px" }}>
              {p.hero.ctas[1].label}
            </CTA>
          </div>
        </div>

        <div data-r="herovisual" style={{ position: "relative" }}>
          <ImageSlot
            src={p.hero.portrait.src}
            placeholder={p.hero.portrait.placeholder}
            radius={28}
            tone="pink"
            style={{ width: "100%", height: "clamp(380px,46vw,540px)" }}
          />
          <div
            style={{
              position: "absolute",
              left: -20,
              top: 34,
              background: "#fff",
              borderRadius: 18,
              boxShadow: "var(--cbb-shadow-md)",
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "var(--cbb-pink)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: 18,
                color: "var(--cbb-rose-ink)",
              }}
            >
              {p.hero.floatA.badge}
            </span>
            <div>
              <div style={{ fontWeight: 800, fontSize: 14 }}>{p.hero.floatA.title}</div>
              <div style={{ fontSize: 12, fontWeight: 500, color: "var(--cbb-grey)" }}>{p.hero.floatA.meta}</div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              right: -16,
              bottom: 40,
              background: "var(--cbb-rose)",
              borderRadius: 16,
              padding: "14px 18px",
              boxShadow: "var(--cbb-shadow-rose)",
            }}
          >
            <div style={{ fontWeight: 900, fontSize: 22, letterSpacing: "-.02em", color: "#fff" }}>
              {p.hero.floatB.value}
            </div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.85)" }}>{p.hero.floatB.label}</div>
          </div>
        </div>
      </section>

      {/* ============ PORTFOLIO STRIP ============ */}
      <section style={{ background: "#fff", padding: "62px 0 6px" }}>
        <div style={{ textAlign: "center", marginBottom: 24, padding: "0 32px" }}>
          <Eyebrow color="var(--cbb-rose-ink)">{p.strip.eyebrow}</Eyebrow>
          <p style={{ fontSize: 13, fontWeight: 500, color: "var(--cbb-grey)", margin: "10px 0 0" }}>
            {p.strip.caption}
          </p>
        </div>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            WebkitMaskImage: "linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)",
            maskImage: "linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)",
          }}
        >
          <div
            className="cbb-marquee-track"
            style={{
              display: "flex",
              gap: 16,
              width: "max-content",
              padding: "4px 8px",
              animation: "cbbmarquee 64s linear infinite",
            }}
          >
            {[...p.strip.frames, ...p.strip.frames].map((f, i) => (
              <ImageSlot
                key={`${f.id}-${i}`}
                src={f.src}
                placeholder={f.placeholder}
                radius={18}
                tone={f.tone}
                style={{ width: 200, height: 280, flex: "none" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROGRAM ============ */}
      <section id="program" style={{ background: "var(--cbb-pink-tint)" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "84px 32px" }}>
          <div style={{ marginBottom: 30 }}>
            <Eyebrow color="var(--cbb-rose-ink)">{p.program.eyebrow}</Eyebrow>
            <h2
              style={{
                fontWeight: 900,
                fontSize: "clamp(28px,3.8vw,48px)",
                lineHeight: 1,
                letterSpacing: "-.04em",
                margin: "14px 0 0",
              }}
            >
              <Skew>{p.program.title}</Skew>
            </h2>
          </div>
          <div style={{ background: "#fff", borderRadius: 24, padding: "8px 34px", boxShadow: "var(--cbb-shadow-sm)" }}>
            {p.program.rows.map((row, i) => (
              <div
                key={row.part}
                data-r="tl"
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
                  gap: 28,
                  padding: "30px 0",
                  borderBottom: i === p.program.rows.length - 1 ? "none" : "1px solid var(--cbb-line)",
                }}
              >
                <div>
                  <div style={{ fontWeight: 900, fontSize: 30, letterSpacing: "-.03em", lineHeight: 1 }}>{row.start}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--cbb-grey)" }}>{row.end}</div>
                  <span
                    style={{
                      display: "inline-block",
                      marginTop: 12,
                      fontSize: 12,
                      fontWeight: 700,
                      padding: "6px 12px",
                      borderRadius: 999,
                      ...programChip[row.durationTone],
                    }}
                  >
                    {row.duration}
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: 11,
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      color: "var(--cbb-rose-ink)",
                    }}
                  >
                    {row.part}
                  </span>
                  <h3 style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-.02em", margin: "8px 0 0" }}>
                    {row.title}
                  </h3>
                  <p style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.55, color: "var(--cbb-ink-2)", margin: "8px 0 0" }}>
                    {row.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BENEFITS ============ */}
      <section id="benefits" style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 32px" }}>
        <div style={{ marginBottom: 38 }}>
          <Eyebrow>{p.benefits.eyebrow}</Eyebrow>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(26px,3vw,40px)",
              lineHeight: 1.05,
              letterSpacing: "-.03em",
              margin: "14px 0 0",
              maxWidth: 620,
            }}
          >
            {p.benefits.title}
          </h2>
        </div>
        <div data-r="benefits" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {p.benefits.cards.map((card) =>
            card.image ? (
              <div
                key={card.title}
                style={{
                  border: "1px solid var(--cbb-line)",
                  borderRadius: 24,
                  padding: 0,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <ImageSlot
                  src={card.image.src}
                  placeholder={card.image.placeholder}
                  radius={0}
                  tone="pink"
                  style={{ width: "100%", height: 120 }}
                />
                <div style={{ padding: "22px 26px 26px" }}>
                  <h3 style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-.02em", margin: 0 }}>{card.title}</h3>
                  <p style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.55, color: "var(--cbb-ink-2)", margin: "8px 0 0" }}>
                    {card.body}
                    {card.note && <span style={{ color: "var(--cbb-grey)" }}>{card.note}</span>}
                  </p>
                </div>
              </div>
            ) : (
              <div
                key={card.title}
                className="cbb-stat-card"
                style={{ border: "1px solid var(--cbb-line)", borderRadius: 24, padding: "28px 26px" }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 13,
                    background: "var(--cbb-pink)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: 20,
                    color: "var(--cbb-rose-ink)",
                  }}
                >
                  {card.icon}
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-.02em", margin: "18px 0 0" }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.55, color: "var(--cbb-ink-2)", margin: "8px 0 0" }}>
                  {card.body}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* ============ TICKETS ============ */}
      <section id="tickets" style={{ background: "var(--cbb-ink)", color: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "88px 32px" }}>
          <div data-r="tickets" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "stretch" }}>
            <div>
              <Eyebrow color="var(--cbb-mint)">{p.tickets.eyebrow}</Eyebrow>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 18 }}>
                <span style={{ fontWeight: 900, fontSize: 72, letterSpacing: "-.04em", lineHeight: 1 }}>
                  {p.tickets.price}
                </span>
                <span style={{ fontSize: 16, fontWeight: 600, color: "rgba(255,255,255,.6)" }}>
                  {p.tickets.priceNote}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 28 }}>
                {p.tickets.eligibility.map((e) => (
                  <div key={e.text} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span
                      style={{
                        color: e.tone === "mint" ? "var(--cbb-mint)" : "var(--cbb-rose)",
                        fontWeight: 900,
                        fontSize: 16,
                        marginTop: 1,
                      }}
                    >
                      {e.mark}
                    </span>
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: 500,
                        color: e.tone === "mint" ? "rgba(255,255,255,.88)" : "rgba(255,255,255,.7)",
                        lineHeight: 1.45,
                      }}
                    >
                      {e.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <TicketReserve data={p.tickets} />
          </div>
        </div>
      </section>

      {/* ============ VENUE ============ */}
      <section id="venue" style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 32px" }}>
        <div style={{ marginBottom: 34 }}>
          <Eyebrow>{p.venue.eyebrow}</Eyebrow>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(26px,3vw,40px)",
              lineHeight: 1.05,
              letterSpacing: "-.03em",
              margin: "14px 0 0",
            }}
          >
            {p.venue.title}
          </h2>
        </div>
        <div data-r="venue" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "start" }}>
          <div style={{ border: "1px solid var(--cbb-line)", borderRadius: 24, padding: 32 }}>
            <div style={{ fontWeight: 900, fontSize: 24, letterSpacing: "-.02em" }}>{p.venue.name}</div>
            <div style={{ fontSize: 15, fontWeight: 500, color: "var(--cbb-ink-2)", marginTop: 6 }}>{p.venue.address}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 24 }}>
              {p.venue.rows.map((r) => (
                <div key={r.label} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--cbb-rose-ink)",
                      minWidth: 74,
                      marginTop: 2,
                    }}
                  >
                    {r.label}
                  </span>
                  <span style={{ fontSize: 14, fontWeight: 500, color: "var(--cbb-ink-2)", lineHeight: 1.5 }}>
                    {r.value}
                  </span>
                </div>
              ))}
            </div>
            <a
              href={p.venue.mapUrl}
              target="_blank"
              rel="noopener"
              className="cbb-btn-outline"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 26,
                fontWeight: 700,
                fontSize: 15,
                color: "var(--cbb-ink)",
                textDecoration: "none",
                padding: "14px 22px",
                borderRadius: 999,
                boxShadow: "inset 0 0 0 1.5px var(--cbb-ink)",
              }}
            >
              {p.venue.mapLabel}
            </a>
          </div>
          <ImageSlot
            src={p.venue.image.src}
            placeholder={p.venue.image.placeholder}
            radius={24}
            tone="pink"
            style={{ width: "100%", height: "100%", minHeight: 340 }}
          />
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" style={{ maxWidth: 840, margin: "0 auto", padding: "40px 32px 88px" }}>
        <div style={{ textAlign: "center", marginBottom: 42 }}>
          <Eyebrow>{p.faq.eyebrow}</Eyebrow>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(26px,3vw,40px)",
              lineHeight: 1.05,
              letterSpacing: "-.03em",
              margin: "14px 0 0",
            }}
          >
            {p.faq.title}
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {p.faq.items.map((item) => (
            <details
              key={item.q}
              style={{ border: "1px solid var(--cbb-line)", borderRadius: 16, overflow: "hidden", background: "#fff" }}
            >
              <summary
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  padding: "22px 24px",
                  fontWeight: 700,
                  fontSize: "clamp(16px,1.6vw,18px)",
                  color: "var(--cbb-ink)",
                }}
              >
                {item.q}
                <span
                  data-faqicon
                  style={{
                    fontSize: 26,
                    fontWeight: 400,
                    lineHeight: 1,
                    color: "var(--cbb-rose)",
                    transition: "transform .18s",
                    flex: "none",
                  }}
                >
                  +
                </span>
              </summary>
              <div
                style={{
                  padding: "0 24px 22px",
                  fontSize: 15,
                  fontWeight: 500,
                  lineHeight: 1.6,
                  color: "var(--cbb-ink-2)",
                }}
              >
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section style={{ background: "var(--cbb-pink)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "88px 32px", textAlign: "center" }}>
          <Eyebrow color="var(--cbb-rose-ink)">{p.finalCta.eyebrow}</Eyebrow>
          <h2
            style={{
              fontWeight: 900,
              fontSize: "clamp(34px,5vw,68px)",
              lineHeight: 0.96,
              letterSpacing: "-.045em",
              margin: "16px 0 0",
              color: "var(--cbb-ink)",
            }}
          >
            <Skew>
              {p.finalCta.titleLine1}
              <br />
              {p.finalCta.titleLine2}
            </Skew>
          </h2>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 34 }}>
            <CTA href={p.finalCta.primary.href} variant="rose" size="lg" style={{ padding: "19px 36px" }}>
              {p.finalCta.primary.label}
            </CTA>
            <Link
              href={p.finalCta.secondary.href}
              className="cbb-chip"
              style={{
                fontWeight: 700,
                fontSize: 17,
                color: "var(--cbb-ink)",
                textDecoration: "none",
                padding: "19px 36px",
                borderRadius: 999,
                background: "#fff",
                boxShadow: "var(--cbb-shadow-sm)",
              }}
            >
              {p.finalCta.secondary.label}
            </Link>
          </div>
          <div style={{ marginTop: 30, fontSize: 14, fontWeight: 600, color: "var(--cbb-rose-ink)" }}>
            {p.finalCta.studentLine.pre}
            <Link href={p.finalCta.studentLine.href} style={{ color: "var(--cbb-ink)", textDecoration: "underline" }}>
              {p.finalCta.studentLine.linkLabel}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
