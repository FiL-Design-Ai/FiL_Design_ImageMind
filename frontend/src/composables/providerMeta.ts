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

/** Where the credential actually comes from: the key page for cloud
 * providers, the download page for the local ones (which need a running
 * server, not a key). Linked from the settings panel so setting a provider up
 * does not start with a search. */
export const PROVIDER_CREDENTIAL_LINK: Record<string, { url: string; label: string }> = {
  ollama: { url: "https://ollama.com/download", label: "Download Ollama" },
  lmstudio: { url: "https://lmstudio.ai/", label: "Download LM Studio" },
  openai: { url: "https://platform.openai.com/api-keys", label: "Get API key" },
  groq: { url: "https://console.groq.com/keys", label: "Get API key" },
  google: { url: "https://aistudio.google.com/apikey", label: "Get API key" },
  openrouter: { url: "https://openrouter.ai/settings/keys", label: "Get API key" },
  cloudflare: { url: "https://dash.cloudflare.com/profile/api-tokens", label: "Get API token" },
};

/** Cloudflare's account id lives in the dashboard, not on the token page. */
export const PROVIDER_ACCOUNT_LINK: Record<string, { url: string; label: string }> = {
  cloudflare: { url: "https://dash.cloudflare.com/", label: "Find Account ID" },
};

/** Providers whose endpoint the user is expected to set: the local servers,
 * whose host and port vary per machine. The cloud ones have a fixed API base,
 * and Cloudflare's is derived from the account id — a field there is one more
 * thing to get wrong. The panel still shows it for any provider that already
 * has a custom URL saved, so an existing proxy setup stays editable. */
export const PROVIDER_EDITS_BASE_URL = new Set(["ollama", "lmstudio"]);

export const PROVIDER_ICON: Record<string, IconName> = {
  ollama: "provider-ollama",
  lmstudio: "provider-lmstudio",
  openai: "provider-openai",
  groq: "provider-groq",
  google: "provider-google",
  openrouter: "provider-openrouter",
  cloudflare: "provider-cloudflare",
};
