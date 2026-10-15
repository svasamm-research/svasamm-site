// Checks the job-application path without AWS: copies index.mjs next to a fake
// @aws-sdk/client-sesv2 that records what would be sent, then drives the handler.
// Run: node aws/contact-form/apply.test.mjs
import { mkdtempSync, mkdirSync, writeFileSync, copyFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import assert from "node:assert/strict";

const dir = mkdtempSync(join(tmpdir(), "apply-"));
copyFileSync(join(dirname(fileURLToPath(import.meta.url)), "index.mjs"), join(dir, "index.mjs"));
const sdk = join(dir, "node_modules/@aws-sdk/client-sesv2");
mkdirSync(sdk, { recursive: true });
writeFileSync(join(sdk, "package.json"), JSON.stringify({ name: "@aws-sdk/client-sesv2", type: "module", main: "index.js" }));
writeFileSync(join(sdk, "index.js"),
  "export const sent = []; export class SendEmailCommand { constructor(i) { this.input = i; } }\n" +
  "export class SESv2Client { async send(c) { sent.push(c.input); return {}; } }\n");
const { handler } = await import(join(dir, "index.mjs"));
const { sent } = await import(join(sdk, "index.js"));

const pdf = Buffer.concat([Buffer.from("%PDF-1.4\n"), Buffer.alloc(2000, 65)]).toString("base64");
const post = (body) => handler({ headers: { origin: "https://svasamm.com" }, requestContext: { http: { method: "POST" } }, body: JSON.stringify(body) });
const good = { kind: "job", name: "Asha Roy", email: "asha@example.com", phone: "98300 12345", position: "Marketing Intern", note: "Hello", resume: { name: "cv.pdf", data: pdf } };

let r = await post(good);
assert.equal(r.statusCode, 200, r.body);
const raw = Buffer.from(sent.at(-1).Content.Raw.Data).toString();
assert.match(raw, /To: work@svasamm\.com/);
assert.match(raw, /Reply-To: asha@example\.com/);
assert.match(raw, /filename="Asha-Roy-resume\.pdf"/);
assert.match(raw, /Content-Type: application\/pdf/);

r = await post({ ...good, resume: { name: "cv.pdf", data: Buffer.from("MZ not a pdf").toString("base64") } });
assert.equal(r.statusCode, 422, "a file whose bytes are not a PDF is refused");
r = await post({ ...good, resume: { name: "cv.exe", data: pdf } });
assert.equal(r.statusCode, 422, "an .exe is refused");
r = await post({ ...good, resume: { name: "cv.pdf", data: Buffer.concat([Buffer.from("%PDF"), Buffer.alloc(3.6 * 1024 * 1024)]).toString("base64") } });
assert.equal(r.statusCode, 422, "over 3.5 MB is refused");
r = await post({ ...good, phone: "123" });
assert.equal(r.statusCode, 422, "a short phone is refused");
r = await post({ ...good, website: "spam" });
assert.equal(r.statusCode, 200, "the honeypot pretends success");
const before = sent.length;
r = await post({ name: "Ravi", email: "ravi@example.com", phone: "98300 00000", product: "Millingo" });
assert.equal(r.statusCode, 200, "the contact enquiry still works");
assert.equal(sent.length, before + 1);
assert.ok(sent.at(-1).Content.Simple, "an enquiry is a simple mail, not raw");
console.log("apply.test: all checks passed");
