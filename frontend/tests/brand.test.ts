import { describe, it, expect } from "vitest";
import { FIL_PALETTE, injectFilBrandVars } from "@/styles/brand";

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