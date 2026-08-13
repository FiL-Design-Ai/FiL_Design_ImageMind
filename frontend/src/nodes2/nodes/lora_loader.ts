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

export interface CyclerRun {
  position: number;
  total: number;
  lora_name: string;
  clean_name: string;
  label?: string;
  trigger_words?: string;
}

const nativeWidgetNames = [
  "lora_list",
  "filter_pattern",
  "cycle_mode",
  "index",
  "strength_model",
  "strength_clip",
  "include_bypass",
  "auto_advance",
  "skip_on_error",
];

export const loraLoaderNode: NodeModule = {
  id: "FiLLoraLoader",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [340, 280],
      initialWidth: 340,
      family: "tool",
      description: "Automatically cycles through LoRA adapters with individual weight sliders and presets.",
      badges: [{ text: "LORA LOADER", color: "#ec4899", text_color: "#fff" }],
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
      Object.defineProperty(state, "node", {
        value: node,
        enumerable: false,
        configurable: true,
      });
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

    const originalExecuted = p.onExecuted;
    p.onExecuted = function (
      this: unknown,
      output: Record<string, unknown>,
      ...args: unknown[]
    ) {
      const result = originalExecuted?.apply(this, [output, ...args]);
      const entry = Array.isArray(output?.fil_cycler)
        ? output.fil_cycler[0]
        : null;
      if (entry && typeof entry === "object") {
        const node = this as {
          _filCyclerLastRun?: CyclerRun;
          _filCyclerState?: { ui: Record<string, unknown> };
        };
        const run = entry as CyclerRun;
        node._filCyclerLastRun = run;
        const announce = node._filCyclerState?.ui?.onCycleRun;
        if (typeof announce === "function")
          (announce as (r: CyclerRun) => void)(run);
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
