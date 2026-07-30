/**
 * ComfyUI settings registered by the FiL_Design_ImageMind extension.
 * Contains only clean, relevant settings for the ImageMind AI node pack.
 */
import type { ComfyExtensionSettings } from "@/types/comfy";
import { MIND_SETTINGS } from "@/stores/settings/mindSettings";
import { LANGUAGE_SETTINGS } from "@/stores/settings/languageSettings";
import { LOGGING_SETTINGS } from "@/stores/settings/loggingSettings";
import { THEME_SETTINGS } from "@/stores/settings/themeSettings";
import { SCROLL_GUARD_SETTINGS } from "@/stores/settings/scrollGuardSettings";
import { CONNECTION_FX_SETTINGS } from "@/stores/settings/connectionFxSettings";
import { RUN_FX_SETTINGS } from "@/stores/settings/runFxSettings";
import { SHORTCUTS_SETTINGS } from "@/stores/settings/shortcutsSettings";

// Every settings module in `src/stores/settings/` belongs here. Connection FX
// was missing, so the code read an id ComfyUI had never heard of and always got
// the fallback — a setting no user could reach.
export const ALL_SETTINGS: ComfyExtensionSettings[] = [
  ...MIND_SETTINGS,
  ...LANGUAGE_SETTINGS,
  ...LOGGING_SETTINGS,
  ...THEME_SETTINGS,
  ...SCROLL_GUARD_SETTINGS,
  ...CONNECTION_FX_SETTINGS,
  ...RUN_FX_SETTINGS,
  ...SHORTCUTS_SETTINGS,
];
