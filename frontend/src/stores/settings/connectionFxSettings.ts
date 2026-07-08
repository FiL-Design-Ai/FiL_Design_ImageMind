import type { ComfyExtensionSettings } from "@/types/comfy";

export const CONNECTION_FX_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: "FiL_LLM.ConnectionFX.Enabled",
    name: "Connection wire effects",
    type: "boolean",
    defaultValue: false,
    tooltip: "Accent-radial-gradient overlay near the cursor while dragging a wire.",
    category: ["FiL_LLM", "Connection FX", "Enabled"],
  },
];