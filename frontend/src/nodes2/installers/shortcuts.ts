import type { ComfyApp } from "@/types/comfy";
import { installShortcuts as installShortcutsComposable } from "@/composables/useShortcuts";

/**
 * Thin installer wrapper. The declarative commands/keybindings are attached
 * to the extension object (filExtension.ts); this only wires the keydown
 * fallback for ComfyUI builds without the native commands API.
 */
export function installShortcuts(app: ComfyApp): void {
  installShortcutsComposable(app);
}