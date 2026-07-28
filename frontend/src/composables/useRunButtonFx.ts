/**
 * Marks the node the queue is currently executing.
 *
 * This used to be a one-shot 400ms flash fired when a node started, which was
 * over before you could look at it and said nothing about how long the node ran.
 * It now pulses for as long as the node is actually executing: `startNodeRun`
 * marks a node, `stopNodeRun` clears the previous one, and the queue draining
 * clears the last.
 *
 * The animation itself lives in CSS (see FIL_RUN_FX_CSS) so the browser owns the
 * timing — no timers, no per-frame work on our side.
 */
import { runFxEnabled, runFxCoversEveryNode } from "@/stores/settings/runFxSettings";

const RUNNING_CLASS = "fil-node-running";

export const FIL_RUN_FX_CSS = `
@keyframes fil-run-pulse {
  0%, 100% { box-shadow: 0 0 0 0 transparent; }
  50% { box-shadow: 0 0 10px 2px var(--fil-accent, #7c3aed); }
}
.${RUNNING_CLASS} .comfy-node-header, .${RUNNING_CLASS}.comfy-node-header {
  animation: fil-run-pulse 1.1s ease-in-out infinite;
  border-radius: inherit;
}
@media (prefers-reduced-motion: reduce) {
  .${RUNNING_CLASS} .comfy-node-header, .${RUNNING_CLASS}.comfy-node-header {
    animation: none;
    box-shadow: 0 0 8px 1px var(--fil-accent, #7c3aed);
  }
}`;

interface CanvasApp {
  canvas?: { nodeEls?: Record<string | number, HTMLElement> };
  graph?: { getNodeById?: (id: number | string) => { comfyClass?: string; type?: string } | null };
}

let marked: HTMLElement | null = null;

function isOurNode(app: CanvasApp, nodeId: string | number): boolean {
  const lookup = app.graph?.getNodeById;
  if (!lookup) return false;
  // Numeric ids are the common case, but a node inside a subgraph is addressed
  // by a composite string ("5:2") that `Number()` turns into NaN. Try the id as
  // given before coercing.
  const numeric = Number(nodeId);
  const node = lookup(nodeId) ?? (Number.isNaN(numeric) ? null : lookup(numeric));
  const id = node?.comfyClass ?? node?.type ?? "";
  return id.startsWith("FiL");
}

/** Clear the pulse from whichever node currently carries it. */
export function stopNodeRun(): void {
  marked?.classList.remove(RUNNING_CLASS);
  marked = null;
}

/** Pulse `nodeId`'s header until the next call. */
export function startNodeRun(app: CanvasApp, nodeId: string | number): void {
  stopNodeRun();
  if (!runFxEnabled()) return;
  if (!runFxCoversEveryNode() && !isOurNode(app, nodeId)) return;

  const el = app?.canvas?.nodeEls?.[nodeId];
  if (!el) return;
  el.classList.add(RUNNING_CLASS);
  marked = el;
}
