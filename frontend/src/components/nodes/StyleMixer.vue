<script setup lang="ts">
/**
 * FiLStyleMixer - Cyberpunk HUD panel for mixing 3 style prompts & up to 4 image fusion cards.
 */
import { computed, ref } from "vue";
import { FilSection, FilSlider, FilButton, FilModal, FilStylePicker, FilSegmented, FilTextArea, FilSelect } from "@/components/widgets";
import type { FilNodeState } from "@/nodes2/filState";
import { findFilWidget } from "@/nodes2/util";
import { NODE_CONTRACTS } from "@/api/contracts";
import { useI18n } from "@/composables/useI18n";
import { useWidgetSockets } from "@/composables/useWidgetSockets";
import { STYLE_MIXER_SOCKET_INPUTS } from "@/nodes2/nodes/style_mixer";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

// `base_prompt`'s native widget is hidden (style_mixer.ts's `hiddenWidgetNames`),
// which takes its input socket's row with it — `useWidgetSockets` puts the dot
// back and lines it up with the field below, the same way every other panel in
// the pack does it. Without a field here the text could only ever arrive
// through a wire, with nowhere to type it.
const { setFieldEl, isLinked } = useWidgetSockets(props.state, STYLE_MIXER_SOCKET_INPUTS);

// Fusion modes come from the generated contract, never from a literal here: a
// hand-typed label ("Vision LLM Blend (Smart)") is not a value FUSION_MODES in
// nodes/node_style_mixer.py knows, so picking it wrote a string execute() never
// matches — Smart fusion silently degraded to Weighted Stack, and the value is
// not even a legal option for the COMBO input.
const fusionContract = NODE_CONTRACTS["FiLStyleMixer"];
const fusionSpec =
  fusionContract?.inputs.required.find((i) => i.name === "fusion_mode") ||
  fusionContract?.inputs.optional.find((i) => i.name === "fusion_mode");
const fusionModes = computed<string[]>(() =>
  fusionSpec?.values?.length ? fusionSpec.values : ["Weighted Stack (Fast)"],
);
// Keys are the backend values and must stay verbatim; only the shown text is
// translated. This has to be a computed, not a plain const: useI18n fetches the
// dictionary asynchronously, so anything calling t() at <script setup> time
// captures the English fallback and never updates.
const FUSION_LABELS = computed<Record<string, string>>(() => ({
  "Weighted Stack (Fast)": t("sm_fusion_fast", "Fast"),
  "Smart LLM Fusion (Gen-Mix)": t("sm_fusion_smart", "Smart Fusion"),
}));

function createRef<T>(name: string, defaultValue: T) {
  return computed<T>({
    get: () => (props.state.nodeState[name] as T) ?? defaultValue,
    set: (val: T) => {
      props.state.nodeState[name] = val;
      const w = props.state.node ? findFilWidget(props.state.node, name) : null;
      if (w) w.value = val;
    },
  });
}

const fusionMode = createRef<string>("fusion_mode", "Weighted Stack (Fast)");

// Empty string, not "(None)": this is free text the backend concatenates
// (`node_style_mixer.py` `base_str = str(base_prompt or "").strip()`), so a
// placeholder word here would be prompted verbatim.
const basePrompt = createRef<string>("base_prompt", "");

const style1 = createRef<string>("style_1", "(None)");
const weight1 = createRef<number>("weight_1", 1.0);

const style2 = createRef<string>("style_2", "(None)");
const weight2 = createRef<number>("weight_2", 0.5);

const style3 = createRef<string>("style_3", "(None)");
const weight3 = createRef<number>("weight_3", 0.3);

const imgWeight1 = createRef<number>("img_weight_1", 0.8);
const imgWeight2 = createRef<number>("img_weight_2", 0.6);
const imgWeight3 = createRef<number>("img_weight_3", 0.4);
const imgWeight4 = createRef<number>("img_weight_4", 0.2);

const imgFocus1 = createRef<string>("img_focus_1", "Auto / General");
const imgFocus2 = createRef<string>("img_focus_2", "Auto / General");
const imgFocus3 = createRef<string>("img_focus_3", "Auto / General");
const imgFocus4 = createRef<string>("img_focus_4", "Auto / General");

const defaultFocusOptions = [
  "Auto / General",
  "Style & Texture",
  "Color & Lighting",
  "Subject & Composition",
  "Mood & Atmosphere",
];

function getFocusOptions(name: string): string[] {
  if (!props.state.node) return defaultFocusOptions;
  const w = findFilWidget(props.state.node, name);
  const vals = (w as { options?: { values?: unknown } } | null)?.options?.values;
  return Array.isArray(vals) && vals.length ? (vals as string[]) : defaultFocusOptions;
}

const focusOptions = computed(() => getFocusOptions("img_focus_1"));

const picker1Open = ref(false);
const picker2Open = ref(false);
const picker3Open = ref(false);

const slotVersion = computed(() => (props.state.ui as Record<string, unknown>).slotVersion ?? 0);

function isSlotConnected(slotName: string): boolean {
  void slotVersion.value;
  const node = props.state.node as { _allInputs?: Array<{ name: string; link: number | null }> } | undefined;
  if (!node?._allInputs) return false;
  const slot = node._allInputs.find((s) => s.name === slotName);
  return Boolean(slot && slot.link != null);
}

const showImg3 = computed(() => isSlotConnected("image_2"));
const showImg4 = computed(() => isSlotConnected("image_3"));

function getStyleOptions(name: string): string[] {
  if (!props.state.node) return [];
  const w = findFilWidget(props.state.node, name);
  return (w?.options as { values?: string[] })?.values || (w as { values?: string[] })?.values || [];
}

function formatStyleLabel(val: string, label: string): string {
  // Only the displayed text is translated — `val` stays the raw contract value
  // that travels to the backend.
  if (!val || val === "(None)" || val === "None") return `${label}: ${t('sm_none', '(None)')}`;
  const idx = val.indexOf("/");
  const display = idx === -1 ? val : val.slice(idx + 1);
  return `${label}: ${display}`;
}

function isImageConnected(slotIndex: number): boolean {
  return isSlotConnected(`image_${slotIndex}`);
}

function imageSectionTitle(slotIndex: number, titleKey: string, defaultTitle: string): string {
  const base = t(titleKey, defaultTitle);
  return isImageConnected(slotIndex) ? `${base} 🟢 ${t('sm_connected', 'Connected')}` : base;
}

function isCollapsed(section: string): boolean {
  return Boolean((props.state.ui as Record<string, unknown>)[`collapsed_${section}`]);
}
function setCollapsed(section: string, collapsed: boolean) {
  (props.state.ui as Record<string, unknown>)[`collapsed_${section}`] = collapsed;
}
</script>

<template>
  <div class="fil-style-mixer-root">
    <!-- The text every style below is mixed onto — first, because it is what
         the node is applied *to*. Read-only while a wire drives it: anything
         typed here would be overwritten at queue time. -->
    <FilTextArea
      :ref="(el: unknown) => setFieldEl('base_prompt', el)"
      v-model="basePrompt"
      :rows="3"
      :linked="isLinked('base_prompt')"
      icon="pencil"
      :label="t('sm_base_prompt', 'Base prompt')"
      :placeholder="t('sm_base_prompt_ph', 'The prompt the styles are mixed onto…')"
      :title="isLinked('base_prompt')
        ? t('fld_linked_tt', 'Driven by the connected input — disconnect it to edit here.')
        : t('sm_base_prompt_tt', 'Base prompt to apply style mixing onto.')" />

    <!-- Fusion Mode -->
    <FilSection :title="t('sm_section_fusion', '🔀 Fusion Mode')"
      :model-value="isCollapsed('fusion')" @update:model-value="(v: boolean) => setCollapsed('fusion', v)" />
    <template v-if="!isCollapsed('fusion')">
      <FilSegmented
        v-model="fusionMode"
        :options="fusionModes"
        :option-labels="FUSION_LABELS"
        :title="t('sm_fusion_tt', 'Fast Stack just weights the descriptions. Smart Fusion asks the Vision LLM to synthesize one prompt.')"
      />
    </template>

    <!-- Style 1 -->
    <FilSection :title="t('sm_section_style_1', '🎨 Primary Style (Style 1)')"
      :model-value="isCollapsed('style1')" @update:model-value="(v: boolean) => setCollapsed('style1', v)" />
    <template v-if="!isCollapsed('style1')">
      <div class="fil-sm-style-row">
        <FilButton
          variant="full"
          :label="formatStyleLabel(style1, t('sm_style_1', 'Style 1'))"
          @click="picker1Open = true"
        />
        <button
          v-if="style1 && style1 !== '(None)' && style1 !== 'None'"
          type="button"
          class="fil-sm-clear-btn"
          :title="t('sm_clear_style', 'Clear style')"
          @click.stop="style1 = '(None)'"
        >
          ✕
        </button>
      </div>
      <FilSlider v-model="weight1" :min="0" :max="1" :step="0.05" inline-label :label="t('sm_style_1_weight', 'Style 1 Weight')" />
      <FilModal :open="picker1Open" :title="t('sm_pick_style_1', 'Select Primary Style 1')" width="680px" @update:open="(v) => (picker1Open = v)">
        <FilStylePicker :styles="getStyleOptions('style_1')" :model-value="style1" @select="(v) => { style1 = v; picker1Open = false; }" />
      </FilModal>
    </template>

    <!-- Style 2 -->
    <FilSection :title="t('sm_section_style_2', '🧪 Secondary Style (Style 2)')"
      :model-value="isCollapsed('style2')" @update:model-value="(v: boolean) => setCollapsed('style2', v)" />
    <template v-if="!isCollapsed('style2')">
      <div class="fil-sm-style-row">
        <FilButton
          variant="full"
          :label="formatStyleLabel(style2, t('sm_style_2', 'Style 2'))"
          @click="picker2Open = true"
        />
        <button
          v-if="style2 && style2 !== '(None)' && style2 !== 'None'"
          type="button"
          class="fil-sm-clear-btn"
          :title="t('sm_clear_style', 'Clear style')"
          @click.stop="style2 = '(None)'"
        >
          ✕
        </button>
      </div>
      <FilSlider v-model="weight2" :min="0" :max="1" :step="0.05" inline-label :label="t('sm_style_2_weight', 'Style 2 Weight')" />
      <FilModal :open="picker2Open" :title="t('sm_pick_style_2', 'Select Secondary Style 2')" width="680px" @update:open="(v) => (picker2Open = v)">
        <FilStylePicker :styles="getStyleOptions('style_2')" :model-value="style2" @select="(v) => { style2 = v; picker2Open = false; }" />
      </FilModal>
    </template>

    <!-- Style 3 -->
    <FilSection :title="t('sm_section_style_3', '✨ Tertiary Style (Style 3)')"
      :model-value="isCollapsed('style3')" @update:model-value="(v: boolean) => setCollapsed('style3', v)" />
    <template v-if="!isCollapsed('style3')">
      <div class="fil-sm-style-row">
        <FilButton
          variant="full"
          :label="formatStyleLabel(style3, t('sm_style_3', 'Style 3'))"
          @click="picker3Open = true"
        />
        <button
          v-if="style3 && style3 !== '(None)' && style3 !== 'None'"
          type="button"
          class="fil-sm-clear-btn"
          :title="t('sm_clear_style', 'Clear style')"
          @click.stop="style3 = '(None)'"
        >
          ✕
        </button>
      </div>
      <FilSlider v-model="weight3" :min="0" :max="1" :step="0.05" inline-label :label="t('sm_style_3_weight', 'Style 3 Weight')" />
      <FilModal :open="picker3Open" :title="t('sm_pick_style_3', 'Select Tertiary Style 3')" width="680px" @update:open="(v) => (picker3Open = v)">
        <FilStylePicker :styles="getStyleOptions('style_3')" :model-value="style3" @select="(v) => { style3 = v; picker3Open = false; }" />
      </FilModal>
    </template>

    <!-- Image Cards -->
    <FilSection :title="imageSectionTitle(1, 'sm_section_image_1', '🖼️ Image 1 Influence')"
      :model-value="isCollapsed('image1')" @update:model-value="(v: boolean) => setCollapsed('image1', v)" />
    <template v-if="!isCollapsed('image1')">
      <FilSlider v-model="imgWeight1" :min="0" :max="1" :step="0.05" inline-label :label="t('sm_image_1_weight', 'Image 1 Weight')" />
      <FilSelect v-if="fusionMode === 'Smart LLM Fusion (Gen-Mix)'" v-model="imgFocus1" :options="focusOptions" inline-label
        :label="t('sm_focus_label', 'Focus Aspect')" />
    </template>

    <FilSection :title="imageSectionTitle(2, 'sm_section_image_2', '🖼️ Image 2 Influence')"
      :model-value="isCollapsed('image2')" @update:model-value="(v: boolean) => setCollapsed('image2', v)" />
    <template v-if="!isCollapsed('image2')">
      <FilSlider v-model="imgWeight2" :min="0" :max="1" :step="0.05" inline-label :label="t('sm_image_2_weight', 'Image 2 Weight')" />
      <FilSelect v-if="fusionMode === 'Smart LLM Fusion (Gen-Mix)'" v-model="imgFocus2" :options="focusOptions" inline-label
        :label="t('sm_focus_label', 'Focus Aspect')" />
    </template>

    <template v-if="showImg3">
      <FilSection :title="imageSectionTitle(3, 'sm_section_image_3', '🖼️ Image 3 Influence')"
        :model-value="isCollapsed('image3')" @update:model-value="(v: boolean) => setCollapsed('image3', v)" />
      <template v-if="!isCollapsed('image3')">
        <FilSlider v-model="imgWeight3" :min="0" :max="1" :step="0.05" inline-label :label="t('sm_image_3_weight', 'Image 3 Weight')" />
        <FilSelect v-if="fusionMode === 'Smart LLM Fusion (Gen-Mix)'" v-model="imgFocus3" :options="focusOptions" inline-label
          :label="t('sm_focus_label', 'Focus Aspect')" />
      </template>
    </template>

    <template v-if="showImg4">
      <FilSection :title="imageSectionTitle(4, 'sm_section_image_4', '🖼️ Image 4 Influence')"
        :model-value="isCollapsed('image4')" @update:model-value="(v: boolean) => setCollapsed('image4', v)" />
      <template v-if="!isCollapsed('image4')">
        <FilSlider v-model="imgWeight4" :min="0" :max="1" :step="0.05" inline-label :label="t('sm_image_4_weight', 'Image 4 Weight')" />
        <FilSelect v-if="fusionMode === 'Smart LLM Fusion (Gen-Mix)'" v-model="imgFocus4" :options="focusOptions" inline-label
          :label="t('sm_focus_label', 'Focus Aspect')" />
      </template>
    </template>
  </div>
</template>

<style scoped>
.fil-style-mixer-root {
  width: 100%; box-sizing: border-box; min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--fil-node-gap);
  padding: var(--fil-node-pad);
  color: var(--fil-text);
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.fil-sm-style-row {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
}
.fil-sm-style-row :deep(.fil-w-btn) {
  flex: 1;
}
.fil-sm-clear-btn {
  height: var(--fil-control-h);
  padding: 0 10px;
  border-radius: var(--fil-field-radius);
  border: 1px solid var(--fil-border);
  background: var(--fil-surface-2);
  color: var(--fil-danger);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.12s ease;
  flex-shrink: 0;
}
.fil-sm-clear-btn:hover {
  background: color-mix(in srgb, var(--fil-danger) 20%, transparent);
  border-color: var(--fil-danger);
}
</style>
