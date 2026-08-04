import { test, expect, type Page } from "@playwright/test";
import { openBlankWorkflow, closeScratchWorkflow } from "./comfyWindow";

/**
 * Wireless channels settling a real KSampler's `positive`/`negative` — the
 * case the whole rulebook is written around, end to end in a live ComfyUI.
 *
 * The component suite drives the panel over a fake host; this one proves the
 * two things that fake cannot: that the ambiguity machinery survives the real
 * `onConnectionsChange` the host fires (timing, async panel mount, the lot),
 * and that what the panel writes lands on a genuine LGraphNode the way the
 * backend will later read it. Two shapes, one per half of the feature:
 *
 *  - channels whose names pair with the sampler's inputs resolve by rule 8,
 *    silently — nothing opens, both counts read 1;
 *  - unnamed channels stay ambiguous, the cluster modal opens on its own,
 *    and confirming it subscribes both inputs on the node itself.
 */

interface SceneNode {
  comfyClass?: string;
  type?: string;
  inputs?: Array<{ name: string; label?: string }>;
  properties?: Record<string, unknown>;
  pos: [number, number];
  connect(slot: number, target: unknown, targetSlot: number): unknown;
}

/**
 * Build the graph the way a user drags it: two encoders → one transmitter →
 * a sampler nearby. With `rename`, the transmitter's slots get their labels
 * BEFORE any wire lands — the channels are named from the first moment they
 * exist, which is the case rule 8 resolves without asking anyone.
 */
async function buildScene(page: Page, rename: boolean): Promise<void> {
  await page.evaluate(async (rename) => {
    const litegraph = window.LiteGraph;
    const encPos = litegraph.createNode("CLIPTextEncode") as SceneNode;
    const encNeg = litegraph.createNode("CLIPTextEncode") as SceneNode;
    const channel = litegraph.createNode("FiLChannel") as SceneNode;
    const sampler = litegraph.createNode("KSampler") as SceneNode;
    if (!encPos || !encNeg || !channel || !sampler) throw new Error("one of the nodes did not instantiate");

    encPos.pos = [60, 60];
    encNeg.pos = [60, 360];
    channel.pos = [560, 140];
    sampler.pos = [1060, 60];
    for (const node of [encPos, encNeg, channel, sampler]) window.app.graph.add(node);

    const frames = async (count: number) => {
      for (let i = 0; i < count; i++) await new Promise((r) => requestAnimationFrame(r));
    };
    await frames(60);

    if (rename) {
      // What core's "Rename Slot" writes — the label field, and nothing else.
      channel.inputs![0].label = "positive";
      channel.inputs![1].label = "negative";
    }

    encPos.connect(0, channel, 0);
    encNeg.connect(0, channel, 1);
    await frames(90);
  }, rename);
}

/** The panel's own host element on the transmitter — where its rows render. */
function panelHostOf(page: Page) {
  return page.evaluateHandle(() => {
    const channel = window.app.graph._nodes.find(
      (n) => (n as { comfyClass?: string }).comfyClass === "FiLChannel",
    ) as unknown as { _filVueApps?: Record<string, { host: HTMLElement }> } | undefined;
    const host = channel?._filVueApps ? Object.values(channel._filVueApps)[0]?.host : undefined;
    if (!host) throw new Error("the Channel panel rendered nothing");
    return host;
  });
}

async function channelCounts(page: Page): Promise<string[]> {
  const host = await panelHostOf(page);
  const texts = await host.evaluate((el) =>
    Array.from(el.querySelectorAll(".fil-channel-count")).map((n) => n.textContent?.trim() ?? ""),
  );
  await host.dispose();
  return texts;
}

test.describe("wireless channels in a real ComfyUI", () => {
  test.afterEach(async ({ page }) => {
    await closeScratchWorkflow(page).catch(() => {});
  });

  test("channels named after the sampler's inputs pair with them, nothing asked", async ({ page }) => {
    await page.goto("/");
    await openBlankWorkflow(page);
    await buildScene(page, true);

    await expect
      .poll(() => channelCounts(page), { timeout: 15_000 })
      .toEqual(["1", "1"]);

    // And it stayed silent: no cluster modal, no per-channel target list.
    expect(await page.locator(".fil-channel-cluster-row").count()).toBe(0);
    expect(await page.locator(".fil-channel-target").count()).toBe(0);
  });

  test("unnamed channels open the cluster modal, and confirming connects both", async ({ page }) => {
    await page.goto("/");
    await openBlankWorkflow(page);
    await buildScene(page, false);

    // Two unnamed CONDITIONING channels, one sampler with `positive` and
    // `negative` both free — rule 7 territory, so the panel must raise the
    // cluster modal on its own: one row per input, one chip per channel.
    const rows = page.locator(".fil-channel-cluster-row");
    await expect.poll(() => rows.count(), { timeout: 15_000 }).toBe(2);
    await expect.poll(() => rows.nth(0).locator(".fil-channel-chip").count(), { timeout: 5_000 }).toBe(2);

    await rows.nth(0).locator(".fil-channel-chip").nth(0).click(); // CONDITIONING → positive
    await rows.nth(1).locator(".fil-channel-chip").nth(1).click(); // CONDITIONING 2 → negative
    await page.locator(".fil-channel-cluster-footer button").click();

    // The decision landed on the node itself, the way the backend reads it.
    const wireless = await page.evaluate(() => {
      const sampler = window.app.graph._nodes.find(
        (n) => (n as { comfyClass?: string }).comfyClass === "KSampler",
      ) as unknown as { properties?: Record<string, unknown> } | undefined;
      return sampler?.properties?.fil_wireless ?? null;
    });
    expect(wireless).toEqual({ subs: { positive: "CONDITIONING", negative: "CONDITIONING 2" } });

    await expect.poll(() => page.locator(".fil-channel-cluster-row").count(), { timeout: 5_000 }).toBe(0);
    await expect
      .poll(() => channelCounts(page), { timeout: 15_000 })
      .toEqual(["1", "1"]);
  });
});
