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

  // FilSlider dropped its native <input type=range> track — ComfyUI's own
  // default number widget has no separate bar either, dragging the field
  // itself is the slider now (FilNumberInput's scrub overlay).
  test("renders as a plain arrow-flanked number field, no separate track", async ({ page }) => {
    await page.evaluate(() => {
      window.mountComponent("FilSlider", {
        modelValue: 50, min: 0, max: 100, step: 5, label: "Weight",
      });
    });

    await expect(page.locator("input[type=range]")).toHaveCount(0);

    const numberInput = page.locator("input.fil-w-num");
    await expect(numberInput).toHaveValue("50");

    await page.locator(".fil-w-num-arrow-right").click();
    await expect(numberInput).toHaveValue("55");

    const lastValue = await page.evaluate(() => window.lastEmittedModelValue);
    expect(lastValue).toBe(55);
  });

  /**
   * jsdom has no `setPointerCapture` and no real layout, so the unit suite
   * can only simulate a drag by dispatching synthetic PointerEvents — it
   * cannot prove a real mouse-down-and-move does the same thing. This does,
   * through Playwright's actual OS-level pointer.
   *
   * The step=0.1 choice is deliberate: it is the exact case that used to
   * regress to `1.2000000000000002` before `FilNumberInput` started
   * rounding to the step's own decimal precision.
   */
  test("scrubs the value by dragging, landing on a clean decimal", async ({ page }) => {
    await page.evaluate(() => {
      window.mountComponent("FilSlider", {
        modelValue: 1, min: 0, max: 2, step: 0.1, label: "Denoise",
      });
    });

    const box = await page.locator(".fil-w-num-scrub").boundingBox();
    if (!box) throw new Error("scrub overlay missing");
    const startX = box.x + box.width / 2;
    const startY = box.y + box.height / 2;

    await page.mouse.move(startX, startY);
    await page.mouse.down();
    await page.mouse.move(startX + 30, startY, { steps: 5 });
    await page.mouse.up();

    // 30px of drag at 10px/step, step=0.1 => +0.3.
    await expect(page.locator("input.fil-w-num")).toHaveValue("1.3");
  });
});
