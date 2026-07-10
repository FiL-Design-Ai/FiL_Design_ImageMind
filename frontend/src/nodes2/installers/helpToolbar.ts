/**
 * Mount the global `FilHelpPopup` once. The popup is driven by
 * `helpStore.activeHelpId` — opening it via `value_open(id)` (e.g. from
 * `useShortcuts.ts` Shift+? or ?) shows the modal with matching help content.
 *
 * Mirrors the pattern used by `installToasts.ts`.
 */
import type { ComfyApp } from "@/types/comfy";
import { createApp, type App as VueApp } from "vue";
import { useActivePinia } from "@/stores";
import FilHelpPopup from "@/components/widgets/FilHelpPopup.vue";

let _helpApp: VueApp<Element> | null = null;

export function installHelpToolbar(_app: ComfyApp): void {
  if (_helpApp) return;
  const host = document.createElement("div");
  host.id = "__fil_help_popup_host";
  document.body.appendChild(host);
  _helpApp = createApp(FilHelpPopup).use(useActivePinia());
  _helpApp.mount(host);
  console.info("[FiL_Design_ImageMind] help popup mounted");
}