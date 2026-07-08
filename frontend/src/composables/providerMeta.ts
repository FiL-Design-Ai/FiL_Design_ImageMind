import type { IconName } from "@/composables/icons";

/** Display name + logo icon per provider id — shared between
 * `ProviderManager.vue` (settings panel) and `ProviderLoader.vue`'s
 * provider combo box, so both stay in sync. */
export const PROVIDER_LABEL: Record<string, string> = {
  ollama: "Ollama",
  lmstudio: "LM Studio",
  openai: "OpenAI",
  groq: "Groq",
  google: "Google AI",
  openrouter: "OpenRouter",
  cloudflare: "Cloudflare",
};

export const PROVIDER_ICON: Record<string, IconName> = {
  ollama: "provider-ollama",
  lmstudio: "provider-lmstudio",
  openai: "provider-openai",
  groq: "provider-groq",
  google: "provider-google",
  openrouter: "provider-openrouter",
  cloudflare: "provider-cloudflare",
};
