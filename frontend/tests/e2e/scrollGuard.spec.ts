import { test, expect } from "@playwright/test";

/**
 * The wheel predicate, against real layout.
 *
 * `scrollGuard.ts` decides whether a wheel event scrolls a region inside a FiL
 * panel or gets forwarded to the canvas for zoom. It reads
 * `getComputedStyle().overflowY` and live scroll geometry — and jsdom has
 * neither, so its unit tests define `clientHeight`, `scrollHeight` and
 * `scrollTop` per element by hand. That proves the branches agree with numbers
 * the test invented; it cannot tell whether a real FiL list is scrollable at
 * all, or whether the overflow sits on the element the predicate will actually
 * walk past.
 *
 * This is the version of that question a browser can answer. It matters because
 * getting it wrong is not a cosmetic bug: an over-eager guard swallowed other
 * packs' wheel events for a whole release (410fc95).
 */

const OPTIONS = Array.from({ length: 60 }, (_, i) => `option-${i + 1}`);

test.describe("wheel guard on a real scrollable list", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("test-playground.html");
    await page.evaluate((options) => {
      window.mountComponent("FilChipList", { options, modelValue: options[0] });
    }, OPTIONS);
  });

  test("the list really does overflow, which is the premise of all of this", async ({ page }) => {
    // If this fails, every other assertion here is vacuous: a list that fits
    // its box is not scrollable, and the predicate would be right to say no.
    const geometry = await page.evaluate(() => {
      const scroller = [...document.querySelectorAll<HTMLElement>("#app *")].find((el) => {
        const overflow = getComputedStyle(el).overflowY;
        return (overflow === "auto" || overflow === "scroll") && el.scrollHeight > el.clientHeight + 1;
      });
      if (!scroller) return null;
      return {
        overflowY: getComputedStyle(scroller).overflowY,
        clientHeight: scroller.clientHeight,
        scrollHeight: scroller.scrollHeight,
      };
    });

    expect(geometry, "no scrollable region found in a 60-item list").not.toBeNull();
    expect(geometry!.scrollHeight).toBeGreaterThan(geometry!.clientHeight);
  });

  test("claims a downward wheel at the top and releases it at the bottom", async ({ page }) => {
    const verdicts = await page.evaluate(() => {
      const scroller = [...document.querySelectorAll<HTMLElement>("#app *")].find((el) => {
        const overflow = getComputedStyle(el).overflowY;
        return (overflow === "auto" || overflow === "scroll") && el.scrollHeight > el.clientHeight + 1;
      })!;
      const inner = (scroller.querySelector("*") ?? scroller) as HTMLElement;

      scroller.scrollTop = 0;
      const atTop = {
        down: window.scrollGuard.scrollRegionWantsWheel(inner, 0, 40),
        up: window.scrollGuard.scrollRegionWantsWheel(inner, 0, -40),
      };

      scroller.scrollTop = scroller.scrollHeight;
      const atBottom = {
        down: window.scrollGuard.scrollRegionWantsWheel(inner, 0, 40),
        up: window.scrollGuard.scrollRegionWantsWheel(inner, 0, -40),
      };
      return { atTop, atBottom };
    });

    // At the top: scrolling down has room, scrolling up does not — the canvas
    // should get that one so the graph still zooms at the end stop.
    expect(verdicts.atTop).toEqual({ down: true, up: false });
    expect(verdicts.atBottom).toEqual({ down: false, up: true });
  });

  test("stops walking at the host boundary", async ({ page }) => {
    // The walk stops where the panel does. Without the boundary the predicate
    // would keep climbing into ComfyUI's own scrollable containers and claim
    // wheel events that were never ours — which is the shape of the bug that
    // silenced other packs.
    const claimed = await page.evaluate(() => {
      const scroller = [...document.querySelectorAll<HTMLElement>("#app *")].find((el) => {
        const overflow = getComputedStyle(el).overflowY;
        return (overflow === "auto" || overflow === "scroll") && el.scrollHeight > el.clientHeight + 1;
      })!;
      const inner = (scroller.querySelector("*") ?? scroller) as HTMLElement;
      scroller.scrollTop = 0;

      return {
        withoutBoundary: window.scrollGuard.scrollRegionWantsWheel(inner, 0, 40),
        boundaryInside: window.scrollGuard.scrollRegionWantsWheel(inner, 0, 40, scroller),
      };
    });

    expect(claimed.withoutBoundary).toBe(true);
    // With the boundary set to the scroller itself, the walk ends before ever
    // examining it, so nothing claims the wheel.
    expect(claimed.boundaryInside).toBe(false);
  });

  test("leaves a horizontal wheel alone on a vertical list", async ({ page }) => {
    const claimed = await page.evaluate(() => {
      const scroller = [...document.querySelectorAll<HTMLElement>("#app *")].find((el) => {
        const overflow = getComputedStyle(el).overflowY;
        return (overflow === "auto" || overflow === "scroll") && el.scrollHeight > el.clientHeight + 1;
      })!;
      scroller.scrollTop = 0;
      return window.scrollGuard.scrollRegionWantsWheel(scroller, 40, 0);
    });

    // A sideways gesture over a vertically-scrolling list belongs to whoever
    // else wants it, canvas panning included.
    expect(claimed).toBe(false);
  });
});
