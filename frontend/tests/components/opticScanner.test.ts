import { describe, it, expect, beforeEach, vi } from "vitest";
import { nextTick } from "vue";
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

  // The three text fields live in the panel (the native widgets behind them are
  // hidden) as textareas — custom_style is multiline in the backend schema too
  // (node_scanner.py), so it must not be clipped to a single line here.
  it("renders one textarea per text field", () => {
    const wrapper = mount(OpticScannerVue, { props: { state: makeState() } });
    expect(wrapper.findAll("textarea.fil-w-textarea").length).toBe(3);
  });

  // The prompt textareas are what absorbs the height dragged past the panel's
  // content (`growable: true` in nodes2/scanner.ts) — the flex chain from the
  // section block down to the textarea is what makes that land somewhere.
  it("marks the prompt section and its textarea rows as growable", () => {
    const wrapper = mount(OpticScannerVue, { props: { state: makeState() } });
    expect(wrapper.findAll(".fil-section-block.is-growable").length).toBe(1);
    const growRows = wrapper.findAll(".fil-w-row.is-growable");
    expect(growRows.length).toBe(2);
    for (const row of growRows) expect(row.find("textarea.fil-w-textarea").exists()).toBe(true);
  });

  // Target width/height are socket-only inputs (`force_input` in
  // node_scanner.py): the resolution is wired in from whatever already knows it
  // in the graph, so the panel must not grow a field for either of them.
  it("keeps the target width/height out of the panel", () => {
    const wrapper = mount(OpticScannerVue, { props: { state: makeState() } });
    expect(wrapper.findAll(".fil-w-numfield").length).toBe(0);
    expect(wrapper.text()).not.toContain("Width");
    expect(wrapper.text()).not.toContain("Height");
  });

  // A link on the matching input socket overrides whatever is typed here, so a
  // linked field must not invite typing. The link state is read straight off the
  // node (see readLinkedInputs) — a `link` id on the input slot means connected.
  it("locks a text field while its input socket is linked", async () => {
    const node = {
      widgets: [{ name: "prompt" }, { name: "negative_prompt" }, { name: "custom_style" }],
      inputs: [{ name: "prompt", link: 7 }, { name: "negative_prompt", link: null }, { name: "custom_style" }],
    };
    const wrapper = mount(OpticScannerVue, { props: { state: makeState({ node }) } });
    await nextTick();
    const linked = wrapper.findAll("textarea.fil-w-textarea.is-linked");
    expect(linked.length).toBe(1);
    expect(linked[0].attributes("readonly")).toBeDefined();
  });
  // The socket dots follow the fields through a ResizeObserver and a
  // MutationObserver (useWidgetSockets), not the 300ms interval this panel used
  // to run. That interval re-measured three fields for as long as the node
  // existed, on every scanner on the canvas, with nothing on screen moving.
  it("installs no polling timer", () => {
    const spy = vi.spyOn(window, "setInterval");
    mount(OpticScannerVue, { props: { state: makeState() } });
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });
});
