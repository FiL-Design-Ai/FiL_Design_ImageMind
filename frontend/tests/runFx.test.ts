import { describe, it, expect, beforeEach } from "vitest";
import { startNodeRun, stopNodeRun } from "@/composables/useRunButtonFx";
import { RUN_FX_MODE, MODE_OFF, MODE_ALL } from "@/stores/settings/runFxSettings";

/**
 * The run highlight replaced a 400ms one-shot flash that fired on every node in
 * the graph and had no setting behind it. What matters now: it only marks one
 * node at a time, it stops when the queue moves on, and the mode is read
 * per event so a change takes effect without a reload.
 */

const settings: Record<string, unknown> = {};

function makeApp() {
  const ours = document.createElement("div");
  const foreign = document.createElement("div");
  return {
    canvas: { nodeEls: { 1: ours, 2: foreign } },
    graph: {
      getNodeById: (id: number) =>
        id === 1 ? { comfyClass: "FiLNeuroCleaner" } : { comfyClass: "KSampler" },
    },
    _els: { ours, foreign },
  };
}

const isRunning = (el: HTMLElement) => el.classList.contains("fil-node-running");

beforeEach(() => {
  stopNodeRun();
  for (const k of Object.keys(settings)) delete settings[k];
  (globalThis as unknown as { app: unknown }).app = {
    extensionManager: { setting: { get: (id: string) => settings[id] } },
  };
});

describe("run highlight", () => {
  it("marks our node and clears it when the queue moves on", () => {
    const app = makeApp();
    startNodeRun(app as never, 1);
    expect(isRunning(app._els.ours)).toBe(true);

    stopNodeRun();
    expect(isRunning(app._els.ours)).toBe(false);
  });

  it("never marks two nodes at once", () => {
    const app = makeApp();
    settings[RUN_FX_MODE] = MODE_ALL;
    startNodeRun(app as never, 1);
    startNodeRun(app as never, 2);
    expect(isRunning(app._els.ours)).toBe(false);
    expect(isRunning(app._els.foreign)).toBe(true);
  });

  it("skips foreign nodes on the default scope", () => {
    const app = makeApp();
    startNodeRun(app as never, 2);
    expect(isRunning(app._els.foreign)).toBe(false);
  });

  it("covers foreign nodes once the scope says so", () => {
    const app = makeApp();
    settings[RUN_FX_MODE] = MODE_ALL;
    startNodeRun(app as never, 2);
    expect(isRunning(app._els.foreign)).toBe(true);
  });

  it("does nothing at all when switched off", () => {
    const app = makeApp();
    settings[RUN_FX_MODE] = MODE_OFF;
    startNodeRun(app as never, 1);
    expect(isRunning(app._els.ours)).toBe(false);
  });
});
