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
import { reachable } from "./resolve";

/**
 * Why a row looks the way it does. Only `on` and `off` are the user's to
 * change; the rest are states of the graph the panel can explain but not fix.
 */
export type ChannelTargetState =
  | "on" // receiving, whether by auto-distribution or an explicit tick
  | "off" // free and eligible, but unticked
  | "wired" // a real wire already feeds it — automatics never touch it (rule 1),
  // but the user may take it over explicitly (`takeOverWiredInput`)
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
    // Rule 9 belongs in this list for the same reason rules 3 and 7 do: it is
    // another case where auto-distribution has stood down, so clearing the
    // block alone would leave the tick doing nothing at all. A widget-backed
    // input the channel does not name — a `seed` channel ticked onto `steps`
    // — is only ever reached by the user saying so, which is exactly what
    // ticking it is.
    const input = (node.inputs ?? []).find((slot) => slot?.name === inputName);
    const needsExplicitChoice =
      channelsOfType(plan, channel.type) > 1 ||
      hasFreeSiblingOfType(node, channel.type, inputName) ||
      (!!input && !reachable(input, channel));
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

/**
 * Settle a whole cluster of same-type inputs in one stroke — what the
 * transmitter's cluster modal writes when the user assigns several of a node's
 * inputs at once (the `positive`/`negative` case).
 *
 * Every pair becomes an explicit subscription. The modal only opens where
 * auto-distribution has stood down — two or more channels of one type (rule 3)
 * or two or more same-type inputs on this node (rule 7) — so by the time a
 * choice lands here it always needs to be remembered, not merely unblocked.
 * Each subscription also clears any stale block for that pair, the way
 * `setChannelTarget`'s ticking does.
 *
 * `assignments` is input-name → channel-name. Empty entries are skipped so a
 * half-filled modal writes only the rows the user actually decided.
 */
export function assignCluster(node: WirelessNode, assignments: ReadonlyArray<{ inputName: string; channelName: string }>): void {
  let wrote = false;
  for (const { inputName, channelName } of assignments) {
    if (!inputName || !channelName.trim()) continue;
    subscribeInput(node, inputName, channelName);
    wrote = true;
  }
  // The fingerprint deliberately does not watch node properties, so a write
  // here is invisible to the cache until it is told (`livePlan.ts`). Only
  // invalidate when something actually changed.
  if (wrote) invalidateWirelessPlan();
}

/**
 * Replace a real wire with this channel, by the user's own hand.
 *
 * Rule 1 says a real wire always wins — and it does, against everything
 * automatic. But the row in the target list is not automatic: the user looked
 * at "already wired" and chose the channel anyway. So the wire goes, through
 * the host's own `disconnectInput` (the same call a right-click "Remove Link"
 * makes, which keeps its bookkeeping and undo consistent), and a subscription
 * takes its place. Nothing here ever runs without that explicit click.
 *
 * Refuses, and reports null, when there is no wire to take over, when the
 * channel would feed the node its own output (rule 6 — a loop is never a
 * choice), or when the host has no disconnect of its own.
 *
 * On success returns a descriptor of the wire that was removed, so the caller
 * can offer an Undo: re-connect `origin` to the same slot and drop the
 * subscription. The descriptor is the only thing that knows what the wire was,
 * because after `disconnectInput` the link is gone from the graph.
 */
export interface TakeOverUndo {
  origin_id: NodeId;
  origin_slot: number;
  slotIndex: number;
  inputName: string;
  channelName: string;
}

export function takeOverWiredInput(
  graph: WirelessGraph,
  node: WirelessNode,
  inputName: string,
  channel: WirelessChannel,
): TakeOverUndo | null {
  const slotIndex = (node.inputs ?? []).findIndex((s) => s.name === inputName);
  if (slotIndex < 0) return null;
  const input = node.inputs![slotIndex];
  if (input.link == null) return null; // nothing to take over
  if (String(channel.origin_id) === String(node.id)) return null; // rule 6
  const host = node as { disconnectInput?: (slot: number) => unknown };
  if (typeof host.disconnectInput !== "function") return null;

  // Remember what the wire was before it is gone.
  const link = graph.links?.[input.link];
  const origin_id = link?.origin_id;
  const origin_slot = link?.origin_slot;
  if (origin_id == null || origin_slot == null) return null;

  host.disconnectInput(slotIndex);
  if (input.link != null) return null; // the host declined to drop it

  subscribeInput(node, inputName, channel.name);
  invalidateWirelessPlan();
  return { origin_id, origin_slot, slotIndex, inputName, channelName: channel.name };
}

/**
 * Reverse a takeover: drop the subscription and put the original wire back.
 * Returns true when the wire was restored.
 */
export function undoTakeOver(
  graph: WirelessGraph,
  node: WirelessNode,
  undo: TakeOverUndo,
): boolean {
  unsubscribeInput(node, undo.inputName);
  const origin = graph.getNodeById?.(undo.origin_id);
  if (!origin || typeof origin.connect !== "function") {
    invalidateWirelessPlan();
    return false;
  }
  origin.connect(undo.origin_slot, node, undo.slotIndex);
  invalidateWirelessPlan();
  return true;
}
