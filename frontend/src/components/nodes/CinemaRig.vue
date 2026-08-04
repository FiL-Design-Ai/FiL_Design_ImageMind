<script setup lang="ts">
/**
 * FiLCinemaRig — camera-department axes that assemble a cinematic shot prompt
 * (mirrors nodes/node_cinema_rig.py).
 *
 * The five axes are the rig; the scene rides through them untouched. In
 * Reshoot mode the scene field is inert — the reference image carries the
 * scene — so it dims instead of pretending to matter.
 */
import { computed } from "vue";
import { FilTextArea, FilSegmented, FilSelect, FilToggle } from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import { findFilWidget } from "@/nodes2/util";
import { useWidgetSockets } from "@/composables/useWidgetSockets";
import { CINEMA_RIG_SOCKET_INPUTS } from "@/nodes2/nodes/cinema_rig";
import type { FilNodeState } from "@/nodes2/filState";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

const { setFieldEl, isLinked } = useWidgetSockets(props.state, CINEMA_RIG_SOCKET_INPUTS);

function stringField(name: string, fallback: string) {
  return computed({
    get: () => String(props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback),
    set: (v: string) => { props.state.nodeState[name] = v; },
  });
}

function boolField(name: string, fallback: boolean) {
  return computed<"ON" | "OFF">({
    get: () => ((props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback) ? "ON" : "OFF"),
    set: (v: "ON" | "OFF") => { props.state.nodeState[name] = v === "ON"; },
  });
}

function comboOptions(name: string, fallback: string[]): string[] {
  const node = props.state.node;
  const w = node ? findFilWidget(node, name) : null;
  const vals = (w as { options?: { values?: unknown } } | null)?.options?.values;
  return Array.isArray(vals) && vals.length ? (vals as string[]) : fallback;
}

const scenePrompt = stringField("scene_prompt", "");
const mode = stringField("mode", "Original Shot");
const camera = stringField("camera", "RED V-RAPTOR XL");
const lens = stringField("lens", "Helios 44-2 (Vintage)");
const focalLength = stringField("focal_length", "50mm (Human Eye)");
const aperture = stringField("aperture", "f/11 (Deep Focus)");
const colorGrading = stringField("color_grading", "Teal & Orange (Blockbuster)");
const enableGrading = boolField("enable_grading", true);
const polishMode = stringField("polish_mode", "Deterministic (Fast)");

const modeOptions = computed(() => comboOptions("mode", ["Original Shot", "Reshoot"]));
const cameraOptions = computed(() => comboOptions("camera", []));
const lensOptions = computed(() => comboOptions("lens", []));
const focalOptions = computed(() => comboOptions("focal_length", []));
const apertureOptions = computed(() => comboOptions("aperture", []));
const gradingOptions = computed(() => comboOptions("color_grading", []));
const polishOptions = computed(() => comboOptions("polish_mode", ["Deterministic (Fast)", "LLM Polish (Gen-Rig)"]));

// Backend values stay verbatim; only the shown text is translated. Computed so
// the async dictionary swap still re-renders (see StyleMixer for the reason).
const MODE_LABELS = computed<Record<string, string>>(() => ({
  "Original Shot": t("cr_mode_original", "🎬 Original Shot"),
  "Reshoot": t("cr_mode_reshoot", "🔁 Reshoot"),
}));
const POLISH_LABELS = computed<Record<string, string>>(() => ({
  "Deterministic (Fast)": t("cr_polish_fast", "⚡ Deterministic"),
  "LLM Polish (Gen-Rig)": t("cr_polish_llm", "🧠 LLM Polish"),
}));

const isReshoot = computed(() => mode.value === "Reshoot");
const linkedTip = (name: string, own: string) =>
  isLinked(name) ? t("fld_linked_tt", "Driven by the connected input — disconnect it to edit here.") : own;
</script>

<template>
  <div class="fil-cnr-root">
    <FilSegmented v-model="mode" :options="modeOptions" :option-labels="MODE_LABELS"
      :label="t('crp_mode', '🎬 Mode')"
      :title="t('cr_mode_tt', 'Original Shot builds a new frame around the scene. Reshoot locks a reference image and only changes the camera treatment.')" />

    <FilTextArea :ref="(el: unknown) => setFieldEl('scene_prompt', el)"
      v-model="scenePrompt" :rows="3" :linked="isLinked('scene_prompt')"
      :disabled="isReshoot"
      :label="t('crp_scene', '📝 Scene')"
      :placeholder="t('crp_scene_placeholder', 'What is happening in the frame…')"
      :title="isReshoot
        ? t('cr_scene_reshoot_tt', 'Reshoot reads the scene from the reference image — this text is ignored.')
        : linkedTip('scene_prompt', t('cr_scene_tt', 'What the rig wraps. The camera treatment never touches it.'))" />

    <FilSelect v-model="camera" :options="cameraOptions"
      :label="t('crp_camera', '📷 Camera')"
      :title="t('cr_camera_tt', 'Camera body. Film bodies wrap the shot in analog stock language, digital in sensor language.')" />

    <FilSelect v-model="lens" :options="lensOptions"
      :label="t('crp_lens', '🔭 Lens')"
      :title="t('cr_lens_tt', 'Lens glass — spherical or anamorphic optical character.')" />

    <FilSelect v-model="focalLength" :options="focalOptions"
      :label="t('crp_focal', '📏 Focal length')"
      :title="t('cr_focal_tt', 'Focal length, from ultra-wide environmental pressure to telephoto compression.')" />

    <FilSelect v-model="aperture" :options="apertureOptions"
      :label="t('crp_aperture', '⭕ Aperture')"
      :title="t('cr_aperture_tt', 'Aperture stop — how much of the frame holds focus.')" />

    <FilToggle v-model="enableGrading"
      :label="t('crp_grade_on', '🎨 Color grade')"
      :title="t('cr_grade_on_tt', 'Apply a finish over the frame. Off keeps the rig to hardware and medium only.')" />

    <FilSelect v-if="enableGrading === 'ON'" v-model="colorGrading" :options="gradingOptions"
      :label="t('crp_grade', 'Grade')"
      :title="t('cr_grade_tt', 'The color grade / finish applied over the frame.')" />

    <FilSegmented v-model="polishMode" :options="polishOptions" :option-labels="POLISH_LABELS"
      :label="t('crp_polish', '✨ Polish')"
      :title="t('cr_polish_tt', 'Deterministic is pure string assembly. LLM Polish rewrites the rig into fluent prose through the provider model.')" />
  </div>
</template>

<style scoped>
/* Container surface comes from the shared `.fil-node-shell [class$="-root"]`
 * rule in styles/brand.ts — keep only layout here. */
.fil-cnr-root { width: 100%; box-sizing: border-box; min-width: 0; display: flex; flex-direction: column; gap: var(--fil-node-gap); padding: var(--fil-node-pad);
  color: var(--fil-text); font-family: ui-sans-serif, system-ui, sans-serif; }
</style>
