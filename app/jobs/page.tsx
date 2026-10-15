import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import JobsBoard from "@/components/JobsBoard";
import { JOBS, DEPARTMENTS, jobPostingLd } from "@/lib/jobs";
import { WORK } from "@/lib/team";

export const metadata: Metadata = {
  title: { absolute: "Jobs and Internships at Svasamm — Hooghly, West Bengal | Svasamm" },
  description: "Paid internships at Svasamm in sales, software engineering and marketing — six months, in our office in Hooghly, West Bengal.",
  alternates: { canonical: "/jobs" },
  robots: { index: true, follow: true },
};

export default function Jobs() {
  return (
    <>
      <JsonLd data={JOBS.map(jobPostingLd)} />
      <SiteHeader active="about" />
      <main id="main" className="flex-1">
        <section className="pp-hero-wash" style={{ borderBottom: "1px solid var(--sv-line)" }}>
          <div className="sv-wrap" style={{ padding: "64px 24px 48px", maxWidth: 900 }}>
            <div className="sv-eyebrow">Jobs</div>
            <h1 style={{ margin: "0 0 14px" }}>Work on software Indian businesses run on</h1>
            <p className="sv-muted" style={{ fontSize: 18, lineHeight: 1.6, margin: 0, maxWidth: "56ch" }}>{WORK.intro}</p>
          </div>
        </section>
        <section style={{ padding: "40px 0 88px" }}>
          <div className="sv-wrap" style={{ maxWidth: 960 }}>
            <JobsBoard jobs={JOBS} departments={DEPARTMENTS} />
            <p className="sv-muted" style={{ fontSize: 14.5, marginTop: 32 }}>
              No role that fits? Send your résumé to <strong>work@svasamm.com</strong> and tell us what you would like to do.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
