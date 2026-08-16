import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, hideNativeWidget } from "@/nodes2/util";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const LoraLoaderVue = defineAsyncComponent(
  () => import("@/components/nodes/LoraLoaderPanel.vue")
);

// Exactly the widgets `FiLLoraLoader` declares — no more. The list arrived
// copied from the cycler and named four that do not exist on this node
// (`cycle_mode`, `index`, `include_bypass`, `auto_advance`), which reads as if
// the node cycles and hides nothing, since there is nothing there to hide.
/** The node's width. The design is drawn at 660; 400 is what was asked for. */
const DESIGN_WIDTH = 400;

const nativeWidgetNames = [
  "lora_list",
  "filter_pattern",
  "strength_model",
  "strength_clip",
  "skip_on_error",
];

export const loraLoaderNode: NodeModule = {
  id: "FiLLoraLoader",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      // Wider than the 340 the panels started at: the row carries a name, a
      // weight field and two switches, and the strip the toolbar floats into
      // (see `socketBand.ts`) is only what the labels leave behind — at 340 it
      // was 213px and the toolbar did not fit in it.
      // 400 by request. The design's three lines need about 500px of strip, so
      // at this width they no longer ride between the socket labels — the panel
      // keeps them in flow instead, which `measureBand` decides by measuring
      // rather than by a width threshold written down here.
      minSize: [DESIGN_WIDTH, 200],
      initialWidth: DESIGN_WIDTH,
      family: "tool",
      description: "Stacks LoRA adapters onto MODEL and CLIP, each with its own weights and on/off switch.",
      badges: [{ text: "LORA LOADER", color: "#ec4899", text_color: "#fff" }],
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
      Object.defineProperty(state, "node", {
        value: node,
        enumerable: false,
        configurable: true,
      });
      // The panel's state has to be reachable from the node, and this is the
      // only thing that puts it there. Without it `onConfigure` below found
      // nothing and returned early, so loading a saved workflow left the panel
      // showing the empty defaults while the widget still held the user's
      // stack — and the first edit wrote that empty view back over it.
      node._filCyclerState = state;

      if (Array.isArray((node as { inputs?: Array<{ name?: string }> }).inputs)) {
        (node as { inputs: Array<{ name?: string }> }).inputs = (
          node as { inputs: Array<{ name?: string }> }
        ).inputs.filter((slot) => Boolean(slot && slot.name && slot.name.trim()));
      }
      addFilDomWidget(node, "fil_lora_loader_view", LoraLoaderVue, {
        state,
        height: 280,
      });
      return result;
    };

    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: unknown, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as {
        widgets?: unknown[];
        _filCyclerState?: { nodeState: Record<string, unknown> };
      };
      if (!node._filCyclerState) return result;
      syncAll(node, node._filCyclerState.nodeState);
      return result;
    };

    // No `onExecuted` here on purpose. The copied one listened for a
    // `fil_cycler` payload that `FiLLoraLoader` never sends — it returns no
    // `ui` at all — and handed it to a panel callback this panel never
    // defines. Dead on both ends.

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: unknown, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
