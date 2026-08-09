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
 * The host's own colour for this connection type — what the input and output
 * sockets are painted. `LiteGraph.link_type_colors` is the registry the
 * canvas draws real wires from, so reading it is what makes a wireless link
 * land on a socket of the same colour instead of a hue nobody else uses.
 * Loose read on purpose: the wireless core never imports LiteGraph, and a
 * host without the registry simply gets `null`.
 */
export function typeColor(type: string): string | null {
  const palette = (globalThis as { LiteGraph?: { link_type_colors?: Record<string, string> } })
    .LiteGraph?.link_type_colors;
  return palette?.[type] ?? null;
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
 * A colour made faint, for borders and label fills. Handles the two shapes
 * this module produces: the host's `#rrggbb` hex and its own `hsl(h s% l%)`.
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
  if (color.startsWith("hsl(") && color.endsWith(")")) {
    return `${color.slice(0, -1)} / ${alpha})`;
  }
  return color;
}
