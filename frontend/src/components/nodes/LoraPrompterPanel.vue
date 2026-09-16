<script setup lang="ts">
/**
 * FiLLoraPrompter — Dynamic LoRA prompt composer with interactive trigger chips.
 * Shows available trigger words as clickable chips that toggle into the prompt.
 */
import { computed } from "vue";
import { FilTextArea } from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import { useWidgetSockets } from "@/composables/useWidgetSockets";
import { LORA_PROMPTER_SOCKET_INPUTS } from "@/nodes2/nodes/lora_prompter";
import type { FilNodeState } from "@/nodes2/filState";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

const { setFieldEl, isLinked } = useWidgetSockets(props.state, LORA_PROMPTER_SOCKET_INPUTS);

function stringField(name: string, fallback: string) {
  return computed({
    get: () => String(props.state.nodeState[name] ?? props.state.initialValues[name] ?? fallback),
    set: (v: string) => {
      props.state.nodeState[name] = v;
    },
  });
}

const prompt = stringField("prompt", "");
const rawTriggers = stringField("triggers", "");

/**
 * Split comma, newline or semicolon separated trigger words into clean list.
 */
function parseTriggerWords(raw: string): string[] {
  if (!raw || !raw.trim()) return [];
  const tokens = raw.split(/[\n,;]+/);
  const seen = new Set<string>();
  const result: string[] = [];
  for (const tok of tokens) {
    const clean = tok.trim();
    if (clean && !seen.has(clean.toLowerCase())) {
      seen.add(clean.toLowerCase());
      result.push(clean);
    }
  }
  return result;
}

/**
 * Live trigger words: extracted from state, or resolved directly from connected LoRA Loader in the graph.
 */
const triggerList = computed<string[]>(() => {
  const fromState = parseTriggerWords(rawTriggers.value);
  if (fromState.length > 0) return fromState;

  const node = props.state.node;
  const trigSlot = node?.inputs?.find((i) => i.name === "triggers");
  if (trigSlot && trigSlot.link != null && node?.graph?.links) {
    const link = node.graph.links[trigSlot.link];
    if (link?.origin_id != null) {
      const originNode = node.graph.getNodeById?.(link.origin_id);
      if (originNode) {
        const w = originNode.widgets?.find((item: { name?: string; value?: unknown }) => item.name === "triggers" || item.name === "text");
        if (typeof w?.value === "string" && w.value.trim()) {
          return parseTriggerWords(w.value);
        }
      }
    }
  }

  return [];
});

/**
 * Check if a trigger word is already present in prompt text (case-insensitive whole phrase match).
 */
function isTriggerActive(trigger: string, promptText: string): boolean {
  if (!trigger || !promptText) return false;
  const escaped = trigger.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(^|[,\\s])${escaped}([,\\s]|$)`, "i");
  return regex.test(promptText);
}

/**
 * Toggle trigger word inside prompt text: insert at start or cleanly excise.
 */
function toggleTrigger(trigger: string) {
  const current = prompt.value.trim();
  if (isTriggerActive(trigger, current)) {
    const escaped = trigger.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    let updated = current
      .replace(new RegExp(`(^|[,\\s]+)${escaped}([,\\s]+|$)`, "gi"), (_match, p1, p2) => {
        if (p1 && p2 && p1.includes(",") && p2.includes(",")) return ", ";
        return " ";
      })
      .trim();
    updated = updated.replace(/,\s*,+/g, ",").replace(/^,\s*/, "").replace(/,\s*$/, "").trim();
    prompt.value = updated;
  } else {
    if (!current) {
      prompt.value = trigger;
    } else {
      prompt.value = `${trigger}, ${current}`;
    }
  }
}

/**
 * Add all available triggers that are not yet active into the prompt.
 */
function addAllTriggers() {
  const current = prompt.value.trim();
  const missing = triggerList.value.filter((trig) => !isTriggerActive(trig, current));
  if (missing.length === 0) return;
  const prefix = missing.join(", ");
  prompt.value = current ? `${prefix}, ${current}` : prefix;
}

/**
 * Cleanly remove all known triggers from the prompt.
 */
function clearAllTriggers() {
  let current = prompt.value.trim();
  for (const trig of triggerList.value) {
    if (isTriggerActive(trig, current)) {
      const escaped = trig.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      current = current
        .replace(new RegExp(`(^|[,\\s]+)${escaped}([,\\s]+|$)`, "gi"), (_match, p1, p2) => {
          if (p1 && p2 && p1.includes(",") && p2.includes(",")) return ", ";
          return " ";
        })
        .trim();
      current = current.replace(/,\s*,+/g, ",").replace(/^,\s*/, "").replace(/,\s*$/, "").trim();
    }
  }
  prompt.value = current;
}
</script>

<template>
  <div class="fil-lp-root">
    <!-- Trigger Chips Header & Strip -->
    <div class="fil-lp-trigger-box">
      <div class="fil-lp-trigger-header">
        <div class="fil-lp-trigger-title">
          <span class="fil-lp-icon">🧬</span>
          <span>{{ t("lp_triggers_title", "LoRA Triggers") }}</span>
          <span class="fil-lp-badge" v-if="triggerList.length > 0">{{ triggerList.length }}</span>
        </div>
        <div v-if="triggerList.length > 0" class="fil-lp-actions">
          <button
            type="button"
            class="fil-lp-action-btn"
            @click="addAllTriggers"
            :title="t('lp_add_all_tt', 'Add all trigger words to the prompt')"
          >
            + {{ t("lp_add_all", "All") }}
          </button>
          <button
            type="button"
            class="fil-lp-action-btn"
            @click="clearAllTriggers"
            :title="t('lp_clear_all_tt', 'Remove all trigger words from the prompt')"
          >
            − {{ t("lp_clear_all", "Clear") }}
          </button>
        </div>
      </div>

      <!-- Trigger Chips Row -->
      <div v-if="triggerList.length > 0" class="fil-lp-chips-strip">
        <button
          v-for="trig in triggerList"
          :key="trig"
          type="button"
          class="fil-lp-chip"
          :class="{ 'is-active': isTriggerActive(trig, prompt) }"
          @click="toggleTrigger(trig)"
          :title="isTriggerActive(trig, prompt) ? t('lp_chip_remove_tt', 'Click to remove trigger from prompt') : t('lp_chip_add_tt', 'Click to add trigger to prompt')"
        >
          <span class="fil-lp-chip-mark">{{ isTriggerActive(trig, prompt) ? '✓' : '+' }}</span>
          <span class="fil-lp-chip-text">{{ trig }}</span>
        </button>
      </div>

      <!-- Empty State -->
      <div v-else class="fil-lp-empty-triggers">
        <span>{{ t("lp_connect_hint", "Connect `triggers` from 🧬 LoRA Loader to pick triggers by click") }}</span>
      </div>
    </div>

    <!-- Prompt Text Editor -->
    <div class="fil-lp-prompt-container">
      <FilTextArea
        :ref="(el: unknown) => setFieldEl('prompt', el)"
        class="fil-lp-grow"
        v-model="prompt"
        :rows="4"
        toolbar
        :linked="isLinked('prompt')"
        :placeholder="t('lp_prompt_ph', 'Type your prompt here or click triggers above to insert…')"
        :title="t('lp_prompt_tt', 'Assembled prompt string passed downstream.')"
      />
    </div>
  </div>
</template>

<style scoped>
.fil-lp-root {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: var(--fil-node-pad);
  color: var(--fil-text);
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.fil-lp-trigger-box {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: rgba(15, 23, 42, 0.45);
  border: 1px solid var(--fil-border, rgba(255, 255, 255, 0.1));
  border-radius: var(--fil-radius, 6px);
  padding: 6px 8px;
  min-width: 0;
}

.fil-lp-trigger-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.fil-lp-trigger-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #a78bfa;
}

.fil-lp-icon {
  font-size: 12px;
}

.fil-lp-badge {
  background: rgba(167, 139, 250, 0.2);
  color: #c4b5fd;
  font-size: 10px;
  padding: 1px 5px;
  border-radius: 9999px;
  font-weight: 700;
}

.fil-lp-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.fil-lp-action-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--fil-text-dim, #94a3b8);
  border-radius: 4px;
  font-size: 10px;
  padding: 2px 6px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.fil-lp-action-btn:hover {
  border-color: #a78bfa;
  color: #f1f5f9;
  background: rgba(167, 139, 250, 0.15);
}

.fil-lp-chips-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  max-height: 90px;
  overflow-y: auto;
  min-width: 0;
  padding-top: 2px;
}

.fil-lp-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #cbd5e1;
  border-radius: 12px;
  font-size: 11px;
  padding: 3px 8px;
  cursor: pointer;
  user-select: none;
  transition: all 0.15s ease;
  min-width: 0;
  max-width: 100%;
}

.fil-lp-chip:hover {
  border-color: #a78bfa;
  background: rgba(167, 139, 250, 0.15);
  color: #fff;
}

.fil-lp-chip.is-active {
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.35) 0%, rgba(99, 102, 241, 0.45) 100%);
  border-color: #a78bfa;
  color: #f8fafc;
  font-weight: 500;
  box-shadow: 0 0 8px rgba(167, 139, 250, 0.3);
}

.fil-lp-chip-mark {
  font-size: 10px;
  font-weight: 700;
  color: #a78bfa;
}

.fil-lp-chip.is-active .fil-lp-chip-mark {
  color: #2dd4bf;
}

.fil-lp-chip-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fil-lp-empty-triggers {
  font-size: 10.5px;
  color: var(--fil-text-dim, #64748b);
  font-style: italic;
  padding: 2px 0;
}

.fil-lp-prompt-container {
  flex: 1 1 auto;
  min-height: 70px;
  display: flex;
  flex-direction: column;
}

.fil-lp-grow {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  min-height: 60px;
}
</style>
