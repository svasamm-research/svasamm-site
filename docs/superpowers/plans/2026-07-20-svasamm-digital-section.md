# Svasamm Digital Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship Svasamm Digital — a healthcare-digitisation service (website + Google Business Profile + local SEO/GEO + marketing for clinics, nursing homes and small hospitals) — as a **solution on svasamm.com**, with published tier scope, no prices, a category-exclusivity promise, an objection-handling FAQ, and enquiries distinguishable from general ones.

**Architecture:** Svasamm Digital is registered as a **solution in the existing product system**, not as a bespoke page. A `Product` record renders through the existing `ProductPage` component at `/pages/digital.html` via the `[slug]` dispatcher — which gives hero + photo, capabilities, tiers, "Built for", FAQ accordion, CTA band, breadcrumb, sitemap entry and auto-generated `FAQPage` schema for free. A new **`service`** category joins `vertical`/`platform` so a service is not presented as software. No new page component, no new route, no new dependencies.

**Tech Stack:** Next 16 App Router (SSG static export), React 19, TypeScript, Tailwind v4 (`@theme`), Nocturne design system, Phosphor icons via `components/Icon.tsx`.

**Source spec:** `docs/superpowers/specs/2026-07-19-svasamm-digital-service-design.md` (§7 is the build scope; §8/§9 are hard guardrails).

**Founder decisions folded in (2026-07-20):**
- Svasamm Digital is a **solution alongside Millingo/Lucoze/DMS** and follows the same pattern.
- It sits in a **new "Services" nav group** — honest separation from software products.
- Published delivery timeline: **Foundation live ~4 weeks from content + GBP-access handover**; monthly cycle from the month after launch. **No ranking/patient/revenue promises** (§9).
- Hero photo supplied at `~/Downloads/millingo-images/digital.jpg` (5184×3456).

## Global Constraints

Every task's requirements implicitly include this section.

**Copy & claims guardrails (spec §8/§9) — violating any of these fails the task:**
- **No prices anywhere.** Tier scope is published; the CTA is exactly **"Request a proposal."**
- **No case studies, testimonials, client logos, or result metrics.** There are no clients yet. Do not fabricate any.
- **No promises of patient volumes, revenue increases, or clinical outcomes.** Describe only work delivered (site, GBP, SEO, reporting). Medical-advertising sensitive.
- **Do not claim healthcare-provider status for Svasamm.** It is a service provider *to* healthcare.
- **No "all industries" / generic digital-agency pages.** Healthcare only in v1.
- No client portal, dashboards, automated reporting tooling, or bespoke scope-builder / quoting UI.

**Schema guardrail (spec §7.6):**
- Emit `Service` with `Organization` as `provider`. **Never** emit `MedicalOrganization`, `Physician`, `Hospital`, `MedicalClinic` or any medical-provider type for Svasamm itself.

**Business facts (verbatim):** Svasamm Research Pvt Ltd · Nabagram, Konnagar, Hooghly, West Bengal 712246, India · `query@svasamm.com` · `+91 91471 44638`

**Platform:**
- Next 16 — heed `AGENTS.md`; read `node_modules/next/dist/docs/` before writing Next code.
- Static export (`output: 'export'`, `images.unoptimized`) — **`next/image` does no resizing or format conversion**; hero images must be pre-processed by `scripts/optimize-hero-images.py`.
- Nocturne only: reuse existing classes and `var(--color-*)` tokens. Do not invent styling.
- Package manager **yarn**. `yarn build` = static export; `yarn typecheck` = `tsc --noEmit`.

**Testing note (read before Task 1):** this repo has **no unit-test runner** — `yarn test` maps to `tsc --noEmit`, and the established verification idiom (see `docs/superpowers/plans/2026-07-18-redesign-nextjs-migration.md`) is typecheck + `yarn build` + assertions against the built output in `out/`. Adding Jest/Vitest is **out of scope**. Each task therefore ends with runnable verification against `out/`. Note the export writes `/pages/digital.html` to the file `out/pages/digital.html.html`.

---

## File Structure

| File | Responsibility |
|---|---|
| `lib/digital.ts` *(create)* | The `DIGITAL_PRODUCT: Product` record — all Digital copy, tiers, FAQs, SEO and Service/Breadcrumb JSON-LD. Isolated so every guardrail-sensitive line is reviewable in one place, while still flowing through the product machinery. |
| `lib/products.ts` *(modify)* | Import `DIGITAL_PRODUCT`, add it to `PRODUCTS` and `PRODUCT_BY_SLUG["digital.html"]`. The existing loop then appends `FAQPage` schema automatically. |
| `scripts/optimize-hero-images.py` *(modify)* | Map `digital.jpg → digital` so the hero photo is built and `lib/heroes.ts` regenerates. |
| `lib/site.ts`, `lib/home.ts` *(modify)* | Add the `service` category/kind and the Svasamm Digital entry to both registries. |
| `components/SiteHeader.tsx`, `components/ProductFilter.tsx`, `components/SolutionsPage.tsx` *(modify)* | Render the new "Services" group in mega-menu, home filter and Solutions page. |
| `components/ContactForm.tsx` *(modify)* | Add the Digital option and send the selected interest with the GA4 lead event. |
| `CLAUDE.md` *(modify)* | Document the section and its guardrails. |

**Why the product system rather than a bespoke `/digital` route:** Svasamm Digital is a solution like Millingo and DMS, so it should be discoverable and structured the same way. The `Product` type already models everything this page needs — `tiers[].items[]` renders the Foundation/Growth/Full inclusion lists, `builtFor[]` takes the facility types, `faqs[]` drives the accordion *and* the auto-generated `FAQPage`, and `HeroBackground slug={d.id}` picks up the photo. Reusing it means **zero new page components and zero new routes**, and the section automatically appears in the mega-menu, footer, home grid, Solutions page and sitemap.

**Naming note:** the product `id` is `digital`, so the route is `/pages/digital.html` and the hero resolves at `/hero/digital.webp`. These must match — `HeroBackground` is keyed on `d.id`.

---

### Task 1: Hero image, Digital solution record, and registration

**Files:**
- Modify: `scripts/optimize-hero-images.py`
- Create: `lib/digital.ts`
- Modify: `lib/products.ts`

**Interfaces:**
- Consumes: `Product` from `lib/types.ts`; `SITE_URL` from `lib/site.ts`.
- Produces: `DIGITAL_PRODUCT: Product` (id `"digital"`, slug key `"digital.html"`), consumed by `lib/products.ts`. Later tasks reference the id `digital` and the href `/pages/digital.html`.

- [ ] **Step 1: Add the hero photo to the image pipeline**

In `scripts/optimize-hero-images.py`, add one entry to `SOURCES` immediately after the `"home-v2.jpg": "home",` line:

```python
    "digital.jpg": "digital",
```

- [ ] **Step 2: Build the hero image**

Run: `python3 scripts/optimize-hero-images.py`

Expected: one image encoded (`digital … 2.2MB -> …KB`) and `manifest: lib/heroes.ts (47 slugs)`.

Verify:
```bash
test -f public/hero/digital.webp && echo "IMAGE OK"
grep -c '"digital"' lib/heroes.ts        # expect 1
```
Expected: `IMAGE OK`, `1`.

- [ ] **Step 3: Create the Digital solution record**

Create `lib/digital.ts`:

```ts
// Svasamm Digital — healthcare digitisation service, modelled as a solution so it renders
// through the shared ProductPage and appears everywhere the other solutions do.
// Spec: docs/superpowers/specs/2026-07-19-svasamm-digital-service-design.md
//
// HARD GUARDRAILS (spec §8/§9) — do not violate when editing this file:
//   - No prices. The CTA is always "Request a proposal".
//   - No case studies, testimonials, client logos or result metrics (there are no clients yet).
//   - No promises of patient volume, revenue or clinical outcomes — describe work delivered.
//   - Svasamm is a provider TO healthcare: never emit MedicalOrganization/Physician for it.
//
// FAQPage schema is NOT built here — lib/products.ts appends it from `faqs` for every
// solution. Adding it here would duplicate it.
import { SITE_URL } from "./site";
import type { Product } from "./types";

export const DIGITAL_PRODUCT: Product = {
  id: "digital",
  name: "Svasamm Digital",
  badge: "Svasamm Digital · Healthcare",
  tagline: "Digital presence for healthcare, done properly",
  blurb:
    "Websites, Google Business Profile, local SEO and marketing built specifically for clinics, nursing homes and small hospitals across West Bengal and East India. Fixed scope, a small number of clients, and category exclusivity in your catchment — we won't take your direct competitor.",
  ctaPrimary: "Request a proposal",
  featuresTitle: "What the engagement covers",
  features: [
    { icon: "ph-desktop", title: "A website built for the facility", body: "Services, departments, doctors, timings and directions — structured the way patients actually look for them, and easy for your staff to keep current." },
    { icon: "ph-map-pin", title: "Google Business Profile", body: "Set up or claimed, categories and services filled in properly, hours and photos correct — the listing most patients see before they ever reach your site." },
    { icon: "ph-map-trifold", title: "Local SEO & NAP consistency", body: "On-page optimisation for the searches your catchment actually makes, and your name, address and phone made consistent across the listings that carry them." },
    { icon: "ph-file-text", title: "Schema & AI visibility", body: "Structured data so search engines and AI assistants can read what your facility is, where it is and what it treats — increasingly how patients find care." },
    { icon: "ph-chart-bar", title: "Monthly reporting", body: "On Growth and Full, a plain-language monthly report of the work done and what local ranking and traffic look like. No dashboard to log into." },
    { icon: "ph-handshake", title: "Category exclusivity", body: "One client per facility category per catchment. If a direct competitor inside your catchment approaches us, we decline — and it is written into the agreement." },
  ],
  tiersTitle: "Three fixed tiers — scope published, price quoted per facility",
  tiers: [
    {
      name: "Foundation",
      for: "One-time build. Get the facility properly online, findable and correctly represented.",
      items: [
        "Website build",
        "Google Business Profile setup & optimisation",
        "On-page and local SEO",
        "Schema markup and GEO / AI-visibility setup",
        "NAP consistency across listings",
      ],
      cta: "Request a proposal",
    },
    {
      name: "Growth",
      for: "Foundation, then kept active every month.",
      items: [
        "Everything in Foundation",
        "Google Business Profile posts",
        "One content piece per month",
        "Monthly local ranking & traffic report",
        "Ongoing on-page optimisation",
        "Help setting up review generation",
      ],
      cta: "Request a proposal",
      featured: true,
    },
    {
      name: "Full",
      for: "Growth, plus paid acquisition and social handled for you.",
      items: [
        "Everything in Growth",
        "Google Ads management",
        "Meta Ads management",
        "Social media management",
      ],
      cta: "Request a proposal",
    },
  ],
  builtFor: [
    "Clinics",
    "Nursing homes",
    "Small hospitals",
    "Diagnostic centres",
    "Multi-doctor practices",
    "West Bengal & East India",
  ],
  faqs: [
    {
      q: "Will you work with my competitor?",
      a: "No. You get category exclusivity in your catchment — we won't take your direct competitor. One client per facility category per catchment (roughly a 5–8 km radius, or a pincode cluster where density is high), and it is written into the agreement. If a direct competitor inside that catchment approaches us, we decline. This applies to Svasamm Digital services only — it never applies to Lucoze, our hospital management software, which any facility can buy.",
    },
    {
      q: "Why does exclusivity matter for local search?",
      a: "Local and map results are heavily proximity-driven, so two facilities several kilometres apart largely serve different searchers and there is no real conflict. The genuine conflict is narrow — two direct competitors in the same catchment chasing the same queries — and exclusivity removes it entirely rather than quietly working both sides.",
    },
    {
      q: "How long does it take?",
      a: "Foundation typically goes live about four weeks after we have your content and Google Business Profile access — that handover starts the clock, not the contract date. Growth and Full then run as a monthly cycle from the month after launch. The most common delay is Google Business Profile verification, which Google controls and can take days or weeks. We don't quote when rankings or enquiries will move: that depends on your market and your competition, so we report what was done each month instead.",
    },
    {
      q: "What exactly is included in each tier?",
      a: "Each tier has a fixed, published inclusion list — Foundation, Growth and Full are set out in full on this page. We do not custom-quote scope: you pick the tier that fits, and what you get is what is listed.",
    },
    {
      q: "What does it cost?",
      a: "We don't publish prices. Pricing is set per client against the tier you choose and the size of the facility, so we quote it in a written proposal after a short conversation. Request a proposal and we'll come back with the scope and the number together.",
    },
    {
      q: "What do you need from us?",
      a: "Ownership of (or access to) your Google Business Profile, your correct name, address and phone details, your list of services and doctors, any photographs you want used, and one person who can approve copy. Where we need clinical wording checked, we send it to you for sign-off — we do not write medical claims on your behalf.",
    },
    {
      q: "Do you only work with healthcare?",
      a: "Yes, for this service. We work with clinics, nursing homes and small hospitals — the specialist assets that make this work (healthcare schema, listing categories, medical advertising rules, local search in East India) only compound inside one vertical. We take a small number of clients and serve them properly rather than working at volume.",
    },
    {
      q: "How is this different from Lucoze?",
      a: "Lucoze is our hospital management software (HIMS/EMR) — a product a facility runs day to day. Svasamm Digital is a service: your web presence, local search and marketing. They are separate, and using one does not require the other.",
    },
  ],
  cta: {
    title: "Tell us about your facility",
    body: "Send us your facility type and location. We'll check your catchment is open, then come back with the tier that fits, what it includes, and the price — in writing.",
    primary: "Request a proposal",
  },
  seo: {
    metaTitle: "Healthcare Digital Marketing & Clinic SEO in West Bengal | Svasamm Digital",
    metaDescription:
      "Websites, Google Business Profile, local SEO and digital marketing for clinics, nursing homes and small hospitals in West Bengal and East India. Fixed tiers, category exclusivity in your catchment. Request a proposal.",
    canonical: `${SITE_URL}/pages/digital.html`,
    ogType: "website",
    ogTitle: "Svasamm Digital — healthcare digitisation",
    ogDescription:
      "Website, Google Business Profile, local SEO and marketing for clinics, nursing homes and small hospitals. Category exclusivity in your catchment.",
  },
  // ACCURACY GUARDRAIL (spec §7.6): `audience` says who we serve; the provider stays a plain
  // Organization. Never add MedicalOrganization/Physician/Hospital for Svasamm itself.
  // No hasOfferCatalog/Offer: prices are deliberately unpublished, so we would emit
  // price-less Offers — validation noise for no gain. Tiers are visible on the page.
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Svasamm Digital — healthcare digitisation",
      serviceType: "Digital marketing and web development for healthcare facilities",
      description:
        "Website build, Google Business Profile setup and optimisation, local SEO, schema and AI-visibility, and ongoing digital marketing for clinics, nursing homes and small hospitals.",
      provider: {
        "@type": "Organization",
        name: "Svasamm Research Pvt Ltd",
        url: SITE_URL,
        email: "query@svasamm.com",
        telephone: "+91-91471-44638",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Nabagram, Konnagar",
          addressLocality: "Hooghly",
          addressRegion: "West Bengal",
          postalCode: "712246",
          addressCountry: "IN",
        },
      },
      areaServed: [
        { "@type": "State", name: "West Bengal" },
        { "@type": "Country", name: "India" },
      ],
      audience: { "@type": "BusinessAudience", name: "Clinics, nursing homes and small hospitals" },
      url: `${SITE_URL}/pages/digital.html`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/pages/services.html` },
        { "@type": "ListItem", position: 3, name: "Svasamm Digital", item: `${SITE_URL}/pages/digital.html` },
      ],
    },
  ],
};
```

- [ ] **Step 4: Register it in the solution registry**

In `lib/products.ts`:

1. Add the import below the existing `import type { Faq, Product } from "./types";` line:

```ts
import { DIGITAL_PRODUCT } from "./digital";
```

2. Add it as the last entry of the `PRODUCTS` array — immediately before that array's closing `];`:

```ts
  DIGITAL_PRODUCT,
```

3. Add the slug mapping to `PRODUCT_BY_SLUG` (the record currently ends with `"service-desk.html": PRODUCTS[5],`):

```ts
  "digital.html": PRODUCTS[6],
```

Do **not** touch the `for (const p of PRODUCTS) p.jsonLd = [...p.jsonLd, faqPageLd(p.faqs)];` loop — it now covers Digital automatically.

- [ ] **Step 5: Typecheck and build**

Run: `npx tsc --noEmit && rm -rf out && yarn build`
Expected: clean typecheck; build succeeds; `/pages/digital.html` appears in the route list.

- [ ] **Step 6: Verify the page, its schema and the guardrails**

```bash
test -f out/pages/digital.html.html && echo "PAGE OK"
grep -c "<h1" out/pages/digital.html.html                     # expect 1
grep -oc "<loc>" out/sitemap.xml                              # expect 51 (was 50)
grep -c "svasamm.com/pages/digital.html" out/sitemap.xml      # expect 1
grep -c "/hero/digital.webp" out/pages/digital.html.html      # expect >= 1
grep -c "Request a proposal" out/pages/digital.html.html      # expect >= 4
```

Schema — expect 3 types (`Service, BreadcrumbList, FAQPage`), all parsing, no medical-provider type:
```bash
node -e '
const fs=require("fs");const html=fs.readFileSync("out/pages/digital.html.html","utf8");
const seen=new Set();
const blocks=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  .map(m=>m[1]).filter(s=>!seen.has(s)&&seen.add(s));
console.log("types:",blocks.map(b=>JSON.parse(b)["@type"]).join(", "));
console.log("medical-provider type present (must be false):",
  /MedicalOrganization|"Physician"|"Hospital"|MedicalClinic/.test(html));
'
```

Guardrails — each must print `0`:
```bash
grep -icE '₹|\$[0-9]|INR [0-9]' out/pages/digital.html.html
grep -icE 'testimonial|case stud|trusted by|client logo' out/pages/digital.html.html
grep -icE 'increase (your )?(patients|revenue|footfall)|more patients|guaranteed' out/pages/digital.html.html
```

- [ ] **Step 7: Commit**

```bash
git add scripts/optimize-hero-images.py public/hero/digital.webp lib/heroes.ts lib/digital.ts lib/products.ts
git commit -m "Add Svasamm Digital as a solution

Healthcare digitisation service registered as a Product record so it renders
through the shared ProductPage at /pages/digital.html — hero photo, tiers,
Built for, FAQ and CTA with no new page component or route. Copy lives in
lib/digital.ts so the spec's guardrails stay reviewable in one place: tier
scope published but no prices, no fabricated proof, no outcome promises, and
Organization (never MedicalOrganization) as schema provider."
```

---

### Task 2: "Services" category and discoverability

**Files:**
- Modify: `lib/site.ts`, `lib/home.ts`, `components/SiteHeader.tsx`, `components/ProductFilter.tsx`, `components/SolutionsPage.tsx`

**Interfaces:**
- Consumes: the id `digital` and href `/pages/digital.html` from Task 1.
- Produces: a third `service` category/kind rendered in the mega-menu, home filter and Solutions page. Nothing later depends on it.

A service is not software, so it gets its own group rather than being listed under "Vertical products".

- [ ] **Step 1: Add the category to the nav registry**

In `lib/site.ts`, widen the `NavProduct` category union:

```ts
  category: "vertical" | "platform" | "service";
```

and add this entry to the end of the `PRODUCTS` array (after `service-desk`):

```ts
  { id: "digital", name: "Svasamm Digital", desc: "Healthcare digitisation service", category: "service", href: "/pages/digital.html", icon: "ph-megaphone" },
```

- [ ] **Step 2: Add it to the home registry**

In `lib/home.ts`, widen the `HomeProduct` kind union:

```ts
  kind: "vertical" | "platform" | "service";
```

and add this entry to the end of `HOME_PRODUCTS`:

```ts
  { id: "digital", name: "Svasamm Digital", kind: "service", tag: "Service", tagClass: "tag-neutral", icon: "ph-megaphone", short: "Healthcare digitisation", href: "/pages/digital.html", external: false, blurb: "Website, Google Business Profile, local SEO and marketing for clinics, nursing homes and small hospitals — with category exclusivity in your catchment.", cta: "Explore Svasamm Digital", ctaIcon: "ph-arrow-right" },
```

- [ ] **Step 3: Render the Services group in the mega-menu**

In `components/SiteHeader.tsx`:

1. Beside the existing filters (lines ~9-10), add:

```ts
const service = PRODUCTS.filter((p) => p.category === "service");
```

2. The mega-menu is a fixed-width (660px) 2-column grid. Services has a single entry, so render it as a **full-width row beneath** the two columns rather than a sparse third column. Immediately **after** the closing `</div>` of the "Platform modules" block and **before** the closing `</div>` of the `svh-mega` container, add:

```tsx
                <div style={{ gridColumn: "1 / -1", borderTop: "1px solid var(--color-divider)", paddingTop: 16 }}>
                  <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: accent, marginBottom: 12 }}>Services</div>
                  <div className="flex flex-col gap-1">
                    {service.map((p) => (
                      <ProductLink key={p.id} p={p} className="svh-mega-item flex gap-3 p-2.5" style={{ borderRadius: 9 }}>
                        <span className="flex-none grid place-items-center" style={{ width: 34, height: 34, borderRadius: 8, background: "var(--color-accent-900)", color: "var(--color-accent-300)" }}>
                          <Icon name={p.icon} size={18} />
                        </span>
                        <span className="block">
                          <span className="block" style={{ fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: 14, color: "var(--color-text)" }}>{p.name}{p.external ? " ↗" : ""}</span>
                          <span className="block" style={{ fontSize: 12, color: "var(--color-neutral-500)", lineHeight: 1.4 }}>{p.desc}</span>
                        </span>
                      </ProductLink>
                    ))}
                  </div>
                </div>
```

- [ ] **Step 4: Add the Services chip to the home filter**

In `components/ProductFilter.tsx`, widen the filter type and add the option:

```ts
type Filter = "all" | "vertical" | "platform" | "service";
const OPTS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "vertical", label: "Vertical" },
  { key: "platform", label: "Platform" },
  { key: "service", label: "Services" },
];
```

The existing `shown` filter (`filter === "all" ? products : products.filter((p) => p.kind === filter)`) already handles the new key — do not change it.

- [ ] **Step 5: Add the Services section to the Solutions page**

In `components/SolutionsPage.tsx`:

1. Beside the existing filters (lines ~8-9), add:

```ts
const service = HOME_PRODUCTS.filter((p) => p.kind === "service");
```

2. Immediately **after** the "Platform modules" `</section>` and **before** the closing CTA section, add:

```tsx
      {/* Services */}
      <section style={{ padding: "24px 0 56px" }}>
        <div className="pp-wrap">
          <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 18 }}>Services</div>
          <div className="sv-two" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 18 }}>
            {service.map((p) => (
              <ProductAnchor key={p.id} p={p} className="sv-card-hover" style={{ display: "flex", flexDirection: "column", padding: 24, borderRadius: 14, background: "var(--color-surface)", border: "1px solid var(--color-neutral-800)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                  <span style={{ width: 48, height: 48, flex: "none", borderRadius: 12, display: "grid", placeItems: "center", background: "var(--color-accent-900)", color: "var(--color-accent-300)" }}><Icon name={p.icon} style={{ fontSize: 25 }} /></span>
                  <div><h2 style={{ fontSize: 19, margin: 0, color: "var(--color-text)" }}>{p.name}</h2><span className="tag tag-neutral" style={{ fontSize: 9, marginTop: 5 }}>{p.tag}</span></div>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--color-neutral-400)", flex: 1, margin: "0 0 18px" }}>{p.blurb}</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: 14, color: "var(--color-accent)" }}>{p.cta} <Icon name={p.ctaIcon} weight="bold" style={{ fontSize: 13 }} /></span>
              </ProductAnchor>
            ))}
          </div>
        </div>
      </section>
```

3. Update the intro so it accounts for the third group. Replace the sentence ending `Open any product for the full detail.` with:

```
Vertical products carry an entire industry&apos;s workflow inside; platform modules are the horizontal systems every operation runs; services are delivered by our team. Open any of them for the full detail.
```

- [ ] **Step 6: Typecheck, build and verify discoverability**

Run: `npx tsc --noEmit && rm -rf out && yarn build`
Expected: clean, build succeeds.

```bash
# link present in site-wide chrome (header mega-menu + footer) on an unrelated page
grep -c '/pages/digital.html' out/pages/millingo.html.html    # expect >= 2
# Services group renders on Solutions and home
grep -c 'Services' out/pages/services.html.html               # expect >= 1
grep -c '/pages/digital.html' out/index.html                  # expect >= 2
```

- [ ] **Step 7: Commit**

```bash
git add lib/site.ts lib/home.ts components/SiteHeader.tsx components/ProductFilter.tsx components/SolutionsPage.tsx
git commit -m "Add Services nav group for Svasamm Digital

New \`service\` category alongside vertical/platform so a delivered service is
not presented as software. Renders as a full-width row in the mega-menu (one
entry would look sparse as a third column), a Services chip on the home
filter, and a third section on Solutions."
```

---

### Task 3: Make Digital enquiries distinguishable

**Files:**
- Modify: `components/ContactForm.tsx`

**Interfaces:**
- Consumes: nothing from earlier tasks. Produces: nothing consumed later.

Spec §7.5 requires Digital enquiries be distinguishable from general Svasamm ones. The site already distinguishes enquiries via the "Which solution?" dropdown — so Digital needs to be an option there, consistent with every other solution. The GA4 event currently omits the selection, so adding it makes leads distinguishable in analytics too (a generic win for all solutions).

- [ ] **Step 1: Add the Digital option**

In `components/ContactForm.tsx`, append to `PRODUCT_OPTIONS` (after `"Service Desk"`):

```ts
  "Svasamm Digital — healthcare digitisation",
```

- [ ] **Step 2: Send the selected interest with the lead event**

The existing guarded call in `submit()` (lines ~46-48) is:

```ts
if (typeof window !== "undefined" && window.gtag) {
  window.gtag("event", "generate_lead", { form: "contact", page_location: location.href });
}
```

Replace only the payload, keeping that exact guard:

```ts
if (typeof window !== "undefined" && window.gtag) {
  window.gtag("event", "generate_lead", { form: "contact", interest: f.product, page_location: location.href });
}
```

- [ ] **Step 3: Typecheck and verify the option ships**

Run: `npx tsc --noEmit && rm -rf out && yarn build`

```bash
grep -c "Svasamm Digital" out/pages/contact.html.html   # expect >= 1
```

- [ ] **Step 4: Commit**

```bash
git add components/ContactForm.tsx
git commit -m "ContactForm: add Svasamm Digital option and report interest to GA4

Digital enquiries are now distinguishable the same way every other solution
already is — via the 'Which solution?' selection — and that selection now
rides on the generate_lead event so leads are separable in analytics."
```

---

### Task 4: Docs, full verification and connected-UI audit

**Files:**
- Modify: `CLAUDE.md`

**Interfaces:**
- Consumes: everything above. Produces: nothing — final task.

- [ ] **Step 1: Document the section**

In `CLAUDE.md`, add to the `## Key files` list (after the `lib/routes.ts` entry):

```markdown
- **Svasamm Digital** (`/pages/digital.html`): healthcare-digitisation **service**, modelled as
  a solution — `lib/digital.ts` holds the `Product` record (**all copy lives there**) and
  `lib/products.ts` registers it, so it renders through the shared `ProductPage` and appears in
  the mega-menu, footer, home grid, Solutions page and sitemap automatically. It uses the third
  nav category **`service`** (alongside `vertical`/`platform`) so a delivered service is not
  presented as software. **Guardrails:** publish tier scope but never prices (CTA "Request a
  proposal"); no case studies/testimonials/client logos/result metrics (no clients yet); never
  promise patient volume, revenue or clinical outcomes; never emit
  `MedicalOrganization`/`Physician` for Svasamm — it is a provider *to* healthcare. Published
  delivery timeline is ~4 weeks from content + GBP-access handover. Spec:
  `docs/superpowers/specs/2026-07-19-svasamm-digital-service-design.md`.
```

Also update the counts: `lib/products.ts` now holds **7** solutions (6 products + Svasamm Digital), and the site has **51** crawlable pages / sitemap URLs (both in `## Key files` and `## Progress`).

- [ ] **Step 2: Full rebuild and site-wide verification**

Run: `rm -rf out && yarn build && npx tsc --noEmit`

```bash
grep -oc "<loc>" out/sitemap.xml                               # expect 51
grep -o '<title>[^<]*</title>' out/pages/digital.html.html
grep -o '<link rel="canonical" href="[^"]*"' out/pages/digital.html.html   # expect .../pages/digital.html
grep -o '<meta name="robots" content="[^"]*"' out/pages/digital.html.html  # expect index, follow
ls out/hero/digital.webp && echo "HERO SHIPPED"
```

- [ ] **Step 3: Verify all JSON-LD across the site still parses**

```bash
node -e '
const fs=require("fs"),path=require("path");
let files=[];(function w(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);
 if(e.isDirectory())w(p);else if(e.name.endsWith(".html"))files.push(p);}})("out");
let total=0,bad=0,faq=0;
for(const f of files){const h=fs.readFileSync(f,"utf8");const seen=new Set();
 for(const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){
  if(seen.has(m[1]))continue;seen.add(m[1]);total++;
  try{const o=JSON.parse(m[1]);if(o["@type"]==="FAQPage")faq++}catch(e){bad++;console.log("BAD",f)}}}
console.log("ld+json blocks:",total,"parse failures:",bad,"FAQPage:",faq);
'
```
Expected: `parse failures: 0` and `FAQPage: 46` (was 45 — Digital adds one).

- [ ] **Step 4: Run the connected-UI audit before claiming done**

**REQUIRED:** follow `~/.claude/skills/auditing-connected-ui/SKILL.md` against this change set. Adding a solution touches more surfaces than it looks: **three registries** (`lib/products.ts`, `lib/site.ts`, `lib/home.ts`), consumers (mega-menu desktop **and** the separate mobile menu block, footer Products column, home grid + filter, Solutions page, contact dropdown), generated output (sitemap, `out/`, `lib/heroes.ts`), and deploy/edge — `/pages/digital.html` is a brand-new URL with no legacy predecessor, so **no redirect is needed; confirm and state that rather than skipping the layer**.

Two things to resolve explicitly and report:
- The **mobile menu** in `SiteHeader.tsx` is a separate block that lists "All solutions" rather than individual products — confirm whether Digital is therefore already covered there, or needs its own entry.
- The **footer Products column** is driven by `lib/site.ts` PRODUCTS, so Digital will appear under a heading labelled "Products". Judge whether that mislabels a service, and report it rather than silently changing the heading.

- [ ] **Step 5: Commit**

```bash
git add CLAUDE.md
git commit -m "Document the Svasamm Digital solution and its guardrails

Records that Digital is a service modelled as a solution, the new \`service\`
nav category, and the copy/schema guardrails so future sessions do not
reintroduce prices, fabricated proof or medical-provider markup."
```

---

## Deferred / founder inputs (not build blockers)

1. **Tier prices** — deliberately unpublished; the page ships "Request a proposal" (spec §10).
2. **§6 validation-gate percentages** — confirmed before pilot launch; not referenced on the site.
3. **Digital content cluster** — other solutions carry article clusters (guides/comparisons) via `resources`. Digital ships with `resources` omitted; add SEO articles ("clinic SEO West Bengal", "hospital website design", "nursing home digital marketing") once the section is live. This is where the §7.8 local-intent keywords will really be won — the single page targets them, a cluster would own them.
4. **Lead routing** — the contact form is still client-only (no Route Handler yet); when it lands, the `interest` field already carries the Digital marker.
5. **Footer heading** — if Digital under a "Products" heading reads wrong, splitting the footer column into Products/Services is a small follow-up (flagged in Task 4 Step 4).

## Post-implementation amendments (2026-07-20, founder)

Applied after the final review; the tasks above describe the original build.
1. **No separate `service` nav category.** Svasamm Digital is categorised `vertical`
   (healthcare-specific, like Lucoze) with a **"Service"** card tag and a
   "Healthcare digitisation service" nav description. Task 2's third category, its mega-menu
   row, filter chip and Solutions section were removed — one taxonomy, everything under
   Products, honesty carried by the tag. This also dissolved the Products/Services heading
   inconsistency the final review flagged.
2. **No "Most popular" badge anywhere.** The shared `ProductPage` badge default is now
   **"Recommended"**; `Tier.featuredLabel` remains for a future substantiated override.
   (Original defect: "Most popular" on a pre-pilot service with no clients — spec §8.)
3. **Exclusivity radius is 5 km** (was "5–8 km, or a pincode cluster"), matching Google's
   nearby-results proximity. Spec §5 amended to match.
4. **Renamed to "Svasamm Digital for Healthcare"**; id `digital` → `digital-healthcare`, URL
   `/pages/digital.html` → `/pages/digital-healthcare.html`, hero slug likewise. Done because a
   *Svasamm Digital for Schools* line is planned and the healthcare page must not sit on the
   ambiguous `digital` slug. **The task bodies above still say `/pages/digital.html` — that is
   the original build; the live URL is `digital-healthcare`.** Free to do now: the page was
   never published, so there is no indexed URL to 301.
5. **Content cluster added** (not in the original plan): 6 hand-authored articles in
   `lib/digital-articles.ts` (4 guides + 2 approach-comparisons), merged through a new
   `lib/article-registry.ts` (the auto-generated `lib/articles.ts` stays frozen and is no longer
   imported directly by routing/sitemap), surfaced via a Resources block on the product page.
   Sitemap 51 → 57.

## Out of scope (spec §8) — do not build

Published prices · "all industries" / generic agency pages · client portal, dashboards or automated reporting · case studies, testimonials, client logos, result metrics · bespoke scope-builder or custom quoting UI.
