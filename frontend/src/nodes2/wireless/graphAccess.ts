/**
 * Small reads over a `WirelessGraph` that every other module in here needs —
 * kept separate so `channels.ts` and `resolve.ts` stay about their own rules,
 * not about how to poke at a graph-shaped object.
 */

import { CHANNEL_NODE_TYPE, type NodeId, type WirelessGraph, type WirelessNode } from "./types";

/** The one graph LiteGraph hands us — never recurses into a node's own subgraph, by design (rule 7). */
export function allNodes(graph: WirelessGraph): WirelessNode[] {
  return graph._nodes ?? [];
}

/** Same fallback `recreateNode.ts` uses: `comfyClass` is the stable id, `type` covers hosts that skip it. */
export function nodeTypeName(node: WirelessNode): string | undefined {
  return node.comfyClass ?? node.type;
}

export function isChannelNode(node: WirelessNode): boolean {
  return nodeTypeName(node) === CHANNEL_NODE_TYPE;
}

/** What to show a user for this node — its own header text, falling back to its type, then its id. */
export function nodeTitle(node: WirelessNode): string {
  return node.title?.trim() || nodeTypeName(node) || String(node.id);
}

/** The same lookup, from just an id — for callers building a row list, not walking `node.inputs`. */
export function nodeTitleById(graph: WirelessGraph, id: NodeId): string {
  const node = graph.getNodeById?.(id);
  return node ? nodeTitle(node) : String(id);
}

/**
 * Numeric ids (the normal LiteGraph case) sort numerically; anything else
 * falls back to string order. Either way it is stable and independent of
 * scan order, which is what makes channel numbering (`MODEL`, `MODEL 2`)
 * deterministic across re-runs of the same graph.
 */
export function compareNodeId(a: NodeId, b: NodeId): number {
  const na = typeof a === "number" ? a : Number(a);
  const nb = typeof b === "number" ? b : Number(b);
  if (Number.isFinite(na) && Number.isFinite(nb)) return na - nb;
  return String(a).localeCompare(String(b));
}

export interface ResolvedOrigin {
  origin_id: NodeId;
  origin_slot: number;
  type: string;
}

/**
 * Follow a link id back to the slot it comes from — the same path
 * `switch.ts` reads (`node.graph.links` → `getNodeById` → `outputs[slot]`),
 * preferring the origin's own declared type over whatever the link itself
 * carries.
 */
export function resolveLinkOrigin(graph: WirelessGraph, linkId: number): ResolvedOrigin | null {
  const link = graph.links?.[linkId];
  if (!link) return null;
  const originNode = graph.getNodeById?.(link.origin_id);
  const originSlot = originNode?.outputs?.[link.origin_slot];
  const type = originSlot?.type || link.type || "*";
  return { origin_id: link.origin_id, origin_slot: link.origin_slot, type };
}
