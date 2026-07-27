import { beforeEach, describe, expect, it } from "vitest";
import {
  findScrollableInChain,
  findScrollableUnderPoint,
  isInsideFilWidget,
} from "@/composables/scrollGuard";

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

function atPoint(el: HTMLElement): HTMLElement {
  el.getBoundingClientRect = () =>
    ({ left: 0, top: 0, right: 200, bottom: 200, width: 200, height: 200 }) as DOMRect;
  return el;
}

describe("scroll guard scoping", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("finds a scrollable region in the target's ancestor chain", () => {
    const list = scrollable(document.createElement("div"));
    const label = document.createElement("span");
    list.appendChild(label);
    document.body.appendChild(list);

    expect(findScrollableInChain(label, 0, 10)).toBe(list);
  });

  it("ignores a region that has already hit its end stop", () => {
    const list = scrollable(document.createElement("div"), { top: 300 });
    document.body.appendChild(list);

    expect(findScrollableInChain(list, 0, 10)).toBeNull();
    expect(findScrollableInChain(list, 0, -10)).toBe(list);
  });

  it("tells a FiL panel apart from another pack's widget", () => {
    const ours = document.createElement("div");
    ours.className = "fil-vue-host";
    const inner = document.createElement("div");
    ours.appendChild(inner);
    const theirs = document.createElement("div");
    document.body.append(ours, theirs);

    expect(isInsideFilWidget(inner)).toBe(true);
    expect(isInsideFilWidget(theirs)).toBe(false);
    expect(isInsideFilWidget(null)).toBe(false);
  });

  it("hit-tests only FiL widgets when scoped, all of them otherwise", () => {
    const foreign = atPoint(document.createElement("div"));
    foreign.className = "dom-widget";
    scrollable(foreign);
    document.body.appendChild(foreign);

    expect(findScrollableUnderPoint(10, 10, 0, 10, true)).toBeNull();
    expect(findScrollableUnderPoint(10, 10, 0, 10, false)).toBe(foreign);

    const mine = atPoint(document.createElement("div"));
    mine.className = "dom-widget";
    const host = atPoint(scrollable(document.createElement("div")));
    host.className = "fil-vue-host";
    mine.appendChild(host);
    document.body.appendChild(mine);

    expect(findScrollableUnderPoint(10, 10, 0, 10, true)).toBe(host);
  });
});
