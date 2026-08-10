/**
 * The rulebook (`wireless.md` §4): given the channels a graph currently has,
 * decide which real links `applyWirelessLinks` should make, and report every
 * input that did not get one and why.
 *
 * Order matters and is not incidental:
 *   1. A real wire always wins — an occupied input is never touched, but a
 *      subscription sitting on it is reported `dormant`, not silently dropped.
 *   2. An explicit subscription — win, loss, or error — always claims its
 *      input; auto-distribution never looks at an input that has one.
 *   3. Auto-distribution only runs for a type with exactly one channel; two or
 *      more and every matching free input becomes `ambiguous` instead, for
 *      every channel of that type, not just the extra ones.
 *   4. A channel the user unticked for an input (`blocked`) is dropped before
 *      that count is taken — so unticking one of two rival channels resolves
 *      the ambiguity for the other instead of leaving both stuck.
 *   7. A node offering *two or more unwired inputs of the identical type*
 *      never gets an auto-wire on any of them, even with only one channel to
 *      offer, and an explicit subscription on one does not excuse the rest —
 *      only a real wire does. Same type does not mean same meaning — a
 *      KSampler's `positive` and `negative` are both bare CONDITIONING, and
 *      guessing which one a lone channel belongs to is exactly the kind of
 *      guess rule 3 already refuses to make between two *channels*. No
 *      CONDITIONING-specific code exists to catch this — the rule is about
 *      the node's own inputs colliding, so it holds for any type without
 *      naming one.
 *   8. Name pairing — the one sanctioned exception to "no name heuristics".
 *      Rules 3 and 7 stand down because same-typed things are indistinguishable;
 *      when they *are* distinguishable — the node's free inputs and the
 *      channels of their type carry names, and those names admit exactly one
 *      complete distinct pairing — the pairing is made. "Exactly one" is the
 *      whole safety: zero or several name matchings leave the cluster
 *      ambiguous exactly as rules 3/7 did, so this can only ever deduct,
 *      never guess. Blocks (rule 4) and self-feeds (rule 6) constrain the
 *      pairing the same way they constrain auto-distribution, and a claimed
 *      input (rules 1/2) is not part of it — pairing settles what is left,
 *      it does not second-guess what is settled (`nameMatch.ts`).
 *
 *      One sanctioned extension, same safety bar: the leftover deduction.
 *      When names settle every pair but exactly one — `positive` named and
 *      taken, one unnamed channel and the `negative` input all that remain —
 *      that last pair is made by exclusion: it is the only slot either side
 *      can still occupy, so there is nothing left to guess. The deduction
 *      still has to be unique; two unnamed channels (either could be the
 *      leftover) leave the cluster ambiguous as before. This is what makes
 *      the second of the canonical pos/neg wires connect without a question.
 *
 *   9. A widget-backed input is never taken by type alone — only by a channel
 *      of the same *name*. Type equality means something for the types the
 *      graph is built from and nothing for the primitives behind widgets, and
 *      this frontend gives every widget a socket, so `steps`, `tile_size` and
 *      `seed` all read as ordinary free INT inputs. See `reachable` below for
 *      the real workflow this was found on.
 *
 * No priorities, regexes, group/colour scoping, or per-type special cases —
 * deliberately absent, see `wireless.md` §2. Rule 8's name pairing is the
 * single exception, and only because its uniqueness requirement makes it a
 * deduction rather than a preference.
 */

import type {
  AmbiguousEntry,
  DormantEntry,
  LinkToCreate,
  NodeId,
  SelfLoopEntry,
  TypeMismatchEntry,
  UnknownChannelEntry,
  WirelessChannel,
  WirelessGraph,
  WirelessResolution,
  WirelessSlot,
} from "./types";
import { allNodes, isChannelNode } from "./graphAccess";
import { isBlocked, subscriptionsOf } from "./subscriptions";
import { forcedLeftoverMatch, namesEqual, namesMatch, uniqueFullMatch } from "./nameMatch";

function claimKey(nodeId: unknown, inputName: string): string {
  return `${String(nodeId)}:${inputName}`;
}

/**
 * Would binding this channel to that node feed the node its own output?
 *
 * The transmitter is not the source — whatever is plugged into it is. So a node
 * that both feeds a channel and has a free input of the same type would receive
 * from itself, which is a cycle the backend cannot execute (rule 6).
 */
function feedsChannel(nodeId: NodeId, channel: WirelessChannel): boolean {
  return String(channel.origin_id) === String(nodeId);
}

/**
 * Rule 9: may this channel land on this input at all, before anyone asks
 * whether it is the only one that could?
 *
 * Type equality carries meaning for the types the graph was designed around —
 * a MODEL input wants a model, and there is only one kind of model. It
 * carries none for the primitives behind widgets: `steps`, `tile_size`,
 * `overlap`, `max_tokens` and `seed` are all INT and have nothing to do with
 * each other. This frontend gives *every* widget a socket, so those are
 * ordinary free typed inputs as far as rules 3 and 7 can see — and a single
 * INT channel called `seed` was quietly landing in `steps` on one node,
 * `tile_size` on the next and `alpha` on a third, wherever a node happened to
 * offer exactly one free INT. Found by running this resolver over a real
 * 42-node workflow (2026-08-10): 23 links, and most of them were wrong.
 *
 * So a widget-backed input takes a channel only when the two carry the same
 * name — the contract widget feeds already published (`SEED` feeds `seed`,
 * nothing else). Real sockets are untouched, and an explicit subscription
 * (rule 2) still overrides this the way it overrides everything: the user
 * naming a target is not a guess.
 */
export function reachable(input: WirelessSlot, channel: WirelessChannel): boolean {
  if (!input.widget) return true;
  return namesEqual(input.name, channel.name);
}

export function resolveWireless(graph: WirelessGraph, channels: WirelessChannel[]): WirelessResolution {
  const links: LinkToCreate[] = [];
  const dormant: DormantEntry[] = [];
  const ambiguous: AmbiguousEntry[] = [];
  const typeMismatch: TypeMismatchEntry[] = [];
  const unknownChannel: UnknownChannelEntry[] = [];
  const selfLoop: SelfLoopEntry[] = [];
  const usedChannelNames = new Set<string>();

  const byName = new Map(channels.map((c) => [c.name, c]));
  // Rule 6: a channel is never a receiver — not of itself, not of another channel.
  const receivers = allNodes(graph).filter((n) => !isChannelNode(n));

  // Inputs an explicit subscription has already spoken for, whatever the
  // outcome — auto-distribution must not second-guess them (rule 2).
  const claimed = new Set<string>();

  for (const node of receivers) {
    const subs = subscriptionsOf(node).subs ?? {};
    for (const [inputName, channelName] of Object.entries(subs)) {
      const slotIndex = (node.inputs ?? []).findIndex((s) => s.name === inputName);
      if (slotIndex < 0) continue; // the input this subscription named is gone
      claimed.add(claimKey(node.id, inputName));
      const input = node.inputs![slotIndex];

      if (input.link != null) {
        dormant.push({ node_id: node.id, input: inputName, channelName });
        continue;
      }

      const channel = byName.get(channelName);
      if (!channel) {
        unknownChannel.push({ node_id: node.id, input: inputName, channelName });
        continue;
      }
      if (channel.type !== input.type) {
        typeMismatch.push({
          node_id: node.id,
          input: inputName,
          channelName,
          inputType: input.type,
          channelType: channel.type,
        });
        continue;
      }
      if (feedsChannel(node.id, channel)) {
        selfLoop.push({ node_id: node.id, input: inputName, channelName });
        continue;
      }

      links.push({
        channelName: channel.name,
        origin_id: channel.origin_id,
        origin_slot: channel.origin_slot,
        target_id: node.id,
        target_slot: slotIndex,
      });
      usedChannelNames.add(channel.name);
    }
  }

  const channelsByType = new Map<string, WirelessChannel[]>();
  for (const channel of channels) {
    const group = channelsByType.get(channel.type);
    if (group) group.push(channel);
    else channelsByType.set(channel.type, [channel]);
  }

  // Rule 7: how many inputs of each type on one node have no *real* wire.
  // Two or more sharing a type means auto-distribution cannot tell which
  // input a channel belongs to — computed as a first pass so the second pass
  // can check it without re-scanning siblings.
  //
  // A subscription does not shrink this count the way it shrinks `claimed`.
  // If it did, resolving `positive` explicitly would leave `negative` as the
  // node's *only* remaining unclaimed input of that type and auto-distribute
  // it — silently recreating the exact same-value-on-both-inputs mistake this
  // rule exists to stop, one tick after the user thought they had stopped it.
  // Only a real wire (rule 1) has actually settled what a slot means; a
  // subscription has only settled it for the one input it names.
  //
  // Rule 9 shrinks this count too, and has to: a widget-backed input no
  // channel of the type may name is not competing for anything, so counting
  // it would make its siblings ambiguous over a rivalry that does not exist.
  // A sampler's `seed` and `steps` are both free INTs; only `seed` can take
  // the `seed` channel, so `seed` is not ambiguous — it is the only answer.
  const freeSlotsOfType = new Map<string, number>();
  for (const node of receivers) {
    (node.inputs ?? []).forEach((input) => {
      if (input.link != null) return;
      const ofType = channelsByType.get(input.type);
      if (!ofType?.some((channel) => reachable(input, channel))) return;
      const key = claimKey(node.id, input.type);
      freeSlotsOfType.set(key, (freeSlotsOfType.get(key) ?? 0) + 1);
    });
  }

  // Rule 8: name pairing. Where rules 3/7 would declare a cluster ambiguous,
  // try to pair the cluster's free, unclaimed inputs with the channels of
  // their type by matching names. Only a *unique complete* pairing is acted
  // on — one assignment covering every input with a distinct channel. Zero or
  // several mean the names did not actually settle it, and the cluster stays
  // ambiguous for the user.
  //
  // Computed as a first pass (like `freeSlotsOfType`) because the decision is
  // a cluster's, not a single input's: whether `positive` may take the channel
  // named `positive` depends on whether `negative` has somewhere to go too.
  // The eligibility predicate is exactly the one the second pass uses for
  // candidates — same-type only, no self-feeds (rule 6), no user blocks (rule
  // 4) — so a pairing never binds anything auto-distribution would not have
  // offered. Claimed inputs are excluded because rules 1/2 already settled
  // them; a subscription on one sibling narrows what the rest may pair with,
  // it does not excuse them (the rule 7 comment above says why).
  const pairedChannel = new Map<string, WirelessChannel>();
  for (const node of receivers) {
    const freeByType = new Map<string, WirelessSlot[]>();
    (node.inputs ?? []).forEach((input) => {
      if (input.link != null) return;
      if (claimed.has(claimKey(node.id, input.name))) return;
      // Rule 9, same reason as the count above: an input nothing of this type
      // may name is not part of the cluster the pairing has to cover.
      const ofType = channelsByType.get(input.type);
      if (!ofType?.some((channel) => reachable(input, channel))) return;
      const group = freeByType.get(input.type);
      if (group) group.push(input);
      else freeByType.set(input.type, [input]);
    });

    for (const [type, inputs] of freeByType) {
      const ofType = channelsByType.get(type);
      if (!ofType || ofType.length === 0) continue;
      // Fewer than two on both sides resolves cleanly by auto-distribution; a
      // pairing there would add nothing but a second path to the same answer.
      if (inputs.length < 2 && ofType.length < 2) continue;

      const allowed = (input: WirelessSlot, channel: WirelessChannel) =>
        reachable(input, channel) &&
        !feedsChannel(node.id, channel) &&
        !isBlocked(node, input.name, channel.name);
      const matchesByName = (input: WirelessSlot, channel: WirelessChannel) =>
        namesMatch(input.name, channel.name);

      // Strict pairing first; the leftover deduction only where names alone
      // fell one pair short (`nameMatch.ts`).
      const match =
        uniqueFullMatch(inputs, ofType, (input, channel) => allowed(input, channel) && matchesByName(input, channel)) ??
        forcedLeftoverMatch(inputs, ofType, allowed, matchesByName);
      if (!match) continue;
      for (const [input, channel] of match) {
        pairedChannel.set(claimKey(node.id, input.name), channel);
      }
    }
  }

  for (const node of receivers) {
    (node.inputs ?? []).forEach((input, slotIndex) => {
      if (input.link != null) return; // occupied — rule 1 already covered it above if subscribed
      if (claimed.has(claimKey(node.id, input.name))) return; // rule 2

      const ofType = channelsByType.get(input.type);
      if (!ofType || ofType.length === 0) return;

      // Drop what this input cannot or must not take before counting: channels
      // this node itself feeds (rule 6), and channels the user unticked for it
      // (rule 4). Counting first would offer a choice the user does not have,
      // or keep an input "ambiguous" after they already answered.
      const candidates = ofType.filter(
        (c) => reachable(input, c) && !feedsChannel(node.id, c) && !isBlocked(node, input.name, c.name),
      );
      if (candidates.length === 0) return;

      // "Ambiguous" here can mean either question: which channel (rule 3, 2+
      // candidates) or which input (rule 7, 2+ same-type siblings on this
      // node) — the entry does not distinguish, because the user's next step
      // is the same target list either way. Before declaring it, give rule 8
      // its say: a cluster whose names pair up uniquely was settled in the
      // first pass and simply takes its channel here.
      const hasSiblingOfType = (freeSlotsOfType.get(claimKey(node.id, input.type)) ?? 1) > 1;
      if (candidates.length > 1 || hasSiblingOfType) {
        const paired = pairedChannel.get(claimKey(node.id, input.name));
        if (paired) {
          links.push({
            channelName: paired.name,
            origin_id: paired.origin_id,
            origin_slot: paired.origin_slot,
            target_id: node.id,
            target_slot: slotIndex,
          });
          usedChannelNames.add(paired.name);
          return;
        }
        ambiguous.push({ node_id: node.id, input: input.name, type: input.type, candidates: candidates.map((c) => c.name) });
        return;
      }

      const channel = candidates[0];
      links.push({
        channelName: channel.name,
        origin_id: channel.origin_id,
        origin_slot: channel.origin_slot,
        target_id: node.id,
        target_slot: slotIndex,
      });
      usedChannelNames.add(channel.name);
    });
  }

  const unusedChannels = channels.filter((c) => !usedChannelNames.has(c.name)).map((c) => c.name);

  return { links, dormant, ambiguous, typeMismatch, unknownChannel, selfLoop, unusedChannels };
}
