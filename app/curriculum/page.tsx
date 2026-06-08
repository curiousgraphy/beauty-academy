import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import Chip from "@/components/ui/Chip";
import PriceCard from "@/components/ui/PriceCard";
import VenueCard from "@/components/ui/VenueCard";
import FadeIn from "@/components/ui/FadeIn";
import {
  afternoonDetail,
  eventMeta,
  morningDetail,
  preparation,
  ticketPlans,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "세부 커리큘럼 — CBB K-Beauty Master Class · São Paulo 2026",
  description:
    "청담동 K-Beauty 마스터 이언주와 함께하는 글래스 스킨·K-웨딩 메이크업 원데이 클래스의 시간대별 상세 커리큘럼. São Paulo Espaço MIND, 2026년 7월 6일.",
  alternates: { canonical: "/curriculum" },
  openGraph: {
    title: "세부 커리큘럼 — CBB K-Beauty Master Class",
    description:
      "오전 라이브 시연과 오후 1:1 핸즈온 실습의 시간대별 상세 구성.",
    images: ["/images/og-image.jpg"],
  },
};

const morningPlan = ticketPlans.find((p) => p.id === "morning");
const fullPlan = ticketPlans.find((p) => p.id === "full");

export default function CurriculumPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ===================== 상단 sticky 바 (56px) ===================== */}
      <div className="sticky top-0 z-50 h-14 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-6">
          <Link
            href="/"
            className="font-body text-sm text-muted transition-colors hover:text-gold"
          >
            ← 메인으로
          </Link>
          <a
            href={eventMeta.registerUrl}
            className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-2 font-body text-xs font-semibold uppercase tracking-wider text-background transition-colors hover:bg-gold/90"
          >
            지금 신청하기 R$ 1,199
          </a>
        </div>
      </div>

      {/* ===================== A. 페이지 헤더 ===================== */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-body text-xs uppercase tracking-wider text-muted">
              <li>
                <Link href="/" className="transition-colors hover:text-gold">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-gold">Curriculum</li>
            </ol>
          </nav>
          <h1 className="mt-6 font-display text-4xl font-bold text-offwhite sm:text-5xl">
            세부 커리큘럼
          </h1>
          <p className="mt-4 font-body text-base text-muted sm:text-lg">
            K-Beauty Master Class — São Paulo · {eventMeta.dateLabel}
          </p>
        </div>
      </section>

      {/* ===================== B. 오전 1부 ===================== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <Chip variant="purple" className="mb-6">
              {morningDetail.label}
            </Chip>
          </FadeIn>

          <div className="relative border-l border-border pl-8">
            {morningDetail.sessions.map((session, idx) => (
              <FadeIn key={idx} delay={idx * 80}>
                <div className="relative pb-12 last:pb-0">
                  <span
                    className="absolute -left-[2.1rem] top-1.5 h-3 w-3 rounded-full bg-session-purple ring-4 ring-background"
                    aria-hidden
                  />
                  <div className="flex flex-wrap items-center gap-3">
                    {session.badge && (
                      <Chip variant="purple">{session.badge}</Chip>
                    )}
                    <span className="font-body text-sm font-semibold text-session-purple">
                      {session.time}
                    </span>
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-bold text-offwhite">
                    {session.title}
                  </h2>
                  <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-muted">
                    {session.description}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2">
                    {session.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 font-body text-sm text-offwhite"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-session-purple"
                          aria-hidden
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== C. 오후 2부 ===================== */}
      <section className="bg-section py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <Chip variant="green" className="mb-6">
              {afternoonDetail.label}
            </Chip>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2">
            {[afternoonDetail.practicalTraining, afternoonDetail.coaching].map(
              (group, gIdx) => (
                <FadeIn key={group.title} delay={gIdx * 120}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                    <h2 className="font-display text-xl font-bold text-session-green">
                      {group.title}
                    </h2>
                    <ul className="mt-6 flex flex-col gap-3">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 font-body text-sm text-offwhite"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-session-green"
                            aria-hidden
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              )
            )}
          </div>
        </div>
      </section>

      {/* ===================== D. 준비물 & 유의사항 ===================== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <Chip variant="gold" className="mb-6">
              Preparation
            </Chip>
            <h2 className="font-display text-3xl font-bold text-offwhite">
              준비물 &amp; 유의사항
            </h2>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[preparation.bring, preparation.provided].map((group, gIdx) => (
              <FadeIn key={group.title} delay={gIdx * 120}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                  <h3 className="font-display text-xl font-bold text-gold">
                    {group.title}
                  </h3>
                  <ul className="mt-5 flex flex-col gap-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 font-body text-sm text-offwhite"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={120}>
            <p className="mt-6 rounded-xl border border-border bg-card px-6 py-5 font-body text-sm leading-relaxed text-muted">
              {preparation.dressCode}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===================== E. 오시는 길 ===================== */}
      <section className="bg-section py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <Chip variant="gold" className="mb-6">
              Location
            </Chip>
            <h2 className="mb-10 font-display text-3xl font-bold text-offwhite">
              오시는 길
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <VenueCard showMap />
          </FadeIn>
        </div>
      </section>

      {/* ===================== F. 하단 CTA ===================== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <h2 className="mb-12 text-center font-display text-3xl font-bold text-offwhite sm:text-4xl">
              지금 신청하세요
            </h2>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2">
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

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-wider text-gold transition-colors hover:text-gold/80"
            >
              <ArrowRight className="h-4 w-4 rotate-180" /> 메인 페이지로
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
