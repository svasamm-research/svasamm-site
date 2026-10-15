"use client";

import { useEffect } from "react";

// One listener for every visitor action the site counts (15 Oct 2026). Names match
// lucoze-website and t4suite-site so one Plausible report reads across all three; each
// needs a Goal of the same name in Plausible before it shows up there.
//
//   any element with data-evt="Name" [data-evt-loc="where"]   → Name { site, location, page }
//   a link into the contact form → "Demo CTA Click" { location: its words }
//   tel: links → "Call Click" · mailto: → "Email Click" · another host → "Outbound Click"
//   a guide (main [data-read]) read to 50% / its end           → "Blog Read 50%" / "Blog Read Complete"
//   the 404 page ([data-404] on the page)                      → "404" { page }
// Sign in, WhatsApp and the contact form send their own events and are not counted twice.
const SITE = "svasamm.com";

function send(name: string, props: Record<string, string>) {
  const p = { site: SITE, page: location.pathname, ...props };
  window.plausible?.(name, { props: p });
  window.gtag?.("event", name.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/_$/, ""), p);
}

export default function Tracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element).closest?.("a, button");
      if (!el) return;
      const tagged = el.closest("[data-evt]");
      if (tagged) {
        send(tagged.getAttribute("data-evt")!, { location: tagged.getAttribute("data-evt-loc") ?? "" });
        return;
      }
      const href = el.getAttribute("href") ?? "";
      // Every way into the contact form is a demo request, named by the words on it.
      if (href.includes("/pages/contact.html")) send("Demo CTA Click", { location: (el.textContent ?? "").trim().slice(0, 60) });
      else if (href.startsWith("tel:")) send("Call Click", { location: "" });
      else if (href.startsWith("mailto:")) send("Email Click", { location: "" });
      else if (/^https?:\/\//.test(href) && new URL(href).host !== location.host
               && !el.classList.contains("wa-fab") && !href.includes("app.svasamm.com"))
        send("Outbound Click", { location: new URL(href).host });
    };
    document.addEventListener("click", onClick);

    if (document.querySelector("[data-404]")) send("404", { location: document.referrer });

    // Reading depth: how far down the guide's own body the reader got, each mark once.
    const body = document.querySelector("[data-read]") as HTMLElement | null;
    let half = false, done = false;
    const onScroll = () => {
      if (!body) return;
      const r = body.getBoundingClientRect();
      const read = (innerHeight - r.top) / r.height;
      if (!half && read >= 0.5) { half = true; send("Blog Read 50%", { location: "" }); }
      if (!done && read >= 0.95) { done = true; send("Blog Read Complete", { location: "" }); }
    };
    if (body) addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("click", onClick);
      removeEventListener("scroll", onScroll);
    };
  }, []);
  return null;
}
