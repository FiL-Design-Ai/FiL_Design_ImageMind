import { describe, it, expect } from "vitest";
import {
  clampRect,
  defaultRect,
  startPointerDrag,
  _resolveOptions,
  type BrowserRectValue,
} from "@/composables/useBrowserRect";

const opts = _resolveOptions({ storageKey: "test" });
const vp = (width: number, height: number) => ({ width, height });

describe("clampRect", () => {
  // The one that hurt in Pixaroma and would have hurt here: a window sized on a
  // wide monitor, reopened on a laptop. Keeping a corner on screen is not
  // enough — the resize grip is at the bottom right, so a window wider than the
  // screen can never be made smaller again.
  it("shrinks a window that no longer fits instead of letting it hang off", () => {
    const saved: BrowserRectValue = { x: 1600, y: 900, w: 1800, h: 1100, sw: 300, dw: 400 };
    const r = clampRect(saved, opts, vp(1280, 800));
    expect(r.w).toBeLessThanOrEqual(1280);
    expect(r.h).toBeLessThanOrEqual(800);
    expect(r.x + r.w).toBeLessThanOrEqual(1280);
    expect(r.y + r.h).toBeLessThanOrEqual(800);
  });

  it("never goes below the minimum size, even on a tiny screen", () => {
    const r = clampRect({ x: 0, y: 0, w: 100, h: 100, sw: 200, dw: 240 }, opts, vp(400, 300));
    expect(r.w).toBe(opts.minW);
    expect(r.h).toBe(opts.minH);
    // Not negative: a window bigger than the screen still starts at the corner.
    expect(r.x).toBe(0);
    expect(r.y).toBe(0);
  });

  // A sidebar dragged wide on a big window would otherwise swallow the list
  // once the window is narrowed.
  it("re-clamps the column widths against the window's current width", () => {
    const r = clampRect({ x: 0, y: 0, w: 640, h: 400, sw: 500, dw: 500 }, opts, vp(1920, 1080));
    expect(r.sw).toBeLessThanOrEqual(Math.round(640 * opts.sideMaxFrac));
    expect(r.dw).toBeLessThanOrEqual(Math.round(640 * opts.detailMaxFrac));
    expect(r.sw).toBeGreaterThanOrEqual(opts.sideMin);
    expect(r.dw).toBeGreaterThanOrEqual(opts.detailMin);
  });

  // Half-written or hand-edited storage must not produce NaN geometry, which
  // renders as `left: NaNpx` and puts the window nowhere at all.
  it("falls back to the default for missing or non-numeric fields", () => {
    const junk = { x: "12" as unknown as number, w: Number.NaN, sw: undefined };
    const r = clampRect(junk, opts, vp(1280, 800));
    for (const v of Object.values(r)) expect(Number.isFinite(v)).toBe(true);
    expect(r).toEqual(clampRect(null, opts, vp(1280, 800)));
  });

  it("is a no-op on a rect that already fits", () => {
    const fitted = defaultRect(opts, vp(1280, 800));
    expect(clampRect(fitted, opts, vp(1280, 800))).toEqual(fitted);
  });
});

describe("defaultRect", () => {
  it("centres the window and keeps it inside the screen", () => {
    const r = defaultRect(opts, vp(1600, 1000));
    expect(r.x).toBe(Math.round((1600 - r.w) / 2));
    expect(r.y).toBe(Math.round((1000 - r.h) / 2));
    expect(r.w).toBeLessThanOrEqual(1600 - opts.edge * 2);
  });
});

describe("startPointerDrag", () => {
  function handle() {
    const el = document.createElement("div");
    // jsdom has no pointer capture; the code path must survive its absence,
    // which is exactly what the try/catch around it is for.
    return el;
  }
  const down = (button = 0) =>
    new PointerEvent("pointerdown", { button, pointerId: 1, bubbles: true, cancelable: true });

  it("ignores anything but the left button, so a right-click cannot start a drag", () => {
    expect(startPointerDrag(handle(), down(2), () => {})).toBe(false);
  });

  it("starts on the left button and reports moves", () => {
    const el = handle();
    const seen: number[] = [];
    expect(startPointerDrag(el, down(), (ev) => seen.push(ev.clientX))).toBe(true);
    el.dispatchEvent(new PointerEvent("pointermove", { pointerId: 1, buttons: 1, clientX: 42 }));
    expect(seen).toEqual([42]);
  });

  // The defence a synthetic test would normally miss: a move arriving with no
  // button held means the release went missing, and without this the window
  // follows the cursor forever.
  it("ends itself when a move arrives with the button already up", () => {
    const el = handle();
    const seen: number[] = [];
    let ended = 0;
    startPointerDrag(el, down(), (ev) => seen.push(ev.clientX), () => { ended++; });
    el.dispatchEvent(new PointerEvent("pointermove", { pointerId: 1, buttons: 0, clientX: 10 }));
    expect(seen).toEqual([]);
    expect(ended).toBe(1);
    // And it is really over — a later, well-formed move does nothing.
    el.dispatchEvent(new PointerEvent("pointermove", { pointerId: 1, buttons: 1, clientX: 99 }));
    expect(seen).toEqual([]);
  });

  it("calls onEnd exactly once however the drag finishes", () => {
    const el = handle();
    let ended = 0;
    startPointerDrag(el, down(), () => {}, () => { ended++; });
    el.dispatchEvent(new PointerEvent("pointerup", { pointerId: 1 }));
    el.dispatchEvent(new PointerEvent("pointercancel", { pointerId: 1 }));
    expect(ended).toBe(1);
  });
});
