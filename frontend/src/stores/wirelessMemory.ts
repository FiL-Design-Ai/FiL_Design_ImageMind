/**
 * Where the user said a channel goes, remembered by name.
 *
 * When the transmitter's cluster modal settles a node's same-type inputs in
 * one go (the `positive`/`negative` case), it records each channel→input pair
 * here, so that the next time an ambiguous cluster asks the same question the
 * modal can pre-select the last answer instead of starting blank. That is all
 * it ever does: this store pre-selects, it never connects. Nothing here
 * reaches into `resolve.ts` — a name that meant `negative` in one workflow can
 * mean the opposite in another, and silently wiring the wrong one is exactly
 * the mistake the cluster modal exists to prevent.
 *
 * Stored in `localStorage`, the same place `browserRecents.ts` keeps its
 * per-machine convenience: this is a preference, not workflow state, and it
 * must never travel inside a saved graph.
 */
import { ref } from "vue";

const STORAGE_KEY = "fil_wireless_pairs";

/**
 * Enough to remember every channel name a user is likely to repeat, bounded so
 * a long-lived profile cannot grow this without limit.
 */
export const PAIRS_CAP = 64;

type PairMap = Record<string, string>;

/**
 * The key a channel is remembered under — its full name, lowercased and with
 * its whitespace collapsed. The full name, not a stem: `nameChannels` gives
 * same-type channels their number precisely so they can be told apart
 * (`CONDITIONING` and `CONDITIONING 2` are two different wires, and the user
 * may well send one to `positive` and the other to `negative`), so a key that
 * dropped the number would pour both into one memory. Subscriptions key on
 * the same full names, and this store accepts the same trade they do: if the
 * graph's numbering shifts, an old entry misses, it cannot misfire silently.
 */
export function memoryKey(channelName: string): string {
  return channelName.trim().replace(/\s+/g, " ").toLowerCase();
}

function load(): PairMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    // Rebuilt rather than trusted: one hand-edited value must not take the
    // modal down on open.
    const out: PairMap = {};
    for (const [key, value] of Object.entries(parsed as Record<string, unknown>)) {
      if (typeof value !== "string") continue;
      out[key] = value;
    }
    return out;
  } catch {
    return {};
  }
}

/** Replaced wholesale on every change — Vue tracks the ref, not the contents. */
const pairs = ref<PairMap>(load());

function persist(): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pairs.value));
  } catch {
    // Quota, or a profile that forbids writes. The memory still works for
    // this session, it just does not come back.
  }
}

/** The input this channel name was last sent to, if one is remembered. */
export function pairedInputFor(channelName: string): string | undefined {
  return pairs.value[memoryKey(channelName)];
}

/**
 * Remember a set of channel→input pairs, as confirmed together in one cluster
 * modal. Existing entries for the same channel are replaced, and the pair list
 * is trimmed to `PAIRS_CAP`, dropping the least recently confirmed first.
 */
export function noteChannelPairs(entries: ReadonlyArray<{ channelName: string; inputName: string }>): void {
  if (entries.length === 0) return;
  const next: PairMap = { ...pairs.value };
  for (const { channelName, inputName } of entries) {
    const key = memoryKey(channelName);
    if (!key || !inputName.trim()) continue;
    // Re-insert so a refreshed pairing moves to the end of the trim order.
    delete next[key];
    next[key] = inputName;
  }
  const keys = Object.keys(next);
  if (keys.length > PAIRS_CAP) {
    for (const key of keys.slice(0, keys.length - PAIRS_CAP)) delete next[key];
  }
  pairs.value = next;
  persist();
}

/**
 * The "positive or negative?" question remembers its last answer, so the next
 * time it opens the matching button is pre-highlighted — one click to confirm
 * instead of a fresh choice. A highlight only, never an auto-answer: the user
 * still presses the button, so a wrong suggestion costs a different click, not
 * a silent miswire.
 */
const NAMING_KEY = "fil_wireless_naming";

const naming = ref<string | null>(loadNaming());

function loadNaming(): string | null {
  try {
    const raw = localStorage.getItem(NAMING_KEY);
    return typeof raw === "string" && raw ? raw : null;
  } catch {
    return null;
  }
}

function persistNaming(): void {
  try {
    if (naming.value == null) localStorage.removeItem(NAMING_KEY);
    else localStorage.setItem(NAMING_KEY, naming.value);
  } catch {
    // Same trade as the pair map: works this session, just does not return.
  }
}

/** Record the answer the user confirmed to the naming question. */
export function noteNamingAnswer(answer: string): void {
  naming.value = answer;
  persistNaming();
}

/** The answer to pre-highlight next time the naming question opens. */
export function namingAnswerHint(): string | null {
  return naming.value;
}

/** Test seam — the panel never calls this. */
export function _resetWirelessMemory(): void {
  pairs.value = {};
  naming.value = null;
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(NAMING_KEY);
  } catch {
    // nothing to do
  }
}
