import { describe, it, expect, vi } from "vitest";
import { ref, nextTick, defineComponent, h } from "vue";
import { mount } from "@vue/test-utils";
import { useAssist } from "@/composables/useAssist";

describe("useAssist Undo / Redo History", () => {
  it("tracks text changes and enables undo/redo appropriately", async () => {
    vi.useFakeTimers();
    const text = ref("initial text");
    const editable = ref(true);

    let assistHook!: ReturnType<typeof useAssist>;
    const TestComp = defineComponent({
      setup() {
        assistHook = useAssist(() => undefined, text, editable);
        return () => h("div");
      },
    });

    const wrapper = mount(TestComp);

    expect(assistHook.canUndo.value).toBe(false);
    expect(assistHook.canRedo.value).toBe(false);

    // Typing new text
    text.value = "step 1 text";
    await nextTick();
    vi.advanceTimersByTime(500);
    await nextTick();

    expect(assistHook.canUndo.value).toBe(true);
    expect(assistHook.canRedo.value).toBe(false);

    // Typing another text
    text.value = "step 2 text";
    await nextTick();
    vi.advanceTimersByTime(500);
    await nextTick();

    expect(assistHook.canUndo.value).toBe(true);
    expect(assistHook.canRedo.value).toBe(false);

    // Undo to step 1
    assistHook.undo();
    await nextTick();
    expect(text.value).toBe("step 1 text");
    expect(assistHook.canUndo.value).toBe(true);
    expect(assistHook.canRedo.value).toBe(true);

    // Undo to initial
    assistHook.undo();
    await nextTick();
    expect(text.value).toBe("initial text");
    expect(assistHook.canUndo.value).toBe(false);
    expect(assistHook.canRedo.value).toBe(true);

    // Redo to step 1
    assistHook.redo();
    await nextTick();
    expect(text.value).toBe("step 1 text");
    expect(assistHook.canUndo.value).toBe(true);
    expect(assistHook.canRedo.value).toBe(true);

    // Redo to step 2
    assistHook.redo();
    await nextTick();
    expect(text.value).toBe("step 2 text");
    expect(assistHook.canUndo.value).toBe(true);
    expect(assistHook.canRedo.value).toBe(false);

    wrapper.unmount();
    vi.useRealTimers();
  });

  it("disables undo/redo when editable is false", async () => {
    vi.useFakeTimers();
    const text = ref("test");
    const editable = ref(true);

    let assistHook!: ReturnType<typeof useAssist>;
    const TestComp = defineComponent({
      setup() {
        assistHook = useAssist(() => undefined, text, editable);
        return () => h("div");
      },
    });

    const wrapper = mount(TestComp);

    text.value = "modified";
    await nextTick();
    vi.advanceTimersByTime(500);
    await nextTick();

    expect(assistHook.canUndo.value).toBe(true);

    // When linked, editable becomes false
    editable.value = false;
    await nextTick();
    expect(assistHook.canUndo.value).toBe(false);

    // Calling undo while not editable does nothing
    assistHook.undo();
    await nextTick();
    expect(text.value).toBe("modified");

    wrapper.unmount();
    vi.useRealTimers();
  });
});
