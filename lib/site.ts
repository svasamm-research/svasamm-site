import type { NavIconName } from "@/components/IconClient";
export const SITE_URL = "https://svasamm.com";

// GA4 Measurement ID. Enabled in prod; the Analytics component suppresses it on UAT/localhost.
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-EPFCF5F117";
// Plausible — cookieless analytics on the shared self-hosted instance (analytics.lucoze.com,
// same box as lucoze). data-domain MUST exactly match the site registered in the Plausible
// dashboard, and any custom event must be added there as a Goal to appear (pageviews are automatic).
export const PLAUSIBLE_DOMAIN =
  process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "svasamm.com";
export const PLAUSIBLE_SRC =
  process.env.NEXT_PUBLIC_PLAUSIBLE_SRC ??
  "https://analytics.lucoze.com/js/script.js";

// One source for who we are. The REGISTERED address is the one on the GST certificate,
// word for word, because the payment provider (Cashfree) checks the site against it. The
// SHORT form is the standard settled on 14 Sep 2026 for letterheads and footers; the older
// "Nabagram, Konnagar" postal form is retired. (Konnagar as a LOCALITY in prose is still true.)
export const BUSINESS = {
  legalName: "Svasamm Research Pvt Ltd",
  name: "Svasamm",
  founder: "Mithun K. Singh",
  addressLine: "Grand City, Nabagram Colony, Hooghly, West Bengal 712246, India",
  addressShort: ["Grand City, Nabagram Colony", "Hooghly, West Bengal 712246"],
  registeredAddress:
    "Flat b06-09-05, Grand City, Grand One, Tower 6, Vivekananda Road, Daspara, Nabagram Colony, Hooghly, West Bengal 712246, India",
  streetAddress: "Flat b06-09-05, Grand City, Grand One, Tower 6, Vivekananda Road, Daspara, Nabagram Colony",
  address: {
    locality: "Hooghly",
    region: "West Bengal",
    postalCode: "712246",
    country: "IN",
  },
  gstin: "19ABNCS3363D2Z3",
  cin: "U62099WB2024PTC270218",
  email: "query@svasamm.com",
  // ⚠️ Mithun is creating this mailbox (1 Oct 2026). Nothing that names it goes live until
  // he confirms it receives mail — a refund request sent to a dead address is the complaint
  // the payment provider hears about.
  billingEmail: "billing@svasamm.com",
  grievanceOfficer: "Mithun K. Singh",
  phone: "+91 90077 93575",
} as const;

export type NavProduct = {
  id: string;
  name: string;
  desc: string;
  category: "vertical" | "platform" | "service";
  href: string; // internal /pages/*.html or external URL
  icon: NavIconName; // phosphor name the client icon map draws, e.g. "ph-grains"
  external?: boolean;
};

// Single source for the product registry — drives the header mega-menu, footer,
// home/solutions filter, and the sitemap.
export const PRODUCTS: NavProduct[] = [
  {
    id: "millingo",
    name: "Millingo",
    desc: "Rice-mill ERP",
    category: "vertical",
    href: "/pages/millingo.html",
    icon: "ph-grains",
  },
  {
    id: "lucoze",
    name: "Lucoze",
    desc: "Healthcare HIMS",
    category: "vertical",
    href: "https://lucoze.com",
    external: true,
    icon: "ph-heartbeat",
  },
  {
    id: "t4suite",
    name: "T4Suite",
    desc: "Practice management for CA firms",
    category: "vertical",
    href: "https://t4suite.com",
    external: true,
    icon: "ph-calendar-check",
  },
  {
    id: "dms",
    name: "DMS",
    desc: "Distributor management for OEMs",
    category: "vertical",
    href: "/pages/dms.html",
    icon: "ph-truck",
  },
  {
    id: "erp",
    name: "ERP System",
    desc: "Enterprise resource planning",
    category: "platform",
    href: "/pages/erp.html",
    icon: "ph-stack",
  },
  {
    id: "hrms",
    name: "Svasamm People",
    desc: "HR & payroll",
    category: "platform",
    href: "/pages/hrms.html",
    icon: "ph-users-three",
  },
  {
    id: "crm",
    name: "CRM Platform",
    desc: "Sales & pipeline",
    category: "platform",
    href: "/pages/crm.html",
    icon: "ph-handshake",
  },
  {
    id: "service-desk",
    name: "Service Desk",
    desc: "IT service management",
    category: "platform",
    href: "/pages/service-desk.html",
    icon: "ph-headset",
  },
  {
    id: "digital-healthcare",
    name: "Svasamm Digital for Healthcare",
    desc: "Ongoing growth for healthcare",
    category: "service",
    href: "/pages/digital-healthcare.html",
    icon: "ph-megaphone",
  },
  {
    id: "digital-schools",
    name: "Svasamm Digital for Schools",
    desc: "Ongoing growth for schools",
    category: "service",
    href: "/pages/digital-schools.html",
    icon: "ph-graduation-cap",
  },
];

// Every product screen the site shows — each rendered from that product's LATEST design
// canvas (Millingo https://claude.ai/artifact/1seLhA8GQtNnUga7t7FfTz, People
// …/8YzFZYmdsCPPSMUs2wXeMd, T4Suite …/QUNATp1bRgSWvbM2b4jpxV; Lucoze's from its own site),
// never a screenshot of an older build. One screen per page where it can be: a page about
// gate weighing shows the gate, not the same dashboard as every other page.
export type Screen = { src: string; caption: string };
const S = (file: string, caption: string): Screen => ({ src: `/screens/${file}.webp`, caption });
export const SCREENS = {
  millingoToday: S("millingo-today", "Millingo · the owner's morning"),
  millingoCmr: S("millingo-cmr", "Millingo · CMR owed to the government"),
  millingoGate: S("millingo-gate", "Millingo · trucks at the gate"),
  millingoBatches: S("millingo-batches", "Millingo · batches on the floor"),
  millingoReports: S("millingo-reports", "Millingo · reports and the trial balance"),
  millingoPhone: S("millingo-phone", "Millingo on the owner's phone"),
  peopleMonthEnd: S("people-monthend", "Svasamm People · month end"),
  peoplePayroll: S("people-payroll", "Svasamm People · payroll"),
  peopleAttendance: S("people-attendance", "Svasamm People · attendance for the month"),
  peopleFiling: S("people-filing", "Svasamm People · statutory filing"),
  peoplePhoneToday: S("people-phone-today", "Svasamm People on a worker's phone"),
  peoplePhoneAttendance: S("people-phone-attendance", "Svasamm People · attendance on a phone"),
  t4suiteDashboard: S("t4suite-dashboard", "T4Suite · the dashboard"),
  lucozeBeds: S("lucoze-beds", "Lucoze · the bed board"),
} satisfies Record<string, Screen>;

// The products that run on Svasamm One, each in the colour decided for it in the Svasamm
// One kit (svasamm-platform packages/ui tokens). Membership in this map IS "on Svasamm One";
// everything else in PRODUCTS is "also built for clients". `on` is the icon colour on the
// fill — Millingo's yellow takes dark ink, never white. `card` is the screen on the home
// page's card, `page` and `phone` the product page's — deliberately different screens.
export const ONE: Record<
  string,
  { fill: string; ink: string; wash: string; on: string; card: Screen; page?: Screen; phone?: Screen }
> = {
  millingo: { fill: "#D9A215", ink: "#6E5309", wash: "#FDF7E8", on: "#3A2C05", card: SCREENS.millingoCmr, page: SCREENS.millingoGate, phone: SCREENS.millingoPhone },
  lucoze: { fill: "#C15F3C", ink: "#8A3F23", wash: "#FDF3EE", on: "#fff", card: SCREENS.lucozeBeds },
  t4suite: { fill: "#1D4ED8", ink: "#1E3A8A", wash: "#DBEAFE", on: "#fff", card: SCREENS.t4suiteDashboard },
  hrms: { fill: "#15803D", ink: "#14532D", wash: "#DCFCE7", on: "#fff", card: SCREENS.peoplePayroll, page: SCREENS.peopleMonthEnd, phone: SCREENS.peoplePhoneAttendance },
};

// A guide ends on the screen that does what the guide is about. A guide not listed falls
// back to its product's page screen.
export const GUIDE_SCREEN: Record<string, Screen> = {
  "custom-milled-rice-cmr-process": SCREENS.millingoCmr,
  "cmr-out-turn-shortfall-moisture": SCREENS.millingoCmr,
  "punjab-custom-milling-policy-2026-27": SCREENS.millingoCmr,
  "rice-mill-software-west-bengal": SCREENS.millingoGate,
  "rice-mill-software-uttar-pradesh": SCREENS.millingoGate,
  "rice-mill-software-bihar": SCREENS.millingoGate,
  "rice-mill-software-odisha": SCREENS.millingoGate,
  "rice-mill-yield-recovery": SCREENS.millingoBatches,
  "rice-mill-byproduct-accounting": SCREENS.millingoBatches,
  "gst-for-rice-mills": SCREENS.millingoReports,
  "best-rice-mill-software": SCREENS.millingoToday,
  "rice-mill-software-price": SCREENS.millingoToday,
  "millingo-vs-dataman": SCREENS.millingoToday,
  "millingo-vs-samadhan": SCREENS.millingoToday,
  "hrms-for-manufacturing": SCREENS.peopleAttendance,
  "hrms-for-hospitals-clinics": SCREENS.peopleAttendance,
  "hrms-for-retail": SCREENS.peoplePayroll,
  "payroll-statutory-compliance-india": SCREENS.peopleFiling,
};


// Industry first: a mill owner looks for "rice mills" before they know the word Millingo.
// Every href is a page that already exists. `product` keys the colour in ONE.
export const INDUSTRIES: { name: string; to: string; href: string; product?: string; external?: boolean }[] = [
  { name: "Rice mills", to: "Millingo · the CMR guides", href: "/pages/millingo.html", product: "millingo" },
  { name: "CA & compliance firms", to: "T4Suite", href: "https://t4suite.com", product: "t4suite", external: true },
  { name: "Hospitals & clinics", to: "Lucoze", href: "https://lucoze.com", product: "lucoze", external: true },
  { name: "Factories & workshops", to: "HR & payroll for manufacturing", href: "/pages/hrms-for-manufacturing.html", product: "hrms" },
  { name: "Schools & coaching", to: "Svasamm Digital for Schools", href: "/pages/digital-schools.html" },
];

// Header "Resources" dropdown — curated guide clusters (svasamm has no single blog index).
// Keep to a few high-value entry points per topic; the full set lives on each product page.
export const RESOURCE_GROUPS: {
  heading: string;
  links: { title: string; href: string }[];
}[] = [
  {
    heading: "Rice-mill guides",
    links: [
      {
        title: "Custom Milled Rice (CMR): the complete process",
        href: "/pages/custom-milled-rice-cmr-process.html",
      },
      {
        title: "Rice-mill yield & milling recovery",
        href: "/pages/rice-mill-yield-recovery.html",
      },
      {
        title: "Best rice-mill software: a buyer's guide",
        href: "/pages/best-rice-mill-software.html",
      },
      { title: "GST for rice mills", href: "/pages/gst-for-rice-mills.html" },
    ],
  },
  {
    heading: "Healthcare marketing",
    links: [
      {
        title: "Clinic SEO in West Bengal",
        href: "/pages/clinic-seo-west-bengal.html",
      },
      {
        title: "Digital marketing for nursing homes",
        href: "/pages/digital-marketing-for-nursing-homes.html",
      },
      {
        title: "Google Business Profile for clinics",
        href: "/pages/google-business-profile-for-clinics.html",
      },
    ],
  },
  {
    heading: "School marketing",
    links: [
      {
        title: "School admissions digital marketing",
        href: "/pages/school-admissions-digital-marketing.html",
      },
      {
        title: "School SEO in West Bengal",
        href: "/pages/school-seo-west-bengal.html",
      },
      {
        title: "Google Business Profile for schools",
        href: "/pages/google-business-profile-for-schools.html",
      },
    ],
  },
];

/** Absolute canonical URL for a /pages path. */
export const abs = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
