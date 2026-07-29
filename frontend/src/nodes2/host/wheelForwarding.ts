import { scrollRegionWantsWheel } from "@/composables/scrollGuard";
import { wheelHandlingEnabled } from "@/stores/settings/scrollGuardSettings";

/**
 * Forward wheel events from a FiL panel onto the canvas LiteGraph listens to.
 *
 * The host is a canvas *sibling* overlay in the DOM tree, not a descendant of
 * the real <canvas> LiteGraph binds its own wheel-zoom listener to, so
 * scrolling while hovering any FiL panel silently did nothing. Forward the
 * event onto the real canvas so LiteGraph's own handler runs as if the user
 * had scrolled directly over it — UNLESS the cursor is over a scrollable
 * inner region (a style picker list, chip list, …) that still has room to
 * scroll that way, in which case let it scroll normally instead of hijacking
 * the wheel for canvas zoom. `{ passive: false }` is required for
 * `preventDefault()` to actually suppress the host's own (non-)scroll.
 *
 * The listener is bound to `host`, so it only ever sees wheel events over a
 * FiL panel; scrolling anywhere else in ComfyUI, other packs included, never
 * reaches this code. That scoping is the whole point — the version that bound
 * a capture-phase listener to `window` put this pack ahead of every other
 * extension in the app on every wheel event, and silenced their wheel-driven
 * carousels and value tweaks (`410fc95`, `c714312`).
 *
 * A modifier means the gesture belongs to someone else (Ctrl/Meta is canvas
 * zoom, Alt/Shift is what several packs use for wheel-driven value tweaks),
 * and the whole thing can be switched off in settings.
 */
export function attachWheelForwarding(host: HTMLElement): void {
  host.addEventListener(
    "wheel",
    (e: WheelEvent) => {
      if (!wheelHandlingEnabled()) return;
      if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return;
      if (scrollRegionWantsWheel(e.target, e.deltaX, e.deltaY, host.parentElement)) {
        // Native scroll handles it. Keep it from bubbling into an ancestor's
        // forwarder, which would zoom the canvas at the same time.
        e.stopPropagation();
        return;
      }
      const realCanvas = (globalThis as unknown as {
        app?: { canvas?: { canvas?: HTMLCanvasElement } };
      }).app?.canvas?.canvas;
      if (!(realCanvas instanceof HTMLCanvasElement)) return;
      e.preventDefault();
      realCanvas.dispatchEvent(new WheelEvent("wheel", {
        deltaX: e.deltaX, deltaY: e.deltaY, deltaZ: e.deltaZ, deltaMode: e.deltaMode,
        clientX: e.clientX, clientY: e.clientY, bubbles: true, cancelable: true,
      }));
    },
    { passive: false },
  );
}
