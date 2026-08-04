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
