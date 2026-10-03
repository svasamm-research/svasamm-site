// Serves the built site for the browser tests the way nginx.conf does:
// try_files $uri $uri.html $uri/index.html, then 404.html with a 404 status.
// nginx's redirects are NOT imitated here — scripts/check-nginx.sh runs the real
// nginx for those, because a copy of a redirect rule is a second rule to drift.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const ROOT = process.argv[2] ?? "dist";
const PORT = Number(process.argv[3] ?? 4400);
const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript",
  ".mjs": "text/javascript", ".json": "application/json", ".xml": "application/xml", ".txt": "text/plain",
  ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".avif": "image/avif", ".ico": "image/x-icon", ".woff2": "font/woff2", ".woff": "font/woff" };

async function isFile(p) { try { return (await stat(p)).isFile(); } catch { return false; } }

createServer(async (req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^(\.\.[/\\])+/, "");
  for (const cand of [path, `${path}.html`, join(path, "index.html")]) {
    const file = join(ROOT, cand);
    if (await isFile(file)) {
      res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" });
      return res.end(await readFile(file));
    }
  }
  res.writeHead(404, { "content-type": TYPES[".html"] });
  res.end(await readFile(join(ROOT, "404.html")).catch(() => "not found"));
}).listen(PORT, "127.0.0.1", () => console.log(`static ${ROOT} on http://127.0.0.1:${PORT}`));
