"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Journey } from "@/lib/journeys";
import ProductLogo from "./ProductLogo";

// A capability journey: the stages on the left, one screen held on the right that changes
// as each stage reaches the middle of the window. On a phone the screen sits under each
// stage instead (a held screen and a column of text do not fit 390px). Every stage's text
// and screen are in the server HTML; scrolling only chooses which screen is shown.
// Each stage reached is counted once as "Journey Stage" { location: <stage id> }.
export default function JourneyView({ j, fill }: { j: Journey; fill: string }) {
  const [active, setActive] = useState(j.stages[0].id);
  const seen = useRef(new Set<string>());
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => {
        for (const e of es) {
          if (!e.isIntersecting) continue;
          const id = (e.target as HTMLElement).dataset.stage!;
          setActive(id);
          if (!seen.current.has(id)) {
            seen.current.add(id);
            const props = { site: "svasamm.com", page: location.pathname, location: id };
            window.plausible?.("Journey Stage", { props });
            window.gtag?.("event", "journey_stage", props);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    document.querySelectorAll("[data-stage]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  const shown = j.stages.find((s) => s.id === active)!;

  return (
    <>
      <section className="pp-hero-wash" style={{ borderBottom: "1px solid var(--sv-line)" }}>
        <div className="sv-wrap" style={{ padding: "56px 24px 44px", maxWidth: 900 }}>
          <div style={{ marginBottom: 18 }}><ProductLogo id={j.product} size={20} /></div>
          <div className="sv-eyebrow">{j.eyebrow}</div>
          <h1 style={{ margin: "0 0 14px" }}>{j.title}</h1>
          <p className="sv-muted" style={{ fontSize: 18, lineHeight: 1.6, margin: 0, maxWidth: "52ch" }}>{j.intro}</p>
        </div>
      </section>

      <section className="sv-wrap jv" style={{ padding: "24px 24px 72px" }}>
        <ol className="jv-steps">
          {j.stages.map((s) => (
            <li key={s.id} id={s.id} data-stage={s.id} className="jv-step" data-on={active === s.id ? "" : undefined}>
              <span className="jv-num" style={{ background: active === s.id ? fill : undefined }}>{s.step}</span>
              <div>
                <h2 style={{ fontSize: 24, margin: "0 0 4px" }}>{s.title}</h2>
                <div style={{ fontFamily: "var(--sv-mono)", fontSize: 12, color: "var(--sv-ink-3)", marginBottom: 12 }}>{s.who}</div>
                <p style={{ fontSize: 16.5, lineHeight: 1.65, margin: "0 0 12px" }}>{s.does}</p>
                <p className="jv-rule" style={{ borderLeftColor: fill }}>{s.rule}</p>
                <img className="jv-inline" src={s.screen} alt={s.alt} loading="lazy" />
              </div>
            </li>
          ))}
        </ol>
        <div className="jv-hold">
          <figure className="sv-card" style={{ margin: 0, padding: 10, boxShadow: "var(--sv-sh-3)", borderTop: `4px solid ${fill}` }}>
            {j.stages.map((s) => (
              <img key={s.id} src={s.screen} alt={s.alt} hidden={s.id !== shown.id}
                style={{ display: "block", width: "100%", borderRadius: "var(--sv-r)", border: "1px solid var(--sv-line)" }} />
            ))}
            <figcaption style={{ padding: "10px 6px 2px", fontFamily: "var(--sv-mono)", fontSize: 12, color: "var(--sv-ink-3)" }}>
              {shown.step} / {j.stages.length} · {shown.title}
            </figcaption>
          </figure>
          <p style={{ fontSize: 12.5, color: "var(--sv-ink-3)", margin: "10px 4px 0" }}>{j.note}</p>
        </div>
      </section>

      <section style={{ padding: "0 0 88px" }}>
        <div className="sv-wrap" style={{ maxWidth: 900, textAlign: "center" }}>
          <h2 style={{ margin: "0 0 12px" }}>See your own mill&apos;s season this way</h2>
          <p className="sv-muted" style={{ fontSize: 16, margin: "0 auto 24px", maxWidth: "40em" }}>
            Send one season&apos;s paddy received and rice delivered — we&apos;ll walk it through these stages with you. Free, no obligation.
          </p>
          <Link href={`/pages/contact.html?solution=${j.product}`} className="sv-btn sv-btn-primary sv-btn-lg">Ask for the free review</Link>
        </div>
      </section>
    </>
  );
}
