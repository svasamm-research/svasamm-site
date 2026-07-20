# Svasamm Digital Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the Svasamm Digital service section on `svasamm-site` — a healthcare-digitisation offer (website + SEO/GEO + digital marketing for clinics, nursing homes and small hospitals) with published tier scope, no prices, an exclusivity promise, an objection-handling FAQ, and lead capture that marks Digital enquiries distinctly.

**Architecture:** One standalone route `app/digital/page.tsx` → `/digital`, following the existing `app/privacy` / `app/terms` standalone-route pattern. Content and schema live in `lib/digital.ts` (data) and render through `components/DigitalPage.tsx` (server component), reusing `FaqAccordion`, `ContactForm`, `JsonLd`, `HeroBackground` and `faqPageLd`. No new dependencies.

**Tech Stack:** Next 16 App Router (SSG static export), React 19, TypeScript, Tailwind v4 (`@theme`), Nocturne design system (`app/nocturne.css`), Phosphor icons via `components/Icon.tsx`.

**Source spec:** `docs/superpowers/specs/2026-07-19-svasamm-digital-service-design.md` (§7 is the build scope; §8/§9 are hard guardrails).

## Global Constraints

Every task's requirements implicitly include this section.

**Copy & claims guardrails (spec §8/§9) — violating any of these fails the task:**
- **No prices anywhere.** Tier scope is published; the CTA is exactly **"Request a proposal."**
- **No case studies, testimonials, client logos, or result metrics.** There are no clients yet. Do not fabricate any.
- **No promises of patient volumes, revenue increases, or clinical outcomes.** Describe only the work delivered (site, GBP, SEO, reporting). This is medical-advertising sensitive.
- **Do not claim healthcare-provider status for Svasamm.** Svasamm is a service provider *to* healthcare.
- **No "all industries" / generic digital-agency pages.** Healthcare-only in v1.
- No client portal, dashboards, automated reporting tooling, or bespoke scope-builder / custom quoting UI.

**Schema guardrail (spec §7.6):**
- Emit `Service` with `Organization` as `provider`. **Never** emit `MedicalOrganization`, `Physician`, `Hospital`, `MedicalClinic`, or any medical-provider type for Svasamm itself.

**Business facts (verbatim, from `CLAUDE.md`):**
- Svasamm Research Pvt Ltd · Nabagram, Konnagar, Hooghly, West Bengal 712246, India
- Email `query@svasamm.com` · Phone `+91 91471 44638`

**Platform:**
- Next 16 — heed `AGENTS.md`; read `node_modules/next/dist/docs/` before writing Next code. `params` is a `Promise`; `generateMetadata` is async. (This section uses a static route, so neither applies — but do not regress the `[slug]` dispatcher.)
- Static export (`output: 'export'`, `images.unoptimized`). No server runtime, no route handlers, no query-param-dependent server logic.
- Nocturne only: reuse existing classes (`pp-wrap`, `pp-glow`, `sv-hero`, `sv-hero-content`, `btn`, `btn-primary`, `tag`, `card`) and `var(--color-*)` tokens. Do not invent styling or add CSS frameworks.
- **Next metadata is shallow-replaced per route segment.** Any page-level `openGraph` MUST re-declare `images: [{ url: "/og.png", width: 1200, height: 630, alt: "..." }]` or the site-wide OG image is dropped on that page.
- Package manager **yarn**. `yarn build` = static export; `yarn typecheck` = `tsc --noEmit`.

**Testing note (read before Task 1):** this repo has **no unit-test runner** — `yarn test` maps to `tsc --noEmit`, and the established verification idiom (see `docs/superpowers/plans/2026-07-18-redesign-nextjs-migration.md`) is: typecheck + `yarn build` + assertions against the built output in `out/`. Adding Jest/Vitest is **out of scope**. Each task below therefore ends with concrete, runnable verification commands against `out/` rather than unit tests. Note the static export writes route `/digital` to the file `out/digital.html`.

---

## File Structure

| File | Responsibility |
|---|---|
| `lib/digital.ts` *(create)* | All Digital content + schema as data: tiers, FAQs, engagement steps, SEO record, JSON-LD builder. Single source of truth for copy — keeps guardrail-sensitive text in one reviewable place. |
| `components/DigitalPage.tsx` *(create)* | Server component rendering the page body (hero, who-it's-for, tiers, exclusivity, how it runs, FAQ, lead capture). Presentation only; imports its content from `lib/digital.ts`. |
| `app/digital/page.tsx` *(create)* | Route + `metadata` + `JsonLd` + page chrome (`SiteHeader`/`SiteFooter`). Mirrors `app/privacy/page.tsx`. |
| `components/ContactForm.tsx` *(modify)* | Add optional `source` + `defaultProduct` props and a Digital option, so Digital enquiries are distinguishable. Must not regress the existing Contact page. |
| `app/sitemap.ts` *(modify)* | Add `/digital` (standalone routes are listed explicitly, like `/privacy` and `/terms`). |
| `components/SiteHeader.tsx`, `components/SiteFooter.tsx` *(modify)* | Discoverability — nav + footer links. |
| `CLAUDE.md` *(modify)* | Document the section so future sessions don't rediscover it. |

**Why a standalone `/digital` route rather than `/pages/digital.html`:** the `/pages/*.html` scheme exists to preserve *legacy indexed* URLs from the old gulp site. Svasamm Digital is new content with no legacy URL, and `app/privacy` / `app/terms` already establish the standalone-route pattern. `/digital` is also a section that may grow sub-pages later. nginx serves it via the existing `try_files $uri.html $uri $uri/` (route `/digital` → file `digital.html`), so no deploy change is needed.

---

### Task 1: Digital content + schema data

**Files:**
- Create: `lib/digital.ts`

**Interfaces:**
- Consumes: `Faq`, `Seo` from `lib/types.ts`; `faqPageLd` from `lib/products.ts`; `SITE_URL` from `lib/site.ts`. (Business facts are written inline in the JSON-LD, matching how `lib/products.ts` does it.)
- Produces: `DIGITAL_SEO: Seo`, `DIGITAL_TIERS: DigitalTier[]`, `DIGITAL_FAQS: Faq[]`, `DIGITAL_STEPS: DigitalStep[]`, `DIGITAL_AUDIENCE: string[]`, `DIGITAL_JSONLD: object[]`, and the exported types `DigitalTier` / `DigitalStep`.

- [ ] **Step 1: Create the content + schema module**

Create `lib/digital.ts` with exactly this content:

```ts
// Svasamm Digital — healthcare digitisation service.
// Content lives here (not in the component) so every guardrail-sensitive line sits in one
// reviewable place. Spec: docs/superpowers/specs/2026-07-19-svasamm-digital-service-design.md
//
// HARD GUARDRAILS (spec §8/§9) — do not violate when editing:
//   - No prices. The CTA is "Request a proposal".
//   - No case studies, testimonials, client logos or result metrics (there are no clients yet).
//   - No promises of patient volume, revenue or clinical outcomes — describe work delivered.
//   - Svasamm is a provider TO healthcare: never emit MedicalOrganization/Physician for it.
import { faqPageLd } from "./products";
import { SITE_URL } from "./site";
import type { Faq, Seo } from "./types";

export type DigitalTier = {
  name: string;
  type: string;        // "One-time" | "Monthly retainer"
  summary: string;
  includes: string[];
  featured?: boolean;
};

export type DigitalStep = { icon: string; title: string; body: string };

/** Who the service is for (spec §3). Healthcare only in v1 — no "all industries". */
export const DIGITAL_AUDIENCE = [
  "Clinics",
  "Nursing homes",
  "Small hospitals",
  "Diagnostic centres",
  "Multi-doctor practices",
];

/** Fixed, published inclusion lists (spec §4). Scope is published; price is NOT. */
export const DIGITAL_TIERS: DigitalTier[] = [
  {
    name: "Foundation",
    type: "One-time",
    summary: "Get the facility properly online, findable, and correctly represented.",
    includes: [
      "Website build",
      "Google Business Profile setup & optimisation",
      "On-page and local SEO",
      "Schema markup and GEO / AI-visibility setup",
      "NAP (name, address, phone) consistency across listings",
    ],
  },
  {
    name: "Growth",
    type: "Foundation + monthly",
    summary: "Everything in Foundation, then kept active month after month.",
    includes: [
      "Everything in Foundation",
      "Google Business Profile posts",
      "One content piece per month",
      "Monthly local ranking and traffic report",
      "Ongoing on-page optimisation",
      "Help setting up review generation",
    ],
    featured: true,
  },
  {
    name: "Full",
    type: "Growth + monthly",
    summary: "Everything in Growth, plus paid acquisition and social handled for you.",
    includes: [
      "Everything in Growth",
      "Google Ads management",
      "Meta Ads management",
      "Social media management",
    ],
  },
];

/** How an engagement runs. Describes work delivered — never outcomes (spec §9). */
export const DIGITAL_STEPS: DigitalStep[] = [
  { icon: "ph-map-pin", title: "Catchment check", body: "We confirm your facility category and catchment are open — if we already work with a direct competitor there, we tell you straight away." },
  { icon: "ph-file-text", title: "Proposal", body: "We agree which tier fits, what is included, and the schedule. Scope is fixed and written down before anything starts." },
  { icon: "ph-lightning", title: "Foundation build", body: "Site, Google Business Profile, local SEO, schema and listing consistency — the groundwork every facility needs." },
  { icon: "ph-chart-line-up", title: "Monthly cycle", body: "On Growth and Full, the work continues each month with posts, content, optimisation and a report you actually read." },
];

/**
 * FAQ — this is the primary objection handler (spec §7.4), not filler. The exclusivity
 * question is required. Answers stay factual: no timelines we have not committed to, no
 * outcome promises.
 */
export const DIGITAL_FAQS: Faq[] = [
  {
    q: "Will you work with my competitor?",
    a: "No. You get category exclusivity in your catchment — we won't take your direct competitor. One client per facility category per catchment (roughly a 5–8 km radius, or a pincode cluster where density is high), and it is written into the agreement. If a direct competitor inside that catchment approaches us, we decline. This applies to Svasamm Digital services only — it never applies to Lucoze, our hospital management software, which any facility can buy.",
  },
  {
    q: "Why does exclusivity matter for local search?",
    a: "Local and map results are heavily proximity-driven, so two facilities several kilometres apart largely serve different searchers and there is no real conflict. The genuine conflict is narrow — two direct competitors in the same catchment chasing the same queries — and exclusivity removes it entirely rather than quietly working both sides.",
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
    q: "How long does it take?",
    a: "It depends on the tier and on how quickly we get content and access from you — so we agree the schedule in writing in the proposal rather than quoting a generic number here. Foundation is a defined one-time build; Growth and Full then run as a monthly cycle.",
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
    a: "Lucoze is our hospital management software (HIMS/EMR) — a product a facility runs day to day. Svasamm Digital is a service: your web presence, local search and marketing. They are separate; using one does not require the other.",
  },
];

export const DIGITAL_SEO: Seo = {
  metaTitle: "Healthcare Digital Marketing & Clinic SEO in West Bengal | Svasamm Digital",
  metaDescription:
    "Websites, Google Business Profile, local SEO and digital marketing built for clinics, nursing homes and small hospitals in West Bengal and East India. Fixed tiers, category exclusivity in your catchment. Request a proposal.",
  canonical: `${SITE_URL}/digital`,
  ogType: "website",
  ogTitle: "Svasamm Digital — healthcare digitisation",
  ogDescription:
    "Website, Google Business Profile, local SEO and marketing for clinics, nursing homes and small hospitals. Category exclusivity in your catchment.",
};

/**
 * JSON-LD. Service + Organization provider + Breadcrumb + FAQPage.
 *
 * ACCURACY GUARDRAIL (spec §7.6): Svasamm is a provider TO healthcare. `audience` describes
 * WHO we serve; the provider is a plain Organization. Never add MedicalOrganization,
 * Physician, Hospital or MedicalClinic for Svasamm itself.
 *
 * No `hasOfferCatalog`/`Offer` here on purpose: an Offer without a price is what we would
 * have to emit (prices are deliberately unpublished), which adds validation noise for no
 * gain. The tiers are visible on the page for both readers and AI extraction.
 */
export const DIGITAL_JSONLD: object[] = [
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
    audience: {
      "@type": "BusinessAudience",
      name: "Clinics, nursing homes and small hospitals",
    },
    url: `${SITE_URL}/digital`,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Svasamm Digital", item: `${SITE_URL}/digital` },
    ],
  },
  faqPageLd(DIGITAL_FAQS),
];
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: no output (clean). If `faqPageLd` cannot be imported, confirm it is exported from `lib/products.ts` — it is, at the top of that file.

- [ ] **Step 3: Verify the guardrails hold in the data**

Run each; every one must print `0`:

```bash
# no prices (currency symbols / per-month pricing language)
grep -icE '₹|\$[0-9]|INR [0-9]|per month[^l]|/month' lib/digital.ts
# no fabricated proof
grep -icE 'testimonial|case stud|our clients say|trusted by|client logo' lib/digital.ts
# no outcome/volume promises
grep -icE 'increase (your )?(patients|revenue|footfall)|more patients|guaranteed|[0-9]+% (more|increase|growth)' lib/digital.ts
# Svasamm must not be typed as a medical provider
grep -icE 'MedicalOrganization|"@type": ?"Physician"|"@type": ?"Hospital"|MedicalClinic' lib/digital.ts
```

Expected: `0` for all four.

- [ ] **Step 4: Commit**

```bash
git add lib/digital.ts
git commit -m "Add Svasamm Digital content + schema data

Tiers, FAQs, engagement steps, SEO and JSON-LD for the healthcare
digitisation service. Copy lives in one module so the spec's §8/§9
guardrails (no prices, no fabricated proof, no outcome promises, no
medical-provider schema for Svasamm) are reviewable in one place."
```

---

### Task 2: Mark Digital enquiries in the contact form

**Files:**
- Modify: `components/ContactForm.tsx`

**Interfaces:**
- Consumes: nothing from Task 1.
- Produces: `ContactForm` gains two optional props — `source?: string` (default `"general"`) and `defaultProduct?: string`. `DigitalPage` (Task 3) renders `<ContactForm source="digital" defaultProduct="Svasamm Digital — healthcare digitisation" />`.

Spec §7.5 requires Digital enquiries be distinguishable from general Svasamm enquiries. The form has no backend yet (client-only success state), so the marker must ride on both the submitted field and the GA4 `generate_lead` event, ready for whatever inbox/CRM receives it later.

- [ ] **Step 1: Add the Digital option to the select**

In `components/ContactForm.tsx`, add one entry to the end of `PRODUCT_OPTIONS`:

```ts
const PRODUCT_OPTIONS = [
  "Not sure yet — help me choose",
  "Millingo — Rice Mill ERP",
  "Lucoze — Healthcare HIMS",
  "DMS — Distributor Management",
  "ERP System",
  "HRMS",
  "CRM Platform",
  "Service Desk",
  "Svasamm Digital — healthcare digitisation",
];
```

- [ ] **Step 2: Accept the props and seed initial state**

Change the component signature and the `useState` initialiser. Replace:

```ts
export default function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", company: "", product: PRODUCT_OPTIONS[0], message: "" });
```

with:

```ts
// `source` marks where the enquiry came from so Digital leads are distinguishable from
// general ones (spec §7.5). It rides on the GA4 event now and on the payload when the
// backend Route Handler lands.
export default function ContactForm({ source = "general", defaultProduct }: { source?: string; defaultProduct?: string } = {}) {
  const [f, setF] = useState({ name: "", email: "", company: "", product: defaultProduct ?? PRODUCT_OPTIONS[0], message: "" });
```

- [ ] **Step 3: Reset back to the same default**

In `reset()`, replace `product: PRODUCT_OPTIONS[0]` with `product: defaultProduct ?? PRODUCT_OPTIONS[0]` so "Send another" on the Digital page keeps the Digital context.

- [ ] **Step 4: Include the source in the GA4 lead event**

In `submit()` the existing call is guarded like this (lines ~46-48):

```ts
if (typeof window !== "undefined" && window.gtag) {
  window.gtag("event", "generate_lead", { form: "contact", page_location: location.href });
}
```

Add the source and selected interest, keeping that exact guard — do NOT change how gtag is guarded:

```ts
if (typeof window !== "undefined" && window.gtag) {
  window.gtag("event", "generate_lead", { form: "contact", source, interest: f.product, page_location: location.href });
}
```

- [ ] **Step 5: Typecheck and confirm no regression to the existing Contact page**

Run: `npx tsc --noEmit`
Expected: clean. `components/ContactPage.tsx` calls `<ContactForm />` with no props — both new props are optional with defaults, so it must still compile untouched.

Run: `grep -n "<ContactForm" components/*.tsx`
Expected: `ContactPage.tsx` still shows a bare `<ContactForm />`.

- [ ] **Step 6: Commit**

```bash
git add components/ContactForm.tsx
git commit -m "ContactForm: optional source + defaultProduct props

Lets the Digital section mark its enquiries distinctly (spec §7.5) without
a second form. Source and selected interest now ride on the GA4
generate_lead event; both props are optional so the existing Contact page
is unchanged."
```

---

### Task 3: Digital page body component

**Files:**
- Create: `components/DigitalPage.tsx`

**Interfaces:**
- Consumes: `DIGITAL_TIERS`, `DIGITAL_FAQS`, `DIGITAL_STEPS`, `DIGITAL_AUDIENCE` from `lib/digital.ts` (Task 1); `ContactForm` with `source`/`defaultProduct` (Task 2); existing `FaqAccordion`, `Icon`, `HeroBackground`, `toRoute`.
- Produces: default export `DigitalPage` — a server component taking no props, rendered by `app/digital/page.tsx` (Task 4).

Follow the structure and Nocturne idiom of `components/AboutPage.tsx` and `components/SolutionsPage.tsx`: inline styles using `var(--color-*)` tokens, `pp-wrap` containers, `pp-glow` hero. **Do not** add new CSS.

- [ ] **Step 1: Create the component**

Create `components/DigitalPage.tsx`:

```tsx
import Link from "next/link";
import HeroBackground from "./HeroBackground";
import { Icon } from "./Icon";
import FaqAccordion from "./FaqAccordion";
import ContactForm from "./ContactForm";
import { DIGITAL_AUDIENCE, DIGITAL_FAQS, DIGITAL_STEPS, DIGITAL_TIERS } from "@/lib/digital";
import { toRoute } from "@/lib/routes";

const CONTACT = toRoute("Contact.dc.html");

// Svasamm Digital section body. Content comes from lib/digital.ts — keep copy there, not
// here. Guardrails (spec §8/§9): no prices, no testimonials/case studies/metrics, no
// outcome promises. The CTA is always "Request a proposal".
export default function DigitalPage() {
  return (
    <>
      {/* Hero — no photo exists for this slug yet, so HeroBackground renders the plain
          Nocturne gradient. Drop a `digital` entry into the hero pipeline to add one. */}
      <section className="pp-glow sv-hero" style={{ borderBottom: "1px solid var(--color-divider)" }}>
        <HeroBackground slug="digital" />
        <div className="pp-wrap sv-hero-content" style={{ padding: "30px 24px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "var(--color-neutral-500)" }}>
            <Link href="/" style={{ color: "var(--color-neutral-400)" }}>Home</Link>
            <Icon name="ph-caret-right" style={{ fontSize: 11 }} />
            <span style={{ color: "var(--color-text)" }}>Svasamm Digital</span>
          </div>
        </div>
        <div className="pp-wrap sv-hero-content" style={{ padding: "48px 24px 64px" }}>
          <div style={{ maxWidth: "56ch" }}>
            <div className="tag tag-outline" style={{ marginBottom: 20 }}>Svasamm Digital · Healthcare</div>
            <h1 style={{ fontSize: 44, lineHeight: 1.08, letterSpacing: "-.025em", margin: "0 0 18px", color: "var(--color-text)", maxWidth: "18ch" }}>
              Digital presence for healthcare, done properly
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--color-neutral-300)", maxWidth: "36em", margin: "0 0 28px" }}>
              Websites, Google Business Profile, local SEO and marketing built specifically for
              clinics, nursing homes and small hospitals across West Bengal and East India. Fixed
              scope, a small number of clients, and category exclusivity in your catchment.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#digital-proposal" className="btn btn-primary btn-large" style={{ fontSize: 15, padding: "11px 22px" }}>Request a proposal</a>
              <a href="#digital-tiers" className="btn btn-secondary btn-large" style={{ fontSize: 15, padding: "11px 22px" }}>See what&apos;s included</a>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{ padding: "72px 0 8px" }}>
        <div className="pp-wrap">
          <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>Who it&apos;s for</div>
          <h2 style={{ fontSize: 32, letterSpacing: "-.02em", margin: "0 0 14px", color: "var(--color-text)" }}>Built for healthcare facilities, not for everyone</h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--color-neutral-300)", margin: "0 0 22px", maxWidth: "44em" }}>
            We work in one vertical on purpose. Healthcare has its own listing categories, its own
            schema, its own advertising rules and its own local-search behaviour — specialising is
            what makes the work compound instead of starting over each time.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {DIGITAL_AUDIENCE.map((a) => (
              <span key={a} className="tag tag-neutral" style={{ fontSize: 12.5, padding: "6px 14px" }}>{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers — scope published, price never */}
      <section id="digital-tiers" style={{ padding: "64px 0", marginTop: 40, background: "var(--color-surface)", borderTop: "1px solid var(--color-divider)", borderBottom: "1px solid var(--color-divider)" }}>
        <div className="pp-wrap">
          <div style={{ textAlign: "center", marginBottom: 38 }}>
            <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>What you get</div>
            <h2 style={{ fontSize: 32, letterSpacing: "-.02em", margin: "0 0 12px", color: "var(--color-text)" }}>Three fixed tiers</h2>
            <p style={{ fontSize: 15.5, color: "var(--color-neutral-300)", margin: "0 auto", maxWidth: "40em" }}>
              Each tier has a fixed inclusion list — no custom scope-building. Pricing is set per
              facility and quoted in a written proposal.
            </p>
          </div>
          <div className="pp-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18 }}>
            {DIGITAL_TIERS.map((t) => (
              <div key={t.name} style={{ display: "flex", flexDirection: "column", padding: 26, borderRadius: 16, background: "var(--color-bg)", border: `1px solid ${t.featured ? "var(--color-accent)" : "var(--color-neutral-800)"}`, position: "relative" }}>
                {t.featured && <span className="tag tag-accent" style={{ position: "absolute", top: -10, left: 26, fontSize: 9 }}>Most chosen</span>}
                <h3 style={{ fontSize: 20, margin: "0 0 4px", color: "var(--color-text)" }}>{t.name}</h3>
                <div style={{ fontSize: 11.5, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--color-accent-300)", marginBottom: 10 }}>{t.type}</div>
                <p style={{ fontSize: 13, color: "var(--color-neutral-400)", margin: "0 0 18px", minHeight: 40 }}>{t.summary}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 9, flex: 1 }}>
                  {t.includes.map((item) => (
                    <div key={item} style={{ display: "flex", gap: 9, fontSize: 13, color: "var(--color-neutral-300)", lineHeight: 1.4 }}>
                      <Icon name="ph-check" weight="bold" style={{ fontSize: 14, color: "var(--color-accent-300)", flex: "none", marginTop: 2 }} />{item}
                    </div>
                  ))}
                </div>
                <a href="#digital-proposal" className={`btn ${t.featured ? "btn-primary" : "btn-secondary"} btn-block`} style={{ marginTop: 22 }}>Request a proposal</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusivity */}
      <section style={{ padding: "72px 0 8px" }}>
        <div className="pp-wrap">
          <div className="pp-glow" style={{ border: "1px solid var(--color-neutral-800)", borderRadius: 20, padding: "40px 36px", background: "var(--color-surface)" }}>
            <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>Exclusivity</div>
            <h2 style={{ fontSize: 28, letterSpacing: "-.02em", margin: "0 0 12px", color: "var(--color-text)" }}>We won&apos;t take your direct competitor</h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--color-neutral-300)", margin: "0 0 14px", maxWidth: "46em" }}>
              You get category exclusivity in your catchment — one client per facility category per
              catchment, roughly a 5–8 km radius or a pincode cluster where density is high. It is
              written into the agreement: if a direct competitor inside that catchment approaches
              us, we decline.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--color-neutral-400)", margin: 0, maxWidth: "46em" }}>
              This applies to Svasamm Digital services only. It never applies to{" "}
              <a href="https://lucoze.com" target="_blank" rel="noopener" className="pp-link" style={{ color: "var(--color-accent-300)" }}>Lucoze</a>,
              our hospital management software — software has no zero-sum conflict, and any
              facility can run it.
            </p>
          </div>
        </div>
      </section>

      {/* How it runs */}
      <section style={{ padding: "56px 0 8px" }}>
        <div className="pp-wrap">
          <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>How it runs</div>
          <h2 style={{ fontSize: 28, letterSpacing: "-.02em", margin: "0 0 30px", color: "var(--color-text)" }}>From first call to monthly cycle</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
            {DIGITAL_STEPS.map((s, i) => (
              <div key={s.title} style={{ padding: 22, borderRadius: 14, background: "var(--color-surface)", border: "1px solid var(--color-neutral-800)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ width: 36, height: 36, flex: "none", borderRadius: 9, display: "grid", placeItems: "center", background: "var(--color-accent-900)", color: "var(--color-accent-300)" }}>
                    <Icon name={s.icon} style={{ fontSize: 19 }} />
                  </span>
                  <span style={{ fontSize: 11.5, color: "var(--color-neutral-500)" }}>Step {i + 1}</span>
                </div>
                <h3 style={{ fontSize: 16, margin: "0 0 6px", color: "var(--color-text)" }}>{s.title}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--color-neutral-400)", margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — primary objection handler */}
      <section style={{ padding: "64px 0 8px" }}>
        <div className="pp-wrap" style={{ maxWidth: 820 }}>
          <h2 style={{ fontSize: 28, letterSpacing: "-.02em", margin: "0 0 22px", color: "var(--color-text)" }}>Frequently asked questions</h2>
          <FaqAccordion faqs={DIGITAL_FAQS} />
        </div>
      </section>

      {/* Lead capture — marked as a Digital enquiry */}
      <section id="digital-proposal" style={{ padding: "56px 0 88px" }}>
        <div className="pp-wrap pp-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, alignItems: "start" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>Request a proposal</div>
            <h2 style={{ fontSize: 30, letterSpacing: "-.025em", margin: "0 0 14px", color: "var(--color-text)" }}>Tell us about your facility</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--color-neutral-300)", margin: "0 0 24px" }}>
              Send us your facility type and location. We&apos;ll check your catchment is open, then
              come back with the tier that fits, what it includes, and the price — in writing.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a href="mailto:query@svasamm.com" style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--color-text)" }}>
                <span style={{ width: 40, height: 40, borderRadius: 10, display: "grid", placeItems: "center", background: "var(--color-accent-900)", color: "var(--color-accent-300)" }}><Icon name="ph-envelope-simple" style={{ fontSize: 19 }} /></span>
                <span><span style={{ display: "block", fontSize: 12, color: "var(--color-neutral-500)" }}>Email</span>query@svasamm.com</span>
              </a>
              <a href="tel:+919147144638" style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--color-text)" }}>
                <span style={{ width: 40, height: 40, borderRadius: 10, display: "grid", placeItems: "center", background: "var(--color-accent-900)", color: "var(--color-accent-300)" }}><Icon name="ph-phone" style={{ fontSize: 19 }} /></span>
                <span><span style={{ display: "block", fontSize: 12, color: "var(--color-neutral-500)" }}>Phone</span>+91 91471 44638</span>
              </a>
            </div>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--color-neutral-500)", margin: "22px 0 0" }}>
              Prefer the general enquiry form? <Link href={CONTACT} className="pp-link" style={{ color: "var(--color-accent-300)" }}>Contact Svasamm</Link>.
            </p>
          </div>
          <ContactForm source="digital" defaultProduct="Svasamm Digital — healthcare digitisation" />
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Confirm every icon used exists in the server icon map**

The component uses `ph-caret-right`, `ph-check`, `ph-map-pin`, `ph-file-text`, `ph-lightning`, `ph-chart-line-up`, `ph-envelope-simple`, `ph-phone`.

Run:
```bash
for i in ph-caret-right ph-check ph-map-pin ph-file-text ph-lightning ph-chart-line-up ph-envelope-simple ph-phone; do printf "%-22s %s\n" "$i" "$(grep -c "\"$i\":" components/Icon.tsx)"; done
```
Expected: `1` for every icon. If any prints `0`, add it to `components/Icon.tsx` following the existing pattern (import the Phosphor component, add the `"ph-name": Component` map entry) — and note it in your report.

- [ ] **Step 3: Typecheck**

Run: `npx tsc --noEmit`
Expected: clean.

- [ ] **Step 4: Commit**

```bash
git add components/DigitalPage.tsx components/Icon.tsx
git commit -m "Add Svasamm Digital page body

Hero, who-it's-for, three fixed tiers (scope published, no prices),
exclusivity promise, how-it-runs, FAQ and a lead-capture form marked
source=digital. Reuses FaqAccordion/ContactForm/HeroBackground and the
existing Nocturne classes; copy comes from lib/digital.ts."
```

---

### Task 4: Route, metadata, schema and sitemap

**Files:**
- Create: `app/digital/page.tsx`
- Modify: `app/sitemap.ts`

**Interfaces:**
- Consumes: `DigitalPage` (Task 3); `DIGITAL_SEO`, `DIGITAL_JSONLD` (Task 1); existing `SiteHeader`, `SiteFooter`, `JsonLd`.
- Produces: the live route `/digital`, exported to `out/digital.html`.

- [ ] **Step 1: Create the route**

Create `app/digital/page.tsx`, mirroring `app/privacy/page.tsx`:

```tsx
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import DigitalPage from "@/components/DigitalPage";
import JsonLd from "@/components/JsonLd";
import { DIGITAL_JSONLD, DIGITAL_SEO } from "@/lib/digital";

// NOTE: Next shallow-REPLACES `openGraph` per route segment, so `images` must be
// re-declared here or this page loses the site-wide OG image.
export const metadata: Metadata = {
  title: { absolute: DIGITAL_SEO.metaTitle },
  description: DIGITAL_SEO.metaDescription,
  alternates: { canonical: "/digital" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: DIGITAL_SEO.ogTitle,
    description: DIGITAL_SEO.ogDescription,
    url: "/digital",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Svasamm — vertical ERPs & business platforms" }],
  },
};

export default function Digital() {
  return (
    <>
      <JsonLd data={DIGITAL_JSONLD} />
      <SiteHeader active="digital" />
      <main className="flex-1">
        <DigitalPage />
      </main>
      <SiteFooter />
    </>
  );
}
```

`SiteHeader` is typed `{ active?: string }` (`components/SiteHeader.tsx:37`), so `active="digital"` compiles as-is — no prop-type change needed. It simply means no existing nav item highlights, which Task 5 then wires up.

- [ ] **Step 2: Add the route to the sitemap**

In `app/sitemap.ts`, add `/digital` alongside the other standalone routes. Replace:

```ts
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
```

with:

```ts
    { url: `${SITE_URL}/digital`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
```

- [ ] **Step 3: Build and verify the page exports**

Run: `rm -rf out && yarn build`
Expected: build succeeds; `/digital` appears in the route list.

Run:
```bash
test -f out/digital.html && echo "PAGE OK"
grep -c "<h1" out/digital.html                 # expect exactly 1
grep -oc "<loc>" out/sitemap.xml                # expect 51 (was 50)
grep -c "svasamm.com/digital" out/sitemap.xml   # expect 1
```
Expected: `PAGE OK`, `1`, `51`, `1`.

- [ ] **Step 4: Verify the schema is present, parses, and is accurate**

Run:
```bash
node -e '
const fs=require("fs");
const html=fs.readFileSync("out/digital.html","utf8");
const seen=new Set();
const blocks=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  .map(m=>m[1]).filter(s=>!seen.has(s)&&seen.add(s));
const types=blocks.map(b=>JSON.parse(b)["@type"]);
console.log("blocks:",blocks.length,"types:",types.join(", "));
const bad=/MedicalOrganization|"Physician"|"Hospital"|MedicalClinic/.test(html);
console.log("medical-provider type present (must be false):",bad);
'
```
Expected: 3 blocks — `Service, BreadcrumbList, FAQPage` — all parsing, and `medical-provider type present (must be false): false`.

- [ ] **Step 5: Verify the published-page guardrails**

Run against the built HTML; every one must print `0`:

```bash
grep -icE '₹|\$[0-9]|INR [0-9]' out/digital.html
grep -icE 'testimonial|case stud|trusted by|client logo' out/digital.html
grep -icE 'increase (your )?(patients|revenue|footfall)|more patients|guaranteed' out/digital.html
```
And confirm the CTA is present: `grep -c "Request a proposal" out/digital.html` — expect `≥ 4` (hero + three tier buttons + form section).

- [ ] **Step 6: Commit**

```bash
git add app/digital/page.tsx app/sitemap.ts components/SiteHeader.tsx
git commit -m "Add /digital route, metadata, schema and sitemap entry

Standalone route matching the app/privacy pattern. Service +
BreadcrumbList + FAQPage JSON-LD with Organization as provider — no
medical-provider type for Svasamm (spec §7.6). openGraph re-declares
images because Next replaces the object per segment."
```

---

### Task 5: Discoverability, docs and final verification

**Files:**
- Modify: `components/SiteHeader.tsx`, `components/SiteFooter.tsx`, `lib/site.ts`
- Modify: `CLAUDE.md`

**Interfaces:**
- Consumes: the live `/digital` route (Task 4).
- Produces: nothing consumed by later tasks — this is the final task.

- [ ] **Step 1: Add the header link (desktop + mobile)**

`components/SiteHeader.tsx` has two link groups — a desktop nav (around the `Regions` / `Why Svasamm` / `Contact` links) and a mobile menu (a second copy of those links). Add a Digital link to **both**, immediately before the `Regions` link, copying the exact element/className/style of its siblings in each group:

Desktop — copy the **Contact** link's pattern (`components/SiteHeader.tsx:114`), which is the one that highlights when active. `accent` and `neutral300` are already in scope (lines 42-43):
```tsx
<Link href="/digital" style={{ fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: 14, color: active === "digital" ? accent : neutral300 }}>Digital</Link>
```

Mobile (next to the other mobile entries):
```tsx
<Link href="/digital" style={{ padding: "9px 0", color: "var(--color-text)", fontSize: 15 }}>Digital</Link>
```

- [ ] **Step 2: Add the footer link**

In `components/SiteFooter.tsx`, in the **Company** column (the block containing `All solutions` / `About` / `Why Svasamm` / `Regions` / `Contact`), add after `All solutions`:

```tsx
<Link href="/digital" className="svf-link">Svasamm Digital</Link>
```

- [ ] **Step 3: Keep the shared nav registry consistent**

`lib/site.ts` exports `NAV_LINKS`. Add the entry so anything reading the registry stays in sync:

```ts
export const NAV_LINKS = [
  { label: "Digital", href: "/digital" },
  { label: "Regions", href: "/#regions" },
  { label: "Why Svasamm", href: "/#why" },
  { label: "Contact", href: "/pages/contact.html" },
];
```

- [ ] **Step 4: Document the section**

In `CLAUDE.md`, add to the `## Key files` list (after the `lib/routes.ts` entry):

```markdown
- **Svasamm Digital** (`/digital`): healthcare-digitisation service section — `lib/digital.ts`
  (tiers/FAQ/SEO/JSON-LD; **all copy lives here**), `components/DigitalPage.tsx` (body),
  `app/digital/page.tsx` (route). Standalone route like `/privacy`, not `/pages/*.html`,
  because it is new content with no legacy URL. **Guardrails:** publish tier scope but never
  prices (CTA "Request a proposal"); no case studies/testimonials/client logos/result metrics
  (no clients yet); never promise patient volume, revenue or clinical outcomes; never emit
  `MedicalOrganization`/`Physician` for Svasamm — it is a provider *to* healthcare. Spec:
  `docs/superpowers/specs/2026-07-19-svasamm-digital-service-design.md`.
```

- [ ] **Step 5: Full rebuild and site-wide verification**

Run: `rm -rf out && yarn build && npx tsc --noEmit`
Expected: build succeeds, typecheck clean.

Run:
```bash
# nav + footer link present on an unrelated page (proves it is site-wide chrome)
grep -c 'href="/digital"' out/index.html            # expect >= 2 (header + footer)
grep -c 'href="/digital"' out/pages/millingo.html.html   # expect >= 2
# the Digital page itself still renders and is indexable
grep -o '<title>[^<]*</title>' out/digital.html
grep -o '<link rel="canonical" href="[^"]*"' out/digital.html   # expect .../digital
grep -o '<meta name="robots" content="[^"]*"' out/digital.html  # expect index, follow
# no regression elsewhere
grep -oc "<loc>" out/sitemap.xml                     # expect 51
```

- [ ] **Step 6: Verify all JSON-LD across the whole site still parses**

Run:
```bash
node -e '
const fs=require("fs"),path=require("path");
let files=[];(function w(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);
 if(e.isDirectory())w(p);else if(e.name.endsWith(".html"))files.push(p);}})("out");
let total=0,bad=0;
for(const f of files){const h=fs.readFileSync(f,"utf8");const seen=new Set();
 for(const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){
  if(seen.has(m[1]))continue;seen.add(m[1]);total++;
  try{JSON.parse(m[1])}catch(e){bad++;console.log("BAD",f)}}}
console.log("ld+json blocks:",total,"parse failures:",bad);
'
```
Expected: `parse failures: 0`.

- [ ] **Step 7: Run the connected-UI audit before claiming done**

**REQUIRED:** follow `~/.claude/skills/auditing-connected-ui/SKILL.md` against this change set. Adding a section touches more surfaces than it looks: source data (`lib/digital.ts`, `lib/site.ts`), consumers (header desktop **and** mobile, footer, the page), generated output (sitemap, `out/`), and deploy/edge (nothing needed here — `/digital` is a new URL with no legacy predecessor, so no redirect; confirm and state that rather than skipping the layer). Report anything the audit surfaces.

- [ ] **Step 8: Commit**

```bash
git add components/SiteHeader.tsx components/SiteFooter.tsx lib/site.ts CLAUDE.md
git commit -m "Link Svasamm Digital from nav and footer; document the section

Header (desktop + mobile), footer Company column and the NAV_LINKS
registry. CLAUDE.md records the route decision and the copy/schema
guardrails so future sessions do not reintroduce prices or
medical-provider markup."
```

---

## Deferred / founder inputs (not build blockers)

Carried from spec §10 and surfaced during planning:

1. **Tier prices** — deliberately unpublished in v1; the page ships "Request a proposal". No build work.
2. **§6 validation-gate percentages** — founder confirms before pilot launch. Not referenced on the site.
3. **Typical delivery timelines** — the FAQ answers the "how long" question honestly (schedule agreed in the proposal) rather than inventing a number, because the spec does not state one. If the founder wants concrete timelines published, that is a one-line copy change in `lib/digital.ts`.
4. **Hero photograph** — no `digital` image exists, so the hero renders the Nocturne gradient (handled gracefully by `HeroBackground`). To add one: drop the source into the hero image folder, add a `"<file>.jpg": "digital"` entry to `scripts/optimize-hero-images.py`, and re-run it — the manifest and page pick it up automatically.

## Out of scope (spec §8) — do not build

Published prices · "all industries" / generic agency pages · client portal, dashboards or automated reporting · case studies, testimonials, client logos, result metrics · bespoke scope-builder or custom quoting UI.
