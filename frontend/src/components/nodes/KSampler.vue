<script setup lang="ts">
/** FiLKSampler — sampling controls (mirrors nodes/node_ksampler.py inputs). */
import { computed } from "vue";
import { FilSlider, FilNumberInput, FilSelect, FilSegmented } from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import { findFilWidget } from "@/nodes2/util";
import type { FilNodeState } from "@/nodes2/filState";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

function numberField(name: string, fallback: number) {
  return computed({
    get: () => Number(props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback) || fallback,
    set: (v: number) => { props.state.nodeState[name] = v; },
  });
}
function stringField(name: string, fallback: string) {
  return computed({
    get: () => String(props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback),
    set: (v: string) => { props.state.nodeState[name] = v; },
  });
}

// Read the option lists straight off the native ComfyUI combo widgets, so the
// dropdowns always reflect whatever comfy.samplers exposes on this install.
function comboOptions(name: string, fallback: string[]): string[] {
  const node = props.state.node;
  const w = node ? findFilWidget(node, name) : null;
  const vals = (w as { options?: { values?: unknown } } | null)?.options?.values;
  return Array.isArray(vals) && vals.length ? (vals as string[]) : fallback;
}

const seed = numberField("seed", 0);
const steps = numberField("steps", 20);
const cfg = numberField("cfg", 7.0);
const denoise = numberField("denoise", 1.0);
const samplerName = stringField("sampler_name", "euler");
const scheduler = stringField("scheduler", "normal");
const previewMethod = stringField("preview_method", "auto");
const vaeDecode = stringField("vae_decode", "true");

const samplerOptions = computed(() => comboOptions("sampler_name", ["euler"]));
const schedulerOptions = computed(() => comboOptions("scheduler", ["normal"]));
const PREVIEW_OPTIONS = ["auto", "latent2rgb", "taesd", "vae_decoded_only", "none"];
const VAE_DECODE_OPTIONS = ["true", "true (tiled)", "false"];
const VAE_DECODE_LABELS: Record<string, string> = {
  "true": "✅ Decode", "true (tiled)": "🧩 Tiled", "false": "🚫 Off",
};
</script>

<template>
  <div class="fil-ks-root">
    <div class="fil-ks-row">
      <label class="fil-w-label" :title="t('ks_seed', 'Noise seed.')">{{ t('lbl_seed', '🎲 Seed') }}</label>
      <FilNumberInput v-model="seed" :min="0" :step="1" />
      <label class="fil-w-label" :title="t('ks_steps', 'Number of denoising steps.')">{{ t('lbl_steps', '🪜 Steps') }}</label>
      <FilNumberInput v-model="steps" :min="1" :max="10000" :step="1" />
    </div>

    <FilSlider :model-value="cfg" :min="0" :max="100" :step="0.1" :label="t('lbl_cfg', '🎯 CFG')"
      :title="t('ks_cfg', 'Classifier-free guidance scale.')" @update:model-value="(v: number) => (cfg = v)" />

    <label class="fil-w-label" :title="t('ks_sampler', 'Sampling algorithm.')">{{ t('lbl_sampler', '🌀 Sampler') }}</label>
    <FilSelect :options="samplerOptions" :model-value="samplerName"
      :title="t('ks_sampler', 'Sampling algorithm.')" @update:model-value="(v: string) => (samplerName = v)" />

    <label class="fil-w-label" :title="t('ks_scheduler', 'Noise schedule.')">{{ t('lbl_scheduler', '📉 Scheduler') }}</label>
    <FilSelect :options="schedulerOptions" :model-value="scheduler"
      :title="t('ks_scheduler', 'Noise schedule.')" @update:model-value="(v: string) => (scheduler = v)" />

    <FilSlider :model-value="denoise" :min="0" :max="1" :step="0.01" :label="t('lbl_denoise', '💧 Denoise')"
      :title="t('ks_denoise', 'Denoise strength (1.0 = full).')" @update:model-value="(v: number) => (denoise = v)" />

    <label class="fil-w-label" :title="t('ks_preview', 'How the live sampling preview is rendered.')">{{ t('lbl_preview', '👁️ Preview') }}</label>
    <FilSelect :options="PREVIEW_OPTIONS" :model-value="previewMethod"
      :title="t('ks_preview', 'How the live sampling preview is rendered.')" @update:model-value="(v: string) => (previewMethod = v)" />

    <FilSegmented :options="VAE_DECODE_OPTIONS" :option-labels="VAE_DECODE_LABELS" :model-value="vaeDecode"
      :label="t('lbl_vae_decode', '🖼️ VAE decode')"
      :title="t('ks_vae_decode', 'Decode the result to an IMAGE preview/output. Needs a VAE.')"
      @update:model-value="(v: string) => (vaeDecode = v)" />
  </div>
</template>

<style scoped>
/* Container surface comes from the shared `.fil-node-shell [class$="-root"]`
 * rule in styles/brand.ts — keep only layout here. */
.fil-ks-root { display: flex; flex-direction: column; gap: var(--fil-node-gap); padding: var(--fil-node-pad);
  color: var(--fil-text, #e8edf3); font-family: ui-sans-serif, system-ui, sans-serif; }
.fil-ks-row { display: grid; grid-template-columns: minmax(auto, max-content) minmax(48px, 1fr) minmax(auto, max-content) minmax(48px, 1fr); align-items: center; gap: var(--fil-node-gap); }
.fil-w-label { font-size: 11px; color: var(--fil-muted, rgba(255,255,255,0.55)); }
</style>
