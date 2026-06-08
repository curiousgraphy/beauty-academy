import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Heart,
  UserCheck,
  Gift,
  Star,
  MapPin,
  Car,
  Train,
  Clock,
  ArrowRight,
} from "lucide-react";

import Chip from "@/components/ui/Chip";
import SectionHeader from "@/components/ui/SectionHeader";
import PriceCard from "@/components/ui/PriceCard";
import VTProductCard from "@/components/ui/VTProductCard";
import FadeIn from "@/components/ui/FadeIn";
import Navbar from "@/components/ui/Navbar";
import FloatingCTA from "@/components/ui/FloatingCTA";
import Accordion from "@/components/ui/Accordion";
import SocialLinks from "@/components/ui/SocialLinks";
import { BLUR_DATA_URL } from "@/lib/images";
import {
  benefits,
  curriculum,
  eventMeta,
  faq,
  instructor,
  stats,
  ticketPlans,
  venue,
  vtProducts,
} from "@/lib/data";

// 혜택 아이콘 키 → lucide 컴포넌트 매핑
const benefitIcons = {
  sparkles: Sparkles,
  heart: Heart,
  "user-check": UserCheck,
  gift: Gift,
} as const;

const morningPlan = ticketPlans.find((p) => p.id === "morning");
const fullPlan = ticketPlans.find((p) => p.id === "full");

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingCTA />

      <main className="bg-background">
        {/* ============================ 01 HERO ============================ */}
        <section
          id="hero"
          className="relative flex min-h-screen items-center justify-center overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #0A0A0A 0%, #0A0A0A 40%, #111827 100%)",
          }}
        >
          {/* grain / glow overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]"
          />

          <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center">
            <FadeIn>
              <Chip variant="gold" className="mb-6">
                {eventMeta.eyebrow}
              </Chip>
            </FadeIn>
            <FadeIn delay={80}>
              <h1 className="font-display text-5xl font-bold leading-[1.05] text-offwhite sm:text-7xl md:text-8xl">
                K-Beauty
                <br />
                Master Class
              </h1>
            </FadeIn>
            <FadeIn delay={160}>
              <p className="mt-6 font-body text-lg text-muted sm:text-xl">
                글래스 스킨 · K-웨딩 메이크업 — São Paulo 단 1회
              </p>
            </FadeIn>
            <FadeIn delay={220}>
              <div className="mt-6">
                <Chip variant="steel">{eventMeta.dateVenueBadge}</Chip>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={eventMeta.registerUrl}
                  className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-background transition-colors hover:bg-gold/90"
                >
                  풀패키지 신청 R$ 1,199
                </a>
                <a
                  href={eventMeta.registerUrl}
                  className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-offwhite transition-colors hover:border-gold hover:text-gold"
                >
                  오전 세션만 R$ 399
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ============================ 02 ABOUT ============================ */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {stats.map((stat, idx) => (
                <FadeIn key={stat.value} delay={idx * 100}>
                  <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8">
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-0.5 bg-gold"
                    />
                    <p className="font-display text-3xl font-bold text-gold sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                      {stat.label}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== 03 CURRICULUM PREVIEW ===================== */}
        <section id="curriculum-preview" className="bg-section py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <FadeIn>
              <SectionHeader
                eyebrow="Curriculum"
                title="하루 동안 배우는 K-Beauty"
                subtitle="오전 라이브 시연부터 오후 1:1 핸즈온 실습까지, 단계별로 구성된 마스터 클래스."
              />
            </FadeIn>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {curriculum.map((session, sIdx) => {
                const isPurple = session.accent === "session-purple";
                return (
                  <FadeIn key={session.id} delay={sIdx * 120}>
                    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                      <div className="flex items-center justify-between">
                        <Chip variant={isPurple ? "purple" : "green"}>
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
                                isPurple
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
                  </FadeIn>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/curriculum"
                className="inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-wider text-gold transition-colors hover:text-gold/80"
              >
                세부 커리큘럼 전체 보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================= 04 INSTRUCTOR ========================= */}
        <section id="instructor" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <FadeIn>
                <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border-2 border-gold/60">
                  <Image
                    src="/images/instructor.jpg"
                    alt={`${instructor.name} (${instructor.nameEn})`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    className="object-cover"
                  />
                </div>
              </FadeIn>

              <FadeIn delay={120}>
                <div>
                  <Chip variant="gold" className="mb-4">
                    Instructor
                  </Chip>
                  <h2 className="font-display text-3xl font-bold text-offwhite sm:text-4xl">
                    {instructor.name}{" "}
                    <span className="text-muted">({instructor.nameEn})</span>
                  </h2>
                  <p className="mt-2 font-body text-base uppercase tracking-wider text-gold">
                    {instructor.title}
                  </p>

                  <ul className="mt-6 flex flex-col gap-3">
                    {instructor.career.map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-2 font-body text-sm text-offwhite"
                      >
                        <span className="mt-0.5 text-gold" aria-hidden>
                          ✦
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <p className="mb-3 font-body text-xs uppercase tracking-wider text-muted">
                      Collaboration
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {instructor.brands.map((brand) => (
                        <div
                          key={brand}
                          className="flex h-12 items-center justify-center rounded-lg border border-border bg-card px-5 font-body text-xs text-muted"
                        >
                          {brand}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ========================= 05 BENEFITS ========================= */}
        <section id="benefits" className="bg-section py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <FadeIn>
              <SectionHeader
                eyebrow="What You Get"
                title="수강 후 얻는 것"
              />
            </FadeIn>

            <div className="mt-16 grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit, idx) => {
                const Icon = benefitIcons[benefit.icon];
                return (
                  <FadeIn key={benefit.title} delay={idx * 100}>
                    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="mt-5 font-display text-xl font-bold text-offwhite">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                        {benefit.description}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================= 06 PRICING ========================= */}
        <section id="pricing" className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <FadeIn>
              <SectionHeader
                eyebrow={eventMeta.dateLabel.replace(" (MON)", " MON")}
                title="일정 · 장소 · 가격"
                subtitle="목적에 맞는 플랜을 선택하세요. 풀패키지는 30석 한정으로 운영됩니다."
              />
            </FadeIn>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {morningPlan && (
                <FadeIn>
                  <PriceCard plan={morningPlan} />
                </FadeIn>
              )}
              {fullPlan && (
                <FadeIn delay={120}>
                  <PriceCard plan={fullPlan} />
                </FadeIn>
              )}
            </div>

            {/* 장소 카드 */}
            <FadeIn delay={120}>
              <div className="mt-10 rounded-2xl border border-border bg-card p-8">
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-2xl font-bold text-offwhite">
                    {venue.name}
                  </h3>
                  <p className="flex items-center gap-2 font-body text-sm text-muted">
                    <MapPin className="h-4 w-4 shrink-0 text-gold" />
                    {venue.address}
                  </p>
                  <div className="mt-1 flex items-center gap-1 text-gold">
                    <Star className="h-4 w-4 fill-gold" />
                    <span className="font-body text-sm font-semibold">
                      {venue.googleRating}
                    </span>
                  </div>
                </div>

                <dl className="mt-6 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
                  {[
                    { Icon: Clock, label: "도어 오픈", value: venue.doorsOpen },
                    { Icon: Car, label: "주차", value: venue.parking },
                    { Icon: Train, label: "교통", value: venue.transit },
                  ].map(({ Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-section text-gold">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="flex flex-col">
                        <dt className="font-body text-xs uppercase tracking-wider text-muted">
                          {label}
                        </dt>
                        <dd className="font-body text-sm font-medium text-offwhite">
                          {value}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-6">
                  <a
                    href={venue.hallUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-wider text-offwhite transition-colors hover:border-gold hover:text-gold"
                  >
                    Jung 홀 상세
                  </a>
                  <a
                    href={venue.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-wider text-background transition-colors hover:bg-gold/90"
                  >
                    구글맵
                  </a>
                  <a
                    href={venue.homepageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-wider text-offwhite transition-colors hover:border-gold hover:text-gold"
                  >
                    공식 홈페이지
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========================= 07 VT PRODUCTS ========================= */}
        <section id="vt-products" className="bg-section py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <FadeIn>
              <SectionHeader
                eyebrow="VT Cosmetics"
                title="Full Package 증정 — 5종 중 1개 선택"
                subtitle="선착순 30명 한정 · 시중가 R$ 82–174 상당"
              />
            </FadeIn>

            <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
              {vtProducts.map((product, idx) => (
                <FadeIn key={product.slug} delay={idx * 80}>
                  <VTProductCard product={product} />
                </FadeIn>
              ))}
            </div>

            <p className="mt-10 text-center font-body text-sm text-muted">
              풀패키지 결제 후 수령 확인 링크 발송
            </p>
          </div>
        </section>

        {/* ========================= 08 FAQ ========================= */}
        <section id="faq" className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <FadeIn>
              <SectionHeader eyebrow="FAQ" title="자주 묻는 질문" />
            </FadeIn>
            <FadeIn delay={120}>
              <div className="mt-16">
                <Accordion items={faq} />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========================= 09 FINAL CTA ========================= */}
        <section
          id="final-cta"
          className="border-t border-border bg-section py-20 md:py-28"
        >
          <div className="mx-auto max-w-3xl px-6 text-center">
            <FadeIn>
              <h2 className="font-display text-4xl font-bold text-offwhite sm:text-5xl">
                지금 신청하세요
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="mt-6 font-body text-lg text-muted">
                풀패키지 잔여{" "}
                <span className="font-display text-3xl font-bold text-gold">
                  {eventMeta.remainingSeats}
                </span>
                석
              </p>
            </FadeIn>
            <FadeIn delay={180}>
              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={eventMeta.registerUrl}
                  className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-background transition-colors hover:bg-gold/90"
                >
                  풀패키지 신청 R$ 1,199
                </a>
                <a
                  href={eventMeta.registerUrl}
                  className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-offwhite transition-colors hover:border-gold hover:text-gold"
                >
                  오전 세션만 R$ 399
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={260}>
              <div className="mt-12">
                <SocialLinks />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========================= FOOTER ========================= */}
        <footer className="border-t border-border bg-background py-12">
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
    </>
  );
}
