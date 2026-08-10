/**
 * Shared types for the wireless-channel core. Structural only — this module
 * never imports LiteGraph, it just describes the slice of a graph it reads
 * and writes. See `wireless.md` at the repo root for the model these types
 * encode.
 */

export type NodeId = string | number;

/** The transmitter node type — `nodes/node_channel.py`. */
export const CHANNEL_NODE_TYPE = "FiLChannel";

/**
 * The widget carrying the channel's name, as declared by the node's schema.
 *
 * A widget rather than a hidden property, so the name is visible on the node
 * and editable by clicking it — the whole point of this feature is that you can
 * see where data comes from without opening anything.
 */
/**
 * The transmitter's data inputs. `io.Autogrow.Input("value", template=
 * Autogrow.TemplatePrefix(..., prefix="value"))` in `nodes/node_channel.py`
 * grows them, and ComfyUI's own `finalize_prefix` (`comfy_api/latest/_io.py`)
 * joins the outer id and the per-slot id with a dot — so a slot's actual
 * `name` is `value.value0`, `value.value1`, ..., not the bare `value0` a naive
 * reading of the schema suggests. **Verified on a live node, twice**: once
 * freshly created, once with two inputs already wired — both showed the dotted
 * form. Reasoning from the Python source alone got this wrong.
 */
const CHANNEL_SLOT_RE = /^value\.value(\d+)$/;

export function isChannelValueInput(name: string | undefined): boolean {
  return !!name && CHANNEL_SLOT_RE.test(name);
}

/**
 * The label LiteGraph fills a channel slot with before anyone touches it —
 * `value0` for `value.value0`, and so on. `getInputPos`'s sibling in
 * `LGraphNode`, not this pack, is what puts that there; the point of exporting
 * it is so a slot renamed by the user (`label` no longer equal to this) can be
 * told apart from one nobody has renamed (`label` still equal to this) without
 * every caller re-deriving the rule.
 */
export function defaultChannelSlotLabel(name: string): string | undefined {
  const match = CHANNEL_SLOT_RE.exec(name);
  return match ? `value${match[1]}` : undefined;
}

export interface WirelessSlot {
  name: string;
  type: string;
  /** What the user renamed this slot to, via core's own "Rename Slot". */
  label?: string;
  /**
   * Set when this input is the socket side of a widget — a constant the user
   * typed, which this frontend gives a socket to whether or not anyone
   * converted it (`ensureWidgetForInput`, and every `widget: { name }` in a
   * saved workflow). Rule 9 turns on this field: `steps`, `tile_size` and
   * `seed` are all INT and mean nothing like each other, so a channel may
   * only land on one of them by name.
   */
  widget?: { name?: string } | null;
  /** Input slots: the single link feeding them, or null/undefined when free. */
  link?: number | null;
  /** Output slots: every link id fanning out of them. */
  links?: number[] | null;
}

export interface WirelessLink {
  origin_id: NodeId;
  origin_slot: number;
  target_id: NodeId;
  target_slot: number;
  /** Some hosts stamp the link's own type; used only when the origin slot cannot be read. */
  type?: string;
}

export interface WirelessNode {
  id: NodeId;
  type?: string;
  comfyClass?: string;
  /** What the node shows in its header — read only to name it in the target list. */
  title?: string;
  /** LiteGraph execution mode — 0 always, 2 muted, 4 bypassed. Read, never filtered on. */
  mode?: number;
  properties?: Record<string, unknown>;
  inputs?: WirelessSlot[];
  outputs?: WirelessSlot[];
  /** Native widgets — the constants a user sets. Read only by widget feeds. */
  widgets?: Array<{ name?: string; type?: string }>;
  /**
   * Declared in method syntax on purpose. A host's own `connect()` is typed
   * against its own node class, which under `strictFunctionTypes` no property
   * of function type can accept — method shorthand is checked bivariantly, so
   * a real LGraphNode (and the test fake) structurally fits here.
   */
  connect?(originSlot: number, target: WirelessNode, targetSlot: number): unknown;
}

export interface WirelessGraph {
  /** LiteGraph's own flat node list for *this* graph only — a subgraph's nodes live in a separate `WirelessGraph`. */
  _nodes?: WirelessNode[];
  links?: Record<number, WirelessLink | undefined>;
  getNodeById?: (id: NodeId) => WirelessNode | null | undefined;
  /**
   * The top-level graph this one descends from — itself when this *is* the
   * root. Real `LGraph`s always have this; a graph built without it (most test
   * fixtures) is simply treated as if it were the only graph that exists.
   */
  rootGraph?: WirelessGraph;
  /**
   * Every subgraph *definition* reachable from the root, keyed by id —
   * `LGraph.ts`'s own `[this.rootGraph, ...this.rootGraph.subgraphs.values()]`
   * pattern is what `graphTree.ts` copies. One definition can back several
   * placements on the canvas; there is one shared `WirelessGraph` for it
   * regardless, which is why resolving it once is correct for all of them.
   */
  subgraphs?: Map<unknown, WirelessGraph>;
}

/**
 * `node.properties.fil_wireless` on a receiver node — keyed by input name, not
 * slot index.
 *
 * Both halves live on the *receiver* even though the user edits them from the
 * transmitter's panel: an input can only ever name one source, so a conflict is
 * impossible by construction (`wireless.md` §3).
 *
 * - `subs` — this input takes that channel, whatever else is going on.
 * - `blocked` — auto-distribution must skip this input for those channels. It
 *   is what an unticked box in the transmitter's target list writes: the user
 *   said "not here", and auto-distribution would otherwise put it straight back
 *   on the next frame.
 */
export interface WirelessSubscriptions {
  subs?: Record<string, string>;
  blocked?: Record<string, string[]>;
}

/** A channel is derived state: it exists exactly as long as its transmitter's input is wired. */
export interface WirelessChannel {
  nodeId: NodeId;
  /** Which input of that node — one transmitter carries one channel per wired input. */
  slotIndex: number;
  name: string;
  type: string;
  origin_id: NodeId;
  origin_slot: number;
}

/** One real connection `applyWirelessLinks` should make. */
export interface LinkToCreate {
  channelName: string;
  origin_id: NodeId;
  origin_slot: number;
  target_id: NodeId;
  target_slot: number;
}

interface DiagnosticEntry {
  node_id: NodeId;
  input: string;
}

/** Input already carried a real wire — the subscription just goes quiet (rule 1). */
export interface DormantEntry extends DiagnosticEntry {
  channelName: string;
}

/** Free input whose type matches two or more channels — auto-distribution declines to guess (rule 3). */
export interface AmbiguousEntry extends DiagnosticEntry {
  type: string;
  candidates: string[];
}

/** Subscribed channel exists but its type does not match the input (rule 4). */
export interface TypeMismatchEntry extends DiagnosticEntry {
  channelName: string;
  inputType: string;
  channelType: string;
}

/** Subscription names a channel that does not currently exist (rule 5). */
export interface UnknownChannelEntry extends DiagnosticEntry {
  channelName: string;
}

/**
 * The subscribed channel is fed by this very node — connecting would loop it
 * back into itself (rule 6). Only explicit subscriptions are reported: auto
 * distribution skipping its own source is routine, not a mistake to surface.
 */
export interface SelfLoopEntry extends DiagnosticEntry {
  channelName: string;
}

export interface WirelessResolution {
  links: LinkToCreate[];
  dormant: DormantEntry[];
  ambiguous: AmbiguousEntry[];
  typeMismatch: TypeMismatchEntry[];
  unknownChannel: UnknownChannelEntry[];
  selfLoop: SelfLoopEntry[];
  /** Channel names nothing ended up bound to. */
  unusedChannels: string[];
}
