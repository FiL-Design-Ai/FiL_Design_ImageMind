import type { ComfyApp } from "@/types/comfy";
import { startNodeRun, stopNodeRun, FIL_RUN_FX_CSS } from "@/composables/useRunButtonFx";

const STYLE_ID = "fil-run-fx";

function injectStyle(): void {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = FIL_RUN_FX_CSS;
  document.head.appendChild(el);
}

/**
 * Pulse the header of the node that is executing.
 *
 * Hooks the canonical ComfyUI signal — the `executing` event on `app.api`,
 * whose detail is the id of the node currently running, or null when the queue
 * drains. That null is what ends the last pulse; without handling it a node
 * would keep pulsing after the run finished.
 */
export function installRunButtonFx(app: ComfyApp): void {
  const api = app.api;
  if (typeof api?.addEventListener !== "function") {
    console.warn("[FiL_Design_ImageMind] run FX: api not available, skipping");
    return;
  }
  injectStyle();

  api.addEventListener("executing", (event: Event) => {
    const detail = (event as CustomEvent).detail;
    // Older core sends the bare node id; newer wraps it as `{ node, display_node }`.
    // `node` is the execution id, which for an expanded or subgraph node is a
    // composite like "5:2" — no such node exists on the canvas. `display_node`
    // is the one the user sees and the one `canvas.nodeEls` is keyed by, so it
    // is what the pulse has to follow.
    const nodeId = detail && typeof detail === "object"
      ? (detail as { display_node?: string | number | null; node?: string | number | null }).display_node
        ?? (detail as { node?: string | number | null }).node
      : detail;
    if (typeof nodeId === "string" || typeof nodeId === "number") {
      startNodeRun(app as never, nodeId);
    } else {
      stopNodeRun();
    }
  });

  // A run that errors out never sends the closing `executing: null`.
  api.addEventListener("execution_error", stopNodeRun);
  api.addEventListener("execution_interrupted", stopNodeRun);

  console.info("[FiL_Design_ImageMind] run FX installed (api executing hook)");
}
