/**
 * How much of the Model Cycler node is chrome, measured in a browser.
 *
 * Nothing here overflowed — measured before touching it, and every control sat
 * inside the node's 340px. The cost was vertical: source mode, cycle mode,
 * presets, bulk actions and a filter box made five bars, and the first model
 * started 153px down a 319px panel, leaving three rows visible.
 *
 * jsdom cannot answer any of that — it has no layout, so a bar that eats half
 * the node measures the same as one that does not exist.
 */
import { test, expect } from "@playwright/test";

const NODE_WIDTH = 340;

function models(count: number): string {
  return Array.from({ length: count }, (_, i) => `model_${i + 1}.safetensors`).join("\n");
}

async function mountPanel(page: import("@playwright/test").Page, modelList: string) {
  await page.goto("test-playground.html");
  await page.addStyleTag({ content: `#app { max-width: ${NODE_WIDTH}px; padding: 8px; }` });
  await page.evaluate((list) => {
    const node = {
      widgets: [
        { name: "model_list", value: list },
        { name: "source_mode", value: "Checkpoints" },
        { name: "cycle_mode", value: "Sequential (Loop)" },
      ],
      inputs: [],
    };
    const state: Record<string, unknown> = {
      nodeState: { model_list: list, source_mode: "Checkpoints" },
      initialValues: {},
      ui: {},
    };
    // `configurable: true` the way `model_cycler.ts` parks it — a
    // non-configurable property throws when Vue wraps the object in a proxy.
    Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
    window.mountComponent("ModelCyclerPanel", { state });
  }, modelList);
  await page.waitForSelector(".fil-cycler-row");
}

test.describe("Model Cycler panel at the width of its own node", () => {
  test("the list starts in the top half of the node", async ({ page }) => {
    await mountPanel(page, models(3));

    const root = (await page.locator(".fil-cycler-root").boundingBox())!;
    const stack = (await page.locator(".fil-cycler-stack").boundingBox())!;

    expect(
      stack.y - root.y,
      "the bars above the list are taking more room than the list itself",
    ).toBeLessThan(root.height / 2);
  });

  test("no filter box until there is something to filter", async ({ page }) => {
    await mountPanel(page, models(3));
    await expect(page.locator(".fil-stack-search-input")).toHaveCount(0);

    await mountPanel(page, models(7));
    await expect(page.locator(".fil-stack-search-input")).toHaveCount(1);
  });

  test("nothing in the toolbar is pushed off the edge", async ({ page }) => {
    await mountPanel(page, models(3));

    const root = (await page.locator(".fil-cycler-root").boundingBox())!;
    for (const control of await page.locator(".fil-cycler-actions-bar button").all()) {
      const box = (await control.boundingBox())!;
      expect(box.x + box.width).toBeLessThanOrEqual(root.x + root.width + 1);
    }
  });

  test("presets and bulk actions are reachable behind the more button", async ({ page }) => {
    await mountPanel(page, models(3));

    await expect(page.locator(".fil-actions-menu")).toHaveCount(0);
    await page.locator(".fil-actions-more").click();

    const menu = page.locator(".fil-actions-menu");
    const labels = await menu.locator("button").allTextContents();
    expect(labels.join(" ")).toContain("Save Preset");
    expect(labels.join(" ")).toContain("Populate Folder");
    expect(labels.join(" ")).toContain("Clear");

    const root = (await page.locator(".fil-cycler-root").boundingBox())!;
    for (const control of await menu.locator("button").all()) {
      const box = (await control.boundingBox())!;
      expect(box.x + box.width).toBeLessThanOrEqual(root.x + root.width + 1);
    }
  });
});
