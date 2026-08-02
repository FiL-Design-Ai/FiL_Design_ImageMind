/**
 * Weighted search for the picker browsers.
 *
 * Ranks rather than filters. A plain `includes()` returns every match in
 * whatever order the list happened to be in, so typing the exact name of a
 * model buries it under the eleven longer names that merely contain it —
 * `gpt-4o` sat below `gpt-4o-mini-audio-preview-2024-12-17` because that is
 * the order the provider listed them in.
 *
 * The scoring rules, in order of how much they are worth:
 *
 *   - the whole field IS the term                    weight × 3
 *   - the field starts with it                       weight × 2
 *   - it starts a word inside the field              weight × 1.5
 *   - it appears somewhere                           weight × 1
 *
 * and EVERY word of the query has to hit something, or "free vision" would
 * return everything that is merely free.
 *
 * No Vue in here on purpose: this is called once per item per keystroke over
 * lists of several hundred, and it is the one piece worth being able to test
 * without mounting anything.
 */

/** One searchable aspect of an item, and how much a hit there is worth. */
export interface SearchField<T> {
  /** Relative importance. Only the ratios matter; 100 for "the name" reads well. */
  weight: number;
  /**
   * The text to search. An array is joined with a space — which means the
   * "whole field is the term" bonus can only fire for a single-element one,
   * and that is the intended reading: matching one tag out of five is not an
   * exact match on the item.
   */
  read: (item: T) => string | string[] | null | undefined;
}

/** Word characters that mean the next character starts a new word. */
const SEPARATOR = /[\s\-_/:.,|()[\]]/;

function textOf<T>(item: T, field: SearchField<T>): string {
  const raw = field.read(item);
  if (raw == null) return "";
  return (Array.isArray(raw) ? raw.join(" ") : raw).toLowerCase();
}

/**
 * How well one item answers the query.
 *
 * `terms` must already be lowercased and non-empty — splitting and folding the
 * query once per keystroke rather than once per item is most of why this is
 * fast enough to run on OpenRouter's 367 models while somebody types.
 *
 * @returns 0 when the item is not a match at all.
 */
export function scoreItem<T>(item: T, terms: string[], fields: SearchField<T>[]): number {
  let total = 0;
  for (const term of terms) {
    let best = 0;
    for (const field of fields) {
      const hay = textOf(item, field);
      if (!hay) continue;
      const at = hay.indexOf(term);
      if (at < 0) continue;
      let s = field.weight;
      if (hay === term) s = field.weight * 3;
      else if (at === 0) s = field.weight * 2;
      else if (SEPARATOR.test(hay[at - 1] ?? "")) s = Math.round(field.weight * 1.5);
      if (s > best) best = s;
    }
    if (!best) return 0;
    total += best;
  }
  return total;
}

/** Split what the user typed into the words every item has to satisfy. */
export function searchTerms(query: string): string[] {
  return (query || "").trim().toLowerCase().split(/\s+/).filter(Boolean);
}

/**
 * The matching items, best first.
 *
 * An empty query returns the input untouched — including its order, which for
 * these lists is meaningful (favourites first, then whatever the provider or
 * the style file lists). Ranking an unfiltered list would shuffle it for no
 * reason.
 *
 * Equal scores keep their input order: `Array.prototype.sort` has been
 * required to be stable since ES2019, so the comparator does not need to say
 * so, and a `tieBreak` is only for when something else should win — most
 * recently used, say.
 */
export function rankItems<T>(
  items: readonly T[],
  query: string,
  fields: SearchField<T>[],
  tieBreak?: (a: T, b: T) => number,
): T[] {
  const terms = searchTerms(query);
  if (!terms.length) return [...items];

  const hits: Array<{ item: T; score: number }> = [];
  for (const item of items) {
    const score = scoreItem(item, terms, fields);
    if (score > 0) hits.push({ item, score });
  }
  hits.sort((a, b) => b.score - a.score || (tieBreak ? tieBreak(a.item, b.item) : 0));
  return hits.map((h) => h.item);
}
