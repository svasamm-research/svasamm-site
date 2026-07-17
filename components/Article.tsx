import Link from "next/link";
import { Icon } from "./Icon";
import FaqAccordion from "./FaqAccordion";
import { toRoute } from "@/lib/routes";
import type { Article, Block, ListItem } from "@/lib/types";

const CONTACT = toRoute("Contact.dc.html");

function ListRow({ it }: { it: ListItem }) {
  const b = typeof it === "string" ? "" : it.b ?? "";
  const t = typeof it === "string" ? it : it.t ?? "";
  return (
    <li style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: 1.6, color: "var(--color-neutral-300)" }}>
      <Icon name="ph-check" weight="bold" style={{ fontSize: 14, color: "var(--color-accent-300)", flex: "none", marginTop: 4 }} />
      <span>{b && <span style={{ fontWeight: 600, color: "var(--color-text)" }}>{b} </span>}{t}</span>
    </li>
  );
}

function BlockView({ b }: { b: Block }) {
  const heading = b.h ? <h2 style={{ fontSize: 24, letterSpacing: "-.015em", color: "var(--color-text)", margin: "36px 0 12px" }}>{b.h}</h2> : null;
  let body: React.ReactNode = null;
  if (b.type === "p") {
    body = <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--color-neutral-300)", margin: "0 0 14px" }}>{b.text}</p>;
  } else if (b.type === "note") {
    body = <div style={{ borderLeft: "3px solid var(--color-accent)", background: "var(--color-surface)", padding: "14px 18px", borderRadius: "0 10px 10px 0", margin: "0 0 16px", fontSize: 14.5, lineHeight: 1.6, color: "var(--color-neutral-300)" }}>{b.text}</div>;
  } else if (b.type === "list") {
    body = (
      <ul style={{ margin: "0 0 16px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
        {b.items.map((it, i) => <ListRow key={i} it={it} />)}
      </ul>
    );
  } else if (b.type === "table") {
    body = (
      <div style={{ overflowX: "auto", margin: "0 0 18px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead><tr>{b.cols.map((c, i) => (
            <th key={i} style={{ textAlign: "left", padding: "11px 14px", borderBottom: "1px solid var(--color-neutral-700)", color: "var(--color-accent-200)", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 12.5, letterSpacing: ".02em" }}>{c}</th>
          ))}</tr></thead>
          <tbody>{b.rows.map((r, i) => (
            <tr key={i}>{r.map((c, j) => (
              <td key={j} style={{ padding: "11px 14px", borderBottom: "1px solid var(--color-divider)", color: "var(--color-neutral-300)", lineHeight: 1.5 }}>{c}</td>
            ))}</tr>
          ))}</tbody>
        </table>
      </div>
    );
  }
  return <>{heading}{body}</>;
}

type Crumb = { name: string; href: string };
// Visible breadcrumb from the verbatim BreadcrumbList JSON-LD → matches the schema exactly.
function crumbsFrom(jsonLd: object[]): Crumb[] {
  const bc = jsonLd.find((b) => (b as { "@type"?: string })["@type"] === "BreadcrumbList") as
    | { itemListElement: { name: string; item: string }[] } | undefined;
  return (bc?.itemListElement ?? []).map((el) => ({
    name: el.name,
    href: el.item.replace("https://svasamm.com", ""),
  }));
}

// Reusable long-form article body. Mirrors prototypes/Article.dc.html. Server-rendered
// except the FAQ accordion (client island).
export default function ArticleView({ article: a }: { article: Article }) {
  const crumbs = crumbsFrom(a.jsonLd);
  return (
    <div>
      {/* Header */}
      <section className="pp-glow" style={{ borderBottom: "1px solid var(--color-divider)" }}>
        <div className="pp-wrap" style={{ padding: "30px 24px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "var(--color-neutral-500)", flexWrap: "wrap" }}>
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  {isLast ? (
                    <span style={{ color: "var(--color-text)" }}>{c.name}</span>
                  ) : (
                    <>
                      <Link href={c.href} style={{ color: "var(--color-neutral-400)" }}>{c.name}</Link>
                      <Icon name="ph-caret-right" style={{ fontSize: 11 }} />
                    </>
                  )}
                </span>
              );
            })}
          </div>
        </div>
        <div className="pp-wrap ar-body" style={{ maxWidth: 820, padding: "40px 24px 52px" }}>
          <div className="tag tag-outline" style={{ marginBottom: 20 }}>{a.eyebrow}</div>
          <h1 style={{ fontSize: 40, lineHeight: 1.1, letterSpacing: "-.025em", margin: "0 0 14px", color: "var(--color-text)" }}>{a.title}</h1>
          <p style={{ fontSize: 14, color: "var(--color-neutral-500)", margin: 0 }}>{a.byline}</p>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: "48px 0 40px" }}>
        <div className="pp-wrap ar-body" style={{ maxWidth: 820 }}>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--color-neutral-200)", margin: "0 0 8px" }}>{a.intro}</p>
          {a.sections.map((b, i) => <BlockView key={i} b={b} />)}

          {/* CTA card */}
          <div className="pp-glow" style={{ border: "1px solid var(--color-neutral-800)", borderRadius: 16, padding: "28px", background: "var(--color-surface)", margin: "34px 0 8px" }}>
            <h2 style={{ fontSize: 20, letterSpacing: "-.01em", margin: "0 0 8px", color: "var(--color-text)" }}>{a.cta.title}</h2>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--color-neutral-300)", margin: "0 0 18px" }}>{a.cta.body}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href={toRoute(a.cta.productHref)} className="btn btn-primary" style={{ fontSize: 14 }}>{a.cta.productLabel} <Icon name="ph-arrow-right" weight="bold" style={{ fontSize: 13 }} /></Link>
              <Link href={CONTACT} className="btn btn-secondary" style={{ fontSize: 14 }}>Book a free consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + Related */}
      <section style={{ padding: "8px 0 64px" }}>
        <div className="pp-wrap ar-body" style={{ maxWidth: 820 }}>
          <h2 style={{ fontSize: 24, letterSpacing: "-.015em", margin: "0 0 18px", color: "var(--color-text)" }}>Frequently asked questions</h2>
          <div style={{ marginBottom: 44 }}>
            <FaqAccordion faqs={a.faqs} />
          </div>
          <div style={{ borderTop: "1px solid var(--color-divider)", paddingTop: 26 }}>
            <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: 14 }}>Related</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {a.related.map((r, i) => (
                <Link key={i} href={toRoute(r.href)} className="pp-link" style={{ display: "flex", gap: 9, fontSize: 14.5, lineHeight: 1.4 }}>
                  <Icon name="ph-arrow-right" style={{ color: "var(--color-accent-300)", flex: "none", marginTop: 3 }} />{r.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
