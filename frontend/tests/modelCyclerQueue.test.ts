/**
 * The Model Cycler must leave the host's Queue button alone.
 *
 * The first draft of `model_cycler.ts` wrapped `app.queuePrompt` on node
 * creation, so that a cycler sitting on the canvas silently raised the batch
 * count to the length of its model list. Pressing Queue for one run produced
 * one run per model, for every workflow and every other pack in the tab, and
 * the wrapper was never removed once installed. Cycling the whole list is a
 * deliberate act — the panel's own `Run All` button — not something the Queue
 * button starts doing behind the user's back.
 *
 * `queuePrompt` is checked by identity rather than by behaviour: a wrapper
 * that happens to forward the same arguments today is still the same global
 * patch on the host, and the next list length is what makes it visible.
 */
import { describe, it, expect, vi } from "vitest";
import { modelCyclerNode } from "@/nodes2/nodes/model_cycler";
import { createApp, createNode } from "./fakes/comfyHost";

// A real Vue panel is not what is under test, and the async component would
// pull its whole subtree in — the same shortcut `nodeStateMirror.test.ts` takes.
vi.mock("@/nodes2/domWidgetHost", () => ({
  addFilDomWidget: () => ({ name: "fil_cycler_view", value: {} }),
  unmountAllFilWidgets: () => {},
}));

interface Registrable {
  prototype: { onNodeCreated?: (...a: unknown[]) => unknown };
}

/**
 * Drives the module's real `onNodeCreated` — the hook the old wrapper was
 * installed from. The `_filCyclerState` assertion is the proof that this
 * actually ran: without it a broken registration would leave every
 * `queuePrompt` check passing for the wrong reason.
 */
function registerAndCreate(): void {
  const nodeType = { prototype: {} } as Registrable;
  modelCyclerNode.register(nodeType, { name: "FiLModelCycler" } as never);
  const node = createNode({ comfyClass: "FiLModelCycler", id: 1 });
  nodeType.prototype.onNodeCreated?.call(node);
  expect((node as unknown as { _filCyclerState?: unknown })._filCyclerState).toBeTruthy();
}

describe("FiLModelCycler and the host queue", () => {
  it("does not replace app.queuePrompt when a node is registered and created", () => {
    const app = createApp();
    (globalThis as { app?: unknown }).app = app;
    const original = app.queuePrompt;

    registerAndCreate();

    expect(app.queuePrompt).toBe(original);

    delete (globalThis as { app?: unknown }).app;
  });

  it("leaves a queuePrompt another extension already wrapped untouched", () => {
    const app = createApp();
    const foreign = vi.fn(async () => ({ output: [] }));
    (app as unknown as { queuePrompt: unknown }).queuePrompt = foreign;
    (globalThis as { app?: unknown }).app = app;

    registerAndCreate();

    expect(app.queuePrompt).toBe(foreign);
    expect(foreign).not.toHaveBeenCalled();

    delete (globalThis as { app?: unknown }).app;
  });
});
