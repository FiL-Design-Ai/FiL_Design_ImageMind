import { expect, type Page } from "@playwright/test";

/**
 * What a running ComfyUI puts on `window`, and the two things every smoke test
 * does with it.
 *
 * One declaration, shared. TypeScript merges `declare global` across files by
 * *intersecting* nothing and demanding the shapes match exactly, so a second
 * spec describing `window.app` even slightly differently fails the build
 * (TS2717) — which is how this file came to exist. The same reason the frontend
 * suite has one `tests/fakes/comfyHost.ts` instead of a stand-in per test file:
 * a host described twice is described wrong at least once.
 *
 * Only the members the suite actually drives are listed. This is not a model of
 * ComfyUI's API, it is the surface we depend on — keep it that way.
 */
declare global {
  interface Window {
    app: {
      graph: { _nodes: unknown[]; add(node: unknown): void; serialize?(): unknown };
      canvas?: {
        canvas?: HTMLCanvasElement;
        ds?: { scale: number; offset?: [number, number] };
        centerOnNode?(node: unknown): void;
        setDirty?(a: boolean, b: boolean): void;
        getNodeMenuOptions?(node: unknown): unknown[];
      };
      loadGraphData?(data: unknown): Promise<void>;
      extensionManager: {
        command: { execute(id: string): Promise<void> };
        workflow: {
          activeWorkflow?: { path?: string };
          openWorkflows?: Array<{ path?: string }>;
          closeWorkflow(workflow: unknown, options?: { warnIfUnsaved?: boolean }): Promise<void>;
        };
      };
    };
    LiteGraph: {
      /** Filled from the backend's `object_info`; always present once the app boots. */
      registered_node_types: Record<string, unknown>;
      createNode(type: string): unknown;
    };
  }
}

/**
 * A blank scratch workflow to work in.
 *
 * Never the one the user has open: adding a node to a draft workflow overwrites
 * it in localStorage and `graph.remove()` does not bring it back, which is a
 * lesson this project paid for once already.
 */
export async function openBlankWorkflow(page: Page): Promise<void> {
  await page.waitForFunction(() => Boolean(window.app?.graph), null, { timeout: 150_000 });
  await page.evaluate(async () => {
    await window.app.extensionManager.command.execute("Comfy.NewBlankWorkflow");
  });
  await expect.poll(() => page.evaluate(() => window.app.graph._nodes.length)).toBe(0);
}

/** Close the scratch workflow again, unsaved changes and all. */
export async function closeScratchWorkflow(page: Page): Promise<void> {
  await page.evaluate(async () => {
    const workflows = window.app.extensionManager.workflow;
    if (workflows.activeWorkflow) {
      await workflows.closeWorkflow(workflows.activeWorkflow, { warnIfUnsaved: false });
    }
  });
}
