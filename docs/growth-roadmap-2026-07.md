# Svasamm Growth Roadmap — post-launch (2026-07-21)

The Next.js redesign is **live on svasamm.com** (v0.2.0). This is the actionable, prioritised
plan for growing it. For the SEO-101 background and the "why", see the companion guide
`docs/growth-plan.md`; this doc is the *what-to-do-next*, in order.

## Where we actually are now (scorecard refresh)

| Dimension | Status | Note |
|---|---|---|
| Technical SEO | 🟢 Strong | Static HTML, canonicals, 301s, HSTS, www→apex, real sitemap (57 URLs), fast. Live and verified on prod. |
| On-page SEO | 🟢 Good | Unique title/description/H1/OG per page. **Gap:** titles are *descriptive*, not yet *keyword-researched*. |
| Schema / structured data | 🟢 Strong | Organization/WebSite, Service+Breadcrumb+FAQPage on solutions, Article+FAQPage on guides. All parse. |
| **Content / E-E-A-T** | 🟢 **Now a strength** | **44 article guides live** (Millingo cluster, DMS/ERP/HRMS/CRM/Service-Desk clusters, + 6 Svasamm Digital for Healthcare articles) under a founder byline. This was the #1 gap in the old plan — it's closed. |
| GEO / AI search | 🟡 Started | `llms.txt`, FAQPage everywhere, citable copy. Gap: third-party corroboration + being *mentioned* elsewhere. |
| **Lead capture** | 🔴 **BROKEN** | The contact form shows a success state but **sends nothing** — submissions are lost. **P0.** |
| Analytics / measurement | 🟡 Partial | GA4 (`G-EPFCF5F117`) live + `generate_lead` event on submit; host-gated off UAT. **Not yet: GSC, Bing, rank tracking.** |
| Local SEO | 🔴 Not started | **No Google Business Profile, no citations.** The fastest organic win — and essential for Svasamm Digital for Healthcare (explicitly local) and Millingo (regional). |
| Off-page / backlinks | 🔴 Not started | No directory listings, no review-site presence, no citations. |

**Read:** the house is built and furnished (technical + content are strong). What's missing is
(1) a working front door for leads, (2) measurement, (3) getting on the local map, and
(4) getting other sites to point at us.

---

## P0 — This week: stop losing leads + turn on measurement

Nothing else matters if enquiries vanish and we can't see traffic.

1. **Fix the contact form** so a submission emails **mithun@svasamm.com**. The site is a static
   export (no server runtime), so this needs one of: a form-to-email service, a small
   self-hosted endpoint on the existing Dokploy/Hostinger, or a serverless function. Decision
   pending — see "Contact-form backend options" below. Until this ships, every enquiry is lost.
2. **Google Search Console** — add the `svasamm.com` property (verify via GA4 or a Hostinger DNS
   TXT record), then **submit `https://svasamm.com/sitemap.xml`**. Request indexing for the
   home page and the top solution pages to prime discovery.
3. **Bing Webmaster Tools** — add the site (import from GSC in one click) and submit the same
   sitemap. Bing feeds ChatGPT search, so this is also a GEO move.
4. **Confirm GA4 on prod** — verify `page_view` and `generate_lead` events are arriving in the
   GA4 realtime report from svasamm.com (it's host-gated *off* UAT, *on* prod). Mark
   `generate_lead` as a **key event / conversion** in GA4.
5. **IndexNow (optional, 15 min)** — ping Bing/Yandex on publish; nice-to-have.

**Exit check:** a test form submission lands in mithun@svasamm.com; GSC shows the sitemap
"Success" with 57 discovered URLs; GA4 realtime shows a live visit from svasamm.com.

## P1 — Weeks 2–4: get on the local map

Local is the **fastest** organic channel for a West-Bengal company, and it is the core growth
engine for Svasamm Digital for Healthcare (which sells category exclusivity *by catchment*).

1. **Google Business Profile** for Svasamm Research Pvt Ltd — Service-Area Business (hide
   address; service areas = Kolkata / Howrah / Hooghly / West Bengal). Primary category
   *Software company*; secondaries *Website designer*, *Internet marketing service*,
   *Marketing agency*. NAP **exactly** matches the site: `Svasamm Research Pvt Ltd · Nabagram,
   Konnagar, Hooghly, West Bengal 712246 · +91 91471 44638`. Fill services, description, photos.
2. **NAP citations** — list the identical NAP on the India directories in
   `docs/directory-listings.md` (Justdial, IndiaMART, Sulekha, Google, Bing Places, etc.).
   Consistency is the ranking signal; inconsistency actively hurts.
3. **Reviews engine** — a simple ask-flow for the first pilot clients (once there are any). No
   fake reviews, ever (we removed fake testimonials for exactly this reason).
4. **`LocalBusiness`/`Organization` sameAs** — link the GBP, LinkedIn and any citation profiles
   back via `sameAs` in the site's Organization JSON-LD to consolidate the entity.

## P2 — Month 2–3: turn the content we already have into rankings

The clusters exist; now make them *win*.

1. **Keyword-researched titles/H1s** — the current titles are descriptive. Do keyword research
   per cluster (volume + intent + difficulty) and rewrite titles/metas to match real queries.
   Highest-leverage first: Millingo (rice-mill ERP — winnable, regional) and Svasamm Digital
   for Healthcare (clinic SEO West Bengal — winnable, local).
2. **Internal linking pass** — ensure every guide links up to its solution and sideways to 2–3
   siblings (the Article `related` + product `resources` blocks already scaffold this; audit
   for gaps). This spreads authority and is a top-3 on-page lever.
3. **GEO/citability** — keep the FAQ blocks; add crisp, quotable definitions and dated,
   sourced stats to the guides so AI answers cite us. Expand `llms.txt` as sections grow.
4. **Fill remaining thin spots** — Service Desk / Loan-era stubs are gone; confirm every
   indexable page is substantive (no thin pages in the sitemap).
5. **Svasamm Digital cluster** — after the pilot yields real (permissioned) material, expand the
   6-article cluster toward the full local-intent set ("nursing home digital marketing",
   "healthcare digital marketing Kolkata", per-city clinic pages).

## P3 — Month 2–6 (parallel): earn links + citations + mentions

Off-page is the slowest but most durable lever, and our weakest area.

1. **Software-review sites** — G2, Capterra, SoftwareSuggest listings for Millingo / DMS / the
   platform modules. These rank for "best X software" queries we can't outrank directly.
2. **Directory + citation build-out** — beyond local NAP, industry directories (rice-milling,
   OEM/distribution, healthcare-IT) for topical links.
3. **Digital PR / guest content** — founder-authored pieces on rice-mill tech, OEM distribution,
   or clinic digital presence in regional/industry outlets. Ties to the E-E-A-T byline already
   on-site.
4. **Government/industry citation reuse** — the guides already cite FCI/CMR, GST, ABDM/DPDP
   sources; pursue reciprocal mentions where credible.

## Paid — parallel, for leads *this month* while SEO matures

SEO compounds over 3–9 months; ads convert now. Start small and tight:
- One **Google Search** campaign per priority offer (Millingo, Svasamm Digital for Healthcare),
  exact/phrase match, geo-targeted to West Bengal, pointing at the solution page.
- The **`claude-ads`** plugin plans/audits/builds campaigns (`/ads plan`, `/ads math`,
  `/ads landing`) — but needs a real Google Ads account + budget.
- Landing pages already exist (the solution pages); `/ads landing` can audit them for message
  match and conversion.

---

## Measurement — the KPIs to watch

| Lever | Metric | Where |
|---|---|---|
| Discovery | Indexed pages, impressions, avg position | GSC |
| Traffic | Organic sessions, top landing pages | GA4 |
| **Leads** | `generate_lead` events, form emails received | GA4 + inbox |
| Local | Profile views, calls, direction requests, "clinic SEO WB"-type ranks | GBP + rank tracker |
| Authority | Referring domains | Ahrefs/Moz/Search Console links |

Review monthly. The single number that matters first is **leads** — everything upstream
(rankings, traffic) only counts once the front door works.

---

## Contact-form backend options (the P0 decision)

The site is a **static export** served by nginx — there is no Next.js server to run a Route
Handler. To email `mithun@svasamm.com` on submit, pick one:

| Option | How it works | Effort | Needs from you | Trade-off |
|---|---|---|---|---|
| **A. Form-to-email service** (Web3Forms / Formspree) | Form POSTs to their API; they email mithun@svasamm.com. Built-in spam filter + honeypot. | ~1 hr, ships today | A free access key (Web3Forms, tied to mithun@svasamm.com) | Leads transit a third party (forwarded to email, not stored long-term). |
| **B. Self-hosted endpoint** on Dokploy/Hostinger | A tiny mail service (own Dokploy app at e.g. `api.svasamm.com`) receives the POST and sends via Hostinger SMTP. | ~half day | Hostinger SMTP creds for a svasamm.com mailbox (as a Dokploy secret) | Fully in-house — your infra, your email, no third party. More to run/maintain. |
| **C. Serverless function** (Cloudflare Worker + Resend/SES) | POST to a Worker → email API. | ~2–3 hr | A Cloudflare account + a Resend/SES API key | Middle ground; another vendor + keys. |

**Recommendation:** **A** to get leads flowing *today* (the current state loses every enquiry),
with **B** as the clean long-term home if you'd rather keep leads entirely on your own infra and
email. Both fire the existing GA4 `generate_lead` conversion. Whichever we choose, I'll add a
honeypot + basic rate-limit and keep the client-side validation and success UX as-is.
