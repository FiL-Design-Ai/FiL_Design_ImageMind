/**
 * The wireless-channel rulebook, one test per rule in `wireless.md` §4.
 *
 * Everything here runs on the shared host fake rather than a graph invented in
 * this file — the pack's frontend bugs have all been "the test agreed with our
 * code because the test wrote the host". `createGraph()` gives the nodes a real
 * link registry and a `connect()` that behaves like LiteGraph's, which is the
 * only reason the rollback test can claim anything.
 */
import { beforeEach, describe, expect, it, vi } from "vitest";

import {
  createApp,
  createDrawContext,
  createGraph,
  createNode,
  createSubgraphTree,
  slot,
  type FakeGraph,
  type FakeNode,
} from "./fakes/comfyHost";
import {
  applySlotColors,
  applySlotNames,
  applyWirelessLinks,
  channelColor,
  channelColorSoft,
  channelTargets,
  collectChannels,
  installWirelessOverlay,
  installWirelessPromptBridge,
  invalidateWirelessPlan,
  latestWirelessPlan,
  planWireless,
  resetWirelessPromptBridge,
  resolveWireless,
  setChannelTarget,
  wirelessDiagnostics,
  wirelessDiagnosticsTree,
  applyWirelessTree,
  planWirelessTree,
  graphsInTree,
} from "@/nodes2/wireless";
import {
  LINKS_ALWAYS,
  LINKS_NEVER,
  LINKS_SELECTED,
  WIRELESS_ENABLED,
  WIRELESS_LABELS,
  WIRELESS_LINKS,
} from "@/stores/settings/wirelessSettings";
import type { ComfyApp } from "@/types/comfy";

function source(id: number, type = "MODEL"): FakeNode {
  return createNode({ id, comfyClass: "CheckpointLoaderSimple", outputs: [slot(type, type)] });
}

/**
 * A transmitter as `nodes/node_channel.py` declares it: autogrown `value0`,
 * `value1`, ... sockets and no widgets. A name is a slot label, which is what
 * core's "Rename Slot" writes.
 */
function channel(id: number, types: string[] = ["MODEL"], labels: Array<string | undefined> = []): FakeNode {
  const node = createNode({
    id,
    comfyClass: "FiLChannel",
    // The real name, dotted — `value.value0`, `value.value1`, ... — per
    // `finalize_prefix` in `comfy_api/latest/_io.py`, confirmed on a live node
    // (see the comment on `CHANNEL_SLOT_RE` in wireless/types.ts). LiteGraph
    // fills the label with the bare suffix before anyone renames the slot.
    inputs: types.map((type, i) => ({ ...slot(`value.value${i}`, type), label: `value${i}` })),
  });
  labels.forEach((label, i) => {
    if (label && node.inputs[i]) node.inputs[i].label = label;
  });
  return node;
}

function receiver(id: number, inputs: Array<[string, string]>, subs?: Record<string, string>): FakeNode {
  return createNode({
    id,
    comfyClass: "KSampler",
    inputs: inputs.map(([name, type]) => slot(name, type)),
    properties: subs ? { fil_wireless: { subs } } : {},
  });
}

/** Plug `from`'s first output into `to`'s first input, the way a user drags a wire. */
function wire(from: FakeNode, to: FakeNode, targetSlot = 0): void {
  from.connect!(0, to, targetSlot);
}

describe("collectChannels", () => {
  it("ignores a transmitter with nothing plugged in", () => {
    const graph = createGraph([channel(1)]);
    expect(collectChannels(graph)).toEqual([]);
  });

  it("names a channel after its data type, and numbers repeats by node id", () => {
    const src = source(1);
    const a = channel(3);
    const b = channel(2);
    const graph = createGraph([src, a, b]);
    wire(src, a);
    wire(src, b);

    // Node 2 sorts before node 3 regardless of the order they were scanned in.
    expect(collectChannels(graph).map((c) => ({ id: c.nodeId, name: c.name }))).toEqual([
      { id: 2, name: "MODEL" },
      { id: 3, name: "MODEL 2" },
    ]);
  });

  it("takes the name typed on the node over the type", () => {
    const src = source(1);
    const ch = channel(2, ["MODEL"], ["Base model"]);
    const graph = createGraph([src, ch]);
    wire(src, ch);

    expect(collectChannels(graph)[0]?.name).toBe("Base model");
  });

  it("borrows the origin slot's label when its own slot was never renamed", () => {
    // A router whose outputs somebody renamed already knows what the wire
    // carries — the unnamed channel says so instead of just its type.
    const src = source(1, "CONDITIONING");
    src.outputs[0].label = "negative";
    const ch = channel(2, ["CONDITIONING"]);
    const graph = createGraph([src, ch]);
    wire(src, ch);

    expect(collectChannels(graph)[0]?.name).toBe("negative");
  });

  it("its own rename still wins over the origin's label", () => {
    const src = source(1, "CONDITIONING");
    src.outputs[0].label = "negative";
    const ch = channel(2, ["CONDITIONING"], ["My cond"]);
    const graph = createGraph([src, ch]);
    wire(src, ch);

    expect(collectChannels(graph)[0]?.name).toBe("My cond");
  });

  it("a label the host echoed from the origin slot's own name is not a rename", () => {
    // The host fills an untouched slot's label with its own name; that echo is
    // a default, not a choice — the channel must fall back to its type.
    const src = createNode({ id: 1, comfyClass: "SomethingElse", outputs: [slot("OUT", "CONDITIONING")] });
    src.outputs[0].label = "OUT";
    const ch = channel(2, ["CONDITIONING"]);
    const graph = createGraph([src, ch]);
    wire(src, ch);

    expect(collectChannels(graph)[0]?.name).toBe("CONDITIONING");
  });

  it("ignores inputs that are not value sockets", () => {
    const src = source(1);
    const ch = channel(2);
    // Anything the host may list alongside them must not become a channel.
    ch.inputs.unshift(slot("not_a_value", "STRING"));
    const graph = createGraph([src, ch]);
    src.connect!(0, ch, 1);

    expect(collectChannels(graph).map((c) => c.name)).toEqual(["MODEL"]);
  });

  it("carries one channel per wired input of the same node", () => {
    const model = source(1, "MODEL");
    const vae = source(2, "VAE");
    const ch = channel(3, ["MODEL", "VAE", "CLIP"]);
    const graph = createGraph([model, vae, ch]);
    model.connect!(0, ch, 0);
    vae.connect!(0, ch, 1);

    // The third socket is empty, so it broadcasts nothing.
    expect(collectChannels(graph).map((c) => ({ name: c.name, slot: c.slotIndex }))).toEqual([
      { name: "MODEL", slot: 0 },
      { name: "VAE", slot: 1 },
    ]);
  });

  it("ignores a label the host echoed from the slot name", () => {
    const src = source(1);
    const ch = channel(2);
    ch.inputs[0].label = "value0"; // not a rename — the same string the slot is called
    const graph = createGraph([src, ch]);
    wire(src, ch);

    expect(collectChannels(graph)[0]?.name).toBe("MODEL");
  });

  it("matches the dotted slot name a live node actually has, not the bare template id", () => {
    // Pinned to a live check, not a reading of the Python source: Autogrow
    // joins the input's own id ("value") and the per-slot template id
    // ("value0") with a dot, so the slot's real name is "value.value0" — a
    // node freshly created in the browser confirmed this before anything was
    // wired to it. An earlier version of this code assumed the bare "value0"
    // and matched nothing, silently dropping every channel.
    const src = source(1);
    const ch = channel(2);
    expect(ch.inputs[0].name).toBe("value.value0");

    const graph = createGraph([src, ch]);
    wire(src, ch);
    expect(collectChannels(graph)).toHaveLength(1);
  });

  it("numbers repeats across inputs of one node, deterministically", () => {
    const a = source(1, "MODEL");
    const b = source(2, "MODEL");
    const ch = channel(3, ["MODEL", "MODEL"]);
    const graph = createGraph([a, b, ch]);
    a.connect!(0, ch, 0);
    b.connect!(0, ch, 1);

    expect(collectChannels(graph).map((c) => c.name)).toEqual(["MODEL", "MODEL 2"]);
  });
});

/**
 * Naming the transmitter's own sockets, and the trap that made an earlier
 * version give up on it: the pack writes the channel's name into `label`, and
 * `label` is also where the *user's* "Rename Slot" writes. Without the receipt
 * these tests pin, our own decoration would come back as a channel name.
 */
describe("applySlotNames", () => {
  function naming(node: FakeNode, plan = planWireless(node.graph as never)): Map<string, string> {
    const map = new Map<string, string>();
    for (const channel of plan.channels) {
      if (String(channel.nodeId) !== String(node.id)) continue;
      const slot = node.inputs[channel.slotIndex];
      if (slot) map.set(slot.name, channel.name);
    }
    return map;
  }

  it("names a wired socket after its channel", () => {
    const src = source(1);
    const ch = channel(2);
    createGraph([src, ch]);
    wire(src, ch);

    expect(applySlotNames(ch, naming(ch))).toBe(true);
    expect(ch.inputs[0].label).toBe("MODEL");
  });

  it("does not turn its own label into a channel name", () => {
    // The bug this whole receipt mechanism exists for: with the label written
    // and nothing recording that we wrote it, the next scan reads "MODEL" as a
    // user-chosen name — and a second MODEL channel would then never be
    // numbered "MODEL 2", because both would claim the same custom name.
    const a = source(1, "MODEL");
    const b = source(2, "MODEL");
    const ch = channel(3, ["MODEL", "MODEL"]);
    const graph = createGraph([a, b, ch]);
    a.connect!(0, ch, 0);
    b.connect!(0, ch, 1);

    applySlotNames(ch, naming(ch));
    expect(ch.inputs.map((s) => s.label)).toEqual(["MODEL", "MODEL 2"]);
    // Scanned again, the names are still derived — not read back off our labels.
    expect(planWireless(graph).channels.map((c) => c.name)).toEqual(["MODEL", "MODEL 2"]);
  });

  it("leaves a socket the user renamed alone, and keeps reading it as the name", () => {
    const src = source(1);
    const ch = channel(2);
    const graph = createGraph([src, ch]);
    wire(src, ch);
    ch.inputs[0].label = "Base model"; // core's own "Rename Slot"

    expect(applySlotNames(ch, naming(ch))).toBe(false);
    expect(ch.inputs[0].label).toBe("Base model");
    expect(planWireless(graph).channels[0]?.name).toBe("Base model");
  });

  it("gives the socket its plain name back when the wire is pulled", () => {
    const src = source(1);
    const ch = channel(2);
    const graph = createGraph([src, ch]);
    wire(src, ch);
    applySlotNames(ch, naming(ch));

    ch.inputs[0].link = null; // unplugged
    expect(applySlotNames(ch, naming(ch, planWireless(graph)))).toBe(true);
    expect(ch.inputs[0].label).toBe("value0");
    // And no receipt left behind in the saved workflow.
    expect(ch.properties.fil_channel_auto).toBeUndefined();
  });

  it("keeps its hands off inputs that are not value sockets", () => {
    const src = source(1);
    const ch = channel(2);
    ch.inputs.unshift({ ...slot("not_a_value", "STRING"), label: "not_a_value" });
    createGraph([src, ch]);
    src.connect!(0, ch, 1);

    applySlotNames(ch, naming(ch));
    expect(ch.inputs[0].label).toBe("not_a_value");
  });
});

/**
 * Colouring the transmitter's own sockets. Both render paths derive the dot's
 * colour from `slot.type` — `"*"` is the one value that always renders flat —
 * so the whole fix is keeping that field honest about what is actually
 * plugged in, and honest again once it is unplugged.
 */
describe("applySlotColors", () => {
  /**
   * `channel()` pre-sets each slot's declared `type` to whatever it will be
   * wired to — a convenience for the resolution tests above, which never read
   * that field (a channel's type comes from the origin, not the slot). The
   * real node always declares ANY (`io.AnyType.Input`), so these tests reset
   * it to `"*"` to match what a freshly grown, unconnected slot actually has.
   */
  function wildcard(ch: FakeNode): FakeNode {
    ch.inputs.forEach((s) => (s.type = "*"));
    return ch;
  }

  it("takes the colour of what's actually plugged in", () => {
    const src = source(1, "VAE");
    const ch = wildcard(channel(2, ["VAE"]));
    const graph = createGraph([src, ch]);
    wire(src, ch);
    expect(ch.inputs[0].type).toBe("*");

    expect(applySlotColors(graph, ch)).toBe(true);
    expect(ch.inputs[0].type).toBe("VAE");
  });

  it("does nothing a second time — the type already matches", () => {
    const src = source(1, "VAE");
    const ch = wildcard(channel(2, ["VAE"]));
    const graph = createGraph([src, ch]);
    wire(src, ch);
    applySlotColors(graph, ch);

    expect(applySlotColors(graph, ch)).toBe(false);
  });

  it("hands the socket its wildcard type back once the wire is pulled", () => {
    const src = source(1, "VAE");
    const ch = wildcard(channel(2, ["VAE"]));
    const graph = createGraph([src, ch]);
    wire(src, ch);
    applySlotColors(graph, ch);

    ch.inputs[0].link = null; // unplugged
    expect(applySlotColors(graph, ch)).toBe(true);
    expect(ch.inputs[0].type).toBe("*");
  });

  it("colours each socket independently on a multi-channel node", () => {
    const model = source(1, "MODEL");
    const vae = source(2, "VAE");
    const ch = wildcard(channel(3, ["MODEL", "VAE"]));
    const graph = createGraph([model, vae, ch]);
    model.connect!(0, ch, 0);
    vae.connect!(0, ch, 1);

    applySlotColors(graph, ch);
    expect(ch.inputs.map((s) => s.type)).toEqual(["MODEL", "VAE"]);
  });

  it("leaves inputs that are not value sockets alone", () => {
    const src = source(1);
    const ch = wildcard(channel(2));
    ch.inputs.unshift({ ...slot("not_a_value", "STRING"), label: "not_a_value" });
    const graph = createGraph([src, ch]);
    src.connect!(0, ch, 1);

    applySlotColors(graph, ch);
    expect(ch.inputs[0].type).toBe("STRING");
  });
});

describe("resolveWireless", () => {
  it("rule 3: a lone channel of its type claims every free input of that type", () => {
    const src = source(1);
    const ch = channel(2);
    const ks = receiver(3, [["model", "MODEL"]]);
    const graph = createGraph([src, ch, ks]);
    wire(src, ch);

    const { resolution } = planWireless(graph);
    expect(resolution.links).toEqual([
      { channelName: "MODEL", origin_id: 1, origin_slot: 0, target_id: 3, target_slot: 0 },
    ]);
    expect(resolution.unusedChannels).toEqual([]);
  });

  it("rule 3: two channels of one type stop auto-distribution and report the choice", () => {
    const src = source(1);
    const ks = receiver(4, [["model", "MODEL"]]);
    const graph = createGraph([src, channel(2), channel(3), ks]);
    wire(src, graph._nodes[1]);
    wire(src, graph._nodes[2]);

    const { resolution } = planWireless(graph);
    expect(resolution.links).toEqual([]);
    expect(resolution.ambiguous).toEqual([
      { node_id: 4, input: "model", type: "MODEL", candidates: ["MODEL", "MODEL 2"] },
    ]);
    expect(resolution.unusedChannels).toEqual(["MODEL", "MODEL 2"]);
  });

  it("rule 2: an explicit subscription decides what auto-distribution refused to", () => {
    const src = source(1);
    const ks = receiver(4, [["model", "MODEL"]], { model: "MODEL 2" });
    const graph = createGraph([src, channel(2), channel(3), ks]);
    wire(src, graph._nodes[1]);
    wire(src, graph._nodes[2]);

    const { resolution } = planWireless(graph);
    expect(resolution.links.map((l) => l.channelName)).toEqual(["MODEL 2"]);
    expect(resolution.ambiguous).toEqual([]);
  });

  it("rule 1: a real wire wins, and the subscription under it is reported dormant", () => {
    const src = source(1);
    const other = source(5);
    const ch = channel(2);
    const ks = receiver(3, [["model", "MODEL"]], { model: "MODEL" });
    const graph = createGraph([src, ch, ks, other]);
    wire(src, ch);
    wire(other, ks); // the user's own wire lands on the subscribed input

    const { resolution } = planWireless(graph);
    expect(resolution.links).toEqual([]);
    expect(resolution.dormant).toEqual([{ node_id: 3, input: "model", channelName: "MODEL" }]);
  });

  it("rule 4: a subscription whose types disagree connects nothing and says so", () => {
    const src = source(1);
    const ch = channel(2);
    const ks = receiver(3, [["latent", "LATENT"]], { latent: "MODEL" });
    const graph = createGraph([src, ch, ks]);
    wire(src, ch);

    const { resolution } = planWireless(graph);
    expect(resolution.links).toEqual([]);
    expect(resolution.typeMismatch).toEqual([
      { node_id: 3, input: "latent", channelName: "MODEL", inputType: "LATENT", channelType: "MODEL" },
    ]);
  });

  it("rule 5: a subscription to a channel that is gone is reported, not guessed at", () => {
    const src = source(1);
    const ch = channel(2);
    const ks = receiver(3, [["model", "MODEL"]], { model: "Retired channel" });
    const graph = createGraph([src, ch, ks]);
    wire(src, ch);

    const { resolution } = planWireless(graph);
    // The subscription claimed the input (rule 2), so auto-distribution leaves
    // it alone rather than quietly substituting the one channel that does exist.
    expect(resolution.links).toEqual([]);
    expect(resolution.unknownChannel).toEqual([
      { node_id: 3, input: "model", channelName: "Retired channel" },
    ]);
  });

  it("rule 6: the node feeding a channel never receives from it", () => {
    // A node with both a MODEL output and a free MODEL input, feeding the channel.
    const loop = createNode({
      id: 1,
      comfyClass: "ModelPatcher",
      inputs: [slot("model", "MODEL")],
      outputs: [slot("MODEL", "MODEL")],
    });
    const ch = channel(2);
    const graph = createGraph([loop, ch]);
    wire(loop, ch);

    const { resolution } = planWireless(graph);
    expect(resolution.links).toEqual([]);
    expect(resolution.selfLoop).toEqual([]); // auto-distribution skips quietly
  });

  it("rule 6: subscribing to a channel you feed is reported, since it was asked for", () => {
    const loop = createNode({
      id: 1,
      comfyClass: "ModelPatcher",
      inputs: [slot("model", "MODEL")],
      outputs: [slot("MODEL", "MODEL")],
      properties: { fil_wireless: { subs: { model: "MODEL" } } },
    });
    const graph = createGraph([loop, channel(2)]);
    wire(loop, graph._nodes[1]);

    const { resolution } = planWireless(graph);
    expect(resolution.links).toEqual([]);
    expect(resolution.selfLoop).toEqual([{ node_id: 1, input: "model", channelName: "MODEL" }]);
  });

  it("rule 6: transmitters are never receivers of each other", () => {
    const src = source(1);
    const ch = channel(2);
    const idle = channel(3); // free MODEL input, but it is a transmitter
    const graph = createGraph([src, ch, idle]);
    wire(src, ch);

    expect(planWireless(graph).resolution.links).toEqual([]);
  });

  it("a subscription naming an input the node no longer has is skipped", () => {
    const src = source(1);
    const ch = channel(2);
    const ks = receiver(3, [["model", "MODEL"]], { vanished_input: "MODEL" });
    const graph = createGraph([src, ch, ks]);
    wire(src, ch);

    const { resolution } = planWireless(graph);
    expect(resolution.unknownChannel).toEqual([]);
    // The input that *does* exist is still served by auto-distribution.
    expect(resolution.links.map((l) => l.target_id)).toEqual([3]);
  });

  it("resolves against the channel's source, not the transmitter node", () => {
    const src = source(7);
    const ch = channel(2);
    const ks = receiver(3, [["model", "MODEL"]]);
    const graph = createGraph([src, ch, ks]);
    wire(src, ch);

    const [link] = resolveWireless(graph, collectChannels(graph)).links;
    expect(link.origin_id).toBe(7);
  });

  it("rule 7: two free inputs of one type on one node never both get the same lone channel", () => {
    // The case that motivated the rule: a KSampler's `positive` and `negative`
    // are both bare CONDITIONING, and only one channel exists to offer either.
    const src = source(1, "CONDITIONING");
    const ch = channel(2, ["CONDITIONING"]);
    const ks = receiver(3, [
      ["positive", "CONDITIONING"],
      ["negative", "CONDITIONING"],
    ]);
    const graph = createGraph([src, ch, ks]);
    wire(src, ch);

    const { resolution } = planWireless(graph);
    expect(resolution.links).toEqual([]);
    expect(resolution.ambiguous.map((a) => a.input).sort()).toEqual(["negative", "positive"]);
    expect(resolution.unusedChannels).toEqual(["CONDITIONING"]);
  });

  it("rule 7 does not fire across different nodes — only siblings on the same one", () => {
    const src = source(1, "CONDITIONING");
    const ch = channel(2, ["CONDITIONING"]);
    const a = createNode({ id: 3, comfyClass: "KSampler", inputs: [slot("positive", "CONDITIONING")] });
    const b = createNode({ id: 4, comfyClass: "KSampler", inputs: [slot("positive", "CONDITIONING")] });
    const graph = createGraph([src, ch, a, b]);
    wire(src, ch);

    const { resolution } = planWireless(graph);
    // Two different nodes each wanting the same broadcast is the ordinary
    // case the feature exists for — nothing about it collides.
    expect(resolution.ambiguous).toEqual([]);
    expect(resolution.links).toHaveLength(2);
  });

  it("a subscription on one sibling does not excuse the other — only a real wire does", () => {
    const src = source(1, "CONDITIONING");
    const ch = channel(2, ["CONDITIONING"]);
    // `negative` names the one channel explicitly. If that shrank the
    // collision count, `positive` would then be "the only free input left"
    // and auto-distribute to the exact same channel right after — silently
    // recreating the mistake rule 7 exists to stop, one tick later.
    const ks = receiver(3, [
      ["positive", "CONDITIONING"],
      ["negative", "CONDITIONING"],
    ], { negative: "CONDITIONING" });
    const graph = createGraph([src, ch, ks]);
    wire(src, ch);

    const { resolution } = planWireless(graph);
    // `negative` connects via its own subscription (rule 2, unconditional).
    // `positive` stays exactly where it was: ambiguous, not auto-filled.
    expect(resolution.links).toMatchObject([{ target_slot: 1 }]);
    expect(resolution.ambiguous.map((a) => a.input)).toEqual(["positive"]);
  });

  it("a real wire on one sibling removes it from the count, unlike a subscription", () => {
    const src = source(1, "CONDITIONING");
    const other = source(5, "CONDITIONING");
    const ch = channel(2, ["CONDITIONING"]);
    const ks = receiver(3, [
      ["positive", "CONDITIONING"],
      ["negative", "CONDITIONING"],
    ]);
    const graph = createGraph([src, other, ch, ks]);
    wire(src, ch);
    wire(other, ks, 1); // negative wired by hand, outside the channel system entirely

    const { resolution } = planWireless(graph);
    expect(resolution.ambiguous).toEqual([]);
    expect(resolution.links).toMatchObject([{ target_slot: 0 }]);
  });

  /**
   * Rule 8 — name pairing. Rules 3/7 refuse to guess between same-typed
   * things; when the names actually tell them apart, and in exactly one way,
   * the refusal has nothing left to protect. Everything here asserts both
   * halves: the deduction fires when it is one, and stays silent the moment
   * it would stop being one.
   */
  describe("rule 8 — name pairing", () => {
    it("pairs channels named after the sampler's inputs with those inputs", () => {
      const pos = source(1, "CONDITIONING");
      const neg = source(2, "CONDITIONING");
      const ch = channel(3, ["CONDITIONING", "CONDITIONING"], ["positive", "negative"]);
      const ks = receiver(4, [
        ["positive", "CONDITIONING"],
        ["negative", "CONDITIONING"],
      ]);
      const graph = createGraph([pos, neg, ch, ks]);
      pos.connect!(0, ch, 0);
      neg.connect!(0, ch, 1);

      const { resolution } = planWireless(graph);
      expect(resolution.ambiguous).toEqual([]);
      expect(resolution.links).toMatchObject([
        { channelName: "positive", target_id: 4, target_slot: 0 },
        { channelName: "negative", target_id: 4, target_slot: 1 },
      ]);
    });

    it("pos/neg abbreviations pair through the alias table", () => {
      const pos = source(1, "CONDITIONING");
      const neg = source(2, "CONDITIONING");
      const ch = channel(3, ["CONDITIONING", "CONDITIONING"], ["pos", "neg"]);
      const ks = receiver(4, [
        ["positive", "CONDITIONING"],
        ["negative", "CONDITIONING"],
      ]);
      const graph = createGraph([pos, neg, ch, ks]);
      pos.connect!(0, ch, 0);
      neg.connect!(0, ch, 1);

      const { resolution } = planWireless(graph);
      expect(resolution.ambiguous).toEqual([]);
      expect(resolution.links).toMatchObject([
        { channelName: "pos", target_slot: 0 },
        { channelName: "neg", target_slot: 1 },
      ]);
    });

    it("a partial name match leaves the whole cluster ambiguous", () => {
      // One input explained, one not — wiring the explained half alone would
      // pre-decide what the still-open half can take. The rule is all or nothing.
      const pos = source(1, "CONDITIONING");
      const other = source(2, "CONDITIONING");
      const ch = channel(3, ["CONDITIONING", "CONDITIONING"], ["positive", "unrelated"]);
      const ks = receiver(4, [
        ["positive", "CONDITIONING"],
        ["negative", "CONDITIONING"],
      ]);
      const graph = createGraph([pos, other, ch, ks]);
      pos.connect!(0, ch, 0);
      other.connect!(0, ch, 1);

      const { resolution } = planWireless(graph);
      expect(resolution.links).toEqual([]);
      expect(resolution.ambiguous.map((a) => a.input).sort()).toEqual(["negative", "positive"]);
    });

    it("two channels with the same tokens are two matchings, which is none", () => {
      // `neg` and `neg 2` both reduce to the one token `negative` — the
      // numbering is list bookkeeping, not meaning — so the matching is no
      // longer unique and the cluster stays with the user.
      const a = source(1, "CONDITIONING");
      const b = source(2, "CONDITIONING");
      const ch = channel(3, ["CONDITIONING", "CONDITIONING"], ["neg", "neg"]);
      const ks = receiver(4, [
        ["positive", "CONDITIONING"],
        ["negative", "CONDITIONING"],
      ]);
      const graph = createGraph([a, b, ch, ks]);
      a.connect!(0, ch, 0);
      b.connect!(0, ch, 1);

      const { resolution } = planWireless(graph);
      expect(resolution.links).toEqual([]);
      expect(resolution.ambiguous.map((a) => a.input).sort()).toEqual(["negative", "positive"]);
      expect(resolution.unusedChannels.sort()).toEqual(["neg", "neg 2"]);
    });

    it("a lone named channel cannot complete a two-input cluster", () => {
      const neg = source(1, "CONDITIONING");
      const ch = channel(2, ["CONDITIONING"], ["negative"]);
      const ks = receiver(3, [
        ["positive", "CONDITIONING"],
        ["negative", "CONDITIONING"],
      ]);
      const graph = createGraph([neg, ch, ks]);
      wire(neg, ch);

      const { resolution } = planWireless(graph);
      expect(resolution.links).toEqual([]);
      expect(resolution.ambiguous.map((a) => a.input).sort()).toEqual(["negative", "positive"]);
      expect(resolution.unusedChannels).toEqual(["negative"]);
    });

    it("a block on one input breaks the pairing for the whole cluster", () => {
      const pos = source(1, "CONDITIONING");
      const neg = source(2, "CONDITIONING");
      const ch = channel(3, ["CONDITIONING", "CONDITIONING"], ["positive", "negative"]);
      const ks = createNode({
        id: 4,
        comfyClass: "KSampler",
        inputs: [slot("positive", "CONDITIONING"), slot("negative", "CONDITIONING")],
        properties: { fil_wireless: { blocked: { negative: ["negative"] } } },
      });
      const graph = createGraph([pos, neg, ch, ks]);
      pos.connect!(0, ch, 0);
      neg.connect!(0, ch, 1);

      const { resolution } = planWireless(graph);
      expect(resolution.links).toEqual([]);
      expect(resolution.ambiguous.map((a) => a.input).sort()).toEqual(["negative", "positive"]);
    });

    it("a subscription on one sibling leaves the rest to pair among themselves", () => {
      const pos = source(1, "CONDITIONING");
      const neg = source(2, "CONDITIONING");
      const ch = channel(3, ["CONDITIONING", "CONDITIONING"], ["positive", "negative"]);
      const ks = receiver(
        4,
        [
          ["positive", "CONDITIONING"],
          ["negative", "CONDITIONING"],
        ],
        { positive: "positive" },
      );
      const graph = createGraph([pos, neg, ch, ks]);
      pos.connect!(0, ch, 0);
      neg.connect!(0, ch, 1);

      const { resolution } = planWireless(graph);
      // `positive` lands by its subscription (rule 2), `negative` by pairing
      // over what is left — neither rule second-guesses the other.
      expect(resolution.links).toMatchObject([
        { channelName: "positive", target_slot: 0 },
        { channelName: "negative", target_slot: 1 },
      ]);
      expect(resolution.ambiguous).toEqual([]);
    });

    it("pairing on one node does not settle another node's unnamed input", () => {
      const pos = source(1, "CONDITIONING");
      const neg = source(2, "CONDITIONING");
      const ch = channel(3, ["CONDITIONING", "CONDITIONING"], ["positive", "negative"]);
      const ks = receiver(4, [
        ["positive", "CONDITIONING"],
        ["negative", "CONDITIONING"],
      ]);
      const plain = receiver(5, [["cond", "CONDITIONING"]]);
      const graph = createGraph([pos, neg, ch, ks, plain]);
      pos.connect!(0, ch, 0);
      neg.connect!(0, ch, 1);

      const { resolution } = planWireless(graph);
      expect(resolution.links).toHaveLength(2);
      // The second node's input is called `cond` — nothing in either name
      // picks it out, so rule 3 still owns it.
      expect(resolution.ambiguous).toEqual([
        { node_id: 5, input: "cond", type: "CONDITIONING", candidates: ["positive", "negative"] },
      ]);
    });

    it("a self-fed channel is excluded from the pairing, the way it is from auto-distribution", () => {
      const pos = source(1, "CONDITIONING");
      const ks = receiver(5, [
        ["positive", "CONDITIONING"],
        ["negative", "CONDITIONING"],
      ]);
      // Node 4 both feeds the `negative` channel and wants to receive it —
      // rule 6 forbids the loop, and pairing must not smuggle it back in.
      const loop = createNode({
        id: 4,
        comfyClass: "ConditioningMixer",
        inputs: [slot("positive", "CONDITIONING"), slot("negative", "CONDITIONING")],
        outputs: [slot("CONDITIONING", "CONDITIONING")],
      });
      const ch = channel(3, ["CONDITIONING", "CONDITIONING"], ["positive", "negative"]);
      const graph = createGraph([pos, loop, ch, ks]);
      pos.connect!(0, ch, 0);
      loop.connect!(0, ch, 1);

      const { resolution } = planWireless(graph);
      // The KSampler pairs cleanly; node 4's cluster cannot complete without
      // the self-fed channel, so it stays ambiguous instead of looping.
      expect(resolution.links).toMatchObject([
        { target_id: 5, target_slot: 0, channelName: "positive" },
        { target_id: 5, target_slot: 1, channelName: "negative" },
      ]);
      expect(resolution.ambiguous.map((a) => a.input).sort()).toEqual(["negative", "positive"]);
      expect(resolution.ambiguous.every((a) => a.node_id === 4)).toBe(true);
    });
  });
});

/**
 * The transmitter's target list — the gear button in `ChannelPanel.vue`.
 *
 * The rule these hold: ticks start on, because auto-distribution already
 * reaches everything it can, so unticking is the action that has to be
 * remembered. A test that only checked `setChannelTarget` wrote something would
 * pass while the next frame put the channel straight back.
 */
describe("channelTargets", () => {
  function scene(): { graph: FakeGraph; ks: FakeNode; plan: ReturnType<typeof planWireless> } {
    const src = source(1);
    const ch = channel(2);
    const ks = receiver(3, [["model", "MODEL"]]);
    ks.title = "Sampler";
    const graph = createGraph([src, ch, ks]);
    wire(src, ch);
    return { graph, ks, plan: planWireless(graph) };
  }

  it("lists every input of the channel's type, ticked where the channel already lands", () => {
    const { graph, plan } = scene();
    const targets = channelTargets(graph, plan, plan.channels[0]);

    expect(targets).toEqual([
      {
        nodeId: 3,
        title: "Sampler",
        inputName: "model",
        inputLabel: "model",
        state: "on",
        checked: true,
        disabled: false,
      },
    ]);
  });

  it("leaves out inputs of another type — those were never a choice", () => {
    const { graph, ks, plan } = scene();
    ks.inputs.push(slot("latent", "LATENT"));

    expect(channelTargets(graph, plan, plan.channels[0]).map((t) => t.inputName)).toEqual(["model"]);
  });

  it("shows an input a real wire already feeds, and does not offer to move it", () => {
    const other = source(5);
    const src = source(1);
    const ch = channel(2);
    const ks = receiver(3, [["model", "MODEL"]]);
    const graph = createGraph([src, ch, ks, other]);
    wire(src, ch);
    wire(other, ks);

    const plan = planWireless(graph);
    expect(channelTargets(graph, plan, plan.channels[0])).toMatchObject([
      { state: "wired", checked: false, disabled: true },
    ]);
  });

  it("names the channel that took an input, rather than showing an empty box", () => {
    const src = source(1);
    const ks = receiver(4, [["model", "MODEL"]], { model: "MODEL" });
    const graph = createGraph([src, channel(2), channel(3), ks]);
    wire(src, graph._nodes[1]);
    wire(src, graph._nodes[2]);

    const plan = planWireless(graph);
    const second = plan.channels.find((c) => c.name === "MODEL 2")!;
    expect(channelTargets(graph, plan, second)).toMatchObject([
      { state: "otherChannel", disabled: true, otherChannelName: "MODEL" },
    ]);
  });

  it("marks the node feeding the channel as unavailable instead of hiding it", () => {
    const loop = createNode({
      id: 1,
      comfyClass: "ModelPatcher",
      inputs: [slot("model", "MODEL")],
      outputs: [slot("MODEL", "MODEL")],
    });
    const graph = createGraph([loop, channel(2)]);
    wire(loop, graph._nodes[1]);

    const plan = planWireless(graph);
    expect(channelTargets(graph, plan, plan.channels[0])).toMatchObject([
      { state: "selfLoop", checked: false, disabled: true },
    ]);
  });

  it("never offers a transmitter as a target", () => {
    const src = source(1);
    const graph = createGraph([src, channel(2), channel(3)]);
    wire(src, graph._nodes[1]);

    const plan = planWireless(graph);
    expect(channelTargets(graph, plan, plan.channels[0])).toEqual([]);
  });
});

describe("setChannelTarget", () => {
  it("unticking an auto-distributed input keeps it off on the next pass", () => {
    const src = source(1);
    const ch = channel(2);
    const a = receiver(3, [["model", "MODEL"]]);
    const b = receiver(4, [["model", "MODEL"]]);
    const graph = createGraph([src, ch, a, b]);
    wire(src, ch);

    const plan = planWireless(graph);
    expect(plan.resolution.links).toHaveLength(2);

    setChannelTarget(plan, a, "model", plan.channels[0], false);

    const after = planWireless(graph);
    expect(after.resolution.links.map((l) => l.target_id)).toEqual([4]);
    expect(channelTargets(graph, after, after.channels[0])).toMatchObject([
      { nodeId: 3, state: "off", checked: false },
      { nodeId: 4, state: "on", checked: true },
    ]);
  });

  it("re-ticking hands the input back to auto-distribution, leaving no leftovers", () => {
    const src = source(1);
    const ch = channel(2);
    const ks = receiver(3, [["model", "MODEL"]]);
    const graph = createGraph([src, ch, ks]);
    wire(src, ch);

    const plan = planWireless(graph);
    setChannelTarget(plan, ks, "model", plan.channels[0], false);
    setChannelTarget(planWireless(graph), ks, "model", plan.channels[0], true);

    expect(planWireless(graph).resolution.links).toHaveLength(1);
    // No empty `fil_wireless` left behind to travel with the saved workflow.
    expect(ks.properties.fil_wireless).toBeUndefined();
  });

  it("ticking under an ambiguity writes the subscription that settles it", () => {
    const src = source(1);
    const ks = receiver(4, [["model", "MODEL"]]);
    const graph = createGraph([src, channel(2), channel(3), ks]);
    wire(src, graph._nodes[1]);
    wire(src, graph._nodes[2]);

    const plan = planWireless(graph);
    expect(plan.resolution.ambiguous).toHaveLength(1);

    setChannelTarget(plan, ks, "model", plan.channels[1], true);

    const after = planWireless(graph);
    expect(after.resolution.ambiguous).toEqual([]);
    expect(after.resolution.links.map((l) => l.channelName)).toEqual(["MODEL 2"]);
    expect(ks.properties.fil_wireless).toEqual({ subs: { model: "MODEL 2" } });
  });

  it("ticking a rule-7 sibling collision writes a subscription, and does not cascade to the sibling", () => {
    // Unblocking alone would not be enough here: even fully unblocked,
    // resolve.ts's rule 7 still refuses to guess between `positive` and
    // `negative` while both are unwired and only one channel exists. A tick
    // that only unblocked would show checked and connect nothing.
    const src = source(1, "CONDITIONING");
    const ch = channel(2, ["CONDITIONING"]);
    const ks = receiver(3, [
      ["positive", "CONDITIONING"],
      ["negative", "CONDITIONING"],
    ]);
    const graph = createGraph([src, ch, ks]);
    wire(src, ch);

    const plan = planWireless(graph);
    expect(plan.resolution.ambiguous).toHaveLength(2);

    setChannelTarget(plan, ks, "positive", plan.channels[0], true);

    const after = planWireless(graph);
    expect(after.resolution.links).toMatchObject([{ target_id: 3, target_slot: 0 }]);
    expect(ks.properties.fil_wireless).toEqual({ subs: { positive: "CONDITIONING" } });
    // `negative` does not silently inherit the same channel just because it
    // is now the only slot left undecided — it stays exactly what it was.
    expect(after.resolution.ambiguous.map((a) => a.input)).toEqual(["negative"]);
  });

  it("unticking a subscription removes it rather than blocking on top of it", () => {
    const src = source(1);
    const ks = receiver(4, [["model", "MODEL"]], { model: "MODEL 2" });
    const graph = createGraph([src, channel(2), channel(3), ks]);
    wire(src, graph._nodes[1]);
    wire(src, graph._nodes[2]);

    const plan = planWireless(graph);
    setChannelTarget(plan, ks, "model", plan.channels[1], false);

    expect(ks.properties.fil_wireless).toBeUndefined();
    expect(planWireless(graph).resolution.ambiguous).toHaveLength(1);
  });

  it("unticking one rival channel lets the other stop being ambiguous", () => {
    const src = source(1);
    const ks = receiver(4, [["model", "MODEL"]]);
    const graph = createGraph([src, channel(2), channel(3), ks]);
    wire(src, graph._nodes[1]);
    wire(src, graph._nodes[2]);

    const plan = planWireless(graph);
    // "MODEL 2" is not wanted here — which leaves exactly one candidate, and
    // auto-distribution can go back to deciding on its own.
    setChannelTarget(plan, ks, "model", plan.channels[1], false);

    const after = planWireless(graph);
    expect(after.resolution.ambiguous).toEqual([]);
    expect(after.resolution.links.map((l) => l.channelName)).toEqual(["MODEL"]);
  });

  it("a block is remembered per channel, not per input", () => {
    const model = source(1, "MODEL");
    const vae = source(2, "VAE");
    const ch = channel(3, ["MODEL", "VAE"]);
    const ks = receiver(4, [["model", "MODEL"], ["vae", "VAE"]]);
    const graph = createGraph([model, vae, ch, ks]);
    model.connect!(0, ch, 0);
    vae.connect!(0, ch, 1);

    const plan = planWireless(graph);
    setChannelTarget(plan, ks, "model", plan.channels[0], false);

    expect(planWireless(graph).resolution.links.map((l) => l.channelName)).toEqual(["VAE"]);
  });
});

describe("applyWirelessLinks", () => {
  it("wires the resolution into the graph for real", () => {
    const src = source(1);
    const ch = channel(2);
    const ks = receiver(3, [["model", "MODEL"]]);
    const graph = createGraph([src, ch, ks]);
    wire(src, ch);

    const { resolution } = planWireless(graph);
    const applied = applyWirelessLinks(graph, resolution.links);

    expect(applied.created).toBe(1);
    expect(ks.inputs[0].link).not.toBeNull();
    const link = graph.links[ks.inputs[0].link as number];
    expect(link).toMatchObject({ origin_id: 1, target_id: 3, target_slot: 0 });
  });

  it("wires a name-paired cluster into the graph for real, and takes it all back", () => {
    // Rule 8's links travel the same apply path as every other's: at queue
    // time each paired input must end up fed by its own distinct origin —
    // the whole point of the rule is that they never share one.
    const pos = source(1, "CONDITIONING");
    const neg = source(2, "CONDITIONING");
    const ch = channel(3, ["CONDITIONING", "CONDITIONING"], ["positive", "negative"]);
    const ks = receiver(4, [
      ["positive", "CONDITIONING"],
      ["negative", "CONDITIONING"],
    ]);
    const graph = createGraph([pos, neg, ch, ks]);
    pos.connect!(0, ch, 0);
    neg.connect!(0, ch, 1);

    const before = JSON.stringify({ links: graph.links, nodes: graph._nodes.map((n) => ({ i: n.inputs, o: n.outputs })) });

    const { resolution } = planWireless(graph);
    const applied = applyWirelessLinks(graph, resolution.links);

    expect(applied.created).toBe(2);
    expect(graph.links[ks.inputs[0].link as number]).toMatchObject({ origin_id: 1, target_id: 4, target_slot: 0 });
    expect(graph.links[ks.inputs[1].link as number]).toMatchObject({ origin_id: 2, target_id: 4, target_slot: 1 });

    applied.restore();
    const after = JSON.stringify({ links: graph.links, nodes: graph._nodes.map((n) => ({ i: n.inputs, o: n.outputs })) });
    expect(after).toBe(before);
  });

  it("restore puts the graph back exactly as it was", () => {
    const src = source(1);
    const ch = channel(2);
    const ks = receiver(3, [["model", "MODEL"]]);
    const graph = createGraph([src, ch, ks]);
    wire(src, ch);

    const before = JSON.stringify({ links: graph.links, nodes: graph._nodes.map((n) => ({ i: n.inputs, o: n.outputs })) });

    const { resolution } = planWireless(graph);
    const applied = applyWirelessLinks(graph, resolution.links);
    expect(applied.created).toBe(1);
    applied.restore();

    const after = JSON.stringify({ links: graph.links, nodes: graph._nodes.map((n) => ({ i: n.inputs, o: n.outputs })) });
    expect(after).toBe(before);
  });

  it("restore is idempotent", () => {
    const src = source(1);
    const ch = channel(2);
    const ks = receiver(3, [["model", "MODEL"]]);
    const graph = createGraph([src, ch, ks]);
    wire(src, ch);

    const applied = applyWirelessLinks(graph, planWireless(graph).resolution.links);
    applied.restore();
    const linksAfterFirst = { ...graph.links };
    applied.restore();

    expect(graph.links).toEqual(linksAfterFirst);
    expect(ks.inputs[0].link).toBeNull();
  });

  it("skips a link whose node or slot has gone, without breaking the rest", () => {
    const src = source(1);
    const ch = channel(2);
    const ks = receiver(3, [["model", "MODEL"]]);
    const graph = createGraph([src, ch, ks]);
    wire(src, ch);

    const links = planWireless(graph).resolution.links;
    const applied = applyWirelessLinks(graph, [
      { channelName: "MODEL", origin_id: 99, origin_slot: 0, target_id: 3, target_slot: 0 },
      ...links,
    ]);

    expect(applied.created).toBe(1);
    applied.restore();
    expect(ks.inputs[0].link).toBeNull();
  });
});

/**
 * The one place the pack patches ComfyUI. These tests exist to hold two lines
 * that a refactor would happily cross: links appear only while a queue is in
 * flight, and they are gone by the time anyone looks at the graph again.
 */
describe("promptBridge", () => {
  function scene(): { app: ReturnType<typeof createApp>; graph: FakeGraph; ks: FakeNode } {
    const src = source(1);
    const ch = channel(2);
    const ks = receiver(3, [["model", "MODEL"]]);
    const graph = createGraph([src, ch, ks]);
    wire(src, ch);

    const app = createApp({ graph });
    app.registerSetting(WIRELESS_ENABLED, true);
    (globalThis as unknown as { app: unknown }).app = app;
    installWirelessPromptBridge(app as unknown as ComfyApp);
    return { app, graph, ks };
  }

  beforeEach(() => {
    resetWirelessPromptBridge();
  });

  it("puts the channel's link in the queued prompt", async () => {
    const { app } = scene();
    const { output } = await app.queuePrompt();

    expect(output).toContainEqual({ node: 3, input: "model", origin: 1 });
  });

  it("leaves no trace in the graph once the prompt is built", async () => {
    const { app, graph, ks } = scene();
    const linksBefore = Object.keys(graph.links).length;

    await app.queuePrompt();

    expect(ks.inputs[0].link).toBeNull();
    expect(Object.keys(graph.links)).toHaveLength(linksBefore);
    expect(latestWirelessPlan()?.resolution.links).toHaveLength(1);
  });

  it("does not touch a graphToPrompt that is not a queue — saving a workflow must not gain wires", async () => {
    const { app, graph } = scene();
    const { output } = await app.graphToPrompt(graph);

    expect(output).not.toContainEqual({ node: 3, input: "model", origin: 1 });
  });

  it("obeys the off switch, per queue", async () => {
    const { app } = scene();
    app.setSetting(WIRELESS_ENABLED, false);

    expect((await app.queuePrompt()).output).toHaveLength(1); // only the user's own wire

    app.setSetting(WIRELESS_ENABLED, true);
    expect((await app.queuePrompt()).output).toHaveLength(2);
  });

  it("restores the graph even when serializing throws", async () => {
    const { app, graph, ks } = scene();
    const linksBefore = Object.keys(graph.links).length;
    app.graphToPrompt = vi.fn(async () => {
      throw new Error("serializer exploded");
    }) as unknown as typeof app.graphToPrompt;
    resetWirelessPromptBridge();
    installWirelessPromptBridge(app as unknown as ComfyApp);

    await expect(app.queuePrompt()).rejects.toThrow("serializer exploded");
    expect(ks.inputs[0].link).toBeNull();
    expect(Object.keys(graph.links)).toHaveLength(linksBefore);
  });
});

describe("channelColor", () => {
  it("gives a name the same colour every time, whatever else is in the graph", () => {
    expect(channelColor("MODEL")).toBe(channelColor("MODEL"));
    expect(channelColorSoft("MODEL", 0.5)).toContain("/ 0.5");
  });

  it("keeps hues far enough apart to read as different", () => {
    const hue = (name: string) => Number(/hsl\((\d+)/.exec(channelColor(name))![1]);
    expect(hue("MODEL") % 30).toBe(0);
    expect(hue("VAE") % 30).toBe(0);
  });
});

describe("overlay", () => {
  /**
   * Draws with links forced to `Always` — the default is now
   * `LINKS_SELECTED` (nothing selected, nothing drawn), and most of these
   * tests are about the baseline draw itself, not the selection filter, which
   * gets its own tests below.
   */
  function drawn(): {
    record: ReturnType<typeof createDrawContext>["record"];
    app: ReturnType<typeof createApp>;
    ch: FakeNode;
    ks: FakeNode;
  } {
    const src = source(1);
    const ch = channel(2);
    const ks = receiver(3, [["model", "MODEL"]]);
    ks.pos = [400, 100];
    const graph = createGraph([src, ch, ks]);
    wire(src, ch);

    const app = createApp({ graph });
    app.registerSetting(WIRELESS_ENABLED, true);
    app.registerSetting(WIRELESS_LINKS, LINKS_ALWAYS);
    (globalThis as unknown as { app: unknown }).app = app;
    invalidateWirelessPlan();
    installWirelessOverlay(app as unknown as ComfyApp);

    const { ctx, record } = createDrawContext();
    app.canvas.onDrawBackground?.(ctx, null);
    return { record, app, ch, ks };
  }

  it("draws a dashed link and names the channel at the input", () => {
    const { record } = drawn();
    expect(record.dashes).toContainEqual([6, 5]);
    expect(record.texts).toContain("MODEL");
  });

  it("draws nothing when the feature is switched off", () => {
    const { app } = drawn();
    app.setSetting(WIRELESS_ENABLED, false);
    const { ctx, record } = createDrawContext();
    app.canvas.onDrawBackground?.(ctx, null);

    expect(record.strokes).toBe(0);
    expect(record.texts).toEqual([]);
  });

  it("keeps the handler another extension already installed", () => {
    const app = createApp({ graph: createGraph([]) });
    app.registerSetting(WIRELESS_ENABLED, true);
    (globalThis as unknown as { app: unknown }).app = app;
    const earlier = vi.fn();
    app.canvas.onDrawBackground = earlier;
    installWirelessOverlay(app as unknown as ComfyApp);

    const { ctx } = createDrawContext();
    app.canvas.onDrawBackground?.(ctx, null);
    expect(earlier).toHaveBeenCalledTimes(1);
  });

  it("draws nothing when links are set to Never", () => {
    const { app } = drawn();
    app.registerSetting(WIRELESS_LINKS, LINKS_NEVER);
    const { ctx, record } = createDrawContext();
    app.canvas.onDrawBackground?.(ctx, null);

    expect(record.strokes).toBe(0);
    expect(record.texts).toEqual([]);
  });

  it("Only for the selected Nodes: draws nothing until an end of the link is selected", () => {
    const { app } = drawn();
    app.registerSetting(WIRELESS_LINKS, LINKS_SELECTED);

    const { ctx, record } = createDrawContext();
    app.canvas.onDrawBackground?.(ctx, null);
    expect(record.strokes).toBe(0);
  });

  it("Only for the selected Nodes: selecting the transmitter shows its links", () => {
    const { app, ch } = drawn();
    app.registerSetting(WIRELESS_LINKS, LINKS_SELECTED);
    (ch as unknown as { selected: boolean }).selected = true;

    const { ctx, record } = createDrawContext();
    app.canvas.onDrawBackground?.(ctx, null);
    expect(record.texts).toContain("MODEL");
  });

  it("Only for the selected Nodes: selecting the receiver shows the link feeding it too", () => {
    // The point of the rename from "selected Channel": clicking the node on the
    // *other* end of a wireless link should answer "where does this input come
    // from" without having to go find the transmitter first.
    const { app, ks } = drawn();
    app.registerSetting(WIRELESS_LINKS, LINKS_SELECTED);
    (ks as unknown as { selected: boolean }).selected = true;

    const { ctx, record } = createDrawContext();
    app.canvas.onDrawBackground?.(ctx, null);
    expect(record.texts).toContain("MODEL");
  });

  it("Only for the selected Nodes: selecting an unrelated node still shows nothing", () => {
    const src = source(1);
    const ch = channel(2);
    const ks = receiver(3, [["model", "MODEL"]]);
    const bystander = receiver(4, [["latent", "LATENT"]]);
    const graph = createGraph([src, ch, ks, bystander]);
    wire(src, ch);

    const app = createApp({ graph });
    app.registerSetting(WIRELESS_ENABLED, true);
    app.registerSetting(WIRELESS_LINKS, LINKS_SELECTED);
    (globalThis as unknown as { app: unknown }).app = app;
    invalidateWirelessPlan();
    installWirelessOverlay(app as unknown as ComfyApp);
    (bystander as unknown as { selected: boolean }).selected = true;

    const { ctx, record } = createDrawContext();
    app.canvas.onDrawBackground?.(ctx, null);
    expect(record.strokes).toBe(0);
  });

  it("Wireless.Labels off keeps the link but drops the name tag", () => {
    const { app } = drawn();
    app.registerSetting(WIRELESS_LABELS, false);
    const { ctx, record } = createDrawContext();
    app.canvas.onDrawBackground?.(ctx, null);

    expect(record.dashes).toContainEqual([6, 5]);
    expect(record.texts).toEqual([]);
  });

  it("survives a graph it cannot draw, rather than blanking the canvas", () => {
    const src = source(1);
    const ch = channel(2);
    const ks = receiver(3, [["model", "MODEL"]]);
    const graph = createGraph([src, ch, ks]);
    wire(src, ch);
    // A node core would have positioned, that something else has broken.
    (ks as unknown as { getInputPos: unknown }).getInputPos = () => {
      throw new Error("no layout");
    };

    const app = createApp({ graph });
    app.registerSetting(WIRELESS_ENABLED, true);
    (globalThis as unknown as { app: unknown }).app = app;
    invalidateWirelessPlan();
    installWirelessOverlay(app as unknown as ComfyApp);

    const { ctx, record } = createDrawContext();
    expect(() => app.canvas.onDrawBackground?.(ctx, null)).not.toThrow();
    expect(record.strokes).toBe(0);
  });
});

describe("wirelessDiagnostics", () => {
  // Each scenario gets its own graph, deliberately — packing several into one
  // shared set of channel names is exactly the trap this module's own naming
  // rules exist to catch: a channel's *type* comes from whatever real output
  // is plugged into its transmitter (`channels.ts` reads the link's origin),
  // not from any type written on the transmitter's own socket, so reusing one
  // MODEL-output `source()` for what was meant to be a VAE scenario silently
  // produces a second, unlabelled MODEL channel instead — caught while writing
  // this suite, not shipped in it.

  it("reports a dormant subscription, pointing at the node it sits on", () => {
    const src = source(1);
    const other = source(9);
    const node = receiver(10, [["model", "MODEL"]], { model: "MODEL" });
    node.title = "Dormant KSampler";
    const ch = channel(2);
    const graph = createGraph([src, other, node, ch]);
    wire(src, ch);
    wire(other, node); // a real wire occupies the input ahead of the subscription

    // The channel is doubly reported: dormant on the one input that named it,
    // and unused overall — both true, since nothing else took it either.
    const rows = wirelessDiagnostics(graph, planWireless(graph));
    expect(rows).toEqual([
      { kind: "dormant", nodeId: 10, nodeTitle: "Dormant KSampler", input: "model", channelName: "MODEL" },
      { kind: "unusedChannel", nodeId: 2, nodeTitle: "FiLChannel", channelName: "MODEL" },
    ]);
  });

  it("reports an ambiguous input with every candidate channel's name", () => {
    const src = source(1);
    const node = receiver(11, [["model", "MODEL"]]);
    node.title = "Ambiguous KSampler";
    const chA = channel(2);
    const chB = channel(3);
    const graph = createGraph([src, node, chA, chB]);
    wire(src, chA);
    wire(src, chB);

    // Neither candidate got picked, so both come back unused as well.
    const rows = wirelessDiagnostics(graph, planWireless(graph));
    expect(rows).toEqual([
      { kind: "ambiguous", nodeId: 11, nodeTitle: "Ambiguous KSampler", input: "model", type: "MODEL", candidates: ["MODEL", "MODEL 2"] },
      { kind: "unusedChannel", nodeId: 2, nodeTitle: "FiLChannel", channelName: "MODEL" },
      { kind: "unusedChannel", nodeId: 3, nodeTitle: "FiLChannel", channelName: "MODEL 2" },
    ]);
  });

  it("reports a type mismatch with both types named", () => {
    const vaeSrc = source(1, "VAE");
    const node = receiver(12, [["model", "MODEL"]], { model: "VAE" });
    node.title = "Mismatch KSampler";
    const ch = channel(2, ["VAE"]);
    const graph = createGraph([vaeSrc, node, ch]);
    wire(vaeSrc, ch);

    const rows = wirelessDiagnostics(graph, planWireless(graph));
    expect(rows).toEqual([
      { kind: "typeMismatch", nodeId: 12, nodeTitle: "Mismatch KSampler", input: "model", channelName: "VAE", inputType: "MODEL", channelType: "VAE" },
      { kind: "unusedChannel", nodeId: 2, nodeTitle: "FiLChannel", channelName: "VAE" },
    ]);
  });

  it("reports a subscription to a channel that does not exist", () => {
    const node = receiver(13, [["clip", "CLIP"]], { clip: "Retired" });
    node.title = "Unknown KSampler";
    const graph = createGraph([node]);

    const rows = wirelessDiagnostics(graph, planWireless(graph));
    expect(rows).toEqual([
      { kind: "unknownChannel", nodeId: 13, nodeTitle: "Unknown KSampler", input: "clip", channelName: "Retired" },
    ]);
  });

  it("reports a node subscribed to the channel it itself feeds", () => {
    const loop = createNode({
      id: 14,
      comfyClass: "ModelPatcher",
      inputs: [slot("model", "MODEL")],
      outputs: [slot("MODEL", "MODEL")],
      properties: { fil_wireless: { subs: { model: "Loop channel" } } },
    });
    loop.title = "Loop node";
    const ch = channel(2, ["MODEL"], ["Loop channel"]);
    const graph = createGraph([loop, ch]);
    wire(loop, ch);

    const rows = wirelessDiagnostics(graph, planWireless(graph));
    expect(rows).toEqual([
      { kind: "selfLoop", nodeId: 14, nodeTitle: "Loop node", input: "model", channelName: "Loop channel" },
      { kind: "unusedChannel", nodeId: 2, nodeTitle: "FiLChannel", channelName: "Loop channel" },
    ]);
  });

  it("reports a channel nothing in the graph ended up bound to, pointing at its transmitter", () => {
    const src = source(1, "AUDIO");
    const ch = channel(2, ["AUDIO"], ["Lonely"]);
    ch.title = "Lonely Channel";
    const graph = createGraph([src, ch]); // no receiver anywhere with an AUDIO input
    wire(src, ch);

    const rows = wirelessDiagnostics(graph, planWireless(graph));
    expect(rows).toEqual([{ kind: "unusedChannel", nodeId: 2, nodeTitle: "Lonely Channel", channelName: "Lonely" }]);
  });

  it("is empty for a graph with nothing wrong", () => {
    const src = source(1);
    const ch = channel(2);
    const ks = receiver(3, [["model", "MODEL"]]);
    const graph = createGraph([src, ch, ks]);
    wire(src, ch);

    const plan = planWireless(graph);
    expect(wirelessDiagnostics(graph, plan)).toEqual([]);
  });

  it("falls back to the node's type, then its id, when there is no title", () => {
    const src = source(1);
    const ch = channel(2);
    const ks = receiver(3, [["latent", "LATENT"]], { latent: "MODEL" }); // typeMismatch, no title set
    const graph = createGraph([src, ch, ks]);
    wire(src, ch);

    const rows = wirelessDiagnostics(graph, planWireless(graph));
    expect(rows[0]?.nodeTitle).toBe("KSampler"); // receiver()'s comfyClass, per graphAccess.nodeTitle
  });
});

/**
 * Subgraph boundaries (`wireless.md` §3, "Границы"): a channel resolves only
 * within the graph it lives in. `graphTree.ts` mirrors LiteGraph's own
 * `[rootGraph, ...rootGraph.subgraphs.values()]` enumeration; these tests
 * pin that every graph in a workflow gets its own independent resolution,
 * and that nothing leaks across the boundary either way.
 */
describe("graphsInTree", () => {
  it("is just the graph itself when there are no subgraphs", () => {
    const graph = createGraph([source(1)]);
    expect(graphsInTree(graph)).toEqual([graph]);
  });

  it("lists the root and every subgraph definition", () => {
    const root = createSubgraphTree(
      [source(1)],
      [{ id: "sub-a", nodes: [source(2)] }, { id: "sub-b", nodes: [source(3)] }],
    );
    const graphs = graphsInTree(root);
    expect(graphs).toHaveLength(3);
    expect(graphs[0]).toBe(root);
    expect(new Set(graphs)).toEqual(new Set([root, root.subgraphs!.get("sub-a"), root.subgraphs!.get("sub-b")]));
  });

  it("works from a subgraph's own reference too, not just the root's", () => {
    const root = createSubgraphTree([source(1)], [{ id: "sub-a", nodes: [source(2)] }]);
    const sub = root.subgraphs!.get("sub-a")!;
    expect(graphsInTree(sub)).toEqual(graphsInTree(root));
  });
});

describe("planWirelessTree / applyWirelessTree", () => {
  it("resolves a channel inside a subgraph against receivers in that same subgraph", () => {
    const rootSrc = source(1);
    const rootCh = channel(2);
    const rootKs = receiver(3, [["model", "MODEL"]]);

    const subSrc = source(10, "VAE");
    const subCh = channel(11, ["VAE"]);
    const subKs = receiver(12, [["vae", "VAE"]]);

    const root = createSubgraphTree([rootSrc, rootCh, rootKs], [{ id: "sub-a", nodes: [subSrc, subCh, subKs] }]);
    wire(rootSrc, rootCh);
    wire(subSrc, subCh);

    const tree = planWirelessTree(root);
    expect(tree.entries).toHaveLength(2);

    const rootPlan = tree.entries.find((e) => e.graph === root)!.plan;
    const subPlan = tree.entries.find((e) => e.graph !== root)!.plan;

    expect(rootPlan.resolution.links).toEqual([
      { channelName: "MODEL", origin_id: 1, origin_slot: 0, target_id: 3, target_slot: 0 },
    ]);
    expect(subPlan.resolution.links).toEqual([
      { channelName: "VAE", origin_id: 10, origin_slot: 0, target_id: 12, target_slot: 0 },
    ]);
  });

  it("does not let a channel in one graph feed a receiver in another", () => {
    const rootSrc = source(1);
    const rootCh = channel(2);
    // A receiver sitting inside the subgraph, wanting the exact same type the
    // root channel carries — it must stay unserved; crossing the boundary
    // would mean a link recorded in the root that the subgraph's own
    // resolution (and, at execution time, its own serializer) never sees.
    const subKs = receiver(20, [["model", "MODEL"]]);

    const root = createSubgraphTree([rootSrc, rootCh], [{ id: "sub-a", nodes: [subKs] }]);
    wire(rootSrc, rootCh);
    const tree = planWirelessTree(root);
    const subPlan = tree.entries.find((e) => e.graph !== root)!.plan;

    expect(subPlan.resolution.links).toEqual([]);
    // Unreached because it was never in scope, not a resolver mistake: the
    // subgraph's own channel list is empty, so nothing marks it "ambiguous"
    // either — the input never has a candidate to begin with.
    expect(subPlan.resolution.ambiguous).toEqual([]);
  });

  it("applies and rolls back every graph in the tree, not just the root", () => {
    const rootSrc = source(1);
    const rootCh = channel(2);
    const rootKs = receiver(3, [["model", "MODEL"]]);

    const subSrc = source(10, "VAE");
    const subCh = channel(11, ["VAE"]);
    const subKs = receiver(12, [["vae", "VAE"]]);

    const root = createSubgraphTree([rootSrc, rootCh, rootKs], [{ id: "sub-a", nodes: [subSrc, subCh, subKs] }]);
    const sub = root.subgraphs!.get("sub-a")!;
    wire(rootSrc, rootCh);
    wire(subSrc, subCh);

    const applied = applyWirelessTree(root);
    expect(applied.created).toBe(2);
    expect(rootKs.inputs[0].link).not.toBeNull();
    expect(subKs.inputs[0].link).not.toBeNull();

    applied.restore();
    expect(rootKs.inputs[0].link).toBeNull();
    expect(subKs.inputs[0].link).toBeNull();
    // One link each — the user's own permanent wire (rootSrc→rootCh,
    // subSrc→subCh). Only the temporary channel link is undone.
    expect(Object.keys(root.links)).toHaveLength(1);
    expect(Object.keys(sub.links)).toHaveLength(1);
  });
});

describe("wirelessDiagnosticsTree", () => {
  it("tags every row with the graph it came from, root and subgraphs alike", () => {
    const rootKs = receiver(3, [["clip", "CLIP"]], { clip: "Missing" });
    rootKs.title = "Root KSampler";

    const subKs = receiver(12, [["clip", "CLIP"]], { clip: "AlsoMissing" });
    subKs.title = "Sub KSampler";

    const root = createSubgraphTree([rootKs], [{ id: "sub-a", nodes: [subKs] }]);
    const sub = root.subgraphs!.get("sub-a")!;

    const rows = wirelessDiagnosticsTree(planWirelessTree(root));
    expect(rows).toHaveLength(2);
    expect(rows.find((r) => r.nodeTitle === "Root KSampler")?.graph).toBe(root);
    expect(rows.find((r) => r.nodeTitle === "Sub KSampler")?.graph).toBe(sub);
  });
});

describe("promptBridge with subgraphs", () => {
  // Its own reset: the `beforeEach` inside `describe("promptBridge", ...)`
  // above is scoped to that block only, and a bridge left installed from an
  // earlier test silently makes `installWirelessPromptBridge` here a no-op
  // (`if (state.installed) return`) — every wrapper stays whatever the
  // previous test's closure captured, so this app's own graphToPrompt is
  // simply never wrapped. That is exactly what "no link, ever, no error"
  // looks like, and it is what happened here before this line existed.
  beforeEach(() => {
    resetWirelessPromptBridge();
  });

  it("resolves and wires the subgraph's own channel during the queue, not just the root's", async () => {
    const rootSrc = source(1);
    const rootCh = channel(2);
    const rootKs = receiver(3, [["model", "MODEL"]]);

    const subSrc = source(10, "VAE");
    const subCh = channel(11, ["VAE"]);
    const subKs = receiver(12, [["vae", "VAE"]]);

    const root = createSubgraphTree([rootSrc, rootCh, rootKs], [{ id: "sub-a", nodes: [subSrc, subCh, subKs] }]);
    const sub = root.subgraphs!.get("sub-a")!;
    wire(rootSrc, rootCh);
    wire(subSrc, subCh);

    const app = createApp({ graph: root });
    app.registerSetting(WIRELESS_ENABLED, true);
    (globalThis as unknown as { app: unknown }).app = app;

    // Installed *before* the bridge, so the bridge's own wrapper closes over
    // this one as "the original" and calls it — the only way to observe state
    // mid-flight, since the bridge always restores in its own `finally`
    // before `queuePrompt()`'s promise resolves.
    let subLinkDuringQueue: number | null | undefined;
    const beforeBridge = app.graphToPrompt;
    app.graphToPrompt = async (...args: unknown[]) => {
      subLinkDuringQueue = subKs.inputs[0].link;
      return beforeBridge(...(args as [unknown]));
    };
    installWirelessPromptBridge(app as unknown as ComfyApp);

    await app.queuePrompt();

    expect(subLinkDuringQueue).not.toBeNull();
    expect(rootKs.inputs[0].link).toBeNull();
    expect(subKs.inputs[0].link).toBeNull();
    expect(Object.keys(sub.links)).toHaveLength(1); // the user's own wire from subSrc to subCh — the temporary one is gone
  });
});
