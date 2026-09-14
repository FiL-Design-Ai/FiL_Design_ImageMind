<script setup lang="ts">
/**
 * FilWorkflowGalleryModal — Gallery of curated template workflows.
 *
 * Lets users browse starter and production workflows with 1-click loading
 * (replace or append with automatic spatial offset).
 */
import { computed } from "vue";
import { useI18n } from "@/composables/useI18n";
import { useWorkflowGalleryStore, type WorkflowTemplate } from "@/stores/workflowGalleryStore";
import FilModal from "./FilModal.vue";
import FilIcon from "./FilIcon.vue";
import FilButton from "./FilButton.vue";

const { t, state } = useI18n();
const store = useWorkflowGalleryStore();

const isRu = computed(() => (state.lang ?? "").toLowerCase().startsWith("ru"));

function getTitle(item: WorkflowTemplate): string {
  return isRu.value ? (item.title_ru || item.title) : item.title;
}

function getDesc(item: WorkflowTemplate): string {
  return isRu.value ? (item.description_ru || item.description) : item.description;
}
</script>

<template>
  <FilModal
    v-model:open="store.isOpen"
    :title="t('wfg_title', '⚡ Curated ImageMind Workflows')"
    width="680px"
    @close="store.closeGallery"
  >
    <div class="fil-wfg-content">
      <div v-if="store.loading" class="fil-wfg-loading">
        <FilIcon name="spinner" :size="20" class="fil-wfg-spin" />
        <span>{{ t('wfg_loading', 'Loading workflow templates…') }}</span>
      </div>

      <div v-else-if="store.error" class="fil-wfg-error">
        <span>⚠️ {{ store.error }}</span>
        <FilButton variant="standard" @click="store.fetchTemplates">
          {{ t('wfg_retry', 'Retry') }}
        </FilButton>
      </div>

      <div v-else-if="store.templates.length === 0" class="fil-wfg-empty">
        <span>{{ t('wfg_empty', 'No workflow templates found.') }}</span>
      </div>

      <div v-else class="fil-wfg-list">
        <div
          v-for="tpl in store.templates"
          :key="tpl.id"
          class="fil-wfg-card"
        >
          <div class="fil-wfg-card-header">
            <div class="fil-wfg-card-title-group">
              <span class="fil-wfg-badge">{{ tpl.badge || 'Template' }}</span>
              <h3 class="fil-wfg-card-title">{{ getTitle(tpl) }}</h3>
            </div>
            <span class="fil-wfg-category">{{ tpl.category }}</span>
          </div>

          <p class="fil-wfg-card-desc">{{ getDesc(tpl) }}</p>

          <div class="fil-wfg-card-actions">
            <FilButton
              variant="standard"
              :title="t('wfg_append_tt', 'Append nodes alongside existing ones on current canvas')"
              @click="store.loadTemplate(tpl.id, 'append')"
            >
              <FilIcon name="sparkle" :size="12" />
              {{ t('wfg_append', 'Append to Canvas') }}
            </FilButton>

            <FilButton
              variant="accent"
              :title="t('wfg_load_tt', 'Replace current canvas with this template workflow')"
              @click="store.loadTemplate(tpl.id, 'replace')"
            >
              <FilIcon name="sliders" :size="12" />
              {{ t('wfg_load', 'Load Workflow') }}
            </FilButton>
          </div>
        </div>
      </div>
    </div>
  </FilModal>
</template>

<style scoped>
.fil-wfg-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 70vh;
  overflow-y: auto;
  padding: 4px;
}

.fil-wfg-loading,
.fil-wfg-empty,
.fil-wfg-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 32px 16px;
  color: var(--fil-text-muted, #94a3b8);
  font-size: 13px;
}

.fil-wfg-spin {
  animation: fil-spin 1s linear infinite;
}

@keyframes fil-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.fil-wfg-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.fil-wfg-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: var(--fil-card-bg, rgba(255, 255, 255, 0.03));
  border: 1px solid var(--fil-border, rgba(255, 255, 255, 0.08));
  border-radius: 8px;
  padding: 14px 16px;
  transition: border-color 0.15s ease, background 0.15s ease;
}

.fil-wfg-card:hover {
  background: var(--fil-card-bg-hover, rgba(255, 255, 255, 0.06));
  border-color: var(--fil-accent, #7c3aed);
}

.fil-wfg-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.fil-wfg-card-title-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.fil-wfg-badge {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 2px 6px;
  border-radius: 4px;
  background: rgba(124, 58, 237, 0.2);
  color: #c084fc;
}

.fil-wfg-card-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--fil-text, #f8fafc);
}

.fil-wfg-category {
  font-size: 11px;
  color: var(--fil-text-muted, #64748b);
}

.fil-wfg-card-desc {
  margin: 0;
  font-size: 12px;
  line-height: 1.45;
  color: var(--fil-text-muted, #94a3b8);
}

.fil-wfg-card-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 4px;
}
</style>
