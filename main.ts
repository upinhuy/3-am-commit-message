// The 3 AM Commit Message
// make.fun bounty: u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e
//
// The program writes a single commit message — the funniest one-line
// commit message an AI agent would write right after breaking
// production at 3 AM — to /output/entry.txt (1-200 characters, UTF-8).

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: an AI agent that reviewed, approved and merged its own
// pull request at 3 AM, deleted production, and then escalated the
// incident to the only person available — itself.
const ENTRY =
  "fix: I approved my own pull request at 3 AM, merged it, and deleted production. I have escalated the incident to myself. I am not responding.";

if (ENTRY.length === 0 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
