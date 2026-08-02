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
 */

import { defaultChannelSlotLabel, isChannelValueInput, type WirelessNode, type WirelessSlot } from "./types";

/** Receipts for the labels this pack wrote, keyed by slot name. */
export const AUTO_LABEL_PROPERTY = "fil_channel_auto";

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
