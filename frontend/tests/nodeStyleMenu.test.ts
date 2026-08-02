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

  /**
   * cg-use-everywhere's actual pattern (js/use_everywhere_settings.js,
   * `add_extra_menu_items`): read `node.getExtraMenuOptions` once, wrap it,
   * and assign the wrapper back onto the *node instance* — not the
   * prototype. It relies on that assignment shadowing per-instance, the way
   * it would for any plain prototype method. Reproduces the live bug: every
   * node of a styled type used to leak one extra layer of its menu wrapper
   * into every other node of that same type.
   */
  function patchLikeAnInstanceExtension(node: Record<string, unknown>, label: string) {
    if (node.__patched) return;
    const original = node.getExtraMenuOptions as ((...a: unknown[]) => unknown) | undefined;
    node.getExtraMenuOptions = function (this: unknown, ...args: unknown[]) {
      original?.apply(this, args);
      (args[1] as unknown[]).push({ content: label });
    };
    node.__patched = true;
  }

  it("does not leak an instance-level patch (cg-use-everywhere pattern) across sibling nodes", () => {
    const nodeType = makeNodeType();
    registerStyledNode(nodeType, {});

    const nodeA = Object.create(nodeType.prototype) as Record<string, unknown>;
    nodeA.properties = {};
    patchLikeAnInstanceExtension(nodeA, "UE block");

    const nodeB = Object.create(nodeType.prototype) as Record<string, unknown>;
    nodeB.properties = {};
    patchLikeAnInstanceExtension(nodeB, "UE block");

    const nodeC = Object.create(nodeType.prototype) as Record<string, unknown>;
    nodeC.properties = {};
    patchLikeAnInstanceExtension(nodeC, "UE block");

    const options: unknown[] = [];
    (nodeC.getExtraMenuOptions as (...a: unknown[]) => unknown).call(nodeC, {}, options);

    const ueItems = options.filter((o) => (o as { content?: string })?.content === "UE block");
    expect(ueItems).toHaveLength(1);
  });
});
