import { describe, it, expect, afterEach, vi } from "vitest";
import { applyAdaptiveCanvasOnly, isVueNodes } from "@/nodes2/nodes2Adapters";
import { cleanNodePropertyDefaults } from "@/nodes2/statePersistence";
import { takeOverWiredInput } from "@/nodes2/widgetInputSockets";
import { validateWidgetComboValue } from "@/nodes2/util";

describe("nodes2Adapters & Pixaroma Patterns", () => {
  afterEach(() => {
    delete (globalThis as any).LiteGraph;
    vi.restoreAllMocks();
  });

  it("isVueNodes returns false by default, true when LiteGraph.vueNodesMode is set", () => {
    expect(isVueNodes()).toBe(false);

    (globalThis as any).LiteGraph = { vueNodesMode: true };
    expect(isVueNodes()).toBe(true);
  });

  it("applyAdaptiveCanvasOnly sets dynamic canvasOnly getter", () => {
    const widget = { options: {} as any };
    applyAdaptiveCanvasOnly(widget);

    // By default vueNodesMode is undefined -> canvasOnly is undefined
    expect(widget.options.canvasOnly).toBeUndefined();

    // When vueNodesMode is true -> canvasOnly becomes false (renders on Vue node body)
    (globalThis as any).LiteGraph = { vueNodesMode: true };
    expect(widget.options.canvasOnly).toBe(false);
  });

  it("cleanNodePropertyDefaults removes keys matching defaults", () => {
    const node = {
      properties: {
        theme: "cyberpunk",
        steps: 20,
        customPrompt: "hello",
      },
    };
    cleanNodePropertyDefaults(node, { theme: "cyberpunk", steps: 20 });

    expect(node.properties).toEqual({ customPrompt: "hello" });
  });

  it("validateWidgetComboValue validates allowed values and falls back safely", () => {
    const w = { name: "method", value: "InvalidMode" };
    const valid = ["Linear", "Channel Stretch"] as const;

    const res = validateWidgetComboValue(w, valid, "Linear");
    expect(res).toBe("Linear");
    expect(w.value).toBe("Linear");

    const wValid = { name: "method", value: "Channel Stretch" };
    const resValid = validateWidgetComboValue(wValid, valid, "Linear");
    expect(resValid).toBe("Channel Stretch");
    expect(wValid.value).toBe("Channel Stretch");
  });

  it("takeOverWiredInput disconnects wire safely when a link is attached", () => {
    const disconnectSpy = vi.fn();
    const mockNode = {
      inputs: [{ name: "ref_image", link: 42 }],
      disconnectInput: disconnectSpy,
      graph: {
        links: {
          42: { origin_id: 10, origin_slot: 0 },
        },
        getNodeById: vi.fn(),
      },
    };

    const res = takeOverWiredInput(mockNode, "ref_image");
    expect(res).toBe(true);
    expect(disconnectSpy).toHaveBeenCalledWith(0);
  });
});
