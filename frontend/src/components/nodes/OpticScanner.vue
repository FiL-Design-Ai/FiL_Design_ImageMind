<script setup lang="ts">
/** FiLOpticScanner — image analysis / prompt expansion via LLM. */
import { computed, ref, watch } from "vue";
import {
  FilChipGrid, FilChipList, FilSegmented, FilSection, FilButton,
  FilSelect, FilSlider, FilTextArea, FilSeedRow,
} from "@/components/widgets";
import StyleBrowser, { type StyleSource } from "@/components/nodes/StyleBrowser.vue";
import { toast } from "@/stores/toastStore";
import { NODE_CONTRACTS, type WidgetSpec } from "@/api/contracts";
import type { FilNodeState } from "@/nodes2/filState";
import { useI18n } from "@/composables/useI18n";
import { findFilWidget } from "@/nodes2/util";
import { useWidgetSockets } from "@/composables/useWidgetSockets";

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
  focus: ["scn_section_focus", "🎯 Focus"],
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
  agent_focus: "tt_agent_focus",
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
  video_duration: "tt_video_duration",
  video_aspect: "tt_video_aspect",
  video_sound: "tt_video_sound",
  video_camera: "tt_video_camera",
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
  agent_focus: "🎯",
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
  video_duration: "⏱",
  video_aspect: "📐",
  video_sound: "🔊",
  video_camera: "🎥",
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

function isSocketField(name: string): boolean {
  return SOCKET_FIELD_NAMES.includes(name);
}
function isGrowable(name: string): boolean {
  return GROWABLE_FIELD_NAMES.has(name);
}

// The socket dots have to follow the fields: they move whenever a section is
// collapsed, the node is resized, or the panel is stretched. This node used to
// re-measure them on a 300ms interval that ran for as long as the node existed
// — three scanners on a canvas meant ten DOM measurement passes a second with
// nothing on screen moving. `useWidgetSockets` is the event-driven version of
// the same job (a ResizeObserver and a MutationObserver on the panel, plus the
// `linkVersion` counter for a wire being connected, which no DOM change
// accompanies); it was extracted FROM this component and every other panel had
// already moved over. The counter only arrives because scanner.ts installs
// `installWidgetSocketSync` — without that, connecting a wire would leave the
// field looking editable.
const { setFieldEl, isLinked } = useWidgetSockets(props.state, SOCKET_FIELD_NAMES);

function fieldTooltip(w: WidgetSpec): string {
  if (isLinked(w.name)) return t("scn_field_linked_tt", "Driven by the connected input — disconnect it to type here.");
  return widgetTooltip(w);
}

const isUnifiedStylePickerOpen = ref<boolean>(false);

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
function getStyleOptions(name: string): string[] {
  const w = widgets.find((x) => x.name === name);
  return w?.values || [];
}

/**
 * The four lists, handed to the browser as one pool.
 *
 * The four tabs the picker used to have are rows in its left column now, so a
 * search finds a style whichever list it lives in — which is the whole reason
 * this stopped being four separate pickers. What gets STORED is unchanged: one
 * `"None"`-or-`"a | b"` string per widget, exactly as before.
 */
const styleSources = computed<StyleSource[]>(() =>
  styleTabs.map((tab) => ({
    id: tab.id,
    label: t(tab.labelKey, tab.fallback),
    icon: tab.icon,
    options: getStyleOptions(tab.id),
    value: getStyleValue(tab.id),
  })),
);

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

// Contract-driven visibility: a widget with `visible_when` renders only while
// the named widget's value matches (`visible_when_value` may be a list). The
// video shot parameters use it to appear solely for the Video / MiniMax H3
// model types; hidden values stay in nodeState, so switching back restores
// them. The backend applies the same gate before injecting anything, so a
// hidden value can never leak into a non-video run.
function isWidgetVisible(w: WidgetSpec): boolean {
  if (!w.visible_when) return true;
  const current = getValue(w.visible_when, "");
  const expected = w.visible_when_value;
  if (Array.isArray(expected)) return expected.includes(current);
  return current === expected;
}

// Duration slider bounds follow the active video profile. Mirrors
// VIDEO_DURATION_RANGES in common/data.py (single source of truth there;
// the backend clamps again at injection time, so a stale value here can
// never produce an invalid prompt).
const VIDEO_DURATION_RANGES: Record<string, [number, number]> = {
  "Video": [2, 20],
  "MiniMax H3": [4, 15],
};
function videoDurationBounds(): { min: number; max: number } {
  const range = VIDEO_DURATION_RANGES[String(getValue("model_type", "Auto/None"))];
  const [min, max] = range ?? [0, 20];
  return { min, max };
}
watch(() => String(getValue("model_type", "Auto/None")), () => {
  const value = Number(getValue("video_duration", 0)) || 0;
  if (value <= 0) return;
  const { min, max } = videoDurationBounds();
  setValue("video_duration", Math.max(min, Math.min(max, value)));
});

// Section collapse state lives in `state.ui` (the UI-only bucket documented
// in FilNodeState) so it survives workflow save/load like everything else
// here. Previously FilSection was passed a hardcoded `model-value="false"`
// with no listener — the arrow looked clickable but toggling it did nothing.
//
// Agent/Focus/Output/Styles start collapsed on a fresh node (before the user
// has ever toggled them) so the panel isn't cluttered on first drop; once a
// value is explicitly stored in `state.ui` it always wins over this default.
const DEFAULT_COLLAPSED = new Set(["agent", "focus", "output", "advanced"]);

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
  // Belt and braces — see the same note in HiResFix.vue. The claim that the
  // createSyncedNodeState mirror cannot reach the seed widget was measured
  // false against a live ComfyUI 1.47.10 on 2026-08-02; the direct write stays
  // because a fixed seed that silently fails to queue is expensive, not because
  // the mirror is broken.
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

            <StyleBrowser
              v-model:open="isUnifiedStylePickerOpen"
              :sources="styleSources"
              @update:source="(p: { id: string; value: string }) => setValue(p.id, p.value)"
              @clear-all="clearAllStyles"
            />
          </div>

          <div
            v-if="isWidgetVisible(w)"
            v-show="section === '_' || section === 'prompt' || !isCollapsed(String(section))"
            class="fil-w-row"
            :class="{ 'is-growable': isGrowable(w.name), 'is-linked': isSocketField(w.name) && isLinked(w.name) }"
            :title="isSocketField(w.name) ? fieldTooltip(w) : widgetTooltip(w)">
            <FilTextArea
              v-if="w.name === 'prompt' || w.name === 'negative_prompt' || w.name === 'custom_style'"
              :ref="(el) => setFieldEl(w.name, el)"
              :model-value="String(getValue(w.name, ''))"
              :linked="isLinked(w.name)"
              :placeholder="isLinked(w.name) ? t('scn_field_linked', '🔗 Text comes from the connected node') : formatFieldLabel(w)"
              :rows="2"
              @update:model-value="(v: string) => setValue(w.name, v)"
            />
            <FilSlider v-else-if="w.kind === 'slider'"
              :model-value="Number(getValue(w.name, 0)) || 0"
              :min="w.name === 'video_duration' ? videoDurationBounds().min : (w.min ?? 0)"
              :max="w.name === 'video_duration' ? videoDurationBounds().max : (w.max ?? 1)"
              :step="w.step ?? 1"
              :label="formatFieldLabel(w)"
              @update:model-value="(v: number) => setValue(w.name, v)" />
            <FilSelect v-else-if="w.name === 'video_camera'"
              :options="w.values || []" :model-value="String(getValue(w.name, 'Auto'))"
              :label="formatFieldLabel(w)" @update:model-value="(v: string) => setValue(w.name, v)" />
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



    <FilSeedRow
      :display="seedDisplay"
      :mode="seedMode"
      :field-aria-label="t('sd_aria_seed_value', 'Seed value')"
      :field-title="seedMode === 'fixed' ? t('scn_seed_locked', 'Locked seed') : t('scn_seed_auto_random', 'Auto-random — a new seed is generated each run')"
      :labels="{
        random: t('scn_seed_random', 'Random'),
        useLast: t('scn_seed_use_last', 'Use last'),
        newFixed: t('scn_seed_new_fixed', 'New fixed'),
      }"
      :titles="{
        random: t('scn_seed_mode_tt', 'Random generates a new seed each run.'),
        useLast: props.state.lastRunSeed != null ? `${t('scn_seed_use_last_prefix', `Reuse the last run's seed:`)} ${props.state.lastRunSeed}` : t('scn_seed_use_last_tt', 'Reuse the seed from the last executed run.'),
        newFixed: t('scn_seed_new_fixed_tt', 'Generate a new random fixed seed.'),
      }"
      @input-seed="(v: number) => (seedValue = v)"
      @random="setRandomSeed"
      @use-last="useLastSeed"
      @new-fixed="newFixedSeed"
    />
  </div>
</template>

<style scoped>
/* Container surface (glass, radius, blur, shadow) comes from the shared
 * `.fil-node-shell [class$="-root"]` rule in styles/brand.ts — keep only
 * layout here so every node stays in sync. */
.fil-scanner-root {
  display: flex; flex-direction: column; gap: var(--fil-node-gap); padding: var(--fil-node-pad);
  color: var(--fil-text); font-family: ui-sans-serif, system-ui, sans-serif;
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
/* The field itself is FilTextArea (appearance and the linked/dashed state live
 * there). `:deep` because the growable stretch is this node's business: the
 * widget has no idea it is inside a resizable panel. `min-height` overrides the
 * widget default — the prompt fields start taller than a generic one. */
.fil-w-row :deep(.fil-w-textarea) { min-height: 48px; }
.fil-w-row.is-growable :deep(.fil-w-textarea) { flex: 1 1 auto; height: auto; }
.fil-single-style-block { margin-top: 2px; }

/* The seed row is FilSeedRow now — shared with HiResFix. */

/* Opens the style modal; `has-styles` means at least one style is selected.
 *
 * Was a fixed cyan→magenta gradient with a `pulse-neon` @keyframes animation on
 * the active state. Two problems: the gradient ignored the theme entirely (it is
 * cyan even under the orange default and the lime Travelmate), and the animation
 * ran forever on every scanner in the graph — styles/brand.ts states the reason
 * its own theme flourishes are static, "so they don't cost a continuous repaint
 * on a graph with many nodes", and this rule was the exception to that rule.
 * The selected state is now the accent, held still. */
.fil-style-picker-btn {
  flex: 2;
  box-sizing: border-box;
  min-height: var(--fil-control-h);
  border-radius: var(--fil-pill-radius);
  background: var(--fil-pill-bg);
  border: 1px solid var(--fil-pill-border);
  color: var(--fil-text);
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.12s, border-color 0.12s, box-shadow 0.12s;
}
.fil-style-picker-btn:hover {
  background: var(--fil-surface-3);
  border-color: var(--fil-accent);
}
.fil-style-picker-btn:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: -2px;
}
.fil-style-picker-btn.has-styles {
  background: color-mix(in srgb, var(--fil-accent) 20%, transparent);
  border-color: var(--fil-accent);
  box-shadow: 0 0 12px color-mix(in srgb, var(--fil-accent) 25%, transparent);
}
.fil-style-picker-btn.has-styles:hover {
  background: color-mix(in srgb, var(--fil-accent) 32%, transparent);
}
</style>
