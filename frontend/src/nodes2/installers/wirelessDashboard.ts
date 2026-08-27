/**
 * Mount the global `FilWirelessModal` once.
 *
 * Driven by `wirelessStore.isDashboardOpen` — opened via `openDashboard()`
 * (e.g. from `useShortcuts.ts` Alt+W or from the menu bar / bottom panel tab).
 */
import type { ComfyApp } from "@/types/comfy";
import { createApp, type App as VueApp } from "vue";
import { useActivePinia } from "@/stores";
import FilWirelessModal from "@/components/widgets/FilWirelessModal.vue";

let _wirelessDashboardApp: VueApp<Element> | null = null;

export function installWirelessDashboard(_app?: ComfyApp): void {
  if (_wirelessDashboardApp) return;
  const host = document.createElement("div");
  host.id = "__fil_wireless_dashboard_host";
  document.body.appendChild(host);
  _wirelessDashboardApp = createApp(FilWirelessModal).use(useActivePinia());
  _wirelessDashboardApp.mount(host);
  console.info("[FiL_Design_ImageMind] wireless dashboard modal mounted");
}
