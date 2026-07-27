/**
 * Shared wheel-vs-scroll predicates.
 *
 * Used by the in-node DOM widget host (nodes2/domWidgetHost.ts, which
 * forwards the wheel to the canvas for its own widgets) and the
 * cross-extension guard (nodes2/installers/scrollGuard.ts) so the two
 * checks can never diverge.
 */

/** True when THIS element is scrollable and still has room to scroll in the
 * wheel's dominant direction. */
export function elementWantsWheel(el: Element, deltaX: number, deltaY: number): boolean {
  const vertical = Math.abs(deltaY) >= Math.abs(deltaX);
  const cs = getComputedStyle(el);
  if (vertical) {
    const oy = cs.overflowY;
    if ((oy === "auto" || oy === "scroll") && el.scrollHeight > el.clientHeight + 1) {
      const atTop = el.scrollTop <= 0;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
      if ((deltaY < 0 && !atTop) || (deltaY > 0 && !atBottom)) return true;
    }
  } else {
    const ox = cs.overflowX;
    if ((ox === "auto" || ox === "scroll") && el.scrollWidth > el.clientWidth + 1) {
      const atLeft = el.scrollLeft <= 0;
      const atRight = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
      if ((deltaX < 0 && !atLeft) || (deltaX > 0 && !atRight)) return true;
    }
  }
  return false;
}

/**
 * True when an element between `target` and `stopAt` (exclusive) is
 * scrollable AND still has room to scroll in the wheel event's direction —
 * i.e. the wheel should scroll THAT element rather than be hijacked for
 * something else (canvas zoom, etc.). Mirrors what ComfyUI's own preview
 * widgets do (useCanvasInteractions → forwardEventToCanvas).
 */
export function scrollRegionWantsWheel(
  target: EventTarget | null,
  deltaX: number,
  deltaY: number,
  stopAt: Element | null = null,
): boolean {
  return findScrollableInChain(target, deltaX, deltaY, stopAt) !== null;
}

/** Class the DOM widget host tags its root with — the marker for "this
 * scrollable area belongs to a FiL node", used to keep the window-level guard
 * off other packs' widgets. */
export const FIL_HOST_SELECTOR = ".fil-vue-host";

/** True when the element sits inside a FiL node's mounted panel. */
export function isInsideFilWidget(el: Element | null): boolean {
  return Boolean(el?.closest?.(FIL_HOST_SELECTOR));
}

/** Same walk as `scrollRegionWantsWheel`, but returns the element that wants
 * the wheel so the caller can decide whose widget it is. */
export function findScrollableInChain(
  target: EventTarget | null,
  deltaX: number,
  deltaY: number,
  stopAt: Element | null = null,
): Element | null {
  let el = target instanceof Element ? target : null;
  while (el && el !== stopAt) {
    if (elementWantsWheel(el, deltaX, deltaY)) return el;
    el = el.parentElement;
  }
  return null;
}

/**
 * Geometric fallback for when the wheel event's `target` is NOT the element
 * under the cursor. ComfyUI core disables pointer events on every DOM widget
 * while the canvas is transforming and for ~256ms after (useTransformSettling)
 * — so during continuous wheeling the event targets the <canvas> even though
 * the cursor visually sits over a scrollable list, and each zoom tick renews
 * that window, locking the user out of the list until they stop scrolling.
 * This hit-tests all `.dom-widget` overlays by coordinates instead, returning
 * the scrollable element under the point that still wants the wheel.
 */
export function findScrollableUnderPoint(
  x: number,
  y: number,
  deltaX: number,
  deltaY: number,
  filOnly = false,
): Element | null {
  const contains = (el: Element): boolean => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
  };
  // `:has()` would say this in one selector, but jsdom (the test environment)
  // does not implement it, so the filter is spelled out.
  const ours = (w: Element): boolean =>
    w.matches(FIL_HOST_SELECTOR) || w.querySelector(FIL_HOST_SELECTOR) !== null;
  for (const widget of document.querySelectorAll(".dom-widget")) {
    if (filOnly && !ours(widget)) continue;
    if (!contains(widget)) continue;
    if (elementWantsWheel(widget, deltaX, deltaY)) return widget;
    for (const el of widget.querySelectorAll("*")) {
      if (contains(el) && elementWantsWheel(el, deltaX, deltaY)) return el;
    }
  }
  return null;
}
