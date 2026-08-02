/**
 * Wire a resolution into the graph for real, then put the graph back.
 *
 * This is what runs around prompt building: ComfyUI's serializer only sees
 * actual links, so the channels have to become ones for the length of that
 * call and disappear again immediately. Anything left behind here is a link
 * the user never drew, saved into their workflow.
 *
 * The undo does not trust `connect()` to be reversible by symmetry. It snapshots
 * the three places a link is recorded — `graph.links`, the target input's `link`,
 * the origin output's `links` — and restores those, so a host that stamps extra
 * bookkeeping during `connect()` still ends up with the state it started from.
 *
 * `findNode` below looks a link's `origin_id`/`target_id` up only within the
 * one `graph` this call was given — never across a subgraph boundary, and not
 * by accident: `LGraphNode.connect()` records the new link in the *origin*
 * node's own `graph.links`, so a receiver living in a different graph would
 * never see it at resolve time — the link would sit on screen looking
 * connected while carrying nothing when the prompt actually runs. Skipping a
 * cross-graph pair here (silently, the same as any other node this call
 * can't find) is what keeps that from ever being attempted — see
 * `graphTree.ts` for where each graph in a workflow is resolved separately in
 * the first place, which is what makes origin and target the same graph or
 * nothing here.
 */

import type { LinkToCreate, NodeId, WirelessGraph, WirelessNode, WirelessSlot } from "./types";
import { allNodes } from "./graphAccess";

export interface AppliedWireless {
  /** How many links were actually made — fewer than requested if a node or slot was missing. */
  created: number;
  /** Put the graph back exactly as it was. Safe to call once; further calls do nothing. */
  restore: () => void;
}

interface InputSnapshot {
  slot: WirelessSlot;
  link: number | null | undefined;
}

interface OutputSnapshot {
  slot: WirelessSlot;
  links: number[] | null | undefined;
}

function findNode(graph: WirelessGraph, id: NodeId): WirelessNode | undefined {
  const viaHost = graph.getNodeById?.(id);
  if (viaHost) return viaHost;
  return allNodes(graph).find((n) => String(n.id) === String(id));
}

export function applyWirelessLinks(graph: WirelessGraph, links: LinkToCreate[]): AppliedWireless {
  const inputSnapshots: InputSnapshot[] = [];
  const outputSnapshots: OutputSnapshot[] = [];
  const linkIdsBefore = new Set(Object.keys(graph.links ?? {}));
  let created = 0;
  let restored = false;

  for (const link of links) {
    const origin = findNode(graph, link.origin_id);
    const target = findNode(graph, link.target_id);
    if (!origin || !target) continue;

    const outputSlot = origin.outputs?.[link.origin_slot];
    const inputSlot = target.inputs?.[link.target_slot];
    if (!outputSlot || !inputSlot) continue;
    if (typeof origin.connect !== "function") continue;

    // Snapshot before connecting, and only for slots actually touched — a slot
    // recorded twice would restore the value the first connect already changed.
    inputSnapshots.push({ slot: inputSlot, link: inputSlot.link });
    outputSnapshots.push({ slot: outputSlot, links: outputSlot.links ? [...outputSlot.links] : outputSlot.links });

    origin.connect(link.origin_slot, target, link.target_slot);
    created += 1;
  }

  const restore = () => {
    if (restored) return;
    restored = true;

    // Drop every link id that appeared while we were connected. Reading the
    // registry rather than the return value of `connect()` covers hosts that
    // register more than one entry, or none the caller can see.
    if (graph.links) {
      for (const key of Object.keys(graph.links)) {
        if (!linkIdsBefore.has(key)) delete graph.links[Number(key)];
      }
    }

    // Reverse order: if the same slot were ever snapshotted twice, the earliest
    // snapshot — the true original — is the one that lands last.
    for (let i = outputSnapshots.length - 1; i >= 0; i--) {
      const snapshot = outputSnapshots[i];
      if (snapshot.links === undefined) delete snapshot.slot.links;
      else snapshot.slot.links = snapshot.links;
    }
    for (let i = inputSnapshots.length - 1; i >= 0; i--) {
      const snapshot = inputSnapshots[i];
      if (snapshot.link === undefined) delete snapshot.slot.link;
      else snapshot.slot.link = snapshot.link;
    }
  };

  return { created, restore };
}
