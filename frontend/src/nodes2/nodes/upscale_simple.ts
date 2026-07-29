import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { exposeWidgetInputSockets, installWidgetSocketSync } from "@/nodes2/widgetInputSockets";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

// Same tiling widget panel as FiLUpscaleTileCalc (upscale.ts) — Simple only
// differs in a required upscale_model input and trimmed outputs, so the Vue
// panel is reused as-is.
const UpscaleVue = defineAsyncComponent(() => import("@/components/nodes/UpscaleTileCalc.vue"));

/**
 * Widgets that may also be driven from the graph. The Vue panel hides the
 * native widget, which hides its input slot with it — `exposeWidgetInputSockets`
 * gives the slot a row and a visible dot back.
 */
export const UPSCALE_SIMPLE_SOCKET_INPUTS = ["upscale_factor", "tile_size", "tile_overlap"];

export const upscaleSimpleNode: NodeModule = {
  id: "FiLUpscaleSimple",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      // Height is deliberately LOW — see upscale.ts's identical note. Only
      // needs to cover the very first paint; computeSize() (~470px for this
      // panel) always wins via Math.max in domWidgetHost.ts, so a buffer
      // here would just be permanent dead space at the bottom of the node.
      minSize: [340, 300],
      family: "image",
      description: "Upscale + tile an image through a required model — same tiling controls as Advanced.",
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

    // Defaults mirror node_upscale_simple.py's define_schema().
    const numericDefaults: Record<string, number> = {
      upscale_factor: 2.0, tile_size: 1024, tile_overlap: 64,
      manual_tile_cols: 0, manual_tile_rows: 0,
    };
    const boolDefaults: Record<string, boolean> = {
      auto_overlap: false, auto_mode: false, non_square_tiles: false, auto_fix_thin_edges: false,
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
      addFilDomWidget(node, "fil_upscale_simple_view", UpscaleVue, { state, height: 420 });
      exposeWidgetInputSockets(this, UPSCALE_SIMPLE_SOCKET_INPUTS);
      return result;
    };

    // See upscale.ts: workflow-loaded widgets_values can overwrite the
    // sanitized defaults after onNodeCreated — re-sanitize on configure.
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
      exposeWidgetInputSockets(this, UPSCALE_SIMPLE_SOCKET_INPUTS);
      return result;
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: unknown, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    installWidgetSocketSync(p, UPSCALE_SIMPLE_SOCKET_INPUTS, "_filUpscaleState");
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
