import type { ComfyExtensionSettings } from "@/types/comfy";

export const LANGUAGE_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: "FiL_LLM.Language",
    name: "Language",
    type: "combo",
    defaultValue: "en",
    options: ["en", "ru"],
    tooltip: "UI language for FiL_LLM node tooltips and labels (English / Russian).",
    category: ["FiL_LLM", "Language"],
  },
];
