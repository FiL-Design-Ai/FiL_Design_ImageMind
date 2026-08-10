/**
 * Channels feeding same-named widgets — the opt-in answer to "why doesn't
 * the channel see my seed".
 *
 * A KSampler's `seed` is a widget, not an input: a constant the user sets,
 * serialised as a value, with no socket a link could land in. Converting it
 * ("Convert Widget to Input") is the explicit road; this is the quiet one.
 * At queue time the prompt replaces the widget's literal value with the
 * channel's link — the exact shape a converted widget serialises to — so the
 * graph stays exactly as drawn and the backend sees an ordinary typed link.
 *
 * Discipline, at the rulebook's bar for guesses:
 *  - names must match exactly, case-insensitive — SEED feeds `seed` and
 *    nothing else, never whatever happens to be numeric;
 *  - the widget's declared type must agree with the channel's; a host that
 *    spells every numeric widget "number" counts for INT and FLOAT alike,
 *    and the backend's own type check keeps the final word;
 *  - a widget that is already an input (converted) is owned by the link
 *    machinery and never touched here;
 *  - rule 6: the node feeding a channel never receives from it.
 */
import type { WirelessPlan } from "./plan";
import type { NodeId, WirelessGraph } from "./types";
import { allNodes, isChannelNode } from "./graphAccess";

export interface WidgetFeed {
  nodeId: NodeId;
  inputName: string;
  channelName: string;
  origin_id: NodeId;
  origin_slot: number;
}

function widgetTypeMatches(widgetType: string, channelType: string): boolean {
  const w = widgetType.toUpperCase();
  const c = channelType.toUpperCase();
  if (w === c) return true;
  return w === "NUMBER" && (c === "INT" || c === "FLOAT");
}

export function widgetFeeds(graph: WirelessGraph, plan: WirelessPlan): WidgetFeed[] {
  const feeds: WidgetFeed[] = [];
  for (const channel of plan.channels) {
    for (const node of allNodes(graph)) {
      if (!node || isChannelNode(node)) continue;
      if (String(channel.origin_id) === String(node.id)) continue; // rule 6
      const inputNames = new Set((node.inputs ?? []).map((i) => i?.name).filter(Boolean));
      for (const widget of node.widgets ?? []) {
        const name = widget?.name?.trim();
        if (!name || !widget.type) continue;
        if (inputNames.has(name)) continue; // converted — links own it
        if (name.toLowerCase() !== channel.name.toLowerCase()) continue;
        if (!widgetTypeMatches(widget.type, channel.type)) continue;
        feeds.push({
          nodeId: node.id,
          inputName: name,
          channelName: channel.name,
          origin_id: channel.origin_id,
          origin_slot: channel.origin_slot,
        });
      }
    }
  }
  return feeds;
}
