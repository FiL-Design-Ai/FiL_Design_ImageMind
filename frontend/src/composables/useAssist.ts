/**
 * The assist ops (rephrase / densify / expand) shared by the Prompt Director
 * and the Prompter panels, plus the graph plumbing their buttons need:
 * provider/model/dials read off the `config` link's origin node, the disabled
 * state flipped per-instance through onConnectionsChange, and a busy spinner
 * while the `/director_assist` call runs.
 */
import { onBeforeUnmount, onMounted, ref, type Ref } from "vue";
import { providerApi } from "@/api/client";
import { useI18n } from "@/composables/useI18n";
import type { IconName } from "@/composables/icons";
import { findFilWidget } from "@/nodes2/util";
import { toast } from "@/stores/toastStore";
import type { LGraphNode } from "@/types/comfy";

export interface AssistOp {
  id: "rephrase" | "densify" | "expand";
  icon: IconName;
  ttKey: string;
  ttFallback: string;
}

export const ASSIST_OPS: AssistOp[] = [
  { id: "rephrase", icon: "repeat", ttKey: "pda_rephrase_tt", ttFallback: "Rephrase — same meaning, clearer wording." },
  { id: "densify", icon: "contract", ttKey: "pda_densify_tt", ttFallback: "Densify — shorter and denser, no filler." },
  { id: "expand", icon: "expand", ttKey: "pda_expand_tt", ttFallback: "Expand — add light, material, optics, depth." },
];

// The hook is untyped on LGraphNode (index signature only), hence the narrow
// cast — same shape LGraphNodePrototype declares it.
type ConnectionsChangeHook = (...args: unknown[]) => unknown;

export function useAssist(
  getNode: () => LGraphNode | undefined,
  text: Ref<string>,
  editable: Ref<boolean>,
) {
  const { t } = useI18n();

  const configLinked = ref(false);
  function refreshConfigLinked() {
    const node = getNode();
    configLinked.value = node?.inputs?.some((i) => i.name === "config" && i.link != null) ?? false;
  }

  const busyOp = ref<string | null>(null);

  function resolveProviderConfig() {
    const node = getNode();
    const linkId = node?.inputs?.find((i) => i.name === "config")?.link;
    const link = node?.graph?.links && linkId != null ? node.graph.links[linkId] : undefined;
    const origin = link?.origin_id != null ? node?.graph?.getNodeById?.(link.origin_id) : undefined;
    if (!origin) return null;
    const provider = String(findFilWidget(origin, "provider")?.value ?? "").trim();
    const model = String(findFilWidget(origin, "model")?.value ?? "").trim();
    if (!provider || !model) return null;
    const temperature = Number(findFilWidget(origin, "temperature")?.value);
    const rateLimit = Number(findFilWidget(origin, "rate_limit_ms")?.value);
    return {
      provider,
      model,
      temperature: Number.isFinite(temperature) ? temperature : undefined,
      rate_limit_ms: Number.isFinite(rateLimit) ? rateLimit : undefined,
    };
  }

  async function assist(op: AssistOp) {
    if (busyOp.value || !editable.value) return;
    const cfg = resolveProviderConfig();
    if (!cfg) {
      toast.error(t("pda_no_config", "Assist buttons need a Provider Loader wired into config."));
      return;
    }
    if (!text.value.trim()) {
      toast.warning(t("pda_empty", "Type some text first — there is nothing to rewrite."));
      return;
    }
    busyOp.value = op.id;
    try {
      const res = await providerApi.directorAssist({ operation: op.id, text: text.value, ...cfg });
      if (res.result) text.value = res.result;
      else toast.error(res.error ?? t("pda_failed", "Assist call failed."));
    } catch (err) {
      toast.error(String((err as Error)?.message ?? err));
    } finally {
      busyOp.value = null;
    }
  }

  // LiteGraph only announces link changes through onConnectionsChange; patch
  // it per instance so the disabled state flips on connect and disconnect.
  let originalOnConnectionsChange: ConnectionsChangeHook | null = null;
  onMounted(() => {
    refreshConfigLinked();
    const node = getNode() as (LGraphNode & { onConnectionsChange?: ConnectionsChangeHook }) | undefined;
    if (node) {
      const existing = node.onConnectionsChange ?? null;
      originalOnConnectionsChange = existing;
      node.onConnectionsChange = function (...args: unknown[]) {
        const result = existing?.apply(this, args);
        refreshConfigLinked();
        return result;
      };
    }
  });
  onBeforeUnmount(() => {
    const node = getNode() as (LGraphNode & { onConnectionsChange?: ConnectionsChangeHook }) | undefined;
    if (node && originalOnConnectionsChange) node.onConnectionsChange = originalOnConnectionsChange;
  });

  return { configLinked, busyOp, assist };
}
