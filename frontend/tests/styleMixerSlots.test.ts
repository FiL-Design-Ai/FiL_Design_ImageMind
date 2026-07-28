import { describe, it, expect } from "vitest";
import { updateImageSlotVisibility } from "@/nodes2/nodes/style_mixer";

/**
 * Style Mixer hides the image slots it does not need yet, by replacing
 * `node.inputs` with a filtered view of the full schema list it parked in
 * `_allInputs`.
 *
 * Reported live: after a reload the node came back with every wire gone and the
 * panel on defaults. `configure()` hands the node a *fresh* `inputs` array
 * carrying the workflow's links, and the filter used to overwrite it with the
 * stale objects from `_allInputs`, whose `link` was still null.
 */

interface Slot { name: string; type: string; link: number | null }

function slot(name: string, link: number | null = null): Slot {
  return { name, type: "IMAGE", link };
}

function makeNode(inputs: Slot[], links: Record<number, { target_slot?: number }> = {}) {
  return {
    inputs,
    graph: { links },
    setSize: () => {},
    computeSize: () => [380, 320],
    setDirtyCanvas: () => {},
  } as Record<string, unknown>;
}

const fullSchema = () => [
  slot("config"), slot("image_1"), slot("image_2"), slot("image_3"), slot("image_4"),
  slot("fusion_mode"), slot("base_prompt"),
];

const names = (node: Record<string, unknown>) => (node.inputs as Slot[]).map((i) => i.name);
const linked = (node: Record<string, unknown>) =>
  (node.inputs as Slot[]).filter((i) => i.link != null).map((i) => i.name);

describe("Style Mixer slot visibility", () => {
  it("hides the image slots that are not in play yet", () => {
    const node = makeNode(fullSchema());
    updateImageSlotVisibility(node);
    expect(names(node)).toEqual(["config", "image_1", "image_2", "fusion_mode", "base_prompt"]);
  });

  it("reveals the next slot as the previous one gets wired", () => {
    const node = makeNode(fullSchema());
    updateImageSlotVisibility(node);
    (node._allInputs as Slot[]).find((i) => i.name === "image_2")!.link = 7;
    updateImageSlotVisibility(node);
    expect(names(node)).toContain("image_3");
    expect(names(node)).not.toContain("image_4");
  });

  it("keeps links that configure() restored into a fresh inputs array", () => {
    const node = makeNode(fullSchema());
    updateImageSlotVisibility(node); // node now carries the filtered view

    // What LiteGraph does on load: a brand-new array, different objects.
    node.inputs = [slot("config"), slot("image_1", 5), slot("image_2", 6), slot("fusion_mode"), slot("base_prompt")];
    (node.graph as { links: Record<number, { target_slot?: number }> }).links = {
      5: { target_slot: 99 },
      6: { target_slot: 99 },
    };
    updateImageSlotVisibility(node);

    expect(linked(node)).toEqual(["image_1", "image_2"]);
    // image_2 being wired brings image_3 back too.
    expect(names(node)).toContain("image_3");
  });

  it("renumbers each link against the slot order it ends up in", () => {
    const node = makeNode(fullSchema());
    updateImageSlotVisibility(node);
    node.inputs = [slot("config"), slot("image_1", 5), slot("image_2", 6), slot("fusion_mode"), slot("base_prompt")];
    const links: Record<number, { target_slot?: number }> = { 5: { target_slot: 99 }, 6: { target_slot: 99 } };
    (node.graph as { links: typeof links }).links = links;

    updateImageSlotVisibility(node);

    const order = names(node);
    expect(links[5].target_slot).toBe(order.indexOf("image_1"));
    expect(links[6].target_slot).toBe(order.indexOf("image_2"));
  });

  it("does not drop a wire on a slot the filter hides", () => {
    const node = makeNode(fullSchema());
    updateImageSlotVisibility(node);
    // image_4 arrives wired but hidden; the link must survive in _allInputs so
    // it comes back the moment image_3 is connected.
    node.inputs = [slot("config"), slot("image_1", 5), slot("image_4", 8), slot("fusion_mode"), slot("base_prompt")];
    updateImageSlotVisibility(node);

    const stored = (node._allInputs as Slot[]).find((i) => i.name === "image_4");
    expect(stored?.link).toBe(8);
  });
});
