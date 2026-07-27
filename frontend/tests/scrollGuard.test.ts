import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { elementWantsWheel, scrollRegionWantsWheel } from "@/composables/scrollGuard";
import { wheelHandlingEnabled } from "@/stores/settings/scrollGuardSettings";

/** jsdom reports every layout box as 0, so the scroll geometry the predicates
 * read has to be defined per element. */
function scrollable(el: HTMLElement, { client = 100, scroll = 400, top = 50 } = {}): HTMLElement {
  el.style.overflowY = "auto";
  Object.defineProperty(el, "clientHeight", { value: client, configurable: true });
  Object.defineProperty(el, "scrollHeight", { value: scroll, configurable: true });
  Object.defineProperty(el, "clientWidth", { value: client, configurable: true });
  Object.defineProperty(el, "scrollWidth", { value: client, configurable: true });
  el.scrollTop = top;
  return el;
}

describe("wheel-vs-scroll predicate", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("claims the wheel for a region with room left to scroll", () => {
    const list = scrollable(document.createElement("div"));
    document.body.appendChild(list);

    expect(elementWantsWheel(list, 0, 10)).toBe(true);
  });

  it("releases the wheel at the end stop, in that direction only", () => {
    const list = scrollable(document.createElement("div"), { top: 300 });
    document.body.appendChild(list);

    expect(elementWantsWheel(list, 0, 10)).toBe(false);
    expect(elementWantsWheel(list, 0, -10)).toBe(true);
  });

  it("walks the ancestor chain up to the host boundary", () => {
    const outside = document.createElement("div");
    const host = document.createElement("div");
    const list = scrollable(document.createElement("div"));
    const label = document.createElement("span");
    list.appendChild(label);
    host.appendChild(list);
    outside.appendChild(host);
    document.body.appendChild(outside);

    expect(scrollRegionWantsWheel(label, 0, 10, outside)).toBe(true);
    // The walk stops before `stopAt`, so a scrollable ancestor above the host
    // is not the host's business.
    expect(scrollRegionWantsWheel(host, 0, 10, host)).toBe(false);
  });

  it("ignores a plain element with no overflow", () => {
    const plain = document.createElement("div");
    document.body.appendChild(plain);

    expect(scrollRegionWantsWheel(plain, 0, 10)).toBe(false);
    expect(scrollRegionWantsWheel(null, 0, 10)).toBe(false);
  });
});

describe("wheel handling setting", () => {
  const g = globalThis as unknown as { app?: unknown };

  function storedAs(value: unknown): void {
    g.app = { extensionManager: { setting: { get: () => value } } };
  }

  afterEach(() => {
    delete g.app;
  });

  it("is on unless the user turned it off", () => {
    expect(wheelHandlingEnabled()).toBe(true); // nothing stored
    storedAs(true);
    expect(wheelHandlingEnabled()).toBe(true);
    storedAs(false);
    expect(wheelHandlingEnabled()).toBe(false);
  });
});
