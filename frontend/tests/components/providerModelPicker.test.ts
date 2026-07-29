import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { nextTick } from "vue";
import { mount, type VueWrapper } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import ProviderModelPickerVue from "@/components/nodes/ProviderModelPicker.vue";
import { useProviderStore } from "@/stores/providerStore";
import { _resetFavourites } from "@/stores/modelFavourites";

/**
 * FilModal teleports its content to `document.body` — a plain `wrapper.find`
 * never sees it (see providerManager.test.ts's sibling panels for components
 * that don't use FilModal; this one does). Every query below goes through
 * `document.body` instead, and every test unmounts when it's done so the
 * teleported nodes don't leak into the next test.
 */
function body() {
  return document.body;
}

function modelCard(name: string): HTMLElement {
  const cards = Array.from(body().querySelectorAll<HTMLElement>(".model-card"));
  const card = cards.find((c) => c.textContent?.includes(name));
  if (!card) throw new Error(`no model card for "${name}"`);
  return card;
}

function favButtonFor(name: string): HTMLElement {
  const row = modelCard(name).closest(".model-row");
  const btn = row?.querySelector<HTMLElement>(".fav-btn");
  if (!btn) throw new Error(`no favourite button for "${name}"`);
  return btn;
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
afterEach(() => {
  wrapper?.unmount();
  wrapper = null;
});

// The panel deliberately persists its type/tier/view filters in localStorage
// across opens (that's the point of `remember`/`recall`) — but that means a
// filter left on by one test survives into the next mount within this same
// jsdom window unless it's cleared here.
beforeEach(() => {
  localStorage.clear();
});

describe("ProviderModelPicker visibility", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders nothing when closed", () => {
    wrapper = mount(ProviderModelPickerVue, { props: { open: false, provider: "ollama", model: "" } });
    expect(body().querySelector(".picker-container")).toBeNull();
  });

  it("renders the model list once opened", async () => {
    wrapper = mount(ProviderModelPickerVue, { props: { open: false, provider: "ollama", model: "" } });
    seedModels(useProviderStore(), "ollama", ["llama3", "llava"]);
    await wrapper.setProps({ open: true });
    await nextTick();

    expect(body().querySelector(".picker-container")).not.toBeNull();
    expect(modelCard("llama3")).toBeTruthy();
    expect(modelCard("llava")).toBeTruthy();
  });
});

describe("ProviderModelPicker search and filters", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  async function openWithModels(list: string[], visionModels: string[] = []) {
    wrapper = mount(ProviderModelPickerVue, { props: { open: false, provider: "openrouter", model: "" } });
    seedModels(useProviderStore(), "openrouter", list, visionModels);
    await wrapper!.setProps({ open: true });
    await nextTick();
  }

  it("filters the list by the search box", async () => {
    await openWithModels(["gpt-4o", "gpt-4o:free", "claude-3-haiku"]);
    const search = body().querySelector<HTMLInputElement>(".search-input")!;
    search.value = "claude";
    search.dispatchEvent(new Event("input"));
    await nextTick();

    expect(body().querySelectorAll(".model-card").length).toBe(1);
    expect(modelCard("claude-3-haiku")).toBeTruthy();
  });

  it("shows a no-match message for a query nothing satisfies", async () => {
    await openWithModels(["gpt-4o"]);
    const search = body().querySelector<HTMLInputElement>(".search-input")!;
    search.value = "does-not-exist";
    search.dispatchEvent(new Event("input"));
    await nextTick();

    expect(body().querySelectorAll(".model-card").length).toBe(0);
    expect(body().querySelector(".empty-state")).not.toBeNull();
  });

  it("splits free vs paid OpenRouter models by tier", async () => {
    await openWithModels(["gpt-4o", "gpt-4o:free"]);
    const tierPaid = Array.from(body().querySelectorAll("button.fil-w-seg")).find((b) => b.textContent?.includes("Paid"));
    expect(tierPaid).toBeTruthy();
    tierPaid!.dispatchEvent(new Event("click"));
    await nextTick();

    expect(body().querySelectorAll(".model-card").length).toBe(1);
    expect(modelCard("gpt-4o")).toBeTruthy();
    expect(() => modelCard("gpt-4o:free")).toThrow();
  });

  it("filters to vision-tagged models only", async () => {
    await openWithModels(["gpt-4o", "text-only-model"], ["gpt-4o"]);
    const visionOpt = Array.from(body().querySelectorAll("button.fil-w-seg")).find((b) => b.textContent?.includes("Vision"));
    expect(visionOpt).toBeTruthy();
    visionOpt!.dispatchEvent(new Event("click"));
    await nextTick();

    expect(body().querySelectorAll(".model-card").length).toBe(1);
    expect(modelCard("gpt-4o")).toBeTruthy();
  });

  it("local providers (ollama) only ever offer the Local tier, not Free/Paid", async () => {
    wrapper = mount(ProviderModelPickerVue, { props: { open: false, provider: "ollama", model: "" } });
    seedModels(useProviderStore(), "ollama", ["llama3"]);
    await wrapper.setProps({ open: true });
    await nextTick();

    const tierLabels = Array.from(body().querySelectorAll(".filter-segments .fil-w-segmented"))[1];
    expect(tierLabels.textContent).toContain("Local");
    expect(tierLabels.textContent).not.toContain("Free");
    expect(tierLabels.textContent).not.toContain("Paid");
  });
});

describe("ProviderModelPicker favourites", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    _resetFavourites();
  });
  afterEach(() => {
    _resetFavourites();
  });

  it("starring a model persists across the favourites-only filter", async () => {
    wrapper = mount(ProviderModelPickerVue, { props: { open: false, provider: "ollama", model: "" } });
    seedModels(useProviderStore(), "ollama", ["llama3", "llava"]);
    await wrapper.setProps({ open: true });
    await nextTick();

    favButtonFor("llama3").dispatchEvent(new Event("click"));
    await nextTick();
    expect(favButtonFor("llama3").classList.contains("on")).toBe(true);

    const favOnly = body().querySelector<HTMLElement>(".fav-filter")!;
    favOnly.dispatchEvent(new Event("click"));
    await nextTick();

    expect(body().querySelectorAll(".model-card").length).toBe(1);
    expect(modelCard("llama3")).toBeTruthy();
  });
});

describe("ProviderModelPicker selection", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("clicking a card selects it, and Apply emits provider+model then closes", async () => {
    wrapper = mount(ProviderModelPickerVue, { props: { open: false, provider: "ollama", model: "" } });
    seedModels(useProviderStore(), "ollama", ["llama3", "llava"]);
    await wrapper.setProps({ open: true });
    await nextTick();

    modelCard("llava").dispatchEvent(new Event("click"));
    await nextTick();
    expect(modelCard("llava").classList.contains("selected")).toBe(true);

    const applyBtn = Array.from(body().querySelectorAll("button")).find((b) => b.textContent?.includes("Apply Selection"))!;
    applyBtn.dispatchEvent(new Event("click"));
    await nextTick();

    expect(wrapper.emitted("select")).toEqual([[{ provider: "ollama", model: "llava" }]]);
    expect(wrapper.emitted("update:open")).toEqual([[false]]);
  });

  it("Cancel closes without emitting a selection", async () => {
    wrapper = mount(ProviderModelPickerVue, { props: { open: false, provider: "ollama", model: "" } });
    seedModels(useProviderStore(), "ollama", ["llama3"]);
    await wrapper.setProps({ open: true });
    await nextTick();

    const cancelBtn = Array.from(body().querySelectorAll("button")).find((b) => b.textContent?.trim() === "Cancel")!;
    cancelBtn.dispatchEvent(new Event("click"));
    await nextTick();

    expect(wrapper.emitted("select")).toBeUndefined();
    expect(wrapper.emitted("update:open")).toEqual([[false]]);
  });

  it("Apply stays disabled with nothing selected (empty model list)", async () => {
    wrapper = mount(ProviderModelPickerVue, { props: { open: false, provider: "groq", model: "" } });
    seedModels(useProviderStore(), "groq", []);
    await wrapper.setProps({ open: true });
    await nextTick();

    const applyBtn = Array.from(body().querySelectorAll("button")).find((b) => b.textContent?.includes("Apply Selection")) as HTMLButtonElement;
    expect(applyBtn.disabled).toBe(true);
    expect(body().querySelector(".empty-state")).not.toBeNull();
  });

  it("switching providers picks that provider's first cached model", async () => {
    const store = useProviderStore();
    wrapper = mount(ProviderModelPickerVue, { props: { open: false, provider: "ollama", model: "" } });
    seedModels(store, "ollama", ["llama3"]);
    seedModels(store, "groq", ["mixtral-8x7b"]);
    await wrapper.setProps({ open: true });
    await nextTick();

    const groqTab = Array.from(body().querySelectorAll(".tab-btn")).find((b) => b.textContent?.includes("Groq"))!;
    groqTab.dispatchEvent(new Event("click"));
    await nextTick();

    expect(modelCard("mixtral-8x7b").classList.contains("selected")).toBe(true);
  });
});
