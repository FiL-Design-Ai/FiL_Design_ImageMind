<script setup lang="ts">
/** FiLOpticScanner — image analysis / prompt expansion via LLM. */
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { FilChipGrid, FilChipList, FilSegmented, FilSection, FilButton, FilModal, FilStylePicker } from "@/components/widgets";
import { toast } from "@/stores/toastStore";
import { NODE_CONTRACTS, type WidgetSpec } from "@/api/contracts";
import type { FilNodeState } from "@/nodes2/filState";
import { useI18n } from "@/composables/useI18n";
import { findFilWidget } from "@/nodes2/util";
import { anchorWidgetInputSockets, readLinkedInputs } from "@/nodes2/widgetInputSockets";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

const contract = NODE_CONTRACTS["FiLOpticScanner"];
const widgets: WidgetSpec[] = [
  ...(contract?.inputs.required ?? []),
  ...(contract?.inputs.optional ?? [])
];

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

// ── Text fields that double as input sockets ─────────────────────────────
// Each of these has a hidden native widget behind it, and hiding a widget hides
// its input socket too — nodes2/scanner.ts puts the sockets back, and the dots
// are lined up with the fields here so it is obvious which one feeds which.
// While a link is attached the field is read-only: anything typed into it would
// be silently overridden by the link when the prompt is queued.
const SOCKET_FIELD_NAMES = ["prompt", "negative_prompt", "custom_style"];
/** Fields that absorb the height the user drags past the panel's content. */
const GROWABLE_FIELD_NAMES = new Set(["prompt", "negative_prompt"]);

const fieldEls: Record<string, HTMLElement | null> = {};

function setFieldEl(name: string, el: unknown): void {
  fieldEls[name] = (el as HTMLElement | null) ?? null;
}

function isSocketField(name: string): boolean {
  return SOCKET_FIELD_NAMES.includes(name);
}
function isGrowable(name: string): boolean {
  return GROWABLE_FIELD_NAMES.has(name);
}
const linkedFields = ref<Record<string, boolean>>({});

function isLinked(name: string): boolean {
  return Boolean(linkedFields.value[name]);
}
function fieldTooltip(w: WidgetSpec): string {
  if (isLinked(w.name)) return t("scn_field_linked_tt", "Driven by the connected input — disconnect it to type here.");
  return widgetTooltip(w);
}

// The socket dots have to follow the fields: they move whenever a section is
// collapsed, the node is resized, or the panel is stretched. LiteGraph owns the
// canvas draw loop and the link table, so a cheap poll is what keeps both the
// dots and the "driven by a link" state in step — same rationale as the
// backstop poll in domWidgetHost.ts. Nothing here re-renders unless something
// actually changed: `anchorWidgetInputSockets` only re-arranges on a real move,
// and the link map is only reassigned when a link came or went.
function syncTextFieldSockets(): void {
  const node = props.state.node;
  if (!node) return;
  anchorWidgetInputSockets(node, SOCKET_FIELD_NAMES.map((name) => ({ name, el: fieldEls[name] })));
  const linked = readLinkedInputs(node, SOCKET_FIELD_NAMES);
  if (SOCKET_FIELD_NAMES.some((name) => linked[name] !== Boolean(linkedFields.value[name]))) {
    linkedFields.value = linked;
  }
}

let socketPoll = 0;
onMounted(() => {
  syncTextFieldSockets();
  socketPoll = window.setInterval(syncTextFieldSockets, 300);
});
onBeforeUnmount(() => {
  if (socketPoll) window.clearInterval(socketPoll);
});

const isUnifiedStylePickerOpen = ref<boolean>(false);
const activeStyleTab = ref<string>("photo_style");

function parseDisplayStyles(value: string): string[] {
  if (!value || value === "None") return [];
  const parts = value.split("|").map((s) => s.trim()).filter((s) => s && s !== "None");
  return parts.map((part) => {
    const idx = part.indexOf("/");
    const sub = idx === -1 ? part : part.slice(idx + 1);
    return sub.replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}\s]+/gu, "").trim();
  });
}

const activeStylesSummary = computed(() => {
  const active: string[] = [];
  const ps = parseDisplayStyles(String(getValue("photo_style", "None")));
  const nps = parseDisplayStyles(String(getValue("nsfw_photo_style", "None")));
  const as = parseDisplayStyles(String(getValue("art_style", "None")));
  const nas = parseDisplayStyles(String(getValue("nsfw_art_style", "None")));

  for (const s of ps) active.push(`📷 ${s}`);
  for (const s of nps) active.push(`🔞 ${s}`);
  for (const s of as) active.push(`🎨 ${s}`);
  for (const s of nas) active.push(`🔞 ${s}`);

  if (active.length === 0) return t("scn_style_button_none", "🎨 Style: None");
  return active.join(" | ");
});

const activeStylesCount = computed(() => {
  const ps = parseDisplayStyles(String(getValue("photo_style", "None")));
  const nps = parseDisplayStyles(String(getValue("nsfw_photo_style", "None")));
  const as = parseDisplayStyles(String(getValue("art_style", "None")));
  const nas = parseDisplayStyles(String(getValue("nsfw_art_style", "None")));
  return ps.length + nps.length + as.length + nas.length;
});

const styleTabs = [
  { id: "photo_style", icon: "📷", labelKey: "scn_style_photo_label", fallback: "Photo" },
  { id: "nsfw_photo_style", icon: "🔞", labelKey: "scn_style_nsfw_photo_label", fallback: "NSFW Photo" },
  { id: "art_style", icon: "🎨", labelKey: "scn_style_art_label", fallback: "Art" },
  { id: "nsfw_art_style", icon: "🔞", labelKey: "scn_style_nsfw_art_label", fallback: "NSFW Art" },
];

function getStyleValue(name: string): string {
  return String(getValue(name, "None") || "None");
}
function setStyleValue(name: string, val: string) {
  setValue(name, val);
}
function getStyleOptions(name: string): string[] {
  const w = widgets.find((x) => x.name === name);
  return w?.values || [];
}
function clearAllStyles() {
  setValue("photo_style", "None");
  setValue("nsfw_photo_style", "None");
  setValue("art_style", "None");
  setValue("nsfw_art_style", "None");
}

const grouped = computed(() => {
  const map: Record<string, WidgetSpec[]> = {};
  for (const w of widgets) ((map[(w.section as string) || "_"] ??= [])) .push(w);
  return map;
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
    toast.warning(t("sd_no_last_seed", "No last-run seed recorded yet"));
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
      <div v-if="section !== 'styles'" class="fil-section-block"
        :class="{ 'is-growable': section === 'prompt' }">
        <FilSection v-if="section !== '_' && section !== 'prompt'" :title="sectionLabel(String(section))"
          :model-value="isCollapsed(String(section))"
          @update:model-value="(v: boolean) => setCollapsed(String(section), v)" />
        <!-- Skip native widgets — prompt/negative_prompt/custom_style are rendered
             by LiteGraph above the Vue panel and support drag-to-connect natively. -->
        <template v-for="w in specs" :key="w.name">
          <!-- Inject Unified Style Picker above Response Format -->
          <div v-if="w.name === 'response_format'" class="fil-w-row fil-single-style-block">
            <div style="display: flex; gap: 4px; margin-bottom: 3px;">
              <button 
                class="fil-style-picker-btn" 
                :class="{ 'has-styles': activeStylesCount > 0 }" 
                @click="isUnifiedStylePickerOpen = true"
              >
                {{ activeStylesSummary }}
              </button>
            </div>
            <div style="display: flex; margin-bottom: 6px;">
              <FilButton variant="standard" label="🧹 Clear Style" @click="clearAllStyles" style="flex: 1" />
            </div>

            <FilModal
              :open="isUnifiedStylePickerOpen"
              :title="t('scn_unified_style_title', '🎨 Style Selection')"
              width="680px"
              @update:open="(v: boolean) => (isUnifiedStylePickerOpen = v)"
            >
              <div class="fil-unified-style-modal">
                <div class="fil-style-tab-bar">
                  <button
                    v-for="tab in styleTabs"
                    :key="tab.id"
                    type="button"
                    class="fil-style-tab-btn"
                    :class="{ active: activeStyleTab === tab.id, 'has-value': getStyleValue(tab.id) !== 'None' }"
                    @click="activeStyleTab = tab.id"
                  >
                    <span class="fil-tab-icon">{{ tab.icon }}</span>
                    <span class="fil-tab-title">{{ t(tab.labelKey, tab.fallback) }}</span>
                    <span v-if="getStyleValue(tab.id) !== 'None'" class="fil-tab-badge">✓</span>
                  </button>
                </div>

                <div class="fil-style-picker-body">
                  <FilStylePicker
                    :styles="getStyleOptions(activeStyleTab)"
                    :model-value="getStyleValue(activeStyleTab)"
                    :multi="true"
                    @select="(v: string) => setStyleValue(activeStyleTab, v)"
                  />
                </div>

                <div class="fil-style-modal-footer">
                  <button
                    type="button"
                    class="fil-clear-styles-btn"
                    @click="clearAllStyles"
                  >
                    {{ t("scn_clear_all_styles", "🗑️ Clear all styles") }}
                  </button>
                </div>
              </div>
            </FilModal>
          </div>

          <div
            v-show="section === '_' || section === 'prompt' || !isCollapsed(String(section))"
            class="fil-w-row"
            :class="{ 'is-growable': isGrowable(w.name), 'is-linked': isSocketField(w.name) && isLinked(w.name) }"
            :title="isSocketField(w.name) ? fieldTooltip(w) : widgetTooltip(w)">
            <textarea
              v-if="w.name === 'prompt' || w.name === 'negative_prompt' || w.name === 'custom_style'"
              :ref="(el) => setFieldEl(w.name, el)"
              :value="String(getValue(w.name, ''))"
              class="fil-scanner-textarea"
              :class="{ 'is-linked': isLinked(w.name) }"
              :placeholder="isLinked(w.name) ? t('scn_field_linked', '🔗 Text comes from the connected node') : formatFieldLabel(w)"
              :readonly="isLinked(w.name)"
              rows="2"
              @input="(e) => setValue(w.name, (e.target as HTMLTextAreaElement).value)"
            />
            <FilChipGrid v-else-if="w.kind === 'chip_grid'"
              :options="w.values || []" :model-value="String(getValue(w.name, ''))"
              :columns="w.columns ?? 3" @update:model-value="(v: string) => setValue(w.name, v)" />
            <FilChipList v-else-if="w.kind === 'chip_list'"
              :options="w.values || []" :model-value="(getValue(w.name, null) as string | null)"
              :searchable="w.searchable ?? true" @update:model-value="(v: string | null) => setValue(w.name, v)" />
            <FilSegmented v-else-if="w.kind === 'segmented'"
              :options="w.options || []" :model-value="String(getValue(w.name, ''))"
              :label="formatFieldLabel(w)" @update:model-value="(v: string) => setValue(w.name, v)" />
            <FilChipGrid v-else :options="w.values || []" :model-value="String(getValue(w.name, ''))"
              :columns="w.columns ?? 3" @update:model-value="(v: string) => setValue(w.name, v)" />
          </div>
        </template>
      </div>
    </template>



    <div class="fil-scanner-seed-row">
      <input
        :value="seedDisplay"
          type="text"
          class="fil-scanner-seed-field"
          :class="{ 'is-random': seedMode === 'random' }"
          :readonly="seedMode === 'random'"
          :aria-label="t('sd_aria_seed_value', 'Seed value')"
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
  /* `growable: true` in nodes2/scanner.ts gives the host an explicit height
   * (content height + whatever the user dragged on top of it) — filling it
   * here is what hands those extra pixels to the `.is-growable` rows below.
   * With the host back at `height: auto` (any other node) a percentage height
   * resolves to auto, so this is inert outside growable mode. */
  height: 100%;
}
.fil-section-block { display: flex; flex-direction: column; gap: 5px; min-width: 0; }
/* The prompt section and its two textareas share the node's spare height. */
.fil-section-block.is-growable { flex: 1 1 auto; min-height: 0; }
.fil-w-row { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
.fil-w-row.is-growable { flex: 1 1 auto; min-height: 0; }
.fil-w-row.is-growable > .fil-scanner-textarea { flex: 1 1 auto; height: auto; }
.fil-scanner-textarea {
  box-sizing: border-box;
  width: 100%;
  min-height: 48px;
  padding: 8px 10px;
  background: var(--fil-panel-alt, #171819);
  border: 1px solid var(--fil-muted, #3a3d40);
  border-radius: 6px;
  color: var(--fil-text, #ddd);
  font-family: inherit;
  font-size: 12px;
  resize: vertical;
  outline: none;
}
.fil-scanner-textarea:focus {
  border-color: var(--fil-accent, #00f0ff);
}
/* A link on the matching input socket wins over whatever is typed here, so the
 * field reads as a display of that fact instead of an editable value. */
.fil-scanner-textarea.is-linked {
  border-style: dashed;
  border-color: var(--fil-accent, #00f0ff);
  color: var(--fil-muted, #9ca8b5);
  cursor: not-allowed;
}
.fil-single-style-block { margin-top: 2px; }

.fil-unified-style-modal {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 4px 0;
}
.fil-style-tab-bar {
  display: flex;
  gap: 6px;
  background: rgba(0, 0, 0, 0.3);
  padding: 4px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.fil-style-tab-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 34px;
  border-radius: 6px;
  border: 1px solid transparent;
  background: transparent;
  color: var(--fil-muted, #9ca8b5);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.12s ease;
}
.fil-style-tab-btn:hover {
  color: var(--fil-text, #ffffff);
  background: rgba(255, 255, 255, 0.06);
}
.fil-style-tab-btn.active {
  background: var(--fil-accent, #00f0ff);
  color: var(--fil-accent-ink, #12151a);
  border-color: var(--fil-accent, #00f0ff);
  font-weight: 700;
  box-shadow: 0 0 10px color-mix(in srgb, var(--fil-accent, #00f0ff) 30%, transparent);
}
.fil-tab-badge {
  font-size: 10px;
  color: #00ff88;
}
.fil-style-tab-btn.active .fil-tab-badge {
  color: var(--fil-accent-ink, #12151a);
}
.fil-style-picker-body {
  min-height: 320px;
  max-height: 480px;
  overflow-y: auto;
}
.fil-style-modal-footer {
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 8px;
}
.fil-clear-styles-btn {
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid rgba(255, 75, 75, 0.3);
  background: rgba(255, 75, 75, 0.1);
  color: var(--fil-danger, #ff6b6b);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.12s ease;
}
.fil-clear-styles-btn:hover {
  background: rgba(255, 75, 75, 0.25);
  border-color: var(--fil-danger, #ff4b4b);
  color: #ffffff;
}

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
.fil-scanner-seed-pill.active { background: var(--fil-accent); color: var(--fil-accent-ink, #12151a); }
.fil-scanner-seed-pill-accent { color: var(--fil-accent); }
.fil-scanner-seed-pill-accent:hover { background: rgba(0, 240, 255, 0.1); }

/* Cyberpunk Style Picker Button */
.fil-style-picker-btn {
  flex: 2;
  box-sizing: border-box;
  min-height: 36px;
  border-radius: var(--fil-pill-radius, 6px);
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.08), rgba(255, 0, 255, 0.08));
  border: 1px solid rgba(0, 240, 255, 0.2);
  color: var(--fil-text, #e8edf3);
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.05);
}
.fil-style-picker-btn:hover {
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(255, 0, 255, 0.15));
  border-color: rgba(0, 240, 255, 0.5);
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.15);
  color: #fff;
}
.fil-style-picker-btn.has-styles {
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(255, 0, 255, 0.2));
  border: 1px solid rgba(0, 240, 255, 0.6);
  color: #fff;
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.25), inset 0 0 8px rgba(255, 0, 255, 0.2);
  text-shadow: 0 0 8px rgba(0, 240, 255, 0.6);
  animation: pulse-neon 2.5s infinite alternate;
}
@keyframes pulse-neon {
  0% { box-shadow: 0 0 15px rgba(0, 240, 255, 0.2), inset 0 0 5px rgba(255, 0, 255, 0.15); }
  100% { box-shadow: 0 0 25px rgba(0, 240, 255, 0.45), inset 0 0 15px rgba(255, 0, 255, 0.35); border-color: rgba(0, 240, 255, 0.9); }
}
</style>