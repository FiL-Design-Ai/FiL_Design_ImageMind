import type { ComfyExtensionSettings } from "@/types/comfy";

export const CONNECTION_FX_ADVANCED_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: "FiL_LLM.ConnectionFX.ShowToasts",
    name: "Show connection toasts",
    type: "boolean",
    defaultValue: true,
    category: ["FiL_LLM", "Connection FX", "Feedback"],
    tooltip: "Show toast notifications when connecting/disconnecting wires.",
  },
  {
    id: "FiL_LLM.ConnectionFX.AnimationDuration",
    name: "Animation duration",
    type: "combo",
    defaultValue: "Normal",
    options: ["Fast", "Normal", "Slow"],
    category: ["FiL_LLM", "Connection FX", "Timing"],
    tooltip: "Fast (150ms) / Normal (300ms) / Slow (450ms) — pulse effect duration.",
  },
];
