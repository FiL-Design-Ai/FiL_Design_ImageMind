/**
 * `stores/wirelessMemory.ts` — where the user said a channel goes, remembered
 * by name. The invariant under test: this store only ever *pre-selects*. It
 * has no path into `resolve.ts`, so nothing it remembers can wire anything on
 * its own; the worst it can do is suggest.
 */
import { describe, it, expect, beforeEach } from "vitest";
import {
  PAIRS_CAP,
  memoryKey,
  noteChannelPairs,
  pairedInputFor,
  _resetWirelessMemory,
} from "@/stores/wirelessMemory";

describe("wirelessMemory", () => {
  beforeEach(() => {
    _resetWirelessMemory();
  });

  it("starts empty and reports an unknown channel as undefined", () => {
    expect(pairedInputFor("negative")).toBeUndefined();
  });

  it("remembers a confirmed pair and reads it back by channel name", () => {
    noteChannelPairs([{ channelName: "negative", inputName: "negative" }]);
    expect(pairedInputFor("negative")).toBe("negative");
  });

  // Case and incidental whitespace do not change which channel a name is;
  // the auto-number does — it is how same-type channels are told apart.
  it("ignores case and whitespace, but keeps the number", () => {
    noteChannelPairs([{ channelName: "NEG", inputName: "negative" }]);
    expect(pairedInputFor("neg")).toBe("negative");
    expect(pairedInputFor("  Neg ")).toBe("negative");
    expect(pairedInputFor("NEG 2")).toBeUndefined();
    expect(memoryKey("  Positive  ")).toBe("positive");
    expect(memoryKey("NEG   2")).toBe("neg 2");
    expect(memoryKey("NEG 2")).not.toBe(memoryKey("NEG"));
  });

  it("a later confirm replaces an earlier one for the same name", () => {
    noteChannelPairs([{ channelName: "cond", inputName: "positive" }]);
    noteChannelPairs([{ channelName: "cond", inputName: "negative" }]);
    expect(pairedInputFor("cond")).toBe("negative");
  });

  it("skips entries without a usable channel name or input", () => {
    noteChannelPairs([
      { channelName: "", inputName: "positive" },
      { channelName: "   ", inputName: "positive" },
      { channelName: "cond", inputName: "   " },
    ]);
    expect(pairedInputFor("cond")).toBeUndefined();
  });

  it("drops the least recently confirmed past the cap", () => {
    for (let i = 0; i < PAIRS_CAP + 5; i++) {
      noteChannelPairs([{ channelName: `cond-${i}`, inputName: "positive" }]);
    }
    expect(pairedInputFor("cond-0")).toBeUndefined();
    expect(pairedInputFor(`cond-${PAIRS_CAP + 4}`)).toBe("positive");
  });

  it("survives junk in storage", () => {
    localStorage.setItem("fil_wireless_pairs", "{not json");
    // The module has already loaded, so prove the guard by writing and reading
    // back through the public API: a bad value must not stop a later write.
    noteChannelPairs([{ channelName: "negative", inputName: "negative" }]);
    expect(pairedInputFor("negative")).toBe("negative");
  });
});
