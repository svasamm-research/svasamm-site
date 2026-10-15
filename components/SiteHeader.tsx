"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "./IconClient";
import { PRODUCTS, ONE, INDUSTRIES, RESOURCE_GROUPS, type NavProduct } from "@/lib/site";

const one = PRODUCTS.filter((p) => ONE[p.id]);
const also = PRODUCTS.filter((p) => !ONE[p.id]);

// Sign in goes to the one Svasamm One app. The link says which site sent the person
// (utm_source) so the app can count it; the click is counted here too, in GA4 and
// Plausible, as "Sign In Click" with { site, location } — the same event T4Suite's site
// sends with its own name, so one report splits sign-ins by site.
const SITE = "svasamm.com";
const signInHref = (where: string) =>
  `https://app.svasamm.com/?utm_source=${SITE}&utm_medium=website&utm_campaign=sign_in&utm_content=${where}`;
function signInClick(where: string) {
  window.gtag?.("event", "sign_in_click", { site: SITE, location: where });
  // "Sign In Click" must be a Goal in the Plausible dashboard to show up.
  window.plausible?.("Sign In Click", { props: { site: SITE, location: where } });
}

const Dot = ({ c }: { c: string }) => (
  <span style={{ width: 10, height: 10, borderRadius: "50%", background: c, flex: "none" }} />
);

function ProductLink({
  p,
  className,
  style,
  children,
}: {
  p: NavProduct;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  if (p.external) {
    return (
      <a
        href={p.href}
        target="_blank"
        rel="noopener"
        className={className}
        style={style}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={p.href} className={className} style={style}>
      {children}
    </Link>
  );
}

// A mega-menu item (icon chip + name + desc); a Svasamm One product wears its own colour.
function MegaItem({ p }: { p: NavProduct }) {
  return (
    <ProductLink
      p={p}
      className="svh-item"
      style={{ display: "flex", gap: 12, padding: 11, color: "var(--sv-ink)" }}
    >
      <span
        className="sv-chip sv-chip-sm"
        style={ONE[p.id] ? { background: ONE[p.id].fill, borderColor: ONE[p.id].fill, color: ONE[p.id].on } : undefined}
      >
        <Icon name={p.icon} size={18} />
      </span>
      <span style={{ display: "block" }}>
        <span
          style={{
            display: "block",
            fontWeight: 600,
            fontSize: 15,
            lineHeight: 1.3,
          }}
        >
          {p.name}
          {p.external ? " ↗" : ""}
        </span>
        <span
          style={{
            display: "block",
            fontSize: 13,
            color: "var(--sv-ink-3)",
            lineHeight: 1.4,
          }}
        >
          {p.desc}
        </span>
      </span>
    </ProductLink>
  );
}

export default function SiteHeader({ active = "" }: { active?: string }) {
  const [mega, setMega] = useState(false);
  const [res, setRes] = useState(false);
  const [mobile, setMobile] = useState(false);

  const solActive = mega || active === "solutions" || active === "products";
  const navColor = (on: boolean) => (on ? "var(--sv-ink)" : "var(--sv-ink-2)");

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "rgba(255,255,255,.88)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--sv-line)",
      }}
    >
      <div
        className="sv-wrap flex items-center"
        style={{ gap: 26, height: 68 }}
      >
        <Link
          href="/"
          className="flex items-center"
          style={{ gap: 10, color: "var(--sv-ink)" }}
        >
          <Image
            src="/assets/logo-svasamm.svg"
            alt="Svasamm"
            width={32}
            height={32}
            style={{ borderRadius: 7 }}
            priority
          />
          <span
            style={{
              fontWeight: 600,
              fontSize: 20,
              letterSpacing: "-.02em",
              color: "var(--sv-ink)",
            }}
          >
            Svasamm
          </span>
        </Link>

        {/* desktop nav */}
        <nav
          className="hidden mob:flex items-center"
          style={{ gap: 26, marginLeft: 10 }}
        >
          <div
            className="relative"
            onMouseEnter={() => setMega(true)}
            onMouseLeave={() => setMega(false)}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                setMega((v) => !v);
              }}
              className="inline-flex items-center border-0 bg-transparent cursor-pointer"
              style={{
                gap: 5,
                fontWeight: 500,
                fontSize: 15,
                padding: "10px 0",
                color: navColor(solActive),
              }}
              aria-expanded={mega}
              aria-haspopup="true"
              aria-controls="svh-solutions-menu"
            >
              Solutions
              <Icon
                name="ph-caret-down"
                size={15}
                style={{
                  transition: "transform .2s ease",
                  transform: mega ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>
            {mega && (
              // Transparent bridge: keeps the 12px gap hoverable so the menu
              // doesn't close while the pointer travels from trigger to panel.
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: -18,
                  paddingTop: 12,
                  zIndex: 20,
                }}
              >
              <div
                className="sv-card"
                id="svh-solutions-menu"
                style={{
                  width: "min(900px, calc(100vw - 220px))",
                  padding: 10,
                  boxShadow: "var(--sv-sh-3)",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 8,
                }}
              >
                <div style={{ padding: 12 }}>
                  <div className="sv-eyebrow" style={{ marginBottom: 10 }}>
                    By industry
                  </div>
                  <div className="flex flex-col" style={{ gap: 2 }}>
                    {INDUSTRIES.map((i) => {
                      const st: React.CSSProperties = { display: "flex", alignItems: "center", gap: 11, padding: "9px 10px", color: "var(--sv-ink)" };
                      const inner = (
                        <>
                          <Dot c={i.product ? ONE[i.product].fill : "var(--sv-line-strong)"} />
                          <span style={{ display: "block" }}>
                            <span style={{ display: "block", fontWeight: 600, fontSize: 15, lineHeight: 1.3 }}>
                              {i.name}
                            </span>
                            <span style={{ display: "block", fontSize: 13, color: "var(--sv-ink-3)", lineHeight: 1.4 }}>
                              {i.to}
                              {i.external ? " ↗" : ""}
                            </span>
                          </span>
                        </>
                      );
                      return i.external ? (
                        <a key={i.name} href={i.href} target="_blank" rel="noopener" className="svh-item" style={st}>{inner}</a>
                      ) : (
                        <Link key={i.name} href={i.href} className="svh-item" style={st}>{inner}</Link>
                      );
                    })}
                  </div>
                </div>
                <div style={{ padding: 12 }}>
                  <div className="sv-eyebrow" style={{ marginBottom: 10 }}>
                    Svasamm One products
                  </div>
                  <div className="flex flex-col" style={{ gap: 2 }}>
                    {one.map((p) => (
                      <MegaItem key={p.id} p={p} />
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    padding: 12,
                    background: "var(--sv-bg-subtle)",
                    borderRadius: "var(--sv-r)",
                  }}
                >
                  <div className="sv-eyebrow" style={{ marginBottom: 10 }}>
                    Also built for clients
                  </div>
                  <div className="flex flex-col" style={{ gap: 2 }}>
                    {also.map((p) => (
                      <ProductLink
                        key={p.id}
                        p={p}
                        className="svh-item"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 9,
                          padding: "8px 10px",
                          color: "var(--sv-ink)",
                          fontSize: 14,
                        }}
                      >
                        <Icon
                          name={p.icon}
                          size={17}
                          style={{ color: "var(--sv-ink-3)", flex: "none" }}
                        />
                        {p.name}
                      </ProductLink>
                    ))}
                  </div>
                  <Link
                    href="/pages/services.html"
                    className="inline-flex items-center"
                    style={{
                      gap: 6,
                      marginTop: 16,
                      paddingLeft: 10,
                      fontSize: 14,
                      fontWeight: 500,
                      color: "var(--sv-brand)",
                    }}
                  >
                    View all solutions <Icon name="ph-arrow-right" size={15} />
                  </Link>
                </div>
              </div>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setRes(true)}
            onMouseLeave={() => setRes(false)}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                setRes((v) => !v);
              }}
              className="inline-flex items-center border-0 bg-transparent cursor-pointer"
              style={{
                gap: 5,
                fontWeight: 500,
                fontSize: 15,
                padding: "10px 0",
                color: navColor(res),
              }}
              aria-expanded={res}
              aria-haspopup="true"
              aria-controls="svh-resources-menu"
            >
              Resources
              <Icon
                name="ph-caret-down"
                size={15}
                style={{
                  transition: "transform .2s ease",
                  transform: res ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>
            {res && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: -18,
                  paddingTop: 12,
                  zIndex: 20,
                }}
              >
              <div
                className="sv-card"
                id="svh-resources-menu"
                style={{
                  width: 720,
                  padding: 10,
                  boxShadow: "var(--sv-sh-3)",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 8,
                }}
              >
                {RESOURCE_GROUPS.map((g) => (
                  <div key={g.heading} style={{ padding: 12 }}>
                    <div className="sv-eyebrow" style={{ marginBottom: 10 }}>
                      {g.heading}
                    </div>
                    <div className="flex flex-col" style={{ gap: 2 }}>
                      {g.links.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          className="svh-item"
                          style={{
                            display: "block",
                            padding: "8px 10px",
                            fontSize: 13.5,
                            color: "var(--sv-ink-2)",
                            lineHeight: 1.35,
                          }}
                        >
                          {l.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <Link
                  href="/resources"
                  className="inline-flex items-center"
                  style={{ gridColumn: "1 / -1", gap: 6, padding: "4px 12px 10px", fontSize: 14, fontWeight: 500, color: "var(--sv-brand)" }}
                >
                  All guides <Icon name="ph-arrow-right" size={15} />
                </Link>
              </div>
              </div>
            )}
          </div>
          <Link
            href="/pages/contact.html"
            style={{
              fontWeight: 500,
              fontSize: 15,
              color: navColor(active === "contact"),
            }}
          >
            Contact
          </Link>
        </nav>

        <div className="ml-auto flex items-center" style={{ gap: 10 }}>
          {/* The wrapper hides it on a phone (it is in the menu there): .sv-btn is unlayered
              CSS and beats Tailwind's `hidden` on the link itself. */}
          <span className="hidden sm:inline-flex">
            <a
              href={signInHref("header")}
              onClick={() => signInClick("header")}
              className="sv-btn sv-btn-secondary"
              style={{ fontSize: 14, padding: "10px 16px" }}
            >
              Sign in
            </a>
          </span>
          <Link
            href="/pages/contact.html"
            className="sv-btn sv-btn-primary hidden mob:inline-flex"
            style={{ fontSize: 14, padding: "10px 16px" }}
          >
            Talk to us
          </Link>
          <button
            className="mob:hidden grid place-items-center"
            style={{
              background: "none",
              border: "1px solid var(--sv-line-strong)",
              borderRadius: "var(--sv-r-sm)",
              color: "var(--sv-ink)",
              cursor: "pointer",
              width: 42,
              height: 42,
            }}
            aria-label="Menu"
            aria-expanded={mobile}
            aria-controls="svh-mobile-menu"
            onClick={() => setMobile((v) => !v)}
          >
            <Icon name={mobile ? "ph-x" : "ph-list"} size={20} />
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {mobile && (
        <div
          className="mob:hidden"
          id="svh-mobile-menu"
          style={{
            borderTop: "1px solid var(--sv-line)",
            background: "var(--sv-bg)",
            padding: "16px 24px 24px",
          }}
        >
          <div className="sv-eyebrow">Svasamm One products</div>
          <div className="flex flex-col" style={{ gap: 2 }}>
            {one.map((p) => (
              <ProductLink
                key={p.id}
                p={p}
                className="svh-item flex items-center"
                style={{
                  gap: 12,
                  padding: "12px 10px",
                  color: "var(--sv-ink)",
                  fontSize: 16,
                }}
              >
                <Icon
                  name={p.icon}
                  size={19}
                  style={{ color: ONE[p.id]?.fill ?? "var(--sv-ink-3)" }}
                />
                {p.name}
                {p.external ? " ↗" : ""}
              </ProductLink>
            ))}
          </div>
          <div className="sv-eyebrow" style={{ marginTop: 14 }}>Also built for clients</div>
          <div className="flex flex-col" style={{ gap: 2 }}>
            {also.map((p) => (
              <ProductLink
                key={p.id}
                p={p}
                className="svh-item flex items-center"
                style={{
                  gap: 12,
                  padding: "12px 10px",
                  color: "var(--sv-ink)",
                  fontSize: 16,
                }}
              >
                <Icon
                  name={p.icon}
                  size={19}
                  style={{ color: ONE[p.id]?.fill ?? "var(--sv-ink-3)" }}
                />
                {p.name}
                {p.external ? " ↗" : ""}
              </ProductLink>
            ))}
          </div>
          <hr className="sv-hairline" style={{ margin: "14px 0" }} />
          <Link
            href="/pages/services.html"
            className="svh-item"
            style={{
              display: "block",
              padding: "12px 10px",
              color: "var(--sv-ink)",
              fontSize: 16,
            }}
          >
            All solutions
          </Link>
          <hr className="sv-hairline" style={{ margin: "14px 0" }} />
          <Link href="/resources" className="svh-item" style={{ display: "block", padding: "12px 10px", color: "var(--sv-ink)", fontSize: 16 }}>
            All guides
          </Link>
          {RESOURCE_GROUPS.map((g) => (
            <div key={g.heading}>
              <div
                className="sv-eyebrow"
                style={{ margin: "12px 0 4px" }}
              >
                {g.heading}
              </div>
              {g.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="svh-item"
                  style={{
                    display: "block",
                    padding: "9px 10px",
                    color: "var(--sv-ink-2)",
                    fontSize: 14.5,
                  }}
                >
                  {l.title}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/pages/contact.html"
            className="sv-btn sv-btn-primary sv-btn-block"
            style={{ marginTop: 14 }}
          >
            Talk to us
          </Link>
          <a
            href={signInHref("mobile-menu")}
            onClick={() => signInClick("mobile-menu")}
            className="sv-btn sv-btn-secondary sv-btn-block"
            style={{ marginTop: 10 }}
          >
            Sign in
          </a>
        </div>
      )}
    </header>
  );
}
