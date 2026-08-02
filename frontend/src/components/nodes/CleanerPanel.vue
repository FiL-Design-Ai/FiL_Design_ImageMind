<script setup lang="ts">
/**
 * FiLNeuroCleaner — the two cleanup switches (mirrors nodes/node_cleaner.py).
 *
 * This panel was here once before and was removed: two booleans that native
 * ComfyUI widgets already covered did not repay a DOM widget, hidden widgets
 * and a synced state proxy. It is back because the pack is judged as a set —
 * a node with bare canvas widgets among fourteen themed panels reads as the
 * one that was left unfinished, whatever the machinery costs.
 *
 * The labels are the node's own: `display_name`, `label_on` and `label_off`
 * from node_cleaner.py, through the same locale keys, so the switch text stays
 * in one place and stays translated.
 */
import { computed } from "vue";
import { FilToggle } from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import type { FilNodeState } from "@/nodes2/filState";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

function boolField(name: string, fallback: boolean) {
  return computed<"ON" | "OFF">({
    get: () => ((props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback) ? "ON" : "OFF"),
    set: (v: "ON" | "OFF") => { props.state.nodeState[name] = v === "ON"; },
  });
}

const cleanVram = boolField("clean_vram", true);
const unloadModels = boolField("unload_models", true);

// The switch caption follows the state, exactly as LiteGraph's own boolean
// widget does with label_on/label_off — "Flush cache" while on, "Keep cache"
// while off. A fixed caption plus a switch would leave the user reading the
// switch position to know what it will do.
const vramCaption = computed(() =>
  cleanVram.value === "ON"
    ? t("nc_clean_vram_on", "Flush cache")
    : t("nc_clean_vram_off", "Keep cache"));
const modelsCaption = computed(() =>
  unloadModels.value === "ON"
    ? t("nc_unload_models_on", "Unload models")
    : t("nc_unload_models_off", "Keep models"));
</script>

<template>
  <div class="fil-clean-root">
    <FilToggle :model-value="cleanVram"
      :label="`${t('nc_clean_vram_label', '🧹 GPU cache')} — ${vramCaption}`"
      :title="t('nc_clean_vram', 'Flush GPU CUDA cache.')"
      @update:model-value="(v) => (cleanVram = v)" />
    <FilToggle :model-value="unloadModels"
      :label="`${t('nc_unload_models_label', '🧠 Loaded models')} — ${modelsCaption}`"
      :title="t('nc_unload_models', 'Unload every model ComfyUI currently holds in memory.')"
      @update:model-value="(v) => (unloadModels = v)" />
  </div>
</template>

<style scoped>
/* Container surface comes from the shared `.fil-node-shell [class$="-root"]`
 * rule in styles/brand.ts — keep only layout here. */
.fil-clean-root { width: 100%; box-sizing: border-box; min-width: 0; display: flex; flex-direction: column; gap: var(--fil-node-gap); padding: var(--fil-node-pad);
  color: var(--fil-text); font-family: ui-sans-serif, system-ui, sans-serif; }
</style>
