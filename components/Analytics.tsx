"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { GA_ID, PLAUSIBLE_DOMAIN, PLAUSIBLE_SRC } from "@/lib/site";

// GA4 (consented Ads layer) + Plausible (cookieless, always-on) — both host-gated. The same
// static image serves UAT and prod, so we skip analytics on uat.svasamm.com and local dev, so
// only real production traffic is counted.
const BLOCKED = new Set(["uat.svasamm.com", "localhost", "127.0.0.1"]);

export default function Analytics() {
  // Gate behind client mount: <Script src> triggers ReactDOM.preload() at render time, which
  // would bake analytics preload <link>s into the exported static HTML (served to UAT/localhost
  // too). Returning null until mounted keeps preload out of the export and lets the runtime
  // hostname check below actually suppress UAT/localhost.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  if (BLOCKED.has(window.location.hostname)) return null;
  return (
    <>
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
      {PLAUSIBLE_DOMAIN && (
        <>
          {/* Queue stub so any plausible() call fired before the deferred script loads is
              retained rather than swallowed (matches the lucoze setup). */}
          <Script id="plausible-init" strategy="afterInteractive">
            {`window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)}`}
          </Script>
          <Script
            data-domain={PLAUSIBLE_DOMAIN}
            src={PLAUSIBLE_SRC}
            strategy="afterInteractive"
          />
        </>
      )}
    </>
  );
}
