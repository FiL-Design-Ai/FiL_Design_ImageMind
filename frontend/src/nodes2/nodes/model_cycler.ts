import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, hideNativeWidget } from "@/nodes2/util";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const ModelCyclerVue = defineAsyncComponent(() => import("@/components/nodes/ModelCyclerPanel.vue"));

/** One finished run, as `node_model_cycler.py` reports it under `ui.fil_cycler`. */
export interface CyclerRun {
  position: number;
  total: number;
  model_name: string;
  clean_name: string;
}

const nativeWidgetNames = [
  "source_mode",
  "model_list",
  "filter_pattern",
  "cycle_mode",
  "index",
  "auto_advance",
  "unload_previous",
  "free_vram",
  "skip_on_error",
  "weight_dtype",
];

// The node deliberately does NOT touch `app.queuePrompt`. An earlier draft
// wrapped it so that pressing Queue with a cycler on the canvas silently ran
// once per model — a global host patch that changed what the Queue button
// means for every other pack, and handed the user a dozen images when they
// asked for one. Running the whole list is an explicit button in the panel
// (`ModelCyclerPanel.vue` -> `queueAllModelsRun`), which passes the batch
// count to the host's own `queuePrompt` the way any caller may.

export const modelCyclerNode: NodeModule = {
  id: "FiLModelCycler",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [380, 220],
      initialWidth: 380,
      family: "tool",
      description: "Automatically cycles through diffusion models or checkpoints.",
      badges: [{ text: "CYCLER", color: "#a855f7", text_color: "#fff" }],
    });

    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...a: unknown[]) => unknown;
        onConfigure?: (...a: unknown[]) => unknown;
        onRemoved?: (...a: unknown[]) => unknown;
        onExecuted?: (output: Record<string, unknown>, ...a: unknown[]) => unknown;
      };
    };
    const p = proto.prototype;

    const syncAll = (node: unknown, target: Record<string, unknown>) => {
      for (const name of nativeWidgetNames) {
        const w = findFilWidget(node, name);
        if (w) target[name] = w.value;
      }
    };

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filCyclerState?: unknown };
      const initial: Record<string, unknown> = {};
      syncAll(node, initial);
      for (const name of nativeWidgetNames) {
        hideNativeWidget(node, name);
      }
      const state = {
        nodeState: createSyncedNodeState(node, initial),
        initialValues: { ...initial },
        ui: {},
      };
      Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
      node._filCyclerState = state;
      addFilDomWidget(node, "fil_cycler_view", ModelCyclerVue, { state, height: 220 });
      return result;
    };

    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: unknown, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filCyclerState?: { nodeState: Record<string, unknown> } };
      if (!node._filCyclerState) return result;
      syncAll(node, node._filCyclerState.nodeState);
      return result;
    };

    // Where the cycle actually stands, straight from the run that just
    // finished. The `index` widget cannot show it — that is the starting point
    // the user typed, while the position moves on the server between prompts.
    const originalExecuted = p.onExecuted;
    p.onExecuted = function (this: unknown, output: Record<string, unknown>, ...args: unknown[]) {
      const result = originalExecuted?.apply(this, [output, ...args]);
      const entry = Array.isArray(output?.fil_cycler) ? output.fil_cycler[0] : null;
      if (entry && typeof entry === "object") {
        const node = this as {
          _filCyclerLastRun?: CyclerRun;
          _filCyclerState?: { ui: Record<string, unknown> };
        };
        const run = entry as CyclerRun;
        // Parked on the node as well as announced: a panel that is not mounted
        // yet (collapsed node, async chunk still loading) reads it on mount
        // instead of showing nothing until the next run.
        node._filCyclerLastRun = run;
        const announce = node._filCyclerState?.ui?.onCycleRun;
        if (typeof announce === "function") (announce as (r: CyclerRun) => void)(run);
      }
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
