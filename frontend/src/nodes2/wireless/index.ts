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
export {
  applySlotNames,
  isAutoLabel,
  setUserSlotName,
  restoreUserSlotNames,
  AUTO_LABEL_PROPERTY,
  USER_NAMES_PROPERTY,
  type SlotNaming,
} from "./slotLabels";
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
  assignCluster,
  channelTargets,
  isTargetBlocked,
  setChannelTarget,
  takeOverWiredInput,
  undoTakeOver,
  type ChannelTarget,
  type ChannelTargetState,
  type TakeOverUndo,
} from "./targets";
export { applyWirelessLinks, type AppliedWireless } from "./applyLinks";
export { isChannelNode, nodeTitleById } from "./graphAccess";
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
export { channelColor, channelColorFor, channelColorSoft, soften, typeColor } from "./channelColor";
export { beginGraphConfigure, endGraphConfigure, graphBeingConfigured } from "./graphLoadGuard";
export { invalidateWirelessPlan, livePlan, liveTreePlan } from "./livePlan";
export { installWirelessOverlay } from "./overlay";
export {
  installWirelessPromptBridge,
  latestWirelessPlan,
  latestWirelessTreePlan,
  queueingPrompt,
  resetWirelessPromptBridge,
} from "./promptBridge";
