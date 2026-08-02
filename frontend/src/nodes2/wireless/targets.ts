/**
 * Who a channel reaches, and how the user changes that.
 *
 * This is what the gear button on the transmitter opens: every input in the
 * graph that could take this channel, with a tick showing whether it currently
 * does. The tick is edited here and stored on the *receiver* — see
 * `subscriptions.ts` for why that side.
 *
 * The rule the list obeys (`wireless.md` §2, decided 2026-08-02): ticks start
 * on, because auto-distribution already reaches everything it can. Unticking is
 * therefore the interesting action — it means "not here", and it has to be
 * remembered or the next frame would put the channel straight back.
 */

import type { NodeId, WirelessChannel, WirelessGraph, WirelessNode } from "./types";
import { allNodes, isChannelNode, nodeTitle } from "./graphAccess";
import type { WirelessPlan } from "./plan";
import {
  blockInput,
  isBlocked,
  subscribeInput,
  subscribedChannel,
  unblockInput,
  unsubscribeInput,
} from "./subscriptions";
import { invalidateWirelessPlan } from "./livePlan";

/**
 * Why a row looks the way it does. Only `on` and `off` are the user's to
 * change; the rest are states of the graph the panel can explain but not fix.
 */
export type ChannelTargetState =
  | "on" // receiving, whether by auto-distribution or an explicit tick
  | "off" // free and eligible, but unticked
  | "wired" // a real wire already feeds it — the wire always wins (rule 1)
  | "otherChannel" // explicitly subscribed to a different channel
  | "selfLoop"; // this node feeds the channel; connecting it would be a cycle

export interface ChannelTarget {
  nodeId: NodeId;
  /** The node's own header text, falling back to its type. */
  title: string;
  inputName: string;
  /** What the input calls itself on the node. */
  inputLabel: string;
  state: ChannelTargetState;
  checked: boolean;
  /** True when the tick is not the user's to move in this state. */
  disabled: boolean;
  /** Set on `otherChannel` rows, so the panel can say which one took it. */
  otherChannelName?: string;
}

function inputLabel(name: string, label?: string): string {
  return label?.trim() || name;
}

function receiving(plan: WirelessPlan, channelName: string): Set<string> {
  const keys = new Set<string>();
  for (const link of plan.resolution.links) {
    if (link.channelName === channelName) keys.add(`${String(link.target_id)}:${link.target_slot}`);
  }
  return keys;
}

/**
 * Every input this channel could feed, in graph order.
 *
 * Type match is the only filter — an input of another type is not a target the
 * user declined, it is simply not a target, and listing it would bury the real
 * ones (`wireless.md` §4: no silent coercions).
 */
export function channelTargets(
  graph: WirelessGraph,
  plan: WirelessPlan,
  channel: WirelessChannel,
): ChannelTarget[] {
  const fed = receiving(plan, channel.name);
  const targets: ChannelTarget[] = [];

  for (const node of allNodes(graph)) {
    if (isChannelNode(node)) continue; // a transmitter never receives (rule 6)

    (node.inputs ?? []).forEach((input, slotIndex) => {
      if (!input || input.type !== channel.type) return;

      const label = inputLabel(input.name, input.label);
      const base = { nodeId: node.id, title: nodeTitle(node), inputName: input.name, inputLabel: label };

      if (String(channel.origin_id) === String(node.id)) {
        targets.push({ ...base, state: "selfLoop", checked: false, disabled: true });
        return;
      }
      if (input.link != null) {
        targets.push({ ...base, state: "wired", checked: false, disabled: true });
        return;
      }

      const subscribed = subscribedChannel(node, input.name);
      if (subscribed && subscribed !== channel.name) {
        targets.push({
          ...base,
          state: "otherChannel",
          checked: false,
          disabled: true,
          otherChannelName: subscribed,
        });
        return;
      }

      const on = fed.has(`${String(node.id)}:${slotIndex}`);
      targets.push({ ...base, state: on ? "on" : "off", checked: on, disabled: false });
    });
  }

  return targets;
}

function channelsOfType(plan: WirelessPlan, type: string): number {
  return plan.channels.filter((c) => c.type === type).length;
}

/**
 * Another input on this same node, of this same type, with no *real* wire —
 * the sibling collision resolve.ts's rule 7 stands down for (`positive`/
 * `negative`, both bare CONDITIONING, being the case that motivated it). A
 * sibling already carrying its own subscription still counts: that settles
 * only what *that* input gets, not that a second one is safe to auto-fill
 * with the same source (`resolve.ts`'s rule 7 comment has the full case).
 */
function hasFreeSiblingOfType(node: WirelessNode, type: string, exceptInputName: string): boolean {
  return (node.inputs ?? []).some((input) => {
    if (!input || input.name === exceptInputName || input.type !== type) return false;
    return input.link == null;
  });
}

/**
 * Tick or untick one target, and make the graph agree.
 *
 * Ticking clears the block first, and only writes an explicit subscription
 * when clearing it would not be enough on its own — either another channel of
 * the same type exists (rule 3), or this node has another free input of the
 * same type sitting right next to this one (rule 7), and auto-distribution
 * has stood down in both cases. Writing a subscription unconditionally would
 * work too, but it would quietly convert every input the user so much as
 * looked at into a manual one.
 *
 * Unticking removes an explicit subscription if that is what put the channel
 * there, and otherwise records the block.
 */
export function setChannelTarget(
  plan: WirelessPlan,
  node: WirelessNode,
  inputName: string,
  channel: WirelessChannel,
  on: boolean,
): void {
  if (on) {
    unblockInput(node, inputName, channel.name);
    const needsExplicitChoice =
      channelsOfType(plan, channel.type) > 1 || hasFreeSiblingOfType(node, channel.type, inputName);
    if (needsExplicitChoice) subscribeInput(node, inputName, channel.name);
  } else if (subscribedChannel(node, inputName) === channel.name) {
    unsubscribeInput(node, inputName);
  } else {
    blockInput(node, inputName, channel.name);
  }

  // The fingerprint deliberately does not watch node properties, so a write
  // here is invisible to the cache until it is told (`livePlan.ts`).
  invalidateWirelessPlan();
}

/** Does this input currently refuse the channel by the user's own hand? */
export function isTargetBlocked(node: WirelessNode, inputName: string, channelName: string): boolean {
  return isBlocked(node, inputName, channelName);
}
