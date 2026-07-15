# Edge SEO config (Dokploy / Traefik)

These SEO fixes live at the TLS edge (Dokploy's Traefik proxy), **not** in this repo's
`nginx.conf` (which only listens on `:80` behind Traefik):

1. **HTTP → HTTPS** redirect (301)
2. **`www.svasamm.com` → `svasamm.com`** 301 (canonical host consolidation)
3. **HSTS** (`Strict-Transport-Security`) header
4. **UAT only:** `X-Robots-Tag: noindex` (keep staging out of Google — duplicate content)

The crawl-trap fix, `/index.html`→`/` 301, custom 404, and CSP/nosniff/frame headers are
in-app (`deployment/nginx/nginx.conf`). Apply the below **once per environment** in Dokploy.

---

## 1. Domains + HTTPS (Dokploy UI → app → Domains tab)

Deploy the app first (so the `svasamm-website` service exists; otherwise the dropdown
shows "Services not found"). Then, in **Domains → Add Domain**:

**Production app**
1. Host `svasamm.com` → Service `svasamm-website` → Container Port `80` → **HTTPS: on**,
   Certificate: **Let's Encrypt**.
2. Host `www.svasamm.com` → same service, port `80`, **HTTPS: on**, Let's Encrypt.
   (Traefik needs a `www` cert so the redirect in §2 happens *after* TLS, not as a cert error.)
3. Redeploy the compose to apply.

**UAT app**
1. Host `uat.svasamm.com` → Service `svasamm-website` → Container Port `80` → **HTTPS: on**,
   Let's Encrypt. (No `www` for the subdomain.)

## 2. www → apex, HSTS, and UAT noindex (Traefik middleware labels)

Add these under the service in Dokploy: **Advanced → Docker/Compose labels** (or add them
to the compose service and redeploy). Note the doubled `$$` — Compose eats a single `$`.

**Production** — `www` → apex + HSTS:
```yaml
labels:
  - "traefik.http.middlewares.svasamm-www.redirectregex.regex=^https?://www\\.svasamm\\.com/(.*)"
  - "traefik.http.middlewares.svasamm-www.redirectregex.replacement=https://svasamm.com/$${1}"
  - "traefik.http.middlewares.svasamm-www.redirectregex.permanent=true"
  - "traefik.http.middlewares.svasamm-hsts.headers.stsSeconds=31536000"
  - "traefik.http.middlewares.svasamm-hsts.headers.stsIncludeSubdomains=true"
  - "traefik.http.middlewares.svasamm-hsts.headers.stsPreload=true"
  # attach both to this app's router (use the router name Dokploy generated, or add them
  # via the UI's middleware field):
  - "traefik.http.routers.<router>.middlewares=svasamm-www,svasamm-hsts"
```

**UAT** — noindex (mandatory) + HSTS:
```yaml
labels:
  - "traefik.http.middlewares.svasamm-uat-noindex.headers.customresponseheaders.X-Robots-Tag=noindex, nofollow"
  - "traefik.http.middlewares.svasamm-uat-hsts.headers.stsSeconds=31536000"
  - "traefik.http.routers.<router>.middlewares=svasamm-uat-noindex,svasamm-uat-hsts"
```
> Find `<router>` in the Traefik dashboard (usually the app/service name). If Dokploy
> manages the router, prefer attaching the middlewares via the UI's middleware field.
> **Recommended for UAT:** also enable Basic Auth so staging isn't publicly browsable.

## 3. Verify after deploy

```bash
# PROD
curl -sI http://svasamm.com/            | grep -i '^location'                 # -> https://svasamm.com/
curl -sI https://www.svasamm.com/       | grep -iE '^HTTP|^location'          # 301 -> https://svasamm.com/
curl -sI https://svasamm.com/           | grep -i strict-transport-security   # max-age=31536000; includeSubDomains; preload
curl -s  https://svasamm.com/sitemap.xml | head -1                            # <?xml ...  (NOT homepage HTML)
curl -s -o /dev/null -w '%{http_code}\n' https://svasamm.com/nope-xyz         # 404 (not 200)
curl -sI https://svasamm.com/index.html | grep -i '^location'                 # -> https://svasamm.com/

# UAT
curl -sI https://uat.svasamm.com/ | grep -i x-robots-tag                      # noindex, nofollow
```

Only submit to the [HSTS preload list](https://hstspreload.org/) once every subdomain
(incl. uat) is HTTPS-only — `preload` + `includeSubDomains` is hard to undo. Do **not**
add uat.svasamm.com to Google Search Console or the sitemap.
