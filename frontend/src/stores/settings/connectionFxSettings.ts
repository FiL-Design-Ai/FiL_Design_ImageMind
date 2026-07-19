import type { ComfyExtensionSettings } from "@/types/comfy";

export const CONNECTION_FX_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: "FiL_Design_ImageMind.ConnectionFX.ShowToasts",
    name: "Show connection toasts",
    type: "boolean",
    defaultValue: false,
    category: ["FiL_Design_ImageMind", "Connection FX", "Feedback"],
    tooltip: "Show toast notifications when connecting/disconnecting wires.",
  },
];
