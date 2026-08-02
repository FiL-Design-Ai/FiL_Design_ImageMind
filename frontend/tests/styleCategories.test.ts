import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { CATEGORY_LABEL_KEY } from "@/constants/styleCategories";
import en from "../../data/locales/en.json";
import ru from "../../data/locales/ru.json";

/**
 * The style categories are Russian words baked into the style keys, and the key
 * cannot be rewritten — it is what a workflow saves and what the preview file
 * name hashes. So they are translated at display time, and the risk moves to a
 * different place: a category added on the Python side that nothing here knows
 * about renders untranslated, in Russian, next to English style names. That is
 * exactly how the browser looked before this map existed, so it would not read
 * as a bug to anyone who had seen it once.
 *
 * These tests read the shipped style libraries directly, so the map cannot fall
 * behind them silently.
 */

const HERE = dirname(fileURLToPath(import.meta.url));
const STYLES_DIR = resolve(HERE, "../../common/styles");

/** Every `"CATEGORY/Name"` key in the four style libraries, category part only. */
function shippedCategories(): Set<string> {
  const out = new Set<string>();
  for (const file of readdirSync(STYLES_DIR).filter((f) => f.endsWith(".py"))) {
    const source = readFileSync(resolve(STYLES_DIR, file), "utf-8");
    for (const m of source.matchAll(/^\s*"([^"\n]+\/[^"\n]+)":/gm)) {
      const slash = m[1].indexOf("/");
      out.add(m[1].slice(0, slash));
    }
  }
  return out;
}

const locales: Record<string, Record<string, string>> = {
  en: en as Record<string, string>,
  ru: ru as Record<string, string>,
};

describe("style category labels", () => {
  it("covers every category the style libraries ship", () => {
    const missing = [...shippedCategories()].filter((c) => !(c in CATEGORY_LABEL_KEY));
    expect(missing, `categories with no label key: ${missing.join(", ")}`).toEqual([]);
  });

  it("maps nothing that no longer exists", () => {
    const shipped = shippedCategories();
    const stale = Object.keys(CATEGORY_LABEL_KEY).filter((c) => !shipped.has(c));
    expect(stale, `mapped categories no library uses: ${stale.join(", ")}`).toEqual([]);
  });

  for (const [name, table] of Object.entries(locales)) {
    it(`${name} has a string for every label key`, () => {
      const missing = Object.values(CATEGORY_LABEL_KEY).filter((k) => !table[k]);
      expect(missing, `${name}.json is missing: ${missing.join(", ")}`).toEqual([]);
    });
  }

  it("gives categories that strip to the same word different labels", () => {
    // `🎭 ФЭШН` and `👗 ФЭШН` are two categories, and the sidebar lists both.
    // Translating them to one word would show the user two identical rows with
    // different counts.
    const byLabel = new Map<string, string[]>();
    for (const [category, key] of Object.entries(CATEGORY_LABEL_KEY)) {
      const label = locales.en[key];
      byLabel.set(label, [...(byLabel.get(label) ?? []), category]);
    }
    const collisions = [...byLabel.entries()].filter(([, cats]) => cats.length > 1);
    expect(collisions.map(([label]) => label), "two categories share one label").toEqual([]);
  });

  it("actually translates — the English label is never the Russian one", () => {
    const untranslated = Object.values(CATEGORY_LABEL_KEY).filter((k) => locales.en[k] === locales.ru[k]);
    expect(untranslated).toEqual([]);
  });
});
