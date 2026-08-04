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
