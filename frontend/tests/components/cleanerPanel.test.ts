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

  it("carries the label_on / label_off text LiteGraph's own boolean widget showed", () => {
    // The native widget this panel replaced put the action in the caption, not
    // in the switch position. Dropping that would have made the panel say less
    // than the plain widget did.
    const wrapper = mount(CleanerPanel, { props: { state: makeState() as never } });
    expect(wrapper.text()).toContain("Flush cache");
    expect(wrapper.text()).toContain("Unload models");
  });

  it("flips the caption with the switch", async () => {
    const wrapper = mount(CleanerPanel, { props: { state: makeState() as never } });
    await switchAt(wrapper, 0).trigger("click");
    await nextTick();
    expect(wrapper.text()).toContain("Keep cache");
    expect(wrapper.text()).not.toContain("Flush cache");
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
