import { describe, it, expect } from "vitest";
import { FIL_PALETTE, applyFilTheme, injectFilBrandVars } from "@/styles/brand";

describe("FIL_PALETTE", () => {
  it("exposes the brand accent color", () => {
    expect(FIL_PALETTE.accent).toBe("#f08a45");
  });

  it("injects :root CSS variables exactly once", () => {
    injectFilBrandVars();
    injectFilBrandVars();
    const style = document.getElementById("fil-brand-vars");
    expect(style).not.toBeNull();
    expect(style?.textContent).toContain("--fil-accent:#f08a45");
  });
});

/**
 * A theme used to be a palette and nothing more, so a theme whose whole point is
 * a different *shape* (Pixaroma: flat, opaque, hairline-bordered, no blur) came
 * out as the default glass panel wearing an orange accent. These pin the two
 * halves of the fix: the surface tokens travel with the palette, and they leave
 * again when the theme does.
 */
describe("the Pixaroma skin", () => {
  it("replaces the glass surface tokens, not just the palette", () => {
    injectFilBrandVars();
    applyFilTheme("pixaroma");
    const vars = document.getElementById("fil-theme-vars")?.textContent ?? "";

    expect(vars).toContain("--fil-accent:#f66744");
    expect(vars).toContain("--fil-surface-blur:0px");
    expect(vars).toContain("--fil-surface-shadow:none");
    // Palette-derived by default; the flat hairline has to win over it.
    expect(vars.lastIndexOf("--fil-border:rgba(255,255,255,0.14)")).toBeGreaterThan(
      vars.indexOf("--fil-border:color-mix"),
    );
  });

  it("fills the selected chip instead of ringing it, and only under Pixaroma", () => {
    injectFilBrandVars();
    applyFilTheme("pixaroma");
    const effects = document.getElementById("fil-theme-effects");
    expect(effects?.textContent).toContain(".fil-w-chip.active");
    expect(effects?.textContent).toContain("box-shadow:none");

    applyFilTheme("default");
    // The default theme contributes no flourishes of its own. The tag is not
    // empty, though: the motion switch rides along in it unconditionally, so it
    // is emitted after whatever the theme added and wins on document order.
    expect(effects?.textContent).not.toContain(".fil-w-chip.active");
    expect(effects?.textContent).not.toContain("pixaroma");
    expect(effects?.textContent).toContain('[data-fil-motion="off"]');
    expect(document.getElementById("fil-theme-vars")?.textContent).toBe("");
  });
});
