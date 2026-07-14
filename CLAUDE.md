# Svasamm marketing website

Static marketing site for **Svasamm Research Pvt Ltd** (svasamm.com), built with a
gulp + `gulp-file-include` pipeline, served by **nginx behind Traefik/Dokploy**.
Deployed on Hetzner, migrating to Hostinger via Dokploy.

## Build & run

- `npm run dev` — gulp build + connect server on **:3000** (serves `dist/`) + watch.
- `npm run build` — `clean → gulp build → minify (css/js/html) → optimize`. **This is
  the real build** (the Dockerfile runs `yarn build`). Edit **`src/`**, never `dist/`.
- `npm test` — `html-validate dist/index.html` + `stylelint dist/styles/*.css`.
  Configs: `.htmlvalidate.json`, `.stylelintrc.json`. Keep this green.

## Structure & conventions

- **`src/components/head.html`** — shared `<head>` partial. Every page includes it with
  per-page vars: `@@include('.../head.html', {title, description, canonical, ogType})`.
  It owns canonical + OG/Twitter + favicons. **Add head/meta changes here once**, not
  per page (the old per-page `<head>` duplication caused drift like the missing
  `180.png`). Pages then add page-specific JSON-LD after the include.
- **`src/components/header.html` / `footer.html`** — shared nav/footer partials.
- Asset paths are **absolute** (`/styles/...`, `/images/...`, `/pages/...`) so they work
  from any depth. Nav already used absolute paths.
- **Root files** (`robots.txt`, `sitemap.xml`, `llms.txt`) live in `src/` and are copied
  to `dist/` root by the gulp **`static`** task (the default `html`/`pages` tasks don't
  copy them). `src/404.html` is built to `dist/404.html` by the `html` task.
- **Logo**: `/images/logo.svg` (navy squircle + white "S", `#030213` = `--primary`);
  raster set in `images/favicon/` (32, 180) + `images/logo-512.png` (schema logo).
- `src/scripts/script.js` loads on every page — **guard element lookups** (e.g.
  `#contactForm` only exists on contact.html; unguarded `.addEventListener` threw on
  every other page). Service/testimonial cards use an IntersectionObserver fade-in
  (`opacity:0` until scrolled into view) — a full-page screenshot shows them blank; the
  DOM content is present (fine for SEO).

## Deploy (deployment/)

- `nginx/nginx.conf` — the container server. `try_files ... =404` (NOT `/index.html` —
  that was a soft-404 crawl trap). Security headers (CSP/X-Frame/nosniff/Referrer) live
  here; cache `location`s use `expires` only (an `add_header` in a `location` cancels
  inherited headers). `error_page 404 /404.html`; `/index.html` 301s to `/`.
- `docker-compose.yml` (PROD, svasamm.com) / `docker-compose.uat.yml` (UAT,
  uat.svasamm.com) — **Traefik labels Dokploy consumes**: HTTP→HTTPS 301, www→apex 301,
  **HSTS** (edge, not nginx). **UAT adds `X-Robots-Tag: noindex`** (the `uat-noindex`
  middleware) so staging never gets indexed — do NOT add uat to GSC or the sitemap.
- `docker/Dockerfile` — builder runs `yarn install --frozen-lockfile` (the gulp build
  chain is in **devDependencies**; `--production` would break `yarn build`).

### Release model (tag-based) — full runbook in `docs/deployment.md`
- Flow: `feature/*` → **develop** → **uat** → **main**.
- **Only tags deploy** (`.github/workflows/deploy.yml`): `uat-vX.Y.Z` (cut on `uat`) →
  UAT; `vX.Y.Z` (cut on `main`) → PROD. The workflow tests, builds+pushes the image to
  `ghcr.io/svasamm-research/svasamm-site`, then POSTs the Dokploy webhook to redeploy.
- GitHub secrets: `DOKPLOY_UAT_WEBHOOK`, `DOKPLOY_PROD_WEBHOOK`.
- Migration Hetzner→Hostinger + DNS cutover + verification checklist: `docs/deployment.md`.

## Products (solutions)

Generic: ERP, HRMS, CRM, Service Desk, Loan Management. **Vertical products** (each has
a dedicated `/pages/*.html`):
- **Lucoze** (`hims.html`) — India-first HMS/EMR, live at **lucoze.com** (link out).
- **Millingo** (`millingo.html`) — rice-mill ERP (no public site yet).
- **DMS** (`dms.html`) — distributor management for OEM manufacturers. **Keep the
  Videojet client OFF this page** — DMS is positioned as generic/configurable.
- `service-desk.html` / `loan-management.html` are `noindex` stubs (thin) and **excluded
  from `sitemap.xml`** until real copy is added (see their `TODO`).

## Growth / marketing

- **`docs/growth-plan.md`** — the SEO / Local SEO / GEO / content / backlinks / ads
  strategy + a novice-friendly learning guide. Read it before doing SEO or ads work.
  Current gaps (as of the plan): no GBP, no backlinks, no keyword targeting, no ongoing
  content, analytics (GSC/GA4/Bing) not wired. Local SEO (West Bengal → UP/Bihar/Odisha/
  Jharkhand) and content are the biggest levers; Millingo is the best organic bet.
- Paid ads run through the **`claude-ads`** plugin (`/ads plan`, `/ads math`,
  `/ads landing`, per-platform audits) — planning/creation only; needs a real ad account
  + budget to spend.

## Content cluster (Millingo)

`docs/millingo-keyword-cluster.md` is the plan; the built cluster lives in `src/pages/`:
pillar `millingo.html` + guides (`rice-mill-yield-recovery`, `custom-milled-rice-cmr-process`,
`rice-mill-byproduct-accounting`, `gst-for-rice-mills`, `best-rice-mill-software`,
`rice-mill-software-price`), per-state pages (`rice-mill-software-{west-bengal,uttar-pradesh,
odisha,bihar}`), and comparisons (`millingo-vs-{dataman,samadhan}`). Guides/articles use the
`.article-*` / `.faq-*` / `.cta-box` CSS in `styles.css` (reuse it; no per-page `<style>`).
Off-page/listing plan: `docs/directory-listings.md`.

## Guardrails

- Don't fabricate metrics/claims ("300% ROI", "50+ clients", "ISO 27001") — flagged,
  needs real substantiation before stating as fact.
- **Never list a business as a customer/testimonial unless it's a real, consented
  client.** No prospects or aspirational names (e.g. a mill we hope to win) — that's
  misrepresentation (Consumer Protection Act) and passing-off risk. Regions/districts are
  fine; named proof must be real + permissioned.
- **Competitor "vs" pages must stay factual and neutral:** compare positioning + verifiable
  features, use "stated / not stated on their public site" (never absolute "no"), add a
  "public info as of <date>, verify directly" disclaimer, and no competitor logos.
- **Guides carry a real author byline + `Article` schema** (E-E-A-T). Any guide stating
  tax/legal/regulatory facts includes a "general information, verify with your CA/lawyer"
  note and cites official sources; keep season-specific figures (CMR schedule, GST rates)
  dated and caveated. Don't assert unverified specifics (e.g. the UP portal is
  `fcs.up.gov.in`/E-PoP — "e-Kray" was NOT verified).
- Every indexable page: one canonical, OG/Twitter (via head partial), and page-specific
  JSON-LD (`Organization`/`Service`/`Review`/`Article`/`FAQPage`/`BreadcrumbList`). Validate
  JSON-LD parses (`npm test` + the JSON.parse sweep).
- Product-page layout reuses global `.product-*` classes in `styles/styles.css` — reuse
  them, don't add per-page `<style>` blocks.
