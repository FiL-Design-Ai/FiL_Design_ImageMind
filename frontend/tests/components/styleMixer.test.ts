import { describe, it, expect, beforeEach } from "vitest";
import { reactive, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import StyleMixerVue from "@/components/nodes/StyleMixer.vue";

interface FakeInput {
  name: string;
  type: string;
  link: number | null;
}

function makeNode(): { _allInputs: FakeInput[]; inputs: FakeInput[] } {
  const inputs: FakeInput[] = [
    { name: "image_1", type: "IMAGE", link: null },
    { name: "image_2", type: "IMAGE", link: null },
    { name: "image_3", type: "IMAGE", link: null },
    { name: "image_4", type: "IMAGE", link: null },
  ];
  return { _allInputs: inputs, inputs };
}

function makeState(node: unknown) {
  const raw = {
    nodeState: {
      fusion_mode: "Weighted Stack (Fast)",
      img_weight_1: 0.8,
      img_focus_1: "Auto / General",
      img_weight_2: 0.6,
      img_focus_2: "Auto / General",
      img_weight_3: 0.4,
      img_focus_3: "Auto / General",
      img_weight_4: 0.2,
      img_focus_4: "Auto / General",
      base_prompt: "",
      style_1: "(None)",
      weight_1: 1.0,
      style_2: "(None)",
      weight_2: 0.5,
      style_3: "(None)",
      weight_3: 0.3,
    } as Record<string, unknown>,
    initialValues: {},
    ui: { slotVersion: 0 } as Record<string, unknown>,
  };
  Object.defineProperty(raw, "node", { value: node, enumerable: false, configurable: true });
  return reactive(raw);
}

describe("StyleMixer image slot reactivity", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("reveals the Image 3 card once image_2 is connected", async () => {
    const node = makeNode();
    const state = makeState(node);
    const wrapper = mount(StyleMixerVue, { props: { state: state as never } });
    await nextTick();

    expect(wrapper.text()).not.toContain("Image 3");

    // LiteGraph mutates the raw node object — exactly what Vue cannot observe.
    node._allInputs[1].link = 42;
    state.ui.slotVersion = (state.ui.slotVersion as number) + 1;
    await nextTick();

    expect(wrapper.text()).toContain("Image 3");
  });

  it("hides the Image 4 card again when image_3 is disconnected", async () => {
    const node = makeNode();
    node._allInputs[1].link = 42;
    node._allInputs[2].link = 43;
    const state = makeState(node);
    const wrapper = mount(StyleMixerVue, { props: { state: state as never } });
    await nextTick();

    expect(wrapper.text()).toContain("Image 4");

    node._allInputs[2].link = null;
    state.ui.slotVersion = (state.ui.slotVersion as number) + 1;
    await nextTick();

    expect(wrapper.text()).not.toContain("Image 4");
  });
});

describe("StyleMixer section collapse", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("actually hides a section's content when its header is clicked", async () => {
    // FilSection has no default slot: without an explicit v-model binding its
    // arrow toggles a local ref that nothing else reads, so the header looked
    // clickable but collapsing did nothing. Confirmed live by clicking through
    // a running ComfyUI instance — every other panel (UpscaleTileCalc,
    // ColorWizard, HiResFix) really hides its section on the same click.
    const node = makeNode();
    const state = makeState(node);
    const wrapper = mount(StyleMixerVue, { props: { state: state as never } });
    await nextTick();

    expect(wrapper.text()).toContain("Style 1 Weight");

    const header = wrapper.findAll(".fil-w-section").find((h) => h.text().includes("Primary Style"));
    expect(header).toBeTruthy();
    await header!.trigger("click");
    await nextTick();

    expect(wrapper.text()).not.toContain("Style 1 Weight");
    expect(state.ui.collapsed_style1).toBe(true);
  });
});
