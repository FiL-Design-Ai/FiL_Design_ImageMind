/**
 * The node chrome, for ComfyUI's Vue renderer (Nodes 2.0).
 *
 * `nodes2/nodeStyle.ts` paints a FiL node's title bar and frame with a brush on
 * the LiteGraph canvas. Under `Comfy.VueNodes.Enabled` there is no canvas under
 * a node at all — it is a DOM element — so every one of those strokes is simply
 * absent and our nodes wear ComfyUI's stock chrome instead. This file is the
 * same chrome expressed as CSS, so a theme looks the same whichever renderer
 * the user has switched on. Values are copied from the canvas code, not
 * re-invented; when one moves, both move.
 *
 * ## Why no renderer detection anywhere
 *
 * Every rule below hangs off `.lg-node`, the class ComfyUI's Vue renderer puts
 * on a node root (`renderer/extensions/vueNodes/components/LGraphNode.vue`,
 * frontend 1.48.7). In the canvas renderer that element does not exist — a node
 * is pixels — so these rules cannot match there and the canvas painting stays
 * unopposed. `:has(.fil-node-shell)` narrows them to nodes carrying one of our
 * panels, which is also what keeps foreign nodes untouched: no marker class
 * written into someone else's DOM, no MutationObserver, nothing to keep in sync.
 *
 * ## What the Vue renderer does with `node.color` / `node.bgcolor`
 *
 * It uses them as *surfaces*: `bgcolor` becomes `--component-node-background`
 * for the body and `color` becomes the inner wrapper's `background-color`
 * (`LGraphNode.vue`). The canvas renderer means something else by the same two
 * fields, and `nodeStyle.ts` sets `color` to `#ffffff` for a canvas-side reason
 * (see its comment) — which under Vue rendering paints the header band of every
 * FiL node stark white. The `--fil-panel` fill below is what the canvas puts
 * there in `onDrawTitleBar`, and it needs `!important` because the host writes
 * its own value as an inline style.
 */
import type { FilThemeName } from "@/styles/brand";

/** A FiL node under the Vue renderer, and nothing else. */
const NODE = ".lg-node:has(.fil-node-shell)";
/** The box the host draws the node surface on — header and body together. */
const BOX = `${NODE} [data-testid="node-inner-wrapper"]`;
const HEADER = `${NODE} .lg-node-header`;

/** One vertical bar down the left edge of the title bar. */
interface Stripe {
  /** Width in px, as `fillRect` uses it on the canvas. */
  width: number;
  color: string;
  /** `shadowColor` of the canvas fill; omitted where the canvas draws none. */
  glow?: string;
  /** `shadowBlur` of the canvas fill. */
  blur?: number;
}

/** The whole-node outline + corner brackets from `nodeStyle.ts`'s FRAME_THEMES. */
interface Frame {
  stroke: string;
  bracket: string;
  /** Arm length of a corner bracket, px. */
  arm: number;
  /** Arm thickness, px. */
  thick: number;
  corners: "diagonal" | "all";
}

interface Skin {
  /** Corner radius the canvas rounds the title bar with. */
  radius: number;
  stripes: Stripe[];
  /** Title-bar fill. The canvas uses `panel` everywhere except the two
   * Cyber Punch themes, which repaint it in `panelAlt` to fuse title and body
   * into one surface — see their comments in `nodeStyle.ts`. */
  fill: "var(--fil-panel)" | "var(--fil-panel-alt)";
  frame?: Frame;
  /** Themes whose canvas title bar carries the inline badge pill. */
  badge?: boolean;
}

/**
 * `fgcolor` (the 5th argument the host hands `onDrawTitleBar`) is
 * `node.renderingColor`, i.e. `node.color` — which this pack pins to white.
 * The canvas branches that read `fgcolor || accent` therefore drew a white
 * stripe, never the accent the `||` was reaching for. Both sides now name the
 * theme colour outright, so the two renderers agree and neither depends on a
 * field that means something different in each.
 */
const ACCENT = "var(--fil-accent)";

const SKINS: Record<FilThemeName, Skin> = {
  default: { radius: 8, fill: "var(--fil-panel)", stripes: [{ width: 3, color: ACCENT }] },
  fallout: { radius: 8, fill: "var(--fil-panel)", stripes: [{ width: 3, color: ACCENT }] },
  travelmate: { radius: 8, fill: "var(--fil-panel)", stripes: [{ width: 3, color: ACCENT }] },
  pixaroma: { radius: 8, fill: "var(--fil-panel)", stripes: [{ width: 3, color: ACCENT }] },
  cyberpunk: {
    radius: 2,
    fill: "var(--fil-panel)",
    stripes: [
      { width: 4, color: "#ff0080", glow: "rgba(255, 0, 128, 0.8)", blur: 10 },
      { width: 3, color: "#00ffff", glow: "rgba(0, 255, 255, 0.8)", blur: 10 },
    ],
  },
  cyberpunk_2077: {
    radius: 2,
    fill: "var(--fil-panel)",
    stripes: [
      { width: 5, color: "#fcee0a", glow: "rgba(252, 238, 10, 0.9)", blur: 12 },
      { width: 3, color: "#00f0ff", glow: "rgba(0, 240, 255, 0.8)", blur: 10 },
    ],
  },
  hollywood_teal: {
    radius: 12,
    fill: "var(--fil-panel)",
    stripes: [
      { width: 4, color: "#00d2be", glow: "rgba(0, 210, 190, 0.8)", blur: 10 },
      { width: 3, color: "#f97316", glow: "rgba(249, 115, 22, 0.8)", blur: 10 },
    ],
  },
  neo_emerald: {
    radius: 16,
    fill: "var(--fil-panel)",
    stripes: [{ width: 5, color: "#00ff88", glow: "rgba(0, 255, 136, 0.6)", blur: 10 }],
  },
  nft_vibe: {
    radius: 16,
    fill: "var(--fil-panel)",
    stripes: [{ width: 5, color: "#d0ff00", glow: "rgba(208, 255, 0, 0.7)", blur: 10 }],
  },
  // Both Cyber Punch variants deliberately carry no stripe: their title bar is
  // the body's own surface continued upward, and the only mark on it is the
  // badge pill.
  cyber_punch: { radius: 14, fill: "var(--fil-panel-alt)", stripes: [], badge: true },
  cyber_punch_hud: {
    radius: 2,
    fill: "var(--fil-panel-alt)",
    stripes: [],
    badge: true,
    frame: { stroke: "rgba(255, 208, 0, 0.25)", bracket: "#ffd000", arm: 14, thick: 2, corners: "diagonal" },
  },
  // Pipboy's title bar is bare on the canvas too — the phosphor bezel is the
  // whole-node frame, nothing else.
  pipboy: {
    radius: 4,
    fill: "var(--fil-panel)",
    stripes: [],
    frame: { stroke: "#00ff00", bracket: "#00ff00", arm: 8, thick: 2, corners: "all" },
  },
};

/**
 * The stripes, as two pseudo-elements on the header.
 *
 * The canvas lays them side by side with `fillRect(offset, …)`; here each one
 * is an absolutely positioned bar with the running offset as its `left`. Only
 * the first is rounded on the outer corners, matching the canvas `roundRect`
 * that clips the leading stripe to the node's own corner.
 */
function stripeRules(skin: Skin): string {
  const slots = ["::before", "::after"];
  let left = 0;
  return skin.stripes
    .slice(0, slots.length)
    .map((s, i) => {
      const offset = left;
      left += s.width;
      const glow = s.glow ? `box-shadow:0 0 ${s.blur ?? 10}px ${s.glow};` : "";
      const round = i === 0 ? `border-top-left-radius:${skin.radius}px;` : "";
      return `${HEADER}${slots[i]}{content:"";position:absolute;left:${offset}px;top:0;bottom:0;width:${s.width}px;background:${s.color};${round}${glow}pointer-events:none;}`;
    })
    .join("\n");
}

/**
 * Outline plus corner brackets, on the node root so it surrounds header and
 * body the way `onDrawForeground` does — the whole point of that hook being
 * that a frame around the title alone reads as a box inside a box.
 *
 * Each bracket is an L: two background gradients per corner, one horizontal arm
 * and one vertical, anchored to the same corner.
 */
function frameRules(frame: Frame, radius: number): string {
  const { bracket: c, arm, thick } = frame;
  const bar = (w: string, h: string, pos: string) => `linear-gradient(${c},${c}) ${pos}/${w} ${h} no-repeat`;
  const corners = [
    bar(`${arm}px`, `${thick}px`, "0 0"),
    bar(`${thick}px`, `${arm}px`, "0 0"),
    bar(`${arm}px`, `${thick}px`, "100% 100%"),
    bar(`${thick}px`, `${arm}px`, "100% 100%"),
  ];
  if (frame.corners === "all") {
    corners.push(
      bar(`${arm}px`, `${thick}px`, "100% 0"),
      bar(`${thick}px`, `${arm}px`, "100% 0"),
      bar(`${arm}px`, `${thick}px`, "0 100%"),
      bar(`${thick}px`, `${arm}px`, "0 100%"),
    );
  }
  return `${NODE}::before{content:"";position:absolute;inset:0;border:1px solid ${frame.stroke};border-radius:${radius}px;pointer-events:none;z-index:2;}
${NODE}::after{content:"";position:absolute;inset:0;background:${corners.join(",")};pointer-events:none;z-index:2;}`;
}

/**
 * The pill the canvas draws inline in the title row (`drawInlineBadge`).
 *
 * Its text comes from `data-fil-badge` on our own host element — the node's
 * declared badge, read once at mount. The pill is positioned against the node
 * root, which under the Vue renderer is the nearest positioned ancestor our
 * panel has, so it lands in the title row exactly like the canvas one.
 */
function badgeRules(): string {
  return `${NODE} [data-fil-badge]::before{content:attr(data-fil-badge);position:absolute;top:5px;right:10px;height:18px;padding:0 8px;display:flex;align-items:center;border-radius:9px;font:700 10px/1 ui-monospace,monospace;letter-spacing:0.04em;text-transform:uppercase;color:#ffd000;background:rgba(255,208,0,0.12);border:1px solid rgba(255,208,0,0.45);pointer-events:none;z-index:3;}`;
}

/**
 * The "Show advanced inputs" bar. The host hands its button an inline
 * `backgroundColor` derived from `node.color` — white, the same pinning that
 * made the title dark-on-dark — so under a dark node it sat there as a stock
 * light strip. The canvas has no footer; the title-bar fill is the nearest
 * truth, so the bar reads as the node's own surface continued downward.
 * Text follows the panels' secondary colour rather than the host's slot
 * text, which is picked for the host's surface, not ours.
 */
function footerRules(skin: Skin): string {
  return `${NODE} [data-testid="advanced-inputs-button"]{background-color:${skin.fill} !important;color:var(--fil-muted) !important;border-bottom-left-radius:${skin.radius}px !important;border-bottom-right-radius:${skin.radius}px !important;}`;
}

/**
 * A widget row on one of our nodes that is not the panel — i.e. a field kept
 * visible purely so its input keeps a connection dot. See
 * `nodes2/widgetInputSockets.ts::keepVueSocketRow` for why one exists at all.
 */
const SOCKET_ROW = `${NODE} .lg-node-widget:not(:has(.fil-vue-host))`;

/**
 * Turn such a row into a bare labelled socket.
 *
 * The row the host draws is dot + name + the field's own control, and the
 * control is a second copy of something the panel already shows — a textarea
 * sitting over the panel's own prompt box. The control goes, the name stays,
 * leaving the shape ComfyUI's "convert widget to input" always had: a dot with
 * the field's name beside it.
 *
 * Which element *is* the control depends on the widget, and the first cut of
 * this ("keep the `<label>`, drop everything else") blanked the name on 28 of
 * the pack's 37 socket rows — every numeric and combo field, i.e. all of
 * ⚡ KSampler and 🔍 Upscaler. Live on 1.48.7 the rows come in exactly three
 * shapes, and both selectors below are needed to cover them:
 *   - `LABEL | TEXTAREA` — text fields, 9 rows.
 *   - `DIV | DIV(DIV)` — name, then a control wrapper, 24 rows.
 *   - `DIV(DIV + DIV)` — one wrapper holding name and control, 4 rows.
 * The name is always first and the control always second, one level or two
 * down, which is what these two rules say and nothing more.
 *
 * The dot is normally revealed on hover (`opacity-0 group-hover:opacity-100`).
 * These rows are nothing *but* a socket, so it stays up — and `transition:none`
 * is load-bearing, not tidying: the class comes with `transition-opacity`, and a
 * running transition outranks even an `!important` author rule, so without it
 * the dot sits at zero however the opacity is written (verified live — an inline
 * `opacity: 1 !important` still computed to 0).
 */
const SOCKET_ROW_CSS = `${SOCKET_ROW}{align-items:center;}
${SOCKET_ROW} > :first-child{opacity:1 !important;transition:none !important;}
${SOCKET_ROW} > :nth-child(2){min-height:0 !important;background:none !important;box-shadow:none !important;}
${SOCKET_ROW} > :nth-child(2) > :nth-child(2){display:none !important;}
${SOCKET_ROW} > :nth-child(2) > :only-child > :nth-child(2){display:none !important;}
${SOCKET_ROW} > :nth-child(2) label{position:static !important;padding:0 0 0 2px;line-height:16px;}`;

/**
 * The title text. The canvas pins it to crisp white (`nodeStyle.ts`'s
 * `onDrawTitleText`), but the Vue renderer picks the header's text colour to
 * sit on `node.color` — which this pack pins to white for the canvas side —
 * so under our dark bar the stock title rendered dark-on-dark. `!important`
 * beats both the var and any inline colour the host computes.
 */
const TITLE = `${HEADER}{color:#ffffff !important;}`;

/** Shared skeleton every theme needs before its own values land on top. */
const BASE = `${HEADER}{position:relative;}
${TITLE}
${SOCKET_ROW_CSS}`;

/** The Vue-renderer chrome for one theme, ready for a `<style>` tag. */
export function vueNodeSkinCss(theme: FilThemeName): string {
  const skin = SKINS[theme] ?? SKINS.default;
  return [
    BASE,
    `${BOX}{background-color:${skin.fill} !important;border-radius:${skin.radius}px;}`,
    `${HEADER}{border-top-left-radius:${skin.radius}px;border-top-right-radius:${skin.radius}px;}`,
    footerRules(skin),
    stripeRules(skin),
    skin.frame ? frameRules(skin.frame, skin.radius) : "",
    skin.badge ? badgeRules() : "",
  ]
    .filter(Boolean)
    .join("\n");
}
