<script setup lang="ts">
import { computed, ref, watch } from "vue";
import FilModal from "@/components/widgets/FilModal.vue";
import FilIcon from "@/components/widgets/FilIcon.vue";
import FilButton from "@/components/widgets/FilButton.vue";
import FilInfo from "@/components/widgets/FilInfo.vue";
import FilSegmented from "@/components/widgets/FilSegmented.vue";
import { useProviderStore, PROVIDER_LIST } from "@/stores/providerStore";
import { PROVIDER_LABEL, PROVIDER_ICON } from "@/composables/providerMeta";
import { useI18n } from "@/composables/useI18n";
import { toast } from "@/stores/toastStore";

const props = withDefaults(
  defineProps<{
    open: boolean;
    provider: string;
    model: string;
  }>(),
  { open: false, provider: "ollama", model: "" }
);

const emit = defineEmits<{
  "update:open": [value: boolean];
  select: [payload: { provider: string; model: string }];
}>();

const store = useProviderStore();
const { t } = useI18n();

const selectedProvider = ref<string>(props.provider);
const selectedModel = ref<string>(props.model);
const searchQuery = ref<string>("");
const typeFilter = ref<"all" | "vision" | "text">("all");
const tierFilter = ref<"all" | "free" | "paid" | "local">("all");

const STORAGE_KEY_VIEW = "fil_model_picker_view_mode";
const viewMode = ref<"list" | "grid">(
  (localStorage.getItem(STORAGE_KEY_VIEW) as "list" | "grid") || "list"
);

function setViewMode(mode: "list" | "grid") {
  viewMode.value = mode;
  try {
    localStorage.setItem(STORAGE_KEY_VIEW, mode);
  } catch {
    // ignore storage quota/security restriction
  }
}

// Filter option sets + labels for the FilSegmented controls. Tier options are
// provider-dependent: local providers (ollama/lmstudio) only ever have "local"
// models, remote ones split into free/paid.
const TYPE_OPTIONS = ["all", "vision", "text"] as const;
const TYPE_LABELS: Record<string, string> = {
  all: t("pmp_all_types", "All Types"),
  vision: t("pmp_tag_vision_opt", "👁 Vision"),
  text: t("pmp_tag_text_opt", "📝 Text"),
};
const TIER_LABELS: Record<string, string> = {
  all: t("pmp_all_tiers", "All Tiers"),
  local: t("pmp_tier_local", "💻 Local"),
  free: t("pmp_tier_free", "🆓 Free"),
  paid: t("pmp_tier_paid", "💎 Paid"),
};
const VIEW_OPTIONS = ["list", "grid"] as const;
const VIEW_LABELS: Record<string, string> = {
  list: t("pmp_view_list", "☰ List"),
  grid: t("pmp_view_grid", "⊞ Tiles"),
};

const tierOptions = computed<string[]>(() =>
  selectedProvider.value === "ollama" || selectedProvider.value === "lmstudio"
    ? ["all", "local"]
    : ["all", "free", "paid"]
);

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) {
      selectedProvider.value = props.provider || "ollama";
      selectedModel.value = props.model || "";
      searchQuery.value = "";
      typeFilter.value = "all";
      tierFilter.value = "all";
      void loadCurrentProviderModels();
    }
  }
);

async function loadCurrentProviderModels(force = false) {
  try {
    await store.loadModels(selectedProvider.value, force);
  } catch (err) {
    toast.error(err instanceof Error ? err.message : String(err));
  }
}

function switchProvider(p: string) {
  selectedProvider.value = p;
  searchQuery.value = "";
  // Reset tier filter: the available tiers change per provider (local vs
  // free/paid), so a stale selection could otherwise filter everything out.
  tierFilter.value = "all";
  const models = store.modelsFor(p);
  if (models.length > 0) {
    selectedModel.value = models[0];
  } else {
    selectedModel.value = "";
  }
  void loadCurrentProviderModels();
}

const currentModels = computed(() => store.modelsFor(selectedProvider.value));
const visionModels = computed(() => store.visionModelsFor(selectedProvider.value));
const isLoading = computed(() => store.isLoading(selectedProvider.value));
const probe = computed(() => store.probeState[selectedProvider.value]);
const ageLabel = computed(() => store.cachedAgeLabel(selectedProvider.value));

function getTier(m: string, p: string): "local" | "free" | "paid" {
  if (p === "ollama" || p === "lmstudio") return "local";
  if (m.toLowerCase().includes(":free")) return "free";
  return "paid";
}

function isVision(m: string): boolean {
  return visionModels.value.includes(m);
}

const filteredModels = computed(() => {
  let list = currentModels.value;
  const q = searchQuery.value.trim().toLowerCase();
  const p = selectedProvider.value;

  if (q) {
    list = list.filter((m) => m.toLowerCase().includes(q));
  }

  if (typeFilter.value === "vision") {
    list = list.filter((m) => isVision(m));
  } else if (typeFilter.value === "text") {
    list = list.filter((m) => !isVision(m));
  }

  if (tierFilter.value !== "all") {
    list = list.filter((m) => getTier(m, p) === tierFilter.value);
  }

  return list;
});

function pickModel(m: string) {
  selectedModel.value = m;
}

function confirmSelection() {
  if (!selectedModel.value) return;
  emit("select", { provider: selectedProvider.value, model: selectedModel.value });
  emit("update:open", false);
}

function closeModal() {
  emit("update:open", false);
}
</script>

<template>
  <FilModal
    :open="open"
    width="860px"
    :title="t('pmp_title', '🔌 Choose Provider &amp; Model')"
    @update:open="(v) => emit('update:open', v)"
    @close="closeModal"
  >
    <div class="picker-container">
      <!-- Provider Tabs -->
      <div class="provider-tabs">
        <button
          v-for="p in PROVIDER_LIST"
          :key="p"
          type="button"
          class="tab-btn"
          :class="{ active: p === selectedProvider }"
          @click="switchProvider(p)"
        >
          <FilIcon :name="PROVIDER_ICON[p]" :size="18" />
          <span class="tab-label">{{ PROVIDER_LABEL[p] ?? p }}</span>
          <span v-if="store.modelsFor(p).length" class="tab-badge">
            {{ store.modelsFor(p).length }}
          </span>
        </button>
      </div>

      <!-- Provider Header Status -->
      <div class="provider-status-bar">
        <div class="status-info">
          <span class="provider-name">{{ PROVIDER_LABEL[selectedProvider] ?? selectedProvider }}</span>
          <span v-if="isLoading" class="status-badge loading">⏳ {{ t('pmp_loading', 'Loading...') }}</span>
          <span v-else-if="probe && probe.status && probe.status !== 'available'" class="status-badge error">
            ⚠️ {{ probe.message || probe.status }}
          </span>
          <span v-else class="status-badge online">
            ● {{ t('pmp_online', 'Online') }} ({{ currentModels.length }} {{ t('prov_models', 'models') }})
          </span>
          <span v-if="ageLabel" class="age-label">{{ t('pmp_updated', 'Updated') }}: {{ ageLabel }}</span>
        </div>
        <FilButton
          variant="sm"
          :label="t('pmp_refresh', '↻ Refresh')"
          :loading="isLoading"
          :title="t('tt_refresh', 'Reload models list')"
          @click="loadCurrentProviderModels(true)"
        />
      </div>

      <!-- Controls & Filters -->
      <div class="filter-controls">
        <div class="search-input-wrap">
          <FilIcon name="search" :size="14" class="search-icon" />
          <input
            v-model="searchQuery"
            type="text"
            class="search-input"
            :placeholder="t('pmp_search', 'Search models...')"
          />
          <button
            v-if="searchQuery"
            type="button"
            class="clear-search"
            :title="t('tt_clear_search', 'Clear search')"
            @click="searchQuery = ''"
          >✕</button>
        </div>

        <div class="filter-segments">
          <FilSegmented
            :options="[...TYPE_OPTIONS]"
            :option-labels="TYPE_LABELS"
            :model-value="typeFilter"
            @update:model-value="(v: string) => (typeFilter = v as 'all' | 'vision' | 'text')"
          />
          <FilSegmented
            :options="tierOptions"
            :option-labels="TIER_LABELS"
            :model-value="tierFilter"
            @update:model-value="(v: string) => (tierFilter = v as 'all' | 'free' | 'paid' | 'local')"
          />
          <FilSegmented
            :options="[...VIEW_OPTIONS]"
            :option-labels="VIEW_LABELS"
            :model-value="viewMode"
            @update:model-value="(v: string) => setViewMode(v as 'list' | 'grid')"
          />
        </div>
      </div>

      <!-- Models List / Grid Container -->
      <div class="models-list-wrapper">
        <div v-if="isLoading && !currentModels.length" class="empty-state">
          <FilInfo :text="t('pmp_loading_provider', 'Loading models from provider...')" />
        </div>
        <div v-else-if="!filteredModels.length" class="empty-state">
          <span>{{ t('pmp_no_match', 'No models matching criteria') }}</span>
        </div>
        <div v-else :class="['models-container', viewMode]">
          <!-- A real <button>, not a clickable <div>: the card is the primary
               control in this dialog, and every other interactive element in the
               codebase is a button, so keyboard users and screen readers were
               the only ones locked out of picking a model. -->
          <button
            v-for="m in filteredModels"
            :key="m"
            type="button"
            class="model-card"
            :class="{ selected: m === selectedModel }"
            :aria-pressed="m === selectedModel"
            @click="pickModel(m)"
          >
            <div class="model-main">
              <span class="type-icon">{{ isVision(m) ? '👁' : '📝' }}</span>
              <span class="model-name" :title="m">{{ m }}</span>
            </div>
            <div class="model-tags">
              <span v-if="isVision(m)" class="tag vision">{{ t('pmp_tag_vision', 'Vision') }}</span>
              <span v-else class="tag text">{{ t('pmp_tag_text', 'Text') }}</span>
              
              <span v-if="getTier(m, selectedProvider) === 'local'" class="tag local">{{ t('pmp_tag_local', 'Local') }}</span>
              <span v-else-if="getTier(m, selectedProvider) === 'free'" class="tag free">{{ t('pmp_tag_free', 'Free') }}</span>
              <span v-else class="tag paid">{{ t('pmp_tag_paid', 'Paid') }}</span>
            </div>
          </button>
        </div>
      </div>

      <!-- Footer Buttons -->
      <div class="picker-footer">
        <div class="selection-summary">
          <span v-if="selectedModel">{{ t('pmp_selected', 'Selected') }}: <strong>{{ selectedModel }}</strong></span>
          <span v-else class="muted">{{ t('pmp_none_selected', 'No model selected') }}</span>
        </div>
        <div class="footer-actions">
          <FilButton :label="t('pmp_cancel', 'Cancel')" :title="t('pmp_cancel_tt', 'Close without changing the model')" @click="closeModal" />
          <FilButton
            variant="accent"
            :label="t('pmp_apply', '✔ Apply Selection')"
            :title="t('pmp_apply_tt', 'Use the selected model')"
            :disabled="!selectedModel"
            @click="confirmSelection"
          />
        </div>
      </div>
    </div>
  </FilModal>
</template>

<style scoped>
.picker-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: var(--fil-text, #e8edf3);
}

.provider-tabs {
  display: flex;
  gap: 6px;
  overflow-x: auto;
  padding-bottom: 6px;
  scrollbar-width: thin;
}
.tab-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 10px;
  border-radius: 8px;
  border: 1px solid var(--fil-pill-border);
  background: var(--fil-pill-bg);
  color: var(--fil-muted, #9ca8b5);
  font-size: 12px;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all 0.15s ease;
}
.tab-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--fil-text, #e8edf3);
}
.tab-btn.active {
  background: var(--fil-panel-alt, #222934);
  border-color: var(--fil-accent, #f08a45);
  color: var(--fil-accent, #f08a45);
  font-weight: 600;
}
.tab-badge {
  font-size: 10px;
  background: var(--fil-pill-bg);
  padding: 1px 5px;
  border-radius: 99px;
}

.provider-status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
}
.status-info {
  display: flex;
  align-items: center;
  gap: 8px;
}
.provider-name {
  font-weight: 600;
}
.status-badge {
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 4px;
}
.status-badge.online {
  color: var(--fil-ok, #62c987);
}
.status-badge.loading {
  color: var(--fil-accent, #f08a45);
}
.status-badge.error {
  color: var(--fil-danger, #ef6666);
}
.age-label {
  font-size: 10px;
  color: var(--fil-muted, #9ca8b5);
}

.filter-controls {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.search-input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}
.search-icon {
  position: absolute;
  left: 10px;
  color: var(--fil-muted, #9ca8b5);
}
.search-input {
  width: 100%;
  box-sizing: border-box;
  height: 32px;
  padding: 6px 30px;
  background: var(--fil-panel-alt, #171819);
  border: 1px solid var(--fil-muted, #3a3d40);
  border-radius: var(--fil-field-radius, 6px);
  color: var(--fil-text, #e8edf3);
  font-size: 12px;
  outline: none;
}
.search-input:focus {
  border-color: var(--fil-accent, #f08a45);
}
.clear-search {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  color: var(--fil-muted, #9ca8b5);
  cursor: pointer;
}

.filter-segments {
  display: flex;
  gap: 8px;
  min-width: 0;
}
/* FilSegmented roots are width:100%; let each take an equal share of the row. */
.filter-segments > * {
  flex: 1;
  min-width: 0;
}

.models-list-wrapper {
  height: 320px;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 8px;
}
.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--fil-muted, #9ca8b5);
  font-size: 12px;
}
.models-container.list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.models-container.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 8px;
}
.models-container.grid .model-card {
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 10px 12px;
}
.models-container.grid .model-main {
  width: 100%;
}
.models-container.grid .model-tags {
  width: 100%;
  justify-content: flex-start;
}
.model-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.12s ease;
  /* Button resets — the card became a real <button> for keyboard access. */
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  font: inherit;
  color: inherit;
  appearance: none;
  -webkit-appearance: none;
}
.model-card:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: -2px;
}
.model-card:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.15);
}
.model-card.selected {
  background: rgba(240, 138, 69, 0.15);
  border-color: var(--fil-accent, #f08a45);
}
.model-main {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}
.type-icon {
  font-size: 14px;
}
.model-name {
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.model-tags {
  display: flex;
  gap: 4px;
  flex-shrink: 0;
}
.tag {
  font-size: 9px;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
}
.tag.vision {
  background: rgba(240, 138, 69, 0.15);
  color: var(--fil-accent, #f08a45);
}
.tag.text,
.tag.local,
.tag.free,
.tag.paid {
  background: var(--fil-pill-bg);
  color: var(--fil-muted, #9ca8b5);
}

.picker-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
}
.selection-summary {
  font-size: 12px;
}
.selection-summary .muted {
  color: var(--fil-muted, #9ca8b5);
}
.footer-actions {
  display: flex;
  gap: 8px;
}
</style>
