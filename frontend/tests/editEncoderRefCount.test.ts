import { describe, it, expect } from "vitest";
import { countRefs } from "@/nodes2/nodes/edit_encoder";
import type { LGraphNode } from "@/types/comfy";

/**
 * The Edit Encoder's panel shows how many references are wired, and it showed
 * zero however many there were.
 *
 * ComfyUI names an Autogrow slot by joining the template prefix to the
 * Autogrow input's own id, so the first reference slot is `images.image0` —
 * the counter matched `^image\d+$`, a spelling that never appears. Found by
 * wiring an image in a running ComfyUI and reading the panel, which is also
 * the only way it could have been found: nothing here was tested.
 */
function node(inputs: { name: string; link: number | null }[]): LGraphNode {
  return { inputs } as unknown as LGraphNode;
}

describe("Edit Encoder reference counter", () => {
  it("counts the slots as ComfyUI actually names them", () => {
    expect(countRefs(node([
      { name: "clip", link: 1 },
      { name: "images.image0", link: 5 },
      { name: "images.image1", link: 6 },
      { name: "images.image2", link: null },
    ]))).toBe(2);
  });

  it("still counts a bare slot name", () => {
    expect(countRefs(node([{ name: "image1", link: 3 }]))).toBe(1);
  });

  it("counts nothing when nothing is wired", () => {
    expect(countRefs(node([
      { name: "clip", link: 1 },
      { name: "images.image0", link: null },
    ]))).toBe(0);
  });

  it("does not mistake another input for a slot", () => {
    expect(countRefs(node([
      { name: "vision_megapixels", link: 2 },
      { name: "prompt", link: 4 },
    ]))).toBe(0);
  });
});
