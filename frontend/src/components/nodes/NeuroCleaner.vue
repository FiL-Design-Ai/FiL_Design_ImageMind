<script setup lang="ts">
/** FiLNeuroCleaner — toggle button list for VRAM & model cleanup targets. */
import type { FilNodeState } from "@/nodes2/filState";
import { useI18n } from "@/composables/useI18n";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

interface Row {
  name: string;
  label: string;
  defaultOn: boolean;
}

// `name` is the backend widget id and must never be translated; only `label` is
// display text.
const rows: Row[] = [
  { name: "clean_vram", label: t("cln_flush_vram", "🧹 Flush GPU Cache"), defaultOn: true },
  { name: "unload_diffusion", label: t("cln_unload_diffusion", "🌀 Unload Diffusion (FLUX/SD)"), defaultOn: true },
  { name: "unload_clip", label: t("cln_unload_clip", "📎 Unload CLIP / Text Encoder"), defaultOn: false },
  { name: "unload_vae", label: t("cln_unload_vae", "🖼️ Unload VAE"), defaultOn: false },
  { name: "unload_control", label: t("cln_unload_control", "🎛️ Unload ControlNet / Adapter"), defaultOn: false },
];

function isOn(name: string, def: boolean): boolean {
  const v = props.state.nodeState[name];
  return typeof v === "boolean" ? v : def;
}

function toggle(name: string, def: boolean) {
  props.state.nodeState[name] = !isOn(name, def);
}
</script>

<template>
  <div class="fil-cleaner-root">
    <button
      v-for="r in rows"
      :key="r.name"
      type="button"
      class="fil-cleaner-row"
      :class="{ active: isOn(r.name, r.defaultOn) }"
      :aria-pressed="isOn(r.name, r.defaultOn)"
      @click="toggle(r.name, r.defaultOn)"
    >
      <span class="fil-cleaner-dot" />
      <span class="fil-cleaner-label">{{ t(`nc_${r.name}`, r.label) }}</span>
    </button>
  </div>
</template>

<style scoped>
.fil-cleaner-root { width: 100%; box-sizing: border-box; min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--fil-node-gap);
  padding: var(--fil-node-pad);
  color: var(--fil-text, #e8edf3);
  font-family: ui-sans-serif, system-ui, sans-serif;
}
.fil-cleaner-row {
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: var(--fil-field-radius, 6px);
  border: 1px solid var(--fil-glass-border, rgba(255, 255, 255, 0.08));
  background: var(--fil-glass-bg, rgba(255, 255, 255, 0.04));
  cursor: pointer;
  user-select: none;
  transition: background 0.12s, border-color 0.12s;
}
.fil-cleaner-row:hover {
  background: rgba(255, 255, 255, 0.08);
}
.fil-cleaner-row.active {
  border-color: var(--fil-accent);
  background: color-mix(in srgb, var(--fil-accent) 14%, transparent);
}
.fil-cleaner-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  flex: none;
  transition: border-color 0.12s, background 0.12s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fil-cleaner-dot::after {
  content: "✓";
  font-size: 10px;
  line-height: 1;
  color: var(--fil-accent-ink, #fff);
  opacity: 0;
  transition: opacity 0.12s;
}
.fil-cleaner-row.active .fil-cleaner-dot {
  background: var(--fil-accent);
  border-color: var(--fil-accent);
}
.fil-cleaner-row.active .fil-cleaner-dot::after {
  opacity: 1;
}
.fil-cleaner-label {
  flex: 1;
  font-size: 12px;
  font-weight: 500;
}
</style>
