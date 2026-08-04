/**
 * Whether a workflow is currently being loaded — a fresh open, or switching
 * to a different tab. Both go through `app.loadGraphData`
 * (`scripts/app.ts:1169`), which brackets the whole restore between the
 * `beforeConfigureGraph`/`afterConfigureGraph` extension hooks
 * (`filExtension.ts` wires them straight to this module's setters).
 *
 * Restoring a saved graph re-announces every existing link to each node's
 * `onConnectionsChange` as `(NodeSlotType.INPUT, slot, true, ...)` — the same
 * shape as a wire the user just drew. Confirmed live: switching between two
 * saved workflows reopened 📡 Channel's target-list modal for a channel that
 * had already been resolved and left alone since the workflow was saved, on
 * every single switch. `channel.ts` checks `graphBeingConfigured()` before
 * queuing an ambiguity check, so only a wire actually drawn by the user — not
 * one the loader is simply restoring — can raise that modal.
 *
 * A counter, not a boolean: `cg-use-everywhere`'s own `shared.js` guards the
 * same event with `graph_being_configured += 1` / `-= 1` rather than a flag,
 * which survives a load nested inside another load (a subgraph's own restore
 * running inside the parent's) without the inner one's `false` prematurely
 * clearing the outer one's guard.
 */
let configuring = 0;

export function graphBeingConfigured(): boolean {
  return configuring > 0;
}

export function beginGraphConfigure(): void {
  configuring += 1;
}

export function endGraphConfigure(): void {
  configuring = Math.max(0, configuring - 1);
}
