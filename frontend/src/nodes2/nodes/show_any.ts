import { defineAsyncComponent } from "vue";
import type { ComfyNodeData, LGraphNode, LGraphNodeType } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, hideNativeWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { exposeWidgetInputSockets, installWidgetSocketSync } from "@/nodes2/widgetInputSockets";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const ShowAnyVue = defineAsyncComponent(() => import("@/components/nodes/ShowAnyPanel.vue"));

export const SHOW_ANY_SOCKET_INPUTS = ["source", "text"];

const stringDefaults: Record<string, string> = {
  text: "",
};

export const showAnyNode: NodeModule = {
  id: "FiLShowAny",
  register(nodeType: LGraphNodeType, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [320, 140],
      initialWidth: 340,
      family: "tools",
      description: "Universal data inspector & pass-through monitor.",
      badges: [{ text: "SHOW ANY", color: "#2dd4bf", text_color: "#0b0e14" }],
    });

    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...a: unknown[]) => unknown;
        onConfigure?: (...a: unknown[]) => unknown;
        onRemoved?: (...a: unknown[]) => unknown;
        onExecuted?: (message: Record<string, unknown>) => unknown;
      };
    };
    const p = proto.prototype;

    const syncAll = (node: LGraphNode, target: Record<string, unknown>) => {
      for (const name of Object.keys(stringDefaults)) {
        target[name] = sanitizeWidgetValue(findFilWidget(node, name), "string", stringDefaults[name]);
      }
    };

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as LGraphNode & { _filShowAnyState?: unknown };
      const initial: Record<string, unknown> = {};
      syncAll(node, initial);
      hideNativeWidget(node, "text");

      const state = {
        nodeState: createSyncedNodeState(node, initial),
        initialValues: { ...initial },
        ui: {} as Record<string, unknown>,
      };
      Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
      node._filShowAnyState = state;
      addFilDomWidget(node, "fil_show_any_view", ShowAnyVue, { state, height: 120, growable: true });
      exposeWidgetInputSockets(this, SHOW_ANY_SOCKET_INPUTS);
      return result;
    };

    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as LGraphNode & { _filShowAnyState?: { nodeState: Record<string, unknown> } };
      const state = node._filShowAnyState;
      if (!state) return result;
      syncAll(node, state.nodeState);
      exposeWidgetInputSockets(this, SHOW_ANY_SOCKET_INPUTS);
      return result;
    };

    const originalExecuted = p.onExecuted;
    p.onExecuted = function (this: LGraphNode, message: Record<string, unknown>) {
      const result = originalExecuted?.apply(this, [message]);
      const node = this as LGraphNode & {
        _filShowAnyState?: {
          nodeState: Record<string, unknown>;
          ui: Record<string, unknown>;
        };
      };
      const state = node._filShowAnyState;
      if (!state || !message) return result;

      if (message.text) {
        const textArr = message.text as unknown[];
        const textVal = Array.isArray(textArr) ? textArr[0] : textArr;
        if (typeof textVal === "string") {
          state.nodeState.text = textVal;
        }
      }
      if (message.data_type) {
        state.ui.data_type = message.data_type;
      }
      return result;
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: LGraphNode, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    installWidgetSocketSync(p, SHOW_ANY_SOCKET_INPUTS, "_filShowAnyState");
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
