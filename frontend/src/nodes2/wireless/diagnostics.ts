/**
 * Flattens a `WirelessResolution` into rows a panel can list, one row per
 * problem, each pointing at the node a click should select and center on.
 *
 * Deliberately not localized text: every row carries its raw data (channel
 * name, both types, the candidate list) and a `kind` tag, and the panel maps
 * `kind` to a translated sentence — the same split `targets.ts` makes between
 * `ChannelTargetState` and `ChannelPanel.vue`'s `reason()`. Keeping English
 * strings out of `nodes2/wireless/` means this module has no locale to keep in
 * sync.
 */

import type { NodeId, WirelessChannel, WirelessGraph } from "./types";
import { nodeTitleById } from "./graphAccess";
import type { WirelessPlan, WirelessTreePlan } from "./plan";

export type DiagnosticKind =
  | "dormant"
  | "ambiguous"
  | "typeMismatch"
  | "unknownChannel"
  | "selfLoop"
  | "unusedChannel";

export interface DiagnosticRow {
  kind: DiagnosticKind;
  /** The node a click on this row should select and center on. */
  nodeId: NodeId;
  nodeTitle: string;
  input?: string;
  channelName?: string;
  type?: string;
  inputType?: string;
  channelType?: string;
  /** `ambiguous` only — the channels an auto-wire could have picked between. */
  candidates?: string[];
}

/** Channel rows never carry their own slot label — `wireless.md` names channels, not slots. */
function channelOrigin(channels: WirelessChannel[], name: string): WirelessChannel | undefined {
  return channels.find((c) => c.name === name);
}

export function wirelessDiagnostics(graph: WirelessGraph, plan: WirelessPlan): DiagnosticRow[] {
  const rows: DiagnosticRow[] = [];
  const title = (id: NodeId) => nodeTitleById(graph, id);

  for (const e of plan.resolution.dormant) {
    rows.push({ kind: "dormant", nodeId: e.node_id, nodeTitle: title(e.node_id), input: e.input, channelName: e.channelName });
  }
  for (const e of plan.resolution.ambiguous) {
    rows.push({
      kind: "ambiguous",
      nodeId: e.node_id,
      nodeTitle: title(e.node_id),
      input: e.input,
      type: e.type,
      candidates: e.candidates,
    });
  }
  for (const e of plan.resolution.typeMismatch) {
    rows.push({
      kind: "typeMismatch",
      nodeId: e.node_id,
      nodeTitle: title(e.node_id),
      input: e.input,
      channelName: e.channelName,
      inputType: e.inputType,
      channelType: e.channelType,
    });
  }
  for (const e of plan.resolution.unknownChannel) {
    rows.push({ kind: "unknownChannel", nodeId: e.node_id, nodeTitle: title(e.node_id), input: e.input, channelName: e.channelName });
  }
  for (const e of plan.resolution.selfLoop) {
    rows.push({ kind: "selfLoop", nodeId: e.node_id, nodeTitle: title(e.node_id), input: e.input, channelName: e.channelName });
  }
  for (const name of plan.resolution.unusedChannels) {
    // The row points at the transmitter, not some receiver — there is none.
    const channel = channelOrigin(plan.channels, name);
    if (!channel) continue; // the channel vanished between resolving and reading — nothing to point at
    rows.push({ kind: "unusedChannel", nodeId: channel.nodeId, nodeTitle: title(channel.nodeId), channelName: name });
  }

  return rows;
}

/** One row, plus the graph it came from — what a click needs to find the right node in. */
export interface GraphedDiagnosticRow extends DiagnosticRow {
  graph: WirelessGraph;
}

/**
 * Every problem in the whole workflow, not just whichever graph is on screen
 * — a subgraph's own channels and receivers are resolved separately per
 * `graphTree.ts`, so this is the only way to see a problem sitting inside one
 * without opening it first.
 */
export function wirelessDiagnosticsTree(treePlan: WirelessTreePlan): GraphedDiagnosticRow[] {
  return treePlan.entries.flatMap(({ graph, plan }) =>
    wirelessDiagnostics(graph, plan).map((row) => ({ ...row, graph })),
  );
}
