import Link from "next/link";
import { Icon } from "./Icon";
import { HOME_PRODUCTS, type HomeProduct } from "@/lib/home";
import { toRoute } from "@/lib/routes";

const CONTACT = toRoute("Contact.dc.html");
const vertical = HOME_PRODUCTS.filter((p) => p.kind === "vertical");
const platform = HOME_PRODUCTS.filter((p) => p.kind === "platform");
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
            Vertical products carry an entire industry&apos;s workflow inside;
            platform modules are the horizontal systems every operation runs;
            and Svasamm Digital services get your facility found online. Open any
            of them for the full detail.
          </p>
        </div>
      </section>

      {/* Vertical products */}
      <section style={{ padding: "64px 0 36px" }}>
        <div className="sv-wrap">
          <div className="sv-eyebrow">Vertical products</div>
          <div
            className="sv-two"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
              gap: 20,
            }}
          >
            {vertical.map((p) => (
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
                    <span className="sv-tag sv-tag-brand">{p.badge}</span>
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

      {/* Platform modules */}
      <section style={{ padding: "28px 0 36px" }}>
        <div className="sv-wrap">
          <div className="sv-eyebrow">Platform modules</div>
          <div
            className="sv-two"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
              gap: 20,
            }}
          >
            {platform.map((p) => (
              <ProductAnchor
                key={p.id}
                p={p}
                className="sv-card sv-card-i"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 24,
                  color: "var(--sv-ink)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: 18,
                  }}
                >
                  <span className="sv-chip">
                    <Icon name={p.icon} size={22} />
                  </span>
                  <span className="sv-tag sv-tag-outline">Platform</span>
                </div>
                <h2 style={{ fontSize: 19, margin: "0 0 8px" }}>{p.name}</h2>
                <p
                  className="sv-muted"
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    flex: 1,
                    margin: "0 0 16px",
                  }}
                >
                  {p.blurb}
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--sv-brand)",
                  }}
                >
                  {p.cta} <Icon name="ph-arrow-right" size={15} />
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
