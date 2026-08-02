import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { nextTick, h } from "vue";
import { mount } from "@vue/test-utils";
import FilBrowser from "@/components/widgets/FilBrowser.vue";
import FilBrowserSidebar from "@/components/widgets/FilBrowserSidebar.vue";
import type { BrowserItem, BrowserSidebarSection } from "@/lib/browserTypes";

const items: BrowserItem[] = [
  { id: "a", label: "Alpha", icon: "📷" },
  { id: "b", label: "Beta", icon: "🎨", tags: [{ label: "Free", tone: "ok" }] },
  { id: "c", label: "Gamma" },
];

function mountBrowser(
  props: Record<string, unknown> = {},
  slots: Record<string, () => unknown> = {},
) {
  return mount(FilBrowser, {
    props: { title: "Test", storageKey: "fil_test_browser", items, open: true, ...props },
    slots: slots as never,
    attachTo: document.body,
  });
}

describe("FilBrowser.vue", () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.innerHTML = "";
  });

  // jsdom has no `setPointerCapture` of its own (verified: `typeof
  // el.setPointerCapture` is `"undefined"`) — a couple of tests below define
  // it on the prototype to spy on it. Undoing that after each test keeps
  // jsdom's actual absence of the method intact for every other test in this
  // file and every file after it, since jsdom's global window persists across
  // tests within one file.
  afterEach(() => {
    delete (HTMLElement.prototype as { setPointerCapture?: unknown }).setPointerCapture;
  });

  it("renders one card per item", () => {
    const wrapper = mountBrowser();
    expect(document.querySelectorAll(".fb-card").length).toBe(3);
    wrapper.unmount();
  });

  it("renders nothing at all while closed", () => {
    const wrapper = mountBrowser({ open: false });
    expect(document.querySelector(".fb-win")).toBeNull();
    wrapper.unmount();
  });

  // The window is positioned by the composable, not by flexbox centring — if
  // this ever comes back as `NaNpx` the window lands nowhere and looks missing.
  it("gives the window real pixel geometry", () => {
    const wrapper = mountBrowser();
    const win = document.querySelector<HTMLElement>(".fb-win")!;
    for (const v of [win.style.left, win.style.top, win.style.width, win.style.height]) {
      expect(v).toMatch(/^\d+px$/);
    }
    wrapper.unmount();
  });

  it("selects on click and confirms on double click", async () => {
    const wrapper = mountBrowser();
    const cards = document.querySelectorAll<HTMLElement>(".fb-card");
    cards[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await nextTick();
    expect(wrapper.emitted("update:selected")?.at(-1)).toEqual(["b"]);

    cards[1].dispatchEvent(new MouseEvent("dblclick", { bubbles: true }));
    await nextTick();
    expect(wrapper.emitted("confirm")?.at(-1)).toEqual(["b"]);
    wrapper.unmount();
  });

  // Escape clears the query first. Losing the typed text AND the window to one
  // keystroke is the wrong amount of undo for one key.
  it("clears the search on the first Escape and closes on the second", async () => {
    const wrapper = mountBrowser({ query: "alp" });
    const win = document.querySelector<HTMLElement>(".fb-win")!;
    win.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    await nextTick();
    expect(wrapper.emitted("update:query")?.at(-1)).toEqual([""]);
    expect(wrapper.emitted("update:open")).toBeUndefined();

    await wrapper.setProps({ query: "" });
    win.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    await nextTick();
    expect(wrapper.emitted("update:open")?.at(-1)).toEqual([false]);
    wrapper.unmount();
  });

  // A click on the backdrop leaves focus on document.body, from where the
  // window's own keydown handler never fires. Without the document-level
  // listener the window looked stuck.
  it("still answers Escape when focus has fallen outside the window", async () => {
    const wrapper = mountBrowser();
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    await nextTick();
    expect(wrapper.emitted("update:open")?.at(-1)).toEqual([false]);
    wrapper.unmount();
  });

  // Releasing the mouse outside the window at the end of a drag reaches the
  // backdrop as a plain click. Closing there would throw the dialog away
  // mid-resize.
  it("does not close when the backdrop is clicked", async () => {
    const wrapper = mountBrowser();
    document.querySelector(".fb-backdrop")!.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await nextTick();
    expect(wrapper.emitted("update:open")).toBeUndefined();
    wrapper.unmount();
  });

  // Regression: the close button is a CHILD of the draggable title bar, so a
  // real click begins with a pointerdown that bubbles up to the title before
  // the button's own click ever fires. The title's drag handler used to grab
  // pointer capture on every pointerdown regardless of target — which starts
  // a (tiny, immediately-abandoned) drag on the WINDOW and eats the button's
  // click before it happens. The button visibly highlighted on press and did
  // nothing.
  //
  // This can't be shown with a plain click(): jsdom has no `setPointerCapture`
  // at all (confirmed — `typeof el.setPointerCapture === "undefined"`), so
  // `startPointerDrag`'s attempt to call it always lands in its own
  // `catch {}` and has no observable side effect on a manually-dispatched
  // click either way. Spying on the method (defined here only because jsdom
  // doesn't have it) is the one way to see whether the drag was actually
  // attempted for a given pointerdown target — which is exactly the
  // real-browser mechanism this bug depended on.
  it("does not start a drag when the pointerdown lands on the close button", () => {
    const capture = vi.fn();
    HTMLElement.prototype.setPointerCapture = capture;
    const wrapper = mountBrowser();
    const closeBtn = document.querySelector<HTMLElement>(".fb-titlebtn")!;
    closeBtn.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, button: 0, pointerId: 1 }));
    expect(capture).not.toHaveBeenCalled();
    wrapper.unmount();
  });

  it("clicking the close button closes the window", async () => {
    const wrapper = mountBrowser();
    document.querySelector<HTMLElement>(".fb-titlebtn")!.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await nextTick();
    expect(wrapper.emitted("update:open")?.at(-1)).toEqual([false]);
    expect(wrapper.emitted("close")?.length).toBe(1);
    wrapper.unmount();
  });

  // The other half of the same fix: a drag from anywhere ELSE on the title
  // bar must still start — the guard checks the pointerdown's target, not
  // "suppress dragging near the button" or "suppress dragging altogether".
  it("still attempts a drag from the plain title bar, away from the close button", () => {
    const capture = vi.fn();
    HTMLElement.prototype.setPointerCapture = capture;
    const wrapper = mountBrowser();
    const title = document.querySelector<HTMLElement>(".fb-title")!;
    title.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, button: 0, pointerId: 1, clientX: 50, clientY: 20 }));
    expect(capture).toHaveBeenCalledWith(1);
    wrapper.unmount();
  });

  it("walks the list with the arrow keys and chooses with Enter", async () => {
    const wrapper = mountBrowser({ selected: "" });
    const win = document.querySelector<HTMLElement>(".fb-win")!;
    win.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }));
    await nextTick();
    expect(wrapper.emitted("update:selected")?.at(-1)).toEqual(["a"]);

    await wrapper.setProps({ selected: "a" });
    win.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }));
    await nextTick();
    expect(wrapper.emitted("update:selected")?.at(-1)).toEqual(["b"]);

    await wrapper.setProps({ selected: "b" });
    win.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
    await nextTick();
    expect(wrapper.emitted("confirm")?.at(-1)).toEqual(["b"]);
    wrapper.unmount();
  });

  // Clamped rather than wrapped: arriving at the last card because Up was
  // pressed once too often is disorienting. Nothing is emitted at all, because
  // the selection genuinely does not change.
  it("stops at the ends instead of wrapping around", async () => {
    const wrapper = mountBrowser({ selected: "a" });
    const win = document.querySelector<HTMLElement>(".fb-win")!;
    win.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true }));
    await nextTick();
    expect(wrapper.emitted("update:selected")).toBeUndefined();

    await wrapper.setProps({ selected: "c" });
    win.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }));
    await nextTick();
    expect(wrapper.emitted("update:selected")).toBeUndefined();
    wrapper.unmount();
  });

  // Left/Right belong to the caret while there is text to move through, or a
  // typed query could not be edited without the mouse.
  it("leaves the horizontal arrows to the caret mid-query", async () => {
    const wrapper = mountBrowser({ query: "alpha", selected: "b" });
    const input = document.querySelector<HTMLInputElement>(".fb-search-input")!;
    input.value = "alpha";
    input.setSelectionRange(2, 2);
    input.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft", bubbles: true }));
    await nextTick();
    expect(wrapper.emitted("update:selected")).toBeUndefined();

    // At the very start of the text the caret has nowhere left to go, so the
    // key becomes navigation.
    input.setSelectionRange(0, 0);
    input.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft", bubbles: true }));
    await nextTick();
    expect(wrapper.emitted("update:selected")?.at(-1)).toEqual(["a"]);
    wrapper.unmount();
  });

  it("shows the empty text rather than an empty box", () => {
    const wrapper = mountBrowser({ items: [], emptyText: "Nothing here" });
    expect(document.querySelector(".fb-empty")?.textContent).toContain("Nothing here");
    wrapper.unmount();
  });

  it("stars an item without selecting it", async () => {
    const wrapper = mountBrowser({ starrable: true, isStarred: (id: string) => id === "a" });
    const stars = document.querySelectorAll<HTMLElement>(".fb-star");
    expect(stars.length).toBe(3);
    expect(stars[0].textContent).toBe("★");
    expect(stars[1].textContent).toBe("☆");
    stars[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await nextTick();
    expect(wrapper.emitted("star")?.at(-1)).toEqual(["b"]);
    expect(wrapper.emitted("update:selected")).toBeUndefined();
    wrapper.unmount();
  });

  it("hides the detail column when no detail slot is given", () => {
    const wrapper = mountBrowser();
    expect(document.querySelector(".fb-detail")).toBeNull();
    wrapper.unmount();
  });

  it("shows the detail column when the slot is filled", () => {
    const wrapper = mountBrowser({ prefWidth: 1200, minWidth: 1200 }, {
      detail: () => h("div", { class: "my-detail" }, "details"),
    });
    expect(document.querySelector(".my-detail")).not.toBeNull();
    wrapper.unmount();
  });
});

describe("FilBrowserSidebar.vue", () => {
  const sections: BrowserSidebarSection[] = [
    { id: "top", rows: [{ id: "all", label: "All", count: 42 }, { id: "fav", label: "Favourites", count: 0 }] },
    { id: "kinds", heading: "Kind", rows: [{ id: "photo", label: "Photo", count: 12, indent: 1 }] },
  ];

  it("renders a row per entry with its count, and marks the active one", () => {
    const wrapper = mount(FilBrowserSidebar, { props: { sections, active: "fav" } });
    const rows = wrapper.findAll(".fb-row");
    expect(rows.length).toBe(3);
    expect(rows[0].text()).toContain("42");
    expect(rows[1].classes()).toContain("on");
    expect(rows[0].classes()).not.toContain("on");
  });

  // `count: 0` is a real answer ("no favourites yet") and has to show; only a
  // missing count hides the badge.
  it("shows a zero count but not an absent one", () => {
    const withNoCount: BrowserSidebarSection[] = [{ id: "t", rows: [{ id: "x", label: "X" }] }];
    expect(mount(FilBrowserSidebar, { props: { sections, active: "" } }).findAll(".fb-row-count").length).toBe(3);
    expect(mount(FilBrowserSidebar, { props: { sections: withNoCount, active: "" } }).findAll(".fb-row-count").length).toBe(0);
  });

  it("renders group headings", () => {
    const wrapper = mount(FilBrowserSidebar, { props: { sections, active: "" } });
    expect(wrapper.findAll(".fb-grouphead").map((h) => h.text())).toEqual(["Kind"]);
  });

  it("reports which row was clicked", async () => {
    const wrapper = mount(FilBrowserSidebar, { props: { sections, active: "all" } });
    await wrapper.findAll(".fb-row")[2].trigger("click");
    expect(wrapper.emitted("select")?.at(-1)).toEqual(["photo"]);
  });
});
