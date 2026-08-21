/**
 * Minimal ComfyUI `app` API surface used by FiL_Design_ImageMind.
 * Mirrors the methods we rely on in the legacy web/fil_design_imagemind.js entrypoint.
 * Intentionally narrow so we do not silently consume undocumented methods.
 */
export interface ComfyNodeData {
  name: string;
  category?: string;
  display_name?: string;
  input?: {
    required?: Record<string, ComfyInputSpec>;
    optional?: Record<string, ComfyInputSpec>;
    hidden?: Record<string, ComfyInputSpec>;
  };
  output?: string[];
  output_name?: string[];
}

export type ComfyInputSpec =
  | [string, Record<string, unknown>]
  | [string[]]
  | [string, Record<string, unknown>];

export interface ComfyExtensionSettings {
  id: string;
  name: string;
  type: unknown;
  defaultValue?: unknown;
  tooltip?: string;
  /** Path in the Settings panel tree (per advanced guide §13.2). */
  category?: string[];
  /** Optional combo options when `type === "combo"`. */
  options?: string[];
  /** Extra props forwarded to the PrimeVue/ComfyUI setting component. */
  attrs?: Record<string, unknown>;
  /** Triggered when the user changes the value in the Settings panel. */
  onChange?: (newValue: unknown, oldValue: unknown) => void;
  /** Render callback for `type: "dom"` settings. Receives the container element. */
  render?: (el: HTMLElement) => void;
}

/** A ComfyUI command registered declaratively via the extension object. */
export interface ComfyCommand {
  id: string;
  label?: string;
  /**
   * Menu-bar label — `menuItemStore.commandIdToMenuItem` reads this field
   * verbatim for entries registered through `menuCommands`, so a command
   * meant to appear in the menu bar must set it (the longer palette `label`
   * is not a fallback).
   */
  menubarLabel?: string;
  icon?: string;
  function: () => void;
}

/** A key combo → command binding registered via the extension object. */
export interface ComfyKeybinding {
  commandId: string;
  combo: { key: string; ctrl?: boolean; shift?: boolean; alt?: boolean };
}

/**
 * One tab in ComfyUI's bottom panel (the dock the "Shortcuts" and terminal
 * tabs live in). `stores/workspace/bottomPanelStore.ts`'s
 * `registerExtensionBottomPanelTabs` reads this straight off the extension
 * object — the same public mechanism core's own Shortcuts tabs are
 * registered through (`composables/bottomPanelTabs/useShortcutsTab.ts`), so a
 * tab here costs no patch of host code.
 *
 * `type: "custom"`, not `"vue"`: `ExtensionSlot.vue` mounts a `"vue"` tab by
 * handing the component straight to core's own `<component :is>`, which runs
 * it inside *core's* Vue app tree — and this pack bundles its own copy of
 * Vue rather than sharing core's (`vite.config.ts`), so a component mounted
 * that way updates once and then silently stops reacting (see
 * `FilWirelessDiagnostics.vue`'s header for how this was confirmed live).
 * `"custom"` instead hands the tab a raw DOM element and lets the extension
 * mount its own self-contained `createApp()` into it — same fix every other
 * piece of this pack's UI already uses (`domWidgetHost.ts`, `installToasts`).
 */
export interface ComfyBottomPanelTab {
  id: string;
  title: string;
  type: "custom";
  /** Mount into this element. Called once, when the tab first becomes active. */
  render: (el: HTMLElement) => void;
  /** Torn down when the tab is unregistered — pairs with `render`'s own `createApp().mount()`. */
  destroy?: () => void;
  /** Which dock the tab joins. There is no third option in this ComfyUI version. */
  targetPanel: "terminal" | "shortcuts";
}

export interface ComfyExtension {
  name: string;
  settings?: ComfyExtensionSettings[];
  /** Declarative commands picked up by ComfyUI's command palette / keybindings. */
  commands?: ComfyCommand[];
  /** Declarative keybindings bound to `commands` above. */
  keybindings?: ComfyKeybinding[];
  /**
   * Menu-bar entries. `menuItemStore.loadExtensionMenuCommands` keeps only
   * ids that are ALSO declared in `commands` above, then calls
   * `registerCommands(path, ids)` — and `registerMenuGroup` creates the
   * top-level group the first time it sees a path, so an extension may open
   * its own top-level menu.
   */
  menuCommands?: { path: string[]; commands: string[] }[];
  bottomPanelTabs?: ComfyBottomPanelTab[];
  setup?(...args: unknown[]): unknown | Promise<unknown>;
  getCustomWidgets?(canvas: unknown): unknown;
  beforeRegisterNodeDef?(nodeType: unknown, nodeData: ComfyNodeData): void | Promise<void>;
  graphToPrompt?(prompt: unknown): unknown | Promise<unknown>;
  /**
   * Bracket a graph load — `app.loadGraphData` (`scripts/app.ts`) invokes
   * these around configuring a workflow, and it is the one path both a fresh
   * open *and* a tab switch go through. See
   * `nodes2/wireless/graphLoadGuard.ts` for why a wireless-specific hook needs
   * to know when this is happening.
   */
  beforeConfigureGraph?(...args: unknown[]): unknown | Promise<unknown>;
  afterConfigureGraph?(...args: unknown[]): unknown | Promise<unknown>;
}

/**
 * A single widget row on a node body.
 *
 * Defined here rather than in `nodes2/util.ts` (which re-exports it) because
 * it describes the host, not this pack: it is what LiteGraph puts in
 * `node.widgets`, and `LGraphNode` below cannot be spelled without it.
 */
export interface ComfyLikeWidget {
  name?: string;
  value?: unknown;
  options?: {
    values?: unknown[];
    hidden?: boolean;
    advanced?: boolean;
    hideInPanel?: boolean;
    /** The range the backend declared for a numeric widget (`io.Int.Input`). */
    min?: number;
    max?: number;
  };
  hidden?: boolean;
  /**
   * Row offset inside the node body, in node-local pixels. LiteGraph's layout
   * pass writes it for visible widgets; for hidden ones we write it ourselves
   * to position their input sockets (see nodes2/widgetInputSockets.ts).
   */
  y?: number;
  /**
   * Optional `computeSize` (LiteGraph widget layout callback). We keep it
   * around so visibility toggles can restore the original after hide.
   */
  computeSize?: (...args: unknown[]) => unknown;
  __filOriginalComputeSize?: (...args: unknown[]) => unknown;
}

/**
 * One input or output slot as LiteGraph stores it on a node.
 *
 * Kept in step with `FakeSlot` in `tests/fakes/comfyHost.ts`, which is the
 * better-researched of the two — it carries the core source lines each field
 * was read off. Typing this seam is what surfaced the disagreement: `widget`
 * is `null` on a slot nobody attached one to, and writing it as merely
 * optional here made the fake un-assignable to the real type, which would
 * have meant the tests were exercising a shape the host never produces.
 */
export interface LGraphSlot {
  name?: string;
  type?: string | number;
  link?: number | null;
  /** Output slots fan out — LiteGraph tracks every link id leaving them here. */
  links?: number[] | null;
  /** The display name a user gave this slot; equals `name` when unrenamed. */
  label?: string;
  localized_name?: string;
  /** Which input slot of the target node a link lands on. */
  target_slot?: number;
  /** Present when this input is a widget's socket; `null` when it is not. */
  widget?: { name?: string } | null;
  pos?: [number, number];
  /** Socket dot colours; 🔀 Switch copies them off whatever it is wired to. */
  color_on?: string;
  color_off?: string;
}

/** One wire, as LiteGraph stores it in `graph.links`. */
export interface LGraphLink {
  id?: number;
  /** A node id, so the same `string | number` `LGraphNode.id` is. */
  origin_id?: string | number;
  origin_slot?: number;
  target_id?: string | number;
  target_slot?: number;
  type?: string;
}

/** The graph a node belongs to, in the part this pack reaches for. */
export interface LGraphLike {
  /** A removed link leaves a hole, so the values are optional — `FakeGraph`
   *  models this and typing the seam is what surfaced it. */
  links?: Record<number, LGraphLink | undefined>;
  getNodeById?: (id: string | number) => LGraphNode | null;
  setDirtyCanvas?: (foreground: boolean, background?: boolean) => void;
  _nodes?: LGraphNode[];
}

/**
 * What `node.addDOMWidget` is handed for a DOM-hosted widget.
 *
 * Spelled out rather than left as `Record<string, unknown>` because
 * `tests/fakes/comfyHost.ts` types it precisely, and a loose type here makes
 * the fake un-assignable to the very interface it models — the fake would then
 * be testing a shape the host never produces.
 */
export interface DomWidgetOptions {
  hideOnZoom: boolean;
  getValue: () => unknown;
  setValue: (value: unknown) => void;
  getHeight: () => number;
  onDraw?: (ctx: never, widget: unknown) => void;
}

/**
 * The hooks a node class exposes for an extension to wrap.
 *
 * Declared as methods, not function-typed properties: TypeScript checks
 * method parameters bivariantly, and a caller that knows a hook's real
 * arguments (`onExecuted(output, ...)`) must still satisfy this type.
 *
 * Every one of these is a slot this pack chains rather than replaces: read the
 * existing value, install a function that calls it, keep the result. They are
 * typed loosely on purpose — the arguments differ between ComfyUI versions and
 * between the two renderers, and pinning them would be a claim this pack has
 * no way to keep.
 */
export interface LGraphNodePrototype {
  onNodeCreated?(...args: unknown[]): unknown;
  onConfigure?(...args: unknown[]): unknown;
  onRemoved?(...args: unknown[]): unknown;
  onConnectionsChange?(...args: unknown[]): unknown;
  onExecuted?(...args: unknown[]): unknown;
  onDrawForeground?(...args: unknown[]): unknown;
  onDrawTitleBar?: unknown;
  onDrawTitleText?: unknown;
  getExtraMenuOptions?(...args: unknown[]): unknown;
  onMenu?: unknown;
  __filOriginalGetWidgets?: unknown;
}

/**
 * A registered node *class* — what `beforeRegisterNodeDef` hands an extension.
 *
 * This is the argument every `nodes2/nodes/*.ts` module receives and passes to
 * `registerStyledNode`. It was `unknown` at each of those boundaries, with the
 * shape re-declared inline at every use site, so nothing checked that the two
 * agreed — and `nodeStyle.ts` and `domWidgetHost.ts` between them carry more
 * fix commits than any other pair of files in this pack.
 */
export interface LGraphNodeType {
  prototype: LGraphNodePrototype;
  comfyClass?: string;
  title?: string;
  nodeData?: ComfyNodeData;
}

/**
 * A node *instance* on the graph.
 *
 * The index signature is what makes this usable: each node module parks its own
 * state on the instance under a private `_filXxxState` key, and enumerating
 * fifteen of those here would tie this type to the pack rather than the host.
 * A module that needs its own key intersects it — `node as LGraphNode & {
 * _filSeedState?: SeedState }` — and keeps the rest checked.
 */
export interface LGraphNode {
  id?: number | string;
  comfyClass?: string;
  type?: string;
  title?: string;
  widgets?: ComfyLikeWidget[];
  inputs?: LGraphSlot[];
  outputs?: LGraphSlot[];
  size?: [number, number];
  pos?: [number, number];
  /** Painted by the canvas renderer; treated as node surfaces by the Vue one. */
  color?: string;
  bgcolor?: string;
  boxcolor?: string;
  /** Mute (2) and bypass (4) live here, not in `flags`. */
  mode?: number;
  flags?: Record<string, unknown>;
  properties?: Record<string, unknown>;
  graph?: LGraphLike;
  badges?: unknown[];
  // Declared as methods, not function-typed properties, on purpose:
  // TypeScript checks method parameters bivariantly, and these are host
  // methods a caller supplies more specific options to. Written as
  // properties, `tests/fakes/comfyHost.ts` — which types its `addDOMWidget`
  // options precisely — stops being assignable to the very type it models.
  addDOMWidget?(
    name: string,
    type: string,
    element: HTMLElement,
    options: DomWidgetOptions,
  ): unknown;
  setDirtyCanvas?(foreground?: boolean, background?: boolean): void;
  onRemoved?(...args: unknown[]): unknown;
  [filPrivateKey: string]: unknown;
}

export interface ComfyApp {
  registerExtension(ext: ComfyExtension): void;
  loadGraphData: (...args: unknown[]) => Promise<unknown>;
  graph?: unknown;
  graphToPrompt?: (...args: unknown[]) => Promise<unknown>;
  /**
   * Called by the UI to queue a run. `ComfyApp.queuePrompt` invokes
   * `this.graphToPrompt(this.rootGraph)` inside its batch loop, which is the
   * only reason wireless links can be substituted for the prompt and taken
   * straight back out (see nodes2/wireless/promptBridge.ts).
   */
  queuePrompt?: (...args: unknown[]) => Promise<unknown>;
  ui?: unknown;
  /** ComfyApi singleton — emits execution events (`executing`, `progress`, ...). */
  api?: {
    addEventListener?: (type: string, cb: (event: Event) => void) => void;
  };
  /**
   * LiteGraph canvas. `setDirty(foreground, background?)` is how a repaint is
   * requested — there is no map of node id → DOM element on it (the pack
   * assumed a `nodeEls` for two releases; nothing in core has ever had one).
   * DOM-rendered nodes are found in the document by `[data-node-id]`.
   */
  canvas?: {
    setDirty?: (foreground: boolean, background?: boolean) => void;
  };
  /** Present on modern ComfyUI — its existence signals the native commands API. */
  extensionManager?: unknown;
}
