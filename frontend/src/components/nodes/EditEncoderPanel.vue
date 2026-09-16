<script setup lang="ts">
/**
 * FiLEditEncoder — prompt + reference images into one edit conditioning
 * (mirrors nodes/node_edit_encoder.py).
 *
 * All controls are fully open and visible without nested spoilers or accordions:
 * 1. Prompt & balancing sliders (Prompt weight + References weight)
 * 2. References reach mode (Vision / Latents / Both)
 * 3. Reference cards with role, phase and per-slot strength
 * 4. VLM & Latents Engine parameters (method, megapixel caps, system role)
 * 5. Diagnostic run report
 */
import { computed } from "vue";
import { FilTextArea, FilTextInput, FilSelect, FilSegmented, FilSlider } from "@/components/widgets";
import { NODE_CONTRACTS } from "@/api/contracts";
import { useI18n } from "@/composables/useI18n";
import { findFilWidget } from "@/nodes2/util";
import { useWidgetSockets } from "@/composables/useWidgetSockets";
import { EDIT_ENCODER_SOCKET_INPUTS, type EditEncoderRun } from "@/nodes2/nodes/edit_encoder";
import type { FilNodeState } from "@/nodes2/filState";

const props = defineProps<{ state: FilNodeState }>();
const { t, tPlural } = useI18n();

const { setFieldEl, isLinked } = useWidgetSockets(props.state, EDIT_ENCODER_SOCKET_INPUTS);
const linkedTip = (name: string, own: string) =>
  isLinked(name) ? t("fld_linked_tt", "Driven by the connected input — disconnect it to edit here.") : own;

function stringField(name: string, fallback: string) {
  return computed({
    get: () => String(props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback),
    set: (v: string) => { props.state.nodeState[name] = v; },
  });
}

function numericField(name: string, fallback: number) {
  return computed({
    get: () => {
      const raw = Number(props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback);
      return Number.isFinite(raw) ? raw : fallback;
    },
    set: (v: number) => { props.state.nodeState[name] = v; },
  });
}

function comboOptions(name: string, fallback: string[]): string[] {
  const node = props.state.node;
  const w = node ? findFilWidget(node, name) : null;
  const vals = (w as { options?: { values?: unknown } } | null)?.options?.values;
  return Array.isArray(vals) && vals.length ? (vals as string[]) : fallback;
}

const refs = computed(() => Number((props.state.ui as { refs?: number }).refs ?? 0));

const prompt = stringField("prompt", "");
const referenceMode = stringField("reference_mode", "vision");
const cardsField = stringField("reference_cards", "");

const promptStrength = numericField("prompt_strength", 1.0);
const referenceStrength = numericField("reference_strength", 1.0);

const referenceLatentsMethod = stringField("reference_latents_method", "index_timestep_zero");
const visionMegapixels = numericField("vision_megapixels", 0.15);
const latentMegapixels = numericField("latent_megapixels", 1.0);
const systemPreset = stringField("system_preset", "none");
const systemPrompt = stringField("system_prompt", "");

/**
 * The jobs a reference can be given, from the contract rather than a copy kept
 * here. `reference_cards` is a string widget, so there is no native combo whose
 * options `comboOptions` could read — the backend puts the vocabulary on the
 * spec's `values` for exactly this.
 */
const ROLE_OPTIONS: string[] =
  NODE_CONTRACTS["FiLEditEncoder"]?.inputs.required.find(w => w.name === "reference_cards")?.values
  ?? ["as is"];
const DEFAULT_ROLE = ROLE_OPTIONS[0] ?? "as is";

type Card = { role: string; strength: number; window: string; treatment?: string };

/**
 * When during sampling a reference speaks — the values and the labels of
 * `common/edit_roles.WINDOWS`.
 */
const WINDOW_OPTIONS = ["whole run", "layout", "look"];
const DEFAULT_WINDOW = "whole run";
const WINDOW_LABELS: Record<string, string> = {
  "whole run": "⏱ all",
  layout: "⏱ layout",
  look: "⏱ look",
};

/** What the backend clamps a card's pull to (`common/edit_roles.STRENGTH_*`). */
const STRENGTH_MIN = -1;
const STRENGTH_MAX = 2;

/**
 * Roles that were offered and rendered identically to the one they map to.
 */
const MERGED_ROLES: Record<string, string> = {
  subject: "as is",
  style: "palette",
  composition: "lighting",
  "shape only": "lighting",
};

/**
 * One card per wired reference, whatever the field currently holds.
 */
const cards = computed<Card[]>(() => {
  let parsed: unknown;
  try {
    parsed = JSON.parse(cardsField.value || "[]");
  } catch {
    parsed = null;
  }
  const list = Array.isArray(parsed) ? parsed : [];
  return Array.from({ length: refs.value }, (_, i) => {
    const entry = list[i] as Partial<Card> | undefined;
    const role = typeof entry?.role === "string" ? entry.role : DEFAULT_ROLE;
    const raw = Number(entry?.strength);
    const strength = Number.isFinite(raw) ? Math.min(STRENGTH_MAX, Math.max(STRENGTH_MIN, raw)) : 1;
    const asked = typeof entry?.window === "string" ? entry.window : DEFAULT_WINDOW;
    const window = WINDOW_OPTIONS.includes(asked) ? asked : DEFAULT_WINDOW;
    const resolved = ROLE_OPTIONS.includes(role) ? role : (MERGED_ROLES[role] ?? DEFAULT_ROLE);
    return { role: ROLE_OPTIONS.includes(resolved) ? resolved : DEFAULT_ROLE, strength, window };
  });
});

function write(next: Card[]) {
  const touched = next.some(
    card => card.role !== DEFAULT_ROLE || card.strength !== 1 || card.window !== DEFAULT_WINDOW,
  );
  cardsField.value = touched
    ? JSON.stringify(next.map((card) => {
        const out: Record<string, unknown> = { role: card.role };
        if (card.strength !== 1) out.strength = card.strength;
        if (card.window !== DEFAULT_WINDOW) out.window = card.window;
        if (card.treatment) out.treatment = card.treatment;
        return out;
      }))
    : "";
}

function setRole(slot: number, role: string) {
  write(cards.value.map((card, i) => (i === slot ? { ...card, role } : card)));
}

function setWindow(slot: number, window: string) {
  write(cards.value.map((card, i) => (i === slot ? { ...card, window } : card)));
}

function setStrength(slot: number, strength: number) {
  write(cards.value.map((card, i) => (i === slot ? { ...card, strength } : card)));
}

const thumbTip = computed(() =>
  t("eep_thumb_tt",
    "The prepared copy this reference was reduced to before the model looked at it — the "
    + "role's treatment is already applied here."),
);

function note(slot: number): string {
  const list = lastRun.value?.notes;
  return Array.isArray(list) ? (list[slot] ?? "") : "";
}

function thumb(slot: number): string {
  const list = lastRun.value?.thumbs;
  return Array.isArray(list) ? (list[slot] ?? "") : "";
}

function strengthLabel(value: number): string {
  return value < 0 ? `${value.toFixed(2)} ${t("eep_away", "away")}` : value.toFixed(2);
}

const roleTip = computed(() =>
  t("eep_role_tt",
    "What the model takes from this picture. The role brings the treatment that makes it "
    + "true — \"style\" washes the reference to a colour field so there is no subject left "
    + "to copy."),
);

const promptStrengthTip = computed(() =>
  t("ee_prompt_strength",
    "How loudly the written instruction speaks against the pictures. 1 is as written and "
    + "costs nothing. Below 1 the references decide more and the text less; 0 is what the "
    + "model takes from the pictures alone. Above 1 pushes the instruction harder. Anything "
    + "but 1 encodes a second time with the instruction silenced."),
);

const refStrengthTip = computed(() =>
  t("ee_strength",
    "How hard the references pull on the text encoder. 1.0 is the plain encode and costs nothing; "
    + "anything else encodes a second time against blank references and interpolates."),
);

const windowTip = computed(() =>
  t("eep_window_tt",
    "When during sampling this reference speaks. Measured on Krea 2: the early steps settle "
    + "the layout and the later ones the look. 'layout' lets it choose the framing and then "
    + "go quiet; 'look' holds it back until the frame is decided, so it lends its surface "
    + "without dictating the composition. Each window costs an encoder pass the first time."),
);

const strengthTip = computed(() =>
  t("eep_strength_tt",
    "How hard this one reference pulls, and which way. Measured on Krea 2: 1 holds the "
    + "reference, and so does 0.5 — nearly all of the loosening happens close to 0, where "
    + "the reference drops out entirely. Below zero is not less but opposite: the result "
    + "comes back with the reference's traits inverted, at the cost of one more encoder "
    + "pass. Needs a vision-language encoder such as Qwen3-VL; the report says so when "
    + "there is none."),
);

const ROLE_LABELS: Record<string, string> = {
  "as is": "— as is",
  material: "🧱 material",
  lighting: "💡 light & layout",
  palette: "🌈 palette",
};

const modeOptions = computed(() => comboOptions("reference_mode", ["vision", "latents", "both"]));
const MODE_LABELS: Record<string, string> = {
  vision: "👁️ vision",
  latents: "🧩 latents",
  both: "👁️🧩 both",
};

const methodOptions = computed(() => comboOptions("reference_latents_method", ["index_timestep_zero", "index", "offset", "uxo"]));
const METHOD_LABELS: Record<string, string> = {
  index_timestep_zero: "Krea 2 (index_timestep_zero)",
  index: "FLUX.2 / Kontext (index)",
  offset: "Offset (experimental)",
  uxo: "UXO (experimental)",
};

const presetOptions = computed(() => comboOptions("system_preset", ["none", "use reference", "krea2_identity"]));
const PRESET_LABELS: Record<string, string> = {
  none: "Custom / None",
  "use reference": "Use reference (Style / General)",
  krea2_identity: "🎯 Krea2 Identity (High likeness)",
};

const lastRun = computed(() => (props.state.ui as { lastRun?: EditEncoderRun | null }).lastRun ?? null);

const report = computed(() => {
  const run = lastRun.value;
  if (!run?.summary) return null;
  const lines = run.summary.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const note = lines.find(l => l.startsWith("NOTE:"));
  const text = (note ?? lines[0]).replace(/^NOTE:\s*/, "");
  return {
    text: text.charAt(0).toUpperCase() + text.slice(1),
    warned: !!note,
    full: run.summary,
  };
});
</script>

<template>
  <div class="fil-ee-root">
    <!-- Header: Active references count -->
    <div class="fil-ee-head" :title="t('eep_refs_tt', 'Reference images wired into the slots below the panel — each one adds a latent to the conditioning.')">
      <span class="fil-ee-head-count">🖼️ {{ refs }} {{ tPlural('eep_refs', refs, 'reference', 'references', 'references') }}</span>
      <span v-if="refs > 0" class="fil-ee-badge-active">ACTIVE</span>
    </div>

    <!-- Section 1: Prompt & Balancing weights -->
    <FilTextArea :ref="(el: unknown) => setFieldEl('prompt', el)"
      v-model="prompt" :rows="3" :linked="isLinked('prompt')"
      :placeholder="t('eep_prompt_ph', 'What to change, keep, or compose from the references…')"
      :title="linkedTip('prompt', t('ee_prompt', 'Edit instruction: what to change, keep, or compose from the references.'))" />

    <div class="fil-ee-grid-2">
      <FilSlider :ref="(el: unknown) => setFieldEl('prompt_strength', el)"
        :model-value="promptStrength" :min="0" :max="2" :step="0.05"
        :disabled="isLinked('prompt_strength')" inline-label
        :label="t('eep_prompt_strength', '🗣️ Prompt')"
        :title="linkedTip('prompt_strength', promptStrengthTip)"
        @update:model-value="(v: number) => { promptStrength = v; }" />

      <FilSlider :ref="(el: unknown) => setFieldEl('reference_strength', el)"
        :model-value="referenceStrength" :min="0" :max="3" :step="0.05"
        :disabled="isLinked('reference_strength')" inline-label
        :label="t('eep_ref_strength', '⚖️ References')"
        :title="linkedTip('reference_strength', refStrengthTip)"
        @update:model-value="(v: number) => { referenceStrength = v; }" />
    </div>

    <!-- Section 2: References reach mode -->
    <FilSegmented v-model="referenceMode" :options="modeOptions" :option-labels="MODE_LABELS"
      :label="t('eep_mode', '🎯 References reach')"
      :title="t('ee_mode', 'How references reach the model.')" />

    <!-- Section 3: Reference Cards (100% open) -->
    <div v-if="refs > 0" class="fil-ee-cards">
      <div v-for="(card, i) in cards" :key="i" class="fil-ee-card">
        <div class="fil-ee-card-row">
          <img v-if="thumb(i)" class="fil-ee-thumb" :src="thumb(i)" alt="" :title="thumbTip" />
          <div v-else class="fil-ee-slot-badge" :title="i === 0 ? t('eep_slot_primary', 'Primary / Mask') : ''">
            {{ t('eep_slot_ref', 'Ref #') }}{{ i + 1 }}
          </div>
          <FilSelect class="fil-ee-role" :model-value="card.role" :options="ROLE_OPTIONS" :option-labels="ROLE_LABELS"
            :title="roleTip"
            @update:model-value="(v: string) => setRole(i, v)" />
          <FilSelect class="fil-ee-window" :model-value="card.window" :options="WINDOW_OPTIONS"
            :option-labels="WINDOW_LABELS" :title="windowTip"
            @update:model-value="(v: string) => setWindow(i, v)" />
        </div>
        <div class="fil-ee-card-row">
          <span class="fil-ee-slot-val">{{ strengthLabel(card.strength) }}</span>
          <FilSlider :model-value="card.strength"
            :min="STRENGTH_MIN" :max="STRENGTH_MAX" :step="0.05" :title="strengthTip"
            @update:model-value="(v: number) => setStrength(i, v)" />
        </div>
        <div v-if="note(i)" class="fil-ee-card-note" :title="note(i)">⚠️ {{ note(i) }}</div>
      </div>
    </div>
    <div v-else class="fil-ee-no-refs">
      🔌 {{ t('eep_no_refs', 'No reference images wired — connect images to image0..image3 inputs') }}
    </div>

    <!-- Section 4: VLM & Latents Engine (100% open, no hidden accordions) -->
    <div class="fil-ee-engine">
      <div class="fil-ee-engine-head">
        {{ t('eep_engine_settings', '⚙️ VLM & Latents Engine') }}
      </div>

      <div class="fil-ee-field">
        <span class="fil-ee-field-label" :title="t('ee_method', 'Only used when reference_mode sends latents.')">
          {{ t('eep_latents_method', 'Reference Latents Method') }}
        </span>
        <FilSelect v-model="referenceLatentsMethod" :options="methodOptions" :option-labels="METHOD_LABELS"
          :title="t('ee_method', 'Only used when reference_mode sends latents.')" />
      </div>

      <div class="fil-ee-grid-2">
        <FilSlider :model-value="visionMegapixels" :min="0.05" :max="2.0" :step="0.05" inline-label
          :label="t('eep_vision_mp', '👁️ VLM MP')"
          :title="t('ee_vl_mp', 'Size of the copy the text encoder reads.')"
          @update:model-value="(v: number) => { visionMegapixels = v; }" />

        <FilSlider :model-value="latentMegapixels" :min="0.2" :max="2.0" :step="0.05" inline-label
          :label="t('eep_latent_mp', '🧩 Latent MP')"
          :title="t('ee_lat_mp', 'Cap for the copy the VAE encodes.')"
          @update:model-value="(v: number) => { latentMegapixels = v; }" />
      </div>

      <div class="fil-ee-system-box">
        <div class="fil-ee-field">
          <span class="fil-ee-field-label" :title="t('ee_preset', 'Role sent to the text encoder.')">
            {{ t('eep_system_preset', 'System Preset') }}
          </span>
          <FilSelect v-model="systemPreset" :options="presetOptions" :option-labels="PRESET_LABELS"
            :title="t('ee_preset', 'Role sent to the text encoder.')" />
        </div>

        <FilTextInput v-if="systemPreset === 'none'" v-model="systemPrompt"
          :placeholder="t('eep_system_prompt_ph', 'Custom system prompt for VLM (optional)...')"
          :title="t('ee_system', 'Optional role for the text encoder, sent before it reads the references.')" />
      </div>
    </div>

    <!-- Section 5: Run diagnostic report -->
    <div v-if="report" class="fil-ee-report" :class="{ warned: report.warned }" :title="report.full">
      {{ report.warned ? '⚠️' : '✅' }} {{ report.text }}
    </div>
  </div>
</template>

<style scoped>
.fil-ee-root {
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

.fil-ee-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  line-height: 1.2;
  color: var(--fil-muted, #888);
}

.fil-ee-badge-active {
  font-size: 9px;
  font-weight: 700;
  padding: 1px 5px;
  border-radius: 4px;
  background: rgba(34, 197, 94, 0.15);
  color: #4ade80;
  border: 1px solid rgba(34, 197, 94, 0.3);
  letter-spacing: 0.5px;
}

.fil-ee-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  min-width: 0;
}

.fil-ee-cards {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.fil-ee-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  padding: 6px;
  background: var(--fil-surface-subtle, rgba(255, 255, 255, 0.03));
  border: 1px solid var(--fil-border-subtle, rgba(255, 255, 255, 0.06));
  border-radius: 6px;
}

.fil-ee-card-row {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
}

.fil-ee-card-row > :last-child {
  flex: 1 1 auto;
  min-width: 0;
}

.fil-ee-role {
  flex: 1 1 auto;
  min-width: 110px;
}

.fil-ee-card-row > .fil-ee-window {
  flex: 0 0 auto;
  width: 110px;
}

.fil-ee-thumb {
  flex: 0 0 auto;
  width: 34px;
  height: 34px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid var(--fil-border-subtle, rgba(255, 255, 255, 0.1));
  display: block;
}

.fil-ee-slot-badge {
  flex: 0 0 auto;
  min-width: 44px;
  text-align: center;
  font-size: 10px;
  font-weight: 600;
  padding: 3px 4px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 4px;
  color: var(--fil-muted, #aaa);
}

.fil-ee-slot-val {
  flex: 0 0 auto;
  width: 44px;
  text-align: right;
  font-size: 11px;
  line-height: 1.2;
  color: var(--fil-muted, #aaa);
  font-variant-numeric: tabular-nums;
}

.fil-ee-card-note {
  font-size: 10px;
  line-height: 1.3;
  color: var(--fil-warn, #f0b429);
  padding-left: 50px;
}

.fil-ee-no-refs {
  font-size: 11px;
  color: var(--fil-muted, #777);
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px dashed var(--fil-border-subtle, rgba(255, 255, 255, 0.08));
  border-radius: 6px;
  text-align: center;
}

/* Engine Section */
.fil-ee-engine {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  background: var(--fil-surface-subtle, rgba(255, 255, 255, 0.02));
  border: 1px solid var(--fil-border-subtle, rgba(255, 255, 255, 0.07));
  border-radius: 6px;
}

.fil-ee-engine-head {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--fil-muted, #888);
}

.fil-ee-field {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}

.fil-ee-field-label {
  font-size: 10px;
  color: var(--fil-muted, #888);
}

.fil-ee-system-box {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.fil-ee-report {
  font-size: 11px;
  line-height: 1.3;
  color: var(--fil-muted, #888);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 4px 6px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 4px;
}

.fil-ee-report.warned {
  color: var(--fil-danger, #f87171);
  white-space: normal;
}
</style>
