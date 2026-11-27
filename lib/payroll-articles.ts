// Professional tax due dates by state (23 Nov 2026, content round 3; the "content due" idea from the
// 23 Nov Monday report). Hand-authored, merged in lib/article-registry.ts.
//
// ⛔ CLAIMS: only the states whose payment date was read at the source and marked HIGH confidence in
// svasamm-platform modules/hr/migrations/0031_when_professional_tax_is_due.up.sql (researched 6 Oct 2026
// from each state's Act, Rules or notification): AP r.12(1) as amended by G.O.Ms.1629 of 17-08-2011,
// KA Act s.6 / Form 5-A, MP Vritti Kar Adhiniyam 1995 s.12(2), PB State Development Tax FAQ Q18, SK Rules
// r.13(1), TG Rules 1987 r.12(1), WB Rules r.12(1)(b). West Bengal's slabs: Finance Dept (Taxation)
// Notification 1407-F.T., 18 Aug 2026, in force from 1 Oct 2026. The states that differ by size or
// quarter (Maharashtra, Gujarat, Tamil Nadu, Bihar, Kerala ...) are named, not tabled: "confirm with the
// state". Not signed off by a chartered accountant, so the page says it is not tax advice.
// Article 276(2) of the Constitution caps the tax at ₹2,500 a person a year.
// 27 Nov 2026 (SEO audit: "professional tax payment due date" 1,900/mo, "return due date" 1,600,
// Maharashtra 870): added, each read in the official text —
//   Maharashtra: Profession Tax Rules 1975 r.11, cut-off ₹1,00,000 (G.N. PFT-2019/C.R.8/Taxation-3,
//   6 Jun 2019), dates moved to the 15th by Notification व्यकर-2026/C.R.4/Taxation-3 of 28 Feb 2026
//   (Gazette Extraordinary Part IV-B No. 91, mahagst.gov.in); new employers monthly in the first year
//   (r.11A); e-return Form III-B after the MTR-6 challan (r.11(2A)); PTEC holders by 31 March (Act s.8(2)).
//   Tamil Nadu: Urban Local Bodies Act 1998 s.117-C; Rules 2023 (G.O.Ms.45 MAWS, 12 Apr 2023) r.277 —
//   deducted from the August and January pay, paid by 30 September and 31 March with Form 14.
//   Karnataka: payment by the 20th is Act s.6A(1) (it said s.6); ₹5,000 a month or less, quarterly
//   (proviso); the annual return within 60 days of the year end, s.6(1) (PRS consolidated text to Act 22
//   of 2026). Bihar NOT added: no official source could be reached (only a secondary copy of the Rules).
// ⛔ svasamm-platform hr migration 0031 has Maharashtra's cut-off as ₹50,000; the rules say ₹1,00,000.
import type { Article } from "./types";

const SLUG = "professional-tax-due-dates-by-state-2026-27";
const URL = `https://svasamm.com/pages/${SLUG}.html`;
const TITLE = "Professional Tax Due Dates by State, 2026-27";
const META =
  "Professional tax payment and return due dates for 2026-27 in Maharashtra, Karnataka, West Bengal, Tamil Nadu and five more states, each with its source.";

const FAQS = [
  {
    q: "What is the due date for professional tax in West Bengal?",
    a: "An employer pays each month's professional tax by the 21st of the following month, under rule 12(1)(b) of the West Bengal Professional Tax Rules. Confirm against the state's current notification before you rely on it.",
  },
  {
    q: "What is the professional tax due date in Maharashtra?",
    a: "From 2026, the 15th. An employer whose tax last year was ₹1,00,000 or more, and every employer in its first year, files a monthly return and pays by the 15th of the month after the salary was paid. Below ₹1,00,000, one yearly return and payment by 15 March. An enrolled person (PTEC) pays by 31 March.",
  },
  {
    q: "What is the professional tax return due date?",
    a: "It depends on the state. In Maharashtra the return goes with the payment: monthly by the 15th, or yearly by 15 March. In Karnataka the employer's annual return is due within 60 days of the year end, by 30 May. Tamil Nadu takes Form 14 with each half-year's payment.",
  },
  {
    q: "When is professional tax paid in Tamil Nadu?",
    a: "Twice a year. The employer deducts it from the August and January salaries and pays the municipality or corporation by 30 September and 31 March, under rule 277 of the Tamil Nadu Urban Local Bodies Rules 2023.",
  },
  {
    q: "Is the professional tax due date the same in every state?",
    a: "No. Each state sets its own date and, in some, its own rhythm: monthly, quarterly or yearly, sometimes depending on how many people you employ or how much tax you paid last year. A chain or a plant in more than one state needs each state's date.",
  },
  {
    q: "What is the maximum professional tax a person can pay?",
    a: "₹2,500 a year. Article 276(2) of the Constitution caps the tax any state may levy on a person.",
  },
  {
    q: "Who deducts professional tax?",
    a: "The employer deducts it from salary under the state's slabs and pays it to the state. A self-employed person or a professional pays their own, on the state's separate date for enrolment holders.",
  },
  {
    q: "Is this tax advice?",
    a: "No. The dates here are read from each state's Act, Rules or notification, and states change them. Check your state's current notification, or ask your chartered accountant, before you rely on a date.",
  },
];

export const PAYROLL_ARTICLES: Article[] = [
  {
    slug: SLUG,
    type: "guide",
    parentProduct: "hrms",
    eyebrow: "Payroll Guide · 2026-27",
    title: TITLE,
    byline: "By Mithun K. Singh, Co-Founder, Svasamm Research · 23 November 2026, updated 27 November 2026",
    intro:
      "Professional tax is a state tax, so it has no single due date. A firm with staff in one state keeps one date in mind; a plant or a chain in three states keeps three, and a missed one costs a late fee each time. This guide lists the dates for the states we have read at the source, and says plainly which states differ.",
    sections: [
      {
        type: "p",
        h: "What professional tax is, and who pays it",
        text: "Professional tax is levied by a state on people who earn from a salary, a profession or a trade. The employer deducts it from each person's pay under the state's slabs and pays it to the state. The Constitution caps it at ₹2,500 a person a year (Article 276(2)), so even the highest slab in any state stays within that. A person who earns below the state's lowest slab pays nothing, and the employer deducts nothing.",
      },
      {
        type: "table",
        h: "When the employer pays, state by state",
        cols: ["State", "How often", "Due date", "Source"],
        rows: [
          ["West Bengal", "Monthly", "21st of the next month", "West Bengal Professional Tax Rules, rule 12(1)(b)"],
          ["Maharashtra", "Monthly if last year's tax was ₹1,00,000 or more, and in the first year; else yearly", "15th of the month after the salary is paid; yearly by 15 March", "Maharashtra Profession Tax Rules 1975, rule 11, as amended on 28 February 2026"],
          ["Karnataka", "Monthly; quarterly if ₹5,000 a month or less", "20th of the next month", "Karnataka Tax on Professions Act, section 6A(1)"],
          ["Tamil Nadu", "Half-yearly", "30 September and 31 March", "Tamil Nadu Urban Local Bodies Rules 2023, rule 277"],
          ["Telangana", "Monthly", "10th of the next month", "Telangana Professional Tax Rules 1987, rule 12(1)"],
          ["Andhra Pradesh", "Monthly", "10th of the next month", "AP Professional Tax Rules, rule 12(1), as amended by G.O.Ms.1629 of 17 August 2011"],
          ["Madhya Pradesh", "Monthly", "10th of the next month", "MP Vritti Kar Adhiniyam 1995, section 12(2)"],
          ["Sikkim", "Monthly", "15th of the next month", "Sikkim Professional Tax Rules, rule 13(1)"],
          ["Punjab", "Monthly", "Last day of the next month", "Punjab State Development Tax, official FAQ 18"],
        ],
      },
      {
        type: "note",
        text: "Gujarat, Bihar, Kerala and several other states are not in the table yet, because we have not read their current rule at the source. Kerala's tax, for example, is paid on the local body's demand. Confirm them with the state's department or your chartered accountant.",
      },
      {
        type: "p",
        h: "Maharashtra moved its dates to the 15th in 2026",
        text: "A notification of 28 February 2026 amended rule 11 of the Maharashtra Profession Tax Rules. An employer whose tax for the previous year was **₹1,00,000 or more** files a monthly return, and pays, by the **15th** of the month after the salary was paid: April's salary is in the May return, due 15 May. It used to be the last day of the month. Below ₹1,00,000, the employer files one return for March to February and pays by **15 March**, where it used to be 31 March. A new employer files monthly for its first year, whatever the amount. The return is Form III-B, filed online after the tax is paid by the MTR-6 challan. An enrolled person (a PTEC holder) still pays by 31 March.",
      },
      {
        type: "table",
        h: "Return due dates",
        cols: ["State", "Return", "Due"],
        rows: [
          ["Maharashtra", "Form III-B, online, after the payment", "With each payment: the 15th, or 15 March for a yearly return"],
          ["Karnataka", "Employer's annual return", "Within 60 days of the year end: 30 May (section 6(1))"],
          ["Tamil Nadu", "Form 14, with the payment", "30 September and 31 March"],
        ],
      },
      {
        type: "p",
        h: "West Bengal's slabs changed on 1 October 2026",
        text: "West Bengal notified new salaried slabs on 18 August 2026 (Finance Department, Taxation, Notification 1407-F.T.), in force from 1 October 2026: nothing up to ₹20,000 a month, ₹100 up to ₹30,000, ₹140 up to ₹50,000, ₹170 up to ₹1,00,000, and ₹208 above that. Salary for September and earlier is still banded by the older slabs, so a payroll run for an earlier month must use the older figures, not today's.",
      },
      {
        type: "list",
        h: "Five ways firms pay late",
        items: [
          { b: "One date for every state —", t: "the date that works in West Bengal is wrong in Karnataka, where the tax falls due the day before." },
          { b: "Quarter-end confusion —", t: "a state that collects quarterly or half-yearly asks for the whole period on one date, as Tamil Nadu does on 30 September." },
          { b: "Last year's dates —", t: "Maharashtra's dates moved from the month end to the 15th in 2026; a calendar copied from last year pays late every month." },
          { b: "Arrears and back pay —", t: "a salary revised backwards must be banded month by month by the slabs of each month, not by today's." },
          { b: "A new joiner in a new state —", t: "the first employee in a state means a registration before the first deduction." },
        ],
      },
      {
        type: "list",
        h: "A small calendar that holds",
        items: [
          { b: "List every state you have staff in —", t: "by the place of work, not the head office." },
          { b: "Write the date and the rhythm against each —", t: "monthly, quarterly or yearly." },
          { b: "Run payroll three days before the earliest date —", t: "so the deduction is known and the payment can be made." },
          { b: "Keep the challan —", t: "with the month it was for, next to the payslips." },
          { b: "Recheck each April and each time a state notifies —", t: "states revise dates and slabs, as Maharashtra and West Bengal did this year." },
        ],
      },
      {
        type: "p",
        h: "How Svasamm People handles it",
        text: "Svasamm People bands each month's salary by the state's slabs in force for that month, totals the tax per state, and shows the due date against each state's total. Where a state's rhythm depends on your own headcount or last year's tax, the rule is set for your firm during onboarding. Professional tax runs in the same payroll as PF, ESI and TDS, so one run produces every deduction and its challan.",
      },
      {
        type: "note",
        text: "This page is a guide and not tax advice. States change dates and slabs by notification. Confirm each date against the state's current notification, or with your chartered accountant, before you rely on it.",
      },
    ],
    faqs: FAQS,
    related: [
      { title: "Payroll & compliance guide", href: "Guide-PayrollCompliance.dc.html" },
      { title: "HR & payroll for multi-location retail", href: "HRMS-Retail.dc.html" },
      { title: "Svasamm People — overview", href: "HRMS.dc.html" },
    ],
    cta: {
      title: "See each state's professional tax in one payroll run",
      body: "Send one month's salary sheet for staff in two states. We will show the tax banded by each state's slabs, with the due date against each total. Free, no obligation.",
      productHref: "HRMS.dc.html",
      productLabel: "Explore Svasamm People",
    },
    seo: {
      metaTitle: "Professional Tax Due Dates by State, 2026-27 | Svasamm People",
      metaDescription: META,
      canonical: URL,
      ogType: "article",
      ogTitle: TITLE,
      ogDescription: META,
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: TITLE,
        description: META,
        author: {
          "@type": "Person",
          name: "Mithun K. Singh",
          jobTitle: "Co-Founder",
          worksFor: { "@type": "Organization", name: "Svasamm Research Pvt Ltd" },
        },
        publisher: { "@type": "Organization", name: "Svasamm" },
        datePublished: "2026-11-23",
        dateModified: "2026-11-27",
        mainEntityOfPage: URL,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://svasamm.com/" },
          { "@type": "ListItem", position: 2, name: "Svasamm People", item: "https://svasamm.com/pages/hrms.html" },
          { "@type": "ListItem", position: 3, name: TITLE, item: URL },
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

export const PAYROLL_ARTICLE_BY_SLUG: Record<string, Article> = Object.fromEntries(PAYROLL_ARTICLES.map((a) => [a.slug, a]));
