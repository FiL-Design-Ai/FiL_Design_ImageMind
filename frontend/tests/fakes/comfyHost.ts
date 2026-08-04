/**
 * One stand-in for the ComfyUI the pack runs inside.
 *
 * Every defect in the frontend half of `fix.md` is the same story: the host
 * behaves one way, our code assumed another, and the test agreed with our code
 * because the test wrote the host itself. Four test files each invent their own
 * node shape, so a wrong assumption gets re-invented rather than caught.
 *
 * What follows is deliberately not a LiteGraph reimplementation. It carries
 * only the behaviours the pack has actually been burned by, and each one names
 * the commit that established it — so a reader can check the claim instead of
 * trusting the fake. Adding a behaviour here is how a lesson stops being a
 * comment and becomes something a test can fail on.
 */

export interface FakeSlot {
  name: string;
  type: string;
  link: number | null;
  /**
   * The display name a user gave this slot. Core's "Rename Slot" writes here
   * (`LGraphCanvas.ts:8840`), and the host also fills it in with the slot's own
   * name for slots nobody renamed — so `label === name` means "not renamed".
   */
  label?: string;
  /** Which input slot of the target node a link lands on; LiteGraph re-stamps it. */
  target_slot?: number;
  /** Output slots fan out — LiteGraph tracks every link id leaving them here. */
  links?: number[] | null;
}

export function slot(name: string, type = "IMAGE", link: number | null = null): FakeSlot {
  return { name, type, link };
}

export interface FakeNode {
  id: string | number;
  comfyClass: string;
  type: string;
  title?: string;
  inputs: FakeSlot[];
  outputs: FakeSlot[];
  widgets: Array<{ name: string; value: unknown }>;
  widgets_values: unknown[];
  properties: Record<string, unknown>;
  /** Mute (2) and bypass (4) live here, not in `flags` — see `3c8c888`. */
  mode: number;
  flags: Record<string, unknown>;
  graph: FakeNodeGraph;
  /** Wired by `createGraph()`; absent on a node built without one. */
  connect?: (originSlot: number, target: FakeNode, targetSlot: number) => FakeLink | null;
  /** The mirror of `connect`, the way LiteGraph's "Remove Link" behaves. */
  disconnectInput?: (slot: number) => boolean;
  size: [number, number];
  /**
   * Core's own stroke registry, seeded exactly as `LGraphNode`'s constructor
   * plus `setupStrokeStyles(this)` seed it (frontend 1.47.10): `error` and
   * `selected` from the constructor, then `running` — a flat `#0f0`, lineWidth
   * 3 — and `dragOver`. `drawNode` strokes every entry that returns a shape,
   * which is what makes this the seam a canvas-rendered highlight has to use.
   */
  strokeStyles: Record<string, (() => { color: string; lineWidth: number } | undefined) | undefined>;
  /** Top-left corner in graph coordinates. */
  pos: [number, number];
  /**
   * Where a slot sits, in graph coordinates. LiteGraph exposes these as the
   * supported way to find a connection point (`LGraphNode.ts:3501/3521`);
   * `getConnectionPos` is deprecated. The arithmetic here is a stand-in — only
   * the contract matters: a slot has a position, and it moves with the node.
   */
  getInputPos(slot: number): [number, number];
  getOutputPos(slot: number): [number, number];
  configure(serialized: Record<string, unknown>): void;
  setSize(size: [number, number]): void;
  computeSize(): [number, number];
  setDirtyCanvas(foreground?: boolean, background?: boolean): void;
  [key: string]: unknown;
}

/** A LiteGraph link: which output feeds which input. */
export interface FakeLink {
  id: number;
  origin_id: string | number;
  origin_slot: number;
  target_id: string | number;
  target_slot: number;
}

/**
 * What `node.graph` looks like from inside a node — the shape `switch.ts`
 * and `style_mixer.ts` read (`node.graph.links`, `node.graph.getNodeById`).
 * A bare node built by `createNode()` gets an isolated, empty one; call
 * `createGraph()` to share a real registry (and working `connect()`) across
 * a set of nodes instead.
 */
export interface FakeNodeGraph {
  links: Record<number, FakeLink | { target_slot?: number } | undefined>;
  getNodeById?: (id: string | number) => FakeNode | null;
  setDirtyCanvas?: (a?: boolean, b?: boolean) => void;
}

export interface FakeNodeSpec {
  id?: string | number;
  comfyClass?: string;
  /** Header text. Real nodes carry one; only code that names a node reads it. */
  title?: string;
  inputs?: FakeSlot[];
  outputs?: FakeSlot[];
  widgets?: Array<{ name: string; value: unknown }>;
  properties?: Record<string, unknown>;
  mode?: number;
}

/**
 * A node with the parts of `LGraphNode` the pack touches.
 *
 * `configure()` is the one that matters. Reloading a workflow does not mutate
 * the existing slots — it hands the node a *fresh* `inputs` array built from the
 * serialized data, carrying that workflow's links. Style Mixer lost every wire
 * on reload (`86b4c0e`) because its hidden-slot filter overwrote that array with
 * the stale copies it had parked in `_allInputs`, whose `link` was still null.
 * Slot identity therefore has to change here, or a test cannot tell the two
 * arrays apart.
 */
export function createNode(spec: FakeNodeSpec = {}): FakeNode {
  const node: FakeNode = {
    id: spec.id ?? 1,
    comfyClass: spec.comfyClass ?? "FiLStyleMixer",
    type: spec.comfyClass ?? "FiLStyleMixer",
    title: spec.title,
    inputs: spec.inputs ? spec.inputs.map((s) => ({ ...s })) : [],
    outputs: spec.outputs ? spec.outputs.map((s) => ({ ...s })) : [],
    widgets: spec.widgets ? spec.widgets.map((w) => ({ ...w })) : [],
    widgets_values: [],
    properties: { ...(spec.properties ?? {}) },
    mode: spec.mode ?? 0,
    flags: {},
    graph: { links: {} },
    size: [380, 320],
    pos: [0, 0],
    getInputPos(slot: number): [number, number] {
      return [node.pos[0], node.pos[1] + 20 + slot * 20];
    },
    getOutputPos(slot: number): [number, number] {
      return [node.pos[0] + node.size[0], node.pos[1] + 20 + slot * 20];
    },
    strokeStyles: {
      error: () => undefined,
      selected: () => undefined,
      running: () => ({ color: "#0f0", lineWidth: 3 }),
      dragOver: () => undefined,
    },

    configure(serialized: Record<string, unknown>): void {
      const inputs = serialized.inputs as FakeSlot[] | undefined;
      if (inputs) node.inputs = inputs.map((s) => ({ ...s }));
      const outputs = serialized.outputs as FakeSlot[] | undefined;
      if (outputs) node.outputs = outputs.map((s) => ({ ...s }));
      if (Array.isArray(serialized.widgets_values)) {
        node.widgets_values = [...serialized.widgets_values];
        // The frontend maps saved widget values onto the current schema by
        // position, which is what carries an old value onto a renamed widget.
        node.widgets.forEach((widget, index) => {
          if (index < node.widgets_values.length) widget.value = node.widgets_values[index];
        });
      }
      if (typeof serialized.mode === "number") node.mode = serialized.mode;
      (node.onConfigure as ((info: unknown) => void) | undefined)?.call(node, serialized);
    },

    setSize(size: [number, number]): void {
      node.size = size;
    },
    computeSize(): [number, number] {
      return [380, 320];
    },
    setDirtyCanvas(): void {},

    // The mirror of what `createGraph()`'s connect stamps: drop the link from
    // the registry, the origin output's fan-out, and the input itself — the
    // three places a link lives, as `applyLinks.ts`' restore already knows.
    disconnectInput(slot: number): boolean {
      const input = node.inputs[slot];
      if (!input || input.link == null) return false;
      const linkId = input.link;
      const link = node.graph.links?.[linkId];
      if (link && "origin_id" in link) {
        const origin = node.graph.getNodeById?.(link.origin_id);
        const outSlot = origin?.outputs?.[link.origin_slot];
        if (outSlot?.links) outSlot.links = outSlot.links.filter((id) => id !== linkId);
        delete node.graph.links[linkId];
      }
      input.link = null;
      return true;
    },
  };
  return node;
}

export interface FakeGraph {
  _nodes: FakeNode[];
  links: Record<number, FakeLink | undefined>;
  getNodeById(id: string | number): FakeNode | null;
  /** Present only on graphs built via `createSubgraphTree` — see its docstring. */
  id?: string | number;
  rootGraph?: FakeGraph;
  subgraphs?: Map<string | number, FakeGraph>;
}

/**
 * Share one graph across a set of nodes: `node.graph` points at it, and each
 * node gets a `connect()` that behaves like LiteGraph's real one — stamp a
 * fresh link id onto the target input, append it to the origin output's
 * `links`, register it in `graph.links`. Nothing in the pack created real
 * links from a test before wireless needed to simulate `applyWirelessLinks`
 * wiring the actual graph and then rolling it back.
 */
export function createGraph(nodes: FakeNode[]): FakeGraph {
  let nextLinkId = 1;
  const graph: FakeGraph = {
    _nodes: nodes,
    links: {},
    getNodeById(id) {
      return nodes.find((n) => String(n.id) === String(id)) ?? null;
    },
  };

  for (const node of nodes) {
    node.graph = graph;
    node.connect = (originSlot, target, targetSlot) => {
      const output = node.outputs[originSlot];
      const input = target.inputs[targetSlot];
      if (!output || !input) return null;
      const id = nextLinkId++;
      const link: FakeLink = {
        id,
        origin_id: node.id,
        origin_slot: originSlot,
        target_id: target.id,
        target_slot: targetSlot,
      };
      graph.links[id] = link;
      output.links = output.links ? [...output.links, id] : [id];
      input.link = id;
      return link;
    };
  }

  return graph;
}

/**
 * A root graph plus one or more subgraph definitions, wired the way real
 * LiteGraph relates them: every graph's `rootGraph` points at the same root
 * (`LGraph.ts`'s own `get rootGraph()`), and the root's `subgraphs` is a
 * `Map<id, graph>` (`get subgraphs() { return this.rootGraph._subgraphs }`) —
 * the exact shape `graphTree.ts`'s `graphsInTree` reads.
 *
 * Each graph gets its own independent `createGraph()` — its own `links`
 * registry and its own link-id counter — because that independence is the
 * point under test: a link made in one graph is never visible from another.
 */
export function createSubgraphTree(
  rootNodes: FakeNode[],
  subgraphs: Array<{ id: string | number; nodes: FakeNode[] }>,
): FakeGraph {
  const root = createGraph(rootNodes);
  root.rootGraph = root;
  root.subgraphs = new Map(
    subgraphs.map(({ id, nodes }) => {
      const sub = createGraph(nodes);
      sub.id = id;
      sub.rootGraph = root;
      return [id, sub];
    }),
  );
  return root;
}

/** What a drawing pass did, without a real 2D context — jsdom has none. */
export interface DrawRecord {
  strokes: number;
  fills: number;
  texts: string[];
  dashes: number[][];
}

/**
 * A canvas 2D context that records instead of painting.
 *
 * Only the calls the overlay makes are implemented; anything it starts using
 * later will throw here, which is the intended signal to come back and decide
 * whether the new call is worth asserting on.
 */
export function createDrawContext(): { ctx: unknown; record: DrawRecord } {
  const record: DrawRecord = { strokes: 0, fills: 0, texts: [], dashes: [] };
  const ctx = {
    font: "",
    fillStyle: "" as unknown,
    strokeStyle: "" as unknown,
    lineWidth: 0,
    save() {},
    restore() {},
    beginPath() {},
    moveTo() {},
    bezierCurveTo() {},
    roundRect() {},
    measureText: (text: string) => ({ width: text.length * 6 }),
    setLineDash(dash: number[]) {
      if (dash.length) record.dashes.push([...dash]);
    },
    stroke() {
      record.strokes += 1;
    },
    fill() {
      record.fills += 1;
    },
    fillText(text: string) {
      record.texts.push(text);
    },
  };
  return { ctx, record };
}

/** Node modes, as LiteGraph numbers them. */
export const NODE_MODE = { ALWAYS: 0, NEVER: 2, BYPASS: 4 } as const;

export interface ProgressEntry {
  id: string | number;
  state: "running" | "finished" | "error";
  /** `display_node_id`, when core resolves an expanded node to another one. */
  display?: string | number;
}

/**
 * A `progress_state` payload, built the way `comfy_execution/progress.py` does:
 * every non-pending node keyed by its execution id, each carrying `state`,
 * `node_id`, `display_node_id` and `parent_node_id`. Pending nodes are dropped
 * by the server, so they are not representable here either.
 *
 * This is the event that reports *all* running nodes at once — a live run does
 * execute several in parallel, which the one-id-at-a-time `executing` event
 * cannot express.
 */
export function progressState(entries: ProgressEntry[], promptId = "p1"): Record<string, unknown> {
  const nodes: Record<string, unknown> = {};
  for (const entry of entries) {
    const id = String(entry.id);
    const cut = id.indexOf(":");
    nodes[id] = {
      value: 0,
      max: 1,
      state: entry.state,
      node_id: id,
      prompt_id: promptId,
      display_node_id: entry.display ?? id,
      parent_node_id: cut > 0 ? id.slice(0, cut) : null,
      real_node_id: id,
    };
  }
  return { prompt_id: promptId, nodes };
}

interface FakeApi {
  addEventListener(type: string, cb: (event: Event) => void): void;
  /** Fire an event at the listeners the pack registered, the way core does. */
  emit(type: string, detail?: unknown): void;
}

export interface FakeApp {
  api: FakeApi;
  /**
   * `setDirty` and nothing else. The pack spent two releases reading
   * `canvas.nodeEls[id]`, a map core has never had — and the previous version of
   * this fake defined it, so every test agreed with the mistake. A DOM-rendered
   * node is found in the document by `[data-node-id]`; see `addNodeEl`.
   */
  canvas: {
    setDirty(foreground: boolean, background?: boolean): void;
    dirtyCount: number;
    /** The graph being drawn. LiteGraph's canvas carries its own reference, not the app's. */
    graph?: FakeGraph;
    /** Zoom, which the overlay reads to decide whether labels are legible. */
    ds: { scale: number };
    /**
     * The seam LiteGraph offers for drawing behind nodes and real connections
     * — a plain property (`LGraphCanvas.ts:637`), not a prototype method, so
     * an extension replaces it and calls whatever was there before. Null
     * until something claims it.
     */
    onDrawBackground: ((ctx: unknown, area?: unknown) => void) | null;
  };
  graph: {
    _nodes: FakeNode[];
    getNodeById(id: string | number): FakeNode | null;
    links?: Record<number, FakeLink | undefined>;
    /** Present when `options.graph` came from `createSubgraphTree` — see the constructor's own comment. */
    rootGraph?: FakeGraph;
    subgraphs?: Map<string | number, FakeGraph>;
    id?: string | number;
  };
  /**
   * Serialize the graph, as `utils/executionUtil.ts` does — reduced to the one
   * fact a test needs: which link fed which input at the moment of the call.
   * Extensions are deliberately not consulted, because core does not consult
   * them here either.
   */
  graphToPrompt(graph?: unknown): Promise<{ output: PromptEdge[] }>;
  /**
   * Queue a run the way `ComfyApp.queuePrompt` does: `await
   * this.graphToPrompt(this.graph)`. Through `this` and with the graph passed
   * explicitly — both are load-bearing (`scripts/app.ts:1666`), since that is
   * what lets an own property on the app instance shadow the method and see
   * the right graph.
   */
  queuePrompt(): Promise<{ output: PromptEdge[] }>;
  extensionManager: { setting: { get(id: string): unknown } };
  ui: { settings: { getSettingValue(id: string): unknown } };
  registerExtension(extension: Record<string, unknown>): void;
  /** Extensions the pack registered, in order. */
  extensions: Array<Record<string, unknown>>;
  /** Ids whose value was read but never registered — see `registerSetting`. */
  unregisteredSettingReads: string[];
  registerSetting(id: string, defaultValue: unknown): void;
  setSetting(id: string, value: unknown): void;
  /**
   * A node as the Vue renderer puts it in the document: a root carrying
   * `data-node-id`, with a `.lg-node-header` title bar inside it. Returns the
   * root. Only meaningful with `Comfy.VueNodes.Enabled` on — under the default
   * canvas renderer a node has no DOM at all, which is why `createNode` carries
   * `strokeStyles` for the other half of the story.
   */
  addNodeEl(id: string | number, node?: FakeNode): HTMLElement;
}

/** One `input ← link` pair as the serialized prompt records it. */
export interface PromptEdge {
  node: string | number;
  input: string;
  origin: string | number;
}

export interface FakeAppOptions {
  nodes?: FakeNode[];
  /** A graph from `createGraph()`, when the test needs `app.graph` to have real links. */
  graph?: FakeGraph;
}

/**
 * The `app` object, with the surfaces the pack reads.
 *
 * Settings are a registry, not a plain map, because that is where the pack has
 * gone wrong twice (`86b4c0e`): a setting that `allSettings.ts` never declares
 * is never registered with ComfyUI, and every read of it comes back undefined
 * no matter what the declaration beside the code says. `unregisteredSettingReads`
 * records those so a test can assert on them instead of silently taking a
 * fallback, which is exactly how the connection-toast setting stayed unreachable.
 */
export function createApp(options: FakeAppOptions = {}): FakeApp {
  const listeners = new Map<string, Array<(event: Event) => void>>();
  const registered = new Map<string, unknown>();
  const nodes = options.graph?._nodes ?? options.nodes ?? [];

  const app: FakeApp = {
    api: {
      addEventListener(type, cb) {
        const existing = listeners.get(type) ?? [];
        existing.push(cb);
        listeners.set(type, existing);
      },
      emit(type, detail) {
        for (const cb of listeners.get(type) ?? []) {
          cb(new CustomEvent(type, { detail }) as Event);
        }
      },
    },

    canvas: {
      dirtyCount: 0,
      setDirty() {
        app.canvas.dirtyCount += 1;
      },
      graph: options.graph,
      ds: { scale: 1 },
      onDrawBackground: null,
    },

    graph: {
      _nodes: nodes,
      /**
       * Reads through `this`, exactly as LiteGraph's own
       * `getNodeById(id) { return this._nodes_by_id[id] }` does. Closing over
       * `nodes` instead would let a detached `const lookup = graph.getNodeById`
       * keep working here while it throws in a browser — which is what the run
       * highlight did, and ComfyApi swallows the exception with a console
       * warning, so it stayed invisible until it was tried on a live graph.
       */
      getNodeById(this: { _nodes: FakeNode[] }, id) {
        return this._nodes.find((node) => String(node.id) === String(id)) ?? null;
      },
      links: options.graph?.links,
      // Carried over, not rebuilt: `graphsInTree` (`graphTree.ts`) resolves the
      // workflow's subgraphs through `graph.rootGraph.subgraphs`, and this
      // object is a fresh wrapper around `options.graph`'s `_nodes`/`links`,
      // not the same reference — without these, a test built on
      // `createSubgraphTree` would see `app.graph` as the only graph that
      // exists, silently dropping every subgraph.
      rootGraph: options.graph?.rootGraph,
      subgraphs: options.graph?.subgraphs,
      id: options.graph?.id,
    },

    async graphToPrompt(graph?: unknown) {
      const source = (graph as FakeGraph | undefined) ?? (app.graph as unknown as FakeGraph);
      const output: PromptEdge[] = [];
      for (const node of source._nodes ?? []) {
        for (const input of node.inputs ?? []) {
          if (input.link == null) continue;
          const link = source.links?.[input.link];
          if (link) output.push({ node: node.id, input: input.name, origin: link.origin_id });
        }
      }
      return { output };
    },

    async queuePrompt() {
      return await app.graphToPrompt(app.graph);
    },

    extensionManager: {
      setting: {
        get(id) {
          if (!registered.has(id)) {
            app.unregisteredSettingReads.push(id);
            return undefined;
          }
          return registered.get(id);
        },
      },
    },

    ui: {
      settings: {
        getSettingValue(id) {
          return app.extensionManager.setting.get(id);
        },
      },
    },

    extensions: [],
    registerExtension(extension) {
      app.extensions.push(extension);
      // Core registers each declared setting under its id, with the default
      // taken from the declaration — never from the caller's read.
      const settings = extension.settings as Array<{ id: string; defaultValue?: unknown }> | undefined;
      for (const setting of settings ?? []) app.registerSetting(setting.id, setting.defaultValue);
    },

    unregisteredSettingReads: [],
    registerSetting(id, defaultValue) {
      registered.set(id, defaultValue);
    },
    setSetting(id, value) {
      registered.set(id, value);
    },

    addNodeEl(id, node) {
      const root = document.createElement("div");
      root.dataset.nodeId = String(id);
      const header = document.createElement("div");
      header.className = "lg-node-header";
      root.appendChild(header);
      // In the document, not detached: the pack finds the node with
      // `document.querySelector`, exactly as it has to without a `nodeEls` map.
      document.body.appendChild(root);
      if (node) {
        node.id = id;
        if (!nodes.includes(node)) nodes.push(node);
      }
      return root;
    },
  };

  return app;
}

export interface FakeWidget {
  name: string;
  computeSize?: () => [number, number];
  height?: number;
}

export interface FakeWidgetNode {
  comfyClass: string;
  size: [number, number];
  minSize: [number, number];
  computeSize(): [number, number];
  setSize(size: [number, number]): void;
  /** Restore a saved box, the way LiteGraph's `configure()` does. */
  configure(serialized: { size?: [number, number] }): void;
  addDOMWidget(name: string, type: string, element: HTMLElement, options: DomWidgetOptions): FakeWidget;
  graph: { setDirtyCanvas(): void };
  /** What the last `addDOMWidget` call was given — the widget contract itself. */
  widgetOptions: DomWidgetOptions | null;
  /** Every size the host asked the node to take, in order. */
  sizes: Array<[number, number]>;
  [key: string]: unknown;
}

export interface DomWidgetOptions {
  hideOnZoom: boolean;
  getValue: () => unknown;
  setValue: (value: unknown) => void;
  getHeight: () => number;
  onDraw?: (ctx: unknown, widget: unknown) => void;
}

export interface FakeWidgetNodeSpec {
  comfyClass?: string;
  size?: [number, number];
  minSize?: [number, number];
  /** Height `computeSize()` reports before the host patches it. */
  contentHeight?: number;
  /**
   * Make the widget's `height` a getter-only accessor.
   *
   * That is what `BaseWidget` became in the ComfyUI frontend around 1.47.10:
   * assigning it throws, and the throw lands inside LiteGraph's draw loop,
   * which aborts the frame and renders every FiL node as nothing at all.
   */
  readonlyWidgetHeight?: boolean;
}

/** Title bar plus margins, the fixed part of a LiteGraph node's height. */
export const NODE_CHROME_HEIGHT = 35;

/** A node that can host a DOM widget, with the bits `addFilDomWidget` drives. */
export function createWidgetNode(spec: FakeWidgetNodeSpec = {}): FakeWidgetNode {
  const contentHeight = spec.contentHeight ?? 100;
  let widget: FakeWidget | null = null;

  const node: FakeWidgetNode = {
    comfyClass: spec.comfyClass ?? "FiLTest",
    size: spec.size ?? [200, contentHeight],
    minSize: spec.minSize ?? [100, 50],
    widgetOptions: null,
    sizes: [],

    // LiteGraph derives a node's height from its widgets, so this has to
    // follow the height the host publishes — a constant here would make the
    // growable arithmetic (which subtracts the stretch back out of this
    // number) come out somewhere it never does in the app.
    computeSize() {
      const published = widget?.computeSize?.()[1];
      return [200, NODE_CHROME_HEIGHT + (published ?? contentHeight)];
    },
    setSize(size) {
      node.sizes.push([...size] as [number, number]);
      node.size = [...size] as [number, number];
    },
    // A workflow load writes the saved box straight onto the node — no
    // `setSize`, which is why the growable host cannot see it as a resize and
    // has to recover the stretch from `onConfigure` instead. Assigning `size`
    // here without announcing it is the whole point of this method.
    configure(serialized) {
      if (serialized.size) node.size = [...serialized.size] as [number, number];
      (node.onConfigure as ((info: unknown) => void) | undefined)?.call(node, serialized);
    },
    addDOMWidget(name, _type, _element, options) {
      node.widgetOptions = options;
      widget = { name };
      if (spec.readonlyWidgetHeight) {
        Object.defineProperty(widget, "height", { get: () => 0, configurable: true });
      }
      return widget;
    },
    graph: { setDirtyCanvas() {} },
  };
  return node;
}

/** The ResizeObserver jsdom does not have, recording what got observed. */
export class FakeResizeObserver {
  static instances: FakeResizeObserver[] = [];
  observed: Element[] = [];
  disconnected = false;
  constructor(public cb: () => void) {
    FakeResizeObserver.instances.push(this);
  }
  observe(el: Element) {
    this.observed.push(el);
  }
  unobserve() {}
  disconnect() {
    this.disconnected = true;
  }
  static install(): void {
    FakeResizeObserver.instances = [];
    (globalThis as unknown as { ResizeObserver: unknown }).ResizeObserver = FakeResizeObserver;
  }
}

/**
 * Give jsdom the layout it does not have.
 *
 * jsdom lays nothing out, so every `clientHeight` and `scrollHeight` is 0 and
 * the host's measurement bails out before it computes anything. Patching the
 * prototype getters is blunt, but it is the only way to exercise the height
 * model at all — and the model is where a refactor breaks things silently.
 *
 * Returns a restore function; call it in `afterEach`.
 */
export function stubElementHeights(heights: { client: number; scroll: number }): () => void {
  // jsdom declares both on `Element.prototype`, so there is no own descriptor
  // here to put back — the restore has to delete the override instead. Getting
  // that wrong leaves the stub installed for the rest of the file, and the
  // tests after it silently measure someone else's numbers.
  const original = {
    client: Object.getOwnPropertyDescriptor(HTMLElement.prototype, "clientHeight"),
    scroll: Object.getOwnPropertyDescriptor(HTMLElement.prototype, "scrollHeight"),
  };
  Object.defineProperty(HTMLElement.prototype, "clientHeight", {
    get: () => heights.client,
    configurable: true,
  });
  Object.defineProperty(HTMLElement.prototype, "scrollHeight", {
    get: () => heights.scroll,
    configurable: true,
  });
  return () => {
    const proto = HTMLElement.prototype as unknown as Record<string, unknown>;
    if (original.client) Object.defineProperty(proto, "clientHeight", original.client);
    else delete proto.clientHeight;
    if (original.scroll) Object.defineProperty(proto, "scrollHeight", original.scroll);
    else delete proto.scrollHeight;
  };
}

/**
 * Patch a prototype method the way other node packs do.
 *
 * Read the current handler, keep it, reassign. Harmless on its own — it is
 * what makes a late-reading wrapper of ours recurse, because what they stored
 * resolves to their own function and the two call each other. cg-use-everywhere
 * killed every context menu this way (`86b4c0e`).
 */
export function patchLikeAnotherExtension(
  prototype: Record<string, unknown>,
  key: string,
  patch: (previous: ((...args: unknown[]) => unknown) | undefined, args: unknown[], self: unknown) => unknown,
): void {
  const previous = prototype[key] as ((...args: unknown[]) => unknown) | undefined;
  prototype[key] = function (this: unknown, ...args: unknown[]) {
    return patch(previous, args, this);
  };
}
