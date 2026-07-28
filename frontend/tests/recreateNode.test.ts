import { describe, it, expect, vi } from "vitest";
import { recreateNode, patchRecreateMenuItem } from "@/nodes2/recreateNode";

/**
 * ComfyUI-Manager's "Fix node (recreate)" adds the replacement to the graph and
 * only removes the original after copying the links — so the throw in its
 * copy step (a numeric node id passed where LiteGraph now wants the node) left
 * both nodes on the canvas, stacked. These tests pin the two properties that
 * failure violated: the original goes away on success, and nothing is added on
 * failure.
 */

type Slot = { name: string; link?: number | null; links?: number[] | null };

function makeGraph() {
  const nodes: Record<number, any> = {};
  let nextId = 100;
  const graph: any = {
    links: {} as Record<number, any>,
    add(node: any) {
      node.id = nextId++;
      node.graph = graph;
      nodes[node.id] = node;
    },
    remove(node: any) {
      delete nodes[node.id];
    },
    getNodeById: (id: number) => nodes[id] ?? null,
    _nodes: nodes,
  };
  return graph;
}

function makeNode(type: string, inputs: Slot[] = [], outputs: Slot[] = []): any {
  return {
    id: 0, // assigned by graph.add
    type,
    comfyClass: type,
    pos: [10, 20] as [number, number],
    size: [280, 84] as [number, number],
    widgets: [] as Array<{ name: string; value: unknown }>,
    inputs,
    outputs,
    connect: vi.fn(),
    computeSize: () => [240, 64] as [number, number],
  };
}

function litegraphMaking(node: any) {
  return { createNode: () => node };
}

describe("recreateNode", () => {
  it("removes the original instead of stacking a copy on top of it", () => {
    const graph = makeGraph();
    const old = makeNode("FiLNeuroCleaner", [{ name: "anything", link: 1 }], [{ name: "output", links: [2] }]);
    old.widgets = [
      { name: "clean_vram", value: false },
      { name: "unload_models", value: true },
    ];
    graph.add(old);

    const upstream = makeNode("Upstream", [], [{ name: "out", links: [1] }]);
    const downstream = makeNode("Downstream", [{ name: "in", link: 2 }], []);
    graph.add(upstream);
    graph.add(downstream);
    graph.links[1] = { origin_id: upstream.id, origin_slot: 0, target_id: old.id, target_slot: 0 };
    graph.links[2] = { origin_id: old.id, origin_slot: 0, target_id: downstream.id, target_slot: 0 };

    const fresh: any = makeNode("FiLNeuroCleaner", [{ name: "anything" }], [{ name: "output" }]);
    fresh.widgets = [
      { name: "clean_vram", value: true },
      { name: "unload_models", value: true },
    ];
    fresh.onConfigure = vi.fn();

    const result = recreateNode(old as any, litegraphMaking(fresh));

    expect(result).toBe(fresh);
    expect(Object.values(graph._nodes)).not.toContain(old);
    expect(Object.values(graph._nodes)).toContain(fresh);
    // Widget values carried over, and the panel state was resynced from them.
    expect(fresh.widgets[0].value).toBe(false);
    expect(fresh.widgets[1].value).toBe(true);
    expect(fresh.onConfigure).toHaveBeenCalled();
    // Reconnected by slot index, with the node object — never a numeric id.
    expect(upstream.connect).toHaveBeenCalledWith(0, fresh, 0);
    expect(fresh.connect).toHaveBeenCalledWith(0, downstream, 0);
  });

  it("leaves the graph untouched when reconnecting throws", () => {
    const graph = makeGraph();
    const old = makeNode("FiLNeuroCleaner", [{ name: "anything", link: 1 }], []);
    graph.add(old);
    const upstream = makeNode("Upstream", [], [{ name: "out", links: [1] }]);
    graph.add(upstream);
    graph.links[1] = { origin_id: upstream.id, origin_slot: 0, target_id: old.id, target_slot: 0 };
    upstream.connect = vi.fn(() => {
      throw new TypeError("t.findInputSlot is not a function");
    });

    const fresh = makeNode("FiLNeuroCleaner", [{ name: "anything" }], []);
    const before = Object.values(graph._nodes).length;
    const errors = vi.spyOn(console, "error").mockImplementation(() => {});

    const result = recreateNode(old as any, litegraphMaking(fresh));

    expect(result).toBeNull();
    expect(Object.values(graph._nodes).length).toBe(before);
    expect(Object.values(graph._nodes)).toContain(old);
    expect(Object.values(graph._nodes)).not.toContain(fresh);
    errors.mockRestore();
  });

  it("keeps a wire whose input was renamed away from breaking the rebuild", () => {
    const graph = makeGraph();
    const old = makeNode("FiLKSampler", [{ name: "latent_image", link: 1 }], []);
    graph.add(old);
    const upstream = makeNode("Upstream", [], [{ name: "LATENT", links: [1] }]);
    graph.add(upstream);
    graph.links[1] = { origin_id: upstream.id, origin_slot: 0, target_id: old.id, target_slot: 0 };

    // The rebuilt node calls the slot `latent` now — the wire is dropped, the
    // recreate still succeeds.
    const fresh = makeNode("FiLKSampler", [{ name: "latent" }], []);
    const result = recreateNode(old as any, litegraphMaking(fresh));

    expect(result).toBe(fresh);
    expect(upstream.connect).not.toHaveBeenCalled();
    expect(Object.values(graph._nodes)).not.toContain(old);
  });
});

describe("recreateNode widget values", () => {
  it("leaves a corrupted value at the fresh widget's default", () => {
    const graph = makeGraph();
    const old = makeNode("FiLNeuroCleaner");
    // What a shifted `widgets_values` array actually produces: the Vue panel's
    // whole state object landing on a boolean widget.
    old.widgets = [{ name: "clean_vram", value: { nodeState: {}, ui: {} } }];
    graph.add(old);

    const fresh = makeNode("FiLNeuroCleaner");
    fresh.widgets = [{ name: "clean_vram", value: true }];
    const info = vi.spyOn(console, "info").mockImplementation(() => {});

    recreateNode(old as any, litegraphMaking(fresh));

    expect(fresh.widgets[0].value).toBe(true);
    expect(info).toHaveBeenCalled();
    info.mockRestore();
  });

  it("drops a combo value the rebuilt widget no longer offers", () => {
    const graph = makeGraph();
    const old = makeNode("FiLStyleMixer");
    old.widgets = [{ name: "fusion_mode", value: "Vision LLM Blend (Smart)" }];
    graph.add(old);

    const fresh = makeNode("FiLStyleMixer");
    fresh.widgets = [
      { name: "fusion_mode", value: "Fast Stack", options: { values: ["Fast Stack", "Smart LLM Fusion"] } },
    ];
    const info = vi.spyOn(console, "info").mockImplementation(() => {});

    recreateNode(old as any, litegraphMaking(fresh));

    expect(fresh.widgets[0].value).toBe("Fast Stack");
    info.mockRestore();
  });

  it("keeps a combo value that is still legal", () => {
    const graph = makeGraph();
    const old = makeNode("FiLStyleMixer");
    old.widgets = [{ name: "fusion_mode", value: "Smart LLM Fusion" }];
    graph.add(old);

    const fresh = makeNode("FiLStyleMixer");
    fresh.widgets = [
      { name: "fusion_mode", value: "Fast Stack", options: { values: ["Fast Stack", "Smart LLM Fusion"] } },
    ];

    recreateNode(old as any, litegraphMaking(fresh));

    expect(fresh.widgets[0].value).toBe("Smart LLM Fusion");
  });
});

describe("patchRecreateMenuItem", () => {
  it("repoints the Manager entry and leaves the rest of the menu alone", () => {
    const original = vi.fn();
    const other = { content: "Properties", callback: original };
    const fix = { content: "Fix node (recreate)", callback: original };
    const options = [null, other, fix];

    patchRecreateMenuItem({ id: 1 } as any, options);

    expect(other.callback).toBe(original);
    expect(fix.callback).not.toBe(original);
  });

  it("is idempotent, so nested menu wrappers cannot chain it twice", () => {
    const fix: any = { content: "Fix node (recreate)", callback: vi.fn() };
    patchRecreateMenuItem({ id: 1 } as any, [fix]);
    const first = fix.callback;
    patchRecreateMenuItem({ id: 1 } as any, [fix]);
    expect(fix.callback).toBe(first);
  });
});
