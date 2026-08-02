import { describe, it, expect, beforeEach } from "vitest";
import {
  RECENTS_CAP,
  clearRecents,
  isRecent,
  noteRecent,
  recentCountFor,
  recentsFor,
  _resetRecents,
} from "@/stores/browserRecents";

describe("browserRecents", () => {
  beforeEach(() => {
    _resetRecents();
  });

  it("starts empty and reports an unknown scope as empty rather than undefined", () => {
    expect(recentsFor("styles")).toEqual([]);
    expect(isRecent("styles", "anything")).toBe(false);
  });

  it("keeps the newest first", () => {
    noteRecent("styles", "a");
    noteRecent("styles", "b");
    expect(recentsFor("styles")).toEqual(["b", "a"]);
  });

  // Re-picking something already in the list moves it up rather than adding a
  // second copy — otherwise the twelve slots fill with one favourite.
  it("moves a repeat to the front without duplicating it", () => {
    noteRecent("styles", "a");
    noteRecent("styles", "b");
    noteRecent("styles", "a");
    expect(recentsFor("styles")).toEqual(["a", "b"]);
  });

  it("drops the oldest past the cap", () => {
    for (let i = 0; i < RECENTS_CAP + 5; i++) noteRecent("styles", `s${i}`);
    const list = recentsFor("styles");
    expect(list.length).toBe(RECENTS_CAP);
    expect(list[0]).toBe(`s${RECENTS_CAP + 4}`);
    expect(list).not.toContain("s0");
  });

  // The same model id under two providers is two different things, the rule
  // modelFavourites already follows.
  it("keeps scopes apart", () => {
    noteRecent("models:ollama", "llama3");
    noteRecent("models:openrouter", "llama3");
    noteRecent("models:ollama", "qwen");
    expect(recentsFor("models:ollama")).toEqual(["qwen", "llama3"]);
    expect(recentsFor("models:openrouter")).toEqual(["llama3"]);
  });

  it("ignores an empty id", () => {
    noteRecent("styles", "");
    expect(recentsFor("styles")).toEqual([]);
  });

  it("counts only the candidates that are actually recent", () => {
    noteRecent("styles", "a");
    noteRecent("styles", "c");
    expect(recentCountFor("styles", ["a", "b", "c", "d"])).toBe(2);
  });

  it("clears one scope without touching the others", () => {
    noteRecent("styles", "a");
    noteRecent("models:ollama", "llama3");
    clearRecents("styles");
    expect(recentsFor("styles")).toEqual([]);
    expect(recentsFor("models:ollama")).toEqual(["llama3"]);
  });

  it("survives junk in storage", () => {
    localStorage.setItem("fil_browser_recents", "{not json");
    // The module has already loaded, so prove the guard by writing and reading
    // back through the public API: a bad value must not stop a later write.
    noteRecent("styles", "a");
    expect(recentsFor("styles")).toEqual(["a"]);
  });
});
