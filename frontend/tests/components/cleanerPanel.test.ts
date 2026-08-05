import { describe, it, expect, beforeEach } from "vitest";
import { reactive, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import CleanerPanel from "@/components/nodes/CleanerPanel.vue";

function makeState(nodeState: Record<string, unknown> = {}) {
  const raw = { nodeState: { ...nodeState }, initialValues: {}, ui: {} as Record<string, unknown> };
  Object.defineProperty(raw, "node", { value: undefined, enumerable: false, configurable: true });
  return reactive(raw);
}

function switchAt(wrapper: ReturnType<typeof mount>, index: number) {
  return wrapper.findAll("button.fil-w-switch")[index];
}

describe("CleanerPanel.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("names the action in each row, the way the owner worded it", () => {
    // The label is the action ("Flush GPU cache", "Unload models"); the switch
    // position says whether it will happen. The earlier "name — caption"
    // compound ellipsised past reading at the 250px node width.
    const wrapper = mount(CleanerPanel, { props: { state: makeState() as never } });
    expect(wrapper.text()).toContain("Flush GPU cache");
    expect(wrapper.text()).toContain("Unload models");
  });

  it("keeps the action label regardless of switch state", async () => {
    const wrapper = mount(CleanerPanel, { props: { state: makeState() as never } });
    await switchAt(wrapper, 0).trigger("click");
    await nextTick();
    expect(wrapper.text()).toContain("Flush GPU cache");
  });

  it("defaults both switches on, matching node_cleaner.py", () => {
    const wrapper = mount(CleanerPanel, { props: { state: makeState() as never } });
    expect(switchAt(wrapper, 0).attributes("aria-checked")).toBe("true");
    expect(switchAt(wrapper, 1).attributes("aria-checked")).toBe("true");
  });

  it("writes booleans, not the ON/OFF strings the widget renders", async () => {
    const state = makeState();
    const wrapper = mount(CleanerPanel, { props: { state: state as never } });
    await switchAt(wrapper, 1).trigger("click");
    expect(state.nodeState.unload_models).toBe(false);
  });
});
