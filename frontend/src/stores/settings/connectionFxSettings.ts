import type { ComfyExtensionSettings } from "@/types/comfy";

export const CONNECTION_FX_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: "FiL_Design_ImageMind.ConnectionFX.Enabled",
    name: "Connection wire effects",
    type: "boolean",
    defaultValue: false,
    tooltip: "Accent-radial-gradient overlay near the cursor while dragging a wire.",
    category: ["FiL_Design_ImageMind", "Connection FX", "Enabled"],
  },
];