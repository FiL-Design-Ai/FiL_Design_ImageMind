<script setup lang="ts">
/** FiLNeuroCleaner — checkbox list of cleanup targets (mirrors the real node inputs). */
import { watch } from "vue";
import FilSection from "@/components/widgets/FilSection.vue";
import type { FilNodeState } from "@/nodes2/filState";
import { useI18n } from "@/composables/useI18n";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

interface Row { name: string; label: string; defaultOn: boolean; advanced?: boolean; }

const vramRows: Row[] = [
  { name: "clean_vram", label: "🧹 Clear VRAM cache", defaultOn: true },
  { name: "offload_model", label: "📤 Unload selected model types", defaultOn: true },
  { name: "offload_cache", label: "🎮 Flush GPU cache", defaultOn: true },
  { name: "unload_diffusion", label: "🌀 Diffusion models", defaultOn: true },
  { name: "unload_clip", label: "📎 CLIP models", defaultOn: true },
  { name: "unload_vae", label: "🖼️ VAE models", defaultOn: true },
  { name: "unload_control", label: "🎛️ ControlNet models", defaultOn: true },
  { name: "unload_lora", label: "🧩 LoRA models", defaultOn: true },
];

// The "RAM / Cache (advanced)" section header (FilSection below) is
// already the "reveal advanced stuff" gate — collapsed by default. There
// used to ALSO be a "Show advanced RAM options" checkbox inside that same
// section gating these same four rows a second time, which meant clicking
// the section open still showed nothing until you found and flipped a
// second, functionally-identical switch. One gate, not two.
const ramRows: Row[] = [
  { name: "clean_ram", label: "💾 Clean system RAM", defaultOn: false },
  { name: "clean_file_cache", label: "🗂️ Clean file cache (Windows)", defaultOn: true },
  { name: "clean_processes", label: "⚙️ Trim process working set", defaultOn: false },
  { name: "clean_dlls", label: "📦 Empty DLL working set", defaultOn: false },
];

function rowTitle(name: string, label: string): string {
  return t(`nc_${name}`, label);
}
function isOn(name: string, def: boolean): boolean {
  const v = props.state.nodeState[name];
  return typeof v === "boolean" ? v : def;
}
function toggle(name: string, def: boolean) {
  props.state.nodeState[name] = !isOn(name, def);
}

// Section collapse state lives in `state.ui`, same pattern as OpticScanner.vue —
// previously these were passed a hardcoded `model-value="false"` with
// `collapsible="false"`, so the ▼ arrow looked interactive but did nothing.
// "ram" starts collapsed on a fresh node (it's the "(advanced)" section);
// once the user explicitly toggles it, that choice always wins over this.
const DEFAULT_COLLAPSED = new Set(["ram"]);
function isCollapsed(section: string): boolean {
  const stored = (props.state.ui as Record<string, unknown>)[`collapsed_${section}`];
  if (stored === undefined) return DEFAULT_COLLAPSED.has(section);
  return Boolean(stored);
}
function setCollapsed(section: string, collapsed: boolean) {
  (props.state.ui as Record<string, unknown>)[`collapsed_${section}`] = collapsed;
}

watch(() => props.state.nodeState, () => {}, { deep: true });
</script>

<template>
  <div class="fil-cleaner-root">
    <FilSection :title="t('nc_section_vram', '🎮 VRAM / Models')"
      :model-value="isCollapsed('vram')" @update:model-value="(v: boolean) => setCollapsed('vram', v)" />
    <button v-show="!isCollapsed('vram')" v-for="r in vramRows" :key="r.name" type="button" class="fil-cleaner-row"
      :class="{ active: isOn(r.name, r.defaultOn) }" :aria-pressed="isOn(r.name, r.defaultOn)"
      :title="rowTitle(r.name, r.label)" @click="toggle(r.name, r.defaultOn)">
      <span class="fil-cleaner-dot" />
      <span class="fil-cleaner-label">{{ t(`nc_lbl_${r.name}`, r.label) }}</span>
    </button>
    <FilSection :title="t('nc_section_ram', '💾 RAM / Cache (advanced)')"
      :model-value="isCollapsed('ram')" @update:model-value="(v: boolean) => setCollapsed('ram', v)" />
    <button v-show="!isCollapsed('ram')" v-for="r in ramRows" :key="r.name" type="button" class="fil-cleaner-row"
      :class="{ active: isOn(r.name, r.defaultOn) }" :aria-pressed="isOn(r.name, r.defaultOn)"
      :title="rowTitle(r.name, r.label)" @click="toggle(r.name, r.defaultOn)">
      <span class="fil-cleaner-dot" />
      <span class="fil-cleaner-label">{{ t(`nc_lbl_${r.name}`, r.label) }}</span>
    </button>
  </div>
</template>

<style scoped>
/* Container surface comes from the shared `.fil-node-shell [class$="-root"]`
 * rule in styles/brand.ts — keep only layout here. */
.fil-cleaner-root { display: flex; flex-direction: column; gap: 5px; padding: 8px;
  color: var(--fil-text, #e8edf3); font-family: ui-sans-serif, system-ui, sans-serif; }
.fil-cleaner-row { all: unset; box-sizing: border-box; display: flex; align-items: center; gap: 10px;
  padding: 8px 10px; border-radius: var(--fil-field-radius); border: 1px solid var(--fil-glass-border);
  background: var(--fil-glass-bg); cursor: pointer; user-select: none;
  transition: background .08s, border-color .08s; }
.fil-cleaner-row:hover { background: rgba(255,255,255,0.08); }
.fil-cleaner-row.active { border-color: var(--fil-accent); background: rgba(246,138,69,0.12); }
.fil-cleaner-dot { width: 14px; height: 14px; border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.3); flex: none; transition: border-color .08s, background .08s;
  display: flex; align-items: center; justify-content: center; }
.fil-cleaner-dot::after { content: "✓"; font-size: 10px; line-height: 1; color: #fff; opacity: 0; transition: opacity .08s; }
.fil-cleaner-row.active .fil-cleaner-dot { background: var(--fil-accent); border-color: var(--fil-accent); }
.fil-cleaner-row.active .fil-cleaner-dot::after { opacity: 1; }
.fil-cleaner-label { flex: 1; font-size: 12px; }
</style>