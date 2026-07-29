import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { startNodeRun, stopNodeRun, setRunningNodes } from "@/composables/useRunButtonFx";
import { RUN_FX_MODE, MODE_OFF, MODE_ALL } from "@/stores/settings/runFxSettings";
import { ACTIVE_PALETTE } from "@/styles/brand";
import { createApp, createNode, type FakeApp, type FakeNode } from "./fakes/comfyHost";

/**
 * The run highlight has to work under both renderers, and used to work under
 * neither: it looked for `canvas.nodeEls`, which core does not have, and this
 * file used to build that map itself — so five green tests certified a feature
 * that could not fire. The host now comes from `fakes/comfyHost.ts`, which
 * models what 1.47.10 actually exposes: `[data-node-id]` elements when Vue
 * nodes are on, `node.strokeStyles` on the canvas either way.
 */

const settings: Record<string, unknown> = {};

let app: FakeApp;
let ours: FakeNode;
let foreign: FakeNode;

const isRunning = (root: HTMLElement) =>
  root.classList.contains("fil-node-running") || !!root.querySelector(".fil-node-running");

beforeEach(() => {
  stopNodeRun();
  for (const k of Object.keys(settings)) delete settings[k];
  app = createApp();
  ours = createNode({ comfyClass: "FiLNeuroCleaner" });
  foreign = createNode({ comfyClass: "KSampler" });
  (globalThis as unknown as { app: unknown }).app = {
    extensionManager: { setting: { get: (id: string) => settings[id] } },
  };
});

afterEach(() => {
  stopNodeRun();
  document.body.innerHTML = "";
});

describe("run highlight, Vue-rendered nodes", () => {
  it("marks our node and clears it when the queue moves on", () => {
    const el = app.addNodeEl(1, ours);
    startNodeRun(app as never, 1);
    expect(isRunning(el)).toBe(true);

    stopNodeRun();
    expect(isRunning(el)).toBe(false);
  });

  it("marks the title bar, not the whole node, when there is one", () => {
    const el = app.addNodeEl(1, ours);
    startNodeRun(app as never, 1);
    expect(el.querySelector(".lg-node-header")?.classList.contains("fil-node-running")).toBe(true);
    expect(el.classList.contains("fil-node-running")).toBe(false);
  });

  it("falls back to the node root if core renames the header again", () => {
    const el = app.addNodeEl(1, ours);
    el.querySelector(".lg-node-header")?.remove();
    startNodeRun(app as never, 1);
    expect(el.classList.contains("fil-node-running")).toBe(true);
  });

  it("marks one node at a time on the single-id path", () => {
    // `startNodeRun` is what the `executing` event drives, and that event names
    // one node. The set-valued path is `setRunningNodes`, below.
    const first = app.addNodeEl(1, ours);
    const second = app.addNodeEl(2, foreign);
    settings[RUN_FX_MODE] = MODE_ALL;
    startNodeRun(app as never, 1);
    startNodeRun(app as never, 2);
    expect(isRunning(first)).toBe(false);
    expect(isRunning(second)).toBe(true);
  });

  it("skips foreign nodes on the default scope", () => {
    const el = app.addNodeEl(2, foreign);
    startNodeRun(app as never, 2);
    expect(isRunning(el)).toBe(false);
  });

  it("covers foreign nodes once the scope says so", () => {
    const el = app.addNodeEl(2, foreign);
    settings[RUN_FX_MODE] = MODE_ALL;
    startNodeRun(app as never, 2);
    expect(isRunning(el)).toBe(true);
  });

  it("does nothing at all when switched off", () => {
    const el = app.addNodeEl(1, ours);
    settings[RUN_FX_MODE] = MODE_OFF;
    startNodeRun(app as never, 1);
    expect(isRunning(el)).toBe(false);
  });
});

/**
 * The default renderer, and the one the pack was blind to: no node DOM exists,
 * so the ring has to be drawn by LiteGraph itself.
 */
describe("run highlight, canvas-rendered nodes", () => {
  const shape = (node: FakeNode, key: string) => node.strokeStyles[key]?.();

  it("strokes the node in the theme accent, with no DOM involved", () => {
    ours.id = 1;
    app.graph._nodes.push(ours);
    startNodeRun(app as never, 1);

    // The ring breathes, so the alpha and width move; what must not move is the
    // colour, which comes from the palette at draw time.
    const rgb = ACTIVE_PALETTE.accent.replace("#", "").match(/../g)!.map((h) => parseInt(h, 16));
    expect(shape(ours, "filRunning")?.color).toContain(`rgba(${rgb[0]},${rgb[1]},${rgb[2]},`);
    expect(app.canvas.dirtyCount).toBeGreaterThan(0);
  });

  it("advances the ring over time instead of drawing one flat colour", () => {
    // The canvas half was a still ring on the theory that animating it costs a
    // repaint per frame. Measured on a live graph, LiteGraph repaints ~4.5
    // times a second on its own while idle — a stutter, not a pulse — so the
    // ring drives its own repaints and reads the phase off the clock.
    ours.id = 1;
    app.graph._nodes.push(ours);
    startNodeRun(app as never, 1);

    const now = vi.spyOn(Date, "now");
    const samples = [0, 275, 550, 825].map((ms) => {
      now.mockReturnValue(ms);
      return shape(ours, "filRunning")!;
    });
    now.mockRestore();

    // Widest at the middle of the cycle, narrowest at its ends, and the two
    // quarter points match — the breath in and the breath out are one curve.
    expect(new Set(samples.map((s) => s.color)).size).toBe(3);
    expect(samples[2].lineWidth).toBeGreaterThan(samples[0].lineWidth);
    expect(samples[3]).toEqual(samples[1]);
  });

  it("keeps the ring still for a reader who asked for less motion", () => {
    ours.id = 1;
    app.graph._nodes.push(ours);
    vi.stubGlobal("matchMedia", (query: string) => ({ matches: query.includes("reduce") }));

    startNodeRun(app as never, 1);
    const first = shape(ours, "filRunning");
    vi.spyOn(Date, "now").mockReturnValue(550);
    expect(shape(ours, "filRunning")).toEqual(first);
    expect(first).toEqual({ color: ACTIVE_PALETTE.accent, lineWidth: 3 });

    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("lifts core's green ring while ours is up and puts it back after", () => {
    ours.id = 1;
    app.graph._nodes.push(ours);
    const core = ours.strokeStyles.running;

    startNodeRun(app as never, 1);
    expect(ours.strokeStyles.running).toBeUndefined();

    stopNodeRun();
    expect(ours.strokeStyles.running).toBe(core);
    expect(ours.strokeStyles.filRunning).toBeUndefined();
  });

  it("looks the node up on the graph, not through a detached reference", () => {
    // Caught on a live graph, not here: `const lookup = graph.getNodeById` then
    // `lookup(id)` throws inside LiteGraph on `this._nodes_by_id`, and ComfyApi
    // swallows a listener exception as a console warning. The fake now reads
    // through `this` too, so this can fail in CI.
    ours.id = 1;
    app.graph._nodes.push(ours);
    const detached = app.graph.getNodeById;
    expect(() => detached(1)).toThrow();

    startNodeRun(app as never, 1);
    expect(ours.strokeStyles.filRunning).toBeDefined();
  });

  it("leaves a foreign node's rings untouched on the default scope", () => {
    foreign.id = 2;
    app.graph._nodes.push(foreign);
    startNodeRun(app as never, 2);

    expect(foreign.strokeStyles.filRunning).toBeUndefined();
    expect(shape(foreign, "running")).toEqual({ color: "#0f0", lineWidth: 3 });
  });

  it("does not strand our ring on the node it moved away from", () => {
    ours.id = 1;
    foreign.id = 2;
    app.graph._nodes.push(ours, foreign);
    settings[RUN_FX_MODE] = MODE_ALL;

    startNodeRun(app as never, 1);
    startNodeRun(app as never, 2);

    expect(ours.strokeStyles.filRunning).toBeUndefined();
    expect(ours.strokeStyles.running).toBeDefined();
    expect(foreign.strokeStyles.filRunning).toBeDefined();
  });
});

describe("subgraph ids", () => {
  it("recognises a node addressed by a composite id", () => {
    // `Number("3:1")` is NaN — coercing first would look the node up as NaN,
    // find nothing, and skip our own node in "FiL nodes only" mode.
    const el = app.addNodeEl("3:1", ours);
    startNodeRun(app as never, "3:1");
    expect(isRunning(el)).toBe(true);
    expect(ours.strokeStyles.filRunning).toBeDefined();
  });

  it("marks the subgraph box when the running node is inside one", () => {
    // A live run sent "30:24" for a node inside subgraph 30. Nothing on the
    // canvas answers to that id, so the highlight went silent for the whole
    // subgraph while core rang the container. The container is the only thing
    // the user can see, so it is what we mark.
    const box = createNode({ comfyClass: "FiLOpticScanner" });
    const el = app.addNodeEl(30, box);

    startNodeRun(app as never, "30:24");

    expect(isRunning(el)).toBe(true);
    expect(box.strokeStyles.filRunning).toBeDefined();
  });

  it("prefers an exact match over the container", () => {
    const inner = createNode({ comfyClass: "FiLSeed" });
    const box = createNode({ comfyClass: "FiLOpticScanner" });
    const innerEl = app.addNodeEl("30:24", inner);
    const boxEl = app.addNodeEl(30, box);

    startNodeRun(app as never, "30:24");

    expect(isRunning(innerEl)).toBe(true);
    expect(isRunning(boxEl)).toBe(false);
  });
});

/**
 * A live run reported "4 nodes running" and sent `executing` in bursts, so the
 * one-at-a-time model left the mark hopping between nodes while core kept its
 * own green ring on the rest. `progress_state` reports the whole set; this is
 * what the composable does with it.
 */
describe("several nodes running at once", () => {
  it("marks every node in the set", () => {
    const second = createNode({ comfyClass: "FiLSeed" });
    const firstEl = app.addNodeEl(1, ours);
    const secondEl = app.addNodeEl(2, second);

    setRunningNodes(app as never, [1, 2]);

    expect(isRunning(firstEl)).toBe(true);
    expect(isRunning(secondEl)).toBe(true);
    expect(ours.strokeStyles.filRunning).toBeDefined();
    expect(second.strokeStyles.filRunning).toBeDefined();
  });

  it("clears only the nodes that dropped out of the set", () => {
    const second = createNode({ comfyClass: "FiLSeed" });
    const firstEl = app.addNodeEl(1, ours);
    const secondEl = app.addNodeEl(2, second);

    setRunningNodes(app as never, [1, 2]);
    setRunningNodes(app as never, [2]);

    expect(isRunning(firstEl)).toBe(false);
    expect(ours.strokeStyles.running).toBeDefined();
    expect(isRunning(secondEl)).toBe(true);
  });

  it("collapses two ids that resolve to the same subgraph box", () => {
    const box = createNode({ comfyClass: "FiLOpticScanner" });
    app.addNodeEl(30, box);
    const core = box.strokeStyles.running;

    setRunningNodes(app as never, ["30:24", "30:11"]);
    // One mark, so one restore: marking twice would have stored our own ring as
    // "core's" and left it behind for good.
    setRunningNodes(app as never, []);

    expect(box.strokeStyles.running).toBe(core);
    expect(box.strokeStyles.filRunning).toBeUndefined();
  });

  it("gives every node its ring back when the queue drains", () => {
    const second = createNode({ comfyClass: "FiLSeed" });
    app.addNodeEl(1, ours);
    app.addNodeEl(2, second);
    const cores = [ours.strokeStyles.running, second.strokeStyles.running];

    setRunningNodes(app as never, [1, 2]);
    stopNodeRun();

    expect(ours.strokeStyles.running).toBe(cores[0]);
    expect(second.strokeStyles.running).toBe(cores[1]);
    expect(document.querySelectorAll(".fil-node-running").length).toBe(0);
  });

  it("drops the whole set when the mode is switched off mid-run", () => {
    const el = app.addNodeEl(1, ours);
    setRunningNodes(app as never, [1]);
    settings[RUN_FX_MODE] = MODE_OFF;

    setRunningNodes(app as never, [1]);

    expect(isRunning(el)).toBe(false);
    expect(ours.strokeStyles.filRunning).toBeUndefined();
  });
});
