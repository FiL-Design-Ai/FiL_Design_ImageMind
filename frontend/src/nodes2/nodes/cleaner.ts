import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, hideNativeWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const CleanerVue = defineAsyncComponent(() => import("@/components/nodes/CleanerPanel.vue"));

const boolDefaults: Record<string, boolean> = { clean_vram: true, unload_models: true };

export const cleanerNode: NodeModule = {
  id: "FiLNeuroCleaner",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      // Was 82px, measured off the two native widgets this panel replaced. The
      // panel is two switch rows plus its own padding; computeSize() wins via
      // Math.max in domWidgetHost.ts either way, so this only has to cover the
      // first paint.
      minSize: [250, 110],
      initialWidth: 250,
      family: "tool",
      description: "GPU VRAM and loaded model memory cleanup.",
      badges: [{ text: "utility", color: "#888", text_color: "#fff" }],
    });

    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...a: unknown[]) => unknown;
        onConfigure?: (...a: unknown[]) => unknown;
        onRemoved?: (...a: unknown[]) => unknown;
      };
    };
    const p = proto.prototype;

    // No `exposeWidgetInputSockets` here, unlike every other panelled node: both
    // widgets are booleans with no socket worth offering, and the `anything`
    // passthrough is a real input LiteGraph lays out itself.
    const syncAll = (node: unknown, target: Record<string, unknown>) => {
      for (const name of Object.keys(boolDefaults)) {
        target[name] = sanitizeWidgetValue(findFilWidget(node, name), "boolean", boolDefaults[name]);
      }
    };

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filCleanerState?: unknown };
      const initial: Record<string, unknown> = {};
      syncAll(node, initial);
      for (const name of Object.keys(boolDefaults)) {
        hideNativeWidget(node, name);
      }
      const state = {
        nodeState: createSyncedNodeState(node, initial),
        initialValues: { ...initial },
        ui: {},
      };
      Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
      node._filCleanerState = state;
      addFilDomWidget(node, "fil_cleaner_view", CleanerVue, { state, height: 90 });
      return result;
    };

    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: unknown, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filCleanerState?: { nodeState: Record<string, unknown> } };
      if (!node._filCleanerState) return result;
      syncAll(node, node._filCleanerState.nodeState);
      return result;
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: unknown, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
