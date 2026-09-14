/**
 * Workflow Gallery Store.
 *
 * Fetches template workflows from `/{ROUTE_SLUG}/workflows/templates`
 * and loads them onto the ComfyUI canvas either replacing or appending.
 */
import { defineStore } from "pinia";
import { ref } from "vue";
import type { ComfyApp } from "@/types/comfy";

export interface WorkflowTemplate {
  id: string;
  filename: string;
  title: string;
  title_ru: string;
  description: string;
  description_ru: string;
  category: string;
  category_ru: string;
  badge: string;
}

function getHostApp(): ComfyApp | undefined {
  return (globalThis as unknown as { app?: ComfyApp }).app;
}

export const useWorkflowGalleryStore = defineStore("filWorkflowGallery", () => {
  const isOpen = ref(false);
  const templates = ref<WorkflowTemplate[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchTemplates(): Promise<void> {
    loading.value = true;
    error.value = null;
    try {
      const res = await fetch("/fil/workflows/templates");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      templates.value = Array.isArray(data.templates) ? data.templates : [];
    } catch (err) {
      error.value = err instanceof Error ? err.message : String(err);
      console.warn("[FiL_Design_ImageMind] failed to fetch workflow templates:", err);
    } finally {
      loading.value = false;
    }
  }

  function openGallery(): void {
    isOpen.value = true;
    void fetchTemplates();
  }

  function closeGallery(): void {
    isOpen.value = false;
  }

  async function loadTemplate(id: string, mode: "replace" | "append" = "replace"): Promise<boolean> {
    const app = getHostApp();
    if (!app || typeof app.loadGraphData !== "function") {
      alert("ComfyUI app instance is not available.");
      return false;
    }

    try {
      const res = await fetch(`/fil/workflows/templates/${encodeURIComponent(id)}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const workflowData = await res.json();

      const graph = app.graph as { _nodes?: Array<{ pos?: [number, number]; size?: [number, number] }> } | undefined;
      const existingNodes = graph?._nodes;

      if (mode === "replace") {
        if (Array.isArray(existingNodes) && existingNodes.length > 0) {
          const ok = confirm("Заменить текущий воркфлоу на холсте? Несохранённые изменения будут утеряны.");
          if (!ok) return false;
        }
        await app.loadGraphData(workflowData);
      } else {
        // Append mode: calculate horizontal offset to lay out alongside existing nodes
        const nodesList = existingNodes ?? [];
        let maxX = 0;
        for (const n of nodesList) {
          const right = (n.pos?.[0] ?? 0) + (n.size?.[0] ?? 300);
          if (right > maxX) maxX = right;
        }
        const offsetX = maxX > 0 ? maxX + 120 : 0;

        const cloned = JSON.parse(JSON.stringify(workflowData));
        if (offsetX > 0 && Array.isArray(cloned.nodes)) {
          for (const node of cloned.nodes) {
            if (Array.isArray(node.pos)) {
              node.pos[0] += offsetX;
            }
          }
        }
        await app.loadGraphData(cloned, false);
      }

      isOpen.value = false;
      return true;
    } catch (err) {
      console.error("[FiL_Design_ImageMind] failed to load workflow:", err);
      alert(`Failed to load workflow: ${err instanceof Error ? err.message : String(err)}`);
      return false;
    }
  }

  return {
    isOpen,
    templates,
    loading,
    error,
    fetchTemplates,
    openGallery,
    closeGallery,
    loadTemplate,
  };
});
