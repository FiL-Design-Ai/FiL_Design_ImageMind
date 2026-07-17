(function(){try{var s=document.createElement("style");s.textContent=".fil-color-picker[data-v-c4d5f476]{display:flex;flex-direction:column;gap:8px;padding:8px;width:176px;box-sizing:border-box}.fil-cp-sv[data-v-c4d5f476]{position:relative;width:100%;height:100px;border-radius:4px;cursor:crosshair;touch-action:none}.fil-cp-sv-white[data-v-c4d5f476]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to right,#fff,#fff0);border-radius:4px}.fil-cp-sv-black[data-v-c4d5f476]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to top,#000,#0000);border-radius:4px}.fil-cp-sv-thumb[data-v-c4d5f476]{position:absolute;width:10px;height:10px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hue[data-v-c4d5f476]{position:relative;width:100%;height:12px;border-radius:6px;background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red);cursor:pointer;touch-action:none}.fil-cp-hue-thumb[data-v-c4d5f476]{position:absolute;top:50%;width:12px;height:12px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hex-row[data-v-c4d5f476]{display:flex;align-items:center;gap:6px}.fil-cp-swatch[data-v-c4d5f476]{width:22px;height:22px;border-radius:4px;border:1px solid rgba(255,255,255,.25);flex-shrink:0}.fil-cp-hex-input[data-v-c4d5f476]{flex:1;min-width:0;height:22px;box-sizing:border-box;border-radius:4px;border:1px solid rgba(255,255,255,.2);background:#00000040;color:#f2f2f2;font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:12px;padding:0 6px;outline:none}.fil-cp-hex-input[data-v-c4d5f476]:focus{border-color:#ffffff80}.fil-cp-presets[data-v-c4d5f476]{display:grid;grid-template-columns:repeat(5,1fr);gap:4px}.fil-color-swatch[data-v-c4d5f476]{width:24px;height:24px;border-radius:4px;border:2px solid transparent;background:var(--swatch);cursor:pointer;transition:border-color .08s,transform .08s;outline:none;box-sizing:border-box}.fil-color-swatch[data-v-c4d5f476]:hover{border-color:#ffffff80;transform:scale(1.15)}.fil-color-swatch.is-active[data-v-c4d5f476]{border-color:#fff;box-shadow:0 0 0 1px var(--swatch)}.fil-icon[data-v-dfb78d9f]{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;line-height:0}.fil-icon[data-v-dfb78d9f] svg{width:100%;height:100%}.fil-node-help-badge[data-v-3001cdba]{position:absolute;top:4px;right:4px;width:20px;height:20px;padding:0;display:flex;align-items:center;justify-content:center;border-radius:50%;border:1px solid rgba(255,255,255,.15);background:#00000040;color:var(--fil-muted, rgba(255, 255, 255, .55));cursor:pointer;outline:none;z-index:5;transition:background .08s,color .08s,border-color .08s}.fil-node-help-badge[data-v-3001cdba]:hover,.fil-node-help-badge[data-v-3001cdba]:focus-visible{background:var(--fil-accent);border-color:var(--fil-accent);color:#fff}.fil-node-shell[data-v-0fbe412b]{position:relative}.fil-modal-backdrop[data-v-00452928]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000;display:flex;align-items:center;justify-content:center;background:#0000008c;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.fil-modal-panel[data-v-00452928]{width:90%;max-height:80vh;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:10px;box-shadow:0 20px 60px #00000080;display:flex;flex-direction:column;overflow:hidden}.fil-modal-header[data-v-00452928]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08)}.fil-modal-title[data-v-00452928]{font-size:14px;font-weight:600;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-close[data-v-00452928]{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;border:none;background:transparent;color:var(--fil-muted, rgba(255, 255, 255, .5));cursor:pointer;transition:background .08s,color .08s}.fil-modal-close[data-v-00452928]:hover{background:#ffffff14;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-body[data-v-00452928]{flex:1;overflow-y:auto;padding:16px}.fil-modal-enter-active[data-v-00452928],.fil-modal-leave-active[data-v-00452928]{transition:opacity .15s ease}.fil-modal-enter-from[data-v-00452928],.fil-modal-leave-to[data-v-00452928]{opacity:0}.fil-modal-enter-active .fil-modal-panel[data-v-00452928],.fil-modal-leave-active .fil-modal-panel[data-v-00452928]{transition:transform .15s ease}.fil-modal-enter-from .fil-modal-panel[data-v-00452928],.fil-modal-leave-to .fil-modal-panel[data-v-00452928]{transform:scale(.95) translateY(8px)}.fil-help-title[data-v-536c1547]{margin:0 0 12px;font-size:16px;font-weight:700;color:var(--fil-text, rgba(255,255,255,.9))}.fil-help-body[data-v-536c1547]{margin:0 0 12px;font-size:13px;line-height:1.6;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet[data-v-536c1547]{display:flex;gap:6px;align-items:flex-start;margin-bottom:6px;font-size:13px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet>span[data-v-536c1547]{flex:1}.fil-help-table[data-v-536c1547]{width:100%;border-collapse:collapse;margin-top:8px;font-size:12px}.fil-help-table th[data-v-536c1547],.fil-help-table td[data-v-536c1547]{text-align:left;padding:6px 10px;border-bottom:1px solid rgba(255,255,255,.06)}.fil-help-table th[data-v-536c1547]{font-weight:600;color:var(--fil-text, rgba(255,255,255,.85))}.fil-help-table td[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.6))}.fil-help-code[data-v-536c1547]{background:#0000004d;border-radius:6px;padding:12px;margin-top:10px;overflow-x:auto;font-size:12px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-empty[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.4));font-size:13px}.fil-toast-stack[data-v-08cc58fa]{position:fixed;right:20px;bottom:20px;z-index:100001;display:flex;flex-direction:column;gap:8px;pointer-events:none;max-width:min(360px,90vw)}.fil-toast[data-v-08cc58fa]{pointer-events:auto;display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:8px;background:var(--fil-panel, #171b22);color:var(--fil-text, #e8edf3);border:1px solid var(--fil-panel-alt, #2a3041);border-left:3px solid var(--toast-color, var(--fil-muted));box-shadow:0 6px 22px #0000006b;font:12.5px/1.45 system-ui,sans-serif;animation:fil-toast-in-08cc58fa .18s cubic-bezier(.2,.7,.3,1)}@keyframes fil-toast-in-08cc58fa{0%{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}.fil-toast-dot[data-v-08cc58fa]{flex:none;width:8px;height:8px;margin-top:4px;border-radius:50%;background:var(--toast-color, var(--fil-muted))}.fil-toast-text[data-v-08cc58fa]{flex:1;min-width:0;align-self:center}.fil-toast-action[data-v-08cc58fa]{flex:none;cursor:pointer;padding:4px 8px;border-radius:4px;background:#ffffff0f;color:inherit;border:none;font:inherit;transition:background .12s}.fil-toast-action[data-v-08cc58fa]:hover{background:#ffffff24}.fil-toast-close[data-v-08cc58fa]{flex:none;align-self:flex-start;cursor:pointer;width:18px;height:18px;padding:0;border:none;background:none;color:var(--fil-muted);opacity:.6;transition:opacity .12s;font-size:16px;line-height:18px}.fil-toast-close[data-v-08cc58fa]:hover{opacity:1}.fil-w-btn[data-v-fff84608]{box-sizing:border-box;padding:var(--fil-row-pad);border-radius:6px;background:#ffffff0d;border:1px solid rgba(255,255,255,.14);color:var(--fil-text, rgba(255, 255, 255, .85));font-family:ui-sans-serif,system-ui,sans-serif;font-size:12px;cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;display:inline-flex;align-items:center;justify-content:center;gap:6px}.fil-w-btn[data-v-fff84608]:hover:not(:disabled){background:var(--fil-accent);border-color:var(--fil-accent);color:#fff}.fil-w-btn[data-v-fff84608]:active{transform:translateY(1px)}.fil-w-btn[data-v-fff84608]:disabled{opacity:.4;cursor:default}.fil-w-btn-accent[data-v-fff84608]{background:var(--fil-accent);border-color:var(--fil-accent);color:#fff}.fil-w-btn-danger[data-v-fff84608]{color:var(--fil-danger, #ef6666)}.fil-w-btn-danger[data-v-fff84608]:hover:not(:disabled){background:var(--fil-danger, #ef6666);border-color:var(--fil-danger, #ef6666);color:#fff}.fil-w-btn-sm[data-v-fff84608]{padding:4px 8px;font-size:11px}.fil-w-btn-full[data-v-fff84608]{width:100%;display:block}.fil-w-btn-icon[data-v-fff84608]{display:inline-flex;align-items:center;justify-content:center;gap:5px}.fil-w-btn-glyph[data-v-fff84608] svg{width:14px;height:14px}.fil-w-btn.is-flashing[data-v-fff84608],.fil-w-btn.is-flashing[data-v-fff84608]:hover{background:var(--fil-ok, #62c987);border-color:var(--fil-ok, #62c987);color:#fff}.fil-w-btn.is-loading[data-v-fff84608]{cursor:wait}.fil-w-btn[data-v-fff84608]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-btn-spinner[data-v-fff84608]{display:inline-block;width:12px;height:12px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:fil-w-spin-fff84608 .6s linear infinite}@keyframes fil-w-spin-fff84608{to{transform:rotate(360deg)}}.fil-pm-root[data-v-ae1b468d]{display:flex;flex-direction:column;gap:12px;padding:4px 0}.fil-pm-card[data-v-ae1b468d]{background:#ffffff08;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:12px}.fil-pm-header[data-v-ae1b468d]{display:flex;align-items:center;gap:8px;margin-bottom:10px}.fil-pm-card--collapsed[data-v-ae1b468d]{padding:8px 12px}.fil-pm-card--collapsed .fil-pm-header[data-v-ae1b468d]{margin-bottom:0}.fil-pm-header--clickable[data-v-ae1b468d]{cursor:pointer}.fil-pm-header--clickable:hover .fil-pm-name[data-v-ae1b468d]{color:var(--fil-accent, #7c5cfc)}.fil-pm-chevron[data-v-ae1b468d]{display:inline-flex;align-items:center;color:#fff6;transition:transform .12s ease}.fil-pm-chevron--open[data-v-ae1b468d]{transform:rotate(90deg)}.fil-pm-icon[data-v-ae1b468d]{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px}.fil-pm-name[data-v-ae1b468d]{font-weight:600;font-size:14px;color:var(--fil-text, #f2f2f2)}.fil-pm-disp[data-v-ae1b468d]{font-size:11px;color:#ffffff80}.fil-pm-status[data-v-ae1b468d]{margin-left:auto;display:inline-flex;align-items:center;gap:5px;font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#fff6;white-space:nowrap}.fil-pm-dot[data-v-ae1b468d]{width:8px;height:8px;border-radius:50%;background:currentColor;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 22%,transparent)}.fil-pm-status--connected[data-v-ae1b468d]{color:var(--fil-success, #4ade80)}.fil-pm-status--configured[data-v-ae1b468d]{color:var(--fil-warning, #fbbf24)}.fil-pm-status--off[data-v-ae1b468d]{color:#ffffff4d}.fil-pm-fields[data-v-ae1b468d]{display:flex;flex-direction:column;gap:8px;margin-bottom:10px}.fil-pm-field[data-v-ae1b468d]{display:flex;flex-direction:column;gap:3px}.fil-pm-field-label[data-v-ae1b468d]{font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#ffffff80}.fil-pm-input[data-v-ae1b468d]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,monospace;font-size:13px;outline:none;transition:border-color .08s}.fil-pm-input[data-v-ae1b468d]:focus{border-color:var(--fil-accent)}.fil-pm-input.fil-pm-has-val[data-v-ae1b468d]{border-color:var(--fil-muted, #555)}.fil-pm-actions[data-v-ae1b468d]{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}.fil-pm-models[data-v-ae1b468d]{display:flex;flex-wrap:wrap;gap:4px}.fil-pm-model-tag[data-v-ae1b468d]{display:inline-flex;align-items:center;gap:3px;background:#ffffff12;border-radius:4px;padding:2px 6px;font-size:11px;color:#ffffffbf;white-space:nowrap}.fil-pm-vision-badge[data-v-ae1b468d]{font-size:10px;line-height:1}.fil-pm-err[data-v-ae1b468d]{font-size:11px;color:var(--fil-danger, #ef6666);margin-top:4px}.fil-pm-age[data-v-ae1b468d]{font-size:10px;color:#fff6;align-self:center}.fil-w-chips[data-v-3c07d909]{display:grid;gap:5px;width:100%}.fil-w-chip[data-v-3c07d909]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-3c07d909]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-3c07d909]{background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-accent);border-color:var(--fil-accent);font-weight:500;box-shadow:0 0 8px color-mix(in srgb,var(--fil-accent) 55%,transparent)}.fil-w-chip.disabled[data-v-3c07d909]{opacity:.5;cursor:default}.fil-w-chip[data-v-3c07d909]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chiplist[data-v-8b6ca087]{display:flex;flex-direction:column;gap:5px;width:100%}.fil-w-search[data-v-8b6ca087]{box-sizing:border-box;width:100%;padding:5px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:11px;outline:none}.fil-w-search[data-v-8b6ca087]:focus{border-color:var(--fil-accent)}.fil-w-search[data-v-8b6ca087]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-chip-scroll[data-v-8b6ca087]{display:grid;gap:3px;max-height:200px;overflow-y:auto;overflow-x:hidden;padding-right:2px}.fil-w-chip-scroll[data-v-8b6ca087]::-webkit-scrollbar{width:5px}.fil-w-chip-scroll[data-v-8b6ca087]::-webkit-scrollbar-thumb{background:var(--fil-muted, #555);border-radius:3px}.fil-w-chip-scroll[data-v-8b6ca087]::-webkit-scrollbar-track{background:transparent}.fil-w-chip[data-v-8b6ca087]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-8b6ca087]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-8b6ca087]{background:var(--fil-accent);color:#fff;border-color:var(--fil-accent);font-weight:500}.fil-w-chip.disabled[data-v-8b6ca087]{opacity:.5;cursor:default}.fil-w-chip[data-v-8b6ca087]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chip-empty[data-v-8b6ca087]{padding:8px;text-align:center;color:var(--fil-muted, #666);font-size:11px}.fil-combo[data-v-10bd69b4]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-combo-label[data-v-10bd69b4]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-combo-trigger[data-v-10bd69b4]{grid-column:2;width:100%;box-sizing:border-box;height:30px;display:flex;align-items:center;gap:6px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer;text-align:left;-moz-appearance:none;appearance:none;-webkit-appearance:none}.fil-combo-trigger.open[data-v-10bd69b4],.fil-combo-trigger[data-v-10bd69b4]:focus-visible{border-color:var(--fil-accent);outline:2px solid var(--fil-accent);outline-offset:1px}.fil-combo-trigger.disabled[data-v-10bd69b4]{opacity:.5;cursor:default}.fil-combo-trigger-label[data-v-10bd69b4]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-chevron[data-v-10bd69b4]{font-size:9px;color:var(--fil-muted, rgba(255, 255, 255, .5));flex-shrink:0}.fil-combo-badge[data-v-10bd69b4]{flex-shrink:0;font-size:9px;line-height:1;padding:2px 5px;border-radius:999px;background:var(--fil-accent);color:#fff;font-weight:600}.fil-combo-panel[data-v-10bd69b4]{position:fixed;z-index:10001;box-sizing:border-box;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:8px;box-shadow:0 12px 32px #0006;display:flex;flex-direction:column;overflow:hidden;padding:6px}.fil-combo-search[data-v-10bd69b4]{box-sizing:border-box;width:100%;margin-bottom:6px;padding:6px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-combo-search[data-v-10bd69b4]:focus{border-color:var(--fil-accent)}.fil-combo-list[data-v-10bd69b4]{display:flex;flex-direction:column;gap:2px;max-height:240px;overflow-y:auto}.fil-combo-option[data-v-10bd69b4]{display:flex;align-items:center;gap:6px;width:100%;box-sizing:border-box;padding:6px 8px;border-radius:5px;border:none;background:transparent;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;text-align:left;cursor:pointer;outline:none}.fil-combo-option.active[data-v-10bd69b4]{background:#ffffff14}.fil-combo-option.selected[data-v-10bd69b4]{color:var(--fil-accent);font-weight:600}.fil-combo-option-label[data-v-10bd69b4]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-empty[data-v-10bd69b4]{padding:10px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-w-info[data-v-851660c1]{font-size:11px;line-height:1.5;color:#ffffff73;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.fil-w-info[data-ok][data-v-851660c1]{color:var(--fil-ok, #62c987)}.fil-w-info[data-err][data-v-851660c1]{color:var(--fil-danger, #ef6666)}.fil-w-num[data-v-b9154493]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:14px;text-align:left;outline:none;transition:border-color .08s}.fil-w-num[data-v-b9154493]:focus{border-color:var(--fil-accent)}.fil-w-num[data-v-b9154493]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-num[data-v-b9154493]:disabled{opacity:.5}.fil-w-section[data-v-686d0388]{box-sizing:border-box;width:100%;padding:var(--fil-row-pad);border:none;border-radius:5px;background:#ffffff0a;color:var(--fil-muted, rgba(255, 255, 255, .7));font-family:inherit;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;cursor:pointer;text-align:left;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s;display:flex;align-items:center;gap:6px}.fil-w-section[data-v-686d0388]:hover:not(:disabled){background:#ffffff14;color:#fff}.fil-w-section[data-v-686d0388]:disabled{cursor:default}.fil-w-section[data-v-686d0388]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-section-arrow[data-v-686d0388]{display:inline-block;width:8px;font-size:9px;color:var(--fil-accent)}.fil-w-segmented[data-v-fa82f2ad]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-segmented-label[data-v-fa82f2ad]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-pill[data-v-fa82f2ad]{grid-column:2;display:flex;gap:0;min-width:0;background:#ffffff0f;border-radius:7px;padding:3px}.fil-w-pill.disabled[data-v-fa82f2ad]{opacity:.5}.fil-w-seg[data-v-fa82f2ad]{flex:1;text-align:center;padding:6px;border:none;border-radius:5px;background:transparent;font-family:inherit;font-size:12px;color:var(--fil-muted, rgba(255, 255, 255, .55));cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s}.fil-w-seg[data-v-fa82f2ad]:hover:not(.active){color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-w-seg.active[data-v-fa82f2ad]{background:var(--fil-accent);color:#fff;font-weight:500}.fil-w-seg[data-v-fa82f2ad]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-select[data-v-77c303be]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-select-label[data-v-77c303be]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-select-input[data-v-77c303be]{grid-column:2;width:100%;box-sizing:border-box;height:30px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer}.fil-w-select-input[data-v-77c303be]:focus{border-color:var(--fil-accent)}.fil-w-select-input[data-v-77c303be]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-select-input[data-v-77c303be]:disabled{opacity:.5;cursor:default}.fil-w-slider[data-v-5391c869]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-slider-label[data-v-5391c869]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-slider-row[data-v-5391c869]{grid-column:2;display:flex;align-items:center;gap:6px;min-width:0}.fil-w-slider-range[data-v-5391c869]{flex:1;min-width:0;accent-color:var(--fil-accent);cursor:pointer}.fil-w-slider-range[data-v-5391c869]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-slider-row[data-v-5391c869] .fil-w-num{width:70px;flex:none}.fil-style-picker[data-v-6e196d1e]{display:flex;flex-direction:column;gap:10px}.fil-style-cats[data-v-6e196d1e]{display:flex;flex-wrap:wrap;gap:6px}.fil-style-cat[data-v-6e196d1e]{box-sizing:border-box;padding:5px 10px;border-radius:999px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .2));background:#ffffff0a;color:var(--fil-text, rgba(255, 255, 255, .8));font-size:11px;cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-cat[data-v-6e196d1e]:hover{border-color:var(--fil-accent)}.fil-style-cat.active[data-v-6e196d1e]{background:var(--fil-accent);border-color:var(--fil-accent);color:#fff;font-weight:500}.fil-style-cat[data-v-6e196d1e]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-style-search[data-v-6e196d1e]{box-sizing:border-box;width:100%;padding:7px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-style-search[data-v-6e196d1e]:focus{border-color:var(--fil-accent)}.fil-style-grid[data-v-6e196d1e]{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:8px;max-height:50vh;overflow-y:auto;padding-right:2px}.fil-style-tile[data-v-6e196d1e]{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px 6px;border-radius:8px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .14));background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-tile[data-v-6e196d1e]:hover{border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-style-tile.active[data-v-6e196d1e]{border-color:var(--fil-accent);background:#f68a4524}.fil-style-tile[data-v-6e196d1e]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-style-tile-preview[data-v-6e196d1e]{width:100%;aspect-ratio:1;border-radius:6px;background:#ffffff0d;display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:22px}.fil-style-tile-img[data-v-6e196d1e]{width:100%;height:100%;object-fit:cover}.fil-style-tile-label[data-v-6e196d1e]{font-size:10px;text-align:center;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.fil-style-empty[data-v-6e196d1e]{grid-column:1 / -1;padding:20px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-seed-root[data-v-527ba047]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-seed-readout[data-v-527ba047]{display:flex;flex-direction:column;gap:4px}.fil-seed-display[data-v-527ba047]{width:100%;box-sizing:border-box;height:34px;background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);padding:6px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:19px;text-align:center;outline:none;transition:border-color .08s}.fil-seed-display[data-v-527ba047]:focus{border-color:var(--fil-accent)}.fil-seed-display[readonly][data-v-527ba047]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-seed-actions[data-v-527ba047]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px}.fil-provider-root[data-v-2aa7b099]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;min-width:0}.fil-provider-row[data-v-2aa7b099]{display:flex;gap:4px;align-items:stretch;min-width:0}.fil-provider-row[data-v-2aa7b099] .fil-combo{flex:1;min-width:0}.fil-model-filter-bar[data-v-2aa7b099]{display:flex;align-items:center;gap:4px;min-width:0}.fil-model-filter-wrap[data-v-2aa7b099]{flex:1;min-width:0}.fil-model-filter[data-v-2aa7b099]{width:100%;box-sizing:border-box;height:24px;background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);padding:2px 6px;color:var(--fil-text, #e8edf3);font-family:inherit;font-size:11px;outline:none}.fil-model-filter[data-v-2aa7b099]:focus{border-color:var(--fil-accent)}.fil-model-count[data-v-2aa7b099]{font-size:9px;color:var(--fil-muted, rgba(255,255,255,.45));white-space:nowrap;flex-shrink:0}.fil-scanner-root[data-v-875167a9]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;width:100%;box-sizing:border-box;min-width:0}.fil-section-block[data-v-875167a9]{display:flex;flex-direction:column;gap:5px;min-width:0}.fil-w-row[data-v-875167a9]{display:flex;flex-direction:column;gap:3px;min-width:0}.fil-w-textarea[data-v-875167a9],.fil-w-input[data-v-875167a9]{width:100%;box-sizing:border-box;background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);color:var(--fil-text, #a0c4ff);padding:var(--fil-row-pad);font-size:12px;font-family:inherit;outline:none;transition:border-color .08s}.fil-w-textarea[data-v-875167a9]{min-height:56px;resize:vertical}.fil-w-textarea[data-v-875167a9]:focus,.fil-w-input[data-v-875167a9]:focus{border-color:var(--fil-accent)}.fil-style-pair-row[data-v-875167a9]{display:flex;gap:4px;min-width:0}.fil-style-pair-item[data-v-875167a9]{flex:1;min-width:0}.fil-scanner-seed[data-v-875167a9]{display:flex;flex-direction:column;gap:4px;padding-top:3px;border-top:1px solid rgba(255,255,255,.08);min-width:0}.fil-scanner-seed-row[data-v-875167a9]{display:flex;gap:6px;min-width:0}.fil-scanner-seed-field[data-v-875167a9]{flex:1.3;min-width:0;box-sizing:border-box;height:34px;background:#00000059;border:1px solid rgba(255,255,255,.08);border-radius:var(--fil-pill-radius);padding:0 12px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:13px;text-align:center;outline:none;transition:border-color .08s}.fil-scanner-seed-field[data-v-875167a9]:focus{border-color:var(--fil-accent)}.fil-scanner-seed-field.is-random[data-v-875167a9]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-scanner-seed-pill[data-v-875167a9]{flex:1;min-width:0;box-sizing:border-box;height:34px;padding:0 8px;border-radius:var(--fil-pill-radius);border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-text, #e8edf3);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-scanner-seed-pill[data-v-875167a9]:hover{background:#ffffff1f}.fil-scanner-seed-pill.active[data-v-875167a9]{background:#ffffff29;border-color:#fff3}.fil-scanner-seed-pill[data-v-875167a9]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-scanner-seed-pill-accent[data-v-875167a9]{background:var(--fil-accent);border-color:var(--fil-accent);color:#241206;font-weight:700}.fil-scanner-seed-pill-accent[data-v-875167a9]:hover{filter:brightness(1.08);background:var(--fil-accent)}.fil-cleaner-root[data-v-71474bb1]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cleaner-row[data-v-71474bb1]{all:unset;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:var(--fil-row-pad);border-radius:var(--fil-field-radius);border:1px solid var(--fil-glass-border);background:var(--fil-glass-bg);cursor:pointer;-webkit-user-select:none;user-select:none;transition:background .08s,border-color .08s}.fil-cleaner-row[data-v-71474bb1]:hover{background:#ffffff14}.fil-cleaner-row.active[data-v-71474bb1]{border-color:var(--fil-accent);background:#f68a451f}.fil-cleaner-dot[data-v-71474bb1]{width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,.3);flex:none;transition:border-color .08s,background .08s;display:flex;align-items:center;justify-content:center}.fil-cleaner-dot[data-v-71474bb1]:after{content:\"✓\";font-size:10px;line-height:1;color:#fff;opacity:0;transition:opacity .08s}.fil-cleaner-row.active .fil-cleaner-dot[data-v-71474bb1]{background:var(--fil-accent);border-color:var(--fil-accent)}.fil-cleaner-row.active .fil-cleaner-dot[data-v-71474bb1]:after{opacity:1}.fil-cleaner-label[data-v-71474bb1]{flex:1;font-size:12px}.fil-cmp-root[data-v-2abe5720]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cmp-canvas-wrap[data-v-2abe5720]{position:relative;width:100%;height:220px;border-radius:var(--fil-field-radius);border:1px solid var(--fil-glass-border);overflow:hidden;background:linear-gradient(45deg,rgba(255,255,255,.04) 25%,transparent 25%,transparent 75%,rgba(255,255,255,.04) 75%) 0 0/16px 16px,linear-gradient(45deg,rgba(255,255,255,.04) 25%,transparent 25%,transparent 75%,rgba(255,255,255,.04) 75%) 8px 8px/16px 16px,#0d0f13}.fil-cmp-canvas[data-v-2abe5720]{display:block;width:100%;height:100%;touch-action:none}.fil-cmp-canvas.is-wipe[data-v-2abe5720]{cursor:ew-resize}.fil-cmp-placeholder[data-v-2abe5720]{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;text-align:center;padding:12px;color:var(--fil-muted, rgba(255, 255, 255, .5));font-size:12px;pointer-events:none}.fil-cmp-save-row[data-v-2abe5720]{display:grid;grid-template-columns:1fr 1fr;gap:5px}.fil-cmp-settings[data-v-2abe5720]{display:flex;flex-direction:column;gap:5px}.fil-up-root[data-v-4e44dd46]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-up-row[data-v-4e44dd46]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(48px,1fr) minmax(auto,max-content) minmax(48px,1fr);align-items:center;gap:var(--fil-node-gap)}.fil-w-label[data-v-4e44dd46]{font-size:11px;color:var(--fil-muted, rgba(255,255,255,.55))}.fil-hrf-root[data-v-f1a24b42]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-hrf-row[data-v-f1a24b42]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(48px,1fr) minmax(auto,max-content) minmax(48px,1fr);align-items:center;gap:var(--fil-node-gap)}.fil-w-label[data-v-f1a24b42]{font-size:11px;color:var(--fil-muted, rgba(255,255,255,.55))}\n";document.head.appendChild(s);}catch(e){}})();
import { app as sl } from "/scripts/app.js";
/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function $o(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Se = {}, mn = [], _t = () => {
}, ol = () => !1, Es = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ts = (e) => e.startsWith("onUpdate:"), Te = Object.assign, Vo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ba = Object.prototype.hasOwnProperty, _e = (e, t) => Ba.call(e, t), se = Array.isArray, hn = (e) => Zn(e) === "[object Map]", Rs = (e) => Zn(e) === "[object Set]", si = (e) => Zn(e) === "[object Date]", ce = (e) => typeof e == "function", Le = (e) => typeof e == "string", Qe = (e) => typeof e == "symbol", ge = (e) => e !== null && typeof e == "object", il = (e) => (ge(e) || ce(e)) && ce(e.then) && ce(e.catch), ll = Object.prototype.toString, Zn = (e) => ll.call(e), Ha = (e) => Zn(e).slice(8, -1), al = (e) => Zn(e) === "[object Object]", Os = (e) => Le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Tn = /* @__PURE__ */ $o(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ps = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ua = /-\w/g, Ke = Ps(
  (e) => e.replace(Ua, (t) => t.slice(1).toUpperCase())
), ja = /\B([A-Z])/g, Bt = Ps(
  (e) => e.replace(ja, "-$1").toLowerCase()
), Ns = Ps((e) => e.charAt(0).toUpperCase() + e.slice(1)), Qs = Ps(
  (e) => e ? `on${Ns(e)}` : ""
), ht = (e, t) => !Object.is(e, t), ms = (e, ...t) => {
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
}, Wa = (e) => {
  const t = Le(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let oi;
const Vs = () => oi || (oi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ze(e) {
  if (se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = Le(s) ? qa(s) : ze(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (Le(e) || ge(e))
    return e;
}
const za = /;(?![^(]*\))/g, Ka = /:([^]+)/, Ga = /\/\*[^]*?\*\//g;
function qa(e) {
  const t = {};
  return e.replace(Ga, "").split(za).forEach((n) => {
    if (n) {
      const s = n.split(Ka);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function we(e) {
  let t = "";
  if (Le(e))
    t = e;
  else if (se(e))
    for (let n = 0; n < e.length; n++) {
      const s = we(e[n]);
      s && (t += s + " ");
    }
  else if (ge(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Xa = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ya = /* @__PURE__ */ $o(Xa);
function cl(e) {
  return !!e || e === "";
}
function Ja(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = es(e[s], t[s]);
  return n;
}
function es(e, t) {
  if (e === t) return !0;
  let n = si(e), s = si(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Qe(e), s = Qe(t), n || s)
    return e === t;
  if (n = se(e), s = se(t), n || s)
    return n && s ? Ja(e, t) : !1;
  if (n = ge(e), s = ge(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const l in e) {
      const a = e.hasOwnProperty(l), r = t.hasOwnProperty(l);
      if (a && !r || !a && r || !es(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Qa(e, t) {
  return e.findIndex((n) => es(n, t));
}
const ul = (e) => !!(e && e.__v_isRef === !0), ne = (e) => Le(e) ? e : e == null ? "" : se(e) || ge(e) && (e.toString === ll || !ce(e.toString)) ? ul(e) ? ne(e.value) : JSON.stringify(e, dl, 2) : String(e), dl = (e, t) => ul(t) ? dl(e, t.value) : hn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[Zs(s, i) + " =>"] = o, n),
    {}
  )
} : Rs(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Zs(n))
} : Qe(t) ? Zs(t) : ge(t) && !se(t) && !al(t) ? String(t) : t, Zs = (e, t = "") => {
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
function Za(e, t = !1) {
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
    this.flags |= 2, ii(this), bl(this);
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
        Uo(t);
      this.deps = this.depsTail = void 0, ii(this), this.onStop && this.onStop(), this.flags &= -2;
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
let gl = 0, Rn, On;
function _l(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = On, On = e;
    return;
  }
  e.next = Rn, Rn = e;
}
function Bo() {
  gl++;
}
function Ho() {
  if (--gl > 0)
    return;
  if (On) {
    let t = On;
    for (On = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Rn; ) {
    let t = Rn;
    for (Rn = void 0; t; ) {
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
    s.version === -1 ? (s === n && (n = o), Uo(s), er(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === zn) || (e.globalVersion = zn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !_o(e))))
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
function Uo(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Uo(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function er(e) {
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
function ii(e) {
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
let zn = 0;
class tr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class jo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Ce || !lt || Ce === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ce)
      n = this.activeLink = new tr(Ce, this), Ce.deps ? (n.prevDep = Ce.depsTail, Ce.depsTail.nextDep = n, Ce.depsTail = n) : Ce.deps = Ce.depsTail = n, xl(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Ce.depsTail, n.nextDep = void 0, Ce.depsTail.nextDep = n, Ce.depsTail = n, Ce.deps === n && (Ce.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, zn++, this.notify(t);
  }
  notify(t) {
    Bo();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ho();
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
const bs = /* @__PURE__ */ new WeakMap(), en = /* @__PURE__ */ Symbol(
  ""
), bo = /* @__PURE__ */ Symbol(
  ""
), Kn = /* @__PURE__ */ Symbol(
  ""
);
function Ve(e, t, n) {
  if (lt && Ce) {
    let s = bs.get(e);
    s || bs.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new jo()), o.map = s, o.key = n), o.track();
  }
}
function Lt(e, t, n, s, o, i) {
  const l = bs.get(e);
  if (!l) {
    zn++;
    return;
  }
  const a = (r) => {
    r && r.trigger();
  };
  if (Bo(), t === "clear")
    l.forEach(a);
  else {
    const r = se(e), u = r && Os(n);
    if (r && n === "length") {
      const c = Number(s);
      l.forEach((d, f) => {
        (f === "length" || f === Kn || !Qe(f) && f >= c) && a(d);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && a(l.get(n)), u && a(l.get(Kn)), t) {
        case "add":
          r ? u && a(l.get("length")) : (a(l.get(en)), hn(e) && a(l.get(bo)));
          break;
        case "delete":
          r || (a(l.get(en)), hn(e) && a(l.get(bo)));
          break;
        case "set":
          hn(e) && a(l.get(en));
          break;
      }
  }
  Ho();
}
function nr(e, t) {
  const n = bs.get(e);
  return n && n.get(t);
}
function dn(e) {
  const t = /* @__PURE__ */ pe(e);
  return t === e ? t : (Ve(t, "iterate", Kn), /* @__PURE__ */ Je(e) ? t : t.map(at));
}
function Bs(e) {
  return Ve(e = /* @__PURE__ */ pe(e), "iterate", Kn), e;
}
function pt(e, t) {
  return /* @__PURE__ */ At(e) ? vn(/* @__PURE__ */ bt(e) ? at(t) : t) : at(t);
}
const sr = {
  __proto__: null,
  [Symbol.iterator]() {
    return to(this, Symbol.iterator, (e) => pt(this, e));
  },
  concat(...e) {
    return dn(this).concat(
      ...e.map((t) => se(t) ? dn(t) : t)
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
    return dn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return no(this, "lastIndexOf", e);
  },
  map(e, t) {
    return xt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Cn(this, "pop");
  },
  push(...e) {
    return Cn(this, "push", e);
  },
  reduce(e, ...t) {
    return li(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return li(this, "reduceRight", e, t);
  },
  shift() {
    return Cn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return xt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Cn(this, "splice", e);
  },
  toReversed() {
    return dn(this).toReversed();
  },
  toSorted(e) {
    return dn(this).toSorted(e);
  },
  toSpliced(...e) {
    return dn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Cn(this, "unshift", e);
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
const or = Array.prototype;
function xt(e, t, n, s, o, i) {
  const l = Bs(e), a = l !== e && !/* @__PURE__ */ Je(e), r = l[t];
  if (r !== or[t]) {
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
function li(e, t, n, s) {
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
  Ve(s, "iterate", Kn);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Hs(n[0]) ? (n[0] = /* @__PURE__ */ pe(n[0]), s[t](...n)) : o;
}
function Cn(e, t, n = []) {
  yt(), Bo();
  const s = (/* @__PURE__ */ pe(e))[t].apply(e, n);
  return Ho(), wt(), s;
}
const ir = /* @__PURE__ */ $o("__proto__,__v_isRef,__isVue"), Sl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qe)
);
function lr(e) {
  Qe(e) || (e = String(e));
  const t = /* @__PURE__ */ pe(this);
  return Ve(t, "has", e), t.hasOwnProperty(e);
}
class Fl {
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
      return s === (o ? i ? gr : Il : i ? Ll : Ml).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = se(t);
    if (!o) {
      let r;
      if (l && (r = sr[n]))
        return r;
      if (n === "hasOwnProperty")
        return lr;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ he(t) ? t : s
    );
    if ((Qe(n) ? Sl.has(n) : ir(n)) || (o || Ve(t, "get", n), i))
      return a;
    if (/* @__PURE__ */ he(a)) {
      const r = l && Os(n) ? a : a.value;
      return o && ge(r) ? /* @__PURE__ */ vs(r) : r;
    }
    return ge(a) ? o ? /* @__PURE__ */ vs(a) : /* @__PURE__ */ ln(a) : a;
  }
}
class Cl extends Fl {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    const l = se(t) && Os(n);
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
      se(t) ? "length" : en
    ), Reflect.ownKeys(t);
  }
}
class ar extends Fl {
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
const rr = /* @__PURE__ */ new Cl(), cr = /* @__PURE__ */ new ar(), ur = /* @__PURE__ */ new Cl(!0);
const vo = (e) => e, is = (e) => Reflect.getPrototypeOf(e);
function dr(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = /* @__PURE__ */ pe(o), l = hn(i), a = e === "entries" || e === Symbol.iterator && l, r = e === "keys" && l, u = o[e](...s), c = n ? vo : t ? vn : at;
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
function ls(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function fr(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ pe(i), a = /* @__PURE__ */ pe(o);
      e || (ht(o, a) && Ve(l, "get", o), Ve(l, "get", a));
      const { has: r } = is(l), u = t ? vo : e ? vn : at;
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
      const l = this, a = l.__v_raw, r = /* @__PURE__ */ pe(a), u = t ? vo : e ? vn : at;
      return !e && Ve(r, "iterate", en), a.forEach((c, d) => o.call(i, u(c), u(d), l));
    }
  };
  return Te(
    n,
    e ? {
      add: ls("add"),
      set: ls("set"),
      delete: ls("delete"),
      clear: ls("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ pe(this), l = is(i), a = /* @__PURE__ */ pe(o), r = !t && !/* @__PURE__ */ Je(o) && !/* @__PURE__ */ At(o) ? a : o;
        return l.has.call(i, r) || ht(o, r) && l.has.call(i, o) || ht(a, r) && l.has.call(i, a) || (i.add(r), Lt(i, "add", r, r)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ Je(i) && !/* @__PURE__ */ At(i) && (i = /* @__PURE__ */ pe(i));
        const l = /* @__PURE__ */ pe(this), { has: a, get: r } = is(l);
        let u = a.call(l, o);
        u || (o = /* @__PURE__ */ pe(o), u = a.call(l, o));
        const c = r.call(l, o);
        return l.set(o, i), u ? ht(i, c) && Lt(l, "set", o, i) : Lt(l, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ pe(this), { has: l, get: a } = is(i);
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
    n[o] = dr(o, e, t);
  }), n;
}
function Wo(e, t) {
  const n = fr(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    _e(n, o) && o in s ? n : s,
    o,
    i
  );
}
const pr = {
  get: /* @__PURE__ */ Wo(!1, !1)
}, mr = {
  get: /* @__PURE__ */ Wo(!1, !0)
}, hr = {
  get: /* @__PURE__ */ Wo(!0, !1)
};
const Ml = /* @__PURE__ */ new WeakMap(), Ll = /* @__PURE__ */ new WeakMap(), Il = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakMap();
function _r(e) {
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
function ln(e) {
  return /* @__PURE__ */ At(e) ? e : zo(
    e,
    !1,
    rr,
    pr,
    Ml
  );
}
// @__NO_SIDE_EFFECTS__
function br(e) {
  return zo(
    e,
    !1,
    ur,
    mr,
    Ll
  );
}
// @__NO_SIDE_EFFECTS__
function vs(e) {
  return zo(
    e,
    !0,
    cr,
    hr,
    Il
  );
}
function zo(e, t, n, s, o) {
  if (!ge(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const l = _r(Ha(e));
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
function Ko(e) {
  return !_e(e, "__v_skip") && Object.isExtensible(e) && rl(e, "__v_skip", !0), e;
}
const at = (e) => ge(e) ? /* @__PURE__ */ ln(e) : e, vn = (e) => ge(e) ? /* @__PURE__ */ vs(e) : e;
// @__NO_SIDE_EFFECTS__
function he(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function le(e) {
  return vr(e, !1);
}
function vr(e, t) {
  return /* @__PURE__ */ he(e) ? e : new yr(e, t);
}
class yr {
  constructor(t, n) {
    this.dep = new jo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ pe(t), this._value = n ? t : at(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Je(t) || /* @__PURE__ */ At(t);
    t = s ? t : /* @__PURE__ */ pe(t), ht(t, n) && (this._rawValue = t, this._value = s ? t : at(t), this.dep.trigger());
  }
}
function h(e) {
  return /* @__PURE__ */ he(e) ? e.value : e;
}
const wr = {
  get: (e, t, n) => t === "__v_raw" ? e : h(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ he(o) && !/* @__PURE__ */ he(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Al(e) {
  return /* @__PURE__ */ bt(e) ? e : new Proxy(e, wr);
}
// @__NO_SIDE_EFFECTS__
function xr(e) {
  const t = se(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Dl(e, n);
  return t;
}
class Sr {
  constructor(t, n, s) {
    this._object = t, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._key = Qe(n) ? n : String(n), this._raw = /* @__PURE__ */ pe(t);
    let o = !0, i = t;
    if (!se(t) || Qe(this._key) || !Os(this._key))
      do
        o = !/* @__PURE__ */ Hs(i) || /* @__PURE__ */ Je(i);
      while (o && (i = i.__v_raw));
    this._shallow = o;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = h(t)), this._value = t === void 0 ? this._defaultValue : t;
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
    return nr(this._raw, this._key);
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
function Cr(e, t, n) {
  return /* @__PURE__ */ he(e) ? e : ce(e) ? new Fr(e) : ge(e) && arguments.length > 1 ? Dl(e, t, n) : /* @__PURE__ */ le(e);
}
function Dl(e, t, n) {
  return new Sr(e, t, n);
}
class Mr {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new jo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = zn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
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
function Lr(e, t, n = !1) {
  let s, o;
  return ce(e) ? s = e : (s = e.get, o = e.set), new Mr(s, o, n);
}
const as = {}, ys = /* @__PURE__ */ new WeakMap();
let qt;
function Ir(e, t = !1, n = qt) {
  if (n) {
    let s = ys.get(n);
    s || ys.set(n, s = []), s.push(e);
  }
}
function Ar(e, t, n = Se) {
  const { immediate: s, deep: o, once: i, scheduler: l, augmentJob: a, call: r } = n, u = (b) => o ? b : /* @__PURE__ */ Je(b) || o === !1 || o === 0 ? It(b, 1) : It(b);
  let c, d, f, p, g = !1, _ = !1;
  if (/* @__PURE__ */ he(e) ? (d = () => e.value, g = /* @__PURE__ */ Je(e)) : /* @__PURE__ */ bt(e) ? (d = () => u(e), g = !0) : se(e) ? (_ = !0, g = e.some((b) => /* @__PURE__ */ bt(b) || /* @__PURE__ */ Je(b)), d = () => e.map((b) => {
    if (/* @__PURE__ */ he(b))
      return b.value;
    if (/* @__PURE__ */ bt(b))
      return u(b);
    if (ce(b))
      return r ? r(b, 2) : b();
  })) : ce(e) ? t ? d = r ? () => r(e, 2) : e : d = () => {
    if (f) {
      yt();
      try {
        f();
      } finally {
        wt();
      }
    }
    const b = qt;
    qt = c;
    try {
      return r ? r(e, 3, [p]) : e(p);
    } finally {
      qt = b;
    }
  } : d = _t, t && o) {
    const b = d, w = o === !0 ? 1 / 0 : o;
    d = () => It(b(), w);
  }
  const M = ml(), v = () => {
    c.stop(), M && M.active && Vo(M.effects, c);
  };
  if (i && t) {
    const b = t;
    t = (...w) => {
      const k = b(...w);
      return v(), k;
    };
  }
  let S = _ ? new Array(e.length).fill(as) : as;
  const A = (b) => {
    if (!(!(c.flags & 1) || !c.dirty && !b))
      if (t) {
        const w = c.run();
        if (b || o || g || (_ ? w.some((k, T) => ht(k, S[T])) : ht(w, S))) {
          f && f();
          const k = qt;
          qt = c;
          try {
            const T = [
              w,
              // pass undefined as the old value when it's changed for the first time
              S === as ? void 0 : _ && S[0] === as ? [] : S,
              p
            ];
            S = w, r ? r(t, 3, T) : (
              // @ts-expect-error
              t(...T)
            );
          } finally {
            qt = k;
          }
        }
      } else
        c.run();
  };
  return a && a(A), c = new hl(d), c.scheduler = l ? () => l(A, !1) : A, p = (b) => Ir(b, !1, c), f = c.onStop = () => {
    const b = ys.get(c);
    if (b) {
      if (r)
        r(b, 4);
      else
        for (const w of b) w();
      ys.delete(c);
    }
  }, t ? s ? A(!0) : S = c.run() : l ? l(A.bind(null, !0), !0) : c.run(), v.pause = c.pause.bind(c), v.resume = c.resume.bind(c), v.stop = v, v;
}
function It(e, t = 1 / 0, n) {
  if (t <= 0 || !ge(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ he(e))
    It(e.value, t, n);
  else if (se(e))
    for (let s = 0; s < e.length; s++)
      It(e[s], t, n);
  else if (Rs(e) || hn(e))
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
function ts(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    ns(o, t, n);
  }
}
function ot(e, t, n, s) {
  if (ce(e)) {
    const o = ts(e, t, n, s);
    return o && il(o) && o.catch((i) => {
      ns(i, t, n);
    }), o;
  }
  if (se(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(ot(e[i], t, n, s));
    return o;
  }
}
function ns(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: l } = t && t.appContext.config || Se;
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
      yt(), ts(i, null, 10, [
        e,
        r,
        u
      ]), wt();
      return;
    }
  }
  Dr(e, n, o, s, l);
}
function Dr(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const We = [];
let ft = -1;
const gn = [];
let Pt = null, pn = 0;
const kl = /* @__PURE__ */ Promise.resolve();
let ws = null;
function wn(e) {
  const t = ws || kl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function kr(e) {
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
    !(e.flags & 2) && t >= Gn(n) ? We.push(e) : We.splice(kr(t), 0, e), e.flags |= 1, El();
  }
}
function El() {
  ws || (ws = kl.then(Rl));
}
function Er(e) {
  se(e) ? gn.push(...e) : Pt && e.id === -1 ? Pt.splice(pn + 1, 0, e) : e.flags & 1 || (gn.push(e), e.flags |= 1), El();
}
function ai(e, t, n = ft + 1) {
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
  if (gn.length) {
    const t = [...new Set(gn)].sort(
      (n, s) => Gn(n) - Gn(s)
    );
    if (gn.length = 0, Pt) {
      Pt.push(...t);
      return;
    }
    for (Pt = t, pn = 0; pn < Pt.length; pn++) {
      const n = Pt[pn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Pt = null, pn = 0;
  }
}
const Gn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Rl(e) {
  try {
    for (ft = 0; ft < We.length; ft++) {
      const t = We[ft];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ts(
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
    ft = -1, We.length = 0, Tl(), ws = null, (We.length || gn.length) && Rl();
  }
}
let Ne = null, Ol = null;
function xs(e) {
  const t = Ne;
  return Ne = e, Ol = e && e.type.__scopeId || null, t;
}
function Us(e, t = Ne, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Cs(-1);
    const i = xs(t);
    let l;
    try {
      l = e(...o);
    } finally {
      xs(i), s._d && Cs(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Ge(e, t) {
  if (Ne === null)
    return e;
  const n = Gs(Ne), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, l, a, r = Se] = t[o];
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
function Tr(e, t) {
  if (Pe) {
    let n = Pe.provides;
    const s = Pe.parent && Pe.parent.provides;
    s === n && (n = Pe.provides = Object.create(s)), n[e] = t;
  }
}
function Pn(e, t, n = !1) {
  const s = Qo();
  if (s || tn) {
    let o = tn ? tn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ce(t) ? t.call(s && s.proxy) : t;
  }
}
function Rr() {
  return !!(Qo() || tn);
}
const Or = /* @__PURE__ */ Symbol.for("v-scx"), Pr = () => Pn(Or);
function He(e, t, n) {
  return Pl(e, t, n);
}
function Pl(e, t, n = Se) {
  const { immediate: s, deep: o, flush: i, once: l } = n, a = Te({}, n), r = t && s || !t && i !== "post";
  let u;
  if (yn) {
    if (i === "sync") {
      const p = Pr();
      u = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!r) {
      const p = () => {
      };
      return p.stop = _t, p.resume = _t, p.pause = _t, p;
    }
  }
  const c = Pe;
  a.call = (p, g, _) => ot(p, c, g, _);
  let d = !1;
  i === "post" ? a.scheduler = (p) => {
    je(p, c && c.suspense);
  } : i !== "sync" && (d = !0, a.scheduler = (p, g) => {
    g ? p() : Go(p);
  }), a.augmentJob = (p) => {
    t && (p.flags |= 4), d && (p.flags |= 2, c && (p.id = c.uid, p.i = c));
  };
  const f = Ar(e, t, a);
  return yn && (u ? u.push(f) : r && f()), f;
}
function Nr(e, t, n) {
  const s = this.proxy, o = Le(e) ? e.includes(".") ? Nl(s, e) : () => s[e] : e.bind(s, s);
  let i;
  ce(t) ? i = t : (i = t.handler, n = t);
  const l = os(this), a = Pl(o, i.bind(s), n);
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
const Tt = /* @__PURE__ */ new WeakMap(), $l = /* @__PURE__ */ Symbol("_vte"), Vl = (e) => e.__isTeleport, Yt = (e) => e && (e.disabled || e.disabled === ""), $r = (e) => e && (e.defer || e.defer === ""), ri = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ci = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, yo = (e, t) => {
  const n = e && e.to;
  return Le(n) ? t ? t(n) : null : n;
}, Vr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, i, l, a, r, u) {
    const {
      mc: c,
      pc: d,
      pbc: f,
      o: { insert: p, querySelector: g, createText: _, createComment: M, parentNode: v }
    } = u, S = Yt(t.props);
    let { dynamicChildren: A } = t;
    const b = (T, R, I) => {
      T.shapeFlag & 16 && c(
        T.children,
        R,
        I,
        o,
        i,
        l,
        a,
        r
      );
    }, w = (T = t) => {
      const R = Yt(T.props), I = T.target = yo(T.props, g), G = wo(I, T, _, p);
      I && (l !== "svg" && ri(I) ? l = "svg" : l !== "mathml" && ci(I) && (l = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(I), R || (b(T, I, G), An(T, !1)));
    }, k = (T) => {
      const R = () => {
        if (Tt.get(T) === R) {
          if (Tt.delete(T), Yt(T.props)) {
            const I = v(T.el) || n;
            b(T, I, T.anchor), An(T, !0);
          }
          w(T);
        }
      };
      Tt.set(T, R), je(R, i);
    };
    if (e == null) {
      const T = t.el = _(""), R = t.anchor = _("");
      if (p(T, n, s), p(R, n, s), $r(t.props) || i && i.pendingBranch) {
        k(t);
        return;
      }
      S && (b(t, n, R), An(t, !0)), w();
    } else {
      t.el = e.el;
      const T = t.anchor = e.anchor, R = Tt.get(e);
      if (R) {
        R.flags |= 8, Tt.delete(e), k(t);
        return;
      }
      t.targetStart = e.targetStart;
      const I = t.target = e.target, G = t.targetAnchor = e.targetAnchor, O = Yt(e.props), F = O ? n : I, x = O ? T : G;
      if (l === "svg" || ri(I) ? l = "svg" : (l === "mathml" || ci(I)) && (l = "mathml"), A ? (f(
        e.dynamicChildren,
        A,
        F,
        o,
        i,
        l,
        a
      ), Jo(e, t, !0)) : r || d(
        e,
        t,
        F,
        x,
        o,
        i,
        l,
        a,
        !1
      ), S)
        O ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : rs(
          t,
          n,
          T,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const V = yo(t.props, g);
        V && (t.target = V, rs(
          t,
          V,
          null,
          u,
          0
        ));
      } else O && rs(
        t,
        I,
        G,
        u,
        1
      );
      An(t, S);
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
    } = e, p = Yt(f), g = i || !p, _ = Tt.get(e);
    if (_ && (_.flags |= 8, Tt.delete(e)), d && (o(u), o(c)), i && o(r), !_ && (p || d) && l & 16)
      for (let M = 0; M < a.length; M++) {
        const v = a[M];
        s(
          v,
          t,
          n,
          g,
          !!v.dynamicChildren
        );
      }
  },
  move: rs,
  hydrate: Br
};
function rs(e, t, n, { o: { insert: s }, m: o }, i = 2) {
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
function Br(e, t, n, s, o, i, {
  o: { nextSibling: l, parentNode: a, querySelector: r, insert: u, createText: c }
}, d) {
  function f(M, v) {
    let S = v;
    for (; S; ) {
      if (S && S.nodeType === 8) {
        if (S.data === "teleport start anchor")
          t.targetStart = S;
        else if (S.data === "teleport anchor") {
          t.targetAnchor = S, M._lpa = t.targetAnchor && l(t.targetAnchor);
          break;
        }
      }
      S = l(S);
    }
  }
  function p(M, v) {
    v.anchor = d(
      l(M),
      v,
      a(M),
      n,
      s,
      o,
      i
    );
  }
  const g = t.target = yo(
    t.props,
    r
  ), _ = Yt(t.props);
  if (g) {
    const M = g._lpa || g.firstChild;
    t.shapeFlag & 16 && (_ ? (p(e, t), f(g, M), t.targetAnchor || wo(
      g,
      t,
      c,
      u,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      a(e) === g ? e : null
    )) : (t.anchor = l(e), f(g, M), t.targetAnchor || wo(g, t, c, u), d(
      M && l(M),
      t,
      g,
      n,
      s,
      o,
      i
    ))), An(t, _);
  } else _ && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = l(e));
  return t.anchor && l(t.anchor);
}
const Bl = Vr;
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
function Hr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return rn(() => {
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
}, Ur = {
  name: "BaseTransition",
  props: Hl,
  setup(e, { slots: t }) {
    const n = Qo(), s = Hr();
    return () => {
      const o = t.default && zl(t.default(), !0), i = o && o.length ? jl(o) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? te() : void 0
      );
      if (!i)
        return;
      const l = /* @__PURE__ */ pe(e), { mode: a } = l;
      if (s.isLeaving)
        return so(i);
      const r = ui(i);
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
      r.type !== Be && qn(r, u);
      let c = n.subTree && ui(n.subTree);
      if (c && c.type !== Be && !Jt(c, r) && Ul(n).type !== Be) {
        let d = xo(
          c,
          l,
          s,
          n
        );
        if (qn(c, d), a === "out-in" && r.type !== Be)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
          }, so(i);
        a === "in-out" && r.type !== Be ? d.delayLeave = (f, p, g) => {
          const _ = Wl(
            s,
            c
          );
          _[String(c.key)] = c, f[tt] = () => {
            p(), f[tt] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            g(), delete u.delayedLeave, c = void 0;
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
const jr = Ur;
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
    onAfterLeave: g,
    onLeaveCancelled: _,
    onBeforeAppear: M,
    onAppear: v,
    onAfterAppear: S,
    onAppearCancelled: A
  } = t, b = String(e.key), w = Wl(n, e), k = (I, G) => {
    I && ot(
      I,
      s,
      9,
      G
    );
  }, T = (I, G) => {
    const O = G[1];
    k(I, G), se(I) ? I.every((F) => F.length <= 1) && O() : I.length <= 1 && O();
  }, R = {
    mode: l,
    persisted: a,
    beforeEnter(I) {
      let G = r;
      if (!n.isMounted)
        if (i)
          G = M || r;
        else
          return;
      I[tt] && I[tt](
        !0
        /* cancelled */
      );
      const O = w[b];
      O && Jt(e, O) && O.el[tt] && O.el[tt](), k(G, [I]);
    },
    enter(I) {
      if (w[b] === e) return;
      let G = u, O = c, F = d;
      if (!n.isMounted)
        if (i)
          G = v || u, O = S || c, F = A || d;
        else
          return;
      let x = !1;
      I[Mn] = (N) => {
        x || (x = !0, N ? k(F, [I]) : k(O, [I]), R.delayedLeave && R.delayedLeave(), I[Mn] = void 0);
      };
      const V = I[Mn].bind(null, !1);
      G ? T(G, [I, V]) : V();
    },
    leave(I, G) {
      const O = String(e.key);
      if (I[Mn] && I[Mn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return G();
      k(f, [I]);
      let F = !1;
      I[tt] = (V) => {
        F || (F = !0, G(), V ? k(_, [I]) : k(g, [I]), I[tt] = void 0, w[O] === e && delete w[O]);
      };
      const x = I[tt].bind(null, !1);
      w[O] = e, p ? T(p, [I, x]) : x();
    },
    clone(I) {
      const G = xo(
        I,
        t,
        n,
        s,
        o
      );
      return o && o(G), G;
    }
  };
  return R;
}
function so(e) {
  if (ss(e))
    return e = Vt(e), e.children = null, e;
}
function ui(e) {
  if (!ss(e))
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
function qn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, qn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
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
function Fe(e, t) {
  return ce(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Te({ name: e.name }, t, { setup: e })
  ) : e;
}
function qo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function di(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Ss = /* @__PURE__ */ new WeakMap();
function Nn(e, t, n, s, o = !1) {
  if (se(e)) {
    e.forEach(
      (_, M) => Nn(
        _,
        t && (se(t) ? t[M] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (_n(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Nn(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Gs(s.component) : s.el, l = o ? null : i, { i: a, r } = e, u = t && t.r, c = a.refs === Se ? a.refs = {} : a.refs, d = a.setupState, f = /* @__PURE__ */ pe(d), p = d === Se ? ol : (_) => di(c, _) ? !1 : _e(f, _), g = (_, M) => !(M && di(c, M));
  if (u != null && u !== r) {
    if (fi(t), Le(u))
      c[u] = null, p(u) && (d[u] = null);
    else if (/* @__PURE__ */ he(u)) {
      const _ = t;
      g(u, _.k) && (u.value = null), _.k && (c[_.k] = null);
    }
  }
  if (ce(r)) {
    yt();
    try {
      ts(r, a, 12, [l, c]);
    } finally {
      wt();
    }
  } else {
    const _ = Le(r), M = /* @__PURE__ */ he(r);
    if (_ || M) {
      const v = () => {
        if (e.f) {
          const S = _ ? p(r) ? d[r] : c[r] : g() || !e.k ? r.value : c[e.k];
          if (o)
            se(S) && Vo(S, i);
          else if (se(S))
            S.includes(i) || S.push(i);
          else if (_)
            c[r] = [i], p(r) && (d[r] = c[r]);
          else {
            const A = [i];
            g(r, e.k) && (r.value = A), e.k && (c[e.k] = A);
          }
        } else _ ? (c[r] = l, p(r) && (d[r] = l)) : M && (g(r, e.k) && (r.value = l), e.k && (c[e.k] = l));
      };
      if (l) {
        const S = () => {
          v(), Ss.delete(e);
        };
        S.id = -1, Ss.set(e, S), je(S, n);
      } else
        fi(e), v();
    }
  }
}
function fi(e) {
  const t = Ss.get(e);
  t && (t.flags |= 8, Ss.delete(e));
}
const pi = (e) => e.nodeType === 8;
Vs().requestIdleCallback;
Vs().cancelIdleCallback;
function Wr(e, t) {
  if (pi(e) && e.data === "[") {
    let n = 1, s = e.nextSibling;
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1)
          break;
      } else if (pi(s))
        if (s.data === "]") {
          if (--n === 0) break;
        } else s.data === "[" && n++;
      s = s.nextSibling;
    }
  } else
    t(e);
}
const _n = (e) => !!e.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function an(e) {
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
    let g;
    return u || (g = u = t().catch((_) => {
      if (_ = _ instanceof Error ? _ : new Error(String(_)), r)
        return new Promise((M, v) => {
          r(_, () => M(f()), () => v(_), d + 1);
        });
      throw _;
    }).then((_) => g !== u && u ? u : (_ && (_.__esModule || _[Symbol.toStringTag] === "Module") && (_ = _.default), c = _, _)));
  };
  return /* @__PURE__ */ Fe({
    name: "AsyncComponentWrapper",
    __asyncLoader: p,
    __asyncHydrate(g, _, M) {
      let v = !1;
      (_.bu || (_.bu = [])).push(() => v = !0);
      const S = () => {
        v || M();
      }, A = i ? () => {
        const b = i(
          S,
          (w) => Wr(g, w)
        );
        b && (_.bum || (_.bum = [])).push(b);
      } : S;
      c ? A() : p().then(() => !_.isUnmounted && A());
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const g = Pe;
      if (qo(g), c)
        return () => cs(c, g);
      const _ = (w) => {
        u = null, ns(
          w,
          g,
          13,
          !s
        );
      };
      if (a && g.suspense || yn)
        return p().then((w) => () => cs(w, g)).catch((w) => (_(w), () => s ? Y(s, {
          error: w
        }) : null));
      const M = /* @__PURE__ */ le(!1), v = /* @__PURE__ */ le(), S = /* @__PURE__ */ le(!!o);
      let A, b;
      return Ws(() => {
        A != null && clearTimeout(A), b != null && clearTimeout(b);
      }), o && (b = setTimeout(() => {
        g.isUnmounted || (S.value = !1);
      }, o)), l != null && (A = setTimeout(() => {
        if (!g.isUnmounted && !M.value && !v.value) {
          const w = new Error(
            `Async component timed out after ${l}ms.`
          );
          _(w), v.value = w;
        }
      }, l)), p().then(() => {
        g.isUnmounted || (M.value = !0, g.parent && ss(g.parent.vnode) && g.parent.update());
      }).catch((w) => {
        if (g.isUnmounted) {
          u = null;
          return;
        }
        _(w), v.value = w;
      }), () => {
        if (M.value && c)
          return cs(c, g);
        if (v.value && s)
          return Y(s, {
            error: v.value
          });
        if (n && !S.value)
          return cs(
            n,
            g
          );
      };
    }
  });
}
function cs(e, t) {
  const { ref: n, props: s, children: o, ce: i } = t.vnode, l = Y(e, s, o);
  return l.ref = n, l.ce = i, delete t.vnode.ce, l;
}
const ss = (e) => e.type.__isKeepAlive;
function zr(e, t) {
  Kl(e, "a", t);
}
function Kr(e, t) {
  Kl(e, "da", t);
}
function Kl(e, t, n = Pe) {
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
      ss(o.parent.vnode) && Gr(s, t, n, o), o = o.parent;
  }
}
function Gr(e, t, n, s) {
  const o = js(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Ws(() => {
    Vo(s[t], o);
  }, n);
}
function js(e, t, n = Pe, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...l) => {
      yt();
      const a = os(n), r = ot(t, n, e, l);
      return a(), wt(), r;
    });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const Dt = (e) => (t, n = Pe) => {
  (!yn || e === "sp") && js(e, (...s) => t(...s), n);
}, qr = Dt("bm"), rn = Dt("m"), Xr = Dt(
  "bu"
), Yr = Dt("u"), xn = Dt(
  "bum"
), Ws = Dt("um"), Jr = Dt(
  "sp"
), Qr = Dt("rtg"), Zr = Dt("rtc");
function ec(e, t = Pe) {
  js("ec", e, t);
}
const tc = "components", Gl = /* @__PURE__ */ Symbol.for("v-ndc");
function nc(e) {
  return Le(e) ? sc(tc, e, !1) || e : e || Gl;
}
function sc(e, t, n = !0, s = !1) {
  const o = Ne || Pe;
  if (o) {
    const i = o.type;
    {
      const a = Uc(
        i,
        !1
      );
      if (a && (a === t || a === Ke(t) || a === Ns(Ke(t))))
        return i;
    }
    const l = (
      // local registration
      // check instance[type] first which is resolved for options API
      mi(o[e] || i[e], t) || // global registration
      mi(o.appContext[e], t)
    );
    return !l && s ? i : l;
  }
}
function mi(e, t) {
  return e && (e[t] || e[Ke(t)] || e[Ns(Ke(t))]);
}
function Ae(e, t, n, s) {
  let o;
  const i = n, l = se(e);
  if (l || Le(e)) {
    const a = l && /* @__PURE__ */ bt(e);
    let r = !1, u = !1;
    a && (r = !/* @__PURE__ */ Je(e), u = /* @__PURE__ */ At(e), e = Bs(e)), o = new Array(e.length);
    for (let c = 0, d = e.length; c < d; c++)
      o[c] = t(
        r ? u ? vn(at(e[c])) : at(e[c]) : e[c],
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
function oc(e, t, n = {}, s, o) {
  if (Ne.ce || Ne.parent && _n(Ne.parent) && Ne.parent.ce) {
    const u = Object.keys(n).length > 0;
    return C(), Ie(
      de,
      null,
      [Y("slot", n, s)],
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
  return e.some((t) => Yn(t) ? !(t.type === Be || t.type === de && !ql(t.children)) : !0) ? e : null;
}
const So = (e) => e ? pa(e) ? Gs(e) : So(e.parent) : null, $n = (
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
    $watch: (e) => Nr.bind(e)
  })
), oo = (e, t) => e !== Se && !e.__isScriptSetup && _e(e, t), ic = {
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
        if (o !== Se && _e(o, t))
          return l[t] = 2, o[t];
        if (_e(i, t))
          return l[t] = 3, i[t];
        if (n !== Se && _e(n, t))
          return l[t] = 4, n[t];
        Fo && (l[t] = 0);
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
    if (n !== Se && _e(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      d = r.config.globalProperties, _e(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return oo(o, t) ? (o[t] = n, !0) : s !== Se && _e(s, t) ? (s[t] = n, !0) : _e(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: i, type: l }
  }, a) {
    let r;
    return !!(n[a] || e !== Se && a[0] !== "$" && _e(e, a) || oo(t, a) || _e(i, a) || _e(s, a) || _e($n, a) || _e(o.config.globalProperties, a) || (r = l.__cssModules) && r[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : _e(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function hi(e) {
  return se(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Fo = !0;
function lc(e) {
  const t = Yl(e), n = e.proxy, s = e.ctx;
  Fo = !1, t.beforeCreate && gi(t.beforeCreate, e, "bc");
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
    updated: g,
    activated: _,
    deactivated: M,
    beforeDestroy: v,
    beforeUnmount: S,
    destroyed: A,
    unmounted: b,
    render: w,
    renderTracked: k,
    renderTriggered: T,
    errorCaptured: R,
    serverPrefetch: I,
    // public API
    expose: G,
    inheritAttrs: O,
    // assets
    components: F,
    directives: x,
    filters: V
  } = t;
  if (u && ac(u, s, null), l)
    for (const D in l) {
      const j = l[D];
      ce(j) && (s[D] = j.bind(n));
    }
  if (o) {
    const D = o.call(n, n);
    ge(D) && (e.data = /* @__PURE__ */ ln(D));
  }
  if (Fo = !0, i)
    for (const D in i) {
      const j = i[D], W = ce(j) ? j.bind(n, n) : ce(j.get) ? j.get.bind(n, n) : _t, Z = !ce(j) && ce(j.set) ? j.set.bind(n) : _t, ie = J({
        get: W,
        set: Z
      });
      Object.defineProperty(s, D, {
        enumerable: !0,
        configurable: !0,
        get: () => ie.value,
        set: (ve) => ie.value = ve
      });
    }
  if (a)
    for (const D in a)
      Xl(a[D], s, n, D);
  if (r) {
    const D = ce(r) ? r.call(n) : r;
    Reflect.ownKeys(D).forEach((j) => {
      Tr(j, D[j]);
    });
  }
  c && gi(c, e, "c");
  function H(D, j) {
    se(j) ? j.forEach((W) => D(W.bind(n))) : j && D(j.bind(n));
  }
  if (H(qr, d), H(rn, f), H(Xr, p), H(Yr, g), H(zr, _), H(Kr, M), H(ec, R), H(Zr, k), H(Qr, T), H(xn, S), H(Ws, b), H(Jr, I), se(G))
    if (G.length) {
      const D = e.exposed || (e.exposed = {});
      G.forEach((j) => {
        Object.defineProperty(D, j, {
          get: () => n[j],
          set: (W) => n[j] = W,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  w && e.render === _t && (e.render = w), O != null && (e.inheritAttrs = O), F && (e.components = F), x && (e.directives = x), I && qo(e);
}
function ac(e, t, n = _t) {
  se(e) && (e = Co(e));
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
function gi(e, t, n) {
  ot(
    se(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Xl(e, t, n, s) {
  let o = s.includes(".") ? Nl(n, s) : () => n[s];
  if (Le(e)) {
    const i = t[e];
    ce(i) && He(o, i);
  } else if (ce(e))
    He(o, e.bind(n));
  else if (ge(e))
    if (se(e))
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
    (u) => Fs(r, u, l, !0)
  ), Fs(r, t, l)), ge(t) && i.set(t, r), r;
}
function Fs(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && Fs(e, i, n, !0), o && o.forEach(
    (l) => Fs(e, l, n, !0)
  );
  for (const l in t)
    if (!(s && l === "expose")) {
      const a = rc[l] || n && n[l];
      e[l] = a ? a(e[l], t[l]) : t[l];
    }
  return e;
}
const rc = {
  data: _i,
  props: bi,
  emits: bi,
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
  watch: uc,
  // provide / inject
  provide: _i,
  inject: cc
};
function _i(e, t) {
  return t ? e ? function() {
    return Te(
      ce(e) ? e.call(this, this) : e,
      ce(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function cc(e, t) {
  return Dn(Co(e), Co(t));
}
function Co(e) {
  if (se(e)) {
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
function bi(e, t) {
  return e ? se(e) && se(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Te(
    /* @__PURE__ */ Object.create(null),
    hi(e),
    hi(t ?? {})
  ) : t;
}
function uc(e, t) {
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
let dc = 0;
function fc(e, t) {
  return function(s, o = null) {
    ce(s) || (s = Te({}, s)), o != null && !ge(o) && (o = null);
    const i = Jl(), l = /* @__PURE__ */ new WeakSet(), a = [];
    let r = !1;
    const u = i.app = {
      _uid: dc++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Wc,
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
          const p = u._ceVNode || Y(s, o);
          return p.appContext = i, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(p, c, f), r = !0, u._container = c, c.__vue_app__ = u, Gs(p.component);
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
const pc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ke(t)}Modifiers`] || e[`${Bt(t)}Modifiers`];
function mc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Se;
  let o = n;
  const i = t.startsWith("update:"), l = i && pc(s, t.slice(7));
  l && (l.trim && (o = n.map((c) => Le(c) ? c.trim() : c)), l.number && (o = n.map($s)));
  let a, r = s[a = Qs(t)] || // also try camelCase event handler (#2249)
  s[a = Qs(Ke(t))];
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
const hc = /* @__PURE__ */ new WeakMap();
function Ql(e, t, n = !1) {
  const s = n ? hc : t.emitsCache, o = s.get(e);
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
  return !i && !a ? (ge(e) && s.set(e, null), null) : (se(i) ? i.forEach((r) => l[r] = null) : Te(l, i), ge(e) && s.set(e, l), l);
}
function zs(e, t) {
  return !e || !Es(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), _e(e, t[0].toLowerCase() + t.slice(1)) || _e(e, Bt(t)) || _e(e, t));
}
function vi(e) {
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
    ctx: g,
    inheritAttrs: _
  } = e, M = xs(e);
  let v, S;
  try {
    if (n.shapeFlag & 4) {
      const b = o || s, w = b;
      v = mt(
        u.call(
          w,
          b,
          c,
          d,
          p,
          f,
          g
        )
      ), S = a;
    } else {
      const b = t;
      v = mt(
        b.length > 1 ? b(
          d,
          { attrs: a, slots: l, emit: r }
        ) : b(
          d,
          null
        )
      ), S = t.props ? a : gc(a);
    }
  } catch (b) {
    Vn.length = 0, ns(b, e, 1), v = Y(Be);
  }
  let A = v;
  if (S && _ !== !1) {
    const b = Object.keys(S), { shapeFlag: w } = A;
    b.length && w & 7 && (i && b.some(Ts) && (S = _c(
      S,
      i
    )), A = Vt(A, S, !1, !0));
  }
  return n.dirs && (A = Vt(A, null, !1, !0), A.dirs = A.dirs ? A.dirs.concat(n.dirs) : n.dirs), n.transition && qn(A, n.transition), v = A, xs(M), v;
}
const gc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Es(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, _c = (e, t) => {
  const n = {};
  for (const s in e)
    (!Ts(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function bc(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: l, children: a, patchFlag: r } = t, u = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && r >= 0) {
    if (r & 1024)
      return !0;
    if (r & 16)
      return s ? yi(s, l, u) : !!l;
    if (r & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (Zl(l, s, f) && !zs(u, f))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : s === l ? !1 : s ? l ? yi(s, l, u) : !0 : !!l;
  return !1;
}
function yi(e, t, n) {
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
  return n === "style" && ge(s) && ge(o) ? !es(s, o) : s !== o;
}
function vc({ vnode: e, parent: t, suspense: n }, s) {
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
function yc(e, t, n, s = !1) {
  const o = {}, i = ta();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), sa(e, t, o, i);
  for (const l in e.propsOptions[0])
    l in o || (o[l] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ br(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function wc(e, t, n, s) {
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
            const g = Ke(f);
            o[g] = Mo(
              r,
              a,
              g,
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
      o && _e(o, c = Ke(r)) ? !i || !i.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : zs(e.emitsOptions, r) || (!(r in s) || u !== s[r]) && (s[r] = u, l = !0);
    }
  if (i) {
    const r = /* @__PURE__ */ pe(n), u = a || Se;
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
          const c = os(o);
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
const xc = /* @__PURE__ */ new WeakMap();
function oa(e, t, n = !1) {
  const s = n ? xc : t.propsCache, o = s.get(e);
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
    return ge(e) && s.set(e, mn), mn;
  if (se(i))
    for (let c = 0; c < i.length; c++) {
      const d = Ke(i[c]);
      wi(d) && (l[d] = Se);
    }
  else if (i)
    for (const c in i) {
      const d = Ke(c);
      if (wi(d)) {
        const f = i[c], p = l[d] = se(f) || ce(f) ? { type: f } : Te({}, f), g = p.type;
        let _ = !1, M = !0;
        if (se(g))
          for (let v = 0; v < g.length; ++v) {
            const S = g[v], A = ce(S) && S.name;
            if (A === "Boolean") {
              _ = !0;
              break;
            } else A === "String" && (M = !1);
          }
        else
          _ = ce(g) && g.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = _, p[
          1
          /* shouldCastTrue */
        ] = M, (_ || _e(p, "default")) && a.push(d);
      }
    }
  const u = [l, a];
  return ge(e) && s.set(e, u), u;
}
function wi(e) {
  return e[0] !== "$" && !Tn(e);
}
const Xo = (e) => e === "_" || e === "_ctx" || e === "$stable", Yo = (e) => se(e) ? e.map(mt) : [mt(e)], Sc = (e, t, n) => {
  if (t._n)
    return t;
  const s = Us((...o) => Yo(t(...o)), n);
  return s._c = !1, s;
}, ia = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Xo(o)) continue;
    const i = e[o];
    if (ce(i))
      t[o] = Sc(o, i, s);
    else if (i != null) {
      const l = Yo(i);
      t[o] = () => l;
    }
  }
}, la = (e, t) => {
  const n = Yo(t);
  e.slots.default = () => n;
}, aa = (e, t, n) => {
  for (const s in t)
    (n || !Xo(s)) && (e[s] = t[s]);
}, Fc = (e, t, n) => {
  const s = e.slots = ta();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (aa(s, t, n), n && rl(s, "_", o, !0)) : ia(t, s);
  } else t && la(e, t);
}, Cc = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, l = Se;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? i = !1 : aa(o, t, n) : (i = !t.$stable, ia(t, o)), l = t;
  } else t && (la(e, t), l = { default: 1 });
  if (i)
    for (const a in o)
      !Xo(a) && l[a] == null && delete o[a];
}, je = Dc;
function Mc(e) {
  return Lc(e);
}
function Lc(e, t) {
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
    insertStaticContent: g
  } = e, _ = (m, y, L, U = null, B = null, P = null, X = void 0, q = null, K = !!y.dynamicChildren) => {
    if (m === y)
      return;
    m && !Jt(m, y) && (U = jt(m), ve(m, B, P, !0), m = null), y.patchFlag === -2 && (K = !1, y.dynamicChildren = null);
    const { type: $, ref: oe, shapeFlag: Q } = y;
    switch ($) {
      case Ks:
        M(m, y, L, U);
        break;
      case Be:
        v(m, y, L, U);
        break;
      case lo:
        m == null && S(y, L, U, X);
        break;
      case de:
        F(
          m,
          y,
          L,
          U,
          B,
          P,
          X,
          q,
          K
        );
        break;
      default:
        Q & 1 ? w(
          m,
          y,
          L,
          U,
          B,
          P,
          X,
          q,
          K
        ) : Q & 6 ? x(
          m,
          y,
          L,
          U,
          B,
          P,
          X,
          q,
          K
        ) : (Q & 64 || Q & 128) && $.process(
          m,
          y,
          L,
          U,
          B,
          P,
          X,
          q,
          K,
          Re
        );
    }
    oe != null && B ? Nn(oe, m && m.ref, P, y || m, !y) : oe == null && m && m.ref != null && Nn(m.ref, null, P, m, !0);
  }, M = (m, y, L, U) => {
    if (m == null)
      s(
        y.el = a(y.children),
        L,
        U
      );
    else {
      const B = y.el = m.el;
      y.children !== m.children && u(B, y.children);
    }
  }, v = (m, y, L, U) => {
    m == null ? s(
      y.el = r(y.children || ""),
      L,
      U
    ) : y.el = m.el;
  }, S = (m, y, L, U) => {
    [m.el, m.anchor] = g(
      m.children,
      y,
      L,
      U,
      m.el,
      m.anchor
    );
  }, A = ({ el: m, anchor: y }, L, U) => {
    let B;
    for (; m && m !== y; )
      B = f(m), s(m, L, U), m = B;
    s(y, L, U);
  }, b = ({ el: m, anchor: y }) => {
    let L;
    for (; m && m !== y; )
      L = f(m), o(m), m = L;
    o(y);
  }, w = (m, y, L, U, B, P, X, q, K) => {
    if (y.type === "svg" ? X = "svg" : y.type === "math" && (X = "mathml"), m == null)
      k(
        y,
        L,
        U,
        B,
        P,
        X,
        q,
        K
      );
    else {
      const $ = m.el && m.el._isVueCE ? m.el : null;
      try {
        $ && $._beginPatch(), I(
          m,
          y,
          B,
          P,
          X,
          q,
          K
        );
      } finally {
        $ && $._endPatch();
      }
    }
  }, k = (m, y, L, U, B, P, X, q) => {
    let K, $;
    const { props: oe, shapeFlag: Q, transition: ee, dirs: re } = m;
    if (K = m.el = l(
      m.type,
      P,
      oe && oe.is,
      oe
    ), Q & 8 ? c(K, m.children) : Q & 16 && R(
      m.children,
      K,
      null,
      U,
      B,
      io(m, P),
      X,
      q
    ), re && Wt(m, null, U, "created"), T(K, m, m.scopeId, X, U), oe) {
      for (const xe in oe)
        xe !== "value" && !Tn(xe) && i(K, xe, null, oe[xe], P, U);
      "value" in oe && i(K, "value", null, oe.value, P), ($ = oe.onVnodeBeforeMount) && dt($, U, m);
    }
    re && Wt(m, null, U, "beforeMount");
    const me = Ic(B, ee);
    me && ee.beforeEnter(K), s(K, y, L), (($ = oe && oe.onVnodeMounted) || me || re) && je(() => {
      try {
        $ && dt($, U, m), me && ee.enter(K), re && Wt(m, null, U, "mounted");
      } finally {
      }
    }, B);
  }, T = (m, y, L, U, B) => {
    if (L && p(m, L), U)
      for (let P = 0; P < U.length; P++)
        p(m, U[P]);
    if (B) {
      let P = B.subTree;
      if (y === P || ua(P.type) && (P.ssContent === y || P.ssFallback === y)) {
        const X = B.vnode;
        T(
          m,
          X,
          X.scopeId,
          X.slotScopeIds,
          B.parent
        );
      }
    }
  }, R = (m, y, L, U, B, P, X, q, K = 0) => {
    for (let $ = K; $ < m.length; $++) {
      const oe = m[$] = q ? Ct(m[$]) : mt(m[$]);
      _(
        null,
        oe,
        y,
        L,
        U,
        B,
        P,
        X,
        q
      );
    }
  }, I = (m, y, L, U, B, P, X) => {
    const q = y.el = m.el;
    let { patchFlag: K, dynamicChildren: $, dirs: oe } = y;
    K |= m.patchFlag & 16;
    const Q = m.props || Se, ee = y.props || Se;
    let re;
    if (L && zt(L, !1), (re = ee.onVnodeBeforeUpdate) && dt(re, L, y, m), oe && Wt(y, m, L, "beforeUpdate"), L && zt(L, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    $ && (!m.dynamicChildren || m.dynamicChildren.length !== $.length) && (K = 0, X = !1, $ = null), (Q.innerHTML && ee.innerHTML == null || Q.textContent && ee.textContent == null) && c(q, ""), $ ? G(
      m.dynamicChildren,
      $,
      q,
      L,
      U,
      io(y, B),
      P
    ) : X || j(
      m,
      y,
      q,
      null,
      L,
      U,
      io(y, B),
      P,
      !1
    ), K > 0) {
      if (K & 16)
        O(q, Q, ee, L, B);
      else if (K & 2 && Q.class !== ee.class && i(q, "class", null, ee.class, B), K & 4 && i(q, "style", Q.style, ee.style, B), K & 8) {
        const me = y.dynamicProps;
        for (let xe = 0; xe < me.length; xe++) {
          const ye = me[xe], ke = Q[ye], Oe = ee[ye];
          (Oe !== ke || ye === "value") && i(q, ye, ke, Oe, B, L);
        }
      }
      K & 1 && m.children !== y.children && c(q, y.children);
    } else !X && $ == null && O(q, Q, ee, L, B);
    ((re = ee.onVnodeUpdated) || oe) && je(() => {
      re && dt(re, L, y, m), oe && Wt(y, m, L, "updated");
    }, U);
  }, G = (m, y, L, U, B, P, X) => {
    for (let q = 0; q < y.length; q++) {
      const K = m[q], $ = y[q], oe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        K.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (K.type === de || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Jt(K, $) || // - In the case of a component, it could contain anything.
        K.shapeFlag & 198) ? d(K.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          L
        )
      );
      _(
        K,
        $,
        oe,
        null,
        U,
        B,
        P,
        X,
        !0
      );
    }
  }, O = (m, y, L, U, B) => {
    if (y !== L) {
      if (y !== Se)
        for (const P in y)
          !Tn(P) && !(P in L) && i(
            m,
            P,
            y[P],
            null,
            B,
            U
          );
      for (const P in L) {
        if (Tn(P)) continue;
        const X = L[P], q = y[P];
        X !== q && P !== "value" && i(m, P, q, X, B, U);
      }
      "value" in L && i(m, "value", y.value, L.value, B);
    }
  }, F = (m, y, L, U, B, P, X, q, K) => {
    const $ = y.el = m ? m.el : a(""), oe = y.anchor = m ? m.anchor : a("");
    let { patchFlag: Q, dynamicChildren: ee, slotScopeIds: re } = y;
    re && (q = q ? q.concat(re) : re), m == null ? (s($, L, U), s(oe, L, U), R(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      y.children || [],
      L,
      oe,
      B,
      P,
      X,
      q,
      K
    )) : Q > 0 && Q & 64 && ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren && m.dynamicChildren.length === ee.length ? (G(
      m.dynamicChildren,
      ee,
      L,
      B,
      P,
      X,
      q
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (y.key != null || B && y === B.subTree) && Jo(
      m,
      y,
      !0
      /* shallow */
    )) : j(
      m,
      y,
      L,
      oe,
      B,
      P,
      X,
      q,
      K
    );
  }, x = (m, y, L, U, B, P, X, q, K) => {
    y.slotScopeIds = q, m == null ? y.shapeFlag & 512 ? B.ctx.activate(
      y,
      L,
      U,
      X,
      K
    ) : V(
      y,
      L,
      U,
      B,
      P,
      X,
      K
    ) : N(m, y, K);
  }, V = (m, y, L, U, B, P, X) => {
    const q = m.component = Nc(
      m,
      U,
      B
    );
    if (ss(m) && (q.ctx.renderer = Re), $c(q, !1, X), q.asyncDep) {
      if (B && B.registerDep(q, H, X), !m.el) {
        const K = q.subTree = Y(Be);
        v(null, K, y, L), m.placeholder = K.el;
      }
    } else
      H(
        q,
        m,
        y,
        L,
        B,
        P,
        X
      );
  }, N = (m, y, L) => {
    const U = y.component = m.component;
    if (bc(m, y, L))
      if (U.asyncDep && !U.asyncResolved) {
        D(U, y, L);
        return;
      } else
        U.next = y, U.update();
    else
      y.el = m.el, U.vnode = y;
  }, H = (m, y, L, U, B, P, X) => {
    const q = () => {
      if (m.isMounted) {
        let { next: Q, bu: ee, u: re, parent: me, vnode: xe } = m;
        {
          const ct = ra(m);
          if (ct) {
            Q && (Q.el = xe.el, D(m, Q, X)), ct.asyncDep.then(() => {
              je(() => {
                m.isUnmounted || $();
              }, B);
            });
            return;
          }
        }
        let ye = Q, ke;
        zt(m, !1), Q ? (Q.el = xe.el, D(m, Q, X)) : Q = xe, ee && ms(ee), (ke = Q.props && Q.props.onVnodeBeforeUpdate) && dt(ke, me, Q, xe), zt(m, !0);
        const Oe = vi(m), rt = m.subTree;
        m.subTree = Oe, _(
          rt,
          Oe,
          // parent may have changed if it's in a teleport
          d(rt.el),
          // anchor may have changed if it's in a fragment
          jt(rt),
          m,
          B,
          P
        ), Q.el = Oe.el, ye === null && vc(m, Oe.el), re && je(re, B), (ke = Q.props && Q.props.onVnodeUpdated) && je(
          () => dt(ke, me, Q, xe),
          B
        );
      } else {
        let Q;
        const { el: ee, props: re } = y, { bm: me, m: xe, parent: ye, root: ke, type: Oe } = m, rt = _n(y);
        zt(m, !1), me && ms(me), !rt && (Q = re && re.onVnodeBeforeMount) && dt(Q, ye, y), zt(m, !0);
        {
          ke.ce && ke.ce._hasShadowRoot() && ke.ce._injectChildStyle(
            Oe,
            m.parent ? m.parent.type : void 0
          );
          const ct = m.subTree = vi(m);
          _(
            null,
            ct,
            L,
            U,
            m,
            B,
            P
          ), y.el = ct.el;
        }
        if (xe && je(xe, B), !rt && (Q = re && re.onVnodeMounted)) {
          const ct = y;
          je(
            () => dt(Q, ye, ct),
            B
          );
        }
        (y.shapeFlag & 256 || ye && _n(ye.vnode) && ye.vnode.shapeFlag & 256) && m.a && je(m.a, B), m.isMounted = !0, y = L = U = null;
      }
    };
    m.scope.on();
    const K = m.effect = new hl(q);
    m.scope.off();
    const $ = m.update = K.run.bind(K), oe = m.job = K.runIfDirty.bind(K);
    oe.i = m, oe.id = m.uid, K.scheduler = () => Go(oe), zt(m, !0), $();
  }, D = (m, y, L) => {
    y.component = m;
    const U = m.vnode.props;
    m.vnode = y, m.next = null, wc(m, y.props, U, L), Cc(m, y.children, L), yt(), ai(m), wt();
  }, j = (m, y, L, U, B, P, X, q, K = !1) => {
    const $ = m && m.children, oe = m ? m.shapeFlag : 0, Q = y.children, { patchFlag: ee, shapeFlag: re } = y;
    if (ee > 0) {
      if (ee & 128) {
        Z(
          $,
          Q,
          L,
          U,
          B,
          P,
          X,
          q,
          K
        );
        return;
      } else if (ee & 256) {
        W(
          $,
          Q,
          L,
          U,
          B,
          P,
          X,
          q,
          K
        );
        return;
      }
    }
    re & 8 ? (oe & 16 && De($, B, P), Q !== $ && c(L, Q)) : oe & 16 ? re & 16 ? Z(
      $,
      Q,
      L,
      U,
      B,
      P,
      X,
      q,
      K
    ) : De($, B, P, !0) : (oe & 8 && c(L, ""), re & 16 && R(
      Q,
      L,
      U,
      B,
      P,
      X,
      q,
      K
    ));
  }, W = (m, y, L, U, B, P, X, q, K) => {
    m = m || mn, y = y || mn;
    const $ = m.length, oe = y.length, Q = Math.min($, oe);
    let ee;
    for (ee = 0; ee < Q; ee++) {
      const re = y[ee] = K ? Ct(y[ee]) : mt(y[ee]);
      _(
        m[ee],
        re,
        L,
        null,
        B,
        P,
        X,
        q,
        K
      );
    }
    $ > oe ? De(
      m,
      B,
      P,
      !0,
      !1,
      Q
    ) : R(
      y,
      L,
      U,
      B,
      P,
      X,
      q,
      K,
      Q
    );
  }, Z = (m, y, L, U, B, P, X, q, K) => {
    let $ = 0;
    const oe = y.length;
    let Q = m.length - 1, ee = oe - 1;
    for (; $ <= Q && $ <= ee; ) {
      const re = m[$], me = y[$] = K ? Ct(y[$]) : mt(y[$]);
      if (Jt(re, me))
        _(
          re,
          me,
          L,
          null,
          B,
          P,
          X,
          q,
          K
        );
      else
        break;
      $++;
    }
    for (; $ <= Q && $ <= ee; ) {
      const re = m[Q], me = y[ee] = K ? Ct(y[ee]) : mt(y[ee]);
      if (Jt(re, me))
        _(
          re,
          me,
          L,
          null,
          B,
          P,
          X,
          q,
          K
        );
      else
        break;
      Q--, ee--;
    }
    if ($ > Q) {
      if ($ <= ee) {
        const re = ee + 1, me = re < oe ? y[re].el : U;
        for (; $ <= ee; )
          _(
            null,
            y[$] = K ? Ct(y[$]) : mt(y[$]),
            L,
            me,
            B,
            P,
            X,
            q,
            K
          ), $++;
      }
    } else if ($ > ee)
      for (; $ <= Q; )
        ve(m[$], B, P, !0), $++;
    else {
      const re = $, me = $, xe = /* @__PURE__ */ new Map();
      for ($ = me; $ <= ee; $++) {
        const Xe = y[$] = K ? Ct(y[$]) : mt(y[$]);
        Xe.key != null && xe.set(Xe.key, $);
      }
      let ye, ke = 0;
      const Oe = ee - me + 1;
      let rt = !1, ct = 0;
      const Fn = new Array(Oe);
      for ($ = 0; $ < Oe; $++) Fn[$] = 0;
      for ($ = re; $ <= Q; $++) {
        const Xe = m[$];
        if (ke >= Oe) {
          ve(Xe, B, P, !0);
          continue;
        }
        let ut;
        if (Xe.key != null)
          ut = xe.get(Xe.key);
        else
          for (ye = me; ye <= ee; ye++)
            if (Fn[ye - me] === 0 && Jt(Xe, y[ye])) {
              ut = ye;
              break;
            }
        ut === void 0 ? ve(Xe, B, P, !0) : (Fn[ut - me] = $ + 1, ut >= ct ? ct = ut : rt = !0, _(
          Xe,
          y[ut],
          L,
          null,
          B,
          P,
          X,
          q,
          K
        ), ke++);
      }
      const ei = rt ? Ac(Fn) : mn;
      for (ye = ei.length - 1, $ = Oe - 1; $ >= 0; $--) {
        const Xe = me + $, ut = y[Xe], ti = y[Xe + 1], ni = Xe + 1 < oe ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ti.el || ca(ti)
        ) : U;
        Fn[$] === 0 ? _(
          null,
          ut,
          L,
          ni,
          B,
          P,
          X,
          q,
          K
        ) : rt && (ye < 0 || $ !== ei[ye] ? ie(ut, L, ni, 2) : ye--);
      }
    }
  }, ie = (m, y, L, U, B = null) => {
    const { el: P, type: X, transition: q, children: K, shapeFlag: $ } = m;
    if ($ & 6) {
      ie(m.component.subTree, y, L, U);
      return;
    }
    if ($ & 128) {
      m.suspense.move(y, L, U);
      return;
    }
    if ($ & 64) {
      X.move(m, y, L, Re);
      return;
    }
    if (X === de) {
      s(P, y, L);
      for (let Q = 0; Q < K.length; Q++)
        ie(K[Q], y, L, U);
      s(m.anchor, y, L);
      return;
    }
    if (X === lo) {
      A(m, y, L);
      return;
    }
    if (U !== 2 && $ & 1 && q)
      if (U === 0)
        q.persisted && !P[tt] ? s(P, y, L) : (q.beforeEnter(P), s(P, y, L), je(() => q.enter(P), B));
      else {
        const { leave: Q, delayLeave: ee, afterLeave: re } = q, me = () => {
          m.ctx.isUnmounted ? o(P) : s(P, y, L);
        }, xe = () => {
          const ye = P._isLeaving || !!P[tt];
          P._isLeaving && P[tt](
            !0
            /* cancelled */
          ), q.persisted && !ye ? me() : Q(P, () => {
            me(), re && re();
          });
        };
        ee ? ee(P, me, xe) : xe();
      }
    else
      s(P, y, L);
  }, ve = (m, y, L, U = !1, B = !1) => {
    const {
      type: P,
      props: X,
      ref: q,
      children: K,
      dynamicChildren: $,
      shapeFlag: oe,
      patchFlag: Q,
      dirs: ee,
      cacheIndex: re,
      memo: me
    } = m;
    if (Q === -2 && (B = !1), q != null && (yt(), Nn(q, null, L, m, !0), wt()), re != null && (y.renderCache[re] = void 0), oe & 256) {
      y.ctx.deactivate(m);
      return;
    }
    const xe = oe & 1 && ee, ye = !_n(m);
    let ke;
    if (ye && (ke = X && X.onVnodeBeforeUnmount) && dt(ke, y, m), oe & 6)
      $e(m.component, L, U);
    else {
      if (oe & 128) {
        m.suspense.unmount(L, U);
        return;
      }
      xe && Wt(m, null, y, "beforeUnmount"), oe & 64 ? m.type.remove(
        m,
        y,
        L,
        Re,
        U
      ) : $ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !$.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (P !== de || Q > 0 && Q & 64) ? De(
        $,
        y,
        L,
        !1,
        !0
      ) : (P === de && Q & 384 || !B && oe & 16) && De(K, y, L), U && Ze(m);
    }
    const Oe = me != null && re == null;
    (ye && (ke = X && X.onVnodeUnmounted) || xe || Oe) && je(() => {
      ke && dt(ke, y, m), xe && Wt(m, null, y, "unmounted"), Oe && (m.el = null);
    }, L);
  }, Ze = (m) => {
    const { type: y, el: L, anchor: U, transition: B } = m;
    if (y === de) {
      ae(L, U);
      return;
    }
    if (y === lo) {
      b(m);
      return;
    }
    const P = () => {
      o(L), B && !B.persisted && B.afterLeave && B.afterLeave();
    };
    if (m.shapeFlag & 1 && B && !B.persisted) {
      const { leave: X, delayLeave: q } = B, K = () => X(L, P);
      q ? q(m.el, P, K) : K();
    } else
      P();
  }, ae = (m, y) => {
    let L;
    for (; m !== y; )
      L = f(m), o(m), m = L;
    o(y);
  }, $e = (m, y, L) => {
    const { bum: U, scope: B, job: P, subTree: X, um: q, m: K, a: $ } = m;
    xi(K), xi($), U && ms(U), B.stop(), P && (P.flags |= 8, ve(X, m, y, L)), q && je(q, y), je(() => {
      m.isUnmounted = !0;
    }, y);
  }, De = (m, y, L, U = !1, B = !1, P = 0) => {
    for (let X = P; X < m.length; X++)
      ve(m[X], y, L, U, B);
  }, jt = (m) => {
    if (m.shapeFlag & 6)
      return jt(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const y = f(m.anchor || m.el), L = y && y[$l];
    return L ? f(L) : y;
  };
  let ue = !1;
  const qe = (m, y, L) => {
    let U;
    m == null ? y._vnode && (ve(y._vnode, null, null, !0), U = y._vnode.component) : _(
      y._vnode || null,
      m,
      y,
      null,
      null,
      null,
      L
    ), y._vnode = m, ue || (ue = !0, ai(U), Tl(), ue = !1);
  }, Re = {
    p: _,
    um: ve,
    m: ie,
    r: Ze,
    mt: V,
    mc: R,
    pc: j,
    pbc: G,
    n: jt,
    o: e
  };
  return {
    render: qe,
    hydrate: void 0,
    createApp: fc(qe)
  };
}
function io({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function zt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ic(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Jo(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (se(s) && se(o))
    for (let i = 0; i < s.length; i++) {
      const l = s[i];
      let a = o[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[i] = Ct(o[i]), a.el = l.el), !n && a.patchFlag !== -2 && Jo(l, a)), a.type === Ks && (a.patchFlag === -1 && (a = o[i] = Ct(a)), a.el = l.el), a.type === Be && !a.el && (a.el = l.el);
    }
}
function Ac(e) {
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
function xi(e) {
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
function Dc(e, t) {
  t && t.pendingBranch ? se(e) ? t.effects.push(...e) : t.effects.push(e) : Er(e);
}
const de = /* @__PURE__ */ Symbol.for("v-fgt"), Ks = /* @__PURE__ */ Symbol.for("v-txt"), Be = /* @__PURE__ */ Symbol.for("v-cmt"), lo = /* @__PURE__ */ Symbol.for("v-stc"), Vn = [];
let Ye = null;
function C(e = !1) {
  Vn.push(Ye = e ? null : []);
}
function kc() {
  Vn.pop(), Ye = Vn[Vn.length - 1] || null;
}
let Xn = 1;
function Cs(e, t = !1) {
  Xn += e, e < 0 && Ye && t && (Ye.hasOnce = !0);
}
function da(e) {
  return e.dynamicChildren = Xn > 0 ? Ye || mn : null, kc(), Xn > 0 && Ye && Ye.push(e), e;
}
function E(e, t, n, s, o, i) {
  return da(
    z(
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
    Y(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function Yn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Jt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const fa = ({ key: e }) => e ?? null, hs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Le(e) || /* @__PURE__ */ he(e) || ce(e) ? { i: Ne, r: e, k: t, f: !!n } : e : null);
function z(e, t = null, n = null, s = 0, o = null, i = e === de ? 0 : 1, l = !1, a = !1) {
  const r = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && fa(t),
    ref: t && hs(t),
    scopeId: Ol,
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
  return a ? (Ms(r, n), i & 128 && e.normalize(r)) : n && (r.shapeFlag |= Le(n) ? 8 : 16), Xn > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  Ye && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (r.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  r.patchFlag !== 32 && Ye.push(r), r;
}
const Y = Ec;
function Ec(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === Gl) && (e = Be), Yn(e)) {
    const a = Vt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ms(a, n), Xn > 0 && !i && Ye && (a.shapeFlag & 6 ? Ye[Ye.indexOf(e)] = a : Ye.push(a)), a.patchFlag = -2, a;
  }
  if (jc(e) && (e = e.__vccOpts), t) {
    t = Tc(t);
    let { class: a, style: r } = t;
    a && !Le(a) && (t.class = we(a)), ge(r) && (/* @__PURE__ */ Hs(r) && !se(r) && (r = Te({}, r)), t.style = ze(r));
  }
  const l = Le(e) ? 1 : ua(e) ? 128 : Vl(e) ? 64 : ge(e) ? 4 : ce(e) ? 2 : 0;
  return z(
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
function Tc(e) {
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
      n && i ? se(i) ? i.concat(hs(t)) : [i, hs(t)] : hs(t)
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
  return r && s && qn(
    c,
    r.clone(c)
  ), c;
}
function Lo(e = " ", t = 0) {
  return Y(Ks, null, e, t);
}
function te(e = "", t = !1) {
  return t ? (C(), Ie(Be, null, e)) : Y(Be, null, e);
}
function mt(e) {
  return e == null || typeof e == "boolean" ? Y(Be) : se(e) ? Y(
    de,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Yn(e) ? Ct(e) : Y(Ks, null, String(e));
}
function Ct(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Vt(e);
}
function Ms(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (se(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Ms(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !na(t) ? t._ctx = Ne : o === 3 && Ne && (Ne.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ce(t)) {
    if (s & 65) {
      Ms(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ne }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [Lo(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Rc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = we([t.class, s.class]));
      else if (o === "style")
        t.style = ze([t.style, s.style]);
      else if (Es(o)) {
        const i = t[o], l = s[o];
        l && i !== l && !(se(i) && i.includes(l)) ? t[o] = i ? [].concat(i, l) : l : l == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
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
const Oc = Jl();
let Pc = 0;
function Nc(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Oc, i = {
    uid: Pc++,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = mc.bind(null, i), e.ce && e.ce(i), i;
}
let Pe = null;
const Qo = () => Pe || Ne;
let Ls, Io;
{
  const e = Vs(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((l) => l(i)) : o[0](i);
    };
  };
  Ls = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Pe = n
  ), Io = t(
    "__VUE_SSR_SETTERS__",
    (n) => yn = n
  );
}
const os = (e) => {
  const t = Pe;
  return Ls(e), e.scope.on(), () => {
    e.scope.off(), Ls(t);
  };
}, Si = () => {
  Pe && Pe.scope.off(), Ls(null);
};
function pa(e) {
  return e.vnode.shapeFlag & 4;
}
let yn = !1;
function $c(e, t = !1, n = !1) {
  t && Io(t);
  const { props: s, children: o } = e.vnode, i = pa(e);
  yc(e, s, i, t), Fc(e, o, n || t);
  const l = i ? Vc(e, t) : void 0;
  return t && Io(!1), l;
}
function Vc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ic);
  const { setup: s } = n;
  if (s) {
    yt();
    const o = e.setupContext = s.length > 1 ? Hc(e) : null, i = os(e), l = ts(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), a = il(l);
    if (wt(), i(), (a || e.sp) && !_n(e) && qo(e), a) {
      if (l.then(Si, Si), t)
        return l.then((r) => {
          Fi(e, r);
        }).catch((r) => {
          ns(r, e, 0);
        });
      e.asyncDep = l;
    } else
      Fi(e, l);
  } else
    ma(e);
}
function Fi(e, t, n) {
  ce(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ge(t) && (e.setupState = Al(t)), ma(e);
}
function ma(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || _t);
  {
    const o = os(e);
    yt();
    try {
      lc(e);
    } finally {
      wt(), o();
    }
  }
}
const Bc = {
  get(e, t) {
    return Ve(e, "get", ""), e[t];
  }
};
function Hc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Bc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Gs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Al(Ko(e.exposed)), {
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
function Uc(e, t = !0) {
  return ce(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function jc(e) {
  return ce(e) && "__vccOpts" in e;
}
const J = (e, t) => /* @__PURE__ */ Lr(e, t, yn);
function ha(e, t, n) {
  try {
    Cs(-1);
    const s = arguments.length;
    return s === 2 ? ge(t) && !se(t) ? Yn(t) ? Y(e, null, [t]) : Y(e, t) : Y(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Yn(n) && (n = [n]), Y(e, t, n));
  } finally {
    Cs(1);
  }
}
const Wc = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ao;
const Ci = typeof window < "u" && window.trustedTypes;
if (Ci)
  try {
    Ao = /* @__PURE__ */ Ci.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ga = Ao ? (e) => Ao.createHTML(e) : (e) => e, zc = "http://www.w3.org/2000/svg", Kc = "http://www.w3.org/1998/Math/MathML", Ft = typeof document < "u" ? document : null, Mi = Ft && /* @__PURE__ */ Ft.createElement("template"), Gc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? Ft.createElementNS(zc, e) : t === "mathml" ? Ft.createElementNS(Kc, e) : n ? Ft.createElement(e, { is: n }) : Ft.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => Ft.createTextNode(e),
  createComment: (e) => Ft.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ft.querySelector(e),
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
      Mi.innerHTML = ga(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Mi.content;
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
}, Et = "transition", Ln = "animation", Jn = /* @__PURE__ */ Symbol("_vtc"), _a = {
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
}, qc = /* @__PURE__ */ Te(
  {},
  Hl,
  _a
), Xc = (e) => (e.displayName = "Transition", e.props = qc, e), Yc = /* @__PURE__ */ Xc(
  (e, { slots: t }) => ha(jr, Jc(e), t)
), Kt = (e, t = []) => {
  se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Li = (e) => e ? se(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Jc(e) {
  const t = {};
  for (const F in e)
    F in _a || (t[F] = e[F]);
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
  } = e, g = Qc(o), _ = g && g[0], M = g && g[1], {
    onBeforeEnter: v,
    onEnter: S,
    onEnterCancelled: A,
    onLeave: b,
    onLeaveCancelled: w,
    onBeforeAppear: k = v,
    onAppear: T = S,
    onAppearCancelled: R = A
  } = t, I = (F, x, V, N) => {
    F._enterCancelled = N, Gt(F, x ? c : a), Gt(F, x ? u : l), V && V();
  }, G = (F, x) => {
    F._isLeaving = !1, Gt(F, d), Gt(F, p), Gt(F, f), x && x();
  }, O = (F) => (x, V) => {
    const N = F ? T : S, H = () => I(x, F, V);
    Kt(N, [x, H]), Ii(() => {
      Gt(x, F ? r : i), St(x, F ? c : a), Li(N) || Ai(x, s, _, H);
    });
  };
  return Te(t, {
    onBeforeEnter(F) {
      Kt(v, [F]), St(F, i), St(F, l);
    },
    onBeforeAppear(F) {
      Kt(k, [F]), St(F, r), St(F, u);
    },
    onEnter: O(!1),
    onAppear: O(!0),
    onLeave(F, x) {
      F._isLeaving = !0;
      const V = () => G(F, x);
      St(F, d), F._enterCancelled ? (St(F, f), Ei(F)) : (Ei(F), St(F, f)), Ii(() => {
        F._isLeaving && (Gt(F, d), St(F, p), Li(b) || Ai(F, s, M, V));
      }), Kt(b, [F, V]);
    },
    onEnterCancelled(F) {
      I(F, !1, void 0, !0), Kt(A, [F]);
    },
    onAppearCancelled(F) {
      I(F, !0, void 0, !0), Kt(R, [F]);
    },
    onLeaveCancelled(F) {
      G(F), Kt(w, [F]);
    }
  });
}
function Qc(e) {
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
  return Wa(e);
}
function St(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Jn] || (e[Jn] = /* @__PURE__ */ new Set())).add(t);
}
function Gt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Jn];
  n && (n.delete(t), n.size || (e[Jn] = void 0));
}
function Ii(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Zc = 0;
function Ai(e, t, n, s) {
  const o = e._endId = ++Zc, i = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: l, timeout: a, propCount: r } = eu(e, t);
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
function eu(e, t) {
  const n = window.getComputedStyle(e), s = (g) => (n[g] || "").split(", "), o = s(`${Et}Delay`), i = s(`${Et}Duration`), l = Di(o, i), a = s(`${Ln}Delay`), r = s(`${Ln}Duration`), u = Di(a, r);
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
function Di(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => ki(n) + ki(e[s])));
}
function ki(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ei(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function tu(e, t, n) {
  const s = e[Jn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Is = /* @__PURE__ */ Symbol("_vod"), ba = /* @__PURE__ */ Symbol("_vsh"), As = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Is] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : In(e, t);
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
  e.style.display = t ? e[Is] : "none", e[ba] = !t;
}
const nu = /* @__PURE__ */ Symbol(""), su = /(?:^|;)\s*display\s*:/;
function ou(e, t, n) {
  const s = e.style, o = Le(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (Le(t))
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
      a != null ? lu(
        e,
        l,
        !Le(t) && t ? t[l] : void 0,
        a
      ) || kn(s, l, a) : kn(s, l, "");
    }
  } else if (o) {
    if (t !== n) {
      const l = s[nu];
      l && (n += ";" + l), s.cssText = n, i = su.test(n);
    }
  } else t && e.removeAttribute("style");
  Is in e && (e[Is] = i ? s.display : "", e[ba] && (s.display = "none"));
}
const Ti = /\s*!important$/;
function kn(e, t, n) {
  if (se(n))
    n.forEach((s) => kn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = iu(e, t);
    Ti.test(n) ? e.setProperty(
      Bt(s),
      n.replace(Ti, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ri = ["Webkit", "Moz", "ms"], ro = {};
function iu(e, t) {
  const n = ro[t];
  if (n)
    return n;
  let s = Ke(t);
  if (s !== "filter" && s in e)
    return ro[t] = s;
  s = Ns(s);
  for (let o = 0; o < Ri.length; o++) {
    const i = Ri[o] + s;
    if (i in e)
      return ro[t] = i;
  }
  return t;
}
function lu(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Le(s) && n === s;
}
const Oi = "http://www.w3.org/1999/xlink";
function Pi(e, t, n, s, o, i = Ya(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Oi, t.slice(6, t.length)) : e.setAttributeNS(Oi, t, n) : n == null || i && !cl(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Qe(n) ? String(n) : n
  );
}
function Ni(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ga(n) : n);
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
function au(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const $i = /* @__PURE__ */ Symbol("_vei");
function ru(e, t, n, s, o = null) {
  const i = e[$i] || (e[$i] = {}), l = i[t];
  if (s && l)
    l.value = s;
  else {
    const [a, r] = du(t);
    if (s) {
      const u = i[t] = mu(
        s,
        o
      );
      Qt(e, a, u, r);
    } else l && (au(e, a, l, r), i[t] = void 0);
  }
}
const cu = /(Once|Passive|Capture)$/, uu = /^on:?(?:Once|Passive|Capture)$/;
function du(e) {
  let t, n;
  for (; (n = e.match(cu)) && !uu.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Bt(e.slice(2)), t];
}
let co = 0;
const fu = /* @__PURE__ */ Promise.resolve(), pu = () => co || (fu.then(() => co = 0), co = Date.now());
function mu(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const o = n.value;
    if (se(o)) {
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
  return n.value = e, n.attached = pu(), n;
}
const Vi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, hu = (e, t, n, s, o, i) => {
  const l = o === "svg";
  t === "class" ? tu(e, s, l) : t === "style" ? ou(e, n, s) : Es(t) ? Ts(t) || ru(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : gu(e, t, s, l)) ? (Ni(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Pi(e, t, s, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (_u(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Le(s))) ? Ni(e, Ke(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Pi(e, t, s, l));
};
function gu(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Vi(t) && ce(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Vi(t) && Le(n) ? !1 : t in e;
}
function _u(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Ke(t);
  return Array.isArray(n) ? n.some((o) => Ke(o) === s) : Object.keys(n).some((o) => Ke(o) === s);
}
const Ds = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return se(t) ? (n) => ms(t, n) : t;
};
function bu(e) {
  e.target.composing = !0;
}
function Bi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const bn = /* @__PURE__ */ Symbol("_assign");
function Hi(e, t, n) {
  return t && (e = e.trim()), n && (e = $s(e)), e;
}
const vt = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[bn] = Ds(o);
    const i = s || o.props && o.props.type === "number";
    Qt(e, t ? "change" : "input", (l) => {
      l.target.composing || e[bn](Hi(e.value, n, i));
    }), (n || i) && Qt(e, "change", () => {
      e.value = Hi(e.value, n, i);
    }), t || (Qt(e, "compositionstart", bu), Qt(e, "compositionend", Bi), Qt(e, "change", Bi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: i } }, l) {
    if (e[bn] = Ds(l), e.composing) return;
    const a = (i || e.type === "number") && !/^0\d/.test(e.value) ? $s(e.value) : e.value, r = t ?? "";
    if (a === r)
      return;
    const u = e.getRootNode();
    (u instanceof Document || u instanceof ShadowRoot) && u.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === r) || (e.value = r);
  }
}, vu = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = Rs(t);
    Qt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? $s(ks(l)) : ks(l)
      );
      e[bn](
        e.multiple ? o ? new Set(i) : i : i[0]
      ), e._assigning = !0, wn(() => {
        e._assigning = !1;
      });
    }), e[bn] = Ds(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ui(e, t);
  },
  beforeUpdate(e, t, n) {
    e[bn] = Ds(n);
  },
  updated(e, { value: t }) {
    e._assigning || Ui(e, t);
  }
};
function Ui(e, t) {
  const n = e.multiple, s = se(t);
  if (!(n && !s && !Rs(t))) {
    for (let o = 0, i = e.options.length; o < i; o++) {
      const l = e.options[o], a = ks(l);
      if (n)
        if (s) {
          const r = typeof a;
          r === "string" || r === "number" ? l.selected = t.some((u) => String(u) === String(a)) : l.selected = Qa(t, a) > -1;
        } else
          l.selected = t.has(a);
      else if (es(ks(l), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function ks(e) {
  return "_value" in e ? e._value : e.value;
}
const yu = ["ctrl", "shift", "alt", "meta"], wu = {
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
  exact: (e, t) => yu.some((n) => e[`${n}Key`] && !t.includes(n))
}, ji = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...i) => {
    for (let l = 0; l < t.length; l++) {
      const a = wu[t[l]];
      if (a && a(o, t)) return;
    }
    return e(o, ...i);
  });
}, xu = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, gs = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const i = Bt(o.key);
    if (t.some(
      (l) => l === i || xu[l] === i
    ))
      return e(o);
  });
}, Su = /* @__PURE__ */ Te({ patchProp: hu }, Gc);
let Wi;
function va() {
  return Wi || (Wi = Mc(Su));
}
const zi = (...e) => {
  va().render(...e);
}, qs = (...e) => {
  const t = va().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = Cu(s);
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
function Cu(e) {
  return Le(e) ? document.querySelector(e) : e;
}
const Xs = {
  accent: "#f08a45",
  panel: "#171b22",
  panelAlt: "#222934",
  text: "#e8edf3",
  muted: "#9ca8b5",
  danger: "#ef6666",
  ok: "#62c987"
}, Mu = {
  accent: "#c9682c",
  panel: "#eef1f5",
  panelAlt: "#e2e6ec",
  text: "#1c2430",
  muted: "#5b6572",
  danger: "#c94b4b",
  ok: "#3f8f5f"
}, Lu = {
  accent: "#00e5ff",
  panel: "#0a0e1a",
  panelAlt: "#131a2e",
  text: "#dff9ff",
  muted: "#5f7d94",
  danger: "#ff2e63",
  ok: "#00ff9f"
}, Iu = {
  accent: "#d4a017",
  panel: "#1a1712",
  panelAlt: "#26221a",
  text: "#e8dcc0",
  muted: "#8a7d5f",
  danger: "#9a3324",
  ok: "#8fbf3f"
}, Au = {
  default: Xs,
  cyberpunk: Lu,
  fallout: Iu
}, Mt = { ...Xs };
let Bn = null, Hn = null;
function Do(e) {
  return `--fil-accent:${e.accent};--fil-panel:${e.panel};--fil-panel-alt:${e.panelAlt};--fil-text:${e.text};--fil-muted:${e.muted};--fil-danger:${e.danger};--fil-ok:${e.ok};`;
}
const Du = {
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
}, ku = "--fil-surface-bg:rgba(100,180,220,0.06);--fil-surface-border:rgba(0,255,255,0.18);--fil-surface-radius:20px;--fil-surface-blur:10px;--fil-surface-shadow:0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08);--fil-glass-bg:rgba(50,80,120,0.18);--fil-glass-border:rgba(0,150,200,0.35);--fil-field-radius:10px;--fil-pill-radius:17px;--fil-pill-bg:rgba(255,255,255,0.06);--fil-pill-border:rgba(0,150,200,0.4);", Eu = "--fil-surface-bg:rgba(70,130,170,0.08);--fil-surface-border:rgba(40,120,160,0.28);--fil-surface-radius:20px;--fil-surface-blur:10px;--fil-surface-shadow:0 8px 24px rgba(40,60,90,0.18), inset 0 1px 0 rgba(255,255,255,0.5);--fil-glass-bg:rgba(120,160,200,0.16);--fil-glass-border:rgba(40,120,160,0.3);--fil-field-radius:10px;--fil-pill-radius:17px;--fil-pill-bg:rgba(30,60,90,0.06);--fil-pill-border:rgba(40,120,160,0.35);";
function Tu() {
  if (typeof document > "u" || document.getElementById("fil-brand-vars")) return;
  const e = document.createElement("style");
  e.id = "fil-brand-vars", e.textContent = `:root{${Do(Xs)}--fil-radius:8px;--fil-node-pad:3px;--fil-node-gap:4px;--fil-row-pad:4px 6px;--fil-input-border:rgba(240,138,69,0.35);${ku}}
.comfy-theme-light{${Do(Mu)}--fil-input-border:rgba(201,104,44,0.35);${Eu}}
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
function ya(e) {
  const t = Au[e] ?? Xs;
  Object.assign(Mt, t), !(typeof document > "u") && (document.documentElement.dataset.filTheme = e, Bn && (Bn.textContent = e === "default" ? "" : `:root{${Do(t)}}`), Hn && (Hn.textContent = Du[e] ?? ""));
}
const Ru = {
  class: "fil-color-picker",
  role: "group",
  "aria-label": "Color picker"
}, Ou = { class: "fil-cp-hex-row" }, Pu = {
  class: "fil-cp-presets",
  role: "listbox",
  "aria-label": "Preset colors"
}, Nu = ["aria-selected", "aria-label", "title", "onClick"], $u = /* @__PURE__ */ Fe({
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
    ], s = e, o = t, i = J(() => s.presets ?? n);
    function l(x) {
      o("update:modelValue", x);
    }
    function a(x) {
      return Math.min(1, Math.max(0, x));
    }
    function r(x) {
      const V = /^#?([0-9a-f]{6})$/i.exec(x.trim());
      if (!V) return null;
      const N = parseInt(V[1], 16);
      return [N >> 16 & 255, N >> 8 & 255, N & 255];
    }
    function u(x, V, N) {
      const H = (D) => Math.round(a(D / 255) * 255).toString(16).padStart(2, "0");
      return `#${H(x)}${H(V)}${H(N)}`;
    }
    function c(x, V, N) {
      const H = x / 255, D = V / 255, j = N / 255, W = Math.max(H, D, j), Z = Math.min(H, D, j), ie = W - Z;
      let ve = 0;
      ie !== 0 && (W === H ? ve = (D - j) / ie % 6 : W === D ? ve = (j - H) / ie + 2 : ve = (H - D) / ie + 4, ve *= 60, ve < 0 && (ve += 360));
      const Ze = W === 0 ? 0 : ie / W;
      return [ve, Ze, W];
    }
    function d(x, V, N) {
      const H = N * V, D = H * (1 - Math.abs(x / 60 % 2 - 1)), j = N - H;
      let [W, Z, ie] = [0, 0, 0];
      return x < 60 ? [W, Z, ie] = [H, D, 0] : x < 120 ? [W, Z, ie] = [D, H, 0] : x < 180 ? [W, Z, ie] = [0, H, D] : x < 240 ? [W, Z, ie] = [0, D, H] : x < 300 ? [W, Z, ie] = [D, 0, H] : [W, Z, ie] = [H, 0, D], [(W + j) * 255, (Z + j) * 255, (ie + j) * 255];
    }
    const f = /* @__PURE__ */ le(0), p = /* @__PURE__ */ le(0), g = /* @__PURE__ */ le(0), _ = /* @__PURE__ */ le(s.modelValue);
    function M(x) {
      const V = r(x);
      if (!V) return;
      const [N, H, D] = c(...V);
      f.value = N, p.value = H, g.value = D, _.value = u(...V);
    }
    He(() => s.modelValue, (x) => M(x), { immediate: !0 });
    const v = J(() => u(...d(f.value, p.value, g.value)));
    function S() {
      o("update:modelValue", v.value), _.value = v.value;
    }
    function A() {
      const x = r(_.value);
      if (!x) {
        _.value = v.value;
        return;
      }
      const [V, N, H] = c(...x);
      f.value = V, p.value = N, g.value = H, o("update:modelValue", u(...x));
    }
    const b = /* @__PURE__ */ le(null), w = /* @__PURE__ */ le(null);
    function k(x) {
      const V = b.value;
      if (!V) return;
      const N = V.getBoundingClientRect();
      p.value = a((x.clientX - N.left) / N.width), g.value = a(1 - (x.clientY - N.top) / N.height), S();
    }
    function T(x) {
      const V = w.value;
      if (!V) return;
      const N = V.getBoundingClientRect();
      f.value = a((x.clientX - N.left) / N.width) * 360, S();
    }
    function R(x) {
      x.preventDefault(), k(x);
      const V = (H) => k(H), N = () => {
        window.removeEventListener("pointermove", V), window.removeEventListener("pointerup", N);
      };
      window.addEventListener("pointermove", V), window.addEventListener("pointerup", N);
    }
    function I(x) {
      x.preventDefault(), T(x);
      const V = (H) => T(H), N = () => {
        window.removeEventListener("pointermove", V), window.removeEventListener("pointerup", N);
      };
      window.addEventListener("pointermove", V), window.addEventListener("pointerup", N);
    }
    const G = J(() => `hsl(${f.value}, 100%, 50%)`), O = J(() => ({
      left: `${p.value * 100}%`,
      top: `${(1 - g.value) * 100}%`
    })), F = J(() => ({ left: `${f.value / 360 * 100}%` }));
    return (x, V) => (C(), E("div", Ru, [
      z("div", {
        ref_key: "svRef",
        ref: b,
        class: "fil-cp-sv",
        style: ze({ background: G.value }),
        onPointerdown: R
      }, [
        V[1] || (V[1] = z("div", { class: "fil-cp-sv-white" }, null, -1)),
        V[2] || (V[2] = z("div", { class: "fil-cp-sv-black" }, null, -1)),
        z("div", {
          class: "fil-cp-sv-thumb",
          style: ze(O.value)
        }, null, 4)
      ], 36),
      z("div", {
        ref_key: "hueRef",
        ref: w,
        class: "fil-cp-hue",
        onPointerdown: I
      }, [
        z("div", {
          class: "fil-cp-hue-thumb",
          style: ze(F.value)
        }, null, 4)
      ], 544),
      z("div", Ou, [
        z("span", {
          class: "fil-cp-swatch",
          style: ze({ background: v.value })
        }, null, 4),
        Ge(z("input", {
          "onUpdate:modelValue": V[0] || (V[0] = (N) => _.value = N),
          class: "fil-cp-hex-input",
          type: "text",
          spellcheck: "false",
          "aria-label": "Hex color",
          onKeydown: gs(A, ["enter"]),
          onBlur: A
        }, null, 544), [
          [vt, _.value]
        ])
      ]),
      z("div", Pu, [
        (C(!0), E(de, null, Ae(i.value, (N) => (C(), E("button", {
          key: N,
          class: we(["fil-color-swatch", { "is-active": e.modelValue === N }]),
          style: ze({ "--swatch": N }),
          "aria-selected": e.modelValue === N,
          "aria-label": N,
          title: N,
          onClick: (H) => l(N)
        }, null, 14, Nu))), 128))
      ])
    ]));
  }
}), Me = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Vu = /* @__PURE__ */ Me($u, [["__scopeId", "data-v-c4d5f476"]]), Ki = "__fil_color_picker_popup__";
function Bu(e) {
  return [
    {
      content: "Change color…",
      callback: (t, n, s) => Hu(e, s)
    }
  ];
}
function Hu(e, t) {
  const n = document.getElementById(Ki);
  n && n.remove();
  const s = document.createElement("div");
  s.id = Ki;
  const o = 176, i = 260, l = t ? Math.min(t.clientX, window.innerWidth - o - 8) : window.innerWidth / 2 - o / 2, a = t ? Math.min(t.clientY, window.innerHeight - i - 8) : window.innerHeight / 2 - i / 2;
  s.style.cssText = `position:fixed;z-index:10001;top:${Math.max(8, a)}px;left:${Math.max(8, l)}px;`, document.body.appendChild(s);
  function r(p) {
    e.color = p, e.__fx && (e.__fx.color = p), e.properties = e.properties || {}, e.properties.fil_custom_color = !0, u();
  }
  function u() {
    zi(null, s), s.remove(), document.removeEventListener("mousedown", c, !0), document.removeEventListener("keydown", d, !0);
  }
  function c(p) {
    s.contains(p.target) || u();
  }
  function d(p) {
    p.key === "Escape" && u();
  }
  const f = ha(Vu, {
    modelValue: e.color ?? "#78716c",
    "onUpdate:modelValue": (p) => r(p)
  });
  zi(f, s), document.addEventListener("mousedown", c, !0), document.addEventListener("keydown", d, !0), wn(() => {
    var p;
    (p = s.querySelector(".fil-color-swatch")) == null || p.focus();
  });
}
const Uu = "fil";
function Ht(e, t = {}) {
  const s = e.prototype;
  if (s._filStyled) return;
  s._filStyled = !0, t.minSize && (s.minSize = t.minSize), s._filFamily = t.family ?? Uu, s._filDescription = t.description ?? "", t.badges && (s.badges = t.badges), s.color = Mt.accent, s.bgcolor = Mt.panelAlt;
  const o = s.onNodeCreated;
  s.onNodeCreated = function(...l) {
    const a = o == null ? void 0 : o.apply(this, l);
    return this.color = Mt.accent, this.bgcolor = Mt.panelAlt, a;
  }, s.onDrawTitleBar = function(l, a, r, u, c) {
    var g;
    const d = ((g = globalThis.LiteGraph) == null ? void 0 : g.ROUND_RADIUS) ?? 8, f = !!this.collapsed;
    l.fillStyle = Mt.panel, l.beginPath(), l.roundRect(0, -a, r[0], a, f ? [d] : [d, d, 0, 0]), l.fill();
    const p = 3;
    l.fillStyle = c || Mt.accent, l.beginPath(), l.roundRect(0, -a, p, a, f ? [d, 0, 0, d] : [d, 0, 0, 0]), l.fill();
  };
  const i = s.getExtraMenuOptions;
  s.getExtraMenuOptions = function(...l) {
    const a = i == null ? void 0 : i.apply(this, l), r = l[1];
    return Array.isArray(r) && r.push(null, ...Bu(this)), a;
  };
}
function ju(e) {
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
let wa;
const Ys = (e) => wa = e, xa = (
  /* istanbul ignore next */
  Symbol()
);
function ko(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Un;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Un || (Un = {}));
function Sa() {
  const e = pl(!0), t = e.run(() => /* @__PURE__ */ le({}));
  let n = [], s = [];
  const o = Ko({
    install(i) {
      Ys(o), o._a = i, i.provide(xa, o), i.config.globalProperties.$pinia = o, s.forEach((l) => n.push(l)), s = [];
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
  return !n && ml() && Za(o), o;
}
function fn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Wu = (e) => e(), qi = Symbol(), uo = Symbol();
function Eo(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], o = e[n];
    ko(o) && ko(s) && e.hasOwnProperty(n) && !/* @__PURE__ */ he(s) && !/* @__PURE__ */ bt(s) ? e[n] = Eo(o, s) : e[n] = s;
  }
  return e;
}
const zu = (
  /* istanbul ignore next */
  Symbol()
);
function Ku(e) {
  return !ko(e) || !e.hasOwnProperty(zu);
}
const { assign: Rt } = Object;
function Gu(e) {
  return !!(/* @__PURE__ */ he(e) && e.effect);
}
function qu(e, t, n, s) {
  const { state: o, actions: i, getters: l } = t, a = n.state.value[e];
  let r;
  function u() {
    a || (n.state.value[e] = o ? o() : {});
    const c = /* @__PURE__ */ xr(n.state.value[e]);
    return Rt(c, i, Object.keys(l || {}).reduce((d, f) => (d[f] = Ko(J(() => {
      Ys(n);
      const p = n._s.get(e);
      return l[f].call(p, p);
    })), d), {}));
  }
  return r = Ca(e, u, t, n, s, !0), r;
}
function Ca(e, t, n = {}, s, o, i) {
  let l;
  const a = Rt({ actions: {} }, n), r = { deep: !0 };
  let u, c, d = [], f = [], p;
  const g = s.state.value[e];
  !i && !g && (s.state.value[e] = {});
  let _;
  function M(R) {
    let I;
    u = c = !1, typeof R == "function" ? (R(s.state.value[e]), I = {
      type: Un.patchFunction,
      storeId: e,
      events: p
    }) : (Eo(s.state.value[e], R), I = {
      type: Un.patchObject,
      payload: R,
      storeId: e,
      events: p
    });
    const G = _ = Symbol();
    wn().then(() => {
      _ === G && (u = !0);
    }), c = !0, fn(d, I, s.state.value[e]);
  }
  const v = i ? function() {
    const { state: I } = n, G = I ? I() : {};
    this.$patch((O) => {
      Rt(O, G);
    });
  } : (
    /* istanbul ignore next */
    Fa
  );
  function S() {
    l.stop(), d = [], f = [], s._s.delete(e);
  }
  const A = (R, I = "") => {
    if (qi in R)
      return R[uo] = I, R;
    const G = function() {
      Ys(s);
      const O = Array.from(arguments), F = [], x = [];
      function V(D) {
        F.push(D);
      }
      function N(D) {
        x.push(D);
      }
      fn(f, {
        args: O,
        name: G[uo],
        store: w,
        after: V,
        onError: N
      });
      let H;
      try {
        H = R.apply(this && this.$id === e ? this : w, O);
      } catch (D) {
        throw fn(x, D), D;
      }
      return H instanceof Promise ? H.then((D) => (fn(F, D), D)).catch((D) => (fn(x, D), Promise.reject(D))) : (fn(F, H), H);
    };
    return G[qi] = !0, G[uo] = I, G;
  }, b = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Gi.bind(null, f),
    $patch: M,
    $reset: v,
    $subscribe(R, I = {}) {
      const G = Gi(d, R, I.detached, () => O()), O = l.run(() => He(() => s.state.value[e], (F) => {
        (I.flush === "sync" ? c : u) && R({
          storeId: e,
          type: Un.direct,
          events: p
        }, F);
      }, Rt({}, r, I)));
      return G;
    },
    $dispose: S
  }, w = /* @__PURE__ */ ln(b);
  s._s.set(e, w);
  const T = (s._a && s._a.runWithContext || Wu)(() => s._e.run(() => (l = pl()).run(() => t({ action: A }))));
  for (const R in T) {
    const I = T[R];
    if (/* @__PURE__ */ he(I) && !Gu(I) || /* @__PURE__ */ bt(I))
      i || (g && Ku(I) && (/* @__PURE__ */ he(I) ? I.value = g[R] : Eo(I, g[R])), s.state.value[e][R] = I);
    else if (typeof I == "function") {
      const G = A(I, R);
      T[R] = G, a.actions[R] = I;
    }
  }
  return Rt(w, T), Rt(/* @__PURE__ */ pe(w), T), Object.defineProperty(w, "$state", {
    get: () => s.state.value[e],
    set: (R) => {
      M((I) => {
        Rt(I, R);
      });
    }
  }), s._p.forEach((R) => {
    Rt(w, l.run(() => R({
      store: w,
      app: s._a,
      pinia: s,
      options: a
    })));
  }), g && i && n.hydrate && n.hydrate(w.$state, g), u = !0, c = !0, w;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Zo(e, t, n) {
  let s, o;
  const i = typeof t == "function";
  typeof e == "string" ? (s = e, o = i ? n : t) : (o = e, s = e.id);
  function l(a, r) {
    const u = Rr();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (u ? Pn(xa, null) : null), a && Ys(a), a = wa, a._s.has(s) || (i ? Ca(s, t, o, a) : qu(s, o, a)), a._s.get(s);
  }
  return l.$id = s, l;
}
function Xu(e) {
  {
    const t = /* @__PURE__ */ pe(e), n = {};
    for (const s in t) {
      const o = t[s];
      o.effect ? n[s] = // ...
      J({
        get: () => e[s],
        set(i) {
          e[s] = i;
        }
      }) : (/* @__PURE__ */ he(o) || /* @__PURE__ */ bt(o)) && (n[s] = // ---
      /* @__PURE__ */ Cr(e, s));
    }
    return n;
  }
}
let Zt = null;
function Yu(e) {
  return Zt || (Zt = Sa(), Zt);
}
function Js() {
  return Zt || (Zt = Sa()), Zt;
}
const Ju = {
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
  // Provider logos (simple letter-based SVGs, no background — brand-coloured glyphs)
  "provider-ollama": '<svg viewBox="0 0 16 16" fill="none"><text x="8" y="12" text-anchor="middle" font-size="12" font-weight="700" fill="#8b7bb5" font-family="sans-serif">O</text></svg>',
  "provider-lmstudio": '<svg viewBox="0 0 16 16" fill="none"><text x="8" y="11" text-anchor="middle" font-size="9" font-weight="700" fill="#5aa0e9" font-family="sans-serif">LM</text></svg>',
  "provider-openai": '<svg viewBox="0 0 16 16" fill="none"><text x="8" y="11" text-anchor="middle" font-size="9" font-weight="700" fill="#1abb95" font-family="sans-serif">AI</text></svg>',
  "provider-groq": '<svg viewBox="0 0 16 16" fill="none"><text x="8" y="12" text-anchor="middle" font-size="12" font-weight="700" fill="#f97316" font-family="sans-serif">G</text></svg>',
  "provider-google": '<svg viewBox="0 0 16 16" fill="none"><text x="8" y="11" text-anchor="middle" font-size="10" font-weight="700" fill="#5a95f4" font-family="sans-serif">G+</text></svg>',
  "provider-openrouter": '<svg viewBox="0 0 16 16" fill="none"><text x="8" y="11" text-anchor="middle" font-size="9" font-weight="700" fill="#9b7cf6" font-family="sans-serif">OR</text></svg>',
  "provider-cloudflare": '<svg viewBox="0 0 16 16" fill="none"><text x="8" y="11" text-anchor="middle" font-size="9" font-weight="700" fill="#f38020" font-family="sans-serif">CF</text></svg>'
};
function Ma(e) {
  return Ju[e];
}
const Qu = ["title", "aria-label", "innerHTML"], Zu = /* @__PURE__ */ Fe({
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
      innerHTML: h(Ma)(e.name)
    }, null, 12, Qu));
  }
}), nn = /* @__PURE__ */ Me(Zu, [["__scopeId", "data-v-dfb78d9f"]]), us = /* @__PURE__ */ le({});
let Xi = !1;
const Qn = /* @__PURE__ */ Zo("fil/help", () => {
  const e = /* @__PURE__ */ le(null);
  function t(a) {
    for (const [r, u] of Object.entries(a))
      us.value[r] = u;
  }
  function n() {
    Xi || (Xi = !0, Promise.resolve().then(() => np).then(({ HELP_DEFAULTS: a }) => t(a)).catch((a) => console.warn("[FiL_Design_ImageMind] help defaults import failed:", a)));
  }
  function s(a) {
    return us.value[a];
  }
  function o() {
    return Object.values(us.value);
  }
  function i(a) {
    n(), e.value = a;
  }
  function l() {
    e.value = null;
  }
  return {
    registry: us,
    activeHelpId: e,
    ensureHelpDefaultsInjected: n,
    registerAll: t,
    get: s,
    list: o,
    value_open: i,
    value_close: l
  };
}), La = "FiL_Design_ImageMind", Ot = "/fil_design_imagemind", sn = `[${La}]`, ed = `${La}.UI`;
async function Ia(e) {
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
function Yi(e) {
  var o;
  const n = `/view?${new URLSearchParams({
    filename: e.filename,
    type: e.type || "temp",
    subfolder: e.subfolder || ""
  }).toString()}`, s = globalThis;
  return (o = s.api) != null && o.apiURL ? s.api.apiURL(n) : n;
}
function Aa() {
  var t;
  const e = globalThis;
  if ((t = e.api) != null && t.fetchApi) return (n, s) => e.api.fetchApi(n, s);
  if (e.fetch) return e.fetch.bind(globalThis);
  throw new Error(`${sn} no HTTP transport (api.fetchApi or window.fetch undefined)`);
}
async function En(e) {
  const t = await Aa()(e);
  return Ia(t);
}
async function fo(e, t) {
  const n = await Aa()(e, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  });
  return Ia(n);
}
const Xt = {
  loadAccounts: () => En(`${Ot}/auth`),
  saveAccounts: (e) => fo(`${Ot}/auth`, {
    accounts: e
  }),
  loadModels: (e, t = !1) => En(`${Ot}/models/${encodeURIComponent(e)}${t ? "?force=1" : ""}`),
  probe: (e, t = "") => fo(`${Ot}/provider_probe`, { provider: e, model: t }),
  listProviders: () => En(`${Ot}/providers`),
  saveCompareImage: (e) => fo(`${Ot}/compare/save`, { image: e }),
  nodeContracts: () => En(`${Ot}/node_contracts`)
};
function Da(e, t, n) {
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
const td = "FiL_Design_ImageMind.Language", ka = "en", jn = /* @__PURE__ */ ln({
  lang: ka,
  translations: {},
  loaded: !1
});
let Ji = null;
async function nd(e) {
  try {
    const t = await En(`/fil_design_imagemind/locale/${encodeURIComponent(e)}`);
    jn.translations = t, jn.lang = e;
  } catch (t) {
    console.warn(`[FiL_Design_ImageMind] failed to load locale "${e}":`, t);
  } finally {
    jn.loaded = !0;
  }
}
function sd() {
  if (Ji) return;
  const e = Da(td, ka);
  Ji = nd(e);
}
function kt() {
  sd();
  function e(t, n) {
    return jn.translations[t] ?? n;
  }
  return { t: e, state: /* @__PURE__ */ vs(jn) };
}
const od = ["title"], id = /* @__PURE__ */ Fe({
  __name: "FilNodeHelpBadge",
  props: {
    nodeId: {}
  },
  setup(e) {
    const t = e, n = Qn(), { t: s } = kt();
    function o() {
      n.value_open(t.nodeId);
    }
    return (i, l) => (C(), E("button", {
      type: "button",
      class: "fil-node-help-badge",
      title: h(s)("tt_node_help", "Help for this node"),
      onClick: o
    }, [
      Y(nn, {
        name: "help",
        size: 13
      })
    ], 8, od));
  }
}), ld = /* @__PURE__ */ Me(id, [["__scopeId", "data-v-3001cdba"]]), ad = { class: "fil-node-shell" }, rd = /* @__PURE__ */ Fe({
  __name: "FilNodeShell",
  props: {
    root: {},
    state: {},
    comfyClass: {}
  },
  setup(e) {
    return (t, n) => (C(), E("div", ad, [
      Y(ld, { "node-id": e.comfyClass }, null, 8, ["node-id"]),
      (C(), Ie(nc(e.root), { state: e.state }, null, 8, ["state"]))
    ]));
  }
}), cd = /* @__PURE__ */ Me(rd, [["__scopeId", "data-v-0fbe412b"]]), ud = "__filVueMounted";
function cn(e, t, n, s) {
  const o = e;
  if (typeof o.addDOMWidget != "function")
    return console.warn(`[FiL_Design_ImageMind] domWidgetHost: node.addDOMWidget not available for "${t}" — ComfyUI core too old?`), null;
  const i = document.createElement("div");
  i.className = "fil-vue-host", i.style.width = "100%", i.style.boxSizing = "border-box", i.style.height = "auto", i[ud] = !0, i.addEventListener(
    "wheel",
    (v) => {
      var A, b;
      const S = (b = (A = globalThis.app) == null ? void 0 : A.canvas) == null ? void 0 : b.canvas;
      S instanceof HTMLCanvasElement && (v.preventDefault(), S.dispatchEvent(new WheelEvent("wheel", {
        deltaX: v.deltaX,
        deltaY: v.deltaY,
        deltaZ: v.deltaZ,
        deltaMode: v.deltaMode,
        clientX: v.clientX,
        clientY: v.clientY,
        bubbles: !0,
        cancelable: !0
      })));
    },
    { passive: !1 }
  );
  const l = /* @__PURE__ */ ln(s.state);
  let a = s.height;
  const r = () => {
    const v = i.firstElementChild;
    return !v || v.clientHeight === 0 || (a = Math.ceil(v.scrollHeight / 4) * 4), a;
  }, u = o.addDOMWidget(t, "custom", i, {
    hideOnZoom: !0,
    getValue: () => l,
    setValue: (v) => {
      v && typeof v == "object" && Object.assign(l, v);
    },
    getHeight: r,
    ...s.onDraw ? { onDraw: s.onDraw } : {}
  }), c = qs(cd, { root: n, state: l, comfyClass: o.comfyClass ?? "default" }).use(Js());
  c.mount(i);
  function d() {
    var b, w;
    if (r(), !o.computeSize || !o.setSize || !o.size) return;
    const [v, S] = o.size, [, A] = o.computeSize();
    Math.abs(A - S) < 2 || (o.setSize([v, A]), (w = (b = o.graph) == null ? void 0 : b.setDirtyCanvas) == null || w.call(b, !0, !0));
  }
  let f = 0;
  const p = new ResizeObserver(() => {
    f || (f = requestAnimationFrame(() => {
      f = 0, d();
    }));
  });
  p.observe(i);
  let g = 20;
  (function v() {
    d(), g-- > 0 && requestAnimationFrame(v);
  })();
  const _ = { widget: u, host: i, app: c, state: l, unmount: M };
  function M() {
    p.disconnect(), f && cancelAnimationFrame(f);
    try {
      this.app.unmount();
    } catch (v) {
      console.warn(`[FiL_Design_ImageMind] unmount failed for "${t}":`, v);
    }
    for (; this.host.firstChild; ) this.host.removeChild(this.host.firstChild);
  }
  return _.unmount = M.bind(_), o._filVueApps ?? (o._filVueApps = {}), o._filVueApps[t] = _, _;
}
function un(e) {
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
const Qi = 4, dd = {
  info: 3500,
  success: 3e3,
  warning: 5e3,
  error: 6e3
};
let fd = 1;
const Nt = /* @__PURE__ */ Zo("fil/toast", () => {
  const e = /* @__PURE__ */ le([]), t = /* @__PURE__ */ le([]);
  function n(u, c, d = {}) {
    const f = {
      id: fd++,
      level: u,
      text: c == null ? "" : String(c),
      timeout: d.timeout ?? dd[u],
      sticky: !!d.sticky,
      action: d.action ?? null
    };
    return e.value.length < Qi ? e.value.push(f) : t.value.push(f), f;
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
    e.value = e.value.filter((c) => c.id !== u), t.value.length > 0 && e.value.length < Qi && e.value.push(t.value.shift());
  }
  function r() {
    e.value = [], t.value = [];
  }
  return { items: e, queue: t, info: s, success: o, warning: i, error: l, push: n, dismiss: a, dismissAll: r };
});
function pd() {
  var t, n;
  return ((n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.toast) ?? null;
}
function ds(e, t) {
  const n = pd();
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
  info: (e) => ds("info", e),
  success: (e) => ds("success", e),
  warning: (e) => ds("warning", e),
  error: (e) => ds("error", e),
  // Direct Pinia access for Vue components that want actions/sticky/toasts.
  infoRich: (e, t) => Nt().info(e, t),
  successRich: (e, t) => Nt().success(e, t),
  warningRich: (e, t) => Nt().warning(e, t),
  errorRich: (e, t) => Nt().error(e, t),
  dismissAll: () => Nt().dismissAll()
}, md = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  toast: st,
  useToastStore: Nt
}, Symbol.toStringTag, { value: "Module" }));
function Zi() {
  var t, n, s, o, i, l, a, r;
  return !!(((o = (s = (n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.setting) == null ? void 0 : s.get) == null ? void 0 : o.call(s, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? ((r = (a = (l = (i = globalThis.app) == null ? void 0 : i.ui) == null ? void 0 : l.settings) == null ? void 0 : a.getSettingValue) == null ? void 0 : r.call(a, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? !0);
}
function el() {
  function e(s, o, i, l) {
  }
  function t(s, o, i, l) {
    Zi() && st.success("Connected");
  }
  function n(s, o) {
    Zi() && st.info("Disconnected");
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
    const { onConnect: l } = el();
    return l(...i), s == null ? void 0 : s.apply(this, i);
  };
  const o = t.onDisconnect;
  t.onDisconnect = function(...i) {
    const { onDisconnect: l } = el();
    return l(...i), o == null ? void 0 : o.apply(this, i);
  };
}
const hd = /* @__PURE__ */ an(() => Promise.resolve().then(() => gm)), gd = {
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
      return u._filSeedState = p, cn(u, "fil_seed_view", hd, { state: p, height: 185 }), r;
    };
    const i = s.onConfigure;
    s.onConfigure = function(...a) {
      const r = i == null ? void 0 : i.apply(this, a), u = this, c = u._filSeedState;
      return c && (c.nodeState.seed = be(fe(u, "seed"), "number", 0)), r;
    };
    const l = s.onRemoved;
    s.onRemoved = function(...a) {
      return un(this), l == null ? void 0 : l.apply(this, a);
    }, Ut(e);
  }
}, _d = /* @__PURE__ */ an(() => Promise.resolve().then(() => Mm)), bd = {
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
      const u = i == null ? void 0 : i.apply(this, r), c = this, d = be(fe(c, "provider"), "string", "ollama"), f = be(fe(c, "model"), "string", "(loading...)"), p = be(fe(c, "temperature"), "number", 0.7), g = be(fe(c, "max_tokens"), "number", 0), _ = be(fe(c, "rate_limit_ms"), "number", 100), M = be(fe(c, "max_image_side"), "number", 1024);
      for (const S of ["provider", "model", "refresh_models", "temperature", "max_tokens", "rate_limit_ms", "seed", "control_after_generate", "max_image_side"]) {
        const A = fe(c, S);
        A && (A.hidden = !0);
      }
      const v = {
        nodeState: Sn(c, {
          provider: d,
          model: f,
          temperature: p,
          max_tokens: g,
          rate_limit_ms: _,
          max_image_side: M
        }),
        initialValues: {
          provider: d,
          model: f,
          temperature: p,
          max_tokens: g,
          rate_limit_ms: _,
          max_image_side: M
        },
        ui: {}
      };
      return Object.defineProperty(v, "node", { value: c, enumerable: !1, configurable: !0 }), c._filProviderState = v, cn(c, "fil_provider_view", _d, { state: v, height: 340 }), u;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...r) {
      const u = l == null ? void 0 : l.apply(this, r), c = this, d = c._filProviderState;
      if (!d) return u;
      const f = d.nodeState;
      for (const { name: p, kind: g, fallback: _ } of o)
        f[p] = be(fe(c, p), g, _);
      return u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...r) {
      return un(this), a == null ? void 0 : a.apply(this, r);
    }, Ut(e);
  }
}, vd = /* @__PURE__ */ an(() => Promise.resolve().then(() => Um)), yd = {
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
      for (const v of o) {
        const S = fe(c, v);
        if (!S) continue;
        const A = be(S, "string", "");
        d[v] = A, f[v] = A, S.hidden = !0;
      }
      const p = fe(c, "seed"), g = fe(c, "control_after_generate"), _ = be(p, "number", -1);
      p && (p.hidden = !0), g && (g.hidden = !0), d.seed = _, f.seed = _, f.seed_mode = "random";
      const M = {
        nodeState: Sn(c, f),
        initialValues: d,
        ui: {},
        lastRunSeed: null
      };
      return c._filScannerSeedState = M, cn(c, "fil_scanner_view", vd, { state: M, height: 460 }), u;
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
      return un(this), a == null ? void 0 : a.apply(this, r);
    }, Ut(e);
  }
}, wd = /* @__PURE__ */ an(() => Promise.resolve().then(() => Ym)), xd = {
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
      for (const g of Object.keys(o)) {
        const _ = fe(c, g), M = be(_, "boolean", o[g]);
        d[g] = M, f[g] = M, _ && (_.hidden = !0);
      }
      const p = { nodeState: Sn(c, d), initialValues: f, ui: {} };
      return c._filCleanerState = p, cn(c, "fil_cleaner_view", wd, { state: p, height: 460 }), u;
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
      return un(this), a == null ? void 0 : a.apply(this, r);
    }, Ut(e);
  }
}, Sd = /* @__PURE__ */ an(() => Promise.resolve().then(() => sh)), Fd = {
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
      for (const v of [c, d, f])
        v && (v.hidden = !0);
      const g = {
        nodeState: Sn(u, p),
        initialValues: { ...p },
        ui: {
          compare_mode: "wipe",
          compare_position: 0.5,
          compare_opacity: 0.5,
          settings_collapsed: !0
        }
      };
      u._filCompareState = g;
      const _ = cn(u, "fil_compare_view", Sd, { state: g, height: 380 }), M = u.onExecuted;
      return u.onExecuted = function(v) {
        const S = M == null ? void 0 : M.apply(this, [v]), A = v;
        return _ && A && (_.state.ui.compare_images = { a: A.a_images ?? [], b: A.b_images ?? [] }), S;
      }, r;
    };
    const i = s.onConfigure;
    s.onConfigure = function(...a) {
      const r = i == null ? void 0 : i.apply(this, a), u = this, c = u._filCompareState;
      return c && (c.nodeState.swap = be(fe(u, "swap"), "boolean", !1), c.nodeState.resize_mode = be(fe(u, "resize_mode"), "string", "Off"), c.nodeState.max_resolution = be(fe(u, "max_resolution"), "number", 4096)), r;
    };
    const l = s.onRemoved;
    s.onRemoved = function(...a) {
      return un(this), l == null ? void 0 : l.apply(this, a);
    }, Ut(e);
  }
}, Cd = /* @__PURE__ */ an(() => Promise.resolve().then(() => ph)), Md = {
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
      const d = a == null ? void 0 : a.apply(this, c), f = this, p = {}, g = {};
      for (const M of Object.keys(o)) {
        const v = fe(f, M);
        if (!v) continue;
        const S = be(v, "number", o[M]);
        p[M] = S, g[M] = S, v.hidden = !0;
      }
      for (const M of Object.keys(i)) {
        const v = fe(f, M);
        if (!v) continue;
        const S = be(v, "boolean", i[M]);
        p[M] = S, g[M] = S, v.hidden = !0;
      }
      for (const M of Object.keys(l)) {
        const v = fe(f, M);
        if (!v) continue;
        const S = be(v, "string", l[M]);
        p[M] = S, g[M] = S, v.hidden = !0;
      }
      const _ = { nodeState: Sn(f, p), initialValues: g, ui: {} };
      return f._filUpscaleState = _, cn(f, "fil_upscale_view", Cd, { state: _, height: 420 }), d;
    };
    const r = s.onConfigure;
    s.onConfigure = function(...c) {
      const d = r == null ? void 0 : r.apply(this, c), f = this, p = f._filUpscaleState;
      if (!p) return d;
      for (const g of Object.keys(o))
        p.nodeState[g] = be(fe(f, g), "number", o[g]);
      for (const g of Object.keys(i))
        p.nodeState[g] = be(fe(f, g), "boolean", i[g]);
      for (const g of Object.keys(l))
        p.nodeState[g] = be(fe(f, g), "string", l[g]);
      return d;
    };
    const u = s.onRemoved;
    s.onRemoved = function(...c) {
      return un(this), u == null ? void 0 : u.apply(this, c);
    }, Ut(e);
  }
}, Ld = {
  id: "FiLKSampler",
  register(e, t) {
    Ht(e, {
      minSize: [270, 260],
      family: "sampling",
      description: "Full sampler/scheduler set, passthrough outputs, preview, HighRes-fix script.",
      badges: [{ text: "sampler", color: "#7aa2f7", text_color: "#0b0e14" }]
    }), Ut(e);
  }
}, Id = /* @__PURE__ */ an(() => Promise.resolve().then(() => wh)), To = {
  upscale_by: 1.25,
  seed: 0,
  hires_steps: 12,
  denoise: 0.56,
  iterations: 1,
  strength: 1
}, Ro = {
  upscale_type: "latent",
  hires_ckpt_name: "(use same)",
  latent_upscaler: "nearest-exact",
  pixel_upscaler: "",
  control_net_name: ""
}, Oo = {
  use_same_seed: !0,
  use_controlnet: !1
}, Ad = [
  ...Object.keys(To),
  ...Object.keys(Ro),
  ...Object.keys(Oo),
  "control_after_generate"
], Dd = {
  id: "FiLHighResFix",
  register(e, t) {
    Ht(e, {
      minSize: [320, 380],
      family: "sampling",
      description: "Latent/pixel upscale + re-sample settings, packed into a script for FiLKSampler.",
      badges: [{ text: "hires", color: "#bb9af7", text_color: "#0b0e14" }]
    });
    const s = e.prototype, o = (r, u) => {
      for (const c of Object.keys(To))
        u[c] = be(fe(r, c), "number", To[c]);
      for (const c of Object.keys(Ro))
        u[c] = be(fe(r, c), "string", Ro[c]);
      for (const c of Object.keys(Oo))
        u[c] = be(fe(r, c), "boolean", Oo[c]);
    }, i = s.onNodeCreated;
    s.onNodeCreated = function(...r) {
      const u = i == null ? void 0 : i.apply(this, r), c = this, d = {};
      o(c, d);
      for (const p of Ad) {
        const g = fe(c, p);
        g && (g.hidden = !0);
      }
      const f = {
        nodeState: Sn(c, d),
        initialValues: { ...d },
        ui: {}
      };
      return Object.defineProperty(f, "node", { value: c, enumerable: !1, configurable: !0 }), c._filHiResFixState = f, cn(c, "fil_hiresfix_view", Id, { state: f, height: 360 }), u;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...r) {
      const u = l == null ? void 0 : l.apply(this, r), c = this, d = c._filHiResFixState;
      return d && o(c, d.nodeState), u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...r) {
      return un(this), a == null ? void 0 : a.apply(this, r);
    }, Ut(e);
  }
}, kd = [
  gd,
  bd,
  yd,
  xd,
  Fd,
  Md,
  Ld,
  Dd
], Ea = Object.fromEntries(
  kd.map((e) => [e.id, e])
), Ed = ["aria-label"], Td = { class: "fil-modal-header" }, Rd = { class: "fil-modal-title" }, Od = { class: "fil-modal-body" }, Pd = /* @__PURE__ */ Fe({
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
      const p = f[0], g = f[f.length - 1];
      d.shiftKey ? document.activeElement === p && (d.preventDefault(), g.focus()) : document.activeElement === g && (d.preventDefault(), p.focus());
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
          var g;
          (g = (o.value ? c(o.value) : [])[0] || o.value) == null || g.focus();
        })) : ((f = i.value) == null || f.focus(), i.value = null);
      }
    ), rn(() => {
      document.addEventListener("keydown", r);
    }), xn(() => {
      document.removeEventListener("keydown", r);
    }), (d, f) => (C(), Ie(Bl, { to: "body" }, [
      Y(Yc, { name: "fil-modal" }, {
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
            z("div", {
              class: "fil-modal-panel",
              style: ze({ maxWidth: e.width })
            }, [
              z("div", Td, [
                z("span", Rd, ne(e.title), 1),
                z("button", {
                  class: "fil-modal-close",
                  title: "Close",
                  onClick: l
                }, [
                  Y(nn, {
                    name: "close",
                    size: 14
                  })
                ])
              ]),
              z("div", Od, [
                oc(d.$slots, "default", {}, void 0, !0)
              ])
            ], 4)
          ], 8, Ed)) : te("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Ta = /* @__PURE__ */ Me(Pd, [["__scopeId", "data-v-00452928"]]), Nd = { class: "fil-help-title" }, $d = {
  key: 0,
  class: "fil-help-body"
}, Vd = { key: 1 }, Bd = {
  key: 2,
  class: "fil-help-table"
}, Hd = {
  key: 3,
  class: "fil-help-code"
}, Ud = {
  key: 1,
  class: "fil-help-empty"
}, jd = /* @__PURE__ */ Fe({
  __name: "FilHelpPopup",
  setup(e) {
    const t = Qn(), n = J(() => {
      const o = t.activeHelpId;
      return o ? t.get(o) ?? null : null;
    }), s = J({
      get: () => t.activeHelpId !== null,
      set: (o) => {
        o || t.value_close();
      }
    });
    return He(n, (o) => {
      o || t.value_close();
    }), (o, i) => (C(), Ie(Ta, {
      open: s.value,
      "onUpdate:open": i[0] || (i[0] = (l) => s.value = l),
      title: "FiL LLM Help",
      width: "600px",
      onClose: i[1] || (i[1] = (l) => h(t).value_close())
    }, {
      default: Us(() => {
        var l;
        return [
          n.value ? (C(), E(de, { key: 0 }, [
            z("h2", Nd, ne(n.value.title), 1),
            n.value.body ? (C(), E("p", $d, ne(n.value.body), 1)) : te("", !0),
            (l = n.value.bullets) != null && l.length ? (C(), E("ul", Vd, [
              (C(!0), E(de, null, Ae(n.value.bullets, (a, r) => (C(), E("li", {
                key: r,
                class: "fil-help-bullet"
              }, [
                Y(nn, {
                  name: "chevronRight",
                  size: 12
                }),
                z("span", null, ne(a), 1)
              ]))), 128))
            ])) : te("", !0),
            n.value.table ? (C(), E("table", Bd, [
              z("thead", null, [
                z("tr", null, [
                  (C(!0), E(de, null, Ae(n.value.table.headers, (a) => (C(), E("th", { key: a }, ne(a), 1))), 128))
                ])
              ]),
              z("tbody", null, [
                (C(!0), E(de, null, Ae(n.value.table.rows, (a, r) => (C(), E("tr", { key: r }, [
                  (C(!0), E(de, null, Ae(a, (u, c) => (C(), E("td", { key: c }, ne(u), 1))), 128))
                ]))), 128))
              ])
            ])) : te("", !0),
            n.value.code ? (C(), E("pre", Hd, [
              z("code", null, ne(n.value.code), 1)
            ])) : te("", !0)
          ], 64)) : (C(), E("p", Ud, "No help available for this node."))
        ];
      }),
      _: 1
    }, 8, ["open"]));
  }
}), Wd = /* @__PURE__ */ Me(jd, [["__scopeId", "data-v-536c1547"]]);
let po = null;
function zd(e) {
  if (po) return;
  const t = document.createElement("div");
  t.id = "__fil_help_popup_host", document.body.appendChild(t), po = qs(Wd).use(Js()), po.mount(t), console.info("[FiL_Design_ImageMind] help popup mounted");
}
function Kd() {
  var o, i, l, a, r, u, c, d;
  const e = globalThis, t = "FiL_Design_ImageMind.RunButton.AnimationDuration", n = ((a = (l = (i = (o = e.app) == null ? void 0 : o.extensionManager) == null ? void 0 : i.setting) == null ? void 0 : l.get) == null ? void 0 : a.call(l, t, "Normal")) ?? ((d = (c = (u = (r = globalThis.app) == null ? void 0 : r.ui) == null ? void 0 : u.settings) == null ? void 0 : c.getSettingValue) == null ? void 0 : d.call(c, t, "Normal")) ?? "Normal";
  return { Fast: 200, Normal: 400, Slow: 600 }[String(n)] || 400;
}
function Gd(e, t) {
  var u, c, d, f, p, g, _, M, v, S;
  if (!(((f = (d = (c = (u = globalThis.app) == null ? void 0 : u.extensionManager) == null ? void 0 : c.setting) == null ? void 0 : d.get) == null ? void 0 : f.call(d, "FiL_Design_ImageMind.RunButton.Enabled", !0)) ?? ((M = (_ = (g = (p = globalThis.app) == null ? void 0 : p.ui) == null ? void 0 : g.settings) == null ? void 0 : _.getSettingValue) == null ? void 0 : M.call(_, "FiL_Design_ImageMind.RunButton.Enabled", !0)) ?? !0)) return;
  const o = (S = (v = e == null ? void 0 : e.canvas) == null ? void 0 : v.nodeEls) == null ? void 0 : S[t];
  if (!o) return;
  const i = o.querySelector(".comfy-node-header");
  if (!i) return;
  const l = Kd(), a = i.style.background, r = Math.max(60, l * 0.3);
  i.style.transition = `background ${r}ms ease`, i.style.background = "var(--fil-accent, #7c3aed)", setTimeout(() => {
    i.style.background = a;
  }, l);
}
function qd(e) {
  const t = e == null ? void 0 : e.canvas;
  if (!(t != null && t.ds)) {
    console.warn("[FiL_Design_ImageMind] run button FX: canvas not available, skipping");
    return;
  }
  const n = t.ds.executeNode;
  typeof n == "function" ? (t.ds.executeNode = async function(s) {
    const o = await n.call(this, s);
    return (typeof s == "string" || typeof s == "number") && Gd({ canvas: t }, s), o;
  }, console.info("[FiL_Design_ImageMind] run button FX installed (execute hook)")) : console.warn("[FiL_Design_ImageMind] run button FX: executeNode not found, skipping");
}
const Xd = ["onMouseenter", "onMouseleave"], Yd = { class: "fil-toast-text" }, Jd = ["onClick"], Qd = ["aria-label", "onClick"], Zd = /* @__PURE__ */ Fe({
  __name: "FilToastStack",
  setup(e) {
    const { t } = kt(), n = Nt(), { items: s } = Xu(n), o = /* @__PURE__ */ le(null), i = /* @__PURE__ */ new Map(), l = {
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
    const d = J(() => s.value);
    return rn(() => {
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
      (C(!0), E(de, null, Ae(d.value, (g) => (C(), E("div", {
        key: g.id,
        class: we(["fil-toast", `fil-toast-${g.level}`]),
        style: ze({ "--toast-color": l[g.level] }),
        onMouseenter: (_) => r(g),
        onMouseleave: (_) => u(g)
      }, [
        p[0] || (p[0] = z("span", {
          class: "fil-toast-dot",
          "aria-hidden": "true"
        }, null, -1)),
        z("span", Yd, ne(g.text), 1),
        g.action ? (C(), E("button", {
          key: 0,
          type: "button",
          class: "fil-toast-action",
          onClick: ji((_) => {
            g.action.onClick(_), c(g);
          }, ["stop"])
        }, ne(g.action.label), 9, Jd)) : te("", !0),
        z("button", {
          type: "button",
          class: "fil-toast-close",
          "aria-label": h(t)("toast_close", "Close"),
          onClick: ji((_) => c(g), ["stop"])
        }, " × ", 8, Qd)
      ], 46, Xd))), 128))
    ], 512));
  }
}), ef = /* @__PURE__ */ Me(Zd, [["__scopeId", "data-v-08cc58fa"]]);
let mo = null;
function tf() {
  if (mo) return;
  const e = document.createElement("div");
  document.body.appendChild(e), mo = qs(ef).use(Js()), mo.mount(e);
  const t = globalThis;
  Promise.resolve().then(() => md).then(({ toast: n }) => {
    t.__filToast = n, console.info("[FiL_Design_ImageMind] toast stack mounted");
  }).catch((n) => console.warn("[FiL_Design_ImageMind] toast store import failed:", n));
}
const nf = "FiL_Design_ImageMind.Shortcuts.Enabled", sf = "__cheatsheet__", of = [
  "#comfy-search-input",
  'input[name="search"]',
  'input[aria-label="Search"]',
  "#search-input",
  'input[placeholder*="search" i]'
];
function lf(e) {
  if (!e || typeof e != "object") return !1;
  const t = String(e.tagName || "").toLowerCase();
  return t === "input" || t === "textarea" || t === "select" || e.isContentEditable === !0;
}
function af() {
  for (const e of of) {
    const t = document.querySelector(e);
    if (t) return t;
  }
  return null;
}
function Po() {
  var t;
  const e = Qn();
  e.ensureHelpDefaultsInjected(), (t = e.value_open) == null || t.call(e, sf);
}
function Ra() {
  const e = af();
  if (!e) {
    st.info("ComfyUI search field not found");
    return;
  }
  try {
    e.focus(), "select" in e && e.select();
  } catch {
  }
}
function rf(e) {
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
            function: Po
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
  window.addEventListener("keydown", (s) => cf(s, e), !0), console.info("[FiL_Design_ImageMind] shortcuts installed (fallback keydown handler)");
}
function cf(e, t) {
  var i, l, a, r, u, c, d, f, p;
  let n = !0;
  try {
    n = !!(((r = (a = (l = (i = globalThis.app) == null ? void 0 : i.extensionManager) == null ? void 0 : l.setting) == null ? void 0 : a.get) == null ? void 0 : r.call(a, nf, !0)) ?? !0);
  } catch {
  }
  if (!n) return;
  const s = e.target, o = lf(s);
  if (e.key === "Escape") {
    try {
      const g = Qn();
      (u = g.value_close) == null || u.call(g);
    } catch {
    }
    o && ((c = s.blur) == null || c.call(s)), (d = e.preventDefault) == null || d.call(e);
    return;
  }
  if (!o) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "K" || e.key === "k")) {
      Po(), e.preventDefault();
      return;
    }
    if (e.key === "?" || e.shiftKey && e.key === "/") {
      if (e.shiftKey) Po();
      else {
        const g = t.canvas, _ = (g == null ? void 0 : g.selected_nodes) ?? {}, M = Object.values(_).filter(Boolean);
        if (M.length === 1) {
          const v = ((f = M[0]) == null ? void 0 : f.comfyClass) ?? "default", S = Qn();
          S.ensureHelpDefaultsInjected(), (p = S.value_open) == null || p.call(S, v);
        } else
          st.info("Select exactly one FiL_Design_ImageMind node, then press ?");
      }
      e.preventDefault();
      return;
    }
    e.key === "/" && !e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey && (Ra(), e.preventDefault());
  }
}
function uf(e) {
  rf(e), console.info("[FiL_Design_ImageMind] shortcuts installed");
}
const df = 3e5, ff = ["ollama", "lmstudio", "openai", "google", "groq", "openrouter", "cloudflare"], Wn = ff, Oa = /* @__PURE__ */ Zo("fil/providers", () => {
  const e = /* @__PURE__ */ le({}), t = /* @__PURE__ */ le({}), n = /* @__PURE__ */ le({}), s = /* @__PURE__ */ le({}), o = /* @__PURE__ */ le(null), i = J(() => Object.fromEntries(
    Object.entries(e.value).filter(([, v]) => (v == null ? void 0 : v.configured) || (v == null ? void 0 : v.account_id) || (v == null ? void 0 : v.base_url))
  ));
  async function l() {
    try {
      const v = await Xt.loadAccounts();
      e.value = v.accounts || {}, o.value = null;
    } catch (v) {
      o.value = v instanceof Error ? v.message : String(v);
    }
  }
  async function a(v, S) {
    try {
      const A = await Xt.saveAccounts({ [v]: S });
      e.value = A.accounts || {}, o.value = null, c(v, !0);
    } catch (A) {
      throw o.value = A instanceof Error ? A.message : String(A), A;
    }
  }
  async function r(v) {
    const S = await Xt.saveAccounts({
      [v]: { delete: !0 }
    });
    e.value = S.accounts || {};
  }
  async function u(v) {
    await a(v, {});
    try {
      await r(v);
    } catch (S) {
      o.value = S instanceof Error ? S.message : String(S);
    }
  }
  async function c(v, S = !1) {
    const A = t.value[v];
    if (A && !S && !A.error && A.cachedAt > 0 && Date.now() - A.cachedAt < df)
      return A.list;
    A ? A.loading = !0 : t.value[v] = { list: [], visionModels: [], cachedAt: 0, loading: !0 };
    try {
      const b = await Xt.loadModels(v, S), w = b.models || [];
      return t.value[v] = {
        list: w,
        visionModels: b.vision_models || [],
        cachedAt: Date.now(),
        loading: !1
      }, b.status && b.status !== "available" && (t.value[v].error = b.message || b.status), w;
    } catch (b) {
      const w = b instanceof Error ? b.message : String(b);
      throw t.value[v] = {
        list: [],
        visionModels: [],
        cachedAt: 0,
        loading: !1,
        error: w
      }, o.value = w, b;
    }
  }
  function d(v) {
    const S = t.value[v];
    if (!(S != null && S.cachedAt)) return null;
    const A = Date.now() - S.cachedAt, b = Math.floor(A / 1e3);
    return b < 60 ? `${b}s` : b < 3600 ? `${Math.floor(b / 60)}m` : `${Math.floor(b / 3600)}h`;
  }
  async function f(v, S = "") {
    try {
      const A = await Xt.probe(v, S);
      return n.value[v] = A, A;
    } catch (A) {
      o.value = A instanceof Error ? A.message : String(A);
      return;
    }
  }
  async function p() {
    try {
      const v = await Xt.listProviders();
      s.value = v.providers || {};
    } catch {
    }
  }
  function g(v) {
    var S;
    return ((S = t.value[v]) == null ? void 0 : S.list) ?? [];
  }
  function _(v) {
    var S;
    return ((S = t.value[v]) == null ? void 0 : S.visionModels) ?? [];
  }
  function M(v) {
    var S;
    return !!((S = t.value[v]) != null && S.loading);
  }
  return {
    accounts: e,
    modelsByProvider: t,
    probeState: n,
    displayNames: s,
    lastError: o,
    configuredProviders: i,
    PROVIDER_LIST: Wn,
    loadAccounts: l,
    saveAccount: a,
    deleteAccount: u,
    deleteAccountRaw: r,
    loadModels: c,
    probe: f,
    loadDisplayNames: p,
    modelsFor: g,
    visionModelsFor: _,
    isLoading: M,
    cachedAgeLabel: d
  };
}), pf = ["title", "disabled", "aria-disabled"], mf = {
  key: 0,
  class: "fil-w-btn-spinner"
}, hf = ["innerHTML"], gf = { key: 2 }, _f = /* @__PURE__ */ Fe({
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
    const n = e, s = J(() => n.icon ? Ma(n.icon) : ""), o = t, i = J(() => [
      "fil-w-btn",
      n.variant === "accent" && "fil-w-btn-accent",
      n.variant === "danger" && "fil-w-btn-danger",
      n.variant === "icon" && "fil-w-btn-icon",
      n.variant === "full" && "fil-w-btn-full",
      n.variant === "sm" && "fil-w-btn-sm",
      n.flashing && "is-flashing",
      n.loading && "is-loading"
    ]), l = J(() => n.disabled || n.loading);
    function a(r) {
      l.value || o("click", r);
    }
    return (r, u) => (C(), E("button", {
      class: we(i.value),
      title: e.title,
      disabled: l.value,
      "aria-disabled": l.value || void 0,
      onClick: a
    }, [
      e.loading ? (C(), E("span", mf)) : te("", !0),
      e.icon && !e.loading ? (C(), E("span", {
        key: 1,
        class: "fil-w-btn-glyph",
        innerHTML: s.value
      }, null, 8, hf)) : te("", !0),
      e.label ? (C(), E("span", gf, ne(e.loading ? "" : e.label), 1)) : te("", !0)
    ], 10, pf));
  }
}), it = /* @__PURE__ */ Me(_f, [["__scopeId", "data-v-fff84608"]]), Pa = {
  ollama: "Ollama",
  lmstudio: "LM Studio",
  openai: "OpenAI",
  groq: "Groq",
  google: "Google AI",
  openrouter: "OpenRouter",
  cloudflare: "Cloudflare"
}, Na = {
  ollama: "provider-ollama",
  lmstudio: "provider-lmstudio",
  openai: "provider-openai",
  groq: "provider-groq",
  google: "provider-google",
  openrouter: "provider-openrouter",
  cloudflare: "provider-cloudflare"
}, bf = { class: "fil-pm-root" }, vf = ["onClick"], yf = { class: "fil-pm-icon" }, wf = { class: "fil-pm-name" }, xf = {
  key: 0,
  class: "fil-pm-disp"
}, Sf = ["title"], Ff = { class: "fil-pm-fields" }, Cf = { class: "fil-pm-field" }, Mf = ["onUpdate:modelValue", "placeholder", "onKeydown"], Lf = { class: "fil-pm-field" }, If = ["onUpdate:modelValue", "onKeydown"], Af = {
  key: 0,
  class: "fil-pm-field"
}, Df = ["onUpdate:modelValue", "onKeydown"], kf = { class: "fil-pm-actions" }, Ef = {
  key: 0,
  class: "fil-pm-age"
}, Tf = {
  key: 0,
  class: "fil-pm-err"
}, Rf = {
  key: 1,
  class: "fil-pm-err"
}, Of = {
  key: 2,
  class: "fil-pm-models"
}, Pf = {
  key: 0,
  class: "fil-pm-vision-badge",
  title: "Vision-capable"
}, Nf = {
  key: 3,
  class: "fil-pm-err fil-pm-global-err"
}, $f = /* @__PURE__ */ Fe({
  __name: "ProviderManager",
  setup(e) {
    const t = Oa(), n = /* @__PURE__ */ le({}), s = /* @__PURE__ */ le({}), o = /* @__PURE__ */ le({}), i = /* @__PURE__ */ le({}), l = /* @__PURE__ */ le({});
    rn(async () => {
      await Promise.all([t.loadAccounts(), t.loadDisplayNames()]);
      for (const b of Wn) {
        const w = t.accounts[b];
        n.value[b] = {
          // Stored keys are never echoed back by GET /fil_design_imagemind/auth (write-only
          // by the security contract) — the field always starts empty and the
          // `configured` flag drives the "a key is saved" UI state instead.
          key: "",
          base_url: (w == null ? void 0 : w.base_url) ?? "",
          account_id: (w == null ? void 0 : w.account_id) ?? ""
        };
      }
      for (const b of Wn) {
        const w = t.accounts[b];
        (w != null && w.configured || w != null && w.local || w != null && w.base_url) && v(b);
      }
    });
    const a = Pa, r = Na;
    function u(b) {
      return { "fil-pm-has-val": b.length > 0 };
    }
    function c(b) {
      return b === "cloudflare";
    }
    function d(b) {
      var R;
      const w = t.accounts[b], k = t.modelsByProvider[b], T = ((k == null ? void 0 : k.list.length) ?? 0) > 0 && !(k != null && k.error);
      return ((R = t.probeState[b]) == null ? void 0 : R.status) === "available" || o.value[b] || T ? "connected" : w != null && w.configured || w != null && w.local || w != null && w.base_url ? "configured" : "off";
    }
    const f = {
      connected: "Connected",
      configured: "Configured",
      off: "Not connected"
    };
    function p(b) {
      return d(b) === "off" && !l.value[b];
    }
    function g(b) {
      d(b) === "off" && (l.value[b] = !l.value[b]);
    }
    async function _(b) {
      const w = n.value[b];
      await t.saveAccount(b, {
        key: w.key || null,
        base_url: w.base_url || null,
        account_id: w.account_id || null
      }), w.key = "";
    }
    async function M(b) {
      n.value[b] = { key: "", base_url: "", account_id: "" }, await t.deleteAccount(b);
    }
    async function v(b) {
      s.value[b] = !0, o.value[b] = !1;
      try {
        const w = await t.probe(b, "");
        o.value[b] = (w == null ? void 0 : w.status) === "available";
      } finally {
        s.value[b] = !1;
      }
    }
    async function S(b) {
      i.value[b] = !0;
      try {
        await t.loadModels(b, !0);
      } finally {
        i.value[b] = !1;
      }
    }
    const A = (b) => {
      const w = n.value[b], k = t.accounts[b];
      return w.key !== "" ? !0 : w.base_url !== ((k == null ? void 0 : k.base_url) ?? "") || w.account_id !== ((k == null ? void 0 : k.account_id) ?? "");
    };
    return (b, w) => (C(), E("div", bf, [
      (C(!0), E(de, null, Ae(h(Wn), (k) => {
        var T, R, I, G, O, F;
        return C(), E("div", {
          key: k,
          class: we(["fil-pm-card", { "fil-pm-card--collapsed": p(k) }])
        }, [
          z("div", {
            class: we(["fil-pm-header", { "fil-pm-header--clickable": d(k) === "off" }]),
            onClick: (x) => g(k)
          }, [
            z("span", yf, [
              Y(nn, {
                name: h(r)[k],
                size: 20
              }, null, 8, ["name"])
            ]),
            z("span", wf, ne(h(a)[k]), 1),
            h(t).displayNames[k] ? (C(), E("span", xf, "(" + ne(h(t).displayNames[k]) + ")", 1)) : te("", !0),
            z("span", {
              class: we(["fil-pm-status", `fil-pm-status--${d(k)}`]),
              title: f[d(k)]
            }, [
              w[0] || (w[0] = z("span", { class: "fil-pm-dot" }, null, -1)),
              Lo(" " + ne(f[d(k)]), 1)
            ], 10, Sf),
            d(k) === "off" ? (C(), E("span", {
              key: 1,
              class: we(["fil-pm-chevron", { "fil-pm-chevron--open": l.value[k] }])
            }, [
              Y(nn, {
                name: "chevronRight",
                size: 12
              })
            ], 2)) : te("", !0)
          ], 10, vf),
          p(k) ? te("", !0) : (C(), E(de, { key: 0 }, [
            z("div", Ff, [
              z("label", Cf, [
                w[1] || (w[1] = z("span", { class: "fil-pm-field-label" }, "API Key", -1)),
                Ge(z("input", {
                  "onUpdate:modelValue": (x) => n.value[k].key = x,
                  type: "password",
                  class: we(["fil-pm-input", u(n.value[k].key)]),
                  placeholder: (T = h(t).accounts[k]) != null && T.configured ? "•••••••• (saved)" : "sk-...",
                  onKeydown: gs((x) => _(k), ["enter"])
                }, null, 42, Mf), [
                  [vt, n.value[k].key]
                ])
              ]),
              z("label", Lf, [
                w[2] || (w[2] = z("span", { class: "fil-pm-field-label" }, "Base URL", -1)),
                Ge(z("input", {
                  "onUpdate:modelValue": (x) => n.value[k].base_url = x,
                  type: "text",
                  class: we(["fil-pm-input", u(n.value[k].base_url)]),
                  placeholder: "http://localhost:11434",
                  onKeydown: gs((x) => _(k), ["enter"])
                }, null, 42, If), [
                  [vt, n.value[k].base_url]
                ])
              ]),
              c(k) ? (C(), E("label", Af, [
                w[3] || (w[3] = z("span", { class: "fil-pm-field-label" }, "Account ID", -1)),
                Ge(z("input", {
                  "onUpdate:modelValue": (x) => n.value[k].account_id = x,
                  type: "text",
                  class: we(["fil-pm-input", u(n.value[k].account_id)]),
                  onKeydown: gs((x) => _(k), ["enter"])
                }, null, 42, Df), [
                  [vt, n.value[k].account_id]
                ])
              ])) : te("", !0)
            ]),
            z("div", kf, [
              Y(it, {
                variant: "accent",
                label: A(k) ? "Save" : "Saved",
                disabled: !A(k),
                onClick: (x) => _(k)
              }, null, 8, ["label", "disabled", "onClick"]),
              !A(k) && h(t).cachedAgeLabel(k) ? (C(), E("span", Ef, ne(h(t).cachedAgeLabel(k)) + " ago ", 1)) : te("", !0),
              Y(it, {
                variant: "danger",
                label: "Delete",
                disabled: !((R = h(t).accounts[k]) != null && R.configured) && !((I = h(t).accounts[k]) != null && I.base_url),
                onClick: (x) => M(k)
              }, null, 8, ["disabled", "onClick"]),
              Y(it, {
                variant: "standard",
                label: "Probe",
                loading: s.value[k],
                flashing: o.value[k],
                disabled: !((G = h(t).accounts[k]) != null && G.local) && !((O = h(t).accounts[k]) != null && O.configured) && !n.value[k].key && !n.value[k].base_url,
                onClick: (x) => v(k)
              }, null, 8, ["loading", "flashing", "disabled", "onClick"]),
              Y(it, {
                variant: "standard",
                label: "Load Models",
                loading: i.value[k],
                onClick: (x) => S(k)
              }, null, 8, ["loading", "onClick"])
            ]),
            (F = h(t).modelsByProvider[k]) != null && F.error ? (C(), E("div", Tf, ne(h(t).modelsByProvider[k].error), 1)) : te("", !0),
            h(t).probeState[k] && h(t).probeState[k].status !== "available" ? (C(), E("div", Rf, ne(h(t).probeState[k].message), 1)) : te("", !0),
            h(t).modelsFor(k).length > 0 ? (C(), E("div", Of, [
              (C(!0), E(de, null, Ae(h(t).modelsFor(k), (x) => (C(), E("span", {
                class: "fil-pm-model-tag",
                key: x
              }, [
                Lo(ne(x) + " ", 1),
                h(t).visionModelsFor(k).includes(x) ? (C(), E("span", Pf, "👁")) : te("", !0)
              ]))), 128))
            ])) : te("", !0),
            h(t).lastError ? (C(), E("div", Nf, ne(h(t).lastError), 1)) : te("", !0)
          ], 64))
        ], 2);
      }), 128))
    ]));
  }
}), Vf = /* @__PURE__ */ Me($f, [["__scopeId", "data-v-ae1b468d"]]);
let ho = null;
function Bf(e) {
  ho || (ho = qs(Vf).use(Js()), ho.mount(e), console.info("[FiL_Design_ImageMind] provider manager mounted"));
}
function Hf(e) {
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
    render: (n) => Bf(n)
  }), console.info("[FiL_Design_ImageMind] provider manager sidebar tab registered");
}
const Uf = [
  {
    id: "FiL_Design_ImageMind.NodeTitles.AdaptiveColor",
    name: "Adaptive title text color",
    type: "boolean",
    defaultValue: !0,
    category: ["FiL_Design_ImageMind", "Node titles"],
    tooltip: "Compute node title text color (white/dark) from the title bar color via YIQ luminance."
  }
], jf = [
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
], Wf = [
  {
    id: "FiL_Design_ImageMind.ConnectionFX.Enabled",
    name: "Connection wire effects",
    type: "boolean",
    defaultValue: !1,
    tooltip: "Accent-radial-gradient overlay near the cursor while dragging a wire.",
    category: ["FiL_Design_ImageMind", "Connection FX", "Enabled"]
  }
], zf = [
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
], Kf = [
  {
    id: "FiL_Design_ImageMind.Shortcuts.Enabled",
    name: "Keyboard shortcuts",
    type: "boolean",
    defaultValue: !0,
    tooltip: "Esc — close popup / unfocus field. ? — help for the selected FiL_Design_ImageMind node. Shift+? or Ctrl+Shift+K — full shortcuts cheatsheet. / — focus node search.",
    category: ["FiL_Design_ImageMind", "Shortcuts"]
  }
], Gf = [
  {
    id: "FiL_Design_ImageMind.Language",
    name: "Language",
    type: "combo",
    defaultValue: "en",
    options: ["en", "ru"],
    tooltip: "UI language for FiL_Design_ImageMind node tooltips and labels (English / Russian).",
    category: ["FiL_Design_ImageMind", "Language"]
  }
], $a = {
  Default: "default",
  Cyberpunk: "cyberpunk",
  Fallout: "fallout"
};
function qf(e) {
  const t = $a[String(e)] ?? "default";
  ya(t);
  const n = globalThis.app;
  n && ju(n);
}
const Xf = [
  {
    id: "FiL_Design_ImageMind.Theme",
    name: "Node theme",
    type: "combo",
    defaultValue: "Default",
    options: ["Default", "Cyberpunk", "Fallout"],
    category: ["FiL_Design_ImageMind", "Appearance", "Theme"],
    tooltip: "Recolors every FiL_Design_ImageMind node panel and adds a small themed flourish (neon glow for Cyberpunk, a CRT scanline texture for Fallout). Applies instantly, no reload.",
    onChange: qf
  }
];
function Yf(e) {
  const t = e("FiL_Design_ImageMind.Theme", "Default");
  ya($a[t] ?? "default");
}
const Jf = [
  ...Uf,
  ...jf,
  ...Wf,
  ...zf,
  ...Kf,
  ...Gf,
  ...Xf
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
function Qf(e) {
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
        (!a || a.link == null) && console.warn(`${sn} Optic Scanner #${l.id} has no Provider Loader wired to its "config" slot — execution will fail.`);
      }
    }
  } catch (s) {
    console.warn(`${sn} preflight fallback:`, s);
  }
  return e;
}
function Zf(e) {
  return {
    name: ed,
    // Declarative settings — registered BEFORE setup so the panel renders
    // even if a later installer throws.
    settings: Jf,
    async setup() {
      const t = [
        () => zd(),
        () => qd(e),
        () => tf(),
        () => uf(e),
        () => Hf(e),
        () => Yf((n, s) => Da(n, s, e))
      ];
      for (const n of t)
        try {
          n();
        } catch (s) {
          console.warn(`${sn} installer ${n.name || "anonymous"} failed:`, s);
        }
    },
    getCustomWidgets(t) {
      const n = t;
      return n.widgets = n.widgets || {}, n.widgets.fil_compare = { serialize: !1 }, n.widgets;
    },
    async beforeRegisterNodeDef(t, n) {
      const s = Ea[n.name];
      if (s)
        try {
          await s.register(t, n);
        } catch (o) {
          console.warn(`${sn} failed to register "${n.name}":`, o);
        }
    },
    async graphToPrompt(t) {
      return Qf(t);
    }
  };
}
async function ep() {
  if (typeof fetch > "u") return;
  let e;
  try {
    e = await fetch(`${Ot}/node_contracts`);
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
  const n = new Set(Object.keys(t.node_ids ?? {})), s = new Set(Object.keys(Ea));
  for (const o of n)
    s.has(o) || console.warn(`${sn} server expects "${o}" but local JS does not register it`);
  for (const o of s)
    n.has(o) || console.warn(`${sn} JS registers "${o}" but server does not expose a contract`);
}
Tu();
Yu();
ep().catch((e) => {
  console.warn("[FiL_Design_ImageMind] contract self-check failed:", e);
});
const Va = Zf(sl);
sl.registerExtension(Va);
console.info(`[FiL_Design_ImageMind] extension registered as "${Va.name}"`);
const tp = {
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
  },
  FiLKSampler: {
    id: "FiLKSampler",
    title: "FiL KSampler",
    body: "Full-featured sampler with every ComfyUI sampler/scheduler, passthrough outputs, built-in preview, and optional HighRes-fix script.",
    bullets: [
      "Wire model, positive/negative conditioning, and a latent, then Queue.",
      "Denoise 1.0 = full sample; lower for img2img / refine passes.",
      "VAE decode outputs an IMAGE preview — needs a VAE (input or passthrough).",
      "Plug a FiL HighRes Fix `script` into the `script` slot to add an upscale pass."
    ],
    rows: [
      { label: "CFG", desc: "Classifier-free guidance scale (higher = follows the prompt more strictly)." },
      { label: "Preview method", desc: "How the live sampling preview is rendered (auto/latent2rgb/taesd)." },
      { label: "VAE decode", desc: "Decode the result to an IMAGE output. Off = latent only." }
    ]
  },
  FiLHighResFix: {
    id: "FiLHighResFix",
    title: "FiL HighRes Fix",
    body: "Packs latent/pixel upscale + re-sample settings into a script for FiL KSampler.",
    bullets: [
      "Outputs a `script` — wire it into the KSampler `script` slot, not into a latent.",
      "Upscale type: latent (fast), pixel (model upscaler), or both.",
      "Denoise controls how much the hires pass reworks the image (0.4–0.6 is typical).",
      "Iterations run multiple upscale+resample passes; ControlNet (advanced) can guide them."
    ],
    rows: [
      { label: "Upscale by", desc: "Resolution multiplier for the hires pass." },
      { label: "Same seed", desc: "Reuse the sampler's seed; turn off to set an own seed." },
      { label: "Hires steps", desc: "Denoising steps for the re-sample (fewer than the base pass is fine)." }
    ]
  }
}, np = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HELP_DEFAULTS: tp
}, Symbol.toStringTag, { value: "Module" })), sp = ["aria-checked", "disabled", "title", "onClick"], op = /* @__PURE__ */ Fe({
  __name: "FilChipGrid",
  props: {
    options: {},
    modelValue: {},
    columns: { default: 3 },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = J(() => ({
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
        class: we(["fil-w-chip", { active: r === e.modelValue, disabled: e.disabled }]),
        "aria-checked": r === e.modelValue,
        disabled: e.disabled,
        title: r,
        onClick: (u) => i(r)
      }, ne(r), 11, sp))), 128))
    ], 4));
  }
}), nl = /* @__PURE__ */ Me(op, [["__scopeId", "data-v-3c07d909"]]), ip = { class: "fil-w-chiplist" }, lp = ["placeholder", "aria-label", "disabled"], ap = {
  class: "fil-w-chip-scroll",
  role: "radiogroup"
}, rp = ["aria-checked", "disabled", "title", "onClick"], cp = {
  key: 0,
  class: "fil-w-chip-empty"
}, up = /* @__PURE__ */ Fe({
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
    const n = e, s = t, o = /* @__PURE__ */ le(""), i = J(() => {
      const a = o.value.trim().toLowerCase();
      return a ? n.options.filter((r) => r.toLowerCase().includes(a)) : n.options;
    });
    function l(a) {
      n.disabled || a !== n.modelValue && s("update:modelValue", a);
    }
    return (a, r) => (C(), E("div", ip, [
      e.searchable ? Ge((C(), E("input", {
        key: 0,
        "onUpdate:modelValue": r[0] || (r[0] = (u) => o.value = u),
        class: "fil-w-search",
        type: "search",
        placeholder: e.placeholder,
        "aria-label": e.placeholder,
        disabled: e.disabled,
        spellcheck: "false"
      }, null, 8, lp)), [
        [vt, o.value]
      ]) : te("", !0),
      z("div", ap, [
        (C(!0), E(de, null, Ae(i.value, (u) => (C(), E("button", {
          key: u,
          type: "button",
          role: "radio",
          class: we(["fil-w-chip", { active: u === e.modelValue, disabled: e.disabled }]),
          "aria-checked": u === e.modelValue,
          disabled: e.disabled,
          title: u,
          onClick: (c) => l(u)
        }, ne(u), 11, rp))), 128)),
        i.value.length === 0 ? (C(), E("div", cp, ne(o.value ? "No matches" : "Empty"), 1)) : te("", !0)
      ])
    ]));
  }
}), dp = /* @__PURE__ */ Me(up, [["__scopeId", "data-v-8b6ca087"]]), fp = ["title"], pp = {
  key: 0,
  class: "fil-combo-label"
}, mp = ["disabled", "aria-expanded"], hp = { class: "fil-combo-trigger-label" }, gp = {
  key: 1,
  class: "fil-combo-badge"
}, _p = ["placeholder"], bp = { class: "fil-combo-list" }, vp = ["aria-selected", "onMouseenter", "onClick"], yp = { class: "fil-combo-option-label" }, wp = {
  key: 1,
  class: "fil-combo-badge"
}, xp = {
  key: 0,
  class: "fil-combo-empty"
}, Sp = /* @__PURE__ */ Fe({
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
    const n = e, s = t, o = /* @__PURE__ */ le(!1), i = /* @__PURE__ */ le(""), l = /* @__PURE__ */ le(0), a = /* @__PURE__ */ le(null), r = /* @__PURE__ */ le(null), u = /* @__PURE__ */ le(null), c = /* @__PURE__ */ le({}), d = J(() => n.options.find((T) => T.value === n.modelValue)), f = J(() => {
      if (!n.searchable || !i.value.trim()) return n.options;
      const T = i.value.trim().toLowerCase();
      return n.options.filter((R) => (R.label ?? R.value).toLowerCase().includes(T));
    });
    function p(T) {
      return T.label ?? T.value;
    }
    function g() {
      const T = a.value;
      if (!T) return;
      const R = T.getBoundingClientRect(), I = window.innerHeight, G = 260, O = I - R.bottom, F = O < G && R.top > O;
      c.value = {
        left: `${R.left}px`,
        width: `${R.width}px`,
        ...F ? { bottom: `${I - R.top + 4}px` } : { top: `${R.bottom + 4}px` }
      };
    }
    function _(T) {
      var I;
      const R = T.target;
      R instanceof Element && ((I = r.value) != null && I.contains(R)) || v();
    }
    function M() {
      n.disabled || (o.value = !0, i.value = "", l.value = Math.max(
        0,
        f.value.findIndex((T) => T.value === n.modelValue)
      ), wn(() => {
        var T;
        g(), n.searchable && ((T = u.value) == null || T.focus()), window.addEventListener("resize", _), window.addEventListener("scroll", _, !0), document.addEventListener("mousedown", S, !0);
      }));
    }
    function v() {
      o.value && (o.value = !1, window.removeEventListener("resize", _), window.removeEventListener("scroll", _, !0), document.removeEventListener("mousedown", S, !0));
    }
    function S(T) {
      var I, G;
      const R = T.target;
      (I = a.value) != null && I.contains(R) || (G = r.value) != null && G.contains(R) || v();
    }
    function A() {
      o.value ? v() : M();
    }
    function b(T) {
      var R;
      s("update:modelValue", T.value), v(), (R = a.value) == null || R.focus();
    }
    function w(T) {
      if (!n.disabled) {
        if (!o.value && (T.key === "ArrowDown" || T.key === "ArrowUp" || T.key === "Enter" || T.key === " ")) {
          T.preventDefault(), M();
          return;
        }
        o.value && k(T);
      }
    }
    function k(T) {
      var I;
      const R = f.value;
      if (T.key === "ArrowDown")
        T.preventDefault(), l.value = R.length ? (l.value + 1) % R.length : 0;
      else if (T.key === "ArrowUp")
        T.preventDefault(), l.value = R.length ? (l.value - 1 + R.length) % R.length : 0;
      else if (T.key === "Enter") {
        T.preventDefault();
        const G = R[l.value];
        G && b(G);
      } else T.key === "Escape" && (T.preventDefault(), v(), (I = a.value) == null || I.focus());
    }
    return He(i, () => {
      l.value = 0;
    }), xn(() => {
      window.removeEventListener("resize", _), window.removeEventListener("scroll", _, !0), document.removeEventListener("mousedown", S, !0);
    }), (T, R) => {
      var I, G;
      return C(), E("div", {
        class: "fil-combo",
        title: e.title
      }, [
        e.label ? (C(), E("label", pp, ne(e.label), 1)) : te("", !0),
        z("button", {
          ref_key: "triggerRef",
          ref: a,
          type: "button",
          class: we(["fil-combo-trigger", { open: o.value, disabled: e.disabled }]),
          disabled: e.disabled,
          "aria-expanded": o.value,
          "aria-haspopup": "listbox",
          onClick: A,
          onKeydown: w
        }, [
          (I = d.value) != null && I.icon ? (C(), Ie(nn, {
            key: 0,
            name: d.value.icon,
            size: 16
          }, null, 8, ["name"])) : te("", !0),
          z("span", hp, ne(d.value ? p(d.value) : e.modelValue), 1),
          (G = d.value) != null && G.badge ? (C(), E("span", gp, ne(d.value.badge), 1)) : te("", !0),
          R[1] || (R[1] = z("span", { class: "fil-combo-chevron" }, "▾", -1))
        ], 42, mp),
        (C(), Ie(Bl, { to: "body" }, [
          o.value ? (C(), E("div", {
            key: 0,
            ref_key: "panelRef",
            ref: r,
            class: "fil-combo-panel",
            style: ze(c.value),
            role: "listbox",
            onKeydown: k
          }, [
            e.searchable ? Ge((C(), E("input", {
              key: 0,
              ref_key: "searchRef",
              ref: u,
              "onUpdate:modelValue": R[0] || (R[0] = (O) => i.value = O),
              type: "search",
              class: "fil-combo-search",
              placeholder: e.placeholder,
              spellcheck: "false"
            }, null, 8, _p)), [
              [vt, i.value]
            ]) : te("", !0),
            z("div", bp, [
              (C(!0), E(de, null, Ae(f.value, (O, F) => (C(), E("button", {
                key: O.value,
                type: "button",
                class: we(["fil-combo-option", { active: F === l.value, selected: O.value === e.modelValue }]),
                role: "option",
                "aria-selected": O.value === e.modelValue,
                onMouseenter: (x) => l.value = F,
                onClick: (x) => b(O)
              }, [
                O.icon ? (C(), Ie(nn, {
                  key: 0,
                  name: O.icon,
                  size: 16
                }, null, 8, ["name"])) : te("", !0),
                z("span", yp, ne(p(O)), 1),
                O.badge ? (C(), E("span", wp, ne(O.badge), 1)) : te("", !0)
              ], 42, vp))), 128)),
              f.value.length === 0 ? (C(), E("div", xp, "No matches")) : te("", !0)
            ])
          ], 36)) : te("", !0)
        ]))
      ], 8, fp);
    };
  }
}), No = /* @__PURE__ */ Me(Sp, [["__scopeId", "data-v-10bd69b4"]]), Fp = ["data-ok", "data-err"], Cp = /* @__PURE__ */ Fe({
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
    }, ne(e.text), 9, Fp));
  }
}), _s = /* @__PURE__ */ Me(Cp, [["__scopeId", "data-v-851660c1"]]), Mp = ["disabled", "min", "max", "step", "aria-label"], Lp = /* @__PURE__ */ Fe({
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
    const n = e, s = t, o = J(() => n.modelValue), i = /* @__PURE__ */ le(r(o.value));
    He(o, (_) => {
      l.value || (i.value = r(_));
    });
    let l = /* @__PURE__ */ le(!1), a = null;
    function r(_) {
      return Number.isFinite(_) ? String(_) : "";
    }
    function u(_) {
      const M = (_ || "").trim();
      if (M === "" || !/^[0-9+\-*/(). ]+$/.test(M.replace(/\^/g, "**"))) return null;
      try {
        const v = new Function(`"use strict"; return (${M});`), S = Number(v());
        return Number.isFinite(S) ? S : null;
      } catch {
        return null;
      }
    }
    function c(_) {
      if (_ === null) {
        i.value = r(o.value);
        return;
      }
      let M = _;
      n.min != null && M < n.min && (M = n.min), n.max != null && M > n.max && (M = n.max), M !== o.value && s("update:modelValue", M), i.value = r(M);
    }
    function d() {
      l.value = !0, a = i.value;
    }
    function f() {
      l.value = !1, c(u(i.value)), a = null;
    }
    function p(_) {
      _.key === "Enter" ? (_.preventDefault(), c(u(i.value)), _.target.blur()) : _.key === "Escape" ? (_.preventDefault(), a !== null && (i.value = a), _.target.blur()) : _.key === "ArrowUp" ? (_.preventDefault(), g(_.shiftKey ? 10 : 1)) : _.key === "ArrowDown" && (_.preventDefault(), g(_.shiftKey ? -10 : -1));
    }
    function g(_) {
      let M = o.value + _ * (n.step || 1);
      n.min != null && M < n.min && (M = n.min), n.max != null && M > n.max && (M = n.max), s("update:modelValue", M), i.value = r(M);
    }
    return (_, M) => Ge((C(), E("input", {
      "onUpdate:modelValue": M[0] || (M[0] = (v) => i.value = v),
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
}), $t = /* @__PURE__ */ Me(Lp, [["__scopeId", "data-v-b9154493"]]), Ip = ["aria-expanded", "disabled"], Ap = { class: "fil-w-section-arrow" }, Dp = { class: "fil-w-section-title" }, kp = /* @__PURE__ */ Fe({
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
    const i = J(() => n.modelValue ? "▶" : "▼");
    return (l, a) => (C(), E("button", {
      type: "button",
      class: we(["fil-w-section", { collapsible: e.collapsible, collapsed: e.modelValue }]),
      "aria-expanded": !e.modelValue,
      disabled: !e.collapsible,
      onClick: o
    }, [
      z("span", Ap, ne(i.value), 1),
      z("span", Dp, ne(e.title), 1)
    ], 10, Ip));
  }
}), on = /* @__PURE__ */ Me(kp, [["__scopeId", "data-v-686d0388"]]), Ep = ["title"], Tp = {
  key: 0,
  class: "fil-w-segmented-label"
}, Rp = ["aria-label"], Op = ["aria-pressed", "disabled", "tabindex", "onClick", "onKeydown"], Pp = /* @__PURE__ */ Fe({
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
    const n = e, s = t, o = J(() => n.modelValue), i = /* @__PURE__ */ le([]);
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
        const g = d[(c + 1) % d.length];
        a(g), (f = i.value[(c + 1) % d.length]) == null || f.focus();
      } else if (u.key === "ArrowLeft" || u.key === "ArrowUp") {
        u.preventDefault();
        const g = d[(c - 1 + d.length) % d.length];
        a(g), (p = i.value[(c - 1 + d.length) % d.length]) == null || p.focus();
      }
    }
    return (u, c) => (C(), E("div", {
      class: "fil-w-segmented",
      title: e.title
    }, [
      e.label ? (C(), E("label", Tp, ne(e.label), 1)) : te("", !0),
      z("div", {
        class: we(["fil-w-pill", { disabled: e.disabled }]),
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
          class: we(["fil-w-seg", { active: d === o.value }]),
          "aria-pressed": d === o.value,
          disabled: e.disabled,
          tabindex: d === o.value ? 0 : -1,
          onClick: (p) => a(d),
          onKeydown: (p) => r(p, f)
        }, ne(l(d)), 43, Op))), 128))
      ], 10, Rp)
    ], 8, Ep));
  }
}), gt = /* @__PURE__ */ Me(Pp, [["__scopeId", "data-v-fa82f2ad"]]), Np = ["title"], $p = {
  key: 0,
  class: "fil-w-select-label"
}, Vp = ["disabled", "aria-label"], Bp = ["value"], Hp = /* @__PURE__ */ Fe({
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
    const n = e, s = t, o = J({
      get: () => n.modelValue,
      set: (i) => s("update:modelValue", i)
    });
    return (i, l) => (C(), E("div", {
      class: "fil-w-select",
      title: e.title
    }, [
      e.label ? (C(), E("label", $p, ne(e.label), 1)) : te("", !0),
      Ge(z("select", {
        "onUpdate:modelValue": l[0] || (l[0] = (a) => o.value = a),
        class: "fil-w-select-input",
        disabled: e.disabled,
        "aria-label": e.label,
        onChange: l[1] || (l[1] = (a) => s("update:modelValue", a.target.value))
      }, [
        (C(!0), E(de, null, Ae(e.options, (a) => (C(), E("option", {
          key: a,
          value: a
        }, ne(a), 9, Bp))), 128))
      ], 40, Vp), [
        [vu, o.value]
      ])
    ], 8, Np));
  }
}), fs = /* @__PURE__ */ Me(Hp, [["__scopeId", "data-v-77c303be"]]), Up = ["title"], jp = {
  key: 0,
  class: "fil-w-slider-label"
}, Wp = { class: "fil-w-slider-row" }, zp = ["value", "min", "max", "step", "disabled", "aria-label"], Kp = /* @__PURE__ */ Fe({
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
    const n = e, s = t, o = J(() => {
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
      e.label ? (C(), E("label", jp, ne(e.label), 1)) : te("", !0),
      z("div", Wp, [
        z("input", {
          type: "range",
          class: "fil-w-slider-range",
          value: o.value,
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label,
          onInput: i
        }, null, 40, zp),
        Y($t, {
          "model-value": o.value,
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label,
          "onUpdate:modelValue": l
        }, null, 8, ["model-value", "min", "max", "step", "disabled", "aria-label"])
      ])
    ], 8, Up));
  }
}), nt = /* @__PURE__ */ Me(Kp, [["__scopeId", "data-v-5391c869"]]), Gp = {
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
}, qp = {}, Xp = {}, Yp = {}, Jp = {
  ...Gp,
  ...qp,
  ...Xp,
  ...Yp
}, Qp = { class: "fil-style-picker" }, Zp = { class: "fil-style-cats" }, em = ["onClick"], tm = { class: "fil-style-grid" }, nm = ["title", "onClick"], sm = { class: "fil-style-tile-preview" }, om = ["src"], im = {
  key: 1,
  class: "fil-style-tile-placeholder"
}, lm = { class: "fil-style-tile-label" }, am = {
  key: 0,
  class: "fil-style-empty"
}, ps = "__all__", rm = /* @__PURE__ */ Fe({
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
    const l = J(() => {
      const f = /* @__PURE__ */ new Set(), p = [];
      for (const g of n.styles) {
        const _ = o(g);
        _ && !f.has(_) && (f.add(_), p.push(_));
      }
      return p;
    }), a = /* @__PURE__ */ le(ps), r = /* @__PURE__ */ le(""), u = J(() => {
      const f = r.value.trim().toLowerCase();
      return n.styles.filter((p) => a.value !== ps && o(p) !== a.value ? !1 : f ? p.toLowerCase().includes(f) : !0);
    });
    function c(f) {
      return Jp[f];
    }
    function d(f) {
      s("select", f);
    }
    return (f, p) => (C(), E("div", Qp, [
      z("div", Zp, [
        z("button", {
          type: "button",
          class: we(["fil-style-cat", { active: a.value === ps }]),
          onClick: p[0] || (p[0] = (g) => a.value = ps)
        }, " All ", 2),
        (C(!0), E(de, null, Ae(l.value, (g) => (C(), E("button", {
          key: g,
          type: "button",
          class: we(["fil-style-cat", { active: a.value === g }]),
          onClick: (_) => a.value = g
        }, ne(g), 11, em))), 128))
      ]),
      Ge(z("input", {
        "onUpdate:modelValue": p[1] || (p[1] = (g) => r.value = g),
        type: "search",
        class: "fil-style-search",
        placeholder: "Search styles…",
        "aria-label": "Search styles",
        spellcheck: "false"
      }, null, 512), [
        [vt, r.value]
      ]),
      z("div", tm, [
        (C(!0), E(de, null, Ae(u.value, (g) => (C(), E("button", {
          key: g,
          type: "button",
          class: we(["fil-style-tile", { active: g === e.modelValue }]),
          title: g,
          onClick: (_) => d(g)
        }, [
          z("span", sm, [
            c(g) ? (C(), E("img", {
              key: 0,
              src: c(g),
              class: "fil-style-tile-img",
              alt: ""
            }, null, 8, om)) : (C(), E("span", im, ne(i(g).split(" ")[0]), 1))
          ]),
          z("span", lm, ne(i(g)), 1)
        ], 10, nm))), 128)),
        u.value.length === 0 ? (C(), E("div", am, "No matches")) : te("", !0)
      ])
    ]));
  }
}), cm = /* @__PURE__ */ Me(rm, [["__scopeId", "data-v-6e196d1e"]]), um = { class: "fil-seed-root" }, dm = ["title"], fm = ["readonly"], pm = { class: "fil-seed-actions" }, mm = /* @__PURE__ */ Fe({
  __name: "Seed",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = kt(), s = J({
      get: () => t.state.nodeState.mode ?? "random",
      set: (u) => {
        t.state.nodeState.mode = u;
      }
    }), o = J({
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
    const r = J(() => s.value === "fixed" ? `${o.value}` : "random");
    return (u, c) => (C(), E("div", um, [
      z("div", {
        class: "fil-seed-readout",
        title: s.value === "fixed" ? h(n)("sd_locked", "Locked seed") : h(n)("sd_auto_random", "Auto-random")
      }, [
        Ge(z("input", {
          "onUpdate:modelValue": c[0] || (c[0] = (d) => r.value = d),
          type: "text",
          class: "fil-seed-display",
          readonly: s.value === "random",
          "aria-label": "Seed value"
        }, null, 8, fm), [
          [vt, r.value]
        ]),
        s.value === "random" && t.state.lastRunSeed != null ? (C(), Ie(h(_s), {
          key: 0,
          text: `Last run: ${t.state.lastRunSeed}`
        }, null, 8, ["text"])) : te("", !0)
      ], 8, dm),
      z("div", pm, [
        Y(h(it), {
          label: h(n)("sd_random_label", "🔀 Random"),
          variant: "standard",
          title: h(n)("sd_mode", "Random generates a new seed each run."),
          onClick: i
        }, null, 8, ["label", "title"]),
        Y(h(it), {
          label: h(n)("sd_btn_use_last", "♻️ Use last"),
          variant: "standard",
          title: h(n)("sd_use_last", "Reuse the seed from the last executed run."),
          onClick: l
        }, null, 8, ["label", "title"]),
        Y(h(it), {
          label: h(n)("sd_btn_new_fixed", "🎲 New fixed"),
          variant: "accent",
          title: h(n)("sd_new_fixed", "Generate a new random fixed seed."),
          onClick: a
        }, null, 8, ["label", "title"])
      ])
    ]));
  }
}), hm = /* @__PURE__ */ Me(mm, [["__scopeId", "data-v-527ba047"]]), gm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hm
}, Symbol.toStringTag, { value: "Module" })), _m = { class: "fil-provider-root" }, bm = { class: "fil-provider-row" }, vm = {
  key: 0,
  class: "fil-model-filter-bar"
}, ym = { class: "fil-model-filter-wrap" }, wm = ["placeholder"], xm = { class: "fil-model-count" }, Sm = 3e5, Fm = /* @__PURE__ */ Fe({
  __name: "ProviderLoader",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, n = Oa(), { t: s } = kt(), o = /* @__PURE__ */ le("");
    function i(O, F) {
      return {
        get: () => t.state.nodeState[O] ?? F,
        set: (x) => {
          t.state.nodeState[O] = x;
        }
      };
    }
    const l = J(() => String(i("provider", "ollama").get()));
    function a(O) {
      i("provider", "ollama").set(O), o.value = "";
      const F = n.modelsFor(O);
      F.length ? (u(F[0]), I(), n.loadModels(O)) : (g.nodeState.model = "(loading...)", G());
    }
    const r = J(() => String(i("model", "(loading...)").get()));
    function u(O) {
      i("model", "(loading...)").set(O);
    }
    const c = J(() => Number(i("temperature", 0.7).get())), d = J(() => Number(i("max_tokens", 0).get())), f = J(() => Number(i("rate_limit_ms", 100).get())), p = J(() => Number(i("max_image_side", 1024).get())), g = t.state, _ = J(() => {
      const O = n.modelsFor(l.value);
      return O.length ? O : ["(no models)"];
    }), M = J(() => n.modelsFor(l.value).length > 0), v = J(() => {
      const O = _.value;
      if (!o.value || !M.value) return O;
      const F = o.value.toLowerCase();
      return O.filter((x) => x.toLowerCase().includes(F));
    }), S = J(() => {
      if (!M.value) return "";
      const O = n.modelsFor(l.value).length, F = v.value.length;
      return F === O ? `${O}` : `${F} of ${O}`;
    }), A = J(
      () => Wn.map((O) => ({ value: O, label: Pa[O] ?? O, icon: Na[O] }))
    ), b = J(() => {
      const O = n.visionModelsFor(l.value);
      return v.value.map((F) => ({
        value: F,
        badge: O.includes(F) ? "👁" : void 0
      }));
    }), w = J(() => n.isLoading(l.value)), k = J(() => n.probeState[l.value]), T = J(() => n.cachedAgeLabel(l.value));
    let R = null;
    He(() => t.state.nodeState, () => {
    }, { deep: !0 });
    function I() {
      const O = t.state.node;
      if (!O) return;
      const F = fe(O, "model");
      if (!F) return;
      const x = n.modelsFor(l.value), V = x.length ? x : ["(no models)"];
      F.options && (F.options.values = V);
    }
    async function G() {
      try {
        await n.loadModels(l.value, !0);
        const O = n.modelsFor(l.value);
        u(O[0] ?? "(no models)"), I();
      } catch (O) {
        st.error(O instanceof Error ? O.message : String(O));
      }
    }
    return rn(async () => {
      n.loadDisplayNames();
      const O = n.modelsFor(l.value);
      if (O.length)
        r.value === "(loading...)" && u(O[0] ?? "(no models)"), I(), n.loadModels(l.value);
      else
        try {
          await n.loadModels(l.value);
          const F = n.modelsFor(l.value);
          r.value === "(loading...)" && u(F[0] ?? "(no models)"), I();
        } catch (F) {
          st.error(F instanceof Error ? F.message : String(F));
        }
      R = setInterval(() => {
        n.loadModels(l.value, !0);
      }, Sm);
    }), Ws(() => {
      R && clearInterval(R);
    }), (O, F) => (C(), E("div", _m, [
      Y(h(No), {
        options: A.value,
        "model-value": l.value,
        label: h(s)("lbl_provider", "🔌 Provider"),
        title: h(s)("tt_provider", "LLM provider to use — local (Ollama, LM Studio) or cloud."),
        "onUpdate:modelValue": a
      }, null, 8, ["options", "model-value", "label", "title"]),
      z("div", bm, [
        Y(h(No), {
          options: b.value,
          "model-value": r.value,
          label: h(s)("lbl_model", "🧠 Model"),
          title: h(s)("tt_model", "Choose which model to use. If the list is empty, refresh it or check the provider account."),
          "onUpdate:modelValue": u
        }, null, 8, ["options", "model-value", "label", "title"]),
        Y(h(it), {
          label: "↻",
          title: h(s)("tt_refresh", "Reload the model list. Use after adding a new model or API key."),
          disabled: w.value || h(g).ui.refreshing === !0,
          onClick: G
        }, null, 8, ["title", "disabled"])
      ]),
      M.value ? (C(), E("div", vm, [
        z("div", ym, [
          Ge(z("input", {
            "onUpdate:modelValue": F[0] || (F[0] = (x) => o.value = x),
            type: "text",
            class: "fil-model-filter",
            placeholder: h(s)("prov_search_models", "Search models…")
          }, null, 8, wm), [
            [vt, o.value]
          ])
        ]),
        z("span", xm, ne(S.value), 1)
      ])) : te("", !0),
      w.value ? (C(), Ie(h(_s), {
        key: 1,
        text: h(s)("prov_loading_models", "Loading models…")
      }, null, 8, ["text"])) : k.value && k.value.status && k.value.status !== "available" ? (C(), Ie(h(_s), {
        key: 2,
        err: !0,
        text: k.value.message || k.value.status
      }, null, 8, ["text"])) : T.value ? (C(), Ie(h(_s), {
        key: 3,
        text: `${h(s)("prov_models_updated", "Models updated")}: ${T.value}`
      }, null, 8, ["text"])) : te("", !0),
      Y(h(nt), {
        "model-value": c.value,
        min: 0,
        max: 2,
        step: 0.05,
        label: h(s)("lbl_temperature", "🌡️ Temperature"),
        title: h(s)("tt_temperature", "Sampling temperature — higher is more creative, lower is more deterministic."),
        "onUpdate:modelValue": F[1] || (F[1] = (x) => h(g).nodeState.temperature = x)
      }, null, 8, ["model-value", "label", "title"]),
      Y(h(nt), {
        "model-value": d.value,
        min: 0,
        max: 65536,
        step: 1,
        label: h(s)("lbl_max_tokens", "🔢 Max tokens"),
        title: h(s)("tt_provider_max_tokens", "Maximum tokens in the response. 0 = provider default (no explicit limit)."),
        "onUpdate:modelValue": F[2] || (F[2] = (x) => h(g).nodeState.max_tokens = x)
      }, null, 8, ["model-value", "label", "title"]),
      Y(h(nt), {
        "model-value": f.value,
        min: 0,
        max: 5e3,
        step: 10,
        label: h(s)("lbl_rate_limit", "⏱️ Rate limit"),
        title: h(s)("tt_rate_limit", "Minimum delay between requests to this provider, to avoid rate limiting."),
        "onUpdate:modelValue": F[3] || (F[3] = (x) => h(g).nodeState.rate_limit_ms = x)
      }, null, 8, ["model-value", "label", "title"]),
      Y(h(nt), {
        "model-value": p.value,
        min: 128,
        max: 4096,
        step: 64,
        label: h(s)("lbl_max_image_side", "🖼️ Max image side"),
        title: h(s)("tt_max_image_side", "Images are downscaled so their longest side does not exceed this value."),
        "onUpdate:modelValue": F[4] || (F[4] = (x) => h(g).nodeState.max_image_side = x)
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), Cm = /* @__PURE__ */ Me(Fm, [["__scopeId", "data-v-2aa7b099"]]), Mm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cm
}, Symbol.toStringTag, { value: "Module" })), Lm = {
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
}, Im = { class: "fil-scanner-root" }, Am = ["title"], Dm = ["value", "placeholder", "onInput"], km = ["value", "placeholder", "onInput"], Em = { class: "fil-section-block" }, Tm = ["title"], Rm = { class: "fil-scanner-seed" }, Om = { class: "fil-scanner-seed-row" }, Pm = ["value", "readonly", "title"], Nm = ["title"], $m = ["title"], Vm = ["title"], Bm = /* @__PURE__ */ Fe({
  __name: "OpticScanner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = kt(), s = Lm.FiLOpticScanner, o = (s == null ? void 0 : s.inputs.required) ?? [], i = {
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
    function r(N) {
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
      const H = d[N.name] || "", D = N.name.replace(/_/g, " ").replace(/\b\w/g, (j) => j.toUpperCase());
      return H ? `${H} ${D}` : D;
    }
    const p = /* @__PURE__ */ ln({}), g = {
      photo_style: { emoji: "📷", labelKey: "scn_style_photo_label", labelFallback: "Photo" },
      nsfw_photo_style: { emoji: "🔞", labelKey: "scn_style_nsfw_photo_label", labelFallback: "NSFW Photo" },
      art_style: { emoji: "🎨", labelKey: "scn_style_art_label", labelFallback: "Art" },
      nsfw_art_style: { emoji: "🔞", labelKey: "scn_style_nsfw_art_label", labelFallback: "NSFW Art" }
    };
    function _(N) {
      const H = g[N], D = H ? `${H.emoji} ${n(H.labelKey, H.labelFallback)}: ` : "", j = String(b(N, "None") || "None");
      if (j === "None") return `${D}${n("scn_style_none", "None")}`;
      const W = j.indexOf("/"), Z = W === -1 ? j : j.slice(W + 1);
      return `${D}${Z}`;
    }
    function M(N) {
      p[N] = !0;
    }
    function v(N, H) {
      w(N, H), p[N] = !1;
    }
    const S = J(() => {
      var H;
      const N = {};
      for (const D of o) (N[H = D.section || "_"] ?? (N[H] = [])).push(D);
      return N;
    }), A = J(() => {
      const N = S.value.styles || [], H = [];
      for (let D = 0; D < N.length; D += 2) H.push(N.slice(D, D + 2));
      return H;
    });
    function b(N, H = "") {
      return t.state.nodeState[N] ?? t.state.initialValues[N] ?? H;
    }
    function w(N, H) {
      t.state.nodeState[N] = H;
    }
    const k = /* @__PURE__ */ new Set(["agent", "output", "advanced"]);
    function T(N) {
      const H = t.state.ui[`collapsed_${N}`];
      return H === void 0 ? k.has(N) : !!H;
    }
    function R(N, H) {
      t.state.ui[`collapsed_${N}`] = H;
    }
    He(() => t.state.nodeState, () => {
    }, { deep: !0 });
    const I = J({
      get: () => t.state.nodeState.seed_mode ?? "random",
      set: (N) => {
        t.state.nodeState.seed_mode = N;
      }
    }), G = J({
      get: () => Number(t.state.nodeState.seed ?? -1) || -1,
      set: (N) => {
        t.state.nodeState.seed = N;
      }
    }), O = J(() => I.value === "fixed" ? `${G.value}` : "random");
    function F() {
      I.value = "random";
    }
    function x() {
      if (t.state.lastRunSeed == null) {
        st.warning("No last-run seed recorded yet");
        return;
      }
      G.value = t.state.lastRunSeed, I.value = "fixed";
    }
    function V() {
      const N = Math.floor(Math.random() * 1e9) & 2147483647;
      G.value = N, I.value = "fixed";
    }
    return (N, H) => (C(), E("div", Im, [
      (C(!0), E(de, null, Ae(S.value, (D, j) => (C(), E(de, { key: j }, [
        j !== "styles" ? (C(), E("div", {
          key: 0,
          class: "fil-section-block",
          style: ze({ "--fil-accent": l[String(j)] })
        }, [
          j !== "_" && j !== "prompt" ? (C(), Ie(h(on), {
            key: 0,
            title: r(String(j)),
            "model-value": T(String(j)),
            "onUpdate:modelValue": (W) => R(String(j), W)
          }, null, 8, ["title", "model-value", "onUpdate:modelValue"])) : te("", !0),
          (C(!0), E(de, null, Ae(D, (W) => Ge((C(), E("div", {
            key: W.name,
            class: "fil-w-row",
            title: c(W)
          }, [
            W.kind === "chip_grid" ? (C(), Ie(h(nl), {
              key: 0,
              options: W.values || [],
              "model-value": String(b(W.name, "")),
              columns: W.columns ?? 3,
              "onUpdate:modelValue": (Z) => w(W.name, Z)
            }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"])) : W.kind === "chip_list" ? (C(), Ie(h(dp), {
              key: 1,
              options: W.values || [],
              "model-value": b(W.name, null),
              searchable: W.searchable ?? !0,
              "onUpdate:modelValue": (Z) => w(W.name, Z)
            }, null, 8, ["options", "model-value", "searchable", "onUpdate:modelValue"])) : W.kind === "segmented" ? (C(), Ie(h(gt), {
              key: 2,
              options: W.options || [],
              "model-value": String(b(W.name, "")),
              label: f(W),
              "onUpdate:modelValue": (Z) => w(W.name, Z)
            }, null, 8, ["options", "model-value", "label", "onUpdate:modelValue"])) : W.kind === "string" && h(a).has(W.name) ? (C(), E("textarea", {
              key: 3,
              class: "fil-w-textarea",
              value: String(b(W.name, "")),
              placeholder: f(W),
              onInput: (Z) => w(W.name, Z.target.value)
            }, null, 40, Dm)) : W.kind === "string" ? (C(), E("input", {
              key: 4,
              type: "text",
              class: "fil-w-input",
              value: String(b(W.name, "")),
              placeholder: f(W),
              onInput: (Z) => w(W.name, Z.target.value)
            }, null, 40, km)) : (C(), Ie(h(nl), {
              key: 5,
              options: W.values || [],
              "model-value": String(b(W.name, "")),
              columns: W.columns ?? 3,
              "onUpdate:modelValue": (Z) => w(W.name, Z)
            }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"]))
          ], 8, Am)), [
            [As, j === "_" || j === "prompt" || !T(String(j))]
          ])), 128))
        ], 4)) : te("", !0)
      ], 64))), 128)),
      z("div", {
        class: "fil-section-block",
        style: ze({ "--fil-accent": l.advanced })
      }, [
        Y(h(on), {
          title: r("advanced"),
          "model-value": T("advanced"),
          "onUpdate:modelValue": H[0] || (H[0] = (D) => R("advanced", D))
        }, null, 8, ["title", "model-value"]),
        Ge(z("div", Em, [
          (C(!0), E(de, null, Ae(A.value, (D, j) => (C(), E("div", {
            key: `style-pair-${j}`,
            class: "fil-style-pair-row"
          }, [
            (C(!0), E(de, null, Ae(D, (W) => (C(), E("div", {
              key: W.name,
              class: "fil-style-pair-item",
              title: c(W)
            }, [
              Y(h(it), {
                variant: "full",
                label: _(W.name),
                onClick: (Z) => M(W.name)
              }, null, 8, ["label", "onClick"]),
              Y(h(Ta), {
                open: !!p[W.name],
                title: f(W),
                width: "640px",
                "onUpdate:open": (Z) => p[W.name] = Z
              }, {
                default: Us(() => [
                  Y(h(cm), {
                    styles: W.values || [],
                    "model-value": String(b(W.name, "None")),
                    onSelect: (Z) => v(W.name, Z)
                  }, null, 8, ["styles", "model-value", "onSelect"])
                ]),
                _: 2
              }, 1032, ["open", "title", "onUpdate:open"])
            ], 8, Tm))), 128))
          ]))), 128))
        ], 512), [
          [As, !T("advanced")]
        ])
      ], 4),
      z("div", Rm, [
        z("div", Om, [
          z("input", {
            value: O.value,
            type: "text",
            class: we(["fil-scanner-seed-field", { "is-random": I.value === "random" }]),
            readonly: I.value === "random",
            "aria-label": "Seed value",
            title: I.value === "fixed" ? h(n)("scn_seed_locked", "Locked seed") : h(n)("scn_seed_auto_random", "Auto-random — a new seed is generated each run"),
            onInput: H[1] || (H[1] = (D) => G.value = Number(D.target.value) || 0)
          }, null, 42, Pm),
          z("button", {
            type: "button",
            class: we(["fil-scanner-seed-pill", { active: I.value === "random" }]),
            title: h(n)("scn_seed_mode_tt", "Random generates a new seed each run."),
            onClick: F
          }, ne(h(n)("scn_seed_random", "Random")), 11, Nm),
          z("button", {
            type: "button",
            class: "fil-scanner-seed-pill",
            title: t.state.lastRunSeed != null ? `${h(n)("scn_seed_use_last_prefix", "Reuse the last run's seed:")} ${t.state.lastRunSeed}` : h(n)("scn_seed_use_last_tt", "Reuse the seed from the last executed run."),
            onClick: x
          }, ne(h(n)("scn_seed_use_last", "Use last")), 9, $m),
          z("button", {
            type: "button",
            class: "fil-scanner-seed-pill fil-scanner-seed-pill-accent",
            title: h(n)("scn_seed_new_fixed_tt", "Generate a new random fixed seed."),
            onClick: V
          }, ne(h(n)("scn_seed_new_fixed", "New fixed")), 9, Vm)
        ])
      ])
    ]));
  }
}), Hm = /* @__PURE__ */ Me(Bm, [["__scopeId", "data-v-875167a9"]]), Um = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hm
}, Symbol.toStringTag, { value: "Module" })), jm = { class: "fil-cleaner-root" }, Wm = ["aria-pressed", "title", "onClick"], zm = { class: "fil-cleaner-label" }, Km = ["aria-pressed", "title", "onClick"], Gm = { class: "fil-cleaner-label" }, qm = /* @__PURE__ */ Fe({
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
    }, { deep: !0 }), (d, f) => (C(), E("div", jm, [
      Y(h(on), {
        title: h(n)("nc_section_vram", "🎮 VRAM / Models"),
        "model-value": u("vram"),
        "onUpdate:modelValue": f[0] || (f[0] = (p) => c("vram", p))
      }, null, 8, ["title", "model-value"]),
      (C(), E(de, null, Ae(s, (p) => Ge(z("button", {
        key: p.name,
        type: "button",
        class: we(["fil-cleaner-row", { active: l(p.name, p.defaultOn) }]),
        "aria-pressed": l(p.name, p.defaultOn),
        title: i(p.name, p.label),
        onClick: (g) => a(p.name, p.defaultOn)
      }, [
        f[2] || (f[2] = z("span", { class: "fil-cleaner-dot" }, null, -1)),
        z("span", zm, ne(h(n)(`nc_lbl_${p.name}`, p.label)), 1)
      ], 10, Wm), [
        [As, !u("vram")]
      ])), 64)),
      Y(h(on), {
        title: h(n)("nc_section_ram", "💾 RAM / Cache (advanced)"),
        "model-value": u("ram"),
        "onUpdate:modelValue": f[1] || (f[1] = (p) => c("ram", p))
      }, null, 8, ["title", "model-value"]),
      (C(), E(de, null, Ae(o, (p) => Ge(z("button", {
        key: p.name,
        type: "button",
        class: we(["fil-cleaner-row", { active: l(p.name, p.defaultOn) }]),
        "aria-pressed": l(p.name, p.defaultOn),
        title: i(p.name, p.label),
        onClick: (g) => a(p.name, p.defaultOn)
      }, [
        f[3] || (f[3] = z("span", { class: "fil-cleaner-dot" }, null, -1)),
        z("span", Gm, ne(h(n)(`nc_lbl_${p.name}`, p.label)), 1)
      ], 10, Km), [
        [As, !u("ram")]
      ])), 64))
    ]));
  }
}), Xm = /* @__PURE__ */ Me(qm, [["__scopeId", "data-v-71474bb1"]]), Ym = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xm
}, Symbol.toStringTag, { value: "Module" }));
function go(e) {
  return Math.min(1, Math.max(0, e));
}
const Jm = { class: "fil-cmp-root" }, Qm = {
  key: 0,
  class: "fil-cmp-placeholder"
}, Zm = { class: "fil-cmp-save-row" }, eh = {
  key: 2,
  class: "fil-cmp-settings"
}, th = /* @__PURE__ */ Fe({
  __name: "BeforeAfterCompare",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = kt(), s = J({
      get: () => t.state.ui.compare_mode ?? "wipe",
      set: (D) => {
        t.state.ui.compare_mode = D, F();
      }
    }), o = J({
      get: () => Number(t.state.ui.compare_position ?? 0.5),
      set: (D) => {
        t.state.ui.compare_position = go(D), F();
      }
    }), i = J({
      get: () => Number(t.state.ui.compare_opacity ?? 0.5),
      set: (D) => {
        t.state.ui.compare_opacity = go(D), F();
      }
    }), l = J({
      get: () => t.state.ui.settings_collapsed !== !1,
      set: (D) => {
        t.state.ui.settings_collapsed = D;
      }
    }), a = J(() => [
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
    }, c = J(() => t.state.nodeState.swap ? "ON" : "OFF");
    function d(D) {
      t.state.nodeState.swap = D === "ON";
    }
    const f = J(() => String(t.state.nodeState.resize_mode ?? "Off"));
    function p(D) {
      t.state.nodeState.resize_mode = D;
    }
    const g = J(() => Number(t.state.nodeState.max_resolution ?? 4096) || 4096);
    function _(D) {
      t.state.nodeState.max_resolution = D;
    }
    const M = J(() => f.value !== "Off"), v = J(() => t.state.ui.compare_images ?? {}), S = /* @__PURE__ */ le(null), A = /* @__PURE__ */ le(null), b = /* @__PURE__ */ le(!1), w = J(() => !!S.value || !!A.value);
    function k(D) {
      return new Promise((j, W) => {
        const Z = new Image();
        Z.onload = () => j(Z), Z.onerror = () => W(new Error("image load failed")), Z.src = D;
      });
    }
    const T = /* @__PURE__ */ le(null), R = /* @__PURE__ */ le(null);
    let I = 0, G = null;
    He(
      () => t.state.ui.compare_images,
      async (D) => {
        var ie, ve;
        const j = D ?? {}, W = (ie = j.a) == null ? void 0 : ie[0], Z = (ve = j.b) == null ? void 0 : ve[0];
        b.value = !1, S.value = null, A.value = null;
        try {
          W && (S.value = await k(Yi(W))), Z && (A.value = await k(Yi(Z)));
        } catch {
          b.value = !0;
        }
        F();
      },
      { deep: !0, immediate: !0 }
    ), He([s, o, i], () => F());
    function O(D, j, W, Z) {
      if (!W || !Z) return { x: 0, y: 0, w: D, h: j };
      const ie = D / j, ve = W / Z;
      let Ze, ae;
      return ve > ie ? (Ze = D, ae = D / ve) : (ae = j, Ze = j * ve), { x: (D - Ze) / 2, y: (j - ae) / 2, w: Ze, h: ae };
    }
    function F() {
      I || (I = requestAnimationFrame(() => {
        I = 0, x();
      }));
    }
    function x() {
      const D = R.value, j = T.value;
      if (!D || !j) return;
      const W = window.devicePixelRatio || 1, Z = j.clientWidth, ie = j.clientHeight;
      if (Z <= 0 || ie <= 0) return;
      const ve = Math.round(Z * W), Ze = Math.round(ie * W);
      (D.width !== ve || D.height !== Ze) && (D.width = ve, D.height = Ze);
      const ae = D.getContext("2d");
      if (!ae) return;
      ae.setTransform(W, 0, 0, W, 0, 0), ae.clearRect(0, 0, Z, ie);
      const $e = S.value, De = A.value;
      if (!$e && !De) return;
      if (s.value === "side-by-side") {
        const qe = Z / 2;
        if ($e) {
          const Re = O(qe, ie, $e.naturalWidth, $e.naturalHeight);
          ae.drawImage($e, Re.x, Re.y, Re.w, Re.h);
        }
        if (De) {
          const Re = O(qe, ie, De.naturalWidth, De.naturalHeight);
          ae.drawImage(De, qe + Re.x, Re.y, Re.w, Re.h);
        }
        ae.strokeStyle = "rgba(255,255,255,0.2)", ae.beginPath(), ae.moveTo(qe, 0), ae.lineTo(qe, ie), ae.stroke();
        return;
      }
      const jt = $e ?? De, ue = O(Z, ie, jt.naturalWidth, jt.naturalHeight);
      if (s.value === "before") {
        $e && ae.drawImage($e, ue.x, ue.y, ue.w, ue.h);
        return;
      }
      if (s.value === "after") {
        De && ae.drawImage(De, ue.x, ue.y, ue.w, ue.h);
        return;
      }
      if (s.value === "overlay") {
        $e && ae.drawImage($e, ue.x, ue.y, ue.w, ue.h), De && (ae.save(), ae.globalAlpha = i.value, ae.drawImage(De, ue.x, ue.y, ue.w, ue.h), ae.restore());
        return;
      }
      if (s.value === "difference") {
        $e && ae.drawImage($e, ue.x, ue.y, ue.w, ue.h), De && (ae.save(), ae.globalCompositeOperation = "difference", ae.drawImage(De, ue.x, ue.y, ue.w, ue.h), ae.restore());
        return;
      }
      if ($e && ae.drawImage($e, ue.x, ue.y, ue.w, ue.h), De) {
        const qe = ue.x + ue.w * o.value;
        ae.save(), ae.beginPath(), ae.rect(qe, ue.y, ue.x + ue.w - qe, ue.h), ae.clip(), ae.drawImage(De, ue.x, ue.y, ue.w, ue.h), ae.restore();
        const Re = getComputedStyle(j).getPropertyValue("--fil-accent").trim() || "#e8724c";
        ae.save(), ae.strokeStyle = Re, ae.lineWidth = 2, ae.shadowColor = Re, ae.shadowBlur = 6, ae.beginPath(), ae.moveTo(qe, ue.y), ae.lineTo(qe, ue.y + ue.h), ae.stroke(), ae.restore();
      }
    }
    function V(D) {
      const j = T.value;
      if (!j) return;
      const W = j.getBoundingClientRect();
      o.value = go((D.clientX - W.left) / W.width);
    }
    function N(D) {
      if (s.value !== "wipe") return;
      V(D);
      const j = (Z) => V(Z), W = () => {
        window.removeEventListener("pointermove", j), window.removeEventListener("pointerup", W);
      };
      window.addEventListener("pointermove", j), window.addEventListener("pointerup", W);
    }
    rn(() => {
      G = new ResizeObserver(() => F()), T.value && G.observe(T.value), F();
    }), xn(() => {
      G == null || G.disconnect(), I && cancelAnimationFrame(I);
    });
    async function H(D) {
      var W, Z;
      const j = D === "a" ? (W = v.value.a) == null ? void 0 : W[0] : (Z = v.value.b) == null ? void 0 : Z[0];
      if (!j) {
        st.warning(n("cmp_no_preview", "Run the node to see a preview"));
        return;
      }
      try {
        const ie = await Xt.saveCompareImage(j);
        st.success(`${n("cmp_saved", "Saved to output")}: ${ie.image.filename}`);
      } catch (ie) {
        st.warning(ie instanceof Error ? ie.message : "Save failed");
      }
    }
    return (D, j) => {
      var W, Z;
      return C(), E("div", Jm, [
        Y(h(No), {
          options: a.value,
          "model-value": s.value,
          label: h(n)("lbl_mode", "⚙️ Mode"),
          title: h(n)("cmp_view_mode", "How to compare the two images."),
          "onUpdate:modelValue": j[0] || (j[0] = (ie) => s.value = ie)
        }, null, 8, ["options", "model-value", "label", "title"]),
        z("div", {
          ref_key: "wrapRef",
          ref: T,
          class: "fil-cmp-canvas-wrap"
        }, [
          z("canvas", {
            ref_key: "canvasRef",
            ref: R,
            class: we(["fil-cmp-canvas", { "is-wipe": s.value === "wipe" }]),
            onPointerdown: N
          }, null, 34),
          w.value ? te("", !0) : (C(), E("div", Qm, ne(b.value ? h(n)("cmp_load_error", "Could not load preview images") : h(n)("cmp_no_preview", "Run the node to see a preview")), 1))
        ], 512),
        s.value === "wipe" ? (C(), Ie(h(nt), {
          key: 0,
          "model-value": o.value,
          min: 0,
          max: 1,
          step: 0.01,
          label: h(n)("cmp_position", "Position"),
          "onUpdate:modelValue": j[1] || (j[1] = (ie) => o.value = ie)
        }, null, 8, ["model-value", "label"])) : te("", !0),
        s.value === "overlay" ? (C(), Ie(h(nt), {
          key: 1,
          "model-value": i.value,
          min: 0,
          max: 1,
          step: 0.01,
          label: h(n)("cmp_opacity", "Opacity"),
          "onUpdate:modelValue": j[2] || (j[2] = (ie) => i.value = ie)
        }, null, 8, ["model-value", "label"])) : te("", !0),
        z("div", Zm, [
          Y(h(it), {
            variant: "sm",
            label: h(n)("cmp_save_before", "💾 Save before"),
            disabled: !((W = v.value.a) != null && W.length),
            onClick: j[3] || (j[3] = (ie) => H("a"))
          }, null, 8, ["label", "disabled"]),
          Y(h(it), {
            variant: "sm",
            label: h(n)("cmp_save_after", "💾 Save after"),
            disabled: !((Z = v.value.b) != null && Z.length),
            onClick: j[4] || (j[4] = (ie) => H("b"))
          }, null, 8, ["label", "disabled"])
        ]),
        Y(h(on), {
          title: h(n)("cmp_settings", "Settings"),
          modelValue: l.value,
          "onUpdate:modelValue": j[5] || (j[5] = (ie) => l.value = ie)
        }, null, 8, ["title", "modelValue"]),
        l.value ? te("", !0) : (C(), E("div", eh, [
          Y(h(gt), {
            options: ["ON", "OFF"],
            "option-labels": { ON: h(n)("cmp_swap_on_label", "🔄 Swapped"), OFF: h(n)("cmp_swap_off_label", "↔️ Normal") },
            "model-value": c.value,
            label: h(n)("lbl_swap", "🔁 Swap before/after"),
            title: h(n)("cmp_swap", "Swap which image is shown as before/after."),
            "onUpdate:modelValue": d
          }, null, 8, ["option-labels", "model-value", "label", "title"]),
          Y(h(gt), {
            options: [...r],
            "option-labels": u,
            "model-value": f.value,
            label: h(n)("lbl_resize_mode", "🖥️ Resize mode"),
            title: h(n)("cmp_resize_mode", "Off keeps images untouched. Preview modes downscale for a lighter preview and, optionally, output."),
            "onUpdate:modelValue": p
          }, null, 8, ["options", "model-value", "label", "title"]),
          M.value ? (C(), Ie(h(nt), {
            key: 0,
            "model-value": g.value,
            min: 256,
            max: 8192,
            step: 64,
            label: h(n)("lbl_max_resolution", "🖼️ Max resolution"),
            title: h(n)("cmp_max_resolution", "Maximum width or height used when resizing is enabled."),
            "onUpdate:modelValue": _
          }, null, 8, ["model-value", "label", "title"])) : te("", !0)
        ]))
      ]);
    };
  }
}), nh = /* @__PURE__ */ Me(th, [["__scopeId", "data-v-2abe5720"]]), sh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nh
}, Symbol.toStringTag, { value: "Module" })), oh = { class: "fil-up-root" }, ih = { class: "fil-up-row" }, lh = ["title"], ah = ["title"], rh = { class: "fil-up-row" }, ch = ["title"], uh = ["title"], dh = /* @__PURE__ */ Fe({
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
    function i(A, b) {
      return J({
        get: () => Number(t.state.nodeState[A] ?? t.state.initialValues[A] ?? b) || b,
        set: (w) => {
          t.state.nodeState[A] = w;
        }
      });
    }
    function l(A, b) {
      return J({
        get: () => t.state.nodeState[A] ?? t.state.initialValues[A] ?? b ? "ON" : "OFF",
        set: (w) => {
          t.state.nodeState[A] = w === "ON";
        }
      });
    }
    const a = i("upscale_factor", 2), r = i("tile_size", 512), u = i("tile_overlap", 64), c = i("manual_tile_cols", 0), d = i("manual_tile_rows", 0), f = i("max_megapixels", 0), p = l("auto_mode", !1), g = l("non_square_tiles", !1), _ = l("show_grid_preview", !0), M = J({
      get: () => String(t.state.nodeState.auto_profile ?? t.state.initialValues.auto_profile ?? "Balanced"),
      set: (A) => {
        t.state.nodeState.auto_profile = A;
      }
    });
    function v(A) {
      return !!t.state.ui[`collapsed_${A}`];
    }
    function S(A, b) {
      t.state.ui[`collapsed_${A}`] = b;
    }
    return He(() => t.state.nodeState, () => {
    }, { deep: !0 }), (A, b) => (C(), E("div", oh, [
      Y(h(nt), {
        "model-value": h(a),
        min: 0.1,
        max: 8,
        step: 0.25,
        label: h(n)("lbl_upscale_factor", "🔍 Upscale factor"),
        title: h(n)("utc_factor", "Upscale multiplier."),
        "onUpdate:modelValue": b[0] || (b[0] = (w) => a.value = w)
      }, null, 8, ["model-value", "label", "title"]),
      Y(h(on), {
        title: h(n)("utc_section_auto", "⚙️ Auto / advanced"),
        "model-value": v("auto"),
        "onUpdate:modelValue": b[1] || (b[1] = (w) => S("auto", w))
      }, null, 8, ["title", "model-value"]),
      v("auto") ? te("", !0) : (C(), E(de, { key: 0 }, [
        Y(h(gt), {
          options: ["ON", "OFF"],
          "option-labels": { ON: "⚙️ ON", OFF: "OFF" },
          "model-value": h(p),
          label: h(n)("lbl_full_auto", "🤖 Full auto"),
          title: h(n)("utc_auto_mode", "Pick tile size/overlap automatically from the selected VRAM profile."),
          "onUpdate:modelValue": b[2] || (b[2] = (w) => p.value = w)
        }, null, 8, ["model-value", "label", "title"]),
        h(p) === "ON" ? (C(), Ie(h(gt), {
          key: 0,
          options: [...s],
          "option-labels": o,
          "model-value": M.value,
          label: h(n)("lbl_auto_profile", "🎚️ Auto profile"),
          title: h(n)("utc_auto_profile", "VRAM/quality profile used when Full Auto is on."),
          "onUpdate:modelValue": b[3] || (b[3] = (w) => M.value = w)
        }, null, 8, ["options", "model-value", "label", "title"])) : te("", !0),
        h(p) === "OFF" ? (C(), E(de, { key: 1 }, [
          z("div", ih, [
            z("label", {
              class: "fil-w-label",
              title: h(n)("utc_tile_size", "Base tile size.")
            }, ne(h(n)("lbl_tile_size", "🔲 Tile size")), 9, lh),
            Y(h($t), {
              modelValue: h(r),
              "onUpdate:modelValue": b[4] || (b[4] = (w) => /* @__PURE__ */ he(r) ? r.value = w : null),
              min: 64,
              max: 2048,
              step: 64
            }, null, 8, ["modelValue"]),
            z("label", {
              class: "fil-w-label",
              title: h(n)("utc_overlap", "Tile overlap.")
            }, ne(h(n)("lbl_overlap", "🧵 Overlap")), 9, ah),
            Y(h($t), {
              modelValue: h(u),
              "onUpdate:modelValue": b[5] || (b[5] = (w) => /* @__PURE__ */ he(u) ? u.value = w : null),
              min: 0,
              max: 512,
              step: 8
            }, null, 8, ["modelValue"])
          ]),
          z("div", rh, [
            z("label", {
              class: "fil-w-label",
              title: h(n)("utc_manual_cols", "Force this many tile columns. 0 = compute from tile size.")
            }, ne(h(n)("lbl_manual_cols", "↔️ Manual cols")), 9, ch),
            Y(h($t), {
              modelValue: h(c),
              "onUpdate:modelValue": b[6] || (b[6] = (w) => /* @__PURE__ */ he(c) ? c.value = w : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"]),
            z("label", {
              class: "fil-w-label",
              title: h(n)("utc_manual_rows", "Force this many tile rows. 0 = compute from tile size.")
            }, ne(h(n)("lbl_manual_rows", "↕️ Manual rows")), 9, uh),
            Y(h($t), {
              modelValue: h(d),
              "onUpdate:modelValue": b[7] || (b[7] = (w) => /* @__PURE__ */ he(d) ? d.value = w : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"])
          ])
        ], 64)) : te("", !0)
      ], 64)),
      Y(h(nt), {
        "model-value": h(f),
        min: 0,
        max: 64,
        step: 0.5,
        label: h(n)("lbl_max_megapixels", "🖼️ Max megapixels"),
        title: h(n)("utc_max_mp", "Cap the upscaled output at this many megapixels. 0 = no cap."),
        "onUpdate:modelValue": b[8] || (b[8] = (w) => f.value = w)
      }, null, 8, ["model-value", "label", "title"]),
      Y(h(gt), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "🧩 ON", OFF: "OFF" },
        "model-value": h(g),
        label: h(n)("lbl_non_square", "📐 Non-square tiles"),
        title: h(n)("utc_non_square", "Allow rectangular tiles instead of forcing square ones."),
        "onUpdate:modelValue": b[9] || (b[9] = (w) => g.value = w)
      }, null, 8, ["model-value", "label", "title"]),
      Y(h(gt), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "🔲 ON", OFF: "OFF" },
        "model-value": h(_),
        label: h(n)("lbl_show_grid", "🔳 Show grid preview"),
        title: h(n)("utc_show_grid", "Render a tile-grid overlay on the preview output."),
        "onUpdate:modelValue": b[10] || (b[10] = (w) => _.value = w)
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), fh = /* @__PURE__ */ Me(dh, [["__scopeId", "data-v-4e44dd46"]]), ph = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fh
}, Symbol.toStringTag, { value: "Module" })), mh = { class: "fil-hrf-root" }, hh = { class: "fil-hrf-row" }, gh = ["title"], _h = ["title"], bh = ["title"], vh = /* @__PURE__ */ Fe({
  __name: "HiResFix",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = kt();
    function s(F, x) {
      return J({
        get: () => Number(t.state.nodeState[F] ?? t.state.initialValues[F] ?? x) || x,
        set: (V) => {
          t.state.nodeState[F] = V;
        }
      });
    }
    function o(F, x) {
      return J({
        get: () => String(t.state.nodeState[F] ?? t.state.initialValues[F] ?? x),
        set: (V) => {
          t.state.nodeState[F] = V;
        }
      });
    }
    function i(F, x) {
      return J({
        get: () => t.state.nodeState[F] ?? t.state.initialValues[F] ?? x ? "ON" : "OFF",
        set: (V) => {
          t.state.nodeState[F] = V === "ON";
        }
      });
    }
    function l(F, x) {
      var D;
      const V = t.state.node, N = V ? fe(V, F) : null, H = (D = N == null ? void 0 : N.options) == null ? void 0 : D.values;
      return Array.isArray(H) && H.length ? H : x;
    }
    const a = o("upscale_type", "latent"), r = o("hires_ckpt_name", "(use same)"), u = o("latent_upscaler", "nearest-exact"), c = o("pixel_upscaler", ""), d = s("upscale_by", 1.25), f = i("use_same_seed", !0), p = s("seed", 0), g = s("hires_steps", 12), _ = s("denoise", 0.56), M = s("iterations", 1), v = i("use_controlnet", !1), S = o("control_net_name", ""), A = s("strength", 1), b = J(() => l("hires_ckpt_name", ["(use same)"])), w = ["nearest-exact", "bilinear", "area", "bicubic", "bislerp"], k = J(() => l("pixel_upscaler", ["(none)"])), T = J(() => l("control_net_name", ["(none)"])), R = J(() => a.value === "latent"), I = J(() => a.value === "pixel" || a.value === "both");
    function G(F) {
      return !!t.state.ui[`collapsed_${F}`];
    }
    function O(F, x) {
      t.state.ui[`collapsed_${F}`] = x;
    }
    return (F, x) => (C(), E("div", mh, [
      Y(h(gt), {
        options: ["latent", "pixel", "both"],
        "option-labels": { latent: "🌀 latent", pixel: "🖼️ pixel", both: "🔀 both" },
        "model-value": h(a),
        label: h(n)("lbl_upscale_type", "⬆️ Upscale type"),
        title: h(n)("hrf_upscale_type", "Upscale in latent space, pixel space, or both."),
        "onUpdate:modelValue": x[0] || (x[0] = (V) => a.value = V)
      }, null, 8, ["model-value", "label", "title"]),
      R.value ? (C(), Ie(h(fs), {
        key: 0,
        options: w,
        "model-value": h(u),
        label: h(n)("lbl_latent_up", "🌀 Latent upscaler"),
        title: h(n)("hrf_latent_up", "Latent upscale method."),
        "onUpdate:modelValue": x[1] || (x[1] = (V) => u.value = V)
      }, null, 8, ["model-value", "label", "title"])) : te("", !0),
      I.value ? (C(), Ie(h(fs), {
        key: 1,
        options: k.value,
        "model-value": h(c),
        label: h(n)("lbl_pixel_up", "🖼️ Pixel upscaler"),
        title: h(n)("hrf_pixel_up", "Pixel upscale model (from upscale_models)."),
        "onUpdate:modelValue": x[2] || (x[2] = (V) => c.value = V)
      }, null, 8, ["options", "model-value", "label", "title"])) : te("", !0),
      Y(h(fs), {
        options: b.value,
        "model-value": h(r),
        label: h(n)("lbl_hires_ckpt", "📦 Hires checkpoint"),
        title: h(n)("hrf_ckpt", "Checkpoint for the hires pass. (use same) reuses the base model."),
        "onUpdate:modelValue": x[3] || (x[3] = (V) => r.value = V)
      }, null, 8, ["options", "model-value", "label", "title"]),
      Y(h(nt), {
        "model-value": h(d),
        min: 0.01,
        max: 8,
        step: 0.05,
        label: h(n)("lbl_upscale_by", "🔍 Upscale by"),
        title: h(n)("hrf_upscale_by", "Upscale multiplier."),
        "onUpdate:modelValue": x[4] || (x[4] = (V) => d.value = V)
      }, null, 8, ["model-value", "label", "title"]),
      Y(h(nt), {
        "model-value": h(_),
        min: 0,
        max: 1,
        step: 0.01,
        label: h(n)("lbl_hrf_denoise", "💧 Denoise"),
        title: h(n)("hrf_denoise", "Denoise strength for the hires re-sample."),
        "onUpdate:modelValue": x[5] || (x[5] = (V) => _.value = V)
      }, null, 8, ["model-value", "label", "title"]),
      z("div", hh, [
        z("label", {
          class: "fil-w-label",
          title: h(n)("hrf_steps", "Steps for the hires re-sample.")
        }, ne(h(n)("lbl_hires_steps", "🪜 Hires steps")), 9, gh),
        Y(h($t), {
          modelValue: h(g),
          "onUpdate:modelValue": x[6] || (x[6] = (V) => /* @__PURE__ */ he(g) ? g.value = V : null),
          min: 1,
          max: 1e4,
          step: 1
        }, null, 8, ["modelValue"]),
        z("label", {
          class: "fil-w-label",
          title: h(n)("hrf_iterations", "How many upscale+resample passes to run.")
        }, ne(h(n)("lbl_iterations", "🔁 Iterations")), 9, _h),
        Y(h($t), {
          modelValue: h(M),
          "onUpdate:modelValue": x[7] || (x[7] = (V) => /* @__PURE__ */ he(M) ? M.value = V : null),
          min: 0,
          max: 5,
          step: 1
        }, null, 8, ["modelValue"])
      ]),
      Y(h(gt), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "♻️ same seed", OFF: "🎲 own" },
        "model-value": h(f),
        label: h(n)("lbl_use_same_seed", "🌱 Seed source"),
        title: h(n)("hrf_same_seed", "Reuse the samplers seed for the hires pass."),
        "onUpdate:modelValue": x[8] || (x[8] = (V) => f.value = V)
      }, null, 8, ["model-value", "label", "title"]),
      h(f) === "OFF" ? (C(), E(de, { key: 2 }, [
        z("label", {
          class: "fil-w-label",
          title: h(n)("hrf_seed", "Hires-pass seed (used when own seed).")
        }, ne(h(n)("lbl_hrf_seed", "🎲 Seed")), 9, bh),
        Y(h($t), {
          modelValue: h(p),
          "onUpdate:modelValue": x[9] || (x[9] = (V) => /* @__PURE__ */ he(p) ? p.value = V : null),
          min: 0,
          step: 1
        }, null, 8, ["modelValue"])
      ], 64)) : te("", !0),
      Y(h(on), {
        title: h(n)("hrf_section_cn", "🕹️ ControlNet"),
        "model-value": G("cn"),
        "onUpdate:modelValue": x[10] || (x[10] = (V) => O("cn", V))
      }, null, 8, ["title", "model-value"]),
      G("cn") ? te("", !0) : (C(), E(de, { key: 3 }, [
        Y(h(gt), {
          options: ["ON", "OFF"],
          "option-labels": { ON: "🕹️ ON", OFF: "OFF" },
          "model-value": h(v),
          label: h(n)("lbl_use_cn", "🕹️ Use ControlNet"),
          title: h(n)("hrf_use_cn", "Guide the hires pass with a ControlNet."),
          "onUpdate:modelValue": x[11] || (x[11] = (V) => v.value = V)
        }, null, 8, ["model-value", "label", "title"]),
        h(v) === "ON" ? (C(), E(de, { key: 0 }, [
          Y(h(fs), {
            options: T.value,
            "model-value": h(S),
            label: h(n)("lbl_cn_name", "🧩 ControlNet model"),
            title: h(n)("hrf_cn_name", "ControlNet model to apply."),
            "onUpdate:modelValue": x[12] || (x[12] = (V) => S.value = V)
          }, null, 8, ["options", "model-value", "label", "title"]),
          Y(h(nt), {
            "model-value": h(A),
            min: 0,
            max: 10,
            step: 0.01,
            label: h(n)("lbl_cn_strength", "💪 Strength"),
            title: h(n)("hrf_cn_strength", "ControlNet strength."),
            "onUpdate:modelValue": x[13] || (x[13] = (V) => A.value = V)
          }, null, 8, ["model-value", "label", "title"])
        ], 64)) : te("", !0)
      ], 64))
    ]));
  }
}), yh = /* @__PURE__ */ Me(vh, [["__scopeId", "data-v-f1a24b42"]]), wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yh
}, Symbol.toStringTag, { value: "Module" }));
//# sourceMappingURL=fil_design_imagemind.js.map
