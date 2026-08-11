<script setup lang="ts">
/**
 * FiLProviderLoader — provider + model runtime configuration.
 * State lives in `state.nodeState = { provider, model, temperature, ... }`
 * and survives load/save through `addDOMWidget` getValue/setValue.
 *
 * Uses ProviderModelPicker modal for easy provider & model browsing.
 */
import { computed, onMounted, ref, watch } from "vue";
import { FilSlider, FilInfo, FilIcon, FilToggle } from "@/components/widgets";
import ProviderModelPicker from "@/components/nodes/ProviderModelPicker.vue";
import { useProviderStore } from "@/stores/providerStore";
import { PROVIDER_LABEL, PROVIDER_ICON, LOCAL_PROVIDERS } from "@/composables/providerMeta";
import { toast } from "@/stores/toastStore";
import { useI18n } from "@/composables/useI18n";
import type { FilNodeState } from "@/nodes2/filState";
import { findFilWidget } from "@/nodes2/util";

const props = defineProps<{ state: FilNodeState }>();
const store = useProviderStore();
const { t } = useI18n();

const pickerOpen = ref(false);

function field<T>(name: string, fallback: T): { get: () => T; set: (v: T) => void } {
  return {
    get: () => (props.state.nodeState[name] as T) ?? fallback,
    set: (v) => { props.state.nodeState[name] = v; },
  };
}

const provider = computed<string>(() => String(field("provider", "ollama").get()));
function setProvider(v: string) {
  field("provider", "ollama").set(v);
  updateWidgetOptions();
}

const model = computed<string>(() => String(field("model", "(loading...)").get()));
function setModel(v: string) {
  field("model", "(loading...)").set(v);
  updateWidgetOptions();
}

const temperature = computed(() => Number(field("temperature", 0.7).get()));
const maxTokens = computed(() => Number(field("max_tokens", 0).get()));
const rateLimit = computed(() => Number(field("rate_limit_ms", 100).get()));
const maxImageSide = computed(() => Number(field("max_image_side", 1024).get()));
const state = props.state;

// The unload switch only means something to the local servers — they are the
// providers that hold a model in the user's own memory — so the row hides
// itself for every cloud provider instead of sitting there inert.
const isLocalProvider = computed(() => LOCAL_PROVIDERS.has(provider.value));
const unloadLlm = computed<"ON" | "OFF">({
  get: () => (field("unload_llm", false).get() ? "ON" : "OFF"),
  set: (v: "ON" | "OFF") => field("unload_llm", false).set(v === "ON"),
});

const loading = computed(() => store.isLoading(provider.value));
const probe = computed(() => store.probeState[provider.value]);
const ageLabel = computed(() => store.cachedAgeLabel(provider.value, t));

// Restore from a loaded workflow (setValue replaces nodeState).
watch(() => props.state.nodeState, () => {}, { deep: true });

function updateWidgetOptions() {
  const node = props.state.node;
  if (!node) return;
  const modelWidget = findFilWidget(node, "model");
  if (!modelWidget) return;
  const models = store.modelsFor(provider.value);
  const options = models.length ? models : ["(no models)"];
  if (modelWidget.options) {
    modelWidget.options.values = options;
  }
}

function handlePickerSelect(payload: { provider: string; model: string }) {
  setProvider(payload.provider);
  setModel(payload.model);
}

onMounted(async () => {
  void store.loadDisplayNames();
  const cached = store.modelsFor(provider.value);
  if (cached.length) {
    if (model.value === "(loading...)") {
      setModel(cached[0] ?? "(no models)");
    }
    updateWidgetOptions();
    void store.loadModels(provider.value);
  } else {
    try {
      await store.loadModels(provider.value);
      const list = store.modelsFor(provider.value);
      if (model.value === "(loading...)") {
        setModel(list[0] ?? "(no models)");
      }
      updateWidgetOptions();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : String(err));
    }
  }
});

// No background refresh timer here any more. It re-fetched the model list every
// five minutes with `force: true` — bypassing both the store's TTL and the
// backend's cache — once PER NODE, for as long as the workflow was open, and
// whether or not the tab was even in the foreground. Three Provider Loaders on
// one provider meant three calls out to it every five minutes to answer a
// question nobody had asked; on a metered or rate-limited provider that is a
// bill and a 429 for nothing.
//
// What actually needs a fresh list already asks for one: opening the picker
// loads it, its ↻ button forces it, and saving credentials refreshes it. The
// store's five-minute TTL covers everything else.
</script>

<template>
  <div class="fil-provider-root">
    <!-- Main trigger button opening the full-screen modal picker -->
    <button type="button" class="picker-trigger-btn" @click="pickerOpen = true">
      <div class="trigger-header">
        <div class="provider-badge">
          <FilIcon :name="PROVIDER_ICON[provider]" :size="16" />
          <span class="provider-title">{{ PROVIDER_LABEL[provider] ?? provider }}</span>
        </div>
        <span class="open-icon">⚙️ Choose</span>
      </div>
      <div class="trigger-model">
        <span class="model-label">🧠 Model:</span>
        <span class="model-name" :title="model">{{ model }}</span>
      </div>
    </button>

    <FilInfo v-if="loading" :text="t('prov_loading_models', 'Loading models…')" />
    <FilInfo v-else-if="probe && probe.status && probe.status !== 'available'" :err="true" :text="probe.message || probe.status" />
    <FilInfo v-else-if="ageLabel" :text="`${t('prov_models_updated', 'Models updated')}: ${ageLabel}`" />

    <FilToggle v-if="isLocalProvider" :model-value="unloadLlm" :label="t('lbl_unload_llm', '⏏️ Unload LLM after prompt')"
      :title="t('tt_unload_llm', 'Local servers only (Ollama, LM Studio): unload the model from memory right after the prompt is generated, freeing VRAM for the image generation.')"
      @update:model-value="(v: 'ON' | 'OFF') => (unloadLlm = v)" />
    <FilSlider :model-value="temperature" :min="0" :max="2" :step="0.05" :label="t('lbl_temperature', '🌡️ Temperature')" inline-label
      :title="t('tt_temperature', 'Sampling temperature — higher is more creative, lower is more deterministic.')"
      @update:model-value="(v: number) => (state.nodeState.temperature = v)" />
    <FilSlider :model-value="maxTokens" :min="0" :max="65536" :step="1" :label="t('lbl_max_tokens', '🔢 Max tokens')" inline-label
      :title="t('tt_provider_max_tokens', 'Maximum tokens in the response. 0 = provider default (no explicit limit).')"
      @update:model-value="(v: number) => (state.nodeState.max_tokens = v)" />
    <FilSlider :model-value="rateLimit" :min="0" :max="5000" :step="10" :label="t('lbl_rate_limit', '⏱️ Rate limit')" inline-label
      :title="t('tt_rate_limit', 'Minimum delay between requests to this provider, to avoid rate limiting.')"
      @update:model-value="(v: number) => (state.nodeState.rate_limit_ms = v)" />
    <FilSlider :model-value="maxImageSide" :min="128" :max="4096" :step="64" :label="t('lbl_max_image_side', '🖼️ Max image side')" inline-label
      :title="t('tt_max_image_side', 'Images are downscaled so their longest side does not exceed this value.')"
      @update:model-value="(v: number) => (state.nodeState.max_image_side = v)" />

    <!-- Fullscreen Provider & Model Modal Picker -->
    <ProviderModelPicker
      v-model:open="pickerOpen"
      :provider="provider"
      :model="model"
      @select="handlePickerSelect"
    />
  </div>
</template>

<style scoped>
.fil-provider-root { width: 100%; box-sizing: border-box; min-width: 0;
  display: flex; flex-direction: column; gap: var(--fil-node-gap); padding: var(--fil-node-pad);
  color: var(--fil-text); font-family: ui-sans-serif, system-ui, sans-serif;
  min-width: 0;
}

.picker-trigger-btn {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  box-sizing: border-box;
  padding: 8px 10px;
  background: var(--fil-panel-alt);
  border: 1px solid var(--fil-border);
  border-radius: var(--fil-field-radius);
  color: var(--fil-text);
  cursor: pointer;
  text-align: left;
  transition: border-color 0.15s ease, background 0.15s ease;
  outline: none;
}

.picker-trigger-btn:hover {
  border-color: var(--fil-accent);
  background: var(--fil-pill-bg);
}

.picker-trigger-btn:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: 1px;
  border-color: var(--fil-accent);
}

.trigger-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.provider-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 13px;
  color: var(--fil-accent-text);
}

.open-icon {
  font-size: 11px;
  background: var(--fil-pill-bg);
  padding: 2px 6px;
  border-radius: 4px;
  color: var(--fil-text);
}

.trigger-model {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  min-width: 0;
}

.model-label {
  color: var(--fil-muted);
  flex-shrink: 0;
}

.model-name {
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
}
</style>
