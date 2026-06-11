import type { Metadata } from "next";
import { masterPage } from "@/lib/data";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ImageSlot from "@/components/ImageSlot";
import CraftRow from "@/components/CraftRow";
import AmbassadorCard from "@/components/AmbassadorCard";
import CircuitCard from "@/components/CircuitCard";

const m = masterPage;

export const metadata: Metadata = {
  title: "Eonju Lee · CBB Global Ambassador — CBB New York",
  description: m.hero.bio,
};

/* page-local typography helpers (shared visual idiom across pages) */
function Eyebrow({ children, color = "var(--cbb-grey)" }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      style={{ fontWeight: 700, fontSize: 12, letterSpacing: ".26em", textTransform: "uppercase", color }}
    >
      {children}
    </span>
  );
}
function Skew({ children }: { children: React.ReactNode }) {
  return <span style={{ display: "inline-block", transform: "skewX(-9deg)" }}>{children}</span>;
}

const segmentColor = {
  default: "#fff",
  mint: "var(--cbb-mint)",
  muted: "rgba(255,255,255,.62)",
};

export default function MasterPage() {
  return (
    <div className="cbb-master" id="top" style={{ background: "#fff", overflowX: "hidden" }}>
      <Nav active="/master" badge={m.nav.badge} cta={m.nav.cta} />

      {/* ============ HERO ============ */}
      <section
        data-r="mhero"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "64px 32px 56px",
          display: "grid",
          gridTemplateColumns: "1.04fr .96fr",
          gap: 60,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--cbb-rose-ink)",
              background: "var(--cbb-pink-tint)",
              padding: "8px 14px",
              borderRadius: 999,
            }}
          >
            {m.hero.badge}
          </div>
          <h1
            style={{
              fontWeight: 900,
              letterSpacing: "-.045em",
              lineHeight: 0.92,
              margin: "22px 0 0",
              fontSize: "clamp(48px,7vw,92px)",
            }}
          >
            <Skew>
              {m.hero.nameLine1}
              <br />
              {m.hero.nameLine2}
              <span style={{ color: "var(--cbb-rose)" }}>.</span>
            </Skew>
          </h1>
          <p
            style={{
              fontWeight: 600,
              fontSize: "clamp(17px,1.6vw,22px)",
              lineHeight: 1.4,
              letterSpacing: "-.01em",
              color: "var(--cbb-ink)",
              margin: "22px 0 0",
            }}
          >
            {m.hero.role}
          </p>
          <p
            style={{
              fontWeight: 500,
              fontSize: 16,
              lineHeight: 1.55,
              color: "var(--cbb-ink-2)",
              maxWidth: 480,
              margin: "12px 0 0",
            }}
          >
            {m.hero.bio}
          </p>
          <div style={{ display: "flex", gap: 9, flexWrap: "wrap", marginTop: 26 }}>
            {m.hero.chips.map((chip) => (
              <span
                key={chip}
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--cbb-ink-2)",
                  background: "#F5F5F5",
                  padding: "9px 15px",
                  borderRadius: 999,
                }}
              >
                {chip}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap", alignItems: "center" }}>
            <CTA href={m.hero.ctas[0].href} variant="rose" size="lg" style={{ padding: "18px 32px" }}>
              {m.hero.ctas[0].label}
            </CTA>
            <CTA href={m.hero.ctas[1].href} variant="outline" size="md" style={{ padding: "17px 26px" }}>
              {m.hero.ctas[1].label}
            </CTA>
          </div>
        </div>

        <div data-r="mherovisual" style={{ position: "relative" }}>
          <ImageSlot
            src={m.hero.portrait.src}
            placeholder={m.hero.portrait.placeholder}
            radius={28}
            tone="pink"
            style={{ width: "100%", aspectRatio: "4/5" }}
          />
          <div
            style={{
              position: "absolute",
              left: -22,
              bottom: 42,
              background: "#fff",
              borderRadius: 18,
              boxShadow: "var(--cbb-shadow-md)",
              padding: "16px 20px",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: 10,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "var(--cbb-grey)",
              }}
            >
              {m.hero.tourCard.kicker}
            </div>
            <div style={{ fontWeight: 900, fontSize: 18, letterSpacing: "-.02em", marginTop: 4 }}>
              {m.hero.tourCard.pre}
              <span style={{ color: "var(--cbb-rose)" }}>{m.hero.tourCard.accent}</span>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              right: -16,
              top: 30,
              background: "var(--cbb-ink)",
              color: "#fff",
              borderRadius: 16,
              padding: "14px 18px",
              transform: "skewX(-9deg)",
            }}
          >
            <span
              style={{
                display: "inline-block",
                transform: "skewX(9deg)",
                fontWeight: 900,
                fontSize: 13,
                letterSpacing: ".05em",
              }}
            >
              {m.hero.rankCard}
            </span>
          </div>
        </div>
      </section>

      {/* ============ AMBASSADOR STATEMENT ============ */}
      <section style={{ background: "var(--cbb-ink)", color: "#fff" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "74px 32px", textAlign: "center" }}>
          <Eyebrow color="var(--cbb-mint)">{m.statement.eyebrow}</Eyebrow>
          <p
            style={{
              fontWeight: 800,
              fontSize: "clamp(22px,2.8vw,34px)",
              lineHeight: 1.3,
              letterSpacing: "-.025em",
              margin: "22px 0 0",
              color: "#fff",
            }}
          >
            {m.statement.segments.map((seg, i) => (
              <span key={i} style={{ color: segmentColor[seg.tone] }}>
                {seg.text}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* ============ SIGNATURE CRAFT ============ */}
      <section id="craft" style={{ maxWidth: 1200, margin: "0 auto", padding: "90px 32px 30px" }}>
        <div style={{ maxWidth: 640, marginBottom: 54 }}>
          <Eyebrow>{m.craft.eyebrow}</Eyebrow>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(28px,3.4vw,46px)",
              lineHeight: 1.04,
              letterSpacing: "-.03em",
              margin: "14px 0 0",
            }}
          >
            {m.craft.title}
          </h2>
          <p style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.55, color: "var(--cbb-ink-2)", margin: "16px 0 0" }}>
            {m.craft.intro}
          </p>
        </div>
        {m.craft.items.map((item) => (
          <CraftRow key={item.num} item={item} />
        ))}
      </section>

      {/* ============ THE COLLECTIVE ============ */}
      <section id="collective" style={{ background: "var(--cbb-mint-tint)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "90px 32px" }}>
          <div style={{ maxWidth: 680, marginBottom: 48 }}>
            <Eyebrow color="var(--cbb-mint-deep)">{m.collective.eyebrow}</Eyebrow>
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(28px,3.4vw,46px)",
                lineHeight: 1.04,
                letterSpacing: "-.03em",
                margin: "14px 0 0",
              }}
            >
              {m.collective.title}
            </h2>
            <p style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.6, color: "var(--cbb-ink-2)", margin: "16px 0 0" }}>
              {m.collective.introPre}
              <strong style={{ color: "var(--cbb-ink)" }}>{m.collective.introStrong}</strong>
              {m.collective.introPost}
            </p>
          </div>
          <div data-r="roster" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {m.collective.roster.map((card) => (
              <AmbassadorCard key={card.name} card={card} />
            ))}
          </div>
          <p style={{ fontSize: 13, fontWeight: 500, color: "var(--cbb-grey)", margin: "24px 0 0", textAlign: "center" }}>
            {m.collective.footnote}
          </p>
        </div>
      </section>

      {/* ============ WORLD TOUR / CIRCUIT ============ */}
      <section id="circuit" style={{ maxWidth: 1200, margin: "0 auto", padding: "90px 32px" }}>
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 50px" }}>
          <Eyebrow>{m.circuit.eyebrow}</Eyebrow>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(28px,3.4vw,46px)",
              lineHeight: 1.04,
              letterSpacing: "-.03em",
              margin: "14px 0 0",
            }}
          >
            {m.circuit.title}
          </h2>
          <p style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.55, color: "var(--cbb-ink-2)", margin: "16px 0 0" }}>
            {m.circuit.intro}
          </p>
        </div>
        <div data-r="circuit" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {m.circuit.stops.map((stop) => (
            <CircuitCard key={stop.city} stop={stop} />
          ))}
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section style={{ background: "var(--cbb-ink)", color: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "90px 32px", textAlign: "center" }}>
          <Eyebrow color="var(--cbb-mint)">{m.finalCta.eyebrow}</Eyebrow>
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
              {m.finalCta.titlePre}
              <span style={{ color: "var(--cbb-rose)" }}>{m.finalCta.titleAccent}</span>
            </Skew>
          </h2>
          <p
            style={{
              fontWeight: 500,
              fontSize: 18,
              lineHeight: 1.5,
              color: "rgba(255,255,255,.7)",
              margin: "20px auto 0",
              maxWidth: 480,
            }}
          >
            {m.finalCta.subtitle}
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
            {m.finalCta.ctas.map((c) => (
              <CTA key={c.href} href={c.href} variant={c.variant} size="lg" style={{ padding: "19px 36px" }}>
                {c.label}
              </CTA>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
