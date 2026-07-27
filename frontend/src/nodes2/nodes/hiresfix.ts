import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const HiResFixVue = defineAsyncComponent(() => import("@/components/nodes/HiResFix.vue"));

const numericDefaults: Record<string, number> = {
  upscale_by: 1.25, denoise: 0.56, iterations: 1, strength: 1.0,
  seed: 0, hires_steps: 12,
};
const stringDefaults: Record<string, string> = {
  upscale_type: "latent", hires_ckpt_name: "(use same)",
  latent_upscaler: "nearest-exact", pixel_upscaler: "", control_net_name: "",
  preprocessor: "none",
};
const boolDefaults: Record<string, boolean> = {
  use_same_seed: true, use_controlnet: false,
};
const HIDE = [
  ...Object.keys(numericDefaults), ...Object.keys(stringDefaults), ...Object.keys(boolDefaults),
];

export const hiresfixNode: NodeModule = {
  id: "FiLHighResFix",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      // Height kept LOW on purpose — computeSize() (~430px real content)
      // always wins via Math.max in domWidgetHost.ts, so a buffer above it
      // here would just be dead space at the bottom. Width is the actual
      // reason this floor exists (computeSize()'s own width guess ignores it).
      //
      // 380, not 320: the own-seed row is a readout plus three pills, and the
      // Russian captions ("Случайно", "Прошлый", "Новый фикс.") need ~370px
      // before FilSeedRow starts truncating them. Nodes saved narrower are
      // widened to this floor on load.
      minSize: [380, 300],
      family: "sampling",
      description: "Latent/pixel upscale + re-sample settings, packed into a script for FiLKSampler.",
      badges: [{ text: "hires", color: "#bb9af7", text_color: "#0b0e14" }],
    });

    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...a: unknown[]) => unknown;
        onConfigure?: (...a: unknown[]) => unknown;
        onRemoved?: (...a: unknown[]) => unknown;
      };
    };
    const p = proto.prototype;

    const syncAll = (node: unknown, target: Record<string, unknown>) => {
      for (const name of Object.keys(numericDefaults)) {
        target[name] = sanitizeWidgetValue(findFilWidget(node, name), "number", numericDefaults[name]);
      }
      for (const name of Object.keys(stringDefaults)) {
        target[name] = sanitizeWidgetValue(findFilWidget(node, name), "string", stringDefaults[name]);
      }
      for (const name of Object.keys(boolDefaults)) {
        target[name] = sanitizeWidgetValue(findFilWidget(node, name), "boolean", boolDefaults[name]);
      }
    };

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filHiResFixState?: unknown };
      const initial: Record<string, unknown> = {};
      syncAll(node, initial);
      for (const name of HIDE) {
        const w = findFilWidget(node, name);
        if (w) (w as { hidden?: boolean }).hidden = true;
      }
      // ComfyUI auto-adds a control_after_generate combo for the "seed"
      // widget. The panel owns seed UX (same as FiLSeed/FiLOpticScanner):
      // hide it and default it to "fixed" (matches the default same-seed
      // mode). HiResFix.vue then drives its value from the panel — "fixed"
      // in same-seed/own+fixed, "randomize" in own+random — so core itself
      // varies the hidden seed each queue (the mechanism that actually fires
      // on queue in this frontend version).
      const controlWidget = findFilWidget(node, "control_after_generate");
      if (controlWidget) {
        controlWidget.hidden = true;
        controlWidget.value = "fixed";
      }
      // `seed_mode` is panel-only state (no native widget behind it — the
      // Proxy mirror finds nothing to sync, which is fine); persists via
      // the DOM widget's getValue/setValue like scanner's.
      initial.seed_mode = "random";
      const state = {
        nodeState: createSyncedNodeState(node, initial),
        initialValues: { ...initial },
        ui: {},
        lastRunSeed: null,
      };
      Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
      node._filHiResFixState = state;
      addFilDomWidget(node, "fil_hiresfix_view", HiResFixVue, { state, height: 420 });
      return result;
    };

    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: unknown, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filHiResFixState?: { nodeState: Record<string, unknown> } };
      const state = node._filHiResFixState;
      if (!state) return result;
      syncAll(node, state.nodeState);
      return result;
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: unknown, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
