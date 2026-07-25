import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const OpticScannerVue = defineAsyncComponent(() => import("@/components/nodes/OpticScanner.vue"));

export const scannerNode: NodeModule = {
  id: "FiLOpticScanner",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      // Height kept LOW on purpose — computeSize() (~660px real content)
      // always wins via Math.max in domWidgetHost.ts, so a buffer above it
      // here would just be dead space at the bottom. Width is the actual
      // reason this floor exists (computeSize()'s own width guess ignores it).
      minSize: [380, 300],
      family: "llm",
      description: "Image analysis or text-idea expansion into a generation prompt.",
      badges: [{ text: "LLM", color: "#7c5cfc", text_color: "#fff" }],
    });

    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...a: unknown[]) => unknown;
        onConfigure?: (...a: unknown[]) => unknown;
        onRemoved?: (...a: unknown[]) => unknown;
      };
    };
    const p = proto.prototype;

    // `prompt`/`negative_prompt`/`custom_style` are kept as native LiteGraph
    // widgets (NOT hidden) so ComfyUI's built-in drag-to-connect works on them
    // exactly like any other string widget: drag a STRING output onto the field
    // and it converts in-place to an input socket. Their values are read by
    // ComfyUI directly from the native widget, not from the Vue state.
    const allWidgetNames = [
      "prompt", "negative_prompt", "custom_style",
      "agent", "model_type", "detail_level", "language",
      "prompt_mode", "response_format", "photo_style", "nsfw_photo_style", "art_style", "nsfw_art_style",
      "seed", "control_after_generate"
    ];

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filScannerSeedState?: unknown };

      const initialValues: Record<string, unknown> = {};
      const initialNodeState: Record<string, unknown> = {};
      for (const name of allWidgetNames) {
        const w = findFilWidget(node, name);
        if (!w) continue;
        const isNum = name === "seed";
        const fallback = isNum ? -1 : "";
        const value = sanitizeWidgetValue(w, isNum ? "number" : "string", fallback);
        initialValues[name] = value;
        initialNodeState[name] = value;
        (w as { hidden?: boolean }).hidden = true;
      }
      initialNodeState.seed_mode = "random";

      // Also ensure any remaining native widgets are hidden to prevent canvas overlap
      for (const w of ((node.widgets || []) as { hidden?: boolean }[])) {
        w.hidden = true;
      }

      const state = {
        nodeState: createSyncedNodeState(node, initialNodeState),
        initialValues,
        ui: {},
        lastRunSeed: null,
      };
      Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
      node._filScannerSeedState = state;

      addFilDomWidget(node, "fil_scanner_view", OpticScannerVue, { state, height: 580 });
      return result;
    };

    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: unknown, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filScannerSeedState?: { nodeState: Record<string, unknown> } };
      const state = node._filScannerSeedState;
      if (!state) return result;
      for (const name of allWidgetNames) {
        const w = findFilWidget(node, name);
        if (!w) continue;
        const isNum = name === "seed";
        const fallback = isNum ? -1 : "";
        state.nodeState[name] = sanitizeWidgetValue(w, isNum ? "number" : "string", fallback);
        (w as { hidden?: boolean }).hidden = true;
      }
      for (const w of ((node.widgets || []) as { hidden?: boolean }[])) {
        w.hidden = true;
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