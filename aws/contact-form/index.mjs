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
const ALLOW_ORIGIN = (process.env.ALLOW_ORIGIN || "https://svasamm.com").split(",").map((s) => s.trim());

const ses = new SESv2Client({ region: REGION });

const MAX = { name: 120, email: 160, company: 160, product: 120, message: 4000 };
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

  const name = clip(data.name, MAX.name);
  const email = clip(data.email, MAX.email);
  const company = clip(data.company, MAX.company);
  const product = clip(data.product, MAX.product);
  const message = clip(data.message, MAX.message);
  const source = clip(data.source, 60) || "svasamm-contact";

  if (!name || !validEmail(email) || message.length < 3) {
    return reply(422, { ok: false, error: "Missing or invalid fields" }, origin);
  }

  const subject = `New svasamm.com enquiry — ${name}${product ? ` · ${product}` : ""}`;
  const lines = [
    `Name:    ${name}`,
    `Email:   ${email}`,
    company ? `Company: ${company}` : null,
    `Product: ${product || "(not specified)"}`,
    `Source:  ${source}`,
    "",
    "Message:",
    message,
  ].filter((l) => l !== null);
  const text = lines.join("\n");
  const html =
    `<h2 style="margin:0 0 12px">New svasamm.com enquiry</h2>` +
    `<table style="border-collapse:collapse;font:14px/1.5 system-ui,sans-serif">` +
    [
      ["Name", name],
      ["Email", `<a href="mailto:${esc(email)}">${esc(email)}</a>`],
      company ? ["Company", esc(company)] : null,
      ["Product", esc(product || "(not specified)")],
      ["Source", esc(source)],
    ]
      .filter(Boolean)
      .map(([k, v]) => `<tr><td style="padding:2px 12px 2px 0;color:#666">${k}</td><td>${v}</td></tr>`)
      .join("") +
    `</table><p style="font:14px/1.6 system-ui,sans-serif;white-space:pre-wrap;margin-top:16px">${esc(message)}</p>`;

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
