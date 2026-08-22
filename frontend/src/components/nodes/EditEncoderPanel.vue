<script setup lang="ts">
/**
 * FiLEditEncoder — prompt + reference images into one edit conditioning
 * (mirrors nodes/node_edit_encoder.py).
 *
 * The four controls here are the ones that change what the node *does* with a
 * reference; everything else it owns (the two megapixel caps, the encoder role,
 * the latents method) is advanced and stays a native widget below.
 *
 * `reference_mode` is first and segmented rather than a dropdown, because
 * picking between its three values is the single decision this node exists to
 * make: whether the reference is looked at, pasted into the frame, or both.
 */
import { computed } from "vue";
import { FilTextArea, FilSelect, FilSegmented, FilSlider } from "@/components/widgets";
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

type Card = { role: string; strength: number; treatment?: string };

/** What the backend clamps a card's pull to (`common/edit_roles.STRENGTH_*`). */
const STRENGTH_MIN = -1;
const STRENGTH_MAX = 2;

/**
 * One card per wired reference, whatever the field currently holds.
 *
 * Parsed leniently and padded to the number of wired slots, mirroring
 * `_edit_roles.parse_cards`: the field can hold hand-written JSON, or a
 * `prompt_preset` value left over from a workflow saved before roles existed.
 * Neither is worth an error message on a panel — the backend recognises the
 * legacy names, and anything unreadable simply reads as "no jobs given".
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
    const resolved = ROLE_OPTIONS.includes(role) ? role : (MERGED_ROLES[role] ?? DEFAULT_ROLE);
    return { role: ROLE_OPTIONS.includes(resolved) ? resolved : DEFAULT_ROLE, strength };
  });
});

/**
 * Write the cards back, and write nothing at all when every reference is doing
 * the default job at full strength: an empty field is what a fresh node has,
 * and a workflow saved after clicking a role back to "as is" should not look
 * different from one where nobody touched it.
 *
 * A strength of 1 is left out of the JSON for the same reason — it is the
 * default the backend fills in, and writing it down makes an untouched card
 * look edited.
 */
function write(next: Card[]) {
  const touched = next.some(card => card.role !== DEFAULT_ROLE || card.strength !== 1);
  cardsField.value = touched
    ? JSON.stringify(next.map(card => (card.strength === 1 ? { role: card.role } : card)))
    : "";
}

function setRole(slot: number, role: string) {
  write(cards.value.map((card, i) => (i === slot ? { ...card, role } : card)));
}

function setStrength(slot: number, strength: number) {
  write(cards.value.map((card, i) => (i === slot ? { ...card, strength } : card)));
}

const thumbTip = computed(() =>
  t("eep_thumb_tt",
    "The prepared copy this reference was reduced to before the model looked at it — the "
    + "role's treatment is already applied here."),
);

/**
 * Why this card's picture may not have arrived, straight from the last run.
 *
 * The `summary` says the same thing once for the whole node, which is exactly
 * what makes it useless with five cards wired: it cannot say *which*.
 */
function note(slot: number): string {
  const list = lastRun.value?.notes;
  return Array.isArray(list) ? (list[slot] ?? "") : "";
}

/**
 * The prepared copy of one reference, as the last run left it.
 *
 * Empty until a run has happened, and empty for a slot wired since — the card
 * then shows its placeholder rather than the picture from a different graph.
 */
function thumb(slot: number): string {
  const list = lastRun.value?.thumbs;
  return Array.isArray(list) ? (list[slot] ?? "") : "";
}

/** "0.55" / "−0.50 away" — the sign is a direction, so it gets a word. */
function strengthLabel(value: number): string {
  return value < 0 ? `${value.toFixed(2)} ${t("eep_away", "away")}` : value.toFixed(2);
}

/** Kept out of the template: the fallback quotes a role name, and a quoted
 * string inside a Vue attribute expression has nowhere left to nest. */
const roleTip = computed(() =>
  t("eep_role_tt",
    "What the model takes from this picture. The role brings the treatment that makes it "
    + "true — \"style\" washes the reference to a colour field so there is no subject left "
    + "to copy."),
);

const promptStrength = computed({
  get: () => {
    const raw = Number(props.state.nodeState.prompt_strength ?? props.state.initialValues.prompt_strength ?? 1);
    return Number.isFinite(raw) ? raw : 1;
  },
  set: (v: number) => { props.state.nodeState.prompt_strength = v; },
});

const promptStrengthTip = computed(() =>
  t("ee_prompt_strength",
    "How loudly the written instruction speaks against the pictures. 1 is as written and "
    + "costs nothing. Below 1 the references decide more and the text less; 0 is what the "
    + "model takes from the pictures alone. Above 1 pushes the instruction harder. Anything "
    + "but 1 encodes a second time with the instruction silenced."),
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

/**
 * Roles that were offered and rendered identically to the one they map to, so
 * they no longer appear in the list (`common/edit_roles.MERGED_ROLES` carries
 * the same table and the renders that cut them).
 *
 * A saved workflow still holds them, and the backend resolves them this way —
 * so the panel has to as well. Falling back to the default role instead would
 * show a card doing one job while the encode did another.
 */
const MERGED_ROLES: Record<string, string> = {
  subject: "as is",
  style: "palette",
  composition: "lighting",
  "shape only": "lighting",
};

const modeOptions = computed(() => comboOptions("reference_mode", ["vision", "latents", "both"]));

const MODE_LABELS: Record<string, string> = {
  vision: "👁️ vision",
  latents: "🧩 latents",
  both: "👁️🧩 both",
};

/**
 * What the last run did, straight from its `ui` payload. Shown because every
 * way this node can disappoint is silent: a reference discarded, a strength
 * that does nothing in this mode, a style preset with nothing treated. The
 * `summary` output says all of it — and says it to nobody unless it is wired.
 *
 * The first line is the shape of the run; a NOTE line is the part worth
 * interrupting for, so that is what a warned run shows.
 */
const lastRun = computed(() => (props.state.ui as { lastRun?: EditEncoderRun | null }).lastRun ?? null);

const report = computed(() => {
  const run = lastRun.value;
  if (!run?.summary) return null;
  const lines = run.summary.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const note = lines.find(l => l.startsWith("NOTE:"));
  const text = (note ?? lines[0]).replace(/^NOTE:\s*/, "");
  return {
    // The NOTE prefix carried the capital letter; put one back rather than
    // opening the line mid-sentence.
    text: text.charAt(0).toUpperCase() + text.slice(1),
    warned: !!note,
    full: run.summary,
  };
});
</script>

<template>
  <div class="fil-ee-root">
    <div class="fil-ee-head" :title="t('eep_refs_tt', 'Reference images wired into the slots below the panel — each one adds a latent to the conditioning.')">
      🖼️ {{ refs }} {{ tPlural('eep_refs', refs, 'reference', 'references', 'references') }}
    </div>

    <FilTextArea :ref="(el: unknown) => setFieldEl('prompt', el)"
      v-model="prompt" :rows="3" :linked="isLinked('prompt')"
      :placeholder="t('eep_prompt_ph', 'What to change, keep, or compose from the references…')"
      :title="linkedTip('prompt', t('ee_prompt', 'Edit instruction: what to change, keep, or compose from the references.'))" />

    <FilSlider :ref="(el: unknown) => setFieldEl('prompt_strength', el)"
      :model-value="promptStrength" :min="0" :max="2" :step="0.05"
      :disabled="isLinked('prompt_strength')" inline-label
      :label="t('eep_prompt_strength', '🗣️ Prompt')"
      :title="linkedTip('prompt_strength', promptStrengthTip)"
      @update:model-value="(v: number) => { promptStrength = v; }" />

    <FilSegmented v-model="referenceMode" :options="modeOptions" :option-labels="MODE_LABELS"
      :label="t('eep_mode', '🎯 References reach')"
      :title="t('ee_mode', 'How references reach the model.')" />

    <div v-if="refs" class="fil-ee-cards">
      <div v-for="(card, i) in cards" :key="i" class="fil-ee-card">
        <div class="fil-ee-card-row">
          <img v-if="thumb(i)" class="fil-ee-thumb" :src="thumb(i)" alt="" :title="thumbTip" />
          <span v-else class="fil-ee-slot">{{ i + 1 }}</span>
          <FilSelect :model-value="card.role" :options="ROLE_OPTIONS" :option-labels="ROLE_LABELS"
            :title="roleTip"
            @update:model-value="(v: string) => setRole(i, v)" />
        </div>
        <div class="fil-ee-card-row">
          <span class="fil-ee-slot">{{ strengthLabel(card.strength) }}</span>
          <FilSlider :model-value="card.strength"
            :min="STRENGTH_MIN" :max="STRENGTH_MAX" :step="0.05" :title="strengthTip"
            @update:model-value="(v: number) => setStrength(i, v)" />
        </div>
        <div v-if="note(i)" class="fil-ee-card-note" :title="note(i)">⚠️ {{ note(i) }}</div>
      </div>
    </div>

<div v-if="report" class="fil-ee-report" :class="{ warned: report.warned }" :title="report.full">
      {{ report.warned ? '⚠️' : '✅' }} {{ report.text }}
    </div>
  </div>
</template>

<style scoped>
/* Container surface comes from the shared `.fil-node-shell [class$="-root"]`
 * rule in styles/brand.ts — keep only layout here. */
.fil-ee-root { width: 100%; box-sizing: border-box; min-width: 0; display: flex; flex-direction: column; gap: var(--fil-node-gap); padding: var(--fil-node-pad);
  color: var(--fil-text); font-family: ui-sans-serif, system-ui, sans-serif; }
.fil-ee-head { font-size: 11px; line-height: 1.2; color: var(--fil-muted); }
/* One row per wired reference. The slot number is the whole label: it is what
 * the summary, the socket and the vision blocks all count by. */
.fil-ee-cards { display: flex; flex-direction: column; gap: 4px; }
.fil-ee-card { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.fil-ee-card-note { font-size: 10px; line-height: 1.3; color: var(--fil-warn, #f0b429);
  padding-left: 40px; }
.fil-ee-card-row { display: flex; align-items: center; gap: 6px; min-width: 0; }
.fil-ee-card-row > :last-child { flex: 1 1 auto; min-width: 0; }
/* Fixed gutter so the select and the slider start on the same line, whatever
 * the strength reads — the number sits where the slot number does. */
/* Same gutter as the slot number it replaces, so the select below never shifts
 * sideways when a run fills the thumbnails in. */
.fil-ee-thumb { flex: 0 0 auto; width: 34px; height: 34px; object-fit: cover;
  border-radius: 3px; display: block; }
.fil-ee-slot { flex: 0 0 auto; width: 34px; text-align: right; font-size: 11px;
  line-height: 1.2; color: var(--fil-muted); font-variant-numeric: tabular-nums; }
/* The last run, in one line. Clipped rather than wrapped so the node keeps its
 * height whatever the report says; the full text is the tooltip. */
.fil-ee-report { font-size: 11px; line-height: 1.3; color: var(--fil-muted);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.fil-ee-report.warned { color: var(--fil-danger); white-space: normal; }
</style>
