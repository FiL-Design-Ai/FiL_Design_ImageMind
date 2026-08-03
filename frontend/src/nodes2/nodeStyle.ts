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

/**
 * A node's declared `badges` (the `opts.badges` this file assigns to the
 * prototype below) never reach LiteGraph's own `drawBadges()`: `LGraphNode`
 * declares `badges: (...)[] = []` as a class field, which — same trap as
 * `color`/`bgcolor` above — runs in every instance's constructor and shadows
 * whatever the prototype holds. `node.badges` reads back `[]` on every node
 * this pack has ever registered a badge for; nothing has ever drawn one.
 * That is a real, separate bug (LiteGraph's built-in badge slot floats
 * *above* the node besides, not inside the title row this reads for) — worth
 * fixing on its own, not silently absorbed into a title-bar treatment. This
 * reads the ORIGINAL prototype value directly, past the instance shadow, so
 * the pill below can use the text a node already declares without waiting on
 * that fix.
 */
function firstDeclaredBadge(node: unknown): { text: string; color?: string; text_color?: string } | undefined {
  const proto = Object.getPrototypeOf(node) as { badges?: Array<{ text: string; color?: string; text_color?: string }> } | null;
  return proto?.badges?.[0];
}

/**
 * The pill sitting inline in the title row, right-aligned — e.g. Optic
 * Scanner's "LLM". Sized to its own text so a longer label never overlaps
 * the title on a narrow node.
 */
function drawInlineBadge(
  ctx: CanvasRenderingContext2D,
  badge: { text: string; color?: string; text_color?: string },
  titleHeight: number,
  nodeWidth: number,
): void {
  const label = badge.text.toUpperCase();
  ctx.font = "700 10px ui-monospace, monospace";
  const textWidth = ctx.measureText(label).width;
  const padX = 8;
  const pillWidth = textWidth + padX * 2;
  const pillHeight = 18;
  const right = nodeWidth - 10;
  const top = -titleHeight / 2 - pillHeight / 2;

  ctx.fillStyle = badge.color ? `${badge.color}33` : "rgba(255, 208, 0, 0.12)";
  ctx.strokeStyle = badge.color ?? "rgba(255, 208, 0, 0.45)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(right - pillWidth, top, pillWidth, pillHeight, pillHeight / 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = badge.text_color ?? badge.color ?? "#ffd000";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, right - pillWidth / 2, top + pillHeight / 2 + 1);
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
}

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
    const isCyberPunch = theme === "cyber_punch";
    const isCyberPunchHud = theme === "cyber_punch_hud";
    const radius = (isCyberpunk || isCyberpunk2077) ? 2 : isCyberPunchHud ? 2 : isPipboy ? 4 : isHollywoodTeal ? 12 : (isNeoEmerald || isNftVibe) ? 16 : isCyberPunch ? 14 : (globalThis as { LiteGraph?: { ROUND_RADIUS?: number } }).LiteGraph?.ROUND_RADIUS ?? 8;
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
    } else if (isCyberPunch) {
      // Cyber Punch — glass: no left stripe. The user's own reference
      // screenshot (a real Optic Scanner under this theme) shows a plain dark
      // bar flush with the glass body below it and a pill sitting inline at
      // the right — title and body read as one card because nothing marks a
      // seam between them, not because a stripe bridges it. A first pass
      // kept a yellow accent stripe here from the theme's older revisions;
      // that stripe has no source in the approved reference and is gone.
      const badge = firstDeclaredBadge(this);
      if (badge) drawInlineBadge(ctx, badge, titleHeight, size[0]);
    } else if (isCyberPunchHud) {
      // Cyber Punch — HUD: yellow outline plus diagonal corner brackets
      // (top-left + bottom-right only), matching `.v-hud .spec`'s own
      // four-gradient corner trick in the ui-lab sandbox exactly — that file
      // never draws all four corners or a chamfer, and a first pass here did
      // both (a top-right cut, yellow+red brackets on opposite corners).
      // Flat, no glow: the source treatment has no box-shadow on this
      // surface at all.
      ctx.strokeStyle = "#ffd000";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(0, -titleHeight, size[0], titleHeight, collapsed ? [radius] : [radius, radius, 0, 0]);
      ctx.stroke();

      ctx.fillStyle = "#ffd000";
      ctx.fillRect(2, -titleHeight + 2, 8, 2);
      ctx.fillRect(2, -titleHeight + 2, 2, 8);
      ctx.fillRect(size[0] - 10, -2, 8, 2);
      ctx.fillRect(size[0] - 2, -10, 2, 8);
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
    // `this` here is the assignment's receiver, not necessarily `p` — an
    // inherited accessor's setter runs with `this` bound to whatever object
    // the assignment was written on (JS spec, not our choice). Most
    // extensions patch the classic way, on the prototype itself
    // (`nodeType.prototype.getExtraMenuOptions = ...`), and that path needs
    // to keep landing in the shared `current` so the lazy getter above still
    // sees it. But cg-use-everywhere (and others) patch per node *instance*
    // (`node.getExtraMenuOptions = ...`), expecting the assignment to shadow
    // on that one node the way a plain prototype method would. Before this
    // check both paths wrote to the same `current` closure, so every
    // FiLOpticScanner (or any styled node) dropped on the graph re-wrapped
    // the one shared function one more layer deep — the "Reject UE Links /
    // UE Connectable Inputs / Add UE broadcasting" block from cg-use-
    // everywhere came back once per node of that type that had ever been
    // created, stacked into a single node's context menu.
    set(this: unknown, value: MenuFn) {
      if (this === p) {
        current = value;
      } else {
        Object.defineProperty(this as object, "getExtraMenuOptions", {
          value,
          writable: true,
          configurable: true,
          enumerable: true,
        });
      }
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
