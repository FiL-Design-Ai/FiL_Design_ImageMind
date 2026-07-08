import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget } from "@/nodes2/util";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const OpticScannerVue = defineAsyncComponent(() => import("@/components/nodes/OpticScanner.vue"));

export const scannerNode: NodeModule = {
  id: "FiLOpticScanner",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [380, 340],
      family: "llm",
      description: "Image analysis or text-idea expansion into a generation prompt.",
      badges: [{ text: "LLM", color: "#7c5cfc", text_color: "#fff" }],
    });

    const proto = nodeType as {
      prototype: { onNodeCreated?: (...a: unknown[]) => unknown; onRemoved?: (...a: unknown[]) => unknown };
    };
    const p = proto.prototype;

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filScannerSeedState?: unknown };

      const comboNames = ["agent", "model_type", "detail_level", "language",
        "prompt_mode", "response_format", "photo_style", "nsfw_photo_style", "art_style", "nsfw_art_style"];
      const initialValues: Record<string, unknown> = {};
      const initialNodeState: Record<string, unknown> = {};
      for (const name of comboNames) {
        const w = findFilWidget(node, name);
        if (!w) continue;
        const value = w.value;
        initialValues[name] = value;
        initialNodeState[name] = value;
        (w as { hidden?: boolean }).hidden = true;
      }

      // Seed moves to a bottom rgthree-style block (Seed.vue's own mechanism,
      // reused here) instead of the plain native int + auto control_after_
      // generate combo ComfyUI adds for any widget literally named "seed".
      const seedWidget = findFilWidget(node, "seed");
      const controlWidget = findFilWidget(node, "control_after_generate");
      const initialSeed = Number(seedWidget?.value ?? -1) || -1;
      if (seedWidget) (seedWidget as { hidden?: boolean }).hidden = true;
      if (controlWidget) (controlWidget as { hidden?: boolean }).hidden = true;
      initialValues.seed = initialSeed;
      initialNodeState.seed = initialSeed;
      initialNodeState.seed_mode = "random";

      // max_image_side is a plain native io.Int widget on the Python node
      // (not part of the contract-driven `grouped` widgets above) — hidden
      // here and re-rendered as FilSlider in the Vue view.
      const maxImageSideWidget = findFilWidget(node, "max_image_side");
      const initialMaxImageSide = Number(maxImageSideWidget?.value ?? 1024) || 1024;
      initialValues.max_image_side = initialMaxImageSide;
      initialNodeState.max_image_side = initialMaxImageSide;
      if (maxImageSideWidget) (maxImageSideWidget as { hidden?: boolean }).hidden = true;

      const state = {
        nodeState: createSyncedNodeState(node, initialNodeState),
        initialValues,
        ui: {},
        lastRunSeed: null,
      };

      // Expose state on node for graphToPrompt seed injection (parallels
      // `_filSeedState` on FiLSeed).
      node._filScannerSeedState = state;

      addFilDomWidget(node, "fil_scanner_view", OpticScannerVue, { state, height: 390 });
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