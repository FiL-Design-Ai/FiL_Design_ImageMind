import { describe, it, expect, beforeEach } from "vitest";
import { reactive, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import ShowAnyPanel from "@/components/nodes/ShowAnyPanel.vue";

function makeState(
  nodeState: Record<string, unknown> = {},
  ui: Record<string, unknown> = {},
  initialValues: Record<string, unknown> = {}
) {
  const raw = {
    nodeState: { text: "", ...nodeState },
    initialValues: { text: "", ...initialValues },
    ui: { ...ui },
  };
  Object.defineProperty(raw, "node", { value: undefined, enumerable: false, configurable: true });
  return reactive(raw);
}

describe("ShowAnyPanel.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders text and shows standalone badge when unwired", () => {
    const state = makeState({ text: "cyberpunk prompt" });
    const wrapper = mount(ShowAnyPanel, { props: { state: state as never } });
    expect(wrapper.find("textarea").element.value).toBe("cyberpunk prompt");
    expect(wrapper.text()).toContain("STRING");
  });

  it("shows image preview and tabs when ui.images is populated", async () => {
    const state = makeState(
      { text: "image tensor metadata" },
      {
        images: [{ filename: "test.png", subfolder: "", type: "temp" }],
        data_type: "IMAGE",
      }
    );
    // Mock linked source
    Object.defineProperty(state, "node", {
      value: {
        inputs: [{ name: "source", link: 1 }],
      },
      enumerable: false,
      configurable: true,
    });

    const wrapper = mount(ShowAnyPanel, { props: { state: state as never } });
    expect(wrapper.find(".fil-sa-img").exists()).toBe(true);
    expect(wrapper.find(".fil-sa-tabs").exists()).toBe(true);

    // Switch to info tab
    const buttons = wrapper.findAll(".fil-sa-tab-btn");
    expect(buttons.length).toBe(2);
    await buttons[1].trigger("click");
    await nextTick();

    // In info mode, textarea is visible
    expect(wrapper.find("textarea").exists()).toBe(true);
    expect(wrapper.find("textarea").element.value).toBe("image tensor metadata");
  });

  it("updates text and data type reactively", async () => {
    const state = makeState({ text: "initial" });
    const wrapper = mount(ShowAnyPanel, { props: { state: state as never } });
    expect(wrapper.find("textarea").element.value).toBe("initial");

    state.nodeState.text = "updated prompt";
    state.ui.data_type = "JSON";
    await nextTick();

    expect(wrapper.find("textarea").element.value).toBe("updated prompt");
  });
});
