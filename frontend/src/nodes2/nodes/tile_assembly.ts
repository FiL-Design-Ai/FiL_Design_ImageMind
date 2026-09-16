import { defineAsyncComponent, reactive } from "vue";
import type { ComfyNodeData, LGraphNode, LGraphNodeType } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, hideWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { exposeWidgetInputSockets, installWidgetSocketSync } from "@/nodes2/widgetInputSockets";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const TileAssemblyPanel = defineAsyncComponent(() => import("@/components/nodes/TileAssemblyPanel.vue"));

export const TILE_ASSEMBLY_SOCKET_INPUTS = ["feather_strength"];

const hiddenWidgetNames = [
  "blend_mode",
  "feather_strength",
  "color_match",
];

export const tileAssemblyNode: NodeModule = {
  id: "FiLTileAssembly",
  register(nodeType: LGraphNodeType, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [280, 130],
      initialWidth: 280,
      family: "image",
      description: "Recombines processed tiles back into one image, feathered across the real overlap zones.",
      badges: [{ text: "tile", color: "#62c987", text_color: "#1a1a1a" }],
    });

    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...a: unknown[]) => unknown;
        onConfigure?: (...a: unknown[]) => unknown;
        onRemoved?: (...a: unknown[]) => unknown;
      };
    };
    const p = proto.prototype;

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as LGraphNode & { _filTileAssemblyState?: unknown };

      const initialValues: Record<string, unknown> = {};
      const initialNodeState: Record<string, unknown> = {};

      for (const name of hiddenWidgetNames) {
        const w = findFilWidget(node, name);
        if (!w) continue;
        const expectedType = name === "feather_strength" ? "number" : "string";
        const fallback = expectedType === "number" ? 1.0 : name === "blend_mode" ? "Cosine (Smooth)" : "Match Overlap Means";
        const val = sanitizeWidgetValue(w, expectedType, fallback);
        initialValues[name] = val;
        initialNodeState[name] = val;
        hideWidget(w);
      }

      const rawState = {
        nodeState: createSyncedNodeState(node, initialNodeState),
        initialValues,
        ui: {} as Record<string, unknown>,
      };
      Object.defineProperty(rawState, "node", { value: node, enumerable: false, configurable: true });
      const state = reactive(rawState);
      (node as any)._filTileAssemblyState = state;

      addFilDomWidget(this, "fil_tile_assembly_view", TileAssemblyPanel, { state, height: 115 });
      exposeWidgetInputSockets(this, TILE_ASSEMBLY_SOCKET_INPUTS);
      return result;
    };

    const origConfigure = p.onConfigure;
    p.onConfigure = function (this: LGraphNode, ...args: unknown[]) {
      const res = origConfigure?.apply(this, args);
      const node = this as { _filTileAssemblyState?: { nodeState: Record<string, unknown> } };
      const state = node._filTileAssemblyState;
      if (state) {
        for (const name of hiddenWidgetNames) {
          const w = findFilWidget(node, name);
          if (!w) continue;
          const expectedType = name === "feather_strength" ? "number" : "string";
          const fallback = expectedType === "number" ? 1.0 : name === "blend_mode" ? "Cosine (Smooth)" : "Match Overlap Means";
          state.nodeState[name] = sanitizeWidgetValue(w, expectedType, fallback);
        }
      }
      exposeWidgetInputSockets(this, TILE_ASSEMBLY_SOCKET_INPUTS);
      return res;
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: LGraphNode, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    installWidgetSocketSync(p, TILE_ASSEMBLY_SOCKET_INPUTS, "_filTileAssemblyState");
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};

