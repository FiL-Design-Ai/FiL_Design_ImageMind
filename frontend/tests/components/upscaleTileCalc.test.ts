import { describe, it, expect, beforeEach } from "vitest";
import { reactive, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import UpscaleTileCalcVue from "@/components/nodes/UpscaleTileCalc.vue";
import { FilNumberInput } from "@/components/widgets";

function makeState(overrides: { nodeState?: Record<string, unknown>; node?: unknown } = {}) {
  const raw = {
    nodeState: { ...overrides.nodeState },
    initialValues: {},
    ui: {} as Record<string, unknown>,
  };
  Object.defineProperty(raw, "node", { value: overrides.node, enumerable: false, configurable: true });
  return reactive(raw);
}

function toggleByLabel(wrapper: ReturnType<typeof mount>, label: string) {
  const btn = wrapper.findAll("button.fil-w-switch").find((b) => b.attributes("aria-label") === label);
  if (!btn) throw new Error(`no toggle labeled "${label}"`);
  return btn;
}

describe("UpscaleTileCalc.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("shows the manual tile fields by default (auto_mode off)", () => {
    const wrapper = mount(UpscaleTileCalcVue, { props: { state: makeState() as never } });
    expect(wrapper.text()).toContain("Tile size");
    expect(wrapper.text()).toContain("Overlap");
    expect(wrapper.text()).not.toContain("Auto profile");
  });

  it("switches to the auto-profile picker and hides manual fields when Full auto is on", async () => {
    const wrapper = mount(UpscaleTileCalcVue, { props: { state: makeState() as never } });
    await toggleByLabel(wrapper, "🤖 Full auto").trigger("click");
    await nextTick();

    expect(wrapper.text()).toContain("Auto profile");
    expect(wrapper.text()).not.toContain("Tile size");
    expect(wrapper.text()).not.toContain("Cols");
  });

  // auto_overlap derives the overlap from tile size instead of the fixed
  // field — the manual overlap input has to go read-only while it's on.
  it("disables the manual overlap field once Auto overlap is on, leaves tile size alone", async () => {
    const wrapper = mount(UpscaleTileCalcVue, { props: { state: makeState() as never } });
    const row = wrapper.find(".fil-up-row-overlap");
    const [tileSizeInput, tileOverlapInput] = row.findAllComponents(FilNumberInput);

    expect(tileSizeInput.find("input.fil-w-num").attributes("disabled")).toBeUndefined();
    expect(tileOverlapInput.find("input.fil-w-num").attributes("disabled")).toBeUndefined();

    await toggleByLabel(wrapper, "🧵 Auto").trigger("click");
    await nextTick();

    const [tileSizeAfter, tileOverlapAfter] = row.findAllComponents(FilNumberInput);
    expect(tileSizeAfter.find("input.fil-w-num").attributes("disabled")).toBeUndefined();
    expect(tileOverlapAfter.find("input.fil-w-num").attributes("disabled")).toBeDefined();
  });

  it("locks the overlap field while its input socket is linked, independent of auto_overlap", async () => {
    const node = { inputs: [{ name: "tile_overlap", link: 9 }] };
    const wrapper = mount(UpscaleTileCalcVue, { props: { state: makeState({ node }) as never } });
    await nextTick();

    const row = wrapper.find(".fil-up-row-overlap");
    const [, tileOverlapInput] = row.findAllComponents(FilNumberInput);
    expect(tileOverlapInput.find("input.fil-w-num").attributes("disabled")).toBeDefined();
  });

  it("toggling non-square tiles writes nodeState", async () => {
    const state = makeState();
    const wrapper = mount(UpscaleTileCalcVue, { props: { state: state as never } });
    await toggleByLabel(wrapper, "📐 Non-square tiles").trigger("click");
    expect(state.nodeState.non_square_tiles).toBe(true);
  });

  it("collapses the Auto / advanced section and records it in state.ui", async () => {
    const state = makeState();
    const wrapper = mount(UpscaleTileCalcVue, { props: { state: state as never } });
    expect(wrapper.text()).toContain("Tile size");

    const header = wrapper.findAll(".fil-w-section").find((h) => h.text().includes("Auto / advanced"));
    expect(header).toBeTruthy();
    await header!.trigger("click");
    await nextTick();

    expect(wrapper.text()).not.toContain("Tile size");
    expect(state.ui.collapsed_auto).toBe(true);
  });
});
