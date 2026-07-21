// Contact-form handler — receives the static site's POST and sends the enquiry to the team
// via Amazon SES. Deployed as a Lambda Function URL (see README.md). The site is a static
// export with no server runtime, so this thin function is the whole backend.
//
// @aws-sdk/client-ses is provided by the Node 20 Lambda runtime — no bundling/deps needed.
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({}); // region comes from the Lambda's own AWS_REGION

// Env (set on the function): SES_FROM (verified sender, e.g. noreply@svasamm.com),
// SES_TO (mithun@svasamm.com), ALLOW_ORIGIN (https://svasamm.com).
const FROM = process.env.SES_FROM;
const TO = process.env.SES_TO;
const ALLOW_ORIGIN = process.env.ALLOW_ORIGIN || "https://svasamm.com";

const MAX = { name: 120, email: 160, company: 160, product: 120, message: 4000 };
const isEmail = (v) => typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const clip = (v, n) => (typeof v === "string" ? v.trim().slice(0, n) : "");

const cors = {
  "Access-Control-Allow-Origin": ALLOW_ORIGIN,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};
const reply = (status, body) => ({ statusCode: status, headers: { ...cors, "Content-Type": "application/json" }, body: JSON.stringify(body) });

export const handler = async (event) => {
  const method = event?.requestContext?.http?.method;
  if (method === "OPTIONS") return { statusCode: 204, headers: cors };
  if (method !== "POST") return reply(405, { error: "method not allowed" });

  let data;
  try {
    data = JSON.parse(event.body || "{}");
  } catch {
    return reply(400, { error: "invalid JSON" });
  }

  // Honeypot: bots fill hidden fields. Silently accept so they don't retry, but send nothing.
  if (data.website) return reply(200, { ok: true });

  const name = clip(data.name, MAX.name);
  const email = clip(data.email, MAX.email);
  const company = clip(data.company, MAX.company);
  const product = clip(data.product, MAX.product);
  const message = clip(data.message, MAX.message);

  if (!name || !isEmail(email) || message.length < 3) {
    return reply(400, { error: "name, a valid email, and a message are required" });
  }
  if (!FROM || !TO) {
    console.error("SES_FROM / SES_TO not configured");
    return reply(500, { error: "server not configured" });
  }

  const subject = `New enquiry — ${product || "general"} — ${name}`;
  const lines = [
    `Name:     ${name}`,
    `Email:    ${email}`,
    `Company:  ${company || "—"}`,
    `Interest: ${product || "—"}`,
    "",
    message,
  ];

  try {
    await ses.send(new SendEmailCommand({
      Source: FROM,
      Destination: { ToAddresses: [TO] },
      ReplyToAddresses: [email], // so the team replies straight to the enquirer
      Message: {
        Subject: { Data: subject, Charset: "UTF-8" },
        Body: { Text: { Data: lines.join("\n"), Charset: "UTF-8" } },
      },
    }));
    return reply(200, { ok: true });
  } catch (err) {
    console.error("SES send failed:", err?.name, err?.message);
    return reply(500, { error: "could not send" });
  }
};
