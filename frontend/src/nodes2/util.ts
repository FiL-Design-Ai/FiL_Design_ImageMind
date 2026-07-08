/*
 * Small utilities shared across the per-node Vue registrations.
 */

export interface ComfyLikeWidget {
  name?: string;
  value?: unknown;
  options?: { values?: unknown[] };
  hidden?: boolean;
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