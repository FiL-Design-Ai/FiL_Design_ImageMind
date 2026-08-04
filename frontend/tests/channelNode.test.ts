/**
 * `nodes2/nodes/channel.ts`'s own dispatch logic: which `onConnectionsChange`
 * calls are allowed to queue an ambiguity check for the panel to raise.
 *
 * The panel itself (`ChannelPanel.vue`) is not mounted here — `addFilDomWidget`
 * is mocked, the same way `nodeStateMirror.test.ts` does it, so this stays
 * about the one thing that could get the *trigger* wrong: firing on a
 * disconnect, or on this node's non-existent output side, would flag a check
 * at a moment nobody asked for anything. The queue itself lands on the plain
 * node object, not on `state.ui`, precisely because the panel may not be
 * mounted yet when this fires — see `channel.ts`'s own comment on why a direct
 * callback was tried first and dropped.
 */
import { describe, it, expect, vi, afterEach } from "vitest";
import { channelNode } from "@/nodes2/nodes/channel";
import { beginGraphConfigure, endGraphConfigure } from "@/nodes2/wireless";
import { createNode } from "./fakes/comfyHost";

vi.mock("@/nodes2/domWidgetHost", () => ({
  addFilDomWidget: () => ({ name: "fil_channel_view", value: {} }),
  unmountAllFilWidgets: () => {},
}));

interface ChannelState {
  ui: { refresh?: () => void };
}
interface ChannelNode {
  _filChannelState: ChannelState;
  _filPendingAmbiguityChecks?: number[];
}

function buildChannelNode() {
  const node = createNode({ comfyClass: "FiLChannel" });
  const nodeType = { prototype: {} } as { prototype: Record<string, unknown> };
  channelNode.register(nodeType as never, { name: "FiLChannel" } as never);
  (nodeType.prototype.onNodeCreated as (this: unknown) => unknown).call(node);
  const state = (node as unknown as ChannelNode)._filChannelState;
  return { node: node as unknown as ChannelNode, nodeType, state };
}

describe("channel.ts — onConnectionsChange dispatch", () => {
  it("queues an ambiguity check when a new wire lands in one of its own inputs", () => {
    const { node, nodeType } = buildChannelNode();

    // LGraphNode.ts: onConnectionsChange(NodeSlotType.INPUT, slot, connected, link_info, ioInfo).
    (nodeType.prototype.onConnectionsChange as (...a: unknown[]) => unknown).call(node, 1, 0, true, {}, {});

    expect(node._filPendingAmbiguityChecks).toEqual([0]);
  });

  it("does not queue one on a disconnect — nothing to decide when a wire is removed", () => {
    const { node, nodeType } = buildChannelNode();

    (nodeType.prototype.onConnectionsChange as (...a: unknown[]) => unknown).call(node, 1, 0, false, {}, {});

    expect(node._filPendingAmbiguityChecks).toBeUndefined();
  });

  it("does not queue one for the output side — this node declares none, and nothing there is a decision", () => {
    const { node, nodeType } = buildChannelNode();

    (nodeType.prototype.onConnectionsChange as (...a: unknown[]) => unknown).call(node, 2, 0, true, {}, {});

    expect(node._filPendingAmbiguityChecks).toBeUndefined();
  });

  it("appends across repeated connects rather than overwriting", () => {
    const { node, nodeType } = buildChannelNode();

    (nodeType.prototype.onConnectionsChange as (...a: unknown[]) => unknown).call(node, 1, 0, true, {}, {});
    (nodeType.prototype.onConnectionsChange as (...a: unknown[]) => unknown).call(node, 1, 1, true, {}, {});

    expect(node._filPendingAmbiguityChecks).toEqual([0, 1]);
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
    expect((node as unknown as ChannelNode)._filPendingAmbiguityChecks).toEqual([0]);
  });

  /**
   * The live bug a workflow switch produced: restoring a saved graph
   * re-announces every existing link to `onConnectionsChange` the same shape
   * as a brand-new one, side 1, connected true — so without this guard, every
   * open (fresh or a tab switch back) re-queued a check for links that had
   * been resolved and left alone since the file was saved.
   */
  describe("while a graph is loading", () => {
    afterEach(() => {
      endGraphConfigure(); // clamps at zero — safe even if a test below balanced its own
    });

    it("does not queue a check for a link the loader is restoring, not the user", () => {
      const { node, nodeType } = buildChannelNode();
      beginGraphConfigure();

      (nodeType.prototype.onConnectionsChange as (...a: unknown[]) => unknown).call(node, 1, 0, true, {}, {});

      expect(node._filPendingAmbiguityChecks).toBeUndefined();
    });

    it("still refreshes during a load — the channel list and colours must stay correct either way", () => {
      const { node, nodeType, state } = buildChannelNode();
      const refresh = vi.fn();
      state.ui.refresh = refresh;
      beginGraphConfigure();

      (nodeType.prototype.onConnectionsChange as (...a: unknown[]) => unknown).call(node, 1, 0, true, {}, {});

      expect(refresh).toHaveBeenCalledTimes(1);
    });

    it("resumes queuing checks once the load ends", () => {
      const { node, nodeType } = buildChannelNode();
      beginGraphConfigure();
      (nodeType.prototype.onConnectionsChange as (...a: unknown[]) => unknown).call(node, 1, 0, true, {}, {});
      endGraphConfigure();

      // A real wire the user draws after the workflow has finished opening.
      (nodeType.prototype.onConnectionsChange as (...a: unknown[]) => unknown).call(node, 1, 1, true, {}, {});

      expect(node._filPendingAmbiguityChecks).toEqual([1]);
    });
  });
});
