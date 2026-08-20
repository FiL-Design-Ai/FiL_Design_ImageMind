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

  /**
   * Asked for from a live node: the model-info dialog holds a model's Civitai
   * sample prompts, which are three lines on one model and thirty on the next,
   * so the reader has to be able to make the window bigger. jsdom cannot answer
   * this — it has no layout, so a panel that refuses to resize measures the
   * same as one that does.
   */
  test("a resizable dialog can actually be dragged bigger", async ({ page }) => {
    await page.evaluate(() => {
      window.mountComponent("FilModal", { open: true, title: "Roomy", resizable: true });
    });

    const panel = page.locator(".fil-modal-panel");
    await expect(panel).toHaveClass(/resizable/);
    expect(await panel.evaluate((el) => getComputedStyle(el).resize)).toBe("both");

    const before = (await panel.boundingBox())!;
    // What the corner grip does, without depending on where the browser draws it.
    await panel.evaluate((el) => {
      el.style.width = `${el.getBoundingClientRect().width + 160}px`;
      el.style.height = `${el.getBoundingClientRect().height + 120}px`;
    });
    const after = (await panel.boundingBox())!;
    expect(after.width).toBeGreaterThan(before.width + 100);
    expect(after.height).toBeGreaterThan(before.height + 80);
  });

  test("an ordinary dialog keeps no grip", async ({ page }) => {
    await page.evaluate(() => {
      window.mountComponent("FilModal", { open: true, title: "Plain" });
    });
    const panel = page.locator(".fil-modal-panel");
    await expect(panel).not.toHaveClass(/resizable/);
    expect(await panel.evaluate((el) => getComputedStyle(el).resize)).toBe("none");
  });
});
