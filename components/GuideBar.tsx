"use client";

import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/site";

// The guide bar (Mithun, 13 Nov 2026): the guides brought ~80 visits in 28 days and no demo
// request, and the product's closing card sits at the foot where most readers never arrive.
// He chose a slim bar over a popup: a box over the text on a phone is what Google calls an
// intrusive interstitial and ranks lower, and readers leave.
//
// It slides up after 45 seconds on the page, or once the reader is halfway through the guide's
// body ([data-read]), whichever comes first. It hides while the closing card ([data-guide-cta])
// is on screen, so the two never show together. Closed, it stays closed for 14 days on that
// browser. Counted: "Guide Bar Shown", "Guide Bar Close", "WhatsApp Click" {location: guide bar};
// the walkthrough link is a link into the contact form, so the tracker counts it as
// "Demo CTA Click" with its words.
const KEY = "sv-guide-bar-closed";
const DAYS = 14;
const AFTER_MS = 45_000;
const NUMBER = BUSINESS.phone.replace(/\D/g, "");

function closedRecently(): boolean {
  try {
    const at = Number(localStorage.getItem(KEY) ?? 0);
    return at > 0 && Date.now() - at < DAYS * 864e5;
  } catch {
    return false;
  }
}

function send(name: string, location: string) {
  const p = { site: "svasamm.com", page: window.location.pathname, location };
  window.plausible?.(name, { props: p });
  window.gtag?.("event", name.toLowerCase().replace(/[^a-z0-9]+/g, "_"), p);
}

export default function GuideBar({ product, label, contact }: { product: string; label: string; contact: string }) {
  const [due, setDue] = useState(false); // the time or the reading has come
  const [ctaInView, setCtaInView] = useState(false);
  const [closed, setClosed] = useState(true); // until the browser says otherwise: never flashes
  const [wa, setWa] = useState(`https://wa.me/${NUMBER}`);

  useEffect(() => {
    setClosed(closedRecently());
    const text = encodeURIComponent(`Hi Svasamm, I was reading your guide and would like to know how ${label} can help my business.`);
    const mobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    setWa(mobile ? `https://wa.me/${NUMBER}?text=${text}` : `https://web.whatsapp.com/send?phone=${NUMBER}&text=${text}`);

    const timer = setTimeout(() => setDue(true), AFTER_MS);
    const body = document.querySelector("[data-read]") as HTMLElement | null;
    const onScroll = () => {
      if (!body) return;
      const r = body.getBoundingClientRect();
      if ((innerHeight - r.top) / r.height >= 0.5) setDue(true);
    };
    addEventListener("scroll", onScroll, { passive: true });

    const cta = document.querySelector("[data-guide-cta]");
    const io = cta ? new IntersectionObserver(([e]) => setCtaInView(e.isIntersecting)) : null;
    if (cta && io) io.observe(cta);
    return () => {
      clearTimeout(timer);
      removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, [label]);

  const shown = due && !closed && !ctaInView;
  const [counted, setCounted] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("has-guide-bar", shown);
    if (shown && !counted) {
      setCounted(true);
      send("Guide Bar Shown", product);
    }
    return () => document.body.classList.remove("has-guide-bar");
  }, [shown, counted, product]);

  return (
    <div className="gbar" data-guide-bar hidden={!shown} role="region" aria-label={`Ask about ${label}`}>
      <div className="gbar-in">
        <p className="gbar-text">
          <strong>Have a question about this at your own business?</strong> Ask us how {label} handles it.
        </p>
        <div className="gbar-acts">
          <a className="sv-btn sv-btn-primary gbar-btn" href={wa} target="_blank" rel="noopener"
            data-evt="WhatsApp Click" data-evt-loc="guide bar">
            WhatsApp us
          </a>
          <a className="sv-btn sv-btn-secondary gbar-btn" href={`${contact}?solution=${product}`}>
            Book a walkthrough
          </a>
        </div>
        <button type="button" className="gbar-x" aria-label="Close"
          onClick={() => {
            try { localStorage.setItem(KEY, String(Date.now())); } catch { /* private window: closes for this page only */ }
            setClosed(true);
            send("Guide Bar Close", product);
          }}>
          ✕
        </button>
      </div>
    </div>
  );
}
