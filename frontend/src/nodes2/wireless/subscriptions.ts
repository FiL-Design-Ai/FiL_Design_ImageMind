/**
 * Reading and writing what a receiver node remembers about channels.
 *
 * Two records, both keyed by input *name* (`wireless.md` §4): `subs` is "this
 * input takes that channel", `blocked` is "auto-distribution, not here". They
 * live in `node.properties`, which LiteGraph serialises and restores on its own
 * (`LGraphNode.ts:1038` / `:903`), so nothing here has to think about saving.
 *
 * Deliberately free of any cache or host knowledge — `resolve.ts` reads it, and
 * a cycle would form the moment this file imported the plan. The invalidation
 * that has to follow a write lives one layer up, in `targets.ts`.
 */

import type { WirelessNode, WirelessSubscriptions } from "./types";

export const WIRELESS_PROPERTY = "fil_wireless";

function bag(node: WirelessNode): WirelessSubscriptions | undefined {
  return node.properties?.[WIRELESS_PROPERTY] as WirelessSubscriptions | undefined;
}

/** Writable bag, created on demand — callers that only read must not use this. */
function ensureBag(node: WirelessNode): WirelessSubscriptions {
  const properties = (node.properties ??= {});
  const existing = properties[WIRELESS_PROPERTY] as WirelessSubscriptions | undefined;
  if (existing) return existing;
  const created: WirelessSubscriptions = {};
  properties[WIRELESS_PROPERTY] = created;
  return created;
}

/**
 * Drop the property once it holds nothing.
 *
 * An empty `fil_wireless: {}` on every node the user ever ticked and unticked
 * would end up in their saved workflow forever. Cheaper to clean up here than
 * to explain later.
 */
function pruneBag(node: WirelessNode): void {
  const current = bag(node);
  if (!current) return;
  const hasSubs = !!current.subs && Object.keys(current.subs).length > 0;
  const hasBlocked = !!current.blocked && Object.keys(current.blocked).length > 0;
  if (hasSubs || hasBlocked) return;
  delete node.properties![WIRELESS_PROPERTY];
}

export function subscriptionsOf(node: WirelessNode): Readonly<WirelessSubscriptions> {
  return bag(node) ?? {};
}

/** The channel this input is explicitly subscribed to, if any. */
export function subscribedChannel(node: WirelessNode, inputName: string): string | undefined {
  return bag(node)?.subs?.[inputName];
}

/** Has the user told auto-distribution to leave this input alone for this channel? */
export function isBlocked(node: WirelessNode, inputName: string, channelName: string): boolean {
  return !!bag(node)?.blocked?.[inputName]?.includes(channelName);
}

/**
 * Bind an input to a channel by name, clearing any block that contradicts it.
 *
 * The two records must never both apply to the same pair: a subscription is the
 * user saying "yes, here", and a leftover block would then be an instruction
 * nobody could see and nothing would obey.
 */
export function subscribeInput(node: WirelessNode, inputName: string, channelName: string): void {
  const target = ensureBag(node);
  (target.subs ??= {})[inputName] = channelName;
  unblockInput(node, inputName, channelName);
}

export function unsubscribeInput(node: WirelessNode, inputName: string): void {
  const target = bag(node);
  if (!target?.subs) return;
  delete target.subs[inputName];
  if (Object.keys(target.subs).length === 0) delete target.subs;
  pruneBag(node);
}

export function blockInput(node: WirelessNode, inputName: string, channelName: string): void {
  const target = ensureBag(node);
  const blocked = (target.blocked ??= {});
  const forInput = (blocked[inputName] ??= []);
  if (!forInput.includes(channelName)) forInput.push(channelName);
}

export function unblockInput(node: WirelessNode, inputName: string, channelName: string): void {
  const target = bag(node);
  const forInput = target?.blocked?.[inputName];
  if (!forInput) return;
  const next = forInput.filter((name) => name !== channelName);
  if (next.length > 0) {
    target!.blocked![inputName] = next;
  } else {
    delete target!.blocked![inputName];
    if (Object.keys(target!.blocked!).length === 0) delete target!.blocked;
  }
  pruneBag(node);
}

/**
 * Forget everything about a channel across one node — used when a channel is
 * renamed away or the user clears a whole channel's targets.
 */
export function forgetChannel(node: WirelessNode, channelName: string): void {
  const target = bag(node);
  if (!target) return;

  if (target.subs) {
    for (const [inputName, name] of Object.entries(target.subs)) {
      if (name === channelName) delete target.subs[inputName];
    }
    if (Object.keys(target.subs).length === 0) delete target.subs;
  }

  if (target.blocked) {
    for (const inputName of Object.keys(target.blocked)) {
      unblockInput(node, inputName, channelName);
    }
  }

  pruneBag(node);
}
