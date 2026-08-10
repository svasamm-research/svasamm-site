import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icon";

// Minimal chrome for the legal pages (Privacy/Terms) — mirrors the prototype's slim
// header/footer rather than the full site nav. `children` is the .lg-body prose.
export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <div className="flex-1 flex flex-col">
      <header style={{ borderBottom: "1px solid var(--sv-line)", background: "var(--sv-bg)" }}>
        <div className="lg-wrap" style={{ maxWidth: 1180, display: "flex", alignItems: "center", gap: 14, height: 64 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <Image src="/assets/logo-svasamm.svg" alt="Svasamm" width={32} height={32} style={{ borderRadius: 7 }} />
            <span style={{ fontWeight: 600, fontSize: 20, letterSpacing: "-.02em", color: "var(--sv-ink)" }}>Svasamm</span>
          </Link>
          <Link href="/" className="lg-link" style={{ marginLeft: "auto", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 6 }}>
            <Icon name="ph-arrow-left" size={16} /> Back to site
          </Link>
        </div>
      </header>

      <main id="main" style={{ flex: 1, padding: "56px 0 72px" }}>
        <div className="lg-wrap">
          <span className="sv-tag sv-tag-brand" style={{ marginBottom: 18 }}>Legal</span>
          <h1 style={{ fontSize: 44, margin: "0 0 10px" }}>{title}</h1>
          <p style={{ fontFamily: "var(--sv-mono)", fontSize: 14, color: "var(--sv-ink-3)", margin: "0 0 8px" }}>Last updated {updated}</p>
          <div className="lg-body">{children}</div>
        </div>
      </main>

      <footer style={{ borderTop: "1px solid var(--sv-line)", background: "var(--sv-bg)", padding: "28px 0" }}>
        <div className="lg-wrap" style={{ maxWidth: 1180, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, fontSize: 12.5, color: "var(--sv-ink-3)" }}>
          <span>© 2026 Svasamm Research Pvt Ltd. All rights reserved.</span>
          <span style={{ display: "flex", gap: 16 }}>
            <Link href="/privacy" className="lg-link">Privacy</Link>
            <Link href="/terms" className="lg-link">Terms</Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
