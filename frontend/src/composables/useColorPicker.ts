/**
 * "Change color…" context-menu item for FiL_Design_ImageMind nodes. Wired up once, for
 * every node, in `nodes2/nodeStyle.ts`'s `registerStyledNode()` via
 * `getExtraMenuOptions` — this module only builds the menu entry and the
 * floating swatch popup, it doesn't register anything on its own.
 */
import { h, render, nextTick } from "vue";
import FilColorPicker from "@/components/widgets/FilColorPicker.vue";

const COLOR_PICKER_ID = "__fil_color_picker_popup__";

/**
 * Teardown for the picker that is currently open, if any. Removing the popup's
 * DOM node is not enough: its `mousedown`/`keydown` handlers live on `document`
 * and its Vue subtree needs `render(null, …)`, so reopening the picker without
 * running this first leaked a listener pair (and a component) every time.
 */
let activeCleanup: (() => void) | null = null;

interface LiteGraphNode {
  color?: string;
  properties?: Record<string, unknown>;
  /** The full ComfyUI node object set by addDOMWidget. */
  __fx?: { color?: string };
  id?: string | number;
}

/** Returns menu items for `getExtraMenuOptions`. */
export function getColorMenuItems(node: LiteGraphNode): unknown[] {
  return [
    {
      content: "Change color…",
      callback: (
        _value: unknown,
        _options: unknown,
        event?: MouseEvent,
      ) => openColorPicker(node, event),
    },
  ];
}

function openColorPicker(node: LiteGraphNode, event?: MouseEvent) {
  activeCleanup?.();
  document.getElementById(COLOR_PICKER_ID)?.remove();

  const mount = document.createElement("div");
  mount.id = COLOR_PICKER_ID;
  // Anchor near the click that opened the context menu (falls back to
  // viewport center if LiteGraph didn't forward the DOM event), clamped so
  // the ~176px-wide HSV picker never renders off-screen.
  const popupWidth = 176;
  const popupHeight = 260;
  const x = event ? Math.min(event.clientX, window.innerWidth - popupWidth - 8) : window.innerWidth / 2 - popupWidth / 2;
  const y = event ? Math.min(event.clientY, window.innerHeight - popupHeight - 8) : window.innerHeight / 2 - popupHeight / 2;
  mount.style.cssText = `position:fixed;z-index:10001;top:${Math.max(8, y)}px;left:${Math.max(8, x)}px;`;
  document.body.appendChild(mount);

  function applyColor(color: string) {
    node.color = color;
    if (node.__fx) node.__fx.color = color;
    // Marks this node as manually overridden — `reapplyThemeToGraph`
    // (nodeStyle.ts) skips it on future global theme switches so the
    // user's explicit choice isn't silently overwritten.
    node.properties = node.properties || {};
    node.properties.fil_custom_color = true;
    cleanup();
  }

  function cleanup() {
    render(null, mount);
    mount.remove();
    document.removeEventListener("mousedown", outsideHandler, true);
    document.removeEventListener("keydown", keyHandler, true);
    if (activeCleanup === cleanup) activeCleanup = null;
  }

  function outsideHandler(e: MouseEvent) {
    if (!mount.contains(e.target as Node)) cleanup();
  }
  function keyHandler(e: KeyboardEvent) {
    if (e.key === "Escape") cleanup();
  }

  const vnode = h(FilColorPicker, {
    modelValue: node.color ?? "#78716c",
    "onUpdate:modelValue": (color: string) => applyColor(color),
  });
  render(vnode, mount);

  document.addEventListener("mousedown", outsideHandler, true);
  document.addEventListener("keydown", keyHandler, true);
  activeCleanup = cleanup;

  nextTick(() => {
    mount.querySelector<HTMLElement>(".fil-color-swatch")?.focus();
  });
}
