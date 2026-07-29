// Svasamm Digital for Schools — content cluster (4 guides + 2 comparisons).
// Parent solution: lib/digital-schools.ts (id "digital-schools", /pages/digital-schools.html).
// Hand-authored; mirrors lib/digital-articles.ts (healthcare). Merged in lib/article-registry.ts.
//
// HARD GUARDRAILS — do not violate when editing this file:
//   - No prices, ever.
//   - No client success stories, testimonials, client logos or result metrics.
//   - No promises of admission numbers, enrolment or ranking outcomes.
//   - Never name or disparage a competitor agency — comparisons are approach-vs-approach.
//   - Svasamm is a provider TO schools, never a school itself.
import { SITE_URL } from "./site";
import type { Article, Faq } from "./types";

const PARENT_HREF = "/pages/digital-schools.html";
const PARENT_URL = `${SITE_URL}${PARENT_HREF}`;
const BYLINE = "By Mithun K. Singh, Founder, Svasamm Research · 29 July 2026";
const DATE = "2026-07-29";

const PARENT_RELATED = { title: "Svasamm Digital for Schools", href: PARENT_HREF };

function cta(title: string, body: string) {
  return { title, body, productHref: PARENT_HREF, productLabel: "Explore Svasamm Digital for Schools" };
}

// Shared jsonLd builder — Article + BreadcrumbList (Home → Svasamm Digital for Schools →
// this article) + FAQPage, matching the healthcare cluster.
function articleJsonLd(opts: { slug: string; headline: string; description: string; title: string; faqs: Faq[] }): object[] {
  const url = `${SITE_URL}/pages/${opts.slug}.html`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: opts.headline,
      description: opts.description,
      author: {
        "@type": "Person",
        name: "Mithun K. Singh",
        jobTitle: "Founder",
        worksFor: { "@type": "Organization", name: "Svasamm Research Pvt Ltd" },
      },
      publisher: { "@type": "Organization", name: "Svasamm" },
      datePublished: DATE,
      dateModified: DATE,
      mainEntityOfPage: url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Svasamm Digital for Schools", item: PARENT_URL },
        { "@type": "ListItem", position: 3, name: opts.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: opts.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
}

export const SCHOOLS_ARTICLES: Article[] = [
  // 1. The money guide — admissions-season digital marketing.
  {
    slug: "school-admissions-digital-marketing",
    type: "guide",
    parentProduct: "digital-schools",
    eyebrow: "School Marketing Guide",
    title: "School admissions digital marketing: what actually fills seats",
    byline: BYLINE,
    intro:
      "A school's marketing runs on a calendar. Admissions searches build for months before applications open, peak, and then go quiet — and a school that starts marketing the month it wants enrolments has already missed most of the demand. What fills seats is being present and convincing during the window when parents are actually deciding.",
    sections: [
      {
        type: "p",
        h: "The parent decides, and they decide early",
        text: "The person searching is a parent choosing for a child — usually anxious, doing it once every few years, and comparing two or three schools within reach. They start long before the form goes live: reading, asking other parents, looking at Google. By the time a school opens applications, most of the shortlisting has already happened. Marketing that only switches on at application time is competing for parents who have largely made up their minds.",
      },
      {
        type: "p",
        h: "Where enquiries actually start",
        text: "Three sources dominate: a local search (\"best school in [area]\", \"CBSE school near [locality]\", \"playschool in [neighbourhood]\"), a Google Business Profile the parent scans before anything else, and word of mouth — from other parents, which the first two also shape. A school that is hard to find locally, or whose profile looks thin next to a neighbour's, loses the enquiry before its actual quality is ever considered.",
      },
      {
        type: "list",
        h: "What a parent needs answered — fast, on a phone",
        items: [
          { b: "Which board and which classes —", t: "parents search by board (CBSE, ICSE, state) and by the class they need admission into. The site has to answer both in the first screen." },
          { b: "What is the school actually like —", t: "facilities, safety, transport, the day. Real photographs of the real place carry more weight than any adjective." },
          { b: "How does admission work —", t: "the process, the timeline, what documents are needed, and a clear, answered way to enquire — not a form that goes nowhere." },
          { b: "Is it reachable —", t: "location and transport routes decide the shortlist as much as anything, because a parent is choosing a daily journey for a child." },
        ],
      },
      {
        type: "p",
        h: "Reviews and reputation are the deciding signal",
        text: "For a parent choosing where a child spends their days, other parents' experiences outweigh anything the school says about itself. A steady flow of genuine reviews, and considered replies to them, is the strongest trust signal a school can build — and it also feeds local ranking. What a school cannot do is buy, incentivise or fabricate reviews; platform policies prohibit it and parents can tell the difference.",
      },
      {
        type: "p",
        h: "Why the calendar changes everything",
        text: "Because demand is seasonal, timing beats spend. The website, the Google Business Profile and the review habit want to be in place months before the admission season — so that when parents start searching, the school is already the complete, convincing option. A campaign launched the week applications open arrives after most parents have shortlisted. The work that pays off is the groundwork done early.",
      },
      {
        type: "p",
        h: "A realistic first step",
        text: "Before ad spend or a big rebuild, most schools gain the most from finishing the fundamentals ahead of the season: a complete, photographed Google Business Profile with the right categories, a website that answers a parent's questions in the first screen, consistent contact details everywhere, and a genuine review habit. Those carry more of the admissions outcome than a last-minute campaign usually does.",
      },
    ],
    faqs: [
      {
        q: "When should a school start its admissions marketing?",
        a: "Months before applications open. Parents research and shortlist well ahead of the season, so the website, Google Business Profile and reviews need to be in place early — a campaign started the week forms go live arrives after most parents have decided.",
      },
      {
        q: "How do parents usually find a school online?",
        a: "Most start with a local search by board and area (\"CBSE school near [locality]\", \"best playschool in [area]\"), then scan the Google Business Profile and reviews before the website. Word of mouth from other parents is the other major source.",
      },
      {
        q: "Can a school ask parents to leave reviews?",
        a: "You can invite genuine reviews, but you cannot incentivise, buy or fabricate them — platform policies prohibit it. Honest reviews and considered replies are the strongest trust signal a school can build.",
      },
      {
        q: "Does paid advertising fill seats on its own?",
        a: "Rarely by itself. Ads can bring a parent to the school during the season, but the website, profile and reviews are what convert that visit into an enquiry. Paid campaigns work best on top of the fundamentals, not instead of them.",
      },
    ],
    related: [
      { title: "School SEO in West Bengal: how parents actually find a school", href: "/pages/school-seo-west-bengal.html" },
      { title: "Google Business Profile for schools", href: "/pages/google-business-profile-for-schools.html" },
      { title: "School website design: what a school site actually needs", href: "/pages/school-website-design.html" },
      PARENT_RELATED,
    ],
    cta: cta(
      "See what this looks like for your school",
      "Tell us your board, the classes you run and your locality, and we'll walk through what's realistic to get in place before the season.",
    ),
    seo: {
      metaTitle: "School Admissions Digital Marketing: What Actually Fills Seats | Svasamm Digital",
      metaDescription:
        "How parents actually find and choose a school online — local search, Google Business Profile, reviews and timing around the admission season — and what to fix first.",
      canonical: `${SITE_URL}/pages/school-admissions-digital-marketing.html`,
      ogType: "article",
      ogTitle: "School admissions digital marketing: what actually fills seats",
      ogDescription: "Why timing, local search, reviews and a parent-facing site decide school admissions — and a realistic first step.",
    },
    jsonLd: articleJsonLd({
      slug: "school-admissions-digital-marketing",
      headline: "School Admissions Digital Marketing: What Actually Fills Seats",
      description: "How parents find and choose a school online, why the admission calendar matters, and what a school should fix first.",
      title: "School admissions digital marketing",
      faqs: [
        { q: "When should a school start its admissions marketing?", a: "Months before applications open. Parents research and shortlist ahead of the season, so the website, Google Business Profile and reviews need to be in place early." },
        { q: "How do parents usually find a school online?", a: "Most start with a local search by board and area, then scan the Google Business Profile and reviews before the website. Word of mouth is the other major source." },
      ],
    }),
  },

  // 2. Guide — local/map search behaviour for schools.
  {
    slug: "school-seo-west-bengal",
    type: "guide",
    parentProduct: "digital-schools",
    eyebrow: "School SEO Guide",
    title: "School SEO in West Bengal: how parents actually find a school",
    byline: BYLINE,
    intro:
      "Most school searches are local: a parent nearby, looking for a specific board or class, within a journey they're willing to make every day. Understanding how Google's local and map results actually work changes what's worth doing first — and rules out a lot of things schools spend money on that don't move the needle.",
    sections: [
      {
        type: "p",
        h: "How local and map results actually work",
        text: "When a parent searches \"CBSE school near me\" or \"playschool in Konnagar\", the map results that appear are driven heavily by how close the parent is to each school, then by how complete and relevant the profile is, then by review signals. Being a well-regarded school across the district counts for little in that calculation if a closer, correctly-listed school answers the same query. Distance and profile accuracy do most of the work.",
      },
      {
        type: "p",
        h: "What a school can actually influence",
        text: "You cannot control the exact position you appear in, and you cannot control when Google verifies a new listing — that timing is Google's. What you can influence is everything that feeds the ranking signals: a fully completed Google Business Profile (board, classes, facilities, hours, photos), on-page content that matches how parents actually phrase their search, reviews (asking for them, responding to them), and keeping your name, address and phone number identical everywhere they appear online.",
      },
      {
        type: "list",
        h: "Where a school should start",
        items: [
          { b: "Claim and verify Google Business Profile —", t: "if it isn't claimed, nothing else here matters." },
          { b: "State the board and classes plainly —", t: "parents search by board (CBSE / ICSE / state) and by the class they need — put both in the terms parents use, not only formal wording." },
          { b: "Make name, address and phone consistent —", t: "across your website, your profile and any directory listing you appear on." },
          { b: "Write a page for what parents ask —", t: "admissions, fees process, transport, facilities — each a real page, in the words parents actually type." },
          { b: "Ask happy parents for genuine reviews —", t: "never incentivised, and reply to them — reviews are a major local signal." },
        ],
      },
      {
        type: "p",
        h: "Bengali and English mixed search behaviour",
        text: "A large share of local school searches in West Bengal mix languages — \"Serampore e best school\", \"bhalo playschool near Nabagram\" — rather than sticking to formal English. A school's content is stronger when it includes the plain, colloquial phrasing parents actually type, alongside the correct formal terms, and when it names the specific localities parents search rather than only the town or district.",
      },
      {
        type: "p",
        h: "Why a school 6 km away usually isn't your real competitor",
        text: "Because local results are filtered by proximity, a school on the other side of the district is mostly invisible to the same searches you're trying to win, and vice versa. The genuine competition is the small number of schools within your own catchment offering the same board and classes — that's where profile completeness, review activity and content quality actually get compared, by the algorithm and by parents.",
      },
      {
        type: "p",
        h: "A realistic first step",
        text: "Most West Bengal schools we've looked at haven't finished the basics: an incomplete Google Business Profile, inconsistent address details across listings, or a website that lists classes but not the admission process or transport. Before spending on ads or a larger rebuild, it's usually worth finishing those fundamentals first — they carry more of the local-search outcome than most schools expect.",
      },
    ],
    faqs: [
      {
        q: "If we rank well in one town, does that help us in another?",
        a: "Not much. Local results are filtered by the parent's location, so a strong local presence in one town mostly benefits searches made near it. A school with more than one campus needs a properly configured presence for each.",
      },
      {
        q: "How long does school SEO take to show results?",
        a: "We don't put a date on when rankings or enquiries move — that depends on your area, your competition and how far behind the basics you're starting from. We report on the work done each period rather than predicting an outcome.",
      },
      {
        q: "Is Bengali-language content necessary on a school website?",
        a: "It depends on your catchment, but mixed-language search is common enough that ignoring it means missing genuine search volume. Formal English terms still matter for how Google matches intent — the two aren't a substitute for each other.",
      },
    ],
    related: [
      { title: "School admissions digital marketing: what actually fills seats", href: "/pages/school-admissions-digital-marketing.html" },
      { title: "Google Business Profile for schools", href: "/pages/google-business-profile-for-schools.html" },
      { title: "School website design: what a school site actually needs", href: "/pages/school-website-design.html" },
      PARENT_RELATED,
    ],
    cta: cta(
      "See how this applies to your school",
      "Bring your board, classes and locality and we'll walk through what's realistic to fix first.",
    ),
    seo: {
      metaTitle: "School SEO in West Bengal: How Parents Actually Find a School | Svasamm Digital",
      metaDescription:
        "How local and map search actually works for schools in West Bengal, what a school can influence, and a realistic first step for local SEO.",
      canonical: `${SITE_URL}/pages/school-seo-west-bengal.html`,
      ogType: "article",
      ogTitle: "School SEO in West Bengal: how parents actually find a school",
      ogDescription: "How local/map search works for schools, and what's realistic to fix first.",
    },
    jsonLd: articleJsonLd({
      slug: "school-seo-west-bengal",
      headline: "School SEO in West Bengal: How Parents Actually Find a School",
      description: "How local and map search works for schools, and what a school can realistically influence.",
      title: "School SEO in West Bengal",
      faqs: [
        { q: "If we rank well in one town, does that help us in another?", a: "Not much. Local results are filtered by the parent's location, so a strong local presence mostly benefits searches made near it. A school with more than one campus needs a presence for each." },
        { q: "How long does school SEO take to show results?", a: "We don't predict when rankings or enquiries move — that depends on your area and competition. We report on the work done each period rather than an outcome." },
      ],
    }),
  },

  // 3. Guide — what a school website actually needs.
  {
    slug: "school-website-design",
    type: "guide",
    parentProduct: "digital-schools",
    eyebrow: "School Web Guide",
    title: "School website design: what a school site actually needs",
    byline: BYLINE,
    intro:
      "A school site doesn't need to be elaborate to work. It needs to answer a small number of questions fast, on a phone, for a parent who is comparing options and often in a hurry. Here's what that actually requires — and why a generic template usually falls short.",
    sections: [
      {
        type: "p",
        h: "Who the site is really for",
        text: "The primary reader is a prospective parent during the admission window, on a phone, deciding whether to enquire. Existing parents and staff use the site too, but the design has to win the newcomer first: board and classes, what the school is like, how admission works, and how to reach out — before anything else competes for attention.",
      },
      {
        type: "list",
        h: "What the first screen must answer",
        items: [
          { b: "Which board and which classes —", t: "the two things a parent filters on before anything else." },
          { b: "Where the school is, and transport —", t: "a daily journey is part of the decision; make location and routes obvious." },
          { b: "How to enquire or apply —", t: "a clear admission enquiry, answered — above the fold, not buried in a contact page." },
          { b: "What the school is actually like —", t: "real photographs of classrooms, grounds and facilities do the persuading that copy can't." },
        ],
      },
      {
        type: "p",
        h: "Why a generic template falls short",
        text: "A general small-business template optimises for a storefront, not an admissions decision. It tends to bury the board and class information, treat the admission enquiry as an afterthought, and fill the homepage with stock imagery instead of the real school. A school site earns enquiries by making the specific decisions a parent is making easy — which is a content and structure problem more than a visual one.",
      },
      {
        type: "p",
        h: "Speed, phones and accessibility",
        text: "Most parents will first see the site on a phone, often on mobile data. A site that loads slowly or is hard to read on a small screen loses enquiries silently. Fast loading, legible type, tappable buttons and a working enquiry form matter more than animation or a large photo carousel that slows everything down.",
      },
      {
        type: "p",
        h: "Structured so search and AI can read it",
        text: "Behind the visible pages, structured data tells search engines and AI assistants what the school is, where it is, which board it follows and which classes it runs. That is increasingly how parents encounter a school — through an AI answer or a rich result — so a site that is machine-readable is easier to find, not just easier to read.",
      },
      {
        type: "p",
        h: "A realistic first step",
        text: "Before a large rebuild, it's usually worth making sure the current site answers the four first-screen questions on a phone, loads fast, and has a working, answered admission enquiry. Those fundamentals do more for enquiries than a visual redesign that leaves the same questions unanswered.",
      },
    ],
    faqs: [
      {
        q: "What matters most on a school's website?",
        a: "Answering a parent's key questions fast on a phone: which board and classes, where the school is and how to get there, how admission works, and what the school is actually like — with a clear, answered admission enquiry above the fold.",
      },
      {
        q: "Do we need a fancy, animated website?",
        a: "No. Speed, legibility on a phone, real photographs and a working enquiry form matter far more than animation. Heavy carousels and effects often slow the site and lose enquiries rather than winning them.",
      },
      {
        q: "How does website structure affect being found?",
        a: "Structured data lets search engines and AI assistants read what the school is, where it is, and which board and classes it runs — which is increasingly how parents encounter a school. A machine-readable site is easier to find, not just easier to read.",
      },
    ],
    related: [
      { title: "School admissions digital marketing: what actually fills seats", href: "/pages/school-admissions-digital-marketing.html" },
      { title: "School SEO in West Bengal: how parents actually find a school", href: "/pages/school-seo-west-bengal.html" },
      { title: "Google Business Profile for schools", href: "/pages/google-business-profile-for-schools.html" },
      PARENT_RELATED,
    ],
    cta: cta(
      "See what your school's site should answer first",
      "Tell us your board, classes and locality, and we'll walk through what a parent needs to see in the first screen.",
    ),
    seo: {
      metaTitle: "School Website Design: What a School Site Actually Needs | Svasamm Digital",
      metaDescription:
        "What a school website must answer for a prospective parent — board, classes, location, admissions — fast on a phone, and why a generic template falls short.",
      canonical: `${SITE_URL}/pages/school-website-design.html`,
      ogType: "article",
      ogTitle: "School website design: what a school site actually needs",
      ogDescription: "What a school site must answer for a parent on a phone, and why a generic template falls short.",
    },
    jsonLd: articleJsonLd({
      slug: "school-website-design",
      headline: "School Website Design: What a School Site Actually Needs",
      description: "What a school website must answer for a prospective parent, and why a generic template falls short.",
      title: "School website design",
      faqs: [
        { q: "What matters most on a school's website?", a: "Answering a parent's key questions fast on a phone: which board and classes, where the school is, how admission works, and what the school is like — with a clear, answered admission enquiry above the fold." },
        { q: "Do we need a fancy, animated website?", a: "No. Speed, legibility on a phone, real photographs and a working enquiry form matter far more than animation, which often slows the site and loses enquiries." },
      ],
    }),
  },

  // 4. Guide — Google Business Profile for schools.
  {
    slug: "google-business-profile-for-schools",
    type: "guide",
    parentProduct: "digital-schools",
    eyebrow: "Local Search Guide",
    title: "Google Business Profile for schools: the listing parents see first",
    byline: BYLINE,
    intro:
      "For most schools, the Google Business Profile — the panel of information, photos and reviews that appears in search and on the map — is seen by more prospective parents than the website is. It is often the first and sometimes the only impression. Getting it complete and correct is the highest-return local task a school can do.",
    sections: [
      {
        type: "p",
        h: "Why the profile matters more than schools expect",
        text: "When a parent searches for a school nearby, Google frequently answers with the profile itself — name, location, hours, photos, reviews and a call button — before the parent ever clicks through to a site. A complete, accurate, well-reviewed profile can win the enquiry on its own; a thin or wrong one loses it, regardless of how good the school actually is.",
      },
      {
        type: "list",
        h: "What a complete school profile includes",
        items: [
          { b: "The right primary category —", t: "chosen to match how the school is searched (school, pre-school, and so on), with relevant secondary categories added." },
          { b: "Accurate name, address, phone and hours —", t: "identical to the website and every other listing; inconsistency weakens the signal." },
          { b: "Real photographs —", t: "of the actual campus, classrooms and facilities — parents scan these before reading a word." },
          { b: "Board and class detail in the description —", t: "in the plain terms parents search, not only formal wording." },
          { b: "Reviews, and replies to them —", t: "a genuine review habit is one of the strongest local signals; replying shows the school is attentive." },
        ],
      },
      {
        type: "p",
        h: "Verification is Google's timeline, not yours",
        text: "A new or reclaimed profile has to be verified before it ranks, and that step is controlled by Google — it can take days or sometimes weeks, and it is the most common delay in getting a school visible. It's worth starting the profile early for exactly this reason, well ahead of the admission season.",
      },
      {
        type: "p",
        h: "One profile per campus",
        text: "A school with more than one campus needs a correctly configured profile for each location, because local results are filtered by where the parent is. One profile trying to cover two campuses serves neither catchment well. Each should have its own accurate address, photos and reviews.",
      },
      {
        type: "p",
        h: "What a school cannot do",
        text: "You cannot buy, incentivise or fabricate reviews — platform policies prohibit it, and parents can usually tell. Nor can you list an address you don't operate from to appear in a catchment you aren't in. The profile works precisely because it reflects the real school; the return comes from completing it honestly and keeping it current, not from gaming it.",
      },
    ],
    faqs: [
      {
        q: "Why is a Google Business Profile so important for a school?",
        a: "Because Google often answers a parent's local search with the profile itself — photos, reviews, hours and a call button — before they reach the website. A complete, well-reviewed profile can win the enquiry on its own; a thin one loses it.",
      },
      {
        q: "How long does profile verification take?",
        a: "It's controlled by Google and can take days or sometimes weeks. It's the most common delay in getting a school visible, which is why it's worth starting the profile early, ahead of the admission season.",
      },
      {
        q: "Can a school have one profile for multiple campuses?",
        a: "No — each campus needs its own correctly configured profile with its own address, photos and reviews, because local results are filtered by the parent's location. One profile can't serve two catchments well.",
      },
    ],
    related: [
      { title: "School SEO in West Bengal: how parents actually find a school", href: "/pages/school-seo-west-bengal.html" },
      { title: "School admissions digital marketing: what actually fills seats", href: "/pages/school-admissions-digital-marketing.html" },
      { title: "School website design: what a school site actually needs", href: "/pages/school-website-design.html" },
      PARENT_RELATED,
    ],
    cta: cta(
      "See what your school's profile is missing",
      "Tell us your school and locality, and we'll walk through what a complete, correctly-categorised profile should include.",
    ),
    seo: {
      metaTitle: "Google Business Profile for Schools: The Listing Parents See First | Svasamm Digital",
      metaDescription:
        "Why a school's Google Business Profile is seen by more parents than its website, what a complete profile includes, and why verification is Google's timeline.",
      canonical: `${SITE_URL}/pages/google-business-profile-for-schools.html`,
      ogType: "article",
      ogTitle: "Google Business Profile for schools: the listing parents see first",
      ogDescription: "Why the profile is often a parent's first impression of a school, and what a complete one includes.",
    },
    jsonLd: articleJsonLd({
      slug: "google-business-profile-for-schools",
      headline: "Google Business Profile for Schools: The Listing Parents See First",
      description: "Why a school's Google Business Profile matters more than expected, and what a complete profile includes.",
      title: "Google Business Profile for schools",
      faqs: [
        { q: "Why is a Google Business Profile so important for a school?", a: "Because Google often answers a parent's local search with the profile itself — photos, reviews, hours, a call button — before they reach the website. A complete, well-reviewed profile can win the enquiry on its own." },
        { q: "How long does profile verification take?", a: "It's controlled by Google and can take days or weeks — the most common delay in getting a school visible, which is why it's worth starting early, ahead of the season." },
      ],
    }),
  },

  // 5. Comparison — Svasamm Digital vs hiring in-house (approach vs approach).
  {
    slug: "digital-schools-vs-in-house",
    type: "compare",
    parentProduct: "digital-schools",
    eyebrow: "Honest Comparison",
    title: "Svasamm Digital vs hiring in-house for your school",
    byline: BYLINE,
    intro:
      "A school deciding how to run its digital presence usually weighs hiring someone in-house against engaging a specialist service. Neither is simply better — they fail and succeed in different ways. Here's an honest read of the trade-off, from a service that has a stake in it.",
    sections: [
      {
        type: "p",
        h: "Where in-house wins",
        text: "An in-house person is inside the school every day. They know the events, the teachers, the admission process and the local reputation first-hand, and they can turn a school function into a social post the same afternoon. For day-to-day presence and responsiveness, proximity is a genuine advantage a service cannot fully match.",
      },
      {
        type: "p",
        h: "Where in-house strains",
        text: "The strain is breadth and continuity. Local SEO, website structure, schema, Google Business Profile management, review systems and paid campaigns are several distinct skills, and one hire rarely holds all of them well. A single person is also a single point of failure — when they leave, the knowledge and the logins often leave with them, and the presence stalls through the season that matters most.",
      },
      {
        type: "p",
        h: "Where a specialist service fits",
        text: "A service brings the spread of skills as a standing capability rather than resting on one person, and it does the technical, less-visible work — the SEO, schema, profile and consistency — that an in-house generalist often can't. The trade-off is the reverse of in-house: less inside-the-building immediacy, more depth and continuity on the parts that decide local ranking.",
      },
      {
        type: "p",
        h: "The honest answer for most schools",
        text: "The two are not mutually exclusive, and the best arrangement is often a split: an in-house person or existing staff member for daily posts, events and the school's own voice, and a specialist for the technical foundation — website, local SEO, profile, schema and the seasonal campaign. Deciding who owns what upfront is what keeps the two from overlapping or leaving gaps.",
      },
    ],
    faqs: [
      {
        q: "Is it cheaper to hire someone in-house?",
        a: "It depends on what you need done. A single hire covers daily presence but rarely holds the full spread of technical skills — SEO, schema, profile, paid — so the real comparison is one generalist's time against a service's standing capability, not a like-for-like cost.",
      },
      {
        q: "Can we use both an in-house person and Svasamm Digital?",
        a: "Yes, and many schools should — in-house for daily posts and the school's voice, a specialist for the technical foundation and the seasonal campaign. Agree who owns what upfront so the two don't overlap or leave gaps.",
      },
      {
        q: "What's the biggest risk with an in-house-only approach?",
        a: "A single point of failure. When the one person leaves, the knowledge and logins often go with them, and the presence can stall through the admission season — which is exactly when it matters most.",
      },
    ],
    related: [
      { title: "Svasamm Digital vs a general digital agency", href: "/pages/digital-schools-vs-general-agency.html" },
      { title: "School admissions digital marketing: what actually fills seats", href: "/pages/school-admissions-digital-marketing.html" },
      PARENT_RELATED,
    ],
    cta: cta(
      "Work out the right split for your school",
      "Tell us what you already do in-house, and we'll be honest about which parts are worth handing to a specialist.",
    ),
    seo: {
      metaTitle: "Svasamm Digital vs Hiring In-House for Your School | Svasamm Digital",
      metaDescription:
        "An honest comparison of hiring in-house versus a specialist service for a school's digital presence — where each wins, where each strains, and the split that usually works.",
      canonical: `${SITE_URL}/pages/digital-schools-vs-in-house.html`,
      ogType: "article",
      ogTitle: "Svasamm Digital vs hiring in-house for your school",
      ogDescription: "Where in-house wins, where a specialist service fits, and the split that usually works.",
    },
    jsonLd: articleJsonLd({
      slug: "digital-schools-vs-in-house",
      headline: "Svasamm Digital vs Hiring In-House for Your School",
      description: "An honest comparison of in-house versus a specialist service for a school's digital presence.",
      title: "Svasamm Digital vs hiring in-house",
      faqs: [
        { q: "Is it cheaper to hire someone in-house?", a: "It depends what you need done. A single hire covers daily presence but rarely holds the full technical spread, so the real comparison is one generalist's time against a service's standing capability." },
        { q: "Can we use both an in-house person and Svasamm Digital?", a: "Yes — in-house for daily posts and voice, a specialist for the technical foundation and seasonal campaign. Agree who owns what upfront." },
      ],
    }),
  },

  // 6. Comparison — Svasamm Digital vs a general digital agency (approach vs approach).
  {
    slug: "digital-schools-vs-general-agency",
    type: "compare",
    parentProduct: "digital-schools",
    eyebrow: "Honest Comparison",
    title: "Svasamm Digital vs a general digital agency",
    byline: BYLINE,
    intro:
      "Plenty of capable general agencies could build a school a website and run its ads. The question isn't whether they can — it's where a healthcare-and-education-focused, catchment-exclusive approach differs from a generalist one. Here's an honest read.",
    sections: [
      {
        type: "p",
        h: "Where a general agency wins",
        text: "A large general agency has breadth — designers, ad specialists, video, and the capacity to turn work around at scale. If a school wants a big brand campaign or high-volume content across many channels, that breadth and bench strength are real advantages a small specialist doesn't match.",
      },
      {
        type: "p",
        h: "Where a focused approach differs",
        text: "A generalist works across every industry, so the school-specific assets — how parents search by board and locality, admission-season timing, the review dynamics of choosing a school, local search in West Bengal — are things they assemble per client rather than carry as standing knowledge. A focused service treats those as the default, which shows most in the less-visible technical work that decides local ranking.",
      },
      {
        type: "p",
        h: "The catchment question",
        text: "The sharpest difference is exclusivity. A general agency may, entirely legitimately, work with two competing schools in the same area — there is usually nothing stopping it. A catchment-exclusive service will not: one school per catchment, written into the agreement. For a school, that means the effort is working only for you locally, not quietly for a rival down the road as well.",
      },
      {
        type: "p",
        h: "The honest answer",
        text: "For a large multi-channel brand push, a general agency's scale can be the right call. For a school whose growth is won on local search, admission-season timing and being the clear local choice, a focused, catchment-exclusive approach is usually the better fit — and the two can coexist if a school agrees who owns what. It's a question of what the school actually needs, not of one being universally better.",
      },
    ],
    faqs: [
      {
        q: "Isn't a specialist narrower than a general agency?",
        a: "Yes, deliberately — narrower scope in exchange for depth in the way schools are actually found locally, and exclusivity in your catchment. For a broad multi-channel brand campaign, a general agency's scale may fit better.",
      },
      {
        q: "Could a general agency work with our competitor too?",
        a: "Usually there's nothing stopping them, and many do. A catchment-exclusive service will not — one school per catchment, written into the agreement — so the work is only ever for you locally.",
      },
      {
        q: "Can we use a general agency for some things and Svasamm Digital for others?",
        a: "Some schools do — just agree who owns what upfront so responsibilities don't overlap.",
      },
    ],
    related: [
      { title: "Svasamm Digital vs hiring in-house", href: "/pages/digital-schools-vs-in-house.html" },
      { title: "School SEO in West Bengal: how parents actually find a school", href: "/pages/school-seo-west-bengal.html" },
      PARENT_RELATED,
    ],
    cta: cta(
      "See whether a focused approach fits your school",
      "Tell us your board, catchment and what you're trying to grow, and we'll be honest about whether this is the right fit.",
    ),
    seo: {
      metaTitle: "Svasamm Digital vs a General Digital Agency for Schools | Svasamm Digital",
      metaDescription:
        "An honest comparison of a general digital agency versus a school-focused, catchment-exclusive service — where each wins, and the exclusivity question.",
      canonical: `${SITE_URL}/pages/digital-schools-vs-general-agency.html`,
      ogType: "article",
      ogTitle: "Svasamm Digital vs a general digital agency",
      ogDescription: "Where a generalist agency wins, where a school focus differs, and the catchment-exclusivity question.",
    },
    jsonLd: articleJsonLd({
      slug: "digital-schools-vs-general-agency",
      headline: "Svasamm Digital vs a General Digital Agency for Schools",
      description: "An honest comparison of a general digital agency versus a school-focused, catchment-exclusive service.",
      title: "Svasamm Digital vs a general digital agency",
      faqs: [
        { q: "Isn't a specialist narrower than a general agency?", a: "Yes, deliberately — narrower scope in exchange for depth in how schools are found locally, and exclusivity in your catchment. For a broad multi-channel campaign, a general agency's scale may fit better." },
        { q: "Could a general agency work with our competitor too?", a: "Usually nothing stops them, and many do. A catchment-exclusive service will not — one school per catchment, written into the agreement." },
      ],
    }),
  },
];

export const SCHOOLS_ARTICLE_BY_SLUG: Record<string, Article> =
  Object.fromEntries(SCHOOLS_ARTICLES.map((a) => [a.slug + ".html", a]));
