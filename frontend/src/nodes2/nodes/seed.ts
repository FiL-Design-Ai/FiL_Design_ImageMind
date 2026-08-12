import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, hideNativeWidget, hideWidget, sanitizeWidgetValue } from "@/nodes2/util";
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
      // 300, not 250: the readout has to hold a full-range seed. The widget's
      // max is 0xFFFFFFFFFFFFFFFF, and ComfyUI's own `randomize` draws across
      // that range — so "Use last" routinely lands a 19-20 digit number, not
      // an exotic one. At 250px the field got ~92px, which is 20 digits only
      // at ~7px type; 300px gives ~142px, where Seed.vue's 11px floor fits
      // them and stays readable. Measured live, not estimated.
      minSize: [300, 90],
      initialWidth: 300,
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
      const initialSeed = sanitizeWidgetValue(seedWidget, "number", 0);
      hideWidget(seedWidget);
      // ComfyUI auto-adds a control_after_generate combo for any widget
      // literally named "seed" — hide it too, the Vue view owns seed UX.
      hideNativeWidget(node, "control_after_generate");

      const state = {
        // Synced, like every other node module. This one and switch.ts were the
        // two that built a plain object instead, which made their panels the
        // only ones where a write to `nodeState` did not reach the native
        // widget the prompt builder reads — safe only for as long as every
        // setter remembered to write the widget by hand as well. Nothing
        // enforced that, and the 🔀 Switch bug fixed in 4f278d5 was exactly the
        // case where the hand-written path was the only one and it was dead.
        // `mode` has no widget of that name, so the mirror is a no-op for it.
        nodeState: createSyncedNodeState(node, {
          mode: "random",
          seed: initialSeed,
        }),
        initialValues: { seed: initialSeed },
        ui: {},
        lastRunSeed: null,
      };
      // Exposed so Seed.vue can drive the hidden native seed/
      // control_after_generate widgets directly (see HiResFix.vue /
      // OpticScanner.vue) — the graphToPrompt extension hook this used to
      // rely on doesn't fire on queue in this frontend version.
      Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
      node._filSeedState = state;

      addFilDomWidget(node, "fil_seed_view", SeedVue, { state, height: 52 });
      return result;
    };

    // LiteGraph applies a loaded node's `widgets_values` (a plain
    // positional array) onto `node.widgets[i]` AFTER `onNodeCreated` runs,
    // then calls `onConfigure` — so a workflow saved with an older version
    // of this node's schema can silently overwrite the sanitized default
    // set above. Re-sanitizing here, once the (possibly stale) value is
    // actually in place, is what prevents it reaching `execute()`. See
    // provider.ts / sanitizeWidgetValue() for the reproduced case this guards.
    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: unknown, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filSeedState?: { nodeState: Record<string, unknown> } };
      const state = node._filSeedState;
      if (!state) return result;
      state.nodeState.seed = sanitizeWidgetValue(findFilWidget(node, "seed"), "number", 0);
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
