import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget } from "@/nodes2/util";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const UpscaleVue = defineAsyncComponent(() => import("@/components/nodes/UpscaleTileCalc.vue"));

export const upscaleNode: NodeModule = {
  id: "FiLUpscaleTileCalc",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [320, 320],
      family: "image",
      description: "Tile dimensions, grid preview, denoise, latent-size calculation.",
      badges: [{ text: "upscale", color: "#62c987", text_color: "#1a1a1a" }],
    });

    const proto = nodeType as {
      prototype: { onNodeCreated?: (...a: unknown[]) => unknown; onRemoved?: (...a: unknown[]) => unknown };
    };
    const p = proto.prototype;

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as { widgets?: unknown[] };
      const numericNames = ["upscale_factor", "tile_size", "tile_overlap", "manual_tile_cols", "manual_tile_rows", "max_megapixels"];
      const boolNames = ["auto_mode", "non_square_tiles", "show_grid_preview"];
      const comboNames = ["auto_profile"];
      const initialNodeState: Record<string, unknown> = {};
      const initialValues: Record<string, unknown> = {};
      for (const name of numericNames) {
        const w = findFilWidget(node, name);
        if (!w) continue;
        initialNodeState[name] = Number(w.value);
        initialValues[name] = Number(w.value);
        (w as { hidden?: boolean }).hidden = true;
      }
      for (const name of boolNames) {
        const w = findFilWidget(node, name);
        if (!w) continue;
        initialNodeState[name] = Boolean(w.value);
        initialValues[name] = Boolean(w.value);
        (w as { hidden?: boolean }).hidden = true;
      }
      for (const name of comboNames) {
        const w = findFilWidget(node, name);
        if (!w) continue;
        initialNodeState[name] = String(w.value);
        initialValues[name] = String(w.value);
        (w as { hidden?: boolean }).hidden = true;
      }
      const state = { nodeState: createSyncedNodeState(node, initialNodeState), initialValues, ui: {} };
      addFilDomWidget(node, "fil_upscale_view", UpscaleVue, { state, height: 420 });
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