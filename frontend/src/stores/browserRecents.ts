/**
 * Recently picked things, per browser.
 *
 * Favourites answer "the four I always use"; this answers "the one I used
 * twenty minutes ago and cannot remember the name of". Between 367 OpenRouter
 * models and ~400 style keys spread over four lists, that second question is
 * the one that actually gets asked, and until now nothing in the pickers could
 * answer it.
 *
 * A `scope` keeps them apart — `"models:openrouter"` and `"styles"` are
 * separate lists, and the same id under two providers is two entries, the same
 * rule `modelFavourites.ts` uses.
 *
 * Stored in `localStorage` alongside the pickers' other preferences: this is a
 * per-machine convenience, not workflow state, and it must never travel inside
 * a saved graph.
 */
import { ref } from "vue";

const STORAGE_KEY = "fil_browser_recents";

/** Enough to cover a working session, short enough to stay a shortcut. */
export const RECENTS_CAP = 12;

type RecentMap = Record<string, string[]>;

function load(): RecentMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    // Each scope is rebuilt rather than trusted: one hand-edited value must not
    // take the picker down on open.
    const out: RecentMap = {};
    for (const [scope, list] of Object.entries(parsed as Record<string, unknown>)) {
      if (!Array.isArray(list)) continue;
      out[scope] = list.filter((v): v is string => typeof v === "string").slice(0, RECENTS_CAP);
    }
    return out;
  } catch {
    return {};
  }
}

/** Replaced wholesale on every change — Vue tracks the ref, not the contents. */
const recents = ref<RecentMap>(load());

function persist(): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recents.value));
  } catch {
    // Quota, or a profile that forbids writes. The list still works for this
    // session, it just does not come back.
  }
}

/** Most recent first. */
export function recentsFor(scope: string): string[] {
  return recents.value[scope] ?? [];
}

export function isRecent(scope: string, id: string): boolean {
  return recentsFor(scope).includes(id);
}

/**
 * Put `id` at the front of its scope, dropping any earlier copy.
 *
 * Called when a pick is APPLIED, not when it is highlighted: walking the list
 * with the arrow keys would otherwise rewrite the recents on every keystroke
 * and leave nothing but the last thing scrolled past.
 */
export function noteRecent(scope: string, id: string): void {
  if (!id) return;
  const next = [id, ...recentsFor(scope).filter((x) => x !== id)].slice(0, RECENTS_CAP);
  recents.value = { ...recents.value, [scope]: next };
  persist();
}

/** How many of `candidates` are in this scope's recents — for the row's count. */
export function recentCountFor(scope: string, candidates: readonly string[]): number {
  const set = new Set(recentsFor(scope));
  return candidates.reduce((total, id) => total + (set.has(id) ? 1 : 0), 0);
}

/** Drop one scope, or everything when no scope is given. */
export function clearRecents(scope?: string): void {
  if (scope === undefined) {
    recents.value = {};
  } else {
    const next = { ...recents.value };
    delete next[scope];
    recents.value = next;
  }
  persist();
}

/** Test seam — the pickers never call this. */
export function _resetRecents(): void {
  recents.value = {};
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // nothing to do
  }
}
