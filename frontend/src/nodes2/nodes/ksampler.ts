import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { exposeWidgetInputSockets, installWidgetSocketSync } from "@/nodes2/widgetInputSockets";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const KSamplerVue = defineAsyncComponent(() => import("@/components/nodes/KSamplerPanel.vue"));

/**
 * Widgets that may also be driven from the graph. The Vue panel hides the
 * native widget, which hides its input slot with it — `exposeWidgetInputSockets`
 * gives the slot a row and a visible dot back.
 *
 * `sampler_name`/`scheduler` are here too, and they are the only combos in the
 * pack that are. The objection to them was real — a name arriving over a wire
 * has to match the installed list exactly, and nothing on this side can check
 * that — so the check lives where the value is finally used: `execute()` in
 * nodes/node_ksampler.py rejects an unknown name against
 * `comfy.samplers.KSampler.SAMPLERS/SCHEDULERS` and names the valid ones,
 * instead of letting it fall through to a bare KeyError inside the sampler.
 *
 * `control_after_generate`, `preview_method` and `vae_decode` stay off the
 * list: they steer this node's own behaviour rather than the sampling, and
 * there is nothing upstream that would sensibly drive them.
 */
export const KSAMPLER_SOCKET_INPUTS = [
  "seed", "steps", "cfg", "denoise", "eta", "sampler_name", "scheduler",
];

const numericDefaults: Record<string, number> = {
  seed: 0, steps: 20, cfg: 7.0, denoise: 1.0, eta: 1.0,
};
const stringDefaults: Record<string, string> = {
  sampler_name: "euler", scheduler: "normal", preview_method: "auto", vae_decode: "true",
  // ComfyUI adds this one itself, next to any seed widget. The panel shows it
  // unchanged rather than replacing it: it is the seed control every ComfyUI
  // user already knows, and core is what acts on it when the prompt is queued.
  control_after_generate: "randomize",
};
const boolDefaults: Record<string, boolean> = { bongmath: true };
const HIDE = [
  ...Object.keys(numericDefaults), ...Object.keys(stringDefaults), ...Object.keys(boolDefaults),
];

export const ksamplerNode: NodeModule = {
  id: "FiLKSampler",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      // Height stays low on purpose: computeSize() wins via Math.max in
      // domWidgetHost.ts, so anything larger here is only dead space under the
      // last row. Width is the real reason the floor exists — sampler names
      // ("dpmpp_2m_sde_gpu") need the room, and computeSize()'s width guess
      // ignores the DOM widget's content.
      minSize: [320, 240],
      family: "sampling",
      description: "Full sampler/scheduler set, passthrough outputs, preview, HighRes-fix script.",
      badges: [{ text: "sampler", color: "#7aa2f7", text_color: "#0b0e14" }],
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
      for (const name of Object.keys(numericDefaults)) {
        target[name] = sanitizeWidgetValue(findFilWidget(node, name), "number", numericDefaults[name]);
      }
      for (const name of Object.keys(stringDefaults)) {
        target[name] = sanitizeWidgetValue(findFilWidget(node, name), "string", stringDefaults[name]);
      }
      for (const name of Object.keys(boolDefaults)) {
        target[name] = sanitizeWidgetValue(findFilWidget(node, name), "boolean", boolDefaults[name]);
      }
    };

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filKSamplerState?: unknown };
      const initial: Record<string, unknown> = {};
      syncAll(node, initial);
      for (const name of HIDE) {
        const w = findFilWidget(node, name);
        if (w) (w as { hidden?: boolean }).hidden = true;
      }
      const state = {
        nodeState: createSyncedNodeState(node, initial),
        initialValues: { ...initial },
        ui: {},
      };
      Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
      node._filKSamplerState = state;
      addFilDomWidget(node, "fil_ksampler_view", KSamplerVue, { state, height: 240 });
      exposeWidgetInputSockets(this, KSAMPLER_SOCKET_INPUTS);
      return result;
    };

    // Workflow-loaded widgets_values land after onNodeCreated, so the sanitized
    // defaults have to be re-read here or a saved graph shows the defaults.
    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: unknown, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filKSamplerState?: { nodeState: Record<string, unknown> } };
      const state = node._filKSamplerState;
      if (!state) return result;
      syncAll(node, state.nodeState);
      exposeWidgetInputSockets(this, KSAMPLER_SOCKET_INPUTS);
      return result;
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: unknown, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    installWidgetSocketSync(p, KSAMPLER_SOCKET_INPUTS, "_filKSamplerState");
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
