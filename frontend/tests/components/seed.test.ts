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

  it("renders three icon action buttons", () => {
    const state = makeState();
    const wrapper = mount(SeedVue, { props: { state } });
    const labels = wrapper.findAll(".fil-seed-actions button").map((b) => b.text());
    expect(labels).toEqual(["🔀", "♻️", "🎲"]);
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
    const newFixedBtn = wrapper.findAll(".fil-seed-actions button").find((b) => b.text() === "🎲");
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

  it("typing a value in fixed mode applies it as the seed", async () => {
    const state = makeState({ nodeState: { mode: "fixed", seed: 42 } });
    const wrapper = mount(SeedVue, { props: { state } });
    const input = wrapper.find<HTMLInputElement>(".fil-seed-display");
    input.element.value = "12345";
    await input.trigger("input");
    expect(state.nodeState.mode).toBe("fixed");
    expect(state.nodeState.seed).toBe(12345);
  });
});
