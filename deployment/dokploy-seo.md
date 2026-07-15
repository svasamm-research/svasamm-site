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

## 2. www → apex, HSTS, and UAT noindex — handled in nginx.conf

These are done **in-app (`deployment/nginx/nginx.conf`)**, NOT as Traefik middlewares —
the Dokploy/Traefik label route did **not** apply reliably (same lesson as lucoze), and
nginx sees the forwarded `Host` header so it can do all three deterministically:

- **www → apex 301**: `if ($host = www.svasamm.com) { return 301 https://svasamm.com$request_uri; }`
- **HSTS**: `add_header Strict-Transport-Security "max-age=31536000" always;`
- **UAT noindex**: a `map $host $robots_tag` sets `noindex, nofollow` only for
  `uat.svasamm.com`, emitted via `add_header X-Robots-Tag $robots_tag always;` (prod sends
  nothing — nginx omits an empty add_header).

So in the Dokploy **Domains** tab you only add the hosts + HTTPS/Let's Encrypt (§1). No
middleware labels needed. To change any of the above, edit `nginx.conf` and ship a release.
> **Recommended for UAT:** still enable Basic Auth in Dokploy so staging isn't publicly
> browsable (noindex keeps it out of Google, auth keeps it out of everyone's sight).

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
