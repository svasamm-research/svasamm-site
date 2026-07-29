// Home-page presentational data (Svasamm.dc.html data()). Home-specific card copy —
// distinct from the nav registry in site.ts — so it lives here, not in the shared registry.
import { toRoute } from "./routes";

export type HomeProduct = {
  id: string;
  name: string;
  kind: "vertical" | "platform";
  tag: string;
  tagClass: string;
  icon: string;
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
  { id: "lucoze", name: "Lucoze", kind: "vertical", tag: "Vertical", tagClass: "tag-accent", icon: "ph-heartbeat", badge: "Healthcare HIMS", short: "Healthcare HIMS", href: "https://lucoze.com", external: true, blurb: "India-first hospital & clinic management: appointments, EMR, billing, lab and pharmacy on one ABDM-ready platform.", long: "India-first HMS/EMR — appointments, EMR, billing, lab, pharmacy and HR on one ABDM-ready platform. Live at lucoze.com.", cta: "Visit lucoze.com", ctaIcon: "ph-arrow-up-right" },
  { id: "dms", name: "DMS", kind: "vertical", tag: "Vertical", tagClass: "tag-accent", icon: "ph-truck", badge: "Distributor Mgmt", short: "Distributor management", href: toRoute("DMS.dc.html"), external: false, blurb: "Run an independent-distributor network: distributor-scoped sales, tiered stock, commissions and territory control.", long: "One platform for your whole distributor network — scoped sales, tiered stock, commissions and territory control.", cta: "Explore DMS", ctaIcon: "ph-arrow-right" },
  { id: "erp", name: "ERP System", kind: "platform", tag: "Platform", tagClass: "tag-outline", icon: "ph-stack", short: "Finance to operations", href: toRoute("ERP.dc.html"), external: false, blurb: "Unified finance, supply chain, manufacturing and operations for complete business visibility.", cta: "Explore ERP", ctaIcon: "ph-arrow-right" },
  { id: "hrms", name: "HRMS", kind: "platform", tag: "Platform", tagClass: "tag-outline", icon: "ph-users-three", short: "Recruit to retire", href: toRoute("HRMS.dc.html"), external: false, blurb: "HR from recruitment to retirement — payroll, attendance and performance tracking.", cta: "Explore HRMS", ctaIcon: "ph-arrow-right" },
  { id: "crm", name: "CRM Platform", kind: "platform", tag: "Platform", tagClass: "tag-outline", icon: "ph-handshake", short: "Sales & support", href: toRoute("CRM.dc.html"), external: false, blurb: "Customer relationships with sales automation, marketing and support tools.", cta: "Explore CRM", ctaIcon: "ph-arrow-right" },
  { id: "service-desk", name: "Service Desk", kind: "platform", tag: "Platform", tagClass: "tag-outline", icon: "ph-headset", short: "IT service management", href: toRoute("ServiceDesk.dc.html"), external: false, blurb: "IT service management with ticketing, incident management and a knowledge base.", cta: "Explore Service Desk", ctaIcon: "ph-arrow-right" },
  { id: "digital-healthcare", name: "Svasamm Digital for Healthcare", kind: "vertical", tag: "Service", tagClass: "tag-neutral", icon: "ph-megaphone", short: "Healthcare digitisation", href: "/pages/digital-healthcare.html", external: false, blurb: "Website, Google Business Profile, local SEO and marketing for clinics, nursing homes and small hospitals — with category exclusivity in your catchment.", cta: "Explore Digital for Healthcare", ctaIcon: "ph-arrow-right" },
  { id: "digital-schools", name: "Svasamm Digital for Schools", kind: "vertical", tag: "Service", tagClass: "tag-neutral", icon: "ph-graduation-cap", short: "School digitisation", href: "/pages/digital-schools.html", external: false, blurb: "Website, Google Business Profile, local SEO and admissions marketing for schools, pre-schools and coaching institutes — with category exclusivity in your catchment.", cta: "Explore Digital for Schools", ctaIcon: "ph-arrow-right" },
];

export const REGIONS = [
  { name: "West Bengal", status: "HQ", tagClass: "tag-accent", note: "Home base — e-Paddy & CMR workflow understood first-hand." },
  { name: "Uttar Pradesh", status: "Active", tagClass: "tag-outline", note: "State procurement & CMR delivery workflow." },
  { name: "Bihar", status: "Active", tagClass: "tag-outline", note: "PACS-linked procurement & CMR obligations." },
  { name: "Odisha", status: "Active", tagClass: "tag-outline", note: "OSCSC procurement & custom-milled rice." },
  { name: "Jharkhand", status: "Expanding", tagClass: "tag-neutral", note: "Eastern-belt expansion in progress." },
  { name: "Pan-India & global", status: "Remote", tagClass: "tag-neutral", note: "Cloud or on-prem deployments anywhere." },
];

export const WHYS = [
  { icon: "ph-sliders-horizontal", title: "Configured to your workflow", body: "Vertical products ship with your industry’s workflow, terminology and compliance already inside — not a generic tool you have to bend." },
  { icon: "ph-hard-drives", title: "Self-hostable", body: "Run on your own infrastructure or ours. Your data stays where you decide it should." },
  { icon: "ph-plugs-connected", title: "API-first", body: "Every module speaks REST. Integrate with what you already run instead of ripping it out." },
  { icon: "ph-flag", title: "India-first compliance", body: "GST, ABDM and CMR handled in the product — not bolted on as an afterthought." },
];

export const HOME_JSONLD = [
  { "@context": "https://schema.org", "@type": "Organization", name: "Svasamm Research Pvt Ltd", alternateName: "Svasamm", url: "https://svasamm.com", email: "query@svasamm.com", telephone: "+91-90077-93575", address: { "@type": "PostalAddress", streetAddress: "Nabagram, Konnagar", addressLocality: "Hooghly", addressRegion: "West Bengal", postalCode: "712246", addressCountry: "IN" }, areaServed: "IN", description: "Vertical ERPs and business platforms for rice mills, hospitals, distributor networks and more." },
  { "@context": "https://schema.org", "@type": "WebSite", name: "Svasamm", url: "https://svasamm.com" },
];
