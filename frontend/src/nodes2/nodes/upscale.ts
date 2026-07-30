import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { exposeWidgetInputSockets, installWidgetSocketSync } from "@/nodes2/widgetInputSockets";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const UpscaleVue = defineAsyncComponent(() => import("@/components/nodes/UpscaleTileCalc.vue"));

/**
 * Widgets that may also be driven from the graph. The Vue panel hides the
 * native widget, which hides its input slot with it — `exposeWidgetInputSockets`
 * gives the slot a row and a visible dot back.
 */
export const UPSCALE_SOCKET_INPUTS = ["upscale_factor", "tile_size", "tile_overlap"];

export const upscaleNode: NodeModule = {
  id: "FiLUpscaleTileCalc",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      // Height is deliberately LOW here — it only has to cover the very
      // first paint before Vue mounts. computeSize() reliably reports the
      // real content height once mounted (~790px for the 20 outputs + full
      // panel) and always wins via Math.max in domWidgetHost.ts, so an
      // above-content buffer here would just show up as permanent dead
      // space at the bottom of the node — width is the actual reason this
      // floor exists (computeSize()'s own width guess ignores it entirely).
      minSize: [340, 300],
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
      addFilDomWidget(node, "fil_upscale_view", UpscaleVue, { state, height: 420 });
      exposeWidgetInputSockets(this, UPSCALE_SOCKET_INPUTS);
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
      exposeWidgetInputSockets(this, UPSCALE_SOCKET_INPUTS);
      return result;
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: unknown, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    // Apply visual effects (Connection FX, Adaptive Title Color)
    installWidgetSocketSync(p, UPSCALE_SOCKET_INPUTS, "_filUpscaleState");
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
