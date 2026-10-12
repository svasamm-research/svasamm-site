// Home-page presentational data (Svasamm.dc.html data()). Home-specific card copy —
// distinct from the nav registry in site.ts — so it lives here, not in the shared registry.
import { toRoute } from "./routes";
import type { NavIconName } from "@/components/IconClient";

export type HomeProduct = {
  id: string;
  name: string;
  kind: "vertical" | "platform" | "service";
  tag: string;
  tagClass: string;
  icon: NavIconName;
  badge?: string;
  short: string;
  href: string;
  external: boolean;
  blurb: string;
  long?: string;
  cta: string;
  ctaIcon: string;
};

export const HOME_PRODUCTS: HomeProduct[] = [
  { id: "millingo", name: "Millingo", kind: "vertical", tag: "Vertical", tagClass: "tag-accent", icon: "ph-grains", badge: "Rice Mill ERP", short: "Rice-mill ERP", href: toRoute("Millingo.dc.html"), external: false, blurb: "ERP for rice mills — paddy procurement, quality grading, milling yield & by-products, and FCI/levy (CMR) compliance.", long: "Runs the whole mill: procurement, QC, milling recovery, gunny-bag accounting and the government CMR cycle.", cta: "Explore Millingo", ctaIcon: "ph-arrow-right" },
  { id: "lucoze", name: "Lucoze", kind: "vertical", tag: "Vertical", tagClass: "tag-accent", icon: "ph-heartbeat", badge: "Healthcare HIMS", short: "Healthcare HIMS", href: "https://lucoze.com", external: true, blurb: "India-first hospital & clinic management: appointments, EMR, billing, lab and pharmacy on one platform.", long: "India-first HMS/EMR — appointments, EMR, billing, lab, pharmacy and HR on one platform. Live at lucoze.com.", cta: "Visit lucoze.com", ctaIcon: "ph-arrow-up-right" },
  { id: "t4suite", name: "T4Suite", kind: "vertical", tag: "Vertical", tagClass: "tag-accent", icon: "ph-calendar-check", badge: "Practice management", short: "CA practice management", href: "https://t4suite.com", external: true, blurb: "Practice management for CA and compliance firms: tasks, the compliance calendar, job costing, billing and client documents in one place.", long: "Practice management for CA and compliance firms — tasks and deadlines, job costing, GST invoicing and receivables. Live at t4suite.com.", cta: "Visit t4suite.com", ctaIcon: "ph-arrow-up-right" },
  { id: "dms", name: "DMS", kind: "vertical", tag: "Vertical", tagClass: "tag-accent", icon: "ph-truck", badge: "Distributor Mgmt", short: "Distributor management", href: toRoute("DMS.dc.html"), external: false, blurb: "Run an independent-distributor network: distributor-scoped sales, tiered stock, commissions and territory control.", long: "One platform for your whole distributor network — scoped sales, tiered stock, commissions and territory control.", cta: "Explore DMS", ctaIcon: "ph-arrow-right" },
  { id: "erp", name: "ERP System", kind: "platform", tag: "Platform", tagClass: "tag-outline", icon: "ph-stack", short: "Finance to operations", href: toRoute("ERP.dc.html"), external: false, blurb: "Unified finance, supply chain, manufacturing and operations for complete business visibility.", cta: "Explore ERP", ctaIcon: "ph-arrow-right" },
  { id: "hrms", name: "Svasamm People", kind: "platform", tag: "Platform", tagClass: "tag-outline", icon: "ph-users-three", short: "HR & payroll", href: toRoute("HRMS.dc.html"), external: false, blurb: "Staff, shifts and attendance on the phone, leave, and payroll with Indian statutory deductions.", cta: "Explore People", ctaIcon: "ph-arrow-right" },
  { id: "crm", name: "CRM Platform", kind: "platform", tag: "Platform", tagClass: "tag-outline", icon: "ph-handshake", short: "Sales & support", href: toRoute("CRM.dc.html"), external: false, blurb: "Customer relationships with sales automation, marketing and support tools.", cta: "Explore CRM", ctaIcon: "ph-arrow-right" },
  { id: "service-desk", name: "Service Desk", kind: "platform", tag: "Platform", tagClass: "tag-outline", icon: "ph-headset", short: "IT service management", href: toRoute("ServiceDesk.dc.html"), external: false, blurb: "IT service management with ticketing, incident management and a knowledge base.", cta: "Explore Service Desk", ctaIcon: "ph-arrow-right" },
  { id: "digital-healthcare", name: "Svasamm Digital for Healthcare", kind: "service", tag: "Service", tagClass: "tag-neutral", icon: "ph-megaphone", short: "Healthcare digitisation", href: "/pages/digital-healthcare.html", external: false, blurb: "Ongoing organic growth for clinics, nursing homes and small hospitals — website, Google Business Profile, local SEO and monthly optimisation, with category exclusivity. We don't build and leave.", cta: "Explore Digital for Healthcare", ctaIcon: "ph-arrow-right" },
  { id: "digital-schools", name: "Svasamm Digital for Schools", kind: "service", tag: "Service", tagClass: "tag-neutral", icon: "ph-graduation-cap", short: "School digitisation", href: "/pages/digital-schools.html", external: false, blurb: "Ongoing organic growth for schools, pre-schools and coaching institutes — website, Google Business Profile, local SEO and monthly optimisation, with category exclusivity. We don't build and leave.", cta: "Explore Digital for Schools", ctaIcon: "ph-arrow-right" },
];

// "Where we work": each state is drawn on the India map (lib/india-map.ts, by `map` id) and
// links to its rice-mill guide. `tone` is how strongly the map fills it. `label` sits at
// [x, y] in the map's 612x696 box.
export const REGIONS: { map: string; name: string; status?: string; tone: "home" | "on" | "next"; note: string; href?: string; label: [number, number] }[] = [
  { map: "wb", name: "West Bengal", status: "Head office", tone: "home", note: "Hooghly. e-Paddy and the CMR cycle, first-hand.", href: "/pages/rice-mill-software-west-bengal.html", label: [432, 390] },
  { map: "up", name: "Uttar Pradesh", tone: "on", note: "Our guide to the state’s procurement and CMR delivery.", href: "/pages/rice-mill-software-uttar-pradesh.html", label: [253, 262] },
  { map: "br", name: "Bihar", tone: "on", note: "Our guide to PACS-linked procurement and CMR.", href: "/pages/rice-mill-software-bihar.html", label: [362, 272] },
  { map: "or", name: "Odisha", tone: "on", note: "Our guide to OSCSC procurement and custom-milled rice.", href: "/pages/rice-mill-software-odisha.html", label: [335, 405] },
  { map: "jh", name: "Jharkhand", status: "Expanding", tone: "next", note: "Eastern-belt expansion in progress.", label: [362, 330] },
  { map: "pb", name: "Punjab", status: "Expanding", tone: "next", note: "The 2026-27 custom-milling policy, read for the mill.", href: "/pages/punjab-custom-milling-policy-2026-27.html", label: [151, 156] },
];

// The four "Why Svasamm" cards; each opens its page in lib/why-articles.ts. Worded to what
// the platform does today (checked 12 Oct 2026) — see that file before changing a claim.
export const WHYS = [
  { icon: "ph-sliders-horizontal", title: "Built for your workflow", body: "Each product starts from how its industry already works. Your firm makes a short list of choices, once, in the order the work needs them.", href: "/pages/configured-to-your-workflow.html" },
  { icon: "ph-hard-drives", title: "Hosted, or your own", body: "We run it for you, or on your own servers on request. The database itself keeps each firm’s data apart.", href: "/pages/hosting-and-your-data.html" },
  { icon: "ph-plugs-connected", title: "One open API", body: "Every screen runs on the same REST API. Access for your own systems is being added.", href: "/pages/api-and-integrations.html" },
  { icon: "ph-flag", title: "India-first compliance", body: "PF, ESI, professional tax, TDS, GST returns and CMR built in — and ABDM coming with Lucoze.", href: "/pages/india-compliance.html" },
];

export const HOME_JSONLD = [
  { "@context": "https://schema.org", "@type": "Organization", name: "Svasamm Research Pvt Ltd", alternateName: "Svasamm", url: "https://svasamm.com", email: "query@svasamm.com", telephone: "+91-90077-93575", address: { "@type": "PostalAddress", streetAddress: "Flat b06-09-05, Grand City, Grand One, Tower 6, Vivekananda Road, Daspara, Nabagram Colony", addressLocality: "Hooghly", addressRegion: "West Bengal", postalCode: "712246", addressCountry: "IN" }, areaServed: "IN", description: "Vertical ERPs and business platforms for rice mills, hospitals, distributor networks and more." },
  { "@context": "https://schema.org", "@type": "WebSite", name: "Svasamm", url: "https://svasamm.com" },
];
