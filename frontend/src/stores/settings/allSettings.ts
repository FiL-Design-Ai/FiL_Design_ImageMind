/**
 * ComfyUI settings registered by the FiL_Design_ImageMind extension.
 * Mirrors the legacy `ALL_SETTINGS` from web/fil_design_imagemind.js.
 *
 * Each sub-array is contributed by a dedicated installer module so the
 * settings stay co-located with the feature they configure.
 */
import type { ComfyExtensionSettings } from "@/types/comfy";
import { ADAPTIVE_TITLE_SETTINGS } from "@/stores/settings/titleSettings";
import { RUN_BUTTON_FX_ADVANCED_SETTINGS } from "@/stores/settings/runButtonFxSettingsAdvanced";
import { CONNECTION_FX_SETTINGS } from "@/stores/settings/connectionFxSettings";
import { CONNECTION_FX_ADVANCED_SETTINGS } from "@/stores/settings/connectionFxSettingsAdvanced";
import { SHORTCUTS_SETTINGS } from "@/stores/settings/shortcutsSettings";
import { LANGUAGE_SETTINGS } from "@/stores/settings/languageSettings";
import { THEME_SETTINGS } from "@/stores/settings/themeSettings";

// Provider/API-key management lives in a sidebar tab now, not here — see
// `nodes2/installers/providerManager.ts`. A `type: "dom"` Settings entry
// was tried first, but the installed ComfyUI frontend doesn't recognize
// that setting type and silently falls back to a plain text input.
export const ALL_SETTINGS: ComfyExtensionSettings[] = [
  ...ADAPTIVE_TITLE_SETTINGS,
  ...RUN_BUTTON_FX_ADVANCED_SETTINGS,
  ...CONNECTION_FX_SETTINGS,
  ...CONNECTION_FX_ADVANCED_SETTINGS,
  ...SHORTCUTS_SETTINGS,
  ...LANGUAGE_SETTINGS,
  ...THEME_SETTINGS,
];