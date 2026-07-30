/**
 * Tints the title bar of nodes that are not ours, when the user asks for it.
 *
 * Kept apart from `nodeStyle.ts` on purpose. That file owns our own 15 nodes and
 * may do what it likes to them; this one touches other packs' node types and
 * therefore plays by stricter rules:
 *
 *   1. **Nothing that serialises.** `node.color` and `node.bgcolor` are written
 *      into the saved workflow — open any graph in `docs/workflows/` and our
 *      nodes carry both in the JSON. Setting them on a foreign node would bake
 *      this pack's colour into the user's file for good: it travels to whoever
 *      they share the workflow with, survives uninstalling this pack, and
 *      collides with packs that colour their own nodes. So only `onDrawTitleBar`
 *      is used here — it repaints each frame and is stored nowhere. That is also
 *      why the body is left alone: its fill comes from `bgcolor`, and there is
 *      no non-serialising way to reach it.
 *
 *   2. **Chain, never replace.** Another pack may already have its own
 *      `onDrawTitleBar`. Ours draws first and then hands over, so a pack that
 *      paints its own header still wins on top of our stripe.
 *
 *   3. **Reversible at runtime.** The scope setting is read on every draw, so
 *      switching back to "FiL nodes only" restores foreign nodes on the next
 *      repaint with nothing left behind.
 *
 * Under the default canvas renderer (`Comfy.VueNodes.Enabled: false`, confirmed
 * on a live 1.47.10) a node has no DOM at all, so CSS cannot reach foreign nodes
 * — the canvas draw hook is the only mechanism that works there, which is the
 * whole reason this file exists rather than a stylesheet rule.
 */
import { ACTIVE_PALETTE } from "@/styles/brand";
import { SCOPE_ALL, SCOPE_CONNECTED, SCOPE_OURS, themeScope } from "@/stores/settings/appearanceSettings";

interface ForeignProto {
  _filForeignTinted?: boolean;
  comfyClass?: string;
  onDrawTitleBar?: ((...a: unknown[]) => unknown) | undefined;
}

interface GraphNode {
  id?: string | number;
  type?: string;
  comfyClass?: string;
  inputs?: Array<{ link?: number | null }>;
  outputs?: Array<{ links?: number[] | null }>;
}

/** Our own nodes are all `FiL`-prefixed — the same test `useRunButtonFx` uses. */
function isOurNode(node: { comfyClass?: string; type?: string } | null | undefined): boolean {
  const id = node?.comfyClass ?? node?.type ?? "";
  return id.startsWith("FiL");
}

/**
 * Node ids that sit one link away from one of ours, in either direction.
 *
 * Recomputed per draw rather than cached: a cache would have to be invalidated
 * on every connect, disconnect, node removal and workflow load, and a stale
 * "connected" set shows the wrong nodes tinted — a caching bug that looks like a
 * rendering bug. The walk is over links the graph already holds in memory and
 * runs once per frame for graphs of a few hundred nodes.
 */
function neighboursOfOurNodes(graph: unknown): Set<string | number> {
  const out = new Set<string | number>();
  const g = graph as { _nodes?: GraphNode[]; links?: Record<string, unknown> } | undefined;
  const nodes = g?._nodes;
  if (!nodes) return out;

  const linkTable = (g as { links?: Record<string, { origin_id?: string | number; target_id?: string | number }> })
    .links;
  if (!linkTable) return out;

  const linkOf = (id: number) =>
    (linkTable as Record<string, { origin_id?: string | number; target_id?: string | number }>)[String(id)];

  for (const node of nodes) {
    if (!isOurNode(node)) continue;
    for (const input of node.inputs ?? []) {
      if (input.link == null) continue;
      const origin = linkOf(input.link)?.origin_id;
      if (origin != null) out.add(origin);
    }
    for (const output of node.outputs ?? []) {
      for (const linkId of output.links ?? []) {
        const target = linkOf(linkId)?.target_id;
        if (target != null) out.add(target);
      }
    }
  }
  return out;
}

/** Should this specific foreign node be tinted right now? */
function shouldTint(node: GraphNode): boolean {
  const scope = themeScope();
  if (scope === SCOPE_OURS) return false;
  if (scope === SCOPE_ALL) return true;
  if (scope !== SCOPE_CONNECTED) return false;

  const graph = (globalThis as { app?: { graph?: unknown } }).app?.graph;
  if (!graph) return false;
  const id = node.id;
  return id != null && neighboursOfOurNodes(graph).has(id);
}

/**
 * Give a foreign node type our title-bar stripe, gated on the scope setting.
 *
 * Called from `beforeRegisterNodeDef` for every node type ComfyUI registers —
 * ours bail out, since `nodeStyle.ts` already dresses them properly.
 */
export function tintForeignNode(nodeType: unknown): void {
  const proto = (nodeType as { prototype?: ForeignProto })?.prototype;
  if (!proto) return;
  if (proto._filForeignTinted) return;
  proto._filForeignTinted = true;

  const inner = proto.onDrawTitleBar;

  proto.onDrawTitleBar = function (
    this: GraphNode & { collapsed?: boolean },
    ...args: unknown[]
  ) {
    if (shouldTint(this)) {
      const ctx = args[0] as CanvasRenderingContext2D | undefined;
      const titleHeight = args[1] as number | undefined;
      if (ctx && typeof titleHeight === "number") {
        ctx.save();
        ctx.fillStyle = ACTIVE_PALETTE.accent;
        ctx.fillRect(0, -titleHeight, 3, titleHeight);
        ctx.restore();
      }
    }
    // Whatever the owning pack drew still runs, and runs last.
    return inner?.apply(this, args);
  };
}
