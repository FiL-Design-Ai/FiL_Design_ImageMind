/**
 * Turns raw transmitter scans into named channels.
 *
 * Default name is the data type (`MODEL`); a second channel sharing a name —
 * default or user-given — gets numbered `NAME 2`, `NAME 3`, ... in node-id
 * order, so the same graph names its channels the same way regardless of
 * scan order (`wireless.md` §3).
 */

import type { NodeId, WirelessChannel } from "./types";
import { compareNodeId } from "./graphAccess";

export interface RawChannel {
  nodeId: NodeId;
  /** Which input of the transmitter this channel comes from — one node carries several. */
  slotIndex: number;
  type: string;
  origin_id: NodeId;
  origin_slot: number;
  /** The slot's label, when the user renamed it; absent falls back to `type`. */
  customName?: string;
}

export function nameChannels(raw: RawChannel[]): WirelessChannel[] {
  const sorted = [...raw].sort(
    (a, b) => compareNodeId(a.nodeId, b.nodeId) || a.slotIndex - b.slotIndex,
  );

  const groups = new Map<string, RawChannel[]>();
  for (const ch of sorted) {
    const base = ch.customName || ch.type;
    const group = groups.get(base);
    if (group) group.push(ch);
    else groups.set(base, [ch]);
  }

  const result: WirelessChannel[] = [];
  for (const [base, group] of groups) {
    group.forEach((ch, index) => {
      result.push({
        nodeId: ch.nodeId,
        slotIndex: ch.slotIndex,
        name: index === 0 ? base : `${base} ${index + 1}`,
        type: ch.type,
        origin_id: ch.origin_id,
        origin_slot: ch.origin_slot,
      });
    });
  }
  return result;
}
