import { createApp, type App as VueApp } from "vue";
import { useActivePinia } from "@/stores";
import FilToastStack from "@/components/widgets/FilToastStack.vue";

let _toastApp: VueApp<Element> | null = null;

/**
 * Mount the global toast stack document-body once. The toast store is the
 * single source of truth (`window.__filToast` is also available). Mirrors
 * the legacy `installToasts()` lazy-init with the Vue replacement.
 */
export function installToasts(): void {
  if (_toastApp) return;
  const host = document.createElement("div");
  document.body.appendChild(host);
  _toastApp = createApp(FilToastStack).use(useActivePinia());
  _toastApp.mount(host);
  const w = globalThis as unknown as Record<string, unknown>;
  // Keep the legacy `window.__filToast` convenience hook alive so Python
  // scripts and the existing console bridge still hit the store.
  import("@/stores/toastStore")
    .then(({ toast }) => {
      w.__filToast = toast;
      console.info("[FiL_Design_ImageMind] toast stack mounted");
    })
    .catch((err) => console.warn("[FiL_Design_ImageMind] toast store import failed:", err));
}