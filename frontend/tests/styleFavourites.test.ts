import { beforeEach, describe, expect, it, vi } from "vitest";

import {
  isStyleFavourite,
  toggleStyleFavourite,
  favouriteStyleCount,
  _resetStyleFavourites,
} from "@/stores/styleFavourites";

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

describe("style favourites", () => {
  beforeEach(() => {
    installStorageStub();
    _resetStyleFavourites();
  });

  it("stars and unstars a style", () => {
    const styleKey = "📷 КАМЕРЫ/🎞️ Raw 35mm Photo";
    expect(isStyleFavourite(styleKey)).toBe(false);
    expect(toggleStyleFavourite(styleKey)).toBe(true);
    expect(isStyleFavourite(styleKey)).toBe(true);
    expect(toggleStyleFavourite(styleKey)).toBe(false);
    expect(isStyleFavourite(styleKey)).toBe(false);
  });

  it("normalises whitespace when toggling and checking", () => {
    const styleKey = "  🎬 КИНО/🌑 Film Noir  ";
    toggleStyleFavourite(styleKey);
    expect(isStyleFavourite("🎬 КИНО/🌑 Film Noir")).toBe(true);
  });

  it("counts only the starred styles present in the candidate list", () => {
    toggleStyleFavourite("📷 КАМЕРЫ/🎞️ Raw 35mm Photo");
    toggleStyleFavourite("🎬 КИНО/🌑 Film Noir");
    // Extra style starred that is not in candidates
    toggleStyleFavourite("🖌️ ЖИВОПИСЬ/🎨 Oil Painting");

    const candidates = [
      "📷 КАМЕРЫ/🎞️ Raw 35mm Photo",
      "🎬 КИНО/🌑 Film Noir",
      "📷 КАМЕРЫ/📸 Polaroid 600",
    ];
    expect(favouriteStyleCount(candidates)).toBe(2);
  });

  it("handles broken json in localStorage gracefully", () => {
    localStorage.setItem("fil_style_picker_favourites", "not-json-{{{");
    _resetStyleFavourites();
    expect(isStyleFavourite("any")).toBe(false);
  });
});
