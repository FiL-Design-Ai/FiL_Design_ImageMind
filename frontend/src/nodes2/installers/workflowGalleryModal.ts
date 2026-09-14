/**
 * Mount the global `FilWorkflowGalleryModal` once.
 */
import type { ComfyApp } from "@/types/comfy";
import { createApp, type App as VueApp } from "vue";
import { useActivePinia } from "@/stores";
import FilWorkflowGalleryModal from "@/components/widgets/FilWorkflowGalleryModal.vue";

let _galleryApp: VueApp<Element> | null = null;

export function installWorkflowGalleryModal(_app?: ComfyApp): void {
  if (_galleryApp) return;
  const host = document.createElement("div");
  host.id = "__fil_workflow_gallery_host";
  document.body.appendChild(host);
  _galleryApp = createApp(FilWorkflowGalleryModal).use(useActivePinia());
  _galleryApp.mount(host);
  console.info("[FiL_Design_ImageMind] workflow gallery modal mounted");
}

