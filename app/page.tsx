import {
  hero,
  marquee,
  video,
  about,
  events,
  master,
  schedule,
  partners,
  faq,
  finalCta,
  site,
} from "@/lib/data";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import EventCard from "@/components/EventCard";
import VenueCard from "@/components/VenueCard";
import ImageSlot from "@/components/ImageSlot";

/* Shared presentational helpers (landing-page-local) */

function Eyebrow({ children, color = "var(--cbb-grey)" }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      style={{
        fontWeight: 700,
        fontSize: 12,
        letterSpacing: ".26em",
        textTransform: "uppercase",
        color,
      }}
    >
      {children}
    </span>
  );
}

function Skew({ children }: { children: React.ReactNode }) {
  return <span style={{ display: "inline-block", transform: "skewX(-9deg)" }}>{children}</span>;
}

const aboutTone = {
  outline: { background: "#fff", border: "1px solid var(--cbb-line)" },
  mint: { background: "var(--cbb-mint-tint)" },
  pink: { background: "var(--cbb-pink-tint)" },
} as const;

const dotColor = {
  rose: "var(--cbb-rose)",
  mint: "var(--cbb-mint)",
  pink: "var(--cbb-pink)",
} as const;

export default function Home() {
  return (
    <div id="top" style={{ background: "#fff", overflowX: "hidden" }}>
      <Nav active="/" />

      {/* ============ HERO ============ */}
      <section
        data-r="hero"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "72px 32px 60px",
          display: "grid",
          gridTemplateColumns: "1.06fr .94fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div>
          <Eyebrow color="var(--cbb-rose-ink)">{hero.eyebrow}</Eyebrow>
          <h1
            style={{
              fontWeight: 900,
              letterSpacing: "-.045em",
              lineHeight: 0.9,
              margin: "20px 0 0",
              fontSize: "clamp(44px,6.4vw,82px)",
            }}
          >
            <Skew>
              {hero.titlePre}
              <span style={{ color: "var(--cbb-rose)" }}>{hero.glowWord}</span>
              <br />
              {hero.titlePost.trim()}
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
              margin: "26px 0 0",
            }}
          >
            {hero.subtitle}
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 34, flexWrap: "wrap" }}>
            {hero.ctas.map((c) => (
              <CTA key={c.href} href={c.href} variant={c.variant}>
                {c.label}
              </CTA>
            ))}
          </div>
          <div data-r="stats" style={{ display: "flex", gap: 34, marginTop: 42, flexWrap: "wrap" }}>
            {hero.stats.map((s) => (
              <div key={s.value + s.label}>
                <div style={{ fontWeight: 900, fontSize: 30, letterSpacing: "-.03em" }}>{s.value}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "var(--cbb-grey)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div data-r="herovisual" style={{ position: "relative" }}>
          <ImageSlot
            src={hero.portrait.src}
            placeholder={hero.portrait.placeholder}
            radius={28}
            style={{ width: "100%", height: "clamp(380px,46vw,540px)" }}
          />
          {hero.floatingCards.map((card, i) => {
            const isFirst = i === 0;
            return (
              <div
                key={card.title}
                style={{
                  position: "absolute",
                  ...(isFirst
                    ? { left: -20, top: 38 }
                    : { right: -16, bottom: 40 }),
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
                    background: card.track === "pro" ? "var(--cbb-pink)" : "var(--cbb-mint)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: 13,
                    color: card.track === "pro" ? "var(--cbb-rose-ink)" : "var(--cbb-ink)",
                  }}
                >
                  {card.day}
                </span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14 }}>{card.title}</div>
                  <div style={{ fontSize: 12, fontWeight: 500, color: "var(--cbb-grey)" }}>{card.meta}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div style={{ background: "var(--cbb-ink)", color: "#fff", overflow: "hidden", padding: "15px 0" }}>
        <div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            animation: "cbbmarquee 28s linear infinite",
            width: "max-content",
          }}
        >
          {[...marquee, ...marquee].map((word, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 26,
                paddingRight: 26,
                fontWeight: 800,
                fontSize: 19,
                letterSpacing: "-.02em",
              }}
            >
              {word}
              <span style={{ color: i % 2 === 0 ? "var(--cbb-mint)" : "var(--cbb-pink)", fontSize: 13 }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ============ VIDEO ============ */}
      <section style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "76px 32px 4px" }}>
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <Eyebrow>{video.eyebrow}</Eyebrow>
            <h2
              style={{
                fontWeight: 900,
                fontSize: "clamp(28px,3.8vw,48px)",
                lineHeight: 1,
                letterSpacing: "-.04em",
                margin: "14px 0 0",
              }}
            >
              <Skew>{video.title}</Skew>
            </h2>
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "var(--cbb-shadow-md)",
              background: "var(--cbb-ink)",
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title="CBB New York"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
            />
          </div>
        </div>
      </section>

      {/* ============ WHO IS CBB ============ */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 32px 72px" }}>
        <Eyebrow>{about.eyebrow}</Eyebrow>
        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(26px,3vw,40px)",
            lineHeight: 1.05,
            letterSpacing: "-.03em",
            margin: "14px 0 0",
            maxWidth: 680,
          }}
        >
          {about.title}
        </h2>
        <div
          data-r="stats"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 40 }}
        >
          {about.stats.map((s) => (
            <div
              key={s.title}
              className={s.tone === "outline" ? "cbb-stat-card" : undefined}
              style={{ borderRadius: 24, padding: "30px 28px", ...aboutTone[s.tone] }}
            >
              <div style={{ fontWeight: 900, fontSize: 46, letterSpacing: "-.04em", lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontWeight: 700, fontSize: 17, marginTop: 10 }}>{s.title}</div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--cbb-ink-2)",
                  lineHeight: 1.5,
                  marginTop: 6,
                }}
              >
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ TWO EVENTS ============ */}
      <section id="events" style={{ background: "var(--cbb-ink)", color: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 32px" }}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
            <Eyebrow color="var(--cbb-mint)">Two days · Two events</Eyebrow>
            <h2
              style={{
                fontWeight: 900,
                fontSize: "clamp(30px,4vw,52px)",
                lineHeight: 0.98,
                letterSpacing: "-.04em",
                margin: "16px 0 0",
                color: "#fff",
              }}
            >
              <Skew>Pick your glow.</Skew>
            </h2>
            <p
              style={{
                fontWeight: 500,
                fontSize: 18,
                lineHeight: 1.5,
                color: "rgba(255,255,255,.66)",
                margin: "18px 0 0",
              }}
            >
              One master, two audiences. Choose the room that&apos;s right for you.
            </p>
          </div>
          <div data-r="events" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {events.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ THE MASTER ============ */}
      <section id="master" style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 32px" }}>
        <div
          data-r="master"
          style={{ display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: 48, alignItems: "center" }}
        >
          <div style={{ position: "relative" }}>
            <ImageSlot
              src={master.portrait.src}
              placeholder={master.portrait.placeholder}
              radius={28}
              style={{ width: "100%", aspectRatio: "4/5" }}
            />
            <div
              style={{
                position: "absolute",
                right: -14,
                top: 26,
                background: "#fff",
                borderRadius: 14,
                boxShadow: "var(--cbb-shadow-md)",
                padding: "10px 16px",
                fontWeight: 900,
                fontSize: 13,
                letterSpacing: ".06em",
                color: "var(--cbb-rose-ink)",
                transform: "skewX(-9deg)",
              }}
            >
              {master.badge}
            </div>
          </div>
          <div>
            <Eyebrow>{master.eyebrow}</Eyebrow>
            <h2
              style={{
                fontWeight: 900,
                fontSize: "clamp(32px,4vw,52px)",
                lineHeight: 0.98,
                letterSpacing: "-.04em",
                margin: "14px 0 0",
              }}
            >
              {master.name}
            </h2>
            <p style={{ fontWeight: 600, fontSize: 18, color: "var(--cbb-ink-2)", margin: "12px 0 0" }}>
              {master.role}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, margin: "28px 0 0" }}>
              {master.bullets.map((b) => (
                <div key={b.text} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 4,
                      background: dotColor[b.dot],
                      marginTop: 8,
                      flex: "none",
                    }}
                  />
                  <span style={{ fontSize: 16, fontWeight: 500, color: "var(--cbb-ink)", lineHeight: 1.5 }}>
                    {b.text}
                  </span>
                </div>
              ))}
            </div>
            <CTA href={master.cta.href} variant="outline" size="md" style={{ marginTop: 30 }}>
              {master.cta.label}
            </CTA>
          </div>
        </div>
      </section>

      {/* ============ SCHEDULE ============ */}
      <section id="schedule" style={{ background: "var(--cbb-mint)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 32px" }}>
          <span
            style={{
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: ".26em",
              textTransform: "uppercase",
              color: "var(--cbb-ink)",
              opacity: 0.55,
            }}
          >
            {schedule.eyebrow}
          </span>
          <h2
            style={{
              fontWeight: 900,
              fontSize: "clamp(28px,3.6vw,46px)",
              lineHeight: 1,
              letterSpacing: "-.035em",
              margin: "14px 0 38px",
            }}
          >
            <Skew>{schedule.title}</Skew>
          </h2>
          <div data-r="schedule" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {schedule.days.map((entry) => (
              <VenueCard key={entry.dayLabel} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ PARTNERS ============ */}
      <section id="partners" style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 32px" }}>
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 44px" }}>
          <Eyebrow>{partners.eyebrow}</Eyebrow>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(26px,3vw,40px)",
              lineHeight: 1.05,
              letterSpacing: "-.03em",
              margin: "14px 0 0",
            }}
          >
            {partners.title}
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            gap: 20,
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "stretch",
            marginBottom: 36,
          }}
        >
          <div
            style={{
              flex: 1.6,
              minWidth: 320,
              maxWidth: 600,
              border: "1px solid var(--cbb-line)",
              borderRadius: 22,
              padding: "30px 34px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              background: "var(--cbb-mint-tint)",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "var(--cbb-grey)",
              }}
            >
              {partners.supporter.kicker}
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={partners.supporter.logo}
              alt={partners.supporter.logoAlt}
              style={{ height: 34, width: "auto", alignSelf: "flex-start" }}
            />
            <p style={{ fontSize: 14.5, fontWeight: 500, lineHeight: 1.55, color: "var(--cbb-ink-2)", margin: 0 }}>
              {partners.supporter.bodyPre}
              <strong style={{ color: "var(--cbb-ink)", fontWeight: 700 }}>
                {partners.supporter.bodyStrong}
              </strong>
              {partners.supporter.bodyPost}
            </p>
            <a
              href={partners.supporter.link.url}
              target="_blank"
              rel="noopener"
              className="cbb-chip"
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                fontSize: 14,
                fontWeight: 700,
                color: "var(--cbb-ink)",
                textDecoration: "none",
                padding: "11px 18px",
                borderRadius: 999,
                background: "#fff",
                boxShadow: "var(--cbb-shadow-sm)",
              }}
            >
              {partners.supporter.link.label}
            </a>
          </div>

          <div
            style={{
              flex: 1,
              minWidth: 240,
              border: "1px solid var(--cbb-line)",
              borderRadius: 22,
              padding: "28px 34px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "var(--cbb-grey)",
              }}
            >
              {partners.partner.kicker}
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={partners.partner.logo}
              alt={partners.partner.logoAlt}
              style={{ width: 72, height: 72, objectFit: "contain", margin: "14px 0 4px" }}
            />
            <div style={{ fontWeight: 900, fontSize: 24, letterSpacing: "-.03em", marginTop: 8 }}>
              {partners.partner.acronym}
            </div>
            <div style={{ fontSize: 13, fontWeight: 500, color: "var(--cbb-grey)", marginTop: 6 }}>
              {partners.partner.name}
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--cbb-ink-2)", marginTop: 10 }}>
              {partners.partner.contact}
            </div>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: ".04em",
            color: "var(--cbb-grey)",
            marginBottom: 18,
          }}
        >
          {partners.sponsorsKicker}
        </div>
        <div data-r="sponsors" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {partners.sponsors.map((s) => (
            <ImageSlot
              key={s.id}
              src={s.src}
              placeholder={s.placeholder}
              radius={18}
              fit="contain"
              tone={s.tone as "mint" | "pink"}
              style={{ height: 96 }}
            />
          ))}
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" style={{ maxWidth: 840, margin: "0 auto", padding: "88px 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 42 }}>
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(26px,3vw,40px)",
              lineHeight: 1.05,
              letterSpacing: "-.03em",
              margin: "14px 0 0",
            }}
          >
            {faq.title}
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faq.items.map((item) => (
            <details
              key={item.q}
              style={{
                border: "1px solid var(--cbb-line)",
                borderRadius: 16,
                overflow: "hidden",
                background: "#fff",
              }}
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
      <section style={{ background: "var(--cbb-ink)", color: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "92px 32px", textAlign: "center" }}>
          <h2
            style={{
              fontWeight: 900,
              fontSize: "clamp(36px,5.5vw,72px)",
              lineHeight: 0.94,
              letterSpacing: "-.045em",
              margin: 0,
              color: "#fff",
            }}
          >
            <Skew>
              {finalCta.titlePre}
              <span style={{ color: "var(--cbb-mint)" }}>{finalCta.titleAccent}</span>
            </Skew>
          </h2>
          <p
            style={{
              fontWeight: 500,
              fontSize: 19,
              lineHeight: 1.5,
              color: "rgba(255,255,255,.7)",
              margin: "22px auto 36px",
              maxWidth: 480,
            }}
          >
            {finalCta.subtitle}
          </p>
          <div
            data-r="finalcta"
            style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}
          >
            {finalCta.ctas.map((c) => (
              <CTA key={c.href} href={c.href} variant={c.variant}>
                {c.label}
              </CTA>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              gap: 28,
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 40,
            }}
          >
            <a
              href={`mailto:${site.email}`}
              className="cbb-social"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 15,
                fontWeight: 600,
                color: "rgba(255,255,255,.78)",
                textDecoration: "none",
              }}
            >
              ✉ {site.email}
            </a>
            <a
              href={site.instagram.url}
              className="cbb-social"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 15,
                fontWeight: 600,
                color: "rgba(255,255,255,.78)",
                textDecoration: "none",
              }}
            >
              ◎ {site.instagram.handle}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
