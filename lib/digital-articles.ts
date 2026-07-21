// Svasamm Digital for Healthcare — content cluster (4 guides + 2 comparisons).
// Parent solution: lib/digital.ts (id "digital-healthcare", /pages/digital-healthcare.html).
// Mirrors the shape/tone of lib/articles.ts (AUTO-GENERATED, do not edit) but is hand-written
// and lives in its own file so it isn't touched by the article extractor.
//
// HARD GUARDRAILS — this service has no clients yet and the topic is medical-advertising
// sensitive. Do not violate when editing this file:
//   - No prices, ever.
//   - No client success stories, testimonials, client logos, or result metrics.
//   - No promises of patient volume, revenue, rankings or clinical outcomes.
//   - Never name or disparage a competitor agency — comparisons are approach-vs-approach.
//   - Svasamm is a provider TO healthcare, never a provider of care.
import { SITE_URL } from "./site";
import type { Article, Faq } from "./types";

const PARENT_HREF = "/pages/digital-healthcare.html";
const PARENT_URL = `${SITE_URL}${PARENT_HREF}`;
const BYLINE = "By Mithun K. Singh, Founder, Svasamm Research · 20 July 2026";
const DATE = "2026-07-20";

const PARENT_RELATED = { title: "Svasamm Digital for Healthcare", href: PARENT_HREF };

function cta(title: string, body: string) {
  return { title, body, productHref: PARENT_HREF, productLabel: "Explore Svasamm Digital for Healthcare" };
}

// Shared jsonLd builder — Article + BreadcrumbList (Home → Svasamm Digital for Healthcare →
// this article) + FAQPage, matching the generated pattern in lib/articles.ts.
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
        { "@type": "ListItem", position: 2, name: "Svasamm Digital for Healthcare", item: PARENT_URL },
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

export const DIGITAL_ARTICLES: Article[] = [
  // 1. Guide — local/map search behaviour and what a clinic can influence.
  {
    slug: "clinic-seo-west-bengal",
    type: "guide",
    parentProduct: "digital-healthcare",
    eyebrow: "Healthcare SEO Guide",
    title: "Clinic SEO in West Bengal: how patients actually find a clinic",
    byline: BYLINE,
    intro:
      "Most clinic searches are local: someone nearby, right now, looking for a specific specialty. Understanding how Google's local and map results actually work changes what's worth doing first — and rules out a lot of things clinics spend money on that don't move the needle.",
    sections: [
      {
        type: "p",
        h: "How local and map results actually work",
        text: "When someone searches \"dermatologist near me\" or \"ENT specialist Konnagar\", the map pack that appears is driven heavily by how close the searcher is to each listed clinic, then by how complete and relevant the profile is, then by review signals. Being the most respected clinic in the district counts for very little in that calculation if a closer, correctly-listed competitor answers the same query. Distance and profile accuracy do most of the work.",
      },
      {
        type: "p",
        h: "What a clinic can actually influence",
        text: "You cannot control the exact position you appear in, and you cannot control when Google verifies a new listing — that timing is Google's, not yours. What you can influence is everything that feeds the ranking signals: a fully completed Google Business Profile (services, categories, hours, photos), on-page content on your own site that matches how patients actually phrase their search, reviews (asking for them, responding to them), and keeping your name, address and phone number identical everywhere they appear online.",
      },
      {
        type: "list",
        h: "Where a clinic should start",
        items: [
          { b: "Claim and verify Google Business Profile —", t: "if it isn't claimed, nothing else here matters." },
          { b: "Fill in every service and category —", t: "not just the primary one; patients search by specific complaint, not by clinic type." },
          { b: "Get hours right, including exceptions —", t: "a wrong \"closed\" reading is a lost visit before it starts." },
          { b: "Make your name, address and phone consistent —", t: "across your website, your profile and any other directory listing you appear on." },
          { b: "Write a page per major service or department —", t: "in the terms patients actually search, not just clinical terminology." },
          { b: "Ask patients who are happy with their visit to leave a review —", t: "genuinely, not incentivised — see our advertising-rules guide for what's off-limits here." },
        ],
      },
      {
        type: "p",
        h: "Bengali and English mixed search behaviour",
        text: "A large share of local health searches in West Bengal mix languages — \"Nabagram e dentist\", \"best gynae doctor near Serampore\" — rather than sticking to formal clinical English. A clinic's content is stronger when it includes the plain, colloquial phrasing patients actually type, alongside the correct clinical terms, and when it names the specific localities patients search rather than only the town or district.",
      },
      {
        type: "p",
        h: "Why a clinic 6 km away usually isn't your real competitor",
        text: "Because local results are filtered by proximity, a clinic on the other side of the district is mostly invisible to the same searches you're trying to win, and vice versa. The genuine competition is the small number of facilities within your own catchment offering the same specialty — that's where the profile completeness, review activity and content quality actually get compared, directly or indirectly, by the algorithm and by patients.",
      },
      {
        type: "p",
        h: "A realistic first step",
        text: "Most West Bengal clinics we've looked at haven't finished the basics: an incomplete Google Business Profile, inconsistent address details across listings, or a services page that lists departments but not what each one actually treats. Before spending on ads or a larger site rebuild, it's usually worth finishing those fundamentals first — they carry more of the local-search outcome than most clinics expect.",
      },
    ],
    faqs: [
      {
        q: "If we rank well in one town, does that help us in another?",
        a: "Not much. Local results are filtered by the searcher's location, so a strong local presence in one town mostly benefits searches made near that town. A facility with more than one location needs a properly configured presence for each.",
      },
      {
        q: "How long does clinic SEO take to show results?",
        a: "We don't put a date on when rankings or enquiries move — that depends on your market, your competitors and how far behind the basics you're starting from. What we can be specific about is the sequence: profile and consistency work in the first weeks, on-page content over the following month, reviews building over time. We report on what work was done each period rather than predicting an outcome.",
      },
      {
        q: "Is Bengali-language content necessary on a clinic website?",
        a: "It depends on your catchment, but mixed-language search behaviour is common enough that ignoring it means missing genuine search volume. English clinical terms still matter for accuracy and for how Google matches intent — the two aren't a substitute for each other.",
      },
    ],
    related: [
      { title: "Google Business Profile for clinics and nursing homes", href: "/pages/google-business-profile-for-clinics.html" },
      { title: "Hospital and clinic website design: what a facility site actually needs", href: "/pages/hospital-website-design.html" },
      PARENT_RELATED,
    ],
    cta: cta(
      "See how this applies to your facility",
      "Bring your catchment and specialty and we'll walk through what's realistic to fix first.",
    ),
    seo: {
      metaTitle: "Clinic SEO in West Bengal: How Patients Actually Find a Clinic | Svasamm Digital",
      metaDescription:
        "How local and map search actually works for clinics in West Bengal, what a facility can influence, and a realistic first step for local SEO.",
      canonical: `${SITE_URL}/pages/clinic-seo-west-bengal.html`,
      ogType: "article",
      ogTitle: "Clinic SEO in West Bengal: how patients actually find a clinic",
      ogDescription: "How local/map search actually works for clinics, and what's realistic to fix first.",
    },
    jsonLd: articleJsonLd({
      slug: "clinic-seo-west-bengal",
      headline: "Clinic SEO in West Bengal: How Patients Actually Find a Clinic",
      description: "How local and map search works for clinics, and what a facility can realistically influence.",
      title: "Clinic SEO in West Bengal",
      faqs: [
        { q: "If we rank well in one town, does that help us in another?", a: "Not much. Local results are filtered by the searcher's location, so a strong local presence in one town mostly benefits searches made near that town." },
        { q: "How long does clinic SEO take to show results?", a: "We don't predict when rankings or enquiries move — that depends on your market and competitors. We report on the work done each period rather than an outcome." },
      ],
    }),
  },

  // 2. Guide — what a facility website actually needs.
  {
    slug: "hospital-website-design",
    type: "guide",
    parentProduct: "digital-healthcare",
    eyebrow: "Healthcare Web Guide",
    title: "Hospital and clinic website design: what a facility site actually needs",
    byline: BYLINE,
    intro:
      "A facility site doesn't need to be elaborate to work. It needs to answer a small number of questions fast, on a phone, for someone who is often anxious or in a hurry. Here's what that actually requires — and why a generic small-business template usually falls short.",
    sections: [
      {
        type: "p",
        h: "The pages a facility genuinely needs",
        text: "Services and departments, doctors with their qualifications and consulting timings, hours (including any emergency or 24-hour provision), directions that work from a map app, a clear way to book or enquire, and emergency contact information that's visible without hunting for it. For most clinics and small hospitals, that's the whole list — everything beyond it is optional, not foundational.",
      },
      {
        type: "p",
        h: "What patients look for in the first ten seconds",
        text: "Is my problem treated here, is the facility open now, how do I get there or reach someone, and roughly what does a visit involve. If those answers aren't visible without scrolling or hunting through menus, a meaningful share of visitors leave before finding them — regardless of how the rest of the site looks.",
      },
      {
        type: "p",
        h: "Mobile reality",
        text: "Most clinic searches happen on a phone — often on the way to or from work, or from a waiting room while looking up a different facility's timings. The phone number needs to be tap-to-call, the address needs to be tap-for-directions, and the hours need to be readable without pinching to zoom. A site that only really works on a desktop screen is failing most of the people who visit it.",
      },
      {
        type: "p",
        h: "Why generic templates fail a facility",
        text: "Standard small-business templates are built around \"Services / About / Contact\" — a structure that doesn't model departments, doctor rosters or timings properly, and often buries the one piece of information (an emergency number, or today's hours) that matters most in a health context. A facility site needs a structure built for what it actually is, not a repurposed template for a generic local business.",
      },
      {
        type: "p",
        h: "Keeping it maintainable by staff",
        text: "Doctor rosters change, timings shift, holidays close a department for a day. A facility site should let someone on staff update those specific things without needing a developer for every small change — or the facility should have someone maintaining it as part of an ongoing arrangement. A beautiful site that goes stale within a month because updates require a developer is a maintenance problem, not a design win.",
      },
    ],
    faqs: [
      {
        q: "Do we need a blog on the facility website?",
        a: "Not as a starting point. The core pages — services, doctors, timings, directions, booking, emergency contact — matter far more early on than a content library. A blog can be worth adding later once the basics are solid.",
      },
      {
        q: "Should we list doctors' qualifications on the site?",
        a: "Yes — factual credentials (degree, registration, years in practice) are exactly the kind of information patients look for and are the safest category of claim to publish. See our guide on healthcare advertising rules for what to be careful with beyond that.",
      },
      {
        q: "What if our facility only has one doctor?",
        a: "The same list scales down: services, that doctor's qualifications and timings, hours, directions, how to book, and emergency contact. A single-doctor clinic needs the same fundamentals, just fewer pages to hold them.",
      },
    ],
    related: [
      { title: "Clinic SEO in West Bengal: how patients actually find a clinic", href: "/pages/clinic-seo-west-bengal.html" },
      { title: "Google Business Profile for clinics and nursing homes", href: "/pages/google-business-profile-for-clinics.html" },
      PARENT_RELATED,
    ],
    cta: cta(
      "See what a facility-appropriate site looks like",
      "Tell us about your departments and doctors and we'll show you how the structure would work for your facility.",
    ),
    seo: {
      metaTitle: "Hospital & Clinic Website Design: What a Facility Site Needs | Svasamm Digital",
      metaDescription:
        "What a hospital or clinic website actually needs: the pages that matter, mobile reality, and why generic templates fall short for a facility.",
      canonical: `${SITE_URL}/pages/hospital-website-design.html`,
      ogType: "article",
      ogTitle: "Hospital and clinic website design: what a facility site actually needs",
      ogDescription: "The pages a facility genuinely needs, and why generic templates fall short.",
    },
    jsonLd: articleJsonLd({
      slug: "hospital-website-design",
      headline: "Hospital and Clinic Website Design: What a Facility Site Actually Needs",
      description: "What a facility website needs: core pages, mobile reality, and why generic templates fall short.",
      title: "Hospital and clinic website design",
      faqs: [
        { q: "Do we need a blog on the facility website?", a: "Not as a starting point — the core pages (services, doctors, timings, directions, booking, emergency contact) matter far more early on." },
        { q: "Should we list doctors' qualifications on the site?", a: "Yes — factual credentials are exactly what patients look for and the safest category of claim to publish." },
      ],
    }),
  },

  // 3. Guide — Google Business Profile mechanics for clinics/nursing homes.
  {
    slug: "google-business-profile-for-clinics",
    type: "guide",
    parentProduct: "digital-healthcare",
    eyebrow: "Local Presence Guide",
    title: "Google Business Profile for clinics and nursing homes",
    byline: BYLINE,
    intro:
      "For most patients, your Google Business Profile is the first thing they see about your facility — before your website, sometimes before they even know your name. Getting the mechanics right matters more than most clinics assume.",
    sections: [
      {
        type: "p",
        h: "Claiming and verifying",
        text: "Claiming a profile is straightforward; verification is the step worth setting expectations on. Google chooses the verification method (postcard, phone, video, or another option depending on the listing) and controls the timing — it can take anywhere from a few days to a few weeks, and there is nothing a facility or an agency can do to speed that up beyond providing accurate, complete information the first time.",
      },
      {
        type: "p",
        h: "Choosing the right categories",
        text: "The primary category should be the most specific and accurate option Google offers for what you are — \"General practitioner\", \"Dental clinic\", \"Nursing home\", rather than a broad catch-all. This is one of the most common mistakes we see, and one of the easiest to fix. Secondary categories can then add the specific services you offer beyond the primary category.",
      },
      {
        type: "p",
        h: "Services, hours and photos",
        text: "List the services you actually offer, not an aspirational list of everything you might one day provide. Keep hours accurate, including special hours for holidays. Use real, recent photos of the exterior, reception and facility rather than stock imagery — patients use photos to judge whether a place looks like what they expect before they visit.",
      },
      {
        type: "p",
        h: "Posts",
        text: "Short, factual updates work well here — a new doctor joining, a timing change, a health camp — rather than promotional claims about outcomes. Posts are a good place for genuinely useful, timely information, not a marketing channel for claims that belong nowhere near a health context.",
      },
      {
        type: "p",
        h: "Reviews: how they work, and what you may and may not do",
        text: "Reviews influence both local visibility and a patient's decision to visit. You can ask patients who are happy with their visit to leave a review, and you can respond publicly to reviews. What you cannot do is incentivise reviews or fabricate them — Google's policies prohibit both, and healthcare adds a further layer of care: a public response should never confirm or discuss a specific patient's condition or visit, even to correct a negative review, because that risks a patient-privacy breach on top of any advertising-rule concern.",
      },
      {
        type: "p",
        h: "NAP consistency across listings",
        text: "Your name, address and phone number should read identically on your Google Business Profile, your website and any other directory you appear on. A small mismatch — a missing floor number, an old phone number left on one directory — can quietly work against your local visibility even when the profile itself looks complete.",
      },
      {
        type: "list",
        h: "Common mistakes",
        items: [
          { b: "Wrong or overly broad category —", t: "the single most common issue, and usually the easiest to fix." },
          { b: "Inconsistent address or phone number —", t: "across the profile, the website and other directories." },
          { b: "Stale hours —", t: "no update for holidays or a changed schedule." },
          { b: "No recent photos, or stock imagery —", t: "patients use photos to judge whether a place matches expectations." },
          { b: "Incentivised or fabricated reviews —", t: "against policy, and it undermines the reviews that are genuine." },
          { b: "Multiple doctors or locations merged into one listing incorrectly —", t: "each location generally needs its own profile." },
        ],
      },
    ],
    faqs: [
      {
        q: "How long does Google Business Profile verification take?",
        a: "That timeline is Google's, not the facility's or ours — it can range from a few days to a few weeks depending on the verification method Google offers for your listing. Providing accurate information upfront is the main thing within your control.",
      },
      {
        q: "Can we ask patients to leave a review?",
        a: "Yes, genuinely — asking a happy patient to share their experience is fine. What isn't allowed is incentivising reviews or writing fabricated ones, and any public response should avoid discussing a specific patient's condition or visit.",
      },
      {
        q: "What category should a nursing home use?",
        a: "The most specific and accurate category Google offers for what the facility actually is, rather than a generic catch-all — an inaccurate category is one of the most common issues we see on healthcare listings.",
      },
    ],
    related: [
      { title: "Clinic SEO in West Bengal: how patients actually find a clinic", href: "/pages/clinic-seo-west-bengal.html" },
      { title: "Healthcare advertising rules in India: what a facility can and cannot say", href: "/pages/healthcare-advertising-rules-india.html" },
      PARENT_RELATED,
    ],
    cta: cta(
      "Get your profile set up properly",
      "We'll go through your current listing, fix what's wrong, and set categories and services up correctly.",
    ),
    seo: {
      metaTitle: "Google Business Profile for Clinics & Nursing Homes | Svasamm Digital",
      metaDescription:
        "How to set up and manage a Google Business Profile for a clinic or nursing home: verification, categories, photos, posts, reviews and NAP consistency.",
      canonical: `${SITE_URL}/pages/google-business-profile-for-clinics.html`,
      ogType: "article",
      ogTitle: "Google Business Profile for clinics and nursing homes",
      ogDescription: "Verification, categories, reviews and common mistakes on a healthcare Google Business Profile.",
    },
    jsonLd: articleJsonLd({
      slug: "google-business-profile-for-clinics",
      headline: "Google Business Profile for Clinics and Nursing Homes",
      description: "How to set up and manage a Google Business Profile for a healthcare facility.",
      title: "Google Business Profile for clinics and nursing homes",
      faqs: [
        { q: "How long does Google Business Profile verification take?", a: "That timeline is Google's, not the facility's — it can range from a few days to a few weeks depending on the verification method available." },
        { q: "Can we ask patients to leave a review?", a: "Yes, genuinely — but incentivising or fabricating reviews isn't allowed, and public responses should avoid discussing a specific patient's condition or visit." },
      ],
    }),
  },

  // 4. Guide — compliance. MANDATORY not-legal-advice note block.
  {
    slug: "healthcare-advertising-rules-india",
    type: "guide",
    parentProduct: "digital-healthcare",
    eyebrow: "Compliance Guide",
    title: "Healthcare advertising rules in India: what a facility can and cannot say",
    byline: BYLINE,
    intro:
      "Healthcare advertising in India sits under more restriction than most other categories, for good reason. Before any facility publishes a website, a Google Business Profile or an ad, it's worth understanding the main instruments that shape what can and can't be said — and what that means in practice.",
    sections: [
      {
        type: "note",
        h: "This is general information, not legal advice",
        text: "The position below reflects our general understanding as of the date this article was published, 20 July 2026. Advertising law and professional-conduct rules change, and how they apply can depend on the specific facility, service, claim and medium involved. This article is not legal advice. Confirm your website content, Google Business Profile posts and ad copy with your facility's own legal advisor before publishing anything that makes a health-related claim.",
      },
      {
        type: "p",
        h: "The main instruments that govern this",
        text: "Several different rules apply at once, from different directions. The Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954 restricts advertisements that claim to diagnose, cure, mitigate, treat or prevent certain diseases and conditions, and separately prohibits advertisements for \"magic remedies\" that claim miraculous or supernatural properties. The National Medical Commission, which took over the erstwhile Medical Council of India's regulatory role, carries forward professional-conduct norms that restrict individual registered practitioners from self-promotional advertising or soliciting patients — as distinct from a facility publishing factual, institutional information about its services. The Advertising Standards Council of India applies a self-regulatory code across advertising generally, including an expectation that health-related claims be capable of substantiation and not misleading or alarming. And the Consumer Protection Act, 2019 contains general provisions against misleading advertisements that apply to healthcare advertising as much as to any other sector.",
      },
      {
        type: "p",
        h: "What this means in practice for a facility's site and ads",
        text: "In practice, the safest content avoids claims that a treatment is certain to work or will produce a specific outcome, treats patient testimonials and before-and-after imagery with real caution — both for advertising-rule reasons and for patient privacy and consent — and avoids comparative superiority claims (\"the best in the district\") that can't be independently substantiated. Factual credentials — a doctor's degree, registration and years in practice — sit at the safer, more defensible end of what can be published; marketing flourish around outcomes sits at the riskier end.",
      },
      {
        type: "list",
        h: "A practical checklist before publishing",
        items: [
          { b: "No claims that a treatment or outcome is certain —", t: "describe what is offered, not what will result." },
          { b: "Get explicit, informed consent for any patient image or testimonial —", t: "and consider carefully whether to use it at all." },
          { b: "Avoid comparative superiority claims you can't substantiate —", t: "\"leading\", \"best\" and similar wording carry risk without independent backing." },
          { b: "Stick to genuine, verifiable credentials —", t: "for any doctor or facility claim." },
          { b: "Have new ad copy or landing pages reviewed by your legal advisor —", t: "particularly before a first launch or a new claim type." },
          { b: "Keep a record of when content was reviewed and approved —", t: "useful if a claim is ever questioned later." },
        ],
      },
      {
        type: "p",
        h: "How this affects Svasamm's own work",
        text: "We write and structure content on a facility's behalf, but we are not qualified to certify a clinical claim, and we don't try to be. Where content touches anything that reads as a clinical claim, we send it back to the facility for sign-off rather than publishing on our own judgement, and our default in copy we draft is caution — factual and specific rather than promotional. Final responsibility for what a facility publishes in its own name stays with the facility.",
      },
    ],
    faqs: [
      {
        q: "Can we advertise a doctor's success rate?",
        a: "Only if it's independently verifiable and substantiated, and professional-conduct norms around individual practitioners generally caution against marketing-style claims by a named doctor. Most facilities are better served publishing factual credentials than a success-rate figure.",
      },
      {
        q: "Can we use patient testimonials on our website or ads?",
        a: "Only with clear, informed consent, and with awareness of both privacy sensitivity and advertising-rule scrutiny of testimonials in healthcare. Many facilities choose not to use them at all for this reason.",
      },
      {
        q: "Who is responsible for compliance — the facility or Svasamm?",
        a: "The facility is legally responsible for claims published in its own name. We help draft factual copy and flag anything that reads like a clinical claim, but sign-off and legal compliance sit with the facility and its own legal advisor.",
      },
    ],
    related: [
      { title: "Google Business Profile for clinics and nursing homes", href: "/pages/google-business-profile-for-clinics.html" },
      { title: "Svasamm Digital vs a general digital agency", href: "/pages/digital-healthcare-vs-general-agency.html" },
      PARENT_RELATED,
    ],
    cta: cta(
      "Talk through your content before you publish",
      "We'll flag anything in your planned copy that needs a legal look before it goes live.",
    ),
    seo: {
      metaTitle: "Healthcare Advertising Rules in India: What a Facility Can Say | Svasamm Digital",
      metaDescription:
        "An overview of the rules shaping healthcare advertising in India — the Drugs and Magic Remedies Act, NMC conduct norms, ASCI's code and consumer protection law — and what they mean in practice. Not legal advice.",
      canonical: `${SITE_URL}/pages/healthcare-advertising-rules-india.html`,
      ogType: "article",
      ogTitle: "Healthcare advertising rules in India: what a facility can and cannot say",
      ogDescription: "General information, not legal advice, on the rules shaping healthcare advertising in India.",
    },
    jsonLd: articleJsonLd({
      slug: "healthcare-advertising-rules-india",
      headline: "Healthcare Advertising Rules in India: What a Facility Can and Cannot Say",
      description: "General information on the rules shaping healthcare advertising in India. Not legal advice.",
      title: "Healthcare advertising rules in India",
      faqs: [
        { q: "Can we advertise a doctor's success rate?", a: "Only if independently verifiable and substantiated; most facilities are better served publishing factual credentials instead." },
        { q: "Who is responsible for compliance — the facility or Svasamm?", a: "The facility is legally responsible for claims published in its own name; we flag anything that reads like a clinical claim, but sign-off sits with the facility." },
      ],
    }),
  },

  // 5. Compare — vs in-house hire.
  {
    slug: "digital-healthcare-vs-in-house",
    type: "compare",
    parentProduct: "digital-healthcare",
    eyebrow: "Comparison",
    title: "Svasamm Digital vs hiring in-house",
    byline: BYLINE,
    intro:
      "Some facilities weigh Svasamm Digital against simply hiring someone to handle this in-house. Both are reasonable choices depending on the facility. Here's an honest look at what each genuinely gives you, and what it costs you in a different currency than money.",
    sections: [
      {
        type: "p",
        h: "What an in-house hire genuinely gives you",
        text: "Full control over day-to-day priorities, immediate availability for anything urgent — a doctor joining, a same-day post, an emergency update to hours — and institutional knowledge that accumulates naturally over time without needing to be re-explained to an outside party. If your facility is large enough to need constant, on-site attention to this, that's a real advantage.",
      },
      {
        type: "p",
        h: "The realities of building this in-house",
        text: "Recruiting specifically for this mix — website work, local SEO, Google Business Profile management, running paid ads — is difficult even for larger organisations, and one generalist hire rarely covers all four to a genuinely competent standard. Cover during leave or after that person leaves is a real, recurring problem, not a hypothetical one. And if this specialism doesn't already exist in your facility, you're paying for the learning curve while it's being built, in staff time if not in fees.",
      },
      {
        type: "p",
        h: "What Svasamm Digital gives instead",
        text: "A fixed, published scope per tier, a specialism built specifically around healthcare rather than general small-business marketing, and category exclusivity in your catchment written into the agreement. What it doesn't give: an on-site presence, and it only covers what the chosen tier lists — anything outside that scope is a separate conversation, not an assumed extra.",
      },
      {
        type: "table",
        h: "Side by side",
        cols: ["Dimension", "In-house hire", "Svasamm Digital"],
        rows: [
          ["On-site availability", "Yes, always present", "No — remote engagement"],
          ["Breadth across web, SEO, GBP, ads", "Depends on one person's skill mix", "Specialist scope per tier, published"],
          ["Continuity if someone leaves or takes leave", "A real risk to plan for", "Continuity is built into the service"],
          ["Healthcare-specific expertise", "Has to be built from scratch", "Built in from day one"],
          ["Institutional knowledge of the facility", "Accumulates naturally over time", "Has to be actively shared with us"],
          ["Category exclusivity in your catchment", "Not applicable", "Written into the agreement"],
          ["Work outside a defined scope", "Can flex to whatever comes up", "Limited to what the tier lists"],
        ],
      },
      {
        type: "p",
        h: "Which fits better",
        text: "A larger facility with the budget for a genuinely skilled full-time hire, or one that needs someone physically present every day, is often better served in-house. Facilities that need this handled properly without carrying the recruiting, cover and specialism-building risk tend to be better served by a fixed external arrangement — whether that's ours or someone else's.",
      },
    ],
    faqs: [
      {
        q: "Could we do both — hire someone and use Svasamm Digital?",
        a: "Yes, some facilities do. An in-house person can handle day-to-day coordination, content flow and approvals, while the specialist website, SEO, GBP and ads work stays with us. It's worth being clear upfront about who owns what.",
      },
      {
        q: "What happens if we want work outside the published tier scope?",
        a: "That's a separate conversation and a separate scope. We don't expand what a tier includes without agreeing that first — a fixed, published scope is part of the point.",
      },
    ],
    related: [
      { title: "Svasamm Digital vs a general digital agency", href: "/pages/digital-healthcare-vs-general-agency.html" },
      { title: "Clinic SEO in West Bengal: how patients actually find a clinic", href: "/pages/clinic-seo-west-bengal.html" },
      PARENT_RELATED,
    ],
    cta: cta(
      "Weigh this against your own situation",
      "Tell us the size of your facility and what you're weighing it against, and we'll give you a straight view.",
    ),
    seo: {
      metaTitle: "Svasamm Digital vs Hiring In-House for Healthcare Marketing | Svasamm Digital",
      metaDescription:
        "An honest comparison of hiring an in-house marketing person versus using Svasamm Digital for a clinic or hospital's website, SEO and Google Business Profile.",
      canonical: `${SITE_URL}/pages/digital-healthcare-vs-in-house.html`,
      ogType: "article",
      ogTitle: "Svasamm Digital vs hiring in-house",
      ogDescription: "What an in-house hire genuinely gives you, and what a fixed external scope gives instead.",
    },
    jsonLd: articleJsonLd({
      slug: "digital-healthcare-vs-in-house",
      headline: "Svasamm Digital vs Hiring In-House for Healthcare Marketing",
      description: "An honest comparison of an in-house hire versus Svasamm Digital's fixed external scope.",
      title: "Svasamm Digital vs hiring in-house",
      faqs: [
        { q: "Could we do both — hire someone and use Svasamm Digital?", a: "Yes — an in-house person can handle day-to-day coordination while we handle the specialist work, with roles agreed upfront." },
        { q: "What happens if we want work outside the published tier scope?", a: "That's a separate conversation and scope — we don't expand tier inclusions without agreeing that first." },
      ],
    }),
  },

  // 6. Compare — vs a general digital agency. Never name an agency.
  {
    slug: "digital-healthcare-vs-general-agency",
    type: "compare",
    parentProduct: "digital-healthcare",
    eyebrow: "Comparison",
    title: "Svasamm Digital vs a general digital agency",
    byline: BYLINE,
    intro:
      "General digital agencies are a reasonable option for a facility, and a strong one for some. Here's an honest look at where a generalist genuinely wins, where a healthcare specialist differs, and the one issue — catchment exclusivity — that most generalist arrangements don't address at all.",
    sections: [
      {
        type: "p",
        h: "What a general agency genuinely offers",
        text: "Broader creative and channel range — brand campaigns, wider social content styles, experience across more advertising platforms — usually more production capacity, and often a lower cost per unit of work because the process is standardised across many kinds of clients. If what you actually want is brand-building beyond local search, a generalist's range can be a genuine advantage.",
      },
      {
        type: "p",
        h: "Where healthcare specialism makes a difference",
        text: "Medical-advertising rules that a generalist agency may not track closely (see our compliance guide); Google Business Profile categories and structures specific to clinics, nursing homes and diagnostic centres rather than generic small-business categories; website structures built around departments, doctors and timings rather than a standard services template; and sensitivity to patient privacy that generic marketing workflows — broad remarketing lists, generic testimonial requests — don't always account for.",
      },
      {
        type: "p",
        h: "The catchment issue",
        text: "A general agency's business model usually involves taking as many clients as it can within a category, which can include, quite legitimately from the agency's point of view, your direct competitor in the same catchment. Nothing about the generalist model prevents that unless exclusivity is specifically negotiated, which is uncommon in that kind of arrangement. Svasamm Digital publishes catchment exclusivity as standard: one facility per category within a catchment, written into the agreement — a structural difference, not a marketing claim.",
      },
      {
        type: "table",
        h: "Side by side",
        cols: ["Dimension", "General agency", "Svasamm Digital"],
        rows: [
          ["Breadth of creative and channel work", "Wider — brand, social, broader ad formats", "Narrower — focused on local presence and search"],
          ["Healthcare-specific expertise", "Varies by agency", "Built specifically for the vertical"],
          ["Doctor and department page structures", "Usually a generic services template", "Modelled on facility structure"],
          ["Category exclusivity in your catchment", "Uncommon unless separately negotiated", "Standard, written into the agreement"],
          ["Client volume model", "Often works at scale across many sectors", "Deliberately a small number of healthcare clients"],
          ["Patient-privacy-aware workflows", "Depends on the individual agency", "Built around it from the start"],
        ],
      },
      {
        type: "p",
        h: "Which fits better",
        text: "If broad brand and creative work across many channels matters more to you than healthcare-specific structure, a general agency's range may suit you better. If catchment exclusivity, healthcare-specific structure and compliance awareness matter more than breadth, that's what a specialist is built for.",
      },
    ],
    faqs: [
      {
        q: "Isn't a specialist narrower than a general agency?",
        a: "Yes, deliberately — narrower scope in exchange for depth in one vertical and exclusivity in your catchment. It's a trade-off, not a universal advantage.",
      },
      {
        q: "Can we use a general agency for some things and Svasamm Digital for others?",
        a: "Some facilities do — a general agency for a hospital-wide brand campaign, for instance, and Svasamm Digital for the local search, Google Business Profile and website work. Just agree who owns what upfront so responsibilities don't overlap or get missed.",
      },
    ],
    related: [
      { title: "Svasamm Digital vs hiring in-house", href: "/pages/digital-healthcare-vs-in-house.html" },
      { title: "Healthcare advertising rules in India: what a facility can and cannot say", href: "/pages/healthcare-advertising-rules-india.html" },
      PARENT_RELATED,
    ],
    cta: cta(
      "See if the specialist approach fits your facility",
      "Tell us your catchment and what you're currently doing for marketing, and we'll give you a straight comparison.",
    ),
    seo: {
      metaTitle: "Svasamm Digital vs a General Digital Agency for Healthcare | Svasamm Digital",
      metaDescription:
        "An honest comparison of a general digital agency versus a healthcare-specialist service: breadth versus specialism, and catchment exclusivity.",
      canonical: `${SITE_URL}/pages/digital-healthcare-vs-general-agency.html`,
      ogType: "article",
      ogTitle: "Svasamm Digital vs a general digital agency",
      ogDescription: "Where a generalist agency wins, where healthcare specialism differs, and the catchment issue.",
    },
    jsonLd: articleJsonLd({
      slug: "digital-healthcare-vs-general-agency",
      headline: "Svasamm Digital vs a General Digital Agency for Healthcare",
      description: "An honest comparison of a general digital agency versus a healthcare-specialist service.",
      title: "Svasamm Digital vs a general digital agency",
      faqs: [
        { q: "Isn't a specialist narrower than a general agency?", a: "Yes, deliberately — narrower scope in exchange for depth in one vertical and exclusivity in your catchment." },
        { q: "Can we use a general agency for some things and Svasamm Digital for others?", a: "Some facilities do — just agree who owns what upfront so responsibilities don't overlap." },
      ],
    }),
  },
];

export const DIGITAL_ARTICLE_BY_SLUG: Record<string, Article> =
  Object.fromEntries(DIGITAL_ARTICLES.map((a) => [a.slug + ".html", a]));
