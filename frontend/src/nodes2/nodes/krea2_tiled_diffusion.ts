import { defineAsyncComponent } from "vue";
import type { ComfyNodeData, LGraphNode, LGraphNodeType } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, hideNativeWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { exposeWidgetInputSockets, installWidgetSocketSync } from "@/nodes2/widgetInputSockets";
import { applyFxComposables } from "@/nodes2/applyFxComposables";
import { FIL_STATE_KEY, installFilStatePersistence, restoreFilState, type PersistedPanelState } from "@/nodes2/statePersistence";

const Krea2Vue = defineAsyncComponent(() => import("@/components/nodes/Krea2TiledDiffusionPanel.vue"));

export const KREA2_SOCKET_INPUTS = [
  "upscale_factor",
  "denoise",
  "prompt",
  "seed",
  "steps",
];

const numericDefaults: Record<string, number> = {
  upscale_factor: 2.0,
  denoise: 0.20,
  seed: 0,
  steps: 20,
};

const stringDefaults: Record<string, string> = {
  prompt: "high quality, ultra detailed, sharp focus, 8k uhd",
  control_after_generate: "randomize",
};

const HIDE = [...Object.keys(numericDefaults), ...Object.keys(stringDefaults)];

export const krea2TiledDiffusionNode: NodeModule = {
  id: "FiLKrea2TiledDiffusion",
  register(nodeType: LGraphNodeType, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [320, 360],
      initialWidth: 320,
      family: "image",
      description: "High-fidelity one-click AI upscale and detail enhancement with strict original preservation.",
      badges: [{ text: "krea2", color: "#62c987", text_color: "#1a1a1a" }],
    });

    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...a: unknown[]) => unknown;
        onConfigure?: (...a: unknown[]) => unknown;
        onRemoved?: (...a: unknown[]) => unknown;
      };
    };
    const p = proto.prototype;

    const syncAll = (node: LGraphNode, target: Record<string, unknown>, quiet = false) => {
      for (const name of Object.keys(numericDefaults)) {
        target[name] = sanitizeWidgetValue(findFilWidget(node, name), "number", numericDefaults[name], quiet);
      }
      for (const name of Object.keys(stringDefaults)) {
        target[name] = sanitizeWidgetValue(findFilWidget(node, name), "string", stringDefaults[name], quiet);
      }
    };

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as LGraphNode & { _filKrea2State?: unknown; _filSocketPolicy?: string };
      node._filSocketPolicy = "always";
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
      node._filKrea2State = state;

      installFilStatePersistence(node, state);
      addFilDomWidget(node, "fil_krea2_view", Krea2Vue, { state, height: 360, growable: true });
      exposeWidgetInputSockets(this, KREA2_SOCKET_INPUTS);
      return result;
    };

    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as LGraphNode & { _filKrea2State?: PersistedPanelState; _filSocketPolicy?: string };
      node._filSocketPolicy = "always";
      const state = node._filKrea2State;
      if (!state) return result;
      const hasFilState = Boolean((args[0] as Record<string, unknown> | undefined)?.[FIL_STATE_KEY]);
      syncAll(node, state.nodeState, hasFilState);
      restoreFilState(state, args[0]);
      exposeWidgetInputSockets(this, KREA2_SOCKET_INPUTS);
      return result;
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: LGraphNode, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    installWidgetSocketSync(p, KREA2_SOCKET_INPUTS, "_filKrea2State");
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
