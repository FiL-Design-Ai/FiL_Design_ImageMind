import { describe, it, expect } from "vitest";
import { ALL_SETTINGS } from "@/stores/settings/allSettings";
import { SETTINGS_CATEGORY } from "@/constants/brand";

/**
 * The settings panel is not free-form: ComfyUI reads `category` as
 * `[section-group, section, slot]`, and getting that shape wrong loses
 * settings silently.
 *
 * Measured on a live 1.47.10: with a two-level category the host treats the
 * *section* as the setting's slot, so everything sharing a section collapses
 * into one row and only the last registered survives. Four of this pack's ten
 * settings were invisible that way — including the theme picker — while every
 * test stayed green, because nothing looked at the panel. Core has the same bug
 * with its own `["Appearance", "General"]` pair, so this is the host's contract
 * and not something a future ComfyUI is likely to relax.
 */

describe("settings panel layout", () => {
  it("gives every setting a three-level category", () => {
    const wrong = ALL_SETTINGS.filter((s) => !Array.isArray(s.category) || s.category.length !== 3);
    expect(
      wrong.map((s) => `${s.id}: ${JSON.stringify(s.category)}`),
      "a two-level category makes the setting collide with its section-mates and vanish",
    ).toEqual([]);
  });

  it("never lets two settings share a slot", () => {
    const slots = new Map<string, string[]>();
    for (const s of ALL_SETTINGS) {
      const key = (s.category as string[]).join(" / ");
      slots.set(key, [...(slots.get(key) ?? []), s.id!]);
    }
    const collisions = [...slots].filter(([, ids]) => ids.length > 1);
    expect(
      collisions.map(([slot, ids]) => `${slot} <- ${ids.join(", ")}`),
      "settings sharing a full category path overwrite each other in the panel",
    ).toEqual([]);
  });

  it("files everything under this pack's own heading", () => {
    const strays = ALL_SETTINGS.filter((s) => (s.category as string[])[0] !== SETTINGS_CATEGORY);
    expect(strays.map((s) => s.id)).toEqual([]);
  });

  it("keeps the panel to four sections", () => {
    // Sections are sorted alphabetically by the host, and a section holding one
    // row is a heading that earns nothing — this used to be six sections for
    // ten settings, four of them singletons. Wireless is the one section that
    // is not a generic bucket: all three of its settings belong to one node
    // (📡 Channel), so it gets pulled out of "Canvas" instead of hiding there.
    const sections = [...new Set(ALL_SETTINGS.map((s) => (s.category as string[])[1]))].sort();
    expect(sections).toEqual(["Appearance", "Canvas", "General", "Wireless"]);
  });

  it("leaves no section with a single row", () => {
    const counts = new Map<string, number>();
    for (const s of ALL_SETTINGS) {
      const section = (s.category as string[])[1];
      counts.set(section, (counts.get(section) ?? 0) + 1);
    }
    const singles = [...counts].filter(([, n]) => n < 2).map(([name]) => name);
    expect(singles).toEqual([]);
  });

  it("gives every setting an id, a name and a tooltip", () => {
    const bare = ALL_SETTINGS.filter((s) => !s.id || !s.name || !s.tooltip);
    expect(bare.map((s) => s.id ?? "(no id)")).toEqual([]);
  });

  it("registers each id once", () => {
    const ids = ALL_SETTINGS.map((s) => s.id);
    expect(ids.length).toBe(new Set(ids).size);
  });
});
