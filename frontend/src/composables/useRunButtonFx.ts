/**
 * Marks the nodes the queue is currently executing.
 *
 * There are two node renderers in ComfyUI and this feature once addressed a
 * third one that does not exist. It looked the node up in `canvas.nodeEls` (no
 * occurrence anywhere in comfyui_frontend_package 1.47.10) and animated
 * `.comfy-node-header` (likewise absent), so it could not fire on either
 * renderer. The unit tests stayed green because the fake host defined `nodeEls`
 * itself.
 *
 * What the host actually offers, all four confirmed against a live 1.47.10:
 *
 *  - Canvas nodes (`Comfy.VueNodes.Enabled: false`, the default) —
 *    `node.strokeStyles` is core's own extension point. Its constructor seeds
 *    `error`/`selected`, then `setupStrokeStyles(this)` adds `running` (a flat
 *    `#0f0`, lineWidth 3), `dragOver` and `executionError`; the draw loop
 *    strokes every entry that returns a shape. We add ours in the theme accent
 *    and lift core's green off that node while ours is up — two rings around
 *    one node is noise, not emphasis. It is restored the moment the mark ends.
 *  - DOM nodes (Vue rendering) — the node root carries `data-node-id`, and its
 *    title bar inside is `.lg-node-header`.
 *  - **Nodes run in parallel.** A live run reported "4 nodes running" and sent
 *    `executing` in bursts. Marking one node at a time meant the mark hopped
 *    between them while core kept its own green ring on all the others. The
 *    mark is a set now.
 *  - **A node inside a subgraph is addressed by a composite id** ("30:24").
 *    No such node exists on the canvas, so `getNodeById` answered null and the
 *    whole feature went silent for anything inside a subgraph — core rings the
 *    container instead. `resolveNode` falls back to the leading segment, which
 *    is that container.
 *
 * Both halves animate. The canvas half drives its own repaint while something
 * is marked (see `PULSE_MS`) — measured at 4.5 repaints/second when the graph
 * is otherwise idle, which is a visible stutter rather than a pulse, and core
 * already repaints far more often than that during a run.
 */
import { runFxEnabled, runFxCoversEveryNode } from "@/stores/settings/runFxSettings";
import { ACTIVE_PALETTE } from "@/styles/brand";

const RUNNING_CLASS = "fil-node-running";

/** Our key in `node.strokeStyles`, namespaced so it cannot collide with core's. */
const STROKE_KEY = "filRunning";

/** One full breath, shared by the CSS keyframes and the canvas ring. */
const PULSE_MS = 1100;

/** How often the canvas is asked to repaint while a node is marked. */
const REPAINT_MS = 60;

/**
 * The glow is the same accent the title bar of a FiL node is already filled
 * with, so on our own nodes a pure box-shadow pulse measured as a full cycle
 * and still read as "nothing is happening" in a screenshot. The dark hairline
 * separates the glow from the fill, and the brightness lift makes the bar
 * itself breathe — that part is visible whatever colour sits under it.
 */
export const FIL_RUN_FX_CSS = `
@keyframes fil-run-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent;
    filter: brightness(1);
  }
  50% {
    box-shadow: 0 0 0 1px rgba(0,0,0,0.85), 0 0 12px 3px var(--fil-accent, #7c3aed);
    filter: brightness(1.35);
  }
}
.${RUNNING_CLASS} {
  animation: fil-run-pulse ${PULSE_MS}ms ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  .${RUNNING_CLASS} {
    animation: none;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.85), 0 0 8px 1px var(--fil-accent, #7c3aed);
  }
}`;

interface StrokeShape {
  color: string;
  lineWidth: number;
}

type StrokeStyle = () => StrokeShape | undefined;

interface CanvasNode {
  comfyClass?: string;
  type?: string;
  strokeStyles?: Record<string, StrokeStyle | undefined>;
}

interface Canvas {
  setDirty?: (foreground: boolean, background?: boolean) => void;
}

interface CanvasApp {
  canvas?: Canvas;
  graph?: { getNodeById?: (id: number | string) => CanvasNode | null };
}

interface Mark {
  el: HTMLElement | null;
  styles: Record<string, StrokeStyle | undefined> | null;
  /** Core's own `running` stroke, held while ours replaces it. */
  coreRunning: StrokeStyle | undefined;
  hadCoreRunning: boolean;
}

/** Keyed by node object: two execution ids can resolve to one subgraph box. */
const marks = new Map<CanvasNode, Mark>();
let markedCanvas: Canvas | null = null;
let repaintTimer: ReturnType<typeof setInterval> | null = null;

function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && !!window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
}

function lookup(app: CanvasApp, nodeId: string | number): CanvasNode | null {
  const graph = app.graph;
  if (typeof graph?.getNodeById !== "function") return null;
  // Called on the graph, never as a detached `const fn = graph.getNodeById`:
  // LiteGraph's implementation is `this._nodes_by_id[id]`, so a bare call throws
  // on undefined `this` — and an exception in an event listener is swallowed by
  // ComfyApi with a console warning, which is how this managed to hide behind
  // the two wrong DOM guesses instead of being noticed.
  //
  // Numeric ids are the common case, but a node inside a subgraph is addressed
  // by a composite string ("5:2") that `Number()` turns into NaN. Try the id as
  // given before coercing.
  const numeric = Number(nodeId);
  return graph.getNodeById(nodeId) ?? (Number.isNaN(numeric) ? null : graph.getNodeById(numeric));
}

/**
 * The node on the canvas for an execution id, and the id its DOM element would
 * carry. A composite id ("30:24") belongs to a node inside subgraph 30, which
 * has no element and no entry in `_nodes_by_id`; the box the user can actually
 * see is the subgraph itself.
 */
function resolveNode(app: CanvasApp, nodeId: string | number): { node: CanvasNode | null; id: string | number } {
  const direct = lookup(app, nodeId);
  if (direct) return { node: direct, id: nodeId };

  const composite = String(nodeId);
  const cut = composite.indexOf(":");
  if (cut > 0) {
    const container = composite.slice(0, cut);
    const node = lookup(app, container);
    if (node) return { node, id: container };
  }
  return { node: null, id: nodeId };
}

function isOurNode(node: CanvasNode | null): boolean {
  const id = node?.comfyClass ?? node?.type ?? "";
  return id.startsWith("FiL");
}

/**
 * The element to animate under the Vue renderer: the title bar when it is
 * there, the node root otherwise. Returning the root as a fallback keeps this
 * working if core renames the header again — a ring around the whole node is
 * still the right answer, and silence is what got us here.
 */
function findNodeEl(nodeId: string | number): HTMLElement | null {
  if (typeof document === "undefined") return null;
  const id = String(nodeId).replace(/"/g, '\\"');
  const root = document.querySelector<HTMLElement>(`[data-node-id="${id}"]`);
  if (!root) return null;
  return root.querySelector<HTMLElement>(".lg-node-header") ?? root;
}

/** `#rrggbb` at `alpha`. Anything else is handed back untouched. */
function withAlpha(color: string, alpha: number): string {
  const hex = /^#([0-9a-f]{6})$/i.exec(color);
  if (!hex) return color;
  const n = parseInt(hex[1], 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${alpha.toFixed(3)})`;
}

/**
 * The ring, read at draw time so a theme switch mid-run recolours it and the
 * phase advances without anything being stored per node.
 */
function ringShape(): StrokeShape {
  const accent = ACTIVE_PALETTE.accent;
  if (prefersReducedMotion()) return { color: accent, lineWidth: 3 };
  // 0…1…0 over PULSE_MS, matching the CSS keyframes' ease-in-out shape closely
  // enough that the two halves read as one effect on a mixed graph.
  const phase = (Date.now() % PULSE_MS) / PULSE_MS;
  const wave = (1 - Math.cos(phase * 2 * Math.PI)) / 2;
  return { color: withAlpha(accent, 0.45 + 0.55 * wave), lineWidth: 2 + 2 * wave };
}

function driveRepaints(): void {
  if (repaintTimer !== null || prefersReducedMotion()) return;
  repaintTimer = setInterval(() => {
    // Nothing left to animate: stop asking for repaints rather than leaving a
    // timer running for the rest of the session.
    if (marks.size === 0) {
      stopRepaints();
      return;
    }
    markedCanvas?.setDirty?.(true);
  }, REPAINT_MS);
}

function stopRepaints(): void {
  if (repaintTimer === null) return;
  clearInterval(repaintTimer);
  repaintTimer = null;
}

function unmark(node: CanvasNode, mark: Mark): void {
  mark.el?.classList.remove(RUNNING_CLASS);
  const styles = mark.styles;
  if (styles) {
    delete styles[STROKE_KEY];
    if (mark.hadCoreRunning) styles.running = mark.coreRunning;
  }
  marks.delete(node);
}

function mark(app: CanvasApp, node: CanvasNode, id: string | number): void {
  const el = findNodeEl(id);
  el?.classList.add(RUNNING_CLASS);

  const styles = node.strokeStyles ?? null;
  const entry: Mark = { el, styles, coreRunning: undefined, hadCoreRunning: false };
  if (styles) {
    entry.hadCoreRunning = Object.prototype.hasOwnProperty.call(styles, "running");
    entry.coreRunning = styles.running;
    delete styles.running;
    styles[STROKE_KEY] = ringShape;
  }
  marks.set(node, entry);
  markedCanvas = app.canvas ?? markedCanvas;
}

/** Clear the mark from every node that carries it. */
export function stopNodeRun(): void {
  for (const [node, entry] of [...marks]) unmark(node, entry);
  stopRepaints();
  markedCanvas?.setDirty?.(true);
  markedCanvas = null;
}

/**
 * Mark exactly `nodeIds` as running — the set core reports, not a single id.
 * Nodes already marked keep their mark (and so their animation phase); the
 * rest are cleared.
 */
export function setRunningNodes(app: CanvasApp, nodeIds: readonly (string | number)[]): void {
  if (!runFxEnabled()) {
    stopNodeRun();
    return;
  }

  const wanted = new Map<CanvasNode, string | number>();
  for (const nodeId of nodeIds) {
    const { node, id } = resolveNode(app, nodeId);
    if (!node) continue;
    if (!runFxCoversEveryNode() && !isOurNode(node)) continue;
    if (!wanted.has(node)) wanted.set(node, id);
  }

  for (const [node, entry] of [...marks]) {
    if (!wanted.has(node)) unmark(node, entry);
  }
  for (const [node, id] of wanted) {
    if (!marks.has(node)) mark(app, node, id);
  }

  if (marks.size > 0) driveRepaints();
  else stopRepaints();
  (app.canvas ?? markedCanvas)?.setDirty?.(true);
  if (marks.size === 0) markedCanvas = null;
}

/** Mark `nodeId` and nothing else — the one-at-a-time path older core drives. */
export function startNodeRun(app: CanvasApp, nodeId: string | number): void {
  setRunningNodes(app, [nodeId]);
}
