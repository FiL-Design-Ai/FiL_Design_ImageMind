<script setup lang="ts">
/**
 * FiLDatasetForge — batch → bucketed images + captions on disk.
 *
 * Laid out as the four steps the backend actually takes, numbered so the
 * order reads top to bottom instead of being a flat pile of 19 widgets:
 * 1) who/what this dataset is  2) file format  3) captions  4) write to disk.
 */
import { computed, onMounted, ref, watch } from "vue";
import {
  FilSection, FilSegmented, FilSelect, FilComboBox, FilTextInput, FilTextArea,
  FilNumberInput, FilToggle, FilInfo,
} from "@/components/widgets";
import type { FilComboOption } from "@/components/widgets";
import { useWidgetSockets } from "@/composables/useWidgetSockets";
import { DATASET_SOCKET_INPUTS } from "@/nodes2/nodes/dataset";
import type { FilNodeState } from "@/nodes2/filState";
import { useI18n } from "@/composables/useI18n";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

// Fields that can also be driven from the graph: the dot is lined up with its
// field, and a wired field goes read-only — a link wins over anything typed.
const { setFieldEl, isLinked } = useWidgetSockets(props.state, DATASET_SOCKET_INPUTS);
const linkedTip = (name: string, own: string) =>
  isLinked(name) ? t("fld_linked_tt", "Driven by the connected input — disconnect it to edit here.") : own;

function getValue(name: string, fallback: unknown = ""): unknown {
  return props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback;
}
function setValue(name: string, v: unknown) {
  props.state.nodeState[name] = v;
}
function strField(name: string, fallback = "") {
  return computed<string>({
    get: () => String(getValue(name, fallback)),
    set: (v) => setValue(name, v),
  });
}
function numField(name: string, fallback: number) {
  return computed<number>({
    // `Number(x) || fallback` (the pattern the older panels use) would turn a
    // deliberate 0 into the fallback — which for `seed` means a pinned seed of
    // 0 silently reading back as -1, i.e. "let the provider randomize".
    get: () => {
      const n = Number(getValue(name, fallback));
      return Number.isFinite(n) ? n : fallback;
    },
    set: (v) => setValue(name, v),
  });
}
function boolToggle(name: string, fallback: boolean) {
  return computed<"ON" | "OFF">({
    get: () => (getValue(name, fallback) ? "ON" : "OFF"),
    set: (v) => setValue(name, v === "ON"),
  });
}

// ── 1) identity ───────────────────────────────────────────────────────────
const datasetName = strField("dataset_name", "my_lora");
const triggerWord = strField("trigger_word", "");
const classToken = strField("class_token", "");
const repeats = numField("repeats", 10);
const layout = strField("layout", "kohya");

// Mirrors common/dataset/writer.py's sanitize_name/sanitize_token — the
// preview's whole job is to show the folder that will actually appear on
// disk, so it has to apply the same rewriting the backend does rather than
// echoing raw input ("my lora" really becomes "my_lora").
function sanitizeName(raw: string, fallback: string): string {
  const cleaned = raw.trim().replace(/[^A-Za-z0-9._-]+/g, "_").replace(/^[._ ]+|[._ ]+$/g, "");
  return cleaned || fallback;
}
function sanitizeToken(raw: string): string {
  return raw.replace(/[^A-Za-z0-9._\- ]+/g, "").trim().replace(/\s{2,}/g, " ");
}

/** Mirrors common/dataset/writer.py's concept_folder_name()/resolve_dirs(). */
const folderPreview = computed(() => {
  const name = sanitizeName(datasetName.value, "my_lora");
  if (layout.value === "flat") return `${name}/`;
  const tokens = [sanitizeToken(triggerWord.value), sanitizeToken(classToken.value)]
    .filter(Boolean).join(" ") || "concept";
  return `${name}/img/${Math.max(1, repeats.value)}_${tokens}/`;
});

// ── 2) format ─────────────────────────────────────────────────────────────
// `computed`, not a plain const: useI18n fetches the locale asynchronously and
// `t()` reads it out of a reactive object, so anything resolved once during
// setup keeps the English fallback forever. Every other label here lives in
// the template and re-renders on its own; this list has to opt in explicitly.
const RESOLUTION_OPTIONS = computed<FilComboOption[]>(() => [
  { value: "512", label: t("dsp_res_512", "512 — SD 1.5, fast") },
  { value: "640", label: "640" },
  { value: "768", label: t("dsp_res_768", "768 — SD 1.5, quality") },
  { value: "896", label: "896" },
  { value: "1024", label: t("dsp_res_1024", "1024 — SDXL / Flux") },
  { value: "1152", label: "1152" },
  { value: "1216", label: t("dsp_res_1216", "1216 — high-res") },
  { value: "1536", label: t("dsp_res_1536", "1536 — high-res") },
]);
const baseResolution = strField("base_resolution", "1024");
const cropMode = strField("crop_mode", "center");

// ── 3) captions ───────────────────────────────────────────────────────────
const captionMode = strField("caption_mode", "natural");
const captionLanguage = strField("caption_language", "en");
const captionMaxWords = numField("caption_max_words", 60);
const manualCaptions = strField("captions", "");
const dontCaption = strField("dont_caption", "");
const captionInstruction = strField("caption_instruction", "");
const needsLlm = computed(() => captionMode.value !== "none" && !manualCaptions.value.trim());

// Config is a real input socket, not a widget, so `useWidgetSockets` above does
// not cover it. It rides the same signal instead of a timer: `linkVersion` is
// bumped from the node's `onConnectionsChange` (dataset.ts), which fires for
// EVERY input including this one, so the "connect a provider" hint disappears
// on the same frame the wire lands rather than up to 300ms later. The 300ms
// interval this replaces ran for the lifetime of the node, whether or not
// anything was ever connected.
const configConnected = ref(false);
function syncConfigLink(): void {
  const node = props.state.node as { inputs?: { name?: string; link?: unknown }[] } | undefined;
  const input = node?.inputs?.find((i) => i.name === "config");
  configConnected.value = input != null && input.link != null;
}
watch(() => (props.state.ui as Record<string, unknown> | undefined)?.linkVersion, syncConfigLink);
onMounted(syncConfigLink);

// ── 4) write to disk ─────────────────────────────────────────────────────
const dryRun = boolToggle("dry_run", false);
const writeMode = strField("write_mode", "append");
const bucketStep = numField("bucket_step", 64);
const captionExtension = strField("caption_extension", ".txt");
const imageFormat = strField("image_format", "png");
const jpgQuality = numField("jpg_quality", 95);
const seed = numField("seed", -1);

function isCollapsed(section: string): boolean {
  const stored = (props.state.ui as Record<string, unknown>)[`collapsed_${section}`];
  if (stored === undefined) return section === "advanced" || section === "caption_tuning";
  return Boolean(stored);
}
function setCollapsed(section: string, collapsed: boolean) {
  (props.state.ui as Record<string, unknown>)[`collapsed_${section}`] = collapsed;
}
</script>

<template>
  <div class="fil-ds-root">
    <FilSection :title="t('dsp_section_identity', '1️⃣ Who / what is this')"
      :model-value="isCollapsed('identity')" @update:model-value="(v: boolean) => setCollapsed('identity', v)" />
    <template v-if="!isCollapsed('identity')">
      <FilTextInput :ref="(el: unknown) => setFieldEl('dataset_name', el)" :disabled="isLinked('dataset_name')" v-model="datasetName" :label="t('dsp_label_dataset_name', '🏷️ Dataset name')"
        :title="linkedTip('dataset_name', t('ds_name', ''))" placeholder="my_lora" />
      <FilTextInput :ref="(el: unknown) => setFieldEl('trigger_word', el)" :disabled="isLinked('trigger_word')" v-model="triggerWord" :label="t('dsp_label_trigger', '🔑 Trigger word')"
        :title="linkedTip('trigger_word', t('ds_trigger', ''))" placeholder="ohwx" />
      <FilTextInput :ref="(el: unknown) => setFieldEl('class_token', el)" :disabled="isLinked('class_token')" v-model="classToken" :label="t('dsp_label_class', '🧍 Class')"
        :title="linkedTip('class_token', t('ds_class', ''))" placeholder="woman" />
      <FilInfo :text="`${t('dsp_preview_folder', '📁 Will create:')} ${folderPreview}`" />
    </template>

    <FilSection :title="t('dsp_section_format', '2️⃣ File format')"
      :model-value="isCollapsed('format')" @update:model-value="(v: boolean) => setCollapsed('format', v)" />
    <template v-if="!isCollapsed('format')">
      <FilComboBox v-model="baseResolution" :options="RESOLUTION_OPTIONS" :label="t('dsp_label_resolution', '📐 Resolution')"
        :title="t('ds_resolution', '')" />
      <FilSegmented v-model="layout" :options="['kohya', 'flat']"
        :option-labels="{ kohya: t('dsp_opt_layout_kohya', '🗂️ kohya'), flat: t('dsp_opt_layout_flat', '📄 Flat') }"
        :label="t('dsp_label_layout', '📦 Layout')" :title="t('ds_layout', '')" />
      <FilNumberInput :ref="(el: unknown) => setFieldEl('repeats', el)" :disabled="isLinked('repeats')" v-model="repeats" :min="1" :max="1000" :step="1" :label="t('dsp_label_repeats', '🔁 Repeats')" :title="linkedTip('repeats', t('ds_repeats', ''))" />
      <FilSegmented v-model="cropMode" :options="['center', 'entropy']"
        :option-labels="{ center: t('dsp_opt_crop_center', '🎯 Center'), entropy: t('dsp_opt_crop_entropy', '🔬 Detail') }"
        :label="t('dsp_label_crop', '✂️ Crop')" :title="t('ds_crop_mode', '')" />
    </template>

    <FilSection :title="t('dsp_section_captions', '3️⃣ Captions')"
      :model-value="isCollapsed('captions')" @update:model-value="(v: boolean) => setCollapsed('captions', v)" />
    <template v-if="!isCollapsed('captions')">
      <FilSegmented v-model="captionMode" :options="['natural', 'tags', 'hybrid', 'none']"
        :option-labels="{
          natural: t('dsp_opt_mode_natural', '📝 Text'), tags: t('dsp_opt_mode_tags', '🏷️ Tags'),
          hybrid: t('dsp_opt_mode_hybrid', '🔀 Hybrid'), none: t('dsp_opt_mode_none', '🚫 No LLM'),
        }"
        :label="t('dsp_label_caption_mode', '✍️ Mode')" :title="t('ds_caption_mode', '')" />
      <FilInfo v-if="needsLlm && !configConnected" :text="t('dsp_hint_no_config', '⚠️ Connect 🔌 Provider Loader to caption — or fill in captions below')" err />
      <template v-if="captionMode !== 'none'">
        <FilSegmented v-model="captionLanguage" :options="['en', 'ru']"
          :option-labels="{ en: t('dsp_opt_lang_en', '🇬🇧 EN'), ru: t('dsp_opt_lang_ru', '🇷🇺 RU') }"
          :label="t('dsp_label_caption_lang', '🌐 Language')" :title="t('ds_caption_lang', '')" />
        <FilNumberInput v-model="captionMaxWords" :min="4" :max="400" :step="5"
          :label="t('dsp_label_caption_words', '📏 Max words')" :title="t('ds_caption_words', '')" />
      </template>
      <FilTextArea :ref="(el: unknown) => setFieldEl('captions', el)" :disabled="isLinked('captions')" v-model="manualCaptions" :title="linkedTip('captions', t('ds_captions', ''))"
        :label="t('dsp_label_manual_captions', '📋 Manual captions (optional)')"
        :placeholder="t('dsp_ph_manual_captions', 'One per image, separated by a line with ---. Skips the LLM when filled.')" />
      <template v-if="captionMode !== 'none'">
        <FilSection :title="t('dsp_section_caption_tuning', '🎛️ Caption tuning')"
          :model-value="isCollapsed('caption_tuning')" @update:model-value="(v: boolean) => setCollapsed('caption_tuning', v)" />
        <template v-if="!isCollapsed('caption_tuning')">
          <FilTextArea :ref="(el: unknown) => setFieldEl('dont_caption', el)" :disabled="isLinked('dont_caption')" v-model="dontCaption" :title="linkedTip('dont_caption', t('ds_dont_caption', ''))"
            :label="t('dsp_label_dont_caption', '🚫 Never mention')"
            :placeholder="t('dsp_ph_dont_caption', 'her face, red hair — belongs to the trigger word')" />
          <FilTextArea :ref="(el: unknown) => setFieldEl('caption_instruction', el)" :disabled="isLinked('caption_instruction')" v-model="captionInstruction" :title="linkedTip('caption_instruction', t('ds_caption_instruction', ''))"
            :label="t('dsp_label_caption_instruction', '💬 Extra instruction')" />
        </template>
      </template>
    </template>

    <FilSection :title="t('dsp_section_write', '4️⃣ Write to disk')"
      :model-value="isCollapsed('write')" @update:model-value="(v: boolean) => setCollapsed('write', v)" />
    <template v-if="!isCollapsed('write')">
      <FilToggle :model-value="dryRun" :label="t('dsp_label_dry_run', '🧪 Dry run (plan only)')"
        :title="t('ds_dry_run', '')" @update:model-value="(v) => (dryRun = v)" />
      <FilSegmented v-model="writeMode" :options="['append', 'overwrite']"
        :option-labels="{ append: t('dsp_opt_write_append', '➕ Append'), overwrite: t('dsp_opt_write_overwrite', '♻️ Overwrite') }"
        :label="t('dsp_label_write_mode', '💾 Mode')" :title="t('ds_write_mode', '')" />
    </template>

    <FilSection :title="t('dsp_section_advanced', '⚙️ Technical details')"
      :model-value="isCollapsed('advanced')" @update:model-value="(v: boolean) => setCollapsed('advanced', v)" />
    <template v-if="!isCollapsed('advanced')">
      <FilNumberInput v-model="bucketStep" :min="8" :max="256" :step="8" :label="t('dsp_label_bucket_step', '📏 Bucket step')" :title="t('ds_bucket_step', '')" />
      <FilSelect v-model="captionExtension" :options="['.txt', '.caption']" :label="t('dsp_label_caption_ext', '📄 Caption ext.')" :title="t('ds_caption_ext', '')" />
      <FilSegmented v-model="imageFormat" :options="['png', 'jpg']"
        :option-labels="{ png: 'PNG', jpg: 'JPG' }" :label="t('dsp_label_image_format', '🖼️ File format')" :title="t('ds_image_format', '')" />
      <FilNumberInput v-if="imageFormat === 'jpg'" v-model="jpgQuality" :min="50" :max="100" :step="1"
        :label="t('dsp_label_jpg_quality', '🎚️ JPG quality')" :title="t('ds_jpg_quality', '')" />
      <FilNumberInput :ref="(el: unknown) => setFieldEl('seed', el)" :disabled="isLinked('seed')" v-model="seed" :min="-1" :max="999999999999" :step="1" :label="t('dsp_label_seed', '🌱 Caption seed')" :title="linkedTip('seed', t('ds_seed', ''))" />
    </template>
  </div>
</template>

<style scoped>
/* Container surface comes from the shared `.fil-node-shell [class$="-root"]`
 * rule in styles/brand.ts — keep only layout here. */
.fil-ds-root {
  display: flex; flex-direction: column; gap: var(--fil-node-gap); padding: var(--fil-node-pad);
  color: var(--fil-text); font-family: ui-sans-serif, system-ui, sans-serif;
  width: 100%; box-sizing: border-box; min-width: 0;
}
/* The three caption textareas are FilTextArea now — no local field CSS left. */
</style>
