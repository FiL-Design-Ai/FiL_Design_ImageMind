/**
 * The panels' backdrop blur is dropped while the canvas moves and restored
 * once it settles — see `nodes2/installers/canvasMotion.ts` for why.
 *
 * Driven through the fake host's real canvas element, never by calling the
 * handlers directly: what is actually being asserted is that the listeners are
 * on the element the host hands us and that they react to the events a browser
 * really sends.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createApp } from "./fakes/comfyHost";
import { CANVAS_MOVING_ATTR, installCanvasMotion } from "@/nodes2/installers/canvasMotion";

/** jsdom has no PointerEvent; `buttons` is the only field these handlers read. */
function pointer(type: string, buttons: number): Event {
  return new MouseEvent(type, { buttons, bubbles: true });
}

const isMoving = (): boolean => document.documentElement.hasAttribute(CANVAS_MOVING_ATTR);

describe("canvas motion", () => {
  let uninstall: (() => void) | undefined;

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    uninstall?.();
    uninstall = undefined;
    vi.useRealTimers();
    document.documentElement.removeAttribute(CANVAS_MOVING_ATTR);
    document.body.innerHTML = "";
  });

  function install(): HTMLCanvasElement {
    const app = createApp();
    const motion = installCanvasMotion(app as unknown as { canvas?: { canvas?: HTMLCanvasElement } });
    uninstall = () => motion?.uninstall();
    return app.canvas.canvas;
  }

  it("marks the document while the canvas is dragged", () => {
    const el = install();
    expect(isMoving()).toBe(false);

    el.dispatchEvent(pointer("pointermove", 1));
    expect(isMoving()).toBe(true);
  });

  it("ignores a hover with no button held", () => {
    const el = install();

    el.dispatchEvent(pointer("pointermove", 0));
    expect(isMoving()).toBe(false);
  });

  it("marks the document on a zoom, which holds no button", () => {
    const el = install();

    el.dispatchEvent(new WheelEvent("wheel", { bubbles: true }));
    expect(isMoving()).toBe(true);
  });

  it("clears the mark once the movement stops", () => {
    const el = install();
    el.dispatchEvent(pointer("pointermove", 1));

    vi.advanceTimersByTime(199);
    expect(isMoving()).toBe(true);

    vi.advanceTimersByTime(1);
    expect(isMoving()).toBe(false);
  });

  it("keeps the mark across a drag made of separate flicks", () => {
    const el = install();
    el.dispatchEvent(pointer("pointermove", 1));

    // Each move pushes the settle out again, so the glass never flashes back
    // mid-drag.
    for (let i = 0; i < 5; i++) {
      vi.advanceTimersByTime(150);
      el.dispatchEvent(pointer("pointermove", 1));
      expect(isMoving()).toBe(true);
    }
  });

  it("restores the blur after the pointer is released", () => {
    const el = install();
    el.dispatchEvent(pointer("pointermove", 1));
    el.dispatchEvent(pointer("pointerup", 0));

    expect(isMoving()).toBe(true);
    vi.advanceTimersByTime(200);
    expect(isMoving()).toBe(false);
  });

  it("stops listening — and leaves nothing set — once uninstalled", () => {
    const el = install();
    el.dispatchEvent(pointer("pointermove", 1));

    uninstall?.();
    uninstall = undefined;
    expect(isMoving()).toBe(false);

    el.dispatchEvent(pointer("pointermove", 1));
    expect(isMoving()).toBe(false);
  });

  it("survives a host with no canvas element instead of throwing", () => {
    expect(() => installCanvasMotion({})).not.toThrow();
    expect(installCanvasMotion({})).toBeNull();
  });
});
