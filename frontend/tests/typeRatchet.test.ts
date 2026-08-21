import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";

/**
 * The seam between this pack and ComfyUI stays typed.
 *
 * `nodeStyle.ts` and `domWidgetHost.ts` carry more `fix` commits than any other
 * pair of files here, and until this ratchet existed the node and node-class
 * arguments crossing that seam were `unknown` — with each call site
 * re-declaring the shape inline, so nothing checked that two of them agreed.
 * `types/comfy.ts` now describes the host once (`LGraphNode`,
 * `LGraphNodeType`, `ComfyLikeWidget`, `LGraphSlot`, `LGraphLink`).
 *
 * Only the named parameters are counted, never `(...args: unknown[])`: a hook's
 * arguments genuinely differ between ComfyUI versions and between the canvas
 * and Vue renderers, and pinning those would be a promise this pack cannot
 * keep. Typing what a *node* is costs nothing and is checkable.
 *
 * A ratchet, not a ban. The counts may fall — lower them here when they do —
 * and the leftovers are listed below with the reason each survives. What they
 * may not do is grow: a new `node: unknown` is a new untyped boundary, and this
 * is the only thing that would say so before it reached a browser.
 */

// Relative to the vitest root (`frontend/`), the way every other
// filesystem-reading test here resolves paths — `import.meta.url` is not a
// file URL under the jsdom environment.
const SRC = resolve(process.cwd(), "src");

/**
 * What is still allowed, and why.
 *
 * - `useConnectionFx` / `useRunButtonFx` take whatever the host event handed
 *   them, from a callback this pack does not control the signature of.
 * - `nodeRegistry.ts` documents the one `nodeType: unknown` left, on the
 *   boundary ComfyUI itself declares untyped (`beforeRegisterNodeDef`).
 */
const BUDGET: Record<string, number> = {
  "node: unknown": 3,
  "nodeType: unknown": 1,
  "this: unknown": 1,
};

function sourceFiles(dir: string, found: string[] = []): string[] {
  for (const entry of readdirSync(dir).sort()) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) sourceFiles(path, found);
    else if (path.endsWith(".ts") || path.endsWith(".vue")) found.push(path);
  }
  return found;
}

function occurrences(pattern: string): { total: number; where: string[] } {
  const where: string[] = [];
  let total = 0;
  for (const file of sourceFiles(SRC)) {
    const lines = readFileSync(file, "utf8").split("\n");
    lines.forEach((line, index) => {
      if (!line.includes(pattern)) return;
      total += 1;
      where.push(`${relative(SRC, file).split("\\").join("/")}:${index + 1}`);
    });
  }
  return { total, where };
}

describe("the ComfyUI seam stays typed", () => {
  for (const [pattern, budget] of Object.entries(BUDGET)) {
    it(`has at most ${budget} \`${pattern}\` in src/`, () => {
      const { total, where } = occurrences(pattern);
      expect(
        total,
        total > budget
          ? `\`${pattern}\` went from ${budget} to ${total}. A node crossing this ` +
            `seam untyped is how a change to nodeStyle.ts or domWidgetHost.ts ` +
            `reaches a browser before it reaches a checker. Use LGraphNode / ` +
            `LGraphNodeType from @/types/comfy.\n  ${where.join("\n  ")}`
          : `\`${pattern}\` is down to ${total} — lower the budget in this file ` +
            `to ${total} so it cannot climb back.\n  ${where.join("\n  ")}`,
      ).toBe(budget);
    });
  }

  it("describes the host in one place", () => {
    const comfy = readFileSync(join(SRC, "types", "comfy.ts"), "utf8");
    for (const name of [
      "ComfyLikeWidget",
      "LGraphSlot",
      "LGraphLink",
      "LGraphLike",
      "LGraphNodePrototype",
      "LGraphNodeType",
      "LGraphNode",
    ]) {
      expect(comfy, `types/comfy.ts no longer exports ${name}`).toContain(
        `export interface ${name} `,
      );
    }
  });
});
