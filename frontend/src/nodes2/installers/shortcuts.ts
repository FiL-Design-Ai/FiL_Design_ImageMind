import type { ComfyApp } from "@/types/comfy";
import { installShortcuts as installShortcutsComposable } from "@/composables/useShortcuts";

export function installShortcuts(app: ComfyApp): void {
  installShortcutsComposable(app);
  console.info("[FiL_LLM] shortcuts installed");
}