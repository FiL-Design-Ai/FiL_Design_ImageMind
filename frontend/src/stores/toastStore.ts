import { defineStore, getActivePinia } from "pinia";
import { ref } from "vue";

/**
 * Toast notifications store. Replaces the vanilla `web/core/toasts.js`
 * module state. The Vue component `<ToastStack>` consumes this state
 * and renders the visual stack.
 */
export type ToastLevel = "info" | "success" | "warning" | "error";

export interface ToastAction {
  label: string;
  onClick: (event: MouseEvent) => void;
}

export interface ToastItem {
  id: number;
  level: ToastLevel;
  text: string;
  timeout: number;
  sticky: boolean;
  action: ToastAction | null;
  /** Theme color override (defaults: per-level). */
  color?: string;
}

const MAX_VISIBLE = 4;
const DEFAULT_TIMEOUT: Record<ToastLevel, number> = {
  info: 3500,
  success: 3000,
  warning: 5000,
  error: 6000,
};

let _nextId = 1;

export const useToastStore = defineStore("fil/toast", () => {
  const items = ref<ToastItem[]>([]);
  const queue = ref<ToastItem[]>([]);

  function push(level: ToastLevel, text: string, opts: { action?: ToastAction; sticky?: boolean; timeout?: number } = {}) {
    const item: ToastItem = {
      id: _nextId++,
      level,
      text: text == null ? "" : String(text),
      timeout: opts.timeout ?? DEFAULT_TIMEOUT[level],
      sticky: Boolean(opts.sticky),
      action: opts.action ?? null,
    };
    if (items.value.length < MAX_VISIBLE) {
      items.value.push(item);
    } else {
      queue.value.push(item);
    }
    return item;
  }

  function info(text: string, opts?: { action?: ToastAction; sticky?: boolean; timeout?: number }) {
    return push("info", text, opts);
  }
  function success(text: string, opts?: { action?: ToastAction; sticky?: boolean; timeout?: number }) {
    return push("success", text, opts);
  }
  function warning(text: string, opts?: { action?: ToastAction; sticky?: boolean; timeout?: number }) {
    return push("warning", text, opts);
  }
  function error(text: string, opts?: { action?: ToastAction; sticky?: boolean; timeout?: number }) {
    return push("error", text, opts);
  }

  function dismiss(id: number) {
    items.value = items.value.filter((it) => it.id !== id);
    if (queue.value.length > 0 && items.value.length < MAX_VISIBLE) {
      items.value.push(queue.value.shift()!);
    }
  }

  function dismissAll() {
    items.value = [];
    queue.value = [];
  }

  return { items, queue, info, success, warning, error, push, dismiss, dismissAll };
});

// Convenience singleton exported for non-component callers (mirrors the
// legacy `window.__filToast` global hook used by Python-side debugging).
//
// Per the advanced-engine guide (Rule 8, §5.4), when ComfyUI exposes its
// native `extensionManager.toast` suite we route through it instead of
// our own Pinia stack so toasts integrate with the platform-wide toast
// system (Electron desktop, mobile, accessibility). The Vue `<FilToastStack>`
// still renders for environments without `extensionManager.toast`.

interface ComfyToastManager {
  addAlert?: (msg: string) => void;
  // Older / production variants may expose specific level methods.
}

function getComfyToast(): ComfyToastManager | null {
  const w = globalThis as unknown as { app?: { extensionManager?: { toast?: ComfyToastManager } } };
  return w.app?.extensionManager?.toast ?? null;
}

function emit(level: ToastLevel, text: string): void {
  // Route alert-style events to ComfyUI when available.
  const comfy = getComfyToast();
  if (comfy?.addAlert && (level === "info" || level === "success" || level === "warning" || level === "error")) {
    try {
      comfy.addAlert(text);
      return;
    } catch (err) {
      console.warn("[FiL_Design_ImageMind toast] extensionManager.toast failed:", err);
    }
  }
  // Fallback: our own Pinia stack + FilToastStack component. Before any Vue
  // app has activated pinia — the settings onChange echo at registration runs
  // that early — there is no store to push into; the message goes to the
  // console instead of crashing the page load.
  if (!getActivePinia()) {
    (level === "error" ? console.error : console.warn)(`[FiL_Design_ImageMind] ${text}`);
    return;
  }
  useToastStore().push(level, text, {});
}

export const toast = {
  info: (t: string) => emit("info", t),
  success: (t: string) => emit("success", t),
  warning: (t: string) => emit("warning", t),
  error: (t: string) => emit("error", t),
  // Direct Pinia access for Vue components that want actions/sticky/toasts.
  infoRich: (t: string, o?: { action?: ToastAction; sticky?: boolean; timeout?: number }) => useToastStore().info(t, o),
  successRich: (t: string, o?: { action?: ToastAction; sticky?: boolean; timeout?: number }) => useToastStore().success(t, o),
  warningRich: (t: string, o?: { action?: ToastAction; sticky?: boolean; timeout?: number }) => useToastStore().warning(t, o),
  errorRich: (t: string, o?: { action?: ToastAction; sticky?: boolean; timeout?: number }) => useToastStore().error(t, o),
  dismissAll: () => useToastStore().dismissAll(),
};
