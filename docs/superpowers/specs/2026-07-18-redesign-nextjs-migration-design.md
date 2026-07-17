# Design: Migrate svasamm.com to the Next.js "Nocturne" redesign

**Date:** 2026-07-18
**Status:** Approved (design)
**Target repo:** `svasamm-site` (this repo) — replaces the gulp static site in place.
**Source of truth for the app:** `~/Projects/web-dev/svasamm-web` (the built + locally-verified
Next.js redesign — 50 crawlable pages, Nocturne design system).

## 1. Goal

Bring the fully-built Next.js redesign from `svasamm-web` into `svasamm-site` so it can go
through the existing workflow: build + verify locally → **manual review (founder)** → PR to
`develop` → merge → release `uat-v0.1.0` → UAT deploy → validate → **manual UAT review
(founder)** → release `v0.1.0` → production cutover.

The redesign REPLACES the current gulp-built static site. Everything is statically
generated, so we keep the entire deployment pipeline (Docker → nginx → Traefik → Dokploy,
release-tag CI/CD) with minimal changes.

## 2. Approach (decided)

- **Static export.** `next.config` gets `output: 'export'`; `next build` emits static HTML
  into `out/`. No Node server — cheapest, best perf/SEO, zero pipeline shape change. The
  contact form stays client-only (client-side validation + success state) until a backend
  is added later; a `ponytail:` note in `ContactForm.tsx` already marks this.
- **Replace gulp in place.** The Next app becomes the repo's source. Remove `src/`,
  `gulpfile.js`, `dist/`, and gulp devDependencies. Preserve `deployment/`, `docs/`,
  `.github/`, git history, and the branch flow (main → develop → feature).

## 3. Build & repo changes

| Item | Change |
|---|---|
| App source | Copy `svasamm-web`'s `app/`, `components/`, `lib/`, `public/`, `next.config.*`, `tsconfig.json`, `package.json` (Next deps), `AGENTS.md`, `CLAUDE.md`, `.gitignore` additions into the repo root. |
| `next.config` | Add `output: 'export'`. Keep `images.unoptimized: true` (required for export; the logo uses `next/image`). |
| Remove | `src/`, `gulpfile.js`, `dist/`, gulp/live-server/html-validate/stylelint/cleancss/terser/imagemin devDeps, `.htmlvalidate.json`, `.stylelintrc.json`. |
| Node | 18 → 20 in the Dockerfile builder stage AND `.github/workflows/deploy.yml` setup-node. Next 16 requires Node ≥ 20.9. |
| `package.json` scripts | `dev`/`build`/`start` = Next; `test` = `next build` + `tsc --noEmit` (typecheck). Drop gulp/minify/optimize scripts. |

## 4. Deployment pipeline changes (minimal)

**Dockerfile** (`deployment/docker/Dockerfile`)
- Builder base `node:18-alpine` → `node:20-alpine`.
- `RUN yarn build` now runs Next's static export.
- `COPY --from=builder /app/dist` → `/app/out`.
- Final nginx stage, healthcheck (`127.0.0.1/health`), labels, `EXPOSE 80` — unchanged.

**nginx** (`deployment/nginx/nginx.conf`)
- `location /`: `try_files $uri $uri.html $uri/ =404;` — serves the exported `.html`
  files (the `$uri.html` term is the key addition; exact form validated in Phase 0, §7).
- **Add 301 redirects** (before `location /`), path/host-preserving where relevant:
  - `location = /pages/privacy.html { return 301 /privacy; }`
  - `location = /pages/terms-of-service.html { return 301 /terms; }`
  - `location = /pages/testimonials.html { return 301 /; }`
  - `location = /pages/hims.html { return 301 https://lucoze.com/; }`
- Keep: security headers, `map $host $robots_tag` UAT-noindex, www→apex 301, HSTS,
  `/health`, gzip, cache headers, 404 → `/404.html`.
- `error_page 404 /404.html` still works — Next export writes a `404.html` (App Router
  `not-found`), served at nginx root.

**compose / Traefik / Dokploy / CI release-tag flow** — unchanged. Image name
`svasamm/svasamm-website`, tags `uat-vX.Y.Z`/`uat-latest` and `vX.Y.Z`/`latest`, webhooks,
`DOKPLOY_DEPLOY_ENABLED` gate all stay.

**CI** (`.github/workflows/deploy.yml`)
- `setup-node` 18 → 20.
- `test` job: replace `yarn test` (html-validate + stylelint) with `yarn build` +
  `npx tsc --noEmit`. (Build already runs in the image; the test job gives an early fail.)

## 5. Content / SEO changes

The redesign preserves 20 of 25 indexed `/pages/*.html` URLs and ADDS ~25 new cluster
pages (DMS/ERP/HRMS/CRM/Service-Desk guides + OEM industry pages) — directly addressing
the growth plan's "content/E-E-A-T is the #1 weak area." The five deltas:

| Live indexed URL | Action |
|---|---|
| `/pages/privacy.html` | 301 → `/privacy` (redesign route) |
| `/pages/terms-of-service.html` | 301 → `/terms` |
| `/pages/hims.html` | 301 → `https://lucoze.com/` (Lucoze is now an external vertical) |
| `/pages/testimonials.html` | 301 → `/`. **Page removed for cause:** its 7 reviews were not real; the live Review + aggregateRating schema is a Google policy violation. The redesign's Organization schema carries no rating — this cleans it up. |
| `/pages/about.html` | **Rebuilt as a real page at the same URL** (no redirect → link equity preserved directly). |

**About page rebuild** (`/pages/about.html`)
- Nocturne-styled, uses `SiteHeader`/`SiteFooter`. Content from verified facts in the
  current `src/pages/about.html`: Svasamm Research Pvt Ltd, **founded 2022**, West Bengal
  HQ, mission, the real product lineup. Founder byline "Mithun K. Singh, Founder" for
  E-E-A-T. **No fabricated metrics** (no "50+ clients / 300% ROI"-type claims — per the
  redesign CLAUDE.md rule). JSON-LD: `AboutPage` + `Organization` + `BreadcrumbList`.
- Add "About" to the footer Company column; add `/pages/about.html` to the sitemap.

**Carry-overs**
- **GA4:** ENABLED with Measurement ID **`G-EPFCF5F117`**, loaded via `next/script` in
  `app/layout.tsx`. Because the same image serves UAT and prod, gtag init is **suppressed
  when `location.hostname` is `uat.svasamm.com` or `localhost`/`127.0.0.1`** so UAT/dev
  traffic never pollutes analytics (mirrors the nginx Host-based UAT-noindex). The ID lives
  in a small config constant (`NEXT_PUBLIC_GA_ID` may override for flexibility). The
  `ContactForm` island fires `generate_lead` on successful submit (mirrors current
  `script.js` behavior).
- **llms.txt:** regenerate for the new content set → `public/llms.txt`.
- **Favicons:** copy the favicon set (16/32/108/180 + `favicon.ico`) into `public/`; wire
  `icons` in Next metadata (incl. apple-touch-icon).
- **OG image:** create a branded 1200×630 image (render a Nocturne card via Playwright →
  PNG) at `public/og.png`; reference site-wide via `openGraph.images` in layout metadata.
- **Sitemap/robots:** already generated by the redesign (`app/sitemap.ts` / `app/robots.ts`);
  add About, confirm testimonials excluded. Re-submit sitemap to GSC after prod deploy.

## 6. Branch / release flow (with founder gates)

1. `redesign-nextjs` branched off `develop` (done — this spec is its first commit).
2. Implement the migration; `yarn build` green locally; docker-build + curl checks pass.
3. **Manual verification (founder)** — local review sign-off.
4. PR `redesign-nextjs` → `develop`; merge.
5. Release `uat-v0.1.0` → CI builds `:uat-*` image → Dokploy UAT deploy.
6. Validate on UAT (uat.svasamm.com, noindex).
7. **Manual UAT verification (founder)** — UAT review sign-off.
8. Release `v0.1.0` → CI builds `:latest` → Dokploy prod deploy = **cutover**.

## 7. Verification

**Phase 0 (de-risk first):** confirm `output: 'export'` writes the `/pages/[slug]` routes
(slug contains a literal `.html`) to files nginx can serve at `/pages/millingo.html`.
Expected: `out/pages/millingo.html.html`, served by `try_files $uri $uri.html`. If the
layout differs (e.g. `out/pages/millingo.html/index.html`), adjust `try_files` — this is an
nginx tweak, not a redesign change.

**Before PR:**
- `yarn build` green; `tsc --noEmit` clean.
- `docker build` the production target; run the container; `curl` locally:
  unknown path → 404 (`404.html`), each 301 redirect returns 301 to the right target,
  `/health` → 200, `/sitemap.xml` + `/robots.txt` serve real content, `/pages/*.html`
  (products + articles + services + contact + about) → 200, `/privacy` + `/terms` → 200.
- Every `application/ld+json` block across `out/` parses; spot-check
  Organization/Service/Article/FAQPage/BreadcrumbList/AboutPage shapes.
- Lighthouse spot-check on home + one product + one article (perf/SEO/a11y).

**On UAT:** live nginx serves all routes; UAT host sends `X-Robots-Tag: noindex`; www→apex
+ HSTS present; redirects resolve on the real domain.

## 8. Out of scope (future, tracked)

- Contact-form backend (Route Handler → email `query@svasamm.com`).
- Sanity migration of the in-repo `lib/` data.
- Resuming the paused SEO/growth plan (GBP, backlinks, keyword strategy, content cadence).

## 9. Risks

- **`.html` static-export routing** — primary risk; de-risked in Phase 0 (§7).
- **Redirect correctness** — old indexed URLs must 301 cleanly; verified by curl before PR
  and on UAT.
- **Node 20 in CI/Docker** — straightforward bump; caught by the CI build.
