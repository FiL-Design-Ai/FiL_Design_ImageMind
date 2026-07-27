<script setup lang="ts">
/** FiLUpscaleTileCalc — tile sizing controls (mirrors the real node inputs). */
import { computed, watch } from "vue";
import { FilNumberInput, FilSlider, FilSegmented, FilToggle, FilSection } from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import type { FilNodeState } from "@/nodes2/filState";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

const AUTO_PROFILES = ["Low VRAM", "Balanced", "High VRAM", "Max Quality", "Ultra Quality"] as const;
const AUTO_PROFILE_LABELS: Record<string, string> = {
  "Low VRAM": "🪫 Low VRAM",
  "Balanced": "⚖️ Balanced",
  "High VRAM": "🔋 High VRAM",
  "Max Quality": "💎 Max Quality",
  "Ultra Quality": "👑 Ultra Quality",
};

function numberField(name: string, fallback: number) {
  return computed({
    get: () => Number(props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback) || fallback,
    set: (v: number) => { props.state.nodeState[name] = v; },
  });
}
function boolField(name: string, fallback: boolean) {
  return computed<"ON" | "OFF">({
    get: () => ((props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback) ? "ON" : "OFF"),
    set: (v: "ON" | "OFF") => { props.state.nodeState[name] = v === "ON"; },
  });
}

const upscaleFactor = numberField("upscale_factor", 2.0);
const tileSize = numberField("tile_size", 1024);
const tileOverlap = numberField("tile_overlap", 64);
const manualTileCols = numberField("manual_tile_cols", 0);
const manualTileRows = numberField("manual_tile_rows", 0);
const autoOverlap = boolField("auto_overlap", false);
const autoMode = boolField("auto_mode", false);
const nonSquareTiles = boolField("non_square_tiles", false);
const autoFixThinEdges = boolField("auto_fix_thin_edges", false);

const autoProfile = computed({
  get: () => String(props.state.nodeState.auto_profile ?? props.state.initialValues.auto_profile ?? "Balanced"),
  set: (v: string) => { props.state.nodeState.auto_profile = v; },
});

// Section collapse state lives in `state.ui`, same pattern as OpticScanner.vue —
// previously this was passed a hardcoded `model-value="false"` with
// `collapsible="false"`, so the ▼ arrow looked interactive but did nothing.
function isCollapsed(section: string): boolean {
  return Boolean((props.state.ui as Record<string, unknown>)[`collapsed_${section}`]);
}
function setCollapsed(section: string, collapsed: boolean) {
  (props.state.ui as Record<string, unknown>)[`collapsed_${section}`] = collapsed;
}

watch(() => props.state.nodeState, () => {}, { deep: true });
</script>

<template>
  <div class="fil-up-root">
    <FilSlider :model-value="upscaleFactor" :min="0.1" :max="8" :step="0.25" :label="t('lbl_upscale_factor', '🔍 Upscale factor')"
      :title="t('utc_factor', 'Upscale multiplier.')" @update:model-value="(v: number) => (upscaleFactor = v)" />

    <FilSection :title="t('utc_section_auto', '⚙️ Auto / advanced')"
      :model-value="isCollapsed('auto')" @update:model-value="(v: boolean) => setCollapsed('auto', v)" />
    <!-- v-if, not v-show: v-show needs a real element to set display:none on,
         but a bare <template> renders as a fragment (no wrapper node), so
         v-show here was silently a no-op — content never actually hid. -->
    <template v-if="!isCollapsed('auto')">
      <FilToggle :model-value="autoMode" :label="t('lbl_full_auto', '🤖 Full auto')"
        :title="t('utc_auto_mode', 'Pick tile size/overlap automatically from the selected VRAM profile.')"
        @update:model-value="(v) => (autoMode = v)" />

      <!-- Full Auto ON: only auto_profile matters — manual tile_size/overlap/cols/rows
           are ignored by the backend (nodes/node_upscale.py _compute_auto_tile_settings). -->
      <FilSegmented v-if="autoMode === 'ON'" :options="[...AUTO_PROFILES]" :option-labels="AUTO_PROFILE_LABELS" :model-value="autoProfile" :label="t('lbl_auto_profile', '🎚️ Auto profile')"
        :title="t('utc_auto_profile', 'VRAM/quality profile used when Full Auto is on.')"
        @update:model-value="(v: string) => (autoProfile = v)" />

      <!-- Full Auto OFF: manual tile_size/overlap/cols/rows control the grid instead. -->
      <template v-if="autoMode === 'OFF'">
        <div class="fil-up-row fil-up-row-overlap">
          <label class="fil-w-label" :title="t('utc_tile_size', 'Base tile size.')">{{ t('lbl_tile_size', '🔲 Tile size') }}</label>
          <FilNumberInput v-model="tileSize" :min="64" :max="2048" :step="64" />
          <label class="fil-w-label" :title="t('utc_overlap', 'Tile overlap.')">{{ t('lbl_overlap', '🧵 Overlap') }}</label>
          <FilNumberInput v-model="tileOverlap" :min="0" :max="512" :step="8" :disabled="autoOverlap === 'ON'" />
          <FilToggle bare :model-value="autoOverlap" :label="t('lbl_auto_overlap', '🧵 Auto')"
            :title="t('utc_auto_overlap', 'Derive overlap automatically from tile size (~12.5%) instead of the fixed value above.')"
            @update:model-value="(v) => (autoOverlap = v)" />
        </div>
        <div class="fil-up-row">
          <label class="fil-w-label" :title="t('utc_manual_cols', 'Force this many tile columns. 0 = compute from tile size.')">{{ t('lbl_manual_cols', '↔️ Cols') }}</label>
          <FilNumberInput v-model="manualTileCols" :min="0" :max="64" :step="1" />
          <label class="fil-w-label" :title="t('utc_manual_rows', 'Force this many tile rows. 0 = compute from tile size.')">{{ t('lbl_manual_rows', '↕️ Rows') }}</label>
          <FilNumberInput v-model="manualTileRows" :min="0" :max="64" :step="1" />
        </div>
        <FilToggle :model-value="autoFixThinEdges" :label="t('lbl_auto_fix_edges', '🩹 Auto-fix thin edges')"
          :title="t('utc_auto_fix_edges', 'Shrink tile_size to the next standard size instead of just warning when the grid would leave a thin edge tile.')"
          @update:model-value="(v) => (autoFixThinEdges = v)" />
      </template>
    </template>

    <FilToggle :model-value="nonSquareTiles" :label="t('lbl_non_square', '📐 Non-square tiles')"
      :title="t('utc_non_square', 'Allow rectangular tiles instead of forcing square ones.')"
      @update:model-value="(v) => (nonSquareTiles = v)" />
  </div>
</template>

<style scoped>
/* Container surface comes from the shared `.fil-node-shell [class$="-root"]`
 * rule in styles/brand.ts — keep only layout here. */
.fil-up-root { width: 100%; box-sizing: border-box; min-width: 0; display: flex; flex-direction: column; gap: var(--fil-node-gap); padding: var(--fil-node-pad);
  color: var(--fil-text); font-family: ui-sans-serif, system-ui, sans-serif; }
/* Value columns capped, not 1fr: these fields only ever hold small integers
 * (0-2048), so letting them greedily fill available width just starved the
 * label columns and forced "Manual rows" onto its own line. */
.fil-up-row { display: grid; grid-template-columns: minmax(auto, max-content) 64px minmax(auto, max-content) 64px; align-items: center; gap: var(--fil-node-gap); }
/* Overlap row gets a 5th column for the inline "Auto" toggle glued onto the
 * Overlap field — auto-sized (~fits switch+short label), doesn't steal
 * space from the two fixed 64px value columns. */
.fil-up-row-overlap { grid-template-columns: minmax(auto, max-content) 64px minmax(auto, max-content) 64px auto; }
.fil-w-label { font-size: 11px; color: var(--fil-muted); }
</style>
