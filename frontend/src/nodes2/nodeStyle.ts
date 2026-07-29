/**
 * Shared styling hook applied to every FiL_Design_ImageMind node before its dedicated
 * registration module runs. Sets minimum sizes, family tag, a help menu
 * entry, and the node's title/body color. Mirrors the legacy
 * `web/core/node_style.js` contract.
 */
import { ACTIVE_PALETTE } from "@/styles/brand";
import { patchRecreateMenuItem } from "@/nodes2/recreateNode";

export interface StyledNodeOptions {
  minSize?: [number, number];
  family?: string;
  description?: string;
  badges?: Array<{ text: string; color?: string; text_color?: string }>;
}

const DEFAULT_FAMILY = "fil";

export function registerStyledNode(nodeType: unknown, opts: StyledNodeOptions = {}): void {
  const proto = nodeType as {
    prototype: {
      _filStyled?: boolean;
      minSize?: [number, number];
      _filFamily?: string;
      _filDescription?: string;
      badges?: Array<{ text: string; color?: string; text_color?: string }>;
      onMenu?: unknown;
      onNodeCreated?: (...a: unknown[]) => unknown;
      getExtraMenuOptions?: (...a: unknown[]) => unknown;
      __filOriginalGetWidgets?: unknown;
      color?: string;
      bgcolor?: string;
      onDrawTitleBar?: unknown;
    };
  };
  const p = proto.prototype;
  if (p._filStyled) return;
  p._filStyled = true;
  if (opts.minSize) p.minSize = opts.minSize;
  p._filFamily = opts.family ?? DEFAULT_FAMILY;
  p._filDescription = opts.description ?? "";
  if (opts.badges) p.badges = opts.badges;
  // One shared accent across every FiL node (advanced guide §14.4) instead
  // of LiteGraph's default per-category hash color, so the whole extension
  // reads as one family at a glance on a graph with many other nodes.
  // Setting these on the prototype alone isn't enough — LGraphNode's own
  // constructor assigns `this.color`/`this.bgcolor` as instance properties
  // (verified against a real ComfyUI instance: the prototype value was
  // shadowed to `undefined` on every created node), so it must also be
  // (re)applied per-instance in onNodeCreated.
  p.color = ACTIVE_PALETTE.accent;
  p.bgcolor = ACTIVE_PALETTE.panelAlt;
  const originalCreated = p.onNodeCreated;
  p.onNodeCreated = function (this: { color?: string; bgcolor?: string }, ...args: unknown[]) {
    const result = originalCreated?.apply(this, args);
    // Read at call time (not module-load time) so a node dropped after the
    // user switches themes (see styles/brand.ts applyFilTheme) picks up the
    // theme active *then*, not whatever was active when this extension
    // first registered its node types.
    this.color = ACTIVE_PALETTE.accent;
    this.bgcolor = ACTIVE_PALETTE.panelAlt;
    return result;
  };

  // An `onResize` patch used to live here, and removing it was the whole fix for
  // a defect that took down every node at once: blank panels plus a hard
  // "Required input is missing" from the server on Queue Prompt.
  //
  // It was written against a core bug — `onResize` for `customtext` summed every
  // entry of `node.widgets` to find the space left for text boxes and forgot to
  // skip `w.hidden`, so our ~10 hidden natives ate the Scanner's stretch. The
  // patch worked around it by assigning the visible subset to `node.widgets`,
  // running core, then restoring the full array in a `finally`.
  //
  // Both halves of that are now wrong on frontend 1.47.10:
  //
  //   - `node.widgets` is an instance accessor, not a data field, and its setter
  //     is one-way: widgets left out of the assigned array are dropped from the
  //     widget store for good. Measured on a live node — 11 widgets, assign a
  //     1-element slice, assign the original array back, still 1. So the
  //     `finally` restored nothing and the first resize of a FiL node destroyed
  //     every hidden widget it had. `graphToPrompt` then emitted the DOM widget
  //     as the node's only input, which is exactly what the server rejects.
  //   - the core bug is gone. `customtext` is a Vue component behind the widget
  //     store now, and the only `onResize` core installs comes from
  //     `addDOMWidget` itself, chaining the widget's `beforeResize`/`afterResize`
  //     — there is no height-summing loop over `node.widgets` left to fix.
  //
  // Panel stretch is ours to do now and is done, in `host/heightModel.ts` and
  // `host/nodeSizeSync.ts`. Nothing here may assign `node.widgets` again.

  // Dark title bar with a left accent stripe instead of a solid accent
  // fill. `onDrawTitleBar` is a real per-node-type LiteGraph hook (verified
  // against the actual bundled litegraph in comfyui_frontend_package — not
  // present in third-party vendored .d.ts typings, which is what earlier led
  // to wrongly assuming this needed a global LGraphCanvas monkeypatch): it
  // only replaces *this node type's* title background fill, title TEXT is
  // drawn separately by `drawTitleText`/`onDrawTitleText` and unaffected.
  // `fgcolor` is `this.renderingColor` (== node.color), so the stripe follows
  // whatever colour the node carries — including one set from ComfyUI's own
  // colour menu.
  p.onDrawTitleBar = function (
    this: { collapsed?: boolean },
    ctx: CanvasRenderingContext2D,
    titleHeight: number,
    size: [number, number],
    _scale: number,
    fgcolor: string,
  ) {
    const radius = (globalThis as { LiteGraph?: { ROUND_RADIUS?: number } }).LiteGraph?.ROUND_RADIUS ?? 8;
    const collapsed = Boolean(this.collapsed);
    ctx.fillStyle = ACTIVE_PALETTE.panel;
    ctx.beginPath();
    ctx.roundRect(0, -titleHeight, size[0], titleHeight, collapsed ? [radius] : [radius, radius, 0, 0]);
    ctx.fill();

    const stripeWidth = 3;
    ctx.fillStyle = fgcolor || ACTIVE_PALETTE.accent;
    ctx.beginPath();
    ctx.roundRect(0, -titleHeight, stripeWidth, titleHeight, collapsed ? [radius, 0, 0, radius] : [radius, 0, 0, 0]);
    ctx.fill();
  };

  // Everything another extension adds to the menu has to already be in the
  // array before we can repair an entry, and extension registration order is
  // not ours to choose. An accessor keeps our pass on the outside whichever way
  // it goes: whatever is assigned later lands in `current`, and the getter
  // hands out that value wrapped. It only rewrites a foreign entry's callback —
  // no menu items of its own, so nothing is added twice when wrappers nest.
  //
  // ComfyUI deprecated this in favour of an extension-level `getNodeMenuItems`,
  // and that replacement cannot express what this does: the frontend collects
  // hooks with `invokeExtensions("getNodeMenuItems", node).flat()`, so an
  // extension may contribute items and nothing else — there is no hook over the
  // assembled list. Checked against the docs and the bundled frontend; the
  // console currently warns about `getCanvasMenuOptions` only.
  //
  // Dropping it is the real exit, and it is not ours to take: the bug is in
  // `comfyui-manager/js/node_fixer.js`, which still patches this the classic
  // way and still copies links with `src_node.connect(slot, dest.id,
  // input.name)` — the shape that throws before its own `graph.remove(old)`.
  // Repairing other packs is out of scope for this one, so this stays until
  // they fix it, and then the whole accessor goes. Meanwhile the risk is known
  // and quiet:
  // when the legacy path is removed the repair stops running and Manager's
  // "Fix node (recreate)" is broken again for our nodes — nothing of ours
  // throws. `tests/nodeStyleMenu.test.ts` is what holds the behaviour.
  //
  // `inner` MUST be captured when the property is *read*, not read again when
  // the wrapper runs. Extensions patch this the classic way:
  //
  //   const original = node.getExtraMenuOptions;      // reads our getter
  //   node.getExtraMenuOptions = function (...) { original.apply(this, …) };
  //
  // With a late read, the `original` they captured would resolve to whatever
  // `current` holds *now* — which is their own function — and the two call each
  // other forever. Reproduced live with cg-use-everywhere: every context menu
  // died with "Maximum call stack size exceeded". Capturing on read makes the
  // chain strictly older-than, so it terminates. The result is cached per
  // `current` so repeated reads hand back the same function object.
  type MenuFn = (...a: unknown[]) => unknown;
  let current = p.getExtraMenuOptions as MenuFn | undefined;
  let wrapped: MenuFn | undefined;
  let wrappedFor: MenuFn | undefined;
  Object.defineProperty(p, "getExtraMenuOptions", {
    configurable: true,
    get() {
      if (wrapped && wrappedFor === current) return wrapped;
      const inner = current;
      wrappedFor = current;
      wrapped = function (this: unknown, ...args: unknown[]) {
        const result = inner?.apply(this, args);
        const options = args[1] as unknown[] | undefined;
        if (Array.isArray(options)) patchRecreateMenuItem(this as Parameters<typeof patchRecreateMenuItem>[0], options);
        return result;
      };
      return wrapped;
    },
    set(value: MenuFn) {
      current = value;
    },
  });
}

/**
 * Re-colors every already-placed FiL_Design_ImageMind node on the current graph to
 * `ACTIVE_PALETTE` — needed because switching themes (see
 * `styles/brand.ts applyFilTheme`) only affects *new* nodes automatically
 * (`onNodeCreated` reads `ACTIVE_PALETTE` live); nodes dropped under a
 * previous theme keep their `color`/`bgcolor` instance properties frozen at
 * whatever they were assigned at creation time otherwise.
 */
export function reapplyThemeToGraph(app: unknown): void {
  const nodes = (
    app as {
      graph?: {
        _nodes?: Array<{
          _filFamily?: string;
          color?: string;
          bgcolor?: string;
          properties?: Record<string, unknown>;
        }>;
      };
    }
  ).graph?._nodes;
  if (!nodes) return;
  for (const node of nodes) {
    if (!node._filFamily) continue;
    // Skip nodes carrying a manual colour override — it should survive a global
    // theme switch, not get silently stomped back to the theme accent. The flag
    // outlives the pack's own colour picker, which is gone: a workflow saved
    // while it existed still has it set.
    if (node.properties?.fil_custom_color) continue;
    node.color = ACTIVE_PALETTE.accent;
    node.bgcolor = ACTIVE_PALETTE.panelAlt;
  }
  const canvas = (app as { canvas?: { setDirty?: (a: boolean, b: boolean) => void } }).canvas;
  canvas?.setDirty?.(true, true);
}