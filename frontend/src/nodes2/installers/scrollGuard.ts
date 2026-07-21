import { findScrollableUnderPoint, scrollRegionWantsWheel } from "@/composables/scrollGuard";

let installed = false;

/**
 * Cross-extension wheel-scroll guard.
 *
 * Two mechanisms hijack the wheel over scrollable content inside node DOM
 * widgets (ours or third-party like Pixaroma's XY Plot):
 *
 * 1. ComfyUI core's `useCanvasInteractions.handleWheel` forwards every wheel
 *    over a DOM widget to the canvas (zoom) unless the hovered element is
 *    marked `data-capture-wheel="true"` AND currently contains keyboard
 *    focus — a bar most third-party widgets never clear, so their lists
 *    zoom the canvas instead of scrolling.
 * 2. While the canvas transforms (and ~256ms after — `useTransformSettling`)
 *    core sets `pointer-events: none` on ALL DOM widgets, so the wheel event
 *    targets the <canvas> itself even with the cursor over a list; each zoom
 *    tick renews that window, so continuous wheeling can never reach the
 *    list at all.
 *
 * The guard runs as the earliest possible CAPTURE-phase listener on `window`
 * (registered at module import, before other extensions' setup hooks):
 *
 * - Normal path: the target chain has a scrollable region with room left →
 *   `stopImmediatePropagation()` so no forwarder (core's or any
 *   extension's) sees the event, and the browser's native default scroll
 *   does the work. No `preventDefault()`.
 * - Fallback path (case 2): target is the canvas → geometric hit-test of
 *   `.dom-widget` overlays under the cursor; if a scrollable region wants
 *   the wheel, consume the event entirely and scroll it manually.
 * - Ctrl/Meta wheel is never touched — that's a deliberate zoom gesture
 *   (matches core's own `isCanvasGestureWheel`).
 */
export function installGlobalScrollGuard(): void {
  if (installed || typeof window === "undefined") return;
  installed = true;
  window.addEventListener(
    "wheel",
    (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) return;
      if (scrollRegionWantsWheel(e.target, e.deltaX, e.deltaY)) {
        e.stopImmediatePropagation();
        return;
      }
      if (!(e.target instanceof HTMLCanvasElement)) return;
      const el = findScrollableUnderPoint(e.clientX, e.clientY, e.deltaX, e.deltaY);
      if (!el) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      // deltaMode: 0 = pixels, 1 = lines, 2 = pages.
      const k = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? el.clientHeight : 1;
      el.scrollBy({ left: e.deltaX * k, top: e.deltaY * k });
    },
    { capture: true, passive: false },
  );
  console.info("[FiL_Design_ImageMind] global scroll guard installed");
}
