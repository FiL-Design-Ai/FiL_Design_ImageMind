import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget } from "@/nodes2/util";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const NeuroCleanerVue = defineAsyncComponent(() => import("@/components/nodes/NeuroCleaner.vue"));

export const cleanerNode: NodeModule = {
  id: "FiLNeuroCleaner",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [300, 340],
      family: "tool",
      description: "Selective model, VRAM, RAM, and cache cleanup.",
      badges: [{ text: "utility", color: "#888", text_color: "#fff" }],
    });

    const proto = nodeType as {
      prototype: { onNodeCreated?: (...a: unknown[]) => unknown; onRemoved?: (...a: unknown[]) => unknown };
    };
    const p = proto.prototype;

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as { widgets?: unknown[] };

      const names = [
        "clean_vram", "offload_model", "offload_cache",
        "unload_diffusion", "unload_clip", "unload_vae", "unload_control", "unload_lora",
        "clean_ram", "clean_file_cache", "clean_processes", "clean_dlls", "advanced_controls",
      ];
      const initialNodeState: Record<string, unknown> = {};
      const initialValues: Record<string, unknown> = {};
      for (const name of names) {
        const w = findFilWidget(node, name);
        const initial = Boolean(w?.value);
        initialNodeState[name] = initial;
        initialValues[name] = initial;
        if (w) (w as { hidden?: boolean }).hidden = true;
      }

      const state = { nodeState: createSyncedNodeState(node, initialNodeState), initialValues, ui: {} };
      addFilDomWidget(node, "fil_cleaner_view", NeuroCleanerVue, { state, height: 460 });
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