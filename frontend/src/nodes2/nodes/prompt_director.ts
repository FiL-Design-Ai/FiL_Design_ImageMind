import { defineAsyncComponent } from "vue";
import type { ComfyNodeData, LGraphNode, LGraphNodeType } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, hideNativeWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { exposeWidgetInputSockets, installWidgetSocketSync } from "@/nodes2/widgetInputSockets";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const PromptDirectorVue = defineAsyncComponent(() => import("@/components/nodes/PromptDirectorPanel.vue"));

/**
 * Widgets that may also be driven from the graph. The Vue panel hides the
 * native widget, which hides its input slot with it — `exposeWidgetInputSockets`
 * gives the slot a row and a visible dot back.
 *
 * Both text fields are wireable: a director fed by other nodes (Optic Scanner,
 * a saved prompt, a text node with a standing instruction) is fed from the
 * graph. The seed and its control_after_generate companion are hidden
 * natively and rendered at the bottom of the panel, Noise Control style.
 */
export const DIRECTOR_SOCKET_INPUTS = ["instruction", "source_prompt"];

const stringDefaults: Record<string, string> = {
  instruction: "",
  source_prompt: "",
  language: "en",
  control_after_generate: "fixed",
};
const numberDefaults: Record<string, number> = { seed: 0 };

export const promptDirectorNode: NodeModule = {
  id: "FiLPromptDirector",
  register(nodeType: LGraphNodeType, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [340, 300],
      initialWidth: 340,
      family: "llm",
      description: "Tells the LLM how to rewrite an existing prompt.",
      badges: [{ text: "LLM", color: "#22d3ee", text_color: "#0b0e14" }],
    });

    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...a: unknown[]) => unknown;
        onConfigure?: (...a: unknown[]) => unknown;
        onRemoved?: (...a: unknown[]) => unknown;
      },
    };
    const p = proto.prototype;

    const syncAll = (node: LGraphNode, target: Record<string, unknown>) => {
      for (const name of Object.keys(stringDefaults)) {
        target[name] = sanitizeWidgetValue(findFilWidget(node, name), "string", stringDefaults[name]);
      }
      for (const name of Object.keys(numberDefaults)) {
        target[name] = sanitizeWidgetValue(findFilWidget(node, name), "number", numberDefaults[name]);
      }
    };

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as LGraphNode & { _filPromptDirectorState?: unknown };
      const initial: Record<string, unknown> = {};
      syncAll(node, initial);
      for (const name of [...Object.keys(stringDefaults), ...Object.keys(numberDefaults)]) {
        hideNativeWidget(node, name);
      }
      const state = {
        nodeState: createSyncedNodeState(node, initial),
        initialValues: { ...initial },
        ui: {},
      };
      Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
      node._filPromptDirectorState = state;
      // growable: the two textareas carry `flex: 1` in the panel, so the
      // pixels the user drags onto the node box go into the fields — same
      // idiom as OpticScanner.
      addFilDomWidget(node, "fil_prompt_director_view", PromptDirectorVue, { state, height: 200, growable: true });
      exposeWidgetInputSockets(this, DIRECTOR_SOCKET_INPUTS);
      return result;
    };

    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as LGraphNode & { _filPromptDirectorState?: { nodeState: Record<string, unknown> } };
      const state = node._filPromptDirectorState;
      if (!state) return result;
      syncAll(node, state.nodeState);
      exposeWidgetInputSockets(this, DIRECTOR_SOCKET_INPUTS);
      return result;
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: LGraphNode, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    installWidgetSocketSync(p, DIRECTOR_SOCKET_INPUTS, "_filPromptDirectorState");
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
