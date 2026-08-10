/**
 * A stable colour per channel name.
 *
 * Derived from the name rather than assigned in scan order, so a channel keeps
 * its colour when another one is added, removed or renamed — the point of the
 * colour is that you learn "the purple one is the model", and that only works
 * if it does not move.
 */

/** FNV-1a. Small, dependency-free, and spreads short names like `MODEL` well enough. */
function hashName(name: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < name.length; i++) {
    hash ^= name.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

/**
 * Hues are picked off a 12-step wheel rather than freely, so two channels are
 * either clearly the same colour or clearly different — neighbouring hues a few
 * degrees apart read as "did it change?", which is worse than a collision.
 * Saturation and lightness stay fixed and legible on both canvas themes.
 */
export function channelColor(name: string): string {
  const hue = (hashName(name) % 12) * 30;
  return `hsl(${hue} 70% 62%)`;
}

/** Same hue, faint — for fills and the link glow, where full strength would shout. */
export function channelColorSoft(name: string, alpha = 0.22): string {
  const hue = (hashName(name) % 12) * 30;
  return `hsl(${hue} 70% 62% / ${alpha})`;
}

/**
 * A palette entry only counts when it actually names a colour.
 *
 * The host pre-fills its type→colour maps with an empty string for every data
 * type it knows about, then overlays the palette on top (`loadLinkColorPalette`
 * — `Object.assign(byType, blanks, palette)`). So a missing colour arrives as
 * `""`, not as `undefined`, and `??` would happily hand it on as a valid
 * `strokeStyle` — which paints nothing at all.
 */
function firstColour(...candidates: Array<string | null | undefined>): string | null {
  for (const candidate of candidates) {
    const trimmed = candidate?.trim();
    if (trimmed) return trimmed;
  }
  return null;
}

/**
 * The host's own colour for this connection type — the paint its sockets and
 * real wires wear, so a dashed channel link lands on a socket of its own
 * colour instead of a hue nothing else on the canvas uses.
 *
 * Read from the three places the host actually keeps it. An earlier version
 * asked `LiteGraph.link_type_colors`, which does not exist — the registry is a
 * static on `LGraphCanvas`, not on `LiteGraph` — so this returned `null` every
 * single time and every channel silently wore its name-hash fallback. Checked
 * against the frontend's own sources (1.48.7), where the three are:
 *
 *  - `canvas.default_connection_color_byType[type]` — what the classic
 *    renderer paints a *connected* socket with
 *    (`colorContext.getConnectedColor`, `SlotBase.ts:46`);
 *  - `LGraphCanvas.link_type_colors[type]` — what a real wire is drawn with
 *    (`getLinkTypeColor`), kept in step with the first by the same loader;
 *  - `--color-datatype-${type}` — the CSS variable the Nodes 2.0 socket dot
 *    resolves (`SlotConnectionDot.vue`), set by the Vue half of that loader.
 *
 * Loose reads on purpose: this module never imports LiteGraph, and a host
 * missing all three simply gets `null`. There is deliberately no fall-through
 * to the host's own "no colour for this type" grey (`output_on`): a type the
 * host paints with nothing is exactly where the name-hash colour earns its
 * keep, and one shared grey for every such channel would tell the user less.
 */
export function typeColor(type: string): string | null {
  const host = globalThis as {
    app?: { canvas?: { default_connection_color_byType?: Record<string, string> } };
    LGraphCanvas?: { link_type_colors?: Record<string, string> };
  };
  return firstColour(
    host.app?.canvas?.default_connection_color_byType?.[type],
    host.LGraphCanvas?.link_type_colors?.[type],
    cssTypeColor(type),
  );
}

/**
 * The Nodes 2.0 socket colour, which lives as a CSS variable on the document
 * root rather than in a JS map. Only reached when neither map had the type —
 * both are filled from the same palette as this variable, so in practice this
 * is the belt to their braces, and `getComputedStyle` stays off the per-frame
 * path the overlay walks.
 */
function cssTypeColor(type: string): string | null {
  const root = globalThis.document?.documentElement;
  if (!root) return null;
  try {
    return getComputedStyle(root).getPropertyValue(`--color-datatype-${type}`) || null;
  } catch {
    return null;
  }
}

/**
 * The colour a channel should wear on the canvas and in the panel: the type
 * colour of what it carries, so the dashed line matches the socket it lands
 * in. The name-hash colour stays as the fallback for types the host paints
 * with nothing of its own.
 */
export function channelColorFor(channel: { name: string; type: string }): string {
  return typeColor(channel.type) ?? channelColor(channel.name);
}

/**
 * A colour made faint, for borders and label fills.
 *
 * Handles every shape that can reach it: the host's `#rrggbb` (and `#rgb`)
 * hex, an `rgb()`/`rgba()` a custom colour palette may carry, and this
 * module's own `hsl(h s% l%)`. Anything unrecognised is handed back at full
 * strength rather than mangled — a solid label reads worse than a translucent
 * one, but an invalid `fillStyle` reads as the previous colour, which is a
 * bug that looks like a different bug.
 */
export function soften(color: string, alpha: number): string {
  if (color.startsWith("#") && (color.length === 7 || color.length === 4)) {
    const hex = color.length === 4
      ? color.slice(1).split("").map((c) => c + c).join("")
      : color.slice(1);
    const n = Number.parseInt(hex, 16);
    if (!Number.isNaN(n)) {
      return `rgb(${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255} / ${alpha})`;
    }
  }
  // Rebuilt rather than appended to: `rgb(1, 2, 3)` is the legacy comma form,
  // and comma-separated channels with a slash-separated alpha is not valid CSS.
  const rgb = /^rgba?\(([^)]*)\)$/.exec(color);
  if (rgb) {
    const parts = rgb[1].split(/[\s,/]+/).filter(Boolean).map(Number);
    if (parts.length >= 3 && parts.slice(0, 3).every((n) => Number.isFinite(n))) {
      return `rgb(${parts[0]} ${parts[1]} ${parts[2]} / ${alpha})`;
    }
  }
  if (color.startsWith("hsl(") && color.endsWith(")")) {
    return `${color.slice(0, -1)} / ${alpha})`;
  }
  return color;
}
