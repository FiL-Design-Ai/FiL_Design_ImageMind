import { describe, it, expect, beforeEach } from "vitest";
import { reactive, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import LoraPrompterPanel from "@/components/nodes/LoraPrompterPanel.vue";

function makeState(
  nodeState: Record<string, unknown> = {},
  initialValues: Record<string, unknown> = {}
) {
  const raw = {
    nodeState: { prompt: "", triggers: "", ...nodeState },
    initialValues: { prompt: "", triggers: "", ...initialValues },
    ui: {},
  };
  Object.defineProperty(raw, "node", { value: undefined, enumerable: false, configurable: true });
  return reactive(raw);
}

describe("LoraPrompterPanel.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders empty state when no triggers are present", () => {
    const state = makeState();
    const wrapper = mount(LoraPrompterPanel, { props: { state: state as never } });

    expect(wrapper.find(".fil-lp-empty-triggers").exists()).toBe(true);
    expect(wrapper.findAll(".fil-lp-chip").length).toBe(0);
    expect(wrapper.find("textarea").element.value).toBe("");
  });

  it("renders trigger chips parsed from comma-separated triggers string", () => {
    const state = makeState({ triggers: "cyberpunk, neon city, robotic eye" });
    const wrapper = mount(LoraPrompterPanel, { props: { state: state as never } });

    const chips = wrapper.findAll(".fil-lp-chip");
    expect(chips.length).toBe(3);
    expect(chips[0].text()).toContain("cyberpunk");
    expect(chips[1].text()).toContain("neon city");
    expect(chips[2].text()).toContain("robotic eye");
    expect(wrapper.find(".fil-lp-badge").text()).toBe("3");
  });

  it("toggles trigger into prompt on click and highlights active chip", async () => {
    const state = makeState({ triggers: "cyberpunk, glowing neon", prompt: "a girl walking" });
    const wrapper = mount(LoraPrompterPanel, { props: { state: state as never } });

    const chips = wrapper.findAll(".fil-lp-chip");
    expect(chips[0].classes()).not.toContain("is-active");

    // Click first chip -> insert into prompt
    await chips[0].trigger("click");
    await nextTick();

    expect(state.nodeState.prompt).toBe("cyberpunk, a girl walking");
    expect(chips[0].classes()).toContain("is-active");

    // Click second chip -> insert into prompt
    await chips[1].trigger("click");
    await nextTick();

    expect(state.nodeState.prompt).toBe("glowing neon, cyberpunk, a girl walking");
    expect(chips[1].classes()).toContain("is-active");

    // Click first chip again -> cleanly removes it
    await chips[0].trigger("click");
    await nextTick();

    expect(state.nodeState.prompt).toBe("glowing neon, a girl walking");
    expect(chips[0].classes()).not.toContain("is-active");
  });

  it("addAllTriggers and clearAllTriggers buttons work correctly", async () => {
    const state = makeState({ triggers: "tok1, tok2, tok3", prompt: "base prompt" });
    const wrapper = mount(LoraPrompterPanel, { props: { state: state as never } });

    const actionBtns = wrapper.findAll(".fil-lp-action-btn");
    expect(actionBtns.length).toBe(2);

    // Click "+ All"
    await actionBtns[0].trigger("click");
    await nextTick();

    expect(state.nodeState.prompt).toBe("tok1, tok2, tok3, base prompt");
    const chips = wrapper.findAll(".fil-lp-chip");
    chips.forEach((c) => expect(c.classes()).toContain("is-active"));

    // Click "- Clear"
    await actionBtns[1].trigger("click");
    await nextTick();

    expect(state.nodeState.prompt).toBe("base prompt");
    chips.forEach((c) => expect(c.classes()).not.toContain("is-active"));
  });

  it("reflects manual typing in textarea by updating chip active state reactively", async () => {
    const state = makeState({ triggers: "retro, synthwave", prompt: "ordinary street" });
    const wrapper = mount(LoraPrompterPanel, { props: { state: state as never } });

    const chips = wrapper.findAll(".fil-lp-chip");
    expect(chips[0].classes()).not.toContain("is-active");

    state.nodeState.prompt = "retro, ordinary street";
    await nextTick();

    expect(chips[0].classes()).toContain("is-active");
    expect(chips[1].classes()).not.toContain("is-active");
  });
});
