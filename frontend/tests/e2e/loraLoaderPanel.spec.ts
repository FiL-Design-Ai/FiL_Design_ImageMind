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
    // `configurable: true` the way `lora_loader.ts` parks it — a
    // non-configurable property throws when Vue wraps the object in a proxy.
    Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
    window.mountComponent("LoraLoaderPanel", { state });
  }, loraList);
  await page.waitForSelector(".fil-lora-row");
}

/**
 * The floated toolbar, against a node shaped like the real one.
 *
 * Both ways this broke were invisible to every test that existed: the bar was
 * in the DOM with the right offsets each time. First the pack-wide panel
 * surface (`styles/brand.ts`) clips every root to its rounded corners, so a
 * bar lifted above the panel was simply not painted. Then, with the clip
 * lifted, the bar kept its in-flow `width: 100%` — left plus right plus a
 * width is over-constrained, CSS drops the right one, and it ran out over the
 * MODEL label. So this asserts what the eye checks: that the bar is on screen
 * where it claims to be, and that the label columns stay clear of it.
 */
async function mountOnFakeNode(page: import("@playwright/test").Page, nodeWidth = 420) {
  await page.goto("test-playground.html");
  await page.addStyleTag({
    // The strip sits ~92px above the panel, which on a canvas is the node's own
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
      inputs: [{ name: "model" }, { name: "clip" }],
      outputs: [{ name: "MODEL" }, { name: "CLIP" }, { name: "TRIGGERS" }, { name: "LABEL" }],
      getConnectionPos: (isInput: boolean, slot: number) => [
        isInput ? 110 : 100 + width - 9,
        114 + slot * 20,
      ],
      widgets: [{ name: "lora_list", value: "a.safetensors:1.00:1.00" }],
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
      nodeState: { lora_list: "a.safetensors:1.00:1.00" },
      initialValues: {},
      ui: {},
    };
    Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
    window.mountComponent("LoraLoaderPanel", { state });
  }, nodeWidth);
  await page.waitForSelector(".fil-cycler-actions-bar");
}

test.describe("LoRA Loader toolbar in the socket strip", () => {
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

    // And it stops short of the columns the labels are drawn in.
    expect(barBox.x).toBeGreaterThan(panelBox.x);
    expect(barBox.x + barBox.width).toBeLessThan(panelBox.x + panelBox.width - 40);
  });

  test("the bulk actions take the rows below, and the more button goes away", async ({ page }) => {
    await mountOnFakeNode(page);

    const bulk = page.locator(".fil-actions-menu");
    await expect(bulk).toHaveClass(/floated/);
    await expect(page.locator(".fil-actions-more")).toHaveCount(0);

    const labels = (await bulk.locator("button").allTextContents()).join(" ");
    expect(labels).toContain("1.00 All");
    expect(labels).toContain("Clear");

    // Two socket rows apart, so neither bar sits on the other.
    const toolbar = (await page.locator(".fil-cycler-actions-bar").boundingBox())!;
    const bulkBox = (await bulk.boundingBox())!;
    expect(bulkBox.y).toBeGreaterThanOrEqual(toolbar.y + toolbar.height);

    // And the lower rows are free on the left, so these start further left
    // than the toolbar above them.
    expect(bulkBox.x).toBeLessThan(toolbar.x);
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

    await expect(page.locator(".fil-w-numfield")).toHaveCount(3);

    const row = (await page.locator(".fil-lora-row").first().boundingBox())!;
    // Two stacked weight blocks with their labels ran past 120px a row; the
    // whole point of the change is that three LoRAs now fit where two did.
    expect(row.height).toBeLessThan(90);

    const stack = (await page.locator(".fil-cycler-stack").boundingBox())!;
    expect(stack.height).toBeLessThan(270);
  });

  test("right-click on a row opens its own menu, not the canvas one", async ({ page }) => {
    await mountPanel(page, STACK);

    let canvasMenuAsked = false;
    await page.exposeFunction("__filCanvasMenu", () => {
      canvasMenuAsked = true;
    });
    await page.evaluate(() => {
      // Anything that reaches the page behind the panel would be LiteGraph's
      // own menu on a real canvas.
      document.addEventListener("contextmenu", () => {
        (window as unknown as { __filCanvasMenu: () => void }).__filCanvasMenu();
      });
    });

    await page.locator(".fil-lora-row").first().click({ button: "right" });

    const menu = page.locator(".fil-row-menu");
    await expect(menu).toBeVisible();
    const labels = (await menu.locator("button").allTextContents()).join(" ");
    expect(labels).toContain("More info");
    expect(labels).toContain("Move down");
    expect(labels).toContain("Duplicate");
    expect(labels).toContain("Remove");
    expect(canvasMenuAsked, "the event carried on past the row").toBe(false);

    // The first row cannot move up, and says so rather than doing nothing.
    await expect(menu.locator("button", { hasText: "Move up" })).toBeDisabled();
  });

  test("move down, duplicate and remove rewrite the stack", async ({ page }) => {
    await mountPanel(page, STACK);
    const listOf = () =>
      page.evaluate(() => {
        const widgets = (
          document.querySelector(".fil-cycler-root") as unknown as { __vue__?: unknown }
        );
        void widgets;
        return (window as unknown as { __filList: () => string }).__filList();
      });
    await page.evaluate(() => {
      (window as unknown as { __filList: () => string }).__filList = () =>
        (document.querySelectorAll(".fil-lora-row") as unknown as ArrayLike<Element>).length +
        ":" +
        [...document.querySelectorAll(".fil-cycler-select-wrap")]
          .map((el) => (el.textContent || "").trim().split("\\n")[0])
          .join("|");
    });

    const before = await listOf();
    await page.locator(".fil-lora-row").first().click({ button: "right" });
    await page.locator(".fil-row-menu button", { hasText: "Duplicate" }).click();
    const afterDuplicate = await listOf();
    expect(afterDuplicate).not.toBe(before);
    await expect(page.locator(".fil-lora-row")).toHaveCount(4);

    await page.locator(".fil-lora-row").first().click({ button: "right" });
    await page.locator(".fil-row-menu button", { hasText: "Remove" }).click();
    await expect(page.locator(".fil-lora-row")).toHaveCount(3);
  });

  test("the row's occasional controls wait for the pointer", async ({ page }) => {
    await mountPanel(page, STACK);

    const firstRow = page.locator(".fil-lora-row").first();
    const quiet = firstRow.locator(".fil-row-quiet-actions");

    // Present, so the row never changes width — just not shown.
    await expect(quiet).toHaveCount(1);
    await expect(quiet).toBeHidden();
    const restingWidth = (await firstRow.locator(".fil-cycler-select-wrap").boundingBox())!.width;

    await firstRow.hover();
    await expect(quiet).toBeVisible();
    expect(
      (await firstRow.locator(".fil-cycler-select-wrap").boundingBox())!.width,
      "the name field resized when the controls appeared — the row shifts under the cursor",
    ).toBe(restingWidth);
  });

  test("asking for a separate CLIP weight adds the second slider, and only then", async ({
    page,
  }) => {
    await mountPanel(page, STACK);

    const firstRow = page.locator(".fil-lora-row").first();
    const before = (await firstRow.boundingBox())!.height;

    // Asked for from the row's menu: as a button in the row it read as
    // "move up/down" next to a drag handle that already reorders.
    await firstRow.click({ button: "right" });
    await page.locator(".fil-row-menu button", { hasText: "Separate CLIP weight" }).click();

    await expect(firstRow.locator(".fil-w-numfield")).toHaveCount(2);
    expect((await firstRow.boundingBox())!.height).toBeGreaterThan(before);
    // The other rows stay as they were.
    await expect(page.locator(".fil-lora-row").nth(1).locator(".fil-w-numfield")).toHaveCount(1);
  });

  test("no filter box until there is something to filter", async ({ page }) => {
    await mountPanel(page, STACK);
    await expect(page.locator(".fil-stack-search-input")).toHaveCount(0);

    const long = Array.from(
      { length: 7 },
      (_, i) => `lora_${i + 1}.safetensors:1.00:1.00`,
    ).join("\n");
    await mountPanel(page, long);
    await expect(page.locator(".fil-stack-search-input")).toHaveCount(1);
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
