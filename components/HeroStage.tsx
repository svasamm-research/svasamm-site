"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// The home hero's product stage (Mithun, 19 Nov 2026: "images changing for each product…
// not a simple carousel"). One product at a time: its real screen rises in, its phone slides
// in where it has one, the frame takes its colour, and the headline names who it is for.
// The product logos are the controls; a line under the active one fills over six seconds and
// its animationend moves the stage on, so pausing is just pausing that animation — on hover,
// on keyboard focus, when the hero is scrolled away, and after anyone picks a product. With
// prefers-reduced-motion the line does not run, so nothing moves by itself.
// The server renders slide 0 (Millingo), so Google reads "how your rice mill actually runs".

export type HeroSlide = {
  id: string;
  name: string;
  /** the words in the headline: "how your ___ actually runs" */
  phrase: string;
  /** one line under the screen */
  line: string;
  href: string;
  external: boolean;
  colour: string;
  desk: { src: string; alt: string };
  phone?: { src: string; alt: string };
  logo: ReactNode;
};

export default function HeroStage({ slides, children }: { slides: HeroSlide[]; children: ReactNode }) {
  const [at, setAt] = useState(0);
  const [hold, setHold] = useState(false); // hover or focus inside the stage
  const [away, setAway] = useState(false); // the hero is off screen
  const [picked, setPicked] = useState(false); // somebody chose a product: stop for good
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stage.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setAway(!e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const paused = hold || away || picked;
  const s = slides[at];
  const next = () => setAt((i) => (i + 1) % slides.length);
  const go = (i: number) => {
    setAt(i);
    setPicked(true);
  };

  return (
    <div className="sv-wrap pp-hero" style={{ gap: 64, padding: "80px 24px 88px" }}>
      <div>
        <h1 style={{ margin: "0 0 22px", maxWidth: "16ch" }}>
          Business software that fits how your{" "}
          <span key={s.id} className="hs-word">
            {s.phrase}
          </span>{" "}
          actually runs.
        </h1>
        {children}
      </div>

      <div
        ref={stage}
        onMouseEnter={() => setHold(true)}
        onMouseLeave={() => setHold(false)}
        onFocus={() => setHold(true)}
        onBlur={() => setHold(false)}
      >
        <div style={{ position: "relative", paddingBottom: 28, paddingRight: 34 }}>
          <figure
            className="sv-card hs-desk"
            style={{ margin: 0, padding: 0, borderTop: `4px solid ${s.colour}` }}
            aria-live="polite"
          >
            {slides.map((x, i) => (
              <img
                key={x.id}
                src={x.desk.src}
                alt={i === at ? x.desk.alt : ""}
                aria-hidden={i !== at}
                className={i === at ? "hs-on" : undefined}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : undefined}
                decoding="async"
              />
            ))}
          </figure>
          {slides.map((x, i) =>
            x.phone ? (
              <img
                key={x.id}
                src={x.phone.src}
                alt={i === at ? x.phone.alt : ""}
                aria-hidden={i !== at}
                className={`hs-phone${i === at ? " hs-on" : ""}`}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            ) : null,
          )}
        </div>

        <p className="hs-line" key={`l-${s.id}`}>
          {s.line}{" "}
          <a
            href={s.href}
            {...(s.external ? { target: "_blank", rel: "noopener" } : {})}
            data-evt="Product Click"
            data-evt-loc={s.id}
          >
            See {s.name} →
          </a>
        </p>

        <div style={{ marginTop: 18 }}>
          <span className="sv-eyebrow" style={{ margin: "0 0 10px", display: "block", color: "var(--sv-ink-3)" }}>
            On Svasamm One
          </span>
          <div className="hs-tabs" role="tablist" aria-label="Svasamm One products">
            {slides.map((x, i) => (
              <button
                key={x.id}
                type="button"
                role="tab"
                aria-selected={i === at}
                aria-label={x.name}
                className="hs-tab"
                onClick={() => go(i)}
              >
                {x.logo}
                <span className="hs-track" aria-hidden="true">
                  {i === at && (
                    <span
                      key={`${x.id}-${at}`}
                      className="hs-fill"
                      style={{ animationPlayState: paused ? "paused" : "running", background: x.colour }}
                      onAnimationEnd={next}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
