import { describe, it, expect, beforeEach } from "vitest";
import { reactive, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import SwitchVue from "@/components/nodes/Switch.vue";

/** Mirrors the state createSyncedNodeState builds — `node` is a non-enumerable
 * own property (see colorWizard.test.ts) so `reactive()` can proxy the rest. */
function makeState(overrides: { nodeState?: Record<string, unknown>; node?: unknown } = {}) {
  const raw = {
    nodeState: { ...overrides.nodeState },
    initialValues: {},
    ui: {} as Record<string, unknown>,
  };
  Object.defineProperty(raw, "node", { value: overrides.node, enumerable: false, configurable: true });
  return reactive(raw);
}

describe("Switch.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("defaults to ON when enable is unset", () => {
    const wrapper = mount(SwitchVue, { props: { state: makeState() as never } });
    const btn = wrapper.find(".fil-switch-btn");
    expect(btn.classes()).toContain("is-on");
    expect(btn.text()).toBe("ON");
  });

  it("renders OFF when nodeState.enable is false", () => {
    const wrapper = mount(SwitchVue, { props: { state: makeState({ nodeState: { enable: false } }) as never } });
    const btn = wrapper.find(".fil-switch-btn");
    expect(btn.classes()).toContain("is-off");
    expect(btn.text()).toBe("OFF");
  });

  it("clicking toggles the button and writes nodeState.enable", async () => {
    const state = makeState({ nodeState: { enable: true } });
    const wrapper = mount(SwitchVue, { props: { state: state as never } });

    await wrapper.find(".fil-switch-btn").trigger("click");
    expect(state.nodeState.enable).toBe(false);
    expect(wrapper.find(".fil-switch-btn").classes()).toContain("is-off");
    expect(wrapper.find(".fil-switch-btn").text()).toBe("OFF");

    await wrapper.find(".fil-switch-btn").trigger("click");
    expect(state.nodeState.enable).toBe(true);
    expect(wrapper.find(".fil-switch-btn").classes()).toContain("is-on");
  });

  it("mirrors a click onto the native enable widget", async () => {
    const widget = { name: "enable", value: true };
    const node = { widgets: [widget] };
    const state = makeState({ nodeState: { enable: true }, node });
    const wrapper = mount(SwitchVue, { props: { state: state as never } });

    await wrapper.find(".fil-switch-btn").trigger("click");
    expect(widget.value).toBe(false);
  });

  it("reaches the native widget on an external nodeState.enable write, not just on a click", async () => {
    // The watcher used to guard with `enable.value !== boolVal`, and that getter
    // reads the very same `nodeState.enable` the watcher fires on — so the guard
    // was always false and the whole widget-sync branch was dead. A click was
    // unaffected, because it goes through the computed's setter, which writes
    // the widget itself; that is why the panel always looked correct while the
    // widget the backend reads could sit on a stale value. The guard compares
    // against the widget now.
    const widget = { name: "enable", value: true };
    const node = { widgets: [widget] };
    const state = makeState({ nodeState: { enable: true }, node });
    const wrapper = mount(SwitchVue, { props: { state: state as never } });

    state.nodeState.enable = false;
    await nextTick();

    expect(wrapper.find(".fil-switch-btn").classes()).toContain("is-off");
    expect(widget.value).toBe(false);
  });

  it("leaves the widget alone when the external write agrees with it", async () => {
    // The guard still has to guard: rewriting an already-correct widget on every
    // state change is how a sync loop starts.
    const widget = { name: "enable", value: false };
    const node = { widgets: [widget] };
    const state = makeState({ nodeState: { enable: true }, node });
    mount(SwitchVue, { props: { state: state as never } });

    let writes = 0;
    Object.defineProperty(widget, "value", {
      get: () => false,
      set: () => { writes += 1; },
    });
    state.nodeState.enable = false;
    await nextTick();

    expect(writes).toBe(0);
  });
});
