<script setup lang="ts">
/** FiLHighResFix — HighRes-fix script controls (mirrors nodes/node_hiresfix.py).
 * Latent/pixel/controlnet fields show/hide reactively — this replaces the
 * widgethider.js behaviour of the original efficiency-nodes node. */
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
function boolField(name: string, fallback: boolean) {
  return computed<"ON" | "OFF">({
    get: () => ((props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback) ? "ON" : "OFF"),
    set: (v: "ON" | "OFF") => { props.state.nodeState[name] = v === "ON"; },
  });
}

function comboOptions(name: string, fallback: string[]): string[] {
  const node = props.state.node;
  const w = node ? findFilWidget(node, name) : null;
  const vals = (w as { options?: { values?: unknown } } | null)?.options?.values;
  return Array.isArray(vals) && vals.length ? (vals as string[]) : fallback;
}

const upscaleType = stringField("upscale_type", "latent");
const hiresCkpt = stringField("hires_ckpt_name", "(use same)");
const latentUpscaler = stringField("latent_upscaler", "nearest-exact");
const pixelUpscaler = stringField("pixel_upscaler", "");
const upscaleBy = numberField("upscale_by", 1.25);
const useSameSeed = boolField("use_same_seed", true);
const denoise = numberField("denoise", 0.56);
const iterations = numberField("iterations", 1);
const useControlnet = boolField("use_controlnet", false);
const controlNetName = stringField("control_net_name", "");
const strength = numberField("strength", 1.0);

const ckptOptions = computed(() => comboOptions("hires_ckpt_name", ["(use same)"]));
const latentMethods = ["nearest-exact", "bilinear", "area", "bicubic", "bislerp"];
const pixelOptions = computed(() => comboOptions("pixel_upscaler", ["(none)"]));
const controlNetOptions = computed(() => comboOptions("control_net_name", ["(none)"]));

const showLatent = computed(() => upscaleType.value === "latent");
const showPixel = computed(() => upscaleType.value === "pixel" || upscaleType.value === "both");
</script>

<template>
  <div class="fil-hrf-root">
    <FilSegmented :options="['latent', 'pixel', 'both']"
      :option-labels="{ latent: '🌀 latent', pixel: '🖼️ pixel', both: '🔀 both' }"
      :model-value="upscaleType" :label="t('lbl_upscale_type', '⬆️ Upscale type')"
      :title="t('hrf_upscale_type', 'Upscale in latent space, pixel space, or both.')"
      @update:model-value="(v: string) => (upscaleType = v)" />

    <template v-if="showLatent">
      <FilSelect :options="latentMethods" :model-value="latentUpscaler"
        :label="t('lbl_latent_up', '🌀 Latent upscaler')" :title="t('hrf_latent_up', 'Latent upscale method.')"
        @update:model-value="(v: string) => (latentUpscaler = v)" />
    </template>

    <template v-if="showPixel">
      <FilSelect :options="pixelOptions" :model-value="pixelUpscaler"
        :label="t('lbl_pixel_up', '🖼️ Pixel upscaler')" :title="t('hrf_pixel_up', 'Pixel upscale model (from upscale_models).')"
        @update:model-value="(v: string) => (pixelUpscaler = v)" />
    </template>

    <FilSelect :options="ckptOptions" :model-value="hiresCkpt"
      :label="t('lbl_hires_ckpt', '📦 Hires checkpoint')" :title="t('hrf_ckpt', 'Checkpoint for the hires pass. (use same) reuses the base model.')"
      @update:model-value="(v: string) => (hiresCkpt = v)" />

    <FilSlider :model-value="upscaleBy" :min="0.01" :max="8" :step="0.05" :label="t('lbl_upscale_by', '🔍 Upscale by')"
      :title="t('hrf_upscale_by', 'Upscale multiplier.')" @update:model-value="(v: number) => (upscaleBy = v)" />
    <FilSlider :model-value="denoise" :min="0" :max="1" :step="0.01" :label="t('lbl_hrf_denoise', '💧 Denoise')"
      :title="t('hrf_denoise', 'Denoise strength for the hires re-sample.')" @update:model-value="(v: number) => (denoise = v)" />

    <FilNumberInput v-model="iterations" :min="0" :max="5" :step="1"
      :label="t('lbl_iterations', '🔁 Iterations')" :title="t('hrf_iterations', 'How many upscale+resample passes to run.')" />

    <FilSegmented :options="['ON', 'OFF']" :option-labels="{ ON: '♻️ same seed', OFF: '🎲 own' }" :model-value="useSameSeed"
      :label="t('lbl_use_same_seed', '🌱 Seed source')"
      :title="t('hrf_same_seed', 'Reuse the samplers seed for the hires pass.')"
      @update:model-value="(v) => (useSameSeed = v as 'ON' | 'OFF')" />

    <FilSegmented :options="['ON', 'OFF']" :option-labels="{ ON: '🕹️ ON', OFF: 'OFF' }" :model-value="useControlnet"
      :label="t('lbl_use_cn', '🕹️ Use ControlNet')"
      :title="t('hrf_use_cn', 'Guide the hires pass with a ControlNet.')"
      @update:model-value="(v) => (useControlnet = v as 'ON' | 'OFF')" />
    <template v-if="useControlnet === 'ON'">
      <FilSelect :options="controlNetOptions" :model-value="controlNetName"
        :label="t('lbl_cn_name', '🧩 ControlNet model')" :title="t('hrf_cn_name', 'ControlNet model to apply.')"
        @update:model-value="(v: string) => (controlNetName = v)" />
      <FilSlider :model-value="strength" :min="0" :max="10" :step="0.01" :label="t('lbl_cn_strength', '💪 Strength')"
        :title="t('hrf_cn_strength', 'ControlNet strength.')" @update:model-value="(v: number) => (strength = v)" />
    </template>
  </div>
</template>

<style scoped>
/* Container surface comes from the shared `.fil-node-shell [class$="-root"]`
 * rule in styles/brand.ts — keep only layout here. */
.fil-hrf-root { display: flex; flex-direction: column; gap: var(--fil-node-gap); padding: var(--fil-node-pad);
  color: var(--fil-text, #e8edf3); font-family: ui-sans-serif, system-ui, sans-serif; }
</style>
