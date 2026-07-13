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
- `docker-compose.yml` — **Traefik labels Dokploy consumes**: HTTP→HTTPS 301
  (`permanent=true`), www→apex 301, **HSTS** (edge, not nginx). Keep in sync with the
  Dokploy UI config; `www.<domain>` must resolve + be in the TLS cert.
- `docker/Dockerfile` — builder runs `yarn install --frozen-lockfile` (the gulp build
  chain is in **devDependencies**; `--production` would break `yarn build`).

## Products (solutions)

Generic: ERP, HRMS, CRM, Service Desk, Loan Management. **Vertical products** (each has
a dedicated `/pages/*.html`):
- **Lucoze** (`hims.html`) — India-first HMS/EMR, live at **lucoze.com** (link out).
- **Millingo** (`millingo.html`) — rice-mill ERP (no public site yet).
- **DMS** (`dms.html`) — distributor management for OEM manufacturers. **Keep the
  Videojet client OFF this page** — DMS is positioned as generic/configurable.
- `service-desk.html` / `loan-management.html` are `noindex` stubs (thin) and **excluded
  from `sitemap.xml`** until real copy is added (see their `TODO`).

## Guardrails

- Don't fabricate metrics/claims ("300% ROI", "50+ clients", "ISO 27001") — flagged,
  needs real substantiation before stating as fact.
- Every indexable page: one canonical, OG/Twitter (via head partial), and page-specific
  JSON-LD (`Organization`/`Service`/`Review`/`BreadcrumbList`). Validate JSON-LD parses.
- Product-page layout reuses global `.product-*` classes in `styles/styles.css` — reuse
  them, don't add per-page `<style>` blocks.
