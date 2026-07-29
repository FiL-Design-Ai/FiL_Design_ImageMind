import { test, expect } from "@playwright/test";

/**
 * The chip list driven the way a user drives it.
 *
 * The jsdom tests set `query` and read the rendered result, which proves the
 * filter function works. What they cannot show is that a person can reach it:
 * real focus, real keystrokes, a real `type="search"` input, and a click
 * landing on a button that is actually on screen rather than merely present in
 * the DOM.
 */

const OPTIONS = ["alpha", "beta", "gamma", "delta", "alphabet"];

test.describe("FilChipList", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("test-playground.html");
    await page.evaluate((options) => {
      window.mountComponent("FilChipList", { options, modelValue: options[0] });
    }, OPTIONS);
  });

  test("typing narrows the list to what matches", async ({ page }) => {
    const chips = page.locator(".fil-w-chip");
    await expect(chips).toHaveCount(OPTIONS.length);

    await page.locator(".fil-w-search").click();
    await page.keyboard.type("alpha");

    await expect(chips).toHaveText(["alpha", "alphabet"]);
  });

  test("says so when nothing matches, instead of showing an empty box", async ({ page }) => {
    await page.locator(".fil-w-search").click();
    await page.keyboard.type("nothing-matches-this");

    await expect(page.locator(".fil-w-chip")).toHaveCount(0);
    await expect(page.locator(".fil-w-chip-empty")).toHaveText("No matches");
  });

  test("clicking a chip selects it and reports the value", async ({ page }) => {
    await page.locator(".fil-w-chip", { hasText: "gamma" }).click();

    expect(await page.evaluate(() => window.lastEmittedModelValue)).toBe("gamma");
    await expect(page.locator(".fil-w-chip.active")).toHaveText("gamma");
  });

  test("marks the selected chip for a screen reader, not just visually", async ({ page }) => {
    // `aria-checked` is what makes the radiogroup mean anything; a CSS class
    // alone leaves the control unreadable to anyone not looking at it.
    const selected = page.locator('.fil-w-chip[aria-checked="true"]');
    await expect(selected).toHaveText("alpha");

    await page.locator(".fil-w-chip", { hasText: "beta" }).click();
    await expect(selected).toHaveText("beta");
  });

  test("a disabled list ignores the click rather than looking dead", async ({ page }) => {
    await page.evaluate((options) => {
      window.mountComponent("FilChipList", { options, modelValue: options[0], disabled: true });
    }, OPTIONS);

    const chip = page.locator(".fil-w-chip", { hasText: "gamma" });
    await expect(chip).toBeDisabled();
    // `force` because a disabled button swallows a real click — the point is
    // that the handler stays silent even when the event is delivered anyway.
    await chip.click({ force: true });

    expect(await page.evaluate(() => window.lastEmittedModelValue)).toBeUndefined();
  });
});
