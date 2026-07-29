import type { HeightModel } from "@/nodes2/host/heightModel";

/** Header/title padding in LiteGraph — title bar plus margins. */
export const LITEGRAPH_TITLE_HEIGHT = 35;

export interface SizableNode {
  graph?: { setDirtyCanvas?: (a: boolean, b: boolean) => void };
  computeSize?: () => [number, number];
  setSize?: (s: [number, number]) => void;
  size?: [number, number];
  minSize?: [number, number];
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
    // `computeSize()` is patched above to report the un-stretched height, so
    // this is the node box that exactly fits the panel's own content.
    const baseHeight = Math.max(node.computeSize()[1], minHeight);
    if (!initialized) {
      // A saved workflow restores `node.size` directly (no `setSize`), so the
      // stretch the user left behind has to be read back from the box once.
      model.setStretch(currentHeight - baseHeight);
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
