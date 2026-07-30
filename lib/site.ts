export const SITE_URL = "https://svasamm.com";

// GA4 Measurement ID. Enabled in prod; the Analytics component suppresses it on UAT/localhost.
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-EPFCF5F117";

export const BUSINESS = {
  legalName: "Svasamm Research Pvt Ltd",
  name: "Svasamm",
  founder: "Mithun K. Singh",
  addressLine: "Nabagram, Konnagar, Hooghly, West Bengal 712246, India",
  address: {
    locality: "Konnagar",
    region: "West Bengal",
    postalCode: "712246",
    country: "IN",
  },
  email: "query@svasamm.com",
  phone: "+91 90077 93575",
} as const;

export type NavProduct = {
  id: string;
  name: string;
  desc: string;
  category: "vertical" | "platform" | "service";
  href: string; // internal /pages/*.html or external URL
  icon: string; // phosphor name, e.g. "ph-grains"
  external?: boolean;
};

// Single source for the product registry — drives the header mega-menu, footer,
// home/solutions filter, and the sitemap.
export const PRODUCTS: NavProduct[] = [
  { id: "millingo", name: "Millingo", desc: "Rice-mill ERP", category: "vertical", href: "/pages/millingo.html", icon: "ph-grains" },
  { id: "lucoze", name: "Lucoze", desc: "Healthcare HIMS", category: "vertical", href: "https://lucoze.com", external: true, icon: "ph-heartbeat" },
  { id: "dms", name: "DMS", desc: "Distributor management for OEMs", category: "vertical", href: "/pages/dms.html", icon: "ph-truck" },
  { id: "erp", name: "ERP System", desc: "Enterprise resource planning", category: "platform", href: "/pages/erp.html", icon: "ph-stack" },
  { id: "hrms", name: "HRMS", desc: "HR & payroll", category: "platform", href: "/pages/hrms.html", icon: "ph-users-three" },
  { id: "crm", name: "CRM Platform", desc: "Sales & pipeline", category: "platform", href: "/pages/crm.html", icon: "ph-handshake" },
  { id: "service-desk", name: "Service Desk", desc: "IT service management", category: "platform", href: "/pages/service-desk.html", icon: "ph-headset" },
  { id: "digital-healthcare", name: "Svasamm Digital for Healthcare", desc: "Healthcare digitisation service", category: "service", href: "/pages/digital-healthcare.html", icon: "ph-megaphone" },
  { id: "digital-schools", name: "Svasamm Digital for Schools", desc: "School digitisation service", category: "service", href: "/pages/digital-schools.html", icon: "ph-graduation-cap" },
];

export const NAV_LINKS = [
  { label: "Regions", href: "/#regions" },
  { label: "Why Svasamm", href: "/#why" },
  { label: "Contact", href: "/pages/contact.html" },
];

// Header "Resources" dropdown — curated guide clusters (svasamm has no single blog index).
// Keep to a few high-value entry points per topic; the full set lives on each product page.
export const RESOURCE_GROUPS: { heading: string; links: { title: string; href: string }[] }[] = [
  {
    heading: "Rice-mill guides",
    links: [
      { title: "Custom Milled Rice (CMR): the complete process", href: "/pages/custom-milled-rice-cmr-process.html" },
      { title: "Rice-mill yield & milling recovery", href: "/pages/rice-mill-yield-recovery.html" },
      { title: "Best rice-mill software: a buyer's guide", href: "/pages/best-rice-mill-software.html" },
      { title: "GST for rice mills", href: "/pages/gst-for-rice-mills.html" },
    ],
  },
  {
    heading: "Healthcare marketing",
    links: [
      { title: "Clinic SEO in West Bengal", href: "/pages/clinic-seo-west-bengal.html" },
      { title: "Digital marketing for nursing homes", href: "/pages/digital-marketing-for-nursing-homes.html" },
      { title: "Google Business Profile for clinics", href: "/pages/google-business-profile-for-clinics.html" },
    ],
  },
  {
    heading: "School marketing",
    links: [
      { title: "School admissions digital marketing", href: "/pages/school-admissions-digital-marketing.html" },
      { title: "School SEO in West Bengal", href: "/pages/school-seo-west-bengal.html" },
      { title: "Google Business Profile for schools", href: "/pages/google-business-profile-for-schools.html" },
    ],
  },
];

/** Absolute canonical URL for a /pages path. */
export const abs = (path: string) => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
