<script setup lang="ts">
/**
 * FiLSeed node body. State is supplied by `addFilDomWidget` as a reactive
 * `state` object; mutations propagate to ComfyUI serialization via
 * `getValue()` already wired in the host.
 */
import { computed, watch } from "vue";
import FilButton from "@/components/widgets/FilButton.vue";
import FilInfo from "@/components/widgets/FilInfo.vue";
import { toast } from "@/stores/toastStore";
import { useI18n } from "@/composables/useI18n";
import type { FilNodeState } from "@/nodes2/filState";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

// Local shallow shortcuts — read/write through the reactive container.
const mode = computed({
  get: () => (props.state.nodeState.mode as "random" | "fixed") ?? "random",
  set: (v) => { props.state.nodeState.mode = v; },
});
const seed = computed({
  get: () => Number(props.state.nodeState.seed ?? 0) || 0,
  set: (v) => { props.state.nodeState.seed = v; },
});

// Restore from a loaded workflow: setState() (from ComfyUI setValue)
// replaces nodeState entirely; we mirror it back into our locals.
watch(
  () => props.state.nodeState,
  (s) => {
    if (typeof s.mode === "string") mode.value = s.mode as "random" | "fixed";
    if (typeof s.seed === "number") seed.value = Number(s.seed);
  },
  { deep: true },
);

function setRandom() {
  mode.value = "random";
}

function useLast() {
  if (props.state.lastRunSeed == null) {
    toast.warning("No last-run seed recorded yet");
    return;
  }
  seed.value = props.state.lastRunSeed;
  mode.value = "fixed";
}

function newFixed() {
  const n = Math.floor(Math.random() * 1_000_000_000) & 0x7fffffff;
  seed.value = n;
  mode.value = "fixed";
}

const display = computed(() => (mode.value === "fixed" ? `${seed.value}` : "random"));
</script>

<template>
  <div class="fil-seed-root">
    <div class="fil-seed-readout" :title="mode === 'fixed' ? t('sd_locked', 'Locked seed') : t('sd_auto_random', 'Auto-random')">
      <input
        v-model="display"
        type="text"
        class="fil-seed-display"
        :readonly="mode === 'random'"
        aria-label="Seed value"
      />
      <FilInfo
        v-if="mode === 'random' && props.state.lastRunSeed != null"
        :text="`Last run: ${props.state.lastRunSeed}`"
      />
    </div>
    <div class="fil-seed-actions">
      <FilButton :label="t('sd_random_label', '🔀 Random')" variant="standard" :title="t('sd_mode', 'Random generates a new seed each run.')" @click="setRandom" />
      <FilButton :label="t('sd_btn_use_last', '♻️ Use last')" variant="standard" :title="t('sd_use_last', 'Reuse the seed from the last executed run.')" @click="useLast" />
      <FilButton :label="t('sd_btn_new_fixed', '🎲 New fixed')" variant="accent" :title="t('sd_new_fixed', 'Generate a new random fixed seed.')" @click="newFixed" />
    </div>
  </div>
</template>

<style scoped>
/* Container surface comes from the shared `.fil-node-shell [class$="-root"]`
 * rule in styles/brand.ts — keep only layout here. */
.fil-seed-root {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 6px;
  color: var(--fil-text, #e8edf3);
  font-family: ui-sans-serif, system-ui, sans-serif;
}
.fil-seed-readout { display: flex; flex-direction: column; gap: 4px; }
.fil-seed-display {
  width: 100%; box-sizing: border-box; height: 42px;
  background: var(--fil-glass-bg); border: 1px solid var(--fil-glass-border); border-radius: var(--fil-field-radius);
  padding: 9px 8px; color: var(--fil-text, #f2f2f2);
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
  font-size: 19px; text-align: center; outline: none; transition: border-color .08s;
}
.fil-seed-display:focus { border-color: var(--fil-accent); }
.fil-seed-display[readonly] { color: var(--fil-muted, #9ca8b5); font-style: italic; }
.fil-seed-actions { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 5px; }
</style>