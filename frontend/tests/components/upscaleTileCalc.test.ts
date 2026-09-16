import { describe, it, expect, beforeEach } from "vitest";
import { reactive, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import UpscaleTileCalcVue from "@/components/nodes/UpscaleTileCalc.vue";
import { FilNumberInput } from "@/components/widgets";

function makeState(overrides: { nodeState?: Record<string, unknown>; node?: unknown } = {}) {
  const raw = {
    nodeState: {
      upscale_factor: 2.0,
      tile_size: 1024,
      tile_overlap: 64,
      manual_tile_cols: 0,
      manual_tile_rows: 0,
      auto_overlap: false,
      auto_mode: false,
      non_square_tiles: false,
      auto_fix_thin_edges: false,
      auto_profile: "Balanced",
      ...overrides.nodeState,
    },
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

function segmentedButton(wrapper: ReturnType<typeof mount>, textMatch: string) {
  const btn = wrapper.findAll("button.fil-w-seg").find((b) => b.text().includes(textMatch));
  if (!btn) throw new Error(`no segmented button matching "${textMatch}"`);
  return btn;
}

describe("UpscaleTileCalc.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("shows the manual tile fields and live HUD by default (auto_mode off)", () => {
    const wrapper = mount(UpscaleTileCalcVue, { props: { state: makeState() as never } });
    expect(wrapper.text()).toContain("Tile size");
    expect(wrapper.text()).toContain("Overlap");
    expect(wrapper.find(".fil-up-hud").exists()).toBe(true);
    expect(wrapper.text()).toContain("×2.00");
    expect(wrapper.text()).toContain("1024px");
    expect(wrapper.text()).not.toContain("Auto profile");
  });

  it("switches to the auto-profile picker and hides manual fields when VRAM Profile is chosen", async () => {
    const wrapper = mount(UpscaleTileCalcVue, { props: { state: makeState() as never } });
    await segmentedButton(wrapper, "VRAM Profile").trigger("click");
    await nextTick();

    expect(wrapper.text()).toContain("Auto profile");
    expect(wrapper.text()).not.toContain("Tile size");
    expect(wrapper.text()).not.toContain("Cols");
  });

  it("disables the manual overlap field once Auto overlap is on, leaves tile size alone", async () => {
    const wrapper = mount(UpscaleTileCalcVue, { props: { state: makeState() as never } });
    const inputs = wrapper.findAllComponents(FilNumberInput);
    // inputs[0] is the FilSlider (upscale_factor) passing through to FilNumberInput
    const tileSizeInput = inputs[1];
    const tileOverlapInput = inputs[2];

    expect(tileSizeInput.find("input.fil-w-num").attributes("disabled")).toBeUndefined();
    expect(tileOverlapInput.find("input.fil-w-num").attributes("disabled")).toBeUndefined();

    await toggleByLabel(wrapper, "🧵 Auto").trigger("click");
    await nextTick();
    await nextTick();

    const inputsAfter = wrapper.findAllComponents(FilNumberInput);
    expect(inputsAfter[1].find("input.fil-w-num").attributes("disabled")).toBeUndefined();
    expect(inputsAfter[2].find("input.fil-w-num").attributes("disabled")).toBeDefined();
  });

  it("locks the overlap field while its input socket is linked, independent of auto_overlap", async () => {
    const node = { inputs: [{ name: "tile_overlap", link: 9 }] };
    const wrapper = mount(UpscaleTileCalcVue, { props: { state: makeState({ node }) as never } });
    await nextTick();
    await nextTick();

    const inputs = wrapper.findAllComponents(FilNumberInput);
    const tileOverlapInput = inputs[2];
    expect(tileOverlapInput.find("input.fil-w-num").attributes("disabled")).toBeDefined();
  });

  it("toggling non-square tiles writes nodeState", async () => {
    const state = makeState();
    const wrapper = mount(UpscaleTileCalcVue, { props: { state: state as never } });
    await toggleByLabel(wrapper, "📐 Non-square tiles").trigger("click");
    expect(state.nodeState.non_square_tiles).toBe(true);
  });

  it("displays fully open controls without hidden spoiler accordions", () => {
    const state = makeState();
    const wrapper = mount(UpscaleTileCalcVue, { props: { state: state as never } });

    // No collapsed FilSection must exist
    expect(wrapper.findAll(".fil-w-section").length).toBe(0);
    expect(wrapper.text()).toContain("Tile size");
    expect(wrapper.text()).toContain("Cols (0=auto)");
    expect(wrapper.text()).toContain("Rows (0=auto)");
    expect(wrapper.text()).toContain("Auto-fix thin edges");
  });
});
