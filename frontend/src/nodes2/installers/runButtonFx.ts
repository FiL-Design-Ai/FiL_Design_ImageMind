import type { ComfyApp } from "@/types/comfy";
import { setRunningNodes, startNodeRun, stopNodeRun, markNodeFailed, clearFailedNodes, FIL_RUN_FX_CSS } from "@/composables/useRunButtonFx";

const STYLE_ID = "fil-run-fx";

function injectStyle(): void {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = FIL_RUN_FX_CSS;
  document.head.appendChild(el);
}

/** One entry of `progress_state.nodes`, as `comfy_execution/progress.py` sends it. */
interface ProgressNode {
  state?: string;
  node_id?: string | number;
  display_node_id?: string | number | null;
  parent_node_id?: string | number | null;
}

function runningIds(detail: unknown): (string | number)[] | null {
  const nodes = (detail as { nodes?: Record<string, ProgressNode> } | null)?.nodes;
  if (!nodes || typeof nodes !== "object") return null;
  const ids: (string | number)[] = [];
  for (const [key, entry] of Object.entries(nodes)) {
    if (entry?.state !== "running") continue;
    // `display_node_id` is the node the user is meant to see for an expanded
    // one; the composite it falls back to is resolved against the canvas by
    // the composable, which walks up to the containing subgraph.
    ids.push(entry.display_node_id ?? entry.node_id ?? key);
  }
  return ids;
}

/**
 * Mark the nodes that are executing.
 *
 * Two signals, and the difference between them is the whole reason this file
 * is not three lines:
 *
 *  - `progress_state` (`comfy_execution/progress.py`) carries the *complete*
 *    picture — every non-pending node with its `state`, so a run with four
 *    nodes going at once marks four. This is the one to follow when core sends
 *    it.
 *  - `executing` carries one id at a time, or null when the queue drains. On a
 *    live 1.47.10 it arrives as a bare string, not the `{ node, display_node }`
 *    object newer core is documented to send; both forms are read here. Once
 *    `progress_state` has been seen, only its closing null is honoured — the
 *    ids would otherwise collapse the set back to one node per burst.
 */
export function installRunButtonFx(app: ComfyApp): void {
  const api = app.api;
  if (typeof api?.addEventListener !== "function") {
    console.warn("[FiL_Design_ImageMind] run FX: api not available, skipping");
    return;
  }
  injectStyle();

  let sawProgressState = false;

  api.addEventListener("progress_state", (event: Event) => {
    const ids = runningIds((event as CustomEvent).detail);
    if (!ids) return;
    sawProgressState = true;
    setRunningNodes(app as never, ids);
  });

  api.addEventListener("executing", (event: Event) => {
    const detail = (event as CustomEvent).detail;
    const nodeId = detail && typeof detail === "object"
      ? (detail as { display_node?: string | number | null; node?: string | number | null }).display_node
        ?? (detail as { node?: string | number | null }).node
      : detail;
    if (typeof nodeId === "string" || typeof nodeId === "number") {
      if (!sawProgressState) startNodeRun(app as never, nodeId);
    } else {
      stopNodeRun();
    }
  });

  // A run that errors out never sends the closing `executing: null`.
  api.addEventListener("execution_error", stopNodeRun);
  api.addEventListener("execution_interrupted", stopNodeRun);

  // Title-box dot: red for a node that errored, cleared once a new prompt
  // starts. `msg.data` for `execution_error` carries `node_id` at the top
  // level (`services/dialogService.ts`'s `ExecutionErrorDialogInput`, the
  // shape `ExecutionErrorWsMessage` also satisfies — read off the host's own
  // 1.48.x sources, not guessed).
  api.addEventListener("execution_error", (event: Event) => {
    const nodeId = (event as CustomEvent).detail?.node_id;
    if (typeof nodeId === "string" || typeof nodeId === "number") markNodeFailed(app as never, nodeId);
  });
  api.addEventListener("execution_start", () => clearFailedNodes(app as never));

  console.info("[FiL_Design_ImageMind] run FX installed (progress_state + executing)");
}
