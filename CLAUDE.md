@AGENTS.md

# Svasamm website (redesign) — Next.js

The SEO/GEO-first marketing site for **Svasamm Research Pvt Ltd**, rebuilt in Next.js from
the Nocturne redesign at `~/Downloads/svasamm-website-redesign` (README.md +
content-and-seo-map.md + design-tokens.css + `prototypes/*.dc.html` = source of truth for
tokens, copy, structure, and per-page SEO/JSON-LD). Replaces the live gulp site at cutover
(this repo — the gulp source was removed when the migration landed; see `## Deployment`
below for what actually ships).

> **Heed AGENTS.md above: this is Next 16 — read `node_modules/next/dist/docs/` before
> writing Next code.** Key: `params` is a `Promise` (await it); `generateMetadata` async;
> `sitemap.ts`/`robots.ts` return `MetadataRoute.*`; JSON-LD via a `<script type="application/ld+json">`.

## SEO/GEO — active initiative (from 2026-07-27)
Goal: bring **svasamm.com to lucoze.com's SEO level** so Google ranks it. Two payoffs: inbound leads for
**Svasamm Digital** (the web/SEO service) **and** a live "we rank our own site" proof-point for that sales
pitch. **Workflow: assistant runs the audit READ-ONLY (claude-seo `/seo audit`, `/seo geo`) + hands the
founder a prioritized fix list; the FOUNDER executes writes** (this repo is founder-owned; coordinate before
editing). Don't touch UAT indexing (stays `noindex`).

**Status (2026-07-28):** audit done (~83/100 — site is strong; bottleneck is authority + indexation, not
on-page). GSC connected (`sc-domain:svasamm.com`, service account = **Owner**); 57/57 URLs pushed to the
Indexing API; sitemap processed. **Winning clusters (GSC):** 🏆 rice-mill/Millingo at **pos ~8** (the quick
page-1 win) · 💰 healthcare/Svasamm-Digital at **pos ~59** (revenue-relevant, slow — needs GBP + reviews).
**Adding/editing SEO content — the workflow (the extractor is GONE):** `lib/articles.ts` is the frozen
generated set — do NOT try to regenerate it. **New articles** go in a **hand-authored source file**
(`lib/rice-mill-articles.ts`, `lib/digital-articles.ts`) merged in `lib/article-registry.ts` ("add a future
source in this file only") — this auto-routes (`app/pages/[slug]`) and auto-sitemaps (`app/sitemap.ts`).
**Small edits to existing generated articles** = minimal hand-edits in `articles.ts` (safe — nothing
regenerates it). New pages need **no hero** (gradient fallback when the slug isn't in the auto-gen
`heroes.ts`); section `text` is **plain** (no inline links) — cross-link via the `related[]` array whose
`href` is a `PROTO_TO_ROUTE` key in `lib/routes.ts`; breadcrumbs render from the `BreadcrumbList` JSON-LD.
Always `yarn typecheck` + `yarn build` before committing. Facts come from the marketing-vault (cited).

**Done (branch `feature/svasamm-seo-nap`, committed, NOT deployed):** rice-mill quick wins — new
`cmr-out-turn-shortfall-moisture` page + front-loaded CMR/yield/GST intros + cross-links (build-verified,
62 pages). NAP: svasamm phone → 9007793575. **Next:** healthcare cluster + more Millingo content
(plans in `~/Projects/web-dev/svasamm.com-audit/`). No deploy without the founder's explicit go.

## Stack
Next 16 (App Router, **SSG** — every page static HTML for SEO) · React 19 · TypeScript ·
Tailwind v4 (CSS-first `@theme`) · Inter via `next/font` · Phosphor via
`@phosphor-icons/react/dist/ssr`. Package manager: **yarn**. `yarn dev` / `yarn build`.

## Design system

> **⭐ CURRENT SOURCE OF TRUTH = `svasamm-handoff/` (dated 2026-08-09)** — a complete 53-page
> `.dc.html` handoff + its `svasamm.css` (supersedes the older `~/Projects/web-dev/claude-code-handoff`).
> Its `--sv-*` tokens are **already byte-identical to `app/svasamm.css`** (the design system is correctly
> ported). Read `svasamm-handoff/README.md` + `pages/<X>.dc.html` as the visual reference for any page.
>
> **🐛 ROOT CAUSE of "brightness not coming out" (diagnosed 2026-08-09):** the rebrand shipped every
> component reading **nocturne's `--color-*` role-flipped ramp** (a lossy approximation of the dark theme —
> `--color-accent-300` is `#2b6fe3` where the design's `--sv-brand-300` is the airy `#8fb6fb`; the airy
> `brand-200/300/400` tints + `--sv-teal`/`--sv-amber` signal colours are missing entirely) **instead of the
> crisp `--sv-*` design tokens**. Fix = port each component onto `--sv-*` + the `.sv-*` classes, NOT a global
> `--color-*` remap (some components use `--color-accent-300` for icon *colour* → a blind remap regresses them).
> **For any new/ported UI use `var(--sv-*)` + `.sv-*` classes (`.sv-card`, `.sv-chip`, `.sv-btn*`, `.sv-tag*`,
> `.sv-eyebrow`, `.sv-field-deep`), never `--color-*`.**
>
> **✅ PORTED so far (branch `feat/productpage-design-match`, off develop, build green, verified, NOT deployed):**
> **`components/ProductPage.tsx`** (drives all 6 product pages) fully re-ported to `--sv-*`: two-column hero on a
> **brand-50 radial wash** (`.pp-hero-wash` + `.pp-hero` grid in globals.css) with a **framed photo in a `.sv-card`**
> (sv-sh-3) + mono **teal-dot `<figcaption>`** (wires the existing `/hero/<id>.webp`, caption from a local
> `HERO_CAPTION` map); `.sv-card` capabilities w/ `.sv-chip` brand icon chips; `.sv-tag-brand/-outline`; tier
> `.sv-card`s; **navy `.sv-field-deep` CTA band** (was a light card). Kept our IA (header Solutions/Resources/
> Contact, phone 90077 93575) + our section order per founder — **"match visuals only, keep our IA"** (founder,
> 2026-08-09). SEO/JSON-LD untouched (byte-identical). Verified desktop + 360px vs the design screenshots.
> **⏭️ STILL TO PORT** (same pattern, awaiting founder review): **Home (`app/page.tsx`), `Article.tsx`
> (guides/states/compares), `SolutionsPage.tsx`, `ContactPage.tsx`, `AboutPage.tsx`, Header/Footer polish** —
> all still on nocturne `--color-*`. Hero images: products all have `/hero/<id>.webp`; Article/others use a
> graceful fallback until per-page photos are supplied (founder swaps the exact Millingo photo too).

## (historical) Rebrand v0.3.0 (⚠️ superseded by the handoff-2 port above — branch `feat/svasamm-rebrand`)
- **Nocturne dark → Svasamm light-enterprise rebrand** is built + verified on `feat/svasamm-rebrand`
  (NOT yet deployed; awaiting founder review → v0.3.0). Source spec = `~/Projects/web-dev/claude-code-handoff/`
  (`MIGRATION-svasamm-theme.md` + `svasamm.css` + reference `.dc.html`). Applied to the **Next.js app**
  (the handoff assumed `.dc.html` files, which this repo doesn't have — 0 `.dc.html`). How it was done:
  (a) **`app/svasamm.css`** = the design system, imported by `globals.css`; (b) **`nocturne.css` `:root`
  re-pointed to the light palette** (role-flipped neutrals: `neutral-300/400/500`→dark secondary/muted
  text, `neutral-700/800`→light borders; accent ramp→brand blues) so every `var(--color-*)` + Tailwind
  utility recolours with no per-component churn; `@theme` in globals mirrors it; (c) **icons Phosphor→Lucide**
  in `Icon.tsx`/`IconClient.tsx` — the `ph-*` names are KEPT (map re-points to Lucide, stroke 1.75) so
  call-sites are untouched; (d) **IBM Plex Sans/Mono via next/font** (`--font-plex`/`--font-plex-mono`);
  globals `:root` remaps `--sv-font`/`--sv-mono` onto those; (e) filled primary buttons, real bordered+
  shadowed cards, light chips; Ken Burns/dark glow removed; new enterprise-blue logo (`public/assets/logo-svasamm.svg`);
  (f) a11y: skip link + `id="main"` (all `<main>`), full FAQ ARIA, contact-form label/aria/role=alert.
  **SEO byte-identical** (never touched `lib/*` data, metadata, or JSON-LD). Lucoze untouched.
- **Rebrand refinements (post-review):** (1) **icon chips use the reusable `.sv-chip`/`.sv-chip-sm` class**
  (svasamm.css — brand-50 bg, brand-100 border, brand icon), NOT inline `background:accent-900` (that was the
  dark-theme chip); use `.sv-chip` for any new icon chip, don't re-inline. (2) **Header nav trimmed to
  Solutions / Resources / Contact** — "Regions" (`/#regions`) and "Why Svasamm" (`/#why`) were removed
  (founder decision): same-page anchors carry no indexable URL / link-equity and were permanently blue (they
  lacked the explicit neutral colour siblings set → fell back to `a{color:accent}`). The homepage `#regions`/
  `#why` sections stay (content); the **footer still links them** (not yet removed — flag if consistency wanted).
  The dead unused `NAV_LINKS` array in `lib/site.ts` was deleted. (3) **ProductPage section order = Hero →
  Capabilities → Built-for → Resources → Tiers → FAQ → CTA** (Tiers moved *below* Built-for/Resources). (4)
  Product-page **resource links use `.pp-reslink`** (hover highlight + slide-in arrow) for click affordance;
  `.pp-link` gains hover-underline. **IA/SEO decisions (founder-confirmed, don't re-raise):** capabilities
  stay **static info cards** — NO per-capability pages (2-sentence blurbs = thin/duplicate → SEO-negative; the
  mapped guides are already linked in Resources). **NO Lucoze-style Locations grid** for Svasamm (national,
  multi-product; the only geo-relevant product, Millingo, already has state pages WB/UP/Odisha/Bihar linked).
- **🐛 GOTCHA (hard-won):** `svasamm.css` shipped with a leading `@import url(fonts.googleapis…)`. Once it's
  inlined via `@import "./svasamm.css"` in `globals.css` that line lands **mid-file** → violates
  "**@import must precede all rules**" → **Turbopack (`yarn dev`) errors**, though the prod build hoisted it
  (so `yarn build` passed but dev broke). Fix = **removed that `@import`** (fonts come from next/font anyway).
  **Never add a remote `@import url(http…)` to any CSS that gets `@import`ed into `globals.css`** — load fonts
  via `next/font` instead. The rebrand branch's `app/svasamm.css` already has it removed (documented in-file).
- (below = the pre-rebrand Nocturne baseline on `develop`/`main`, still live until v0.3.0 ships)
- `app/nocturne.css` = the redesign's `design-tokens.css` verbatim (minus the Google-Fonts
  `@import`; `--font-heading/body` point at the `next/font` `--font-inter`). Single source
  for `:root` vars + base styles + component classes (`.btn`, `.card`, `.tag`, `.table`,
  `.hr`, `.input`, …).
- `app/globals.css` = `@import "tailwindcss"` + nocturne + an `@theme` block that mirrors the
  core tokens so utilities exist (`bg-bg`, `text-accent`, `border-neutral-800`, `rounded-lg`,
  `shadow-md`, `mob:` = 860px breakpoint).
- Core: bg `#161826`, surface `#232532`, text `#e9e9ed`, accent `#9184d9` (blurple).
  Heading weight **500** (never bolder). Primary buttons are **outlined**, not filled.
- Icons: `components/Icon.tsx` maps `ph-*` names → curated Phosphor SSR components (add
  names there as pages need them — don't import the whole library).
- Logo: `public/assets/logo.svg` (logo-nocturne).

## Architecture (mirror the prototypes)
- Shared components: `SiteHeader` (client — mega-menu + mobile), `SiteFooter` (server),
  `ProductPage` (reusable product body), `Article` (reusable long-form body). Keep interactive
  bits (mega-menu, FAQ, product filter, contact form) as the ONLY client islands; everything
  else is server-rendered.
- `app/not-found.tsx` — branded 404 (Nocturne header/footer + a link home). Owning this
  route matters: without it, Next's built-in not-found boundary renders its own default
  title alongside the root layout's, producing two `<title>` tags in `out/404.html`.
- **Hero images**: `components/HeroBackground.tsx` renders `/hero/<slug>.webp` + scrim for
  every hero (home, Solutions, product, article). **Layering contract:** image+scrim sit at
  `z-index:0` inside `.sv-hero`; the content wrapper MUST carry `.sv-hero-content`
  (`z-index:1`) or the photo paints over the text. Which slugs have a photo is
  `lib/heroes.ts` — **auto-generated**, don't hand-edit. Contact/About/Privacy/Terms
  deliberately have no photo (plain gradient hero).
- Data: **in-repo typed data** in `lib/` (`types.ts` shaped to the planned Sanity schemas;
  `site.ts` = SITE_URL/BUSINESS/PRODUCTS registry). Fetch at build time only — migrate to
  Sanity later via a data-access layer without touching components.

## Routing / SEO (README §Routing + §SEO)
- Preserve the canonical `/pages/*.html` scheme so indexed URLs carry over.
- `/` home; `/privacy`, `/terms`; `/pages/[slug]` dispatcher (slug includes `.html`) → decides
  Solutions / Contact / About / ProductPage / Article by slug.
- Per page: unique title+description, `<link rel=canonical>` to `/pages/*.html`,
  `robots index,follow`, OG tags, and the **exact JSON-LD** copied from the `.dc.html` helmet
  (Organization/WebSite home; Service+BreadcrumbList+FAQPage products; Article+…+FAQPage
  guides/compare; Service(areaServed/audience)+… industry/state; ContactPage). `sitemap.ts` +
  `robots.ts` from the same slug list. One `<h1>`/page; keep FAQs (GEO).

## Business facts (verbatim — CHANGED from the old site)
- Svasamm Research Pvt Ltd · Nabagram, Konnagar, Hooghly, West Bengal 712246, India
- Email **query@svasamm.com** · Phone **+91 90077 93575**
- Do NOT state unverified metrics (no "300% ROI / 50+ clients / ISO 27001"); no "Videozjet".

## Key files
- `lib/products.ts` — 7 solutions (6 products + Svasamm Digital; Service+Breadcrumb verbatim from helmets; **FAQPage
  generated for every product** from its visible `faqs` via `faqPageLd()` for GEO) ·
  `lib/articles.ts` —
  **AUTO-GENERATED** by `scratchpad/extract-articles.mjs` (evals Article.dc.html `data()` +
  merges each wrapper helmet); re-run the extractor, don't hand-edit · `lib/home.ts` —
  home cards/regions/whys · `lib/pages.ts` — Solutions/Contact/About SEO+JSON-LD ·
  `lib/routes.ts` — `PROTO_TO_ROUTE` (every `.dc.html`→route) + `toRoute()`.
- **Svasamm Digital for Healthcare** (`/pages/digital-healthcare.html`, id `digital-healthcare`):
  healthcare-digitisation **service**, modelled as a solution — `lib/digital.ts` holds the
  `Product` record (**all copy lives there**) and `lib/products.ts` registers it, so it renders
  through the shared `ProductPage` and appears in the mega-menu, footer, home grid, Solutions
  page and sitemap automatically. **Both Digital lines are categorised `service`** (a distinct
  nav/home/filter category — `category`/`kind` union now `vertical | platform | service`), so the
  mega-menu (`SiteHeader`), Solutions page and home `ProductFilter` render a separate **Services**
  group and the "vertical products" spotlight excludes them; cards keep the **"Service"** tag.
  Schema is `Service`, not a product type. **Svasamm Digital for Schools is LIVE** alongside
  Healthcare (`/pages/digital-schools.html`, id `digital-schools`, `lib/digital-schools.ts` +
  `lib/schools-articles.ts`) — same structure/guardrails, education wording.
  - **Positioning (founder, 2026-08-03): ongoing organic-growth PARTNERSHIP, not build-and-leave.**
    Both hubs lead with continuous monitoring (Search Console / Analytics / Plausible), long-tail
    keyword strategy, and algorithm-resilience — NOT a one-time build. Keep the honesty guardrail:
    describe the ongoing work, never promise a specific ranking.
  - **Content cluster:** hand-authored articles — healthcare **8** in `lib/digital-articles.ts`
    (6 guides incl. nursing-home + Kolkata pages + 2 approach-comparisons), schools **6** in
    `lib/schools-articles.ts` — no named competitors, per the medical-ad guardrails; surfaced via a
    Resources block on the product page **and** a curated **`RESOURCE_GROUPS`** dropdown in the
    header (`site.ts` → rice-mill / healthcare / school guides). `lib/articles.ts` is the **frozen auto-generated** set
    (the extractor lived in the old `svasamm-web` scratchpad and is not in this repo — do not
    hand-edit it); **`lib/article-registry.ts` is the single merge point** — routing and the
    sitemap import `ARTICLE_BY_SLUG` from the registry, never from `articles.ts` directly. Add a
    future article source there. **Guardrails:** publish tier scope but never prices (CTA "Request a
  proposal"); no case studies/testimonials/client logos/result metrics (no clients yet); never
  promise patient volume, revenue or clinical outcomes; never emit
  `MedicalOrganization`/`Physician` for Svasamm — it is a provider *to* healthcare. Published
  delivery timeline is ~4 weeks from content + GBP-access handover; published exclusivity
  radius is ~5 km (matching Google's nearby-results proximity). Spec:
  `docs/superpowers/specs/2026-07-19-svasamm-digital-service-design.md`.
- Components: `ProductPage`, `Article`, `SolutionsPage`, `ContactPage`, `AboutPage` (server
  bodies) · `SiteHeader`, `ProductFilter`, `FaqAccordion`, `ContactForm` (client islands) ·
  `JsonLd`, `LegalPage`. Dispatcher: `app/pages/[slug]/page.tsx` (slug incl. `.html`).
- **Icons: two maps.** `Icon.tsx` = full set for **server** components; `IconClient.tsx` =
  ~15-icon subset that the **client islands** import — keeps the other ~45 server-only
  Phosphor icons out of the client bundle (cut first-load JS ~34KB gzip). Add island-used
  icons to BOTH; server-only icons to `Icon.tsx` only.
- **Hero image pipeline**: `scripts/optimize-hero-images.py` is the single source of truth
  for source-photo → page-slug mapping. It downscales the design originals to ~1600px WebP
  q80 into `public/hero/<slug>.webp` and regenerates `lib/heroes.ts` **from the `.webp` files on
  disk** (so processing one new image never drops the others — safe for single-image runs). Image
  prompts + the add-a-hero workflow: **`docs/hero-image-prompts.md`**. Static export sets
  `images.unoptimized`, so **next/image does no resizing/conversion** — whatever is in
  `public/` is what ships. Re-run after adding a photo (idempotent; skips up-to-date files):
  `python3 scripts/optimize-hero-images.py [SRC_DIR]`. Heroes use `priority` (they're the
  LCP); 46 photos total ≈ 5.9MB (from 116MB of originals).
- **Favicon**: the real icons (`favicon.ico`, `favicon-32/16.png`, `apple-touch-icon.png`)
  live in `public/`. Do NOT add `app/favicon.ico` — Next's file-based metadata auto-detects it
  and emits a `<link rel="icon">` that OUTRANKS the `public/` set (this is how the create-next-app
  default Next.js logo leaked into the tab; removed in this branch).
- **Analytics**: `components/Analytics.tsx` loads GA4 (`GA_ID` in `lib/site.ts`,
  `G-EPFCF5F117`) behind a client mount, host-gated off (skips fetching gtag.js on
  `uat.svasamm.com` / `localhost`). Fires `generate_lead` on contact-form submit.

## Progress
- ✅ **All 51 crawlable pages built + verified locally** (home, 7 solutions, 38 articles,
  Solutions, Contact, About, Privacy, Terms) + `sitemap.ts` (51 URLs) + `robots.ts`. `yarn
  build` green, every page prerenders static. Design matches Nocturne (screenshot-verified
  desktop + mobile). SEO: unique title/canonical/OG + verbatim JSON-LD per page; one `<h1>`;
  FAQs. Islands verified (mega-menu, filter, FAQ accordion, contact form validation+success).
  GA4 wired + host-gated. Migrated to a Docker/nginx static-export deploy (see `##
  Deployment`), favicons/llms.txt/OG image carried over, CI green (Node 20, build + typecheck).
- ✅ **Contact form backend DONE (v0.2.4).** Static export can't run a Route Handler, so the
  form POSTs to an off-site **AWS Lambda + API Gateway HTTP API → SES** (from `no-reply@svasamm.com`
  → `query@svasamm.com`, Reply-To enquirer; honeypot + validation). Handler + runbook + idempotent
  deploy script in **`aws/contact-form/`**; endpoint in `ContactForm.tsx` `CONTACT_ENDPOINT`. The
  form pre-selects "Which solution?" from `?solution=<product-id>` (product-page CTAs pass it;
  home/Solutions omit it), collects a **phone** (message field removed — we call to scope). AWS
  account/CLI + org-guardrail notes in memory `reference-svasamm-aws.md`. ⏭️ still open: migrate
  `lib/` data to **Sanity**; content roadmap (expand thin rice-mill guides ~1500w; new healthcare/
  school gap pages); hero image for new pages via `docs/hero-image-prompts.md`.

## Deployment

The redesign no longer ships via the old gulp pipeline — it's a Next.js **static export**
(`output: 'export'` in `next.config.ts` → `out/`), built with `yarn build` and served by
**nginx** in the Docker image (no Node runtime in prod).

- **Static serving**: `out/` → `/usr/share/nginx/html`. nginx `try_files $uri.html $uri
  $uri/ =404` on both `location /` and the `\.(html|htm)$` regex location — Next's export
  emits, per route, a directory (RSC prefetch payload) *and* the real file at `$uri.html`,
  so `$uri.html` has to be tried first or nginx's default directory handling wins and
  301s to a trailing slash instead of serving the page.
- **Docker**: multi-stage build — `node:20` builder (`yarn install --frozen-lockfile`,
  `yarn build`) → nginx runtime stage that only copies `out/` + `deployment/nginx/nginx.conf`.
  `.dockerignore` excludes `node_modules`/`.next`/`out` from the build context.
- **CI/CD (`.github/workflows/deploy.yml`)**: a published GitHub Release deploys — tag
  `uat-vX.Y.Z` (target `uat`) → UAT, tag `vX.Y.Z` (target `main`) → PROD. Workflow: test
  (`yarn build` + `tsc` typecheck) → build/push `svasamm/svasamm-website:<tag>` (+
  `:latest`|`:uat-latest`) to Docker Hub → if `DOKPLOY_DEPLOY_ENABLED=true`, POST the
  matching Dokploy webhook, which pulls and redeploys the app.
- **Edge behavior now lives in nginx** (`deployment/nginx/nginx.conf`), not Traefik:
  - `www.svasamm.com` → `https://svasamm.com$request_uri` (301, path preserved).
  - `Strict-Transport-Security: max-age=31536000` on every response.
  - `X-Robots-Tag: noindex, nofollow` keyed off `Host: uat.svasamm.com` only (same image
    serves prod + UAT; the header is empty — and so omitted — on prod).
  - Five legacy-URL 301s preserving link equity from the old indexed paths:
    `/pages/privacy.html` → `/privacy`, `/pages/terms-of-service.html` → `/terms`,
    `/pages/testimonials.html` → `/` (page removed, no replacement), `/pages/hims.html` →
    `https://lucoze.com/` (product now lives on its own domain),
    `/pages/loan-management.html` → `/pages/services.html` (product dropped in handoff-2).
  - Real `404` status + branded page: `error_page 404 /404.html` (see `app/not-found.tsx`
    above — it exists specifically so `out/404.html` has exactly one `<title>`).
- **GA4** `G-EPFCF5F117`, host-gated off `uat.svasamm.com`/`localhost` (see `## Key files`
  above).
- Full release runbook (branch flow, one-time GitHub/Dokploy setup, Hetzner→Hostinger DNS
  cutover, rollback) is in `docs/deployment.md`.
