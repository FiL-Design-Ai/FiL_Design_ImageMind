/**
 * Wireless channels — the feature's logic core and its one seam into the host.
 *
 * Layering, and it is worth keeping: everything under here is pure functions
 * over a graph-shaped object, except `promptBridge.ts`, which is the only file
 * that knows ComfyUI exists. See `wireless.md` at the repo root for the model.
 */

export type {
  AmbiguousEntry,
  DormantEntry,
  LinkToCreate,
  SelfLoopEntry,
  TypeMismatchEntry,
  UnknownChannelEntry,
  WirelessChannel,
  WirelessGraph,
  WirelessNode,
  WirelessResolution,
  WirelessSlot,
} from "./types";
export { CHANNEL_NODE_TYPE, defaultChannelSlotLabel, isChannelValueInput } from "./types";
export { collectChannels } from "./channels";
export {
  wirelessDiagnostics,
  wirelessDiagnosticsTree,
  type DiagnosticKind,
  type DiagnosticRow,
  type GraphedDiagnosticRow,
} from "./diagnostics";
export { applySlotNames, isAutoLabel, AUTO_LABEL_PROPERTY, type SlotNaming } from "./slotLabels";
export { applySlotColors } from "./slotColors";
export { resolveWireless } from "./resolve";
export {
  blockInput,
  forgetChannel,
  isBlocked,
  subscribeInput,
  subscribedChannel,
  subscriptionsOf,
  unblockInput,
  unsubscribeInput,
} from "./subscriptions";
export {
  channelTargets,
  isTargetBlocked,
  setChannelTarget,
  type ChannelTarget,
  type ChannelTargetState,
} from "./targets";
export { applyWirelessLinks, type AppliedWireless } from "./applyLinks";
export { isChannelNode } from "./graphAccess";
export { graphsInTree } from "./graphTree";
export {
  applyWireless,
  applyWirelessTree,
  planWireless,
  planWirelessTree,
  type AppliedWirelessTree,
  type WirelessPlan,
  type WirelessTreePlan,
  type WirelessTreePlanEntry,
} from "./plan";
export { channelColor, channelColorSoft } from "./channelColor";
export { invalidateWirelessPlan, livePlan, liveTreePlan } from "./livePlan";
export { installWirelessOverlay } from "./overlay";
export {
  installWirelessPromptBridge,
  latestWirelessPlan,
  latestWirelessTreePlan,
  queueingPrompt,
  resetWirelessPromptBridge,
} from "./promptBridge";
