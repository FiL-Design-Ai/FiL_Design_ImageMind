(function(){try{var s=document.createElement("style");s.textContent=".fil-color-picker[data-v-c4d5f476]{display:flex;flex-direction:column;gap:8px;padding:8px;width:176px;box-sizing:border-box}.fil-cp-sv[data-v-c4d5f476]{position:relative;width:100%;height:100px;border-radius:4px;cursor:crosshair;touch-action:none}.fil-cp-sv-white[data-v-c4d5f476]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to right,#fff,#fff0);border-radius:4px}.fil-cp-sv-black[data-v-c4d5f476]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to top,#000,#0000);border-radius:4px}.fil-cp-sv-thumb[data-v-c4d5f476]{position:absolute;width:10px;height:10px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hue[data-v-c4d5f476]{position:relative;width:100%;height:12px;border-radius:6px;background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red);cursor:pointer;touch-action:none}.fil-cp-hue-thumb[data-v-c4d5f476]{position:absolute;top:50%;width:12px;height:12px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hex-row[data-v-c4d5f476]{display:flex;align-items:center;gap:6px}.fil-cp-swatch[data-v-c4d5f476]{width:22px;height:22px;border-radius:4px;border:1px solid rgba(255,255,255,.25);flex-shrink:0}.fil-cp-hex-input[data-v-c4d5f476]{flex:1;min-width:0;height:22px;box-sizing:border-box;border-radius:4px;border:1px solid rgba(255,255,255,.2);background:#00000040;color:#f2f2f2;font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:12px;padding:0 6px;outline:none}.fil-cp-hex-input[data-v-c4d5f476]:focus{border-color:#ffffff80}.fil-cp-presets[data-v-c4d5f476]{display:grid;grid-template-columns:repeat(5,1fr);gap:4px}.fil-color-swatch[data-v-c4d5f476]{width:24px;height:24px;border-radius:4px;border:2px solid transparent;background:var(--swatch);cursor:pointer;transition:border-color .08s,transform .08s;outline:none;box-sizing:border-box}.fil-color-swatch[data-v-c4d5f476]:hover{border-color:#ffffff80;transform:scale(1.15)}.fil-color-swatch.is-active[data-v-c4d5f476]{border-color:#fff;box-shadow:0 0 0 1px var(--swatch)}.fil-icon[data-v-dfb78d9f]{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;line-height:0}.fil-icon[data-v-dfb78d9f] svg{width:100%;height:100%}.fil-node-help-badge[data-v-3001cdba]{position:absolute;top:4px;right:4px;width:20px;height:20px;padding:0;display:flex;align-items:center;justify-content:center;border-radius:50%;border:1px solid rgba(255,255,255,.15);background:#00000040;color:var(--fil-muted, rgba(255, 255, 255, .55));cursor:pointer;outline:none;z-index:5;transition:background .08s,color .08s,border-color .08s}.fil-node-help-badge[data-v-3001cdba]:hover,.fil-node-help-badge[data-v-3001cdba]:focus-visible{background:var(--fil-accent);border-color:var(--fil-accent);color:#fff}.fil-node-shell[data-v-0fbe412b]{position:relative}.fil-modal-backdrop[data-v-00452928]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000;display:flex;align-items:center;justify-content:center;background:#0000008c;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.fil-modal-panel[data-v-00452928]{width:90%;max-height:80vh;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:10px;box-shadow:0 20px 60px #00000080;display:flex;flex-direction:column;overflow:hidden}.fil-modal-header[data-v-00452928]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08)}.fil-modal-title[data-v-00452928]{font-size:14px;font-weight:600;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-close[data-v-00452928]{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;border:none;background:transparent;color:var(--fil-muted, rgba(255, 255, 255, .5));cursor:pointer;transition:background .08s,color .08s}.fil-modal-close[data-v-00452928]:hover{background:#ffffff14;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-body[data-v-00452928]{flex:1;overflow-y:auto;padding:16px}.fil-modal-enter-active[data-v-00452928],.fil-modal-leave-active[data-v-00452928]{transition:opacity .15s ease}.fil-modal-enter-from[data-v-00452928],.fil-modal-leave-to[data-v-00452928]{opacity:0}.fil-modal-enter-active .fil-modal-panel[data-v-00452928],.fil-modal-leave-active .fil-modal-panel[data-v-00452928]{transition:transform .15s ease}.fil-modal-enter-from .fil-modal-panel[data-v-00452928],.fil-modal-leave-to .fil-modal-panel[data-v-00452928]{transform:scale(.95) translateY(8px)}.fil-help-title[data-v-536c1547]{margin:0 0 12px;font-size:16px;font-weight:700;color:var(--fil-text, rgba(255,255,255,.9))}.fil-help-body[data-v-536c1547]{margin:0 0 12px;font-size:13px;line-height:1.6;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet[data-v-536c1547]{display:flex;gap:6px;align-items:flex-start;margin-bottom:6px;font-size:13px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet>span[data-v-536c1547]{flex:1}.fil-help-table[data-v-536c1547]{width:100%;border-collapse:collapse;margin-top:8px;font-size:12px}.fil-help-table th[data-v-536c1547],.fil-help-table td[data-v-536c1547]{text-align:left;padding:6px 10px;border-bottom:1px solid rgba(255,255,255,.06)}.fil-help-table th[data-v-536c1547]{font-weight:600;color:var(--fil-text, rgba(255,255,255,.85))}.fil-help-table td[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.6))}.fil-help-code[data-v-536c1547]{background:#0000004d;border-radius:6px;padding:12px;margin-top:10px;overflow-x:auto;font-size:12px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-empty[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.4));font-size:13px}.fil-toast-stack[data-v-08cc58fa]{position:fixed;right:20px;bottom:20px;z-index:100001;display:flex;flex-direction:column;gap:8px;pointer-events:none;max-width:min(360px,90vw)}.fil-toast[data-v-08cc58fa]{pointer-events:auto;display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:8px;background:var(--fil-panel, #171b22);color:var(--fil-text, #e8edf3);border:1px solid var(--fil-panel-alt, #2a3041);border-left:3px solid var(--toast-color, var(--fil-muted));box-shadow:0 6px 22px #0000006b;font:12.5px/1.45 system-ui,sans-serif;animation:fil-toast-in-08cc58fa .18s cubic-bezier(.2,.7,.3,1)}@keyframes fil-toast-in-08cc58fa{0%{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}.fil-toast-dot[data-v-08cc58fa]{flex:none;width:8px;height:8px;margin-top:4px;border-radius:50%;background:var(--toast-color, var(--fil-muted))}.fil-toast-text[data-v-08cc58fa]{flex:1;min-width:0;align-self:center}.fil-toast-action[data-v-08cc58fa]{flex:none;cursor:pointer;padding:4px 8px;border-radius:4px;background:#ffffff0f;color:inherit;border:none;font:inherit;transition:background .12s}.fil-toast-action[data-v-08cc58fa]:hover{background:#ffffff24}.fil-toast-close[data-v-08cc58fa]{flex:none;align-self:flex-start;cursor:pointer;width:18px;height:18px;padding:0;border:none;background:none;color:var(--fil-muted);opacity:.6;transition:opacity .12s;font-size:16px;line-height:18px}.fil-toast-close[data-v-08cc58fa]:hover{opacity:1}.fil-w-btn[data-v-1fbb19ef]{box-sizing:border-box;padding:8px 10px;border-radius:6px;background:#ffffff0d;border:1px solid rgba(255,255,255,.14);color:var(--fil-text, rgba(255, 255, 255, .85));font-family:ui-sans-serif,system-ui,sans-serif;font-size:12px;cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;display:inline-flex;align-items:center;justify-content:center;gap:6px}.fil-w-btn[data-v-1fbb19ef]:hover:not(:disabled){background:var(--fil-accent);border-color:var(--fil-accent);color:#fff}.fil-w-btn[data-v-1fbb19ef]:active{transform:translateY(1px)}.fil-w-btn[data-v-1fbb19ef]:disabled{opacity:.4;cursor:default}.fil-w-btn-accent[data-v-1fbb19ef]{background:var(--fil-accent);border-color:var(--fil-accent);color:#fff}.fil-w-btn-danger[data-v-1fbb19ef]{color:var(--fil-danger, #ef6666)}.fil-w-btn-danger[data-v-1fbb19ef]:hover:not(:disabled){background:var(--fil-danger, #ef6666);border-color:var(--fil-danger, #ef6666);color:#fff}.fil-w-btn-sm[data-v-1fbb19ef]{padding:4px 8px;font-size:11px}.fil-w-btn-full[data-v-1fbb19ef]{width:100%;display:block}.fil-w-btn-icon[data-v-1fbb19ef]{display:inline-flex;align-items:center;justify-content:center;gap:5px}.fil-w-btn-glyph[data-v-1fbb19ef] svg{width:14px;height:14px}.fil-w-btn.is-flashing[data-v-1fbb19ef],.fil-w-btn.is-flashing[data-v-1fbb19ef]:hover{background:var(--fil-ok, #62c987);border-color:var(--fil-ok, #62c987);color:#fff}.fil-w-btn.is-loading[data-v-1fbb19ef]{cursor:wait}.fil-w-btn[data-v-1fbb19ef]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-btn-spinner[data-v-1fbb19ef]{display:inline-block;width:12px;height:12px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:fil-w-spin-1fbb19ef .6s linear infinite}@keyframes fil-w-spin-1fbb19ef{to{transform:rotate(360deg)}}.fil-pm-root[data-v-0de4d738]{display:flex;flex-direction:column;gap:12px;padding:4px 0}.fil-pm-card[data-v-0de4d738]{background:#ffffff08;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:12px}.fil-pm-header[data-v-0de4d738]{display:flex;align-items:center;gap:8px;margin-bottom:10px}.fil-pm-icon[data-v-0de4d738]{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:6px;background:var(--fil-accent, #7c5cfc);color:#fff;font-size:11px;font-weight:700;font-family:ui-monospace,monospace}.fil-pm-name[data-v-0de4d738]{font-weight:600;font-size:14px;color:var(--fil-text, #f2f2f2)}.fil-pm-disp[data-v-0de4d738]{font-size:11px;color:#ffffff80}.fil-pm-fields[data-v-0de4d738]{display:flex;flex-direction:column;gap:8px;margin-bottom:10px}.fil-pm-field[data-v-0de4d738]{display:flex;flex-direction:column;gap:3px}.fil-pm-field-label[data-v-0de4d738]{font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#ffffff80}.fil-pm-input[data-v-0de4d738]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,monospace;font-size:13px;outline:none;transition:border-color .08s}.fil-pm-input[data-v-0de4d738]:focus{border-color:var(--fil-accent)}.fil-pm-input.fil-pm-has-val[data-v-0de4d738]{border-color:var(--fil-muted, #555)}.fil-pm-actions[data-v-0de4d738]{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}.fil-pm-models[data-v-0de4d738]{display:flex;flex-wrap:wrap;gap:4px}.fil-pm-model-tag[data-v-0de4d738]{display:inline-flex;align-items:center;gap:3px;background:#ffffff12;border-radius:4px;padding:2px 6px;font-size:11px;color:#ffffffbf;white-space:nowrap}.fil-pm-vision-badge[data-v-0de4d738]{font-size:10px;line-height:1}.fil-pm-err[data-v-0de4d738]{font-size:11px;color:var(--fil-danger, #ef6666);margin-top:4px}.fil-pm-age[data-v-0de4d738]{font-size:10px;color:#fff6;align-self:center}.fil-w-info[data-v-851660c1]{font-size:11px;line-height:1.5;color:#ffffff73;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.fil-w-info[data-ok][data-v-851660c1]{color:var(--fil-ok, #62c987)}.fil-w-info[data-err][data-v-851660c1]{color:var(--fil-danger, #ef6666)}.fil-seed-root[data-v-2d71e72f]{display:flex;flex-direction:column;gap:8px;padding:8px;background:var(--fil-panel, #171b22);border-radius:var(--fil-radius, 8px);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-seed-readout[data-v-2d71e72f]{display:flex;flex-direction:column;gap:4px}.fil-seed-display[data-v-2d71e72f]{width:100%;box-sizing:border-box;height:42px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:9px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:19px;text-align:center;outline:none;transition:border-color .08s}.fil-seed-display[data-v-2d71e72f]:focus{border-color:var(--fil-accent)}.fil-seed-display[readonly][data-v-2d71e72f]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-seed-actions[data-v-2d71e72f]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px}.fil-combo[data-v-39d4212e]{display:flex;flex-direction:column;gap:4px;width:100%}.fil-combo-label[data-v-39d4212e]{font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-combo-trigger[data-v-39d4212e]{width:100%;box-sizing:border-box;height:30px;display:flex;align-items:center;gap:6px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer;text-align:left;-moz-appearance:none;appearance:none;-webkit-appearance:none}.fil-combo-trigger.open[data-v-39d4212e],.fil-combo-trigger[data-v-39d4212e]:focus-visible{border-color:var(--fil-accent);outline:2px solid var(--fil-accent);outline-offset:1px}.fil-combo-trigger.disabled[data-v-39d4212e]{opacity:.5;cursor:default}.fil-combo-trigger-label[data-v-39d4212e]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-chevron[data-v-39d4212e]{font-size:9px;color:var(--fil-muted, rgba(255, 255, 255, .5));flex-shrink:0}.fil-combo-badge[data-v-39d4212e]{flex-shrink:0;font-size:9px;line-height:1;padding:2px 5px;border-radius:999px;background:var(--fil-accent);color:#fff;font-weight:600}.fil-combo-panel[data-v-39d4212e]{position:fixed;z-index:10001;box-sizing:border-box;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:8px;box-shadow:0 12px 32px #0006;display:flex;flex-direction:column;overflow:hidden;padding:6px}.fil-combo-search[data-v-39d4212e]{box-sizing:border-box;width:100%;margin-bottom:6px;padding:6px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-combo-search[data-v-39d4212e]:focus{border-color:var(--fil-accent)}.fil-combo-list[data-v-39d4212e]{display:flex;flex-direction:column;gap:2px;max-height:240px;overflow-y:auto}.fil-combo-option[data-v-39d4212e]{display:flex;align-items:center;gap:6px;width:100%;box-sizing:border-box;padding:6px 8px;border-radius:5px;border:none;background:transparent;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;text-align:left;cursor:pointer;outline:none}.fil-combo-option.active[data-v-39d4212e]{background:#ffffff14}.fil-combo-option.selected[data-v-39d4212e]{color:var(--fil-accent);font-weight:600}.fil-combo-option-label[data-v-39d4212e]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-empty[data-v-39d4212e]{padding:10px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-w-num[data-v-b9154493]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:14px;text-align:left;outline:none;transition:border-color .08s}.fil-w-num[data-v-b9154493]:focus{border-color:var(--fil-accent)}.fil-w-num[data-v-b9154493]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-num[data-v-b9154493]:disabled{opacity:.5}.fil-w-slider[data-v-b98a8a08]{display:flex;flex-direction:column;gap:4px;width:100%}.fil-w-slider-label[data-v-b98a8a08]{font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-slider-row[data-v-b98a8a08]{display:flex;align-items:center;gap:6px}.fil-w-slider-range[data-v-b98a8a08]{flex:1;accent-color:var(--fil-accent);cursor:pointer}.fil-w-slider-range[data-v-b98a8a08]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-slider-row[data-v-b98a8a08] .fil-w-num{width:70px;flex:none}.fil-provider-root[data-v-284b2222]{display:flex;flex-direction:column;gap:6px;padding:8px;background:var(--fil-panel, #171b22);border-radius:var(--fil-radius, 8px);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;min-width:0;overflow:hidden}.fil-w-label[data-v-284b2222]{font-size:10px;color:var(--fil-muted, rgba(255,255,255,.55));margin-top:2px}.fil-provider-row[data-v-284b2222]{display:flex;gap:4px;align-items:stretch;min-width:0}.fil-provider-row[data-v-284b2222] .fil-combo{flex:1;min-width:0}.fil-model-filter-bar[data-v-284b2222]{display:flex;align-items:center;gap:4px;min-width:0}.fil-model-filter-wrap[data-v-284b2222]{flex:1;min-width:0}.fil-model-filter[data-v-284b2222]{width:100%;box-sizing:border-box;height:24px;background:var(--fil-panel-alt, #0f1113);border:1px solid var(--fil-muted, #3a3d40);border-radius:4px;padding:2px 6px;color:var(--fil-text, #e8edf3);font-family:inherit;font-size:11px;outline:none}.fil-model-filter[data-v-284b2222]:focus{border-color:var(--fil-accent)}.fil-model-count[data-v-284b2222]{font-size:9px;color:var(--fil-muted, rgba(255,255,255,.45));white-space:nowrap;flex-shrink:0}.fil-w-chips[data-v-3c07d909]{display:grid;gap:5px;width:100%}.fil-w-chip[data-v-3c07d909]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-3c07d909]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-3c07d909]{background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-accent);border-color:var(--fil-accent);font-weight:500;box-shadow:0 0 8px color-mix(in srgb,var(--fil-accent) 55%,transparent)}.fil-w-chip.disabled[data-v-3c07d909]{opacity:.5;cursor:default}.fil-w-chip[data-v-3c07d909]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chiplist[data-v-8b6ca087]{display:flex;flex-direction:column;gap:5px;width:100%}.fil-w-search[data-v-8b6ca087]{box-sizing:border-box;width:100%;padding:5px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:11px;outline:none}.fil-w-search[data-v-8b6ca087]:focus{border-color:var(--fil-accent)}.fil-w-search[data-v-8b6ca087]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-chip-scroll[data-v-8b6ca087]{display:grid;gap:3px;max-height:200px;overflow-y:auto;overflow-x:hidden;padding-right:2px}.fil-w-chip-scroll[data-v-8b6ca087]::-webkit-scrollbar{width:5px}.fil-w-chip-scroll[data-v-8b6ca087]::-webkit-scrollbar-thumb{background:var(--fil-muted, #555);border-radius:3px}.fil-w-chip-scroll[data-v-8b6ca087]::-webkit-scrollbar-track{background:transparent}.fil-w-chip[data-v-8b6ca087]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-8b6ca087]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-8b6ca087]{background:var(--fil-accent);color:#fff;border-color:var(--fil-accent);font-weight:500}.fil-w-chip.disabled[data-v-8b6ca087]{opacity:.5;cursor:default}.fil-w-chip[data-v-8b6ca087]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chip-empty[data-v-8b6ca087]{padding:8px;text-align:center;color:var(--fil-muted, #666);font-size:11px}.fil-w-segmented[data-v-163eefcf]{display:flex;flex-direction:column;gap:4px;width:100%}.fil-w-segmented-label[data-v-163eefcf]{font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-pill[data-v-163eefcf]{display:flex;gap:0;background:#ffffff0f;border-radius:7px;padding:3px}.fil-w-pill.disabled[data-v-163eefcf]{opacity:.5}.fil-w-seg[data-v-163eefcf]{flex:1;text-align:center;padding:6px;border:none;border-radius:5px;background:transparent;font-family:inherit;font-size:12px;color:var(--fil-muted, rgba(255, 255, 255, .55));cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s}.fil-w-seg[data-v-163eefcf]:hover:not(.active){color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-w-seg.active[data-v-163eefcf]{background:var(--fil-accent);color:#fff;font-weight:500}.fil-w-seg[data-v-163eefcf]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-section[data-v-2b21d5b8]{box-sizing:border-box;width:100%;padding:6px 10px;border:none;border-radius:5px;background:#ffffff0a;color:var(--fil-muted, rgba(255, 255, 255, .7));font-family:inherit;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;cursor:pointer;text-align:left;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s;display:flex;align-items:center;gap:6px}.fil-w-section[data-v-2b21d5b8]:hover:not(:disabled){background:#ffffff14;color:#fff}.fil-w-section[data-v-2b21d5b8]:disabled{cursor:default}.fil-w-section[data-v-2b21d5b8]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-section-arrow[data-v-2b21d5b8]{display:inline-block;width:8px;font-size:9px;color:var(--fil-accent)}.fil-style-picker[data-v-6e196d1e]{display:flex;flex-direction:column;gap:10px}.fil-style-cats[data-v-6e196d1e]{display:flex;flex-wrap:wrap;gap:6px}.fil-style-cat[data-v-6e196d1e]{box-sizing:border-box;padding:5px 10px;border-radius:999px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .2));background:#ffffff0a;color:var(--fil-text, rgba(255, 255, 255, .8));font-size:11px;cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-cat[data-v-6e196d1e]:hover{border-color:var(--fil-accent)}.fil-style-cat.active[data-v-6e196d1e]{background:var(--fil-accent);border-color:var(--fil-accent);color:#fff;font-weight:500}.fil-style-cat[data-v-6e196d1e]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-style-search[data-v-6e196d1e]{box-sizing:border-box;width:100%;padding:7px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-style-search[data-v-6e196d1e]:focus{border-color:var(--fil-accent)}.fil-style-grid[data-v-6e196d1e]{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:8px;max-height:50vh;overflow-y:auto;padding-right:2px}.fil-style-tile[data-v-6e196d1e]{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px 6px;border-radius:8px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .14));background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-tile[data-v-6e196d1e]:hover{border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-style-tile.active[data-v-6e196d1e]{border-color:var(--fil-accent);background:#f68a4524}.fil-style-tile[data-v-6e196d1e]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-style-tile-preview[data-v-6e196d1e]{width:100%;aspect-ratio:1;border-radius:6px;background:#ffffff0d;display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:22px}.fil-style-tile-img[data-v-6e196d1e]{width:100%;height:100%;object-fit:cover}.fil-style-tile-label[data-v-6e196d1e]{font-size:10px;text-align:center;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.fil-style-empty[data-v-6e196d1e]{grid-column:1 / -1;padding:20px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-scanner-root[data-v-1e6be585]{display:flex;flex-direction:column;gap:6px;padding:8px;background:#64b4dc0f;border:1px solid rgba(0,255,255,.18);border-radius:20px;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 8px 24px #00000059,inset 0 1px #ffffff14;color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;width:100%;box-sizing:border-box;min-width:0;overflow:hidden}.fil-section-block[data-v-1e6be585]{display:flex;flex-direction:column;gap:6px;min-width:0}.fil-w-row[data-v-1e6be585]{display:flex;flex-direction:column;gap:3px;min-width:0}.fil-w-textarea[data-v-1e6be585],.fil-w-input[data-v-1e6be585]{width:100%;box-sizing:border-box;background:#3250782e;border:1px solid rgba(0,150,200,.35);border-radius:10px;color:var(--fil-text, #a0c4ff);padding:8px 10px;font-size:12px;font-family:inherit;outline:none;transition:border-color .08s}.fil-w-textarea[data-v-1e6be585]{min-height:56px;resize:vertical}.fil-w-textarea[data-v-1e6be585]:focus,.fil-w-input[data-v-1e6be585]:focus{border-color:var(--fil-accent)}.fil-style-pair-row[data-v-1e6be585]{display:flex;gap:4px;min-width:0}.fil-style-pair-item[data-v-1e6be585]{flex:1;min-width:0}.fil-scanner-seed[data-v-1e6be585]{display:flex;flex-direction:column;gap:4px;padding-top:3px;border-top:1px solid rgba(255,255,255,.08);min-width:0}.fil-scanner-seed-row[data-v-1e6be585]{display:flex;gap:6px;min-width:0}.fil-scanner-seed-field[data-v-1e6be585]{flex:1.3;min-width:0;box-sizing:border-box;height:34px;background:#00000059;border:1px solid rgba(255,255,255,.08);border-radius:17px;padding:0 12px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:13px;text-align:center;outline:none;transition:border-color .08s}.fil-scanner-seed-field[data-v-1e6be585]:focus{border-color:var(--fil-accent)}.fil-scanner-seed-field.is-random[data-v-1e6be585]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-scanner-seed-pill[data-v-1e6be585]{flex:1;min-width:0;box-sizing:border-box;height:34px;padding:0 8px;border-radius:17px;border:1px solid rgba(0,150,200,.4);background:#ffffff0f;color:var(--fil-text, #e8edf3);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-scanner-seed-pill[data-v-1e6be585]:hover{background:#ffffff1f}.fil-scanner-seed-pill.active[data-v-1e6be585]{background:#ffffff29;border-color:#fff3}.fil-scanner-seed-pill[data-v-1e6be585]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-scanner-seed-pill-accent[data-v-1e6be585]{background:var(--fil-accent);border-color:var(--fil-accent);color:#241206;font-weight:700}.fil-scanner-seed-pill-accent[data-v-1e6be585]:hover{filter:brightness(1.08);background:var(--fil-accent)}.fil-cleaner-root[data-v-a3fa7f07]{display:flex;flex-direction:column;gap:5px;padding:8px;background:var(--fil-panel, #171b22);border-radius:var(--fil-radius, 8px);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cleaner-row[data-v-a3fa7f07]{all:unset;box-sizing:border-box;display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:6px;border:1px solid rgba(255,255,255,.12);background:#ffffff0a;cursor:pointer;-webkit-user-select:none;user-select:none;transition:background .08s,border-color .08s}.fil-cleaner-row[data-v-a3fa7f07]:hover{background:#ffffff14}.fil-cleaner-row.active[data-v-a3fa7f07]{border-color:var(--fil-accent);background:#f68a451f}.fil-cleaner-dot[data-v-a3fa7f07]{width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,.3);flex:none;transition:border-color .08s,background .08s;display:flex;align-items:center;justify-content:center}.fil-cleaner-dot[data-v-a3fa7f07]:after{content:\"✓\";font-size:10px;line-height:1;color:#fff;opacity:0;transition:opacity .08s}.fil-cleaner-row.active .fil-cleaner-dot[data-v-a3fa7f07]{background:var(--fil-accent);border-color:var(--fil-accent)}.fil-cleaner-row.active .fil-cleaner-dot[data-v-a3fa7f07]:after{opacity:1}.fil-cleaner-label[data-v-a3fa7f07]{flex:1;font-size:12px}.fil-cmp-root[data-v-00ddc768]{display:flex;flex-direction:column;gap:8px;padding:8px;background:var(--fil-panel, #171b22);border-radius:var(--fil-radius, 8px);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cmp-canvas-wrap[data-v-00ddc768]{position:relative;width:100%;height:220px;border-radius:6px;overflow:hidden;background:linear-gradient(45deg,rgba(255,255,255,.04) 25%,transparent 25%,transparent 75%,rgba(255,255,255,.04) 75%) 0 0/16px 16px,linear-gradient(45deg,rgba(255,255,255,.04) 25%,transparent 25%,transparent 75%,rgba(255,255,255,.04) 75%) 8px 8px/16px 16px,#0d0f13}.fil-cmp-canvas[data-v-00ddc768]{display:block;width:100%;height:100%;touch-action:none}.fil-cmp-canvas.is-wipe[data-v-00ddc768]{cursor:ew-resize}.fil-cmp-placeholder[data-v-00ddc768]{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;text-align:center;padding:12px;color:var(--fil-muted, rgba(255, 255, 255, .5));font-size:12px;pointer-events:none}.fil-cmp-save-row[data-v-00ddc768]{display:grid;grid-template-columns:1fr 1fr;gap:6px}.fil-cmp-settings[data-v-00ddc768]{display:flex;flex-direction:column;gap:8px}.fil-up-root[data-v-4b0156da]{display:flex;flex-direction:column;gap:8px;padding:8px;background:var(--fil-panel, #171b22);border-radius:var(--fil-radius, 8px);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-up-row[data-v-4b0156da]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(48px,1fr) minmax(auto,max-content) minmax(48px,1fr);align-items:center;gap:6px}.fil-w-label[data-v-4b0156da]{font-size:11px;color:var(--fil-muted, rgba(255,255,255,.55))}\n";document.head.appendChild(s);}catch(e){}})();
import { app as Xi } from "/scripts/app.js";
/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Io(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const we = {}, ln = [], ht = () => {
}, Yi = () => !1, Ls = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Is = (e) => e.startsWith("onUpdate:"), Ee = Object.assign, Ao = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Pr = Object.prototype.hasOwnProperty, ge = (e, t) => Pr.call(e, t), ee = Array.isArray, rn = (e) => Xn(e) === "[object Map]", Ji = (e) => Xn(e) === "[object Set]", Xo = (e) => Xn(e) === "[object Date]", re = (e) => typeof e == "function", Ce = (e) => typeof e == "string", Qe = (e) => typeof e == "symbol", he = (e) => e !== null && typeof e == "object", Qi = (e) => (he(e) || re(e)) && re(e.then) && re(e.catch), Zi = Object.prototype.toString, Xn = (e) => Zi.call(e), Rr = (e) => Xn(e).slice(8, -1), el = (e) => Xn(e) === "[object Object]", As = (e) => Ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Dn = /* @__PURE__ */ Io(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ds = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Or = /-\w/g, Ge = Ds(
  (e) => e.replace(Or, (t) => t.slice(1).toUpperCase())
), Nr = /\B([A-Z])/g, Nt = Ds(
  (e) => e.replace(Nr, "-$1").toLowerCase()
), ks = Ds((e) => e.charAt(0).toUpperCase() + e.slice(1)), zs = Ds(
  (e) => e ? `on${ks(e)}` : ""
), mt = (e, t) => !Object.is(e, t), us = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, tl = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Do = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, $r = (e) => {
  const t = Ce(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Yo;
const Ts = () => Yo || (Yo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ze(e) {
  if (ee(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = Ce(s) ? Ur(s) : ze(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (Ce(e) || he(e))
    return e;
}
const Vr = /;(?![^(]*\))/g, Br = /:([^]+)/, Hr = /\/\*[^]*?\*\//g;
function Ur(e) {
  const t = {};
  return e.replace(Hr, "").split(Vr).forEach((n) => {
    if (n) {
      const s = n.split(Br);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Fe(e) {
  let t = "";
  if (Ce(e))
    t = e;
  else if (ee(e))
    for (let n = 0; n < e.length; n++) {
      const s = Fe(e[n]);
      s && (t += s + " ");
    }
  else if (he(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const jr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Wr = /* @__PURE__ */ Io(jr);
function nl(e) {
  return !!e || e === "";
}
function zr(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = ko(e[s], t[s]);
  return n;
}
function ko(e, t) {
  if (e === t) return !0;
  let n = Xo(e), s = Xo(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Qe(e), s = Qe(t), n || s)
    return e === t;
  if (n = ee(e), s = ee(t), n || s)
    return n && s ? zr(e, t) : !1;
  if (n = he(e), s = he(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const l in e) {
      const r = e.hasOwnProperty(l), a = t.hasOwnProperty(l);
      if (r && !a || !r && a || !ko(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const sl = (e) => !!(e && e.__v_isRef === !0), se = (e) => Ce(e) ? e : e == null ? "" : ee(e) || he(e) && (e.toString === Zi || !re(e.toString)) ? sl(e) ? se(e.value) : JSON.stringify(e, ol, 2) : String(e), ol = (e, t) => sl(t) ? ol(e, t.value) : rn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[Gs(s, i) + " =>"] = o, n),
    {}
  )
} : Ji(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Gs(n))
} : Qe(t) ? Gs(t) : he(t) && !ee(t) && !el(t) ? String(t) : t, Gs = (e, t = "") => {
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
let Te;
class il {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Te && (Te.active ? (this.parent = Te, this.index = (Te.scopes || (Te.scopes = [])).push(
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
      const n = Te;
      try {
        return Te = this, t();
      } finally {
        Te = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Te, Te = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Te === this)
        Te = this.prevScope;
      else {
        let t = Te;
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
function ll(e) {
  return new il(e);
}
function rl() {
  return Te;
}
function Gr(e, t = !1) {
  Te && Te.cleanups.push(e);
}
let Se;
const Ks = /* @__PURE__ */ new WeakSet();
class al {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Te && (Te.active ? Te.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ks.has(this) && (Ks.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ul(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Jo(this), dl(this);
    const t = Se, n = it;
    Se = this, it = !0;
    try {
      return this.fn();
    } finally {
      fl(this), Se = t, it = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Po(t);
      this.deps = this.depsTail = void 0, Jo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ks.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    uo(this) && this.run();
  }
  get dirty() {
    return uo(this);
  }
}
let cl = 0, kn, Tn;
function ul(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Tn, Tn = e;
    return;
  }
  e.next = kn, kn = e;
}
function To() {
  cl++;
}
function Eo() {
  if (--cl > 0)
    return;
  if (Tn) {
    let t = Tn;
    for (Tn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; kn; ) {
    let t = kn;
    for (kn = void 0; t; ) {
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
function dl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function fl(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Po(s), Kr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function uo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (pl(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function pl(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Hn) || (e.globalVersion = Hn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !uo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Se, s = it;
  Se = e, it = !0;
  try {
    dl(e);
    const o = e.fn(e._value);
    (t.version === 0 || mt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Se = n, it = s, fl(e), e.flags &= -3;
  }
}
function Po(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Po(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Kr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let it = !0;
const ml = [];
function vt() {
  ml.push(it), it = !1;
}
function bt() {
  const e = ml.pop();
  it = e === void 0 ? !0 : e;
}
function Jo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Se;
    Se = void 0;
    try {
      t();
    } finally {
      Se = n;
    }
  }
}
let Hn = 0;
class qr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ro {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Se || !it || Se === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Se)
      n = this.activeLink = new qr(Se, this), Se.deps ? (n.prevDep = Se.depsTail, Se.depsTail.nextDep = n, Se.depsTail = n) : Se.deps = Se.depsTail = n, hl(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Se.depsTail, n.nextDep = void 0, Se.depsTail.nextDep = n, Se.depsTail = n, Se.deps === n && (Se.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Hn++, this.notify(t);
  }
  notify(t) {
    To();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Eo();
    }
  }
}
function hl(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        hl(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ms = /* @__PURE__ */ new WeakMap(), Yt = /* @__PURE__ */ Symbol(
  ""
), fo = /* @__PURE__ */ Symbol(
  ""
), Un = /* @__PURE__ */ Symbol(
  ""
);
function Ve(e, t, n) {
  if (it && Se) {
    let s = ms.get(e);
    s || ms.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Ro()), o.map = s, o.key = n), o.track();
  }
}
function Mt(e, t, n, s, o, i) {
  const l = ms.get(e);
  if (!l) {
    Hn++;
    return;
  }
  const r = (a) => {
    a && a.trigger();
  };
  if (To(), t === "clear")
    l.forEach(r);
  else {
    const a = ee(e), u = a && As(n);
    if (a && n === "length") {
      const c = Number(s);
      l.forEach((d, f) => {
        (f === "length" || f === Un || !Qe(f) && f >= c) && r(d);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && r(l.get(n)), u && r(l.get(Un)), t) {
        case "add":
          a ? u && r(l.get("length")) : (r(l.get(Yt)), rn(e) && r(l.get(fo)));
          break;
        case "delete":
          a || (r(l.get(Yt)), rn(e) && r(l.get(fo)));
          break;
        case "set":
          rn(e) && r(l.get(Yt));
          break;
      }
  }
  Eo();
}
function Xr(e, t) {
  const n = ms.get(e);
  return n && n.get(t);
}
function tn(e) {
  const t = /* @__PURE__ */ fe(e);
  return t === e ? t : (Ve(t, "iterate", Un), /* @__PURE__ */ Je(e) ? t : t.map(lt));
}
function Es(e) {
  return Ve(e = /* @__PURE__ */ fe(e), "iterate", Un), e;
}
function ft(e, t) {
  return /* @__PURE__ */ It(e) ? un(/* @__PURE__ */ gt(e) ? lt(t) : t) : lt(t);
}
const Yr = {
  __proto__: null,
  [Symbol.iterator]() {
    return qs(this, Symbol.iterator, (e) => ft(this, e));
  },
  concat(...e) {
    return tn(this).concat(
      ...e.map((t) => ee(t) ? tn(t) : t)
    );
  },
  entries() {
    return qs(this, "entries", (e) => (e[1] = ft(this, e[1]), e));
  },
  every(e, t) {
    return yt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return yt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => ft(this, s)),
      arguments
    );
  },
  find(e, t) {
    return yt(
      this,
      "find",
      e,
      t,
      (n) => ft(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return yt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return yt(
      this,
      "findLast",
      e,
      t,
      (n) => ft(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return yt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return yt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Xs(this, "includes", e);
  },
  indexOf(...e) {
    return Xs(this, "indexOf", e);
  },
  join(e) {
    return tn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Xs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return yt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return wn(this, "pop");
  },
  push(...e) {
    return wn(this, "push", e);
  },
  reduce(e, ...t) {
    return Qo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Qo(this, "reduceRight", e, t);
  },
  shift() {
    return wn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return yt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return wn(this, "splice", e);
  },
  toReversed() {
    return tn(this).toReversed();
  },
  toSorted(e) {
    return tn(this).toSorted(e);
  },
  toSpliced(...e) {
    return tn(this).toSpliced(...e);
  },
  unshift(...e) {
    return wn(this, "unshift", e);
  },
  values() {
    return qs(this, "values", (e) => ft(this, e));
  }
};
function qs(e, t, n) {
  const s = Es(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ Je(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = n(i.value)), i;
  }), o;
}
const Jr = Array.prototype;
function yt(e, t, n, s, o, i) {
  const l = Es(e), r = l !== e && !/* @__PURE__ */ Je(e), a = l[t];
  if (a !== Jr[t]) {
    const d = a.apply(e, i);
    return r ? lt(d) : d;
  }
  let u = n;
  l !== e && (r ? u = function(d, f) {
    return n.call(this, ft(e, d), f, e);
  } : n.length > 2 && (u = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const c = a.call(l, u, s);
  return r && o ? o(c) : c;
}
function Qo(e, t, n, s) {
  const o = Es(e), i = o !== e && !/* @__PURE__ */ Je(e);
  let l = n, r = !1;
  o !== e && (i ? (r = s.length === 0, l = function(u, c, d) {
    return r && (r = !1, u = ft(e, u)), n.call(this, u, ft(e, c), d, e);
  }) : n.length > 3 && (l = function(u, c, d) {
    return n.call(this, u, c, d, e);
  }));
  const a = o[t](l, ...s);
  return r ? ft(e, a) : a;
}
function Xs(e, t, n) {
  const s = /* @__PURE__ */ fe(e);
  Ve(s, "iterate", Un);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Ps(n[0]) ? (n[0] = /* @__PURE__ */ fe(n[0]), s[t](...n)) : o;
}
function wn(e, t, n = []) {
  vt(), To();
  const s = (/* @__PURE__ */ fe(e))[t].apply(e, n);
  return Eo(), bt(), s;
}
const Qr = /* @__PURE__ */ Io("__proto__,__v_isRef,__isVue"), gl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qe)
);
function Zr(e) {
  Qe(e) || (e = String(e));
  const t = /* @__PURE__ */ fe(this);
  return Ve(t, "has", e), t.hasOwnProperty(e);
}
class _l {
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
      return s === (o ? i ? ca : wl : i ? yl : bl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = ee(t);
    if (!o) {
      let a;
      if (l && (a = Yr[n]))
        return a;
      if (n === "hasOwnProperty")
        return Zr;
    }
    const r = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ be(t) ? t : s
    );
    if ((Qe(n) ? gl.has(n) : Qr(n)) || (o || Ve(t, "get", n), i))
      return r;
    if (/* @__PURE__ */ be(r)) {
      const a = l && As(n) ? r : r.value;
      return o && he(a) ? /* @__PURE__ */ hs(a) : a;
    }
    return he(r) ? o ? /* @__PURE__ */ hs(r) : /* @__PURE__ */ Zt(r) : r;
  }
}
class vl extends _l {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    const l = ee(t) && As(n);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ It(i);
      if (!/* @__PURE__ */ Je(s) && !/* @__PURE__ */ It(s) && (i = /* @__PURE__ */ fe(i), s = /* @__PURE__ */ fe(s)), !l && /* @__PURE__ */ be(i) && !/* @__PURE__ */ be(s))
        return u || (i.value = s), !0;
    }
    const r = l ? Number(n) < t.length : ge(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ be(t) ? t : o
    );
    return t === /* @__PURE__ */ fe(o) && a && (r ? mt(s, i) && Mt(t, "set", n, s) : Mt(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = ge(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && Mt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Qe(n) || !gl.has(n)) && Ve(t, "has", n), s;
  }
  ownKeys(t) {
    return Ve(
      t,
      "iterate",
      ee(t) ? "length" : Yt
    ), Reflect.ownKeys(t);
  }
}
class ea extends _l {
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
const ta = /* @__PURE__ */ new vl(), na = /* @__PURE__ */ new ea(), sa = /* @__PURE__ */ new vl(!0);
const po = (e) => e, ns = (e) => Reflect.getPrototypeOf(e);
function oa(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = /* @__PURE__ */ fe(o), l = rn(i), r = e === "entries" || e === Symbol.iterator && l, a = e === "keys" && l, u = o[e](...s), c = n ? po : t ? un : lt;
    return !t && Ve(
      i,
      "iterate",
      a ? fo : Yt
    ), Ee(
      // inheriting all iterator properties
      Object.create(u),
      {
        // iterator protocol
        next() {
          const { value: d, done: f } = u.next();
          return f ? { value: d, done: f } : {
            value: r ? [c(d[0]), c(d[1])] : c(d),
            done: f
          };
        }
      }
    );
  };
}
function ss(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ia(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ fe(i), r = /* @__PURE__ */ fe(o);
      e || (mt(o, r) && Ve(l, "get", o), Ve(l, "get", r));
      const { has: a } = ns(l), u = t ? po : e ? un : lt;
      if (a.call(l, o))
        return u(i.get(o));
      if (a.call(l, r))
        return u(i.get(r));
      i !== l && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Ve(/* @__PURE__ */ fe(o), "iterate", Yt), o.size;
    },
    has(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ fe(i), r = /* @__PURE__ */ fe(o);
      return e || (mt(o, r) && Ve(l, "has", o), Ve(l, "has", r)), o === r ? i.has(o) : i.has(o) || i.has(r);
    },
    forEach(o, i) {
      const l = this, r = l.__v_raw, a = /* @__PURE__ */ fe(r), u = t ? po : e ? un : lt;
      return !e && Ve(a, "iterate", Yt), r.forEach((c, d) => o.call(i, u(c), u(d), l));
    }
  };
  return Ee(
    n,
    e ? {
      add: ss("add"),
      set: ss("set"),
      delete: ss("delete"),
      clear: ss("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ fe(this), l = ns(i), r = /* @__PURE__ */ fe(o), a = !t && !/* @__PURE__ */ Je(o) && !/* @__PURE__ */ It(o) ? r : o;
        return l.has.call(i, a) || mt(o, a) && l.has.call(i, o) || mt(r, a) && l.has.call(i, r) || (i.add(a), Mt(i, "add", a, a)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ Je(i) && !/* @__PURE__ */ It(i) && (i = /* @__PURE__ */ fe(i));
        const l = /* @__PURE__ */ fe(this), { has: r, get: a } = ns(l);
        let u = r.call(l, o);
        u || (o = /* @__PURE__ */ fe(o), u = r.call(l, o));
        const c = a.call(l, o);
        return l.set(o, i), u ? mt(i, c) && Mt(l, "set", o, i) : Mt(l, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ fe(this), { has: l, get: r } = ns(i);
        let a = l.call(i, o);
        a || (o = /* @__PURE__ */ fe(o), a = l.call(i, o)), r && r.call(i, o);
        const u = i.delete(o);
        return a && Mt(i, "delete", o, void 0), u;
      },
      clear() {
        const o = /* @__PURE__ */ fe(this), i = o.size !== 0, l = o.clear();
        return i && Mt(
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
    n[o] = oa(o, e, t);
  }), n;
}
function Oo(e, t) {
  const n = ia(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    ge(n, o) && o in s ? n : s,
    o,
    i
  );
}
const la = {
  get: /* @__PURE__ */ Oo(!1, !1)
}, ra = {
  get: /* @__PURE__ */ Oo(!1, !0)
}, aa = {
  get: /* @__PURE__ */ Oo(!0, !1)
};
const bl = /* @__PURE__ */ new WeakMap(), yl = /* @__PURE__ */ new WeakMap(), wl = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ new WeakMap();
function ua(e) {
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
function Zt(e) {
  return /* @__PURE__ */ It(e) ? e : No(
    e,
    !1,
    ta,
    la,
    bl
  );
}
// @__NO_SIDE_EFFECTS__
function da(e) {
  return No(
    e,
    !1,
    sa,
    ra,
    yl
  );
}
// @__NO_SIDE_EFFECTS__
function hs(e) {
  return No(
    e,
    !0,
    na,
    aa,
    wl
  );
}
function No(e, t, n, s, o) {
  if (!he(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const l = ua(Rr(e));
  if (l === 0)
    return e;
  const r = new Proxy(
    e,
    l === 2 ? s : n
  );
  return o.set(e, r), r;
}
// @__NO_SIDE_EFFECTS__
function gt(e) {
  return /* @__PURE__ */ It(e) ? /* @__PURE__ */ gt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function It(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ps(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function fe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ fe(t) : e;
}
function $o(e) {
  return !ge(e, "__v_skip") && Object.isExtensible(e) && tl(e, "__v_skip", !0), e;
}
const lt = (e) => he(e) ? /* @__PURE__ */ Zt(e) : e, un = (e) => he(e) ? /* @__PURE__ */ hs(e) : e;
// @__NO_SIDE_EFFECTS__
function be(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function le(e) {
  return fa(e, !1);
}
function fa(e, t) {
  return /* @__PURE__ */ be(e) ? e : new pa(e, t);
}
class pa {
  constructor(t, n) {
    this.dep = new Ro(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ fe(t), this._value = n ? t : lt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Je(t) || /* @__PURE__ */ It(t);
    t = s ? t : /* @__PURE__ */ fe(t), mt(t, n) && (this._rawValue = t, this._value = s ? t : lt(t), this.dep.trigger());
  }
}
function F(e) {
  return /* @__PURE__ */ be(e) ? e.value : e;
}
const ma = {
  get: (e, t, n) => t === "__v_raw" ? e : F(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ be(o) && !/* @__PURE__ */ be(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function xl(e) {
  return /* @__PURE__ */ gt(e) ? e : new Proxy(e, ma);
}
// @__NO_SIDE_EFFECTS__
function ha(e) {
  const t = ee(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Sl(e, n);
  return t;
}
class ga {
  constructor(t, n, s) {
    this._object = t, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._key = Qe(n) ? n : String(n), this._raw = /* @__PURE__ */ fe(t);
    let o = !0, i = t;
    if (!ee(t) || Qe(this._key) || !As(this._key))
      do
        o = !/* @__PURE__ */ Ps(i) || /* @__PURE__ */ Je(i);
      while (o && (i = i.__v_raw));
    this._shallow = o;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = F(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ be(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ be(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return Xr(this._raw, this._key);
  }
}
class _a {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
// @__NO_SIDE_EFFECTS__
function va(e, t, n) {
  return /* @__PURE__ */ be(e) ? e : re(e) ? new _a(e) : he(e) && arguments.length > 1 ? Sl(e, t, n) : /* @__PURE__ */ le(e);
}
function Sl(e, t, n) {
  return new ga(e, t, n);
}
class ba {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ro(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Hn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Se !== this)
      return ul(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return pl(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function ya(e, t, n = !1) {
  let s, o;
  return re(e) ? s = e : (s = e.get, o = e.set), new ba(s, o, n);
}
const os = {}, gs = /* @__PURE__ */ new WeakMap();
let Wt;
function wa(e, t = !1, n = Wt) {
  if (n) {
    let s = gs.get(n);
    s || gs.set(n, s = []), s.push(e);
  }
}
function xa(e, t, n = we) {
  const { immediate: s, deep: o, once: i, scheduler: l, augmentJob: r, call: a } = n, u = (w) => o ? w : /* @__PURE__ */ Je(w) || o === !1 || o === 0 ? Ft(w, 1) : Ft(w);
  let c, d, f, p, h = !1, g = !1;
  if (/* @__PURE__ */ be(e) ? (d = () => e.value, h = /* @__PURE__ */ Je(e)) : /* @__PURE__ */ gt(e) ? (d = () => u(e), h = !0) : ee(e) ? (g = !0, h = e.some((w) => /* @__PURE__ */ gt(w) || /* @__PURE__ */ Je(w)), d = () => e.map((w) => {
    if (/* @__PURE__ */ be(w))
      return w.value;
    if (/* @__PURE__ */ gt(w))
      return u(w);
    if (re(w))
      return a ? a(w, 2) : w();
  })) : re(e) ? t ? d = a ? () => a(e, 2) : e : d = () => {
    if (f) {
      vt();
      try {
        f();
      } finally {
        bt();
      }
    }
    const w = Wt;
    Wt = c;
    try {
      return a ? a(e, 3, [p]) : e(p);
    } finally {
      Wt = w;
    }
  } : d = ht, t && o) {
    const w = d, D = o === !0 ? 1 / 0 : o;
    d = () => Ft(w(), D);
  }
  const b = rl(), _ = () => {
    c.stop(), b && b.active && Ao(b.effects, c);
  };
  if (i && t) {
    const w = t;
    t = (...D) => {
      const ce = w(...D);
      return _(), ce;
    };
  }
  let y = g ? new Array(e.length).fill(os) : os;
  const A = (w) => {
    if (!(!(c.flags & 1) || !c.dirty && !w))
      if (t) {
        const D = c.run();
        if (w || o || h || (g ? D.some((ce, k) => mt(ce, y[k])) : mt(D, y))) {
          f && f();
          const ce = Wt;
          Wt = c;
          try {
            const k = [
              D,
              // pass undefined as the old value when it's changed for the first time
              y === os ? void 0 : g && y[0] === os ? [] : y,
              p
            ];
            y = D, a ? a(t, 3, k) : (
              // @ts-expect-error
              t(...k)
            );
          } finally {
            Wt = ce;
          }
        }
      } else
        c.run();
  };
  return r && r(A), c = new al(d), c.scheduler = l ? () => l(A, !1) : A, p = (w) => wa(w, !1, c), f = c.onStop = () => {
    const w = gs.get(c);
    if (w) {
      if (a)
        a(w, 4);
      else
        for (const D of w) D();
      gs.delete(c);
    }
  }, t ? s ? A(!0) : y = c.run() : l ? l(A.bind(null, !0), !0) : c.run(), _.pause = c.pause.bind(c), _.resume = c.resume.bind(c), _.stop = _, _;
}
function Ft(e, t = 1 / 0, n) {
  if (t <= 0 || !he(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ be(e))
    Ft(e.value, t, n);
  else if (ee(e))
    for (let s = 0; s < e.length; s++)
      Ft(e[s], t, n);
  else if (Ji(e) || rn(e))
    e.forEach((s) => {
      Ft(s, t, n);
    });
  else if (el(e)) {
    for (const s in e)
      Ft(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ft(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Yn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    Jn(o, t, n);
  }
}
function st(e, t, n, s) {
  if (re(e)) {
    const o = Yn(e, t, n, s);
    return o && Qi(o) && o.catch((i) => {
      Jn(i, t, n);
    }), o;
  }
  if (ee(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(st(e[i], t, n, s));
    return o;
  }
}
function Jn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: l } = t && t.appContext.config || we;
  if (t) {
    let r = t.parent;
    const a = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const c = r.ec;
      if (c) {
        for (let d = 0; d < c.length; d++)
          if (c[d](e, a, u) === !1)
            return;
      }
      r = r.parent;
    }
    if (i) {
      vt(), Yn(i, null, 10, [
        e,
        a,
        u
      ]), bt();
      return;
    }
  }
  Sa(e, n, o, s, l);
}
function Sa(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const We = [];
let dt = -1;
const an = [];
let Pt = null, sn = 0;
const Cl = /* @__PURE__ */ Promise.resolve();
let _s = null;
function Qn(e) {
  const t = _s || Cl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ca(e) {
  let t = dt + 1, n = We.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = We[s], i = jn(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Vo(e) {
  if (!(e.flags & 1)) {
    const t = jn(e), n = We[We.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= jn(n) ? We.push(e) : We.splice(Ca(t), 0, e), e.flags |= 1, Ml();
  }
}
function Ml() {
  _s || (_s = Cl.then(Ll));
}
function Ma(e) {
  ee(e) ? an.push(...e) : Pt && e.id === -1 ? Pt.splice(sn + 1, 0, e) : e.flags & 1 || (an.push(e), e.flags |= 1), Ml();
}
function Zo(e, t, n = dt + 1) {
  for (; n < We.length; n++) {
    const s = We[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      We.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Fl(e) {
  if (an.length) {
    const t = [...new Set(an)].sort(
      (n, s) => jn(n) - jn(s)
    );
    if (an.length = 0, Pt) {
      Pt.push(...t);
      return;
    }
    for (Pt = t, sn = 0; sn < Pt.length; sn++) {
      const n = Pt[sn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Pt = null, sn = 0;
  }
}
const jn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ll(e) {
  try {
    for (dt = 0; dt < We.length; dt++) {
      const t = We[dt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Yn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; dt < We.length; dt++) {
      const t = We[dt];
      t && (t.flags &= -2);
    }
    dt = -1, We.length = 0, Fl(), _s = null, (We.length || an.length) && Ll();
  }
}
let Ne = null, Il = null;
function vs(e) {
  const t = Ne;
  return Ne = e, Il = e && e.type.__scopeId || null, t;
}
function Rs(e, t = Ne, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && ws(-1);
    const i = vs(t);
    let l;
    try {
      l = e(...o);
    } finally {
      vs(i), s._d && ws(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Ke(e, t) {
  if (Ne === null)
    return e;
  const n = Bs(Ne), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, l, r, a = we] = t[o];
    i && (re(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Ft(l), s.push({
      dir: i,
      instance: n,
      value: l,
      oldValue: void 0,
      arg: r,
      modifiers: a
    }));
  }
  return e;
}
function Bt(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let l = 0; l < o.length; l++) {
    const r = o[l];
    i && (r.oldValue = i[l].value);
    let a = r.dir[s];
    a && (vt(), st(a, n, 8, [
      e.el,
      r,
      e,
      t
    ]), bt());
  }
}
function Fa(e, t) {
  if (Oe) {
    let n = Oe.provides;
    const s = Oe.parent && Oe.parent.provides;
    s === n && (n = Oe.provides = Object.create(s)), n[e] = t;
  }
}
function En(e, t, n = !1) {
  const s = Wo();
  if (s || Jt) {
    let o = Jt ? Jt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && re(t) ? t.call(s && s.proxy) : t;
  }
}
function La() {
  return !!(Wo() || Jt);
}
const Ia = /* @__PURE__ */ Symbol.for("v-scx"), Aa = () => En(Ia);
function He(e, t, n) {
  return Al(e, t, n);
}
function Al(e, t, n = we) {
  const { immediate: s, deep: o, flush: i, once: l } = n, r = Ee({}, n), a = t && s || !t && i !== "post";
  let u;
  if (dn) {
    if (i === "sync") {
      const p = Aa();
      u = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!a) {
      const p = () => {
      };
      return p.stop = ht, p.resume = ht, p.pause = ht, p;
    }
  }
  const c = Oe;
  r.call = (p, h, g) => st(p, c, h, g);
  let d = !1;
  i === "post" ? r.scheduler = (p) => {
    je(p, c && c.suspense);
  } : i !== "sync" && (d = !0, r.scheduler = (p, h) => {
    h ? p() : Vo(p);
  }), r.augmentJob = (p) => {
    t && (p.flags |= 4), d && (p.flags |= 2, c && (p.id = c.uid, p.i = c));
  };
  const f = xa(e, t, r);
  return dn && (u ? u.push(f) : a && f()), f;
}
function Da(e, t, n) {
  const s = this.proxy, o = Ce(e) ? e.includes(".") ? Dl(s, e) : () => s[e] : e.bind(s, s);
  let i;
  re(t) ? i = t : (i = t.handler, n = t);
  const l = es(this), r = Al(o, i.bind(s), n);
  return l(), r;
}
function Dl(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const kt = /* @__PURE__ */ new WeakMap(), kl = /* @__PURE__ */ Symbol("_vte"), Tl = (e) => e.__isTeleport, Gt = (e) => e && (e.disabled || e.disabled === ""), ka = (e) => e && (e.defer || e.defer === ""), ei = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ti = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, mo = (e, t) => {
  const n = e && e.to;
  return Ce(n) ? t ? t(n) : null : n;
}, Ta = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, i, l, r, a, u) {
    const {
      mc: c,
      pc: d,
      pbc: f,
      o: { insert: p, querySelector: h, createText: g, createComment: b, parentNode: _ }
    } = u, y = Gt(t.props);
    let { dynamicChildren: A } = t;
    const w = (k, L, M) => {
      k.shapeFlag & 16 && c(
        k.children,
        L,
        M,
        o,
        i,
        l,
        r,
        a
      );
    }, D = (k = t) => {
      const L = Gt(k.props), M = k.target = mo(k.props, h), K = ho(M, k, g, p);
      M && (l !== "svg" && ei(M) ? l = "svg" : l !== "mathml" && ti(M) && (l = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(M), L || (w(k, M, K), Mn(k, !1)));
    }, ce = (k) => {
      const L = () => {
        if (kt.get(k) === L) {
          if (kt.delete(k), Gt(k.props)) {
            const M = _(k.el) || n;
            w(k, M, k.anchor), Mn(k, !0);
          }
          D(k);
        }
      };
      kt.set(k, L), je(L, i);
    };
    if (e == null) {
      const k = t.el = g(""), L = t.anchor = g("");
      if (p(k, n, s), p(L, n, s), ka(t.props) || i && i.pendingBranch) {
        ce(t);
        return;
      }
      y && (w(t, n, L), Mn(t, !0)), D();
    } else {
      t.el = e.el;
      const k = t.anchor = e.anchor, L = kt.get(e);
      if (L) {
        L.flags |= 8, kt.delete(e), ce(t);
        return;
      }
      t.targetStart = e.targetStart;
      const M = t.target = e.target, K = t.targetAnchor = e.targetAnchor, O = Gt(e.props), C = O ? n : M, U = O ? k : K;
      if (l === "svg" || ei(M) ? l = "svg" : (l === "mathml" || ti(M)) && (l = "mathml"), A ? (f(
        e.dynamicChildren,
        A,
        C,
        o,
        i,
        l,
        r
      ), jo(e, t, !0)) : a || d(
        e,
        t,
        C,
        U,
        o,
        i,
        l,
        r,
        !1
      ), y)
        O ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : is(
          t,
          n,
          k,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const X = mo(t.props, h);
        X && (t.target = X, is(
          t,
          X,
          null,
          u,
          0
        ));
      } else O && is(
        t,
        M,
        K,
        u,
        1
      );
      Mn(t, y);
    }
  },
  remove(e, t, n, { um: s, o: { remove: o } }, i) {
    const {
      shapeFlag: l,
      children: r,
      anchor: a,
      targetStart: u,
      targetAnchor: c,
      target: d,
      props: f
    } = e, p = Gt(f), h = i || !p, g = kt.get(e);
    if (g && (g.flags |= 8, kt.delete(e)), d && (o(u), o(c)), i && o(a), !g && (p || d) && l & 16)
      for (let b = 0; b < r.length; b++) {
        const _ = r[b];
        s(
          _,
          t,
          n,
          h,
          !!_.dynamicChildren
        );
      }
  },
  move: is,
  hydrate: Ea
};
function is(e, t, n, { o: { insert: s }, m: o }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: l, anchor: r, shapeFlag: a, children: u, props: c } = e, d = i === 2;
  if (d && s(l, t, n), !kt.has(e) && (!d || Gt(c)) && a & 16)
    for (let f = 0; f < u.length; f++)
      o(
        u[f],
        t,
        n,
        2
      );
  d && s(r, t, n);
}
function Ea(e, t, n, s, o, i, {
  o: { nextSibling: l, parentNode: r, querySelector: a, insert: u, createText: c }
}, d) {
  function f(b, _) {
    let y = _;
    for (; y; ) {
      if (y && y.nodeType === 8) {
        if (y.data === "teleport start anchor")
          t.targetStart = y;
        else if (y.data === "teleport anchor") {
          t.targetAnchor = y, b._lpa = t.targetAnchor && l(t.targetAnchor);
          break;
        }
      }
      y = l(y);
    }
  }
  function p(b, _) {
    _.anchor = d(
      l(b),
      _,
      r(b),
      n,
      s,
      o,
      i
    );
  }
  const h = t.target = mo(
    t.props,
    a
  ), g = Gt(t.props);
  if (h) {
    const b = h._lpa || h.firstChild;
    t.shapeFlag & 16 && (g ? (p(e, t), f(h, b), t.targetAnchor || ho(
      h,
      t,
      c,
      u,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      r(e) === h ? e : null
    )) : (t.anchor = l(e), f(h, b), t.targetAnchor || ho(h, t, c, u), d(
      b && l(b),
      t,
      h,
      n,
      s,
      o,
      i
    ))), Mn(t, g);
  } else g && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = l(e));
  return t.anchor && l(t.anchor);
}
const El = Ta;
function Mn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function ho(e, t, n, s, o = null) {
  const i = t.targetStart = n(""), l = t.targetAnchor = n("");
  return i[kl] = l, e && (s(i, e, o), s(l, e, o)), l;
}
const tt = /* @__PURE__ */ Symbol("_leaveCb"), xn = /* @__PURE__ */ Symbol("_enterCb");
function Pa() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return en(() => {
    e.isMounted = !0;
  }), hn(() => {
    e.isUnmounting = !0;
  }), e;
}
const et = [Function, Array], Pl = {
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
}, Rl = (e) => {
  const t = e.subTree;
  return t.component ? Rl(t.component) : t;
}, Ra = {
  name: "BaseTransition",
  props: Pl,
  setup(e, { slots: t }) {
    const n = Wo(), s = Pa();
    return () => {
      const o = t.default && $l(t.default(), !0), i = o && o.length ? Ol(o) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? ue() : void 0
      );
      if (!i)
        return;
      const l = /* @__PURE__ */ fe(e), { mode: r } = l;
      if (s.isLeaving)
        return Ys(i);
      const a = ni(i);
      if (!a)
        return Ys(i);
      let u = go(
        a,
        l,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => u = d
      );
      a.type !== Be && Wn(a, u);
      let c = n.subTree && ni(n.subTree);
      if (c && c.type !== Be && !Kt(c, a) && Rl(n).type !== Be) {
        let d = go(
          c,
          l,
          s,
          n
        );
        if (Wn(c, d), r === "out-in" && a.type !== Be)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
          }, Ys(i);
        r === "in-out" && a.type !== Be ? d.delayLeave = (f, p, h) => {
          const g = Nl(
            s,
            c
          );
          g[String(c.key)] = c, f[tt] = () => {
            p(), f[tt] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            h(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return i;
    };
  }
};
function Ol(e) {
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
const Oa = Ra;
function Nl(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function go(e, t, n, s, o) {
  const {
    appear: i,
    mode: l,
    persisted: r = !1,
    onBeforeEnter: a,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: d,
    onBeforeLeave: f,
    onLeave: p,
    onAfterLeave: h,
    onLeaveCancelled: g,
    onBeforeAppear: b,
    onAppear: _,
    onAfterAppear: y,
    onAppearCancelled: A
  } = t, w = String(e.key), D = Nl(n, e), ce = (M, K) => {
    M && st(
      M,
      s,
      9,
      K
    );
  }, k = (M, K) => {
    const O = K[1];
    ce(M, K), ee(M) ? M.every((C) => C.length <= 1) && O() : M.length <= 1 && O();
  }, L = {
    mode: l,
    persisted: r,
    beforeEnter(M) {
      let K = a;
      if (!n.isMounted)
        if (i)
          K = b || a;
        else
          return;
      M[tt] && M[tt](
        !0
        /* cancelled */
      );
      const O = D[w];
      O && Kt(e, O) && O.el[tt] && O.el[tt](), ce(K, [M]);
    },
    enter(M) {
      if (D[w] === e) return;
      let K = u, O = c, C = d;
      if (!n.isMounted)
        if (i)
          K = _ || u, O = y || c, C = A || d;
        else
          return;
      let U = !1;
      M[xn] = (N) => {
        U || (U = !0, N ? ce(C, [M]) : ce(O, [M]), L.delayedLeave && L.delayedLeave(), M[xn] = void 0);
      };
      const X = M[xn].bind(null, !1);
      K ? k(K, [M, X]) : X();
    },
    leave(M, K) {
      const O = String(e.key);
      if (M[xn] && M[xn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return K();
      ce(f, [M]);
      let C = !1;
      M[tt] = (X) => {
        C || (C = !0, K(), X ? ce(g, [M]) : ce(h, [M]), M[tt] = void 0, D[O] === e && delete D[O]);
      };
      const U = M[tt].bind(null, !1);
      D[O] = e, p ? k(p, [M, U]) : U();
    },
    clone(M) {
      const K = go(
        M,
        t,
        n,
        s,
        o
      );
      return o && o(K), K;
    }
  };
  return L;
}
function Ys(e) {
  if (Zn(e))
    return e = Ot(e), e.children = null, e;
}
function ni(e) {
  if (!Zn(e))
    return Tl(e.type) && e.children ? Ol(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && re(n.default))
      return n.default();
  }
}
function Wn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Wn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function $l(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let l = e[i];
    const r = n == null ? l.key : String(n) + String(l.key != null ? l.key : i);
    l.type === de ? (l.patchFlag & 128 && o++, s = s.concat(
      $l(l.children, t, r)
    )) : (t || l.type !== Be) && s.push(r != null ? Ot(l, { key: r }) : l);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Me(e, t) {
  return re(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ee({ name: e.name }, t, { setup: e })
  ) : e;
}
function Bo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function si(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const bs = /* @__PURE__ */ new WeakMap();
function Pn(e, t, n, s, o = !1) {
  if (ee(e)) {
    e.forEach(
      (g, b) => Pn(
        g,
        t && (ee(t) ? t[b] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (cn(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Pn(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Bs(s.component) : s.el, l = o ? null : i, { i: r, r: a } = e, u = t && t.r, c = r.refs === we ? r.refs = {} : r.refs, d = r.setupState, f = /* @__PURE__ */ fe(d), p = d === we ? Yi : (g) => si(c, g) ? !1 : ge(f, g), h = (g, b) => !(b && si(c, b));
  if (u != null && u !== a) {
    if (oi(t), Ce(u))
      c[u] = null, p(u) && (d[u] = null);
    else if (/* @__PURE__ */ be(u)) {
      const g = t;
      h(u, g.k) && (u.value = null), g.k && (c[g.k] = null);
    }
  }
  if (re(a)) {
    vt();
    try {
      Yn(a, r, 12, [l, c]);
    } finally {
      bt();
    }
  } else {
    const g = Ce(a), b = /* @__PURE__ */ be(a);
    if (g || b) {
      const _ = () => {
        if (e.f) {
          const y = g ? p(a) ? d[a] : c[a] : h() || !e.k ? a.value : c[e.k];
          if (o)
            ee(y) && Ao(y, i);
          else if (ee(y))
            y.includes(i) || y.push(i);
          else if (g)
            c[a] = [i], p(a) && (d[a] = c[a]);
          else {
            const A = [i];
            h(a, e.k) && (a.value = A), e.k && (c[e.k] = A);
          }
        } else g ? (c[a] = l, p(a) && (d[a] = l)) : b && (h(a, e.k) && (a.value = l), e.k && (c[e.k] = l));
      };
      if (l) {
        const y = () => {
          _(), bs.delete(e);
        };
        y.id = -1, bs.set(e, y), je(y, n);
      } else
        oi(e), _();
    }
  }
}
function oi(e) {
  const t = bs.get(e);
  t && (t.flags |= 8, bs.delete(e));
}
const ii = (e) => e.nodeType === 8;
Ts().requestIdleCallback;
Ts().cancelIdleCallback;
function Na(e, t) {
  if (ii(e) && e.data === "[") {
    let n = 1, s = e.nextSibling;
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1)
          break;
      } else if (ii(s))
        if (s.data === "]") {
          if (--n === 0) break;
        } else s.data === "[" && n++;
      s = s.nextSibling;
    }
  } else
    t(e);
}
const cn = (e) => !!e.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function mn(e) {
  re(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: o = 200,
    hydrate: i,
    timeout: l,
    // undefined = never times out
    suspensible: r = !0,
    onError: a
  } = e;
  let u = null, c, d = 0;
  const f = () => (d++, u = null, p()), p = () => {
    let h;
    return u || (h = u = t().catch((g) => {
      if (g = g instanceof Error ? g : new Error(String(g)), a)
        return new Promise((b, _) => {
          a(g, () => b(f()), () => _(g), d + 1);
        });
      throw g;
    }).then((g) => h !== u && u ? u : (g && (g.__esModule || g[Symbol.toStringTag] === "Module") && (g = g.default), c = g, g)));
  };
  return /* @__PURE__ */ Me({
    name: "AsyncComponentWrapper",
    __asyncLoader: p,
    __asyncHydrate(h, g, b) {
      let _ = !1;
      (g.bu || (g.bu = [])).push(() => _ = !0);
      const y = () => {
        _ || b();
      }, A = i ? () => {
        const w = i(
          y,
          (D) => Na(h, D)
        );
        w && (g.bum || (g.bum = [])).push(w);
      } : y;
      c ? A() : p().then(() => !g.isUnmounted && A());
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const h = Oe;
      if (Bo(h), c)
        return () => ls(c, h);
      const g = (D) => {
        u = null, Jn(
          D,
          h,
          13,
          !s
        );
      };
      if (r && h.suspense || dn)
        return p().then((D) => () => ls(D, h)).catch((D) => (g(D), () => s ? J(s, {
          error: D
        }) : null));
      const b = /* @__PURE__ */ le(!1), _ = /* @__PURE__ */ le(), y = /* @__PURE__ */ le(!!o);
      let A, w;
      return Ns(() => {
        A != null && clearTimeout(A), w != null && clearTimeout(w);
      }), o && (w = setTimeout(() => {
        h.isUnmounted || (y.value = !1);
      }, o)), l != null && (A = setTimeout(() => {
        if (!h.isUnmounted && !b.value && !_.value) {
          const D = new Error(
            `Async component timed out after ${l}ms.`
          );
          g(D), _.value = D;
        }
      }, l)), p().then(() => {
        h.isUnmounted || (b.value = !0, h.parent && Zn(h.parent.vnode) && h.parent.update());
      }).catch((D) => {
        if (h.isUnmounted) {
          u = null;
          return;
        }
        g(D), _.value = D;
      }), () => {
        if (b.value && c)
          return ls(c, h);
        if (_.value && s)
          return J(s, {
            error: _.value
          });
        if (n && !y.value)
          return ls(
            n,
            h
          );
      };
    }
  });
}
function ls(e, t) {
  const { ref: n, props: s, children: o, ce: i } = t.vnode, l = J(e, s, o);
  return l.ref = n, l.ce = i, delete t.vnode.ce, l;
}
const Zn = (e) => e.type.__isKeepAlive;
function $a(e, t) {
  Vl(e, "a", t);
}
function Va(e, t) {
  Vl(e, "da", t);
}
function Vl(e, t, n = Oe) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Os(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Zn(o.parent.vnode) && Ba(s, t, n, o), o = o.parent;
  }
}
function Ba(e, t, n, s) {
  const o = Os(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Ns(() => {
    Ao(s[t], o);
  }, n);
}
function Os(e, t, n = Oe, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...l) => {
      vt();
      const r = es(n), a = st(t, n, e, l);
      return r(), bt(), a;
    });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const At = (e) => (t, n = Oe) => {
  (!dn || e === "sp") && Os(e, (...s) => t(...s), n);
}, Ha = At("bm"), en = At("m"), Ua = At(
  "bu"
), ja = At("u"), hn = At(
  "bum"
), Ns = At("um"), Wa = At(
  "sp"
), za = At("rtg"), Ga = At("rtc");
function Ka(e, t = Oe) {
  Os("ec", e, t);
}
const qa = "components", Bl = /* @__PURE__ */ Symbol.for("v-ndc");
function Xa(e) {
  return Ce(e) ? Ya(qa, e, !1) || e : e || Bl;
}
function Ya(e, t, n = !0, s = !1) {
  const o = Ne || Oe;
  if (o) {
    const i = o.type;
    {
      const r = Rc(
        i,
        !1
      );
      if (r && (r === t || r === Ge(t) || r === ks(Ge(t))))
        return i;
    }
    const l = (
      // local registration
      // check instance[type] first which is resolved for options API
      li(o[e] || i[e], t) || // global registration
      li(o.appContext[e], t)
    );
    return !l && s ? i : l;
  }
}
function li(e, t) {
  return e && (e[t] || e[Ge(t)] || e[ks(Ge(t))]);
}
function ke(e, t, n, s) {
  let o;
  const i = n, l = ee(e);
  if (l || Ce(e)) {
    const r = l && /* @__PURE__ */ gt(e);
    let a = !1, u = !1;
    r && (a = !/* @__PURE__ */ Je(e), u = /* @__PURE__ */ It(e), e = Es(e)), o = new Array(e.length);
    for (let c = 0, d = e.length; c < d; c++)
      o[c] = t(
        a ? u ? un(lt(e[c])) : lt(e[c]) : e[c],
        c,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let r = 0; r < e; r++)
      o[r] = t(r + 1, r, void 0, i);
  } else if (he(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (r, a) => t(r, a, void 0, i)
      );
    else {
      const r = Object.keys(e);
      o = new Array(r.length);
      for (let a = 0, u = r.length; a < u; a++) {
        const c = r[a];
        o[a] = t(e[c], c, a, i);
      }
    }
  else
    o = [];
  return o;
}
function Ja(e, t, n = {}, s, o) {
  if (Ne.ce || Ne.parent && cn(Ne.parent) && Ne.parent.ce) {
    const u = Object.keys(n).length > 0;
    return S(), Ie(
      de,
      null,
      [J("slot", n, s)],
      u ? -2 : 64
    );
  }
  let i = e[t];
  i && i._c && (i._d = !1), S();
  const l = i && Hl(i(n)), r = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  l && l.key, a = Ie(
    de,
    {
      key: (r && !Qe(r) ? r : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!l && s ? "_fb" : "")
    },
    l || [],
    l && e._ === 1 ? 64 : -2
  );
  return i && i._c && (i._d = !0), a;
}
function Hl(e) {
  return e.some((t) => Gn(t) ? !(t.type === Be || t.type === de && !Hl(t.children)) : !0) ? e : null;
}
const _o = (e) => e ? rr(e) ? Bs(e) : _o(e.parent) : null, Rn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ee(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => _o(e.parent),
    $root: (e) => _o(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => jl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Vo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Qn.bind(e.proxy)),
    $watch: (e) => Da.bind(e)
  })
), Js = (e, t) => e !== we && !e.__isScriptSetup && ge(e, t), Qa = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: i, accessCache: l, type: r, appContext: a } = e;
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
        if (Js(s, t))
          return l[t] = 1, s[t];
        if (o !== we && ge(o, t))
          return l[t] = 2, o[t];
        if (ge(i, t))
          return l[t] = 3, i[t];
        if (n !== we && ge(n, t))
          return l[t] = 4, n[t];
        vo && (l[t] = 0);
      }
    }
    const u = Rn[t];
    let c, d;
    if (u)
      return t === "$attrs" && Ve(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (c = r.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== we && ge(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      d = a.config.globalProperties, ge(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return Js(o, t) ? (o[t] = n, !0) : s !== we && ge(s, t) ? (s[t] = n, !0) : ge(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: i, type: l }
  }, r) {
    let a;
    return !!(n[r] || e !== we && r[0] !== "$" && ge(e, r) || Js(t, r) || ge(i, r) || ge(s, r) || ge(Rn, r) || ge(o.config.globalProperties, r) || (a = l.__cssModules) && a[r]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ge(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ri(e) {
  return ee(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let vo = !0;
function Za(e) {
  const t = jl(e), n = e.proxy, s = e.ctx;
  vo = !1, t.beforeCreate && ai(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: l,
    watch: r,
    provide: a,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: d,
    mounted: f,
    beforeUpdate: p,
    updated: h,
    activated: g,
    deactivated: b,
    beforeDestroy: _,
    beforeUnmount: y,
    destroyed: A,
    unmounted: w,
    render: D,
    renderTracked: ce,
    renderTriggered: k,
    errorCaptured: L,
    serverPrefetch: M,
    // public API
    expose: K,
    inheritAttrs: O,
    // assets
    components: C,
    directives: U,
    filters: X
  } = t;
  if (u && ec(u, s, null), l)
    for (const I in l) {
      const V = l[I];
      re(V) && (s[I] = V.bind(n));
    }
  if (o) {
    const I = o.call(n, n);
    he(I) && (e.data = /* @__PURE__ */ Zt(I));
  }
  if (vo = !0, i)
    for (const I in i) {
      const V = i[I], B = re(V) ? V.bind(n, n) : re(V.get) ? V.get.bind(n, n) : ht, Q = !re(V) && re(V.set) ? V.set.bind(n) : ht, ne = Y({
        get: B,
        set: Q
      });
      Object.defineProperty(s, I, {
        enumerable: !0,
        configurable: !0,
        get: () => ne.value,
        set: (_e) => ne.value = _e
      });
    }
  if (r)
    for (const I in r)
      Ul(r[I], s, n, I);
  if (a) {
    const I = re(a) ? a.call(n) : a;
    Reflect.ownKeys(I).forEach((V) => {
      Fa(V, I[V]);
    });
  }
  c && ai(c, e, "c");
  function H(I, V) {
    ee(V) ? V.forEach((B) => I(B.bind(n))) : V && I(V.bind(n));
  }
  if (H(Ha, d), H(en, f), H(Ua, p), H(ja, h), H($a, g), H(Va, b), H(Ka, L), H(Ga, ce), H(za, k), H(hn, y), H(Ns, w), H(Wa, M), ee(K))
    if (K.length) {
      const I = e.exposed || (e.exposed = {});
      K.forEach((V) => {
        Object.defineProperty(I, V, {
          get: () => n[V],
          set: (B) => n[V] = B,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  D && e.render === ht && (e.render = D), O != null && (e.inheritAttrs = O), C && (e.components = C), U && (e.directives = U), M && Bo(e);
}
function ec(e, t, n = ht) {
  ee(e) && (e = bo(e));
  for (const s in e) {
    const o = e[s];
    let i;
    he(o) ? "default" in o ? i = En(
      o.from || s,
      o.default,
      !0
    ) : i = En(o.from || s) : i = En(o), /* @__PURE__ */ be(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[s] = i;
  }
}
function ai(e, t, n) {
  st(
    ee(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ul(e, t, n, s) {
  let o = s.includes(".") ? Dl(n, s) : () => n[s];
  if (Ce(e)) {
    const i = t[e];
    re(i) && He(o, i);
  } else if (re(e))
    He(o, e.bind(n));
  else if (he(e))
    if (ee(e))
      e.forEach((i) => Ul(i, t, n, s));
    else {
      const i = re(e.handler) ? e.handler.bind(n) : t[e.handler];
      re(i) && He(o, i, e);
    }
}
function jl(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, r = i.get(t);
  let a;
  return r ? a = r : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (u) => ys(a, u, l, !0)
  ), ys(a, t, l)), he(t) && i.set(t, a), a;
}
function ys(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && ys(e, i, n, !0), o && o.forEach(
    (l) => ys(e, l, n, !0)
  );
  for (const l in t)
    if (!(s && l === "expose")) {
      const r = tc[l] || n && n[l];
      e[l] = r ? r(e[l], t[l]) : t[l];
    }
  return e;
}
const tc = {
  data: ci,
  props: ui,
  emits: ui,
  // objects
  methods: Fn,
  computed: Fn,
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
  components: Fn,
  directives: Fn,
  // watch
  watch: sc,
  // provide / inject
  provide: ci,
  inject: nc
};
function ci(e, t) {
  return t ? e ? function() {
    return Ee(
      re(e) ? e.call(this, this) : e,
      re(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function nc(e, t) {
  return Fn(bo(e), bo(t));
}
function bo(e) {
  if (ee(e)) {
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
function Fn(e, t) {
  return e ? Ee(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ui(e, t) {
  return e ? ee(e) && ee(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ee(
    /* @__PURE__ */ Object.create(null),
    ri(e),
    ri(t ?? {})
  ) : t;
}
function sc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ee(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Ue(e[s], t[s]);
  return n;
}
function Wl() {
  return {
    app: null,
    config: {
      isNativeTag: Yi,
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
let oc = 0;
function ic(e, t) {
  return function(s, o = null) {
    re(s) || (s = Ee({}, s)), o != null && !he(o) && (o = null);
    const i = Wl(), l = /* @__PURE__ */ new WeakSet(), r = [];
    let a = !1;
    const u = i.app = {
      _uid: oc++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Nc,
      get config() {
        return i.config;
      },
      set config(c) {
      },
      use(c, ...d) {
        return l.has(c) || (c && re(c.install) ? (l.add(c), c.install(u, ...d)) : re(c) && (l.add(c), c(u, ...d))), u;
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
        if (!a) {
          const p = u._ceVNode || J(s, o);
          return p.appContext = i, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(p, c, f), a = !0, u._container = c, c.__vue_app__ = u, Bs(p.component);
        }
      },
      onUnmount(c) {
        r.push(c);
      },
      unmount() {
        a && (st(
          r,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, d) {
        return i.provides[c] = d, u;
      },
      runWithContext(c) {
        const d = Jt;
        Jt = u;
        try {
          return c();
        } finally {
          Jt = d;
        }
      }
    };
    return u;
  };
}
let Jt = null;
const lc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ge(t)}Modifiers`] || e[`${Nt(t)}Modifiers`];
function rc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || we;
  let o = n;
  const i = t.startsWith("update:"), l = i && lc(s, t.slice(7));
  l && (l.trim && (o = n.map((c) => Ce(c) ? c.trim() : c)), l.number && (o = n.map(Do)));
  let r, a = s[r = zs(t)] || // also try camelCase event handler (#2249)
  s[r = zs(Ge(t))];
  !a && i && (a = s[r = zs(Nt(t))]), a && st(
    a,
    e,
    6,
    o
  );
  const u = s[r + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[r])
      return;
    e.emitted[r] = !0, st(
      u,
      e,
      6,
      o
    );
  }
}
const ac = /* @__PURE__ */ new WeakMap();
function zl(e, t, n = !1) {
  const s = n ? ac : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let l = {}, r = !1;
  if (!re(e)) {
    const a = (u) => {
      const c = zl(u, t, !0);
      c && (r = !0, Ee(l, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !r ? (he(e) && s.set(e, null), null) : (ee(i) ? i.forEach((a) => l[a] = null) : Ee(l, i), he(e) && s.set(e, l), l);
}
function $s(e, t) {
  return !e || !Ls(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ge(e, t[0].toLowerCase() + t.slice(1)) || ge(e, Nt(t)) || ge(e, t));
}
function di(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [i],
    slots: l,
    attrs: r,
    emit: a,
    render: u,
    renderCache: c,
    props: d,
    data: f,
    setupState: p,
    ctx: h,
    inheritAttrs: g
  } = e, b = vs(e);
  let _, y;
  try {
    if (n.shapeFlag & 4) {
      const w = o || s, D = w;
      _ = pt(
        u.call(
          D,
          w,
          c,
          d,
          p,
          f,
          h
        )
      ), y = r;
    } else {
      const w = t;
      _ = pt(
        w.length > 1 ? w(
          d,
          { attrs: r, slots: l, emit: a }
        ) : w(
          d,
          null
        )
      ), y = t.props ? r : cc(r);
    }
  } catch (w) {
    On.length = 0, Jn(w, e, 1), _ = J(Be);
  }
  let A = _;
  if (y && g !== !1) {
    const w = Object.keys(y), { shapeFlag: D } = A;
    w.length && D & 7 && (i && w.some(Is) && (y = uc(
      y,
      i
    )), A = Ot(A, y, !1, !0));
  }
  return n.dirs && (A = Ot(A, null, !1, !0), A.dirs = A.dirs ? A.dirs.concat(n.dirs) : n.dirs), n.transition && Wn(A, n.transition), _ = A, vs(b), _;
}
const cc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ls(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, uc = (e, t) => {
  const n = {};
  for (const s in e)
    (!Is(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function dc(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: l, children: r, patchFlag: a } = t, u = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? fi(s, l, u) : !!l;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (Gl(l, s, f) && !$s(u, f))
          return !0;
      }
    }
  } else
    return (o || r) && (!r || !r.$stable) ? !0 : s === l ? !1 : s ? l ? fi(s, l, u) : !0 : !!l;
  return !1;
}
function fi(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (Gl(t, e, i) && !$s(n, i))
      return !0;
  }
  return !1;
}
function Gl(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && he(s) && he(o) ? !ko(s, o) : s !== o;
}
function fc({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = s, e = o), o === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Kl = {}, ql = () => Object.create(Kl), Xl = (e) => Object.getPrototypeOf(e) === Kl;
function pc(e, t, n, s = !1) {
  const o = {}, i = ql();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Yl(e, t, o, i);
  for (const l in e.propsOptions[0])
    l in o || (o[l] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ da(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function mc(e, t, n, s) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: l }
  } = e, r = /* @__PURE__ */ fe(o), [a] = e.propsOptions;
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
        if ($s(e.emitsOptions, f))
          continue;
        const p = t[f];
        if (a)
          if (ge(i, f))
            p !== i[f] && (i[f] = p, u = !0);
          else {
            const h = Ge(f);
            o[h] = yo(
              a,
              r,
              h,
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
    Yl(e, t, o, i) && (u = !0);
    let c;
    for (const d in r)
      (!t || // for camelCase
      !ge(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Nt(d)) === d || !ge(t, c))) && (a ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (o[d] = yo(
        a,
        r,
        d,
        void 0,
        e,
        !0
      )) : delete o[d]);
    if (i !== r)
      for (const d in i)
        (!t || !ge(t, d)) && (delete i[d], u = !0);
  }
  u && Mt(e.attrs, "set", "");
}
function Yl(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let l = !1, r;
  if (t)
    for (let a in t) {
      if (Dn(a))
        continue;
      const u = t[a];
      let c;
      o && ge(o, c = Ge(a)) ? !i || !i.includes(c) ? n[c] = u : (r || (r = {}))[c] = u : $s(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, l = !0);
    }
  if (i) {
    const a = /* @__PURE__ */ fe(n), u = r || we;
    for (let c = 0; c < i.length; c++) {
      const d = i[c];
      n[d] = yo(
        o,
        a,
        d,
        u[d],
        e,
        !ge(u, d)
      );
    }
  }
  return l;
}
function yo(e, t, n, s, o, i) {
  const l = e[n];
  if (l != null) {
    const r = ge(l, "default");
    if (r && s === void 0) {
      const a = l.default;
      if (l.type !== Function && !l.skipFactory && re(a)) {
        const { propsDefaults: u } = o;
        if (n in u)
          s = u[n];
        else {
          const c = es(o);
          s = u[n] = a.call(
            null,
            t
          ), c();
        }
      } else
        s = a;
      o.ce && o.ce._setProp(n, s);
    }
    l[
      0
      /* shouldCast */
    ] && (i && !r ? s = !1 : l[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Nt(n)) && (s = !0));
  }
  return s;
}
const hc = /* @__PURE__ */ new WeakMap();
function Jl(e, t, n = !1) {
  const s = n ? hc : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, l = {}, r = [];
  let a = !1;
  if (!re(e)) {
    const c = (d) => {
      a = !0;
      const [f, p] = Jl(d, t, !0);
      Ee(l, f), p && r.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !a)
    return he(e) && s.set(e, ln), ln;
  if (ee(i))
    for (let c = 0; c < i.length; c++) {
      const d = Ge(i[c]);
      pi(d) && (l[d] = we);
    }
  else if (i)
    for (const c in i) {
      const d = Ge(c);
      if (pi(d)) {
        const f = i[c], p = l[d] = ee(f) || re(f) ? { type: f } : Ee({}, f), h = p.type;
        let g = !1, b = !0;
        if (ee(h))
          for (let _ = 0; _ < h.length; ++_) {
            const y = h[_], A = re(y) && y.name;
            if (A === "Boolean") {
              g = !0;
              break;
            } else A === "String" && (b = !1);
          }
        else
          g = re(h) && h.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = g, p[
          1
          /* shouldCastTrue */
        ] = b, (g || ge(p, "default")) && r.push(d);
      }
    }
  const u = [l, r];
  return he(e) && s.set(e, u), u;
}
function pi(e) {
  return e[0] !== "$" && !Dn(e);
}
const Ho = (e) => e === "_" || e === "_ctx" || e === "$stable", Uo = (e) => ee(e) ? e.map(pt) : [pt(e)], gc = (e, t, n) => {
  if (t._n)
    return t;
  const s = Rs((...o) => Uo(t(...o)), n);
  return s._c = !1, s;
}, Ql = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Ho(o)) continue;
    const i = e[o];
    if (re(i))
      t[o] = gc(o, i, s);
    else if (i != null) {
      const l = Uo(i);
      t[o] = () => l;
    }
  }
}, Zl = (e, t) => {
  const n = Uo(t);
  e.slots.default = () => n;
}, er = (e, t, n) => {
  for (const s in t)
    (n || !Ho(s)) && (e[s] = t[s]);
}, _c = (e, t, n) => {
  const s = e.slots = ql();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (er(s, t, n), n && tl(s, "_", o, !0)) : Ql(t, s);
  } else t && Zl(e, t);
}, vc = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, l = we;
  if (s.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? i = !1 : er(o, t, n) : (i = !t.$stable, Ql(t, o)), l = t;
  } else t && (Zl(e, t), l = { default: 1 });
  if (i)
    for (const r in o)
      !Ho(r) && l[r] == null && delete o[r];
}, je = Sc;
function bc(e) {
  return yc(e);
}
function yc(e, t) {
  const n = Ts();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: o,
    patchProp: i,
    createElement: l,
    createText: r,
    createComment: a,
    setText: u,
    setElementText: c,
    parentNode: d,
    nextSibling: f,
    setScopeId: p = ht,
    insertStaticContent: h
  } = e, g = (m, v, x, $ = null, P = null, T = null, G = void 0, z = null, W = !!v.dynamicChildren) => {
    if (m === v)
      return;
    m && !Kt(m, v) && ($ = Vt(m), _e(m, P, T, !0), m = null), v.patchFlag === -2 && (W = !1, v.dynamicChildren = null);
    const { type: E, ref: te, shapeFlag: q } = v;
    switch (E) {
      case Vs:
        b(m, v, x, $);
        break;
      case Be:
        _(m, v, x, $);
        break;
      case Zs:
        m == null && y(v, x, $, G);
        break;
      case de:
        C(
          m,
          v,
          x,
          $,
          P,
          T,
          G,
          z,
          W
        );
        break;
      default:
        q & 1 ? D(
          m,
          v,
          x,
          $,
          P,
          T,
          G,
          z,
          W
        ) : q & 6 ? U(
          m,
          v,
          x,
          $,
          P,
          T,
          G,
          z,
          W
        ) : (q & 64 || q & 128) && E.process(
          m,
          v,
          x,
          $,
          P,
          T,
          G,
          z,
          W,
          Pe
        );
    }
    te != null && P ? Pn(te, m && m.ref, T, v || m, !v) : te == null && m && m.ref != null && Pn(m.ref, null, T, m, !0);
  }, b = (m, v, x, $) => {
    if (m == null)
      s(
        v.el = r(v.children),
        x,
        $
      );
    else {
      const P = v.el = m.el;
      v.children !== m.children && u(P, v.children);
    }
  }, _ = (m, v, x, $) => {
    m == null ? s(
      v.el = a(v.children || ""),
      x,
      $
    ) : v.el = m.el;
  }, y = (m, v, x, $) => {
    [m.el, m.anchor] = h(
      m.children,
      v,
      x,
      $,
      m.el,
      m.anchor
    );
  }, A = ({ el: m, anchor: v }, x, $) => {
    let P;
    for (; m && m !== v; )
      P = f(m), s(m, x, $), m = P;
    s(v, x, $);
  }, w = ({ el: m, anchor: v }) => {
    let x;
    for (; m && m !== v; )
      x = f(m), o(m), m = x;
    o(v);
  }, D = (m, v, x, $, P, T, G, z, W) => {
    if (v.type === "svg" ? G = "svg" : v.type === "math" && (G = "mathml"), m == null)
      ce(
        v,
        x,
        $,
        P,
        T,
        G,
        z,
        W
      );
    else {
      const E = m.el && m.el._isVueCE ? m.el : null;
      try {
        E && E._beginPatch(), M(
          m,
          v,
          P,
          T,
          G,
          z,
          W
        );
      } finally {
        E && E._endPatch();
      }
    }
  }, ce = (m, v, x, $, P, T, G, z) => {
    let W, E;
    const { props: te, shapeFlag: q, transition: Z, dirs: ie } = m;
    if (W = m.el = l(
      m.type,
      T,
      te && te.is,
      te
    ), q & 8 ? c(W, m.children) : q & 16 && L(
      m.children,
      W,
      null,
      $,
      P,
      Qs(m, T),
      G,
      z
    ), ie && Bt(m, null, $, "created"), k(W, m, m.scopeId, G, $), te) {
      for (const ye in te)
        ye !== "value" && !Dn(ye) && i(W, ye, null, te[ye], T, $);
      "value" in te && i(W, "value", null, te.value, T), (E = te.onVnodeBeforeMount) && ut(E, $, m);
    }
    ie && Bt(m, null, $, "beforeMount");
    const pe = wc(P, Z);
    pe && Z.beforeEnter(W), s(W, v, x), ((E = te && te.onVnodeMounted) || pe || ie) && je(() => {
      try {
        E && ut(E, $, m), pe && Z.enter(W), ie && Bt(m, null, $, "mounted");
      } finally {
      }
    }, P);
  }, k = (m, v, x, $, P) => {
    if (x && p(m, x), $)
      for (let T = 0; T < $.length; T++)
        p(m, $[T]);
    if (P) {
      let T = P.subTree;
      if (v === T || sr(T.type) && (T.ssContent === v || T.ssFallback === v)) {
        const G = P.vnode;
        k(
          m,
          G,
          G.scopeId,
          G.slotScopeIds,
          P.parent
        );
      }
    }
  }, L = (m, v, x, $, P, T, G, z, W = 0) => {
    for (let E = W; E < m.length; E++) {
      const te = m[E] = z ? St(m[E]) : pt(m[E]);
      g(
        null,
        te,
        v,
        x,
        $,
        P,
        T,
        G,
        z
      );
    }
  }, M = (m, v, x, $, P, T, G) => {
    const z = v.el = m.el;
    let { patchFlag: W, dynamicChildren: E, dirs: te } = v;
    W |= m.patchFlag & 16;
    const q = m.props || we, Z = v.props || we;
    let ie;
    if (x && Ht(x, !1), (ie = Z.onVnodeBeforeUpdate) && ut(ie, x, v, m), te && Bt(v, m, x, "beforeUpdate"), x && Ht(x, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    E && (!m.dynamicChildren || m.dynamicChildren.length !== E.length) && (W = 0, G = !1, E = null), (q.innerHTML && Z.innerHTML == null || q.textContent && Z.textContent == null) && c(z, ""), E ? K(
      m.dynamicChildren,
      E,
      z,
      x,
      $,
      Qs(v, P),
      T
    ) : G || V(
      m,
      v,
      z,
      null,
      x,
      $,
      Qs(v, P),
      T,
      !1
    ), W > 0) {
      if (W & 16)
        O(z, q, Z, x, P);
      else if (W & 2 && q.class !== Z.class && i(z, "class", null, Z.class, P), W & 4 && i(z, "style", q.style, Z.style, P), W & 8) {
        const pe = v.dynamicProps;
        for (let ye = 0; ye < pe.length; ye++) {
          const ve = pe[ye], De = q[ve], Re = Z[ve];
          (Re !== De || ve === "value") && i(z, ve, De, Re, P, x);
        }
      }
      W & 1 && m.children !== v.children && c(z, v.children);
    } else !G && E == null && O(z, q, Z, x, P);
    ((ie = Z.onVnodeUpdated) || te) && je(() => {
      ie && ut(ie, x, v, m), te && Bt(v, m, x, "updated");
    }, $);
  }, K = (m, v, x, $, P, T, G) => {
    for (let z = 0; z < v.length; z++) {
      const W = m[z], E = v[z], te = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        W.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (W.type === de || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Kt(W, E) || // - In the case of a component, it could contain anything.
        W.shapeFlag & 198) ? d(W.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          x
        )
      );
      g(
        W,
        E,
        te,
        null,
        $,
        P,
        T,
        G,
        !0
      );
    }
  }, O = (m, v, x, $, P) => {
    if (v !== x) {
      if (v !== we)
        for (const T in v)
          !Dn(T) && !(T in x) && i(
            m,
            T,
            v[T],
            null,
            P,
            $
          );
      for (const T in x) {
        if (Dn(T)) continue;
        const G = x[T], z = v[T];
        G !== z && T !== "value" && i(m, T, z, G, P, $);
      }
      "value" in x && i(m, "value", v.value, x.value, P);
    }
  }, C = (m, v, x, $, P, T, G, z, W) => {
    const E = v.el = m ? m.el : r(""), te = v.anchor = m ? m.anchor : r("");
    let { patchFlag: q, dynamicChildren: Z, slotScopeIds: ie } = v;
    ie && (z = z ? z.concat(ie) : ie), m == null ? (s(E, x, $), s(te, x, $), L(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      v.children || [],
      x,
      te,
      P,
      T,
      G,
      z,
      W
    )) : q > 0 && q & 64 && Z && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren && m.dynamicChildren.length === Z.length ? (K(
      m.dynamicChildren,
      Z,
      x,
      P,
      T,
      G,
      z
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (v.key != null || P && v === P.subTree) && jo(
      m,
      v,
      !0
      /* shallow */
    )) : V(
      m,
      v,
      x,
      te,
      P,
      T,
      G,
      z,
      W
    );
  }, U = (m, v, x, $, P, T, G, z, W) => {
    v.slotScopeIds = z, m == null ? v.shapeFlag & 512 ? P.ctx.activate(
      v,
      x,
      $,
      G,
      W
    ) : X(
      v,
      x,
      $,
      P,
      T,
      G,
      W
    ) : N(m, v, W);
  }, X = (m, v, x, $, P, T, G) => {
    const z = m.component = Dc(
      m,
      $,
      P
    );
    if (Zn(m) && (z.ctx.renderer = Pe), kc(z, !1, G), z.asyncDep) {
      if (P && P.registerDep(z, H, G), !m.el) {
        const W = z.subTree = J(Be);
        _(null, W, v, x), m.placeholder = W.el;
      }
    } else
      H(
        z,
        m,
        v,
        x,
        P,
        T,
        G
      );
  }, N = (m, v, x) => {
    const $ = v.component = m.component;
    if (dc(m, v, x))
      if ($.asyncDep && !$.asyncResolved) {
        I($, v, x);
        return;
      } else
        $.next = v, $.update();
    else
      v.el = m.el, $.vnode = v;
  }, H = (m, v, x, $, P, T, G) => {
    const z = () => {
      if (m.isMounted) {
        let { next: q, bu: Z, u: ie, parent: pe, vnode: ye } = m;
        {
          const at = tr(m);
          if (at) {
            q && (q.el = ye.el, I(m, q, G)), at.asyncDep.then(() => {
              je(() => {
                m.isUnmounted || E();
              }, P);
            });
            return;
          }
        }
        let ve = q, De;
        Ht(m, !1), q ? (q.el = ye.el, I(m, q, G)) : q = ye, Z && us(Z), (De = q.props && q.props.onVnodeBeforeUpdate) && ut(De, pe, q, ye), Ht(m, !0);
        const Re = di(m), rt = m.subTree;
        m.subTree = Re, g(
          rt,
          Re,
          // parent may have changed if it's in a teleport
          d(rt.el),
          // anchor may have changed if it's in a fragment
          Vt(rt),
          m,
          P,
          T
        ), q.el = Re.el, ve === null && fc(m, Re.el), ie && je(ie, P), (De = q.props && q.props.onVnodeUpdated) && je(
          () => ut(De, pe, q, ye),
          P
        );
      } else {
        let q;
        const { el: Z, props: ie } = v, { bm: pe, m: ye, parent: ve, root: De, type: Re } = m, rt = cn(v);
        Ht(m, !1), pe && us(pe), !rt && (q = ie && ie.onVnodeBeforeMount) && ut(q, ve, v), Ht(m, !0);
        {
          De.ce && De.ce._hasShadowRoot() && De.ce._injectChildStyle(
            Re,
            m.parent ? m.parent.type : void 0
          );
          const at = m.subTree = di(m);
          g(
            null,
            at,
            x,
            $,
            m,
            P,
            T
          ), v.el = at.el;
        }
        if (ye && je(ye, P), !rt && (q = ie && ie.onVnodeMounted)) {
          const at = v;
          je(
            () => ut(q, ve, at),
            P
          );
        }
        (v.shapeFlag & 256 || ve && cn(ve.vnode) && ve.vnode.shapeFlag & 256) && m.a && je(m.a, P), m.isMounted = !0, v = x = $ = null;
      }
    };
    m.scope.on();
    const W = m.effect = new al(z);
    m.scope.off();
    const E = m.update = W.run.bind(W), te = m.job = W.runIfDirty.bind(W);
    te.i = m, te.id = m.uid, W.scheduler = () => Vo(te), Ht(m, !0), E();
  }, I = (m, v, x) => {
    v.component = m;
    const $ = m.vnode.props;
    m.vnode = v, m.next = null, mc(m, v.props, $, x), vc(m, v.children, x), vt(), Zo(m), bt();
  }, V = (m, v, x, $, P, T, G, z, W = !1) => {
    const E = m && m.children, te = m ? m.shapeFlag : 0, q = v.children, { patchFlag: Z, shapeFlag: ie } = v;
    if (Z > 0) {
      if (Z & 128) {
        Q(
          E,
          q,
          x,
          $,
          P,
          T,
          G,
          z,
          W
        );
        return;
      } else if (Z & 256) {
        B(
          E,
          q,
          x,
          $,
          P,
          T,
          G,
          z,
          W
        );
        return;
      }
    }
    ie & 8 ? (te & 16 && Ae(E, P, T), q !== E && c(x, q)) : te & 16 ? ie & 16 ? Q(
      E,
      q,
      x,
      $,
      P,
      T,
      G,
      z,
      W
    ) : Ae(E, P, T, !0) : (te & 8 && c(x, ""), ie & 16 && L(
      q,
      x,
      $,
      P,
      T,
      G,
      z,
      W
    ));
  }, B = (m, v, x, $, P, T, G, z, W) => {
    m = m || ln, v = v || ln;
    const E = m.length, te = v.length, q = Math.min(E, te);
    let Z;
    for (Z = 0; Z < q; Z++) {
      const ie = v[Z] = W ? St(v[Z]) : pt(v[Z]);
      g(
        m[Z],
        ie,
        x,
        null,
        P,
        T,
        G,
        z,
        W
      );
    }
    E > te ? Ae(
      m,
      P,
      T,
      !0,
      !1,
      q
    ) : L(
      v,
      x,
      $,
      P,
      T,
      G,
      z,
      W,
      q
    );
  }, Q = (m, v, x, $, P, T, G, z, W) => {
    let E = 0;
    const te = v.length;
    let q = m.length - 1, Z = te - 1;
    for (; E <= q && E <= Z; ) {
      const ie = m[E], pe = v[E] = W ? St(v[E]) : pt(v[E]);
      if (Kt(ie, pe))
        g(
          ie,
          pe,
          x,
          null,
          P,
          T,
          G,
          z,
          W
        );
      else
        break;
      E++;
    }
    for (; E <= q && E <= Z; ) {
      const ie = m[q], pe = v[Z] = W ? St(v[Z]) : pt(v[Z]);
      if (Kt(ie, pe))
        g(
          ie,
          pe,
          x,
          null,
          P,
          T,
          G,
          z,
          W
        );
      else
        break;
      q--, Z--;
    }
    if (E > q) {
      if (E <= Z) {
        const ie = Z + 1, pe = ie < te ? v[ie].el : $;
        for (; E <= Z; )
          g(
            null,
            v[E] = W ? St(v[E]) : pt(v[E]),
            x,
            pe,
            P,
            T,
            G,
            z,
            W
          ), E++;
      }
    } else if (E > Z)
      for (; E <= q; )
        _e(m[E], P, T, !0), E++;
    else {
      const ie = E, pe = E, ye = /* @__PURE__ */ new Map();
      for (E = pe; E <= Z; E++) {
        const Xe = v[E] = W ? St(v[E]) : pt(v[E]);
        Xe.key != null && ye.set(Xe.key, E);
      }
      let ve, De = 0;
      const Re = Z - pe + 1;
      let rt = !1, at = 0;
      const yn = new Array(Re);
      for (E = 0; E < Re; E++) yn[E] = 0;
      for (E = ie; E <= q; E++) {
        const Xe = m[E];
        if (De >= Re) {
          _e(Xe, P, T, !0);
          continue;
        }
        let ct;
        if (Xe.key != null)
          ct = ye.get(Xe.key);
        else
          for (ve = pe; ve <= Z; ve++)
            if (yn[ve - pe] === 0 && Kt(Xe, v[ve])) {
              ct = ve;
              break;
            }
        ct === void 0 ? _e(Xe, P, T, !0) : (yn[ct - pe] = E + 1, ct >= at ? at = ct : rt = !0, g(
          Xe,
          v[ct],
          x,
          null,
          P,
          T,
          G,
          z,
          W
        ), De++);
      }
      const Go = rt ? xc(yn) : ln;
      for (ve = Go.length - 1, E = Re - 1; E >= 0; E--) {
        const Xe = pe + E, ct = v[Xe], Ko = v[Xe + 1], qo = Xe + 1 < te ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ko.el || nr(Ko)
        ) : $;
        yn[E] === 0 ? g(
          null,
          ct,
          x,
          qo,
          P,
          T,
          G,
          z,
          W
        ) : rt && (ve < 0 || E !== Go[ve] ? ne(ct, x, qo, 2) : ve--);
      }
    }
  }, ne = (m, v, x, $, P = null) => {
    const { el: T, type: G, transition: z, children: W, shapeFlag: E } = m;
    if (E & 6) {
      ne(m.component.subTree, v, x, $);
      return;
    }
    if (E & 128) {
      m.suspense.move(v, x, $);
      return;
    }
    if (E & 64) {
      G.move(m, v, x, Pe);
      return;
    }
    if (G === de) {
      s(T, v, x);
      for (let q = 0; q < W.length; q++)
        ne(W[q], v, x, $);
      s(m.anchor, v, x);
      return;
    }
    if (G === Zs) {
      A(m, v, x);
      return;
    }
    if ($ !== 2 && E & 1 && z)
      if ($ === 0)
        z.persisted && !T[tt] ? s(T, v, x) : (z.beforeEnter(T), s(T, v, x), je(() => z.enter(T), P));
      else {
        const { leave: q, delayLeave: Z, afterLeave: ie } = z, pe = () => {
          m.ctx.isUnmounted ? o(T) : s(T, v, x);
        }, ye = () => {
          const ve = T._isLeaving || !!T[tt];
          T._isLeaving && T[tt](
            !0
            /* cancelled */
          ), z.persisted && !ve ? pe() : q(T, () => {
            pe(), ie && ie();
          });
        };
        Z ? Z(T, pe, ye) : ye();
      }
    else
      s(T, v, x);
  }, _e = (m, v, x, $ = !1, P = !1) => {
    const {
      type: T,
      props: G,
      ref: z,
      children: W,
      dynamicChildren: E,
      shapeFlag: te,
      patchFlag: q,
      dirs: Z,
      cacheIndex: ie,
      memo: pe
    } = m;
    if (q === -2 && (P = !1), z != null && (vt(), Pn(z, null, x, m, !0), bt()), ie != null && (v.renderCache[ie] = void 0), te & 256) {
      v.ctx.deactivate(m);
      return;
    }
    const ye = te & 1 && Z, ve = !cn(m);
    let De;
    if (ve && (De = G && G.onVnodeBeforeUnmount) && ut(De, v, m), te & 6)
      $e(m.component, x, $);
    else {
      if (te & 128) {
        m.suspense.unmount(x, $);
        return;
      }
      ye && Bt(m, null, v, "beforeUnmount"), te & 64 ? m.type.remove(
        m,
        v,
        x,
        Pe,
        $
      ) : E && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !E.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (T !== de || q > 0 && q & 64) ? Ae(
        E,
        v,
        x,
        !1,
        !0
      ) : (T === de && q & 384 || !P && te & 16) && Ae(W, v, x), $ && Ze(m);
    }
    const Re = pe != null && ie == null;
    (ve && (De = G && G.onVnodeUnmounted) || ye || Re) && je(() => {
      De && ut(De, v, m), ye && Bt(m, null, v, "unmounted"), Re && (m.el = null);
    }, x);
  }, Ze = (m) => {
    const { type: v, el: x, anchor: $, transition: P } = m;
    if (v === de) {
      oe(x, $);
      return;
    }
    if (v === Zs) {
      w(m);
      return;
    }
    const T = () => {
      o(x), P && !P.persisted && P.afterLeave && P.afterLeave();
    };
    if (m.shapeFlag & 1 && P && !P.persisted) {
      const { leave: G, delayLeave: z } = P, W = () => G(x, T);
      z ? z(m.el, T, W) : W();
    } else
      T();
  }, oe = (m, v) => {
    let x;
    for (; m !== v; )
      x = f(m), o(m), m = x;
    o(v);
  }, $e = (m, v, x) => {
    const { bum: $, scope: P, job: T, subTree: G, um: z, m: W, a: E } = m;
    mi(W), mi(E), $ && us($), P.stop(), T && (T.flags |= 8, _e(G, m, v, x)), z && je(z, v), je(() => {
      m.isUnmounted = !0;
    }, v);
  }, Ae = (m, v, x, $ = !1, P = !1, T = 0) => {
    for (let G = T; G < m.length; G++)
      _e(m[G], v, x, $, P);
  }, Vt = (m) => {
    if (m.shapeFlag & 6)
      return Vt(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const v = f(m.anchor || m.el), x = v && v[kl];
    return x ? f(x) : v;
  };
  let ae = !1;
  const qe = (m, v, x) => {
    let $;
    m == null ? v._vnode && (_e(v._vnode, null, null, !0), $ = v._vnode.component) : g(
      v._vnode || null,
      m,
      v,
      null,
      null,
      null,
      x
    ), v._vnode = m, ae || (ae = !0, Zo($), Fl(), ae = !1);
  }, Pe = {
    p: g,
    um: _e,
    m: ne,
    r: Ze,
    mt: X,
    mc: L,
    pc: V,
    pbc: K,
    n: Vt,
    o: e
  };
  return {
    render: qe,
    hydrate: void 0,
    createApp: ic(qe)
  };
}
function Qs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ht({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function wc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function jo(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (ee(s) && ee(o))
    for (let i = 0; i < s.length; i++) {
      const l = s[i];
      let r = o[i];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = o[i] = St(o[i]), r.el = l.el), !n && r.patchFlag !== -2 && jo(l, r)), r.type === Vs && (r.patchFlag === -1 && (r = o[i] = St(r)), r.el = l.el), r.type === Be && !r.el && (r.el = l.el);
    }
}
function xc(e) {
  const t = e.slice(), n = [0];
  let s, o, i, l, r;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const u = e[s];
    if (u !== 0) {
      if (o = n[n.length - 1], e[o] < u) {
        t[s] = o, n.push(s);
        continue;
      }
      for (i = 0, l = n.length - 1; i < l; )
        r = i + l >> 1, e[n[r]] < u ? i = r + 1 : l = r;
      u < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, l = n[i - 1]; i-- > 0; )
    n[i] = l, l = t[l];
  return n;
}
function tr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : tr(t);
}
function mi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function nr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? nr(t.subTree) : null;
}
const sr = (e) => e.__isSuspense;
function Sc(e, t) {
  t && t.pendingBranch ? ee(e) ? t.effects.push(...e) : t.effects.push(e) : Ma(e);
}
const de = /* @__PURE__ */ Symbol.for("v-fgt"), Vs = /* @__PURE__ */ Symbol.for("v-txt"), Be = /* @__PURE__ */ Symbol.for("v-cmt"), Zs = /* @__PURE__ */ Symbol.for("v-stc"), On = [];
let Ye = null;
function S(e = !1) {
  On.push(Ye = e ? null : []);
}
function Cc() {
  On.pop(), Ye = On[On.length - 1] || null;
}
let zn = 1;
function ws(e, t = !1) {
  zn += e, e < 0 && Ye && t && (Ye.hasOnce = !0);
}
function or(e) {
  return e.dynamicChildren = zn > 0 ? Ye || ln : null, Cc(), zn > 0 && Ye && Ye.push(e), e;
}
function R(e, t, n, s, o, i) {
  return or(
    j(
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
  return or(
    J(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function Gn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Kt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ir = ({ key: e }) => e ?? null, ds = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ce(e) || /* @__PURE__ */ be(e) || re(e) ? { i: Ne, r: e, k: t, f: !!n } : e : null);
function j(e, t = null, n = null, s = 0, o = null, i = e === de ? 0 : 1, l = !1, r = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ir(t),
    ref: t && ds(t),
    scopeId: Il,
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
  return r ? (xs(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= Ce(n) ? 8 : 16), zn > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  Ye && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ye.push(a), a;
}
const J = Mc;
function Mc(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === Bl) && (e = Be), Gn(e)) {
    const r = Ot(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && xs(r, n), zn > 0 && !i && Ye && (r.shapeFlag & 6 ? Ye[Ye.indexOf(e)] = r : Ye.push(r)), r.patchFlag = -2, r;
  }
  if (Oc(e) && (e = e.__vccOpts), t) {
    t = Fc(t);
    let { class: r, style: a } = t;
    r && !Ce(r) && (t.class = Fe(r)), he(a) && (/* @__PURE__ */ Ps(a) && !ee(a) && (a = Ee({}, a)), t.style = ze(a));
  }
  const l = Ce(e) ? 1 : sr(e) ? 128 : Tl(e) ? 64 : he(e) ? 4 : re(e) ? 2 : 0;
  return j(
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
function Fc(e) {
  return e ? /* @__PURE__ */ Ps(e) || Xl(e) ? Ee({}, e) : e : null;
}
function Ot(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: l, children: r, transition: a } = e, u = t ? Lc(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && ir(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? ee(i) ? i.concat(ds(t)) : [i, ds(t)] : ds(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r,
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
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ot(e.ssContent),
    ssFallback: e.ssFallback && Ot(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && Wn(
    c,
    a.clone(c)
  ), c;
}
function lr(e = " ", t = 0) {
  return J(Vs, null, e, t);
}
function ue(e = "", t = !1) {
  return t ? (S(), Ie(Be, null, e)) : J(Be, null, e);
}
function pt(e) {
  return e == null || typeof e == "boolean" ? J(Be) : ee(e) ? J(
    de,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Gn(e) ? St(e) : J(Vs, null, String(e));
}
function St(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ot(e);
}
function xs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (ee(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), xs(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Xl(t) ? t._ctx = Ne : o === 3 && Ne && (Ne.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (re(t)) {
    if (s & 65) {
      xs(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ne }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [lr(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Lc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = Fe([t.class, s.class]));
      else if (o === "style")
        t.style = ze([t.style, s.style]);
      else if (Ls(o)) {
        const i = t[o], l = s[o];
        l && i !== l && !(ee(i) && i.includes(l)) ? t[o] = i ? [].concat(i, l) : l : l == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Is(o) && (t[o] = l);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function ut(e, t, n, s = null) {
  st(e, t, 7, [
    n,
    s
  ]);
}
const Ic = Wl();
let Ac = 0;
function Dc(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Ic, i = {
    uid: Ac++,
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
    scope: new il(
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
    propsOptions: Jl(s, o),
    emitsOptions: zl(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: we,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: we,
    data: we,
    props: we,
    attrs: we,
    slots: we,
    refs: we,
    setupState: we,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = rc.bind(null, i), e.ce && e.ce(i), i;
}
let Oe = null;
const Wo = () => Oe || Ne;
let Ss, wo;
{
  const e = Ts(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((l) => l(i)) : o[0](i);
    };
  };
  Ss = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Oe = n
  ), wo = t(
    "__VUE_SSR_SETTERS__",
    (n) => dn = n
  );
}
const es = (e) => {
  const t = Oe;
  return Ss(e), e.scope.on(), () => {
    e.scope.off(), Ss(t);
  };
}, hi = () => {
  Oe && Oe.scope.off(), Ss(null);
};
function rr(e) {
  return e.vnode.shapeFlag & 4;
}
let dn = !1;
function kc(e, t = !1, n = !1) {
  t && wo(t);
  const { props: s, children: o } = e.vnode, i = rr(e);
  pc(e, s, i, t), _c(e, o, n || t);
  const l = i ? Tc(e, t) : void 0;
  return t && wo(!1), l;
}
function Tc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Qa);
  const { setup: s } = n;
  if (s) {
    vt();
    const o = e.setupContext = s.length > 1 ? Pc(e) : null, i = es(e), l = Yn(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), r = Qi(l);
    if (bt(), i(), (r || e.sp) && !cn(e) && Bo(e), r) {
      if (l.then(hi, hi), t)
        return l.then((a) => {
          gi(e, a);
        }).catch((a) => {
          Jn(a, e, 0);
        });
      e.asyncDep = l;
    } else
      gi(e, l);
  } else
    ar(e);
}
function gi(e, t, n) {
  re(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : he(t) && (e.setupState = xl(t)), ar(e);
}
function ar(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || ht);
  {
    const o = es(e);
    vt();
    try {
      Za(e);
    } finally {
      bt(), o();
    }
  }
}
const Ec = {
  get(e, t) {
    return Ve(e, "get", ""), e[t];
  }
};
function Pc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ec),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Bs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(xl($o(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Rn)
        return Rn[n](e);
    },
    has(t, n) {
      return n in t || n in Rn;
    }
  })) : e.proxy;
}
function Rc(e, t = !0) {
  return re(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Oc(e) {
  return re(e) && "__vccOpts" in e;
}
const Y = (e, t) => /* @__PURE__ */ ya(e, t, dn);
function cr(e, t, n) {
  try {
    ws(-1);
    const s = arguments.length;
    return s === 2 ? he(t) && !ee(t) ? Gn(t) ? J(e, null, [t]) : J(e, t) : J(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Gn(n) && (n = [n]), J(e, t, n));
  } finally {
    ws(1);
  }
}
const Nc = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let xo;
const _i = typeof window < "u" && window.trustedTypes;
if (_i)
  try {
    xo = /* @__PURE__ */ _i.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ur = xo ? (e) => xo.createHTML(e) : (e) => e, $c = "http://www.w3.org/2000/svg", Vc = "http://www.w3.org/1998/Math/MathML", xt = typeof document < "u" ? document : null, vi = xt && /* @__PURE__ */ xt.createElement("template"), Bc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? xt.createElementNS($c, e) : t === "mathml" ? xt.createElementNS(Vc, e) : n ? xt.createElement(e, { is: n }) : xt.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => xt.createTextNode(e),
  createComment: (e) => xt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => xt.querySelector(e),
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
      vi.innerHTML = ur(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const r = vi.content;
      if (s === "svg" || s === "mathml") {
        const a = r.firstChild;
        for (; a.firstChild; )
          r.appendChild(a.firstChild);
        r.removeChild(a);
      }
      t.insertBefore(r, n);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Dt = "transition", Sn = "animation", Kn = /* @__PURE__ */ Symbol("_vtc"), dr = {
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
}, Hc = /* @__PURE__ */ Ee(
  {},
  Pl,
  dr
), Uc = (e) => (e.displayName = "Transition", e.props = Hc, e), jc = /* @__PURE__ */ Uc(
  (e, { slots: t }) => cr(Oa, Wc(e), t)
), Ut = (e, t = []) => {
  ee(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, bi = (e) => e ? ee(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Wc(e) {
  const t = {};
  for (const C in e)
    C in dr || (t[C] = e[C]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: o,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: l = `${n}-enter-active`,
    enterToClass: r = `${n}-enter-to`,
    appearFromClass: a = i,
    appearActiveClass: u = l,
    appearToClass: c = r,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: f = `${n}-leave-active`,
    leaveToClass: p = `${n}-leave-to`
  } = e, h = zc(o), g = h && h[0], b = h && h[1], {
    onBeforeEnter: _,
    onEnter: y,
    onEnterCancelled: A,
    onLeave: w,
    onLeaveCancelled: D,
    onBeforeAppear: ce = _,
    onAppear: k = y,
    onAppearCancelled: L = A
  } = t, M = (C, U, X, N) => {
    C._enterCancelled = N, jt(C, U ? c : r), jt(C, U ? u : l), X && X();
  }, K = (C, U) => {
    C._isLeaving = !1, jt(C, d), jt(C, p), jt(C, f), U && U();
  }, O = (C) => (U, X) => {
    const N = C ? k : y, H = () => M(U, C, X);
    Ut(N, [U, H]), yi(() => {
      jt(U, C ? a : i), wt(U, C ? c : r), bi(N) || wi(U, s, g, H);
    });
  };
  return Ee(t, {
    onBeforeEnter(C) {
      Ut(_, [C]), wt(C, i), wt(C, l);
    },
    onBeforeAppear(C) {
      Ut(ce, [C]), wt(C, a), wt(C, u);
    },
    onEnter: O(!1),
    onAppear: O(!0),
    onLeave(C, U) {
      C._isLeaving = !0;
      const X = () => K(C, U);
      wt(C, d), C._enterCancelled ? (wt(C, f), Ci(C)) : (Ci(C), wt(C, f)), yi(() => {
        C._isLeaving && (jt(C, d), wt(C, p), bi(w) || wi(C, s, b, X));
      }), Ut(w, [C, X]);
    },
    onEnterCancelled(C) {
      M(C, !1, void 0, !0), Ut(A, [C]);
    },
    onAppearCancelled(C) {
      M(C, !0, void 0, !0), Ut(L, [C]);
    },
    onLeaveCancelled(C) {
      K(C), Ut(D, [C]);
    }
  });
}
function zc(e) {
  if (e == null)
    return null;
  if (he(e))
    return [eo(e.enter), eo(e.leave)];
  {
    const t = eo(e);
    return [t, t];
  }
}
function eo(e) {
  return $r(e);
}
function wt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Kn] || (e[Kn] = /* @__PURE__ */ new Set())).add(t);
}
function jt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Kn];
  n && (n.delete(t), n.size || (e[Kn] = void 0));
}
function yi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Gc = 0;
function wi(e, t, n, s) {
  const o = e._endId = ++Gc, i = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: l, timeout: r, propCount: a } = Kc(e, t);
  if (!l)
    return s();
  const u = l + "end";
  let c = 0;
  const d = () => {
    e.removeEventListener(u, f), i();
  }, f = (p) => {
    p.target === e && ++c >= a && d();
  };
  setTimeout(() => {
    c < a && d();
  }, r + 1), e.addEventListener(u, f);
}
function Kc(e, t) {
  const n = window.getComputedStyle(e), s = (h) => (n[h] || "").split(", "), o = s(`${Dt}Delay`), i = s(`${Dt}Duration`), l = xi(o, i), r = s(`${Sn}Delay`), a = s(`${Sn}Duration`), u = xi(r, a);
  let c = null, d = 0, f = 0;
  t === Dt ? l > 0 && (c = Dt, d = l, f = i.length) : t === Sn ? u > 0 && (c = Sn, d = u, f = a.length) : (d = Math.max(l, u), c = d > 0 ? l > u ? Dt : Sn : null, f = c ? c === Dt ? i.length : a.length : 0);
  const p = c === Dt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${Dt}Property`).toString()
  );
  return {
    type: c,
    timeout: d,
    propCount: f,
    hasTransform: p
  };
}
function xi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Si(n) + Si(e[s])));
}
function Si(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ci(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function qc(e, t, n) {
  const s = e[Kn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Cs = /* @__PURE__ */ Symbol("_vod"), fr = /* @__PURE__ */ Symbol("_vsh"), Ms = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Cs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Cn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Cn(e, !0), s.enter(e)) : s.leave(e, () => {
      Cn(e, !1);
    }) : Cn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Cn(e, t);
  }
};
function Cn(e, t) {
  e.style.display = t ? e[Cs] : "none", e[fr] = !t;
}
const Xc = /* @__PURE__ */ Symbol(""), Yc = /(?:^|;)\s*display\s*:/;
function Jc(e, t, n) {
  const s = e.style, o = Ce(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (Ce(t))
        for (const l of t.split(";")) {
          const r = l.slice(0, l.indexOf(":")).trim();
          n[r] == null && Ln(s, r, "");
        }
      else
        for (const l in t)
          n[l] == null && Ln(s, l, "");
    for (const l in n) {
      l === "display" && (i = !0);
      const r = n[l];
      r != null ? Zc(
        e,
        l,
        !Ce(t) && t ? t[l] : void 0,
        r
      ) || Ln(s, l, r) : Ln(s, l, "");
    }
  } else if (o) {
    if (t !== n) {
      const l = s[Xc];
      l && (n += ";" + l), s.cssText = n, i = Yc.test(n);
    }
  } else t && e.removeAttribute("style");
  Cs in e && (e[Cs] = i ? s.display : "", e[fr] && (s.display = "none"));
}
const Mi = /\s*!important$/;
function Ln(e, t, n) {
  if (ee(n))
    n.forEach((s) => Ln(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Qc(e, t);
    Mi.test(n) ? e.setProperty(
      Nt(s),
      n.replace(Mi, ""),
      "important"
    ) : e[s] = n;
  }
}
const Fi = ["Webkit", "Moz", "ms"], to = {};
function Qc(e, t) {
  const n = to[t];
  if (n)
    return n;
  let s = Ge(t);
  if (s !== "filter" && s in e)
    return to[t] = s;
  s = ks(s);
  for (let o = 0; o < Fi.length; o++) {
    const i = Fi[o] + s;
    if (i in e)
      return to[t] = i;
  }
  return t;
}
function Zc(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ce(s) && n === s;
}
const Li = "http://www.w3.org/1999/xlink";
function Ii(e, t, n, s, o, i = Wr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Li, t.slice(6, t.length)) : e.setAttributeNS(Li, t, n) : n == null || i && !nl(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Qe(n) ? String(n) : n
  );
}
function Ai(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ur(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const r = i === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (r !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const r = typeof e[t];
    r === "boolean" ? n = nl(n) : n == null && r === "string" ? (n = "", l = !0) : r === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(o || t);
}
function on(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function eu(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Di = /* @__PURE__ */ Symbol("_vei");
function tu(e, t, n, s, o = null) {
  const i = e[Di] || (e[Di] = {}), l = i[t];
  if (s && l)
    l.value = s;
  else {
    const [r, a] = ou(t);
    if (s) {
      const u = i[t] = ru(
        s,
        o
      );
      on(e, r, u, a);
    } else l && (eu(e, r, l, a), i[t] = void 0);
  }
}
const nu = /(Once|Passive|Capture)$/, su = /^on:?(?:Once|Passive|Capture)$/;
function ou(e) {
  let t, n;
  for (; (n = e.match(nu)) && !su.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Nt(e.slice(2)), t];
}
let no = 0;
const iu = /* @__PURE__ */ Promise.resolve(), lu = () => no || (iu.then(() => no = 0), no = Date.now());
function ru(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const o = n.value;
    if (ee(o)) {
      const i = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        i.call(s), s._stopped = !0;
      };
      const l = o.slice(), r = [s];
      for (let a = 0; a < l.length && !s._stopped; a++) {
        const u = l[a];
        u && st(
          u,
          t,
          5,
          r
        );
      }
    } else
      st(
        o,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = lu(), n;
}
const ki = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, au = (e, t, n, s, o, i) => {
  const l = o === "svg";
  t === "class" ? qc(e, s, l) : t === "style" ? Jc(e, n, s) : Ls(t) ? Is(t) || tu(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : cu(e, t, s, l)) ? (Ai(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ii(e, t, s, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (uu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ce(s))) ? Ai(e, Ge(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ii(e, t, s, l));
};
function cu(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ki(t) && re(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return ki(t) && Ce(n) ? !1 : t in e;
}
function uu(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Ge(t);
  return Array.isArray(n) ? n.some((o) => Ge(o) === s) : Object.keys(n).some((o) => Ge(o) === s);
}
const Ti = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ee(t) ? (n) => us(t, n) : t;
};
function du(e) {
  e.target.composing = !0;
}
function Ei(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const so = /* @__PURE__ */ Symbol("_assign");
function Pi(e, t, n) {
  return t && (e = e.trim()), n && (e = Do(e)), e;
}
const _t = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[so] = Ti(o);
    const i = s || o.props && o.props.type === "number";
    on(e, t ? "change" : "input", (l) => {
      l.target.composing || e[so](Pi(e.value, n, i));
    }), (n || i) && on(e, "change", () => {
      e.value = Pi(e.value, n, i);
    }), t || (on(e, "compositionstart", du), on(e, "compositionend", Ei), on(e, "change", Ei));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: i } }, l) {
    if (e[so] = Ti(l), e.composing) return;
    const r = (i || e.type === "number") && !/^0\d/.test(e.value) ? Do(e.value) : e.value, a = t ?? "";
    if (r === a)
      return;
    const u = e.getRootNode();
    (u instanceof Document || u instanceof ShadowRoot) && u.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a);
  }
}, fu = ["ctrl", "shift", "alt", "meta"], pu = {
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
  exact: (e, t) => fu.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ri = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...i) => {
    for (let l = 0; l < t.length; l++) {
      const r = pu[t[l]];
      if (r && r(o, t)) return;
    }
    return e(o, ...i);
  });
}, mu = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, fs = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const i = Nt(o.key);
    if (t.some(
      (l) => l === i || mu[l] === i
    ))
      return e(o);
  });
}, hu = /* @__PURE__ */ Ee({ patchProp: au }, Bc);
let Oi;
function pr() {
  return Oi || (Oi = bc(hu));
}
const Ni = (...e) => {
  pr().render(...e);
}, Hs = (...e) => {
  const t = pr().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = _u(s);
    if (!o) return;
    const i = t._component;
    !re(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const l = n(o, !1, gu(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), l;
  }, t;
};
function gu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function _u(e) {
  return Ce(e) ? document.querySelector(e) : e;
}
const Us = {
  accent: "#f08a45",
  panel: "#171b22",
  panelAlt: "#222934",
  text: "#e8edf3",
  muted: "#9ca8b5",
  danger: "#ef6666",
  ok: "#62c987"
}, vu = {
  accent: "#c9682c",
  panel: "#eef1f5",
  panelAlt: "#e2e6ec",
  text: "#1c2430",
  muted: "#5b6572",
  danger: "#c94b4b",
  ok: "#3f8f5f"
}, bu = {
  accent: "#00e5ff",
  panel: "#0a0e1a",
  panelAlt: "#131a2e",
  text: "#dff9ff",
  muted: "#5f7d94",
  danger: "#ff2e63",
  ok: "#00ff9f"
}, yu = {
  accent: "#d4a017",
  panel: "#1a1712",
  panelAlt: "#26221a",
  text: "#e8dcc0",
  muted: "#8a7d5f",
  danger: "#9a3324",
  ok: "#8fbf3f"
}, wu = {
  default: Us,
  cyberpunk: bu,
  fallout: yu
}, Ct = { ...Us };
let Nn = null, $n = null;
function So(e) {
  return `--fil-accent:${e.accent};--fil-panel:${e.panel};--fil-panel-alt:${e.panelAlt};--fil-text:${e.text};--fil-muted:${e.muted};--fil-danger:${e.danger};--fil-ok:${e.ok};`;
}
const xu = {
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
};
function Su() {
  if (typeof document > "u" || document.getElementById("fil-brand-vars")) return;
  const e = document.createElement("style");
  e.id = "fil-brand-vars", e.textContent = `:root{${So(Us)}--fil-radius:8px;--fil-gap:.55rem;--fil-input-border:rgba(240,138,69,0.35);}
.comfy-theme-light{${So(vu)}--fil-input-border:rgba(201,104,44,0.35);}
.comfy-multiline-input{border-color:var(--fil-input-border) !important;}`, document.head.appendChild(e), Nn = document.createElement("style"), Nn.id = "fil-theme-vars", document.head.appendChild(Nn), $n = document.createElement("style"), $n.id = "fil-theme-effects", document.head.appendChild($n);
}
function mr(e) {
  const t = wu[e] ?? Us;
  Object.assign(Ct, t), !(typeof document > "u") && (document.documentElement.dataset.filTheme = e, Nn && (Nn.textContent = e === "default" ? "" : `:root{${So(t)}}`), $n && ($n.textContent = xu[e] ?? ""));
}
const Cu = {
  class: "fil-color-picker",
  role: "group",
  "aria-label": "Color picker"
}, Mu = { class: "fil-cp-hex-row" }, Fu = {
  class: "fil-cp-presets",
  role: "listbox",
  "aria-label": "Preset colors"
}, Lu = ["aria-selected", "aria-label", "title", "onClick"], Iu = /* @__PURE__ */ Me({
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
    function l(U) {
      o("update:modelValue", U);
    }
    function r(U) {
      return Math.min(1, Math.max(0, U));
    }
    function a(U) {
      const X = /^#?([0-9a-f]{6})$/i.exec(U.trim());
      if (!X) return null;
      const N = parseInt(X[1], 16);
      return [N >> 16 & 255, N >> 8 & 255, N & 255];
    }
    function u(U, X, N) {
      const H = (I) => Math.round(r(I / 255) * 255).toString(16).padStart(2, "0");
      return `#${H(U)}${H(X)}${H(N)}`;
    }
    function c(U, X, N) {
      const H = U / 255, I = X / 255, V = N / 255, B = Math.max(H, I, V), Q = Math.min(H, I, V), ne = B - Q;
      let _e = 0;
      ne !== 0 && (B === H ? _e = (I - V) / ne % 6 : B === I ? _e = (V - H) / ne + 2 : _e = (H - I) / ne + 4, _e *= 60, _e < 0 && (_e += 360));
      const Ze = B === 0 ? 0 : ne / B;
      return [_e, Ze, B];
    }
    function d(U, X, N) {
      const H = N * X, I = H * (1 - Math.abs(U / 60 % 2 - 1)), V = N - H;
      let [B, Q, ne] = [0, 0, 0];
      return U < 60 ? [B, Q, ne] = [H, I, 0] : U < 120 ? [B, Q, ne] = [I, H, 0] : U < 180 ? [B, Q, ne] = [0, H, I] : U < 240 ? [B, Q, ne] = [0, I, H] : U < 300 ? [B, Q, ne] = [I, 0, H] : [B, Q, ne] = [H, 0, I], [(B + V) * 255, (Q + V) * 255, (ne + V) * 255];
    }
    const f = /* @__PURE__ */ le(0), p = /* @__PURE__ */ le(0), h = /* @__PURE__ */ le(0), g = /* @__PURE__ */ le(s.modelValue);
    function b(U) {
      const X = a(U);
      if (!X) return;
      const [N, H, I] = c(...X);
      f.value = N, p.value = H, h.value = I, g.value = u(...X);
    }
    He(() => s.modelValue, (U) => b(U), { immediate: !0 });
    const _ = Y(() => u(...d(f.value, p.value, h.value)));
    function y() {
      o("update:modelValue", _.value), g.value = _.value;
    }
    function A() {
      const U = a(g.value);
      if (!U) {
        g.value = _.value;
        return;
      }
      const [X, N, H] = c(...U);
      f.value = X, p.value = N, h.value = H, o("update:modelValue", u(...U));
    }
    const w = /* @__PURE__ */ le(null), D = /* @__PURE__ */ le(null);
    function ce(U) {
      const X = w.value;
      if (!X) return;
      const N = X.getBoundingClientRect();
      p.value = r((U.clientX - N.left) / N.width), h.value = r(1 - (U.clientY - N.top) / N.height), y();
    }
    function k(U) {
      const X = D.value;
      if (!X) return;
      const N = X.getBoundingClientRect();
      f.value = r((U.clientX - N.left) / N.width) * 360, y();
    }
    function L(U) {
      U.preventDefault(), ce(U);
      const X = (H) => ce(H), N = () => {
        window.removeEventListener("pointermove", X), window.removeEventListener("pointerup", N);
      };
      window.addEventListener("pointermove", X), window.addEventListener("pointerup", N);
    }
    function M(U) {
      U.preventDefault(), k(U);
      const X = (H) => k(H), N = () => {
        window.removeEventListener("pointermove", X), window.removeEventListener("pointerup", N);
      };
      window.addEventListener("pointermove", X), window.addEventListener("pointerup", N);
    }
    const K = Y(() => `hsl(${f.value}, 100%, 50%)`), O = Y(() => ({
      left: `${p.value * 100}%`,
      top: `${(1 - h.value) * 100}%`
    })), C = Y(() => ({ left: `${f.value / 360 * 100}%` }));
    return (U, X) => (S(), R("div", Cu, [
      j("div", {
        ref_key: "svRef",
        ref: w,
        class: "fil-cp-sv",
        style: ze({ background: K.value }),
        onPointerdown: L
      }, [
        X[1] || (X[1] = j("div", { class: "fil-cp-sv-white" }, null, -1)),
        X[2] || (X[2] = j("div", { class: "fil-cp-sv-black" }, null, -1)),
        j("div", {
          class: "fil-cp-sv-thumb",
          style: ze(O.value)
        }, null, 4)
      ], 36),
      j("div", {
        ref_key: "hueRef",
        ref: D,
        class: "fil-cp-hue",
        onPointerdown: M
      }, [
        j("div", {
          class: "fil-cp-hue-thumb",
          style: ze(C.value)
        }, null, 4)
      ], 544),
      j("div", Mu, [
        j("span", {
          class: "fil-cp-swatch",
          style: ze({ background: _.value })
        }, null, 4),
        Ke(j("input", {
          "onUpdate:modelValue": X[0] || (X[0] = (N) => g.value = N),
          class: "fil-cp-hex-input",
          type: "text",
          spellcheck: "false",
          "aria-label": "Hex color",
          onKeydown: fs(A, ["enter"]),
          onBlur: A
        }, null, 544), [
          [_t, g.value]
        ])
      ]),
      j("div", Fu, [
        (S(!0), R(de, null, ke(i.value, (N) => (S(), R("button", {
          key: N,
          class: Fe(["fil-color-swatch", { "is-active": e.modelValue === N }]),
          style: ze({ "--swatch": N }),
          "aria-selected": e.modelValue === N,
          "aria-label": N,
          title: N,
          onClick: (H) => l(N)
        }, null, 14, Lu))), 128))
      ])
    ]));
  }
}), Le = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Au = /* @__PURE__ */ Le(Iu, [["__scopeId", "data-v-c4d5f476"]]), $i = "__fil_color_picker_popup__";
function Du(e) {
  return [
    {
      content: "Change color…",
      callback: (t, n, s) => ku(e, s)
    }
  ];
}
function ku(e, t) {
  const n = document.getElementById($i);
  n && n.remove();
  const s = document.createElement("div");
  s.id = $i;
  const o = 176, i = 260, l = t ? Math.min(t.clientX, window.innerWidth - o - 8) : window.innerWidth / 2 - o / 2, r = t ? Math.min(t.clientY, window.innerHeight - i - 8) : window.innerHeight / 2 - i / 2;
  s.style.cssText = `position:fixed;z-index:10001;top:${Math.max(8, r)}px;left:${Math.max(8, l)}px;`, document.body.appendChild(s);
  function a(p) {
    e.color = p, e.__fx && (e.__fx.color = p), e.properties = e.properties || {}, e.properties.fil_custom_color = !0, u();
  }
  function u() {
    Ni(null, s), s.remove(), document.removeEventListener("mousedown", c, !0), document.removeEventListener("keydown", d, !0);
  }
  function c(p) {
    s.contains(p.target) || u();
  }
  function d(p) {
    p.key === "Escape" && u();
  }
  const f = cr(Au, {
    modelValue: e.color ?? "#78716c",
    "onUpdate:modelValue": (p) => a(p)
  });
  Ni(f, s), document.addEventListener("mousedown", c, !0), document.addEventListener("keydown", d, !0), Qn(() => {
    var p;
    (p = s.querySelector(".fil-color-swatch")) == null || p.focus();
  });
}
const Tu = "fil";
function gn(e, t = {}) {
  const s = e.prototype;
  if (s._filStyled) return;
  s._filStyled = !0, t.minSize && (s.minSize = t.minSize), s._filFamily = t.family ?? Tu, s._filDescription = t.description ?? "", t.badges && (s.badges = t.badges), s.color = Ct.accent, s.bgcolor = Ct.panelAlt;
  const o = s.onNodeCreated;
  s.onNodeCreated = function(...l) {
    const r = o == null ? void 0 : o.apply(this, l);
    return this.color = Ct.accent, this.bgcolor = Ct.panelAlt, r;
  }, s.onDrawTitleBar = function(l, r, a, u, c) {
    var h;
    const d = ((h = globalThis.LiteGraph) == null ? void 0 : h.ROUND_RADIUS) ?? 8, f = !!this.collapsed;
    l.fillStyle = Ct.panel, l.beginPath(), l.roundRect(0, -r, a[0], r, f ? [d] : [d, d, 0, 0]), l.fill();
    const p = 3;
    l.fillStyle = c || Ct.accent, l.beginPath(), l.roundRect(0, -r, p, r, f ? [d, 0, 0, d] : [d, 0, 0, 0]), l.fill();
  };
  const i = s.getExtraMenuOptions;
  s.getExtraMenuOptions = function(...l) {
    const r = i == null ? void 0 : i.apply(this, l), a = l[1];
    return Array.isArray(a) && a.push(null, ...Du(this)), r;
  };
}
function Eu(e) {
  var s, o, i;
  const t = (s = e.graph) == null ? void 0 : s._nodes;
  if (!t) return;
  for (const l of t)
    l._filFamily && ((o = l.properties) != null && o.fil_custom_color || (l.color = Ct.accent, l.bgcolor = Ct.panelAlt));
  const n = e.canvas;
  (i = n == null ? void 0 : n.setDirty) == null || i.call(n, !0, !0);
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let hr;
const js = (e) => hr = e, gr = (
  /* istanbul ignore next */
  Symbol()
);
function Co(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Vn;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Vn || (Vn = {}));
function _r() {
  const e = ll(!0), t = e.run(() => /* @__PURE__ */ le({}));
  let n = [], s = [];
  const o = $o({
    install(i) {
      js(o), o._a = i, i.provide(gr, o), i.config.globalProperties.$pinia = o, s.forEach((l) => n.push(l)), s = [];
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
const vr = () => {
};
function Vi(e, t, n, s = vr) {
  e.push(t);
  const o = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), s());
  };
  return !n && rl() && Gr(o), o;
}
function nn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Pu = (e) => e(), Bi = Symbol(), oo = Symbol();
function Mo(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], o = e[n];
    Co(o) && Co(s) && e.hasOwnProperty(n) && !/* @__PURE__ */ be(s) && !/* @__PURE__ */ gt(s) ? e[n] = Mo(o, s) : e[n] = s;
  }
  return e;
}
const Ru = (
  /* istanbul ignore next */
  Symbol()
);
function Ou(e) {
  return !Co(e) || !e.hasOwnProperty(Ru);
}
const { assign: Tt } = Object;
function Nu(e) {
  return !!(/* @__PURE__ */ be(e) && e.effect);
}
function $u(e, t, n, s) {
  const { state: o, actions: i, getters: l } = t, r = n.state.value[e];
  let a;
  function u() {
    r || (n.state.value[e] = o ? o() : {});
    const c = /* @__PURE__ */ ha(n.state.value[e]);
    return Tt(c, i, Object.keys(l || {}).reduce((d, f) => (d[f] = $o(Y(() => {
      js(n);
      const p = n._s.get(e);
      return l[f].call(p, p);
    })), d), {}));
  }
  return a = br(e, u, t, n, s, !0), a;
}
function br(e, t, n = {}, s, o, i) {
  let l;
  const r = Tt({ actions: {} }, n), a = { deep: !0 };
  let u, c, d = [], f = [], p;
  const h = s.state.value[e];
  !i && !h && (s.state.value[e] = {});
  let g;
  function b(L) {
    let M;
    u = c = !1, typeof L == "function" ? (L(s.state.value[e]), M = {
      type: Vn.patchFunction,
      storeId: e,
      events: p
    }) : (Mo(s.state.value[e], L), M = {
      type: Vn.patchObject,
      payload: L,
      storeId: e,
      events: p
    });
    const K = g = Symbol();
    Qn().then(() => {
      g === K && (u = !0);
    }), c = !0, nn(d, M, s.state.value[e]);
  }
  const _ = i ? function() {
    const { state: M } = n, K = M ? M() : {};
    this.$patch((O) => {
      Tt(O, K);
    });
  } : (
    /* istanbul ignore next */
    vr
  );
  function y() {
    l.stop(), d = [], f = [], s._s.delete(e);
  }
  const A = (L, M = "") => {
    if (Bi in L)
      return L[oo] = M, L;
    const K = function() {
      js(s);
      const O = Array.from(arguments), C = [], U = [];
      function X(I) {
        C.push(I);
      }
      function N(I) {
        U.push(I);
      }
      nn(f, {
        args: O,
        name: K[oo],
        store: D,
        after: X,
        onError: N
      });
      let H;
      try {
        H = L.apply(this && this.$id === e ? this : D, O);
      } catch (I) {
        throw nn(U, I), I;
      }
      return H instanceof Promise ? H.then((I) => (nn(C, I), I)).catch((I) => (nn(U, I), Promise.reject(I))) : (nn(C, H), H);
    };
    return K[Bi] = !0, K[oo] = M, K;
  }, w = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Vi.bind(null, f),
    $patch: b,
    $reset: _,
    $subscribe(L, M = {}) {
      const K = Vi(d, L, M.detached, () => O()), O = l.run(() => He(() => s.state.value[e], (C) => {
        (M.flush === "sync" ? c : u) && L({
          storeId: e,
          type: Vn.direct,
          events: p
        }, C);
      }, Tt({}, a, M)));
      return K;
    },
    $dispose: y
  }, D = /* @__PURE__ */ Zt(w);
  s._s.set(e, D);
  const k = (s._a && s._a.runWithContext || Pu)(() => s._e.run(() => (l = ll()).run(() => t({ action: A }))));
  for (const L in k) {
    const M = k[L];
    if (/* @__PURE__ */ be(M) && !Nu(M) || /* @__PURE__ */ gt(M))
      i || (h && Ou(M) && (/* @__PURE__ */ be(M) ? M.value = h[L] : Mo(M, h[L])), s.state.value[e][L] = M);
    else if (typeof M == "function") {
      const K = A(M, L);
      k[L] = K, r.actions[L] = M;
    }
  }
  return Tt(D, k), Tt(/* @__PURE__ */ fe(D), k), Object.defineProperty(D, "$state", {
    get: () => s.state.value[e],
    set: (L) => {
      b((M) => {
        Tt(M, L);
      });
    }
  }), s._p.forEach((L) => {
    Tt(D, l.run(() => L({
      store: D,
      app: s._a,
      pinia: s,
      options: r
    })));
  }), h && i && n.hydrate && n.hydrate(D.$state, h), u = !0, c = !0, D;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function zo(e, t, n) {
  let s, o;
  const i = typeof t == "function";
  typeof e == "string" ? (s = e, o = i ? n : t) : (o = e, s = e.id);
  function l(r, a) {
    const u = La();
    return r = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    r || (u ? En(gr, null) : null), r && js(r), r = hr, r._s.has(s) || (i ? br(s, t, o, r) : $u(s, o, r)), r._s.get(s);
  }
  return l.$id = s, l;
}
function Vu(e) {
  {
    const t = /* @__PURE__ */ fe(e), n = {};
    for (const s in t) {
      const o = t[s];
      o.effect ? n[s] = // ...
      Y({
        get: () => e[s],
        set(i) {
          e[s] = i;
        }
      }) : (/* @__PURE__ */ be(o) || /* @__PURE__ */ gt(o)) && (n[s] = // ---
      /* @__PURE__ */ va(e, s));
    }
    return n;
  }
}
let qt = null;
function Bu(e) {
  return qt || (qt = _r(), qt);
}
function Ws() {
  return qt || (qt = _r()), qt;
}
const Hu = {
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
function yr(e) {
  return Hu[e];
}
const Uu = ["title", "aria-label", "innerHTML"], ju = /* @__PURE__ */ Me({
  name: "FilIcon",
  __name: "FilIcon",
  props: {
    name: {},
    size: { default: 16 },
    title: {}
  },
  setup(e) {
    return (t, n) => (S(), R("span", {
      class: "fil-icon",
      style: ze({ width: e.size + "px", height: e.size + "px" }),
      title: e.title,
      role: "img",
      "aria-label": e.title ?? e.name,
      innerHTML: F(yr)(e.name)
    }, null, 12, Uu));
  }
}), fn = /* @__PURE__ */ Le(ju, [["__scopeId", "data-v-dfb78d9f"]]), rs = /* @__PURE__ */ le({});
let Hi = !1;
const qn = /* @__PURE__ */ zo("fil/help", () => {
  const e = /* @__PURE__ */ le(null);
  function t(r) {
    for (const [a, u] of Object.entries(r))
      rs.value[a] = u;
  }
  function n() {
    Hi || (Hi = !0, Promise.resolve().then(() => Hf).then(({ HELP_DEFAULTS: r }) => t(r)).catch((r) => console.warn("[FiL_Design_ImageMind] help defaults import failed:", r)));
  }
  function s(r) {
    return rs.value[r];
  }
  function o() {
    return Object.values(rs.value);
  }
  function i(r) {
    n(), e.value = r;
  }
  function l() {
    e.value = null;
  }
  return {
    registry: rs,
    activeHelpId: e,
    ensureHelpDefaultsInjected: n,
    registerAll: t,
    get: s,
    list: o,
    value_open: i,
    value_close: l
  };
}), wr = "FiL_Design_ImageMind", Et = "/fil_design_imagemind", Qt = `[${wr}]`, Wu = `${wr}.UI`;
async function xr(e) {
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
function Ui(e) {
  var o;
  const n = `/view?${new URLSearchParams({
    filename: e.filename,
    type: e.type || "temp",
    subfolder: e.subfolder || ""
  }).toString()}`, s = globalThis;
  return (o = s.api) != null && o.apiURL ? s.api.apiURL(n) : n;
}
function Sr() {
  var t;
  const e = globalThis;
  if ((t = e.api) != null && t.fetchApi) return (n, s) => e.api.fetchApi(n, s);
  if (e.fetch) return e.fetch.bind(globalThis);
  throw new Error(`${Qt} no HTTP transport (api.fetchApi or window.fetch undefined)`);
}
async function In(e) {
  const t = await Sr()(e);
  return xr(t);
}
async function io(e, t) {
  const n = await Sr()(e, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  });
  return xr(n);
}
const zt = {
  loadAccounts: () => In(`${Et}/auth`),
  saveAccounts: (e) => io(`${Et}/auth`, {
    accounts: e
  }),
  loadModels: (e, t = !1) => In(`${Et}/models/${encodeURIComponent(e)}${t ? "?force=1" : ""}`),
  probe: (e, t = "") => io(`${Et}/provider_probe`, { provider: e, model: t }),
  listProviders: () => In(`${Et}/providers`),
  saveCompareImage: (e) => io(`${Et}/compare/save`, { image: e }),
  nodeContracts: () => In(`${Et}/node_contracts`)
};
function Cr(e, t, n) {
  var o, i, l, r, a, u, c, d;
  const s = n ?? globalThis;
  try {
    const f = (l = (i = (o = s.app) == null ? void 0 : o.extensionManager) == null ? void 0 : i.setting) == null ? void 0 : l.get;
    if (typeof f == "function") return f(e, t);
    const p = ((a = (r = s.ui) == null ? void 0 : r.settings) == null ? void 0 : a.getSettingValue) ?? ((d = (c = (u = globalThis.app) == null ? void 0 : u.ui) == null ? void 0 : c.settings) == null ? void 0 : d.getSettingValue);
    if (typeof p == "function") return p(e, t);
  } catch (f) {
    console.warn(`[FiL_Design_ImageMind] setting read failed for "${e}":`, f);
  }
  return t;
}
const zu = "FiL_Design_ImageMind.Language", Mr = "en", Bn = /* @__PURE__ */ Zt({
  lang: Mr,
  translations: {},
  loaded: !1
});
let ji = null;
async function Gu(e) {
  try {
    const t = await In(`/fil_design_imagemind/locale/${encodeURIComponent(e)}`);
    Bn.translations = t, Bn.lang = e;
  } catch (t) {
    console.warn(`[FiL_Design_ImageMind] failed to load locale "${e}":`, t);
  } finally {
    Bn.loaded = !0;
  }
}
function Ku() {
  if (ji) return;
  const e = Cr(zu, Mr);
  ji = Gu(e);
}
function $t() {
  Ku();
  function e(t, n) {
    return Bn.translations[t] ?? n;
  }
  return { t: e, state: /* @__PURE__ */ hs(Bn) };
}
const qu = ["title"], Xu = /* @__PURE__ */ Me({
  __name: "FilNodeHelpBadge",
  props: {
    nodeId: {}
  },
  setup(e) {
    const t = e, n = qn(), { t: s } = $t();
    function o() {
      n.value_open(t.nodeId);
    }
    return (i, l) => (S(), R("button", {
      type: "button",
      class: "fil-node-help-badge",
      title: F(s)("tt_node_help", "Help for this node"),
      onClick: o
    }, [
      J(fn, {
        name: "help",
        size: 13
      })
    ], 8, qu));
  }
}), Yu = /* @__PURE__ */ Le(Xu, [["__scopeId", "data-v-3001cdba"]]), Ju = { class: "fil-node-shell" }, Qu = /* @__PURE__ */ Me({
  __name: "FilNodeShell",
  props: {
    root: {},
    state: {},
    comfyClass: {}
  },
  setup(e) {
    return (t, n) => (S(), R("div", Ju, [
      J(Yu, { "node-id": e.comfyClass }, null, 8, ["node-id"]),
      (S(), Ie(Xa(e.root), { state: e.state }, null, 8, ["state"]))
    ]));
  }
}), Zu = /* @__PURE__ */ Le(Qu, [["__scopeId", "data-v-0fbe412b"]]), ed = "__filVueMounted";
function _n(e, t, n, s) {
  const o = e;
  if (typeof o.addDOMWidget != "function")
    return console.warn(`[FiL_Design_ImageMind] domWidgetHost: node.addDOMWidget not available for "${t}" — ComfyUI core too old?`), null;
  const i = document.createElement("div");
  i.className = "fil-vue-host", i.style.width = "100%", i.style.boxSizing = "border-box", i.style.minHeight = `${s.height}px`, i.style.height = "auto", i[ed] = !0, i.addEventListener(
    "wheel",
    (h) => {
      var b, _;
      const g = (_ = (b = globalThis.app) == null ? void 0 : b.canvas) == null ? void 0 : _.canvas;
      g instanceof HTMLCanvasElement && (h.preventDefault(), g.dispatchEvent(new WheelEvent("wheel", {
        deltaX: h.deltaX,
        deltaY: h.deltaY,
        deltaZ: h.deltaZ,
        deltaMode: h.deltaMode,
        clientX: h.clientX,
        clientY: h.clientY,
        bubbles: !0,
        cancelable: !0
      })));
    },
    { passive: !1 }
  );
  const l = /* @__PURE__ */ Zt(s.state);
  let r = s.height;
  const a = o.addDOMWidget(t, "custom", i, {
    hideOnZoom: !0,
    getValue: () => l,
    setValue: (h) => {
      h && typeof h == "object" && Object.assign(l, h);
    },
    getHeight: () => r,
    ...s.onDraw ? { onDraw: s.onDraw } : {}
  }), u = Hs(Zu, { root: n, state: l, comfyClass: o.comfyClass ?? "default" }).use(Ws());
  u.mount(i);
  let c = 0;
  const d = new ResizeObserver(() => {
    c || (c = requestAnimationFrame(() => {
      var g, b;
      c = 0;
      const h = Math.ceil(i.scrollHeight / 4) * 4;
      if (!(Math.abs(h - r) < 2)) {
        if (r = h, o.computeSize && o.setSize && o.size) {
          const [_] = o.size, [, y] = o.computeSize();
          o.setSize([_, y]);
        }
        (b = (g = o.graph) == null ? void 0 : g.setDirtyCanvas) == null || b.call(g, !0, !0);
      }
    }));
  });
  d.observe(i);
  const f = { widget: a, host: i, app: u, state: l, unmount: p };
  function p() {
    d.disconnect(), c && cancelAnimationFrame(c);
    try {
      this.app.unmount();
    } catch (h) {
      console.warn(`[FiL_Design_ImageMind] unmount failed for "${t}":`, h);
    }
    for (; this.host.firstChild; ) this.host.removeChild(this.host.firstChild);
  }
  return f.unmount = p.bind(f), o._filVueApps ?? (o._filVueApps = {}), o._filVueApps[t] = f, f;
}
function vn(e) {
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
function me(e, t) {
  const n = e;
  if (n.widgets)
    return n.widgets.find((s) => s.name === t);
}
function ts(e, t) {
  return new Proxy({ ...t }, {
    set(n, s, o) {
      n[s] = o;
      const i = me(e, String(s));
      return i && (i.value = o), !0;
    }
  });
}
function xe(e, t, n) {
  if (!e) return n;
  const s = e.value;
  return t === "number" && typeof s == "number" && Number.isFinite(s) || t === "boolean" && typeof s == "boolean" || t === "string" && typeof s == "string" ? s : (console.warn(
    `[FiL_Design_ImageMind] widget "${e.name}" had a corrupted value (expected ${t}) — resetting to default. This usually means the workflow was saved with an older version of this node.`
  ), e.value = n, n);
}
const Wi = 4, td = {
  info: 3500,
  success: 3e3,
  warning: 5e3,
  error: 6e3
};
let nd = 1;
const Rt = /* @__PURE__ */ zo("fil/toast", () => {
  const e = /* @__PURE__ */ le([]), t = /* @__PURE__ */ le([]);
  function n(u, c, d = {}) {
    const f = {
      id: nd++,
      level: u,
      text: c == null ? "" : String(c),
      timeout: d.timeout ?? td[u],
      sticky: !!d.sticky,
      action: d.action ?? null
    };
    return e.value.length < Wi ? e.value.push(f) : t.value.push(f), f;
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
  function r(u) {
    e.value = e.value.filter((c) => c.id !== u), t.value.length > 0 && e.value.length < Wi && e.value.push(t.value.shift());
  }
  function a() {
    e.value = [], t.value = [];
  }
  return { items: e, queue: t, info: s, success: o, warning: i, error: l, push: n, dismiss: r, dismissAll: a };
});
function sd() {
  var t, n;
  return ((n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.toast) ?? null;
}
function as(e, t) {
  const n = sd();
  if (n != null && n.addAlert && (e === "info" || e === "success" || e === "warning" || e === "error"))
    try {
      n.addAlert(t);
      return;
    } catch (s) {
      console.warn("[FiL_Design_ImageMind toast] extensionManager.toast failed:", s);
    }
  Rt().push(e, t, {});
}
const nt = {
  info: (e) => as("info", e),
  success: (e) => as("success", e),
  warning: (e) => as("warning", e),
  error: (e) => as("error", e),
  // Direct Pinia access for Vue components that want actions/sticky/toasts.
  infoRich: (e, t) => Rt().info(e, t),
  successRich: (e, t) => Rt().success(e, t),
  warningRich: (e, t) => Rt().warning(e, t),
  errorRich: (e, t) => Rt().error(e, t),
  dismissAll: () => Rt().dismissAll()
}, od = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  toast: nt,
  useToastStore: Rt
}, Symbol.toStringTag, { value: "Module" }));
function zi() {
  var t, n, s, o, i, l, r, a;
  return !!(((o = (s = (n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.setting) == null ? void 0 : s.get) == null ? void 0 : o.call(s, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? ((a = (r = (l = (i = globalThis.app) == null ? void 0 : i.ui) == null ? void 0 : l.settings) == null ? void 0 : r.getSettingValue) == null ? void 0 : a.call(r, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? !0);
}
function Gi() {
  function e(s, o, i, l) {
  }
  function t(s, o, i, l) {
    zi() && nt.success("Connected");
  }
  function n(s, o) {
    zi() && nt.info("Disconnected");
  }
  return { onConnectionsChange: e, onConnect: t, onDisconnect: n };
}
function bn(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype, n = t.onNodeCreated;
  t.onNodeCreated = function(...i) {
    const l = n == null ? void 0 : n.apply(this, i);
    return this.color, l;
  };
  const s = t.onConnect;
  t.onConnect = function(...i) {
    const { onConnect: l } = Gi();
    return l(...i), s == null ? void 0 : s.apply(this, i);
  };
  const o = t.onDisconnect;
  t.onDisconnect = function(...i) {
    const { onDisconnect: l } = Gi();
    return l(...i), o == null ? void 0 : o.apply(this, i);
  };
}
const id = /* @__PURE__ */ mn(() => Promise.resolve().then(() => Yf)), ld = {
  id: "FiLSeed",
  register(e, t) {
    gn(e, {
      minSize: [220, 220],
      family: "value",
      description: "Fixed or randomized seed with copy and reuse buttons.",
      badges: [{ text: "seed" }]
    });
    const s = e.prototype, o = s.onNodeCreated;
    s.onNodeCreated = function(...r) {
      const a = o == null ? void 0 : o.apply(this, r), u = this, c = me(u, "seed"), d = xe(c, "number", 0);
      c && (c.hidden = !0);
      const f = me(u, "control_after_generate");
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
      return u._filSeedState = p, _n(u, "fil_seed_view", id, { state: p, height: 185 }), a;
    };
    const i = s.onConfigure;
    s.onConfigure = function(...r) {
      const a = i == null ? void 0 : i.apply(this, r), u = this, c = u._filSeedState;
      return c && (c.nodeState.seed = xe(me(u, "seed"), "number", 0)), a;
    };
    const l = s.onRemoved;
    s.onRemoved = function(...r) {
      return vn(this), l == null ? void 0 : l.apply(this, r);
    }, bn(e);
  }
}, rd = /* @__PURE__ */ mn(() => Promise.resolve().then(() => Lp)), ad = {
  id: "FiLProviderLoader",
  register(e, t) {
    gn(e, {
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
    s.onNodeCreated = function(...a) {
      const u = i == null ? void 0 : i.apply(this, a), c = this, d = xe(me(c, "provider"), "string", "ollama"), f = xe(me(c, "model"), "string", "(loading...)"), p = xe(me(c, "temperature"), "number", 0.7), h = xe(me(c, "max_tokens"), "number", 0), g = xe(me(c, "rate_limit_ms"), "number", 100), b = xe(me(c, "max_image_side"), "number", 1024);
      for (const y of ["provider", "model", "refresh_models", "temperature", "max_tokens", "rate_limit_ms", "seed", "control_after_generate", "max_image_side"]) {
        const A = me(c, y);
        A && (A.hidden = !0);
      }
      const _ = {
        nodeState: ts(c, {
          provider: d,
          model: f,
          temperature: p,
          max_tokens: h,
          rate_limit_ms: g,
          max_image_side: b
        }),
        initialValues: {
          provider: d,
          model: f,
          temperature: p,
          max_tokens: h,
          rate_limit_ms: g,
          max_image_side: b
        },
        ui: {}
      };
      return Object.defineProperty(_, "node", { value: c, enumerable: !1, configurable: !0 }), c._filProviderState = _, _n(c, "fil_provider_view", rd, { state: _, height: 340 }), u;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...a) {
      const u = l == null ? void 0 : l.apply(this, a), c = this, d = c._filProviderState;
      if (!d) return u;
      const f = d.nodeState;
      for (const { name: p, kind: h, fallback: g } of o)
        f[p] = xe(me(c, p), h, g);
      return u;
    };
    const r = s.onRemoved;
    s.onRemoved = function(...a) {
      return vn(this), r == null ? void 0 : r.apply(this, a);
    }, bn(e);
  }
}, cd = /* @__PURE__ */ mn(() => Promise.resolve().then(() => Cm)), ud = {
  id: "FiLOpticScanner",
  register(e, t) {
    gn(e, {
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
    s.onNodeCreated = function(...a) {
      const u = i == null ? void 0 : i.apply(this, a), c = this, d = {}, f = {};
      for (const _ of o) {
        const y = me(c, _);
        if (!y) continue;
        const A = xe(y, "string", "");
        d[_] = A, f[_] = A, y.hidden = !0;
      }
      const p = me(c, "seed"), h = me(c, "control_after_generate"), g = xe(p, "number", -1);
      p && (p.hidden = !0), h && (h.hidden = !0), d.seed = g, f.seed = g, f.seed_mode = "random";
      const b = {
        nodeState: ts(c, f),
        initialValues: d,
        ui: {},
        lastRunSeed: null
      };
      return c._filScannerSeedState = b, _n(c, "fil_scanner_view", cd, { state: b, height: 460 }), u;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...a) {
      const u = l == null ? void 0 : l.apply(this, a), c = this, d = c._filScannerSeedState;
      if (!d) return u;
      for (const f of o) {
        const p = me(c, f);
        p && (d.nodeState[f] = xe(p, "string", ""));
      }
      return d.nodeState.seed = xe(me(c, "seed"), "number", -1), u;
    };
    const r = s.onRemoved;
    s.onRemoved = function(...a) {
      return vn(this), r == null ? void 0 : r.apply(this, a);
    }, bn(e);
  }
}, dd = /* @__PURE__ */ mn(() => Promise.resolve().then(() => Tm)), fd = {
  id: "FiLNeuroCleaner",
  register(e, t) {
    gn(e, {
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
    s.onNodeCreated = function(...a) {
      const u = i == null ? void 0 : i.apply(this, a), c = this, d = {}, f = {};
      for (const h of Object.keys(o)) {
        const g = me(c, h), b = xe(g, "boolean", o[h]);
        d[h] = b, f[h] = b, g && (g.hidden = !0);
      }
      const p = { nodeState: ts(c, d), initialValues: f, ui: {} };
      return c._filCleanerState = p, _n(c, "fil_cleaner_view", dd, { state: p, height: 460 }), u;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...a) {
      const u = l == null ? void 0 : l.apply(this, a), c = this, d = c._filCleanerState;
      if (!d) return u;
      for (const f of Object.keys(o))
        d.nodeState[f] = xe(me(c, f), "boolean", o[f]);
      return u;
    };
    const r = s.onRemoved;
    s.onRemoved = function(...a) {
      return vn(this), r == null ? void 0 : r.apply(this, a);
    }, bn(e);
  }
}, pd = /* @__PURE__ */ mn(() => Promise.resolve().then(() => Vm)), md = {
  id: "FiLBeforeAfterCompare",
  register(e, t) {
    gn(e, {
      minSize: [340, 500],
      family: "image",
      description: "Before/after viewer (wipe, side-by-side, overlay, difference) with optional output resizing.",
      badges: [{ text: "compare", color: "#62c987", text_color: "#1a1a1a" }]
    });
    const s = e.prototype, o = s.onNodeCreated;
    s.onNodeCreated = function(...r) {
      const a = o == null ? void 0 : o.apply(this, r), u = this, c = me(u, "swap"), d = me(u, "resize_mode"), f = me(u, "max_resolution"), p = {
        swap: xe(c, "boolean", !1),
        resize_mode: xe(d, "string", "Off"),
        max_resolution: xe(f, "number", 4096)
      };
      for (const _ of [c, d, f])
        _ && (_.hidden = !0);
      const h = {
        nodeState: ts(u, p),
        initialValues: { ...p },
        ui: {
          compare_mode: "wipe",
          compare_position: 0.5,
          compare_opacity: 0.5,
          settings_collapsed: !0
        }
      };
      u._filCompareState = h;
      const g = _n(u, "fil_compare_view", pd, { state: h, height: 380 }), b = u.onExecuted;
      return u.onExecuted = function(_) {
        const y = b == null ? void 0 : b.apply(this, [_]), A = _;
        return g && A && (g.state.ui.compare_images = { a: A.a_images ?? [], b: A.b_images ?? [] }), y;
      }, a;
    };
    const i = s.onConfigure;
    s.onConfigure = function(...r) {
      const a = i == null ? void 0 : i.apply(this, r), u = this, c = u._filCompareState;
      return c && (c.nodeState.swap = xe(me(u, "swap"), "boolean", !1), c.nodeState.resize_mode = xe(me(u, "resize_mode"), "string", "Off"), c.nodeState.max_resolution = xe(me(u, "max_resolution"), "number", 4096)), a;
    };
    const l = s.onRemoved;
    s.onRemoved = function(...r) {
      return vn(this), l == null ? void 0 : l.apply(this, r);
    }, bn(e);
  }
}, hd = /* @__PURE__ */ mn(() => Promise.resolve().then(() => Xm)), gd = {
  id: "FiLUpscaleTileCalc",
  register(e, t) {
    gn(e, {
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
    }, l = { auto_profile: "Balanced" }, r = s.onNodeCreated;
    s.onNodeCreated = function(...c) {
      const d = r == null ? void 0 : r.apply(this, c), f = this, p = {}, h = {};
      for (const b of Object.keys(o)) {
        const _ = me(f, b);
        if (!_) continue;
        const y = xe(_, "number", o[b]);
        p[b] = y, h[b] = y, _.hidden = !0;
      }
      for (const b of Object.keys(i)) {
        const _ = me(f, b);
        if (!_) continue;
        const y = xe(_, "boolean", i[b]);
        p[b] = y, h[b] = y, _.hidden = !0;
      }
      for (const b of Object.keys(l)) {
        const _ = me(f, b);
        if (!_) continue;
        const y = xe(_, "string", l[b]);
        p[b] = y, h[b] = y, _.hidden = !0;
      }
      const g = { nodeState: ts(f, p), initialValues: h, ui: {} };
      return f._filUpscaleState = g, _n(f, "fil_upscale_view", hd, { state: g, height: 420 }), d;
    };
    const a = s.onConfigure;
    s.onConfigure = function(...c) {
      const d = a == null ? void 0 : a.apply(this, c), f = this, p = f._filUpscaleState;
      if (!p) return d;
      for (const h of Object.keys(o))
        p.nodeState[h] = xe(me(f, h), "number", o[h]);
      for (const h of Object.keys(i))
        p.nodeState[h] = xe(me(f, h), "boolean", i[h]);
      for (const h of Object.keys(l))
        p.nodeState[h] = xe(me(f, h), "string", l[h]);
      return d;
    };
    const u = s.onRemoved;
    s.onRemoved = function(...c) {
      return vn(this), u == null ? void 0 : u.apply(this, c);
    }, bn(e);
  }
}, _d = [
  ld,
  ad,
  ud,
  fd,
  md,
  gd
], Fr = Object.fromEntries(
  _d.map((e) => [e.id, e])
), vd = ["aria-label"], bd = { class: "fil-modal-header" }, yd = { class: "fil-modal-title" }, wd = { class: "fil-modal-body" }, xd = /* @__PURE__ */ Me({
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
    const n = e, s = t, o = /* @__PURE__ */ le(null), i = /* @__PURE__ */ le(null);
    function l() {
      s("update:open", !1), s("close");
    }
    function r(d) {
      n.closeOnBackdrop && d.target === d.currentTarget && l();
    }
    function a(d) {
      n.closeOnEsc && d.key === "Escape" && l(), d.key === "Tab" && u(d);
    }
    function u(d) {
      if (!o.value) return;
      const f = c(o.value);
      if (!f.length) {
        d.preventDefault();
        return;
      }
      const p = f[0], h = f[f.length - 1];
      d.shiftKey ? document.activeElement === p && (d.preventDefault(), h.focus()) : document.activeElement === h && (d.preventDefault(), p.focus());
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
        d ? (i.value = document.activeElement, Qn(() => {
          var h;
          (h = (o.value ? c(o.value) : [])[0] || o.value) == null || h.focus();
        })) : ((f = i.value) == null || f.focus(), i.value = null);
      }
    ), en(() => {
      document.addEventListener("keydown", a);
    }), hn(() => {
      document.removeEventListener("keydown", a);
    }), (d, f) => (S(), Ie(El, { to: "body" }, [
      J(jc, { name: "fil-modal" }, {
        default: Rs(() => [
          e.open ? (S(), R("div", {
            key: 0,
            ref_key: "modalRef",
            ref: o,
            class: "fil-modal-backdrop",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title || "Dialog",
            onClick: r
          }, [
            j("div", {
              class: "fil-modal-panel",
              style: ze({ maxWidth: e.width })
            }, [
              j("div", bd, [
                j("span", yd, se(e.title), 1),
                j("button", {
                  class: "fil-modal-close",
                  title: "Close",
                  onClick: l
                }, [
                  J(fn, {
                    name: "close",
                    size: 14
                  })
                ])
              ]),
              j("div", wd, [
                Ja(d.$slots, "default", {}, void 0, !0)
              ])
            ], 4)
          ], 8, vd)) : ue("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Lr = /* @__PURE__ */ Le(xd, [["__scopeId", "data-v-00452928"]]), Sd = { class: "fil-help-title" }, Cd = {
  key: 0,
  class: "fil-help-body"
}, Md = { key: 1 }, Fd = {
  key: 2,
  class: "fil-help-table"
}, Ld = {
  key: 3,
  class: "fil-help-code"
}, Id = {
  key: 1,
  class: "fil-help-empty"
}, Ad = /* @__PURE__ */ Me({
  __name: "FilHelpPopup",
  setup(e) {
    const t = qn(), n = Y(() => {
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
    }), (o, i) => (S(), Ie(Lr, {
      open: s.value,
      "onUpdate:open": i[0] || (i[0] = (l) => s.value = l),
      title: "FiL LLM Help",
      width: "600px",
      onClose: i[1] || (i[1] = (l) => F(t).value_close())
    }, {
      default: Rs(() => {
        var l;
        return [
          n.value ? (S(), R(de, { key: 0 }, [
            j("h2", Sd, se(n.value.title), 1),
            n.value.body ? (S(), R("p", Cd, se(n.value.body), 1)) : ue("", !0),
            (l = n.value.bullets) != null && l.length ? (S(), R("ul", Md, [
              (S(!0), R(de, null, ke(n.value.bullets, (r, a) => (S(), R("li", {
                key: a,
                class: "fil-help-bullet"
              }, [
                J(fn, {
                  name: "chevronRight",
                  size: 12
                }),
                j("span", null, se(r), 1)
              ]))), 128))
            ])) : ue("", !0),
            n.value.table ? (S(), R("table", Fd, [
              j("thead", null, [
                j("tr", null, [
                  (S(!0), R(de, null, ke(n.value.table.headers, (r) => (S(), R("th", { key: r }, se(r), 1))), 128))
                ])
              ]),
              j("tbody", null, [
                (S(!0), R(de, null, ke(n.value.table.rows, (r, a) => (S(), R("tr", { key: a }, [
                  (S(!0), R(de, null, ke(r, (u, c) => (S(), R("td", { key: c }, se(u), 1))), 128))
                ]))), 128))
              ])
            ])) : ue("", !0),
            n.value.code ? (S(), R("pre", Ld, [
              j("code", null, se(n.value.code), 1)
            ])) : ue("", !0)
          ], 64)) : (S(), R("p", Id, "No help available for this node."))
        ];
      }),
      _: 1
    }, 8, ["open"]));
  }
}), Dd = /* @__PURE__ */ Le(Ad, [["__scopeId", "data-v-536c1547"]]);
let lo = null;
function kd(e) {
  if (lo) return;
  const t = document.createElement("div");
  t.id = "__fil_help_popup_host", document.body.appendChild(t), lo = Hs(Dd).use(Ws()), lo.mount(t), console.info("[FiL_Design_ImageMind] help popup mounted");
}
function Td() {
  var o, i, l, r, a, u, c, d;
  const e = globalThis, t = "FiL_Design_ImageMind.RunButton.AnimationDuration", n = ((r = (l = (i = (o = e.app) == null ? void 0 : o.extensionManager) == null ? void 0 : i.setting) == null ? void 0 : l.get) == null ? void 0 : r.call(l, t, "Normal")) ?? ((d = (c = (u = (a = globalThis.app) == null ? void 0 : a.ui) == null ? void 0 : u.settings) == null ? void 0 : c.getSettingValue) == null ? void 0 : d.call(c, t, "Normal")) ?? "Normal";
  return { Fast: 200, Normal: 400, Slow: 600 }[String(n)] || 400;
}
function Ed(e, t) {
  var u, c, d, f, p, h, g, b, _, y;
  if (!(((f = (d = (c = (u = globalThis.app) == null ? void 0 : u.extensionManager) == null ? void 0 : c.setting) == null ? void 0 : d.get) == null ? void 0 : f.call(d, "FiL_Design_ImageMind.RunButton.Enabled", !0)) ?? ((b = (g = (h = (p = globalThis.app) == null ? void 0 : p.ui) == null ? void 0 : h.settings) == null ? void 0 : g.getSettingValue) == null ? void 0 : b.call(g, "FiL_Design_ImageMind.RunButton.Enabled", !0)) ?? !0)) return;
  const o = (y = (_ = e == null ? void 0 : e.canvas) == null ? void 0 : _.nodeEls) == null ? void 0 : y[t];
  if (!o) return;
  const i = o.querySelector(".comfy-node-header");
  if (!i) return;
  const l = Td(), r = i.style.background, a = Math.max(60, l * 0.3);
  i.style.transition = `background ${a}ms ease`, i.style.background = "var(--fil-accent, #7c3aed)", setTimeout(() => {
    i.style.background = r;
  }, l);
}
function Pd(e) {
  const t = e == null ? void 0 : e.canvas;
  if (!(t != null && t.ds)) {
    console.warn("[FiL_Design_ImageMind] run button FX: canvas not available, skipping");
    return;
  }
  const n = t.ds.executeNode;
  typeof n == "function" ? (t.ds.executeNode = async function(s) {
    const o = await n.call(this, s);
    return (typeof s == "string" || typeof s == "number") && Ed({ canvas: t }, s), o;
  }, console.info("[FiL_Design_ImageMind] run button FX installed (execute hook)")) : console.warn("[FiL_Design_ImageMind] run button FX: executeNode not found, skipping");
}
const Rd = ["onMouseenter", "onMouseleave"], Od = { class: "fil-toast-text" }, Nd = ["onClick"], $d = ["aria-label", "onClick"], Vd = /* @__PURE__ */ Me({
  __name: "FilToastStack",
  setup(e) {
    const { t } = $t(), n = Rt(), { items: s } = Vu(n), o = /* @__PURE__ */ le(null), i = /* @__PURE__ */ new Map(), l = {
      info: "var(--fil-muted, #9ca8b5)",
      success: "var(--fil-ok, #62c987)",
      warning: "var(--fil-accent, #f08a45)",
      error: "var(--fil-danger, #ef6666)"
    };
    function r(f) {
      f.sticky || f.timeout <= 0 || i.set(
        f.id,
        setTimeout(() => n.dismiss(f.id), f.timeout)
      );
    }
    function a(f) {
      const p = i.get(f.id);
      p && (clearTimeout(p), i.delete(f.id));
    }
    function u(f) {
      !i.has(f.id) && !f.sticky && r(f);
    }
    function c(f) {
      n.dismiss(f.id);
    }
    const d = Y(() => s.value);
    return en(() => {
      for (const f of s.value) r(f);
    }), hn(() => {
      for (const f of i.values()) clearTimeout(f);
      i.clear();
    }), (f, p) => (S(), R("div", {
      ref_key: "root",
      ref: o,
      class: "fil-toast-stack",
      role: "status",
      "aria-live": "polite"
    }, [
      (S(!0), R(de, null, ke(d.value, (h) => (S(), R("div", {
        key: h.id,
        class: Fe(["fil-toast", `fil-toast-${h.level}`]),
        style: ze({ "--toast-color": l[h.level] }),
        onMouseenter: (g) => a(h),
        onMouseleave: (g) => u(h)
      }, [
        p[0] || (p[0] = j("span", {
          class: "fil-toast-dot",
          "aria-hidden": "true"
        }, null, -1)),
        j("span", Od, se(h.text), 1),
        h.action ? (S(), R("button", {
          key: 0,
          type: "button",
          class: "fil-toast-action",
          onClick: Ri((g) => {
            h.action.onClick(g), c(h);
          }, ["stop"])
        }, se(h.action.label), 9, Nd)) : ue("", !0),
        j("button", {
          type: "button",
          class: "fil-toast-close",
          "aria-label": F(t)("toast_close", "Close"),
          onClick: Ri((g) => c(h), ["stop"])
        }, " × ", 8, $d)
      ], 46, Rd))), 128))
    ], 512));
  }
}), Bd = /* @__PURE__ */ Le(Vd, [["__scopeId", "data-v-08cc58fa"]]);
let ro = null;
function Hd() {
  if (ro) return;
  const e = document.createElement("div");
  document.body.appendChild(e), ro = Hs(Bd).use(Ws()), ro.mount(e);
  const t = globalThis;
  Promise.resolve().then(() => od).then(({ toast: n }) => {
    t.__filToast = n, console.info("[FiL_Design_ImageMind] toast stack mounted");
  }).catch((n) => console.warn("[FiL_Design_ImageMind] toast store import failed:", n));
}
const Ud = "FiL_Design_ImageMind.Shortcuts.Enabled", jd = "__cheatsheet__", Wd = [
  "#comfy-search-input",
  'input[name="search"]',
  'input[aria-label="Search"]',
  "#search-input",
  'input[placeholder*="search" i]'
];
function zd(e) {
  if (!e || typeof e != "object") return !1;
  const t = String(e.tagName || "").toLowerCase();
  return t === "input" || t === "textarea" || t === "select" || e.isContentEditable === !0;
}
function Gd() {
  for (const e of Wd) {
    const t = document.querySelector(e);
    if (t) return t;
  }
  return null;
}
function Fo() {
  var t;
  const e = qn();
  e.ensureHelpDefaultsInjected(), (t = e.value_open) == null || t.call(e, jd);
}
function Ir() {
  const e = Gd();
  if (!e) {
    nt.info("ComfyUI search field not found");
    return;
  }
  try {
    e.focus(), "select" in e && e.select();
  } catch {
  }
}
function Kd(e) {
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
            function: Fo
          },
          {
            id: "FiL_Design_ImageMind.focusSearch",
            label: "FiL_Design_ImageMind — Focus add-node search",
            icon: "/",
            function: Ir
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
  window.addEventListener("keydown", (s) => qd(s, e), !0), console.info("[FiL_Design_ImageMind] shortcuts installed (fallback keydown handler)");
}
function qd(e, t) {
  var i, l, r, a, u, c, d, f, p;
  let n = !0;
  try {
    n = !!(((a = (r = (l = (i = globalThis.app) == null ? void 0 : i.extensionManager) == null ? void 0 : l.setting) == null ? void 0 : r.get) == null ? void 0 : a.call(r, Ud, !0)) ?? !0);
  } catch {
  }
  if (!n) return;
  const s = e.target, o = zd(s);
  if (e.key === "Escape") {
    try {
      const h = qn();
      (u = h.value_close) == null || u.call(h);
    } catch {
    }
    o && ((c = s.blur) == null || c.call(s)), (d = e.preventDefault) == null || d.call(e);
    return;
  }
  if (!o) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "K" || e.key === "k")) {
      Fo(), e.preventDefault();
      return;
    }
    if (e.key === "?" || e.shiftKey && e.key === "/") {
      if (e.shiftKey) Fo();
      else {
        const h = t.canvas, g = (h == null ? void 0 : h.selected_nodes) ?? {}, b = Object.values(g).filter(Boolean);
        if (b.length === 1) {
          const _ = ((f = b[0]) == null ? void 0 : f.comfyClass) ?? "default", y = qn();
          y.ensureHelpDefaultsInjected(), (p = y.value_open) == null || p.call(y, _);
        } else
          nt.info("Select exactly one FiL_Design_ImageMind node, then press ?");
      }
      e.preventDefault();
      return;
    }
    e.key === "/" && !e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey && (Ir(), e.preventDefault());
  }
}
function Xd(e) {
  Kd(e), console.info("[FiL_Design_ImageMind] shortcuts installed");
}
const Yd = 3e5, Jd = ["ollama", "lmstudio", "openai", "google", "groq", "openrouter", "cloudflare"], Fs = Jd, Ar = /* @__PURE__ */ zo("fil/providers", () => {
  const e = /* @__PURE__ */ le({}), t = /* @__PURE__ */ le({}), n = /* @__PURE__ */ le({}), s = /* @__PURE__ */ le({}), o = /* @__PURE__ */ le(null), i = Y(() => Object.fromEntries(
    Object.entries(e.value).filter(([, _]) => (_ == null ? void 0 : _.configured) || (_ == null ? void 0 : _.account_id) || (_ == null ? void 0 : _.base_url))
  ));
  async function l() {
    try {
      const _ = await zt.loadAccounts();
      e.value = _.accounts || {}, o.value = null;
    } catch (_) {
      o.value = _ instanceof Error ? _.message : String(_);
    }
  }
  async function r(_, y) {
    try {
      const A = await zt.saveAccounts({ [_]: y });
      e.value = A.accounts || {}, o.value = null, c(_, !0);
    } catch (A) {
      throw o.value = A instanceof Error ? A.message : String(A), A;
    }
  }
  async function a(_) {
    const y = await zt.saveAccounts({
      [_]: { delete: !0 }
    });
    e.value = y.accounts || {};
  }
  async function u(_) {
    await r(_, {});
    try {
      await a(_);
    } catch (y) {
      o.value = y instanceof Error ? y.message : String(y);
    }
  }
  async function c(_, y = !1) {
    const A = t.value[_];
    if (A && !y && !A.error && A.cachedAt > 0 && Date.now() - A.cachedAt < Yd)
      return A.list;
    A ? A.loading = !0 : t.value[_] = { list: [], visionModels: [], cachedAt: 0, loading: !0 };
    try {
      const w = await zt.loadModels(_, y), D = w.models || [];
      return t.value[_] = {
        list: D,
        visionModels: w.vision_models || [],
        cachedAt: Date.now(),
        loading: !1
      }, w.status && w.status !== "available" && (t.value[_].error = w.message || w.status), D;
    } catch (w) {
      const D = w instanceof Error ? w.message : String(w);
      throw t.value[_] = {
        list: [],
        visionModels: [],
        cachedAt: 0,
        loading: !1,
        error: D
      }, o.value = D, w;
    }
  }
  function d(_) {
    const y = t.value[_];
    if (!(y != null && y.cachedAt)) return null;
    const A = Date.now() - y.cachedAt, w = Math.floor(A / 1e3);
    return w < 60 ? `${w}s` : w < 3600 ? `${Math.floor(w / 60)}m` : `${Math.floor(w / 3600)}h`;
  }
  async function f(_, y = "") {
    try {
      const A = await zt.probe(_, y);
      return n.value[_] = A, A;
    } catch (A) {
      o.value = A instanceof Error ? A.message : String(A);
      return;
    }
  }
  async function p() {
    try {
      const _ = await zt.listProviders();
      s.value = _.providers || {};
    } catch {
    }
  }
  function h(_) {
    var y;
    return ((y = t.value[_]) == null ? void 0 : y.list) ?? [];
  }
  function g(_) {
    var y;
    return ((y = t.value[_]) == null ? void 0 : y.visionModels) ?? [];
  }
  function b(_) {
    var y;
    return !!((y = t.value[_]) != null && y.loading);
  }
  return {
    accounts: e,
    modelsByProvider: t,
    probeState: n,
    displayNames: s,
    lastError: o,
    configuredProviders: i,
    PROVIDER_LIST: Fs,
    loadAccounts: l,
    saveAccount: r,
    deleteAccount: u,
    deleteAccountRaw: a,
    loadModels: c,
    probe: f,
    loadDisplayNames: p,
    modelsFor: h,
    visionModelsFor: g,
    isLoading: b,
    cachedAgeLabel: d
  };
}), Qd = ["title", "disabled", "aria-disabled"], Zd = {
  key: 0,
  class: "fil-w-btn-spinner"
}, ef = ["innerHTML"], tf = { key: 2 }, nf = /* @__PURE__ */ Me({
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
    const n = e, s = Y(() => n.icon ? yr(n.icon) : ""), o = t, i = Y(() => [
      "fil-w-btn",
      n.variant === "accent" && "fil-w-btn-accent",
      n.variant === "danger" && "fil-w-btn-danger",
      n.variant === "icon" && "fil-w-btn-icon",
      n.variant === "full" && "fil-w-btn-full",
      n.variant === "sm" && "fil-w-btn-sm",
      n.flashing && "is-flashing",
      n.loading && "is-loading"
    ]), l = Y(() => n.disabled || n.loading);
    function r(a) {
      l.value || o("click", a);
    }
    return (a, u) => (S(), R("button", {
      class: Fe(i.value),
      title: e.title,
      disabled: l.value,
      "aria-disabled": l.value || void 0,
      onClick: r
    }, [
      e.loading ? (S(), R("span", Zd)) : ue("", !0),
      e.icon && !e.loading ? (S(), R("span", {
        key: 1,
        class: "fil-w-btn-glyph",
        innerHTML: s.value
      }, null, 8, ef)) : ue("", !0),
      e.label ? (S(), R("span", tf, se(e.loading ? "" : e.label), 1)) : ue("", !0)
    ], 10, Qd));
  }
}), ot = /* @__PURE__ */ Le(nf, [["__scopeId", "data-v-1fbb19ef"]]), Dr = {
  ollama: "Ollama",
  lmstudio: "LM Studio",
  openai: "OpenAI",
  groq: "Groq",
  google: "Google AI",
  openrouter: "OpenRouter",
  cloudflare: "Cloudflare"
}, kr = {
  ollama: "provider-ollama",
  lmstudio: "provider-lmstudio",
  openai: "provider-openai",
  groq: "provider-groq",
  google: "provider-google",
  openrouter: "provider-openrouter",
  cloudflare: "provider-cloudflare"
}, sf = { class: "fil-pm-root" }, of = { class: "fil-pm-header" }, lf = { class: "fil-pm-icon" }, rf = { class: "fil-pm-name" }, af = {
  key: 0,
  class: "fil-pm-disp"
}, cf = { class: "fil-pm-fields" }, uf = { class: "fil-pm-field" }, df = ["onUpdate:modelValue", "placeholder", "onKeydown"], ff = { class: "fil-pm-field" }, pf = ["onUpdate:modelValue", "onKeydown"], mf = {
  key: 0,
  class: "fil-pm-field"
}, hf = ["onUpdate:modelValue", "onKeydown"], gf = { class: "fil-pm-actions" }, _f = {
  key: 0,
  class: "fil-pm-age"
}, vf = {
  key: 0,
  class: "fil-pm-err"
}, bf = {
  key: 1,
  class: "fil-pm-err"
}, yf = {
  key: 2,
  class: "fil-pm-models"
}, wf = {
  key: 0,
  class: "fil-pm-vision-badge",
  title: "Vision-capable"
}, xf = {
  key: 3,
  class: "fil-pm-err fil-pm-global-err"
}, Sf = /* @__PURE__ */ Me({
  __name: "ProviderManager",
  setup(e) {
    const t = Ar(), n = /* @__PURE__ */ le({}), s = /* @__PURE__ */ le({}), o = /* @__PURE__ */ le({}), i = /* @__PURE__ */ le({});
    en(async () => {
      await Promise.all([t.loadAccounts(), t.loadDisplayNames()]);
      for (const g of Fs) {
        const b = t.accounts[g];
        n.value[g] = {
          // Stored keys are never echoed back by GET /fil_design_imagemind/auth (write-only
          // by the security contract) — the field always starts empty and the
          // `configured` flag drives the "a key is saved" UI state instead.
          key: "",
          base_url: (b == null ? void 0 : b.base_url) ?? "",
          account_id: (b == null ? void 0 : b.account_id) ?? ""
        };
      }
    });
    const l = Dr, r = kr;
    function a(g) {
      return { "fil-pm-has-val": g.length > 0 };
    }
    function u(g) {
      return g === "cloudflare";
    }
    async function c(g) {
      const b = n.value[g];
      await t.saveAccount(g, {
        key: b.key || null,
        base_url: b.base_url || null,
        account_id: b.account_id || null
      }), b.key = "";
    }
    async function d(g) {
      n.value[g] = { key: "", base_url: "", account_id: "" }, await t.deleteAccount(g);
    }
    async function f(g) {
      s.value[g] = !0, o.value[g] = !1;
      try {
        const b = await t.probe(g, "");
        o.value[g] = (b == null ? void 0 : b.status) === "available";
      } finally {
        s.value[g] = !1;
      }
    }
    async function p(g) {
      i.value[g] = !0;
      try {
        await t.loadModels(g, !0);
      } finally {
        i.value[g] = !1;
      }
    }
    const h = (g) => {
      const b = n.value[g], _ = t.accounts[g];
      return b.key !== "" ? !0 : b.base_url !== ((_ == null ? void 0 : _.base_url) ?? "") || b.account_id !== ((_ == null ? void 0 : _.account_id) ?? "");
    };
    return (g, b) => (S(), R("div", sf, [
      (S(!0), R(de, null, ke(F(Fs), (_) => {
        var y, A, w, D, ce, k;
        return S(), R("div", {
          key: _,
          class: "fil-pm-card"
        }, [
          j("div", of, [
            j("span", lf, [
              J(fn, {
                name: F(r)[_],
                size: 20
              }, null, 8, ["name"])
            ]),
            j("span", rf, se(F(l)[_]), 1),
            F(t).displayNames[_] ? (S(), R("span", af, "(" + se(F(t).displayNames[_]) + ")", 1)) : ue("", !0)
          ]),
          j("div", cf, [
            j("label", uf, [
              b[0] || (b[0] = j("span", { class: "fil-pm-field-label" }, "API Key", -1)),
              Ke(j("input", {
                "onUpdate:modelValue": (L) => n.value[_].key = L,
                type: "password",
                class: Fe(["fil-pm-input", a(n.value[_].key)]),
                placeholder: (y = F(t).accounts[_]) != null && y.configured ? "•••••••• (saved)" : "sk-...",
                onKeydown: fs((L) => c(_), ["enter"])
              }, null, 42, df), [
                [_t, n.value[_].key]
              ])
            ]),
            j("label", ff, [
              b[1] || (b[1] = j("span", { class: "fil-pm-field-label" }, "Base URL", -1)),
              Ke(j("input", {
                "onUpdate:modelValue": (L) => n.value[_].base_url = L,
                type: "text",
                class: Fe(["fil-pm-input", a(n.value[_].base_url)]),
                placeholder: "http://localhost:11434",
                onKeydown: fs((L) => c(_), ["enter"])
              }, null, 42, pf), [
                [_t, n.value[_].base_url]
              ])
            ]),
            u(_) ? (S(), R("label", mf, [
              b[2] || (b[2] = j("span", { class: "fil-pm-field-label" }, "Account ID", -1)),
              Ke(j("input", {
                "onUpdate:modelValue": (L) => n.value[_].account_id = L,
                type: "text",
                class: Fe(["fil-pm-input", a(n.value[_].account_id)]),
                onKeydown: fs((L) => c(_), ["enter"])
              }, null, 42, hf), [
                [_t, n.value[_].account_id]
              ])
            ])) : ue("", !0)
          ]),
          j("div", gf, [
            J(ot, {
              variant: "accent",
              label: h(_) ? "Save" : "Saved",
              disabled: !h(_),
              onClick: (L) => c(_)
            }, null, 8, ["label", "disabled", "onClick"]),
            !h(_) && F(t).cachedAgeLabel(_) ? (S(), R("span", _f, se(F(t).cachedAgeLabel(_)) + " ago ", 1)) : ue("", !0),
            J(ot, {
              variant: "danger",
              label: "Delete",
              disabled: !((A = F(t).accounts[_]) != null && A.configured) && !((w = F(t).accounts[_]) != null && w.base_url),
              onClick: (L) => d(_)
            }, null, 8, ["disabled", "onClick"]),
            J(ot, {
              variant: "standard",
              label: "Probe",
              loading: s.value[_],
              flashing: o.value[_],
              disabled: !((D = F(t).accounts[_]) != null && D.local) && !((ce = F(t).accounts[_]) != null && ce.configured) && !n.value[_].key && !n.value[_].base_url,
              onClick: (L) => f(_)
            }, null, 8, ["loading", "flashing", "disabled", "onClick"]),
            J(ot, {
              variant: "standard",
              label: "Load Models",
              loading: i.value[_],
              onClick: (L) => p(_)
            }, null, 8, ["loading", "onClick"])
          ]),
          (k = F(t).modelsByProvider[_]) != null && k.error ? (S(), R("div", vf, se(F(t).modelsByProvider[_].error), 1)) : ue("", !0),
          F(t).probeState[_] && F(t).probeState[_].status !== "available" ? (S(), R("div", bf, se(F(t).probeState[_].message), 1)) : ue("", !0),
          F(t).modelsFor(_).length > 0 ? (S(), R("div", yf, [
            (S(!0), R(de, null, ke(F(t).modelsFor(_), (L) => (S(), R("span", {
              class: "fil-pm-model-tag",
              key: L
            }, [
              lr(se(L) + " ", 1),
              F(t).visionModelsFor(_).includes(L) ? (S(), R("span", wf, "👁")) : ue("", !0)
            ]))), 128))
          ])) : ue("", !0),
          F(t).lastError ? (S(), R("div", xf, se(F(t).lastError), 1)) : ue("", !0)
        ]);
      }), 128))
    ]));
  }
}), Cf = /* @__PURE__ */ Le(Sf, [["__scopeId", "data-v-0de4d738"]]);
let ao = null;
function Mf(e) {
  ao || (ao = Hs(Cf).use(Ws()), ao.mount(e), console.info("[FiL_Design_ImageMind] provider manager mounted"));
}
function Ff(e) {
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
    render: (n) => Mf(n)
  }), console.info("[FiL_Design_ImageMind] provider manager sidebar tab registered");
}
const Lf = [
  {
    id: "FiL_Design_ImageMind.NodeTitles.AdaptiveColor",
    name: "Adaptive title text color",
    type: "boolean",
    defaultValue: !0,
    category: ["FiL_Design_ImageMind", "Node titles"],
    tooltip: "Compute node title text color (white/dark) from the title bar color via YIQ luminance."
  }
], If = [
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
], Af = [
  {
    id: "FiL_Design_ImageMind.ConnectionFX.Enabled",
    name: "Connection wire effects",
    type: "boolean",
    defaultValue: !1,
    tooltip: "Accent-radial-gradient overlay near the cursor while dragging a wire.",
    category: ["FiL_Design_ImageMind", "Connection FX", "Enabled"]
  }
], Df = [
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
], kf = [
  {
    id: "FiL_Design_ImageMind.Shortcuts.Enabled",
    name: "Keyboard shortcuts",
    type: "boolean",
    defaultValue: !0,
    tooltip: "Esc — close popup / unfocus field. ? — help for the selected FiL_Design_ImageMind node. Shift+? or Ctrl+Shift+K — full shortcuts cheatsheet. / — focus node search.",
    category: ["FiL_Design_ImageMind", "Shortcuts"]
  }
], Tf = [
  {
    id: "FiL_Design_ImageMind.Language",
    name: "Language",
    type: "combo",
    defaultValue: "en",
    options: ["en", "ru"],
    tooltip: "UI language for FiL_Design_ImageMind node tooltips and labels (English / Russian).",
    category: ["FiL_Design_ImageMind", "Language"]
  }
], Tr = {
  Default: "default",
  Cyberpunk: "cyberpunk",
  Fallout: "fallout"
};
function Ef(e) {
  const t = Tr[String(e)] ?? "default";
  mr(t);
  const n = globalThis.app;
  n && Eu(n);
}
const Pf = [
  {
    id: "FiL_Design_ImageMind.Theme",
    name: "Node theme",
    type: "combo",
    defaultValue: "Default",
    options: ["Default", "Cyberpunk", "Fallout"],
    category: ["FiL_Design_ImageMind", "Appearance", "Theme"],
    tooltip: "Recolors every FiL_Design_ImageMind node panel and adds a small themed flourish (neon glow for Cyberpunk, a CRT scanline texture for Fallout). Applies instantly, no reload.",
    onChange: Ef
  }
];
function Rf(e) {
  const t = e("FiL_Design_ImageMind.Theme", "Default");
  mr(Tr[t] ?? "default");
}
const Of = [
  ...Lf,
  ...If,
  ...Af,
  ...Df,
  ...kf,
  ...Tf,
  ...Pf
];
function Ki(e, t, n, s) {
  const o = s.nodeState.mode ?? s.nodeState.seed_mode ?? "random", i = s.nodeState.seed ?? 0, l = o === "random" ? Math.floor(Math.random() * 4294967295) : Number(i) || 0;
  if (s.lastRunSeed = l, !(typeof e != "object" || e === null))
    for (const [r, a] of Object.entries(e)) {
      const u = a;
      if (u.class_type === t && u.inputs && Number(r) === n) {
        u.inputs.seed = l;
        break;
      }
    }
}
function Nf(e) {
  var t, n;
  try {
    const s = globalThis.app, o = ((t = s == null ? void 0 : s.graph) == null ? void 0 : t._nodes) ?? [];
    for (const i of o) {
      const l = i;
      if (l.comfyClass === "FiLSeed" && l._filSeedState) {
        Ki(e, "FiLSeed", l.id, l._filSeedState);
        continue;
      }
      if (l.comfyClass === "FiLOpticScanner") {
        l._filScannerSeedState && Ki(e, "FiLOpticScanner", l.id, l._filScannerSeedState);
        const r = (n = l.inputs) == null ? void 0 : n.find((a) => a.name === "config");
        (!r || r.link == null) && console.warn(`${Qt} Optic Scanner #${l.id} has no Provider Loader wired to its "config" slot — execution will fail.`);
      }
    }
  } catch (s) {
    console.warn(`${Qt} preflight fallback:`, s);
  }
  return e;
}
function $f(e) {
  return {
    name: Wu,
    // Declarative settings — registered BEFORE setup so the panel renders
    // even if a later installer throws.
    settings: Of,
    async setup() {
      const t = [
        () => kd(),
        () => Pd(e),
        () => Hd(),
        () => Xd(e),
        () => Ff(e),
        () => Rf((n, s) => Cr(n, s, e))
      ];
      for (const n of t)
        try {
          n();
        } catch (s) {
          console.warn(`${Qt} installer ${n.name || "anonymous"} failed:`, s);
        }
    },
    getCustomWidgets(t) {
      const n = t;
      return n.widgets = n.widgets || {}, n.widgets.fil_compare = { serialize: !1 }, n.widgets;
    },
    async beforeRegisterNodeDef(t, n) {
      const s = Fr[n.name];
      if (s)
        try {
          await s.register(t, n);
        } catch (o) {
          console.warn(`${Qt} failed to register "${n.name}":`, o);
        }
    },
    async graphToPrompt(t) {
      return Nf(t);
    }
  };
}
async function Vf() {
  if (typeof fetch > "u") return;
  let e;
  try {
    e = await fetch(`${Et}/node_contracts`);
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
  const n = new Set(Object.keys(t.node_ids ?? {})), s = new Set(Object.keys(Fr));
  for (const o of n)
    s.has(o) || console.warn(`${Qt} server expects "${o}" but local JS does not register it`);
  for (const o of s)
    n.has(o) || console.warn(`${Qt} JS registers "${o}" but server does not expose a contract`);
}
Su();
Bu();
Vf().catch((e) => {
  console.warn("[FiL_Design_ImageMind] contract self-check failed:", e);
});
const Er = $f(Xi);
Xi.registerExtension(Er);
console.info(`[FiL_Design_ImageMind] extension registered as "${Er.name}"`);
const Bf = {
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
}, Hf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HELP_DEFAULTS: Bf
}, Symbol.toStringTag, { value: "Module" })), Uf = ["data-ok", "data-err"], jf = /* @__PURE__ */ Me({
  __name: "FilInfo",
  props: {
    text: {},
    ok: { type: Boolean },
    err: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (S(), R("div", {
      class: "fil-w-info",
      "data-ok": e.ok || void 0,
      "data-err": e.err || void 0
    }, se(e.text), 9, Uf));
  }
}), ps = /* @__PURE__ */ Le(jf, [["__scopeId", "data-v-851660c1"]]), Wf = { class: "fil-seed-root" }, zf = ["title"], Gf = ["readonly"], Kf = { class: "fil-seed-actions" }, qf = /* @__PURE__ */ Me({
  __name: "Seed",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = $t(), s = Y({
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
        nt.warning("No last-run seed recorded yet");
        return;
      }
      o.value = t.state.lastRunSeed, s.value = "fixed";
    }
    function r() {
      const u = Math.floor(Math.random() * 1e9) & 2147483647;
      o.value = u, s.value = "fixed";
    }
    const a = Y(() => s.value === "fixed" ? `${o.value}` : "random");
    return (u, c) => (S(), R("div", Wf, [
      j("div", {
        class: "fil-seed-readout",
        title: s.value === "fixed" ? F(n)("sd_locked", "Locked seed") : F(n)("sd_auto_random", "Auto-random")
      }, [
        Ke(j("input", {
          "onUpdate:modelValue": c[0] || (c[0] = (d) => a.value = d),
          type: "text",
          class: "fil-seed-display",
          readonly: s.value === "random",
          "aria-label": "Seed value"
        }, null, 8, Gf), [
          [_t, a.value]
        ]),
        s.value === "random" && t.state.lastRunSeed != null ? (S(), Ie(ps, {
          key: 0,
          text: `Last run: ${t.state.lastRunSeed}`
        }, null, 8, ["text"])) : ue("", !0)
      ], 8, zf),
      j("div", Kf, [
        J(ot, {
          label: F(n)("sd_random_label", "🔀 Random"),
          variant: "standard",
          title: F(n)("sd_mode", "Random generates a new seed each run."),
          onClick: i
        }, null, 8, ["label", "title"]),
        J(ot, {
          label: F(n)("sd_btn_use_last", "♻️ Use last"),
          variant: "standard",
          title: F(n)("sd_use_last", "Reuse the seed from the last executed run."),
          onClick: l
        }, null, 8, ["label", "title"]),
        J(ot, {
          label: F(n)("sd_btn_new_fixed", "🎲 New fixed"),
          variant: "accent",
          title: F(n)("sd_new_fixed", "Generate a new random fixed seed."),
          onClick: r
        }, null, 8, ["label", "title"])
      ])
    ]));
  }
}), Xf = /* @__PURE__ */ Le(qf, [["__scopeId", "data-v-2d71e72f"]]), Yf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xf
}, Symbol.toStringTag, { value: "Module" })), Jf = ["title"], Qf = {
  key: 0,
  class: "fil-combo-label"
}, Zf = ["disabled", "aria-expanded"], ep = { class: "fil-combo-trigger-label" }, tp = {
  key: 1,
  class: "fil-combo-badge"
}, np = ["placeholder"], sp = { class: "fil-combo-list" }, op = ["aria-selected", "onMouseenter", "onClick"], ip = { class: "fil-combo-option-label" }, lp = {
  key: 1,
  class: "fil-combo-badge"
}, rp = {
  key: 0,
  class: "fil-combo-empty"
}, ap = /* @__PURE__ */ Me({
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
    const n = e, s = t, o = /* @__PURE__ */ le(!1), i = /* @__PURE__ */ le(""), l = /* @__PURE__ */ le(0), r = /* @__PURE__ */ le(null), a = /* @__PURE__ */ le(null), u = /* @__PURE__ */ le(null), c = /* @__PURE__ */ le({}), d = Y(() => n.options.find((k) => k.value === n.modelValue)), f = Y(() => {
      if (!n.searchable || !i.value.trim()) return n.options;
      const k = i.value.trim().toLowerCase();
      return n.options.filter((L) => (L.label ?? L.value).toLowerCase().includes(k));
    });
    function p(k) {
      return k.label ?? k.value;
    }
    function h() {
      const k = r.value;
      if (!k) return;
      const L = k.getBoundingClientRect(), M = window.innerHeight, K = 260, O = M - L.bottom, C = O < K && L.top > O;
      c.value = {
        left: `${L.left}px`,
        width: `${L.width}px`,
        ...C ? { bottom: `${M - L.top + 4}px` } : { top: `${L.bottom + 4}px` }
      };
    }
    function g(k) {
      var M;
      const L = k.target;
      L instanceof Element && ((M = a.value) != null && M.contains(L)) || _();
    }
    function b() {
      n.disabled || (o.value = !0, i.value = "", l.value = Math.max(
        0,
        f.value.findIndex((k) => k.value === n.modelValue)
      ), Qn(() => {
        var k;
        h(), n.searchable && ((k = u.value) == null || k.focus()), window.addEventListener("resize", g), window.addEventListener("scroll", g, !0), document.addEventListener("mousedown", y, !0);
      }));
    }
    function _() {
      o.value && (o.value = !1, window.removeEventListener("resize", g), window.removeEventListener("scroll", g, !0), document.removeEventListener("mousedown", y, !0));
    }
    function y(k) {
      var M, K;
      const L = k.target;
      (M = r.value) != null && M.contains(L) || (K = a.value) != null && K.contains(L) || _();
    }
    function A() {
      o.value ? _() : b();
    }
    function w(k) {
      var L;
      s("update:modelValue", k.value), _(), (L = r.value) == null || L.focus();
    }
    function D(k) {
      if (!n.disabled) {
        if (!o.value && (k.key === "ArrowDown" || k.key === "ArrowUp" || k.key === "Enter" || k.key === " ")) {
          k.preventDefault(), b();
          return;
        }
        o.value && ce(k);
      }
    }
    function ce(k) {
      var M;
      const L = f.value;
      if (k.key === "ArrowDown")
        k.preventDefault(), l.value = L.length ? (l.value + 1) % L.length : 0;
      else if (k.key === "ArrowUp")
        k.preventDefault(), l.value = L.length ? (l.value - 1 + L.length) % L.length : 0;
      else if (k.key === "Enter") {
        k.preventDefault();
        const K = L[l.value];
        K && w(K);
      } else k.key === "Escape" && (k.preventDefault(), _(), (M = r.value) == null || M.focus());
    }
    return He(i, () => {
      l.value = 0;
    }), hn(() => {
      window.removeEventListener("resize", g), window.removeEventListener("scroll", g, !0), document.removeEventListener("mousedown", y, !0);
    }), (k, L) => {
      var M, K;
      return S(), R("div", {
        class: "fil-combo",
        title: e.title
      }, [
        e.label ? (S(), R("label", Qf, se(e.label), 1)) : ue("", !0),
        j("button", {
          ref_key: "triggerRef",
          ref: r,
          type: "button",
          class: Fe(["fil-combo-trigger", { open: o.value, disabled: e.disabled }]),
          disabled: e.disabled,
          "aria-expanded": o.value,
          "aria-haspopup": "listbox",
          onClick: A,
          onKeydown: D
        }, [
          (M = d.value) != null && M.icon ? (S(), Ie(fn, {
            key: 0,
            name: d.value.icon,
            size: 16
          }, null, 8, ["name"])) : ue("", !0),
          j("span", ep, se(d.value ? p(d.value) : e.modelValue), 1),
          (K = d.value) != null && K.badge ? (S(), R("span", tp, se(d.value.badge), 1)) : ue("", !0),
          L[1] || (L[1] = j("span", { class: "fil-combo-chevron" }, "▾", -1))
        ], 42, Zf),
        (S(), Ie(El, { to: "body" }, [
          o.value ? (S(), R("div", {
            key: 0,
            ref_key: "panelRef",
            ref: a,
            class: "fil-combo-panel",
            style: ze(c.value),
            role: "listbox",
            onKeydown: ce
          }, [
            e.searchable ? Ke((S(), R("input", {
              key: 0,
              ref_key: "searchRef",
              ref: u,
              "onUpdate:modelValue": L[0] || (L[0] = (O) => i.value = O),
              type: "search",
              class: "fil-combo-search",
              placeholder: e.placeholder,
              spellcheck: "false"
            }, null, 8, np)), [
              [_t, i.value]
            ]) : ue("", !0),
            j("div", sp, [
              (S(!0), R(de, null, ke(f.value, (O, C) => (S(), R("button", {
                key: O.value,
                type: "button",
                class: Fe(["fil-combo-option", { active: C === l.value, selected: O.value === e.modelValue }]),
                role: "option",
                "aria-selected": O.value === e.modelValue,
                onMouseenter: (U) => l.value = C,
                onClick: (U) => w(O)
              }, [
                O.icon ? (S(), Ie(fn, {
                  key: 0,
                  name: O.icon,
                  size: 16
                }, null, 8, ["name"])) : ue("", !0),
                j("span", ip, se(p(O)), 1),
                O.badge ? (S(), R("span", lp, se(O.badge), 1)) : ue("", !0)
              ], 42, op))), 128)),
              f.value.length === 0 ? (S(), R("div", rp, "No matches")) : ue("", !0)
            ])
          ], 36)) : ue("", !0)
        ]))
      ], 8, Jf);
    };
  }
}), Lo = /* @__PURE__ */ Le(ap, [["__scopeId", "data-v-39d4212e"]]), cp = ["disabled", "min", "max", "step", "aria-label"], up = /* @__PURE__ */ Me({
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
    const n = e, s = t, o = Y(() => n.modelValue), i = /* @__PURE__ */ le(a(o.value));
    He(o, (g) => {
      l.value || (i.value = a(g));
    });
    let l = /* @__PURE__ */ le(!1), r = null;
    function a(g) {
      return Number.isFinite(g) ? String(g) : "";
    }
    function u(g) {
      const b = (g || "").trim();
      if (b === "" || !/^[0-9+\-*/(). ]+$/.test(b.replace(/\^/g, "**"))) return null;
      try {
        const _ = new Function(`"use strict"; return (${b});`), y = Number(_());
        return Number.isFinite(y) ? y : null;
      } catch {
        return null;
      }
    }
    function c(g) {
      if (g === null) {
        i.value = a(o.value);
        return;
      }
      let b = g;
      n.min != null && b < n.min && (b = n.min), n.max != null && b > n.max && (b = n.max), b !== o.value && s("update:modelValue", b), i.value = a(b);
    }
    function d() {
      l.value = !0, r = i.value;
    }
    function f() {
      l.value = !1, c(u(i.value)), r = null;
    }
    function p(g) {
      g.key === "Enter" ? (g.preventDefault(), c(u(i.value)), g.target.blur()) : g.key === "Escape" ? (g.preventDefault(), r !== null && (i.value = r), g.target.blur()) : g.key === "ArrowUp" ? (g.preventDefault(), h(g.shiftKey ? 10 : 1)) : g.key === "ArrowDown" && (g.preventDefault(), h(g.shiftKey ? -10 : -1));
    }
    function h(g) {
      let b = o.value + g * (n.step || 1);
      n.min != null && b < n.min && (b = n.min), n.max != null && b > n.max && (b = n.max), s("update:modelValue", b), i.value = a(b);
    }
    return (g, b) => Ke((S(), R("input", {
      "onUpdate:modelValue": b[0] || (b[0] = (_) => i.value = _),
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
    }, null, 40, cp)), [
      [_t, i.value]
    ]);
  }
}), An = /* @__PURE__ */ Le(up, [["__scopeId", "data-v-b9154493"]]), dp = ["title"], fp = {
  key: 0,
  class: "fil-w-slider-label"
}, pp = { class: "fil-w-slider-row" }, mp = ["value", "min", "max", "step", "disabled", "aria-label"], hp = /* @__PURE__ */ Me({
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
      let r = n.modelValue;
      return r < n.min && (r = n.min), r > n.max && (r = n.max), r;
    });
    function i(r) {
      const a = Number(r.target.value);
      s("update:modelValue", a);
    }
    function l(r) {
      s("update:modelValue", r);
    }
    return (r, a) => (S(), R("div", {
      class: "fil-w-slider",
      title: e.title
    }, [
      e.label ? (S(), R("label", fp, se(e.label), 1)) : ue("", !0),
      j("div", pp, [
        j("input", {
          type: "range",
          class: "fil-w-slider-range",
          value: o.value,
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label,
          onInput: i
        }, null, 40, mp),
        J(An, {
          "model-value": o.value,
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label,
          "onUpdate:modelValue": l
        }, null, 8, ["model-value", "min", "max", "step", "disabled", "aria-label"])
      ])
    ], 8, dp));
  }
}), Lt = /* @__PURE__ */ Le(hp, [["__scopeId", "data-v-b98a8a08"]]), gp = { class: "fil-provider-root" }, _p = { class: "fil-w-label" }, vp = { class: "fil-w-label" }, bp = { class: "fil-provider-row" }, yp = {
  key: 0,
  class: "fil-model-filter-bar"
}, wp = { class: "fil-model-filter-wrap" }, xp = ["placeholder"], Sp = { class: "fil-model-count" }, Cp = 3e5, Mp = /* @__PURE__ */ Me({
  __name: "ProviderLoader",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, n = Ar(), { t: s } = $t(), o = /* @__PURE__ */ le("");
    function i(O, C) {
      return {
        get: () => t.state.nodeState[O] ?? C,
        set: (U) => {
          t.state.nodeState[O] = U;
        }
      };
    }
    const l = Y(() => String(i("provider", "ollama").get()));
    function r(O) {
      i("provider", "ollama").set(O), o.value = "";
      const C = n.modelsFor(O);
      C.length ? (u(C[0]), M(), n.loadModels(O)) : (h.nodeState.model = "(loading...)", K());
    }
    const a = Y(() => String(i("model", "(loading...)").get()));
    function u(O) {
      i("model", "(loading...)").set(O);
    }
    const c = Y(() => Number(i("temperature", 0.7).get())), d = Y(() => Number(i("max_tokens", 0).get())), f = Y(() => Number(i("rate_limit_ms", 100).get())), p = Y(() => Number(i("max_image_side", 1024).get())), h = t.state, g = Y(() => {
      const O = n.modelsFor(l.value);
      return O.length ? O : ["(no models)"];
    }), b = Y(() => n.modelsFor(l.value).length > 0), _ = Y(() => {
      const O = g.value;
      if (!o.value || !b.value) return O;
      const C = o.value.toLowerCase();
      return O.filter((U) => U.toLowerCase().includes(C));
    }), y = Y(() => {
      if (!b.value) return "";
      const O = n.modelsFor(l.value).length, C = _.value.length;
      return C === O ? `${O}` : `${C} of ${O}`;
    }), A = Y(
      () => Fs.map((O) => ({ value: O, label: Dr[O] ?? O, icon: kr[O] }))
    ), w = Y(() => {
      const O = n.visionModelsFor(l.value);
      return _.value.map((C) => ({
        value: C,
        badge: O.includes(C) ? "👁" : void 0
      }));
    }), D = Y(() => n.isLoading(l.value)), ce = Y(() => n.probeState[l.value]), k = Y(() => n.cachedAgeLabel(l.value));
    let L = null;
    He(() => t.state.nodeState, () => {
    }, { deep: !0 });
    function M() {
      const O = t.state.node;
      if (!O) return;
      const C = me(O, "model");
      if (!C) return;
      const U = n.modelsFor(l.value), X = U.length ? U : ["(no models)"];
      C.options && (C.options.values = X);
    }
    async function K() {
      try {
        await n.loadModels(l.value, !0);
        const O = n.modelsFor(l.value);
        u(O[0] ?? "(no models)"), M();
      } catch (O) {
        nt.error(O instanceof Error ? O.message : String(O));
      }
    }
    return en(async () => {
      n.loadDisplayNames();
      const O = n.modelsFor(l.value);
      if (O.length)
        a.value === "(loading...)" && u(O[0] ?? "(no models)"), M(), n.loadModels(l.value);
      else
        try {
          await n.loadModels(l.value);
          const C = n.modelsFor(l.value);
          a.value === "(loading...)" && u(C[0] ?? "(no models)"), M();
        } catch (C) {
          nt.error(C instanceof Error ? C.message : String(C));
        }
      L = setInterval(() => {
        n.loadModels(l.value, !0);
      }, Cp);
    }), Ns(() => {
      L && clearInterval(L);
    }), (O, C) => (S(), R("div", gp, [
      j("label", _p, se(F(s)("lbl_provider", "🔌 Provider")), 1),
      J(Lo, {
        options: A.value,
        "model-value": l.value,
        title: F(s)("tt_provider", "LLM provider to use — local (Ollama, LM Studio) or cloud."),
        "onUpdate:modelValue": r
      }, null, 8, ["options", "model-value", "title"]),
      j("label", vp, se(F(s)("lbl_model", "🧠 Model")), 1),
      j("div", bp, [
        J(Lo, {
          options: w.value,
          "model-value": a.value,
          title: F(s)("tt_model", "Choose which model to use. If the list is empty, refresh it or check the provider account."),
          "onUpdate:modelValue": u
        }, null, 8, ["options", "model-value", "title"]),
        J(ot, {
          label: "↻",
          title: F(s)("tt_refresh", "Reload the model list. Use after adding a new model or API key."),
          disabled: D.value || F(h).ui.refreshing === !0,
          onClick: K
        }, null, 8, ["title", "disabled"])
      ]),
      b.value ? (S(), R("div", yp, [
        j("div", wp, [
          Ke(j("input", {
            "onUpdate:modelValue": C[0] || (C[0] = (U) => o.value = U),
            type: "text",
            class: "fil-model-filter",
            placeholder: F(s)("prov_search_models", "Search models…")
          }, null, 8, xp), [
            [_t, o.value]
          ])
        ]),
        j("span", Sp, se(y.value), 1)
      ])) : ue("", !0),
      D.value ? (S(), Ie(ps, {
        key: 1,
        text: F(s)("prov_loading_models", "Loading models…")
      }, null, 8, ["text"])) : ce.value && ce.value.status && ce.value.status !== "available" ? (S(), Ie(ps, {
        key: 2,
        err: !0,
        text: ce.value.message || ce.value.status
      }, null, 8, ["text"])) : k.value ? (S(), Ie(ps, {
        key: 3,
        text: `${F(s)("prov_models_updated", "Models updated")}: ${k.value}`
      }, null, 8, ["text"])) : ue("", !0),
      J(Lt, {
        "model-value": c.value,
        min: 0,
        max: 2,
        step: 0.05,
        label: F(s)("lbl_temperature", "🌡️ Temperature"),
        title: F(s)("tt_temperature", "Sampling temperature — higher is more creative, lower is more deterministic."),
        "onUpdate:modelValue": C[1] || (C[1] = (U) => F(h).nodeState.temperature = U)
      }, null, 8, ["model-value", "label", "title"]),
      J(Lt, {
        "model-value": d.value,
        min: 0,
        max: 65536,
        step: 1,
        label: F(s)("lbl_max_tokens", "🔢 Max tokens (0 = no limit)"),
        title: F(s)("tt_provider_max_tokens", "Maximum tokens in the response. 0 = provider default (no explicit limit)."),
        "onUpdate:modelValue": C[2] || (C[2] = (U) => F(h).nodeState.max_tokens = U)
      }, null, 8, ["model-value", "label", "title"]),
      J(Lt, {
        "model-value": f.value,
        min: 0,
        max: 5e3,
        step: 10,
        label: F(s)("lbl_rate_limit", "⏱️ Rate limit (ms)"),
        title: F(s)("tt_rate_limit", "Minimum delay between requests to this provider, to avoid rate limiting."),
        "onUpdate:modelValue": C[3] || (C[3] = (U) => F(h).nodeState.rate_limit_ms = U)
      }, null, 8, ["model-value", "label", "title"]),
      J(Lt, {
        "model-value": p.value,
        min: 128,
        max: 4096,
        step: 64,
        label: F(s)("lbl_max_image_side", "🖼️ Max image side"),
        title: F(s)("tt_max_image_side", "Images are downscaled so their longest side does not exceed this value."),
        "onUpdate:modelValue": C[4] || (C[4] = (U) => F(h).nodeState.max_image_side = U)
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), Fp = /* @__PURE__ */ Le(Mp, [["__scopeId", "data-v-284b2222"]]), Lp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fp
}, Symbol.toStringTag, { value: "Module" })), Ip = ["aria-checked", "disabled", "title", "onClick"], Ap = /* @__PURE__ */ Me({
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
    return (l, r) => (S(), R("div", {
      class: "fil-w-chips",
      style: ze(o.value),
      role: "radiogroup"
    }, [
      (S(!0), R(de, null, ke(e.options, (a) => (S(), R("button", {
        key: a,
        type: "button",
        role: "radio",
        class: Fe(["fil-w-chip", { active: a === e.modelValue, disabled: e.disabled }]),
        "aria-checked": a === e.modelValue,
        disabled: e.disabled,
        title: a,
        onClick: (u) => i(a)
      }, se(a), 11, Ip))), 128))
    ], 4));
  }
}), qi = /* @__PURE__ */ Le(Ap, [["__scopeId", "data-v-3c07d909"]]), Dp = { class: "fil-w-chiplist" }, kp = ["placeholder", "aria-label", "disabled"], Tp = {
  class: "fil-w-chip-scroll",
  role: "radiogroup"
}, Ep = ["aria-checked", "disabled", "title", "onClick"], Pp = {
  key: 0,
  class: "fil-w-chip-empty"
}, Rp = /* @__PURE__ */ Me({
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
    const n = e, s = t, o = /* @__PURE__ */ le(""), i = Y(() => {
      const r = o.value.trim().toLowerCase();
      return r ? n.options.filter((a) => a.toLowerCase().includes(r)) : n.options;
    });
    function l(r) {
      n.disabled || r !== n.modelValue && s("update:modelValue", r);
    }
    return (r, a) => (S(), R("div", Dp, [
      e.searchable ? Ke((S(), R("input", {
        key: 0,
        "onUpdate:modelValue": a[0] || (a[0] = (u) => o.value = u),
        class: "fil-w-search",
        type: "search",
        placeholder: e.placeholder,
        "aria-label": e.placeholder,
        disabled: e.disabled,
        spellcheck: "false"
      }, null, 8, kp)), [
        [_t, o.value]
      ]) : ue("", !0),
      j("div", Tp, [
        (S(!0), R(de, null, ke(i.value, (u) => (S(), R("button", {
          key: u,
          type: "button",
          role: "radio",
          class: Fe(["fil-w-chip", { active: u === e.modelValue, disabled: e.disabled }]),
          "aria-checked": u === e.modelValue,
          disabled: e.disabled,
          title: u,
          onClick: (c) => l(u)
        }, se(u), 11, Ep))), 128)),
        i.value.length === 0 ? (S(), R("div", Pp, se(o.value ? "No matches" : "Empty"), 1)) : ue("", !0)
      ])
    ]));
  }
}), Op = /* @__PURE__ */ Le(Rp, [["__scopeId", "data-v-8b6ca087"]]), Np = ["title"], $p = {
  key: 0,
  class: "fil-w-segmented-label"
}, Vp = ["aria-label"], Bp = ["aria-pressed", "disabled", "tabindex", "onClick", "onKeydown"], Hp = /* @__PURE__ */ Me({
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
    const n = e, s = t, o = Y(() => n.modelValue), i = /* @__PURE__ */ le([]);
    function l(u) {
      var c;
      return ((c = n.optionLabels) == null ? void 0 : c[u]) ?? u;
    }
    function r(u) {
      n.disabled || u !== o.value && s("update:modelValue", u);
    }
    function a(u, c) {
      var f, p;
      const d = n.options;
      if (u.key === "ArrowRight" || u.key === "ArrowDown") {
        u.preventDefault();
        const h = d[(c + 1) % d.length];
        r(h), (f = i.value[(c + 1) % d.length]) == null || f.focus();
      } else if (u.key === "ArrowLeft" || u.key === "ArrowUp") {
        u.preventDefault();
        const h = d[(c - 1 + d.length) % d.length];
        r(h), (p = i.value[(c - 1 + d.length) % d.length]) == null || p.focus();
      }
    }
    return (u, c) => (S(), R("div", {
      class: "fil-w-segmented",
      title: e.title
    }, [
      e.label ? (S(), R("label", $p, se(e.label), 1)) : ue("", !0),
      j("div", {
        class: Fe(["fil-w-pill", { disabled: e.disabled }]),
        role: "group",
        "aria-label": e.label
      }, [
        (S(!0), R(de, null, ke(e.options, (d, f) => (S(), R("button", {
          key: d,
          ref_for: !0,
          ref: (p) => {
            p && (i.value[f] = p);
          },
          type: "button",
          class: Fe(["fil-w-seg", { active: d === o.value }]),
          "aria-pressed": d === o.value,
          disabled: e.disabled,
          tabindex: d === o.value ? 0 : -1,
          onClick: (p) => r(d),
          onKeydown: (p) => a(p, f)
        }, se(l(d)), 43, Bp))), 128))
      ], 10, Vp)
    ], 8, Np));
  }
}), Xt = /* @__PURE__ */ Le(Hp, [["__scopeId", "data-v-163eefcf"]]), Up = ["aria-expanded", "disabled"], jp = { class: "fil-w-section-arrow" }, Wp = { class: "fil-w-section-title" }, zp = /* @__PURE__ */ Me({
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
    return (l, r) => (S(), R("button", {
      type: "button",
      class: Fe(["fil-w-section", { collapsible: e.collapsible, collapsed: e.modelValue }]),
      "aria-expanded": !e.modelValue,
      disabled: !e.collapsible,
      onClick: o
    }, [
      j("span", jp, se(i.value), 1),
      j("span", Wp, se(e.title), 1)
    ], 10, Up));
  }
}), pn = /* @__PURE__ */ Le(zp, [["__scopeId", "data-v-2b21d5b8"]]), Gp = {
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
}, Kp = {}, qp = {}, Xp = {}, Yp = {
  ...Gp,
  ...Kp,
  ...qp,
  ...Xp
}, Jp = { class: "fil-style-picker" }, Qp = { class: "fil-style-cats" }, Zp = ["onClick"], em = { class: "fil-style-grid" }, tm = ["title", "onClick"], nm = { class: "fil-style-tile-preview" }, sm = ["src"], om = {
  key: 1,
  class: "fil-style-tile-placeholder"
}, im = { class: "fil-style-tile-label" }, lm = {
  key: 0,
  class: "fil-style-empty"
}, cs = "__all__", rm = /* @__PURE__ */ Me({
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
      for (const h of n.styles) {
        const g = o(h);
        g && !f.has(g) && (f.add(g), p.push(g));
      }
      return p;
    }), r = /* @__PURE__ */ le(cs), a = /* @__PURE__ */ le(""), u = Y(() => {
      const f = a.value.trim().toLowerCase();
      return n.styles.filter((p) => r.value !== cs && o(p) !== r.value ? !1 : f ? p.toLowerCase().includes(f) : !0);
    });
    function c(f) {
      return Yp[f];
    }
    function d(f) {
      s("select", f);
    }
    return (f, p) => (S(), R("div", Jp, [
      j("div", Qp, [
        j("button", {
          type: "button",
          class: Fe(["fil-style-cat", { active: r.value === cs }]),
          onClick: p[0] || (p[0] = (h) => r.value = cs)
        }, " All ", 2),
        (S(!0), R(de, null, ke(l.value, (h) => (S(), R("button", {
          key: h,
          type: "button",
          class: Fe(["fil-style-cat", { active: r.value === h }]),
          onClick: (g) => r.value = h
        }, se(h), 11, Zp))), 128))
      ]),
      Ke(j("input", {
        "onUpdate:modelValue": p[1] || (p[1] = (h) => a.value = h),
        type: "search",
        class: "fil-style-search",
        placeholder: "Search styles…",
        "aria-label": "Search styles",
        spellcheck: "false"
      }, null, 512), [
        [_t, a.value]
      ]),
      j("div", em, [
        (S(!0), R(de, null, ke(u.value, (h) => (S(), R("button", {
          key: h,
          type: "button",
          class: Fe(["fil-style-tile", { active: h === e.modelValue }]),
          title: h,
          onClick: (g) => d(h)
        }, [
          j("span", nm, [
            c(h) ? (S(), R("img", {
              key: 0,
              src: c(h),
              class: "fil-style-tile-img",
              alt: ""
            }, null, 8, sm)) : (S(), R("span", om, se(i(h).split(" ")[0]), 1))
          ]),
          j("span", im, se(i(h)), 1)
        ], 10, tm))), 128)),
        u.value.length === 0 ? (S(), R("div", lm, "No matches")) : ue("", !0)
      ])
    ]));
  }
}), am = /* @__PURE__ */ Le(rm, [["__scopeId", "data-v-6e196d1e"]]), cm = {
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
}, um = { class: "fil-scanner-root" }, dm = ["title"], fm = ["value", "placeholder", "onInput"], pm = ["value", "placeholder", "onInput"], mm = { class: "fil-section-block" }, hm = ["title"], gm = { class: "fil-scanner-seed" }, _m = { class: "fil-scanner-seed-row" }, vm = ["value", "readonly", "title"], bm = ["title"], ym = ["title"], wm = ["title"], xm = /* @__PURE__ */ Me({
  __name: "OpticScanner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = $t(), s = cm.FiLOpticScanner, o = (s == null ? void 0 : s.inputs.required) ?? [], i = {
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
    }, r = /* @__PURE__ */ new Set(["prompt", "negative_prompt", "custom_style"]);
    function a(N) {
      const H = i[N];
      return H ? n(H[0], H[1]) : N.toUpperCase();
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
    function c(N) {
      const H = u[N.name];
      return H ? n(H, N.tooltip || "") : N.tooltip || "";
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
    function f(N) {
      if (N.label) return N.label;
      const H = d[N.name] || "", I = N.name.replace(/_/g, " ").replace(/\b\w/g, (V) => V.toUpperCase());
      return H ? `${H} ${I}` : I;
    }
    const p = /* @__PURE__ */ Zt({}), h = {
      photo_style: { emoji: "📷", labelKey: "scn_style_photo_label", labelFallback: "Photo" },
      nsfw_photo_style: { emoji: "🔞", labelKey: "scn_style_nsfw_photo_label", labelFallback: "NSFW Photo" },
      art_style: { emoji: "🎨", labelKey: "scn_style_art_label", labelFallback: "Art" },
      nsfw_art_style: { emoji: "🔞", labelKey: "scn_style_nsfw_art_label", labelFallback: "NSFW Art" }
    };
    function g(N) {
      const H = h[N], I = H ? `${H.emoji} ${n(H.labelKey, H.labelFallback)}: ` : "", V = String(w(N, "None") || "None");
      if (V === "None") return `${I}${n("scn_style_none", "None")}`;
      const B = V.indexOf("/"), Q = B === -1 ? V : V.slice(B + 1);
      return `${I}${Q}`;
    }
    function b(N) {
      p[N] = !0;
    }
    function _(N, H) {
      D(N, H), p[N] = !1;
    }
    const y = Y(() => {
      var H;
      const N = {};
      for (const I of o) (N[H = I.section || "_"] ?? (N[H] = [])).push(I);
      return N;
    }), A = Y(() => {
      const N = y.value.styles || [], H = [];
      for (let I = 0; I < N.length; I += 2) H.push(N.slice(I, I + 2));
      return H;
    });
    function w(N, H = "") {
      return t.state.nodeState[N] ?? t.state.initialValues[N] ?? H;
    }
    function D(N, H) {
      t.state.nodeState[N] = H;
    }
    const ce = /* @__PURE__ */ new Set(["agent", "output", "advanced"]);
    function k(N) {
      const H = t.state.ui[`collapsed_${N}`];
      return H === void 0 ? ce.has(N) : !!H;
    }
    function L(N, H) {
      t.state.ui[`collapsed_${N}`] = H;
    }
    He(() => t.state.nodeState, () => {
    }, { deep: !0 });
    const M = Y({
      get: () => t.state.nodeState.seed_mode ?? "random",
      set: (N) => {
        t.state.nodeState.seed_mode = N;
      }
    }), K = Y({
      get: () => Number(t.state.nodeState.seed ?? -1) || -1,
      set: (N) => {
        t.state.nodeState.seed = N;
      }
    }), O = Y(() => M.value === "fixed" ? `${K.value}` : "random");
    function C() {
      M.value = "random";
    }
    function U() {
      if (t.state.lastRunSeed == null) {
        nt.warning("No last-run seed recorded yet");
        return;
      }
      K.value = t.state.lastRunSeed, M.value = "fixed";
    }
    function X() {
      const N = Math.floor(Math.random() * 1e9) & 2147483647;
      K.value = N, M.value = "fixed";
    }
    return (N, H) => (S(), R("div", um, [
      (S(!0), R(de, null, ke(y.value, (I, V) => (S(), R(de, { key: V }, [
        V !== "styles" ? (S(), R("div", {
          key: 0,
          class: "fil-section-block",
          style: ze({ "--fil-accent": l[String(V)] })
        }, [
          V !== "_" && V !== "prompt" ? (S(), Ie(pn, {
            key: 0,
            title: a(String(V)),
            "model-value": k(String(V)),
            "onUpdate:modelValue": (B) => L(String(V), B)
          }, null, 8, ["title", "model-value", "onUpdate:modelValue"])) : ue("", !0),
          (S(!0), R(de, null, ke(I, (B) => Ke((S(), R("div", {
            key: B.name,
            class: "fil-w-row",
            title: c(B)
          }, [
            B.kind === "chip_grid" ? (S(), Ie(qi, {
              key: 0,
              options: B.values || [],
              "model-value": String(w(B.name, "")),
              columns: B.columns ?? 3,
              "onUpdate:modelValue": (Q) => D(B.name, Q)
            }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"])) : B.kind === "chip_list" ? (S(), Ie(Op, {
              key: 1,
              options: B.values || [],
              "model-value": w(B.name, null),
              searchable: B.searchable ?? !0,
              "onUpdate:modelValue": (Q) => D(B.name, Q)
            }, null, 8, ["options", "model-value", "searchable", "onUpdate:modelValue"])) : B.kind === "segmented" ? (S(), Ie(Xt, {
              key: 2,
              options: B.options || [],
              "model-value": String(w(B.name, "")),
              label: f(B),
              "onUpdate:modelValue": (Q) => D(B.name, Q)
            }, null, 8, ["options", "model-value", "label", "onUpdate:modelValue"])) : B.kind === "string" && F(r).has(B.name) ? (S(), R("textarea", {
              key: 3,
              class: "fil-w-textarea",
              value: String(w(B.name, "")),
              placeholder: f(B),
              onInput: (Q) => D(B.name, Q.target.value)
            }, null, 40, fm)) : B.kind === "string" ? (S(), R("input", {
              key: 4,
              type: "text",
              class: "fil-w-input",
              value: String(w(B.name, "")),
              placeholder: f(B),
              onInput: (Q) => D(B.name, Q.target.value)
            }, null, 40, pm)) : (S(), Ie(qi, {
              key: 5,
              options: B.values || [],
              "model-value": String(w(B.name, "")),
              columns: B.columns ?? 3,
              "onUpdate:modelValue": (Q) => D(B.name, Q)
            }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"]))
          ], 8, dm)), [
            [Ms, V === "_" || V === "prompt" || !k(String(V))]
          ])), 128))
        ], 4)) : ue("", !0)
      ], 64))), 128)),
      j("div", {
        class: "fil-section-block",
        style: ze({ "--fil-accent": l.advanced })
      }, [
        J(pn, {
          title: a("advanced"),
          "model-value": k("advanced"),
          "onUpdate:modelValue": H[0] || (H[0] = (I) => L("advanced", I))
        }, null, 8, ["title", "model-value"]),
        Ke(j("div", mm, [
          (S(!0), R(de, null, ke(A.value, (I, V) => (S(), R("div", {
            key: `style-pair-${V}`,
            class: "fil-style-pair-row"
          }, [
            (S(!0), R(de, null, ke(I, (B) => (S(), R("div", {
              key: B.name,
              class: "fil-style-pair-item",
              title: c(B)
            }, [
              J(ot, {
                variant: "full",
                label: g(B.name),
                onClick: (Q) => b(B.name)
              }, null, 8, ["label", "onClick"]),
              J(Lr, {
                open: !!p[B.name],
                title: f(B),
                width: "640px",
                "onUpdate:open": (Q) => p[B.name] = Q
              }, {
                default: Rs(() => [
                  J(am, {
                    styles: B.values || [],
                    "model-value": String(w(B.name, "None")),
                    onSelect: (Q) => _(B.name, Q)
                  }, null, 8, ["styles", "model-value", "onSelect"])
                ]),
                _: 2
              }, 1032, ["open", "title", "onUpdate:open"])
            ], 8, hm))), 128))
          ]))), 128))
        ], 512), [
          [Ms, !k("advanced")]
        ])
      ], 4),
      j("div", gm, [
        j("div", _m, [
          j("input", {
            value: O.value,
            type: "text",
            class: Fe(["fil-scanner-seed-field", { "is-random": M.value === "random" }]),
            readonly: M.value === "random",
            "aria-label": "Seed value",
            title: M.value === "fixed" ? F(n)("scn_seed_locked", "Locked seed") : F(n)("scn_seed_auto_random", "Auto-random — a new seed is generated each run"),
            onInput: H[1] || (H[1] = (I) => K.value = Number(I.target.value) || 0)
          }, null, 42, vm),
          j("button", {
            type: "button",
            class: Fe(["fil-scanner-seed-pill", { active: M.value === "random" }]),
            title: F(n)("scn_seed_mode_tt", "Random generates a new seed each run."),
            onClick: C
          }, se(F(n)("scn_seed_random", "Random")), 11, bm),
          j("button", {
            type: "button",
            class: "fil-scanner-seed-pill",
            title: t.state.lastRunSeed != null ? `${F(n)("scn_seed_use_last_prefix", "Reuse the last run's seed:")} ${t.state.lastRunSeed}` : F(n)("scn_seed_use_last_tt", "Reuse the seed from the last executed run."),
            onClick: U
          }, se(F(n)("scn_seed_use_last", "Use last")), 9, ym),
          j("button", {
            type: "button",
            class: "fil-scanner-seed-pill fil-scanner-seed-pill-accent",
            title: F(n)("scn_seed_new_fixed_tt", "Generate a new random fixed seed."),
            onClick: X
          }, se(F(n)("scn_seed_new_fixed", "New fixed")), 9, wm)
        ])
      ])
    ]));
  }
}), Sm = /* @__PURE__ */ Le(xm, [["__scopeId", "data-v-1e6be585"]]), Cm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sm
}, Symbol.toStringTag, { value: "Module" })), Mm = { class: "fil-cleaner-root" }, Fm = ["aria-pressed", "title", "onClick"], Lm = { class: "fil-cleaner-label" }, Im = ["aria-pressed", "title", "onClick"], Am = { class: "fil-cleaner-label" }, Dm = /* @__PURE__ */ Me({
  __name: "NeuroCleaner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = $t(), s = [
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
    function r(d, f) {
      t.state.nodeState[d] = !l(d, f);
    }
    const a = /* @__PURE__ */ new Set(["ram"]);
    function u(d) {
      const f = t.state.ui[`collapsed_${d}`];
      return f === void 0 ? a.has(d) : !!f;
    }
    function c(d, f) {
      t.state.ui[`collapsed_${d}`] = f;
    }
    return He(() => t.state.nodeState, () => {
    }, { deep: !0 }), (d, f) => (S(), R("div", Mm, [
      J(pn, {
        title: F(n)("nc_section_vram", "🎮 VRAM / Models"),
        "model-value": u("vram"),
        "onUpdate:modelValue": f[0] || (f[0] = (p) => c("vram", p))
      }, null, 8, ["title", "model-value"]),
      (S(), R(de, null, ke(s, (p) => Ke(j("button", {
        key: p.name,
        type: "button",
        class: Fe(["fil-cleaner-row", { active: l(p.name, p.defaultOn) }]),
        "aria-pressed": l(p.name, p.defaultOn),
        title: i(p.name, p.label),
        onClick: (h) => r(p.name, p.defaultOn)
      }, [
        f[2] || (f[2] = j("span", { class: "fil-cleaner-dot" }, null, -1)),
        j("span", Lm, se(F(n)(`nc_lbl_${p.name}`, p.label)), 1)
      ], 10, Fm), [
        [Ms, !u("vram")]
      ])), 64)),
      J(pn, {
        title: F(n)("nc_section_ram", "💾 RAM / Cache (advanced)"),
        "model-value": u("ram"),
        "onUpdate:modelValue": f[1] || (f[1] = (p) => c("ram", p))
      }, null, 8, ["title", "model-value"]),
      (S(), R(de, null, ke(o, (p) => Ke(j("button", {
        key: p.name,
        type: "button",
        class: Fe(["fil-cleaner-row", { active: l(p.name, p.defaultOn) }]),
        "aria-pressed": l(p.name, p.defaultOn),
        title: i(p.name, p.label),
        onClick: (h) => r(p.name, p.defaultOn)
      }, [
        f[3] || (f[3] = j("span", { class: "fil-cleaner-dot" }, null, -1)),
        j("span", Am, se(F(n)(`nc_lbl_${p.name}`, p.label)), 1)
      ], 10, Im), [
        [Ms, !u("ram")]
      ])), 64))
    ]));
  }
}), km = /* @__PURE__ */ Le(Dm, [["__scopeId", "data-v-a3fa7f07"]]), Tm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: km
}, Symbol.toStringTag, { value: "Module" }));
function co(e) {
  return Math.min(1, Math.max(0, e));
}
const Em = { class: "fil-cmp-root" }, Pm = {
  key: 0,
  class: "fil-cmp-placeholder"
}, Rm = { class: "fil-cmp-save-row" }, Om = {
  key: 2,
  class: "fil-cmp-settings"
}, Nm = /* @__PURE__ */ Me({
  __name: "BeforeAfterCompare",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = $t(), s = Y({
      get: () => t.state.ui.compare_mode ?? "wipe",
      set: (I) => {
        t.state.ui.compare_mode = I, C();
      }
    }), o = Y({
      get: () => Number(t.state.ui.compare_position ?? 0.5),
      set: (I) => {
        t.state.ui.compare_position = co(I), C();
      }
    }), i = Y({
      get: () => Number(t.state.ui.compare_opacity ?? 0.5),
      set: (I) => {
        t.state.ui.compare_opacity = co(I), C();
      }
    }), l = Y({
      get: () => t.state.ui.settings_collapsed !== !1,
      set: (I) => {
        t.state.ui.settings_collapsed = I;
      }
    }), r = Y(() => [
      { value: "before", label: n("cmp_mode_before", "◀ Before") },
      { value: "after", label: n("cmp_mode_after", "After ▶") },
      { value: "wipe", label: n("cmp_mode_wipe", "↔ Wipe") },
      { value: "side-by-side", label: n("cmp_mode_side", "▥ Side-by-side") },
      { value: "overlay", label: n("cmp_mode_overlay", "◐ Overlay") },
      { value: "difference", label: n("cmp_mode_difference", "◈ Difference") }
    ]), a = ["Off", "Preview only", "Preview + output"], u = {
      Off: "🚫 Off",
      "Preview only": "👁️ Preview only",
      "Preview + output": "👁️➡️ Preview + output"
    }, c = Y(() => t.state.nodeState.swap ? "ON" : "OFF");
    function d(I) {
      t.state.nodeState.swap = I === "ON";
    }
    const f = Y(() => String(t.state.nodeState.resize_mode ?? "Off"));
    function p(I) {
      t.state.nodeState.resize_mode = I;
    }
    const h = Y(() => Number(t.state.nodeState.max_resolution ?? 4096) || 4096);
    function g(I) {
      t.state.nodeState.max_resolution = I;
    }
    const b = Y(() => f.value !== "Off"), _ = Y(() => t.state.ui.compare_images ?? {}), y = /* @__PURE__ */ le(null), A = /* @__PURE__ */ le(null), w = /* @__PURE__ */ le(!1), D = Y(() => !!y.value || !!A.value);
    function ce(I) {
      return new Promise((V, B) => {
        const Q = new Image();
        Q.onload = () => V(Q), Q.onerror = () => B(new Error("image load failed")), Q.src = I;
      });
    }
    const k = /* @__PURE__ */ le(null), L = /* @__PURE__ */ le(null);
    let M = 0, K = null;
    He(
      () => t.state.ui.compare_images,
      async (I) => {
        var ne, _e;
        const V = I ?? {}, B = (ne = V.a) == null ? void 0 : ne[0], Q = (_e = V.b) == null ? void 0 : _e[0];
        w.value = !1, y.value = null, A.value = null;
        try {
          B && (y.value = await ce(Ui(B))), Q && (A.value = await ce(Ui(Q)));
        } catch {
          w.value = !0;
        }
        C();
      },
      { deep: !0, immediate: !0 }
    ), He([s, o, i], () => C());
    function O(I, V, B, Q) {
      if (!B || !Q) return { x: 0, y: 0, w: I, h: V };
      const ne = I / V, _e = B / Q;
      let Ze, oe;
      return _e > ne ? (Ze = I, oe = I / _e) : (oe = V, Ze = V * _e), { x: (I - Ze) / 2, y: (V - oe) / 2, w: Ze, h: oe };
    }
    function C() {
      M || (M = requestAnimationFrame(() => {
        M = 0, U();
      }));
    }
    function U() {
      const I = L.value, V = k.value;
      if (!I || !V) return;
      const B = window.devicePixelRatio || 1, Q = V.clientWidth, ne = V.clientHeight;
      if (Q <= 0 || ne <= 0) return;
      const _e = Math.round(Q * B), Ze = Math.round(ne * B);
      (I.width !== _e || I.height !== Ze) && (I.width = _e, I.height = Ze);
      const oe = I.getContext("2d");
      if (!oe) return;
      oe.setTransform(B, 0, 0, B, 0, 0), oe.clearRect(0, 0, Q, ne);
      const $e = y.value, Ae = A.value;
      if (!$e && !Ae) return;
      if (s.value === "side-by-side") {
        const qe = Q / 2;
        if ($e) {
          const Pe = O(qe, ne, $e.naturalWidth, $e.naturalHeight);
          oe.drawImage($e, Pe.x, Pe.y, Pe.w, Pe.h);
        }
        if (Ae) {
          const Pe = O(qe, ne, Ae.naturalWidth, Ae.naturalHeight);
          oe.drawImage(Ae, qe + Pe.x, Pe.y, Pe.w, Pe.h);
        }
        oe.strokeStyle = "rgba(255,255,255,0.2)", oe.beginPath(), oe.moveTo(qe, 0), oe.lineTo(qe, ne), oe.stroke();
        return;
      }
      const Vt = $e ?? Ae, ae = O(Q, ne, Vt.naturalWidth, Vt.naturalHeight);
      if (s.value === "before") {
        $e && oe.drawImage($e, ae.x, ae.y, ae.w, ae.h);
        return;
      }
      if (s.value === "after") {
        Ae && oe.drawImage(Ae, ae.x, ae.y, ae.w, ae.h);
        return;
      }
      if (s.value === "overlay") {
        $e && oe.drawImage($e, ae.x, ae.y, ae.w, ae.h), Ae && (oe.save(), oe.globalAlpha = i.value, oe.drawImage(Ae, ae.x, ae.y, ae.w, ae.h), oe.restore());
        return;
      }
      if (s.value === "difference") {
        $e && oe.drawImage($e, ae.x, ae.y, ae.w, ae.h), Ae && (oe.save(), oe.globalCompositeOperation = "difference", oe.drawImage(Ae, ae.x, ae.y, ae.w, ae.h), oe.restore());
        return;
      }
      if ($e && oe.drawImage($e, ae.x, ae.y, ae.w, ae.h), Ae) {
        const qe = ae.x + ae.w * o.value;
        oe.save(), oe.beginPath(), oe.rect(qe, ae.y, ae.x + ae.w - qe, ae.h), oe.clip(), oe.drawImage(Ae, ae.x, ae.y, ae.w, ae.h), oe.restore();
        const Pe = getComputedStyle(V).getPropertyValue("--fil-accent").trim() || "#e8724c";
        oe.save(), oe.strokeStyle = Pe, oe.lineWidth = 2, oe.shadowColor = Pe, oe.shadowBlur = 6, oe.beginPath(), oe.moveTo(qe, ae.y), oe.lineTo(qe, ae.y + ae.h), oe.stroke(), oe.restore();
      }
    }
    function X(I) {
      const V = k.value;
      if (!V) return;
      const B = V.getBoundingClientRect();
      o.value = co((I.clientX - B.left) / B.width);
    }
    function N(I) {
      if (s.value !== "wipe") return;
      X(I);
      const V = (Q) => X(Q), B = () => {
        window.removeEventListener("pointermove", V), window.removeEventListener("pointerup", B);
      };
      window.addEventListener("pointermove", V), window.addEventListener("pointerup", B);
    }
    en(() => {
      K = new ResizeObserver(() => C()), k.value && K.observe(k.value), C();
    }), hn(() => {
      K == null || K.disconnect(), M && cancelAnimationFrame(M);
    });
    async function H(I) {
      var B, Q;
      const V = I === "a" ? (B = _.value.a) == null ? void 0 : B[0] : (Q = _.value.b) == null ? void 0 : Q[0];
      if (!V) {
        nt.warning(n("cmp_no_preview", "Run the node to see a preview"));
        return;
      }
      try {
        const ne = await zt.saveCompareImage(V);
        nt.success(`${n("cmp_saved", "Saved to output")}: ${ne.image.filename}`);
      } catch (ne) {
        nt.warning(ne instanceof Error ? ne.message : "Save failed");
      }
    }
    return (I, V) => {
      var B, Q;
      return S(), R("div", Em, [
        J(Lo, {
          options: r.value,
          "model-value": s.value,
          label: F(n)("lbl_mode", "⚙️ Mode"),
          title: F(n)("cmp_view_mode", "How to compare the two images."),
          "onUpdate:modelValue": V[0] || (V[0] = (ne) => s.value = ne)
        }, null, 8, ["options", "model-value", "label", "title"]),
        j("div", {
          ref_key: "wrapRef",
          ref: k,
          class: "fil-cmp-canvas-wrap"
        }, [
          j("canvas", {
            ref_key: "canvasRef",
            ref: L,
            class: Fe(["fil-cmp-canvas", { "is-wipe": s.value === "wipe" }]),
            onPointerdown: N
          }, null, 34),
          D.value ? ue("", !0) : (S(), R("div", Pm, se(w.value ? F(n)("cmp_load_error", "Could not load preview images") : F(n)("cmp_no_preview", "Run the node to see a preview")), 1))
        ], 512),
        s.value === "wipe" ? (S(), Ie(Lt, {
          key: 0,
          "model-value": o.value,
          min: 0,
          max: 1,
          step: 0.01,
          label: F(n)("cmp_position", "Position"),
          "onUpdate:modelValue": V[1] || (V[1] = (ne) => o.value = ne)
        }, null, 8, ["model-value", "label"])) : ue("", !0),
        s.value === "overlay" ? (S(), Ie(Lt, {
          key: 1,
          "model-value": i.value,
          min: 0,
          max: 1,
          step: 0.01,
          label: F(n)("cmp_opacity", "Opacity"),
          "onUpdate:modelValue": V[2] || (V[2] = (ne) => i.value = ne)
        }, null, 8, ["model-value", "label"])) : ue("", !0),
        j("div", Rm, [
          J(ot, {
            variant: "sm",
            label: F(n)("cmp_save_before", "💾 Save before"),
            disabled: !((B = _.value.a) != null && B.length),
            onClick: V[3] || (V[3] = (ne) => H("a"))
          }, null, 8, ["label", "disabled"]),
          J(ot, {
            variant: "sm",
            label: F(n)("cmp_save_after", "💾 Save after"),
            disabled: !((Q = _.value.b) != null && Q.length),
            onClick: V[4] || (V[4] = (ne) => H("b"))
          }, null, 8, ["label", "disabled"])
        ]),
        J(pn, {
          title: F(n)("cmp_settings", "Settings"),
          modelValue: l.value,
          "onUpdate:modelValue": V[5] || (V[5] = (ne) => l.value = ne)
        }, null, 8, ["title", "modelValue"]),
        l.value ? ue("", !0) : (S(), R("div", Om, [
          J(Xt, {
            options: ["ON", "OFF"],
            "option-labels": { ON: F(n)("cmp_swap_on_label", "🔄 Swapped"), OFF: F(n)("cmp_swap_off_label", "↔️ Normal") },
            "model-value": c.value,
            label: F(n)("lbl_swap", "🔁 Swap before/after"),
            title: F(n)("cmp_swap", "Swap which image is shown as before/after."),
            "onUpdate:modelValue": d
          }, null, 8, ["option-labels", "model-value", "label", "title"]),
          J(Xt, {
            options: [...a],
            "option-labels": u,
            "model-value": f.value,
            label: F(n)("lbl_resize_mode", "🖥️ Resize mode"),
            title: F(n)("cmp_resize_mode", "Off keeps images untouched. Preview modes downscale for a lighter preview and, optionally, output."),
            "onUpdate:modelValue": p
          }, null, 8, ["options", "model-value", "label", "title"]),
          b.value ? (S(), Ie(Lt, {
            key: 0,
            "model-value": h.value,
            min: 256,
            max: 8192,
            step: 64,
            label: F(n)("lbl_max_resolution", "🖼️ Max resolution"),
            title: F(n)("cmp_max_resolution", "Maximum width or height used when resizing is enabled."),
            "onUpdate:modelValue": g
          }, null, 8, ["model-value", "label", "title"])) : ue("", !0)
        ]))
      ]);
    };
  }
}), $m = /* @__PURE__ */ Le(Nm, [["__scopeId", "data-v-00ddc768"]]), Vm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $m
}, Symbol.toStringTag, { value: "Module" })), Bm = { class: "fil-up-root" }, Hm = { class: "fil-up-row" }, Um = ["title"], jm = ["title"], Wm = { class: "fil-up-row" }, zm = ["title"], Gm = ["title"], Km = /* @__PURE__ */ Me({
  __name: "UpscaleTileCalc",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = $t(), s = ["Low VRAM", "Balanced", "High VRAM", "Max Quality", "Ultra Quality"], o = {
      "Low VRAM": "🪫 Low VRAM",
      Balanced: "⚖️ Balanced",
      "High VRAM": "🔋 High VRAM",
      "Max Quality": "💎 Max Quality",
      "Ultra Quality": "👑 Ultra Quality"
    };
    function i(A, w) {
      return Y({
        get: () => Number(t.state.nodeState[A] ?? t.state.initialValues[A] ?? w) || w,
        set: (D) => {
          t.state.nodeState[A] = D;
        }
      });
    }
    function l(A, w) {
      return Y({
        get: () => t.state.nodeState[A] ?? t.state.initialValues[A] ?? w ? "ON" : "OFF",
        set: (D) => {
          t.state.nodeState[A] = D === "ON";
        }
      });
    }
    const r = i("upscale_factor", 2), a = i("tile_size", 512), u = i("tile_overlap", 64), c = i("manual_tile_cols", 0), d = i("manual_tile_rows", 0), f = i("max_megapixels", 0), p = l("auto_mode", !1), h = l("non_square_tiles", !1), g = l("show_grid_preview", !0), b = Y({
      get: () => String(t.state.nodeState.auto_profile ?? t.state.initialValues.auto_profile ?? "Balanced"),
      set: (A) => {
        t.state.nodeState.auto_profile = A;
      }
    });
    function _(A) {
      return !!t.state.ui[`collapsed_${A}`];
    }
    function y(A, w) {
      t.state.ui[`collapsed_${A}`] = w;
    }
    return He(() => t.state.nodeState, () => {
    }, { deep: !0 }), (A, w) => (S(), R("div", Bm, [
      J(Lt, {
        "model-value": F(r),
        min: 0.1,
        max: 8,
        step: 0.25,
        label: F(n)("lbl_upscale_factor", "🔍 Upscale factor"),
        title: F(n)("utc_factor", "Upscale multiplier."),
        "onUpdate:modelValue": w[0] || (w[0] = (D) => r.value = D)
      }, null, 8, ["model-value", "label", "title"]),
      J(pn, {
        title: F(n)("utc_section_auto", "⚙️ Auto / advanced"),
        "model-value": _("auto"),
        "onUpdate:modelValue": w[1] || (w[1] = (D) => y("auto", D))
      }, null, 8, ["title", "model-value"]),
      _("auto") ? ue("", !0) : (S(), R(de, { key: 0 }, [
        J(Xt, {
          options: ["ON", "OFF"],
          "option-labels": { ON: "⚙️ ON", OFF: "OFF" },
          "model-value": F(p),
          label: F(n)("lbl_full_auto", "🤖 Full auto"),
          title: F(n)("utc_auto_mode", "Pick tile size/overlap automatically from the selected VRAM profile."),
          "onUpdate:modelValue": w[2] || (w[2] = (D) => p.value = D)
        }, null, 8, ["model-value", "label", "title"]),
        F(p) === "ON" ? (S(), Ie(Xt, {
          key: 0,
          options: [...s],
          "option-labels": o,
          "model-value": b.value,
          label: F(n)("lbl_auto_profile", "🎚️ Auto profile"),
          title: F(n)("utc_auto_profile", "VRAM/quality profile used when Full Auto is on."),
          "onUpdate:modelValue": w[3] || (w[3] = (D) => b.value = D)
        }, null, 8, ["options", "model-value", "label", "title"])) : ue("", !0),
        F(p) === "OFF" ? (S(), R(de, { key: 1 }, [
          j("div", Hm, [
            j("label", {
              class: "fil-w-label",
              title: F(n)("utc_tile_size", "Base tile size.")
            }, se(F(n)("lbl_tile_size", "🔲 Tile size")), 9, Um),
            J(An, {
              modelValue: F(a),
              "onUpdate:modelValue": w[4] || (w[4] = (D) => /* @__PURE__ */ be(a) ? a.value = D : null),
              min: 64,
              max: 2048,
              step: 64
            }, null, 8, ["modelValue"]),
            j("label", {
              class: "fil-w-label",
              title: F(n)("utc_overlap", "Tile overlap.")
            }, se(F(n)("lbl_overlap", "🧵 Overlap")), 9, jm),
            J(An, {
              modelValue: F(u),
              "onUpdate:modelValue": w[5] || (w[5] = (D) => /* @__PURE__ */ be(u) ? u.value = D : null),
              min: 0,
              max: 512,
              step: 8
            }, null, 8, ["modelValue"])
          ]),
          j("div", Wm, [
            j("label", {
              class: "fil-w-label",
              title: F(n)("utc_manual_cols", "Force this many tile columns. 0 = compute from tile size.")
            }, se(F(n)("lbl_manual_cols", "↔️ Manual cols")), 9, zm),
            J(An, {
              modelValue: F(c),
              "onUpdate:modelValue": w[6] || (w[6] = (D) => /* @__PURE__ */ be(c) ? c.value = D : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"]),
            j("label", {
              class: "fil-w-label",
              title: F(n)("utc_manual_rows", "Force this many tile rows. 0 = compute from tile size.")
            }, se(F(n)("lbl_manual_rows", "↕️ Manual rows")), 9, Gm),
            J(An, {
              modelValue: F(d),
              "onUpdate:modelValue": w[7] || (w[7] = (D) => /* @__PURE__ */ be(d) ? d.value = D : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"])
          ])
        ], 64)) : ue("", !0)
      ], 64)),
      J(Lt, {
        "model-value": F(f),
        min: 0,
        max: 64,
        step: 0.5,
        label: F(n)("lbl_max_megapixels", "🖼️ Max megapixels (0 = no cap)"),
        title: F(n)("utc_max_mp", "Cap the upscaled output at this many megapixels. 0 = no cap."),
        "onUpdate:modelValue": w[8] || (w[8] = (D) => f.value = D)
      }, null, 8, ["model-value", "label", "title"]),
      J(Xt, {
        options: ["ON", "OFF"],
        "option-labels": { ON: "🧩 ON", OFF: "OFF" },
        "model-value": F(h),
        label: F(n)("lbl_non_square", "📐 Non-square tiles"),
        title: F(n)("utc_non_square", "Allow rectangular tiles instead of forcing square ones."),
        "onUpdate:modelValue": w[9] || (w[9] = (D) => h.value = D)
      }, null, 8, ["model-value", "label", "title"]),
      J(Xt, {
        options: ["ON", "OFF"],
        "option-labels": { ON: "🔲 ON", OFF: "OFF" },
        "model-value": F(g),
        label: F(n)("lbl_show_grid", "🔳 Show grid preview"),
        title: F(n)("utc_show_grid", "Render a tile-grid overlay on the preview output."),
        "onUpdate:modelValue": w[10] || (w[10] = (D) => g.value = D)
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), qm = /* @__PURE__ */ Le(Km, [["__scopeId", "data-v-4b0156da"]]), Xm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qm
}, Symbol.toStringTag, { value: "Module" }));
//# sourceMappingURL=fil_design_imagemind.js.map
