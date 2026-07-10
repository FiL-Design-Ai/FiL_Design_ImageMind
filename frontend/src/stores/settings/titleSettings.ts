import type { ComfyExtensionSettings } from "@/types/comfy";

export const ADAPTIVE_TITLE_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: "FiL_Design_ImageMind.NodeTitles.AdaptiveColor",
    name: "Adaptive title text color",
    type: "boolean",
    defaultValue: true,
    category: ["FiL_Design_ImageMind", "Node titles"],
    tooltip: "Compute node title text color (white/dark) from the title bar color via YIQ luminance.",
  },
];