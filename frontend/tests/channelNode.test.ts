/**
 * `nodes2/nodes/channel.ts`'s own dispatch logic: which `onConnectionsChange`
 * calls are allowed to raise the panel's target-list modal unprompted.
 *
 * The panel itself (`ChannelPanel.vue`) is not mounted here — `addFilDomWidget`
 * is mocked, the same way `nodeStateMirror.test.ts` does it, so this stays
 * about the one thing that could get the *trigger* wrong: firing on a
 * disconnect, or on this node's non-existent output side, would pop the modal
 * at a moment nobody asked for anything.
 */
import { describe, it, expect, vi } from "vitest";
import { channelNode } from "@/nodes2/nodes/channel";
import { createNode } from "./fakes/comfyHost";

vi.mock("@/nodes2/domWidgetHost", () => ({
  addFilDomWidget: () => ({ name: "fil_channel_view", value: {} }),
  unmountAllFilWidgets: () => {},
}));

interface ChannelState {
  ui: { refresh?: () => void; promptAmbiguity?: (slot: number) => void };
}

function buildChannelNode() {
  const node = createNode({ comfyClass: "FiLChannel" });
  const nodeType = { prototype: {} } as { prototype: Record<string, unknown> };
  channelNode.register(nodeType as never, { name: "FiLChannel" } as never);
  (nodeType.prototype.onNodeCreated as (this: unknown) => unknown).call(node);
  const state = (node as unknown as { _filChannelState: ChannelState })._filChannelState;
  return { node, nodeType, state };
}

describe("channel.ts — onConnectionsChange dispatch", () => {
  it("calls promptAmbiguity when a new wire lands in one of its own inputs", () => {
    const { node, nodeType, state } = buildChannelNode();
    const promptAmbiguity = vi.fn();
    state.ui.promptAmbiguity = promptAmbiguity;

    // LGraphNode.ts: onConnectionsChange(NodeSlotType.INPUT, slot, connected, link_info, ioInfo).
    (nodeType.prototype.onConnectionsChange as (...a: unknown[]) => unknown).call(node, 1, 0, true, {}, {});

    expect(promptAmbiguity).toHaveBeenCalledWith(0);
  });

  it("does not call it on a disconnect — nothing to decide when a wire is removed", () => {
    const { node, nodeType, state } = buildChannelNode();
    const promptAmbiguity = vi.fn();
    state.ui.promptAmbiguity = promptAmbiguity;

    (nodeType.prototype.onConnectionsChange as (...a: unknown[]) => unknown).call(node, 1, 0, false, {}, {});

    expect(promptAmbiguity).not.toHaveBeenCalled();
  });

  it("does not call it for the output side — this node declares none, and nothing there is a decision", () => {
    const { node, nodeType, state } = buildChannelNode();
    const promptAmbiguity = vi.fn();
    state.ui.promptAmbiguity = promptAmbiguity;

    (nodeType.prototype.onConnectionsChange as (...a: unknown[]) => unknown).call(node, 2, 0, true, {}, {});

    expect(promptAmbiguity).not.toHaveBeenCalled();
  });

  it("still refreshes and re-labels on every connection change, prompt or not", () => {
    const { node, nodeType, state } = buildChannelNode();
    const refresh = vi.fn();
    state.ui.refresh = refresh;

    (nodeType.prototype.onConnectionsChange as (...a: unknown[]) => unknown).call(node, 1, 0, false, {}, {});

    expect(refresh).toHaveBeenCalledTimes(1);
  });

  it("does nothing if no panel has mounted yet — no crash on a bare node", () => {
    const node = createNode({ comfyClass: "FiLChannel" });
    const nodeType = { prototype: {} } as { prototype: Record<string, unknown> };
    channelNode.register(nodeType as never, { name: "FiLChannel" } as never);
    // onNodeCreated deliberately not called — no `_filChannelState` exists yet.
    expect(() =>
      (nodeType.prototype.onConnectionsChange as (...a: unknown[]) => unknown).call(node, 1, 0, true, {}, {}),
    ).not.toThrow();
  });
});
