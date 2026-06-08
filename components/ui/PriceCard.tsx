import type { TicketPlan } from "@/lib/data";
import Chip from "./Chip";

interface PriceCardProps {
  plan: TicketPlan;
}

export default function PriceCard({ plan }: PriceCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 transition-colors ${
        plan.featured
          ? "border-gold bg-card shadow-[0_0_40px_-12px_rgba(201,169,110,0.35)]"
          : "border-border bg-card hover:border-gold/40"
      }`}
    >
      {plan.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Chip variant="gold" className="bg-gold text-background">
            Best Value
          </Chip>
        </div>
      )}

      <div className="flex flex-col gap-1">
        <h3 className="font-display text-2xl font-bold text-offwhite">
          {plan.name}
        </h3>
        <p className="font-body text-sm uppercase tracking-wider text-muted">
          {plan.subtitle}
        </p>
      </div>

      <div className="mt-6 flex items-baseline gap-2">
        <span
          className={`font-display text-4xl font-bold ${
            plan.featured ? "text-gold" : "text-offwhite"
          }`}
        >
          {plan.price}
        </span>
      </div>

      {plan.limited && (
        <div className="mt-4">
          <Chip variant="green">{plan.limited}</Chip>
        </div>
      )}

      <ul className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
        {plan.perks.map((perk) => (
          <li
            key={perk}
            className="flex items-start gap-2 font-body text-sm text-offwhite"
          >
            <span className="mt-0.5 text-gold" aria-hidden>
              ✦
            </span>
            <span>{perk}</span>
          </li>
        ))}
      </ul>

      <a
        href="#register"
        className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 font-body text-sm font-semibold uppercase tracking-wider transition-colors ${
          plan.featured
            ? "bg-gold text-background hover:bg-gold/90"
            : "border border-border text-offwhite hover:border-gold hover:text-gold"
        }`}
      >
        신청하기
      </a>
    </div>
  );
}
