"use client";

import { useState } from "react";
import type { TicketData } from "@/lib/data";

/** Seat-remaining card: progress bar + reserve button (visual demo, no payment). */
export default function TicketReserve({ data }: { data: TicketData }) {
  const [seatsLeft, setSeatsLeft] = useState(data.seatsLeft);
  const [reserved, setReserved] = useState(false);

  const seatPct = `${Math.round(((data.total - seatsLeft) / data.total) * 100)}%`;

  const reserve = () => {
    if (reserved) return;
    setSeatsLeft((n) => Math.max(0, n - 1));
    setReserved(true);
  };

  return (
    <div style={{ background: "#fff", color: "var(--cbb-ink)", borderRadius: 24, padding: 32 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontWeight: 800, fontSize: 15 }}>{data.seatsHeading}</span>
        <span style={{ fontWeight: 900, fontSize: 15, color: "var(--cbb-rose-ink)" }}>
          {seatsLeft} / {data.total}
        </span>
      </div>
      <div
        style={{
          height: 10,
          borderRadius: 999,
          background: "var(--cbb-pink-tint)",
          marginTop: 12,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: 999,
            background: "var(--cbb-rose)",
            width: seatPct,
            transition: "width .4s cubic-bezier(.2,.7,.3,1)",
          }}
        />
      </div>
      <p style={{ fontSize: 13, fontWeight: 500, color: "var(--cbb-grey)", margin: "12px 0 0" }}>{data.seatsNote}</p>

      {!reserved ? (
        <>
          <button
            onClick={reserve}
            className="cbb-btn-rose"
            style={{
              width: "100%",
              marginTop: 24,
              fontWeight: 700,
              fontSize: 17,
              color: "#fff",
              border: "none",
              cursor: "pointer",
              padding: 18,
              borderRadius: 999,
              background: "var(--cbb-rose)",
              boxShadow: "var(--cbb-shadow-rose)",
            }}
          >
            {data.reserveLabel}
          </button>
          <p style={{ fontSize: 12, fontWeight: 500, color: "var(--cbb-grey)", textAlign: "center", margin: "12px 0 0" }}>
            {data.demoNote}
          </p>
        </>
      ) : (
        <div
          style={{
            marginTop: 24,
            background: "var(--cbb-mint-tint)",
            borderRadius: 16,
            padding: 20,
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: 900, fontSize: 18, color: "var(--cbb-ink)" }}>{data.reservedTitle}</div>
          <p style={{ fontSize: 13, fontWeight: 500, color: "var(--cbb-ink-2)", margin: "6px 0 0" }}>
            {data.reservedBody}
          </p>
        </div>
      )}
    </div>
  );
}
