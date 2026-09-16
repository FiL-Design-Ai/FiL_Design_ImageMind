import { defineAsyncComponent } from "vue";
import type { ComfyNodeData, LGraphNode, LGraphNodeType } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, hideNativeWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { exposeWidgetInputSockets, installWidgetSocketSync } from "@/nodes2/widgetInputSockets";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const LoraPrompterVue = defineAsyncComponent(() => import("@/components/nodes/LoraPrompterPanel.vue"));

export const LORA_PROMPTER_SOCKET_INPUTS = ["prompt", "triggers"];

const stringDefaults: Record<string, string> = {
  prompt: "",
  triggers: "",
};

export const loraPrompterNode: NodeModule = {
  id: "FiLLoraPrompter",
  register(nodeType: LGraphNodeType, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [340, 160],
      initialWidth: 340,
      family: "llm",
      description: "Smart LoRA prompt composer with 1-click interactive trigger chips.",
      badges: [{ text: "LORA PROMPT", color: "#a78bfa", text_color: "#0b0e14" }],
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
      for (const name of Object.keys(stringDefaults)) {
        target[name] = sanitizeWidgetValue(findFilWidget(node, name), "string", stringDefaults[name]);
      }
    };

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as LGraphNode & { _filLoraPrompterState?: unknown };
      const initial: Record<string, unknown> = {};
      syncAll(node, initial);
      hideNativeWidget(node, "prompt");
      hideNativeWidget(node, "triggers");

      const state = {
        nodeState: createSyncedNodeState(node, initial),
        initialValues: { ...initial },
        ui: {},
      };
      Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
      node._filLoraPrompterState = state;
      addFilDomWidget(node, "fil_lora_prompter_view", LoraPrompterVue, { state, height: 160, growable: true });
      exposeWidgetInputSockets(this, LORA_PROMPTER_SOCKET_INPUTS);
      return result;
    };

    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as LGraphNode & { _filLoraPrompterState?: { nodeState: Record<string, unknown> } };
      const state = node._filLoraPrompterState;
      if (!state) return result;
      syncAll(node, state.nodeState);
      exposeWidgetInputSockets(this, LORA_PROMPTER_SOCKET_INPUTS);
      return result;
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: LGraphNode, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    installWidgetSocketSync(p, LORA_PROMPTER_SOCKET_INPUTS, "_filLoraPrompterState");
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
