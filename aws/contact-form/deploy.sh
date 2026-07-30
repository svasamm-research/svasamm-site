#!/usr/bin/env bash
# Deploy (or update) the svasamm contact-form Lambda + public Function URL.
# Idempotent: safe to re-run — creates what's missing, updates what exists.
#
# Prereqs: AWS CLI configured (see docs/aws-cli-setup.md) and svasamm.com verified in SES.
# Usage:   AWS_PROFILE=svasamm ./aws/contact-form/deploy.sh
#
# Overridable via env:
set -euo pipefail

PROFILE="${AWS_PROFILE:-svasamm}"
REGION="${AWS_REGION:-us-east-1}"
FN="${FN:-svasamm-contact-form}"
ROLE="${ROLE:-svasamm-contact-form-role}"
MAIL_FROM="${MAIL_FROM:-no-reply@svasamm.com}"
MAIL_TO="${MAIL_TO:-query@svasamm.com}"
ALLOW_ORIGIN="${ALLOW_ORIGIN:-https://svasamm.com}"

DIR="$(cd "$(dirname "$0")" && pwd)"
aws() { command aws --profile "$PROFILE" --region "$REGION" "$@"; }
say() { printf '\n\033[1m▸ %s\033[0m\n' "$*"; }

ACCOUNT="$(aws sts get-caller-identity --query Account --output text)"
ROLE_ARN="arn:aws:iam::${ACCOUNT}:role/${ROLE}"

# ── 1. Execution role ────────────────────────────────────────────────────────
if aws iam get-role --role-name "$ROLE" >/dev/null 2>&1; then
  say "IAM role $ROLE exists"
else
  say "Creating IAM role $ROLE"
  aws iam create-role --role-name "$ROLE" \
    --assume-role-policy-document '{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Principal":{"Service":"lambda.amazonaws.com"},"Action":"sts:AssumeRole"}]}' >/dev/null
  aws iam attach-role-policy --role-name "$ROLE" \
    --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole >/dev/null
  aws iam put-role-policy --role-name "$ROLE" --policy-name ses-send \
    --policy-document '{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Action":"ses:SendEmail","Resource":"*"}]}' >/dev/null
  echo "  waiting for role to propagate..."; sleep 12
fi

# ── 2. Package (Node 20 bundles the AWS SDK — zip is just the handler) ────────
say "Packaging"
ZIP="$(mktemp -d)/fn.zip"
( cd "$DIR" && zip -q "$ZIP" index.mjs )

ENV_JSON="{\"Variables\":{\"SES_REGION\":\"${REGION}\",\"MAIL_FROM\":\"${MAIL_FROM}\",\"MAIL_TO\":\"${MAIL_TO}\",\"ALLOW_ORIGIN\":\"${ALLOW_ORIGIN}\"}}"

# ── 3. Lambda (create or update) ─────────────────────────────────────────────
if aws lambda get-function --function-name "$FN" >/dev/null 2>&1; then
  say "Updating Lambda $FN"
  aws lambda update-function-code --function-name "$FN" --zip-file "fileb://$ZIP" >/dev/null
  aws lambda wait function-updated --function-name "$FN"
  aws lambda update-function-configuration --function-name "$FN" \
    --runtime nodejs20.x --handler index.handler --timeout 10 --environment "$ENV_JSON" >/dev/null
else
  say "Creating Lambda $FN"
  # retry: freshly-created roles can take a moment to be assumable
  for i in 1 2 3 4 5; do
    if aws lambda create-function --function-name "$FN" \
        --runtime nodejs20.x --handler index.handler --role "$ROLE_ARN" \
        --timeout 10 --zip-file "fileb://$ZIP" --environment "$ENV_JSON" >/dev/null 2>/tmp/mkfn.err; then
      break
    fi
    echo "  attempt $i failed (role propagation?), retrying..."; sleep 8
    [ "$i" = 5 ] && { cat /tmp/mkfn.err; exit 1; }
  done
fi
aws lambda wait function-updated --function-name "$FN"

# ── 4. Public API Gateway HTTP API ───────────────────────────────────────────
# NOTE: Lambda *Function URLs* are blocked by the AWS-org guardrail on this account, so we
# front the Lambda with an HTTP API instead. CORS + OPTIONS are handled by the Lambda itself
# (it returns the CORS headers and answers preflight), so no API-level CORS config is needed.
API_NAME="${API_NAME:-svasamm-contact}"
LAMBDA_ARN="$(aws lambda get-function --function-name "$FN" --query Configuration.FunctionArn --output text)"
API_ID="$(aws apigatewayv2 get-apis --query "Items[?Name=='${API_NAME}'].ApiId | [0]" --output text)"
if [ "$API_ID" = "None" ] || [ -z "$API_ID" ]; then
  say "Creating HTTP API $API_NAME"
  API_ID="$(aws apigatewayv2 create-api --name "$API_NAME" --protocol-type HTTP --target "$LAMBDA_ARN" --query ApiId --output text)"
  aws lambda add-permission --function-name "$FN" --statement-id apigw-invoke \
    --action lambda:InvokeFunction --principal apigateway.amazonaws.com \
    --source-arn "arn:aws:execute-api:${REGION}:${ACCOUNT}:${API_ID}/*" >/dev/null 2>&1 || true
else
  say "HTTP API $API_NAME exists ($API_ID)"
fi

URL="$(aws apigatewayv2 get-api --api-id "$API_ID" --query ApiEndpoint --output text)/"
say "Done. Contact endpoint:"
echo "  $URL"
echo
echo "Test it:"
echo "  curl -i -X POST '$URL' -H 'content-type: application/json' \\"
echo "    -d '{\"name\":\"Test\",\"email\":\"you@example.com\",\"message\":\"pipe test\"}'"
