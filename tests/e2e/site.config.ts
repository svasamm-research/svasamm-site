// What differs per site. site.spec.ts, visual.spec.ts and static-server.mjs are the SAME
// files in svasamm-site, t4suite-site and lucoze-website — change them in all three.
export const SITE = {
  origin: "https://svasamm.com",
  built: "out",
  sitemaps: ["out/sitemap.xml"],
  // The approved-screenshot pages: home, the money page, the most-searched product
  // page, a legal page Play and Cashfree read, and the form.
  keyPages: ["/", "/pricing", "/pages/millingo.html", "/refund-policy", "/pages/contact.html"],
  forms: [{ path: "/pages/contact.html", form: "form", fields: ["cf-name", "cf-email", "cf-phone", "cf-company", "cf-product"] }],
  // Native <select>s render a pixel up or down between identical runs (seen 8 Oct 2026 on
  // the contact form, 401 px); masked so the tight 100-px allowance stays honest.
  mask: ["select"] as string[],
};
