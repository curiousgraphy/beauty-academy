"use client";

import { useState, type CSSProperties } from "react";
import type { RsvpData, FormField, ConsentItem } from "@/lib/data";

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 14,
  border: "1.5px solid var(--cbb-line)",
  fontSize: 15,
  outline: "none",
  background: "#fff",
  color: "var(--cbb-ink)",
};

const labelStyle: CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 700,
  color: "var(--cbb-ink)",
  marginBottom: 7,
};

function Field({ field, marginTop = 0 }: { field: FormField; marginTop?: number }) {
  return (
    <div style={{ marginTop }}>
      <label style={labelStyle}>{field.label}</label>
      {field.prefix ? (
        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <span
            style={{
              position: "absolute",
              left: 16,
              fontSize: 15,
              fontWeight: 700,
              color: "var(--cbb-grey)",
              pointerEvents: "none",
            }}
          >
            {field.prefix}
          </span>
          <input
            className="cbb-input"
            type={field.type}
            placeholder={field.placeholder}
            style={{ ...inputStyle, paddingLeft: 32 }}
          />
        </div>
      ) : (
        <input className="cbb-input" type={field.type} placeholder={field.placeholder} style={inputStyle} />
      )}
    </div>
  );
}

export default function RsvpFlow({ data }: { data: RsvpData }) {
  const [step, setStep] = useState(1);
  const [checks, setChecks] = useState<Record<ConsentItem["key"], boolean>>({ c1: false, c2: false, c3: false });
  const [sig, setSig] = useState("");
  const [showErr, setShowErr] = useState(false);

  const requiredKeys = data.step3.consents.filter((c) => c.required).map((c) => c.key);
  const consentOk = requiredKeys.every((k) => checks[k]) && sig.trim().length > 1;

  const nextLabel = step === 3 ? data.ctaLabels.confirm : data.ctaLabels.continue;

  const toggle = (k: ConsentItem["key"]) => setChecks((c) => ({ ...c, [k]: !c[k] }));
  const back = () => {
    setStep((s) => Math.max(1, s - 1));
    setShowErr(false);
  };
  const next = () => {
    if (step === 3 && !consentOk) {
      setShowErr(true);
      return;
    }
    setStep((s) => Math.min(4, s + 1));
    setShowErr(false);
  };
  const reset = () => {
    setStep(1);
    setChecks({ c1: false, c2: false, c3: false });
    setSig("");
    setShowErr(false);
  };

  const s1 = data.step1;
  const s2 = data.step2;

  return (
    <div style={{ background: "#fff", borderRadius: 28, boxShadow: "var(--cbb-shadow-md)", overflow: "hidden" }}>
      {/* stepper */}
      <div
        data-r="steptrack"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "22px 28px",
          borderBottom: "1px solid var(--cbb-line)",
        }}
      >
        {data.stepLabels.map((label, i) => {
          const n = i + 1;
          const done = n < step;
          const active = n === step;
          return (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
              <span
                style={{
                  width: 30,
                  height: 30,
                  flex: "none",
                  borderRadius: 999,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: 14,
                  background: done ? "var(--cbb-ink)" : active ? "var(--cbb-mint)" : "#F0F0F0",
                  color: done ? "#fff" : active ? "var(--cbb-ink)" : "var(--cbb-grey)",
                  transition: "all .2s",
                }}
              >
                {done ? "✓" : String(n)}
              </span>
              <span
                data-r="steplabel"
                style={{
                  fontSize: 12.5,
                  fontWeight: 700,
                  letterSpacing: "-.01em",
                  color: done || active ? "var(--cbb-ink)" : "var(--cbb-grey)",
                }}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>

      <div style={{ padding: 30 }}>
        {/* STEP 1 — student */}
        {step === 1 && (
          <div>
            <h3 style={{ fontWeight: 900, fontSize: 24, letterSpacing: "-.03em", margin: 0 }}>{s1.title}</h3>
            <p style={{ fontSize: 14, fontWeight: 500, color: "var(--cbb-ink-2)", margin: "8px 0 24px" }}>{s1.sub}</p>
            <Field field={s1.fields[0]} />
            <div data-r="formrow" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 18 }}>
              <Field field={s1.fields[1]} />
              <Field field={s1.fields[2]} />
            </div>
            <Field field={s1.fields[3]} marginTop={18} />
            <Field field={s1.fields[4]} marginTop={18} />
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
                marginTop: 14,
                background: "var(--cbb-mint-tint)",
                borderRadius: 14,
                padding: "14px 16px",
              }}
            >
              <span style={{ fontSize: 15, fontWeight: 900, color: "var(--cbb-mint-deep)", lineHeight: 1.4 }}>◎</span>
              <p style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.5, color: "var(--cbb-mint-deep)", margin: 0 }}>
                {s1.igInfo.pre}
                <strong style={{ fontWeight: 800 }}>{s1.igInfo.strong1}</strong>
                {s1.igInfo.mid}
                <strong style={{ fontWeight: 800 }}>{s1.igInfo.strong2}</strong>
                {s1.igInfo.post}
              </p>
            </div>
          </div>
        )}

        {/* STEP 2 — guardian */}
        {step === 2 && (
          <div>
            <h3 style={{ fontWeight: 900, fontSize: 24, letterSpacing: "-.03em", margin: 0 }}>{s2.title}</h3>
            <p style={{ fontSize: 14, fontWeight: 500, color: "var(--cbb-ink-2)", margin: "8px 0 24px" }}>{s2.sub}</p>
            <div data-r="formrow" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Field field={s2.fields[0]} />
              <Field field={s2.fields[1]} />
            </div>
            <Field field={s2.fields[2]} marginTop={18} />
            <Field field={s2.fields[3]} marginTop={18} />
            <div
              style={{
                marginTop: 18,
                background: "var(--cbb-mint-tint)",
                borderRadius: 14,
                padding: "14px 16px",
                fontSize: 13,
                fontWeight: 600,
                color: "var(--cbb-mint-deep)",
              }}
            >
              {s2.skipNote}
            </div>
          </div>
        )}

        {/* STEP 3 — consent */}
        {step === 3 && (
          <div>
            <h3 style={{ fontWeight: 900, fontSize: 24, letterSpacing: "-.03em", margin: 0 }}>{data.step3.title}</h3>
            <p style={{ fontSize: 14, fontWeight: 500, color: "var(--cbb-ink-2)", margin: "8px 0 22px" }}>
              {data.step3.sub}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {data.step3.consents.map((c) => {
                const on = checks[c.key];
                return (
                  <label
                    key={c.key}
                    onClick={() => toggle(c.key)}
                    style={{
                      display: "flex",
                      gap: 13,
                      alignItems: "flex-start",
                      padding: 16,
                      borderRadius: 14,
                      border: `1.5px solid ${on ? "var(--cbb-mint-deep)" : "var(--cbb-line)"}`,
                      cursor: "pointer",
                      background: on ? "var(--cbb-mint-tint)" : "#fff",
                      transition: "all .15s",
                    }}
                  >
                    <span
                      style={{
                        width: 24,
                        height: 24,
                        flex: "none",
                        borderRadius: 7,
                        border: `2px solid ${on ? "var(--cbb-mint-deep)" : "#CFCFCF"}`,
                        background: on ? "var(--cbb-mint-deep)" : "transparent",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                        fontWeight: 900,
                      }}
                    >
                      {on ? "✓" : ""}
                    </span>
                    <span style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.5, color: "var(--cbb-ink)" }}>
                      <strong style={{ fontWeight: 700 }}>{c.strong}</strong>
                      {c.rest}
                      {c.note && <span style={{ color: "var(--cbb-grey)" }}>{c.note}</span>}
                    </span>
                  </label>
                );
              })}
            </div>
            <label style={{ ...labelStyle, margin: "20px 0 7px" }}>{data.step3.sigLabel}</label>
            <input
              className="cbb-input"
              value={sig}
              onChange={(e) => setSig(e.target.value)}
              type="text"
              placeholder={data.step3.sigPlaceholder}
              style={{ ...inputStyle, fontStyle: "italic" }}
            />
            {showErr && !consentOk && (
              <p style={{ fontSize: 13, fontWeight: 600, color: "var(--cbb-rose-ink)", margin: "12px 0 0" }}>
                {data.step3.errMsg}
              </p>
            )}
          </div>
        )}

        {/* STEP 4 — confirmation */}
        {step === 4 && (
          <div style={{ textAlign: "center", padding: "14px 0" }}>
            <div
              style={{
                width: 74,
                height: 74,
                borderRadius: 999,
                background: "var(--cbb-mint)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 36,
                fontWeight: 900,
                color: "var(--cbb-ink)",
                margin: "0 auto",
              }}
            >
              ✓
            </div>
            <h3 style={{ fontWeight: 900, fontSize: 28, letterSpacing: "-.03em", margin: "22px 0 0" }}>
              {data.step4.heading}
            </h3>
            <p
              style={{
                fontSize: 15,
                fontWeight: 500,
                lineHeight: 1.55,
                color: "var(--cbb-ink-2)",
                margin: "12px auto 0",
                maxWidth: 400,
              }}
            >
              {data.step4.body}
            </p>
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                gap: 10,
                marginTop: 26,
                background: "var(--cbb-mint-tint)",
                borderRadius: 16,
                padding: "20px 26px",
                textAlign: "left",
              }}
            >
              {data.step4.details.map((d) => (
                <div key={d.label} style={{ display: "flex", justifyContent: "space-between", gap: 32 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--cbb-ink-2)" }}>{d.label}</span>
                  <span style={{ fontSize: 14, fontWeight: 700 }}>{d.value}</span>
                </div>
              ))}
            </div>
            <p
              style={{
                fontSize: 13,
                fontWeight: 500,
                lineHeight: 1.5,
                color: "var(--cbb-ink-2)",
                margin: "18px auto 0",
                maxWidth: 400,
              }}
            >
              {data.step4.note}
            </p>
            <div style={{ marginTop: 24 }}>
              <button
                onClick={reset}
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  color: "var(--cbb-ink-2)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                {data.step4.resetLabel}
              </button>
            </div>
          </div>
        )}

        {/* nav buttons */}
        {step !== 4 && (
          <>
            <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
              {step > 1 && (
                <button
                  onClick={back}
                  className="cbb-btn-back"
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    color: "var(--cbb-ink)",
                    background: "#fff",
                    border: "1.5px solid var(--cbb-line)",
                    cursor: "pointer",
                    padding: "16px 26px",
                    borderRadius: 999,
                  }}
                >
                  {data.ctaLabels.back}
                </button>
              )}
              <button
                onClick={next}
                className="cbb-btn-mint"
                style={{
                  flex: 1,
                  fontWeight: 700,
                  fontSize: 16,
                  color: "var(--cbb-ink)",
                  background: "var(--cbb-mint)",
                  border: "none",
                  cursor: "pointer",
                  padding: "16px 26px",
                  borderRadius: 999,
                  boxShadow: "var(--cbb-shadow-mint)",
                }}
              >
                {nextLabel}
              </button>
            </div>
            <p style={{ fontSize: 12, fontWeight: 500, color: "var(--cbb-grey)", textAlign: "center", margin: "14px 0 0" }}>
              {data.demoNote}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
