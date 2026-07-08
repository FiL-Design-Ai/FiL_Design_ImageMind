import type { ComfyExtensionSettings } from "@/types/comfy";

export const SHORTCUTS_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: "FiL_LLM.Shortcuts.Enabled",
    name: "Keyboard shortcuts",
    type: "boolean",
    defaultValue: true,
    tooltip: "Esc — close popup / unfocus field. ? — help for the selected FiL_LLM node. Shift+? or Ctrl+Shift+K — full shortcuts cheatsheet. / — focus node search.",
    category: ["FiL_LLM", "Shortcuts"],
  },
];