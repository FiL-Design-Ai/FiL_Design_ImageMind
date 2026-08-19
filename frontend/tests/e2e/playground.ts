import { createApp, defineComponent, h, type Component } from "vue";
import { createPinia } from "pinia";
import FilModal from "@/components/widgets/FilModal.vue";
import FilSegmented from "@/components/widgets/FilSegmented.vue";
import FilSlider from "@/components/widgets/FilSlider.vue";
import FilChipGrid from "@/components/widgets/FilChipGrid.vue";
import FilChipList from "@/components/widgets/FilChipList.vue";
import FilTextInput from "@/components/widgets/FilTextInput.vue";
import FilToggle from "@/components/widgets/FilToggle.vue";
import LoraLoaderPanel from "@/components/nodes/LoraLoaderPanel.vue";
import ModelCyclerPanel from "@/components/nodes/ModelCyclerPanel.vue";
import OpticScanner from "@/components/nodes/OpticScanner.vue";
import { elementWantsWheel, scrollRegionWantsWheel } from "@/composables/scrollGuard";
import { injectFilBrandVars } from "@/styles/brand";

// The panels read every colour, radius and control height off `--fil-*`. In
// ComfyUI main.ts injects them; here nothing else would.
injectFilBrandVars();

// Registry of available components for testing
const components: Record<string, Component> = {
  FilModal,
  FilSegmented,
  FilSlider,
  FilChipGrid,
  FilChipList,
  FilTextInput,
  FilToggle,
  // Whole node panels, not widgets: how tall a row ends up is a question about
  // real layout — wrapping, the width a stepper claims, whether a control fits
  // on the node at all — and jsdom answers none of those.
  LoraLoaderPanel,
  ModelCyclerPanel,
  OpticScanner,
};

// The wheel predicate reads `getComputedStyle().overflowY` and live scroll
// geometry, none of which jsdom has — its unit tests define those per element
// by hand, which only proves the logic agrees with the numbers the test made
// up. Exposed here so a browser can answer the question with real layout.
window.scrollGuard = { elementWantsWheel, scrollRegionWantsWheel };

declare global {
  interface Window {
    mountComponent: (name: string, props: any) => void;
    unmountComponent: () => void;
    lastEmittedModelValue: any;
    scrollGuard: {
      elementWantsWheel: (el: Element, deltaX: number, deltaY: number) => boolean;
      scrollRegionWantsWheel: (
        target: EventTarget | null,
        deltaX: number,
        deltaY: number,
        stopAt?: Element | null,
      ) => boolean;
    };
  }
}

let currentApp: any = null;

window.mountComponent = (name: string, props: any) => {
  if (currentApp) {
    window.unmountComponent();
  }

  const ComponentToMount = components[name];
  if (!ComponentToMount) {
    console.error(`Component ${name} not found in playground registry.`);
    return;
  }

  // A node panel only looks like itself inside the node shell (the glass card
  // rule in styles/brand.ts is scoped to `.fil-node-shell`) at the width the
  // node actually has. Opt-in via `__shell`, so mounting a bare widget keeps
  // behaving exactly as before.
  const { __shell: shellWidth, ...componentProps } = props ?? {};

  const Wrapper = defineComponent({
    data() {
      return {
        localProps: { ...componentProps },
      };
    },
    render() {
      return h(ComponentToMount, {
        ...this.localProps,
        "onUpdate:modelValue": (val: any) => {
          this.localProps.modelValue = val;
          window.lastEmittedModelValue = val;
        },
        "onUpdate:open": (val: any) => {
          this.localProps.open = val;
          window.lastEmittedModelValue = val;
        }
      });
    }
  });

  currentApp = createApp(Wrapper);
  currentApp.use(createPinia());

  // Create a clean container
  const appContainer = document.getElementById("app");
  if (appContainer) {
    appContainer.innerHTML = "";
    const mountPoint = document.createElement("div");
    if (shellWidth) {
      mountPoint.className = "fil-node-shell";
      mountPoint.style.width = `${shellWidth}px`;
      mountPoint.style.background = "var(--fil-panel-alt)";
      mountPoint.style.borderRadius = "8px";
    }
    appContainer.appendChild(mountPoint);
    currentApp.mount(mountPoint);
  }
};

window.unmountComponent = () => {
  if (currentApp) {
    currentApp.unmount();
    currentApp = null;
  }
};
