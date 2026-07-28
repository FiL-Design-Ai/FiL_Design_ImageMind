import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { defineComponent, h } from "vue";
import { addFilDomWidget } from "@/nodes2/domWidgetHost";
import {
  FakeResizeObserver,
  NODE_CHROME_HEIGHT,
  createWidgetNode,
  stubElementHeights,
  type FakeWidgetNode,
} from "./fakes/comfyHost";

/**
 * What `domWidgetHost.ts` does, written down before it is split up.
 *
 * `domWidgetHost.test.ts` covers which elements get observed. Everything else
 * in that 500-line function — the height model, the growable stretch, the
 * value bridge — has never been tested, and the growable path in particular is
 * four numbers that depend on each other (`naturalHeight`, `stretch`,
 * `applyingOwnSize`, `growableInitialized`). Breaking one of those does not
 * throw; the node just stops resizing the way it used to, months later.
 *
 * These tests are deliberately about behaviour, not structure: they must keep
 * passing across the split without being edited. If one has to change to
 * accommodate the refactor, the refactor changed behaviour.
 */

const Panel = defineComponent({
  name: "TestPanel",
  render: () => h("div", { class: "test-panel-root" }, "panel"),
});

let restoreHeights: (() => void) | null = null;

function mount(node: FakeWidgetNode, options: { height?: number; growable?: boolean; state?: object } = {}) {
  return addFilDomWidget(node, "test_view", Panel, {
    state: options.state ?? {},
    height: options.height ?? 40,
    growable: options.growable,
  });
}

beforeEach(() => {
  FakeResizeObserver.install();
});

afterEach(() => {
  restoreHeights?.();
  restoreHeights = null;
});

describe("the widget contract handed to ComfyUI", () => {
  it("reports the caller's estimate until something measures the content", () => {
    // jsdom lays nothing out, which is the same situation as the first paint:
    // nothing is mounted yet, so the estimate is all there is.
    const node = createWidgetNode();
    mount(node, { height: 40 });

    expect(node.widgetOptions?.getHeight()).toBe(40);
  });

  it("measures the panel and rounds to a 4px grid", () => {
    // Sub-pixel jitter (font metrics, locale-driven label widths) otherwise
    // reports a slightly different height on every reload of the same
    // workflow, marking it dirty for no visible reason.
    restoreHeights = stubElementHeights({ client: 118, scroll: 118 });
    const node = createWidgetNode();
    mount(node, { height: 40 });

    expect(node.widgetOptions?.getHeight()).toBe(120);
  });

  it("keeps the node box at least as tall as the panel plus its title bar", () => {
    restoreHeights = stubElementHeights({ client: 200, scroll: 200 });
    const node = createWidgetNode({ contentHeight: 100 });
    mount(node, { height: 40 });

    const [, height] = node.sizes.at(-1) ?? [0, 0];
    expect(height).toBeGreaterThanOrEqual(200 + 35);
  });

  it("publishes the height through computeSize even when height is getter-only", () => {
    // Assigning a getter-only `height` throws inside LiteGraph's draw loop and
    // takes the whole frame with it, so every FiL node renders as nothing.
    restoreHeights = stubElementHeights({ client: 118, scroll: 118 });
    const node = createWidgetNode({ readonlyWidgetHeight: true });

    const controller = mount(node, { height: 40 });

    const widget = controller!.widget as { computeSize?: () => [number, number] };
    expect(widget.computeSize?.()[1]).toBe(120);
  });
});

describe("the value bridge", () => {
  it("merges nodeState and ui in place rather than replacing them", () => {
    // The panels hold a reference to these objects; replacing them would leave
    // the mounted component bound to the old one.
    const state = { nodeState: { seed: 1, mode: "a" }, ui: { open: true } };
    const node = createWidgetNode();
    mount(node, { state });

    const nodeStateBefore = state.nodeState;
    node.widgetOptions?.setValue({ nodeState: { seed: 42 }, ui: { open: false } });

    expect(state.nodeState).toBe(nodeStateBefore);
    expect(state.nodeState).toEqual({ seed: 42, mode: "a" });
    expect(state.ui).toEqual({ open: false });
  });

  it("assigns every other key straight onto the state", () => {
    const state: Record<string, unknown> = { nodeState: {}, ui: {}, extra: "old" };
    const node = createWidgetNode();
    mount(node, { state });

    node.widgetOptions?.setValue({ extra: "new", added: 7 });

    expect(state.extra).toBe("new");
    expect(state.added).toBe(7);
  });

  it("ignores a payload that is not an object", () => {
    const state: Record<string, unknown> = { nodeState: {}, ui: {} };
    const node = createWidgetNode();
    mount(node, { state });

    expect(() => node.widgetOptions?.setValue(null)).not.toThrow();
    expect(() => node.widgetOptions?.setValue("nonsense")).not.toThrow();
  });

  it("hands ComfyUI the live state object on serialize", () => {
    const state = { nodeState: { seed: 5 }, ui: {} };
    const node = createWidgetNode();
    mount(node, { state });

    state.nodeState.seed = 9;

    expect((node.widgetOptions?.getValue() as typeof state).nodeState.seed).toBe(9);
  });
});

describe("growable panels", () => {
  // With no layout, the panel measures at the caller's estimate of 40 and the
  // node box that exactly fits it is `NODE_CHROME_HEIGHT + 40`. Dragging the
  // node to 260 is therefore 260 - (NODE_CHROME_HEIGHT + 100) of stretch, the
  // subtrahend being the box the node reported before anything was published.
  const DRAGGED_TO = 260;
  const STRETCH = DRAGGED_TO - (NODE_CHROME_HEIGHT + 100);

  it("reports the un-stretched height from computeSize so the node can shrink again", () => {
    // LiteGraph clamps a resize drag to `computeSize()`. If that number carried
    // the stretch, the node could only ever be dragged taller, never back down.
    const node = createWidgetNode({ contentHeight: 100 });
    mount(node, { height: 40, growable: true });

    node.setSize([200, DRAGGED_TO]);

    expect(node.computeSize()[1]).toBe(NODE_CHROME_HEIGHT + 40);
  });

  it("takes a height it did not ask for as the user's intent", () => {
    const node = createWidgetNode({ contentHeight: 100 });
    const controller = mount(node, { height: 40, growable: true });

    node.setSize([200, DRAGGED_TO]);

    const widget = controller!.widget as { computeSize?: () => [number, number] };
    expect(widget.computeSize?.()[1]).toBe(40 + STRETCH);
    expect(controller!.host.style.height).toBe(`${40 + STRETCH}px`);
  });

  it("reconciles the node box with the height it just published", () => {
    // The canvas re-arranges the node every frame from the widget's height, so
    // a shrink that is not answered in the same tick is pushed straight back up.
    const node = createWidgetNode({ contentHeight: 100 });
    mount(node, { height: 40, growable: true });

    node.setSize([200, DRAGGED_TO]);

    expect(node.sizes.at(-1)).toEqual([200, NODE_CHROME_HEIGHT + 40 + STRETCH]);
  });

  it("does not treat its own size writes as a drag", () => {
    restoreHeights = stubElementHeights({ client: 118, scroll: 118 });
    const node = createWidgetNode({ contentHeight: 100 });
    const controller = mount(node, { height: 40, growable: true });

    const stretched = (controller!.widget as { computeSize?: () => [number, number] }).computeSize?.()[1];

    // Whatever the initial sync settled on must survive the host's own
    // `setSize` calls; only a foreign write changes the stretch.
    expect((controller!.widget as { computeSize?: () => [number, number] }).computeSize?.()[1]).toBe(stretched);
  });

  it("never lets the stretch go negative", () => {
    const node = createWidgetNode({ contentHeight: 100 });
    const controller = mount(node, { height: 40, growable: true });

    node.setSize([200, 10]);

    expect(controller!.host.style.height).toBe("40px");
  });
});
