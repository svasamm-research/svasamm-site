import Link from "next/link";
import { Icon } from "./Icon";
import { HOME_PRODUCTS, type HomeProduct } from "@/lib/home";
import { toRoute } from "@/lib/routes";
import { ONE } from "@/lib/site";
import ProductLogo from "./ProductLogo";

const CONTACT = toRoute("Contact.dc.html");
// The same three groups as the menu: Svasamm One, also built for clients, services.
const one = HOME_PRODUCTS.filter((p) => ONE[p.id]);
const also = HOME_PRODUCTS.filter((p) => !ONE[p.id] && p.kind !== "service");
const service = HOME_PRODUCTS.filter((p) => p.kind === "service");

// Map the data's legacy tag classes to the --sv-* signal tags.
const svTag = (cls: string) =>
  cls.includes("accent")
    ? "sv-tag-brand"
    : cls.includes("outline")
      ? "sv-tag-outline"
      : "sv-tag";

function ProductAnchor({
  p,
  children,
  className,
  style,
}: {
  p: HomeProduct;
  children: React.ReactNode;
  className: string;
  style: React.CSSProperties;
}) {
  return p.external ? (
    <a
      href={p.href}
      target="_blank"
      rel="noopener"
      className={className}
      style={style}
    >
      {children}
    </a>
  ) : (
    <Link href={p.href} className={className} style={style}>
      {children}
    </Link>
  );
}

// Solutions page body — ports Solutions.dc.html onto the --sv-* design system.
// Reuses the shared home product list; keeps our IA (extra Services group + CTA route).
export default function SolutionsPage() {
  return (
    <>
      {/* Hero — brand-50 radial wash */}
      <section
        className="pp-hero-wash"
        style={{ borderBottom: "1px solid var(--sv-line)" }}
      >
        <div className="sv-wrap" style={{ padding: "22px 24px 0" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              fontSize: 13.5,
              color: "var(--sv-ink-3)",
            }}
          >
            <Link href="/" style={{ color: "var(--sv-ink-2)" }}>
              Home
            </Link>
            <Icon name="ph-caret-right" size={14} />
            <span style={{ color: "var(--sv-ink)" }}>Solutions</span>
          </div>
        </div>
        <div
          className="sv-wrap"
          style={{ padding: "44px 24px 60px", maxWidth: 820 }}
        >
          <span className="sv-tag sv-tag-brand" style={{ marginBottom: 20 }}>
            All solutions
          </span>
          <h1 style={{ margin: "0 0 18px", maxWidth: "18ch" }}>
            Every Svasamm product, in one place
          </h1>
          <p
            className="sv-muted"
            style={{
              fontSize: 18,
              lineHeight: 1.62,
              margin: 0,
              maxWidth: "56ch",
            }}
          >
            The Svasamm One products carry an industry&apos;s workflow inside —
            rice mills, CA firms, hospitals and payroll. We have also built
            systems for clients, and Svasamm Digital gets your facility found
            online. Open any of them for the full detail.
          </p>
        </div>
      </section>

      {/* Svasamm One — each product in its own logo, colour and real screen, as on the home page */}
      <section style={{ padding: "64px 0 36px" }}>
        <div className="sv-wrap">
          <div className="sv-eyebrow">Svasamm One products</div>
          <div className="sv-two" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(420px,1fr))", gap: 20 }}>
            {one.map((p) => {
              const c = ONE[p.id];
              return (
                <ProductAnchor key={p.id} p={p} className="sv-card sv-card-i"
                  style={{ display: "flex", flexDirection: "column", padding: 0, overflow: "hidden", color: "var(--sv-ink)", borderTop: `4px solid ${c.fill}` }}>
                  <img src={c.card.src} alt={c.card.caption} loading="lazy"
                    style={{ display: "block", width: "100%", aspectRatio: "12 / 5", objectFit: "cover", objectPosition: "top left", borderBottom: "1px solid var(--sv-line)" }} />
                  <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                      <h2 style={{ margin: 0, lineHeight: 0 }}><ProductLogo id={p.id} size={20} /></h2>
                      <span className="sv-tag" style={{ marginLeft: "auto", color: c.ink, background: c.wash, borderColor: c.wash }}>{p.badge ?? p.short}</span>
                    </div>
                    <p className="sv-muted" style={{ fontSize: 14.5, lineHeight: 1.6, flex: 1, margin: 0 }}>{p.blurb}</p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 14.5, fontWeight: 500, color: c.ink }}>
                      {p.cta} <Icon name={p.ctaIcon} size={15} />
                    </span>
                  </div>
                </ProductAnchor>
              );
            })}
          </div>
        </div>
      </section>

      {/* Also built for clients */}
      <section style={{ padding: "28px 0 36px" }}>
        <div className="sv-wrap">
          <div className="sv-eyebrow">Also built for clients</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 16 }}>
            {also.map((p) => (
              <ProductAnchor key={p.id} p={p} className="sv-card sv-card-i"
                style={{ display: "flex", flexDirection: "column", gap: 10, padding: 22, color: "var(--sv-ink)" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Icon name={p.icon} size={20} style={{ color: "var(--sv-ink-3)", flex: "none" }} />
                  <h2 style={{ fontSize: 18, margin: 0 }}>{p.name}</h2>
                </span>
                <p className="sv-muted" style={{ fontSize: 14, lineHeight: 1.55, flex: 1, margin: 0 }}>{p.blurb}</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 500, color: "var(--sv-brand)" }}>
                  {p.cta} <Icon name={p.ctaIcon} size={14} />
                </span>
              </ProductAnchor>
            ))}
          </div>
        </div>
      </section>

      {/* Services (our IA — Svasamm Digital) */}
      <section style={{ padding: "28px 0 64px" }}>
        <div className="sv-wrap">
          <div className="sv-eyebrow">Services</div>
          <div
            className="sv-two"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
              gap: 20,
            }}
          >
            {service.map((p) => (
              <ProductAnchor
                key={p.id}
                p={p}
                className="sv-card sv-card-i"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 26,
                  color: "var(--sv-ink)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    marginBottom: 16,
                  }}
                >
                  <span className="sv-chip">
                    <Icon name={p.icon} size={22} />
                  </span>
                  <div>
                    <h2 style={{ fontSize: 21, margin: "0 0 5px" }}>{p.name}</h2>
                    <span className={`sv-tag ${svTag(p.tagClass)}`}>
                      {p.tag}
                    </span>
                  </div>
                </div>
                <p
                  className="sv-muted"
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    flex: 1,
                    margin: "0 0 18px",
                  }}
                >
                  {p.blurb}
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    fontSize: 14.5,
                    fontWeight: 500,
                    color: "var(--sv-brand)",
                  }}
                >
                  {p.cta} <Icon name={p.ctaIcon} size={15} />
                </span>
              </ProductAnchor>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — navy deep field */}
      <section style={{ padding: "8px 0 88px" }}>
        <div className="sv-wrap">
          <div
            className="sv-field-deep"
            style={{
              padding: "52px 44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            <div style={{ maxWidth: "52ch" }}>
              <h2 style={{ fontSize: 30, margin: "0 0 10px" }}>
                Not sure which fits?
              </h2>
              <p
                style={{
                  fontSize: 16.5,
                  color: "rgba(255,255,255,.72)",
                  margin: 0,
                }}
              >
                Describe your operation and we&apos;ll point you to the right
                product — or tell you honestly if we&apos;re not the fit.
              </p>
            </div>
            <Link href={CONTACT} className="sv-btn sv-btn-inv sv-btn-lg">
              Talk to us <Icon name="ph-arrow-right" size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
