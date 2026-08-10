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
import {
  _resetWirelessMemory,
  noteChannelPairs,
  noteNamingAnswer,
  pairedInputFor,
} from "@/stores/wirelessMemory";
import { useToastStore } from "@/stores/toastStore";

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

  it("says where a channel comes from — hover the name, see the source node and the type", async () => {
    // The transmitter only forwards; the panel row must still say what it is
    // carrying and from whom, without making the user trace the canvas wire.
    const { ch } = scene();
    const wrapper = await panelFor(ch);

    const title = wrapper.find(".fil-channel-name").attributes("title");
    expect(title).toContain("CheckpointLoaderSimple"); // the origin node
    expect(title).toContain("MODEL"); // the type it carries
    expect(title).toMatch(/^From /); // the fallback wording, no locale loaded
  });

  it("lists widget-converted inputs among the targets, the same as born-inputs", async () => {
    // width/height/seed reach most nodes as widgets; "Convert Widget to
    // Input" turns them into inputs carrying a `widget` receipt. The target
    // list must show them exactly like any other input — a receiver that
    // hid them would recreate the "the channel does not see my seed" bug.
    const src = loader(1, "INT");
    const ch = transmitter(2, ["INT"]);
    const ks = createNode({
      id: 3,
      comfyClass: "EmptyLatentImage",
      inputs: [slot("width", "INT"), slot("height", "INT")],
    });
    (ks.inputs as Array<{ name: string; widget?: { name: string } }>).forEach((i) => {
      i.widget = { name: i.name };
    });
    createGraph([src, ch, ks]);
    src.connect!(0, ch, 0);

    const wrapper = await panelFor(ch);
    await wrapper.find(".fil-channel-gear").trigger("click");
    await nextTick();

    const targets = modal().querySelectorAll(".fil-channel-target");
    expect(targets).toHaveLength(2);
    expect(targets[0].textContent).toContain("width");
    expect(targets[1].textContent).toContain("height");
  });

  it("the cluster modal shows every free input of the type, converted or not", async () => {
    const src = loader(1, "INT");
    const ch = transmitter(2, ["INT"]);
    const ks = createNode({
      id: 3,
      comfyClass: "SomeNode",
      inputs: [slot("seed", "INT"), slot("width", "INT"), slot("height", "INT")],
    });
    (ks.inputs as Array<{ name: string; widget?: { name: string } }>).forEach((i) => {
      i.widget = { name: i.name }; // all three converted from widgets
    });
    createGraph([src, ch, ks]);
    src.connect!(0, ch, 0);

    const { state } = await panelWithState(ch);
    (ch as unknown as { _filPendingAmbiguityChecks?: number[] })._filPendingAmbiguityChecks = [0];
    state.ui.refresh?.();
    await nextTick();

    const rows = modal().querySelectorAll(".fil-channel-cluster-row");
    expect(rows).toHaveLength(3);
    expect(Array.from(rows).map((r) => r.textContent)).toEqual([
      expect.stringContaining("seed"),
      expect.stringContaining("width"),
      expect.stringContaining("height"),
    ]);
  });

  it("wears the host's own type colour, the same one the socket is painted with", async () => {
    // The dashed link and the row's dot must land on sockets of the same
    // colour — the palette is read off LiteGraph's registry, not invented.
    const host = globalThis as { LiteGraph?: unknown };
    host.LiteGraph = { link_type_colors: { MODEL: "#b39ddb" } };
    try {
      const { ch } = scene();
      const wrapper = await panelFor(ch);

      const style = wrapper.find(".fil-channel-dot").attributes("style") ?? "";
      // DOM engines serialise colours either verbatim or as rgb() — both say the same thing.
      expect(style).toMatch(/#b39ddb|rgb\(179,\s*157,\s*219\)/i);
    } finally {
      delete host.LiteGraph;
    }
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

    // A wired input is not hidden — it offers the takeover switch. The hint
    // lives on the toggle's wrapper, the way FilToggle renders `title`.
    const takeover = modal().querySelector(".fil-channel-target .fil-w-toggle");
    expect(takeover).not.toBeNull();
    expect(takeover?.getAttribute("title")).toContain("Replace the real wire");
  });

  it("taking over a wired input drops the real wire and subscribes the channel", async () => {
    const src = loader(1);
    const ch = transmitter(2);
    const ks = createNode({ id: 3, comfyClass: "KSampler", inputs: [slot("model", "MODEL")] });
    const other = loader(5, "MODEL", "UNETLoader");
    const graph = createGraph([src, ch, ks, other]);
    src.connect!(0, ch, 0);
    other.connect!(0, ks, 0); // the real wire the user is about to replace

    const wrapper = await panelFor(ch);
    await wrapper.find(".fil-channel-gear").trigger("click");
    await nextTick();

    (modal().querySelector("button.fil-w-switch") as HTMLElement).click();
    await nextTick();

    // The wire is gone from the graph, and the channel now owns the input.
    expect(ks.inputs[0].link).toBeNull();
    expect(Object.keys(graph.links)).toHaveLength(1); // only src→ch remains
    expect(ks.properties.fil_wireless).toEqual({ subs: { model: "MODEL" } });
    // The row is now a normal "on" tick.
    expect(modal().querySelector("button.fil-w-switch")?.getAttribute("aria-checked")).toBe("true");
  });

  it("still explains a target it cannot offer, rather than dropping it", async () => {
    // A node that feeds the channel can never receive it back (rule 6) —
    // that row stays a reason, not a switch.
    const feeder = createNode({
      id: 6,
      comfyClass: "CheckpointLoaderSimple",
      inputs: [slot("model", "MODEL")],
      outputs: [slot("MODEL", "MODEL")],
    });
    const ch = transmitter(2);
    createGraph([feeder, ch]);
    feeder.connect!(0, ch, 0); // feeder supplies the channel...
    // ...and also has a free MODEL input of its own, which would be a loop.

    const wrapper = await panelFor(ch);
    await wrapper.find(".fil-channel-gear").trigger("click");
    await nextTick();

    expect(modal().querySelector(".fil-channel-target-reason")?.textContent).toContain("feeds this channel");
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

  /**
   * The "positive or negative?" question — asked once, the moment an unnamed
   * CONDITIONING wire lands, and never again: the answer is written the way
   * core's "Rename Slot" writes, so it serialises with the workflow. These
   * drive the pending note `channel.ts` writes for it, the same way the drain
   * tests above drive the ambiguity one.
   */
  describe("the naming question", () => {
    function flagNaming(node: FakeNode, ...slots: number[]): void {
      (node as unknown as { _filPendingNamingChecks?: number[] })._filPendingNamingChecks = slots;
    }

    /** One CONDITIONING source wired into the transmitter — nothing else. */
    function conditioningWire(): { ch: FakeNode } {
      const src = loader(1, "CONDITIONING", "CLIPTextEncode");
      const ch = transmitter(2, ["CONDITIONING"]);
      createGraph([src, ch]);
      src.connect!(0, ch, 0);
      return { ch };
    }

    function answerButtons(): HTMLElement[] {
      return Array.from(modal().querySelectorAll<HTMLElement>(".fil-channel-naming-actions button"));
    }

    it("asks when an unnamed CONDITIONING wire lands", async () => {
      const { ch } = conditioningWire();
      flagNaming(ch, 0);
      await panelFor(ch);

      expect(modal().querySelector(".fil-modal-title")?.textContent).toContain("Positive or negative?");
      expect(answerButtons().map((b) => b.textContent?.trim())).toEqual(["Positive", "Negative", "Leave unnamed"]);
    });

    it("answering names the slot the way Rename Slot does, and the row shows it", async () => {
      const { ch } = conditioningWire();
      flagNaming(ch, 0);
      const wrapper = await panelFor(ch);

      answerButtons()[0].click(); // Positive
      await nextTick();

      // The label carries the answer, and no receipt — the pack must treat it
      // as the user's from now on, exactly like core's "Rename Slot".
      expect(ch.inputs[0].label).toBe("positive");
      expect(ch.properties.fil_channel_auto).toBeUndefined();
      // And the answer is vaulted where a reload cannot drop the label.
      expect(ch.properties.fil_channel_names).toEqual({ "value.value0": "positive" });
      expect(modal().querySelector(".fil-channel-naming-actions")).toBeNull();
      expect(wrapper.text()).toContain("positive");
    });

    it("skipping leaves the slot pack-named, so the pack may still write it", async () => {
      const { ch } = conditioningWire();
      flagNaming(ch, 0);
      await panelFor(ch);

      answerButtons()[2].click(); // Leave unnamed
      await nextTick();

      // The panel's own naming then labels it after the channel, with a
      // receipt — still the pack's slot, not a user's choice. And nothing was
      // vaulted: a skip is not an answer.
      expect(ch.properties.fil_channel_auto).toEqual({ "value.value0": "CONDITIONING" });
      expect(ch.properties.fil_channel_names).toBeUndefined();
      expect(modal().querySelector(".fil-channel-naming-actions")).toBeNull();
    });

    it("does not ask for a slot the user already named", async () => {
      const src = loader(1, "CONDITIONING", "CLIPTextEncode");
      const ch = transmitter(2, ["CONDITIONING"]);
      ch.inputs[0].label = "My cond"; // a rename done before the wire landed
      createGraph([src, ch]);
      src.connect!(0, ch, 0);

      flagNaming(ch, 0);
      await panelFor(ch);

      expect(modal().querySelector(".fil-channel-naming-actions")).toBeNull();
    });

    it("does not ask for a wire that is not CONDITIONING", async () => {
      const src = loader(1); // MODEL
      const ch = transmitter(2);
      createGraph([src, ch]);
      src.connect!(0, ch, 0);

      flagNaming(ch, 0);
      await panelFor(ch);

      expect(modal().querySelector(".fil-channel-naming-actions")).toBeNull();
    });

    it("never asks twice for the same answered wire", async () => {
      const { ch } = conditioningWire();
      flagNaming(ch, 0);
      const { state } = await panelWithState(ch);

      answerButtons()[0].click(); // Positive
      await nextTick();
      expect(modal().querySelector(".fil-channel-naming-actions")).toBeNull();

      // Even if a check for the slot lands again, the label answers it.
      flagNaming(ch, 0);
      state.ui.refresh?.();
      await nextTick();
      expect(modal().querySelector(".fil-channel-naming-actions")).toBeNull();
    });

    /** The same wire, with a sampler whose `positive`/`negative` are both free. */
    function conditioningWireWithSampler(): { ch: FakeNode } {
      const src = loader(1, "CONDITIONING", "CLIPTextEncode");
      const ch = transmitter(2, ["CONDITIONING"]);
      const ks = createNode({
        id: 3,
        comfyClass: "KSampler",
        inputs: [slot("positive", "CONDITIONING"), slot("negative", "CONDITIONING")],
      });
      createGraph([src, ch, ks]);
      src.connect!(0, ch, 0);
      return { ch };
    }

    function flagAmbiguity(node: FakeNode, ...slots: number[]): void {
      (node as unknown as { _filPendingAmbiguityChecks?: number[] })._filPendingAmbiguityChecks = slots;
    }

    it("an answer spends the wire's ambiguity check — no where-to modal right after", async () => {
      // channel.ts queues both checks for one wire; answering the name makes
      // the where-to one stale, so a second modal must not follow the first.
      const { ch } = conditioningWireWithSampler();
      flagNaming(ch, 0);
      flagAmbiguity(ch, 0);
      await panelFor(ch);

      answerButtons()[0].click(); // Positive
      await nextTick();

      // Rule 8 paired it with `positive`; nothing else needs asking.
      expect(modal().querySelector(".fil-channel-cluster-row")).toBeNull();
      expect(modal().querySelector(".fil-channel-target")).toBeNull();
    });

    it("a skip keeps the ambiguity check — the where-to question still stands", async () => {
      const { ch } = conditioningWireWithSampler();
      flagNaming(ch, 0);
      flagAmbiguity(ch, 0);
      await panelFor(ch);

      answerButtons()[2].click(); // Leave unnamed
      await nextTick();

      // One unnamed channel, two same-type inputs: the cluster modal asks.
      expect(modal().querySelectorAll(".fil-channel-cluster-row")).toHaveLength(2);
    });

    it("after a reload that drops the labels, the vaulted names come back and nothing is re-asked", async () => {
      // Two wires, answered one after the other.
      const srcA = loader(1, "CONDITIONING", "CLIPTextEncode");
      const srcB = loader(3, "CONDITIONING", "CLIPTextEncode");
      const ch = transmitter(2, ["CONDITIONING", "CONDITIONING"]);
      createGraph([srcA, ch, srcB]);
      srcA.connect!(0, ch, 0);

      const { wrapper, state } = await panelWithState(ch);
      flagNaming(ch, 0);
      state.ui.refresh?.();
      await nextTick();
      answerButtons()[0].click(); // Positive
      await nextTick();
      srcB.connect!(0, ch, 1);
      flagNaming(ch, 1);
      state.ui.refresh?.();
      await nextTick();
      answerButtons()[1].click(); // Negative
      await nextTick();
      expect(ch.properties.fil_channel_names).toEqual({
        "value.value0": "positive",
        "value.value1": "negative",
      });

      // A real reload, the way the host actually behaves (confirmed live):
      // the *first* wired slot keeps its label, every later one falls back to
      // the host default — but `node.properties` rides it out. `configure`
      // hands the node a fresh inputs array, then we drop the second label the
      // way `loadGraphData` does.
      const saved = JSON.parse(JSON.stringify({ inputs: ch.inputs })) as Record<string, unknown>;
      ch.configure(saved);
      ch.inputs[1].label = "value1";

      flagNaming(ch, 0, 1);
      state.ui.refresh?.();
      await nextTick();

      // Nothing asked — and the dropped name is back on the slot.
      expect(modal().querySelector(".fil-channel-naming-actions")).toBeNull();
      expect(ch.inputs[1].label).toBe("negative");
      expect(wrapper.text()).toContain("negative");
    });

    it("the second wire is asked too — the user's word, not exclusion's guess", async () => {
      const srcA = loader(1, "CONDITIONING", "CLIPTextEncode");
      const srcB = loader(3, "CONDITIONING", "CLIPTextEncode");
      const ch = transmitter(2, ["CONDITIONING", "CONDITIONING"]);
      const ks = createNode({
        id: 4,
        comfyClass: "KSampler",
        inputs: [slot("positive", "CONDITIONING"), slot("negative", "CONDITIONING")],
      });
      createGraph([srcA, ch, srcB, ks]);
      srcA.connect!(0, ch, 0);

      const { wrapper, state } = await panelWithState(ch);

      // First wire: asked, answered "positive".
      flagNaming(ch, 0);
      state.ui.refresh?.();
      await nextTick();
      answerButtons()[0].click();
      await nextTick();
      expect(ch.inputs[0].label).toBe("positive");

      // Second wire lands: asked again. Exclusion could have deduced
      // "negative", but the one who plugs the wire knows, and was decided to
      // be asked (2026-08-10) — a deduced name is a guess wearing a uniform.
      srcB.connect!(0, ch, 1);
      flagNaming(ch, 1);
      state.ui.refresh?.();
      await nextTick();

      expect(modal().querySelector(".fil-modal-title")?.textContent).toContain("Positive or negative?");
      answerButtons()[1].click(); // Negative
      await nextTick();

      expect(ch.inputs[1].label).toBe("negative");
      expect(modal().querySelector(".fil-channel-cluster-row")).toBeNull();
      // Both channels feed one input each, named by the user's own hand.
      expect(wrapper.findAll(".fil-channel-count").map((n) => n.text())).toEqual(["1", "1"]);
    });

    it("two wires queued before the first drain are asked one after the other", async () => {
      // Both wires land inside one poll interval, so a single drain sees both
      // checks at once. The first opens the question; the second must go back
      // on the queue instead of being dropped — with nothing downstream yet,
      // the second unnamed CONDITIONING still earns its own ask, and losing
      // it would leave the wire forever unnamed.
      const srcA = loader(1, "CONDITIONING", "CLIPTextEncode");
      const srcB = loader(3, "CONDITIONING", "CLIPTextEncode");
      const ch = transmitter(2, ["CONDITIONING", "CONDITIONING"]);
      createGraph([srcA, ch, srcB]);
      srcA.connect!(0, ch, 0);
      srcB.connect!(0, ch, 1);

      flagNaming(ch, 0, 1);
      await panelFor(ch);

      // The first question is up, for slot 0.
      expect(modal().querySelector(".fil-modal-title")?.textContent).toContain("Positive or negative?");
      answerButtons()[0].click(); // Positive
      await nextTick();

      // The answer's refresh drains what the first drain parked — slot 1
      // asks now instead of having been swallowed.
      expect(modal().querySelector(".fil-channel-naming-actions")).not.toBeNull();
      answerButtons()[1].click(); // Negative
      await nextTick();

      expect(ch.inputs[0].label).toBe("positive");
      expect(ch.inputs[1].label).toBe("negative");
      expect(ch.properties.fil_channel_names).toEqual({
        "value.value0": "positive",
        "value.value1": "negative",
      });
      expect(modal().querySelector(".fil-channel-naming-actions")).toBeNull();
    });

    it("pre-highlights the answer remembered from last time", async () => {
      noteNamingAnswer("negative");
      const src = loader(1, "CONDITIONING", "CLIPTextEncode");
      const ch = transmitter(2, ["CONDITIONING"]);
      const ks = createNode({
        id: 3,
        comfyClass: "KSampler",
        inputs: [slot("positive", "CONDITIONING"), slot("negative", "CONDITIONING")],
      });
      createGraph([src, ch, ks]);
      src.connect!(0, ch, 0);

      flagNaming(ch, 0);
      await panelFor(ch);

      // The remembered answer is ringed, not pressed — still a click to confirm.
      expect(answerButtons()[1].classList.contains("is-suggested")).toBe(true);
      expect(answerButtons()[0].classList.contains("is-suggested")).toBe(false);
    });
  });

  describe("inline rename", () => {
    it("the pencil turns the row into an input and renames the channel", async () => {
      const src = loader(1);
      const ch = transmitter(2);
      createGraph([src, ch]);
      src.connect!(0, ch, 0);

      const wrapper = await panelFor(ch);
      await wrapper.find(".fil-channel-pencil").trigger("click");
      await nextTick();

      const input = wrapper.find("input.fil-channel-rename");
      expect(input.exists()).toBe(true);
      await input.setValue("base model");
      await input.trigger("keyup.enter");
      await nextTick();

      // The slot carries the user's word, vaulted for reload, and the row shows it.
      expect(ch.inputs[0].label).toBe("base model");
      expect(ch.properties.fil_channel_names).toEqual({ "value.value0": "base model" });
      expect(wrapper.text()).toContain("base model");
    });
  });

  describe("takeover undo", () => {
    it("the toast's Undo puts the real wire back and drops the subscription", async () => {
      const src = loader(1);
      const ch = transmitter(2);
      const ks = createNode({ id: 3, comfyClass: "KSampler", inputs: [slot("model", "MODEL")] });
      const other = loader(5, "MODEL", "UNETLoader");
      createGraph([src, ch, ks, other]);
      src.connect!(0, ch, 0);
      other.connect!(0, ks, 0);

      const wrapper = await panelFor(ch);
      await wrapper.find(".fil-channel-gear").trigger("click");
      await nextTick();

      (modal().querySelector("button.fil-w-switch") as HTMLElement).click();
      await nextTick();

      // Taken over: wire gone, subscription present.
      expect(ks.inputs[0].link).toBeNull();
      expect(ks.properties.fil_wireless).toEqual({ subs: { model: "MODEL" } });

      // The toast offers an Undo; running it restores the wire.
      const toasts = useToastStore();
      expect(toasts.items).toHaveLength(1);
      const action = toasts.items[0].action;
      expect(action).not.toBeNull();
      action!.onClick(new MouseEvent("click"));
      await nextTick();

      expect(ks.inputs[0].link).not.toBeNull();
      expect(ks.properties.fil_wireless).toBeUndefined();
    });
  });
});
