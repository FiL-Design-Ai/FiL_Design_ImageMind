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
  let el = target instanceof Element ? target : null;
  while (el && el !== stopAt) {
    if (elementWantsWheel(el, deltaX, deltaY)) return true;
    el = el.parentElement;
  }
  return false;
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
): Element | null {
  const contains = (el: Element): boolean => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
  };
  for (const widget of document.querySelectorAll(".dom-widget")) {
    if (!contains(widget)) continue;
    if (elementWantsWheel(widget, deltaX, deltaY)) return widget;
    for (const el of widget.querySelectorAll("*")) {
      if (contains(el) && elementWantsWheel(el, deltaX, deltaY)) return el;
    }
  }
  return null;
}
