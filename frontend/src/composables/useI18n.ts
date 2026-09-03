/**
 * useI18n — reads the `FiL_Design_ImageMind.Language` setting and fetches the matching
 * translation dict from `/fil_design_imagemind/locale/{lang}` (same source of truth the
 * backend's `common/localization.py` uses for native-widget tooltips).
 *
 * Fetched once per session and cached at module scope; `t()` reads from a
 * reactive object so components re-render once the fetch resolves.
 */
import { reactive, readonly } from "vue";
import { getJson } from "@/api/client";
import { readSetting } from "@/stores/settings/providerSettings";

const SETTING_ID = "FiL_Design_ImageMind.Language";
const DEFAULT_LANG = "en";

const state = reactive<{ lang: string; translations: Record<string, string>; loaded: boolean }>({
  lang: DEFAULT_LANG,
  translations: {},
  loaded: false,
});

let loadPromise: Promise<void> | null = null;

async function loadTranslations(lang: string): Promise<void> {
  try {
    const data = await getJson<Record<string, string>>(`/fil_design_imagemind/locale/${encodeURIComponent(lang)}`);
    state.translations = data;
    state.lang = lang;
  } catch (err) {
    console.warn(`[FiL_Design_ImageMind] failed to load locale "${lang}":`, err);
  } finally {
    state.loaded = true;
  }
}

export function normalizeLangCode(raw: unknown): string {
  const str = String(raw || "").trim().toLowerCase();
  if (str === "ru" || str.includes("рус") || str.includes("russian")) return "ru";
  return "en";
}

export async function setLocale(langCode: string): Promise<void> {
  const code = normalizeLangCode(langCode);
  await loadTranslations(code);
}

function ensureLoaded(): void {
  if (loadPromise) return;
  const rawLang = readSetting(SETTING_ID, DEFAULT_LANG);
  const lang = normalizeLangCode(rawLang);
  loadPromise = loadTranslations(lang);
}

/** Russian has three plural forms (1 модель / 2 модели / 5 моделей), English has two. */
function pluralRu(n: number, one: string, few: string, many: string): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}

export function useI18n() {
  ensureLoaded();
  function t(key: string, fallback: string): string {
    return state.translations[key] ?? fallback;
  }
  /**
   * Count-aware text: reads `{key}_one` / `{key}_few` / `{key}_many` (falling
   * back to the three fallback params), and applies Russian's mod-10/mod-100
   * plural rule when the active locale is "ru". A flat `t(key, "models")` read
   * "1 моделей" for a single model — grammatically wrong regardless of fallback
   * text, since English only has singular/plural to begin with.
   */
  function tPlural(key: string, count: number, fallbackOne: string, fallbackFew: string, fallbackMany: string): string {
    const one = state.translations[`${key}_one`] ?? fallbackOne;
    const few = state.translations[`${key}_few`] ?? fallbackFew;
    const many = state.translations[`${key}_many`] ?? fallbackMany;
    if (state.lang === "ru") return pluralRu(count, one, few, many);
    return count === 1 ? one : many;
  }
  return { t, tPlural, state: readonly(state) };
}
