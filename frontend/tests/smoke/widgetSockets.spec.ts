import { test, expect } from "@playwright/test";
import { openBlankWorkflow, closeScratchWorkflow } from "./comfyWindow";

/**
 * The widget-input sockets, against a real LiteGraph.
 *
 * Optic Scanner used to keep its socket dots and its "a link drives this field"
 * state in step with a 300ms interval that ran for as long as the node existed.
 * That is now event-driven: a ResizeObserver and a MutationObserver on the panel
 * for anything that moves a field, and `ui.linkVersion` — bumped from the node's
 * own `onConnectionsChange` — for a wire arriving, which no DOM change
 * accompanies.
 *
 * Neither half can be proven by the component suite: it mounts the panel with a
 * hand-made node object, so `onConnectionsChange` is never called by anything
 * real and there is no LiteGraph to route a link through. Hence here.
 *
 * Both tests deliberately wait only a handful of frames — far less than the
 * 300ms the old interval needed. A regression back to polling would miss the
 * window and fail rather than passing slowly.
 */

/** ~100ms at 60fps: enough for an observer plus Vue's render, too little for a
 *  300ms poll to have ticked. */
const SETTLE_FRAMES = 6;

test.describe("widget input sockets in a real graph", () => {
  test.afterEach(async ({ page }) => {
    await closeScratchWorkflow(page);
  });

  test("a wire on a text input locks the field without waiting for a poll", async ({ page }) => {
    await page.goto("/");
    await openBlankWorkflow(page);

    const result = await page.evaluate(async (settleFrames) => {
      const frames = async (count: number) => {
        for (let i = 0; i < count; i++) await new Promise((r) => requestAnimationFrame(r));
      };

      interface GraphNode {
        pos: [number, number];
        inputs?: Array<{ name?: string }>;
        _filVueApps?: Record<string, { host: HTMLElement }>;
        connect(slot: number, target: unknown, targetSlot: number): unknown;
        disconnectInput(slot: number): unknown;
      }
      const make = (): GraphNode => {
        const node = window.LiteGraph.createNode("FiLOpticScanner") as GraphNode | null;
        if (!node) throw new Error("FiLOpticScanner would not instantiate");
        return node;
      };

      // Scanner's own first output is the generated prompt (STRING), so one
      // feeds the other's `prompt` input without dragging in a node from
      // another pack to play source.
      const source = make();
      const target = make();
      source.pos = [40, 40];
      target.pos = [520, 40];
      window.app.graph.add(source);
      window.app.graph.add(target);

      // The panels are async components; nothing below can be read until the
      // chunk has resolved and mounted.
      await frames(60);

      const host = Object.values(target._filVueApps ?? {})[0]?.host;
      if (!host) throw new Error("the target scanner mounted no panel");
      const lockedFields = () =>
        Array.from(host.querySelectorAll<HTMLTextAreaElement>("textarea.is-linked")).map((el) => ({
          readonly: el.hasAttribute("readonly"),
        }));

      const promptSlot = (target.inputs ?? []).findIndex((i) => i.name === "prompt");
      if (promptSlot < 0) throw new Error("the target scanner has no `prompt` input slot");

      const before = lockedFields();
      source.connect(0, target, promptSlot);
      await frames(settleFrames);
      const afterConnect = lockedFields();

      target.disconnectInput(promptSlot);
      await frames(settleFrames);
      const afterDisconnect = lockedFields();

      return { before, afterConnect, afterDisconnect };
    }, SETTLE_FRAMES);

    expect(result.before, "a field looked linked before anything was wired").toEqual([]);
    // Exactly one: the wire lands on `prompt`, and the other two text fields
    // must not be dragged into the same state.
    expect(result.afterConnect, "the wired field did not lock").toEqual([{ readonly: true }]);
    expect(result.afterDisconnect, "the field stayed locked after the wire was cut").toEqual([]);
  });

  test("the socket dot follows its field when the panel re-lays out", async ({ page }) => {
    await page.goto("/");
    await openBlankWorkflow(page);

    const result = await page.evaluate(async (settleFrames) => {
      const frames = async (count: number) => {
        for (let i = 0; i < count; i++) await new Promise((r) => requestAnimationFrame(r));
      };

      interface WidgetLike { name?: string; y?: number }
      interface GraphNode {
        pos: [number, number];
        widgets?: WidgetLike[];
        _filVueApps?: Record<string, { host: HTMLElement }>;
      }
      const node = window.LiteGraph.createNode("FiLOpticScanner") as GraphNode | null;
      if (!node) throw new Error("FiLOpticScanner would not instantiate");
      node.pos = [40, 40];
      window.app.graph.add(node);
      await frames(60);

      const host = Object.values(node._filVueApps ?? {})[0]?.host;
      if (!host) throw new Error("the scanner mounted no panel");

      const NAMES = ["prompt", "negative_prompt", "custom_style"];
      const rows = () =>
        NAMES.map((name) => (node.widgets ?? []).find((w) => w.name === name)?.y ?? null);

      const before = rows();

      // Toggling a section is the cheapest real layout change: every field below
      // it moves, and nothing else about the node changes. This is what the
      // MutationObserver is for — LiteGraph is told nothing about it.
      //
      // Which way it toggles is not assumed: Agent/Focus/Output/Styles start
      // folded on a fresh scanner, so the first header on screen opens rather
      // than closes. Either direction moves the fields below it.
      const header = host.querySelector<HTMLElement>(".fil-w-section.collapsible");
      if (!header) throw new Error("no collapsible section header in the panel");
      const foldedBefore = header.classList.contains("collapsed");
      header.click();
      await frames(settleFrames);

      return {
        before,
        after: rows(),
        toggled: header.classList.contains("collapsed") !== foldedBefore,
      };
    }, SETTLE_FRAMES);

    expect(result.toggled, "the section did not toggle, so nothing moved").toBe(true);
    expect(result.before.every((y) => typeof y === "number"), `rows were never assigned: ${JSON.stringify(result.before)}`).toBe(true);
    expect(
      result.after,
      `no dot moved when the panel re-laid out (before ${JSON.stringify(result.before)})`,
    ).not.toEqual(result.before);
  });
});
