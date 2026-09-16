import { describe, it, expect, beforeEach } from "vitest";
import { reactive, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import EditEncoderPanelVue from "@/components/nodes/EditEncoderPanel.vue";

function makeState(overrides: {
  nodeState?: Record<string, unknown>;
  initialValues?: Record<string, unknown>;
  ui?: Record<string, unknown>;
} = {}) {
  const raw = {
    nodeState: {
      prompt: "",
      prompt_strength: 1.0,
      reference_strength: 1.0,
      reference_mode: "vision",
      reference_cards: "",
      reference_latents_method: "index_timestep_zero",
      vision_megapixels: 0.15,
      latent_megapixels: 1.0,
      system_preset: "none",
      system_prompt: "",
      ...overrides.nodeState,
    },
    initialValues: { ...overrides.initialValues },
    ui: { refs: 0, lastRun: null, ...overrides.ui },
  };
  return reactive(raw);
}

describe("EditEncoderPanel.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders empty state placeholder when no references are wired", () => {
    const state = makeState({ ui: { refs: 0 } });
    const wrapper = mount(EditEncoderPanelVue, { props: { state: state as never } });

    expect(wrapper.text()).toContain("0 references");
    expect(wrapper.text()).toContain("No reference images wired");
    expect(wrapper.find(".fil-ee-cards").exists()).toBe(false);
  });

  it("renders reference cards when references are wired", () => {
    const state = makeState({
      ui: { refs: 2 },
      nodeState: {
        reference_cards: JSON.stringify([
          { role: "material", strength: 1.2 },
          { role: "lighting", window: "layout" },
        ]),
      },
    });
    const wrapper = mount(EditEncoderPanelVue, { props: { state: state as never } });

    expect(wrapper.text()).toContain("2 references");
    expect(wrapper.text()).toContain("ACTIVE");
    expect(wrapper.findAll(".fil-ee-card").length).toBe(2);
    expect(wrapper.text()).toContain("Ref #1");
    expect(wrapper.text()).toContain("Ref #2");
  });

  it("displays and updates both Prompt and Reference balancing weights", async () => {
    const state = makeState({
      nodeState: {
        prompt_strength: 1.25,
        reference_strength: 0.75,
      },
    });
    const wrapper = mount(EditEncoderPanelVue, { props: { state: state as never } });

    expect(wrapper.text()).toContain("Prompt");
    expect(wrapper.text()).toContain("References");

    state.nodeState.prompt_strength = 1.5;
    state.nodeState.reference_strength = 1.8;
    await nextTick();

    expect(state.nodeState.prompt_strength).toBe(1.5);
    expect(state.nodeState.reference_strength).toBe(1.8);
  });

  it("displays fully open VLM & Latents Engine section without accordions", () => {
    const state = makeState({
      nodeState: {
        reference_latents_method: "index_timestep_zero",
        vision_megapixels: 0.5,
        latent_megapixels: 1.5,
        system_preset: "none",
        system_prompt: "Focus on eye details",
      },
    });
    const wrapper = mount(EditEncoderPanelVue, { props: { state: state as never } });

    // Header & engine fields must be visible directly on root
    expect(wrapper.find(".fil-ee-engine").exists()).toBe(true);
    expect(wrapper.text()).toContain("VLM & Latents Engine");
    expect(wrapper.text()).toContain("Reference Latents Method");
    expect(wrapper.text()).toContain("VLM MP");
    expect(wrapper.text()).toContain("Latent MP");
    expect(wrapper.text()).toContain("System Preset");
    expect(wrapper.find("input[placeholder*='system prompt' i], textarea").exists()).toBe(true);
  });

  it("shows run diagnostic summary when provided", () => {
    const state = makeState({
      ui: {
        refs: 1,
        lastRun: {
          summary: "1 reference(s), mode 'vision'.\nNOTE: text encoder reads 384x384",
          warned: true,
        },
      },
    });
    const wrapper = mount(EditEncoderPanelVue, { props: { state: state as never } });

    expect(wrapper.find(".fil-ee-report").exists()).toBe(true);
    expect(wrapper.text()).toContain("Text encoder reads 384x384");
  });
});
