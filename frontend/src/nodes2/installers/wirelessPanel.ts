/**
 * Builds the `bottomPanelTabs` entry for the graph-wide Wireless panel.
 *
 * `type: "custom"`, mounted with our own `createApp()` — see
 * `types/comfy.ts`'s `ComfyBottomPanelTab` docstring for why `type: "vue"`
 * (handing the component to core's own `<component :is>`) silently stops
 * updating. Same shape `installToasts.ts` uses for the toast stack, just
 * mounted into the element the host hands `render(el)` instead of a `<div>`
 * appended to `document.body`.
 */
import { createApp, type App as VueApp } from "vue";
import type { ComfyBottomPanelTab } from "@/types/comfy";
import FilWirelessDiagnostics from "@/components/widgets/FilWirelessDiagnostics.vue";

export function wirelessBottomPanelTab(): ComfyBottomPanelTab {
  let panelApp: VueApp<Element> | null = null;

  return {
    id: "fil-wireless-diagnostics",
    title: "Wireless",
    type: "custom",
    targetPanel: "shortcuts",
    render(el: HTMLElement): void {
      // The tab's content div is torn down and rebuilt each time the user
      // switches away and back, so this can run more than once per session —
      // guard against mounting a second app into a stale reference.
      panelApp?.unmount();
      panelApp = createApp(FilWirelessDiagnostics);
      panelApp.mount(el);
    },
    destroy(): void {
      panelApp?.unmount();
      panelApp = null;
    },
  };
}
