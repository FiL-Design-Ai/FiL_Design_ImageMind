import { defineAsyncComponent, reactive } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, hideWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { exposeWidgetInputSockets, installWidgetSocketSync } from "@/nodes2/widgetInputSockets";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const ColorWizardVue = defineAsyncComponent(() => import("@/components/nodes/ColorWizard.vue"));

/**
 * Widgets that may also be driven from the graph. The Vue panel hides the
 * native widget, which hides its input slot with it — `exposeWidgetInputSockets`
 * gives the slot a row and a visible dot back.
 */
export const COLOR_WIZARD_SOCKET_INPUTS = ["strength", "saturate", "temperature", "tint"];

const hiddenWidgetNames = [
  "method",
  "strength",
  "saturate",
  "temperature",
  "tint",
  "preserve_skin",
];

export const colorWizardNode: NodeModule = {
  id: "FiLColorWizard",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [300, 310],
      initialWidth: 300,
      family: "image",
      description: "Automatic color correction: white balance, LAB contrast, and skin protection with quick presets.",
      badges: [{ text: "color", color: "#f7768e", text_color: "#0b0e14" }],
    });

    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...args: unknown[]) => unknown;
        onConfigure?: (...args: unknown[]) => unknown;
        onRemoved?: (...args: unknown[]) => unknown;
      };
    };
    const p = proto.prototype;

    const origCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const res = origCreated?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filColorWizardState?: unknown };

      const initialValues: Record<string, unknown> = {};
      const initialNodeState: Record<string, unknown> = {};

      for (const name of hiddenWidgetNames) {
        const w = findFilWidget(node, name);
        if (!w) continue;
        const expectedType = name === "preserve_skin" ? "boolean" : name === "method" ? "string" : "number";
        const fallback = expectedType === "boolean" ? false : expectedType === "number" ? 0.0 : "Full Auto";
        const val = sanitizeWidgetValue(w, expectedType, fallback);
        initialValues[name] = val;
        initialNodeState[name] = val;
        hideWidget(w);
      }

      const rawState = {
        nodeState: createSyncedNodeState(node, initialNodeState),
        initialValues,
        ui: {} as Record<string, unknown>,
      };
      Object.defineProperty(rawState, "node", { value: node, enumerable: false, configurable: true });
      const state = reactive(rawState);
      (node as any)._filColorWizardState = state;

      addFilDomWidget(node, "fil_color_wizard_view", ColorWizardVue, { state, height: 320 });
      exposeWidgetInputSockets(this, COLOR_WIZARD_SOCKET_INPUTS);
      return res;
    };

    const origConfigure = p.onConfigure;
    p.onConfigure = function (this: unknown, ...args: unknown[]) {
      const res = origConfigure?.apply(this, args);
      const node = this as { _filColorWizardState?: { nodeState: Record<string, unknown> } };
      const state = node._filColorWizardState;
      if (state) {
        for (const name of hiddenWidgetNames) {
          const w = findFilWidget(node, name);
          if (!w) continue;
          const expectedType = name === "preserve_skin" ? "boolean" : name === "method" ? "string" : "number";
          const fallback = expectedType === "boolean" ? false : expectedType === "number" ? 0.0 : "Full Auto";
          state.nodeState[name] = sanitizeWidgetValue(w, expectedType, fallback);
        }
      }
      exposeWidgetInputSockets(this, COLOR_WIZARD_SOCKET_INPUTS);
      return res;
    };

    const origRemoved = p.onRemoved;
    p.onRemoved = function (this: unknown, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return origRemoved?.apply(this, args);
    };

    installWidgetSocketSync(p, COLOR_WIZARD_SOCKET_INPUTS, "_filColorWizardState");
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
