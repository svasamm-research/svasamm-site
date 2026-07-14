# Svasamm Growth Plan — SEO, Local SEO, GEO, Content, Backlinks & Ads

> A plain-language strategy + learning guide for growing traffic and users to
> **svasamm.com** (and the product sites: **lucoze.com**, and future Millingo/DMS sites).
> Written for a founder new to SEO. Read top-to-bottom once; then use it as a reference.
>
> **Golden rule up front:** SEO is compounding but slow (3–9 months to real traction).
> Paid ads are fast but stop the moment you stop paying. You want **both**: ads for
> leads *now*, SEO for cheap leads *later*. This plan builds both.

---

## Part 0 — TL;DR

- Our on-page/technical SEO is now in good shape (see scorecard). The **big gaps are
  off-site**: no Google Business Profile, no backlinks, no ongoing content, no keyword
  targeting, no analytics wired up.
- **We ARE lacking content.** A 12-page marketing site does not rank for competitive
  terms. Ranking requires content that matches what people search *and* proof we're
  credible (E-E-A-T). This is the #1 lever.
- **Local SEO** (Google Business Profile + reviews + local content) is the fastest win
  for a West-Bengal-based company, and essential for Millingo (rice mills are regional).
- **Ads** are how you get users *this month* while SEO matures. Start with a small,
  tightly-targeted Google Search campaign per product. The `claude-ads` plugin plans,
  audits, and builds campaigns — but you still need an ad account + budget.
- Nothing below is built yet — this is the plan to review before we implement.

---

## Part 1 — Where we are: SEO completeness scorecard

| Dimension | Status | What's done | What's still missing |
|---|---|---|---|
| **Technical SEO** | 🟢 Strong | Crawl-trap fixed, robots.txt, real sitemap.xml, canonicals, 301s, security headers, HSTS, fast static HTML, mobile-ready | Live `nginx -t` on Hostinger; Core Web Vitals field data (needs traffic); IndexNow (optional) |
| **On-Page SEO** | 🟢 Good | Unique titles/descriptions, one H1/page, OG/Twitter, clean URLs, internal links, product pages | Keyword-targeted titles (we wrote *descriptive* not *keyword-researched* titles) |
| **Structured data / Schema** | 🟢 Good | Organization, Service, Review, BreadcrumbList on every page (validated) | FAQ/HowTo where genuinely useful; Product/Offer once pricing exists |
| **Content / E-E-A-T** | 🔴 **Weak** | Product pages exist; testimonials | **No blog, no case studies, no depth, no author/expertise signals, unproven stats.** This is the main gap. |
| **GEO / AI search** | 🟡 Started | llms.txt, citable copy, entity schema | Third-party corroboration, more citable stats/definitions, being *mentioned* elsewhere |
| **Local SEO** | 🔴 **Not started** | — | **Google Business Profile, NAP citations, reviews, local landing content.** Biggest quick win. |
| **Off-page / Backlinks** | 🔴 **Not started** | — | Directory listings, software-review sites (G2/Capterra), PR, partnerships, guest posts |
| **Keyword strategy** | 🔴 **Not started** | — | No keyword research, no keyword→page map, no rank tracking |
| **Analytics / measurement** | 🔴 **Not started** | — | Google Search Console, GA4, Bing Webmaster not verified/wired |

**Read:** we finished the "make the house structurally sound" phase. The next phases
are "furnish it with content," "put it on the map (local)," "get people to link to it,"
and "run ads to fill it while it grows."

---

## Part 2 — SEO 101 (how search actually works)

**The pipeline:** Google **crawls** your pages (a bot reads them) → **indexes** them
(stores + understands them) → **ranks** them for a query → a user sees a result and
**clicks** (or not). Every SEO task improves one of these steps. Our technical fixes
mostly improved *crawl + index*. Content + links improve *rank*. Titles + rich results
improve *click-through*.

**What Google is trying to do:** show the result that best satisfies the searcher.
So ranking = **Relevance** (does the page match the query and intent?) ×
**Authority** (do other credible sites/entities vouch for you — backlinks, mentions,
brand?) × **Experience** (fast, mobile, trustworthy, easy to use).

**The three eras of results (all live today):**
1. **Ten blue links** — classic organic results.
2. **Rich features** — map pack (local), featured snippets, People Also Ask, images.
3. **AI answers** — Google AI Overviews, ChatGPT/Perplexity. These *summarize* and
   *cite* sources. Being citable (clear facts, structured data, third-party mentions)
   is the new frontier = **GEO** (Generative Engine Optimization).

**Realistic timeline:** a brand-new/low-authority site takes **3–9 months** to rank for
anything competitive, faster for long-tail and local. Anyone promising week-1 rankings
is selling ads or snake oil. This is why we run ads in parallel.

---

## Part 3 — Keyword strategy ("what should I rank for?")

Keywords are the bridge between *what people type* and *your pages*. Get this wrong and
great content ranks for nothing.

### 3.1 Search intent — the most important concept
Every search has an intent. Match your page type to it:

| Intent | Example query | Page that wins |
|---|---|---|
| **Informational** | "what is a distributor management system" | blog/guide |
| **Commercial** (researching) | "best rice mill software india" | comparison/listicle, product page |
| **Transactional** (ready) | "hospital management software price" | product/pricing/demo page |
| **Navigational** | "lucoze login" | your branded page |
| **Local** | "erp company in kolkata" | GBP + local landing page |

If Google shows listicles for a term and you publish a product page, you won't rank —
**match the format Google already rewards.**

### 3.2 Head vs long-tail — where a new site wins
- **Head terms** ("ERP software") = huge volume, brutal competition (SAP, Zoho, Oracle).
  You will **not** win these for years. Don't target them head-on.
- **Long-tail** ("rice mill erp with FCI levy compliance", "clinic management software
  with ABHA integration Kolkata") = lower volume, *far* less competition, higher intent.
  **This is where you start and win.** Ten long-tail pages that each get 20 visitors/mo
  = 200 qualified visitors, and they *convert* because they're specific.

### 3.3 How to find keywords (free tools first)
1. **Google Search Console** (once wired up) — shows the exact queries you *already*
   appear for. Gold. Start here every month.
2. **Google autosuggest** — type "rice mill software" and read the dropdown.
3. **People Also Ask** + "Related searches" at the bottom of the SERP.
4. **Google Keyword Planner** (free with a Google Ads account) — volumes + ideas.
5. **Competitors** — what do Zoho/Marg/SoftwareSuggest listings rank for? What terms are
   on competitor rice-mill/HMS software pages?
6. Paid (later): Ahrefs/Semrush/`DataForSEO` for volume + difficulty at scale.

### 3.4 Starter seed-keyword map (per product)
These are *hypotheses* to validate with the tools above, not final. Grouped by product;
each becomes a page or a cluster.

**Lucoze (HMS/EMR — lucoze.com is the ranking target; svasamm links to it):**
- clinic management software india / hospital management system india
- ABHA / ABDM compatible hospital software
- HMS software with GST billing / e-invoicing
- pathology lab management software / pharmacy management software
- hospital software Kolkata / West Bengal / Patna (local)
- "[Lucoze vs X]" comparison terms once you know competitors (e.g. vs Practo, vs
  MocDoc, vs Halemind)

**Millingo (rice mill ERP — regional, high-intent, low competition = best SEO bet):**
- rice mill software / rice mill ERP / rice mill management software
- paddy procurement software / FCI CMR software / levy paddy software
- rice mill accounting software / miller software West Bengal / Uttar Pradesh
- rice mill software with weighbridge / by-product (bran husk) tracking
- These have *low competition* and *buyers with money* — Millingo is your **best
  organic opportunity**.

**DMS (distributor management — B2B, niche):**
- distributor management system / DMS software for manufacturers
- secondary sales tracking software / distributor stock management
- DMS software india / OEM distributor portal

**Generic ERP/HRMS/CRM:** don't fight the giants; target *vertical/local* long-tail
("erp for manufacturing SME kolkata") or drop them as SEO targets and keep them as
"we also do this" pages.

### 3.5 Turn keywords into a site: topic clusters
Pick a **pillar** (broad page, e.g. `/rice-mill-erp`) and surround it with **spokes**
(specific blog posts: "How rice mills calculate butta deductions", "FCI CMR process
explained", "Rice milling yield & by-product accounting"). Spokes link to the pillar;
the pillar links to spokes. Google reads this as topical authority. Do one cluster per
product. (We have the `seo-cluster` tool to build these from real SERP data when ready.)

---

## Part 4 — Content & E-E-A-T ("are we lacking content? — yes")

**Honest answer: yes.** A dozen marketing pages is a brochure, not a content engine.
Google ranks *pages that best answer a query and come from a credible source*. We have
few pages, none answering informational queries, and thin credibility signals.

### 4.1 What is E-E-A-T and why it matters
Google's quality raters (and algorithms) judge **E-E-A-T**:
- **Experience** — first-hand experience (real implementations, screenshots, results).
- **Expertise** — who wrote this? Show credentials, author bios (e.g. Mithun Singh,
  founder; domain experts).
- **Authoritativeness** — do others cite/link/mention you? (backlinks, press, reviews).
- **Trust** — the top signal: real company info, security, honest claims, reviews,
  clear contact, no fabricated stats.

This matters **most** for Lucoze (healthcare = "Your Money or Your Life" content, held
to the highest E-E-A-T bar). Unproven medical/financial claims actively hurt you.

### 4.2 Content plan (prioritized)
Per product, in order of ROI:

1. **Case studies** (highest trust ROI) — 1–2 real customers per product with the
   problem, what you did, measured results. Replaces the unproven "300% ROI" stats with
   *real, attributable* proof. **Needs your input (customer permission + numbers).**
2. **Pillar pages** — one deep page per product (already partly done; deepen Millingo/
   DMS/Lucoze with real workflows, screenshots, FAQs).
3. **Blog / guides** (spokes) — answer the informational long-tail. Examples:
   - Millingo: "FCI CMR process for rice mills, explained"; "How to calculate milling
     yield and account for bran/husk/broken"; "Rice mill GST & levy compliance checklist".
   - Lucoze: "ABHA/ABDM integration for clinics: a practical guide"; "GST e-invoicing for
     hospitals"; "Choosing an HMS for a 30-bed hospital".
   - DMS: "Primary vs secondary sales tracking"; "What a distributor management system
     does".
4. **Comparison / alternatives pages** — "Millingo vs [competitor]", "Best rice mill
   software" — capture commercial-intent searches. High converting.
5. **FAQ sections** on product pages — great for AI citation and long-tail.
6. **Glossary / definitions** — cheap, citable by AI engines.

**Cadence:** even 2–4 quality posts/month compounds. Quality > quantity — one genuinely
useful 1,200-word guide beats ten thin 300-word posts (which can trigger "unhelpful
content" demotions).

**Author signals:** add real bylines + a short bio ("Mithun K. Singh, founder, Svasamm
Research") and an author/Organization schema. This is a real E-E-A-T lever we can add.

---

## Part 5 — Local SEO (West Bengal + Jharkhand, Odisha, UP, Bihar)

**Local SEO = ranking in the "map pack"** (the 3 map results) and local organic. It's
the **fastest, cheapest win** for a WB-based company and critical for Millingo/Lucoze
(their buyers are regional).

### 5.1 The three local ranking factors
- **Relevance** — does your profile/site match the search? (categories, services, content)
- **Distance** — how close are you to the searcher? (you can't change location, but you
  can create genuine local pages/service-area signals)
- **Prominence** — reviews, citations, links, brand mentions.

### 5.2 The single biggest local lever: Google Business Profile (GBP) — free
- Create/claim a **Google Business Profile** for Svasamm Research (and consider separate
  profiles for Lucoze if it has a distinct office/brand). Category: "Software company".
- Complete 100%: NAP (Name, Address, Phone — must **exactly** match the website footer),
  hours, services, description, photos, products.
- Post updates, add Q&A, respond to every review.
- **This alone can put you in the Kolkata/Hooghly map pack within weeks** — far faster
  than organic.

### 5.3 NAP consistency + citations
Your **Name, Address, Phone** must be **identical** everywhere. Then list on Indian
directories (these are also backlinks):
- **Justdial, Sulekha, IndiaMART, TradeIndia** (B2B/software), **Google Business,
  Bing Places, Apple Maps**, **Clutch/GoodFirms/SoftwareSuggest** (software vendors).
- Consistency is the point — mismatched addresses confuse Google and split your signals.

### 5.4 Reviews
Reviews drive both local rank and conversion. Systematically ask happy customers for
Google reviews (a simple link). Respond to all. Aim for a steady trickle, not a burst
(bursts look fake). Never fabricate — the audit already flagged the uniform-5★ risk.

### 5.5 The multi-state strategy (WB → Jharkhand, Odisha, UP, Bihar)
You want WB primary, then the adjacent rice/health belt. **Do this well, not spammy:**
- **Genuine location/state pages only where you have real presence or customers** — e.g.
  `/rice-mill-erp/west-bengal`, `/rice-mill-erp/uttar-pradesh` — each with *unique*
  content: local context (WB e-Paddy vs UP e-Kray procurement portals differ!), local
  customer names, region-specific workflows. **Do NOT** spin 50 near-identical city
  pages — Google penalizes "doorway pages" (our quality gate: <30 fine, 30+ needs 60%+
  unique content, 50+ is a hard stop).
- **Language advantage** — Bengali content for WB, Hindi for UP/Bihar/Jharkhand can win
  searches competitors ignore. Lucoze already has Hindi UI as a selling point.
- **Regional relevance signals** — mention state procurement portals, local associations,
  district names *where genuinely relevant*. For Millingo this is a real moat: you
  understand WB + UP levy rules that generic ERPs don't.
- Prioritize: **WB (home) → UP (huge rice belt) → Bihar/Odisha/Jharkhand** based on
  where you actually win customers first. Let real traction, not a map, set the order.

---

## Part 6 — Off-page / backlinks (authority)

**Backlinks** = other sites linking to you. Still one of Google's strongest signals: a
link is a "vote." We've done **zero** off-page (it's inherently off-site). A new domain
with no links struggles to rank no matter how good the content.

**How to earn links (white-hat only):**
- **Software directories / review sites** (also lead sources): G2, Capterra,
  GetApp, SoftwareSuggest, GoodFirms, Clutch — list all products. High-authority, and
  buyers browse them.
- **Local + business directories** (Part 5.3) — easy, consistent NAP.
- **Digital PR** — a data study or opinion piece ("State of rice-mill digitisation in
  WB") that journalists/blogs cite. One good story = many links.
- **Guest posts / partnerships** — write for industry blogs (agri-tech, health-tech,
  ERPNext/Frappe community — you build on Frappe, so the Frappe ecosystem is a natural
  link + audience source).
- **Product-led** — Frappe app store / marketplace listings, open-source presence,
  case studies co-published with customers.
- **Unlinked brand mentions** — get mentioned (Reddit, forums, news); even without a
  link these feed AI/GEO and can be converted to links.

**Never:** buy links, use PBNs, mass-comment spam. Google's link-spam systems neutralize
or penalize these. Slow and real beats fast and fake.

---

## Part 7 — GEO / AI search (already started)

We've done the basics: `llms.txt`, entity/Organization schema, citable copy, AI-crawler
policy in robots.txt. To actually get **cited** by AI Overviews/ChatGPT/Perplexity:
- Publish **clear, quotable facts and definitions** (AI engines lift self-contained
  sentences). FAQ blocks are ideal.
- Get **third-party corroboration** — AI engines trust sources that others confirm
  (reviews, Reddit, directories). This overlaps with Parts 5–6.
- Keep **structured data** accurate and rich.
- Track it: periodically ask ChatGPT/Perplexity "best rice mill ERP in India" and see if
  you're mentioned; that's your GEO rank check.

---

## Part 8 — Measurement & staying current

### 8.1 Wire up analytics first (you can't improve what you can't see)
- **Google Search Console** (free, essential) — verify the domain, submit the sitemap.
  Shows queries, clicks, impressions, position, indexing issues. **Check weekly.**
- **Google Analytics 4** (free) — traffic, sources, conversions (form fills, demo
  requests). Set up conversion events for the contact form.
- **Bing Webmaster Tools** (free) — Bing/Copilot + extra keyword data.
- Later: rank tracking (Semrush/Ahrefs or `DataForSEO`), server-side tracking for ads.

### 8.2 KPIs to watch (and what "good" looks like early)
Indexed pages (should match sitemap), impressions (rising = Google showing you more),
average position (falling number = better), clicks, and **conversions** (the only one
that pays bills). Don't obsess over one keyword; watch the trend.

### 8.3 Keeping up with Google's algorithm changes
- **Official (trust these):** Google Search Central Blog, the **Search Status Dashboard**
  (shows live ranking/indexing incidents), Google Search Central YouTube, `@searchliaison`.
- **Trusted news:** Search Engine Roundtable (daily), Search Engine Land, Search Engine
  Journal, Aleyda Solis's newsletter.
- **Cadence:** Google runs **core updates** every few months + frequent smaller ones.
  Don't panic-react to every rumor. If traffic drops, check the Search Status Dashboard
  and whether a core update is rolling out; then assess content quality — core updates
  reward genuinely helpful, trustworthy content and demote thin/AI-spam. **Fundamentals
  (helpful content + E-E-A-T + technical health) survive every update.** Chasing tricks
  gets you burned by the next one.

---

## Part 9 — Paid ads: role, platforms, and the `claude-ads` plugin

### 9.1 Why ads (and how they pair with SEO)
SEO is a 6-month investment; ads are an on/off tap. Use ads to:
- get **leads this month** while content/authority build,
- **learn which keywords convert** (then prioritize them in SEO),
- **retarget** visitors who didn't convert.
Organic + paid together also let you own more of the results page for your best terms.

### 9.2 Which platforms for Svasamm's products
| Platform | Best for | Notes |
|---|---|---|
| **Google Search Ads** | **Start here.** High-intent ("rice mill software", "hospital management software Kolkata") | You pay per click; captures people actively looking. Tight geo + keyword + negative keywords keeps it cheap. |
| **Google Performance Max / Local** | Local + Maps visibility | Pairs with GBP. |
| **Meta (Facebook/Instagram)** | Awareness + retargeting; SMB verticals (clinics, rice mills owners) | Cheaper clicks, lower intent; great for retargeting site visitors. |
| **LinkedIn** | B2B/enterprise (DMS, OEM manufacturers) | Precise B2B targeting but expensive CPCs — use for high-value DMS only. |

**Recommendation:** begin with **one** tightly-scoped **Google Search** campaign for your
**best-converting product (likely Millingo or Lucoze)**, geo-limited to your target
states, small daily budget, exact/phrase keywords, strong negative-keyword list, pointing
at a conversion-optimized product page with a working form + tracking. Measure **cost per
lead (CPA)**. Scale only what beats your target CPA.

### 9.3 The money math (learn this before spending)
- **CPC** (cost per click) × clicks = spend. Spend ÷ conversions = **CPA** (cost per
  acquisition). If a Millingo customer is worth ₹X over their lifetime (**LTV**), you can
  afford a CPA well below X. Target **LTV:CAC ≥ 3:1**.
- Start small (e.g. ₹300–500/day), get ~30–50 clicks/conversions of data, then decide.
  Kill what doesn't convert (the "3× rule": if a campaign spends 3× your target CPA with
  no conversion, pause it).

### 9.4 What the `claude-ads` plugin does (and doesn't)
It's a full paid-media toolkit available in this workspace. It **plans, audits, and
creates** — it does **not** spend money or need live account access to help you start
(most skills work from your inputs/exports). Most relevant pieces for you:

- **`/ads plan`** — strategic media plan (platform selection, campaign architecture,
  budget, phased roadmap) with industry templates. *Best first step.*
- **`/ads dna`** — extracts your brand identity (colors, tone) from the site → keeps ad
  creative on-brand. (`ads-dna` writes `brand-profile.json`.)
- **`/ads create`** — turns brand + goals into campaign concepts + ad **copy** briefs.
- **`/ads generate` / `/ads photoshoot`** — AI-generates ad images/product shots (needs
  the banana image MCP configured).
- **`/ads google`** (and `meta`, `linkedin`, etc.) — deep **audit** of an existing
  account (80+ checks for Google): wasted spend, structure, keywords, Quality Score,
  tracking. Use **after** you've run ads for a bit.
- **`/ads math`** — CPA/ROAS/break-even/LTV:CAC calculators from pasted data (no account
  needed). Great for planning budget.
- **`/ads landing`** — audits a landing page for conversion (message match, speed, forms,
  trust). Run this on the product pages before spending.
- **`/ads server-side-tracking` / `/ads attribution`** — get conversion tracking right so
  you actually know what works.
- **`/ads competitor`** — see competitors' live ads (Meta Ad Library, Google Ads
  Transparency) for copy/creative ideas.

**Sequence:** `/ads math` (can I afford it?) → `/ads plan` (what/where) → `/ads landing`
(is my page ready?) → `/ads dna` + `/ads create` (copy/creative) → launch in the ad
account → later `/ads google` audit to optimize. **You still need:** a Google Ads (etc.)
account, a payment method, and a budget — the plugin makes you efficient, not free.

---

## Part 10 — Prioritized roadmap

Effort/impact-sequenced. Each item names a **leading indicator** so you know it's working
without re-auditing.

### Phase 0 — Foundations (this week, mostly free)
1. **Deploy the SEO fixes** (PR #2) to Hostinger; run `nginx -t` + the crawl-trap/redirect
   curl checks on the host. → *Indicator: fake URL returns 404, `/sitemap.xml` is XML.*
2. **Verify Google Search Console + Bing Webmaster**, submit `sitemap.xml`, request
   indexing of key pages. → *Indicator: pages move to "Indexed" in GSC.*
3. **Set up GA4** + a conversion event on the contact form. → *Indicator: form fills show
   in GA4.*
4. **Create & fully complete the Google Business Profile.** → *Indicator: you appear for
   "software company Konnagar/Hooghly".*

### Phase 1 — Aim + fix (weeks 2–6)
5. **Keyword research** (GSC + tools) → a keyword→page map; rewrite titles/H1s to target
   real terms. → *Indicator: impressions rise for target queries in GSC.*
6. **Fill thin pages**: finish Service Desk / Loan copy (remove `noindex`, add to
   sitemap); deepen Millingo/DMS/Lucoze with FAQs + real screenshots.
7. **Local citations** (Justdial, Sulekha, IndiaMART, G2/Capterra/SoftwareSuggest) with
   consistent NAP. → *Indicator: referring domains climb.*
8. **First 4–6 content pieces** (start with Millingo long-tail — least competition). →
   *Indicator: first long-tail keywords enter positions 20→10.*
9. **Case studies** (needs your customer data) — replace unproven stats with real proof.

### Phase 2 — Compound + paid (months 2–4)
10. **Content engine**: 2–4 posts/month, topic clusters per product, comparison pages.
11. **Backlink outreach**: Frappe community, guest posts, digital PR.
12. **Launch Google Search Ads** (small, one product, geo-tight) — run `/ads plan` +
    `/ads landing` first. → *Indicator: CPA at/below target; SEO learns from converting
    keywords.*
13. **Reviews drive** on GBP + G2/Capterra. → *Indicator: review count + local pack rank.*

### Phase 3 — Scale (ongoing)
14. Expand local pages to UP/Bihar/Odisha **as real customers appear**; scale winning
    content + ads; monitor core updates; quarterly SEO/GEO re-audit (`/seo audit`).

---

## Part 11 — What I need from you to execute

- **GBP**: do you have/ want a Google Business Profile? (I can prepare everything; you
  verify ownership.)
- **Priority product** for the first SEO + ads push — my recommendation: **Millingo**
  (lowest competition, clear regional buyer) or **Lucoze** (live product, own site).
- **Ad budget** (even ₹10–15k/month is enough to start + learn) and which product first.
- **Real case-study data** (customer names/permission + real numbers) to replace the
  unproven "300% / 50+ / ISO 27001" claims.
- **Screenshots** of Millingo/DMS/Lucoze for the product pages (you offered these).
- Confirmation to wire **GSC/GA4/Bing** (I'll produce the verification files/tags).

---

### Appendix — tools we already have in this workspace
- **`/seo` suite** — audits, technical, content, schema, local, GEO, backlinks,
  clustering, content briefs, drift monitoring, PDF reports.
- **`claude-ads` suite** — planning, per-platform audits, brand DNA, copy, creative
  generation, PPC math, landing-page + tracking + attribution audits.
- We can drive most of the SEO content/keyword/local work directly; ads need your
  account + budget but we plan and build the campaigns here.
