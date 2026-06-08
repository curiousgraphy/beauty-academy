import type { Metadata } from "next";
import Link from "next/link";
import Chip from "@/components/ui/Chip";
import SectionHeader from "@/components/ui/SectionHeader";
import { curriculum, eventMeta } from "@/lib/data";

export const metadata: Metadata = {
  title: `세부 커리큘럼 — ${eventMeta.title}`,
  description: "CBB K-Beauty Master Class 시간대별 세부 커리큘럼.",
};

export default function CurriculumPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* 상단 네비 */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-sm text-muted transition-colors hover:text-gold"
          >
            ← 메인으로 돌아가기
          </Link>
        </div>
      </div>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader
            eyebrow="Full Curriculum"
            title="세부 커리큘럼"
            subtitle="오전 데모 세션과 오후 실습 코칭의 시간대별 상세 구성입니다."
          />

          <div className="mt-16 flex flex-col gap-12">
            {curriculum.map((session) => {
              const isPurple = session.accent === "session-purple";
              return (
                <div key={session.id}>
                  <div className="mb-6 flex items-center gap-4">
                    <Chip variant={isPurple ? "purple" : "green"}>
                      {session.label}
                    </Chip>
                    <span className="font-body text-sm text-muted">
                      {session.timeRange}
                    </span>
                  </div>

                  <div className="relative border-l border-border pl-8">
                    {session.items.map((item, idx) => (
                      <div key={idx} className="relative pb-8 last:pb-0">
                        {/* 타임라인 점 */}
                        <span
                          className={`absolute -left-[2.1rem] top-1 h-3 w-3 rounded-full ring-4 ring-background ${
                            isPurple
                              ? "bg-session-purple"
                              : "bg-session-green"
                          }`}
                          aria-hidden
                        />
                        {item.time && (
                          <span
                            className={`font-body text-sm font-semibold ${
                              isPurple
                                ? "text-session-purple"
                                : "text-session-green"
                            }`}
                          >
                            {item.time}
                          </span>
                        )}
                        <h3 className="mt-1 font-display text-xl font-bold text-offwhite">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="mt-1 font-body text-sm text-muted">
                            {item.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              href="/#register"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-background transition-colors hover:bg-gold/90"
            >
              참가 신청하기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
