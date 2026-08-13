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
import { elementWantsWheel, scrollRegionWantsWheel } from "@/composables/scrollGuard";

// Registry of available components for testing
const components: Record<string, Component> = {
  FilModal,
  FilSegmented,
  FilSlider,
  FilChipGrid,
  FilChipList,
  FilTextInput,
  FilToggle,
  // A whole node panel, not a widget: how tall a row ends up is a question
  // about real layout — wrapping, the width the stepper claims, whether a
  // control fits on the node at all — and jsdom answers none of those.
  LoraLoaderPanel,
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

  const Wrapper = defineComponent({
    data() {
      return {
        localProps: { ...props },
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
