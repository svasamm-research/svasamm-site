#!/usr/bin/env python3
"""Build web-ready hero images from the design originals.

The design drop ships 4K-8K JPEGs (2-7MB each). This site is a Next.js STATIC EXPORT
with `images.unoptimized: true`, so next/image does no resizing or format conversion —
whatever lands in public/ is what the browser downloads. So we pre-process here.

Output: public/hero/<page-slug>.webp  (~1600px wide, WebP q80)

Naming by PAGE SLUG is deliberate: the app resolves a hero as `/hero/${slug}.webp`, so
there is no filename map to keep in sync — this SOURCES table is the single source of
truth for which photo belongs to which page.

Usage:  python3 scripts/optimize-hero-images.py [SRC_DIR]
        (default SRC_DIR: ~/Downloads/millingo-images)
"""
import sys
from pathlib import Path
from PIL import Image, ImageOps

MAX_WIDTH = 1600
QUALITY = 80

# source filename (in SRC_DIR)            -> page slug (output basename)
SOURCES = {
    # core
    "home-v2.jpg": "home",   # replaced the original home.jpg on 2026-07-20
    "home->solutions.jpg": "services",
    # products  (millingo pending: drop in `rice-mill-factory.jpg` -> "millingo")
    "rice-mill-factory.jpg": "millingo",
    "dms-channel-life-cycle.jpg": "dms",
    "erp.jpg": "erp",
    "hrms.jpg": "hrms",
    "crm.jpg": "crm",
    "service-desk.jpg": "service-desk",
    # millingo cluster
    "millingo-cmr-explained.jpg": "custom-milled-rice-cmr-process",
    "millingo-mill-recovery.jpg": "rice-mill-yield-recovery",
    "millingo-by-product.jpg": "rice-mill-byproduct-accounting",
    "millingo-gst.jpg": "gst-for-rice-mills",
    "millingo-best-mill-software.jpg": "best-rice-mill-software",
    "millingo-rice-software-price.jpg": "rice-mill-software-price",
    "millingo-west-bengal.jpg": "rice-mill-software-west-bengal",
    "millingo-uttar-pradesh.jpg": "rice-mill-software-uttar-pradesh",
    "millingo-odisha.jpg": "rice-mill-software-odisha",
    "millingo-bihar.jpg": "rice-mill-software-bihar",
    "compare-dataman.jpg": "millingo-vs-dataman",
    "compare-samadhan.jpg": "millingo-vs-samadhan",
    # dms cluster
    "guide-oem-distributor.jpg": "oem-distributor-management",
    "dms-coding-and-marking.jpg": "dms-coding-marking-oem",
    "dms-packaging-and-industrial.jpg": "dms-packaging-machinery-oem",
    "dms-electrical-and-electronics.jpg": "dms-electrical-electronics-oem",
    "dms-pharma-medical-devices.jpg": "dms-pharma-medical-device-oem",
    "dms-automative-components.jpg": "dms-automotive-aftermarket-oem",
    "dms-hvac.jpg": "dms-hvac-equipment-oem",
    "dms-agri-quipments.jpg": "dms-agri-farm-equipment-oem",
    "compare-bizom.jpg": "dms-vs-bizom",
    "compare-fieldassist.jpg": "dms-vs-fieldassist",
    # erp cluster
    "guide-erp-implementation.jpg": "erp-implementation-guide",
    "erp-manufacturing.jpg": "erp-for-manufacturing",
    "erp-trading.jpg": "erp-for-trading-distribution",
    "erp-services.jpg": "erp-for-services-firms",
    # hrms cluster
    "guide-payroll-compliance.jpg": "payroll-statutory-compliance-india",
    "hrms-manufacturing.jpg": "hrms-for-manufacturing",
    "hrms-retail.jpg": "hrms-for-retail",
    "hrms-healthcare.jpg": "hrms-for-hospitals-clinics",
    # crm cluster
    "guide-crm-pipeline.jpg": "sales-pipeline-guide",
    "crm-b2b.jpg": "crm-for-b2b-sales",
    "crm-services.jpg": "crm-for-services-firms",
    "crm-distribution.jpg": "crm-for-distribution",
    # service desk cluster
    "sd-itsm.jpg": "itsm-fundamentals-guide",
    "sd-internal-it.jpg": "service-desk-for-internal-it",
    "sd-msp.jpg": "service-desk-for-msps",
    "sd-customer-support.jpg": "service-desk-for-customer-support",
}

# Deliberately unused: the design drop had two photos for three guides. Kept here so a
# future reader knows they were considered, not missed.
SPARES = ("dms-oem-guide.jpg", "hrms-payroll.jpg", "crm-pipeline.jpg",
          "home.jpg")  # superseded by home-v2.jpg


def main() -> int:
    src_dir = Path(sys.argv[1] if len(sys.argv) > 1 else "~/Downloads/millingo-images").expanduser()
    out_dir = Path(__file__).resolve().parent.parent / "public" / "hero"
    out_dir.mkdir(parents=True, exist_ok=True)

    written, missing, total_in, total_out, slugs = 0, [], 0, 0, []
    for name, slug in sorted(SOURCES.items(), key=lambda kv: kv[1]):
        src = src_dir / name
        if not src.exists():
            missing.append(name)
            continue
        dst = out_dir / f"{slug}.webp"
        slugs.append(slug)
        if dst.exists() and dst.stat().st_mtime >= src.stat().st_mtime:
            continue  # already built from this source
        with Image.open(src) as im:
            im = ImageOps.exif_transpose(im).convert("RGB")  # honour camera orientation
            if im.width > MAX_WIDTH:
                im = im.resize((MAX_WIDTH, round(im.height * MAX_WIDTH / im.width)), Image.LANCZOS)
            im.save(dst, "WEBP", quality=QUALITY, method=6)  # method=6 = smallest file
        total_in += src.stat().st_size
        total_out += dst.stat().st_size
        written += 1
        print(f"{slug:<38} {src.stat().st_size/1e6:6.1f}MB -> {dst.stat().st_size/1e3:6.0f}KB")

    # Emit the manifest the app reads, so the slug list can never drift from the files
    # actually on disk. Pages whose slug is absent fall back to the gradient-only hero.
    manifest = Path(__file__).resolve().parent.parent / "lib" / "heroes.ts"
    manifest.write_text(
        "// AUTO-GENERATED by scripts/optimize-hero-images.py — do not hand-edit.\n"
        "// Slugs with a hero photo at /hero/<slug>.webp. Absent => gradient-only hero.\n"
        "export const HERO_SLUGS = new Set([\n"
        + "".join(f'  "{s}",\n' for s in sorted(slugs))
        + "]);\n"
    )

    if written:
        print(f"\n{written} encoded  {total_in/1e6:.0f}MB -> {total_out/1e6:.1f}MB "
              f"({100 - total_out/total_in*100:.1f}% smaller)")
    else:
        print("\nnothing re-encoded (all up to date)")
    print(f"manifest: {manifest.relative_to(manifest.parent.parent)} ({len(slugs)} slugs)")
    if missing:
        print(f"missing sources ({len(missing)}): {', '.join(missing)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
