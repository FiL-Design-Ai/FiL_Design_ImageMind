/**
 * The bridge between ComfyUI's widget value and the panel's reactive state.
 *
 * `getValue`/`setValue` are what makes a panel survive workflow save/load.
 * Loading calls `setValue(payload)`, and the payload has to be folded *into*
 * the existing state rather than replacing it: the mounted Vue component holds
 * a reference to `state.nodeState` and `state.ui`, so swapping either object
 * out leaves the panel bound to one nothing writes to any more.
 */
export function applyWidgetValue<S extends object>(state: S, value: unknown): void {
  if (!value || typeof value !== "object") return;

  const payload = value as Record<string, unknown>;
  const target = state as Record<string, unknown>;

  if (payload.nodeState && typeof payload.nodeState === "object" && target.nodeState) {
    Object.assign(target.nodeState as object, payload.nodeState);
  }
  if (payload.ui && typeof payload.ui === "object" && target.ui) {
    Object.assign(target.ui as object, payload.ui);
  }
  for (const [key, entry] of Object.entries(payload)) {
    if (key !== "nodeState" && key !== "ui") {
      target[key] = entry;
    }
  }
}
