/**
 * The empty strip between a node's input and output labels, in panel pixels.
 *
 * A canvas node reserves a row per socket, and on a node with few sockets and
 * short names most of that strip is painted and then left blank. A panel
 * control lifted into it costs zero node height — the trick Pixaroma's LoRA
 * loader uses (`js/lora_loader/render.mjs`), where the offsets are three
 * hand-tuned constants and the comment beside them warns that adding a socket
 * silently drifts the band onto the labels.
 *
 * Nothing here is tuned. The reserves come from the node's own slot positions
 * and from measuring its labels in LiteGraph's own font, so a schema that
 * grows an output moves the band instead of colliding with it — and when the
 * strip turns out too narrow to be worth using, `null` says so and the caller
 * lays the control out normally.
 */

import { isVueNodes } from "@/nodes2/nodes2Adapters";

/** Gap between a socket's label and whatever we park next to it. */
const LABEL_PAD = 8;
/**
 * How far a slot's label sits from its dot, in the host's own drawing.
 *
 * `LGraphNode.drawSlots` paints an input's text at x = 20 with the dot at 10,
 * and mirrors that on the outputs. Measuring the reserve from the dot instead
 * of from the text put the block 10px closer to the inputs than to the outputs,
 * which is what the owner was looking at.
 */
const LABEL_INSET = 10;
/** Below this there is no room worth floating a control into. */
const MIN_USABLE_WIDTH = 120;

interface Slot {
  name?: string;
  /** Widget-backed inputs report the same position as the first real slot. */
  widget?: unknown;
}

interface BandNode {
  pos?: [number, number];
  size?: [number, number];
  inputs?: Slot[];
  outputs?: Slot[];
  getConnectionPos?: (isInput: boolean, slot: number) => [number, number];
}

export interface BandBox {
  /** Panel-local offsets, ready for `position: absolute`. */
  top: number;
  left: number;
  right: number;
  /** How wide the strip actually is, for the caller to sanity-check. */
  width: number;
}

/**
 * The panel's own edges in graph coordinates.
 *
 * The host positions our element, so the only honest way to know where it
 * landed is to read it back and undo the canvas transform.
 */
export function panelEdgesInGraph(
  element: HTMLElement,
): { top: number; left: number; right: number } | null {
  const canvas = (
    globalThis as {
      app?: { canvas?: { canvas?: HTMLCanvasElement; ds?: { scale: number; offset: [number, number] } } };
    }
  ).app?.canvas;
  const surface = canvas?.canvas;
  const ds = canvas?.ds;
  if (!surface || !ds || !ds.scale) return null;

  const surfaceRect = surface.getBoundingClientRect();
  const rect = element.getBoundingClientRect();
  if (!rect.width) return null;

  const toGraphX = (clientX: number): number =>
    (clientX - surfaceRect.left) / ds.scale - ds.offset[0];
  const toGraphY = (clientY: number): number =>
    (clientY - surfaceRect.top) / ds.scale - ds.offset[1];

  return { top: toGraphY(rect.top), left: toGraphX(rect.left), right: toGraphX(rect.right) };
}

/** The class a panel puts on its toolbar once the block is lifted. */
const FLOATED_CLASS = "floated";
/** Set on the block only while it is being measured — see `floatedBandWidth`. */
const MEASURE_ATTR = "data-band-measure";

/**
 * How wide the block wants to be, in graph pixels — the number to compare a
 * strip against.
 *
 * Two things make the obvious answer wrong, and both were paid for. Reading
 * `scrollWidth` answers with the container's own width, because the lines
 * stretch, so a block needing 360 measured 360 at every width and the check
 * never fired; `max-content` is what makes the flex children fall back to their
 * content. And the block is styled differently once it is floated — bigger type
 * and tighter boxes, so that one strip reads as one size — which means
 * measuring it in flow understates what it will need up there. The cycler's
 * toolbar measured 253 in its in-flow 9px type, floated into a 223px strip, and
 * drew its add button on two lines. So it is measured wearing the class it will
 * be wearing.
 *
 * No zoom correction here, and that matters: the canvas scales the panel with a
 * CSS transform, which moves `getBoundingClientRect` but leaves `offsetWidth`
 * in layout pixels — already the units the node's own geometry is in. Dividing
 * it by the scale, as the first version did, halved the answer at 2× zoom and
 * lifted a 326px block into a 223px strip.
 */
export function floatedBandWidth(element: HTMLElement): number {
  const alreadyFloated = element.classList.contains(FLOATED_CLASS);
  element.classList.add(FLOATED_CLASS);
  // A panel whose boxes stretch can also say how far each of them will give
  // way: `[data-band-measure]` pins them to those floors, so `max-content`
  // reads the squeezed block rather than the roomy one. Panels without such
  // rules are unaffected.
  element.setAttribute(MEASURE_ATTR, "");
  const previousWidth = element.style.width;
  element.style.width = "max-content";
  const needed = element.offsetWidth;
  element.style.width = previousWidth;
  element.removeAttribute(MEASURE_ATTR);
  if (!alreadyFloated) element.classList.remove(FLOATED_CLASS);
  return needed;
}

/**
 * Text width in the font LiteGraph paints slot labels with.
 *
 * `innerFontStyle` — `normal 12px`, from `NODE_SUBTEXT_SIZE` — and not the 14px
 * `NODE_TEXT_SIZE`, which is the node's title. Measuring at 14 overstated every
 * reserve by a sixth, and on a long name like `model_name` that was 12px of
 * strip handed back for nothing: the block stopped short of the outputs while
 * sitting hard against the inputs.
 */
function labelWidth(text: string): number {
  const lg = (globalThis as { LiteGraph?: { NODE_SUBTEXT_SIZE?: number; NODE_FONT?: string } })
    .LiteGraph;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return text.length * 7;
  ctx.font = `normal ${lg?.NODE_SUBTEXT_SIZE ?? 12}px ${lg?.NODE_FONT ?? "Arial"}`;
  return Math.ceil(ctx.measureText(text).width);
}

function slotY(node: BandNode, isInput: boolean, index: number): number | null {
  const pos = node.getConnectionPos?.(isInput, index);
  return pos ? pos[1] : null;
}

/**
 * Where a control of `height` px can sit inside the socket strip.
 *
 * `panelTop` and `panelLeft`/`panelRight` are the panel's own edges in graph
 * coordinates — the caller measures them, because only it knows where the host
 * put its element.
 */
export function socketBandBox(
  node: BandNode,
  panel: { top: number; left: number; right: number },
  height: number,
  /** Which socket row to start from — a second control goes below the first. */
  startRow = 0,
  /**
   * As wide as the block is allowed to get, however much strip there is.
   *
   * A toolbar handed the whole strip on a wide node stretches its boxes to
   * match, and the same three controls read as a different panel at every node
   * width. Capping it keeps one shape; the strip's own edges still win, so the
   * block stays between the two label columns either way.
   */
  maxWidth = Infinity,
): BandBox | null {
  // Nodes 2.0 lays the body out in the DOM, where there is no painted strip to
  // borrow and a negative offset lands on the node's own chrome.
  if (isVueNodes()) return null;
  if (!node?.getConnectionPos || !node.pos || !node.size) return null;

  const outputs = node.outputs ?? [];
  if (!outputs.length) return null;

  const firstRow = slotY(node, false, 0);
  if (firstRow == null) return null;

  const slotHeight =
    (globalThis as { LiteGraph?: { NODE_SLOT_HEIGHT?: number } }).LiteGraph?.NODE_SLOT_HEIGHT ?? 20;
  // Rows past the last socket are not part of the strip: below it the panel's
  // own content begins, and a control placed there would sit on top of it.
  if (startRow > 0 && startRow >= outputs.length) return null;
  const rowTop = firstRow - slotHeight / 2 + startRow * slotHeight;
  const boxTop = rowTop + Math.max(0, (slotHeight - height) / 2);
  const boxBottom = boxTop + height;

  // Only the labels the control actually runs alongside have to be cleared:
  // on a node with two inputs and four outputs the lower rows are free on the
  // left, and reserving for every label would throw that width away.
  const overlaps = (rowCentre: number): boolean =>
    rowCentre + slotHeight / 2 > boxTop && rowCentre - slotHeight / 2 < boxBottom;

  let leftReserve = 0;
  const inputs = (node.inputs ?? []).filter((slot) => !slot.widget);
  inputs.forEach((slot, index) => {
    const y = slotY(node, true, index);
    if (y == null || !overlaps(y)) return;
    leftReserve = Math.max(leftReserve, labelWidth(slot.name ?? ""));
  });

  let rightReserve = 0;
  outputs.forEach((slot, index) => {
    const y = slotY(node, false, index);
    if (y == null || !overlaps(y)) return;
    rightReserve = Math.max(rightReserve, labelWidth(slot.name ?? ""));
  });

  const dotLeft = slotY(node, true, 0) != null ? node.pos[0] + 10 : node.pos[0];
  const dotRight = node.pos[0] + node.size[0] - 10;

  // Measured from where the text actually starts, not from the dot.
  const left = dotLeft + LABEL_INSET + leftReserve + LABEL_PAD - panel.left;
  const available =
    panel.right -
    panel.left -
    left -
    (panel.right - (dotRight - LABEL_INSET - rightReserve - LABEL_PAD));
  const width = Math.min(available, maxWidth);

  if (width < MIN_USABLE_WIDTH) return null;

  // Whatever the cap leaves over is split between the two sides instead of
  // being handed to one of them. It all went to the right inset before, so the
  // block sat hard against the input labels with the whole surplus opened up on
  // the output side — reported from a live node, and the wider the node, the
  // more lopsided it got. Centred in the strip, the two gaps stay equal at
  // every width.
  //
  // The cap is still spent on the insets rather than on a width of its own: a
  // box given left, right and a width is over-constrained, CSS drops one of
  // them, and which one it drops is not the answer anybody wanted.
  //
  // Rounded in that order, so the three numbers still agree: the browser lays
  // the block out as panel − left − right, and rounding each of the three
  // independently would leave that a pixel off the width reported here.
  const slack = Math.max(0, available - width);
  const roundedLeft = Math.round(Math.max(0, left + slack / 2));
  const roundedWidth = Math.round(width);
  const roundedRight = Math.max(
    0,
    Math.round(panel.right - panel.left) - roundedLeft - roundedWidth,
  );

  return {
    top: Math.round(boxTop - panel.top),
    left: roundedLeft,
    right: roundedRight,
    width: roundedWidth,
  };
}
