/**
 * The guard that keeps the graph's Ctrl+Z off text being typed in a FiL panel.
 *
 * It answers `ComfyApp.maskeditor_is_opended`, which `changeTracker.ts` calls
 * at the top of its `keydown` listener — truthy means "someone else owns the
 * keyboard, stay out". Two things about that seam drive these tests: the host
 * calls it on *every* keydown, most of which have nothing to do with a FiL
 * panel, and other extensions may want the same slot.
 *
 * The first version released the hook the moment a call found nothing alive,
 * which is to say on the first Ctrl+Z pressed over the canvas. It also cleared
 * every registered token on the way out, so nothing re-armed it: from then on
 * the panels were unguarded and the tests still passed, because they only ever
 * asked what the hook returned, never whether it was still installed.
 */
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { installGraphUndoGuard, installGlobalUndoGuardListener } from "@/nodes2/graphUndoGuard";

interface HostClass {
  maskeditor_is_opended: (() => boolean) | null;
}

let hostClass: HostClass;

function hook(): (() => boolean) | null {
  return hostClass.maskeditor_is_opended;
}

beforeEach(() => {
  hostClass = { maskeditor_is_opended: null };
  // `app.constructor` is how changeTracker reaches the static, so the fake app
  // carries the class as its constructor rather than as a plain property.
  (globalThis as { app?: unknown }).app = { constructor: hostClass };
});

afterEach(() => {
  delete (globalThis as { app?: unknown }).app;
  document.body.innerHTML = "";
});

describe("graphUndoGuard", () => {
  it("blocks while an editor is alive and steps aside when it is not", () => {
    let alive = true;
    const uninstall = installGraphUndoGuard(() => alive);

    expect(hook()?.()).toBe(true);
    alive = false;
    expect(hook()?.()).toBe(false);

    uninstall();
  });

  it("stays installed after a Ctrl+Z that found nothing alive", () => {
    let alive = false;
    const uninstall = installGraphUndoGuard(() => alive);
    const installed = hook();

    // The undo that used to disarm it.
    expect(installed?.()).toBe(false);

    expect(hook()).toBe(installed);
    alive = true;
    expect(hook()?.()).toBe(true);

    uninstall();
  });

  it("holds the hook until the last registration is gone", () => {
    let alive1 = true;
    let alive2 = true;
    const un1 = installGraphUndoGuard(() => alive1);
    const un2 = installGraphUndoGuard(() => alive2);

    expect(hook()?.()).toBe(true);
    alive1 = false;
    expect(hook()?.()).toBe(true);
    alive2 = false;
    expect(hook()?.()).toBe(false);

    un1();
    expect(typeof hook()).toBe("function");
    un2();
    expect(hook()).toBe(null);
  });

  it("ignores a repeated uninstall rather than dropping a live sibling", () => {
    const un1 = installGraphUndoGuard(() => true);
    const un2 = installGraphUndoGuard(() => false);

    un1();
    un1();

    expect(typeof hook()).toBe("function");
    un2();
    expect(hook()).toBe(null);
  });

  it("defers to a hook that was already there, and gives it back", () => {
    let foreignBlocking = false;
    const foreign = () => foreignBlocking;
    hostClass.maskeditor_is_opended = foreign;

    const uninstall = installGraphUndoGuard(() => false);

    expect(hook()?.()).toBe(false);
    foreignBlocking = true;
    expect(hook()?.()).toBe(true);

    uninstall();
    expect(hook()).toBe(foreign);
  });

  it("does not overwrite a hook another extension claimed after ours", () => {
    const uninstall = installGraphUndoGuard(() => false);
    const later = () => true;
    hostClass.maskeditor_is_opended = later;

    uninstall();

    expect(hook()).toBe(later);
  });

  it("treats a throwing isAlive as dead instead of freezing undo", () => {
    const uninstall = installGraphUndoGuard(() => {
      throw new Error("panel is in pieces");
    });

    expect(hook()?.()).toBe(false);

    uninstall();
  });

  it("does nothing when the host has no such slot", () => {
    (globalThis as { app?: unknown }).app = { constructor: {} };
    const uninstall = installGraphUndoGuard(() => true);

    expect(() => uninstall()).not.toThrow();
  });
});

describe("installGlobalUndoGuardListener", () => {
  afterEach(() => {
    // The installer is a singleton for the tab; each test releases it so the
    // next one starts from an empty slot.
    installGlobalUndoGuardListener()();
  });

  it("blocks while a modal backdrop or combo panel is in the document", () => {
    const uninstall = installGlobalUndoGuardListener();

    expect(hook()?.()).toBe(false);

    const backdrop = document.createElement("div");
    backdrop.className = "fil-modal-backdrop";
    document.body.append(backdrop);
    expect(hook()?.()).toBe(true);

    backdrop.remove();
    expect(hook()?.()).toBe(false);

    const panel = document.createElement("div");
    panel.className = "fil-combo-panel";
    document.body.append(panel);
    expect(hook()?.()).toBe(true);

    uninstall();
  });

  it("blocks for a focused field inside a FiL panel and not for one outside", () => {
    const uninstall = installGlobalUndoGuardListener();

    const outside = document.createElement("input");
    document.body.append(outside);
    outside.focus();
    expect(hook()?.()).toBe(false);

    const host = document.createElement("div");
    host.className = "fil-vue-host";
    const inside = document.createElement("textarea");
    host.append(inside);
    document.body.append(host);
    inside.focus();
    expect(hook()?.()).toBe(true);

    inside.blur();
    expect(hook()?.()).toBe(false);

    uninstall();
  });

  it("installs once however many times it is called", () => {
    const first = installGlobalUndoGuardListener();
    const second = installGlobalUndoGuardListener();

    expect(second).toBe(first);

    first();
    expect(hook()).toBe(null);
  });
});
