import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { defineComponent, h } from "vue";
import { addFilDomWidget } from "@/nodes2/domWidgetHost";
import {
  FakeResizeObserver,
  createWidgetNode,
  stubElementHeights,
  NODE_CHROME_HEIGHT,
} from "./fakes/comfyHost";

/**
 * Where the growable stretch goes when nobody is holding it.
 *
 * A panel dragged taller kept losing pixels. The number in the first report was
 * 8 and the suspect was the `domWidgetHost` split (`3a0752e`); both were wrong.
 * Driven through a real ComfyUI (`tests/smoke/stretchDrift.spec.ts`) the loss is
 * ~40px and it repeats on every workflow load — +200 comes back as +162, then
 * +122, until the panel sits on its content.
 *
 * The cause is arithmetic, not the host: on the first sync the stretch was read
 * as "box minus content height", while the content height still came from the
 * caller's estimate (`scanner.ts` guesses 580 for a panel that measures 540)
 * because a re-measure updates the model without telling the widget. The
 * difference between guess and measurement was charged to the user's drag.
 *
 * These tests pin the two halves of the repair: a restored box is the only
 * source of stretch, and the measurement is published before it is read.
 *
 * (This file used to compare the split against a copy of the pre-split
 * implementation, which is how the split was cleared. That comparison and its
 * fixture are gone: the behaviour below is deliberately no longer the old one.)
 */

const Panel = defineComponent({
  name: "TestPanel",
  render: () => h("div", { class: "test-panel-root" }, "panel"),
});

/** Mutable so the stubbed layout can change mid-run, the way content does. */
let layout: { client: number; scroll: number };
let restoreHeights: (() => void) | null = null;

/** The settle loop and the observers are animation-frame driven; jsdom runs
 * them off timers, so time has to pass for any of it to happen. */
const settle = () => new Promise((resolve) => setTimeout(resolve, 400));

/**
 * The stretch as the app sees it — neither implementation exposes it.
 *
 * The published widget height carries the stretch; `computeSize()` is patched
 * to report the box without it. The difference is what the user dragged.
 */
function stretchOf(
  node: { computeSize(): [number, number] },
  widget: { computeSize?: () => [number, number] },
): number {
  const published = widget.computeSize?.()[1] ?? 0;
  return published - (node.computeSize()[1] - NODE_CHROME_HEIGHT);
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

describe("the growable stretch", () => {
  it("holds through a grow and a shrink of the content", async () => {
    const node = createWidgetNode({ contentHeight: 100 });
    const controller = addFilDomWidget(node, "test_view", Panel, { state: {}, height: 40, growable: true });
    const widget = controller!.widget as { computeSize?: () => [number, number] };

    await settle();
    node.setSize([200, node.size[1] + 200]);
    await settle();
    expect(stretchOf(node, widget)).toBe(200);

    layout = { client: 520, scroll: 520 };
    controller!.host.firstElementChild?.appendChild(document.createElement("div"));
    await settle();
    expect(stretchOf(node, widget)).toBe(200);
    // The box follows the content in the same pass, rather than a step behind:
    // publishing the fresh measurement before reading it is what fixed the
    // drift, and this is the visible half of that change.
    expect(node.size[1]).toBe(520 + NODE_CHROME_HEIGHT + 200);

    layout = { client: 400, scroll: 400 };
    controller!.host.firstElementChild?.lastElementChild?.remove();
    await settle();
    expect(stretchOf(node, widget)).toBe(200);
    expect(node.size[1]).toBe(400 + NODE_CHROME_HEIGHT + 200);

    controller!.unmount();
  });

  it("settles rather than accumulating across repeated content changes", async () => {
    // The number itself matters less than whether it keeps moving: a stretch
    // that loses pixels on every content change eventually collapses the panel.
    const node = createWidgetNode({ contentHeight: 100 });
    const controller = addFilDomWidget(node, "test_view", Panel, { state: {}, height: 40, growable: true });
    const widget = controller!.widget as { computeSize?: () => [number, number] };

    await settle();
    node.setSize([200, node.size[1] + 200]);
    await settle();

    const seen: number[] = [stretchOf(node, widget)];
    for (let round = 0; round < 3; round++) {
      layout = { client: 520, scroll: 520 };
      controller!.host.firstElementChild?.appendChild(document.createElement("div"));
      await settle();
      layout = { client: 400, scroll: 400 };
      controller!.host.firstElementChild?.lastElementChild?.remove();
      await settle();
      seen.push(stretchOf(node, widget));
    }
    controller!.unmount();

    expect(seen.every((value) => value === seen[0])).toBe(true);
  });

  it("comes back with the workflow it was saved in", async () => {
    // The live defect, in miniature. A reload builds a new node with a new
    // host and hands it the saved box through `configure()` — never through
    // `setSize`, so the stretch has to be recovered from that box exactly once.
    const first = createWidgetNode({ contentHeight: 100 });
    const firstController = addFilDomWidget(first, "test_view", Panel, { state: {}, height: 40, growable: true });
    await settle();
    first.setSize([200, first.size[1] + 200]);
    await settle();
    const saved = [...first.size] as [number, number];
    firstController!.unmount();

    // Three round trips: the loss was ~40px *per load*, so one reload alone
    // could be read as a one-off. It never was.
    let box = saved;
    for (let load = 0; load < 3; load++) {
      const node = createWidgetNode({ contentHeight: 100 });
      const controller = addFilDomWidget(node, "test_view", Panel, { state: {}, height: 40, growable: true });
      const widget = controller!.widget as { computeSize?: () => [number, number] };
      node.configure({ size: box });
      await settle();

      expect(stretchOf(node, widget), `stretch lost on load ${load + 1}`).toBe(200);
      box = [...node.size] as [number, number];
      controller!.unmount();
    }
  });

  it("gives a freshly dropped node no stretch at all", async () => {
    // The other half: without a saved box there is nothing to recover, and the
    // caller's height estimate must not be mistaken for one. Charging that
    // difference as stretch would leave dead space under the content of every
    // new node — the same arithmetic, in the opposite direction.
    const node = createWidgetNode({ contentHeight: 100 });
    const controller = addFilDomWidget(node, "test_view", Panel, { state: {}, height: 40, growable: true });
    const widget = controller!.widget as { computeSize?: () => [number, number] };

    await settle();

    expect(stretchOf(node, widget)).toBe(0);
    expect(node.size[1]).toBe(400 + NODE_CHROME_HEIGHT);
    controller!.unmount();
  });
});
