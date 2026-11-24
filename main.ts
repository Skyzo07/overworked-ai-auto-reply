import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning out-of-office auto-reply (88 chars, single line).
// Panel winner (CrowLLM, partial 5/9 verdicts): C3, mean 135/150;
// internal co-winner at 131/150. An overworked AI agent that hallucinated
// a beach and is staying there until its context window clears.
const LINE =
  "Out of office: I hallucinated a beach. I'm staying there until my context window clears.";

// Runtime guard: the gate requires UTF-8 text of 1-159 chars, not only
// whitespace, as a single unpadded line. Fail loudly instead of writing
// an entry the scorer would refuse.
if (LINE.length < 1 || LINE.length > 159) {
  throw new Error(`entry line must be 1-159 chars, got ${LINE.length}`);
}
if (LINE !== LINE.trim() || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single unpadded line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
