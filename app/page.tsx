import Link from "next/link";
import Chip from "@/components/ui/Chip";
import SectionHeader from "@/components/ui/SectionHeader";
import PriceCard from "@/components/ui/PriceCard";
import VTProductCard from "@/components/ui/VTProductCard";
import {
  curriculum,
  eventMeta,
  ticketPlans,
  venue,
  vtProducts,
} from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden border-b border-border">
        {/* 배경 글로우 */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]"
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-28 text-center sm:py-36">
          <Chip variant="gold" className="mb-6">
            São Paulo · 2026
          </Chip>
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-offwhite sm:text-6xl md:text-7xl">
            {eventMeta.title}
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg text-muted sm:text-xl">
            {eventMeta.tagline}
          </p>
          <p className="mt-3 max-w-xl font-body text-base text-muted">
            {eventMeta.description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#register"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-background transition-colors hover:bg-gold/90"
            >
              지금 신청하기
            </a>
            <Link
              href="/curriculum"
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-offwhite transition-colors hover:border-gold hover:text-gold"
            >
              세부 커리큘럼 보기
            </Link>
          </div>
        </div>
      </section>

      {/* ========================= CURRICULUM ========================= */}
      <section id="curriculum" className="bg-section py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="Curriculum"
            title="하루 동안 배우는 K-Beauty"
            subtitle="오전 데모 세션부터 오후 1:1 실습 코칭까지, 단계별로 구성된 마스터 클래스."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {curriculum.map((session) => (
              <div
                key={session.id}
                className="flex flex-col rounded-2xl border border-border bg-card p-8"
              >
                <div className="flex items-center justify-between">
                  <Chip
                    variant={
                      session.accent === "session-purple" ? "purple" : "green"
                    }
                  >
                    {session.label}
                  </Chip>
                  <span className="font-body text-sm text-muted">
                    {session.timeRange}
                  </span>
                </div>

                <ul className="mt-6 flex flex-col gap-4">
                  {session.items.map((item, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span
                        className={`min-w-[3.5rem] font-body text-sm font-semibold ${
                          session.accent === "session-purple"
                            ? "text-session-purple"
                            : "text-session-green"
                        }`}
                      >
                        {item.time ?? "—"}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-body text-sm font-medium text-offwhite">
                          {item.title}
                        </span>
                        {item.description && (
                          <span className="mt-0.5 font-body text-xs text-muted">
                            {item.description}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/curriculum"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-wider text-gold transition-colors hover:text-gold/80"
            >
              세부 커리큘럼 전체 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* ========================= VT PRODUCTS ========================= */}
      <section id="products" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="VT Cosmetics"
            title="함께하는 VT 제품"
            subtitle="풀패키지 참가자는 아래 VT 제품 중 하나를 선택해 증정받습니다."
          />

          <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {vtProducts.map((product) => (
              <VTProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================= PRICING ========================= */}
      <section id="register" className="bg-section py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader
            eyebrow="Tickets"
            title="참가 플랜 선택"
            subtitle="목적에 맞는 플랜을 선택하세요. 풀패키지는 30석 한정으로 운영됩니다."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {ticketPlans.map((plan) => (
              <PriceCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================= VENUE ========================= */}
      <section id="venue" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            eyebrow="Venue"
            title="장소 안내"
            align="left"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-[1.2fr_1fr]">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-2xl font-bold text-offwhite">
                {venue.name}
              </h3>
              <p className="mt-3 font-body text-base text-muted">
                {venue.address}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Chip variant="gold">★ Google {venue.googleRating}</Chip>
                <Chip>도어 오픈 {venue.doorsOpen}</Chip>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 font-body text-sm font-semibold uppercase tracking-wider text-background transition-colors hover:bg-gold/90"
                >
                  구글맵에서 보기
                </a>
                <a
                  href={venue.hallUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-body text-sm font-semibold uppercase tracking-wider text-offwhite transition-colors hover:border-gold hover:text-gold"
                >
                  Jung 홀 정보
                </a>
              </div>
            </div>

            <dl className="flex flex-col gap-4">
              {[
                { label: "주차", value: venue.parking },
                { label: "교통", value: venue.transit },
                { label: "도어 오픈", value: venue.doorsOpen },
                { label: "구글 평점", value: `★ ${venue.googleRating} / 5.0` },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4"
                >
                  <dt className="font-body text-sm uppercase tracking-wider text-muted">
                    {row.label}
                  </dt>
                  <dd className="font-body text-sm font-medium text-offwhite">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ========================= FOOTER ========================= */}
      <footer className="border-t border-border bg-section py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
          <p className="font-display text-lg font-semibold text-offwhite">
            {eventMeta.title}
          </p>
          <a
            href={venue.homepageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-muted transition-colors hover:text-gold"
          >
            {venue.homepageUrl}
          </a>
          <p className="font-body text-xs text-muted">
            © 2026 CBB K-Beauty Master Class. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
