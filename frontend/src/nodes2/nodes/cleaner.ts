import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const NeuroCleanerVue = defineAsyncComponent(() => import("@/components/nodes/NeuroCleaner.vue"));

export const cleanerNode: NodeModule = {
  id: "FiLNeuroCleaner",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [280, 185],
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

    // Defaults mirror node_cleaner.py's define_schema()
    const defaults: Record<string, boolean> = {
      clean_vram: true,
      unload_diffusion: true,
      unload_clip: false,
      unload_vae: false,
      unload_control: false,
    };

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filCleanerState?: unknown };

      const initialNodeState: Record<string, unknown> = {};
      const initialValues: Record<string, unknown> = {};
      for (const name of Object.keys(defaults)) {
        const w = findFilWidget(node, name);
        const initial = sanitizeWidgetValue(w, "boolean", defaults[name]);
        initialNodeState[name] = initial;
        initialValues[name] = initial;
        if (w) (w as { hidden?: boolean }).hidden = true;
      }

      const state = { nodeState: createSyncedNodeState(node, initialNodeState), initialValues, ui: {} };
      node._filCleanerState = state;
      addFilDomWidget(node, "fil_cleaner_view", NeuroCleanerVue, { state, height: 185 });
      return result;
    };

    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: unknown, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filCleanerState?: { nodeState: Record<string, unknown> } };
      const state = node._filCleanerState;
      if (!state) return result;
      for (const name of Object.keys(defaults)) {
        state.nodeState[name] = sanitizeWidgetValue(findFilWidget(node, name), "boolean", defaults[name]);
      }
      return result;
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: unknown, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    // Apply visual effects (Connection FX, Adaptive Title Color)
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};