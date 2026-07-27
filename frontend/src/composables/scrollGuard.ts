/**
 * Wheel-vs-scroll predicate for the node DOM widget host
 * (nodes2/domWidgetHost.ts), which forwards the wheel to the canvas for its
 * own widgets unless the cursor sits over something scrollable.
 *
 * There used to be a second consumer here: a window-level capture-phase guard
 * that also rescued other packs' widgets. It was removed — a listener that
 * early on `window` speaks for every extension in the app, and no node pack
 * should hold that position. Everything the pack does with the wheel now
 * happens on its own host element.
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
 * i.e. the wheel should scroll THAT element rather than be forwarded to the
 * canvas for zoom. Mirrors what ComfyUI's own preview widgets do
 * (useCanvasInteractions → forwardEventToCanvas).
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
