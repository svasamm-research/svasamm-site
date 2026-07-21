# Contact-form backend (AWS Lambda + SES)

The site is a static export (no server runtime), so the contact form POSTs to this Lambda,
which emails the enquiry to the team via Amazon SES. One file, no dependencies (the Node 20
Lambda runtime bundles the AWS SDK v3).

## Prerequisites (SES)

- **A verified sender** in SES — either the `svasamm.com` domain (preferred) or a single
  address like `noreply@svasamm.com`. Verify under SES → Verified identities.
- **Sandbox is fine.** We only send *to* `mithun@svasamm.com`, which is on the verified
  `svasamm.com` domain, so no SES production-access request is needed for these internal
  notifications. (If you later send to unverified external addresses, request production access.)
- Note the **region** SES is set up in (e.g. `ap-south-1`). The Lambda must be in the same region.

## Deploy (one-time, ~10 min)

**Console route:**
1. Lambda → Create function → author from scratch → **Node.js 20.x**, same region as SES.
2. Paste `index.mjs` as the function code (handler = `index.handler`). Deploy.
3. **Configuration → Environment variables:**
   - `SES_FROM` = `noreply@svasamm.com` (a verified sender)
   - `SES_TO` = `mithun@svasamm.com`
   - `ALLOW_ORIGIN` = `https://svasamm.com`
4. **Permissions → execution role → attach a policy** allowing SES send:
   ```json
   { "Effect": "Allow", "Action": "ses:SendEmail", "Resource": "*" }
   ```
5. **Configuration → Function URL → Create:** Auth type **NONE**; enable **CORS** with allowed
   origin `https://svasamm.com`, allowed method `POST`, allowed header `content-type`.
6. Copy the **Function URL** (e.g. `https://xxxx.lambda-url.ap-south-1.on.aws/`).

**CLI route** (if you have the AWS CLI configured):
```bash
cd serverless/contact-lambda
zip function.zip index.mjs
aws lambda create-function --function-name svasamm-contact \
  --runtime nodejs20.x --handler index.handler --role <execution-role-arn> \
  --zip-file fileb://function.zip --region <region> \
  --environment "Variables={SES_FROM=noreply@svasamm.com,SES_TO=mithun@svasamm.com,ALLOW_ORIGIN=https://svasamm.com}"
aws lambda create-function-url-config --function-name svasamm-contact --auth-type NONE \
  --cors 'AllowOrigins=https://svasamm.com,AllowMethods=POST,AllowHeaders=content-type' --region <region>
# ensure the role has ses:SendEmail
```

## Wire it to the site

Set the Function URL as `CONTACT_ENDPOINT` in `lib/site.ts`, then ship through the normal
pipeline. Until it's set, the form keeps its old optimistic success (no lead captured), so
setting this is what actually turns lead capture on.

## Contract

`POST` JSON `{ name, email, company, product, message, website }` — `website` is a honeypot
(must be empty; bots fill it and are silently dropped). Returns `200 {ok:true}` on success,
`400` on validation failure, `500` on send failure. The enquirer's address is set as
`Reply-To`, so replying from the inbox goes straight to them.
