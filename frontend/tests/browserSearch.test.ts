import { describe, it, expect } from "vitest";
import { rankItems, scoreItem, searchTerms, type SearchField } from "@/lib/browserSearch";

interface Model { id: string; tags: string[] }

const FIELDS: SearchField<Model>[] = [
  { weight: 100, read: (m) => m.id },
  { weight: 20, read: (m) => m.tags },
];

const model = (id: string, ...tags: string[]): Model => ({ id, tags });

describe("browserSearch", () => {
  it("splits and folds the query, ignoring stray whitespace", () => {
    expect(searchTerms("  Free   VISION ")).toEqual(["free", "vision"]);
    expect(searchTerms("")).toEqual([]);
    expect(searchTerms("   ")).toEqual([]);
  });

  // The reason this module exists. Provider lists put `gpt-4o` wherever they
  // like, and a plain substring filter kept it below every longer name that
  // contains it.
  it("puts an exact name above one that merely contains it", () => {
    const list = [model("gpt-4o-mini-audio-preview"), model("gpt-4o"), model("chatgpt-4o-latest")];
    expect(rankItems(list, "gpt-4o", FIELDS).map((m) => m.id)).toEqual([
      "gpt-4o",
      "gpt-4o-mini-audio-preview",
      "chatgpt-4o-latest",
    ]);
  });

  // "starts with" beats "starts a word inside" beats "somewhere in the middle".
  it("ranks a prefix above a word start above a bare substring", () => {
    const prefix = model("llama-3-70b");
    const wordStart = model("meta/llama-3-70b");
    const buried = model("xllamax");
    const ranked = rankItems([buried, wordStart, prefix], "llama", FIELDS);
    expect(ranked.map((m) => m.id)).toEqual(["llama-3-70b", "meta/llama-3-70b", "xllamax"]);
  });

  // Every word has to land somewhere, or a second word would only ever widen
  // the result — which is the opposite of what typing more means.
  it("drops an item that misses any one of the words", () => {
    const list = [model("qwen-vl", "vision"), model("qwen-text", "text")];
    expect(rankItems(list, "qwen vision", FIELDS).map((m) => m.id)).toEqual(["qwen-vl"]);
  });

  it("scores each word against its best field and adds them up", () => {
    const m = model("qwen-vl", "vision");
    // "qwen" starts the id (100 × 2); "vision" IS the whole tag (20 × 3).
    expect(scoreItem(m, ["qwen", "vision"], FIELDS)).toBe(260);
  });

  // A field read as an array is joined, so matching one tag out of several is
  // a plain hit and not the "the whole field is the term" bonus.
  it("does not treat one of several tags as an exact match", () => {
    const many = model("a", "vision", "free");
    const only = model("b", "vision");
    expect(scoreItem(many, ["vision"], FIELDS)).toBeLessThan(scoreItem(only, ["vision"], FIELDS));
  });

  // An unfiltered list keeps whatever order the caller arranged — favourites
  // first, or the order the provider listed them in. Ranking it would shuffle
  // that away for nothing.
  it("returns the list untouched when the query is empty", () => {
    const list = [model("b"), model("a"), model("c")];
    expect(rankItems(list, "  ", FIELDS).map((m) => m.id)).toEqual(["b", "a", "c"]);
  });

  it("copies rather than returning the caller's array", () => {
    const list = [model("a")];
    expect(rankItems(list, "", FIELDS)).not.toBe(list);
  });

  it("uses the tie-break only when the scores are equal", () => {
    const list = [model("style-b"), model("style-a")];
    const alpha = (x: Model, y: Model) => x.id.localeCompare(y.id);
    expect(rankItems(list, "style", FIELDS, alpha).map((m) => m.id)).toEqual(["style-a", "style-b"]);
  });

  it("survives an item with nothing to read", () => {
    const empty: Model = { id: "", tags: [] };
    expect(scoreItem(empty, ["x"], FIELDS)).toBe(0);
  });
});
