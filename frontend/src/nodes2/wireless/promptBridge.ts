/**
 * Where wireless channels meet ComfyUI: the graph gains its channel links for
 * the length of one prompt build, and loses them again immediately.
 *
 * This is the pack's only patch of a host method, and it is not a matter of
 * taste. Read from the frontend's own sources:
 *
 *  - `utils/executionUtil.ts` builds the prompt without invoking extensions at
 *    all, so the `graphToPrompt` *extension hook* never fires on queue — the
 *    pack already lost seed randomisation to this (see filExtension.ts).
 *  - `scripts/app.ts` has `ComfyApp.queuePrompt` call
 *    `await this.graphToPrompt(this.rootGraph)`. Through `this`, so an own
 *    property on the app instance shadows the prototype method and is what
 *    runs.
 *
 * Hence two wrappers. `queuePrompt` only sets a depth counter: `graphToPrompt`
 * is also called when saving a workflow and when sharing one, and substituting
 * links there would write invented wires into the user's file.
 */

import type { ComfyApp } from "@/types/comfy";
import { LOG_TAG } from "@/constants/brand";
import { wirelessEnabled, wirelessWidgetFeedsEnabled } from "@/stores/settings/wirelessSettings";
import { applyWirelessTree, type WirelessPlan, type WirelessTreePlan } from "./plan";
import type { WirelessGraph } from "./types";
import { widgetFeeds } from "./widgetFeeds";

/** The most recent resolution across the whole workflow, for the panel to read. */
let lastTreePlan: WirelessTreePlan | null = null;

export function latestWirelessTreePlan(): WirelessTreePlan | null {
  return lastTreePlan;
}

/**
 * The root graph's own plan, for callers that only care about one graph — the
 * shape the wireless test suite already exercises. `entries[0]` is always the
 * root: `graphsInTree` (`graphTree.ts`) puts it there deliberately.
 */
export function latestWirelessPlan(): WirelessPlan | null {
  return lastTreePlan?.entries[0]?.plan ?? null;
}

interface BridgeState {
  queueDepth: number;
  installed: boolean;
}

const state: BridgeState = { queueDepth: 0, installed: false };

/** True while a queue request is in flight — the one case where links are substituted. */
export function queueingPrompt(): boolean {
  return state.queueDepth > 0;
}

/**
 * Pick the graph being serialized.
 *
 * `queuePrompt` passes `this.rootGraph` explicitly, so the argument is the
 * authority; `app.graph` is only the fallback for callers that pass nothing.
 */
function targetGraph(args: unknown[], app: ComfyApp): WirelessGraph | null {
  const first = args[0] as WirelessGraph | undefined;
  if (first && Array.isArray(first._nodes)) return first;
  const fallback = app.graph as WirelessGraph | undefined;
  return fallback && Array.isArray(fallback._nodes) ? fallback : null;
}

/**
 * Replace same-named widget values with the channel's link, in the prompt
 * only — the graph is never touched (`widgetFeeds.ts` carries the rules).
 * The real host's prompt is `{output: {nodeId: {inputs: {...}}}}`; anything
 * else — a host whose serializer records links only — is left alone.
 */
function injectWidgetFeeds(prompt: unknown, treePlan: WirelessTreePlan): void {
  const output = (prompt as { output?: unknown } | null)?.output;
  if (!output || typeof output !== "object" || Array.isArray(output)) return;
  const byNode = output as Record<string, { inputs?: Record<string, unknown> } | undefined>;
  for (const entry of treePlan.entries) {
    for (const feed of widgetFeeds(entry.graph, entry.plan)) {
      const nodeEntry = byNode[String(feed.nodeId)];
      if (!nodeEntry || typeof nodeEntry !== "object") continue;
      const inputs = nodeEntry.inputs ?? (nodeEntry.inputs = {});
      inputs[feed.inputName] = [feed.origin_id, feed.origin_slot];
    }
  }
}

export function installWirelessPromptBridge(app: ComfyApp): void {
  if (state.installed) return;
  const originalGraphToPrompt = app.graphToPrompt;
  const originalQueuePrompt = app.queuePrompt;
  if (typeof originalGraphToPrompt !== "function") {
    console.warn(`${LOG_TAG} wireless: app.graphToPrompt is missing, channels stay inert`);
    return;
  }

  app.queuePrompt = async function (this: unknown, ...args: unknown[]) {
    state.queueDepth += 1;
    try {
      return await originalQueuePrompt?.apply(this, args);
    } finally {
      state.queueDepth -= 1;
    }
  };

  app.graphToPrompt = async function (this: unknown, ...args: unknown[]) {
    if (!queueingPrompt() || !wirelessEnabled()) {
      return await originalGraphToPrompt.apply(this, args);
    }

    const graph = targetGraph(args, app);
    if (!graph) return await originalGraphToPrompt.apply(this, args);

    let applied: { restore: () => void } | null = null;
    let treePlan: WirelessTreePlan | null = null;
    try {
      const result = applyWirelessTree(graph);
      applied = result;
      treePlan = result.plan;
      lastTreePlan = result.plan;
    } catch (error) {
      // A failure to resolve must not stop the user from running their graph.
      // They lose the channels for this run, not the run. `applied` stays null,
      // so the finally below has nothing to undo.
      console.warn(`${LOG_TAG} wireless: could not apply channels, queueing as drawn:`, error);
    }

    try {
      const prompt = await originalGraphToPrompt.apply(this, args);
      if (treePlan && wirelessWidgetFeedsEnabled()) injectWidgetFeeds(prompt, treePlan);
      return prompt;
    } finally {
      // Not conditional on success: a serializer that throws must still leave
      // the graph as the user drew it.
      try {
        applied?.restore();
      } catch (error) {
        console.error(`${LOG_TAG} wireless: failed to remove temporary links:`, error);
      }
    }
  };

  state.installed = true;
}

/** Test seam — the wrappers close over the originals, so a fresh app needs a fresh install. */
export function resetWirelessPromptBridge(): void {
  state.installed = false;
  state.queueDepth = 0;
  lastTreePlan = null;
}
