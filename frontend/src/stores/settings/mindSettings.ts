import type { ComfyExtensionSettings } from "@/types/comfy";
import { SETTINGS_CATEGORY } from "@/constants/brand";
import { PROVIDER_LABEL } from "@/composables/providerMeta";
import { readSetting } from "@/stores/settings/providerSettings";

export const DEFAULT_PROVIDER = "FiL_Design_ImageMind.DefaultProvider";

// Options come from PROVIDER_LABEL rather than a hand-written list, which had
// drifted: it was missing OpenAI, so that provider could never be the default.
// ComfyUI combo settings store the label itself, hence the reverse lookup in
// `defaultProviderId()`.
const PROVIDER_IDS = Object.keys(PROVIDER_LABEL);

export const MIND_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: DEFAULT_PROVIDER,
    name: "Default LLM Provider",
    type: "combo",
    defaultValue: PROVIDER_LABEL.ollama,
    options: PROVIDER_IDS.map((id) => PROVIDER_LABEL[id]),
    // Three levels, not two. ComfyUI reads a two-level category as
    // [section, setting-slot], so every setting sharing a section lands in the
    // same slot and only the last one registered is rendered — measured on a
    // live 1.47.10, where four of this pack's ten settings were invisible,
    // including the theme picker. Core hits the same trap with its own
    // ["Appearance", "General"] pair. The third level is never displayed; the
    // visible heading is the second. Keep it unique per setting.
    category: [SETTINGS_CATEGORY, "General", "Provider"],
    tooltip: "Provider a freshly added Provider Loader node starts on. Nodes already placed, and nodes loaded from a workflow, keep their own value.",
  },
];

/** Provider id (not label) for a newly created Provider Loader. */
export function defaultProviderId(): string {
  const label = readSetting<string>(DEFAULT_PROVIDER, PROVIDER_LABEL.ollama);
  return PROVIDER_IDS.find((id) => PROVIDER_LABEL[id] === label) ?? "ollama";
}

// Removed: `RequestTimeout` and `AutoCleanVRAM`. Neither id was read anywhere —
// request timeouts come from common/config.py (per-provider, overridable in
// config.yaml), and nothing ever subscribed to an execution-finished event, so
// both switches only looked like controls. VRAM cleanup is what the 🧹 Cleaner
// node is for.
