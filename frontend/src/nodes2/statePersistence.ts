/**
 * Order-independent persistence for a FiL node's Vue panel state.
 *
 * Everything a FiL panel holds normally reaches the workflow file through
 * `widgets_values` — a *positional* array. That array is not safe to rely on:
 * `migrateWidgetsValues()` (ComfyUI `src/utils/litegraphUtil.ts`, run on every
 * load from the generated `ComfyNode.configure`) drops the entries sitting at
 * the index of every `force_input` input, but only when its mask happens to be
 * exactly as long as the saved array. On 🕵️ Optic Scanner that condition is
 * met by coincidence — `width`/`height` are `force_input=True`, and the node
 * carries 16 native widgets plus the panel's own DOM widget, so the mask and
 * the array are both 17 long. Two entries are then removed and everything from
 * `response_format` on shifts by two: the text fields come back empty, and the
 * DOM widget holding the whole panel state never gets its value at all
 * (verified live on frontend 1.47.10 through `app.loadGraphData`).
 *
 * So the panel state is written a second time, under its own key on the
 * serialized node, where nothing indexes it. `onSerialize` receives the object
 * that goes straight into the `.json`, and ComfyUI's workflow schema passes
 * unknown node keys through untouched, so it comes back on `onConfigure(info)`.
 * Values are re-applied through `state.nodeState`, i.e. through the
 * `createSyncedNodeState` proxy, so the native widgets — what the prompt
 * builder actually reads — are corrected too.
 */

import { reactive } from "vue";

/** Key the panel state is stored under on the serialized node. */
export const FIL_STATE_KEY = "fil_state";

export interface PersistedPanelState {
  nodeState: Record<string, unknown>;
  ui: Record<string, unknown>;
  lastRunSeed?: number | null;
}

/**
 * Start writing `state` into every serialization of `node`.
 *
 * Installed per instance (the state object is per instance) and chained onto
 * whatever `onSerialize` the prototype already carries, so a core or
 * third-party hook on the same callback keeps running.
 */
export function installFilStatePersistence(node: unknown, state: PersistedPanelState): void {
  const n = node as { onSerialize?: (o: Record<string, unknown>) => void };
  const previous = n.onSerialize?.bind(n);
  n.onSerialize = (o: Record<string, unknown>) => {
    previous?.(o);
    try {
      o[FIL_STATE_KEY] = JSON.parse(JSON.stringify({
        nodeState: { ...state.nodeState },
        ui: { ...state.ui },
        lastRunSeed: state.lastRunSeed ?? null,
      }));
    } catch (err) {
      console.warn("[FiL_Design_ImageMind] could not serialize panel state:", err);
    }
  };
}

/**
 * Re-apply a previously persisted panel state from the `info` object handed to
 * `onConfigure`. Returns `false` for a workflow saved before this key existed,
 * so the caller's positional restore stays the fallback.
 */
export function restoreFilState(state: PersistedPanelState, info: unknown): boolean {
  const saved = (info as Record<string, unknown> | undefined)?.[FIL_STATE_KEY];
  if (!saved || typeof saved !== "object") return false;
  const payload = saved as Partial<PersistedPanelState>;

  // Through Vue's reactive view of the state, not the bare object the node
  // module holds. `addFilDomWidget` mounts the panel against `reactive(state)`,
  // and a write straight to the underlying object updates the value without
  // ever notifying that component — the panel then keeps rendering whatever it
  // read at mount time (reproduced live: the three text fields stayed empty
  // while `nodeState` already held the restored text). `reactive()` is cached
  // per target, so this is the very proxy the component was mounted with.
  const live = reactive(state) as PersistedPanelState;

  if (payload.nodeState && typeof payload.nodeState === "object") {
    // One key at a time, not Object.assign: each write has to go through the
    // synced-state proxy so the matching native widget is updated with it.
    for (const [name, value] of Object.entries(payload.nodeState)) {
      live.nodeState[name] = value;
    }
  }
  if (payload.ui && typeof payload.ui === "object") {
    Object.assign(live.ui, payload.ui);
  }
  if (payload.lastRunSeed !== undefined) {
    live.lastRunSeed = payload.lastRunSeed;
  }
  return true;
}

/**
 * Deletes keys from `node.properties` that equal their default values.
 * Pixaroma pattern: keeps workflow JSON lean and prevents newly opened graphs
 * from falsely marking as 'modified' on startup.
 */
export function cleanNodePropertyDefaults(
  node: unknown,
  defaults: Record<string, unknown>,
): void {
  const n = node as { properties?: Record<string, unknown> };
  if (!n?.properties) return;
  for (const [key, defVal] of Object.entries(defaults)) {
    if (n.properties[key] === defVal) {
      delete n.properties[key];
    }
  }
}

