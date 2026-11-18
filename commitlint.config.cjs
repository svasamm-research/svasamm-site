// Conventional Commits (feat:, fix:, content:, ci:, chore: …), as on lucoze.com (18 Nov 2026).
// Merge and promotion commits are not new work, so they are not checked.
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: { "type-enum": [2, "always", ["feat", "fix", "content", "ci", "chore", "docs", "test", "refactor", "perf", "build", "style", "revert"]] },
  ignores: [(m) => m.startsWith("Merge "), (m) => /^Promote\s+\w+\s+to\s+\w+/i.test(m)],
};
