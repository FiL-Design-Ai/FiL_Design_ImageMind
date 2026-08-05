import { describe, it, expect, beforeEach, vi } from "vitest";
import { nextTick, reactive } from "vue";
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
      video_duration: 0,
      video_aspect: "Auto",
      video_sound: "Auto",
      video_camera: "Auto",
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

  // ── Video shot parameters (model_type-gated Output widgets) ─────────────
  // The four widgets appear only for the Video / MiniMax H3 profiles and
  // stay hidden for every image target — hidden values persist in nodeState,
  // and the backend applies the same gate before injecting anything.

  // The aspect widget is a label-less chip grid (same pattern as detail_level),
  // so it is recognized by its option values instead of a label.
  const VIDEO_WIDGET_MARKERS = ["Video Duration", "21:9", "Video Sound", "Video Camera"];

  function mountWithModel(modelType: string) {
    const state = makeState();
    state.nodeState.model_type = modelType;
    return mount(OpticScannerVue, { props: { state } });
  }

  it("hides the video shot parameters for image model types", () => {
    for (const modelType of ["Auto/None", "FLUX", "Z-Image Turbo", "Krea 2"]) {
      const wrapper = mountWithModel(modelType);
      for (const marker of VIDEO_WIDGET_MARKERS) {
        expect(wrapper.text()).not.toContain(marker);
      }
    }
  });

  it("shows all four video shot parameters for both video profiles", () => {
    for (const modelType of ["Video", "MiniMax H3"]) {
      const wrapper = mountWithModel(modelType);
      for (const marker of VIDEO_WIDGET_MARKERS) {
        expect(wrapper.text()).toContain(marker);
      }
    }
  });

  // The duration slider's bounds follow the active profile — MiniMax H3's are
  // the API's hard limit (4-15 whole seconds), universal Video allows 2-20.
  it("narrows the duration slider bounds for MiniMax H3", () => {
    const video = mountWithModel("Video");
    const videoInput = video.find(".fil-w-numfield input");
    expect(videoInput.attributes("min")).toBe("2");
    expect(videoInput.attributes("max")).toBe("20");

    const h3 = mountWithModel("MiniMax H3");
    const h3Input = h3.find(".fil-w-numfield input");
    expect(h3Input.attributes("min")).toBe("4");
    expect(h3Input.attributes("max")).toBe("15");
  });

  // Switching profiles clamps a stored duration into the new range (mirrors
  // the backend clamp, so the slider never shows a value the prompt can't use).
  it("clamps the stored duration when the profile range narrows", async () => {
    const state = reactive(makeState());
    state.nodeState.model_type = "Video";
    state.nodeState.video_duration = 18;
    const wrapper = mount(OpticScannerVue, { props: { state } });

    state.nodeState.model_type = "MiniMax H3";
    await nextTick();
    expect(state.nodeState.video_duration).toBe(15);

    // Auto (0) is never clamped — it means "the LLM decides".
    state.nodeState.video_duration = 0;
    state.nodeState.model_type = "Video";
    await nextTick();
    expect(state.nodeState.video_duration).toBe(0);
    wrapper.unmount();
  });

  // Hidden values survive a model switch: what was set under a video profile
  // comes back when the user returns to it.
  it("keeps hidden video values across model switches", () => {
    const state = makeState();
    state.nodeState.model_type = "Video";
    state.nodeState.video_duration = 12;
    state.nodeState.video_camera = "Orbit";

    const shown = mount(OpticScannerVue, { props: { state } });
    expect(shown.text()).toContain("Video Camera");
    shown.unmount();

    state.nodeState.model_type = "FLUX";
    const hidden = mount(OpticScannerVue, { props: { state } });
    expect(hidden.text()).not.toContain("Video Camera");
    hidden.unmount();

    state.nodeState.model_type = "MiniMax H3";
    const restored = mount(OpticScannerVue, { props: { state } });
    expect(restored.text()).toContain("Video Camera");
    expect(state.nodeState.video_camera).toBe("Orbit");
    expect(state.nodeState.video_duration).toBe(12);
    restored.unmount();
  });
});
