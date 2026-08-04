import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { applyFxComposables } from "@/nodes2/applyFxComposables";
import { graphBeingConfigured, invalidateWirelessPlan } from "@/nodes2/wireless";

const ChannelPanelVue = defineAsyncComponent(() => import("@/components/nodes/ChannelPanel.vue"));

/**
 * FiLChannel — the wireless transmitter.
 *
 * The node itself holds nothing: its inputs grow as they are used and every
 * wired one is a channel, so all this module adds is pack styling and the panel
 * that lists those channels and lets the user pick where each goes.
 *
 * An earlier version of this module wrote the carried data type onto each
 * slot's `label` as a visual hint. That field is also where LiteGraph's own
 * "Rename Slot" writes — and `nodes2/wireless/channels.ts` reads it as the
 * channel's *name*. The two collided: the decoration silently became the
 * name, so a MODEL channel showed up named "model" instead of "MODEL", and a
 * user's own rename was indistinguishable from the pack's own writes. Fixed
 * by removing the decoration rather than trying to tell the two apart —
 * the wireless overlay already draws the channel's name (which falls back to
 * its type) next to every input it feeds, so nothing is lost.
 */
export const channelNode: NodeModule = {
  id: "FiLChannel",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [220, 80],
      family: "tool",
      description: "Send data across the graph without wires.",
      badges: [{ text: "CHANNEL", color: "#a78bfa", text_color: "#000" }],
    });

    const proto = (nodeType as { prototype: Record<string, unknown> }).prototype;

    const originalCreated = proto.onNodeCreated as ((...a: unknown[]) => unknown) | undefined;
    proto.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);

      // Nothing to sync: this node has no widgets, and channels are derived from
      // the graph on every read rather than stored. `state` exists only to hand
      // the panel its node.
      const state = { nodeState: {}, initialValues: {}, ui: {} };
      Object.defineProperty(state, "node", { value: this, enumerable: false, configurable: true });

      // One row per channel plus the empty-state line; the host measures the
      // panel's real content and resizes from there, so this is the first paint
      // only (`nodes2/host/heightModel.ts`).
      addFilDomWidget(this, "fil_channel_view", ChannelPanelVue, { state, height: 40 });
      (this as { _filChannelState?: unknown })._filChannelState = state;
      return result;
    };

    // A wire landing on this node changes both the channel list and the socket
    // labels, and the panel's own poll would take up to half a second to notice.
    // Plugging something in has to look instant, so it is nudged directly.
    const originalConnections = proto.onConnectionsChange as ((...a: unknown[]) => unknown) | undefined;
    proto.onConnectionsChange = function (this: unknown, ...args: unknown[]) {
      const result = originalConnections?.apply(this, args);
      const node = this as {
        _filChannelState?: { ui?: { refresh?: () => void } };
        _filPendingAmbiguityChecks?: number[];
        _filPendingNamingChecks?: number[];
      };
      invalidateWirelessPlan();

      // LiteGraph's own signature (`LGraphNode.ts`): (NodeSlotType, slot,
      // connected, link_info, ioInfo). `NodeSlotType.INPUT === 1` — checked
      // against the real enum, not assumed. Only a brand-new wire into one of
      // this node's own `value*` inputs should ever raise the panel
      // unprompted: not a disconnect (nothing to decide), and not this node's
      // output side (it has none).
      //
      // Recorded on the plain node object, not handed straight to the panel:
      // `ChannelPanelVue` is an async component (`defineAsyncComponent`), so
      // its `onMounted` — the only place `state.ui` gets anything on it — can
      // still be pending when this fires, which a synchronous callback here
      // would silently miss. Confirmed live: creating the node and wiring it
      // in the same tick (an automated script, not a human drag) skipped the
      // prompt entirely, no error, because `state.ui` was still empty. A
      // pending list survives that gap; `ChannelPanel.vue`'s own `refresh()`
      // — run on mount and every poll after — is what drains it.
      //
      // `graphBeingConfigured()` guards the other live bug this hook produced:
      // restoring a saved workflow — opening it fresh, or just switching back
      // to an already-open tab — re-announces every existing link the same
      // way a brand-new one arrives, side 1, connected true. Without this
      // check, a channel resolved and left alone since the file was saved
      // popped the same modal again on every single switch. It is also what
      // makes the "positive or negative?" question a once-per-wire one: the
      // answer lands on the slot's label, the label serialises with the
      // workflow, and a restored wire never queues either check.
      const [side, slot, connected] = args as [number, number, boolean];
      if (side === 1 && connected === true && typeof slot === "number" && !graphBeingConfigured()) {
        (node._filPendingAmbiguityChecks ??= []).push(slot);
        (node._filPendingNamingChecks ??= []).push(slot);
      }

      node._filChannelState?.ui?.refresh?.();
      return result;
    };

    const originalRemoved = proto.onRemoved as ((...a: unknown[]) => unknown) | undefined;
    proto.onRemoved = function (this: unknown, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
