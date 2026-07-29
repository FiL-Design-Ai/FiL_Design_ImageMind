import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { installRunButtonFx } from "@/nodes2/installers/runButtonFx";
import { RUN_FX_SETTINGS } from "@/stores/settings/runFxSettings";
import { ALL_SETTINGS } from "@/stores/settings/allSettings";
import { createApp, createNode, type FakeApp } from "./fakes/comfyHost";

/**
 * The seam between the pack and ComfyUI, tested through the host rather than
 * around it — see `tests/fakes/comfyHost.ts`.
 *
 * Both halves below were live defects with no test on them. `runFx.test.ts`
 * covers `startNodeRun()` directly, which is why the id being wrong on the way
 * in went unnoticed; nothing covered settings registration at all.
 */

const isRunning = (el: HTMLElement) => el.classList.contains("fil-node-running");

let app: FakeApp;

beforeEach(() => {
  app = createApp();
  // The run-FX mode is read off the global `app`, not the one passed in.
  (globalThis as unknown as { app: unknown }).app = app;
  app.registerExtension({ settings: RUN_FX_SETTINGS });
});

afterEach(() => {
  delete (globalThis as unknown as { app?: unknown }).app;
});

describe("the executing event", () => {
  it("pulses the node the canvas knows, not the one the queue names", () => {
    // `node` is the execution id — inside a subgraph a composite like "5:2",
    // which is not on the canvas at all. `display_node` is what `nodeEls` is
    // keyed by, and following the wrong one meant no node ever lit up (3c8c888).
    const node = createNode({ comfyClass: "FiLNeuroCleaner" });
    const el = app.addNodeEl(5, node);
    installRunButtonFx(app as never);

    app.api.emit("executing", { node: "5:2", display_node: 5 });

    expect(isRunning(el)).toBe(true);
  });

  it("still understands the bare id older core sends", () => {
    const node = createNode({ comfyClass: "FiLNeuroCleaner" });
    const el = app.addNodeEl(5, node);
    installRunButtonFx(app as never);

    app.api.emit("executing", 5);

    expect(isRunning(el)).toBe(true);
  });

  it("keeps a composite display_node intact instead of coercing it", () => {
    // `Number("3:1")` is NaN, which finds no node and so skipped our own node
    // in "FiL nodes only" mode.
    const node = createNode({ comfyClass: "FiLNeuroCleaner" });
    const el = app.addNodeEl("3:1", node);
    installRunButtonFx(app as never);

    app.api.emit("executing", { node: "3:1", display_node: "3:1" });

    expect(isRunning(el)).toBe(true);
  });

  it("ends the pulse when the queue drains", () => {
    const node = createNode({ comfyClass: "FiLNeuroCleaner" });
    const el = app.addNodeEl(5, node);
    installRunButtonFx(app as never);

    app.api.emit("executing", { node: "5", display_node: 5 });
    app.api.emit("executing", null);

    expect(isRunning(el)).toBe(false);
  });

  it("ends the pulse on a run that errors out", () => {
    // An errored run never sends the closing `executing: null`, so without this
    // the node pulses until the page is reloaded.
    const node = createNode({ comfyClass: "FiLNeuroCleaner" });
    const el = app.addNodeEl(5, node);
    installRunButtonFx(app as never);

    app.api.emit("executing", { node: "5", display_node: 5 });
    app.api.emit("execution_error", { node_id: 5 });

    expect(isRunning(el)).toBe(false);
  });

  it("leaves another pack's node alone on the default scope", () => {
    const foreign = createNode({ comfyClass: "KSampler" });
    const el = app.addNodeEl(9, foreign);
    installRunButtonFx(app as never);

    app.api.emit("executing", { node: "9", display_node: 9 });

    expect(isRunning(el)).toBe(false);
  });
});

describe("settings registration", () => {
  /**
   * Every id declared in `src/stores/settings/` has to reach `ALL_SETTINGS`.
   *
   * An id ComfyUI was never told about is not a setting: every read of it comes
   * back undefined and the code silently takes its fallback, which is how the
   * connection-toast setting stayed unreachable while its declaration sat right
   * beside the code using it (86b4c0e). Both sides are derived here — a new
   * settings module cannot be added and left out of the aggregate.
   */
  const modules = import.meta.glob<Record<string, unknown>>("../src/stores/settings/*.ts", {
    eager: true,
  });

  const declaredIds = Object.entries(modules).flatMap(([path, module]) =>
    Object.entries(module)
      .filter(([, value]) => typeof value === "string" && value.startsWith("FiL_Design_ImageMind."))
      .map(([name, value]) => ({ path, name, id: value as string })),
  );

  it("finds the ids to check", () => {
    expect(declaredIds.length).toBeGreaterThan(0);
  });

  it.each(declaredIds)("$name is registered with ComfyUI", ({ id, path }) => {
    const registered = ALL_SETTINGS.map((setting) => setting.id);
    expect(registered, `${id} is declared in ${path} but missing from ALL_SETTINGS`).toContain(id);
  });

  it("hands back the registered default, not the caller's guess", () => {
    // `readSetting(id, fallback)` used to pass a fallback into an API that takes
    // the default from the registration — the call logged a deprecation warning
    // and the fallback could disagree with the declaration, as it did.
    const declaration = RUN_FX_SETTINGS[0];
    expect(app.extensionManager.setting.get(declaration.id)).toBe(declaration.defaultValue);
  });

  it("reports a read of an id nobody registered", () => {
    expect(app.extensionManager.setting.get("FiL_Design_ImageMind.NoSuchSetting")).toBeUndefined();
    expect(app.unregisteredSettingReads).toContain("FiL_Design_ImageMind.NoSuchSetting");
  });
});
