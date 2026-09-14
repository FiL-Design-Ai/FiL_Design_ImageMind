import type { ComfyExtensionSettings } from "@/types/comfy";
import { SETTINGS_CATEGORY } from "@/constants/brand";
import { readSetting } from "@/stores/settings/providerSettings";

export const SMART_FIX_NODE_ENABLED = "FiL_Design_ImageMind.Canvas.SmartFixNode";

export const FIX_NODE_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: SMART_FIX_NODE_ENABLED,
    name: "Smart 'Fix node' (preserve values & wires)",
    type: "boolean",
    defaultValue: true,
    tooltip:
      "Intercepts ComfyUI-Manager's 'Fix node (recreate)' on ALL canvas nodes. Instead of wiping all widget values and resetting sliders to default, it safely recreates the node while preserving compatible values, connections, and size.",
    category: [SETTINGS_CATEGORY, "Canvas", "Fix Node"],
  },
];

/** Whether smart fix node behavior is enabled. Read live so toggling takes effect immediately. */
export function isSmartFixNodeEnabled(): boolean {
  return readSetting<boolean>(SMART_FIX_NODE_ENABLED, true) !== false;
}

