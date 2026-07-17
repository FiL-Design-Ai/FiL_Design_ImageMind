(function(){try{var s=document.createElement("style");s.textContent=".fil-color-picker[data-v-c4d5f476]{display:flex;flex-direction:column;gap:8px;padding:8px;width:176px;box-sizing:border-box}.fil-cp-sv[data-v-c4d5f476]{position:relative;width:100%;height:100px;border-radius:4px;cursor:crosshair;touch-action:none}.fil-cp-sv-white[data-v-c4d5f476]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to right,#fff,#fff0);border-radius:4px}.fil-cp-sv-black[data-v-c4d5f476]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to top,#000,#0000);border-radius:4px}.fil-cp-sv-thumb[data-v-c4d5f476]{position:absolute;width:10px;height:10px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hue[data-v-c4d5f476]{position:relative;width:100%;height:12px;border-radius:6px;background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red);cursor:pointer;touch-action:none}.fil-cp-hue-thumb[data-v-c4d5f476]{position:absolute;top:50%;width:12px;height:12px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hex-row[data-v-c4d5f476]{display:flex;align-items:center;gap:6px}.fil-cp-swatch[data-v-c4d5f476]{width:22px;height:22px;border-radius:4px;border:1px solid rgba(255,255,255,.25);flex-shrink:0}.fil-cp-hex-input[data-v-c4d5f476]{flex:1;min-width:0;height:22px;box-sizing:border-box;border-radius:4px;border:1px solid rgba(255,255,255,.2);background:#00000040;color:#f2f2f2;font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:12px;padding:0 6px;outline:none}.fil-cp-hex-input[data-v-c4d5f476]:focus{border-color:#ffffff80}.fil-cp-presets[data-v-c4d5f476]{display:grid;grid-template-columns:repeat(5,1fr);gap:4px}.fil-color-swatch[data-v-c4d5f476]{width:24px;height:24px;border-radius:4px;border:2px solid transparent;background:var(--swatch);cursor:pointer;transition:border-color .08s,transform .08s;outline:none;box-sizing:border-box}.fil-color-swatch[data-v-c4d5f476]:hover{border-color:#ffffff80;transform:scale(1.15)}.fil-color-swatch.is-active[data-v-c4d5f476]{border-color:#fff;box-shadow:0 0 0 1px var(--swatch)}.fil-node-shell[data-v-15f48dad]{position:relative}.fil-icon[data-v-dfb78d9f]{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;line-height:0}.fil-icon[data-v-dfb78d9f] svg{width:100%;height:100%}.fil-modal-backdrop[data-v-00452928]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000;display:flex;align-items:center;justify-content:center;background:#0000008c;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.fil-modal-panel[data-v-00452928]{width:90%;max-height:80vh;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:10px;box-shadow:0 20px 60px #00000080;display:flex;flex-direction:column;overflow:hidden}.fil-modal-header[data-v-00452928]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08)}.fil-modal-title[data-v-00452928]{font-size:14px;font-weight:600;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-close[data-v-00452928]{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;border:none;background:transparent;color:var(--fil-muted, rgba(255, 255, 255, .5));cursor:pointer;transition:background .08s,color .08s}.fil-modal-close[data-v-00452928]:hover{background:#ffffff14;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-body[data-v-00452928]{flex:1;overflow-y:auto;padding:16px}.fil-modal-enter-active[data-v-00452928],.fil-modal-leave-active[data-v-00452928]{transition:opacity .15s ease}.fil-modal-enter-from[data-v-00452928],.fil-modal-leave-to[data-v-00452928]{opacity:0}.fil-modal-enter-active .fil-modal-panel[data-v-00452928],.fil-modal-leave-active .fil-modal-panel[data-v-00452928]{transition:transform .15s ease}.fil-modal-enter-from .fil-modal-panel[data-v-00452928],.fil-modal-leave-to .fil-modal-panel[data-v-00452928]{transform:scale(.95) translateY(8px)}.fil-help-title[data-v-536c1547]{margin:0 0 12px;font-size:16px;font-weight:700;color:var(--fil-text, rgba(255,255,255,.9))}.fil-help-body[data-v-536c1547]{margin:0 0 12px;font-size:13px;line-height:1.6;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet[data-v-536c1547]{display:flex;gap:6px;align-items:flex-start;margin-bottom:6px;font-size:13px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet>span[data-v-536c1547]{flex:1}.fil-help-table[data-v-536c1547]{width:100%;border-collapse:collapse;margin-top:8px;font-size:12px}.fil-help-table th[data-v-536c1547],.fil-help-table td[data-v-536c1547]{text-align:left;padding:6px 10px;border-bottom:1px solid rgba(255,255,255,.06)}.fil-help-table th[data-v-536c1547]{font-weight:600;color:var(--fil-text, rgba(255,255,255,.85))}.fil-help-table td[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.6))}.fil-help-code[data-v-536c1547]{background:#0000004d;border-radius:6px;padding:12px;margin-top:10px;overflow-x:auto;font-size:12px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-empty[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.4));font-size:13px}.fil-toast-stack[data-v-08cc58fa]{position:fixed;right:20px;bottom:20px;z-index:100001;display:flex;flex-direction:column;gap:8px;pointer-events:none;max-width:min(360px,90vw)}.fil-toast[data-v-08cc58fa]{pointer-events:auto;display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:8px;background:var(--fil-panel, #171b22);color:var(--fil-text, #e8edf3);border:1px solid var(--fil-panel-alt, #2a3041);border-left:3px solid var(--toast-color, var(--fil-muted));box-shadow:0 6px 22px #0000006b;font:12.5px/1.45 system-ui,sans-serif;animation:fil-toast-in-08cc58fa .18s cubic-bezier(.2,.7,.3,1)}@keyframes fil-toast-in-08cc58fa{0%{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}.fil-toast-dot[data-v-08cc58fa]{flex:none;width:8px;height:8px;margin-top:4px;border-radius:50%;background:var(--toast-color, var(--fil-muted))}.fil-toast-text[data-v-08cc58fa]{flex:1;min-width:0;align-self:center}.fil-toast-action[data-v-08cc58fa]{flex:none;cursor:pointer;padding:4px 8px;border-radius:4px;background:#ffffff0f;color:inherit;border:none;font:inherit;transition:background .12s}.fil-toast-action[data-v-08cc58fa]:hover{background:#ffffff24}.fil-toast-close[data-v-08cc58fa]{flex:none;align-self:flex-start;cursor:pointer;width:18px;height:18px;padding:0;border:none;background:none;color:var(--fil-muted);opacity:.6;transition:opacity .12s;font-size:16px;line-height:18px}.fil-toast-close[data-v-08cc58fa]:hover{opacity:1}.fil-w-btn[data-v-fff84608]{box-sizing:border-box;padding:var(--fil-row-pad);border-radius:6px;background:#ffffff0d;border:1px solid rgba(255,255,255,.14);color:var(--fil-text, rgba(255, 255, 255, .85));font-family:ui-sans-serif,system-ui,sans-serif;font-size:12px;cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;display:inline-flex;align-items:center;justify-content:center;gap:6px}.fil-w-btn[data-v-fff84608]:hover:not(:disabled){background:var(--fil-accent);border-color:var(--fil-accent);color:#fff}.fil-w-btn[data-v-fff84608]:active{transform:translateY(1px)}.fil-w-btn[data-v-fff84608]:disabled{opacity:.4;cursor:default}.fil-w-btn-accent[data-v-fff84608]{background:var(--fil-accent);border-color:var(--fil-accent);color:#fff}.fil-w-btn-danger[data-v-fff84608]{color:var(--fil-danger, #ef6666)}.fil-w-btn-danger[data-v-fff84608]:hover:not(:disabled){background:var(--fil-danger, #ef6666);border-color:var(--fil-danger, #ef6666);color:#fff}.fil-w-btn-sm[data-v-fff84608]{padding:4px 8px;font-size:11px}.fil-w-btn-full[data-v-fff84608]{width:100%;display:block}.fil-w-btn-icon[data-v-fff84608]{display:inline-flex;align-items:center;justify-content:center;gap:5px}.fil-w-btn-glyph[data-v-fff84608] svg{width:14px;height:14px}.fil-w-btn.is-flashing[data-v-fff84608],.fil-w-btn.is-flashing[data-v-fff84608]:hover{background:var(--fil-ok, #62c987);border-color:var(--fil-ok, #62c987);color:#fff}.fil-w-btn.is-loading[data-v-fff84608]{cursor:wait}.fil-w-btn[data-v-fff84608]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-btn-spinner[data-v-fff84608]{display:inline-block;width:12px;height:12px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:fil-w-spin-fff84608 .6s linear infinite}@keyframes fil-w-spin-fff84608{to{transform:rotate(360deg)}}.fil-pm-root[data-v-ae1b468d]{display:flex;flex-direction:column;gap:12px;padding:4px 0}.fil-pm-card[data-v-ae1b468d]{background:#ffffff08;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:12px}.fil-pm-header[data-v-ae1b468d]{display:flex;align-items:center;gap:8px;margin-bottom:10px}.fil-pm-card--collapsed[data-v-ae1b468d]{padding:8px 12px}.fil-pm-card--collapsed .fil-pm-header[data-v-ae1b468d]{margin-bottom:0}.fil-pm-header--clickable[data-v-ae1b468d]{cursor:pointer}.fil-pm-header--clickable:hover .fil-pm-name[data-v-ae1b468d]{color:var(--fil-accent, #7c5cfc)}.fil-pm-chevron[data-v-ae1b468d]{display:inline-flex;align-items:center;color:#fff6;transition:transform .12s ease}.fil-pm-chevron--open[data-v-ae1b468d]{transform:rotate(90deg)}.fil-pm-icon[data-v-ae1b468d]{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px}.fil-pm-name[data-v-ae1b468d]{font-weight:600;font-size:14px;color:var(--fil-text, #f2f2f2)}.fil-pm-disp[data-v-ae1b468d]{font-size:11px;color:#ffffff80}.fil-pm-status[data-v-ae1b468d]{margin-left:auto;display:inline-flex;align-items:center;gap:5px;font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#fff6;white-space:nowrap}.fil-pm-dot[data-v-ae1b468d]{width:8px;height:8px;border-radius:50%;background:currentColor;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 22%,transparent)}.fil-pm-status--connected[data-v-ae1b468d]{color:var(--fil-success, #4ade80)}.fil-pm-status--configured[data-v-ae1b468d]{color:var(--fil-warning, #fbbf24)}.fil-pm-status--off[data-v-ae1b468d]{color:#ffffff4d}.fil-pm-fields[data-v-ae1b468d]{display:flex;flex-direction:column;gap:8px;margin-bottom:10px}.fil-pm-field[data-v-ae1b468d]{display:flex;flex-direction:column;gap:3px}.fil-pm-field-label[data-v-ae1b468d]{font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#ffffff80}.fil-pm-input[data-v-ae1b468d]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,monospace;font-size:13px;outline:none;transition:border-color .08s}.fil-pm-input[data-v-ae1b468d]:focus{border-color:var(--fil-accent)}.fil-pm-input.fil-pm-has-val[data-v-ae1b468d]{border-color:var(--fil-muted, #555)}.fil-pm-actions[data-v-ae1b468d]{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}.fil-pm-models[data-v-ae1b468d]{display:flex;flex-wrap:wrap;gap:4px}.fil-pm-model-tag[data-v-ae1b468d]{display:inline-flex;align-items:center;gap:3px;background:#ffffff12;border-radius:4px;padding:2px 6px;font-size:11px;color:#ffffffbf;white-space:nowrap}.fil-pm-vision-badge[data-v-ae1b468d]{font-size:10px;line-height:1}.fil-pm-err[data-v-ae1b468d]{font-size:11px;color:var(--fil-danger, #ef6666);margin-top:4px}.fil-pm-age[data-v-ae1b468d]{font-size:10px;color:#fff6;align-self:center}.fil-w-chips[data-v-3c07d909]{display:grid;gap:5px;width:100%}.fil-w-chip[data-v-3c07d909]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-3c07d909]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-3c07d909]{background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-accent);border-color:var(--fil-accent);font-weight:500;box-shadow:0 0 8px color-mix(in srgb,var(--fil-accent) 55%,transparent)}.fil-w-chip.disabled[data-v-3c07d909]{opacity:.5;cursor:default}.fil-w-chip[data-v-3c07d909]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chiplist[data-v-8b6ca087]{display:flex;flex-direction:column;gap:5px;width:100%}.fil-w-search[data-v-8b6ca087]{box-sizing:border-box;width:100%;padding:5px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:11px;outline:none}.fil-w-search[data-v-8b6ca087]:focus{border-color:var(--fil-accent)}.fil-w-search[data-v-8b6ca087]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-chip-scroll[data-v-8b6ca087]{display:grid;gap:3px;max-height:200px;overflow-y:auto;overflow-x:hidden;padding-right:2px}.fil-w-chip-scroll[data-v-8b6ca087]::-webkit-scrollbar{width:5px}.fil-w-chip-scroll[data-v-8b6ca087]::-webkit-scrollbar-thumb{background:var(--fil-muted, #555);border-radius:3px}.fil-w-chip-scroll[data-v-8b6ca087]::-webkit-scrollbar-track{background:transparent}.fil-w-chip[data-v-8b6ca087]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-8b6ca087]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-8b6ca087]{background:var(--fil-accent);color:#fff;border-color:var(--fil-accent);font-weight:500}.fil-w-chip.disabled[data-v-8b6ca087]{opacity:.5;cursor:default}.fil-w-chip[data-v-8b6ca087]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chip-empty[data-v-8b6ca087]{padding:8px;text-align:center;color:var(--fil-muted, #666);font-size:11px}.fil-combo[data-v-10bd69b4]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-combo-label[data-v-10bd69b4]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-combo-trigger[data-v-10bd69b4]{grid-column:2;width:100%;box-sizing:border-box;height:30px;display:flex;align-items:center;gap:6px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer;text-align:left;-moz-appearance:none;appearance:none;-webkit-appearance:none}.fil-combo-trigger.open[data-v-10bd69b4],.fil-combo-trigger[data-v-10bd69b4]:focus-visible{border-color:var(--fil-accent);outline:2px solid var(--fil-accent);outline-offset:1px}.fil-combo-trigger.disabled[data-v-10bd69b4]{opacity:.5;cursor:default}.fil-combo-trigger-label[data-v-10bd69b4]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-chevron[data-v-10bd69b4]{font-size:9px;color:var(--fil-muted, rgba(255, 255, 255, .5));flex-shrink:0}.fil-combo-badge[data-v-10bd69b4]{flex-shrink:0;font-size:9px;line-height:1;padding:2px 5px;border-radius:999px;background:var(--fil-accent);color:#fff;font-weight:600}.fil-combo-panel[data-v-10bd69b4]{position:fixed;z-index:10001;box-sizing:border-box;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:8px;box-shadow:0 12px 32px #0006;display:flex;flex-direction:column;overflow:hidden;padding:6px}.fil-combo-search[data-v-10bd69b4]{box-sizing:border-box;width:100%;margin-bottom:6px;padding:6px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-combo-search[data-v-10bd69b4]:focus{border-color:var(--fil-accent)}.fil-combo-list[data-v-10bd69b4]{display:flex;flex-direction:column;gap:2px;max-height:240px;overflow-y:auto}.fil-combo-option[data-v-10bd69b4]{display:flex;align-items:center;gap:6px;width:100%;box-sizing:border-box;padding:6px 8px;border-radius:5px;border:none;background:transparent;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;text-align:left;cursor:pointer;outline:none}.fil-combo-option.active[data-v-10bd69b4]{background:#ffffff14}.fil-combo-option.selected[data-v-10bd69b4]{color:var(--fil-accent);font-weight:600}.fil-combo-option-label[data-v-10bd69b4]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-empty[data-v-10bd69b4]{padding:10px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-w-info[data-v-851660c1]{font-size:11px;line-height:1.5;color:#ffffff73;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.fil-w-info[data-ok][data-v-851660c1]{color:var(--fil-ok, #62c987)}.fil-w-info[data-err][data-v-851660c1]{color:var(--fil-danger, #ef6666)}.fil-w-numfield[data-v-3c0bbbf0]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-numfield.no-label[data-v-3c0bbbf0]{display:contents}.fil-w-numfield-label[data-v-3c0bbbf0]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-num[data-v-3c0bbbf0]{grid-column:2;width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:14px;text-align:left;outline:none;transition:border-color .08s}.fil-w-num[data-v-3c0bbbf0]:focus{border-color:var(--fil-accent)}.fil-w-num[data-v-3c0bbbf0]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-num[data-v-3c0bbbf0]:disabled{opacity:.5}.fil-w-section[data-v-686d0388]{box-sizing:border-box;width:100%;padding:var(--fil-row-pad);border:none;border-radius:5px;background:#ffffff0a;color:var(--fil-muted, rgba(255, 255, 255, .7));font-family:inherit;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;cursor:pointer;text-align:left;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s;display:flex;align-items:center;gap:6px}.fil-w-section[data-v-686d0388]:hover:not(:disabled){background:#ffffff14;color:#fff}.fil-w-section[data-v-686d0388]:disabled{cursor:default}.fil-w-section[data-v-686d0388]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-section-arrow[data-v-686d0388]{display:inline-block;width:8px;font-size:9px;color:var(--fil-accent)}.fil-w-segmented[data-v-fa82f2ad]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-segmented-label[data-v-fa82f2ad]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-pill[data-v-fa82f2ad]{grid-column:2;display:flex;gap:0;min-width:0;background:#ffffff0f;border-radius:7px;padding:3px}.fil-w-pill.disabled[data-v-fa82f2ad]{opacity:.5}.fil-w-seg[data-v-fa82f2ad]{flex:1;text-align:center;padding:6px;border:none;border-radius:5px;background:transparent;font-family:inherit;font-size:12px;color:var(--fil-muted, rgba(255, 255, 255, .55));cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s}.fil-w-seg[data-v-fa82f2ad]:hover:not(.active){color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-w-seg.active[data-v-fa82f2ad]{background:var(--fil-accent);color:#fff;font-weight:500}.fil-w-seg[data-v-fa82f2ad]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-select[data-v-77c303be]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-select-label[data-v-77c303be]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-select-input[data-v-77c303be]{grid-column:2;width:100%;box-sizing:border-box;height:30px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer}.fil-w-select-input[data-v-77c303be]:focus{border-color:var(--fil-accent)}.fil-w-select-input[data-v-77c303be]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-select-input[data-v-77c303be]:disabled{opacity:.5;cursor:default}.fil-w-slider[data-v-5391c869]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-slider-label[data-v-5391c869]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-slider-row[data-v-5391c869]{grid-column:2;display:flex;align-items:center;gap:6px;min-width:0}.fil-w-slider-range[data-v-5391c869]{flex:1;min-width:0;accent-color:var(--fil-accent);cursor:pointer}.fil-w-slider-range[data-v-5391c869]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-slider-row[data-v-5391c869] .fil-w-num{width:70px;flex:none}.fil-style-picker[data-v-6e196d1e]{display:flex;flex-direction:column;gap:10px}.fil-style-cats[data-v-6e196d1e]{display:flex;flex-wrap:wrap;gap:6px}.fil-style-cat[data-v-6e196d1e]{box-sizing:border-box;padding:5px 10px;border-radius:999px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .2));background:#ffffff0a;color:var(--fil-text, rgba(255, 255, 255, .8));font-size:11px;cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-cat[data-v-6e196d1e]:hover{border-color:var(--fil-accent)}.fil-style-cat.active[data-v-6e196d1e]{background:var(--fil-accent);border-color:var(--fil-accent);color:#fff;font-weight:500}.fil-style-cat[data-v-6e196d1e]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-style-search[data-v-6e196d1e]{box-sizing:border-box;width:100%;padding:7px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-style-search[data-v-6e196d1e]:focus{border-color:var(--fil-accent)}.fil-style-grid[data-v-6e196d1e]{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:8px;max-height:50vh;overflow-y:auto;padding-right:2px}.fil-style-tile[data-v-6e196d1e]{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px 6px;border-radius:8px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .14));background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-tile[data-v-6e196d1e]:hover{border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-style-tile.active[data-v-6e196d1e]{border-color:var(--fil-accent);background:#f68a4524}.fil-style-tile[data-v-6e196d1e]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-style-tile-preview[data-v-6e196d1e]{width:100%;aspect-ratio:1;border-radius:6px;background:#ffffff0d;display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:22px}.fil-style-tile-img[data-v-6e196d1e]{width:100%;height:100%;object-fit:cover}.fil-style-tile-label[data-v-6e196d1e]{font-size:10px;text-align:center;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.fil-style-empty[data-v-6e196d1e]{grid-column:1 / -1;padding:20px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-seed-root[data-v-527ba047]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-seed-readout[data-v-527ba047]{display:flex;flex-direction:column;gap:4px}.fil-seed-display[data-v-527ba047]{width:100%;box-sizing:border-box;height:34px;background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);padding:6px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:19px;text-align:center;outline:none;transition:border-color .08s}.fil-seed-display[data-v-527ba047]:focus{border-color:var(--fil-accent)}.fil-seed-display[readonly][data-v-527ba047]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-seed-actions[data-v-527ba047]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px}.fil-provider-root[data-v-2aa7b099]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;min-width:0}.fil-provider-row[data-v-2aa7b099]{display:flex;gap:4px;align-items:stretch;min-width:0}.fil-provider-row[data-v-2aa7b099] .fil-combo{flex:1;min-width:0}.fil-model-filter-bar[data-v-2aa7b099]{display:flex;align-items:center;gap:4px;min-width:0}.fil-model-filter-wrap[data-v-2aa7b099]{flex:1;min-width:0}.fil-model-filter[data-v-2aa7b099]{width:100%;box-sizing:border-box;height:24px;background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);padding:2px 6px;color:var(--fil-text, #e8edf3);font-family:inherit;font-size:11px;outline:none}.fil-model-filter[data-v-2aa7b099]:focus{border-color:var(--fil-accent)}.fil-model-count[data-v-2aa7b099]{font-size:9px;color:var(--fil-muted, rgba(255,255,255,.45));white-space:nowrap;flex-shrink:0}.fil-scanner-root[data-v-875167a9]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;width:100%;box-sizing:border-box;min-width:0}.fil-section-block[data-v-875167a9]{display:flex;flex-direction:column;gap:5px;min-width:0}.fil-w-row[data-v-875167a9]{display:flex;flex-direction:column;gap:3px;min-width:0}.fil-w-textarea[data-v-875167a9],.fil-w-input[data-v-875167a9]{width:100%;box-sizing:border-box;background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);color:var(--fil-text, #a0c4ff);padding:var(--fil-row-pad);font-size:12px;font-family:inherit;outline:none;transition:border-color .08s}.fil-w-textarea[data-v-875167a9]{min-height:56px;resize:vertical}.fil-w-textarea[data-v-875167a9]:focus,.fil-w-input[data-v-875167a9]:focus{border-color:var(--fil-accent)}.fil-style-pair-row[data-v-875167a9]{display:flex;gap:4px;min-width:0}.fil-style-pair-item[data-v-875167a9]{flex:1;min-width:0}.fil-scanner-seed[data-v-875167a9]{display:flex;flex-direction:column;gap:4px;padding-top:3px;border-top:1px solid rgba(255,255,255,.08);min-width:0}.fil-scanner-seed-row[data-v-875167a9]{display:flex;gap:6px;min-width:0}.fil-scanner-seed-field[data-v-875167a9]{flex:1.3;min-width:0;box-sizing:border-box;height:34px;background:#00000059;border:1px solid rgba(255,255,255,.08);border-radius:var(--fil-pill-radius);padding:0 12px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:13px;text-align:center;outline:none;transition:border-color .08s}.fil-scanner-seed-field[data-v-875167a9]:focus{border-color:var(--fil-accent)}.fil-scanner-seed-field.is-random[data-v-875167a9]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-scanner-seed-pill[data-v-875167a9]{flex:1;min-width:0;box-sizing:border-box;height:34px;padding:0 8px;border-radius:var(--fil-pill-radius);border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-text, #e8edf3);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-scanner-seed-pill[data-v-875167a9]:hover{background:#ffffff1f}.fil-scanner-seed-pill.active[data-v-875167a9]{background:#ffffff29;border-color:#fff3}.fil-scanner-seed-pill[data-v-875167a9]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-scanner-seed-pill-accent[data-v-875167a9]{background:var(--fil-accent);border-color:var(--fil-accent);color:#241206;font-weight:700}.fil-scanner-seed-pill-accent[data-v-875167a9]:hover{filter:brightness(1.08);background:var(--fil-accent)}.fil-cleaner-root[data-v-71474bb1]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cleaner-row[data-v-71474bb1]{all:unset;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:var(--fil-row-pad);border-radius:var(--fil-field-radius);border:1px solid var(--fil-glass-border);background:var(--fil-glass-bg);cursor:pointer;-webkit-user-select:none;user-select:none;transition:background .08s,border-color .08s}.fil-cleaner-row[data-v-71474bb1]:hover{background:#ffffff14}.fil-cleaner-row.active[data-v-71474bb1]{border-color:var(--fil-accent);background:#f68a451f}.fil-cleaner-dot[data-v-71474bb1]{width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,.3);flex:none;transition:border-color .08s,background .08s;display:flex;align-items:center;justify-content:center}.fil-cleaner-dot[data-v-71474bb1]:after{content:\"✓\";font-size:10px;line-height:1;color:#fff;opacity:0;transition:opacity .08s}.fil-cleaner-row.active .fil-cleaner-dot[data-v-71474bb1]{background:var(--fil-accent);border-color:var(--fil-accent)}.fil-cleaner-row.active .fil-cleaner-dot[data-v-71474bb1]:after{opacity:1}.fil-cleaner-label[data-v-71474bb1]{flex:1;font-size:12px}.fil-cmp-root[data-v-2abe5720]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cmp-canvas-wrap[data-v-2abe5720]{position:relative;width:100%;height:220px;border-radius:var(--fil-field-radius);border:1px solid var(--fil-glass-border);overflow:hidden;background:linear-gradient(45deg,rgba(255,255,255,.04) 25%,transparent 25%,transparent 75%,rgba(255,255,255,.04) 75%) 0 0/16px 16px,linear-gradient(45deg,rgba(255,255,255,.04) 25%,transparent 25%,transparent 75%,rgba(255,255,255,.04) 75%) 8px 8px/16px 16px,#0d0f13}.fil-cmp-canvas[data-v-2abe5720]{display:block;width:100%;height:100%;touch-action:none}.fil-cmp-canvas.is-wipe[data-v-2abe5720]{cursor:ew-resize}.fil-cmp-placeholder[data-v-2abe5720]{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;text-align:center;padding:12px;color:var(--fil-muted, rgba(255, 255, 255, .5));font-size:12px;pointer-events:none}.fil-cmp-save-row[data-v-2abe5720]{display:grid;grid-template-columns:1fr 1fr;gap:5px}.fil-cmp-settings[data-v-2abe5720]{display:flex;flex-direction:column;gap:5px}.fil-up-root[data-v-4e44dd46]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-up-row[data-v-4e44dd46]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(48px,1fr) minmax(auto,max-content) minmax(48px,1fr);align-items:center;gap:var(--fil-node-gap)}.fil-w-label[data-v-4e44dd46]{font-size:11px;color:var(--fil-muted, rgba(255,255,255,.55))}.fil-hrf-root[data-v-e45e6326]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}\n";document.head.appendChild(s);}catch(e){}})();
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
const Se = {}, fn = [], _t = () => {
}, ol = () => !1, Es = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ts = (e) => e.startsWith("onUpdate:"), Te = Object.assign, Vo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ba = Object.prototype.hasOwnProperty, ge = (e, t) => Ba.call(e, t), te = Array.isArray, pn = (e) => Qn(e) === "[object Map]", Rs = (e) => Qn(e) === "[object Set]", si = (e) => Qn(e) === "[object Date]", ce = (e) => typeof e == "function", Me = (e) => typeof e == "string", Qe = (e) => typeof e == "symbol", he = (e) => e !== null && typeof e == "object", il = (e) => (he(e) || ce(e)) && ce(e.then) && ce(e.catch), ll = Object.prototype.toString, Qn = (e) => ll.call(e), Ha = (e) => Qn(e).slice(8, -1), al = (e) => Qn(e) === "[object Object]", Ps = (e) => Me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Tn = /* @__PURE__ */ $o(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Os = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ua = /-\w/g, Ke = Os(
  (e) => e.replace(Ua, (t) => t.slice(1).toUpperCase())
), ja = /\B([A-Z])/g, $t = Os(
  (e) => e.replace(ja, "-$1").toLowerCase()
), Ns = Os((e) => e.charAt(0).toUpperCase() + e.slice(1)), Qs = Os(
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
}, Wa = (e) => {
  const t = Me(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let oi;
const Vs = () => oi || (oi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ze(e) {
  if (te(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = Me(s) ? qa(s) : ze(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (Me(e) || he(e))
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
function be(e) {
  let t = "";
  if (Me(e))
    t = e;
  else if (te(e))
    for (let n = 0; n < e.length; n++) {
      const s = be(e[n]);
      s && (t += s + " ");
    }
  else if (he(e))
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
    n = Zn(e[s], t[s]);
  return n;
}
function Zn(e, t) {
  if (e === t) return !0;
  let n = si(e), s = si(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Qe(e), s = Qe(t), n || s)
    return e === t;
  if (n = te(e), s = te(t), n || s)
    return n && s ? Ja(e, t) : !1;
  if (n = he(e), s = he(t), n || s) {
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
function Qa(e, t) {
  return e.findIndex((n) => Zn(n, t));
}
const ul = (e) => !!(e && e.__v_isRef === !0), oe = (e) => Me(e) ? e : e == null ? "" : te(e) || he(e) && (e.toString === ll || !ce(e.toString)) ? ul(e) ? oe(e.value) : JSON.stringify(e, dl, 2) : String(e), dl = (e, t) => ul(t) ? dl(e, t.value) : pn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[Zs(s, i) + " =>"] = o, n),
    {}
  )
} : Rs(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Zs(n))
} : Qe(t) ? Zs(t) : he(t) && !te(t) && !al(t) ? String(t) : t, Zs = (e, t = "") => {
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
let Fe;
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
    const t = Fe, n = lt;
    Fe = this, lt = !0;
    try {
      return this.fn();
    } finally {
      vl(this), Fe = t, lt = n, this.flags &= -3;
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
let gl = 0, Rn, Pn;
function _l(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Pn, Pn = e;
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
  if (Pn) {
    let t = Pn;
    for (Pn = void 0; t; ) {
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
  const t = e.dep, n = Fe, s = lt;
  Fe = e, lt = !0;
  try {
    bl(e);
    const o = e.fn(e._value);
    (t.version === 0 || ht(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Fe = n, lt = s, vl(e), e.flags &= -3;
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
    const n = Fe;
    Fe = void 0;
    try {
      t();
    } finally {
      Fe = n;
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
    if (!Fe || !lt || Fe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Fe)
      n = this.activeLink = new tr(Fe, this), Fe.deps ? (n.prevDep = Fe.depsTail, Fe.depsTail.nextDep = n, Fe.depsTail = n) : Fe.deps = Fe.depsTail = n, xl(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Fe.depsTail, n.nextDep = void 0, Fe.depsTail.nextDep = n, Fe.depsTail = n, Fe.deps === n && (Fe.deps = s);
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
const _s = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ Symbol(
  ""
), bo = /* @__PURE__ */ Symbol(
  ""
), Kn = /* @__PURE__ */ Symbol(
  ""
);
function Ve(e, t, n) {
  if (lt && Fe) {
    let s = _s.get(e);
    s || _s.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new jo()), o.map = s, o.key = n), o.track();
  }
}
function Lt(e, t, n, s, o, i) {
  const l = _s.get(e);
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
    const r = te(e), u = r && Ps(n);
    if (r && n === "length") {
      const c = Number(s);
      l.forEach((d, f) => {
        (f === "length" || f === Kn || !Qe(f) && f >= c) && a(d);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && a(l.get(n)), u && a(l.get(Kn)), t) {
        case "add":
          r ? u && a(l.get("length")) : (a(l.get(Zt)), pn(e) && a(l.get(bo)));
          break;
        case "delete":
          r || (a(l.get(Zt)), pn(e) && a(l.get(bo)));
          break;
        case "set":
          pn(e) && a(l.get(Zt));
          break;
      }
  }
  Ho();
}
function nr(e, t) {
  const n = _s.get(e);
  return n && n.get(t);
}
function rn(e) {
  const t = /* @__PURE__ */ pe(e);
  return t === e ? t : (Ve(t, "iterate", Kn), /* @__PURE__ */ Je(e) ? t : t.map(at));
}
function Bs(e) {
  return Ve(e = /* @__PURE__ */ pe(e), "iterate", Kn), e;
}
function pt(e, t) {
  return /* @__PURE__ */ At(e) ? _n(/* @__PURE__ */ bt(e) ? at(t) : t) : at(t);
}
const sr = {
  __proto__: null,
  [Symbol.iterator]() {
    return to(this, Symbol.iterator, (e) => pt(this, e));
  },
  concat(...e) {
    return rn(this).concat(
      ...e.map((t) => te(t) ? rn(t) : t)
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
    return rn(this).join(e);
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
    return rn(this).toReversed();
  },
  toSorted(e) {
    return rn(this).toSorted(e);
  },
  toSpliced(...e) {
    return rn(this).toSpliced(...e);
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
    const l = te(t);
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
      /* @__PURE__ */ ve(t) ? t : s
    );
    if ((Qe(n) ? Sl.has(n) : ir(n)) || (o || Ve(t, "get", n), i))
      return a;
    if (/* @__PURE__ */ ve(a)) {
      const r = l && Ps(n) ? a : a.value;
      return o && he(r) ? /* @__PURE__ */ bs(r) : r;
    }
    return he(a) ? o ? /* @__PURE__ */ bs(a) : /* @__PURE__ */ nn(a) : a;
  }
}
class Cl extends Fl {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    const l = te(t) && Ps(n);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ At(i);
      if (!/* @__PURE__ */ Je(s) && !/* @__PURE__ */ At(s) && (i = /* @__PURE__ */ pe(i), s = /* @__PURE__ */ pe(s)), !l && /* @__PURE__ */ ve(i) && !/* @__PURE__ */ ve(s))
        return u || (i.value = s), !0;
    }
    const a = l ? Number(n) < t.length : ge(t, n), r = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ve(t) ? t : o
    );
    return t === /* @__PURE__ */ pe(o) && r && (a ? ht(s, i) && Lt(t, "set", n, s) : Lt(t, "add", n, s)), r;
  }
  deleteProperty(t, n) {
    const s = ge(t, n);
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
      te(t) ? "length" : Zt
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
const vo = (e) => e, os = (e) => Reflect.getPrototypeOf(e);
function dr(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = /* @__PURE__ */ pe(o), l = pn(i), a = e === "entries" || e === Symbol.iterator && l, r = e === "keys" && l, u = o[e](...s), c = n ? vo : t ? _n : at;
    return !t && Ve(
      i,
      "iterate",
      r ? bo : Zt
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
function fr(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ pe(i), a = /* @__PURE__ */ pe(o);
      e || (ht(o, a) && Ve(l, "get", o), Ve(l, "get", a));
      const { has: r } = os(l), u = t ? vo : e ? _n : at;
      if (r.call(l, o))
        return u(i.get(o));
      if (r.call(l, a))
        return u(i.get(a));
      i !== l && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Ve(/* @__PURE__ */ pe(o), "iterate", Zt), o.size;
    },
    has(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ pe(i), a = /* @__PURE__ */ pe(o);
      return e || (ht(o, a) && Ve(l, "has", o), Ve(l, "has", a)), o === a ? i.has(o) : i.has(o) || i.has(a);
    },
    forEach(o, i) {
      const l = this, a = l.__v_raw, r = /* @__PURE__ */ pe(a), u = t ? vo : e ? _n : at;
      return !e && Ve(r, "iterate", Zt), a.forEach((c, d) => o.call(i, u(c), u(d), l));
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
    n[o] = dr(o, e, t);
  }), n;
}
function Wo(e, t) {
  const n = fr(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    ge(n, o) && o in s ? n : s,
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
function nn(e) {
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
function bs(e) {
  return zo(
    e,
    !0,
    cr,
    hr,
    Il
  );
}
function zo(e, t, n, s, o) {
  if (!he(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
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
  return !ge(e, "__v_skip") && Object.isExtensible(e) && rl(e, "__v_skip", !0), e;
}
const at = (e) => he(e) ? /* @__PURE__ */ nn(e) : e, _n = (e) => he(e) ? /* @__PURE__ */ bs(e) : e;
// @__NO_SIDE_EFFECTS__
function ve(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function le(e) {
  return vr(e, !1);
}
function vr(e, t) {
  return /* @__PURE__ */ ve(e) ? e : new yr(e, t);
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
function g(e) {
  return /* @__PURE__ */ ve(e) ? e.value : e;
}
const wr = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ ve(o) && !/* @__PURE__ */ ve(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Al(e) {
  return /* @__PURE__ */ bt(e) ? e : new Proxy(e, wr);
}
// @__NO_SIDE_EFFECTS__
function xr(e) {
  const t = te(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Dl(e, n);
  return t;
}
class Sr {
  constructor(t, n, s) {
    this._object = t, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._key = Qe(n) ? n : String(n), this._raw = /* @__PURE__ */ pe(t);
    let o = !0, i = t;
    if (!te(t) || Qe(this._key) || !Ps(this._key))
      do
        o = !/* @__PURE__ */ Hs(i) || /* @__PURE__ */ Je(i);
      while (o && (i = i.__v_raw));
    this._shallow = o;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = g(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ ve(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ ve(n)) {
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
  return /* @__PURE__ */ ve(e) ? e : ce(e) ? new Fr(e) : he(e) && arguments.length > 1 ? Dl(e, t, n) : /* @__PURE__ */ le(e);
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
    Fe !== this)
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
const ls = {}, vs = /* @__PURE__ */ new WeakMap();
let Gt;
function Ir(e, t = !1, n = Gt) {
  if (n) {
    let s = vs.get(n);
    s || vs.set(n, s = []), s.push(e);
  }
}
function Ar(e, t, n = Se) {
  const { immediate: s, deep: o, once: i, scheduler: l, augmentJob: a, call: r } = n, u = (b) => o ? b : /* @__PURE__ */ Je(b) || o === !1 || o === 0 ? It(b, 1) : It(b);
  let c, d, f, p, h = !1, _ = !1;
  if (/* @__PURE__ */ ve(e) ? (d = () => e.value, h = /* @__PURE__ */ Je(e)) : /* @__PURE__ */ bt(e) ? (d = () => u(e), h = !0) : te(e) ? (_ = !0, h = e.some((b) => /* @__PURE__ */ bt(b) || /* @__PURE__ */ Je(b)), d = () => e.map((b) => {
    if (/* @__PURE__ */ ve(b))
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
    const b = Gt;
    Gt = c;
    try {
      return r ? r(e, 3, [p]) : e(p);
    } finally {
      Gt = b;
    }
  } : d = _t, t && o) {
    const b = d, w = o === !0 ? 1 / 0 : o;
    d = () => It(b(), w);
  }
  const F = ml(), y = () => {
    c.stop(), F && F.active && Vo(F.effects, c);
  };
  if (i && t) {
    const b = t;
    t = (...w) => {
      const k = b(...w);
      return y(), k;
    };
  }
  let S = _ ? new Array(e.length).fill(ls) : ls;
  const I = (b) => {
    if (!(!(c.flags & 1) || !c.dirty && !b))
      if (t) {
        const w = c.run();
        if (b || o || h || (_ ? w.some((k, T) => ht(k, S[T])) : ht(w, S))) {
          f && f();
          const k = Gt;
          Gt = c;
          try {
            const T = [
              w,
              // pass undefined as the old value when it's changed for the first time
              S === ls ? void 0 : _ && S[0] === ls ? [] : S,
              p
            ];
            S = w, r ? r(t, 3, T) : (
              // @ts-expect-error
              t(...T)
            );
          } finally {
            Gt = k;
          }
        }
      } else
        c.run();
  };
  return a && a(I), c = new hl(d), c.scheduler = l ? () => l(I, !1) : I, p = (b) => Ir(b, !1, c), f = c.onStop = () => {
    const b = vs.get(c);
    if (b) {
      if (r)
        r(b, 4);
      else
        for (const w of b) w();
      vs.delete(c);
    }
  }, t ? s ? I(!0) : S = c.run() : l ? l(I.bind(null, !0), !0) : c.run(), y.pause = c.pause.bind(c), y.resume = c.resume.bind(c), y.stop = y, y;
}
function It(e, t = 1 / 0, n) {
  if (t <= 0 || !he(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ve(e))
    It(e.value, t, n);
  else if (te(e))
    for (let s = 0; s < e.length; s++)
      It(e[s], t, n);
  else if (Rs(e) || pn(e))
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
      yt(), es(i, null, 10, [
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
const mn = [];
let Pt = null, un = 0;
const kl = /* @__PURE__ */ Promise.resolve();
let ys = null;
function wn(e) {
  const t = ys || kl;
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
  ys || (ys = kl.then(Rl));
}
function Er(e) {
  te(e) ? mn.push(...e) : Pt && e.id === -1 ? Pt.splice(un + 1, 0, e) : e.flags & 1 || (mn.push(e), e.flags |= 1), El();
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
  if (mn.length) {
    const t = [...new Set(mn)].sort(
      (n, s) => Gn(n) - Gn(s)
    );
    if (mn.length = 0, Pt) {
      Pt.push(...t);
      return;
    }
    for (Pt = t, un = 0; un < Pt.length; un++) {
      const n = Pt[un];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Pt = null, un = 0;
  }
}
const Gn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Rl(e) {
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
    ft = -1, We.length = 0, Tl(), ys = null, (We.length || mn.length) && Rl();
  }
}
let Ne = null, Pl = null;
function ws(e) {
  const t = Ne;
  return Ne = e, Pl = e && e.type.__scopeId || null, t;
}
function Us(e, t = Ne, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Fs(-1);
    const i = ws(t);
    let l;
    try {
      l = e(...o);
    } finally {
      ws(i), s._d && Fs(1);
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
function jt(e, t, n, s) {
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
  if (Oe) {
    let n = Oe.provides;
    const s = Oe.parent && Oe.parent.provides;
    s === n && (n = Oe.provides = Object.create(s)), n[e] = t;
  }
}
function On(e, t, n = !1) {
  const s = Qo();
  if (s || en) {
    let o = en ? en._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ce(t) ? t.call(s && s.proxy) : t;
  }
}
function Rr() {
  return !!(Qo() || en);
}
const Pr = /* @__PURE__ */ Symbol.for("v-scx"), Or = () => On(Pr);
function He(e, t, n) {
  return Ol(e, t, n);
}
function Ol(e, t, n = Se) {
  const { immediate: s, deep: o, flush: i, once: l } = n, a = Te({}, n), r = t && s || !t && i !== "post";
  let u;
  if (bn) {
    if (i === "sync") {
      const p = Or();
      u = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!r) {
      const p = () => {
      };
      return p.stop = _t, p.resume = _t, p.pause = _t, p;
    }
  }
  const c = Oe;
  a.call = (p, h, _) => ot(p, c, h, _);
  let d = !1;
  i === "post" ? a.scheduler = (p) => {
    je(p, c && c.suspense);
  } : i !== "sync" && (d = !0, a.scheduler = (p, h) => {
    h ? p() : Go(p);
  }), a.augmentJob = (p) => {
    t && (p.flags |= 4), d && (p.flags |= 2, c && (p.id = c.uid, p.i = c));
  };
  const f = Ar(e, t, a);
  return bn && (u ? u.push(f) : r && f()), f;
}
function Nr(e, t, n) {
  const s = this.proxy, o = Me(e) ? e.includes(".") ? Nl(s, e) : () => s[e] : e.bind(s, s);
  let i;
  ce(t) ? i = t : (i = t.handler, n = t);
  const l = ss(this), a = Ol(o, i.bind(s), n);
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
const Et = /* @__PURE__ */ new WeakMap(), $l = /* @__PURE__ */ Symbol("_vte"), Vl = (e) => e.__isTeleport, Xt = (e) => e && (e.disabled || e.disabled === ""), $r = (e) => e && (e.defer || e.defer === ""), ri = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ci = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, yo = (e, t) => {
  const n = e && e.to;
  return Me(n) ? t ? t(n) : null : n;
}, Vr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, i, l, a, r, u) {
    const {
      mc: c,
      pc: d,
      pbc: f,
      o: { insert: p, querySelector: h, createText: _, createComment: F, parentNode: y }
    } = u, S = Xt(t.props);
    let { dynamicChildren: I } = t;
    const b = (T, A, x) => {
      T.shapeFlag & 16 && c(
        T.children,
        A,
        x,
        o,
        i,
        l,
        a,
        r
      );
    }, w = (T = t) => {
      const A = Xt(T.props), x = T.target = yo(T.props, h), P = wo(x, T, _, p);
      x && (l !== "svg" && ri(x) ? l = "svg" : l !== "mathml" && ci(x) && (l = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(x), A || (b(T, x, P), An(T, !1)));
    }, k = (T) => {
      const A = () => {
        if (Et.get(T) === A) {
          if (Et.delete(T), Xt(T.props)) {
            const x = y(T.el) || n;
            b(T, x, T.anchor), An(T, !0);
          }
          w(T);
        }
      };
      Et.set(T, A), je(A, i);
    };
    if (e == null) {
      const T = t.el = _(""), A = t.anchor = _("");
      if (p(T, n, s), p(A, n, s), $r(t.props) || i && i.pendingBranch) {
        k(t);
        return;
      }
      S && (b(t, n, A), An(t, !0)), w();
    } else {
      t.el = e.el;
      const T = t.anchor = e.anchor, A = Et.get(e);
      if (A) {
        A.flags |= 8, Et.delete(e), k(t);
        return;
      }
      t.targetStart = e.targetStart;
      const x = t.target = e.target, P = t.targetAnchor = e.targetAnchor, O = Xt(e.props), M = O ? n : x, E = O ? T : P;
      if (l === "svg" || ri(x) ? l = "svg" : (l === "mathml" || ci(x)) && (l = "mathml"), I ? (f(
        e.dynamicChildren,
        I,
        M,
        o,
        i,
        l,
        a
      ), Jo(e, t, !0)) : r || d(
        e,
        t,
        M,
        E,
        o,
        i,
        l,
        a,
        !1
      ), S)
        O ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : as(
          t,
          n,
          T,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const Q = yo(t.props, h);
        Q && (t.target = Q, as(
          t,
          Q,
          null,
          u,
          0
        ));
      } else O && as(
        t,
        x,
        P,
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
    } = e, p = Xt(f), h = i || !p, _ = Et.get(e);
    if (_ && (_.flags |= 8, Et.delete(e)), d && (o(u), o(c)), i && o(r), !_ && (p || d) && l & 16)
      for (let F = 0; F < a.length; F++) {
        const y = a[F];
        s(
          y,
          t,
          n,
          h,
          !!y.dynamicChildren
        );
      }
  },
  move: as,
  hydrate: Br
};
function as(e, t, n, { o: { insert: s }, m: o }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: l, anchor: a, shapeFlag: r, children: u, props: c } = e, d = i === 2;
  if (d && s(l, t, n), !Et.has(e) && (!d || Xt(c)) && r & 16)
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
  function f(F, y) {
    let S = y;
    for (; S; ) {
      if (S && S.nodeType === 8) {
        if (S.data === "teleport start anchor")
          t.targetStart = S;
        else if (S.data === "teleport anchor") {
          t.targetAnchor = S, F._lpa = t.targetAnchor && l(t.targetAnchor);
          break;
        }
      }
      S = l(S);
    }
  }
  function p(F, y) {
    y.anchor = d(
      l(F),
      y,
      a(F),
      n,
      s,
      o,
      i
    );
  }
  const h = t.target = yo(
    t.props,
    r
  ), _ = Xt(t.props);
  if (h) {
    const F = h._lpa || h.firstChild;
    t.shapeFlag & 16 && (_ ? (p(e, t), f(h, F), t.targetAnchor || wo(
      h,
      t,
      c,
      u,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      a(e) === h ? e : null
    )) : (t.anchor = l(e), f(h, F), t.targetAnchor || wo(h, t, c, u), d(
      F && l(F),
      t,
      h,
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
  return on(() => {
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
        n.subTree ? ne() : void 0
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
      if (c && c.type !== Be && !Yt(c, r) && Ul(n).type !== Be) {
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
        a === "in-out" && r.type !== Be ? d.delayLeave = (f, p, h) => {
          const _ = Wl(
            s,
            c
          );
          _[String(c.key)] = c, f[tt] = () => {
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
    onAfterLeave: h,
    onLeaveCancelled: _,
    onBeforeAppear: F,
    onAppear: y,
    onAfterAppear: S,
    onAppearCancelled: I
  } = t, b = String(e.key), w = Wl(n, e), k = (x, P) => {
    x && ot(
      x,
      s,
      9,
      P
    );
  }, T = (x, P) => {
    const O = P[1];
    k(x, P), te(x) ? x.every((M) => M.length <= 1) && O() : x.length <= 1 && O();
  }, A = {
    mode: l,
    persisted: a,
    beforeEnter(x) {
      let P = r;
      if (!n.isMounted)
        if (i)
          P = F || r;
        else
          return;
      x[tt] && x[tt](
        !0
        /* cancelled */
      );
      const O = w[b];
      O && Yt(e, O) && O.el[tt] && O.el[tt](), k(P, [x]);
    },
    enter(x) {
      if (w[b] === e) return;
      let P = u, O = c, M = d;
      if (!n.isMounted)
        if (i)
          P = y || u, O = S || c, M = I || d;
        else
          return;
      let E = !1;
      x[Mn] = (B) => {
        E || (E = !0, B ? k(M, [x]) : k(O, [x]), A.delayedLeave && A.delayedLeave(), x[Mn] = void 0);
      };
      const Q = x[Mn].bind(null, !1);
      P ? T(P, [x, Q]) : Q();
    },
    leave(x, P) {
      const O = String(e.key);
      if (x[Mn] && x[Mn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return P();
      k(f, [x]);
      let M = !1;
      x[tt] = (Q) => {
        M || (M = !0, P(), Q ? k(_, [x]) : k(h, [x]), x[tt] = void 0, w[O] === e && delete w[O]);
      };
      const E = x[tt].bind(null, !1);
      w[O] = e, p ? T(p, [x, E]) : E();
    },
    clone(x) {
      const P = xo(
        x,
        t,
        n,
        s,
        o
      );
      return o && o(P), P;
    }
  };
  return A;
}
function so(e) {
  if (ns(e))
    return e = Nt(e), e.children = null, e;
}
function ui(e) {
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
    )) : (t || l.type !== Be) && s.push(a != null ? Nt(l, { key: a }) : l);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Ce(e, t) {
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
const xs = /* @__PURE__ */ new WeakMap();
function Nn(e, t, n, s, o = !1) {
  if (te(e)) {
    e.forEach(
      (_, F) => Nn(
        _,
        t && (te(t) ? t[F] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (hn(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Nn(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Gs(s.component) : s.el, l = o ? null : i, { i: a, r } = e, u = t && t.r, c = a.refs === Se ? a.refs = {} : a.refs, d = a.setupState, f = /* @__PURE__ */ pe(d), p = d === Se ? ol : (_) => di(c, _) ? !1 : ge(f, _), h = (_, F) => !(F && di(c, F));
  if (u != null && u !== r) {
    if (fi(t), Me(u))
      c[u] = null, p(u) && (d[u] = null);
    else if (/* @__PURE__ */ ve(u)) {
      const _ = t;
      h(u, _.k) && (u.value = null), _.k && (c[_.k] = null);
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
    const _ = Me(r), F = /* @__PURE__ */ ve(r);
    if (_ || F) {
      const y = () => {
        if (e.f) {
          const S = _ ? p(r) ? d[r] : c[r] : h() || !e.k ? r.value : c[e.k];
          if (o)
            te(S) && Vo(S, i);
          else if (te(S))
            S.includes(i) || S.push(i);
          else if (_)
            c[r] = [i], p(r) && (d[r] = c[r]);
          else {
            const I = [i];
            h(r, e.k) && (r.value = I), e.k && (c[e.k] = I);
          }
        } else _ ? (c[r] = l, p(r) && (d[r] = l)) : F && (h(r, e.k) && (r.value = l), e.k && (c[e.k] = l));
      };
      if (l) {
        const S = () => {
          y(), xs.delete(e);
        };
        S.id = -1, xs.set(e, S), je(S, n);
      } else
        fi(e), y();
    }
  }
}
function fi(e) {
  const t = xs.get(e);
  t && (t.flags |= 8, xs.delete(e));
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
const hn = (e) => !!e.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function sn(e) {
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
    let h;
    return u || (h = u = t().catch((_) => {
      if (_ = _ instanceof Error ? _ : new Error(String(_)), r)
        return new Promise((F, y) => {
          r(_, () => F(f()), () => y(_), d + 1);
        });
      throw _;
    }).then((_) => h !== u && u ? u : (_ && (_.__esModule || _[Symbol.toStringTag] === "Module") && (_ = _.default), c = _, _)));
  };
  return /* @__PURE__ */ Ce({
    name: "AsyncComponentWrapper",
    __asyncLoader: p,
    __asyncHydrate(h, _, F) {
      let y = !1;
      (_.bu || (_.bu = [])).push(() => y = !0);
      const S = () => {
        y || F();
      }, I = i ? () => {
        const b = i(
          S,
          (w) => Wr(h, w)
        );
        b && (_.bum || (_.bum = [])).push(b);
      } : S;
      c ? I() : p().then(() => !_.isUnmounted && I());
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const h = Oe;
      if (qo(h), c)
        return () => rs(c, h);
      const _ = (w) => {
        u = null, ts(
          w,
          h,
          13,
          !s
        );
      };
      if (a && h.suspense || bn)
        return p().then((w) => () => rs(w, h)).catch((w) => (_(w), () => s ? J(s, {
          error: w
        }) : null));
      const F = /* @__PURE__ */ le(!1), y = /* @__PURE__ */ le(), S = /* @__PURE__ */ le(!!o);
      let I, b;
      return Ws(() => {
        I != null && clearTimeout(I), b != null && clearTimeout(b);
      }), o && (b = setTimeout(() => {
        h.isUnmounted || (S.value = !1);
      }, o)), l != null && (I = setTimeout(() => {
        if (!h.isUnmounted && !F.value && !y.value) {
          const w = new Error(
            `Async component timed out after ${l}ms.`
          );
          _(w), y.value = w;
        }
      }, l)), p().then(() => {
        h.isUnmounted || (F.value = !0, h.parent && ns(h.parent.vnode) && h.parent.update());
      }).catch((w) => {
        if (h.isUnmounted) {
          u = null;
          return;
        }
        _(w), y.value = w;
      }), () => {
        if (F.value && c)
          return rs(c, h);
        if (y.value && s)
          return J(s, {
            error: y.value
          });
        if (n && !S.value)
          return rs(
            n,
            h
          );
      };
    }
  });
}
function rs(e, t) {
  const { ref: n, props: s, children: o, ce: i } = t.vnode, l = J(e, s, o);
  return l.ref = n, l.ce = i, delete t.vnode.ce, l;
}
const ns = (e) => e.type.__isKeepAlive;
function zr(e, t) {
  Kl(e, "a", t);
}
function Kr(e, t) {
  Kl(e, "da", t);
}
function Kl(e, t, n = Oe) {
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
      ns(o.parent.vnode) && Gr(s, t, n, o), o = o.parent;
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
function js(e, t, n = Oe, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...l) => {
      yt();
      const a = ss(n), r = ot(t, n, e, l);
      return a(), wt(), r;
    });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const Dt = (e) => (t, n = Oe) => {
  (!bn || e === "sp") && js(e, (...s) => t(...s), n);
}, qr = Dt("bm"), on = Dt("m"), Xr = Dt(
  "bu"
), Yr = Dt("u"), xn = Dt(
  "bum"
), Ws = Dt("um"), Jr = Dt(
  "sp"
), Qr = Dt("rtg"), Zr = Dt("rtc");
function ec(e, t = Oe) {
  js("ec", e, t);
}
const tc = "components", Gl = /* @__PURE__ */ Symbol.for("v-ndc");
function nc(e) {
  return Me(e) ? sc(tc, e, !1) || e : e || Gl;
}
function sc(e, t, n = !0, s = !1) {
  const o = Ne || Oe;
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
  const i = n, l = te(e);
  if (l || Me(e)) {
    const a = l && /* @__PURE__ */ bt(e);
    let r = !1, u = !1;
    a && (r = !/* @__PURE__ */ Je(e), u = /* @__PURE__ */ At(e), e = Bs(e)), o = new Array(e.length);
    for (let c = 0, d = e.length; c < d; c++)
      o[c] = t(
        r ? u ? _n(at(e[c])) : at(e[c]) : e[c],
        c,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let a = 0; a < e; a++)
      o[a] = t(a + 1, a, void 0, i);
  } else if (he(e))
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
  if (Ne.ce || Ne.parent && hn(Ne.parent) && Ne.parent.ce) {
    const u = Object.keys(n).length > 0;
    return C(), Ie(
      de,
      null,
      [J("slot", n, s)],
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
), oo = (e, t) => e !== Se && !e.__isScriptSetup && ge(e, t), ic = {
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
        if (o !== Se && ge(o, t))
          return l[t] = 2, o[t];
        if (ge(i, t))
          return l[t] = 3, i[t];
        if (n !== Se && ge(n, t))
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
    if (n !== Se && ge(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      d = r.config.globalProperties, ge(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return oo(o, t) ? (o[t] = n, !0) : s !== Se && ge(s, t) ? (s[t] = n, !0) : ge(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: i, type: l }
  }, a) {
    let r;
    return !!(n[a] || e !== Se && a[0] !== "$" && ge(e, a) || oo(t, a) || ge(i, a) || ge(s, a) || ge($n, a) || ge(o.config.globalProperties, a) || (r = l.__cssModules) && r[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ge(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function hi(e) {
  return te(e) ? e.reduce(
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
    updated: h,
    activated: _,
    deactivated: F,
    beforeDestroy: y,
    beforeUnmount: S,
    destroyed: I,
    unmounted: b,
    render: w,
    renderTracked: k,
    renderTriggered: T,
    errorCaptured: A,
    serverPrefetch: x,
    // public API
    expose: P,
    inheritAttrs: O,
    // assets
    components: M,
    directives: E,
    filters: Q
  } = t;
  if (u && ac(u, s, null), l)
    for (const D in l) {
      const U = l[D];
      ce(U) && (s[D] = U.bind(n));
    }
  if (o) {
    const D = o.call(n, n);
    he(D) && (e.data = /* @__PURE__ */ nn(D));
  }
  if (Fo = !0, i)
    for (const D in i) {
      const U = i[D], j = ce(U) ? U.bind(n, n) : ce(U.get) ? U.get.bind(n, n) : _t, Z = !ce(U) && ce(U.set) ? U.set.bind(n) : _t, ie = X({
        get: j,
        set: Z
      });
      Object.defineProperty(s, D, {
        enumerable: !0,
        configurable: !0,
        get: () => ie.value,
        set: (ye) => ie.value = ye
      });
    }
  if (a)
    for (const D in a)
      Xl(a[D], s, n, D);
  if (r) {
    const D = ce(r) ? r.call(n) : r;
    Reflect.ownKeys(D).forEach((U) => {
      Tr(U, D[U]);
    });
  }
  c && gi(c, e, "c");
  function W(D, U) {
    te(U) ? U.forEach((j) => D(j.bind(n))) : U && D(U.bind(n));
  }
  if (W(qr, d), W(on, f), W(Xr, p), W(Yr, h), W(zr, _), W(Kr, F), W(ec, A), W(Zr, k), W(Qr, T), W(xn, S), W(Ws, b), W(Jr, x), te(P))
    if (P.length) {
      const D = e.exposed || (e.exposed = {});
      P.forEach((U) => {
        Object.defineProperty(D, U, {
          get: () => n[U],
          set: (j) => n[U] = j,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  w && e.render === _t && (e.render = w), O != null && (e.inheritAttrs = O), M && (e.components = M), E && (e.directives = E), x && qo(e);
}
function ac(e, t, n = _t) {
  te(e) && (e = Co(e));
  for (const s in e) {
    const o = e[s];
    let i;
    he(o) ? "default" in o ? i = On(
      o.from || s,
      o.default,
      !0
    ) : i = On(o.from || s) : i = On(o), /* @__PURE__ */ ve(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[s] = i;
  }
}
function gi(e, t, n) {
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
  else if (he(e))
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
  ), Ss(r, t, l)), he(t) && i.set(t, r), r;
}
function Ss(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && Ss(e, i, n, !0), o && o.forEach(
    (l) => Ss(e, l, n, !0)
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
function bi(e, t) {
  return e ? te(e) && te(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Te(
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
    ce(s) || (s = Te({}, s)), o != null && !he(o) && (o = null);
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
          const p = u._ceVNode || J(s, o);
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
        const d = en;
        en = u;
        try {
          return c();
        } finally {
          en = d;
        }
      }
    };
    return u;
  };
}
let en = null;
const pc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ke(t)}Modifiers`] || e[`${$t(t)}Modifiers`];
function mc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Se;
  let o = n;
  const i = t.startsWith("update:"), l = i && pc(s, t.slice(7));
  l && (l.trim && (o = n.map((c) => Me(c) ? c.trim() : c)), l.number && (o = n.map($s)));
  let a, r = s[a = Qs(t)] || // also try camelCase event handler (#2249)
  s[a = Qs(Ke(t))];
  !r && i && (r = s[a = Qs($t(t))]), r && ot(
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
  return !i && !a ? (he(e) && s.set(e, null), null) : (te(i) ? i.forEach((r) => l[r] = null) : Te(l, i), he(e) && s.set(e, l), l);
}
function zs(e, t) {
  return !e || !Es(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ge(e, t[0].toLowerCase() + t.slice(1)) || ge(e, $t(t)) || ge(e, t));
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
    ctx: h,
    inheritAttrs: _
  } = e, F = ws(e);
  let y, S;
  try {
    if (n.shapeFlag & 4) {
      const b = o || s, w = b;
      y = mt(
        u.call(
          w,
          b,
          c,
          d,
          p,
          f,
          h
        )
      ), S = a;
    } else {
      const b = t;
      y = mt(
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
    Vn.length = 0, ts(b, e, 1), y = J(Be);
  }
  let I = y;
  if (S && _ !== !1) {
    const b = Object.keys(S), { shapeFlag: w } = I;
    b.length && w & 7 && (i && b.some(Ts) && (S = _c(
      S,
      i
    )), I = Nt(I, S, !1, !0));
  }
  return n.dirs && (I = Nt(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && qn(I, n.transition), y = I, ws(F), y;
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
  return n === "style" && he(s) && he(o) ? !Zn(s, o) : s !== o;
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
          if (ge(i, f))
            p !== i[f] && (i[f] = p, u = !0);
          else {
            const h = Ke(f);
            o[h] = Mo(
              r,
              a,
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
    sa(e, t, o, i) && (u = !0);
    let c;
    for (const d in a)
      (!t || // for camelCase
      !ge(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = $t(d)) === d || !ge(t, c))) && (r ? n && // for camelCase
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
        (!t || !ge(t, d)) && (delete i[d], u = !0);
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
      o && ge(o, c = Ke(r)) ? !i || !i.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : zs(e.emitsOptions, r) || (!(r in s) || u !== s[r]) && (s[r] = u, l = !0);
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
        !ge(u, d)
      );
    }
  }
  return l;
}
function Mo(e, t, n, s, o, i) {
  const l = e[n];
  if (l != null) {
    const a = ge(l, "default");
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
    ] && (s === "" || s === $t(n)) && (s = !0));
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
    return he(e) && s.set(e, fn), fn;
  if (te(i))
    for (let c = 0; c < i.length; c++) {
      const d = Ke(i[c]);
      wi(d) && (l[d] = Se);
    }
  else if (i)
    for (const c in i) {
      const d = Ke(c);
      if (wi(d)) {
        const f = i[c], p = l[d] = te(f) || ce(f) ? { type: f } : Te({}, f), h = p.type;
        let _ = !1, F = !0;
        if (te(h))
          for (let y = 0; y < h.length; ++y) {
            const S = h[y], I = ce(S) && S.name;
            if (I === "Boolean") {
              _ = !0;
              break;
            } else I === "String" && (F = !1);
          }
        else
          _ = ce(h) && h.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = _, p[
          1
          /* shouldCastTrue */
        ] = F, (_ || ge(p, "default")) && a.push(d);
      }
    }
  const u = [l, a];
  return he(e) && s.set(e, u), u;
}
function wi(e) {
  return e[0] !== "$" && !Tn(e);
}
const Xo = (e) => e === "_" || e === "_ctx" || e === "$stable", Yo = (e) => te(e) ? e.map(mt) : [mt(e)], Sc = (e, t, n) => {
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
    insertStaticContent: h
  } = e, _ = (m, v, L, H = null, V = null, N = null, q = void 0, G = null, K = !!v.dynamicChildren) => {
    if (m === v)
      return;
    m && !Yt(m, v) && (H = Ut(m), ye(m, V, N, !0), m = null), v.patchFlag === -2 && (K = !1, v.dynamicChildren = null);
    const { type: $, ref: se, shapeFlag: Y } = v;
    switch ($) {
      case Ks:
        F(m, v, L, H);
        break;
      case Be:
        y(m, v, L, H);
        break;
      case lo:
        m == null && S(v, L, H, q);
        break;
      case de:
        M(
          m,
          v,
          L,
          H,
          V,
          N,
          q,
          G,
          K
        );
        break;
      default:
        Y & 1 ? w(
          m,
          v,
          L,
          H,
          V,
          N,
          q,
          G,
          K
        ) : Y & 6 ? E(
          m,
          v,
          L,
          H,
          V,
          N,
          q,
          G,
          K
        ) : (Y & 64 || Y & 128) && $.process(
          m,
          v,
          L,
          H,
          V,
          N,
          q,
          G,
          K,
          Re
        );
    }
    se != null && V ? Nn(se, m && m.ref, N, v || m, !v) : se == null && m && m.ref != null && Nn(m.ref, null, N, m, !0);
  }, F = (m, v, L, H) => {
    if (m == null)
      s(
        v.el = a(v.children),
        L,
        H
      );
    else {
      const V = v.el = m.el;
      v.children !== m.children && u(V, v.children);
    }
  }, y = (m, v, L, H) => {
    m == null ? s(
      v.el = r(v.children || ""),
      L,
      H
    ) : v.el = m.el;
  }, S = (m, v, L, H) => {
    [m.el, m.anchor] = h(
      m.children,
      v,
      L,
      H,
      m.el,
      m.anchor
    );
  }, I = ({ el: m, anchor: v }, L, H) => {
    let V;
    for (; m && m !== v; )
      V = f(m), s(m, L, H), m = V;
    s(v, L, H);
  }, b = ({ el: m, anchor: v }) => {
    let L;
    for (; m && m !== v; )
      L = f(m), o(m), m = L;
    o(v);
  }, w = (m, v, L, H, V, N, q, G, K) => {
    if (v.type === "svg" ? q = "svg" : v.type === "math" && (q = "mathml"), m == null)
      k(
        v,
        L,
        H,
        V,
        N,
        q,
        G,
        K
      );
    else {
      const $ = m.el && m.el._isVueCE ? m.el : null;
      try {
        $ && $._beginPatch(), x(
          m,
          v,
          V,
          N,
          q,
          G,
          K
        );
      } finally {
        $ && $._endPatch();
      }
    }
  }, k = (m, v, L, H, V, N, q, G) => {
    let K, $;
    const { props: se, shapeFlag: Y, transition: ee, dirs: re } = m;
    if (K = m.el = l(
      m.type,
      N,
      se && se.is,
      se
    ), Y & 8 ? c(K, m.children) : Y & 16 && A(
      m.children,
      K,
      null,
      H,
      V,
      io(m, N),
      q,
      G
    ), re && jt(m, null, H, "created"), T(K, m, m.scopeId, q, H), se) {
      for (const xe in se)
        xe !== "value" && !Tn(xe) && i(K, xe, null, se[xe], N, H);
      "value" in se && i(K, "value", null, se.value, N), ($ = se.onVnodeBeforeMount) && dt($, H, m);
    }
    re && jt(m, null, H, "beforeMount");
    const me = Ic(V, ee);
    me && ee.beforeEnter(K), s(K, v, L), (($ = se && se.onVnodeMounted) || me || re) && je(() => {
      try {
        $ && dt($, H, m), me && ee.enter(K), re && jt(m, null, H, "mounted");
      } finally {
      }
    }, V);
  }, T = (m, v, L, H, V) => {
    if (L && p(m, L), H)
      for (let N = 0; N < H.length; N++)
        p(m, H[N]);
    if (V) {
      let N = V.subTree;
      if (v === N || ua(N.type) && (N.ssContent === v || N.ssFallback === v)) {
        const q = V.vnode;
        T(
          m,
          q,
          q.scopeId,
          q.slotScopeIds,
          V.parent
        );
      }
    }
  }, A = (m, v, L, H, V, N, q, G, K = 0) => {
    for (let $ = K; $ < m.length; $++) {
      const se = m[$] = G ? Ct(m[$]) : mt(m[$]);
      _(
        null,
        se,
        v,
        L,
        H,
        V,
        N,
        q,
        G
      );
    }
  }, x = (m, v, L, H, V, N, q) => {
    const G = v.el = m.el;
    let { patchFlag: K, dynamicChildren: $, dirs: se } = v;
    K |= m.patchFlag & 16;
    const Y = m.props || Se, ee = v.props || Se;
    let re;
    if (L && Wt(L, !1), (re = ee.onVnodeBeforeUpdate) && dt(re, L, v, m), se && jt(v, m, L, "beforeUpdate"), L && Wt(L, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    $ && (!m.dynamicChildren || m.dynamicChildren.length !== $.length) && (K = 0, q = !1, $ = null), (Y.innerHTML && ee.innerHTML == null || Y.textContent && ee.textContent == null) && c(G, ""), $ ? P(
      m.dynamicChildren,
      $,
      G,
      L,
      H,
      io(v, V),
      N
    ) : q || U(
      m,
      v,
      G,
      null,
      L,
      H,
      io(v, V),
      N,
      !1
    ), K > 0) {
      if (K & 16)
        O(G, Y, ee, L, V);
      else if (K & 2 && Y.class !== ee.class && i(G, "class", null, ee.class, V), K & 4 && i(G, "style", Y.style, ee.style, V), K & 8) {
        const me = v.dynamicProps;
        for (let xe = 0; xe < me.length; xe++) {
          const we = me[xe], ke = Y[we], Pe = ee[we];
          (Pe !== ke || we === "value") && i(G, we, ke, Pe, V, L);
        }
      }
      K & 1 && m.children !== v.children && c(G, v.children);
    } else !q && $ == null && O(G, Y, ee, L, V);
    ((re = ee.onVnodeUpdated) || se) && je(() => {
      re && dt(re, L, v, m), se && jt(v, m, L, "updated");
    }, H);
  }, P = (m, v, L, H, V, N, q) => {
    for (let G = 0; G < v.length; G++) {
      const K = m[G], $ = v[G], se = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        K.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (K.type === de || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Yt(K, $) || // - In the case of a component, it could contain anything.
        K.shapeFlag & 198) ? d(K.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          L
        )
      );
      _(
        K,
        $,
        se,
        null,
        H,
        V,
        N,
        q,
        !0
      );
    }
  }, O = (m, v, L, H, V) => {
    if (v !== L) {
      if (v !== Se)
        for (const N in v)
          !Tn(N) && !(N in L) && i(
            m,
            N,
            v[N],
            null,
            V,
            H
          );
      for (const N in L) {
        if (Tn(N)) continue;
        const q = L[N], G = v[N];
        q !== G && N !== "value" && i(m, N, G, q, V, H);
      }
      "value" in L && i(m, "value", v.value, L.value, V);
    }
  }, M = (m, v, L, H, V, N, q, G, K) => {
    const $ = v.el = m ? m.el : a(""), se = v.anchor = m ? m.anchor : a("");
    let { patchFlag: Y, dynamicChildren: ee, slotScopeIds: re } = v;
    re && (G = G ? G.concat(re) : re), m == null ? (s($, L, H), s(se, L, H), A(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      v.children || [],
      L,
      se,
      V,
      N,
      q,
      G,
      K
    )) : Y > 0 && Y & 64 && ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren && m.dynamicChildren.length === ee.length ? (P(
      m.dynamicChildren,
      ee,
      L,
      V,
      N,
      q,
      G
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (v.key != null || V && v === V.subTree) && Jo(
      m,
      v,
      !0
      /* shallow */
    )) : U(
      m,
      v,
      L,
      se,
      V,
      N,
      q,
      G,
      K
    );
  }, E = (m, v, L, H, V, N, q, G, K) => {
    v.slotScopeIds = G, m == null ? v.shapeFlag & 512 ? V.ctx.activate(
      v,
      L,
      H,
      q,
      K
    ) : Q(
      v,
      L,
      H,
      V,
      N,
      q,
      K
    ) : B(m, v, K);
  }, Q = (m, v, L, H, V, N, q) => {
    const G = m.component = Nc(
      m,
      H,
      V
    );
    if (ns(m) && (G.ctx.renderer = Re), $c(G, !1, q), G.asyncDep) {
      if (V && V.registerDep(G, W, q), !m.el) {
        const K = G.subTree = J(Be);
        y(null, K, v, L), m.placeholder = K.el;
      }
    } else
      W(
        G,
        m,
        v,
        L,
        V,
        N,
        q
      );
  }, B = (m, v, L) => {
    const H = v.component = m.component;
    if (bc(m, v, L))
      if (H.asyncDep && !H.asyncResolved) {
        D(H, v, L);
        return;
      } else
        H.next = v, H.update();
    else
      v.el = m.el, H.vnode = v;
  }, W = (m, v, L, H, V, N, q) => {
    const G = () => {
      if (m.isMounted) {
        let { next: Y, bu: ee, u: re, parent: me, vnode: xe } = m;
        {
          const ct = ra(m);
          if (ct) {
            Y && (Y.el = xe.el, D(m, Y, q)), ct.asyncDep.then(() => {
              je(() => {
                m.isUnmounted || $();
              }, V);
            });
            return;
          }
        }
        let we = Y, ke;
        Wt(m, !1), Y ? (Y.el = xe.el, D(m, Y, q)) : Y = xe, ee && ps(ee), (ke = Y.props && Y.props.onVnodeBeforeUpdate) && dt(ke, me, Y, xe), Wt(m, !0);
        const Pe = vi(m), rt = m.subTree;
        m.subTree = Pe, _(
          rt,
          Pe,
          // parent may have changed if it's in a teleport
          d(rt.el),
          // anchor may have changed if it's in a fragment
          Ut(rt),
          m,
          V,
          N
        ), Y.el = Pe.el, we === null && vc(m, Pe.el), re && je(re, V), (ke = Y.props && Y.props.onVnodeUpdated) && je(
          () => dt(ke, me, Y, xe),
          V
        );
      } else {
        let Y;
        const { el: ee, props: re } = v, { bm: me, m: xe, parent: we, root: ke, type: Pe } = m, rt = hn(v);
        Wt(m, !1), me && ps(me), !rt && (Y = re && re.onVnodeBeforeMount) && dt(Y, we, v), Wt(m, !0);
        {
          ke.ce && ke.ce._hasShadowRoot() && ke.ce._injectChildStyle(
            Pe,
            m.parent ? m.parent.type : void 0
          );
          const ct = m.subTree = vi(m);
          _(
            null,
            ct,
            L,
            H,
            m,
            V,
            N
          ), v.el = ct.el;
        }
        if (xe && je(xe, V), !rt && (Y = re && re.onVnodeMounted)) {
          const ct = v;
          je(
            () => dt(Y, we, ct),
            V
          );
        }
        (v.shapeFlag & 256 || we && hn(we.vnode) && we.vnode.shapeFlag & 256) && m.a && je(m.a, V), m.isMounted = !0, v = L = H = null;
      }
    };
    m.scope.on();
    const K = m.effect = new hl(G);
    m.scope.off();
    const $ = m.update = K.run.bind(K), se = m.job = K.runIfDirty.bind(K);
    se.i = m, se.id = m.uid, K.scheduler = () => Go(se), Wt(m, !0), $();
  }, D = (m, v, L) => {
    v.component = m;
    const H = m.vnode.props;
    m.vnode = v, m.next = null, wc(m, v.props, H, L), Cc(m, v.children, L), yt(), ai(m), wt();
  }, U = (m, v, L, H, V, N, q, G, K = !1) => {
    const $ = m && m.children, se = m ? m.shapeFlag : 0, Y = v.children, { patchFlag: ee, shapeFlag: re } = v;
    if (ee > 0) {
      if (ee & 128) {
        Z(
          $,
          Y,
          L,
          H,
          V,
          N,
          q,
          G,
          K
        );
        return;
      } else if (ee & 256) {
        j(
          $,
          Y,
          L,
          H,
          V,
          N,
          q,
          G,
          K
        );
        return;
      }
    }
    re & 8 ? (se & 16 && De($, V, N), Y !== $ && c(L, Y)) : se & 16 ? re & 16 ? Z(
      $,
      Y,
      L,
      H,
      V,
      N,
      q,
      G,
      K
    ) : De($, V, N, !0) : (se & 8 && c(L, ""), re & 16 && A(
      Y,
      L,
      H,
      V,
      N,
      q,
      G,
      K
    ));
  }, j = (m, v, L, H, V, N, q, G, K) => {
    m = m || fn, v = v || fn;
    const $ = m.length, se = v.length, Y = Math.min($, se);
    let ee;
    for (ee = 0; ee < Y; ee++) {
      const re = v[ee] = K ? Ct(v[ee]) : mt(v[ee]);
      _(
        m[ee],
        re,
        L,
        null,
        V,
        N,
        q,
        G,
        K
      );
    }
    $ > se ? De(
      m,
      V,
      N,
      !0,
      !1,
      Y
    ) : A(
      v,
      L,
      H,
      V,
      N,
      q,
      G,
      K,
      Y
    );
  }, Z = (m, v, L, H, V, N, q, G, K) => {
    let $ = 0;
    const se = v.length;
    let Y = m.length - 1, ee = se - 1;
    for (; $ <= Y && $ <= ee; ) {
      const re = m[$], me = v[$] = K ? Ct(v[$]) : mt(v[$]);
      if (Yt(re, me))
        _(
          re,
          me,
          L,
          null,
          V,
          N,
          q,
          G,
          K
        );
      else
        break;
      $++;
    }
    for (; $ <= Y && $ <= ee; ) {
      const re = m[Y], me = v[ee] = K ? Ct(v[ee]) : mt(v[ee]);
      if (Yt(re, me))
        _(
          re,
          me,
          L,
          null,
          V,
          N,
          q,
          G,
          K
        );
      else
        break;
      Y--, ee--;
    }
    if ($ > Y) {
      if ($ <= ee) {
        const re = ee + 1, me = re < se ? v[re].el : H;
        for (; $ <= ee; )
          _(
            null,
            v[$] = K ? Ct(v[$]) : mt(v[$]),
            L,
            me,
            V,
            N,
            q,
            G,
            K
          ), $++;
      }
    } else if ($ > ee)
      for (; $ <= Y; )
        ye(m[$], V, N, !0), $++;
    else {
      const re = $, me = $, xe = /* @__PURE__ */ new Map();
      for ($ = me; $ <= ee; $++) {
        const Xe = v[$] = K ? Ct(v[$]) : mt(v[$]);
        Xe.key != null && xe.set(Xe.key, $);
      }
      let we, ke = 0;
      const Pe = ee - me + 1;
      let rt = !1, ct = 0;
      const Fn = new Array(Pe);
      for ($ = 0; $ < Pe; $++) Fn[$] = 0;
      for ($ = re; $ <= Y; $++) {
        const Xe = m[$];
        if (ke >= Pe) {
          ye(Xe, V, N, !0);
          continue;
        }
        let ut;
        if (Xe.key != null)
          ut = xe.get(Xe.key);
        else
          for (we = me; we <= ee; we++)
            if (Fn[we - me] === 0 && Yt(Xe, v[we])) {
              ut = we;
              break;
            }
        ut === void 0 ? ye(Xe, V, N, !0) : (Fn[ut - me] = $ + 1, ut >= ct ? ct = ut : rt = !0, _(
          Xe,
          v[ut],
          L,
          null,
          V,
          N,
          q,
          G,
          K
        ), ke++);
      }
      const ei = rt ? Ac(Fn) : fn;
      for (we = ei.length - 1, $ = Pe - 1; $ >= 0; $--) {
        const Xe = me + $, ut = v[Xe], ti = v[Xe + 1], ni = Xe + 1 < se ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ti.el || ca(ti)
        ) : H;
        Fn[$] === 0 ? _(
          null,
          ut,
          L,
          ni,
          V,
          N,
          q,
          G,
          K
        ) : rt && (we < 0 || $ !== ei[we] ? ie(ut, L, ni, 2) : we--);
      }
    }
  }, ie = (m, v, L, H, V = null) => {
    const { el: N, type: q, transition: G, children: K, shapeFlag: $ } = m;
    if ($ & 6) {
      ie(m.component.subTree, v, L, H);
      return;
    }
    if ($ & 128) {
      m.suspense.move(v, L, H);
      return;
    }
    if ($ & 64) {
      q.move(m, v, L, Re);
      return;
    }
    if (q === de) {
      s(N, v, L);
      for (let Y = 0; Y < K.length; Y++)
        ie(K[Y], v, L, H);
      s(m.anchor, v, L);
      return;
    }
    if (q === lo) {
      I(m, v, L);
      return;
    }
    if (H !== 2 && $ & 1 && G)
      if (H === 0)
        G.persisted && !N[tt] ? s(N, v, L) : (G.beforeEnter(N), s(N, v, L), je(() => G.enter(N), V));
      else {
        const { leave: Y, delayLeave: ee, afterLeave: re } = G, me = () => {
          m.ctx.isUnmounted ? o(N) : s(N, v, L);
        }, xe = () => {
          const we = N._isLeaving || !!N[tt];
          N._isLeaving && N[tt](
            !0
            /* cancelled */
          ), G.persisted && !we ? me() : Y(N, () => {
            me(), re && re();
          });
        };
        ee ? ee(N, me, xe) : xe();
      }
    else
      s(N, v, L);
  }, ye = (m, v, L, H = !1, V = !1) => {
    const {
      type: N,
      props: q,
      ref: G,
      children: K,
      dynamicChildren: $,
      shapeFlag: se,
      patchFlag: Y,
      dirs: ee,
      cacheIndex: re,
      memo: me
    } = m;
    if (Y === -2 && (V = !1), G != null && (yt(), Nn(G, null, L, m, !0), wt()), re != null && (v.renderCache[re] = void 0), se & 256) {
      v.ctx.deactivate(m);
      return;
    }
    const xe = se & 1 && ee, we = !hn(m);
    let ke;
    if (we && (ke = q && q.onVnodeBeforeUnmount) && dt(ke, v, m), se & 6)
      $e(m.component, L, H);
    else {
      if (se & 128) {
        m.suspense.unmount(L, H);
        return;
      }
      xe && jt(m, null, v, "beforeUnmount"), se & 64 ? m.type.remove(
        m,
        v,
        L,
        Re,
        H
      ) : $ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !$.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (N !== de || Y > 0 && Y & 64) ? De(
        $,
        v,
        L,
        !1,
        !0
      ) : (N === de && Y & 384 || !V && se & 16) && De(K, v, L), H && Ze(m);
    }
    const Pe = me != null && re == null;
    (we && (ke = q && q.onVnodeUnmounted) || xe || Pe) && je(() => {
      ke && dt(ke, v, m), xe && jt(m, null, v, "unmounted"), Pe && (m.el = null);
    }, L);
  }, Ze = (m) => {
    const { type: v, el: L, anchor: H, transition: V } = m;
    if (v === de) {
      ae(L, H);
      return;
    }
    if (v === lo) {
      b(m);
      return;
    }
    const N = () => {
      o(L), V && !V.persisted && V.afterLeave && V.afterLeave();
    };
    if (m.shapeFlag & 1 && V && !V.persisted) {
      const { leave: q, delayLeave: G } = V, K = () => q(L, N);
      G ? G(m.el, N, K) : K();
    } else
      N();
  }, ae = (m, v) => {
    let L;
    for (; m !== v; )
      L = f(m), o(m), m = L;
    o(v);
  }, $e = (m, v, L) => {
    const { bum: H, scope: V, job: N, subTree: q, um: G, m: K, a: $ } = m;
    xi(K), xi($), H && ps(H), V.stop(), N && (N.flags |= 8, ye(q, m, v, L)), G && je(G, v), je(() => {
      m.isUnmounted = !0;
    }, v);
  }, De = (m, v, L, H = !1, V = !1, N = 0) => {
    for (let q = N; q < m.length; q++)
      ye(m[q], v, L, H, V);
  }, Ut = (m) => {
    if (m.shapeFlag & 6)
      return Ut(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const v = f(m.anchor || m.el), L = v && v[$l];
    return L ? f(L) : v;
  };
  let ue = !1;
  const qe = (m, v, L) => {
    let H;
    m == null ? v._vnode && (ye(v._vnode, null, null, !0), H = v._vnode.component) : _(
      v._vnode || null,
      m,
      v,
      null,
      null,
      null,
      L
    ), v._vnode = m, ue || (ue = !0, ai(H), Tl(), ue = !1);
  }, Re = {
    p: _,
    um: ye,
    m: ie,
    r: Ze,
    mt: Q,
    mc: A,
    pc: U,
    pbc: P,
    n: Ut,
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
function Wt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ic(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Jo(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (te(s) && te(o))
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
  t && t.pendingBranch ? te(e) ? t.effects.push(...e) : t.effects.push(e) : Er(e);
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
function Fs(e, t = !1) {
  Xn += e, e < 0 && Ye && t && (Ye.hasOnce = !0);
}
function da(e) {
  return e.dynamicChildren = Xn > 0 ? Ye || fn : null, kc(), Xn > 0 && Ye && Ye.push(e), e;
}
function R(e, t, n, s, o, i) {
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
function Yn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Yt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const fa = ({ key: e }) => e ?? null, ms = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Me(e) || /* @__PURE__ */ ve(e) || ce(e) ? { i: Ne, r: e, k: t, f: !!n } : e : null);
function z(e, t = null, n = null, s = 0, o = null, i = e === de ? 0 : 1, l = !1, a = !1) {
  const r = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && fa(t),
    ref: t && ms(t),
    scopeId: Pl,
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
  return a ? (Cs(r, n), i & 128 && e.normalize(r)) : n && (r.shapeFlag |= Me(n) ? 8 : 16), Xn > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  Ye && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (r.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  r.patchFlag !== 32 && Ye.push(r), r;
}
const J = Ec;
function Ec(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === Gl) && (e = Be), Yn(e)) {
    const a = Nt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Cs(a, n), Xn > 0 && !i && Ye && (a.shapeFlag & 6 ? Ye[Ye.indexOf(e)] = a : Ye.push(a)), a.patchFlag = -2, a;
  }
  if (jc(e) && (e = e.__vccOpts), t) {
    t = Tc(t);
    let { class: a, style: r } = t;
    a && !Me(a) && (t.class = be(a)), he(r) && (/* @__PURE__ */ Hs(r) && !te(r) && (r = Te({}, r)), t.style = ze(r));
  }
  const l = Me(e) ? 1 : ua(e) ? 128 : Vl(e) ? 64 : he(e) ? 4 : ce(e) ? 2 : 0;
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
function Nt(e, t, n = !1, s = !1) {
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
    ssContent: e.ssContent && Nt(e.ssContent),
    ssFallback: e.ssFallback && Nt(e.ssFallback),
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
  return J(Ks, null, e, t);
}
function ne(e = "", t = !1) {
  return t ? (C(), Ie(Be, null, e)) : J(Be, null, e);
}
function mt(e) {
  return e == null || typeof e == "boolean" ? J(Be) : te(e) ? J(
    de,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Yn(e) ? Ct(e) : J(Ks, null, String(e));
}
function Ct(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Nt(e);
}
function Cs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (te(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Cs(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !na(t) ? t._ctx = Ne : o === 3 && Ne && (Ne.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ce(t)) {
    if (s & 65) {
      Cs(e, { default: t });
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
        t.class !== s.class && (t.class = be([t.class, s.class]));
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
let Oc = 0;
function Nc(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Pc, i = {
    uid: Oc++,
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
let Oe = null;
const Qo = () => Oe || Ne;
let Ms, Io;
{
  const e = Vs(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((l) => l(i)) : o[0](i);
    };
  };
  Ms = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Oe = n
  ), Io = t(
    "__VUE_SSR_SETTERS__",
    (n) => bn = n
  );
}
const ss = (e) => {
  const t = Oe;
  return Ms(e), e.scope.on(), () => {
    e.scope.off(), Ms(t);
  };
}, Si = () => {
  Oe && Oe.scope.off(), Ms(null);
};
function pa(e) {
  return e.vnode.shapeFlag & 4;
}
let bn = !1;
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
    const o = e.setupContext = s.length > 1 ? Hc(e) : null, i = ss(e), l = es(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), a = il(l);
    if (wt(), i(), (a || e.sp) && !hn(e) && qo(e), a) {
      if (l.then(Si, Si), t)
        return l.then((r) => {
          Fi(e, r);
        }).catch((r) => {
          ts(r, e, 0);
        });
      e.asyncDep = l;
    } else
      Fi(e, l);
  } else
    ma(e);
}
function Fi(e, t, n) {
  ce(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : he(t) && (e.setupState = Al(t)), ma(e);
}
function ma(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || _t);
  {
    const o = ss(e);
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
const X = (e, t) => /* @__PURE__ */ Lr(e, t, bn);
function ha(e, t, n) {
  try {
    Fs(-1);
    const s = arguments.length;
    return s === 2 ? he(t) && !te(t) ? Yn(t) ? J(e, null, [t]) : J(e, t) : J(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Yn(n) && (n = [n]), J(e, t, n));
  } finally {
    Fs(1);
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
}, kt = "transition", Ln = "animation", Jn = /* @__PURE__ */ Symbol("_vtc"), _a = {
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
), zt = (e, t = []) => {
  te(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Li = (e) => e ? te(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Jc(e) {
  const t = {};
  for (const M in e)
    M in _a || (t[M] = e[M]);
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
  } = e, h = Qc(o), _ = h && h[0], F = h && h[1], {
    onBeforeEnter: y,
    onEnter: S,
    onEnterCancelled: I,
    onLeave: b,
    onLeaveCancelled: w,
    onBeforeAppear: k = y,
    onAppear: T = S,
    onAppearCancelled: A = I
  } = t, x = (M, E, Q, B) => {
    M._enterCancelled = B, Kt(M, E ? c : a), Kt(M, E ? u : l), Q && Q();
  }, P = (M, E) => {
    M._isLeaving = !1, Kt(M, d), Kt(M, p), Kt(M, f), E && E();
  }, O = (M) => (E, Q) => {
    const B = M ? T : S, W = () => x(E, M, Q);
    zt(B, [E, W]), Ii(() => {
      Kt(E, M ? r : i), St(E, M ? c : a), Li(B) || Ai(E, s, _, W);
    });
  };
  return Te(t, {
    onBeforeEnter(M) {
      zt(y, [M]), St(M, i), St(M, l);
    },
    onBeforeAppear(M) {
      zt(k, [M]), St(M, r), St(M, u);
    },
    onEnter: O(!1),
    onAppear: O(!0),
    onLeave(M, E) {
      M._isLeaving = !0;
      const Q = () => P(M, E);
      St(M, d), M._enterCancelled ? (St(M, f), Ei(M)) : (Ei(M), St(M, f)), Ii(() => {
        M._isLeaving && (Kt(M, d), St(M, p), Li(b) || Ai(M, s, F, Q));
      }), zt(b, [M, Q]);
    },
    onEnterCancelled(M) {
      x(M, !1, void 0, !0), zt(I, [M]);
    },
    onAppearCancelled(M) {
      x(M, !0, void 0, !0), zt(A, [M]);
    },
    onLeaveCancelled(M) {
      P(M), zt(w, [M]);
    }
  });
}
function Qc(e) {
  if (e == null)
    return null;
  if (he(e))
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
function Kt(e, t) {
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
  const n = window.getComputedStyle(e), s = (h) => (n[h] || "").split(", "), o = s(`${kt}Delay`), i = s(`${kt}Duration`), l = Di(o, i), a = s(`${Ln}Delay`), r = s(`${Ln}Duration`), u = Di(a, r);
  let c = null, d = 0, f = 0;
  t === kt ? l > 0 && (c = kt, d = l, f = i.length) : t === Ln ? u > 0 && (c = Ln, d = u, f = r.length) : (d = Math.max(l, u), c = d > 0 ? l > u ? kt : Ln : null, f = c ? c === kt ? i.length : r.length : 0);
  const p = c === kt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${kt}Property`).toString()
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
const Ls = /* @__PURE__ */ Symbol("_vod"), ba = /* @__PURE__ */ Symbol("_vsh"), Is = {
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
  e.style.display = t ? e[Ls] : "none", e[ba] = !t;
}
const nu = /* @__PURE__ */ Symbol(""), su = /(?:^|;)\s*display\s*:/;
function ou(e, t, n) {
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
      a != null ? lu(
        e,
        l,
        !Me(t) && t ? t[l] : void 0,
        a
      ) || kn(s, l, a) : kn(s, l, "");
    }
  } else if (o) {
    if (t !== n) {
      const l = s[nu];
      l && (n += ";" + l), s.cssText = n, i = su.test(n);
    }
  } else t && e.removeAttribute("style");
  Ls in e && (e[Ls] = i ? s.display : "", e[ba] && (s.display = "none"));
}
const Ti = /\s*!important$/;
function kn(e, t, n) {
  if (te(n))
    n.forEach((s) => kn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = iu(e, t);
    Ti.test(n) ? e.setProperty(
      $t(s),
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
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Me(s) && n === s;
}
const Pi = "http://www.w3.org/1999/xlink";
function Oi(e, t, n, s, o, i = Ya(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Pi, t.slice(6, t.length)) : e.setAttributeNS(Pi, t, n) : n == null || i && !cl(n) ? e.removeAttribute(t) : e.setAttribute(
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
function Jt(e, t, n, s) {
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
      Jt(e, a, u, r);
    } else l && (au(e, a, l, r), i[t] = void 0);
  }
}
const cu = /(Once|Passive|Capture)$/, uu = /^on:?(?:Once|Passive|Capture)$/;
function du(e) {
  let t, n;
  for (; (n = e.match(cu)) && !uu.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : $t(e.slice(2)), t];
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
  return n.value = e, n.attached = pu(), n;
}
const Vi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, hu = (e, t, n, s, o, i) => {
  const l = o === "svg";
  t === "class" ? tu(e, s, l) : t === "style" ? ou(e, n, s) : Es(t) ? Ts(t) || ru(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : gu(e, t, s, l)) ? (Ni(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Oi(e, t, s, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (_u(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Me(s))) ? Ni(e, Ke(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Oi(e, t, s, l));
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
  return Vi(t) && Me(n) ? !1 : t in e;
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
const As = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return te(t) ? (n) => ps(t, n) : t;
};
function bu(e) {
  e.target.composing = !0;
}
function Bi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const gn = /* @__PURE__ */ Symbol("_assign");
function Hi(e, t, n) {
  return t && (e = e.trim()), n && (e = $s(e)), e;
}
const vt = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[gn] = As(o);
    const i = s || o.props && o.props.type === "number";
    Jt(e, t ? "change" : "input", (l) => {
      l.target.composing || e[gn](Hi(e.value, n, i));
    }), (n || i) && Jt(e, "change", () => {
      e.value = Hi(e.value, n, i);
    }), t || (Jt(e, "compositionstart", bu), Jt(e, "compositionend", Bi), Jt(e, "change", Bi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: i } }, l) {
    if (e[gn] = As(l), e.composing) return;
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
    Jt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? $s(Ds(l)) : Ds(l)
      );
      e[gn](
        e.multiple ? o ? new Set(i) : i : i[0]
      ), e._assigning = !0, wn(() => {
        e._assigning = !1;
      });
    }), e[gn] = As(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ui(e, t);
  },
  beforeUpdate(e, t, n) {
    e[gn] = As(n);
  },
  updated(e, { value: t }) {
    e._assigning || Ui(e, t);
  }
};
function Ui(e, t) {
  const n = e.multiple, s = te(t);
  if (!(n && !s && !Rs(t))) {
    for (let o = 0, i = e.options.length; o < i; o++) {
      const l = e.options[o], a = Ds(l);
      if (n)
        if (s) {
          const r = typeof a;
          r === "string" || r === "number" ? l.selected = t.some((u) => String(u) === String(a)) : l.selected = Qa(t, a) > -1;
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
}, hs = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const i = $t(o.key);
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
}, Pu = { class: "fil-cp-hex-row" }, Ou = {
  class: "fil-cp-presets",
  role: "listbox",
  "aria-label": "Preset colors"
}, Nu = ["aria-selected", "aria-label", "title", "onClick"], $u = /* @__PURE__ */ Ce({
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
    ], s = e, o = t, i = X(() => s.presets ?? n);
    function l(E) {
      o("update:modelValue", E);
    }
    function a(E) {
      return Math.min(1, Math.max(0, E));
    }
    function r(E) {
      const Q = /^#?([0-9a-f]{6})$/i.exec(E.trim());
      if (!Q) return null;
      const B = parseInt(Q[1], 16);
      return [B >> 16 & 255, B >> 8 & 255, B & 255];
    }
    function u(E, Q, B) {
      const W = (D) => Math.round(a(D / 255) * 255).toString(16).padStart(2, "0");
      return `#${W(E)}${W(Q)}${W(B)}`;
    }
    function c(E, Q, B) {
      const W = E / 255, D = Q / 255, U = B / 255, j = Math.max(W, D, U), Z = Math.min(W, D, U), ie = j - Z;
      let ye = 0;
      ie !== 0 && (j === W ? ye = (D - U) / ie % 6 : j === D ? ye = (U - W) / ie + 2 : ye = (W - D) / ie + 4, ye *= 60, ye < 0 && (ye += 360));
      const Ze = j === 0 ? 0 : ie / j;
      return [ye, Ze, j];
    }
    function d(E, Q, B) {
      const W = B * Q, D = W * (1 - Math.abs(E / 60 % 2 - 1)), U = B - W;
      let [j, Z, ie] = [0, 0, 0];
      return E < 60 ? [j, Z, ie] = [W, D, 0] : E < 120 ? [j, Z, ie] = [D, W, 0] : E < 180 ? [j, Z, ie] = [0, W, D] : E < 240 ? [j, Z, ie] = [0, D, W] : E < 300 ? [j, Z, ie] = [D, 0, W] : [j, Z, ie] = [W, 0, D], [(j + U) * 255, (Z + U) * 255, (ie + U) * 255];
    }
    const f = /* @__PURE__ */ le(0), p = /* @__PURE__ */ le(0), h = /* @__PURE__ */ le(0), _ = /* @__PURE__ */ le(s.modelValue);
    function F(E) {
      const Q = r(E);
      if (!Q) return;
      const [B, W, D] = c(...Q);
      f.value = B, p.value = W, h.value = D, _.value = u(...Q);
    }
    He(() => s.modelValue, (E) => F(E), { immediate: !0 });
    const y = X(() => u(...d(f.value, p.value, h.value)));
    function S() {
      o("update:modelValue", y.value), _.value = y.value;
    }
    function I() {
      const E = r(_.value);
      if (!E) {
        _.value = y.value;
        return;
      }
      const [Q, B, W] = c(...E);
      f.value = Q, p.value = B, h.value = W, o("update:modelValue", u(...E));
    }
    const b = /* @__PURE__ */ le(null), w = /* @__PURE__ */ le(null);
    function k(E) {
      const Q = b.value;
      if (!Q) return;
      const B = Q.getBoundingClientRect();
      p.value = a((E.clientX - B.left) / B.width), h.value = a(1 - (E.clientY - B.top) / B.height), S();
    }
    function T(E) {
      const Q = w.value;
      if (!Q) return;
      const B = Q.getBoundingClientRect();
      f.value = a((E.clientX - B.left) / B.width) * 360, S();
    }
    function A(E) {
      E.preventDefault(), k(E);
      const Q = (W) => k(W), B = () => {
        window.removeEventListener("pointermove", Q), window.removeEventListener("pointerup", B);
      };
      window.addEventListener("pointermove", Q), window.addEventListener("pointerup", B);
    }
    function x(E) {
      E.preventDefault(), T(E);
      const Q = (W) => T(W), B = () => {
        window.removeEventListener("pointermove", Q), window.removeEventListener("pointerup", B);
      };
      window.addEventListener("pointermove", Q), window.addEventListener("pointerup", B);
    }
    const P = X(() => `hsl(${f.value}, 100%, 50%)`), O = X(() => ({
      left: `${p.value * 100}%`,
      top: `${(1 - h.value) * 100}%`
    })), M = X(() => ({ left: `${f.value / 360 * 100}%` }));
    return (E, Q) => (C(), R("div", Ru, [
      z("div", {
        ref_key: "svRef",
        ref: b,
        class: "fil-cp-sv",
        style: ze({ background: P.value }),
        onPointerdown: A
      }, [
        Q[1] || (Q[1] = z("div", { class: "fil-cp-sv-white" }, null, -1)),
        Q[2] || (Q[2] = z("div", { class: "fil-cp-sv-black" }, null, -1)),
        z("div", {
          class: "fil-cp-sv-thumb",
          style: ze(O.value)
        }, null, 4)
      ], 36),
      z("div", {
        ref_key: "hueRef",
        ref: w,
        class: "fil-cp-hue",
        onPointerdown: x
      }, [
        z("div", {
          class: "fil-cp-hue-thumb",
          style: ze(M.value)
        }, null, 4)
      ], 544),
      z("div", Pu, [
        z("span", {
          class: "fil-cp-swatch",
          style: ze({ background: y.value })
        }, null, 4),
        Ge(z("input", {
          "onUpdate:modelValue": Q[0] || (Q[0] = (B) => _.value = B),
          class: "fil-cp-hex-input",
          type: "text",
          spellcheck: "false",
          "aria-label": "Hex color",
          onKeydown: hs(I, ["enter"]),
          onBlur: I
        }, null, 544), [
          [vt, _.value]
        ])
      ]),
      z("div", Ou, [
        (C(!0), R(de, null, Ae(i.value, (B) => (C(), R("button", {
          key: B,
          class: be(["fil-color-swatch", { "is-active": e.modelValue === B }]),
          style: ze({ "--swatch": B }),
          "aria-selected": e.modelValue === B,
          "aria-label": B,
          title: B,
          onClick: (W) => l(B)
        }, null, 14, Nu))), 128))
      ])
    ]));
  }
}), Le = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Vu = /* @__PURE__ */ Le($u, [["__scopeId", "data-v-c4d5f476"]]), Ki = "__fil_color_picker_popup__";
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
function Vt(e, t = {}) {
  const s = e.prototype;
  if (s._filStyled) return;
  s._filStyled = !0, t.minSize && (s.minSize = t.minSize), s._filFamily = t.family ?? Uu, s._filDescription = t.description ?? "", t.badges && (s.badges = t.badges), s.color = Mt.accent, s.bgcolor = Mt.panelAlt;
  const o = s.onNodeCreated;
  s.onNodeCreated = function(...l) {
    const a = o == null ? void 0 : o.apply(this, l);
    return this.color = Mt.accent, this.bgcolor = Mt.panelAlt, a;
  }, s.onDrawTitleBar = function(l, a, r, u, c) {
    var h;
    const d = ((h = globalThis.LiteGraph) == null ? void 0 : h.ROUND_RADIUS) ?? 8, f = !!this.collapsed;
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
function cn(e, ...t) {
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
    ko(o) && ko(s) && e.hasOwnProperty(n) && !/* @__PURE__ */ ve(s) && !/* @__PURE__ */ bt(s) ? e[n] = Eo(o, s) : e[n] = s;
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
const { assign: Tt } = Object;
function Gu(e) {
  return !!(/* @__PURE__ */ ve(e) && e.effect);
}
function qu(e, t, n, s) {
  const { state: o, actions: i, getters: l } = t, a = n.state.value[e];
  let r;
  function u() {
    a || (n.state.value[e] = o ? o() : {});
    const c = /* @__PURE__ */ xr(n.state.value[e]);
    return Tt(c, i, Object.keys(l || {}).reduce((d, f) => (d[f] = Ko(X(() => {
      Ys(n);
      const p = n._s.get(e);
      return l[f].call(p, p);
    })), d), {}));
  }
  return r = Ca(e, u, t, n, s, !0), r;
}
function Ca(e, t, n = {}, s, o, i) {
  let l;
  const a = Tt({ actions: {} }, n), r = { deep: !0 };
  let u, c, d = [], f = [], p;
  const h = s.state.value[e];
  !i && !h && (s.state.value[e] = {});
  let _;
  function F(A) {
    let x;
    u = c = !1, typeof A == "function" ? (A(s.state.value[e]), x = {
      type: Un.patchFunction,
      storeId: e,
      events: p
    }) : (Eo(s.state.value[e], A), x = {
      type: Un.patchObject,
      payload: A,
      storeId: e,
      events: p
    });
    const P = _ = Symbol();
    wn().then(() => {
      _ === P && (u = !0);
    }), c = !0, cn(d, x, s.state.value[e]);
  }
  const y = i ? function() {
    const { state: x } = n, P = x ? x() : {};
    this.$patch((O) => {
      Tt(O, P);
    });
  } : (
    /* istanbul ignore next */
    Fa
  );
  function S() {
    l.stop(), d = [], f = [], s._s.delete(e);
  }
  const I = (A, x = "") => {
    if (qi in A)
      return A[uo] = x, A;
    const P = function() {
      Ys(s);
      const O = Array.from(arguments), M = [], E = [];
      function Q(D) {
        M.push(D);
      }
      function B(D) {
        E.push(D);
      }
      cn(f, {
        args: O,
        name: P[uo],
        store: w,
        after: Q,
        onError: B
      });
      let W;
      try {
        W = A.apply(this && this.$id === e ? this : w, O);
      } catch (D) {
        throw cn(E, D), D;
      }
      return W instanceof Promise ? W.then((D) => (cn(M, D), D)).catch((D) => (cn(E, D), Promise.reject(D))) : (cn(M, W), W);
    };
    return P[qi] = !0, P[uo] = x, P;
  }, b = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Gi.bind(null, f),
    $patch: F,
    $reset: y,
    $subscribe(A, x = {}) {
      const P = Gi(d, A, x.detached, () => O()), O = l.run(() => He(() => s.state.value[e], (M) => {
        (x.flush === "sync" ? c : u) && A({
          storeId: e,
          type: Un.direct,
          events: p
        }, M);
      }, Tt({}, r, x)));
      return P;
    },
    $dispose: S
  }, w = /* @__PURE__ */ nn(b);
  s._s.set(e, w);
  const T = (s._a && s._a.runWithContext || Wu)(() => s._e.run(() => (l = pl()).run(() => t({ action: I }))));
  for (const A in T) {
    const x = T[A];
    if (/* @__PURE__ */ ve(x) && !Gu(x) || /* @__PURE__ */ bt(x))
      i || (h && Ku(x) && (/* @__PURE__ */ ve(x) ? x.value = h[A] : Eo(x, h[A])), s.state.value[e][A] = x);
    else if (typeof x == "function") {
      const P = I(x, A);
      T[A] = P, a.actions[A] = x;
    }
  }
  return Tt(w, T), Tt(/* @__PURE__ */ pe(w), T), Object.defineProperty(w, "$state", {
    get: () => s.state.value[e],
    set: (A) => {
      F((x) => {
        Tt(x, A);
      });
    }
  }), s._p.forEach((A) => {
    Tt(w, l.run(() => A({
      store: w,
      app: s._a,
      pinia: s,
      options: a
    })));
  }), h && i && n.hydrate && n.hydrate(w.$state, h), u = !0, c = !0, w;
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
    a || (u ? On(xa, null) : null), a && Ys(a), a = wa, a._s.has(s) || (i ? Ca(s, t, o, a) : qu(s, o, a)), a._s.get(s);
  }
  return l.$id = s, l;
}
function Xu(e) {
  {
    const t = /* @__PURE__ */ pe(e), n = {};
    for (const s in t) {
      const o = t[s];
      o.effect ? n[s] = // ...
      X({
        get: () => e[s],
        set(i) {
          e[s] = i;
        }
      }) : (/* @__PURE__ */ ve(o) || /* @__PURE__ */ bt(o)) && (n[s] = // ---
      /* @__PURE__ */ Cr(e, s));
    }
    return n;
  }
}
let Qt = null;
function Yu(e) {
  return Qt || (Qt = Sa(), Qt);
}
function Js() {
  return Qt || (Qt = Sa()), Qt;
}
const Ju = { class: "fil-node-shell" }, Qu = /* @__PURE__ */ Ce({
  __name: "FilNodeShell",
  props: {
    root: {},
    state: {},
    comfyClass: {}
  },
  setup(e) {
    return (t, n) => (C(), R("div", Ju, [
      (C(), Ie(nc(e.root), { state: e.state }, null, 8, ["state"]))
    ]));
  }
}), Zu = /* @__PURE__ */ Le(Qu, [["__scopeId", "data-v-15f48dad"]]), ed = "__filVueMounted";
function ln(e, t, n, s) {
  const o = e;
  if (typeof o.addDOMWidget != "function")
    return console.warn(`[FiL_Design_ImageMind] domWidgetHost: node.addDOMWidget not available for "${t}" — ComfyUI core too old?`), null;
  const i = document.createElement("div");
  i.className = "fil-vue-host", i.style.width = "100%", i.style.boxSizing = "border-box", i.style.height = "auto", i[ed] = !0, i.addEventListener(
    "wheel",
    (y) => {
      var I, b;
      const S = (b = (I = globalThis.app) == null ? void 0 : I.canvas) == null ? void 0 : b.canvas;
      S instanceof HTMLCanvasElement && (y.preventDefault(), S.dispatchEvent(new WheelEvent("wheel", {
        deltaX: y.deltaX,
        deltaY: y.deltaY,
        deltaZ: y.deltaZ,
        deltaMode: y.deltaMode,
        clientX: y.clientX,
        clientY: y.clientY,
        bubbles: !0,
        cancelable: !0
      })));
    },
    { passive: !1 }
  );
  const l = /* @__PURE__ */ nn(s.state);
  let a = s.height;
  const r = () => {
    const y = i.firstElementChild;
    return !y || y.clientHeight === 0 || (a = Math.ceil(y.scrollHeight / 4) * 4), a;
  }, u = o.addDOMWidget(t, "custom", i, {
    hideOnZoom: !0,
    getValue: () => l,
    setValue: (y) => {
      y && typeof y == "object" && Object.assign(l, y);
    },
    getHeight: r,
    ...s.onDraw ? { onDraw: s.onDraw } : {}
  }), c = qs(Zu, { root: n, state: l, comfyClass: o.comfyClass ?? "default" }).use(Js());
  c.mount(i);
  function d() {
    var b, w;
    if (r(), !o.computeSize || !o.setSize || !o.size) return;
    const [y, S] = o.size, [, I] = o.computeSize();
    Math.abs(I - S) < 2 || (o.setSize([y, I]), (w = (b = o.graph) == null ? void 0 : b.setDirtyCanvas) == null || w.call(b, !0, !0));
  }
  let f = 0;
  const p = new ResizeObserver(() => {
    f || (f = requestAnimationFrame(() => {
      f = 0, d();
    }));
  });
  p.observe(i);
  let h = 20;
  (function y() {
    d(), h-- > 0 && requestAnimationFrame(y);
  })();
  const _ = { widget: u, host: i, app: c, state: l, unmount: F };
  function F() {
    p.disconnect(), f && cancelAnimationFrame(f);
    try {
      this.app.unmount();
    } catch (y) {
      console.warn(`[FiL_Design_ImageMind] unmount failed for "${t}":`, y);
    }
    for (; this.host.firstChild; ) this.host.removeChild(this.host.firstChild);
  }
  return _.unmount = F.bind(_), o._filVueApps ?? (o._filVueApps = {}), o._filVueApps[t] = _, _;
}
function an(e) {
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
function _e(e, t, n) {
  if (!e) return n;
  const s = e.value;
  return t === "number" && typeof s == "number" && Number.isFinite(s) || t === "boolean" && typeof s == "boolean" || t === "string" && typeof s == "string" ? s : (console.warn(
    `[FiL_Design_ImageMind] widget "${e.name}" had a corrupted value (expected ${t}) — resetting to default. This usually means the workflow was saved with an older version of this node.`
  ), e.value = n, n);
}
const Xi = 4, td = {
  info: 3500,
  success: 3e3,
  warning: 5e3,
  error: 6e3
};
let nd = 1;
const Ot = /* @__PURE__ */ Zo("fil/toast", () => {
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
    return e.value.length < Xi ? e.value.push(f) : t.value.push(f), f;
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
    e.value = e.value.filter((c) => c.id !== u), t.value.length > 0 && e.value.length < Xi && e.value.push(t.value.shift());
  }
  function r() {
    e.value = [], t.value = [];
  }
  return { items: e, queue: t, info: s, success: o, warning: i, error: l, push: n, dismiss: a, dismissAll: r };
});
function sd() {
  var t, n;
  return ((n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.toast) ?? null;
}
function cs(e, t) {
  const n = sd();
  if (n != null && n.addAlert && (e === "info" || e === "success" || e === "warning" || e === "error"))
    try {
      n.addAlert(t);
      return;
    } catch (s) {
      console.warn("[FiL_Design_ImageMind toast] extensionManager.toast failed:", s);
    }
  Ot().push(e, t, {});
}
const st = {
  info: (e) => cs("info", e),
  success: (e) => cs("success", e),
  warning: (e) => cs("warning", e),
  error: (e) => cs("error", e),
  // Direct Pinia access for Vue components that want actions/sticky/toasts.
  infoRich: (e, t) => Ot().info(e, t),
  successRich: (e, t) => Ot().success(e, t),
  warningRich: (e, t) => Ot().warning(e, t),
  errorRich: (e, t) => Ot().error(e, t),
  dismissAll: () => Ot().dismissAll()
}, od = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  toast: st,
  useToastStore: Ot
}, Symbol.toStringTag, { value: "Module" }));
function Yi() {
  var t, n, s, o, i, l, a, r;
  return !!(((o = (s = (n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.setting) == null ? void 0 : s.get) == null ? void 0 : o.call(s, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? ((r = (a = (l = (i = globalThis.app) == null ? void 0 : i.ui) == null ? void 0 : l.settings) == null ? void 0 : a.getSettingValue) == null ? void 0 : r.call(a, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? !0);
}
function Ji() {
  function e(s, o, i, l) {
  }
  function t(s, o, i, l) {
    Yi() && st.success("Connected");
  }
  function n(s, o) {
    Yi() && st.info("Disconnected");
  }
  return { onConnectionsChange: e, onConnect: t, onDisconnect: n };
}
function Bt(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype, n = t.onNodeCreated;
  t.onNodeCreated = function(...i) {
    const l = n == null ? void 0 : n.apply(this, i);
    return this.color, l;
  };
  const s = t.onConnect;
  t.onConnect = function(...i) {
    const { onConnect: l } = Ji();
    return l(...i), s == null ? void 0 : s.apply(this, i);
  };
  const o = t.onDisconnect;
  t.onDisconnect = function(...i) {
    const { onDisconnect: l } = Ji();
    return l(...i), o == null ? void 0 : o.apply(this, i);
  };
}
const id = /* @__PURE__ */ sn(() => Promise.resolve().then(() => pm)), ld = {
  id: "FiLSeed",
  register(e, t) {
    Vt(e, {
      minSize: [220, 220],
      family: "value",
      description: "Fixed or randomized seed with copy and reuse buttons.",
      badges: [{ text: "seed" }]
    });
    const s = e.prototype, o = s.onNodeCreated;
    s.onNodeCreated = function(...a) {
      const r = o == null ? void 0 : o.apply(this, a), u = this, c = fe(u, "seed"), d = _e(c, "number", 0);
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
      return u._filSeedState = p, ln(u, "fil_seed_view", id, { state: p, height: 185 }), r;
    };
    const i = s.onConfigure;
    s.onConfigure = function(...a) {
      const r = i == null ? void 0 : i.apply(this, a), u = this, c = u._filSeedState;
      return c && (c.nodeState.seed = _e(fe(u, "seed"), "number", 0)), r;
    };
    const l = s.onRemoved;
    s.onRemoved = function(...a) {
      return an(this), l == null ? void 0 : l.apply(this, a);
    }, Bt(e);
  }
}, ad = /* @__PURE__ */ sn(() => Promise.resolve().then(() => Sm)), rd = {
  id: "FiLProviderLoader",
  register(e, t) {
    Vt(e, {
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
      const u = i == null ? void 0 : i.apply(this, r), c = this, d = _e(fe(c, "provider"), "string", "ollama"), f = _e(fe(c, "model"), "string", "(loading...)"), p = _e(fe(c, "temperature"), "number", 0.7), h = _e(fe(c, "max_tokens"), "number", 0), _ = _e(fe(c, "rate_limit_ms"), "number", 100), F = _e(fe(c, "max_image_side"), "number", 1024);
      for (const S of ["provider", "model", "refresh_models", "temperature", "max_tokens", "rate_limit_ms", "seed", "control_after_generate", "max_image_side"]) {
        const I = fe(c, S);
        I && (I.hidden = !0);
      }
      const y = {
        nodeState: Sn(c, {
          provider: d,
          model: f,
          temperature: p,
          max_tokens: h,
          rate_limit_ms: _,
          max_image_side: F
        }),
        initialValues: {
          provider: d,
          model: f,
          temperature: p,
          max_tokens: h,
          rate_limit_ms: _,
          max_image_side: F
        },
        ui: {}
      };
      return Object.defineProperty(y, "node", { value: c, enumerable: !1, configurable: !0 }), c._filProviderState = y, ln(c, "fil_provider_view", ad, { state: y, height: 340 }), u;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...r) {
      const u = l == null ? void 0 : l.apply(this, r), c = this, d = c._filProviderState;
      if (!d) return u;
      const f = d.nodeState;
      for (const { name: p, kind: h, fallback: _ } of o)
        f[p] = _e(fe(c, p), h, _);
      return u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...r) {
      return an(this), a == null ? void 0 : a.apply(this, r);
    }, Bt(e);
  }
}, cd = /* @__PURE__ */ sn(() => Promise.resolve().then(() => Vm)), ud = {
  id: "FiLOpticScanner",
  register(e, t) {
    Vt(e, {
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
      for (const y of o) {
        const S = fe(c, y);
        if (!S) continue;
        const I = _e(S, "string", "");
        d[y] = I, f[y] = I, S.hidden = !0;
      }
      const p = fe(c, "seed"), h = fe(c, "control_after_generate"), _ = _e(p, "number", -1);
      p && (p.hidden = !0), h && (h.hidden = !0), d.seed = _, f.seed = _, f.seed_mode = "random";
      const F = {
        nodeState: Sn(c, f),
        initialValues: d,
        ui: {},
        lastRunSeed: null
      };
      return c._filScannerSeedState = F, ln(c, "fil_scanner_view", cd, { state: F, height: 460 }), u;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...r) {
      const u = l == null ? void 0 : l.apply(this, r), c = this, d = c._filScannerSeedState;
      if (!d) return u;
      for (const f of o) {
        const p = fe(c, f);
        p && (d.nodeState[f] = _e(p, "string", ""));
      }
      return d.nodeState.seed = _e(fe(c, "seed"), "number", -1), u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...r) {
      return an(this), a == null ? void 0 : a.apply(this, r);
    }, Bt(e);
  }
}, dd = /* @__PURE__ */ sn(() => Promise.resolve().then(() => Gm)), fd = {
  id: "FiLNeuroCleaner",
  register(e, t) {
    Vt(e, {
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
      for (const h of Object.keys(o)) {
        const _ = fe(c, h), F = _e(_, "boolean", o[h]);
        d[h] = F, f[h] = F, _ && (_.hidden = !0);
      }
      const p = { nodeState: Sn(c, d), initialValues: f, ui: {} };
      return c._filCleanerState = p, ln(c, "fil_cleaner_view", dd, { state: p, height: 460 }), u;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...r) {
      const u = l == null ? void 0 : l.apply(this, r), c = this, d = c._filCleanerState;
      if (!d) return u;
      for (const f of Object.keys(o))
        d.nodeState[f] = _e(fe(c, f), "boolean", o[f]);
      return u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...r) {
      return an(this), a == null ? void 0 : a.apply(this, r);
    }, Bt(e);
  }
}, pd = /* @__PURE__ */ sn(() => Promise.resolve().then(() => eh)), md = {
  id: "FiLBeforeAfterCompare",
  register(e, t) {
    Vt(e, {
      minSize: [340, 500],
      family: "image",
      description: "Before/after viewer (wipe, side-by-side, overlay, difference) with optional output resizing.",
      badges: [{ text: "compare", color: "#62c987", text_color: "#1a1a1a" }]
    });
    const s = e.prototype, o = s.onNodeCreated;
    s.onNodeCreated = function(...a) {
      const r = o == null ? void 0 : o.apply(this, a), u = this, c = fe(u, "swap"), d = fe(u, "resize_mode"), f = fe(u, "max_resolution"), p = {
        swap: _e(c, "boolean", !1),
        resize_mode: _e(d, "string", "Off"),
        max_resolution: _e(f, "number", 4096)
      };
      for (const y of [c, d, f])
        y && (y.hidden = !0);
      const h = {
        nodeState: Sn(u, p),
        initialValues: { ...p },
        ui: {
          compare_mode: "wipe",
          compare_position: 0.5,
          compare_opacity: 0.5,
          settings_collapsed: !0
        }
      };
      u._filCompareState = h;
      const _ = ln(u, "fil_compare_view", pd, { state: h, height: 380 }), F = u.onExecuted;
      return u.onExecuted = function(y) {
        const S = F == null ? void 0 : F.apply(this, [y]), I = y;
        return _ && I && (_.state.ui.compare_images = { a: I.a_images ?? [], b: I.b_images ?? [] }), S;
      }, r;
    };
    const i = s.onConfigure;
    s.onConfigure = function(...a) {
      const r = i == null ? void 0 : i.apply(this, a), u = this, c = u._filCompareState;
      return c && (c.nodeState.swap = _e(fe(u, "swap"), "boolean", !1), c.nodeState.resize_mode = _e(fe(u, "resize_mode"), "string", "Off"), c.nodeState.max_resolution = _e(fe(u, "max_resolution"), "number", 4096)), r;
    };
    const l = s.onRemoved;
    s.onRemoved = function(...a) {
      return an(this), l == null ? void 0 : l.apply(this, a);
    }, Bt(e);
  }
}, hd = /* @__PURE__ */ sn(() => Promise.resolve().then(() => uh)), gd = {
  id: "FiLUpscaleTileCalc",
  register(e, t) {
    Vt(e, {
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
      const d = a == null ? void 0 : a.apply(this, c), f = this, p = {}, h = {};
      for (const F of Object.keys(o)) {
        const y = fe(f, F);
        if (!y) continue;
        const S = _e(y, "number", o[F]);
        p[F] = S, h[F] = S, y.hidden = !0;
      }
      for (const F of Object.keys(i)) {
        const y = fe(f, F);
        if (!y) continue;
        const S = _e(y, "boolean", i[F]);
        p[F] = S, h[F] = S, y.hidden = !0;
      }
      for (const F of Object.keys(l)) {
        const y = fe(f, F);
        if (!y) continue;
        const S = _e(y, "string", l[F]);
        p[F] = S, h[F] = S, y.hidden = !0;
      }
      const _ = { nodeState: Sn(f, p), initialValues: h, ui: {} };
      return f._filUpscaleState = _, ln(f, "fil_upscale_view", hd, { state: _, height: 420 }), d;
    };
    const r = s.onConfigure;
    s.onConfigure = function(...c) {
      const d = r == null ? void 0 : r.apply(this, c), f = this, p = f._filUpscaleState;
      if (!p) return d;
      for (const h of Object.keys(o))
        p.nodeState[h] = _e(fe(f, h), "number", o[h]);
      for (const h of Object.keys(i))
        p.nodeState[h] = _e(fe(f, h), "boolean", i[h]);
      for (const h of Object.keys(l))
        p.nodeState[h] = _e(fe(f, h), "string", l[h]);
      return d;
    };
    const u = s.onRemoved;
    s.onRemoved = function(...c) {
      return an(this), u == null ? void 0 : u.apply(this, c);
    }, Bt(e);
  }
}, _d = {
  id: "FiLKSampler",
  register(e, t) {
    Vt(e, {
      minSize: [270, 260],
      family: "sampling",
      description: "Full sampler/scheduler set, passthrough outputs, preview, HighRes-fix script.",
      badges: [{ text: "sampler", color: "#7aa2f7", text_color: "#0b0e14" }]
    }), Bt(e);
  }
}, bd = /* @__PURE__ */ sn(() => Promise.resolve().then(() => mh)), To = {
  upscale_by: 1.25,
  denoise: 0.56,
  iterations: 1,
  strength: 1
}, Ro = {
  upscale_type: "latent",
  hires_ckpt_name: "(use same)",
  latent_upscaler: "nearest-exact",
  pixel_upscaler: "",
  control_net_name: ""
}, Po = {
  use_same_seed: !0,
  use_controlnet: !1
}, vd = [
  ...Object.keys(To),
  ...Object.keys(Ro),
  ...Object.keys(Po)
], yd = {
  id: "FiLHighResFix",
  register(e, t) {
    Vt(e, {
      minSize: [320, 380],
      family: "sampling",
      description: "Latent/pixel upscale + re-sample settings, packed into a script for FiLKSampler.",
      badges: [{ text: "hires", color: "#bb9af7", text_color: "#0b0e14" }]
    });
    const s = e.prototype, o = (r, u) => {
      for (const c of Object.keys(To))
        u[c] = _e(fe(r, c), "number", To[c]);
      for (const c of Object.keys(Ro))
        u[c] = _e(fe(r, c), "string", Ro[c]);
      for (const c of Object.keys(Po))
        u[c] = _e(fe(r, c), "boolean", Po[c]);
    }, i = s.onNodeCreated;
    s.onNodeCreated = function(...r) {
      const u = i == null ? void 0 : i.apply(this, r), c = this, d = {};
      o(c, d);
      for (const p of vd) {
        const h = fe(c, p);
        h && (h.hidden = !0);
      }
      const f = {
        nodeState: Sn(c, d),
        initialValues: { ...d },
        ui: {}
      };
      return Object.defineProperty(f, "node", { value: c, enumerable: !1, configurable: !0 }), c._filHiResFixState = f, ln(c, "fil_hiresfix_view", bd, { state: f, height: 360 }), u;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...r) {
      const u = l == null ? void 0 : l.apply(this, r), c = this, d = c._filHiResFixState;
      return d && o(c, d.nodeState), u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...r) {
      return an(this), a == null ? void 0 : a.apply(this, r);
    }, Bt(e);
  }
}, wd = [
  ld,
  rd,
  ud,
  fd,
  md,
  gd,
  _d,
  yd
], Ma = Object.fromEntries(
  wd.map((e) => [e.id, e])
), us = /* @__PURE__ */ le({});
let Qi = !1;
const ks = /* @__PURE__ */ Zo("fil/help", () => {
  const e = /* @__PURE__ */ le(null);
  function t(a) {
    for (const [r, u] of Object.entries(a))
      us.value[r] = u;
  }
  function n() {
    Qi || (Qi = !0, Promise.resolve().then(() => gh).then(({ HELP_DEFAULTS: a }) => t(a)).catch((a) => console.warn("[FiL_Design_ImageMind] help defaults import failed:", a)));
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
}), xd = {
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
function La(e) {
  return xd[e];
}
const Sd = ["title", "aria-label", "innerHTML"], Fd = /* @__PURE__ */ Ce({
  name: "FilIcon",
  __name: "FilIcon",
  props: {
    name: {},
    size: { default: 16 },
    title: {}
  },
  setup(e) {
    return (t, n) => (C(), R("span", {
      class: "fil-icon",
      style: ze({ width: e.size + "px", height: e.size + "px" }),
      title: e.title,
      role: "img",
      "aria-label": e.title ?? e.name,
      innerHTML: g(La)(e.name)
    }, null, 12, Sd));
  }
}), vn = /* @__PURE__ */ Le(Fd, [["__scopeId", "data-v-dfb78d9f"]]), Cd = ["aria-label"], Md = { class: "fil-modal-header" }, Ld = { class: "fil-modal-title" }, Id = { class: "fil-modal-body" }, Ad = /* @__PURE__ */ Ce({
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
        d ? (i.value = document.activeElement, wn(() => {
          var h;
          (h = (o.value ? c(o.value) : [])[0] || o.value) == null || h.focus();
        })) : ((f = i.value) == null || f.focus(), i.value = null);
      }
    ), on(() => {
      document.addEventListener("keydown", r);
    }), xn(() => {
      document.removeEventListener("keydown", r);
    }), (d, f) => (C(), Ie(Bl, { to: "body" }, [
      J(Yc, { name: "fil-modal" }, {
        default: Us(() => [
          e.open ? (C(), R("div", {
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
              z("div", Md, [
                z("span", Ld, oe(e.title), 1),
                z("button", {
                  class: "fil-modal-close",
                  title: "Close",
                  onClick: l
                }, [
                  J(vn, {
                    name: "close",
                    size: 14
                  })
                ])
              ]),
              z("div", Id, [
                oc(d.$slots, "default", {}, void 0, !0)
              ])
            ], 4)
          ], 8, Cd)) : ne("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Ia = /* @__PURE__ */ Le(Ad, [["__scopeId", "data-v-00452928"]]), Dd = { class: "fil-help-title" }, kd = {
  key: 0,
  class: "fil-help-body"
}, Ed = { key: 1 }, Td = {
  key: 2,
  class: "fil-help-table"
}, Rd = {
  key: 3,
  class: "fil-help-code"
}, Pd = {
  key: 1,
  class: "fil-help-empty"
}, Od = /* @__PURE__ */ Ce({
  __name: "FilHelpPopup",
  setup(e) {
    const t = ks(), n = X(() => {
      const o = t.activeHelpId;
      return o ? t.get(o) ?? null : null;
    }), s = X({
      get: () => t.activeHelpId !== null,
      set: (o) => {
        o || t.value_close();
      }
    });
    return He(n, (o) => {
      o || t.value_close();
    }), (o, i) => (C(), Ie(Ia, {
      open: s.value,
      "onUpdate:open": i[0] || (i[0] = (l) => s.value = l),
      title: "FiL LLM Help",
      width: "600px",
      onClose: i[1] || (i[1] = (l) => g(t).value_close())
    }, {
      default: Us(() => {
        var l;
        return [
          n.value ? (C(), R(de, { key: 0 }, [
            z("h2", Dd, oe(n.value.title), 1),
            n.value.body ? (C(), R("p", kd, oe(n.value.body), 1)) : ne("", !0),
            (l = n.value.bullets) != null && l.length ? (C(), R("ul", Ed, [
              (C(!0), R(de, null, Ae(n.value.bullets, (a, r) => (C(), R("li", {
                key: r,
                class: "fil-help-bullet"
              }, [
                J(vn, {
                  name: "chevronRight",
                  size: 12
                }),
                z("span", null, oe(a), 1)
              ]))), 128))
            ])) : ne("", !0),
            n.value.table ? (C(), R("table", Td, [
              z("thead", null, [
                z("tr", null, [
                  (C(!0), R(de, null, Ae(n.value.table.headers, (a) => (C(), R("th", { key: a }, oe(a), 1))), 128))
                ])
              ]),
              z("tbody", null, [
                (C(!0), R(de, null, Ae(n.value.table.rows, (a, r) => (C(), R("tr", { key: r }, [
                  (C(!0), R(de, null, Ae(a, (u, c) => (C(), R("td", { key: c }, oe(u), 1))), 128))
                ]))), 128))
              ])
            ])) : ne("", !0),
            n.value.code ? (C(), R("pre", Rd, [
              z("code", null, oe(n.value.code), 1)
            ])) : ne("", !0)
          ], 64)) : (C(), R("p", Pd, "No help available for this node."))
        ];
      }),
      _: 1
    }, 8, ["open"]));
  }
}), Nd = /* @__PURE__ */ Le(Od, [["__scopeId", "data-v-536c1547"]]);
let fo = null;
function $d(e) {
  if (fo) return;
  const t = document.createElement("div");
  t.id = "__fil_help_popup_host", document.body.appendChild(t), fo = qs(Nd).use(Js()), fo.mount(t), console.info("[FiL_Design_ImageMind] help popup mounted");
}
function Vd() {
  var o, i, l, a, r, u, c, d;
  const e = globalThis, t = "FiL_Design_ImageMind.RunButton.AnimationDuration", n = ((a = (l = (i = (o = e.app) == null ? void 0 : o.extensionManager) == null ? void 0 : i.setting) == null ? void 0 : l.get) == null ? void 0 : a.call(l, t, "Normal")) ?? ((d = (c = (u = (r = globalThis.app) == null ? void 0 : r.ui) == null ? void 0 : u.settings) == null ? void 0 : c.getSettingValue) == null ? void 0 : d.call(c, t, "Normal")) ?? "Normal";
  return { Fast: 200, Normal: 400, Slow: 600 }[String(n)] || 400;
}
function Bd(e, t) {
  var u, c, d, f, p, h, _, F, y, S;
  if (!(((f = (d = (c = (u = globalThis.app) == null ? void 0 : u.extensionManager) == null ? void 0 : c.setting) == null ? void 0 : d.get) == null ? void 0 : f.call(d, "FiL_Design_ImageMind.RunButton.Enabled", !0)) ?? ((F = (_ = (h = (p = globalThis.app) == null ? void 0 : p.ui) == null ? void 0 : h.settings) == null ? void 0 : _.getSettingValue) == null ? void 0 : F.call(_, "FiL_Design_ImageMind.RunButton.Enabled", !0)) ?? !0)) return;
  const o = (S = (y = e == null ? void 0 : e.canvas) == null ? void 0 : y.nodeEls) == null ? void 0 : S[t];
  if (!o) return;
  const i = o.querySelector(".comfy-node-header");
  if (!i) return;
  const l = Vd(), a = i.style.background, r = Math.max(60, l * 0.3);
  i.style.transition = `background ${r}ms ease`, i.style.background = "var(--fil-accent, #7c3aed)", setTimeout(() => {
    i.style.background = a;
  }, l);
}
function Hd(e) {
  const t = e == null ? void 0 : e.canvas;
  if (!(t != null && t.ds)) {
    console.warn("[FiL_Design_ImageMind] run button FX: canvas not available, skipping");
    return;
  }
  const n = t.ds.executeNode;
  typeof n == "function" ? (t.ds.executeNode = async function(s) {
    const o = await n.call(this, s);
    return (typeof s == "string" || typeof s == "number") && Bd({ canvas: t }, s), o;
  }, console.info("[FiL_Design_ImageMind] run button FX installed (execute hook)")) : console.warn("[FiL_Design_ImageMind] run button FX: executeNode not found, skipping");
}
const Aa = "FiL_Design_ImageMind", Rt = "/fil_design_imagemind", tn = `[${Aa}]`, Ud = `${Aa}.UI`;
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
function Zi(e) {
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
  throw new Error(`${tn} no HTTP transport (api.fetchApi or window.fetch undefined)`);
}
async function En(e) {
  const t = await ka()(e);
  return Da(t);
}
async function po(e, t) {
  const n = await ka()(e, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  });
  return Da(n);
}
const qt = {
  loadAccounts: () => En(`${Rt}/auth`),
  saveAccounts: (e) => po(`${Rt}/auth`, {
    accounts: e
  }),
  loadModels: (e, t = !1) => En(`${Rt}/models/${encodeURIComponent(e)}${t ? "?force=1" : ""}`),
  probe: (e, t = "") => po(`${Rt}/provider_probe`, { provider: e, model: t }),
  listProviders: () => En(`${Rt}/providers`),
  saveCompareImage: (e) => po(`${Rt}/compare/save`, { image: e }),
  nodeContracts: () => En(`${Rt}/node_contracts`)
};
function Ea(e, t, n) {
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
const jd = "FiL_Design_ImageMind.Language", Ta = "en", jn = /* @__PURE__ */ nn({
  lang: Ta,
  translations: {},
  loaded: !1
});
let el = null;
async function Wd(e) {
  try {
    const t = await En(`/fil_design_imagemind/locale/${encodeURIComponent(e)}`);
    jn.translations = t, jn.lang = e;
  } catch (t) {
    console.warn(`[FiL_Design_ImageMind] failed to load locale "${e}":`, t);
  } finally {
    jn.loaded = !0;
  }
}
function zd() {
  if (el) return;
  const e = Ea(jd, Ta);
  el = Wd(e);
}
function Ht() {
  zd();
  function e(t, n) {
    return jn.translations[t] ?? n;
  }
  return { t: e, state: /* @__PURE__ */ bs(jn) };
}
const Kd = ["onMouseenter", "onMouseleave"], Gd = { class: "fil-toast-text" }, qd = ["onClick"], Xd = ["aria-label", "onClick"], Yd = /* @__PURE__ */ Ce({
  __name: "FilToastStack",
  setup(e) {
    const { t } = Ht(), n = Ot(), { items: s } = Xu(n), o = /* @__PURE__ */ le(null), i = /* @__PURE__ */ new Map(), l = {
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
    const d = X(() => s.value);
    return on(() => {
      for (const f of s.value) a(f);
    }), xn(() => {
      for (const f of i.values()) clearTimeout(f);
      i.clear();
    }), (f, p) => (C(), R("div", {
      ref_key: "root",
      ref: o,
      class: "fil-toast-stack",
      role: "status",
      "aria-live": "polite"
    }, [
      (C(!0), R(de, null, Ae(d.value, (h) => (C(), R("div", {
        key: h.id,
        class: be(["fil-toast", `fil-toast-${h.level}`]),
        style: ze({ "--toast-color": l[h.level] }),
        onMouseenter: (_) => r(h),
        onMouseleave: (_) => u(h)
      }, [
        p[0] || (p[0] = z("span", {
          class: "fil-toast-dot",
          "aria-hidden": "true"
        }, null, -1)),
        z("span", Gd, oe(h.text), 1),
        h.action ? (C(), R("button", {
          key: 0,
          type: "button",
          class: "fil-toast-action",
          onClick: ji((_) => {
            h.action.onClick(_), c(h);
          }, ["stop"])
        }, oe(h.action.label), 9, qd)) : ne("", !0),
        z("button", {
          type: "button",
          class: "fil-toast-close",
          "aria-label": g(t)("toast_close", "Close"),
          onClick: ji((_) => c(h), ["stop"])
        }, " × ", 8, Xd)
      ], 46, Kd))), 128))
    ], 512));
  }
}), Jd = /* @__PURE__ */ Le(Yd, [["__scopeId", "data-v-08cc58fa"]]);
let mo = null;
function Qd() {
  if (mo) return;
  const e = document.createElement("div");
  document.body.appendChild(e), mo = qs(Jd).use(Js()), mo.mount(e);
  const t = globalThis;
  Promise.resolve().then(() => od).then(({ toast: n }) => {
    t.__filToast = n, console.info("[FiL_Design_ImageMind] toast stack mounted");
  }).catch((n) => console.warn("[FiL_Design_ImageMind] toast store import failed:", n));
}
const Zd = "FiL_Design_ImageMind.Shortcuts.Enabled", ef = "__cheatsheet__", tf = [
  "#comfy-search-input",
  'input[name="search"]',
  'input[aria-label="Search"]',
  "#search-input",
  'input[placeholder*="search" i]'
];
function nf(e) {
  if (!e || typeof e != "object") return !1;
  const t = String(e.tagName || "").toLowerCase();
  return t === "input" || t === "textarea" || t === "select" || e.isContentEditable === !0;
}
function sf() {
  for (const e of tf) {
    const t = document.querySelector(e);
    if (t) return t;
  }
  return null;
}
function Oo() {
  var t;
  const e = ks();
  e.ensureHelpDefaultsInjected(), (t = e.value_open) == null || t.call(e, ef);
}
function Ra() {
  const e = sf();
  if (!e) {
    st.info("ComfyUI search field not found");
    return;
  }
  try {
    e.focus(), "select" in e && e.select();
  } catch {
  }
}
function of(e) {
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
            function: Oo
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
  window.addEventListener("keydown", (s) => lf(s, e), !0), console.info("[FiL_Design_ImageMind] shortcuts installed (fallback keydown handler)");
}
function lf(e, t) {
  var i, l, a, r, u, c, d, f, p;
  let n = !0;
  try {
    n = !!(((r = (a = (l = (i = globalThis.app) == null ? void 0 : i.extensionManager) == null ? void 0 : l.setting) == null ? void 0 : a.get) == null ? void 0 : r.call(a, Zd, !0)) ?? !0);
  } catch {
  }
  if (!n) return;
  const s = e.target, o = nf(s);
  if (e.key === "Escape") {
    try {
      const h = ks();
      (u = h.value_close) == null || u.call(h);
    } catch {
    }
    o && ((c = s.blur) == null || c.call(s)), (d = e.preventDefault) == null || d.call(e);
    return;
  }
  if (!o) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "K" || e.key === "k")) {
      Oo(), e.preventDefault();
      return;
    }
    if (e.key === "?" || e.shiftKey && e.key === "/") {
      if (e.shiftKey) Oo();
      else {
        const h = t.canvas, _ = (h == null ? void 0 : h.selected_nodes) ?? {}, F = Object.values(_).filter(Boolean);
        if (F.length === 1) {
          const y = ((f = F[0]) == null ? void 0 : f.comfyClass) ?? "default", S = ks();
          S.ensureHelpDefaultsInjected(), (p = S.value_open) == null || p.call(S, y);
        } else
          st.info("Select exactly one FiL_Design_ImageMind node, then press ?");
      }
      e.preventDefault();
      return;
    }
    e.key === "/" && !e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey && (Ra(), e.preventDefault());
  }
}
function af(e) {
  of(e), console.info("[FiL_Design_ImageMind] shortcuts installed");
}
const rf = 3e5, cf = ["ollama", "lmstudio", "openai", "google", "groq", "openrouter", "cloudflare"], Wn = cf, Pa = /* @__PURE__ */ Zo("fil/providers", () => {
  const e = /* @__PURE__ */ le({}), t = /* @__PURE__ */ le({}), n = /* @__PURE__ */ le({}), s = /* @__PURE__ */ le({}), o = /* @__PURE__ */ le(null), i = X(() => Object.fromEntries(
    Object.entries(e.value).filter(([, y]) => (y == null ? void 0 : y.configured) || (y == null ? void 0 : y.account_id) || (y == null ? void 0 : y.base_url))
  ));
  async function l() {
    try {
      const y = await qt.loadAccounts();
      e.value = y.accounts || {}, o.value = null;
    } catch (y) {
      o.value = y instanceof Error ? y.message : String(y);
    }
  }
  async function a(y, S) {
    try {
      const I = await qt.saveAccounts({ [y]: S });
      e.value = I.accounts || {}, o.value = null, c(y, !0);
    } catch (I) {
      throw o.value = I instanceof Error ? I.message : String(I), I;
    }
  }
  async function r(y) {
    const S = await qt.saveAccounts({
      [y]: { delete: !0 }
    });
    e.value = S.accounts || {};
  }
  async function u(y) {
    await a(y, {});
    try {
      await r(y);
    } catch (S) {
      o.value = S instanceof Error ? S.message : String(S);
    }
  }
  async function c(y, S = !1) {
    const I = t.value[y];
    if (I && !S && !I.error && I.cachedAt > 0 && Date.now() - I.cachedAt < rf)
      return I.list;
    I ? I.loading = !0 : t.value[y] = { list: [], visionModels: [], cachedAt: 0, loading: !0 };
    try {
      const b = await qt.loadModels(y, S), w = b.models || [];
      return t.value[y] = {
        list: w,
        visionModels: b.vision_models || [],
        cachedAt: Date.now(),
        loading: !1
      }, b.status && b.status !== "available" && (t.value[y].error = b.message || b.status), w;
    } catch (b) {
      const w = b instanceof Error ? b.message : String(b);
      throw t.value[y] = {
        list: [],
        visionModels: [],
        cachedAt: 0,
        loading: !1,
        error: w
      }, o.value = w, b;
    }
  }
  function d(y) {
    const S = t.value[y];
    if (!(S != null && S.cachedAt)) return null;
    const I = Date.now() - S.cachedAt, b = Math.floor(I / 1e3);
    return b < 60 ? `${b}s` : b < 3600 ? `${Math.floor(b / 60)}m` : `${Math.floor(b / 3600)}h`;
  }
  async function f(y, S = "") {
    try {
      const I = await qt.probe(y, S);
      return n.value[y] = I, I;
    } catch (I) {
      o.value = I instanceof Error ? I.message : String(I);
      return;
    }
  }
  async function p() {
    try {
      const y = await qt.listProviders();
      s.value = y.providers || {};
    } catch {
    }
  }
  function h(y) {
    var S;
    return ((S = t.value[y]) == null ? void 0 : S.list) ?? [];
  }
  function _(y) {
    var S;
    return ((S = t.value[y]) == null ? void 0 : S.visionModels) ?? [];
  }
  function F(y) {
    var S;
    return !!((S = t.value[y]) != null && S.loading);
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
    modelsFor: h,
    visionModelsFor: _,
    isLoading: F,
    cachedAgeLabel: d
  };
}), uf = ["title", "disabled", "aria-disabled"], df = {
  key: 0,
  class: "fil-w-btn-spinner"
}, ff = ["innerHTML"], pf = { key: 2 }, mf = /* @__PURE__ */ Ce({
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
    const n = e, s = X(() => n.icon ? La(n.icon) : ""), o = t, i = X(() => [
      "fil-w-btn",
      n.variant === "accent" && "fil-w-btn-accent",
      n.variant === "danger" && "fil-w-btn-danger",
      n.variant === "icon" && "fil-w-btn-icon",
      n.variant === "full" && "fil-w-btn-full",
      n.variant === "sm" && "fil-w-btn-sm",
      n.flashing && "is-flashing",
      n.loading && "is-loading"
    ]), l = X(() => n.disabled || n.loading);
    function a(r) {
      l.value || o("click", r);
    }
    return (r, u) => (C(), R("button", {
      class: be(i.value),
      title: e.title,
      disabled: l.value,
      "aria-disabled": l.value || void 0,
      onClick: a
    }, [
      e.loading ? (C(), R("span", df)) : ne("", !0),
      e.icon && !e.loading ? (C(), R("span", {
        key: 1,
        class: "fil-w-btn-glyph",
        innerHTML: s.value
      }, null, 8, ff)) : ne("", !0),
      e.label ? (C(), R("span", pf, oe(e.loading ? "" : e.label), 1)) : ne("", !0)
    ], 10, uf));
  }
}), it = /* @__PURE__ */ Le(mf, [["__scopeId", "data-v-fff84608"]]), Oa = {
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
}, hf = { class: "fil-pm-root" }, gf = ["onClick"], _f = { class: "fil-pm-icon" }, bf = { class: "fil-pm-name" }, vf = {
  key: 0,
  class: "fil-pm-disp"
}, yf = ["title"], wf = { class: "fil-pm-fields" }, xf = { class: "fil-pm-field" }, Sf = ["onUpdate:modelValue", "placeholder", "onKeydown"], Ff = { class: "fil-pm-field" }, Cf = ["onUpdate:modelValue", "onKeydown"], Mf = {
  key: 0,
  class: "fil-pm-field"
}, Lf = ["onUpdate:modelValue", "onKeydown"], If = { class: "fil-pm-actions" }, Af = {
  key: 0,
  class: "fil-pm-age"
}, Df = {
  key: 0,
  class: "fil-pm-err"
}, kf = {
  key: 1,
  class: "fil-pm-err"
}, Ef = {
  key: 2,
  class: "fil-pm-models"
}, Tf = {
  key: 0,
  class: "fil-pm-vision-badge",
  title: "Vision-capable"
}, Rf = {
  key: 3,
  class: "fil-pm-err fil-pm-global-err"
}, Pf = /* @__PURE__ */ Ce({
  __name: "ProviderManager",
  setup(e) {
    const t = Pa(), n = /* @__PURE__ */ le({}), s = /* @__PURE__ */ le({}), o = /* @__PURE__ */ le({}), i = /* @__PURE__ */ le({}), l = /* @__PURE__ */ le({});
    on(async () => {
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
        (w != null && w.configured || w != null && w.local || w != null && w.base_url) && y(b);
      }
    });
    const a = Oa, r = Na;
    function u(b) {
      return { "fil-pm-has-val": b.length > 0 };
    }
    function c(b) {
      return b === "cloudflare";
    }
    function d(b) {
      var A;
      const w = t.accounts[b], k = t.modelsByProvider[b], T = ((k == null ? void 0 : k.list.length) ?? 0) > 0 && !(k != null && k.error);
      return ((A = t.probeState[b]) == null ? void 0 : A.status) === "available" || o.value[b] || T ? "connected" : w != null && w.configured || w != null && w.local || w != null && w.base_url ? "configured" : "off";
    }
    const f = {
      connected: "Connected",
      configured: "Configured",
      off: "Not connected"
    };
    function p(b) {
      return d(b) === "off" && !l.value[b];
    }
    function h(b) {
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
    async function F(b) {
      n.value[b] = { key: "", base_url: "", account_id: "" }, await t.deleteAccount(b);
    }
    async function y(b) {
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
    const I = (b) => {
      const w = n.value[b], k = t.accounts[b];
      return w.key !== "" ? !0 : w.base_url !== ((k == null ? void 0 : k.base_url) ?? "") || w.account_id !== ((k == null ? void 0 : k.account_id) ?? "");
    };
    return (b, w) => (C(), R("div", hf, [
      (C(!0), R(de, null, Ae(g(Wn), (k) => {
        var T, A, x, P, O, M;
        return C(), R("div", {
          key: k,
          class: be(["fil-pm-card", { "fil-pm-card--collapsed": p(k) }])
        }, [
          z("div", {
            class: be(["fil-pm-header", { "fil-pm-header--clickable": d(k) === "off" }]),
            onClick: (E) => h(k)
          }, [
            z("span", _f, [
              J(vn, {
                name: g(r)[k],
                size: 20
              }, null, 8, ["name"])
            ]),
            z("span", bf, oe(g(a)[k]), 1),
            g(t).displayNames[k] ? (C(), R("span", vf, "(" + oe(g(t).displayNames[k]) + ")", 1)) : ne("", !0),
            z("span", {
              class: be(["fil-pm-status", `fil-pm-status--${d(k)}`]),
              title: f[d(k)]
            }, [
              w[0] || (w[0] = z("span", { class: "fil-pm-dot" }, null, -1)),
              Lo(" " + oe(f[d(k)]), 1)
            ], 10, yf),
            d(k) === "off" ? (C(), R("span", {
              key: 1,
              class: be(["fil-pm-chevron", { "fil-pm-chevron--open": l.value[k] }])
            }, [
              J(vn, {
                name: "chevronRight",
                size: 12
              })
            ], 2)) : ne("", !0)
          ], 10, gf),
          p(k) ? ne("", !0) : (C(), R(de, { key: 0 }, [
            z("div", wf, [
              z("label", xf, [
                w[1] || (w[1] = z("span", { class: "fil-pm-field-label" }, "API Key", -1)),
                Ge(z("input", {
                  "onUpdate:modelValue": (E) => n.value[k].key = E,
                  type: "password",
                  class: be(["fil-pm-input", u(n.value[k].key)]),
                  placeholder: (T = g(t).accounts[k]) != null && T.configured ? "•••••••• (saved)" : "sk-...",
                  onKeydown: hs((E) => _(k), ["enter"])
                }, null, 42, Sf), [
                  [vt, n.value[k].key]
                ])
              ]),
              z("label", Ff, [
                w[2] || (w[2] = z("span", { class: "fil-pm-field-label" }, "Base URL", -1)),
                Ge(z("input", {
                  "onUpdate:modelValue": (E) => n.value[k].base_url = E,
                  type: "text",
                  class: be(["fil-pm-input", u(n.value[k].base_url)]),
                  placeholder: "http://localhost:11434",
                  onKeydown: hs((E) => _(k), ["enter"])
                }, null, 42, Cf), [
                  [vt, n.value[k].base_url]
                ])
              ]),
              c(k) ? (C(), R("label", Mf, [
                w[3] || (w[3] = z("span", { class: "fil-pm-field-label" }, "Account ID", -1)),
                Ge(z("input", {
                  "onUpdate:modelValue": (E) => n.value[k].account_id = E,
                  type: "text",
                  class: be(["fil-pm-input", u(n.value[k].account_id)]),
                  onKeydown: hs((E) => _(k), ["enter"])
                }, null, 42, Lf), [
                  [vt, n.value[k].account_id]
                ])
              ])) : ne("", !0)
            ]),
            z("div", If, [
              J(it, {
                variant: "accent",
                label: I(k) ? "Save" : "Saved",
                disabled: !I(k),
                onClick: (E) => _(k)
              }, null, 8, ["label", "disabled", "onClick"]),
              !I(k) && g(t).cachedAgeLabel(k) ? (C(), R("span", Af, oe(g(t).cachedAgeLabel(k)) + " ago ", 1)) : ne("", !0),
              J(it, {
                variant: "danger",
                label: "Delete",
                disabled: !((A = g(t).accounts[k]) != null && A.configured) && !((x = g(t).accounts[k]) != null && x.base_url),
                onClick: (E) => F(k)
              }, null, 8, ["disabled", "onClick"]),
              J(it, {
                variant: "standard",
                label: "Probe",
                loading: s.value[k],
                flashing: o.value[k],
                disabled: !((P = g(t).accounts[k]) != null && P.local) && !((O = g(t).accounts[k]) != null && O.configured) && !n.value[k].key && !n.value[k].base_url,
                onClick: (E) => y(k)
              }, null, 8, ["loading", "flashing", "disabled", "onClick"]),
              J(it, {
                variant: "standard",
                label: "Load Models",
                loading: i.value[k],
                onClick: (E) => S(k)
              }, null, 8, ["loading", "onClick"])
            ]),
            (M = g(t).modelsByProvider[k]) != null && M.error ? (C(), R("div", Df, oe(g(t).modelsByProvider[k].error), 1)) : ne("", !0),
            g(t).probeState[k] && g(t).probeState[k].status !== "available" ? (C(), R("div", kf, oe(g(t).probeState[k].message), 1)) : ne("", !0),
            g(t).modelsFor(k).length > 0 ? (C(), R("div", Ef, [
              (C(!0), R(de, null, Ae(g(t).modelsFor(k), (E) => (C(), R("span", {
                class: "fil-pm-model-tag",
                key: E
              }, [
                Lo(oe(E) + " ", 1),
                g(t).visionModelsFor(k).includes(E) ? (C(), R("span", Tf, "👁")) : ne("", !0)
              ]))), 128))
            ])) : ne("", !0),
            g(t).lastError ? (C(), R("div", Rf, oe(g(t).lastError), 1)) : ne("", !0)
          ], 64))
        ], 2);
      }), 128))
    ]));
  }
}), Of = /* @__PURE__ */ Le(Pf, [["__scopeId", "data-v-ae1b468d"]]);
let ho = null;
function Nf(e) {
  ho || (ho = qs(Of).use(Js()), ho.mount(e), console.info("[FiL_Design_ImageMind] provider manager mounted"));
}
function $f(e) {
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
    render: (n) => Nf(n)
  }), console.info("[FiL_Design_ImageMind] provider manager sidebar tab registered");
}
const Vf = [
  {
    id: "FiL_Design_ImageMind.NodeTitles.AdaptiveColor",
    name: "Adaptive title text color",
    type: "boolean",
    defaultValue: !0,
    category: ["FiL_Design_ImageMind", "Node titles"],
    tooltip: "Compute node title text color (white/dark) from the title bar color via YIQ luminance."
  }
], Bf = [
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
], Hf = [
  {
    id: "FiL_Design_ImageMind.ConnectionFX.Enabled",
    name: "Connection wire effects",
    type: "boolean",
    defaultValue: !1,
    tooltip: "Accent-radial-gradient overlay near the cursor while dragging a wire.",
    category: ["FiL_Design_ImageMind", "Connection FX", "Enabled"]
  }
], Uf = [
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
], jf = [
  {
    id: "FiL_Design_ImageMind.Shortcuts.Enabled",
    name: "Keyboard shortcuts",
    type: "boolean",
    defaultValue: !0,
    tooltip: "Esc — close popup / unfocus field. ? — help for the selected FiL_Design_ImageMind node. Shift+? or Ctrl+Shift+K — full shortcuts cheatsheet. / — focus node search.",
    category: ["FiL_Design_ImageMind", "Shortcuts"]
  }
], Wf = [
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
function zf(e) {
  const t = $a[String(e)] ?? "default";
  ya(t);
  const n = globalThis.app;
  n && ju(n);
}
const Kf = [
  {
    id: "FiL_Design_ImageMind.Theme",
    name: "Node theme",
    type: "combo",
    defaultValue: "Default",
    options: ["Default", "Cyberpunk", "Fallout"],
    category: ["FiL_Design_ImageMind", "Appearance", "Theme"],
    tooltip: "Recolors every FiL_Design_ImageMind node panel and adds a small themed flourish (neon glow for Cyberpunk, a CRT scanline texture for Fallout). Applies instantly, no reload.",
    onChange: zf
  }
];
function Gf(e) {
  const t = e("FiL_Design_ImageMind.Theme", "Default");
  ya($a[t] ?? "default");
}
const qf = [
  ...Vf,
  ...Bf,
  ...Hf,
  ...Uf,
  ...jf,
  ...Wf,
  ...Kf
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
function Xf(e) {
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
        (!a || a.link == null) && console.warn(`${tn} Optic Scanner #${l.id} has no Provider Loader wired to its "config" slot — execution will fail.`);
      }
    }
  } catch (s) {
    console.warn(`${tn} preflight fallback:`, s);
  }
  return e;
}
function Yf(e) {
  return {
    name: Ud,
    // Declarative settings — registered BEFORE setup so the panel renders
    // even if a later installer throws.
    settings: qf,
    async setup() {
      const t = [
        () => $d(),
        () => Hd(e),
        () => Qd(),
        () => af(e),
        () => $f(e),
        () => Gf((n, s) => Ea(n, s, e))
      ];
      for (const n of t)
        try {
          n();
        } catch (s) {
          console.warn(`${tn} installer ${n.name || "anonymous"} failed:`, s);
        }
    },
    getCustomWidgets(t) {
      const n = t;
      return n.widgets = n.widgets || {}, n.widgets.fil_compare = { serialize: !1 }, n.widgets;
    },
    async beforeRegisterNodeDef(t, n) {
      const s = Ma[n.name];
      if (s)
        try {
          await s.register(t, n);
        } catch (o) {
          console.warn(`${tn} failed to register "${n.name}":`, o);
        }
    },
    async graphToPrompt(t) {
      return Xf(t);
    }
  };
}
async function Jf() {
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
  const n = new Set(Object.keys(t.node_ids ?? {})), s = new Set(Object.keys(Ma));
  for (const o of n)
    s.has(o) || console.warn(`${tn} server expects "${o}" but local JS does not register it`);
  for (const o of s)
    n.has(o) || console.warn(`${tn} JS registers "${o}" but server does not expose a contract`);
}
Tu();
Yu();
Jf().catch((e) => {
  console.warn("[FiL_Design_ImageMind] contract self-check failed:", e);
});
const Va = Yf(sl);
sl.registerExtension(Va);
console.info(`[FiL_Design_ImageMind] extension registered as "${Va.name}"`);
const Qf = ["aria-checked", "disabled", "title", "onClick"], Zf = /* @__PURE__ */ Ce({
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
    function i(l) {
      n.disabled || l !== n.modelValue && s("update:modelValue", l);
    }
    return (l, a) => (C(), R("div", {
      class: "fil-w-chips",
      style: ze(o.value),
      role: "radiogroup"
    }, [
      (C(!0), R(de, null, Ae(e.options, (r) => (C(), R("button", {
        key: r,
        type: "button",
        role: "radio",
        class: be(["fil-w-chip", { active: r === e.modelValue, disabled: e.disabled }]),
        "aria-checked": r === e.modelValue,
        disabled: e.disabled,
        title: r,
        onClick: (u) => i(r)
      }, oe(r), 11, Qf))), 128))
    ], 4));
  }
}), nl = /* @__PURE__ */ Le(Zf, [["__scopeId", "data-v-3c07d909"]]), ep = { class: "fil-w-chiplist" }, tp = ["placeholder", "aria-label", "disabled"], np = {
  class: "fil-w-chip-scroll",
  role: "radiogroup"
}, sp = ["aria-checked", "disabled", "title", "onClick"], op = {
  key: 0,
  class: "fil-w-chip-empty"
}, ip = /* @__PURE__ */ Ce({
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
    const n = e, s = t, o = /* @__PURE__ */ le(""), i = X(() => {
      const a = o.value.trim().toLowerCase();
      return a ? n.options.filter((r) => r.toLowerCase().includes(a)) : n.options;
    });
    function l(a) {
      n.disabled || a !== n.modelValue && s("update:modelValue", a);
    }
    return (a, r) => (C(), R("div", ep, [
      e.searchable ? Ge((C(), R("input", {
        key: 0,
        "onUpdate:modelValue": r[0] || (r[0] = (u) => o.value = u),
        class: "fil-w-search",
        type: "search",
        placeholder: e.placeholder,
        "aria-label": e.placeholder,
        disabled: e.disabled,
        spellcheck: "false"
      }, null, 8, tp)), [
        [vt, o.value]
      ]) : ne("", !0),
      z("div", np, [
        (C(!0), R(de, null, Ae(i.value, (u) => (C(), R("button", {
          key: u,
          type: "button",
          role: "radio",
          class: be(["fil-w-chip", { active: u === e.modelValue, disabled: e.disabled }]),
          "aria-checked": u === e.modelValue,
          disabled: e.disabled,
          title: u,
          onClick: (c) => l(u)
        }, oe(u), 11, sp))), 128)),
        i.value.length === 0 ? (C(), R("div", op, oe(o.value ? "No matches" : "Empty"), 1)) : ne("", !0)
      ])
    ]));
  }
}), lp = /* @__PURE__ */ Le(ip, [["__scopeId", "data-v-8b6ca087"]]), ap = ["title"], rp = {
  key: 0,
  class: "fil-combo-label"
}, cp = ["disabled", "aria-expanded"], up = { class: "fil-combo-trigger-label" }, dp = {
  key: 1,
  class: "fil-combo-badge"
}, fp = ["placeholder"], pp = { class: "fil-combo-list" }, mp = ["aria-selected", "onMouseenter", "onClick"], hp = { class: "fil-combo-option-label" }, gp = {
  key: 1,
  class: "fil-combo-badge"
}, _p = {
  key: 0,
  class: "fil-combo-empty"
}, bp = /* @__PURE__ */ Ce({
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
    const n = e, s = t, o = /* @__PURE__ */ le(!1), i = /* @__PURE__ */ le(""), l = /* @__PURE__ */ le(0), a = /* @__PURE__ */ le(null), r = /* @__PURE__ */ le(null), u = /* @__PURE__ */ le(null), c = /* @__PURE__ */ le({}), d = X(() => n.options.find((T) => T.value === n.modelValue)), f = X(() => {
      if (!n.searchable || !i.value.trim()) return n.options;
      const T = i.value.trim().toLowerCase();
      return n.options.filter((A) => (A.label ?? A.value).toLowerCase().includes(T));
    });
    function p(T) {
      return T.label ?? T.value;
    }
    function h() {
      const T = a.value;
      if (!T) return;
      const A = T.getBoundingClientRect(), x = window.innerHeight, P = 260, O = x - A.bottom, M = O < P && A.top > O;
      c.value = {
        left: `${A.left}px`,
        width: `${A.width}px`,
        ...M ? { bottom: `${x - A.top + 4}px` } : { top: `${A.bottom + 4}px` }
      };
    }
    function _(T) {
      var x;
      const A = T.target;
      A instanceof Element && ((x = r.value) != null && x.contains(A)) || y();
    }
    function F() {
      n.disabled || (o.value = !0, i.value = "", l.value = Math.max(
        0,
        f.value.findIndex((T) => T.value === n.modelValue)
      ), wn(() => {
        var T;
        h(), n.searchable && ((T = u.value) == null || T.focus()), window.addEventListener("resize", _), window.addEventListener("scroll", _, !0), document.addEventListener("mousedown", S, !0);
      }));
    }
    function y() {
      o.value && (o.value = !1, window.removeEventListener("resize", _), window.removeEventListener("scroll", _, !0), document.removeEventListener("mousedown", S, !0));
    }
    function S(T) {
      var x, P;
      const A = T.target;
      (x = a.value) != null && x.contains(A) || (P = r.value) != null && P.contains(A) || y();
    }
    function I() {
      o.value ? y() : F();
    }
    function b(T) {
      var A;
      s("update:modelValue", T.value), y(), (A = a.value) == null || A.focus();
    }
    function w(T) {
      if (!n.disabled) {
        if (!o.value && (T.key === "ArrowDown" || T.key === "ArrowUp" || T.key === "Enter" || T.key === " ")) {
          T.preventDefault(), F();
          return;
        }
        o.value && k(T);
      }
    }
    function k(T) {
      var x;
      const A = f.value;
      if (T.key === "ArrowDown")
        T.preventDefault(), l.value = A.length ? (l.value + 1) % A.length : 0;
      else if (T.key === "ArrowUp")
        T.preventDefault(), l.value = A.length ? (l.value - 1 + A.length) % A.length : 0;
      else if (T.key === "Enter") {
        T.preventDefault();
        const P = A[l.value];
        P && b(P);
      } else T.key === "Escape" && (T.preventDefault(), y(), (x = a.value) == null || x.focus());
    }
    return He(i, () => {
      l.value = 0;
    }), xn(() => {
      window.removeEventListener("resize", _), window.removeEventListener("scroll", _, !0), document.removeEventListener("mousedown", S, !0);
    }), (T, A) => {
      var x, P;
      return C(), R("div", {
        class: "fil-combo",
        title: e.title
      }, [
        e.label ? (C(), R("label", rp, oe(e.label), 1)) : ne("", !0),
        z("button", {
          ref_key: "triggerRef",
          ref: a,
          type: "button",
          class: be(["fil-combo-trigger", { open: o.value, disabled: e.disabled }]),
          disabled: e.disabled,
          "aria-expanded": o.value,
          "aria-haspopup": "listbox",
          onClick: I,
          onKeydown: w
        }, [
          (x = d.value) != null && x.icon ? (C(), Ie(vn, {
            key: 0,
            name: d.value.icon,
            size: 16
          }, null, 8, ["name"])) : ne("", !0),
          z("span", up, oe(d.value ? p(d.value) : e.modelValue), 1),
          (P = d.value) != null && P.badge ? (C(), R("span", dp, oe(d.value.badge), 1)) : ne("", !0),
          A[1] || (A[1] = z("span", { class: "fil-combo-chevron" }, "▾", -1))
        ], 42, cp),
        (C(), Ie(Bl, { to: "body" }, [
          o.value ? (C(), R("div", {
            key: 0,
            ref_key: "panelRef",
            ref: r,
            class: "fil-combo-panel",
            style: ze(c.value),
            role: "listbox",
            onKeydown: k
          }, [
            e.searchable ? Ge((C(), R("input", {
              key: 0,
              ref_key: "searchRef",
              ref: u,
              "onUpdate:modelValue": A[0] || (A[0] = (O) => i.value = O),
              type: "search",
              class: "fil-combo-search",
              placeholder: e.placeholder,
              spellcheck: "false"
            }, null, 8, fp)), [
              [vt, i.value]
            ]) : ne("", !0),
            z("div", pp, [
              (C(!0), R(de, null, Ae(f.value, (O, M) => (C(), R("button", {
                key: O.value,
                type: "button",
                class: be(["fil-combo-option", { active: M === l.value, selected: O.value === e.modelValue }]),
                role: "option",
                "aria-selected": O.value === e.modelValue,
                onMouseenter: (E) => l.value = M,
                onClick: (E) => b(O)
              }, [
                O.icon ? (C(), Ie(vn, {
                  key: 0,
                  name: O.icon,
                  size: 16
                }, null, 8, ["name"])) : ne("", !0),
                z("span", hp, oe(p(O)), 1),
                O.badge ? (C(), R("span", gp, oe(O.badge), 1)) : ne("", !0)
              ], 42, mp))), 128)),
              f.value.length === 0 ? (C(), R("div", _p, "No matches")) : ne("", !0)
            ])
          ], 36)) : ne("", !0)
        ]))
      ], 8, ap);
    };
  }
}), No = /* @__PURE__ */ Le(bp, [["__scopeId", "data-v-10bd69b4"]]), vp = ["data-ok", "data-err"], yp = /* @__PURE__ */ Ce({
  __name: "FilInfo",
  props: {
    text: {},
    ok: { type: Boolean },
    err: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (C(), R("div", {
      class: "fil-w-info",
      "data-ok": e.ok || void 0,
      "data-err": e.err || void 0
    }, oe(e.text), 9, vp));
  }
}), gs = /* @__PURE__ */ Le(yp, [["__scopeId", "data-v-851660c1"]]), wp = ["title"], xp = {
  key: 0,
  class: "fil-w-numfield-label"
}, Sp = ["disabled", "min", "max", "step", "aria-label"], Fp = /* @__PURE__ */ Ce({
  __name: "FilNumberInput",
  props: {
    modelValue: {},
    min: {},
    max: {},
    step: { default: 1 },
    disabled: { type: Boolean },
    ariaLabel: {},
    label: {},
    title: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = X(() => n.modelValue), i = /* @__PURE__ */ le(r(o.value));
    He(o, (_) => {
      l.value || (i.value = r(_));
    });
    let l = /* @__PURE__ */ le(!1), a = null;
    function r(_) {
      return Number.isFinite(_) ? String(_) : "";
    }
    function u(_) {
      const F = (_ || "").trim();
      if (F === "" || !/^[0-9+\-*/(). ]+$/.test(F.replace(/\^/g, "**"))) return null;
      try {
        const y = new Function(`"use strict"; return (${F});`), S = Number(y());
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
      let F = _;
      n.min != null && F < n.min && (F = n.min), n.max != null && F > n.max && (F = n.max), F !== o.value && s("update:modelValue", F), i.value = r(F);
    }
    function d() {
      l.value = !0, a = i.value;
    }
    function f() {
      l.value = !1, c(u(i.value)), a = null;
    }
    function p(_) {
      _.key === "Enter" ? (_.preventDefault(), c(u(i.value)), _.target.blur()) : _.key === "Escape" ? (_.preventDefault(), a !== null && (i.value = a), _.target.blur()) : _.key === "ArrowUp" ? (_.preventDefault(), h(_.shiftKey ? 10 : 1)) : _.key === "ArrowDown" && (_.preventDefault(), h(_.shiftKey ? -10 : -1));
    }
    function h(_) {
      let F = o.value + _ * (n.step || 1);
      n.min != null && F < n.min && (F = n.min), n.max != null && F > n.max && (F = n.max), s("update:modelValue", F), i.value = r(F);
    }
    return (_, F) => (C(), R("div", {
      class: be(["fil-w-numfield", { "no-label": !e.label }]),
      title: e.title
    }, [
      e.label ? (C(), R("label", xp, oe(e.label), 1)) : ne("", !0),
      Ge(z("input", {
        "onUpdate:modelValue": F[0] || (F[0] = (y) => i.value = y),
        type: "text",
        class: "fil-w-num",
        inputmode: "numeric",
        disabled: e.disabled,
        min: e.min ?? void 0,
        max: e.max ?? void 0,
        step: e.step ?? void 0,
        "aria-label": e.ariaLabel ?? e.label,
        onFocus: d,
        onBlur: f,
        onKeydown: p
      }, null, 40, Sp), [
        [vt, i.value]
      ])
    ], 10, wp));
  }
}), dn = /* @__PURE__ */ Le(Fp, [["__scopeId", "data-v-3c0bbbf0"]]), Cp = ["aria-expanded", "disabled"], Mp = { class: "fil-w-section-arrow" }, Lp = { class: "fil-w-section-title" }, Ip = /* @__PURE__ */ Ce({
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
    const i = X(() => n.modelValue ? "▶" : "▼");
    return (l, a) => (C(), R("button", {
      type: "button",
      class: be(["fil-w-section", { collapsible: e.collapsible, collapsed: e.modelValue }]),
      "aria-expanded": !e.modelValue,
      disabled: !e.collapsible,
      onClick: o
    }, [
      z("span", Mp, oe(i.value), 1),
      z("span", Lp, oe(e.title), 1)
    ], 10, Cp));
  }
}), yn = /* @__PURE__ */ Le(Ip, [["__scopeId", "data-v-686d0388"]]), Ap = ["title"], Dp = {
  key: 0,
  class: "fil-w-segmented-label"
}, kp = ["aria-label"], Ep = ["aria-pressed", "disabled", "tabindex", "onClick", "onKeydown"], Tp = /* @__PURE__ */ Ce({
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
    const n = e, s = t, o = X(() => n.modelValue), i = /* @__PURE__ */ le([]);
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
        const h = d[(c + 1) % d.length];
        a(h), (f = i.value[(c + 1) % d.length]) == null || f.focus();
      } else if (u.key === "ArrowLeft" || u.key === "ArrowUp") {
        u.preventDefault();
        const h = d[(c - 1 + d.length) % d.length];
        a(h), (p = i.value[(c - 1 + d.length) % d.length]) == null || p.focus();
      }
    }
    return (u, c) => (C(), R("div", {
      class: "fil-w-segmented",
      title: e.title
    }, [
      e.label ? (C(), R("label", Dp, oe(e.label), 1)) : ne("", !0),
      z("div", {
        class: be(["fil-w-pill", { disabled: e.disabled }]),
        role: "group",
        "aria-label": e.label
      }, [
        (C(!0), R(de, null, Ae(e.options, (d, f) => (C(), R("button", {
          key: d,
          ref_for: !0,
          ref: (p) => {
            p && (i.value[f] = p);
          },
          type: "button",
          class: be(["fil-w-seg", { active: d === o.value }]),
          "aria-pressed": d === o.value,
          disabled: e.disabled,
          tabindex: d === o.value ? 0 : -1,
          onClick: (p) => a(d),
          onKeydown: (p) => r(p, f)
        }, oe(l(d)), 43, Ep))), 128))
      ], 10, kp)
    ], 8, Ap));
  }
}), gt = /* @__PURE__ */ Le(Tp, [["__scopeId", "data-v-fa82f2ad"]]), Rp = ["title"], Pp = {
  key: 0,
  class: "fil-w-select-label"
}, Op = ["disabled", "aria-label"], Np = ["value"], $p = /* @__PURE__ */ Ce({
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
      set: (i) => s("update:modelValue", i)
    });
    return (i, l) => (C(), R("div", {
      class: "fil-w-select",
      title: e.title
    }, [
      e.label ? (C(), R("label", Pp, oe(e.label), 1)) : ne("", !0),
      Ge(z("select", {
        "onUpdate:modelValue": l[0] || (l[0] = (a) => o.value = a),
        class: "fil-w-select-input",
        disabled: e.disabled,
        "aria-label": e.label,
        onChange: l[1] || (l[1] = (a) => s("update:modelValue", a.target.value))
      }, [
        (C(!0), R(de, null, Ae(e.options, (a) => (C(), R("option", {
          key: a,
          value: a
        }, oe(a), 9, Np))), 128))
      ], 40, Op), [
        [vu, o.value]
      ])
    ], 8, Rp));
  }
}), ds = /* @__PURE__ */ Le($p, [["__scopeId", "data-v-77c303be"]]), Vp = ["title"], Bp = {
  key: 0,
  class: "fil-w-slider-label"
}, Hp = { class: "fil-w-slider-row" }, Up = ["value", "min", "max", "step", "disabled", "aria-label"], jp = /* @__PURE__ */ Ce({
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
    function i(a) {
      const r = Number(a.target.value);
      s("update:modelValue", r);
    }
    function l(a) {
      s("update:modelValue", a);
    }
    return (a, r) => (C(), R("div", {
      class: "fil-w-slider",
      title: e.title
    }, [
      e.label ? (C(), R("label", Bp, oe(e.label), 1)) : ne("", !0),
      z("div", Hp, [
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
        }, null, 40, Up),
        J(dn, {
          "model-value": o.value,
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label,
          "onUpdate:modelValue": l
        }, null, 8, ["model-value", "min", "max", "step", "disabled", "aria-label"])
      ])
    ], 8, Vp));
  }
}), nt = /* @__PURE__ */ Le(jp, [["__scopeId", "data-v-5391c869"]]), Wp = {
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
}, zp = {}, Kp = {}, Gp = {}, qp = {
  ...Wp,
  ...zp,
  ...Kp,
  ...Gp
}, Xp = { class: "fil-style-picker" }, Yp = { class: "fil-style-cats" }, Jp = ["onClick"], Qp = { class: "fil-style-grid" }, Zp = ["title", "onClick"], em = { class: "fil-style-tile-preview" }, tm = ["src"], nm = {
  key: 1,
  class: "fil-style-tile-placeholder"
}, sm = { class: "fil-style-tile-label" }, om = {
  key: 0,
  class: "fil-style-empty"
}, fs = "__all__", im = /* @__PURE__ */ Ce({
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
    const l = X(() => {
      const f = /* @__PURE__ */ new Set(), p = [];
      for (const h of n.styles) {
        const _ = o(h);
        _ && !f.has(_) && (f.add(_), p.push(_));
      }
      return p;
    }), a = /* @__PURE__ */ le(fs), r = /* @__PURE__ */ le(""), u = X(() => {
      const f = r.value.trim().toLowerCase();
      return n.styles.filter((p) => a.value !== fs && o(p) !== a.value ? !1 : f ? p.toLowerCase().includes(f) : !0);
    });
    function c(f) {
      return qp[f];
    }
    function d(f) {
      s("select", f);
    }
    return (f, p) => (C(), R("div", Xp, [
      z("div", Yp, [
        z("button", {
          type: "button",
          class: be(["fil-style-cat", { active: a.value === fs }]),
          onClick: p[0] || (p[0] = (h) => a.value = fs)
        }, " All ", 2),
        (C(!0), R(de, null, Ae(l.value, (h) => (C(), R("button", {
          key: h,
          type: "button",
          class: be(["fil-style-cat", { active: a.value === h }]),
          onClick: (_) => a.value = h
        }, oe(h), 11, Jp))), 128))
      ]),
      Ge(z("input", {
        "onUpdate:modelValue": p[1] || (p[1] = (h) => r.value = h),
        type: "search",
        class: "fil-style-search",
        placeholder: "Search styles…",
        "aria-label": "Search styles",
        spellcheck: "false"
      }, null, 512), [
        [vt, r.value]
      ]),
      z("div", Qp, [
        (C(!0), R(de, null, Ae(u.value, (h) => (C(), R("button", {
          key: h,
          type: "button",
          class: be(["fil-style-tile", { active: h === e.modelValue }]),
          title: h,
          onClick: (_) => d(h)
        }, [
          z("span", em, [
            c(h) ? (C(), R("img", {
              key: 0,
              src: c(h),
              class: "fil-style-tile-img",
              alt: ""
            }, null, 8, tm)) : (C(), R("span", nm, oe(i(h).split(" ")[0]), 1))
          ]),
          z("span", sm, oe(i(h)), 1)
        ], 10, Zp))), 128)),
        u.value.length === 0 ? (C(), R("div", om, "No matches")) : ne("", !0)
      ])
    ]));
  }
}), lm = /* @__PURE__ */ Le(im, [["__scopeId", "data-v-6e196d1e"]]), am = { class: "fil-seed-root" }, rm = ["title"], cm = ["readonly"], um = { class: "fil-seed-actions" }, dm = /* @__PURE__ */ Ce({
  __name: "Seed",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Ht(), s = X({
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
    const r = X(() => s.value === "fixed" ? `${o.value}` : "random");
    return (u, c) => (C(), R("div", am, [
      z("div", {
        class: "fil-seed-readout",
        title: s.value === "fixed" ? g(n)("sd_locked", "Locked seed") : g(n)("sd_auto_random", "Auto-random")
      }, [
        Ge(z("input", {
          "onUpdate:modelValue": c[0] || (c[0] = (d) => r.value = d),
          type: "text",
          class: "fil-seed-display",
          readonly: s.value === "random",
          "aria-label": "Seed value"
        }, null, 8, cm), [
          [vt, r.value]
        ]),
        s.value === "random" && t.state.lastRunSeed != null ? (C(), Ie(g(gs), {
          key: 0,
          text: `Last run: ${t.state.lastRunSeed}`
        }, null, 8, ["text"])) : ne("", !0)
      ], 8, rm),
      z("div", um, [
        J(g(it), {
          label: g(n)("sd_random_label", "🔀 Random"),
          variant: "standard",
          title: g(n)("sd_mode", "Random generates a new seed each run."),
          onClick: i
        }, null, 8, ["label", "title"]),
        J(g(it), {
          label: g(n)("sd_btn_use_last", "♻️ Use last"),
          variant: "standard",
          title: g(n)("sd_use_last", "Reuse the seed from the last executed run."),
          onClick: l
        }, null, 8, ["label", "title"]),
        J(g(it), {
          label: g(n)("sd_btn_new_fixed", "🎲 New fixed"),
          variant: "accent",
          title: g(n)("sd_new_fixed", "Generate a new random fixed seed."),
          onClick: a
        }, null, 8, ["label", "title"])
      ])
    ]));
  }
}), fm = /* @__PURE__ */ Le(dm, [["__scopeId", "data-v-527ba047"]]), pm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fm
}, Symbol.toStringTag, { value: "Module" })), mm = { class: "fil-provider-root" }, hm = { class: "fil-provider-row" }, gm = {
  key: 0,
  class: "fil-model-filter-bar"
}, _m = { class: "fil-model-filter-wrap" }, bm = ["placeholder"], vm = { class: "fil-model-count" }, ym = 3e5, wm = /* @__PURE__ */ Ce({
  __name: "ProviderLoader",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, n = Pa(), { t: s } = Ht(), o = /* @__PURE__ */ le("");
    function i(O, M) {
      return {
        get: () => t.state.nodeState[O] ?? M,
        set: (E) => {
          t.state.nodeState[O] = E;
        }
      };
    }
    const l = X(() => String(i("provider", "ollama").get()));
    function a(O) {
      i("provider", "ollama").set(O), o.value = "";
      const M = n.modelsFor(O);
      M.length ? (u(M[0]), x(), n.loadModels(O)) : (h.nodeState.model = "(loading...)", P());
    }
    const r = X(() => String(i("model", "(loading...)").get()));
    function u(O) {
      i("model", "(loading...)").set(O);
    }
    const c = X(() => Number(i("temperature", 0.7).get())), d = X(() => Number(i("max_tokens", 0).get())), f = X(() => Number(i("rate_limit_ms", 100).get())), p = X(() => Number(i("max_image_side", 1024).get())), h = t.state, _ = X(() => {
      const O = n.modelsFor(l.value);
      return O.length ? O : ["(no models)"];
    }), F = X(() => n.modelsFor(l.value).length > 0), y = X(() => {
      const O = _.value;
      if (!o.value || !F.value) return O;
      const M = o.value.toLowerCase();
      return O.filter((E) => E.toLowerCase().includes(M));
    }), S = X(() => {
      if (!F.value) return "";
      const O = n.modelsFor(l.value).length, M = y.value.length;
      return M === O ? `${O}` : `${M} of ${O}`;
    }), I = X(
      () => Wn.map((O) => ({ value: O, label: Oa[O] ?? O, icon: Na[O] }))
    ), b = X(() => {
      const O = n.visionModelsFor(l.value);
      return y.value.map((M) => ({
        value: M,
        badge: O.includes(M) ? "👁" : void 0
      }));
    }), w = X(() => n.isLoading(l.value)), k = X(() => n.probeState[l.value]), T = X(() => n.cachedAgeLabel(l.value));
    let A = null;
    He(() => t.state.nodeState, () => {
    }, { deep: !0 });
    function x() {
      const O = t.state.node;
      if (!O) return;
      const M = fe(O, "model");
      if (!M) return;
      const E = n.modelsFor(l.value), Q = E.length ? E : ["(no models)"];
      M.options && (M.options.values = Q);
    }
    async function P() {
      try {
        await n.loadModels(l.value, !0);
        const O = n.modelsFor(l.value);
        u(O[0] ?? "(no models)"), x();
      } catch (O) {
        st.error(O instanceof Error ? O.message : String(O));
      }
    }
    return on(async () => {
      n.loadDisplayNames();
      const O = n.modelsFor(l.value);
      if (O.length)
        r.value === "(loading...)" && u(O[0] ?? "(no models)"), x(), n.loadModels(l.value);
      else
        try {
          await n.loadModels(l.value);
          const M = n.modelsFor(l.value);
          r.value === "(loading...)" && u(M[0] ?? "(no models)"), x();
        } catch (M) {
          st.error(M instanceof Error ? M.message : String(M));
        }
      A = setInterval(() => {
        n.loadModels(l.value, !0);
      }, ym);
    }), Ws(() => {
      A && clearInterval(A);
    }), (O, M) => (C(), R("div", mm, [
      J(g(No), {
        options: I.value,
        "model-value": l.value,
        label: g(s)("lbl_provider", "🔌 Provider"),
        title: g(s)("tt_provider", "LLM provider to use — local (Ollama, LM Studio) or cloud."),
        "onUpdate:modelValue": a
      }, null, 8, ["options", "model-value", "label", "title"]),
      z("div", hm, [
        J(g(No), {
          options: b.value,
          "model-value": r.value,
          label: g(s)("lbl_model", "🧠 Model"),
          title: g(s)("tt_model", "Choose which model to use. If the list is empty, refresh it or check the provider account."),
          "onUpdate:modelValue": u
        }, null, 8, ["options", "model-value", "label", "title"]),
        J(g(it), {
          label: "↻",
          title: g(s)("tt_refresh", "Reload the model list. Use after adding a new model or API key."),
          disabled: w.value || g(h).ui.refreshing === !0,
          onClick: P
        }, null, 8, ["title", "disabled"])
      ]),
      F.value ? (C(), R("div", gm, [
        z("div", _m, [
          Ge(z("input", {
            "onUpdate:modelValue": M[0] || (M[0] = (E) => o.value = E),
            type: "text",
            class: "fil-model-filter",
            placeholder: g(s)("prov_search_models", "Search models…")
          }, null, 8, bm), [
            [vt, o.value]
          ])
        ]),
        z("span", vm, oe(S.value), 1)
      ])) : ne("", !0),
      w.value ? (C(), Ie(g(gs), {
        key: 1,
        text: g(s)("prov_loading_models", "Loading models…")
      }, null, 8, ["text"])) : k.value && k.value.status && k.value.status !== "available" ? (C(), Ie(g(gs), {
        key: 2,
        err: !0,
        text: k.value.message || k.value.status
      }, null, 8, ["text"])) : T.value ? (C(), Ie(g(gs), {
        key: 3,
        text: `${g(s)("prov_models_updated", "Models updated")}: ${T.value}`
      }, null, 8, ["text"])) : ne("", !0),
      J(g(nt), {
        "model-value": c.value,
        min: 0,
        max: 2,
        step: 0.05,
        label: g(s)("lbl_temperature", "🌡️ Temperature"),
        title: g(s)("tt_temperature", "Sampling temperature — higher is more creative, lower is more deterministic."),
        "onUpdate:modelValue": M[1] || (M[1] = (E) => g(h).nodeState.temperature = E)
      }, null, 8, ["model-value", "label", "title"]),
      J(g(nt), {
        "model-value": d.value,
        min: 0,
        max: 65536,
        step: 1,
        label: g(s)("lbl_max_tokens", "🔢 Max tokens"),
        title: g(s)("tt_provider_max_tokens", "Maximum tokens in the response. 0 = provider default (no explicit limit)."),
        "onUpdate:modelValue": M[2] || (M[2] = (E) => g(h).nodeState.max_tokens = E)
      }, null, 8, ["model-value", "label", "title"]),
      J(g(nt), {
        "model-value": f.value,
        min: 0,
        max: 5e3,
        step: 10,
        label: g(s)("lbl_rate_limit", "⏱️ Rate limit"),
        title: g(s)("tt_rate_limit", "Minimum delay between requests to this provider, to avoid rate limiting."),
        "onUpdate:modelValue": M[3] || (M[3] = (E) => g(h).nodeState.rate_limit_ms = E)
      }, null, 8, ["model-value", "label", "title"]),
      J(g(nt), {
        "model-value": p.value,
        min: 128,
        max: 4096,
        step: 64,
        label: g(s)("lbl_max_image_side", "🖼️ Max image side"),
        title: g(s)("tt_max_image_side", "Images are downscaled so their longest side does not exceed this value."),
        "onUpdate:modelValue": M[4] || (M[4] = (E) => g(h).nodeState.max_image_side = E)
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), xm = /* @__PURE__ */ Le(wm, [["__scopeId", "data-v-2aa7b099"]]), Sm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xm
}, Symbol.toStringTag, { value: "Module" })), Fm = {
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
}, Cm = { class: "fil-scanner-root" }, Mm = ["title"], Lm = ["value", "placeholder", "onInput"], Im = ["value", "placeholder", "onInput"], Am = { class: "fil-section-block" }, Dm = ["title"], km = { class: "fil-scanner-seed" }, Em = { class: "fil-scanner-seed-row" }, Tm = ["value", "readonly", "title"], Rm = ["title"], Pm = ["title"], Om = ["title"], Nm = /* @__PURE__ */ Ce({
  __name: "OpticScanner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Ht(), s = Fm.FiLOpticScanner, o = (s == null ? void 0 : s.inputs.required) ?? [], i = {
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
    function r(B) {
      const W = i[B];
      return W ? n(W[0], W[1]) : B.toUpperCase();
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
    function c(B) {
      const W = u[B.name];
      return W ? n(W, B.tooltip || "") : B.tooltip || "";
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
    function f(B) {
      if (B.label) return B.label;
      const W = d[B.name] || "", D = B.name.replace(/_/g, " ").replace(/\b\w/g, (U) => U.toUpperCase());
      return W ? `${W} ${D}` : D;
    }
    const p = /* @__PURE__ */ nn({}), h = {
      photo_style: { emoji: "📷", labelKey: "scn_style_photo_label", labelFallback: "Photo" },
      nsfw_photo_style: { emoji: "🔞", labelKey: "scn_style_nsfw_photo_label", labelFallback: "NSFW Photo" },
      art_style: { emoji: "🎨", labelKey: "scn_style_art_label", labelFallback: "Art" },
      nsfw_art_style: { emoji: "🔞", labelKey: "scn_style_nsfw_art_label", labelFallback: "NSFW Art" }
    };
    function _(B) {
      const W = h[B], D = W ? `${W.emoji} ${n(W.labelKey, W.labelFallback)}: ` : "", U = String(b(B, "None") || "None");
      if (U === "None") return `${D}${n("scn_style_none", "None")}`;
      const j = U.indexOf("/"), Z = j === -1 ? U : U.slice(j + 1);
      return `${D}${Z}`;
    }
    function F(B) {
      p[B] = !0;
    }
    function y(B, W) {
      w(B, W), p[B] = !1;
    }
    const S = X(() => {
      var W;
      const B = {};
      for (const D of o) (B[W = D.section || "_"] ?? (B[W] = [])).push(D);
      return B;
    }), I = X(() => {
      const B = S.value.styles || [], W = [];
      for (let D = 0; D < B.length; D += 2) W.push(B.slice(D, D + 2));
      return W;
    });
    function b(B, W = "") {
      return t.state.nodeState[B] ?? t.state.initialValues[B] ?? W;
    }
    function w(B, W) {
      t.state.nodeState[B] = W;
    }
    const k = /* @__PURE__ */ new Set(["agent", "output", "advanced"]);
    function T(B) {
      const W = t.state.ui[`collapsed_${B}`];
      return W === void 0 ? k.has(B) : !!W;
    }
    function A(B, W) {
      t.state.ui[`collapsed_${B}`] = W;
    }
    He(() => t.state.nodeState, () => {
    }, { deep: !0 });
    const x = X({
      get: () => t.state.nodeState.seed_mode ?? "random",
      set: (B) => {
        t.state.nodeState.seed_mode = B;
      }
    }), P = X({
      get: () => Number(t.state.nodeState.seed ?? -1) || -1,
      set: (B) => {
        t.state.nodeState.seed = B;
      }
    }), O = X(() => x.value === "fixed" ? `${P.value}` : "random");
    function M() {
      x.value = "random";
    }
    function E() {
      if (t.state.lastRunSeed == null) {
        st.warning("No last-run seed recorded yet");
        return;
      }
      P.value = t.state.lastRunSeed, x.value = "fixed";
    }
    function Q() {
      const B = Math.floor(Math.random() * 1e9) & 2147483647;
      P.value = B, x.value = "fixed";
    }
    return (B, W) => (C(), R("div", Cm, [
      (C(!0), R(de, null, Ae(S.value, (D, U) => (C(), R(de, { key: U }, [
        U !== "styles" ? (C(), R("div", {
          key: 0,
          class: "fil-section-block",
          style: ze({ "--fil-accent": l[String(U)] })
        }, [
          U !== "_" && U !== "prompt" ? (C(), Ie(g(yn), {
            key: 0,
            title: r(String(U)),
            "model-value": T(String(U)),
            "onUpdate:modelValue": (j) => A(String(U), j)
          }, null, 8, ["title", "model-value", "onUpdate:modelValue"])) : ne("", !0),
          (C(!0), R(de, null, Ae(D, (j) => Ge((C(), R("div", {
            key: j.name,
            class: "fil-w-row",
            title: c(j)
          }, [
            j.kind === "chip_grid" ? (C(), Ie(g(nl), {
              key: 0,
              options: j.values || [],
              "model-value": String(b(j.name, "")),
              columns: j.columns ?? 3,
              "onUpdate:modelValue": (Z) => w(j.name, Z)
            }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"])) : j.kind === "chip_list" ? (C(), Ie(g(lp), {
              key: 1,
              options: j.values || [],
              "model-value": b(j.name, null),
              searchable: j.searchable ?? !0,
              "onUpdate:modelValue": (Z) => w(j.name, Z)
            }, null, 8, ["options", "model-value", "searchable", "onUpdate:modelValue"])) : j.kind === "segmented" ? (C(), Ie(g(gt), {
              key: 2,
              options: j.options || [],
              "model-value": String(b(j.name, "")),
              label: f(j),
              "onUpdate:modelValue": (Z) => w(j.name, Z)
            }, null, 8, ["options", "model-value", "label", "onUpdate:modelValue"])) : j.kind === "string" && g(a).has(j.name) ? (C(), R("textarea", {
              key: 3,
              class: "fil-w-textarea",
              value: String(b(j.name, "")),
              placeholder: f(j),
              onInput: (Z) => w(j.name, Z.target.value)
            }, null, 40, Lm)) : j.kind === "string" ? (C(), R("input", {
              key: 4,
              type: "text",
              class: "fil-w-input",
              value: String(b(j.name, "")),
              placeholder: f(j),
              onInput: (Z) => w(j.name, Z.target.value)
            }, null, 40, Im)) : (C(), Ie(g(nl), {
              key: 5,
              options: j.values || [],
              "model-value": String(b(j.name, "")),
              columns: j.columns ?? 3,
              "onUpdate:modelValue": (Z) => w(j.name, Z)
            }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"]))
          ], 8, Mm)), [
            [Is, U === "_" || U === "prompt" || !T(String(U))]
          ])), 128))
        ], 4)) : ne("", !0)
      ], 64))), 128)),
      z("div", {
        class: "fil-section-block",
        style: ze({ "--fil-accent": l.advanced })
      }, [
        J(g(yn), {
          title: r("advanced"),
          "model-value": T("advanced"),
          "onUpdate:modelValue": W[0] || (W[0] = (D) => A("advanced", D))
        }, null, 8, ["title", "model-value"]),
        Ge(z("div", Am, [
          (C(!0), R(de, null, Ae(I.value, (D, U) => (C(), R("div", {
            key: `style-pair-${U}`,
            class: "fil-style-pair-row"
          }, [
            (C(!0), R(de, null, Ae(D, (j) => (C(), R("div", {
              key: j.name,
              class: "fil-style-pair-item",
              title: c(j)
            }, [
              J(g(it), {
                variant: "full",
                label: _(j.name),
                onClick: (Z) => F(j.name)
              }, null, 8, ["label", "onClick"]),
              J(g(Ia), {
                open: !!p[j.name],
                title: f(j),
                width: "640px",
                "onUpdate:open": (Z) => p[j.name] = Z
              }, {
                default: Us(() => [
                  J(g(lm), {
                    styles: j.values || [],
                    "model-value": String(b(j.name, "None")),
                    onSelect: (Z) => y(j.name, Z)
                  }, null, 8, ["styles", "model-value", "onSelect"])
                ]),
                _: 2
              }, 1032, ["open", "title", "onUpdate:open"])
            ], 8, Dm))), 128))
          ]))), 128))
        ], 512), [
          [Is, !T("advanced")]
        ])
      ], 4),
      z("div", km, [
        z("div", Em, [
          z("input", {
            value: O.value,
            type: "text",
            class: be(["fil-scanner-seed-field", { "is-random": x.value === "random" }]),
            readonly: x.value === "random",
            "aria-label": "Seed value",
            title: x.value === "fixed" ? g(n)("scn_seed_locked", "Locked seed") : g(n)("scn_seed_auto_random", "Auto-random — a new seed is generated each run"),
            onInput: W[1] || (W[1] = (D) => P.value = Number(D.target.value) || 0)
          }, null, 42, Tm),
          z("button", {
            type: "button",
            class: be(["fil-scanner-seed-pill", { active: x.value === "random" }]),
            title: g(n)("scn_seed_mode_tt", "Random generates a new seed each run."),
            onClick: M
          }, oe(g(n)("scn_seed_random", "Random")), 11, Rm),
          z("button", {
            type: "button",
            class: "fil-scanner-seed-pill",
            title: t.state.lastRunSeed != null ? `${g(n)("scn_seed_use_last_prefix", "Reuse the last run's seed:")} ${t.state.lastRunSeed}` : g(n)("scn_seed_use_last_tt", "Reuse the seed from the last executed run."),
            onClick: E
          }, oe(g(n)("scn_seed_use_last", "Use last")), 9, Pm),
          z("button", {
            type: "button",
            class: "fil-scanner-seed-pill fil-scanner-seed-pill-accent",
            title: g(n)("scn_seed_new_fixed_tt", "Generate a new random fixed seed."),
            onClick: Q
          }, oe(g(n)("scn_seed_new_fixed", "New fixed")), 9, Om)
        ])
      ])
    ]));
  }
}), $m = /* @__PURE__ */ Le(Nm, [["__scopeId", "data-v-875167a9"]]), Vm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $m
}, Symbol.toStringTag, { value: "Module" })), Bm = { class: "fil-cleaner-root" }, Hm = ["aria-pressed", "title", "onClick"], Um = { class: "fil-cleaner-label" }, jm = ["aria-pressed", "title", "onClick"], Wm = { class: "fil-cleaner-label" }, zm = /* @__PURE__ */ Ce({
  __name: "NeuroCleaner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Ht(), s = [
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
    }, { deep: !0 }), (d, f) => (C(), R("div", Bm, [
      J(g(yn), {
        title: g(n)("nc_section_vram", "🎮 VRAM / Models"),
        "model-value": u("vram"),
        "onUpdate:modelValue": f[0] || (f[0] = (p) => c("vram", p))
      }, null, 8, ["title", "model-value"]),
      (C(), R(de, null, Ae(s, (p) => Ge(z("button", {
        key: p.name,
        type: "button",
        class: be(["fil-cleaner-row", { active: l(p.name, p.defaultOn) }]),
        "aria-pressed": l(p.name, p.defaultOn),
        title: i(p.name, p.label),
        onClick: (h) => a(p.name, p.defaultOn)
      }, [
        f[2] || (f[2] = z("span", { class: "fil-cleaner-dot" }, null, -1)),
        z("span", Um, oe(g(n)(`nc_lbl_${p.name}`, p.label)), 1)
      ], 10, Hm), [
        [Is, !u("vram")]
      ])), 64)),
      J(g(yn), {
        title: g(n)("nc_section_ram", "💾 RAM / Cache (advanced)"),
        "model-value": u("ram"),
        "onUpdate:modelValue": f[1] || (f[1] = (p) => c("ram", p))
      }, null, 8, ["title", "model-value"]),
      (C(), R(de, null, Ae(o, (p) => Ge(z("button", {
        key: p.name,
        type: "button",
        class: be(["fil-cleaner-row", { active: l(p.name, p.defaultOn) }]),
        "aria-pressed": l(p.name, p.defaultOn),
        title: i(p.name, p.label),
        onClick: (h) => a(p.name, p.defaultOn)
      }, [
        f[3] || (f[3] = z("span", { class: "fil-cleaner-dot" }, null, -1)),
        z("span", Wm, oe(g(n)(`nc_lbl_${p.name}`, p.label)), 1)
      ], 10, jm), [
        [Is, !u("ram")]
      ])), 64))
    ]));
  }
}), Km = /* @__PURE__ */ Le(zm, [["__scopeId", "data-v-71474bb1"]]), Gm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Km
}, Symbol.toStringTag, { value: "Module" }));
function go(e) {
  return Math.min(1, Math.max(0, e));
}
const qm = { class: "fil-cmp-root" }, Xm = {
  key: 0,
  class: "fil-cmp-placeholder"
}, Ym = { class: "fil-cmp-save-row" }, Jm = {
  key: 2,
  class: "fil-cmp-settings"
}, Qm = /* @__PURE__ */ Ce({
  __name: "BeforeAfterCompare",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Ht(), s = X({
      get: () => t.state.ui.compare_mode ?? "wipe",
      set: (D) => {
        t.state.ui.compare_mode = D, M();
      }
    }), o = X({
      get: () => Number(t.state.ui.compare_position ?? 0.5),
      set: (D) => {
        t.state.ui.compare_position = go(D), M();
      }
    }), i = X({
      get: () => Number(t.state.ui.compare_opacity ?? 0.5),
      set: (D) => {
        t.state.ui.compare_opacity = go(D), M();
      }
    }), l = X({
      get: () => t.state.ui.settings_collapsed !== !1,
      set: (D) => {
        t.state.ui.settings_collapsed = D;
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
    function d(D) {
      t.state.nodeState.swap = D === "ON";
    }
    const f = X(() => String(t.state.nodeState.resize_mode ?? "Off"));
    function p(D) {
      t.state.nodeState.resize_mode = D;
    }
    const h = X(() => Number(t.state.nodeState.max_resolution ?? 4096) || 4096);
    function _(D) {
      t.state.nodeState.max_resolution = D;
    }
    const F = X(() => f.value !== "Off"), y = X(() => t.state.ui.compare_images ?? {}), S = /* @__PURE__ */ le(null), I = /* @__PURE__ */ le(null), b = /* @__PURE__ */ le(!1), w = X(() => !!S.value || !!I.value);
    function k(D) {
      return new Promise((U, j) => {
        const Z = new Image();
        Z.onload = () => U(Z), Z.onerror = () => j(new Error("image load failed")), Z.src = D;
      });
    }
    const T = /* @__PURE__ */ le(null), A = /* @__PURE__ */ le(null);
    let x = 0, P = null;
    He(
      () => t.state.ui.compare_images,
      async (D) => {
        var ie, ye;
        const U = D ?? {}, j = (ie = U.a) == null ? void 0 : ie[0], Z = (ye = U.b) == null ? void 0 : ye[0];
        b.value = !1, S.value = null, I.value = null;
        try {
          j && (S.value = await k(Zi(j))), Z && (I.value = await k(Zi(Z)));
        } catch {
          b.value = !0;
        }
        M();
      },
      { deep: !0, immediate: !0 }
    ), He([s, o, i], () => M());
    function O(D, U, j, Z) {
      if (!j || !Z) return { x: 0, y: 0, w: D, h: U };
      const ie = D / U, ye = j / Z;
      let Ze, ae;
      return ye > ie ? (Ze = D, ae = D / ye) : (ae = U, Ze = U * ye), { x: (D - Ze) / 2, y: (U - ae) / 2, w: Ze, h: ae };
    }
    function M() {
      x || (x = requestAnimationFrame(() => {
        x = 0, E();
      }));
    }
    function E() {
      const D = A.value, U = T.value;
      if (!D || !U) return;
      const j = window.devicePixelRatio || 1, Z = U.clientWidth, ie = U.clientHeight;
      if (Z <= 0 || ie <= 0) return;
      const ye = Math.round(Z * j), Ze = Math.round(ie * j);
      (D.width !== ye || D.height !== Ze) && (D.width = ye, D.height = Ze);
      const ae = D.getContext("2d");
      if (!ae) return;
      ae.setTransform(j, 0, 0, j, 0, 0), ae.clearRect(0, 0, Z, ie);
      const $e = S.value, De = I.value;
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
      const Ut = $e ?? De, ue = O(Z, ie, Ut.naturalWidth, Ut.naturalHeight);
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
        const Re = getComputedStyle(U).getPropertyValue("--fil-accent").trim() || "#e8724c";
        ae.save(), ae.strokeStyle = Re, ae.lineWidth = 2, ae.shadowColor = Re, ae.shadowBlur = 6, ae.beginPath(), ae.moveTo(qe, ue.y), ae.lineTo(qe, ue.y + ue.h), ae.stroke(), ae.restore();
      }
    }
    function Q(D) {
      const U = T.value;
      if (!U) return;
      const j = U.getBoundingClientRect();
      o.value = go((D.clientX - j.left) / j.width);
    }
    function B(D) {
      if (s.value !== "wipe") return;
      Q(D);
      const U = (Z) => Q(Z), j = () => {
        window.removeEventListener("pointermove", U), window.removeEventListener("pointerup", j);
      };
      window.addEventListener("pointermove", U), window.addEventListener("pointerup", j);
    }
    on(() => {
      P = new ResizeObserver(() => M()), T.value && P.observe(T.value), M();
    }), xn(() => {
      P == null || P.disconnect(), x && cancelAnimationFrame(x);
    });
    async function W(D) {
      var j, Z;
      const U = D === "a" ? (j = y.value.a) == null ? void 0 : j[0] : (Z = y.value.b) == null ? void 0 : Z[0];
      if (!U) {
        st.warning(n("cmp_no_preview", "Run the node to see a preview"));
        return;
      }
      try {
        const ie = await qt.saveCompareImage(U);
        st.success(`${n("cmp_saved", "Saved to output")}: ${ie.image.filename}`);
      } catch (ie) {
        st.warning(ie instanceof Error ? ie.message : "Save failed");
      }
    }
    return (D, U) => {
      var j, Z;
      return C(), R("div", qm, [
        J(g(No), {
          options: a.value,
          "model-value": s.value,
          label: g(n)("lbl_mode", "⚙️ Mode"),
          title: g(n)("cmp_view_mode", "How to compare the two images."),
          "onUpdate:modelValue": U[0] || (U[0] = (ie) => s.value = ie)
        }, null, 8, ["options", "model-value", "label", "title"]),
        z("div", {
          ref_key: "wrapRef",
          ref: T,
          class: "fil-cmp-canvas-wrap"
        }, [
          z("canvas", {
            ref_key: "canvasRef",
            ref: A,
            class: be(["fil-cmp-canvas", { "is-wipe": s.value === "wipe" }]),
            onPointerdown: B
          }, null, 34),
          w.value ? ne("", !0) : (C(), R("div", Xm, oe(b.value ? g(n)("cmp_load_error", "Could not load preview images") : g(n)("cmp_no_preview", "Run the node to see a preview")), 1))
        ], 512),
        s.value === "wipe" ? (C(), Ie(g(nt), {
          key: 0,
          "model-value": o.value,
          min: 0,
          max: 1,
          step: 0.01,
          label: g(n)("cmp_position", "Position"),
          "onUpdate:modelValue": U[1] || (U[1] = (ie) => o.value = ie)
        }, null, 8, ["model-value", "label"])) : ne("", !0),
        s.value === "overlay" ? (C(), Ie(g(nt), {
          key: 1,
          "model-value": i.value,
          min: 0,
          max: 1,
          step: 0.01,
          label: g(n)("cmp_opacity", "Opacity"),
          "onUpdate:modelValue": U[2] || (U[2] = (ie) => i.value = ie)
        }, null, 8, ["model-value", "label"])) : ne("", !0),
        z("div", Ym, [
          J(g(it), {
            variant: "sm",
            label: g(n)("cmp_save_before", "💾 Save before"),
            disabled: !((j = y.value.a) != null && j.length),
            onClick: U[3] || (U[3] = (ie) => W("a"))
          }, null, 8, ["label", "disabled"]),
          J(g(it), {
            variant: "sm",
            label: g(n)("cmp_save_after", "💾 Save after"),
            disabled: !((Z = y.value.b) != null && Z.length),
            onClick: U[4] || (U[4] = (ie) => W("b"))
          }, null, 8, ["label", "disabled"])
        ]),
        J(g(yn), {
          title: g(n)("cmp_settings", "Settings"),
          modelValue: l.value,
          "onUpdate:modelValue": U[5] || (U[5] = (ie) => l.value = ie)
        }, null, 8, ["title", "modelValue"]),
        l.value ? ne("", !0) : (C(), R("div", Jm, [
          J(g(gt), {
            options: ["ON", "OFF"],
            "option-labels": { ON: g(n)("cmp_swap_on_label", "🔄 Swapped"), OFF: g(n)("cmp_swap_off_label", "↔️ Normal") },
            "model-value": c.value,
            label: g(n)("lbl_swap", "🔁 Swap before/after"),
            title: g(n)("cmp_swap", "Swap which image is shown as before/after."),
            "onUpdate:modelValue": d
          }, null, 8, ["option-labels", "model-value", "label", "title"]),
          J(g(gt), {
            options: [...r],
            "option-labels": u,
            "model-value": f.value,
            label: g(n)("lbl_resize_mode", "🖥️ Resize mode"),
            title: g(n)("cmp_resize_mode", "Off keeps images untouched. Preview modes downscale for a lighter preview and, optionally, output."),
            "onUpdate:modelValue": p
          }, null, 8, ["options", "model-value", "label", "title"]),
          F.value ? (C(), Ie(g(nt), {
            key: 0,
            "model-value": h.value,
            min: 256,
            max: 8192,
            step: 64,
            label: g(n)("lbl_max_resolution", "🖼️ Max resolution"),
            title: g(n)("cmp_max_resolution", "Maximum width or height used when resizing is enabled."),
            "onUpdate:modelValue": _
          }, null, 8, ["model-value", "label", "title"])) : ne("", !0)
        ]))
      ]);
    };
  }
}), Zm = /* @__PURE__ */ Le(Qm, [["__scopeId", "data-v-2abe5720"]]), eh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zm
}, Symbol.toStringTag, { value: "Module" })), th = { class: "fil-up-root" }, nh = { class: "fil-up-row" }, sh = ["title"], oh = ["title"], ih = { class: "fil-up-row" }, lh = ["title"], ah = ["title"], rh = /* @__PURE__ */ Ce({
  __name: "UpscaleTileCalc",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Ht(), s = ["Low VRAM", "Balanced", "High VRAM", "Max Quality", "Ultra Quality"], o = {
      "Low VRAM": "🪫 Low VRAM",
      Balanced: "⚖️ Balanced",
      "High VRAM": "🔋 High VRAM",
      "Max Quality": "💎 Max Quality",
      "Ultra Quality": "👑 Ultra Quality"
    };
    function i(I, b) {
      return X({
        get: () => Number(t.state.nodeState[I] ?? t.state.initialValues[I] ?? b) || b,
        set: (w) => {
          t.state.nodeState[I] = w;
        }
      });
    }
    function l(I, b) {
      return X({
        get: () => t.state.nodeState[I] ?? t.state.initialValues[I] ?? b ? "ON" : "OFF",
        set: (w) => {
          t.state.nodeState[I] = w === "ON";
        }
      });
    }
    const a = i("upscale_factor", 2), r = i("tile_size", 512), u = i("tile_overlap", 64), c = i("manual_tile_cols", 0), d = i("manual_tile_rows", 0), f = i("max_megapixels", 0), p = l("auto_mode", !1), h = l("non_square_tiles", !1), _ = l("show_grid_preview", !0), F = X({
      get: () => String(t.state.nodeState.auto_profile ?? t.state.initialValues.auto_profile ?? "Balanced"),
      set: (I) => {
        t.state.nodeState.auto_profile = I;
      }
    });
    function y(I) {
      return !!t.state.ui[`collapsed_${I}`];
    }
    function S(I, b) {
      t.state.ui[`collapsed_${I}`] = b;
    }
    return He(() => t.state.nodeState, () => {
    }, { deep: !0 }), (I, b) => (C(), R("div", th, [
      J(g(nt), {
        "model-value": g(a),
        min: 0.1,
        max: 8,
        step: 0.25,
        label: g(n)("lbl_upscale_factor", "🔍 Upscale factor"),
        title: g(n)("utc_factor", "Upscale multiplier."),
        "onUpdate:modelValue": b[0] || (b[0] = (w) => a.value = w)
      }, null, 8, ["model-value", "label", "title"]),
      J(g(yn), {
        title: g(n)("utc_section_auto", "⚙️ Auto / advanced"),
        "model-value": y("auto"),
        "onUpdate:modelValue": b[1] || (b[1] = (w) => S("auto", w))
      }, null, 8, ["title", "model-value"]),
      y("auto") ? ne("", !0) : (C(), R(de, { key: 0 }, [
        J(g(gt), {
          options: ["ON", "OFF"],
          "option-labels": { ON: "⚙️ ON", OFF: "OFF" },
          "model-value": g(p),
          label: g(n)("lbl_full_auto", "🤖 Full auto"),
          title: g(n)("utc_auto_mode", "Pick tile size/overlap automatically from the selected VRAM profile."),
          "onUpdate:modelValue": b[2] || (b[2] = (w) => p.value = w)
        }, null, 8, ["model-value", "label", "title"]),
        g(p) === "ON" ? (C(), Ie(g(gt), {
          key: 0,
          options: [...s],
          "option-labels": o,
          "model-value": F.value,
          label: g(n)("lbl_auto_profile", "🎚️ Auto profile"),
          title: g(n)("utc_auto_profile", "VRAM/quality profile used when Full Auto is on."),
          "onUpdate:modelValue": b[3] || (b[3] = (w) => F.value = w)
        }, null, 8, ["options", "model-value", "label", "title"])) : ne("", !0),
        g(p) === "OFF" ? (C(), R(de, { key: 1 }, [
          z("div", nh, [
            z("label", {
              class: "fil-w-label",
              title: g(n)("utc_tile_size", "Base tile size.")
            }, oe(g(n)("lbl_tile_size", "🔲 Tile size")), 9, sh),
            J(g(dn), {
              modelValue: g(r),
              "onUpdate:modelValue": b[4] || (b[4] = (w) => /* @__PURE__ */ ve(r) ? r.value = w : null),
              min: 64,
              max: 2048,
              step: 64
            }, null, 8, ["modelValue"]),
            z("label", {
              class: "fil-w-label",
              title: g(n)("utc_overlap", "Tile overlap.")
            }, oe(g(n)("lbl_overlap", "🧵 Overlap")), 9, oh),
            J(g(dn), {
              modelValue: g(u),
              "onUpdate:modelValue": b[5] || (b[5] = (w) => /* @__PURE__ */ ve(u) ? u.value = w : null),
              min: 0,
              max: 512,
              step: 8
            }, null, 8, ["modelValue"])
          ]),
          z("div", ih, [
            z("label", {
              class: "fil-w-label",
              title: g(n)("utc_manual_cols", "Force this many tile columns. 0 = compute from tile size.")
            }, oe(g(n)("lbl_manual_cols", "↔️ Manual cols")), 9, lh),
            J(g(dn), {
              modelValue: g(c),
              "onUpdate:modelValue": b[6] || (b[6] = (w) => /* @__PURE__ */ ve(c) ? c.value = w : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"]),
            z("label", {
              class: "fil-w-label",
              title: g(n)("utc_manual_rows", "Force this many tile rows. 0 = compute from tile size.")
            }, oe(g(n)("lbl_manual_rows", "↕️ Manual rows")), 9, ah),
            J(g(dn), {
              modelValue: g(d),
              "onUpdate:modelValue": b[7] || (b[7] = (w) => /* @__PURE__ */ ve(d) ? d.value = w : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"])
          ])
        ], 64)) : ne("", !0)
      ], 64)),
      J(g(nt), {
        "model-value": g(f),
        min: 0,
        max: 64,
        step: 0.5,
        label: g(n)("lbl_max_megapixels", "🖼️ Max megapixels"),
        title: g(n)("utc_max_mp", "Cap the upscaled output at this many megapixels. 0 = no cap."),
        "onUpdate:modelValue": b[8] || (b[8] = (w) => f.value = w)
      }, null, 8, ["model-value", "label", "title"]),
      J(g(gt), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "🧩 ON", OFF: "OFF" },
        "model-value": g(h),
        label: g(n)("lbl_non_square", "📐 Non-square tiles"),
        title: g(n)("utc_non_square", "Allow rectangular tiles instead of forcing square ones."),
        "onUpdate:modelValue": b[9] || (b[9] = (w) => h.value = w)
      }, null, 8, ["model-value", "label", "title"]),
      J(g(gt), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "🔲 ON", OFF: "OFF" },
        "model-value": g(_),
        label: g(n)("lbl_show_grid", "🔳 Show grid preview"),
        title: g(n)("utc_show_grid", "Render a tile-grid overlay on the preview output."),
        "onUpdate:modelValue": b[10] || (b[10] = (w) => _.value = w)
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), ch = /* @__PURE__ */ Le(rh, [["__scopeId", "data-v-4e44dd46"]]), uh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ch
}, Symbol.toStringTag, { value: "Module" })), dh = { class: "fil-hrf-root" }, fh = /* @__PURE__ */ Ce({
  __name: "HiResFix",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Ht();
    function s(A, x) {
      return X({
        get: () => Number(t.state.nodeState[A] ?? t.state.initialValues[A] ?? x) || x,
        set: (P) => {
          t.state.nodeState[A] = P;
        }
      });
    }
    function o(A, x) {
      return X({
        get: () => String(t.state.nodeState[A] ?? t.state.initialValues[A] ?? x),
        set: (P) => {
          t.state.nodeState[A] = P;
        }
      });
    }
    function i(A, x) {
      return X({
        get: () => t.state.nodeState[A] ?? t.state.initialValues[A] ?? x ? "ON" : "OFF",
        set: (P) => {
          t.state.nodeState[A] = P === "ON";
        }
      });
    }
    function l(A, x) {
      var E;
      const P = t.state.node, O = P ? fe(P, A) : null, M = (E = O == null ? void 0 : O.options) == null ? void 0 : E.values;
      return Array.isArray(M) && M.length ? M : x;
    }
    const a = o("upscale_type", "latent"), r = o("hires_ckpt_name", "(use same)"), u = o("latent_upscaler", "nearest-exact"), c = o("pixel_upscaler", ""), d = s("upscale_by", 1.25), f = i("use_same_seed", !0), p = s("denoise", 0.56), h = s("iterations", 1), _ = i("use_controlnet", !1), F = o("control_net_name", ""), y = s("strength", 1), S = X(() => l("hires_ckpt_name", ["(use same)"])), I = ["nearest-exact", "bilinear", "area", "bicubic", "bislerp"], b = X(() => l("pixel_upscaler", ["(none)"])), w = X(() => l("control_net_name", ["(none)"])), k = X(() => a.value === "latent"), T = X(() => a.value === "pixel" || a.value === "both");
    return (A, x) => (C(), R("div", dh, [
      J(g(gt), {
        options: ["latent", "pixel", "both"],
        "option-labels": { latent: "🌀 latent", pixel: "🖼️ pixel", both: "🔀 both" },
        "model-value": g(a),
        label: g(n)("lbl_upscale_type", "⬆️ Upscale type"),
        title: g(n)("hrf_upscale_type", "Upscale in latent space, pixel space, or both."),
        "onUpdate:modelValue": x[0] || (x[0] = (P) => a.value = P)
      }, null, 8, ["model-value", "label", "title"]),
      k.value ? (C(), Ie(g(ds), {
        key: 0,
        options: I,
        "model-value": g(u),
        label: g(n)("lbl_latent_up", "🌀 Latent upscaler"),
        title: g(n)("hrf_latent_up", "Latent upscale method."),
        "onUpdate:modelValue": x[1] || (x[1] = (P) => u.value = P)
      }, null, 8, ["model-value", "label", "title"])) : ne("", !0),
      T.value ? (C(), Ie(g(ds), {
        key: 1,
        options: b.value,
        "model-value": g(c),
        label: g(n)("lbl_pixel_up", "🖼️ Pixel upscaler"),
        title: g(n)("hrf_pixel_up", "Pixel upscale model (from upscale_models)."),
        "onUpdate:modelValue": x[2] || (x[2] = (P) => c.value = P)
      }, null, 8, ["options", "model-value", "label", "title"])) : ne("", !0),
      J(g(ds), {
        options: S.value,
        "model-value": g(r),
        label: g(n)("lbl_hires_ckpt", "📦 Hires checkpoint"),
        title: g(n)("hrf_ckpt", "Checkpoint for the hires pass. (use same) reuses the base model."),
        "onUpdate:modelValue": x[3] || (x[3] = (P) => r.value = P)
      }, null, 8, ["options", "model-value", "label", "title"]),
      J(g(nt), {
        "model-value": g(d),
        min: 0.01,
        max: 8,
        step: 0.05,
        label: g(n)("lbl_upscale_by", "🔍 Upscale by"),
        title: g(n)("hrf_upscale_by", "Upscale multiplier."),
        "onUpdate:modelValue": x[4] || (x[4] = (P) => d.value = P)
      }, null, 8, ["model-value", "label", "title"]),
      J(g(nt), {
        "model-value": g(p),
        min: 0,
        max: 1,
        step: 0.01,
        label: g(n)("lbl_hrf_denoise", "💧 Denoise"),
        title: g(n)("hrf_denoise", "Denoise strength for the hires re-sample."),
        "onUpdate:modelValue": x[5] || (x[5] = (P) => p.value = P)
      }, null, 8, ["model-value", "label", "title"]),
      J(g(dn), {
        modelValue: g(h),
        "onUpdate:modelValue": x[6] || (x[6] = (P) => /* @__PURE__ */ ve(h) ? h.value = P : null),
        min: 0,
        max: 5,
        step: 1,
        label: g(n)("lbl_iterations", "🔁 Iterations"),
        title: g(n)("hrf_iterations", "How many upscale+resample passes to run.")
      }, null, 8, ["modelValue", "label", "title"]),
      J(g(gt), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "♻️ same seed", OFF: "🎲 own" },
        "model-value": g(f),
        label: g(n)("lbl_use_same_seed", "🌱 Seed source"),
        title: g(n)("hrf_same_seed", "Reuse the samplers seed for the hires pass."),
        "onUpdate:modelValue": x[7] || (x[7] = (P) => f.value = P)
      }, null, 8, ["model-value", "label", "title"]),
      J(g(gt), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "🕹️ ON", OFF: "OFF" },
        "model-value": g(_),
        label: g(n)("lbl_use_cn", "🕹️ Use ControlNet"),
        title: g(n)("hrf_use_cn", "Guide the hires pass with a ControlNet."),
        "onUpdate:modelValue": x[8] || (x[8] = (P) => _.value = P)
      }, null, 8, ["model-value", "label", "title"]),
      g(_) === "ON" ? (C(), R(de, { key: 2 }, [
        J(g(ds), {
          options: w.value,
          "model-value": g(F),
          label: g(n)("lbl_cn_name", "🧩 ControlNet model"),
          title: g(n)("hrf_cn_name", "ControlNet model to apply."),
          "onUpdate:modelValue": x[9] || (x[9] = (P) => F.value = P)
        }, null, 8, ["options", "model-value", "label", "title"]),
        J(g(nt), {
          "model-value": g(y),
          min: 0,
          max: 10,
          step: 0.01,
          label: g(n)("lbl_cn_strength", "💪 Strength"),
          title: g(n)("hrf_cn_strength", "ControlNet strength."),
          "onUpdate:modelValue": x[10] || (x[10] = (P) => y.value = P)
        }, null, 8, ["model-value", "label", "title"])
      ], 64)) : ne("", !0)
    ]));
  }
}), ph = /* @__PURE__ */ Le(fh, [["__scopeId", "data-v-e45e6326"]]), mh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ph
}, Symbol.toStringTag, { value: "Module" })), hh = {
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
}, gh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HELP_DEFAULTS: hh
}, Symbol.toStringTag, { value: "Module" }));
//# sourceMappingURL=fil_design_imagemind.js.map
