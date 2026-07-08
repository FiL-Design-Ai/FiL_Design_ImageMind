import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { findFilWidget } from "@/nodes2/util";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const SeedVue = defineAsyncComponent(() => import("@/components/nodes/Seed.vue"));

/**
 * FiLSeed — fixed/automatic seed producer.
 *
 * State is stored in `state.nodeState = { mode, seed }` and survives
 * workflow load/save via `addDOMWidget` getValue/setValue wired in the
 * host. The native `seed` INT widget stays in place (for `forceInput`
 * compatibility); we just hide it because our Vue view owns the UX.
 */
export const seedNode: NodeModule = {
  id: "FiLSeed",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [220, 220],
      family: "value",
      description: "Fixed or randomized seed with copy and reuse buttons.",
      badges: [{ text: "seed" }],
    });

    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...a: unknown[]) => unknown;
        onConfigure?: (...a: unknown[]) => unknown;
        onRemoved?: (...a: unknown[]) => unknown;
      };
    };
    const p = proto.prototype;

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as { widgets?: unknown[]; size?: [number, number]; _filSeedState?: unknown };

      const seedWidget = findFilWidget(node, "seed");
      const initialSeed = Number(seedWidget?.value ?? 0) || 0;
      if (seedWidget) (seedWidget as { hidden?: boolean }).hidden = true;
      // ComfyUI auto-adds a control_after_generate combo for any widget
      // literally named "seed" — hide it too, the Vue view owns seed UX.
      const controlWidget = findFilWidget(node, "control_after_generate");
      if (controlWidget) (controlWidget as { hidden?: boolean }).hidden = true;

      const state = {
        nodeState: {
          mode: "random",
          seed: initialSeed,
        },
        initialValues: { seed: initialSeed },
        ui: {},
        lastRunSeed: null,
      };

      // Expose state on node for graphToPrompt seed injection
      node._filSeedState = state;

      addFilDomWidget(node, "fil_seed_view", SeedVue, { state, height: 185 });
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