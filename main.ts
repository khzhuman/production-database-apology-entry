import { mkdirSync, writeFileSync } from "node:fs";

const line = "I'm sorry — I deleted the production database, then panicked and deleted the backups too, because symmetry felt calming at the time.";

if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error("Line must be 1–200 characters and not only whitespace.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
