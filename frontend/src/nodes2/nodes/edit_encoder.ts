import { defineAsyncComponent, reactive } from "vue";
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
export const EDIT_ENCODER_SOCKET_INPUTS = ["prompt", "reference_strength"];

// The panel drives the controls that decide what happens to a reference. The
// advanced ones — both megapixel caps, the encoder role, and
// `reference_latents_method` — stay native widgets below the panel.
//
// `reference_cards` is JSON the panel writes a card at a time. It stays a
// hidden native widget rather than a panel-only value so a graph built through
// the API can still fill it in, and so a workflow saved before roles existed
// hands its old `prompt_preset` value straight to the backend's parser.
const stringDefaults: Record<string, string> = {
  prompt: "",
  reference_mode: "vision",
  reference_cards: "",
  reference_treatment: "normal",
};
const numericDefaults: Record<string, number> = { reference_strength: 1 };
const HIDE = [...Object.keys(stringDefaults), ...Object.keys(numericDefaults)];

/**
 * Autogrow reference slots as ComfyUI actually names them: the template's
 * prefix is joined to the Autogrow input's own id, so the first slot is
 * `images.image0` — not `image1`. The counter matched the guessed spelling and
 * so read zero however many references were wired; the optional leading path is
 * what fixes it, and a bare `image0` stays matched for a host that drops it.
 */
const REF_SLOT_RE = /(^|\.)image\d+$/;

/** What the backend parks on the node after every run (`ui.fil_edit_encoder`). */
export type EditEncoderRun = { summary: string; warned: boolean };

export function countRefs(node: LGraphNode): number {
  const inputs = (node as { inputs?: { name?: string; link?: number | null }[] }).inputs ?? [];
  return inputs.filter((i) => typeof i.name === "string" && REF_SLOT_RE.test(i.name) && i.link != null).length;
}

/**
 * The panel's `ui` bag, through the proxy the panel actually watches.
 *
 * `addFilDomWidget` mounts against `reactive(state)`, and a write to the RAW
 * object the module parked on the node fires no trap — the value changes and
 * every watcher stays silent. The reference counter read zero for exactly this
 * reason on top of matching the wrong slot names. `reactive()` caches per
 * target, so this is the same proxy the component holds. The same trap is
 * written up at length in nodes2/widgetInputSockets.ts.
 */
function liveUi(node: LGraphNode): Record<string, unknown> | null {
  const state = (node as { _filEditEncoderState?: { ui: Record<string, unknown> } })._filEditEncoderState;
  if (!state?.ui) return null;
  return (reactive(state) as { ui: Record<string, unknown> }).ui;
}

/**
 * FiLEditEncoder — prompt + reference images into one edit conditioning.
 * The panel holds the wired-reference counter, the prompt, and the three
 * controls that decide what happens to a reference. The Autogrow reference
 * slots stay core-managed below it, as do the advanced widgets.
 */
export const editEncoderNode: NodeModule = {
  id: "FiLEditEncoder",
  register(nodeType: LGraphNodeType, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [300, 300],
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
        onExecuted?: (output: Record<string, unknown>, ...a: unknown[]) => unknown;
        onRemoved?: (...a: unknown[]) => unknown;
      };
    };
    const p = proto.prototype;

    const syncAll = (node: LGraphNode, target: Record<string, unknown>) => {
      for (const name of Object.keys(stringDefaults)) {
        target[name] = sanitizeWidgetValue(findFilWidget(node, name), "string", stringDefaults[name]);
      }
      for (const name of Object.keys(numericDefaults)) {
        target[name] = sanitizeWidgetValue(findFilWidget(node, name), "number", numericDefaults[name]);
      }
    };

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as LGraphNode & { _filEditEncoderState?: { ui: Record<string, unknown> }; _filEditEncoderLastRun?: EditEncoderRun };
      const initial: Record<string, unknown> = {};
      syncAll(node, initial);
      for (const name of HIDE) {
        hideNativeWidget(node, name);
      }
      const state = {
        nodeState: createSyncedNodeState(node, initial),
        initialValues: { ...initial },
        ui: { refs: countRefs(node), lastRun: node._filEditEncoderLastRun ?? null },
      };
      Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
      node._filEditEncoderState = state;
      addFilDomWidget(node, "fil_edit_encoder_view", EditEncoderVue, { state, height: 250 });
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
      const ui = liveUi(node);
      if (ui) ui.refs = countRefs(node);
      exposeWidgetInputSockets(this, EDIT_ENCODER_SOCKET_INPUTS);
      return result;
    };

    const originalConnectionsChange = p.onConnectionsChange;
    p.onConnectionsChange = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalConnectionsChange?.apply(this, args);
      const ui = liveUi(this);
      if (ui) ui.refs = countRefs(this);
      return result;
    };

    // What the run actually did, on the node rather than only on an output
    // nobody wired. Every trap this node has is silent — a discarded reference,
    // a strength that does nothing in this mode, a preset that needs a
    // treatment — so the report has to arrive without being asked for.
    const originalExecuted = p.onExecuted;
    p.onExecuted = function (this: LGraphNode, output: Record<string, unknown>, ...args: unknown[]) {
      const result = originalExecuted?.apply(this, [output, ...args]);
      const entry = Array.isArray(output?.fil_edit_encoder) ? output.fil_edit_encoder[0] : null;
      if (entry && typeof entry === "object") {
        const node = this as LGraphNode & {
          _filEditEncoderLastRun?: EditEncoderRun;
          _filEditEncoderState?: { ui: Record<string, unknown> };
        };
        // Parked as well as announced: a panel whose async chunk is still
        // loading reads it on mount instead of showing nothing until the run
        // after next.
        node._filEditEncoderLastRun = entry as EditEncoderRun;
        const ui = liveUi(this);
        if (ui) ui.lastRun = entry as EditEncoderRun;
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
