/**
 * useAdaptiveTitleInk — luminance calculation for node titles.
 */

/** WCAG relative luminance (sRGB linearisation). */
function luminance(hex: string): number {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!m) return 0.5;
  const srgb = m.slice(1).map((c) => parseInt(c, 16) / 255);
  const linear = srgb.map((c) =>
    c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4),
  );
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}

export function useAdaptiveTitleInk() {
  return { luminance };
}
