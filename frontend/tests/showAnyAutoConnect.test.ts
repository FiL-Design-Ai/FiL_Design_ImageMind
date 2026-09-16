import { describe, it, expect, vi } from "vitest";
import { showAnyNode } from "@/nodes2/nodes/show_any";
import type { LGraphNode } from "@/types/comfy";

vi.mock("@/nodes2/domWidgetHost", () => ({
  addFilDomWidget: (_node: unknown, _name: unknown, _comp: unknown, opts?: { state?: unknown }) => ({
    name: "fil_show_any_view",
    state: opts?.state ?? { nodeState: {}, ui: {} },
  }),
  unmountAllFilWidgets: () => {},
}));

vi.mock("@/nodes2/widgetInputSockets", () => ({
  exposeWidgetInputSockets: () => {},
  installWidgetSocketSync: () => {},
}));

vi.mock("@/nodes2/applyFxComposables", () => ({
  applyFxComposables: () => {},
}));

function createMockShowAnyNode() {
  const nodeType = {
    prototype: {
      findInputSlot(type: string, free?: boolean) {
        const self = this as { inputs?: Array<{ type: string; link: number | null }> };
        return self.inputs?.findIndex((i) => i.type === type && (!free || i.link == null)) ?? -1;
      },
    },
  } as { prototype: Record<string, unknown> };
  showAnyNode.register(nodeType as never, { name: "FiLShowAny" } as never);

  const mockNode: Partial<LGraphNode> & {
    inputs: Array<{ name: string; type: string; link: number | null }>;
    outputs: Array<{ name: string; type: string; label?: string }>;
    graph: { links: Record<number, unknown>; getNodeById?: ((id: number | string) => unknown) & ReturnType<typeof vi.fn>; setDirtyCanvas?: () => void };
    connect: ReturnType<typeof vi.fn>;
  } = {
    inputs: [
      { name: "source", type: "*", link: null },
      { name: "text", type: "STRING", link: null },
    ],
    outputs: [{ name: "*", type: "*", label: "*" }],
    widgets: [{ name: "text", value: "" }] as never,
    graph: { links: {}, setDirtyCanvas: vi.fn() },
    connect: vi.fn((_slot, _targetNode, _targetSlot) => true),
  };

  Object.setPrototypeOf(mockNode, nodeType.prototype);
  (nodeType.prototype.onNodeCreated as (this: unknown) => unknown).call(mockNode);

  return {
    node: mockNode as unknown as LGraphNode & {
      inputs: Array<{ name: string; type: string; link: number | null; label?: string; color_on?: string; color_off?: string }>;
      outputs: Array<{ name: string; type: string; label?: string; color_on?: string; color_off?: string }>;
      graph: { links: Record<number, unknown>; getNodeById: ReturnType<typeof vi.fn>; setDirtyCanvas: ReturnType<typeof vi.fn> };
    },
    proto: nodeType.prototype,
  };
}

describe("show_any.ts — source slot auto-connection prioritization", () => {
  it("prioritizes source input for findInputByType even when connecting STRING type", () => {
    const { node } = createMockShowAnyNode();
    const result = (node as unknown as { findInputByType: (type: string) => { index: number; slot: { name: string } } }).findInputByType("STRING");

    expect(result).toBeDefined();
    expect(result?.index).toBe(0);
    expect(result?.slot.name).toBe("source");
  });

  it("prioritizes source input for findInputSlot even when connecting STRING type", () => {
    const { node } = createMockShowAnyNode();
    const slotIdx = (node as unknown as { findInputSlot: (type: string, free?: boolean) => number }).findInputSlot("STRING", true);

    expect(slotIdx).toBe(0);
  });

  it("prioritizes source input for findSlotByType", () => {
    const { node } = createMockShowAnyNode();
    const slotIdx = (node as unknown as { findSlotByType: (isInput: boolean, type: string) => number }).findSlotByType(true, "STRING");

    expect(slotIdx).toBe(0);
  });

  it("connectByType connects directly to source (slot 0)", () => {
    const { node } = createMockShowAnyNode();
    const sourceNode = {} as LGraphNode;
    (node as unknown as { connectByType: (slot: number, src: LGraphNode, type: string) => boolean }).connectByType(0, sourceNode, "STRING");

    expect(node.connect).toHaveBeenCalledWith(0, sourceNode, 0);
  });

  it("falls back to standard behavior when source slot is already occupied", () => {
    const { node } = createMockShowAnyNode();
    // Occupy source slot with link 1
    node.inputs![0].link = 1;

    // Now findInputSlot for STRING should fall back and locate text (slot 1)
    const slotIdx = (node as unknown as { findInputSlot: (type: string, free?: boolean) => number }).findInputSlot("STRING", true);
    expect(slotIdx).toBe(1);
  });
});

describe("show_any.ts — dynamic type resolution & slot renaming", () => {
  it("dynamically resolves direct IMAGE connection, renames input label and output type/name/label, and sets colors", () => {
    const { node, proto } = createMockShowAnyNode();
    const sourceNode = {
      id: 10,
      outputs: [{ name: "image", type: "IMAGE" }],
    };
    node.graph.getNodeById = vi.fn((id: string | number) => (Number(id) === 10 ? (sourceNode as never) : null));
    node.graph.links = {
      1: { id: 1, origin_id: 10, origin_slot: 0, type: "IMAGE" },
    };

    // Connect source to link 1
    node.inputs![0].link = 1;

    // Trigger connection change
    (proto.onConnectionsChange as (this: unknown) => void).call(node);

    // Input slot
    expect(node.inputs![0].name).toBe("source");
    expect(node.inputs![0].label).toBe("IMAGE");
    expect(node.inputs![0].color_on).toBe("#64B5F6");
    expect(node.inputs![0].color_off).toBe("#64B5F6");

    // Output slot
    expect(node.outputs![0].type).toBe("IMAGE");
    expect(node.outputs![0].name).toBe("IMAGE");
    expect(node.outputs![0].label).toBe("IMAGE");
    expect(node.outputs![0].color_on).toBe("#64B5F6");
    expect(node.outputs![0].color_off).toBe("#64B5F6");
  });

  it("recursively resolves upstream type through a Reroute node (* wildcard)", () => {
    const { node, proto } = createMockShowAnyNode();
    const rerouteNode = {
      id: 20,
      inputs: [{ name: "", type: "*", link: 2 }],
      outputs: [{ name: "", type: "*" }],
    };
    const ksamplerNode = {
      id: 30,
      outputs: [{ name: "latent", type: "LATENT" }],
    };

    node.graph.getNodeById = vi.fn((id: string | number) => {
      if (Number(id) === 20) return rerouteNode as never;
      if (Number(id) === 30) return ksamplerNode as never;
      return null;
    });

    node.graph.links = {
      1: { id: 1, origin_id: 20, origin_slot: 0, type: "*" },
      2: { id: 2, origin_id: 30, origin_slot: 0, type: "LATENT" },
    };

    node.inputs![0].link = 1;
    (proto.onConnectionsChange as (this: unknown) => void).call(node);

    expect(node.inputs![0].label).toBe("LATENT");
    expect(node.inputs![0].color_on).toBe("#FF9CF9");
    expect(node.outputs![0].type).toBe("LATENT");
    expect(node.outputs![0].name).toBe("LATENT");
    expect(node.outputs![0].label).toBe("LATENT");
    expect(node.outputs![0].color_on).toBe("#FF9CF9");
  });

  it("resets slots to source and * when wire is disconnected", () => {
    const { node, proto } = createMockShowAnyNode();
    // Initially connected to IMAGE
    node.graph.getNodeById = vi.fn((_id: string | number) => ({ outputs: [{ type: "IMAGE" }] } as never));
    node.graph.links = { 1: { id: 1, origin_id: 1, origin_slot: 0, type: "IMAGE" } };
    node.inputs![0].link = 1;
    (proto.onConnectionsChange as (this: unknown) => void).call(node);

    expect(node.inputs![0].label).toBe("IMAGE");
    expect(node.outputs![0].type).toBe("IMAGE");

    // Disconnect
    node.inputs![0].link = null;
    (proto.onConnectionsChange as (this: unknown) => void).call(node);

    expect(node.inputs![0].name).toBe("source");
    expect(node.inputs![0].label).toBe("source");
    expect(node.inputs![0].color_on).toBeUndefined();
    expect(node.outputs![0].type).toBe("*");
    expect(node.outputs![0].name).toBe("*");
    expect(node.outputs![0].label).toBe("*");
    expect(node.outputs![0].color_on).toBeUndefined();
  });

  it("updates sockets dynamically when onExecuted receives runtime data_type", () => {
    const { node, proto } = createMockShowAnyNode();
    // Unwired or wildcard
    expect(node.outputs![0].type).toBe("*");

    // Execute arrives with MODEL
    (proto.onExecuted as (this: unknown, msg: unknown) => void).call(node, {
      data_type: "MODEL",
      text: "brain model",
    });

    expect(node.inputs![0].label).toBe("MODEL");
    expect(node.inputs![0].color_on).toBe("#B39DDB");
    expect(node.outputs![0].type).toBe("MODEL");
    expect(node.outputs![0].name).toBe("MODEL");
    expect(node.outputs![0].label).toBe("MODEL");
    expect(node.outputs![0].color_on).toBe("#B39DDB");
  });
});

