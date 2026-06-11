import type { Metadata } from "next";
import Link from "next/link";
import { youthPage } from "@/lib/data";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ImageSlot from "@/components/ImageSlot";
import RsvpFlow from "@/components/RsvpFlow";

const y = youthPage;

export const metadata: Metadata = {
  title: "Youth Seminar · Free for students — CBB New York",
  description: y.hero.subtitle,
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

const mintShadow = { boxShadow: "var(--cbb-shadow-mint)" };

export default function YouthPage() {
  return (
    <div className="cbb-youth" id="top" style={{ background: "#fff", overflowX: "hidden" }}>
      <Nav active="/youth" badge={y.nav.badge} cta={y.nav.cta} />

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
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--cbb-mint-deep)",
              background: "var(--cbb-mint-tint)",
              padding: "8px 14px",
              borderRadius: 999,
            }}
          >
            {y.hero.eyebrow}
          </span>
          <h1
            style={{
              fontWeight: 900,
              letterSpacing: "-.045em",
              lineHeight: 0.9,
              margin: "22px 0 0",
              fontSize: "clamp(44px,6vw,80px)",
            }}
          >
            <Skew>
              {y.hero.titleLine1}
              <br />
              {y.hero.titleLine2Pre}
              <span style={{ color: "var(--cbb-rose)" }}>{y.hero.glowWord}</span>
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
            {y.hero.subtitle}
          </p>
          <div style={{ display: "flex", gap: 9, flexWrap: "wrap", marginTop: 28 }}>
            {y.hero.chips.map((chip) => (
              <span
                key={chip.text}
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: chip.tone === "mint" ? "var(--cbb-ink)" : "var(--cbb-ink-2)",
                  background: chip.tone === "mint" ? "var(--cbb-mint)" : "#F5F5F5",
                  padding: "9px 15px",
                  borderRadius: 999,
                }}
              >
                {chip.text}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 30, flexWrap: "wrap", alignItems: "center" }}>
            <CTA href={y.hero.ctas[0].href} variant="mint" size="lg" style={mintShadow}>
              {y.hero.ctas[0].label}
            </CTA>
            <CTA href={y.hero.ctas[1].href} variant="outline" size="md" style={{ padding: "18px 28px" }}>
              {y.hero.ctas[1].label}
            </CTA>
          </div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "var(--cbb-mint-deep)", margin: "18px 0 0" }}>
            {y.hero.note}
          </p>
        </div>

        <div data-r="herovisual" style={{ position: "relative" }}>
          <ImageSlot
            src={y.hero.portrait.src}
            placeholder={y.hero.portrait.placeholder}
            radius={28}
            tone="mint"
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
                background: "var(--cbb-mint)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: 16,
                color: "var(--cbb-ink)",
              }}
            >
              {y.hero.floatA.badge}
            </span>
            <div>
              <div style={{ fontWeight: 800, fontSize: 14 }}>{y.hero.floatA.title}</div>
              <div style={{ fontSize: 12, fontWeight: 500, color: "var(--cbb-grey)" }}>{y.hero.floatA.meta}</div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              right: -16,
              bottom: 40,
              background: "var(--cbb-ink)",
              borderRadius: 16,
              padding: "14px 18px",
              boxShadow: "var(--cbb-shadow-md)",
            }}
          >
            <div style={{ fontWeight: 900, fontSize: 22, letterSpacing: "-.02em", color: "#fff" }}>
              {y.hero.floatB.value}
            </div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "var(--cbb-mint)" }}>{y.hero.floatB.label}</div>
          </div>
        </div>
      </section>

      {/* ============ PORTFOLIO STRIP ============ */}
      <section style={{ background: "#fff", padding: "62px 0 6px" }}>
        <div style={{ textAlign: "center", marginBottom: 24, padding: "0 32px" }}>
          <Eyebrow color="var(--cbb-mint-deep)">{y.strip.eyebrow}</Eyebrow>
          <p style={{ fontSize: 13, fontWeight: 500, color: "var(--cbb-grey)", margin: "10px 0 0" }}>
            {y.strip.caption}
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
            {[...y.strip.frames, ...y.strip.frames].map((f, i) => (
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
      <section id="program" style={{ background: "var(--cbb-mint-tint)" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "84px 32px" }}>
          <div style={{ marginBottom: 30 }}>
            <Eyebrow color="var(--cbb-mint-deep)">{y.program.eyebrow}</Eyebrow>
            <h2
              style={{
                fontWeight: 900,
                fontSize: "clamp(28px,3.8vw,48px)",
                lineHeight: 1,
                letterSpacing: "-.04em",
                margin: "14px 0 0",
              }}
            >
              <Skew>{y.program.title}</Skew>
            </h2>
          </div>
          <div style={{ background: "#fff", borderRadius: 24, padding: "8px 34px", boxShadow: "var(--cbb-shadow-sm)" }}>
            {y.program.rows.map((row, i) => (
              <div
                key={row.part}
                data-r="tl"
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
                  gap: 28,
                  padding: "30px 0",
                  borderBottom: i === y.program.rows.length - 1 ? "none" : "1px solid var(--cbb-line)",
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
                      color: "var(--cbb-ink)",
                      background: "var(--cbb-mint)",
                      padding: "6px 12px",
                      borderRadius: 999,
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
                      color: "var(--cbb-mint-deep)",
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

      {/* ============ WHY FREE ============ */}
      <section id="why" style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 32px" }}>
        <div style={{ maxWidth: 680, marginBottom: 42 }}>
          <Eyebrow color="var(--cbb-mint-deep)">{y.why.eyebrow}</Eyebrow>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(26px,3.2vw,42px)",
              lineHeight: 1.04,
              letterSpacing: "-.03em",
              margin: "14px 0 0",
            }}
          >
            {y.why.title}
          </h2>
          <p style={{ fontSize: 17, fontWeight: 500, lineHeight: 1.55, color: "var(--cbb-ink-2)", margin: "18px 0 0" }}>
            {y.why.intro}
          </p>
        </div>
        <div data-r="why" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {y.why.cards.map((card) => (
            <div
              key={card.title}
              style={{
                background: card.dark ? "var(--cbb-ink)" : "var(--cbb-mint-tint)",
                borderRadius: 24,
                padding: "28px 26px",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 13,
                  background: "var(--cbb-mint)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: 18,
                  color: "var(--cbb-ink)",
                }}
              >
                {card.icon}
              </div>
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: 18,
                  letterSpacing: "-.02em",
                  margin: "18px 0 0",
                  color: card.dark ? "#fff" : "var(--cbb-ink)",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  lineHeight: 1.55,
                  color: card.dark ? "rgba(255,255,255,.72)" : "var(--cbb-ink-2)",
                  margin: "8px 0 0",
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ RSVP — 4-STEP GUARDIAN CONSENT FLOW ============ */}
      <section id="rsvp" style={{ background: "var(--cbb-mint)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "84px 32px" }}>
          <div
            data-r="rsvpgrid"
            style={{ display: "grid", gridTemplateColumns: ".82fr 1.18fr", gap: 40, alignItems: "start" }}
          >
            {/* left rail */}
            <div>
              <Eyebrow color="var(--cbb-mint-deep)">{y.rsvp.eyebrow}</Eyebrow>
              <h2
                style={{
                  fontWeight: 900,
                  fontSize: "clamp(28px,3.6vw,46px)",
                  lineHeight: 0.98,
                  letterSpacing: "-.04em",
                  margin: "14px 0 0",
                }}
              >
                <Skew>{y.rsvp.title}</Skew>
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.55, color: "var(--cbb-ink-2)", margin: "16px 0 0" }}>
                {y.rsvp.intro}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 26,
                  background: "#fff",
                  borderRadius: 16,
                  padding: "16px 18px",
                  boxShadow: "var(--cbb-shadow-sm)",
                }}
              >
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "var(--cbb-mint-tint)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    color: "var(--cbb-mint-deep)",
                  }}
                >
                  {y.rsvp.seatsLeft}
                </span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14 }}>seats left of 30</div>
                  <div style={{ fontSize: 12, fontWeight: 500, color: "var(--cbb-grey)" }}>{y.rsvp.seatsNote}</div>
                </div>
              </div>
            </div>

            {/* right card (interactive) */}
            <RsvpFlow data={y.rsvp} />
          </div>
        </div>
      </section>

      {/* ============ VENUE ============ */}
      <section id="venue" style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 32px" }}>
        <div style={{ marginBottom: 34 }}>
          <Eyebrow>{y.venue.eyebrow}</Eyebrow>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(26px,3vw,40px)",
              lineHeight: 1.05,
              letterSpacing: "-.03em",
              margin: "14px 0 0",
            }}
          >
            {y.venue.title}
          </h2>
        </div>
        <div data-r="venue" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "start" }}>
          <div style={{ border: "1px solid var(--cbb-line)", borderRadius: 24, padding: 32 }}>
            <div style={{ fontWeight: 900, fontSize: 24, letterSpacing: "-.02em" }}>{y.venue.name}</div>
            <div style={{ fontSize: 15, fontWeight: 500, color: "var(--cbb-ink-2)", marginTop: 6 }}>{y.venue.address}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 24 }}>
              {y.venue.rows.map((r) => (
                <div key={r.label} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--cbb-mint-deep)",
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
              href={y.venue.mapUrl}
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
              {y.venue.mapLabel}
            </a>
          </div>
          <ImageSlot
            src={y.venue.image.src}
            placeholder={y.venue.image.placeholder}
            radius={24}
            tone="mint"
            style={{ width: "100%", height: "100%", minHeight: 340 }}
          />
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" style={{ maxWidth: 840, margin: "0 auto", padding: "40px 32px 88px" }}>
        <div style={{ textAlign: "center", marginBottom: 42 }}>
          <Eyebrow>{y.faq.eyebrow}</Eyebrow>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(26px,3vw,40px)",
              lineHeight: 1.05,
              letterSpacing: "-.03em",
              margin: "14px 0 0",
            }}
          >
            {y.faq.title}
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {y.faq.items.map((item) => (
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
                    color: "var(--cbb-mint-deep)",
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
      <section style={{ background: "var(--cbb-ink)", color: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "88px 32px", textAlign: "center" }}>
          <Eyebrow color="var(--cbb-mint)">{y.finalCta.eyebrow}</Eyebrow>
          <h2
            style={{
              fontWeight: 900,
              fontSize: "clamp(34px,5vw,68px)",
              lineHeight: 0.96,
              letterSpacing: "-.045em",
              margin: "16px 0 0",
              color: "#fff",
            }}
          >
            <Skew>
              {y.finalCta.titlePre}
              <span style={{ color: "var(--cbb-mint)" }}>{y.finalCta.titleAccent}</span>
            </Skew>
          </h2>
          <p
            style={{
              fontWeight: 500,
              fontSize: 18,
              lineHeight: 1.5,
              color: "rgba(255,255,255,.7)",
              margin: "20px auto 0",
              maxWidth: 460,
            }}
          >
            {y.finalCta.subtitle}
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
            <CTA href={y.finalCta.primary.href} variant="mint" size="lg" style={{ padding: "19px 36px", ...mintShadow }}>
              {y.finalCta.primary.label}
            </CTA>
            <Link
              href={y.finalCta.secondary.href}
              className="cbb-btn-ghost"
              style={{
                fontWeight: 700,
                fontSize: 17,
                color: "#fff",
                textDecoration: "none",
                padding: "19px 36px",
                borderRadius: 999,
                boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,.4)",
              }}
            >
              {y.finalCta.secondary.label}
            </Link>
          </div>
          <div style={{ marginTop: 28, fontSize: 14, fontWeight: 600, color: "var(--cbb-mint)" }}>
            {y.finalCta.proLine.pre}
            <Link href={y.finalCta.proLine.href} style={{ color: "#fff", textDecoration: "underline" }}>
              {y.finalCta.proLine.linkLabel}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
