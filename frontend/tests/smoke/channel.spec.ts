import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { test, expect } from "@playwright/test";

const here = path.dirname(fileURLToPath(import.meta.url));
import { openBlankWorkflow, closeScratchWorkflow } from "./comfyWindow";

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
