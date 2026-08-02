import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { nextTick } from "vue";
import { mount, type VueWrapper } from "@vue/test-utils";
import StyleBrowserVue from "@/components/nodes/StyleBrowser.vue";
import { _resetRecents } from "@/stores/browserRecents";

/**
 * `FilBrowser` teleports to `document.body`, so every query goes through the
 * document and every test unmounts when it is done.
 *
 * The style keys here follow the real shape from `common/styles/*.py`:
 * `"📷 CATEGORY/📷 Name"`, category and name each carrying their own emoji.
 */
const PHOTO = [
  "None",
  "📷 CAMERAS/📷 Disposable 90s",
  "📷 CAMERAS/📸 Polaroid 600",
  "🎬 CINEMA/🌑 Film Noir",
];
const ART = ["None", "🖌 PAINTING/🎨 Oil On Canvas", "🖌 PAINTING/✏️ Charcoal Sketch"];

function sources(photoValue = "None", artValue = "None") {
  return [
    { id: "photo_style", label: "Photo", icon: "📷", options: PHOTO, value: photoValue },
    { id: "art_style", label: "Art", icon: "🎨", options: ART, value: artValue },
  ];
}

let wrapper: VueWrapper | null = null;

function open(photoValue = "None", artValue = "None") {
  wrapper = mount(StyleBrowserVue, {
    props: { open: true, sources: sources(photoValue, artValue) },
    attachTo: document.body,
  });
  return wrapper;
}

function cards(): HTMLElement[] {
  return Array.from(document.querySelectorAll<HTMLElement>(".fb-card"));
}

function card(text: string): HTMLElement {
  const found = cards().find((c) => c.textContent?.includes(text));
  if (!found) throw new Error(`no style card for "${text}"`);
  return found;
}

function sidebarRow(text: string): HTMLElement {
  const rows = Array.from(document.querySelectorAll<HTMLElement>(".fb-row"));
  const row = rows.find((r) => r.textContent?.includes(text));
  if (!row) throw new Error(`no sidebar row for "${text}"`);
  return row;
}

function type(query: string) {
  const input = document.querySelector<HTMLInputElement>(".fb-search-input")!;
  input.value = query;
  input.dispatchEvent(new Event("input"));
}

const click = (el: Element) => el.dispatchEvent(new MouseEvent("click", { bubbles: true }));

beforeEach(() => {
  localStorage.clear();
  _resetRecents();
});
afterEach(() => {
  wrapper?.unmount();
  wrapper = null;
  document.body.innerHTML = "";
});

describe("StyleBrowser", () => {
  // The whole point of the rewrite: four tabs became one list.
  it("shows every list at once, without the emoji or the category prefix", () => {
    open();
    expect(cards().length).toBe(5);
    expect(card("Disposable 90s")).toBeTruthy();
    expect(card("Oil On Canvas")).toBeTruthy();
    // The category is the quiet second line, and the leading emoji is stripped
    // from both — it goes in the icon.
    expect(card("Film Noir").textContent).toContain("CINEMA");
  });

  // The bug this replaces: the search box only ever searched the open tab, so
  // finding a style meant guessing which of the four it lived in first.
  it("finds a style that lives in a different list from the one being viewed", async () => {
    open();
    type("charcoal");
    await nextTick();
    expect(cards().length).toBe(1);
    expect(card("Charcoal Sketch")).toBeTruthy();
  });

  it("searches by category as well as by name", async () => {
    open();
    type("cinema");
    await nextTick();
    expect(cards().length).toBe(1);
    expect(card("Film Noir")).toBeTruthy();
  });

  it("adds a style on a single click, writing back to that style's own widget", async () => {
    open();
    click(card("Film Noir"));
    await nextTick();
    expect(wrapper!.emitted("update:source")?.at(-1)).toEqual([
      { id: "photo_style", value: "🎬 CINEMA/🌑 Film Noir" },
    ]);
  });

  // Values are stored exactly as before — `"a | b"` on one widget — so the
  // backend and every saved workflow are untouched.
  it("appends to what is already chosen on the same widget", async () => {
    open("📷 CAMERAS/📷 Disposable 90s");
    click(card("Film Noir"));
    await nextTick();
    expect(wrapper!.emitted("update:source")?.at(-1)).toEqual([
      { id: "photo_style", value: "📷 CAMERAS/📷 Disposable 90s | 🎬 CINEMA/🌑 Film Noir" },
    ]);
  });

  it("removes a chosen style, falling back to None when it was the last one", async () => {
    open("🎬 CINEMA/🌑 Film Noir");
    click(card("Film Noir"));
    await nextTick();
    expect(wrapper!.emitted("update:source")?.at(-1)).toEqual([{ id: "photo_style", value: "None" }]);
  });

  it("marks a chosen card as checked", () => {
    open("🎬 CINEMA/🌑 Film Noir");
    expect(card("Film Noir").classList.contains("checked")).toBe(true);
    expect(card("Polaroid 600").classList.contains("checked")).toBe(false);
  });

  it("narrows to one list from the left column", async () => {
    open();
    click(sidebarRow("Art"));
    await nextTick();
    expect(cards().length).toBe(2);
    expect(card("Oil On Canvas")).toBeTruthy();
    expect(() => card("Film Noir")).toThrow();
  });

  // The categories offered follow the list in force, or picking one that
  // belongs to another list would filter the result down to nothing.
  it("offers only the categories of the list in force", async () => {
    open();
    click(sidebarRow("Art"));
    await nextTick();
    const rows = Array.from(document.querySelectorAll(".fb-row")).map((r) => r.textContent ?? "");
    expect(rows.some((r) => r.includes("PAINTING"))).toBe(true);
    expect(rows.some((r) => r.includes("CINEMA"))).toBe(false);
  });

  it("filters by category", async () => {
    open();
    click(sidebarRow("CAMERAS"));
    await nextTick();
    expect(cards().length).toBe(2);
    expect(card("Disposable 90s")).toBeTruthy();
  });

  // "Selected" spans all four lists, which is the one view the tabbed dialog
  // could never show.
  it("shows everything chosen across lists under Selected", async () => {
    open("🎬 CINEMA/🌑 Film Noir", "🖌 PAINTING/🎨 Oil On Canvas");
    click(sidebarRow("Selected"));
    await nextTick();
    expect(cards().length).toBe(2);
    expect(card("Film Noir")).toBeTruthy();
    expect(card("Oil On Canvas")).toBeTruthy();
  });

  it("lists the chosen styles as chips in the detail pane, whichever list they came from", () => {
    open("🎬 CINEMA/🌑 Film Noir", "🖌 PAINTING/🎨 Oil On Canvas");
    const chips = Array.from(document.querySelectorAll(".sb-chip-text")).map((c) => c.textContent);
    expect(chips).toEqual(["Film Noir", "Oil On Canvas"]);
  });

  it("removes a style from its chip", async () => {
    open("🎬 CINEMA/🌑 Film Noir");
    click(document.querySelector(".sb-chip-x")!);
    await nextTick();
    expect(wrapper!.emitted("update:source")?.at(-1)).toEqual([{ id: "photo_style", value: "None" }]);
  });

  it("describes the card the cursor is on in the detail pane", async () => {
    open();
    click(card("Oil On Canvas"));
    await nextTick();
    expect(document.querySelector(".sb-det-name")?.textContent).toBe("Oil On Canvas");
    expect(document.querySelector(".sb-det-path")?.textContent).toContain("Art");
  });

  it("asks the scanner to clear every list at once", async () => {
    open("🎬 CINEMA/🌑 Film Noir");
    const clear = Array.from(document.querySelectorAll<HTMLButtonElement>(".fb-foot button")).find((b) =>
      b.textContent?.includes("Clear all"),
    )!;
    click(clear);
    await nextTick();
    expect(wrapper!.emitted("clear-all")?.length).toBe(1);
  });

  // Only an ADD is worth remembering — recording removals would fill the
  // recents with the styles somebody just decided against.
  it("remembers an added style as recent, but not a removed one", async () => {
    open();
    click(card("Film Noir"));
    await nextTick();
    expect(sidebarRow("Recently used").querySelector(".fb-row-count")?.textContent).toBe("1");

    // Now with it chosen, clicking again removes it and must not add a second
    // recent entry.
    await wrapper!.setProps({ sources: sources("🎬 CINEMA/🌑 Film Noir") });
    click(card("Film Noir"));
    await nextTick();
    expect(sidebarRow("Recently used").querySelector(".fb-row-count")?.textContent).toBe("1");
  });
});
