/**
 * ComfyUI settings registered by the FiL_Design_ImageMind extension.
 * Contains only clean, relevant settings for the ImageMind AI node pack.
 */
import type { ComfyExtensionSettings } from "@/types/comfy";
import { MIND_SETTINGS } from "@/stores/settings/mindSettings";
import { LANGUAGE_SETTINGS } from "@/stores/settings/languageSettings";
import { LOGGING_SETTINGS } from "@/stores/settings/loggingSettings";
import { THEME_SETTINGS } from "@/stores/settings/themeSettings";

export const ALL_SETTINGS: ComfyExtensionSettings[] = [
  ...MIND_SETTINGS,
  ...LANGUAGE_SETTINGS,
  ...LOGGING_SETTINGS,
  ...THEME_SETTINGS,
];