# svasamm.com Next.js Migration — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the gulp static site in `svasamm-site` with the locally-built Next.js "Nocturne" redesign from `~/Projects/web-dev/svasamm-web`, statically exported and served by the existing nginx/Docker/Traefik/Dokploy pipeline.

**Architecture:** Next 16 App Router with `output: 'export'` → static HTML in `out/`. The multi-stage Dockerfile builds the export and serves it with the current nginx config (plus `.html` `try_files` + 301 redirects). Release-tag CI/CD (`uat-vX.Y.Z` → UAT, `vX.Y.Z` → prod) is unchanged in shape.

**Tech Stack:** Next 16, React 19, TypeScript, Tailwind v4, Inter (next/font), Phosphor (SSR), yarn, Docker, nginx, GA4.

**Reference spec:** `docs/superpowers/specs/2026-07-18-redesign-nextjs-migration-design.md`
**Source app (verified, 50 pages):** `~/Projects/web-dev/svasamm-web`
**Working branch:** `redesign-nextjs` (already created off `develop`; the spec is its first commit).

## Global Constraints

- **Package manager:** yarn. **Node ≥ 20.9** (Next 16 requirement) — everywhere (Dockerfile, CI).
- **Static export only:** `output: 'export'`; no SSR/Node server. `images: { unoptimized: true }` is mandatory (the logo uses `next/image`).
- **Metadata routes need** `export const dynamic = "force-static";` at the top of `app/robots.ts` and `app/sitemap.ts` (export fails otherwise).
- **nginx serves the export with** `try_files $uri.html $uri $uri/ =404;` — `.html` is tried FIRST (bare `$uri` would hit the RSC `.txt` directory and mis-redirect).
- **Canonical URL scheme preserved:** `/pages/*.html` (products, articles, services, contact, about), `/privacy`, `/terms`, `/`.
- **Business facts (verbatim):** Svasamm Research Pvt Ltd · Nabagram, Konnagar, Hooghly, West Bengal 712246, India · email **query@svasamm.com** · phone **+91 91471 44638** · founder **Mithun K. Singh** · **founded 2022**. NO unverified metrics (no "50+ clients / 300% ROI / ISO 27001").
- **GA4 Measurement ID:** `G-EPFCF5F117` — enabled, but **suppressed on `uat.svasamm.com`, `localhost`, `127.0.0.1`** (runtime hostname check).
- **Design = Nocturne** (dark, blurple accent `#9184d9`, Inter weight 500, outlined buttons). Match existing components exactly.

---

## File Structure

**Brought in from `svasamm-web` (become the repo source):** `app/`, `components/`, `lib/`, `public/`, `next.config.ts`, `tsconfig.json`, `next-env.d.ts`, `eslint.config.mjs`, `postcss.config.mjs`, `package.json`, `yarn.lock`, `AGENTS.md`.

**New files created by this plan:**
- `components/Analytics.tsx` — GA4 client island (host-gated).
- `components/AboutPage.tsx` — About page body.
- `public/llms.txt`, `public/og.png`, favicon PNGs, `scratch/og-card.html` (throwaway).

**Removed:** `src/`, `gulpfile.js`, `dist/`, `.htmlvalidate.json`, `.stylelintrc.json`, and the default create-next-app SVGs in `public/` (`file/globe/next/vercel/window.svg`).

**Modified deployment/CI:** `deployment/docker/Dockerfile`, `deployment/nginx/nginx.conf`, `.github/workflows/deploy.yml`, `CLAUDE.md`.

---

## Task 1: Bring the Next app in, strip gulp, configure static export

**Files:**
- Copy into repo root: everything listed under "Brought in from svasamm-web" above.
- Modify: `next.config.ts`, `app/robots.ts`, `app/sitemap.ts`, `.gitignore`.
- Remove: `src/`, `gulpfile.js`, `dist/`, `.htmlvalidate.json`, `.stylelintrc.json`, `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`.

**Interfaces:**
- Produces: a repo whose `yarn build` emits static HTML to `out/` — every `/pages/*.html`, `/privacy`, `/terms`, `/`, `404.html`, `sitemap.xml`, `robots.txt`.

- [ ] **Step 1: Confirm branch**

Run: `cd ~/Projects/web-dev/svasamm-site && git branch --show-current`
Expected: `redesign-nextjs`

- [ ] **Step 2: Remove gulp source & config**

```bash
cd ~/Projects/web-dev/svasamm-site
git rm -r -q src dist 2>/dev/null; rm -rf dist
git rm -q gulpfile.js .htmlvalidate.json .stylelintrc.json
```

- [ ] **Step 3: Copy the Next app in (do not copy .git/.next/node_modules/out/docs)**

```bash
SRC=~/Projects/web-dev/svasamm-web
cp -R "$SRC"/app "$SRC"/components "$SRC"/lib "$SRC"/public .
cp "$SRC"/next.config.ts "$SRC"/tsconfig.json "$SRC"/next-env.d.ts \
   "$SRC"/eslint.config.mjs "$SRC"/postcss.config.mjs "$SRC"/AGENTS.md \
   "$SRC"/package.json "$SRC"/yarn.lock .
```

Note: this overwrites the repo's `package.json` with the Next one, and `CLAUDE.md` is handled in Task 7 (merge). Do NOT copy `svasamm-web/CLAUDE.md` yet.

- [ ] **Step 4: Remove default create-next-app SVGs**

```bash
rm -f public/file.svg public/globe.svg public/next.svg public/vercel.svg public/window.svg
```

- [ ] **Step 5: Set static-export config**

Overwrite `next.config.ts` with:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true }, // required for static export; the logo uses next/image
};

export default nextConfig;
```

- [ ] **Step 6: Make the metadata routes static-export-safe**

Add as the FIRST line of `app/robots.ts` AND `app/sitemap.ts`:

```ts
export const dynamic = "force-static";
```

(If the copied files already contain this line — they may — leave it; do not duplicate.)

- [ ] **Step 7: Ensure `.gitignore` covers Next artifacts**

Ensure `.gitignore` contains these lines (append any missing):

```
node_modules
.next
out
*.tsbuildinfo
next-env.d.ts
.DS_Store
```

- [ ] **Step 8: Install deps and build the export**

Run:
```bash
yarn install --frozen-lockfile
yarn build
```
Expected: build succeeds; ends with `✓ Generating static pages` and no error. `out/` now exists.

- [ ] **Step 9: Verify the export layout (the de-risked contract)**

Run:
```bash
ls out/pages/millingo.html.html out/pages/custom-milled-rice-cmr-process.html.html \
   out/pages/services.html.html out/pages/contact.html.html \
   out/privacy.html out/terms.html out/index.html out/404.html \
   out/sitemap.xml out/robots.txt >/dev/null && echo "LAYOUT OK"
grep -c "<loc>" out/sitemap.xml
```
Expected: `LAYOUT OK`; sitemap loc count = **50**.

- [ ] **Step 10: Commit**

```bash
git add -A
git commit -m "Migrate to Next.js static export; remove gulp source"
```

---

## Task 2: Rebuild the About page at /pages/about.html

**Files:**
- Create: `components/AboutPage.tsx`
- Modify: `lib/pages.ts` (add `about.html` to `CORE_BY_SLUG`), `app/pages/[slug]/page.tsx` (dispatch about), `components/SiteFooter.tsx` (add About link).

**Interfaces:**
- Consumes: `CORE_BY_SLUG` (from `lib/pages.ts`, `CorePage = { kind, seo, jsonLd }`), the dispatcher in `app/pages/[slug]/page.tsx`.
- Produces: route `/pages/about.html` (200), auto-included in the sitemap (sitemap iterates `CORE_BY_SLUG`).

- [ ] **Step 1: Extend `CorePage` kind and add the About record**

In `lib/pages.ts`, change the `CorePage` type's `kind` union to include `"about"`:

```ts
export type CorePage = { kind: "solutions" | "contact" | "about"; seo: Seo; jsonLd: object[] };
```

Then add this entry inside `CORE_BY_SLUG`:

```ts
  "about.html": {
    kind: "about",
    seo: {
      metaTitle: "About Svasamm — Vertical ERPs Built in West Bengal | Svasamm",
      metaDescription: "Svasamm Research Pvt Ltd builds vertical ERPs and business platforms for Indian operations. Founded 2022 in Konnagar, West Bengal, by Mithun K. Singh.",
      canonical: "https://svasamm.com/pages/about.html",
      ogType: "website",
      ogTitle: "About Svasamm",
      ogDescription: "Vertical ERPs and business platforms, built in West Bengal for Indian operations.",
    },
    jsonLd: [
      { "@context": "https://schema.org", "@type": "AboutPage", name: "About Svasamm", url: "https://svasamm.com/pages/about.html", mainEntity: { "@type": "Organization", name: "Svasamm Research Pvt Ltd", alternateName: "Svasamm", url: "https://svasamm.com", email: "query@svasamm.com", telephone: "+91-91471-44638", foundingDate: "2022", founder: { "@type": "Person", name: "Mithun K. Singh", jobTitle: "Founder" }, address: { "@type": "PostalAddress", streetAddress: "Nabagram, Konnagar", addressLocality: "Hooghly", addressRegion: "West Bengal", postalCode: "712246", addressCountry: "IN" }, areaServed: "IN" } },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://svasamm.com/" }, { "@type": "ListItem", position: 2, name: "About", item: "https://svasamm.com/pages/about.html" }] },
    ],
  },
```

- [ ] **Step 2: Create the About page body**

Create `components/AboutPage.tsx` (Nocturne style, verified facts only, founder byline for E-E-A-T):

```tsx
import Link from "next/link";
import { Icon } from "./Icon";
import { toRoute } from "@/lib/routes";

const CONTACT = toRoute("Contact.dc.html");
const SOLUTIONS = toRoute("Solutions.dc.html");

const VALUES = [
  { icon: "ph-sliders-horizontal", title: "Built per industry", body: "We start from how an industry actually works — its workflow, terminology and compliance — and build that in, rather than bending a generic tool to fit." },
  { icon: "ph-hard-drives", title: "Self-hostable", body: "Run on your own infrastructure or ours. Your operational data stays where you decide it should." },
  { icon: "ph-plugs-connected", title: "API-first", body: "Every module speaks REST, so it integrates with what you already run instead of replacing it." },
  { icon: "ph-flag", title: "India-first", body: "GST, ABDM and CMR handled inside the product — because compliance here is not an afterthought." },
];

// About / Company page — verified facts only (no fabricated metrics). Founder byline is
// an E-E-A-T signal. Ports the Nocturne look of the other core pages.
export default function AboutPage() {
  return (
    <>
      <section className="pp-glow" style={{ borderBottom: "1px solid var(--color-divider)" }}>
        <div className="pp-wrap" style={{ padding: "30px 24px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "var(--color-neutral-500)" }}>
            <Link href="/" style={{ color: "var(--color-neutral-400)" }}>Home</Link>
            <Icon name="ph-caret-right" style={{ fontSize: 11 }} />
            <span style={{ color: "var(--color-text)" }}>About</span>
          </div>
        </div>
        <div className="pp-wrap" style={{ padding: "40px 24px 56px", maxWidth: 820 }}>
          <div className="tag tag-outline" style={{ marginBottom: 20 }}>About Svasamm</div>
          <h1 style={{ fontSize: 42, lineHeight: 1.1, letterSpacing: "-.025em", margin: "0 0 14px", color: "var(--color-text)" }}>Vertical software, built where the work happens</h1>
          <p style={{ fontSize: 14, color: "var(--color-neutral-500)", margin: 0 }}>Svasamm Research Pvt Ltd · Founded 2022 · Konnagar, West Bengal</p>
        </div>
      </section>

      <section style={{ padding: "48px 0 8px" }}>
        <div className="pp-wrap" style={{ maxWidth: 820 }}>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--color-neutral-200)", margin: "0 0 16px" }}>Svasamm Research Pvt Ltd is a software company based in Nabagram, Konnagar, in Hooghly, West Bengal. We build vertical ERPs and business platforms for Indian operations — systems that carry an industry&apos;s workflow, terminology and compliance inside them, instead of generic tools that have to be bent to fit.</p>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--color-neutral-300)", margin: "0 0 14px" }}>Founded in 2022 by Mithun K. Singh, Svasamm grew out of close work with businesses whose real processes never fit off-the-shelf software — rice mills running government custom-milling cycles, hospitals and clinics, and manufacturers selling through distributor networks. That is why our flagship products are vertical: <Link href={toRoute("Millingo.dc.html")} className="pp-link" style={{ color: "var(--color-accent-300)" }}>Millingo</Link> for rice mills, <a href="https://lucoze.com" target="_blank" rel="noopener" className="pp-link" style={{ color: "var(--color-accent-300)" }}>Lucoze</a> for healthcare, and a <Link href={toRoute("DMS.dc.html")} className="pp-link" style={{ color: "var(--color-accent-300)" }}>distributor management system</Link> for OEM channels — alongside the platform modules every operation needs: ERP, HRMS, CRM, service desk and loan management.</p>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--color-neutral-300)", margin: "0 0 8px" }}>Being rooted in West Bengal means we understand state-specific procurement and compliance first-hand — from e-Paddy and CMR obligations across the eastern belt to Indian GST — and we deploy pan-India and for global teams, on our infrastructure or yours.</p>
        </div>
      </section>

      <section style={{ padding: "24px 0 24px" }}>
        <div className="pp-wrap" style={{ maxWidth: 820 }}>
          <h2 style={{ fontSize: 24, letterSpacing: "-.015em", margin: "0 0 18px", color: "var(--color-text)" }}>How we build</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 18 }}>
            {VALUES.map((v) => (
              <div key={v.title} style={{ padding: 22, borderRadius: 14, background: "var(--color-surface)", border: "1px solid var(--color-neutral-800)" }}>
                <Icon name={v.icon} style={{ fontSize: 26, color: "var(--color-accent-300)" }} />
                <h3 style={{ fontSize: 16, margin: "14px 0 7px", color: "var(--color-text)" }}>{v.title}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--color-neutral-400)", margin: 0 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "24px 0 88px" }}>
        <div className="pp-wrap" style={{ maxWidth: 820 }}>
          <div className="pp-glow" style={{ border: "1px solid var(--color-neutral-800)", borderRadius: 20, padding: "44px 40px", textAlign: "center", background: "var(--color-surface)" }}>
            <h2 style={{ fontSize: 26, letterSpacing: "-.02em", margin: "0 0 12px", color: "var(--color-text)" }}>Work with the people who build it</h2>
            <p style={{ fontSize: 15.5, color: "var(--color-neutral-300)", margin: "0 auto 24px", maxWidth: "34em" }}>Tell us what you run and we&apos;ll show you the fit — or tell you honestly if we&apos;re not it.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href={CONTACT} className="btn btn-primary btn-large" style={{ fontSize: 15, padding: "11px 24px" }}>Talk to us</Link>
              <Link href={SOLUTIONS} className="btn btn-secondary btn-large" style={{ fontSize: 15, padding: "11px 24px" }}>Browse solutions</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Dispatch About in the [slug] route**

In `app/pages/[slug]/page.tsx`: add the import and the render branch.

Add with the other component imports:
```ts
import AboutPage from "@/components/AboutPage";
```

In the `active` line, extend it so About highlights nothing special (treat like a content page). Change:
```ts
  const active = core?.kind === "solutions" ? "solutions" : core?.kind === "contact" ? "contact" : "products";
```
to:
```ts
  const active = core?.kind === "solutions" ? "solutions" : core?.kind === "contact" ? "contact" : core?.kind === "about" ? "about" : "products";
```

In the `<main>` body, add after the contact branch:
```tsx
        {core?.kind === "about" && <AboutPage />}
```

- [ ] **Step 4: Add About to the footer**

In `components/SiteFooter.tsx`, find the "Company" column links (they include All solutions / Why Svasamm / Regions / Contact). Add an About link pointing to `/pages/about.html`. Match the existing link markup in that column exactly; insert after "All solutions":
```tsx
            <Link href="/pages/about.html">About</Link>
```
(Use the same element/props the sibling links in that column use — copy their `className`/`style`.)

- [ ] **Step 5: Build and verify About renders + is in the sitemap**

Run:
```bash
yarn build
ls out/pages/about.html.html >/dev/null && echo "ABOUT OK"
grep -c "about.html" out/sitemap.xml
grep -c "testimonials" out/sitemap.xml
```
Expected: `ABOUT OK`; `about.html` count ≥ 1; `testimonials` count = **0**.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "Add About page at /pages/about.html (Nocturne, E-E-A-T, JSON-LD)"
```

---

## Task 3: Enable GA4 (host-gated) + contact-form lead event

**Files:**
- Create: `components/Analytics.tsx`
- Modify: `app/layout.tsx` (render `<Analytics/>`), `components/ContactForm.tsx` (fire `generate_lead`), `lib/site.ts` (export `GA_ID`).

**Interfaces:**
- Produces: `GA_ID` constant in `lib/site.ts`; `<Analytics/>` component; a global `window.gtag`.

- [ ] **Step 1: Add the GA_ID constant**

In `lib/site.ts`, add near the top (after `SITE_URL`):
```ts
// GA4 Measurement ID. Enabled in prod; the Analytics component suppresses it on UAT/localhost.
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-EPFCF5F117";
```

- [ ] **Step 2: Create the host-gated Analytics island**

Create `components/Analytics.tsx`:

```tsx
"use client";

import Script from "next/script";
import { GA_ID } from "@/lib/site";

// GA4, host-gated. The same static image serves UAT and prod, so we skip gtag on
// uat.svasamm.com and local dev — analytics only counts real production traffic.
const BLOCKED = new Set(["uat.svasamm.com", "localhost", "127.0.0.1"]);

export default function Analytics() {
  if (typeof window !== "undefined" && BLOCKED.has(window.location.hostname)) return null;
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
```

Note: the `window` check runs on the client after hydration. Because GA scripts load `afterInteractive` (client-only), the host gate is effective for the actual analytics load.

- [ ] **Step 3: Render Analytics in the layout**

In `app/layout.tsx`, import and render it inside `<body>` (after `{children}`):
```tsx
import Analytics from "@/components/Analytics";
```
```tsx
      <body className="min-h-screen bg-bg text-text flex flex-col">
        {children}
        <Analytics />
      </body>
```

- [ ] **Step 4: Declare `window.gtag` for TypeScript**

Add to `app/layout.tsx` (top level, after imports) OR a `types/global.d.ts`. Simplest — add this to the top of `components/ContactForm.tsx` (below `"use client";`):
```ts
declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}
```

- [ ] **Step 5: Fire `generate_lead` on successful submit**

In `components/ContactForm.tsx`, inside `submit()`, right after the success state is set (`setSent(true)`), add:
```ts
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "generate_lead", { form: "contact", page_location: location.href });
    }
```

- [ ] **Step 6: Build and verify GA is wired**

Run:
```bash
yarn build
grep -rl "G-EPFCF5F117" out >/dev/null && echo "GA ID baked into client bundle"
```
Expected: `GA ID baked into client bundle` (the ID is inlined into a client JS chunk under `out/_next/`; the `afterInteractive` scripts load client-side, where the runtime host gate suppresses UAT/localhost).

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "Enable GA4 (G-EPFCF5F117), host-gated; fire generate_lead on contact submit"
```

---

## Task 4: Carry over favicons, llms.txt, OG image + metadata

**Files:**
- Create: `public/favicon-16.png`, `public/favicon-32.png`, `public/apple-touch-icon.png`, `public/favicon.ico`, `public/llms.txt`, `public/og.png`, `scratch/og-card.html` (throwaway, not committed).
- Modify: `app/layout.tsx` (metadata `icons` + `openGraph.images`).

**Interfaces:**
- Produces: site-wide favicons + OG image referenced from root metadata.

- [ ] **Step 1: Copy favicons from the old site**

The `src/` tree was removed in Task 1, but `develop` still has the favicons — read them from there:
```bash
git show develop:src/images/favicon/180.png        > public/apple-touch-icon.png
git show develop:src/images/favicon/32.png         > public/favicon-32.png
git show develop:src/images/favicon/16.png         > public/favicon-16.png
git show develop:src/images/favicon/favicon.ico    > public/favicon.ico
```
Verify: `ls -la public/favicon.ico public/apple-touch-icon.png public/favicon-16.png public/favicon-32.png` — all non-zero size.

- [ ] **Step 2: Wire favicon + OG metadata in the layout**

In `app/layout.tsx`, extend the `metadata` export with `icons` and `openGraph`:
```ts
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: "Svasamm",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Svasamm — vertical ERPs & business platforms" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
```
(Merge into the existing `metadata` object; keep `metadataBase`, `title`, `description`.)

- [ ] **Step 3: Author the OG card HTML**

Create `scratch/og-card.html`:
```html
<!doctype html><html><head><meta charset="utf-8"><style>
  html,body{margin:0}
  .c{width:1200px;height:630px;box-sizing:border-box;padding:80px;
     background:#161826;color:#e9e9ed;font-family:Inter,Arial,sans-serif;
     display:flex;flex-direction:column;justify-content:center;
     background-image:radial-gradient(60% 55% at 82% 12%, rgba(145,132,217,.28), transparent 70%);}
  .badge{display:inline-block;align-self:flex-start;border:1px solid #3f424d;border-radius:999px;
     padding:8px 16px;font-size:20px;color:#d2cefd;margin-bottom:28px}
  h1{font-size:66px;line-height:1.05;letter-spacing:-.02em;font-weight:600;margin:0 0 22px;max-width:16em}
  p{font-size:28px;line-height:1.4;color:#cfd3e5;margin:0;max-width:24em}
  .foot{margin-top:auto;font-size:24px;color:#9397ab}
  b{color:#9184d9}
</style></head><body>
  <div class="c">
    <span class="badge">Svasamm Research Pvt Ltd · India</span>
    <h1>Business software built for how your industry actually runs.</h1>
    <p>Vertical ERPs & platform modules — Millingo, Lucoze, DMS, and more.</p>
    <div class="foot"><b>svasamm.com</b> · API-first · Self-hostable · India-first</div>
  </div>
</body></html>
```

- [ ] **Step 4: Render the OG card to `public/og.png` (1200×630)**

Using the Playwright MCP (or any headless browser): resize viewport to 1200×630, navigate to `file://<abs>/scratch/og-card.html`, screenshot (png, not full-page) to `public/og.png`.

If using the Playwright MCP tools in this session:
- `browser_resize` width=1200 height=630
- `browser_navigate` url=`file:///Users/mithunksingh/Projects/web-dev/svasamm-site/scratch/og-card.html`
- `browser_take_screenshot` type=png, filename=`/Users/mithunksingh/Projects/web-dev/svasamm-site/public/og.png` (viewport screenshot, `fullPage` omitted)

Verify: `ls -la public/og.png` — non-zero; open to confirm it's the branded card at 1200×630.

- [ ] **Step 5: Author llms.txt for the new content set**

Create `public/llms.txt`:
```
# Svasamm Research Pvt Ltd

> Svasamm builds vertical ERPs and business platforms for Indian operations —
> systems that carry an industry's workflow, terminology and compliance inside them.
> Founded 2022 in Konnagar, Hooghly, West Bengal. API-first, self-hostable, India-first.
> Contact: query@svasamm.com · +91 91471 44638.

## Products
- Millingo — Rice Mill ERP (paddy procurement, quality grading, milling yield & by-products, FCI/levy CMR compliance): https://svasamm.com/pages/millingo.html
- Lucoze — Healthcare HIMS (external product): https://lucoze.com
- DMS — Distributor Management for OEM channels: https://svasamm.com/pages/dms.html
- ERP System: https://svasamm.com/pages/erp.html
- HRMS: https://svasamm.com/pages/hrms.html
- CRM Platform: https://svasamm.com/pages/crm.html
- Service Desk (ITSM): https://svasamm.com/pages/service-desk.html
- Loan Management: https://svasamm.com/pages/loan-management.html

## Key resources
- All solutions: https://svasamm.com/pages/services.html
- About: https://svasamm.com/pages/about.html
- Contact: https://svasamm.com/pages/contact.html
- Rice-mill guides, state pages & comparisons, and OEM-industry DMS pages are linked from each product page.

## Sitemap
https://svasamm.com/sitemap.xml
```

- [ ] **Step 6: Build and verify assets export**

Run:
```bash
yarn build
ls out/og.png out/llms.txt out/favicon.ico out/apple-touch-icon.png >/dev/null && echo "ASSETS OK"
grep -o '/og.png' out/index.html | head -1
```
Expected: `ASSETS OK`; `/og.png` referenced in the home HTML.

- [ ] **Step 7: Commit (exclude scratch/)**

```bash
echo "scratch/" >> .gitignore
git add -A
git commit -m "Carry over favicons, llms.txt, branded OG image + metadata"
```

---

## Task 5: Dockerfile + nginx for the static export

**Files:**
- Modify: `deployment/docker/Dockerfile`, `deployment/nginx/nginx.conf`.

**Interfaces:**
- Consumes: `out/` from `yarn build`.
- Produces: an nginx image serving the export with correct `.html` routing, 301 redirects, 404, health.

- [ ] **Step 1: Update the Dockerfile builder + copy path**

In `deployment/docker/Dockerfile`:
- Change `FROM node:18-alpine AS builder` → `FROM node:20-alpine AS builder`.
- Change `COPY --from=builder /app/dist /usr/share/nginx/html` → `COPY --from=builder /app/out /usr/share/nginx/html`.
- Leave everything else (nginx stage, healthcheck `127.0.0.1/health`, labels) unchanged.

- [ ] **Step 2: Update nginx `try_files` and add redirects**

In `deployment/nginx/nginx.conf`:

Replace the main location block:
```nginx
        location / {
            try_files $uri $uri/ =404;
        }
```
with (`.html` tried first — this is the export contract):
```nginx
        location / {
            try_files $uri.html $uri $uri/ =404;
        }
```

Add these 301 redirects immediately BEFORE that `location /` block (inside `server {}`):
```nginx
        # Redesign URL moves / removed pages — preserve link equity from indexed URLs.
        location = /pages/privacy.html          { return 301 /privacy; }
        location = /pages/terms-of-service.html { return 301 /terms; }
        location = /pages/testimonials.html     { return 301 /; }
        location = /pages/hims.html             { return 301 https://lucoze.com/; }
```

Leave the security headers, `map $host $robots_tag` (UAT noindex), `www.svasamm.com` → apex 301, HSTS, `error_page 404 /404.html`, `location = /404.html { internal; }`, `/health`, gzip, and cache blocks unchanged.

- [ ] **Step 3: Build the production image**

Run:
```bash
docker build --platform linux/amd64 -t svasamm-web-test -f ./deployment/docker/Dockerfile .
```
Expected: image builds successfully.

- [ ] **Step 4: Run and smoke-test the container**

Run:
```bash
docker run -d --rm -p 8088:80 --name svasamm-test svasamm-web-test
sleep 2
echo "health:";  curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8088/health
echo "home:";    curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8088/
echo "product:"; curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8088/pages/millingo.html
echo "article:"; curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8088/pages/custom-milled-rice-cmr-process.html
echo "about:";   curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8088/pages/about.html
echo "privacy:"; curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8088/privacy
echo "terms:";   curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8088/terms
echo "sitemap:"; curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8088/sitemap.xml
echo "robots:";  curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8088/robots.txt
echo "unknown:"; curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8088/no-such-page
echo "redir privacy:"; curl -s -o /dev/null -w "%{http_code} -> %{redirect_url}\n" http://localhost:8088/pages/privacy.html
echo "redir terms:";   curl -s -o /dev/null -w "%{http_code} -> %{redirect_url}\n" http://localhost:8088/pages/terms-of-service.html
echo "redir hims:";    curl -s -o /dev/null -w "%{http_code} -> %{redirect_url}\n" http://localhost:8088/pages/hims.html
echo "redir tstml:";   curl -s -o /dev/null -w "%{http_code} -> %{redirect_url}\n" http://localhost:8088/pages/testimonials.html
docker stop svasamm-test
```
Expected: health/home/product/article/about/privacy/terms/sitemap/robots = **200**; unknown = **404**; privacy → 301 → `/privacy`; terms → 301 → `/terms`; hims → 301 → `https://lucoze.com/`; testimonials → 301 → `/`.

- [ ] **Step 5: Verify the 404 body and sitemap content-type**

Run:
```bash
docker run -d --rm -p 8088:80 --name svasamm-test svasamm-web-test; sleep 2
curl -s http://localhost:8088/no-such-page | grep -o "Page not found\|404" | head -1
curl -s -I http://localhost:8088/sitemap.xml | grep -i "content-type"
docker stop svasamm-test
```
Expected: 404 page body renders (not the homepage); sitemap `Content-Type` is `application/xml` or `text/xml`.

- [ ] **Step 6: Commit**

```bash
git add deployment/docker/Dockerfile deployment/nginx/nginx.conf
git commit -m "Deploy: node 20 + serve Next static export; .html try_files + 301 redirects"
```

---

## Task 6: CI workflow — Node 20 + Next build/typecheck test

**Files:**
- Modify: `.github/workflows/deploy.yml`, `package.json` (scripts).

- [ ] **Step 1: Update package.json scripts**

In `package.json`, set the `scripts` block to (Next-based; drop gulp/minify/optimize):
```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "test": "yarn typecheck",
    "docker:build": "docker build --platform linux/amd64 -t svasamm-website -f ./deployment/docker/Dockerfile .",
    "docker:run": "docker run -p 80:80 svasamm-website"
  },
```

- [ ] **Step 2: Update the CI test job + Node version**

In `.github/workflows/deploy.yml`:
- Every `node-version: '18'` → `node-version: '20'`.
- In the `test` job steps, the run commands become:
```yaml
      - run: yarn install --frozen-lockfile
      - run: yarn build
      - run: yarn typecheck
```
(Remove the old `yarn test` line that ran html-validate + stylelint.)

- [ ] **Step 3: Verify scripts locally**

Run:
```bash
yarn typecheck
yarn build
```
Expected: typecheck clean; build succeeds.

- [ ] **Step 4: Commit**

```bash
git add package.json .github/workflows/deploy.yml
git commit -m "CI: Node 20; test = next build + tsc typecheck"
```

---

## Task 7: Docs, CLAUDE.md merge, final verification

**Files:**
- Modify: `CLAUDE.md` (merge redesign app docs + keep deployment/CI context), `docs/deployment.md` (note the Next/export change).

- [ ] **Step 1: Merge CLAUDE.md**

Replace the repo `CLAUDE.md` with the redesign app CLAUDE.md content from `~/Projects/web-dev/svasamm-web/CLAUDE.md`, then append a "## Deployment" section capturing the pipeline facts that were only in the old CLAUDE.md: static export served by nginx (`out/` → `/usr/share/nginx/html`, `try_files $uri.html ...`), Docker multi-stage (node 20 builder → nginx), release-tag CI/CD (`uat-vX.Y.Z`/`vX.Y.Z` → Docker Hub → Dokploy webhooks), nginx does www→apex + HSTS + UAT-noindex-by-Host + the four 301 redirects, GA4 `G-EPFCF5F117` host-gated. Keep the `@AGENTS.md` import line at the top.

- [ ] **Step 2: Note the change in docs/deployment.md**

Add a short section to `docs/deployment.md`: "As of v0.1.0 the site is a Next.js static export (`output: 'export'` → `out/`), not gulp. Build = `yarn build`; the image serves `out/` via nginx. Redirects for the old `/pages/{privacy,terms-of-service,hims,testimonials}.html` URLs live in `deployment/nginx/nginx.conf`."

- [ ] **Step 3: Full clean verification**

Run:
```bash
rm -rf out .next
yarn build
node -e '
const fs=require("fs"),path=require("path");
let files=[]; (function w(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name); if(e.isDirectory())w(p); else if(e.name.endsWith(".html"))files.push(p);}})("out");
let blocks=0,bad=0,faq=0;
for(const f of files){const h=fs.readFileSync(f,"utf8");const seen=new Set();
 for(const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){if(seen.has(m[1]))continue;seen.add(m[1]);blocks++;
  try{const o=JSON.parse(m[1]);if(o["@type"]==="FAQPage")faq++;}catch(e){bad++;console.log("BAD JSON",f);}}}
console.log("html files:",files.length,"| ld+json blocks:",blocks,"| parse failures:",bad,"| FAQPage:",faq);
'
grep -c "<loc>" out/sitemap.xml
```
Expected: build clean; parse failures = **0**; FAQPage = **45**; sitemap loc count = **51** (50 prior + About).

- [ ] **Step 4: Docker re-verify (same matrix as Task 5 Step 4)**

Re-run the Task 5 Step 4 curl matrix against a fresh image build. All expectations must still hold.

- [ ] **Step 5: Lighthouse spot-check (optional but recommended)**

Serve `out/` (e.g. `npx serve out -l 8099`) and run Lighthouse (or the seo-performance agent) on `/`, one product, one article. Target: Performance ≥ 90, SEO = 100, Accessibility ≥ 95. Record results; fix only clear regressions.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "Docs: merge CLAUDE.md, note Next static-export deployment"
```

- [ ] **Step 7: STOP for founder manual review (gate 1)**

Do NOT open the PR yet. Summarize what was built and the verification results, and hand to the founder for local review sign-off. On approval: push `redesign-nextjs`, open PR → `develop`.

---

## Self-Review (author check against spec)

- **Spec §2 static export** → Task 1 (config) ✓
- **Spec §3 repo/build changes** → Task 1 (copy, strip gulp, node handled in Task 5/6) ✓
- **Spec §4 Dockerfile/nginx/redirects** → Task 5 ✓; **CI** → Task 6 ✓
- **Spec §5 About rebuild** → Task 2 ✓; **testimonials 301 + no page** → Task 5 redirect + Task 2 Step 5 (sitemap excludes) ✓; **hims/privacy/terms 301** → Task 5 ✓
- **Spec §5 GA4 (G-EPFCF5F117, host-gated, generate_lead)** → Task 3 ✓
- **Spec §5 llms.txt / favicons / OG image / sitemap** → Task 4 ✓
- **Spec §6 flow + founder gate 1** → Task 7 Step 7 ✓ (gate 2 on UAT is post-merge, outside this plan)
- **Spec §7 Phase-0 export layout** → resolved and encoded as the `try_files`/force-static constraints; verified in Task 1 Step 9 ✓
- **Placeholder scan:** none — all code/config/commands are concrete.
- **Type consistency:** `CorePage.kind` extended to include `"about"` in Task 2 Step 1 before use in Steps 3; `GA_ID` defined (Task 3 Step 1) before use (Steps 2); `window.gtag` declared (Task 3 Step 4) before use (Step 5). ✓

## Notes / follow-ups (out of scope, tracked in spec §8)

- Contact-form backend (Route Handler → email) — deferred; form is client-only.
- Sanity migration of `lib/` data — deferred.
- Post-merge: release `uat-v0.1.0`, UAT validate, **founder gate 2**, then `v0.1.0` prod cutover; re-submit sitemap to GSC.
