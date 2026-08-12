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
import { reactive } from "vue";
import { findFilWidget } from "@/nodes2/util";

/** Half of LiteGraph's `NODE_SLOT_HEIGHT` — the offset `_arrangeWidgetInputSlots` adds to `widget.y`. */
const SLOT_HALF_HEIGHT = 10;

/** Row pitch used for the fallback stacking, matching LiteGraph's slot rows. */
const SLOT_PITCH = 20;

interface SlotLike {
  name?: string;
  link?: number | null;
  alwaysVisible?: boolean;
  /** Set by ComfyUI on the slot it mirrors a widget with; absent on real inputs. */
  widget?: unknown;
  /** `[x, y, width, height]` in graph coordinates — LiteGraph's hit-test box. */
  boundingRect?: ArrayLike<number>;
  _filLabelledByPanel?: boolean;
}

interface NodeLike {
  inputs?: SlotLike[];
  size?: [number, number];
  _widgetSlotsDirty?: boolean;
  graph?: { setDirtyCanvas?: (a: boolean, b: boolean) => void };
}

/**
 * Draw the name beside a re-exposed widget-input dot.
 *
 * `NodeSlot.ts`'s own `draw()` never does this: `hideLabel = lowQuality ||
 * this.isWidgetInputSlot` is unconditional — a widget-mirror slot is normally
 * drawn right next to the WIDGET, which already shows the name, so the slot's
 * own label would be a duplicate. That assumption breaks here: the widget it
 * would sit beside is exactly what `keepVueSocketRow` hides, since the Vue
 * panel owns that field instead. The result, verified live: an unlabelled
 * dot floating with nothing next to it — for every field named in
 * `exposeWidgetInputSockets`, on every node that calls it (12 node modules).
 * `styles/vueNodeSkin.ts` already fixes the identical gap for the Vue
 * renderer, in CSS (`SOCKET_ROW_CSS`) — there is no DOM here to style, so the
 * canvas side has to paint the text itself.
 *
 * Composes with whatever a node already hooked there — `nodeStyle.ts`'s own
 * frame drawing for Cyber Punch HUD / Pipboy runs through the exact same
 * hook — rather than replacing it outright.
 *
 * Patched per INSTANCE, not on the prototype `registerStyledNode` patches.
 * Tried the prototype first and it silently never fired: verified live that
 * `node.onDrawForeground` is an *own* property on every FiL node instance
 * (`Object.prototype.hasOwnProperty` true), not inherited — the host's own
 * V3 node construction copies it onto each instance, the same shadowing trap
 * `nodeStyle.ts` already documents for `color`/`bgcolor`. A prototype-level
 * patch is invisible once that own copy exists; wrapping the instance's
 * current function (already the frame-theme version, since that prototype
 * patch runs once at module registration, before any instance exists) is
 * what LiteGraph actually calls.
 */
function installMissingSocketLabels(node: unknown): void {
  const n = node as { _filSocketLabelsInstalled?: boolean; onDrawForeground?: (...a: unknown[]) => unknown };
  if (n._filSocketLabelsInstalled) return;
  n._filSocketLabelsInstalled = true;

  const original = n.onDrawForeground;
  n.onDrawForeground = function (this: { flags?: { collapsed?: boolean }; inputs?: SlotLike[] }, ...args: unknown[]) {
    const result = original?.apply(this, args);
    const ctx = args[0] as CanvasRenderingContext2D | undefined;
    const lowQuality = Boolean((globalThis as { app?: { canvas?: { low_quality?: boolean } } }).app?.canvas?.low_quality);
    if (!ctx || lowQuality || this.flags?.collapsed) return result;

    const liteGraph = (globalThis as { LiteGraph?: { NODE_SUBTEXT_SIZE?: number; NODE_TEXT_SIZE?: number; NODE_FONT?: string; NODE_TEXT_COLOR?: string } }).LiteGraph;
    ctx.save();
    ctx.font = `${liteGraph?.NODE_SUBTEXT_SIZE ?? 11}px ${liteGraph?.NODE_FONT ?? "Arial"}`;
    ctx.fillStyle = liteGraph?.NODE_TEXT_COLOR ?? "#AAA";
    ctx.textAlign = "left";
    for (const slot of this.inputs ?? []) {
      if (!slot.widget || !slot.alwaysVisible || !slot.name) continue;
      // The panel already names this one beside its own field — see the flag's
      // docstring for what painting it twice looked like.
      if (slot._filLabelledByPanel) continue;
      // `widget.y` is the same local-space value `exposeWidgetInputSockets` /
      // `anchorWidgetInputSockets` write and read back a few lines up —
      // reusing it here (rather than `slot.boundingRect`, whose coordinate
      // space this file never establishes) guarantees the text lands in the
      // same frame the dot itself is positioned in.
      const w = findFilWidget(this, slot.name) as { y?: number } | null;
      if (!w || typeof w.y !== "number") continue;
      const text = (slot as { label?: string; localized_name?: string }).label
        || (slot as { localized_name?: string }).localized_name
        || slot.name;
      // Mirrors NodeSlot.ts's own default label position for
      // LabelPosition.Right (`pos[0] + 10, pos[1] + 5`), with `pos` per this
      // module's documented `[10, widget.y + 10]`.
      ctx.fillText(text, 20, w.y + SLOT_HALF_HEIGHT + 5);
    }
    ctx.restore();
    return result;
  };
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
 *
 * Under the Vue renderer none of that arithmetic applies — a node is DOM, not
 * pixels — but the same list decides the same thing, so `keepVueSocketRow`
 * below is driven from here rather than from a second list somewhere else.
 */
export function exposeWidgetInputSockets(node: unknown, names: string[]): void {
  const n = node as NodeLike;
  installMissingSocketLabels(node);
  for (const name of names) keepVueSocketRow(node, name);
  // Start the stack below the node's real inputs. It used to start at row 1,
  // which put every fallback dot *inside* the real input column: on 🔍 Upscaler
  // Simple the three fallback rows landed on `upscale_model`, on `latent`, and
  // one row under it, so the only one the user could see read as a stray
  // unlabelled socket — and the two hidden ones shared a hit box with a real
  // input. Rows are `widget.y + 10` against `i * 20 + 10` for input `i`, so
  // starting at the real-input count is the first row that cannot collide.
  const firstFreeRow = countRealInputs(n);
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
    if (w) w.y = SLOT_PITCH * (firstFreeRow + row);
    row += 1;
  }
  // Widget-mirror inputs the panel does not turn into sockets still collapse
  // onto the node's top edge (their widgets never lay out), and the host's
  // drawSlots() reveals any widget socket the pointer is over — live, hovering
  // the top input painted ghost dots over it and the title bar. Park the
  // leftovers below the node's bottom edge instead: the hover hit-test never
  // lands there by accident, and a wire loaded from an old workflow still
  // finds its dot. anchorWidgetInputSockets keeps them parked as the node
  // grows; the height at creation is just the first guess.
  parkSocketsBelow(node, n, names, [], n.size?.[1] ?? 0);
  requestArrange(n);
}

/**
 * Move widget-mirror slots that currently show no dot below the node.
 *
 * `managed` names the slots the panel owns; `hidden` the subset of them whose
 * field is not rendered right now (collapsed section) — both them and the
 * unmanaged leftovers would otherwise sit hover-revealable at a row inside
 * the node body.
 */
function parkSocketsBelow(node: unknown, n: NodeLike, managed: string[], hidden: string[], nodeHeight: number): boolean {
  let moved = false;
  let parked = 0;
  for (const slot of n.inputs ?? []) {
    const name = slot.name ?? "";
    if (!slot.widget || (managed.includes(name) && !hidden.includes(name))) continue;
    slot.alwaysVisible = false;
    const w = findFilWidget(node, name);
    const y = nodeHeight + SLOT_PITCH * (parked + 1);
    if (w && w.y !== y) {
      w.y = y;
      moved = true;
    }
    parked += 1;
  }
  return moved;
}

/**
 * Keep one field's row alive for ComfyUI's Vue renderer, so its input can still
 * be wired up.
 *
 * Under Nodes 2.0 a widget-backed input has exactly one connection dot and it
 * lives inside that widget's own row (`vueNodes/components/NodeWidgets.vue`,
 * rendered under `v-if="widget.visible"`). Slots the node draws separately come
 * from `nonWidgetedInputs`, which skips anything carrying a `widget`
 * back-reference, and the linked-widget dots beside them are only rendered for
 * the collapsed node. So a field the panel replaces — hidden from the renderer
 * like every other one — has no dot anywhere and no wire can ever reach it:
 * verified on comfyui_frontend_package 1.48.7 by dragging a STRING output onto
 * 🎬 Cinema Rig's body, which resolves through `findInputByType` but then wants
 * a registered slot layout and finds none.
 *
 * The fix is to let the host keep drawing the row and take the field's own
 * control back out of it in CSS (`styles/vueNodeSkin.ts`), leaving a labelled
 * socket — the shape ComfyUI's own "convert widget to input" used to have. That
 * is why this clears `options.hidden` while leaving `widget.hidden` set: the
 * canvas renderer must go on hiding the field, because there the panel's own
 * dots (the rows above) are what the user connects to.
 *
 * `hideInPanel` keeps the re-exposed field out of the right-side properties
 * panel, where it would otherwise show up as a second copy of a control the
 * panel already owns.
 *
 * `advanced` goes for a related reason. ComfyUI sets it from the node schema
 * and the Vue renderer hides such a widget behind the "Always show advanced
 * widgets" setting — which on 🕵️ Optic Scanner left `negative_prompt` and
 * `custom_style` with no socket while `prompt` had one, an arbitrary split from
 * the user's side. The flag is about whether a *control* clutters the node; the
 * control is exactly what the CSS takes away here, and the panel shows the
 * field itself either way. The canvas renderer exposes all three sockets
 * unconditionally, so clearing it is also what keeps the two renderers saying
 * the same thing.
 */
function keepVueSocketRow(node: unknown, name: string): void {
  const w = findFilWidget(node, name);
  if (!w) return;
  if (!w.options) w.options = {};
  w.options.hidden = false;
  w.options.advanced = false;
  w.options.hideInPanel = true;
}

/** Inputs LiteGraph lays out itself — every slot that is not a widget mirror. */
function countRealInputs(n: NodeLike): number {
  return (n.inputs ?? []).filter((i) => !i.widget).length;
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
  const hidden: string[] = [];
  for (const { name, el } of anchors) {
    if (!el) {
      // No element at all means the panel is not rendering that field: a
      // collapsed section, or a socket-only input like Color Wizard's
      // `saturate`. There is nothing on screen for the dot to sit beside, so it
      // would keep its fallback row and read as an orphan. Stop drawing it
      // unconditionally — LiteGraph still draws a socket that has a link, and
      // opening the section brings the dot back with its field.
      //
      // Deliberately keyed off the element being *absent*, not off a zero-size
      // rect: rects go to zero for a frame during any relayout, and hiding on
      // that would make every dot flicker.
      setAlwaysVisible(node as NodeLike, name, false);
      setLabelledByPanel(node as NodeLike, name, false);
      hidden.push(name);
      continue;
    }
    setAlwaysVisible(node as NodeLike, name, true);
    setLabelledByPanel(node as NodeLike, name, true);
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
  // The node grows and shrinks as the panel relayouts, so the park row
  // assigned at creation can end up inside the body — hover-revealed ghost
  // dots over the panel, the same wart at a new address. Keep every dot-less
  // widget socket (unmanaged leftovers plus currently hidden managed ones)
  // below the current bottom edge.
  if (parkSocketsBelow(node, node as NodeLike, anchors.map((a) => a.name), hidden, nodeHeight)) moved = true;
  // Also ask for one while a socket still has no hit-test box: LiteGraph resets
  // those to a zero-size rect whenever it rebuilds a node's slots, and a socket
  // without a box cannot be clicked or dropped onto.
  // Only the dots that are actually drawn: one we just hid has no hit box by
  // design, and counting it here would ask for a re-layout on every sync.
  const shown = anchors.filter((a) => a.el);
  if (moved || hasUnmeasuredSocket(node as NodeLike, shown)) requestArrange(node as NodeLike);
}

/** `true` for every named input that currently has a link attached. */
/**
 * Keep a node's widget sockets in step with the graph.
 *
 * Wires up `onConnectionsChange` once per node type: re-exposes the sockets and
 * bumps `ui.linkVersion` on the panel state. Connecting a wire changes nothing
 * in the panel's DOM, so the observers in `useWidgetSockets` cannot see it —
 * this counter is the signal they watch.
 *
 * @param stateKey property the node module parks its panel state on
 *                 (`_filHiResFixState`, …).
 */
export function installWidgetSocketSync(prototype: unknown, names: string[], stateKey: string): void {
  const p = prototype as { onConnectionsChange?: (...a: unknown[]) => unknown };
  const original = p.onConnectionsChange;
  p.onConnectionsChange = function (this: unknown, ...args: unknown[]) {
    const result = original?.apply(this, args);
    exposeWidgetInputSockets(this, names);
    const state = (this as Record<string, unknown>)[stateKey] as { ui?: Record<string, unknown> } | undefined;
    // Through `reactive()`, not the raw object the node module parked here.
    // `addFilDomWidget` mounts the panel against `reactive(state)`, and a write
    // to the RAW target fires no proxy trap — the value changes and nothing that
    // watches it ever hears. The counter looked like it worked (reading it back
    // through the proxy shows the new number) while every watcher stayed silent,
    // so a field driven by a link kept looking editable until something else
    // happened to re-render the panel. Caught by the smoke suite against a real
    // LiteGraph; the component suite could not see it, because its hand-made
    // state is reactive from the start.
    //
    // `reactive()` caches per target, so this is the SAME proxy the panel holds.
    if (state?.ui) {
      const live = reactive(state) as { ui: Record<string, unknown> };
      live.ui.linkVersion = ((live.ui.linkVersion as number) ?? 0) + 1;
    }
    return result;
  };
}

import { subscribedChannel } from "@/nodes2/wireless/subscriptions";
import { livePlan } from "@/nodes2/wireless/livePlan";
import type { WirelessNode, WirelessGraph } from "@/nodes2/wireless/types";

export function readLinkedInputs(node: unknown, names: string[]): Record<string, boolean> {
  const n = node as NodeLike & WirelessNode;
  const linked: Record<string, boolean> = {};

  let wirelessLinks: Set<number> | null = null;
  if (n.id != null && n.graph) {
    try {
      const plan = livePlan(n.graph as WirelessGraph);
      const targetId = String(n.id);
      wirelessLinks = new Set<number>();
      for (const link of plan.resolution.links) {
        if (String(link.target_id) === targetId) {
          wirelessLinks.add(link.target_slot);
        }
      }
    } catch {
      wirelessLinks = null;
    }
  }

  for (const name of names) {
    const slotIndex = n.inputs?.findIndex((i) => i.name === name) ?? -1;
    const slot = slotIndex >= 0 ? n.inputs?.[slotIndex] : undefined;
    const hasPhysicalLink = slot?.link != null;
    const hasExplicitSub = Boolean(subscribedChannel(n, name));
    const hasWirelessLink = Boolean(slotIndex >= 0 && wirelessLinks?.has(slotIndex));

    linked[name] = hasPhysicalLink || hasExplicitSub || hasWirelessLink;
  }
  return linked;
}

function setAlwaysVisible(n: NodeLike, name: string, visible: boolean): void {
  const slot = n.inputs?.find((i) => i.name === name);
  if (slot) slot.alwaysVisible = visible;
}

function setLabelledByPanel(n: NodeLike, name: string, labelled: boolean): void {
  const slot = n.inputs?.find((i) => i.name === name);
  if (slot) slot._filLabelledByPanel = labelled;
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

/**
 * Safely detaches a physical wire connected to a widget slot, showing an Undo toast.
 * Pixaroma pattern: allows switching mode/channel without losing the original wire.
 */
export function takeOverWiredInput(node: unknown, inputName: string): boolean {
  const n = node as {
    inputs?: Array<{ name: string; link?: number | null }>;
    disconnectInput?: (slot: number) => void;
    graph?: {
      links?: Record<number, { origin_id: number; origin_slot: number }>;
      getNodeById?: (id: number) => { connect?: (slot: number, targetNode: unknown, targetSlot: number) => void } | null;
    };
  };

  if (!n?.inputs || typeof n.disconnectInput !== "function") return false;
  const slotIdx = n.inputs.findIndex((i) => i.name === inputName);
  if (slotIdx === -1) return false;

  const slot = n.inputs[slotIdx];
  const linkId = slot?.link;
  if (linkId == null) return false;

  const link = n.graph?.links?.[linkId];
  if (!link) return false;

  const originId = link.origin_id;
  const originSlot = link.origin_slot;

  n.disconnectInput(slotIdx);

  // Dynamically import useToastStore to prevent circular module dependencies
  import("@/stores/toastStore").then(({ useToastStore }) => {
    useToastStore().info(`Disconnected wire on "${inputName}"`, {
      action: {
        label: "↺ Undo",
        onClick: () => {
          const originNode = n.graph?.getNodeById?.(originId);
          if (originNode && typeof originNode.connect === "function") {
            originNode.connect(originSlot, n, slotIdx);
          }
        },
      },
      timeout: 5000,
    });
  }).catch(() => {
    // fallback if store is not available
  });

  return true;
}

