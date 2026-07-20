import Image from "next/image";
import { HERO_SLUGS } from "@/lib/heroes";

/**
 * Hero background photo + scrims, shared by every hero (home, Solutions, product, article).
 *
 * Layering contract — get this wrong and the text disappears behind the photo:
 *   - the <Image> and the scrim sit at z-index 0 inside a `.sv-hero` (position:relative)
 *   - the hero CONTENT wrapper MUST carry `.sv-hero-content` (position:relative; z-index:1)
 *
 * Pages without a photo (Contact, About, Privacy, Terms, or any slug not in HERO_SLUGS)
 * render nothing here and keep the plain Nocturne gradient hero.
 *
 * `priority` is on by default because the hero image IS the LCP element — it gets a
 * preload hint and never lazy-loads. Images are pre-compressed to ~1600px WebP by
 * scripts/optimize-hero-images.py (static export disables next/image optimization).
 */
export default function HeroBackground({ slug, priority = true }: { slug: string; priority?: boolean }) {
  if (!HERO_SLUGS.has(slug)) return null;
  return (
    <>
      <Image
        src={`/hero/${slug}.webp`}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        priority={priority}
        className="sv-hero-img"
      />
      <div className="sv-hero-scrim" aria-hidden />
    </>
  );
}
