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

function toggleByLabel(wrapper: ReturnType<typeof mount>, label: string) {
  const btn = wrapper.findAll("button.fil-w-switch").find((b) => b.attributes("aria-label") === label);
  if (!btn) throw new Error(`no toggle labeled "${label}"`);
  return btn;
}

describe("NoiseControlPanel.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("hides the variation seed and weight while variation is off", () => {
    // node_noise_control.py ignores both unless add_seed_noise is set, so
    // showing them would be showing two fields that do nothing.
    const wrapper = mount(NoiseControlPanel, { props: { state: makeState() as never } });
    expect(wrapper.text()).toContain("Variation");
    expect(wrapper.text()).not.toContain("Variation seed");
    expect(wrapper.text()).not.toContain("Variation weight");
  });

  it("reveals them when variation is switched on", async () => {
    const wrapper = mount(NoiseControlPanel, { props: { state: makeState() as never } });
    await toggleByLabel(wrapper, "🔀 Variation").trigger("click");
    await nextTick();
    expect(wrapper.text()).toContain("Variation seed");
    expect(wrapper.text()).toContain("Variation weight");
  });

  it("stores the switch as a boolean, the way the schema declares it", async () => {
    const state = makeState();
    const wrapper = mount(NoiseControlPanel, { props: { state: state as never } });
    await toggleByLabel(wrapper, "🔀 Variation").trigger("click");
    expect(state.nodeState.add_seed_noise).toBe(true);
  });

  it("offers the rng sources the node declares", () => {
    const node = { widgets: [{ name: "rng_source", value: "cpu", options: { values: ["cpu", "gpu"] } }], inputs: [] };
    const wrapper = mount(NoiseControlPanel, { props: { state: makeState({ node }) as never } });
    const labels = wrapper.findAll(".fil-w-seg-btn, .fil-w-segmented button").map((b) => b.text());
    expect(labels.join(" ")).toContain("CPU");
    expect(labels.join(" ")).toContain("GPU");
  });
});
