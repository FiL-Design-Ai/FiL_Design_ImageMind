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

export interface ComfyExtension {
  name: string;
  settings?: ComfyExtensionSettings[];
  /** Declarative commands picked up by ComfyUI's command palette / keybindings. */
  commands?: ComfyCommand[];
  /** Declarative keybindings bound to `commands` above. */
  keybindings?: ComfyKeybinding[];
  setup?(...args: unknown[]): unknown | Promise<unknown>;
  getCustomWidgets?(canvas: unknown): unknown;
  beforeRegisterNodeDef?(nodeType: unknown, nodeData: ComfyNodeData): void | Promise<void>;
  graphToPrompt?(prompt: unknown): unknown | Promise<unknown>;
}

export interface ComfyApp {
  registerExtension(ext: ComfyExtension): void;
  loadGraphData: (...args: unknown[]) => Promise<unknown>;
  graph?: unknown;
  graphToPrompt?: (...args: unknown[]) => Promise<unknown>;
  ui?: unknown;
  /** ComfyApi singleton — emits execution events (`executing`, `progress`, ...). */
  api?: {
    addEventListener?: (type: string, cb: (event: Event) => void) => void;
  };
  /** LiteGraph canvas; `nodeEls` maps node id → its DOM element for DOM nodes. */
  canvas?: {
    nodeEls?: Record<string | number, HTMLElement>;
  };
  /** Present on modern ComfyUI — its existence signals the native commands API. */
  extensionManager?: unknown;
}