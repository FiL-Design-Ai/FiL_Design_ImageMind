<script setup lang="ts">
/** FiLNeuroCleaner — toggle list for VRAM & model cleanup targets. */
import { FilToggle } from "@/components/widgets";
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

function setOn(name: string, on: boolean) {
  props.state.nodeState[name] = on;
}
</script>

<template>
  <div class="fil-cleaner-root">
    <!-- Shared FilToggle rather than a bespoke row button: this node used to
         draw its own switch, so it read differently from every other panel. -->
    <FilToggle
      v-for="r in rows"
      :key="r.name"
      :model-value="isOn(r.name, r.defaultOn) ? 'ON' : 'OFF'"
      :label="r.label"
      @update:model-value="(v: 'ON' | 'OFF') => setOn(r.name, v === 'ON')"
    />
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
</style>
