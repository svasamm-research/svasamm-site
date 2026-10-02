#!/usr/bin/env bash
# Runs the REAL nginx over the built site and checks what the Playwright static server
# cannot: the redirects and the headers in deployment/nginx/nginx.conf. A missing docker
# FAILS this check: a gate that skips is a gate that is off.
#
# Usage: yarn build && yarn test:nginx                  (nginx.conf + out/ from this folder)
#        IMAGE=<built image> bash scripts/check-nginx.sh  (the release image itself — CI)
set -euo pipefail

PORT="${PORT:-8897}"
NAME="sv-nginx-check-$$"
DIR="$(cd "$(dirname "$0")/.." && pwd)"
URL="http://localhost:$PORT"

command -v docker >/dev/null 2>&1 || { echo "✗  docker not found — this check cannot run."; exit 1; }
trap 'docker rm -f "$NAME" >/dev/null 2>&1 || true' EXIT
if [ -n "${IMAGE:-}" ]; then
	docker run -d --name "$NAME" -p "$PORT:80" "$IMAGE" >/dev/null
else
	[ -f "$DIR/out/index.html" ] || { echo "✗  out/ not built. Run 'yarn build' first."; exit 1; }
	docker run -d --name "$NAME" -p "$PORT:80" \
		-v "$DIR/deployment/nginx/nginx.conf:/etc/nginx/nginx.conf:ro" \
		-v "$DIR/out:/usr/share/nginx/html:ro" nginx:alpine >/dev/null
fi
for _ in $(seq 1 20); do curl -s -o /dev/null "$URL/" && break || sleep 0.5; done
curl -s -o /dev/null "$URL/" || { echo "✗  nginx did not start — nginx.conf is broken:"; docker logs "$NAME" 2>&1 | tail -5; exit 1; }

fail=0
# $1 path · $2 expected code · $3 expected Location suffix (empty = no redirect) · $4 Host
expect() {
	read -r code loc < <(curl -s -o /dev/null -H "Host: ${4:-svasamm.com}" -w "%{http_code} %{redirect_url}\n" "$URL$1")
	if [ "$code" != "$2" ] || { [ -n "$3" ] && [ "${loc%"$3"}" = "$loc" ]; }; then
		echo "✗  $1 → $code $loc (expected $2 $3)"; fail=1
	else
		echo "✓  $1 → $code ${loc}"
	fi
}

echo "== pages are served =="
expect "/"                         200 ""
expect "/pages/millingo.html"      200 ""
expect "/pricing"                  200 ""
expect "/refund-policy"            200 ""
expect "/delete-account"           200 ""
expect "/sitemap.xml"              200 ""
expect "/health"                   200 ""
expect "/no-such-page"             404 ""
echo "== moved and removed pages keep their links =="
expect "/pages/privacy.html"          301 "/privacy"
expect "/pages/terms-of-service.html" 301 "/terms"
expect "/pages/hims.html"             301 "https://lucoze.com/"
expect "/pages/loan-management.html"  301 "/pages/services.html"
expect "/pricing" 301 "https://svasamm.com/pricing" "www.svasamm.com"

echo "== headers =="
headers=$(curl -s -D - -o /dev/null -H "Host: svasamm.com" "$URL/")
for h in content-security-policy strict-transport-security x-content-type-options; do
	if grep -iq "^$h:" <<<"$headers"; then echo "✓  $h"; else echo "✗  $h MISSING"; fail=1; fi
done
grep -iq "^x-robots-tag:" <<<"$headers" && { echo "✗  production host sends X-Robots-Tag (noindex?)"; fail=1; } || echo "✓  production host is indexable"

[ "$fail" -eq 0 ] && echo "nginx check passed." || { echo "nginx check FAILED."; exit 1; }
