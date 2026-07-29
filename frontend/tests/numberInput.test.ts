/**
 * FilNumberInput — the widget that evaluates what you type.
 *
 * It shipped with no tests at all, which for a field that runs its input
 * through `new Function` is the wrong place to have none. Everything here is
 * behaviour a user can reach with the keyboard.
 */
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import FilNumberInput from "@/components/widgets/FilNumberInput.vue";

function field(props: Record<string, unknown> = {}) {
  const wrapper = mount(FilNumberInput, {
    props: { modelValue: 1024, ...props },
  });
  return { wrapper, input: wrapper.find("input") };
}

async function type(wrapper: ReturnType<typeof mount>, value: string) {
  const input = wrapper.find("input");
  await input.trigger("focus");
  await input.setValue(value);
  await input.trigger("keydown", { key: "Enter" });
  return wrapper.props("modelValue" as never);
}

describe("FilNumberInput arithmetic", () => {
  it("evaluates a sum, which is the documented reason it is not a number input", async () => {
    const { wrapper } = field({ modelValue: 1024, max: 8192 });
    await type(wrapper, "1024+64");
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([1088]);
  });

  it("evaluates parentheses and precedence", async () => {
    const { wrapper } = field({ modelValue: 0, max: 8192 });
    await type(wrapper, "(2+3)*4");
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([20]);
  });

  it("treats ^ as exponentiation, the way its own comment promises", async () => {
    // Regression guard for the 2026-07-29 audit finding: the input was
    // validated against `cleaned.replace(/\^/g, "**")` but evaluated as
    // `cleaned`, so `^` reached JavaScript unchanged — where it is bitwise
    // XOR. `2^10` returned 8 instead of 1024, silently, in a field people use
    // for image dimensions.
    const { wrapper } = field({ modelValue: 0, max: 100000 });
    await type(wrapper, "2^10");
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([1024]);
  });

  it("rejects anything that is not arithmetic and keeps the old value", async () => {
    const { wrapper } = field({ modelValue: 512 });
    await type(wrapper, "window.location");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    expect(wrapper.find("input").element.value).toBe("512");
  });

  it("rejects a division by zero rather than committing Infinity", async () => {
    const { wrapper } = field({ modelValue: 512 });
    await type(wrapper, "1/0");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });

  it("clamps to max and min instead of accepting an out-of-range result", async () => {
    const high = field({ modelValue: 64, min: 8, max: 2048 });
    await type(high.wrapper, "9999");
    expect(high.wrapper.emitted("update:modelValue")?.at(-1)).toEqual([2048]);

    const low = field({ modelValue: 64, min: 8, max: 2048 });
    await type(low.wrapper, "1");
    expect(low.wrapper.emitted("update:modelValue")?.at(-1)).toEqual([8]);
  });
});

describe("FilNumberInput keyboard", () => {
  it("steps by `step` on ArrowUp and ArrowDown", async () => {
    const { wrapper, input } = field({ modelValue: 512, step: 64, max: 2048, min: 0 });
    await input.trigger("keydown", { key: "ArrowUp" });
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([576]);
    await input.trigger("keydown", { key: "ArrowDown" });
    await input.trigger("keydown", { key: "ArrowDown" });
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([448]);
  });

  it("steps ten times further with Shift held", async () => {
    const { wrapper, input } = field({ modelValue: 512, step: 8, max: 4096, min: 0 });
    await input.trigger("keydown", { key: "ArrowUp", shiftKey: true });
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([592]);
  });

  it("stops stepping at the boundary", async () => {
    const { wrapper, input } = field({ modelValue: 2040, step: 64, max: 2048, min: 0 });
    await input.trigger("keydown", { key: "ArrowUp" });
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([2048]);
  });

  it("reverts the text on Escape without emitting", async () => {
    const { wrapper, input } = field({ modelValue: 512 });
    await input.trigger("focus");
    await input.setValue("777");
    await input.trigger("keydown", { key: "Escape" });
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    expect(input.element.value).toBe("512");
  });

  it("commits on blur, not only on Enter", async () => {
    const { wrapper, input } = field({ modelValue: 512, max: 4096 });
    await input.trigger("focus");
    await input.setValue("640");
    await input.trigger("blur");
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([640]);
  });
});

describe("FilNumberInput display", () => {
  it("follows the upstream value while unfocused — workflow load, undo", async () => {
    const { wrapper, input } = field({ modelValue: 512 });
    await wrapper.setProps({ modelValue: 768 });
    expect(input.element.value).toBe("768");
  });

  it("leaves half-typed text alone while the field has focus", async () => {
    const { wrapper, input } = field({ modelValue: 512 });
    await input.trigger("focus");
    await input.setValue("102");
    await wrapper.setProps({ modelValue: 768 });
    expect(input.element.value).toBe("102");
  });
});
