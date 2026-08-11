/**
 * Widgets that had no test of their own before the 2026-07-29 audit:
 * FilSelect, FilTextArea, FilNodeShell, FilColorPicker.
 *
 * Continues the numbering of widgets.test.ts / widgets2.test.ts rather than
 * adding four one-describe files.
 */
import { describe, it, expect } from "vitest";
import { markRaw, reactive } from "vue";
import { mount } from "@vue/test-utils";
import FilSelect from "@/components/widgets/FilSelect.vue";
import FilTextArea from "@/components/widgets/FilTextArea.vue";
import FilNodeShell from "@/components/widgets/FilNodeShell.vue";
import FilColorPicker from "@/components/widgets/FilColorPicker.vue";

describe("FilSelect", () => {
  it("renders one option per entry and marks the current one", () => {
    const wrapper = mount(FilSelect, {
      props: { options: ["en", "ru", "de"], modelValue: "ru" },
    });
    const options = wrapper.findAll("option");
    expect(options.map((o) => o.attributes("value"))).toEqual(["en", "ru", "de"]);
    expect((wrapper.find("select").element as HTMLSelectElement).value).toBe("ru");
  });

  it("emits the chosen value on change", async () => {
    const wrapper = mount(FilSelect, {
      props: { options: ["en", "ru"], modelValue: "en" },
    });
    await wrapper.find("select").setValue("ru");
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["ru"]);
  });

  it("renders an empty but usable control when there are no options", () => {
    const wrapper = mount(FilSelect, { props: { options: [], modelValue: "" } });
    expect(wrapper.find("select").exists()).toBe(true);
    expect(wrapper.findAll("option")).toHaveLength(0);
  });

  it("does not accept input when disabled", () => {
    const wrapper = mount(FilSelect, {
      props: { options: ["en"], modelValue: "en", disabled: true },
    });
    expect(wrapper.find("select").attributes("disabled")).toBeDefined();
  });

  it("labels itself for a screen reader from the visible label", () => {
    const wrapper = mount(FilSelect, {
      props: { options: ["en"], modelValue: "en", label: "Language" },
    });
    expect(wrapper.find("select").attributes("aria-label")).toBe("Language");
  });

  it("keeps a value that is not in the option list rather than silently changing it", () => {
    // A workflow saved against an older option list must not have its stored
    // value rewritten just because the list moved on.
    const wrapper = mount(FilSelect, {
      props: { options: ["en", "ru"], modelValue: "kl" as "en" },
    });
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });

  it("shows the full option text by default, with no title", () => {
    const wrapper = mount(FilSelect, {
      props: { options: ["Helios 44-2 (Vintage)"], modelValue: "Helios 44-2 (Vintage)" },
    });
    const option = wrapper.find("option");
    expect(option.text()).toBe("Helios 44-2 (Vintage)");
    expect(option.attributes("title")).toBeUndefined();
    expect(wrapper.find("select").attributes("title")).toBeUndefined();
  });

  it("with hintFromParens on, moves a trailing (Note) out of the text and into a title", () => {
    const wrapper = mount(FilSelect, {
      props: {
        options: ["Helios 44-2 (Vintage)", "Sony Venice 2"],
        modelValue: "Helios 44-2 (Vintage)",
        hintFromParens: true,
      },
    });
    const options = wrapper.findAll("option");
    // Value sent to the backend is untouched — only the displayed text changes.
    expect(options.map((o) => o.attributes("value"))).toEqual([
      "Helios 44-2 (Vintage)",
      "Sony Venice 2",
    ]);
    expect(options[0].text()).toBe("Helios 44-2");
    expect(options[0].attributes("title")).toBe("Vintage");
    // No trailing "(...)" — left as-is, with no title to add.
    expect(options[1].text()).toBe("Sony Venice 2");
    expect(options[1].attributes("title")).toBeUndefined();
    // The closed box carries the current value's hint too, one hover away.
    expect(wrapper.find("select").attributes("title")).toBe("Vintage");
  });
});

describe("FilTextArea", () => {
  it("emits what was typed", async () => {
    const wrapper = mount(FilTextArea, { props: { modelValue: "" } });
    await wrapper.find("textarea").setValue("a quiet portrait");
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["a quiet portrait"]);
  });

  it("is a bare textarea at the root when it has no label", () => {
    // OpticScanner takes a ref to this component and reaches the real element
    // through `$el` to anchor its input sockets — documented in the component.
    const wrapper = mount(FilTextArea, { props: { modelValue: "" } });
    expect(wrapper.element.tagName).toBe("TEXTAREA");
  });

  it("wraps itself in a labelled row when given a label", () => {
    const wrapper = mount(FilTextArea, { props: { modelValue: "", label: "Prompt" } });
    expect(wrapper.find("label").text()).toBe("Prompt");
    expect(wrapper.find("textarea").exists()).toBe(true);
  });

  it("becomes read-only when the value is driven by a connected socket", () => {
    const wrapper = mount(FilTextArea, { props: { modelValue: "from upstream", linked: true } });
    expect(wrapper.find("textarea").attributes("readonly")).toBeDefined();
  });

  it("honours an explicit row count and the default of two", () => {
    expect(mount(FilTextArea, { props: { modelValue: "" } }).find("textarea").attributes("rows")).toBe("2");
    expect(
      mount(FilTextArea, { props: { modelValue: "", rows: 6 } }).find("textarea").attributes("rows"),
    ).toBe("6");
  });
});

describe("FilNodeShell", () => {
  // The shell takes the node body as a prop and renders it — it has no slot.
  // `domWidgetHost.ts` mounts one of these per node.
  //
  // markRaw because a component definition passed through a reactive prop gets
  // proxied, which Vue warns about; the real caller hands over an imported
  // component, which is already raw.
  const body = markRaw({
    props: { state: { type: Object, required: true } },
    template: "<p class='body'>{{ state.label }}</p>",
  });

  it("renders the node body it was handed", () => {
    const wrapper = mount(FilNodeShell, {
      props: { root: body, state: { label: "node body" } },
    });
    expect(wrapper.find("p.body").text()).toBe("node body");
  });

  it("passes the live state object through, so a merge into it reaches the body", async () => {
    // The object must arrive by reference, not as a copy: `stateBridge.ts`
    // merges a saved workflow's values into this same reactive object with
    // Object.assign precisely because replacing it would cut the body off from
    // its own state. `reactive` here is what domWidgetHost really hands over.
    const state = reactive({ label: "before" });
    const wrapper = mount(FilNodeShell, {
      props: { root: body, state },
    });
    Object.assign(state, { label: "after" });
    await wrapper.vm.$nextTick();
    expect(wrapper.find("p.body").text()).toBe("after");
  });
});

describe("FilColorPicker", () => {
  const hexField = (w: ReturnType<typeof mount>) => w.find<HTMLInputElement>(".fil-cp-hex-input");

  it("emits the preset that was clicked", async () => {
    const wrapper = mount(FilColorPicker, { props: { modelValue: "#78716c" } });
    const swatches = wrapper.findAll(".fil-color-swatch");
    expect(swatches).toHaveLength(10);
    await swatches[0].trigger("click");
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["#ef4444"]);
  });

  it("marks the active preset for a screen reader, not just visually", () => {
    const wrapper = mount(FilColorPicker, { props: { modelValue: "#22c55e" } });
    const active = wrapper.findAll(".fil-color-swatch").filter((b) => b.attributes("aria-selected") === "true");
    expect(active).toHaveLength(1);
    expect(active[0].attributes("aria-label")).toBe("#22c55e");
  });

  it("uses a caller-supplied preset list instead of the built-in one", () => {
    const wrapper = mount(FilColorPicker, {
      props: { modelValue: "#000000", presets: ["#111111", "#222222"] },
    });
    expect(wrapper.findAll(".fil-color-swatch").map((b) => b.attributes("aria-label"))).toEqual([
      "#111111",
      "#222222",
    ]);
  });

  it("survives a hex round-trip without drifting the colour", () => {
    // hex -> hsv -> hex is where a rounding mistake shows up. The default
    // #78716c is a low-saturation grey, the least forgiving case; pure black
    // and white pin the ends where saturation and value collapse to zero.
    for (const hex of ["#78716c", "#ef4444", "#22c55e", "#3b82f6", "#ffffff", "#000000"]) {
      const wrapper = mount(FilColorPicker, { props: { modelValue: hex } });
      expect(hexField(wrapper).element.value.toLowerCase(), `round-trip of ${hex}`).toBe(hex);
      wrapper.unmount();
    }
  });

  it("reverts an unparseable hex instead of committing a broken colour", async () => {
    const wrapper = mount(FilColorPicker, { props: { modelValue: "#78716c" } });
    const input = hexField(wrapper);
    await input.setValue("not-a-colour");
    await input.trigger("blur");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    expect(input.element.value.toLowerCase()).toBe("#78716c");
  });

  it("accepts a hex typed without the leading hash", async () => {
    const wrapper = mount(FilColorPicker, { props: { modelValue: "#78716c" } });
    const input = hexField(wrapper);
    await input.setValue("22c55e");
    await input.trigger("blur");
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["#22c55e"]);
  });

  it("accepts three-digit shorthand and expands it", async () => {
    // `#f00` is what people type from habit. It used to revert silently, which
    // reads as a dead field rather than as rejected input.
    const wrapper = mount(FilColorPicker, { props: { modelValue: "#78716c" } });
    const input = hexField(wrapper);
    await input.setValue("#f00");
    await input.trigger("blur");
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["#ff0000"]);
    expect(input.element.value.toLowerCase()).toBe("#ff0000");
  });

  it("accepts shorthand without the leading hash too", async () => {
    const wrapper = mount(FilColorPicker, { props: { modelValue: "#78716c" } });
    const input = hexField(wrapper);
    await input.setValue("0f0");
    await input.trigger("blur");
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["#00ff00"]);
  });

  it("still rejects lengths that are neither three nor six", async () => {
    // Widening the regex must not turn it into "anything hex-ish goes" —
    // `#ff00` is a typo, and committing some guess from it would be worse than
    // reverting.
    const wrapper = mount(FilColorPicker, { props: { modelValue: "#78716c" } });
    const input = hexField(wrapper);
    for (const bad of ["#ff00", "#f", "#fffffff"]) {
      await input.setValue(bad);
      await input.trigger("blur");
      expect(wrapper.emitted("update:modelValue"), `rejects ${bad}`).toBeUndefined();
      expect(input.element.value.toLowerCase()).toBe("#78716c");
    }
  });
});
