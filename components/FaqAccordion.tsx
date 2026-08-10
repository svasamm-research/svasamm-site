"use client";

import { useId, useState } from "react";
import { Icon } from "./IconClient";
import type { Faq } from "@/lib/types";

// Flat divider accordion (ports the .pp-faq / .ar-faq pattern shared by ProductPage + Article):
// a top-bordered list, one hairline-separated row per question, plus/minus toggle in brand.
export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState(-1);
  const base = useId();
  return (
    <div style={{ borderTop: "1px solid var(--sv-line)" }}>
      {faqs.map((f, i) => {
        const isOpen = open === i;
        const btnId = `${base}-q${i}`;
        const panelId = `${base}-a${i}`;
        return (
          <div key={i} style={{ borderBottom: "1px solid var(--sv-line)" }}>
            <button
              id={btnId}
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between gap-4 border-0 bg-transparent cursor-pointer text-left"
              style={{
                padding: "20px 4px",
                fontFamily: "var(--sv-font)",
                fontWeight: 600,
                fontSize: 17,
                letterSpacing: "-.015em",
                color: "var(--sv-ink)",
              }}
            >
              {f.q}
              <Icon
                name={isOpen ? "ph-minus" : "ph-plus"}
                size={18}
                style={{ color: "var(--sv-brand)", flex: "none" }}
              />
            </button>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                style={{
                  padding: "0 4px 22px",
                  fontSize: 15.5,
                  lineHeight: 1.68,
                  color: "var(--sv-ink-2)",
                  maxWidth: "74ch",
                }}
              >
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
