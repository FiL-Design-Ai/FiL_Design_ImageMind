/**
 * Global store for the Wireless Dashboard.
 *
 * Controls the floating/modal HUD visibility, search/filter state, and graph-wide
 * actions (focusing transmitters and receivers on canvas, muting/unmuting, unlinking).
 */
import { defineStore } from "pinia";
import { ref } from "vue";
import type { WirelessChannel, WirelessGraph, WirelessNode, NodeId } from "@/nodes2/wireless/types";
import { allNodes } from "@/nodes2/wireless/graphAccess";
import { forgetChannel } from "@/nodes2/wireless/subscriptions";
import { invalidateWirelessPlan, liveTreePlan } from "@/nodes2/wireless/livePlan";
import { channelTargets, setChannelTarget } from "@/nodes2/wireless/targets";
import type { WirelessPlan } from "@/nodes2/wireless/plan";
import { toast } from "./toastStore";

export interface HostCanvas {
  graph?: WirelessGraph;
  selected_nodes?: Record<NodeId, WirelessNode>;
  selectNode?: (node: WirelessNode, add?: boolean) => void;
  deselectAll?: () => void;
  centerOnNode?: (node: WirelessNode) => void;
  setDirty?: (a: boolean, b?: boolean) => void;
  openSubgraph?: (subgraph: WirelessGraph, fromNode: WirelessNode) => void;
  draw?: (force?: boolean) => void;
}

export interface HostApp {
  graph?: WirelessGraph;
  canvas?: HostCanvas;
}

function getHostApp(): HostApp {
  return (globalThis as unknown as { app?: HostApp }).app ?? {};
}

export const useWirelessStore = defineStore("wirelessDashboard", () => {
  const isDashboardOpen = ref(false);
  const activeTab = ref<"overview" | "diagnostics">("overview");
  const activeTypeFilter = ref<string>("ALL");
  const searchQuery = ref<string>("");

  function openDashboard(tab: "overview" | "diagnostics" = "overview") {
    activeTab.value = tab;
    isDashboardOpen.value = true;
  }

  function closeDashboard() {
    isDashboardOpen.value = false;
  }

  function toggleDashboard() {
    isDashboardOpen.value = !isDashboardOpen.value;
  }

  /**
   * Selects and centers the channel transmitter and all its receiving nodes on the canvas.
   */
  function focusChannelAndReceivers(graph: WirelessGraph, channel: WirelessChannel) {
    const app = getHostApp();
    const canvas = app.canvas;
    if (!canvas) return;

    // 1. Switch to subgraph if this channel lives inside one
    const tree = liveTreePlan(app.graph ?? graph);
    let targetGraph = graph;
    if (tree && canvas.openSubgraph && app.graph) {
      for (const entry of tree.entries) {
        if (entry.plan.channels.some((c) => c.name === channel.name && c.nodeId === channel.nodeId)) {
          targetGraph = entry.graph;
          if (entry.graph !== app.graph) {
            for (const rootNode of allNodes(app.graph)) {
              if ((rootNode as unknown as { subgraphs?: WirelessGraph[] }).subgraphs?.includes(entry.graph)) {
                canvas.openSubgraph(entry.graph, rootNode);
                break;
              }
            }
          }
          break;
        }
      }
    }

    const nodes = allNodes(targetGraph);
    const transmitter = nodes.find((n) => n.id === channel.nodeId);

    // Find all receiving nodes from the current plan
    const treeEntry = tree?.entries.find((e) => e.graph === targetGraph);
    const plan = treeEntry?.plan;
    const receivingNodeIds = new Set<NodeId>();

    if (plan) {
      for (const link of plan.resolution.links) {
        if (link.channelName === channel.name) {
          receivingNodeIds.add(link.target_id);
        }
      }
    }

    // Select nodes on canvas
    if (canvas.deselectAll) {
      canvas.deselectAll();
    }

    if (transmitter && canvas.selectNode) {
      canvas.selectNode(transmitter, false);
      for (const node of nodes) {
        if (receivingNodeIds.has(node.id)) {
          canvas.selectNode(node, true);
        }
      }
    }

    if (transmitter && canvas.centerOnNode) {
      canvas.centerOnNode(transmitter);
    }

    canvas.setDirty?.(true, true);
    toast.info(`Focused channel "${channel.name}" and ${receivingNodeIds.size} receivers`);
  }

  /**
   * Unlinks all receivers from this channel.
   */
  function unlinkAll(graph: WirelessGraph, channelName: string) {
    const nodes = allNodes(graph);
    for (const node of nodes) {
      forgetChannel(node, channelName);
    }
    invalidateWirelessPlan();
    const app = getHostApp();
    app.canvas?.setDirty?.(true, true);
    toast.success(`Unlinked all receivers from channel "${channelName}"`);
  }

  /**
   * Mute: Blocks all targets of this channel so auto-distribution stops feeding them.
   */
  function muteChannel(graph: WirelessGraph, channel: WirelessChannel) {
    const tree = liveTreePlan(graph);
    const entry = tree?.entries.find((e) => e.graph === graph);
    if (!entry) return;

    const plan: WirelessPlan = entry.plan;
    const targets = channelTargets(graph, plan, channel);
    const nodes = allNodes(graph);

    for (const target of targets) {
      if (target.checked) {
        const node = nodes.find((n) => n.id === target.nodeId);
        if (node) {
          setChannelTarget(plan, node, target.inputName, channel, false);
        }
      }
    }
    invalidateWirelessPlan();
    const app = getHostApp();
    app.canvas?.setDirty?.(true, true);
    toast.info(`Channel "${channel.name}" muted`);
  }

  /**
   * Unmute: Restores targets by unblocking them.
   */
  function unmuteChannel(graph: WirelessGraph, channel: WirelessChannel) {
    const tree = liveTreePlan(graph);
    const entry = tree?.entries.find((e) => e.graph === graph);
    if (!entry) return;

    const plan: WirelessPlan = entry.plan;
    const targets = channelTargets(graph, plan, channel);
    const nodes = allNodes(graph);

    for (const target of targets) {
      if (!target.checked && target.state === "off") {
        const node = nodes.find((n) => n.id === target.nodeId);
        if (node) {
          setChannelTarget(plan, node, target.inputName, channel, true);
        }
      }
    }
    invalidateWirelessPlan();
    const app = getHostApp();
    app.canvas?.setDirty?.(true, true);
    toast.success(`Channel "${channel.name}" unmuted`);
  }

  return {
    isDashboardOpen,
    activeTab,
    activeTypeFilter,
    searchQuery,
    openDashboard,
    closeDashboard,
    toggleDashboard,
    focusChannelAndReceivers,
    unlinkAll,
    muteChannel,
    unmuteChannel,
  };
});
