import Link from "next/link";
import { Icon } from "./Icon";
import FaqAccordion from "./FaqAccordion";
import { toRoute } from "@/lib/routes";
import { HERO_SLUGS } from "@/lib/heroes";
import type { Article, Block, ListItem } from "@/lib/types";

const CONTACT = toRoute("Contact.dc.html");

function ListRow({ it }: { it: ListItem }) {
  const b = typeof it === "string" ? "" : (it.b ?? "");
  const t = typeof it === "string" ? it : (it.t ?? "");
  return (
    <li
      style={{
        display: "flex",
        gap: 11,
        fontSize: 16,
        lineHeight: 1.65,
        color: "var(--sv-ink-2)",
      }}
    >
      <Icon
        name="ph-check"
        size={16}
        style={{ color: "var(--sv-teal)", flex: "none", marginTop: 4 }}
      />
      <span>
        {b && (
          <span style={{ fontWeight: 600, color: "var(--sv-ink)" }}>{b} </span>
        )}
        {t}
      </span>
    </li>
  );
}

function BlockView({ b }: { b: Block }) {
  const heading = b.h ? (
    <h2 style={{ fontSize: 27, margin: "40px 0 14px" }}>{b.h}</h2>
  ) : null;
  let body: React.ReactNode = null;
  if (b.type === "p") {
    body = (
      <p
        style={{
          fontSize: 16.5,
          lineHeight: 1.72,
          color: "var(--sv-ink-2)",
          margin: "0 0 16px",
        }}
      >
        {b.text}
      </p>
    );
  } else if (b.type === "note") {
    body = (
      <div
        style={{
          borderLeft: "3px solid var(--sv-brand)",
          background: "var(--sv-brand-50)",
          padding: "16px 20px",
          borderRadius: "0 var(--sv-r) var(--sv-r) 0",
          margin: "0 0 18px",
          fontSize: 15.5,
          lineHeight: 1.65,
          color: "var(--sv-ink)",
        }}
      >
        {b.text}
      </div>
    );
  } else if (b.type === "list") {
    body = (
      <ul
        style={{
          margin: "0 0 18px",
          padding: 0,
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: 11,
        }}
      >
        {b.items.map((it, i) => (
          <ListRow key={i} it={it} />
        ))}
      </ul>
    );
  } else if (b.type === "table") {
    body = (
      <div
        className="sv-card"
        style={{ overflowX: "auto", margin: "0 0 20px", padding: "6px 8px" }}
      >
        <table className="sv-table">
          <thead>
            <tr>
              {b.cols.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {b.rows.map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => (
                  <td
                    key={j}
                    style={{
                      fontSize: 14.5,
                      color: "var(--sv-ink-2)",
                      lineHeight: 1.55,
                    }}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <>
      {heading}
      {body}
    </>
  );
}

type Crumb = { name: string; href: string };
// Visible breadcrumb from the verbatim BreadcrumbList JSON-LD → matches the schema exactly.
function crumbsFrom(jsonLd: object[]): Crumb[] {
  const bc = jsonLd.find(
    (b) => (b as { "@type"?: string })["@type"] === "BreadcrumbList",
  ) as { itemListElement: { name: string; item: string }[] } | undefined;
  return (bc?.itemListElement ?? []).map((el) => ({
    name: el.name,
    href: el.item.replace("https://svasamm.com", ""),
  }));
}

// Reusable long-form article body. Ports Article.dc.html onto the --sv-* design system:
// brand-50 wash hero with a framed photo (when the slug has one, else copy-only), .sv-card
// prose surfaces + note callouts, .sv-table spec tables, a light .sv-card CTA, and the shared
// flat FAQ accordion. Server-rendered except the FAQ island. SEO/JSON-LD live on the route.
export default function ArticleView({ article: a }: { article: Article }) {
  const crumbs = crumbsFrom(a.jsonLd);
  const hasHero = HERO_SLUGS.has(a.slug);
  return (
    <div>
      {/* Hero — brand-50 wash + (optional) framed photo */}
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
              flexWrap: "wrap",
            }}
          >
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <span
                  key={i}
                  style={{ display: "inline-flex", alignItems: "center", gap: 7 }}
                >
                  {isLast ? (
                    <span style={{ color: "var(--sv-ink)" }}>{c.name}</span>
                  ) : (
                    <>
                      <Link href={c.href} style={{ color: "var(--sv-ink-2)" }}>
                        {c.name}
                      </Link>
                      <Icon
                        name="ph-caret-right"
                        size={14}
                        style={{ color: "var(--sv-ink-3)" }}
                      />
                    </>
                  )}
                </span>
              );
            })}
          </div>
        </div>
        <div
          className={hasHero ? "sv-wrap pp-hero" : "sv-wrap"}
          style={{ padding: "44px 24px 60px" }}
        >
          <div style={hasHero ? undefined : { maxWidth: "40ch" }}>
            <span className="sv-tag sv-tag-brand" style={{ marginBottom: 20 }}>
              {a.eyebrow}
            </span>
            <h1 style={{ fontSize: 42, maxWidth: "20ch", margin: "0 0 16px" }}>
              {a.title}
            </h1>
            <p
              style={{
                fontSize: 14.5,
                color: "var(--sv-ink-3)",
                margin: 0,
                fontFamily: "var(--sv-mono)",
              }}
            >
              {a.byline}
            </p>
          </div>
          {hasHero && (
            <figure
              className="sv-card"
              style={{
                padding: 10,
                boxShadow: "var(--sv-sh-3)",
                overflow: "hidden",
              }}
            >
              <img
                src={`/hero/${a.slug}.webp`}
                alt=""
                loading="eager"
                style={{
                  width: "100%",
                  aspectRatio: "16 / 10",
                  objectFit: "cover",
                  borderRadius: "var(--sv-r)",
                }}
              />
              <figcaption
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 8px 4px",
                  fontFamily: "var(--sv-mono)",
                  fontSize: 12,
                  color: "var(--sv-ink-3)",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--sv-teal)",
                    flex: "none",
                  }}
                />
                {a.eyebrow}
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: "56px 0 40px" }}>
        <div className="sv-wrap" style={{ maxWidth: 800 }}>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.68,
              color: "var(--sv-ink)",
              margin: "0 0 10px",
            }}
          >
            {a.intro}
          </p>
          {a.sections.map((b, i) => (
            <BlockView key={i} b={b} />
          ))}

          {/* CTA card — light .sv-card surface */}
          <div className="sv-card" style={{ padding: 30, margin: "40px 0 8px" }}>
            <h3 style={{ fontSize: 21, margin: "0 0 10px" }}>{a.cta.title}</h3>
            <p
              style={{
                fontSize: 15.5,
                lineHeight: 1.65,
                color: "var(--sv-ink-2)",
                margin: "0 0 22px",
              }}
            >
              {a.cta.body}
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link
                href={toRoute(a.cta.productHref)}
                className="sv-btn sv-btn-primary"
              >
                {a.cta.productLabel} <Icon name="ph-arrow-right" size={16} />
              </Link>
              <Link
                href={`${CONTACT}?solution=${a.parentProduct}`}
                className="sv-btn sv-btn-secondary"
              >
                Book a free consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + Related */}
      <section style={{ padding: "8px 0 72px" }}>
        <div className="sv-wrap" style={{ maxWidth: 800 }}>
          <h2 style={{ fontSize: 28, margin: "0 0 22px" }}>
            Frequently asked questions
          </h2>
          <div style={{ marginBottom: 48 }}>
            <FaqAccordion faqs={a.faqs} />
          </div>
          <div style={{ borderTop: "1px solid var(--sv-line)", paddingTop: 28 }}>
            <div className="sv-eyebrow">Related</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {a.related.map((r, i) => (
                <Link
                  key={i}
                  href={toRoute(r.href)}
                  style={{
                    display: "flex",
                    gap: 10,
                    fontSize: 15.5,
                    lineHeight: 1.45,
                    color: "var(--sv-ink-2)",
                  }}
                >
                  <Icon
                    name="ph-arrow-right"
                    size={16}
                    style={{
                      color: "var(--sv-brand)",
                      flex: "none",
                      marginTop: 3,
                    }}
                  />
                  {r.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
