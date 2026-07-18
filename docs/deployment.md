# Deployment & Release (Dokploy on Hostinger)

How svasamm.com and uat.svasamm.com are built, released, and deployed — matching the
lucoze-website setup (Docker Hub + Dokploy). Includes the **Hetzner → Hostinger migration**.

## Build: Next.js static export (as of v0.1.0)

As of v0.1.0 the site is a Next.js static export (`output: 'export'` in `next.config.ts` →
`out/`), **not gulp**. Build = `yarn build`; the image serves `out/` via nginx (no Node
runtime in prod). Redirects for the old `/pages/{privacy,terms-of-service,hims,
testimonials}.html` URLs live in `deployment/nginx/nginx.conf`, not Traefik middleware (see
`CLAUDE.md` § Deployment for the full current edge-behavior list — www→apex, HSTS,
UAT noindex, and the branded 404 also moved into nginx).

## Architecture

```
GitHub Release (tag uat-vX.Y.Z or vX.Y.Z)
  └► GitHub Actions (.github/workflows/deploy.yml)
       1. test   (yarn install / build / validate)
       2. build + push image to Docker Hub  (svasamm/svasamm-website:<tag> + :latest|:uat-latest)
       3. if DOKPLOY_DEPLOY_ENABLED=true → POST the matching Dokploy webhook
            └► Dokploy (Hostinger) pulls the image, redeploys behind Traefik → Let's Encrypt TLS
                 ├─ PROD app → svasamm.com       (deployment/docker-compose.yml)
                 └─ UAT  app → uat.svasamm.com   (deployment/docker-compose.uat.yml, noindex)
```

The site is a static build served by nginx in the image (`deployment/docker/Dockerfile`).
**Nginx (`:80`) handles www→apex 301, HSTS, UAT noindex (`X-Robots-Tag` by `Host`), the
crawl-trap fix / 404 / `/index.html`→`/`, and CSP headers** (see
`deployment/nginx/nginx.conf` and `CLAUDE.md` § Deployment). **Traefik (Dokploy) handles
only TLS termination and HTTP→HTTPS 301** — configured in the Dokploy UI (see
`deployment/dokploy-seo.md`).

## Branch & release model

```
feature/*  ──PR──►  develop  ──PR──►  uat  ──PR──►  main
                                       │              │
             GitHub Release uat-vX.Y.Z │   GitHub Release vX.Y.Z │
                                       ▼              ▼
                                 uat.svasamm.com   svasamm.com
```

- Work on `feature/*` → merge to **develop** (integration).
- Promote develop → **uat**, publish a **`uat-vX.Y.Z`** Release → deploys UAT.
- After UAT sign-off, merge uat → **main**, publish a **`vX.Y.Z`** Release → deploys PROD.
- **Version convention: same number across environments.** Validate `uat-v0.0.5` on UAT,
  then release the *same code* to prod as `v0.0.5` — one number per release, less confusion.
- **Only a published Release deploys** — pushing a branch does not.

Cut a release (creates the tag + triggers the workflow):
```bash
git checkout uat && git pull
gh release create uat-v0.0.5 --target uat --title uat-v0.0.5 --notes "UAT"   # -> UAT
# after UAT sign-off + uat->main merge:
git checkout main && git pull
gh release create v0.0.5 --target main --title v0.0.5 --notes "Release"       # -> PROD
```

## One-time GitHub setup

Repo → Settings → Secrets and variables → Actions.

| Secret | Value |
|---|---|
| `DOCKERHUB_USERNAME` | Docker Hub username (the `svasamm` account) |
| `DOCKERHUB_TOKEN` | Docker Hub access token (read+write) |
| `DOKPLOY_SVASAMM_WEBSITE_UAT_WEBHOOK` | UAT app's Dokploy deploy webhook URL |
| `DOKPLOY_SVASAMM_WEBSITE_WEBHOOK` | PROD app's Dokploy deploy webhook URL |

| Variable | Value |
|---|---|
| `DOKPLOY_DEPLOY_ENABLED` | `true` to auto-deploy after build (set `false` to only build) |

Create the Docker Hub repo **`svasamm/svasamm-website`** (private is fine — add the creds
in Dokploy, see below; or make it public). The image name is overridable via `CUSTOM_IMAGE`.

## One-time Dokploy setup (on Hostinger)

Create **two Compose apps** (as you already did), one per environment:

- **PROD** → compose `deployment/docker-compose.yml` (image tag `latest`).
- **UAT** → compose `deployment/docker-compose.uat.yml` (image tag `uat-latest`).

For each:
1. **Registry access** — if the Docker Hub repo is private: Dokploy → **Registry** → add
   Docker Hub with the `svasamm` username + a read token; the app then pulls it.
2. **Environment** (Dokploy app → Environment): optionally set `CUSTOM_TAG` (defaults are
   `latest` / `uat-latest`). `AGENT_PRIVATE_IP` and `BENCH_PORT` are provided by Dokploy.
3. **Deploy the compose once** so the `svasamm-website` service exists.
4. **Domains + HTTPS + SEO middlewares** → follow **`deployment/dokploy-seo.md`**
   (Domains tab: host + port 80 + Let's Encrypt; then www→apex/HSTS/noindex labels).
5. Copy the app's **Deploy Webhook URL** → the matching GitHub secret above.

## Hetzner → Hostinger migration (DNS cutover)

Do the Dokploy setup + a full UAT test on Hostinger **before** touching apex DNS. UAT was
never on Hetzner, so bring it up first (greenfield, zero risk) and validate the whole
pipeline; only then cut prod over.

1. **UAT first** — add DNS `uat.svasamm.com` → **UAT VPS IP**, deploy, verify (below).
2. **Prep prod on Hostinger** — deploy the prod app/image; test via server IP or a
   `/etc/hosts` override pointing `svasamm.com` at the Hostinger IP before DNS changes.
3. **Lower TTL** on the apex A/AAAA records to **300s** a day before cutover.
4. **Cut over DNS:**
   | Record | Type | Value |
   |---|---|---|
   | `svasamm.com` (`@`) | A | `<HOSTINGER_IPv4>` |
   | `www` | CNAME (or A) | `svasamm.com` (or the IPv4) |
   | `uat` | A | `<HOSTINGER_IPv4>` (already set in step 1) |
   | AAAA (if used) | AAAA | `<HOSTINGER_IPv6>` |
   **Do not touch MX / email / SPF/DKIM records.**
5. **Let's Encrypt issues after DNS points to Hostinger** (HTTP-01). Wait a minute or two.
6. **Verify** (below). Watch Search Console for crawl errors.
7. **Keep Hetzner up ~24–48h** until propagation is confirmed, then decommission; restore TTL.

## Post-deploy verification

See the verify block in `deployment/dokploy-seo.md` (HTTPS, www→apex, HSTS, sitemap XML,
404, index.html redirect, and UAT `x-robots-tag: noindex`). Then in **Google Search
Console**: verify `svasamm.com`, submit `https://svasamm.com/sitemap.xml`, request indexing
of the homepage + key product pages. **Do not add uat.**

## Rollback
Re-deploy a previous image tag: in Dokploy set the app's `CUSTOM_TAG` to the prior
`vX.Y.Z` (or `uat-vX.Y.Z`) and redeploy. Images are immutable per tag, so rollback is just
selecting the last-good tag.

## Notes
- Dockerfile builder installs **all** deps (`yarn install --frozen-lockfile`) — the gulp
  build chain is in devDependencies.
- Same registry/secret/label conventions as `lucoze-website` — keep them in sync.
