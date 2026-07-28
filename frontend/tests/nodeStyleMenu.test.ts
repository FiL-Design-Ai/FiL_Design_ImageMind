import { describe, it, expect, vi } from "vitest";
import { registerStyledNode } from "@/nodes2/nodeStyle";

/**
 * `registerStyledNode` installs an accessor on `getExtraMenuOptions` so our
 * pass over the finished menu runs last no matter which extension registered
 * first. The first cut of that accessor read the current handler when the
 * wrapper *ran* rather than when the property was *read* — so the handler an
 * extension captured as its `original` resolved back to the extension itself,
 * and every context menu died with "Maximum call stack size exceeded"
 * (reproduced live with cg-use-everywhere).
 *
 * These tests replay that patch pattern.
 */

function makeNodeType() {
  const nodeType = function () {} as unknown as { prototype: Record<string, unknown> };
  nodeType.prototype = {} as Record<string, unknown>;
  return nodeType;
}

/** The near-universal ComfyUI extension idiom. */
function patchLikeAnExtension(proto: Record<string, unknown>, label: string) {
  const original = proto.getExtraMenuOptions as ((...a: unknown[]) => unknown) | undefined;
  proto.getExtraMenuOptions = function (this: unknown, ...args: unknown[]) {
    const result = original?.apply(this, args);
    (args[1] as unknown[]).push({ content: label });
    return result;
  };
}

describe("getExtraMenuOptions accessor", () => {
  it("survives an extension that wraps it after us", () => {
    const nodeType = makeNodeType();
    registerStyledNode(nodeType, {});
    patchLikeAnExtension(nodeType.prototype, "Foreign item");

    const options: unknown[] = [];
    const handler = nodeType.prototype.getExtraMenuOptions as (...a: unknown[]) => unknown;
    expect(() => handler.call({ properties: {} }, {}, options)).not.toThrow();
    expect(options.some((o) => (o as { content?: string })?.content === "Foreign item")).toBe(true);
  });

  it("survives several extensions chaining onto it", () => {
    const nodeType = makeNodeType();
    registerStyledNode(nodeType, {});
    patchLikeAnExtension(nodeType.prototype, "First");
    patchLikeAnExtension(nodeType.prototype, "Second");
    patchLikeAnExtension(nodeType.prototype, "Third");

    const options: unknown[] = [];
    const handler = nodeType.prototype.getExtraMenuOptions as (...a: unknown[]) => unknown;
    expect(() => handler.call({ properties: {} }, {}, options)).not.toThrow();
    const contents = options.map((o) => (o as { content?: string })?.content);
    expect(contents).toContain("First");
    expect(contents).toContain("Second");
    expect(contents).toContain("Third");
  });

  it("hands back the same function object while nothing reassigns it", () => {
    const nodeType = makeNodeType();
    registerStyledNode(nodeType, {});
    // Extensions commonly compare or store the handler; a fresh closure per
    // read would defeat their own guards against double-patching.
    expect(nodeType.prototype.getExtraMenuOptions).toBe(nodeType.prototype.getExtraMenuOptions);
  });

  it("repairs a foreign 'Fix node' entry rather than adding one", () => {
    const nodeType = makeNodeType();
    registerStyledNode(nodeType, {});
    const foreignCallback = vi.fn();
    const proto = nodeType.prototype;
    const original = proto.getExtraMenuOptions as ((...a: unknown[]) => unknown) | undefined;
    proto.getExtraMenuOptions = function (this: unknown, ...args: unknown[]) {
      const result = original?.apply(this, args);
      (args[1] as unknown[]).push({ content: "Fix node (recreate)", callback: foreignCallback });
      return result;
    };

    const options: unknown[] = [];
    (proto.getExtraMenuOptions as (...a: unknown[]) => unknown).call({ properties: {} }, {}, options);

    const fix = options.find((o) => (o as { content?: string })?.content === "Fix node (recreate)");
    expect(fix).toBeDefined();
    expect((fix as { callback: unknown }).callback).not.toBe(foreignCallback);
    expect(options.filter((o) => (o as { content?: string })?.content?.startsWith("Fix node"))).toHaveLength(1);
  });
});
