/**
 * Channel colours — the dashed link must land on a socket of the same colour.
 *
 * The host paints slots from `LiteGraph.link_type_colors`; the overlay and
 * the panel read that same registry, and only fall back to the name-hash
 * colour when the host has nothing for the type. These pin both halves, plus
 * the `soften` helper the borders and label fills go through.
 */
import { afterEach, describe, expect, it } from "vitest";

import { channelColor, channelColorFor, soften, typeColor } from "@/nodes2/wireless/channelColor";

const host = globalThis as { LiteGraph?: { link_type_colors?: Record<string, string> } };

afterEach(() => {
  delete host.LiteGraph;
});

describe("typeColor", () => {
  it("reads the host's own registry — the colours real wires are drawn with", () => {
    host.LiteGraph = { link_type_colors: { MODEL: "#b39ddb", INT: "#9fe89f" } };
    expect(typeColor("MODEL")).toBe("#b39ddb");
    expect(typeColor("INT")).toBe("#9fe89f");
  });

  it("is null when the host has no registry, or no entry for the type", () => {
    expect(typeColor("MODEL")).toBeNull(); // no LiteGraph at all
    host.LiteGraph = { link_type_colors: { MODEL: "#b39ddb" } };
    expect(typeColor("SOMETHING_ELSE")).toBeNull();
  });
});

describe("channelColorFor", () => {
  it("prefers the type colour, so the link matches the socket it lands in", () => {
    host.LiteGraph = { link_type_colors: { MODEL: "#b39ddb" } };
    expect(channelColorFor({ name: "MODEL", type: "MODEL" })).toBe("#b39ddb");
    // A renamed channel still wears its type's colour — the data decides.
    expect(channelColorFor({ name: "Base model", type: "MODEL" })).toBe("#b39ddb");
  });

  it("falls back to the stable name-hash colour when the host paints the type with nothing", () => {
    host.LiteGraph = { link_type_colors: {} };
    expect(channelColorFor({ name: "MYSTERY", type: "MYSTERY_TYPE" })).toBe(channelColor("MYSTERY"));
    // And the fallback is stable — the point of hashing the name.
    expect(channelColorFor({ name: "MYSTERY", type: "MYSTERY_TYPE" })).toBe(channelColor("MYSTERY"));
  });
});

describe("soften", () => {
  it("turns the host's #rrggbb into a translucent rgb", () => {
    expect(soften("#b39ddb", 0.55)).toBe("rgb(179 157 219 / 0.55)");
  });

  it("expands #rgb shorthand", () => {
    expect(soften("#abc", 0.5)).toBe("rgb(170 187 204 / 0.5)");
  });

  it("appends alpha to its own hsl shape", () => {
    expect(soften("hsl(270 70% 62%)", 0.9)).toBe("hsl(270 70% 62% / 0.9)");
  });

  it("leaves anything else untouched rather than breaking the frame", () => {
    expect(soften("currentColor", 0.5)).toBe("currentColor");
  });
});
