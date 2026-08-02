import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { exposeWidgetInputSockets, anchorWidgetInputSockets } from "@/nodes2/widgetInputSockets";

/**
 * Where a hidden widget's input dot ends up.
 *
 * LiteGraph puts real input `i` at `i * 20 + 10` and a widget-mirror slot at
 * `widget.y + 10`, so the two share one coordinate space and a badly chosen
 * fallback row lands a widget dot on top of a real input. That is what shipped:
 * 🔍 Upscaler Simple has three real inputs and three widget inputs, the fallback
 * rows were 20/40/60, and the user saw an unlabelled dot one row under `latent`
 * while two more sat invisibly on `upscale_model` and `latent` themselves.
 */

const SLOT_PITCH = 20;

interface Slot {
  name: string;
  widget?: unknown;
  link?: number | null;
  alwaysVisible?: boolean;
  boundingRect?: number[];
}

/** Upscaler Simple's shape: three real inputs, then the three widget mirrors. */
function upscalerNode() {
  const inputs: Slot[] = [
    { name: "image" },
    { name: "upscale_model" },
    { name: "latent" },
    { name: "upscale_factor", widget: { name: "upscale_factor" }, boundingRect: [0, 0, 10, 10] },
    { name: "tile_size", widget: { name: "tile_size" }, boundingRect: [0, 0, 10, 10] },
    { name: "tile_overlap", widget: { name: "tile_overlap" }, boundingRect: [0, 0, 10, 10] },
  ];
  return {
    inputs,
    widgets: [{ name: "upscale_factor", y: 0 }, { name: "tile_size", y: 0 }, { name: "tile_overlap", y: 0 }],
    pos: [0, 0] as [number, number],
    size: [300, 400] as [number, number],
    graph: { setDirtyCanvas: () => undefined },
  };
}

const NAMES = ["upscale_factor", "tile_size", "tile_overlap"];

/** Row a slot is drawn on, in LiteGraph's own units: real input `i` is row `i`. */
function rowOf(widgetY: number): number {
  return (widgetY + 10 - 10) / SLOT_PITCH;
}

function fieldAt(top: number, height = 24): HTMLElement {
  const el = document.createElement("div");
  el.getBoundingClientRect = () =>
    ({ top, height, bottom: top + height, left: 0, right: 0, width: 100, x: 0, y: top, toJSON: () => ({}) }) as DOMRect;
  return el;
}

function installCanvas(scale = 1, offsetY = 0) {
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  (globalThis as unknown as { app: unknown }).app = { canvas: { canvas, ds: { scale, offset: [0, offsetY] } } };
  return canvas;
}

describe("widget input socket rows", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    delete (globalThis as { app?: unknown }).app;
  });
  afterEach(() => {
    delete (globalThis as { app?: unknown }).app;
  });

  it("stacks the fallback rows below the real inputs, never on top of them", () => {
    const node = upscalerNode();
    exposeWidgetInputSockets(node, NAMES);
    // Three real inputs occupy rows 0, 1, 2 — the first free row is 3.
    expect(node.widgets.map((w) => rowOf(w.y))).toEqual([3, 4, 5]);
  });

  it("gives every dot a row of its own", () => {
    const node = upscalerNode();
    exposeWidgetInputSockets(node, NAMES);
    const rows = node.widgets.map((w) => w.y);
    expect(new Set(rows).size).toBe(rows.length);
  });

  it("counts only the inputs LiteGraph lays out itself", () => {
    // A node whose widget mirrors come first in the list must still reserve
    // exactly as many rows as it has real inputs.
    const node = upscalerNode();
    node.inputs.reverse();
    exposeWidgetInputSockets(node, NAMES);
    expect(Math.min(...node.widgets.map((w) => rowOf(w.y)))).toBe(3);
  });

  it("shows a dot next to a field the panel is rendering", () => {
    const node = upscalerNode();
    installCanvas();
    exposeWidgetInputSockets(node, NAMES);
    anchorWidgetInputSockets(node, [{ name: "upscale_factor", el: fieldAt(200) }]);
    // 200 + 12 (half height) - 10 (half slot) = 202, well past the fallback row.
    expect(node.widgets[0].y).toBe(202);
    expect(node.inputs[3].alwaysVisible).toBe(true);
  });

  it("stops drawing a dot the panel has no field for", () => {
    // Color Wizard's `saturate` and the Upscaler's collapsed tile fields: there
    // is nothing on screen for the dot to sit beside, so an always-visible one
    // reads as a stray socket.
    const node = upscalerNode();
    installCanvas();
    exposeWidgetInputSockets(node, NAMES);
    expect(node.inputs[4].alwaysVisible).toBe(true);
    anchorWidgetInputSockets(node, NAMES.map((name) => ({ name, el: name === "upscale_factor" ? fieldAt(200) : null })));
    expect(node.inputs[4].alwaysVisible).toBe(false);
    expect(node.inputs[5].alwaysVisible).toBe(false);
    expect(node.inputs[3].alwaysVisible).toBe(true);
  });

  it("brings the dot back when the section opens again", () => {
    const node = upscalerNode();
    installCanvas();
    exposeWidgetInputSockets(node, NAMES);
    anchorWidgetInputSockets(node, [{ name: "tile_size", el: null }]);
    expect(node.inputs[4].alwaysVisible).toBe(false);
    anchorWidgetInputSockets(node, [{ name: "tile_size", el: fieldAt(260) }]);
    expect(node.inputs[4].alwaysVisible).toBe(true);
    expect(node.widgets[1].y).toBe(262);
  });

  it("keeps the last row through a relayout rather than collapsing the dot", () => {
    // A zero-height rect happens for a frame whenever the panel re-renders;
    // hiding on that would make every dot flicker.
    const node = upscalerNode();
    installCanvas();
    exposeWidgetInputSockets(node, NAMES);
    anchorWidgetInputSockets(node, [{ name: "tile_size", el: fieldAt(260) }]);
    anchorWidgetInputSockets(node, [{ name: "tile_size", el: fieldAt(0, 0) }]);
    expect(node.widgets[1].y).toBe(262);
    expect(node.inputs[4].alwaysVisible).toBe(true);
  });
});

/**
 * The counter the panels watch.
 *
 * Connecting a wire changes nothing in a panel's DOM, so the ResizeObserver and
 * the MutationObserver in `useWidgetSockets` cannot see it — `ui.linkVersion` is
 * the only signal that a link came or went. Optic Scanner reached the same end
 * with a 300ms interval and so never needed the counter; when the interval went,
 * the counter became load-bearing.
 *
 * The watcher below is the point of the test. Asserting the NUMBER alone passes
 * even when the bump is written to the raw state object instead of the reactive
 * proxy the panel is mounted against — which is exactly the bug the smoke suite
 * caught: the value went up and nothing that watched it ever heard.
 */
describe("node modules bump linkVersion on a connection change", () => {
  const CASES: [string, () => Promise<{ node: { register: (t: unknown, d: never) => void }; stateKey: string }>][] = [
    ["FiLOpticScanner", async () => ({
      node: (await import("@/nodes2/nodes/scanner")).scannerNode,
      stateKey: "_filScannerSeedState",
    })],
    ["FiLDatasetForge", async () => ({
      node: (await import("@/nodes2/nodes/dataset")).datasetForgeNode,
      stateKey: "_filDatasetForgeState",
    })],
  ];

  for (const [id, load] of CASES) {
    it(`${id} bumps it where the panel can hear it`, async () => {
      const { reactive, watch, nextTick } = await import("vue");
      const { node, stateKey } = await load();
      const nodeType = { prototype: {} as Record<string, unknown> };
      node.register(nodeType, { name: id, input: { required: {} }, output: [], output_name: [] } as never);

      const onConnectionsChange = nodeType.prototype.onConnectionsChange as
        | ((...a: unknown[]) => unknown)
        | undefined;
      expect(onConnectionsChange, `${id} installed no onConnectionsChange`).toBeTypeOf("function");

      // A RAW state object, exactly as the node module parks it on the node.
      const rawState = { ui: {} as Record<string, unknown> };
      const instance: Record<string, unknown> = { inputs: [], widgets: [] };
      instance[stateKey] = rawState;

      const heard: unknown[] = [];
      watch(() => (reactive(rawState).ui as Record<string, unknown>).linkVersion, (v) => heard.push(v));

      onConnectionsChange!.call(instance);
      await nextTick();
      expect(heard, "the panel's watcher never heard the bump").toEqual([1]);

      onConnectionsChange!.call(instance);
      await nextTick();
      expect(heard).toEqual([1, 2]);
    });
  }
});
