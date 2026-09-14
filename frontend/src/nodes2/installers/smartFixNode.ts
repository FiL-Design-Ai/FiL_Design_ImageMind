import type { ComfyApp, LGraphNode } from "@/types/comfy";
import { patchRecreateMenuItem } from "@/nodes2/recreateNode";

/**
 * Installs a global context-menu interceptor on LGraphCanvas.prototype.getNodeMenuOptions.
 *
 * Intercepts ComfyUI-Manager's "Fix node (recreate)" on ANY node on the canvas,
 * redirecting it to our safe `recreateNode` algorithm whenever enabled in settings.
 */
export function installSmartFixNode(app?: ComfyApp): void {
  const globalObj = globalThis as unknown as {
    LGraphCanvas?: { prototype: { getNodeMenuOptions?: (...args: unknown[]) => unknown[] } };
    LiteGraph?: { LGraphCanvas?: { prototype: { getNodeMenuOptions?: (...args: unknown[]) => unknown[] } } };
  };

  const proto = (
    globalObj.LGraphCanvas?.prototype ??
    globalObj.LiteGraph?.LGraphCanvas?.prototype ??
    (app?.canvas ? (Object.getPrototypeOf(app.canvas) as object) : undefined)
  ) as
    | {
        getNodeMenuOptions?: (target: LGraphNode, ...args: unknown[]) => unknown[];
        _filSmartFixInstalled?: boolean;
      }
    | undefined;

  if (!proto || proto._filSmartFixInstalled) return;
  proto._filSmartFixInstalled = true;

  const originalGetNodeMenuOptions = proto.getNodeMenuOptions;
  proto.getNodeMenuOptions = function (target: LGraphNode, ...args: unknown[]) {
    const options = originalGetNodeMenuOptions
      ? (originalGetNodeMenuOptions.apply(this, [target, ...args]) as unknown[])
      : [];

    if (target && Array.isArray(options)) {
      patchRecreateMenuItem(target as Parameters<typeof patchRecreateMenuItem>[0], options);
    }
    return options as unknown[];
  };

  console.info("[FiL_Design_ImageMind] smart fix node global menu interceptor installed");
}
