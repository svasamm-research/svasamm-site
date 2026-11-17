// Svasamm People for factories (17 Nov 2026). Hand-authored, merged in lib/article-registry.ts
// AFTER the generated set, so it replaces the thin generated "hrms-for-manufacturing" page at the
// same URL (the page keeps its address and whatever it has earned in search).
//
// Why: People is sold for what it does today — payroll, attendance and statutory compliance for
// factories and MSMEs — until the full-HRMS rows ship (web-dev docs/people-vs-keka-greythr.md,
// 17 Nov 2026). Searches: "payroll and attendance software", "payroll software for small business"
// (590/mo), "biometric / worker / staff attendance software" (390 each) — DataForSEO, 17 Nov 2026.
//
// ⛔ EVERY CLAIM HERE WAS CHECKED AGAINST svasamm-platform origin/develop, modules/hr, 17 Nov 2026:
// machine punches (a machine is a principal with one place), phone punch settings never/always/office
// (0018, 0030), night shift on the day it started, regularisation never overwritten, mid-month muster
// import (0029), overtime as a multiple that refuses when unset (0024), PF + ECR, ESI, PT per state
// with due dates (0028, 0031), TDS both regimes, declarations, HRA, Form 16, 24Q, challans, bonus
// (0015), gratuity (0016), full and final settlement (0017), contract labour without a login.
// NOT CLAIMED, because the code does not do it: payroll posting to Finance, a bank salary file,
// LWF, a named machine brand (eSSL, ZKTeco). The word "geofence" is banned by svasamm.spec.ts.
// A customer's own machine is "connected during onboarding" (present-as-ready, Mithun 17 Nov 2026).
import type { Article } from "./types";

const SLUG = "hrms-for-manufacturing";
const URL = `https://svasamm.com/pages/${SLUG}.html`;
const TITLE = "Payroll and Attendance Software for Factories in India";
const META =
  "Payroll and attendance software for factories: punches from your biometric machine or a phone, shifts and overtime, contract labour, and payroll with PF, ESI, PT, TDS, bonus and gratuity.";

const FAQS = [
  {
    q: "Does it work with our biometric attendance machine?",
    a: "Yes. Keep the machine you have. We connect it during onboarding, and it sends each punch to Svasamm People for its own gate. A machine can only post punches; it cannot read the staff register or anybody's salary.",
  },
  {
    q: "Can it pay contract labour?",
    a: "Yes. A contract worker gets a record, shifts and attendance without needing a login or a phone, and is paid in the same run as your permanent staff.",
  },
  {
    q: "How is overtime paid?",
    a: "Overtime is counted from the punches, after the shift's full day, and paid at the multiple of the ordinary rate your firm sets: twice under section 59 of the Factories Act, or what your agreement says. If no multiple is set, payroll refuses to pay overtime and says why, instead of quietly paying nothing.",
  },
  {
    q: "We start in the middle of a month. What happens to the days before?",
    a: "Import them from your muster roll. The imported days are marked as yours, so they are not judged absent and no late punch overwrites them.",
  },
  {
    q: "Which statutory returns and files does it produce?",
    a: "The PF register with the ECR file, ESI, professional tax totalled per state with its due dates, TDS under both regimes with Form 16 and Form 24Q, challans for every deposit, statutory bonus, gratuity, and a full and final settlement when somebody leaves.",
  },
  {
    q: "Can office staff punch from their phone?",
    a: "Yes, if you allow it. Each person is set to one of three: never by phone (they use the machine), always (sales and drivers), or only from inside the office. A phone punch away from the office is flagged for the supervisor, so a worker in a shed with no signal can still record the day.",
  },
];

export const PEOPLE_ARTICLES: Article[] = [
  {
    slug: SLUG,
    type: "industry",
    parentProduct: "hrms",
    eyebrow: "Svasamm People · Factories",
    title: TITLE,
    byline: "By Mithun K. Singh, Co-Founder, Svasamm Research · 17 November 2026",
    intro:
      "In most factories the month's pay is made from three things that do not agree: the biometric machine's report, the supervisor's register and a salary spreadsheet. Svasamm People takes the punches, judges each day against the shift, counts the overtime, and runs payroll with PF, ESI, professional tax and TDS from the same days. This page is for the owner or the HR and accounts person of a plant with fifty to five hundred workers.",
    sections: [
      {
        type: "p",
        h: "Why factory payroll goes wrong",
        text: "The machine says a worker came at 07:58. The register says he was on the night shift. The spreadsheet pays him for 26 days because that is what it paid last month. Somebody reconciles the three every month, by hand, a week before salaries are due, and the overtime is usually the first thing to go missing. The fix is not a better spreadsheet. It is one record of the day that the payroll reads directly.",
      },
      {
        type: "list",
        h: "From the gate punch to the payslip",
        items: [
          { b: "The punch —", t: "from the machine at the gate, a phone where you allow it, or a supervisor's entry." },
          { b: "The day —", t: "each punch is judged against the person's shift: present, half day, late, absent, on leave. A night shift belongs to the day it started, so 22:00 to 06:00 is one day's work." },
          { b: "The correction —", t: "a supervisor regularises a wrong day with a reason, and it is kept. A machine that catches up later never undoes a supervisor's decision." },
          { b: "The month —", t: "days present, on leave and absent, and the overtime, make the month that payroll pays." },
          { b: "The payslip —", t: "PF, ESI, professional tax and TDS deducted, and the payslip on each person's phone in the Svasamm One app." },
        ],
      },
      {
        type: "list",
        h: "Attendance for a shop floor",
        items: [
          { b: "Your biometric machine stays —", t: "connected during onboarding; each machine posts punches for its own gate and can read nothing else." },
          { b: "Shifts and rosters —", t: "shift types, who works which shift, and the monthly sheet the supervisor checks." },
          { b: "Phone punches where they make sense —", t: "never, always, or only from inside the office, set per person. Field staff and drivers can still record a day." },
          { b: "A mid-month start —", t: "the days before you started are imported from your muster roll, not counted as loss of pay." },
          { b: "Leave —", t: "leave types, pro-rata allocation, balances, approval, loss of pay, year close with carry-forward, and encashment paid as a payslip line." },
        ],
      },
      {
        type: "p",
        h: "Overtime that is actually paid",
        text: "Overtime starts where the shift's full day ends and is paid at a multiple of the ordinary rate, so a raise carries into overtime without anyone changing a second number. Section 59 of the Factories Act says twice the ordinary rate; some agreements say one and a half. Your firm sets the multiple once. If it is not set, the payroll run refuses to pay overtime and says why, so forty hours of overtime are never paid as zero in silence.",
      },
      {
        type: "list",
        h: "Statutory compliance in the same run",
        items: [
          { b: "PF —", t: "employee and employer shares, the pension split, and the ECR file for the EPFO portal." },
          { b: "ESI —", t: "contributions and the register." },
          { b: "Professional tax —", t: "each state's slabs, totalled per state with its due dates, for plants in more than one state." },
          { b: "TDS on salary —", t: "old and new regimes, declarations with proofs, HRA relief, Form 16 and the quarterly Form 24Q, with challans for every deposit." },
          { b: "Bonus and gratuity —", t: "statutory bonus on the ₹7,000 ceiling or the minimum wage if higher, and gratuity, worked out in payroll." },
          { b: "Full and final settlement —", t: "the last days, leave, bonus and gratuity added up once when somebody leaves, and never paid twice." },
        ],
      },
      {
        type: "p",
        h: "Contract labour on the same register",
        text: "Many plants run half their floor on contract labour. In Svasamm People a contract worker has a record, a shift and attendance without needing a login or a smartphone, and is paid in the same run as permanent staff. The staff register and pay are separate permissions, so the person who keeps the register does not see what everybody earns.",
      },
      {
        type: "table",
        h: "Machine report and spreadsheet, or one system",
        cols: ["", "Machine report + register + spreadsheet", "Svasamm People"],
        rows: [
          ["Attendance", "Exported from the machine and retyped", "Punches arrive and are judged against the shift"],
          ["Night shift", "Split across two days by hand", "Belongs to the day it started"],
          ["Corrections", "Overwritten in the sheet", "Regularised with a reason and kept"],
          ["Overtime", "Counted at month end, if at all", "Counted from punches, paid at your multiple"],
          ["PF and ESI", "A second spreadsheet for the returns", "Computed in the run, with the ECR file"],
          ["Workers' payslips", "Printed or sent on WhatsApp", "On each worker's phone"],
        ],
      },
      {
        type: "note",
        h: "What to ask in any payroll demo",
        text: "Bring last month's machine report and salary sheet. Ask the vendor to pay one night-shift worker with overtime, one contract worker, and one person who left mid-month, and to show you the PF ECR file for all three. If any of them needs a spreadsheet beside the system, so will your plant.",
      },
    ],
    faqs: FAQS,
    related: [
      { title: "Payroll & compliance guide", href: "Guide-PayrollCompliance.dc.html" },
      { title: "HR & payroll for multi-location retail", href: "HRMS-Retail.dc.html" },
      { title: "Svasamm People — overview", href: "HRMS.dc.html" },
    ],
    cta: {
      title: "Run one month of your payroll through it",
      body: "Send one month's machine report and salary sheet. We will run it through Svasamm People and show you the days, the overtime, PF, ESI, professional tax and TDS, line by line. Free, no obligation.",
      productHref: "HRMS.dc.html",
      productLabel: "Explore Svasamm People",
    },
    seo: {
      metaTitle: "Payroll & Attendance Software for Factories | Svasamm People",
      metaDescription: META,
      canonical: URL,
      ogType: "website",
      ogTitle: TITLE,
      ogDescription: META,
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: TITLE,
        serviceType: "Payroll and attendance software",
        description: META,
        provider: { "@type": "Organization", name: "Svasamm", url: "https://svasamm.com" },
        areaServed: "IN",
        audience: { "@type": "BusinessAudience", name: "Factories and manufacturing plants" },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://svasamm.com/" },
          { "@type": "ListItem", position: 2, name: "Svasamm People", item: "https://svasamm.com/pages/hrms.html" },
          { "@type": "ListItem", position: 3, name: "Payroll and attendance for factories", item: URL },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  },
];

export const PEOPLE_ARTICLE_BY_SLUG: Record<string, Article> = Object.fromEntries(PEOPLE_ARTICLES.map((a) => [a.slug, a]));
