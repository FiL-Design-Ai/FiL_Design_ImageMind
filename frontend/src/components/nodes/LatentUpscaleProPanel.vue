<script setup lang="ts">
/**
 * FiLLatentUpscalePro — Smart Latent Scaler with Artifact-Free Grid Snapping.
 * Premium layout matching the official FiL Design standard.
 */
import { computed } from "vue";
import { FilSlider, FilNumberInput, FilSelect } from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import { findFilWidget } from "@/nodes2/util";
import { useWidgetSockets } from "@/composables/useWidgetSockets";
import { LATENT_UPSCALE_PRO_SOCKET_INPUTS } from "@/nodes2/nodes/latent_upscale_pro";
import type { FilNodeState } from "@/nodes2/filState";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

const { setFieldEl, isLinked } = useWidgetSockets(props.state, LATENT_UPSCALE_PRO_SOCKET_INPUTS);
const linkedTip = (name: string, own: string) =>
  isLinked(name) ? t("fld_linked_tt", "Driven by the connected input — disconnect it to edit here.") : own;

function numberField(name: string, fallback: number) {
  return computed({
    get: () => {
      const raw = Number(props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback);
      return Number.isFinite(raw) ? raw : fallback;
    },
    set: (v: number) => { props.state.nodeState[name] = v; },
  });
}

function stringField(name: string, fallback: string) {
  return computed({
    get: () => String(props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback),
    set: (v: string) => { props.state.nodeState[name] = v; },
  });
}

function comboOptions(name: string, fallback: string[]): string[] {
  const node = props.state.node;
  const w = node ? findFilWidget(node, name) : null;
  const vals = (w as { options?: { values?: unknown } } | null)?.options?.values;
  return Array.isArray(vals) && vals.length ? (vals as string[]) : fallback;
}

// Fields
const mode = stringField("mode", "By Factor");
const scaleBy = numberField("scale_by", 1.5);
const targetWidth = numberField("target_width", 1024);
const targetHeight = numberField("target_height", 1024);
const longestEdge = numberField("longest_edge", 1536);
const upscaleMethod = stringField("upscale_method", "bislerp");
const snapTo = stringField("snap_to", "64 px (U-Net & DiT Safe)");
const roundMode = stringField("round_mode", "nearest");

// Options
const modeOptions = computed(() => comboOptions("mode", ["By Factor", "Target Size", "Longest Edge"]));
const upscaleMethodOptions = computed(() => comboOptions("upscale_method", ["bislerp", "nearest-exact", "area", "bilinear", "bicubic"]));
const snapToOptions = computed(() => comboOptions("snap_to", [
  "64 px (U-Net & DiT Safe)",
  "16 px (DiT Patch 2x2)",
  "8 px (1 Latent Pixel)",
  "Disabled (Exact)",
]));
const roundModeOptions = computed(() => comboOptions("round_mode", ["nearest", "up", "down"]));
</script>

<template>
  <div class="fil-latent-scale-root">
    <!-- Mode Selection -->
    <FilSelect
      :model-value="mode"
      :options="modeOptions"
      :label="t('lup_p_mode', '⚙️ Mode')"
      :title="t('lup_mode', 'Scaling mode: By Factor, Target Size, or Longest Edge.')"
      @update:model-value="(v: string) => (mode = v)"
    />

    <!-- Scale by factor (shown if By Factor) -->
    <div v-if="mode === 'By Factor'" class="fil-row">
      <FilSlider
        :ref="(el: unknown) => setFieldEl('scale_by', el)"
        :model-value="scaleBy"
        :min="0.05"
        :max="8.0"
        :step="0.05"
        :disabled="isLinked('scale_by')"
        :label="t('lup_p_scale_by', '🔍 Scale By')"
        inline-label
        :title="linkedTip('scale_by', t('lup_scale_by', 'Upscale multiplier.'))"
        @update:model-value="(v: number) => (scaleBy = v)"
      />
    </div>

    <!-- Target Width & Height (shown if Target Size) -->
    <div v-else-if="mode === 'Target Size'" class="fil-size-grid">
      <FilNumberInput
        :ref="(el: unknown) => setFieldEl('target_width', el)"
        :model-value="targetWidth"
        :min="64"
        :max="8192"
        :step="64"
        :disabled="isLinked('target_width')"
        :label="t('lup_p_width', 'Width (px)')"
        :title="linkedTip('target_width', t('lup_target_width', 'Target width in pixels.'))"
        @update:model-value="(v: number) => (targetWidth = v)"
      />
      <FilNumberInput
        :ref="(el: unknown) => setFieldEl('target_height', el)"
        :model-value="targetHeight"
        :min="64"
        :max="8192"
        :step="64"
        :disabled="isLinked('target_height')"
        :label="t('lup_p_height', 'Height (px)')"
        :title="linkedTip('target_height', t('lup_target_height', 'Target height in pixels.'))"
        @update:model-value="(v: number) => (targetHeight = v)"
      />
    </div>

    <!-- Longest Edge (shown if Longest Edge) -->
    <div v-else-if="mode === 'Longest Edge'" class="fil-row">
      <FilNumberInput
        :ref="(el: unknown) => setFieldEl('longest_edge', el)"
        :model-value="longestEdge"
        :min="128"
        :max="8192"
        :step="64"
        :disabled="isLinked('longest_edge')"
        :label="t('lup_p_longest_edge', '📏 Longest Edge (px)')"
        :title="linkedTip('longest_edge', t('lup_longest_edge', 'Longest edge in pixels.'))"
        @update:model-value="(v: number) => (longestEdge = v)"
      />
    </div>

    <!-- Method -->
    <FilSelect
      :model-value="upscaleMethod"
      :options="upscaleMethodOptions"
      :label="t('lup_p_method', '⚡ Method')"
      :title="t('lup_upscale_method', 'Interpolation method for latent tensors (bislerp recommended).')"
      @update:model-value="(v: string) => (upscaleMethod = v)"
    />

    <!-- Snap Grid Selection -->
    <FilSelect
      :model-value="snapTo"
      :options="snapToOptions"
      :label="t('lup_p_snap', '📐 Snap Grid')"
      :title="t('lup_snap_to', 'Aligns dimensions to prevent border artifacts.')"
      @update:model-value="(v: string) => (snapTo = v)"
    />

    <!-- Round Mode -->
    <FilSelect
      :model-value="roundMode"
      :options="roundModeOptions"
      :label="t('lup_p_round', '🎯 Rounding')"
      :title="t('lup_round_mode', 'Rounding direction when snapping.')"
      @update:model-value="(v: string) => (roundMode = v)"
    />
  </div>
</template>

<style scoped>
.fil-latent-scale-root {
  width: 100%;
  box-sizing: border-box;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  color: var(--fil-text);
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.fil-row {
  width: 100%;
  box-sizing: border-box;
}

.fil-size-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  width: 100%;
}
</style>

