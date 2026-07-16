(function(){try{var s=document.createElement("style");s.textContent=".fil-color-picker[data-v-c4d5f476]{display:flex;flex-direction:column;gap:8px;padding:8px;width:176px;box-sizing:border-box}.fil-cp-sv[data-v-c4d5f476]{position:relative;width:100%;height:100px;border-radius:4px;cursor:crosshair;touch-action:none}.fil-cp-sv-white[data-v-c4d5f476]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to right,#fff,#fff0);border-radius:4px}.fil-cp-sv-black[data-v-c4d5f476]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to top,#000,#0000);border-radius:4px}.fil-cp-sv-thumb[data-v-c4d5f476]{position:absolute;width:10px;height:10px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hue[data-v-c4d5f476]{position:relative;width:100%;height:12px;border-radius:6px;background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red);cursor:pointer;touch-action:none}.fil-cp-hue-thumb[data-v-c4d5f476]{position:absolute;top:50%;width:12px;height:12px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hex-row[data-v-c4d5f476]{display:flex;align-items:center;gap:6px}.fil-cp-swatch[data-v-c4d5f476]{width:22px;height:22px;border-radius:4px;border:1px solid rgba(255,255,255,.25);flex-shrink:0}.fil-cp-hex-input[data-v-c4d5f476]{flex:1;min-width:0;height:22px;box-sizing:border-box;border-radius:4px;border:1px solid rgba(255,255,255,.2);background:#00000040;color:#f2f2f2;font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:12px;padding:0 6px;outline:none}.fil-cp-hex-input[data-v-c4d5f476]:focus{border-color:#ffffff80}.fil-cp-presets[data-v-c4d5f476]{display:grid;grid-template-columns:repeat(5,1fr);gap:4px}.fil-color-swatch[data-v-c4d5f476]{width:24px;height:24px;border-radius:4px;border:2px solid transparent;background:var(--swatch);cursor:pointer;transition:border-color .08s,transform .08s;outline:none;box-sizing:border-box}.fil-color-swatch[data-v-c4d5f476]:hover{border-color:#ffffff80;transform:scale(1.15)}.fil-color-swatch.is-active[data-v-c4d5f476]{border-color:#fff;box-shadow:0 0 0 1px var(--swatch)}.fil-icon[data-v-dfb78d9f]{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;line-height:0}.fil-icon[data-v-dfb78d9f] svg{width:100%;height:100%}.fil-node-help-badge[data-v-3001cdba]{position:absolute;top:4px;right:4px;width:20px;height:20px;padding:0;display:flex;align-items:center;justify-content:center;border-radius:50%;border:1px solid rgba(255,255,255,.15);background:#00000040;color:var(--fil-muted, rgba(255, 255, 255, .55));cursor:pointer;outline:none;z-index:5;transition:background .08s,color .08s,border-color .08s}.fil-node-help-badge[data-v-3001cdba]:hover,.fil-node-help-badge[data-v-3001cdba]:focus-visible{background:var(--fil-accent);border-color:var(--fil-accent);color:#fff}.fil-node-shell[data-v-0fbe412b]{position:relative}.fil-modal-backdrop[data-v-00452928]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000;display:flex;align-items:center;justify-content:center;background:#0000008c;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.fil-modal-panel[data-v-00452928]{width:90%;max-height:80vh;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:10px;box-shadow:0 20px 60px #00000080;display:flex;flex-direction:column;overflow:hidden}.fil-modal-header[data-v-00452928]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08)}.fil-modal-title[data-v-00452928]{font-size:14px;font-weight:600;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-close[data-v-00452928]{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;border:none;background:transparent;color:var(--fil-muted, rgba(255, 255, 255, .5));cursor:pointer;transition:background .08s,color .08s}.fil-modal-close[data-v-00452928]:hover{background:#ffffff14;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-body[data-v-00452928]{flex:1;overflow-y:auto;padding:16px}.fil-modal-enter-active[data-v-00452928],.fil-modal-leave-active[data-v-00452928]{transition:opacity .15s ease}.fil-modal-enter-from[data-v-00452928],.fil-modal-leave-to[data-v-00452928]{opacity:0}.fil-modal-enter-active .fil-modal-panel[data-v-00452928],.fil-modal-leave-active .fil-modal-panel[data-v-00452928]{transition:transform .15s ease}.fil-modal-enter-from .fil-modal-panel[data-v-00452928],.fil-modal-leave-to .fil-modal-panel[data-v-00452928]{transform:scale(.95) translateY(8px)}.fil-help-title[data-v-536c1547]{margin:0 0 12px;font-size:16px;font-weight:700;color:var(--fil-text, rgba(255,255,255,.9))}.fil-help-body[data-v-536c1547]{margin:0 0 12px;font-size:13px;line-height:1.6;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet[data-v-536c1547]{display:flex;gap:6px;align-items:flex-start;margin-bottom:6px;font-size:13px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet>span[data-v-536c1547]{flex:1}.fil-help-table[data-v-536c1547]{width:100%;border-collapse:collapse;margin-top:8px;font-size:12px}.fil-help-table th[data-v-536c1547],.fil-help-table td[data-v-536c1547]{text-align:left;padding:6px 10px;border-bottom:1px solid rgba(255,255,255,.06)}.fil-help-table th[data-v-536c1547]{font-weight:600;color:var(--fil-text, rgba(255,255,255,.85))}.fil-help-table td[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.6))}.fil-help-code[data-v-536c1547]{background:#0000004d;border-radius:6px;padding:12px;margin-top:10px;overflow-x:auto;font-size:12px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-empty[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.4));font-size:13px}.fil-toast-stack[data-v-08cc58fa]{position:fixed;right:20px;bottom:20px;z-index:100001;display:flex;flex-direction:column;gap:8px;pointer-events:none;max-width:min(360px,90vw)}.fil-toast[data-v-08cc58fa]{pointer-events:auto;display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:8px;background:var(--fil-panel, #171b22);color:var(--fil-text, #e8edf3);border:1px solid var(--fil-panel-alt, #2a3041);border-left:3px solid var(--toast-color, var(--fil-muted));box-shadow:0 6px 22px #0000006b;font:12.5px/1.45 system-ui,sans-serif;animation:fil-toast-in-08cc58fa .18s cubic-bezier(.2,.7,.3,1)}@keyframes fil-toast-in-08cc58fa{0%{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}.fil-toast-dot[data-v-08cc58fa]{flex:none;width:8px;height:8px;margin-top:4px;border-radius:50%;background:var(--toast-color, var(--fil-muted))}.fil-toast-text[data-v-08cc58fa]{flex:1;min-width:0;align-self:center}.fil-toast-action[data-v-08cc58fa]{flex:none;cursor:pointer;padding:4px 8px;border-radius:4px;background:#ffffff0f;color:inherit;border:none;font:inherit;transition:background .12s}.fil-toast-action[data-v-08cc58fa]:hover{background:#ffffff24}.fil-toast-close[data-v-08cc58fa]{flex:none;align-self:flex-start;cursor:pointer;width:18px;height:18px;padding:0;border:none;background:none;color:var(--fil-muted);opacity:.6;transition:opacity .12s;font-size:16px;line-height:18px}.fil-toast-close[data-v-08cc58fa]:hover{opacity:1}.fil-w-btn[data-v-fff84608]{box-sizing:border-box;padding:var(--fil-row-pad);border-radius:6px;background:#ffffff0d;border:1px solid rgba(255,255,255,.14);color:var(--fil-text, rgba(255, 255, 255, .85));font-family:ui-sans-serif,system-ui,sans-serif;font-size:12px;cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;display:inline-flex;align-items:center;justify-content:center;gap:6px}.fil-w-btn[data-v-fff84608]:hover:not(:disabled){background:var(--fil-accent);border-color:var(--fil-accent);color:#fff}.fil-w-btn[data-v-fff84608]:active{transform:translateY(1px)}.fil-w-btn[data-v-fff84608]:disabled{opacity:.4;cursor:default}.fil-w-btn-accent[data-v-fff84608]{background:var(--fil-accent);border-color:var(--fil-accent);color:#fff}.fil-w-btn-danger[data-v-fff84608]{color:var(--fil-danger, #ef6666)}.fil-w-btn-danger[data-v-fff84608]:hover:not(:disabled){background:var(--fil-danger, #ef6666);border-color:var(--fil-danger, #ef6666);color:#fff}.fil-w-btn-sm[data-v-fff84608]{padding:4px 8px;font-size:11px}.fil-w-btn-full[data-v-fff84608]{width:100%;display:block}.fil-w-btn-icon[data-v-fff84608]{display:inline-flex;align-items:center;justify-content:center;gap:5px}.fil-w-btn-glyph[data-v-fff84608] svg{width:14px;height:14px}.fil-w-btn.is-flashing[data-v-fff84608],.fil-w-btn.is-flashing[data-v-fff84608]:hover{background:var(--fil-ok, #62c987);border-color:var(--fil-ok, #62c987);color:#fff}.fil-w-btn.is-loading[data-v-fff84608]{cursor:wait}.fil-w-btn[data-v-fff84608]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-btn-spinner[data-v-fff84608]{display:inline-block;width:12px;height:12px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:fil-w-spin-fff84608 .6s linear infinite}@keyframes fil-w-spin-fff84608{to{transform:rotate(360deg)}}.fil-pm-root[data-v-0de4d738]{display:flex;flex-direction:column;gap:12px;padding:4px 0}.fil-pm-card[data-v-0de4d738]{background:#ffffff08;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:12px}.fil-pm-header[data-v-0de4d738]{display:flex;align-items:center;gap:8px;margin-bottom:10px}.fil-pm-icon[data-v-0de4d738]{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:6px;background:var(--fil-accent, #7c5cfc);color:#fff;font-size:11px;font-weight:700;font-family:ui-monospace,monospace}.fil-pm-name[data-v-0de4d738]{font-weight:600;font-size:14px;color:var(--fil-text, #f2f2f2)}.fil-pm-disp[data-v-0de4d738]{font-size:11px;color:#ffffff80}.fil-pm-fields[data-v-0de4d738]{display:flex;flex-direction:column;gap:8px;margin-bottom:10px}.fil-pm-field[data-v-0de4d738]{display:flex;flex-direction:column;gap:3px}.fil-pm-field-label[data-v-0de4d738]{font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#ffffff80}.fil-pm-input[data-v-0de4d738]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,monospace;font-size:13px;outline:none;transition:border-color .08s}.fil-pm-input[data-v-0de4d738]:focus{border-color:var(--fil-accent)}.fil-pm-input.fil-pm-has-val[data-v-0de4d738]{border-color:var(--fil-muted, #555)}.fil-pm-actions[data-v-0de4d738]{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}.fil-pm-models[data-v-0de4d738]{display:flex;flex-wrap:wrap;gap:4px}.fil-pm-model-tag[data-v-0de4d738]{display:inline-flex;align-items:center;gap:3px;background:#ffffff12;border-radius:4px;padding:2px 6px;font-size:11px;color:#ffffffbf;white-space:nowrap}.fil-pm-vision-badge[data-v-0de4d738]{font-size:10px;line-height:1}.fil-pm-err[data-v-0de4d738]{font-size:11px;color:var(--fil-danger, #ef6666);margin-top:4px}.fil-pm-age[data-v-0de4d738]{font-size:10px;color:#fff6;align-self:center}.fil-w-info[data-v-851660c1]{font-size:11px;line-height:1.5;color:#ffffff73;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.fil-w-info[data-ok][data-v-851660c1]{color:var(--fil-ok, #62c987)}.fil-w-info[data-err][data-v-851660c1]{color:var(--fil-danger, #ef6666)}.fil-seed-root[data-v-8cb48b03]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-seed-readout[data-v-8cb48b03]{display:flex;flex-direction:column;gap:4px}.fil-seed-display[data-v-8cb48b03]{width:100%;box-sizing:border-box;height:34px;background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);padding:6px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:19px;text-align:center;outline:none;transition:border-color .08s}.fil-seed-display[data-v-8cb48b03]:focus{border-color:var(--fil-accent)}.fil-seed-display[readonly][data-v-8cb48b03]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-seed-actions[data-v-8cb48b03]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px}.fil-combo[data-v-39d4212e]{display:flex;flex-direction:column;gap:4px;width:100%}.fil-combo-label[data-v-39d4212e]{font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-combo-trigger[data-v-39d4212e]{width:100%;box-sizing:border-box;height:30px;display:flex;align-items:center;gap:6px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer;text-align:left;-moz-appearance:none;appearance:none;-webkit-appearance:none}.fil-combo-trigger.open[data-v-39d4212e],.fil-combo-trigger[data-v-39d4212e]:focus-visible{border-color:var(--fil-accent);outline:2px solid var(--fil-accent);outline-offset:1px}.fil-combo-trigger.disabled[data-v-39d4212e]{opacity:.5;cursor:default}.fil-combo-trigger-label[data-v-39d4212e]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-chevron[data-v-39d4212e]{font-size:9px;color:var(--fil-muted, rgba(255, 255, 255, .5));flex-shrink:0}.fil-combo-badge[data-v-39d4212e]{flex-shrink:0;font-size:9px;line-height:1;padding:2px 5px;border-radius:999px;background:var(--fil-accent);color:#fff;font-weight:600}.fil-combo-panel[data-v-39d4212e]{position:fixed;z-index:10001;box-sizing:border-box;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:8px;box-shadow:0 12px 32px #0006;display:flex;flex-direction:column;overflow:hidden;padding:6px}.fil-combo-search[data-v-39d4212e]{box-sizing:border-box;width:100%;margin-bottom:6px;padding:6px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-combo-search[data-v-39d4212e]:focus{border-color:var(--fil-accent)}.fil-combo-list[data-v-39d4212e]{display:flex;flex-direction:column;gap:2px;max-height:240px;overflow-y:auto}.fil-combo-option[data-v-39d4212e]{display:flex;align-items:center;gap:6px;width:100%;box-sizing:border-box;padding:6px 8px;border-radius:5px;border:none;background:transparent;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;text-align:left;cursor:pointer;outline:none}.fil-combo-option.active[data-v-39d4212e]{background:#ffffff14}.fil-combo-option.selected[data-v-39d4212e]{color:var(--fil-accent);font-weight:600}.fil-combo-option-label[data-v-39d4212e]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-empty[data-v-39d4212e]{padding:10px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-w-num[data-v-b9154493]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:14px;text-align:left;outline:none;transition:border-color .08s}.fil-w-num[data-v-b9154493]:focus{border-color:var(--fil-accent)}.fil-w-num[data-v-b9154493]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-num[data-v-b9154493]:disabled{opacity:.5}.fil-w-slider[data-v-b98a8a08]{display:flex;flex-direction:column;gap:4px;width:100%}.fil-w-slider-label[data-v-b98a8a08]{font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-slider-row[data-v-b98a8a08]{display:flex;align-items:center;gap:6px}.fil-w-slider-range[data-v-b98a8a08]{flex:1;accent-color:var(--fil-accent);cursor:pointer}.fil-w-slider-range[data-v-b98a8a08]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-slider-row[data-v-b98a8a08] .fil-w-num{width:70px;flex:none}.fil-provider-root[data-v-eaffa953]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;min-width:0}.fil-w-label[data-v-eaffa953]{font-size:10px;color:var(--fil-muted, rgba(255,255,255,.55));margin-top:2px}.fil-provider-row[data-v-eaffa953]{display:flex;gap:4px;align-items:stretch;min-width:0}.fil-provider-row[data-v-eaffa953] .fil-combo{flex:1;min-width:0}.fil-model-filter-bar[data-v-eaffa953]{display:flex;align-items:center;gap:4px;min-width:0}.fil-model-filter-wrap[data-v-eaffa953]{flex:1;min-width:0}.fil-model-filter[data-v-eaffa953]{width:100%;box-sizing:border-box;height:24px;background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);padding:2px 6px;color:var(--fil-text, #e8edf3);font-family:inherit;font-size:11px;outline:none}.fil-model-filter[data-v-eaffa953]:focus{border-color:var(--fil-accent)}.fil-model-count[data-v-eaffa953]{font-size:9px;color:var(--fil-muted, rgba(255,255,255,.45));white-space:nowrap;flex-shrink:0}.fil-w-chips[data-v-3c07d909]{display:grid;gap:5px;width:100%}.fil-w-chip[data-v-3c07d909]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-3c07d909]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-3c07d909]{background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-accent);border-color:var(--fil-accent);font-weight:500;box-shadow:0 0 8px color-mix(in srgb,var(--fil-accent) 55%,transparent)}.fil-w-chip.disabled[data-v-3c07d909]{opacity:.5;cursor:default}.fil-w-chip[data-v-3c07d909]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chiplist[data-v-8b6ca087]{display:flex;flex-direction:column;gap:5px;width:100%}.fil-w-search[data-v-8b6ca087]{box-sizing:border-box;width:100%;padding:5px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:11px;outline:none}.fil-w-search[data-v-8b6ca087]:focus{border-color:var(--fil-accent)}.fil-w-search[data-v-8b6ca087]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-chip-scroll[data-v-8b6ca087]{display:grid;gap:3px;max-height:200px;overflow-y:auto;overflow-x:hidden;padding-right:2px}.fil-w-chip-scroll[data-v-8b6ca087]::-webkit-scrollbar{width:5px}.fil-w-chip-scroll[data-v-8b6ca087]::-webkit-scrollbar-thumb{background:var(--fil-muted, #555);border-radius:3px}.fil-w-chip-scroll[data-v-8b6ca087]::-webkit-scrollbar-track{background:transparent}.fil-w-chip[data-v-8b6ca087]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-8b6ca087]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-8b6ca087]{background:var(--fil-accent);color:#fff;border-color:var(--fil-accent);font-weight:500}.fil-w-chip.disabled[data-v-8b6ca087]{opacity:.5;cursor:default}.fil-w-chip[data-v-8b6ca087]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chip-empty[data-v-8b6ca087]{padding:8px;text-align:center;color:var(--fil-muted, #666);font-size:11px}.fil-w-segmented[data-v-163eefcf]{display:flex;flex-direction:column;gap:4px;width:100%}.fil-w-segmented-label[data-v-163eefcf]{font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-pill[data-v-163eefcf]{display:flex;gap:0;background:#ffffff0f;border-radius:7px;padding:3px}.fil-w-pill.disabled[data-v-163eefcf]{opacity:.5}.fil-w-seg[data-v-163eefcf]{flex:1;text-align:center;padding:6px;border:none;border-radius:5px;background:transparent;font-family:inherit;font-size:12px;color:var(--fil-muted, rgba(255, 255, 255, .55));cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s}.fil-w-seg[data-v-163eefcf]:hover:not(.active){color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-w-seg.active[data-v-163eefcf]{background:var(--fil-accent);color:#fff;font-weight:500}.fil-w-seg[data-v-163eefcf]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-section[data-v-686d0388]{box-sizing:border-box;width:100%;padding:var(--fil-row-pad);border:none;border-radius:5px;background:#ffffff0a;color:var(--fil-muted, rgba(255, 255, 255, .7));font-family:inherit;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;cursor:pointer;text-align:left;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s;display:flex;align-items:center;gap:6px}.fil-w-section[data-v-686d0388]:hover:not(:disabled){background:#ffffff14;color:#fff}.fil-w-section[data-v-686d0388]:disabled{cursor:default}.fil-w-section[data-v-686d0388]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-section-arrow[data-v-686d0388]{display:inline-block;width:8px;font-size:9px;color:var(--fil-accent)}.fil-style-picker[data-v-6e196d1e]{display:flex;flex-direction:column;gap:10px}.fil-style-cats[data-v-6e196d1e]{display:flex;flex-wrap:wrap;gap:6px}.fil-style-cat[data-v-6e196d1e]{box-sizing:border-box;padding:5px 10px;border-radius:999px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .2));background:#ffffff0a;color:var(--fil-text, rgba(255, 255, 255, .8));font-size:11px;cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-cat[data-v-6e196d1e]:hover{border-color:var(--fil-accent)}.fil-style-cat.active[data-v-6e196d1e]{background:var(--fil-accent);border-color:var(--fil-accent);color:#fff;font-weight:500}.fil-style-cat[data-v-6e196d1e]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-style-search[data-v-6e196d1e]{box-sizing:border-box;width:100%;padding:7px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-style-search[data-v-6e196d1e]:focus{border-color:var(--fil-accent)}.fil-style-grid[data-v-6e196d1e]{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:8px;max-height:50vh;overflow-y:auto;padding-right:2px}.fil-style-tile[data-v-6e196d1e]{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px 6px;border-radius:8px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .14));background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-tile[data-v-6e196d1e]:hover{border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-style-tile.active[data-v-6e196d1e]{border-color:var(--fil-accent);background:#f68a4524}.fil-style-tile[data-v-6e196d1e]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-style-tile-preview[data-v-6e196d1e]{width:100%;aspect-ratio:1;border-radius:6px;background:#ffffff0d;display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:22px}.fil-style-tile-img[data-v-6e196d1e]{width:100%;height:100%;object-fit:cover}.fil-style-tile-label[data-v-6e196d1e]{font-size:10px;text-align:center;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.fil-style-empty[data-v-6e196d1e]{grid-column:1 / -1;padding:20px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-scanner-root[data-v-d2fa2aea]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;width:100%;box-sizing:border-box;min-width:0}.fil-section-block[data-v-d2fa2aea]{display:flex;flex-direction:column;gap:5px;min-width:0}.fil-w-row[data-v-d2fa2aea]{display:flex;flex-direction:column;gap:3px;min-width:0}.fil-w-textarea[data-v-d2fa2aea],.fil-w-input[data-v-d2fa2aea]{width:100%;box-sizing:border-box;background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);color:var(--fil-text, #a0c4ff);padding:var(--fil-row-pad);font-size:12px;font-family:inherit;outline:none;transition:border-color .08s}.fil-w-textarea[data-v-d2fa2aea]{min-height:56px;resize:vertical}.fil-w-textarea[data-v-d2fa2aea]:focus,.fil-w-input[data-v-d2fa2aea]:focus{border-color:var(--fil-accent)}.fil-style-pair-row[data-v-d2fa2aea]{display:flex;gap:4px;min-width:0}.fil-style-pair-item[data-v-d2fa2aea]{flex:1;min-width:0}.fil-scanner-seed[data-v-d2fa2aea]{display:flex;flex-direction:column;gap:4px;padding-top:3px;border-top:1px solid rgba(255,255,255,.08);min-width:0}.fil-scanner-seed-row[data-v-d2fa2aea]{display:flex;gap:6px;min-width:0}.fil-scanner-seed-field[data-v-d2fa2aea]{flex:1.3;min-width:0;box-sizing:border-box;height:34px;background:#00000059;border:1px solid rgba(255,255,255,.08);border-radius:var(--fil-pill-radius);padding:0 12px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:13px;text-align:center;outline:none;transition:border-color .08s}.fil-scanner-seed-field[data-v-d2fa2aea]:focus{border-color:var(--fil-accent)}.fil-scanner-seed-field.is-random[data-v-d2fa2aea]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-scanner-seed-pill[data-v-d2fa2aea]{flex:1;min-width:0;box-sizing:border-box;height:34px;padding:0 8px;border-radius:var(--fil-pill-radius);border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-text, #e8edf3);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-scanner-seed-pill[data-v-d2fa2aea]:hover{background:#ffffff1f}.fil-scanner-seed-pill.active[data-v-d2fa2aea]{background:#ffffff29;border-color:#fff3}.fil-scanner-seed-pill[data-v-d2fa2aea]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-scanner-seed-pill-accent[data-v-d2fa2aea]{background:var(--fil-accent);border-color:var(--fil-accent);color:#241206;font-weight:700}.fil-scanner-seed-pill-accent[data-v-d2fa2aea]:hover{filter:brightness(1.08);background:var(--fil-accent)}.fil-cleaner-root[data-v-a4947bd0]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cleaner-row[data-v-a4947bd0]{all:unset;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:var(--fil-row-pad);border-radius:var(--fil-field-radius);border:1px solid var(--fil-glass-border);background:var(--fil-glass-bg);cursor:pointer;-webkit-user-select:none;user-select:none;transition:background .08s,border-color .08s}.fil-cleaner-row[data-v-a4947bd0]:hover{background:#ffffff14}.fil-cleaner-row.active[data-v-a4947bd0]{border-color:var(--fil-accent);background:#f68a451f}.fil-cleaner-dot[data-v-a4947bd0]{width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,.3);flex:none;transition:border-color .08s,background .08s;display:flex;align-items:center;justify-content:center}.fil-cleaner-dot[data-v-a4947bd0]:after{content:\"✓\";font-size:10px;line-height:1;color:#fff;opacity:0;transition:opacity .08s}.fil-cleaner-row.active .fil-cleaner-dot[data-v-a4947bd0]{background:var(--fil-accent);border-color:var(--fil-accent)}.fil-cleaner-row.active .fil-cleaner-dot[data-v-a4947bd0]:after{opacity:1}.fil-cleaner-label[data-v-a4947bd0]{flex:1;font-size:12px}.fil-cmp-root[data-v-c2d7a75d]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cmp-canvas-wrap[data-v-c2d7a75d]{position:relative;width:100%;height:220px;border-radius:var(--fil-field-radius);border:1px solid var(--fil-glass-border);overflow:hidden;background:linear-gradient(45deg,rgba(255,255,255,.04) 25%,transparent 25%,transparent 75%,rgba(255,255,255,.04) 75%) 0 0/16px 16px,linear-gradient(45deg,rgba(255,255,255,.04) 25%,transparent 25%,transparent 75%,rgba(255,255,255,.04) 75%) 8px 8px/16px 16px,#0d0f13}.fil-cmp-canvas[data-v-c2d7a75d]{display:block;width:100%;height:100%;touch-action:none}.fil-cmp-canvas.is-wipe[data-v-c2d7a75d]{cursor:ew-resize}.fil-cmp-placeholder[data-v-c2d7a75d]{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;text-align:center;padding:12px;color:var(--fil-muted, rgba(255, 255, 255, .5));font-size:12px;pointer-events:none}.fil-cmp-save-row[data-v-c2d7a75d]{display:grid;grid-template-columns:1fr 1fr;gap:5px}.fil-cmp-settings[data-v-c2d7a75d]{display:flex;flex-direction:column;gap:5px}.fil-up-root[data-v-626d73da]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-up-row[data-v-626d73da]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(48px,1fr) minmax(auto,max-content) minmax(48px,1fr);align-items:center;gap:var(--fil-node-gap)}.fil-w-label[data-v-626d73da]{font-size:11px;color:var(--fil-muted, rgba(255,255,255,.55))}.fil-w-select[data-v-bf2ff33c]{display:flex;flex-direction:column;gap:4px;width:100%}.fil-w-select-label[data-v-bf2ff33c]{font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-select-input[data-v-bf2ff33c]{width:100%;box-sizing:border-box;height:30px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer}.fil-w-select-input[data-v-bf2ff33c]:focus{border-color:var(--fil-accent)}.fil-w-select-input[data-v-bf2ff33c]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-select-input[data-v-bf2ff33c]:disabled{opacity:.5;cursor:default}.fil-hrf-root[data-v-3df9955a]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-hrf-row[data-v-3df9955a]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(48px,1fr) minmax(auto,max-content) minmax(48px,1fr);align-items:center;gap:var(--fil-node-gap)}.fil-w-label[data-v-3df9955a]{font-size:11px;color:var(--fil-muted, rgba(255,255,255,.55))}\n";document.head.appendChild(s);}catch(e){}})();
import { app as sl } from "/scripts/app.js";
/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function No(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const xe = {}, pn = [], _t = () => {
}, ol = () => !1, Es = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ts = (e) => e.startsWith("onUpdate:"), Te = Object.assign, $o = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ha = Object.prototype.hasOwnProperty, _e = (e, t) => Ha.call(e, t), te = Array.isArray, mn = (e) => Qn(e) === "[object Map]", Os = (e) => Qn(e) === "[object Set]", ni = (e) => Qn(e) === "[object Date]", ce = (e) => typeof e == "function", Me = (e) => typeof e == "string", Qe = (e) => typeof e == "symbol", ge = (e) => e !== null && typeof e == "object", il = (e) => (ge(e) || ce(e)) && ce(e.then) && ce(e.catch), ll = Object.prototype.toString, Qn = (e) => ll.call(e), Ua = (e) => Qn(e).slice(8, -1), al = (e) => Qn(e) === "[object Object]", Rs = (e) => Me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Tn = /* @__PURE__ */ No(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ps = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ja = /-\w/g, Ge = Ps(
  (e) => e.replace(ja, (t) => t.slice(1).toUpperCase())
), Wa = /\B([A-Z])/g, Bt = Ps(
  (e) => e.replace(Wa, "-$1").toLowerCase()
), Ns = Ps((e) => e.charAt(0).toUpperCase() + e.slice(1)), Qs = Ps(
  (e) => e ? `on${Ns(e)}` : ""
), ht = (e, t) => !Object.is(e, t), ps = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, rl = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, $s = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, za = (e) => {
  const t = Me(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let si;
const Vs = () => si || (si = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ze(e) {
  if (te(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = Me(s) ? Xa(s) : ze(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (Me(e) || ge(e))
    return e;
}
const Ga = /;(?![^(]*\))/g, Ka = /:([^]+)/, qa = /\/\*[^]*?\*\//g;
function Xa(e) {
  const t = {};
  return e.replace(qa, "").split(Ga).forEach((n) => {
    if (n) {
      const s = n.split(Ka);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Le(e) {
  let t = "";
  if (Me(e))
    t = e;
  else if (te(e))
    for (let n = 0; n < e.length; n++) {
      const s = Le(e[n]);
      s && (t += s + " ");
    }
  else if (ge(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ya = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ja = /* @__PURE__ */ No(Ya);
function cl(e) {
  return !!e || e === "";
}
function Qa(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Zn(e[s], t[s]);
  return n;
}
function Zn(e, t) {
  if (e === t) return !0;
  let n = ni(e), s = ni(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Qe(e), s = Qe(t), n || s)
    return e === t;
  if (n = te(e), s = te(t), n || s)
    return n && s ? Qa(e, t) : !1;
  if (n = ge(e), s = ge(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const l in e) {
      const a = e.hasOwnProperty(l), r = t.hasOwnProperty(l);
      if (a && !r || !a && r || !Zn(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Za(e, t) {
  return e.findIndex((n) => Zn(n, t));
}
const ul = (e) => !!(e && e.__v_isRef === !0), Z = (e) => Me(e) ? e : e == null ? "" : te(e) || ge(e) && (e.toString === ll || !ce(e.toString)) ? ul(e) ? Z(e.value) : JSON.stringify(e, dl, 2) : String(e), dl = (e, t) => ul(t) ? dl(e, t.value) : mn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[Zs(s, i) + " =>"] = o, n),
    {}
  )
} : Os(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Zs(n))
} : Qe(t) ? Zs(t) : ge(t) && !te(t) && !al(t) ? String(t) : t, Zs = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Qe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ee;
class fl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ee && (Ee.active ? (this.parent = Ee, this.index = (Ee.scopes || (Ee.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ee;
      try {
        return Ee = this, t();
      } finally {
        Ee = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ee, Ee = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ee === this)
        Ee = this.prevScope;
      else {
        let t = Ee;
        for (; t; ) {
          if (t.prevScope === this) {
            t.prevScope = this.prevScope;
            break;
          }
          t = t.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function pl(e) {
  return new fl(e);
}
function ml() {
  return Ee;
}
function er(e, t = !1) {
  Ee && Ee.cleanups.push(e);
}
let Ce;
const eo = /* @__PURE__ */ new WeakSet();
class hl {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ee && (Ee.active ? Ee.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, eo.has(this) && (eo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || _l(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, oi(this), bl(this);
    const t = Ce, n = lt;
    Ce = this, lt = !0;
    try {
      return this.fn();
    } finally {
      vl(this), Ce = t, lt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ho(t);
      this.deps = this.depsTail = void 0, oi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? eo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    _o(this) && this.run();
  }
  get dirty() {
    return _o(this);
  }
}
let gl = 0, On, Rn;
function _l(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Rn, Rn = e;
    return;
  }
  e.next = On, On = e;
}
function Vo() {
  gl++;
}
function Bo() {
  if (--gl > 0)
    return;
  if (Rn) {
    let t = Rn;
    for (Rn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; On; ) {
    let t = On;
    for (On = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function bl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function vl(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Ho(s), tr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function _o(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (yl(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function yl(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Wn) || (e.globalVersion = Wn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !_o(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Ce, s = lt;
  Ce = e, lt = !0;
  try {
    bl(e);
    const o = e.fn(e._value);
    (t.version === 0 || ht(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Ce = n, lt = s, vl(e), e.flags &= -3;
  }
}
function Ho(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Ho(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function tr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let lt = !0;
const wl = [];
function yt() {
  wl.push(lt), lt = !1;
}
function wt() {
  const e = wl.pop();
  lt = e === void 0 ? !0 : e;
}
function oi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Ce;
    Ce = void 0;
    try {
      t();
    } finally {
      Ce = n;
    }
  }
}
let Wn = 0;
class nr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Uo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Ce || !lt || Ce === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ce)
      n = this.activeLink = new nr(Ce, this), Ce.deps ? (n.prevDep = Ce.depsTail, Ce.depsTail.nextDep = n, Ce.depsTail = n) : Ce.deps = Ce.depsTail = n, xl(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Ce.depsTail, n.nextDep = void 0, Ce.depsTail.nextDep = n, Ce.depsTail = n, Ce.deps === n && (Ce.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Wn++, this.notify(t);
  }
  notify(t) {
    Vo();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Bo();
    }
  }
}
function xl(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        xl(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const _s = /* @__PURE__ */ new WeakMap(), en = /* @__PURE__ */ Symbol(
  ""
), bo = /* @__PURE__ */ Symbol(
  ""
), zn = /* @__PURE__ */ Symbol(
  ""
);
function Ve(e, t, n) {
  if (lt && Ce) {
    let s = _s.get(e);
    s || _s.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Uo()), o.map = s, o.key = n), o.track();
  }
}
function Lt(e, t, n, s, o, i) {
  const l = _s.get(e);
  if (!l) {
    Wn++;
    return;
  }
  const a = (r) => {
    r && r.trigger();
  };
  if (Vo(), t === "clear")
    l.forEach(a);
  else {
    const r = te(e), u = r && Rs(n);
    if (r && n === "length") {
      const c = Number(s);
      l.forEach((d, f) => {
        (f === "length" || f === zn || !Qe(f) && f >= c) && a(d);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && a(l.get(n)), u && a(l.get(zn)), t) {
        case "add":
          r ? u && a(l.get("length")) : (a(l.get(en)), mn(e) && a(l.get(bo)));
          break;
        case "delete":
          r || (a(l.get(en)), mn(e) && a(l.get(bo)));
          break;
        case "set":
          mn(e) && a(l.get(en));
          break;
      }
  }
  Bo();
}
function sr(e, t) {
  const n = _s.get(e);
  return n && n.get(t);
}
function un(e) {
  const t = /* @__PURE__ */ pe(e);
  return t === e ? t : (Ve(t, "iterate", zn), /* @__PURE__ */ Je(e) ? t : t.map(at));
}
function Bs(e) {
  return Ve(e = /* @__PURE__ */ pe(e), "iterate", zn), e;
}
function pt(e, t) {
  return /* @__PURE__ */ At(e) ? bn(/* @__PURE__ */ bt(e) ? at(t) : t) : at(t);
}
const or = {
  __proto__: null,
  [Symbol.iterator]() {
    return to(this, Symbol.iterator, (e) => pt(this, e));
  },
  concat(...e) {
    return un(this).concat(
      ...e.map((t) => te(t) ? un(t) : t)
    );
  },
  entries() {
    return to(this, "entries", (e) => (e[1] = pt(this, e[1]), e));
  },
  every(e, t) {
    return xt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return xt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => pt(this, s)),
      arguments
    );
  },
  find(e, t) {
    return xt(
      this,
      "find",
      e,
      t,
      (n) => pt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return xt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return xt(
      this,
      "findLast",
      e,
      t,
      (n) => pt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return xt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return xt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return no(this, "includes", e);
  },
  indexOf(...e) {
    return no(this, "indexOf", e);
  },
  join(e) {
    return un(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return no(this, "lastIndexOf", e);
  },
  map(e, t) {
    return xt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Fn(this, "pop");
  },
  push(...e) {
    return Fn(this, "push", e);
  },
  reduce(e, ...t) {
    return ii(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ii(this, "reduceRight", e, t);
  },
  shift() {
    return Fn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return xt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Fn(this, "splice", e);
  },
  toReversed() {
    return un(this).toReversed();
  },
  toSorted(e) {
    return un(this).toSorted(e);
  },
  toSpliced(...e) {
    return un(this).toSpliced(...e);
  },
  unshift(...e) {
    return Fn(this, "unshift", e);
  },
  values() {
    return to(this, "values", (e) => pt(this, e));
  }
};
function to(e, t, n) {
  const s = Bs(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ Je(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = n(i.value)), i;
  }), o;
}
const ir = Array.prototype;
function xt(e, t, n, s, o, i) {
  const l = Bs(e), a = l !== e && !/* @__PURE__ */ Je(e), r = l[t];
  if (r !== ir[t]) {
    const d = r.apply(e, i);
    return a ? at(d) : d;
  }
  let u = n;
  l !== e && (a ? u = function(d, f) {
    return n.call(this, pt(e, d), f, e);
  } : n.length > 2 && (u = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const c = r.call(l, u, s);
  return a && o ? o(c) : c;
}
function ii(e, t, n, s) {
  const o = Bs(e), i = o !== e && !/* @__PURE__ */ Je(e);
  let l = n, a = !1;
  o !== e && (i ? (a = s.length === 0, l = function(u, c, d) {
    return a && (a = !1, u = pt(e, u)), n.call(this, u, pt(e, c), d, e);
  }) : n.length > 3 && (l = function(u, c, d) {
    return n.call(this, u, c, d, e);
  }));
  const r = o[t](l, ...s);
  return a ? pt(e, r) : r;
}
function no(e, t, n) {
  const s = /* @__PURE__ */ pe(e);
  Ve(s, "iterate", zn);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Hs(n[0]) ? (n[0] = /* @__PURE__ */ pe(n[0]), s[t](...n)) : o;
}
function Fn(e, t, n = []) {
  yt(), Vo();
  const s = (/* @__PURE__ */ pe(e))[t].apply(e, n);
  return Bo(), wt(), s;
}
const lr = /* @__PURE__ */ No("__proto__,__v_isRef,__isVue"), Sl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qe)
);
function ar(e) {
  Qe(e) || (e = String(e));
  const t = /* @__PURE__ */ pe(this);
  return Ve(t, "has", e), t.hasOwnProperty(e);
}
class Cl {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (o ? i ? _r : Il : i ? Ll : Ml).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = te(t);
    if (!o) {
      let r;
      if (l && (r = or[n]))
        return r;
      if (n === "hasOwnProperty")
        return ar;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ he(t) ? t : s
    );
    if ((Qe(n) ? Sl.has(n) : lr(n)) || (o || Ve(t, "get", n), i))
      return a;
    if (/* @__PURE__ */ he(a)) {
      const r = l && Rs(n) ? a : a.value;
      return o && ge(r) ? /* @__PURE__ */ bs(r) : r;
    }
    return ge(a) ? o ? /* @__PURE__ */ bs(a) : /* @__PURE__ */ on(a) : a;
  }
}
class Fl extends Cl {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    const l = te(t) && Rs(n);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ At(i);
      if (!/* @__PURE__ */ Je(s) && !/* @__PURE__ */ At(s) && (i = /* @__PURE__ */ pe(i), s = /* @__PURE__ */ pe(s)), !l && /* @__PURE__ */ he(i) && !/* @__PURE__ */ he(s))
        return u || (i.value = s), !0;
    }
    const a = l ? Number(n) < t.length : _e(t, n), r = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ he(t) ? t : o
    );
    return t === /* @__PURE__ */ pe(o) && r && (a ? ht(s, i) && Lt(t, "set", n, s) : Lt(t, "add", n, s)), r;
  }
  deleteProperty(t, n) {
    const s = _e(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && Lt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Qe(n) || !Sl.has(n)) && Ve(t, "has", n), s;
  }
  ownKeys(t) {
    return Ve(
      t,
      "iterate",
      te(t) ? "length" : en
    ), Reflect.ownKeys(t);
  }
}
class rr extends Cl {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const cr = /* @__PURE__ */ new Fl(), ur = /* @__PURE__ */ new rr(), dr = /* @__PURE__ */ new Fl(!0);
const vo = (e) => e, os = (e) => Reflect.getPrototypeOf(e);
function fr(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = /* @__PURE__ */ pe(o), l = mn(i), a = e === "entries" || e === Symbol.iterator && l, r = e === "keys" && l, u = o[e](...s), c = n ? vo : t ? bn : at;
    return !t && Ve(
      i,
      "iterate",
      r ? bo : en
    ), Te(
      // inheriting all iterator properties
      Object.create(u),
      {
        // iterator protocol
        next() {
          const { value: d, done: f } = u.next();
          return f ? { value: d, done: f } : {
            value: a ? [c(d[0]), c(d[1])] : c(d),
            done: f
          };
        }
      }
    );
  };
}
function is(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function pr(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ pe(i), a = /* @__PURE__ */ pe(o);
      e || (ht(o, a) && Ve(l, "get", o), Ve(l, "get", a));
      const { has: r } = os(l), u = t ? vo : e ? bn : at;
      if (r.call(l, o))
        return u(i.get(o));
      if (r.call(l, a))
        return u(i.get(a));
      i !== l && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Ve(/* @__PURE__ */ pe(o), "iterate", en), o.size;
    },
    has(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ pe(i), a = /* @__PURE__ */ pe(o);
      return e || (ht(o, a) && Ve(l, "has", o), Ve(l, "has", a)), o === a ? i.has(o) : i.has(o) || i.has(a);
    },
    forEach(o, i) {
      const l = this, a = l.__v_raw, r = /* @__PURE__ */ pe(a), u = t ? vo : e ? bn : at;
      return !e && Ve(r, "iterate", en), a.forEach((c, d) => o.call(i, u(c), u(d), l));
    }
  };
  return Te(
    n,
    e ? {
      add: is("add"),
      set: is("set"),
      delete: is("delete"),
      clear: is("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ pe(this), l = os(i), a = /* @__PURE__ */ pe(o), r = !t && !/* @__PURE__ */ Je(o) && !/* @__PURE__ */ At(o) ? a : o;
        return l.has.call(i, r) || ht(o, r) && l.has.call(i, o) || ht(a, r) && l.has.call(i, a) || (i.add(r), Lt(i, "add", r, r)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ Je(i) && !/* @__PURE__ */ At(i) && (i = /* @__PURE__ */ pe(i));
        const l = /* @__PURE__ */ pe(this), { has: a, get: r } = os(l);
        let u = a.call(l, o);
        u || (o = /* @__PURE__ */ pe(o), u = a.call(l, o));
        const c = r.call(l, o);
        return l.set(o, i), u ? ht(i, c) && Lt(l, "set", o, i) : Lt(l, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ pe(this), { has: l, get: a } = os(i);
        let r = l.call(i, o);
        r || (o = /* @__PURE__ */ pe(o), r = l.call(i, o)), a && a.call(i, o);
        const u = i.delete(o);
        return r && Lt(i, "delete", o, void 0), u;
      },
      clear() {
        const o = /* @__PURE__ */ pe(this), i = o.size !== 0, l = o.clear();
        return i && Lt(
          o,
          "clear",
          void 0,
          void 0
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = fr(o, e, t);
  }), n;
}
function jo(e, t) {
  const n = pr(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    _e(n, o) && o in s ? n : s,
    o,
    i
  );
}
const mr = {
  get: /* @__PURE__ */ jo(!1, !1)
}, hr = {
  get: /* @__PURE__ */ jo(!1, !0)
}, gr = {
  get: /* @__PURE__ */ jo(!0, !1)
};
const Ml = /* @__PURE__ */ new WeakMap(), Ll = /* @__PURE__ */ new WeakMap(), Il = /* @__PURE__ */ new WeakMap(), _r = /* @__PURE__ */ new WeakMap();
function br(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
// @__NO_SIDE_EFFECTS__
function on(e) {
  return /* @__PURE__ */ At(e) ? e : Wo(
    e,
    !1,
    cr,
    mr,
    Ml
  );
}
// @__NO_SIDE_EFFECTS__
function vr(e) {
  return Wo(
    e,
    !1,
    dr,
    hr,
    Ll
  );
}
// @__NO_SIDE_EFFECTS__
function bs(e) {
  return Wo(
    e,
    !0,
    ur,
    gr,
    Il
  );
}
function Wo(e, t, n, s, o) {
  if (!ge(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const l = br(Ua(e));
  if (l === 0)
    return e;
  const a = new Proxy(
    e,
    l === 2 ? s : n
  );
  return o.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function bt(e) {
  return /* @__PURE__ */ At(e) ? /* @__PURE__ */ bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function At(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Hs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ pe(t) : e;
}
function zo(e) {
  return !_e(e, "__v_skip") && Object.isExtensible(e) && rl(e, "__v_skip", !0), e;
}
const at = (e) => ge(e) ? /* @__PURE__ */ on(e) : e, bn = (e) => ge(e) ? /* @__PURE__ */ bs(e) : e;
// @__NO_SIDE_EFFECTS__
function he(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function re(e) {
  return yr(e, !1);
}
function yr(e, t) {
  return /* @__PURE__ */ he(e) ? e : new wr(e, t);
}
class wr {
  constructor(t, n) {
    this.dep = new Uo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ pe(t), this._value = n ? t : at(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Je(t) || /* @__PURE__ */ At(t);
    t = s ? t : /* @__PURE__ */ pe(t), ht(t, n) && (this._rawValue = t, this._value = s ? t : at(t), this.dep.trigger());
  }
}
function y(e) {
  return /* @__PURE__ */ he(e) ? e.value : e;
}
const xr = {
  get: (e, t, n) => t === "__v_raw" ? e : y(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ he(o) && !/* @__PURE__ */ he(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Al(e) {
  return /* @__PURE__ */ bt(e) ? e : new Proxy(e, xr);
}
// @__NO_SIDE_EFFECTS__
function Sr(e) {
  const t = te(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Dl(e, n);
  return t;
}
class Cr {
  constructor(t, n, s) {
    this._object = t, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._key = Qe(n) ? n : String(n), this._raw = /* @__PURE__ */ pe(t);
    let o = !0, i = t;
    if (!te(t) || Qe(this._key) || !Rs(this._key))
      do
        o = !/* @__PURE__ */ Hs(i) || /* @__PURE__ */ Je(i);
      while (o && (i = i.__v_raw));
    this._shallow = o;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = y(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ he(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ he(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return sr(this._raw, this._key);
  }
}
class Fr {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
// @__NO_SIDE_EFFECTS__
function Mr(e, t, n) {
  return /* @__PURE__ */ he(e) ? e : ce(e) ? new Fr(e) : ge(e) && arguments.length > 1 ? Dl(e, t, n) : /* @__PURE__ */ re(e);
}
function Dl(e, t, n) {
  return new Cr(e, t, n);
}
class Lr {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Uo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ce !== this)
      return _l(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return yl(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ir(e, t, n = !1) {
  let s, o;
  return ce(e) ? s = e : (s = e.get, o = e.set), new Lr(s, o, n);
}
const ls = {}, vs = /* @__PURE__ */ new WeakMap();
let qt;
function Ar(e, t = !1, n = qt) {
  if (n) {
    let s = vs.get(n);
    s || vs.set(n, s = []), s.push(e);
  }
}
function Dr(e, t, n = xe) {
  const { immediate: s, deep: o, once: i, scheduler: l, augmentJob: a, call: r } = n, u = (S) => o ? S : /* @__PURE__ */ Je(S) || o === !1 || o === 0 ? It(S, 1) : It(S);
  let c, d, f, p, m = !1, _ = !1;
  if (/* @__PURE__ */ he(e) ? (d = () => e.value, m = /* @__PURE__ */ Je(e)) : /* @__PURE__ */ bt(e) ? (d = () => u(e), m = !0) : te(e) ? (_ = !0, m = e.some((S) => /* @__PURE__ */ bt(S) || /* @__PURE__ */ Je(S)), d = () => e.map((S) => {
    if (/* @__PURE__ */ he(S))
      return S.value;
    if (/* @__PURE__ */ bt(S))
      return u(S);
    if (ce(S))
      return r ? r(S, 2) : S();
  })) : ce(e) ? t ? d = r ? () => r(e, 2) : e : d = () => {
    if (f) {
      yt();
      try {
        f();
      } finally {
        wt();
      }
    }
    const S = qt;
    qt = c;
    try {
      return r ? r(e, 3, [p]) : e(p);
    } finally {
      qt = S;
    }
  } : d = _t, t && o) {
    const S = d, k = o === !0 ? 1 / 0 : o;
    d = () => It(S(), k);
  }
  const v = ml(), g = () => {
    c.stop(), v && v.active && $o(v.effects, c);
  };
  if (i && t) {
    const S = t;
    t = (...k) => {
      const ie = S(...k);
      return g(), ie;
    };
  }
  let w = _ ? new Array(e.length).fill(ls) : ls;
  const D = (S) => {
    if (!(!(c.flags & 1) || !c.dirty && !S))
      if (t) {
        const k = c.run();
        if (S || o || m || (_ ? k.some((ie, T) => ht(ie, w[T])) : ht(k, w))) {
          f && f();
          const ie = qt;
          qt = c;
          try {
            const T = [
              k,
              // pass undefined as the old value when it's changed for the first time
              w === ls ? void 0 : _ && w[0] === ls ? [] : w,
              p
            ];
            w = k, r ? r(t, 3, T) : (
              // @ts-expect-error
              t(...T)
            );
          } finally {
            qt = ie;
          }
        }
      } else
        c.run();
  };
  return a && a(D), c = new hl(d), c.scheduler = l ? () => l(D, !1) : D, p = (S) => Ar(S, !1, c), f = c.onStop = () => {
    const S = vs.get(c);
    if (S) {
      if (r)
        r(S, 4);
      else
        for (const k of S) k();
      vs.delete(c);
    }
  }, t ? s ? D(!0) : w = c.run() : l ? l(D.bind(null, !0), !0) : c.run(), g.pause = c.pause.bind(c), g.resume = c.resume.bind(c), g.stop = g, g;
}
function It(e, t = 1 / 0, n) {
  if (t <= 0 || !ge(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ he(e))
    It(e.value, t, n);
  else if (te(e))
    for (let s = 0; s < e.length; s++)
      It(e[s], t, n);
  else if (Os(e) || mn(e))
    e.forEach((s) => {
      It(s, t, n);
    });
  else if (al(e)) {
    for (const s in e)
      It(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && It(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function es(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    ts(o, t, n);
  }
}
function ot(e, t, n, s) {
  if (ce(e)) {
    const o = es(e, t, n, s);
    return o && il(o) && o.catch((i) => {
      ts(i, t, n);
    }), o;
  }
  if (te(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(ot(e[i], t, n, s));
    return o;
  }
}
function ts(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: l } = t && t.appContext.config || xe;
  if (t) {
    let a = t.parent;
    const r = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let d = 0; d < c.length; d++)
          if (c[d](e, r, u) === !1)
            return;
      }
      a = a.parent;
    }
    if (i) {
      yt(), es(i, null, 10, [
        e,
        r,
        u
      ]), wt();
      return;
    }
  }
  kr(e, n, o, s, l);
}
function kr(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const We = [];
let ft = -1;
const hn = [];
let Pt = null, fn = 0;
const kl = /* @__PURE__ */ Promise.resolve();
let ys = null;
function wn(e) {
  const t = ys || kl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Er(e) {
  let t = ft + 1, n = We.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = We[s], i = Gn(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Go(e) {
  if (!(e.flags & 1)) {
    const t = Gn(e), n = We[We.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Gn(n) ? We.push(e) : We.splice(Er(t), 0, e), e.flags |= 1, El();
  }
}
function El() {
  ys || (ys = kl.then(Ol));
}
function Tr(e) {
  te(e) ? hn.push(...e) : Pt && e.id === -1 ? Pt.splice(fn + 1, 0, e) : e.flags & 1 || (hn.push(e), e.flags |= 1), El();
}
function li(e, t, n = ft + 1) {
  for (; n < We.length; n++) {
    const s = We[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      We.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Tl(e) {
  if (hn.length) {
    const t = [...new Set(hn)].sort(
      (n, s) => Gn(n) - Gn(s)
    );
    if (hn.length = 0, Pt) {
      Pt.push(...t);
      return;
    }
    for (Pt = t, fn = 0; fn < Pt.length; fn++) {
      const n = Pt[fn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Pt = null, fn = 0;
  }
}
const Gn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ol(e) {
  try {
    for (ft = 0; ft < We.length; ft++) {
      const t = We[ft];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), es(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ft < We.length; ft++) {
      const t = We[ft];
      t && (t.flags &= -2);
    }
    ft = -1, We.length = 0, Tl(), ys = null, (We.length || hn.length) && Ol();
  }
}
let Ne = null, Rl = null;
function ws(e) {
  const t = Ne;
  return Ne = e, Rl = e && e.type.__scopeId || null, t;
}
function Us(e, t = Ne, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Cs(-1);
    const i = ws(t);
    let l;
    try {
      l = e(...o);
    } finally {
      ws(i), s._d && Cs(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Ke(e, t) {
  if (Ne === null)
    return e;
  const n = Ks(Ne), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, l, a, r = xe] = t[o];
    i && (ce(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && It(l), s.push({
      dir: i,
      instance: n,
      value: l,
      oldValue: void 0,
      arg: a,
      modifiers: r
    }));
  }
  return e;
}
function Wt(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let l = 0; l < o.length; l++) {
    const a = o[l];
    i && (a.oldValue = i[l].value);
    let r = a.dir[s];
    r && (yt(), ot(r, n, 8, [
      e.el,
      a,
      e,
      t
    ]), wt());
  }
}
function Or(e, t) {
  if (Pe) {
    let n = Pe.provides;
    const s = Pe.parent && Pe.parent.provides;
    s === n && (n = Pe.provides = Object.create(s)), n[e] = t;
  }
}
function Pn(e, t, n = !1) {
  const s = Jo();
  if (s || tn) {
    let o = tn ? tn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ce(t) ? t.call(s && s.proxy) : t;
  }
}
function Rr() {
  return !!(Jo() || tn);
}
const Pr = /* @__PURE__ */ Symbol.for("v-scx"), Nr = () => Pn(Pr);
function He(e, t, n) {
  return Pl(e, t, n);
}
function Pl(e, t, n = xe) {
  const { immediate: s, deep: o, flush: i, once: l } = n, a = Te({}, n), r = t && s || !t && i !== "post";
  let u;
  if (vn) {
    if (i === "sync") {
      const p = Nr();
      u = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!r) {
      const p = () => {
      };
      return p.stop = _t, p.resume = _t, p.pause = _t, p;
    }
  }
  const c = Pe;
  a.call = (p, m, _) => ot(p, c, m, _);
  let d = !1;
  i === "post" ? a.scheduler = (p) => {
    je(p, c && c.suspense);
  } : i !== "sync" && (d = !0, a.scheduler = (p, m) => {
    m ? p() : Go(p);
  }), a.augmentJob = (p) => {
    t && (p.flags |= 4), d && (p.flags |= 2, c && (p.id = c.uid, p.i = c));
  };
  const f = Dr(e, t, a);
  return vn && (u ? u.push(f) : r && f()), f;
}
function $r(e, t, n) {
  const s = this.proxy, o = Me(e) ? e.includes(".") ? Nl(s, e) : () => s[e] : e.bind(s, s);
  let i;
  ce(t) ? i = t : (i = t.handler, n = t);
  const l = ss(this), a = Pl(o, i.bind(s), n);
  return l(), a;
}
function Nl(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const Tt = /* @__PURE__ */ new WeakMap(), $l = /* @__PURE__ */ Symbol("_vte"), Vl = (e) => e.__isTeleport, Yt = (e) => e && (e.disabled || e.disabled === ""), Vr = (e) => e && (e.defer || e.defer === ""), ai = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ri = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, yo = (e, t) => {
  const n = e && e.to;
  return Me(n) ? t ? t(n) : null : n;
}, Br = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, i, l, a, r, u) {
    const {
      mc: c,
      pc: d,
      pbc: f,
      o: { insert: p, querySelector: m, createText: _, createComment: v, parentNode: g }
    } = u, w = Yt(t.props);
    let { dynamicChildren: D } = t;
    const S = (T, I, L) => {
      T.shapeFlag & 16 && c(
        T.children,
        I,
        L,
        o,
        i,
        l,
        a,
        r
      );
    }, k = (T = t) => {
      const I = Yt(T.props), L = T.target = yo(T.props, m), K = wo(L, T, _, p);
      L && (l !== "svg" && ai(L) ? l = "svg" : l !== "mathml" && ri(L) && (l = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(L), I || (S(T, L, K), An(T, !1)));
    }, ie = (T) => {
      const I = () => {
        if (Tt.get(T) === I) {
          if (Tt.delete(T), Yt(T.props)) {
            const L = g(T.el) || n;
            S(T, L, T.anchor), An(T, !0);
          }
          k(T);
        }
      };
      Tt.set(T, I), je(I, i);
    };
    if (e == null) {
      const T = t.el = _(""), I = t.anchor = _("");
      if (p(T, n, s), p(I, n, s), Vr(t.props) || i && i.pendingBranch) {
        ie(t);
        return;
      }
      w && (S(t, n, I), An(t, !0)), k();
    } else {
      t.el = e.el;
      const T = t.anchor = e.anchor, I = Tt.get(e);
      if (I) {
        I.flags |= 8, Tt.delete(e), ie(t);
        return;
      }
      t.targetStart = e.targetStart;
      const L = t.target = e.target, K = t.targetAnchor = e.targetAnchor, N = Yt(e.props), x = N ? n : L, F = N ? T : K;
      if (l === "svg" || ai(L) ? l = "svg" : (l === "mathml" || ri(L)) && (l = "mathml"), D ? (f(
        e.dynamicChildren,
        D,
        x,
        o,
        i,
        l,
        a
      ), Yo(e, t, !0)) : r || d(
        e,
        t,
        x,
        F,
        o,
        i,
        l,
        a,
        !1
      ), w)
        N ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : as(
          t,
          n,
          T,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const $ = yo(t.props, m);
        $ && (t.target = $, as(
          t,
          $,
          null,
          u,
          0
        ));
      } else N && as(
        t,
        L,
        K,
        u,
        1
      );
      An(t, w);
    }
  },
  remove(e, t, n, { um: s, o: { remove: o } }, i) {
    const {
      shapeFlag: l,
      children: a,
      anchor: r,
      targetStart: u,
      targetAnchor: c,
      target: d,
      props: f
    } = e, p = Yt(f), m = i || !p, _ = Tt.get(e);
    if (_ && (_.flags |= 8, Tt.delete(e)), d && (o(u), o(c)), i && o(r), !_ && (p || d) && l & 16)
      for (let v = 0; v < a.length; v++) {
        const g = a[v];
        s(
          g,
          t,
          n,
          m,
          !!g.dynamicChildren
        );
      }
  },
  move: as,
  hydrate: Hr
};
function as(e, t, n, { o: { insert: s }, m: o }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: l, anchor: a, shapeFlag: r, children: u, props: c } = e, d = i === 2;
  if (d && s(l, t, n), !Tt.has(e) && (!d || Yt(c)) && r & 16)
    for (let f = 0; f < u.length; f++)
      o(
        u[f],
        t,
        n,
        2
      );
  d && s(a, t, n);
}
function Hr(e, t, n, s, o, i, {
  o: { nextSibling: l, parentNode: a, querySelector: r, insert: u, createText: c }
}, d) {
  function f(v, g) {
    let w = g;
    for (; w; ) {
      if (w && w.nodeType === 8) {
        if (w.data === "teleport start anchor")
          t.targetStart = w;
        else if (w.data === "teleport anchor") {
          t.targetAnchor = w, v._lpa = t.targetAnchor && l(t.targetAnchor);
          break;
        }
      }
      w = l(w);
    }
  }
  function p(v, g) {
    g.anchor = d(
      l(v),
      g,
      a(v),
      n,
      s,
      o,
      i
    );
  }
  const m = t.target = yo(
    t.props,
    r
  ), _ = Yt(t.props);
  if (m) {
    const v = m._lpa || m.firstChild;
    t.shapeFlag & 16 && (_ ? (p(e, t), f(m, v), t.targetAnchor || wo(
      m,
      t,
      c,
      u,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      a(e) === m ? e : null
    )) : (t.anchor = l(e), f(m, v), t.targetAnchor || wo(m, t, c, u), d(
      v && l(v),
      t,
      m,
      n,
      s,
      o,
      i
    ))), An(t, _);
  } else _ && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = l(e));
  return t.anchor && l(t.anchor);
}
const Bl = Br;
function An(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function wo(e, t, n, s, o = null) {
  const i = t.targetStart = n(""), l = t.targetAnchor = n("");
  return i[$l] = l, e && (s(i, e, o), s(l, e, o)), l;
}
const tt = /* @__PURE__ */ Symbol("_leaveCb"), Mn = /* @__PURE__ */ Symbol("_enterCb");
function Ur() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return an(() => {
    e.isMounted = !0;
  }), xn(() => {
    e.isUnmounting = !0;
  }), e;
}
const et = [Function, Array], Hl = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: et,
  onEnter: et,
  onAfterEnter: et,
  onEnterCancelled: et,
  // leave
  onBeforeLeave: et,
  onLeave: et,
  onAfterLeave: et,
  onLeaveCancelled: et,
  // appear
  onBeforeAppear: et,
  onAppear: et,
  onAfterAppear: et,
  onAppearCancelled: et
}, Ul = (e) => {
  const t = e.subTree;
  return t.component ? Ul(t.component) : t;
}, jr = {
  name: "BaseTransition",
  props: Hl,
  setup(e, { slots: t }) {
    const n = Jo(), s = Ur();
    return () => {
      const o = t.default && zl(t.default(), !0), i = o && o.length ? jl(o) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? se() : void 0
      );
      if (!i)
        return;
      const l = /* @__PURE__ */ pe(e), { mode: a } = l;
      if (s.isLeaving)
        return so(i);
      const r = ci(i);
      if (!r)
        return so(i);
      let u = xo(
        r,
        l,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => u = d
      );
      r.type !== Be && Kn(r, u);
      let c = n.subTree && ci(n.subTree);
      if (c && c.type !== Be && !Jt(c, r) && Ul(n).type !== Be) {
        let d = xo(
          c,
          l,
          s,
          n
        );
        if (Kn(c, d), a === "out-in" && r.type !== Be)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
          }, so(i);
        a === "in-out" && r.type !== Be ? d.delayLeave = (f, p, m) => {
          const _ = Wl(
            s,
            c
          );
          _[String(c.key)] = c, f[tt] = () => {
            p(), f[tt] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            m(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return i;
    };
  }
};
function jl(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Be) {
        t = n;
        break;
      }
  }
  return t;
}
const Wr = jr;
function Wl(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function xo(e, t, n, s, o) {
  const {
    appear: i,
    mode: l,
    persisted: a = !1,
    onBeforeEnter: r,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: d,
    onBeforeLeave: f,
    onLeave: p,
    onAfterLeave: m,
    onLeaveCancelled: _,
    onBeforeAppear: v,
    onAppear: g,
    onAfterAppear: w,
    onAppearCancelled: D
  } = t, S = String(e.key), k = Wl(n, e), ie = (L, K) => {
    L && ot(
      L,
      s,
      9,
      K
    );
  }, T = (L, K) => {
    const N = K[1];
    ie(L, K), te(L) ? L.every((x) => x.length <= 1) && N() : L.length <= 1 && N();
  }, I = {
    mode: l,
    persisted: a,
    beforeEnter(L) {
      let K = r;
      if (!n.isMounted)
        if (i)
          K = v || r;
        else
          return;
      L[tt] && L[tt](
        !0
        /* cancelled */
      );
      const N = k[S];
      N && Jt(e, N) && N.el[tt] && N.el[tt](), ie(K, [L]);
    },
    enter(L) {
      if (k[S] === e) return;
      let K = u, N = c, x = d;
      if (!n.isMounted)
        if (i)
          K = g || u, N = w || c, x = D || d;
        else
          return;
      let F = !1;
      L[Mn] = (R) => {
        F || (F = !0, R ? ie(x, [L]) : ie(N, [L]), I.delayedLeave && I.delayedLeave(), L[Mn] = void 0);
      };
      const $ = L[Mn].bind(null, !1);
      K ? T(K, [L, $]) : $();
    },
    leave(L, K) {
      const N = String(e.key);
      if (L[Mn] && L[Mn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return K();
      ie(f, [L]);
      let x = !1;
      L[tt] = ($) => {
        x || (x = !0, K(), $ ? ie(_, [L]) : ie(m, [L]), L[tt] = void 0, k[N] === e && delete k[N]);
      };
      const F = L[tt].bind(null, !1);
      k[N] = e, p ? T(p, [L, F]) : F();
    },
    clone(L) {
      const K = xo(
        L,
        t,
        n,
        s,
        o
      );
      return o && o(K), K;
    }
  };
  return I;
}
function so(e) {
  if (ns(e))
    return e = Vt(e), e.children = null, e;
}
function ci(e) {
  if (!ns(e))
    return Vl(e.type) && e.children ? jl(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ce(n.default))
      return n.default();
  }
}
function Kn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Kn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function zl(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let l = e[i];
    const a = n == null ? l.key : String(n) + String(l.key != null ? l.key : i);
    l.type === de ? (l.patchFlag & 128 && o++, s = s.concat(
      zl(l.children, t, a)
    )) : (t || l.type !== Be) && s.push(a != null ? Vt(l, { key: a }) : l);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Se(e, t) {
  return ce(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Te({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ko(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ui(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const xs = /* @__PURE__ */ new WeakMap();
function Nn(e, t, n, s, o = !1) {
  if (te(e)) {
    e.forEach(
      (_, v) => Nn(
        _,
        t && (te(t) ? t[v] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (gn(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Nn(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Ks(s.component) : s.el, l = o ? null : i, { i: a, r } = e, u = t && t.r, c = a.refs === xe ? a.refs = {} : a.refs, d = a.setupState, f = /* @__PURE__ */ pe(d), p = d === xe ? ol : (_) => ui(c, _) ? !1 : _e(f, _), m = (_, v) => !(v && ui(c, v));
  if (u != null && u !== r) {
    if (di(t), Me(u))
      c[u] = null, p(u) && (d[u] = null);
    else if (/* @__PURE__ */ he(u)) {
      const _ = t;
      m(u, _.k) && (u.value = null), _.k && (c[_.k] = null);
    }
  }
  if (ce(r)) {
    yt();
    try {
      es(r, a, 12, [l, c]);
    } finally {
      wt();
    }
  } else {
    const _ = Me(r), v = /* @__PURE__ */ he(r);
    if (_ || v) {
      const g = () => {
        if (e.f) {
          const w = _ ? p(r) ? d[r] : c[r] : m() || !e.k ? r.value : c[e.k];
          if (o)
            te(w) && $o(w, i);
          else if (te(w))
            w.includes(i) || w.push(i);
          else if (_)
            c[r] = [i], p(r) && (d[r] = c[r]);
          else {
            const D = [i];
            m(r, e.k) && (r.value = D), e.k && (c[e.k] = D);
          }
        } else _ ? (c[r] = l, p(r) && (d[r] = l)) : v && (m(r, e.k) && (r.value = l), e.k && (c[e.k] = l));
      };
      if (l) {
        const w = () => {
          g(), xs.delete(e);
        };
        w.id = -1, xs.set(e, w), je(w, n);
      } else
        di(e), g();
    }
  }
}
function di(e) {
  const t = xs.get(e);
  t && (t.flags |= 8, xs.delete(e));
}
const fi = (e) => e.nodeType === 8;
Vs().requestIdleCallback;
Vs().cancelIdleCallback;
function zr(e, t) {
  if (fi(e) && e.data === "[") {
    let n = 1, s = e.nextSibling;
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1)
          break;
      } else if (fi(s))
        if (s.data === "]") {
          if (--n === 0) break;
        } else s.data === "[" && n++;
      s = s.nextSibling;
    }
  } else
    t(e);
}
const gn = (e) => !!e.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function ln(e) {
  ce(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: o = 200,
    hydrate: i,
    timeout: l,
    // undefined = never times out
    suspensible: a = !0,
    onError: r
  } = e;
  let u = null, c, d = 0;
  const f = () => (d++, u = null, p()), p = () => {
    let m;
    return u || (m = u = t().catch((_) => {
      if (_ = _ instanceof Error ? _ : new Error(String(_)), r)
        return new Promise((v, g) => {
          r(_, () => v(f()), () => g(_), d + 1);
        });
      throw _;
    }).then((_) => m !== u && u ? u : (_ && (_.__esModule || _[Symbol.toStringTag] === "Module") && (_ = _.default), c = _, _)));
  };
  return /* @__PURE__ */ Se({
    name: "AsyncComponentWrapper",
    __asyncLoader: p,
    __asyncHydrate(m, _, v) {
      let g = !1;
      (_.bu || (_.bu = [])).push(() => g = !0);
      const w = () => {
        g || v();
      }, D = i ? () => {
        const S = i(
          w,
          (k) => zr(m, k)
        );
        S && (_.bum || (_.bum = [])).push(S);
      } : w;
      c ? D() : p().then(() => !_.isUnmounted && D());
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const m = Pe;
      if (Ko(m), c)
        return () => rs(c, m);
      const _ = (k) => {
        u = null, ts(
          k,
          m,
          13,
          !s
        );
      };
      if (a && m.suspense || vn)
        return p().then((k) => () => rs(k, m)).catch((k) => (_(k), () => s ? X(s, {
          error: k
        }) : null));
      const v = /* @__PURE__ */ re(!1), g = /* @__PURE__ */ re(), w = /* @__PURE__ */ re(!!o);
      let D, S;
      return Ws(() => {
        D != null && clearTimeout(D), S != null && clearTimeout(S);
      }), o && (S = setTimeout(() => {
        m.isUnmounted || (w.value = !1);
      }, o)), l != null && (D = setTimeout(() => {
        if (!m.isUnmounted && !v.value && !g.value) {
          const k = new Error(
            `Async component timed out after ${l}ms.`
          );
          _(k), g.value = k;
        }
      }, l)), p().then(() => {
        m.isUnmounted || (v.value = !0, m.parent && ns(m.parent.vnode) && m.parent.update());
      }).catch((k) => {
        if (m.isUnmounted) {
          u = null;
          return;
        }
        _(k), g.value = k;
      }), () => {
        if (v.value && c)
          return rs(c, m);
        if (g.value && s)
          return X(s, {
            error: g.value
          });
        if (n && !w.value)
          return rs(
            n,
            m
          );
      };
    }
  });
}
function rs(e, t) {
  const { ref: n, props: s, children: o, ce: i } = t.vnode, l = X(e, s, o);
  return l.ref = n, l.ce = i, delete t.vnode.ce, l;
}
const ns = (e) => e.type.__isKeepAlive;
function Gr(e, t) {
  Gl(e, "a", t);
}
function Kr(e, t) {
  Gl(e, "da", t);
}
function Gl(e, t, n = Pe) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (js(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      ns(o.parent.vnode) && qr(s, t, n, o), o = o.parent;
  }
}
function qr(e, t, n, s) {
  const o = js(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Ws(() => {
    $o(s[t], o);
  }, n);
}
function js(e, t, n = Pe, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...l) => {
      yt();
      const a = ss(n), r = ot(t, n, e, l);
      return a(), wt(), r;
    });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const Dt = (e) => (t, n = Pe) => {
  (!vn || e === "sp") && js(e, (...s) => t(...s), n);
}, Xr = Dt("bm"), an = Dt("m"), Yr = Dt(
  "bu"
), Jr = Dt("u"), xn = Dt(
  "bum"
), Ws = Dt("um"), Qr = Dt(
  "sp"
), Zr = Dt("rtg"), ec = Dt("rtc");
function tc(e, t = Pe) {
  js("ec", e, t);
}
const nc = "components", Kl = /* @__PURE__ */ Symbol.for("v-ndc");
function sc(e) {
  return Me(e) ? oc(nc, e, !1) || e : e || Kl;
}
function oc(e, t, n = !0, s = !1) {
  const o = Ne || Pe;
  if (o) {
    const i = o.type;
    {
      const a = jc(
        i,
        !1
      );
      if (a && (a === t || a === Ge(t) || a === Ns(Ge(t))))
        return i;
    }
    const l = (
      // local registration
      // check instance[type] first which is resolved for options API
      pi(o[e] || i[e], t) || // global registration
      pi(o.appContext[e], t)
    );
    return !l && s ? i : l;
  }
}
function pi(e, t) {
  return e && (e[t] || e[Ge(t)] || e[Ns(Ge(t))]);
}
function Ae(e, t, n, s) {
  let o;
  const i = n, l = te(e);
  if (l || Me(e)) {
    const a = l && /* @__PURE__ */ bt(e);
    let r = !1, u = !1;
    a && (r = !/* @__PURE__ */ Je(e), u = /* @__PURE__ */ At(e), e = Bs(e)), o = new Array(e.length);
    for (let c = 0, d = e.length; c < d; c++)
      o[c] = t(
        r ? u ? bn(at(e[c])) : at(e[c]) : e[c],
        c,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let a = 0; a < e; a++)
      o[a] = t(a + 1, a, void 0, i);
  } else if (ge(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (a, r) => t(a, r, void 0, i)
      );
    else {
      const a = Object.keys(e);
      o = new Array(a.length);
      for (let r = 0, u = a.length; r < u; r++) {
        const c = a[r];
        o[r] = t(e[c], c, r, i);
      }
    }
  else
    o = [];
  return o;
}
function ic(e, t, n = {}, s, o) {
  if (Ne.ce || Ne.parent && gn(Ne.parent) && Ne.parent.ce) {
    const u = Object.keys(n).length > 0;
    return C(), Ie(
      de,
      null,
      [X("slot", n, s)],
      u ? -2 : 64
    );
  }
  let i = e[t];
  i && i._c && (i._d = !1), C();
  const l = i && ql(i(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  l && l.key, r = Ie(
    de,
    {
      key: (a && !Qe(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!l && s ? "_fb" : "")
    },
    l || [],
    l && e._ === 1 ? 64 : -2
  );
  return i && i._c && (i._d = !0), r;
}
function ql(e) {
  return e.some((t) => Xn(t) ? !(t.type === Be || t.type === de && !ql(t.children)) : !0) ? e : null;
}
const So = (e) => e ? ma(e) ? Ks(e) : So(e.parent) : null, $n = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Te(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => So(e.parent),
    $root: (e) => So(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Yl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Go(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = wn.bind(e.proxy)),
    $watch: (e) => $r.bind(e)
  })
), oo = (e, t) => e !== xe && !e.__isScriptSetup && _e(e, t), lc = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: i, accessCache: l, type: a, appContext: r } = e;
    if (t[0] !== "$") {
      const f = l[t];
      if (f !== void 0)
        switch (f) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (oo(s, t))
          return l[t] = 1, s[t];
        if (o !== xe && _e(o, t))
          return l[t] = 2, o[t];
        if (_e(i, t))
          return l[t] = 3, i[t];
        if (n !== xe && _e(n, t))
          return l[t] = 4, n[t];
        Co && (l[t] = 0);
      }
    }
    const u = $n[t];
    let c, d;
    if (u)
      return t === "$attrs" && Ve(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (c = a.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== xe && _e(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      d = r.config.globalProperties, _e(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return oo(o, t) ? (o[t] = n, !0) : s !== xe && _e(s, t) ? (s[t] = n, !0) : _e(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: i, type: l }
  }, a) {
    let r;
    return !!(n[a] || e !== xe && a[0] !== "$" && _e(e, a) || oo(t, a) || _e(i, a) || _e(s, a) || _e($n, a) || _e(o.config.globalProperties, a) || (r = l.__cssModules) && r[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : _e(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function mi(e) {
  return te(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Co = !0;
function ac(e) {
  const t = Yl(e), n = e.proxy, s = e.ctx;
  Co = !1, t.beforeCreate && hi(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: l,
    watch: a,
    provide: r,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: d,
    mounted: f,
    beforeUpdate: p,
    updated: m,
    activated: _,
    deactivated: v,
    beforeDestroy: g,
    beforeUnmount: w,
    destroyed: D,
    unmounted: S,
    render: k,
    renderTracked: ie,
    renderTriggered: T,
    errorCaptured: I,
    serverPrefetch: L,
    // public API
    expose: K,
    inheritAttrs: N,
    // assets
    components: x,
    directives: F,
    filters: $
  } = t;
  if (u && rc(u, s, null), l)
    for (const A in l) {
      const j = l[A];
      ce(j) && (s[A] = j.bind(n));
    }
  if (o) {
    const A = o.call(n, n);
    ge(A) && (e.data = /* @__PURE__ */ on(A));
  }
  if (Co = !0, i)
    for (const A in i) {
      const j = i[A], W = ce(j) ? j.bind(n, n) : ce(j.get) ? j.get.bind(n, n) : _t, Q = !ce(j) && ce(j.set) ? j.set.bind(n) : _t, oe = Y({
        get: W,
        set: Q
      });
      Object.defineProperty(s, A, {
        enumerable: !0,
        configurable: !0,
        get: () => oe.value,
        set: (ve) => oe.value = ve
      });
    }
  if (a)
    for (const A in a)
      Xl(a[A], s, n, A);
  if (r) {
    const A = ce(r) ? r.call(n) : r;
    Reflect.ownKeys(A).forEach((j) => {
      Or(j, A[j]);
    });
  }
  c && hi(c, e, "c");
  function H(A, j) {
    te(j) ? j.forEach((W) => A(W.bind(n))) : j && A(j.bind(n));
  }
  if (H(Xr, d), H(an, f), H(Yr, p), H(Jr, m), H(Gr, _), H(Kr, v), H(tc, I), H(ec, ie), H(Zr, T), H(xn, w), H(Ws, S), H(Qr, L), te(K))
    if (K.length) {
      const A = e.exposed || (e.exposed = {});
      K.forEach((j) => {
        Object.defineProperty(A, j, {
          get: () => n[j],
          set: (W) => n[j] = W,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  k && e.render === _t && (e.render = k), N != null && (e.inheritAttrs = N), x && (e.components = x), F && (e.directives = F), L && Ko(e);
}
function rc(e, t, n = _t) {
  te(e) && (e = Fo(e));
  for (const s in e) {
    const o = e[s];
    let i;
    ge(o) ? "default" in o ? i = Pn(
      o.from || s,
      o.default,
      !0
    ) : i = Pn(o.from || s) : i = Pn(o), /* @__PURE__ */ he(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[s] = i;
  }
}
function hi(e, t, n) {
  ot(
    te(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Xl(e, t, n, s) {
  let o = s.includes(".") ? Nl(n, s) : () => n[s];
  if (Me(e)) {
    const i = t[e];
    ce(i) && He(o, i);
  } else if (ce(e))
    He(o, e.bind(n));
  else if (ge(e))
    if (te(e))
      e.forEach((i) => Xl(i, t, n, s));
    else {
      const i = ce(e.handler) ? e.handler.bind(n) : t[e.handler];
      ce(i) && He(o, i, e);
    }
}
function Yl(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, a = i.get(t);
  let r;
  return a ? r = a : !o.length && !n && !s ? r = t : (r = {}, o.length && o.forEach(
    (u) => Ss(r, u, l, !0)
  ), Ss(r, t, l)), ge(t) && i.set(t, r), r;
}
function Ss(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && Ss(e, i, n, !0), o && o.forEach(
    (l) => Ss(e, l, n, !0)
  );
  for (const l in t)
    if (!(s && l === "expose")) {
      const a = cc[l] || n && n[l];
      e[l] = a ? a(e[l], t[l]) : t[l];
    }
  return e;
}
const cc = {
  data: gi,
  props: _i,
  emits: _i,
  // objects
  methods: Dn,
  computed: Dn,
  // lifecycle
  beforeCreate: Ue,
  created: Ue,
  beforeMount: Ue,
  mounted: Ue,
  beforeUpdate: Ue,
  updated: Ue,
  beforeDestroy: Ue,
  beforeUnmount: Ue,
  destroyed: Ue,
  unmounted: Ue,
  activated: Ue,
  deactivated: Ue,
  errorCaptured: Ue,
  serverPrefetch: Ue,
  // assets
  components: Dn,
  directives: Dn,
  // watch
  watch: dc,
  // provide / inject
  provide: gi,
  inject: uc
};
function gi(e, t) {
  return t ? e ? function() {
    return Te(
      ce(e) ? e.call(this, this) : e,
      ce(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function uc(e, t) {
  return Dn(Fo(e), Fo(t));
}
function Fo(e) {
  if (te(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ue(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Dn(e, t) {
  return e ? Te(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function _i(e, t) {
  return e ? te(e) && te(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Te(
    /* @__PURE__ */ Object.create(null),
    mi(e),
    mi(t ?? {})
  ) : t;
}
function dc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Te(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Ue(e[s], t[s]);
  return n;
}
function Jl() {
  return {
    app: null,
    config: {
      isNativeTag: ol,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let fc = 0;
function pc(e, t) {
  return function(s, o = null) {
    ce(s) || (s = Te({}, s)), o != null && !ge(o) && (o = null);
    const i = Jl(), l = /* @__PURE__ */ new WeakSet(), a = [];
    let r = !1;
    const u = i.app = {
      _uid: fc++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: zc,
      get config() {
        return i.config;
      },
      set config(c) {
      },
      use(c, ...d) {
        return l.has(c) || (c && ce(c.install) ? (l.add(c), c.install(u, ...d)) : ce(c) && (l.add(c), c(u, ...d))), u;
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), u;
      },
      component(c, d) {
        return d ? (i.components[c] = d, u) : i.components[c];
      },
      directive(c, d) {
        return d ? (i.directives[c] = d, u) : i.directives[c];
      },
      mount(c, d, f) {
        if (!r) {
          const p = u._ceVNode || X(s, o);
          return p.appContext = i, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(p, c, f), r = !0, u._container = c, c.__vue_app__ = u, Ks(p.component);
        }
      },
      onUnmount(c) {
        a.push(c);
      },
      unmount() {
        r && (ot(
          a,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, d) {
        return i.provides[c] = d, u;
      },
      runWithContext(c) {
        const d = tn;
        tn = u;
        try {
          return c();
        } finally {
          tn = d;
        }
      }
    };
    return u;
  };
}
let tn = null;
const mc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ge(t)}Modifiers`] || e[`${Bt(t)}Modifiers`];
function hc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || xe;
  let o = n;
  const i = t.startsWith("update:"), l = i && mc(s, t.slice(7));
  l && (l.trim && (o = n.map((c) => Me(c) ? c.trim() : c)), l.number && (o = n.map($s)));
  let a, r = s[a = Qs(t)] || // also try camelCase event handler (#2249)
  s[a = Qs(Ge(t))];
  !r && i && (r = s[a = Qs(Bt(t))]), r && ot(
    r,
    e,
    6,
    o
  );
  const u = s[a + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, ot(
      u,
      e,
      6,
      o
    );
  }
}
const gc = /* @__PURE__ */ new WeakMap();
function Ql(e, t, n = !1) {
  const s = n ? gc : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let l = {}, a = !1;
  if (!ce(e)) {
    const r = (u) => {
      const c = Ql(u, t, !0);
      c && (a = !0, Te(l, c));
    };
    !n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
  }
  return !i && !a ? (ge(e) && s.set(e, null), null) : (te(i) ? i.forEach((r) => l[r] = null) : Te(l, i), ge(e) && s.set(e, l), l);
}
function zs(e, t) {
  return !e || !Es(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), _e(e, t[0].toLowerCase() + t.slice(1)) || _e(e, Bt(t)) || _e(e, t));
}
function bi(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [i],
    slots: l,
    attrs: a,
    emit: r,
    render: u,
    renderCache: c,
    props: d,
    data: f,
    setupState: p,
    ctx: m,
    inheritAttrs: _
  } = e, v = ws(e);
  let g, w;
  try {
    if (n.shapeFlag & 4) {
      const S = o || s, k = S;
      g = mt(
        u.call(
          k,
          S,
          c,
          d,
          p,
          f,
          m
        )
      ), w = a;
    } else {
      const S = t;
      g = mt(
        S.length > 1 ? S(
          d,
          { attrs: a, slots: l, emit: r }
        ) : S(
          d,
          null
        )
      ), w = t.props ? a : _c(a);
    }
  } catch (S) {
    Vn.length = 0, ts(S, e, 1), g = X(Be);
  }
  let D = g;
  if (w && _ !== !1) {
    const S = Object.keys(w), { shapeFlag: k } = D;
    S.length && k & 7 && (i && S.some(Ts) && (w = bc(
      w,
      i
    )), D = Vt(D, w, !1, !0));
  }
  return n.dirs && (D = Vt(D, null, !1, !0), D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs), n.transition && Kn(D, n.transition), g = D, ws(v), g;
}
const _c = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Es(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, bc = (e, t) => {
  const n = {};
  for (const s in e)
    (!Ts(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function vc(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: l, children: a, patchFlag: r } = t, u = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && r >= 0) {
    if (r & 1024)
      return !0;
    if (r & 16)
      return s ? vi(s, l, u) : !!l;
    if (r & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (Zl(l, s, f) && !zs(u, f))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : s === l ? !1 : s ? l ? vi(s, l, u) : !0 : !!l;
  return !1;
}
function vi(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (Zl(t, e, i) && !zs(n, i))
      return !0;
  }
  return !1;
}
function Zl(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && ge(s) && ge(o) ? !Zn(s, o) : s !== o;
}
function yc({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = s, e = o), o === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const ea = {}, ta = () => Object.create(ea), na = (e) => Object.getPrototypeOf(e) === ea;
function wc(e, t, n, s = !1) {
  const o = {}, i = ta();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), sa(e, t, o, i);
  for (const l in e.propsOptions[0])
    l in o || (o[l] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ vr(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function xc(e, t, n, s) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: l }
  } = e, a = /* @__PURE__ */ pe(o), [r] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let f = c[d];
        if (zs(e.emitsOptions, f))
          continue;
        const p = t[f];
        if (r)
          if (_e(i, f))
            p !== i[f] && (i[f] = p, u = !0);
          else {
            const m = Ge(f);
            o[m] = Mo(
              r,
              a,
              m,
              p,
              e,
              !1
            );
          }
        else
          p !== i[f] && (i[f] = p, u = !0);
      }
    }
  } else {
    sa(e, t, o, i) && (u = !0);
    let c;
    for (const d in a)
      (!t || // for camelCase
      !_e(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Bt(d)) === d || !_e(t, c))) && (r ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (o[d] = Mo(
        r,
        a,
        d,
        void 0,
        e,
        !0
      )) : delete o[d]);
    if (i !== a)
      for (const d in i)
        (!t || !_e(t, d)) && (delete i[d], u = !0);
  }
  u && Lt(e.attrs, "set", "");
}
function sa(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let l = !1, a;
  if (t)
    for (let r in t) {
      if (Tn(r))
        continue;
      const u = t[r];
      let c;
      o && _e(o, c = Ge(r)) ? !i || !i.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : zs(e.emitsOptions, r) || (!(r in s) || u !== s[r]) && (s[r] = u, l = !0);
    }
  if (i) {
    const r = /* @__PURE__ */ pe(n), u = a || xe;
    for (let c = 0; c < i.length; c++) {
      const d = i[c];
      n[d] = Mo(
        o,
        r,
        d,
        u[d],
        e,
        !_e(u, d)
      );
    }
  }
  return l;
}
function Mo(e, t, n, s, o, i) {
  const l = e[n];
  if (l != null) {
    const a = _e(l, "default");
    if (a && s === void 0) {
      const r = l.default;
      if (l.type !== Function && !l.skipFactory && ce(r)) {
        const { propsDefaults: u } = o;
        if (n in u)
          s = u[n];
        else {
          const c = ss(o);
          s = u[n] = r.call(
            null,
            t
          ), c();
        }
      } else
        s = r;
      o.ce && o.ce._setProp(n, s);
    }
    l[
      0
      /* shouldCast */
    ] && (i && !a ? s = !1 : l[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Bt(n)) && (s = !0));
  }
  return s;
}
const Sc = /* @__PURE__ */ new WeakMap();
function oa(e, t, n = !1) {
  const s = n ? Sc : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, l = {}, a = [];
  let r = !1;
  if (!ce(e)) {
    const c = (d) => {
      r = !0;
      const [f, p] = oa(d, t, !0);
      Te(l, f), p && a.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !r)
    return ge(e) && s.set(e, pn), pn;
  if (te(i))
    for (let c = 0; c < i.length; c++) {
      const d = Ge(i[c]);
      yi(d) && (l[d] = xe);
    }
  else if (i)
    for (const c in i) {
      const d = Ge(c);
      if (yi(d)) {
        const f = i[c], p = l[d] = te(f) || ce(f) ? { type: f } : Te({}, f), m = p.type;
        let _ = !1, v = !0;
        if (te(m))
          for (let g = 0; g < m.length; ++g) {
            const w = m[g], D = ce(w) && w.name;
            if (D === "Boolean") {
              _ = !0;
              break;
            } else D === "String" && (v = !1);
          }
        else
          _ = ce(m) && m.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = _, p[
          1
          /* shouldCastTrue */
        ] = v, (_ || _e(p, "default")) && a.push(d);
      }
    }
  const u = [l, a];
  return ge(e) && s.set(e, u), u;
}
function yi(e) {
  return e[0] !== "$" && !Tn(e);
}
const qo = (e) => e === "_" || e === "_ctx" || e === "$stable", Xo = (e) => te(e) ? e.map(mt) : [mt(e)], Cc = (e, t, n) => {
  if (t._n)
    return t;
  const s = Us((...o) => Xo(t(...o)), n);
  return s._c = !1, s;
}, ia = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (qo(o)) continue;
    const i = e[o];
    if (ce(i))
      t[o] = Cc(o, i, s);
    else if (i != null) {
      const l = Xo(i);
      t[o] = () => l;
    }
  }
}, la = (e, t) => {
  const n = Xo(t);
  e.slots.default = () => n;
}, aa = (e, t, n) => {
  for (const s in t)
    (n || !qo(s)) && (e[s] = t[s]);
}, Fc = (e, t, n) => {
  const s = e.slots = ta();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (aa(s, t, n), n && rl(s, "_", o, !0)) : ia(t, s);
  } else t && la(e, t);
}, Mc = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, l = xe;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? i = !1 : aa(o, t, n) : (i = !t.$stable, ia(t, o)), l = t;
  } else t && (la(e, t), l = { default: 1 });
  if (i)
    for (const a in o)
      !qo(a) && l[a] == null && delete o[a];
}, je = kc;
function Lc(e) {
  return Ic(e);
}
function Ic(e, t) {
  const n = Vs();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: o,
    patchProp: i,
    createElement: l,
    createText: a,
    createComment: r,
    setText: u,
    setElementText: c,
    parentNode: d,
    nextSibling: f,
    setScopeId: p = _t,
    insertStaticContent: m
  } = e, _ = (h, b, M, U = null, V = null, O = null, q = void 0, G = null, z = !!b.dynamicChildren) => {
    if (h === b)
      return;
    h && !Jt(h, b) && (U = jt(h), ve(h, V, O, !0), h = null), b.patchFlag === -2 && (z = !1, b.dynamicChildren = null);
    const { type: P, ref: ne, shapeFlag: J } = b;
    switch (P) {
      case Gs:
        v(h, b, M, U);
        break;
      case Be:
        g(h, b, M, U);
        break;
      case lo:
        h == null && w(b, M, U, q);
        break;
      case de:
        x(
          h,
          b,
          M,
          U,
          V,
          O,
          q,
          G,
          z
        );
        break;
      default:
        J & 1 ? k(
          h,
          b,
          M,
          U,
          V,
          O,
          q,
          G,
          z
        ) : J & 6 ? F(
          h,
          b,
          M,
          U,
          V,
          O,
          q,
          G,
          z
        ) : (J & 64 || J & 128) && P.process(
          h,
          b,
          M,
          U,
          V,
          O,
          q,
          G,
          z,
          Oe
        );
    }
    ne != null && V ? Nn(ne, h && h.ref, O, b || h, !b) : ne == null && h && h.ref != null && Nn(h.ref, null, O, h, !0);
  }, v = (h, b, M, U) => {
    if (h == null)
      s(
        b.el = a(b.children),
        M,
        U
      );
    else {
      const V = b.el = h.el;
      b.children !== h.children && u(V, b.children);
    }
  }, g = (h, b, M, U) => {
    h == null ? s(
      b.el = r(b.children || ""),
      M,
      U
    ) : b.el = h.el;
  }, w = (h, b, M, U) => {
    [h.el, h.anchor] = m(
      h.children,
      b,
      M,
      U,
      h.el,
      h.anchor
    );
  }, D = ({ el: h, anchor: b }, M, U) => {
    let V;
    for (; h && h !== b; )
      V = f(h), s(h, M, U), h = V;
    s(b, M, U);
  }, S = ({ el: h, anchor: b }) => {
    let M;
    for (; h && h !== b; )
      M = f(h), o(h), h = M;
    o(b);
  }, k = (h, b, M, U, V, O, q, G, z) => {
    if (b.type === "svg" ? q = "svg" : b.type === "math" && (q = "mathml"), h == null)
      ie(
        b,
        M,
        U,
        V,
        O,
        q,
        G,
        z
      );
    else {
      const P = h.el && h.el._isVueCE ? h.el : null;
      try {
        P && P._beginPatch(), L(
          h,
          b,
          V,
          O,
          q,
          G,
          z
        );
      } finally {
        P && P._endPatch();
      }
    }
  }, ie = (h, b, M, U, V, O, q, G) => {
    let z, P;
    const { props: ne, shapeFlag: J, transition: ee, dirs: ae } = h;
    if (z = h.el = l(
      h.type,
      O,
      ne && ne.is,
      ne
    ), J & 8 ? c(z, h.children) : J & 16 && I(
      h.children,
      z,
      null,
      U,
      V,
      io(h, O),
      q,
      G
    ), ae && Wt(h, null, U, "created"), T(z, h, h.scopeId, q, U), ne) {
      for (const we in ne)
        we !== "value" && !Tn(we) && i(z, we, null, ne[we], O, U);
      "value" in ne && i(z, "value", null, ne.value, O), (P = ne.onVnodeBeforeMount) && dt(P, U, h);
    }
    ae && Wt(h, null, U, "beforeMount");
    const me = Ac(V, ee);
    me && ee.beforeEnter(z), s(z, b, M), ((P = ne && ne.onVnodeMounted) || me || ae) && je(() => {
      try {
        P && dt(P, U, h), me && ee.enter(z), ae && Wt(h, null, U, "mounted");
      } finally {
      }
    }, V);
  }, T = (h, b, M, U, V) => {
    if (M && p(h, M), U)
      for (let O = 0; O < U.length; O++)
        p(h, U[O]);
    if (V) {
      let O = V.subTree;
      if (b === O || ua(O.type) && (O.ssContent === b || O.ssFallback === b)) {
        const q = V.vnode;
        T(
          h,
          q,
          q.scopeId,
          q.slotScopeIds,
          V.parent
        );
      }
    }
  }, I = (h, b, M, U, V, O, q, G, z = 0) => {
    for (let P = z; P < h.length; P++) {
      const ne = h[P] = G ? Ft(h[P]) : mt(h[P]);
      _(
        null,
        ne,
        b,
        M,
        U,
        V,
        O,
        q,
        G
      );
    }
  }, L = (h, b, M, U, V, O, q) => {
    const G = b.el = h.el;
    let { patchFlag: z, dynamicChildren: P, dirs: ne } = b;
    z |= h.patchFlag & 16;
    const J = h.props || xe, ee = b.props || xe;
    let ae;
    if (M && zt(M, !1), (ae = ee.onVnodeBeforeUpdate) && dt(ae, M, b, h), ne && Wt(b, h, M, "beforeUpdate"), M && zt(M, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    P && (!h.dynamicChildren || h.dynamicChildren.length !== P.length) && (z = 0, q = !1, P = null), (J.innerHTML && ee.innerHTML == null || J.textContent && ee.textContent == null) && c(G, ""), P ? K(
      h.dynamicChildren,
      P,
      G,
      M,
      U,
      io(b, V),
      O
    ) : q || j(
      h,
      b,
      G,
      null,
      M,
      U,
      io(b, V),
      O,
      !1
    ), z > 0) {
      if (z & 16)
        N(G, J, ee, M, V);
      else if (z & 2 && J.class !== ee.class && i(G, "class", null, ee.class, V), z & 4 && i(G, "style", J.style, ee.style, V), z & 8) {
        const me = b.dynamicProps;
        for (let we = 0; we < me.length; we++) {
          const ye = me[we], ke = J[ye], Re = ee[ye];
          (Re !== ke || ye === "value") && i(G, ye, ke, Re, V, M);
        }
      }
      z & 1 && h.children !== b.children && c(G, b.children);
    } else !q && P == null && N(G, J, ee, M, V);
    ((ae = ee.onVnodeUpdated) || ne) && je(() => {
      ae && dt(ae, M, b, h), ne && Wt(b, h, M, "updated");
    }, U);
  }, K = (h, b, M, U, V, O, q) => {
    for (let G = 0; G < b.length; G++) {
      const z = h[G], P = b[G], ne = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (z.type === de || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Jt(z, P) || // - In the case of a component, it could contain anything.
        z.shapeFlag & 198) ? d(z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          M
        )
      );
      _(
        z,
        P,
        ne,
        null,
        U,
        V,
        O,
        q,
        !0
      );
    }
  }, N = (h, b, M, U, V) => {
    if (b !== M) {
      if (b !== xe)
        for (const O in b)
          !Tn(O) && !(O in M) && i(
            h,
            O,
            b[O],
            null,
            V,
            U
          );
      for (const O in M) {
        if (Tn(O)) continue;
        const q = M[O], G = b[O];
        q !== G && O !== "value" && i(h, O, G, q, V, U);
      }
      "value" in M && i(h, "value", b.value, M.value, V);
    }
  }, x = (h, b, M, U, V, O, q, G, z) => {
    const P = b.el = h ? h.el : a(""), ne = b.anchor = h ? h.anchor : a("");
    let { patchFlag: J, dynamicChildren: ee, slotScopeIds: ae } = b;
    ae && (G = G ? G.concat(ae) : ae), h == null ? (s(P, M, U), s(ne, M, U), I(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      M,
      ne,
      V,
      O,
      q,
      G,
      z
    )) : J > 0 && J & 64 && ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren && h.dynamicChildren.length === ee.length ? (K(
      h.dynamicChildren,
      ee,
      M,
      V,
      O,
      q,
      G
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || V && b === V.subTree) && Yo(
      h,
      b,
      !0
      /* shallow */
    )) : j(
      h,
      b,
      M,
      ne,
      V,
      O,
      q,
      G,
      z
    );
  }, F = (h, b, M, U, V, O, q, G, z) => {
    b.slotScopeIds = G, h == null ? b.shapeFlag & 512 ? V.ctx.activate(
      b,
      M,
      U,
      q,
      z
    ) : $(
      b,
      M,
      U,
      V,
      O,
      q,
      z
    ) : R(h, b, z);
  }, $ = (h, b, M, U, V, O, q) => {
    const G = h.component = $c(
      h,
      U,
      V
    );
    if (ns(h) && (G.ctx.renderer = Oe), Vc(G, !1, q), G.asyncDep) {
      if (V && V.registerDep(G, H, q), !h.el) {
        const z = G.subTree = X(Be);
        g(null, z, b, M), h.placeholder = z.el;
      }
    } else
      H(
        G,
        h,
        b,
        M,
        V,
        O,
        q
      );
  }, R = (h, b, M) => {
    const U = b.component = h.component;
    if (vc(h, b, M))
      if (U.asyncDep && !U.asyncResolved) {
        A(U, b, M);
        return;
      } else
        U.next = b, U.update();
    else
      b.el = h.el, U.vnode = b;
  }, H = (h, b, M, U, V, O, q) => {
    const G = () => {
      if (h.isMounted) {
        let { next: J, bu: ee, u: ae, parent: me, vnode: we } = h;
        {
          const ct = ra(h);
          if (ct) {
            J && (J.el = we.el, A(h, J, q)), ct.asyncDep.then(() => {
              je(() => {
                h.isUnmounted || P();
              }, V);
            });
            return;
          }
        }
        let ye = J, ke;
        zt(h, !1), J ? (J.el = we.el, A(h, J, q)) : J = we, ee && ps(ee), (ke = J.props && J.props.onVnodeBeforeUpdate) && dt(ke, me, J, we), zt(h, !0);
        const Re = bi(h), rt = h.subTree;
        h.subTree = Re, _(
          rt,
          Re,
          // parent may have changed if it's in a teleport
          d(rt.el),
          // anchor may have changed if it's in a fragment
          jt(rt),
          h,
          V,
          O
        ), J.el = Re.el, ye === null && yc(h, Re.el), ae && je(ae, V), (ke = J.props && J.props.onVnodeUpdated) && je(
          () => dt(ke, me, J, we),
          V
        );
      } else {
        let J;
        const { el: ee, props: ae } = b, { bm: me, m: we, parent: ye, root: ke, type: Re } = h, rt = gn(b);
        zt(h, !1), me && ps(me), !rt && (J = ae && ae.onVnodeBeforeMount) && dt(J, ye, b), zt(h, !0);
        {
          ke.ce && ke.ce._hasShadowRoot() && ke.ce._injectChildStyle(
            Re,
            h.parent ? h.parent.type : void 0
          );
          const ct = h.subTree = bi(h);
          _(
            null,
            ct,
            M,
            U,
            h,
            V,
            O
          ), b.el = ct.el;
        }
        if (we && je(we, V), !rt && (J = ae && ae.onVnodeMounted)) {
          const ct = b;
          je(
            () => dt(J, ye, ct),
            V
          );
        }
        (b.shapeFlag & 256 || ye && gn(ye.vnode) && ye.vnode.shapeFlag & 256) && h.a && je(h.a, V), h.isMounted = !0, b = M = U = null;
      }
    };
    h.scope.on();
    const z = h.effect = new hl(G);
    h.scope.off();
    const P = h.update = z.run.bind(z), ne = h.job = z.runIfDirty.bind(z);
    ne.i = h, ne.id = h.uid, z.scheduler = () => Go(ne), zt(h, !0), P();
  }, A = (h, b, M) => {
    b.component = h;
    const U = h.vnode.props;
    h.vnode = b, h.next = null, xc(h, b.props, U, M), Mc(h, b.children, M), yt(), li(h), wt();
  }, j = (h, b, M, U, V, O, q, G, z = !1) => {
    const P = h && h.children, ne = h ? h.shapeFlag : 0, J = b.children, { patchFlag: ee, shapeFlag: ae } = b;
    if (ee > 0) {
      if (ee & 128) {
        Q(
          P,
          J,
          M,
          U,
          V,
          O,
          q,
          G,
          z
        );
        return;
      } else if (ee & 256) {
        W(
          P,
          J,
          M,
          U,
          V,
          O,
          q,
          G,
          z
        );
        return;
      }
    }
    ae & 8 ? (ne & 16 && De(P, V, O), J !== P && c(M, J)) : ne & 16 ? ae & 16 ? Q(
      P,
      J,
      M,
      U,
      V,
      O,
      q,
      G,
      z
    ) : De(P, V, O, !0) : (ne & 8 && c(M, ""), ae & 16 && I(
      J,
      M,
      U,
      V,
      O,
      q,
      G,
      z
    ));
  }, W = (h, b, M, U, V, O, q, G, z) => {
    h = h || pn, b = b || pn;
    const P = h.length, ne = b.length, J = Math.min(P, ne);
    let ee;
    for (ee = 0; ee < J; ee++) {
      const ae = b[ee] = z ? Ft(b[ee]) : mt(b[ee]);
      _(
        h[ee],
        ae,
        M,
        null,
        V,
        O,
        q,
        G,
        z
      );
    }
    P > ne ? De(
      h,
      V,
      O,
      !0,
      !1,
      J
    ) : I(
      b,
      M,
      U,
      V,
      O,
      q,
      G,
      z,
      J
    );
  }, Q = (h, b, M, U, V, O, q, G, z) => {
    let P = 0;
    const ne = b.length;
    let J = h.length - 1, ee = ne - 1;
    for (; P <= J && P <= ee; ) {
      const ae = h[P], me = b[P] = z ? Ft(b[P]) : mt(b[P]);
      if (Jt(ae, me))
        _(
          ae,
          me,
          M,
          null,
          V,
          O,
          q,
          G,
          z
        );
      else
        break;
      P++;
    }
    for (; P <= J && P <= ee; ) {
      const ae = h[J], me = b[ee] = z ? Ft(b[ee]) : mt(b[ee]);
      if (Jt(ae, me))
        _(
          ae,
          me,
          M,
          null,
          V,
          O,
          q,
          G,
          z
        );
      else
        break;
      J--, ee--;
    }
    if (P > J) {
      if (P <= ee) {
        const ae = ee + 1, me = ae < ne ? b[ae].el : U;
        for (; P <= ee; )
          _(
            null,
            b[P] = z ? Ft(b[P]) : mt(b[P]),
            M,
            me,
            V,
            O,
            q,
            G,
            z
          ), P++;
      }
    } else if (P > ee)
      for (; P <= J; )
        ve(h[P], V, O, !0), P++;
    else {
      const ae = P, me = P, we = /* @__PURE__ */ new Map();
      for (P = me; P <= ee; P++) {
        const Xe = b[P] = z ? Ft(b[P]) : mt(b[P]);
        Xe.key != null && we.set(Xe.key, P);
      }
      let ye, ke = 0;
      const Re = ee - me + 1;
      let rt = !1, ct = 0;
      const Cn = new Array(Re);
      for (P = 0; P < Re; P++) Cn[P] = 0;
      for (P = ae; P <= J; P++) {
        const Xe = h[P];
        if (ke >= Re) {
          ve(Xe, V, O, !0);
          continue;
        }
        let ut;
        if (Xe.key != null)
          ut = we.get(Xe.key);
        else
          for (ye = me; ye <= ee; ye++)
            if (Cn[ye - me] === 0 && Jt(Xe, b[ye])) {
              ut = ye;
              break;
            }
        ut === void 0 ? ve(Xe, V, O, !0) : (Cn[ut - me] = P + 1, ut >= ct ? ct = ut : rt = !0, _(
          Xe,
          b[ut],
          M,
          null,
          V,
          O,
          q,
          G,
          z
        ), ke++);
      }
      const Zo = rt ? Dc(Cn) : pn;
      for (ye = Zo.length - 1, P = Re - 1; P >= 0; P--) {
        const Xe = me + P, ut = b[Xe], ei = b[Xe + 1], ti = Xe + 1 < ne ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ei.el || ca(ei)
        ) : U;
        Cn[P] === 0 ? _(
          null,
          ut,
          M,
          ti,
          V,
          O,
          q,
          G,
          z
        ) : rt && (ye < 0 || P !== Zo[ye] ? oe(ut, M, ti, 2) : ye--);
      }
    }
  }, oe = (h, b, M, U, V = null) => {
    const { el: O, type: q, transition: G, children: z, shapeFlag: P } = h;
    if (P & 6) {
      oe(h.component.subTree, b, M, U);
      return;
    }
    if (P & 128) {
      h.suspense.move(b, M, U);
      return;
    }
    if (P & 64) {
      q.move(h, b, M, Oe);
      return;
    }
    if (q === de) {
      s(O, b, M);
      for (let J = 0; J < z.length; J++)
        oe(z[J], b, M, U);
      s(h.anchor, b, M);
      return;
    }
    if (q === lo) {
      D(h, b, M);
      return;
    }
    if (U !== 2 && P & 1 && G)
      if (U === 0)
        G.persisted && !O[tt] ? s(O, b, M) : (G.beforeEnter(O), s(O, b, M), je(() => G.enter(O), V));
      else {
        const { leave: J, delayLeave: ee, afterLeave: ae } = G, me = () => {
          h.ctx.isUnmounted ? o(O) : s(O, b, M);
        }, we = () => {
          const ye = O._isLeaving || !!O[tt];
          O._isLeaving && O[tt](
            !0
            /* cancelled */
          ), G.persisted && !ye ? me() : J(O, () => {
            me(), ae && ae();
          });
        };
        ee ? ee(O, me, we) : we();
      }
    else
      s(O, b, M);
  }, ve = (h, b, M, U = !1, V = !1) => {
    const {
      type: O,
      props: q,
      ref: G,
      children: z,
      dynamicChildren: P,
      shapeFlag: ne,
      patchFlag: J,
      dirs: ee,
      cacheIndex: ae,
      memo: me
    } = h;
    if (J === -2 && (V = !1), G != null && (yt(), Nn(G, null, M, h, !0), wt()), ae != null && (b.renderCache[ae] = void 0), ne & 256) {
      b.ctx.deactivate(h);
      return;
    }
    const we = ne & 1 && ee, ye = !gn(h);
    let ke;
    if (ye && (ke = q && q.onVnodeBeforeUnmount) && dt(ke, b, h), ne & 6)
      $e(h.component, M, U);
    else {
      if (ne & 128) {
        h.suspense.unmount(M, U);
        return;
      }
      we && Wt(h, null, b, "beforeUnmount"), ne & 64 ? h.type.remove(
        h,
        b,
        M,
        Oe,
        U
      ) : P && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !P.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (O !== de || J > 0 && J & 64) ? De(
        P,
        b,
        M,
        !1,
        !0
      ) : (O === de && J & 384 || !V && ne & 16) && De(z, b, M), U && Ze(h);
    }
    const Re = me != null && ae == null;
    (ye && (ke = q && q.onVnodeUnmounted) || we || Re) && je(() => {
      ke && dt(ke, b, h), we && Wt(h, null, b, "unmounted"), Re && (h.el = null);
    }, M);
  }, Ze = (h) => {
    const { type: b, el: M, anchor: U, transition: V } = h;
    if (b === de) {
      le(M, U);
      return;
    }
    if (b === lo) {
      S(h);
      return;
    }
    const O = () => {
      o(M), V && !V.persisted && V.afterLeave && V.afterLeave();
    };
    if (h.shapeFlag & 1 && V && !V.persisted) {
      const { leave: q, delayLeave: G } = V, z = () => q(M, O);
      G ? G(h.el, O, z) : z();
    } else
      O();
  }, le = (h, b) => {
    let M;
    for (; h !== b; )
      M = f(h), o(h), h = M;
    o(b);
  }, $e = (h, b, M) => {
    const { bum: U, scope: V, job: O, subTree: q, um: G, m: z, a: P } = h;
    wi(z), wi(P), U && ps(U), V.stop(), O && (O.flags |= 8, ve(q, h, b, M)), G && je(G, b), je(() => {
      h.isUnmounted = !0;
    }, b);
  }, De = (h, b, M, U = !1, V = !1, O = 0) => {
    for (let q = O; q < h.length; q++)
      ve(h[q], b, M, U, V);
  }, jt = (h) => {
    if (h.shapeFlag & 6)
      return jt(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const b = f(h.anchor || h.el), M = b && b[$l];
    return M ? f(M) : b;
  };
  let ue = !1;
  const qe = (h, b, M) => {
    let U;
    h == null ? b._vnode && (ve(b._vnode, null, null, !0), U = b._vnode.component) : _(
      b._vnode || null,
      h,
      b,
      null,
      null,
      null,
      M
    ), b._vnode = h, ue || (ue = !0, li(U), Tl(), ue = !1);
  }, Oe = {
    p: _,
    um: ve,
    m: oe,
    r: Ze,
    mt: $,
    mc: I,
    pc: j,
    pbc: K,
    n: jt,
    o: e
  };
  return {
    render: qe,
    hydrate: void 0,
    createApp: pc(qe)
  };
}
function io({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function zt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ac(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Yo(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (te(s) && te(o))
    for (let i = 0; i < s.length; i++) {
      const l = s[i];
      let a = o[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[i] = Ft(o[i]), a.el = l.el), !n && a.patchFlag !== -2 && Yo(l, a)), a.type === Gs && (a.patchFlag === -1 && (a = o[i] = Ft(a)), a.el = l.el), a.type === Be && !a.el && (a.el = l.el);
    }
}
function Dc(e) {
  const t = e.slice(), n = [0];
  let s, o, i, l, a;
  const r = e.length;
  for (s = 0; s < r; s++) {
    const u = e[s];
    if (u !== 0) {
      if (o = n[n.length - 1], e[o] < u) {
        t[s] = o, n.push(s);
        continue;
      }
      for (i = 0, l = n.length - 1; i < l; )
        a = i + l >> 1, e[n[a]] < u ? i = a + 1 : l = a;
      u < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, l = n[i - 1]; i-- > 0; )
    n[i] = l, l = t[l];
  return n;
}
function ra(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ra(t);
}
function wi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ca(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ca(t.subTree) : null;
}
const ua = (e) => e.__isSuspense;
function kc(e, t) {
  t && t.pendingBranch ? te(e) ? t.effects.push(...e) : t.effects.push(e) : Tr(e);
}
const de = /* @__PURE__ */ Symbol.for("v-fgt"), Gs = /* @__PURE__ */ Symbol.for("v-txt"), Be = /* @__PURE__ */ Symbol.for("v-cmt"), lo = /* @__PURE__ */ Symbol.for("v-stc"), Vn = [];
let Ye = null;
function C(e = !1) {
  Vn.push(Ye = e ? null : []);
}
function Ec() {
  Vn.pop(), Ye = Vn[Vn.length - 1] || null;
}
let qn = 1;
function Cs(e, t = !1) {
  qn += e, e < 0 && Ye && t && (Ye.hasOnce = !0);
}
function da(e) {
  return e.dynamicChildren = qn > 0 ? Ye || pn : null, Ec(), qn > 0 && Ye && Ye.push(e), e;
}
function E(e, t, n, s, o, i) {
  return da(
    B(
      e,
      t,
      n,
      s,
      o,
      i,
      !0
    )
  );
}
function Ie(e, t, n, s, o) {
  return da(
    X(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function Xn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Jt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const fa = ({ key: e }) => e ?? null, ms = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Me(e) || /* @__PURE__ */ he(e) || ce(e) ? { i: Ne, r: e, k: t, f: !!n } : e : null);
function B(e, t = null, n = null, s = 0, o = null, i = e === de ? 0 : 1, l = !1, a = !1) {
  const r = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && fa(t),
    ref: t && ms(t),
    scopeId: Rl,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Ne
  };
  return a ? (Fs(r, n), i & 128 && e.normalize(r)) : n && (r.shapeFlag |= Me(n) ? 8 : 16), qn > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  Ye && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (r.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  r.patchFlag !== 32 && Ye.push(r), r;
}
const X = Tc;
function Tc(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === Kl) && (e = Be), Xn(e)) {
    const a = Vt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Fs(a, n), qn > 0 && !i && Ye && (a.shapeFlag & 6 ? Ye[Ye.indexOf(e)] = a : Ye.push(a)), a.patchFlag = -2, a;
  }
  if (Wc(e) && (e = e.__vccOpts), t) {
    t = Oc(t);
    let { class: a, style: r } = t;
    a && !Me(a) && (t.class = Le(a)), ge(r) && (/* @__PURE__ */ Hs(r) && !te(r) && (r = Te({}, r)), t.style = ze(r));
  }
  const l = Me(e) ? 1 : ua(e) ? 128 : Vl(e) ? 64 : ge(e) ? 4 : ce(e) ? 2 : 0;
  return B(
    e,
    t,
    n,
    s,
    o,
    l,
    i,
    !0
  );
}
function Oc(e) {
  return e ? /* @__PURE__ */ Hs(e) || na(e) ? Te({}, e) : e : null;
}
function Vt(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: l, children: a, transition: r } = e, u = t ? Rc(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && fa(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? te(i) ? i.concat(ms(t)) : [i, ms(t)] : ms(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== de ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: r,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Vt(e.ssContent),
    ssFallback: e.ssFallback && Vt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return r && s && Kn(
    c,
    r.clone(c)
  ), c;
}
function pa(e = " ", t = 0) {
  return X(Gs, null, e, t);
}
function se(e = "", t = !1) {
  return t ? (C(), Ie(Be, null, e)) : X(Be, null, e);
}
function mt(e) {
  return e == null || typeof e == "boolean" ? X(Be) : te(e) ? X(
    de,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Xn(e) ? Ft(e) : X(Gs, null, String(e));
}
function Ft(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Vt(e);
}
function Fs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (te(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Fs(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !na(t) ? t._ctx = Ne : o === 3 && Ne && (Ne.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ce(t)) {
    if (s & 65) {
      Fs(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ne }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [pa(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Rc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = Le([t.class, s.class]));
      else if (o === "style")
        t.style = ze([t.style, s.style]);
      else if (Es(o)) {
        const i = t[o], l = s[o];
        l && i !== l && !(te(i) && i.includes(l)) ? t[o] = i ? [].concat(i, l) : l : l == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ts(o) && (t[o] = l);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function dt(e, t, n, s = null) {
  ot(e, t, 7, [
    n,
    s
  ]);
}
const Pc = Jl();
let Nc = 0;
function $c(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Pc, i = {
    uid: Nc++,
    vnode: e,
    type: s,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new fl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: oa(s, o),
    emitsOptions: Ql(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: xe,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: xe,
    data: xe,
    props: xe,
    attrs: xe,
    slots: xe,
    refs: xe,
    setupState: xe,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = hc.bind(null, i), e.ce && e.ce(i), i;
}
let Pe = null;
const Jo = () => Pe || Ne;
let Ms, Lo;
{
  const e = Vs(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((l) => l(i)) : o[0](i);
    };
  };
  Ms = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Pe = n
  ), Lo = t(
    "__VUE_SSR_SETTERS__",
    (n) => vn = n
  );
}
const ss = (e) => {
  const t = Pe;
  return Ms(e), e.scope.on(), () => {
    e.scope.off(), Ms(t);
  };
}, xi = () => {
  Pe && Pe.scope.off(), Ms(null);
};
function ma(e) {
  return e.vnode.shapeFlag & 4;
}
let vn = !1;
function Vc(e, t = !1, n = !1) {
  t && Lo(t);
  const { props: s, children: o } = e.vnode, i = ma(e);
  wc(e, s, i, t), Fc(e, o, n || t);
  const l = i ? Bc(e, t) : void 0;
  return t && Lo(!1), l;
}
function Bc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, lc);
  const { setup: s } = n;
  if (s) {
    yt();
    const o = e.setupContext = s.length > 1 ? Uc(e) : null, i = ss(e), l = es(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), a = il(l);
    if (wt(), i(), (a || e.sp) && !gn(e) && Ko(e), a) {
      if (l.then(xi, xi), t)
        return l.then((r) => {
          Si(e, r);
        }).catch((r) => {
          ts(r, e, 0);
        });
      e.asyncDep = l;
    } else
      Si(e, l);
  } else
    ha(e);
}
function Si(e, t, n) {
  ce(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ge(t) && (e.setupState = Al(t)), ha(e);
}
function ha(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || _t);
  {
    const o = ss(e);
    yt();
    try {
      ac(e);
    } finally {
      wt(), o();
    }
  }
}
const Hc = {
  get(e, t) {
    return Ve(e, "get", ""), e[t];
  }
};
function Uc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Hc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ks(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Al(zo(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in $n)
        return $n[n](e);
    },
    has(t, n) {
      return n in t || n in $n;
    }
  })) : e.proxy;
}
function jc(e, t = !0) {
  return ce(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Wc(e) {
  return ce(e) && "__vccOpts" in e;
}
const Y = (e, t) => /* @__PURE__ */ Ir(e, t, vn);
function ga(e, t, n) {
  try {
    Cs(-1);
    const s = arguments.length;
    return s === 2 ? ge(t) && !te(t) ? Xn(t) ? X(e, null, [t]) : X(e, t) : X(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Xn(n) && (n = [n]), X(e, t, n));
  } finally {
    Cs(1);
  }
}
const zc = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Io;
const Ci = typeof window < "u" && window.trustedTypes;
if (Ci)
  try {
    Io = /* @__PURE__ */ Ci.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const _a = Io ? (e) => Io.createHTML(e) : (e) => e, Gc = "http://www.w3.org/2000/svg", Kc = "http://www.w3.org/1998/Math/MathML", Ct = typeof document < "u" ? document : null, Fi = Ct && /* @__PURE__ */ Ct.createElement("template"), qc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? Ct.createElementNS(Gc, e) : t === "mathml" ? Ct.createElementNS(Kc, e) : n ? Ct.createElement(e, { is: n }) : Ct.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => Ct.createTextNode(e),
  createComment: (e) => Ct.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ct.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, i) {
    const l = n ? n.previousSibling : t.lastChild;
    if (o && (o === i || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === i || !(o = o.nextSibling)); )
        ;
    else {
      Fi.innerHTML = _a(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Fi.content;
      if (s === "svg" || s === "mathml") {
        const r = a.firstChild;
        for (; r.firstChild; )
          a.appendChild(r.firstChild);
        a.removeChild(r);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Et = "transition", Ln = "animation", Yn = /* @__PURE__ */ Symbol("_vtc"), ba = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Xc = /* @__PURE__ */ Te(
  {},
  Hl,
  ba
), Yc = (e) => (e.displayName = "Transition", e.props = Xc, e), Jc = /* @__PURE__ */ Yc(
  (e, { slots: t }) => ga(Wr, Qc(e), t)
), Gt = (e, t = []) => {
  te(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Mi = (e) => e ? te(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Qc(e) {
  const t = {};
  for (const x in e)
    x in ba || (t[x] = e[x]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: o,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: l = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: r = i,
    appearActiveClass: u = l,
    appearToClass: c = a,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: f = `${n}-leave-active`,
    leaveToClass: p = `${n}-leave-to`
  } = e, m = Zc(o), _ = m && m[0], v = m && m[1], {
    onBeforeEnter: g,
    onEnter: w,
    onEnterCancelled: D,
    onLeave: S,
    onLeaveCancelled: k,
    onBeforeAppear: ie = g,
    onAppear: T = w,
    onAppearCancelled: I = D
  } = t, L = (x, F, $, R) => {
    x._enterCancelled = R, Kt(x, F ? c : a), Kt(x, F ? u : l), $ && $();
  }, K = (x, F) => {
    x._isLeaving = !1, Kt(x, d), Kt(x, p), Kt(x, f), F && F();
  }, N = (x) => (F, $) => {
    const R = x ? T : w, H = () => L(F, x, $);
    Gt(R, [F, H]), Li(() => {
      Kt(F, x ? r : i), St(F, x ? c : a), Mi(R) || Ii(F, s, _, H);
    });
  };
  return Te(t, {
    onBeforeEnter(x) {
      Gt(g, [x]), St(x, i), St(x, l);
    },
    onBeforeAppear(x) {
      Gt(ie, [x]), St(x, r), St(x, u);
    },
    onEnter: N(!1),
    onAppear: N(!0),
    onLeave(x, F) {
      x._isLeaving = !0;
      const $ = () => K(x, F);
      St(x, d), x._enterCancelled ? (St(x, f), ki(x)) : (ki(x), St(x, f)), Li(() => {
        x._isLeaving && (Kt(x, d), St(x, p), Mi(S) || Ii(x, s, v, $));
      }), Gt(S, [x, $]);
    },
    onEnterCancelled(x) {
      L(x, !1, void 0, !0), Gt(D, [x]);
    },
    onAppearCancelled(x) {
      L(x, !0, void 0, !0), Gt(I, [x]);
    },
    onLeaveCancelled(x) {
      K(x), Gt(k, [x]);
    }
  });
}
function Zc(e) {
  if (e == null)
    return null;
  if (ge(e))
    return [ao(e.enter), ao(e.leave)];
  {
    const t = ao(e);
    return [t, t];
  }
}
function ao(e) {
  return za(e);
}
function St(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Yn] || (e[Yn] = /* @__PURE__ */ new Set())).add(t);
}
function Kt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Yn];
  n && (n.delete(t), n.size || (e[Yn] = void 0));
}
function Li(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let eu = 0;
function Ii(e, t, n, s) {
  const o = e._endId = ++eu, i = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: l, timeout: a, propCount: r } = tu(e, t);
  if (!l)
    return s();
  const u = l + "end";
  let c = 0;
  const d = () => {
    e.removeEventListener(u, f), i();
  }, f = (p) => {
    p.target === e && ++c >= r && d();
  };
  setTimeout(() => {
    c < r && d();
  }, a + 1), e.addEventListener(u, f);
}
function tu(e, t) {
  const n = window.getComputedStyle(e), s = (m) => (n[m] || "").split(", "), o = s(`${Et}Delay`), i = s(`${Et}Duration`), l = Ai(o, i), a = s(`${Ln}Delay`), r = s(`${Ln}Duration`), u = Ai(a, r);
  let c = null, d = 0, f = 0;
  t === Et ? l > 0 && (c = Et, d = l, f = i.length) : t === Ln ? u > 0 && (c = Ln, d = u, f = r.length) : (d = Math.max(l, u), c = d > 0 ? l > u ? Et : Ln : null, f = c ? c === Et ? i.length : r.length : 0);
  const p = c === Et && /\b(?:transform|all)(?:,|$)/.test(
    s(`${Et}Property`).toString()
  );
  return {
    type: c,
    timeout: d,
    propCount: f,
    hasTransform: p
  };
}
function Ai(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Di(n) + Di(e[s])));
}
function Di(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ki(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function nu(e, t, n) {
  const s = e[Yn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ls = /* @__PURE__ */ Symbol("_vod"), va = /* @__PURE__ */ Symbol("_vsh"), Is = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ls] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : In(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), In(e, !0), s.enter(e)) : s.leave(e, () => {
      In(e, !1);
    }) : In(e, t));
  },
  beforeUnmount(e, { value: t }) {
    In(e, t);
  }
};
function In(e, t) {
  e.style.display = t ? e[Ls] : "none", e[va] = !t;
}
const su = /* @__PURE__ */ Symbol(""), ou = /(?:^|;)\s*display\s*:/;
function iu(e, t, n) {
  const s = e.style, o = Me(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (Me(t))
        for (const l of t.split(";")) {
          const a = l.slice(0, l.indexOf(":")).trim();
          n[a] == null && kn(s, a, "");
        }
      else
        for (const l in t)
          n[l] == null && kn(s, l, "");
    for (const l in n) {
      l === "display" && (i = !0);
      const a = n[l];
      a != null ? au(
        e,
        l,
        !Me(t) && t ? t[l] : void 0,
        a
      ) || kn(s, l, a) : kn(s, l, "");
    }
  } else if (o) {
    if (t !== n) {
      const l = s[su];
      l && (n += ";" + l), s.cssText = n, i = ou.test(n);
    }
  } else t && e.removeAttribute("style");
  Ls in e && (e[Ls] = i ? s.display : "", e[va] && (s.display = "none"));
}
const Ei = /\s*!important$/;
function kn(e, t, n) {
  if (te(n))
    n.forEach((s) => kn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = lu(e, t);
    Ei.test(n) ? e.setProperty(
      Bt(s),
      n.replace(Ei, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ti = ["Webkit", "Moz", "ms"], ro = {};
function lu(e, t) {
  const n = ro[t];
  if (n)
    return n;
  let s = Ge(t);
  if (s !== "filter" && s in e)
    return ro[t] = s;
  s = Ns(s);
  for (let o = 0; o < Ti.length; o++) {
    const i = Ti[o] + s;
    if (i in e)
      return ro[t] = i;
  }
  return t;
}
function au(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Me(s) && n === s;
}
const Oi = "http://www.w3.org/1999/xlink";
function Ri(e, t, n, s, o, i = Ja(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Oi, t.slice(6, t.length)) : e.setAttributeNS(Oi, t, n) : n == null || i && !cl(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Qe(n) ? String(n) : n
  );
}
function Pi(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? _a(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const a = i === "OPTION" ? e.getAttribute("value") || "" : e.value, r = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== r || !("_value" in e)) && (e.value = r), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = cl(n) : n == null && a === "string" ? (n = "", l = !0) : a === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(o || t);
}
function Qt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function ru(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ni = /* @__PURE__ */ Symbol("_vei");
function cu(e, t, n, s, o = null) {
  const i = e[Ni] || (e[Ni] = {}), l = i[t];
  if (s && l)
    l.value = s;
  else {
    const [a, r] = fu(t);
    if (s) {
      const u = i[t] = hu(
        s,
        o
      );
      Qt(e, a, u, r);
    } else l && (ru(e, a, l, r), i[t] = void 0);
  }
}
const uu = /(Once|Passive|Capture)$/, du = /^on:?(?:Once|Passive|Capture)$/;
function fu(e) {
  let t, n;
  for (; (n = e.match(uu)) && !du.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Bt(e.slice(2)), t];
}
let co = 0;
const pu = /* @__PURE__ */ Promise.resolve(), mu = () => co || (pu.then(() => co = 0), co = Date.now());
function hu(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const o = n.value;
    if (te(o)) {
      const i = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        i.call(s), s._stopped = !0;
      };
      const l = o.slice(), a = [s];
      for (let r = 0; r < l.length && !s._stopped; r++) {
        const u = l[r];
        u && ot(
          u,
          t,
          5,
          a
        );
      }
    } else
      ot(
        o,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = mu(), n;
}
const $i = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, gu = (e, t, n, s, o, i) => {
  const l = o === "svg";
  t === "class" ? nu(e, s, l) : t === "style" ? iu(e, n, s) : Es(t) ? Ts(t) || cu(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : _u(e, t, s, l)) ? (Pi(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ri(e, t, s, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (bu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Me(s))) ? Pi(e, Ge(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ri(e, t, s, l));
};
function _u(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && $i(t) && ce(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return $i(t) && Me(n) ? !1 : t in e;
}
function bu(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Ge(t);
  return Array.isArray(n) ? n.some((o) => Ge(o) === s) : Object.keys(n).some((o) => Ge(o) === s);
}
const As = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return te(t) ? (n) => ps(t, n) : t;
};
function vu(e) {
  e.target.composing = !0;
}
function Vi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const _n = /* @__PURE__ */ Symbol("_assign");
function Bi(e, t, n) {
  return t && (e = e.trim()), n && (e = $s(e)), e;
}
const vt = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[_n] = As(o);
    const i = s || o.props && o.props.type === "number";
    Qt(e, t ? "change" : "input", (l) => {
      l.target.composing || e[_n](Bi(e.value, n, i));
    }), (n || i) && Qt(e, "change", () => {
      e.value = Bi(e.value, n, i);
    }), t || (Qt(e, "compositionstart", vu), Qt(e, "compositionend", Vi), Qt(e, "change", Vi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: i } }, l) {
    if (e[_n] = As(l), e.composing) return;
    const a = (i || e.type === "number") && !/^0\d/.test(e.value) ? $s(e.value) : e.value, r = t ?? "";
    if (a === r)
      return;
    const u = e.getRootNode();
    (u instanceof Document || u instanceof ShadowRoot) && u.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === r) || (e.value = r);
  }
}, yu = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = Os(t);
    Qt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? $s(Ds(l)) : Ds(l)
      );
      e[_n](
        e.multiple ? o ? new Set(i) : i : i[0]
      ), e._assigning = !0, wn(() => {
        e._assigning = !1;
      });
    }), e[_n] = As(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Hi(e, t);
  },
  beforeUpdate(e, t, n) {
    e[_n] = As(n);
  },
  updated(e, { value: t }) {
    e._assigning || Hi(e, t);
  }
};
function Hi(e, t) {
  const n = e.multiple, s = te(t);
  if (!(n && !s && !Os(t))) {
    for (let o = 0, i = e.options.length; o < i; o++) {
      const l = e.options[o], a = Ds(l);
      if (n)
        if (s) {
          const r = typeof a;
          r === "string" || r === "number" ? l.selected = t.some((u) => String(u) === String(a)) : l.selected = Za(t, a) > -1;
        } else
          l.selected = t.has(a);
      else if (Zn(Ds(l), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Ds(e) {
  return "_value" in e ? e._value : e.value;
}
const wu = ["ctrl", "shift", "alt", "meta"], xu = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => wu.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ui = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...i) => {
    for (let l = 0; l < t.length; l++) {
      const a = xu[t[l]];
      if (a && a(o, t)) return;
    }
    return e(o, ...i);
  });
}, Su = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, hs = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const i = Bt(o.key);
    if (t.some(
      (l) => l === i || Su[l] === i
    ))
      return e(o);
  });
}, Cu = /* @__PURE__ */ Te({ patchProp: gu }, qc);
let ji;
function ya() {
  return ji || (ji = Lc(Cu));
}
const Wi = (...e) => {
  ya().render(...e);
}, qs = (...e) => {
  const t = ya().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = Mu(s);
    if (!o) return;
    const i = t._component;
    !ce(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const l = n(o, !1, Fu(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), l;
  }, t;
};
function Fu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Mu(e) {
  return Me(e) ? document.querySelector(e) : e;
}
const Xs = {
  accent: "#f08a45",
  panel: "#171b22",
  panelAlt: "#222934",
  text: "#e8edf3",
  muted: "#9ca8b5",
  danger: "#ef6666",
  ok: "#62c987"
}, Lu = {
  accent: "#c9682c",
  panel: "#eef1f5",
  panelAlt: "#e2e6ec",
  text: "#1c2430",
  muted: "#5b6572",
  danger: "#c94b4b",
  ok: "#3f8f5f"
}, Iu = {
  accent: "#00e5ff",
  panel: "#0a0e1a",
  panelAlt: "#131a2e",
  text: "#dff9ff",
  muted: "#5f7d94",
  danger: "#ff2e63",
  ok: "#00ff9f"
}, Au = {
  accent: "#d4a017",
  panel: "#1a1712",
  panelAlt: "#26221a",
  text: "#e8dcc0",
  muted: "#8a7d5f",
  danger: "#9a3324",
  ok: "#8fbf3f"
}, Du = {
  default: Xs,
  cyberpunk: Iu,
  fallout: Au
}, Mt = { ...Xs };
let Bn = null, Hn = null;
function Ao(e) {
  return `--fil-accent:${e.accent};--fil-panel:${e.panel};--fil-panel-alt:${e.panelAlt};--fil-text:${e.text};--fil-muted:${e.muted};--fil-danger:${e.danger};--fil-ok:${e.ok};`;
}
const ku = {
  default: "",
  cyberpunk: `
[data-fil-theme="cyberpunk"] .comfy-node-header{box-shadow:0 0 12px var(--fil-accent);}
[data-fil-theme="cyberpunk"] .fil-w-seg.active,
[data-fil-theme="cyberpunk"] .fil-combo-trigger.open,
[data-fil-theme="cyberpunk"] .fil-combo-trigger:focus-visible{box-shadow:0 0 6px var(--fil-accent),0 0 14px var(--fil-accent);}
[data-fil-theme="cyberpunk"] [class$="-root"]{border:1px solid rgba(0,229,255,0.18);}
`,
  fallout: `
[data-fil-theme="fallout"] [class$="-root"]{
  background-image:repeating-linear-gradient(0deg,rgba(0,0,0,0.12) 0px,rgba(0,0,0,0.12) 1px,transparent 1px,transparent 3px);
  border:1px solid rgba(212,160,23,0.2);
}
[data-fil-theme="fallout"] .comfy-node-header{text-shadow:0 0 4px rgba(212,160,23,0.55);}
`
}, Eu = "--fil-surface-bg:rgba(100,180,220,0.06);--fil-surface-border:rgba(0,255,255,0.18);--fil-surface-radius:20px;--fil-surface-blur:10px;--fil-surface-shadow:0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08);--fil-glass-bg:rgba(50,80,120,0.18);--fil-glass-border:rgba(0,150,200,0.35);--fil-field-radius:10px;--fil-pill-radius:17px;--fil-pill-bg:rgba(255,255,255,0.06);--fil-pill-border:rgba(0,150,200,0.4);", Tu = "--fil-surface-bg:rgba(70,130,170,0.08);--fil-surface-border:rgba(40,120,160,0.28);--fil-surface-radius:20px;--fil-surface-blur:10px;--fil-surface-shadow:0 8px 24px rgba(40,60,90,0.18), inset 0 1px 0 rgba(255,255,255,0.5);--fil-glass-bg:rgba(120,160,200,0.16);--fil-glass-border:rgba(40,120,160,0.3);--fil-field-radius:10px;--fil-pill-radius:17px;--fil-pill-bg:rgba(30,60,90,0.06);--fil-pill-border:rgba(40,120,160,0.35);";
function Ou() {
  if (typeof document > "u" || document.getElementById("fil-brand-vars")) return;
  const e = document.createElement("style");
  e.id = "fil-brand-vars", e.textContent = `:root{${Ao(Xs)}--fil-radius:8px;--fil-node-pad:3px;--fil-node-gap:4px;--fil-row-pad:4px 6px;--fil-input-border:rgba(240,138,69,0.35);${Eu}}
.comfy-theme-light{${Ao(Lu)}--fil-input-border:rgba(201,104,44,0.35);${Tu}}
.comfy-multiline-input{border-color:var(--fil-input-border) !important;}
/* Shared "Neo-Tactile" glass surface for every node body (scoped to the Vue
 * shell so it only hits node roots). Values live in the fil-surface and
 * fil-glass tokens above, so a future style just reassigns the tokens. */
.fil-node-shell [class$="-root"]{
  background:var(--fil-surface-bg);
  border:1px solid var(--fil-surface-border);
  border-radius:var(--fil-surface-radius);
  backdrop-filter:blur(var(--fil-surface-blur));
  box-shadow:var(--fil-surface-shadow);
  overflow:hidden;
}`, document.head.appendChild(e), Bn = document.createElement("style"), Bn.id = "fil-theme-vars", document.head.appendChild(Bn), Hn = document.createElement("style"), Hn.id = "fil-theme-effects", document.head.appendChild(Hn);
}
function wa(e) {
  const t = Du[e] ?? Xs;
  Object.assign(Mt, t), !(typeof document > "u") && (document.documentElement.dataset.filTheme = e, Bn && (Bn.textContent = e === "default" ? "" : `:root{${Ao(t)}}`), Hn && (Hn.textContent = ku[e] ?? ""));
}
const Ru = {
  class: "fil-color-picker",
  role: "group",
  "aria-label": "Color picker"
}, Pu = { class: "fil-cp-hex-row" }, Nu = {
  class: "fil-cp-presets",
  role: "listbox",
  "aria-label": "Preset colors"
}, $u = ["aria-selected", "aria-label", "title", "onClick"], Vu = /* @__PURE__ */ Se({
  __name: "FilColorPicker",
  props: {
    modelValue: { default: "#78716c" },
    presets: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = [
      "#ef4444",
      "#f97316",
      "#eab308",
      "#22c55e",
      "#14b8a6",
      "#3b82f6",
      "#6366f1",
      "#a855f7",
      "#ec4899",
      "#78716c"
    ], s = e, o = t, i = Y(() => s.presets ?? n);
    function l(F) {
      o("update:modelValue", F);
    }
    function a(F) {
      return Math.min(1, Math.max(0, F));
    }
    function r(F) {
      const $ = /^#?([0-9a-f]{6})$/i.exec(F.trim());
      if (!$) return null;
      const R = parseInt($[1], 16);
      return [R >> 16 & 255, R >> 8 & 255, R & 255];
    }
    function u(F, $, R) {
      const H = (A) => Math.round(a(A / 255) * 255).toString(16).padStart(2, "0");
      return `#${H(F)}${H($)}${H(R)}`;
    }
    function c(F, $, R) {
      const H = F / 255, A = $ / 255, j = R / 255, W = Math.max(H, A, j), Q = Math.min(H, A, j), oe = W - Q;
      let ve = 0;
      oe !== 0 && (W === H ? ve = (A - j) / oe % 6 : W === A ? ve = (j - H) / oe + 2 : ve = (H - A) / oe + 4, ve *= 60, ve < 0 && (ve += 360));
      const Ze = W === 0 ? 0 : oe / W;
      return [ve, Ze, W];
    }
    function d(F, $, R) {
      const H = R * $, A = H * (1 - Math.abs(F / 60 % 2 - 1)), j = R - H;
      let [W, Q, oe] = [0, 0, 0];
      return F < 60 ? [W, Q, oe] = [H, A, 0] : F < 120 ? [W, Q, oe] = [A, H, 0] : F < 180 ? [W, Q, oe] = [0, H, A] : F < 240 ? [W, Q, oe] = [0, A, H] : F < 300 ? [W, Q, oe] = [A, 0, H] : [W, Q, oe] = [H, 0, A], [(W + j) * 255, (Q + j) * 255, (oe + j) * 255];
    }
    const f = /* @__PURE__ */ re(0), p = /* @__PURE__ */ re(0), m = /* @__PURE__ */ re(0), _ = /* @__PURE__ */ re(s.modelValue);
    function v(F) {
      const $ = r(F);
      if (!$) return;
      const [R, H, A] = c(...$);
      f.value = R, p.value = H, m.value = A, _.value = u(...$);
    }
    He(() => s.modelValue, (F) => v(F), { immediate: !0 });
    const g = Y(() => u(...d(f.value, p.value, m.value)));
    function w() {
      o("update:modelValue", g.value), _.value = g.value;
    }
    function D() {
      const F = r(_.value);
      if (!F) {
        _.value = g.value;
        return;
      }
      const [$, R, H] = c(...F);
      f.value = $, p.value = R, m.value = H, o("update:modelValue", u(...F));
    }
    const S = /* @__PURE__ */ re(null), k = /* @__PURE__ */ re(null);
    function ie(F) {
      const $ = S.value;
      if (!$) return;
      const R = $.getBoundingClientRect();
      p.value = a((F.clientX - R.left) / R.width), m.value = a(1 - (F.clientY - R.top) / R.height), w();
    }
    function T(F) {
      const $ = k.value;
      if (!$) return;
      const R = $.getBoundingClientRect();
      f.value = a((F.clientX - R.left) / R.width) * 360, w();
    }
    function I(F) {
      F.preventDefault(), ie(F);
      const $ = (H) => ie(H), R = () => {
        window.removeEventListener("pointermove", $), window.removeEventListener("pointerup", R);
      };
      window.addEventListener("pointermove", $), window.addEventListener("pointerup", R);
    }
    function L(F) {
      F.preventDefault(), T(F);
      const $ = (H) => T(H), R = () => {
        window.removeEventListener("pointermove", $), window.removeEventListener("pointerup", R);
      };
      window.addEventListener("pointermove", $), window.addEventListener("pointerup", R);
    }
    const K = Y(() => `hsl(${f.value}, 100%, 50%)`), N = Y(() => ({
      left: `${p.value * 100}%`,
      top: `${(1 - m.value) * 100}%`
    })), x = Y(() => ({ left: `${f.value / 360 * 100}%` }));
    return (F, $) => (C(), E("div", Ru, [
      B("div", {
        ref_key: "svRef",
        ref: S,
        class: "fil-cp-sv",
        style: ze({ background: K.value }),
        onPointerdown: I
      }, [
        $[1] || ($[1] = B("div", { class: "fil-cp-sv-white" }, null, -1)),
        $[2] || ($[2] = B("div", { class: "fil-cp-sv-black" }, null, -1)),
        B("div", {
          class: "fil-cp-sv-thumb",
          style: ze(N.value)
        }, null, 4)
      ], 36),
      B("div", {
        ref_key: "hueRef",
        ref: k,
        class: "fil-cp-hue",
        onPointerdown: L
      }, [
        B("div", {
          class: "fil-cp-hue-thumb",
          style: ze(x.value)
        }, null, 4)
      ], 544),
      B("div", Pu, [
        B("span", {
          class: "fil-cp-swatch",
          style: ze({ background: g.value })
        }, null, 4),
        Ke(B("input", {
          "onUpdate:modelValue": $[0] || ($[0] = (R) => _.value = R),
          class: "fil-cp-hex-input",
          type: "text",
          spellcheck: "false",
          "aria-label": "Hex color",
          onKeydown: hs(D, ["enter"]),
          onBlur: D
        }, null, 544), [
          [vt, _.value]
        ])
      ]),
      B("div", Nu, [
        (C(!0), E(de, null, Ae(i.value, (R) => (C(), E("button", {
          key: R,
          class: Le(["fil-color-swatch", { "is-active": e.modelValue === R }]),
          style: ze({ "--swatch": R }),
          "aria-selected": e.modelValue === R,
          "aria-label": R,
          title: R,
          onClick: (H) => l(R)
        }, null, 14, $u))), 128))
      ])
    ]));
  }
}), Fe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Bu = /* @__PURE__ */ Fe(Vu, [["__scopeId", "data-v-c4d5f476"]]), zi = "__fil_color_picker_popup__";
function Hu(e) {
  return [
    {
      content: "Change color…",
      callback: (t, n, s) => Uu(e, s)
    }
  ];
}
function Uu(e, t) {
  const n = document.getElementById(zi);
  n && n.remove();
  const s = document.createElement("div");
  s.id = zi;
  const o = 176, i = 260, l = t ? Math.min(t.clientX, window.innerWidth - o - 8) : window.innerWidth / 2 - o / 2, a = t ? Math.min(t.clientY, window.innerHeight - i - 8) : window.innerHeight / 2 - i / 2;
  s.style.cssText = `position:fixed;z-index:10001;top:${Math.max(8, a)}px;left:${Math.max(8, l)}px;`, document.body.appendChild(s);
  function r(p) {
    e.color = p, e.__fx && (e.__fx.color = p), e.properties = e.properties || {}, e.properties.fil_custom_color = !0, u();
  }
  function u() {
    Wi(null, s), s.remove(), document.removeEventListener("mousedown", c, !0), document.removeEventListener("keydown", d, !0);
  }
  function c(p) {
    s.contains(p.target) || u();
  }
  function d(p) {
    p.key === "Escape" && u();
  }
  const f = ga(Bu, {
    modelValue: e.color ?? "#78716c",
    "onUpdate:modelValue": (p) => r(p)
  });
  Wi(f, s), document.addEventListener("mousedown", c, !0), document.addEventListener("keydown", d, !0), wn(() => {
    var p;
    (p = s.querySelector(".fil-color-swatch")) == null || p.focus();
  });
}
const ju = "fil";
function Ht(e, t = {}) {
  const s = e.prototype;
  if (s._filStyled) return;
  s._filStyled = !0, t.minSize && (s.minSize = t.minSize), s._filFamily = t.family ?? ju, s._filDescription = t.description ?? "", t.badges && (s.badges = t.badges), s.color = Mt.accent, s.bgcolor = Mt.panelAlt;
  const o = s.onNodeCreated;
  s.onNodeCreated = function(...l) {
    const a = o == null ? void 0 : o.apply(this, l);
    return this.color = Mt.accent, this.bgcolor = Mt.panelAlt, a;
  }, s.onDrawTitleBar = function(l, a, r, u, c) {
    var m;
    const d = ((m = globalThis.LiteGraph) == null ? void 0 : m.ROUND_RADIUS) ?? 8, f = !!this.collapsed;
    l.fillStyle = Mt.panel, l.beginPath(), l.roundRect(0, -a, r[0], a, f ? [d] : [d, d, 0, 0]), l.fill();
    const p = 3;
    l.fillStyle = c || Mt.accent, l.beginPath(), l.roundRect(0, -a, p, a, f ? [d, 0, 0, d] : [d, 0, 0, 0]), l.fill();
  };
  const i = s.getExtraMenuOptions;
  s.getExtraMenuOptions = function(...l) {
    const a = i == null ? void 0 : i.apply(this, l), r = l[1];
    return Array.isArray(r) && r.push(null, ...Hu(this)), a;
  };
}
function Wu(e) {
  var s, o, i;
  const t = (s = e.graph) == null ? void 0 : s._nodes;
  if (!t) return;
  for (const l of t)
    l._filFamily && ((o = l.properties) != null && o.fil_custom_color || (l.color = Mt.accent, l.bgcolor = Mt.panelAlt));
  const n = e.canvas;
  (i = n == null ? void 0 : n.setDirty) == null || i.call(n, !0, !0);
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let xa;
const Ys = (e) => xa = e, Sa = (
  /* istanbul ignore next */
  Symbol()
);
function Do(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Un;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Un || (Un = {}));
function Ca() {
  const e = pl(!0), t = e.run(() => /* @__PURE__ */ re({}));
  let n = [], s = [];
  const o = zo({
    install(i) {
      Ys(o), o._a = i, i.provide(Sa, o), i.config.globalProperties.$pinia = o, s.forEach((l) => n.push(l)), s = [];
    },
    use(i) {
      return this._a ? n.push(i) : s.push(i), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return o;
}
const Fa = () => {
};
function Gi(e, t, n, s = Fa) {
  e.push(t);
  const o = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), s());
  };
  return !n && ml() && er(o), o;
}
function dn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const zu = (e) => e(), Ki = Symbol(), uo = Symbol();
function ko(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], o = e[n];
    Do(o) && Do(s) && e.hasOwnProperty(n) && !/* @__PURE__ */ he(s) && !/* @__PURE__ */ bt(s) ? e[n] = ko(o, s) : e[n] = s;
  }
  return e;
}
const Gu = (
  /* istanbul ignore next */
  Symbol()
);
function Ku(e) {
  return !Do(e) || !e.hasOwnProperty(Gu);
}
const { assign: Ot } = Object;
function qu(e) {
  return !!(/* @__PURE__ */ he(e) && e.effect);
}
function Xu(e, t, n, s) {
  const { state: o, actions: i, getters: l } = t, a = n.state.value[e];
  let r;
  function u() {
    a || (n.state.value[e] = o ? o() : {});
    const c = /* @__PURE__ */ Sr(n.state.value[e]);
    return Ot(c, i, Object.keys(l || {}).reduce((d, f) => (d[f] = zo(Y(() => {
      Ys(n);
      const p = n._s.get(e);
      return l[f].call(p, p);
    })), d), {}));
  }
  return r = Ma(e, u, t, n, s, !0), r;
}
function Ma(e, t, n = {}, s, o, i) {
  let l;
  const a = Ot({ actions: {} }, n), r = { deep: !0 };
  let u, c, d = [], f = [], p;
  const m = s.state.value[e];
  !i && !m && (s.state.value[e] = {});
  let _;
  function v(I) {
    let L;
    u = c = !1, typeof I == "function" ? (I(s.state.value[e]), L = {
      type: Un.patchFunction,
      storeId: e,
      events: p
    }) : (ko(s.state.value[e], I), L = {
      type: Un.patchObject,
      payload: I,
      storeId: e,
      events: p
    });
    const K = _ = Symbol();
    wn().then(() => {
      _ === K && (u = !0);
    }), c = !0, dn(d, L, s.state.value[e]);
  }
  const g = i ? function() {
    const { state: L } = n, K = L ? L() : {};
    this.$patch((N) => {
      Ot(N, K);
    });
  } : (
    /* istanbul ignore next */
    Fa
  );
  function w() {
    l.stop(), d = [], f = [], s._s.delete(e);
  }
  const D = (I, L = "") => {
    if (Ki in I)
      return I[uo] = L, I;
    const K = function() {
      Ys(s);
      const N = Array.from(arguments), x = [], F = [];
      function $(A) {
        x.push(A);
      }
      function R(A) {
        F.push(A);
      }
      dn(f, {
        args: N,
        name: K[uo],
        store: k,
        after: $,
        onError: R
      });
      let H;
      try {
        H = I.apply(this && this.$id === e ? this : k, N);
      } catch (A) {
        throw dn(F, A), A;
      }
      return H instanceof Promise ? H.then((A) => (dn(x, A), A)).catch((A) => (dn(F, A), Promise.reject(A))) : (dn(x, H), H);
    };
    return K[Ki] = !0, K[uo] = L, K;
  }, S = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Gi.bind(null, f),
    $patch: v,
    $reset: g,
    $subscribe(I, L = {}) {
      const K = Gi(d, I, L.detached, () => N()), N = l.run(() => He(() => s.state.value[e], (x) => {
        (L.flush === "sync" ? c : u) && I({
          storeId: e,
          type: Un.direct,
          events: p
        }, x);
      }, Ot({}, r, L)));
      return K;
    },
    $dispose: w
  }, k = /* @__PURE__ */ on(S);
  s._s.set(e, k);
  const T = (s._a && s._a.runWithContext || zu)(() => s._e.run(() => (l = pl()).run(() => t({ action: D }))));
  for (const I in T) {
    const L = T[I];
    if (/* @__PURE__ */ he(L) && !qu(L) || /* @__PURE__ */ bt(L))
      i || (m && Ku(L) && (/* @__PURE__ */ he(L) ? L.value = m[I] : ko(L, m[I])), s.state.value[e][I] = L);
    else if (typeof L == "function") {
      const K = D(L, I);
      T[I] = K, a.actions[I] = L;
    }
  }
  return Ot(k, T), Ot(/* @__PURE__ */ pe(k), T), Object.defineProperty(k, "$state", {
    get: () => s.state.value[e],
    set: (I) => {
      v((L) => {
        Ot(L, I);
      });
    }
  }), s._p.forEach((I) => {
    Ot(k, l.run(() => I({
      store: k,
      app: s._a,
      pinia: s,
      options: a
    })));
  }), m && i && n.hydrate && n.hydrate(k.$state, m), u = !0, c = !0, k;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Qo(e, t, n) {
  let s, o;
  const i = typeof t == "function";
  typeof e == "string" ? (s = e, o = i ? n : t) : (o = e, s = e.id);
  function l(a, r) {
    const u = Rr();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (u ? Pn(Sa, null) : null), a && Ys(a), a = xa, a._s.has(s) || (i ? Ma(s, t, o, a) : Xu(s, o, a)), a._s.get(s);
  }
  return l.$id = s, l;
}
function Yu(e) {
  {
    const t = /* @__PURE__ */ pe(e), n = {};
    for (const s in t) {
      const o = t[s];
      o.effect ? n[s] = // ...
      Y({
        get: () => e[s],
        set(i) {
          e[s] = i;
        }
      }) : (/* @__PURE__ */ he(o) || /* @__PURE__ */ bt(o)) && (n[s] = // ---
      /* @__PURE__ */ Mr(e, s));
    }
    return n;
  }
}
let Zt = null;
function Ju(e) {
  return Zt || (Zt = Ca(), Zt);
}
function Js() {
  return Zt || (Zt = Ca()), Zt;
}
const Qu = {
  // Common actions
  close: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>',
  menu: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>',
  help: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.263c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/></svg>',
  settings: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311a1.464 1.464 0 0 1-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/></svg>',
  info: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>',
  search: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>',
  play: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>',
  refresh: '<svg viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/><path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/></svg>',
  warning: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>',
  chevronLeft: '<svg viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>',
  chevronRight: '<svg viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>',
  check: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg>',
  copy: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>',
  trash: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>',
  plus: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>',
  external: '<svg viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/><path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/></svg>',
  // Provider logos (simple letter-based SVGs)
  "provider-ollama": '<svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="#6b5b95"/><text x="8" y="11" text-anchor="middle" font-size="9" font-weight="700" fill="white" font-family="sans-serif">O</text></svg>',
  "provider-lmstudio": '<svg viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="14" height="14" rx="3" fill="#4a90d9"/><text x="8" y="11" text-anchor="middle" font-size="7" font-weight="700" fill="white" font-family="sans-serif">LM</text></svg>',
  "provider-openai": '<svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="#10a37f"/><text x="8" y="11" text-anchor="middle" font-size="7" font-weight="700" fill="white" font-family="sans-serif">AI</text></svg>',
  "provider-groq": '<svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="#f97316"/><text x="8" y="11" text-anchor="middle" font-size="9" font-weight="700" fill="white" font-family="sans-serif">G</text></svg>',
  "provider-google": '<svg viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="14" height="14" rx="3" fill="#4285f4"/><text x="8" y="11" text-anchor="middle" font-size="8" font-weight="700" fill="white" font-family="sans-serif">G+</text></svg>',
  "provider-openrouter": '<svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="#8b5cf6"/><text x="8" y="11" text-anchor="middle" font-size="7" font-weight="700" fill="white" font-family="sans-serif">OR</text></svg>',
  "provider-cloudflare": '<svg viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="14" height="14" rx="3" fill="#f38020"/><text x="8" y="11" text-anchor="middle" font-size="7" font-weight="700" fill="white" font-family="sans-serif">CF</text></svg>'
};
function La(e) {
  return Qu[e];
}
const Zu = ["title", "aria-label", "innerHTML"], ed = /* @__PURE__ */ Se({
  name: "FilIcon",
  __name: "FilIcon",
  props: {
    name: {},
    size: { default: 16 },
    title: {}
  },
  setup(e) {
    return (t, n) => (C(), E("span", {
      class: "fil-icon",
      style: ze({ width: e.size + "px", height: e.size + "px" }),
      title: e.title,
      role: "img",
      "aria-label": e.title ?? e.name,
      innerHTML: y(La)(e.name)
    }, null, 12, Zu));
  }
}), yn = /* @__PURE__ */ Fe(ed, [["__scopeId", "data-v-dfb78d9f"]]), cs = /* @__PURE__ */ re({});
let qi = !1;
const Jn = /* @__PURE__ */ Qo("fil/help", () => {
  const e = /* @__PURE__ */ re(null);
  function t(a) {
    for (const [r, u] of Object.entries(a))
      cs.value[r] = u;
  }
  function n() {
    qi || (qi = !0, Promise.resolve().then(() => op).then(({ HELP_DEFAULTS: a }) => t(a)).catch((a) => console.warn("[FiL_Design_ImageMind] help defaults import failed:", a)));
  }
  function s(a) {
    return cs.value[a];
  }
  function o() {
    return Object.values(cs.value);
  }
  function i(a) {
    n(), e.value = a;
  }
  function l() {
    e.value = null;
  }
  return {
    registry: cs,
    activeHelpId: e,
    ensureHelpDefaultsInjected: n,
    registerAll: t,
    get: s,
    list: o,
    value_open: i,
    value_close: l
  };
}), Ia = "FiL_Design_ImageMind", Rt = "/fil_design_imagemind", nn = `[${Ia}]`, td = `${Ia}.UI`;
async function Aa(e) {
  let t;
  try {
    t = await e.json();
  } catch {
    t = {};
  }
  if (!e.ok) {
    const n = (t == null ? void 0 : t.error) || `HTTP ${e.status}`;
    throw new Error(n);
  }
  return t;
}
function Xi(e) {
  var o;
  const n = `/view?${new URLSearchParams({
    filename: e.filename,
    type: e.type || "temp",
    subfolder: e.subfolder || ""
  }).toString()}`, s = globalThis;
  return (o = s.api) != null && o.apiURL ? s.api.apiURL(n) : n;
}
function Da() {
  var t;
  const e = globalThis;
  if ((t = e.api) != null && t.fetchApi) return (n, s) => e.api.fetchApi(n, s);
  if (e.fetch) return e.fetch.bind(globalThis);
  throw new Error(`${nn} no HTTP transport (api.fetchApi or window.fetch undefined)`);
}
async function En(e) {
  const t = await Da()(e);
  return Aa(t);
}
async function fo(e, t) {
  const n = await Da()(e, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  });
  return Aa(n);
}
const Xt = {
  loadAccounts: () => En(`${Rt}/auth`),
  saveAccounts: (e) => fo(`${Rt}/auth`, {
    accounts: e
  }),
  loadModels: (e, t = !1) => En(`${Rt}/models/${encodeURIComponent(e)}${t ? "?force=1" : ""}`),
  probe: (e, t = "") => fo(`${Rt}/provider_probe`, { provider: e, model: t }),
  listProviders: () => En(`${Rt}/providers`),
  saveCompareImage: (e) => fo(`${Rt}/compare/save`, { image: e }),
  nodeContracts: () => En(`${Rt}/node_contracts`)
};
function ka(e, t, n) {
  var o, i, l, a, r, u, c, d;
  const s = n ?? globalThis;
  try {
    const f = (l = (i = (o = s.app) == null ? void 0 : o.extensionManager) == null ? void 0 : i.setting) == null ? void 0 : l.get;
    if (typeof f == "function") return f(e, t);
    const p = ((r = (a = s.ui) == null ? void 0 : a.settings) == null ? void 0 : r.getSettingValue) ?? ((d = (c = (u = globalThis.app) == null ? void 0 : u.ui) == null ? void 0 : c.settings) == null ? void 0 : d.getSettingValue);
    if (typeof p == "function") return p(e, t);
  } catch (f) {
    console.warn(`[FiL_Design_ImageMind] setting read failed for "${e}":`, f);
  }
  return t;
}
const nd = "FiL_Design_ImageMind.Language", Ea = "en", jn = /* @__PURE__ */ on({
  lang: Ea,
  translations: {},
  loaded: !1
});
let Yi = null;
async function sd(e) {
  try {
    const t = await En(`/fil_design_imagemind/locale/${encodeURIComponent(e)}`);
    jn.translations = t, jn.lang = e;
  } catch (t) {
    console.warn(`[FiL_Design_ImageMind] failed to load locale "${e}":`, t);
  } finally {
    jn.loaded = !0;
  }
}
function od() {
  if (Yi) return;
  const e = ka(nd, Ea);
  Yi = sd(e);
}
function kt() {
  od();
  function e(t, n) {
    return jn.translations[t] ?? n;
  }
  return { t: e, state: /* @__PURE__ */ bs(jn) };
}
const id = ["title"], ld = /* @__PURE__ */ Se({
  __name: "FilNodeHelpBadge",
  props: {
    nodeId: {}
  },
  setup(e) {
    const t = e, n = Jn(), { t: s } = kt();
    function o() {
      n.value_open(t.nodeId);
    }
    return (i, l) => (C(), E("button", {
      type: "button",
      class: "fil-node-help-badge",
      title: y(s)("tt_node_help", "Help for this node"),
      onClick: o
    }, [
      X(yn, {
        name: "help",
        size: 13
      })
    ], 8, id));
  }
}), ad = /* @__PURE__ */ Fe(ld, [["__scopeId", "data-v-3001cdba"]]), rd = { class: "fil-node-shell" }, cd = /* @__PURE__ */ Se({
  __name: "FilNodeShell",
  props: {
    root: {},
    state: {},
    comfyClass: {}
  },
  setup(e) {
    return (t, n) => (C(), E("div", rd, [
      X(ad, { "node-id": e.comfyClass }, null, 8, ["node-id"]),
      (C(), Ie(sc(e.root), { state: e.state }, null, 8, ["state"]))
    ]));
  }
}), ud = /* @__PURE__ */ Fe(cd, [["__scopeId", "data-v-0fbe412b"]]), dd = "__filVueMounted";
function rn(e, t, n, s) {
  const o = e;
  if (typeof o.addDOMWidget != "function")
    return console.warn(`[FiL_Design_ImageMind] domWidgetHost: node.addDOMWidget not available for "${t}" — ComfyUI core too old?`), null;
  const i = document.createElement("div");
  i.className = "fil-vue-host", i.style.width = "100%", i.style.boxSizing = "border-box", i.style.height = "auto", i[dd] = !0, i.addEventListener(
    "wheel",
    (m) => {
      var v, g;
      const _ = (g = (v = globalThis.app) == null ? void 0 : v.canvas) == null ? void 0 : g.canvas;
      _ instanceof HTMLCanvasElement && (m.preventDefault(), _.dispatchEvent(new WheelEvent("wheel", {
        deltaX: m.deltaX,
        deltaY: m.deltaY,
        deltaZ: m.deltaZ,
        deltaMode: m.deltaMode,
        clientX: m.clientX,
        clientY: m.clientY,
        bubbles: !0,
        cancelable: !0
      })));
    },
    { passive: !1 }
  );
  const l = /* @__PURE__ */ on(s.state);
  let a = s.height;
  const r = o.addDOMWidget(t, "custom", i, {
    hideOnZoom: !0,
    getValue: () => l,
    setValue: (m) => {
      m && typeof m == "object" && Object.assign(l, m);
    },
    getHeight: () => a,
    ...s.onDraw ? { onDraw: s.onDraw } : {}
  }), u = qs(ud, { root: n, state: l, comfyClass: o.comfyClass ?? "default" }).use(Js());
  u.mount(i);
  let c = 0;
  const d = new ResizeObserver(() => {
    c || (c = requestAnimationFrame(() => {
      var v, g;
      c = 0;
      const m = i.firstElementChild, _ = Math.ceil(((m == null ? void 0 : m.scrollHeight) ?? a) / 4) * 4;
      if (!(Math.abs(_ - a) < 2)) {
        if (a = _, o.computeSize && o.setSize && o.size) {
          const [w] = o.size, [, D] = o.computeSize();
          o.setSize([w, D]);
        }
        (g = (v = o.graph) == null ? void 0 : v.setDirtyCanvas) == null || g.call(v, !0, !0);
      }
    }));
  });
  d.observe(i);
  const f = { widget: r, host: i, app: u, state: l, unmount: p };
  function p() {
    d.disconnect(), c && cancelAnimationFrame(c);
    try {
      this.app.unmount();
    } catch (m) {
      console.warn(`[FiL_Design_ImageMind] unmount failed for "${t}":`, m);
    }
    for (; this.host.firstChild; ) this.host.removeChild(this.host.firstChild);
  }
  return f.unmount = p.bind(f), o._filVueApps ?? (o._filVueApps = {}), o._filVueApps[t] = f, f;
}
function cn(e) {
  const t = e;
  if (t._filVueApps)
    for (const n of Object.keys(t._filVueApps)) {
      try {
        t._filVueApps[n].unmount();
      } catch (s) {
        console.warn(`[FiL_Design_ImageMind] unmount failed for "${n}":`, s);
      }
      delete t._filVueApps[n];
    }
}
function fe(e, t) {
  const n = e;
  if (n.widgets)
    return n.widgets.find((s) => s.name === t);
}
function Sn(e, t) {
  return new Proxy({ ...t }, {
    set(n, s, o) {
      n[s] = o;
      const i = fe(e, String(s));
      return i && (i.value = o), !0;
    }
  });
}
function be(e, t, n) {
  if (!e) return n;
  const s = e.value;
  return t === "number" && typeof s == "number" && Number.isFinite(s) || t === "boolean" && typeof s == "boolean" || t === "string" && typeof s == "string" ? s : (console.warn(
    `[FiL_Design_ImageMind] widget "${e.name}" had a corrupted value (expected ${t}) — resetting to default. This usually means the workflow was saved with an older version of this node.`
  ), e.value = n, n);
}
const Ji = 4, fd = {
  info: 3500,
  success: 3e3,
  warning: 5e3,
  error: 6e3
};
let pd = 1;
const Nt = /* @__PURE__ */ Qo("fil/toast", () => {
  const e = /* @__PURE__ */ re([]), t = /* @__PURE__ */ re([]);
  function n(u, c, d = {}) {
    const f = {
      id: pd++,
      level: u,
      text: c == null ? "" : String(c),
      timeout: d.timeout ?? fd[u],
      sticky: !!d.sticky,
      action: d.action ?? null
    };
    return e.value.length < Ji ? e.value.push(f) : t.value.push(f), f;
  }
  function s(u, c) {
    return n("info", u, c);
  }
  function o(u, c) {
    return n("success", u, c);
  }
  function i(u, c) {
    return n("warning", u, c);
  }
  function l(u, c) {
    return n("error", u, c);
  }
  function a(u) {
    e.value = e.value.filter((c) => c.id !== u), t.value.length > 0 && e.value.length < Ji && e.value.push(t.value.shift());
  }
  function r() {
    e.value = [], t.value = [];
  }
  return { items: e, queue: t, info: s, success: o, warning: i, error: l, push: n, dismiss: a, dismissAll: r };
});
function md() {
  var t, n;
  return ((n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.toast) ?? null;
}
function us(e, t) {
  const n = md();
  if (n != null && n.addAlert && (e === "info" || e === "success" || e === "warning" || e === "error"))
    try {
      n.addAlert(t);
      return;
    } catch (s) {
      console.warn("[FiL_Design_ImageMind toast] extensionManager.toast failed:", s);
    }
  Nt().push(e, t, {});
}
const st = {
  info: (e) => us("info", e),
  success: (e) => us("success", e),
  warning: (e) => us("warning", e),
  error: (e) => us("error", e),
  // Direct Pinia access for Vue components that want actions/sticky/toasts.
  infoRich: (e, t) => Nt().info(e, t),
  successRich: (e, t) => Nt().success(e, t),
  warningRich: (e, t) => Nt().warning(e, t),
  errorRich: (e, t) => Nt().error(e, t),
  dismissAll: () => Nt().dismissAll()
}, hd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  toast: st,
  useToastStore: Nt
}, Symbol.toStringTag, { value: "Module" }));
function Qi() {
  var t, n, s, o, i, l, a, r;
  return !!(((o = (s = (n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.setting) == null ? void 0 : s.get) == null ? void 0 : o.call(s, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? ((r = (a = (l = (i = globalThis.app) == null ? void 0 : i.ui) == null ? void 0 : l.settings) == null ? void 0 : a.getSettingValue) == null ? void 0 : r.call(a, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? !0);
}
function Zi() {
  function e(s, o, i, l) {
  }
  function t(s, o, i, l) {
    Qi() && st.success("Connected");
  }
  function n(s, o) {
    Qi() && st.info("Disconnected");
  }
  return { onConnectionsChange: e, onConnect: t, onDisconnect: n };
}
function Ut(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype, n = t.onNodeCreated;
  t.onNodeCreated = function(...i) {
    const l = n == null ? void 0 : n.apply(this, i);
    return this.color, l;
  };
  const s = t.onConnect;
  t.onConnect = function(...i) {
    const { onConnect: l } = Zi();
    return l(...i), s == null ? void 0 : s.apply(this, i);
  };
  const o = t.onDisconnect;
  t.onDisconnect = function(...i) {
    const { onDisconnect: l } = Zi();
    return l(...i), o == null ? void 0 : o.apply(this, i);
  };
}
const gd = /* @__PURE__ */ ln(() => Promise.resolve().then(() => pp)), _d = {
  id: "FiLSeed",
  register(e, t) {
    Ht(e, {
      minSize: [220, 220],
      family: "value",
      description: "Fixed or randomized seed with copy and reuse buttons.",
      badges: [{ text: "seed" }]
    });
    const s = e.prototype, o = s.onNodeCreated;
    s.onNodeCreated = function(...a) {
      const r = o == null ? void 0 : o.apply(this, a), u = this, c = fe(u, "seed"), d = be(c, "number", 0);
      c && (c.hidden = !0);
      const f = fe(u, "control_after_generate");
      f && (f.hidden = !0);
      const p = {
        nodeState: {
          mode: "random",
          seed: d
        },
        initialValues: { seed: d },
        ui: {},
        lastRunSeed: null
      };
      return u._filSeedState = p, rn(u, "fil_seed_view", gd, { state: p, height: 185 }), r;
    };
    const i = s.onConfigure;
    s.onConfigure = function(...a) {
      const r = i == null ? void 0 : i.apply(this, a), u = this, c = u._filSeedState;
      return c && (c.nodeState.seed = be(fe(u, "seed"), "number", 0)), r;
    };
    const l = s.onRemoved;
    s.onRemoved = function(...a) {
      return cn(this), l == null ? void 0 : l.apply(this, a);
    }, Ut(e);
  }
}, bd = /* @__PURE__ */ ln(() => Promise.resolve().then(() => Wp)), vd = {
  id: "FiLProviderLoader",
  register(e, t) {
    Ht(e, {
      minSize: [280, 300],
      family: "llm",
      description: "Provider and model runtime configuration.",
      badges: [{ text: "API key", color: "#d4a04a", text_color: "#1a1a1a" }]
    });
    const s = e.prototype, o = [
      { name: "provider", kind: "string", fallback: "ollama" },
      { name: "model", kind: "string", fallback: "(loading...)" },
      { name: "temperature", kind: "number", fallback: 0.7 },
      { name: "max_tokens", kind: "number", fallback: 0 },
      { name: "rate_limit_ms", kind: "number", fallback: 100 },
      { name: "max_image_side", kind: "number", fallback: 1024 }
    ], i = s.onNodeCreated;
    s.onNodeCreated = function(...r) {
      const u = i == null ? void 0 : i.apply(this, r), c = this, d = be(fe(c, "provider"), "string", "ollama"), f = be(fe(c, "model"), "string", "(loading...)"), p = be(fe(c, "temperature"), "number", 0.7), m = be(fe(c, "max_tokens"), "number", 0), _ = be(fe(c, "rate_limit_ms"), "number", 100), v = be(fe(c, "max_image_side"), "number", 1024);
      for (const w of ["provider", "model", "refresh_models", "temperature", "max_tokens", "rate_limit_ms", "seed", "control_after_generate", "max_image_side"]) {
        const D = fe(c, w);
        D && (D.hidden = !0);
      }
      const g = {
        nodeState: Sn(c, {
          provider: d,
          model: f,
          temperature: p,
          max_tokens: m,
          rate_limit_ms: _,
          max_image_side: v
        }),
        initialValues: {
          provider: d,
          model: f,
          temperature: p,
          max_tokens: m,
          rate_limit_ms: _,
          max_image_side: v
        },
        ui: {}
      };
      return Object.defineProperty(g, "node", { value: c, enumerable: !1, configurable: !0 }), c._filProviderState = g, rn(c, "fil_provider_view", bd, { state: g, height: 340 }), u;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...r) {
      const u = l == null ? void 0 : l.apply(this, r), c = this, d = c._filProviderState;
      if (!d) return u;
      const f = d.nodeState;
      for (const { name: p, kind: m, fallback: _ } of o)
        f[p] = be(fe(c, p), m, _);
      return u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...r) {
      return cn(this), a == null ? void 0 : a.apply(this, r);
    }, Ut(e);
  }
}, yd = /* @__PURE__ */ ln(() => Promise.resolve().then(() => Hm)), wd = {
  id: "FiLOpticScanner",
  register(e, t) {
    Ht(e, {
      minSize: [380, 340],
      family: "llm",
      description: "Image analysis or text-idea expansion into a generation prompt.",
      badges: [{ text: "LLM", color: "#7c5cfc", text_color: "#fff" }]
    });
    const s = e.prototype, o = [
      "prompt",
      "negative_prompt",
      "custom_style",
      "agent",
      "model_type",
      "detail_level",
      "language",
      "prompt_mode",
      "response_format",
      "photo_style",
      "nsfw_photo_style",
      "art_style",
      "nsfw_art_style"
    ], i = s.onNodeCreated;
    s.onNodeCreated = function(...r) {
      const u = i == null ? void 0 : i.apply(this, r), c = this, d = {}, f = {};
      for (const g of o) {
        const w = fe(c, g);
        if (!w) continue;
        const D = be(w, "string", "");
        d[g] = D, f[g] = D, w.hidden = !0;
      }
      const p = fe(c, "seed"), m = fe(c, "control_after_generate"), _ = be(p, "number", -1);
      p && (p.hidden = !0), m && (m.hidden = !0), d.seed = _, f.seed = _, f.seed_mode = "random";
      const v = {
        nodeState: Sn(c, f),
        initialValues: d,
        ui: {},
        lastRunSeed: null
      };
      return c._filScannerSeedState = v, rn(c, "fil_scanner_view", yd, { state: v, height: 460 }), u;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...r) {
      const u = l == null ? void 0 : l.apply(this, r), c = this, d = c._filScannerSeedState;
      if (!d) return u;
      for (const f of o) {
        const p = fe(c, f);
        p && (d.nodeState[f] = be(p, "string", ""));
      }
      return d.nodeState.seed = be(fe(c, "seed"), "number", -1), u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...r) {
      return cn(this), a == null ? void 0 : a.apply(this, r);
    }, Ut(e);
  }
}, xd = /* @__PURE__ */ ln(() => Promise.resolve().then(() => Xm)), Sd = {
  id: "FiLNeuroCleaner",
  register(e, t) {
    Ht(e, {
      minSize: [300, 340],
      family: "tool",
      description: "Selective model, VRAM, RAM, and cache cleanup.",
      badges: [{ text: "utility", color: "#888", text_color: "#fff" }]
    });
    const s = e.prototype, o = {
      clean_vram: !0,
      offload_model: !0,
      offload_cache: !0,
      unload_diffusion: !0,
      unload_clip: !0,
      unload_vae: !0,
      unload_control: !0,
      unload_lora: !0,
      clean_ram: !1,
      clean_file_cache: !0,
      clean_processes: !1,
      clean_dlls: !1,
      advanced_controls: !1
    }, i = s.onNodeCreated;
    s.onNodeCreated = function(...r) {
      const u = i == null ? void 0 : i.apply(this, r), c = this, d = {}, f = {};
      for (const m of Object.keys(o)) {
        const _ = fe(c, m), v = be(_, "boolean", o[m]);
        d[m] = v, f[m] = v, _ && (_.hidden = !0);
      }
      const p = { nodeState: Sn(c, d), initialValues: f, ui: {} };
      return c._filCleanerState = p, rn(c, "fil_cleaner_view", xd, { state: p, height: 460 }), u;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...r) {
      const u = l == null ? void 0 : l.apply(this, r), c = this, d = c._filCleanerState;
      if (!d) return u;
      for (const f of Object.keys(o))
        d.nodeState[f] = be(fe(c, f), "boolean", o[f]);
      return u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...r) {
      return cn(this), a == null ? void 0 : a.apply(this, r);
    }, Ut(e);
  }
}, Cd = /* @__PURE__ */ ln(() => Promise.resolve().then(() => nh)), Fd = {
  id: "FiLBeforeAfterCompare",
  register(e, t) {
    Ht(e, {
      minSize: [340, 500],
      family: "image",
      description: "Before/after viewer (wipe, side-by-side, overlay, difference) with optional output resizing.",
      badges: [{ text: "compare", color: "#62c987", text_color: "#1a1a1a" }]
    });
    const s = e.prototype, o = s.onNodeCreated;
    s.onNodeCreated = function(...a) {
      const r = o == null ? void 0 : o.apply(this, a), u = this, c = fe(u, "swap"), d = fe(u, "resize_mode"), f = fe(u, "max_resolution"), p = {
        swap: be(c, "boolean", !1),
        resize_mode: be(d, "string", "Off"),
        max_resolution: be(f, "number", 4096)
      };
      for (const g of [c, d, f])
        g && (g.hidden = !0);
      const m = {
        nodeState: Sn(u, p),
        initialValues: { ...p },
        ui: {
          compare_mode: "wipe",
          compare_position: 0.5,
          compare_opacity: 0.5,
          settings_collapsed: !0
        }
      };
      u._filCompareState = m;
      const _ = rn(u, "fil_compare_view", Cd, { state: m, height: 380 }), v = u.onExecuted;
      return u.onExecuted = function(g) {
        const w = v == null ? void 0 : v.apply(this, [g]), D = g;
        return _ && D && (_.state.ui.compare_images = { a: D.a_images ?? [], b: D.b_images ?? [] }), w;
      }, r;
    };
    const i = s.onConfigure;
    s.onConfigure = function(...a) {
      const r = i == null ? void 0 : i.apply(this, a), u = this, c = u._filCompareState;
      return c && (c.nodeState.swap = be(fe(u, "swap"), "boolean", !1), c.nodeState.resize_mode = be(fe(u, "resize_mode"), "string", "Off"), c.nodeState.max_resolution = be(fe(u, "max_resolution"), "number", 4096)), r;
    };
    const l = s.onRemoved;
    s.onRemoved = function(...a) {
      return cn(this), l == null ? void 0 : l.apply(this, a);
    }, Ut(e);
  }
}, Md = /* @__PURE__ */ ln(() => Promise.resolve().then(() => fh)), Ld = {
  id: "FiLUpscaleTileCalc",
  register(e, t) {
    Ht(e, {
      minSize: [320, 320],
      family: "image",
      description: "Tile dimensions, grid preview, denoise, latent-size calculation.",
      badges: [{ text: "upscale", color: "#62c987", text_color: "#1a1a1a" }]
    });
    const s = e.prototype, o = {
      upscale_factor: 2,
      tile_size: 512,
      tile_overlap: 64,
      manual_tile_cols: 0,
      manual_tile_rows: 0,
      max_megapixels: 0
    }, i = {
      auto_mode: !1,
      non_square_tiles: !1,
      show_grid_preview: !0
    }, l = { auto_profile: "Balanced" }, a = s.onNodeCreated;
    s.onNodeCreated = function(...c) {
      const d = a == null ? void 0 : a.apply(this, c), f = this, p = {}, m = {};
      for (const v of Object.keys(o)) {
        const g = fe(f, v);
        if (!g) continue;
        const w = be(g, "number", o[v]);
        p[v] = w, m[v] = w, g.hidden = !0;
      }
      for (const v of Object.keys(i)) {
        const g = fe(f, v);
        if (!g) continue;
        const w = be(g, "boolean", i[v]);
        p[v] = w, m[v] = w, g.hidden = !0;
      }
      for (const v of Object.keys(l)) {
        const g = fe(f, v);
        if (!g) continue;
        const w = be(g, "string", l[v]);
        p[v] = w, m[v] = w, g.hidden = !0;
      }
      const _ = { nodeState: Sn(f, p), initialValues: m, ui: {} };
      return f._filUpscaleState = _, rn(f, "fil_upscale_view", Md, { state: _, height: 420 }), d;
    };
    const r = s.onConfigure;
    s.onConfigure = function(...c) {
      const d = r == null ? void 0 : r.apply(this, c), f = this, p = f._filUpscaleState;
      if (!p) return d;
      for (const m of Object.keys(o))
        p.nodeState[m] = be(fe(f, m), "number", o[m]);
      for (const m of Object.keys(i))
        p.nodeState[m] = be(fe(f, m), "boolean", i[m]);
      for (const m of Object.keys(l))
        p.nodeState[m] = be(fe(f, m), "string", l[m]);
      return d;
    };
    const u = s.onRemoved;
    s.onRemoved = function(...c) {
      return cn(this), u == null ? void 0 : u.apply(this, c);
    }, Ut(e);
  }
}, Id = {
  sampler: ["sampler_name"],
  sigmas: ["steps", "scheduler", "denoise"],
  // ComfyUI auto-adds `control_after_generate` next to any widget named "seed";
  // both are meaningless once noise is fed from a socket.
  noise: ["seed", "control_after_generate"]
};
function Ad(e, t) {
  var s;
  const n = (s = e.inputs) == null ? void 0 : s.find((o) => o.name === t);
  return n != null && n.link != null;
}
function el(e) {
  var t;
  for (const [n, s] of Object.entries(Id)) {
    const o = Ad(e, n);
    for (const i of s) {
      const l = fe(e, i);
      l && (l.hidden = o);
    }
  }
  if (e.computeSize && e.setSize && e.size) {
    const n = e.computeSize();
    e.setSize([Math.max(e.size[0], n[0]), n[1]]);
  }
  (t = e.setDirtyCanvas) == null || t.call(e, !0, !0);
}
const Dd = {
  id: "FiLKSampler",
  register(e, t) {
    Ht(e, {
      minSize: [270, 260],
      family: "sampling",
      description: "Full sampler/scheduler set, passthrough outputs, preview, HighRes-fix script.",
      badges: [{ text: "sampler", color: "#7aa2f7", text_color: "#0b0e14" }]
    });
    const s = e.prototype, o = s.onNodeCreated;
    s.onNodeCreated = function(...l) {
      const a = o == null ? void 0 : o.apply(this, l);
      return el(this), a;
    };
    const i = s.onConnectionsChange;
    s.onConnectionsChange = function(...l) {
      const a = i == null ? void 0 : i.apply(this, l);
      return el(this), a;
    }, Ut(e);
  }
}, kd = /* @__PURE__ */ ln(() => Promise.resolve().then(() => Ah)), Eo = {
  upscale_by: 1.25,
  seed: 0,
  hires_steps: 12,
  denoise: 0.56,
  iterations: 1,
  strength: 1
}, To = {
  upscale_type: "latent",
  hires_ckpt_name: "(use same)",
  latent_upscaler: "nearest-exact",
  pixel_upscaler: "",
  control_net_name: ""
}, Oo = {
  use_same_seed: !0,
  use_controlnet: !1
}, Ed = [
  ...Object.keys(Eo),
  ...Object.keys(To),
  ...Object.keys(Oo),
  "control_after_generate"
], Td = {
  id: "FiLHighResFix",
  register(e, t) {
    Ht(e, {
      minSize: [320, 380],
      family: "sampling",
      description: "Latent/pixel upscale + re-sample settings, packed into a script for FiLKSampler.",
      badges: [{ text: "hires", color: "#bb9af7", text_color: "#0b0e14" }]
    });
    const s = e.prototype, o = (r, u) => {
      for (const c of Object.keys(Eo))
        u[c] = be(fe(r, c), "number", Eo[c]);
      for (const c of Object.keys(To))
        u[c] = be(fe(r, c), "string", To[c]);
      for (const c of Object.keys(Oo))
        u[c] = be(fe(r, c), "boolean", Oo[c]);
    }, i = s.onNodeCreated;
    s.onNodeCreated = function(...r) {
      const u = i == null ? void 0 : i.apply(this, r), c = this, d = {};
      o(c, d);
      for (const p of Ed) {
        const m = fe(c, p);
        m && (m.hidden = !0);
      }
      const f = {
        nodeState: Sn(c, d),
        initialValues: { ...d },
        ui: {}
      };
      return Object.defineProperty(f, "node", { value: c, enumerable: !1, configurable: !0 }), c._filHiResFixState = f, rn(c, "fil_hiresfix_view", kd, { state: f, height: 360 }), u;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...r) {
      const u = l == null ? void 0 : l.apply(this, r), c = this, d = c._filHiResFixState;
      return d && o(c, d.nodeState), u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...r) {
      return cn(this), a == null ? void 0 : a.apply(this, r);
    }, Ut(e);
  }
}, Od = [
  _d,
  vd,
  wd,
  Sd,
  Fd,
  Ld,
  Dd,
  Td
], Ta = Object.fromEntries(
  Od.map((e) => [e.id, e])
), Rd = ["aria-label"], Pd = { class: "fil-modal-header" }, Nd = { class: "fil-modal-title" }, $d = { class: "fil-modal-body" }, Vd = /* @__PURE__ */ Se({
  __name: "FilModal",
  props: {
    open: { type: Boolean, default: !1 },
    title: {},
    width: { default: "520px" },
    closeOnEsc: { type: Boolean, default: !0 },
    closeOnBackdrop: { type: Boolean, default: !0 }
  },
  emits: ["update:open", "close"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = /* @__PURE__ */ re(null), i = /* @__PURE__ */ re(null);
    function l() {
      s("update:open", !1), s("close");
    }
    function a(d) {
      n.closeOnBackdrop && d.target === d.currentTarget && l();
    }
    function r(d) {
      n.closeOnEsc && d.key === "Escape" && l(), d.key === "Tab" && u(d);
    }
    function u(d) {
      if (!o.value) return;
      const f = c(o.value);
      if (!f.length) {
        d.preventDefault();
        return;
      }
      const p = f[0], m = f[f.length - 1];
      d.shiftKey ? document.activeElement === p && (d.preventDefault(), m.focus()) : document.activeElement === m && (d.preventDefault(), p.focus());
    }
    function c(d) {
      return Array.from(
        d.querySelectorAll(
          'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((f) => !f.disabled && f.offsetParent !== null);
    }
    return He(
      () => n.open,
      (d) => {
        var f;
        d ? (i.value = document.activeElement, wn(() => {
          var m;
          (m = (o.value ? c(o.value) : [])[0] || o.value) == null || m.focus();
        })) : ((f = i.value) == null || f.focus(), i.value = null);
      }
    ), an(() => {
      document.addEventListener("keydown", r);
    }), xn(() => {
      document.removeEventListener("keydown", r);
    }), (d, f) => (C(), Ie(Bl, { to: "body" }, [
      X(Jc, { name: "fil-modal" }, {
        default: Us(() => [
          e.open ? (C(), E("div", {
            key: 0,
            ref_key: "modalRef",
            ref: o,
            class: "fil-modal-backdrop",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title || "Dialog",
            onClick: a
          }, [
            B("div", {
              class: "fil-modal-panel",
              style: ze({ maxWidth: e.width })
            }, [
              B("div", Pd, [
                B("span", Nd, Z(e.title), 1),
                B("button", {
                  class: "fil-modal-close",
                  title: "Close",
                  onClick: l
                }, [
                  X(yn, {
                    name: "close",
                    size: 14
                  })
                ])
              ]),
              B("div", $d, [
                ic(d.$slots, "default", {}, void 0, !0)
              ])
            ], 4)
          ], 8, Rd)) : se("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Oa = /* @__PURE__ */ Fe(Vd, [["__scopeId", "data-v-00452928"]]), Bd = { class: "fil-help-title" }, Hd = {
  key: 0,
  class: "fil-help-body"
}, Ud = { key: 1 }, jd = {
  key: 2,
  class: "fil-help-table"
}, Wd = {
  key: 3,
  class: "fil-help-code"
}, zd = {
  key: 1,
  class: "fil-help-empty"
}, Gd = /* @__PURE__ */ Se({
  __name: "FilHelpPopup",
  setup(e) {
    const t = Jn(), n = Y(() => {
      const o = t.activeHelpId;
      return o ? t.get(o) ?? null : null;
    }), s = Y({
      get: () => t.activeHelpId !== null,
      set: (o) => {
        o || t.value_close();
      }
    });
    return He(n, (o) => {
      o || t.value_close();
    }), (o, i) => (C(), Ie(Oa, {
      open: s.value,
      "onUpdate:open": i[0] || (i[0] = (l) => s.value = l),
      title: "FiL LLM Help",
      width: "600px",
      onClose: i[1] || (i[1] = (l) => y(t).value_close())
    }, {
      default: Us(() => {
        var l;
        return [
          n.value ? (C(), E(de, { key: 0 }, [
            B("h2", Bd, Z(n.value.title), 1),
            n.value.body ? (C(), E("p", Hd, Z(n.value.body), 1)) : se("", !0),
            (l = n.value.bullets) != null && l.length ? (C(), E("ul", Ud, [
              (C(!0), E(de, null, Ae(n.value.bullets, (a, r) => (C(), E("li", {
                key: r,
                class: "fil-help-bullet"
              }, [
                X(yn, {
                  name: "chevronRight",
                  size: 12
                }),
                B("span", null, Z(a), 1)
              ]))), 128))
            ])) : se("", !0),
            n.value.table ? (C(), E("table", jd, [
              B("thead", null, [
                B("tr", null, [
                  (C(!0), E(de, null, Ae(n.value.table.headers, (a) => (C(), E("th", { key: a }, Z(a), 1))), 128))
                ])
              ]),
              B("tbody", null, [
                (C(!0), E(de, null, Ae(n.value.table.rows, (a, r) => (C(), E("tr", { key: r }, [
                  (C(!0), E(de, null, Ae(a, (u, c) => (C(), E("td", { key: c }, Z(u), 1))), 128))
                ]))), 128))
              ])
            ])) : se("", !0),
            n.value.code ? (C(), E("pre", Wd, [
              B("code", null, Z(n.value.code), 1)
            ])) : se("", !0)
          ], 64)) : (C(), E("p", zd, "No help available for this node."))
        ];
      }),
      _: 1
    }, 8, ["open"]));
  }
}), Kd = /* @__PURE__ */ Fe(Gd, [["__scopeId", "data-v-536c1547"]]);
let po = null;
function qd(e) {
  if (po) return;
  const t = document.createElement("div");
  t.id = "__fil_help_popup_host", document.body.appendChild(t), po = qs(Kd).use(Js()), po.mount(t), console.info("[FiL_Design_ImageMind] help popup mounted");
}
function Xd() {
  var o, i, l, a, r, u, c, d;
  const e = globalThis, t = "FiL_Design_ImageMind.RunButton.AnimationDuration", n = ((a = (l = (i = (o = e.app) == null ? void 0 : o.extensionManager) == null ? void 0 : i.setting) == null ? void 0 : l.get) == null ? void 0 : a.call(l, t, "Normal")) ?? ((d = (c = (u = (r = globalThis.app) == null ? void 0 : r.ui) == null ? void 0 : u.settings) == null ? void 0 : c.getSettingValue) == null ? void 0 : d.call(c, t, "Normal")) ?? "Normal";
  return { Fast: 200, Normal: 400, Slow: 600 }[String(n)] || 400;
}
function Yd(e, t) {
  var u, c, d, f, p, m, _, v, g, w;
  if (!(((f = (d = (c = (u = globalThis.app) == null ? void 0 : u.extensionManager) == null ? void 0 : c.setting) == null ? void 0 : d.get) == null ? void 0 : f.call(d, "FiL_Design_ImageMind.RunButton.Enabled", !0)) ?? ((v = (_ = (m = (p = globalThis.app) == null ? void 0 : p.ui) == null ? void 0 : m.settings) == null ? void 0 : _.getSettingValue) == null ? void 0 : v.call(_, "FiL_Design_ImageMind.RunButton.Enabled", !0)) ?? !0)) return;
  const o = (w = (g = e == null ? void 0 : e.canvas) == null ? void 0 : g.nodeEls) == null ? void 0 : w[t];
  if (!o) return;
  const i = o.querySelector(".comfy-node-header");
  if (!i) return;
  const l = Xd(), a = i.style.background, r = Math.max(60, l * 0.3);
  i.style.transition = `background ${r}ms ease`, i.style.background = "var(--fil-accent, #7c3aed)", setTimeout(() => {
    i.style.background = a;
  }, l);
}
function Jd(e) {
  const t = e == null ? void 0 : e.canvas;
  if (!(t != null && t.ds)) {
    console.warn("[FiL_Design_ImageMind] run button FX: canvas not available, skipping");
    return;
  }
  const n = t.ds.executeNode;
  typeof n == "function" ? (t.ds.executeNode = async function(s) {
    const o = await n.call(this, s);
    return (typeof s == "string" || typeof s == "number") && Yd({ canvas: t }, s), o;
  }, console.info("[FiL_Design_ImageMind] run button FX installed (execute hook)")) : console.warn("[FiL_Design_ImageMind] run button FX: executeNode not found, skipping");
}
const Qd = ["onMouseenter", "onMouseleave"], Zd = { class: "fil-toast-text" }, ef = ["onClick"], tf = ["aria-label", "onClick"], nf = /* @__PURE__ */ Se({
  __name: "FilToastStack",
  setup(e) {
    const { t } = kt(), n = Nt(), { items: s } = Yu(n), o = /* @__PURE__ */ re(null), i = /* @__PURE__ */ new Map(), l = {
      info: "var(--fil-muted, #9ca8b5)",
      success: "var(--fil-ok, #62c987)",
      warning: "var(--fil-accent, #f08a45)",
      error: "var(--fil-danger, #ef6666)"
    };
    function a(f) {
      f.sticky || f.timeout <= 0 || i.set(
        f.id,
        setTimeout(() => n.dismiss(f.id), f.timeout)
      );
    }
    function r(f) {
      const p = i.get(f.id);
      p && (clearTimeout(p), i.delete(f.id));
    }
    function u(f) {
      !i.has(f.id) && !f.sticky && a(f);
    }
    function c(f) {
      n.dismiss(f.id);
    }
    const d = Y(() => s.value);
    return an(() => {
      for (const f of s.value) a(f);
    }), xn(() => {
      for (const f of i.values()) clearTimeout(f);
      i.clear();
    }), (f, p) => (C(), E("div", {
      ref_key: "root",
      ref: o,
      class: "fil-toast-stack",
      role: "status",
      "aria-live": "polite"
    }, [
      (C(!0), E(de, null, Ae(d.value, (m) => (C(), E("div", {
        key: m.id,
        class: Le(["fil-toast", `fil-toast-${m.level}`]),
        style: ze({ "--toast-color": l[m.level] }),
        onMouseenter: (_) => r(m),
        onMouseleave: (_) => u(m)
      }, [
        p[0] || (p[0] = B("span", {
          class: "fil-toast-dot",
          "aria-hidden": "true"
        }, null, -1)),
        B("span", Zd, Z(m.text), 1),
        m.action ? (C(), E("button", {
          key: 0,
          type: "button",
          class: "fil-toast-action",
          onClick: Ui((_) => {
            m.action.onClick(_), c(m);
          }, ["stop"])
        }, Z(m.action.label), 9, ef)) : se("", !0),
        B("button", {
          type: "button",
          class: "fil-toast-close",
          "aria-label": y(t)("toast_close", "Close"),
          onClick: Ui((_) => c(m), ["stop"])
        }, " × ", 8, tf)
      ], 46, Qd))), 128))
    ], 512));
  }
}), sf = /* @__PURE__ */ Fe(nf, [["__scopeId", "data-v-08cc58fa"]]);
let mo = null;
function of() {
  if (mo) return;
  const e = document.createElement("div");
  document.body.appendChild(e), mo = qs(sf).use(Js()), mo.mount(e);
  const t = globalThis;
  Promise.resolve().then(() => hd).then(({ toast: n }) => {
    t.__filToast = n, console.info("[FiL_Design_ImageMind] toast stack mounted");
  }).catch((n) => console.warn("[FiL_Design_ImageMind] toast store import failed:", n));
}
const lf = "FiL_Design_ImageMind.Shortcuts.Enabled", af = "__cheatsheet__", rf = [
  "#comfy-search-input",
  'input[name="search"]',
  'input[aria-label="Search"]',
  "#search-input",
  'input[placeholder*="search" i]'
];
function cf(e) {
  if (!e || typeof e != "object") return !1;
  const t = String(e.tagName || "").toLowerCase();
  return t === "input" || t === "textarea" || t === "select" || e.isContentEditable === !0;
}
function uf() {
  for (const e of rf) {
    const t = document.querySelector(e);
    if (t) return t;
  }
  return null;
}
function Ro() {
  var t;
  const e = Jn();
  e.ensureHelpDefaultsInjected(), (t = e.value_open) == null || t.call(e, af);
}
function Ra() {
  const e = uf();
  if (!e) {
    st.info("ComfyUI search field not found");
    return;
  }
  try {
    e.focus(), "select" in e && e.select();
  } catch {
  }
}
function df(e) {
  var n;
  const t = e;
  if (typeof ((n = t.extensionManager) == null ? void 0 : n.registerCommands) == "function")
    try {
      t.extensionManager.registerCommands({
        commands: [
          {
            id: "FiL_Design_ImageMind.helpCheatsheet",
            label: "FiL_Design_ImageMind — Keyboard cheatsheet",
            icon: "?",
            function: Ro
          },
          {
            id: "FiL_Design_ImageMind.focusSearch",
            label: "FiL_Design_ImageMind — Focus add-node search",
            icon: "/",
            function: Ra
          }
        ],
        keybindings: [
          { combo: { key: "?", shift: !0 }, commandId: "FiL_Design_ImageMind.helpCheatsheet" },
          { combo: { key: "k", ctrl: !0, shift: !0 }, commandId: "FiL_Design_ImageMind.helpCheatsheet" },
          { combo: { key: "/" }, commandId: "FiL_Design_ImageMind.focusSearch" }
        ],
        menuCommands: [{ path: ["FiL LLM"], commands: ["FiL_Design_ImageMind.helpCheatsheet", "FiL_Design_ImageMind.focusSearch"] }]
      });
      return;
    } catch (s) {
      console.warn("[FiL_Design_ImageMind] declarative shortcuts register failed, falling back:", s);
    }
  window.addEventListener("keydown", (s) => ff(s, e), !0), console.info("[FiL_Design_ImageMind] shortcuts installed (fallback keydown handler)");
}
function ff(e, t) {
  var i, l, a, r, u, c, d, f, p;
  let n = !0;
  try {
    n = !!(((r = (a = (l = (i = globalThis.app) == null ? void 0 : i.extensionManager) == null ? void 0 : l.setting) == null ? void 0 : a.get) == null ? void 0 : r.call(a, lf, !0)) ?? !0);
  } catch {
  }
  if (!n) return;
  const s = e.target, o = cf(s);
  if (e.key === "Escape") {
    try {
      const m = Jn();
      (u = m.value_close) == null || u.call(m);
    } catch {
    }
    o && ((c = s.blur) == null || c.call(s)), (d = e.preventDefault) == null || d.call(e);
    return;
  }
  if (!o) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "K" || e.key === "k")) {
      Ro(), e.preventDefault();
      return;
    }
    if (e.key === "?" || e.shiftKey && e.key === "/") {
      if (e.shiftKey) Ro();
      else {
        const m = t.canvas, _ = (m == null ? void 0 : m.selected_nodes) ?? {}, v = Object.values(_).filter(Boolean);
        if (v.length === 1) {
          const g = ((f = v[0]) == null ? void 0 : f.comfyClass) ?? "default", w = Jn();
          w.ensureHelpDefaultsInjected(), (p = w.value_open) == null || p.call(w, g);
        } else
          st.info("Select exactly one FiL_Design_ImageMind node, then press ?");
      }
      e.preventDefault();
      return;
    }
    e.key === "/" && !e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey && (Ra(), e.preventDefault());
  }
}
function pf(e) {
  df(e), console.info("[FiL_Design_ImageMind] shortcuts installed");
}
const mf = 3e5, hf = ["ollama", "lmstudio", "openai", "google", "groq", "openrouter", "cloudflare"], ks = hf, Pa = /* @__PURE__ */ Qo("fil/providers", () => {
  const e = /* @__PURE__ */ re({}), t = /* @__PURE__ */ re({}), n = /* @__PURE__ */ re({}), s = /* @__PURE__ */ re({}), o = /* @__PURE__ */ re(null), i = Y(() => Object.fromEntries(
    Object.entries(e.value).filter(([, g]) => (g == null ? void 0 : g.configured) || (g == null ? void 0 : g.account_id) || (g == null ? void 0 : g.base_url))
  ));
  async function l() {
    try {
      const g = await Xt.loadAccounts();
      e.value = g.accounts || {}, o.value = null;
    } catch (g) {
      o.value = g instanceof Error ? g.message : String(g);
    }
  }
  async function a(g, w) {
    try {
      const D = await Xt.saveAccounts({ [g]: w });
      e.value = D.accounts || {}, o.value = null, c(g, !0);
    } catch (D) {
      throw o.value = D instanceof Error ? D.message : String(D), D;
    }
  }
  async function r(g) {
    const w = await Xt.saveAccounts({
      [g]: { delete: !0 }
    });
    e.value = w.accounts || {};
  }
  async function u(g) {
    await a(g, {});
    try {
      await r(g);
    } catch (w) {
      o.value = w instanceof Error ? w.message : String(w);
    }
  }
  async function c(g, w = !1) {
    const D = t.value[g];
    if (D && !w && !D.error && D.cachedAt > 0 && Date.now() - D.cachedAt < mf)
      return D.list;
    D ? D.loading = !0 : t.value[g] = { list: [], visionModels: [], cachedAt: 0, loading: !0 };
    try {
      const S = await Xt.loadModels(g, w), k = S.models || [];
      return t.value[g] = {
        list: k,
        visionModels: S.vision_models || [],
        cachedAt: Date.now(),
        loading: !1
      }, S.status && S.status !== "available" && (t.value[g].error = S.message || S.status), k;
    } catch (S) {
      const k = S instanceof Error ? S.message : String(S);
      throw t.value[g] = {
        list: [],
        visionModels: [],
        cachedAt: 0,
        loading: !1,
        error: k
      }, o.value = k, S;
    }
  }
  function d(g) {
    const w = t.value[g];
    if (!(w != null && w.cachedAt)) return null;
    const D = Date.now() - w.cachedAt, S = Math.floor(D / 1e3);
    return S < 60 ? `${S}s` : S < 3600 ? `${Math.floor(S / 60)}m` : `${Math.floor(S / 3600)}h`;
  }
  async function f(g, w = "") {
    try {
      const D = await Xt.probe(g, w);
      return n.value[g] = D, D;
    } catch (D) {
      o.value = D instanceof Error ? D.message : String(D);
      return;
    }
  }
  async function p() {
    try {
      const g = await Xt.listProviders();
      s.value = g.providers || {};
    } catch {
    }
  }
  function m(g) {
    var w;
    return ((w = t.value[g]) == null ? void 0 : w.list) ?? [];
  }
  function _(g) {
    var w;
    return ((w = t.value[g]) == null ? void 0 : w.visionModels) ?? [];
  }
  function v(g) {
    var w;
    return !!((w = t.value[g]) != null && w.loading);
  }
  return {
    accounts: e,
    modelsByProvider: t,
    probeState: n,
    displayNames: s,
    lastError: o,
    configuredProviders: i,
    PROVIDER_LIST: ks,
    loadAccounts: l,
    saveAccount: a,
    deleteAccount: u,
    deleteAccountRaw: r,
    loadModels: c,
    probe: f,
    loadDisplayNames: p,
    modelsFor: m,
    visionModelsFor: _,
    isLoading: v,
    cachedAgeLabel: d
  };
}), gf = ["title", "disabled", "aria-disabled"], _f = {
  key: 0,
  class: "fil-w-btn-spinner"
}, bf = ["innerHTML"], vf = { key: 2 }, yf = /* @__PURE__ */ Se({
  __name: "FilButton",
  props: {
    label: {},
    variant: { default: "standard" },
    icon: {},
    title: {},
    disabled: { type: Boolean },
    loading: { type: Boolean },
    flashing: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, s = Y(() => n.icon ? La(n.icon) : ""), o = t, i = Y(() => [
      "fil-w-btn",
      n.variant === "accent" && "fil-w-btn-accent",
      n.variant === "danger" && "fil-w-btn-danger",
      n.variant === "icon" && "fil-w-btn-icon",
      n.variant === "full" && "fil-w-btn-full",
      n.variant === "sm" && "fil-w-btn-sm",
      n.flashing && "is-flashing",
      n.loading && "is-loading"
    ]), l = Y(() => n.disabled || n.loading);
    function a(r) {
      l.value || o("click", r);
    }
    return (r, u) => (C(), E("button", {
      class: Le(i.value),
      title: e.title,
      disabled: l.value,
      "aria-disabled": l.value || void 0,
      onClick: a
    }, [
      e.loading ? (C(), E("span", _f)) : se("", !0),
      e.icon && !e.loading ? (C(), E("span", {
        key: 1,
        class: "fil-w-btn-glyph",
        innerHTML: s.value
      }, null, 8, bf)) : se("", !0),
      e.label ? (C(), E("span", vf, Z(e.loading ? "" : e.label), 1)) : se("", !0)
    ], 10, gf));
  }
}), it = /* @__PURE__ */ Fe(yf, [["__scopeId", "data-v-fff84608"]]), Na = {
  ollama: "Ollama",
  lmstudio: "LM Studio",
  openai: "OpenAI",
  groq: "Groq",
  google: "Google AI",
  openrouter: "OpenRouter",
  cloudflare: "Cloudflare"
}, $a = {
  ollama: "provider-ollama",
  lmstudio: "provider-lmstudio",
  openai: "provider-openai",
  groq: "provider-groq",
  google: "provider-google",
  openrouter: "provider-openrouter",
  cloudflare: "provider-cloudflare"
}, wf = { class: "fil-pm-root" }, xf = { class: "fil-pm-header" }, Sf = { class: "fil-pm-icon" }, Cf = { class: "fil-pm-name" }, Ff = {
  key: 0,
  class: "fil-pm-disp"
}, Mf = { class: "fil-pm-fields" }, Lf = { class: "fil-pm-field" }, If = ["onUpdate:modelValue", "placeholder", "onKeydown"], Af = { class: "fil-pm-field" }, Df = ["onUpdate:modelValue", "onKeydown"], kf = {
  key: 0,
  class: "fil-pm-field"
}, Ef = ["onUpdate:modelValue", "onKeydown"], Tf = { class: "fil-pm-actions" }, Of = {
  key: 0,
  class: "fil-pm-age"
}, Rf = {
  key: 0,
  class: "fil-pm-err"
}, Pf = {
  key: 1,
  class: "fil-pm-err"
}, Nf = {
  key: 2,
  class: "fil-pm-models"
}, $f = {
  key: 0,
  class: "fil-pm-vision-badge",
  title: "Vision-capable"
}, Vf = {
  key: 3,
  class: "fil-pm-err fil-pm-global-err"
}, Bf = /* @__PURE__ */ Se({
  __name: "ProviderManager",
  setup(e) {
    const t = Pa(), n = /* @__PURE__ */ re({}), s = /* @__PURE__ */ re({}), o = /* @__PURE__ */ re({}), i = /* @__PURE__ */ re({});
    an(async () => {
      await Promise.all([t.loadAccounts(), t.loadDisplayNames()]);
      for (const _ of ks) {
        const v = t.accounts[_];
        n.value[_] = {
          // Stored keys are never echoed back by GET /fil_design_imagemind/auth (write-only
          // by the security contract) — the field always starts empty and the
          // `configured` flag drives the "a key is saved" UI state instead.
          key: "",
          base_url: (v == null ? void 0 : v.base_url) ?? "",
          account_id: (v == null ? void 0 : v.account_id) ?? ""
        };
      }
    });
    const l = Na, a = $a;
    function r(_) {
      return { "fil-pm-has-val": _.length > 0 };
    }
    function u(_) {
      return _ === "cloudflare";
    }
    async function c(_) {
      const v = n.value[_];
      await t.saveAccount(_, {
        key: v.key || null,
        base_url: v.base_url || null,
        account_id: v.account_id || null
      }), v.key = "";
    }
    async function d(_) {
      n.value[_] = { key: "", base_url: "", account_id: "" }, await t.deleteAccount(_);
    }
    async function f(_) {
      s.value[_] = !0, o.value[_] = !1;
      try {
        const v = await t.probe(_, "");
        o.value[_] = (v == null ? void 0 : v.status) === "available";
      } finally {
        s.value[_] = !1;
      }
    }
    async function p(_) {
      i.value[_] = !0;
      try {
        await t.loadModels(_, !0);
      } finally {
        i.value[_] = !1;
      }
    }
    const m = (_) => {
      const v = n.value[_], g = t.accounts[_];
      return v.key !== "" ? !0 : v.base_url !== ((g == null ? void 0 : g.base_url) ?? "") || v.account_id !== ((g == null ? void 0 : g.account_id) ?? "");
    };
    return (_, v) => (C(), E("div", wf, [
      (C(!0), E(de, null, Ae(y(ks), (g) => {
        var w, D, S, k, ie, T;
        return C(), E("div", {
          key: g,
          class: "fil-pm-card"
        }, [
          B("div", xf, [
            B("span", Sf, [
              X(yn, {
                name: y(a)[g],
                size: 20
              }, null, 8, ["name"])
            ]),
            B("span", Cf, Z(y(l)[g]), 1),
            y(t).displayNames[g] ? (C(), E("span", Ff, "(" + Z(y(t).displayNames[g]) + ")", 1)) : se("", !0)
          ]),
          B("div", Mf, [
            B("label", Lf, [
              v[0] || (v[0] = B("span", { class: "fil-pm-field-label" }, "API Key", -1)),
              Ke(B("input", {
                "onUpdate:modelValue": (I) => n.value[g].key = I,
                type: "password",
                class: Le(["fil-pm-input", r(n.value[g].key)]),
                placeholder: (w = y(t).accounts[g]) != null && w.configured ? "•••••••• (saved)" : "sk-...",
                onKeydown: hs((I) => c(g), ["enter"])
              }, null, 42, If), [
                [vt, n.value[g].key]
              ])
            ]),
            B("label", Af, [
              v[1] || (v[1] = B("span", { class: "fil-pm-field-label" }, "Base URL", -1)),
              Ke(B("input", {
                "onUpdate:modelValue": (I) => n.value[g].base_url = I,
                type: "text",
                class: Le(["fil-pm-input", r(n.value[g].base_url)]),
                placeholder: "http://localhost:11434",
                onKeydown: hs((I) => c(g), ["enter"])
              }, null, 42, Df), [
                [vt, n.value[g].base_url]
              ])
            ]),
            u(g) ? (C(), E("label", kf, [
              v[2] || (v[2] = B("span", { class: "fil-pm-field-label" }, "Account ID", -1)),
              Ke(B("input", {
                "onUpdate:modelValue": (I) => n.value[g].account_id = I,
                type: "text",
                class: Le(["fil-pm-input", r(n.value[g].account_id)]),
                onKeydown: hs((I) => c(g), ["enter"])
              }, null, 42, Ef), [
                [vt, n.value[g].account_id]
              ])
            ])) : se("", !0)
          ]),
          B("div", Tf, [
            X(it, {
              variant: "accent",
              label: m(g) ? "Save" : "Saved",
              disabled: !m(g),
              onClick: (I) => c(g)
            }, null, 8, ["label", "disabled", "onClick"]),
            !m(g) && y(t).cachedAgeLabel(g) ? (C(), E("span", Of, Z(y(t).cachedAgeLabel(g)) + " ago ", 1)) : se("", !0),
            X(it, {
              variant: "danger",
              label: "Delete",
              disabled: !((D = y(t).accounts[g]) != null && D.configured) && !((S = y(t).accounts[g]) != null && S.base_url),
              onClick: (I) => d(g)
            }, null, 8, ["disabled", "onClick"]),
            X(it, {
              variant: "standard",
              label: "Probe",
              loading: s.value[g],
              flashing: o.value[g],
              disabled: !((k = y(t).accounts[g]) != null && k.local) && !((ie = y(t).accounts[g]) != null && ie.configured) && !n.value[g].key && !n.value[g].base_url,
              onClick: (I) => f(g)
            }, null, 8, ["loading", "flashing", "disabled", "onClick"]),
            X(it, {
              variant: "standard",
              label: "Load Models",
              loading: i.value[g],
              onClick: (I) => p(g)
            }, null, 8, ["loading", "onClick"])
          ]),
          (T = y(t).modelsByProvider[g]) != null && T.error ? (C(), E("div", Rf, Z(y(t).modelsByProvider[g].error), 1)) : se("", !0),
          y(t).probeState[g] && y(t).probeState[g].status !== "available" ? (C(), E("div", Pf, Z(y(t).probeState[g].message), 1)) : se("", !0),
          y(t).modelsFor(g).length > 0 ? (C(), E("div", Nf, [
            (C(!0), E(de, null, Ae(y(t).modelsFor(g), (I) => (C(), E("span", {
              class: "fil-pm-model-tag",
              key: I
            }, [
              pa(Z(I) + " ", 1),
              y(t).visionModelsFor(g).includes(I) ? (C(), E("span", $f, "👁")) : se("", !0)
            ]))), 128))
          ])) : se("", !0),
          y(t).lastError ? (C(), E("div", Vf, Z(y(t).lastError), 1)) : se("", !0)
        ]);
      }), 128))
    ]));
  }
}), Hf = /* @__PURE__ */ Fe(Bf, [["__scopeId", "data-v-0de4d738"]]);
let ho = null;
function Uf(e) {
  ho || (ho = qs(Hf).use(Js()), ho.mount(e), console.info("[FiL_Design_ImageMind] provider manager mounted"));
}
function jf(e) {
  const t = e.extensionManager;
  if (!(t != null && t.registerSidebarTab)) {
    console.warn("[FiL_Design_ImageMind] extensionManager.registerSidebarTab not available — cannot mount provider manager");
    return;
  }
  t.registerSidebarTab({
    id: "FiL_Design_ImageMind.Providers",
    icon: "pi pi-key",
    title: "FiL Providers",
    tooltip: "Configure LLM provider API keys and endpoints",
    type: "custom",
    render: (n) => Uf(n)
  }), console.info("[FiL_Design_ImageMind] provider manager sidebar tab registered");
}
const Wf = [
  {
    id: "FiL_Design_ImageMind.NodeTitles.AdaptiveColor",
    name: "Adaptive title text color",
    type: "boolean",
    defaultValue: !0,
    category: ["FiL_Design_ImageMind", "Node titles"],
    tooltip: "Compute node title text color (white/dark) from the title bar color via YIQ luminance."
  }
], zf = [
  {
    id: "FiL_Design_ImageMind.RunButton.Enabled",
    name: "Run button effects enabled",
    type: "boolean",
    defaultValue: !0,
    category: ["FiL_Design_ImageMind", "Run FX", "General"],
    tooltip: "Enable/disable all run button visual effects (flash + sound)."
  },
  {
    id: "FiL_Design_ImageMind.RunButton.AnimationDuration",
    name: "Animation duration",
    type: "combo",
    defaultValue: "Normal",
    options: ["Fast", "Normal", "Slow"],
    category: ["FiL_Design_ImageMind", "Run FX", "Timing"],
    tooltip: "Fast (200ms) / Normal (400ms) / Slow (600ms) — header flash duration."
  }
], Gf = [
  {
    id: "FiL_Design_ImageMind.ConnectionFX.Enabled",
    name: "Connection wire effects",
    type: "boolean",
    defaultValue: !1,
    tooltip: "Accent-radial-gradient overlay near the cursor while dragging a wire.",
    category: ["FiL_Design_ImageMind", "Connection FX", "Enabled"]
  }
], Kf = [
  {
    id: "FiL_Design_ImageMind.ConnectionFX.ShowToasts",
    name: "Show connection toasts",
    type: "boolean",
    defaultValue: !0,
    category: ["FiL_Design_ImageMind", "Connection FX", "Feedback"],
    tooltip: "Show toast notifications when connecting/disconnecting wires."
  },
  {
    id: "FiL_Design_ImageMind.ConnectionFX.AnimationDuration",
    name: "Animation duration",
    type: "combo",
    defaultValue: "Normal",
    options: ["Fast", "Normal", "Slow"],
    category: ["FiL_Design_ImageMind", "Connection FX", "Timing"],
    tooltip: "Fast (150ms) / Normal (300ms) / Slow (450ms) — pulse effect duration."
  }
], qf = [
  {
    id: "FiL_Design_ImageMind.Shortcuts.Enabled",
    name: "Keyboard shortcuts",
    type: "boolean",
    defaultValue: !0,
    tooltip: "Esc — close popup / unfocus field. ? — help for the selected FiL_Design_ImageMind node. Shift+? or Ctrl+Shift+K — full shortcuts cheatsheet. / — focus node search.",
    category: ["FiL_Design_ImageMind", "Shortcuts"]
  }
], Xf = [
  {
    id: "FiL_Design_ImageMind.Language",
    name: "Language",
    type: "combo",
    defaultValue: "en",
    options: ["en", "ru"],
    tooltip: "UI language for FiL_Design_ImageMind node tooltips and labels (English / Russian).",
    category: ["FiL_Design_ImageMind", "Language"]
  }
], Va = {
  Default: "default",
  Cyberpunk: "cyberpunk",
  Fallout: "fallout"
};
function Yf(e) {
  const t = Va[String(e)] ?? "default";
  wa(t);
  const n = globalThis.app;
  n && Wu(n);
}
const Jf = [
  {
    id: "FiL_Design_ImageMind.Theme",
    name: "Node theme",
    type: "combo",
    defaultValue: "Default",
    options: ["Default", "Cyberpunk", "Fallout"],
    category: ["FiL_Design_ImageMind", "Appearance", "Theme"],
    tooltip: "Recolors every FiL_Design_ImageMind node panel and adds a small themed flourish (neon glow for Cyberpunk, a CRT scanline texture for Fallout). Applies instantly, no reload.",
    onChange: Yf
  }
];
function Qf(e) {
  const t = e("FiL_Design_ImageMind.Theme", "Default");
  wa(Va[t] ?? "default");
}
const Zf = [
  ...Wf,
  ...zf,
  ...Gf,
  ...Kf,
  ...qf,
  ...Xf,
  ...Jf
];
function tl(e, t, n, s) {
  const o = s.nodeState.mode ?? s.nodeState.seed_mode ?? "random", i = s.nodeState.seed ?? 0, l = o === "random" ? Math.floor(Math.random() * 4294967295) : Number(i) || 0;
  if (s.lastRunSeed = l, !(typeof e != "object" || e === null))
    for (const [a, r] of Object.entries(e)) {
      const u = r;
      if (u.class_type === t && u.inputs && Number(a) === n) {
        u.inputs.seed = l;
        break;
      }
    }
}
function ep(e) {
  var t, n;
  try {
    const s = globalThis.app, o = ((t = s == null ? void 0 : s.graph) == null ? void 0 : t._nodes) ?? [];
    for (const i of o) {
      const l = i;
      if (l.comfyClass === "FiLSeed" && l._filSeedState) {
        tl(e, "FiLSeed", l.id, l._filSeedState);
        continue;
      }
      if (l.comfyClass === "FiLOpticScanner") {
        l._filScannerSeedState && tl(e, "FiLOpticScanner", l.id, l._filScannerSeedState);
        const a = (n = l.inputs) == null ? void 0 : n.find((r) => r.name === "config");
        (!a || a.link == null) && console.warn(`${nn} Optic Scanner #${l.id} has no Provider Loader wired to its "config" slot — execution will fail.`);
      }
    }
  } catch (s) {
    console.warn(`${nn} preflight fallback:`, s);
  }
  return e;
}
function tp(e) {
  return {
    name: td,
    // Declarative settings — registered BEFORE setup so the panel renders
    // even if a later installer throws.
    settings: Zf,
    async setup() {
      const t = [
        () => qd(),
        () => Jd(e),
        () => of(),
        () => pf(e),
        () => jf(e),
        () => Qf((n, s) => ka(n, s, e))
      ];
      for (const n of t)
        try {
          n();
        } catch (s) {
          console.warn(`${nn} installer ${n.name || "anonymous"} failed:`, s);
        }
    },
    getCustomWidgets(t) {
      const n = t;
      return n.widgets = n.widgets || {}, n.widgets.fil_compare = { serialize: !1 }, n.widgets;
    },
    async beforeRegisterNodeDef(t, n) {
      const s = Ta[n.name];
      if (s)
        try {
          await s.register(t, n);
        } catch (o) {
          console.warn(`${nn} failed to register "${n.name}":`, o);
        }
    },
    async graphToPrompt(t) {
      return ep(t);
    }
  };
}
async function np() {
  if (typeof fetch > "u") return;
  let e;
  try {
    e = await fetch(`${Rt}/node_contracts`);
  } catch {
    return;
  }
  if (!e.ok) return;
  let t;
  try {
    t = await e.json();
  } catch {
    return;
  }
  const n = new Set(Object.keys(t.node_ids ?? {})), s = new Set(Object.keys(Ta));
  for (const o of n)
    s.has(o) || console.warn(`${nn} server expects "${o}" but local JS does not register it`);
  for (const o of s)
    n.has(o) || console.warn(`${nn} JS registers "${o}" but server does not expose a contract`);
}
Ou();
Ju();
np().catch((e) => {
  console.warn("[FiL_Design_ImageMind] contract self-check failed:", e);
});
const Ba = tp(sl);
sl.registerExtension(Ba);
console.info(`[FiL_Design_ImageMind] extension registered as "${Ba.name}"`);
const sp = {
  __cheatsheet__: {
    id: "__cheatsheet__",
    title: "FiL_Design_ImageMind — Keyboard Cheatsheet",
    body: "Global keyboard shortcuts available on the ComfyUI canvas.",
    table: {
      headers: ["Key", "Action"],
      rows: [
        ["Shift+?", "Open this cheatsheet"],
        ["Ctrl+Shift+K", "Open this cheatsheet (alternative)"],
        ["?", "Open help for the selected FiL_Design_ImageMind node"],
        ["/", "Focus the Add-Node search field"],
        ["Esc", "Close popup / blur form field"]
      ]
    }
  },
  default: {
    id: "default",
    title: "FiL_Design_ImageMind",
    body: "Provider + model selector pack for vision-aware LLMs.",
    bullets: [
      "Open Settings → FiL_Design_ImageMind → Providers and API keys to configure a provider.",
      "Drop a FiL Provider Loader on the canvas, pick a provider + model, and wire its `config` output into the Optic Scanner.",
      "Use Shift+? or Ctrl+Shift+K for the keyboard cheatsheet."
    ]
  },
  FiLSeed: {
    id: "FiLSeed",
    title: "FiL Seed",
    body: "Fixed or randomized seed with copy and reuse buttons.",
    bullets: [
      "Random: a fresh seed every run.",
      "Fixed: same seed for repeatable results.",
      "New fixed random rolls and locks a new seed.",
      "Use last seed recalls the seed used by the latest run.",
      "Copy puts the current seed on the clipboard."
    ]
  },
  FiLProviderLoader: {
    id: "FiLProviderLoader",
    title: "FiL Provider Loader",
    body: "Provider and model runtime configuration. Returns `{config, model}`.",
    bullets: [
      "Choose a provider (Ollama/LM Studio/Groq/Google/OpenRouter/Cloudflare).",
      "The model list is fetched from the configured provider; click Refresh models to re-pull.",
      "Wire the `config` output into the Optic Scanner.",
      "Credentials are stored locally, never in workflows."
    ],
    rows: [
      { label: "Temperature", desc: "LLM sampling temperature (0 = greedy, 2 = chaotic)." },
      { label: "Max tokens", desc: "0 = use the provider's default; > 0 caps response length." },
      { label: "Rate limit ms", desc: "Minimum ms between calls for this provider." }
    ]
  },
  FiLOpticScanner: {
    id: "FiLOpticScanner",
    title: "FiL Optic Scanner",
    body: "Image analysis or text-idea expansion into a generation prompt.",
    bullets: [
      "Wire a Provider Loader into the `config` slot before running.",
      "Disconnect the `image` input to use text-only mode (prompt expansion).",
      "Agent + Detail level + language shape the output prompt.",
      "Photo/art styles are optional; pick one or none."
    ]
  },
  FiLNeuroCleaner: {
    id: "FiLNeuroCleaner",
    title: "FiL Neuro Cleaner",
    body: "Selective model, VRAM, RAM, and cache cleanup.",
    bullets: [
      "Returns its input unchanged so it may inline anywhere.",
      "Selects target caches to drop before, mid, or after heavy runs.",
      "Force = aggressive (may interrupt pending tasks)."
    ]
  },
  FiLBeforeAfterCompare: {
    id: "FiLBeforeAfterCompare",
    title: "FiL Before/After Compare",
    body: "Before/after/wipe/side-by-side/overlay/difference viewer for two images.",
    bullets: [
      "6 modes: before, after, wipe, side-by-side, overlay, difference.",
      "Wipe drags the divider directly on the preview; overlay responds to the opacity slider.",
      "Resize mode (in Settings) downscales the preview and, optionally, the output.",
      "Save before / Save after write the current image to output/FiL_Design_ImageMind/compare."
    ]
  },
  FiLUpscaleTileCalc: {
    id: "FiLUpscaleTileCalc",
    title: "FiL Upscale Tile Calc",
    body: "Tile dimensions, grid preview, denoise and latent-size calculation.",
    bullets: [
      "Computes optimal tile grid for a target resolution.",
      "Outputs tile width/height, grid cols/rows, latent width/height.",
      "Wire outputs into KSampler-tile-aware upscale nodes."
    ]
  }
}, op = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HELP_DEFAULTS: sp
}, Symbol.toStringTag, { value: "Module" })), ip = ["data-ok", "data-err"], lp = /* @__PURE__ */ Se({
  __name: "FilInfo",
  props: {
    text: {},
    ok: { type: Boolean },
    err: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (C(), E("div", {
      class: "fil-w-info",
      "data-ok": e.ok || void 0,
      "data-err": e.err || void 0
    }, Z(e.text), 9, ip));
  }
}), gs = /* @__PURE__ */ Fe(lp, [["__scopeId", "data-v-851660c1"]]), ap = { class: "fil-seed-root" }, rp = ["title"], cp = ["readonly"], up = { class: "fil-seed-actions" }, dp = /* @__PURE__ */ Se({
  __name: "Seed",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = kt(), s = Y({
      get: () => t.state.nodeState.mode ?? "random",
      set: (u) => {
        t.state.nodeState.mode = u;
      }
    }), o = Y({
      get: () => Number(t.state.nodeState.seed ?? 0) || 0,
      set: (u) => {
        t.state.nodeState.seed = u;
      }
    });
    He(
      () => t.state.nodeState,
      (u) => {
        typeof u.mode == "string" && (s.value = u.mode), typeof u.seed == "number" && (o.value = Number(u.seed));
      },
      { deep: !0 }
    );
    function i() {
      s.value = "random";
    }
    function l() {
      if (t.state.lastRunSeed == null) {
        st.warning("No last-run seed recorded yet");
        return;
      }
      o.value = t.state.lastRunSeed, s.value = "fixed";
    }
    function a() {
      const u = Math.floor(Math.random() * 1e9) & 2147483647;
      o.value = u, s.value = "fixed";
    }
    const r = Y(() => s.value === "fixed" ? `${o.value}` : "random");
    return (u, c) => (C(), E("div", ap, [
      B("div", {
        class: "fil-seed-readout",
        title: s.value === "fixed" ? y(n)("sd_locked", "Locked seed") : y(n)("sd_auto_random", "Auto-random")
      }, [
        Ke(B("input", {
          "onUpdate:modelValue": c[0] || (c[0] = (d) => r.value = d),
          type: "text",
          class: "fil-seed-display",
          readonly: s.value === "random",
          "aria-label": "Seed value"
        }, null, 8, cp), [
          [vt, r.value]
        ]),
        s.value === "random" && t.state.lastRunSeed != null ? (C(), Ie(gs, {
          key: 0,
          text: `Last run: ${t.state.lastRunSeed}`
        }, null, 8, ["text"])) : se("", !0)
      ], 8, rp),
      B("div", up, [
        X(it, {
          label: y(n)("sd_random_label", "🔀 Random"),
          variant: "standard",
          title: y(n)("sd_mode", "Random generates a new seed each run."),
          onClick: i
        }, null, 8, ["label", "title"]),
        X(it, {
          label: y(n)("sd_btn_use_last", "♻️ Use last"),
          variant: "standard",
          title: y(n)("sd_use_last", "Reuse the seed from the last executed run."),
          onClick: l
        }, null, 8, ["label", "title"]),
        X(it, {
          label: y(n)("sd_btn_new_fixed", "🎲 New fixed"),
          variant: "accent",
          title: y(n)("sd_new_fixed", "Generate a new random fixed seed."),
          onClick: a
        }, null, 8, ["label", "title"])
      ])
    ]));
  }
}), fp = /* @__PURE__ */ Fe(dp, [["__scopeId", "data-v-8cb48b03"]]), pp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fp
}, Symbol.toStringTag, { value: "Module" })), mp = ["title"], hp = {
  key: 0,
  class: "fil-combo-label"
}, gp = ["disabled", "aria-expanded"], _p = { class: "fil-combo-trigger-label" }, bp = {
  key: 1,
  class: "fil-combo-badge"
}, vp = ["placeholder"], yp = { class: "fil-combo-list" }, wp = ["aria-selected", "onMouseenter", "onClick"], xp = { class: "fil-combo-option-label" }, Sp = {
  key: 1,
  class: "fil-combo-badge"
}, Cp = {
  key: 0,
  class: "fil-combo-empty"
}, Fp = /* @__PURE__ */ Se({
  __name: "FilComboBox",
  props: {
    options: {},
    modelValue: {},
    searchable: { type: Boolean, default: !1 },
    placeholder: { default: "Search…" },
    disabled: { type: Boolean },
    label: {},
    title: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = /* @__PURE__ */ re(!1), i = /* @__PURE__ */ re(""), l = /* @__PURE__ */ re(0), a = /* @__PURE__ */ re(null), r = /* @__PURE__ */ re(null), u = /* @__PURE__ */ re(null), c = /* @__PURE__ */ re({}), d = Y(() => n.options.find((T) => T.value === n.modelValue)), f = Y(() => {
      if (!n.searchable || !i.value.trim()) return n.options;
      const T = i.value.trim().toLowerCase();
      return n.options.filter((I) => (I.label ?? I.value).toLowerCase().includes(T));
    });
    function p(T) {
      return T.label ?? T.value;
    }
    function m() {
      const T = a.value;
      if (!T) return;
      const I = T.getBoundingClientRect(), L = window.innerHeight, K = 260, N = L - I.bottom, x = N < K && I.top > N;
      c.value = {
        left: `${I.left}px`,
        width: `${I.width}px`,
        ...x ? { bottom: `${L - I.top + 4}px` } : { top: `${I.bottom + 4}px` }
      };
    }
    function _(T) {
      var L;
      const I = T.target;
      I instanceof Element && ((L = r.value) != null && L.contains(I)) || g();
    }
    function v() {
      n.disabled || (o.value = !0, i.value = "", l.value = Math.max(
        0,
        f.value.findIndex((T) => T.value === n.modelValue)
      ), wn(() => {
        var T;
        m(), n.searchable && ((T = u.value) == null || T.focus()), window.addEventListener("resize", _), window.addEventListener("scroll", _, !0), document.addEventListener("mousedown", w, !0);
      }));
    }
    function g() {
      o.value && (o.value = !1, window.removeEventListener("resize", _), window.removeEventListener("scroll", _, !0), document.removeEventListener("mousedown", w, !0));
    }
    function w(T) {
      var L, K;
      const I = T.target;
      (L = a.value) != null && L.contains(I) || (K = r.value) != null && K.contains(I) || g();
    }
    function D() {
      o.value ? g() : v();
    }
    function S(T) {
      var I;
      s("update:modelValue", T.value), g(), (I = a.value) == null || I.focus();
    }
    function k(T) {
      if (!n.disabled) {
        if (!o.value && (T.key === "ArrowDown" || T.key === "ArrowUp" || T.key === "Enter" || T.key === " ")) {
          T.preventDefault(), v();
          return;
        }
        o.value && ie(T);
      }
    }
    function ie(T) {
      var L;
      const I = f.value;
      if (T.key === "ArrowDown")
        T.preventDefault(), l.value = I.length ? (l.value + 1) % I.length : 0;
      else if (T.key === "ArrowUp")
        T.preventDefault(), l.value = I.length ? (l.value - 1 + I.length) % I.length : 0;
      else if (T.key === "Enter") {
        T.preventDefault();
        const K = I[l.value];
        K && S(K);
      } else T.key === "Escape" && (T.preventDefault(), g(), (L = a.value) == null || L.focus());
    }
    return He(i, () => {
      l.value = 0;
    }), xn(() => {
      window.removeEventListener("resize", _), window.removeEventListener("scroll", _, !0), document.removeEventListener("mousedown", w, !0);
    }), (T, I) => {
      var L, K;
      return C(), E("div", {
        class: "fil-combo",
        title: e.title
      }, [
        e.label ? (C(), E("label", hp, Z(e.label), 1)) : se("", !0),
        B("button", {
          ref_key: "triggerRef",
          ref: a,
          type: "button",
          class: Le(["fil-combo-trigger", { open: o.value, disabled: e.disabled }]),
          disabled: e.disabled,
          "aria-expanded": o.value,
          "aria-haspopup": "listbox",
          onClick: D,
          onKeydown: k
        }, [
          (L = d.value) != null && L.icon ? (C(), Ie(yn, {
            key: 0,
            name: d.value.icon,
            size: 16
          }, null, 8, ["name"])) : se("", !0),
          B("span", _p, Z(d.value ? p(d.value) : e.modelValue), 1),
          (K = d.value) != null && K.badge ? (C(), E("span", bp, Z(d.value.badge), 1)) : se("", !0),
          I[1] || (I[1] = B("span", { class: "fil-combo-chevron" }, "▾", -1))
        ], 42, gp),
        (C(), Ie(Bl, { to: "body" }, [
          o.value ? (C(), E("div", {
            key: 0,
            ref_key: "panelRef",
            ref: r,
            class: "fil-combo-panel",
            style: ze(c.value),
            role: "listbox",
            onKeydown: ie
          }, [
            e.searchable ? Ke((C(), E("input", {
              key: 0,
              ref_key: "searchRef",
              ref: u,
              "onUpdate:modelValue": I[0] || (I[0] = (N) => i.value = N),
              type: "search",
              class: "fil-combo-search",
              placeholder: e.placeholder,
              spellcheck: "false"
            }, null, 8, vp)), [
              [vt, i.value]
            ]) : se("", !0),
            B("div", yp, [
              (C(!0), E(de, null, Ae(f.value, (N, x) => (C(), E("button", {
                key: N.value,
                type: "button",
                class: Le(["fil-combo-option", { active: x === l.value, selected: N.value === e.modelValue }]),
                role: "option",
                "aria-selected": N.value === e.modelValue,
                onMouseenter: (F) => l.value = x,
                onClick: (F) => S(N)
              }, [
                N.icon ? (C(), Ie(yn, {
                  key: 0,
                  name: N.icon,
                  size: 16
                }, null, 8, ["name"])) : se("", !0),
                B("span", xp, Z(p(N)), 1),
                N.badge ? (C(), E("span", Sp, Z(N.badge), 1)) : se("", !0)
              ], 42, wp))), 128)),
              f.value.length === 0 ? (C(), E("div", Cp, "No matches")) : se("", !0)
            ])
          ], 36)) : se("", !0)
        ]))
      ], 8, mp);
    };
  }
}), Po = /* @__PURE__ */ Fe(Fp, [["__scopeId", "data-v-39d4212e"]]), Mp = ["disabled", "min", "max", "step", "aria-label"], Lp = /* @__PURE__ */ Se({
  __name: "FilNumberInput",
  props: {
    modelValue: {},
    min: {},
    max: {},
    step: { default: 1 },
    disabled: { type: Boolean },
    ariaLabel: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = Y(() => n.modelValue), i = /* @__PURE__ */ re(r(o.value));
    He(o, (_) => {
      l.value || (i.value = r(_));
    });
    let l = /* @__PURE__ */ re(!1), a = null;
    function r(_) {
      return Number.isFinite(_) ? String(_) : "";
    }
    function u(_) {
      const v = (_ || "").trim();
      if (v === "" || !/^[0-9+\-*/(). ]+$/.test(v.replace(/\^/g, "**"))) return null;
      try {
        const g = new Function(`"use strict"; return (${v});`), w = Number(g());
        return Number.isFinite(w) ? w : null;
      } catch {
        return null;
      }
    }
    function c(_) {
      if (_ === null) {
        i.value = r(o.value);
        return;
      }
      let v = _;
      n.min != null && v < n.min && (v = n.min), n.max != null && v > n.max && (v = n.max), v !== o.value && s("update:modelValue", v), i.value = r(v);
    }
    function d() {
      l.value = !0, a = i.value;
    }
    function f() {
      l.value = !1, c(u(i.value)), a = null;
    }
    function p(_) {
      _.key === "Enter" ? (_.preventDefault(), c(u(i.value)), _.target.blur()) : _.key === "Escape" ? (_.preventDefault(), a !== null && (i.value = a), _.target.blur()) : _.key === "ArrowUp" ? (_.preventDefault(), m(_.shiftKey ? 10 : 1)) : _.key === "ArrowDown" && (_.preventDefault(), m(_.shiftKey ? -10 : -1));
    }
    function m(_) {
      let v = o.value + _ * (n.step || 1);
      n.min != null && v < n.min && (v = n.min), n.max != null && v > n.max && (v = n.max), s("update:modelValue", v), i.value = r(v);
    }
    return (_, v) => Ke((C(), E("input", {
      "onUpdate:modelValue": v[0] || (v[0] = (g) => i.value = g),
      type: "text",
      class: "fil-w-num",
      inputmode: "numeric",
      disabled: e.disabled,
      min: e.min ?? void 0,
      max: e.max ?? void 0,
      step: e.step ?? void 0,
      "aria-label": e.ariaLabel,
      onFocus: d,
      onBlur: f,
      onKeydown: p
    }, null, 40, Mp)), [
      [vt, i.value]
    ]);
  }
}), $t = /* @__PURE__ */ Fe(Lp, [["__scopeId", "data-v-b9154493"]]), Ip = ["title"], Ap = {
  key: 0,
  class: "fil-w-slider-label"
}, Dp = { class: "fil-w-slider-row" }, kp = ["value", "min", "max", "step", "disabled", "aria-label"], Ep = /* @__PURE__ */ Se({
  __name: "FilSlider",
  props: {
    modelValue: {},
    min: {},
    max: {},
    step: { default: 0.05 },
    label: {},
    title: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = Y(() => {
      let a = n.modelValue;
      return a < n.min && (a = n.min), a > n.max && (a = n.max), a;
    });
    function i(a) {
      const r = Number(a.target.value);
      s("update:modelValue", r);
    }
    function l(a) {
      s("update:modelValue", a);
    }
    return (a, r) => (C(), E("div", {
      class: "fil-w-slider",
      title: e.title
    }, [
      e.label ? (C(), E("label", Ap, Z(e.label), 1)) : se("", !0),
      B("div", Dp, [
        B("input", {
          type: "range",
          class: "fil-w-slider-range",
          value: o.value,
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label,
          onInput: i
        }, null, 40, kp),
        X($t, {
          "model-value": o.value,
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label,
          "onUpdate:modelValue": l
        }, null, 8, ["model-value", "min", "max", "step", "disabled", "aria-label"])
      ])
    ], 8, Ip));
  }
}), nt = /* @__PURE__ */ Fe(Ep, [["__scopeId", "data-v-b98a8a08"]]), Tp = { class: "fil-provider-root" }, Op = { class: "fil-w-label" }, Rp = { class: "fil-w-label" }, Pp = { class: "fil-provider-row" }, Np = {
  key: 0,
  class: "fil-model-filter-bar"
}, $p = { class: "fil-model-filter-wrap" }, Vp = ["placeholder"], Bp = { class: "fil-model-count" }, Hp = 3e5, Up = /* @__PURE__ */ Se({
  __name: "ProviderLoader",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, n = Pa(), { t: s } = kt(), o = /* @__PURE__ */ re("");
    function i(N, x) {
      return {
        get: () => t.state.nodeState[N] ?? x,
        set: (F) => {
          t.state.nodeState[N] = F;
        }
      };
    }
    const l = Y(() => String(i("provider", "ollama").get()));
    function a(N) {
      i("provider", "ollama").set(N), o.value = "";
      const x = n.modelsFor(N);
      x.length ? (u(x[0]), L(), n.loadModels(N)) : (m.nodeState.model = "(loading...)", K());
    }
    const r = Y(() => String(i("model", "(loading...)").get()));
    function u(N) {
      i("model", "(loading...)").set(N);
    }
    const c = Y(() => Number(i("temperature", 0.7).get())), d = Y(() => Number(i("max_tokens", 0).get())), f = Y(() => Number(i("rate_limit_ms", 100).get())), p = Y(() => Number(i("max_image_side", 1024).get())), m = t.state, _ = Y(() => {
      const N = n.modelsFor(l.value);
      return N.length ? N : ["(no models)"];
    }), v = Y(() => n.modelsFor(l.value).length > 0), g = Y(() => {
      const N = _.value;
      if (!o.value || !v.value) return N;
      const x = o.value.toLowerCase();
      return N.filter((F) => F.toLowerCase().includes(x));
    }), w = Y(() => {
      if (!v.value) return "";
      const N = n.modelsFor(l.value).length, x = g.value.length;
      return x === N ? `${N}` : `${x} of ${N}`;
    }), D = Y(
      () => ks.map((N) => ({ value: N, label: Na[N] ?? N, icon: $a[N] }))
    ), S = Y(() => {
      const N = n.visionModelsFor(l.value);
      return g.value.map((x) => ({
        value: x,
        badge: N.includes(x) ? "👁" : void 0
      }));
    }), k = Y(() => n.isLoading(l.value)), ie = Y(() => n.probeState[l.value]), T = Y(() => n.cachedAgeLabel(l.value));
    let I = null;
    He(() => t.state.nodeState, () => {
    }, { deep: !0 });
    function L() {
      const N = t.state.node;
      if (!N) return;
      const x = fe(N, "model");
      if (!x) return;
      const F = n.modelsFor(l.value), $ = F.length ? F : ["(no models)"];
      x.options && (x.options.values = $);
    }
    async function K() {
      try {
        await n.loadModels(l.value, !0);
        const N = n.modelsFor(l.value);
        u(N[0] ?? "(no models)"), L();
      } catch (N) {
        st.error(N instanceof Error ? N.message : String(N));
      }
    }
    return an(async () => {
      n.loadDisplayNames();
      const N = n.modelsFor(l.value);
      if (N.length)
        r.value === "(loading...)" && u(N[0] ?? "(no models)"), L(), n.loadModels(l.value);
      else
        try {
          await n.loadModels(l.value);
          const x = n.modelsFor(l.value);
          r.value === "(loading...)" && u(x[0] ?? "(no models)"), L();
        } catch (x) {
          st.error(x instanceof Error ? x.message : String(x));
        }
      I = setInterval(() => {
        n.loadModels(l.value, !0);
      }, Hp);
    }), Ws(() => {
      I && clearInterval(I);
    }), (N, x) => (C(), E("div", Tp, [
      B("label", Op, Z(y(s)("lbl_provider", "🔌 Provider")), 1),
      X(Po, {
        options: D.value,
        "model-value": l.value,
        title: y(s)("tt_provider", "LLM provider to use — local (Ollama, LM Studio) or cloud."),
        "onUpdate:modelValue": a
      }, null, 8, ["options", "model-value", "title"]),
      B("label", Rp, Z(y(s)("lbl_model", "🧠 Model")), 1),
      B("div", Pp, [
        X(Po, {
          options: S.value,
          "model-value": r.value,
          title: y(s)("tt_model", "Choose which model to use. If the list is empty, refresh it or check the provider account."),
          "onUpdate:modelValue": u
        }, null, 8, ["options", "model-value", "title"]),
        X(it, {
          label: "↻",
          title: y(s)("tt_refresh", "Reload the model list. Use after adding a new model or API key."),
          disabled: k.value || y(m).ui.refreshing === !0,
          onClick: K
        }, null, 8, ["title", "disabled"])
      ]),
      v.value ? (C(), E("div", Np, [
        B("div", $p, [
          Ke(B("input", {
            "onUpdate:modelValue": x[0] || (x[0] = (F) => o.value = F),
            type: "text",
            class: "fil-model-filter",
            placeholder: y(s)("prov_search_models", "Search models…")
          }, null, 8, Vp), [
            [vt, o.value]
          ])
        ]),
        B("span", Bp, Z(w.value), 1)
      ])) : se("", !0),
      k.value ? (C(), Ie(gs, {
        key: 1,
        text: y(s)("prov_loading_models", "Loading models…")
      }, null, 8, ["text"])) : ie.value && ie.value.status && ie.value.status !== "available" ? (C(), Ie(gs, {
        key: 2,
        err: !0,
        text: ie.value.message || ie.value.status
      }, null, 8, ["text"])) : T.value ? (C(), Ie(gs, {
        key: 3,
        text: `${y(s)("prov_models_updated", "Models updated")}: ${T.value}`
      }, null, 8, ["text"])) : se("", !0),
      X(nt, {
        "model-value": c.value,
        min: 0,
        max: 2,
        step: 0.05,
        label: y(s)("lbl_temperature", "🌡️ Temperature"),
        title: y(s)("tt_temperature", "Sampling temperature — higher is more creative, lower is more deterministic."),
        "onUpdate:modelValue": x[1] || (x[1] = (F) => y(m).nodeState.temperature = F)
      }, null, 8, ["model-value", "label", "title"]),
      X(nt, {
        "model-value": d.value,
        min: 0,
        max: 65536,
        step: 1,
        label: y(s)("lbl_max_tokens", "🔢 Max tokens (0 = no limit)"),
        title: y(s)("tt_provider_max_tokens", "Maximum tokens in the response. 0 = provider default (no explicit limit)."),
        "onUpdate:modelValue": x[2] || (x[2] = (F) => y(m).nodeState.max_tokens = F)
      }, null, 8, ["model-value", "label", "title"]),
      X(nt, {
        "model-value": f.value,
        min: 0,
        max: 5e3,
        step: 10,
        label: y(s)("lbl_rate_limit", "⏱️ Rate limit (ms)"),
        title: y(s)("tt_rate_limit", "Minimum delay between requests to this provider, to avoid rate limiting."),
        "onUpdate:modelValue": x[3] || (x[3] = (F) => y(m).nodeState.rate_limit_ms = F)
      }, null, 8, ["model-value", "label", "title"]),
      X(nt, {
        "model-value": p.value,
        min: 128,
        max: 4096,
        step: 64,
        label: y(s)("lbl_max_image_side", "🖼️ Max image side"),
        title: y(s)("tt_max_image_side", "Images are downscaled so their longest side does not exceed this value."),
        "onUpdate:modelValue": x[4] || (x[4] = (F) => y(m).nodeState.max_image_side = F)
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), jp = /* @__PURE__ */ Fe(Up, [["__scopeId", "data-v-eaffa953"]]), Wp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jp
}, Symbol.toStringTag, { value: "Module" })), zp = ["aria-checked", "disabled", "title", "onClick"], Gp = /* @__PURE__ */ Se({
  __name: "FilChipGrid",
  props: {
    options: {},
    modelValue: {},
    columns: { default: 3 },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = Y(() => ({
      gridTemplateColumns: `repeat(${Math.max(1, n.columns)}, minmax(0, 1fr))`
    }));
    function i(l) {
      n.disabled || l !== n.modelValue && s("update:modelValue", l);
    }
    return (l, a) => (C(), E("div", {
      class: "fil-w-chips",
      style: ze(o.value),
      role: "radiogroup"
    }, [
      (C(!0), E(de, null, Ae(e.options, (r) => (C(), E("button", {
        key: r,
        type: "button",
        role: "radio",
        class: Le(["fil-w-chip", { active: r === e.modelValue, disabled: e.disabled }]),
        "aria-checked": r === e.modelValue,
        disabled: e.disabled,
        title: r,
        onClick: (u) => i(r)
      }, Z(r), 11, zp))), 128))
    ], 4));
  }
}), nl = /* @__PURE__ */ Fe(Gp, [["__scopeId", "data-v-3c07d909"]]), Kp = { class: "fil-w-chiplist" }, qp = ["placeholder", "aria-label", "disabled"], Xp = {
  class: "fil-w-chip-scroll",
  role: "radiogroup"
}, Yp = ["aria-checked", "disabled", "title", "onClick"], Jp = {
  key: 0,
  class: "fil-w-chip-empty"
}, Qp = /* @__PURE__ */ Se({
  __name: "FilChipList",
  props: {
    options: {},
    modelValue: {},
    searchable: { type: Boolean, default: !0 },
    disabled: { type: Boolean },
    placeholder: { default: "Search…" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = /* @__PURE__ */ re(""), i = Y(() => {
      const a = o.value.trim().toLowerCase();
      return a ? n.options.filter((r) => r.toLowerCase().includes(a)) : n.options;
    });
    function l(a) {
      n.disabled || a !== n.modelValue && s("update:modelValue", a);
    }
    return (a, r) => (C(), E("div", Kp, [
      e.searchable ? Ke((C(), E("input", {
        key: 0,
        "onUpdate:modelValue": r[0] || (r[0] = (u) => o.value = u),
        class: "fil-w-search",
        type: "search",
        placeholder: e.placeholder,
        "aria-label": e.placeholder,
        disabled: e.disabled,
        spellcheck: "false"
      }, null, 8, qp)), [
        [vt, o.value]
      ]) : se("", !0),
      B("div", Xp, [
        (C(!0), E(de, null, Ae(i.value, (u) => (C(), E("button", {
          key: u,
          type: "button",
          role: "radio",
          class: Le(["fil-w-chip", { active: u === e.modelValue, disabled: e.disabled }]),
          "aria-checked": u === e.modelValue,
          disabled: e.disabled,
          title: u,
          onClick: (c) => l(u)
        }, Z(u), 11, Yp))), 128)),
        i.value.length === 0 ? (C(), E("div", Jp, Z(o.value ? "No matches" : "Empty"), 1)) : se("", !0)
      ])
    ]));
  }
}), Zp = /* @__PURE__ */ Fe(Qp, [["__scopeId", "data-v-8b6ca087"]]), em = ["title"], tm = {
  key: 0,
  class: "fil-w-segmented-label"
}, nm = ["aria-label"], sm = ["aria-pressed", "disabled", "tabindex", "onClick", "onKeydown"], om = /* @__PURE__ */ Se({
  __name: "FilSegmented",
  props: {
    options: {},
    modelValue: {},
    label: {},
    title: {},
    disabled: { type: Boolean },
    optionLabels: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = Y(() => n.modelValue), i = /* @__PURE__ */ re([]);
    function l(u) {
      var c;
      return ((c = n.optionLabels) == null ? void 0 : c[u]) ?? u;
    }
    function a(u) {
      n.disabled || u !== o.value && s("update:modelValue", u);
    }
    function r(u, c) {
      var f, p;
      const d = n.options;
      if (u.key === "ArrowRight" || u.key === "ArrowDown") {
        u.preventDefault();
        const m = d[(c + 1) % d.length];
        a(m), (f = i.value[(c + 1) % d.length]) == null || f.focus();
      } else if (u.key === "ArrowLeft" || u.key === "ArrowUp") {
        u.preventDefault();
        const m = d[(c - 1 + d.length) % d.length];
        a(m), (p = i.value[(c - 1 + d.length) % d.length]) == null || p.focus();
      }
    }
    return (u, c) => (C(), E("div", {
      class: "fil-w-segmented",
      title: e.title
    }, [
      e.label ? (C(), E("label", tm, Z(e.label), 1)) : se("", !0),
      B("div", {
        class: Le(["fil-w-pill", { disabled: e.disabled }]),
        role: "group",
        "aria-label": e.label
      }, [
        (C(!0), E(de, null, Ae(e.options, (d, f) => (C(), E("button", {
          key: d,
          ref_for: !0,
          ref: (p) => {
            p && (i.value[f] = p);
          },
          type: "button",
          class: Le(["fil-w-seg", { active: d === o.value }]),
          "aria-pressed": d === o.value,
          disabled: e.disabled,
          tabindex: d === o.value ? 0 : -1,
          onClick: (p) => a(d),
          onKeydown: (p) => r(p, f)
        }, Z(l(d)), 43, sm))), 128))
      ], 10, nm)
    ], 8, em));
  }
}), gt = /* @__PURE__ */ Fe(om, [["__scopeId", "data-v-163eefcf"]]), im = ["aria-expanded", "disabled"], lm = { class: "fil-w-section-arrow" }, am = { class: "fil-w-section-title" }, rm = /* @__PURE__ */ Se({
  __name: "FilSection",
  props: {
    title: {},
    modelValue: { type: Boolean, default: !1 },
    collapsible: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t;
    function o() {
      n.collapsible && s("update:modelValue", !n.modelValue);
    }
    const i = Y(() => n.modelValue ? "▶" : "▼");
    return (l, a) => (C(), E("button", {
      type: "button",
      class: Le(["fil-w-section", { collapsible: e.collapsible, collapsed: e.modelValue }]),
      "aria-expanded": !e.modelValue,
      disabled: !e.collapsible,
      onClick: o
    }, [
      B("span", lm, Z(i.value), 1),
      B("span", am, Z(e.title), 1)
    ], 10, im));
  }
}), sn = /* @__PURE__ */ Fe(rm, [["__scopeId", "data-v-686d0388"]]), cm = {
  "⏱️ ЗАХВАТ/🎞️ Slo-Mo Bullet Time": "/extensions/FiL_Design_ImageMind/style-previews/7f9dc89f4509.webp",
  "⏱️ ЗАХВАТ/💫 Motion Blur": "/extensions/FiL_Design_ImageMind/style-previews/319b52f9ad57.webp",
  "⏱️ ЗАХВАТ/📸 Action Freeze": "/extensions/FiL_Design_ImageMind/style-previews/8a1e33a444cd.webp",
  "🎬 КИНО/🌈 Technicolor 50s": "/extensions/FiL_Design_ImageMind/style-previews/3f8490155c6b.webp",
  "🎬 КИНО/🌑 Film Noir": "/extensions/FiL_Design_ImageMind/style-previews/10b5451815ad.webp",
  "🎬 КИНО/🎞️ IMAX Production": "/extensions/FiL_Design_ImageMind/style-previews/b6cc800b20c0.webp",
  "🎬 КИНО/🎬 Gangster Cinema": "/extensions/FiL_Design_ImageMind/style-previews/ae56976066f8.webp",
  "🎬 КИНО/📷 Anamorphic Wide": "/extensions/FiL_Design_ImageMind/style-previews/be31792954d3.webp",
  "🏙️ СРЕДА/☔ Rain Monsoon Puddle": "/extensions/FiL_Design_ImageMind/style-previews/b448ea899628.webp",
  "🏙️ СРЕДА/🇬🇧 London Smog": "/extensions/FiL_Design_ImageMind/style-previews/98a99936f0b4.webp",
  "🏙️ СРЕДА/🌃 Cyberpunk Neon": "/extensions/FiL_Design_ImageMind/style-previews/8e50ac0fb562.webp",
  "🏙️ СРЕДА/🌅 Magic Hour": "/extensions/FiL_Design_ImageMind/style-previews/59c330eb8b49.webp",
  "🏙️ СРЕДА/🌧️ Rainy Neon Noir": "/extensions/FiL_Design_ImageMind/style-previews/43cae136b2aa.webp",
  "🏙️ СРЕДА/🌫️ Foggy Neon Noir": "/extensions/FiL_Design_ImageMind/style-previews/12dd508ac7b3.webp",
  "🏙️ СРЕДА/🏚️ Dystopian Megacity": "/extensions/FiL_Design_ImageMind/style-previews/a7718ef06eef.webp",
  "🏙️ СРЕДА/📷 Street Candid": "/extensions/FiL_Design_ImageMind/style-previews/869c43bb5261.webp",
  "🏙️ СРЕДА/🧱 Urban Grunge": "/extensions/FiL_Design_ImageMind/style-previews/4457a01070e3.webp",
  "🏜️ ЖАНРЫ/✈️ Travel Adventure": "/extensions/FiL_Design_ImageMind/style-previews/d7fd7df8bab9.webp",
  "🏜️ ЖАНРЫ/🌌 Astro Cosmic": "/extensions/FiL_Design_ImageMind/style-previews/e12c7f082034.webp",
  "🏜️ ЖАНРЫ/🏔️ Пейзажный Landscape": "/extensions/FiL_Design_ImageMind/style-previews/1849586bc0fb.webp",
  "🏜️ ЖАНРЫ/🏜️ Saharan Mirage": "/extensions/FiL_Design_ImageMind/style-previews/ea6f5edccea2.webp",
  "🏜️ ЖАНРЫ/🔬 Macro Micro-world": "/extensions/FiL_Design_ImageMind/style-previews/df074040d0ea.webp",
  "🏜️ ЖАНРЫ/🦁 Nat Geo Scale": "/extensions/FiL_Design_ImageMind/style-previews/bf615e8e7547.webp",
  "🏜️ ЖАНРЫ/🪶 Ethnic Spirit": "/extensions/FiL_Design_ImageMind/style-previews/8f4514db215c.webp",
  "🏠 ИНТЕРЬЕР/⬜ Minimalism": "/extensions/FiL_Design_ImageMind/style-previews/f9cbe4bc9dd0.webp",
  "🏠 ИНТЕРЬЕР/🌻 Provence Rustic": "/extensions/FiL_Design_ImageMind/style-previews/71a2e0daec1b.webp",
  "🏠 ИНТЕРЬЕР/🌿 Eco-Style Design": "/extensions/FiL_Design_ImageMind/style-previews/b395c0299fb1.webp",
  "🏠 ИНТЕРЬЕР/🏡 Country House": "/extensions/FiL_Design_ImageMind/style-previews/70ac23c87f67.webp",
  "🏠 ИНТЕРЬЕР/🏭 Loft Industrial": "/extensions/FiL_Design_ImageMind/style-previews/85049dad92ef.webp",
  "🏠 ИНТЕРЬЕР/👑 Baroque Ornate": "/extensions/FiL_Design_ImageMind/style-previews/5d0ef7f27c01.webp",
  "🏠 ИНТЕРЬЕР/🕉️ Boho Chic": "/extensions/FiL_Design_ImageMind/style-previews/3b20bcccf35d.webp",
  "👗 ФЭШН/✨ Glamour Glow": "/extensions/FiL_Design_ImageMind/style-previews/810bed0ccd93.webp",
  "👗 ФЭШН/👔 Business Pro": "/extensions/FiL_Design_ImageMind/style-previews/a732ad5871d2.webp",
  "👗 ФЭШН/👠 Fashion Runway": "/extensions/FiL_Design_ImageMind/style-previews/42e3592c2fe5.webp",
  "👗 ФЭШН/👤 Portrait Bokeh": "/extensions/FiL_Design_ImageMind/style-previews/cf3e5ed8c747.webp",
  "👗 ФЭШН/💋 Pin-up Style": "/extensions/FiL_Design_ImageMind/style-previews/28d5df975a1d.webp",
  "👗 ФЭШН/📸 Editorial Vogue": "/extensions/FiL_Design_ImageMind/style-previews/bec6d89ead31.webp",
  "👗 ФЭШН/🖤 Chanel Aesthetic": "/extensions/FiL_Design_ImageMind/style-previews/f507f4fbe83f.webp",
  "👗 ФЭШН/🛍️ Street Fashion": "/extensions/FiL_Design_ImageMind/style-previews/ce2cdde6ac67.webp",
  "📐 МОДИФИКАТОРЫ/🌐 Fisheye Lens": "/extensions/FiL_Design_ImageMind/style-previews/fe9862d72fb4.webp",
  "📐 МОДИФИКАТОРЫ/📐 Dutch Angle": "/extensions/FiL_Design_ImageMind/style-previews/1e04214ae68e.webp",
  "📐 МОДИФИКАТОРЫ/📹 GoPro POV Action": "/extensions/FiL_Design_ImageMind/style-previews/06a18532a311.webp",
  "📐 МОДИФИКАТОРЫ/🔭 Ultra Wide 12mm": "/extensions/FiL_Design_ImageMind/style-previews/d4aeacbc72e2.webp",
  "📐 МОДИФИКАТОРЫ/🛩️ Drone Photo": "/extensions/FiL_Design_ImageMind/style-previews/673d6fa81b66.webp",
  "📷 КАМЕРЫ/🎞️ Raw 35mm Photo": "/extensions/FiL_Design_ImageMind/style-previews/c1df7d619452.webp",
  "📷 КАМЕРЫ/📷 Disposable 90s": "/extensions/FiL_Design_ImageMind/style-previews/39d6689a5eb0.webp",
  "📷 КАМЕРЫ/📷 Hasselblad 70mm": "/extensions/FiL_Design_ImageMind/style-previews/f56cd04e1565.webp",
  "📷 КАМЕРЫ/📸 Polaroid 600": "/extensions/FiL_Design_ImageMind/style-previews/122281271d57.webp",
  "📷 КАМЕРЫ/📹 CCTV surveillance": "/extensions/FiL_Design_ImageMind/style-previews/73390911314c.webp",
  "📷 КАМЕРЫ/🕳️ Pinhole Obscura": "/extensions/FiL_Design_ImageMind/style-previews/0112215f4991.webp",
  "📷 КАМЕРЫ/🚓 Police Dashcam": "/extensions/FiL_Design_ImageMind/style-previews/8caec5d3dda0.webp",
  "📸 РЕПОРТАЖ/☕ Lifestyle Moment": "/extensions/FiL_Design_ImageMind/style-previews/840da788f9b8.webp",
  "📸 РЕПОРТАЖ/💼 Stock Quality": "/extensions/FiL_Design_ImageMind/style-previews/f380e72a9184.webp",
  "📸 РЕПОРТАЖ/📋 Documentary Truth": "/extensions/FiL_Design_ImageMind/style-previews/659506dc9657.webp",
  "🧪 ЭФФЕКТЫ/🔬 Electron Micro": "/extensions/FiL_Design_ImageMind/style-previews/4a19ebc7137a.webp",
  "🕰️ РЕТРО/🎞️ Vintage 70s Portra": "/extensions/FiL_Design_ImageMind/style-previews/1ec93a84d597.webp",
  "🕰️ РЕТРО/🎩 Gilded Gangster": "/extensions/FiL_Design_ImageMind/style-previews/9fcee380f2af.webp",
  "🕰️ РЕТРО/🎬 Nostalgic 8mm": "/extensions/FiL_Design_ImageMind/style-previews/ff0a0cba0c89.webp",
  "🕰️ РЕТРО/🎸 Rockabilly 50s": "/extensions/FiL_Design_ImageMind/style-previews/c9451ec205bc.webp",
  "🕰️ РЕТРО/🟤 Sepia Nostalgia": "/extensions/FiL_Design_ImageMind/style-previews/a7a98250bec4.webp",
  "🕰️ РЕТРО/🧪 Wet Plate Collodion": "/extensions/FiL_Design_ImageMind/style-previews/fd8c6e78c41b.webp",
  "🕰️ РЕТРО/🪞 Daguerreotype": "/extensions/FiL_Design_ImageMind/style-previews/32754a15c767.webp",
  "🗺️ СЦЕНЫ/⛺ Campfire Night": "/extensions/FiL_Design_ImageMind/style-previews/319e4f904bb2.webp",
  "🗺️ СЦЕНЫ/🌉 Golden Gate": "/extensions/FiL_Design_ImageMind/style-previews/906cace7586d.webp",
  "🗺️ СЦЕНЫ/🌊 Ocean Wave": "/extensions/FiL_Design_ImageMind/style-previews/78002799caca.webp",
  "🗺️ СЦЕНЫ/🌾 Rice Terraces": "/extensions/FiL_Design_ImageMind/style-previews/a59bd4327c98.webp",
  "🗺️ СЦЕНЫ/🍄 Fairy Forest": "/extensions/FiL_Design_ImageMind/style-previews/a273cc000853.webp",
  "🗺️ СЦЕНЫ/🍳 Kitchen Morning": "/extensions/FiL_Design_ImageMind/style-previews/952ee35adffe.webp",
  "🗺️ СЦЕНЫ/🎢 Amusement Park": "/extensions/FiL_Design_ImageMind/style-previews/5ae2822ab3ec.webp",
  "🗺️ СЦЕНЫ/🎤 Recording Studio": "/extensions/FiL_Design_ImageMind/style-previews/638fc3b95cde.webp",
  "🗺️ СЦЕНЫ/🎪 Circus Big Top": "/extensions/FiL_Design_ImageMind/style-previews/54c232305e1a.webp",
  "🗺️ СЦЕНЫ/🎹 Piano Studio": "/extensions/FiL_Design_ImageMind/style-previews/a01eb1522fad.webp",
  "🗺️ СЦЕНЫ/🏊 Swimming Pool": "/extensions/FiL_Design_ImageMind/style-previews/9a88bcc2343a.webp",
  "🗺️ СЦЕНЫ/🏗️ Skyscraper Edge": "/extensions/FiL_Design_ImageMind/style-previews/e058f3a3be91.webp",
  "🗺️ СЦЕНЫ/🏚️ Abandoned Building": "/extensions/FiL_Design_ImageMind/style-previews/28b119c39399.webp",
  "🗺️ СЦЕНЫ/🏜️ Desert Road": "/extensions/FiL_Design_ImageMind/style-previews/309e5d8d63fa.webp",
  "🗺️ СЦЕНЫ/🏮 Lantern Festival": "/extensions/FiL_Design_ImageMind/style-previews/3b8c2ecdfb98.webp",
  "🗺️ СЦЕНЫ/🏺 Pottery Studio": "/extensions/FiL_Design_ImageMind/style-previews/f76aad9083dd.webp",
  "🗺️ СЦЕНЫ/📚 Library Shelf": "/extensions/FiL_Design_ImageMind/style-previews/7d3d728f0ad9.webp",
  "🗺️ СЦЕНЫ/🔦 Flashlight Beam": "/extensions/FiL_Design_ImageMind/style-previews/0c29d7a4fc9f.webp",
  "🗺️ СЦЕНЫ/🔮 Crystal Ball": "/extensions/FiL_Design_ImageMind/style-previews/f0c3a90de7de.webp",
  "🗺️ СЦЕНЫ/🕯️ Candle Meditation": "/extensions/FiL_Design_ImageMind/style-previews/fff419437855.webp",
  "🗺️ СЦЕНЫ/🖤 Black Light Party": "/extensions/FiL_Design_ImageMind/style-previews/e246e9a60714.webp",
  "🗺️ СЦЕНЫ/🖼️ Art Gallery": "/extensions/FiL_Design_ImageMind/style-previews/364a2c9b9629.webp",
  "🗺️ СЦЕНЫ/🗿 Ancient Ruins": "/extensions/FiL_Design_ImageMind/style-previews/b3383499fffc.webp",
  "🗺️ СЦЕНЫ/🛀 Floating Bath": "/extensions/FiL_Design_ImageMind/style-previews/104fc2fc91e1.webp",
  "🗺️ СЦЕНЫ/🛁 Bathroom Mirror": "/extensions/FiL_Design_ImageMind/style-previews/304990cd77eb.webp",
  "🗺️ СЦЕНЫ/🛁 Rainy Window": "/extensions/FiL_Design_ImageMind/style-previews/5c1455a090f7.webp",
  "🗺️ СЦЕНЫ/🛒 Grocery Store": "/extensions/FiL_Design_ImageMind/style-previews/8d0ab6d91cd8.webp",
  "🗺️ СЦЕНЫ/🛒 Vintage Store": "/extensions/FiL_Design_ImageMind/style-previews/78d64c53702b.webp",
  "🗺️ СЦЕНЫ/🛩️ Airplane Window": "/extensions/FiL_Design_ImageMind/style-previews/1997e794643b.webp",
  "🗺️ СЦЕНЫ/🥾 Hiking Trail": "/extensions/FiL_Design_ImageMind/style-previews/16c1c5637e3e.webp",
  "🗺️ СЦЕНЫ/🧖 Spa Towel": "/extensions/FiL_Design_ImageMind/style-previews/93c094f3364e.webp",
  "🗺️ СЦЕНЫ/🧗 Rock Climbing": "/extensions/FiL_Design_ImageMind/style-previews/532a7c335bac.webp",
  "🗺️ СЦЕНЫ/🧸 Cozy Bedroom": "/extensions/FiL_Design_ImageMind/style-previews/bd31ae07e60f.webp",
  "🗺️ СЦЕНЫ/🪐 Neon Desert": "/extensions/FiL_Design_ImageMind/style-previews/aa6dfb7f1b07.webp",
  "🗺️ СЦЕНЫ/🪜 Construction Site": "/extensions/FiL_Design_ImageMind/style-previews/237f7979eb30.webp",
  "🗺️ СЦЕНЫ/🪴 Plant Nursery": "/extensions/FiL_Design_ImageMind/style-previews/3914556bc986.webp",
  "🦾 КИБЕРПАНК/⚔️ Cyber-Samurai": "/extensions/FiL_Design_ImageMind/style-previews/6c42412ffdde.webp",
  "🦾 КИБЕРПАНК/🌃 Neon Cyberpunk City Rain": "/extensions/FiL_Design_ImageMind/style-previews/dfcde1f2f9c8.webp",
  "🦾 КИБЕРПАНК/🌇 Electric Sunset Megacity": "/extensions/FiL_Design_ImageMind/style-previews/efb0c0a04802.webp",
  "🦾 КИБЕРПАНК/🌫️ Atmospheric Sci-Fi Mist": "/extensions/FiL_Design_ImageMind/style-previews/49fe33b6dc51.webp",
  "🦾 КИБЕРПАНК/🌱 Solarpunk Hybrid": "/extensions/FiL_Design_ImageMind/style-previews/a148cfa116c5.webp",
  "🦾 КИБЕРПАНК/🎖️ Military Cyborg": "/extensions/FiL_Design_ImageMind/style-previews/d3887fa84a7f.webp",
  "🦾 КИБЕРПАНК/🏢 Corpo-Cyborg": "/extensions/FiL_Design_ImageMind/style-previews/cf7989538edf.webp",
  "🦾 КИБЕРПАНК/🏭 Industrial Cyborg Portrait": "/extensions/FiL_Design_ImageMind/style-previews/2a2b279229fa.webp",
  "🦾 КИБЕРПАНК/💀 Post-Apoc Cyber": "/extensions/FiL_Design_ImageMind/style-previews/a58e7fdccf84.webp",
  "🦾 КИБЕРПАНК/💉 Wirehead Junkie": "/extensions/FiL_Design_ImageMind/style-previews/b2af9802f388.webp",
  "🦾 КИБЕРПАНК/💎 Prismatic Neon Reflections": "/extensions/FiL_Design_ImageMind/style-previews/52aaa90db809.webp",
  "🦾 КИБЕРПАНК/📱 Sleek White Android": "/extensions/FiL_Design_ImageMind/style-previews/9f488ac6491d.webp",
  "🦾 КИБЕРПАНК/🕶️ Teal Gold Cyber Noir Portrait": "/extensions/FiL_Design_ImageMind/style-previews/3f363424c513.webp",
  "🦾 КИБЕРПАНК/🗡️ Dark Samurai Street": "/extensions/FiL_Design_ImageMind/style-previews/eca0971a8424.webp",
  "🦾 КИБЕРПАНК/🚗 JDM Neon Street Racer": "/extensions/FiL_Design_ImageMind/style-previews/46a2c9733861.webp",
  "🦾 КИБЕРПАНК/🛰️ Holographic Interface Portrait": "/extensions/FiL_Design_ImageMind/style-previews/c887efb383c6.webp",
  "🦾 КИБЕРПАНК/🤍 White Android Minimal Studio": "/extensions/FiL_Design_ImageMind/style-previews/c809b5cc2a71.webp",
  "🦾 КИБЕРПАНК/🤖 Chrome Cyborg Hyperrealism": "/extensions/FiL_Design_ImageMind/style-previews/cc1b4c1b2536.webp",
  "🦾 КИБЕРПАНК/🦾 Cybernetic Arm Close-Up": "/extensions/FiL_Design_ImageMind/style-previews/49fbc0e368f1.webp",
  "🦾 КИБЕРПАНК/🧠 Biomechanical Horror Realism": "/extensions/FiL_Design_ImageMind/style-previews/240cd6d63141.webp",
  "🦾 КИБЕРПАНК/🧡 Golden Mechanical Luxury": "/extensions/FiL_Design_ImageMind/style-previews/3558f70daa19.webp",
  "🦾 КИБЕРПАНК/🧩 Android Anatomy Cutaway": "/extensions/FiL_Design_ImageMind/style-previews/ca00b4727385.webp",
  "🦾 КИБЕРПАНК/🧪 Biopunk Organic": "/extensions/FiL_Design_ImageMind/style-previews/871f50230760.webp",
  "🦾 КИБЕРПАНК/🧬 Biomechanical Giger": "/extensions/FiL_Design_ImageMind/style-previews/86ab5cd7d0ca.webp",
  "🦾 КИБЕРПАНК/🧬 Synthetic Skin Android Portrait": "/extensions/FiL_Design_ImageMind/style-previews/1417ff497c46.webp",
  "🦾 КИБЕРПАНК/🩻 X-Ray Cyber Radiograph": "/extensions/FiL_Design_ImageMind/style-previews/37c12d55b3ca.webp",
  "🦾 КИБЕРПАНК/🪞 Chrome Android": "/extensions/FiL_Design_ImageMind/style-previews/acc10bd36596.webp",
  "🦾 КИБЕРПАНК/🪞 Molten Liquid Chrome Realism": "/extensions/FiL_Design_ImageMind/style-previews/984444ee6c55.webp",
  "🦾 КИБЕРПАНК/🪦 Melancholic Robot Portrait": "/extensions/FiL_Design_ImageMind/style-previews/6d8ad2b5d6c0.webp",
  "🦾 КИБЕРПАНК/🫀 Bio-Mechanical Core": "/extensions/FiL_Design_ImageMind/style-previews/45f8d006a26d.webp",
  "🧪 ЭФФЕКТЫ/☀️ High-Key Airy": "/extensions/FiL_Design_ImageMind/style-previews/26a33cf14069.webp",
  "🧪 ЭФФЕКТЫ/☢️ X-Ray Radiograph": "/extensions/FiL_Design_ImageMind/style-previews/13b704f108d3.webp",
  "🧪 ЭФФЕКТЫ/⚒️ Forgemaster Heat": "/extensions/FiL_Design_ImageMind/style-previews/72132344985e.webp",
  "🧪 ЭФФЕКТЫ/🌈 HDR Dynamic": "/extensions/FiL_Design_ImageMind/style-previews/27d78ea7c0b2.webp",
  "🧪 ЭФФЕКТЫ/🌊 Bioluminescence": "/extensions/FiL_Design_ImageMind/style-previews/7d7953271a32.webp",
  "🧪 ЭФФЕКТЫ/🌊 Цифровой муар": "/extensions/FiL_Design_ImageMind/style-previews/8a38b5133675.webp",
  "🧪 ЭФФЕКТЫ/🌑 Silhouette Drama": "/extensions/FiL_Design_ImageMind/style-previews/110981139099.webp",
  "🧪 ЭФФЕКТЫ/🌡️ Thermal Imager": "/extensions/FiL_Design_ImageMind/style-previews/2890129c1d36.webp",
  "🧪 ЭФФЕКТЫ/🌫️ Volumetric Tyndall Dust": "/extensions/FiL_Design_ImageMind/style-previews/5291521d2eb7.webp",
  "🧪 ЭФФЕКТЫ/🎨 Chromatic Aberration": "/extensions/FiL_Design_ImageMind/style-previews/431b00c046e8.webp",
  "🧪 ЭФФЕКТЫ/🎨 Light Painting": "/extensions/FiL_Design_ImageMind/style-previews/c11d9a490448.webp",
  "🧪 ЭФФЕКТЫ/🎭 Hard Chiaroscuro": "/extensions/FiL_Design_ImageMind/style-previews/89e1bfeed00f.webp",
  "🧪 ЭФФЕКТЫ/👯 Double Exposure": "/extensions/FiL_Design_ImageMind/style-previews/6cbc2f1d20d1.webp",
  "🧪 ЭФФЕКТЫ/💎 Prism Optical Fracture": "/extensions/FiL_Design_ImageMind/style-previews/4a5a4c696f49.webp",
  "🧪 ЭФФЕКТЫ/💡 Hard Rim Neon": "/extensions/FiL_Design_ImageMind/style-previews/fbabe15d749a.webp",
  "🧪 ЭФФЕКТЫ/💥 High-Speed Shatter": "/extensions/FiL_Design_ImageMind/style-previews/0c670b631ae2.webp",
  "🧪 ЭФФЕКТЫ/📠 Факс-аппарат": "/extensions/FiL_Design_ImageMind/style-previews/a65526de4ac0.webp",
  "🧪 ЭФФЕКТЫ/📡 Тесла-катушка": "/extensions/FiL_Design_ImageMind/style-previews/db6e7cb37fed.webp",
  "🧪 ЭФФЕКТЫ/📺 CRT Scanlines": "/extensions/FiL_Design_ImageMind/style-previews/e0b05f165d13.webp",
  "🧪 ЭФФЕКТЫ/📼 Expired Chemical Leak": "/extensions/FiL_Design_ImageMind/style-previews/44261da15b02.webp",
  "🧪 ЭФФЕКТЫ/🔦 Полицейский прожектор": "/extensions/FiL_Design_ImageMind/style-previews/bfe04cbabe70.webp",
  "🧪 ЭФФЕКТЫ/🔴 Infrared Surreal": "/extensions/FiL_Design_ImageMind/style-previews/512ea0ce0bba.webp",
  "🧪 ЭФФЕКТЫ/🕯️ Candlelit Mood": "/extensions/FiL_Design_ImageMind/style-previews/ccf4d3abbb3a.webp",
  "🧪 ЭФФЕКТЫ/🕶️ Солнечное затмение": "/extensions/FiL_Design_ImageMind/style-previews/db1b10d0f438.webp",
  "🧪 ЭФФЕКТЫ/🟣 UV Fluorescence": "/extensions/FiL_Design_ImageMind/style-previews/89cf27daa811.webp",
  "🧪 ЭФФЕКТЫ/🤖 Holographic HUD": "/extensions/FiL_Design_ImageMind/style-previews/20b4748c7754.webp",
  "🧪 ЭФФЕКТЫ/🧊 Absolute Zero": "/extensions/FiL_Design_ImageMind/style-previews/551664a56507.webp",
  "🧪 ЭФФЕКТЫ/🪞 Зеркальный мир": "/extensions/FiL_Design_ImageMind/style-previews/c3e62ceaea58.webp",
  "🧪 ЭФФЕКТЫ/🫧 Мыльные пузыри": "/extensions/FiL_Design_ImageMind/style-previews/a0cf782e627e.webp"
}, um = {}, dm = {}, fm = {}, pm = {
  ...cm,
  ...um,
  ...dm,
  ...fm
}, mm = { class: "fil-style-picker" }, hm = { class: "fil-style-cats" }, gm = ["onClick"], _m = { class: "fil-style-grid" }, bm = ["title", "onClick"], vm = { class: "fil-style-tile-preview" }, ym = ["src"], wm = {
  key: 1,
  class: "fil-style-tile-placeholder"
}, xm = { class: "fil-style-tile-label" }, Sm = {
  key: 0,
  class: "fil-style-empty"
}, ds = "__all__", Cm = /* @__PURE__ */ Se({
  __name: "FilStylePicker",
  props: {
    styles: {},
    modelValue: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, s = t;
    function o(f) {
      const p = f.indexOf("/");
      return p === -1 ? "" : f.slice(0, p);
    }
    function i(f) {
      const p = f.indexOf("/");
      return p === -1 ? f : f.slice(p + 1);
    }
    const l = Y(() => {
      const f = /* @__PURE__ */ new Set(), p = [];
      for (const m of n.styles) {
        const _ = o(m);
        _ && !f.has(_) && (f.add(_), p.push(_));
      }
      return p;
    }), a = /* @__PURE__ */ re(ds), r = /* @__PURE__ */ re(""), u = Y(() => {
      const f = r.value.trim().toLowerCase();
      return n.styles.filter((p) => a.value !== ds && o(p) !== a.value ? !1 : f ? p.toLowerCase().includes(f) : !0);
    });
    function c(f) {
      return pm[f];
    }
    function d(f) {
      s("select", f);
    }
    return (f, p) => (C(), E("div", mm, [
      B("div", hm, [
        B("button", {
          type: "button",
          class: Le(["fil-style-cat", { active: a.value === ds }]),
          onClick: p[0] || (p[0] = (m) => a.value = ds)
        }, " All ", 2),
        (C(!0), E(de, null, Ae(l.value, (m) => (C(), E("button", {
          key: m,
          type: "button",
          class: Le(["fil-style-cat", { active: a.value === m }]),
          onClick: (_) => a.value = m
        }, Z(m), 11, gm))), 128))
      ]),
      Ke(B("input", {
        "onUpdate:modelValue": p[1] || (p[1] = (m) => r.value = m),
        type: "search",
        class: "fil-style-search",
        placeholder: "Search styles…",
        "aria-label": "Search styles",
        spellcheck: "false"
      }, null, 512), [
        [vt, r.value]
      ]),
      B("div", _m, [
        (C(!0), E(de, null, Ae(u.value, (m) => (C(), E("button", {
          key: m,
          type: "button",
          class: Le(["fil-style-tile", { active: m === e.modelValue }]),
          title: m,
          onClick: (_) => d(m)
        }, [
          B("span", vm, [
            c(m) ? (C(), E("img", {
              key: 0,
              src: c(m),
              class: "fil-style-tile-img",
              alt: ""
            }, null, 8, ym)) : (C(), E("span", wm, Z(i(m).split(" ")[0]), 1))
          ]),
          B("span", xm, Z(i(m)), 1)
        ], 10, bm))), 128)),
        u.value.length === 0 ? (C(), E("div", Sm, "No matches")) : se("", !0)
      ])
    ]));
  }
}), Fm = /* @__PURE__ */ Fe(Cm, [["__scopeId", "data-v-6e196d1e"]]), Mm = {
  FiLOpticScanner: {
    inputs: {
      required: [
        {
          name: "prompt",
          kind: "string",
          label: null,
          default: "",
          tooltip: null,
          values: null,
          columns: null,
          searchable: null,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: "prompt",
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "negative_prompt",
          kind: "string",
          label: null,
          default: "",
          tooltip: null,
          values: null,
          columns: null,
          searchable: null,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: "prompt",
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "custom_style",
          kind: "string",
          label: null,
          default: "",
          tooltip: null,
          values: null,
          columns: null,
          searchable: null,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: "prompt",
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "response_format",
          kind: "segmented",
          label: null,
          default: "text",
          tooltip: null,
          values: null,
          columns: null,
          searchable: null,
          min: null,
          max: null,
          step: null,
          units: null,
          options: [
            "text",
            "json"
          ],
          section: "prompt",
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "agent",
          kind: "chip_grid",
          label: null,
          default: "Universal",
          tooltip: null,
          values: [
            "None",
            "Universal",
            "Portrait",
            "Products",
            "Nature & Landscape",
            "Art & Illustration",
            "Ultra Detailed Expert",
            "Cinematic Master",
            "18+",
            "Fashion",
            "Animals",
            "Character Performance Agent",
            "Architecture",
            "Interior",
            "City",
            "Transport",
            "Food",
            "Gadgets",
            "Games",
            "Composition Agent",
            "Lighting & Color Agent",
            "Professional Tagger"
          ],
          columns: 3,
          searchable: null,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: "agent",
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "model_type",
          kind: "chip_grid",
          label: null,
          default: "Auto/None",
          tooltip: null,
          values: [
            "Auto/None",
            "Z-Image Turbo",
            "FLUX",
            "SDXL",
            "QWEN",
            "Krea 2",
            "Ideogram 4"
          ],
          columns: 3,
          searchable: null,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: "model",
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "detail_level",
          kind: "chip_grid",
          label: null,
          default: "normal",
          tooltip: null,
          values: [
            "tiny",
            "short",
            "normal",
            "detailed",
            "ultra"
          ],
          columns: 5,
          searchable: null,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: "output",
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "language",
          kind: "combo",
          label: null,
          default: "en",
          tooltip: null,
          values: [
            "en",
            "ru"
          ],
          columns: null,
          searchable: null,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: "output",
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "prompt_mode",
          kind: "segmented",
          label: null,
          default: "Auto",
          tooltip: null,
          values: null,
          columns: null,
          searchable: null,
          min: null,
          max: null,
          step: null,
          units: null,
          options: [
            "Auto",
            "Hybrid",
            "Two-Stage"
          ],
          section: "output",
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "photo_style",
          kind: "chip_list",
          label: null,
          default: "None",
          tooltip: null,
          values: [
            "None",
            "📷 КАМЕРЫ/📷 Disposable 90s",
            "📷 КАМЕРЫ/📸 Polaroid 600",
            "📷 КАМЕРЫ/📷 Hasselblad 70mm",
            "📷 КАМЕРЫ/🕳️ Pinhole Obscura",
            "📷 КАМЕРЫ/📹 CCTV surveillance",
            "📷 КАМЕРЫ/🚓 Police Dashcam",
            "📷 КАМЕРЫ/🎞️ Raw 35mm Photo",
            "📐 МОДИФИКАТОРЫ/🛩️ Drone Photo",
            "📐 МОДИФИКАТОРЫ/🔭 Ultra Wide 12mm",
            "📐 МОДИФИКАТОРЫ/🌐 Fisheye Lens",
            "📐 МОДИФИКАТОРЫ/📐 Dutch Angle",
            "📐 МОДИФИКАТОРЫ/📹 GoPro POV Action",
            "🎬 КИНО/🎞️ IMAX Production",
            "🎬 КИНО/🌑 Film Noir",
            "🎬 КИНО/🌈 Technicolor 50s",
            "🎬 КИНО/📷 Anamorphic Wide",
            "🎬 КИНО/🎬 Gangster Cinema",
            "⏱️ ЗАХВАТ/💫 Motion Blur",
            "⏱️ ЗАХВАТ/📸 Action Freeze",
            "⏱️ ЗАХВАТ/🎞️ Slo-Mo Bullet Time",
            "🕰️ РЕТРО/🎞️ Vintage 70s Portra",
            "🕰️ РЕТРО/🪞 Daguerreotype",
            "🕰️ РЕТРО/🧪 Wet Plate Collodion",
            "🕰️ РЕТРО/🟤 Sepia Nostalgia",
            "🕰️ РЕТРО/🎸 Rockabilly 50s",
            "🕰️ РЕТРО/🎩 Gilded Gangster",
            "🕰️ РЕТРО/🎬 Nostalgic 8mm",
            "🏠 ИНТЕРЬЕР/🏭 Loft Industrial",
            "🏠 ИНТЕРЬЕР/🌻 Provence Rustic",
            "🏠 ИНТЕРЬЕР/🕉️ Boho Chic",
            "🏠 ИНТЕРЬЕР/🌿 Eco-Style Design",
            "🏠 ИНТЕРЬЕР/👑 Baroque Ornate",
            "🏠 ИНТЕРЬЕР/⬜ Minimalism",
            "🏠 ИНТЕРЬЕР/🏡 Country House",
            "👗 ФЭШН/📸 Editorial Vogue",
            "👗 ФЭШН/👤 Portrait Bokeh",
            "👗 ФЭШН/✨ Glamour Glow",
            "👗 ФЭШН/🖤 Chanel Aesthetic",
            "👗 ФЭШН/💋 Pin-up Style",
            "👗 ФЭШН/👔 Business Pro",
            "👗 ФЭШН/👠 Fashion Runway",
            "👗 ФЭШН/🛍️ Street Fashion",
            "🏙️ СРЕДА/🌃 Cyberpunk Neon",
            "🏙️ СРЕДА/🌧️ Rainy Neon Noir",
            "🏙️ СРЕДА/🌫️ Foggy Neon Noir",
            "🏙️ СРЕДА/🏚️ Dystopian Megacity",
            "🏙️ СРЕДА/🧱 Urban Grunge",
            "🏙️ СРЕДА/📷 Street Candid",
            "🏙️ СРЕДА/🌅 Magic Hour",
            "🏙️ СРЕДА/☔ Rain Monsoon Puddle",
            "🏙️ СРЕДА/🇬🇧 London Smog",
            "🏜️ ЖАНРЫ/🏔️ Пейзажный Landscape",
            "🏜️ ЖАНРЫ/🦁 Nat Geo Scale",
            "🏜️ ЖАНРЫ/🔬 Macro Micro-world",
            "🏜️ ЖАНРЫ/🌌 Astro Cosmic",
            "🏜️ ЖАНРЫ/✈️ Travel Adventure",
            "🏜️ ЖАНРЫ/🪶 Ethnic Spirit",
            "🏜️ ЖАНРЫ/🏜️ Saharan Mirage",
            "📸 РЕПОРТАЖ/☕ Lifestyle Moment",
            "📸 РЕПОРТАЖ/📋 Documentary Truth",
            "📸 РЕПОРТАЖ/💼 Stock Quality",
            "🧪 ЭФФЕКТЫ/🤖 Holographic HUD",
            "🧪 ЭФФЕКТЫ/💡 Hard Rim Neon",
            "🧪 ЭФФЕКТЫ/🎨 Chromatic Aberration",
            "🧪 ЭФФЕКТЫ/💎 Prism Optical Fracture",
            "🧪 ЭФФЕКТЫ/🌫️ Volumetric Tyndall Dust",
            "🧪 ЭФФЕКТЫ/📼 Expired Chemical Leak",
            "🧪 ЭФФЕКТЫ/☀️ High-Key Airy",
            "🧪 ЭФФЕКТЫ/🌈 HDR Dynamic",
            "🧪 ЭФФЕКТЫ/🕯️ Candlelit Mood",
            "🧪 ЭФФЕКТЫ/🔴 Infrared Surreal",
            "🦾 КИБЕРПАНК/📱 Sleek White Android",
            "🦾 КИБЕРПАНК/🪞 Chrome Android",
            "🦾 КИБЕРПАНК/💉 Wirehead Junkie",
            "🦾 КИБЕРПАНК/🏢 Corpo-Cyborg",
            "🦾 КИБЕРПАНК/🎖️ Military Cyborg",
            "🦾 КИБЕРПАНК/⚔️ Cyber-Samurai",
            "🦾 КИБЕРПАНК/🧬 Biomechanical Giger",
            "🦾 КИБЕРПАНК/🧪 Biopunk Organic",
            "🦾 КИБЕРПАНК/🌱 Solarpunk Hybrid",
            "🦾 КИБЕРПАНК/💀 Post-Apoc Cyber",
            "🦾 КИБЕРПАНК/🌃 Neon Cyberpunk City Rain",
            "🦾 КИБЕРПАНК/🚗 JDM Neon Street Racer",
            "🦾 КИБЕРПАНК/🌇 Electric Sunset Megacity",
            "🦾 КИБЕРПАНК/🛰️ Holographic Interface Portrait",
            "🦾 КИБЕРПАНК/🗡️ Dark Samurai Street",
            "🦾 КИБЕРПАНК/🤖 Chrome Cyborg Hyperrealism",
            "🦾 КИБЕРПАНК/🦾 Cybernetic Arm Close-Up",
            "🦾 КИБЕРПАНК/🧠 Biomechanical Horror Realism",
            "🦾 КИБЕРПАНК/🕶️ Teal Gold Cyber Noir Portrait",
            "🦾 КИБЕРПАНК/🧬 Synthetic Skin Android Portrait",
            "🦾 КИБЕРПАНК/🤍 White Android Minimal Studio",
            "🦾 КИБЕРПАНК/🏭 Industrial Cyborg Portrait",
            "🦾 КИБЕРПАНК/🫀 Bio-Mechanical Core",
            "🦾 КИБЕРПАНК/🧩 Android Anatomy Cutaway",
            "🦾 КИБЕРПАНК/🧡 Golden Mechanical Luxury",
            "🦾 КИБЕРПАНК/🪦 Melancholic Robot Portrait",
            "🦾 КИБЕРПАНК/🩻 X-Ray Cyber Radiograph",
            "🦾 КИБЕРПАНК/💎 Prismatic Neon Reflections",
            "🦾 КИБЕРПАНК/🪞 Molten Liquid Chrome Realism",
            "🦾 КИБЕРПАНК/🌫️ Atmospheric Sci-Fi Mist",
            "🧪 ЭФФЕКТЫ/📡 Тесла-катушка",
            "🧪 ЭФФЕКТЫ/🪞 Зеркальный мир",
            "🧪 ЭФФЕКТЫ/📺 CRT Scanlines",
            "🧪 ЭФФЕКТЫ/🔦 Полицейский прожектор",
            "🧪 ЭФФЕКТЫ/🌊 Цифровой муар",
            "🧪 ЭФФЕКТЫ/🫧 Мыльные пузыри",
            "🧪 ЭФФЕКТЫ/🕶️ Солнечное затмение",
            "🧪 ЭФФЕКТЫ/📠 Факс-аппарат",
            "🧪 ЭФФЕКТЫ/🟣 UV Fluorescence",
            "🧪 ЭФФЕКТЫ/💥 High-Speed Shatter",
            "🧪 ЭФФЕКТЫ/🎨 Light Painting",
            "🧪 ЭФФЕКТЫ/👯 Double Exposure",
            "🧪 ЭФФЕКТЫ/🌑 Silhouette Drama",
            "🧪 ЭФФЕКТЫ/🧊 Absolute Zero",
            "🧪 ЭФФЕКТЫ/⚒️ Forgemaster Heat",
            "🧪 ЭФФЕКТЫ/🌡️ Thermal Imager",
            "🧪 ЭФФЕКТЫ/☢️ X-Ray Radiograph",
            "🧪 ЭФФЕКТЫ/🌊 Bioluminescence",
            "🧪 ЭФФЕКТЫ/🎭 Hard Chiaroscuro",
            "🧪 ЭФФЕКТЫ/🔬 Electron Micro",
            "🗺️ СЦЕНЫ/🎪 Circus Big Top",
            "🗺️ СЦЕНЫ/🛁 Bathroom Mirror",
            "🗺️ СЦЕНЫ/🔮 Crystal Ball",
            "🗺️ СЦЕНЫ/🖼️ Art Gallery",
            "🗺️ СЦЕНЫ/🛒 Grocery Store",
            "🗺️ СЦЕНЫ/🛩️ Airplane Window",
            "🗺️ СЦЕНЫ/🎢 Amusement Park",
            "🗺️ СЦЕНЫ/🌊 Ocean Wave",
            "🗺️ СЦЕНЫ/🏊 Swimming Pool",
            "🗺️ СЦЕНЫ/🏜️ Desert Road",
            "🗺️ СЦЕНЫ/🍄 Fairy Forest",
            "🗺️ СЦЕНЫ/🗿 Ancient Ruins",
            "🗺️ СЦЕНЫ/🎹 Piano Studio",
            "🗺️ СЦЕНЫ/🧖 Spa Towel",
            "🗺️ СЦЕНЫ/📚 Library Shelf",
            "🗺️ СЦЕНЫ/🪜 Construction Site",
            "🗺️ СЦЕНЫ/🏚️ Abandoned Building",
            "🗺️ СЦЕНЫ/🖤 Black Light Party",
            "🗺️ СЦЕНЫ/🏮 Lantern Festival",
            "🗺️ СЦЕНЫ/🔦 Flashlight Beam",
            "🗺️ СЦЕНЫ/🏺 Pottery Studio",
            "🗺️ СЦЕНЫ/🕯️ Candle Meditation",
            "🗺️ СЦЕНЫ/🪴 Plant Nursery",
            "🗺️ СЦЕНЫ/🎤 Recording Studio",
            "🗺️ СЦЕНЫ/🧸 Cozy Bedroom",
            "🗺️ СЦЕНЫ/🏗️ Skyscraper Edge",
            "🗺️ СЦЕНЫ/🍳 Kitchen Morning",
            "🗺️ СЦЕНЫ/⛺ Campfire Night",
            "🗺️ СЦЕНЫ/🧗 Rock Climbing",
            "🗺️ СЦЕНЫ/🛒 Vintage Store",
            "🗺️ СЦЕНЫ/🌉 Golden Gate",
            "🗺️ СЦЕНЫ/🛁 Rainy Window",
            "🗺️ СЦЕНЫ/🪐 Neon Desert",
            "🗺️ СЦЕНЫ/🥾 Hiking Trail",
            "🗺️ СЦЕНЫ/🌾 Rice Terraces",
            "🗺️ СЦЕНЫ/🛀 Floating Bath"
          ],
          columns: null,
          searchable: !0,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: "styles",
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "nsfw_photo_style",
          kind: "chip_list",
          label: null,
          default: "None",
          tooltip: null,
          values: [
            "None",
            "📸 СТУДИЯ/📸 Studio Elite",
            "📸 СТУДИЯ/✨ Glamour Core",
            "📸 СТУДИЯ/🛋️ Boudoir",
            "📸 СТУДИЯ/🌅 Morning Boudoir",
            "📸 СТУДИЯ/👙 Fashion Lingerie",
            "🏠 ИНТЕРЬЕР/🛏️ Bedroom Intimate",
            "🏠 ИНТЕРЬЕР/🚿 Shower Scene",
            "🏠 ИНТЕРЬЕР/🛁 Bath Scene",
            "🏠 ИНТЕРЬЕР/🪞 Vanity Mirror",
            "🏠 ИНТЕРЬЕР/🛋️ Living Room",
            "🌿 ПРИРОДА/🌊 Beach Sunset",
            "🌿 ПРИРОДА/🌲 Forest Glade",
            "🌿 ПРИРОДА/🌸 Garden Path",
            "🌿 ПРИРОДА/⛺ Private Pool",
            "🎭 ФЭШН/💋 Beauty Close-up",
            "🎭 ФЭШН/📸 Fashion Editorial",
            "🎭 ФЭШН/👗 Dressed to Kill",
            "🎭 ФЭШН/🩱 Swimsuit Campaign",
            "🌑 НУАР/⛓️ Fetish Noir",
            "🌑 НУАР/🛏️ Bedroom",
            "🌑 НУАР/🎭 Venetian Velvet",
            "🌑 НУАР/🔦 Interrogation Room",
            "🌑 НУАР/🎪 Carnival",
            "🌑 НУАР/⚰️ Gothic Romance",
            "🌑 НУАР/🧛 Vampire Gothic",
            "🌑 НУАР/🌑 Intimate Shadows",
            "🛀 ТЕКСТУРЫ/💦 Wet Skin",
            "🛀 ТЕКСТУРЫ/🫒 Wet & Glossy",
            "🛀 ТЕКСТУРЫ/🛁 Steamy Bathtub",
            "🛀 ТЕКСТУРЫ/🥛 Milk Bath Editorial",
            "🛀 ТЕКСТУРЫ/🚿 Frosted Glass Shower",
            "🛀 ТЕКСТУРЫ/🌊 Underwater Weightless",
            "🛀 ТЕКСТУРЫ/🎨 Nude Aesthetic",
            "🛀 ТЕКСТУРЫ/👘 Silk & Lace",
            "🛀 ТЕКСТУРЫ/🕸️ Spiderweb Silk",
            "🏙️ ЛОКАЦИИ/🤳 Amateur POV",
            "🏙️ ЛОКАЦИИ/📹 Amateur Real",
            "🏙️ ЛОКАЦИИ/🪩 Nightclub Dark",
            "🏙️ ЛОКАЦИИ/🏖️ Beach Sensual",
            "🏙️ ЛОКАЦИИ/☔ Neon Rain Cyberpunk",
            "🏙️ ЛОКАЦИИ/🚗 Backseat Tryst",
            "🏙️ ЛОКАЦИИ/🏨 Hotel Room Neon",
            "🏙️ ЛОКАЦИИ/❄️ Winter Cabin",
            "🏙️ ЛОКАЦИИ/🏜️ Desert Oasis",
            "🏙️ ЛОКАЦИИ/🏙️ Skyscraper Penthouse",
            "🏙️ ЛОКАЦИИ/🔧 Garage Oil & Chrome",
            "🦾 КИБЕРПАНК/🌃 Neon Alley Exposure",
            "🦾 КИБЕРПАНК/🤖 Chrome Implant Nude",
            "🦾 КИБЕРПАНК/🧬 Synthetic Skin Android Nude",
            "🦾 КИБЕРПАНК/🪩 Holographic Strip Club",
            "🦾 КИБЕРПАНК/🩺 Ripperdoc Aftercare",
            "🦾 КИБЕРПАНК/⛓️ Cyber Latex Dungeon",
            "🦾 КИБЕРПАНК/🌧️ Rain-Slick Rooftop Nude",
            "🦾 КИБЕРПАНК/📹 Backroom Neon POV",
            "🦾 КИБЕРПАНК/🚦 Red-Light District Android",
            "🦾 КИБЕРПАНК/🪞 Augmented Mirror Selfie",
            "🦾 КИБЕРПАНК/💡 Bioluminescent Body Ports",
            "🦾 КИБЕРПАНК/🏙️ Drone-Lit Penthouse Nude",
            "🦾 КИБЕРПАНК/🚿 Wet Chrome Shower Pod",
            "🦾 КИБЕРПАНК/🎤 Virtual Idol Dressing Room",
            "🦾 КИБЕРПАНК/🩻 Holo-Tattoo Nude Scan",
            "🦾 КИБЕРПАНК/🫧 Glass Capsule Display",
            "🦾 КИБЕРПАНК/🏍️ Neon Motorcycle Garage",
            "🦾 КИБЕРПАНК/🟣 Blacklight Cyber Boudoir",
            "🦾 КИБЕРПАНК/🖥️ Server Room Heat",
            "🦾 КИБЕРПАНК/💎 Prismatic Implant Glamour"
          ],
          columns: null,
          searchable: !0,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: "styles",
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "art_style",
          kind: "chip_list",
          label: null,
          default: "None",
          tooltip: null,
          values: [
            "None",
            "🎨 ЖИВОПИСЬ/🖌️ Impasto Oil",
            "🎨 ЖИВОПИСЬ/💧 Wet Watercolor",
            "🎨 ЖИВОПИСЬ/🔪 Palette Knife",
            "🎨 ЖИВОПИСЬ/🌸 Ghibli Inspired",
            "🎨 ЖИВОПИСЬ/🗿 Classical Marble",
            "🎨 ЖИВОПИСЬ/🎭 Baroque Drama",
            "🎨 ЖИВОПИСЬ/🖼️ Renaissance",
            "🎨 ЖИВОПИСЬ/🎪 Impressionist",
            "🎨 ЖИВОПИСЬ/🖌️ Asian Ink",
            "🎨 ЖИВОПИСЬ/🖌️ Sumi-e",
            "✏️ ГРАФИКА/✏️ Pencil Sketch",
            "✏️ ГРАФИКА/🖊️ Ink Illustration",
            "✏️ ГРАФИКА/🖍️ Charcoal Drawing",
            "✏️ ГРАФИКА/✏️ Graphite Study",
            "✏️ ГРАФИКА/🖋️ Pen & Ink",
            "💻 ЦИФРОВАЯ/👾 Pixel Art",
            "💻 ЦИФРОВАЯ/📐 Vector Art",
            "💻 ЦИФРОВАЯ/🎨 Digital Painting",
            "💻 ЦИФРОВАЯ/🤖 AI Art Style",
            "💻 ЦИФРОВАЯ/🌆 Concept Art",
            "💻 ЦИФРОВАЯ/🏮 Anime Style",
            "💻 ЦИФРОВАЯ/🗾 Manga Style",
            "💻 ЦИФРОВАЯ/🎮 Game UI",
            "💻 ЦИФРОВАЯ/🎲 Tabletop RPG",
            "🏛️ ИСТОРИЯ/🏺 Ancient Egyptian",
            "🏛️ ИСТОРИЯ/🏛️ Greek Classical",
            "🏛️ ИСТОРИЯ/🗿 Roman Bust",
            "🏛️ ИСТОРИЯ/🖼️ Medieval Icon",
            "🏛️ ИСТОРИЯ/⚔️ Viking Art",
            "🏛️ ИСТОРИЯ/🏰 Art Nouveau",
            "🏛️ ИСТОРИЯ/🎭 Art Deco",
            "🔬 СТИЛИЗАЦИЯ/🔍 Hyperrealism",
            "🔬 СТИЛИЗАЦИЯ/🌫️ Vaporwave",
            "🔬 СТИЛИЗАЦИЯ/🎲 Glitch Art",
            "🔬 СТИЛИЗАЦИЯ/💎 Steampunk",
            "🔬 СТИЛИЗАЦИЯ/🌸 Kawaii",
            "🔬 СТИЛИЗАЦИЯ/🦋 Morbid",
            "🔬 СТИЛИЗАЦИЯ/🔮 Mystical",
            "🔬 СТИЛИЗАЦИЯ/🎪 Circus Noir",
            "💥 КОМИКС/🎬 Dynamic Cel-Shaded",
            "💥 КОМИКС/🎌 Manga Screen-tone",
            "💥 КОМИКС/💥 Action Comic",
            "💥 КОМИКС/📜 Comic Cover",
            "💥 КОМИКС/🤖 Киберпанк-комикс",
            "💥 КОМИКС/💡 Неон-комикс",
            "💥 КОМИКС/💋 Пин-ап комикс",
            "💥 КОМИКС/📼 Ретро-комикс",
            "💥 КОМИКС/⚙️ Стимпанк-комикс",
            "💥 КОМИКС/⚰️ Готический комикс",
            "💥 КОМИКС/👑 Барокко-комикс",
            "💥 КОМИКС/⚫ Блэк-энд-уайт",
            "🦾 КИБЕРПАНК/🎮 Mecha Pilot",
            "🦾 КИБЕРПАНК/⚛️ Nanopunk Swarm",
            "🦾 КИБЕРПАНК/💉 Neon Tattoos",
            "🦾 КИБЕРПАНК/🤖 Flesh-to-Steel Fusion",
            "🦾 КИБЕРПАНК/💊 Neuro-Interface",
            "🦾 КИБЕРПАНК/🩸 Bio-Corroded Tech",
            "👾 ДИДЖИТАЛ/🏄 Vaporwave Cyber",
            "👾 ДИДЖИТАЛ/👓 Anaglyph Red-Blue",
            "👾 ДИДЖИТАЛ/🔆 Octane Render",
            "👾 ДИДЖИТАЛ/🌅 Synthwave Art",
            "👾 ДИДЖИТАЛ/💧 Molten Liquid Chrome",
            "👾 ДИДЖИТАЛ/🖥️ Holographic UI",
            "👾 ДИДЖИТАЛ/📺 Киберпоп",
            "👾 ДИДЖИТАЛ/🎨 Коллаж-арт",
            "👾 ДИДЖИТАЛ/🔀 Сегментация-арт",
            "👾 ДИДЖИТАЛ/🎭 Постер-арт",
            "👾 ДИДЖИТАЛ/🚗 Лоурайдер-арт",
            "💻 ЦИФРОВАЯ/🌃 Neon Cyberpunk City Rain",
            "💻 ЦИФРОВАЯ/🚗 Retro Anime JDM Car Wallpaper",
            "💻 ЦИФРОВАЯ/🏍️ Anime Motorcycle Action Poster",
            "💻 ЦИФРОВАЯ/🌇 Electric Sunset Sci-Fi Landscape",
            "💻 ЦИФРОВАЯ/🔮 Crystal Overload Sci-Fi",
            "💻 ЦИФРОВАЯ/🧊 Cold Blue Anime Macro",
            "💻 ЦИФРОВАЯ/🌊 Soft Water Reflection Anime",
            "💻 ЦИФРОВАЯ/🌌 Lofi Anime City Melancholy",
            "💻 ЦИФРОВАЯ/📼 Retro 90s Anime Cel",
            "💻 ЦИФРОВАЯ/🎀 Cute Pink Anime Portrait",
            "💻 ЦИФРОВАЯ/🐉 Fantasy Dragon Girl Anime",
            "💻 ЦИФРОВАЯ/🚘 Night Street Car Cinematic",
            "💻 ЦИФРОВАЯ/🪄 Sorceress Neon Ritual Anime",
            "💻 ЦИФРОВАЯ/🎧 Moody Headphone Anime Girl",
            "💻 ЦИФРОВАЯ/🏁 Street Racing Anime Poster",
            "💻 ЦИФРОВАЯ/🍭 Soft Pastel Kawaii Car",
            "💻 ЦИФРОВАЯ/🏙️ Urban Fashion Editorial Anime",
            "💻 ЦИФРОВАЯ/🌫️ Atmospheric Sci-Fi Mist",
            "💻 ЦИФРОВАЯ/🌆 Neo-Tokyo Anime Adventure",
            "💻 ЦИФРОВАЯ/📱 Phone Wallpaper Vertical Sci-Fi",
            "💻 ЦИФРОВАЯ/🎮 Anime Game Character Render",
            "💻 ЦИФРОВАЯ/🧜 Ethereal Soft Fantasy Anime",
            "💻 ЦИФРОВАЯ/🗡️ Dark Samurai Cyber Anime",
            "💻 ЦИФРОВАЯ/🛰️ Holographic Interface Portrait",
            "💻 ЦИФРОВАЯ/🧩 Abstract Cyber Shape Design",
            "💻 ЦИФРОВАЯ/🚨 Warning Sign AI Robot Art",
            "💻 ЦИФРОВАЯ/🖼️ Pinterest Vertical AI Art Mix",
            "🔬 СТИЛИЗАЦИЯ/🖤 Dark Anime Witch Gothic",
            "🔬 СТИЛИЗАЦИЯ/🩸 Vampire Red Eye Anime Noir",
            "🔬 СТИЛИЗАЦИЯ/🎭 Hyperpop Character Illustration",
            "🔬 СТИЛИЗАЦИЯ/🦇 Gothic Dark Fantasy Portrait",
            "🔬 СТИЛИЗАЦИЯ/🌹 Dark Floral Gothic Editorial",
            "🔬 СТИЛИЗАЦИЯ/🫧 Iridescent Hologram Fashion",
            "🔬 СТИЛИЗАЦИЯ/🧛 Crimson Gothic Beauty",
            "🔬 СТИЛИЗАЦИЯ/🌠 Cosmic Dream Girl",
            "🔬 СТИЛИЗАЦИЯ/💿 Holographic Y2K Pop Star",
            "🔬 СТИЛИЗАЦИЯ/🛸 Alien Fashion Runway",
            "🔬 СТИЛИЗАЦИЯ/🏴 Black Armor Dark Fantasy",
            "🔬 СТИЛИЗАЦИЯ/🕯️ Occult Black Magic Anime",
            "🔬 СТИЛИЗАЦИЯ/🕳️ Black Void High Contrast",
            "🔬 СТИЛИЗАЦИЯ/🧱 Gritty Post-Apocalyptic Casual",
            "🔬 СТИЛИЗАЦИЯ/🔥 Red Smoke Dark Character",
            "🔬 СТИЛИЗАЦИЯ/💎 Prismatic Neon Reflections",
            "🔬 СТИЛИЗАЦИЯ/🪞 Glossy Black Latex Cyber",
            "🔬 СТИЛИЗАЦИЯ/🌸 Bloom Soft Girl Aesthetic",
            "💥 КОМИКС/🕷️ Symbiote Venom Comic Ink",
            "💥 КОМИКС/⚡ Aggressive Comic Ink Splash",
            "💥 КОМИКС/🧨 Dynamic Superhero Splash",
            "🦾 КИБЕРПАНК/🤖 Chrome Cyborg Hyperrealism",
            "🦾 КИБЕРПАНК/🦾 Cybernetic Arm Concept Art",
            "🦾 КИБЕРПАНК/🧠 Biomechanical Body Horror",
            "🦾 КИБЕРПАНК/🕶️ Teal Gold Cyberpunk Noir Portrait",
            "🦾 КИБЕРПАНК/🧬 Synthetic Skin Android Portrait",
            "🦾 КИБЕРПАНК/🦾 White Android Minimal Portrait",
            "🦾 КИБЕРПАНК/🩶 Industrial Female Cyborg Portrait",
            "🦾 КИБЕРПАНК/🫀Bio-Mechanical Core Portrait",
            "🦾 КИБЕРПАНК/🧬 Android Anatomy Cutaway",
            "🦾 КИБЕРПАНК/🦋 Angelic Cyber Feminine",
            "🦾 КИБЕРПАНК/🧡 Golden Mechanical Portrait",
            "🦾 КИБЕРПАНК/🪦 Melancholic Robot Portrait",
            "🦾 КИБЕРПАНК/🩻 X-Ray Skeleton Cyber Anime"
          ],
          columns: null,
          searchable: !0,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: "styles",
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "nsfw_art_style",
          kind: "chip_list",
          label: null,
          default: "None",
          tooltip: null,
          values: [
            "None",
            "🎨 ИЛЛЮСТРАЦИЯ/🖌️ Pro Hentai",
            "🎨 ИЛЛЮСТРАЦИЯ/💎 Premium Hentai",
            "🎨 ИЛЛЮСТРАЦИЯ/🌸 Anime Ecchi",
            "🎨 ИЛЛЮСТРАЦИЯ/🦸 Western Adult",
            "🎨 ИЛЛЮСТРАЦИЯ/🎯 Digital Pin-up",
            "💻 ЦИФРОВАЯ/🧊 3D Render",
            "💻 ЦИФРОВАЯ/🖥️ CGI",
            "💻 ЦИФРОВАЯ/🤖 AI Generated",
            "📜 КЛАССИКА/🖼️ Baroque Nude",
            "📜 КЛАССИКА/🏛️ Academic Nude",
            "📜 КЛАССИКА/🎭 Impressionist Nude",
            "🎯 ЖАНРЫ/🔞 Explicit",
            "🎯 ЖАНРЫ/🎭 Sensual Art",
            "🎯 ЖАНРЫ/📸 Fetish Art",
            "🎨 ИЛЛЮСТРАЦИЯ/🎭 Kabuki Demon",
            "🎨 ИЛЛЮСТРАЦИЯ/🌺 Tropical Adult",
            "🎨 ИЛЛЮСТРАЦИЯ/🌿 Botanical Nymph",
            "🖌️ ЖИВОПИСЬ/👼 Renaissance Oil",
            "🖌️ ЖИВОПИСЬ/🔪 Thick Impasto",
            "🖌️ ЖИВОПИСЬ/💧 Watercolor Soft",
            "🖌️ ЖИВОПИСЬ/🎨 Artistic Nude",
            "🖌️ ЖИВОПИСЬ/🛢️ Oil Painting",
            "✒️ СКЕТЧ/✒️ Ink Erotica",
            "✒️ СКЕТЧ/🦴 Raw Anatomy",
            "✒️ СКЕТЧ/💀 Macabre Ink",
            "🏰 ФЭНТЕЗИ/🧝 Dark Fantasy",
            "🏰 ФЭНТЕЗИ/🧝 Dark Desire",
            "🏰 ФЭНТЕЗИ/🏛️ Mythological Nude",
            "🏰 ФЭНТЕЗИ/🌊 Aquatic Erotic",
            "🏰 ФЭНТЕЗИ/🏜️ Dune Fantasy",
            "🏰 ФЭНТЕЗИ/🧚 Fairy Tale",
            "🏰 ФЭНТЕЗИ/🎨 NSFW Art",
            "🚀 SCI-FI/🛸 Sci-Fi Adult",
            "🚀 SCI-FI/🤖 Cyberpunk NSFW",
            "🚀 SCI-FI/🦾 Mecha-Musume",
            "🚀 SCI-FI/💎 Crystal Anatomy",
            "🚀 SCI-FI/🌋 Lava Forged",
            "🦾 КИБЕРПАНК/👽 Synthetic Skin",
            "🦾 КИБЕРПАНК/👘 Cyber-Geisha",
            "🦾 КИБЕРПАНК/⛓️ Chrome Bondage",
            "🦾 КИБЕРПАНК/🧩 Fragmented Body",
            "🦾 КИБЕРПАНК/💡 Glowing Fiber Optics",
            "🕰️ РЕТРО/🎭 Retro Cabaret",
            "🕰️ РЕТРО/🌿 Nouveau Adult",
            "🕰️ РЕТРО/🌸 Shoujo Romance",
            "🕰️ РЕТРО/📼 80s Anime OVA"
          ],
          columns: null,
          searchable: !0,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: "styles",
          visible_when: null,
          visible_when_value: null
        }
      ]
    }
  }
}, Lm = { class: "fil-scanner-root" }, Im = ["title"], Am = ["value", "placeholder", "onInput"], Dm = ["value", "placeholder", "onInput"], km = { class: "fil-section-block" }, Em = ["title"], Tm = { class: "fil-scanner-seed" }, Om = { class: "fil-scanner-seed-row" }, Rm = ["value", "readonly", "title"], Pm = ["title"], Nm = ["title"], $m = ["title"], Vm = /* @__PURE__ */ Se({
  __name: "OpticScanner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = kt(), s = Mm.FiLOpticScanner, o = (s == null ? void 0 : s.inputs.required) ?? [], i = {
      prompt: ["scn_section_prompt", "📝 PROMPT/TEXT"],
      agent: ["scn_section_agent", "🕵️ AGENT"],
      model: ["scn_section_model", "🧠 MODEL"],
      output: ["scn_section_output", "📤 OUTPUT"],
      advanced: ["scn_section_advanced", "🎨 STYLE"],
      actions: ["scn_section_actions", "⚡ ACTIONS"]
    }, l = {
      prompt: "#00d9ff",
      agent: "#ff9900",
      model: "#d080ff",
      output: "#ff9900",
      advanced: "#00d9ff"
    }, a = /* @__PURE__ */ new Set(["prompt", "negative_prompt", "custom_style"]);
    function r(R) {
      const H = i[R];
      return H ? n(H[0], H[1]) : R.toUpperCase();
    }
    const u = {
      config: "tt_config",
      agent: "tt_agent",
      image: "tt_image",
      prompt: "tt_prompt",
      negative_prompt: "tt_neg_prompt",
      detail_level: "tt_detail",
      language: "tt_lang",
      model_type: "tt_model_type",
      prompt_mode: "tt_prompt_mode",
      photo_style: "tt_photo_style",
      nsfw_photo_style: "tt_nsfw_photo_style",
      art_style: "tt_art_style",
      nsfw_art_style: "tt_nsfw_art_style",
      custom_style: "tt_custom_style",
      temperature: "tt_temperature",
      seed: "tt_provider_seed",
      max_tokens: "tt_max_tokens",
      response_format: "tt_response_format"
    };
    function c(R) {
      const H = u[R.name];
      return H ? n(H, R.tooltip || "") : R.tooltip || "";
    }
    const d = {
      prompt: "✍️",
      negative_prompt: "🚫",
      custom_style: "✨",
      response_format: "📋",
      agent: "🕵️",
      model_type: "🧠",
      detail_level: "🔍",
      language: "🌐",
      prompt_mode: "⚙️",
      max_image_side: "📏",
      photo_style: "📷",
      nsfw_photo_style: "🔞",
      art_style: "🎨",
      nsfw_art_style: "🔞",
      temperature: "🌡️",
      seed: "🌱",
      max_tokens: "📊",
      image: "🖼️"
    };
    function f(R) {
      if (R.label) return R.label;
      const H = d[R.name] || "", A = R.name.replace(/_/g, " ").replace(/\b\w/g, (j) => j.toUpperCase());
      return H ? `${H} ${A}` : A;
    }
    const p = /* @__PURE__ */ on({}), m = {
      photo_style: { emoji: "📷", labelKey: "scn_style_photo_label", labelFallback: "Photo" },
      nsfw_photo_style: { emoji: "🔞", labelKey: "scn_style_nsfw_photo_label", labelFallback: "NSFW Photo" },
      art_style: { emoji: "🎨", labelKey: "scn_style_art_label", labelFallback: "Art" },
      nsfw_art_style: { emoji: "🔞", labelKey: "scn_style_nsfw_art_label", labelFallback: "NSFW Art" }
    };
    function _(R) {
      const H = m[R], A = H ? `${H.emoji} ${n(H.labelKey, H.labelFallback)}: ` : "", j = String(S(R, "None") || "None");
      if (j === "None") return `${A}${n("scn_style_none", "None")}`;
      const W = j.indexOf("/"), Q = W === -1 ? j : j.slice(W + 1);
      return `${A}${Q}`;
    }
    function v(R) {
      p[R] = !0;
    }
    function g(R, H) {
      k(R, H), p[R] = !1;
    }
    const w = Y(() => {
      var H;
      const R = {};
      for (const A of o) (R[H = A.section || "_"] ?? (R[H] = [])).push(A);
      return R;
    }), D = Y(() => {
      const R = w.value.styles || [], H = [];
      for (let A = 0; A < R.length; A += 2) H.push(R.slice(A, A + 2));
      return H;
    });
    function S(R, H = "") {
      return t.state.nodeState[R] ?? t.state.initialValues[R] ?? H;
    }
    function k(R, H) {
      t.state.nodeState[R] = H;
    }
    const ie = /* @__PURE__ */ new Set(["agent", "output", "advanced"]);
    function T(R) {
      const H = t.state.ui[`collapsed_${R}`];
      return H === void 0 ? ie.has(R) : !!H;
    }
    function I(R, H) {
      t.state.ui[`collapsed_${R}`] = H;
    }
    He(() => t.state.nodeState, () => {
    }, { deep: !0 });
    const L = Y({
      get: () => t.state.nodeState.seed_mode ?? "random",
      set: (R) => {
        t.state.nodeState.seed_mode = R;
      }
    }), K = Y({
      get: () => Number(t.state.nodeState.seed ?? -1) || -1,
      set: (R) => {
        t.state.nodeState.seed = R;
      }
    }), N = Y(() => L.value === "fixed" ? `${K.value}` : "random");
    function x() {
      L.value = "random";
    }
    function F() {
      if (t.state.lastRunSeed == null) {
        st.warning("No last-run seed recorded yet");
        return;
      }
      K.value = t.state.lastRunSeed, L.value = "fixed";
    }
    function $() {
      const R = Math.floor(Math.random() * 1e9) & 2147483647;
      K.value = R, L.value = "fixed";
    }
    return (R, H) => (C(), E("div", Lm, [
      (C(!0), E(de, null, Ae(w.value, (A, j) => (C(), E(de, { key: j }, [
        j !== "styles" ? (C(), E("div", {
          key: 0,
          class: "fil-section-block",
          style: ze({ "--fil-accent": l[String(j)] })
        }, [
          j !== "_" && j !== "prompt" ? (C(), Ie(sn, {
            key: 0,
            title: r(String(j)),
            "model-value": T(String(j)),
            "onUpdate:modelValue": (W) => I(String(j), W)
          }, null, 8, ["title", "model-value", "onUpdate:modelValue"])) : se("", !0),
          (C(!0), E(de, null, Ae(A, (W) => Ke((C(), E("div", {
            key: W.name,
            class: "fil-w-row",
            title: c(W)
          }, [
            W.kind === "chip_grid" ? (C(), Ie(nl, {
              key: 0,
              options: W.values || [],
              "model-value": String(S(W.name, "")),
              columns: W.columns ?? 3,
              "onUpdate:modelValue": (Q) => k(W.name, Q)
            }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"])) : W.kind === "chip_list" ? (C(), Ie(Zp, {
              key: 1,
              options: W.values || [],
              "model-value": S(W.name, null),
              searchable: W.searchable ?? !0,
              "onUpdate:modelValue": (Q) => k(W.name, Q)
            }, null, 8, ["options", "model-value", "searchable", "onUpdate:modelValue"])) : W.kind === "segmented" ? (C(), Ie(gt, {
              key: 2,
              options: W.options || [],
              "model-value": String(S(W.name, "")),
              label: f(W),
              "onUpdate:modelValue": (Q) => k(W.name, Q)
            }, null, 8, ["options", "model-value", "label", "onUpdate:modelValue"])) : W.kind === "string" && y(a).has(W.name) ? (C(), E("textarea", {
              key: 3,
              class: "fil-w-textarea",
              value: String(S(W.name, "")),
              placeholder: f(W),
              onInput: (Q) => k(W.name, Q.target.value)
            }, null, 40, Am)) : W.kind === "string" ? (C(), E("input", {
              key: 4,
              type: "text",
              class: "fil-w-input",
              value: String(S(W.name, "")),
              placeholder: f(W),
              onInput: (Q) => k(W.name, Q.target.value)
            }, null, 40, Dm)) : (C(), Ie(nl, {
              key: 5,
              options: W.values || [],
              "model-value": String(S(W.name, "")),
              columns: W.columns ?? 3,
              "onUpdate:modelValue": (Q) => k(W.name, Q)
            }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"]))
          ], 8, Im)), [
            [Is, j === "_" || j === "prompt" || !T(String(j))]
          ])), 128))
        ], 4)) : se("", !0)
      ], 64))), 128)),
      B("div", {
        class: "fil-section-block",
        style: ze({ "--fil-accent": l.advanced })
      }, [
        X(sn, {
          title: r("advanced"),
          "model-value": T("advanced"),
          "onUpdate:modelValue": H[0] || (H[0] = (A) => I("advanced", A))
        }, null, 8, ["title", "model-value"]),
        Ke(B("div", km, [
          (C(!0), E(de, null, Ae(D.value, (A, j) => (C(), E("div", {
            key: `style-pair-${j}`,
            class: "fil-style-pair-row"
          }, [
            (C(!0), E(de, null, Ae(A, (W) => (C(), E("div", {
              key: W.name,
              class: "fil-style-pair-item",
              title: c(W)
            }, [
              X(it, {
                variant: "full",
                label: _(W.name),
                onClick: (Q) => v(W.name)
              }, null, 8, ["label", "onClick"]),
              X(Oa, {
                open: !!p[W.name],
                title: f(W),
                width: "640px",
                "onUpdate:open": (Q) => p[W.name] = Q
              }, {
                default: Us(() => [
                  X(Fm, {
                    styles: W.values || [],
                    "model-value": String(S(W.name, "None")),
                    onSelect: (Q) => g(W.name, Q)
                  }, null, 8, ["styles", "model-value", "onSelect"])
                ]),
                _: 2
              }, 1032, ["open", "title", "onUpdate:open"])
            ], 8, Em))), 128))
          ]))), 128))
        ], 512), [
          [Is, !T("advanced")]
        ])
      ], 4),
      B("div", Tm, [
        B("div", Om, [
          B("input", {
            value: N.value,
            type: "text",
            class: Le(["fil-scanner-seed-field", { "is-random": L.value === "random" }]),
            readonly: L.value === "random",
            "aria-label": "Seed value",
            title: L.value === "fixed" ? y(n)("scn_seed_locked", "Locked seed") : y(n)("scn_seed_auto_random", "Auto-random — a new seed is generated each run"),
            onInput: H[1] || (H[1] = (A) => K.value = Number(A.target.value) || 0)
          }, null, 42, Rm),
          B("button", {
            type: "button",
            class: Le(["fil-scanner-seed-pill", { active: L.value === "random" }]),
            title: y(n)("scn_seed_mode_tt", "Random generates a new seed each run."),
            onClick: x
          }, Z(y(n)("scn_seed_random", "Random")), 11, Pm),
          B("button", {
            type: "button",
            class: "fil-scanner-seed-pill",
            title: t.state.lastRunSeed != null ? `${y(n)("scn_seed_use_last_prefix", "Reuse the last run's seed:")} ${t.state.lastRunSeed}` : y(n)("scn_seed_use_last_tt", "Reuse the seed from the last executed run."),
            onClick: F
          }, Z(y(n)("scn_seed_use_last", "Use last")), 9, Nm),
          B("button", {
            type: "button",
            class: "fil-scanner-seed-pill fil-scanner-seed-pill-accent",
            title: y(n)("scn_seed_new_fixed_tt", "Generate a new random fixed seed."),
            onClick: $
          }, Z(y(n)("scn_seed_new_fixed", "New fixed")), 9, $m)
        ])
      ])
    ]));
  }
}), Bm = /* @__PURE__ */ Fe(Vm, [["__scopeId", "data-v-d2fa2aea"]]), Hm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bm
}, Symbol.toStringTag, { value: "Module" })), Um = { class: "fil-cleaner-root" }, jm = ["aria-pressed", "title", "onClick"], Wm = { class: "fil-cleaner-label" }, zm = ["aria-pressed", "title", "onClick"], Gm = { class: "fil-cleaner-label" }, Km = /* @__PURE__ */ Se({
  __name: "NeuroCleaner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = kt(), s = [
      { name: "clean_vram", label: "🧹 Clear VRAM cache", defaultOn: !0 },
      { name: "offload_model", label: "📤 Unload selected model types", defaultOn: !0 },
      { name: "offload_cache", label: "🎮 Flush GPU cache", defaultOn: !0 },
      { name: "unload_diffusion", label: "🌀 Diffusion models", defaultOn: !0 },
      { name: "unload_clip", label: "📎 CLIP models", defaultOn: !0 },
      { name: "unload_vae", label: "🖼️ VAE models", defaultOn: !0 },
      { name: "unload_control", label: "🎛️ ControlNet models", defaultOn: !0 },
      { name: "unload_lora", label: "🧩 LoRA models", defaultOn: !0 }
    ], o = [
      { name: "clean_ram", label: "💾 Clean system RAM", defaultOn: !1 },
      { name: "clean_file_cache", label: "🗂️ Clean file cache (Windows)", defaultOn: !0 },
      { name: "clean_processes", label: "⚙️ Trim process working set", defaultOn: !1 },
      { name: "clean_dlls", label: "📦 Empty DLL working set", defaultOn: !1 }
    ];
    function i(d, f) {
      return n(`nc_${d}`, f);
    }
    function l(d, f) {
      const p = t.state.nodeState[d];
      return typeof p == "boolean" ? p : f;
    }
    function a(d, f) {
      t.state.nodeState[d] = !l(d, f);
    }
    const r = /* @__PURE__ */ new Set(["ram"]);
    function u(d) {
      const f = t.state.ui[`collapsed_${d}`];
      return f === void 0 ? r.has(d) : !!f;
    }
    function c(d, f) {
      t.state.ui[`collapsed_${d}`] = f;
    }
    return He(() => t.state.nodeState, () => {
    }, { deep: !0 }), (d, f) => (C(), E("div", Um, [
      X(sn, {
        title: y(n)("nc_section_vram", "🎮 VRAM / Models"),
        "model-value": u("vram"),
        "onUpdate:modelValue": f[0] || (f[0] = (p) => c("vram", p))
      }, null, 8, ["title", "model-value"]),
      (C(), E(de, null, Ae(s, (p) => Ke(B("button", {
        key: p.name,
        type: "button",
        class: Le(["fil-cleaner-row", { active: l(p.name, p.defaultOn) }]),
        "aria-pressed": l(p.name, p.defaultOn),
        title: i(p.name, p.label),
        onClick: (m) => a(p.name, p.defaultOn)
      }, [
        f[2] || (f[2] = B("span", { class: "fil-cleaner-dot" }, null, -1)),
        B("span", Wm, Z(y(n)(`nc_lbl_${p.name}`, p.label)), 1)
      ], 10, jm), [
        [Is, !u("vram")]
      ])), 64)),
      X(sn, {
        title: y(n)("nc_section_ram", "💾 RAM / Cache (advanced)"),
        "model-value": u("ram"),
        "onUpdate:modelValue": f[1] || (f[1] = (p) => c("ram", p))
      }, null, 8, ["title", "model-value"]),
      (C(), E(de, null, Ae(o, (p) => Ke(B("button", {
        key: p.name,
        type: "button",
        class: Le(["fil-cleaner-row", { active: l(p.name, p.defaultOn) }]),
        "aria-pressed": l(p.name, p.defaultOn),
        title: i(p.name, p.label),
        onClick: (m) => a(p.name, p.defaultOn)
      }, [
        f[3] || (f[3] = B("span", { class: "fil-cleaner-dot" }, null, -1)),
        B("span", Gm, Z(y(n)(`nc_lbl_${p.name}`, p.label)), 1)
      ], 10, zm), [
        [Is, !u("ram")]
      ])), 64))
    ]));
  }
}), qm = /* @__PURE__ */ Fe(Km, [["__scopeId", "data-v-a4947bd0"]]), Xm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qm
}, Symbol.toStringTag, { value: "Module" }));
function go(e) {
  return Math.min(1, Math.max(0, e));
}
const Ym = { class: "fil-cmp-root" }, Jm = {
  key: 0,
  class: "fil-cmp-placeholder"
}, Qm = { class: "fil-cmp-save-row" }, Zm = {
  key: 2,
  class: "fil-cmp-settings"
}, eh = /* @__PURE__ */ Se({
  __name: "BeforeAfterCompare",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = kt(), s = Y({
      get: () => t.state.ui.compare_mode ?? "wipe",
      set: (A) => {
        t.state.ui.compare_mode = A, x();
      }
    }), o = Y({
      get: () => Number(t.state.ui.compare_position ?? 0.5),
      set: (A) => {
        t.state.ui.compare_position = go(A), x();
      }
    }), i = Y({
      get: () => Number(t.state.ui.compare_opacity ?? 0.5),
      set: (A) => {
        t.state.ui.compare_opacity = go(A), x();
      }
    }), l = Y({
      get: () => t.state.ui.settings_collapsed !== !1,
      set: (A) => {
        t.state.ui.settings_collapsed = A;
      }
    }), a = Y(() => [
      { value: "before", label: n("cmp_mode_before", "◀ Before") },
      { value: "after", label: n("cmp_mode_after", "After ▶") },
      { value: "wipe", label: n("cmp_mode_wipe", "↔ Wipe") },
      { value: "side-by-side", label: n("cmp_mode_side", "▥ Side-by-side") },
      { value: "overlay", label: n("cmp_mode_overlay", "◐ Overlay") },
      { value: "difference", label: n("cmp_mode_difference", "◈ Difference") }
    ]), r = ["Off", "Preview only", "Preview + output"], u = {
      Off: "🚫 Off",
      "Preview only": "👁️ Preview only",
      "Preview + output": "👁️➡️ Preview + output"
    }, c = Y(() => t.state.nodeState.swap ? "ON" : "OFF");
    function d(A) {
      t.state.nodeState.swap = A === "ON";
    }
    const f = Y(() => String(t.state.nodeState.resize_mode ?? "Off"));
    function p(A) {
      t.state.nodeState.resize_mode = A;
    }
    const m = Y(() => Number(t.state.nodeState.max_resolution ?? 4096) || 4096);
    function _(A) {
      t.state.nodeState.max_resolution = A;
    }
    const v = Y(() => f.value !== "Off"), g = Y(() => t.state.ui.compare_images ?? {}), w = /* @__PURE__ */ re(null), D = /* @__PURE__ */ re(null), S = /* @__PURE__ */ re(!1), k = Y(() => !!w.value || !!D.value);
    function ie(A) {
      return new Promise((j, W) => {
        const Q = new Image();
        Q.onload = () => j(Q), Q.onerror = () => W(new Error("image load failed")), Q.src = A;
      });
    }
    const T = /* @__PURE__ */ re(null), I = /* @__PURE__ */ re(null);
    let L = 0, K = null;
    He(
      () => t.state.ui.compare_images,
      async (A) => {
        var oe, ve;
        const j = A ?? {}, W = (oe = j.a) == null ? void 0 : oe[0], Q = (ve = j.b) == null ? void 0 : ve[0];
        S.value = !1, w.value = null, D.value = null;
        try {
          W && (w.value = await ie(Xi(W))), Q && (D.value = await ie(Xi(Q)));
        } catch {
          S.value = !0;
        }
        x();
      },
      { deep: !0, immediate: !0 }
    ), He([s, o, i], () => x());
    function N(A, j, W, Q) {
      if (!W || !Q) return { x: 0, y: 0, w: A, h: j };
      const oe = A / j, ve = W / Q;
      let Ze, le;
      return ve > oe ? (Ze = A, le = A / ve) : (le = j, Ze = j * ve), { x: (A - Ze) / 2, y: (j - le) / 2, w: Ze, h: le };
    }
    function x() {
      L || (L = requestAnimationFrame(() => {
        L = 0, F();
      }));
    }
    function F() {
      const A = I.value, j = T.value;
      if (!A || !j) return;
      const W = window.devicePixelRatio || 1, Q = j.clientWidth, oe = j.clientHeight;
      if (Q <= 0 || oe <= 0) return;
      const ve = Math.round(Q * W), Ze = Math.round(oe * W);
      (A.width !== ve || A.height !== Ze) && (A.width = ve, A.height = Ze);
      const le = A.getContext("2d");
      if (!le) return;
      le.setTransform(W, 0, 0, W, 0, 0), le.clearRect(0, 0, Q, oe);
      const $e = w.value, De = D.value;
      if (!$e && !De) return;
      if (s.value === "side-by-side") {
        const qe = Q / 2;
        if ($e) {
          const Oe = N(qe, oe, $e.naturalWidth, $e.naturalHeight);
          le.drawImage($e, Oe.x, Oe.y, Oe.w, Oe.h);
        }
        if (De) {
          const Oe = N(qe, oe, De.naturalWidth, De.naturalHeight);
          le.drawImage(De, qe + Oe.x, Oe.y, Oe.w, Oe.h);
        }
        le.strokeStyle = "rgba(255,255,255,0.2)", le.beginPath(), le.moveTo(qe, 0), le.lineTo(qe, oe), le.stroke();
        return;
      }
      const jt = $e ?? De, ue = N(Q, oe, jt.naturalWidth, jt.naturalHeight);
      if (s.value === "before") {
        $e && le.drawImage($e, ue.x, ue.y, ue.w, ue.h);
        return;
      }
      if (s.value === "after") {
        De && le.drawImage(De, ue.x, ue.y, ue.w, ue.h);
        return;
      }
      if (s.value === "overlay") {
        $e && le.drawImage($e, ue.x, ue.y, ue.w, ue.h), De && (le.save(), le.globalAlpha = i.value, le.drawImage(De, ue.x, ue.y, ue.w, ue.h), le.restore());
        return;
      }
      if (s.value === "difference") {
        $e && le.drawImage($e, ue.x, ue.y, ue.w, ue.h), De && (le.save(), le.globalCompositeOperation = "difference", le.drawImage(De, ue.x, ue.y, ue.w, ue.h), le.restore());
        return;
      }
      if ($e && le.drawImage($e, ue.x, ue.y, ue.w, ue.h), De) {
        const qe = ue.x + ue.w * o.value;
        le.save(), le.beginPath(), le.rect(qe, ue.y, ue.x + ue.w - qe, ue.h), le.clip(), le.drawImage(De, ue.x, ue.y, ue.w, ue.h), le.restore();
        const Oe = getComputedStyle(j).getPropertyValue("--fil-accent").trim() || "#e8724c";
        le.save(), le.strokeStyle = Oe, le.lineWidth = 2, le.shadowColor = Oe, le.shadowBlur = 6, le.beginPath(), le.moveTo(qe, ue.y), le.lineTo(qe, ue.y + ue.h), le.stroke(), le.restore();
      }
    }
    function $(A) {
      const j = T.value;
      if (!j) return;
      const W = j.getBoundingClientRect();
      o.value = go((A.clientX - W.left) / W.width);
    }
    function R(A) {
      if (s.value !== "wipe") return;
      $(A);
      const j = (Q) => $(Q), W = () => {
        window.removeEventListener("pointermove", j), window.removeEventListener("pointerup", W);
      };
      window.addEventListener("pointermove", j), window.addEventListener("pointerup", W);
    }
    an(() => {
      K = new ResizeObserver(() => x()), T.value && K.observe(T.value), x();
    }), xn(() => {
      K == null || K.disconnect(), L && cancelAnimationFrame(L);
    });
    async function H(A) {
      var W, Q;
      const j = A === "a" ? (W = g.value.a) == null ? void 0 : W[0] : (Q = g.value.b) == null ? void 0 : Q[0];
      if (!j) {
        st.warning(n("cmp_no_preview", "Run the node to see a preview"));
        return;
      }
      try {
        const oe = await Xt.saveCompareImage(j);
        st.success(`${n("cmp_saved", "Saved to output")}: ${oe.image.filename}`);
      } catch (oe) {
        st.warning(oe instanceof Error ? oe.message : "Save failed");
      }
    }
    return (A, j) => {
      var W, Q;
      return C(), E("div", Ym, [
        X(Po, {
          options: a.value,
          "model-value": s.value,
          label: y(n)("lbl_mode", "⚙️ Mode"),
          title: y(n)("cmp_view_mode", "How to compare the two images."),
          "onUpdate:modelValue": j[0] || (j[0] = (oe) => s.value = oe)
        }, null, 8, ["options", "model-value", "label", "title"]),
        B("div", {
          ref_key: "wrapRef",
          ref: T,
          class: "fil-cmp-canvas-wrap"
        }, [
          B("canvas", {
            ref_key: "canvasRef",
            ref: I,
            class: Le(["fil-cmp-canvas", { "is-wipe": s.value === "wipe" }]),
            onPointerdown: R
          }, null, 34),
          k.value ? se("", !0) : (C(), E("div", Jm, Z(S.value ? y(n)("cmp_load_error", "Could not load preview images") : y(n)("cmp_no_preview", "Run the node to see a preview")), 1))
        ], 512),
        s.value === "wipe" ? (C(), Ie(nt, {
          key: 0,
          "model-value": o.value,
          min: 0,
          max: 1,
          step: 0.01,
          label: y(n)("cmp_position", "Position"),
          "onUpdate:modelValue": j[1] || (j[1] = (oe) => o.value = oe)
        }, null, 8, ["model-value", "label"])) : se("", !0),
        s.value === "overlay" ? (C(), Ie(nt, {
          key: 1,
          "model-value": i.value,
          min: 0,
          max: 1,
          step: 0.01,
          label: y(n)("cmp_opacity", "Opacity"),
          "onUpdate:modelValue": j[2] || (j[2] = (oe) => i.value = oe)
        }, null, 8, ["model-value", "label"])) : se("", !0),
        B("div", Qm, [
          X(it, {
            variant: "sm",
            label: y(n)("cmp_save_before", "💾 Save before"),
            disabled: !((W = g.value.a) != null && W.length),
            onClick: j[3] || (j[3] = (oe) => H("a"))
          }, null, 8, ["label", "disabled"]),
          X(it, {
            variant: "sm",
            label: y(n)("cmp_save_after", "💾 Save after"),
            disabled: !((Q = g.value.b) != null && Q.length),
            onClick: j[4] || (j[4] = (oe) => H("b"))
          }, null, 8, ["label", "disabled"])
        ]),
        X(sn, {
          title: y(n)("cmp_settings", "Settings"),
          modelValue: l.value,
          "onUpdate:modelValue": j[5] || (j[5] = (oe) => l.value = oe)
        }, null, 8, ["title", "modelValue"]),
        l.value ? se("", !0) : (C(), E("div", Zm, [
          X(gt, {
            options: ["ON", "OFF"],
            "option-labels": { ON: y(n)("cmp_swap_on_label", "🔄 Swapped"), OFF: y(n)("cmp_swap_off_label", "↔️ Normal") },
            "model-value": c.value,
            label: y(n)("lbl_swap", "🔁 Swap before/after"),
            title: y(n)("cmp_swap", "Swap which image is shown as before/after."),
            "onUpdate:modelValue": d
          }, null, 8, ["option-labels", "model-value", "label", "title"]),
          X(gt, {
            options: [...r],
            "option-labels": u,
            "model-value": f.value,
            label: y(n)("lbl_resize_mode", "🖥️ Resize mode"),
            title: y(n)("cmp_resize_mode", "Off keeps images untouched. Preview modes downscale for a lighter preview and, optionally, output."),
            "onUpdate:modelValue": p
          }, null, 8, ["options", "model-value", "label", "title"]),
          v.value ? (C(), Ie(nt, {
            key: 0,
            "model-value": m.value,
            min: 256,
            max: 8192,
            step: 64,
            label: y(n)("lbl_max_resolution", "🖼️ Max resolution"),
            title: y(n)("cmp_max_resolution", "Maximum width or height used when resizing is enabled."),
            "onUpdate:modelValue": _
          }, null, 8, ["model-value", "label", "title"])) : se("", !0)
        ]))
      ]);
    };
  }
}), th = /* @__PURE__ */ Fe(eh, [["__scopeId", "data-v-c2d7a75d"]]), nh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: th
}, Symbol.toStringTag, { value: "Module" })), sh = { class: "fil-up-root" }, oh = { class: "fil-up-row" }, ih = ["title"], lh = ["title"], ah = { class: "fil-up-row" }, rh = ["title"], ch = ["title"], uh = /* @__PURE__ */ Se({
  __name: "UpscaleTileCalc",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = kt(), s = ["Low VRAM", "Balanced", "High VRAM", "Max Quality", "Ultra Quality"], o = {
      "Low VRAM": "🪫 Low VRAM",
      Balanced: "⚖️ Balanced",
      "High VRAM": "🔋 High VRAM",
      "Max Quality": "💎 Max Quality",
      "Ultra Quality": "👑 Ultra Quality"
    };
    function i(D, S) {
      return Y({
        get: () => Number(t.state.nodeState[D] ?? t.state.initialValues[D] ?? S) || S,
        set: (k) => {
          t.state.nodeState[D] = k;
        }
      });
    }
    function l(D, S) {
      return Y({
        get: () => t.state.nodeState[D] ?? t.state.initialValues[D] ?? S ? "ON" : "OFF",
        set: (k) => {
          t.state.nodeState[D] = k === "ON";
        }
      });
    }
    const a = i("upscale_factor", 2), r = i("tile_size", 512), u = i("tile_overlap", 64), c = i("manual_tile_cols", 0), d = i("manual_tile_rows", 0), f = i("max_megapixels", 0), p = l("auto_mode", !1), m = l("non_square_tiles", !1), _ = l("show_grid_preview", !0), v = Y({
      get: () => String(t.state.nodeState.auto_profile ?? t.state.initialValues.auto_profile ?? "Balanced"),
      set: (D) => {
        t.state.nodeState.auto_profile = D;
      }
    });
    function g(D) {
      return !!t.state.ui[`collapsed_${D}`];
    }
    function w(D, S) {
      t.state.ui[`collapsed_${D}`] = S;
    }
    return He(() => t.state.nodeState, () => {
    }, { deep: !0 }), (D, S) => (C(), E("div", sh, [
      X(nt, {
        "model-value": y(a),
        min: 0.1,
        max: 8,
        step: 0.25,
        label: y(n)("lbl_upscale_factor", "🔍 Upscale factor"),
        title: y(n)("utc_factor", "Upscale multiplier."),
        "onUpdate:modelValue": S[0] || (S[0] = (k) => a.value = k)
      }, null, 8, ["model-value", "label", "title"]),
      X(sn, {
        title: y(n)("utc_section_auto", "⚙️ Auto / advanced"),
        "model-value": g("auto"),
        "onUpdate:modelValue": S[1] || (S[1] = (k) => w("auto", k))
      }, null, 8, ["title", "model-value"]),
      g("auto") ? se("", !0) : (C(), E(de, { key: 0 }, [
        X(gt, {
          options: ["ON", "OFF"],
          "option-labels": { ON: "⚙️ ON", OFF: "OFF" },
          "model-value": y(p),
          label: y(n)("lbl_full_auto", "🤖 Full auto"),
          title: y(n)("utc_auto_mode", "Pick tile size/overlap automatically from the selected VRAM profile."),
          "onUpdate:modelValue": S[2] || (S[2] = (k) => p.value = k)
        }, null, 8, ["model-value", "label", "title"]),
        y(p) === "ON" ? (C(), Ie(gt, {
          key: 0,
          options: [...s],
          "option-labels": o,
          "model-value": v.value,
          label: y(n)("lbl_auto_profile", "🎚️ Auto profile"),
          title: y(n)("utc_auto_profile", "VRAM/quality profile used when Full Auto is on."),
          "onUpdate:modelValue": S[3] || (S[3] = (k) => v.value = k)
        }, null, 8, ["options", "model-value", "label", "title"])) : se("", !0),
        y(p) === "OFF" ? (C(), E(de, { key: 1 }, [
          B("div", oh, [
            B("label", {
              class: "fil-w-label",
              title: y(n)("utc_tile_size", "Base tile size.")
            }, Z(y(n)("lbl_tile_size", "🔲 Tile size")), 9, ih),
            X($t, {
              modelValue: y(r),
              "onUpdate:modelValue": S[4] || (S[4] = (k) => /* @__PURE__ */ he(r) ? r.value = k : null),
              min: 64,
              max: 2048,
              step: 64
            }, null, 8, ["modelValue"]),
            B("label", {
              class: "fil-w-label",
              title: y(n)("utc_overlap", "Tile overlap.")
            }, Z(y(n)("lbl_overlap", "🧵 Overlap")), 9, lh),
            X($t, {
              modelValue: y(u),
              "onUpdate:modelValue": S[5] || (S[5] = (k) => /* @__PURE__ */ he(u) ? u.value = k : null),
              min: 0,
              max: 512,
              step: 8
            }, null, 8, ["modelValue"])
          ]),
          B("div", ah, [
            B("label", {
              class: "fil-w-label",
              title: y(n)("utc_manual_cols", "Force this many tile columns. 0 = compute from tile size.")
            }, Z(y(n)("lbl_manual_cols", "↔️ Manual cols")), 9, rh),
            X($t, {
              modelValue: y(c),
              "onUpdate:modelValue": S[6] || (S[6] = (k) => /* @__PURE__ */ he(c) ? c.value = k : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"]),
            B("label", {
              class: "fil-w-label",
              title: y(n)("utc_manual_rows", "Force this many tile rows. 0 = compute from tile size.")
            }, Z(y(n)("lbl_manual_rows", "↕️ Manual rows")), 9, ch),
            X($t, {
              modelValue: y(d),
              "onUpdate:modelValue": S[7] || (S[7] = (k) => /* @__PURE__ */ he(d) ? d.value = k : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"])
          ])
        ], 64)) : se("", !0)
      ], 64)),
      X(nt, {
        "model-value": y(f),
        min: 0,
        max: 64,
        step: 0.5,
        label: y(n)("lbl_max_megapixels", "🖼️ Max megapixels (0 = no cap)"),
        title: y(n)("utc_max_mp", "Cap the upscaled output at this many megapixels. 0 = no cap."),
        "onUpdate:modelValue": S[8] || (S[8] = (k) => f.value = k)
      }, null, 8, ["model-value", "label", "title"]),
      X(gt, {
        options: ["ON", "OFF"],
        "option-labels": { ON: "🧩 ON", OFF: "OFF" },
        "model-value": y(m),
        label: y(n)("lbl_non_square", "📐 Non-square tiles"),
        title: y(n)("utc_non_square", "Allow rectangular tiles instead of forcing square ones."),
        "onUpdate:modelValue": S[9] || (S[9] = (k) => m.value = k)
      }, null, 8, ["model-value", "label", "title"]),
      X(gt, {
        options: ["ON", "OFF"],
        "option-labels": { ON: "🔲 ON", OFF: "OFF" },
        "model-value": y(_),
        label: y(n)("lbl_show_grid", "🔳 Show grid preview"),
        title: y(n)("utc_show_grid", "Render a tile-grid overlay on the preview output."),
        "onUpdate:modelValue": S[10] || (S[10] = (k) => _.value = k)
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), dh = /* @__PURE__ */ Fe(uh, [["__scopeId", "data-v-626d73da"]]), fh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dh
}, Symbol.toStringTag, { value: "Module" })), ph = ["title"], mh = {
  key: 0,
  class: "fil-w-select-label"
}, hh = ["disabled", "aria-label"], gh = ["value"], _h = /* @__PURE__ */ Se({
  __name: "FilSelect",
  props: {
    options: {},
    modelValue: {},
    label: {},
    title: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = Y({
      get: () => n.modelValue,
      set: (i) => s("update:modelValue", i)
    });
    return (i, l) => (C(), E("div", {
      class: "fil-w-select",
      title: e.title
    }, [
      e.label ? (C(), E("label", mh, Z(e.label), 1)) : se("", !0),
      Ke(B("select", {
        "onUpdate:modelValue": l[0] || (l[0] = (a) => o.value = a),
        class: "fil-w-select-input",
        disabled: e.disabled,
        "aria-label": e.label,
        onChange: l[1] || (l[1] = (a) => s("update:modelValue", a.target.value))
      }, [
        (C(!0), E(de, null, Ae(e.options, (a) => (C(), E("option", {
          key: a,
          value: a
        }, Z(a), 9, gh))), 128))
      ], 40, hh), [
        [yu, o.value]
      ])
    ], 8, ph));
  }
}), fs = /* @__PURE__ */ Fe(_h, [["__scopeId", "data-v-bf2ff33c"]]), bh = { class: "fil-hrf-root" }, vh = ["title"], yh = ["title"], wh = ["title"], xh = { class: "fil-hrf-row" }, Sh = ["title"], Ch = ["title"], Fh = ["title"], Mh = ["title"], Lh = /* @__PURE__ */ Se({
  __name: "HiResFix",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = kt();
    function s(x, F) {
      return Y({
        get: () => Number(t.state.nodeState[x] ?? t.state.initialValues[x] ?? F) || F,
        set: ($) => {
          t.state.nodeState[x] = $;
        }
      });
    }
    function o(x, F) {
      return Y({
        get: () => String(t.state.nodeState[x] ?? t.state.initialValues[x] ?? F),
        set: ($) => {
          t.state.nodeState[x] = $;
        }
      });
    }
    function i(x, F) {
      return Y({
        get: () => t.state.nodeState[x] ?? t.state.initialValues[x] ?? F ? "ON" : "OFF",
        set: ($) => {
          t.state.nodeState[x] = $ === "ON";
        }
      });
    }
    function l(x, F) {
      var A;
      const $ = t.state.node, R = $ ? fe($, x) : null, H = (A = R == null ? void 0 : R.options) == null ? void 0 : A.values;
      return Array.isArray(H) && H.length ? H : F;
    }
    const a = o("upscale_type", "latent"), r = o("hires_ckpt_name", "(use same)"), u = o("latent_upscaler", "nearest-exact"), c = o("pixel_upscaler", ""), d = s("upscale_by", 1.25), f = i("use_same_seed", !0), p = s("seed", 0), m = s("hires_steps", 12), _ = s("denoise", 0.56), v = s("iterations", 1), g = i("use_controlnet", !1), w = o("control_net_name", ""), D = s("strength", 1), S = Y(() => l("hires_ckpt_name", ["(use same)"])), k = ["nearest-exact", "bilinear", "area", "bicubic", "bislerp"], ie = Y(() => l("pixel_upscaler", ["(none)"])), T = Y(() => l("control_net_name", ["(none)"])), I = Y(() => a.value === "latent"), L = Y(() => a.value === "pixel" || a.value === "both");
    function K(x) {
      return !!t.state.ui[`collapsed_${x}`];
    }
    function N(x, F) {
      t.state.ui[`collapsed_${x}`] = F;
    }
    return (x, F) => (C(), E("div", bh, [
      X(gt, {
        options: ["latent", "pixel", "both"],
        "option-labels": { latent: "🌀 latent", pixel: "🖼️ pixel", both: "🔀 both" },
        "model-value": y(a),
        label: y(n)("lbl_upscale_type", "⬆️ Upscale type"),
        title: y(n)("hrf_upscale_type", "Upscale in latent space, pixel space, or both."),
        "onUpdate:modelValue": F[0] || (F[0] = ($) => a.value = $)
      }, null, 8, ["model-value", "label", "title"]),
      I.value ? (C(), E(de, { key: 0 }, [
        B("label", {
          class: "fil-w-label",
          title: y(n)("hrf_latent_up", "Latent upscale method.")
        }, Z(y(n)("lbl_latent_up", "🌀 Latent upscaler")), 9, vh),
        X(fs, {
          options: k,
          "model-value": y(u),
          "onUpdate:modelValue": F[1] || (F[1] = ($) => u.value = $)
        }, null, 8, ["model-value"])
      ], 64)) : se("", !0),
      L.value ? (C(), E(de, { key: 1 }, [
        B("label", {
          class: "fil-w-label",
          title: y(n)("hrf_pixel_up", "Pixel upscale model (from upscale_models).")
        }, Z(y(n)("lbl_pixel_up", "🖼️ Pixel upscaler")), 9, yh),
        X(fs, {
          options: ie.value,
          "model-value": y(c),
          "onUpdate:modelValue": F[2] || (F[2] = ($) => c.value = $)
        }, null, 8, ["options", "model-value"])
      ], 64)) : se("", !0),
      B("label", {
        class: "fil-w-label",
        title: y(n)("hrf_ckpt", "Checkpoint for the hires pass. (use same) reuses the base model.")
      }, Z(y(n)("lbl_hires_ckpt", "📦 Hires checkpoint")), 9, wh),
      X(fs, {
        options: S.value,
        "model-value": y(r),
        "onUpdate:modelValue": F[3] || (F[3] = ($) => r.value = $)
      }, null, 8, ["options", "model-value"]),
      X(nt, {
        "model-value": y(d),
        min: 0.01,
        max: 8,
        step: 0.05,
        label: y(n)("lbl_upscale_by", "🔍 Upscale by"),
        title: y(n)("hrf_upscale_by", "Upscale multiplier."),
        "onUpdate:modelValue": F[4] || (F[4] = ($) => d.value = $)
      }, null, 8, ["model-value", "label", "title"]),
      X(nt, {
        "model-value": y(_),
        min: 0,
        max: 1,
        step: 0.01,
        label: y(n)("lbl_hrf_denoise", "💧 Denoise"),
        title: y(n)("hrf_denoise", "Denoise strength for the hires re-sample."),
        "onUpdate:modelValue": F[5] || (F[5] = ($) => _.value = $)
      }, null, 8, ["model-value", "label", "title"]),
      B("div", xh, [
        B("label", {
          class: "fil-w-label",
          title: y(n)("hrf_steps", "Steps for the hires re-sample.")
        }, Z(y(n)("lbl_hires_steps", "🪜 Hires steps")), 9, Sh),
        X($t, {
          modelValue: y(m),
          "onUpdate:modelValue": F[6] || (F[6] = ($) => /* @__PURE__ */ he(m) ? m.value = $ : null),
          min: 1,
          max: 1e4,
          step: 1
        }, null, 8, ["modelValue"]),
        B("label", {
          class: "fil-w-label",
          title: y(n)("hrf_iterations", "How many upscale+resample passes to run.")
        }, Z(y(n)("lbl_iterations", "🔁 Iterations")), 9, Ch),
        X($t, {
          modelValue: y(v),
          "onUpdate:modelValue": F[7] || (F[7] = ($) => /* @__PURE__ */ he(v) ? v.value = $ : null),
          min: 0,
          max: 5,
          step: 1
        }, null, 8, ["modelValue"])
      ]),
      X(gt, {
        options: ["ON", "OFF"],
        "option-labels": { ON: "♻️ same seed", OFF: "🎲 own" },
        "model-value": y(f),
        label: y(n)("lbl_use_same_seed", "🌱 Seed source"),
        title: y(n)("hrf_same_seed", "Reuse the samplers seed for the hires pass."),
        "onUpdate:modelValue": F[8] || (F[8] = ($) => f.value = $)
      }, null, 8, ["model-value", "label", "title"]),
      y(f) === "OFF" ? (C(), E(de, { key: 2 }, [
        B("label", {
          class: "fil-w-label",
          title: y(n)("hrf_seed", "Hires-pass seed (used when own seed).")
        }, Z(y(n)("lbl_hrf_seed", "🎲 Seed")), 9, Fh),
        X($t, {
          modelValue: y(p),
          "onUpdate:modelValue": F[9] || (F[9] = ($) => /* @__PURE__ */ he(p) ? p.value = $ : null),
          min: 0,
          step: 1
        }, null, 8, ["modelValue"])
      ], 64)) : se("", !0),
      X(sn, {
        title: y(n)("hrf_section_cn", "🕹️ ControlNet"),
        "model-value": K("cn"),
        "onUpdate:modelValue": F[10] || (F[10] = ($) => N("cn", $))
      }, null, 8, ["title", "model-value"]),
      K("cn") ? se("", !0) : (C(), E(de, { key: 3 }, [
        X(gt, {
          options: ["ON", "OFF"],
          "option-labels": { ON: "🕹️ ON", OFF: "OFF" },
          "model-value": y(g),
          label: y(n)("lbl_use_cn", "🕹️ Use ControlNet"),
          title: y(n)("hrf_use_cn", "Guide the hires pass with a ControlNet."),
          "onUpdate:modelValue": F[11] || (F[11] = ($) => g.value = $)
        }, null, 8, ["model-value", "label", "title"]),
        y(g) === "ON" ? (C(), E(de, { key: 0 }, [
          B("label", {
            class: "fil-w-label",
            title: y(n)("hrf_cn_name", "ControlNet model to apply.")
          }, Z(y(n)("lbl_cn_name", "🧩 ControlNet model")), 9, Mh),
          X(fs, {
            options: T.value,
            "model-value": y(w),
            "onUpdate:modelValue": F[12] || (F[12] = ($) => w.value = $)
          }, null, 8, ["options", "model-value"]),
          X(nt, {
            "model-value": y(D),
            min: 0,
            max: 10,
            step: 0.01,
            label: y(n)("lbl_cn_strength", "💪 Strength"),
            title: y(n)("hrf_cn_strength", "ControlNet strength."),
            "onUpdate:modelValue": F[13] || (F[13] = ($) => D.value = $)
          }, null, 8, ["model-value", "label", "title"])
        ], 64)) : se("", !0)
      ], 64))
    ]));
  }
}), Ih = /* @__PURE__ */ Fe(Lh, [["__scopeId", "data-v-3df9955a"]]), Ah = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ih
}, Symbol.toStringTag, { value: "Module" }));
//# sourceMappingURL=fil_design_imagemind.js.map
