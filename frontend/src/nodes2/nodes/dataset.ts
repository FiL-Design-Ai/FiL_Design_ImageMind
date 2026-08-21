import { defineAsyncComponent } from "vue";
import type { ComfyNodeData, LGraphNode, LGraphNodeType } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { type ComfyLikeWidget, createSyncedNodeState, findFilWidget, hideWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { exposeWidgetInputSockets, installWidgetSocketSync } from "@/nodes2/widgetInputSockets";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const DatasetForgeVue = defineAsyncComponent(() => import("@/components/nodes/DatasetForge.vue"));

/**
 * Widgets that may also be driven from the graph. The Vue panel hides the
 * native widget, which hides its input slot with it — `exposeWidgetInputSockets`
 * gives the slot a row and a visible dot back.
 */
export const DATASET_SOCKET_INPUTS = ["dataset_name", "trigger_word", "class_token", "captions", "caption_instruction", "dont_caption", "seed", "repeats"];

/** Name of the DOM widget carrying the Vue panel. */
const VIEW_WIDGET = "fil_dataset_forge_view";

// Defaults mirror node_dataset.py's define_schema() — kept here so a
// corrupted/legacy saved value self-heals via sanitizeWidgetValue() instead
// of reaching execute() as the wrong JS type.
const STRING_DEFAULTS: Record<string, string> = {
  dataset_name: "my_lora", trigger_word: "", class_token: "",
  base_resolution: "1024", layout: "kohya", caption_mode: "natural", crop_mode: "center",
  write_mode: "append", caption_language: "en", captions: "", dont_caption: "",
  caption_instruction: "", caption_extension: ".txt", image_format: "png",
};
const NUMBER_DEFAULTS: Record<string, number> = {
  repeats: 10, caption_max_words: 60, bucket_step: 64, jpg_quality: 95, seed: -1,
};
const BOOLEAN_DEFAULTS: Record<string, boolean> = { dry_run: false };

function hideNativeWidgets(node: { widgets?: unknown[] }): void {
  for (const w of ((node.widgets || []) as ComfyLikeWidget[])) {
    if (w.name === VIEW_WIDGET) continue;
    hideWidget(w);
  }
}

/**
 * Core attaches a `control_after_generate` companion to any INT widget named
 * `seed`, and it defaults to "randomize" — which re-rolled the caption seed
 * after every queue, so the field the tooltip calls "a fixed value makes
 * captions reproducible" was doing the exact opposite. Unlike Scanner/Seed
 * this panel exposes no random/fixed pill: `seed = -1` already means "let the
 * provider pick", so anything the user types is meant to stay put.
 */
function pinSeedControl(node: LGraphNode): void {
  const ctrl = findFilWidget(node, "control_after_generate");
  if (ctrl) ctrl.value = "fixed";
}

function syncFromWidgets(nodeState: Record<string, unknown>, node: LGraphNode): void {
  for (const [name, fallback] of Object.entries(STRING_DEFAULTS)) {
    nodeState[name] = sanitizeWidgetValue(findFilWidget(node, name), "string", fallback);
  }
  for (const [name, fallback] of Object.entries(NUMBER_DEFAULTS)) {
    nodeState[name] = sanitizeWidgetValue(findFilWidget(node, name), "number", fallback);
  }
  for (const [name, fallback] of Object.entries(BOOLEAN_DEFAULTS)) {
    nodeState[name] = sanitizeWidgetValue(findFilWidget(node, name), "boolean", fallback);
  }
}

export const datasetForgeNode: NodeModule = {
  id: "FiLDatasetForge",
  register(nodeType: LGraphNodeType, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [350, 460],
      initialWidth: 350,
      family: "llm",
      description:
        "Turns an image batch into a LoRA training dataset: aspect buckets, one caption per image, kohya or flat folder on disk.",
      badges: [{ text: "dataset", color: "#c98bf3", text_color: "#1a1a1a" }],
    });

    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...a: unknown[]) => unknown;
        onConfigure?: (...a: unknown[]) => unknown;
        onRemoved?: (...a: unknown[]) => unknown;
      };
    };
    const p = proto.prototype;

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as LGraphNode & { _filDatasetForgeState?: unknown };

      const initialNodeState: Record<string, unknown> = {};
      syncFromWidgets(initialNodeState, node);
      pinSeedControl(node);
      hideNativeWidgets(node);

      const state = {
        nodeState: createSyncedNodeState(node, initialNodeState),
        initialValues: { ...initialNodeState },
        ui: {},
      };
      Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
      node._filDatasetForgeState = state;

      // Height kept LOW and non-growable on purpose: computeSize() always wins
      // via Math.max in domWidgetHost.ts, and no row in this panel is wired to
      // absorb spare height (no `.is-growable`), so a buffer here would only
      // ever be dead space under the last section.
      addFilDomWidget(node, VIEW_WIDGET, DatasetForgeVue, { state, height: 420 });
      exposeWidgetInputSockets(this, DATASET_SOCKET_INPUTS);
      return result;
    };

    // A loaded workflow's saved widgets_values can override the sanitized
    // defaults after onNodeCreated — re-sanitize on configure, same as every
    // other Vue-panel node in this pack.
    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: LGraphNode, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as LGraphNode & { _filDatasetForgeState?: { nodeState: Record<string, unknown> } };
      const state = node._filDatasetForgeState;
      if (!state) return result;
      syncFromWidgets(state.nodeState, node);
      pinSeedControl(node);
      hideNativeWidgets(node);
      exposeWidgetInputSockets(this, DATASET_SOCKET_INPUTS);
      return result;
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: LGraphNode, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    installWidgetSocketSync(p, DATASET_SOCKET_INPUTS, "_filDatasetForgeState");
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
