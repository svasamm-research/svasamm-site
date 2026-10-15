// Svasamm contact-form handler — Lambda (Node 20) behind a Lambda Function URL.
// Receives a POST from svasamm.com's ContactForm and emails the enquiry via SES.
//
// Why this exists: svasamm.com is a static export (no server / no API routes), so the
// contact form needs an off-site endpoint. This is it.
//
// Env vars (set on the Lambda):
//   SES_REGION   e.g. "us-east-1"            (the region svasamm.com is verified in)
//   MAIL_FROM    e.g. "no-reply@svasamm.com" (MUST be a verified SES identity/domain)
//   MAIL_TO      e.g. "query@svasamm.com"    (where the enquiry lands)
//   ALLOW_ORIGIN e.g. "https://svasamm.com"  (CORS; comma-separated for more than one)
//
// IAM: the Lambda role needs ses:SendEmail (+ default CloudWatch Logs).
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

const REGION = process.env.SES_REGION || "us-east-1";
const MAIL_FROM = process.env.MAIL_FROM || "no-reply@svasamm.com";
const MAIL_TO = process.env.MAIL_TO || "query@svasamm.com";
const MAIL_TO_JOBS = process.env.MAIL_TO_JOBS || "work@svasamm.com";
const ALLOW_ORIGIN = (process.env.ALLOW_ORIGIN || "https://svasamm.com").split(",").map((s) => s.trim());

const ses = new SESv2Client({ region: REGION });

const MAX = { name: 120, email: 160, company: 160, phone: 40, product: 120, message: 4000 };
// Strict enough to reject anything that could break HTML/attribute context (no quotes/brackets).
const validEmail = (v) => typeof v === "string" && v.length <= MAX.email && /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(v);
const clip = (v, n) => (typeof v === "string" ? v.trim().slice(0, n) : "");
// Attribute-safe: also encodes " and ' so values are safe in both text and attribute context.
const esc = (s) =>
  String(s).replace(/[<>&"']/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#39;" })[c]);

function cors(origin) {
  const allowed = ALLOW_ORIGIN.includes(origin) ? origin : ALLOW_ORIGIN[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };
}
const reply = (status, body, origin) => ({ statusCode: status, headers: cors(origin), body: JSON.stringify(body) });

export const handler = async (event) => {
  const origin = event?.headers?.origin || event?.headers?.Origin || "";
  const method = event?.requestContext?.http?.method || event?.httpMethod || "POST";
  if (method === "OPTIONS") return reply(204, {}, origin);
  if (method !== "POST") return reply(405, { ok: false, error: "Method not allowed" }, origin);

  let data;
  try {
    data = JSON.parse(event.body || "{}");
  } catch {
    return reply(400, { ok: false, error: "Invalid JSON" }, origin);
  }

  // Honeypot: real users leave `website` empty; bots fill every field. Pretend success, send nothing.
  if (clip(data.website, 200)) return reply(200, { ok: true }, origin);

  if (data.kind === "job") return apply(data, origin);

  const name = clip(data.name, MAX.name);
  const email = clip(data.email, MAX.email);
  const company = clip(data.company, MAX.company);
  const phone = clip(data.phone, MAX.phone);
  const product = clip(data.product, MAX.product);
  const message = clip(data.message, MAX.message); // optional — the form no longer collects it
  const source = clip(data.source, 60) || "svasamm-contact";

  // name + email + a reachable phone are required; message is optional (we call to scope needs).
  if (!name || !validEmail(email) || phone.replace(/\D/g, "").length < 8) {
    return reply(422, { ok: false, error: "Missing or invalid fields" }, origin);
  }

  const subject = `New svasamm.com enquiry — ${name}${product ? ` · ${product}` : ""}`;
  const lines = [
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Phone:   ${phone}`,
    company ? `Company: ${company}` : null,
    `Product: ${product || "(not specified)"}`,
    `Source:  ${source}`,
    ...(message ? ["", "Message:", message] : []),
  ].filter((l) => l !== null);
  const text = lines.join("\n");
  const html =
    `<h2 style="margin:0 0 12px">New svasamm.com enquiry</h2>` +
    `<table style="border-collapse:collapse;font:14px/1.5 system-ui,sans-serif">` +
    [
      ["Name", esc(name)],
      ["Email", `<a href="mailto:${esc(email)}">${esc(email)}</a>`],
      ["Phone", `<a href="tel:${esc(phone.replace(/[^\d+]/g, ""))}">${esc(phone)}</a>`],
      company ? ["Company", esc(company)] : null,
      ["Product", esc(product || "(not specified)")],
      ["Source", esc(source)],
    ]
      .filter(Boolean)
      .map(([k, v]) => `<tr><td style="padding:2px 12px 2px 0;color:#666">${k}</td><td>${v}</td></tr>`)
      .join("") +
    `</table>${message ? `<p style="font:14px/1.6 system-ui,sans-serif;white-space:pre-wrap;margin-top:16px">${esc(message)}</p>` : ""}`;

  try {
    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: MAIL_FROM,
        Destination: { ToAddresses: [MAIL_TO] },
        ReplyToAddresses: [email],
        Content: {
          Simple: {
            Subject: { Data: subject, Charset: "UTF-8" },
            Body: { Text: { Data: text, Charset: "UTF-8" }, Html: { Data: html, Charset: "UTF-8" } },
          },
        },
      }),
    );
    return reply(200, { ok: true }, origin);
  } catch (err) {
    console.error("SES send failed:", err);
    return reply(502, { ok: false, error: "Could not send. Please email query@svasamm.com." }, origin);
  }
};

// ── Job applications (15 Oct 2026) ───────────────────────────────────────────
// svasamm.com/jobs posts { kind: "job", name, email, phone, position, note, resume: { name, data } }
// with the résumé base64-encoded. It is mailed to MAIL_TO_JOBS as an attachment (raw MIME,
// which needs ses:SendRawEmail — deploy.sh grants it). The request limit in front of the Lambda
// is about 6 MB, so the file is capped at 3.5 MB (≈ 4.7 MB once base64-encoded).
const RESUME_MAX = 3.5 * 1024 * 1024;
const RESUME_TYPES = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};
// The file's first bytes, not its name, decide what it is: %PDF, the old Word header, or a zip (docx).
const MAGIC = { pdf: [0x25, 0x50, 0x44, 0x46], doc: [0xd0, 0xcf, 0x11, 0xe0], docx: [0x50, 0x4b, 0x03, 0x04] };

async function apply(data, origin) {
  const name = clip(data.name, MAX.name);
  const email = clip(data.email, MAX.email);
  const phone = clip(data.phone, MAX.phone);
  const position = clip(data.position, 120);
  const note = clip(data.note, 2000);
  const file = data.resume || {};
  const ext = String(file.name || "").toLowerCase().split(".").pop();
  if (!name || !validEmail(email) || phone.replace(/\D/g, "").length < 8 || !position) {
    return reply(422, { ok: false, error: "Missing or invalid fields" }, origin);
  }
  if (!RESUME_TYPES[ext] || typeof file.data !== "string") {
    return reply(422, { ok: false, error: "Attach a résumé as PDF, DOC or DOCX." }, origin);
  }
  const bytes = Buffer.from(file.data, "base64");
  if (!bytes.length || bytes.length > RESUME_MAX) {
    return reply(422, { ok: false, error: "The résumé must be under 3.5 MB." }, origin);
  }
  if (!MAGIC[ext].every((b, i) => bytes[i] === b)) {
    return reply(422, { ok: false, error: "That file is not a real PDF, DOC or DOCX." }, origin);
  }

  const safeFile = `${name.replace(/[^A-Za-z0-9]+/g, "-").replace(/^-|-$/g, "") || "applicant"}-resume.${ext}`;
  const subject = `Application — ${position} — ${name}`;
  const text = [`Position: ${position}`, `Name:     ${name}`, `Email:    ${email}`, `Phone:    ${phone}`, ...(note ? ["", note] : [])].join("\n");
  const boundary = `sv-${Date.now().toString(36)}`;
  const enc = (v) => `=?UTF-8?B?${Buffer.from(v).toString("base64")}?=`;
  const mime = [
    `From: ${MAIL_FROM}`,
    `To: ${MAIL_TO_JOBS}`,
    `Reply-To: ${email}`,
    `Subject: ${enc(subject)}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/mixed; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    "",
    Buffer.from(text).toString("base64").replace(/.{76}/g, "$&\r\n"),
    `--${boundary}`,
    `Content-Type: ${RESUME_TYPES[ext]}; name="${safeFile}"`,
    `Content-Disposition: attachment; filename="${safeFile}"`,
    "Content-Transfer-Encoding: base64",
    "",
    bytes.toString("base64").replace(/.{76}/g, "$&\r\n"),
    `--${boundary}--`,
    "",
  ].join("\r\n");

  try {
    await ses.send(new SendEmailCommand({ Content: { Raw: { Data: Buffer.from(mime) } } }));
    return reply(200, { ok: true }, origin);
  } catch (err) {
    console.error("SES raw send failed:", err);
    return reply(502, { ok: false, error: "Could not send. Please email work@svasamm.com." }, origin);
  }
}
