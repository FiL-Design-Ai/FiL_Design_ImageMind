import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { test, expect, type Page } from "@playwright/test";

const here = path.dirname(fileURLToPath(import.meta.url));
import { openBlankWorkflow, closeScratchWorkflow } from "./comfyWindow";

/** The panel's own host element on the transmitter — where its rows render. */
async function channelCounts(page: Page): Promise<string[]> {
  const host = await page.evaluateHandle(() => {
    const channel = window.app.graph._nodes.find(
      (n) => (n as { comfyClass?: string }).comfyClass === "FiLChannel",
    ) as unknown as { _filVueApps?: Record<string, { host: HTMLElement }> } | undefined;
    const hostEl = channel?._filVueApps ? Object.values(channel._filVueApps)[0]?.host : undefined;
    if (!hostEl) throw new Error("the Channel panel rendered nothing");
    return hostEl;
  });
  const texts = await host.evaluate((el) =>
    Array.from(el.querySelectorAll(".fil-channel-count")).map((n) => n.textContent?.trim() ?? ""),
  );
  await host.dispose();
  return texts;
}

/**
 * The Channel node in a real ComfyUI, wired the way the README shows it:
 * a MODEL and a VAE plugged in, each becoming its own channel.
 *
 * Doubles as the gallery shot: the capture overwrites docs/images/channel.png
 * on every run, so the README picture is always the current UI. The assertion
 * is the smoke value — a Channel whose panel stops rendering two wired
 * channels fails here, not in a user report.
 */
test("captures the Channel node for the README gallery", async ({ page }) => {
  await page.goto("/");
  await openBlankWorkflow(page);

  const box = await page.evaluate(async () => {
    const litegraph = window.LiteGraph;
    const unet = litegraph.createNode("UNETLoader") as {
      pos: [number, number];
      connect(slot: number, target: unknown, targetSlot: number): unknown;
    };
    const vae = litegraph.createNode("VAELoader") as {
      pos: [number, number];
      connect(slot: number, target: unknown, targetSlot: number): unknown;
    };
    const channel = litegraph.createNode("FiLChannel") as { pos: [number, number]; size: [number, number] };
    const sampler = litegraph.createNode("KSampler") as { pos: [number, number] };
    if (!unet || !vae || !channel || !sampler) throw new Error("one of the nodes did not instantiate");

    unet.pos = [60, 60];
    vae.pos = [60, 360];
    channel.pos = [560, 140];
    sampler.pos = [1060, 60];
    for (const node of [unet, vae, channel, sampler]) window.app.graph.add(node);

    const frames = async (count: number) => {
      for (let i = 0; i < count; i++) await new Promise((r) => requestAnimationFrame(r));
    };
    await frames(60);

    unet.connect(0, channel, 0);
    vae.connect(0, channel, 1);
    await frames(90);

    const canvas = window.app.canvas;
    if (!canvas?.ds) throw new Error("no canvas transform");
    canvas.ds.scale = 1;
    canvas.centerOnNode?.(channel);
    canvas.setDirty?.(true, true);
    await frames(30);

    const host = (channel as unknown as { _filVueApps?: Record<string, { host: HTMLElement }> })._filVueApps;
    const panelHost = host ? Object.values(host)[0]?.host : undefined;
    if (!panelHost || panelHost.clientHeight === 0) throw new Error("the Channel panel rendered nothing");

    const rect = (canvas.canvas as HTMLCanvasElement).getBoundingClientRect();
    const [scale, offset] = [canvas.ds.scale, canvas.ds.offset ?? [0, 0] as [number, number]];
    return {
      x: rect.left + (channel.pos[0] + offset[0]) * scale,
      y: rect.top + (channel.pos[1] + offset[1]) * scale,
      width: channel.size[0] * scale,
      height: channel.size[1] * scale,
      panelHeight: panelHost.clientHeight,
    };
  });

  expect(box.panelHeight).toBeGreaterThan(0);

  // The new LiteGraph draws the title bar and the pack's brand tag above
  // node.pos, so the box the node reports starts well below what the eye sees
  // as the node.
  const TITLE_PX = 48;
  const pad = 14;
  await page.screenshot({
    path: path.join(here, "..", "..", "..", "docs", "images", "channel.png"),
    clip: {
      x: Math.max(0, box.x - pad),
      y: Math.max(0, box.y - TITLE_PX - pad),
      width: box.width + pad * 2,
      height: box.height + TITLE_PX + pad * 2,
    },
  });

  await closeScratchWorkflow(page);
});

/**
 * The target dialog's search box and filter chips, live: the panel's row list
 * is what a user scrolls through on a crowded graph, and neither jsdom nor a
 * component mount can say whether the dialog the real host renders actually
 * narrows.
 */
test("the channel target dialog searches and filters its rows", async ({ page }) => {
  await page.goto("/");
  await openBlankWorkflow(page);

  await page.evaluate(async () => {
    const litegraph = window.LiteGraph;
    const unet = litegraph.createNode("UNETLoader") as {
      pos: [number, number];
      connect(slot: number, target: unknown, targetSlot: number): unknown;
    };
    const channel = litegraph.createNode("FiLChannel") as { pos: [number, number] };
    const ksA = litegraph.createNode("KSampler") as { pos: [number, number]; title?: string };
    const ksB = litegraph.createNode("KSampler") as { pos: [number, number]; title?: string };
    if (!unet || !channel || !ksA || !ksB) throw new Error("one of the nodes did not instantiate");

    unet.pos = [60, 60];
    channel.pos = [560, 140];
    ksA.pos = [1060, 60];
    ksB.pos = [1060, 560];
    // A distinct title so the search has something only one row can match.
    ksB.title = "Sampler Bravo";
    for (const node of [unet, channel, ksA, ksB]) window.app.graph.add(node);

    const frames = async (count: number) => {
      for (let i = 0; i < count; i++) await new Promise((r) => requestAnimationFrame(r));
    };
    await frames(60);
    unet.connect(0, channel, 0); // MODEL
    await frames(90);
  });

  // Both KSamplers take the MODEL broadcast — the row's count says so.
  await expect.poll(() => channelCounts(page), { timeout: 20_000 }).toEqual(["2"]);

  await page.locator(".fil-channel-gear").click();
  const search = page.locator(".fil-channel-search-input");
  await expect.poll(() => search.count(), { timeout: 5_000 }).toBe(1);
  expect(await page.locator(".fil-channel-target").count()).toBe(2);

  // The query narrows by node title, input label or raw name.
  await search.fill("bravo");
  await expect.poll(() => page.locator(".fil-channel-target").count(), { timeout: 5_000 }).toBe(1);
  expect(await page.locator(".fil-channel-target-node").textContent()).toBe("Sampler Bravo");

  // The clear button brings the full list back.
  await page.locator(".fil-channel-search-clear").click();
  await expect.poll(() => page.locator(".fil-channel-target").count(), { timeout: 5_000 }).toBe(2);

  // Both receivers already took the broadcast, so "Available" has nothing
  // left to offer — and says so instead of going quiet.
  await page.locator(".fil-channel-filter-chip", { hasText: "Available" }).click();
  await expect.poll(() => page.locator(".fil-channel-target").count(), { timeout: 5_000 }).toBe(0);
  expect(await page.locator(".fil-channel-empty").count()).toBe(1);

  await page.locator(".fil-channel-filter-chip", { hasText: "Active" }).click();
  await expect.poll(() => page.locator(".fil-channel-target").count(), { timeout: 5_000 }).toBe(2);

  // Reopened, the dialog starts clean again — no filter outlives its row.
  await page.keyboard.press("Escape");
  await expect.poll(() => search.count(), { timeout: 5_000 }).toBe(0);
  await page.locator(".fil-channel-gear").click();
  await expect.poll(() => search.count(), { timeout: 5_000 }).toBe(1);
  expect(await search.inputValue()).toBe("");
  expect(await page.locator(".fil-channel-target").count()).toBe(2);

  await closeScratchWorkflow(page);
});
