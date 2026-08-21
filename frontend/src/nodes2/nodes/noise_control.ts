import { defineAsyncComponent } from "vue";
import type { ComfyNodeData, LGraphNode, LGraphNodeType } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, hideNativeWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { exposeWidgetInputSockets, installWidgetSocketSync } from "@/nodes2/widgetInputSockets";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const NoiseControlVue = defineAsyncComponent(() => import("@/components/nodes/NoiseControlPanel.vue"));

/**
 * Widgets that may also be driven from the graph. The Vue panel hides the
 * native widget, which hides its input slot with it — `exposeWidgetInputSockets`
 * gives the slot a row and a visible dot back.
 */
export const NOISE_CONTROL_SOCKET_INPUTS = ["seed", "weight"];

const numericDefaults: Record<string, number> = { seed: 0, weight: 0.5 };
const stringDefaults: Record<string, string> = {
  rng_source: "cpu",
  // Added by ComfyUI itself alongside the seed widget; shown in the panel as
  // core defines it rather than replaced with a private seed UX.
  control_after_generate: "randomize",
};
const boolDefaults: Record<string, boolean> = { add_seed_noise: true };
const HIDE = [
  ...Object.keys(numericDefaults), ...Object.keys(stringDefaults), ...Object.keys(boolDefaults),
];

export const noiseControlNode: NodeModule = {
  id: "FiLNoiseControl",
  register(nodeType: LGraphNodeType, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [250, 160],
      initialWidth: 250,
      family: "sampling",
      description: "RNG source + seed-variation script for FiLKSampler.",
      badges: [{ text: "script", color: "#7aa2f7", text_color: "#0b0e14" }],
    });

    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...a: unknown[]) => unknown;
        onConfigure?: (...a: unknown[]) => unknown;
        onRemoved?: (...a: unknown[]) => unknown;
      };
    };
    const p = proto.prototype;

    const syncAll = (node: LGraphNode, target: Record<string, unknown>) => {
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
    p.onNodeCreated = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as LGraphNode & { _filNoiseControlState?: unknown };
      const initial: Record<string, unknown> = {};
      syncAll(node, initial);
      for (const name of HIDE) {
        hideNativeWidget(node, name);
      }
      const state = {
        nodeState: createSyncedNodeState(node, initial),
        initialValues: { ...initial },
        ui: {},
      };
      Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
      node._filNoiseControlState = state;
      addFilDomWidget(node, "fil_noise_control_view", NoiseControlVue, { state, height: 120 });
      exposeWidgetInputSockets(this, NOISE_CONTROL_SOCKET_INPUTS);
      return result;
    };

    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as LGraphNode & { _filNoiseControlState?: { nodeState: Record<string, unknown> } };
      const state = node._filNoiseControlState;
      if (!state) return result;
      syncAll(node, state.nodeState);
      exposeWidgetInputSockets(this, NOISE_CONTROL_SOCKET_INPUTS);
      return result;
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: LGraphNode, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    installWidgetSocketSync(p, NOISE_CONTROL_SOCKET_INPUTS, "_filNoiseControlState");
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
