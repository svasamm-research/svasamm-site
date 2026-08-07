"use client";

import { useId, useState } from "react";
import { Icon } from "./IconClient";
import type { Faq } from "@/lib/types";

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState(-1);
  const base = useId();
  return (
    <div className="flex flex-col gap-2.5">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        const btnId = `${base}-q${i}`;
        const panelId = `${base}-a${i}`;
        return (
          <div key={i} style={{ border: "1px solid var(--color-neutral-800)", borderRadius: 12, background: "var(--color-surface)", overflow: "hidden" }}>
            <button
              id={btnId}
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between gap-4 border-0 bg-transparent cursor-pointer text-left"
              style={{ padding: "17px 20px", fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: 15.5, color: "var(--color-text)" }}
            >
              {f.q}
              <Icon name={isOpen ? "ph-minus" : "ph-plus"} weight="bold" size={16} style={{ color: "var(--color-accent-300)", flex: "none" }} />
            </button>
            {isOpen && (
              <div id={panelId} role="region" aria-labelledby={btnId} style={{ padding: "0 20px 18px", fontSize: 14, lineHeight: 1.6, color: "var(--color-neutral-300)" }}>
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
