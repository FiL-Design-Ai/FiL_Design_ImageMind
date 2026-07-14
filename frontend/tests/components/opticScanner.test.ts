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

  // Regression guard: commit f6ebc38 dropped the `string`-kind branch, so the
  // prompt / negative_prompt / custom_style textareas silently disappeared
  // (they fell through to an empty FilChipGrid).
  it("renders textareas for the string-kind prompt fields", () => {
    const wrapper = mount(OpticScannerVue, { props: { state: makeState() } });
    const textareas = wrapper.findAll("textarea.fil-w-textarea");
    expect(textareas.length).toBe(3);
  });

  it("writes typed text into nodeState.prompt", async () => {
    const state = makeState();
    const wrapper = mount(OpticScannerVue, { props: { state } });
    const promptArea = wrapper.findAll<HTMLTextAreaElement>("textarea.fil-w-textarea")[0];
    await promptArea.setValue("a robot walking through neon Tokyo");
    expect(state.nodeState.prompt).toBe("a robot walking through neon Tokyo");
  });
});
