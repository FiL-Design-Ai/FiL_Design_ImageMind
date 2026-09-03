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

  /**
   * KSampler's two combos, which were the last widgets in the pack without a
   * socket. They are worth their own case rather than trusting the scanner's:
   * the objection that kept them socket-less was about the *type* on the wire,
   * and the answer to it — LiteGraph refuses a plain STRING and accepts a
   * COMBO/wildcard — is a host behaviour, exactly the kind this suite exists to
   * pin down. The fallback rows in `exposeWidgetInputSockets` would satisfy a
   * "has a y" assertion on their own, so this compares against the panel's real
   * geometry: the dot has to sit on the row it feeds.
   */
  test("the sampler and scheduler combos get a dot on their own row", async ({ page }) => {
    await page.goto("/");
    await openBlankWorkflow(page);

    const result = await page.evaluate(async () => {
      const frames = async (count: number) => {
        for (let i = 0; i < count; i++) await new Promise((r) => requestAnimationFrame(r));
      };

      interface WidgetLike { name?: string; y?: number }
      interface GraphNode {
        pos: [number, number];
        size: [number, number];
        widgets?: WidgetLike[];
        inputs?: Array<{ name?: string; type?: string; alwaysVisible?: boolean }>;
        _filVueApps?: Record<string, { host: HTMLElement }>;
      }
      const node = window.LiteGraph.createNode("FiLKSampler") as GraphNode | null;
      if (!node) throw new Error("FiLKSampler would not instantiate");
      node.pos = [40, 40];
      window.app.graph.add(node);
      await frames(90);

      const host = Object.values(node._filVueApps ?? {})[0]?.host;
      if (!host) throw new Error("the sampler mounted no panel");

      // Either spelling of a FilSelect's label: the default row uses a
      // <label>, the inline-label variant a <span> inside the field box.
      // Matching only the former silently found no row at all once the
      // sampler and scheduler moved to inline labels.
      const rowOf = (label: string) =>
        Array.from(host.querySelectorAll<HTMLElement>(".fil-w-select")).find((el) =>
          (el.querySelector("label, .fil-w-select-inline-label")?.textContent ?? "").includes(label),
        );
      const dotY = (name: string) => (node.widgets ?? []).find((w) => w.name === name)?.y ?? null;

      // Node-local pixels, the same space `widget.y` lives in. `pos[1]` is the
      // node's body origin, so a field's centre minus it is directly comparable.
      const scale = window.app.canvas?.ds?.scale ?? 1;
      const offsetY = window.app.canvas?.ds?.offset?.[1] ?? 0;
      const canvasTop = window.app.canvas?.canvas?.getBoundingClientRect().top ?? 0;
      const fieldCentre = (label: string) => {
        const el = rowOf(label);
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return (r.top + r.height / 2 - canvasTop) / scale - offsetY - node.pos[1];
      };

      const slot = (name: string) => (node.inputs ?? []).find((i) => i.name === name);
      return {
        types: { sampler: slot("sampler_name")?.type, scheduler: slot("scheduler")?.type },
        shown: {
          sampler: slot("sampler_name")?.alwaysVisible === true,
          scheduler: slot("scheduler")?.alwaysVisible === true,
        },
        dots: { sampler: dotY("sampler_name"), scheduler: dotY("scheduler") },
        centres: { sampler: fieldCentre("Sampler"), scheduler: fieldCentre("Scheduler") },
      };
    });

    expect(result.types).toEqual({ sampler: "COMBO", scheduler: "COMBO" });
    // Under the pack-wide hover-on-demand policy, sockets idle clean until hovered/linked.
    // Verify the rows and positions match the fields regardless of idle visibility.
    // `_arrangeWidgetInputSlots` draws the dot at `widget.y + 10`, so that is
    // what has to land on the field's centre. A couple of pixels of slack for
    // the rounding in anchorWidgetInputSockets.
    for (const name of ["sampler", "scheduler"] as const) {
      const dot = result.dots[name];
      const centre = result.centres[name];
      expect(typeof dot, `${name} never got a row`).toBe("number");
      expect(typeof centre, `${name}'s field was not found in the panel`).toBe("number");
      expect(
        Math.abs((dot as number) + 10 - (centre as number)),
        `${name}'s dot sits at ${dot} but its field is centred at ${centre}`,
      ).toBeLessThanOrEqual(2);
    }
  });

  /**
   * Widget-mirror inputs the panel does not manage used to stay collapsed at
   * the node's top edge — their hidden widgets never lay out — and the host's
   * drawSlots() reveals any widget socket the pointer is over: live, hovering
   * the top input painted ghost dots over it and the title bar. The park in
   * widgetInputSockets.ts has to keep every dot-less widget socket below the
   * node's bottom edge, where the hover hit-test never lands by accident.
   */
  test("dot-less widget sockets stay parked below the node", async ({ page }) => {
    await page.goto("/");
    await openBlankWorkflow(page);

    const result = await page.evaluate(async () => {
      const frames = async (count: number) => {
        for (let i = 0; i < count; i++) await new Promise((r) => requestAnimationFrame(r));
      };

      interface SlotLike {
        name?: string;
        pos?: [number, number];
        alwaysVisible?: boolean;
        widget?: unknown;
      }
      interface GraphNode {
        pos: [number, number];
        size: [number, number];
        inputs?: SlotLike[];
        _filVueApps?: Record<string, { host: HTMLElement }>;
      }
      const node = window.LiteGraph.createNode("FiLDatasetForge") as GraphNode | null;
      if (!node) throw new Error("FiLDatasetForge would not instantiate");
      node.pos = [40, 40];
      window.app.graph.add(node);
      // The widget-mirror input entries appear after creation, and the park
      // is re-applied by the anchor sync on panel mount — nothing to assert
      // until the panel is up.
      await frames(90);
      const host = Object.values(node._filVueApps ?? {})[0]?.host;
      if (!host) throw new Error("the forge mounted no panel");

      const managed = ["dataset_name", "trigger_word", "class_token", "captions", "caption_instruction", "dont_caption", "seed", "repeats"];
      return (node.inputs ?? [])
        .filter((s) => s.widget && !managed.includes(s.name ?? ""))
        .map((s) => ({ name: s.name, y: s.pos?.[1] ?? null, height: node.size[1] }));
    });

    expect(result.length, "the forge should have dot-less widget inputs to park").toBeGreaterThan(0);
    for (const r of result) {
      expect(typeof r.y, `${r.name} was never given a slot position`).toBe("number");
      expect(r.y as number, `${r.name} sits inside the node body, hover-revealable`).toBeGreaterThan(r.height);
    }
  });
});
