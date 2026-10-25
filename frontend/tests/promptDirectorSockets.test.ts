import { describe, it, expect } from "vitest";
import { exposeWidgetInputSockets } from "@/nodes2/widgetInputSockets";
import { DIRECTOR_SOCKET_INPUTS } from "@/nodes2/nodes/prompt_director";

/**
 * Where a wire dropped on Prompt Director's seed lands.
 *
 * The seed is an INT widget that the Vue panel hides and draws on its own row at
 * the bottom. If its socket is not exposed, that row has no dot and an INT wire
 * has nothing to land on except the nearest text socket — the instruction box.
 * The seed row must get a socket of its own, inside the node body.
 */

interface Slot {
  name: string;
  widget?: { name?: string } | null;
  link?: number | null;
  alwaysVisible?: boolean;
}

function directorNode() {
  const inputs: Slot[] = [
    { name: "config" },
    { name: "instruction", widget: { name: "instruction" } },
    { name: "source_prompt", widget: { name: "source_prompt" } },
    { name: "language", widget: { name: "language" } },
    { name: "seed", widget: { name: "seed" } },
    { name: "mode", widget: { name: "mode" } },
    { name: "camera_motion", widget: { name: "camera_motion" } },
  ];
  const widgets = inputs.filter((i) => i.widget).map((i) => ({ name: i.name, y: 0, options: {} }));
  return {
    inputs,
    widgets,
    pos: [0, 0] as [number, number],
    size: [340, 300] as [number, number],
    graph: { setDirtyCanvas: () => undefined },
    _filSocketPolicy: undefined as "always" | "linked" | undefined,
  };
}

describe("Prompt Director sockets", () => {
  it("gives the seed a socket row inside the node body", () => {
    const node = directorNode();
    exposeWidgetInputSockets(node, DIRECTOR_SOCKET_INPUTS);

    const seedWidget = node.widgets.find((w) => w.name === "seed");
    const instructionWidget = node.widgets.find((w) => w.name === "instruction");
    expect(seedWidget).toBeDefined();
    expect(instructionWidget).toBeDefined();
    // Parked below the node's bottom edge means no socket on the node at all.
    expect(seedWidget!.y).toBeLessThan(node.size[1]);
    expect(seedWidget!.y).not.toBe(instructionWidget!.y);
  });
});
