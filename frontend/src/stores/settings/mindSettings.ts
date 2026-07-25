import type { ComfyExtensionSettings } from "@/types/comfy";
import { SETTINGS_CATEGORY } from "@/constants/brand";

export const MIND_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: "FiL_Design_ImageMind.DefaultProvider",
    name: "Default LLM Provider",
    type: "combo",
    defaultValue: "Ollama",
    options: ["Ollama", "LM Studio", "Groq", "Google AI", "OpenRouter", "Cloudflare"],
    category: [SETTINGS_CATEGORY, "General"],
    tooltip: "Default AI Provider pre-selected in new Provider Loader nodes.",
  },
  {
    id: "FiL_Design_ImageMind.RequestTimeout",
    name: "Request Timeout (seconds)",
    type: "number",
    defaultValue: 60,
    attrs: { min: 5, max: 600, step: 5 },
    category: [SETTINGS_CATEGORY, "Network"],
    tooltip: "Global timeout in seconds for API calls to local/cloud LLM providers.",
  },
  {
    id: "FiL_Design_ImageMind.AutoCleanVRAM",
    name: "Auto VRAM cleanup on completion",
    type: "boolean",
    defaultValue: false,
    category: [SETTINGS_CATEGORY, "Performance"],
    tooltip: "Automatically purge empty torch cache and PyTorch VRAM after node execution.",
  },
];
