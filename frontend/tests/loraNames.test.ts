/**
 * The row shows the shortest name that still tells the stack apart.
 *
 * The value written into `lora_list` is untouched by any of this — these are
 * labels. The cases below are the ones the choice was made on: a plain stack
 * where folders are noise, two files that really are called the same thing,
 * and the same file listed twice, which is not ambiguity and has nothing to
 * grow towards.
 */
import { describe, it, expect } from "vitest";
import { stackDisplayNames } from "@/nodes2/loraNames";

describe("stackDisplayNames", () => {
  it("drops the folder and the extension when nothing collides", () => {
    expect(
      stackDisplayNames([
        "Ideogram\\Eva\\Eva_epoch_10_ideo4.safetensors",
        "Krea2\\realism_engine_krea2_v2.safetensors",
        "plain_lora.safetensors",
      ]),
    ).toEqual(["Eva_epoch_10_ideo4", "realism_engine_krea2_v2", "plain_lora"]);
  });

  it("adds a folder to the entries that collide, and only to those", () => {
    expect(
      stackDisplayNames([
        "sdxl\\style.safetensors",
        "flux\\style.safetensors",
        "Krea2\\realism_engine.safetensors",
      ]),
    ).toEqual(["sdxl\\style", "flux\\style", "realism_engine"]);
  });

  it("keeps growing while the folder above is shared too", () => {
    expect(
      stackDisplayNames([
        "packs\\a\\shared\\style.safetensors",
        "packs\\b\\shared\\style.safetensors",
      ]),
    ).toEqual(["a\\shared\\style", "b\\shared\\style"]);
  });

  it("leaves the same file listed twice alone", () => {
    // Two rows of one LoRA at different weights is a real thing to do, and
    // there is no longer form that would separate them.
    expect(
      stackDisplayNames(["sdxl\\style.safetensors", "sdxl\\style.safetensors"]),
    ).toEqual(["style", "style"]);
  });

  it("handles forward slashes and a bare name", () => {
    expect(stackDisplayNames(["Ideogram/Eva/x.safetensors", "y.ckpt"])).toEqual(["x", "y"]);
  });

  it("gives an empty stack nothing to name", () => {
    expect(stackDisplayNames([])).toEqual([]);
  });
});
