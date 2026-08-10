/**
 * Channel colours — the dashed link must land on a socket of the same colour.
 *
 * The palette comes from `installHostPalette`, which puts it exactly where
 * ComfyUI puts it, because that is the half this feature got wrong: the old
 * version of these tests invented `globalThis.LiteGraph.link_type_colors` —
 * a registry the host has never had — so they passed while every channel on a
 * real canvas silently wore its name-hash fallback. Each case below names
 * which of the host's three stores it is exercising.
 */
import { afterEach, describe, expect, it } from "vitest";

import { channelColor, channelColorFor, soften, typeColor } from "@/nodes2/wireless/channelColor";
import { installHostPalette } from "./fakes/comfyHost";

let undo: (() => void) | null = null;

function palette(spec: Parameters<typeof installHostPalette>[0]): void {
  undo?.();
  undo = installHostPalette(spec);
}

afterEach(() => {
  undo?.();
  undo = null;
});

describe("typeColor", () => {
  it("reads the colour the classic renderer paints a connected socket with", () => {
    palette({ colors: { MODEL: "#b39ddb", INT: "#9fe89f" } });
    expect(typeColor("MODEL")).toBe("#b39ddb");
    expect(typeColor("INT")).toBe("#9fe89f");
  });

  it("treats a type the host blanked as having no colour, not as an empty one", () => {
    // The trap that would have survived fixing the address alone: the host
    // pre-fills every known type with "", and `?? ` hands that on as a colour.
    palette({ colors: { MODEL: "#b39ddb" }, blank: ["LATENT"] });
    expect(typeColor("LATENT")).toBeNull();
  });

  it("falls back to the Nodes 2.0 CSS variable when neither map carries the type", () => {
    palette({ colors: { MODEL: "#b39ddb" }, cssOnly: { CUSTOM_TYPE: "#ff8800" } });
    expect(typeColor("CUSTOM_TYPE")).toBe("#ff8800");
  });

  it("is null with no host palette at all, and for a type nobody paints", () => {
    expect(typeColor("MODEL")).toBeNull();
    palette({ colors: { MODEL: "#b39ddb" } });
    expect(typeColor("SOMETHING_ELSE")).toBeNull();
  });
});

describe("channelColorFor", () => {
  it("prefers the type colour, so the link matches the socket it lands in", () => {
    palette({ colors: { MODEL: "#b39ddb" } });
    expect(channelColorFor({ name: "MODEL", type: "MODEL" })).toBe("#b39ddb");
    // A renamed channel still wears its type's colour — the data decides.
    expect(channelColorFor({ name: "Base model", type: "MODEL" })).toBe("#b39ddb");
  });

  it("gives two channels of one type the same colour — the name tells them apart", () => {
    palette({ colors: { CONDITIONING: "#ffa931" } });
    expect(channelColorFor({ name: "positive", type: "CONDITIONING" })).toBe("#ffa931");
    expect(channelColorFor({ name: "negative", type: "CONDITIONING" })).toBe("#ffa931");
  });

  it("falls back to the stable name-hash colour when the host paints the type with nothing", () => {
    palette({ blank: ["MYSTERY_TYPE"] });
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

  it("rebuilds a legacy comma rgb() rather than appending a slash to it", () => {
    // `rgb(179, 157, 219 / 0.55)` is not valid CSS and paints as the previous
    // colour, which reads as a different bug entirely.
    expect(soften("rgb(179, 157, 219)", 0.55)).toBe("rgb(179 157 219 / 0.55)");
    expect(soften("rgba(179, 157, 219, 0.8)", 0.55)).toBe("rgb(179 157 219 / 0.55)");
  });

  it("appends alpha to its own hsl shape", () => {
    expect(soften("hsl(270 70% 62%)", 0.9)).toBe("hsl(270 70% 62% / 0.9)");
  });

  it("leaves anything else untouched rather than breaking the frame", () => {
    expect(soften("currentColor", 0.5)).toBe("currentColor");
  });
});
