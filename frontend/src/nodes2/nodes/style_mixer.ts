import { defineAsyncComponent, reactive } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { FIL_STATE_KEY, installFilStatePersistence, restoreFilState } from "@/nodes2/statePersistence";
import { exposeWidgetInputSockets, installWidgetSocketSync } from "@/nodes2/widgetInputSockets";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const StyleMixerVue = defineAsyncComponent(() => import("@/components/nodes/StyleMixer.vue"));

/**
 * Widgets that may also be driven from the graph. The Vue panel hides the
 * native widget, which hides its input slot with it — `exposeWidgetInputSockets`
 * gives the slot a row and a visible dot back.
 */
export const STYLE_MIXER_SOCKET_INPUTS = ["base_prompt"];

export interface ComfyInputSlot {
  name: string;
  type: string;
  link: number | null;
  hidden?: boolean;
}

const hiddenWidgetNames = [
  "fusion_mode",
  "img_weight_1",
  "img_focus_1",
  "img_weight_2",
  "img_focus_2",
  "img_weight_3",
  "img_focus_3",
  "img_weight_4",
  "img_focus_4",
  "style_1",
  "weight_1",
  "style_2",
  "weight_2",
  "style_3",
  "weight_3",
];

/** Exported for tests: link preservation across a reload is the whole point. */
export function updateImageSlotVisibility(node: any): void {
  if (!node) return;

  // LiteGraph mutates `node.inputs` on the raw object, bypassing the Vue proxy,
  // so a computed reading `state.node.inputs` never re-evaluates. Bumping this
  // counter through the reactive state is the signal the panel watches.
  const filState = node._filStyleMixerState as { ui?: Record<string, unknown> } | undefined;
  if (filState?.ui) {
    filState.ui.slotVersion = ((filState.ui.slotVersion as number) ?? 0) + 1;
  }

  // Preserve original schema inputs array on first execution
  if (!node._allInputs && Array.isArray(node.inputs)) {
    node._allInputs = [...node.inputs];
  }
  if (!node._allInputs) return;

  // `configure()` replaces `node.inputs` wholesale with fresh slot objects
  // carrying the workflow's links — different objects from the ones parked in
  // `_allInputs`. Without folding those links back in first, the filter below
  // would hand LiteGraph the stale copies and every wire into this node would
  // silently vanish on load. Matched by name: index is exactly what shifts.
  if (Array.isArray(node.inputs)) {
    for (const live of node.inputs as ComfyInputSlot[]) {
      if (!live) continue;
      const stored = node._allInputs.find((inp: ComfyInputSlot) => inp && inp.name === live.name);
      if (stored) stored.link = live.link ?? null;
      else node._allInputs.push(live);
    }
  }

  const isInputConnected = (slotName: string): boolean => {
    const input = node._allInputs.find((inp: ComfyInputSlot) => inp && inp.name === slotName);
    return Boolean(input && input.link != null);
  };

  const img2Connected = isInputConnected("image_2");
  const img3Connected = isInputConnected("image_3");

  const visibleSlots = new Set<string>();
  visibleSlots.add("config");
  visibleSlots.add("fusion_mode");
  visibleSlots.add("base_prompt");
  visibleSlots.add("image_1");
  visibleSlots.add("image_2"); // Standby slot (always visible initially)

  if (img2Connected) visibleSlots.add("image_3");
  if (img3Connected) visibleSlots.add("image_4");

  // Re-filter node.inputs so LiteGraph canvas renderer only draws active input sockets
  node.inputs = node._allInputs.filter((inp: ComfyInputSlot) => inp && visibleSlots.has(inp.name));

  // Hiding a slot renumbers everything after it, but each link still records
  // the slot index it was made against — so a wire would keep pointing at the
  // position its target used to occupy. Re-stamp them against the new order.
  const links = node.graph?.links as Record<number, { target_slot?: number } | undefined> | undefined;
  if (links) {
    node.inputs.forEach((inp: ComfyInputSlot, index: number) => {
      const link = inp?.link != null ? links[inp.link] : undefined;
      if (link) link.target_slot = index;
    });
  }

  if (typeof node.setSize === "function" && typeof node.computeSize === "function") {
    node.setSize(node.computeSize());
  }
  if (typeof node.setDirtyCanvas === "function") {
    node.setDirtyCanvas(true, true);
  }
}

export const styleMixerNode: NodeModule = {
  id: "FiLStyleMixer",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [250, 320],
      initialWidth: 250,
      family: "base",
      description: "Blends visual styles and reference images with weighted influence sliders and optional Vision LLM fusion.",
      badges: [{ text: "styles", color: "#e0af68", text_color: "#0b0e14" }],
    });

    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...args: unknown[]) => unknown;
        onConfigure?: (...args: unknown[]) => unknown;
        onConnectionsChange?: (...args: unknown[]) => unknown;
        onRemoved?: (...args: unknown[]) => unknown;
      };
    };
    const p = proto.prototype;

    const origCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const res = origCreated?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filStyleMixerState?: unknown };

      const initialValues: Record<string, unknown> = {};
      const initialNodeState: Record<string, unknown> = {};

      for (const name of hiddenWidgetNames) {
        const w = findFilWidget(node, name);
        if (!w) continue;
        const expectedType = name.includes("weight") ? "number" : "string";
        const fallback = expectedType === "number" ? 0.5 : "(None)";
        const val = sanitizeWidgetValue(w, expectedType, fallback);
        initialValues[name] = val;
        initialNodeState[name] = val;
        (w as { hidden?: boolean }).hidden = true;
      }

      const rawState = {
        nodeState: createSyncedNodeState(node, initialNodeState),
        initialValues,
        ui: { slotVersion: 0 } as Record<string, unknown>,
      };
      Object.defineProperty(rawState, "node", { value: node, enumerable: false, configurable: true });
      // Wrapped here rather than leaving it to addFilDomWidget: `reactive()` is
      // idempotent, so both sides share one proxy and slot-visibility updates
      // made from this module actually reach the Vue panel.
      const state = reactive(rawState);
      (node as any)._filStyleMixerState = state;

      // `widgets_values` is a positional array, and this node's own DOM widget
      // trails the real ones in it — so the panel's whole state object rides
      // along at the end. Any shift (a schema change, a slot appearing) lands
      // that object on a real widget and the panel comes back on defaults.
      // Same fix as scanner.ts: keep the state under its own key.
      installFilStatePersistence(node, state);

      addFilDomWidget(node, "fil_style_mixer_view", StyleMixerVue, { state, height: 480 });
      updateImageSlotVisibility(this);
      exposeWidgetInputSockets(this, STYLE_MIXER_SOCKET_INPUTS);
      return res;
    };

    const origConfigure = p.onConfigure;
    p.onConfigure = function (this: unknown, ...args: unknown[]) {
      const res = origConfigure?.apply(this, args);
      const node = this as { _filStyleMixerState?: { nodeState: Record<string, unknown>; ui: Record<string, unknown> } };
      const state = node._filStyleMixerState;
      if (state) {
        // With `fil_state` present these reads are only a fallback, and a
        // shifted positional array is precisely what that key exists to
        // survive — so no warning about it.
        const hasFilState = Boolean((args[0] as Record<string, unknown> | undefined)?.[FIL_STATE_KEY]);
        for (const name of hiddenWidgetNames) {
          const w = findFilWidget(node, name);
          if (!w) continue;
          const expectedType = name.includes("weight") ? "number" : "string";
          const fallback = expectedType === "number" ? 0.5 : "(None)";
          state.nodeState[name] = sanitizeWidgetValue(w, expectedType, fallback, hasFilState);
        }
        // Wins over the positional read above when the key is there.
        restoreFilState(state, args[0]);
      }
      updateImageSlotVisibility(this);
      exposeWidgetInputSockets(this, STYLE_MIXER_SOCKET_INPUTS);
      return res;
    };

    const origConnectionsChange = p.onConnectionsChange;
    p.onConnectionsChange = function (this: unknown, type: unknown, index: unknown, connected: unknown, link_info: unknown, input_or_output: unknown) {
      const res = origConnectionsChange?.apply(this, [type, index, connected, link_info, input_or_output]);
      if (type === 1 || (type as any)?.name === "input") {
        updateImageSlotVisibility(this);
      }
      exposeWidgetInputSockets(this, STYLE_MIXER_SOCKET_INPUTS);
      return res;
    };

    const origRemoved = p.onRemoved;
    p.onRemoved = function (this: unknown, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return origRemoved?.apply(this, args);
    };

    installWidgetSocketSync(p, STYLE_MIXER_SOCKET_INPUTS, "_filStyleMixerState");
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};


