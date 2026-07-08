import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import SeedVue from "@/components/nodes/Seed.vue";

function makeState(overrides: Record<string, unknown> = {}) {
  return {
    nodeState: { mode: "random", seed: 0 },
    initialValues: { seed: 0 },
    ui: {},
    lastRunSeed: null,
    ...overrides,
  };
}

describe("Seed.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders mode toggle with default 'random'", () => {
    const state = makeState();
    const wrapper = mount(SeedVue, { props: { state } });
    const buttons = wrapper.findAll("button");
    const randomBtn = buttons.find((b) => b.text().toLowerCase().includes("random"));
    const fixedBtn = buttons.find((b) => b.text().toLowerCase().includes("fixed"));
    expect(randomBtn).toBeTruthy();
    expect(fixedBtn).toBeTruthy();
  });

  it("shows seed value in fixed mode", () => {
    const state = makeState({ nodeState: { mode: "fixed", seed: 42 } });
    const wrapper = mount(SeedVue, { props: { state } });
    const input = wrapper.find<HTMLInputElement>(".fil-seed-display");
    expect(input.exists()).toBe(true);
    expect(input.element.value).toContain("42");
  });

  it("switches to fixed mode on newFixed", async () => {
    const state = makeState({ nodeState: { mode: "random", seed: 0 } });
    const wrapper = mount(SeedVue, { props: { state } });
    const newFixedBtn = wrapper.findAll("button").find((b) => b.text().toLowerCase().includes("new"));
    await newFixedBtn?.trigger("click");
    expect(state.nodeState.mode).toBe("fixed");
    expect(typeof state.nodeState.seed).toBe("number");
    expect(state.nodeState.seed).toBeGreaterThan(0);
  });

  it("displays 'random' readout in random mode", () => {
    const state = makeState({ nodeState: { mode: "random", seed: 0 } });
    const wrapper = mount(SeedVue, { props: { state } });
    const input = wrapper.find<HTMLInputElement>(".fil-seed-display");
    expect(input.element.value).toBe("random");
  });
});
