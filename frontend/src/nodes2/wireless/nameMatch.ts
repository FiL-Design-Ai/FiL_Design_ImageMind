/**
 * Name pairing — the one place the rulebook lets names decide anything
 * (`resolve.ts` rule 8).
 *
 * The wireless rules refuse to guess between same-type inputs and same-type
 * channels, and rightly: a wrong guess puts one conditioning on both of a
 * sampler's inputs and nothing complains. But when a node's free inputs and
 * the channels of their type carry names — `positive`/`negative` on a KSampler,
 * channels the user renamed to match — the names already say which is which.
 * This module reads exactly that, and nothing weaker: it pairs names into a
 * complete, distinct assignment, and reports one only when *exactly one*
 * exists. Zero or several both come back as null, and the caller falls back
 * to asking the user — so a partial hint never turns into a half-guess.
 *
 * Pure functions, no graph access: `resolve.ts` supplies the candidates and
 * the per-input constraints, this file only knows names.
 */

/**
 * Token spellings that mean the same thing when naming an input or a channel.
 * Deliberately tiny: every entry is a reading the pack imposes on the user's
 * words, and rule 8 acts on the result without asking — so nothing belongs
 * here unless getting it wrong would look absurd (`pos` meaning `positive`).
 */
const TOKEN_ALIASES: Record<string, string> = {
  pos: "positive",
  neg: "negative",
};

/**
 * The meaningful words in a name: lowercased, split on anything that is not a
 * letter or digit, pure numbers dropped. The drop matters for channel names:
 * `nameChannels` numbers repeats (`NEG`, `NEG 2`), and that suffix is list
 * bookkeeping, not meaning. Two channels that end up with the same token set
 * are told apart by nothing — `uniqueFullMatch` below then finds two
 * assignments and refuses both, which is the point.
 */
export function nameTokens(name: string): string[] {
  return name
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/u)
    .filter((word) => word.length > 0 && !/^\p{N}+$/u.test(word))
    .map((word) => TOKEN_ALIASES[word] ?? word);
}

/**
 * The same name, ignoring case and surrounding space — nothing looser.
 *
 * Rule 9's bar, and deliberately stricter than `namesMatch` below: a shared
 * token is enough to pair `positive` with a channel called `positive prompt`,
 * but it would also put a `seed` channel into a `seed_offset` widget, which
 * silently changes a number the user typed. The same bar the widget-feeds
 * setting already set for itself (`widgetFeeds.ts`).
 */
export function namesEqual(a: string, b: string): boolean {
  return a.trim().toLowerCase() === b.trim().toLowerCase();
}

/** Do two names share at least one meaningful token. Empty-token names match nothing. */
export function namesMatch(a: string, b: string): boolean {
  const tokensA = nameTokens(a);
  if (tokensA.length === 0) return false;
  const tokensB = new Set(nameTokens(b));
  return tokensA.some((token) => tokensB.has(token));
}

/**
 * Assign every input a distinct channel, or report that it cannot be done —
 * and "cannot" includes "two ways of doing it".
 *
 * Counting stops at two: the question is never *which* assignment, only
 * whether exactly one exists. Inputs arrive in slot order and channels in
 * plan order, so the walk (and the one assignment it can return) is
 * deterministic for a given graph.
 */
export function uniqueFullMatch<TInput, TChannel>(
  inputs: readonly TInput[],
  channels: readonly TChannel[],
  eligible: (input: TInput, channel: TChannel) => boolean,
): Map<TInput, TChannel> | null {
  if (inputs.length === 0) return new Map();
  if (channels.length < inputs.length) return null;

  let count = 0;
  let only: Map<TInput, TChannel> | null = null;
  const chosen = new Map<TInput, TChannel>();
  const used = new Set<TChannel>();

  function place(index: number): void {
    if (count > 1) return;
    if (index === inputs.length) {
      count += 1;
      if (count === 1) only = new Map(chosen);
      return;
    }
    const input = inputs[index];
    for (const channel of channels) {
      if (used.has(channel) || !eligible(input, channel)) continue;
      chosen.set(input, channel);
      used.add(channel);
      place(index + 1);
      chosen.delete(input);
      used.delete(channel);
      if (count > 1) return;
    }
  }

  place(0);
  return count === 1 ? only : null;
}

/**
 * The leftover deduction: a complete distinct assignment where every pair but
 * at most *one* is backed by matching names — and where exactly one such
 * assignment exists.
 *
 * The one-pair allowance is what makes the canonical case click-free: a
 * KSampler's inputs `positive`/`negative`, one channel already named
 * `positive`, and one still unnamed — the name settles the first pair, and
 * exclusion settles the second ("only this input and this channel are left").
 * Nothing about the unnamed pair's meaning is guessed: it is the only slot
 * either side can still occupy.
 *
 * The same all-or-nothing safety as `uniqueFullMatch` applies, twice over:
 * zero assignments mean the names do not reach far enough, and two or more
 * mean the leftover itself could have gone either way — both come back null
 * and the cluster stays with the user.
 */
export function forcedLeftoverMatch<TInput, TChannel>(
  inputs: readonly TInput[],
  channels: readonly TChannel[],
  eligible: (input: TInput, channel: TChannel) => boolean,
  nameMatches: (input: TInput, channel: TChannel) => boolean,
): Map<TInput, TChannel> | null {
  if (inputs.length < 2) return null; // a lone pair needs nothing but auto-distribution
  if (channels.length < inputs.length) return null;

  // The walk's tally lives on an object, not in local variables: `place`
  // mutates it from inside a closure the compiler's flow analysis cannot see,
  // and locals would still be read narrowed to their pre-walk values below.
  const found: { count: number; match: Map<TInput, TChannel> | null } = { count: 0, match: null };
  const chosen = new Map<TInput, TChannel>();
  const used = new Set<TChannel>();

  function place(index: number, budget: number): void {
    if (found.count > 1) return;
    if (index === inputs.length) {
      found.count += 1;
      if (found.count === 1) found.match = new Map(chosen);
      return;
    }
    const input = inputs[index];
    for (const channel of channels) {
      if (used.has(channel) || !eligible(input, channel)) continue;
      const cost = nameMatches(input, channel) ? 0 : 1;
      if (cost > budget) continue;
      chosen.set(input, channel);
      used.add(channel);
      place(index + 1, budget - cost);
      chosen.delete(input);
      used.delete(channel);
      if (found.count > 1) return;
    }
  }

  place(0, 1);
  // Exactly one assignment, and it must actually spend the allowance — a
  // zero-cost one belongs to `uniqueFullMatch`, which already had its say.
  if (found.count !== 1 || !found.match) return null;
  for (const [input, channel] of found.match) {
    if (!nameMatches(input, channel)) return found.match;
  }
  return null;
}
