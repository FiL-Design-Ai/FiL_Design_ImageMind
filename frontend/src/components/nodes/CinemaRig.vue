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
const setupMode = stringField("setup_mode", "Director Preset");
const camera = stringField("camera", "RED V-RAPTOR XL");
const lens = stringField("lens", "Helios 44-2 (Vintage)");
const focalLength = stringField("focal_length", "50mm (Human Eye)");
const aperture = stringField("aperture", "f/11 (Deep Focus)");
const cameraAngle = stringField("camera_angle", "Auto / Neutral");
const shotFraming = stringField("shot_framing", "Auto / Neutral");
const cameraMovement = stringField("camera_movement", "Static (Tripod Locked)");
const lightingSetup = stringField("lighting_setup", "Auto / Natural");
const opticsFilter = stringField("optics_filter", "None / Pure Optic");
const directorPreset = stringField("director_preset", "Custom Rig");
const colorGrading = stringField("color_grading", "Teal & Orange (Blockbuster)");
const enableGrading = boolField("enable_grading", true);
const polishMode = stringField("polish_mode", "Deterministic (Fast)");

const modeOptions = computed(() => comboOptions("mode", ["Original Shot", "Reshoot"]));
const setupOptions = computed(() => comboOptions("setup_mode", ["Director Preset", "Custom Hardware"]));
const cameraOptions = computed(() => comboOptions("camera", []));
const lensOptions = computed(() => comboOptions("lens", []));
const focalOptions = computed(() => comboOptions("focal_length", []));
const apertureOptions = computed(() => comboOptions("aperture", []));
const angleOptions = computed(() => comboOptions("camera_angle", []));
const framingOptions = computed(() => comboOptions("shot_framing", []));
const movementOptions = computed(() => comboOptions("camera_movement", []));
const lightingOptions = computed(() => comboOptions("lighting_setup", []));
const opticsOptions = computed(() => comboOptions("optics_filter", []));
const directorOptions = computed(() => comboOptions("director_preset", []));
const gradingOptions = computed(() => comboOptions("color_grading", []));
const polishOptions = computed(() => comboOptions("polish_mode", ["Deterministic (Fast)", "LLM Polish (Gen-Rig)"]));

// Backend values stay verbatim; only the shown text is translated. Computed so
// the async dictionary swap still re-renders (see StyleMixer for the reason).
// No emoji in these: the row already carries an icon, and at node width the
// extra glyph pushed "Original Shot" and "Deterministic" into an ellipsis.
const MODE_LABELS = computed<Record<string, string>>(() => ({
  "Original Shot": t("cr_mode_original", "Original Shot"),
  "Reshoot": t("cr_mode_reshoot", "Reshoot"),
}));
// Shown text only — the keys stay the verbatim values `node_cinema_rig.py`
// matches on. Deliberately one word each: at the 300px node minimum the pill
// splits into ~95px halves, and "Director Preset" / "Custom Hardware" both
// ellipsised there (measured live). The pair reads fine short, and the row's
// tooltip carries the full explanation of each mode.
const SETUP_LABELS = computed<Record<string, string>>(() => ({
  "Director Preset": t("cr_setup_preset", "Director"),
  "Custom Hardware": t("cr_setup_custom", "Manual"),
}));
const POLISH_LABELS = computed<Record<string, string>>(() => ({
  "Deterministic (Fast)": t("cr_polish_fast", "Deterministic"),
  "LLM Polish (Gen-Rig)": t("cr_polish_llm", "LLM Polish"),
}));

const isReshoot = computed(() => mode.value === "Reshoot");
const isCustomSetup = computed(() => setupMode.value === "Custom Hardware");
const linkedTip = (name: string, own: string) =>
  isLinked(name) ? t("fld_linked_tt", "Driven by the connected input — disconnect it to edit here.") : own;

const DIRECTOR_SIGNATURES: Record<string, string> = {
  "Roger Deakins (Volumetric ARRI)": "IMAX / ARRI 65 • Volumetric Light • Pristine Composition",
  "Christopher Nolan (IMAX 70mm)": "IMAX 70mm • Tactile Analog • High Dramatic Realism",
  "Wong Kar-wai (Neon & Motion)": "Step-Printed Blur • Drenched Neon • Nostalgic Glow",
  "Denis Villeneuve (Monolithic Sci-Fi)": "Monolithic Brutalism • Atmospheric Fog • Austere Palette",
  "Quentin Tarantino (Punchy 35mm)": "35mm Technicolor • Low-Angle Trunk Shot • Vibrant Punch",
};

const directorBadgeText = computed(() => DIRECTOR_SIGNATURES[directorPreset.value] || "");
</script>

<template>
  <div class="fil-cnr-root">
    <FilSegmented v-model="mode" :options="modeOptions" :option-labels="MODE_LABELS"
      :label="t('crp_mode', '🎬 Mode')"
      :title="t('cr_mode_tt', 'Original Shot builds a new frame around the scene. Reshoot locks a reference image and only changes the camera treatment.')" />

    <FilSegmented v-model="setupMode" :options="setupOptions" :option-labels="SETUP_LABELS"
      :label="t('crp_setup_mode', '⚙️ Setup')"
      :title="t('cr_setup_mode_tt', 'Director Preset mode relies on iconic director visual signatures without manual hardware clutter. Custom Hardware mode enables full manual control of all camera, lens, focal, aperture, and optics controls.')" />

    <!-- No label: the placeholder already says what the box is for. Same
         reason as Image Decomposer's prompt — and it puts FilTextArea on its
         single-root path, where `$el` IS the textarea `setFieldEl` anchors
         the socket dot to. -->
    <FilTextArea :ref="(el: unknown) => setFieldEl('scene_prompt', el)"
      v-model="scenePrompt" :rows="3" :linked="isLinked('scene_prompt')"
      :disabled="isReshoot"
      :placeholder="t('crp_scene_placeholder', 'What is happening in the frame…')"
      :title="isReshoot
        ? t('cr_scene_reshoot_tt', 'Reshoot reads the scene from the reference image — this text is ignored.')
        : linkedTip('scene_prompt', t('cr_scene_tt', 'What the rig wraps. The camera treatment never touches it.'))" />

    <FilSelect v-model="directorPreset" :options="directorOptions" inline-label
      :label="t('crp_director', '🏆 Director')"
      :title="t('cr_director_tt', 'Signature director / cinematographer visual style.')" />

    <div v-if="directorBadgeText" class="fil-cr-director-badge" :title="t('cr_director_sig_tt', 'Director visual signature highlights')">
      ✨ {{ directorBadgeText }}
    </div>

    <template v-if="isCustomSetup">
      <FilSelect v-model="camera" :options="cameraOptions" inline-label
        :label="t('crp_camera', '📷 Camera')"
        :title="t('cr_camera_tt', 'Camera body. Film bodies wrap the shot in analog stock language, digital in sensor language.')" />

      <FilSelect v-model="lens" :options="lensOptions" inline-label
        :label="t('crp_lens', '🔭 Lens')"
        :title="t('cr_lens_tt', 'Lens glass — spherical or anamorphic optical character.')" />

      <FilSelect v-model="focalLength" :options="focalOptions" inline-label
        :label="t('crp_focal', '📏 Focal length')"
        :title="t('cr_focal_tt', 'Focal length, from ultra-wide environmental pressure to telephoto compression.')" />

      <FilSelect v-model="aperture" :options="apertureOptions" inline-label
        :label="t('crp_aperture', '⭕ Aperture')"
        :title="t('cr_aperture_tt', 'Aperture stop — how much of the frame holds focus.')" />

      <FilSelect v-model="cameraAngle" :options="angleOptions" inline-label
        :label="t('crp_angle', '📐 Angle')"
        :title="t('cr_angle_tt', 'Camera angle and elevation relative to the subject.')" />

      <FilSelect v-model="shotFraming" :options="framingOptions" inline-label
        :label="t('crp_framing', '🖼️ Framing')"
        :title="t('cr_framing_tt', 'Shot distance and framing scale.')" />

      <FilSelect v-model="cameraMovement" :options="movementOptions" inline-label
        :label="t('crp_movement', '🎥 Movement')"
        :title="t('cr_movement_tt', 'Camera movement and rig dynamics.')" />

      <FilSelect v-model="lightingSetup" :options="lightingOptions" inline-label
        :label="t('crp_lighting', '💡 Lighting')"
        :title="t('cr_lighting_tt', 'Lighting architecture and atmospheric condition.')" />

      <FilSelect v-model="opticsFilter" :options="opticsOptions" inline-label
        :label="t('crp_optics', '🎞️ Optics Filter')"
        :title="t('cr_optics_tt', 'Lens filter, flares, or film grain texture.')" />
    </template>

    <FilToggle v-model="enableGrading"
      :label="t('crp_grade_on', '🎨 Color grade')"
      :title="t('cr_grade_on_tt', 'Apply a finish over the frame. Off keeps the rig to hardware and medium only.')" />

    <FilSelect v-if="enableGrading === 'ON'" v-model="colorGrading" :options="gradingOptions" inline-label
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

.fil-cr-director-badge {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 6px;
  background: color-mix(in srgb, var(--fil-accent) 15%, transparent);
  color: var(--fil-accent-text);
  border: 1px solid color-mix(in srgb, var(--fil-accent) 30%, transparent);
  line-height: 1.3;
}
</style>
