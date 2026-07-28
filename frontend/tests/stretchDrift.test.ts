import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { defineComponent, h } from "vue";
import { addFilDomWidget } from "@/nodes2/domWidgetHost";
import { addLegacyFilDomWidget } from "./fixtures/legacyDomWidgetHost";
import {
  FakeResizeObserver,
  createWidgetNode,
  stubElementHeights,
  type FakeWidgetNode,
} from "./fakes/comfyHost";

/**
 * Does the growable stretch drift, and did the split cause it?
 *
 * Live in ComfyUI, a panel dragged to 200px of stretch settled at 192 after the
 * content changed under it — 8px, stable afterwards. The split was the obvious
 * suspect. It is not: both implementations produce identical numbers at every
 * step of the sequence below, which is what this exists to show rather than
 * argue.
 *
 * What it does not do is reproduce the 8px. In jsdom the stretch holds at
 * exactly 200 through a grow and a shrink, in both versions — so whatever costs
 * those pixels lives in something only the real host does, most likely
 * LiteGraph writing back a size of its own after the resize. Cosmetic, stable
 * once it happens, and older than the split.
 *
 * The fixture is the pre-split file at dc873c0, unmodified but for its export
 * name. When it stops compiling, this comparison has already expired — delete
 * both rather than repair the fixture.
 */

const Panel = defineComponent({
  name: "TestPanel",
  render: () => h("div", { class: "test-panel-root" }, "panel"),
});

/** Mutable so the stubbed layout can change mid-run, the way content does. */
let layout: { client: number; scroll: number };
let restoreHeights: (() => void) | null = null;

type Mount = typeof addFilDomWidget;

interface Reading {
  natural: number;
  stretch: number;
  published: number;
  nodeHeight: number;
}

/**
 * Drive one implementation through: settle, drag 200px taller, content grows,
 * content shrinks back.
 *
 * `stretch` is not exposed by either version, so it is derived the way the app
 * sees it — the published widget height minus the panel's own content height,
 * which is what `computeSize()` reports un-stretched.
 */
async function run(mount: Mount): Promise<{ node: FakeWidgetNode; readings: Record<string, Reading> }> {
  layout = { client: 400, scroll: 400 };
  const node = createWidgetNode({ contentHeight: 100 });
  const controller = mount(node, "test_view", Panel, { state: {}, height: 40, growable: true });

  const widget = controller!.widget as { computeSize?: () => [number, number] };
  const read = (): Reading => {
    const published = widget.computeSize?.()[1] ?? 0;
    const natural = node.computeSize()[1] - 35; // un-stretched box, less the chrome
    return { natural, stretch: published - natural, published, nodeHeight: node.size[1] };
  };

  // The settle loop and the observers are animation-frame driven; jsdom runs
  // them off timers, so time has to pass for any of it to happen.
  const settle = () => new Promise((resolve) => setTimeout(resolve, 400));

  await settle();
  const readings: Record<string, Reading> = { settled: read() };

  node.setSize([200, node.size[1] + 200]);
  await settle();
  readings.dragged = read();

  layout = { client: 520, scroll: 520 };
  controller!.host.firstElementChild?.appendChild(document.createElement("div"));
  await settle();
  readings.grown = read();

  layout = { client: 400, scroll: 400 };
  controller!.host.firstElementChild?.lastElementChild?.remove();
  await settle();
  readings.shrunk = read();

  controller!.unmount();
  return { node, readings };
}

beforeEach(() => {
  FakeResizeObserver.install();
  layout = { client: 400, scroll: 400 };
  // The getters close over `layout`, so reassigning its fields mid-test moves
  // the "content" without reinstalling anything.
  restoreHeights = stubElementHeights({
    get client() {
      return layout.client;
    },
    get scroll() {
      return layout.scroll;
    },
  } as unknown as { client: number; scroll: number });
});

afterEach(() => {
  restoreHeights?.();
  restoreHeights = null;
});

describe("the growable stretch, before and after the split", () => {
  it("moves the same way in both implementations", async () => {
    const legacy = await run(addLegacyFilDomWidget as Mount);
    const current = await run(addFilDomWidget);

    // Guard the comparison against being vacuous: two implementations that both
    // did nothing would agree perfectly.
    expect(legacy.readings.dragged.stretch).toBe(200);
    expect(legacy.readings.grown.natural).toBeGreaterThan(legacy.readings.settled.natural);
    expect(legacy.readings.shrunk.natural).toBe(legacy.readings.settled.natural);

    expect(current.readings).toEqual(legacy.readings);
  });

  it("settles rather than accumulating across repeated content changes", async () => {
    // The number itself matters less than whether it keeps moving: a stretch
    // that loses pixels on every content change eventually collapses the panel.
    const node = createWidgetNode({ contentHeight: 100 });
    const controller = addFilDomWidget(node, "test_view", Panel, { state: {}, height: 40, growable: true });
    const widget = controller!.widget as { computeSize?: () => [number, number] };
    const settle = () => new Promise((resolve) => setTimeout(resolve, 400));
    const stretch = () => (widget.computeSize?.()[1] ?? 0) - (node.computeSize()[1] - 35);

    await settle();
    node.setSize([200, node.size[1] + 200]);
    await settle();

    const seen: number[] = [stretch()];
    for (let round = 0; round < 3; round++) {
      layout = { client: 520, scroll: 520 };
      controller!.host.firstElementChild?.appendChild(document.createElement("div"));
      await settle();
      layout = { client: 400, scroll: 400 };
      controller!.host.firstElementChild?.lastElementChild?.remove();
      await settle();
      seen.push(stretch());
    }
    controller!.unmount();

    // Whatever the first content change costs, the ones after it are free.
    expect(seen.slice(1).every((value) => value === seen[1])).toBe(true);
  });
});
