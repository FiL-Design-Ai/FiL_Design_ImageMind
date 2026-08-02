import { describe, it, expect, beforeEach } from "vitest";
import { reactive, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import ImageDecomposerPanel from "@/components/nodes/ImageDecomposerPanel.vue";

function makeState(overrides: { nodeState?: Record<string, unknown>; node?: unknown } = {}) {
  const raw = {
    nodeState: { ...overrides.nodeState },
    initialValues: {},
    ui: {} as Record<string, unknown>,
  };
  Object.defineProperty(raw, "node", { value: overrides.node, enumerable: false, configurable: true });
  return reactive(raw);
}

/** `image` and `prompt` are both optional in the schema; `link` is what decides. */
function nodeWithImage(link: number | null) {
  return { widgets: [], inputs: [{ name: "image", link }, { name: "prompt", link: null }] };
}

describe("ImageDecomposerPanel.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("says the node needs an input when it has neither", () => {
    // Both inputs are optional in the schema, so an empty node looks ready to
    // run and fails only once queued.
    const wrapper = mount(ImageDecomposerPanel, { props: { state: makeState({ node: nodeWithImage(null) }) as never } });
    expect(wrapper.find(".fil-idc-hint").exists()).toBe(true);
  });

  it("drops the hint once a prompt is typed", async () => {
    const state = makeState({ node: nodeWithImage(null) });
    const wrapper = mount(ImageDecomposerPanel, { props: { state: state as never } });
    state.nodeState.prompt = "a cat on a roof";
    await nextTick();
    expect(wrapper.find(".fil-idc-hint").exists()).toBe(false);
  });

  it("drops the hint once an image is wired", () => {
    const wrapper = mount(ImageDecomposerPanel, { props: { state: makeState({ node: nodeWithImage(7) }) as never } });
    expect(wrapper.find(".fil-idc-hint").exists()).toBe(false);
  });

  it("stores the two-letter code the backend reads, not the flag caption", async () => {
    const state = makeState({ node: nodeWithImage(1) });
    const wrapper = mount(ImageDecomposerPanel, { props: { state: state as never } });
    const russian = wrapper.findAll("button").find((b) => b.text().includes("Русский"));
    if (!russian) throw new Error("no Russian option rendered");
    await russian.trigger("click");
    expect(state.nodeState.language).toBe("ru");
  });
});
