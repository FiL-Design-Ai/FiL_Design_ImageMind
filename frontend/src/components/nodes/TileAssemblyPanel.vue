<script setup lang="ts">
/**
 * FiLTileAssembly — Tile Assembly controls for seam feathering curve,
 * feather depth, and mutual overlap color matching.
 */
import { computed } from "vue";
import { FilSlider, FilSelect } from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import { findFilWidget } from "@/nodes2/util";
import { useWidgetSockets } from "@/composables/useWidgetSockets";
import { TILE_ASSEMBLY_SOCKET_INPUTS } from "@/nodes2/nodes/tile_assembly";
import type { FilNodeState } from "@/nodes2/filState";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

const { setFieldEl, isLinked } = useWidgetSockets(props.state, TILE_ASSEMBLY_SOCKET_INPUTS);
const linkedTip = (name: string, own: string) =>
  isLinked(name) ? t("fld_linked_tt", "Driven by the connected input — disconnect it to edit here.") : own;

function numberField(name: string, fallback: number) {
  return computed({
    get: () => {
      const raw = Number(props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback);
      return Number.isFinite(raw) ? raw : fallback;
    },
    set: (v: number) => {
      props.state.nodeState[name] = v;
      const w = props.state.node ? findFilWidget(props.state.node, name) : null;
      if (w) w.value = v;
    },
  });
}

function stringField(name: string, fallback: string) {
  return computed({
    get: () => String(props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback),
    set: (v: string) => {
      props.state.nodeState[name] = v;
      const w = props.state.node ? findFilWidget(props.state.node, name) : null;
      if (w) w.value = v;
    },
  });
}

function comboOptions(name: string, fallback: string[]): string[] {
  const node = props.state.node;
  const w = node ? findFilWidget(node, name) : null;
  const vals = (w as { options?: { values?: unknown } } | null)?.options?.values;
  return Array.isArray(vals) && vals.length ? (vals as string[]) : fallback;
}

const blendMode = stringField("blend_mode", "Cosine (Smooth)");
const featherStrength = numberField("feather_strength", 1.0);
const colorMatch = stringField("color_match", "Match Overlap Means");

const BLEND_MODES = ["Cosine (Smooth)", "Linear", "Smoothstep"] as const;
const BLEND_LABELS: Record<string, string> = {
  "Cosine (Smooth)": "Cosine (Smooth)",
  "Linear": "Linear",
  "Smoothstep": "Smoothstep",
};

const COLOR_MATCH_OPTIONS = ["Match Overlap Means", "None"] as const;
const COLOR_MATCH_LABELS: Record<string, string> = {
  "Match Overlap Means": "Match Overlap",
  "None": "Off",
};

const blendOptions = computed(() => comboOptions("blend_mode", [...BLEND_MODES]));
const colorMatchOptions = computed(() => comboOptions("color_match", [...COLOR_MATCH_OPTIONS]));
</script>

<template>
  <div class="fil-tla-root">
    <FilSelect
      :options="blendOptions"
      :option-labels="BLEND_LABELS"
      v-model="blendMode"
      inline-label
      :label="t('lbl_blend_mode', 'Blend curve')"
      :title="t('tla_blend_mode', 'Curve used to feather overlap seams: Cosine for smooth transitions, Linear for classic ramp, Smoothstep for cubic interpolation.')"
    />

    <FilSlider
      :ref="(el: unknown) => setFieldEl('feather_strength', el)"
      :model-value="featherStrength"
      :min="0.2"
      :max="1.5"
      :step="0.05"
      :label="t('lbl_feather_strength', 'Feather depth')"
      inline-label
      :disabled="isLinked('feather_strength')"
      :title="linkedTip('feather_strength', t('tla_feather_strength', 'Feathering depth multiplier across overlap zones.'))"
      @update:model-value="(v: number) => (featherStrength = v)"
    />

    <FilSelect
      :options="colorMatchOptions"
      :option-labels="COLOR_MATCH_LABELS"
      v-model="colorMatch"
      inline-label
      :label="t('lbl_color_match', 'Color match')"
      :title="t('tla_color_match', 'Automatically match mean color/brightness in tile overlaps to eliminate visible exposure seams.')"
    />
  </div>
</template>

<style scoped>
.fil-tla-root {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: var(--fil-node-gap, 6px);
  padding: var(--fil-node-pad, 6px);
  color: var(--fil-text);
  font-family: ui-sans-serif, system-ui, sans-serif;
}
</style>
