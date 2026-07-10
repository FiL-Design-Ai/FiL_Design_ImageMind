import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, sanitizeWidgetValue } from "@/nodes2/util";
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
      prototype: {
        onNodeCreated?: (...a: unknown[]) => unknown;
        onConfigure?: (...a: unknown[]) => unknown;
        onRemoved?: (...a: unknown[]) => unknown;
      };
    };
    const p = proto.prototype;

    // Defaults mirror node_upscale.py's define_schema(); sanitizeWidgetValue()
    // resets the widget's own `.value` (not just the display copy) to
    // these when a stale legacy workflow save left it holding the wrong
    // type — see its docstring for why that can otherwise happen.
    const numericDefaults: Record<string, number> = {
      upscale_factor: 2.0, tile_size: 512, tile_overlap: 64,
      manual_tile_cols: 0, manual_tile_rows: 0, max_megapixels: 0.0,
    };
    const boolDefaults: Record<string, boolean> = {
      auto_mode: false, non_square_tiles: false, show_grid_preview: true,
    };
    const comboDefaults: Record<string, string> = { auto_profile: "Balanced" };

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filUpscaleState?: unknown };
      const initialNodeState: Record<string, unknown> = {};
      const initialValues: Record<string, unknown> = {};
      for (const name of Object.keys(numericDefaults)) {
        const w = findFilWidget(node, name);
        if (!w) continue;
        const value = sanitizeWidgetValue(w, "number", numericDefaults[name]);
        initialNodeState[name] = value;
        initialValues[name] = value;
        (w as { hidden?: boolean }).hidden = true;
      }
      for (const name of Object.keys(boolDefaults)) {
        const w = findFilWidget(node, name);
        if (!w) continue;
        const value = sanitizeWidgetValue(w, "boolean", boolDefaults[name]);
        initialNodeState[name] = value;
        initialValues[name] = value;
        (w as { hidden?: boolean }).hidden = true;
      }
      for (const name of Object.keys(comboDefaults)) {
        const w = findFilWidget(node, name);
        if (!w) continue;
        const value = sanitizeWidgetValue(w, "string", comboDefaults[name]);
        initialNodeState[name] = value;
        initialValues[name] = value;
        (w as { hidden?: boolean }).hidden = true;
      }
      const state = { nodeState: createSyncedNodeState(node, initialNodeState), initialValues, ui: {} };
      node._filUpscaleState = state;
      addFilDomWidget(node, "fil_upscale_view", UpscaleVue, { state, height: 420 });
      return result;
    };

    // See provider.ts / sanitizeWidgetValue(): LiteGraph applies a loaded
    // node's `widgets_values` (positional array) onto `node.widgets[i]`
    // AFTER `onNodeCreated` runs, then calls `onConfigure` — so a workflow
    // saved with an older version of this node's schema can silently
    // overwrite the sanitized defaults set above. Re-sanitizing here is
    // what actually prevents a stale/corrupted value reaching `execute()`.
    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: unknown, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filUpscaleState?: { nodeState: Record<string, unknown> } };
      const state = node._filUpscaleState;
      if (!state) return result;
      for (const name of Object.keys(numericDefaults)) {
        state.nodeState[name] = sanitizeWidgetValue(findFilWidget(node, name), "number", numericDefaults[name]);
      }
      for (const name of Object.keys(boolDefaults)) {
        state.nodeState[name] = sanitizeWidgetValue(findFilWidget(node, name), "boolean", boolDefaults[name]);
      }
      for (const name of Object.keys(comboDefaults)) {
        state.nodeState[name] = sanitizeWidgetValue(findFilWidget(node, name), "string", comboDefaults[name]);
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