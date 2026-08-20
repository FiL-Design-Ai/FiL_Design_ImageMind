import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { type ComfyLikeWidget, createSyncedNodeState, findFilWidget, hideWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { exposeWidgetInputSockets, installWidgetSocketSync } from "@/nodes2/widgetInputSockets";
import { applyFxComposables } from "@/nodes2/applyFxComposables";
import { FIL_STATE_KEY, installFilStatePersistence, restoreFilState } from "@/nodes2/statePersistence";

const OpticScannerVue = defineAsyncComponent(() => import("@/components/nodes/OpticScanner.vue"));

/**
 * Text fields that also accept a link from another node (a prompt builder, a
 * "String" primitive, another Scanner's `prompt` output, …). Their sockets are
 * re-exposed by `exposeWidgetInputSockets` — hiding the native widget hides its
 * socket too — and OpticScanner.vue lines each dot up with its own field and
 * greys the field out while a link drives it.
 */
export const SCANNER_TEXT_INPUTS = ["prompt", "negative_prompt", "custom_style"];

/** Name of the DOM widget carrying the Vue panel. */
const VIEW_WIDGET = "fil_scanner_view";

/**
 * Hide every native widget so nothing is drawn on the canvas behind the panel —
 * except the panel's own DOM widget.
 *
 * LiteGraph's layout pass skips hidden widgets (`getLayoutWidgets()`), so
 * hiding the panel widget drops the panel's height out of `node.computeSize()`.
 * `onConfigure` runs *after* the DOM widget has been added, and the blanket
 * loop this replaces caught it: a scanner restored from a saved workflow
 * reported a 74px content height for a 1062px panel, and the box the user got
 * was whatever the file happened to have saved (verified live on 1.47.10).
 */
function hideNativeWidgets(node: { widgets?: unknown[] }): void {
  for (const w of ((node.widgets || []) as ComfyLikeWidget[])) {
    if (w.name === VIEW_WIDGET) continue;
    hideWidget(w);
  }
}

export const scannerNode: NodeModule = {
  id: "FiLOpticScanner",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      // Height kept LOW on purpose — computeSize() (~660px real content)
      // always wins via Math.max in domWidgetHost.ts, so a buffer above it
      // here would just be dead space at the bottom. Width is the actual
      // reason this floor exists (computeSize()'s own width guess ignores it).
      minSize: [380, 300],
      family: "llm",
      description: "Image analysis or text-idea expansion into a generation prompt.",
      badges: [{ text: "LLM", color: "#7c5cfc", text_color: "#fff" }],
    });

    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...a: unknown[]) => unknown;
        onConfigure?: (...a: unknown[]) => unknown;
        onRemoved?: (...a: unknown[]) => unknown;
      };
    };
    const p = proto.prototype;

    // Every native widget is hidden — the Vue panel renders all of them,
    // including the three text fields, whose values reach `execute()` through
    // the hidden widgets (createSyncedNodeState mirrors the panel onto them).
    // The text fields' *sockets* are put back by exposeWidgetInputSockets().
    const allWidgetNames = [
      "prompt", "negative_prompt", "custom_style",
      "agent", "agent_focus", "model_type", "detail_level", "language",
      "prompt_mode", "response_format",
      "video_duration", "video_aspect", "video_sound", "video_camera",
      "photo_style", "nsfw_photo_style", "art_style", "nsfw_art_style",
      "seed", "control_after_generate"
    ];

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filScannerSeedState?: unknown };

      const initialValues: Record<string, unknown> = {};
      const initialNodeState: Record<string, unknown> = {};
      for (const name of allWidgetNames) {
        const w = findFilWidget(node, name);
        if (!w) continue;
        const isNum = name === "seed" || name === "video_duration";
        const fallback = isNum ? (name === "video_duration" ? 0 : -1) : "";
        const value = sanitizeWidgetValue(w, isNum ? "number" : "string", fallback);
        initialValues[name] = value;
        initialNodeState[name] = value;
        hideWidget(w);
      }
      initialNodeState.seed_mode = "random";

      // Also ensure any remaining native widgets are hidden to prevent canvas overlap
      hideNativeWidgets(node);

      const state = {
        nodeState: createSyncedNodeState(node, initialNodeState),
        initialValues,
        ui: {},
        lastRunSeed: null,
      };
      Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
      node._filScannerSeedState = state;
      // `widgets_values` is not a safe channel for this node — see
      // nodes2/statePersistence.ts for what mangles it and why.
      installFilStatePersistence(node, state);

      exposeWidgetInputSockets(node, SCANNER_TEXT_INPUTS);
      // `growable`: the panel's prompt fields absorb whatever height the user
      // drags past the content (see OpticScanner.vue's `.is-growable` rows) —
      // which is why this estimate has to be close. Anything above the panel's
      // own minimum is stretch the user never asked for, and the prompt fields
      // swallow it silently: at the old 580 a freshly dropped node came up
      // 664px tall around ~300px of folded panel. Measured at 297px with every
      // section folded (the state a fresh node is in), 320 leaves a little room
      // for a locale with taller labels without inventing empty space.
      addFilDomWidget(node, VIEW_WIDGET, OpticScannerVue, { state, height: 320, growable: true });

      // LiteGraph sizes a fresh node from the widgets its constructor saw — all
      // twenty of them, before the loop above hid them — and never revisits that
      // number once they are gone. Measured on a live graph: a node dropped on
      // the canvas came up 664px tall around a 320px panel, and the growable
      // host charged the difference to the stretch, so the prompt fields
      // silently ate ~250px of it. Re-fitting here reads as "no stretch" to that
      // host, and a saved workflow still wins: `configure()` restores its own
      // size a moment after this runs.
      const sizable = node as { size?: [number, number]; setSize?: (s: [number, number]) => void; computeSize?: () => [number, number] };
      if (sizable.size && sizable.setSize && sizable.computeSize) {
        sizable.setSize([sizable.size[0], sizable.computeSize()[1]]);
      }
      return result;
    };

    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: unknown, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as {
        widgets?: unknown[];
        _filScannerSeedState?: { nodeState: Record<string, unknown>; ui: Record<string, unknown>; lastRunSeed?: number | null };
      };
      const state = node._filScannerSeedState;
      if (!state) return result;
      // With `fil_state` present, the values read here are thrown away by
      // restoreFilState() below, and a shifted positional array is the very
      // thing `fil_state` exists to survive — so warning about it would fire on
      // every load of a perfectly good workflow. Without the key, the values
      // below are all there is, and a bad one is worth saying out loud.
      const hasFilState = Boolean((args[0] as Record<string, unknown> | undefined)?.[FIL_STATE_KEY]);
      for (const name of allWidgetNames) {
        const w = findFilWidget(node, name);
        if (!w) continue;
        const isNum = name === "seed" || name === "video_duration";
        const fallback = isNum ? (name === "video_duration" ? 0 : -1) : "";
        state.nodeState[name] = sanitizeWidgetValue(w, isNum ? "number" : "string", fallback, hasFilState);
        hideWidget(w);
      }
      // The widget values read above are the fallback for workflows saved
      // before `fil_state` existed. When the key is there it wins: the
      // positional array it is there to replace can arrive shifted, and a
      // shifted value has already landed on every widget by this point.
      restoreFilState(state, args[0]);
      hideNativeWidgets(node);
      // A loaded workflow replaces `node.inputs` with its own saved array, so
      // the `alwaysVisible` flags set at creation are gone by now.
      exposeWidgetInputSockets(node, SCANNER_TEXT_INPUTS);
      return result;
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: unknown, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    // Connecting or cutting a wire changes nothing in the panel's DOM, so the
    // observers in `useWidgetSockets` cannot see it. This bumps the counter they
    // watch (and re-exposes the sockets a re-connect may have hidden), which is
    // what replaced the panel's own 300ms poll.
    installWidgetSocketSync(p, SCANNER_TEXT_INPUTS, "_filScannerSeedState");

    // Apply visual effects (Connection FX, Adaptive Title Color)
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
