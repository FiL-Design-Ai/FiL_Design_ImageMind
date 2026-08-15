/**
 * The strip a panel control can borrow between a node's input and output
 * labels, measured off the node instead of tuned by hand.
 *
 * The numbers below are the real ones, read off a live 🧬 LoRA Loader on the
 * canvas: body at y=100, four output rows starting at 114, the panel's own top
 * at 196, its edges at 110 and 430. Pixaroma's version of this trick keeps
 * three constants for exactly these distances and warns in a comment that
 * adding a socket drifts the band onto the labels — the point of computing
 * them is that the drift becomes impossible, so that is what is asserted.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { socketBandBox } from "@/nodes2/socketBand";

const SLOT_H = 20;

interface FakeSlot {
  name: string;
  widget?: unknown;
}

function fakeNode(opts: {
  width?: number;
  inputs?: FakeSlot[];
  outputs?: FakeSlot[];
}) {
  const inputs = opts.inputs ?? [{ name: "model" }, { name: "clip" }];
  const outputs =
    opts.outputs ?? [{ name: "MODEL" }, { name: "CLIP" }, { name: "TRIGGERS" }, { name: "LABEL" }];
  return {
    pos: [100, 100] as [number, number],
    size: [opts.width ?? 420, 378] as [number, number],
    inputs,
    outputs,
    // The row centres LiteGraph reports: first at body top + 14, then every 20.
    getConnectionPos: (isInput: boolean, slot: number): [number, number] => [
      isInput ? 110 : 100 + (opts.width ?? 420) - 9,
      114 + slot * SLOT_H,
    ],
  };
}

/** The panel sits 10px inside the node, so its edges follow the node's width. */
function panelFor(width = 420) {
  return { top: 196, left: 110, right: 100 + width - 10 };
}

beforeEach(() => {
  (globalThis as { LiteGraph?: unknown }).LiteGraph = {
    NODE_SLOT_HEIGHT: SLOT_H,
    NODE_TEXT_SIZE: 14,
    NODE_FONT: "Arial",
    vueNodesMode: false,
  };
  // jsdom has no text metrics; 8px a character is close enough for the shape
  // of the arithmetic, and the real widths come from the browser at runtime.
  vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue({
    font: "",
    measureText: (text: string) => ({ width: text.length * 8 }),
  } as unknown as CanvasRenderingContext2D);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("socketBandBox", () => {
  it("lifts a control into the first socket row", () => {
    const box = socketBandBox(fakeNode({}), panelFor(), 26);

    expect(box).not.toBeNull();
    // The row spans 104..124 and the panel starts at 196, so the control has
    // to travel about ninety pixels up to land in it.
    expect(box!.top).toBeLessThan(-80);
    expect(box!.top).toBeGreaterThan(-100);
    // Clear of `model`/`clip` on the left, `MODEL`/`CLIP` on the right — and
    // NOT of TRIGGERS, which is two rows below and never in the way.
    expect(box!.left).toBeGreaterThan(0);
    expect(box!.right).toBeGreaterThan(0);
    expect(box!.width).toBeGreaterThan(120);
  });

  it("reserves more room when a longer label moves into the control's rows", () => {
    const short = socketBandBox(fakeNode({}), panelFor(), 26)!;
    const long = socketBandBox(
      fakeNode({ outputs: [{ name: "A_VERY_LONG_OUTPUT_NAME" }, { name: "CLIP" }] }),
      panelFor(),
      26,
    )!;

    expect(long.right).toBeGreaterThan(short.right);
    expect(long.width).toBeLessThan(short.width);
  });

  it("gives up rather than covering the labels on a narrow node", () => {
    expect(socketBandBox(fakeNode({ width: 200 }), panelFor(200), 26)).toBeNull();
  });

  it("stays out of it entirely under the Vue renderer", () => {
    (globalThis as { LiteGraph?: { vueNodesMode?: boolean } }).LiteGraph!.vueNodesMode = true;
    expect(socketBandBox(fakeNode({}), panelFor(), 26)).toBeNull();
  });

  it("ignores widget-backed inputs, which report the first row's position", () => {
    const withWidgets = fakeNode({
      inputs: [{ name: "model" }, { name: "clip" }, { name: "lora_list", widget: {} }],
    });
    const plain = socketBandBox(fakeNode({}), panelFor(), 26)!;

    expect(socketBandBox(withWidgets, panelFor(), 26)!.left).toBe(plain.left);
  });
});
