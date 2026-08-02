/**
 * Scans a graph for live channels.
 *
 * A `FiLChannel` node carries one channel per *wired* input. Its inputs grow as
 * they are used (`io.Autogrow` in `nodes/node_channel.py`), so a single node can
 * broadcast a model, a VAE and a CLIP at once — and an input with nothing
 * plugged into it contributes no channel at all, because there is nothing to
 * broadcast yet (`wireless.md` §3).
 *
 * The name comes from the slot's label, which is what LiteGraph's own
 * "Rename Slot" writes (`LGraphCanvas.ts:8840`). No label means the channel is
 * named after its data type. Deliberately not a widget: with many inputs on one
 * node, one widget could only ever name one of them.
 */

import {
  isChannelValueInput,
  type WirelessChannel,
  type WirelessGraph,
  type WirelessNode,
  type WirelessSlot,
} from "./types";
import { allNodes, isChannelNode, resolveLinkOrigin } from "./graphAccess";
import { nameChannels, type RawChannel } from "./channelNaming";
import { isAutoLabel } from "./slotLabels";

/**
 * The name the user gave this slot, if any.
 *
 * `label` is only a name when it is neither LiteGraph's own default for the
 * slot (`value0`, `value1`, ...) nor a label this pack wrote there itself —
 * `slotLabels.ts` keeps the receipt that tells those apart. Comparing against
 * the slot's *name* (`value.value0`) instead, as an early version did, saw a
 * mismatch on every channel and named all of them after the raw slot id.
 * Confirmed live: a freshly created, unrenamed node already carries
 * `label: "value0"`.
 */
function slotName(node: WirelessNode, slot: WirelessSlot): string | undefined {
  const label = slot.label?.trim();
  if (!label || isAutoLabel(node, slot)) return undefined;
  return label;
}

export function collectChannels(graph: WirelessGraph): WirelessChannel[] {
  const raw: RawChannel[] = [];

  for (const node of allNodes(graph)) {
    if (!isChannelNode(node)) continue;
    collectFromNode(graph, node, raw);
  }

  return nameChannels(raw);
}

function collectFromNode(graph: WirelessGraph, node: WirelessNode, raw: RawChannel[]): void {
  (node.inputs ?? []).forEach((input, slotIndex) => {
    // By name, not by position: this frontend lists widget-backed inputs in the
    // same array, and an autogrown node's slots are `value0`, `value1`, ... in
    // whatever order the schema hands them over.
    if (!input || !isChannelValueInput(input.name)) return;
    if (input.link == null) return;

    const origin = resolveLinkOrigin(graph, input.link);
    if (!origin) return; // dangling link id — treat as if nothing were plugged in

    raw.push({
      nodeId: node.id,
      slotIndex,
      type: origin.type,
      origin_id: origin.origin_id,
      origin_slot: origin.origin_slot,
      customName: slotName(node, input),
    });
  });
}
