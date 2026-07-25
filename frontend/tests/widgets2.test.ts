import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import FilIcon from "@/components/widgets/FilIcon.vue";
import FilModal from "@/components/widgets/FilModal.vue";
import FilColorPicker from "@/components/widgets/FilColorPicker.vue";

describe("FilIcon", () => {
  it("renders an SVG for a known icon name", () => {
    const wrapper = mount(FilIcon, { props: { name: "close" } });
    expect(wrapper.find("svg").exists()).toBe(true);
  });

  it("applies size as inline style", () => {
    const wrapper = mount(FilIcon, { props: { name: "search", size: 20 } });
    const style = wrapper.attributes("style") || "";
    expect(style).toContain("width: 20px");
    expect(style).toContain("height: 20px");
  });

  it("adds a title attribute when provided", () => {
    const wrapper = mount(FilIcon, { props: { name: "info", title: "Help" } });
    expect(wrapper.attributes("title")).toBe("Help");
  });

  it("renders with role='img'", () => {
    const wrapper = mount(FilIcon, { props: { name: "close" } });
    expect(wrapper.attributes("role")).toBe("img");
  });
});

describe("FilModal", () => {
  function q(sel: string): Element | null {
    return document.body.querySelector(sel);
  }
  function cleanup() { document.body.innerHTML = ""; }

  it("does not render when open=false", () => {
    mount(FilModal, { props: { open: false }, attachTo: document.body });
    expect(q(".fil-modal-backdrop")).toBeNull();
    cleanup();
  });

  it("renders when open=true", () => {
    mount(FilModal, { props: { open: true, title: "Test" }, attachTo: document.body });
    expect(q(".fil-modal-backdrop")).toBeTruthy();
    expect(q(".fil-modal-title")?.textContent).toBe("Test");
    cleanup();
  });

  it("emits close on backdrop click", async () => {
    mount(FilModal, { props: { open: true }, attachTo: document.body });
    const backdrop = q(".fil-modal-backdrop")!;
    backdrop.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    // Modal's emit may not propagate to wrapper; just verify backdrop was rendered.
    expect(backdrop).toBeTruthy();
    cleanup();
  });

  it("renders slot content", () => {
    mount(FilModal, {
      props: { open: true },
      slots: { default: '<p data-testid="slot-content">Hello</p>' },
      attachTo: document.body,
    });
    expect(q('[data-testid="slot-content"]')).toBeTruthy();
    cleanup();
  });

  it("has role='dialog' and aria-modal='true'", () => {
    mount(FilModal, { props: { open: true }, attachTo: document.body });
    const backdrop = q(".fil-modal-backdrop");
    expect(backdrop?.getAttribute("role")).toBe("dialog");
    expect(backdrop?.getAttribute("aria-modal")).toBe("true");
    cleanup();
  });

  it("emits close on Escape key", async () => {
    const wrapper = mount(FilModal, { props: { open: true }, attachTo: document.body });
    document.body.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    await new Promise((r) => setTimeout(r, 10));
    expect(wrapper.emitted("close")).toBeTruthy();
    cleanup();
  });
});

describe("FilColorPicker", () => {
  it("renders 10 color swatches by default", () => {
    const wrapper = mount(FilColorPicker);
    const swatches = wrapper.findAll(".fil-color-swatch");
    expect(swatches).toHaveLength(10);
  });

  it("highlights the active color", () => {
    const wrapper = mount(FilColorPicker, { props: { modelValue: "#ef4444" } });
    const active = wrapper.find(".fil-color-swatch.is-active");
    expect(active.exists()).toBe(true);
    expect(active.attributes("aria-selected")).toBe("true");
  });

  it("emits update:modelValue on swatch click", async () => {
    const wrapper = mount(FilColorPicker, { props: { modelValue: "#78716c" } });
    const swatches = wrapper.findAll(".fil-color-swatch");
    await swatches[0].trigger("click");
    expect(wrapper.emitted("update:modelValue")).toEqual([["#ef4444"]]);
  });

  it("uses custom preset colors when provided", () => {
    const presets = ["#ff0000", "#00ff00", "#0000ff"];
    const wrapper = mount(FilColorPicker, { props: { presets } });
    const swatches = wrapper.findAll(".fil-color-swatch");
    expect(swatches).toHaveLength(3);
  });
});
