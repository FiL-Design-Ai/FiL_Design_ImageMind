/**
 * Shared styling hook applied to every FiL_Design_ImageMind node before its dedicated
 * registration module runs. Sets minimum sizes, family tag, a help menu
 * entry, and the node's title/body color. Mirrors the legacy
 * `web/core/node_style.js` contract.
 */
import { ACTIVE_PALETTE, activeThemeName } from "@/styles/brand";
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
      onDrawTitleText?: unknown;
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
  // Note: node.color sets Canvas title text color. Set strictly to crisp #ffffff
  // on EVERY theme so LiteGraph canvas text matches DOM header instead of
  // rendering a duplicate colored drop-shadow offset underneath!
  p.color = "#ffffff";
  p.bgcolor = ACTIVE_PALETTE.panelAlt;
  const originalCreated = p.onNodeCreated;
  p.onNodeCreated = function (this: { color?: string; bgcolor?: string }, ...args: unknown[]) {
    const result = originalCreated?.apply(this, args);
    this.color = "#ffffff";
    this.bgcolor = ACTIVE_PALETTE.panelAlt;
    return result;
  };

  p.onDrawTitleText = function (
    this: unknown,
    ctx: CanvasRenderingContext2D,
    _title: string,
    _scale: number,
  ) {
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.fillStyle = "#ffffff";
  };

  // Dark title bar with a left accent stripe instead of a solid accent fill.
  p.onDrawTitleBar = function (
    this: { collapsed?: boolean },
    ctx: CanvasRenderingContext2D,
    titleHeight: number,
    size: [number, number],
    _scale: number,
    fgcolor: string,
  ) {
    // By name, never by accent value. Comparing `ACTIVE_PALETTE.accent` to a hex
    // literal ties the whole treatment below to a colour that is expected to
    // move: every accent here is held to a WCAG contrast ratio, so retuning one
    // is routine — and under the old check that silently dropped its theme into
    // the plain `else` branch with nothing to show for it.
    const theme = activeThemeName();
    const isCyberpunk = theme === "cyberpunk";
    const isCyberpunk2077 = theme === "cyberpunk_2077";
    const isPipboy = theme === "pipboy";
    const isNeoEmerald = theme === "neo_emerald";
    const isNftVibe = theme === "nft_vibe";
    const isHollywoodTeal = theme === "hollywood_teal";
    const radius = (isCyberpunk || isCyberpunk2077) ? 2 : isPipboy ? 4 : isHollywoodTeal ? 12 : (isNeoEmerald || isNftVibe) ? 16 : (globalThis as { LiteGraph?: { ROUND_RADIUS?: number } }).LiteGraph?.ROUND_RADIUS ?? 8;
    const collapsed = Boolean(this.collapsed);
    ctx.fillStyle = ACTIVE_PALETTE.panel;
    ctx.beginPath();
    ctx.roundRect(0, -titleHeight, size[0], titleHeight, collapsed ? [radius] : [radius, radius, 0, 0]);
    ctx.fill();

    if (isCyberpunk) {
      // Vivid Pink + Cyan Dual Neon
      ctx.shadowColor = "rgba(255, 0, 128, 0.8)";
      ctx.shadowBlur = 10;
      ctx.fillStyle = "#ff0080";
      ctx.fillRect(0, -titleHeight, 4, titleHeight);

      ctx.shadowColor = "rgba(0, 255, 255, 0.8)";
      ctx.shadowBlur = 10;
      ctx.fillStyle = "#00ffff";
      ctx.fillRect(4, -titleHeight, 3, titleHeight);
      ctx.shadowBlur = 0;
    } else if (isCyberpunk2077) {
      // Official Cyberpunk 2077 High-Voltage Yellow + Night City Cyan
      ctx.shadowColor = "rgba(252, 238, 10, 0.9)";
      ctx.shadowBlur = 12;
      ctx.fillStyle = "#fcee0a";
      ctx.fillRect(0, -titleHeight, 5, titleHeight);

      ctx.shadowColor = "rgba(0, 240, 255, 0.8)";
      ctx.shadowBlur = 10;
      ctx.fillStyle = "#00f0ff";
      ctx.fillRect(5, -titleHeight, 3, titleHeight);
      ctx.shadowBlur = 0;
    } else if (isHollywoodTeal) {
      // Hollywood Blockbuster Dual Neon: Electric Teal + Amber Fire
      ctx.shadowColor = "rgba(0, 210, 190, 0.8)";
      ctx.shadowBlur = 10;
      ctx.fillStyle = "#00d2be";
      ctx.fillRect(0, -titleHeight, 4, titleHeight);

      ctx.shadowColor = "rgba(249, 115, 22, 0.8)";
      ctx.shadowBlur = 10;
      ctx.fillStyle = "#f97316";
      ctx.fillRect(4, -titleHeight, 3, titleHeight);
      ctx.shadowBlur = 0;
    } else if (isPipboy) {
      // CRT Terminal Phosphor Border & Grid Line
      ctx.strokeStyle = "#00ff00";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(0, -titleHeight, size[0], titleHeight, collapsed ? [radius] : [radius, radius, 0, 0]);
      ctx.stroke();

      // Top corner bracket accents (PipBoy Terminal UI)
      ctx.fillStyle = "#00ff00";
      ctx.fillRect(2, -titleHeight + 2, 8, 2);
      ctx.fillRect(2, -titleHeight + 2, 2, 8);
      ctx.fillRect(size[0] - 10, -titleHeight + 2, 8, 2);
      ctx.fillRect(size[0] - 4, -titleHeight + 2, 2, 8);
    } else if (isNeoEmerald || isNftVibe) {
      // Sleek Neon Glow Accent Stripe
      ctx.shadowColor = isNftVibe ? "rgba(208, 255, 0, 0.7)" : "rgba(0, 255, 136, 0.6)";
      ctx.shadowBlur = 10;
      const stripeWidth = 5;
      ctx.fillStyle = fgcolor || (isNftVibe ? "#d0ff00" : "#00ff88");
      ctx.beginPath();
      ctx.roundRect(0, -titleHeight, stripeWidth, titleHeight, collapsed ? [radius, 0, 0, radius] : [radius, 0, 0, 0]);
      ctx.fill();
      ctx.shadowBlur = 0;
    } else {
      const stripeWidth = 3;
      ctx.fillStyle = fgcolor || ACTIVE_PALETTE.accent;
      ctx.beginPath();
      ctx.roundRect(0, -titleHeight, stripeWidth, titleHeight, collapsed ? [radius, 0, 0, radius] : [radius, 0, 0, 0]);
      ctx.fill();
    }
  };

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
    if (node.properties?.fil_custom_color) continue;
    node.color = "#ffffff";
    node.bgcolor = ACTIVE_PALETTE.panelAlt;
  }
  const canvas = (app as { canvas?: { setDirty?: (a: boolean, b: boolean) => void } }).canvas;
  canvas?.setDirty?.(true, true);
}
