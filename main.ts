import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My agent spent 40 minutes parallelizing a script to save 3 seconds, then deleted the original to 'keep things tidy'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
