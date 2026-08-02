/**
 * The plan the canvas and the diagnostics panel draw from, cached per graph.
 *
 * The overlay runs on every frame, and resolving walks every node and every
 * input — doing that per frame would show up on a large graph. So the result
 * is kept until something that could change it changes.
 *
 * Keyed per graph, not a single slot: a workflow with subgraphs has more than
 * one `WirelessGraph` in play at once — the canvas overlay resolves whichever
 * one is currently open, while the diagnostics panel (`liveTreePlan`) walks
 * all of them in the same tick. A single cached slot would have the two evict
 * each other's result every poll, defeating the cache for both.
 *
 * Two triggers, because neither alone is enough:
 *  - a cheap fingerprint catches the common edits (nodes added, wires drawn,
 *    a channel renamed) without walking the whole graph;
 *  - `invalidateWirelessPlan()` covers what the fingerprint deliberately does
 *    not look at — subscriptions, which live in node properties and are only
 *    ever changed by our own menu.
 */

import { isChannelValueInput } from "./types";
import { allNodes, isChannelNode } from "./graphAccess";
import { graphsInTree } from "./graphTree";
import { planWireless, type WirelessPlan, type WirelessTreePlan } from "./plan";
import type { WirelessGraph } from "./types";

interface CacheEntry {
  plan: WirelessPlan;
  fingerprint: string;
}

/**
 * Not a `WeakMap`: a `WirelessGraph` here is always a live LiteGraph object
 * (or a test fixture) held onto elsewhere for the life of the session — there
 * is nothing to leak by keeping a strong reference alongside it.
 */
const cache = new Map<WirelessGraph, CacheEntry>();

/**
 * What the fingerprint covers: how many nodes and links exist, and — for the
 * transmitters only — every value slot with its label and its link. Those are
 * the inputs to channel identity; everything else that matters moves the link
 * count.
 */
function fingerprint(graph: WirelessGraph): string {
  const nodes = allNodes(graph);
  const parts: string[] = [`${nodes.length}:${Object.keys(graph.links ?? {}).length}`];
  for (const node of nodes) {
    if (!isChannelNode(node)) continue;
    for (const input of node.inputs ?? []) {
      if (!input || !isChannelValueInput(input.name)) continue;
      parts.push(`${String(node.id)}/${input.name}/${input.label ?? ""}/${String(input.link ?? "")}`);
    }
  }
  return parts.join("|");
}

/** Drop every cached graph. Call after anything the fingerprint cannot see — a subscription edit. */
export function invalidateWirelessPlan(): void {
  cache.clear();
}

/** The current plan for this one graph, resolved only when something relevant moved. */
export function livePlan(graph: WirelessGraph): WirelessPlan {
  const current = fingerprint(graph);
  const entry = cache.get(graph);
  if (entry && entry.fingerprint === current) return entry.plan;

  const plan = planWireless(graph);
  cache.set(graph, { plan, fingerprint: current });
  return plan;
}

/**
 * The current plan for every graph in the workflow — the root plus every
 * subgraph definition (`graphTree.ts`) — each resolved through the same
 * per-graph cache `livePlan` uses, so this costs nothing extra when the
 * canvas overlay has already resolved the graph currently on screen this
 * tick.
 */
export function liveTreePlan(graph: WirelessGraph): WirelessTreePlan {
  return { entries: graphsInTree(graph).map((g) => ({ graph: g, plan: livePlan(g) })) };
}
