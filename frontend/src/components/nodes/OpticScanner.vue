<script setup lang="ts">
/** FiLOpticScanner — image analysis / prompt expansion via LLM. */
import { computed, reactive, watch } from "vue";
import { FilChipGrid, FilChipList, FilSegmented, FilSection, FilButton, FilModal, FilStylePicker } from "@/components/widgets";
import { toast } from "@/stores/toastStore";
import { NODE_CONTRACTS, type WidgetSpec } from "@/api/contracts";
import type { FilNodeState } from "@/nodes2/filState";
import { useI18n } from "@/composables/useI18n";
import { findFilWidget } from "@/nodes2/util";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

const contract = NODE_CONTRACTS["FiLOpticScanner"];
const widgets: WidgetSpec[] = contract?.inputs.required ?? [];

// FilSection applies `text-transform: uppercase` itself, so these fallbacks
// stay in normal case — the header still renders uppercase.
const SECTION_LABEL_KEYS: Record<string, [string, string]> = {
  prompt: ["scn_section_prompt", "📝 Prompt/Text"],
  agent: ["scn_section_agent", "🕵️ Agent"],
  model: ["scn_section_model", "🧠 Model"],
  output: ["scn_section_output", "📤 Output"],
  advanced: ["scn_section_advanced", "🎨 Style"],
  actions: ["scn_section_actions", "⚡ Actions"],
};

// These fields stay as native LiteGraph widgets (not hidden in scanner.ts)
// so ComfyUI's drag-to-connect works on them. They are excluded from the
// Vue panel to avoid a duplicate — the native widget renders above the panel.
const NATIVE_WIDGET_NAMES = new Set(["prompt", "negative_prompt", "custom_style"]);

function sectionLabel(section: string): string {
  const entry = SECTION_LABEL_KEYS[section];
  return entry ? t(entry[0], entry[1]) : section.toUpperCase();
}

const WIDGET_TOOLTIP_KEYS: Record<string, string> = {
  config: "tt_config",
  agent: "tt_agent",
  image: "tt_image",
  prompt: "tt_prompt",
  negative_prompt: "tt_neg_prompt",
  detail_level: "tt_detail",
  language: "tt_lang",
  model_type: "tt_model_type",
  prompt_mode: "tt_prompt_mode",
  photo_style: "tt_photo_style",
  nsfw_photo_style: "tt_nsfw_photo_style",
  art_style: "tt_art_style",
  nsfw_art_style: "tt_nsfw_art_style",
  custom_style: "tt_custom_style",
  temperature: "tt_temperature",
  seed: "tt_provider_seed",
  max_tokens: "tt_max_tokens",
  response_format: "tt_response_format",
};

function widgetTooltip(w: WidgetSpec): string {
  const key = WIDGET_TOOLTIP_KEYS[w.name];
  return key ? t(key, w.tooltip || "") : w.tooltip || "";
}

const FIELD_EMOJIS: Record<string, string> = {
  prompt: "✍️",
  negative_prompt: "🚫",
  custom_style: "✨",
  response_format: "📋",
  agent: "🕵️",
  model_type: "🧠",
  detail_level: "🔍",
  language: "🌐",
  prompt_mode: "⚙️",
  max_image_side: "📏",
  photo_style: "📷",
  nsfw_photo_style: "🔞",
  art_style: "🎨",
  nsfw_art_style: "🔞",
  temperature: "🌡️",
  seed: "🌱",
  max_tokens: "📊",
  image: "🖼️",
};

function formatFieldLabel(w: WidgetSpec): string {
  if (w.label) return w.label;
  const emoji = FIELD_EMOJIS[w.name] || "";
  const base = w.name
    .replace(/_/g, " ")
    .replace(/\b\w/g, (ch) => ch.toUpperCase());
  return emoji ? `${emoji} ${base}` : base;
}

// Ephemeral UI-only state (which style-picker modal is open) — not part of
// node state, does not need to survive workflow save/load.
const stylePickerOpen = reactive<Record<string, boolean>>({});

// Category prefix so the two style buttons are visually distinct even
// before anything is picked — previously both showed a bare "None"/"Нет"
// with no way to tell Photo apart from Art without hovering the tooltip.
const STYLE_CATEGORY: Record<string, { emoji: string; labelKey: string; labelFallback: string }> = {
  photo_style: { emoji: "📷", labelKey: "scn_style_photo_label", labelFallback: "Photo" },
  nsfw_photo_style: { emoji: "🔞", labelKey: "scn_style_nsfw_photo_label", labelFallback: "NSFW Photo" },
  art_style: { emoji: "🎨", labelKey: "scn_style_art_label", labelFallback: "Art" },
  nsfw_art_style: { emoji: "🔞", labelKey: "scn_style_nsfw_art_label", labelFallback: "NSFW Art" },
};

function styleButtonLabel(name: string): string {
  const category = STYLE_CATEGORY[name];
  const prefix = category ? `${category.emoji} ${t(category.labelKey, category.labelFallback)}: ` : "";
  const value = String(getValue(name, "None") || "None");
  if (value === "None") return `${prefix}${t("scn_style_none", "None")}`;
  const idx = value.indexOf("/");
  const displayValue = idx === -1 ? value : value.slice(idx + 1);
  return `${prefix}${displayValue}`;
}
function openStylePicker(name: string) {
  stylePickerOpen[name] = true;
}
function selectStyle(name: string, value: string) {
  setValue(name, value);
  stylePickerOpen[name] = false;
}

const grouped = computed(() => {
  const map: Record<string, WidgetSpec[]> = {};
  for (const w of widgets) ((map[(w.section as string) || "_"] ??= [])) .push(w);
  return map;
});

// "styles" widgets render as paired rows (Photo/NSFW Photo, Art/NSFW Art)
// instead of the generic one-widget-per-row layout — contract order
// (registry.py) is photo_style, nsfw_photo_style, art_style, nsfw_art_style,
// so consecutive pairs already line up correctly.
const stylePairs = computed(() => {
  const specs = grouped.value["styles"] || [];
  const pairs: WidgetSpec[][] = [];
  for (let i = 0; i < specs.length; i += 2) pairs.push(specs.slice(i, i + 2));
  return pairs;
});

function getValue(name: string, fallback: unknown = ""): unknown {
  return props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback;
}
function setValue(name: string, v: unknown) { props.state.nodeState[name] = v; }

// Section collapse state lives in `state.ui` (the UI-only bucket documented
// in FilNodeState) so it survives workflow save/load like everything else
// here. Previously FilSection was passed a hardcoded `model-value="false"`
// with no listener — the arrow looked clickable but toggling it did nothing.
//
// Agent/Output/Styles start collapsed on a fresh node (before the user has
// ever toggled them) so the panel isn't cluttered on first drop; once a
// value is explicitly stored in `state.ui` it always wins over this default.
const DEFAULT_COLLAPSED = new Set(["agent", "output", "advanced"]);

function isCollapsed(section: string): boolean {
  const stored = (props.state.ui as Record<string, unknown>)[`collapsed_${section}`];
  if (stored === undefined) return DEFAULT_COLLAPSED.has(section);
  return Boolean(stored);
}
function setCollapsed(section: string, collapsed: boolean) {
  (props.state.ui as Record<string, unknown>)[`collapsed_${section}`] = collapsed;
}

// Restore on workflow load — already covered (state is reactive).
watch(() => props.state.nodeState, () => {}, { deep: true });

// Bottom seed block — mirrors FiLSeed/Seed.vue's own mechanism (mode +
// readout + Use last/New fixed). `scanner.ts` hides both native seed/
// control_after_generate widgets; randomization is driven by ComfyUI
// core's native `control_after_generate` on the hidden seed widget
// (verified: core randomizes it each queue even while hidden) — the
// graphToPrompt hook this used to rely on doesn't fire on queue in this
// frontend version, so it never actually injected anything.
const seedMode = computed({
  get: () => (props.state.nodeState.seed_mode as "random" | "fixed") ?? "random",
  set: (v) => { props.state.nodeState.seed_mode = v; },
});
const seedValue = computed({
  get: () => Number(props.state.nodeState.seed ?? -1) || -1,
  // Write the native seed widget directly, not just nodeState: the
  // createSyncedNodeState mirror doesn't reach the seed widget the same way
  // control_after_generate expects, so a fixed seed set only via nodeState
  // can fail to reach the queued prompt. Direct assignment sticks.
  set: (v) => {
    props.state.nodeState.seed = v;
    const w = props.state.node ? findFilWidget(props.state.node, "seed") : null;
    if (w) w.value = v;
  },
});
const seedDisplay = computed(() => (seedMode.value === "fixed" ? `${seedValue.value}` : "random"));

// Point core's seed control at the mode the panel wants: "fixed" pins the
// widget so re-queuing a fixed seed doesn't drift and the LLM-call cache
// (fingerprint_inputs) stays warm; "randomize" makes core draw a fresh
// seed into the hidden widget every queue.
watch(seedMode, (mode) => {
  const node = props.state.node;
  const ctrl = node ? findFilWidget(node, "control_after_generate") : null;
  if (ctrl) ctrl.value = mode === "fixed" ? "fixed" : "randomize";
}, { immediate: true });

function setRandomSeed() {
  seedMode.value = "random";
}
function useLastSeed() {
  // After a random queue the last value core drew lives on the native seed
  // widget; fall back to lastRunSeed for older saved state.
  const node = props.state.node;
  const w = node ? findFilWidget(node, "seed") : null;
  const last = w && Number.isFinite(Number(w.value)) ? Number(w.value) : props.state.lastRunSeed;
  if (last == null || !Number.isFinite(last)) {
    toast.warning("No last-run seed recorded yet");
    return;
  }
  seedValue.value = last;
  seedMode.value = "fixed";
}
function newFixedSeed() {
  const n = Math.floor(Math.random() * 1_000_000_000) & 0x7fffffff;
  seedValue.value = n;
  seedMode.value = "fixed";
}

</script>

<template>
  <div class="fil-scanner-root">
    <template v-for="(specs, section) in grouped" :key="section">
      <div v-if="section !== 'styles'" class="fil-section-block">
        <FilSection v-if="section !== '_' && section !== 'prompt'" :title="sectionLabel(String(section))"
          :model-value="isCollapsed(String(section))"
          @update:model-value="(v: boolean) => setCollapsed(String(section), v)" />
        <!-- Skip native widgets — prompt/negative_prompt/custom_style are rendered
             by LiteGraph above the Vue panel and support drag-to-connect natively. -->
        <template v-for="w in specs" :key="w.name">
          <div v-if="!NATIVE_WIDGET_NAMES.has(w.name)"
            v-show="section === '_' || section === 'prompt' || !isCollapsed(String(section))"
            class="fil-w-row" :title="widgetTooltip(w)">
            <FilChipGrid v-if="w.kind === 'chip_grid'"
              :options="w.values || []" :model-value="String(getValue(w.name, ''))"
              :columns="w.columns ?? 3" @update:model-value="(v: string) => setValue(w.name, v)" />
            <FilChipList v-else-if="w.kind === 'chip_list'"
              :options="w.values || []" :model-value="(getValue(w.name, null) as string | null)"
              :searchable="w.searchable ?? true" @update:model-value="(v: string) => setValue(w.name, v)" />
            <FilSegmented v-else-if="w.kind === 'segmented'"
              :options="w.options || []" :model-value="String(getValue(w.name, ''))"
              :label="formatFieldLabel(w)" @update:model-value="(v: string) => setValue(w.name, v)" />
            <FilChipGrid v-else :options="w.values || []" :model-value="String(getValue(w.name, ''))"
              :columns="w.columns ?? 3" @update:model-value="(v: string) => setValue(w.name, v)" />
          </div>
        </template>
      </div>
    </template>

    <div class="fil-section-block">
      <FilSection :title="sectionLabel('advanced')" :model-value="isCollapsed('advanced')"
        @update:model-value="(v: boolean) => setCollapsed('advanced', v)" />
      <div v-show="!isCollapsed('advanced')" class="fil-section-block">
        <div v-for="(pair, idx) in stylePairs" :key="`style-pair-${idx}`" class="fil-style-pair-row">
          <div v-for="w in pair" :key="w.name" class="fil-style-pair-item" :title="widgetTooltip(w)">
            <FilButton variant="full" :label="styleButtonLabel(w.name)" @click="openStylePicker(w.name)" />
            <FilModal :open="Boolean(stylePickerOpen[w.name])" :title="formatFieldLabel(w)" width="640px"
              @update:open="(v: boolean) => (stylePickerOpen[w.name] = v)">
              <FilStylePicker :styles="w.values || []" :model-value="String(getValue(w.name, 'None'))"
                @select="(v: string) => selectStyle(w.name, v)" />
            </FilModal>
          </div>
        </div>
      </div>
    </div>

    <div class="fil-scanner-seed-row">
      <input
        :value="seedDisplay"
          type="text"
          class="fil-scanner-seed-field"
          :class="{ 'is-random': seedMode === 'random' }"
          :readonly="seedMode === 'random'"
          aria-label="Seed value"
          :title="seedMode === 'fixed' ? t('scn_seed_locked', 'Locked seed') : t('scn_seed_auto_random', 'Auto-random — a new seed is generated each run')"
          @input="(e) => (seedValue = Number((e.target as HTMLInputElement).value) || 0)"
        />
        <button type="button" class="fil-scanner-seed-pill" :class="{ active: seedMode === 'random' }"
          :title="t('scn_seed_mode_tt', 'Random generates a new seed each run.')" @click="setRandomSeed">
          {{ t('scn_seed_random', 'Random') }}
        </button>
        <button type="button" class="fil-scanner-seed-pill"
          :title="props.state.lastRunSeed != null ? `${t('scn_seed_use_last_prefix', `Reuse the last run's seed:`)} ${props.state.lastRunSeed}` : t('scn_seed_use_last_tt', 'Reuse the seed from the last executed run.')"
          @click="useLastSeed">
          {{ t('scn_seed_use_last', 'Use last') }}
        </button>
        <button type="button" class="fil-scanner-seed-pill fil-scanner-seed-pill-accent"
          :title="t('scn_seed_new_fixed_tt', 'Generate a new random fixed seed.')" @click="newFixedSeed">
          {{ t('scn_seed_new_fixed', 'New fixed') }}
        </button>
    </div>
  </div>
</template>

<style scoped>
/* Container surface (glass, radius, blur, shadow) comes from the shared
 * `.fil-node-shell [class$="-root"]` rule in styles/brand.ts — keep only
 * layout here so every node stays in sync. */
.fil-scanner-root {
  display: flex; flex-direction: column; gap: var(--fil-node-gap); padding: var(--fil-node-pad);
  color: var(--fil-text, #e8edf3); font-family: ui-sans-serif, system-ui, sans-serif;
  width: 100%; box-sizing: border-box; min-width: 0;
}
.fil-section-block { display: flex; flex-direction: column; gap: 5px; min-width: 0; }
.fil-w-row { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
.fil-style-pair-row { display: flex; gap: 4px; min-width: 0; }
.fil-style-pair-item { flex: 1; min-width: 0; }
.fil-scanner-seed-row { display: flex; gap: 6px; min-width: 0; }
.fil-scanner-seed-field {
  flex: 1.3; min-width: 0; box-sizing: border-box; height: 34px;
  background: rgba(0, 0, 0, 0.35); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--fil-pill-radius);
  padding: 0 12px; color: var(--fil-text, #f2f2f2);
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
  font-size: 13px; text-align: center; outline: none; transition: border-color .08s;
}
.fil-scanner-seed-field:focus { border-color: var(--fil-accent); }
.fil-scanner-seed-field.is-random { color: var(--fil-muted, #9ca8b5); font-style: italic; }
.fil-scanner-seed-pill {
  flex: 1; min-width: 0; box-sizing: border-box; height: 34px; padding: 0 8px;
  border-radius: var(--fil-pill-radius); border: 1px solid var(--fil-pill-border);
  background: var(--fil-pill-bg); color: var(--fil-text, #e8edf3);
  font-family: inherit; font-size: 12px; font-weight: 600; cursor: pointer;
  transition: background .08s, border-color .08s, color .08s;
  appearance: none; -webkit-appearance: none; outline: none;
}
.fil-scanner-seed-pill:hover { background: rgba(255, 255, 255, 0.12); }
.fil-scanner-seed-pill.active { background: rgba(255, 255, 255, 0.16); border-color: rgba(255, 255, 255, 0.2); }
.fil-scanner-seed-pill:focus-visible { outline: 2px solid var(--fil-accent); outline-offset: -2px; }
.fil-scanner-seed-pill-accent {
  background: var(--fil-accent); border-color: var(--fil-accent); color: #241206; font-weight: 700;
}
.fil-scanner-seed-pill-accent:hover { filter: brightness(1.08); background: var(--fil-accent); }
</style>