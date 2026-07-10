import type { ComfyApp } from "@/types/comfy";
import { flashNodeRun } from "@/composables/useRunButtonFx";

/**
 * Hook into app.canvas.ds.executeNode to flash FiL_Design_ImageMind nodes when they queue.
 * This provides visual feedback similar to the old executeButton click.
 */
export function installRunButtonFx(app: ComfyApp): void {
  const canvas = (app as unknown as { canvas?: { ds?: { executeNode?: unknown } } })?.canvas;
  if (!canvas?.ds) {
    console.warn("[FiL_Design_ImageMind] run button FX: canvas not available, skipping");
    return;
  }

  // Hook into node execution to flash the header
  const originalExecute = (canvas.ds as Record<string, unknown>).executeNode as
    | ((nodeId: unknown) => Promise<unknown>)
    | undefined;

  if (typeof originalExecute === "function") {
    (canvas.ds as Record<string, unknown>).executeNode = async function (
      this: unknown,
      nodeId: unknown,
    ): Promise<unknown> {
      const result = await originalExecute.call(this, nodeId);
      if (typeof nodeId === "string" || typeof nodeId === "number") {
        const appForFlash = { canvas } as unknown as { canvas?: { nodeEls?: Record<string | number, HTMLElement> } };
        flashNodeRun(appForFlash, nodeId);
      }
      return result;
    };
    console.info("[FiL_Design_ImageMind] run button FX installed (execute hook)");
  } else {
    console.warn("[FiL_Design_ImageMind] run button FX: executeNode not found, skipping");
  }
}