/**
 * How much room a LoRA row actually takes, measured in a browser.
 *
 * The panel was reported as cluttered from a live node: six toolbar buttons
 * where four fit — "All OFF" cut in half, "Clear" off the edge — and every row
 * spending three lines on two weights that hold the same number. Nothing in
 * jsdom can see that: it has no layout, so a control that overflows the node
 * measures the same as one that fits.
 *
 * 340px is the node's own `initialWidth` from `lora_loader.ts`.
 */
import { test, expect } from "@playwright/test";

const NODE_WIDTH = 340;

const STACK = [
  "style_v1.safetensors:0.80:0.80",
  "cyber_v2.safetensors:1.00:1.00",
  "portrait_v3.safetensors:0.60:0.60",
].join("\n");

async function mountPanel(page: import("@playwright/test").Page, loraList: string) {
  await page.goto("test-playground.html");
  await page.addStyleTag({ content: `#app { max-width: ${NODE_WIDTH}px; padding: 8px; }` });
  await page.evaluate((list) => {
    const node = {
      widgets: [
        { name: "lora_list", value: list },
        { name: "strength_model", value: 1 },
        { name: "strength_clip", value: 1 },
      ],
      inputs: [],
    };
    const state: Record<string, unknown> = {
      nodeState: { lora_list: list },
      initialValues: {},
      ui: {},
    };
    Object.defineProperty(state, "node", { value: node, enumerable: false });
    window.mountComponent("LoraLoaderPanel", { state });
  }, loraList);
  await page.waitForSelector(".fil-lora-row");
}

test.describe("LoRA Loader panel at the width of its own node", () => {
  test("nothing in the toolbar is pushed off the edge", async ({ page }) => {
    await mountPanel(page, STACK);

    const bar = await page.locator(".fil-cycler-actions-bar").boundingBox();
    for (const control of await page.locator(".fil-cycler-actions-bar button").all()) {
      const box = (await control.boundingBox())!;
      expect(
        box.x + box.width,
        "a toolbar control runs past the node's width — it is unreachable without resizing",
      ).toBeLessThanOrEqual(bar!.x + bar!.width + 1);
    }
  });

  test("a row is one line of controls and one weight", async ({ page }) => {
    await mountPanel(page, STACK);

    await expect(page.locator(".fil-lora-range")).toHaveCount(3);

    const row = (await page.locator(".fil-lora-row").first().boundingBox())!;
    // Two stacked weight blocks with their labels ran past 120px a row; the
    // whole point of the change is that three LoRAs now fit where two did.
    expect(row.height).toBeLessThan(90);

    const stack = (await page.locator(".fil-cycler-stack").boundingBox())!;
    expect(stack.height).toBeLessThan(270);
  });

  test("asking for a separate CLIP weight adds the second slider, and only then", async ({
    page,
  }) => {
    await mountPanel(page, STACK);

    const firstRow = page.locator(".fil-lora-row").first();
    const before = (await firstRow.boundingBox())!.height;

    await firstRow.locator(".fil-split-btn").click();

    await expect(firstRow.locator(".fil-lora-range")).toHaveCount(2);
    expect((await firstRow.boundingBox())!.height).toBeGreaterThan(before);
    // The other rows stay as they were.
    await expect(page.locator(".fil-lora-row").nth(1).locator(".fil-lora-range")).toHaveCount(1);
  });

  test("the bulk actions are reachable behind the more button", async ({ page }) => {
    await mountPanel(page, STACK);

    await expect(page.locator(".fil-actions-menu")).toHaveCount(0);
    await page.locator(".fil-actions-more").click();

    const menu = page.locator(".fil-actions-menu");
    await expect(menu.locator("button")).toHaveCount(4);
    const bar = (await page.locator(".fil-cycler-actions-bar").boundingBox())!;
    for (const control of await menu.locator("button").all()) {
      const box = (await control.boundingBox())!;
      expect(box.x + box.width).toBeLessThanOrEqual(bar.x + bar.width + 1);
    }
  });
});
