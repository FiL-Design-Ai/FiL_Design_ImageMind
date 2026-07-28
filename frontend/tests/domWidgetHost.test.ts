import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { defineComponent, h } from "vue";
import { addFilDomWidget } from "@/nodes2/domWidgetHost";

/**
 * The height sync used to run off a 400ms `setInterval` per widget, installed
 * as a backstop because the ResizeObserver "silently stopped firing" — a node
 * would sit at 522px against 738px of content. The observer was fine; it was
 * watching `host`, whose box stops following the content the moment anything
 * pins it, while the measurement read the panel's `scrollHeight`. These tests
 * pin the fix: the panel itself is observed, and no timer is installed.
 *
 * jsdom has no layout (every `scrollHeight` is 0) and no ResizeObserver, so
 * what is asserted here is which elements get observed — not pixel results.
 */

class FakeResizeObserver {
  static instances: FakeResizeObserver[] = [];
  observed: Element[] = [];
  disconnected = false;
  constructor(public cb: () => void) {
    FakeResizeObserver.instances.push(this);
  }
  observe(el: Element) {
    this.observed.push(el);
  }
  unobserve() {}
  disconnect() {
    this.disconnected = true;
  }
}

const Panel = defineComponent({
  name: "TestPanel",
  render: () => h("div", { class: "test-panel-root" }, "panel"),
});

function makeNode() {
  return {
    comfyClass: "FiLTest",
    size: [200, 100] as [number, number],
    minSize: [100, 50] as [number, number],
    computeSize: () => [200, 100] as [number, number],
    setSize: vi.fn(),
    addDOMWidget: vi.fn(() => ({ name: "test_view" })),
  };
}

beforeEach(() => {
  FakeResizeObserver.instances = [];
  (globalThis as unknown as { ResizeObserver: unknown }).ResizeObserver = FakeResizeObserver;
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("domWidgetHost size observation", () => {
  it("observes the panel root, not just the host wrapper", () => {
    const controller = addFilDomWidget(makeNode(), "test_view", Panel, { state: {}, height: 40 });
    expect(controller).not.toBeNull();

    const observed = FakeResizeObserver.instances[0].observed;
    const panelRoot = controller!.host.firstElementChild?.firstElementChild;
    expect(panelRoot).not.toBeNull();
    // The host stays observed — it is still the reliable signal for width.
    expect(observed).toContain(controller!.host);
    expect(observed).toContain(panelRoot);
  });

  it("installs no lifetime timer", () => {
    const timer = vi.spyOn(globalThis, "setInterval");
    addFilDomWidget(makeNode(), "test_view", Panel, { state: {}, height: 40 });
    expect(timer).not.toHaveBeenCalled();
  });

  it("disconnects every observer on unmount", () => {
    const controller = addFilDomWidget(makeNode(), "test_view", Panel, {
      state: {},
      height: 40,
      growable: true,
    });
    const disconnects = vi.fn();
    // The growable path keeps a permanent MutationObserver; spy on the
    // prototype so both it and the arrival watcher are covered.
    vi.spyOn(MutationObserver.prototype, "disconnect").mockImplementation(disconnects);

    controller!.unmount();

    expect(FakeResizeObserver.instances[0].disconnected).toBe(true);
    expect(disconnects).toHaveBeenCalled();
  });
});
