import type { ComfyExtensionSettings } from "@/types/comfy";
import { SETTINGS_CATEGORY } from "@/constants/brand";

export const SHOW_CONNECTION_TOASTS = "FiL_Design_ImageMind.ConnectionFX.ShowToasts";

export const CONNECTION_FX_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: SHOW_CONNECTION_TOASTS,
    name: "Connection toasts",
    type: "boolean",
    defaultValue: false,
    category: [SETTINGS_CATEGORY, "Canvas", "ConnectionToasts"],
    tooltip: "Show toast notifications when connecting/disconnecting wires.",
  },
];
