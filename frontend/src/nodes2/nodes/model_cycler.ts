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

/**
 * The width new nodes open at, and the floor they cannot be dragged below.
 *
 * 560 rather than the LoRA Loader's 400, because this node pays for its own
 * labels: `model_name` and `clean_name` eat the right-hand column, so the strip
 * between the labels only outgrows the toolbar's ~375px somewhere around 520.
 * Measured on the canvas, not guessed — at 400 the block stays in flow and the
 * design's three lines never ride the sockets.
 *
 * And it has to be `minSize`. `initialWidth: 560` was here first and did
 * nothing at all: `nodeStyle.ts` only ever narrows with it
 * (`size[0] > initialWidth`), while the cycler computes to ~409 — so every new
 * node still opened at 400 with the toolbar down in the panel, which is the one
 * thing the 560 was for. The e2e case "is lifted at the width new nodes start
 * at" believed it, because a playground node is handed its width directly.
 */
const DESIGN_WIDTH = 560;

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
      // Width: see `DESIGN_WIDTH` above — it is the one lever that actually
      // opens a node wider. The height floor is whatever the rows need: the
      // toolbar rides the socket strip rather than costing node height, so a
      // floor of 260 was empty node under the last row.
      minSize: [DESIGN_WIDTH, 120],
      family: "tool",
      description: "Automatically cycles through diffusion models or checkpoints.",
      // No badge: it said "CYCLER" beside a title that already says it.
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
      const nodeState = createSyncedNodeState(node, initial);
      const state = {
        nodeState,
        initialValues: { ...initial },
        ui: {},
      };
      Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
      node._filCyclerState = state;
      if (Array.isArray((node as { inputs?: Array<{ name?: string }> }).inputs)) {
        (node as { inputs: Array<{ name?: string }> }).inputs = (
          node as { inputs: Array<{ name?: string }> }
        ).inputs.filter((slot) => Boolean(slot && slot.name && slot.name.trim()));
      }

      addFilDomWidget(node, "fil_cycler_view", ModelCyclerVue, { state, height: 260 });
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
