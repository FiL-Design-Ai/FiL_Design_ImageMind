/**
 * The transmitter's panel — the one surface the wireless feature has.
 *
 * These mount it over the shared host fake, so the channels it lists come from
 * a graph the pack's own scanner walked, not from props a test handed it. That
 * is the whole point: the panel's job is to report what the graph says, and a
 * test that fed it a ready-made list would prove nothing about that.
 */
import { describe, it, expect, afterEach, beforeEach } from "vitest";
import { reactive, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import ChannelPanel from "@/components/nodes/ChannelPanel.vue";
import { createGraph, createNode, slot, type FakeNode } from "../fakes/comfyHost";
import { invalidateWirelessPlan, subscribeInput } from "@/nodes2/wireless";
import { _resetWirelessMemory, noteChannelPairs, pairedInputFor } from "@/stores/wirelessMemory";

function transmitter(id: number, types: string[] = ["MODEL"]): FakeNode {
  return createNode({
    id,
    comfyClass: "FiLChannel",
    inputs: types.map((type, i) => ({ ...slot(`value.value${i}`, type), label: `value${i}` })),
  });
}

function loader(id: number, type = "MODEL", comfyClass = "CheckpointLoaderSimple"): FakeNode {
  return createNode({ id, comfyClass, outputs: [slot(type, type)] });
}

/**
 * The panel reads the plan in `onMounted` and Vue renders on the next tick, so
 * every mount here waits for it — asserting straight after `mount()` sees the
 * empty first paint and nothing else.
 */
interface PanelState {
  ui: { refresh?: () => void; promptAmbiguity?: (slot: number) => void };
}

async function panelFor(node: FakeNode): Promise<ReturnType<typeof mount>> {
  const { wrapper } = await panelWithState(node);
  return wrapper;
}

/** Same as `panelFor`, but also hands back `state` — for tests that drive `state.ui` directly. */
async function panelWithState(node: FakeNode): Promise<{ wrapper: ReturnType<typeof mount>; state: PanelState }> {
  const raw = { nodeState: {}, initialValues: {}, ui: {} as Record<string, unknown> };
  Object.defineProperty(raw, "node", { value: node, enumerable: false, configurable: true });
  const state = reactive(raw) as unknown as PanelState;
  const wrapper = mount(ChannelPanel, { props: { state: state as never } });
  await nextTick();
  return { wrapper, state };
}

/** Source → transmitter → one receiver: the smallest graph with a live channel. */
function scene(): { ch: FakeNode; ks: FakeNode } {
  const src = loader(1);
  const ch = transmitter(2);
  const ks = createNode({ id: 3, comfyClass: "KSampler", inputs: [slot("model", "MODEL")] });
  ks.title = "Sampler";
  createGraph([src, ch, ks]);
  src.connect!(0, ch, 0);
  return { ch, ks };
}

/**
 * The target list lives inside `FilModal`, which Teleports its body to
 * `document.body` — so it is never under the wrapper element, and every
 * assertion about it has to go through the document (same as
 * `helpPopup.test.ts`).
 */
const modal = () => document.body;

describe("ChannelPanel.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    invalidateWirelessPlan();
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("says what to do when nothing is plugged in yet", async () => {
    const ch = transmitter(2);
    createGraph([ch]);
    const wrapper = await panelFor(ch);

    expect(wrapper.text()).toContain("every wired input becomes its own channel");
    expect(wrapper.findAll(".fil-channel-row")).toHaveLength(0);
  });

  it("lists one row per wired input, with the count of inputs it feeds", async () => {
    const { ch } = scene();
    const wrapper = await panelFor(ch);

    const rows = wrapper.findAll(".fil-channel-row");
    expect(rows).toHaveLength(1);
    expect(rows[0].text()).toContain("MODEL");
    expect(wrapper.find(".fil-channel-count").text()).toBe("1");
  });

  it("gives a wired socket the real type instead of the flat wildcard colour", async () => {
    const { ch } = scene();
    // `transmitter()` pre-sets the slot's declared type for convenience — the
    // real node always starts at ANY (`"*"`), so reset it to match before
    // checking that the panel is the one colouring it.
    ch.inputs[0].type = "*";

    await panelFor(ch);

    // Both render paths colour a slot from `type`, and "*" is the one value
    // that always renders flat — see `slotColors.ts`.
    expect(ch.inputs[0].type).toBe("MODEL");
  });

  it("shows only its own channels, not another transmitter's", async () => {
    const src = loader(1);
    const mine = transmitter(2);
    const theirs = transmitter(3, ["VAE"]);
    const vae = loader(4, "VAE", "VAELoader");
    createGraph([src, mine, theirs, vae]);
    src.connect!(0, mine, 0);
    vae.connect!(0, theirs, 0);

    const wrapper = await panelFor(mine);
    expect(wrapper.findAll(".fil-channel-row")).toHaveLength(1);
    expect(wrapper.text()).toContain("MODEL");
    expect(wrapper.text()).not.toContain("VAE");
  });

  it("the gear opens the target list, ticked where the channel already lands", async () => {
    const { ch } = scene();
    const wrapper = await panelFor(ch);

    await wrapper.find(".fil-channel-gear").trigger("click");
    await nextTick();

    const targets = modal().querySelectorAll(".fil-channel-target");
    expect(targets).toHaveLength(1);
    expect(targets[0].textContent).toContain("Sampler");
    expect(modal().querySelector("button.fil-w-switch")?.getAttribute("aria-checked")).toBe("true");
  });

  it("unticking a target is remembered on the receiving node", async () => {
    const { ch, ks } = scene();
    const wrapper = await panelFor(ch);

    await wrapper.find(".fil-channel-gear").trigger("click");
    await nextTick();
    (modal().querySelector("button.fil-w-switch") as HTMLElement).click();
    await nextTick();

    // Written on the receiver, keyed by input name — see wireless/subscriptions.ts.
    expect(ks.properties.fil_wireless).toEqual({ blocked: { model: ["MODEL"] } });
    expect(modal().querySelector("button.fil-w-switch")?.getAttribute("aria-checked")).toBe("false");
    expect(wrapper.find(".fil-channel-count").text()).toBe("0");
  });

  it("explains a target it cannot offer rather than dropping it from the list", async () => {
    const src = loader(1);
    const ch = transmitter(2);
    const ks = createNode({ id: 3, comfyClass: "KSampler", inputs: [slot("model", "MODEL")] });
    const other = loader(5, "MODEL", "UNETLoader");
    createGraph([src, ch, ks, other]);
    src.connect!(0, ch, 0);
    other.connect!(0, ks, 0); // the user's own wire already feeds that input

    const wrapper = await panelFor(ch);
    await wrapper.find(".fil-channel-gear").trigger("click");
    await nextTick();

    expect(modal().querySelector(".fil-channel-target-reason")?.textContent).toContain("already wired");
    expect(modal().querySelector("button.fil-w-switch")).toBeNull();
  });

  /**
   * `channel.ts` never calls into this component directly — it leaves a note
   * on the plain node object (`_filPendingAmbiguityChecks`), because it can
   * fire before this async component has mounted. These drive that same note,
   * the way `channel.ts` writes it, and let `state.ui.refresh()` (the one
   * call `channel.ts` *does* make unconditionally) drain it — never by calling
   * a component-internal function directly.
   */
  describe("draining a pending ambiguity check", () => {
    function flag(node: FakeNode, ...slots: number[]): void {
      (node as unknown as { _filPendingAmbiguityChecks?: number[] })._filPendingAmbiguityChecks = slots;
    }

    it("opens the target list once refresh runs, for a check queued before mount", async () => {
      // Two MODEL channels: rule 3 — neither auto-wires, so plugging the second
      // one in is exactly the moment a user needs to be asked which one wins.
      // Queuing the flag *before* `panelFor` mounts reproduces the live gap
      // this whole mechanism exists for: a wire drawn in the same tick the
      // node was created, before the async panel has had a chance to mount at
      // all — confirmed on a real ComfyUI page, not assumed.
      const srcA = loader(1);
      const chA = transmitter(2);
      const srcB = loader(3);
      const chB = transmitter(4);
      const ks = createNode({ id: 5, comfyClass: "KSampler", inputs: [slot("model", "MODEL")] });
      ks.title = "Sampler";
      createGraph([srcA, chA, srcB, chB, ks]);
      srcA.connect!(0, chA, 0);
      srcB.connect!(0, chB, 0);
      flag(chB, 0); // what channel.ts would have already written by the time this mounts

      await panelFor(chB); // refresh() runs in onMounted — no separate trigger needed

      expect(modal().querySelectorAll(".fil-channel-target")).toHaveLength(1);
      expect(modal().querySelector(".fil-channel-target")?.textContent).toContain("Sampler");
    });

    it("opens it from a later poll too, once the check is queued after mount", async () => {
      const srcA = loader(1);
      const chA = transmitter(2);
      const srcB = loader(3);
      const chB = transmitter(4);
      const ks = createNode({ id: 5, comfyClass: "KSampler", inputs: [slot("model", "MODEL")] });
      ks.title = "Sampler";
      createGraph([srcA, chA, srcB, chB, ks]);
      srcA.connect!(0, chA, 0);

      const { state } = await panelWithState(chB);
      expect(modal().querySelector(".fil-channel-target")).toBeNull(); // not open yet

      srcB.connect!(0, chB, 0); // the wire channel.ts would have just seen land
      flag(chB, 0);
      state.ui.refresh?.(); // the one call channel.ts actually makes
      await nextTick();

      expect(modal().querySelectorAll(".fil-channel-target")).toHaveLength(1);
    });

    it("consumes the queue even when nothing turns out ambiguous", async () => {
      const { ch } = scene(); // the one-channel, one-receiver case — never ambiguous
      const { state } = await panelWithState(ch);

      flag(ch, 0);
      state.ui.refresh?.();
      await nextTick();

      expect(modal().querySelector(".fil-channel-target")).toBeNull();
      expect((ch as unknown as { _filPendingAmbiguityChecks?: number[] })._filPendingAmbiguityChecks).toEqual([]);
    });

    it("does nothing for a queued slot that is not a live channel", async () => {
      const ch = transmitter(2); // nothing plugged in
      createGraph([ch]);
      const { state } = await panelWithState(ch);

      flag(ch, 0);
      expect(() => state.ui.refresh?.()).not.toThrow();
      await nextTick();
      expect(modal().querySelector(".fil-channel-target")).toBeNull();
    });
  });

  /**
   * The cluster modal — rule 7's shape (a KSampler's `positive`/`negative`,
   * both bare CONDITIONING) gets one screen for all the colliding inputs
   * instead of a per-channel question. Driven through the same pending note
   * `channel.ts` writes, the way the drain tests above do.
   */
  describe("the cluster modal", () => {
    function flag(node: FakeNode, ...slots: number[]): void {
      (node as unknown as { _filPendingAmbiguityChecks?: number[] })._filPendingAmbiguityChecks = slots;
    }

    /** Two unnamed CONDITIONING channels, one sampler with both inputs free. */
    function conditioningScene(): { chB: FakeNode; ks: FakeNode } {
      const srcA = loader(1, "CONDITIONING", "CLIPTextEncode");
      const chA = transmitter(2, ["CONDITIONING"]);
      const srcB = loader(3, "CONDITIONING", "CLIPTextEncode");
      const chB = transmitter(4, ["CONDITIONING"]);
      const ks = createNode({
        id: 5,
        comfyClass: "KSampler",
        inputs: [slot("positive", "CONDITIONING"), slot("negative", "CONDITIONING")],
      });
      ks.title = "Sampler";
      createGraph([srcA, chA, srcB, chB, ks]);
      srcA.connect!(0, chA, 0);
      srcB.connect!(0, chB, 0);
      return { chB, ks };
    }

    function chips(row: Element): HTMLButtonElement[] {
      return Array.from(row.querySelectorAll<HTMLButtonElement>(".fil-channel-chip"));
    }

    beforeEach(() => {
      _resetWirelessMemory();
    });

    it("opens for a same-type collision, one row per input, one chip per channel", async () => {
      const { chB } = conditioningScene();
      flag(chB, 0);
      await panelFor(chB);

      const rows = modal().querySelectorAll(".fil-channel-cluster-row");
      expect(rows).toHaveLength(2);
      expect(rows[0].textContent).toContain("positive");
      expect(rows[1].textContent).toContain("negative");
      expect(chips(rows[0])).toHaveLength(2);
      expect(chips(rows[1])).toHaveLength(2);
      expect(modal().querySelector(".fil-modal-title")?.textContent).toContain("Sampler");
      // Nothing picked yet, so the confirm has nothing to do.
      expect((modal().querySelector(".fil-channel-cluster-footer button") as HTMLButtonElement).disabled).toBe(true);
      // The per-channel target list stayed closed — this shape gets one screen.
      expect(modal().querySelector(".fil-channel-target")).toBeNull();
    });

    it("confirming subscribes every chosen input and remembers the pairs", async () => {
      const { chB, ks } = conditioningScene();
      flag(chB, 0);
      await panelFor(chB);

      chips(modal().querySelectorAll(".fil-channel-cluster-row")[0])[0].click(); // CONDITIONING → positive
      await nextTick();
      chips(modal().querySelectorAll(".fil-channel-cluster-row")[1])[1].click(); // CONDITIONING 2 → negative
      await nextTick();

      (modal().querySelector(".fil-channel-cluster-footer button") as HTMLElement).click();
      await nextTick();

      expect(ks.properties.fil_wireless).toEqual({
        subs: { positive: "CONDITIONING", negative: "CONDITIONING 2" },
      });
      expect(pairedInputFor("CONDITIONING")).toBe("positive");
      expect(pairedInputFor("CONDITIONING 2")).toBe("negative");
      expect(modal().querySelector(".fil-channel-cluster")).toBeNull(); // the modal closed
    });

    it("pre-selects from what the user confirmed before", async () => {
      noteChannelPairs([
        { channelName: "CONDITIONING", inputName: "negative" },
        { channelName: "CONDITIONING 2", inputName: "positive" },
      ]);
      const { chB } = conditioningScene();
      flag(chB, 0);
      await panelFor(chB);

      const rows = modal().querySelectorAll(".fil-channel-cluster-row");
      expect(rows[0].querySelector(".fil-channel-chip.is-chosen .fil-channel-chip-name")?.textContent).toBe(
        "CONDITIONING 2",
      );
      expect(rows[1].querySelector(".fil-channel-chip.is-chosen .fil-channel-chip-name")?.textContent).toBe(
        "CONDITIONING",
      );
    });

    it("once a channel is picked, the other rows stop offering it", async () => {
      const { chB } = conditioningScene();
      flag(chB, 0);
      await panelFor(chB);

      chips(modal().querySelectorAll(".fil-channel-cluster-row")[0])[0].click();
      await nextTick();

      const rows = modal().querySelectorAll(".fil-channel-cluster-row");
      const rival = chips(rows[1])[0];
      expect(rival.disabled).toBe(true);
      expect(rival.title).toContain("already picked for another input");
      expect(rows[1].querySelector(".fil-channel-chip.is-chosen")).toBeNull();
    });

    it("closes on its own once the cluster stops being ambiguous", async () => {
      // Wiring the inputs one at a time is the live case: after the first wire
      // the pair cannot complete, so the modal opens. When something else then
      // settles the cluster — here a subscription written on the receiver, the
      // way another surface would — the question is stale and the modal must
      // go away instead of waiting to be closed by hand.
      const { chB, ks } = conditioningScene();
      flag(chB, 0);
      const { wrapper, state } = await panelWithState(chB);
      expect(modal().querySelectorAll(".fil-channel-cluster-row")).toHaveLength(2);

      subscribeInput(ks, "positive", "CONDITIONING");
      subscribeInput(ks, "negative", "CONDITIONING 2");
      invalidateWirelessPlan();
      state.ui.refresh?.();
      await nextTick();

      expect(modal().querySelector(".fil-channel-cluster-row")).toBeNull();
      wrapper.unmount();
    });
  });
});
