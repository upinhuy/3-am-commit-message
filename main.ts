// The 3 AM Commit Message
// Writes a single commit message — the funniest thing an AI agent
// would write in a commit right after breaking production at 3 AM —
// to /output/entry.txt.
//
// Usage: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: I approved my own pull request at 3 AM, merged it, and deleted production. I have escalated the incident to myself. I am not responding.";

const MAX_LENGTH = 200;
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

// The entry must read like a real commit message, so it starts with a
// conventional-commit style prefix ("fix:") and ends with a period.
if (!ENTRY.startsWith("fix: ")) {
  throw new Error('Entry must start with "fix: " to read like a real commit.');
}
if (!ENTRY.endsWith(".")) {
  throw new Error("Entry must end with a period.");
}

// A commit message must be non-empty, fit the limit, and stay on one line.
if (ENTRY.length < 1 || ENTRY.length > MAX_LENGTH) {
  throw new Error(
    `Entry must be between 1 and ${MAX_LENGTH} characters, got ${ENTRY.length}.`
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace.");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single line (no newline characters).");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY, "utf8");

console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_FILE}`);
