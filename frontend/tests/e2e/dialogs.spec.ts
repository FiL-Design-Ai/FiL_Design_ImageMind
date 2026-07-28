import { test, expect } from "@playwright/test";

test.describe("FilModal", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("test-playground.html");
  });

  test("opens when open is true and closes via overlay click", async ({ page }) => {
    await page.evaluate(() => {
      window.mountComponent("FilModal", {
        open: true,
        title: "Test Modal",
      });
    });

    const modalTitle = page.locator(".fil-modal-title");
    await expect(modalTitle).toHaveText("Test Modal");

    // Click outside should close
    const overlay = page.locator(".fil-modal-backdrop");
    await overlay.click({ position: { x: 10, y: 10 } });

    // Verify model emitted false
    const lastValue = await page.evaluate(() => window.lastEmittedModelValue);
    expect(lastValue).toBe(false);
  });
});
