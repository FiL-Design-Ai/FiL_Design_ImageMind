import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { nextTick } from "vue";
import { mount, type VueWrapper } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import ProviderModelPickerVue from "@/components/nodes/ProviderModelPicker.vue";
import { useProviderStore } from "@/stores/providerStore";
import { _resetFavourites } from "@/stores/modelFavourites";
import { _resetRecents } from "@/stores/browserRecents";

/**
 * `FilBrowser` teleports to `document.body`, so a plain `wrapper.find` never
 * sees any of this — every query goes through the document, and every test
 * unmounts so the teleported nodes do not leak into the next one.
 */
function modelCard(name: string): HTMLElement {
  const cards = Array.from(document.querySelectorAll<HTMLElement>(".fb-card"));
  const card = cards.find((c) => c.textContent?.includes(name));
  if (!card) throw new Error(`no model card for "${name}"`);
  return card;
}

function starFor(name: string): HTMLElement {
  const star = modelCard(name).closest(".fb-item")?.querySelector<HTMLElement>(".fb-star");
  if (!star) throw new Error(`no favourite button for "${name}"`);
  return star;
}

/** A left-column row, by the text on it. */
function sidebarRow(text: string): HTMLElement {
  const rows = Array.from(document.querySelectorAll<HTMLElement>(".fb-row"));
  const row = rows.find((r) => r.textContent?.includes(text));
  if (!row) throw new Error(`no sidebar row for "${text}"`);
  return row;
}

function footerButton(text: string): HTMLButtonElement {
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>(".fb-foot button"));
  const btn = buttons.find((b) => b.textContent?.includes(text));
  if (!btn) throw new Error(`no footer button for "${text}"`);
  return btn;
}

function cardCount(): number {
  return document.querySelectorAll(".fb-card").length;
}

function seedModels(
  store: ReturnType<typeof useProviderStore>,
  provider: string,
  list: string[],
  visionModels: string[] = [],
) {
  store.modelsByProvider = {
    ...store.modelsByProvider,
    [provider]: { list, visionModels, cachedAt: Date.now(), loading: false },
  };
}

let wrapper: VueWrapper | null = null;

async function openWith(provider: string, list: string[], visionModels: string[] = []) {
  wrapper = mount(ProviderModelPickerVue, { props: { open: false, provider, model: "" } });
  seedModels(useProviderStore(), provider, list, visionModels);
  await wrapper.setProps({ open: true });
  await nextTick();
  return wrapper;
}

// The panel deliberately keeps its filters across opens, so one test's filter
// would survive into the next within the same jsdom window.
beforeEach(() => {
  localStorage.clear();
  setActivePinia(createPinia());
  _resetFavourites();
  _resetRecents();
});
afterEach(() => {
  wrapper?.unmount();
  wrapper = null;
  document.body.innerHTML = "";
});

describe("ProviderModelPicker visibility", () => {
  it("renders nothing when closed", () => {
    wrapper = mount(ProviderModelPickerVue, { props: { open: false, provider: "ollama", model: "" } });
    expect(document.querySelector(".fb-win")).toBeNull();
  });

  it("renders the model list once opened", async () => {
    await openWith("ollama", ["llama3", "llava"]);
    expect(document.querySelector(".fb-win")).not.toBeNull();
    expect(modelCard("llama3")).toBeTruthy();
    expect(modelCard("llava")).toBeTruthy();
  });
});

describe("ProviderModelPicker search and filters", () => {
  it("filters the list by the search box", async () => {
    await openWith("openrouter", ["gpt-4o", "gpt-4o:free", "claude-3-haiku"]);
    const search = document.querySelector<HTMLInputElement>(".fb-search-input")!;
    search.value = "claude";
    search.dispatchEvent(new Event("input"));
    await nextTick();

    expect(cardCount()).toBe(1);
    expect(modelCard("claude-3-haiku")).toBeTruthy();
  });

  // The reason search became ranking rather than filtering: the exact name has
  // to come first, whatever order the provider listed things in.
  it("puts an exact name at the top of the results", async () => {
    await openWith("openrouter", ["gpt-4o-mini-audio-preview", "chatgpt-4o-latest", "gpt-4o"]);
    const search = document.querySelector<HTMLInputElement>(".fb-search-input")!;
    search.value = "gpt-4o";
    search.dispatchEvent(new Event("input"));
    await nextTick();

    const first = document.querySelectorAll<HTMLElement>(".fb-card")[0];
    expect(first.textContent).toContain("gpt-4o");
    expect(first.textContent).not.toContain("mini");
  });

  it("shows a no-match message for a query nothing satisfies", async () => {
    await openWith("openrouter", ["gpt-4o"]);
    const search = document.querySelector<HTMLInputElement>(".fb-search-input")!;
    search.value = "does-not-exist";
    search.dispatchEvent(new Event("input"));
    await nextTick();

    expect(cardCount()).toBe(0);
    expect(document.querySelector(".fb-empty")).not.toBeNull();
  });

  it("splits free vs paid OpenRouter models by tier", async () => {
    await openWith("openrouter", ["gpt-4o", "gpt-4o:free"]);
    sidebarRow("Paid").dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await nextTick();

    expect(cardCount()).toBe(1);
    expect(modelCard("gpt-4o")).toBeTruthy();
    expect(() => modelCard("gpt-4o:free")).toThrow();
  });

  it("filters to vision-tagged models only", async () => {
    await openWith("openrouter", ["gpt-4o", "text-only-model"], ["gpt-4o"]);
    sidebarRow("Vision").dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await nextTick();

    expect(cardCount()).toBe(1);
    expect(modelCard("gpt-4o")).toBeTruthy();
  });

  // Clicking the row that is already on turns it back off, so a facet never
  // needs its "All" row to be hunted for.
  it("turns a facet off when its row is clicked again", async () => {
    await openWith("openrouter", ["gpt-4o", "text-only-model"], ["gpt-4o"]);
    const vision = sidebarRow("Vision");
    vision.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await nextTick();
    expect(cardCount()).toBe(1);

    sidebarRow("Vision").dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await nextTick();
    expect(cardCount()).toBe(2);
  });

  // Local providers only ever have local models, so Free/Paid would be two
  // rows that always read 0.
  it("offers only the Local tier for a local provider", async () => {
    await openWith("ollama", ["llama3"]);
    const rows = Array.from(document.querySelectorAll(".fb-row")).map((r) => r.textContent ?? "");
    expect(rows.some((r) => r.includes("Local"))).toBe(true);
    expect(rows.some((r) => r.includes("Free"))).toBe(false);
    expect(rows.some((r) => r.includes("Paid"))).toBe(false);
  });

  // Each row's number answers "how many would be left if I clicked this", so
  // the axis being counted is excluded from its own count.
  it("counts a facet row against the other filters, not itself", async () => {
    await openWith("openrouter", ["a-vision:free", "b-vision", "c-text:free"], ["a-vision:free", "b-vision"]);
    sidebarRow("Free").dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await nextTick();
    // Free is on, so Vision must count only the free vision model.
    expect(sidebarRow("Vision").querySelector(".fb-row-count")?.textContent).toBe("1");
  });
});

describe("ProviderModelPicker favourites and recents", () => {
  it("starring a model persists across the favourites filter", async () => {
    await openWith("ollama", ["llama3", "llava"]);
    starFor("llama3").dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await nextTick();
    expect(starFor("llama3").classList.contains("on")).toBe(true);

    sidebarRow("Favourites").dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await nextTick();
    expect(cardCount()).toBe(1);
    expect(modelCard("llama3")).toBeTruthy();
  });

  // Recorded on APPLY, not on highlight: walking the list with the arrow keys
  // would otherwise leave nothing but the last thing scrolled past.
  it("records a model as recent only once it is applied", async () => {
    await openWith("ollama", ["llama3", "llava"]);
    modelCard("llava").dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await nextTick();
    expect(sidebarRow("Recently used").querySelector(".fb-row-count")?.textContent).toBe("0");

    footerButton("Use this model").dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await nextTick();
    // Reopen: the applied model is now in the recents.
    await wrapper!.setProps({ open: false });
    await wrapper!.setProps({ open: true });
    await nextTick();
    expect(sidebarRow("Recently used").querySelector(".fb-row-count")?.textContent).toBe("1");
  });
});

describe("ProviderModelPicker selection", () => {
  it("clicking a card selects it, and Apply emits provider+model then closes", async () => {
    await openWith("ollama", ["llama3", "llava"]);
    modelCard("llava").dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await nextTick();
    expect(modelCard("llava").classList.contains("selected")).toBe(true);

    footerButton("Use this model").dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await nextTick();

    expect(wrapper!.emitted("select")).toEqual([[{ provider: "ollama", model: "llava" }]]);
    expect(wrapper!.emitted("update:open")?.at(-1)).toEqual([false]);
  });

  it("a double click chooses straight away", async () => {
    await openWith("ollama", ["llama3", "llava"]);
    modelCard("llava").dispatchEvent(new MouseEvent("dblclick", { bubbles: true }));
    await nextTick();
    expect(wrapper!.emitted("select")).toEqual([[{ provider: "ollama", model: "llava" }]]);
  });

  it("Cancel closes without emitting a selection", async () => {
    await openWith("ollama", ["llama3"]);
    footerButton("Cancel").dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await nextTick();

    expect(wrapper!.emitted("select")).toBeUndefined();
    expect(wrapper!.emitted("update:open")?.at(-1)).toEqual([false]);
  });

  it("Apply stays disabled with nothing selected", async () => {
    await openWith("groq", []);
    expect(footerButton("Use this model").disabled).toBe(true);
    expect(document.querySelector(".fb-empty")).not.toBeNull();
  });

  it("switching providers picks that provider's first cached model", async () => {
    const store = useProviderStore();
    wrapper = mount(ProviderModelPickerVue, { props: { open: false, provider: "ollama", model: "" } });
    seedModels(store, "ollama", ["llama3"]);
    seedModels(store, "groq", ["mixtral-8x7b"]);
    await wrapper.setProps({ open: true });
    await nextTick();

    sidebarRow("Groq").dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await nextTick();
    expect(modelCard("mixtral-8x7b").classList.contains("selected")).toBe(true);
  });

  it("shows the full model id in the detail pane", async () => {
    await openWith("openrouter", ["meta-llama/llama-3.1-70b-instruct"]);
    modelCard("llama-3.1-70b").dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await nextTick();
    expect(document.querySelector(".pmp-det-id")?.textContent).toBe("meta-llama/llama-3.1-70b-instruct");
  });
});
