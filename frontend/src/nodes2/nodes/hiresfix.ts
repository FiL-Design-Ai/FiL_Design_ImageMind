import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const HiResFixVue = defineAsyncComponent(() => import("@/components/nodes/HiResFix.vue"));

const numericDefaults: Record<string, number> = {
  upscale_by: 1.25, seed: 0, hires_steps: 12, denoise: 0.56, iterations: 1, strength: 1.0,
};
const stringDefaults: Record<string, string> = {
  upscale_type: "latent", hires_ckpt_name: "(use same)",
  latent_upscaler: "nearest-exact", pixel_upscaler: "", control_net_name: "",
};
const boolDefaults: Record<string, boolean> = {
  use_same_seed: true, use_controlnet: false,
};
const HIDE = [
  ...Object.keys(numericDefaults), ...Object.keys(stringDefaults), ...Object.keys(boolDefaults),
  "control_after_generate",
];

export const hiresfixNode: NodeModule = {
  id: "FiLHighResFix",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [320, 380],
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
      const state = {
        nodeState: createSyncedNodeState(node, initial),
        initialValues: { ...initial },
        ui: {},
      };
      Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
      node._filHiResFixState = state;
      addFilDomWidget(node, "fil_hiresfix_view", HiResFixVue, { state, height: 360 });
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
