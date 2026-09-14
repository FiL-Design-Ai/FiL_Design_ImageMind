import { describe, it, expect, vi, beforeEach } from "vitest";
import { installSmartFixNode } from "@/nodes2/installers/smartFixNode";
import * as fixNodeSettings from "@/stores/settings/fixNodeSettings";

describe("smartFixNode global installer", () => {
  let mockCanvasProto: any;
  let mockApp: any;

  beforeEach(() => {
    mockCanvasProto = {
      getNodeMenuOptions: vi.fn((_node?: any) => [
        { content: "Clone" },
        { content: "Fix node (recreate)", callback: vi.fn() },
        { content: "Colors" },
      ]),
    };

    mockApp = {
      canvas: Object.create(mockCanvasProto),
    };
  });

  it("installs a wrapper on LGraphCanvas.prototype.getNodeMenuOptions", () => {
    installSmartFixNode(mockApp);
    expect(mockCanvasProto._filSmartFixInstalled).toBe(true);

    const orig = mockCanvasProto.getNodeMenuOptions;
    // Calling install again does nothing (guard against double patching)
    installSmartFixNode(mockApp);
    expect(mockCanvasProto.getNodeMenuOptions).toBe(orig);
  });

  it("intercepts foreign 'Fix node (recreate)' and delegates to recreateNode when setting is enabled", () => {
    vi.spyOn(fixNodeSettings, "isSmartFixNodeEnabled").mockReturnValue(true);

    installSmartFixNode(mockApp);

    const foreignNode = {
      id: 1,
      type: "KSampler",
      comfyClass: "KSampler",
      pos: [100, 200],
      widgets: [{ name: "seed", value: 123456 }],
      inputs: [],
      outputs: [],
      graph: {
        links: {},
        add: vi.fn(),
        remove: vi.fn(),
        getNodeById: vi.fn(),
      },
    };

    const options = mockApp.canvas.getNodeMenuOptions(foreignNode);
    const fixItem = options.find((o: any) => o.content === "Fix node (recreate)");

    expect(fixItem).toBeDefined();
    expect(fixItem._filPatched).toBe(true);

    // Other menu options untouched
    expect(options.find((o: any) => o.content === "Clone")).toBeDefined();
    expect(options.find((o: any) => o.content === "Colors")).toBeDefined();
  });

  it("falls back to original callback when setting is disabled", () => {
    vi.spyOn(fixNodeSettings, "isSmartFixNodeEnabled").mockReturnValue(false);

    const originalForeignCallback = vi.fn();
    mockCanvasProto.getNodeMenuOptions = vi.fn((_node?: any) => [
      { content: "Fix node (recreate)", callback: originalForeignCallback },
    ]);

    installSmartFixNode(mockApp);

    const foreignNode = { id: 2, type: "SomeForeignNode" };
    const options = mockApp.canvas.getNodeMenuOptions(foreignNode);
    const fixItem = options.find((o: any) => o.content === "Fix node (recreate)");

    expect(fixItem).toBeDefined();
    expect(fixItem._filPatched).toBe(true);

    // Invoke the patched callback
    fixItem.callback();

    // Original foreign callback should be invoked because the setting was off
    expect(originalForeignCallback).toHaveBeenCalled();
  });
});
