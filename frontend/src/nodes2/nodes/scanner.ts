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

    // `prompt`, `negative_prompt`, `custom_style` are declared force_input on
    // the node (node_scanner.py) — they have no native widget to hide, their
    // value lives in the Vue panel's DOM state and is injected at
    // graphToPrompt when the input socket is unconnected (filExtension.ts).
    const hiddenWidgetNames = ["agent", "model_type", "detail_level", "language",
      "prompt_mode", "response_format", "photo_style", "nsfw_photo_style", "art_style", "nsfw_art_style"];

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filScannerSeedState?: unknown };

      const initialValues: Record<string, unknown> = {};
      const initialNodeState: Record<string, unknown> = {};
      for (const name of hiddenWidgetNames) {
        const w = findFilWidget(node, name);
        if (!w) continue;
        // See sanitizeWidgetValue(): resets `.value` itself (not just this
        // display copy) if a stale legacy workflow save left it holding
        // something other than a string (e.g. a shifted DOM-state object).
        const value = sanitizeWidgetValue(w, "string", "");
        initialValues[name] = value;
        initialNodeState[name] = value;
        (w as { hidden?: boolean }).hidden = true;
      }

      const seedWidget = findFilWidget(node, "seed");
      const controlWidget = findFilWidget(node, "control_after_generate");
      const initialSeed = sanitizeWidgetValue(seedWidget, "number", -1);
      if (seedWidget) (seedWidget as { hidden?: boolean }).hidden = true;
      if (controlWidget) (controlWidget as { hidden?: boolean }).hidden = true;
      initialValues.seed = initialSeed;
      initialNodeState.seed = initialSeed;
      initialNodeState.seed_mode = "random";

      const state = {
        nodeState: createSyncedNodeState(node, initialNodeState),
        initialValues,
        ui: {},
        lastRunSeed: null,
      };

      // Expose state on node for graphToPrompt seed injection (parallels
      // `_filSeedState` on FiLSeed).
      node._filScannerSeedState = state;

      addFilDomWidget(node, "fil_scanner_view", OpticScannerVue, { state, height: 460 });
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
      const node = this as { widgets?: unknown[]; _filScannerSeedState?: { nodeState: Record<string, unknown> } };
      const state = node._filScannerSeedState;
      if (!state) return result;
      for (const name of hiddenWidgetNames) {
        const w = findFilWidget(node, name);
        if (!w) continue;
        state.nodeState[name] = sanitizeWidgetValue(w, "string", "");
      }
      state.nodeState.seed = sanitizeWidgetValue(findFilWidget(node, "seed"), "number", -1);
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