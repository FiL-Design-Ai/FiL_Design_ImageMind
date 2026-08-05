import { describe, it, expect, beforeEach, vi } from "vitest";
import { reactive, nextTick } from "vue";
import { mount, flushPromises } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import KSamplerPanel from "@/components/nodes/KSamplerPanel.vue";

/**
 * FiLKSampler kept its native ComfyUI widgets until now, and the reason it was
 * allowed to is the reason this file exists: a KSampler panel is only an
 * improvement if it drives the *same* values the stock widgets did. Every test
 * here is about not diverging from the node's schema.
 */

function makeState(overrides: { nodeState?: Record<string, unknown>; node?: unknown } = {}) {
  const raw = {
    nodeState: { ...overrides.nodeState },
    initialValues: {},
    ui: {} as Record<string, unknown>,
  };
  Object.defineProperty(raw, "node", { value: overrides.node, enumerable: false, configurable: true });
  return reactive(raw);
}

/** A node whose sampler list is not the one any literal in the panel could hold. */
function nodeWithSamplers(values: string[]) {
  return {
    widgets: [
      { name: "sampler_name", value: values[0], options: { values } },
      { name: "scheduler", value: "karras", options: { values: ["karras", "sgm_uniform"] } },
    ],
    inputs: [],
  };
}

describe("KSamplerPanel.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("reads the sampler list from the running ComfyUI, not from a literal", () => {
    // Sampler packs add entries; a hardcoded list would hide every sampler the
    // panel had not been told about, which is worse than the plain widget was.
    const node = nodeWithSamplers(["res_2m", "gradient_estimation", "euler"]);
    const wrapper = mount(KSamplerPanel, { props: { state: makeState({ node }) as never } });
    const options = wrapper.findAll("select")[1].findAll("option").map((o) => o.text());
    expect(options).toEqual(["res_2m", "gradient_estimation", "euler"]);
  });

  it("keeps control_after_generate as one of ComfyUI's own four values", () => {
    const wrapper = mount(KSamplerPanel, { props: { state: makeState() as never } });
    const options = wrapper.findAll("select")[0].findAll("option").map((o) => o.text());
    expect(options).toEqual(["fixed", "increment", "decrement", "randomize"]);
  });

  it("starts with the advanced fields folded away", () => {
    const wrapper = mount(KSamplerPanel, { props: { state: makeState() as never } });
    expect(wrapper.text()).toContain("Steps");
    expect(wrapper.text()).not.toContain("Bongmath");
  });

  it("shows eta, bongmath, preview and vae_decode once advanced is opened", async () => {
    const state = makeState();
    const wrapper = mount(KSamplerPanel, { props: { state: state as never } });
    (state.ui as Record<string, unknown>).collapsed_advanced = false;
    await nextTick();
    for (const label of ["Eta", "Bongmath", "Preview", "VAE decode"]) {
      expect(wrapper.text()).toContain(label);
    }
  });

  it("writes an edited value back under the widget's own name", async () => {
    const state = makeState();
    const wrapper = mount(KSamplerPanel, { props: { state: state as never } });
    const stepsInput = wrapper.findAll("input.fil-w-num")[1];
    await stepsInput.trigger("focus");
    await stepsInput.setValue("35");
    await stepsInput.trigger("keydown", { key: "Enter" });
    expect(state.nodeState.steps).toBe(35);
  });

  it("falls back to the schema default rather than NaN for an unreadable value", () => {
    // A workflow saved by an older build can hold a string here; Number("") is
    // 0 and Number("x") is NaN, and either one silently becomes the sampled
    // step count.
    const state = makeState({ nodeState: { steps: "not a number" } });
    const wrapper = mount(KSamplerPanel, { props: { state: state as never } });
    expect((wrapper.findAll("input.fil-w-num")[1].element as HTMLInputElement).value).toBe("20");
  });

  it("writes the seed under its own name, the field the prompt is built from", async () => {
    // The panel's only seed path is the generic numberField, which writes
    // nodeState and lets createSyncedNodeState carry it to the native widget.
    // Its two siblings, HiResFix and OpticScanner, also write the widget by
    // hand; this one does not, so nothing else in the suite covered the seed
    // reaching anything at all. tests/nodeStateMirror.test.ts guards the other
    // half — that the mirror is installed for this module.
    const state = makeState();
    const wrapper = mount(KSamplerPanel, { props: { state: state as never } });
    const seedInput = wrapper.findAll("input.fil-w-num")[0];
    await seedInput.trigger("focus");
    await seedInput.setValue("123456");
    await seedInput.trigger("keydown", { key: "Enter" });
    expect(state.nodeState.seed).toBe(123456);
  });

  // The sampler and scheduler combos were deliberately left without an input
  // socket for a long time (see the comment on KSAMPLER_SOCKET_INPUTS). Now
  // that they have one, the panel has to react to a wire the same way the
  // numeric fields do — an editable combo next to a live link would let the
  // user set a value the graph immediately overwrites.
  it("locks the sampler combo while its input socket carries a link", async () => {
    const node = {
      ...nodeWithSamplers(["euler", "dpmpp_2m"]),
      inputs: [
        { name: "sampler_name", widget: {}, link: 7 },
        { name: "scheduler", widget: {}, link: null },
      ],
    };
    const wrapper = mount(KSamplerPanel, { props: { state: makeState({ node }) as never } });
    // useWidgetSockets reads the links in onMounted, so the lock lands on the
    // render after the first one.
    await nextTick();
    const selects = wrapper.findAll("select");
    // [0] control_after_generate, [1] sampler_name, [2] scheduler.
    expect((selects[1].element as HTMLSelectElement).disabled).toBe(true);
    expect((selects[2].element as HTMLSelectElement).disabled).toBe(false);
  });

  it("leaves both combos editable when nothing is connected", () => {
    const node = nodeWithSamplers(["euler", "dpmpp_2m"]);
    const wrapper = mount(KSamplerPanel, { props: { state: makeState({ node }) as never } });
    const selects = wrapper.findAll("select");
    expect((selects[1].element as HTMLSelectElement).disabled).toBe(false);
    expect((selects[2].element as HTMLSelectElement).disabled).toBe(false);
  });
});

/**
 * Eta / Bongmath grayout. The verdict comes from the backend
 * (`GET /fil_design_imagemind/sampler_options`), the only place that knows
 * which installed samplers actually read the options — the panel must gray
 * the widgets out for samplers that would ignore them, and fail-open (stay
 * enabled) when the server cannot answer.
 *
 * `vi.resetModules()` before every test: the panel caches the fetch promise
 * at MODULE level (ten nodes on a graph fetch once), so a fresh module per
 * test is the only way to control what that one fetch returns.
 */
describe("KSamplerPanel.vue eta/bongmath grayout", () => {
  // tests/setup.ts installs a global `api.fetchApi` that answers `{}` to
  // everything — client.ts prefers it over window.fetch, so the stub has to
  // replace `api`, not `fetch`.
  function stubSamplerOptions(payload: unknown) {
    vi.stubGlobal("api", {
      apiURL: (route: string) => route,
      fetchApi: vi.fn(async () => new Response(JSON.stringify(payload), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      })),
    });
  }

  async function mountPanel(nodeState: Record<string, unknown>) {
    const { default: FreshPanel } = await import("@/components/nodes/KSamplerPanel.vue");
    const state = makeState({ nodeState });
    (state.ui as Record<string, unknown>).collapsed_advanced = false;
    const wrapper = mount(FreshPanel, { props: { state: state as never } });
    await flushPromises();
    await nextTick();
    return { wrapper, state };
  }

  function etaInput(wrapper: ReturnType<typeof mount>) {
    // FilSlider wraps a FilNumberInput, so with the advanced section open the
    // number inputs are: [0] seed, [1] steps, [2] cfg, [3] denoise, [4] eta.
    return wrapper.findAll("input.fil-w-num")[4].element as HTMLInputElement;
  }
  function bongmathSwitch(wrapper: ReturnType<typeof mount>) {
    return wrapper.find("button.fil-w-switch").element as HTMLButtonElement;
  }

  beforeEach(() => {
    vi.resetModules();
    setActivePinia(createPinia());
  });

  it("grays eta and bongmath out for samplers that ignore them", async () => {
    stubSamplerOptions({ eta: ["euler_ancestral", "dpmpp_sde"], bongmath: ["rk_beta"] });
    const { wrapper } = await mountPanel({ sampler_name: "euler" });
    expect(etaInput(wrapper).disabled).toBe(true);
    expect(bongmathSwitch(wrapper).disabled).toBe(true);
  });

  it("keeps both widgets live for samplers that read them", async () => {
    stubSamplerOptions({ eta: ["euler_ancestral", "rk_beta"], bongmath: ["rk_beta"] });
    const { wrapper } = await mountPanel({ sampler_name: "rk_beta" });
    expect(etaInput(wrapper).disabled).toBe(false);
    expect(bongmathSwitch(wrapper).disabled).toBe(false);
  });

  it("reacts when the sampler selection changes", async () => {
    stubSamplerOptions({ eta: ["euler_ancestral"], bongmath: ["rk_beta"] });
    const { wrapper, state } = await mountPanel({ sampler_name: "euler_ancestral" });
    expect(etaInput(wrapper).disabled).toBe(false);
    state.nodeState.sampler_name = "dpmpp_2m";
    await nextTick();
    expect(etaInput(wrapper).disabled).toBe(true);
  });

  it("fails open when the route is unreachable — widgets stay editable", async () => {
    vi.stubGlobal("api", {
      apiURL: (route: string) => route,
      fetchApi: vi.fn(async () => { throw new Error("server gone"); }),
    });
    const { wrapper } = await mountPanel({ sampler_name: "euler" });
    expect(etaInput(wrapper).disabled).toBe(false);
    expect(bongmathSwitch(wrapper).disabled).toBe(false);
  });
});
