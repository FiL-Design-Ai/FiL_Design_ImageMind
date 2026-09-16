import { describe, it, expect, beforeEach } from "vitest";
import { reactive, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import Krea2TiledDiffusionPanel from "@/components/nodes/Krea2TiledDiffusionPanel.vue";

function makeState(overrides: { nodeState?: Record<string, unknown>; node?: unknown } = {}) {
  const raw = {
    nodeState: {
      upscale_factor: 2.0,
      denoise: 0.20,
      prompt: "crisp textures, sharp focus, authentic skin pores, fine fabrics, realistic micro-details",
      seed: 42,
      control_after_generate: "randomize",
      steps: 20,
      tile_overlap: "auto (256px)",
      texture_injection: 0.20,
      color_match: "none",
      ...overrides.nodeState,
    },
    initialValues: {},
    ui: {} as Record<string, unknown>,
  };
  Object.defineProperty(raw, "node", { value: overrides.node, enumerable: false, configurable: true });
  return reactive(raw);
}

describe("Krea2TiledDiffusionPanel.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders all open parameter rows without hidden accordions", () => {
    const wrapper = mount(Krea2TiledDiffusionPanel, { props: { state: makeState() as never } });

    expect(wrapper.findAll(".fil-w-section").length).toBe(0);

    const text = wrapper.text();
    expect(text).toContain("Upscale factor");
    expect(text).toContain("Denoise");
    expect(text).toContain("Seed");
    expect(text).toContain("After generate");
    expect(text).toContain("Steps");
    expect(text).toContain("Overlap");
    expect(text).toContain("Texture");
    expect(text).toContain("Color match");
    expect(text).toContain("Prompt");
  });

  it("updates prompt state on input", async () => {
    const state = makeState();
    const wrapper = mount(Krea2TiledDiffusionPanel, { props: { state: state as never } });

    const textarea = wrapper.find("textarea");
    expect(textarea.exists()).toBe(true);

    await textarea.setValue("ultra realistic portrait of an astronaut");
    await nextTick();

    expect(state.nodeState.prompt).toBe("ultra realistic portrait of an astronaut");
  });

  it("updates color match selection", async () => {
    const state = makeState();
    const wrapper = mount(Krea2TiledDiffusionPanel, { props: { state: state as never } });

    const selects = wrapper.findAll("select");
    // selects: [after_generate, tile_overlap, color_match]
    const colorSelect = selects[2];
    expect(colorSelect.exists()).toBe(true);

    await colorSelect.setValue("luminance");
    await nextTick();

    expect(state.nodeState.color_match).toBe("luminance");
  });
});

