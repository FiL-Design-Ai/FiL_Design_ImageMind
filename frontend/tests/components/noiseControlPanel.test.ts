import { describe, it, expect, beforeEach } from "vitest";
import { reactive, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import NoiseControlPanel from "@/components/nodes/NoiseControlPanel.vue";

function makeState(overrides: { nodeState?: Record<string, unknown>; node?: unknown } = {}) {
  const raw = {
    nodeState: { ...overrides.nodeState },
    initialValues: {},
    ui: {} as Record<string, unknown>,
  };
  Object.defineProperty(raw, "node", { value: overrides.node, enumerable: false, configurable: true });
  return reactive(raw);
}

describe("NoiseControlPanel.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("shows the variation seed and weight directly on the panel", () => {
    const wrapper = mount(NoiseControlPanel, { props: { state: makeState() as never } });
    expect(wrapper.text()).toContain("Variation seed");
    expect(wrapper.text()).toContain("Variation weight");
  });

  it("offers the rng sources the node declares", () => {
    const node = { widgets: [{ name: "rng_source", value: "cpu", options: { values: ["cpu", "gpu"] } }], inputs: [] };
    const wrapper = mount(NoiseControlPanel, { props: { state: makeState({ node }) as never } });
    const labels = wrapper.findAll(".fil-w-seg-btn, .fil-w-segmented button").map((b) => b.text());
    expect(labels.join(" ")).toContain("CPU");
    expect(labels.join(" ")).toContain("GPU");
  });

  // Same rule as FiLKSampler: stock ComfyUI disables control_after_generate
  // while the seed it cycles is driven by a link.
  it("grays the after-generate combo out while the variation seed socket carries a link", async () => {
    const node = {
      widgets: [{ name: "rng_source", value: "cpu", options: { values: ["cpu", "gpu"] } }],
      inputs: [{ name: "seed", widget: {}, link: 7 }],
    };
    const wrapper = mount(NoiseControlPanel, { props: { state: makeState({ node }) as never } });
    await nextTick();
    const select = wrapper.find("select");
    expect((select.element as HTMLSelectElement).disabled).toBe(true);
  });
});
