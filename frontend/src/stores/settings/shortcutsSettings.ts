import type { ComfyExtensionSettings } from "@/types/comfy";
import { SETTINGS_CATEGORY } from "@/constants/brand";

// The tooltip names only what is actually registered. It used to promise
// `Esc` and a bare `?` for per-node help as well: both live in the keydown
// fallback in useShortcuts.ts, which no shipped ComfyUI ever installs — it
// has the native commands API, and the fallback is for hosts without one.
// (`Esc` still closes the popup, but that is FilModal's own handler, not a
// shortcut this switch governs.)
export const SHORTCUTS_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: "FiL_Design_ImageMind.Shortcuts.Enabled",
    name: "Keyboard shortcuts",
    type: "boolean",
    defaultValue: true,
    tooltip: "Shift+? opens this pack's keyboard cheatsheet. The key itself can be rebound or cleared under Keybinding in ComfyUI's settings; this switch turns the command off wherever it is invoked from.",
    category: [SETTINGS_CATEGORY, "Canvas", "Shortcuts"],
  },
];
