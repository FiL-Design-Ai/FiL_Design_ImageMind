import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { reactive, nextTick } from "vue";
import { mount, type VueWrapper } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import DatasetForgeVue from "@/components/nodes/DatasetForge.vue";

function makeState(overrides: { nodeState?: Record<string, unknown>; node?: unknown } = {}) {
  const raw = {
    nodeState: { ...overrides.nodeState },
    initialValues: {},
    ui: {} as Record<string, unknown>,
  };
  Object.defineProperty(raw, "node", { value: overrides.node, enumerable: false, configurable: true });
  return reactive(raw);
}

function segmentedOption(wrapper: VueWrapper, sectionLabel: string, optionText: string) {
  const group = wrapper.findAll(".fil-w-segmented").find((g) => g.text().includes(sectionLabel));
  if (!group) throw new Error(`no segmented control labeled "${sectionLabel}"`);
  const btn = group.findAll("button.fil-w-seg").find((b) => b.text() === optionText);
  if (!btn) throw new Error(`no option "${optionText}" in "${sectionLabel}"`);
  return btn;
}

function textInput(wrapper: VueWrapper, label: string) {
  const row = wrapper.findAll(".fil-w-text").find((r) => r.text().includes(label));
  if (!row) throw new Error(`no text field labeled "${label}"`);
  return row.find<HTMLInputElement>("input.fil-w-text-input");
}

let wrapper: VueWrapper | null = null;
afterEach(() => {
  wrapper?.unmount();
  wrapper = null;
});

describe("DatasetForge folder preview", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("defaults to my_lora/img/10_concept/ with no trigger/class filled in", () => {
    wrapper = mount(DatasetForgeVue, { props: { state: makeState() as never } });
    expect(wrapper.text()).toContain("Will create: my_lora/img/10_concept/");
  });

  it("sanitizes the dataset name the same way the backend does", async () => {
    wrapper = mount(DatasetForgeVue, { props: { state: makeState() as never } });
    await textInput(wrapper, "Dataset name").setValue("My Lora!");
    await nextTick();
    expect(wrapper.text()).toContain("Will create: My_Lora/img/10_concept/");
  });

  it("joins trigger word and class into the concept folder", async () => {
    wrapper = mount(DatasetForgeVue, { props: { state: makeState() as never } });
    await textInput(wrapper, "Trigger word").setValue("ohwx");
    await textInput(wrapper, "Class").setValue("woman");
    await nextTick();
    expect(wrapper.text()).toContain("Will create: my_lora/img/10_ohwx woman/");
  });

  it("drops the img/repeats/concept segment for a flat layout", async () => {
    wrapper = mount(DatasetForgeVue, { props: { state: makeState() as never } });
    const formatHeader = wrapper.findAll(".fil-w-section").find((h) => h.text().includes("File format"));
    await formatHeader!.trigger("click");
    await nextTick();
    await segmentedOption(wrapper, "Layout", "📄 Flat").trigger("click");
    await nextTick();
    expect(wrapper.text()).toContain("Will create: my_lora/");
    expect(wrapper.text()).not.toContain("/img/");
  });
});

describe("DatasetForge caption mode", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("warns to connect a provider when captioning is needed and nothing is wired in", () => {
    wrapper = mount(DatasetForgeVue, { props: { state: makeState() as never } });
    expect(wrapper.text()).toContain("Connect");
    expect(wrapper.text()).toContain("Provider Loader");
  });

  it("drops the warning once a config link is connected", async () => {
    const node = { inputs: [{ name: "config", link: 3 }] };
    wrapper = mount(DatasetForgeVue, { props: { state: makeState({ node }) as never } });
    await nextTick();
    expect(wrapper.text()).not.toContain("Connect");
  });

  it("drops the warning once manual captions are filled in", async () => {
    wrapper = mount(DatasetForgeVue, { props: { state: makeState() as never } });
    const textarea = wrapper.findAll("textarea.fil-w-textarea")[0];
    await textarea.setValue("a photo of ohwx");
    await nextTick();
    expect(wrapper.text()).not.toContain("Connect");
  });

  it("hides language/max-words and caption tuning once mode is 'No LLM'", async () => {
    wrapper = mount(DatasetForgeVue, { props: { state: makeState() as never } });
    expect(wrapper.text()).toContain("Max words");

    await segmentedOption(wrapper, "Mode", "No LLM").trigger("click");
    await nextTick();

    expect(wrapper.text()).not.toContain("Max words");
    expect(wrapper.text()).not.toContain("Caption tuning");
    expect(wrapper.text()).not.toContain("Connect");
  });
});

describe("DatasetForge write-to-disk / technical details", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("toggles dry run", async () => {
    const state = makeState();
    wrapper = mount(DatasetForgeVue, { props: { state: state as never } });
    const writeHeader = wrapper.findAll(".fil-w-section").find((h) => h.text().includes("Write to disk"));
    await writeHeader!.trigger("click");
    await nextTick();
    const dryRunSwitch = wrapper.findAll("button.fil-w-switch").find((b) => b.attributes("aria-label")?.includes("Dry run"));
    expect(dryRunSwitch).toBeTruthy();
    await dryRunSwitch!.trigger("click");
    expect(state.nodeState.dry_run).toBe(true);
  });

  it("keeps Technical details collapsed by default, hiding JPG quality even for jpg format", () => {
    wrapper = mount(DatasetForgeVue, { props: { state: makeState({ nodeState: { image_format: "jpg" } }) as never } });
    expect(wrapper.text()).not.toContain("Bucket step");
    expect(wrapper.text()).not.toContain("JPG quality");
  });

  it("only shows JPG quality once format is jpg, after expanding Technical details", async () => {
    wrapper = mount(DatasetForgeVue, { props: { state: makeState() as never } });
    const techHeader = wrapper.findAll(".fil-w-section").find((h) => h.text().includes("Technical details"));
    expect(techHeader).toBeTruthy();
    await techHeader!.trigger("click");
    await nextTick();

    expect(wrapper.text()).toContain("Bucket step");
    expect(wrapper.text()).not.toContain("JPG quality");

    const formatHeader = wrapper.findAll(".fil-w-section").find((h) => h.text().includes("File format"));
    await formatHeader!.trigger("click");
    await nextTick();

    await segmentedOption(wrapper, "File format", "JPG").trigger("click");
    await nextTick();
    expect(wrapper.text()).toContain("JPG quality");
  });
});

describe("DatasetForge socket-linked fields", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("locks the dataset name field while its input socket is linked", async () => {
    const node = { inputs: [{ name: "dataset_name", link: 5 }] };
    wrapper = mount(DatasetForgeVue, { props: { state: makeState({ node }) as never } });
    await nextTick();
    expect(textInput(wrapper, "Dataset name").attributes("disabled")).toBeDefined();
  });
  // `config` is a real input socket rather than a widget, so it rides
  // `ui.linkVersion` (bumped from the node's onConnectionsChange in dataset.ts)
  // instead of the DOM observers. It used to ride a 300ms interval that ran for
  // the lifetime of the node; this is what has to work in its place.
  it("drops the connect-a-provider hint when a wire lands on config", async () => {
    const node = { inputs: [{ name: "config", link: null as number | null }] };
    const state = makeState({ node });
    wrapper = mount(DatasetForgeVue, { props: { state: state as never } });
    await nextTick();
    expect(wrapper.text()).toContain("Connect");

    node.inputs[0].link = 3;
    state.ui.linkVersion = ((state.ui.linkVersion as number) ?? 0) + 1;
    await nextTick();
    expect(wrapper.text()).not.toContain("Connect");
  });

  // The panel must not leave a timer behind. Two of these nodes on a canvas were
  // two DOM passes a second for as long as the workflow stayed open, whether or
  // not anything was ever wired to them.
  it("installs no polling timer", () => {
    const spy = vi.spyOn(window, "setInterval");
    wrapper = mount(DatasetForgeVue, { props: { state: makeState() as never } });
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });
});

describe("DatasetForge section collapse", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  // The four step sections shipped with `collapsible="false"`: FilSection still
  // drew the ▼ arrow, so the header looked interactive but the click died in
  // toggle(). Every header on the panel has to fold its own fields now.
  it("leaves no section header dead", () => {
    wrapper = mount(DatasetForgeVue, { props: { state: makeState() as never } });
    const headers = wrapper.findAll("button.fil-w-section");
    expect(headers.length).toBe(6);
    for (const header of headers) {
      expect(header.attributes("disabled"), `header "${header.text()}" must be clickable`).toBeUndefined();
    }
  });

  it("folds the identity and write sections and records it in state.ui", async () => {
    const state = makeState();
    wrapper = mount(DatasetForgeVue, { props: { state: state as never } });

    const identity = wrapper.findAll("button.fil-w-section").find((h) => h.text().includes("Who / what is this"));
    expect(identity).toBeTruthy();
    expect(wrapper.text()).toContain("Dataset name");
    await identity!.trigger("click");
    await nextTick();
    expect(wrapper.text()).not.toContain("Dataset name");
    expect(state.ui.collapsed_identity).toBe(true);

    const write = wrapper.findAll("button.fil-w-section").find((h) => h.text().includes("Write to disk"));
    expect(write).toBeTruthy();
    await write!.trigger("click"); // expand write section
    await nextTick();
    expect(wrapper.text()).toContain("Dry run");
    await write!.trigger("click"); // collapse write section
    await nextTick();
    expect(wrapper.text()).not.toContain("Dry run");
    expect(state.ui.collapsed_write).toBe(true);
  });
});
