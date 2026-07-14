# Deployment & Release (Dokploy on Hostinger)

How svasamm.com and uat.svasamm.com are built, released, and deployed, plus the
one-time **Hetzner → Hostinger migration**.

## Architecture

```
git tag  ──► GitHub Actions (.github/workflows/deploy.yml)
             │  1. test  (yarn install/build/validate)
             │  2. build + push image to GHCR (ghcr.io/svasamm-research/svasamm-site)
             │  3. POST Dokploy webhook (UAT or PROD)
             ▼
        Dokploy (Hostinger)  ──► pulls image, redeploys behind Traefik ──► Let's Encrypt TLS
             ├─ PROD app  → svasamm.com        (compose: deployment/docker-compose.yml)
             └─ UAT  app  → uat.svasamm.com    (compose: deployment/docker-compose.uat.yml, noindex)
```

The site is a static build served by nginx in the image (`deployment/docker/Dockerfile`).
Nginx handles the crawl-trap fix / 404 / cache; **Traefik (Dokploy) handles TLS, the
HTTP→HTTPS 301, www→apex 301, and HSTS.**

## Branch & release model

```
feature/*  ──PR──►  develop  ──PR──►  uat  ──PR──►  main
                                       │              │
                        tag uat-vX.Y.Z │      tag vX.Y.Z │
                                       ▼              ▼
                                 uat.svasamm.com   svasamm.com
```

- Work on `feature/*`, merge to **develop** (integration).
- Promote develop → **uat**, then cut a **`uat-vX.Y.Z`** tag on `uat` → auto-deploys UAT.
- After UAT sign-off, merge uat → **main**, cut a **`vX.Y.Z`** tag on `main` → auto-deploys PROD.
- **Only tags deploy.** Pushing to a branch never deploys.

Release commands:
```bash
# after develop -> uat merge:
git checkout uat && git pull
git tag uat-v0.0.4 && git push origin uat-v0.0.4     # -> UAT

# after uat -> main merge:
git checkout main && git pull
git tag v0.0.6 && git push origin v0.0.6             # -> PROD
```

## One-time GitHub setup (secrets)

Repo → Settings → Secrets and variables → Actions:
| Secret | Value |
|---|---|
| `DOKPLOY_UAT_WEBHOOK` | UAT app's Dokploy deploy webhook URL |
| `DOKPLOY_PROD_WEBHOOK` | PROD app's Dokploy deploy webhook URL |

`GITHUB_TOKEN` is automatic (used to push to GHCR). Make the GHCR package readable by
Dokploy (public, or add a pull secret in Dokploy for the private package).

## One-time Dokploy setup (on Hostinger)

Create **two applications** (or two Compose services), one per environment:

**PROD**
- Source: Docker image `ghcr.io/svasamm-research/svasamm-site:latest` (or use the Compose
  file `deployment/docker-compose.yml`).
- Domain: `svasamm.com` **and** `www.svasamm.com`.
- Enable **HTTPS / Let's Encrypt**, **Force HTTPS** (301), and set the **www→apex 301**
  redirect (see "Domain settings for SEO" below).
- Copy the app's **Deploy Webhook URL** → GitHub secret `DOKPLOY_PROD_WEBHOOK`.

**UAT**
- Source: image `…:uat-latest` (or `deployment/docker-compose.uat.yml`).
- Domain: `uat.svasamm.com`, HTTPS/Let's Encrypt, Force HTTPS.
- **Add the `X-Robots-Tag: noindex, nofollow` response header** (in the compose it's the
  `uat-noindex` Traefik middleware; in the Dokploy UI add it as a custom response header or
  Traefik label). **This is mandatory** — otherwise staging gets indexed and competes with
  production as duplicate content.
- Recommended: enable **Basic Auth** on UAT (uncomment `uat-auth` in the uat compose, or
  add it in Dokploy) so staging isn't publicly browsable.
- Copy its **Deploy Webhook URL** → GitHub secret `DOKPLOY_UAT_WEBHOOK`.

## Domain settings for SEO (Dokploy)

Get these right so search engines see exactly one canonical, secure host:
1. **One canonical host = apex `svasamm.com`.** Our page `<link rel="canonical">` tags all
   point to `https://svasamm.com/...`, so the server must agree.
2. **www → apex, 301 permanent.** Add `www.svasamm.com` to the app and redirect it to the
   apex (Traefik `www-to-apex` middleware in the compose, or a Dokploy redirect).
3. **HTTP → HTTPS, 301 permanent** (not 302). Enable "Force HTTPS".
4. **HSTS** — `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
   (security-headers middleware). Only enable `includeSubDomains`/`preload` once every
   subdomain (incl. uat) is HTTPS.
5. **TLS cert must cover apex + www** (Let's Encrypt SAN) so the www redirect terminates
   cleanly.
6. **UAT is `noindex`** and should **not** be added to Google Search Console or the sitemap.

After deploy, verify (see checklist below).

## Hetzner → Hostinger migration (DNS cutover)

Goal: move traffic with zero indexed-downtime. Do the Dokploy setup and a full test on
Hostinger **before** touching DNS.

1. **Prep on Hostinger** — install/confirm Dokploy + Traefik, create the PROD and UAT apps,
   deploy the current image. Test via the server IP or a temporary Dokploy domain, or a
   local `/etc/hosts` override pointing `svasamm.com` at the Hostinger IP. Confirm the site
   loads and redirects/sitemap/404 behave (checklist below) **before** DNS changes.
2. **Lower TTL first** — a day before cutover, set the TTL on the A/AAAA records to **300s**
   so the switch propagates fast. (Do this on whatever manages svasamm.com DNS — Hostinger
   DNS or the registrar.)
3. **Cut over DNS** — point records at the Hostinger server:
   | Record | Type | Value |
   |---|---|---|
   | `svasamm.com` (`@`) | A | `<HOSTINGER_SERVER_IPv4>` |
   | `www` | CNAME (or A) | `svasamm.com` (or the same IPv4) |
   | `uat` | A | `<HOSTINGER_SERVER_IPv4>` |
   | (AAAA if you use IPv6) | AAAA | `<HOSTINGER_SERVER_IPv6>` |
   **Do not touch MX / email / SPF/DKIM records** — leave mail exactly as-is.
4. **Let's Encrypt issues after DNS points to Hostinger** (HTTP-01 challenge needs the
   domain resolving to the new box). Expect a minute or two after propagation.
5. **Verify** on the live domain (checklist). Watch Google Search Console for crawl errors.
6. **Keep Hetzner running ~24–48h** until propagation is confirmed everywhere, then
   decommission it. Restore TTL to a normal value (e.g. 3600s) afterwards.

## Post-deploy verification checklist

Run against the live host (or in the container). These confirm the SEO fixes are actually
serving:
```bash
curl -sI  https://svasamm.com/                       # 200, HSTS + security headers present
curl -sI  http://svasamm.com/                        # 301 -> https://svasamm.com/
curl -sI  https://www.svasamm.com/                   # 301 -> https://svasamm.com/
curl -s -o /dev/null -w '%{http_code}\n' https://svasamm.com/does-not-exist-xyz  # 404 (not 200)
curl -sI  https://svasamm.com/index.html             # 301 -> /
curl -s   https://svasamm.com/sitemap.xml | head -1  # <?xml ... (NOT homepage HTML)
curl -sI  https://svasamm.com/sitemap.xml            # content-type: application/xml
curl -sI  https://uat.svasamm.com/ | grep -i x-robots-tag   # noindex, nofollow
nginx -t                                             # inside the container: config OK
```
Then in **Google Search Console**: verify `svasamm.com`, submit `https://svasamm.com/sitemap.xml`,
request indexing of the homepage + key product pages. Do **not** add uat.

## Rollback
Re-deploy a previous image tag: in Dokploy, point the app at the prior `vX.Y.Z` (or
`uat-vX.Y.Z`) tag and redeploy, or re-run the webhook after re-tagging. Because images are
immutable per tag, rollback is just selecting the last-good tag.

## Notes / gotchas
- Dockerfile builder installs **all** deps (`yarn install --frozen-lockfile`) — the gulp
  build chain is in devDependencies.
- If Dokploy builds from the Dockerfile itself (git-source app) instead of pulling GHCR,
  the webhook step is unnecessary — but then deploys are branch-based, not tag-based; the
  tag-based flow here needs the image + webhook path.
- Keep the compose Traefik labels and the Dokploy UI domain config in sync — don't define
  the same redirect in both places twice.
