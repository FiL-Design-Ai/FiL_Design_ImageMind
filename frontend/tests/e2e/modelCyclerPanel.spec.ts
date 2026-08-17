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

const NODE_WIDTH = 400;

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

/**
 * The toolbar in the socket strip, against a node shaped like the real cycler:
 * two optional inputs and five outputs, the longest of them `MODEL_NAME`.
 *
 * Copied from `loraLoaderPanel.spec.ts` because both ways this broke were
 * invisible to every jsdom test: the bar is in the DOM with the right offsets
 * either way. The panel surface clips it away, or an over-constrained box drops
 * the right inset and it runs out over the output labels.
 */
async function mountOnFakeNode(page: import("@playwright/test").Page, nodeWidth = 760) {
  await page.goto("test-playground.html");
  await page.addStyleTag({
    // The strip sits ~96px above the panel, which on a canvas is the node's own
    // socket rows. Here it has to be page margin, or the lifted bar lands above
    // the viewport and the paint check below reads an empty point.
    content: `#app { max-width: ${nodeWidth - 20}px; padding: 8px; margin-top: 160px; }
              .fil-node-shell { position: relative; }`,
  });
  await page.evaluate((width) => {
    // The playground has no canvas node, so stand one up: the panel only ever
    // asks for slot positions, sizes and the canvas transform.
    const node = {
      pos: [100, 100],
      size: [width, 300],
      inputs: [{ name: "clip_in" }, { name: "vae_in" }],
      outputs: [
        { name: "MODEL" },
        { name: "CLIP" },
        { name: "VAE" },
        { name: "MODEL_NAME" },
        { name: "CLEAN_NAME" },
      ],
      getConnectionPos: (isInput: boolean, slot: number) => [
        isInput ? 110 : 100 + width - 9,
        114 + slot * 20,
      ],
      widgets: [
        { name: "model_list", value: "modelA.safetensors" },
        { name: "source_mode", value: "Checkpoints" },
      ],
    };
    (window as unknown as { LiteGraph: Record<string, unknown> }).LiteGraph = {
      NODE_SLOT_HEIGHT: 20,
      NODE_TEXT_SIZE: 14,
      NODE_FONT: "Arial",
      vueNodesMode: false,
    };
    const shell = document.createElement("div");
    shell.className = "fil-node-shell";
    document.getElementById("app")!.appendChild(shell);
    const mount = document.createElement("div");
    shell.appendChild(mount);

    const rect = shell.getBoundingClientRect();
    (window as unknown as { app: unknown }).app = {
      canvas: {
        canvas: {
          getBoundingClientRect: () => ({ left: rect.left, top: rect.top - 96 }),
        },
        ds: { scale: 1, offset: [-100, -100] },
      },
    };

    const state: Record<string, unknown> = {
      nodeState: { model_list: "modelA.safetensors", source_mode: "Checkpoints" },
      initialValues: {},
      ui: {},
    };
    Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
    window.mountComponent("ModelCyclerPanel", { state });
  }, nodeWidth);
  await page.waitForSelector(".fil-cycler-actions-bar");
}

test.describe("Model Cycler toolbar in the socket strip", () => {
  test("is lifted, painted, and clear of both label columns", async ({ page }) => {
    await mountOnFakeNode(page);

    const bar = page.locator(".fil-cycler-actions-bar");
    await expect(bar).toHaveClass(/floated/);

    const barBox = (await bar.boundingBox())!;
    const panelBox = (await page.locator(".fil-cycler-root").boundingBox())!;

    // Actually lifted out of the panel, not merely styled.
    expect(barBox.y + barBox.height).toBeLessThanOrEqual(panelBox.y + 1);

    // Painted, not clipped away by the panel's rounded-corner surface: a
    // clipped element keeps its rect and stops answering hit tests.
    const hit = await page.evaluate(() => {
      const el = document.querySelector(".fil-cycler-actions-bar")!;
      const r = el.getBoundingClientRect();
      const found = document.elementFromPoint(r.left + 8, r.top + r.height / 2);
      return Boolean(found && el.contains(found));
    });
    expect(hit, "the bar is in the DOM but nothing is painted where it sits").toBe(true);

    // And it stops short of the columns the labels are drawn in — `MODEL_NAME`
    // is the widest of them.
    expect(barBox.x).toBeGreaterThan(panelBox.x);
    expect(barBox.x + barBox.width).toBeLessThan(panelBox.x + panelBox.width - 40);
  });

  test("carries all three lines inside the strip", async ({ page }) => {
    await mountOnFakeNode(page);

    const bar = page.locator(".fil-cycler-actions-bar");
    await expect(bar).toHaveClass(/floated/);
    await expect(bar.locator(".fil-band-line")).toHaveCount(3);

    // Add, the counter and Run All share the last line, as drawn.
    const lastLine = bar.locator(".fil-band-line").nth(2);
    await expect(lastLine.locator(".fil-band-add")).toBeVisible();
    await expect(lastLine.locator(".fil-stack-count")).toContainText("/");
    await expect(lastLine.locator(".fil-cycler-queue-btn")).toContainText("Run All");
  });

  test("stays in flow when the node is too narrow for the strip", async ({ page }) => {
    await mountOnFakeNode(page, 240);

    const bar = page.locator(".fil-cycler-actions-bar");
    await expect(bar).not.toHaveClass(/floated/);
    const barBox = (await bar.boundingBox())!;
    const panelBox = (await page.locator(".fil-cycler-root").boundingBox())!;
    expect(barBox.y).toBeGreaterThanOrEqual(panelBox.y);
  });
});

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
