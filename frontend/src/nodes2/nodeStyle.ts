/**
 * Shared styling hook applied to every FiL_LLM node before its dedicated
 * registration module runs. Sets minimum sizes, family tag, a help menu
 * entry, and the node's title/body color. Mirrors the legacy
 * `web/core/node_style.js` contract.
 */
import { ACTIVE_PALETTE } from "@/styles/brand";
import { getColorMenuItems } from "@/composables/useColorPicker";

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

  // Dark title bar with a left accent stripe instead of a solid accent
  // fill. `onDrawTitleBar` is a real per-node-type LiteGraph hook (verified
  // against the actual bundled litegraph in comfyui_frontend_package — not
  // present in third-party vendored .d.ts typings, which is what earlier led
  // to wrongly assuming this needed a global LGraphCanvas monkeypatch): it
  // only replaces *this node type's* title background fill, title TEXT is
  // drawn separately by `drawTitleText`/`onDrawTitleText` and unaffected.
  // `fgcolor` is `this.renderingColor` (== node.color), so the stripe still
  // reflects the "Change color…" picker (useColorPicker.ts) per node.
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

  // "Change color…" context-menu item (useColorPicker.ts) — previously
  // built (FilColorPicker.vue + getColorMenuItems()) but never actually
  // wired into any node's getExtraMenuOptions, so the feature never
  // appeared anywhere. Added here once, on the shared styling hook, covers
  // every FiL node instead of repeating this in each per-node module.
  const originalMenuOptions = p.getExtraMenuOptions;
  p.getExtraMenuOptions = function (this: unknown, ...args: unknown[]) {
    const result = originalMenuOptions?.apply(this, args);
    const options = args[1] as unknown[] | undefined;
    if (Array.isArray(options)) {
      options.push(null, ...getColorMenuItems(this as { color?: string; properties?: Record<string, unknown> }));
    }
    return result;
  };
}

/**
 * Re-colors every already-placed FiL_LLM node on the current graph to
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
    // Skip nodes the user manually recolored via "Change color…" (see
    // useColorPicker.ts) — a per-node override should survive a global
    // theme switch, not get silently stomped back to the theme accent.
    if (node.properties?.fil_custom_color) continue;
    node.color = ACTIVE_PALETTE.accent;
    node.bgcolor = ACTIVE_PALETTE.panelAlt;
  }
  const canvas = (app as { canvas?: { setDirty?: (a: boolean, b: boolean) => void } }).canvas;
  canvas?.setDirty?.(true, true);
}