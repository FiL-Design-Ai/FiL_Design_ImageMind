<script setup lang="ts">
/**
 * FiLUpscaleTileCalc — tile sizing controls (mirrors the real node inputs).
 * Fully open, transparent layout without hidden spoilers or clipped controls.
 */
import { computed } from "vue";
import { FilNumberInput, FilSlider, FilSegmented, FilSelect, FilToggle } from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import { findFilWidget } from "@/nodes2/util";
import { useWidgetSockets } from "@/composables/useWidgetSockets";
import { UPSCALE_SOCKET_INPUTS } from "@/nodes2/nodes/upscale";
import type { FilNodeState } from "@/nodes2/filState";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

// Shared by FiLUpscaleTileCalc and FiLUpscaleSimple — both expose the same
// three widget names, so one list covers the panel either node mounts it as.
const { setFieldEl, isLinked } = useWidgetSockets(props.state, UPSCALE_SOCKET_INPUTS);
const linkedTip = (name: string, own: string) =>
  isLinked(name) ? t("fld_linked_tt", "Driven by the connected input — disconnect it to edit here.") : own;

const AUTO_PROFILES = ["Low VRAM", "Balanced", "High VRAM", "Max Quality", "Ultra Quality"] as const;
const AUTO_PROFILE_LABELS: Record<string, string> = {
  "Low VRAM": "🪫 Low VRAM (512px)",
  "Balanced": "⚖️ Balanced (768px)",
  "High VRAM": "🔋 High VRAM (1024px)",
  "Max Quality": "💎 Max Quality (1024px + 1.5x overlap)",
  "Ultra Quality": "👑 Ultra Quality (1536px)",
};

const MODE_OPTIONS = ["OFF", "ON"] as const;
const MODE_LABELS: Record<string, string> = {
  OFF: "🛠️ Manual Tiles",
  ON: "🤖 VRAM Profile",
};

function numberField(name: string, fallback: number) {
  return computed({
    get: () => {
      const val = Number(props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback);
      return Number.isFinite(val) ? val : fallback;
    },
    set: (v: number) => { props.state.nodeState[name] = v; },
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

const profileOptions = computed(() => comboOptions("auto_profile", [...AUTO_PROFILES]));

// Live calculated tile stats for display HUD
const currentTileSize = computed(() => {
  if (autoMode.value === "ON") {
    switch (autoProfile.value) {
      case "Low VRAM": return 512;
      case "Balanced": return 768;
      case "High VRAM":
      case "Max Quality": return 1024;
      case "Ultra Quality": return 1536;
      default: return 768;
    }
  }
  return tileSize.value;
});

const currentOverlap = computed(() => {
  if (autoMode.value === "ON") {
    const size = currentTileSize.value;
    const bias = autoProfile.value === "Max Quality" ? 1.5 : autoProfile.value === "Ultra Quality" ? 2.0 : 1.0;
    return Math.min(Math.round(size * 0.125 * bias), Math.floor(size / 2));
  }
  if (autoOverlap.value === "ON") {
    return Math.min(Math.round(tileSize.value * 0.125), Math.floor(tileSize.value / 2));
  }
  return Math.min(tileOverlap.value, Math.floor(tileSize.value / 2));
});
</script>

<template>
  <div class="fil-up-root">
    <!-- Upscale factor slider -->
    <FilSlider :ref="(el: unknown) => setFieldEl('upscale_factor', el)"
      :model-value="upscaleFactor" :min="0.1" :max="8" :step="0.25"
      :label="t('lbl_upscale_factor', '🔍 Upscale factor')" inline-label
      :disabled="isLinked('upscale_factor')"
      :title="linkedTip('upscale_factor', t('utc_factor', 'Upscale multiplier.'))"
      @update:model-value="(v: number) => (upscaleFactor = v)" />

    <!-- Live Grid HUD -->
    <div class="fil-up-hud" :title="t('utc_hud_tt', 'Live estimated tiling metrics for downstream sampling and assembly.')">
      <div class="fil-up-hud-item">
        <span class="fil-up-hud-lbl">Scale</span>
        <span class="fil-up-hud-val">×{{ upscaleFactor.toFixed(2) }}</span>
      </div>
      <div class="fil-up-hud-item">
        <span class="fil-up-hud-lbl">Tile</span>
        <span class="fil-up-hud-val">{{ currentTileSize }}px</span>
      </div>
      <div class="fil-up-hud-item">
        <span class="fil-up-hud-lbl">Overlap</span>
        <span class="fil-up-hud-val">{{ currentOverlap }}px</span>
      </div>
    </div>

    <!-- Mode Selector: Manual Tiles vs VRAM Auto Profile -->
    <FilSegmented v-model="autoMode" :options="[...MODE_OPTIONS]" :option-labels="MODE_LABELS"
      :label="t('lbl_tile_mode', '🎯 Tile mode')"
      :title="t('utc_auto_mode', 'Pick tile size/overlap automatically from the selected VRAM profile or control manually.')" />

    <!-- Mode: VRAM Auto Profile -->
    <div v-if="autoMode === 'ON'" class="fil-up-section-box">
      <div class="fil-up-field">
        <label class="fil-w-label" :title="t('utc_auto_profile', 'VRAM/quality profile used when Full Auto is on.')">
          {{ t('lbl_auto_profile', '🎚️ Auto profile') }}
        </label>
        <FilSelect v-model="autoProfile" :options="profileOptions" :option-labels="AUTO_PROFILE_LABELS"
          :title="t('utc_auto_profile', 'VRAM/quality profile used when Full Auto is on.')" />
      </div>
    </div>

    <!-- Mode: Manual Tiles (100% open, symmetrical 2-column grid) -->
    <div v-else class="fil-up-section-box">
      <!-- Row 1: Tile size & Overlap with auto toggle -->
      <div class="fil-up-grid-2">
        <div class="fil-up-field">
          <label class="fil-w-label" :title="t('utc_tile_size', 'Base tile size.')">
            {{ t('lbl_tile_size', '🔲 Tile size') }}
          </label>
          <FilNumberInput :ref="(el: unknown) => setFieldEl('tile_size', el)"
            v-model="tileSize" :min="64" :max="2048" :step="64" :disabled="isLinked('tile_size')" />
        </div>

        <div class="fil-up-field">
          <div class="fil-up-field-head">
            <label class="fil-w-label" :title="t('utc_overlap', 'Tile overlap.')">
              {{ t('lbl_overlap', '🧵 Overlap') }}
            </label>
            <FilToggle bare :model-value="autoOverlap" :label="t('lbl_auto_overlap', '🧵 Auto')"
              :title="t('utc_auto_overlap', 'Derive overlap automatically from tile size (~12.5%) instead of the fixed value.')"
              @update:model-value="(v) => (autoOverlap = v)" />
          </div>
          <FilNumberInput :ref="(el: unknown) => setFieldEl('tile_overlap', el)"
            v-model="tileOverlap" :min="0" :max="512" :step="8"
            :disabled="autoOverlap === 'ON' || isLinked('tile_overlap')" />
        </div>
      </div>

      <!-- Row 2: Manual Cols & Rows -->
      <div class="fil-up-grid-2">
        <div class="fil-up-field">
          <label class="fil-w-label" :title="t('utc_manual_cols', 'Force this many tile columns. 0 = compute from tile size.')">
            {{ t('lbl_manual_cols', '↔️ Cols (0=auto)') }}
          </label>
          <FilNumberInput v-model="manualTileCols" :min="0" :max="64" :step="1" />
        </div>
        <div class="fil-up-field">
          <label class="fil-w-label" :title="t('utc_manual_rows', 'Force this many tile rows. 0 = compute from tile size.')">
            {{ t('lbl_manual_rows', '↕️ Rows (0=auto)') }}
          </label>
          <FilNumberInput v-model="manualTileRows" :min="0" :max="64" :step="1" />
        </div>
      </div>

      <!-- Auto-fix thin edge tiles -->
      <FilToggle :model-value="autoFixThinEdges" :label="t('lbl_auto_fix_edges', '🩹 Auto-fix thin edges')"
        :title="t('utc_auto_fix_edges', 'Shrink tile_size to the next standard size instead of just warning when the grid would leave a thin edge tile.')"
        @update:model-value="(v) => (autoFixThinEdges = v)" />
    </div>

    <!-- Non-square tiles toggle -->
    <FilToggle :model-value="nonSquareTiles" :label="t('lbl_non_square', '📐 Non-square tiles')"
      :title="t('utc_non_square', 'Allow rectangular tiles instead of forcing square ones.')"
      @update:model-value="(v) => (nonSquareTiles = v)" />
  </div>
</template>

<style scoped>
.fil-up-root {
  width: 100%;
  box-sizing: border-box;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--fil-node-gap, 8px);
  padding: var(--fil-node-pad, 8px);
  color: var(--fil-text, #fff);
  font-family: ui-sans-serif, system-ui, sans-serif;
}

/* Informative Live Grid HUD */
.fil-up-hud {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  background: var(--fil-surface-subtle, rgba(255, 255, 255, 0.03));
  border: 1px solid var(--fil-border-subtle, rgba(255, 255, 255, 0.08));
  border-radius: 6px;
  font-size: 11px;
}

.fil-up-hud-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
}

.fil-up-hud-lbl {
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--fil-muted, #888);
}

.fil-up-hud-val {
  font-weight: 700;
  color: #62c987;
  font-variant-numeric: tabular-nums;
}

/* Symmetrical Section Box */
.fil-up-section-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  background: var(--fil-surface-subtle, rgba(255, 255, 255, 0.02));
  border: 1px solid var(--fil-border-subtle, rgba(255, 255, 255, 0.06));
  border-radius: 6px;
}

/* Symmetrical 2-column grid: 50% / 50% with clean gap */
.fil-up-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  align-items: end;
  min-width: 0;
}

.fil-up-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.fil-up-field-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 0;
}

.fil-w-label {
  font-size: 11px;
  line-height: 1.2;
  color: var(--fil-muted, #aaa);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
