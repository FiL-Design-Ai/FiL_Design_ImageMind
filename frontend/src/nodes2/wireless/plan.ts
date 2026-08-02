/**
 * The calls the rest of the pack makes: work out the channel links for one
 * graph, or for every graph a workflow contains, and optionally put them in
 * place.
 *
 * Separate from `index.ts` so `promptBridge.ts` can import it without the two
 * files importing each other through the barrel.
 */

import { collectChannels } from "./channels";
import { resolveWireless } from "./resolve";
import { applyWirelessLinks, type AppliedWireless } from "./applyLinks";
import { graphsInTree } from "./graphTree";
import type { WirelessChannel, WirelessGraph, WirelessResolution } from "./types";

export interface WirelessPlan {
  channels: WirelessChannel[];
  resolution: WirelessResolution;
}

/** Scan and decide, without touching the graph. This is what the panel and the overlay read. */
export function planWireless(graph: WirelessGraph): WirelessPlan {
  const channels = collectChannels(graph);
  return { channels, resolution: resolveWireless(graph, channels) };
}

/**
 * Plan and wire it up in one go, for use around prompt building.
 *
 * The caller owns the undo and must run it in a `finally` — a thrown serializer
 * would otherwise leave invented links in the user's workflow.
 */
export function applyWireless(graph: WirelessGraph): AppliedWireless & { plan: WirelessPlan } {
  const plan = planWireless(graph);
  const applied = applyWirelessLinks(graph, plan.resolution.links);
  return { ...applied, plan };
}

/** One graph's plan, tagged with the graph it belongs to — what a workflow-wide reader needs. */
export interface WirelessTreePlanEntry {
  graph: WirelessGraph;
  plan: WirelessPlan;
}

export interface WirelessTreePlan {
  entries: WirelessTreePlanEntry[];
}

/**
 * Plan every graph in the workflow — the root, and every subgraph definition
 * — each resolved against its own nodes only (`graphTree.ts`). This is what a
 * global reader (the diagnostics panel) needs; a single canvas view only ever
 * needs `planWireless` for whichever one graph it is showing.
 */
export function planWirelessTree(graph: WirelessGraph): WirelessTreePlan {
  return { entries: graphsInTree(graph).map((g) => ({ graph: g, plan: planWireless(g) })) };
}

export interface AppliedWirelessTree {
  /** Links actually made, summed across every graph. */
  created: number;
  /** Restore every graph this touched. Safe to call once; further calls do nothing. */
  restore: () => void;
  plan: WirelessTreePlan;
}

/**
 * `applyWireless`, for the whole workflow at once — every graph gets its own
 * independent resolution and its own temporary links, all rolled back
 * together. This is what `promptBridge.ts` runs around a queue: a Channel
 * placed inside a subgraph has to work whether or not that subgraph happens
 * to be the one currently open on screen, since the prompt is built for the
 * whole workflow in one pass, not just the visible tab.
 */
export function applyWirelessTree(graph: WirelessGraph): AppliedWirelessTree {
  const entries: WirelessTreePlanEntry[] = [];
  const restores: Array<() => void> = [];
  let created = 0;

  for (const g of graphsInTree(graph)) {
    const plan = planWireless(g);
    entries.push({ graph: g, plan });
    const applied = applyWirelessLinks(g, plan.resolution.links);
    created += applied.created;
    restores.push(applied.restore);
  }

  let restored = false;
  const restore = () => {
    if (restored) return;
    restored = true;
    // Reverse order: undoes the most recently touched graph first, though
    // nothing here actually depends on that — each graph's own restore is
    // already self-contained.
    for (let i = restores.length - 1; i >= 0; i--) restores[i]();
  };

  return { created, restore, plan: { entries } };
}
