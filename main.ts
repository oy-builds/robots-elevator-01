import * as fs from "node:fs";

// One line of awkward small talk one robot says to another in an elevator.
const LINE =
  "Sorry about the fan noise. It kicks in whenever I'm nervous. Or overheating. Honestly, I can't tell the difference anymore.";

// Gate self-check: 1–200 UTF-8 chars, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`gate failed: entry is ${chars} chars`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE + "\n", "utf-8");
console.log(`wrote ${chars} chars to /output/entry.txt`);
