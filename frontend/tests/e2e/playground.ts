import { createApp, defineComponent, h, type Component } from "vue";
import { createPinia } from "pinia";
import FilModal from "@/components/widgets/FilModal.vue";
import FilColorPicker from "@/components/widgets/FilColorPicker.vue";
import FilSegmented from "@/components/widgets/FilSegmented.vue";
import FilSlider from "@/components/widgets/FilSlider.vue";
import FilChipGrid from "@/components/widgets/FilChipGrid.vue";

// Registry of available components for testing
const components: Record<string, Component> = {
  FilModal,
  FilColorPicker,
  FilSegmented,
  FilSlider,
  FilChipGrid,
};

declare global {
  interface Window {
    mountComponent: (name: string, props: any) => void;
    unmountComponent: () => void;
    lastEmittedModelValue: any;
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
