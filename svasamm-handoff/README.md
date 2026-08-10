# Svasamm — design system implementation handoff

Everything Claude Code needs to build the Svasamm site on the new design system.
**All 50 pages are already converted and verified** in `pages/`. This is a build-and-port
package, not a migration-in-progress.

Date: 2026-08-09

---

## 1. What's in this folder

| Path | Purpose |
|---|---|
| `PROMPT.md` | **The prompt to paste into Claude Code.** Start here. |
| `README.md` | This file — the full spec. |
| `svasamm.css` | **The design system.** Single source of truth: tokens + component classes. |
| `icons.js` | Lucide icon loader. |
| `assets/logo-svasamm.svg` | Brand mark. |
| `pages/` | All 50 converted pages (`.dc.html`). The visual reference for every screen. |

Design-component files use a small runtime (`<x-dc>` template + a `Component` logic class).
Read them as **design reference**: the markup, classes, tokens, structure and copy are what
matters. Port that into the production framework (Next.js + Tailwind) — do not try to run
the `.dc.html` runtime in production.

---

## 2. The design system

### Colour tokens (all in `svasamm.css`)

**Ground & surface**
- `--sv-bg` `#ffffff` — page ground
- `--sv-bg-subtle` `#f5f7fa` — alternating sections
- `--sv-bg-sunken` `#eef2f7` — inset wells, segmented control track
- `--sv-surface` `#ffffff` — cards

**Ink**
- `--sv-ink` `#0b1b2b` — headings, primary text
- `--sv-ink-2` `#45566e` — body copy
- `--sv-ink-3` `#59687d` — meta, captions, muted labels

**Lines**
- `--sv-line` `#e2e8f0` — decorative separators, card edges
- `--sv-line-soft` `#cbd5e1` — non-interactive edges
- `--sv-line-strong` `#79879a` — **interactive** boundaries (inputs, secondary buttons)

**Brand** — enterprise blue, `--sv-brand-50` → `--sv-brand-900`, base `--sv-brand` `#1257c9`

**Deep field** — `--sv-navy` `#0a1f3d`, `--sv-navy-2` `#123059` (CTA bands, footer)

**Signal** — `--sv-teal` `#06635f` / `--sv-teal-50`; `--sv-amber` `#7f4f00` / `--sv-amber-50`

**Type** — `--sv-font` IBM Plex Sans (400/450/500/600/700), `--sv-mono` IBM Plex Mono (400/500/600)

**Radii** — `--sv-r-xs` 4px, `--sv-r-sm` 6px, `--sv-r` 8px, `--sv-r-lg` 12px, `--sv-r-xl` 16px

**Elevation** — `--sv-sh-1` (resting), `--sv-sh-2` (hover), `--sv-sh-3` (raised panels), `--sv-ring` (focus)

**Layout** — `--sv-max` 1200px

> **Never hard-code a hex, font or spacing value the system already carries.**

### Component classes

| Class | Use |
|---|---|
| `.sv-wrap` | 1200px page container with 24px gutters |
| `.sv-btn` + `.sv-btn-primary` / `-secondary` / `-ghost` | Buttons |
| `.sv-btn-inv` / `.sv-btn-inv-outline` | Buttons on navy CTA bands |
| `.sv-btn-lg` / `.sv-btn-block` | Size modifiers |
| `.sv-card` | Card surface: white, `--sv-line` border, `--sv-sh-1`, 12px radius |
| `.sv-card-i` | Adds interactive hover (2px lift + `--sv-sh-2` + brand border) |
| `.sv-chip` / `.sv-chip-sm` | Icon container — brand-50 fill, brand-100 border |
| `.sv-tag` + `-brand` / `-teal` / `-amber` / `-outline` | Mono uppercase labels |
| `.sv-eyebrow` | Mono uppercase brand-coloured section label |
| `.sv-field` / `.sv-input` | Form field wrapper + control |
| `.sv-seg` / `.sv-seg-opt` | Segmented filter control |
| `.sv-table` | Spec-sheet table |
| `.sv-field-deep` | Navy CTA band |
| `.sv-hairline` | 1px rule |
| `.sv-ic` | Icon span wrapper |
| `.sv-skip` | Skip-to-content link |

---

## 3. Layout rules

1. **Cards are real surfaces** — white fill, border, shadow, 12px radius. This is what makes the
   site read as enterprise software rather than a wireframe. Never transparent outline-only cards.
2. **Hero pattern** — two-column grid (copy left, framed visual right) on a soft `--sv-brand-50`
   radial wash. Images sit inside a `.sv-card` with 10px padding and an 8px inner radius, with a
   mono `<figcaption>` carrying a small teal status dot.
3. **Section rhythm** — 88px vertical padding; alternate `--sv-bg` and `--sv-bg-subtle`, separated
   by 1px `--sv-line` top/bottom borders.
4. **Every section opens** eyebrow → `<h2>` → lead paragraph, in that order.
5. **Grid hairlines** — when using hairline-separated grids, put the rule on each *cell*
   (`box-shadow: 0 0 0 1px var(--sv-line)`), never as a container background: an empty grid track
   would otherwise paint as a grey slab at some column counts.
6. **Motion is minimal** — hover lift on `.sv-card-i`, colour transitions on links/buttons.
   No parallax, no Ken Burns, no pulsing dots, no glow backgrounds.
7. **Headline widths** are capped in `ch` (e.g. `max-width:17ch`) so headings break across
   two or three lines rather than running as one thin river.

---

## 4. Icons — Lucide

Markup:
```html
<span class="sv-ic" data-icon="truck" style="width:20px;height:20px"></span>
```
Size goes on the span; colour inherits via `currentColor`. `icons.js` fills each span with an
inline SVG at **stroke-width 1.75** and writes into `innerHTML` so React-rendered DOM stays intact.

Any component that renders icons must call the loader after render:
```js
componentDidMount()  { window.svIcons && window.svIcons(); }
componentDidUpdate() { window.svIcons && window.svIcons(); }
```
In React/Next, use `lucide-react` directly instead and drop `icons.js` — but keep
**stroke-width 1.75** and the same icon names.

---

## 5. Page inventory (50)

**Bespoke pages (4)**
`Svasamm` (home) · `Solutions` · `Contact` · `Privacy` · `Terms`

**Shared components (4)**
`Header` · `Footer` · `ProductPage` · `Article`

**Product pages (7)** — render through `ProductPage`, keyed by `pid`
`Millingo` · `DMS` · `ERP` · `HRMS` · `CRM` · `ServiceDesk`
(plus Lucoze, which links out to lucoze.com)

**Article pages (~34)** — all render through `Article`, keyed by `slug`
- Millingo guides: `Guide-CMR`, `Guide-YieldRecovery`, `Guide-ByproductAccounting`, `Guide-GST`, `Guide-BestSoftware`, `Guide-Pricing`
- States: `State-WestBengal`, `State-UttarPradesh`, `State-Odisha`, `State-Bihar`
- Millingo comparisons: `Compare-Dataman`, `Compare-Samadhan`
- DMS/OEM: `Guide-OEMDistributor`, `DMS-CodingMarking`, `DMS-PackagingMachinery`, `DMS-Electrical`, `DMS-Automotive`, `DMS-Pharma`, `DMS-HVAC`, `DMS-Agri`, `Compare-Bizom`, `Compare-FieldAssist`
- ERP: `Guide-ERPImplementation`, `ERP-Manufacturing`, `ERP-Trading`, `ERP-Services`
- HRMS: `Guide-PayrollCompliance`, `HRMS-Manufacturing`, `HRMS-Retail`, `HRMS-Healthcare`
- CRM: `Guide-CRMSalesPipeline`, `CRM-B2B`, `CRM-Services`, `CRM-Distribution`
- Service Desk: `Guide-ITSM`, `SD-InternalIT`, `SD-MSP`, `SD-CustomerSupport`

**Two components drive ~40 pages.** Build `ProductPage` and `Article` as data-driven templates —
their content lives in a single map keyed by `pid` / `slug`. Adding a market is a data entry,
not a new page.

---

## 6. SEO — carry over exactly

Every page already carries its own `<title>`, `<meta name="description">`, `<link rel="canonical">`,
Open Graph tags, and JSON-LD. **Port these byte-identical.** Per page type:

| Page type | JSON-LD |
|---|---|
| Home | `Organization` + `WebSite` |
| Product / industry | `Service` (with `serviceType`, `provider`, `areaServed`) + `BreadcrumbList` + `FAQPage` |
| Guides / comparisons | `Article` (named author + role + `dateModified`) + `BreadcrumbList` + `FAQPage` |
| Contact | `ContactPage` |

Also port: `sitemap.xml`, `robots.txt`, and the canonical URL scheme
(`svasamm.com/pages/<slug>.html` as currently set — change only if you also update every canonical).

---

## 7. Accessibility — audited to WCAG 2.1 AA

Every colour pair was measured. Ratios:

| Pair | Ratio | Needs |
|---|---|---|
| `--sv-ink` on white | 17.41 | ≥4.5 ✅ |
| `--sv-ink-2` on white | 7.48 | ≥4.5 ✅ |
| `--sv-ink-2` on `--sv-bg-subtle` | 6.97 | ≥4.5 ✅ |
| `--sv-ink-3` on white | 5.67 | ≥4.5 ✅ |
| `--sv-ink-3` on `--sv-bg-subtle` | 5.29 | ≥4.5 ✅ |
| `--sv-brand` on white | 6.50 | ≥4.5 ✅ |
| white on `--sv-brand` (primary button) | 6.50 | ≥4.5 ✅ |
| `--sv-brand-700` on `--sv-brand-50` (tag) | 8.20 | ≥4.5 ✅ |
| `--sv-teal` on `--sv-teal-50` (tag) | 6.33 | ≥4.5 ✅ |
| `--sv-amber` on `--sv-amber-50` (tag) | 6.32 | ≥4.5 ✅ |
| footer link `rgba(255,255,255,.82)` on navy | 11.35 | ≥4.5 ✅ |
| footer meta `rgba(255,255,255,.66)` on navy | 7.77 | ≥4.5 ✅ |
| CTA body `rgba(255,255,255,.72)` on navy | 9.01 | ≥4.5 ✅ |
| `--sv-line-strong` on white (input border) | 3.06 | ≥3 ✅ non-text |
| `--sv-line-strong` on `--sv-bg-subtle` | 2.85* | ≥3 |
| inverse outline button border on navy | 7.01 | ≥3 ✅ non-text |

\* Inputs and secondary buttons sit on white grounds, where the border passes. If you place a
bordered control on `--sv-bg-subtle`, darken its border to `--sv-ink-3`.

**Rules to preserve**
- Do not lighten `--sv-ink-3`, `--sv-line-strong`, `--sv-teal` or `--sv-amber` — each sits at its
  darkest-passing value.
- `--sv-line` is **decorative only**; interactive boundaries use `--sv-line-strong`.
- Keep the `:focus-visible` ring (2px `--sv-brand`, 2px offset). Never `outline:none` without a replacement.
- `prefers-reduced-motion` is handled globally in `svasamm.css`. Don't add motion that bypasses it.

**Already implemented — replicate, don't reinvent**
- **Skip link** (2.4.1 A): `<a class="sv-skip" href="#main">Skip to content</a>` as the first
  focusable element, with `id="main"` on `<main>`. Present on every page.
- **Disclosure controls** (4.1.2 A): the Solutions mega-menu trigger carries `aria-expanded`,
  `aria-haspopup` and `aria-controls`; the mobile menu button carries `aria-expanded` and
  `aria-controls`. See `pages/Header.dc.html`.
- **FAQ accordions**: each trigger has `aria-expanded`, a unique `id` and `aria-controls`; each
  panel has a matching `id`, `role="region"` and `aria-labelledby`. See `ProductPage` and `Article`.
- **Contact form**: every field has `id`/`for` pairing and `aria-describedby`; error messages carry
  `role="alert"`. See `pages/Contact.dc.html`.

**Still to do during the build**
- Confirm every image has a meaningful `alt` (decorative hero images correctly use `alt=""`).
- Confirm one `<h1>` per page and no skipped heading levels.
- Mega-menu keyboard support: Escape closes and returns focus to the trigger.
- Run axe or Lighthouse on the built site and fix anything the static review can't catch.

---

## 8. Images

Hero images live in `assets/img/` in the design project (not bundled here — they're the client's
licensed photography). Each page maps to its own image; no image is reused across live pages.
The maps live in `ProductPage` (`heroMap`, keyed by `pid`) and `Article` (`imgMap`, keyed by `slug`).

Rules: downscale to ~1600px, serve same-origin (Next.js `/public` + `next/image`), never hotlink.

---

## 9. Definition of done

- Every page renders from `svasamm.css` tokens — no stray hexes, no second theme file
- No console errors; every icon resolves
- Titles, metas, canonicals and JSON-LD identical to the design files
- Skip link + `id="main"` on every page
- Lighthouse accessibility ≥95; axe reports no critical violations
- `ProductPage` and `Article` are data-driven, not 40 hand-built pages
- Spot-check a guide, a state page, a comparison page, Solutions and Contact against the home page
  for visual consistency
