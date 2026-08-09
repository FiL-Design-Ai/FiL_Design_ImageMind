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
  /**
   * Cap the width LiteGraph computes at creation. Its `computeSize()` measures
   * the DOM panel's unconstrained content width (a combo's longest option, a
   * segmented pill's options in a row), which lands row panels at ~400px —
   * visibly wider than native nodes. New nodes start at this width instead;
   * saved workflows keep whatever size they were saved with.
   */
  initialWidth?: number;
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
export function firstDeclaredBadge(node: unknown): { text: string; color?: string; text_color?: string } | undefined {
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
      size?: [number, number];
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
  p.onNodeCreated = function (this: { color?: string; bgcolor?: string; size?: [number, number] }, ...args: unknown[]) {
    const result = originalCreated?.apply(this, args);
    this.color = "#ffffff";
    this.bgcolor = ACTIVE_PALETTE.panelAlt;
    if (opts.initialWidth != null && this.size && this.size[0] > opts.initialWidth) {
      this.size[0] = opts.initialWidth;
    }
    return result;
  };

  // The host's `drawTitleText` *replaces* the default title paint when this
  // hook exists (frontend 1.48.x: `if (this.onDrawTitleText) { …; return }`),
  // so the hook must draw the title itself — an earlier cut only set the
  // fill style and left the drawing to the host, which silently deleted the
  // title from every FiL node on the canvas renderer. The body below mirrors
  // the host's default path (font, truncation, pinned suffix, selected
  // colour) with the pack's crisp white instead of the drop-shadowed default.
  p.onDrawTitleText = function (
    this: {
      getTitle?: () => string | null;
      type?: string;
      pinned?: boolean;
      collapsed?: boolean;
      title_buttons?: Array<{ visible?: boolean; getWidth: (c: CanvasRenderingContext2D) => number }>;
    },
    ctx: CanvasRenderingContext2D,
    titleHeight: number,
    size: [number, number],
    _scale: number,
    titleFontStyle: string,
    selected: boolean,
  ) {
    if ((globalThis as { app?: { canvas?: { low_quality?: boolean } } }).app?.canvas?.low_quality) return;
    const liteGraph = (globalThis as { LiteGraph?: Record<string, unknown> }).LiteGraph;
    ctx.font = titleFontStyle;
    const raw = String(this.getTitle?.() ?? `❌ ${this.type}`) + (this.pinned ? "📌" : "");
    if (!raw) return;
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.fillStyle = selected
      ? ((liteGraph?.NODE_SELECTED_TITLE_COLOR as string | undefined) ?? ACTIVE_PALETTE.accent)
      : "#ffffff";
    let avail = size[0] - titleHeight * 2;
    if (this.title_buttons?.length) {
      let buttonsWidth = 0;
      for (const button of this.title_buttons) if (button.visible) buttonsWidth += button.getWidth(ctx) + 2;
      if (buttonsWidth > 0) avail -= buttonsWidth - 20;
    }
    let text = raw;
    if (this.collapsed) {
      text = raw.substr(0, 20);
    } else if (avail > 0 && ctx.measureText(raw).width > avail) {
      while (text.length > 1 && ctx.measureText(`${text}…`).width > avail) text = text.slice(0, -1);
      text += "…";
    }
    const textY = (liteGraph?.NODE_TITLE_TEXT_Y as number | undefined) ?? 20;
    ctx.textAlign = "left";
    ctx.fillText(text, titleHeight, textY - titleHeight);
  };

  // Dark title bar with a left accent stripe instead of a solid accent fill.
  //
  // The host's 5th argument, `fgcolor`, is deliberately ignored. It is
  // `node.renderingColor` — i.e. `node.color`, which this file pins to `#ffffff`
  // a few lines up for a reason that has nothing to do with the stripe. The
  // branches below used to read `fgcolor || <theme colour>`, so the `||` never
  // fell through and every single-stripe theme drew a WHITE bar where its accent
  // was meant to be. Naming the colour outright is also what lets
  // `styles/vueNodeSkin.ts` reproduce the same bar in CSS: there is no `fgcolor`
  // to consult on that side.
  p.onDrawTitleBar = function (
    this: { collapsed?: boolean },
    ctx: CanvasRenderingContext2D,
    titleHeight: number,
    size: [number, number],
  ) {
    // By name, never by accent value. Comparing `ACTIVE_PALETTE.accent` to a hex
    // literal ties the whole treatment below to a colour that is expected to
    // move: every accent here is held to a WCAG contrast ratio, so retuning one
    // is routine — and under the old check that silently dropped its theme into
    // the plain `else` branch with nothing to show for it.
    const theme = activeThemeName();
    // The host's level-of-detail flag: true once the zoom drops below the point
    // where text would be unreadable (`LGraphCanvas._isLowQuality`, recomputed
    // in `ds.onChanged`) — a zoom threshold, NOT a "canvas is moving" flag.
    //
    // Worth gating on all the same, and core sets the precedent by gating its
    // own node shadows the same way (`render_shadows && !low_quality`,
    // LGraphCanvas `drawNode`). Nothing here was gated on anything: the host
    // calls `onDrawTitleBar` unconditionally from `drawTitleBarBackground`
    // (LGraphNode) — no low-quality check on that path, unlike the title text
    // beside it — so the `shadowBlur` fills below repainted at full cost, per
    // FiL node, on every frame, at the zoom levels where the glow they buy is
    // too small to see.
    //
    // Note this does NOT cover the ordinary case of panning at working zoom,
    // where the glow still costs what it costs on every frame.
    const lowQuality = Boolean(
      (globalThis as { app?: { canvas?: { low_quality?: boolean } } }).app?.canvas?.low_quality,
    );
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
      ctx.shadowBlur = lowQuality ? 0 : 10;
      ctx.fillStyle = "#ff0080";
      ctx.fillRect(0, -titleHeight, 4, titleHeight);

      ctx.shadowColor = "rgba(0, 255, 255, 0.8)";
      ctx.shadowBlur = lowQuality ? 0 : 10;
      ctx.fillStyle = "#00ffff";
      ctx.fillRect(4, -titleHeight, 3, titleHeight);
      ctx.shadowBlur = 0;
    } else if (isCyberpunk2077) {
      // Official Cyberpunk 2077 High-Voltage Yellow + Night City Cyan
      ctx.shadowColor = "rgba(252, 238, 10, 0.9)";
      ctx.shadowBlur = lowQuality ? 0 : 12;
      ctx.fillStyle = "#fcee0a";
      ctx.fillRect(0, -titleHeight, 5, titleHeight);

      ctx.shadowColor = "rgba(0, 240, 255, 0.8)";
      ctx.shadowBlur = lowQuality ? 0 : 10;
      ctx.fillStyle = "#00f0ff";
      ctx.fillRect(5, -titleHeight, 3, titleHeight);
      ctx.shadowBlur = 0;
    } else if (isHollywoodTeal) {
      // Hollywood Blockbuster Dual Neon: Electric Teal + Amber Fire
      ctx.shadowColor = "rgba(0, 210, 190, 0.8)";
      ctx.shadowBlur = lowQuality ? 0 : 10;
      ctx.fillStyle = "#00d2be";
      ctx.fillRect(0, -titleHeight, 4, titleHeight);

      ctx.shadowColor = "rgba(249, 115, 22, 0.8)";
      ctx.shadowBlur = lowQuality ? 0 : 10;
      ctx.fillStyle = "#f97316";
      ctx.fillRect(4, -titleHeight, 3, titleHeight);
      ctx.shadowBlur = 0;
    } else if (isPipboy) {
      // Nothing here on purpose — this used to stroke a green rectangle and
      // drop two corner brackets around the TITLE alone, which is the exact
      // "box inside a box" `cyber_punch_hud` already documents: a framed strip
      // sitting above the un-boxed slot row, itself sitting above the DOM
      // card's own border. One frame around the whole node, in
      // `onDrawForeground` below, replaces all three.
    } else if (isCyberPunch) {
      // Cyber Punch — glass: ONE continuous surface, title and body alike.
      //
      // Removing the accent stripe was not enough to fuse them, because the
      // shared fill above paints `ACTIVE_PALETTE.panel` (#121212) while the
      // body underneath is `node.bgcolor` — `panelAlt`, #1c1c1c — with the
      // DOM panel's `--fil-surface-bg` (white at 5%) laid over it, landing
      // near #272727. A title ~21 steps darker than the body it sits on IS
      // the seam, whatever else is or isn't drawn on it.
      //
      // Repainting the body's own fill here lands the identical colour by
      // construction rather than by a hand-matched hex, so the boundary stays
      // invisible if the token is ever retuned. One layer, not two: this
      // theme's node body has no inner glass card (see THEME_EFFECTS
      // `cyber_punch`), so the body is `bgcolor` and nothing else — adding a
      // 5% wash here would put the title back out of step by the exact amount
      // that wash is worth.
      ctx.fillStyle = ACTIVE_PALETTE.panelAlt;
      ctx.beginPath();
      ctx.roundRect(0, -titleHeight, size[0], titleHeight, collapsed ? [radius] : [radius, radius, 0, 0]);
      ctx.fill();

      const badge = firstDeclaredBadge(this);
      if (badge) drawInlineBadge(ctx, badge, titleHeight, size[0]);
    } else if (isCyberPunchHud) {
      // Cyber Punch — HUD: the title carries nothing of its own but the badge.
      //
      // It used to stroke a full yellow rectangle around the TITLE and drop
      // two bracket arms at the title's corners — which read as a separate
      // boxed strip stuck on top of the node, because that is literally what
      // it was. The outline and the brackets belong to the node's own
      // silhouette and are drawn once, around everything, in
      // `onDrawForeground` below.
      //
      // Fill matches the body for the same reason as the glass variant: the
      // shared fill above is `panel` (#121212) while the body is `panelAlt`,
      // so leaving it would keep the seam this pass exists to remove.
      ctx.fillStyle = ACTIVE_PALETTE.panelAlt;
      ctx.beginPath();
      ctx.roundRect(0, -titleHeight, size[0], titleHeight, collapsed ? [radius] : [radius, radius, 0, 0]);
      ctx.fill();

      const hudBadge = firstDeclaredBadge(this);
      if (hudBadge) drawInlineBadge(ctx, hudBadge, titleHeight, size[0]);
    } else if (isNeoEmerald || isNftVibe) {
      // Sleek Neon Glow Accent Stripe
      ctx.shadowColor = isNftVibe ? "rgba(208, 255, 0, 0.7)" : "rgba(0, 255, 136, 0.6)";
      ctx.shadowBlur = lowQuality ? 0 : 10;
      const stripeWidth = 5;
      ctx.fillStyle = isNftVibe ? "#d0ff00" : "#00ff88";
      ctx.beginPath();
      ctx.roundRect(0, -titleHeight, stripeWidth, titleHeight, collapsed ? [radius, 0, 0, radius] : [radius, 0, 0, 0]);
      ctx.fill();
      ctx.shadowBlur = 0;
    } else {
      const stripeWidth = 3;
      ctx.fillStyle = ACTIVE_PALETTE.accent;
      ctx.beginPath();
      ctx.roundRect(0, -titleHeight, stripeWidth, titleHeight, collapsed ? [radius, 0, 0, radius] : [radius, 0, 0, 0]);
      ctx.fill();
    }
  };

  /**
   * The whole-node frame for the two themes whose node body has no DOM card
   * of its own to carry a border: Cyber Punch HUD and Pipboy. One shared hook
   * because both hit the identical bug — a frame drawn around the TITLE alone
   * (in `onDrawTitleBar`) plus corner marks living as CSS on the inner DOM
   * panel, which boxes a strip, floats the slot row between two boundaries
   * that don't line up with the node's own, and reads as a box inside a box.
   * See the Cyber Punch HUD comment this replaced, and — for Pipboy — the user
   * report that named this exact shape: "выглядит так будто узел в узле", the
   * inputs and outputs "словно отдельно".
   *
   * `onDrawForeground` is the only hook that can draw a frame around BOTH
   * zones at once: it runs after the body and badges are painted
   * (LGraphCanvas `drawNode`), in node-local coordinates, with the title at
   * negative Y, so one path covers title, slots and body together and nothing
   * clips it.
   *
   * Guarded twice. Every other theme returns on the first line, since this
   * hook now exists on all 16 node types. And below the host's
   * level-of-detail threshold it returns too: bracket arms are
   * indistinguishable there, and the DOM panel is hidden anyway
   * (`DomWidgets.vue` honours `hideOnZoom`).
   */
  const FRAME_THEMES: Partial<Record<string, { stroke: string; radius: number; bracket: string; arm: number; thick: number; corners: "diagonal" | "all" }>> = {
    cyber_punch_hud: { stroke: "rgba(255, 208, 0, 0.25)", radius: 2, bracket: "#ffd000", arm: 14, thick: 2, corners: "diagonal" },
    // Opaque, not dimmed like HUD's — this is the one frame Pipboy has left
    // once the title-only stroke and the DOM card's own border are gone, so it
    // carries the full phosphor brand rather than a subtle accent.
    pipboy: { stroke: "#00ff00", radius: 4, bracket: "#00ff00", arm: 8, thick: 2, corners: "all" },
  };
  const originalForeground = (p as { onDrawForeground?: (...a: unknown[]) => unknown }).onDrawForeground;
  (p as { onDrawForeground?: (...a: unknown[]) => unknown }).onDrawForeground = function (
    this: { size?: [number, number]; flags?: { collapsed?: boolean } },
    ...args: unknown[]
  ) {
    const result = originalForeground?.apply(this, args);
    const frame = FRAME_THEMES[activeThemeName()];
    if (!frame) return result;
    if (this.flags?.collapsed) return result;

    const canvas = (globalThis as { app?: { canvas?: { low_quality?: boolean } } }).app?.canvas;
    if (canvas?.low_quality) return result;

    const ctx = args[0] as CanvasRenderingContext2D | undefined;
    const width = this.size?.[0];
    const height = this.size?.[1];
    if (!ctx || !width || !height) return result;

    const titleHeight = (globalThis as { LiteGraph?: { NODE_TITLE_HEIGHT?: number } }).LiteGraph?.NODE_TITLE_HEIGHT ?? 30;
    const top = -titleHeight;
    const bottom = height;
    const { arm, thick } = frame;

    ctx.save();
    ctx.strokeStyle = frame.stroke;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(0.5, top + 0.5, width - 1, height + titleHeight - 1, [frame.radius]);
    ctx.stroke();

    ctx.fillStyle = frame.bracket;
    // Top-left + bottom-right only for the diagonal set — four corners on a
    // plain outline reads as a border with lumps (Cyber Punch HUD's own call).
    // Pipboy keeps all four: a CRT bezel's corners are a real trope, and this
    // is the one place left to carry it now that the title no longer does.
    ctx.fillRect(0, top, arm, thick);
    ctx.fillRect(0, top, thick, arm);
    ctx.fillRect(width - arm, bottom - thick, arm, thick);
    ctx.fillRect(width - thick, bottom - arm, thick, arm);
    if (frame.corners === "all") {
      ctx.fillRect(width - arm, top, arm, thick);
      ctx.fillRect(width - thick, top, thick, arm);
      ctx.fillRect(0, bottom - thick, arm, thick);
      ctx.fillRect(0, bottom - arm, thick, arm);
    }
    ctx.restore();
    return result;
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
