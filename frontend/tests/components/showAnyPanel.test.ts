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

  it("renders text when unwired", () => {
    const state = makeState({ text: "cyberpunk prompt" });
    const wrapper = mount(ShowAnyPanel, { props: { state: state as never } });
    expect(wrapper.find("textarea").element.value).toBe("cyberpunk prompt");
    expect(wrapper.find(".fil-sa-header").exists()).toBe(false);
  });

  it("shows image preview and resolution footer when ui.images is populated", async () => {
    const state = makeState(
      { text: "Resolution: 1680 × 944 px (RGB)" },
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
    expect(wrapper.find(".fil-sa-header").exists()).toBe(false);
    expect(wrapper.find(".fil-sa-img-footer").exists()).toBe(true);
    expect(wrapper.find(".fil-sa-img-footer").text()).toContain("1680 × 944");
  });

  it("updates text reactively", async () => {
    const state = makeState({ text: "initial" });
    const wrapper = mount(ShowAnyPanel, { props: { state: state as never } });
    expect(wrapper.find("textarea").element.value).toBe("initial");

    state.nodeState.text = "updated prompt";
    await nextTick();

    expect(wrapper.find("textarea").element.value).toBe("updated prompt");
  });

  it("renders linked textarea with clean toolbar (copy only) when source is linked", async () => {
    const state = makeState({ text: "inspected string data" });
    Object.defineProperty(state, "node", {
      value: {
        inputs: [{ name: "source", link: 42 }],
      },
      enumerable: false,
      configurable: true,
    });
    const wrapper = mount(ShowAnyPanel, { props: { state: state as never } });
    await nextTick();
    const textarea = wrapper.find("textarea");
    expect(textarea.exists()).toBe(true);
    expect(textarea.element.value).toBe("inspected string data");
    expect(textarea.classes()).toContain("is-linked");
    expect(textarea.attributes("readonly")).toBeDefined();

    // Toolbar check: only copy button exists, paste and clear are hidden
    const toolBtns = wrapper.findAll(".fil-w-tool-btn");
    expect(toolBtns.length).toBe(1);
  });
});
