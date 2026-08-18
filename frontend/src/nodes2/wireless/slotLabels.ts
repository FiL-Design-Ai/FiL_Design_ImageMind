/**
 * Naming the transmitter's own sockets.
 *
 * A wired input should read `MODEL`, not `value0` — you should be able to tell
 * what a Channel node carries without tracing the wire back. But the slot's
 * `label` is also where core's own "Rename Slot" writes, and `channels.ts`
 * reads that field as the channel's *name*. An earlier version of the pack
 * wrote a decoration there and lost the ability to tell the two apart: a
 * MODEL channel came out named `model`, and a deliberate rename was
 * indistinguishable from the pack's own writing.
 *
 * The fix is a receipt. Whatever we write is also recorded in
 * `node.properties.fil_channel_auto`, keyed by slot name. A label that still
 * equals its receipt is ours and may be overwritten; anything else is the
 * user's and is never touched. `channels.ts` uses the same receipt to decide
 * whether a label is a name or just our own echo.
 *
 * Names the user picks in the panel's "positive or negative?" question carry
 * one more record, added after a live check, not an assumption: reloading a
 * workflow restores the label of the *first* wired slot of this autogrown
 * node and silently drops the rest — `serialize()` carries them all,
 * `loadGraphData` keeps one. The label alone would therefore forget the
 * answer on exactly the second wire, so every picked name is also kept in
 * `node.properties.fil_channel_names`, which rides out every reload, and
 * `restoreUserSlotNames` writes it back onto any slot the host let fall.
 * That is what makes the question once-per-wire across restarts, not merely
 * within a session.
 *
 * One more thing a name has to survive, and the reason `remapUserSlotNames`
 * exists: the host compacts an autogrow group whenever a wire leaves it.
 * `autogrowInputDisconnected` (frontend `settingStore-*.js.map`) moves every
 * *link* below the freed one up a slot, re-stamps `link.target_slot`, and
 * deletes the trailing empties — but the slot objects, and therefore their
 * labels, stay exactly where they were. So unplugging the first of a
 * `positive`/`negative` pair left the surviving wire wearing the name of the
 * one that went, and `fil_channel_names` carried that mistake through a
 * reload. Names are keyed by slot; links are what actually moved; so the fix
 * is to follow the links.
 */

import { defaultChannelSlotLabel, isChannelValueInput, type WirelessNode, type WirelessSlot } from "./types";

/** Receipts for the labels this pack wrote, keyed by slot name. */
export const AUTO_LABEL_PROPERTY = "fil_channel_auto";

/** Names the user picked for a slot, kept where a reload cannot drop them. */
export const USER_NAMES_PROPERTY = "fil_channel_names";

type UserNames = Record<string, string>;

function userNames(node: WirelessNode): UserNames | undefined {
  return node.properties?.[USER_NAMES_PROPERTY] as UserNames | undefined;
}

function rememberUserName(node: WirelessNode, slotName: string, label: string): void {
  const properties = (node.properties ??= {});
  const current = (properties[USER_NAMES_PROPERTY] as UserNames | undefined) ?? {};
  current[slotName] = label;
  properties[USER_NAMES_PROPERTY] = current;
}

type Receipts = Record<string, string>;

function receipts(node: WirelessNode): Receipts | undefined {
  return node.properties?.[AUTO_LABEL_PROPERTY] as Receipts | undefined;
}

/**
 * True when this slot's label is the pack's own doing — either a receipt we
 * kept, or the bare `value0` LiteGraph fills in before anyone renames anything.
 */
export function isAutoLabel(node: WirelessNode, slot: WirelessSlot): boolean {
  const label = slot.label?.trim();
  if (!label) return true;
  if (label === defaultChannelSlotLabel(slot.name)) return true;
  return receipts(node)?.[slot.name] === label;
}

function writeReceipt(node: WirelessNode, slotName: string, label: string | undefined): void {
  const properties = (node.properties ??= {});
  const current = (properties[AUTO_LABEL_PROPERTY] as Receipts | undefined) ?? {};
  if (label === undefined) {
    if (!(slotName in current)) return;
    delete current[slotName];
  } else {
    if (current[slotName] === label) return;
    current[slotName] = label;
  }
  if (Object.keys(current).length === 0) delete properties[AUTO_LABEL_PROPERTY];
  else properties[AUTO_LABEL_PROPERTY] = current;
}

/**
 * Record a name the user picked for a slot — what the panel's "positive or
 * negative?" question writes. It lands exactly where core's own "Rename Slot"
 * writes, and the receipt for that slot is dropped, so the pack treats it as
 * the user's from then on: `applySlotNames` never overwrites it, and
 * `channels.ts` reads it as the channel's name.
 *
 * The name is also kept in `fil_channel_names`, because a label alone does
 * not ride out a workflow reload: the host restores one slot's label and
 * drops the rest (see the file header). The property survives, and
 * `restoreUserSlotNames` puts the label back. Together that is the point:
 * reopen the file, or restart ComfyUI and open it, and the slot already
 * carries its name — so the question is asked once per wire, never once per
 * session.
 *
 * Returns true when the label actually changed, so the caller knows whether
 * the canvas and the plan need refreshing.
 */
export function setUserSlotName(node: WirelessNode, slot: WirelessSlot, label: string): boolean {
  if (!isChannelValueInput(slot.name)) return false;
  const trimmed = label.trim();
  if (!trimmed) return false;
  writeReceipt(node, slot.name, undefined); // no receipt → the user's, not ours
  rememberUserName(node, slot.name, trimmed);
  if (slot.label === trimmed) return false;
  slot.label = trimmed;
  return true;
}

/**
 * Put the user's picked names back on any slot the host dropped them from.
 *
 * Called from `collectChannels` — ahead of every plan, whether the panel or
 * the queue-time prompt bridge computes it — so a workflow reopened after a
 * restart names its channels exactly as it did when the question was
 * answered. Only slots still wearing a pack label are restored: one the user
 * renamed again since keeps the newer word.
 *
 * Returns true when anything was written, so the caller can redraw.
 */
export function restoreUserSlotNames(node: WirelessNode): boolean {
  const saved = userNames(node);
  if (!saved) return false;
  let changed = false;
  for (const slot of node.inputs ?? []) {
    if (!slot || !isChannelValueInput(slot.name)) continue;
    const name = saved[slot.name];
    if (!name) continue;
    if (!isAutoLabel(node, slot)) continue; // nothing lost on this one
    slot.label = name;
    writeReceipt(node, slot.name, undefined); // a restored name is the user's too
    changed = true;
  }
  return changed;
}

/** Hand a slot back to the host: no user name, no receipt, the bare default label. */
function clearUserSlotName(node: WirelessNode, slot: WirelessSlot): boolean {
  let changed = false;

  const saved = userNames(node);
  if (saved && slot.name in saved) {
    delete saved[slot.name];
    if (Object.keys(saved).length === 0) delete node.properties![USER_NAMES_PROPERTY];
    changed = true;
  }

  writeReceipt(node, slot.name, undefined);
  const wanted = defaultChannelSlotLabel(slot.name);
  if (slot.label !== wanted) {
    slot.label = wanted;
    changed = true;
  }
  return changed;
}

/** The name this slot goes by, whether it is worn on the label or only vaulted. */
function currentUserName(node: WirelessNode, slot: WirelessSlot): string | undefined {
  const label = slot.label?.trim();
  if (label && !isAutoLabel(node, slot)) return label;
  return userNames(node)?.[slot.name];
}

/**
 * What each value slot holds right now — the "before" half of a compaction.
 *
 * Taken the moment a wire leaves the node, ahead of the host's own reshuffle
 * (which it defers a frame), so `remapUserSlotNames` can tell where every
 * surviving link ended up.
 */
export function snapshotSlotLinks(node: WirelessNode): Map<string, number | null> {
  const snapshot = new Map<string, number | null>();
  for (const slot of node.inputs ?? []) {
    if (!slot || !isChannelValueInput(slot.name)) continue;
    snapshot.set(slot.name, slot.link ?? null);
  }
  return snapshot;
}

/**
 * Move every name onto the slot its wire ended up in.
 *
 * `before` is `snapshotSlotLinks`'s reading from before the host compacted the
 * group. A slot whose link id did not move is left completely alone — that is
 * the common case and the one this must not disturb. A slot now holding a link
 * that used to sit elsewhere takes that slot's name; a slot left empty by the
 * shuffle gives its name up, because the wire it described is gone.
 *
 * A link the snapshot never saw belongs to a wire drawn after it was taken,
 * not to the shuffle, and is skipped: nothing here should second-guess a wire
 * it has no "before" for. Vault entries for slots the host deleted outright go
 * too, or a later wire into a re-created slot of the same name would inherit a
 * name nobody gave it.
 *
 * Returns true when anything moved, so the caller can redraw and re-plan.
 */
export function remapUserSlotNames(node: WirelessNode, before: Map<string, number | null>): boolean {
  const slots = (node.inputs ?? []).filter(
    (slot): slot is WirelessSlot => !!slot && isChannelValueInput(slot.name),
  );

  // Read every name first: the loop below rewrites labels, and a name must be
  // read from before that started, not from a slot already rewritten.
  const nameBySlot = new Map<string, string | undefined>();
  const slotByLink = new Map<number, string>();
  for (const [slotName, link] of before) {
    const slot = slots.find((s) => s.name === slotName);
    nameBySlot.set(slotName, slot ? currentUserName(node, slot) : userNames(node)?.[slotName]);
    if (link != null) slotByLink.set(link, slotName);
  }

  let changed = false;
  for (const slot of slots) {
    const wasLink = before.get(slot.name) ?? null;
    const nowLink = slot.link ?? null;
    if (wasLink === nowLink) continue; // the host left this one where it was

    if (nowLink != null && !slotByLink.has(nowLink)) continue; // a wire drawn since the snapshot

    const carried = nowLink != null ? nameBySlot.get(slotByLink.get(nowLink)!) : undefined;
    if (carried) {
      if (setUserSlotName(node, slot, carried)) changed = true;
    } else if (clearUserSlotName(node, slot)) {
      changed = true;
    }
  }

  // Slots the host removed outright keep nothing behind them.
  const live = new Set(slots.map((slot) => slot.name));
  const saved = userNames(node);
  if (saved) {
    for (const slotName of Object.keys(saved)) {
      if (live.has(slotName)) continue;
      delete saved[slotName];
      changed = true;
    }
    if (Object.keys(saved).length === 0) delete node.properties![USER_NAMES_PROPERTY];
  }
  const kept = receipts(node);
  if (kept) {
    for (const slotName of Object.keys(kept)) {
      if (!live.has(slotName)) writeReceipt(node, slotName, undefined);
    }
  }

  return changed;
}

/** What a given slot should be called, or undefined to hand it back to the host. */
export type SlotNaming = Map<string, string>;

/**
 * Apply the names, leaving anything the user renamed alone.
 *
 * `naming` maps slot name → the channel's name; a value slot missing from it is
 * one with nothing plugged in, and gets its host default back so an unplugged
 * socket does not keep advertising what used to be there.
 *
 * Returns true when something changed, so the caller can decide whether the
 * canvas needs redrawing.
 */
export function applySlotNames(node: WirelessNode, naming: SlotNaming): boolean {
  let changed = false;

  for (const slot of node.inputs ?? []) {
    if (!slot || !isChannelValueInput(slot.name)) continue;
    if (!isAutoLabel(node, slot)) continue; // the user named this one

    const wanted = naming.get(slot.name) ?? defaultChannelSlotLabel(slot.name);
    if (slot.label !== wanted) {
      slot.label = wanted;
      changed = true;
    }
    // The default is what an untouched slot already carries, so there is
    // nothing to remember about it.
    writeReceipt(node, slot.name, wanted === defaultChannelSlotLabel(slot.name) ? undefined : wanted);
  }

  return changed;
}
