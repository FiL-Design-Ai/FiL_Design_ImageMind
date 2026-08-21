import { defineAsyncComponent } from "vue";
import type { ComfyNodeData, LGraphNode, LGraphNodeType } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, hideNativeWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { exposeWidgetInputSockets, installWidgetSocketSync } from "@/nodes2/widgetInputSockets";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const EditEncoderVue = defineAsyncComponent(() => import("@/components/nodes/EditEncoderPanel.vue"));

/**
 * Widgets that may also be driven from the graph. The Vue panel hides the
 * native widget, which hides its input slot with it — `exposeWidgetInputSockets`
 * gives the slot a row and a visible dot back.
 */
export const EDIT_ENCODER_SOCKET_INPUTS = ["prompt"];

// The panel drives only the prompt; resize is full-auto on the backend and
// `reference_latents_method` stays a native advanced widget below the panel.
const stringDefaults: Record<string, string> = { prompt: "" };
const HIDE = [...Object.keys(stringDefaults)];

/** Autogrow reference slots as the UI names them: `image1`, `image2`, … */
const REF_SLOT_RE = /^image\d+$/;

function countRefs(node: LGraphNode): number {
  const inputs = (node as { inputs?: { name?: string; link?: number | null }[] }).inputs ?? [];
  return inputs.filter((i) => typeof i.name === "string" && REF_SLOT_RE.test(i.name) && i.link != null).length;
}

/**
 * FiLEditEncoder — prompt + reference images into one edit conditioning.
 * The panel is deliberately lean: a live wired-reference counter and the
 * prompt textarea. The Autogrow reference slots stay core-managed below it,
 * and the reference-layout method stays a native advanced widget.
 */
export const editEncoderNode: NodeModule = {
  id: "FiLEditEncoder",
  register(nodeType: LGraphNodeType, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [300, 150],
      initialWidth: 300,
      family: "conditioning",
      description: "Prompt + reference images in one conditioning for FLUX.2-family edit models.",
      badges: [{ text: "EDIT", color: "#f472b6", text_color: "#000" }],
    });

    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...a: unknown[]) => unknown;
        onConfigure?: (...a: unknown[]) => unknown;
        onConnectionsChange?: (...a: unknown[]) => unknown;
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
      const node = this as LGraphNode & { _filEditEncoderState?: { ui: Record<string, unknown> } };
      const initial: Record<string, unknown> = {};
      syncAll(node, initial);
      for (const name of HIDE) {
        hideNativeWidget(node, name);
      }
      const state = {
        nodeState: createSyncedNodeState(node, initial),
        initialValues: { ...initial },
        ui: { refs: countRefs(node) },
      };
      Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
      node._filEditEncoderState = state;
      addFilDomWidget(node, "fil_edit_encoder_view", EditEncoderVue, { state, height: 110 });
      exposeWidgetInputSockets(this, EDIT_ENCODER_SOCKET_INPUTS);
      return result;
    };

    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as LGraphNode & { _filEditEncoderState?: { nodeState: Record<string, unknown>; ui: Record<string, unknown> } };
      const state = node._filEditEncoderState;
      if (!state) return result;
      syncAll(node, state.nodeState);
      state.ui.refs = countRefs(node);
      exposeWidgetInputSockets(this, EDIT_ENCODER_SOCKET_INPUTS);
      return result;
    };

    const originalConnectionsChange = p.onConnectionsChange;
    p.onConnectionsChange = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalConnectionsChange?.apply(this, args);
      const node = this as LGraphNode & { _filEditEncoderState?: { ui: Record<string, unknown> } };
      if (node._filEditEncoderState) {
        node._filEditEncoderState.ui.refs = countRefs(node);
      }
      return result;
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: LGraphNode, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    installWidgetSocketSync(p, EDIT_ENCODER_SOCKET_INPUTS, "_filEditEncoderState");
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
