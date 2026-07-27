import {
  findScrollableInChain,
  findScrollableUnderPoint,
  isInsideFilWidget,
} from "@/composables/scrollGuard";
import { readScrollGuardMode } from "@/stores/settings/scrollGuardSettings";

let installed = false;

/**
 * Wheel-scroll guard for scrollable regions inside node DOM widgets.
 *
 * Two mechanisms hijack the wheel over such content:
 *
 * 1. ComfyUI core's `useCanvasInteractions.handleWheel` forwards every wheel
 *    over a DOM widget to the canvas (zoom) unless the hovered element is
 *    marked `data-capture-wheel="true"` AND currently contains keyboard
 *    focus — a bar most widgets never clear, so their lists zoom the canvas
 *    instead of scrolling.
 * 2. While the canvas transforms (and ~256ms after — `useTransformSettling`)
 *    core sets `pointer-events: none` on ALL DOM widgets, so the wheel event
 *    targets the <canvas> itself even with the cursor over a list; each zoom
 *    tick renews that window, so continuous wheeling can never reach the
 *    list at all.
 *
 * The listener sits on `window` in the CAPTURE phase, which is the only place
 * early enough to beat core's forwarder — and therefore also early enough to
 * silence every other extension. So it is deliberately narrow:
 *
 * - It only acts on scrollable areas inside our own panels
 *   (`.fil-vue-host`). Other packs' widgets are left alone unless the user
 *   picks `all` in the `ScrollGuard.Mode` setting, which trades their wheel
 *   handlers away for scrolling that works. `off` disables the guard
 *   outright, live — the mode is read per event, so no reload is needed.
 * - Any modifier means the gesture belongs to someone else — Ctrl/Meta is
 *   canvas zoom (core's own `isCanvasGestureWheel`), Alt/Shift is the
 *   modifier several packs use for wheel-driven value tweaks.
 * - It is installed on the first mounted FiL widget rather than at import,
 *   so an install that never places one of our nodes keeps stock behaviour.
 *
 * Normal path: `stopImmediatePropagation()` so no forwarder sees the event,
 * and the browser's native scroll does the work — no `preventDefault()`.
 * Fallback path (case 2 above): the target is the canvas, so hit-test the
 * `.dom-widget` overlays under the cursor and scroll the match manually.
 */
export function installGlobalScrollGuard(): void {
  if (installed || typeof window === "undefined") return;
  installed = true;
  window.addEventListener(
    "wheel",
    (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return;
      const mode = readScrollGuardMode();
      if (mode === "off") return;
      const thirdParty = mode === "all";
      const inChain = findScrollableInChain(e.target, e.deltaX, e.deltaY);
      if (inChain) {
        if (!thirdParty && !isInsideFilWidget(inChain)) return;
        e.stopImmediatePropagation();
        return;
      }
      if (!(e.target instanceof HTMLCanvasElement)) return;
      const el = findScrollableUnderPoint(e.clientX, e.clientY, e.deltaX, e.deltaY, !thirdParty);
      if (!el) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      // deltaMode: 0 = pixels, 1 = lines, 2 = pages.
      const k = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? el.clientHeight : 1;
      el.scrollBy({ left: e.deltaX * k, top: e.deltaY * k });
    },
    { capture: true, passive: false },
  );
  console.info("[FiL_Design_ImageMind] scroll guard installed");
}
