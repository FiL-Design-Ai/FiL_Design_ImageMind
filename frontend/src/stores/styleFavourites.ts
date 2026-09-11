/**
 * Favourite styles, kept across sessions.
 *
 * With almost 400 styles across four categories, browsing them all takes time.
 * A star lets the user mark their preferred styles and filter down to them
 * instantly from the browser sidebar.
 *
 * Stored in `localStorage`, the same place the picker's other preferences live
 * — this is a per-machine convenience, not workflow state, and it must not
 * travel inside a saved graph.
 */
import { ref } from "vue";

const STORAGE_KEY = "fil_style_picker_favourites";

/** Normalised key for matching style entries. */
function normKey(key: string): string {
  return key.trim();
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

export function isStyleFavourite(styleKey: string): boolean {
  return favourites.value.has(normKey(styleKey));
}

export function toggleStyleFavourite(styleKey: string): boolean {
  const k = normKey(styleKey);
  const next = new Set(favourites.value);
  const nowFavourite = !next.has(k);
  if (nowFavourite) next.add(k);
  else next.delete(k);
  // A new Set, not a mutation: Vue tracks the ref, not the contents.
  favourites.value = next;
  persist();
  return nowFavourite;
}

export function favouriteStyleCount(candidates: readonly string[]): number {
  return candidates.reduce((total, c) => total + (isStyleFavourite(c) ? 1 : 0), 0);
}

/** Test seam — the picker never calls this. */
export function _resetStyleFavourites(): void {
  favourites.value = new Set();
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // nothing to do
  }
}
