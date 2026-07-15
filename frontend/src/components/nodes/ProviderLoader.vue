<script setup lang="ts">
/**
 * FiLProviderLoader — provider + model runtime configuration.
 * State lives in `state.nodeState = { provider, model, temperature, ... }`
 * and survives load/save through `addDOMWidget` getValue/setValue.
 */
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import FilComboBox, { type FilComboOption } from "@/components/widgets/FilComboBox.vue";
import FilButton from "@/components/widgets/FilButton.vue";
import FilSlider from "@/components/widgets/FilSlider.vue";
import FilInfo from "@/components/widgets/FilInfo.vue";
import { useProviderStore, PROVIDER_LIST } from "@/stores/providerStore";
import { PROVIDER_LABEL, PROVIDER_ICON } from "@/composables/providerMeta";
import { toast } from "@/stores/toastStore";
import { useI18n } from "@/composables/useI18n";
import type { FilNodeState } from "@/nodes2/filState";
import { findFilWidget } from "@/nodes2/util";

const props = defineProps<{ state: FilNodeState }>();
const store = useProviderStore();
const { t } = useI18n();

const REFRESH_INTERVAL = 300_000; // 5 minutes
const modelFilter = ref("");

function field<T>(name: string, fallback: T): { get: () => T; set: (v: T) => void } {
  return {
    get: () => (props.state.nodeState[name] as T) ?? fallback,
    set: (v) => { props.state.nodeState[name] = v; },
  };
}

const provider = computed<string>(() => String(field("provider", "ollama").get()));
function setProvider(v: string) {
  field("provider", "ollama").set(v);
  modelFilter.value = "";
  // Show cached models immediately if available, refresh in background
  const cached = store.modelsFor(v);
  if (cached.length) {
    setModel(cached[0]);
    updateWidgetOptions();
    void store.loadModels(v); // background refresh (no force)
  } else {
    state.nodeState.model = "(loading...)";
    void reload();
  }
}

const model = computed<string>(() => String(field("model", "(loading...)").get()));
function setModel(v: string) { field("model", "(loading...)").set(v); }

const temperature = computed(() => Number(field("temperature", 0.7).get()));
const maxTokens = computed(() => Number(field("max_tokens", 0).get()));
const rateLimit = computed(() => Number(field("rate_limit_ms", 100).get()));
const maxImageSide = computed(() => Number(field("max_image_side", 1024).get()));
const state = props.state;

const modelOptions = computed<string[]>(() => {
  const list = store.modelsFor(provider.value);
  return list.length ? list : ["(no models)"];
});

const hasRealModels = computed(() => {
  const list = store.modelsFor(provider.value);
  return list.length > 0;
});

const filteredModelOptions = computed(() => {
  const all = modelOptions.value;
  if (!modelFilter.value || !hasRealModels.value) return all;
  const q = modelFilter.value.toLowerCase();
  return all.filter((m) => m.toLowerCase().includes(q));
});

const modelCountLabel = computed(() => {
  if (!hasRealModels.value) return "";
  const total = store.modelsFor(provider.value).length;
  const shown = filteredModelOptions.value.length;
  return shown === total ? `${total}` : `${shown} of ${total}`;
});

const providerComboOptions = computed<FilComboOption[]>(() =>
  PROVIDER_LIST.map((p) => ({ value: p, label: PROVIDER_LABEL[p] ?? p, icon: PROVIDER_ICON[p] })),
);

const modelComboOptions = computed<FilComboOption[]>(() => {
  const visionModels = store.visionModelsFor(provider.value);
  return filteredModelOptions.value.map((m) => ({
    value: m,
    badge: visionModels.includes(m) ? "👁" : undefined,
  }));
});

const loading = computed(() => store.isLoading(provider.value));
const probe = computed(() => store.probeState[provider.value]);
const ageLabel = computed(() => store.cachedAgeLabel(provider.value));

let refreshTimer: ReturnType<typeof setInterval> | null = null;

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

async function reload() {
  try {
    await store.loadModels(provider.value, true);
    const list = store.modelsFor(provider.value);
    setModel(list[0] ?? "(no models)");
    updateWidgetOptions();
  } catch (err) {
    toast.error(err instanceof Error ? err.message : String(err));
  }
}

onMounted(async () => {
  void store.loadDisplayNames();
  // Mirrors setProvider()'s cold/warm branching: the store is a page-wide
  // singleton, so another FiLProviderLoader node (or an earlier load this
  // session) may have already cached this provider's models. Previously
  // this only synced `model` off the placeholder in the cold-cache branch,
  // so a node mounting into an already-warm cache stayed stuck showing
  // "(loading...)" — a value with no matching <option>, rendering blank —
  // even though the store had a full model list the whole time.
  const cached = store.modelsFor(provider.value);
  if (cached.length) {
    // Only replace the "(loading...)" placeholder — never overwrite a model
    // value restored from a saved workflow just because it isn't in this
    // (possibly still-cold) cache yet. A stale/unavailable saved model is a
    // backend concern (surfaced via execution errors), not something to
    // silently clobber here.
    if (model.value === "(loading...)") {
      setModel(cached[0] ?? "(no models)");
    }
    updateWidgetOptions();
    void store.loadModels(provider.value); // background refresh, respects TTL
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
  // Periodic auto-refresh while the node is on the graph
  refreshTimer = setInterval(() => {
    void store.loadModels(provider.value, true);
  }, REFRESH_INTERVAL);
});

onUnmounted(() => {
  if (refreshTimer) clearInterval(refreshTimer);
});
</script>

<template>
  <div class="fil-provider-root">
    <label class="fil-w-label">{{ t('lbl_provider', '🔌 Provider') }}</label>
    <FilComboBox :options="providerComboOptions" :model-value="provider" :title="t('tt_provider', 'LLM provider to use — local (Ollama, LM Studio) or cloud.')"
      @update:model-value="setProvider" />
    <label class="fil-w-label">{{ t('lbl_model', '🧠 Model') }}</label>
    <div class="fil-provider-row">
      <FilComboBox :options="modelComboOptions" :model-value="model" :title="t('tt_model', 'Choose which model to use. If the list is empty, refresh it or check the provider account.')"
        @update:model-value="setModel" />
      <FilButton label="↻" :title="t('tt_refresh', 'Reload the model list. Use after adding a new model or API key.')" :disabled="loading || state.ui.refreshing === true" @click="reload" />
    </div>
    <div v-if="hasRealModels" class="fil-model-filter-bar">
      <div class="fil-model-filter-wrap">
        <input v-model="modelFilter" type="text" class="fil-model-filter" :placeholder="t('prov_search_models', 'Search models…')" />
      </div>
      <span class="fil-model-count">{{ modelCountLabel }}</span>
    </div>
    <FilInfo v-if="loading" :text="t('prov_loading_models', 'Loading models…')" />
    <FilInfo v-else-if="probe && probe.status && probe.status !== 'available'" :err="true" :text="probe.message || probe.status" />
    <FilInfo v-else-if="ageLabel" :text="`${t('prov_models_updated', 'Models updated')}: ${ageLabel}`" />
    <FilSlider :model-value="temperature" :min="0" :max="2" :step="0.05" :label="t('lbl_temperature', '🌡️ Temperature')"
      :title="t('tt_temperature', 'Sampling temperature — higher is more creative, lower is more deterministic.')"
      @update:model-value="(v: number) => (state.nodeState.temperature = v)" />
    <FilSlider :model-value="maxTokens" :min="0" :max="65536" :step="1" :label="t('lbl_max_tokens', '🔢 Max tokens (0 = no limit)')"
      :title="t('tt_provider_max_tokens', 'Maximum tokens in the response. 0 = provider default (no explicit limit).')"
      @update:model-value="(v: number) => (state.nodeState.max_tokens = v)" />
    <FilSlider :model-value="rateLimit" :min="0" :max="5000" :step="10" :label="t('lbl_rate_limit', '⏱️ Rate limit (ms)')"
      :title="t('tt_rate_limit', 'Minimum delay between requests to this provider, to avoid rate limiting.')"
      @update:model-value="(v: number) => (state.nodeState.rate_limit_ms = v)" />
    <FilSlider :model-value="maxImageSide" :min="128" :max="4096" :step="64" :label="t('lbl_max_image_side', '🖼️ Max image side')"
      :title="t('tt_max_image_side', 'Images are downscaled so their longest side does not exceed this value.')"
      @update:model-value="(v: number) => (state.nodeState.max_image_side = v)" />
  </div>
</template>

<style scoped>
/* Container surface comes from the shared `.fil-node-shell [class$="-root"]`
 * rule in styles/brand.ts — keep only layout here. */
.fil-provider-root {
  display: flex; flex-direction: column; gap: 6px; padding: 8px;
  color: var(--fil-text, #e8edf3); font-family: ui-sans-serif, system-ui, sans-serif;
  min-width: 0;
}
.fil-w-label { font-size: 10px; color: var(--fil-muted, rgba(255,255,255,0.55)); margin-top: 2px; }
.fil-provider-row {
  display: flex; gap: 4px; align-items: stretch; min-width: 0;
}
.fil-provider-row :deep(.fil-combo) { flex: 1; min-width: 0; }
.fil-model-filter-bar { display: flex; align-items: center; gap: 4px; min-width: 0; }
.fil-model-filter-wrap { flex: 1; min-width: 0; }
.fil-model-filter {
  width: 100%; box-sizing: border-box; height: 24px;
  background: var(--fil-glass-bg); border: 1px solid var(--fil-glass-border); border-radius: var(--fil-field-radius);
  padding: 2px 6px; color: var(--fil-text, #e8edf3); font-family: inherit; font-size: 11px; outline: none;
}
.fil-model-filter:focus { border-color: var(--fil-accent); }
.fil-model-count { font-size: 9px; color: var(--fil-muted, rgba(255,255,255,0.45)); white-space: nowrap; flex-shrink: 0; }
</style>