import { test, expect } from "@playwright/test";

/**
 * How much of a models folder the picker can show at once.
 *
 * Reported from a live node: the list showed seven names out of the four
 * hundred a LoRA folder holds. The cap was a flat 240px written into the
 * stylesheet — on a monitor with room for thirty rows it still showed seven,
 * and on a short window it could still run past the bottom edge. It is
 * measured from the room the screen has now, which is a question only a
 * browser can answer: jsdom has no viewport and no layout.
 */
const MANY = Array.from({ length: 60 }, (_, i) => ({
  value: `lora_${i + 1}.safetensors`,
  label: `lora_${i + 1}`,
}));

async function openPicker(page: import("@playwright/test").Page, height: number) {
  await page.setViewportSize({ width: 1200, height });
  await page.goto("test-playground.html");
  await page.evaluate((options) => {
    window.mountComponent("FilComboBox", { modelValue: "", options, searchable: true });
  }, MANY);
  await page.locator(".fil-combo-trigger").click();
  await page.waitForSelector(".fil-combo-list");
}

test.describe("FilComboBox list height", () => {
  test("uses the room a tall window has", async ({ page }) => {
    await openPicker(page, 1000);

    const list = page.locator(".fil-combo-list");
    const box = (await list.boundingBox())!;
    expect(box.height, "still capped at the old 240px").toBeGreaterThan(300);

    // Enough of the folder to scan rather than scroll blind.
    const visible = await list.evaluate((el) => {
      const row = el.querySelector(".fil-combo-option");
      return row ? Math.floor(el.clientHeight / (row as HTMLElement).offsetHeight) : 0;
    });
    expect(visible).toBeGreaterThan(10);
  });

  test("stays inside a short window", async ({ page }) => {
    await openPicker(page, 420);

    const list = page.locator(".fil-combo-list");
    const panel = page.locator(".fil-combo-panel");
    const panelBox = (await panel.boundingBox())!;
    expect(panelBox.y).toBeGreaterThanOrEqual(-1);
    expect(
      panelBox.y + panelBox.height,
      "the picker hangs past the bottom of the window",
    ).toBeLessThanOrEqual(420 + 1);
    expect((await list.boundingBox())!.height).toBeGreaterThan(100);
  });
});
