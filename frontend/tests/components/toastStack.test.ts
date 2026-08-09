import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import FilToastStack from "@/components/widgets/FilToastStack.vue";
import { toast, useToastStore } from "@/stores/toastStore";

/**
 * The stack is mounted once at extension setup(), while the store is still
 * empty, and every toast arrives later. Scheduling the auto-dismiss timers
 * only in `onMounted` therefore left all of them running forever — these
 * tests pin the store-driven scheduling that replaced it.
 */
describe("FilToastStack", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  async function mountEmpty() {
    const wrapper = mount(FilToastStack);
    await nextTick();
    return wrapper;
  }

  const count = (w: ReturnType<typeof mount>) => w.findAll(".fil-toast").length;

  it("auto-dismisses a toast pushed after mount", async () => {
    const wrapper = await mountEmpty();
    const store = useToastStore();

    store.success("done", { timeout: 600 });
    await nextTick();
    expect(count(wrapper)).toBe(1);

    vi.advanceTimersByTime(700);
    await nextTick();
    expect(count(wrapper)).toBe(0);
  });

  it("keeps sticky toasts up", async () => {
    const wrapper = await mountEmpty();
    useToastStore().error("stays", { sticky: true });
    await nextTick();

    vi.advanceTimersByTime(30_000);
    await nextTick();
    expect(count(wrapper)).toBe(1);
  });

  it("holds a hovered toast even when another one arrives", async () => {
    const wrapper = await mountEmpty();
    const store = useToastStore();

    store.info("hovered", { timeout: 500 });
    await nextTick();
    await wrapper.find(".fil-toast").trigger("mouseenter");

    // A store change re-runs the scheduler; it must not re-arm the paused one.
    store.warning("later", { timeout: 200 });
    await nextTick();
    vi.advanceTimersByTime(1_000);
    await nextTick();

    expect(count(wrapper)).toBe(1);
    expect(wrapper.find(".fil-toast-text").text()).toBe("hovered");

    await wrapper.find(".fil-toast").trigger("mouseleave");
    vi.advanceTimersByTime(1_000);
    await nextTick();
    expect(count(wrapper)).toBe(0);
  });

  it("drains the overflow queue, timing each item once it becomes visible", async () => {
    const wrapper = await mountEmpty();
    const store = useToastStore();

    for (let i = 1; i <= 6; i++) store.info(`q${i}`, { timeout: 400 });
    await nextTick();
    expect(count(wrapper)).toBe(4); // MAX_VISIBLE

    vi.advanceTimersByTime(500);
    await nextTick();
    expect(count(wrapper)).toBe(2); // the two queued ones promoted

    vi.advanceTimersByTime(500);
    await nextTick();
    expect(count(wrapper)).toBe(0);
  });
});

describe("toast before pinia is active", () => {
  // The settings onChange echo at registration fires before any Vue app has
  // activated pinia; a toast pushed then used to throw `reading '_s'` and
  // took down the whole page load with it.
  it("falls back to the console instead of throwing", () => {
    setActivePinia(undefined);
    const err = vi.spyOn(console, "error").mockImplementation(() => {});
    try {
      expect(() => toast.error("too early for a toast")).not.toThrow();
      expect(err).toHaveBeenCalledOnce();
    } finally {
      err.mockRestore();
    }
  });
});
