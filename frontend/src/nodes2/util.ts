/*
 * Small utilities shared across the per-node Vue registrations.
 */

import type { ComfyLikeWidget, LGraphNode } from "@/types/comfy";

// `ComfyLikeWidget` describes the host, so it lives with the rest of the host
// types now. Re-exported because this is where the pack has always imported it
// from, and moving that too would touch every caller for no gain.
export type { ComfyLikeWidget };

export function findFilWidget(node: LGraphNode, name: string): ComfyLikeWidget | undefined {
  if (!node.widgets) return undefined;
  return node.widgets.find((w) => w.name === name);
}

/**
 * Take a native widget out of the node body, in BOTH of ComfyUI's renderers.
 *
 * Every FiL node hides the widgets its Vue panel replaces. The two renderers
 * read that intent from two different places, and writing only one of them is
 * how the pack shipped a broken Nodes 2.0 mode:
 *
 *  - The canvas renderer reads `widget.hidden` — LiteGraph's own flag, checked
 *    by `getLayoutWidgets()` when it lays the node body out.
 *  - The Vue renderer reads `widget.options.hidden` and nothing else.
 *    `extractWidgetDisplayOptions` (`composables/graph/useGraphNodeManager.ts`)
 *    copies exactly `canvasOnly / advanced / hidden / read_only` off `options`
 *    into the node snapshot, and `isWidgetVisible`
 *    (`vueNodes/composables/useProcessedWidgets.ts`) decides from that copy.
 *    Note it falls back to the widget property for `advanced`
 *    (`widget.options?.advanced ?? widget.advanced`) but NOT for `hidden`, so
 *    `widget.hidden` alone is invisible to it. Verified on
 *    comfyui_frontend_package 1.48.7: a freshly placed 🎬 Cinema Rig showed all
 *    nine "hidden" widgets as live rows above its panel.
 *
 * Timing matters: that snapshot is built once, when the node is added to the
 * graph, and `useGraphNodeManager` publishes no event for a widget whose
 * options changed later. Call this while the node is being created — which is
 * where every caller already does — not in response to a later user action.
 *
 * Returns the widget it was handed, so a caller can keep working with it
 * (setting a value, pinning a control combo), or `undefined` for a missing one.
 */
export function hideWidget(w: ComfyLikeWidget | undefined): ComfyLikeWidget | undefined {
  if (!w) return undefined;
  w.hidden = true;
  // Mutated in place, never replaced: LiteGraph hands the SAME `options` object
  // to the combo machinery (`options.values` is read back by reference), and a
  // fresh object here would quietly detach a widget from its own value list.
  if (!w.options) w.options = {};
  w.options.hidden = true;
  return w;
}

/** `hideWidget` by name — the shape almost every node registration wants. */
export function hideNativeWidget(node: LGraphNode, name: string): ComfyLikeWidget | undefined {
  return hideWidget(findFilWidget(node, name));
}

/**
 * A `nodeState` object whose writes are mirrored onto the matching hidden
 * native widget's `.value`.
 *
 * Vue components only ever write to `state.nodeState[name] = v` (the DOM
 * widget's own reactive state, serialized separately for workflow JSON).
 * ComfyUI's prompt builder reads execution inputs from `node.widgets[i].value`
 * by name, not from that DOM widget's state — so without this mirror, a
 * value changed in the Vue panel is never actually sent to `execute()`
 * (verified against a real ComfyUI instance: the native widget, and thus
 * the queued prompt, stays frozen at whatever it was when the widget got
 * hidden). Wrapping the plain object in a Proxy keeps every existing Vue
 * component unchanged — `nodeState[name] = value` already goes through it.
 */
export function createSyncedNodeState(node: LGraphNode, initial: Record<string, unknown>): Record<string, unknown> {
  return new Proxy({ ...initial }, {
    set(target, prop, value) {
      target[prop as string] = value;
      const w = findFilWidget(node, String(prop));
      if (w) w.value = value;
      return true;
    },
  });
}

/**
 * Reset a hidden widget's `.value` to `fallback` when it doesn't match the
 * expected primitive type, mutating the widget in place and returning the
 * safe value to use for initial state.
 *
 * Schema evolution (a new backend Input appended to `define_schema()`)
 * shifts a saved workflow's legacy `widgets_values` — a plain positional
 * array — onto the wrong widgets on load, because the count of real
 * widgets no longer matches what the file was saved with. Since our own
 * DOM widget (holding the whole Vue panel's nested state object) always
 * trails the real ones in `node.widgets`, an old file's leftover DOM-state
 * entry can land on a newly-added widget instead, handing e.g. an INT
 * field the entire `{nodeState, initialValues, ui}` object. That object
 * then fails backend int/float/combo conversion and invalidates the whole
 * prompt (every connected output gets rejected, not just this node) —
 * reproduced live via a hand-built legacy `widgets_values` array one field
 * shorter than the current schema, loaded through `app.loadGraphData`.
 * Called for every hidden widget before it's read into `initialNodeState`
 * so a corrupted legacy save self-heals to the schema default instead of
 * silently reaching `execute()`.
 */
export function sanitizeWidgetValue<T>(
  w: ComfyLikeWidget | undefined,
  kind: "number" | "boolean" | "string",
  fallback: T,
  /** Skip the console warning where a shifted array is expected and a later
   * pass restores the real value anyway — see scanner.ts's `fil_state` path. */
  quiet = false,
): T {
  if (!w) return fallback;
  const v = w.value;
  const ok =
    (kind === "number" && typeof v === "number" && Number.isFinite(v)) ||
    (kind === "boolean" && typeof v === "boolean") ||
    (kind === "string" && typeof v === "string");
  if (ok) return v as T;
  w.value = fallback;
  if (quiet) return fallback;
  console.warn(
    `[FiL_Design_ImageMind] widget "${w.name}" had a corrupted value (expected ${kind}) — resetting to default. ` +
    "This usually means the workflow was saved with an older version of this node.",
  );
  return fallback;
}

/**
 * Validate that a COMBO/enum widget's value belongs to the allowed backend contract options.
 * Pixaroma pattern: prevents invalid or deprecated string options from reaching execute().
 */
export function validateWidgetComboValue<T extends string>(
  w: ComfyLikeWidget | undefined,
  validOptions: readonly T[],
  fallback: T,
): T {
  if (!w) return fallback;
  const val = String(w.value);
  if (validOptions.includes(val as T)) return val as T;
  w.value = fallback;
  console.warn(
    `[FiL_Design_ImageMind] widget "${w.name}" had an invalid combo option "${val}" — resetting to default "${fallback}".`,
  );
  return fallback;
}

/**
 * Generate a random safe integer seed suitable for ComfyUI nodes (up to MAX_SAFE_INTEGER).
 */
/**
 * The range a seed may actually hold, read off the widget the backend declared.
 *
 * Not a constant: the pack's seed inputs do not share one range. FiLKSampler,
 * HiRes Fix, Noise Control and FiLSeed run to `0xFFFFFFFFFFFFFFFF`, while the
 * two LLM nodes (Optic Scanner, Dataset Forge) stop at 999999999999 — their
 * seed is forwarded to a provider API, not used as local RNG.
 *
 * The floor is clamped to 0 even when the widget says -1: on the LLM nodes -1
 * is the "let the provider pick" sentinel, so it is not a value a *fixed* seed
 * may ever land on. The ceiling is clamped to `MAX_SAFE_INTEGER` because above
 * it JavaScript integers stop being exact and the number shown would not be the
 * number sent.
 */
function seedRange(widget?: ComfyLikeWidget): { min: number; max: number } {
  const declaredMin = Number(widget?.options?.min);
  const declaredMax = Number(widget?.options?.max);
  const min = Math.max(0, Number.isFinite(declaredMin) ? declaredMin : 0);
  const ceiling = Number.isFinite(declaredMax) ? declaredMax : Number.MAX_SAFE_INTEGER;
  return { min, max: Math.max(min, Math.min(ceiling, Number.MAX_SAFE_INTEGER)) };
}

/**
 * A fresh fixed seed that the node it belongs to can actually accept.
 *
 * Without the widget it draws across the full safe-integer range, which is what
 * this did unconditionally — and on Optic Scanner that produced seeds ~9000×
 * above the declared maximum of 999999999999. ComfyUI never caught them: the
 * node's `validate_inputs()` takes `**kwargs`, and `execution.py` skips its
 * whole min/max check for any node that does. The out-of-range value went
 * straight to the provider, which rejects or silently ignores a seed it cannot
 * represent — so "New fixed" produced a different answer on every run, which is
 * exactly what a broken fixed seed looks like from the outside.
 */
export function randomSeed(widget?: ComfyLikeWidget): number {
  const { min, max } = seedRange(widget);
  return min + Math.floor(Math.random() * (max - min + 1));
}

/** Fold a seed into the node's declared range, so a typed value cannot leave it. */
export function clampSeed(value: number, widget?: ComfyLikeWidget): number {
  const { min, max } = seedRange(widget);
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, Math.floor(value)));
}

