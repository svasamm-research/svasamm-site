import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { HOME_PRODUCTS, REGIONS, WHYS, HOME_JSONLD } from "@/lib/home";
import { toRoute } from "@/lib/routes";
import { BUSINESS, ONE } from "@/lib/site";

const SOLUTIONS = toRoute("Solutions.dc.html");
const CONTACT = toRoute("Contact.dc.html");
// On Svasamm One (each in its colour) vs also built for clients. The hero counts its own list.
const one = HOME_PRODUCTS.filter((p) => ONE[p.id]);
const also = HOME_PRODUCTS.filter((p) => !ONE[p.id]);
const chip = (id: string, size: number): React.CSSProperties => ({
  width: size,
  height: size,
  borderRadius: 8,
  background: ONE[id].fill,
  color: ONE[id].on,
  display: "grid",
  placeItems: "center",
  flex: "none",
});

// One card or row: an external product opens its own site in a new tab.
function ProductLink({ p, className, style, children }: { p: (typeof HOME_PRODUCTS)[number]; className?: string; style?: React.CSSProperties; children: React.ReactNode }) {
  return p.external ? (
    <a href={p.href} target="_blank" rel="noopener" className={className} style={style}>{children}</a>
  ) : (
    <Link href={p.href} className={className} style={style}>{children}</Link>
  );
}

// Map the data's legacy tag classes to the --sv-* signal tags.
const svTag = (cls: string) =>
  cls.includes("accent")
    ? "sv-tag-brand"
    : cls.includes("outline")
      ? "sv-tag-outline"
      : "sv-tag";

// Three ticks on one line; only India-first needs its detail.
const TRUST = [
  ["Workflow-native", ""],
  ["Self-hostable", ""],
  ["India-first", "GST · ABDM · CMR"],
];

export const metadata: Metadata = {
  title: {
    absolute:
      "Vertical ERPs for Rice Mills, Hospitals & Distributors | Svasamm",
  },
  description:
    "Svasamm Research builds vertical ERPs and business platforms — Millingo rice-mill ERP, T4Suite for CA firms, Lucoze healthcare HIMS, distributor management, Svasamm People for HR and payroll, ERP, CRM and service desk. API-first, self-hostable, India-first.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Svasamm",
    title: "Svasamm — Vertical ERPs & Business Software",
    description:
      "Purpose-built vertical ERPs and platform modules for Indian operations. Millingo, T4Suite, Lucoze, DMS and more.",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Svasamm — vertical ERPs & business platforms",
      },
    ],
  },
};

// Home — ports Svasamm.dc.html onto the --sv-* design system. Server-rendered
// except the product filter island. SEO/JSON-LD carried over byte-identical.
export default function Home() {
  return (
    <>
      <JsonLd data={HOME_JSONLD} />
      <SiteHeader active="home" />
      <main id="main" className="flex-1">
        {/* HERO — brand-50 wash + product-suite panel */}
        <section
          className="pp-hero-wash"
          style={{ borderBottom: "1px solid var(--sv-line)" }}
        >
          <div
            className="sv-wrap pp-hero"
            style={{ gap: 64, padding: "80px 24px 88px" }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  padding: "6px 13px",
                  borderRadius: 999,
                  background: "var(--sv-surface)",
                  border: "1px solid var(--sv-line)",
                  boxShadow: "var(--sv-sh-1)",
                  marginBottom: 26,
                }}
              >
                <span style={{ fontSize: 13.5, color: "var(--sv-ink-2)" }}>
                  Svasamm Research Pvt Ltd · West Bengal, India
                </span>
              </div>
              <h1 style={{ margin: "0 0 22px", maxWidth: "16ch" }}>
                Business software that fits how your operation actually runs.
              </h1>
              <p
                className="sv-muted"
                style={{
                  fontSize: 18,
                  lineHeight: 1.62,
                  maxWidth: "50ch",
                  margin: "0 0 34px",
                }}
              >
                Svasamm builds vertical ERPs and business platforms — running
                rice mills, hospitals and distributor networks. API-first,
                self-hostable, and configured to your workflow instead of
                forcing you into someone else&apos;s.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                  marginBottom: 40,
                }}
              >
                <Link href={SOLUTIONS} className="sv-btn sv-btn-primary sv-btn-lg">
                  Explore solutions <Icon name="ph-arrow-right" size={17} />
                </Link>
                <Link href={CONTACT} className="sv-btn sv-btn-secondary sv-btn-lg">
                  Book a walkthrough
                </Link>
              </div>
              <div style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
                {TRUST.map(([t, s]) => (
                  <div
                    key={t}
                    style={{ display: "flex", alignItems: "center", gap: 9 }}
                  >
                    <Icon
                      name="ph-check"
                      size={17}
                      style={{ color: "var(--sv-teal)", flex: "none" }}
                    />
                    <span style={{ fontSize: 14, color: "var(--sv-ink-2)" }}>
                      <strong style={{ color: "var(--sv-ink)", fontWeight: 600 }}>
                        {t}
                      </strong>
                      {s && ` · ${s}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* product-suite panel — the "it's real software" signal */}
            <div
              className="sv-card"
              style={{ padding: 0, boxShadow: "var(--sv-sh-3)", overflow: "hidden" }}
            >
              <div
                style={{
                  padding: "16px 20px",
                  borderBottom: "1px solid var(--sv-line)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  background: "var(--sv-bg-subtle)",
                }}
              >
                <span className="sv-eyebrow" style={{ margin: 0 }}>
                  On Svasamm One
                </span>
                <span className="sv-tag sv-tag-teal">{one.length} products</span>
              </div>
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
              >
                {one.map((p, i) => (
                  <ProductLink
                    key={p.id}
                    p={p}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 11,
                      padding: "15px 18px",
                      color: "var(--sv-ink)",
                      borderBottom: "1px solid var(--sv-line)",
                      borderRight: i % 2 === 0 ? "1px solid var(--sv-line)" : "none",
                    }}
                  >
                    <span style={chip(p.id, 32)}>
                      <Icon name={p.icon} size={17} />
                    </span>
                    <span style={{ minWidth: 0 }}>
                      <span style={{ display: "block", fontSize: 14.5, fontWeight: 500, lineHeight: 1.25 }}>
                        {p.name}
                      </span>
                      <span style={{ display: "block", fontSize: 12.5, color: "var(--sv-ink-3)" }}>
                        {p.short}
                      </span>
                    </span>
                  </ProductLink>
                ))}
              </div>
              <div style={{ padding: "14px 20px 4px" }}>
                <span className="sv-eyebrow" style={{ margin: 0, color: "var(--sv-ink-3)" }}>
                  Also built for clients
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, padding: "8px 20px 16px" }}>
                {also.filter((p) => p.kind !== "service").map((p) => (
                  <ProductLink
                    key={p.id}
                    p={p}
                    className="sv-tag sv-tag-outline"
                    style={{ fontSize: 13, textTransform: "none", letterSpacing: 0 }}
                  >
                    {p.name}
                  </ProductLink>
                ))}
              </div>
              <div
                style={{
                  borderTop: "1px solid var(--sv-line)",
                  padding: "14px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--sv-mono)",
                    fontSize: 12,
                    color: "var(--sv-ink-3)",
                  }}
                >
                  One login · API-first · Self-hostable
                </span>
                <Link
                  href={SOLUTIONS}
                  style={{
                    fontSize: 13.5,
                    fontWeight: 500,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  All solutions <Icon name="ph-arrow-right" size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS — the Svasamm One products once, each with its real screen; the rest below */}
        <section
          id="products"
          style={{
            padding: "88px 0",
            background: "var(--sv-bg-subtle)",
            borderTop: "1px solid var(--sv-line)",
            borderBottom: "1px solid var(--sv-line)",
          }}
        >
          <div className="sv-wrap">
            <div className="sv-eyebrow">Our solutions</div>
            <h2 style={{ margin: "0 0 36px" }}>One platform, purpose-built products</h2>
            <div
              className="sv-two"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
            >
              {one.map((p) => {
                const c = ONE[p.id];
                return (
                  <ProductLink
                    key={p.id}
                    p={p}
                    className="sv-card sv-card-i"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: 0,
                      overflow: "hidden",
                      color: "var(--sv-ink)",
                      borderTop: `4px solid ${c.fill}`,
                    }}
                  >
                    <img
                      src={c.screen}
                      alt={c.caption}
                      loading="lazy"
                      style={{
                        display: "block",
                        width: "100%",
                        aspectRatio: "12 / 5",
                        objectFit: "cover",
                        objectPosition: "top left",
                        borderBottom: "1px solid var(--sv-line)",
                      }}
                    />
                    <div style={{ padding: 22, display: "flex", flexDirection: "column", flex: 1, gap: 8 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                        <span style={chip(p.id, 30)}>
                          <Icon name={p.icon} size={16} />
                        </span>
                        <h3 style={{ fontSize: 20, margin: 0 }}>{p.name}</h3>
                        <span
                          className="sv-tag"
                          style={{ marginLeft: "auto", color: c.ink, background: c.wash, borderColor: c.wash }}
                        >
                          {p.badge ?? p.short}
                        </span>
                      </div>
                      <p className="sv-muted" style={{ fontSize: 15, lineHeight: 1.55, flex: 1, margin: 0 }}>
                        {p.blurb}
                      </p>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          fontWeight: 500,
                          fontSize: 15,
                          color: c.ink,
                        }}
                      >
                        {p.cta} <Icon name={p.ctaIcon} size={14} />
                      </span>
                    </div>
                  </ProductLink>
                );
              })}
            </div>
            <div className="sv-eyebrow" style={{ margin: "40px 0 12px", color: "var(--sv-ink-3)" }}>
              Also built for clients
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 12,
              }}
            >
              {also.map((p) => (
                <ProductLink
                  key={p.id}
                  p={p}
                  className="sv-card sv-card-i"
                  style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", color: "var(--sv-ink)" }}
                >
                  <Icon name={p.icon} size={18} style={{ color: "var(--sv-ink-3)", flex: "none" }} />
                  <span style={{ minWidth: 0 }}>
                    <span style={{ display: "block", fontWeight: 600, fontSize: 15 }}>{p.name}</span>
                    <span style={{ display: "block", fontSize: 13.5, color: "var(--sv-ink-3)" }}>{p.short}</span>
                  </span>
                </ProductLink>
              ))}
            </div>
          </div>
        </section>

        {/* REGIONS */}
        <section id="regions" style={{ padding: "88px 0" }}>
          <div
            className="sv-wrap sv-two"
            style={{
              display: "grid",
              gridTemplateColumns: ".85fr 1.15fr",
              gap: 52,
              alignItems: "start",
            }}
          >
            <div>
              <div className="sv-eyebrow">Where we work</div>
              <h2 style={{ margin: "0 0 16px", maxWidth: "18ch" }}>
                Rooted in West Bengal, deploying across India
              </h2>
              <p
                className="sv-muted"
                style={{ fontSize: 16, margin: "0 0 22px" }}
              >
                Headquartered in Konnagar, Hooghly, we understand state-specific
                procurement and compliance first-hand — from West Bengal e-Paddy
                to CMR obligations across the eastern belt — and deploy pan-India
                and for global teams.
              </p>
              <div
                className="sv-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 13,
                  padding: "16px 18px",
                }}
              >
                <span className="sv-chip sv-chip-sm">
                  <Icon name="ph-map-pin" size={18} />
                </span>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600 }}>
                    {BUSINESS.addressShort[0]}
                  </div>
                  <div style={{ fontSize: 13.5, color: "var(--sv-ink-3)" }}>
                    {BUSINESS.addressShort[1]}
                  </div>
                </div>
              </div>
            </div>
            {/* On a phone the table is wider than the card: it scrolls, the page does not. */}
            <div className="sv-card" style={{ padding: "6px 8px", overflowX: "auto" }}>
              <table className="sv-table">
                <thead>
                  <tr>
                    <th>Region</th>
                    <th>Status</th>
                    <th>Coverage</th>
                  </tr>
                </thead>
                <tbody>
                  {REGIONS.map((r) => (
                    <tr key={r.name}>
                      <td style={{ fontWeight: 600, whiteSpace: "nowrap" }}>
                        {r.name}
                      </td>
                      <td>
                        <span className={`sv-tag ${svTag(r.tagClass)}`}>
                          {r.status}
                        </span>
                      </td>
                      <td
                        style={{
                          fontSize: 14,
                          color: "var(--sv-ink-2)",
                          lineHeight: 1.5,
                        }}
                      >
                        {r.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section
          id="why"
          style={{
            padding: "88px 0",
            background: "var(--sv-bg-subtle)",
            borderTop: "1px solid var(--sv-line)",
            borderBottom: "1px solid var(--sv-line)",
          }}
        >
          <div className="sv-wrap">
            <div style={{ maxWidth: "60ch", marginBottom: 44 }}>
              <div className="sv-eyebrow">Why Svasamm</div>
              <h2 style={{ margin: "0 0 14px" }}>
                Engineered for teams that evaluate carefully
              </h2>
              <p className="sv-muted" style={{ fontSize: 17, margin: 0 }}>
                No black boxes and no per-seat traps — the properties technical
                buyers actually check.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(258px,1fr))",
                gap: 20,
              }}
            >
              {WHYS.map((w) => (
                <div key={w.title} className="sv-card" style={{ padding: 26 }}>
                  <span className="sv-chip" style={{ marginBottom: 18 }}>
                    <Icon name={w.icon} size={22} />
                  </span>
                  <h3 style={{ margin: "0 0 9px", fontSize: 19 }}>{w.title}</h3>
                  <p
                    className="sv-muted"
                    style={{ fontSize: 14.5, lineHeight: 1.6, margin: 0 }}
                  >
                    {w.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BAND — navy deep field */}
        <section style={{ padding: "88px 0" }}>
          <div className="sv-wrap">
            <div
              className="sv-field-deep"
              style={{ padding: "66px 48px", textAlign: "center" }}
            >
              <h2 style={{ margin: "0 auto 16px", maxWidth: "22ch" }}>
                Tell us what you run. We&apos;ll show you the fit.
              </h2>
              <p
                style={{
                  fontSize: 17,
                  color: "rgba(255,255,255,.72)",
                  margin: "0 auto 34px",
                  maxWidth: "56ch",
                }}
              >
                A short walkthrough with the people who build the software — not
                a sales script. We&apos;ll map your workflow to a product and be
                honest about where it fits.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link href={CONTACT} className="sv-btn sv-btn-inv sv-btn-lg">
                  Book a walkthrough <Icon name="ph-arrow-right" size={17} />
                </Link>
                <Link
                  href={SOLUTIONS}
                  className="sv-btn sv-btn-inv-outline sv-btn-lg"
                >
                  Browse all solutions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
