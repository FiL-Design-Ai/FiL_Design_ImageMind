/**
 * Riding a panel's toolbar in the socket strip, or leaving it in flow.
 *
 * The geometry lives in `nodes2/socketBand.ts`; this is the part every panel
 * repeats around it — measure after the layout settles, re-measure when the
 * node is resized, and hand back either a set of absolute offsets or `null`.
 *
 * The block is always lifted — asked for in as many words: these controls
 * belong between the inputs and the outputs and must never drop into the panel.
 * So neither of the two measurements is a veto any more, they are adjustments.
 * Too narrow a strip scales the block down (measured in the shape it takes up
 * there, which is not the shape it has down here); too short a strip pulls it
 * up, so it still ends at the panel's first row instead of sitting on the list.
 *
 * The one case left in flow is a node with no painted strip at all — Nodes 2.0
 * lays its body out in the DOM — where `socketBandBox` hands back `null`.
 */
import { nextTick, onBeforeUnmount, onMounted, ref, type ComputedRef, type Ref } from "vue";
import { floatedBandWidth, panelEdgesInGraph, socketBandBox } from "@/nodes2/socketBand";

/** The slice of a canvas node the geometry actually reads. */
export type BandNode = Parameters<typeof socketBandBox>[0];

export function useSocketBand(
  /** The canvas node the panel belongs to — read fresh, it arrives late. */
  getNode: () => BandNode | undefined,
  /** The block that would be lifted. Its parent is taken as the panel root. */
  barEl: Ref<HTMLElement | null> | ComputedRef<HTMLElement | null>,
  options: {
    /** As wide as the block may get, however wide the node is dragged. */
    maxWidth?: number;
  } = {}
) {
  const bandStyle = ref<Record<string, string> | null>(null);
  let observer: ResizeObserver | null = null;

  function measure() {
    const node = getNode();
    if (!barEl.value || !node) return;

    // Measure the block where it sits in flow: floated, its own offsets would
    // be what the next measurement reads back.
    bandStyle.value = null;

    nextTick(() => {
      const target = barEl.value;
      const panelRoot = target?.parentElement;
      if (!target || !panelRoot) return;
      const edges = panelEdgesInGraph(panelRoot);
      if (!edges) return;

      const scale =
        (globalThis as { app?: { canvas?: { ds?: { scale: number } } } }).app?.canvas?.ds?.scale ||
        1;
      const barHeight = target.getBoundingClientRect().height / scale;
      const box = socketBandBox(node, edges, barHeight, 0, options.maxWidth ?? Infinity);
      if (!box) {
        bandStyle.value = null;
        return;
      }

      // The block belongs in the strip and stays there, whatever the node's
      // width — dropping it into the panel is the one thing it must never do.
      // A strip too narrow for it shrinks it instead: `transform` keeps the
      // layout exactly as designed, where letting flex do the shrinking eats
      // the labels one control at a time.
      const needed = floatedBandWidth(target);
      // Named for what it does, and not `scale`: that one is already taken in
      // this scope by the canvas zoom, which is a different number entirely.
      const shrink = needed > box.width ? box.width / needed : 1;

      const style: Record<string, string> = { left: `${box.left}px` };
      if (shrink < 1) {
        // A transform is applied after layout, so a scaled block still has to
        // be laid out at its own width. Left plus right plus a width is
        // over-constrained and CSS drops one of the three, so the right inset
        // gives way here — the scale is what keeps it inside the strip.
        style.width = `${Math.ceil(needed)}px`;
        style.right = "auto";
        style.transform = `scale(${shrink.toFixed(4)})`;
        style.transformOrigin = "left top";
      } else {
        style.right = `${box.right}px`;
      }

      // `box.top` is panel-local and negative for anything above the panel, so
      // this reads as "end at the panel's first row, or higher". A block taller
      // than the strip is pulled up rather than allowed to sit on the list.
      style.top = `${Math.min(box.top, -barHeight * shrink)}px`;

      bandStyle.value = style;
    });
  }

  onMounted(() => {
    measure();
    // The strip's width follows the node's, so a resize can turn a fitting
    // toolbar into one that would cover the labels — and back.
    const panelRoot = barEl.value?.parentElement;
    if (panelRoot && typeof ResizeObserver !== "undefined") {
      // Width only, and this is not an optimisation. The strip is a function of
      // the node's width; the panel's height is not part of it, and answering
      // height changes made the measurement race the panel's own content. A
      // row added to a list arrives with a 0.2s transition and, in the cycler,
      // an open dropdown, so the reading landed mid-relayout and the toolbar
      // dropped out of the strip on the first model the user added. Measuring
      // also changes the height itself — the block leaves the flow — so the
      // observer was answering its own last answer.
      //
      // `offsetWidth`, not the client rect: the canvas scales the panel with a
      // CSS transform, so the rect answers in screen pixels and every zoom step
      // would read as a resize the node never had.
      let lastWidth = panelRoot.offsetWidth;
      observer = new ResizeObserver(() => {
        const width = panelRoot.offsetWidth;
        if (width === lastWidth) return;
        lastWidth = width;
        measure();
      });
      observer.observe(panelRoot);
    }
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
    observer = null;
  });

  return { bandStyle, measure };
}
