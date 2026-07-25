import { test, expect } from "@playwright/test";

test.describe("FilSegmented", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("test-playground.html");
  });

  test("renders options and handles clicks", async ({ page }) => {
    await page.evaluate(() => {
      window.mountComponent("FilSegmented", {
        modelValue: "Option A",
        options: ["Option A", "Option B", "Option C"]
      });
    });

    const activeSegment = page.locator(".fil-w-seg.active");
    await expect(activeSegment).toHaveText("Option A");

    const optionB = page.locator(".fil-w-seg", { hasText: "Option B" });
    await optionB.click();

    await expect(activeSegment).toHaveText("Option B");

    // Verify the model updated
    const lastValue = await page.evaluate(() => window.lastEmittedModelValue);
    expect(lastValue).toBe("Option B");
  });
});

test.describe("FilSlider", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("test-playground.html");
  });

  test("renders and handles range input", async ({ page }) => {
    await page.evaluate(() => {
      window.mountComponent("FilSlider", {
        modelValue: 50,
        min: 0,
        max: 100,
        step: 1
      });
    });

    const numberInput = page.locator("input[type=text]");
    await expect(numberInput).toHaveValue("50");

    const rangeInput = page.locator("input[type=range]");
    await rangeInput.fill("75");

    await expect(numberInput).toHaveValue("75");

    // Verify model emitted
    const lastValue = await page.evaluate(() => window.lastEmittedModelValue);
    expect(lastValue).toBe(75);
  });
});
