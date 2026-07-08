/**
 * useI18n — reads the `FiL_LLM.Language` setting and fetches the matching
 * translation dict from `/fil_llm/locale/{lang}` (same source of truth the
 * backend's `common/localization.py` uses for native-widget tooltips).
 *
 * Fetched once per session and cached at module scope; `t()` reads from a
 * reactive object so components re-render once the fetch resolves.
 */
import { reactive, readonly } from "vue";
import { getJson } from "@/api/client";
import { readSetting } from "@/stores/settings/providerSettings";

const SETTING_ID = "FiL_LLM.Language";
const DEFAULT_LANG = "en";

const state = reactive<{ lang: string; translations: Record<string, string>; loaded: boolean }>({
  lang: DEFAULT_LANG,
  translations: {},
  loaded: false,
});

let loadPromise: Promise<void> | null = null;

async function loadTranslations(lang: string): Promise<void> {
  try {
    const data = await getJson<Record<string, string>>(`/fil_llm/locale/${encodeURIComponent(lang)}`);
    state.translations = data;
    state.lang = lang;
  } catch (err) {
    console.warn(`[FiL_LLM] failed to load locale "${lang}":`, err);
  } finally {
    state.loaded = true;
  }
}

function ensureLoaded(): void {
  if (loadPromise) return;
  const lang = readSetting(SETTING_ID, DEFAULT_LANG);
  loadPromise = loadTranslations(lang);
}

export function useI18n() {
  ensureLoaded();
  function t(key: string, fallback: string): string {
    return state.translations[key] ?? fallback;
  }
  return { t, state: readonly(state) };
}
