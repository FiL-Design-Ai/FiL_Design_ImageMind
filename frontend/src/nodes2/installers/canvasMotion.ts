/**
 * Drop the panels' backdrop blur while the canvas is actually moving.
 *
 * Every FiL node's body is a DOM panel carrying
 * `backdrop-filter: blur(var(--fil-surface-blur))` (styles/brand.ts) — 16px
 * under NFT Vibe, 10–14px under most other themes. `backdrop-filter` is the
 * one effect here whose cost is paid again on every frame: the browser has to
 * re-sample whatever is painted behind the element and blur it afresh, and
 * both halves of that change continuously while the graph is dragged or
 * zoomed — the panel moves, and the LiteGraph canvas behind it repaints. The
 * cost scales with how many FiL panels are on screen, which is why the drop
 * shows up "sometimes": it tracks how much of the pack is in view.
 *
 * At rest the blur is worth its price and stays. This only covers the frames
 * where the glass is sliding across the screen and nobody can see it anyway.
 *
 * Deliberately NOT solved by patching the host: no `window` listener (ours on
 * `wheel` once silenced the scroll wheel for every other pack), no wrapped
 * core method. These listeners sit on the canvas element itself, are passive,
 * and only read.
 *
 * Note the pack's other level-of-detail gate, `low_quality` in
 * `nodes2/nodeStyle.ts`, does not help here and is a different thing: it is a
 * zoom threshold the host raises only once the graph is small enough that text
 * is unreadable, whereas this is about movement at any zoom.
 */
import { LOG_TAG } from "@/constants/brand";

/** Set on `<html>` while the canvas is in motion. Read by the rule in `styles/brand.ts`. */
export const CANVAS_MOVING_ATTR = "data-fil-canvas-moving";

/**
 * How long after the last movement the blur comes back. Long enough that a
 * drag made of separate flicks does not flash the glass on and off between
 * them; short enough to feel immediate when the user lets go.
 */
const SETTLE_MS = 200;

interface MotionCanvas {
  canvas?: HTMLCanvasElement;
}

interface MotionApp {
  canvas?: MotionCanvas;
}

export interface CanvasMotion {
  uninstall(): void;
}

export function installCanvasMotion(app: MotionApp): CanvasMotion | null {
  const el = app.canvas?.canvas;
  if (!el || typeof document === "undefined") {
    console.warn(`${LOG_TAG} canvasMotion: no canvas element, panels keep their blur while dragging`);
    return null;
  }

  const root = document.documentElement;
  let settleTimer: ReturnType<typeof setTimeout> | null = null;
  let moving = false;

  const settle = (): void => {
    settleTimer = null;
    moving = false;
    root.removeAttribute(CANVAS_MOVING_ATTR);
  };

  const beginMotion = (): void => {
    if (!moving) {
      moving = true;
      root.setAttribute(CANVAS_MOVING_ATTR, "");
    }
    if (settleTimer !== null) clearTimeout(settleTimer);
    settleTimer = setTimeout(settle, SETTLE_MS);
  };

  // A button has to be down. `pointermove` also fires on a plain hover — the
  // canvas does repaint then (slot and link highlights), but that is a handful
  // of frames, and dropping the glass every time the mouse crosses the graph
  // would be the visible kind of flicker this is supposed to avoid.
  //
  // Dragging a NODE lands here too, and should: the panels move then as well.
  const onPointerMove = (event: PointerEvent): void => {
    if (event.buttons === 0) return;
    beginMotion();
  };

  // Zoom moves everything without any pointer button being held.
  const onWheel = (): void => beginMotion();

  // Not strictly required — the settle timer would expire on its own — but it
  // takes the blur back the moment the drag ends rather than a frame later.
  const onPointerUp = (): void => {
    if (!moving) return;
    if (settleTimer !== null) clearTimeout(settleTimer);
    settleTimer = setTimeout(settle, SETTLE_MS);
  };

  const opts: AddEventListenerOptions = { passive: true };
  el.addEventListener("pointermove", onPointerMove, opts);
  el.addEventListener("wheel", onWheel, opts);
  el.addEventListener("pointerup", onPointerUp, opts);
  el.addEventListener("pointercancel", onPointerUp, opts);

  return {
    uninstall() {
      el.removeEventListener("pointermove", onPointerMove, opts);
      el.removeEventListener("wheel", onWheel, opts);
      el.removeEventListener("pointerup", onPointerUp, opts);
      el.removeEventListener("pointercancel", onPointerUp, opts);
      if (settleTimer !== null) clearTimeout(settleTimer);
      settle();
    },
  };
}
