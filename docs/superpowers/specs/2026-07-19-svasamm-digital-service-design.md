# Svasamm Digital — healthcare digitisation service (design)

**Date:** 2026-07-19
**Status:** Approved by founder, ready for implementation planning
**Implements in:** `svasamm-site` (Next 16 App Router). Depends on the in-flight
redesign — see `2026-07-18-redesign-nextjs-migration-design.md`.

---

## 1. Why this exists (strategic context)

Lucoze (HMS/EMR) has a **long sales cycle** — hospital software is high-consideration,
high-switching-cost, and slow to close. **Svasamm Digital is a shorter-cycle wedge**:
website + SEO/GEO + digital marketing for clinics, nursing homes and small hospitals.

The wedge works in three steps: win a small, fast engagement → hold a **monthly
touchpoint** through the retainer → convert that trust into a warm Lucoze HIMS
conversation later. Building a facility's web presence also produces the best HIMS
discovery available (you learn their patient flow, ops and pain points first-hand).

**Operating model:** start as a wedge, graduate to a standalone revenue line **only if**
the validation gates in §6 pass.

## 2. Why it sits under Svasamm, not Lucoze

Deliberate brand separation. The deciding reason: **the wedge only works if we can sell to
a facility already running someone else's HMS** — and those are precisely the facilities we
eventually want to switch to Lucoze. "Svasamm, we do healthcare digitisation" opens that
door; "Lucoze, your software vendor's competitor" does not.

It also protects the Lucoze product positioning (and its entity/schema/E-E-A-T investment)
from reading as an agency.

## 3. Positioning

- **Healthcare-first**: clinics, nursing homes, small hospitals. East India, West Bengal focus.
- **Quality over quantity**: few clients, served well. Premium and specialist — explicitly
  *not* a volume agency. This is the pricing posture and the reason exclusivity is credible.
- **Adjacent industries**: accept good work by referral, but **do not market to them in v1**
  (no "all industries" pages). Rationale: the wedge thesis only pays off with healthcare
  clients, specialist assets compound only within a vertical (healthcare templates,
  `Physician`/`MedicalOrganization` schema, medical-ad compliance, GBP categories,
  doctor-to-doctor referrals), and a focused site can actually rank ("clinic SEO West
  Bengal" is winnable; "digital marketing agency" is not). Revisit after the pilot — and if
  a second vertical opens, prefer one where Svasamm already has product presence
  (rice mills via Millingo, distributors via DMS).

## 4. The offer — three fixed tiers

Published **scope**, unpublished **price**.

| Tier | Type | Includes |
|---|---|---|
| **Foundation** | one-time | Website build, Google Business Profile setup + optimisation, on-page + local SEO, schema + GEO/AI-visibility, NAP consistency |
| **Growth** | Foundation + monthly | GBP posts, one content piece/month, local ranking + traffic report, ongoing on-page optimisation, review-generation help |
| **Full** | Growth + monthly | Google/Meta ads management + social. **Offered in v1.** |

**Rules that keep this productized (not an agency):**
- Each tier has a **fixed, published inclusion list**. No bespoke scope quoting in v1 — the
  moment scopes are custom-negotiated, this becomes an agency and consumes the roadmap.
- **Prices are not published.** CTA is "Request a proposal." Pricing is premium and
  value-based per client; figures get set after the pilot reveals real willingness-to-pay.
- **Growth is the strategic tier** — the retainer is not just revenue, it is the monthly
  touchpoint that makes the later HIMS conversation warm. A build-and-leave engagement
  loses the relationship exactly when the upsell should begin.

## 5. Exclusivity policy (differentiator + conflict resolution)

Two competing hospitals in one catchment cannot both be ranked #1 for the same query.
Rather than hide that, we make it the offer:

- **One client per facility category × catchment.** Catchment ≈ **5 km radius** — chosen to
  match the proximity range Google's nearby/local results actually draw from.
  *(Amended 2026-07-20 by founder decision; was "≈ 5–8 km radius, or a pincode cluster where
  density is high". The site copy states 5 km.)*
- **Contractual.** If a direct competitor inside that catchment approaches us, we decline.
- **Applies to Svasamm Digital services only — never to Lucoze HIMS.** Software has no
  zero-sum conflict; Lucoze may be sold to any facility, including two rivals.
- **Public promise (site copy):** "You get category exclusivity in your catchment — we
  won't take your direct competitor."
- **Supporting truth for the copy:** local/map-pack results are heavily proximity-driven, so
  facilities several kilometres apart largely serve different searchers. The genuine
  conflict is narrow, and exclusivity removes it entirely.
- **Never take both quietly.** In a local medical community reputation is the entire asset
  the HIMS upsell depends on.

## 6. Pilot and validation gates

- **Pilot:** 6–10 clients across West Bengal.
- **Graduate** to a standalone revenue line when **both** hold:
  - ≥ 60% of Growth/Full clients renew the retainer at month 6, and
  - ≥ 30% **of all pilot clients** have opened a Lucoze HIMS conversation within 12 months.
- **Pause and reassess** if delivery consumes more than the founder-time budget agreed at
  launch, or retainer churn exceeds 40%.

*(Gate percentages are working targets; the founder confirms them before pilot launch. The
gate structure itself is decided.)*

## 7. What to build on `svasamm-site`

**Stack/conventions:** Next 16 App Router (SSG static export), React 19, TypeScript,
Tailwind v4 (`@theme`), **Nocturne** design system, Phosphor icons, existing `JsonLd`
component. Heed `AGENTS.md` — Next 16 specifics (`params` is a Promise; async
`generateMetadata`); read `node_modules/next/dist/docs/` before writing Next code.

**Scope:**

1. **Section route** — a dedicated area, suggested `app/digital/`. (Implementer may instead
   use the existing `app/pages/[slug]` content system if that better matches the redesign;
   the requirement is a coherent, linkable section, not a specific mechanism.)
2. **Overview page** — what it is, who it's for (clinics / nursing homes / small hospitals),
   the healthcare specialism, the exclusivity promise, how the engagement runs, CTA.
3. **Tiers section** — the three tiers with their fixed inclusion lists and a
   "Request a proposal" CTA. **No prices rendered.**
4. **FAQ** — reuse `FaqAccordion`. Must include the exclusivity question explicitly
   ("Will you work with my competitor?"), plus scope, timelines, and what we need from the
   client. This FAQ is a primary objection-handler, not filler.
5. **Lead capture** — reuse the existing `ContactForm` / `ContactPage` pattern. Add an
   interest/source marker so Digital enquiries are distinguishable from general Svasamm
   enquiries in whatever inbox/CRM receives them.
6. **Schema** — `Service` with `Organization` as provider, via `JsonLd`. **Accuracy
   guardrail:** Svasamm is a service provider *to* healthcare — do **not** emit
   `MedicalOrganization`/`Physician` types for Svasamm itself.
7. **Discoverability** — add the section to site nav and footer.
8. **SEO targets** — service + local intent: "hospital website design", "clinic SEO West
   Bengal", "nursing home digital marketing", "healthcare digital marketing Kolkata".
   Follow the site's existing routing/SEO conventions (README §Routing, §SEO).

## 8. Explicitly out of scope (v1)

- Published prices.
- "All industries" / generic digital-agency pages.
- Client portal, dashboards, or automated reporting tooling.
- **Case studies, testimonials, client logos or result metrics** — there are no clients yet.
  Do not fabricate any. Add only after the pilot produces real, permissioned results.
- Bespoke scope-builder / custom quoting UI.

## 9. Copy and claims guardrails

- **No fabricated clients, results, or metrics.** Same honesty standard as lucoze.com — the
  company is pre-pilot for this service and copy must reflect that.
- **Do not claim healthcare-provider status** for Svasamm (see §7.6).
- **Medical advertising sensitivity:** never promise patient volumes, revenue increases, or
  clinical outcomes. Describe the work delivered (site, GBP, SEO, reporting), not results
  that depend on a third party's clinical business.

## 10. Open founder inputs (not build blockers)

- Tier price points — deliberately deferred until the pilot; v1 ships "Request a proposal".
- Confirmation of the §6 gate percentages before pilot launch.
