/**
 * Wiring only: `createFilExtension`'s `beforeConfigureGraph`/`afterConfigureGraph`
 * must reach the same guard `channel.ts` checks (`nodes2/wireless/graphLoadGuard.ts`)
 * — the rest of `createFilExtension` (settings, `setup()`, node registration) is
 * exercised elsewhere or not at all; this is narrowly about the one connection
 * a live workflow-switch bug depended on.
 */
import { describe, it, expect, afterEach } from "vitest";
import { createFilExtension } from "@/nodes2/filExtension";
import { graphBeingConfigured, endGraphConfigure } from "@/nodes2/wireless";
import type { ComfyApp } from "@/types/comfy";

function fakeApp(): ComfyApp {
  return { registerExtension() {}, loadGraphData: async () => undefined };
}

describe("createFilExtension — graph load bracket", () => {
  afterEach(() => {
    endGraphConfigure(); // clamps at zero — cleans up if a test below left it open
  });

  it("is false before any load starts", () => {
    expect(graphBeingConfigured()).toBe(false);
  });

  it("beforeConfigureGraph / afterConfigureGraph bracket a load", async () => {
    const ext = createFilExtension(fakeApp());

    await ext.beforeConfigureGraph?.();
    expect(graphBeingConfigured()).toBe(true);

    await ext.afterConfigureGraph?.();
    expect(graphBeingConfigured()).toBe(false);
  });

  it("two extension instances share the same guard — one workflow, one app", async () => {
    // `createFilExtension` is called once per running app, but the guard it
    // reaches into is a module-level counter, not per-instance state — this
    // pins that a second instance (as would exist only in a test, never live)
    // still observes the first one's in-progress load rather than each
    // getting its own, silently wrong, count.
    const a = createFilExtension(fakeApp());
    const b = createFilExtension(fakeApp());

    await a.beforeConfigureGraph?.();
    expect(graphBeingConfigured()).toBe(true);
    await b.afterConfigureGraph?.();
    expect(graphBeingConfigured()).toBe(false);
  });
});
