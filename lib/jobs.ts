// Openings on /jobs (15 Oct 2026). Terms are Mithun's: in the office in Hooghly, paid,
// six months, stipend discussed at interview. The duties are drafts written from each
// title — Mithun edits them. Applications go to work@svasamm.com through the contact-form
// Lambda (aws/contact-form, kind: "job"), with the résumé attached.
//
// To close a role, delete it here: the page, its chips and its Google job listing follow.

export type Job = {
  id: string; title: string; department: string; type: string; summary: string;
  duties: string[]; lookingFor: string[]; posted: string; closes: string;
};

const TERMS = "Paid internship · 6 months · stipend discussed at interview · in the office, Hooghly";

export const JOBS: Job[] = [
  {
    id: "outbound-sales-intern", title: "Outbound Sales Intern", department: "Sales", type: TERMS,
    summary: "Call and write to rice mills and CA firms, find who is ready to change how they work, and book their first conversation with us.",
    duties: [
      "Call and message firms from our lists, and keep every conversation recorded",
      "Learn our products well enough to explain them in a firm's own words",
      "Book walkthroughs for the team and follow up afterwards",
    ],
    lookingFor: ["Clear spoken English, and Bengali or Hindi", "Comfortable on the phone with business owners", "Organised: notes, follow-ups, dates"],
    posted: "2026-10-15", closes: "2026-12-31",
  },
  {
    id: "software-engineer-intern", title: "Software Engineer Intern", department: "Engineering", type: TERMS,
    summary: "Build and test real features in Svasamm One — the Go server, the React app, and the tests that keep both honest.",
    duties: [
      "Build small features end to end, from the database to the screen",
      "Write the tests that prove a feature works, and fix what they find",
      "Walk your own work in the browser before calling it done",
    ],
    lookingFor: ["Some Go, TypeScript or React — from college, projects or work", "SQL basics", "Care about getting the details right"],
    posted: "2026-10-15", closes: "2026-12-31",
  },
  {
    id: "marketing-intern", title: "Marketing Intern", department: "Marketing", type: TERMS,
    summary: "Help rice mills, CA firms and hospitals find us: research, write and publish guides, and watch what people actually read.",
    duties: [
      "Research a topic from government and industry sources, and draft the guide",
      "Prepare posts for our sites and social pages",
      "Read the weekly search and visitor reports, and suggest what to write next",
    ],
    lookingFor: ["Writes clear, simple English", "Curious about how businesses work", "Checks a fact before using it"],
    posted: "2026-10-15", closes: "2026-12-31",
  },
];

export const DEPARTMENTS = [...new Set(JOBS.map((j) => j.department))];

/** Google's JobPosting markup — what puts a role into Google's job search. */
export function jobPostingLd(j: Job): object {
  return {
    "@context": "https://schema.org", "@type": "JobPosting",
    title: j.title, description: `<p>${j.summary}</p><ul>${j.duties.map((d) => `<li>${d}</li>`).join("")}</ul>`,
    datePosted: j.posted, validThrough: `${j.closes}T23:59:59+05:30`, employmentType: "INTERN",
    hiringOrganization: { "@type": "Organization", name: "Svasamm Research Pvt Ltd", sameAs: "https://svasamm.com", logo: "https://svasamm.com/assets/logo-svasamm.svg" },
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", streetAddress: "Grand City, Nabagram Colony", addressLocality: "Hooghly", addressRegion: "West Bengal", postalCode: "712246", addressCountry: "IN" } },
    directApply: true,
    identifier: { "@type": "PropertyValue", name: "Svasamm", value: j.id },
  };
}
