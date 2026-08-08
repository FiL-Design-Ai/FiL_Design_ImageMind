/**
 * Every ComfyUI setting this pack registers, in one place.
 *
 * Two rules govern this file, both learned by reading what the host actually
 * renders rather than what the definitions say:
 *
 * 1. **Sections are sorted alphabetically by ComfyUI**, not by the order here.
 *    So the section names decide the running order, and there are exactly four
 *    — Appearance, Canvas, General, Wireless. It used to be more, most holding a
 *    single row: a heading per setting is noise, not organisation. A section
 *    earns its own heading once it groups more than one setting that belongs to
 *    the same thing — Wireless has three, all for the 📡 Channel node, so it
 *    gets pulled out of the catch-all "Canvas" bucket instead of hiding there
 *    next to the mouse wheel and the run highlight.
 *
 * 2. **Within a section the host renders in reverse registration order.**
 *    Verified against core's own "Node Search Box" group, which is declared
 *    Implementation → NodeSuggestions and drawn NodeSuggestions →
 *    Implementation. So each block below is listed in reverse of how it should
 *    read on screen, and the comments state the intended reading order.
 *
 * Every setting also needs a three-level category — see the note in
 * `mindSettings.ts`. Two levels made four of these ten invisible.
 */
import type { ComfyExtensionSettings } from "@/types/comfy";
import { MIND_SETTINGS } from "@/stores/settings/mindSettings";
import { LANGUAGE_SETTINGS } from "@/stores/settings/languageSettings";
import { LOGGING_SETTINGS } from "@/stores/settings/loggingSettings";
import { THEME_SETTINGS } from "@/stores/settings/themeSettings";
import { APPEARANCE_SETTINGS } from "@/stores/settings/appearanceSettings";
import { SCROLL_GUARD_SETTINGS } from "@/stores/settings/scrollGuardSettings";
import { CONNECTION_FX_SETTINGS } from "@/stores/settings/connectionFxSettings";
import { RUN_FX_SETTINGS } from "@/stores/settings/runFxSettings";
import { SHORTCUTS_SETTINGS } from "@/stores/settings/shortcutsSettings";
import { WIRELESS_SETTINGS } from "@/stores/settings/wirelessSettings";

export const ALL_SETTINGS: ComfyExtensionSettings[] = [
  // Appearance, to read as: Theme → Theme applies to → Theme covers all of ComfyUI → Theme animations.
  ...APPEARANCE_SETTINGS.slice().reverse(),
  ...THEME_SETTINGS,

  // Canvas, to read as: Mouse wheel → Connection toasts → Running node → Shortcuts.
  ...SHORTCUTS_SETTINGS,
  ...RUN_FX_SETTINGS,
  ...CONNECTION_FX_SETTINGS,
  ...SCROLL_GUARD_SETTINGS,

  // General, to read as: Default provider → Panel language → Log level.
  ...LOGGING_SETTINGS,
  ...LANGUAGE_SETTINGS,
  ...MIND_SETTINGS,

  // Wireless (📡 Channel node), to read as: Wireless channels → Draw wireless links → Channel name at the input.
  ...WIRELESS_SETTINGS,
];
