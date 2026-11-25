// The Moon finally answers back — one wry line, in the Moon's own voice.
// Four billion years of wishes, howls and late-night promises — and still
// nobody has ever once asked the Moon how it was doing. Tonight it answers.
import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "I've heard four billion years of wishes and not one of you ever asked how I was doing — I'm fine, keep howling.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
