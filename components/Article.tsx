import Link from "next/link";
import { Icon } from "./Icon";
import FaqAccordion from "./FaqAccordion";
import { toRoute } from "@/lib/routes";
import { HERO_SLUGS } from "@/lib/heroes";
import type { Article, Block, ListItem } from "@/lib/types";
import { ONE, GUIDE_SCREEN } from "@/lib/site";
import { anchor, relatedCards } from "@/lib/resources";
import ProductLogo from "./ProductLogo";

const CONTACT = toRoute("Contact.dc.html");

// **words** in an article's text render bold, so the point of a paragraph is seen at a glance.
// Body text only — titles, meta descriptions and the JSON-LD/FAQ markup stay plain.
function rich(text: string): React.ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.length === 1
    ? text
    : parts.map((part, i) => (i % 2 ? <strong key={i} style={{ fontWeight: 600, color: "var(--sv-ink)" }}>{part}</strong> : part));
}

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
        {rich(t)}
      </span>
    </li>
  );
}

function BlockView({ b }: { b: Block }) {
  const heading = b.h ? (
    <h2 id={anchor(b.h)} style={{ fontSize: 27, margin: "40px 0 14px", scrollMarginTop: 90 }}>{b.h}</h2>
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
        {rich(b.text)}
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
        {rich(b.text)}
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
                {r.map((c, j) =>
                  j === 0 ? (
                    <th key={j} scope="row">{rich(c)}</th>
                  ) : (
                    <td key={j} style={{ fontSize: 14.5, color: "var(--sv-ink-2)", lineHeight: 1.55 }}>
                      {rich(c)}
                    </td>
                  ),
                )}
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
  const one = ONE[a.parentProduct];
  const screen = one && (GUIDE_SCREEN[a.slug] ?? one.page ?? one.card);
  const contents = a.sections.map((b) => (b as { h?: string }).h).filter((h): h is string => !!h);
  const next = relatedCards(a);
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
          {/* No photo: the copy takes the reading width. 40ch with a 20ch title squeezed a
              long title into four lines on the left half of an empty hero (8 Oct 2026). */}
          <div style={hasHero ? undefined : { maxWidth: 820 }}>
            <span className="sv-tag sv-tag-brand" style={{ marginBottom: 20 }}>
              {a.eyebrow}
            </span>
            <h1 style={{ fontSize: "clamp(30px, 7.5vw, 42px)", maxWidth: hasHero ? "20ch" : "32ch", margin: "0 0 16px" }}>
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

      {/* Body — data-read: components/Tracker.tsx measures reading depth against it */}
      <section data-read style={{ padding: "56px 0 40px" }}>
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
          {contents.length >= 3 && (
            <nav aria-label="In this post" className="sv-card" style={{ padding: "18px 22px", margin: "26px 0 6px" }}>
              <div className="sv-eyebrow" style={{ marginBottom: 10 }}>In this post</div>
              <ol style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6, fontSize: 15, lineHeight: 1.45 }}>
                {contents.map((h) => (
                  <li key={h}><a href={`#${anchor(h)}`} style={{ color: "var(--sv-ink-2)" }}>{h}</a></li>
                ))}
              </ol>
            </nav>
          )}
          {a.sections.map((b, i) => (
            <BlockView key={i} b={b} />
          ))}

          {/* CTA card. A guide about a Svasamm One product ends on that product: its
              logo, its colour and its real screen — the reader has just read the problem. */}
          <div
            className="sv-card"
            style={{
              padding: 30,
              margin: "40px 0 8px",
              ...(one && { borderTop: `4px solid ${one.fill}` }),
            }}
          >
            {one && (
              <div style={{ marginBottom: 16 }}>
                <ProductLogo id={a.parentProduct} size={18} />
              </div>
            )}
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
            {screen && (
              <img
                src={screen.src}
                alt={screen.caption}
                loading="lazy"
                style={{
                  display: "block",
                  width: "100%",
                  marginTop: 24,
                  border: "1px solid var(--sv-line)",
                  borderRadius: "var(--sv-r)",
                }}
              />
            )}
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
          {next.length > 0 && (
            <div style={{ borderTop: "1px solid var(--sv-line)", paddingTop: 28 }}>
              <div className="sv-eyebrow">Read next</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
                {next.map((c) => (
                  <Link key={c.slug} href={c.href} className="sv-card sv-card-i" data-evt="Related Click" data-evt-loc={c.slug}
                    style={{ padding: 20, display: "flex", flexDirection: "column", gap: 8, color: "var(--sv-ink)" }}>
                    <span className="sv-eyebrow" style={{ margin: 0, fontSize: 11 }}>{c.categoryLabel}</span>
                    <span style={{ fontWeight: 600, fontSize: 16, lineHeight: 1.35, flex: 1 }}>{c.title}</span>
                    <span style={{ fontFamily: "var(--sv-mono)", fontSize: 12, color: "var(--sv-ink-3)" }}>{c.minutes} min read</span>
                  </Link>
                ))}
              </div>
              <Link href="/resources" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 18, fontWeight: 500, fontSize: 14.5 }}>
                All guides <Icon name="ph-arrow-right" size={14} />
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
