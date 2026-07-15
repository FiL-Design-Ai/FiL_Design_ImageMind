(function(){try{var s=document.createElement("style");s.textContent=".fil-color-picker[data-v-c4d5f476]{display:flex;flex-direction:column;gap:8px;padding:8px;width:176px;box-sizing:border-box}.fil-cp-sv[data-v-c4d5f476]{position:relative;width:100%;height:100px;border-radius:4px;cursor:crosshair;touch-action:none}.fil-cp-sv-white[data-v-c4d5f476]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to right,#fff,#fff0);border-radius:4px}.fil-cp-sv-black[data-v-c4d5f476]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to top,#000,#0000);border-radius:4px}.fil-cp-sv-thumb[data-v-c4d5f476]{position:absolute;width:10px;height:10px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hue[data-v-c4d5f476]{position:relative;width:100%;height:12px;border-radius:6px;background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red);cursor:pointer;touch-action:none}.fil-cp-hue-thumb[data-v-c4d5f476]{position:absolute;top:50%;width:12px;height:12px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hex-row[data-v-c4d5f476]{display:flex;align-items:center;gap:6px}.fil-cp-swatch[data-v-c4d5f476]{width:22px;height:22px;border-radius:4px;border:1px solid rgba(255,255,255,.25);flex-shrink:0}.fil-cp-hex-input[data-v-c4d5f476]{flex:1;min-width:0;height:22px;box-sizing:border-box;border-radius:4px;border:1px solid rgba(255,255,255,.2);background:#00000040;color:#f2f2f2;font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:12px;padding:0 6px;outline:none}.fil-cp-hex-input[data-v-c4d5f476]:focus{border-color:#ffffff80}.fil-cp-presets[data-v-c4d5f476]{display:grid;grid-template-columns:repeat(5,1fr);gap:4px}.fil-color-swatch[data-v-c4d5f476]{width:24px;height:24px;border-radius:4px;border:2px solid transparent;background:var(--swatch);cursor:pointer;transition:border-color .08s,transform .08s;outline:none;box-sizing:border-box}.fil-color-swatch[data-v-c4d5f476]:hover{border-color:#ffffff80;transform:scale(1.15)}.fil-color-swatch.is-active[data-v-c4d5f476]{border-color:#fff;box-shadow:0 0 0 1px var(--swatch)}.fil-icon[data-v-dfb78d9f]{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;line-height:0}.fil-icon[data-v-dfb78d9f] svg{width:100%;height:100%}.fil-node-help-badge[data-v-3001cdba]{position:absolute;top:4px;right:4px;width:20px;height:20px;padding:0;display:flex;align-items:center;justify-content:center;border-radius:50%;border:1px solid rgba(255,255,255,.15);background:#00000040;color:var(--fil-muted, rgba(255, 255, 255, .55));cursor:pointer;outline:none;z-index:5;transition:background .08s,color .08s,border-color .08s}.fil-node-help-badge[data-v-3001cdba]:hover,.fil-node-help-badge[data-v-3001cdba]:focus-visible{background:var(--fil-accent);border-color:var(--fil-accent);color:#fff}.fil-node-shell[data-v-0fbe412b]{position:relative}.fil-modal-backdrop[data-v-00452928]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000;display:flex;align-items:center;justify-content:center;background:#0000008c;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.fil-modal-panel[data-v-00452928]{width:90%;max-height:80vh;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:10px;box-shadow:0 20px 60px #00000080;display:flex;flex-direction:column;overflow:hidden}.fil-modal-header[data-v-00452928]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08)}.fil-modal-title[data-v-00452928]{font-size:14px;font-weight:600;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-close[data-v-00452928]{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;border:none;background:transparent;color:var(--fil-muted, rgba(255, 255, 255, .5));cursor:pointer;transition:background .08s,color .08s}.fil-modal-close[data-v-00452928]:hover{background:#ffffff14;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-body[data-v-00452928]{flex:1;overflow-y:auto;padding:16px}.fil-modal-enter-active[data-v-00452928],.fil-modal-leave-active[data-v-00452928]{transition:opacity .15s ease}.fil-modal-enter-from[data-v-00452928],.fil-modal-leave-to[data-v-00452928]{opacity:0}.fil-modal-enter-active .fil-modal-panel[data-v-00452928],.fil-modal-leave-active .fil-modal-panel[data-v-00452928]{transition:transform .15s ease}.fil-modal-enter-from .fil-modal-panel[data-v-00452928],.fil-modal-leave-to .fil-modal-panel[data-v-00452928]{transform:scale(.95) translateY(8px)}.fil-help-title[data-v-536c1547]{margin:0 0 12px;font-size:16px;font-weight:700;color:var(--fil-text, rgba(255,255,255,.9))}.fil-help-body[data-v-536c1547]{margin:0 0 12px;font-size:13px;line-height:1.6;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet[data-v-536c1547]{display:flex;gap:6px;align-items:flex-start;margin-bottom:6px;font-size:13px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet>span[data-v-536c1547]{flex:1}.fil-help-table[data-v-536c1547]{width:100%;border-collapse:collapse;margin-top:8px;font-size:12px}.fil-help-table th[data-v-536c1547],.fil-help-table td[data-v-536c1547]{text-align:left;padding:6px 10px;border-bottom:1px solid rgba(255,255,255,.06)}.fil-help-table th[data-v-536c1547]{font-weight:600;color:var(--fil-text, rgba(255,255,255,.85))}.fil-help-table td[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.6))}.fil-help-code[data-v-536c1547]{background:#0000004d;border-radius:6px;padding:12px;margin-top:10px;overflow-x:auto;font-size:12px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-empty[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.4));font-size:13px}.fil-toast-stack[data-v-08cc58fa]{position:fixed;right:20px;bottom:20px;z-index:100001;display:flex;flex-direction:column;gap:8px;pointer-events:none;max-width:min(360px,90vw)}.fil-toast[data-v-08cc58fa]{pointer-events:auto;display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:8px;background:var(--fil-panel, #171b22);color:var(--fil-text, #e8edf3);border:1px solid var(--fil-panel-alt, #2a3041);border-left:3px solid var(--toast-color, var(--fil-muted));box-shadow:0 6px 22px #0000006b;font:12.5px/1.45 system-ui,sans-serif;animation:fil-toast-in-08cc58fa .18s cubic-bezier(.2,.7,.3,1)}@keyframes fil-toast-in-08cc58fa{0%{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}.fil-toast-dot[data-v-08cc58fa]{flex:none;width:8px;height:8px;margin-top:4px;border-radius:50%;background:var(--toast-color, var(--fil-muted))}.fil-toast-text[data-v-08cc58fa]{flex:1;min-width:0;align-self:center}.fil-toast-action[data-v-08cc58fa]{flex:none;cursor:pointer;padding:4px 8px;border-radius:4px;background:#ffffff0f;color:inherit;border:none;font:inherit;transition:background .12s}.fil-toast-action[data-v-08cc58fa]:hover{background:#ffffff24}.fil-toast-close[data-v-08cc58fa]{flex:none;align-self:flex-start;cursor:pointer;width:18px;height:18px;padding:0;border:none;background:none;color:var(--fil-muted);opacity:.6;transition:opacity .12s;font-size:16px;line-height:18px}.fil-toast-close[data-v-08cc58fa]:hover{opacity:1}.fil-w-btn[data-v-1fbb19ef]{box-sizing:border-box;padding:8px 10px;border-radius:6px;background:#ffffff0d;border:1px solid rgba(255,255,255,.14);color:var(--fil-text, rgba(255, 255, 255, .85));font-family:ui-sans-serif,system-ui,sans-serif;font-size:12px;cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;display:inline-flex;align-items:center;justify-content:center;gap:6px}.fil-w-btn[data-v-1fbb19ef]:hover:not(:disabled){background:var(--fil-accent);border-color:var(--fil-accent);color:#fff}.fil-w-btn[data-v-1fbb19ef]:active{transform:translateY(1px)}.fil-w-btn[data-v-1fbb19ef]:disabled{opacity:.4;cursor:default}.fil-w-btn-accent[data-v-1fbb19ef]{background:var(--fil-accent);border-color:var(--fil-accent);color:#fff}.fil-w-btn-danger[data-v-1fbb19ef]{color:var(--fil-danger, #ef6666)}.fil-w-btn-danger[data-v-1fbb19ef]:hover:not(:disabled){background:var(--fil-danger, #ef6666);border-color:var(--fil-danger, #ef6666);color:#fff}.fil-w-btn-sm[data-v-1fbb19ef]{padding:4px 8px;font-size:11px}.fil-w-btn-full[data-v-1fbb19ef]{width:100%;display:block}.fil-w-btn-icon[data-v-1fbb19ef]{display:inline-flex;align-items:center;justify-content:center;gap:5px}.fil-w-btn-glyph[data-v-1fbb19ef] svg{width:14px;height:14px}.fil-w-btn.is-flashing[data-v-1fbb19ef],.fil-w-btn.is-flashing[data-v-1fbb19ef]:hover{background:var(--fil-ok, #62c987);border-color:var(--fil-ok, #62c987);color:#fff}.fil-w-btn.is-loading[data-v-1fbb19ef]{cursor:wait}.fil-w-btn[data-v-1fbb19ef]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-btn-spinner[data-v-1fbb19ef]{display:inline-block;width:12px;height:12px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:fil-w-spin-1fbb19ef .6s linear infinite}@keyframes fil-w-spin-1fbb19ef{to{transform:rotate(360deg)}}.fil-pm-root[data-v-0de4d738]{display:flex;flex-direction:column;gap:12px;padding:4px 0}.fil-pm-card[data-v-0de4d738]{background:#ffffff08;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:12px}.fil-pm-header[data-v-0de4d738]{display:flex;align-items:center;gap:8px;margin-bottom:10px}.fil-pm-icon[data-v-0de4d738]{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:6px;background:var(--fil-accent, #7c5cfc);color:#fff;font-size:11px;font-weight:700;font-family:ui-monospace,monospace}.fil-pm-name[data-v-0de4d738]{font-weight:600;font-size:14px;color:var(--fil-text, #f2f2f2)}.fil-pm-disp[data-v-0de4d738]{font-size:11px;color:#ffffff80}.fil-pm-fields[data-v-0de4d738]{display:flex;flex-direction:column;gap:8px;margin-bottom:10px}.fil-pm-field[data-v-0de4d738]{display:flex;flex-direction:column;gap:3px}.fil-pm-field-label[data-v-0de4d738]{font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#ffffff80}.fil-pm-input[data-v-0de4d738]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,monospace;font-size:13px;outline:none;transition:border-color .08s}.fil-pm-input[data-v-0de4d738]:focus{border-color:var(--fil-accent)}.fil-pm-input.fil-pm-has-val[data-v-0de4d738]{border-color:var(--fil-muted, #555)}.fil-pm-actions[data-v-0de4d738]{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}.fil-pm-models[data-v-0de4d738]{display:flex;flex-wrap:wrap;gap:4px}.fil-pm-model-tag[data-v-0de4d738]{display:inline-flex;align-items:center;gap:3px;background:#ffffff12;border-radius:4px;padding:2px 6px;font-size:11px;color:#ffffffbf;white-space:nowrap}.fil-pm-vision-badge[data-v-0de4d738]{font-size:10px;line-height:1}.fil-pm-err[data-v-0de4d738]{font-size:11px;color:var(--fil-danger, #ef6666);margin-top:4px}.fil-pm-age[data-v-0de4d738]{font-size:10px;color:#fff6;align-self:center}.fil-w-info[data-v-851660c1]{font-size:11px;line-height:1.5;color:#ffffff73;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.fil-w-info[data-ok][data-v-851660c1]{color:var(--fil-ok, #62c987)}.fil-w-info[data-err][data-v-851660c1]{color:var(--fil-danger, #ef6666)}.fil-seed-root[data-v-145a44ff]{display:flex;flex-direction:column;gap:8px;padding:8px;color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-seed-readout[data-v-145a44ff]{display:flex;flex-direction:column;gap:4px}.fil-seed-display[data-v-145a44ff]{width:100%;box-sizing:border-box;height:42px;background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);padding:9px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:19px;text-align:center;outline:none;transition:border-color .08s}.fil-seed-display[data-v-145a44ff]:focus{border-color:var(--fil-accent)}.fil-seed-display[readonly][data-v-145a44ff]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-seed-actions[data-v-145a44ff]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px}.fil-combo[data-v-39d4212e]{display:flex;flex-direction:column;gap:4px;width:100%}.fil-combo-label[data-v-39d4212e]{font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-combo-trigger[data-v-39d4212e]{width:100%;box-sizing:border-box;height:30px;display:flex;align-items:center;gap:6px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer;text-align:left;-moz-appearance:none;appearance:none;-webkit-appearance:none}.fil-combo-trigger.open[data-v-39d4212e],.fil-combo-trigger[data-v-39d4212e]:focus-visible{border-color:var(--fil-accent);outline:2px solid var(--fil-accent);outline-offset:1px}.fil-combo-trigger.disabled[data-v-39d4212e]{opacity:.5;cursor:default}.fil-combo-trigger-label[data-v-39d4212e]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-chevron[data-v-39d4212e]{font-size:9px;color:var(--fil-muted, rgba(255, 255, 255, .5));flex-shrink:0}.fil-combo-badge[data-v-39d4212e]{flex-shrink:0;font-size:9px;line-height:1;padding:2px 5px;border-radius:999px;background:var(--fil-accent);color:#fff;font-weight:600}.fil-combo-panel[data-v-39d4212e]{position:fixed;z-index:10001;box-sizing:border-box;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:8px;box-shadow:0 12px 32px #0006;display:flex;flex-direction:column;overflow:hidden;padding:6px}.fil-combo-search[data-v-39d4212e]{box-sizing:border-box;width:100%;margin-bottom:6px;padding:6px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-combo-search[data-v-39d4212e]:focus{border-color:var(--fil-accent)}.fil-combo-list[data-v-39d4212e]{display:flex;flex-direction:column;gap:2px;max-height:240px;overflow-y:auto}.fil-combo-option[data-v-39d4212e]{display:flex;align-items:center;gap:6px;width:100%;box-sizing:border-box;padding:6px 8px;border-radius:5px;border:none;background:transparent;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;text-align:left;cursor:pointer;outline:none}.fil-combo-option.active[data-v-39d4212e]{background:#ffffff14}.fil-combo-option.selected[data-v-39d4212e]{color:var(--fil-accent);font-weight:600}.fil-combo-option-label[data-v-39d4212e]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-empty[data-v-39d4212e]{padding:10px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-w-num[data-v-b9154493]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:14px;text-align:left;outline:none;transition:border-color .08s}.fil-w-num[data-v-b9154493]:focus{border-color:var(--fil-accent)}.fil-w-num[data-v-b9154493]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-num[data-v-b9154493]:disabled{opacity:.5}.fil-w-slider[data-v-b98a8a08]{display:flex;flex-direction:column;gap:4px;width:100%}.fil-w-slider-label[data-v-b98a8a08]{font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-slider-row[data-v-b98a8a08]{display:flex;align-items:center;gap:6px}.fil-w-slider-range[data-v-b98a8a08]{flex:1;accent-color:var(--fil-accent);cursor:pointer}.fil-w-slider-range[data-v-b98a8a08]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-slider-row[data-v-b98a8a08] .fil-w-num{width:70px;flex:none}.fil-provider-root[data-v-b25920b2]{display:flex;flex-direction:column;gap:6px;padding:8px;color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;min-width:0}.fil-w-label[data-v-b25920b2]{font-size:10px;color:var(--fil-muted, rgba(255,255,255,.55));margin-top:2px}.fil-provider-row[data-v-b25920b2]{display:flex;gap:4px;align-items:stretch;min-width:0}.fil-provider-row[data-v-b25920b2] .fil-combo{flex:1;min-width:0}.fil-model-filter-bar[data-v-b25920b2]{display:flex;align-items:center;gap:4px;min-width:0}.fil-model-filter-wrap[data-v-b25920b2]{flex:1;min-width:0}.fil-model-filter[data-v-b25920b2]{width:100%;box-sizing:border-box;height:24px;background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);padding:2px 6px;color:var(--fil-text, #e8edf3);font-family:inherit;font-size:11px;outline:none}.fil-model-filter[data-v-b25920b2]:focus{border-color:var(--fil-accent)}.fil-model-count[data-v-b25920b2]{font-size:9px;color:var(--fil-muted, rgba(255,255,255,.45));white-space:nowrap;flex-shrink:0}.fil-w-chips[data-v-3c07d909]{display:grid;gap:5px;width:100%}.fil-w-chip[data-v-3c07d909]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-3c07d909]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-3c07d909]{background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-accent);border-color:var(--fil-accent);font-weight:500;box-shadow:0 0 8px color-mix(in srgb,var(--fil-accent) 55%,transparent)}.fil-w-chip.disabled[data-v-3c07d909]{opacity:.5;cursor:default}.fil-w-chip[data-v-3c07d909]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chiplist[data-v-8b6ca087]{display:flex;flex-direction:column;gap:5px;width:100%}.fil-w-search[data-v-8b6ca087]{box-sizing:border-box;width:100%;padding:5px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:11px;outline:none}.fil-w-search[data-v-8b6ca087]:focus{border-color:var(--fil-accent)}.fil-w-search[data-v-8b6ca087]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-chip-scroll[data-v-8b6ca087]{display:grid;gap:3px;max-height:200px;overflow-y:auto;overflow-x:hidden;padding-right:2px}.fil-w-chip-scroll[data-v-8b6ca087]::-webkit-scrollbar{width:5px}.fil-w-chip-scroll[data-v-8b6ca087]::-webkit-scrollbar-thumb{background:var(--fil-muted, #555);border-radius:3px}.fil-w-chip-scroll[data-v-8b6ca087]::-webkit-scrollbar-track{background:transparent}.fil-w-chip[data-v-8b6ca087]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-8b6ca087]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-8b6ca087]{background:var(--fil-accent);color:#fff;border-color:var(--fil-accent);font-weight:500}.fil-w-chip.disabled[data-v-8b6ca087]{opacity:.5;cursor:default}.fil-w-chip[data-v-8b6ca087]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chip-empty[data-v-8b6ca087]{padding:8px;text-align:center;color:var(--fil-muted, #666);font-size:11px}.fil-w-segmented[data-v-163eefcf]{display:flex;flex-direction:column;gap:4px;width:100%}.fil-w-segmented-label[data-v-163eefcf]{font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-pill[data-v-163eefcf]{display:flex;gap:0;background:#ffffff0f;border-radius:7px;padding:3px}.fil-w-pill.disabled[data-v-163eefcf]{opacity:.5}.fil-w-seg[data-v-163eefcf]{flex:1;text-align:center;padding:6px;border:none;border-radius:5px;background:transparent;font-family:inherit;font-size:12px;color:var(--fil-muted, rgba(255, 255, 255, .55));cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s}.fil-w-seg[data-v-163eefcf]:hover:not(.active){color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-w-seg.active[data-v-163eefcf]{background:var(--fil-accent);color:#fff;font-weight:500}.fil-w-seg[data-v-163eefcf]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-section[data-v-2b21d5b8]{box-sizing:border-box;width:100%;padding:6px 10px;border:none;border-radius:5px;background:#ffffff0a;color:var(--fil-muted, rgba(255, 255, 255, .7));font-family:inherit;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;cursor:pointer;text-align:left;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s;display:flex;align-items:center;gap:6px}.fil-w-section[data-v-2b21d5b8]:hover:not(:disabled){background:#ffffff14;color:#fff}.fil-w-section[data-v-2b21d5b8]:disabled{cursor:default}.fil-w-section[data-v-2b21d5b8]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-section-arrow[data-v-2b21d5b8]{display:inline-block;width:8px;font-size:9px;color:var(--fil-accent)}.fil-style-picker[data-v-6e196d1e]{display:flex;flex-direction:column;gap:10px}.fil-style-cats[data-v-6e196d1e]{display:flex;flex-wrap:wrap;gap:6px}.fil-style-cat[data-v-6e196d1e]{box-sizing:border-box;padding:5px 10px;border-radius:999px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .2));background:#ffffff0a;color:var(--fil-text, rgba(255, 255, 255, .8));font-size:11px;cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-cat[data-v-6e196d1e]:hover{border-color:var(--fil-accent)}.fil-style-cat.active[data-v-6e196d1e]{background:var(--fil-accent);border-color:var(--fil-accent);color:#fff;font-weight:500}.fil-style-cat[data-v-6e196d1e]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-style-search[data-v-6e196d1e]{box-sizing:border-box;width:100%;padding:7px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-style-search[data-v-6e196d1e]:focus{border-color:var(--fil-accent)}.fil-style-grid[data-v-6e196d1e]{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:8px;max-height:50vh;overflow-y:auto;padding-right:2px}.fil-style-tile[data-v-6e196d1e]{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px 6px;border-radius:8px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .14));background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-tile[data-v-6e196d1e]:hover{border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-style-tile.active[data-v-6e196d1e]{border-color:var(--fil-accent);background:#f68a4524}.fil-style-tile[data-v-6e196d1e]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-style-tile-preview[data-v-6e196d1e]{width:100%;aspect-ratio:1;border-radius:6px;background:#ffffff0d;display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:22px}.fil-style-tile-img[data-v-6e196d1e]{width:100%;height:100%;object-fit:cover}.fil-style-tile-label[data-v-6e196d1e]{font-size:10px;text-align:center;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.fil-style-empty[data-v-6e196d1e]{grid-column:1 / -1;padding:20px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-scanner-root[data-v-8fab16c2]{display:flex;flex-direction:column;gap:6px;padding:8px;color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;width:100%;box-sizing:border-box;min-width:0}.fil-section-block[data-v-8fab16c2]{display:flex;flex-direction:column;gap:6px;min-width:0}.fil-w-row[data-v-8fab16c2]{display:flex;flex-direction:column;gap:3px;min-width:0}.fil-w-textarea[data-v-8fab16c2],.fil-w-input[data-v-8fab16c2]{width:100%;box-sizing:border-box;background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);color:var(--fil-text, #a0c4ff);padding:8px 10px;font-size:12px;font-family:inherit;outline:none;transition:border-color .08s}.fil-w-textarea[data-v-8fab16c2]{min-height:56px;resize:vertical}.fil-w-textarea[data-v-8fab16c2]:focus,.fil-w-input[data-v-8fab16c2]:focus{border-color:var(--fil-accent)}.fil-style-pair-row[data-v-8fab16c2]{display:flex;gap:4px;min-width:0}.fil-style-pair-item[data-v-8fab16c2]{flex:1;min-width:0}.fil-scanner-seed[data-v-8fab16c2]{display:flex;flex-direction:column;gap:4px;padding-top:3px;border-top:1px solid rgba(255,255,255,.08);min-width:0}.fil-scanner-seed-row[data-v-8fab16c2]{display:flex;gap:6px;min-width:0}.fil-scanner-seed-field[data-v-8fab16c2]{flex:1.3;min-width:0;box-sizing:border-box;height:34px;background:#00000059;border:1px solid rgba(255,255,255,.08);border-radius:var(--fil-pill-radius);padding:0 12px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:13px;text-align:center;outline:none;transition:border-color .08s}.fil-scanner-seed-field[data-v-8fab16c2]:focus{border-color:var(--fil-accent)}.fil-scanner-seed-field.is-random[data-v-8fab16c2]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-scanner-seed-pill[data-v-8fab16c2]{flex:1;min-width:0;box-sizing:border-box;height:34px;padding:0 8px;border-radius:var(--fil-pill-radius);border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-text, #e8edf3);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-scanner-seed-pill[data-v-8fab16c2]:hover{background:#ffffff1f}.fil-scanner-seed-pill.active[data-v-8fab16c2]{background:#ffffff29;border-color:#fff3}.fil-scanner-seed-pill[data-v-8fab16c2]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-scanner-seed-pill-accent[data-v-8fab16c2]{background:var(--fil-accent);border-color:var(--fil-accent);color:#241206;font-weight:700}.fil-scanner-seed-pill-accent[data-v-8fab16c2]:hover{filter:brightness(1.08);background:var(--fil-accent)}.fil-cleaner-root[data-v-33434119]{display:flex;flex-direction:column;gap:5px;padding:8px;color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cleaner-row[data-v-33434119]{all:unset;box-sizing:border-box;display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:var(--fil-field-radius);border:1px solid var(--fil-glass-border);background:var(--fil-glass-bg);cursor:pointer;-webkit-user-select:none;user-select:none;transition:background .08s,border-color .08s}.fil-cleaner-row[data-v-33434119]:hover{background:#ffffff14}.fil-cleaner-row.active[data-v-33434119]{border-color:var(--fil-accent);background:#f68a451f}.fil-cleaner-dot[data-v-33434119]{width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,.3);flex:none;transition:border-color .08s,background .08s;display:flex;align-items:center;justify-content:center}.fil-cleaner-dot[data-v-33434119]:after{content:\"✓\";font-size:10px;line-height:1;color:#fff;opacity:0;transition:opacity .08s}.fil-cleaner-row.active .fil-cleaner-dot[data-v-33434119]{background:var(--fil-accent);border-color:var(--fil-accent)}.fil-cleaner-row.active .fil-cleaner-dot[data-v-33434119]:after{opacity:1}.fil-cleaner-label[data-v-33434119]{flex:1;font-size:12px}.fil-cmp-root[data-v-c371e5b6]{display:flex;flex-direction:column;gap:8px;padding:8px;color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cmp-canvas-wrap[data-v-c371e5b6]{position:relative;width:100%;height:220px;border-radius:var(--fil-field-radius);border:1px solid var(--fil-glass-border);overflow:hidden;background:linear-gradient(45deg,rgba(255,255,255,.04) 25%,transparent 25%,transparent 75%,rgba(255,255,255,.04) 75%) 0 0/16px 16px,linear-gradient(45deg,rgba(255,255,255,.04) 25%,transparent 25%,transparent 75%,rgba(255,255,255,.04) 75%) 8px 8px/16px 16px,#0d0f13}.fil-cmp-canvas[data-v-c371e5b6]{display:block;width:100%;height:100%;touch-action:none}.fil-cmp-canvas.is-wipe[data-v-c371e5b6]{cursor:ew-resize}.fil-cmp-placeholder[data-v-c371e5b6]{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;text-align:center;padding:12px;color:var(--fil-muted, rgba(255, 255, 255, .5));font-size:12px;pointer-events:none}.fil-cmp-save-row[data-v-c371e5b6]{display:grid;grid-template-columns:1fr 1fr;gap:6px}.fil-cmp-settings[data-v-c371e5b6]{display:flex;flex-direction:column;gap:8px}.fil-up-root[data-v-d6c5b7d2]{display:flex;flex-direction:column;gap:8px;padding:8px;color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-up-row[data-v-d6c5b7d2]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(48px,1fr) minmax(auto,max-content) minmax(48px,1fr);align-items:center;gap:6px}.fil-w-label[data-v-d6c5b7d2]{font-size:11px;color:var(--fil-muted, rgba(255,255,255,.55))}.fil-w-select[data-v-bf2ff33c]{display:flex;flex-direction:column;gap:4px;width:100%}.fil-w-select-label[data-v-bf2ff33c]{font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-select-input[data-v-bf2ff33c]{width:100%;box-sizing:border-box;height:30px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer}.fil-w-select-input[data-v-bf2ff33c]:focus{border-color:var(--fil-accent)}.fil-w-select-input[data-v-bf2ff33c]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-select-input[data-v-bf2ff33c]:disabled{opacity:.5;cursor:default}.fil-ks-root[data-v-7abcffc4]{display:flex;flex-direction:column;gap:8px;padding:8px;color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-ks-row[data-v-7abcffc4]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(48px,1fr) minmax(auto,max-content) minmax(48px,1fr);align-items:center;gap:6px}.fil-w-label[data-v-7abcffc4]{font-size:11px;color:var(--fil-muted, rgba(255,255,255,.55))}.fil-hrf-root[data-v-ece701fe]{display:flex;flex-direction:column;gap:8px;padding:8px;color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-hrf-row[data-v-ece701fe]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(48px,1fr) minmax(auto,max-content) minmax(48px,1fr);align-items:center;gap:6px}.fil-w-label[data-v-ece701fe]{font-size:11px;color:var(--fil-muted, rgba(255,255,255,.55))}\n";document.head.appendChild(s);}catch(e){}})();
import { app as oi } from "/scripts/app.js";
/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Vo(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Se = {}, hn = [], bt = () => {
}, li = () => !1, Os = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ps = (e) => e.startsWith("onUpdate:"), Te = Object.assign, Bo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ha = Object.prototype.hasOwnProperty, be = (e, t) => Ha.call(e, t), te = Array.isArray, gn = (e) => ts(e) === "[object Map]", Rs = (e) => ts(e) === "[object Set]", ol = (e) => ts(e) === "[object Date]", ce = (e) => typeof e == "function", Me = (e) => typeof e == "string", Ze = (e) => typeof e == "symbol", _e = (e) => e !== null && typeof e == "object", ii = (e) => (_e(e) || ce(e)) && ce(e.then) && ce(e.catch), ai = Object.prototype.toString, ts = (e) => ai.call(e), ja = (e) => ts(e).slice(8, -1), ri = (e) => ts(e) === "[object Object]", Ns = (e) => Me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Rn = /* @__PURE__ */ Vo(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), $s = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Wa = /-\w/g, ze = $s(
  (e) => e.replace(Wa, (t) => t.slice(1).toUpperCase())
), Ka = /\B([A-Z])/g, Bt = $s(
  (e) => e.replace(Ka, "-$1").toLowerCase()
), Vs = $s((e) => e.charAt(0).toUpperCase() + e.slice(1)), eo = $s(
  (e) => e ? `on${Vs(e)}` : ""
), gt = (e, t) => !Object.is(e, t), hs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ci = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Bs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, za = (e) => {
  const t = Me(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ll;
const Us = () => ll || (ll = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ke(e) {
  if (te(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = Me(s) ? Ya(s) : Ke(s);
      if (o)
        for (const l in o)
          t[l] = o[l];
    }
    return t;
  } else if (Me(e) || _e(e))
    return e;
}
const Ga = /;(?![^(]*\))/g, qa = /:([^]+)/, Xa = /\/\*[^]*?\*\//g;
function Ya(e) {
  const t = {};
  return e.replace(Xa, "").split(Ga).forEach((n) => {
    if (n) {
      const s = n.split(qa);
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
  else if (_e(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ja = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Qa = /* @__PURE__ */ Vo(Ja);
function ui(e) {
  return !!e || e === "";
}
function Za(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = ns(e[s], t[s]);
  return n;
}
function ns(e, t) {
  if (e === t) return !0;
  let n = ol(e), s = ol(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Ze(e), s = Ze(t), n || s)
    return e === t;
  if (n = te(e), s = te(t), n || s)
    return n && s ? Za(e, t) : !1;
  if (n = _e(e), s = _e(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, l = Object.keys(t).length;
    if (o !== l)
      return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i), r = t.hasOwnProperty(i);
      if (a && !r || !a && r || !ns(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function er(e, t) {
  return e.findIndex((n) => ns(n, t));
}
const di = (e) => !!(e && e.__v_isRef === !0), Q = (e) => Me(e) ? e : e == null ? "" : te(e) || _e(e) && (e.toString === ai || !ce(e.toString)) ? di(e) ? Q(e.value) : JSON.stringify(e, fi, 2) : String(e), fi = (e, t) => di(t) ? fi(e, t.value) : gn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], l) => (n[to(s, l) + " =>"] = o, n),
    {}
  )
} : Rs(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => to(n))
} : Ze(t) ? to(t) : _e(t) && !te(t) && !ri(t) ? String(t) : t, to = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ze(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ee;
class pi {
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
function mi(e) {
  return new pi(e);
}
function hi() {
  return Ee;
}
function tr(e, t = !1) {
  Ee && Ee.cleanups.push(e);
}
let Fe;
const no = /* @__PURE__ */ new WeakSet();
class gi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ee && (Ee.active ? Ee.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, no.has(this) && (no.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || bi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, il(this), vi(this);
    const t = Fe, n = at;
    Fe = this, at = !0;
    try {
      return this.fn();
    } finally {
      yi(this), Fe = t, at = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        jo(t);
      this.deps = this.depsTail = void 0, il(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? no.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    vo(this) && this.run();
  }
  get dirty() {
    return vo(this);
  }
}
let _i = 0, Nn, $n;
function bi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = $n, $n = e;
    return;
  }
  e.next = Nn, Nn = e;
}
function Uo() {
  _i++;
}
function Ho() {
  if (--_i > 0)
    return;
  if ($n) {
    let t = $n;
    for ($n = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Nn; ) {
    let t = Nn;
    for (Nn = void 0; t; ) {
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
function vi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function yi(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), jo(s), nr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function vo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (wi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function wi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Gn) || (e.globalVersion = Gn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !vo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Fe, s = at;
  Fe = e, at = !0;
  try {
    vi(e);
    const o = e.fn(e._value);
    (t.version === 0 || gt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Fe = n, at = s, yi(e), e.flags &= -3;
  }
}
function jo(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let l = n.computed.deps; l; l = l.nextDep)
      jo(l, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function nr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let at = !0;
const xi = [];
function wt() {
  xi.push(at), at = !1;
}
function xt() {
  const e = xi.pop();
  at = e === void 0 ? !0 : e;
}
function il(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Fe;
    Fe = void 0;
    try {
      t();
    } finally {
      Fe = n;
    }
  }
}
let Gn = 0;
class sr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Wo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Fe || !at || Fe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Fe)
      n = this.activeLink = new sr(Fe, this), Fe.deps ? (n.prevDep = Fe.depsTail, Fe.depsTail.nextDep = n, Fe.depsTail = n) : Fe.deps = Fe.depsTail = n, Si(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Fe.depsTail, n.nextDep = void 0, Fe.depsTail.nextDep = n, Fe.depsTail = n, Fe.deps === n && (Fe.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Gn++, this.notify(t);
  }
  notify(t) {
    Uo();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ho();
    }
  }
}
function Si(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Si(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const vs = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ Symbol(
  ""
), yo = /* @__PURE__ */ Symbol(
  ""
), qn = /* @__PURE__ */ Symbol(
  ""
);
function Ve(e, t, n) {
  if (at && Fe) {
    let s = vs.get(e);
    s || vs.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Wo()), o.map = s, o.key = n), o.track();
  }
}
function At(e, t, n, s, o, l) {
  const i = vs.get(e);
  if (!i) {
    Gn++;
    return;
  }
  const a = (r) => {
    r && r.trigger();
  };
  if (Uo(), t === "clear")
    i.forEach(a);
  else {
    const r = te(e), u = r && Ns(n);
    if (r && n === "length") {
      const c = Number(s);
      i.forEach((d, f) => {
        (f === "length" || f === qn || !Ze(f) && f >= c) && a(d);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(qn)), t) {
        case "add":
          r ? u && a(i.get("length")) : (a(i.get(on)), gn(e) && a(i.get(yo)));
          break;
        case "delete":
          r || (a(i.get(on)), gn(e) && a(i.get(yo)));
          break;
        case "set":
          gn(e) && a(i.get(on));
          break;
      }
  }
  Ho();
}
function or(e, t) {
  const n = vs.get(e);
  return n && n.get(t);
}
function fn(e) {
  const t = /* @__PURE__ */ pe(e);
  return t === e ? t : (Ve(t, "iterate", qn), /* @__PURE__ */ Qe(e) ? t : t.map(rt));
}
function Hs(e) {
  return Ve(e = /* @__PURE__ */ pe(e), "iterate", qn), e;
}
function mt(e, t) {
  return /* @__PURE__ */ kt(e) ? yn(/* @__PURE__ */ vt(e) ? rt(t) : t) : rt(t);
}
const lr = {
  __proto__: null,
  [Symbol.iterator]() {
    return so(this, Symbol.iterator, (e) => mt(this, e));
  },
  concat(...e) {
    return fn(this).concat(
      ...e.map((t) => te(t) ? fn(t) : t)
    );
  },
  entries() {
    return so(this, "entries", (e) => (e[1] = mt(this, e[1]), e));
  },
  every(e, t) {
    return Ct(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ct(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => mt(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Ct(
      this,
      "find",
      e,
      t,
      (n) => mt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ct(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ct(
      this,
      "findLast",
      e,
      t,
      (n) => mt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ct(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ct(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return oo(this, "includes", e);
  },
  indexOf(...e) {
    return oo(this, "indexOf", e);
  },
  join(e) {
    return fn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return oo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ct(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Mn(this, "pop");
  },
  push(...e) {
    return Mn(this, "push", e);
  },
  reduce(e, ...t) {
    return al(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return al(this, "reduceRight", e, t);
  },
  shift() {
    return Mn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ct(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Mn(this, "splice", e);
  },
  toReversed() {
    return fn(this).toReversed();
  },
  toSorted(e) {
    return fn(this).toSorted(e);
  },
  toSpliced(...e) {
    return fn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Mn(this, "unshift", e);
  },
  values() {
    return so(this, "values", (e) => mt(this, e));
  }
};
function so(e, t, n) {
  const s = Hs(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ Qe(e) && (o._next = o.next, o.next = () => {
    const l = o._next();
    return l.done || (l.value = n(l.value)), l;
  }), o;
}
const ir = Array.prototype;
function Ct(e, t, n, s, o, l) {
  const i = Hs(e), a = i !== e && !/* @__PURE__ */ Qe(e), r = i[t];
  if (r !== ir[t]) {
    const d = r.apply(e, l);
    return a ? rt(d) : d;
  }
  let u = n;
  i !== e && (a ? u = function(d, f) {
    return n.call(this, mt(e, d), f, e);
  } : n.length > 2 && (u = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const c = r.call(i, u, s);
  return a && o ? o(c) : c;
}
function al(e, t, n, s) {
  const o = Hs(e), l = o !== e && !/* @__PURE__ */ Qe(e);
  let i = n, a = !1;
  o !== e && (l ? (a = s.length === 0, i = function(u, c, d) {
    return a && (a = !1, u = mt(e, u)), n.call(this, u, mt(e, c), d, e);
  }) : n.length > 3 && (i = function(u, c, d) {
    return n.call(this, u, c, d, e);
  }));
  const r = o[t](i, ...s);
  return a ? mt(e, r) : r;
}
function oo(e, t, n) {
  const s = /* @__PURE__ */ pe(e);
  Ve(s, "iterate", qn);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ js(n[0]) ? (n[0] = /* @__PURE__ */ pe(n[0]), s[t](...n)) : o;
}
function Mn(e, t, n = []) {
  wt(), Uo();
  const s = (/* @__PURE__ */ pe(e))[t].apply(e, n);
  return Ho(), xt(), s;
}
const ar = /* @__PURE__ */ Vo("__proto__,__v_isRef,__isVue"), Ci = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ze)
);
function rr(e) {
  Ze(e) || (e = String(e));
  const t = /* @__PURE__ */ pe(this);
  return Ve(t, "has", e), t.hasOwnProperty(e);
}
class Fi {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, l = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return l;
    if (n === "__v_raw")
      return s === (o ? l ? br : Ai : l ? Ii : Li).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = te(t);
    if (!o) {
      let r;
      if (i && (r = lr[n]))
        return r;
      if (n === "hasOwnProperty")
        return rr;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ge(t) ? t : s
    );
    if ((Ze(n) ? Ci.has(n) : ar(n)) || (o || Ve(t, "get", n), l))
      return a;
    if (/* @__PURE__ */ ge(a)) {
      const r = i && Ns(n) ? a : a.value;
      return o && _e(r) ? /* @__PURE__ */ ys(r) : r;
    }
    return _e(a) ? o ? /* @__PURE__ */ ys(a) : /* @__PURE__ */ cn(a) : a;
  }
}
class Mi extends Fi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let l = t[n];
    const i = te(t) && Ns(n);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ kt(l);
      if (!/* @__PURE__ */ Qe(s) && !/* @__PURE__ */ kt(s) && (l = /* @__PURE__ */ pe(l), s = /* @__PURE__ */ pe(s)), !i && /* @__PURE__ */ ge(l) && !/* @__PURE__ */ ge(s))
        return u || (l.value = s), !0;
    }
    const a = i ? Number(n) < t.length : be(t, n), r = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ge(t) ? t : o
    );
    return t === /* @__PURE__ */ pe(o) && r && (a ? gt(s, l) && At(t, "set", n, s) : At(t, "add", n, s)), r;
  }
  deleteProperty(t, n) {
    const s = be(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && At(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ze(n) || !Ci.has(n)) && Ve(t, "has", n), s;
  }
  ownKeys(t) {
    return Ve(
      t,
      "iterate",
      te(t) ? "length" : on
    ), Reflect.ownKeys(t);
  }
}
class cr extends Fi {
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
const ur = /* @__PURE__ */ new Mi(), dr = /* @__PURE__ */ new cr(), fr = /* @__PURE__ */ new Mi(!0);
const wo = (e) => e, as = (e) => Reflect.getPrototypeOf(e);
function pr(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, l = /* @__PURE__ */ pe(o), i = gn(l), a = e === "entries" || e === Symbol.iterator && i, r = e === "keys" && i, u = o[e](...s), c = n ? wo : t ? yn : rt;
    return !t && Ve(
      l,
      "iterate",
      r ? yo : on
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
function rs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function mr(e, t) {
  const n = {
    get(o) {
      const l = this.__v_raw, i = /* @__PURE__ */ pe(l), a = /* @__PURE__ */ pe(o);
      e || (gt(o, a) && Ve(i, "get", o), Ve(i, "get", a));
      const { has: r } = as(i), u = t ? wo : e ? yn : rt;
      if (r.call(i, o))
        return u(l.get(o));
      if (r.call(i, a))
        return u(l.get(a));
      l !== i && l.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Ve(/* @__PURE__ */ pe(o), "iterate", on), o.size;
    },
    has(o) {
      const l = this.__v_raw, i = /* @__PURE__ */ pe(l), a = /* @__PURE__ */ pe(o);
      return e || (gt(o, a) && Ve(i, "has", o), Ve(i, "has", a)), o === a ? l.has(o) : l.has(o) || l.has(a);
    },
    forEach(o, l) {
      const i = this, a = i.__v_raw, r = /* @__PURE__ */ pe(a), u = t ? wo : e ? yn : rt;
      return !e && Ve(r, "iterate", on), a.forEach((c, d) => o.call(l, u(c), u(d), i));
    }
  };
  return Te(
    n,
    e ? {
      add: rs("add"),
      set: rs("set"),
      delete: rs("delete"),
      clear: rs("clear")
    } : {
      add(o) {
        const l = /* @__PURE__ */ pe(this), i = as(l), a = /* @__PURE__ */ pe(o), r = !t && !/* @__PURE__ */ Qe(o) && !/* @__PURE__ */ kt(o) ? a : o;
        return i.has.call(l, r) || gt(o, r) && i.has.call(l, o) || gt(a, r) && i.has.call(l, a) || (l.add(r), At(l, "add", r, r)), this;
      },
      set(o, l) {
        !t && !/* @__PURE__ */ Qe(l) && !/* @__PURE__ */ kt(l) && (l = /* @__PURE__ */ pe(l));
        const i = /* @__PURE__ */ pe(this), { has: a, get: r } = as(i);
        let u = a.call(i, o);
        u || (o = /* @__PURE__ */ pe(o), u = a.call(i, o));
        const c = r.call(i, o);
        return i.set(o, l), u ? gt(l, c) && At(i, "set", o, l) : At(i, "add", o, l), this;
      },
      delete(o) {
        const l = /* @__PURE__ */ pe(this), { has: i, get: a } = as(l);
        let r = i.call(l, o);
        r || (o = /* @__PURE__ */ pe(o), r = i.call(l, o)), a && a.call(l, o);
        const u = l.delete(o);
        return r && At(l, "delete", o, void 0), u;
      },
      clear() {
        const o = /* @__PURE__ */ pe(this), l = o.size !== 0, i = o.clear();
        return l && At(
          o,
          "clear",
          void 0,
          void 0
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = pr(o, e, t);
  }), n;
}
function Ko(e, t) {
  const n = mr(e, t);
  return (s, o, l) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    be(n, o) && o in s ? n : s,
    o,
    l
  );
}
const hr = {
  get: /* @__PURE__ */ Ko(!1, !1)
}, gr = {
  get: /* @__PURE__ */ Ko(!1, !0)
}, _r = {
  get: /* @__PURE__ */ Ko(!0, !1)
};
const Li = /* @__PURE__ */ new WeakMap(), Ii = /* @__PURE__ */ new WeakMap(), Ai = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap();
function vr(e) {
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
function cn(e) {
  return /* @__PURE__ */ kt(e) ? e : zo(
    e,
    !1,
    ur,
    hr,
    Li
  );
}
// @__NO_SIDE_EFFECTS__
function yr(e) {
  return zo(
    e,
    !1,
    fr,
    gr,
    Ii
  );
}
// @__NO_SIDE_EFFECTS__
function ys(e) {
  return zo(
    e,
    !0,
    dr,
    _r,
    Ai
  );
}
function zo(e, t, n, s, o) {
  if (!_e(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const l = o.get(e);
  if (l)
    return l;
  const i = vr(ja(e));
  if (i === 0)
    return e;
  const a = new Proxy(
    e,
    i === 2 ? s : n
  );
  return o.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function vt(e) {
  return /* @__PURE__ */ kt(e) ? /* @__PURE__ */ vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function kt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function js(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ pe(t) : e;
}
function Go(e) {
  return !be(e, "__v_skip") && Object.isExtensible(e) && ci(e, "__v_skip", !0), e;
}
const rt = (e) => _e(e) ? /* @__PURE__ */ cn(e) : e, yn = (e) => _e(e) ? /* @__PURE__ */ ys(e) : e;
// @__NO_SIDE_EFFECTS__
function ge(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function re(e) {
  return wr(e, !1);
}
function wr(e, t) {
  return /* @__PURE__ */ ge(e) ? e : new xr(e, t);
}
class xr {
  constructor(t, n) {
    this.dep = new Wo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ pe(t), this._value = n ? t : rt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Qe(t) || /* @__PURE__ */ kt(t);
    t = s ? t : /* @__PURE__ */ pe(t), gt(t, n) && (this._rawValue = t, this._value = s ? t : rt(t), this.dep.trigger());
  }
}
function b(e) {
  return /* @__PURE__ */ ge(e) ? e.value : e;
}
const Sr = {
  get: (e, t, n) => t === "__v_raw" ? e : b(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ ge(o) && !/* @__PURE__ */ ge(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Di(e) {
  return /* @__PURE__ */ vt(e) ? e : new Proxy(e, Sr);
}
// @__NO_SIDE_EFFECTS__
function Cr(e) {
  const t = te(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = ki(e, n);
  return t;
}
class Fr {
  constructor(t, n, s) {
    this._object = t, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._key = Ze(n) ? n : String(n), this._raw = /* @__PURE__ */ pe(t);
    let o = !0, l = t;
    if (!te(t) || Ze(this._key) || !Ns(this._key))
      do
        o = !/* @__PURE__ */ js(l) || /* @__PURE__ */ Qe(l);
      while (o && (l = l.__v_raw));
    this._shallow = o;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = b(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ ge(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ ge(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return or(this._raw, this._key);
  }
}
class Mr {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
// @__NO_SIDE_EFFECTS__
function Lr(e, t, n) {
  return /* @__PURE__ */ ge(e) ? e : ce(e) ? new Mr(e) : _e(e) && arguments.length > 1 ? ki(e, t, n) : /* @__PURE__ */ re(e);
}
function ki(e, t, n) {
  return new Fr(e, t, n);
}
class Ir {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Wo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Gn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Fe !== this)
      return bi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return wi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ar(e, t, n = !1) {
  let s, o;
  return ce(e) ? s = e : (s = e.get, o = e.set), new Ir(s, o, n);
}
const cs = {}, ws = /* @__PURE__ */ new WeakMap();
let Jt;
function Dr(e, t = !1, n = Jt) {
  if (n) {
    let s = ws.get(n);
    s || ws.set(n, s = []), s.push(e);
  }
}
function kr(e, t, n = Se) {
  const { immediate: s, deep: o, once: l, scheduler: i, augmentJob: a, call: r } = n, u = (w) => o ? w : /* @__PURE__ */ Qe(w) || o === !1 || o === 0 ? Dt(w, 1) : Dt(w);
  let c, d, f, p, m = !1, _ = !1;
  if (/* @__PURE__ */ ge(e) ? (d = () => e.value, m = /* @__PURE__ */ Qe(e)) : /* @__PURE__ */ vt(e) ? (d = () => u(e), m = !0) : te(e) ? (_ = !0, m = e.some((w) => /* @__PURE__ */ vt(w) || /* @__PURE__ */ Qe(w)), d = () => e.map((w) => {
    if (/* @__PURE__ */ ge(w))
      return w.value;
    if (/* @__PURE__ */ vt(w))
      return u(w);
    if (ce(w))
      return r ? r(w, 2) : w();
  })) : ce(e) ? t ? d = r ? () => r(e, 2) : e : d = () => {
    if (f) {
      wt();
      try {
        f();
      } finally {
        xt();
      }
    }
    const w = Jt;
    Jt = c;
    try {
      return r ? r(e, 3, [p]) : e(p);
    } finally {
      Jt = w;
    }
  } : d = bt, t && o) {
    const w = d, C = o === !0 ? 1 / 0 : o;
    d = () => Dt(w(), C);
  }
  const y = hi(), g = () => {
    c.stop(), y && y.active && Bo(y.effects, c);
  };
  if (l && t) {
    const w = t;
    t = (...C) => {
      const ne = w(...C);
      return g(), ne;
    };
  }
  let x = _ ? new Array(e.length).fill(cs) : cs;
  const I = (w) => {
    if (!(!(c.flags & 1) || !c.dirty && !w))
      if (t) {
        const C = c.run();
        if (w || o || m || (_ ? C.some((ne, T) => gt(ne, x[T])) : gt(C, x))) {
          f && f();
          const ne = Jt;
          Jt = c;
          try {
            const T = [
              C,
              // pass undefined as the old value when it's changed for the first time
              x === cs ? void 0 : _ && x[0] === cs ? [] : x,
              p
            ];
            x = C, r ? r(t, 3, T) : (
              // @ts-expect-error
              t(...T)
            );
          } finally {
            Jt = ne;
          }
        }
      } else
        c.run();
  };
  return a && a(I), c = new gi(d), c.scheduler = i ? () => i(I, !1) : I, p = (w) => Dr(w, !1, c), f = c.onStop = () => {
    const w = ws.get(c);
    if (w) {
      if (r)
        r(w, 4);
      else
        for (const C of w) C();
      ws.delete(c);
    }
  }, t ? s ? I(!0) : x = c.run() : i ? i(I.bind(null, !0), !0) : c.run(), g.pause = c.pause.bind(c), g.resume = c.resume.bind(c), g.stop = g, g;
}
function Dt(e, t = 1 / 0, n) {
  if (t <= 0 || !_e(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ge(e))
    Dt(e.value, t, n);
  else if (te(e))
    for (let s = 0; s < e.length; s++)
      Dt(e[s], t, n);
  else if (Rs(e) || gn(e))
    e.forEach((s) => {
      Dt(s, t, n);
    });
  else if (ri(e)) {
    for (const s in e)
      Dt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Dt(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ss(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    os(o, t, n);
  }
}
function ot(e, t, n, s) {
  if (ce(e)) {
    const o = ss(e, t, n, s);
    return o && ii(o) && o.catch((l) => {
      os(l, t, n);
    }), o;
  }
  if (te(e)) {
    const o = [];
    for (let l = 0; l < e.length; l++)
      o.push(ot(e[l], t, n, s));
    return o;
  }
}
function os(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Se;
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
    if (l) {
      wt(), ss(l, null, 10, [
        e,
        r,
        u
      ]), xt();
      return;
    }
  }
  Er(e, n, o, s, i);
}
function Er(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const We = [];
let pt = -1;
const _n = [];
let Nt = null, mn = 0;
const Ei = /* @__PURE__ */ Promise.resolve();
let xs = null;
function Sn(e) {
  const t = xs || Ei;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Tr(e) {
  let t = pt + 1, n = We.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = We[s], l = Xn(o);
    l < e || l === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function qo(e) {
  if (!(e.flags & 1)) {
    const t = Xn(e), n = We[We.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Xn(n) ? We.push(e) : We.splice(Tr(t), 0, e), e.flags |= 1, Ti();
  }
}
function Ti() {
  xs || (xs = Ei.then(Pi));
}
function Or(e) {
  te(e) ? _n.push(...e) : Nt && e.id === -1 ? Nt.splice(mn + 1, 0, e) : e.flags & 1 || (_n.push(e), e.flags |= 1), Ti();
}
function rl(e, t, n = pt + 1) {
  for (; n < We.length; n++) {
    const s = We[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      We.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Oi(e) {
  if (_n.length) {
    const t = [...new Set(_n)].sort(
      (n, s) => Xn(n) - Xn(s)
    );
    if (_n.length = 0, Nt) {
      Nt.push(...t);
      return;
    }
    for (Nt = t, mn = 0; mn < Nt.length; mn++) {
      const n = Nt[mn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Nt = null, mn = 0;
  }
}
const Xn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Pi(e) {
  try {
    for (pt = 0; pt < We.length; pt++) {
      const t = We[pt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ss(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; pt < We.length; pt++) {
      const t = We[pt];
      t && (t.flags &= -2);
    }
    pt = -1, We.length = 0, Oi(), xs = null, (We.length || _n.length) && Pi();
  }
}
let Ne = null, Ri = null;
function Ss(e) {
  const t = Ne;
  return Ne = e, Ri = e && e.type.__scopeId || null, t;
}
function Ws(e, t = Ne, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Ms(-1);
    const l = Ss(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Ss(l), s._d && Ms(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Ge(e, t) {
  if (Ne === null)
    return e;
  const n = Xs(Ne), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [l, i, a, r = Se] = t[o];
    l && (ce(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && Dt(i), s.push({
      dir: l,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: a,
      modifiers: r
    }));
  }
  return e;
}
function Gt(e, t, n, s) {
  const o = e.dirs, l = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const a = o[i];
    l && (a.oldValue = l[i].value);
    let r = a.dir[s];
    r && (wt(), ot(r, n, 8, [
      e.el,
      a,
      e,
      t
    ]), xt());
  }
}
function Pr(e, t) {
  if (Re) {
    let n = Re.provides;
    const s = Re.parent && Re.parent.provides;
    s === n && (n = Re.provides = Object.create(s)), n[e] = t;
  }
}
function Vn(e, t, n = !1) {
  const s = Zo();
  if (s || ln) {
    let o = ln ? ln._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ce(t) ? t.call(s && s.proxy) : t;
  }
}
function Rr() {
  return !!(Zo() || ln);
}
const Nr = /* @__PURE__ */ Symbol.for("v-scx"), $r = () => Vn(Nr);
function Ue(e, t, n) {
  return Ni(e, t, n);
}
function Ni(e, t, n = Se) {
  const { immediate: s, deep: o, flush: l, once: i } = n, a = Te({}, n), r = t && s || !t && l !== "post";
  let u;
  if (wn) {
    if (l === "sync") {
      const p = $r();
      u = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!r) {
      const p = () => {
      };
      return p.stop = bt, p.resume = bt, p.pause = bt, p;
    }
  }
  const c = Re;
  a.call = (p, m, _) => ot(p, c, m, _);
  let d = !1;
  l === "post" ? a.scheduler = (p) => {
    je(p, c && c.suspense);
  } : l !== "sync" && (d = !0, a.scheduler = (p, m) => {
    m ? p() : qo(p);
  }), a.augmentJob = (p) => {
    t && (p.flags |= 4), d && (p.flags |= 2, c && (p.id = c.uid, p.i = c));
  };
  const f = kr(e, t, a);
  return wn && (u ? u.push(f) : r && f()), f;
}
function Vr(e, t, n) {
  const s = this.proxy, o = Me(e) ? e.includes(".") ? $i(s, e) : () => s[e] : e.bind(s, s);
  let l;
  ce(t) ? l = t : (l = t.handler, n = t);
  const i = is(this), a = Ni(o, l.bind(s), n);
  return i(), a;
}
function $i(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const Ot = /* @__PURE__ */ new WeakMap(), Vi = /* @__PURE__ */ Symbol("_vte"), Bi = (e) => e.__isTeleport, Zt = (e) => e && (e.disabled || e.disabled === ""), Br = (e) => e && (e.defer || e.defer === ""), cl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ul = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, xo = (e, t) => {
  const n = e && e.to;
  return Me(n) ? t ? t(n) : null : n;
}, Ur = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, l, i, a, r, u) {
    const {
      mc: c,
      pc: d,
      pbc: f,
      o: { insert: p, querySelector: m, createText: _, createComment: y, parentNode: g }
    } = u, x = Zt(t.props);
    let { dynamicChildren: I } = t;
    const w = (T, D, A) => {
      T.shapeFlag & 16 && c(
        T.children,
        D,
        A,
        o,
        l,
        i,
        a,
        r
      );
    }, C = (T = t) => {
      const D = Zt(T.props), A = T.target = xo(T.props, m), q = So(A, T, _, p);
      A && (i !== "svg" && cl(A) ? i = "svg" : i !== "mathml" && ul(A) && (i = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(A), D || (w(T, A, q), Dn(T, !1)));
    }, ne = (T) => {
      const D = () => {
        if (Ot.get(T) === D) {
          if (Ot.delete(T), Zt(T.props)) {
            const A = g(T.el) || n;
            w(T, A, T.anchor), Dn(T, !0);
          }
          C(T);
        }
      };
      Ot.set(T, D), je(D, l);
    };
    if (e == null) {
      const T = t.el = _(""), D = t.anchor = _("");
      if (p(T, n, s), p(D, n, s), Br(t.props) || l && l.pendingBranch) {
        ne(t);
        return;
      }
      x && (w(t, n, D), Dn(t, !0)), C();
    } else {
      t.el = e.el;
      const T = t.anchor = e.anchor, D = Ot.get(e);
      if (D) {
        D.flags |= 8, Ot.delete(e), ne(t);
        return;
      }
      t.targetStart = e.targetStart;
      const A = t.target = e.target, q = t.targetAnchor = e.targetAnchor, $ = Zt(e.props), S = $ ? n : A, M = $ ? T : q;
      if (i === "svg" || cl(A) ? i = "svg" : (i === "mathml" || ul(A)) && (i = "mathml"), I ? (f(
        e.dynamicChildren,
        I,
        S,
        o,
        l,
        i,
        a
      ), Qo(e, t, !0)) : r || d(
        e,
        t,
        S,
        M,
        o,
        l,
        i,
        a,
        !1
      ), x)
        $ ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : us(
          t,
          n,
          T,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const V = xo(t.props, m);
        V && (t.target = V, us(
          t,
          V,
          null,
          u,
          0
        ));
      } else $ && us(
        t,
        A,
        q,
        u,
        1
      );
      Dn(t, x);
    }
  },
  remove(e, t, n, { um: s, o: { remove: o } }, l) {
    const {
      shapeFlag: i,
      children: a,
      anchor: r,
      targetStart: u,
      targetAnchor: c,
      target: d,
      props: f
    } = e, p = Zt(f), m = l || !p, _ = Ot.get(e);
    if (_ && (_.flags |= 8, Ot.delete(e)), d && (o(u), o(c)), l && o(r), !_ && (p || d) && i & 16)
      for (let y = 0; y < a.length; y++) {
        const g = a[y];
        s(
          g,
          t,
          n,
          m,
          !!g.dynamicChildren
        );
      }
  },
  move: us,
  hydrate: Hr
};
function us(e, t, n, { o: { insert: s }, m: o }, l = 2) {
  l === 0 && s(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: r, children: u, props: c } = e, d = l === 2;
  if (d && s(i, t, n), !Ot.has(e) && (!d || Zt(c)) && r & 16)
    for (let f = 0; f < u.length; f++)
      o(
        u[f],
        t,
        n,
        2
      );
  d && s(a, t, n);
}
function Hr(e, t, n, s, o, l, {
  o: { nextSibling: i, parentNode: a, querySelector: r, insert: u, createText: c }
}, d) {
  function f(y, g) {
    let x = g;
    for (; x; ) {
      if (x && x.nodeType === 8) {
        if (x.data === "teleport start anchor")
          t.targetStart = x;
        else if (x.data === "teleport anchor") {
          t.targetAnchor = x, y._lpa = t.targetAnchor && i(t.targetAnchor);
          break;
        }
      }
      x = i(x);
    }
  }
  function p(y, g) {
    g.anchor = d(
      i(y),
      g,
      a(y),
      n,
      s,
      o,
      l
    );
  }
  const m = t.target = xo(
    t.props,
    r
  ), _ = Zt(t.props);
  if (m) {
    const y = m._lpa || m.firstChild;
    t.shapeFlag & 16 && (_ ? (p(e, t), f(m, y), t.targetAnchor || So(
      m,
      t,
      c,
      u,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      a(e) === m ? e : null
    )) : (t.anchor = i(e), f(m, y), t.targetAnchor || So(m, t, c, u), d(
      y && i(y),
      t,
      m,
      n,
      s,
      o,
      l
    ))), Dn(t, _);
  } else _ && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = i(e));
  return t.anchor && i(t.anchor);
}
const Ui = Ur;
function Dn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function So(e, t, n, s, o = null) {
  const l = t.targetStart = n(""), i = t.targetAnchor = n("");
  return l[Vi] = i, e && (s(l, e, o), s(i, e, o)), i;
}
const nt = /* @__PURE__ */ Symbol("_leaveCb"), Ln = /* @__PURE__ */ Symbol("_enterCb");
function jr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return un(() => {
    e.isMounted = !0;
  }), Cn(() => {
    e.isUnmounting = !0;
  }), e;
}
const tt = [Function, Array], Hi = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: tt,
  onEnter: tt,
  onAfterEnter: tt,
  onEnterCancelled: tt,
  // leave
  onBeforeLeave: tt,
  onLeave: tt,
  onAfterLeave: tt,
  onLeaveCancelled: tt,
  // appear
  onBeforeAppear: tt,
  onAppear: tt,
  onAfterAppear: tt,
  onAppearCancelled: tt
}, ji = (e) => {
  const t = e.subTree;
  return t.component ? ji(t.component) : t;
}, Wr = {
  name: "BaseTransition",
  props: Hi,
  setup(e, { slots: t }) {
    const n = Zo(), s = jr();
    return () => {
      const o = t.default && zi(t.default(), !0), l = o && o.length ? Wi(o) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? oe() : void 0
      );
      if (!l)
        return;
      const i = /* @__PURE__ */ pe(e), { mode: a } = i;
      if (s.isLeaving)
        return lo(l);
      const r = dl(l);
      if (!r)
        return lo(l);
      let u = Co(
        r,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => u = d
      );
      r.type !== Be && Yn(r, u);
      let c = n.subTree && dl(n.subTree);
      if (c && c.type !== Be && !en(c, r) && ji(n).type !== Be) {
        let d = Co(
          c,
          i,
          s,
          n
        );
        if (Yn(c, d), a === "out-in" && r.type !== Be)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
          }, lo(l);
        a === "in-out" && r.type !== Be ? d.delayLeave = (f, p, m) => {
          const _ = Ki(
            s,
            c
          );
          _[String(c.key)] = c, f[nt] = () => {
            p(), f[nt] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            m(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return l;
    };
  }
};
function Wi(e) {
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
const Kr = Wr;
function Ki(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Co(e, t, n, s, o) {
  const {
    appear: l,
    mode: i,
    persisted: a = !1,
    onBeforeEnter: r,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: d,
    onBeforeLeave: f,
    onLeave: p,
    onAfterLeave: m,
    onLeaveCancelled: _,
    onBeforeAppear: y,
    onAppear: g,
    onAfterAppear: x,
    onAppearCancelled: I
  } = t, w = String(e.key), C = Ki(n, e), ne = (A, q) => {
    A && ot(
      A,
      s,
      9,
      q
    );
  }, T = (A, q) => {
    const $ = q[1];
    ne(A, q), te(A) ? A.every((S) => S.length <= 1) && $() : A.length <= 1 && $();
  }, D = {
    mode: i,
    persisted: a,
    beforeEnter(A) {
      let q = r;
      if (!n.isMounted)
        if (l)
          q = y || r;
        else
          return;
      A[nt] && A[nt](
        !0
        /* cancelled */
      );
      const $ = C[w];
      $ && en(e, $) && $.el[nt] && $.el[nt](), ne(q, [A]);
    },
    enter(A) {
      if (C[w] === e) return;
      let q = u, $ = c, S = d;
      if (!n.isMounted)
        if (l)
          q = g || u, $ = x || c, S = I || d;
        else
          return;
      let M = !1;
      A[Ln] = (R) => {
        M || (M = !0, R ? ne(S, [A]) : ne($, [A]), D.delayedLeave && D.delayedLeave(), A[Ln] = void 0);
      };
      const V = A[Ln].bind(null, !1);
      q ? T(q, [A, V]) : V();
    },
    leave(A, q) {
      const $ = String(e.key);
      if (A[Ln] && A[Ln](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return q();
      ne(f, [A]);
      let S = !1;
      A[nt] = (V) => {
        S || (S = !0, q(), V ? ne(_, [A]) : ne(m, [A]), A[nt] = void 0, C[$] === e && delete C[$]);
      };
      const M = A[nt].bind(null, !1);
      C[$] = e, p ? T(p, [A, M]) : M();
    },
    clone(A) {
      const q = Co(
        A,
        t,
        n,
        s,
        o
      );
      return o && o(q), q;
    }
  };
  return D;
}
function lo(e) {
  if (ls(e))
    return e = Vt(e), e.children = null, e;
}
function dl(e) {
  if (!ls(e))
    return Bi(e.type) && e.children ? Wi(e.children) : e;
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
function Yn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Yn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function zi(e, t = !1, n) {
  let s = [], o = 0;
  for (let l = 0; l < e.length; l++) {
    let i = e[l];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : l);
    i.type === fe ? (i.patchFlag & 128 && o++, s = s.concat(
      zi(i.children, t, a)
    )) : (t || i.type !== Be) && s.push(a != null ? Vt(i, { key: a }) : i);
  }
  if (o > 1)
    for (let l = 0; l < s.length; l++)
      s[l].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function we(e, t) {
  return ce(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Te({ name: e.name }, t, { setup: e })
  ) : e;
}
function Xo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function fl(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Cs = /* @__PURE__ */ new WeakMap();
function Bn(e, t, n, s, o = !1) {
  if (te(e)) {
    e.forEach(
      (_, y) => Bn(
        _,
        t && (te(t) ? t[y] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (bn(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Bn(e, t, n, s.component.subTree);
    return;
  }
  const l = s.shapeFlag & 4 ? Xs(s.component) : s.el, i = o ? null : l, { i: a, r } = e, u = t && t.r, c = a.refs === Se ? a.refs = {} : a.refs, d = a.setupState, f = /* @__PURE__ */ pe(d), p = d === Se ? li : (_) => fl(c, _) ? !1 : be(f, _), m = (_, y) => !(y && fl(c, y));
  if (u != null && u !== r) {
    if (pl(t), Me(u))
      c[u] = null, p(u) && (d[u] = null);
    else if (/* @__PURE__ */ ge(u)) {
      const _ = t;
      m(u, _.k) && (u.value = null), _.k && (c[_.k] = null);
    }
  }
  if (ce(r)) {
    wt();
    try {
      ss(r, a, 12, [i, c]);
    } finally {
      xt();
    }
  } else {
    const _ = Me(r), y = /* @__PURE__ */ ge(r);
    if (_ || y) {
      const g = () => {
        if (e.f) {
          const x = _ ? p(r) ? d[r] : c[r] : m() || !e.k ? r.value : c[e.k];
          if (o)
            te(x) && Bo(x, l);
          else if (te(x))
            x.includes(l) || x.push(l);
          else if (_)
            c[r] = [l], p(r) && (d[r] = c[r]);
          else {
            const I = [l];
            m(r, e.k) && (r.value = I), e.k && (c[e.k] = I);
          }
        } else _ ? (c[r] = i, p(r) && (d[r] = i)) : y && (m(r, e.k) && (r.value = i), e.k && (c[e.k] = i));
      };
      if (i) {
        const x = () => {
          g(), Cs.delete(e);
        };
        x.id = -1, Cs.set(e, x), je(x, n);
      } else
        pl(e), g();
    }
  }
}
function pl(e) {
  const t = Cs.get(e);
  t && (t.flags |= 8, Cs.delete(e));
}
const ml = (e) => e.nodeType === 8;
Us().requestIdleCallback;
Us().cancelIdleCallback;
function zr(e, t) {
  if (ml(e) && e.data === "[") {
    let n = 1, s = e.nextSibling;
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1)
          break;
      } else if (ml(s))
        if (s.data === "]") {
          if (--n === 0) break;
        } else s.data === "[" && n++;
      s = s.nextSibling;
    }
  } else
    t(e);
}
const bn = (e) => !!e.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function Ut(e) {
  ce(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: o = 200,
    hydrate: l,
    timeout: i,
    // undefined = never times out
    suspensible: a = !0,
    onError: r
  } = e;
  let u = null, c, d = 0;
  const f = () => (d++, u = null, p()), p = () => {
    let m;
    return u || (m = u = t().catch((_) => {
      if (_ = _ instanceof Error ? _ : new Error(String(_)), r)
        return new Promise((y, g) => {
          r(_, () => y(f()), () => g(_), d + 1);
        });
      throw _;
    }).then((_) => m !== u && u ? u : (_ && (_.__esModule || _[Symbol.toStringTag] === "Module") && (_ = _.default), c = _, _)));
  };
  return /* @__PURE__ */ we({
    name: "AsyncComponentWrapper",
    __asyncLoader: p,
    __asyncHydrate(m, _, y) {
      let g = !1;
      (_.bu || (_.bu = [])).push(() => g = !0);
      const x = () => {
        g || y();
      }, I = l ? () => {
        const w = l(
          x,
          (C) => zr(m, C)
        );
        w && (_.bum || (_.bum = [])).push(w);
      } : x;
      c ? I() : p().then(() => !_.isUnmounted && I());
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const m = Re;
      if (Xo(m), c)
        return () => ds(c, m);
      const _ = (C) => {
        u = null, os(
          C,
          m,
          13,
          !s
        );
      };
      if (a && m.suspense || wn)
        return p().then((C) => () => ds(C, m)).catch((C) => (_(C), () => s ? z(s, {
          error: C
        }) : null));
      const y = /* @__PURE__ */ re(!1), g = /* @__PURE__ */ re(), x = /* @__PURE__ */ re(!!o);
      let I, w;
      return zs(() => {
        I != null && clearTimeout(I), w != null && clearTimeout(w);
      }), o && (w = setTimeout(() => {
        m.isUnmounted || (x.value = !1);
      }, o)), i != null && (I = setTimeout(() => {
        if (!m.isUnmounted && !y.value && !g.value) {
          const C = new Error(
            `Async component timed out after ${i}ms.`
          );
          _(C), g.value = C;
        }
      }, i)), p().then(() => {
        m.isUnmounted || (y.value = !0, m.parent && ls(m.parent.vnode) && m.parent.update());
      }).catch((C) => {
        if (m.isUnmounted) {
          u = null;
          return;
        }
        _(C), g.value = C;
      }), () => {
        if (y.value && c)
          return ds(c, m);
        if (g.value && s)
          return z(s, {
            error: g.value
          });
        if (n && !x.value)
          return ds(
            n,
            m
          );
      };
    }
  });
}
function ds(e, t) {
  const { ref: n, props: s, children: o, ce: l } = t.vnode, i = z(e, s, o);
  return i.ref = n, i.ce = l, delete t.vnode.ce, i;
}
const ls = (e) => e.type.__isKeepAlive;
function Gr(e, t) {
  Gi(e, "a", t);
}
function qr(e, t) {
  Gi(e, "da", t);
}
function Gi(e, t, n = Re) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Ks(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      ls(o.parent.vnode) && Xr(s, t, n, o), o = o.parent;
  }
}
function Xr(e, t, n, s) {
  const o = Ks(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  zs(() => {
    Bo(s[t], o);
  }, n);
}
function Ks(e, t, n = Re, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...i) => {
      wt();
      const a = is(n), r = ot(t, n, e, i);
      return a(), xt(), r;
    });
    return s ? o.unshift(l) : o.push(l), l;
  }
}
const Et = (e) => (t, n = Re) => {
  (!wn || e === "sp") && Ks(e, (...s) => t(...s), n);
}, Yr = Et("bm"), un = Et("m"), Jr = Et(
  "bu"
), Qr = Et("u"), Cn = Et(
  "bum"
), zs = Et("um"), Zr = Et(
  "sp"
), ec = Et("rtg"), tc = Et("rtc");
function nc(e, t = Re) {
  Ks("ec", e, t);
}
const sc = "components", qi = /* @__PURE__ */ Symbol.for("v-ndc");
function oc(e) {
  return Me(e) ? lc(sc, e, !1) || e : e || qi;
}
function lc(e, t, n = !0, s = !1) {
  const o = Ne || Re;
  if (o) {
    const l = o.type;
    {
      const a = Wc(
        l,
        !1
      );
      if (a && (a === t || a === ze(t) || a === Vs(ze(t))))
        return l;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      hl(o[e] || l[e], t) || // global registration
      hl(o.appContext[e], t)
    );
    return !i && s ? l : i;
  }
}
function hl(e, t) {
  return e && (e[t] || e[ze(t)] || e[Vs(ze(t))]);
}
function Ae(e, t, n, s) {
  let o;
  const l = n, i = te(e);
  if (i || Me(e)) {
    const a = i && /* @__PURE__ */ vt(e);
    let r = !1, u = !1;
    a && (r = !/* @__PURE__ */ Qe(e), u = /* @__PURE__ */ kt(e), e = Hs(e)), o = new Array(e.length);
    for (let c = 0, d = e.length; c < d; c++)
      o[c] = t(
        r ? u ? yn(rt(e[c])) : rt(e[c]) : e[c],
        c,
        void 0,
        l
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let a = 0; a < e; a++)
      o[a] = t(a + 1, a, void 0, l);
  } else if (_e(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (a, r) => t(a, r, void 0, l)
      );
    else {
      const a = Object.keys(e);
      o = new Array(a.length);
      for (let r = 0, u = a.length; r < u; r++) {
        const c = a[r];
        o[r] = t(e[c], c, r, l);
      }
    }
  else
    o = [];
  return o;
}
function ic(e, t, n = {}, s, o) {
  if (Ne.ce || Ne.parent && bn(Ne.parent) && Ne.parent.ce) {
    const u = Object.keys(n).length > 0;
    return F(), Ie(
      fe,
      null,
      [z("slot", n, s)],
      u ? -2 : 64
    );
  }
  let l = e[t];
  l && l._c && (l._d = !1), F();
  const i = l && Xi(l(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, r = Ie(
    fe,
    {
      key: (a && !Ze(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || [],
    i && e._ === 1 ? 64 : -2
  );
  return l && l._c && (l._d = !0), r;
}
function Xi(e) {
  return e.some((t) => Qn(t) ? !(t.type === Be || t.type === fe && !Xi(t.children)) : !0) ? e : null;
}
const Fo = (e) => e ? ha(e) ? Xs(e) : Fo(e.parent) : null, Un = (
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
    $parent: (e) => Fo(e.parent),
    $root: (e) => Fo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ji(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      qo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Sn.bind(e.proxy)),
    $watch: (e) => Vr.bind(e)
  })
), io = (e, t) => e !== Se && !e.__isScriptSetup && be(e, t), ac = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: l, accessCache: i, type: a, appContext: r } = e;
    if (t[0] !== "$") {
      const f = i[t];
      if (f !== void 0)
        switch (f) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return l[t];
        }
      else {
        if (io(s, t))
          return i[t] = 1, s[t];
        if (o !== Se && be(o, t))
          return i[t] = 2, o[t];
        if (be(l, t))
          return i[t] = 3, l[t];
        if (n !== Se && be(n, t))
          return i[t] = 4, n[t];
        Mo && (i[t] = 0);
      }
    }
    const u = Un[t];
    let c, d;
    if (u)
      return t === "$attrs" && Ve(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (c = a.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== Se && be(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      d = r.config.globalProperties, be(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: l } = e;
    return io(o, t) ? (o[t] = n, !0) : s !== Se && be(s, t) ? (s[t] = n, !0) : be(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: l, type: i }
  }, a) {
    let r;
    return !!(n[a] || e !== Se && a[0] !== "$" && be(e, a) || io(t, a) || be(l, a) || be(s, a) || be(Un, a) || be(o.config.globalProperties, a) || (r = i.__cssModules) && r[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : be(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function gl(e) {
  return te(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Mo = !0;
function rc(e) {
  const t = Ji(e), n = e.proxy, s = e.ctx;
  Mo = !1, t.beforeCreate && _l(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: l,
    methods: i,
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
    deactivated: y,
    beforeDestroy: g,
    beforeUnmount: x,
    destroyed: I,
    unmounted: w,
    render: C,
    renderTracked: ne,
    renderTriggered: T,
    errorCaptured: D,
    serverPrefetch: A,
    // public API
    expose: q,
    inheritAttrs: $,
    // assets
    components: S,
    directives: M,
    filters: V
  } = t;
  if (u && cc(u, s, null), i)
    for (const k in i) {
      const j = i[k];
      ce(j) && (s[k] = j.bind(n));
    }
  if (o) {
    const k = o.call(n, n);
    _e(k) && (e.data = /* @__PURE__ */ cn(k));
  }
  if (Mo = !0, l)
    for (const k in l) {
      const j = l[k], W = ce(j) ? j.bind(n, n) : ce(j.get) ? j.get.bind(n, n) : bt, Z = !ce(j) && ce(j.set) ? j.set.bind(n) : bt, le = X({
        get: W,
        set: Z
      });
      Object.defineProperty(s, k, {
        enumerable: !0,
        configurable: !0,
        get: () => le.value,
        set: (ve) => le.value = ve
      });
    }
  if (a)
    for (const k in a)
      Yi(a[k], s, n, k);
  if (r) {
    const k = ce(r) ? r.call(n) : r;
    Reflect.ownKeys(k).forEach((j) => {
      Pr(j, k[j]);
    });
  }
  c && _l(c, e, "c");
  function U(k, j) {
    te(j) ? j.forEach((W) => k(W.bind(n))) : j && k(j.bind(n));
  }
  if (U(Yr, d), U(un, f), U(Jr, p), U(Qr, m), U(Gr, _), U(qr, y), U(nc, D), U(tc, ne), U(ec, T), U(Cn, x), U(zs, w), U(Zr, A), te(q))
    if (q.length) {
      const k = e.exposed || (e.exposed = {});
      q.forEach((j) => {
        Object.defineProperty(k, j, {
          get: () => n[j],
          set: (W) => n[j] = W,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === bt && (e.render = C), $ != null && (e.inheritAttrs = $), S && (e.components = S), M && (e.directives = M), A && Xo(e);
}
function cc(e, t, n = bt) {
  te(e) && (e = Lo(e));
  for (const s in e) {
    const o = e[s];
    let l;
    _e(o) ? "default" in o ? l = Vn(
      o.from || s,
      o.default,
      !0
    ) : l = Vn(o.from || s) : l = Vn(o), /* @__PURE__ */ ge(l) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (i) => l.value = i
    }) : t[s] = l;
  }
}
function _l(e, t, n) {
  ot(
    te(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Yi(e, t, n, s) {
  let o = s.includes(".") ? $i(n, s) : () => n[s];
  if (Me(e)) {
    const l = t[e];
    ce(l) && Ue(o, l);
  } else if (ce(e))
    Ue(o, e.bind(n));
  else if (_e(e))
    if (te(e))
      e.forEach((l) => Yi(l, t, n, s));
    else {
      const l = ce(e.handler) ? e.handler.bind(n) : t[e.handler];
      ce(l) && Ue(o, l, e);
    }
}
function Ji(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: l,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = l.get(t);
  let r;
  return a ? r = a : !o.length && !n && !s ? r = t : (r = {}, o.length && o.forEach(
    (u) => Fs(r, u, i, !0)
  ), Fs(r, t, i)), _e(t) && l.set(t, r), r;
}
function Fs(e, t, n, s = !1) {
  const { mixins: o, extends: l } = t;
  l && Fs(e, l, n, !0), o && o.forEach(
    (i) => Fs(e, i, n, !0)
  );
  for (const i in t)
    if (!(s && i === "expose")) {
      const a = uc[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const uc = {
  data: bl,
  props: vl,
  emits: vl,
  // objects
  methods: kn,
  computed: kn,
  // lifecycle
  beforeCreate: He,
  created: He,
  beforeMount: He,
  mounted: He,
  beforeUpdate: He,
  updated: He,
  beforeDestroy: He,
  beforeUnmount: He,
  destroyed: He,
  unmounted: He,
  activated: He,
  deactivated: He,
  errorCaptured: He,
  serverPrefetch: He,
  // assets
  components: kn,
  directives: kn,
  // watch
  watch: fc,
  // provide / inject
  provide: bl,
  inject: dc
};
function bl(e, t) {
  return t ? e ? function() {
    return Te(
      ce(e) ? e.call(this, this) : e,
      ce(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function dc(e, t) {
  return kn(Lo(e), Lo(t));
}
function Lo(e) {
  if (te(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function He(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function kn(e, t) {
  return e ? Te(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function vl(e, t) {
  return e ? te(e) && te(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Te(
    /* @__PURE__ */ Object.create(null),
    gl(e),
    gl(t ?? {})
  ) : t;
}
function fc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Te(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = He(e[s], t[s]);
  return n;
}
function Qi() {
  return {
    app: null,
    config: {
      isNativeTag: li,
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
let pc = 0;
function mc(e, t) {
  return function(s, o = null) {
    ce(s) || (s = Te({}, s)), o != null && !_e(o) && (o = null);
    const l = Qi(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let r = !1;
    const u = l.app = {
      _uid: pc++,
      _component: s,
      _props: o,
      _container: null,
      _context: l,
      _instance: null,
      version: zc,
      get config() {
        return l.config;
      },
      set config(c) {
      },
      use(c, ...d) {
        return i.has(c) || (c && ce(c.install) ? (i.add(c), c.install(u, ...d)) : ce(c) && (i.add(c), c(u, ...d))), u;
      },
      mixin(c) {
        return l.mixins.includes(c) || l.mixins.push(c), u;
      },
      component(c, d) {
        return d ? (l.components[c] = d, u) : l.components[c];
      },
      directive(c, d) {
        return d ? (l.directives[c] = d, u) : l.directives[c];
      },
      mount(c, d, f) {
        if (!r) {
          const p = u._ceVNode || z(s, o);
          return p.appContext = l, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(p, c, f), r = !0, u._container = c, c.__vue_app__ = u, Xs(p.component);
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
        return l.provides[c] = d, u;
      },
      runWithContext(c) {
        const d = ln;
        ln = u;
        try {
          return c();
        } finally {
          ln = d;
        }
      }
    };
    return u;
  };
}
let ln = null;
const hc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ze(t)}Modifiers`] || e[`${Bt(t)}Modifiers`];
function gc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Se;
  let o = n;
  const l = t.startsWith("update:"), i = l && hc(s, t.slice(7));
  i && (i.trim && (o = n.map((c) => Me(c) ? c.trim() : c)), i.number && (o = n.map(Bs)));
  let a, r = s[a = eo(t)] || // also try camelCase event handler (#2249)
  s[a = eo(ze(t))];
  !r && l && (r = s[a = eo(Bt(t))]), r && ot(
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
const _c = /* @__PURE__ */ new WeakMap();
function Zi(e, t, n = !1) {
  const s = n ? _c : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const l = e.emits;
  let i = {}, a = !1;
  if (!ce(e)) {
    const r = (u) => {
      const c = Zi(u, t, !0);
      c && (a = !0, Te(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
  }
  return !l && !a ? (_e(e) && s.set(e, null), null) : (te(l) ? l.forEach((r) => i[r] = null) : Te(i, l), _e(e) && s.set(e, i), i);
}
function Gs(e, t) {
  return !e || !Os(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), be(e, t[0].toLowerCase() + t.slice(1)) || be(e, Bt(t)) || be(e, t));
}
function yl(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [l],
    slots: i,
    attrs: a,
    emit: r,
    render: u,
    renderCache: c,
    props: d,
    data: f,
    setupState: p,
    ctx: m,
    inheritAttrs: _
  } = e, y = Ss(e);
  let g, x;
  try {
    if (n.shapeFlag & 4) {
      const w = o || s, C = w;
      g = ht(
        u.call(
          C,
          w,
          c,
          d,
          p,
          f,
          m
        )
      ), x = a;
    } else {
      const w = t;
      g = ht(
        w.length > 1 ? w(
          d,
          { attrs: a, slots: i, emit: r }
        ) : w(
          d,
          null
        )
      ), x = t.props ? a : bc(a);
    }
  } catch (w) {
    Hn.length = 0, os(w, e, 1), g = z(Be);
  }
  let I = g;
  if (x && _ !== !1) {
    const w = Object.keys(x), { shapeFlag: C } = I;
    w.length && C & 7 && (l && w.some(Ps) && (x = vc(
      x,
      l
    )), I = Vt(I, x, !1, !0));
  }
  return n.dirs && (I = Vt(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && Yn(I, n.transition), g = I, Ss(y), g;
}
const bc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Os(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, vc = (e, t) => {
  const n = {};
  for (const s in e)
    (!Ps(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function yc(e, t, n) {
  const { props: s, children: o, component: l } = e, { props: i, children: a, patchFlag: r } = t, u = l.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && r >= 0) {
    if (r & 1024)
      return !0;
    if (r & 16)
      return s ? wl(s, i, u) : !!i;
    if (r & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (ea(i, s, f) && !Gs(u, f))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : s === i ? !1 : s ? i ? wl(s, i, u) : !0 : !!i;
  return !1;
}
function wl(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    if (ea(t, e, l) && !Gs(n, l))
      return !0;
  }
  return !1;
}
function ea(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && _e(s) && _e(o) ? !ns(s, o) : s !== o;
}
function wc({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = s, e = o), o === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const ta = {}, na = () => Object.create(ta), sa = (e) => Object.getPrototypeOf(e) === ta;
function xc(e, t, n, s = !1) {
  const o = {}, l = na();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), oa(e, t, o, l);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ yr(o) : e.type.props ? e.props = o : e.props = l, e.attrs = l;
}
function Sc(e, t, n, s) {
  const {
    props: o,
    attrs: l,
    vnode: { patchFlag: i }
  } = e, a = /* @__PURE__ */ pe(o), [r] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let f = c[d];
        if (Gs(e.emitsOptions, f))
          continue;
        const p = t[f];
        if (r)
          if (be(l, f))
            p !== l[f] && (l[f] = p, u = !0);
          else {
            const m = ze(f);
            o[m] = Io(
              r,
              a,
              m,
              p,
              e,
              !1
            );
          }
        else
          p !== l[f] && (l[f] = p, u = !0);
      }
    }
  } else {
    oa(e, t, o, l) && (u = !0);
    let c;
    for (const d in a)
      (!t || // for camelCase
      !be(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Bt(d)) === d || !be(t, c))) && (r ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (o[d] = Io(
        r,
        a,
        d,
        void 0,
        e,
        !0
      )) : delete o[d]);
    if (l !== a)
      for (const d in l)
        (!t || !be(t, d)) && (delete l[d], u = !0);
  }
  u && At(e.attrs, "set", "");
}
function oa(e, t, n, s) {
  const [o, l] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let r in t) {
      if (Rn(r))
        continue;
      const u = t[r];
      let c;
      o && be(o, c = ze(r)) ? !l || !l.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : Gs(e.emitsOptions, r) || (!(r in s) || u !== s[r]) && (s[r] = u, i = !0);
    }
  if (l) {
    const r = /* @__PURE__ */ pe(n), u = a || Se;
    for (let c = 0; c < l.length; c++) {
      const d = l[c];
      n[d] = Io(
        o,
        r,
        d,
        u[d],
        e,
        !be(u, d)
      );
    }
  }
  return i;
}
function Io(e, t, n, s, o, l) {
  const i = e[n];
  if (i != null) {
    const a = be(i, "default");
    if (a && s === void 0) {
      const r = i.default;
      if (i.type !== Function && !i.skipFactory && ce(r)) {
        const { propsDefaults: u } = o;
        if (n in u)
          s = u[n];
        else {
          const c = is(o);
          s = u[n] = r.call(
            null,
            t
          ), c();
        }
      } else
        s = r;
      o.ce && o.ce._setProp(n, s);
    }
    i[
      0
      /* shouldCast */
    ] && (l && !a ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Bt(n)) && (s = !0));
  }
  return s;
}
const Cc = /* @__PURE__ */ new WeakMap();
function la(e, t, n = !1) {
  const s = n ? Cc : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const l = e.props, i = {}, a = [];
  let r = !1;
  if (!ce(e)) {
    const c = (d) => {
      r = !0;
      const [f, p] = la(d, t, !0);
      Te(i, f), p && a.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!l && !r)
    return _e(e) && s.set(e, hn), hn;
  if (te(l))
    for (let c = 0; c < l.length; c++) {
      const d = ze(l[c]);
      xl(d) && (i[d] = Se);
    }
  else if (l)
    for (const c in l) {
      const d = ze(c);
      if (xl(d)) {
        const f = l[c], p = i[d] = te(f) || ce(f) ? { type: f } : Te({}, f), m = p.type;
        let _ = !1, y = !0;
        if (te(m))
          for (let g = 0; g < m.length; ++g) {
            const x = m[g], I = ce(x) && x.name;
            if (I === "Boolean") {
              _ = !0;
              break;
            } else I === "String" && (y = !1);
          }
        else
          _ = ce(m) && m.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = _, p[
          1
          /* shouldCastTrue */
        ] = y, (_ || be(p, "default")) && a.push(d);
      }
    }
  const u = [i, a];
  return _e(e) && s.set(e, u), u;
}
function xl(e) {
  return e[0] !== "$" && !Rn(e);
}
const Yo = (e) => e === "_" || e === "_ctx" || e === "$stable", Jo = (e) => te(e) ? e.map(ht) : [ht(e)], Fc = (e, t, n) => {
  if (t._n)
    return t;
  const s = Ws((...o) => Jo(t(...o)), n);
  return s._c = !1, s;
}, ia = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Yo(o)) continue;
    const l = e[o];
    if (ce(l))
      t[o] = Fc(o, l, s);
    else if (l != null) {
      const i = Jo(l);
      t[o] = () => i;
    }
  }
}, aa = (e, t) => {
  const n = Jo(t);
  e.slots.default = () => n;
}, ra = (e, t, n) => {
  for (const s in t)
    (n || !Yo(s)) && (e[s] = t[s]);
}, Mc = (e, t, n) => {
  const s = e.slots = na();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (ra(s, t, n), n && ci(s, "_", o, !0)) : ia(t, s);
  } else t && aa(e, t);
}, Lc = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let l = !0, i = Se;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? l = !1 : ra(o, t, n) : (l = !t.$stable, ia(t, o)), i = t;
  } else t && (aa(e, t), i = { default: 1 });
  if (l)
    for (const a in o)
      !Yo(a) && i[a] == null && delete o[a];
}, je = Ec;
function Ic(e) {
  return Ac(e);
}
function Ac(e, t) {
  const n = Us();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: o,
    patchProp: l,
    createElement: i,
    createText: a,
    createComment: r,
    setText: u,
    setElementText: c,
    parentNode: d,
    nextSibling: f,
    setScopeId: p = bt,
    insertStaticContent: m
  } = e, _ = (h, v, L, H = null, B = null, P = null, Y = void 0, G = null, K = !!v.dynamicChildren) => {
    if (h === v)
      return;
    h && !en(h, v) && (H = zt(h), ve(h, B, P, !0), h = null), v.patchFlag === -2 && (K = !1, v.dynamicChildren = null);
    const { type: N, ref: se, shapeFlag: J } = v;
    switch (N) {
      case qs:
        y(h, v, L, H);
        break;
      case Be:
        g(h, v, L, H);
        break;
      case ro:
        h == null && x(v, L, H, Y);
        break;
      case fe:
        S(
          h,
          v,
          L,
          H,
          B,
          P,
          Y,
          G,
          K
        );
        break;
      default:
        J & 1 ? C(
          h,
          v,
          L,
          H,
          B,
          P,
          Y,
          G,
          K
        ) : J & 6 ? M(
          h,
          v,
          L,
          H,
          B,
          P,
          Y,
          G,
          K
        ) : (J & 64 || J & 128) && N.process(
          h,
          v,
          L,
          H,
          B,
          P,
          Y,
          G,
          K,
          Oe
        );
    }
    se != null && B ? Bn(se, h && h.ref, P, v || h, !v) : se == null && h && h.ref != null && Bn(h.ref, null, P, h, !0);
  }, y = (h, v, L, H) => {
    if (h == null)
      s(
        v.el = a(v.children),
        L,
        H
      );
    else {
      const B = v.el = h.el;
      v.children !== h.children && u(B, v.children);
    }
  }, g = (h, v, L, H) => {
    h == null ? s(
      v.el = r(v.children || ""),
      L,
      H
    ) : v.el = h.el;
  }, x = (h, v, L, H) => {
    [h.el, h.anchor] = m(
      h.children,
      v,
      L,
      H,
      h.el,
      h.anchor
    );
  }, I = ({ el: h, anchor: v }, L, H) => {
    let B;
    for (; h && h !== v; )
      B = f(h), s(h, L, H), h = B;
    s(v, L, H);
  }, w = ({ el: h, anchor: v }) => {
    let L;
    for (; h && h !== v; )
      L = f(h), o(h), h = L;
    o(v);
  }, C = (h, v, L, H, B, P, Y, G, K) => {
    if (v.type === "svg" ? Y = "svg" : v.type === "math" && (Y = "mathml"), h == null)
      ne(
        v,
        L,
        H,
        B,
        P,
        Y,
        G,
        K
      );
    else {
      const N = h.el && h.el._isVueCE ? h.el : null;
      try {
        N && N._beginPatch(), A(
          h,
          v,
          B,
          P,
          Y,
          G,
          K
        );
      } finally {
        N && N._endPatch();
      }
    }
  }, ne = (h, v, L, H, B, P, Y, G) => {
    let K, N;
    const { props: se, shapeFlag: J, transition: ee, dirs: ae } = h;
    if (K = h.el = i(
      h.type,
      P,
      se && se.is,
      se
    ), J & 8 ? c(K, h.children) : J & 16 && D(
      h.children,
      K,
      null,
      H,
      B,
      ao(h, P),
      Y,
      G
    ), ae && Gt(h, null, H, "created"), T(K, h, h.scopeId, Y, H), se) {
      for (const xe in se)
        xe !== "value" && !Rn(xe) && l(K, xe, null, se[xe], P, H);
      "value" in se && l(K, "value", null, se.value, P), (N = se.onVnodeBeforeMount) && ft(N, H, h);
    }
    ae && Gt(h, null, H, "beforeMount");
    const he = Dc(B, ee);
    he && ee.beforeEnter(K), s(K, v, L), ((N = se && se.onVnodeMounted) || he || ae) && je(() => {
      try {
        N && ft(N, H, h), he && ee.enter(K), ae && Gt(h, null, H, "mounted");
      } finally {
      }
    }, B);
  }, T = (h, v, L, H, B) => {
    if (L && p(h, L), H)
      for (let P = 0; P < H.length; P++)
        p(h, H[P]);
    if (B) {
      let P = B.subTree;
      if (v === P || da(P.type) && (P.ssContent === v || P.ssFallback === v)) {
        const Y = B.vnode;
        T(
          h,
          Y,
          Y.scopeId,
          Y.slotScopeIds,
          B.parent
        );
      }
    }
  }, D = (h, v, L, H, B, P, Y, G, K = 0) => {
    for (let N = K; N < h.length; N++) {
      const se = h[N] = G ? Lt(h[N]) : ht(h[N]);
      _(
        null,
        se,
        v,
        L,
        H,
        B,
        P,
        Y,
        G
      );
    }
  }, A = (h, v, L, H, B, P, Y) => {
    const G = v.el = h.el;
    let { patchFlag: K, dynamicChildren: N, dirs: se } = v;
    K |= h.patchFlag & 16;
    const J = h.props || Se, ee = v.props || Se;
    let ae;
    if (L && qt(L, !1), (ae = ee.onVnodeBeforeUpdate) && ft(ae, L, v, h), se && Gt(v, h, L, "beforeUpdate"), L && qt(L, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    N && (!h.dynamicChildren || h.dynamicChildren.length !== N.length) && (K = 0, Y = !1, N = null), (J.innerHTML && ee.innerHTML == null || J.textContent && ee.textContent == null) && c(G, ""), N ? q(
      h.dynamicChildren,
      N,
      G,
      L,
      H,
      ao(v, B),
      P
    ) : Y || j(
      h,
      v,
      G,
      null,
      L,
      H,
      ao(v, B),
      P,
      !1
    ), K > 0) {
      if (K & 16)
        $(G, J, ee, L, B);
      else if (K & 2 && J.class !== ee.class && l(G, "class", null, ee.class, B), K & 4 && l(G, "style", J.style, ee.style, B), K & 8) {
        const he = v.dynamicProps;
        for (let xe = 0; xe < he.length; xe++) {
          const ye = he[xe], ke = J[ye], Pe = ee[ye];
          (Pe !== ke || ye === "value") && l(G, ye, ke, Pe, B, L);
        }
      }
      K & 1 && h.children !== v.children && c(G, v.children);
    } else !Y && N == null && $(G, J, ee, L, B);
    ((ae = ee.onVnodeUpdated) || se) && je(() => {
      ae && ft(ae, L, v, h), se && Gt(v, h, L, "updated");
    }, H);
  }, q = (h, v, L, H, B, P, Y) => {
    for (let G = 0; G < v.length; G++) {
      const K = h[G], N = v[G], se = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        K.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (K.type === fe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !en(K, N) || // - In the case of a component, it could contain anything.
        K.shapeFlag & 198) ? d(K.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          L
        )
      );
      _(
        K,
        N,
        se,
        null,
        H,
        B,
        P,
        Y,
        !0
      );
    }
  }, $ = (h, v, L, H, B) => {
    if (v !== L) {
      if (v !== Se)
        for (const P in v)
          !Rn(P) && !(P in L) && l(
            h,
            P,
            v[P],
            null,
            B,
            H
          );
      for (const P in L) {
        if (Rn(P)) continue;
        const Y = L[P], G = v[P];
        Y !== G && P !== "value" && l(h, P, G, Y, B, H);
      }
      "value" in L && l(h, "value", v.value, L.value, B);
    }
  }, S = (h, v, L, H, B, P, Y, G, K) => {
    const N = v.el = h ? h.el : a(""), se = v.anchor = h ? h.anchor : a("");
    let { patchFlag: J, dynamicChildren: ee, slotScopeIds: ae } = v;
    ae && (G = G ? G.concat(ae) : ae), h == null ? (s(N, L, H), s(se, L, H), D(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      v.children || [],
      L,
      se,
      B,
      P,
      Y,
      G,
      K
    )) : J > 0 && J & 64 && ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren && h.dynamicChildren.length === ee.length ? (q(
      h.dynamicChildren,
      ee,
      L,
      B,
      P,
      Y,
      G
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (v.key != null || B && v === B.subTree) && Qo(
      h,
      v,
      !0
      /* shallow */
    )) : j(
      h,
      v,
      L,
      se,
      B,
      P,
      Y,
      G,
      K
    );
  }, M = (h, v, L, H, B, P, Y, G, K) => {
    v.slotScopeIds = G, h == null ? v.shapeFlag & 512 ? B.ctx.activate(
      v,
      L,
      H,
      Y,
      K
    ) : V(
      v,
      L,
      H,
      B,
      P,
      Y,
      K
    ) : R(h, v, K);
  }, V = (h, v, L, H, B, P, Y) => {
    const G = h.component = Vc(
      h,
      H,
      B
    );
    if (ls(h) && (G.ctx.renderer = Oe), Bc(G, !1, Y), G.asyncDep) {
      if (B && B.registerDep(G, U, Y), !h.el) {
        const K = G.subTree = z(Be);
        g(null, K, v, L), h.placeholder = K.el;
      }
    } else
      U(
        G,
        h,
        v,
        L,
        B,
        P,
        Y
      );
  }, R = (h, v, L) => {
    const H = v.component = h.component;
    if (yc(h, v, L))
      if (H.asyncDep && !H.asyncResolved) {
        k(H, v, L);
        return;
      } else
        H.next = v, H.update();
    else
      v.el = h.el, H.vnode = v;
  }, U = (h, v, L, H, B, P, Y) => {
    const G = () => {
      if (h.isMounted) {
        let { next: J, bu: ee, u: ae, parent: he, vnode: xe } = h;
        {
          const ut = ca(h);
          if (ut) {
            J && (J.el = xe.el, k(h, J, Y)), ut.asyncDep.then(() => {
              je(() => {
                h.isUnmounted || N();
              }, B);
            });
            return;
          }
        }
        let ye = J, ke;
        qt(h, !1), J ? (J.el = xe.el, k(h, J, Y)) : J = xe, ee && hs(ee), (ke = J.props && J.props.onVnodeBeforeUpdate) && ft(ke, he, J, xe), qt(h, !0);
        const Pe = yl(h), ct = h.subTree;
        h.subTree = Pe, _(
          ct,
          Pe,
          // parent may have changed if it's in a teleport
          d(ct.el),
          // anchor may have changed if it's in a fragment
          zt(ct),
          h,
          B,
          P
        ), J.el = Pe.el, ye === null && wc(h, Pe.el), ae && je(ae, B), (ke = J.props && J.props.onVnodeUpdated) && je(
          () => ft(ke, he, J, xe),
          B
        );
      } else {
        let J;
        const { el: ee, props: ae } = v, { bm: he, m: xe, parent: ye, root: ke, type: Pe } = h, ct = bn(v);
        qt(h, !1), he && hs(he), !ct && (J = ae && ae.onVnodeBeforeMount) && ft(J, ye, v), qt(h, !0);
        {
          ke.ce && ke.ce._hasShadowRoot() && ke.ce._injectChildStyle(
            Pe,
            h.parent ? h.parent.type : void 0
          );
          const ut = h.subTree = yl(h);
          _(
            null,
            ut,
            L,
            H,
            h,
            B,
            P
          ), v.el = ut.el;
        }
        if (xe && je(xe, B), !ct && (J = ae && ae.onVnodeMounted)) {
          const ut = v;
          je(
            () => ft(J, ye, ut),
            B
          );
        }
        (v.shapeFlag & 256 || ye && bn(ye.vnode) && ye.vnode.shapeFlag & 256) && h.a && je(h.a, B), h.isMounted = !0, v = L = H = null;
      }
    };
    h.scope.on();
    const K = h.effect = new gi(G);
    h.scope.off();
    const N = h.update = K.run.bind(K), se = h.job = K.runIfDirty.bind(K);
    se.i = h, se.id = h.uid, K.scheduler = () => qo(se), qt(h, !0), N();
  }, k = (h, v, L) => {
    v.component = h;
    const H = h.vnode.props;
    h.vnode = v, h.next = null, Sc(h, v.props, H, L), Lc(h, v.children, L), wt(), rl(h), xt();
  }, j = (h, v, L, H, B, P, Y, G, K = !1) => {
    const N = h && h.children, se = h ? h.shapeFlag : 0, J = v.children, { patchFlag: ee, shapeFlag: ae } = v;
    if (ee > 0) {
      if (ee & 128) {
        Z(
          N,
          J,
          L,
          H,
          B,
          P,
          Y,
          G,
          K
        );
        return;
      } else if (ee & 256) {
        W(
          N,
          J,
          L,
          H,
          B,
          P,
          Y,
          G,
          K
        );
        return;
      }
    }
    ae & 8 ? (se & 16 && De(N, B, P), J !== N && c(L, J)) : se & 16 ? ae & 16 ? Z(
      N,
      J,
      L,
      H,
      B,
      P,
      Y,
      G,
      K
    ) : De(N, B, P, !0) : (se & 8 && c(L, ""), ae & 16 && D(
      J,
      L,
      H,
      B,
      P,
      Y,
      G,
      K
    ));
  }, W = (h, v, L, H, B, P, Y, G, K) => {
    h = h || hn, v = v || hn;
    const N = h.length, se = v.length, J = Math.min(N, se);
    let ee;
    for (ee = 0; ee < J; ee++) {
      const ae = v[ee] = K ? Lt(v[ee]) : ht(v[ee]);
      _(
        h[ee],
        ae,
        L,
        null,
        B,
        P,
        Y,
        G,
        K
      );
    }
    N > se ? De(
      h,
      B,
      P,
      !0,
      !1,
      J
    ) : D(
      v,
      L,
      H,
      B,
      P,
      Y,
      G,
      K,
      J
    );
  }, Z = (h, v, L, H, B, P, Y, G, K) => {
    let N = 0;
    const se = v.length;
    let J = h.length - 1, ee = se - 1;
    for (; N <= J && N <= ee; ) {
      const ae = h[N], he = v[N] = K ? Lt(v[N]) : ht(v[N]);
      if (en(ae, he))
        _(
          ae,
          he,
          L,
          null,
          B,
          P,
          Y,
          G,
          K
        );
      else
        break;
      N++;
    }
    for (; N <= J && N <= ee; ) {
      const ae = h[J], he = v[ee] = K ? Lt(v[ee]) : ht(v[ee]);
      if (en(ae, he))
        _(
          ae,
          he,
          L,
          null,
          B,
          P,
          Y,
          G,
          K
        );
      else
        break;
      J--, ee--;
    }
    if (N > J) {
      if (N <= ee) {
        const ae = ee + 1, he = ae < se ? v[ae].el : H;
        for (; N <= ee; )
          _(
            null,
            v[N] = K ? Lt(v[N]) : ht(v[N]),
            L,
            he,
            B,
            P,
            Y,
            G,
            K
          ), N++;
      }
    } else if (N > ee)
      for (; N <= J; )
        ve(h[N], B, P, !0), N++;
    else {
      const ae = N, he = N, xe = /* @__PURE__ */ new Map();
      for (N = he; N <= ee; N++) {
        const Ye = v[N] = K ? Lt(v[N]) : ht(v[N]);
        Ye.key != null && xe.set(Ye.key, N);
      }
      let ye, ke = 0;
      const Pe = ee - he + 1;
      let ct = !1, ut = 0;
      const Fn = new Array(Pe);
      for (N = 0; N < Pe; N++) Fn[N] = 0;
      for (N = ae; N <= J; N++) {
        const Ye = h[N];
        if (ke >= Pe) {
          ve(Ye, B, P, !0);
          continue;
        }
        let dt;
        if (Ye.key != null)
          dt = xe.get(Ye.key);
        else
          for (ye = he; ye <= ee; ye++)
            if (Fn[ye - he] === 0 && en(Ye, v[ye])) {
              dt = ye;
              break;
            }
        dt === void 0 ? ve(Ye, B, P, !0) : (Fn[dt - he] = N + 1, dt >= ut ? ut = dt : ct = !0, _(
          Ye,
          v[dt],
          L,
          null,
          B,
          P,
          Y,
          G,
          K
        ), ke++);
      }
      const tl = ct ? kc(Fn) : hn;
      for (ye = tl.length - 1, N = Pe - 1; N >= 0; N--) {
        const Ye = he + N, dt = v[Ye], nl = v[Ye + 1], sl = Ye + 1 < se ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          nl.el || ua(nl)
        ) : H;
        Fn[N] === 0 ? _(
          null,
          dt,
          L,
          sl,
          B,
          P,
          Y,
          G,
          K
        ) : ct && (ye < 0 || N !== tl[ye] ? le(dt, L, sl, 2) : ye--);
      }
    }
  }, le = (h, v, L, H, B = null) => {
    const { el: P, type: Y, transition: G, children: K, shapeFlag: N } = h;
    if (N & 6) {
      le(h.component.subTree, v, L, H);
      return;
    }
    if (N & 128) {
      h.suspense.move(v, L, H);
      return;
    }
    if (N & 64) {
      Y.move(h, v, L, Oe);
      return;
    }
    if (Y === fe) {
      s(P, v, L);
      for (let J = 0; J < K.length; J++)
        le(K[J], v, L, H);
      s(h.anchor, v, L);
      return;
    }
    if (Y === ro) {
      I(h, v, L);
      return;
    }
    if (H !== 2 && N & 1 && G)
      if (H === 0)
        G.persisted && !P[nt] ? s(P, v, L) : (G.beforeEnter(P), s(P, v, L), je(() => G.enter(P), B));
      else {
        const { leave: J, delayLeave: ee, afterLeave: ae } = G, he = () => {
          h.ctx.isUnmounted ? o(P) : s(P, v, L);
        }, xe = () => {
          const ye = P._isLeaving || !!P[nt];
          P._isLeaving && P[nt](
            !0
            /* cancelled */
          ), G.persisted && !ye ? he() : J(P, () => {
            he(), ae && ae();
          });
        };
        ee ? ee(P, he, xe) : xe();
      }
    else
      s(P, v, L);
  }, ve = (h, v, L, H = !1, B = !1) => {
    const {
      type: P,
      props: Y,
      ref: G,
      children: K,
      dynamicChildren: N,
      shapeFlag: se,
      patchFlag: J,
      dirs: ee,
      cacheIndex: ae,
      memo: he
    } = h;
    if (J === -2 && (B = !1), G != null && (wt(), Bn(G, null, L, h, !0), xt()), ae != null && (v.renderCache[ae] = void 0), se & 256) {
      v.ctx.deactivate(h);
      return;
    }
    const xe = se & 1 && ee, ye = !bn(h);
    let ke;
    if (ye && (ke = Y && Y.onVnodeBeforeUnmount) && ft(ke, v, h), se & 6)
      $e(h.component, L, H);
    else {
      if (se & 128) {
        h.suspense.unmount(L, H);
        return;
      }
      xe && Gt(h, null, v, "beforeUnmount"), se & 64 ? h.type.remove(
        h,
        v,
        L,
        Oe,
        H
      ) : N && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !N.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (P !== fe || J > 0 && J & 64) ? De(
        N,
        v,
        L,
        !1,
        !0
      ) : (P === fe && J & 384 || !B && se & 16) && De(K, v, L), H && et(h);
    }
    const Pe = he != null && ae == null;
    (ye && (ke = Y && Y.onVnodeUnmounted) || xe || Pe) && je(() => {
      ke && ft(ke, v, h), xe && Gt(h, null, v, "unmounted"), Pe && (h.el = null);
    }, L);
  }, et = (h) => {
    const { type: v, el: L, anchor: H, transition: B } = h;
    if (v === fe) {
      ie(L, H);
      return;
    }
    if (v === ro) {
      w(h);
      return;
    }
    const P = () => {
      o(L), B && !B.persisted && B.afterLeave && B.afterLeave();
    };
    if (h.shapeFlag & 1 && B && !B.persisted) {
      const { leave: Y, delayLeave: G } = B, K = () => Y(L, P);
      G ? G(h.el, P, K) : K();
    } else
      P();
  }, ie = (h, v) => {
    let L;
    for (; h !== v; )
      L = f(h), o(h), h = L;
    o(v);
  }, $e = (h, v, L) => {
    const { bum: H, scope: B, job: P, subTree: Y, um: G, m: K, a: N } = h;
    Sl(K), Sl(N), H && hs(H), B.stop(), P && (P.flags |= 8, ve(Y, h, v, L)), G && je(G, v), je(() => {
      h.isUnmounted = !0;
    }, v);
  }, De = (h, v, L, H = !1, B = !1, P = 0) => {
    for (let Y = P; Y < h.length; Y++)
      ve(h[Y], v, L, H, B);
  }, zt = (h) => {
    if (h.shapeFlag & 6)
      return zt(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const v = f(h.anchor || h.el), L = v && v[Vi];
    return L ? f(L) : v;
  };
  let ue = !1;
  const Xe = (h, v, L) => {
    let H;
    h == null ? v._vnode && (ve(v._vnode, null, null, !0), H = v._vnode.component) : _(
      v._vnode || null,
      h,
      v,
      null,
      null,
      null,
      L
    ), v._vnode = h, ue || (ue = !0, rl(H), Oi(), ue = !1);
  }, Oe = {
    p: _,
    um: ve,
    m: le,
    r: et,
    mt: V,
    mc: D,
    pc: j,
    pbc: q,
    n: zt,
    o: e
  };
  return {
    render: Xe,
    hydrate: void 0,
    createApp: mc(Xe)
  };
}
function ao({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function qt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Dc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Qo(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (te(s) && te(o))
    for (let l = 0; l < s.length; l++) {
      const i = s[l];
      let a = o[l];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[l] = Lt(o[l]), a.el = i.el), !n && a.patchFlag !== -2 && Qo(i, a)), a.type === qs && (a.patchFlag === -1 && (a = o[l] = Lt(a)), a.el = i.el), a.type === Be && !a.el && (a.el = i.el);
    }
}
function kc(e) {
  const t = e.slice(), n = [0];
  let s, o, l, i, a;
  const r = e.length;
  for (s = 0; s < r; s++) {
    const u = e[s];
    if (u !== 0) {
      if (o = n[n.length - 1], e[o] < u) {
        t[s] = o, n.push(s);
        continue;
      }
      for (l = 0, i = n.length - 1; l < i; )
        a = l + i >> 1, e[n[a]] < u ? l = a + 1 : i = a;
      u < e[n[l]] && (l > 0 && (t[s] = n[l - 1]), n[l] = s);
    }
  }
  for (l = n.length, i = n[l - 1]; l-- > 0; )
    n[l] = i, i = t[i];
  return n;
}
function ca(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ca(t);
}
function Sl(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ua(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ua(t.subTree) : null;
}
const da = (e) => e.__isSuspense;
function Ec(e, t) {
  t && t.pendingBranch ? te(e) ? t.effects.push(...e) : t.effects.push(e) : Or(e);
}
const fe = /* @__PURE__ */ Symbol.for("v-fgt"), qs = /* @__PURE__ */ Symbol.for("v-txt"), Be = /* @__PURE__ */ Symbol.for("v-cmt"), ro = /* @__PURE__ */ Symbol.for("v-stc"), Hn = [];
let Je = null;
function F(e = !1) {
  Hn.push(Je = e ? null : []);
}
function Tc() {
  Hn.pop(), Je = Hn[Hn.length - 1] || null;
}
let Jn = 1;
function Ms(e, t = !1) {
  Jn += e, e < 0 && Je && t && (Je.hasOnce = !0);
}
function fa(e) {
  return e.dynamicChildren = Jn > 0 ? Je || hn : null, Tc(), Jn > 0 && Je && Je.push(e), e;
}
function E(e, t, n, s, o, l) {
  return fa(
    O(
      e,
      t,
      n,
      s,
      o,
      l,
      !0
    )
  );
}
function Ie(e, t, n, s, o) {
  return fa(
    z(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function Qn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function en(e, t) {
  return e.type === t.type && e.key === t.key;
}
const pa = ({ key: e }) => e ?? null, gs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Me(e) || /* @__PURE__ */ ge(e) || ce(e) ? { i: Ne, r: e, k: t, f: !!n } : e : null);
function O(e, t = null, n = null, s = 0, o = null, l = e === fe ? 0 : 1, i = !1, a = !1) {
  const r = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && pa(t),
    ref: t && gs(t),
    scopeId: Ri,
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
    shapeFlag: l,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Ne
  };
  return a ? (Ls(r, n), l & 128 && e.normalize(r)) : n && (r.shapeFlag |= Me(n) ? 8 : 16), Jn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Je && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (r.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  r.patchFlag !== 32 && Je.push(r), r;
}
const z = Oc;
function Oc(e, t = null, n = null, s = 0, o = null, l = !1) {
  if ((!e || e === qi) && (e = Be), Qn(e)) {
    const a = Vt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ls(a, n), Jn > 0 && !l && Je && (a.shapeFlag & 6 ? Je[Je.indexOf(e)] = a : Je.push(a)), a.patchFlag = -2, a;
  }
  if (Kc(e) && (e = e.__vccOpts), t) {
    t = Pc(t);
    let { class: a, style: r } = t;
    a && !Me(a) && (t.class = Le(a)), _e(r) && (/* @__PURE__ */ js(r) && !te(r) && (r = Te({}, r)), t.style = Ke(r));
  }
  const i = Me(e) ? 1 : da(e) ? 128 : Bi(e) ? 64 : _e(e) ? 4 : ce(e) ? 2 : 0;
  return O(
    e,
    t,
    n,
    s,
    o,
    i,
    l,
    !0
  );
}
function Pc(e) {
  return e ? /* @__PURE__ */ js(e) || sa(e) ? Te({}, e) : e : null;
}
function Vt(e, t, n = !1, s = !1) {
  const { props: o, ref: l, patchFlag: i, children: a, transition: r } = e, u = t ? Rc(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && pa(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && l ? te(l) ? l.concat(gs(t)) : [l, gs(t)] : gs(t)
    ) : l,
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
    patchFlag: t && e.type !== fe ? i === -1 ? 16 : i | 16 : i,
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
  return r && s && Yn(
    c,
    r.clone(c)
  ), c;
}
function ma(e = " ", t = 0) {
  return z(qs, null, e, t);
}
function oe(e = "", t = !1) {
  return t ? (F(), Ie(Be, null, e)) : z(Be, null, e);
}
function ht(e) {
  return e == null || typeof e == "boolean" ? z(Be) : te(e) ? z(
    fe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Qn(e) ? Lt(e) : z(qs, null, String(e));
}
function Lt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Vt(e);
}
function Ls(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (te(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Ls(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !sa(t) ? t._ctx = Ne : o === 3 && Ne && (Ne.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ce(t)) {
    if (s & 65) {
      Ls(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ne }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [ma(t)]) : n = 8;
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
        t.style = Ke([t.style, s.style]);
      else if (Os(o)) {
        const l = t[o], i = s[o];
        i && l !== i && !(te(l) && l.includes(i)) ? t[o] = l ? [].concat(l, i) : i : i == null && l == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ps(o) && (t[o] = i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function ft(e, t, n, s = null) {
  ot(e, t, 7, [
    n,
    s
  ]);
}
const Nc = Qi();
let $c = 0;
function Vc(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Nc, l = {
    uid: $c++,
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
    scope: new pi(
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
    propsOptions: la(s, o),
    emitsOptions: Zi(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Se,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Se,
    data: Se,
    props: Se,
    attrs: Se,
    slots: Se,
    refs: Se,
    setupState: Se,
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
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = gc.bind(null, l), e.ce && e.ce(l), l;
}
let Re = null;
const Zo = () => Re || Ne;
let Is, Ao;
{
  const e = Us(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (l) => {
      o.length > 1 ? o.forEach((i) => i(l)) : o[0](l);
    };
  };
  Is = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Re = n
  ), Ao = t(
    "__VUE_SSR_SETTERS__",
    (n) => wn = n
  );
}
const is = (e) => {
  const t = Re;
  return Is(e), e.scope.on(), () => {
    e.scope.off(), Is(t);
  };
}, Cl = () => {
  Re && Re.scope.off(), Is(null);
};
function ha(e) {
  return e.vnode.shapeFlag & 4;
}
let wn = !1;
function Bc(e, t = !1, n = !1) {
  t && Ao(t);
  const { props: s, children: o } = e.vnode, l = ha(e);
  xc(e, s, l, t), Mc(e, o, n || t);
  const i = l ? Uc(e, t) : void 0;
  return t && Ao(!1), i;
}
function Uc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ac);
  const { setup: s } = n;
  if (s) {
    wt();
    const o = e.setupContext = s.length > 1 ? jc(e) : null, l = is(e), i = ss(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), a = ii(i);
    if (xt(), l(), (a || e.sp) && !bn(e) && Xo(e), a) {
      if (i.then(Cl, Cl), t)
        return i.then((r) => {
          Fl(e, r);
        }).catch((r) => {
          os(r, e, 0);
        });
      e.asyncDep = i;
    } else
      Fl(e, i);
  } else
    ga(e);
}
function Fl(e, t, n) {
  ce(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : _e(t) && (e.setupState = Di(t)), ga(e);
}
function ga(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || bt);
  {
    const o = is(e);
    wt();
    try {
      rc(e);
    } finally {
      xt(), o();
    }
  }
}
const Hc = {
  get(e, t) {
    return Ve(e, "get", ""), e[t];
  }
};
function jc(e) {
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
function Xs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Di(Go(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Un)
        return Un[n](e);
    },
    has(t, n) {
      return n in t || n in Un;
    }
  })) : e.proxy;
}
function Wc(e, t = !0) {
  return ce(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Kc(e) {
  return ce(e) && "__vccOpts" in e;
}
const X = (e, t) => /* @__PURE__ */ Ar(e, t, wn);
function _a(e, t, n) {
  try {
    Ms(-1);
    const s = arguments.length;
    return s === 2 ? _e(t) && !te(t) ? Qn(t) ? z(e, null, [t]) : z(e, t) : z(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Qn(n) && (n = [n]), z(e, t, n));
  } finally {
    Ms(1);
  }
}
const zc = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Do;
const Ml = typeof window < "u" && window.trustedTypes;
if (Ml)
  try {
    Do = /* @__PURE__ */ Ml.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ba = Do ? (e) => Do.createHTML(e) : (e) => e, Gc = "http://www.w3.org/2000/svg", qc = "http://www.w3.org/1998/Math/MathML", Mt = typeof document < "u" ? document : null, Ll = Mt && /* @__PURE__ */ Mt.createElement("template"), Xc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? Mt.createElementNS(Gc, e) : t === "mathml" ? Mt.createElementNS(qc, e) : n ? Mt.createElement(e, { is: n }) : Mt.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => Mt.createTextNode(e),
  createComment: (e) => Mt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Mt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, l) {
    const i = n ? n.previousSibling : t.lastChild;
    if (o && (o === l || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === l || !(o = o.nextSibling)); )
        ;
    else {
      Ll.innerHTML = ba(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Ll.content;
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
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Tt = "transition", In = "animation", Zn = /* @__PURE__ */ Symbol("_vtc"), va = {
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
}, Yc = /* @__PURE__ */ Te(
  {},
  Hi,
  va
), Jc = (e) => (e.displayName = "Transition", e.props = Yc, e), Qc = /* @__PURE__ */ Jc(
  (e, { slots: t }) => _a(Kr, Zc(e), t)
), Xt = (e, t = []) => {
  te(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Il = (e) => e ? te(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Zc(e) {
  const t = {};
  for (const S in e)
    S in va || (t[S] = e[S]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: o,
    enterFromClass: l = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: r = l,
    appearActiveClass: u = i,
    appearToClass: c = a,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: f = `${n}-leave-active`,
    leaveToClass: p = `${n}-leave-to`
  } = e, m = eu(o), _ = m && m[0], y = m && m[1], {
    onBeforeEnter: g,
    onEnter: x,
    onEnterCancelled: I,
    onLeave: w,
    onLeaveCancelled: C,
    onBeforeAppear: ne = g,
    onAppear: T = x,
    onAppearCancelled: D = I
  } = t, A = (S, M, V, R) => {
    S._enterCancelled = R, Yt(S, M ? c : a), Yt(S, M ? u : i), V && V();
  }, q = (S, M) => {
    S._isLeaving = !1, Yt(S, d), Yt(S, p), Yt(S, f), M && M();
  }, $ = (S) => (M, V) => {
    const R = S ? T : x, U = () => A(M, S, V);
    Xt(R, [M, U]), Al(() => {
      Yt(M, S ? r : l), Ft(M, S ? c : a), Il(R) || Dl(M, s, _, U);
    });
  };
  return Te(t, {
    onBeforeEnter(S) {
      Xt(g, [S]), Ft(S, l), Ft(S, i);
    },
    onBeforeAppear(S) {
      Xt(ne, [S]), Ft(S, r), Ft(S, u);
    },
    onEnter: $(!1),
    onAppear: $(!0),
    onLeave(S, M) {
      S._isLeaving = !0;
      const V = () => q(S, M);
      Ft(S, d), S._enterCancelled ? (Ft(S, f), Tl(S)) : (Tl(S), Ft(S, f)), Al(() => {
        S._isLeaving && (Yt(S, d), Ft(S, p), Il(w) || Dl(S, s, y, V));
      }), Xt(w, [S, V]);
    },
    onEnterCancelled(S) {
      A(S, !1, void 0, !0), Xt(I, [S]);
    },
    onAppearCancelled(S) {
      A(S, !0, void 0, !0), Xt(D, [S]);
    },
    onLeaveCancelled(S) {
      q(S), Xt(C, [S]);
    }
  });
}
function eu(e) {
  if (e == null)
    return null;
  if (_e(e))
    return [co(e.enter), co(e.leave)];
  {
    const t = co(e);
    return [t, t];
  }
}
function co(e) {
  return za(e);
}
function Ft(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Zn] || (e[Zn] = /* @__PURE__ */ new Set())).add(t);
}
function Yt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Zn];
  n && (n.delete(t), n.size || (e[Zn] = void 0));
}
function Al(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let tu = 0;
function Dl(e, t, n, s) {
  const o = e._endId = ++tu, l = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(l, n);
  const { type: i, timeout: a, propCount: r } = nu(e, t);
  if (!i)
    return s();
  const u = i + "end";
  let c = 0;
  const d = () => {
    e.removeEventListener(u, f), l();
  }, f = (p) => {
    p.target === e && ++c >= r && d();
  };
  setTimeout(() => {
    c < r && d();
  }, a + 1), e.addEventListener(u, f);
}
function nu(e, t) {
  const n = window.getComputedStyle(e), s = (m) => (n[m] || "").split(", "), o = s(`${Tt}Delay`), l = s(`${Tt}Duration`), i = kl(o, l), a = s(`${In}Delay`), r = s(`${In}Duration`), u = kl(a, r);
  let c = null, d = 0, f = 0;
  t === Tt ? i > 0 && (c = Tt, d = i, f = l.length) : t === In ? u > 0 && (c = In, d = u, f = r.length) : (d = Math.max(i, u), c = d > 0 ? i > u ? Tt : In : null, f = c ? c === Tt ? l.length : r.length : 0);
  const p = c === Tt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${Tt}Property`).toString()
  );
  return {
    type: c,
    timeout: d,
    propCount: f,
    hasTransform: p
  };
}
function kl(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => El(n) + El(e[s])));
}
function El(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Tl(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function su(e, t, n) {
  const s = e[Zn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const As = /* @__PURE__ */ Symbol("_vod"), ya = /* @__PURE__ */ Symbol("_vsh"), Ds = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[As] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : An(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), An(e, !0), s.enter(e)) : s.leave(e, () => {
      An(e, !1);
    }) : An(e, t));
  },
  beforeUnmount(e, { value: t }) {
    An(e, t);
  }
};
function An(e, t) {
  e.style.display = t ? e[As] : "none", e[ya] = !t;
}
const ou = /* @__PURE__ */ Symbol(""), lu = /(?:^|;)\s*display\s*:/;
function iu(e, t, n) {
  const s = e.style, o = Me(n);
  let l = !1;
  if (n && !o) {
    if (t)
      if (Me(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && En(s, a, "");
        }
      else
        for (const i in t)
          n[i] == null && En(s, i, "");
    for (const i in n) {
      i === "display" && (l = !0);
      const a = n[i];
      a != null ? ru(
        e,
        i,
        !Me(t) && t ? t[i] : void 0,
        a
      ) || En(s, i, a) : En(s, i, "");
    }
  } else if (o) {
    if (t !== n) {
      const i = s[ou];
      i && (n += ";" + i), s.cssText = n, l = lu.test(n);
    }
  } else t && e.removeAttribute("style");
  As in e && (e[As] = l ? s.display : "", e[ya] && (s.display = "none"));
}
const Ol = /\s*!important$/;
function En(e, t, n) {
  if (te(n))
    n.forEach((s) => En(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = au(e, t);
    Ol.test(n) ? e.setProperty(
      Bt(s),
      n.replace(Ol, ""),
      "important"
    ) : e[s] = n;
  }
}
const Pl = ["Webkit", "Moz", "ms"], uo = {};
function au(e, t) {
  const n = uo[t];
  if (n)
    return n;
  let s = ze(t);
  if (s !== "filter" && s in e)
    return uo[t] = s;
  s = Vs(s);
  for (let o = 0; o < Pl.length; o++) {
    const l = Pl[o] + s;
    if (l in e)
      return uo[t] = l;
  }
  return t;
}
function ru(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Me(s) && n === s;
}
const Rl = "http://www.w3.org/1999/xlink";
function Nl(e, t, n, s, o, l = Qa(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Rl, t.slice(6, t.length)) : e.setAttributeNS(Rl, t, n) : n == null || l && !ui(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    l ? "" : Ze(n) ? String(n) : n
  );
}
function $l(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ba(n) : n);
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const a = l === "OPTION" ? e.getAttribute("value") || "" : e.value, r = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== r || !("_value" in e)) && (e.value = r), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = ui(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(o || t);
}
function tn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function cu(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Vl = /* @__PURE__ */ Symbol("_vei");
function uu(e, t, n, s, o = null) {
  const l = e[Vl] || (e[Vl] = {}), i = l[t];
  if (s && i)
    i.value = s;
  else {
    const [a, r] = pu(t);
    if (s) {
      const u = l[t] = gu(
        s,
        o
      );
      tn(e, a, u, r);
    } else i && (cu(e, a, i, r), l[t] = void 0);
  }
}
const du = /(Once|Passive|Capture)$/, fu = /^on:?(?:Once|Passive|Capture)$/;
function pu(e) {
  let t, n;
  for (; (n = e.match(du)) && !fu.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Bt(e.slice(2)), t];
}
let fo = 0;
const mu = /* @__PURE__ */ Promise.resolve(), hu = () => fo || (mu.then(() => fo = 0), fo = Date.now());
function gu(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const o = n.value;
    if (te(o)) {
      const l = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        l.call(s), s._stopped = !0;
      };
      const i = o.slice(), a = [s];
      for (let r = 0; r < i.length && !s._stopped; r++) {
        const u = i[r];
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
  return n.value = e, n.attached = hu(), n;
}
const Bl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, _u = (e, t, n, s, o, l) => {
  const i = o === "svg";
  t === "class" ? su(e, s, i) : t === "style" ? iu(e, n, s) : Os(t) ? Ps(t) || uu(e, t, n, s, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : bu(e, t, s, i)) ? ($l(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Nl(e, t, s, i, l, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (vu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Me(s))) ? $l(e, ze(t), s, l, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Nl(e, t, s, i));
};
function bu(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Bl(t) && ce(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Bl(t) && Me(n) ? !1 : t in e;
}
function vu(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = ze(t);
  return Array.isArray(n) ? n.some((o) => ze(o) === s) : Object.keys(n).some((o) => ze(o) === s);
}
const ks = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return te(t) ? (n) => hs(t, n) : t;
};
function yu(e) {
  e.target.composing = !0;
}
function Ul(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const vn = /* @__PURE__ */ Symbol("_assign");
function Hl(e, t, n) {
  return t && (e = e.trim()), n && (e = Bs(e)), e;
}
const yt = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[vn] = ks(o);
    const l = s || o.props && o.props.type === "number";
    tn(e, t ? "change" : "input", (i) => {
      i.target.composing || e[vn](Hl(e.value, n, l));
    }), (n || l) && tn(e, "change", () => {
      e.value = Hl(e.value, n, l);
    }), t || (tn(e, "compositionstart", yu), tn(e, "compositionend", Ul), tn(e, "change", Ul));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: l } }, i) {
    if (e[vn] = ks(i), e.composing) return;
    const a = (l || e.type === "number") && !/^0\d/.test(e.value) ? Bs(e.value) : e.value, r = t ?? "";
    if (a === r)
      return;
    const u = e.getRootNode();
    (u instanceof Document || u instanceof ShadowRoot) && u.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === r) || (e.value = r);
  }
}, wu = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = Rs(t);
    tn(e, "change", () => {
      const l = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Bs(Es(i)) : Es(i)
      );
      e[vn](
        e.multiple ? o ? new Set(l) : l : l[0]
      ), e._assigning = !0, Sn(() => {
        e._assigning = !1;
      });
    }), e[vn] = ks(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    jl(e, t);
  },
  beforeUpdate(e, t, n) {
    e[vn] = ks(n);
  },
  updated(e, { value: t }) {
    e._assigning || jl(e, t);
  }
};
function jl(e, t) {
  const n = e.multiple, s = te(t);
  if (!(n && !s && !Rs(t))) {
    for (let o = 0, l = e.options.length; o < l; o++) {
      const i = e.options[o], a = Es(i);
      if (n)
        if (s) {
          const r = typeof a;
          r === "string" || r === "number" ? i.selected = t.some((u) => String(u) === String(a)) : i.selected = er(t, a) > -1;
        } else
          i.selected = t.has(a);
      else if (ns(Es(i), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Es(e) {
  return "_value" in e ? e._value : e.value;
}
const xu = ["ctrl", "shift", "alt", "meta"], Su = {
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
  exact: (e, t) => xu.some((n) => e[`${n}Key`] && !t.includes(n))
}, Wl = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...l) => {
    for (let i = 0; i < t.length; i++) {
      const a = Su[t[i]];
      if (a && a(o, t)) return;
    }
    return e(o, ...l);
  });
}, Cu = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, _s = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const l = Bt(o.key);
    if (t.some(
      (i) => i === l || Cu[i] === l
    ))
      return e(o);
  });
}, Fu = /* @__PURE__ */ Te({ patchProp: _u }, Xc);
let Kl;
function wa() {
  return Kl || (Kl = Ic(Fu));
}
const zl = (...e) => {
  wa().render(...e);
}, Ys = (...e) => {
  const t = wa().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = Lu(s);
    if (!o) return;
    const l = t._component;
    !ce(l) && !l.render && !l.template && (l.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, Mu(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function Mu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Lu(e) {
  return Me(e) ? document.querySelector(e) : e;
}
const Js = {
  accent: "#f08a45",
  panel: "#171b22",
  panelAlt: "#222934",
  text: "#e8edf3",
  muted: "#9ca8b5",
  danger: "#ef6666",
  ok: "#62c987"
}, Iu = {
  accent: "#c9682c",
  panel: "#eef1f5",
  panelAlt: "#e2e6ec",
  text: "#1c2430",
  muted: "#5b6572",
  danger: "#c94b4b",
  ok: "#3f8f5f"
}, Au = {
  accent: "#00e5ff",
  panel: "#0a0e1a",
  panelAlt: "#131a2e",
  text: "#dff9ff",
  muted: "#5f7d94",
  danger: "#ff2e63",
  ok: "#00ff9f"
}, Du = {
  accent: "#d4a017",
  panel: "#1a1712",
  panelAlt: "#26221a",
  text: "#e8dcc0",
  muted: "#8a7d5f",
  danger: "#9a3324",
  ok: "#8fbf3f"
}, ku = {
  default: Js,
  cyberpunk: Au,
  fallout: Du
}, It = { ...Js };
let jn = null, Wn = null;
function ko(e) {
  return `--fil-accent:${e.accent};--fil-panel:${e.panel};--fil-panel-alt:${e.panelAlt};--fil-text:${e.text};--fil-muted:${e.muted};--fil-danger:${e.danger};--fil-ok:${e.ok};`;
}
const Eu = {
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
}, Tu = "--fil-surface-bg:rgba(100,180,220,0.06);--fil-surface-border:rgba(0,255,255,0.18);--fil-surface-radius:20px;--fil-surface-blur:10px;--fil-surface-shadow:0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08);--fil-glass-bg:rgba(50,80,120,0.18);--fil-glass-border:rgba(0,150,200,0.35);--fil-field-radius:10px;--fil-pill-radius:17px;--fil-pill-bg:rgba(255,255,255,0.06);--fil-pill-border:rgba(0,150,200,0.4);", Ou = "--fil-surface-bg:rgba(70,130,170,0.08);--fil-surface-border:rgba(40,120,160,0.28);--fil-surface-radius:20px;--fil-surface-blur:10px;--fil-surface-shadow:0 8px 24px rgba(40,60,90,0.18), inset 0 1px 0 rgba(255,255,255,0.5);--fil-glass-bg:rgba(120,160,200,0.16);--fil-glass-border:rgba(40,120,160,0.3);--fil-field-radius:10px;--fil-pill-radius:17px;--fil-pill-bg:rgba(30,60,90,0.06);--fil-pill-border:rgba(40,120,160,0.35);";
function Pu() {
  if (typeof document > "u" || document.getElementById("fil-brand-vars")) return;
  const e = document.createElement("style");
  e.id = "fil-brand-vars", e.textContent = `:root{${ko(Js)}--fil-radius:8px;--fil-gap:.55rem;--fil-input-border:rgba(240,138,69,0.35);${Tu}}
.comfy-theme-light{${ko(Iu)}--fil-input-border:rgba(201,104,44,0.35);${Ou}}
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
}`, document.head.appendChild(e), jn = document.createElement("style"), jn.id = "fil-theme-vars", document.head.appendChild(jn), Wn = document.createElement("style"), Wn.id = "fil-theme-effects", document.head.appendChild(Wn);
}
function xa(e) {
  const t = ku[e] ?? Js;
  Object.assign(It, t), !(typeof document > "u") && (document.documentElement.dataset.filTheme = e, jn && (jn.textContent = e === "default" ? "" : `:root{${ko(t)}}`), Wn && (Wn.textContent = Eu[e] ?? ""));
}
const Ru = {
  class: "fil-color-picker",
  role: "group",
  "aria-label": "Color picker"
}, Nu = { class: "fil-cp-hex-row" }, $u = {
  class: "fil-cp-presets",
  role: "listbox",
  "aria-label": "Preset colors"
}, Vu = ["aria-selected", "aria-label", "title", "onClick"], Bu = /* @__PURE__ */ we({
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
    ], s = e, o = t, l = X(() => s.presets ?? n);
    function i(M) {
      o("update:modelValue", M);
    }
    function a(M) {
      return Math.min(1, Math.max(0, M));
    }
    function r(M) {
      const V = /^#?([0-9a-f]{6})$/i.exec(M.trim());
      if (!V) return null;
      const R = parseInt(V[1], 16);
      return [R >> 16 & 255, R >> 8 & 255, R & 255];
    }
    function u(M, V, R) {
      const U = (k) => Math.round(a(k / 255) * 255).toString(16).padStart(2, "0");
      return `#${U(M)}${U(V)}${U(R)}`;
    }
    function c(M, V, R) {
      const U = M / 255, k = V / 255, j = R / 255, W = Math.max(U, k, j), Z = Math.min(U, k, j), le = W - Z;
      let ve = 0;
      le !== 0 && (W === U ? ve = (k - j) / le % 6 : W === k ? ve = (j - U) / le + 2 : ve = (U - k) / le + 4, ve *= 60, ve < 0 && (ve += 360));
      const et = W === 0 ? 0 : le / W;
      return [ve, et, W];
    }
    function d(M, V, R) {
      const U = R * V, k = U * (1 - Math.abs(M / 60 % 2 - 1)), j = R - U;
      let [W, Z, le] = [0, 0, 0];
      return M < 60 ? [W, Z, le] = [U, k, 0] : M < 120 ? [W, Z, le] = [k, U, 0] : M < 180 ? [W, Z, le] = [0, U, k] : M < 240 ? [W, Z, le] = [0, k, U] : M < 300 ? [W, Z, le] = [k, 0, U] : [W, Z, le] = [U, 0, k], [(W + j) * 255, (Z + j) * 255, (le + j) * 255];
    }
    const f = /* @__PURE__ */ re(0), p = /* @__PURE__ */ re(0), m = /* @__PURE__ */ re(0), _ = /* @__PURE__ */ re(s.modelValue);
    function y(M) {
      const V = r(M);
      if (!V) return;
      const [R, U, k] = c(...V);
      f.value = R, p.value = U, m.value = k, _.value = u(...V);
    }
    Ue(() => s.modelValue, (M) => y(M), { immediate: !0 });
    const g = X(() => u(...d(f.value, p.value, m.value)));
    function x() {
      o("update:modelValue", g.value), _.value = g.value;
    }
    function I() {
      const M = r(_.value);
      if (!M) {
        _.value = g.value;
        return;
      }
      const [V, R, U] = c(...M);
      f.value = V, p.value = R, m.value = U, o("update:modelValue", u(...M));
    }
    const w = /* @__PURE__ */ re(null), C = /* @__PURE__ */ re(null);
    function ne(M) {
      const V = w.value;
      if (!V) return;
      const R = V.getBoundingClientRect();
      p.value = a((M.clientX - R.left) / R.width), m.value = a(1 - (M.clientY - R.top) / R.height), x();
    }
    function T(M) {
      const V = C.value;
      if (!V) return;
      const R = V.getBoundingClientRect();
      f.value = a((M.clientX - R.left) / R.width) * 360, x();
    }
    function D(M) {
      M.preventDefault(), ne(M);
      const V = (U) => ne(U), R = () => {
        window.removeEventListener("pointermove", V), window.removeEventListener("pointerup", R);
      };
      window.addEventListener("pointermove", V), window.addEventListener("pointerup", R);
    }
    function A(M) {
      M.preventDefault(), T(M);
      const V = (U) => T(U), R = () => {
        window.removeEventListener("pointermove", V), window.removeEventListener("pointerup", R);
      };
      window.addEventListener("pointermove", V), window.addEventListener("pointerup", R);
    }
    const q = X(() => `hsl(${f.value}, 100%, 50%)`), $ = X(() => ({
      left: `${p.value * 100}%`,
      top: `${(1 - m.value) * 100}%`
    })), S = X(() => ({ left: `${f.value / 360 * 100}%` }));
    return (M, V) => (F(), E("div", Ru, [
      O("div", {
        ref_key: "svRef",
        ref: w,
        class: "fil-cp-sv",
        style: Ke({ background: q.value }),
        onPointerdown: D
      }, [
        V[1] || (V[1] = O("div", { class: "fil-cp-sv-white" }, null, -1)),
        V[2] || (V[2] = O("div", { class: "fil-cp-sv-black" }, null, -1)),
        O("div", {
          class: "fil-cp-sv-thumb",
          style: Ke($.value)
        }, null, 4)
      ], 36),
      O("div", {
        ref_key: "hueRef",
        ref: C,
        class: "fil-cp-hue",
        onPointerdown: A
      }, [
        O("div", {
          class: "fil-cp-hue-thumb",
          style: Ke(S.value)
        }, null, 4)
      ], 544),
      O("div", Nu, [
        O("span", {
          class: "fil-cp-swatch",
          style: Ke({ background: g.value })
        }, null, 4),
        Ge(O("input", {
          "onUpdate:modelValue": V[0] || (V[0] = (R) => _.value = R),
          class: "fil-cp-hex-input",
          type: "text",
          spellcheck: "false",
          "aria-label": "Hex color",
          onKeydown: _s(I, ["enter"]),
          onBlur: I
        }, null, 544), [
          [yt, _.value]
        ])
      ]),
      O("div", $u, [
        (F(!0), E(fe, null, Ae(l.value, (R) => (F(), E("button", {
          key: R,
          class: Le(["fil-color-swatch", { "is-active": e.modelValue === R }]),
          style: Ke({ "--swatch": R }),
          "aria-selected": e.modelValue === R,
          "aria-label": R,
          title: R,
          onClick: (U) => i(R)
        }, null, 14, Vu))), 128))
      ])
    ]));
  }
}), Ce = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Uu = /* @__PURE__ */ Ce(Bu, [["__scopeId", "data-v-c4d5f476"]]), Gl = "__fil_color_picker_popup__";
function Hu(e) {
  return [
    {
      content: "Change color…",
      callback: (t, n, s) => ju(e, s)
    }
  ];
}
function ju(e, t) {
  const n = document.getElementById(Gl);
  n && n.remove();
  const s = document.createElement("div");
  s.id = Gl;
  const o = 176, l = 260, i = t ? Math.min(t.clientX, window.innerWidth - o - 8) : window.innerWidth / 2 - o / 2, a = t ? Math.min(t.clientY, window.innerHeight - l - 8) : window.innerHeight / 2 - l / 2;
  s.style.cssText = `position:fixed;z-index:10001;top:${Math.max(8, a)}px;left:${Math.max(8, i)}px;`, document.body.appendChild(s);
  function r(p) {
    e.color = p, e.__fx && (e.__fx.color = p), e.properties = e.properties || {}, e.properties.fil_custom_color = !0, u();
  }
  function u() {
    zl(null, s), s.remove(), document.removeEventListener("mousedown", c, !0), document.removeEventListener("keydown", d, !0);
  }
  function c(p) {
    s.contains(p.target) || u();
  }
  function d(p) {
    p.key === "Escape" && u();
  }
  const f = _a(Uu, {
    modelValue: e.color ?? "#78716c",
    "onUpdate:modelValue": (p) => r(p)
  });
  zl(f, s), document.addEventListener("mousedown", c, !0), document.addEventListener("keydown", d, !0), Sn(() => {
    var p;
    (p = s.querySelector(".fil-color-swatch")) == null || p.focus();
  });
}
const Wu = "fil";
function Ht(e, t = {}) {
  const s = e.prototype;
  if (s._filStyled) return;
  s._filStyled = !0, t.minSize && (s.minSize = t.minSize), s._filFamily = t.family ?? Wu, s._filDescription = t.description ?? "", t.badges && (s.badges = t.badges), s.color = It.accent, s.bgcolor = It.panelAlt;
  const o = s.onNodeCreated;
  s.onNodeCreated = function(...i) {
    const a = o == null ? void 0 : o.apply(this, i);
    return this.color = It.accent, this.bgcolor = It.panelAlt, a;
  }, s.onDrawTitleBar = function(i, a, r, u, c) {
    var m;
    const d = ((m = globalThis.LiteGraph) == null ? void 0 : m.ROUND_RADIUS) ?? 8, f = !!this.collapsed;
    i.fillStyle = It.panel, i.beginPath(), i.roundRect(0, -a, r[0], a, f ? [d] : [d, d, 0, 0]), i.fill();
    const p = 3;
    i.fillStyle = c || It.accent, i.beginPath(), i.roundRect(0, -a, p, a, f ? [d, 0, 0, d] : [d, 0, 0, 0]), i.fill();
  };
  const l = s.getExtraMenuOptions;
  s.getExtraMenuOptions = function(...i) {
    const a = l == null ? void 0 : l.apply(this, i), r = i[1];
    return Array.isArray(r) && r.push(null, ...Hu(this)), a;
  };
}
function Ku(e) {
  var s, o, l;
  const t = (s = e.graph) == null ? void 0 : s._nodes;
  if (!t) return;
  for (const i of t)
    i._filFamily && ((o = i.properties) != null && o.fil_custom_color || (i.color = It.accent, i.bgcolor = It.panelAlt));
  const n = e.canvas;
  (l = n == null ? void 0 : n.setDirty) == null || l.call(n, !0, !0);
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Sa;
const Qs = (e) => Sa = e, Ca = (
  /* istanbul ignore next */
  Symbol()
);
function Eo(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Kn;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Kn || (Kn = {}));
function Fa() {
  const e = mi(!0), t = e.run(() => /* @__PURE__ */ re({}));
  let n = [], s = [];
  const o = Go({
    install(l) {
      Qs(o), o._a = l, l.provide(Ca, o), l.config.globalProperties.$pinia = o, s.forEach((i) => n.push(i)), s = [];
    },
    use(l) {
      return this._a ? n.push(l) : s.push(l), this;
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
const Ma = () => {
};
function ql(e, t, n, s = Ma) {
  e.push(t);
  const o = () => {
    const l = e.indexOf(t);
    l > -1 && (e.splice(l, 1), s());
  };
  return !n && hi() && tr(o), o;
}
function pn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const zu = (e) => e(), Xl = Symbol(), po = Symbol();
function To(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], o = e[n];
    Eo(o) && Eo(s) && e.hasOwnProperty(n) && !/* @__PURE__ */ ge(s) && !/* @__PURE__ */ vt(s) ? e[n] = To(o, s) : e[n] = s;
  }
  return e;
}
const Gu = (
  /* istanbul ignore next */
  Symbol()
);
function qu(e) {
  return !Eo(e) || !e.hasOwnProperty(Gu);
}
const { assign: Pt } = Object;
function Xu(e) {
  return !!(/* @__PURE__ */ ge(e) && e.effect);
}
function Yu(e, t, n, s) {
  const { state: o, actions: l, getters: i } = t, a = n.state.value[e];
  let r;
  function u() {
    a || (n.state.value[e] = o ? o() : {});
    const c = /* @__PURE__ */ Cr(n.state.value[e]);
    return Pt(c, l, Object.keys(i || {}).reduce((d, f) => (d[f] = Go(X(() => {
      Qs(n);
      const p = n._s.get(e);
      return i[f].call(p, p);
    })), d), {}));
  }
  return r = La(e, u, t, n, s, !0), r;
}
function La(e, t, n = {}, s, o, l) {
  let i;
  const a = Pt({ actions: {} }, n), r = { deep: !0 };
  let u, c, d = [], f = [], p;
  const m = s.state.value[e];
  !l && !m && (s.state.value[e] = {});
  let _;
  function y(D) {
    let A;
    u = c = !1, typeof D == "function" ? (D(s.state.value[e]), A = {
      type: Kn.patchFunction,
      storeId: e,
      events: p
    }) : (To(s.state.value[e], D), A = {
      type: Kn.patchObject,
      payload: D,
      storeId: e,
      events: p
    });
    const q = _ = Symbol();
    Sn().then(() => {
      _ === q && (u = !0);
    }), c = !0, pn(d, A, s.state.value[e]);
  }
  const g = l ? function() {
    const { state: A } = n, q = A ? A() : {};
    this.$patch(($) => {
      Pt($, q);
    });
  } : (
    /* istanbul ignore next */
    Ma
  );
  function x() {
    i.stop(), d = [], f = [], s._s.delete(e);
  }
  const I = (D, A = "") => {
    if (Xl in D)
      return D[po] = A, D;
    const q = function() {
      Qs(s);
      const $ = Array.from(arguments), S = [], M = [];
      function V(k) {
        S.push(k);
      }
      function R(k) {
        M.push(k);
      }
      pn(f, {
        args: $,
        name: q[po],
        store: C,
        after: V,
        onError: R
      });
      let U;
      try {
        U = D.apply(this && this.$id === e ? this : C, $);
      } catch (k) {
        throw pn(M, k), k;
      }
      return U instanceof Promise ? U.then((k) => (pn(S, k), k)).catch((k) => (pn(M, k), Promise.reject(k))) : (pn(S, U), U);
    };
    return q[Xl] = !0, q[po] = A, q;
  }, w = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: ql.bind(null, f),
    $patch: y,
    $reset: g,
    $subscribe(D, A = {}) {
      const q = ql(d, D, A.detached, () => $()), $ = i.run(() => Ue(() => s.state.value[e], (S) => {
        (A.flush === "sync" ? c : u) && D({
          storeId: e,
          type: Kn.direct,
          events: p
        }, S);
      }, Pt({}, r, A)));
      return q;
    },
    $dispose: x
  }, C = /* @__PURE__ */ cn(w);
  s._s.set(e, C);
  const T = (s._a && s._a.runWithContext || zu)(() => s._e.run(() => (i = mi()).run(() => t({ action: I }))));
  for (const D in T) {
    const A = T[D];
    if (/* @__PURE__ */ ge(A) && !Xu(A) || /* @__PURE__ */ vt(A))
      l || (m && qu(A) && (/* @__PURE__ */ ge(A) ? A.value = m[D] : To(A, m[D])), s.state.value[e][D] = A);
    else if (typeof A == "function") {
      const q = I(A, D);
      T[D] = q, a.actions[D] = A;
    }
  }
  return Pt(C, T), Pt(/* @__PURE__ */ pe(C), T), Object.defineProperty(C, "$state", {
    get: () => s.state.value[e],
    set: (D) => {
      y((A) => {
        Pt(A, D);
      });
    }
  }), s._p.forEach((D) => {
    Pt(C, i.run(() => D({
      store: C,
      app: s._a,
      pinia: s,
      options: a
    })));
  }), m && l && n.hydrate && n.hydrate(C.$state, m), u = !0, c = !0, C;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function el(e, t, n) {
  let s, o;
  const l = typeof t == "function";
  typeof e == "string" ? (s = e, o = l ? n : t) : (o = e, s = e.id);
  function i(a, r) {
    const u = Rr();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (u ? Vn(Ca, null) : null), a && Qs(a), a = Sa, a._s.has(s) || (l ? La(s, t, o, a) : Yu(s, o, a)), a._s.get(s);
  }
  return i.$id = s, i;
}
function Ju(e) {
  {
    const t = /* @__PURE__ */ pe(e), n = {};
    for (const s in t) {
      const o = t[s];
      o.effect ? n[s] = // ...
      X({
        get: () => e[s],
        set(l) {
          e[s] = l;
        }
      }) : (/* @__PURE__ */ ge(o) || /* @__PURE__ */ vt(o)) && (n[s] = // ---
      /* @__PURE__ */ Lr(e, s));
    }
    return n;
  }
}
let nn = null;
function Qu(e) {
  return nn || (nn = Fa(), nn);
}
function Zs() {
  return nn || (nn = Fa()), nn;
}
const Zu = {
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
function Ia(e) {
  return Zu[e];
}
const ed = ["title", "aria-label", "innerHTML"], td = /* @__PURE__ */ we({
  name: "FilIcon",
  __name: "FilIcon",
  props: {
    name: {},
    size: { default: 16 },
    title: {}
  },
  setup(e) {
    return (t, n) => (F(), E("span", {
      class: "fil-icon",
      style: Ke({ width: e.size + "px", height: e.size + "px" }),
      title: e.title,
      role: "img",
      "aria-label": e.title ?? e.name,
      innerHTML: b(Ia)(e.name)
    }, null, 12, ed));
  }
}), xn = /* @__PURE__ */ Ce(td, [["__scopeId", "data-v-dfb78d9f"]]), fs = /* @__PURE__ */ re({});
let Yl = !1;
const es = /* @__PURE__ */ el("fil/help", () => {
  const e = /* @__PURE__ */ re(null);
  function t(a) {
    for (const [r, u] of Object.entries(a))
      fs.value[r] = u;
  }
  function n() {
    Yl || (Yl = !0, Promise.resolve().then(() => lp).then(({ HELP_DEFAULTS: a }) => t(a)).catch((a) => console.warn("[FiL_Design_ImageMind] help defaults import failed:", a)));
  }
  function s(a) {
    return fs.value[a];
  }
  function o() {
    return Object.values(fs.value);
  }
  function l(a) {
    n(), e.value = a;
  }
  function i() {
    e.value = null;
  }
  return {
    registry: fs,
    activeHelpId: e,
    ensureHelpDefaultsInjected: n,
    registerAll: t,
    get: s,
    list: o,
    value_open: l,
    value_close: i
  };
}), Aa = "FiL_Design_ImageMind", Rt = "/fil_design_imagemind", an = `[${Aa}]`, nd = `${Aa}.UI`;
async function Da(e) {
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
function Jl(e) {
  var o;
  const n = `/view?${new URLSearchParams({
    filename: e.filename,
    type: e.type || "temp",
    subfolder: e.subfolder || ""
  }).toString()}`, s = globalThis;
  return (o = s.api) != null && o.apiURL ? s.api.apiURL(n) : n;
}
function ka() {
  var t;
  const e = globalThis;
  if ((t = e.api) != null && t.fetchApi) return (n, s) => e.api.fetchApi(n, s);
  if (e.fetch) return e.fetch.bind(globalThis);
  throw new Error(`${an} no HTTP transport (api.fetchApi or window.fetch undefined)`);
}
async function Tn(e) {
  const t = await ka()(e);
  return Da(t);
}
async function mo(e, t) {
  const n = await ka()(e, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  });
  return Da(n);
}
const Qt = {
  loadAccounts: () => Tn(`${Rt}/auth`),
  saveAccounts: (e) => mo(`${Rt}/auth`, {
    accounts: e
  }),
  loadModels: (e, t = !1) => Tn(`${Rt}/models/${encodeURIComponent(e)}${t ? "?force=1" : ""}`),
  probe: (e, t = "") => mo(`${Rt}/provider_probe`, { provider: e, model: t }),
  listProviders: () => Tn(`${Rt}/providers`),
  saveCompareImage: (e) => mo(`${Rt}/compare/save`, { image: e }),
  nodeContracts: () => Tn(`${Rt}/node_contracts`)
};
function Ea(e, t, n) {
  var o, l, i, a, r, u, c, d;
  const s = n ?? globalThis;
  try {
    const f = (i = (l = (o = s.app) == null ? void 0 : o.extensionManager) == null ? void 0 : l.setting) == null ? void 0 : i.get;
    if (typeof f == "function") return f(e, t);
    const p = ((r = (a = s.ui) == null ? void 0 : a.settings) == null ? void 0 : r.getSettingValue) ?? ((d = (c = (u = globalThis.app) == null ? void 0 : u.ui) == null ? void 0 : c.settings) == null ? void 0 : d.getSettingValue);
    if (typeof p == "function") return p(e, t);
  } catch (f) {
    console.warn(`[FiL_Design_ImageMind] setting read failed for "${e}":`, f);
  }
  return t;
}
const sd = "FiL_Design_ImageMind.Language", Ta = "en", zn = /* @__PURE__ */ cn({
  lang: Ta,
  translations: {},
  loaded: !1
});
let Ql = null;
async function od(e) {
  try {
    const t = await Tn(`/fil_design_imagemind/locale/${encodeURIComponent(e)}`);
    zn.translations = t, zn.lang = e;
  } catch (t) {
    console.warn(`[FiL_Design_ImageMind] failed to load locale "${e}":`, t);
  } finally {
    zn.loaded = !0;
  }
}
function ld() {
  if (Ql) return;
  const e = Ea(sd, Ta);
  Ql = od(e);
}
function St() {
  ld();
  function e(t, n) {
    return zn.translations[t] ?? n;
  }
  return { t: e, state: /* @__PURE__ */ ys(zn) };
}
const id = ["title"], ad = /* @__PURE__ */ we({
  __name: "FilNodeHelpBadge",
  props: {
    nodeId: {}
  },
  setup(e) {
    const t = e, n = es(), { t: s } = St();
    function o() {
      n.value_open(t.nodeId);
    }
    return (l, i) => (F(), E("button", {
      type: "button",
      class: "fil-node-help-badge",
      title: b(s)("tt_node_help", "Help for this node"),
      onClick: o
    }, [
      z(xn, {
        name: "help",
        size: 13
      })
    ], 8, id));
  }
}), rd = /* @__PURE__ */ Ce(ad, [["__scopeId", "data-v-3001cdba"]]), cd = { class: "fil-node-shell" }, ud = /* @__PURE__ */ we({
  __name: "FilNodeShell",
  props: {
    root: {},
    state: {},
    comfyClass: {}
  },
  setup(e) {
    return (t, n) => (F(), E("div", cd, [
      z(rd, { "node-id": e.comfyClass }, null, 8, ["node-id"]),
      (F(), Ie(oc(e.root), { state: e.state }, null, 8, ["state"]))
    ]));
  }
}), dd = /* @__PURE__ */ Ce(ud, [["__scopeId", "data-v-0fbe412b"]]), fd = "__filVueMounted";
function jt(e, t, n, s) {
  const o = e;
  if (typeof o.addDOMWidget != "function")
    return console.warn(`[FiL_Design_ImageMind] domWidgetHost: node.addDOMWidget not available for "${t}" — ComfyUI core too old?`), null;
  const l = document.createElement("div");
  l.className = "fil-vue-host", l.style.width = "100%", l.style.boxSizing = "border-box", l.style.minHeight = `${s.height}px`, l.style.height = "auto", l[fd] = !0, l.addEventListener(
    "wheel",
    (m) => {
      var y, g;
      const _ = (g = (y = globalThis.app) == null ? void 0 : y.canvas) == null ? void 0 : g.canvas;
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
  const i = /* @__PURE__ */ cn(s.state);
  let a = s.height;
  const r = o.addDOMWidget(t, "custom", l, {
    hideOnZoom: !0,
    getValue: () => i,
    setValue: (m) => {
      m && typeof m == "object" && Object.assign(i, m);
    },
    getHeight: () => a,
    ...s.onDraw ? { onDraw: s.onDraw } : {}
  }), u = Ys(dd, { root: n, state: i, comfyClass: o.comfyClass ?? "default" }).use(Zs());
  u.mount(l);
  let c = 0;
  const d = new ResizeObserver(() => {
    c || (c = requestAnimationFrame(() => {
      var _, y;
      c = 0;
      const m = Math.ceil(l.scrollHeight / 4) * 4;
      if (!(Math.abs(m - a) < 2)) {
        if (a = m, o.computeSize && o.setSize && o.size) {
          const [g] = o.size, [, x] = o.computeSize();
          o.setSize([g, x]);
        }
        (y = (_ = o.graph) == null ? void 0 : _.setDirtyCanvas) == null || y.call(_, !0, !0);
      }
    }));
  });
  d.observe(l);
  const f = { widget: r, host: l, app: u, state: i, unmount: p };
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
function Wt(e) {
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
function de(e, t) {
  const n = e;
  if (n.widgets)
    return n.widgets.find((s) => s.name === t);
}
function dn(e, t) {
  return new Proxy({ ...t }, {
    set(n, s, o) {
      n[s] = o;
      const l = de(e, String(s));
      return l && (l.value = o), !0;
    }
  });
}
function me(e, t, n) {
  if (!e) return n;
  const s = e.value;
  return t === "number" && typeof s == "number" && Number.isFinite(s) || t === "boolean" && typeof s == "boolean" || t === "string" && typeof s == "string" ? s : (console.warn(
    `[FiL_Design_ImageMind] widget "${e.name}" had a corrupted value (expected ${t}) — resetting to default. This usually means the workflow was saved with an older version of this node.`
  ), e.value = n, n);
}
const Zl = 4, pd = {
  info: 3500,
  success: 3e3,
  warning: 5e3,
  error: 6e3
};
let md = 1;
const $t = /* @__PURE__ */ el("fil/toast", () => {
  const e = /* @__PURE__ */ re([]), t = /* @__PURE__ */ re([]);
  function n(u, c, d = {}) {
    const f = {
      id: md++,
      level: u,
      text: c == null ? "" : String(c),
      timeout: d.timeout ?? pd[u],
      sticky: !!d.sticky,
      action: d.action ?? null
    };
    return e.value.length < Zl ? e.value.push(f) : t.value.push(f), f;
  }
  function s(u, c) {
    return n("info", u, c);
  }
  function o(u, c) {
    return n("success", u, c);
  }
  function l(u, c) {
    return n("warning", u, c);
  }
  function i(u, c) {
    return n("error", u, c);
  }
  function a(u) {
    e.value = e.value.filter((c) => c.id !== u), t.value.length > 0 && e.value.length < Zl && e.value.push(t.value.shift());
  }
  function r() {
    e.value = [], t.value = [];
  }
  return { items: e, queue: t, info: s, success: o, warning: l, error: i, push: n, dismiss: a, dismissAll: r };
});
function hd() {
  var t, n;
  return ((n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.toast) ?? null;
}
function ps(e, t) {
  const n = hd();
  if (n != null && n.addAlert && (e === "info" || e === "success" || e === "warning" || e === "error"))
    try {
      n.addAlert(t);
      return;
    } catch (s) {
      console.warn("[FiL_Design_ImageMind toast] extensionManager.toast failed:", s);
    }
  $t().push(e, t, {});
}
const st = {
  info: (e) => ps("info", e),
  success: (e) => ps("success", e),
  warning: (e) => ps("warning", e),
  error: (e) => ps("error", e),
  // Direct Pinia access for Vue components that want actions/sticky/toasts.
  infoRich: (e, t) => $t().info(e, t),
  successRich: (e, t) => $t().success(e, t),
  warningRich: (e, t) => $t().warning(e, t),
  errorRich: (e, t) => $t().error(e, t),
  dismissAll: () => $t().dismissAll()
}, gd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  toast: st,
  useToastStore: $t
}, Symbol.toStringTag, { value: "Module" }));
function ei() {
  var t, n, s, o, l, i, a, r;
  return !!(((o = (s = (n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.setting) == null ? void 0 : s.get) == null ? void 0 : o.call(s, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? ((r = (a = (i = (l = globalThis.app) == null ? void 0 : l.ui) == null ? void 0 : i.settings) == null ? void 0 : a.getSettingValue) == null ? void 0 : r.call(a, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? !0);
}
function ti() {
  function e(s, o, l, i) {
  }
  function t(s, o, l, i) {
    ei() && st.success("Connected");
  }
  function n(s, o) {
    ei() && st.info("Disconnected");
  }
  return { onConnectionsChange: e, onConnect: t, onDisconnect: n };
}
function Kt(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype, n = t.onNodeCreated;
  t.onNodeCreated = function(...l) {
    const i = n == null ? void 0 : n.apply(this, l);
    return this.color, i;
  };
  const s = t.onConnect;
  t.onConnect = function(...l) {
    const { onConnect: i } = ti();
    return i(...l), s == null ? void 0 : s.apply(this, l);
  };
  const o = t.onDisconnect;
  t.onDisconnect = function(...l) {
    const { onDisconnect: i } = ti();
    return i(...l), o == null ? void 0 : o.apply(this, l);
  };
}
const _d = /* @__PURE__ */ Ut(() => Promise.resolve().then(() => mp)), bd = {
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
      const r = o == null ? void 0 : o.apply(this, a), u = this, c = de(u, "seed"), d = me(c, "number", 0);
      c && (c.hidden = !0);
      const f = de(u, "control_after_generate");
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
      return u._filSeedState = p, jt(u, "fil_seed_view", _d, { state: p, height: 185 }), r;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...a) {
      const r = l == null ? void 0 : l.apply(this, a), u = this, c = u._filSeedState;
      return c && (c.nodeState.seed = me(de(u, "seed"), "number", 0)), r;
    };
    const i = s.onRemoved;
    s.onRemoved = function(...a) {
      return Wt(this), i == null ? void 0 : i.apply(this, a);
    }, Kt(e);
  }
}, vd = /* @__PURE__ */ Ut(() => Promise.resolve().then(() => Kp)), yd = {
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
    ], l = s.onNodeCreated;
    s.onNodeCreated = function(...r) {
      const u = l == null ? void 0 : l.apply(this, r), c = this, d = me(de(c, "provider"), "string", "ollama"), f = me(de(c, "model"), "string", "(loading...)"), p = me(de(c, "temperature"), "number", 0.7), m = me(de(c, "max_tokens"), "number", 0), _ = me(de(c, "rate_limit_ms"), "number", 100), y = me(de(c, "max_image_side"), "number", 1024);
      for (const x of ["provider", "model", "refresh_models", "temperature", "max_tokens", "rate_limit_ms", "seed", "control_after_generate", "max_image_side"]) {
        const I = de(c, x);
        I && (I.hidden = !0);
      }
      const g = {
        nodeState: dn(c, {
          provider: d,
          model: f,
          temperature: p,
          max_tokens: m,
          rate_limit_ms: _,
          max_image_side: y
        }),
        initialValues: {
          provider: d,
          model: f,
          temperature: p,
          max_tokens: m,
          rate_limit_ms: _,
          max_image_side: y
        },
        ui: {}
      };
      return Object.defineProperty(g, "node", { value: c, enumerable: !1, configurable: !0 }), c._filProviderState = g, jt(c, "fil_provider_view", vd, { state: g, height: 340 }), u;
    };
    const i = s.onConfigure;
    s.onConfigure = function(...r) {
      const u = i == null ? void 0 : i.apply(this, r), c = this, d = c._filProviderState;
      if (!d) return u;
      const f = d.nodeState;
      for (const { name: p, kind: m, fallback: _ } of o)
        f[p] = me(de(c, p), m, _);
      return u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...r) {
      return Wt(this), a == null ? void 0 : a.apply(this, r);
    }, Kt(e);
  }
}, wd = /* @__PURE__ */ Ut(() => Promise.resolve().then(() => Hm)), xd = {
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
    ], l = s.onNodeCreated;
    s.onNodeCreated = function(...r) {
      const u = l == null ? void 0 : l.apply(this, r), c = this, d = {}, f = {};
      for (const g of o) {
        const x = de(c, g);
        if (!x) continue;
        const I = me(x, "string", "");
        d[g] = I, f[g] = I, x.hidden = !0;
      }
      const p = de(c, "seed"), m = de(c, "control_after_generate"), _ = me(p, "number", -1);
      p && (p.hidden = !0), m && (m.hidden = !0), d.seed = _, f.seed = _, f.seed_mode = "random";
      const y = {
        nodeState: dn(c, f),
        initialValues: d,
        ui: {},
        lastRunSeed: null
      };
      return c._filScannerSeedState = y, jt(c, "fil_scanner_view", wd, { state: y, height: 460 }), u;
    };
    const i = s.onConfigure;
    s.onConfigure = function(...r) {
      const u = i == null ? void 0 : i.apply(this, r), c = this, d = c._filScannerSeedState;
      if (!d) return u;
      for (const f of o) {
        const p = de(c, f);
        p && (d.nodeState[f] = me(p, "string", ""));
      }
      return d.nodeState.seed = me(de(c, "seed"), "number", -1), u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...r) {
      return Wt(this), a == null ? void 0 : a.apply(this, r);
    }, Kt(e);
  }
}, Sd = /* @__PURE__ */ Ut(() => Promise.resolve().then(() => Ym)), Cd = {
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
    }, l = s.onNodeCreated;
    s.onNodeCreated = function(...r) {
      const u = l == null ? void 0 : l.apply(this, r), c = this, d = {}, f = {};
      for (const m of Object.keys(o)) {
        const _ = de(c, m), y = me(_, "boolean", o[m]);
        d[m] = y, f[m] = y, _ && (_.hidden = !0);
      }
      const p = { nodeState: dn(c, d), initialValues: f, ui: {} };
      return c._filCleanerState = p, jt(c, "fil_cleaner_view", Sd, { state: p, height: 460 }), u;
    };
    const i = s.onConfigure;
    s.onConfigure = function(...r) {
      const u = i == null ? void 0 : i.apply(this, r), c = this, d = c._filCleanerState;
      if (!d) return u;
      for (const f of Object.keys(o))
        d.nodeState[f] = me(de(c, f), "boolean", o[f]);
      return u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...r) {
      return Wt(this), a == null ? void 0 : a.apply(this, r);
    }, Kt(e);
  }
}, Fd = /* @__PURE__ */ Ut(() => Promise.resolve().then(() => sh)), Md = {
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
      const r = o == null ? void 0 : o.apply(this, a), u = this, c = de(u, "swap"), d = de(u, "resize_mode"), f = de(u, "max_resolution"), p = {
        swap: me(c, "boolean", !1),
        resize_mode: me(d, "string", "Off"),
        max_resolution: me(f, "number", 4096)
      };
      for (const g of [c, d, f])
        g && (g.hidden = !0);
      const m = {
        nodeState: dn(u, p),
        initialValues: { ...p },
        ui: {
          compare_mode: "wipe",
          compare_position: 0.5,
          compare_opacity: 0.5,
          settings_collapsed: !0
        }
      };
      u._filCompareState = m;
      const _ = jt(u, "fil_compare_view", Fd, { state: m, height: 380 }), y = u.onExecuted;
      return u.onExecuted = function(g) {
        const x = y == null ? void 0 : y.apply(this, [g]), I = g;
        return _ && I && (_.state.ui.compare_images = { a: I.a_images ?? [], b: I.b_images ?? [] }), x;
      }, r;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...a) {
      const r = l == null ? void 0 : l.apply(this, a), u = this, c = u._filCompareState;
      return c && (c.nodeState.swap = me(de(u, "swap"), "boolean", !1), c.nodeState.resize_mode = me(de(u, "resize_mode"), "string", "Off"), c.nodeState.max_resolution = me(de(u, "max_resolution"), "number", 4096)), r;
    };
    const i = s.onRemoved;
    s.onRemoved = function(...a) {
      return Wt(this), i == null ? void 0 : i.apply(this, a);
    }, Kt(e);
  }
}, Ld = /* @__PURE__ */ Ut(() => Promise.resolve().then(() => ph)), Id = {
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
    }, l = {
      auto_mode: !1,
      non_square_tiles: !1,
      show_grid_preview: !0
    }, i = { auto_profile: "Balanced" }, a = s.onNodeCreated;
    s.onNodeCreated = function(...c) {
      const d = a == null ? void 0 : a.apply(this, c), f = this, p = {}, m = {};
      for (const y of Object.keys(o)) {
        const g = de(f, y);
        if (!g) continue;
        const x = me(g, "number", o[y]);
        p[y] = x, m[y] = x, g.hidden = !0;
      }
      for (const y of Object.keys(l)) {
        const g = de(f, y);
        if (!g) continue;
        const x = me(g, "boolean", l[y]);
        p[y] = x, m[y] = x, g.hidden = !0;
      }
      for (const y of Object.keys(i)) {
        const g = de(f, y);
        if (!g) continue;
        const x = me(g, "string", i[y]);
        p[y] = x, m[y] = x, g.hidden = !0;
      }
      const _ = { nodeState: dn(f, p), initialValues: m, ui: {} };
      return f._filUpscaleState = _, jt(f, "fil_upscale_view", Ld, { state: _, height: 420 }), d;
    };
    const r = s.onConfigure;
    s.onConfigure = function(...c) {
      const d = r == null ? void 0 : r.apply(this, c), f = this, p = f._filUpscaleState;
      if (!p) return d;
      for (const m of Object.keys(o))
        p.nodeState[m] = me(de(f, m), "number", o[m]);
      for (const m of Object.keys(l))
        p.nodeState[m] = me(de(f, m), "boolean", l[m]);
      for (const m of Object.keys(i))
        p.nodeState[m] = me(de(f, m), "string", i[m]);
      return d;
    };
    const u = s.onRemoved;
    s.onRemoved = function(...c) {
      return Wt(this), u == null ? void 0 : u.apply(this, c);
    }, Kt(e);
  }
}, Ad = /* @__PURE__ */ Ut(() => Promise.resolve().then(() => Ih)), On = {
  seed: 0,
  steps: 20,
  cfg: 7,
  denoise: 1
}, Pn = {
  sampler_name: "euler",
  scheduler: "normal",
  preview_method: "auto",
  vae_decode: "true"
}, Dd = [
  ...Object.keys(On),
  ...Object.keys(Pn),
  "control_after_generate"
], kd = {
  id: "FiLKSampler",
  register(e, t) {
    Ht(e, {
      minSize: [320, 360],
      family: "sampling",
      description: "Full sampler/scheduler set, passthrough outputs, preview, HighRes-fix script.",
      badges: [{ text: "sampler", color: "#7aa2f7", text_color: "#0b0e14" }]
    });
    const s = e.prototype, o = s.onNodeCreated;
    s.onNodeCreated = function(...a) {
      const r = o == null ? void 0 : o.apply(this, a), u = this, c = {};
      for (const f of Object.keys(On))
        c[f] = me(de(u, f), "number", On[f]);
      for (const f of Object.keys(Pn))
        c[f] = me(de(u, f), "string", Pn[f]);
      for (const f of Dd) {
        const p = de(u, f);
        p && (p.hidden = !0);
      }
      const d = {
        nodeState: dn(u, c),
        initialValues: { ...c },
        ui: {}
      };
      return Object.defineProperty(d, "node", { value: u, enumerable: !1, configurable: !0 }), u._filKSamplerState = d, jt(u, "fil_ksampler_view", Ad, { state: d, height: 300 }), r;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...a) {
      const r = l == null ? void 0 : l.apply(this, a), u = this, c = u._filKSamplerState;
      if (!c) return r;
      for (const d of Object.keys(On))
        c.nodeState[d] = me(de(u, d), "number", On[d]);
      for (const d of Object.keys(Pn))
        c.nodeState[d] = me(de(u, d), "string", Pn[d]);
      return r;
    };
    const i = s.onRemoved;
    s.onRemoved = function(...a) {
      return Wt(this), i == null ? void 0 : i.apply(this, a);
    }, Kt(e);
  }
}, Ed = /* @__PURE__ */ Ut(() => Promise.resolve().then(() => Bh)), Oo = {
  upscale_by: 1.25,
  seed: 0,
  hires_steps: 12,
  denoise: 0.56,
  iterations: 1,
  strength: 1
}, Po = {
  upscale_type: "latent",
  hires_ckpt_name: "(use same)",
  latent_upscaler: "nearest-exact",
  pixel_upscaler: "",
  control_net_name: ""
}, Ro = {
  use_same_seed: !0,
  use_controlnet: !1
}, Td = [
  ...Object.keys(Oo),
  ...Object.keys(Po),
  ...Object.keys(Ro),
  "control_after_generate"
], Od = {
  id: "FiLHighResFix",
  register(e, t) {
    Ht(e, {
      minSize: [320, 380],
      family: "sampling",
      description: "Latent/pixel upscale + re-sample settings, packed into a script for FiLKSampler.",
      badges: [{ text: "hires", color: "#bb9af7", text_color: "#0b0e14" }]
    });
    const s = e.prototype, o = (r, u) => {
      for (const c of Object.keys(Oo))
        u[c] = me(de(r, c), "number", Oo[c]);
      for (const c of Object.keys(Po))
        u[c] = me(de(r, c), "string", Po[c]);
      for (const c of Object.keys(Ro))
        u[c] = me(de(r, c), "boolean", Ro[c]);
    }, l = s.onNodeCreated;
    s.onNodeCreated = function(...r) {
      const u = l == null ? void 0 : l.apply(this, r), c = this, d = {};
      o(c, d);
      for (const p of Td) {
        const m = de(c, p);
        m && (m.hidden = !0);
      }
      const f = {
        nodeState: dn(c, d),
        initialValues: { ...d },
        ui: {}
      };
      return Object.defineProperty(f, "node", { value: c, enumerable: !1, configurable: !0 }), c._filHiResFixState = f, jt(c, "fil_hiresfix_view", Ed, { state: f, height: 360 }), u;
    };
    const i = s.onConfigure;
    s.onConfigure = function(...r) {
      const u = i == null ? void 0 : i.apply(this, r), c = this, d = c._filHiResFixState;
      return d && o(c, d.nodeState), u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...r) {
      return Wt(this), a == null ? void 0 : a.apply(this, r);
    }, Kt(e);
  }
}, Pd = [
  bd,
  yd,
  xd,
  Cd,
  Md,
  Id,
  kd,
  Od
], Oa = Object.fromEntries(
  Pd.map((e) => [e.id, e])
), Rd = ["aria-label"], Nd = { class: "fil-modal-header" }, $d = { class: "fil-modal-title" }, Vd = { class: "fil-modal-body" }, Bd = /* @__PURE__ */ we({
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
    const n = e, s = t, o = /* @__PURE__ */ re(null), l = /* @__PURE__ */ re(null);
    function i() {
      s("update:open", !1), s("close");
    }
    function a(d) {
      n.closeOnBackdrop && d.target === d.currentTarget && i();
    }
    function r(d) {
      n.closeOnEsc && d.key === "Escape" && i(), d.key === "Tab" && u(d);
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
    return Ue(
      () => n.open,
      (d) => {
        var f;
        d ? (l.value = document.activeElement, Sn(() => {
          var m;
          (m = (o.value ? c(o.value) : [])[0] || o.value) == null || m.focus();
        })) : ((f = l.value) == null || f.focus(), l.value = null);
      }
    ), un(() => {
      document.addEventListener("keydown", r);
    }), Cn(() => {
      document.removeEventListener("keydown", r);
    }), (d, f) => (F(), Ie(Ui, { to: "body" }, [
      z(Qc, { name: "fil-modal" }, {
        default: Ws(() => [
          e.open ? (F(), E("div", {
            key: 0,
            ref_key: "modalRef",
            ref: o,
            class: "fil-modal-backdrop",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title || "Dialog",
            onClick: a
          }, [
            O("div", {
              class: "fil-modal-panel",
              style: Ke({ maxWidth: e.width })
            }, [
              O("div", Nd, [
                O("span", $d, Q(e.title), 1),
                O("button", {
                  class: "fil-modal-close",
                  title: "Close",
                  onClick: i
                }, [
                  z(xn, {
                    name: "close",
                    size: 14
                  })
                ])
              ]),
              O("div", Vd, [
                ic(d.$slots, "default", {}, void 0, !0)
              ])
            ], 4)
          ], 8, Rd)) : oe("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Pa = /* @__PURE__ */ Ce(Bd, [["__scopeId", "data-v-00452928"]]), Ud = { class: "fil-help-title" }, Hd = {
  key: 0,
  class: "fil-help-body"
}, jd = { key: 1 }, Wd = {
  key: 2,
  class: "fil-help-table"
}, Kd = {
  key: 3,
  class: "fil-help-code"
}, zd = {
  key: 1,
  class: "fil-help-empty"
}, Gd = /* @__PURE__ */ we({
  __name: "FilHelpPopup",
  setup(e) {
    const t = es(), n = X(() => {
      const o = t.activeHelpId;
      return o ? t.get(o) ?? null : null;
    }), s = X({
      get: () => t.activeHelpId !== null,
      set: (o) => {
        o || t.value_close();
      }
    });
    return Ue(n, (o) => {
      o || t.value_close();
    }), (o, l) => (F(), Ie(Pa, {
      open: s.value,
      "onUpdate:open": l[0] || (l[0] = (i) => s.value = i),
      title: "FiL LLM Help",
      width: "600px",
      onClose: l[1] || (l[1] = (i) => b(t).value_close())
    }, {
      default: Ws(() => {
        var i;
        return [
          n.value ? (F(), E(fe, { key: 0 }, [
            O("h2", Ud, Q(n.value.title), 1),
            n.value.body ? (F(), E("p", Hd, Q(n.value.body), 1)) : oe("", !0),
            (i = n.value.bullets) != null && i.length ? (F(), E("ul", jd, [
              (F(!0), E(fe, null, Ae(n.value.bullets, (a, r) => (F(), E("li", {
                key: r,
                class: "fil-help-bullet"
              }, [
                z(xn, {
                  name: "chevronRight",
                  size: 12
                }),
                O("span", null, Q(a), 1)
              ]))), 128))
            ])) : oe("", !0),
            n.value.table ? (F(), E("table", Wd, [
              O("thead", null, [
                O("tr", null, [
                  (F(!0), E(fe, null, Ae(n.value.table.headers, (a) => (F(), E("th", { key: a }, Q(a), 1))), 128))
                ])
              ]),
              O("tbody", null, [
                (F(!0), E(fe, null, Ae(n.value.table.rows, (a, r) => (F(), E("tr", { key: r }, [
                  (F(!0), E(fe, null, Ae(a, (u, c) => (F(), E("td", { key: c }, Q(u), 1))), 128))
                ]))), 128))
              ])
            ])) : oe("", !0),
            n.value.code ? (F(), E("pre", Kd, [
              O("code", null, Q(n.value.code), 1)
            ])) : oe("", !0)
          ], 64)) : (F(), E("p", zd, "No help available for this node."))
        ];
      }),
      _: 1
    }, 8, ["open"]));
  }
}), qd = /* @__PURE__ */ Ce(Gd, [["__scopeId", "data-v-536c1547"]]);
let ho = null;
function Xd(e) {
  if (ho) return;
  const t = document.createElement("div");
  t.id = "__fil_help_popup_host", document.body.appendChild(t), ho = Ys(qd).use(Zs()), ho.mount(t), console.info("[FiL_Design_ImageMind] help popup mounted");
}
function Yd() {
  var o, l, i, a, r, u, c, d;
  const e = globalThis, t = "FiL_Design_ImageMind.RunButton.AnimationDuration", n = ((a = (i = (l = (o = e.app) == null ? void 0 : o.extensionManager) == null ? void 0 : l.setting) == null ? void 0 : i.get) == null ? void 0 : a.call(i, t, "Normal")) ?? ((d = (c = (u = (r = globalThis.app) == null ? void 0 : r.ui) == null ? void 0 : u.settings) == null ? void 0 : c.getSettingValue) == null ? void 0 : d.call(c, t, "Normal")) ?? "Normal";
  return { Fast: 200, Normal: 400, Slow: 600 }[String(n)] || 400;
}
function Jd(e, t) {
  var u, c, d, f, p, m, _, y, g, x;
  if (!(((f = (d = (c = (u = globalThis.app) == null ? void 0 : u.extensionManager) == null ? void 0 : c.setting) == null ? void 0 : d.get) == null ? void 0 : f.call(d, "FiL_Design_ImageMind.RunButton.Enabled", !0)) ?? ((y = (_ = (m = (p = globalThis.app) == null ? void 0 : p.ui) == null ? void 0 : m.settings) == null ? void 0 : _.getSettingValue) == null ? void 0 : y.call(_, "FiL_Design_ImageMind.RunButton.Enabled", !0)) ?? !0)) return;
  const o = (x = (g = e == null ? void 0 : e.canvas) == null ? void 0 : g.nodeEls) == null ? void 0 : x[t];
  if (!o) return;
  const l = o.querySelector(".comfy-node-header");
  if (!l) return;
  const i = Yd(), a = l.style.background, r = Math.max(60, i * 0.3);
  l.style.transition = `background ${r}ms ease`, l.style.background = "var(--fil-accent, #7c3aed)", setTimeout(() => {
    l.style.background = a;
  }, i);
}
function Qd(e) {
  const t = e == null ? void 0 : e.canvas;
  if (!(t != null && t.ds)) {
    console.warn("[FiL_Design_ImageMind] run button FX: canvas not available, skipping");
    return;
  }
  const n = t.ds.executeNode;
  typeof n == "function" ? (t.ds.executeNode = async function(s) {
    const o = await n.call(this, s);
    return (typeof s == "string" || typeof s == "number") && Jd({ canvas: t }, s), o;
  }, console.info("[FiL_Design_ImageMind] run button FX installed (execute hook)")) : console.warn("[FiL_Design_ImageMind] run button FX: executeNode not found, skipping");
}
const Zd = ["onMouseenter", "onMouseleave"], ef = { class: "fil-toast-text" }, tf = ["onClick"], nf = ["aria-label", "onClick"], sf = /* @__PURE__ */ we({
  __name: "FilToastStack",
  setup(e) {
    const { t } = St(), n = $t(), { items: s } = Ju(n), o = /* @__PURE__ */ re(null), l = /* @__PURE__ */ new Map(), i = {
      info: "var(--fil-muted, #9ca8b5)",
      success: "var(--fil-ok, #62c987)",
      warning: "var(--fil-accent, #f08a45)",
      error: "var(--fil-danger, #ef6666)"
    };
    function a(f) {
      f.sticky || f.timeout <= 0 || l.set(
        f.id,
        setTimeout(() => n.dismiss(f.id), f.timeout)
      );
    }
    function r(f) {
      const p = l.get(f.id);
      p && (clearTimeout(p), l.delete(f.id));
    }
    function u(f) {
      !l.has(f.id) && !f.sticky && a(f);
    }
    function c(f) {
      n.dismiss(f.id);
    }
    const d = X(() => s.value);
    return un(() => {
      for (const f of s.value) a(f);
    }), Cn(() => {
      for (const f of l.values()) clearTimeout(f);
      l.clear();
    }), (f, p) => (F(), E("div", {
      ref_key: "root",
      ref: o,
      class: "fil-toast-stack",
      role: "status",
      "aria-live": "polite"
    }, [
      (F(!0), E(fe, null, Ae(d.value, (m) => (F(), E("div", {
        key: m.id,
        class: Le(["fil-toast", `fil-toast-${m.level}`]),
        style: Ke({ "--toast-color": i[m.level] }),
        onMouseenter: (_) => r(m),
        onMouseleave: (_) => u(m)
      }, [
        p[0] || (p[0] = O("span", {
          class: "fil-toast-dot",
          "aria-hidden": "true"
        }, null, -1)),
        O("span", ef, Q(m.text), 1),
        m.action ? (F(), E("button", {
          key: 0,
          type: "button",
          class: "fil-toast-action",
          onClick: Wl((_) => {
            m.action.onClick(_), c(m);
          }, ["stop"])
        }, Q(m.action.label), 9, tf)) : oe("", !0),
        O("button", {
          type: "button",
          class: "fil-toast-close",
          "aria-label": b(t)("toast_close", "Close"),
          onClick: Wl((_) => c(m), ["stop"])
        }, " × ", 8, nf)
      ], 46, Zd))), 128))
    ], 512));
  }
}), of = /* @__PURE__ */ Ce(sf, [["__scopeId", "data-v-08cc58fa"]]);
let go = null;
function lf() {
  if (go) return;
  const e = document.createElement("div");
  document.body.appendChild(e), go = Ys(of).use(Zs()), go.mount(e);
  const t = globalThis;
  Promise.resolve().then(() => gd).then(({ toast: n }) => {
    t.__filToast = n, console.info("[FiL_Design_ImageMind] toast stack mounted");
  }).catch((n) => console.warn("[FiL_Design_ImageMind] toast store import failed:", n));
}
const af = "FiL_Design_ImageMind.Shortcuts.Enabled", rf = "__cheatsheet__", cf = [
  "#comfy-search-input",
  'input[name="search"]',
  'input[aria-label="Search"]',
  "#search-input",
  'input[placeholder*="search" i]'
];
function uf(e) {
  if (!e || typeof e != "object") return !1;
  const t = String(e.tagName || "").toLowerCase();
  return t === "input" || t === "textarea" || t === "select" || e.isContentEditable === !0;
}
function df() {
  for (const e of cf) {
    const t = document.querySelector(e);
    if (t) return t;
  }
  return null;
}
function No() {
  var t;
  const e = es();
  e.ensureHelpDefaultsInjected(), (t = e.value_open) == null || t.call(e, rf);
}
function Ra() {
  const e = df();
  if (!e) {
    st.info("ComfyUI search field not found");
    return;
  }
  try {
    e.focus(), "select" in e && e.select();
  } catch {
  }
}
function ff(e) {
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
            function: No
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
  window.addEventListener("keydown", (s) => pf(s, e), !0), console.info("[FiL_Design_ImageMind] shortcuts installed (fallback keydown handler)");
}
function pf(e, t) {
  var l, i, a, r, u, c, d, f, p;
  let n = !0;
  try {
    n = !!(((r = (a = (i = (l = globalThis.app) == null ? void 0 : l.extensionManager) == null ? void 0 : i.setting) == null ? void 0 : a.get) == null ? void 0 : r.call(a, af, !0)) ?? !0);
  } catch {
  }
  if (!n) return;
  const s = e.target, o = uf(s);
  if (e.key === "Escape") {
    try {
      const m = es();
      (u = m.value_close) == null || u.call(m);
    } catch {
    }
    o && ((c = s.blur) == null || c.call(s)), (d = e.preventDefault) == null || d.call(e);
    return;
  }
  if (!o) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "K" || e.key === "k")) {
      No(), e.preventDefault();
      return;
    }
    if (e.key === "?" || e.shiftKey && e.key === "/") {
      if (e.shiftKey) No();
      else {
        const m = t.canvas, _ = (m == null ? void 0 : m.selected_nodes) ?? {}, y = Object.values(_).filter(Boolean);
        if (y.length === 1) {
          const g = ((f = y[0]) == null ? void 0 : f.comfyClass) ?? "default", x = es();
          x.ensureHelpDefaultsInjected(), (p = x.value_open) == null || p.call(x, g);
        } else
          st.info("Select exactly one FiL_Design_ImageMind node, then press ?");
      }
      e.preventDefault();
      return;
    }
    e.key === "/" && !e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey && (Ra(), e.preventDefault());
  }
}
function mf(e) {
  ff(e), console.info("[FiL_Design_ImageMind] shortcuts installed");
}
const hf = 3e5, gf = ["ollama", "lmstudio", "openai", "google", "groq", "openrouter", "cloudflare"], Ts = gf, Na = /* @__PURE__ */ el("fil/providers", () => {
  const e = /* @__PURE__ */ re({}), t = /* @__PURE__ */ re({}), n = /* @__PURE__ */ re({}), s = /* @__PURE__ */ re({}), o = /* @__PURE__ */ re(null), l = X(() => Object.fromEntries(
    Object.entries(e.value).filter(([, g]) => (g == null ? void 0 : g.configured) || (g == null ? void 0 : g.account_id) || (g == null ? void 0 : g.base_url))
  ));
  async function i() {
    try {
      const g = await Qt.loadAccounts();
      e.value = g.accounts || {}, o.value = null;
    } catch (g) {
      o.value = g instanceof Error ? g.message : String(g);
    }
  }
  async function a(g, x) {
    try {
      const I = await Qt.saveAccounts({ [g]: x });
      e.value = I.accounts || {}, o.value = null, c(g, !0);
    } catch (I) {
      throw o.value = I instanceof Error ? I.message : String(I), I;
    }
  }
  async function r(g) {
    const x = await Qt.saveAccounts({
      [g]: { delete: !0 }
    });
    e.value = x.accounts || {};
  }
  async function u(g) {
    await a(g, {});
    try {
      await r(g);
    } catch (x) {
      o.value = x instanceof Error ? x.message : String(x);
    }
  }
  async function c(g, x = !1) {
    const I = t.value[g];
    if (I && !x && !I.error && I.cachedAt > 0 && Date.now() - I.cachedAt < hf)
      return I.list;
    I ? I.loading = !0 : t.value[g] = { list: [], visionModels: [], cachedAt: 0, loading: !0 };
    try {
      const w = await Qt.loadModels(g, x), C = w.models || [];
      return t.value[g] = {
        list: C,
        visionModels: w.vision_models || [],
        cachedAt: Date.now(),
        loading: !1
      }, w.status && w.status !== "available" && (t.value[g].error = w.message || w.status), C;
    } catch (w) {
      const C = w instanceof Error ? w.message : String(w);
      throw t.value[g] = {
        list: [],
        visionModels: [],
        cachedAt: 0,
        loading: !1,
        error: C
      }, o.value = C, w;
    }
  }
  function d(g) {
    const x = t.value[g];
    if (!(x != null && x.cachedAt)) return null;
    const I = Date.now() - x.cachedAt, w = Math.floor(I / 1e3);
    return w < 60 ? `${w}s` : w < 3600 ? `${Math.floor(w / 60)}m` : `${Math.floor(w / 3600)}h`;
  }
  async function f(g, x = "") {
    try {
      const I = await Qt.probe(g, x);
      return n.value[g] = I, I;
    } catch (I) {
      o.value = I instanceof Error ? I.message : String(I);
      return;
    }
  }
  async function p() {
    try {
      const g = await Qt.listProviders();
      s.value = g.providers || {};
    } catch {
    }
  }
  function m(g) {
    var x;
    return ((x = t.value[g]) == null ? void 0 : x.list) ?? [];
  }
  function _(g) {
    var x;
    return ((x = t.value[g]) == null ? void 0 : x.visionModels) ?? [];
  }
  function y(g) {
    var x;
    return !!((x = t.value[g]) != null && x.loading);
  }
  return {
    accounts: e,
    modelsByProvider: t,
    probeState: n,
    displayNames: s,
    lastError: o,
    configuredProviders: l,
    PROVIDER_LIST: Ts,
    loadAccounts: i,
    saveAccount: a,
    deleteAccount: u,
    deleteAccountRaw: r,
    loadModels: c,
    probe: f,
    loadDisplayNames: p,
    modelsFor: m,
    visionModelsFor: _,
    isLoading: y,
    cachedAgeLabel: d
  };
}), _f = ["title", "disabled", "aria-disabled"], bf = {
  key: 0,
  class: "fil-w-btn-spinner"
}, vf = ["innerHTML"], yf = { key: 2 }, wf = /* @__PURE__ */ we({
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
    const n = e, s = X(() => n.icon ? Ia(n.icon) : ""), o = t, l = X(() => [
      "fil-w-btn",
      n.variant === "accent" && "fil-w-btn-accent",
      n.variant === "danger" && "fil-w-btn-danger",
      n.variant === "icon" && "fil-w-btn-icon",
      n.variant === "full" && "fil-w-btn-full",
      n.variant === "sm" && "fil-w-btn-sm",
      n.flashing && "is-flashing",
      n.loading && "is-loading"
    ]), i = X(() => n.disabled || n.loading);
    function a(r) {
      i.value || o("click", r);
    }
    return (r, u) => (F(), E("button", {
      class: Le(l.value),
      title: e.title,
      disabled: i.value,
      "aria-disabled": i.value || void 0,
      onClick: a
    }, [
      e.loading ? (F(), E("span", bf)) : oe("", !0),
      e.icon && !e.loading ? (F(), E("span", {
        key: 1,
        class: "fil-w-btn-glyph",
        innerHTML: s.value
      }, null, 8, vf)) : oe("", !0),
      e.label ? (F(), E("span", yf, Q(e.loading ? "" : e.label), 1)) : oe("", !0)
    ], 10, _f));
  }
}), lt = /* @__PURE__ */ Ce(wf, [["__scopeId", "data-v-1fbb19ef"]]), $a = {
  ollama: "Ollama",
  lmstudio: "LM Studio",
  openai: "OpenAI",
  groq: "Groq",
  google: "Google AI",
  openrouter: "OpenRouter",
  cloudflare: "Cloudflare"
}, Va = {
  ollama: "provider-ollama",
  lmstudio: "provider-lmstudio",
  openai: "provider-openai",
  groq: "provider-groq",
  google: "provider-google",
  openrouter: "provider-openrouter",
  cloudflare: "provider-cloudflare"
}, xf = { class: "fil-pm-root" }, Sf = { class: "fil-pm-header" }, Cf = { class: "fil-pm-icon" }, Ff = { class: "fil-pm-name" }, Mf = {
  key: 0,
  class: "fil-pm-disp"
}, Lf = { class: "fil-pm-fields" }, If = { class: "fil-pm-field" }, Af = ["onUpdate:modelValue", "placeholder", "onKeydown"], Df = { class: "fil-pm-field" }, kf = ["onUpdate:modelValue", "onKeydown"], Ef = {
  key: 0,
  class: "fil-pm-field"
}, Tf = ["onUpdate:modelValue", "onKeydown"], Of = { class: "fil-pm-actions" }, Pf = {
  key: 0,
  class: "fil-pm-age"
}, Rf = {
  key: 0,
  class: "fil-pm-err"
}, Nf = {
  key: 1,
  class: "fil-pm-err"
}, $f = {
  key: 2,
  class: "fil-pm-models"
}, Vf = {
  key: 0,
  class: "fil-pm-vision-badge",
  title: "Vision-capable"
}, Bf = {
  key: 3,
  class: "fil-pm-err fil-pm-global-err"
}, Uf = /* @__PURE__ */ we({
  __name: "ProviderManager",
  setup(e) {
    const t = Na(), n = /* @__PURE__ */ re({}), s = /* @__PURE__ */ re({}), o = /* @__PURE__ */ re({}), l = /* @__PURE__ */ re({});
    un(async () => {
      await Promise.all([t.loadAccounts(), t.loadDisplayNames()]);
      for (const _ of Ts) {
        const y = t.accounts[_];
        n.value[_] = {
          // Stored keys are never echoed back by GET /fil_design_imagemind/auth (write-only
          // by the security contract) — the field always starts empty and the
          // `configured` flag drives the "a key is saved" UI state instead.
          key: "",
          base_url: (y == null ? void 0 : y.base_url) ?? "",
          account_id: (y == null ? void 0 : y.account_id) ?? ""
        };
      }
    });
    const i = $a, a = Va;
    function r(_) {
      return { "fil-pm-has-val": _.length > 0 };
    }
    function u(_) {
      return _ === "cloudflare";
    }
    async function c(_) {
      const y = n.value[_];
      await t.saveAccount(_, {
        key: y.key || null,
        base_url: y.base_url || null,
        account_id: y.account_id || null
      }), y.key = "";
    }
    async function d(_) {
      n.value[_] = { key: "", base_url: "", account_id: "" }, await t.deleteAccount(_);
    }
    async function f(_) {
      s.value[_] = !0, o.value[_] = !1;
      try {
        const y = await t.probe(_, "");
        o.value[_] = (y == null ? void 0 : y.status) === "available";
      } finally {
        s.value[_] = !1;
      }
    }
    async function p(_) {
      l.value[_] = !0;
      try {
        await t.loadModels(_, !0);
      } finally {
        l.value[_] = !1;
      }
    }
    const m = (_) => {
      const y = n.value[_], g = t.accounts[_];
      return y.key !== "" ? !0 : y.base_url !== ((g == null ? void 0 : g.base_url) ?? "") || y.account_id !== ((g == null ? void 0 : g.account_id) ?? "");
    };
    return (_, y) => (F(), E("div", xf, [
      (F(!0), E(fe, null, Ae(b(Ts), (g) => {
        var x, I, w, C, ne, T;
        return F(), E("div", {
          key: g,
          class: "fil-pm-card"
        }, [
          O("div", Sf, [
            O("span", Cf, [
              z(xn, {
                name: b(a)[g],
                size: 20
              }, null, 8, ["name"])
            ]),
            O("span", Ff, Q(b(i)[g]), 1),
            b(t).displayNames[g] ? (F(), E("span", Mf, "(" + Q(b(t).displayNames[g]) + ")", 1)) : oe("", !0)
          ]),
          O("div", Lf, [
            O("label", If, [
              y[0] || (y[0] = O("span", { class: "fil-pm-field-label" }, "API Key", -1)),
              Ge(O("input", {
                "onUpdate:modelValue": (D) => n.value[g].key = D,
                type: "password",
                class: Le(["fil-pm-input", r(n.value[g].key)]),
                placeholder: (x = b(t).accounts[g]) != null && x.configured ? "•••••••• (saved)" : "sk-...",
                onKeydown: _s((D) => c(g), ["enter"])
              }, null, 42, Af), [
                [yt, n.value[g].key]
              ])
            ]),
            O("label", Df, [
              y[1] || (y[1] = O("span", { class: "fil-pm-field-label" }, "Base URL", -1)),
              Ge(O("input", {
                "onUpdate:modelValue": (D) => n.value[g].base_url = D,
                type: "text",
                class: Le(["fil-pm-input", r(n.value[g].base_url)]),
                placeholder: "http://localhost:11434",
                onKeydown: _s((D) => c(g), ["enter"])
              }, null, 42, kf), [
                [yt, n.value[g].base_url]
              ])
            ]),
            u(g) ? (F(), E("label", Ef, [
              y[2] || (y[2] = O("span", { class: "fil-pm-field-label" }, "Account ID", -1)),
              Ge(O("input", {
                "onUpdate:modelValue": (D) => n.value[g].account_id = D,
                type: "text",
                class: Le(["fil-pm-input", r(n.value[g].account_id)]),
                onKeydown: _s((D) => c(g), ["enter"])
              }, null, 42, Tf), [
                [yt, n.value[g].account_id]
              ])
            ])) : oe("", !0)
          ]),
          O("div", Of, [
            z(lt, {
              variant: "accent",
              label: m(g) ? "Save" : "Saved",
              disabled: !m(g),
              onClick: (D) => c(g)
            }, null, 8, ["label", "disabled", "onClick"]),
            !m(g) && b(t).cachedAgeLabel(g) ? (F(), E("span", Pf, Q(b(t).cachedAgeLabel(g)) + " ago ", 1)) : oe("", !0),
            z(lt, {
              variant: "danger",
              label: "Delete",
              disabled: !((I = b(t).accounts[g]) != null && I.configured) && !((w = b(t).accounts[g]) != null && w.base_url),
              onClick: (D) => d(g)
            }, null, 8, ["disabled", "onClick"]),
            z(lt, {
              variant: "standard",
              label: "Probe",
              loading: s.value[g],
              flashing: o.value[g],
              disabled: !((C = b(t).accounts[g]) != null && C.local) && !((ne = b(t).accounts[g]) != null && ne.configured) && !n.value[g].key && !n.value[g].base_url,
              onClick: (D) => f(g)
            }, null, 8, ["loading", "flashing", "disabled", "onClick"]),
            z(lt, {
              variant: "standard",
              label: "Load Models",
              loading: l.value[g],
              onClick: (D) => p(g)
            }, null, 8, ["loading", "onClick"])
          ]),
          (T = b(t).modelsByProvider[g]) != null && T.error ? (F(), E("div", Rf, Q(b(t).modelsByProvider[g].error), 1)) : oe("", !0),
          b(t).probeState[g] && b(t).probeState[g].status !== "available" ? (F(), E("div", Nf, Q(b(t).probeState[g].message), 1)) : oe("", !0),
          b(t).modelsFor(g).length > 0 ? (F(), E("div", $f, [
            (F(!0), E(fe, null, Ae(b(t).modelsFor(g), (D) => (F(), E("span", {
              class: "fil-pm-model-tag",
              key: D
            }, [
              ma(Q(D) + " ", 1),
              b(t).visionModelsFor(g).includes(D) ? (F(), E("span", Vf, "👁")) : oe("", !0)
            ]))), 128))
          ])) : oe("", !0),
          b(t).lastError ? (F(), E("div", Bf, Q(b(t).lastError), 1)) : oe("", !0)
        ]);
      }), 128))
    ]));
  }
}), Hf = /* @__PURE__ */ Ce(Uf, [["__scopeId", "data-v-0de4d738"]]);
let _o = null;
function jf(e) {
  _o || (_o = Ys(Hf).use(Zs()), _o.mount(e), console.info("[FiL_Design_ImageMind] provider manager mounted"));
}
function Wf(e) {
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
    render: (n) => jf(n)
  }), console.info("[FiL_Design_ImageMind] provider manager sidebar tab registered");
}
const Kf = [
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
], qf = [
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
], Xf = [
  {
    id: "FiL_Design_ImageMind.Shortcuts.Enabled",
    name: "Keyboard shortcuts",
    type: "boolean",
    defaultValue: !0,
    tooltip: "Esc — close popup / unfocus field. ? — help for the selected FiL_Design_ImageMind node. Shift+? or Ctrl+Shift+K — full shortcuts cheatsheet. / — focus node search.",
    category: ["FiL_Design_ImageMind", "Shortcuts"]
  }
], Yf = [
  {
    id: "FiL_Design_ImageMind.Language",
    name: "Language",
    type: "combo",
    defaultValue: "en",
    options: ["en", "ru"],
    tooltip: "UI language for FiL_Design_ImageMind node tooltips and labels (English / Russian).",
    category: ["FiL_Design_ImageMind", "Language"]
  }
], Ba = {
  Default: "default",
  Cyberpunk: "cyberpunk",
  Fallout: "fallout"
};
function Jf(e) {
  const t = Ba[String(e)] ?? "default";
  xa(t);
  const n = globalThis.app;
  n && Ku(n);
}
const Qf = [
  {
    id: "FiL_Design_ImageMind.Theme",
    name: "Node theme",
    type: "combo",
    defaultValue: "Default",
    options: ["Default", "Cyberpunk", "Fallout"],
    category: ["FiL_Design_ImageMind", "Appearance", "Theme"],
    tooltip: "Recolors every FiL_Design_ImageMind node panel and adds a small themed flourish (neon glow for Cyberpunk, a CRT scanline texture for Fallout). Applies instantly, no reload.",
    onChange: Jf
  }
];
function Zf(e) {
  const t = e("FiL_Design_ImageMind.Theme", "Default");
  xa(Ba[t] ?? "default");
}
const ep = [
  ...Kf,
  ...zf,
  ...Gf,
  ...qf,
  ...Xf,
  ...Yf,
  ...Qf
];
function ni(e, t, n, s) {
  const o = s.nodeState.mode ?? s.nodeState.seed_mode ?? "random", l = s.nodeState.seed ?? 0, i = o === "random" ? Math.floor(Math.random() * 4294967295) : Number(l) || 0;
  if (s.lastRunSeed = i, !(typeof e != "object" || e === null))
    for (const [a, r] of Object.entries(e)) {
      const u = r;
      if (u.class_type === t && u.inputs && Number(a) === n) {
        u.inputs.seed = i;
        break;
      }
    }
}
function tp(e) {
  var t, n;
  try {
    const s = globalThis.app, o = ((t = s == null ? void 0 : s.graph) == null ? void 0 : t._nodes) ?? [];
    for (const l of o) {
      const i = l;
      if (i.comfyClass === "FiLSeed" && i._filSeedState) {
        ni(e, "FiLSeed", i.id, i._filSeedState);
        continue;
      }
      if (i.comfyClass === "FiLOpticScanner") {
        i._filScannerSeedState && ni(e, "FiLOpticScanner", i.id, i._filScannerSeedState);
        const a = (n = i.inputs) == null ? void 0 : n.find((r) => r.name === "config");
        (!a || a.link == null) && console.warn(`${an} Optic Scanner #${i.id} has no Provider Loader wired to its "config" slot — execution will fail.`);
      }
    }
  } catch (s) {
    console.warn(`${an} preflight fallback:`, s);
  }
  return e;
}
function np(e) {
  return {
    name: nd,
    // Declarative settings — registered BEFORE setup so the panel renders
    // even if a later installer throws.
    settings: ep,
    async setup() {
      const t = [
        () => Xd(),
        () => Qd(e),
        () => lf(),
        () => mf(e),
        () => Wf(e),
        () => Zf((n, s) => Ea(n, s, e))
      ];
      for (const n of t)
        try {
          n();
        } catch (s) {
          console.warn(`${an} installer ${n.name || "anonymous"} failed:`, s);
        }
    },
    getCustomWidgets(t) {
      const n = t;
      return n.widgets = n.widgets || {}, n.widgets.fil_compare = { serialize: !1 }, n.widgets;
    },
    async beforeRegisterNodeDef(t, n) {
      const s = Oa[n.name];
      if (s)
        try {
          await s.register(t, n);
        } catch (o) {
          console.warn(`${an} failed to register "${n.name}":`, o);
        }
    },
    async graphToPrompt(t) {
      return tp(t);
    }
  };
}
async function sp() {
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
  const n = new Set(Object.keys(t.node_ids ?? {})), s = new Set(Object.keys(Oa));
  for (const o of n)
    s.has(o) || console.warn(`${an} server expects "${o}" but local JS does not register it`);
  for (const o of s)
    n.has(o) || console.warn(`${an} JS registers "${o}" but server does not expose a contract`);
}
Pu();
Qu();
sp().catch((e) => {
  console.warn("[FiL_Design_ImageMind] contract self-check failed:", e);
});
const Ua = np(oi);
oi.registerExtension(Ua);
console.info(`[FiL_Design_ImageMind] extension registered as "${Ua.name}"`);
const op = {
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
}, lp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HELP_DEFAULTS: op
}, Symbol.toStringTag, { value: "Module" })), ip = ["data-ok", "data-err"], ap = /* @__PURE__ */ we({
  __name: "FilInfo",
  props: {
    text: {},
    ok: { type: Boolean },
    err: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (F(), E("div", {
      class: "fil-w-info",
      "data-ok": e.ok || void 0,
      "data-err": e.err || void 0
    }, Q(e.text), 9, ip));
  }
}), bs = /* @__PURE__ */ Ce(ap, [["__scopeId", "data-v-851660c1"]]), rp = { class: "fil-seed-root" }, cp = ["title"], up = ["readonly"], dp = { class: "fil-seed-actions" }, fp = /* @__PURE__ */ we({
  __name: "Seed",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = St(), s = X({
      get: () => t.state.nodeState.mode ?? "random",
      set: (u) => {
        t.state.nodeState.mode = u;
      }
    }), o = X({
      get: () => Number(t.state.nodeState.seed ?? 0) || 0,
      set: (u) => {
        t.state.nodeState.seed = u;
      }
    });
    Ue(
      () => t.state.nodeState,
      (u) => {
        typeof u.mode == "string" && (s.value = u.mode), typeof u.seed == "number" && (o.value = Number(u.seed));
      },
      { deep: !0 }
    );
    function l() {
      s.value = "random";
    }
    function i() {
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
    const r = X(() => s.value === "fixed" ? `${o.value}` : "random");
    return (u, c) => (F(), E("div", rp, [
      O("div", {
        class: "fil-seed-readout",
        title: s.value === "fixed" ? b(n)("sd_locked", "Locked seed") : b(n)("sd_auto_random", "Auto-random")
      }, [
        Ge(O("input", {
          "onUpdate:modelValue": c[0] || (c[0] = (d) => r.value = d),
          type: "text",
          class: "fil-seed-display",
          readonly: s.value === "random",
          "aria-label": "Seed value"
        }, null, 8, up), [
          [yt, r.value]
        ]),
        s.value === "random" && t.state.lastRunSeed != null ? (F(), Ie(bs, {
          key: 0,
          text: `Last run: ${t.state.lastRunSeed}`
        }, null, 8, ["text"])) : oe("", !0)
      ], 8, cp),
      O("div", dp, [
        z(lt, {
          label: b(n)("sd_random_label", "🔀 Random"),
          variant: "standard",
          title: b(n)("sd_mode", "Random generates a new seed each run."),
          onClick: l
        }, null, 8, ["label", "title"]),
        z(lt, {
          label: b(n)("sd_btn_use_last", "♻️ Use last"),
          variant: "standard",
          title: b(n)("sd_use_last", "Reuse the seed from the last executed run."),
          onClick: i
        }, null, 8, ["label", "title"]),
        z(lt, {
          label: b(n)("sd_btn_new_fixed", "🎲 New fixed"),
          variant: "accent",
          title: b(n)("sd_new_fixed", "Generate a new random fixed seed."),
          onClick: a
        }, null, 8, ["label", "title"])
      ])
    ]));
  }
}), pp = /* @__PURE__ */ Ce(fp, [["__scopeId", "data-v-145a44ff"]]), mp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pp
}, Symbol.toStringTag, { value: "Module" })), hp = ["title"], gp = {
  key: 0,
  class: "fil-combo-label"
}, _p = ["disabled", "aria-expanded"], bp = { class: "fil-combo-trigger-label" }, vp = {
  key: 1,
  class: "fil-combo-badge"
}, yp = ["placeholder"], wp = { class: "fil-combo-list" }, xp = ["aria-selected", "onMouseenter", "onClick"], Sp = { class: "fil-combo-option-label" }, Cp = {
  key: 1,
  class: "fil-combo-badge"
}, Fp = {
  key: 0,
  class: "fil-combo-empty"
}, Mp = /* @__PURE__ */ we({
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
    const n = e, s = t, o = /* @__PURE__ */ re(!1), l = /* @__PURE__ */ re(""), i = /* @__PURE__ */ re(0), a = /* @__PURE__ */ re(null), r = /* @__PURE__ */ re(null), u = /* @__PURE__ */ re(null), c = /* @__PURE__ */ re({}), d = X(() => n.options.find((T) => T.value === n.modelValue)), f = X(() => {
      if (!n.searchable || !l.value.trim()) return n.options;
      const T = l.value.trim().toLowerCase();
      return n.options.filter((D) => (D.label ?? D.value).toLowerCase().includes(T));
    });
    function p(T) {
      return T.label ?? T.value;
    }
    function m() {
      const T = a.value;
      if (!T) return;
      const D = T.getBoundingClientRect(), A = window.innerHeight, q = 260, $ = A - D.bottom, S = $ < q && D.top > $;
      c.value = {
        left: `${D.left}px`,
        width: `${D.width}px`,
        ...S ? { bottom: `${A - D.top + 4}px` } : { top: `${D.bottom + 4}px` }
      };
    }
    function _(T) {
      var A;
      const D = T.target;
      D instanceof Element && ((A = r.value) != null && A.contains(D)) || g();
    }
    function y() {
      n.disabled || (o.value = !0, l.value = "", i.value = Math.max(
        0,
        f.value.findIndex((T) => T.value === n.modelValue)
      ), Sn(() => {
        var T;
        m(), n.searchable && ((T = u.value) == null || T.focus()), window.addEventListener("resize", _), window.addEventListener("scroll", _, !0), document.addEventListener("mousedown", x, !0);
      }));
    }
    function g() {
      o.value && (o.value = !1, window.removeEventListener("resize", _), window.removeEventListener("scroll", _, !0), document.removeEventListener("mousedown", x, !0));
    }
    function x(T) {
      var A, q;
      const D = T.target;
      (A = a.value) != null && A.contains(D) || (q = r.value) != null && q.contains(D) || g();
    }
    function I() {
      o.value ? g() : y();
    }
    function w(T) {
      var D;
      s("update:modelValue", T.value), g(), (D = a.value) == null || D.focus();
    }
    function C(T) {
      if (!n.disabled) {
        if (!o.value && (T.key === "ArrowDown" || T.key === "ArrowUp" || T.key === "Enter" || T.key === " ")) {
          T.preventDefault(), y();
          return;
        }
        o.value && ne(T);
      }
    }
    function ne(T) {
      var A;
      const D = f.value;
      if (T.key === "ArrowDown")
        T.preventDefault(), i.value = D.length ? (i.value + 1) % D.length : 0;
      else if (T.key === "ArrowUp")
        T.preventDefault(), i.value = D.length ? (i.value - 1 + D.length) % D.length : 0;
      else if (T.key === "Enter") {
        T.preventDefault();
        const q = D[i.value];
        q && w(q);
      } else T.key === "Escape" && (T.preventDefault(), g(), (A = a.value) == null || A.focus());
    }
    return Ue(l, () => {
      i.value = 0;
    }), Cn(() => {
      window.removeEventListener("resize", _), window.removeEventListener("scroll", _, !0), document.removeEventListener("mousedown", x, !0);
    }), (T, D) => {
      var A, q;
      return F(), E("div", {
        class: "fil-combo",
        title: e.title
      }, [
        e.label ? (F(), E("label", gp, Q(e.label), 1)) : oe("", !0),
        O("button", {
          ref_key: "triggerRef",
          ref: a,
          type: "button",
          class: Le(["fil-combo-trigger", { open: o.value, disabled: e.disabled }]),
          disabled: e.disabled,
          "aria-expanded": o.value,
          "aria-haspopup": "listbox",
          onClick: I,
          onKeydown: C
        }, [
          (A = d.value) != null && A.icon ? (F(), Ie(xn, {
            key: 0,
            name: d.value.icon,
            size: 16
          }, null, 8, ["name"])) : oe("", !0),
          O("span", bp, Q(d.value ? p(d.value) : e.modelValue), 1),
          (q = d.value) != null && q.badge ? (F(), E("span", vp, Q(d.value.badge), 1)) : oe("", !0),
          D[1] || (D[1] = O("span", { class: "fil-combo-chevron" }, "▾", -1))
        ], 42, _p),
        (F(), Ie(Ui, { to: "body" }, [
          o.value ? (F(), E("div", {
            key: 0,
            ref_key: "panelRef",
            ref: r,
            class: "fil-combo-panel",
            style: Ke(c.value),
            role: "listbox",
            onKeydown: ne
          }, [
            e.searchable ? Ge((F(), E("input", {
              key: 0,
              ref_key: "searchRef",
              ref: u,
              "onUpdate:modelValue": D[0] || (D[0] = ($) => l.value = $),
              type: "search",
              class: "fil-combo-search",
              placeholder: e.placeholder,
              spellcheck: "false"
            }, null, 8, yp)), [
              [yt, l.value]
            ]) : oe("", !0),
            O("div", wp, [
              (F(!0), E(fe, null, Ae(f.value, ($, S) => (F(), E("button", {
                key: $.value,
                type: "button",
                class: Le(["fil-combo-option", { active: S === i.value, selected: $.value === e.modelValue }]),
                role: "option",
                "aria-selected": $.value === e.modelValue,
                onMouseenter: (M) => i.value = S,
                onClick: (M) => w($)
              }, [
                $.icon ? (F(), Ie(xn, {
                  key: 0,
                  name: $.icon,
                  size: 16
                }, null, 8, ["name"])) : oe("", !0),
                O("span", Sp, Q(p($)), 1),
                $.badge ? (F(), E("span", Cp, Q($.badge), 1)) : oe("", !0)
              ], 42, xp))), 128)),
              f.value.length === 0 ? (F(), E("div", Fp, "No matches")) : oe("", !0)
            ])
          ], 36)) : oe("", !0)
        ]))
      ], 8, hp);
    };
  }
}), $o = /* @__PURE__ */ Ce(Mp, [["__scopeId", "data-v-39d4212e"]]), Lp = ["disabled", "min", "max", "step", "aria-label"], Ip = /* @__PURE__ */ we({
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
    const n = e, s = t, o = X(() => n.modelValue), l = /* @__PURE__ */ re(r(o.value));
    Ue(o, (_) => {
      i.value || (l.value = r(_));
    });
    let i = /* @__PURE__ */ re(!1), a = null;
    function r(_) {
      return Number.isFinite(_) ? String(_) : "";
    }
    function u(_) {
      const y = (_ || "").trim();
      if (y === "" || !/^[0-9+\-*/(). ]+$/.test(y.replace(/\^/g, "**"))) return null;
      try {
        const g = new Function(`"use strict"; return (${y});`), x = Number(g());
        return Number.isFinite(x) ? x : null;
      } catch {
        return null;
      }
    }
    function c(_) {
      if (_ === null) {
        l.value = r(o.value);
        return;
      }
      let y = _;
      n.min != null && y < n.min && (y = n.min), n.max != null && y > n.max && (y = n.max), y !== o.value && s("update:modelValue", y), l.value = r(y);
    }
    function d() {
      i.value = !0, a = l.value;
    }
    function f() {
      i.value = !1, c(u(l.value)), a = null;
    }
    function p(_) {
      _.key === "Enter" ? (_.preventDefault(), c(u(l.value)), _.target.blur()) : _.key === "Escape" ? (_.preventDefault(), a !== null && (l.value = a), _.target.blur()) : _.key === "ArrowUp" ? (_.preventDefault(), m(_.shiftKey ? 10 : 1)) : _.key === "ArrowDown" && (_.preventDefault(), m(_.shiftKey ? -10 : -1));
    }
    function m(_) {
      let y = o.value + _ * (n.step || 1);
      n.min != null && y < n.min && (y = n.min), n.max != null && y > n.max && (y = n.max), s("update:modelValue", y), l.value = r(y);
    }
    return (_, y) => Ge((F(), E("input", {
      "onUpdate:modelValue": y[0] || (y[0] = (g) => l.value = g),
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
    }, null, 40, Lp)), [
      [yt, l.value]
    ]);
  }
}), _t = /* @__PURE__ */ Ce(Ip, [["__scopeId", "data-v-b9154493"]]), Ap = ["title"], Dp = {
  key: 0,
  class: "fil-w-slider-label"
}, kp = { class: "fil-w-slider-row" }, Ep = ["value", "min", "max", "step", "disabled", "aria-label"], Tp = /* @__PURE__ */ we({
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
    const n = e, s = t, o = X(() => {
      let a = n.modelValue;
      return a < n.min && (a = n.min), a > n.max && (a = n.max), a;
    });
    function l(a) {
      const r = Number(a.target.value);
      s("update:modelValue", r);
    }
    function i(a) {
      s("update:modelValue", a);
    }
    return (a, r) => (F(), E("div", {
      class: "fil-w-slider",
      title: e.title
    }, [
      e.label ? (F(), E("label", Dp, Q(e.label), 1)) : oe("", !0),
      O("div", kp, [
        O("input", {
          type: "range",
          class: "fil-w-slider-range",
          value: o.value,
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label,
          onInput: l
        }, null, 40, Ep),
        z(_t, {
          "model-value": o.value,
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label,
          "onUpdate:modelValue": i
        }, null, 8, ["model-value", "min", "max", "step", "disabled", "aria-label"])
      ])
    ], 8, Ap));
  }
}), qe = /* @__PURE__ */ Ce(Tp, [["__scopeId", "data-v-b98a8a08"]]), Op = { class: "fil-provider-root" }, Pp = { class: "fil-w-label" }, Rp = { class: "fil-w-label" }, Np = { class: "fil-provider-row" }, $p = {
  key: 0,
  class: "fil-model-filter-bar"
}, Vp = { class: "fil-model-filter-wrap" }, Bp = ["placeholder"], Up = { class: "fil-model-count" }, Hp = 3e5, jp = /* @__PURE__ */ we({
  __name: "ProviderLoader",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, n = Na(), { t: s } = St(), o = /* @__PURE__ */ re("");
    function l($, S) {
      return {
        get: () => t.state.nodeState[$] ?? S,
        set: (M) => {
          t.state.nodeState[$] = M;
        }
      };
    }
    const i = X(() => String(l("provider", "ollama").get()));
    function a($) {
      l("provider", "ollama").set($), o.value = "";
      const S = n.modelsFor($);
      S.length ? (u(S[0]), A(), n.loadModels($)) : (m.nodeState.model = "(loading...)", q());
    }
    const r = X(() => String(l("model", "(loading...)").get()));
    function u($) {
      l("model", "(loading...)").set($);
    }
    const c = X(() => Number(l("temperature", 0.7).get())), d = X(() => Number(l("max_tokens", 0).get())), f = X(() => Number(l("rate_limit_ms", 100).get())), p = X(() => Number(l("max_image_side", 1024).get())), m = t.state, _ = X(() => {
      const $ = n.modelsFor(i.value);
      return $.length ? $ : ["(no models)"];
    }), y = X(() => n.modelsFor(i.value).length > 0), g = X(() => {
      const $ = _.value;
      if (!o.value || !y.value) return $;
      const S = o.value.toLowerCase();
      return $.filter((M) => M.toLowerCase().includes(S));
    }), x = X(() => {
      if (!y.value) return "";
      const $ = n.modelsFor(i.value).length, S = g.value.length;
      return S === $ ? `${$}` : `${S} of ${$}`;
    }), I = X(
      () => Ts.map(($) => ({ value: $, label: $a[$] ?? $, icon: Va[$] }))
    ), w = X(() => {
      const $ = n.visionModelsFor(i.value);
      return g.value.map((S) => ({
        value: S,
        badge: $.includes(S) ? "👁" : void 0
      }));
    }), C = X(() => n.isLoading(i.value)), ne = X(() => n.probeState[i.value]), T = X(() => n.cachedAgeLabel(i.value));
    let D = null;
    Ue(() => t.state.nodeState, () => {
    }, { deep: !0 });
    function A() {
      const $ = t.state.node;
      if (!$) return;
      const S = de($, "model");
      if (!S) return;
      const M = n.modelsFor(i.value), V = M.length ? M : ["(no models)"];
      S.options && (S.options.values = V);
    }
    async function q() {
      try {
        await n.loadModels(i.value, !0);
        const $ = n.modelsFor(i.value);
        u($[0] ?? "(no models)"), A();
      } catch ($) {
        st.error($ instanceof Error ? $.message : String($));
      }
    }
    return un(async () => {
      n.loadDisplayNames();
      const $ = n.modelsFor(i.value);
      if ($.length)
        r.value === "(loading...)" && u($[0] ?? "(no models)"), A(), n.loadModels(i.value);
      else
        try {
          await n.loadModels(i.value);
          const S = n.modelsFor(i.value);
          r.value === "(loading...)" && u(S[0] ?? "(no models)"), A();
        } catch (S) {
          st.error(S instanceof Error ? S.message : String(S));
        }
      D = setInterval(() => {
        n.loadModels(i.value, !0);
      }, Hp);
    }), zs(() => {
      D && clearInterval(D);
    }), ($, S) => (F(), E("div", Op, [
      O("label", Pp, Q(b(s)("lbl_provider", "🔌 Provider")), 1),
      z($o, {
        options: I.value,
        "model-value": i.value,
        title: b(s)("tt_provider", "LLM provider to use — local (Ollama, LM Studio) or cloud."),
        "onUpdate:modelValue": a
      }, null, 8, ["options", "model-value", "title"]),
      O("label", Rp, Q(b(s)("lbl_model", "🧠 Model")), 1),
      O("div", Np, [
        z($o, {
          options: w.value,
          "model-value": r.value,
          title: b(s)("tt_model", "Choose which model to use. If the list is empty, refresh it or check the provider account."),
          "onUpdate:modelValue": u
        }, null, 8, ["options", "model-value", "title"]),
        z(lt, {
          label: "↻",
          title: b(s)("tt_refresh", "Reload the model list. Use after adding a new model or API key."),
          disabled: C.value || b(m).ui.refreshing === !0,
          onClick: q
        }, null, 8, ["title", "disabled"])
      ]),
      y.value ? (F(), E("div", $p, [
        O("div", Vp, [
          Ge(O("input", {
            "onUpdate:modelValue": S[0] || (S[0] = (M) => o.value = M),
            type: "text",
            class: "fil-model-filter",
            placeholder: b(s)("prov_search_models", "Search models…")
          }, null, 8, Bp), [
            [yt, o.value]
          ])
        ]),
        O("span", Up, Q(x.value), 1)
      ])) : oe("", !0),
      C.value ? (F(), Ie(bs, {
        key: 1,
        text: b(s)("prov_loading_models", "Loading models…")
      }, null, 8, ["text"])) : ne.value && ne.value.status && ne.value.status !== "available" ? (F(), Ie(bs, {
        key: 2,
        err: !0,
        text: ne.value.message || ne.value.status
      }, null, 8, ["text"])) : T.value ? (F(), Ie(bs, {
        key: 3,
        text: `${b(s)("prov_models_updated", "Models updated")}: ${T.value}`
      }, null, 8, ["text"])) : oe("", !0),
      z(qe, {
        "model-value": c.value,
        min: 0,
        max: 2,
        step: 0.05,
        label: b(s)("lbl_temperature", "🌡️ Temperature"),
        title: b(s)("tt_temperature", "Sampling temperature — higher is more creative, lower is more deterministic."),
        "onUpdate:modelValue": S[1] || (S[1] = (M) => b(m).nodeState.temperature = M)
      }, null, 8, ["model-value", "label", "title"]),
      z(qe, {
        "model-value": d.value,
        min: 0,
        max: 65536,
        step: 1,
        label: b(s)("lbl_max_tokens", "🔢 Max tokens (0 = no limit)"),
        title: b(s)("tt_provider_max_tokens", "Maximum tokens in the response. 0 = provider default (no explicit limit)."),
        "onUpdate:modelValue": S[2] || (S[2] = (M) => b(m).nodeState.max_tokens = M)
      }, null, 8, ["model-value", "label", "title"]),
      z(qe, {
        "model-value": f.value,
        min: 0,
        max: 5e3,
        step: 10,
        label: b(s)("lbl_rate_limit", "⏱️ Rate limit (ms)"),
        title: b(s)("tt_rate_limit", "Minimum delay between requests to this provider, to avoid rate limiting."),
        "onUpdate:modelValue": S[3] || (S[3] = (M) => b(m).nodeState.rate_limit_ms = M)
      }, null, 8, ["model-value", "label", "title"]),
      z(qe, {
        "model-value": p.value,
        min: 128,
        max: 4096,
        step: 64,
        label: b(s)("lbl_max_image_side", "🖼️ Max image side"),
        title: b(s)("tt_max_image_side", "Images are downscaled so their longest side does not exceed this value."),
        "onUpdate:modelValue": S[4] || (S[4] = (M) => b(m).nodeState.max_image_side = M)
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), Wp = /* @__PURE__ */ Ce(jp, [["__scopeId", "data-v-b25920b2"]]), Kp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wp
}, Symbol.toStringTag, { value: "Module" })), zp = ["aria-checked", "disabled", "title", "onClick"], Gp = /* @__PURE__ */ we({
  __name: "FilChipGrid",
  props: {
    options: {},
    modelValue: {},
    columns: { default: 3 },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = X(() => ({
      gridTemplateColumns: `repeat(${Math.max(1, n.columns)}, minmax(0, 1fr))`
    }));
    function l(i) {
      n.disabled || i !== n.modelValue && s("update:modelValue", i);
    }
    return (i, a) => (F(), E("div", {
      class: "fil-w-chips",
      style: Ke(o.value),
      role: "radiogroup"
    }, [
      (F(!0), E(fe, null, Ae(e.options, (r) => (F(), E("button", {
        key: r,
        type: "button",
        role: "radio",
        class: Le(["fil-w-chip", { active: r === e.modelValue, disabled: e.disabled }]),
        "aria-checked": r === e.modelValue,
        disabled: e.disabled,
        title: r,
        onClick: (u) => l(r)
      }, Q(r), 11, zp))), 128))
    ], 4));
  }
}), si = /* @__PURE__ */ Ce(Gp, [["__scopeId", "data-v-3c07d909"]]), qp = { class: "fil-w-chiplist" }, Xp = ["placeholder", "aria-label", "disabled"], Yp = {
  class: "fil-w-chip-scroll",
  role: "radiogroup"
}, Jp = ["aria-checked", "disabled", "title", "onClick"], Qp = {
  key: 0,
  class: "fil-w-chip-empty"
}, Zp = /* @__PURE__ */ we({
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
    const n = e, s = t, o = /* @__PURE__ */ re(""), l = X(() => {
      const a = o.value.trim().toLowerCase();
      return a ? n.options.filter((r) => r.toLowerCase().includes(a)) : n.options;
    });
    function i(a) {
      n.disabled || a !== n.modelValue && s("update:modelValue", a);
    }
    return (a, r) => (F(), E("div", qp, [
      e.searchable ? Ge((F(), E("input", {
        key: 0,
        "onUpdate:modelValue": r[0] || (r[0] = (u) => o.value = u),
        class: "fil-w-search",
        type: "search",
        placeholder: e.placeholder,
        "aria-label": e.placeholder,
        disabled: e.disabled,
        spellcheck: "false"
      }, null, 8, Xp)), [
        [yt, o.value]
      ]) : oe("", !0),
      O("div", Yp, [
        (F(!0), E(fe, null, Ae(l.value, (u) => (F(), E("button", {
          key: u,
          type: "button",
          role: "radio",
          class: Le(["fil-w-chip", { active: u === e.modelValue, disabled: e.disabled }]),
          "aria-checked": u === e.modelValue,
          disabled: e.disabled,
          title: u,
          onClick: (c) => i(u)
        }, Q(u), 11, Jp))), 128)),
        l.value.length === 0 ? (F(), E("div", Qp, Q(o.value ? "No matches" : "Empty"), 1)) : oe("", !0)
      ])
    ]));
  }
}), em = /* @__PURE__ */ Ce(Zp, [["__scopeId", "data-v-8b6ca087"]]), tm = ["title"], nm = {
  key: 0,
  class: "fil-w-segmented-label"
}, sm = ["aria-label"], om = ["aria-pressed", "disabled", "tabindex", "onClick", "onKeydown"], lm = /* @__PURE__ */ we({
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
    const n = e, s = t, o = X(() => n.modelValue), l = /* @__PURE__ */ re([]);
    function i(u) {
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
        a(m), (f = l.value[(c + 1) % d.length]) == null || f.focus();
      } else if (u.key === "ArrowLeft" || u.key === "ArrowUp") {
        u.preventDefault();
        const m = d[(c - 1 + d.length) % d.length];
        a(m), (p = l.value[(c - 1 + d.length) % d.length]) == null || p.focus();
      }
    }
    return (u, c) => (F(), E("div", {
      class: "fil-w-segmented",
      title: e.title
    }, [
      e.label ? (F(), E("label", nm, Q(e.label), 1)) : oe("", !0),
      O("div", {
        class: Le(["fil-w-pill", { disabled: e.disabled }]),
        role: "group",
        "aria-label": e.label
      }, [
        (F(!0), E(fe, null, Ae(e.options, (d, f) => (F(), E("button", {
          key: d,
          ref_for: !0,
          ref: (p) => {
            p && (l.value[f] = p);
          },
          type: "button",
          class: Le(["fil-w-seg", { active: d === o.value }]),
          "aria-pressed": d === o.value,
          disabled: e.disabled,
          tabindex: d === o.value ? 0 : -1,
          onClick: (p) => a(d),
          onKeydown: (p) => r(p, f)
        }, Q(i(d)), 43, om))), 128))
      ], 10, sm)
    ], 8, tm));
  }
}), it = /* @__PURE__ */ Ce(lm, [["__scopeId", "data-v-163eefcf"]]), im = ["aria-expanded", "disabled"], am = { class: "fil-w-section-arrow" }, rm = { class: "fil-w-section-title" }, cm = /* @__PURE__ */ we({
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
    const l = X(() => n.modelValue ? "▶" : "▼");
    return (i, a) => (F(), E("button", {
      type: "button",
      class: Le(["fil-w-section", { collapsible: e.collapsible, collapsed: e.modelValue }]),
      "aria-expanded": !e.modelValue,
      disabled: !e.collapsible,
      onClick: o
    }, [
      O("span", am, Q(l.value), 1),
      O("span", rm, Q(e.title), 1)
    ], 10, im));
  }
}), rn = /* @__PURE__ */ Ce(cm, [["__scopeId", "data-v-2b21d5b8"]]), um = {
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
}, dm = {}, fm = {}, pm = {}, mm = {
  ...um,
  ...dm,
  ...fm,
  ...pm
}, hm = { class: "fil-style-picker" }, gm = { class: "fil-style-cats" }, _m = ["onClick"], bm = { class: "fil-style-grid" }, vm = ["title", "onClick"], ym = { class: "fil-style-tile-preview" }, wm = ["src"], xm = {
  key: 1,
  class: "fil-style-tile-placeholder"
}, Sm = { class: "fil-style-tile-label" }, Cm = {
  key: 0,
  class: "fil-style-empty"
}, ms = "__all__", Fm = /* @__PURE__ */ we({
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
    function l(f) {
      const p = f.indexOf("/");
      return p === -1 ? f : f.slice(p + 1);
    }
    const i = X(() => {
      const f = /* @__PURE__ */ new Set(), p = [];
      for (const m of n.styles) {
        const _ = o(m);
        _ && !f.has(_) && (f.add(_), p.push(_));
      }
      return p;
    }), a = /* @__PURE__ */ re(ms), r = /* @__PURE__ */ re(""), u = X(() => {
      const f = r.value.trim().toLowerCase();
      return n.styles.filter((p) => a.value !== ms && o(p) !== a.value ? !1 : f ? p.toLowerCase().includes(f) : !0);
    });
    function c(f) {
      return mm[f];
    }
    function d(f) {
      s("select", f);
    }
    return (f, p) => (F(), E("div", hm, [
      O("div", gm, [
        O("button", {
          type: "button",
          class: Le(["fil-style-cat", { active: a.value === ms }]),
          onClick: p[0] || (p[0] = (m) => a.value = ms)
        }, " All ", 2),
        (F(!0), E(fe, null, Ae(i.value, (m) => (F(), E("button", {
          key: m,
          type: "button",
          class: Le(["fil-style-cat", { active: a.value === m }]),
          onClick: (_) => a.value = m
        }, Q(m), 11, _m))), 128))
      ]),
      Ge(O("input", {
        "onUpdate:modelValue": p[1] || (p[1] = (m) => r.value = m),
        type: "search",
        class: "fil-style-search",
        placeholder: "Search styles…",
        "aria-label": "Search styles",
        spellcheck: "false"
      }, null, 512), [
        [yt, r.value]
      ]),
      O("div", bm, [
        (F(!0), E(fe, null, Ae(u.value, (m) => (F(), E("button", {
          key: m,
          type: "button",
          class: Le(["fil-style-tile", { active: m === e.modelValue }]),
          title: m,
          onClick: (_) => d(m)
        }, [
          O("span", ym, [
            c(m) ? (F(), E("img", {
              key: 0,
              src: c(m),
              class: "fil-style-tile-img",
              alt: ""
            }, null, 8, wm)) : (F(), E("span", xm, Q(l(m).split(" ")[0]), 1))
          ]),
          O("span", Sm, Q(l(m)), 1)
        ], 10, vm))), 128)),
        u.value.length === 0 ? (F(), E("div", Cm, "No matches")) : oe("", !0)
      ])
    ]));
  }
}), Mm = /* @__PURE__ */ Ce(Fm, [["__scopeId", "data-v-6e196d1e"]]), Lm = {
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
}, Im = { class: "fil-scanner-root" }, Am = ["title"], Dm = ["value", "placeholder", "onInput"], km = ["value", "placeholder", "onInput"], Em = { class: "fil-section-block" }, Tm = ["title"], Om = { class: "fil-scanner-seed" }, Pm = { class: "fil-scanner-seed-row" }, Rm = ["value", "readonly", "title"], Nm = ["title"], $m = ["title"], Vm = ["title"], Bm = /* @__PURE__ */ we({
  __name: "OpticScanner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = St(), s = Lm.FiLOpticScanner, o = (s == null ? void 0 : s.inputs.required) ?? [], l = {
      prompt: ["scn_section_prompt", "📝 PROMPT/TEXT"],
      agent: ["scn_section_agent", "🕵️ AGENT"],
      model: ["scn_section_model", "🧠 MODEL"],
      output: ["scn_section_output", "📤 OUTPUT"],
      advanced: ["scn_section_advanced", "🎨 STYLE"],
      actions: ["scn_section_actions", "⚡ ACTIONS"]
    }, i = {
      prompt: "#00d9ff",
      agent: "#ff9900",
      model: "#d080ff",
      output: "#ff9900",
      advanced: "#00d9ff"
    }, a = /* @__PURE__ */ new Set(["prompt", "negative_prompt", "custom_style"]);
    function r(R) {
      const U = l[R];
      return U ? n(U[0], U[1]) : R.toUpperCase();
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
      const U = u[R.name];
      return U ? n(U, R.tooltip || "") : R.tooltip || "";
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
      const U = d[R.name] || "", k = R.name.replace(/_/g, " ").replace(/\b\w/g, (j) => j.toUpperCase());
      return U ? `${U} ${k}` : k;
    }
    const p = /* @__PURE__ */ cn({}), m = {
      photo_style: { emoji: "📷", labelKey: "scn_style_photo_label", labelFallback: "Photo" },
      nsfw_photo_style: { emoji: "🔞", labelKey: "scn_style_nsfw_photo_label", labelFallback: "NSFW Photo" },
      art_style: { emoji: "🎨", labelKey: "scn_style_art_label", labelFallback: "Art" },
      nsfw_art_style: { emoji: "🔞", labelKey: "scn_style_nsfw_art_label", labelFallback: "NSFW Art" }
    };
    function _(R) {
      const U = m[R], k = U ? `${U.emoji} ${n(U.labelKey, U.labelFallback)}: ` : "", j = String(w(R, "None") || "None");
      if (j === "None") return `${k}${n("scn_style_none", "None")}`;
      const W = j.indexOf("/"), Z = W === -1 ? j : j.slice(W + 1);
      return `${k}${Z}`;
    }
    function y(R) {
      p[R] = !0;
    }
    function g(R, U) {
      C(R, U), p[R] = !1;
    }
    const x = X(() => {
      var U;
      const R = {};
      for (const k of o) (R[U = k.section || "_"] ?? (R[U] = [])).push(k);
      return R;
    }), I = X(() => {
      const R = x.value.styles || [], U = [];
      for (let k = 0; k < R.length; k += 2) U.push(R.slice(k, k + 2));
      return U;
    });
    function w(R, U = "") {
      return t.state.nodeState[R] ?? t.state.initialValues[R] ?? U;
    }
    function C(R, U) {
      t.state.nodeState[R] = U;
    }
    const ne = /* @__PURE__ */ new Set(["agent", "output", "advanced"]);
    function T(R) {
      const U = t.state.ui[`collapsed_${R}`];
      return U === void 0 ? ne.has(R) : !!U;
    }
    function D(R, U) {
      t.state.ui[`collapsed_${R}`] = U;
    }
    Ue(() => t.state.nodeState, () => {
    }, { deep: !0 });
    const A = X({
      get: () => t.state.nodeState.seed_mode ?? "random",
      set: (R) => {
        t.state.nodeState.seed_mode = R;
      }
    }), q = X({
      get: () => Number(t.state.nodeState.seed ?? -1) || -1,
      set: (R) => {
        t.state.nodeState.seed = R;
      }
    }), $ = X(() => A.value === "fixed" ? `${q.value}` : "random");
    function S() {
      A.value = "random";
    }
    function M() {
      if (t.state.lastRunSeed == null) {
        st.warning("No last-run seed recorded yet");
        return;
      }
      q.value = t.state.lastRunSeed, A.value = "fixed";
    }
    function V() {
      const R = Math.floor(Math.random() * 1e9) & 2147483647;
      q.value = R, A.value = "fixed";
    }
    return (R, U) => (F(), E("div", Im, [
      (F(!0), E(fe, null, Ae(x.value, (k, j) => (F(), E(fe, { key: j }, [
        j !== "styles" ? (F(), E("div", {
          key: 0,
          class: "fil-section-block",
          style: Ke({ "--fil-accent": i[String(j)] })
        }, [
          j !== "_" && j !== "prompt" ? (F(), Ie(rn, {
            key: 0,
            title: r(String(j)),
            "model-value": T(String(j)),
            "onUpdate:modelValue": (W) => D(String(j), W)
          }, null, 8, ["title", "model-value", "onUpdate:modelValue"])) : oe("", !0),
          (F(!0), E(fe, null, Ae(k, (W) => Ge((F(), E("div", {
            key: W.name,
            class: "fil-w-row",
            title: c(W)
          }, [
            W.kind === "chip_grid" ? (F(), Ie(si, {
              key: 0,
              options: W.values || [],
              "model-value": String(w(W.name, "")),
              columns: W.columns ?? 3,
              "onUpdate:modelValue": (Z) => C(W.name, Z)
            }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"])) : W.kind === "chip_list" ? (F(), Ie(em, {
              key: 1,
              options: W.values || [],
              "model-value": w(W.name, null),
              searchable: W.searchable ?? !0,
              "onUpdate:modelValue": (Z) => C(W.name, Z)
            }, null, 8, ["options", "model-value", "searchable", "onUpdate:modelValue"])) : W.kind === "segmented" ? (F(), Ie(it, {
              key: 2,
              options: W.options || [],
              "model-value": String(w(W.name, "")),
              label: f(W),
              "onUpdate:modelValue": (Z) => C(W.name, Z)
            }, null, 8, ["options", "model-value", "label", "onUpdate:modelValue"])) : W.kind === "string" && b(a).has(W.name) ? (F(), E("textarea", {
              key: 3,
              class: "fil-w-textarea",
              value: String(w(W.name, "")),
              placeholder: f(W),
              onInput: (Z) => C(W.name, Z.target.value)
            }, null, 40, Dm)) : W.kind === "string" ? (F(), E("input", {
              key: 4,
              type: "text",
              class: "fil-w-input",
              value: String(w(W.name, "")),
              placeholder: f(W),
              onInput: (Z) => C(W.name, Z.target.value)
            }, null, 40, km)) : (F(), Ie(si, {
              key: 5,
              options: W.values || [],
              "model-value": String(w(W.name, "")),
              columns: W.columns ?? 3,
              "onUpdate:modelValue": (Z) => C(W.name, Z)
            }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"]))
          ], 8, Am)), [
            [Ds, j === "_" || j === "prompt" || !T(String(j))]
          ])), 128))
        ], 4)) : oe("", !0)
      ], 64))), 128)),
      O("div", {
        class: "fil-section-block",
        style: Ke({ "--fil-accent": i.advanced })
      }, [
        z(rn, {
          title: r("advanced"),
          "model-value": T("advanced"),
          "onUpdate:modelValue": U[0] || (U[0] = (k) => D("advanced", k))
        }, null, 8, ["title", "model-value"]),
        Ge(O("div", Em, [
          (F(!0), E(fe, null, Ae(I.value, (k, j) => (F(), E("div", {
            key: `style-pair-${j}`,
            class: "fil-style-pair-row"
          }, [
            (F(!0), E(fe, null, Ae(k, (W) => (F(), E("div", {
              key: W.name,
              class: "fil-style-pair-item",
              title: c(W)
            }, [
              z(lt, {
                variant: "full",
                label: _(W.name),
                onClick: (Z) => y(W.name)
              }, null, 8, ["label", "onClick"]),
              z(Pa, {
                open: !!p[W.name],
                title: f(W),
                width: "640px",
                "onUpdate:open": (Z) => p[W.name] = Z
              }, {
                default: Ws(() => [
                  z(Mm, {
                    styles: W.values || [],
                    "model-value": String(w(W.name, "None")),
                    onSelect: (Z) => g(W.name, Z)
                  }, null, 8, ["styles", "model-value", "onSelect"])
                ]),
                _: 2
              }, 1032, ["open", "title", "onUpdate:open"])
            ], 8, Tm))), 128))
          ]))), 128))
        ], 512), [
          [Ds, !T("advanced")]
        ])
      ], 4),
      O("div", Om, [
        O("div", Pm, [
          O("input", {
            value: $.value,
            type: "text",
            class: Le(["fil-scanner-seed-field", { "is-random": A.value === "random" }]),
            readonly: A.value === "random",
            "aria-label": "Seed value",
            title: A.value === "fixed" ? b(n)("scn_seed_locked", "Locked seed") : b(n)("scn_seed_auto_random", "Auto-random — a new seed is generated each run"),
            onInput: U[1] || (U[1] = (k) => q.value = Number(k.target.value) || 0)
          }, null, 42, Rm),
          O("button", {
            type: "button",
            class: Le(["fil-scanner-seed-pill", { active: A.value === "random" }]),
            title: b(n)("scn_seed_mode_tt", "Random generates a new seed each run."),
            onClick: S
          }, Q(b(n)("scn_seed_random", "Random")), 11, Nm),
          O("button", {
            type: "button",
            class: "fil-scanner-seed-pill",
            title: t.state.lastRunSeed != null ? `${b(n)("scn_seed_use_last_prefix", "Reuse the last run's seed:")} ${t.state.lastRunSeed}` : b(n)("scn_seed_use_last_tt", "Reuse the seed from the last executed run."),
            onClick: M
          }, Q(b(n)("scn_seed_use_last", "Use last")), 9, $m),
          O("button", {
            type: "button",
            class: "fil-scanner-seed-pill fil-scanner-seed-pill-accent",
            title: b(n)("scn_seed_new_fixed_tt", "Generate a new random fixed seed."),
            onClick: V
          }, Q(b(n)("scn_seed_new_fixed", "New fixed")), 9, Vm)
        ])
      ])
    ]));
  }
}), Um = /* @__PURE__ */ Ce(Bm, [["__scopeId", "data-v-8fab16c2"]]), Hm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Um
}, Symbol.toStringTag, { value: "Module" })), jm = { class: "fil-cleaner-root" }, Wm = ["aria-pressed", "title", "onClick"], Km = { class: "fil-cleaner-label" }, zm = ["aria-pressed", "title", "onClick"], Gm = { class: "fil-cleaner-label" }, qm = /* @__PURE__ */ we({
  __name: "NeuroCleaner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = St(), s = [
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
    function l(d, f) {
      return n(`nc_${d}`, f);
    }
    function i(d, f) {
      const p = t.state.nodeState[d];
      return typeof p == "boolean" ? p : f;
    }
    function a(d, f) {
      t.state.nodeState[d] = !i(d, f);
    }
    const r = /* @__PURE__ */ new Set(["ram"]);
    function u(d) {
      const f = t.state.ui[`collapsed_${d}`];
      return f === void 0 ? r.has(d) : !!f;
    }
    function c(d, f) {
      t.state.ui[`collapsed_${d}`] = f;
    }
    return Ue(() => t.state.nodeState, () => {
    }, { deep: !0 }), (d, f) => (F(), E("div", jm, [
      z(rn, {
        title: b(n)("nc_section_vram", "🎮 VRAM / Models"),
        "model-value": u("vram"),
        "onUpdate:modelValue": f[0] || (f[0] = (p) => c("vram", p))
      }, null, 8, ["title", "model-value"]),
      (F(), E(fe, null, Ae(s, (p) => Ge(O("button", {
        key: p.name,
        type: "button",
        class: Le(["fil-cleaner-row", { active: i(p.name, p.defaultOn) }]),
        "aria-pressed": i(p.name, p.defaultOn),
        title: l(p.name, p.label),
        onClick: (m) => a(p.name, p.defaultOn)
      }, [
        f[2] || (f[2] = O("span", { class: "fil-cleaner-dot" }, null, -1)),
        O("span", Km, Q(b(n)(`nc_lbl_${p.name}`, p.label)), 1)
      ], 10, Wm), [
        [Ds, !u("vram")]
      ])), 64)),
      z(rn, {
        title: b(n)("nc_section_ram", "💾 RAM / Cache (advanced)"),
        "model-value": u("ram"),
        "onUpdate:modelValue": f[1] || (f[1] = (p) => c("ram", p))
      }, null, 8, ["title", "model-value"]),
      (F(), E(fe, null, Ae(o, (p) => Ge(O("button", {
        key: p.name,
        type: "button",
        class: Le(["fil-cleaner-row", { active: i(p.name, p.defaultOn) }]),
        "aria-pressed": i(p.name, p.defaultOn),
        title: l(p.name, p.label),
        onClick: (m) => a(p.name, p.defaultOn)
      }, [
        f[3] || (f[3] = O("span", { class: "fil-cleaner-dot" }, null, -1)),
        O("span", Gm, Q(b(n)(`nc_lbl_${p.name}`, p.label)), 1)
      ], 10, zm), [
        [Ds, !u("ram")]
      ])), 64))
    ]));
  }
}), Xm = /* @__PURE__ */ Ce(qm, [["__scopeId", "data-v-33434119"]]), Ym = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xm
}, Symbol.toStringTag, { value: "Module" }));
function bo(e) {
  return Math.min(1, Math.max(0, e));
}
const Jm = { class: "fil-cmp-root" }, Qm = {
  key: 0,
  class: "fil-cmp-placeholder"
}, Zm = { class: "fil-cmp-save-row" }, eh = {
  key: 2,
  class: "fil-cmp-settings"
}, th = /* @__PURE__ */ we({
  __name: "BeforeAfterCompare",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = St(), s = X({
      get: () => t.state.ui.compare_mode ?? "wipe",
      set: (k) => {
        t.state.ui.compare_mode = k, S();
      }
    }), o = X({
      get: () => Number(t.state.ui.compare_position ?? 0.5),
      set: (k) => {
        t.state.ui.compare_position = bo(k), S();
      }
    }), l = X({
      get: () => Number(t.state.ui.compare_opacity ?? 0.5),
      set: (k) => {
        t.state.ui.compare_opacity = bo(k), S();
      }
    }), i = X({
      get: () => t.state.ui.settings_collapsed !== !1,
      set: (k) => {
        t.state.ui.settings_collapsed = k;
      }
    }), a = X(() => [
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
    }, c = X(() => t.state.nodeState.swap ? "ON" : "OFF");
    function d(k) {
      t.state.nodeState.swap = k === "ON";
    }
    const f = X(() => String(t.state.nodeState.resize_mode ?? "Off"));
    function p(k) {
      t.state.nodeState.resize_mode = k;
    }
    const m = X(() => Number(t.state.nodeState.max_resolution ?? 4096) || 4096);
    function _(k) {
      t.state.nodeState.max_resolution = k;
    }
    const y = X(() => f.value !== "Off"), g = X(() => t.state.ui.compare_images ?? {}), x = /* @__PURE__ */ re(null), I = /* @__PURE__ */ re(null), w = /* @__PURE__ */ re(!1), C = X(() => !!x.value || !!I.value);
    function ne(k) {
      return new Promise((j, W) => {
        const Z = new Image();
        Z.onload = () => j(Z), Z.onerror = () => W(new Error("image load failed")), Z.src = k;
      });
    }
    const T = /* @__PURE__ */ re(null), D = /* @__PURE__ */ re(null);
    let A = 0, q = null;
    Ue(
      () => t.state.ui.compare_images,
      async (k) => {
        var le, ve;
        const j = k ?? {}, W = (le = j.a) == null ? void 0 : le[0], Z = (ve = j.b) == null ? void 0 : ve[0];
        w.value = !1, x.value = null, I.value = null;
        try {
          W && (x.value = await ne(Jl(W))), Z && (I.value = await ne(Jl(Z)));
        } catch {
          w.value = !0;
        }
        S();
      },
      { deep: !0, immediate: !0 }
    ), Ue([s, o, l], () => S());
    function $(k, j, W, Z) {
      if (!W || !Z) return { x: 0, y: 0, w: k, h: j };
      const le = k / j, ve = W / Z;
      let et, ie;
      return ve > le ? (et = k, ie = k / ve) : (ie = j, et = j * ve), { x: (k - et) / 2, y: (j - ie) / 2, w: et, h: ie };
    }
    function S() {
      A || (A = requestAnimationFrame(() => {
        A = 0, M();
      }));
    }
    function M() {
      const k = D.value, j = T.value;
      if (!k || !j) return;
      const W = window.devicePixelRatio || 1, Z = j.clientWidth, le = j.clientHeight;
      if (Z <= 0 || le <= 0) return;
      const ve = Math.round(Z * W), et = Math.round(le * W);
      (k.width !== ve || k.height !== et) && (k.width = ve, k.height = et);
      const ie = k.getContext("2d");
      if (!ie) return;
      ie.setTransform(W, 0, 0, W, 0, 0), ie.clearRect(0, 0, Z, le);
      const $e = x.value, De = I.value;
      if (!$e && !De) return;
      if (s.value === "side-by-side") {
        const Xe = Z / 2;
        if ($e) {
          const Oe = $(Xe, le, $e.naturalWidth, $e.naturalHeight);
          ie.drawImage($e, Oe.x, Oe.y, Oe.w, Oe.h);
        }
        if (De) {
          const Oe = $(Xe, le, De.naturalWidth, De.naturalHeight);
          ie.drawImage(De, Xe + Oe.x, Oe.y, Oe.w, Oe.h);
        }
        ie.strokeStyle = "rgba(255,255,255,0.2)", ie.beginPath(), ie.moveTo(Xe, 0), ie.lineTo(Xe, le), ie.stroke();
        return;
      }
      const zt = $e ?? De, ue = $(Z, le, zt.naturalWidth, zt.naturalHeight);
      if (s.value === "before") {
        $e && ie.drawImage($e, ue.x, ue.y, ue.w, ue.h);
        return;
      }
      if (s.value === "after") {
        De && ie.drawImage(De, ue.x, ue.y, ue.w, ue.h);
        return;
      }
      if (s.value === "overlay") {
        $e && ie.drawImage($e, ue.x, ue.y, ue.w, ue.h), De && (ie.save(), ie.globalAlpha = l.value, ie.drawImage(De, ue.x, ue.y, ue.w, ue.h), ie.restore());
        return;
      }
      if (s.value === "difference") {
        $e && ie.drawImage($e, ue.x, ue.y, ue.w, ue.h), De && (ie.save(), ie.globalCompositeOperation = "difference", ie.drawImage(De, ue.x, ue.y, ue.w, ue.h), ie.restore());
        return;
      }
      if ($e && ie.drawImage($e, ue.x, ue.y, ue.w, ue.h), De) {
        const Xe = ue.x + ue.w * o.value;
        ie.save(), ie.beginPath(), ie.rect(Xe, ue.y, ue.x + ue.w - Xe, ue.h), ie.clip(), ie.drawImage(De, ue.x, ue.y, ue.w, ue.h), ie.restore();
        const Oe = getComputedStyle(j).getPropertyValue("--fil-accent").trim() || "#e8724c";
        ie.save(), ie.strokeStyle = Oe, ie.lineWidth = 2, ie.shadowColor = Oe, ie.shadowBlur = 6, ie.beginPath(), ie.moveTo(Xe, ue.y), ie.lineTo(Xe, ue.y + ue.h), ie.stroke(), ie.restore();
      }
    }
    function V(k) {
      const j = T.value;
      if (!j) return;
      const W = j.getBoundingClientRect();
      o.value = bo((k.clientX - W.left) / W.width);
    }
    function R(k) {
      if (s.value !== "wipe") return;
      V(k);
      const j = (Z) => V(Z), W = () => {
        window.removeEventListener("pointermove", j), window.removeEventListener("pointerup", W);
      };
      window.addEventListener("pointermove", j), window.addEventListener("pointerup", W);
    }
    un(() => {
      q = new ResizeObserver(() => S()), T.value && q.observe(T.value), S();
    }), Cn(() => {
      q == null || q.disconnect(), A && cancelAnimationFrame(A);
    });
    async function U(k) {
      var W, Z;
      const j = k === "a" ? (W = g.value.a) == null ? void 0 : W[0] : (Z = g.value.b) == null ? void 0 : Z[0];
      if (!j) {
        st.warning(n("cmp_no_preview", "Run the node to see a preview"));
        return;
      }
      try {
        const le = await Qt.saveCompareImage(j);
        st.success(`${n("cmp_saved", "Saved to output")}: ${le.image.filename}`);
      } catch (le) {
        st.warning(le instanceof Error ? le.message : "Save failed");
      }
    }
    return (k, j) => {
      var W, Z;
      return F(), E("div", Jm, [
        z($o, {
          options: a.value,
          "model-value": s.value,
          label: b(n)("lbl_mode", "⚙️ Mode"),
          title: b(n)("cmp_view_mode", "How to compare the two images."),
          "onUpdate:modelValue": j[0] || (j[0] = (le) => s.value = le)
        }, null, 8, ["options", "model-value", "label", "title"]),
        O("div", {
          ref_key: "wrapRef",
          ref: T,
          class: "fil-cmp-canvas-wrap"
        }, [
          O("canvas", {
            ref_key: "canvasRef",
            ref: D,
            class: Le(["fil-cmp-canvas", { "is-wipe": s.value === "wipe" }]),
            onPointerdown: R
          }, null, 34),
          C.value ? oe("", !0) : (F(), E("div", Qm, Q(w.value ? b(n)("cmp_load_error", "Could not load preview images") : b(n)("cmp_no_preview", "Run the node to see a preview")), 1))
        ], 512),
        s.value === "wipe" ? (F(), Ie(qe, {
          key: 0,
          "model-value": o.value,
          min: 0,
          max: 1,
          step: 0.01,
          label: b(n)("cmp_position", "Position"),
          "onUpdate:modelValue": j[1] || (j[1] = (le) => o.value = le)
        }, null, 8, ["model-value", "label"])) : oe("", !0),
        s.value === "overlay" ? (F(), Ie(qe, {
          key: 1,
          "model-value": l.value,
          min: 0,
          max: 1,
          step: 0.01,
          label: b(n)("cmp_opacity", "Opacity"),
          "onUpdate:modelValue": j[2] || (j[2] = (le) => l.value = le)
        }, null, 8, ["model-value", "label"])) : oe("", !0),
        O("div", Zm, [
          z(lt, {
            variant: "sm",
            label: b(n)("cmp_save_before", "💾 Save before"),
            disabled: !((W = g.value.a) != null && W.length),
            onClick: j[3] || (j[3] = (le) => U("a"))
          }, null, 8, ["label", "disabled"]),
          z(lt, {
            variant: "sm",
            label: b(n)("cmp_save_after", "💾 Save after"),
            disabled: !((Z = g.value.b) != null && Z.length),
            onClick: j[4] || (j[4] = (le) => U("b"))
          }, null, 8, ["label", "disabled"])
        ]),
        z(rn, {
          title: b(n)("cmp_settings", "Settings"),
          modelValue: i.value,
          "onUpdate:modelValue": j[5] || (j[5] = (le) => i.value = le)
        }, null, 8, ["title", "modelValue"]),
        i.value ? oe("", !0) : (F(), E("div", eh, [
          z(it, {
            options: ["ON", "OFF"],
            "option-labels": { ON: b(n)("cmp_swap_on_label", "🔄 Swapped"), OFF: b(n)("cmp_swap_off_label", "↔️ Normal") },
            "model-value": c.value,
            label: b(n)("lbl_swap", "🔁 Swap before/after"),
            title: b(n)("cmp_swap", "Swap which image is shown as before/after."),
            "onUpdate:modelValue": d
          }, null, 8, ["option-labels", "model-value", "label", "title"]),
          z(it, {
            options: [...r],
            "option-labels": u,
            "model-value": f.value,
            label: b(n)("lbl_resize_mode", "🖥️ Resize mode"),
            title: b(n)("cmp_resize_mode", "Off keeps images untouched. Preview modes downscale for a lighter preview and, optionally, output."),
            "onUpdate:modelValue": p
          }, null, 8, ["options", "model-value", "label", "title"]),
          y.value ? (F(), Ie(qe, {
            key: 0,
            "model-value": m.value,
            min: 256,
            max: 8192,
            step: 64,
            label: b(n)("lbl_max_resolution", "🖼️ Max resolution"),
            title: b(n)("cmp_max_resolution", "Maximum width or height used when resizing is enabled."),
            "onUpdate:modelValue": _
          }, null, 8, ["model-value", "label", "title"])) : oe("", !0)
        ]))
      ]);
    };
  }
}), nh = /* @__PURE__ */ Ce(th, [["__scopeId", "data-v-c371e5b6"]]), sh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nh
}, Symbol.toStringTag, { value: "Module" })), oh = { class: "fil-up-root" }, lh = { class: "fil-up-row" }, ih = ["title"], ah = ["title"], rh = { class: "fil-up-row" }, ch = ["title"], uh = ["title"], dh = /* @__PURE__ */ we({
  __name: "UpscaleTileCalc",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = St(), s = ["Low VRAM", "Balanced", "High VRAM", "Max Quality", "Ultra Quality"], o = {
      "Low VRAM": "🪫 Low VRAM",
      Balanced: "⚖️ Balanced",
      "High VRAM": "🔋 High VRAM",
      "Max Quality": "💎 Max Quality",
      "Ultra Quality": "👑 Ultra Quality"
    };
    function l(I, w) {
      return X({
        get: () => Number(t.state.nodeState[I] ?? t.state.initialValues[I] ?? w) || w,
        set: (C) => {
          t.state.nodeState[I] = C;
        }
      });
    }
    function i(I, w) {
      return X({
        get: () => t.state.nodeState[I] ?? t.state.initialValues[I] ?? w ? "ON" : "OFF",
        set: (C) => {
          t.state.nodeState[I] = C === "ON";
        }
      });
    }
    const a = l("upscale_factor", 2), r = l("tile_size", 512), u = l("tile_overlap", 64), c = l("manual_tile_cols", 0), d = l("manual_tile_rows", 0), f = l("max_megapixels", 0), p = i("auto_mode", !1), m = i("non_square_tiles", !1), _ = i("show_grid_preview", !0), y = X({
      get: () => String(t.state.nodeState.auto_profile ?? t.state.initialValues.auto_profile ?? "Balanced"),
      set: (I) => {
        t.state.nodeState.auto_profile = I;
      }
    });
    function g(I) {
      return !!t.state.ui[`collapsed_${I}`];
    }
    function x(I, w) {
      t.state.ui[`collapsed_${I}`] = w;
    }
    return Ue(() => t.state.nodeState, () => {
    }, { deep: !0 }), (I, w) => (F(), E("div", oh, [
      z(qe, {
        "model-value": b(a),
        min: 0.1,
        max: 8,
        step: 0.25,
        label: b(n)("lbl_upscale_factor", "🔍 Upscale factor"),
        title: b(n)("utc_factor", "Upscale multiplier."),
        "onUpdate:modelValue": w[0] || (w[0] = (C) => a.value = C)
      }, null, 8, ["model-value", "label", "title"]),
      z(rn, {
        title: b(n)("utc_section_auto", "⚙️ Auto / advanced"),
        "model-value": g("auto"),
        "onUpdate:modelValue": w[1] || (w[1] = (C) => x("auto", C))
      }, null, 8, ["title", "model-value"]),
      g("auto") ? oe("", !0) : (F(), E(fe, { key: 0 }, [
        z(it, {
          options: ["ON", "OFF"],
          "option-labels": { ON: "⚙️ ON", OFF: "OFF" },
          "model-value": b(p),
          label: b(n)("lbl_full_auto", "🤖 Full auto"),
          title: b(n)("utc_auto_mode", "Pick tile size/overlap automatically from the selected VRAM profile."),
          "onUpdate:modelValue": w[2] || (w[2] = (C) => p.value = C)
        }, null, 8, ["model-value", "label", "title"]),
        b(p) === "ON" ? (F(), Ie(it, {
          key: 0,
          options: [...s],
          "option-labels": o,
          "model-value": y.value,
          label: b(n)("lbl_auto_profile", "🎚️ Auto profile"),
          title: b(n)("utc_auto_profile", "VRAM/quality profile used when Full Auto is on."),
          "onUpdate:modelValue": w[3] || (w[3] = (C) => y.value = C)
        }, null, 8, ["options", "model-value", "label", "title"])) : oe("", !0),
        b(p) === "OFF" ? (F(), E(fe, { key: 1 }, [
          O("div", lh, [
            O("label", {
              class: "fil-w-label",
              title: b(n)("utc_tile_size", "Base tile size.")
            }, Q(b(n)("lbl_tile_size", "🔲 Tile size")), 9, ih),
            z(_t, {
              modelValue: b(r),
              "onUpdate:modelValue": w[4] || (w[4] = (C) => /* @__PURE__ */ ge(r) ? r.value = C : null),
              min: 64,
              max: 2048,
              step: 64
            }, null, 8, ["modelValue"]),
            O("label", {
              class: "fil-w-label",
              title: b(n)("utc_overlap", "Tile overlap.")
            }, Q(b(n)("lbl_overlap", "🧵 Overlap")), 9, ah),
            z(_t, {
              modelValue: b(u),
              "onUpdate:modelValue": w[5] || (w[5] = (C) => /* @__PURE__ */ ge(u) ? u.value = C : null),
              min: 0,
              max: 512,
              step: 8
            }, null, 8, ["modelValue"])
          ]),
          O("div", rh, [
            O("label", {
              class: "fil-w-label",
              title: b(n)("utc_manual_cols", "Force this many tile columns. 0 = compute from tile size.")
            }, Q(b(n)("lbl_manual_cols", "↔️ Manual cols")), 9, ch),
            z(_t, {
              modelValue: b(c),
              "onUpdate:modelValue": w[6] || (w[6] = (C) => /* @__PURE__ */ ge(c) ? c.value = C : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"]),
            O("label", {
              class: "fil-w-label",
              title: b(n)("utc_manual_rows", "Force this many tile rows. 0 = compute from tile size.")
            }, Q(b(n)("lbl_manual_rows", "↕️ Manual rows")), 9, uh),
            z(_t, {
              modelValue: b(d),
              "onUpdate:modelValue": w[7] || (w[7] = (C) => /* @__PURE__ */ ge(d) ? d.value = C : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"])
          ])
        ], 64)) : oe("", !0)
      ], 64)),
      z(qe, {
        "model-value": b(f),
        min: 0,
        max: 64,
        step: 0.5,
        label: b(n)("lbl_max_megapixels", "🖼️ Max megapixels (0 = no cap)"),
        title: b(n)("utc_max_mp", "Cap the upscaled output at this many megapixels. 0 = no cap."),
        "onUpdate:modelValue": w[8] || (w[8] = (C) => f.value = C)
      }, null, 8, ["model-value", "label", "title"]),
      z(it, {
        options: ["ON", "OFF"],
        "option-labels": { ON: "🧩 ON", OFF: "OFF" },
        "model-value": b(m),
        label: b(n)("lbl_non_square", "📐 Non-square tiles"),
        title: b(n)("utc_non_square", "Allow rectangular tiles instead of forcing square ones."),
        "onUpdate:modelValue": w[9] || (w[9] = (C) => m.value = C)
      }, null, 8, ["model-value", "label", "title"]),
      z(it, {
        options: ["ON", "OFF"],
        "option-labels": { ON: "🔲 ON", OFF: "OFF" },
        "model-value": b(_),
        label: b(n)("lbl_show_grid", "🔳 Show grid preview"),
        title: b(n)("utc_show_grid", "Render a tile-grid overlay on the preview output."),
        "onUpdate:modelValue": w[10] || (w[10] = (C) => _.value = C)
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), fh = /* @__PURE__ */ Ce(dh, [["__scopeId", "data-v-d6c5b7d2"]]), ph = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fh
}, Symbol.toStringTag, { value: "Module" })), mh = ["title"], hh = {
  key: 0,
  class: "fil-w-select-label"
}, gh = ["disabled", "aria-label"], _h = ["value"], bh = /* @__PURE__ */ we({
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
    const n = e, s = t, o = X({
      get: () => n.modelValue,
      set: (l) => s("update:modelValue", l)
    });
    return (l, i) => (F(), E("div", {
      class: "fil-w-select",
      title: e.title
    }, [
      e.label ? (F(), E("label", hh, Q(e.label), 1)) : oe("", !0),
      Ge(O("select", {
        "onUpdate:modelValue": i[0] || (i[0] = (a) => o.value = a),
        class: "fil-w-select-input",
        disabled: e.disabled,
        "aria-label": e.label,
        onChange: i[1] || (i[1] = (a) => s("update:modelValue", a.target.value))
      }, [
        (F(!0), E(fe, null, Ae(e.options, (a) => (F(), E("option", {
          key: a,
          value: a
        }, Q(a), 9, _h))), 128))
      ], 40, gh), [
        [wu, o.value]
      ])
    ], 8, mh));
  }
}), sn = /* @__PURE__ */ Ce(bh, [["__scopeId", "data-v-bf2ff33c"]]), vh = { class: "fil-ks-root" }, yh = { class: "fil-ks-row" }, wh = ["title"], xh = ["title"], Sh = ["title"], Ch = ["title"], Fh = ["title"], Mh = /* @__PURE__ */ we({
  __name: "KSampler",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = St();
    function s(I, w) {
      return X({
        get: () => Number(t.state.nodeState[I] ?? t.state.initialValues[I] ?? w) || w,
        set: (C) => {
          t.state.nodeState[I] = C;
        }
      });
    }
    function o(I, w) {
      return X({
        get: () => String(t.state.nodeState[I] ?? t.state.initialValues[I] ?? w),
        set: (C) => {
          t.state.nodeState[I] = C;
        }
      });
    }
    function l(I, w) {
      var D;
      const C = t.state.node, ne = C ? de(C, I) : null, T = (D = ne == null ? void 0 : ne.options) == null ? void 0 : D.values;
      return Array.isArray(T) && T.length ? T : w;
    }
    const i = s("seed", 0), a = s("steps", 20), r = s("cfg", 7), u = s("denoise", 1), c = o("sampler_name", "euler"), d = o("scheduler", "normal"), f = o("preview_method", "auto"), p = o("vae_decode", "true"), m = X(() => l("sampler_name", ["euler"])), _ = X(() => l("scheduler", ["normal"])), y = ["auto", "latent2rgb", "taesd", "vae_decoded_only", "none"], g = ["true", "true (tiled)", "false"], x = {
      true: "✅ Decode",
      "true (tiled)": "🧩 Tiled",
      false: "🚫 Off"
    };
    return (I, w) => (F(), E("div", vh, [
      O("div", yh, [
        O("label", {
          class: "fil-w-label",
          title: b(n)("ks_seed", "Noise seed.")
        }, Q(b(n)("lbl_seed", "🎲 Seed")), 9, wh),
        z(_t, {
          modelValue: b(i),
          "onUpdate:modelValue": w[0] || (w[0] = (C) => /* @__PURE__ */ ge(i) ? i.value = C : null),
          min: 0,
          step: 1
        }, null, 8, ["modelValue"]),
        O("label", {
          class: "fil-w-label",
          title: b(n)("ks_steps", "Number of denoising steps.")
        }, Q(b(n)("lbl_steps", "🪜 Steps")), 9, xh),
        z(_t, {
          modelValue: b(a),
          "onUpdate:modelValue": w[1] || (w[1] = (C) => /* @__PURE__ */ ge(a) ? a.value = C : null),
          min: 1,
          max: 1e4,
          step: 1
        }, null, 8, ["modelValue"])
      ]),
      z(qe, {
        "model-value": b(r),
        min: 0,
        max: 100,
        step: 0.1,
        label: b(n)("lbl_cfg", "🎯 CFG"),
        title: b(n)("ks_cfg", "Classifier-free guidance scale."),
        "onUpdate:modelValue": w[2] || (w[2] = (C) => r.value = C)
      }, null, 8, ["model-value", "label", "title"]),
      O("label", {
        class: "fil-w-label",
        title: b(n)("ks_sampler", "Sampling algorithm.")
      }, Q(b(n)("lbl_sampler", "🌀 Sampler")), 9, Sh),
      z(sn, {
        options: m.value,
        "model-value": b(c),
        title: b(n)("ks_sampler", "Sampling algorithm."),
        "onUpdate:modelValue": w[3] || (w[3] = (C) => c.value = C)
      }, null, 8, ["options", "model-value", "title"]),
      O("label", {
        class: "fil-w-label",
        title: b(n)("ks_scheduler", "Noise schedule.")
      }, Q(b(n)("lbl_scheduler", "📉 Scheduler")), 9, Ch),
      z(sn, {
        options: _.value,
        "model-value": b(d),
        title: b(n)("ks_scheduler", "Noise schedule."),
        "onUpdate:modelValue": w[4] || (w[4] = (C) => d.value = C)
      }, null, 8, ["options", "model-value", "title"]),
      z(qe, {
        "model-value": b(u),
        min: 0,
        max: 1,
        step: 0.01,
        label: b(n)("lbl_denoise", "💧 Denoise"),
        title: b(n)("ks_denoise", "Denoise strength (1.0 = full)."),
        "onUpdate:modelValue": w[5] || (w[5] = (C) => u.value = C)
      }, null, 8, ["model-value", "label", "title"]),
      O("label", {
        class: "fil-w-label",
        title: b(n)("ks_preview", "How the live sampling preview is rendered.")
      }, Q(b(n)("lbl_preview", "👁️ Preview")), 9, Fh),
      z(sn, {
        options: y,
        "model-value": b(f),
        title: b(n)("ks_preview", "How the live sampling preview is rendered."),
        "onUpdate:modelValue": w[6] || (w[6] = (C) => f.value = C)
      }, null, 8, ["model-value", "title"]),
      z(it, {
        options: g,
        "option-labels": x,
        "model-value": b(p),
        label: b(n)("lbl_vae_decode", "🖼️ VAE decode"),
        title: b(n)("ks_vae_decode", "Decode the result to an IMAGE preview/output. Needs a VAE."),
        "onUpdate:modelValue": w[7] || (w[7] = (C) => p.value = C)
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), Lh = /* @__PURE__ */ Ce(Mh, [["__scopeId", "data-v-7abcffc4"]]), Ih = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lh
}, Symbol.toStringTag, { value: "Module" })), Ah = { class: "fil-hrf-root" }, Dh = ["title"], kh = ["title"], Eh = ["title"], Th = { class: "fil-hrf-row" }, Oh = ["title"], Ph = ["title"], Rh = ["title"], Nh = ["title"], $h = /* @__PURE__ */ we({
  __name: "HiResFix",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = St();
    function s(S, M) {
      return X({
        get: () => Number(t.state.nodeState[S] ?? t.state.initialValues[S] ?? M) || M,
        set: (V) => {
          t.state.nodeState[S] = V;
        }
      });
    }
    function o(S, M) {
      return X({
        get: () => String(t.state.nodeState[S] ?? t.state.initialValues[S] ?? M),
        set: (V) => {
          t.state.nodeState[S] = V;
        }
      });
    }
    function l(S, M) {
      return X({
        get: () => t.state.nodeState[S] ?? t.state.initialValues[S] ?? M ? "ON" : "OFF",
        set: (V) => {
          t.state.nodeState[S] = V === "ON";
        }
      });
    }
    function i(S, M) {
      var k;
      const V = t.state.node, R = V ? de(V, S) : null, U = (k = R == null ? void 0 : R.options) == null ? void 0 : k.values;
      return Array.isArray(U) && U.length ? U : M;
    }
    const a = o("upscale_type", "latent"), r = o("hires_ckpt_name", "(use same)"), u = o("latent_upscaler", "nearest-exact"), c = o("pixel_upscaler", ""), d = s("upscale_by", 1.25), f = l("use_same_seed", !0), p = s("seed", 0), m = s("hires_steps", 12), _ = s("denoise", 0.56), y = s("iterations", 1), g = l("use_controlnet", !1), x = o("control_net_name", ""), I = s("strength", 1), w = X(() => i("hires_ckpt_name", ["(use same)"])), C = ["nearest-exact", "bilinear", "area", "bicubic", "bislerp"], ne = X(() => i("pixel_upscaler", ["(none)"])), T = X(() => i("control_net_name", ["(none)"])), D = X(() => a.value === "latent"), A = X(() => a.value === "pixel" || a.value === "both");
    function q(S) {
      return !!t.state.ui[`collapsed_${S}`];
    }
    function $(S, M) {
      t.state.ui[`collapsed_${S}`] = M;
    }
    return (S, M) => (F(), E("div", Ah, [
      z(it, {
        options: ["latent", "pixel", "both"],
        "option-labels": { latent: "🌀 latent", pixel: "🖼️ pixel", both: "🔀 both" },
        "model-value": b(a),
        label: b(n)("lbl_upscale_type", "⬆️ Upscale type"),
        title: b(n)("hrf_upscale_type", "Upscale in latent space, pixel space, or both."),
        "onUpdate:modelValue": M[0] || (M[0] = (V) => a.value = V)
      }, null, 8, ["model-value", "label", "title"]),
      D.value ? (F(), E(fe, { key: 0 }, [
        O("label", {
          class: "fil-w-label",
          title: b(n)("hrf_latent_up", "Latent upscale method.")
        }, Q(b(n)("lbl_latent_up", "🌀 Latent upscaler")), 9, Dh),
        z(sn, {
          options: C,
          "model-value": b(u),
          "onUpdate:modelValue": M[1] || (M[1] = (V) => u.value = V)
        }, null, 8, ["model-value"])
      ], 64)) : oe("", !0),
      A.value ? (F(), E(fe, { key: 1 }, [
        O("label", {
          class: "fil-w-label",
          title: b(n)("hrf_pixel_up", "Pixel upscale model (from upscale_models).")
        }, Q(b(n)("lbl_pixel_up", "🖼️ Pixel upscaler")), 9, kh),
        z(sn, {
          options: ne.value,
          "model-value": b(c),
          "onUpdate:modelValue": M[2] || (M[2] = (V) => c.value = V)
        }, null, 8, ["options", "model-value"])
      ], 64)) : oe("", !0),
      O("label", {
        class: "fil-w-label",
        title: b(n)("hrf_ckpt", "Checkpoint for the hires pass. (use same) reuses the base model.")
      }, Q(b(n)("lbl_hires_ckpt", "📦 Hires checkpoint")), 9, Eh),
      z(sn, {
        options: w.value,
        "model-value": b(r),
        "onUpdate:modelValue": M[3] || (M[3] = (V) => r.value = V)
      }, null, 8, ["options", "model-value"]),
      z(qe, {
        "model-value": b(d),
        min: 0.01,
        max: 8,
        step: 0.05,
        label: b(n)("lbl_upscale_by", "🔍 Upscale by"),
        title: b(n)("hrf_upscale_by", "Upscale multiplier."),
        "onUpdate:modelValue": M[4] || (M[4] = (V) => d.value = V)
      }, null, 8, ["model-value", "label", "title"]),
      z(qe, {
        "model-value": b(_),
        min: 0,
        max: 1,
        step: 0.01,
        label: b(n)("lbl_hrf_denoise", "💧 Denoise"),
        title: b(n)("hrf_denoise", "Denoise strength for the hires re-sample."),
        "onUpdate:modelValue": M[5] || (M[5] = (V) => _.value = V)
      }, null, 8, ["model-value", "label", "title"]),
      O("div", Th, [
        O("label", {
          class: "fil-w-label",
          title: b(n)("hrf_steps", "Steps for the hires re-sample.")
        }, Q(b(n)("lbl_hires_steps", "🪜 Hires steps")), 9, Oh),
        z(_t, {
          modelValue: b(m),
          "onUpdate:modelValue": M[6] || (M[6] = (V) => /* @__PURE__ */ ge(m) ? m.value = V : null),
          min: 1,
          max: 1e4,
          step: 1
        }, null, 8, ["modelValue"]),
        O("label", {
          class: "fil-w-label",
          title: b(n)("hrf_iterations", "How many upscale+resample passes to run.")
        }, Q(b(n)("lbl_iterations", "🔁 Iterations")), 9, Ph),
        z(_t, {
          modelValue: b(y),
          "onUpdate:modelValue": M[7] || (M[7] = (V) => /* @__PURE__ */ ge(y) ? y.value = V : null),
          min: 0,
          max: 5,
          step: 1
        }, null, 8, ["modelValue"])
      ]),
      z(it, {
        options: ["ON", "OFF"],
        "option-labels": { ON: "♻️ same seed", OFF: "🎲 own" },
        "model-value": b(f),
        label: b(n)("lbl_use_same_seed", "🌱 Seed source"),
        title: b(n)("hrf_same_seed", "Reuse the samplers seed for the hires pass."),
        "onUpdate:modelValue": M[8] || (M[8] = (V) => f.value = V)
      }, null, 8, ["model-value", "label", "title"]),
      b(f) === "OFF" ? (F(), E(fe, { key: 2 }, [
        O("label", {
          class: "fil-w-label",
          title: b(n)("hrf_seed", "Hires-pass seed (used when own seed).")
        }, Q(b(n)("lbl_hrf_seed", "🎲 Seed")), 9, Rh),
        z(_t, {
          modelValue: b(p),
          "onUpdate:modelValue": M[9] || (M[9] = (V) => /* @__PURE__ */ ge(p) ? p.value = V : null),
          min: 0,
          step: 1
        }, null, 8, ["modelValue"])
      ], 64)) : oe("", !0),
      z(rn, {
        title: b(n)("hrf_section_cn", "🕹️ ControlNet"),
        "model-value": q("cn"),
        "onUpdate:modelValue": M[10] || (M[10] = (V) => $("cn", V))
      }, null, 8, ["title", "model-value"]),
      q("cn") ? oe("", !0) : (F(), E(fe, { key: 3 }, [
        z(it, {
          options: ["ON", "OFF"],
          "option-labels": { ON: "🕹️ ON", OFF: "OFF" },
          "model-value": b(g),
          label: b(n)("lbl_use_cn", "🕹️ Use ControlNet"),
          title: b(n)("hrf_use_cn", "Guide the hires pass with a ControlNet."),
          "onUpdate:modelValue": M[11] || (M[11] = (V) => g.value = V)
        }, null, 8, ["model-value", "label", "title"]),
        b(g) === "ON" ? (F(), E(fe, { key: 0 }, [
          O("label", {
            class: "fil-w-label",
            title: b(n)("hrf_cn_name", "ControlNet model to apply.")
          }, Q(b(n)("lbl_cn_name", "🧩 ControlNet model")), 9, Nh),
          z(sn, {
            options: T.value,
            "model-value": b(x),
            "onUpdate:modelValue": M[12] || (M[12] = (V) => x.value = V)
          }, null, 8, ["options", "model-value"]),
          z(qe, {
            "model-value": b(I),
            min: 0,
            max: 10,
            step: 0.01,
            label: b(n)("lbl_cn_strength", "💪 Strength"),
            title: b(n)("hrf_cn_strength", "ControlNet strength."),
            "onUpdate:modelValue": M[13] || (M[13] = (V) => I.value = V)
          }, null, 8, ["model-value", "label", "title"])
        ], 64)) : oe("", !0)
      ], 64))
    ]));
  }
}), Vh = /* @__PURE__ */ Ce($h, [["__scopeId", "data-v-ece701fe"]]), Bh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vh
}, Symbol.toStringTag, { value: "Module" }));
//# sourceMappingURL=fil_design_imagemind.js.map
