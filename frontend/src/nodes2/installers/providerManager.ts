import type { ComfyApp } from "@/types/comfy";
import { createApp, type App as VueApp } from "vue";
import { useActivePinia } from "@/stores";
import ProviderManager from "@/components/settings/ProviderManager.vue";

let _pmApp: VueApp<Element> | null = null;

function mountProviderManager(el: HTMLElement): void {
  // ComfyUI destroys the tab container on close and hands us a fresh `el` on
  // every re-open. Tear down any previous instance before mounting into the
  // new container, otherwise the stale app stays bound to the dead DOM node
  // and the re-opened tab renders empty. The Pinia store is global
  // (useActivePinia), so unmounting the component does not destroy it.
  if (_pmApp) {
    _pmApp.unmount();
    _pmApp = null;
  }
  _pmApp = createApp(ProviderManager).use(useActivePinia());
  _pmApp.mount(el);
  console.info("[FiL_Design_ImageMind] provider manager mounted");
}

interface SidebarTabOptions {
  id: string;
  icon: string;
  title: string;
  tooltip: string;
  type: string;
  render: (el: HTMLElement) => void;
}

/**
 * Mounts the provider/API-key manager as a sidebar tab.
 *
 * A `type: "dom"` Settings-panel entry was tried first, following an
 * advanced-guide draft — but the installed ComfyUI frontend doesn't
 * recognize that setting type at all: it silently falls back to
 * rendering a plain text input and never calls our `render` callback
 * (confirmed live — Settings showed an empty text box, not the form).
 * `app.extensionManager.registerSidebarTab({ type: "custom", render })`
 * is the API that's actually implemented — the same one other installed
 * extensions (e.g. iTools' sidebar tab) use successfully.
 */
export function installProviderManager(app: ComfyApp): void {
  const em = (app as unknown as {
    extensionManager?: { registerSidebarTab?: (opts: SidebarTabOptions) => void };
  }).extensionManager;
  if (!em?.registerSidebarTab) {
    console.warn("[FiL_Design_ImageMind] extensionManager.registerSidebarTab not available — cannot mount provider manager");
    return;
  }
  em.registerSidebarTab({
    id: "FiL_Design_ImageMind.Providers",
    icon: "pi pi-key",
    title: "FiL Providers",
    tooltip: "Configure LLM provider API keys and endpoints",
    type: "custom",
    render: (el: HTMLElement) => mountProviderManager(el),
  });
  console.info("[FiL_Design_ImageMind] provider manager sidebar tab registered");
}
