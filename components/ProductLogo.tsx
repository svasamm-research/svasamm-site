import { WORDMARKS } from "@/lib/wordmarks";
import { Icon } from "./Icon";

// Each product's own lockup — its mark and its wordmark, copied from the product's
// design (sources in scripts/outline-wordmarks.py), never redrawn here. Fixed colours
// on purpose: a brand mark does not re-colour with the page. Svasamm People has no
// logo designed yet, so it shows the launcher's people icon on its green and its name.

function Millingo({ s }: { s: number }) {
  // The paddy ear — Millingo canvas Main.dc.html MARK (8 Oct 2026 poster colours).
  const grains: [number, number][] = [[52, -160], [52, -20], [44, -150], [44, -30], [36, -135], [36, -45], [28, -120], [28, -60], [18, -90]];
  return (
    <svg viewBox="0 0 64 64" width={s} height={s} fill="none" aria-hidden="true" style={{ flex: "none" }}>
      <path d="M 32 60 Q 31.5 38, 32 18" stroke="#B07D00" strokeWidth="2.2" strokeLinecap="round" />
      {grains.map(([y, deg]) => (
        <g key={`${y}${deg}`} transform={`translate(32 ${y}) rotate(${deg})`}>
          <ellipse cx="6.4" cy="0" rx="6.6" ry="2.8" fill="#F2A900" />
          <ellipse cx="4.8" cy="-0.7" rx="2.8" ry="1.2" fill="#FFD45C" opacity="0.8" />
        </g>
      ))}
    </svg>
  );
}

function T4Suite({ s }: { s: number }) {
  // The segmented T — Team · Task · Time on one stem (packages/t4suite Brand.tsx).
  return (
    <svg viewBox="0 0 100 100" width={s} height={s} aria-hidden="true" style={{ flex: "none" }}>
      <rect x="10" y="18" width="24" height="14" rx="7" fill="#0891B2" />
      <rect x="38" y="18" width="24" height="14" rx="7" fill="#2563EB" />
      <rect x="66" y="18" width="24" height="14" rx="7" fill="#4F46E5" />
      <rect x="42" y="34" width="16" height="56" rx="8" fill="#9333EA" />
    </svg>
  );
}

function Lucoze({ s }: { s: number }) {
  // The vault — lucoze-website VaultMark.astro.
  const c = "#c15f3c";
  return (
    <svg viewBox="0 0 64 64" width={s} height={s} aria-hidden="true" style={{ flex: "none" }}>
      <rect x="8" y="8" width="48" height="48" rx="11" fill="none" stroke={c} strokeWidth="3.5" />
      {[[22, 22], [22, 32], [22, 42], [32, 42], [42, 42]].map(([x, y]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r="2.8" fill={c} />
      ))}
    </svg>
  );
}

const MARKS: Record<string, (p: { s: number }) => React.ReactElement> = { millingo: Millingo, t4suite: T4Suite, lucoze: Lucoze };
const NAMES: Record<string, string> = { millingo: "Millingo", t4suite: "T4Suite", lucoze: "Lucoze", hrms: "Svasamm People" };

/** `size` is the wordmark's font size in px; the mark is drawn a little taller. */
export default function ProductLogo({ id, size = 22, ink = "var(--sv-ink)" }: { id: string; size?: number; ink?: string }) {
  const wm = WORDMARKS[id];
  const Mark = MARKS[id];
  const k = size / 100;
  return (
    <span
      role="img"
      aria-label={NAMES[id]}
      style={{ display: "inline-flex", alignItems: "center", gap: Math.round(size * 0.38), flex: "none" }}
    >
      {Mark ? (
        <Mark s={Math.round(size * 1.45)} />
      ) : (
        <span
          aria-hidden="true"
          style={{ width: Math.round(size * 1.45), height: Math.round(size * 1.45), borderRadius: Math.round(size * 0.36), background: "#15803D", color: "#fff", display: "grid", placeItems: "center", flex: "none" }}
        >
          <Icon name="ph-users-three" size={Math.round(size * 0.85)} />
        </span>
      )}
      {wm ? (
        <svg viewBox={`0 0 ${wm.w} ${wm.h}`} width={wm.w * k} height={wm.h * k} aria-hidden="true" style={{ flex: "none" }}>
          {wm.runs.map((r, i) => (
            <path key={i} d={r.d} fill={r.fill === "INK" ? ink : r.fill} />
          ))}
        </svg>
      ) : (
        <span aria-hidden="true" style={{ fontWeight: 600, fontSize: size, letterSpacing: "-.02em", lineHeight: 1, color: ink }}>
          {NAMES[id]}
        </span>
      )}
    </span>
  );
}
