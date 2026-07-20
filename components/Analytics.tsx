"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { GA_ID } from "@/lib/site";

// GA4, host-gated. The same static image serves UAT and prod, so we skip gtag on
// uat.svasamm.com and local dev — analytics only counts real production traffic.
const BLOCKED = new Set(["uat.svasamm.com", "localhost", "127.0.0.1"]);

export default function Analytics() {
  // Gate behind client mount: <Script src> triggers ReactDOM.preload() at render time,
  // which would bake a gtag.js preload <link> into the exported static HTML (served to
  // UAT/localhost too). Returning null until mounted keeps preload out of the export and
  // lets the runtime hostname check below actually suppress UAT/localhost.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  if (BLOCKED.has(window.location.hostname)) return null;
  if (!GA_ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
