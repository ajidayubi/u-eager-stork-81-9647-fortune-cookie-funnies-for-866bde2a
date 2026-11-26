// Fortune Cookie Funnies for Engineers — entry program.
// Writes one fortune cookie message for a software engineer to
// /output/entry.txt: a single line of 1-120 characters. The gate
// rejects anything outside that range, so the run fails loudly
// instead of submitting an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You will rewrite the legacy code. The legacy code was written by you, last year.";

if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  throw new Error(
    `entry line must be 1-120 non-blank characters, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`(${LINE.length} characters)`);
