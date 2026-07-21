import type { ComfyApp } from "@/types/comfy";
import { flashNodeRun } from "@/composables/useRunButtonFx";

/**
 * Flash FiL_Design_ImageMind node headers when a node starts executing.
 *
 * Hooks the canonical ComfyUI signal — the `executing` event on `app.api`,
 * whose detail is the id of the node currently running (or null when the
 * queue drains) — rather than the non-existent `canvas.ds.executeNode`
 * method the previous implementation tried to wrap (which never fired).
 */
export function installRunButtonFx(app: ComfyApp): void {
  const api = app.api;
  if (typeof api?.addEventListener !== "function") {
    console.warn("[FiL_Design_ImageMind] run button FX: api not available, skipping");
    return;
  }

  api.addEventListener("executing", (event: Event) => {
    const detail = (event as CustomEvent).detail;
    // Older core sends the bare node id; newer wraps it as `{ node }`.
    const nodeId = detail && typeof detail === "object"
      ? (detail as { node?: string | number }).node
      : detail;
    if (typeof nodeId === "string" || typeof nodeId === "number") {
      flashNodeRun({ canvas: app.canvas }, nodeId);
    }
  });

  console.info("[FiL_Design_ImageMind] run button FX installed (api executing hook)");
}