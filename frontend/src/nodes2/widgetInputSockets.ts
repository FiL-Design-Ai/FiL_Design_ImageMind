/**
 * Make a hidden native widget's input socket usable again.
 *
 * ComfyUI 1.4x gives every widget a matching entry in `node.inputs` (the entry
 * carries a `widget` back-reference), but the slot's position comes from the
 * widget's laid-out row: `_arrangeWidgetInputSlots()` sets
 * `slot.pos = [10, widget.y + 10]`, and `getLayoutWidgets()` filters hidden
 * widgets out of the layout pass, so a hidden widget never gets a `y`. On a FiL
 * node — where the Vue panel owns the UX and every native widget is hidden —
 * all of those slots therefore collapse onto the same dead pixel at the node's
 * top edge. Verified live on frontend 1.47.10: all thirteen widget slots of
 * 🕵️ Optic Scanner reported the identical bounding rect at the node's top
 * corner, which is why dragging a STRING output onto its prompt field did
 * nothing at all.
 *
 * Assigning `widget.y` here is what gives such a slot a real row back: the
 * layout pass skips hidden widgets, so the value sticks and the next
 * `arrange()` derives the socket position from it. `alwaysVisible` asks the
 * renderer to draw the dot unconditionally — `drawSlots()` otherwise only
 * shows a widget socket while the pointer is over it or a link is attached.
 */
import { findFilWidget } from "@/nodes2/util";

/** Half of LiteGraph's `NODE_SLOT_HEIGHT` — the offset `_arrangeWidgetInputSlots` adds to `widget.y`. */
const SLOT_HALF_HEIGHT = 10;

/** Row pitch used for the fallback stacking, matching LiteGraph's slot rows. */
const SLOT_PITCH = 20;

interface SlotLike {
  name?: string;
  link?: number | null;
  alwaysVisible?: boolean;
  /** `[x, y, width, height]` in graph coordinates — LiteGraph's hit-test box. */
  boundingRect?: ArrayLike<number>;
}

interface NodeLike {
  inputs?: SlotLike[];
  _widgetSlotsDirty?: boolean;
  graph?: { setDirtyCanvas?: (a: boolean, b: boolean) => void };
}

/** A panel element the socket dot should line up with. */
export interface WidgetSocketAnchor {
  /** Native widget name (also the input slot name). */
  name: string;
  /** Element rendered for that field inside the Vue panel. */
  el: HTMLElement | null | undefined;
}

/**
 * Give each named widget input slot a visible dot and a starting row.
 *
 * Called once per node creation/configure. The rows are a fallback for the
 * frames before the panel has measured itself — `anchorWidgetInputSockets`
 * moves each dot next to its actual field as soon as it is laid out.
 */
export function exposeWidgetInputSockets(node: unknown, names: string[]): void {
  const n = node as NodeLike;
  let row = 0;
  for (const name of names) {
    const slot = n.inputs?.find((i) => i.name === name);
    if (!slot) continue;
    slot.alwaysVisible = true;
    const w = findFilWidget(node, name);
    // A stacking row per field, unconditionally: LiteGraph leaves `y` at 0 on
    // widgets it never lays out (every widget here is hidden), so testing for
    // "no y yet" would keep every socket on the node's top edge, one dot on top
    // of the next. Only a field the panel can measure gets a better row, from
    // `anchorWidgetInputSockets` — a field inside a collapsed section has no box
    // to measure and keeps the row assigned here.
    if (w) w.y = SLOT_PITCH * (row + 1);
    row += 1;
  }
  requestArrange(n);
}

/**
 * Line each socket dot up with the panel row it feeds.
 *
 * The panel is a DOM overlay above the canvas, so its fields are measured where
 * the user actually sees them and converted back into node-local pixels through
 * the canvas transform. Going through the DOM-widget's own `y` instead was
 * tried first and is not reliable: LiteGraph updates that value on its own
 * layout cadence, and a read taken between the panel resizing and the next
 * `arrange()` is stale by exactly the height that changed.
 */
export function anchorWidgetInputSockets(node: unknown, anchors: WidgetSocketAnchor[]): void {
  const view = readCanvasView();
  const nodeY = (node as { pos?: [number, number] }).pos?.[1];
  const nodeHeight = (node as { size?: [number, number] }).size?.[1];
  if (!view || nodeY == null || nodeHeight == null) return;

  let moved = false;
  for (const { name, el } of anchors) {
    if (!el) continue;
    const w = findFilWidget(node, name);
    if (!w) continue;
    const rect = el.getBoundingClientRect();
    if (rect.height === 0) continue; // collapsed section, or hidden by hideOnZoom
    const centerY = (rect.top + rect.height / 2 - view.canvasTop) / view.scale - view.offsetY - nodeY;
    if (centerY < 0 || centerY > nodeHeight) continue; // mid-relayout — keep the last row
    const y = Math.round(centerY - SLOT_HALF_HEIGHT);
    if (w.y !== y) {
      w.y = y;
      moved = true;
    }
  }
  // Also ask for one while a socket still has no hit-test box: LiteGraph resets
  // those to a zero-size rect whenever it rebuilds a node's slots, and a socket
  // without a box cannot be clicked or dropped onto.
  if (moved || hasUnmeasuredSocket(node as NodeLike, anchors)) requestArrange(node as NodeLike);
}

/** `true` for every named input that currently has a link attached. */
export function readLinkedInputs(node: unknown, names: string[]): Record<string, boolean> {
  const n = node as NodeLike;
  const linked: Record<string, boolean> = {};
  for (const name of names) {
    const slot = n.inputs?.find((i) => i.name === name);
    linked[name] = slot?.link != null;
  }
  return linked;
}

function hasUnmeasuredSocket(n: NodeLike, anchors: WidgetSocketAnchor[]): boolean {
  return anchors.some(({ name }) => {
    const rect = n.inputs?.find((i) => i.name === name)?.boundingRect;
    return !rect || !rect[2] || !rect[3];
  });
}

/** Canvas transform needed to map screen pixels back onto graph coordinates. */
function readCanvasView(): { scale: number; offsetY: number; canvasTop: number } | null {
  const canvas = (globalThis as unknown as {
    app?: { canvas?: { canvas?: HTMLCanvasElement; ds?: { scale?: number; offset?: ArrayLike<number> } } };
  }).app?.canvas;
  const el = canvas?.canvas;
  const ds = canvas?.ds;
  if (!(el instanceof HTMLCanvasElement) || !ds?.offset) return null;
  const scale = ds.scale || 1;
  return { scale, offsetY: ds.offset[1] ?? 0, canvasTop: el.getBoundingClientRect().top };
}

/**
 * Ask for a re-layout of the node's slots on the next frame.
 *
 * The canvas draw loop does `_setConcreteSlots(); arrange()` for every node
 * carrying this flag, and that order is the whole point: calling `arrange()`
 * ourselves runs the widget layout against a slot list that hasn't been
 * rebuilt, which measures no slots at all and moves the panel up under the
 * node's title (observed live on 1.47.10 — the node box also lost ~70px on
 * every such pass). Setting the flag is also the only option at creation time,
 * where the node has no graph yet and `arrange()` throws.
 */
function requestArrange(n: NodeLike): void {
  n._widgetSlotsDirty = true;
  n.graph?.setDirtyCanvas?.(true, true);
}
