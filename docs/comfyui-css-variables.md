# ComfyUI CSS variables (theming map)

> **Generated file** — produced by `frontend/scripts/scanComfyCssVars.mjs`.
> Do not edit by hand; regenerate after upgrading ComfyUI:
> `cd frontend && npm run scan:comfy-vars`

- Source: `comfyui_frontend_package` — `d:\AI\ComfyUI-Easy-Install\python_embeded\Lib\site-packages\comfyui_frontend_package\static`
- ComfyUI version: 0.30.0
- Generated: 2026-08-04
- Total unique variables: 446

## How to use

These are the variables the ComfyUI frontend defines, i.e. the handles a
custom-node extension can override from an injected `<style>` tag. Rules of
thumb:

- Override on `:root` — this extension's CSS is injected after the app's,
  so same-specificity overrides win.
- Prefer the semantic groups below over raw `--color-*` palette entries;
  semantic names survive palette reshuffles better.
- `--tw-*` are Tailwind's own plumbing — treat as read-only.
- PrimeVue (`--p-*`) tokens are mostly emitted at runtime from a JS theme,
  so the static list here is incomplete; check ComfyUI_frontend sources for
  the full token set.

## PrimeVue tokens (`--p-*`) — 9

```
--p-enter-opacity  ×2
--p-enter-scale  ×4
--p-leave-opacity  ×2
--p-leave-scale  ×3
--p-popover-background  ×1
--p-popover-border-color  ×1
--p-popover-content-padding  ×1
--p-tieredmenu-item-active-background  ×2
--p-tieredmenu-item-focus-background  ×2
```

## Legacy ComfyUI (`--comfy-*`) — 5

```
--comfy-input-bg  ×1
--comfy-menu-bg  ×1
--comfy-menu-secondary-bg  ×1
--comfy-textarea-font-size  ×1
--comfy-topbar-height  ×1
```

## Node appearance (`--node-*`) — 32

```
--node-border  ×2
--node-component-border  ×2
--node-component-border-error  ×1
--node-component-border-executing  ×1
--node-component-border-selected  ×1
--node-component-disabled  ×2
--node-component-executing  ×1
--node-component-header  ×1
--node-component-header-icon  ×2
--node-component-header-surface  ×2
--node-component-outline  ×2
--node-component-ring  ×2
--node-component-slot-dot-outline  ×2
--node-component-slot-dot-outline-opacity  ×2
--node-component-slot-dot-outline-opacity-mult  ×3
--node-component-slot-text  ×2
--node-component-surface  ×2
--node-component-surface-highlight  ×2
--node-component-surface-hovered  ×2
--node-component-surface-selected  ×2
--node-component-tooltip  ×2
--node-component-tooltip-border  ×2
--node-component-tooltip-surface  ×2
--node-component-widget-input  ×1
--node-component-widget-input-surface  ×1
--node-component-widget-skeleton-surface  ×2
--node-divider  ×2
--node-icon-disabled  ×2
--node-stroke  ×2
--node-stroke-error  ×2
--node-stroke-executing  ×2
--node-stroke-selected  ×2
```

## Interface & panels (`--interface-*`, `--palette-*`) — 19

```
--interface-builder-mode-background  ×2
--interface-builder-mode-button-background  ×2
--interface-builder-mode-button-foreground  ×2
--interface-builder-mode-footer-background  ×2
--interface-menu-component-surface-hovered  ×2
--interface-menu-component-surface-selected  ×2
--interface-menu-keybind-surface-default  ×2
--interface-menu-stroke  ×2
--interface-menu-surface  ×2
--interface-panel-surface  ×2
--interface-stroke  ×2
--palette-contrast-mix-color  ×1
--palette-interface-button-hover-surface  ×2
--palette-interface-panel-box-shadow  ×1
--palette-interface-panel-drop-shadow  ×1
--palette-interface-panel-hover-surface  ×2
--palette-interface-panel-selected-surface  ×2
--palette-interface-panel-surface  ×1
--palette-interface-stroke  ×2
```

## Dialogs & modals (`--modal-*`, `--dialog-*`) — 9

```
--dialog-surface  ×2
--modal-card-background  ×2
--modal-card-background-hovered  ×2
--modal-card-border-highlighted  ×2
--modal-card-button-surface  ×2
--modal-card-placeholder-background  ×2
--modal-card-tag-background  ×2
--modal-card-tag-foreground  ×2
--modal-panel-background  ×2
```

## Sidebar (`--sidebar-*`) — 10

```
--sidebar-default-connected-width  ×1
--sidebar-default-floating-width  ×1
--sidebar-default-item-height  ×1
--sidebar-icon-size  ×1
--sidebar-item-height  ×2
--sidebar-padding  ×1
--sidebar-small-connected-width  ×1
--sidebar-small-floating-width  ×1
--sidebar-small-item-height  ×1
--sidebar-width  ×4
```

## Tailwind v4 palette (`--color-*`) — 110

```
--color-alpha-ash-500-20  ×2
--color-alpha-azure-600-30  ×1
--color-alpha-charcoal-600-30  ×2
--color-alpha-smoke-500-50  ×2
--color-amber-400  ×2
--color-ash-500  ×1
--color-ash-800  ×1
--color-azure-300  ×1
--color-azure-400  ×1
--color-azure-600  ×1
--color-base-foreground  ×1
--color-black  ×1
--color-blue-100  ×2
--color-blue-300  ×2
--color-blue-400  ×2
--color-blue-50  ×2
--color-blue-500  ×2
--color-blue-600  ×2
--color-blue-700  ×2
--color-blue-800  ×2
--color-blue-selection  ×1
--color-border-default  ×1
--color-brand-yellow  ×1
--color-button-surface  ×1
--color-bypass  ×1
--color-charcoal-100  ×1
--color-charcoal-200  ×1
--color-charcoal-300  ×1
--color-charcoal-400  ×1
--color-charcoal-500  ×1
--color-charcoal-600  ×1
--color-charcoal-700  ×1
--color-charcoal-800  ×1
--color-cobalt-800  ×1
--color-coral-500  ×1
--color-coral-600  ×1
--color-coral-700  ×1
--color-credit  ×1
--color-cyan-400  ×2
--color-cyan-500  ×2
--color-danger-100  ×1
--color-danger-200  ×1
--color-electric-400  ×1
--color-emerald-400  ×2
--color-emerald-500  ×2
--color-error  ×1
--color-gold-400  ×1
--color-gold-500  ×1
--color-gold-600  ×1
--color-gray-200  ×2
--color-gray-300  ×2
--color-gray-50  ×2
--color-gray-500  ×2
--color-gray-600  ×2
--color-gray-800  ×2
--color-gray-900  ×2
--color-green-400  ×2
--color-green-500  ×2
--color-green-600  ×2
--color-green-700  ×2
--color-green-900  ×2
--color-highlight  ×1
--color-ink-100  ×1
--color-interface-panel-job-progress-border  ×2
--color-interface-panel-job-progress-primary  ×2
--color-interface-panel-job-progress-secondary  ×2
--color-jade-600  ×1
--color-muted  ×1
--color-muted-foreground  ×1
--color-neutral-100  ×2
--color-neutral-200  ×2
--color-neutral-300  ×2
--color-neutral-400  ×2
--color-neutral-500  ×2
--color-neutral-550  ×1
--color-neutral-600  ×2
--color-neutral-700  ×2
--color-neutral-800  ×2
--color-neutral-900  ×2
--color-neutral-950  ×2
--color-node-icon-disabled  ×1
--color-ocean-300  ×1
--color-ocean-600  ×1
--color-ocean-900  ×1
--color-orange-600  ×2
--color-orange-700  ×2
--color-primary-comfy-canvas  ×1
--color-primary-comfy-ink  ×1
--color-purple-600  ×2
--color-purple-700  ×2
--color-red-400  ×2
--color-red-500  ×2
--color-red-700  ×2
--color-sand-100  ×1
--color-sand-300  ×1
--color-sapphire-700  ×1
--color-smoke-100  ×1
--color-smoke-200  ×1
--color-smoke-300  ×1
--color-smoke-400  ×1
--color-smoke-500  ×1
--color-smoke-600  ×1
--color-smoke-700  ×1
--color-smoke-800  ×1
--color-teal-500  ×2
--color-white  ×1
--color-yellow-500  ×2
--color-zinc-300  ×2
--color-zinc-500  ×2
--color-zinc-800  ×2
```

## Tailwind internals (`--tw-*`) — 99

```
--tw-animation-delay  ×5
--tw-animation-direction  ×2
--tw-animation-duration  ×2
--tw-animation-fill-mode  ×2
--tw-animation-iteration-count  ×2
--tw-backdrop-blur  ×7
--tw-backdrop-brightness  ×2
--tw-backdrop-contrast  ×2
--tw-backdrop-grayscale  ×2
--tw-backdrop-hue-rotate  ×2
--tw-backdrop-invert  ×2
--tw-backdrop-opacity  ×2
--tw-backdrop-saturate  ×2
--tw-backdrop-sepia  ×2
--tw-blur  ×3
--tw-border-style  ×8
--tw-brightness  ×3
--tw-contain-layout  ×3
--tw-contain-paint  ×2
--tw-contain-size  ×4
--tw-contain-style  ×3
--tw-content  ×3
--tw-contrast  ×2
--tw-divide-y-reverse  ×3
--tw-drop-shadow  ×9
--tw-drop-shadow-alpha  ×2
--tw-drop-shadow-color  ×6
--tw-drop-shadow-size  ×7
--tw-duration  ×12
--tw-ease  ×6
--tw-enter-blur  ×2
--tw-enter-opacity  ×5
--tw-enter-rotate  ×2
--tw-enter-scale  ×6
--tw-enter-translate-x  ×8
--tw-enter-translate-y  ×6
--tw-exit-blur  ×2
--tw-exit-opacity  ×5
--tw-exit-rotate  ×2
--tw-exit-scale  ×6
--tw-exit-translate-x  ×6
--tw-exit-translate-y  ×4
--tw-font-weight  ×12
--tw-gradient-from  ×16
--tw-gradient-from-position  ×3
--tw-gradient-position  ×14
--tw-gradient-stops  ×27
--tw-gradient-to  ×14
--tw-gradient-to-position  ×3
--tw-gradient-via  ×7
--tw-gradient-via-position  ×2
--tw-gradient-via-stops  ×6
--tw-grayscale  ×3
--tw-hue-rotate  ×2
--tw-inset-ring-color  ×2
--tw-inset-ring-shadow  ×2
--tw-inset-shadow  ×2
--tw-inset-shadow-alpha  ×2
--tw-inset-shadow-color  ×2
--tw-invert  ×3
--tw-leading  ×14
--tw-numeric-figure  ×2
--tw-numeric-fraction  ×2
--tw-numeric-spacing  ×4
--tw-opacity  ×2
--tw-ordinal  ×3
--tw-outline-style  ×11
--tw-pan-x  ×2
--tw-pan-y  ×3
--tw-pinch-zoom  ×2
--tw-ring-color  ×40
--tw-ring-inset  ×4
--tw-ring-offset-color  ×7
--tw-ring-offset-shadow  ×7
--tw-ring-offset-width  ×7
--tw-ring-shadow  ×25
--tw-rotate-x  ×2
--tw-rotate-y  ×2
--tw-rotate-z  ×2
--tw-saturate  ×2
--tw-scale-x  ×24
--tw-scale-y  ×21
--tw-scale-z  ×21
--tw-scroll-snap-strictness  ×3
--tw-scrollbar-thumb  ×4
--tw-scrollbar-track  ×3
--tw-sepia  ×2
--tw-shadow  ×23
--tw-shadow-alpha  ×2
--tw-shadow-color  ×5
--tw-skew-x  ×5
--tw-skew-y  ×2
--tw-slashed-zero  ×2
--tw-space-x-reverse  ×3
--tw-space-y-reverse  ×9
--tw-tracking  ×12
--tw-translate-x  ×15
--tw-translate-y  ×19
--tw-translate-z  ×2
```

## Other semantic tokens — 153

```
--_marquee-end  ×2
--accent-background  ×2
--accent-primary  ×2
--animate-pulse  ×1
--animate-spin  ×1
--aspect-video  ×1
--backdrop  ×2
--base-background  ×2
--base-foreground  ×2
--bg-color  ×2
--blur-md  ×1
--blur-sm  ×1
--blur-xl  ×1
--border-color  ×1
--border-default  ×2
--border-subtle  ×2
--brand-blue  ×2
--brand-yellow  ×2
--breakpoint-sm  ×1
--button-active-surface  ×2
--button-hover-surface  ×2
--button-icon  ×2
--button-surface  ×2
--button-surface-contrast  ×2
--code-bg-color  ×1
--code-block-bg-color  ×1
--code-text-color  ×1
--component-node-background  ×2
--component-node-border  ×2
--component-node-foreground  ×2
--component-node-foreground-secondary  ×2
--component-node-widget-advanced  ×2
--component-node-widget-background  ×2
--component-node-widget-background-disabled  ×2
--component-node-widget-background-highlighted  ×2
--component-node-widget-background-hovered  ×2
--component-node-widget-background-selected  ×2
--component-node-widget-promoted  ×2
--container-2xl  ×1
--container-3xl  ×1
--container-4xl  ×1
--container-5xl  ×1
--container-6xl  ×1
--container-7xl  ×1
--container-lg  ×1
--container-md  ×1
--container-sm  ×1
--container-xl  ×1
--container-xs  ×1
--content-bg  ×2
--content-fg  ×2
--content-hover-bg  ×2
--content-hover-fg  ×2
--default-transition-duration  ×2
--default-transition-timing-function  ×1
--descrip-text  ×1
--destructive-background  ×2
--destructive-background-hover  ×2
--drag-text  ×1
--drop-shadow-md  ×1
--drop-shadow-xl  ×1
--ease-in  ×1
--ease-in-out  ×1
--ease-out  ×1
--error-text  ×1
--fg-color  ×2
--font-inter  ×1
--font-mono  ×1
--font-sans  ×1
--font-weight-black  ×1
--font-weight-bold  ×1
--font-weight-extrabold  ×1
--font-weight-light  ×1
--font-weight-medium  ×1
--font-weight-normal  ×1
--font-weight-semibold  ×1
--input-surface  ×2
--input-text  ×1
--inverted-background-hover  ×2
--leading-normal  ×1
--leading-relaxed  ×1
--leading-snug  ×1
--leading-tight  ×1
--muted-background  ×2
--muted-foreground  ×2
--nav-background  ×2
--primary-background  ×2
--primary-background-hover  ×2
--primary-bg  ×1
--primary-fg  ×1
--primary-hover-bg  ×1
--primary-hover-fg  ×1
--radius-2xl  ×1
--radius-3xl  ×1
--radius-4xl  ×1
--radius-lg  ×1
--radius-md  ×1
--radius-sm  ×1
--radius-xl  ×1
--secondary-background  ×2
--secondary-background-hover  ×2
--secondary-background-selected  ×2
--shadow-2xl  ×1
--shadow-lg  ×1
--shadow-md  ×1
--spacing  ×1
--subscription-button-gradient  ×1
--success-background  ×2
--svg  ×303
--tertiary-background  ×2
--tertiary-background-hover  ×2
--text-2xl  ×1
--text-2xl--line-height  ×1
--text-2xs  ×1
--text-2xs--line-height  ×1
--text-3xl  ×1
--text-3xl--line-height  ×1
--text-3xs  ×1
--text-3xs--line-height  ×1
--text-4xl  ×1
--text-4xl--line-height  ×1
--text-5xl  ×1
--text-5xl--line-height  ×1
--text-6xl  ×1
--text-6xl--line-height  ×1
--text-7xl  ×1
--text-7xl--line-height  ×1
--text-8xl  ×1
--text-8xl--line-height  ×1
--text-base  ×1
--text-base--line-height  ×1
--text-lg  ×1
--text-lg--line-height  ×1
--text-primary  ×2
--text-secondary  ×2
--text-sm  ×1
--text-sm--line-height  ×1
--text-xl  ×1
--text-xl--line-height  ×1
--text-xs  ×1
--text-xs--line-height  ×1
--tr-even-bg-color  ×1
--tr-odd-bg-color  ×1
--tracking-tight  ×1
--tracking-wide  ×1
--tracking-wider  ×1
--tracking-widest  ×1
--warning-background  ×2
--warning-background-hover  ×2
--webkit-backface-visibility  ×1
--whats-new-popup-bottom  ×1
--window-actions-spacer-width  ×1
--workflow-tabs-height  ×1
```
