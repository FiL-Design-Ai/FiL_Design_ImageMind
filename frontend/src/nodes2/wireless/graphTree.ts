/**
 * Every graph a workflow actually contains: the root, plus one entry per
 * subgraph *definition* reachable from it — the same enumeration LiteGraph's
 * own `LGraph.ts` uses internally (`[this.rootGraph, ...this.rootGraph.subgraphs.values()]`,
 * e.g. when it needs to check every placement of a subgraph before deleting
 * one).
 *
 * A channel resolves *only within the graph it lives in* — a Channel node
 * placed inside a subgraph serves receivers inside that same subgraph, never
 * the parent workflow or the reverse (`wireless.md` §3, "Границы"). That
 * default falls out of this module for free: `promptBridge.ts` resolves each
 * graph in this list independently, so a boundary is simply a graph this list
 * treats as a separate entry. Reaching *across* a boundary is not implemented
 * — see the note on `LinkToCreate` in `applyLinks.ts` for the concrete reason
 * (a real `LGraphNode.connect()` records its link in the *origin's* graph,
 * and a receiver in a different graph never sees it at resolve time, so a
 * cross-graph link would look wired on screen and carry nothing at
 * execution).
 *
 * One definition backs every place it is dragged onto the canvas, so this
 * resolves it once — not once per placement, and not once per open canvas
 * tab.
 */

import type { WirelessGraph } from "./types";

/** The root graph plus one `WirelessGraph` per subgraph definition, root first. */
export function graphsInTree(graph: WirelessGraph): WirelessGraph[] {
  const root = graph.rootGraph ?? graph;
  const subgraphs = root.subgraphs;
  if (!subgraphs || subgraphs.size === 0) return [root];
  return [root, ...subgraphs.values()];
}
