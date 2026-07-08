import type { ComfyExtensionSettings } from "@/types/comfy";

export const RUN_BUTTON_FX_ADVANCED_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: "FiL_LLM.RunButton.Enabled",
    name: "Run button effects enabled",
    type: "boolean",
    defaultValue: true,
    category: ["FiL_LLM", "Run FX", "General"],
    tooltip: "Enable/disable all run button visual effects (flash + sound).",
  },
  {
    id: "FiL_LLM.RunButton.AnimationDuration",
    name: "Animation duration",
    type: "combo",
    defaultValue: "Normal",
    options: ["Fast", "Normal", "Slow"],
    category: ["FiL_LLM", "Run FX", "Timing"],
    tooltip: "Fast (200ms) / Normal (400ms) / Slow (600ms) — header flash duration.",
  },
];
