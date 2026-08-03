# svasamm.com contact-form backend (Lambda + Function URL + SES)

svasamm.com is a **static export** — no server — so a browser can't call SES directly
(SES needs secret credentials that can't live in client JS). This tiny endpoint is the
server-side piece that holds the credentials and sends. No API Gateway: a **Lambda
Function URL** gives a public HTTPS endpoint with built-in CORS. Cost is effectively ₹0
(Lambda free tier = 1M req/mo forever; SES ~$0.10 / 1,000 emails).

**Flow:** `ContactForm` (browser) → `POST` Function URL → Lambda → SES → **query@svasamm.com**
(Reply-To = the enquirer, so you reply straight to them).

---

## Prerequisites

- **Verify `svasamm.com` in SES** (so mail is svasamm-branded, separate from lucoze):
  SES console (**us-east-1**) → **Verified identities → Create identity → Domain** →
  `svasamm.com` → enable **Easy DKIM**. SES gives **3 CNAME records** — add them to
  svasamm.com's DNS (registrar). Verification flips to *Verified* within minutes–hours.
- SES has **production access** (out of sandbox) — your Listmonk setup already sends to
  arbitrary addresses, so this is fine. (In sandbox, SES only sends to verified recipients.)
- Region: use the **same region your SES is in — `us-east-1`.**

## 1. IAM role

Create a role `svasamm-contact-form-role`:
- Trusted entity: **Lambda**.
- Attach **`AWSLambdaBasicExecutionRole`** (CloudWatch logs).
- Add an inline policy for SES:

```json
{ "Version": "2012-10-17", "Statement": [
  { "Effect": "Allow", "Action": "ses:SendEmail", "Resource": "*" }
]}
```

## 2. Lambda function

- Create function → **Author from scratch** → runtime **Node.js 20.x** → role above.
- Replace the code with [`index.mjs`](./index.mjs) (paste it; **no zip / npm install** —
  the Node 20 runtime already bundles `@aws-sdk/client-sesv2`). File name must stay
  `index.mjs`; handler = `index.handler`.
- **Configuration → Environment variables:**

| Key | Value |
|---|---|
| `SES_REGION` | `us-east-1` |
| `MAIL_FROM` | `no-reply@svasamm.com` |
| `MAIL_TO` | `query@svasamm.com` |
| `ALLOW_ORIGIN` | `https://svasamm.com` |

- Timeout ~10s is plenty.

## 3. Function URL (the public endpoint)

- **Configuration → Function URL → Create**:
  - Auth type: **NONE** (it's a public contact form; the honeypot + validation guard it).
  - **CORS:** Allow origin `https://svasamm.com`, methods `POST`, headers `content-type`.
- Copy the **Function URL** (`https://<id>.lambda-url.us-east-1.on.aws/`) — send it to me and
  I'll wire it into the form (`CONTACT_ENDPOINT`) and deploy.

## 4. Test before wiring the site

```bash
curl -i -X POST '<FUNCTION_URL>' -H 'content-type: application/json' \
  -d '{"name":"Test","email":"you@example.com","product":"Millingo — Rice Mill ERP","message":"testing the pipe"}'
# expect: HTTP 200 {"ok":true}  and an email in query@svasamm.com
```

---

## Notes

- **Cost:** negligible — a handful of invocations; SES is ~$0.10 per 1,000 emails.
- **Abuse:** a hidden `website` honeypot drops bots (returns 200, sends nothing); fields are
  length-capped and validated server-side. If spam ever appears, add a Function-URL throttle
  or a lightweight token — not needed at current volume.
- **Branding:** mail is fully svasamm — *from* `no-reply@svasamm.com`, *to* `query@svasamm.com`,
  separate from lucoze. This needs `svasamm.com` verified in SES (the DKIM step above). Until
  that's Verified, SES `SendEmail` will fail — do the verification first.
- **Alternative host:** the same `index.mjs` logic runs unchanged on a Cloudflare Worker or
  Vercel function if you ever move off AWS — only the SES client call would swap.
