import type { HeightModel } from "@/nodes2/host/heightModel";

/** Header/title padding in LiteGraph — title bar plus margins. */
export const LITEGRAPH_TITLE_HEIGHT = 35;

export interface SizableNode {
  graph?: { setDirtyCanvas?: (a: boolean, b: boolean) => void };
  computeSize?: () => [number, number];
  setSize?: (s: [number, number]) => void;
  size?: [number, number];
  minSize?: [number, number];
  /** LiteGraph calls this at the end of `configure()`, with the serialized node. */
  onConfigure?: (info: { size?: [number, number] | { 1?: number } }) => void;
}

export interface NodeSizeSync {
  /**
   * Reconcile the node's box with the panel's height.
   *
   * `getHeight()` is the source of truth for the widget, but LiteGraph only
   * re-layouts on its own cadence (draw loop, drag, …) — a mid-frame content
   * change (collapsible section, conditional field, locale-driven label width)
   * needs an explicit nudge or the node box visibly lags one interaction
   * behind the actual content.
   */
  sync(): void;
}

/**
 * Keep the node box and the panel height in agreement.
 *
 * In growable mode this also takes over the node's own `computeSize`/`setSize`,
 * because the two halves are one problem: the stretch the user dragged has to
 * be subtracted back out of anything LiteGraph is told, or the node can only
 * ever grow.
 */
export function createNodeSizeSync(
  node: SizableNode,
  model: HeightModel,
  opts: { growable?: boolean },
): NodeSizeSync {
  /** Set while this module writes `node.size`, so the patch below can tell its
   * own writes apart from the user's. */
  let applyingOwnSize = false;
  // False until the first pass that actually measured the panel. Until then the
  // node box is left alone: a workflow's saved height must not be overwritten
  // with the initial estimate while the async component is still resolving.
  let initialized = false;
  /**
   * The node height a saved workflow restored, or null on a node the user just
   * dropped on the canvas.
   *
   * The stretch has to be recovered from the box exactly once, on the first
   * sync — and only a restored box carries one. A fresh node's box is whatever
   * LiteGraph computed from the caller's height estimate, which is not a
   * measurement of anything and must not be charged to the user as stretch.
   */
  let configuredHeight: number | null = null;

  if (opts.growable && typeof node.computeSize === "function" && typeof node.setSize === "function") {
    const nativeComputeSize = node.computeSize.bind(node);
    const nativeSetSize = node.setSize.bind(node);
    /** Node height that exactly fits the panel's content, with no stretch. */
    const unstretchedHeight = () => Math.max(0, nativeComputeSize()[1] - model.stretch());

    // LiteGraph clamps a resize drag to `node.computeSize()`, and that number
    // includes our widget's *stretched* height — so without this the node could
    // only ever be dragged taller, never back down. Reporting the un-stretched
    // minimum makes the drag floor the panel's real content height while the
    // element itself stays as tall as the user dragged it.
    node.computeSize = () => [nativeComputeSize()[0], unstretchedHeight()];

    // Every height that doesn't come from us is somebody stating their intent:
    // the user dragging the resize handle, "Resize to fit" (`setSize(
    // computeSize())` → back to the content height), or a workflow being
    // loaded. Reading the new stretch out *here* rather than in the deferred
    // sync is what makes it stick: the canvas re-arranges the node on every
    // frame using the widget's own height, so a shrink that isn't answered
    // within the same tick is simply pushed back up on the next frame
    // (reproduced live: the node refused to be dragged shorter).
    node.setSize = (size: [number, number]) => {
      if (!applyingOwnSize) {
        model.setStretch(size[1] - unstretchedHeight());
        // The stretch has just republished the widget height, so the native
        // computation is now the node box that matches it exactly.
        size = [size[0], nativeComputeSize()[1]];
      }
      nativeSetSize(size);
    };

    // LiteGraph restores `node.size` inside `configure()` and calls this at the
    // end of it — the only announcement that a box came from a saved workflow
    // rather than from the estimate. Per-node and chained, not a prototype
    // patch: another pack's own `onConfigure` still runs.
    const priorOnConfigure = node.onConfigure?.bind(node);
    node.onConfigure = (info) => {
      const saved = (info?.size as [number, number] | undefined)?.[1];
      if (typeof saved === "number" && Number.isFinite(saved)) {
        configuredHeight = saved;
        // Whether the first sync has already run is not ours to assume: the
        // panel can be measured before `configure()` arrives (a plain
        // component, a resolved chunk) or long after (the usual async case).
        // Re-arming makes the recovery independent of that race instead of
        // silently landing on whichever came first.
        initialized = false;
      }
      priorOnConfigure?.(info);
    };
  }

  function syncPlain(): void {
    model.measure();
    if (!node.computeSize || !node.setSize || !node.size) return;
    const [currentWidth, currentHeight] = node.size;
    const [, computedHeight] = node.computeSize();
    const [minWidth, minHeight] = node.minSize ?? [0, 0];
    const targetWidth = Math.max(currentWidth, minWidth);
    // The node's total height always has to cover the DOM content plus header.
    const requiredTotalHeight = model.height() + LITEGRAPH_TITLE_HEIGHT;
    const targetHeight = Math.max(computedHeight, requiredTotalHeight, minHeight);
    if (targetWidth === currentWidth && Math.abs(targetHeight - currentHeight) < 2) return;
    node.setSize([targetWidth, targetHeight]);
    node.graph?.setDirtyCanvas?.(true, true);
  }

  function syncGrowable(): void {
    if (!model.remeasureNatural()) return;
    if (!node.computeSize || !node.setSize || !node.size) return;
    const [currentWidth, currentHeight] = node.size;
    const [minWidth, minHeight] = node.minSize ?? [0, 0];
    // Publish first, then read. `remeasureNatural()` above only updates the
    // model's own number — until the widget is told, `computeSize()` still
    // reports the height it was last given, which on the first pass is the
    // caller's estimate (`scanner.ts` guesses 580 for a panel that measures
    // 540). Reading the base off that estimate charged the difference to the
    // stretch on every workflow load: a panel dragged to +200 came back at
    // +162, then +122, shrinking towards its content one reload at a time.
    model.applyStretch();
    // `computeSize()` is patched above to report the un-stretched height, so
    // this is the node box that exactly fits the panel's own content.
    const baseHeight = Math.max(node.computeSize()[1], minHeight);
    if (!initialized) {
      // A saved workflow restores `node.size` directly (no `setSize`), so the
      // stretch the user left behind has to be read back from the box once.
      // A node the user just dropped has no stretch to recover — its box is
      // the estimate, and subtracting a measurement from an estimate would
      // invent one.
      model.setStretch(configuredHeight != null ? configuredHeight - baseHeight : 0);
      initialized = true;
    }
    // Content-driven changes land here: collapsing a section shrinks the panel
    // and, with the stretch kept as its own number, the node box gives those
    // pixels back instead of quietly widening the text fields.
    model.applyStretch();
    const targetWidth = Math.max(currentWidth, minWidth);
    const targetHeight = baseHeight + model.stretch();
    if (targetWidth === currentWidth && Math.abs(targetHeight - currentHeight) < 2) return;
    applyingOwnSize = true;
    try {
      node.setSize([targetWidth, targetHeight]);
    } finally {
      applyingOwnSize = false;
    }
    node.graph?.setDirtyCanvas?.(true, true);
  }

  return {
    sync() {
      if (opts.growable) syncGrowable();
      else syncPlain();
    },
  };
}
