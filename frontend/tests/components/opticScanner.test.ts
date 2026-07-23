import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import OpticScannerVue from "@/components/nodes/OpticScanner.vue";

function makeState(overrides: Record<string, unknown> = {}) {
  return {
    nodeState: {
      prompt: "",
      negative_prompt: "",
      custom_style: "",
      agent: "Universal",
      model_type: "Auto/None",
      detail_level: "normal",
      language: "en",
      prompt_mode: "Auto",
      response_format: "text",
      photo_style: "None",
      nsfw_photo_style: "None",
      art_style: "None",
      nsfw_art_style: "None",
      seed: -1,
      seed_mode: "random",
    },
    initialValues: {},
    ui: {},
    lastRunSeed: null,
    ...overrides,
  };
}

describe("OpticScanner.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  // Regression guard: prompt / negative_prompt / custom_style stay as native
  // LiteGraph widgets (rendered above the Vue panel, for drag-to-connect) and
  // must NOT be duplicated inside the panel. They are listed in
  // NATIVE_WIDGET_NAMES and skipped in the template, so no textarea/input for
  // them should appear here.
  it("does not duplicate the native prompt fields in the Vue panel", () => {
    const wrapper = mount(OpticScannerVue, { props: { state: makeState() } });
    expect(wrapper.findAll("textarea.fil-w-textarea").length).toBe(0);
    expect(wrapper.findAll("input.fil-w-input").length).toBe(0);
  });
});
