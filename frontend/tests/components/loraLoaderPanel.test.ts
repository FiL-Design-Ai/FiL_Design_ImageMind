/**
 * The LoRA panel's two links to the outside: the stack it writes into
 * `lora_list`, and the trigger words it asks the backend for.
 *
 * Both were broken and neither showed up as an error. The panel read the
 * answer's `trigger_words`, which the API sent as `trained_words` — so the 📋
 * button never appeared and "copy all active triggers" always reported an
 * empty clipboard, on every LoRA, forever. Nothing covered this file at all,
 * which is how a plain key mismatch survived a review.
 */
import { describe, it, expect, beforeEach, vi } from "vitest";
import { reactive, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import LoraLoaderPanel from "@/components/nodes/LoraLoaderPanel.vue";

const getJson = vi.fn();
vi.mock("@/api/client", () => ({
  getJson: (...args: unknown[]) => getJson(...args),
}));

interface FakeWidget {
  name: string;
  value: unknown;
}

function makeNode(loraList: string): { widgets: FakeWidget[]; inputs: [] } {
  return {
    widgets: [
      { name: "lora_list", value: loraList },
      { name: "strength_model", value: 1.0 },
      { name: "strength_clip", value: 1.0 },
    ],
    inputs: [],
  };
}

function makeState(node: unknown, loraList: string) {
  const raw = {
    nodeState: { lora_list: loraList } as Record<string, unknown>,
    initialValues: {},
    ui: {} as Record<string, unknown>,
  };
  Object.defineProperty(raw, "node", { value: node, enumerable: false, configurable: true });
  return reactive(raw);
}

/** Answers whichever endpoint is asked, the way the real backend does. */
function backend(triggers: Record<string, string>) {
  return async (url: string) => {
    if (url.includes("/models_list/")) {
      return { models: Object.keys(triggers) };
    }
    const path = decodeURIComponent(new URL(url, "http://x").searchParams.get("path") ?? "");
    return { trigger_words: triggers[path] ?? "" };
  };
}

describe("LoraLoaderPanel.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    getJson.mockReset();
  });

  it("collects the trigger words of the active rows", async () => {
    const writeText = vi.fn();
    vi.stubGlobal("navigator", { clipboard: { writeText } });
    getJson.mockImplementation(
      backend({ "style_v1.safetensors": "neon glow", "cyber_v2.safetensors": "wet asphalt" }),
    );
    const list = "style_v1.safetensors:0.80:0.80\n# cyber_v2.safetensors:1.00:1.00";
    const node = makeNode(list);
    const wrapper = mount(LoraLoaderPanel, { props: { state: makeState(node, list) as never } });

    await nextTick();
    await nextTick();
    await nextTick();

    const copyAll = wrapper
      .findAll(".fil-cycler-actions-bar button")
      .find((b) => b.text().includes("Triggers"))!;
    await copyAll.trigger("click");

    // Only the row that is on, and read under the name the API actually sends.
    expect(
      writeText,
      "nothing reached the clipboard — the panel is reading a field name the API does not send",
    ).toHaveBeenCalledWith("neon glow");
    vi.unstubAllGlobals();
  });

  it("shows the file's own name, and keeps the path where it matters", async () => {
    getJson.mockImplementation(backend({ "Ideogram/Eva/Eva_epoch_10.safetensors": "" }));
    const list = "Ideogram/Eva/Eva_epoch_10.safetensors:1.00:1.00";
    const node = makeNode(list);
    const wrapper = mount(LoraLoaderPanel, { props: { state: makeState(node, list) as never } });

    await nextTick();
    await nextTick();

    const shown = wrapper.find(".fil-cycler-select-wrap").text();
    expect(shown).toContain("Eva_epoch_10");
    expect(shown, "the folders are back in the row").not.toContain("Ideogram");
    expect(shown, "the extension is back in the row").not.toContain(".safetensors");

    // The full path is one hover away, and untouched in what the node runs.
    expect(wrapper.find(".fil-cycler-select-wrap").attributes("title")).toBe(
      "Ideogram/Eva/Eva_epoch_10.safetensors",
    );
    expect(node.widgets.find((w) => w.name === "lora_list")!.value).toBe(
      "Ideogram/Eva/Eva_epoch_10.safetensors:1.00:1.00",
    );
  });

  it("shows one weight, and both only when the saved row has two", async () => {
    getJson.mockImplementation(backend({}));
    const same = "style_v1.safetensors:0.80:0.80";
    const wrapper = mount(LoraLoaderPanel, {
      props: { state: makeState(makeNode(same), same) as never },
    });
    await nextTick();
    expect(wrapper.findAll(".fil-w-numfield")).toHaveLength(1);

    const apart = "style_v1.safetensors:0.80:0.40";
    const second = mount(LoraLoaderPanel, {
      props: { state: makeState(makeNode(apart), apart) as never },
    });
    await nextTick();
    expect(
      second.findAll(".fil-w-numfield"),
      "a row saved with two different weights must open showing both, or the CLIP " +
        "number is applied while nothing on screen says so",
    ).toHaveLength(2);
  });

  it("moves both weights together until they are split", async () => {
    getJson.mockImplementation(backend({}));
    const list = "style_v1.safetensors:0.80:0.80";
    const node = makeNode(list);
    const wrapper = mount(LoraLoaderPanel, { props: { state: makeState(node, list) as never } });
    await nextTick();

    // The field is the pack's own FilNumberInput, so its arrows are what a
    // user reaches for; one step is 0.05.
    await wrapper.find(".fil-w-num-arrow-right").trigger("click");

    expect(node.widgets.find((w) => w.name === "lora_list")!.value).toBe(
      "style_v1.safetensors:0.85:0.85",
    );

    // The separate CLIP weight is asked for from the row's menu now.
    await wrapper.find(".fil-lora-row").trigger("contextmenu");
    await nextTick();
    const splitItem = wrapper
      .findAll(".fil-row-menu button")
      .find((b) => b.text().includes("Separate CLIP weight"))!;
    await splitItem.trigger("click");
    await nextTick();
    const fields = wrapper.findAll(".fil-w-numfield");
    expect(fields).toHaveLength(2);

    await fields[1].find(".fil-w-num-arrow-left").trigger("click");
    expect(node.widgets.find((w) => w.name === "lora_list")!.value).toBe(
      "style_v1.safetensors:0.85:0.80",
    );
  });

  it("keeps the toolbar down to what fits on the node", async () => {
    getJson.mockImplementation(backend({}));
    const list = "style_v1.safetensors:0.80:0.80";
    const wrapper = mount(LoraLoaderPanel, {
      props: { state: makeState(makeNode(list), list) as never },
    });
    await nextTick();

    // Six controls sat here and four fit: "All OFF" was cut in half and
    // "Clear" was off the edge, unreachable without resizing the node. What is
    // left on the bar is the list's own work; the stack's state is the counter
    // below it, and the two rare actions wait behind the more button.
    expect(wrapper.findAll(".fil-cycler-actions-bar button")).toHaveLength(3);
    expect(wrapper.find(".fil-actions-menu").exists()).toBe(false);

    await wrapper.find(".fil-actions-more").trigger("click");
    const menu = wrapper.findAll(".fil-actions-menu button").map((b) => b.text());
    expect(menu).toHaveLength(2);
    expect(menu.join(" ")).toContain("Clear stack");
  });

  it("counts the rows that are on, and flips them all", async () => {
    getJson.mockImplementation(backend({}));
    const list = ["a.safetensors:1.00:1.00", "# b.safetensors:1.00:1.00"].join("\n");
    const node = makeNode(list);
    const wrapper = mount(LoraLoaderPanel, { props: { state: makeState(node, list) as never } });
    await nextTick();

    const count = wrapper.find(".fil-stack-count");
    expect(count.text().replace(/\s+/g, "")).toBe("1/2");

    // Not everything is on, so the first click turns the rest on rather than
    // switching off the one that was.
    await count.trigger("click");
    expect(count.text().replace(/\s+/g, "")).toBe("2/2");
    expect(node.widgets.find((w) => w.name === "lora_list")!.value).toBe(
      ["a.safetensors:1.00:1.00", "b.safetensors:1.00:1.00"].join("\n"),
    );

    await count.trigger("click");
    expect(count.text().replace(/\s+/g, "")).toBe("0/2");
  });

  it("asks about a name once, even when the lookup fails", async () => {
    getJson.mockImplementation(async (url: string) => {
      if (String(url).includes("/models_list/")) return { models: [] };
      throw new Error("backend is down");
    });
    const list = "style_v1.safetensors:0.80:0.80";
    const node = makeNode(list);
    const wrapper = mount(LoraLoaderPanel, { props: { state: makeState(node, list) as never } });

    await nextTick();
    await nextTick();
    await nextTick();

    // The lookup runs from a deep watcher, so an unrecorded name is asked
    // again on every touch of the list — once per slider frame.
    (wrapper.vm as unknown as { loraItems: Array<{ sm: number }> }).loraItems[0].sm = 0.5;
    await nextTick();
    await nextTick();

    const infoCalls = getJson.mock.calls.filter(([url]) => String(url).includes("model_info"));
    expect(infoCalls).toHaveLength(1);
  });

  it("does not send the model list off to Civitai just for opening", async () => {
    getJson.mockImplementation(backend({ "style_v1.safetensors": "neon glow" }));
    const list = "style_v1.safetensors:0.80:0.80";
    const node = makeNode(list);
    mount(LoraLoaderPanel, { props: { state: makeState(node, list) as never } });

    await nextTick();
    await nextTick();
    await nextTick();

    // `fetch=1` is what lets the backend hash the file and call out to
    // civitai.com, and it belongs to the info dialog alone.
    for (const [url] of getJson.mock.calls) {
      expect(String(url)).not.toContain("fetch=1");
    }
  });

  it("keeps a row's off state through a reload", async () => {
    getJson.mockImplementation(backend({}));
    const list = "style_v1.safetensors:0.80:0.80\n# cyber_v2.safetensors:1.00:1.00";
    const node = makeNode(list);
    const wrapper = mount(LoraLoaderPanel, { props: { state: makeState(node, list) as never } });
    await nextTick();

    const rows = wrapper.findAll(".fil-lora-row");
    expect(rows).toHaveLength(2);
    expect(rows[1].classes()).toContain("disabled");
    expect(rows[1].text()).not.toContain("#");
  });
});
