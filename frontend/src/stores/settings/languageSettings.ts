import type { ComfyExtensionSettings } from "@/types/comfy";
import { SETTINGS_CATEGORY } from "@/constants/brand";
import { setLocale, normalizeLangCode } from "@/composables/useI18n";

export const LANG_EN = "English";
export const LANG_RU = "Русский";

export const LANGUAGE_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: "FiL_Design_ImageMind.Language",
    // "Language" on its own reads as ComfyUI's own UI language, which this is
    // not — it only covers this pack.
    name: "Panel language",
    type: "combo",
    defaultValue: LANG_EN,
    options: [LANG_EN, LANG_RU],
    tooltip:
      "Language of this pack's node panels, labels and tooltips (English / Russian). ComfyUI's own interface language is set separately, in Comfy > Locale.",
    // Three levels — see the note in mindSettings.ts. Folded into General
    // rather than a "Language" heading of its own: one row under its own
    // heading is a heading that earns nothing.
    category: [SETTINGS_CATEGORY, "General", "Language"],
    onChange: (value: unknown) => {
      const code = normalizeLangCode(value);
      void setLocale(code);
    },
  },
];

