import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import FilButton from "@/components/widgets/FilButton.vue";
import FilSegmented from "@/components/widgets/FilSegmented.vue";
import FilChipGrid from "@/components/widgets/FilChipGrid.vue";
import FilSection from "@/components/widgets/FilSection.vue";
import FilInfo from "@/components/widgets/FilInfo.vue";
import FilStylePicker from "@/components/widgets/FilStylePicker.vue";

describe("FilButton", () => {
  it("emits click when not disabled", async () => {
    const wrapper = mount(FilButton, { props: { label: "Run" } });
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("does not emit click when disabled", async () => {
    const wrapper = mount(FilButton, { props: { label: "Run", disabled: true } });
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeFalsy();
    expect(wrapper.attributes("aria-disabled")).toBe("true");
  });

  it("applies accent variant class", () => {
    const wrapper = mount(FilButton, { props: { label: "OK", variant: "accent" } });
    expect(wrapper.classes()).toContain("fil-w-btn-accent");
  });

  it("shows spinner and disables when loading", async () => {
    const wrapper = mount(FilButton, { props: { label: "Save", loading: true } });
    expect(wrapper.find(".fil-w-btn-spinner").exists()).toBe(true);
    expect(wrapper.attributes("disabled")).toBeDefined();
    expect(wrapper.attributes("aria-disabled")).toBe("true");
  });

  it("does not emit click when loading", async () => {
    const wrapper = mount(FilButton, { props: { label: "Save", loading: true } });
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeFalsy();
  });
});

describe("FilSegmented", () => {
  it("switches value on click and emits update", async () => {
    const wrapper = mount(FilSegmented, {
      props: { options: ["random", "fixed"], modelValue: "random" },
    });
    const buttons = wrapper.findAll("button");
    expect(buttons).toHaveLength(2);
    await buttons[1].trigger("click");
    expect(wrapper.emitted("update:modelValue")).toEqual([["fixed"]]);
  });

  it("preserves selected state via aria-pressed", () => {
    const wrapper = mount(FilSegmented, {
      props: { options: ["a", "b"], modelValue: "b" },
    });
    expect((wrapper.findAll("button")[1]).attributes("aria-pressed")).toBe("true");
  });
});

describe("FilChipGrid", () => {
  it("applies the columns prop via gridTemplateColumns", () => {
    const wrapper = mount(FilChipGrid, {
      props: {
        options: ["a", "b", "c"],
        modelValue: "a",
        columns: 5,
      },
    });
    expect(wrapper.attributes("style") || "").toContain("grid-template-columns: repeat(5, minmax(0, 1fr))");
  });

  it("highlights the active option", () => {
    const wrapper = mount(FilChipGrid, {
      props: { options: ["a", "b"], modelValue: "b" },
    });
    const chips = wrapper.findAll("button.fil-w-chip");
    expect(chips[1].classes()).toContain("active");
  });
});

describe("FilSection", () => {
  it("toggles collapsed state on click", async () => {
    const wrapper = mount(FilSection, {
      props: { title: "Agent", modelValue: false, collapsible: true },
    });
    await wrapper.trigger("click");
    expect(wrapper.emitted("update:modelValue")).toEqual([[true]]);
  });

  it("does not toggle when non-collapsible", async () => {
    const wrapper = mount(FilSection, {
      props: { title: "Static", collapsible: false },
    });
    await wrapper.trigger("click");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });
});

describe("FilInfo", () => {
  it("renders the text and ok attribute", () => {
    const wrapper = mount(FilInfo, { props: { text: "saved", ok: true } });
    expect(wrapper.attributes("data-ok")).toBe("true");
    expect(wrapper.text()).toContain("saved");
  });
});

describe("FilStylePicker", () => {
  const mockStyles = [
    "📷 CATEGORY/Style A",
    "📷 CATEGORY/Style B",
    "🎨 ART/Style C",
  ];

  it("handles single selection mode", async () => {
    const wrapper = mount(FilStylePicker, {
      props: { styles: mockStyles, modelValue: "None", multi: false },
    });
    const tiles = wrapper.findAll(".fil-style-tile");
    expect(tiles).toHaveLength(3);
    await tiles[0].trigger("click");
    expect(wrapper.emitted("update:modelValue")).toEqual([["📷 CATEGORY/Style A"]]);
  });

  it("handles multi-selection mode by toggling styles", async () => {
    const wrapper = mount(FilStylePicker, {
      props: { styles: mockStyles, modelValue: "📷 CATEGORY/Style A", multi: true },
    });
    const tiles = wrapper.findAll(".fil-style-tile");
    // Click 2nd style to add it to selection
    await tiles[1].trigger("click");
    expect(wrapper.emitted("update:modelValue")).toEqual([
      ["📷 CATEGORY/Style A | 📷 CATEGORY/Style B"],
    ]);
  });
});
