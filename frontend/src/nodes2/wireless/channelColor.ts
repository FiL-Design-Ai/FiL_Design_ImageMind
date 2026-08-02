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
