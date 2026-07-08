/**
 * Minimal ComfyUI `app` API surface used by FiL_LLM.
 * Mirrors the methods we rely on in the legacy web/fil_llm.js entrypoint.
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

export interface ComfyExtension {
  name: string;
  settings?: ComfyExtensionSettings[];
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
}