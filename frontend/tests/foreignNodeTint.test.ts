import { describe, it, expect, beforeEach, vi } from "vitest";
import { tintForeignNode } from "@/nodes2/foreignNodeTint";
import { THEME_SCOPE, SCOPE_OURS, SCOPE_CONNECTED, SCOPE_ALL } from "@/stores/settings/appearanceSettings";

/**
 * Tinting someone else's node is the one thing in this pack that can write into
 * a file the user keeps. `node.color`/`node.bgcolor` are serialised into the
 * workflow — our own nodes carry both in `example_workflows/*.json` — so a foreign
 * node painted that way would hand our colour to whoever the workflow is shared
 * with, keep it after this pack is uninstalled, and fight packs that colour
 * their own nodes. These tests hold the line: the title bar is drawn, and
 * nothing is assigned.
 */

const settings: Record<string, unknown> = {};

function makeNodeType(existing?: (...a: unknown[]) => unknown) {
  const nodeType = function () {} as unknown as { prototype: Record<string, unknown> };
  nodeType.prototype = (existing ? { onDrawTitleBar: existing } : {}) as Record<string, unknown>;
  return nodeType;
}

/** Just enough 2D context to record what was painted. */
function makeCtx() {
  const calls: Array<{ op: string; args: unknown[] }> = [];
  const ctx = {
    calls,
    fillStyle: "",
    save: () => calls.push({ op: "save", args: [] }),
    restore: () => calls.push({ op: "restore", args: [] }),
    fillRect: (...args: unknown[]) => calls.push({ op: "fillRect", args }),
  };
  return ctx as unknown as CanvasRenderingContext2D & { calls: typeof calls };
}

function draw(proto: Record<string, unknown>, node: Record<string, unknown> = {}) {
  const ctx = makeCtx();
  (proto.onDrawTitleBar as (...a: unknown[]) => unknown).apply(node, [ctx, 30, [200, 100], 1, "#abc"]);
  return ctx as ReturnType<typeof makeCtx>;
}

beforeEach(() => {
  for (const k of Object.keys(settings)) delete settings[k];
  (globalThis as unknown as { app: unknown }).app = {
    extensionManager: { setting: { get: (id: string) => settings[id] } },
  };
});

describe("foreign node tint", () => {
  it("paints nothing when the scope is our nodes only", () => {
    settings[THEME_SCOPE] = SCOPE_OURS;
    const t = makeNodeType();
    tintForeignNode(t);
    expect(draw(t.prototype).calls).toHaveLength(0);
  });

  it("paints a title-bar stripe when the scope is every node", () => {
    settings[THEME_SCOPE] = SCOPE_ALL;
    const t = makeNodeType();
    tintForeignNode(t);
    const ops = draw(t.prototype).calls.map((c) => c.op);
    expect(ops).toContain("fillRect");
  });

  it("never assigns color or bgcolor — those are saved into the workflow", () => {
    settings[THEME_SCOPE] = SCOPE_ALL;
    const t = makeNodeType();
    tintForeignNode(t);
    const node: Record<string, unknown> = { id: 7, type: "KSampler" };
    draw(t.prototype, node);
    expect(node.color).toBeUndefined();
    expect(node.bgcolor).toBeUndefined();
    expect(t.prototype.color).toBeUndefined();
    expect(t.prototype.bgcolor).toBeUndefined();
  });

  it("still runs the owning pack's own title-bar drawing, and runs it last", () => {
    settings[THEME_SCOPE] = SCOPE_ALL;
    const order: string[] = [];
    const theirs = vi.fn(function (this: unknown, ctx: unknown) {
      order.push("theirs");
      void ctx;
    });
    const t = makeNodeType(theirs);
    tintForeignNode(t);
    const ctx = makeCtx();
    (t.prototype.onDrawTitleBar as (...a: unknown[]) => unknown).apply({ id: 1 }, [ctx, 30, [200, 100], 1, "#abc"]);
    expect(theirs).toHaveBeenCalledTimes(1);
    // Ours painted before handing over, so their drawing lands on top.
    expect(ctx.calls.some((c) => c.op === "fillRect")).toBe(true);
    expect(order).toEqual(["theirs"]);
  });

  it("only tints nodes wired to ours when the scope is the connected one", () => {
    settings[THEME_SCOPE] = SCOPE_CONNECTED;
    // FiL node #1 takes its input from foreign #2; foreign #3 stands apart.
    (globalThis as unknown as { app: Record<string, unknown> }).app = {
      extensionManager: { setting: { get: (id: string) => settings[id] } },
      graph: {
        _nodes: [
          { id: 1, comfyClass: "FiLOpticScanner", inputs: [{ link: 10 }], outputs: [] },
          { id: 2, comfyClass: "LoadImage", inputs: [], outputs: [{ links: [10] }] },
          { id: 3, comfyClass: "SaveImage", inputs: [], outputs: [] },
        ],
        links: { 10: { origin_id: 2, target_id: 1 } },
      },
    };
    const t = makeNodeType();
    tintForeignNode(t);
    expect(draw(t.prototype, { id: 2, type: "LoadImage" }).calls.some((c) => c.op === "fillRect")).toBe(true);
    expect(draw(t.prototype, { id: 3, type: "SaveImage" }).calls).toHaveLength(0);
  });

  it("wraps a node type only once even if registration repeats", () => {
    settings[THEME_SCOPE] = SCOPE_ALL;
    const t = makeNodeType();
    tintForeignNode(t);
    tintForeignNode(t);
    const stripes = draw(t.prototype, { id: 1 }).calls.filter((c) => c.op === "fillRect");
    expect(stripes).toHaveLength(1);
  });
});
