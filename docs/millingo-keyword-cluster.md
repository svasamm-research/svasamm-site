# Millingo — Keyword Research & Content Cluster

> Keyword strategy + a hub-and-spoke content plan for **Millingo (rice-mill ERP)**,
> hosted on **svasamm.com** for now (migrate to millingo.com if/when it launches — write
> the content portable, with absolute internal links under `/pages/`).
>
> **Why Millingo first:** the niche is *fragmented* (many small vendors, no Zoho/SAP
> dominance) and the highest-value informational queries are contested only by machinery
> blogs, news sites, and government PDFs — **not** software companies. A rice-mill ERP
> that publishes the best guides on yield, CMR, and state procurement can rank *and*
> capture buyers. This is Svasamm's best organic opportunity.

## How this was researched
Real Google SERPs (July 2026) for the seed terms below, reading who ranks, the result
*format* (guide vs product vs govt PDF), related terms, and buyer language. **Volume &
difficulty are estimates** (no paid tool yet) — validate with Google Search Console once
traffic starts and Keyword Planner (free with a Google Ads account). Difficulty is my
read of *how beatable page 1 is for a focused rice-mill software site*, not an absolute.

Observed competitors: Dataman/AAHAAR, Samadhan, Gofrugal, Zyplesoft (SAP B1), Modernwebz,
Busy, Preeminentsoft, Punjabbulls, Keshav/AnnadataPro, Orrbit, Codeshilp (weighbridge),
FruxSoft. Aggregator/review site: **Techjockey** (India's G2 — get Millingo listed).

---

## 1. Keyword universe (grouped by intent)

Intent legend: **T** transactional (ready to buy) · **C** commercial (comparing) ·
**I** informational (learning) · **L** local. Priority: ⭐⭐⭐ do first.

### Commercial / transactional (money terms → product & comparison pages)
| Keyword | Intent | Est. difficulty | Priority | Target page |
|---|---|---|---|---|
| rice mill software | C/T | Med (fragmented) | ⭐⭐⭐ | pillar: `millingo.html` |
| rice mill ERP / rice mill ERP software | C/T | Med | ⭐⭐⭐ | pillar |
| rice mill management software | C/T | Med | ⭐⭐ | pillar |
| rice mill software price / cost | T | Low–Med | ⭐⭐⭐ | spoke: pricing/cost guide |
| best rice mill software / ERP (india) | C | Med | ⭐⭐ | spoke: buyer's guide (listicle) |
| paddy procurement software | C | Low | ⭐⭐ | pillar / CMR spoke |
| rice mill accounting / billing software | C | Med | ⭐ | pillar (feature section) |
| rice mill software with weighbridge | C | Low | ⭐⭐ | spoke: weighbridge |
| Millingo vs [Dataman/Samadhan/Gofrugal] | C | Low (brand) | ⭐ | spoke: comparison pages |

### Informational (guides/blog → the moat; links to pillar)
| Keyword / question | Intent | Est. difficulty | Priority | Target page |
|---|---|---|---|---|
| how to calculate rice mill yield / milling recovery | I | Low (only machinery blogs rank) | ⭐⭐⭐ | spoke: yield guide |
| paddy to rice conversion ratio / recovery percentage | I | Low | ⭐⭐⭐ | spoke: yield guide |
| custom milled rice (CMR) process / what is CMR | I | Low (news/govt only) | ⭐⭐⭐ | spoke: CMR guide |
| CMR delivery schedule / obligation / FRK requirement | I | Low | ⭐⭐ | spoke: CMR guide |
| rice mill by-product accounting (bran, husk, broken) | I | Low | ⭐⭐ | spoke: by-product guide |
| rice mill GST / e-invoicing compliance | I | Med | ⭐ | spoke: compliance checklist |
| butta / moisture deduction in paddy purchase | I | Very low | ⭐⭐ | spoke: QC/butta guide |
| Kharif Marketing Season (KMS) paddy procurement | I | Low | ⭐ | spoke: CMR/regional |

### Local / regional (state pages — genuine, unique content only)
| Keyword | Intent | Priority | Target page |
|---|---|---|---|
| rice mill software West Bengal / e-Paddy / BENFED / WBECSC | L/C | ⭐⭐⭐ | spoke: WB procurement + local LP |
| rice mill software Uttar Pradesh / e-Kray | L/C | ⭐⭐ | spoke: UP procurement + local LP |
| rice mill software Odisha (OSCSC) / Bihar / Jharkhand | L/C | ⭐ | spoke (as customers appear) |

**Regional facts to use (verified from govt/news sources):** WB procurement runs through
**epaddy.wb.gov.in**, agencies **WBECSC / BENFED**; UP uses the **e-Kray** portal;
Odisha via **OSCSC**. CMR obligation (KMS 2024-25): miller delivers **67% rice + 1% FRK**
against allotted paddy, on a staged schedule (≈15% by Nov, 25% Dec, 25% Jan, 25% Feb,
10% by 15 Mar). These specifics are exactly what generic ERPs *don't* cover — lead with
them.

---

## 2. Cluster architecture (hub & spoke)

```
                         ┌─────────────────────────────┐
                         │  PILLAR (commercial hub)     │
                         │  /pages/millingo.html        │
                         │  "Rice Mill ERP Software"     │
                         └──────────────┬──────────────┘
        ┌───────────────┬──────────────┼───────────────┬────────────────┐
        ▼               ▼              ▼               ▼                ▼
  INFORMATIONAL    INFORMATIONAL   INFORMATIONAL   COMMERCIAL        LOCAL
  yield/recovery    CMR process    by-product      pricing guide    WB e-Paddy
  guide             + FRK/schedule  accounting     + buyer's guide  UP e-Kray
        │               │              │               │                │
        └───────────────┴─────► all spokes link UP to the pillar ◄──────┘
                          pillar links DOWN to every spoke
```

- **Pillar** = `/pages/millingo.html` (already exists) — expand it into the definitive
  "rice mill ERP" page: what it is, every module, screenshots (when you send them), FAQs,
  and links to each spoke. Targets the head commercial terms.
- **Spokes** = new pages under `/pages/` (blog/guide). Each targets a long-tail cluster,
  answers the query fully, and links back to the pillar with descriptive anchor text
  (e.g. "…handled automatically in [Millingo's rice-mill ERP]").
- **Rule:** every spoke links to the pillar; the pillar links to every spoke; related
  spokes cross-link (yield ↔ by-product; CMR ↔ WB e-Paddy). This is what signals topical
  authority.

### Suggested URLs (portable to millingo.com later)
- `/pages/millingo.html` — pillar (exists)
- `/pages/rice-mill-yield-recovery.html` — yield/recovery guide ⭐⭐⭐
- `/pages/custom-milled-rice-cmr-process.html` — CMR guide ⭐⭐⭐
- `/pages/rice-mill-byproduct-accounting.html` — bran/husk/broken ⭐⭐
- `/pages/rice-mill-software-price.html` — pricing/cost + buyer's guide ⭐⭐⭐
- `/pages/rice-mill-software-west-bengal.html` — WB e-Paddy local LP ⭐⭐⭐
- (later) UP e-Kray, comparison pages, GST/compliance, weighbridge, butta/moisture

---

## 3. Keyword → page map (no cannibalization)
One primary page per keyword cluster so pages don't compete with each other:

| Primary keyword cluster | The ONE page that targets it |
|---|---|
| rice mill software / ERP / management software | `millingo.html` (pillar) |
| rice mill software price / cost / best / buyer's guide | `rice-mill-software-price.html` |
| yield, recovery, paddy-to-rice conversion | `rice-mill-yield-recovery.html` |
| CMR, custom milled rice, FRK, delivery schedule, KMS | `custom-milled-rice-cmr-process.html` |
| by-product / bran / husk / broken accounting | `rice-mill-byproduct-accounting.html` |
| West Bengal / e-Paddy / BENFED / WBECSC | `rice-mill-software-west-bengal.html` |

---

## 4. First 4 content briefs (build these first, highest ROI)

Each is ready to hand to a writer (or me). Use the shared `head.html` partial + a
page-specific JSON-LD block. Add a real author byline ("By Mithun K. Singh, founder,
Svasamm Research") + `Article`/`author` schema for E-E-A-T. End every guide with a soft
CTA to Millingo + a "Get a demo" link.

### Brief A — "How to Calculate Rice Mill Yield & Milling Recovery" ⭐⭐⭐
- **Primary kw:** how to calculate rice mill yield / milling recovery; **secondary:**
  paddy to rice conversion ratio, head rice recovery, milling yield percentage.
- **Intent:** informational. **Why:** only machinery blogs/IRRI rank — a focused,
  India-context guide with a calculator can win, and every reader is a rice miller.
- **Title:** `Rice Mill Yield & Milling Recovery: How to Calculate It (Formula + Examples)`
- **Meta:** Learn how to calculate rice milling recovery and paddy-to-rice conversion,
  what a good yield is (67–72%), and how to track it per batch.
- **H1:** How to Calculate Rice Mill Yield and Milling Recovery
- **Outline (H2s):** What "recovery" means (total vs head rice) · The formulas (total
  recovery = white rice ÷ paddy × 100; head rice recovery) · Worked example (1000 kg
  paddy → 680 kg rice = 68%) · What's a good recovery (67–72% total, 60–66% head;
  moisture/fissuring effects) · Why by-products (bran/husk/broken) matter to true yield ·
  How to track recovery per batch automatically (→ Millingo) · FAQ.
- **Length:** 1,200–1,600 words. **Internal links:** pillar (millingo.html), by-product
  guide. **Schema:** Article + FAQPage (for AI citation). **Asset:** a simple
  recovery formula graphic / mini calculator.

### Brief B — "Custom Milled Rice (CMR): The Complete Process for Millers" ⭐⭐⭐
- **Primary kw:** custom milled rice / CMR process; **secondary:** what is CMR, FRK
  requirement, CMR delivery schedule, levy paddy, KMS procurement.
- **Intent:** informational; competitors are news/govt PDFs (beatable, and none capture
  the buyer). This is Millingo's authority anchor.
- **Title:** `Custom Milled Rice (CMR) Explained: Process, 67% Obligation & FRK for Millers`
- **Outline:** What CMR is (govt gives MSP paddy to millers to mill) · The miller's
  obligation (67% rice + 1% FRK against allotted paddy) · Delivery schedule (staged
  deadlines) · Security deposit & reconciliation (the 7.1 out-turn) · How it differs by
  state (WB e-Paddy/BENFED vs UP e-Kray vs Odisha OSCSC) · Common pain points (tracking
  allotment vs delivery, bata/transit, reconciliation) · How software tracks CMR end to
  end (→ Millingo) · FAQ.
- **Length:** 1,500–2,000 words. **Links:** pillar, WB page, yield guide. **Schema:**
  Article + FAQPage. **Note:** cite official sources (fci.gov.in, epaddy.wb.gov.in) —
  real citations = E-E-A-T. Keep facts current (schedules change each KMS year).

### Brief C — "Rice Mill Software for West Bengal (e-Paddy, BENFED & CMR)" ⭐⭐⭐ (local)
- **Primary kw:** rice mill software West Bengal; **secondary:** e-Paddy WB, BENFED/WBECSC
  CMR, WB rice mill ERP.
- **Intent:** local + commercial — your home turf; genuine local depth Google rewards.
- **Title:** `Rice Mill Software in West Bengal — Built for e-Paddy & CMR (Millingo)`
- **Outline:** WB rice-milling context · How WB procurement works (epaddy.wb.gov.in,
  WBECSC/BENFED, KMS) · What WB millers need from software (Bengali support, WB CMR rules,
  local QC/butta norms) · Millingo for WB (features mapped to WB workflow) · Local proof
  (WB customers/case study when available) · Contact/demo CTA.
- **Length:** 900–1,300 words **unique** (do NOT template-spin for other states — write UP
  separately with e-Kray specifics). **Schema:** Service + FAQPage. **This is the model
  for one genuine page per state — never thin doorway clones.**

### Brief D — "Rice Mill By-Product Accounting: Bran, Husk & Broken Rice" ⭐⭐
- **Primary kw:** rice mill by-product accounting; **secondary:** bran/husk/broken rice
  tracking, by-product profitability, rice mill cost per bag.
- **Outline:** Why by-products decide mill profitability · The main by-products & typical
  proportions · How to value & account for them (separate inventory + sales) · Cost
  allocation (paddy + power/labour/transport → cost per ton/bag) · Automating it (→
  Millingo) · FAQ.
- **Length:** 1,000–1,400 words. **Links:** yield guide, pillar. **Schema:** Article + FAQ.

---

## 5. Priority & sequencing
1. **Deepen the pillar** (`millingo.html`) — FAQs + screenshots + link stubs to spokes.
2. **Brief A (yield)** and **Brief B (CMR)** — the two authority anchors (lowest
   competition, highest relevance).
3. **Brief C (West Bengal)** — home-turf local win; template for future state pages.
4. **Brief D (by-product)** + **pricing/buyer's guide** — capture commercial intent.
5. Then: UP e-Kray page, comparison pages (pick 2–3 competitors), GST/compliance,
   weighbridge, butta/moisture.
- In parallel (off-site): **list Millingo on Techjockey** (+ GoodFirms/SoftwareSuggest)
  and start a Google Business Profile — these compound with the content.

## 6. Success signals (watch in GSC, no re-audit needed)
- Guide pages get *impressions* for their target long-tail within 4–8 weeks of indexing.
- "rice mill software / ERP" impressions for the pillar climb as spokes link to it.
- First page-2 → page-1 movement on a low-competition term (yield or CMR) = the model
  works; then replicate.

## 7. Open inputs from you
- **Competitors** to build "Millingo vs X" pages (I saw Dataman/AAHAAR, Samadhan,
  Gofrugal, Modernwebz — which do you actually lose deals to?).
- **Real WB customer** (name/permission) for the West Bengal page's local proof.
- **Screenshots** for the pillar + guides.
- Confirm we build these as `/pages/*.html` on svasamm.com now (portable to millingo.com
  later).
