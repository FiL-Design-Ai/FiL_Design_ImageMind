<script setup lang="ts">
/** FiLNeuroCleaner — compact mode selector for GPU VRAM & model memory cleanup. */
import { computed } from "vue";
import { FilComboBox, type FilComboOption } from "@/components/widgets";
import type { FilNodeState } from "@/nodes2/filState";
import { useI18n } from "@/composables/useI18n";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

const cleanMode = computed<string>({
  get: () => String(props.state.nodeState.clean_mode ?? "Flush VRAM (All)"),
  set: (v) => { props.state.nodeState.clean_mode = v; },
});

const modeOptions = computed<FilComboOption[]>(() => [
  { value: "Flush VRAM (All)", label: t("nc_mode_vram_all", "🧹 Flush VRAM & All Models") },
  { value: "Unload Diffusion Only", label: t("nc_mode_diffusion", "🌀 Unload Diffusion Only") },
  { value: "Soft Cache Only", label: t("nc_mode_soft_cache", "💧 Soft Cache Only") },
  { value: "Off", label: t("nc_mode_off", "🚫 Off (Passthrough)") },
]);

const modeHint = computed<string>(() => {
  switch (cleanMode.value) {
    case "Flush VRAM (All)":
      return t("nc_hint_vram_all", "Frees GPU VRAM completely. Offloads UNet, CLIP, VAE & ControlNet.");
    case "Unload Diffusion Only":
      return t("nc_hint_diffusion", "Unloads heavy diffusion model (FLUX/Z-Image) while keeping CLIP & VAE.");
    case "Soft Cache Only":
      return t("nc_hint_soft_cache", "Runs PyTorch soft_empty_cache() without unloading models.");
    case "Off":
      return t("nc_hint_off", "Cleaner is disabled. Inputs pass through untouched.");
    default:
      return "";
  }
});
</script>

<template>
  <div class="fil-cleaner-root">
    <label class="fil-cleaner-field">
      <span class="fil-cleaner-label">{{ t("nc_clean_mode", "Clean Mode") }}</span>
      <FilComboBox
        :model-value="cleanMode"
        :options="modeOptions"
        @update:model-value="(v: string) => cleanMode = v"
      />
    </label>
    <div v-if="modeHint" class="fil-cleaner-hint">
      {{ modeHint }}
    </div>
  </div>
</template>

<style scoped>
.fil-cleaner-root {
  display: flex;
  flex-direction: column;
  gap: var(--fil-node-gap, 8px);
  padding: var(--fil-node-pad, 10px);
  color: var(--fil-text, #e8edf3);
  font-family: ui-sans-serif, system-ui, sans-serif;
}
.fil-cleaner-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.fil-cleaner-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--fil-muted, #94a3b8);
}
.fil-cleaner-hint {
  font-size: 11px;
  line-height: 1.4;
  color: var(--fil-text-secondary, #cbd5e1);
  background: var(--fil-glass-bg, rgba(255, 255, 255, 0.04));
  border: 1px solid var(--fil-glass-border, rgba(255, 255, 255, 0.08));
  border-radius: var(--fil-field-radius, 6px);
  padding: 6px 10px;
}
</style>