/*
 * Small utilities shared across the per-node Vue registrations.
 */

export interface ComfyLikeWidget {
  name?: string;
  value?: unknown;
  options?: { values?: unknown[] };
  hidden?: boolean;
  /**
   * Row offset inside the node body, in node-local pixels. LiteGraph's layout
   * pass writes it for visible widgets; for hidden ones we write it ourselves
   * to position their input sockets (see nodes2/widgetInputSockets.ts).
   */
  y?: number;
  /**
   * Optional `computeSize` (LiteGraph widget layout callback). We keep it
   * around so visibility toggles can restore the original after hide.
   */
  computeSize?: (...args: unknown[]) => unknown;
  __filOriginalComputeSize?: (...args: unknown[]) => unknown;
}

export function findFilWidget(node: unknown, name: string): ComfyLikeWidget | undefined {
  const n = node as { widgets?: ComfyLikeWidget[] };
  if (!n.widgets) return undefined;
  return n.widgets.find((w) => w.name === name);
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
export function createSyncedNodeState(node: unknown, initial: Record<string, unknown>): Record<string, unknown> {
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
