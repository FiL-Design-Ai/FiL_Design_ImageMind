<script setup lang="ts">
/**
 * What one model in the queue actually is — the file on disk, and whatever
 * Civitai adds to it. Opened from a row's ⓘ or its right-click menu.
 */
import { ROUTE_PREFIX } from "@/constants/brand";
import { FilModal } from "@/components/widgets";
import { folderKey, type ModelInfoDetail } from "./types";

const props = defineProps<{
  open: boolean;
  detail: ModelInfoDetail | null;
  /** The toast a copy button leaves behind; empty when there is none. */
  copyMessage: string;
  /** How many rows the queue holds, for "#2 of 7". */
  total: number;
}>();

defineEmits<{
  "update:open": [value: boolean];
  copy: [text: string, label: string];
}>();

function previewUrl(detail: ModelInfoDetail): string {
  return `${ROUTE_PREFIX}/model_preview?mode=${folderKey(detail.mode)}&path=${encodeURIComponent(detail.fullName)}`;
}

function hide(event: Event) {
  (event.target as HTMLElement).style.display = "none";
}

// `props` is read in the template only; naming it keeps the linter honest.
void props;
</script>

<template>
  <FilModal
    :open="open"
    :title="`Model Info — ${detail?.model_title || detail?.cleanName || 'Details'}`"
    width="540px"
    @update:open="(v) => $emit('update:open', v)"
  >
    <div v-if="detail" class="fil-info-modal-content">
      <!-- Notification toast for copy actions -->
      <div v-if="copyMessage" class="fil-copy-toast">{{ copyMessage }}</div>

      <div class="fil-info-preview-wrap">
        <img
          :src="previewUrl(detail)"
          class="fil-info-preview-img"
          alt="Model Preview Thumbnail"
          @error="hide"
        />
      </div>

      <!-- The one thing this dialog never said: whether it is still asking, and
           what the answer was. A model with no record on Civitai read exactly
           like a lookup that had quietly failed — both showed "Unknown". -->
      <div v-if="detail.isLoading" class="fil-info-status busy">
        <span class="fil-info-spinner" /> Looking this model up on Civitai…
      </div>
      <div
        v-else-if="detail.civitai_status === 'not_found'"
        class="fil-info-status"
      >
        Not on Civitai — everything below is read from the file itself.
      </div>
      <div v-else-if="detail.civitai_status === 'offline'" class="fil-info-status warn">
        Civitai could not be reached. Showing what the file itself says.
      </div>

      <div v-if="detail.model_title || detail.creator" class="fil-info-title-block">
        <div v-if="detail.model_title" class="model-meta-title">{{ detail.model_title }}</div>
        <div class="model-meta-sub">
          <span v-if="detail.creator" class="meta-creator">By <b>{{ detail.creator }}</b></span>
          <span v-if="detail.download_count" class="meta-stat">
            📥 {{ detail.download_count.toLocaleString() }}
          </span>
          <span v-if="detail.thumbs_up" class="meta-stat">
            👍 {{ detail.thumbs_up.toLocaleString() }}
          </span>
        </div>
      </div>

      <div class="fil-info-grid">
        <div class="fil-info-card">
          <span class="fil-info-card-label">Position</span>
          <span class="fil-info-card-val">#{{ detail.index }} of {{ total }}</span>
        </div>
        <div class="fil-info-card">
          <span class="fil-info-card-label">Architecture / Base</span>
          <span class="fil-info-card-val highlight">
            {{ detail.arch || detail.base_model || 'Detecting...' }}
          </span>
        </div>
        <div class="fil-info-card">
          <span class="fil-info-card-label">File Size</span>
          <span class="fil-info-card-val">{{ detail.size_str || 'Reading...' }}</span>
        </div>
        <div class="fil-info-card">
          <span class="fil-info-card-label">Precision</span>
          <span class="fil-info-card-val">{{ detail.precision || 'Unknown' }}</span>
        </div>
        <div class="fil-info-card">
          <span class="fil-info-card-label">Category</span>
          <span class="fil-info-card-val">{{ detail.mode }}</span>
        </div>
        <div class="fil-info-card">
          <span class="fil-info-card-label">Modified Date</span>
          <span class="fil-info-card-val">{{ detail.mtime_str || 'Unknown' }}</span>
        </div>
      </div>

      <div v-if="detail.trained_words?.length" class="fil-info-field full">
        <div class="fil-info-header-row">
          <span class="fil-info-label">Trained Trigger Words:</span>
          <button
            class="fil-copy-mini-btn"
            title="Copy All Triggers to Clipboard"
            @click="$emit('copy', detail.trained_words.join(', '), 'Trigger Words')"
          >
            📋 Copy Triggers
          </button>
        </div>
        <div class="fil-info-tags-list">
          <span v-for="tag in detail.trained_words" :key="tag" class="fil-info-tag">{{ tag }}</span>
        </div>
      </div>

      <div v-if="detail.sample_prompts?.length" class="fil-info-field full">
        <span class="fil-info-label">Civitai Sample Test Prompts:</span>
        <div class="fil-info-prompts-list">
          <div
            v-for="(pmt, pidx) in detail.sample_prompts"
            :key="pidx"
            class="fil-info-prompt-item"
          >
            <span class="prompt-num">#{{ pidx + 1 }}</span>
            <span class="prompt-text">{{ pmt }}</span>
            <button
              class="fil-copy-mini-btn"
              title="Copy Prompt"
              @click="$emit('copy', pmt, `Prompt #${pidx + 1}`)"
            >
              📋 Copy
            </button>
          </div>
        </div>
      </div>

      <div class="fil-info-field full">
        <span class="fil-info-label">Clean Model Name (Watermark Output):</span>
        <span class="fil-info-val highlight">{{ detail.cleanName }}</span>
      </div>

      <div class="fil-info-field full">
        <span class="fil-info-label">Full Relative File Path:</span>
        <code class="fil-info-code">{{ detail.fullName }}</code>
      </div>
    </div>
  </FilModal>
</template>

<style scoped>
.fil-info-status {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 6px;
  background: var(--fil-inset);
  border: 1px solid var(--fil-border);
  color: var(--fil-muted);
  font-size: 11px;
}

.fil-info-status.warn {
  border-color: color-mix(in srgb, var(--fil-danger, #ef4444) 40%, transparent);
  color: var(--fil-danger, #ef4444);
}

.fil-info-spinner {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--fil-accent, #a855f7) 35%, transparent);
  border-top-color: var(--fil-accent, #a855f7);
  animation: fil-info-spin 0.7s linear infinite;
  flex: none;
}

@keyframes fil-info-spin {
  to { transform: rotate(360deg); }
}

.fil-info-modal-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 13px;
  color: var(--fil-text);
  position: relative;
}

.fil-copy-toast {
  position: absolute;
  top: -6px;
  right: 0;
  background: var(--fil-accent, #a855f7);
  color: #fff;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  animation: fil-fade-in 0.2s ease-out;
}

.fil-info-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.fil-copy-mini-btn {
  background: var(--fil-surface-2, #27272a);
  border: 1px solid var(--fil-border);
  color: var(--fil-accent, #a855f7);
  font-size: 10px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;
}

.fil-copy-mini-btn:hover {
  background: color-mix(in srgb, var(--fil-accent) 20%, transparent);
  border-color: var(--fil-accent, #a855f7);
}

.fil-info-preview-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.fil-info-preview-img {
  max-width: 100%;
  max-height: 220px;
  object-fit: contain;
  border-radius: 6px;
  border: 1px solid color-mix(in srgb, var(--fil-accent) 40%, transparent);
  box-shadow: 0 4px 16px color-mix(in srgb, var(--fil-accent) 30%, transparent);
}

.fil-info-title-block {
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: var(--fil-inset);
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid var(--fil-border);
}

.model-meta-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--fil-accent, #a855f7);
}

.model-meta-sub {
  display: flex;
  gap: 12px;
  font-size: 11px;
  color: var(--fil-muted);
}

.fil-info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}

.fil-info-card {
  background: var(--fil-surface-1);
  border: 1px solid var(--fil-border);
  border-radius: 6px;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.fil-info-card-label {
  font-size: 10px;
  color: var(--fil-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.fil-info-card-val {
  font-size: 12px;
  font-weight: 600;
}

.fil-info-card-val.highlight {
  color: var(--fil-accent, #a855f7);
}

.fil-info-tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
}

.fil-info-tag {
  background: color-mix(in srgb, var(--fil-accent) 18%, transparent);
  color: var(--fil-accent-text, #c084fc);
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 10px;
  font-weight: 600;
}

.fil-info-prompts-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 4px;
  max-height: 120px;
  overflow-y: auto;
  background: var(--fil-inset);
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid var(--fil-border);
}

.fil-info-prompt-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  line-height: 1.3;
}

.prompt-num {
  color: var(--fil-accent, #a855f7);
  font-weight: 700;
}

.prompt-text {
  flex: 1;
  color: var(--fil-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fil-info-field {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--fil-border);
}

.fil-info-field.full {
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  border-bottom: none;
}

.fil-info-label {
  color: var(--fil-muted);
  font-size: 11px;
}

.fil-info-val {
  font-weight: 500;
}

.fil-info-val.highlight {
  color: var(--fil-accent, #a855f7);
  font-weight: 600;
}

.fil-info-code {
  background: var(--fil-inset);
  padding: 6px 10px;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  font-family: monospace;
  font-size: 11px;
  word-break: break-all;
  color: var(--fil-accent-text, #c084fc);
  border: 1px solid var(--fil-border);
}
</style>
