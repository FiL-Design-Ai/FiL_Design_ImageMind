import { beforeEach, describe, expect, it, vi } from "vitest";

import {
  isFavourite,
  toggleFavourite,
  favouriteCountFor,
  _resetFavourites,
} from "@/stores/modelFavourites";

/**
 * This jsdom setup exposes no Storage API at all — neither `localStorage` nor
 * `window.localStorage` — so the tests bring their own. That is also why the
 * store wraps every access: a browser profile with storage blocked leaves the
 * global in exactly this state.
 */
function installStorageStub(): void {
  const data = new Map<string, string>();
  vi.stubGlobal("localStorage", {
    getItem: (k: string) => data.get(k) ?? null,
    setItem: (k: string, v: string) => void data.set(k, String(v)),
    removeItem: (k: string) => void data.delete(k),
    clear: () => data.clear(),
    key: (i: number) => [...data.keys()][i] ?? null,
    get length() {
      return data.size;
    },
  });
}

describe("model favourites", () => {
  beforeEach(() => {
    installStorageStub();
    _resetFavourites();
  });

  it("stars and unstars a model", () => {
    expect(isFavourite("openrouter", "google/gemma-4-31b-it:free")).toBe(false);
    expect(toggleFavourite("openrouter", "google/gemma-4-31b-it:free")).toBe(true);
    expect(isFavourite("openrouter", "google/gemma-4-31b-it:free")).toBe(true);
    expect(toggleFavourite("openrouter", "google/gemma-4-31b-it:free")).toBe(false);
    expect(isFavourite("openrouter", "google/gemma-4-31b-it:free")).toBe(false);
  });

  it("keeps the same model id separate per provider", () => {
    // `openai/gpt-oss-20b` is served by both Groq and OpenRouter. Starring it
    // on one must not light it up on the other.
    toggleFavourite("groq", "openai/gpt-oss-20b");
    expect(isFavourite("groq", "openai/gpt-oss-20b")).toBe(true);
    expect(isFavourite("openrouter", "openai/gpt-oss-20b")).toBe(false);
  });

  it("counts only the starred models present in the given list", () => {
    toggleFavourite("openai", "gpt-4o-mini");
    toggleFavourite("openai", "gpt-5.6-sol");
    // A star on a model the provider no longer lists must not be counted —
    // otherwise the badge promises rows the filter cannot show.
    toggleFavourite("openai", "gpt-5.6");
    expect(favouriteCountFor("openai", ["gpt-4o-mini", "gpt-5.6-sol", "gpt-4.1-mini"])).toBe(2);
  });

  it("survives a reload through localStorage", () => {
    toggleFavourite("google", "gemini-3.6-flash");
    expect(JSON.parse(localStorage.getItem("fil_model_picker_favourites") ?? "[]")).toContain(
      "google::gemini-3.6-flash"
    );
  });

  it("starts empty when the stored value is not a list of strings", async () => {
    // A hand-edited or truncated entry must not take the picker down with it.
    localStorage.setItem("fil_model_picker_favourites", '{"nope":1}');
    vi.resetModules();
    const fresh = await import("@/stores/modelFavourites");
    expect(fresh.isFavourite("openai", "gpt-4o")).toBe(false);
    expect(() => fresh.toggleFavourite("openai", "gpt-4o")).not.toThrow();
  });

  it("works when the browser has no storage at all", async () => {
    // Blocked-storage profile: the stars must still work for the session.
    vi.stubGlobal("localStorage", undefined);
    vi.resetModules();
    const fresh = await import("@/stores/modelFavourites");
    expect(() => fresh.toggleFavourite("groq", "qwen/qwen3.6-27b")).not.toThrow();
    expect(fresh.isFavourite("groq", "qwen/qwen3.6-27b")).toBe(true);
  });
});
