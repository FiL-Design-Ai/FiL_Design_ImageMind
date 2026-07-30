import type { ComfyExtensionSettings } from "@/types/comfy";
import { SETTINGS_CATEGORY } from "@/constants/brand";

export const LANGUAGE_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: "FiL_Design_ImageMind.Language",
    // "Language" on its own reads as ComfyUI's own UI language, which this is
    // not — it only covers this pack.
    name: "Panel language",
    type: "combo",
    defaultValue: "en",
    options: ["en", "ru"],
    tooltip: "Language of this pack's node panels, labels and tooltips (English / Russian). ComfyUI's own interface language is set separately, in Comfy > Locale.",
    // Three levels — see the note in mindSettings.ts. Folded into General
    // rather than a "Language" heading of its own: one row under its own
    // heading is a heading that earns nothing.
    category: [SETTINGS_CATEGORY, "General", "Language"],
  },
];

