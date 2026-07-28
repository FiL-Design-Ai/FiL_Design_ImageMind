/**
 * "Fix node (recreate)" that actually replaces the node.
 *
 * ComfyUI-Manager's own version (js/node_fixer.js) adds the fresh node to the
 * graph *before* copying the links, and copies them with the pre-LiteGraph-2
 * call shape `src.connect(slot, node.id, name)` — a numeric id where the engine
 * now expects the node object. The engine calls `findInputSlot` on that number,
 * throws, and the handler dies before its final `graph.remove(old)` — leaving
 * the new node stacked exactly on top of the old one. Any node with a connected
 * input reproduces it.
 *
 * This implementation reconnects by slot index, and unwinds the fresh node if
 * anything fails, so the graph never ends up holding both.
 */

interface Link {
  origin_id: number;
  origin_slot: number;
  target_id: number;
  target_slot: number;
}

interface Slot {
  name: string;
  link?: number | null;
  links?: number[] | null;
}

interface Widget {
  name: string;
  value: unknown;
  /** Combo widgets carry their legal values here. */
  options?: { values?: unknown[] };
}

interface GraphNode {
  id: number;
  type?: string;
  comfyClass?: string;
  title?: string;
  color?: string;
  bgcolor?: string;
  pos?: [number, number];
  size?: [number, number];
  flags?: Record<string, unknown>;
  properties?: Record<string, unknown>;
  widgets?: Widget[];
  inputs?: Slot[];
  outputs?: Slot[];
  graph?: Graph;
  onConfigure?: (info?: unknown) => unknown;
  computeSize?: () => [number, number];
  connect?: (slot: number, target: GraphNode, targetSlot: number) => unknown;
}

interface Graph {
  links: Record<number, Link | undefined>;
  add: (node: GraphNode) => unknown;
  remove: (node: GraphNode) => unknown;
  getNodeById: (id: number) => GraphNode | null | undefined;
}

/** Index of the slot named `name`, or -1. Replaces `findInputSlot`, which the
 * current LiteGraph no longer exposes. */
function slotIndex(slots: Slot[] | undefined, name: string): number {
  return (slots ?? []).findIndex((s) => s.name === name);
}

/**
 * Carry the old values over, but only where they still fit the rebuilt widget.
 *
 * ComfyUI-Manager's version copies no values at all, so a repaired node comes
 * back on schema defaults and the user re-enters everything. Copying blindly is
 * the opposite mistake: a node is usually recreated *because* its saved state
 * went bad (a positional `widgets_values` array shifted onto the wrong widgets
 * — see sanitizeWidgetValue in util.ts), and blind copying would carry that
 * straight into the new node. So a value has to match the widget's own type,
 * and a combo value has to still be one of its options; anything else is left
 * at the default the fresh widget already holds.
 */
function valueFits(target: Widget, value: unknown): boolean {
  if (value === null || value === undefined) return false;
  const options = target.options?.values;
  if (Array.isArray(options)) return options.includes(value as never);
  return typeof value === typeof target.value;
}

function copyWidgetValues(src: GraphNode, dest: GraphNode): void {
  const dropped: string[] = [];
  for (const w of src.widgets ?? []) {
    const target = (dest.widgets ?? []).find((x) => x.name === w.name);
    if (!target) continue;
    if (valueFits(target, w.value)) target.value = w.value;
    else dropped.push(w.name);
  }
  if (dropped.length) {
    console.info(
      `[FiL_Design_ImageMind] recreate: kept defaults for ${dropped.join(", ")} — ` +
      "the saved value no longer fits the widget.",
    );
  }
  // Our DOM-widget nodes mirror the hidden native widgets into their own
  // reactive state on configure; without this the panel would show schema
  // defaults while the widgets underneath hold the copied values.
  dest.onConfigure?.({});
}

function reconnectInputs(src: GraphNode, dest: GraphNode, graph: Graph): void {
  for (const input of src.inputs ?? []) {
    if (input.link == null) continue;
    const link = graph.links[input.link];
    if (!link) continue;
    const origin = graph.getNodeById(link.origin_id);
    const destSlot = slotIndex(dest.inputs, input.name);
    // A renamed or dropped input simply loses its wire — better than throwing
    // and leaving the caller to clean up two nodes.
    if (!origin?.connect || destSlot < 0) continue;
    origin.connect(link.origin_slot, dest, destSlot);
  }
}

function reconnectOutputs(src: GraphNode, dest: GraphNode, graph: Graph): void {
  for (const output of src.outputs ?? []) {
    const destSlot = slotIndex(dest.outputs, output.name);
    if (destSlot < 0 || !dest.connect) continue;
    // Snapshot: connecting rewrites the link tables we are iterating.
    const links = [...(output.links ?? [])]
      .map((id) => graph.links[id])
      .filter((l): l is Link => Boolean(l));
    for (const link of links) {
      const target = graph.getNodeById(link.target_id);
      if (!target) continue;
      dest.connect(destSlot, target, link.target_slot);
    }
  }
}

/**
 * Replace `node` with a freshly created one of the same type, carrying over
 * widget values, links and appearance. Returns the new node, or null when the
 * node was left untouched (nothing is added to the graph in that case).
 */
export function recreateNode(node: GraphNode, litegraph?: unknown): GraphNode | null {
  const graph = node.graph;
  const lg = (litegraph ?? (globalThis as { LiteGraph?: unknown }).LiteGraph) as
    | { createNode?: (type: string) => GraphNode | null }
    | undefined;
  const type = node.comfyClass ?? node.type;
  if (!graph || !lg?.createNode || !type) return null;

  const fresh = lg.createNode(type);
  if (!fresh) return null;

  fresh.pos = [...(node.pos ?? [0, 0])] as [number, number];
  if (node.title !== undefined) fresh.title = node.title;
  if (node.color !== undefined) fresh.color = node.color;
  if (node.bgcolor !== undefined) fresh.bgcolor = node.bgcolor;
  if (node.flags) fresh.flags = { ...node.flags };
  if (node.properties) fresh.properties = { ...node.properties };

  graph.add(fresh);
  try {
    copyWidgetValues(node, fresh);
    reconnectInputs(node, fresh, graph);
    reconnectOutputs(node, fresh, graph);
  } catch (err) {
    // The whole point: never leave a duplicate behind.
    graph.remove(fresh);
    console.error("[FiL_Design_ImageMind] node recreate failed — graph left unchanged:", err);
    return null;
  }

  // Keep the old footprint only where it still fits the rebuilt panel; a node
  // whose widget count changed (the reason to recreate it) needs its own size.
  const minimum = fresh.computeSize?.() ?? [0, 0];
  const previous = node.size ?? minimum;
  fresh.size = [Math.max(previous[0], minimum[0]), Math.max(previous[1], minimum[1])];

  graph.remove(node);
  return fresh;
}

/**
 * Point ComfyUI-Manager's "Fix node (recreate)" entry at `recreateNode` when it
 * appears in one of our nodes' context menus. Leaves every other entry alone.
 */
export function patchRecreateMenuItem(node: GraphNode, options: unknown[]): void {
  for (const option of options) {
    const item = option as { content?: string; callback?: unknown; _filPatched?: boolean } | null;
    if (!item || item._filPatched) continue;
    if (typeof item.content !== "string" || !item.content.startsWith("Fix node")) continue;
    item._filPatched = true;
    item.callback = () => {
      const fresh = recreateNode(node);
      const app = (globalThis as { app?: { canvas?: { setDirty?: (a: boolean, b: boolean) => void } } }).app;
      if (fresh) requestAnimationFrame(() => app?.canvas?.setDirty?.(true, true));
    };
  }
}
