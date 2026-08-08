/**
 * Menu-bar wiring: the host's `menuItemStore.loadExtensionMenuCommands`
 * silently drops any `menuCommands` id that is not ALSO declared in the
 * extension's `commands` array, and `commandIdToMenuItem` reads
 * `menubarLabel` verbatim — no fallback to the command-palette `label`.
 * Either failure leaves the menu entry missing or blank without a word,
 * so both invariants are pinned here.
 */
import { describe, it, expect } from "vitest";
import { createFilExtension } from "@/nodes2/filExtension";
import type { ComfyApp } from "@/types/comfy";

function fakeApp(): ComfyApp {
  return { registerExtension() {}, loadGraphData: async () => undefined };
}

describe("createFilExtension — menuCommands wiring", () => {
  it("registers a top-level FiL Design menu group", () => {
    const ext = createFilExtension(fakeApp());
    expect(ext.menuCommands).toHaveLength(1);
    expect(ext.menuCommands?.[0].path).toEqual(["FiL Design"]);
  });

  it("every menu entry is a declared command — the host drops the rest silently", () => {
    const ext = createFilExtension(fakeApp());
    const declared = new Set((ext.commands ?? []).map((c) => c.id));
    const referenced = (ext.menuCommands ?? []).flatMap((mc) => mc.commands);
    expect(referenced.length).toBeGreaterThan(0);
    expect(referenced.filter((id) => !declared.has(id))).toEqual([]);
  });

  it("every menu-bound command carries a menubarLabel — the host renders it verbatim", () => {
    const ext = createFilExtension(fakeApp());
    const byId = new Map((ext.commands ?? []).map((c) => [c.id, c]));
    const referenced = (ext.menuCommands ?? []).flatMap((mc) => mc.commands);
    const blank = referenced.filter((id) => !byId.get(id)?.menubarLabel);
    expect(blank).toEqual([]);
  });
});
