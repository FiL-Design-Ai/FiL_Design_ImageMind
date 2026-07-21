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
      // Height kept LOW on purpose — computeSize() (~740px real content)
      // always wins via Math.max in domWidgetHost.ts (plus the polling
      // backstop added there, since this specific node's ResizeObserver was
      // observed to silently stop firing), so a buffer above it here would
      // just be dead space at the bottom. Width is the actual reason this
      // floor exists (computeSize()'s own width guess ignores it).
      minSize: [300, 300],
      family: "tool",
      description: "Selective model, VRAM, RAM, and cache cleanup.",
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

    // Defaults mirror node_cleaner.py's define_schema() — used both as the
    // display fallback and, via sanitizeWidgetValue(), as what a corrupted
    // widget value (e.g. from a workflow saved with an older schema) gets
    // reset to, so a stale save can't silently disable cleanup a user
    // expects to run by default.
    const defaults: Record<string, boolean> = {
      clean_vram: true, offload_model: true, offload_cache: true,
      unload_diffusion: true, unload_clip: true, unload_vae: true, unload_control: true, unload_lora: true,
      clean_ram: false, clean_file_cache: true, clean_processes: false, clean_dlls: false, advanced_controls: false,
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
      addFilDomWidget(node, "fil_cleaner_view", NeuroCleanerVue, { state, height: 460 });
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