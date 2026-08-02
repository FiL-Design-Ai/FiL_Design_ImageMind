/**
 * A value set in a panel must reach the native widget the prompt builder reads.
 *
 * ComfyUI builds the queued prompt from `node.widgets[i].value`, never from the
 * DOM widget's state object where the Vue panels keep theirs. `createSyncedNodeState`
 * is the bridge: a Proxy whose `set` trap writes through to the matching widget.
 *
 * Twelve of the fourteen node modules installed it. `seed.ts` and `switch.ts`
 * built a plain object instead, so their panels only worked because every
 * setter also wrote the widget by hand — a convention with nothing enforcing
 * it. Measured against a live ComfyUI on 2026-08-02: writing `nodeState.seed`
 * reached the widget on HighResFix, OpticScanner and KSampler, and did not on
 * FiLSeed. The 🔀 Switch defect fixed in 4f278d5 was the same gap from the
 * other side — a dead watcher that was the only path to the widget.
 *
 * This drives each module's real `onNodeCreated`, rather than rebuilding what
 * it is believed to produce, because a hand-made copy of the state is exactly
 * what would keep agreeing with the mistake.
 */
import { describe, it, expect, vi } from "vitest";
import { NODE_MODULES } from "@/nodes2/nodeRegistry";
import { createNode } from "./fakes/comfyHost";
import contracts from "@/api/contracts.json";

// Mounting a real Vue panel is not what is under test here, and the async
// components would drag every node's whole subtree into this file.
vi.mock("@/nodes2/domWidgetHost", () => ({
  addFilDomWidget: () => ({ name: "fil_view", value: {} }),
  unmountAllFilWidgets: () => {},
}));

type ContractWidget = { name: string; default?: unknown };

function widgetNamesFor(nodeId: string): string[] {
  const entry = (contracts as { data: Record<string, { inputs?: { required?: ContractWidget[]; optional?: ContractWidget[] } }> })
    .data[nodeId];
  if (!entry?.inputs) return [];
  return [...(entry.inputs.required ?? []), ...(entry.inputs.optional ?? [])].map((w) => w.name);
}

/** The state object a module parks on the node, whatever key it chose. */
function parkedState(node: Record<string, unknown>): { nodeState: Record<string, unknown> } | null {
  for (const key of Object.keys(node)) {
    const value = node[key];
    if (value && typeof value === "object" && "nodeState" in (value as object)) {
      return value as { nodeState: Record<string, unknown> };
    }
  }
  return null;
}

function buildNode(nodeId: string) {
  const names = widgetNamesFor(nodeId);
  const node = createNode({
    comfyClass: nodeId,
    widgets: names.map((name) => ({ name, value: null })),
  });
  const nodeType = { prototype: {} } as { prototype: Record<string, unknown> };
  NODE_MODULES[nodeId].register(nodeType as never, {
    name: nodeId,
    input: { required: {} },
    output: [],
    output_name: [],
  } as never);

  const created = nodeType.prototype.onNodeCreated as ((this: unknown) => void) | undefined;
  created?.call(node);
  return { node, state: parkedState(node as unknown as Record<string, unknown>) };
}

describe("panel state reaches the native widgets", () => {
  const ids = Object.keys(NODE_MODULES);

  it("covers every registered node", () => {
    expect(ids.length).toBeGreaterThan(0);
  });

  for (const nodeId of ids) {
    it(`${nodeId}: a write to nodeState lands on the widget of the same name`, () => {
      const { node, state } = buildNode(nodeId);
      if (!state) return; // A module with no panel state has nothing to mirror.

      const widgets = node.widgets as Array<{ name: string; value: unknown }>;
      const mirrored = Object.keys(state.nodeState).filter((key) =>
        widgets.some((w) => w.name === key),
      );
      if (!mirrored.length) return; // Panel-only state (ui flags, modes) has no widget behind it.

      // What is asserted is the mechanism — that writing `nodeState` mirrors at
      // all — not that any one name is a native widget on the real node. The
      // fake's widget set is built from the frontend contract, which also lists
      // panel-only fields (`mode` on FiLSeed has no native widget behind it), so
      // a name here is not proof that ComfyUI creates one.
      for (const key of mirrored) {
        const widget = widgets.find((w) => w.name === key)!;
        const sentinel = `__mirror_${key}__`;
        state.nodeState[key] = sentinel;
        expect(
          widget.value,
          `${nodeId}: nodeState.${key} was written and the widget did not follow — this module is ` +
            "building a plain object instead of createSyncedNodeState, so anything the panel sets " +
            "stops before the queued prompt",
        ).toBe(sentinel);
      }
    });
  }
});
