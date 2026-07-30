import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { providerApi, type ProviderAccount, type ProviderAccountUpdate, type ProbeResponse } from "@/api/client";

/**
 * Provider runtime store: maintains account credentials and cached model
 * lists, with reload/probe helpers. Replaces the half-dozen scattered
 * fetchers in legacy `web/core/provider_api.js` + `provider_manager.js`.
 *
 * All keys are runtime-only — accounts are never persisted in workflow
 * files (per the project security contract).
 */

const CACHE_TTL_MS = 300_000; // 5 minutes

interface ModelsCacheEntry {
  list: string[];
  visionModels: string[];
  cachedAt: number;
  loading: boolean;
  error?: string;
}

const PROVIDER_IDS = ["ollama", "lmstudio", "openai", "google", "groq", "openrouter", "cloudflare"] as const;
export type ProviderId = (typeof PROVIDER_IDS)[number];
export const PROVIDER_LIST: readonly ProviderId[] = PROVIDER_IDS;

export const useProviderStore = defineStore("fil/providers", () => {
  const accounts = ref<Record<string, ProviderAccount>>({});
  const modelsByProvider = ref<Record<string, ModelsCacheEntry>>({});
  const probeState = ref<Record<string, ProbeResponse | undefined>>({});
  const displayNames = ref<Record<string, string>>({});
  const lastError = ref<string | null>(null);

  const configuredProviders = computed(() => {
    return Object.fromEntries(
      Object.entries(accounts.value).filter(([, v]) => v?.configured || v?.account_id || v?.base_url),
    );
  });

  async function loadAccounts(): Promise<void> {
    try {
      const res = await providerApi.loadAccounts();
      accounts.value = res.accounts || {};
      lastError.value = null;
    } catch (err) {
      lastError.value = err instanceof Error ? err.message : String(err);
    }
  }

  async function saveAccount(
    provider: string,
    fields: ProviderAccountUpdate,
  ): Promise<void> {
    try {
      const res = await providerApi.saveAccounts({ [provider]: fields });
      accounts.value = res.accounts || {};
      lastError.value = null;
      // Auto-refresh models after credentials change
      void loadModels(provider, true);
    } catch (err) {
      lastError.value = err instanceof Error ? err.message : String(err);
      throw err;
    }
  }

  async function deleteAccountRaw(provider: string): Promise<void> {
    const res = await providerApi.saveAccounts({
      [provider]: { delete: true },
    });
    accounts.value = res.accounts || {};
  }

  async function deleteAccount(provider: string): Promise<void> {
    await saveAccount(provider, {});
    try {
      await deleteAccountRaw(provider);
    } catch (err) {
      lastError.value = err instanceof Error ? err.message : String(err);
    }
  }

  async function loadModels(provider: string, force = false): Promise<string[]> {
    const existing = modelsByProvider.value[provider];
    // Respect TTL — don't re-fetch if cache is fresh
    if (existing && !force && !existing.error && existing.cachedAt > 0) {
      if (Date.now() - existing.cachedAt < CACHE_TTL_MS) {
        return existing.list;
      }
    }
    if (existing) existing.loading = true;
    else {
      modelsByProvider.value[provider] = { list: [], visionModels: [], cachedAt: 0, loading: true };
    }
    try {
      const res = await providerApi.loadModels(provider, force);
      const list = res.models || [];
      modelsByProvider.value[provider] = {
        list,
        visionModels: res.vision_models || [],
        cachedAt: Date.now(),
        loading: false,
      };
      // Backend signals failure via status+message ("available" is the only
      // success label) — surface the user-facing message as the entry error.
      if (res.status && res.status !== "available") {
        modelsByProvider.value[provider].error = res.message || res.status;
      }
      return list;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      modelsByProvider.value[provider] = {
        list: [],
        visionModels: [],
        cachedAt: 0,
        loading: false,
        error: msg,
      };
      lastError.value = msg;
      throw err;
    }
  }

  /**
   * `t` is optional and defaults to the English suffix so callers that don't
   * (yet) have a translator on hand keep working. Without it this returned
   * "12s"/"5m"/"2h" verbatim inside otherwise-Russian panels — the unit letter
   * never went through useI18n at all.
   */
  function cachedAgeLabel(provider: string, t?: (key: string, fallback: string) => string): string | null {
    const entry = modelsByProvider.value[provider];
    if (!entry?.cachedAt) return null;
    const tr = t ?? ((_key: string, fallback: string) => fallback);
    const age = Date.now() - entry.cachedAt;
    const seconds = Math.floor(age / 1000);
    if (seconds < 60) return `${seconds}${tr("unit_seconds_short", "s")}`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}${tr("unit_minutes_short", "m")}`;
    return `${Math.floor(seconds / 3600)}${tr("unit_hours_short", "h")}`;
  }

  async function probe(provider: string, model = ""): Promise<ProbeResponse | undefined> {
    try {
      const res = await providerApi.probe(provider, model);
      probeState.value[provider] = res;
      return res;
    } catch (err) {
      lastError.value = err instanceof Error ? err.message : String(err);
      return undefined;
    }
  }

  async function loadDisplayNames(): Promise<void> {
    try {
      const res = await providerApi.listProviders();
      displayNames.value = res.providers || {};
    } catch {
      // soft fail — display names are cosmetic
    }
  }

  function modelsFor(provider: string): string[] {
    return modelsByProvider.value[provider]?.list ?? [];
  }

  function visionModelsFor(provider: string): string[] {
    return modelsByProvider.value[provider]?.visionModels ?? [];
  }

  function isLoading(provider: string): boolean {
    return Boolean(modelsByProvider.value[provider]?.loading);
  }

  return {
    accounts,
    modelsByProvider,
    probeState,
    displayNames,
    lastError,
    configuredProviders,
    PROVIDER_LIST,
    loadAccounts,
    saveAccount,
    deleteAccount,
    deleteAccountRaw,
    loadModels,
    probe,
    loadDisplayNames,
    modelsFor,
    visionModelsFor,
    isLoading,
    cachedAgeLabel,
  };
});
