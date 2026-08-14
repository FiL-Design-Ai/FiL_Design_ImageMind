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
 *    and confirming it subscribes both inputs on the node itself;
 *  - an unnamed CONDITIONING wire is asked "positive or negative?" as it
 *    lands, and the answer — written onto the slot — survives a serialize +
 *    reload without the question ever coming back. That last one is the
 *    user-facing promise: asked once per wire, never once per session.
 */

interface SceneNode {
  id?: number;
  comfyClass?: string;
  type?: string;
  inputs?: Array<{ name: string; label?: string; link?: number | null }>;
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

  test("the prompt a queue would send carries the channel's links", async ({ page }) => {
    await page.goto("/");
    await openBlankWorkflow(page);

    // The one thing no other test covered: that the data actually *arrives*.
    // Everything else here drives the panel and the questions, and the whole
    // suite stayed green through a colour feature that never worked once —
    // so the delivery half gets its own case, on the canonical graph, read
    // off the request the browser was about to make.
    const ids = await page.evaluate(async () => {
      const lg = window.LiteGraph;
      const make = (type: string, pos: [number, number]): SceneNode => {
        const node = lg.createNode(type) as SceneNode;
        if (!node) throw new Error(`${type} did not instantiate`);
        node.pos = pos;
        window.app.graph.add(node);
        return node;
      };
      const frames = async (count: number) => {
        for (let i = 0; i < count; i++) await new Promise((r) => requestAnimationFrame(r));
      };

      const loader = make("CheckpointLoaderSimple", [40, 40]);
      const channel = make("FiLChannel", [420, 40]);
      const encPos = make("CLIPTextEncode", [420, 320]);
      const encNeg = make("CLIPTextEncode", [420, 560]);
      const latent = make("EmptyLatentImage", [420, 800]);
      const sampler = make("KSampler", [900, 320]);
      const decode = make("VAEDecode", [1340, 320]);
      const save = make("SaveImage", [1600, 320]);
      await frames(60);

      // Checkpoint outputs are MODEL, CLIP, VAE — all three into one Channel,
      // one slot each, which is the node's whole reason for autogrowing.
      loader.connect(0, channel, 0);
      await frames(30);
      loader.connect(1, channel, 1);
      await frames(30);
      loader.connect(2, channel, 2);
      await frames(60);

      // The wires a user still draws by hand.
      encPos.connect(0, sampler, 1);
      encNeg.connect(0, sampler, 2);
      latent.connect(0, sampler, 3);
      sampler.connect(0, decode, 0);
      decode.connect(0, save, 0);
      await frames(60);

      return {
        loader: String(loader.id),
        sampler: String(sampler.id),
        encPos: String(encPos.id),
        encNeg: String(encNeg.id),
        decode: String(decode.id),
      };
    });

    // Wait on the plan rather than on a frame count: the panel reporting one
    // MODEL receiver, two CLIP and one VAE is the resolver saying it is ready.
    // A fixed wait was enough in isolation and not on a cold first load, which
    // is exactly the flake a smoke suite must not have.
    await expect.poll(() => channelCounts(page), { timeout: 20_000 }).toEqual(["1", "2", "1"]);

    const prompt = await page.evaluate(async (nodeIds: Record<string, string>) => {
      // Capture what would have gone to the server and refuse to send it:
      // the point is the prompt's shape, not a render.
      const app = window.app as unknown as {
        api?: { queuePrompt?: (...args: unknown[]) => unknown };
        queuePrompt?: (...args: unknown[]) => Promise<unknown>;
      };
      let captured: unknown = null;
      const api = app.api;
      const realQueue = api?.queuePrompt;
      if (!api || !realQueue) throw new Error("no api.queuePrompt to intercept");
      api.queuePrompt = (...args: unknown[]) => {
        captured = args[1];
        throw new Error("smoke: not sending");
      };
      try {
        await app.queuePrompt?.(0, 1);
      } catch {
        /* the interception above throws by design */
      } finally {
        api.queuePrompt = realQueue;
      }

      const output = (captured as { output?: Record<string, { inputs?: Record<string, unknown> }> } | null)?.output;
      const inputs = (nodeId: string, key: string) => output?.[nodeId]?.inputs?.[key] ?? null;
      const sampler = window.app.graph._nodes.find(
        (n) => String((n as { id?: unknown }).id) === nodeIds.sampler,
      ) as SceneNode | undefined;
      return {
        model: inputs(nodeIds.sampler, "model"),
        clipPos: inputs(nodeIds.encPos, "clip"),
        clipNeg: inputs(nodeIds.encNeg, "clip"),
        vae: inputs(nodeIds.decode, "vae"),
        // Proof the graph went back to how it was drawn: nothing on the canvas
        // may be left wired to the sampler's model input after the queue.
        modelLinkLeftBehind: (sampler?.inputs ?? []).find((i) => i.name === "model")?.link ?? null,
      };
    }, ids);

    // Every free input of a broadcast type reads from the loader itself —
    // never from the Channel node, which has no outputs to read from.
    expect(prompt.model).toEqual([ids.loader, 0]);
    expect(prompt.clipPos).toEqual([ids.loader, 1]);
    expect(prompt.clipNeg).toEqual([ids.loader, 1]);
    expect(prompt.vae).toEqual([ids.loader, 2]);
    expect(prompt.modelLinkLeftBehind).toBeNull();
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

    // The unnamed CONDITIONING asks its naming question first — one per wire,
    // and buildScene drew both in one tick, so the panel asks twice. Both
    // questions share one tick here, so the modal hands straight from the
    // first to the second without ever closing between them. Leaving both
    // unnamed hands the decision on to the where-to stage.
    const namingButtons = page.locator(".fil-channel-naming-actions button");
    await expect.poll(() => namingButtons.count(), { timeout: 15_000 }).toBe(3);
    await namingButtons.nth(2).click(); // Leave unnamed — slot 0
    await namingButtons.nth(2).click(); // Leave unnamed — slot 1

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

  test("every wire is asked once, and nothing re-asks after a reload", async ({ page }) => {
    await page.goto("/");
    await openBlankWorkflow(page);

    // The scene, but with only the first wire drawn — the question has to
    // arrive the moment that wire lands, not after both are in.
    const ids = await page.evaluate(async () => {
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
      encPos.connect(0, channel, 0);
      await frames(90);

      return { encNeg: encNeg.id as number, channel: channel.id as number };
    });

    // First wire: the panel asks what this CONDITIONING is.
    const buttons = page.locator(".fil-channel-naming-actions button");
    await expect.poll(() => buttons.count(), { timeout: 15_000 }).toBe(3);
    await buttons.nth(0).click(); // Positive
    await expect.poll(() => page.locator(".fil-channel-naming-actions").count(), { timeout: 5_000 }).toBe(0);

    // Second wire lands: asked again — the user's word, not exclusion's
    // deduction, decides positive versus negative (decided 2026-08-10).
    await page.evaluate(({ encNeg, channel }) => {
      const graph = window.app.graph as unknown as { getNodeById(id: number): SceneNode };
      graph.getNodeById(encNeg).connect(0, graph.getNodeById(channel), 1);
    }, ids);

    await expect.poll(() => buttons.count(), { timeout: 15_000 }).toBe(3);
    await buttons.nth(1).click(); // Negative
    await expect.poll(() => page.locator(".fil-channel-naming-actions").count(), { timeout: 5_000 }).toBe(0);

    await expect
      .poll(() => channelCounts(page), { timeout: 15_000 })
      .toEqual(["1", "1"]);
    expect(await page.locator(".fil-channel-cluster-row").count()).toBe(0);

    // Serialize + reload: the labels travel with the workflow, and the load
    // guard keeps the re-announced wires from queueing anything — so the
    // question never comes back. This is the "asked once" promise, live.
    await page.evaluate(async () => {
      const app = window.app as unknown as {
        graph: { serialize(): unknown };
        loadGraphData(data: unknown): Promise<void>;
      };
      const serialized = JSON.parse(JSON.stringify(app.graph.serialize()));
      await app.loadGraphData(serialized);
      const frames = async (count: number) => {
        for (let i = 0; i < count; i++) await new Promise((r) => requestAnimationFrame(r));
      };
      await frames(120);
    });

    await expect
      .poll(() => channelCounts(page), { timeout: 15_000 })
      .toEqual(["1", "1"]);
    expect(await page.locator(".fil-channel-naming-actions").count()).toBe(0);
    expect(await page.locator(".fil-channel-cluster-row").count()).toBe(0);

    // Only the wired slots matter: the autogrown spare slot keeps its host
    // default. Both wired slots keep their answered names.
    const labels = await page.evaluate(() => {
      const channel = window.app.graph._nodes.find(
        (n) => (n as { comfyClass?: string }).comfyClass === "FiLChannel",
      ) as unknown as SceneNode;
      return (channel.inputs ?? []).filter((input) => input.link != null).map((input) => input.label);
    });
    expect(labels).toEqual(["positive", "negative"]);
  });

  test("channel name tags draw in the canvas foreground pass, above the nodes", async ({ page }) => {
    await page.goto("/");
    await openBlankWorkflow(page);

    // The default link mode draws only around a selection, so the scene is
    // one MODEL channel with one receiver — the smallest thing selectable.
    const channelId = await page.evaluate(async () => {
      const litegraph = window.LiteGraph;
      const loader = litegraph.createNode("CheckpointLoaderSimple") as SceneNode;
      const channel = litegraph.createNode("FiLChannel") as SceneNode;
      const sampler = litegraph.createNode("KSampler") as SceneNode;
      if (!loader || !channel || !sampler) throw new Error("one of the nodes did not instantiate");

      loader.pos = [40, 40];
      channel.pos = [460, 40];
      sampler.pos = [900, 40];
      for (const node of [loader, channel, sampler]) window.app.graph.add(node);

      const frames = async (count: number) => {
        for (let i = 0; i < count; i++) await new Promise((r) => requestAnimationFrame(r));
      };
      await frames(60);
      loader.connect(0, channel, 0); // MODEL
      await frames(90);

      return channel.id as number;
    });

    await expect.poll(() => channelCounts(page), { timeout: 20_000 }).toEqual(["1"]);

    // Instrument one real frame: whatever each pass puts through fillText and
    // setLineDash, tagged with the pass it came from. The jsdom suite proved
    // the split against a fake; this proves it against the host's actual draw
    // loop — the place where a wrong hook name would simply never be called.
    // The hooks are patched on the ctx each pass hands in, not on
    // `canvas.ctx`: the host's back canvas draws with its own context.
    const capture = await page.evaluate(async (id: number) => {
      const app = window.app as unknown as {
        graph: { getNodeById(nodeId: number): { selected?: boolean } | null };
        canvas: {
          ctx: CanvasRenderingContext2D;
          ds: { scale: number };
          setDirty?(foreground: boolean, background: boolean): void;
          selectNode?(node: unknown): void;
          onDrawBackground?: (ctx: CanvasRenderingContext2D, area?: unknown) => void;
          onDrawForeground?: (ctx: CanvasRenderingContext2D, area?: unknown) => void;
        };
      };
      const canvas = app.canvas;
      if (typeof canvas.onDrawBackground !== "function") throw new Error("background hook not installed");
      if (typeof canvas.onDrawForeground !== "function") throw new Error("foreground hook not installed");

      const node = app.graph.getNodeById(id);
      if (!node) throw new Error("the channel node vanished");
      if (canvas.selectNode) canvas.selectNode(node);
      else node.selected = true;

      const texts: Array<{ pass: string; text: string }> = [];
      const dashes: Array<{ pass: string; segments: number[] }> = [];
      const ctxIsCanvasCtx: Record<string, boolean> = {};
      const origBg = canvas.onDrawBackground;
      const origFg = canvas.onDrawForeground;

      const instrument = (pass: string, ctx: CanvasRenderingContext2D, draw: () => void) => {
        const origFillText = ctx.fillText;
        const origSetLineDash = ctx.setLineDash;
        ctxIsCanvasCtx[pass] = ctxIsCanvasCtx[pass] ?? ctx === canvas.ctx;
        try {
          ctx.fillText = function (this: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth?: number) {
            texts.push({ pass, text: String(text) });
            return origFillText.call(this, text, x, y, maxWidth);
          };
          ctx.setLineDash = function (this: CanvasRenderingContext2D, segments: number[]) {
            dashes.push({ pass, segments: [...segments] });
            return origSetLineDash.call(this, segments);
          };
          draw();
        } finally {
          ctx.fillText = origFillText;
          ctx.setLineDash = origSetLineDash;
        }
      };
      try {
        canvas.onDrawBackground = function (this: unknown, ctx: CanvasRenderingContext2D, area?: unknown) {
          instrument("background", ctx, () => origBg.call(this, ctx, area));
        };
        canvas.onDrawForeground = function (this: unknown, ctx: CanvasRenderingContext2D, area?: unknown) {
          instrument("foreground", ctx, () => origFg.call(this, ctx, area));
        };

        canvas.ds.scale = 1;
        canvas.setDirty?.(true, true);
        const frames = async (count: number) => {
          for (let i = 0; i < count; i++) await new Promise((r) => requestAnimationFrame(r));
        };
        await frames(30);
      } finally {
        canvas.onDrawBackground = origBg;
        canvas.onDrawForeground = origFg;
      }
      return { texts, dashes, ctxIsCanvasCtx };
    }, channelId);

    const foreground = capture.texts.filter((t) => t.pass === "foreground").map((t) => t.text);
    const background = capture.texts.filter((t) => t.pass === "background").map((t) => t.text);
    // The tag rides the pass drawn AFTER the nodes, so a node can no longer
    // cover it; the dashed link stays in the pass drawn before them.
    expect(foreground).toContain("MODEL");
    expect(background).not.toContain("MODEL");
    expect(
      capture.dashes.some((d) => d.pass === "background" && d.segments.length === 2 && d.segments[0] === 6 && d.segments[1] === 5),
    ).toBe(true);
  });
});
