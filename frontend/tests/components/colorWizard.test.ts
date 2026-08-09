import { describe, it, expect, beforeEach } from "vitest";
import { reactive, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import ColorWizardVue from "@/components/nodes/ColorWizard.vue";
import contracts from "@/api/contracts.json";

/** Mirrors the state built by nodes2/nodes/color_wizard.ts onNodeCreated. */
function makeState(overrides: Record<string, unknown> = {}) {
  const raw = {
    nodeState: {
      method: "Full Auto",
      strength: 0.8,
      saturate: 0.5,
      temperature: 0.0,
      tint: 0.0,
      preserve_skin: false,
      ...overrides,
    } as Record<string, unknown>,
    initialValues: {},
    ui: {} as Record<string, unknown>,
  };
  // `configurable: true` matters: reactive() cannot proxy a non-configurable
  // own property, which is also why the real modules define it that way.
  Object.defineProperty(raw, "node", {
    value: { widgets: [] },
    enumerable: false,
    configurable: true,
  });
  return reactive(raw);
}

type WidgetSpec = { name: string; values?: string[] | null };
type Contract = { inputs: { required: WidgetSpec[]; optional: WidgetSpec[] } };

/** Method values the backend actually accepts, straight from the contract. */
function legalMethods(): string[] {
  const data = (contracts as unknown as { data?: Record<string, Contract> }).data ?? {};
  const c = data["FiLColorWizard"];
  const spec =
    c?.inputs.required.find((i) => i.name === "method") ||
    c?.inputs.optional.find((i) => i.name === "method");
  return spec?.values ?? [];
}

describe("ColorWizard panel", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders the correction controls, not just a title", async () => {
    const wrapper = mount(ColorWizardVue, { props: { state: makeState() as never } });
    await nextTick();

    const text = wrapper.text();
    expect(text).toContain("Correction Strength");
    expect(text).toContain("Preserve Skin Tones");
    // The component was briefly a 418-byte stub rendering only this label.
    expect(text).not.toBe("Color Wizard");
  });

  it("offers only method values the backend accepts", async () => {
    const wrapper = mount(ColorWizardVue, { props: { state: makeState() as never } });
    await nextTick();

    const legal = legalMethods();
    expect(legal.length).toBeGreaterThan(0);
    // "LAB Contrast" was offered here while METHODS only knows "LAB Enhance",
    // so choosing it silently fell back to Full Auto.
    for (const stale of ["LAB Contrast"]) {
      expect(wrapper.text()).not.toContain(stale);
    }
  });

  it("quick presets never write a method the backend cannot resolve", async () => {
    const state = makeState();
    const wrapper = mount(ColorWizardVue, { props: { state: state as never } });
    await nextTick();

    const legal = legalMethods();
    const buttons = wrapper.findAll("button.fil-cw-preset-btn");
    expect(buttons.length).toBe(4);

    for (const button of buttons) {
      await button.trigger("click");
      await nextTick();
      expect(
        legal,
        `preset wrote method "${state.nodeState.method}", which is not in the contract`,
      ).toContain(state.nodeState.method as string);
    }
  });

  it("presets move temperature and skin preservation together", async () => {
    const state = makeState();
    const wrapper = mount(ColorWizardVue, { props: { state: state as never } });
    await nextTick();

    await wrapper.find("button.fil-cw-preset-btn.warm").trigger("click");
    await nextTick();
    expect(state.nodeState.temperature).toBeGreaterThan(0);
    expect(state.nodeState.preserve_skin).toBe(true);

    await wrapper.find("button.fil-cw-preset-btn.cool").trigger("click");
    await nextTick();
    expect(state.nodeState.temperature).toBeLessThan(0);
    expect(state.nodeState.preserve_skin).toBe(false);
  });
});

describe("ColorWizard section collapse", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  // Both headers used to be unbound FilSections: the ▼ arrow flipped on click
  // while every control underneath stayed put. They fold their own controls now.
  it("folds Method and Adjustments and records it in state.ui", async () => {
    const state = makeState();
    const wrapper = mount(ColorWizardVue, { props: { state: state as never } });

    const headers = wrapper.findAll("button.fil-w-section");
    expect(headers.length).toBe(2);
    for (const header of headers) {
      expect(header.attributes("disabled"), `header "${header.text()}" must be clickable`).toBeUndefined();
    }

    expect(wrapper.find(".fil-combo").exists()).toBe(true);
    const method = headers.find((h) => h.text().includes("Method"));
    expect(method).toBeTruthy();
    await method!.trigger("click");
    await nextTick();
    expect(wrapper.find(".fil-combo").exists()).toBe(false);
    expect(state.ui.collapsed_method).toBe(true);

    expect(wrapper.text()).toContain("Correction Strength");
    const adjust = wrapper.findAll("button.fil-w-section").find((h) => h.text().includes("Adjustments"));
    expect(adjust).toBeTruthy();
    await adjust!.trigger("click");
    await nextTick();
    expect(wrapper.text()).not.toContain("Correction Strength");
    expect(wrapper.text()).not.toContain("Preserve Skin Tones");
    expect(state.ui.collapsed_adjust).toBe(true);
  });
});
