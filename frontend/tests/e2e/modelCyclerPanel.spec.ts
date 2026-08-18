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

/** What a new cycler node opens at — `DESIGN_WIDTH` in `model_cycler.ts`. */
const NODE_WIDTH = 560;

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
 * two optional inputs and five outputs, the longest of them `model_name`.
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
      inputs: [{ name: "clip" }, { name: "vae" }],
      outputs: [
        { name: "model" },
        { name: "clip" },
        { name: "vae" },
        { name: "model_name" },
        { name: "clean_name" },
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

    // And it stops short of the columns the labels are drawn in — `model_name`
    // is the widest of them.
    expect(barBox.x).toBeGreaterThan(panelBox.x);
    expect(barBox.x + barBox.width).toBeLessThan(panelBox.x + panelBox.width - 40);
  });

  /**
   * The toolbar was laid out at 400 and stays there: a node dragged wider hands
   * the strip more room, and a bar that took all of it would stretch its boxes
   * and read as a different panel at every width.
   */
  test("keeps its own width however wide the node is", async ({ page }) => {
    for (const nodeWidth of [760, 1100]) {
      await mountOnFakeNode(page, nodeWidth);
      const bar = page.locator(".fil-cycler-actions-bar");
      await expect(bar).toHaveClass(/floated/);

      // Within a pixel: the insets are integers and the panel's own width is
      // not, so the block can land a rounding away from the number asked for.
      const barBox = (await bar.boundingBox())!;
      expect(barBox.width, `at a node ${nodeWidth} wide`).toBeGreaterThan(398);
      expect(barBox.width, `at a node ${nodeWidth} wide`).toBeLessThan(402);
    }
  });

  test("carries all three lines inside the strip", async ({ page }) => {
    await mountOnFakeNode(page);

    const bar = page.locator(".fil-cycler-actions-bar");
    await expect(bar).toHaveClass(/floated/);
    await expect(bar.locator(".fil-band-line")).toHaveCount(3);

    // The strip is five socket rows tall and the block has to end above the
    // panel — the check that keeps a line from landing on the list.
    const barBox = (await bar.boundingBox())!;
    const panelBox = (await page.locator(".fil-cycler-root").boundingBox())!;
    expect(barBox.y + barBox.height).toBeLessThanOrEqual(panelBox.y + 1);

    // Add, the counter and Run All share the last line, as drawn.
    const lastLine = bar.locator(".fil-band-line").nth(2);
    await expect(lastLine.locator(".fil-band-add")).toBeVisible();
    await expect(lastLine.locator(".fil-stack-count")).toContainText("/");
    await expect(lastLine.locator(".fil-cycler-queue-btn")).toContainText("Run All");
  });

  test("is lifted at the width new nodes start at", async ({ page }) => {
    // New cycler nodes are born 560 wide: the squeezed toolbar — selects
    // truncated to their floors, buttons keeping their labels — has to ride
    // the strip there, or the "between the sockets" layout never shows.
    await mountOnFakeNode(page, 560);

    const bar = page.locator(".fil-cycler-actions-bar");
    await expect(bar).toHaveClass(/floated/);
  });

  /**
   * Reported from a live graph on 2026-08-18: the toolbar rode the strip on a
   * fresh node and dropped into the panel the moment a model was added.
   *
   * Read this test for what it is. It passes with and without the fix that
   * followed — the playground stands the node up itself, so the panel never
   * moves and the race the live host has is not on offer here. What it does
   * hold is the invariant the bug broke: adding a row is not allowed to move
   * the toolbar. Whether the live case is actually fixed was answered in
   * ComfyUI, not here.
   */
  test("stays in the strip when a model is added to the queue", async ({ page }) => {
    await mountOnFakeNode(page);

    const bar = page.locator(".fil-cycler-actions-bar");
    await expect(bar).toHaveClass(/floated/);
    const before = (await bar.boundingBox())!;

    await bar.locator(".fil-band-add").click();
    await expect(page.locator(".fil-cycler-row")).toHaveCount(2);
    // Past the row's own transition, which is when the old code gave up.
    await page.waitForTimeout(400);

    await expect(bar).toHaveClass(/floated/);
    const after = (await bar.boundingBox())!;
    expect(Math.abs(after.y - before.y), "the toolbar moved").toBeLessThan(2);
    expect(Math.abs(after.width - before.width), "the toolbar resized").toBeLessThan(2);
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

  /**
   * Reported from a screenshot on 2026-08-17: the boxes on the middle line
   * read "Na...", "Sequentia..." and "Prese...". Presets have since left the
   * node, so the two that remain have the line to themselves and have to show
   * their longest option in full.
   */
  test("the boxes on the middle line fit the labels they show", async ({ page }) => {
    await mountPanel(page, models(3));

    for (const wrap of [".fil-sort-select-wrap", ".fil-cycler-mode-select"]) {
      const select = page.locator(`${wrap} select`);

      // Room for the longest option, the chevron Chrome draws inside the box
      // and the padding — measured against the text, not a round number.
      const room = await select.evaluate((el) => {
        const cs = getComputedStyle(el);
        const ctx = document.createElement("canvas").getContext("2d")!;
        ctx.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
        const widest = Math.max(
          ...[...(el as HTMLSelectElement).options].map((o) => ctx.measureText(o.textContent ?? "").width),
        );
        return el.clientWidth - widest - 16;
      });
      expect(room, `${wrap} clips its own longest option`).toBeGreaterThan(0);
    }
  });

  test("the bulk actions sit on the toolbar lines, in the open", async ({ page }) => {
    await mountPanel(page, models(3));

    const bar = page.locator(".fil-cycler-actions-bar");
    const middleLine = bar.locator(".fil-band-line").nth(1);
    const lastLine = bar.locator(".fil-band-line").nth(2);

    // No more button left to hide them behind, and no presets to hide.
    await expect(page.locator(".fil-actions-more")).toHaveCount(0);
    await expect(page.locator(".fil-actions-menu")).toHaveCount(0);
    await expect(page.getByRole("button", { name: /Preset/ })).toHaveCount(0);

    await expect(middleLine.getByRole("button", { name: /Clear/ })).toBeVisible();
    await expect(lastLine.getByRole("button", { name: /Add All/ })).toBeVisible();

    const root = (await page.locator(".fil-cycler-root").boundingBox())!;
    for (const control of await bar.locator("button").all()) {
      const box = (await control.boundingBox())!;
      expect(box.x + box.width).toBeLessThanOrEqual(root.x + root.width + 1);
    }
  });
});
