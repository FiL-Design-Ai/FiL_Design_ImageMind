/**
 * Favourite models, kept per provider.
 *
 * OpenRouter alone lists 367 models and OpenAI 76; the filters narrow that by
 * kind, but the three or four a user actually works with are scattered through
 * the result either way. A star is the only thing that survives a provider
 * being re-listed.
 *
 * Stored in `localStorage`, the same place the picker's other preferences live
 * — this is a per-machine convenience, not workflow state, and it must not
 * travel inside a saved graph.
 */
import { ref } from "vue";

const STORAGE_KEY = "fil_model_picker_favourites";

/** `provider::model` — the same id under two providers is two entries. */
function key(provider: string, model: string): string {
  return `${provider.trim().toLowerCase()}::${model.trim()}`;
}

function load(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed: unknown = JSON.parse(raw);
    // A hand-edited or half-written value must not take the picker down with
    // it: anything that is not a list of strings starts over as empty.
    if (!Array.isArray(parsed)) return new Set();
    return new Set(parsed.filter((entry): entry is string => typeof entry === "string"));
  } catch {
    return new Set();
  }
}

/** Bumped on every change so `computed()` in the picker re-evaluates. */
const favourites = ref<Set<string>>(load());

function persist(): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...favourites.value]));
  } catch {
    // Quota or a privacy mode that forbids writes — the stars still work for
    // this session, they just do not come back.
  }
}

export function isFavourite(provider: string, model: string): boolean {
  return favourites.value.has(key(provider, model));
}

export function toggleFavourite(provider: string, model: string): boolean {
  const id = key(provider, model);
  const next = new Set(favourites.value);
  const nowFavourite = !next.has(id);
  if (nowFavourite) next.add(id);
  else next.delete(id);
  // A new Set, not a mutation: Vue tracks the ref, not the contents.
  favourites.value = next;
  persist();
  return nowFavourite;
}

export function favouriteCountFor(provider: string, models: string[]): number {
  return models.reduce((total, model) => total + (isFavourite(provider, model) ? 1 : 0), 0);
}

/** Test seam — the picker never calls this. */
export function _resetFavourites(): void {
  favourites.value = new Set();
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // nothing to do
  }
}
