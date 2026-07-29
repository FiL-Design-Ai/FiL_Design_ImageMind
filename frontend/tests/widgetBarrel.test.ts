/**
 * The widget barrel must list every widget in the folder.
 *
 * `index.ts` asks for this in its own header comment — "keep this list in sync
 * with the *.vue files in this folder" — and nothing checked it. On 2026-07-29
 * two were missing: FilColorPicker and FilHelpPopup, both reachable only by
 * deep-importing the .vue path the barrel exists to avoid.
 */
import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const WIDGETS_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "../src/components/widgets");

describe("widget barrel", () => {
  it("exports every .vue file in the widgets folder", () => {
    const files = readdirSync(WIDGETS_DIR)
      .filter((f) => f.endsWith(".vue"))
      .sort();
    const barrel = readFileSync(resolve(WIDGETS_DIR, "index.ts"), "utf-8");

    const missing = files.filter((f) => !barrel.includes(`./${f}`));
    expect(missing, `widgets absent from index.ts: ${missing.join(", ")}`).toEqual([]);
  });

  it("does not export a file that no longer exists", () => {
    const files = new Set(readdirSync(WIDGETS_DIR).filter((f) => f.endsWith(".vue")));
    const barrel = readFileSync(resolve(WIDGETS_DIR, "index.ts"), "utf-8");

    const referenced = [...barrel.matchAll(/\.\/(Fil\w+\.vue)/g)].map((m) => m[1]);
    const dangling = referenced.filter((f) => !files.has(f));
    expect(dangling, `index.ts points at missing files: ${dangling.join(", ")}`).toEqual([]);
  });
});
