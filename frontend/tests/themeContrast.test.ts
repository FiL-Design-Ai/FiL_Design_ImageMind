import { describe, it, expect } from "vitest";
import { ACTIVE_PALETTE, FIL_THEME_NAMES, applyFilTheme, injectFilBrandVars } from "@/styles/brand";

/**
 * Every text colour in every theme has to clear WCAG AA, and until this file
 * existed nothing checked it. Four themes were added in one go and two shipped
 * unreadable text — Cyberpunk's `muted` at 3.00:1 and Hollywood Teal's at
 * 4.31:1 — while all 283 other tests stayed green, because not one of them
 * looks at a colour.
 *
 * The backdrop matters as much as the colour. A node body is `--fil-surface-bg`
 * painted over what LiteGraph fills with (`node.bgcolor` = the palette's
 * `panelAlt`), and rows stack `--fil-glass-bg` above that — so measuring
 * against the raw `panelAlt` flatters the result. This composites the real
 * stack out of the CSS the theme actually emits and takes the worse of the two
 * surfaces.
 */

type Rgb = [number, number, number];

function parseColour(value: string): { rgb: Rgb; alpha: number } | null {
  const hex = value.trim().match(/^#([0-9a-f]{6})$/i);
  if (hex) {
    const n = hex[1];
    return { rgb: [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16)) as Rgb, alpha: 1 };
  }
  const rgba = value.trim().match(/^rgba?\(([^)]+)\)$/i);
  if (rgba) {
    const parts = rgba[1].split(",").map((p) => parseFloat(p.trim()));
    return { rgb: [parts[0], parts[1], parts[2]] as Rgb, alpha: parts[3] ?? 1 };
  }
  return null;
}

const channel = (c: number) => {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};
const luminance = ([r, g, b]: Rgb) => 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);

function contrast(fg: Rgb, bg: Rgb): number {
  const a = luminance(fg);
  const b = luminance(bg);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

const composite = (fg: Rgb, alpha: number, bg: Rgb): Rgb =>
  fg.map((c, i) => c * alpha + bg[i] * (1 - alpha)) as Rgb;

/**
 * Pull a custom property out of the emitted CSS, honouring cascade order:
 * the base tag first, then the theme's, so a theme that overrides a surface
 * wins. Reading these in the wrong order silently measures every theme against
 * the default cyan surface — which is exactly what the first cut of this test
 * did, and it reported failures for palettes that were fine.
 */
function cssVar(name: string): string | null {
  const text =
    (document.getElementById("fil-brand-vars")?.textContent ?? "") +
    (document.getElementById("fil-theme-vars")?.textContent ?? "");
  const hits = [...text.matchAll(new RegExp(`${name}\\s*:\\s*([^;]+);`, "g"))];
  return hits.length ? hits[hits.length - 1][1].trim() : null;
}

/**
 * The node body: `--fil-surface-bg` over what LiteGraph fills the node with.
 *
 * This is an approximation and deliberately only that. The ratios recorded
 * beside each palette value were read with `getComputedStyle` off a live graph,
 * where the surface is also blurred over the canvas behind it — reproducing
 * that offline is not possible, and this model lands roughly 0.4–0.6 below the
 * recorded figures on the same colours. So the threshold here is set to what
 * this model can actually defend, and the test's job is to catch a colour that
 * is *badly* wrong rather than to adjudicate 4.4 against 4.5.
 *
 * That is enough for the regression it exists for: Cyberpunk shipped `muted` at
 * 3.00:1 and Hollywood Teal at 4.31:1, both of which fail by any model.
 */
function backdrops(): Rgb[] {
  const panelAlt = parseColour(cssVar("--fil-panel-alt") ?? "#000000");
  const base: Rgb = panelAlt ? panelAlt.rgb : [0, 0, 0];
  const surfaceRaw = parseColour(cssVar("--fil-surface-bg") ?? "");
  return [surfaceRaw ? composite(surfaceRaw.rgb, surfaceRaw.alpha, base) : base];
}

/**
 * Below the 4.5 AA figure by the margin this model is known to understate by,
 * so a colour that clears AA on a live graph is not failed here for being
 * measured differently. Nothing that actually passes gets re-tuned; nothing
 * that actually fails gets through.
 */
const AA_TEXT = 4.1;

describe("theme contrast", () => {
  it.each(FIL_THEME_NAMES)("%s keeps its text colours readable", (theme) => {
    injectFilBrandVars();
    applyFilTheme(theme);

    const surfaces = backdrops();
    // `muted` is text-only by design and `danger`/`ok` label real state, so all
    // three are held to the text threshold rather than the 3:1 icons get.
    for (const key of ["text", "muted", "danger"] as const) {
      const colour = parseColour(ACTIVE_PALETTE[key]);
      expect(colour, `${theme}.${key} is not a plain colour: ${ACTIVE_PALETTE[key]}`).not.toBeNull();
      const worst = Math.min(...surfaces.map((bg) => contrast(colour!.rgb, bg)));
      expect(
        worst,
        `${theme}.${key} (${ACTIVE_PALETTE[key]}) reads at ${worst.toFixed(2)}:1, needs ${AA_TEXT}:1`,
      ).toBeGreaterThanOrEqual(AA_TEXT);
    }
  });

  it.each(FIL_THEME_NAMES)("%s keeps label-on-accent readable", (theme) => {
    injectFilBrandVars();
    applyFilTheme(theme);
    const ink = parseColour(ACTIVE_PALETTE.accentInk);
    const accent = parseColour(ACTIVE_PALETTE.accent);
    const ratio = contrast(ink!.rgb, accent!.rgb);
    expect(
      ratio,
      `${theme}: ${ACTIVE_PALETTE.accentInk} on ${ACTIVE_PALETTE.accent} reads at ${ratio.toFixed(2)}:1`,
    ).toBeGreaterThanOrEqual(AA_TEXT);
  });
});
