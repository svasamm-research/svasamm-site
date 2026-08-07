import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductPage from "@/components/ProductPage";
import ArticleView from "@/components/Article";
import SolutionsPage from "@/components/SolutionsPage";
import ContactPage from "@/components/ContactPage";
import AboutPage from "@/components/AboutPage";
import JsonLd from "@/components/JsonLd";
import { PRODUCT_BY_SLUG } from "@/lib/products";
import { ARTICLE_BY_SLUG } from "@/lib/article-registry";
import { CORE_BY_SLUG } from "@/lib/pages";

// Dispatcher for the canonical /pages/*.html scheme. The [slug] segment includes the
// ".html" suffix (e.g. "millingo.html"). Routes products, articles, Solutions and Contact.
function lookup(slug: string) {
  const product = PRODUCT_BY_SLUG[slug];
  const article = ARTICLE_BY_SLUG[slug];
  const core = CORE_BY_SLUG[slug];
  const seo = product?.seo ?? article?.seo ?? core?.seo;
  const jsonLd = product?.jsonLd ?? article?.jsonLd ?? core?.jsonLd;
  return { product, article, core, seo, jsonLd };
}

export function generateStaticParams() {
  return [...Object.keys(PRODUCT_BY_SLUG), ...Object.keys(ARTICLE_BY_SLUG), ...Object.keys(CORE_BY_SLUG)].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { seo } = lookup(slug);
  if (!seo) return {};
  return {
    title: { absolute: seo.metaTitle }, // metaTitle already carries the "| Svasamm" suffix
    description: seo.metaDescription,
    alternates: { canonical: seo.canonical },
    robots: { index: true, follow: true },
    openGraph: {
      type: seo.ogType,
      title: seo.ogTitle ?? seo.metaTitle,
      description: seo.ogDescription ?? seo.metaDescription,
      url: seo.canonical,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Svasamm — vertical ERPs & business platforms" }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { product, article, core, jsonLd } = lookup(slug);
  if (!product && !article && !core) notFound();

  const active = core?.kind === "solutions" ? "solutions" : core?.kind === "contact" ? "contact" : core?.kind === "about" ? "about" : "products";

  return (
    <>
      {jsonLd && jsonLd.length > 0 && <JsonLd data={jsonLd} />}
      <SiteHeader active={active} />
      <main id="main" className="flex-1">
        {product && <ProductPage product={product} />}
        {article && <ArticleView article={article} />}
        {core?.kind === "solutions" && <SolutionsPage />}
        {core?.kind === "contact" && <ContactPage />}
        {core?.kind === "about" && <AboutPage />}
      </main>
      <SiteFooter />
    </>
  );
}
