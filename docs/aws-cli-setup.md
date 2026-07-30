# AWS CLI setup (for automating deploys)

One-time setup so AWS work — the contact-form Lambda today, more later — can be run by
script instead of clicking through the console. Do this on the Mac where the project lives.

> **Never paste your secret access key into chat or commit it.** It lives only in
> `~/.aws/credentials` on your machine. Scripts (and Claude, via the terminal) call the `aws`
> CLI, which reads it from there — the secret is never shared.

---

## 1. Install the AWS CLI (v2)

**Homebrew (simplest):**
```bash
brew install awscli
aws --version          # expect: aws-cli/2.x ...
```

If you don't use Homebrew, the official pkg:
```bash
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "/tmp/AWSCLIV2.pkg"
sudo installer -pkg /tmp/AWSCLIV2.pkg -target /
aws --version
```

## 2. Create a dedicated IAM user for automation

Don't use your root login or the existing `listmonk` user. Make a purpose-built, scoped one.

1. AWS Console → **IAM → Users → Create user** → name `svasamm-deployer`.
   - **Do NOT** enable console access (programmatic/CLI only).
2. **Permissions → Attach policies → Create inline policy → JSON**, paste the policy below,
   name it `svasamm-deployer-policy`. It grants only Lambda + SES + scoped IAM-role
   management (roles named `svasamm-*`) + log reading — nothing else.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "LambdaManage",
      "Effect": "Allow",
      "Action": [
        "lambda:CreateFunction", "lambda:UpdateFunctionCode", "lambda:UpdateFunctionConfiguration",
        "lambda:GetFunction", "lambda:GetFunctionConfiguration", "lambda:ListFunctions",
        "lambda:CreateFunctionUrlConfig", "lambda:UpdateFunctionUrlConfig", "lambda:GetFunctionUrlConfig",
        "lambda:AddPermission", "lambda:RemovePermission", "lambda:TagResource"
      ],
      "Resource": "*"
    },
    {
      "Sid": "IamForSvasammRolesOnly",
      "Effect": "Allow",
      "Action": [
        "iam:CreateRole", "iam:GetRole", "iam:AttachRolePolicy", "iam:PutRolePolicy",
        "iam:ListRolePolicies", "iam:ListAttachedRolePolicies"
      ],
      "Resource": "arn:aws:iam::*:role/svasamm-*"
    },
    {
      "Sid": "PassRoleToLambdaOnly",
      "Effect": "Allow",
      "Action": "iam:PassRole",
      "Resource": "arn:aws:iam::*:role/svasamm-*",
      "Condition": { "StringEquals": { "iam:PassedToService": "lambda.amazonaws.com" } }
    },
    {
      "Sid": "SesManageAndSend",
      "Effect": "Allow",
      "Action": [
        "ses:SendEmail", "ses:CreateEmailIdentity", "ses:GetEmailIdentity",
        "ses:ListEmailIdentities", "ses:PutEmailIdentityDkimAttributes"
      ],
      "Resource": "*"
    },
    {
      "Sid": "ReadLogs",
      "Effect": "Allow",
      "Action": ["logs:GetLogEvents", "logs:DescribeLogGroups", "logs:DescribeLogStreams", "logs:FilterLogEvents"],
      "Resource": "*"
    }
  ]
}
```

> The IAM statements are the only "powerful" part — they're scoped to roles named `svasamm-*`
> and to passing roles only to Lambda, so this user can't create admin roles or escalate.
> If you'd rather not grant any IAM at all, create the Lambda execution role once by hand and
> drop the two IAM statements — the deploy script will reuse the existing role.

3. **Create access key**: user → **Security credentials → Create access key** →
   *Command Line Interface (CLI)* → download the CSV (Access key ID + Secret).

## 3. Configure a named profile

Using a **named profile** (`svasamm`) keeps this separate from any other AWS creds you have.

```bash
aws configure --profile svasamm
# AWS Access Key ID     : <paste from CSV>
# AWS Secret Access Key : <paste from CSV>
# Default region name   : us-east-1        # same region as your SES
# Default output format : json
```

This writes `~/.aws/credentials` and `~/.aws/config`. Verify:

```bash
aws sts get-caller-identity --profile svasamm
# → shows Account, UserId, Arn ending in user/svasamm-deployer
```

To avoid typing `--profile svasamm` every time in a shell:
```bash
export AWS_PROFILE=svasamm
```

## 4. Security hygiene (important)

- **Never commit** `~/.aws/` or the CSV. (It's in your home dir, not the repo — keep it that way.)
- **Rotate** the access key every few months (create new → update `aws configure` → delete old).
- If a key ever leaks, **deactivate it immediately** in IAM and create a fresh one.
- Consider enabling **MFA** on your root account and any console users.

## 5. (Optional, more secure) AWS IAM Identity Center / SSO

Instead of long-lived access keys, `aws configure sso` gives short-lived credentials that
auto-expire — the modern best practice. More setup up front; worth it later if the team grows.
For a solo founder, the scoped IAM user above is a fine, common starting point.

---

## Once this is done

Tell me it's configured (profile `svasamm`, region `us-east-1`) and I'll run
[`aws/contact-form/deploy.sh`](../aws/contact-form/deploy.sh) — it creates the execution role,
the Lambda, and the public Function URL, then prints the URL. Future AWS tasks become scripts
in the repo, not console clicks.
