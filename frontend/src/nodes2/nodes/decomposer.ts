import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { exposeWidgetInputSockets, installWidgetSocketSync } from "@/nodes2/widgetInputSockets";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const DecomposerVue = defineAsyncComponent(() => import("@/components/nodes/ImageDecomposerPanel.vue"));

/**
 * Widgets that may also be driven from the graph. The Vue panel hides the
 * native widget, which hides its input slot with it — `exposeWidgetInputSockets`
 * gives the slot a row and a visible dot back.
 *
 * `prompt` only: a decomposer fed by another node is fed a prompt. `language`
 * is a two-value combo nobody wires.
 */
export const DECOMPOSER_SOCKET_INPUTS = ["prompt"];

const stringDefaults: Record<string, string> = {
  prompt: "",
  // node_decomposer.py declares options=["en","ru"] with default="English",
  // which is not one of them — so the widget lands on the first option. "en"
  // is what a fresh node actually holds, and that is what is mirrored here.
  language: "en",
};

export const decomposerNode: NodeModule = {
  id: "FiLImageDecomposer",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      // Low on purpose — computeSize() wins via Math.max in domWidgetHost.ts.
      // Width is what this floor is for: the prompt box wants the room.
      minSize: [320, 180],
      family: "llm",
      description: "Decomposes image or prompt into distinct visual layers.",
      badges: [{ text: "vision", color: "#bb9af7", text_color: "#0b0e14" }],
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
      for (const name of Object.keys(stringDefaults)) {
        target[name] = sanitizeWidgetValue(findFilWidget(node, name), "string", stringDefaults[name]);
      }
    };

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filDecomposerState?: unknown };
      const initial: Record<string, unknown> = {};
      syncAll(node, initial);
      for (const name of Object.keys(stringDefaults)) {
        const w = findFilWidget(node, name);
        if (w) (w as { hidden?: boolean }).hidden = true;
      }
      const state = {
        nodeState: createSyncedNodeState(node, initial),
        initialValues: { ...initial },
        ui: {},
      };
      Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
      node._filDecomposerState = state;
      addFilDomWidget(node, "fil_decomposer_view", DecomposerVue, { state, height: 180 });
      exposeWidgetInputSockets(this, DECOMPOSER_SOCKET_INPUTS);
      return result;
    };

    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: unknown, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filDecomposerState?: { nodeState: Record<string, unknown> } };
      const state = node._filDecomposerState;
      if (!state) return result;
      syncAll(node, state.nodeState);
      exposeWidgetInputSockets(this, DECOMPOSER_SOCKET_INPUTS);
      return result;
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: unknown, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    installWidgetSocketSync(p, DECOMPOSER_SOCKET_INPUTS, "_filDecomposerState");
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
