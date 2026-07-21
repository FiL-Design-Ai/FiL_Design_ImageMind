(function(){try{var s=document.createElement("style");s.textContent=".fil-color-picker[data-v-c4d5f476]{display:flex;flex-direction:column;gap:8px;padding:8px;width:176px;box-sizing:border-box}.fil-cp-sv[data-v-c4d5f476]{position:relative;width:100%;height:100px;border-radius:4px;cursor:crosshair;touch-action:none}.fil-cp-sv-white[data-v-c4d5f476]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to right,#fff,#fff0);border-radius:4px}.fil-cp-sv-black[data-v-c4d5f476]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to top,#000,#0000);border-radius:4px}.fil-cp-sv-thumb[data-v-c4d5f476]{position:absolute;width:10px;height:10px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hue[data-v-c4d5f476]{position:relative;width:100%;height:12px;border-radius:6px;background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red);cursor:pointer;touch-action:none}.fil-cp-hue-thumb[data-v-c4d5f476]{position:absolute;top:50%;width:12px;height:12px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hex-row[data-v-c4d5f476]{display:flex;align-items:center;gap:6px}.fil-cp-swatch[data-v-c4d5f476]{width:22px;height:22px;border-radius:4px;border:1px solid rgba(255,255,255,.25);flex-shrink:0}.fil-cp-hex-input[data-v-c4d5f476]{flex:1;min-width:0;height:22px;box-sizing:border-box;border-radius:4px;border:1px solid rgba(255,255,255,.2);background:#00000040;color:#f2f2f2;font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:12px;padding:0 6px;outline:none}.fil-cp-hex-input[data-v-c4d5f476]:focus{border-color:#ffffff80}.fil-cp-presets[data-v-c4d5f476]{display:grid;grid-template-columns:repeat(5,1fr);gap:4px}.fil-color-swatch[data-v-c4d5f476]{width:24px;height:24px;border-radius:4px;border:2px solid transparent;background:var(--swatch);cursor:pointer;transition:border-color .08s,transform .08s;outline:none;box-sizing:border-box}.fil-color-swatch[data-v-c4d5f476]:hover{border-color:#ffffff80;transform:scale(1.15)}.fil-color-swatch.is-active[data-v-c4d5f476]{border-color:#fff;box-shadow:0 0 0 1px var(--swatch)}.fil-node-shell[data-v-15f48dad]{position:relative}.fil-icon[data-v-dfb78d9f]{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;line-height:0}.fil-icon[data-v-dfb78d9f] svg{width:100%;height:100%}.fil-modal-backdrop[data-v-00452928]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000;display:flex;align-items:center;justify-content:center;background:#0000008c;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.fil-modal-panel[data-v-00452928]{width:90%;max-height:80vh;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:10px;box-shadow:0 20px 60px #00000080;display:flex;flex-direction:column;overflow:hidden}.fil-modal-header[data-v-00452928]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08)}.fil-modal-title[data-v-00452928]{font-size:14px;font-weight:600;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-close[data-v-00452928]{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;border:none;background:transparent;color:var(--fil-muted, rgba(255, 255, 255, .5));cursor:pointer;transition:background .08s,color .08s}.fil-modal-close[data-v-00452928]:hover{background:#ffffff14;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-body[data-v-00452928]{flex:1;overflow-y:auto;padding:16px}.fil-modal-enter-active[data-v-00452928],.fil-modal-leave-active[data-v-00452928]{transition:opacity .15s ease}.fil-modal-enter-from[data-v-00452928],.fil-modal-leave-to[data-v-00452928]{opacity:0}.fil-modal-enter-active .fil-modal-panel[data-v-00452928],.fil-modal-leave-active .fil-modal-panel[data-v-00452928]{transition:transform .15s ease}.fil-modal-enter-from .fil-modal-panel[data-v-00452928],.fil-modal-leave-to .fil-modal-panel[data-v-00452928]{transform:scale(.95) translateY(8px)}.fil-help-title[data-v-536c1547]{margin:0 0 12px;font-size:16px;font-weight:700;color:var(--fil-text, rgba(255,255,255,.9))}.fil-help-body[data-v-536c1547]{margin:0 0 12px;font-size:13px;line-height:1.6;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet[data-v-536c1547]{display:flex;gap:6px;align-items:flex-start;margin-bottom:6px;font-size:13px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet>span[data-v-536c1547]{flex:1}.fil-help-table[data-v-536c1547]{width:100%;border-collapse:collapse;margin-top:8px;font-size:12px}.fil-help-table th[data-v-536c1547],.fil-help-table td[data-v-536c1547]{text-align:left;padding:6px 10px;border-bottom:1px solid rgba(255,255,255,.06)}.fil-help-table th[data-v-536c1547]{font-weight:600;color:var(--fil-text, rgba(255,255,255,.85))}.fil-help-table td[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.6))}.fil-help-code[data-v-536c1547]{background:#0000004d;border-radius:6px;padding:12px;margin-top:10px;overflow-x:auto;font-size:12px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-empty[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.4));font-size:13px}.fil-toast-stack[data-v-08cc58fa]{position:fixed;right:20px;bottom:20px;z-index:100001;display:flex;flex-direction:column;gap:8px;pointer-events:none;max-width:min(360px,90vw)}.fil-toast[data-v-08cc58fa]{pointer-events:auto;display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:8px;background:var(--fil-panel, #171b22);color:var(--fil-text, #e8edf3);border:1px solid var(--fil-panel-alt, #2a3041);border-left:3px solid var(--toast-color, var(--fil-muted));box-shadow:0 6px 22px #0000006b;font:12.5px/1.45 system-ui,sans-serif;animation:fil-toast-in-08cc58fa .18s cubic-bezier(.2,.7,.3,1)}@keyframes fil-toast-in-08cc58fa{0%{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}.fil-toast-dot[data-v-08cc58fa]{flex:none;width:8px;height:8px;margin-top:4px;border-radius:50%;background:var(--toast-color, var(--fil-muted))}.fil-toast-text[data-v-08cc58fa]{flex:1;min-width:0;align-self:center}.fil-toast-action[data-v-08cc58fa]{flex:none;cursor:pointer;padding:4px 8px;border-radius:4px;background:#ffffff0f;color:inherit;border:none;font:inherit;transition:background .12s}.fil-toast-action[data-v-08cc58fa]:hover{background:#ffffff24}.fil-toast-close[data-v-08cc58fa]{flex:none;align-self:flex-start;cursor:pointer;width:18px;height:18px;padding:0;border:none;background:none;color:var(--fil-muted);opacity:.6;transition:opacity .12s;font-size:16px;line-height:18px}.fil-toast-close[data-v-08cc58fa]:hover{opacity:1}.fil-w-btn[data-v-1c6537e0]{box-sizing:border-box;padding:var(--fil-row-pad);border-radius:6px;background:#ffffff0d;border:1px solid rgba(255,255,255,.14);color:var(--fil-text, rgba(255, 255, 255, .85));font-family:ui-sans-serif,system-ui,sans-serif;font-size:12px;cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;display:inline-flex;align-items:center;justify-content:center;gap:6px}.fil-w-btn[data-v-1c6537e0]:hover:not(:disabled){background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #fff)}.fil-w-btn[data-v-1c6537e0]:active{transform:translateY(1px)}.fil-w-btn[data-v-1c6537e0]:disabled{opacity:.4;cursor:default}.fil-w-btn-accent[data-v-1c6537e0]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #fff)}.fil-w-btn-danger[data-v-1c6537e0]{color:var(--fil-danger, #ef6666)}.fil-w-btn-danger[data-v-1c6537e0]:hover:not(:disabled){background:var(--fil-danger, #ef6666);border-color:var(--fil-danger, #ef6666);color:#fff}.fil-w-btn-sm[data-v-1c6537e0]{padding:4px 8px;font-size:11px}.fil-w-btn-full[data-v-1c6537e0]{width:100%;display:block}.fil-w-btn-icon[data-v-1c6537e0]{display:inline-flex;align-items:center;justify-content:center;gap:5px}.fil-w-btn-glyph[data-v-1c6537e0] svg{width:14px;height:14px}.fil-w-btn.is-flashing[data-v-1c6537e0],.fil-w-btn.is-flashing[data-v-1c6537e0]:hover{background:var(--fil-ok, #62c987);border-color:var(--fil-ok, #62c987);color:#fff}.fil-w-btn.is-loading[data-v-1c6537e0]{cursor:wait}.fil-w-btn[data-v-1c6537e0]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-btn-spinner[data-v-1c6537e0]{display:inline-block;width:12px;height:12px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:fil-w-spin-1c6537e0 .6s linear infinite}@keyframes fil-w-spin-1c6537e0{to{transform:rotate(360deg)}}.fil-pm-root[data-v-ae1b468d]{display:flex;flex-direction:column;gap:12px;padding:4px 0}.fil-pm-card[data-v-ae1b468d]{background:#ffffff08;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:12px}.fil-pm-header[data-v-ae1b468d]{display:flex;align-items:center;gap:8px;margin-bottom:10px}.fil-pm-card--collapsed[data-v-ae1b468d]{padding:8px 12px}.fil-pm-card--collapsed .fil-pm-header[data-v-ae1b468d]{margin-bottom:0}.fil-pm-header--clickable[data-v-ae1b468d]{cursor:pointer}.fil-pm-header--clickable:hover .fil-pm-name[data-v-ae1b468d]{color:var(--fil-accent, #7c5cfc)}.fil-pm-chevron[data-v-ae1b468d]{display:inline-flex;align-items:center;color:#fff6;transition:transform .12s ease}.fil-pm-chevron--open[data-v-ae1b468d]{transform:rotate(90deg)}.fil-pm-icon[data-v-ae1b468d]{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px}.fil-pm-name[data-v-ae1b468d]{font-weight:600;font-size:14px;color:var(--fil-text, #f2f2f2)}.fil-pm-disp[data-v-ae1b468d]{font-size:11px;color:#ffffff80}.fil-pm-status[data-v-ae1b468d]{margin-left:auto;display:inline-flex;align-items:center;gap:5px;font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#fff6;white-space:nowrap}.fil-pm-dot[data-v-ae1b468d]{width:8px;height:8px;border-radius:50%;background:currentColor;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 22%,transparent)}.fil-pm-status--connected[data-v-ae1b468d]{color:var(--fil-success, #4ade80)}.fil-pm-status--configured[data-v-ae1b468d]{color:var(--fil-warning, #fbbf24)}.fil-pm-status--off[data-v-ae1b468d]{color:#ffffff4d}.fil-pm-fields[data-v-ae1b468d]{display:flex;flex-direction:column;gap:8px;margin-bottom:10px}.fil-pm-field[data-v-ae1b468d]{display:flex;flex-direction:column;gap:3px}.fil-pm-field-label[data-v-ae1b468d]{font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#ffffff80}.fil-pm-input[data-v-ae1b468d]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,monospace;font-size:13px;outline:none;transition:border-color .08s}.fil-pm-input[data-v-ae1b468d]:focus{border-color:var(--fil-accent)}.fil-pm-input.fil-pm-has-val[data-v-ae1b468d]{border-color:var(--fil-muted, #555)}.fil-pm-actions[data-v-ae1b468d]{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}.fil-pm-models[data-v-ae1b468d]{display:flex;flex-wrap:wrap;gap:4px}.fil-pm-model-tag[data-v-ae1b468d]{display:inline-flex;align-items:center;gap:3px;background:#ffffff12;border-radius:4px;padding:2px 6px;font-size:11px;color:#ffffffbf;white-space:nowrap}.fil-pm-vision-badge[data-v-ae1b468d]{font-size:10px;line-height:1}.fil-pm-err[data-v-ae1b468d]{font-size:11px;color:var(--fil-danger, #ef6666);margin-top:4px}.fil-pm-age[data-v-ae1b468d]{font-size:10px;color:#fff6;align-self:center}.fil-w-chips[data-v-3c07d909]{display:grid;gap:5px;width:100%}.fil-w-chip[data-v-3c07d909]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-3c07d909]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-3c07d909]{background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-accent);border-color:var(--fil-accent);font-weight:500;box-shadow:0 0 8px color-mix(in srgb,var(--fil-accent) 55%,transparent)}.fil-w-chip.disabled[data-v-3c07d909]{opacity:.5;cursor:default}.fil-w-chip[data-v-3c07d909]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chiplist[data-v-5ccf2e00]{display:flex;flex-direction:column;gap:5px;width:100%}.fil-w-search[data-v-5ccf2e00]{box-sizing:border-box;width:100%;padding:5px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:11px;outline:none}.fil-w-search[data-v-5ccf2e00]:focus{border-color:var(--fil-accent)}.fil-w-search[data-v-5ccf2e00]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-chip-scroll[data-v-5ccf2e00]{display:grid;gap:3px;max-height:200px;overflow-y:auto;overflow-x:hidden;padding-right:2px}.fil-w-chip-scroll[data-v-5ccf2e00]::-webkit-scrollbar{width:5px}.fil-w-chip-scroll[data-v-5ccf2e00]::-webkit-scrollbar-thumb{background:var(--fil-muted, #555);border-radius:3px}.fil-w-chip-scroll[data-v-5ccf2e00]::-webkit-scrollbar-track{background:transparent}.fil-w-chip[data-v-5ccf2e00]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-5ccf2e00]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-5ccf2e00]{background:var(--fil-accent);color:var(--fil-accent-ink, #fff);border-color:var(--fil-accent);font-weight:500}.fil-w-chip.disabled[data-v-5ccf2e00]{opacity:.5;cursor:default}.fil-w-chip[data-v-5ccf2e00]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chip-empty[data-v-5ccf2e00]{padding:8px;text-align:center;color:var(--fil-muted, #666);font-size:11px}.fil-combo[data-v-73f94a33]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-combo-label[data-v-73f94a33]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-combo-trigger[data-v-73f94a33]{grid-column:2;width:100%;box-sizing:border-box;height:30px;display:flex;align-items:center;gap:6px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer;text-align:left;-moz-appearance:none;appearance:none;-webkit-appearance:none}.fil-combo-trigger.open[data-v-73f94a33],.fil-combo-trigger[data-v-73f94a33]:focus-visible{border-color:var(--fil-accent);outline:2px solid var(--fil-accent);outline-offset:1px}.fil-combo-trigger.disabled[data-v-73f94a33]{opacity:.5;cursor:default}.fil-combo-trigger-label[data-v-73f94a33]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-chevron[data-v-73f94a33]{font-size:9px;color:var(--fil-muted, rgba(255, 255, 255, .5));flex-shrink:0}.fil-combo-badge[data-v-73f94a33]{flex-shrink:0;font-size:9px;line-height:1;padding:2px 5px;border-radius:999px;background:var(--fil-accent);color:var(--fil-accent-ink, #fff);font-weight:600}.fil-combo-panel[data-v-73f94a33]{position:fixed;z-index:10001;box-sizing:border-box;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:8px;box-shadow:0 12px 32px #0006;display:flex;flex-direction:column;overflow:hidden;padding:6px}.fil-combo-search[data-v-73f94a33]{box-sizing:border-box;width:100%;margin-bottom:6px;padding:6px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-combo-search[data-v-73f94a33]:focus{border-color:var(--fil-accent)}.fil-combo-list[data-v-73f94a33]{display:flex;flex-direction:column;gap:2px;max-height:240px;overflow-y:auto}.fil-combo-option[data-v-73f94a33]{display:flex;align-items:center;gap:6px;width:100%;box-sizing:border-box;padding:6px 8px;border-radius:5px;border:none;background:transparent;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;text-align:left;cursor:pointer;outline:none}.fil-combo-option.active[data-v-73f94a33]{background:#ffffff14}.fil-combo-option.selected[data-v-73f94a33]{color:var(--fil-accent);font-weight:600}.fil-combo-option-label[data-v-73f94a33]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-empty[data-v-73f94a33]{padding:10px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-w-info[data-v-851660c1]{font-size:11px;line-height:1.5;color:#ffffff73;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.fil-w-info[data-ok][data-v-851660c1]{color:var(--fil-ok, #62c987)}.fil-w-info[data-err][data-v-851660c1]{color:var(--fil-danger, #ef6666)}.fil-w-numfield[data-v-5fe162a0]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-numfield.no-label[data-v-5fe162a0]{display:contents}.fil-w-numfield-label[data-v-5fe162a0]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-numfield:not(.no-label) .fil-w-num-wrap[data-v-5fe162a0]{grid-column:2}.fil-w-num-wrap[data-v-5fe162a0]{position:relative;width:100%;min-width:0}.fil-w-num[data-v-5fe162a0]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 20px 7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:14px;text-align:left;outline:none;transition:border-color .08s}.fil-w-num[data-v-5fe162a0]:focus{border-color:var(--fil-accent)}.fil-w-num[data-v-5fe162a0]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-num[data-v-5fe162a0]:disabled{opacity:.5}.fil-w-num-step[data-v-5fe162a0]{position:absolute;top:1px;right:1px;bottom:1px;width:17px;display:flex;flex-direction:column;border-left:1px solid var(--fil-muted, #3a3d40);overflow:hidden;border-radius:0 5px 5px 0}.fil-w-num-btn[data-v-5fe162a0]{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;border:none;background:transparent;color:var(--fil-muted, rgba(255, 255, 255, .55));font-size:7px;line-height:1;cursor:pointer;padding:0;transition:color .08s,background .08s}.fil-w-num-btn[data-v-5fe162a0]:last-child{border-top:1px solid var(--fil-muted, #3a3d40)}.fil-w-num-btn[data-v-5fe162a0]:hover:not(:disabled){color:var(--fil-accent);background:#ffffff12}.fil-w-num-btn[data-v-5fe162a0]:disabled{opacity:.3;cursor:default}.fil-w-section[data-v-686d0388]{box-sizing:border-box;width:100%;padding:var(--fil-row-pad);border:none;border-radius:5px;background:#ffffff0a;color:var(--fil-muted, rgba(255, 255, 255, .7));font-family:inherit;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;cursor:pointer;text-align:left;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s;display:flex;align-items:center;gap:6px}.fil-w-section[data-v-686d0388]:hover:not(:disabled){background:#ffffff14;color:#fff}.fil-w-section[data-v-686d0388]:disabled{cursor:default}.fil-w-section[data-v-686d0388]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-section-arrow[data-v-686d0388]{display:inline-block;width:8px;font-size:9px;color:var(--fil-accent)}.fil-w-segmented[data-v-738d9e4d]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-segmented-label[data-v-738d9e4d]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-pill[data-v-738d9e4d]{grid-column:2;display:flex;gap:0;min-width:0;background:#ffffff0f;border-radius:7px;padding:3px}.fil-w-pill.disabled[data-v-738d9e4d]{opacity:.5}.fil-w-seg[data-v-738d9e4d]{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center;padding:6px;border:none;border-radius:5px;background:transparent;font-family:inherit;font-size:12px;color:var(--fil-muted, rgba(255, 255, 255, .55));cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s}.fil-w-seg[data-v-738d9e4d]:hover:not(.active){color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-w-seg.active[data-v-738d9e4d]{background:var(--fil-accent);color:var(--fil-accent-ink, #fff);font-weight:500}.fil-w-seg[data-v-738d9e4d]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-select[data-v-77c303be]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-select-label[data-v-77c303be]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-select-input[data-v-77c303be]{grid-column:2;width:100%;box-sizing:border-box;height:30px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer}.fil-w-select-input[data-v-77c303be]:focus{border-color:var(--fil-accent)}.fil-w-select-input[data-v-77c303be]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-select-input[data-v-77c303be]:disabled{opacity:.5;cursor:default}.fil-w-slider[data-v-785fba56]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-slider-label[data-v-785fba56]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-slider-row[data-v-785fba56]{grid-column:2;display:flex;align-items:center;gap:6px;min-width:0}.fil-w-slider-range[data-v-785fba56]{flex:1 1 auto;min-width:0;max-width:220px;accent-color:var(--fil-accent);cursor:pointer}.fil-w-slider-range[data-v-785fba56]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-slider-row[data-v-785fba56] .fil-w-num-wrap{width:70px;flex:none}.fil-style-picker[data-v-7f1dfd99]{display:flex;flex-direction:column;gap:10px}.fil-style-cats[data-v-7f1dfd99]{display:flex;flex-wrap:wrap;gap:6px}.fil-style-cat[data-v-7f1dfd99]{box-sizing:border-box;padding:5px 10px;border-radius:999px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .2));background:#ffffff0a;color:var(--fil-text, rgba(255, 255, 255, .8));font-size:11px;cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-cat[data-v-7f1dfd99]:hover{border-color:var(--fil-accent)}.fil-style-cat.active[data-v-7f1dfd99]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #fff);font-weight:500}.fil-style-cat[data-v-7f1dfd99]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-style-search[data-v-7f1dfd99]{box-sizing:border-box;width:100%;padding:7px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-style-search[data-v-7f1dfd99]:focus{border-color:var(--fil-accent)}.fil-style-grid[data-v-7f1dfd99]{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:8px;max-height:50vh;overflow-y:auto;padding-right:2px}.fil-style-tile[data-v-7f1dfd99]{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px 6px;border-radius:8px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .14));background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-tile[data-v-7f1dfd99]:hover{border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-style-tile.active[data-v-7f1dfd99]{border-color:var(--fil-accent);background:#f68a4524}.fil-style-tile[data-v-7f1dfd99]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-style-tile-preview[data-v-7f1dfd99]{width:100%;aspect-ratio:1;border-radius:6px;background:#ffffff0d;display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:22px}.fil-style-tile-img[data-v-7f1dfd99]{width:100%;height:100%;object-fit:cover}.fil-style-tile-label[data-v-7f1dfd99]{font-size:10px;text-align:center;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.fil-style-empty[data-v-7f1dfd99]{grid-column:1 / -1;padding:20px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-w-toggle[data-v-d39b7896]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-toggle-label[data-v-d39b7896]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-toggle.bare[data-v-d39b7896]{display:flex;width:auto;gap:4px}.fil-w-toggle.bare .fil-w-toggle-label[data-v-d39b7896]{font-size:10px;white-space:nowrap}.fil-w-switch[data-v-d39b7896]{grid-column:2;justify-self:start;width:36px;height:20px;padding:2px;box-sizing:border-box;border:none;border-radius:10px;background:#ffffff24;cursor:pointer;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .12s}.fil-w-switch.on[data-v-d39b7896]{background:var(--fil-accent)}.fil-w-switch[data-v-d39b7896]:disabled{opacity:.5;cursor:default}.fil-w-switch[data-v-d39b7896]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-switch-thumb[data-v-d39b7896]{display:block;width:16px;height:16px;border-radius:50%;background:#fff;transition:transform .12s}.fil-w-switch.on .fil-w-switch-thumb[data-v-d39b7896]{transform:translate(16px)}div.fil-seed-root[data-v-90901c4f]{display:flex;flex-direction:row;align-items:center;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;background:transparent;border:none;border-radius:0;box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none}.fil-seed-display[data-v-90901c4f]{flex:1;min-width:0;box-sizing:border-box;height:34px;background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);padding:6px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:19px;text-align:center;outline:none;transition:border-color .08s}.fil-seed-display[data-v-90901c4f]:focus{border-color:var(--fil-accent)}.fil-seed-display[readonly][data-v-90901c4f]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-seed-actions[data-v-90901c4f]{display:flex;gap:5px;flex-shrink:0}.fil-seed-actions[data-v-90901c4f] .fil-w-btn{padding:0;width:34px;height:34px;font-size:16px}.fil-provider-root[data-v-2aa7b099]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;min-width:0}.fil-provider-row[data-v-2aa7b099]{display:flex;gap:4px;align-items:stretch;min-width:0}.fil-provider-row[data-v-2aa7b099] .fil-combo{flex:1;min-width:0}.fil-model-filter-bar[data-v-2aa7b099]{display:flex;align-items:center;gap:4px;min-width:0}.fil-model-filter-wrap[data-v-2aa7b099]{flex:1;min-width:0}.fil-model-filter[data-v-2aa7b099]{width:100%;box-sizing:border-box;height:24px;background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);padding:2px 6px;color:var(--fil-text, #e8edf3);font-family:inherit;font-size:11px;outline:none}.fil-model-filter[data-v-2aa7b099]:focus{border-color:var(--fil-accent)}.fil-model-count[data-v-2aa7b099]{font-size:9px;color:var(--fil-muted, rgba(255,255,255,.45));white-space:nowrap;flex-shrink:0}.fil-scanner-root[data-v-875167a9]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;width:100%;box-sizing:border-box;min-width:0}.fil-section-block[data-v-875167a9]{display:flex;flex-direction:column;gap:5px;min-width:0}.fil-w-row[data-v-875167a9]{display:flex;flex-direction:column;gap:3px;min-width:0}.fil-w-textarea[data-v-875167a9],.fil-w-input[data-v-875167a9]{width:100%;box-sizing:border-box;background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);color:var(--fil-text, #a0c4ff);padding:var(--fil-row-pad);font-size:12px;font-family:inherit;outline:none;transition:border-color .08s}.fil-w-textarea[data-v-875167a9]{min-height:56px;resize:vertical}.fil-w-textarea[data-v-875167a9]:focus,.fil-w-input[data-v-875167a9]:focus{border-color:var(--fil-accent)}.fil-style-pair-row[data-v-875167a9]{display:flex;gap:4px;min-width:0}.fil-style-pair-item[data-v-875167a9]{flex:1;min-width:0}.fil-scanner-seed[data-v-875167a9]{display:flex;flex-direction:column;gap:4px;padding-top:3px;border-top:1px solid rgba(255,255,255,.08);min-width:0}.fil-scanner-seed-row[data-v-875167a9]{display:flex;gap:6px;min-width:0}.fil-scanner-seed-field[data-v-875167a9]{flex:1.3;min-width:0;box-sizing:border-box;height:34px;background:#00000059;border:1px solid rgba(255,255,255,.08);border-radius:var(--fil-pill-radius);padding:0 12px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:13px;text-align:center;outline:none;transition:border-color .08s}.fil-scanner-seed-field[data-v-875167a9]:focus{border-color:var(--fil-accent)}.fil-scanner-seed-field.is-random[data-v-875167a9]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-scanner-seed-pill[data-v-875167a9]{flex:1;min-width:0;box-sizing:border-box;height:34px;padding:0 8px;border-radius:var(--fil-pill-radius);border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-text, #e8edf3);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-scanner-seed-pill[data-v-875167a9]:hover{background:#ffffff1f}.fil-scanner-seed-pill.active[data-v-875167a9]{background:#ffffff29;border-color:#fff3}.fil-scanner-seed-pill[data-v-875167a9]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-scanner-seed-pill-accent[data-v-875167a9]{background:var(--fil-accent);border-color:var(--fil-accent);color:#241206;font-weight:700}.fil-scanner-seed-pill-accent[data-v-875167a9]:hover{filter:brightness(1.08);background:var(--fil-accent)}.fil-cleaner-root[data-v-1f9cbf0d]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cleaner-row[data-v-1f9cbf0d]{all:unset;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:var(--fil-row-pad);border-radius:var(--fil-field-radius);border:1px solid var(--fil-glass-border);background:var(--fil-glass-bg);cursor:pointer;-webkit-user-select:none;user-select:none;transition:background .08s,border-color .08s}.fil-cleaner-row[data-v-1f9cbf0d]:hover{background:#ffffff14}.fil-cleaner-row.active[data-v-1f9cbf0d]{border-color:var(--fil-accent);background:#f68a451f}.fil-cleaner-dot[data-v-1f9cbf0d]{width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,.3);flex:none;transition:border-color .08s,background .08s;display:flex;align-items:center;justify-content:center}.fil-cleaner-dot[data-v-1f9cbf0d]:after{content:\"✓\";font-size:10px;line-height:1;color:var(--fil-accent-ink, #fff);opacity:0;transition:opacity .08s}.fil-cleaner-row.active .fil-cleaner-dot[data-v-1f9cbf0d]{background:var(--fil-accent);border-color:var(--fil-accent)}.fil-cleaner-row.active .fil-cleaner-dot[data-v-1f9cbf0d]:after{opacity:1}.fil-cleaner-label[data-v-1f9cbf0d]{flex:1;font-size:12px}.fil-cmp-root[data-v-2abe5720]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cmp-canvas-wrap[data-v-2abe5720]{position:relative;width:100%;height:220px;border-radius:var(--fil-field-radius);border:1px solid var(--fil-glass-border);overflow:hidden;background:linear-gradient(45deg,rgba(255,255,255,.04) 25%,transparent 25%,transparent 75%,rgba(255,255,255,.04) 75%) 0 0/16px 16px,linear-gradient(45deg,rgba(255,255,255,.04) 25%,transparent 25%,transparent 75%,rgba(255,255,255,.04) 75%) 8px 8px/16px 16px,#0d0f13}.fil-cmp-canvas[data-v-2abe5720]{display:block;width:100%;height:100%;touch-action:none}.fil-cmp-canvas.is-wipe[data-v-2abe5720]{cursor:ew-resize}.fil-cmp-placeholder[data-v-2abe5720]{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;text-align:center;padding:12px;color:var(--fil-muted, rgba(255, 255, 255, .5));font-size:12px;pointer-events:none}.fil-cmp-save-row[data-v-2abe5720]{display:grid;grid-template-columns:1fr 1fr;gap:5px}.fil-cmp-settings[data-v-2abe5720]{display:flex;flex-direction:column;gap:5px}.fil-up-root[data-v-ff1dd2df]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-up-row[data-v-ff1dd2df]{display:grid;grid-template-columns:minmax(auto,max-content) 64px minmax(auto,max-content) 64px;align-items:center;gap:var(--fil-node-gap)}.fil-up-row-overlap[data-v-ff1dd2df]{grid-template-columns:minmax(auto,max-content) 64px minmax(auto,max-content) 64px auto}.fil-w-label[data-v-ff1dd2df]{font-size:11px;color:var(--fil-muted, rgba(255,255,255,.55))}.fil-hrf-root[data-v-48578e7c]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-hrf-seed-row[data-v-48578e7c]{display:flex;gap:6px;min-width:0}.fil-hrf-seed-field[data-v-48578e7c]{flex:1.3;min-width:0;box-sizing:border-box;height:34px;background:#00000059;border:1px solid rgba(255,255,255,.08);border-radius:var(--fil-pill-radius);padding:0 12px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:13px;text-align:center;outline:none;transition:border-color .08s}.fil-hrf-seed-field[data-v-48578e7c]:focus{border-color:var(--fil-accent)}.fil-hrf-seed-field.is-random[data-v-48578e7c]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-hrf-seed-pill[data-v-48578e7c]{flex:1;min-width:0;box-sizing:border-box;height:34px;padding:0 8px;border-radius:var(--fil-pill-radius);border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-text, #e8edf3);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none}.fil-hrf-seed-pill[data-v-48578e7c]:hover{background:#ffffff1f}.fil-hrf-seed-pill.active[data-v-48578e7c]{background:#ffffff29;border-color:#fff3}.fil-hrf-seed-pill[data-v-48578e7c]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-hrf-seed-pill-accent[data-v-48578e7c]{background:var(--fil-accent);border-color:var(--fil-accent);color:#241206;font-weight:700}.fil-hrf-seed-pill-accent[data-v-48578e7c]:hover{filter:brightness(1.08);background:var(--fil-accent)}\n";document.head.appendChild(s);}catch(e){}})();
import { app as al } from "/scripts/app.js";
/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function jo(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const xe = {}, pn = [], gt = () => {
}, rl = () => !1, Rs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ps = (e) => e.startsWith("onUpdate:"), Te = Object.assign, Wo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, za = Object.prototype.hasOwnProperty, ve = (e, t) => za.call(e, t), oe = Array.isArray, mn = (e) => Qn(e) === "[object Map]", Ns = (e) => Qn(e) === "[object Set]", ri = (e) => Qn(e) === "[object Date]", ue = (e) => typeof e == "function", Le = (e) => typeof e == "string", Ze = (e) => typeof e == "symbol", be = (e) => e !== null && typeof e == "object", cl = (e) => (be(e) || ue(e)) && ue(e.then) && ue(e.catch), ul = Object.prototype.toString, Qn = (e) => ul.call(e), Ka = (e) => Qn(e).slice(8, -1), dl = (e) => Qn(e) === "[object Object]", Os = (e) => Le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Tn = /* @__PURE__ */ jo(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), $s = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, qa = /-\w/g, ze = $s(
  (e) => e.replace(qa, (t) => t.slice(1).toUpperCase())
), Xa = /\B([A-Z])/g, Bt = $s(
  (e) => e.replace(Xa, "-$1").toLowerCase()
), Vs = $s((e) => e.charAt(0).toUpperCase() + e.slice(1)), eo = $s(
  (e) => e ? `on${Vs(e)}` : ""
), ht = (e, t) => !Object.is(e, t), ms = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, fl = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Bs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ya = (e) => {
  const t = Le(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ci;
const Hs = () => ci || (ci = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ge(e) {
  if (oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = Le(s) ? er(s) : Ge(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (Le(e) || be(e))
    return e;
}
const Ja = /;(?![^(]*\))/g, Qa = /:([^]+)/, Za = /\/\*[^]*?\*\//g;
function er(e) {
  const t = {};
  return e.replace(Za, "").split(Ja).forEach((n) => {
    if (n) {
      const s = n.split(Qa);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ge(e) {
  let t = "";
  if (Le(e))
    t = e;
  else if (oe(e))
    for (let n = 0; n < e.length; n++) {
      const s = ge(e[n]);
      s && (t += s + " ");
    }
  else if (be(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const tr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", nr = /* @__PURE__ */ jo(tr);
function pl(e) {
  return !!e || e === "";
}
function sr(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Zn(e[s], t[s]);
  return n;
}
function Zn(e, t) {
  if (e === t) return !0;
  let n = ri(e), s = ri(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Ze(e), s = Ze(t), n || s)
    return e === t;
  if (n = oe(e), s = oe(t), n || s)
    return n && s ? sr(e, t) : !1;
  if (n = be(e), s = be(t), n || s) {
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
function or(e, t) {
  return e.findIndex((n) => Zn(n, t));
}
const ml = (e) => !!(e && e.__v_isRef === !0), ee = (e) => Le(e) ? e : e == null ? "" : oe(e) || be(e) && (e.toString === ul || !ue(e.toString)) ? ml(e) ? ee(e.value) : JSON.stringify(e, hl, 2) : String(e), hl = (e, t) => ml(t) ? hl(e, t.value) : mn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[to(s, i) + " =>"] = o, n),
    {}
  )
} : Ns(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => to(n))
} : Ze(t) ? to(t) : be(t) && !oe(t) && !dl(t) ? String(t) : t, to = (e, t = "") => {
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
class gl {
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
function _l(e) {
  return new gl(e);
}
function bl() {
  return Ee;
}
function ir(e, t = !1) {
  Ee && Ee.cleanups.push(e);
}
let Fe;
const no = /* @__PURE__ */ new WeakSet();
class vl {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || wl(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ui(this), Sl(this);
    const t = Fe, n = lt;
    Fe = this, lt = !0;
    try {
      return this.fn();
    } finally {
      xl(this), Fe = t, lt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ko(t);
      this.deps = this.depsTail = void 0, ui(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? no.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    yo(this) && this.run();
  }
  get dirty() {
    return yo(this);
  }
}
let yl = 0, Rn, Pn;
function wl(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Pn, Pn = e;
    return;
  }
  e.next = Rn, Rn = e;
}
function Go() {
  yl++;
}
function zo() {
  if (--yl > 0)
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
function Sl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function xl(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Ko(s), lr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function yo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Cl(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Cl(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Gn) || (e.globalVersion = Gn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !yo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Fe, s = lt;
  Fe = e, lt = !0;
  try {
    Sl(e);
    const o = e.fn(e._value);
    (t.version === 0 || ht(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Fe = n, lt = s, xl(e), e.flags &= -3;
  }
}
function Ko(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Ko(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function lr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let lt = !0;
const Fl = [];
function vt() {
  Fl.push(lt), lt = !1;
}
function yt() {
  const e = Fl.pop();
  lt = e === void 0 ? !0 : e;
}
function ui(e) {
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
class ar {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class qo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Fe || !lt || Fe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Fe)
      n = this.activeLink = new ar(Fe, this), Fe.deps ? (n.prevDep = Fe.depsTail, Fe.depsTail.nextDep = n, Fe.depsTail = n) : Fe.deps = Fe.depsTail = n, Ml(n);
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
    Go();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      zo();
    }
  }
}
function Ml(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Ml(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const bs = /* @__PURE__ */ new WeakMap(), sn = /* @__PURE__ */ Symbol(
  ""
), wo = /* @__PURE__ */ Symbol(
  ""
), zn = /* @__PURE__ */ Symbol(
  ""
);
function Be(e, t, n) {
  if (lt && Fe) {
    let s = bs.get(e);
    s || bs.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new qo()), o.map = s, o.key = n), o.track();
  }
}
function At(e, t, n, s, o, i) {
  const l = bs.get(e);
  if (!l) {
    Gn++;
    return;
  }
  const a = (r) => {
    r && r.trigger();
  };
  if (Go(), t === "clear")
    l.forEach(a);
  else {
    const r = oe(e), u = r && Os(n);
    if (r && n === "length") {
      const c = Number(s);
      l.forEach((d, f) => {
        (f === "length" || f === zn || !Ze(f) && f >= c) && a(d);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && a(l.get(n)), u && a(l.get(zn)), t) {
        case "add":
          r ? u && a(l.get("length")) : (a(l.get(sn)), mn(e) && a(l.get(wo)));
          break;
        case "delete":
          r || (a(l.get(sn)), mn(e) && a(l.get(wo)));
          break;
        case "set":
          mn(e) && a(l.get(sn));
          break;
      }
  }
  zo();
}
function rr(e, t) {
  const n = bs.get(e);
  return n && n.get(t);
}
function un(e) {
  const t = /* @__PURE__ */ me(e);
  return t === e ? t : (Be(t, "iterate", zn), /* @__PURE__ */ Je(e) ? t : t.map(at));
}
function Us(e) {
  return Be(e = /* @__PURE__ */ me(e), "iterate", zn), e;
}
function pt(e, t) {
  return /* @__PURE__ */ Dt(e) ? bn(/* @__PURE__ */ _t(e) ? at(t) : t) : at(t);
}
const cr = {
  __proto__: null,
  [Symbol.iterator]() {
    return so(this, Symbol.iterator, (e) => pt(this, e));
  },
  concat(...e) {
    return un(this).concat(
      ...e.map((t) => oe(t) ? un(t) : t)
    );
  },
  entries() {
    return so(this, "entries", (e) => (e[1] = pt(this, e[1]), e));
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
    return oo(this, "includes", e);
  },
  indexOf(...e) {
    return oo(this, "indexOf", e);
  },
  join(e) {
    return un(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return oo(this, "lastIndexOf", e);
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
    return di(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return di(this, "reduceRight", e, t);
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
    return so(this, "values", (e) => pt(this, e));
  }
};
function so(e, t, n) {
  const s = Us(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ Je(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = n(i.value)), i;
  }), o;
}
const ur = Array.prototype;
function xt(e, t, n, s, o, i) {
  const l = Us(e), a = l !== e && !/* @__PURE__ */ Je(e), r = l[t];
  if (r !== ur[t]) {
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
function di(e, t, n, s) {
  const o = Us(e), i = o !== e && !/* @__PURE__ */ Je(e);
  let l = n, a = !1;
  o !== e && (i ? (a = s.length === 0, l = function(u, c, d) {
    return a && (a = !1, u = pt(e, u)), n.call(this, u, pt(e, c), d, e);
  }) : n.length > 3 && (l = function(u, c, d) {
    return n.call(this, u, c, d, e);
  }));
  const r = o[t](l, ...s);
  return a ? pt(e, r) : r;
}
function oo(e, t, n) {
  const s = /* @__PURE__ */ me(e);
  Be(s, "iterate", zn);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ js(n[0]) ? (n[0] = /* @__PURE__ */ me(n[0]), s[t](...n)) : o;
}
function Fn(e, t, n = []) {
  vt(), Go();
  const s = (/* @__PURE__ */ me(e))[t].apply(e, n);
  return zo(), yt(), s;
}
const dr = /* @__PURE__ */ jo("__proto__,__v_isRef,__isVue"), Ll = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ze)
);
function fr(e) {
  Ze(e) || (e = String(e));
  const t = /* @__PURE__ */ me(this);
  return Be(t, "has", e), t.hasOwnProperty(e);
}
class Il {
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
      return s === (o ? i ? Sr : El : i ? Dl : kl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = oe(t);
    if (!o) {
      let r;
      if (l && (r = cr[n]))
        return r;
      if (n === "hasOwnProperty")
        return fr;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ye(t) ? t : s
    );
    if ((Ze(n) ? Ll.has(n) : dr(n)) || (o || Be(t, "get", n), i))
      return a;
    if (/* @__PURE__ */ ye(a)) {
      const r = l && Os(n) ? a : a.value;
      return o && be(r) ? /* @__PURE__ */ vs(r) : r;
    }
    return be(a) ? o ? /* @__PURE__ */ vs(a) : /* @__PURE__ */ an(a) : a;
  }
}
class Al extends Il {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    const l = oe(t) && Os(n);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ Dt(i);
      if (!/* @__PURE__ */ Je(s) && !/* @__PURE__ */ Dt(s) && (i = /* @__PURE__ */ me(i), s = /* @__PURE__ */ me(s)), !l && /* @__PURE__ */ ye(i) && !/* @__PURE__ */ ye(s))
        return u || (i.value = s), !0;
    }
    const a = l ? Number(n) < t.length : ve(t, n), r = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ye(t) ? t : o
    );
    return t === /* @__PURE__ */ me(o) && r && (a ? ht(s, i) && At(t, "set", n, s) : At(t, "add", n, s)), r;
  }
  deleteProperty(t, n) {
    const s = ve(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && At(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ze(n) || !Ll.has(n)) && Be(t, "has", n), s;
  }
  ownKeys(t) {
    return Be(
      t,
      "iterate",
      oe(t) ? "length" : sn
    ), Reflect.ownKeys(t);
  }
}
class pr extends Il {
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
const mr = /* @__PURE__ */ new Al(), hr = /* @__PURE__ */ new pr(), gr = /* @__PURE__ */ new Al(!0);
const So = (e) => e, os = (e) => Reflect.getPrototypeOf(e);
function _r(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = /* @__PURE__ */ me(o), l = mn(i), a = e === "entries" || e === Symbol.iterator && l, r = e === "keys" && l, u = o[e](...s), c = n ? So : t ? bn : at;
    return !t && Be(
      i,
      "iterate",
      r ? wo : sn
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
function br(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ me(i), a = /* @__PURE__ */ me(o);
      e || (ht(o, a) && Be(l, "get", o), Be(l, "get", a));
      const { has: r } = os(l), u = t ? So : e ? bn : at;
      if (r.call(l, o))
        return u(i.get(o));
      if (r.call(l, a))
        return u(i.get(a));
      i !== l && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Be(/* @__PURE__ */ me(o), "iterate", sn), o.size;
    },
    has(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ me(i), a = /* @__PURE__ */ me(o);
      return e || (ht(o, a) && Be(l, "has", o), Be(l, "has", a)), o === a ? i.has(o) : i.has(o) || i.has(a);
    },
    forEach(o, i) {
      const l = this, a = l.__v_raw, r = /* @__PURE__ */ me(a), u = t ? So : e ? bn : at;
      return !e && Be(r, "iterate", sn), a.forEach((c, d) => o.call(i, u(c), u(d), l));
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
        const i = /* @__PURE__ */ me(this), l = os(i), a = /* @__PURE__ */ me(o), r = !t && !/* @__PURE__ */ Je(o) && !/* @__PURE__ */ Dt(o) ? a : o;
        return l.has.call(i, r) || ht(o, r) && l.has.call(i, o) || ht(a, r) && l.has.call(i, a) || (i.add(r), At(i, "add", r, r)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ Je(i) && !/* @__PURE__ */ Dt(i) && (i = /* @__PURE__ */ me(i));
        const l = /* @__PURE__ */ me(this), { has: a, get: r } = os(l);
        let u = a.call(l, o);
        u || (o = /* @__PURE__ */ me(o), u = a.call(l, o));
        const c = r.call(l, o);
        return l.set(o, i), u ? ht(i, c) && At(l, "set", o, i) : At(l, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ me(this), { has: l, get: a } = os(i);
        let r = l.call(i, o);
        r || (o = /* @__PURE__ */ me(o), r = l.call(i, o)), a && a.call(i, o);
        const u = i.delete(o);
        return r && At(i, "delete", o, void 0), u;
      },
      clear() {
        const o = /* @__PURE__ */ me(this), i = o.size !== 0, l = o.clear();
        return i && At(
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
    n[o] = _r(o, e, t);
  }), n;
}
function Xo(e, t) {
  const n = br(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    ve(n, o) && o in s ? n : s,
    o,
    i
  );
}
const vr = {
  get: /* @__PURE__ */ Xo(!1, !1)
}, yr = {
  get: /* @__PURE__ */ Xo(!1, !0)
}, wr = {
  get: /* @__PURE__ */ Xo(!0, !1)
};
const kl = /* @__PURE__ */ new WeakMap(), Dl = /* @__PURE__ */ new WeakMap(), El = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap();
function xr(e) {
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
function an(e) {
  return /* @__PURE__ */ Dt(e) ? e : Yo(
    e,
    !1,
    mr,
    vr,
    kl
  );
}
// @__NO_SIDE_EFFECTS__
function Cr(e) {
  return Yo(
    e,
    !1,
    gr,
    yr,
    Dl
  );
}
// @__NO_SIDE_EFFECTS__
function vs(e) {
  return Yo(
    e,
    !0,
    hr,
    wr,
    El
  );
}
function Yo(e, t, n, s, o) {
  if (!be(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const l = xr(Ka(e));
  if (l === 0)
    return e;
  const a = new Proxy(
    e,
    l === 2 ? s : n
  );
  return o.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function _t(e) {
  return /* @__PURE__ */ Dt(e) ? /* @__PURE__ */ _t(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Dt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function js(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ me(t) : e;
}
function Jo(e) {
  return !ve(e, "__v_skip") && Object.isExtensible(e) && fl(e, "__v_skip", !0), e;
}
const at = (e) => be(e) ? /* @__PURE__ */ an(e) : e, bn = (e) => be(e) ? /* @__PURE__ */ vs(e) : e;
// @__NO_SIDE_EFFECTS__
function ye(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ae(e) {
  return Fr(e, !1);
}
function Fr(e, t) {
  return /* @__PURE__ */ ye(e) ? e : new Mr(e, t);
}
class Mr {
  constructor(t, n) {
    this.dep = new qo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ me(t), this._value = n ? t : at(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Je(t) || /* @__PURE__ */ Dt(t);
    t = s ? t : /* @__PURE__ */ me(t), ht(t, n) && (this._rawValue = t, this._value = s ? t : at(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ ye(e) ? e.value : e;
}
const Lr = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ ye(o) && !/* @__PURE__ */ ye(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Tl(e) {
  return /* @__PURE__ */ _t(e) ? e : new Proxy(e, Lr);
}
// @__NO_SIDE_EFFECTS__
function Ir(e) {
  const t = oe(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Rl(e, n);
  return t;
}
class Ar {
  constructor(t, n, s) {
    this._object = t, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._key = Ze(n) ? n : String(n), this._raw = /* @__PURE__ */ me(t);
    let o = !0, i = t;
    if (!oe(t) || Ze(this._key) || !Os(this._key))
      do
        o = !/* @__PURE__ */ js(i) || /* @__PURE__ */ Je(i);
      while (o && (i = i.__v_raw));
    this._shallow = o;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = g(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ ye(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ ye(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return rr(this._raw, this._key);
  }
}
class kr {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
// @__NO_SIDE_EFFECTS__
function Dr(e, t, n) {
  return /* @__PURE__ */ ye(e) ? e : ue(e) ? new kr(e) : be(e) && arguments.length > 1 ? Rl(e, t, n) : /* @__PURE__ */ ae(e);
}
function Rl(e, t, n) {
  return new Ar(e, t, n);
}
class Er {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new qo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Gn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Fe !== this)
      return wl(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Cl(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Tr(e, t, n = !1) {
  let s, o;
  return ue(e) ? s = e : (s = e.get, o = e.set), new Er(s, o, n);
}
const ls = {}, ys = /* @__PURE__ */ new WeakMap();
let Yt;
function Rr(e, t = !1, n = Yt) {
  if (n) {
    let s = ys.get(n);
    s || ys.set(n, s = []), s.push(e);
  }
}
function Pr(e, t, n = xe) {
  const { immediate: s, deep: o, once: i, scheduler: l, augmentJob: a, call: r } = n, u = (v) => o ? v : /* @__PURE__ */ Je(v) || o === !1 || o === 0 ? kt(v, 1) : kt(v);
  let c, d, f, p, m = !1, _ = !1;
  if (/* @__PURE__ */ ye(e) ? (d = () => e.value, m = /* @__PURE__ */ Je(e)) : /* @__PURE__ */ _t(e) ? (d = () => u(e), m = !0) : oe(e) ? (_ = !0, m = e.some((v) => /* @__PURE__ */ _t(v) || /* @__PURE__ */ Je(v)), d = () => e.map((v) => {
    if (/* @__PURE__ */ ye(v))
      return v.value;
    if (/* @__PURE__ */ _t(v))
      return u(v);
    if (ue(v))
      return r ? r(v, 2) : v();
  })) : ue(e) ? t ? d = r ? () => r(e, 2) : e : d = () => {
    if (f) {
      vt();
      try {
        f();
      } finally {
        yt();
      }
    }
    const v = Yt;
    Yt = c;
    try {
      return r ? r(e, 3, [p]) : e(p);
    } finally {
      Yt = v;
    }
  } : d = gt, t && o) {
    const v = d, S = o === !0 ? 1 / 0 : o;
    d = () => kt(v(), S);
  }
  const x = bl(), y = () => {
    c.stop(), x && x.active && Wo(x.effects, c);
  };
  if (i && t) {
    const v = t;
    t = (...S) => {
      const E = v(...S);
      return y(), E;
    };
  }
  let w = _ ? new Array(e.length).fill(ls) : ls;
  const D = (v) => {
    if (!(!(c.flags & 1) || !c.dirty && !v))
      if (t) {
        const S = c.run();
        if (v || o || m || (_ ? S.some((E, T) => ht(E, w[T])) : ht(S, w))) {
          f && f();
          const E = Yt;
          Yt = c;
          try {
            const T = [
              S,
              // pass undefined as the old value when it's changed for the first time
              w === ls ? void 0 : _ && w[0] === ls ? [] : w,
              p
            ];
            w = S, r ? r(t, 3, T) : (
              // @ts-expect-error
              t(...T)
            );
          } finally {
            Yt = E;
          }
        }
      } else
        c.run();
  };
  return a && a(D), c = new vl(d), c.scheduler = l ? () => l(D, !1) : D, p = (v) => Rr(v, !1, c), f = c.onStop = () => {
    const v = ys.get(c);
    if (v) {
      if (r)
        r(v, 4);
      else
        for (const S of v) S();
      ys.delete(c);
    }
  }, t ? s ? D(!0) : w = c.run() : l ? l(D.bind(null, !0), !0) : c.run(), y.pause = c.pause.bind(c), y.resume = c.resume.bind(c), y.stop = y, y;
}
function kt(e, t = 1 / 0, n) {
  if (t <= 0 || !be(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ye(e))
    kt(e.value, t, n);
  else if (oe(e))
    for (let s = 0; s < e.length; s++)
      kt(e[s], t, n);
  else if (Ns(e) || mn(e))
    e.forEach((s) => {
      kt(s, t, n);
    });
  else if (dl(e)) {
    for (const s in e)
      kt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && kt(e[s], t, n);
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
function st(e, t, n, s) {
  if (ue(e)) {
    const o = es(e, t, n, s);
    return o && cl(o) && o.catch((i) => {
      ts(i, t, n);
    }), o;
  }
  if (oe(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(st(e[i], t, n, s));
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
      vt(), es(i, null, 10, [
        e,
        r,
        u
      ]), yt();
      return;
    }
  }
  Nr(e, n, o, s, l);
}
function Nr(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const We = [];
let ft = -1;
const hn = [];
let Nt = null, fn = 0;
const Pl = /* @__PURE__ */ Promise.resolve();
let ws = null;
function Sn(e) {
  const t = ws || Pl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Or(e) {
  let t = ft + 1, n = We.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = We[s], i = Kn(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Qo(e) {
  if (!(e.flags & 1)) {
    const t = Kn(e), n = We[We.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Kn(n) ? We.push(e) : We.splice(Or(t), 0, e), e.flags |= 1, Nl();
  }
}
function Nl() {
  ws || (ws = Pl.then($l));
}
function $r(e) {
  oe(e) ? hn.push(...e) : Nt && e.id === -1 ? Nt.splice(fn + 1, 0, e) : e.flags & 1 || (hn.push(e), e.flags |= 1), Nl();
}
function fi(e, t, n = ft + 1) {
  for (; n < We.length; n++) {
    const s = We[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      We.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Ol(e) {
  if (hn.length) {
    const t = [...new Set(hn)].sort(
      (n, s) => Kn(n) - Kn(s)
    );
    if (hn.length = 0, Nt) {
      Nt.push(...t);
      return;
    }
    for (Nt = t, fn = 0; fn < Nt.length; fn++) {
      const n = Nt[fn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Nt = null, fn = 0;
  }
}
const Kn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function $l(e) {
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
    ft = -1, We.length = 0, Ol(), ws = null, (We.length || hn.length) && $l();
  }
}
let Oe = null, Vl = null;
function Ss(e) {
  const t = Oe;
  return Oe = e, Vl = e && e.type.__scopeId || null, t;
}
function Ws(e, t = Oe, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Fs(-1);
    const i = Ss(t);
    let l;
    try {
      l = e(...o);
    } finally {
      Ss(i), s._d && Fs(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Ke(e, t) {
  if (Oe === null)
    return e;
  const n = Xs(Oe), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, l, a, r = xe] = t[o];
    i && (ue(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && kt(l), s.push({
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
function zt(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let l = 0; l < o.length; l++) {
    const a = o[l];
    i && (a.oldValue = i[l].value);
    let r = a.dir[s];
    r && (vt(), st(r, n, 8, [
      e.el,
      a,
      e,
      t
    ]), yt());
  }
}
function Vr(e, t) {
  if (Ne) {
    let n = Ne.provides;
    const s = Ne.parent && Ne.parent.provides;
    s === n && (n = Ne.provides = Object.create(s)), n[e] = t;
  }
}
function Nn(e, t, n = !1) {
  const s = si();
  if (s || on) {
    let o = on ? on._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ue(t) ? t.call(s && s.proxy) : t;
  }
}
function Br() {
  return !!(si() || on);
}
const Hr = /* @__PURE__ */ Symbol.for("v-scx"), Ur = () => Nn(Hr);
function $e(e, t, n) {
  return Bl(e, t, n);
}
function Bl(e, t, n = xe) {
  const { immediate: s, deep: o, flush: i, once: l } = n, a = Te({}, n), r = t && s || !t && i !== "post";
  let u;
  if (vn) {
    if (i === "sync") {
      const p = Ur();
      u = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!r) {
      const p = () => {
      };
      return p.stop = gt, p.resume = gt, p.pause = gt, p;
    }
  }
  const c = Ne;
  a.call = (p, m, _) => st(p, c, m, _);
  let d = !1;
  i === "post" ? a.scheduler = (p) => {
    je(p, c && c.suspense);
  } : i !== "sync" && (d = !0, a.scheduler = (p, m) => {
    m ? p() : Qo(p);
  }), a.augmentJob = (p) => {
    t && (p.flags |= 4), d && (p.flags |= 2, c && (p.id = c.uid, p.i = c));
  };
  const f = Pr(e, t, a);
  return vn && (u ? u.push(f) : r && f()), f;
}
function jr(e, t, n) {
  const s = this.proxy, o = Le(e) ? e.includes(".") ? Hl(s, e) : () => s[e] : e.bind(s, s);
  let i;
  ue(t) ? i = t : (i = t.handler, n = t);
  const l = ss(this), a = Bl(o, i.bind(s), n);
  return l(), a;
}
function Hl(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const Rt = /* @__PURE__ */ new WeakMap(), Ul = /* @__PURE__ */ Symbol("_vte"), jl = (e) => e.__isTeleport, Qt = (e) => e && (e.disabled || e.disabled === ""), Wr = (e) => e && (e.defer || e.defer === ""), pi = (e) => typeof SVGElement < "u" && e instanceof SVGElement, mi = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, xo = (e, t) => {
  const n = e && e.to;
  return Le(n) ? t ? t(n) : null : n;
}, Gr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, i, l, a, r, u) {
    const {
      mc: c,
      pc: d,
      pbc: f,
      o: { insert: p, querySelector: m, createText: _, createComment: x, parentNode: y }
    } = u, w = Qt(t.props);
    let { dynamicChildren: D } = t;
    const v = (T, O, I) => {
      T.shapeFlag & 16 && c(
        T.children,
        O,
        I,
        o,
        i,
        l,
        a,
        r
      );
    }, S = (T = t) => {
      const O = Qt(T.props), I = T.target = xo(T.props, m), z = Co(I, T, _, p);
      I && (l !== "svg" && pi(I) ? l = "svg" : l !== "mathml" && mi(I) && (l = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(I), O || (v(T, I, z), An(T, !1)));
    }, E = (T) => {
      const O = () => {
        if (Rt.get(T) === O) {
          if (Rt.delete(T), Qt(T.props)) {
            const I = y(T.el) || n;
            v(T, I, T.anchor), An(T, !0);
          }
          S(T);
        }
      };
      Rt.set(T, O), je(O, i);
    };
    if (e == null) {
      const T = t.el = _(""), O = t.anchor = _("");
      if (p(T, n, s), p(O, n, s), Wr(t.props) || i && i.pendingBranch) {
        E(t);
        return;
      }
      w && (v(t, n, O), An(t, !0)), S();
    } else {
      t.el = e.el;
      const T = t.anchor = e.anchor, O = Rt.get(e);
      if (O) {
        O.flags |= 8, Rt.delete(e), E(t);
        return;
      }
      t.targetStart = e.targetStart;
      const I = t.target = e.target, z = t.targetAnchor = e.targetAnchor, R = Qt(e.props), A = R ? n : I, N = R ? T : z;
      if (l === "svg" || pi(I) ? l = "svg" : (l === "mathml" || mi(I)) && (l = "mathml"), D ? (f(
        e.dynamicChildren,
        D,
        A,
        o,
        i,
        l,
        a
      ), ni(e, t, !0)) : r || d(
        e,
        t,
        A,
        N,
        o,
        i,
        l,
        a,
        !1
      ), w)
        R ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : as(
          t,
          n,
          T,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const Q = xo(t.props, m);
        Q && (t.target = Q, as(
          t,
          Q,
          null,
          u,
          0
        ));
      } else R && as(
        t,
        I,
        z,
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
    } = e, p = Qt(f), m = i || !p, _ = Rt.get(e);
    if (_ && (_.flags |= 8, Rt.delete(e)), d && (o(u), o(c)), i && o(r), !_ && (p || d) && l & 16)
      for (let x = 0; x < a.length; x++) {
        const y = a[x];
        s(
          y,
          t,
          n,
          m,
          !!y.dynamicChildren
        );
      }
  },
  move: as,
  hydrate: zr
};
function as(e, t, n, { o: { insert: s }, m: o }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: l, anchor: a, shapeFlag: r, children: u, props: c } = e, d = i === 2;
  if (d && s(l, t, n), !Rt.has(e) && (!d || Qt(c)) && r & 16)
    for (let f = 0; f < u.length; f++)
      o(
        u[f],
        t,
        n,
        2
      );
  d && s(a, t, n);
}
function zr(e, t, n, s, o, i, {
  o: { nextSibling: l, parentNode: a, querySelector: r, insert: u, createText: c }
}, d) {
  function f(x, y) {
    let w = y;
    for (; w; ) {
      if (w && w.nodeType === 8) {
        if (w.data === "teleport start anchor")
          t.targetStart = w;
        else if (w.data === "teleport anchor") {
          t.targetAnchor = w, x._lpa = t.targetAnchor && l(t.targetAnchor);
          break;
        }
      }
      w = l(w);
    }
  }
  function p(x, y) {
    y.anchor = d(
      l(x),
      y,
      a(x),
      n,
      s,
      o,
      i
    );
  }
  const m = t.target = xo(
    t.props,
    r
  ), _ = Qt(t.props);
  if (m) {
    const x = m._lpa || m.firstChild;
    t.shapeFlag & 16 && (_ ? (p(e, t), f(m, x), t.targetAnchor || Co(
      m,
      t,
      c,
      u,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      a(e) === m ? e : null
    )) : (t.anchor = l(e), f(m, x), t.targetAnchor || Co(m, t, c, u), d(
      x && l(x),
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
const Wl = Gr;
function An(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function Co(e, t, n, s, o = null) {
  const i = t.targetStart = n(""), l = t.targetAnchor = n("");
  return i[Ul] = l, e && (s(i, e, o), s(l, e, o)), l;
}
const nt = /* @__PURE__ */ Symbol("_leaveCb"), Mn = /* @__PURE__ */ Symbol("_enterCb");
function Kr() {
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
const tt = [Function, Array], Gl = {
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
}, zl = (e) => {
  const t = e.subTree;
  return t.component ? zl(t.component) : t;
}, qr = {
  name: "BaseTransition",
  props: Gl,
  setup(e, { slots: t }) {
    const n = si(), s = Kr();
    return () => {
      const o = t.default && Xl(t.default(), !0), i = o && o.length ? Kl(o) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? se() : void 0
      );
      if (!i)
        return;
      const l = /* @__PURE__ */ me(e), { mode: a } = l;
      if (s.isLeaving)
        return io(i);
      const r = hi(i);
      if (!r)
        return io(i);
      let u = Fo(
        r,
        l,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => u = d
      );
      r.type !== He && qn(r, u);
      let c = n.subTree && hi(n.subTree);
      if (c && c.type !== He && !Zt(c, r) && zl(n).type !== He) {
        let d = Fo(
          c,
          l,
          s,
          n
        );
        if (qn(c, d), a === "out-in" && r.type !== He)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
          }, io(i);
        a === "in-out" && r.type !== He ? d.delayLeave = (f, p, m) => {
          const _ = ql(
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
      return i;
    };
  }
};
function Kl(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== He) {
        t = n;
        break;
      }
  }
  return t;
}
const Xr = qr;
function ql(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Fo(e, t, n, s, o) {
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
    onBeforeAppear: x,
    onAppear: y,
    onAfterAppear: w,
    onAppearCancelled: D
  } = t, v = String(e.key), S = ql(n, e), E = (I, z) => {
    I && st(
      I,
      s,
      9,
      z
    );
  }, T = (I, z) => {
    const R = z[1];
    E(I, z), oe(I) ? I.every((A) => A.length <= 1) && R() : I.length <= 1 && R();
  }, O = {
    mode: l,
    persisted: a,
    beforeEnter(I) {
      let z = r;
      if (!n.isMounted)
        if (i)
          z = x || r;
        else
          return;
      I[nt] && I[nt](
        !0
        /* cancelled */
      );
      const R = S[v];
      R && Zt(e, R) && R.el[nt] && R.el[nt](), E(z, [I]);
    },
    enter(I) {
      if (S[v] === e) return;
      let z = u, R = c, A = d;
      if (!n.isMounted)
        if (i)
          z = y || u, R = w || c, A = D || d;
        else
          return;
      let N = !1;
      I[Mn] = (H) => {
        N || (N = !0, H ? E(A, [I]) : E(R, [I]), O.delayedLeave && O.delayedLeave(), I[Mn] = void 0);
      };
      const Q = I[Mn].bind(null, !1);
      z ? T(z, [I, Q]) : Q();
    },
    leave(I, z) {
      const R = String(e.key);
      if (I[Mn] && I[Mn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return z();
      E(f, [I]);
      let A = !1;
      I[nt] = (Q) => {
        A || (A = !0, z(), Q ? E(_, [I]) : E(m, [I]), I[nt] = void 0, S[R] === e && delete S[R]);
      };
      const N = I[nt].bind(null, !1);
      S[R] = e, p ? T(p, [I, N]) : N();
    },
    clone(I) {
      const z = Fo(
        I,
        t,
        n,
        s,
        o
      );
      return o && o(z), z;
    }
  };
  return O;
}
function io(e) {
  if (ns(e))
    return e = Vt(e), e.children = null, e;
}
function hi(e) {
  if (!ns(e))
    return jl(e.type) && e.children ? Kl(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ue(n.default))
      return n.default();
  }
}
function qn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, qn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Xl(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let l = e[i];
    const a = n == null ? l.key : String(n) + String(l.key != null ? l.key : i);
    l.type === fe ? (l.patchFlag & 128 && o++, s = s.concat(
      Xl(l.children, t, a)
    )) : (t || l.type !== He) && s.push(a != null ? Vt(l, { key: a }) : l);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Ce(e, t) {
  return ue(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Te({ name: e.name }, t, { setup: e })
  ) : e;
}
function Zo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function gi(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const xs = /* @__PURE__ */ new WeakMap();
function On(e, t, n, s, o = !1) {
  if (oe(e)) {
    e.forEach(
      (_, x) => On(
        _,
        t && (oe(t) ? t[x] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (gn(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && On(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Xs(s.component) : s.el, l = o ? null : i, { i: a, r } = e, u = t && t.r, c = a.refs === xe ? a.refs = {} : a.refs, d = a.setupState, f = /* @__PURE__ */ me(d), p = d === xe ? rl : (_) => gi(c, _) ? !1 : ve(f, _), m = (_, x) => !(x && gi(c, x));
  if (u != null && u !== r) {
    if (_i(t), Le(u))
      c[u] = null, p(u) && (d[u] = null);
    else if (/* @__PURE__ */ ye(u)) {
      const _ = t;
      m(u, _.k) && (u.value = null), _.k && (c[_.k] = null);
    }
  }
  if (ue(r)) {
    vt();
    try {
      es(r, a, 12, [l, c]);
    } finally {
      yt();
    }
  } else {
    const _ = Le(r), x = /* @__PURE__ */ ye(r);
    if (_ || x) {
      const y = () => {
        if (e.f) {
          const w = _ ? p(r) ? d[r] : c[r] : m() || !e.k ? r.value : c[e.k];
          if (o)
            oe(w) && Wo(w, i);
          else if (oe(w))
            w.includes(i) || w.push(i);
          else if (_)
            c[r] = [i], p(r) && (d[r] = c[r]);
          else {
            const D = [i];
            m(r, e.k) && (r.value = D), e.k && (c[e.k] = D);
          }
        } else _ ? (c[r] = l, p(r) && (d[r] = l)) : x && (m(r, e.k) && (r.value = l), e.k && (c[e.k] = l));
      };
      if (l) {
        const w = () => {
          y(), xs.delete(e);
        };
        w.id = -1, xs.set(e, w), je(w, n);
      } else
        _i(e), y();
    }
  }
}
function _i(e) {
  const t = xs.get(e);
  t && (t.flags |= 8, xs.delete(e));
}
const bi = (e) => e.nodeType === 8;
Hs().requestIdleCallback;
Hs().cancelIdleCallback;
function Yr(e, t) {
  if (bi(e) && e.data === "[") {
    let n = 1, s = e.nextSibling;
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1)
          break;
      } else if (bi(s))
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
function Ht(e) {
  ue(e) && (e = { loader: e });
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
        return new Promise((x, y) => {
          r(_, () => x(f()), () => y(_), d + 1);
        });
      throw _;
    }).then((_) => m !== u && u ? u : (_ && (_.__esModule || _[Symbol.toStringTag] === "Module") && (_ = _.default), c = _, _)));
  };
  return /* @__PURE__ */ Ce({
    name: "AsyncComponentWrapper",
    __asyncLoader: p,
    __asyncHydrate(m, _, x) {
      let y = !1;
      (_.bu || (_.bu = [])).push(() => y = !0);
      const w = () => {
        y || x();
      }, D = i ? () => {
        const v = i(
          w,
          (S) => Yr(m, S)
        );
        v && (_.bum || (_.bum = [])).push(v);
      } : w;
      c ? D() : p().then(() => !_.isUnmounted && D());
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const m = Ne;
      if (Zo(m), c)
        return () => rs(c, m);
      const _ = (S) => {
        u = null, ts(
          S,
          m,
          13,
          !s
        );
      };
      if (a && m.suspense || vn)
        return p().then((S) => () => rs(S, m)).catch((S) => (_(S), () => s ? Y(s, {
          error: S
        }) : null));
      const x = /* @__PURE__ */ ae(!1), y = /* @__PURE__ */ ae(), w = /* @__PURE__ */ ae(!!o);
      let D, v;
      return zs(() => {
        D != null && clearTimeout(D), v != null && clearTimeout(v);
      }), o && (v = setTimeout(() => {
        m.isUnmounted || (w.value = !1);
      }, o)), l != null && (D = setTimeout(() => {
        if (!m.isUnmounted && !x.value && !y.value) {
          const S = new Error(
            `Async component timed out after ${l}ms.`
          );
          _(S), y.value = S;
        }
      }, l)), p().then(() => {
        m.isUnmounted || (x.value = !0, m.parent && ns(m.parent.vnode) && m.parent.update());
      }).catch((S) => {
        if (m.isUnmounted) {
          u = null;
          return;
        }
        _(S), y.value = S;
      }), () => {
        if (x.value && c)
          return rs(c, m);
        if (y.value && s)
          return Y(s, {
            error: y.value
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
  const { ref: n, props: s, children: o, ce: i } = t.vnode, l = Y(e, s, o);
  return l.ref = n, l.ce = i, delete t.vnode.ce, l;
}
const ns = (e) => e.type.__isKeepAlive;
function Jr(e, t) {
  Yl(e, "a", t);
}
function Qr(e, t) {
  Yl(e, "da", t);
}
function Yl(e, t, n = Ne) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Gs(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      ns(o.parent.vnode) && Zr(s, t, n, o), o = o.parent;
  }
}
function Zr(e, t, n, s) {
  const o = Gs(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  zs(() => {
    Wo(s[t], o);
  }, n);
}
function Gs(e, t, n = Ne, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...l) => {
      vt();
      const a = ss(n), r = st(t, n, e, l);
      return a(), yt(), r;
    });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const Et = (e) => (t, n = Ne) => {
  (!vn || e === "sp") && Gs(e, (...s) => t(...s), n);
}, ec = Et("bm"), rn = Et("m"), tc = Et(
  "bu"
), nc = Et("u"), xn = Et(
  "bum"
), zs = Et("um"), sc = Et(
  "sp"
), oc = Et("rtg"), ic = Et("rtc");
function lc(e, t = Ne) {
  Gs("ec", e, t);
}
const ac = "components", Jl = /* @__PURE__ */ Symbol.for("v-ndc");
function rc(e) {
  return Le(e) ? cc(ac, e, !1) || e : e || Jl;
}
function cc(e, t, n = !0, s = !1) {
  const o = Oe || Ne;
  if (o) {
    const i = o.type;
    {
      const a = qc(
        i,
        !1
      );
      if (a && (a === t || a === ze(t) || a === Vs(ze(t))))
        return i;
    }
    const l = (
      // local registration
      // check instance[type] first which is resolved for options API
      vi(o[e] || i[e], t) || // global registration
      vi(o.appContext[e], t)
    );
    return !l && s ? i : l;
  }
}
function vi(e, t) {
  return e && (e[t] || e[ze(t)] || e[Vs(ze(t))]);
}
function Ae(e, t, n, s) {
  let o;
  const i = n, l = oe(e);
  if (l || Le(e)) {
    const a = l && /* @__PURE__ */ _t(e);
    let r = !1, u = !1;
    a && (r = !/* @__PURE__ */ Je(e), u = /* @__PURE__ */ Dt(e), e = Us(e)), o = new Array(e.length);
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
  } else if (be(e))
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
function uc(e, t, n = {}, s, o) {
  if (Oe.ce || Oe.parent && gn(Oe.parent) && Oe.parent.ce) {
    const u = Object.keys(n).length > 0;
    return L(), Ie(
      fe,
      null,
      [Y("slot", n, s)],
      u ? -2 : 64
    );
  }
  let i = e[t];
  i && i._c && (i._d = !1), L();
  const l = i && Ql(i(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  l && l.key, r = Ie(
    fe,
    {
      key: (a && !Ze(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!l && s ? "_fb" : "")
    },
    l || [],
    l && e._ === 1 ? 64 : -2
  );
  return i && i._c && (i._d = !0), r;
}
function Ql(e) {
  return e.some((t) => Yn(t) ? !(t.type === He || t.type === fe && !Ql(t.children)) : !0) ? e : null;
}
const Mo = (e) => e ? _a(e) ? Xs(e) : Mo(e.parent) : null, $n = (
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
    $parent: (e) => Mo(e.parent),
    $root: (e) => Mo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ea(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Qo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Sn.bind(e.proxy)),
    $watch: (e) => jr.bind(e)
  })
), lo = (e, t) => e !== xe && !e.__isScriptSetup && ve(e, t), dc = {
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
        if (lo(s, t))
          return l[t] = 1, s[t];
        if (o !== xe && ve(o, t))
          return l[t] = 2, o[t];
        if (ve(i, t))
          return l[t] = 3, i[t];
        if (n !== xe && ve(n, t))
          return l[t] = 4, n[t];
        Lo && (l[t] = 0);
      }
    }
    const u = $n[t];
    let c, d;
    if (u)
      return t === "$attrs" && Be(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (c = a.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== xe && ve(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      d = r.config.globalProperties, ve(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return lo(o, t) ? (o[t] = n, !0) : s !== xe && ve(s, t) ? (s[t] = n, !0) : ve(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: i, type: l }
  }, a) {
    let r;
    return !!(n[a] || e !== xe && a[0] !== "$" && ve(e, a) || lo(t, a) || ve(i, a) || ve(s, a) || ve($n, a) || ve(o.config.globalProperties, a) || (r = l.__cssModules) && r[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ve(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function yi(e) {
  return oe(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Lo = !0;
function fc(e) {
  const t = ea(e), n = e.proxy, s = e.ctx;
  Lo = !1, t.beforeCreate && wi(t.beforeCreate, e, "bc");
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
    deactivated: x,
    beforeDestroy: y,
    beforeUnmount: w,
    destroyed: D,
    unmounted: v,
    render: S,
    renderTracked: E,
    renderTriggered: T,
    errorCaptured: O,
    serverPrefetch: I,
    // public API
    expose: z,
    inheritAttrs: R,
    // assets
    components: A,
    directives: N,
    filters: Q
  } = t;
  if (u && pc(u, s, null), l)
    for (const F in l) {
      const C = l[F];
      ue(C) && (s[F] = C.bind(n));
    }
  if (o) {
    const F = o.call(n, n);
    be(F) && (e.data = /* @__PURE__ */ an(F));
  }
  if (Lo = !0, i)
    for (const F in i) {
      const C = i[F], M = ue(C) ? C.bind(n, n) : ue(C.get) ? C.get.bind(n, n) : gt, Z = !ue(C) && ue(C.set) ? C.set.bind(n) : gt, te = q({
        get: M,
        set: Z
      });
      Object.defineProperty(s, F, {
        enumerable: !0,
        configurable: !0,
        get: () => te.value,
        set: (_e) => te.value = _e
      });
    }
  if (a)
    for (const F in a)
      Zl(a[F], s, n, F);
  if (r) {
    const F = ue(r) ? r.call(n) : r;
    Reflect.ownKeys(F).forEach((C) => {
      Vr(C, F[C]);
    });
  }
  c && wi(c, e, "c");
  function W(F, C) {
    oe(C) ? C.forEach((M) => F(M.bind(n))) : C && F(C.bind(n));
  }
  if (W(ec, d), W(rn, f), W(tc, p), W(nc, m), W(Jr, _), W(Qr, x), W(lc, O), W(ic, E), W(oc, T), W(xn, w), W(zs, v), W(sc, I), oe(z))
    if (z.length) {
      const F = e.exposed || (e.exposed = {});
      z.forEach((C) => {
        Object.defineProperty(F, C, {
          get: () => n[C],
          set: (M) => n[C] = M,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === gt && (e.render = S), R != null && (e.inheritAttrs = R), A && (e.components = A), N && (e.directives = N), I && Zo(e);
}
function pc(e, t, n = gt) {
  oe(e) && (e = Io(e));
  for (const s in e) {
    const o = e[s];
    let i;
    be(o) ? "default" in o ? i = Nn(
      o.from || s,
      o.default,
      !0
    ) : i = Nn(o.from || s) : i = Nn(o), /* @__PURE__ */ ye(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[s] = i;
  }
}
function wi(e, t, n) {
  st(
    oe(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Zl(e, t, n, s) {
  let o = s.includes(".") ? Hl(n, s) : () => n[s];
  if (Le(e)) {
    const i = t[e];
    ue(i) && $e(o, i);
  } else if (ue(e))
    $e(o, e.bind(n));
  else if (be(e))
    if (oe(e))
      e.forEach((i) => Zl(i, t, n, s));
    else {
      const i = ue(e.handler) ? e.handler.bind(n) : t[e.handler];
      ue(i) && $e(o, i, e);
    }
}
function ea(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, a = i.get(t);
  let r;
  return a ? r = a : !o.length && !n && !s ? r = t : (r = {}, o.length && o.forEach(
    (u) => Cs(r, u, l, !0)
  ), Cs(r, t, l)), be(t) && i.set(t, r), r;
}
function Cs(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && Cs(e, i, n, !0), o && o.forEach(
    (l) => Cs(e, l, n, !0)
  );
  for (const l in t)
    if (!(s && l === "expose")) {
      const a = mc[l] || n && n[l];
      e[l] = a ? a(e[l], t[l]) : t[l];
    }
  return e;
}
const mc = {
  data: Si,
  props: xi,
  emits: xi,
  // objects
  methods: kn,
  computed: kn,
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
  components: kn,
  directives: kn,
  // watch
  watch: gc,
  // provide / inject
  provide: Si,
  inject: hc
};
function Si(e, t) {
  return t ? e ? function() {
    return Te(
      ue(e) ? e.call(this, this) : e,
      ue(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function hc(e, t) {
  return kn(Io(e), Io(t));
}
function Io(e) {
  if (oe(e)) {
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
function kn(e, t) {
  return e ? Te(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function xi(e, t) {
  return e ? oe(e) && oe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Te(
    /* @__PURE__ */ Object.create(null),
    yi(e),
    yi(t ?? {})
  ) : t;
}
function gc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Te(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Ue(e[s], t[s]);
  return n;
}
function ta() {
  return {
    app: null,
    config: {
      isNativeTag: rl,
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
let _c = 0;
function bc(e, t) {
  return function(s, o = null) {
    ue(s) || (s = Te({}, s)), o != null && !be(o) && (o = null);
    const i = ta(), l = /* @__PURE__ */ new WeakSet(), a = [];
    let r = !1;
    const u = i.app = {
      _uid: _c++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Yc,
      get config() {
        return i.config;
      },
      set config(c) {
      },
      use(c, ...d) {
        return l.has(c) || (c && ue(c.install) ? (l.add(c), c.install(u, ...d)) : ue(c) && (l.add(c), c(u, ...d))), u;
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
          return p.appContext = i, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(p, c, f), r = !0, u._container = c, c.__vue_app__ = u, Xs(p.component);
        }
      },
      onUnmount(c) {
        a.push(c);
      },
      unmount() {
        r && (st(
          a,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, d) {
        return i.provides[c] = d, u;
      },
      runWithContext(c) {
        const d = on;
        on = u;
        try {
          return c();
        } finally {
          on = d;
        }
      }
    };
    return u;
  };
}
let on = null;
const vc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ze(t)}Modifiers`] || e[`${Bt(t)}Modifiers`];
function yc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || xe;
  let o = n;
  const i = t.startsWith("update:"), l = i && vc(s, t.slice(7));
  l && (l.trim && (o = n.map((c) => Le(c) ? c.trim() : c)), l.number && (o = n.map(Bs)));
  let a, r = s[a = eo(t)] || // also try camelCase event handler (#2249)
  s[a = eo(ze(t))];
  !r && i && (r = s[a = eo(Bt(t))]), r && st(
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
    e.emitted[a] = !0, st(
      u,
      e,
      6,
      o
    );
  }
}
const wc = /* @__PURE__ */ new WeakMap();
function na(e, t, n = !1) {
  const s = n ? wc : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let l = {}, a = !1;
  if (!ue(e)) {
    const r = (u) => {
      const c = na(u, t, !0);
      c && (a = !0, Te(l, c));
    };
    !n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
  }
  return !i && !a ? (be(e) && s.set(e, null), null) : (oe(i) ? i.forEach((r) => l[r] = null) : Te(l, i), be(e) && s.set(e, l), l);
}
function Ks(e, t) {
  return !e || !Rs(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ve(e, t[0].toLowerCase() + t.slice(1)) || ve(e, Bt(t)) || ve(e, t));
}
function Ci(e) {
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
  } = e, x = Ss(e);
  let y, w;
  try {
    if (n.shapeFlag & 4) {
      const v = o || s, S = v;
      y = mt(
        u.call(
          S,
          v,
          c,
          d,
          p,
          f,
          m
        )
      ), w = a;
    } else {
      const v = t;
      y = mt(
        v.length > 1 ? v(
          d,
          { attrs: a, slots: l, emit: r }
        ) : v(
          d,
          null
        )
      ), w = t.props ? a : Sc(a);
    }
  } catch (v) {
    Vn.length = 0, ts(v, e, 1), y = Y(He);
  }
  let D = y;
  if (w && _ !== !1) {
    const v = Object.keys(w), { shapeFlag: S } = D;
    v.length && S & 7 && (i && v.some(Ps) && (w = xc(
      w,
      i
    )), D = Vt(D, w, !1, !0));
  }
  return n.dirs && (D = Vt(D, null, !1, !0), D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs), n.transition && qn(D, n.transition), y = D, Ss(x), y;
}
const Sc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Rs(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, xc = (e, t) => {
  const n = {};
  for (const s in e)
    (!Ps(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Cc(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: l, children: a, patchFlag: r } = t, u = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && r >= 0) {
    if (r & 1024)
      return !0;
    if (r & 16)
      return s ? Fi(s, l, u) : !!l;
    if (r & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (sa(l, s, f) && !Ks(u, f))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : s === l ? !1 : s ? l ? Fi(s, l, u) : !0 : !!l;
  return !1;
}
function Fi(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (sa(t, e, i) && !Ks(n, i))
      return !0;
  }
  return !1;
}
function sa(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && be(s) && be(o) ? !Zn(s, o) : s !== o;
}
function Fc({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = s, e = o), o === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const oa = {}, ia = () => Object.create(oa), la = (e) => Object.getPrototypeOf(e) === oa;
function Mc(e, t, n, s = !1) {
  const o = {}, i = ia();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), aa(e, t, o, i);
  for (const l in e.propsOptions[0])
    l in o || (o[l] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ Cr(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function Lc(e, t, n, s) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: l }
  } = e, a = /* @__PURE__ */ me(o), [r] = e.propsOptions;
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
        if (Ks(e.emitsOptions, f))
          continue;
        const p = t[f];
        if (r)
          if (ve(i, f))
            p !== i[f] && (i[f] = p, u = !0);
          else {
            const m = ze(f);
            o[m] = Ao(
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
    aa(e, t, o, i) && (u = !0);
    let c;
    for (const d in a)
      (!t || // for camelCase
      !ve(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Bt(d)) === d || !ve(t, c))) && (r ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (o[d] = Ao(
        r,
        a,
        d,
        void 0,
        e,
        !0
      )) : delete o[d]);
    if (i !== a)
      for (const d in i)
        (!t || !ve(t, d)) && (delete i[d], u = !0);
  }
  u && At(e.attrs, "set", "");
}
function aa(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let l = !1, a;
  if (t)
    for (let r in t) {
      if (Tn(r))
        continue;
      const u = t[r];
      let c;
      o && ve(o, c = ze(r)) ? !i || !i.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : Ks(e.emitsOptions, r) || (!(r in s) || u !== s[r]) && (s[r] = u, l = !0);
    }
  if (i) {
    const r = /* @__PURE__ */ me(n), u = a || xe;
    for (let c = 0; c < i.length; c++) {
      const d = i[c];
      n[d] = Ao(
        o,
        r,
        d,
        u[d],
        e,
        !ve(u, d)
      );
    }
  }
  return l;
}
function Ao(e, t, n, s, o, i) {
  const l = e[n];
  if (l != null) {
    const a = ve(l, "default");
    if (a && s === void 0) {
      const r = l.default;
      if (l.type !== Function && !l.skipFactory && ue(r)) {
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
const Ic = /* @__PURE__ */ new WeakMap();
function ra(e, t, n = !1) {
  const s = n ? Ic : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, l = {}, a = [];
  let r = !1;
  if (!ue(e)) {
    const c = (d) => {
      r = !0;
      const [f, p] = ra(d, t, !0);
      Te(l, f), p && a.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !r)
    return be(e) && s.set(e, pn), pn;
  if (oe(i))
    for (let c = 0; c < i.length; c++) {
      const d = ze(i[c]);
      Mi(d) && (l[d] = xe);
    }
  else if (i)
    for (const c in i) {
      const d = ze(c);
      if (Mi(d)) {
        const f = i[c], p = l[d] = oe(f) || ue(f) ? { type: f } : Te({}, f), m = p.type;
        let _ = !1, x = !0;
        if (oe(m))
          for (let y = 0; y < m.length; ++y) {
            const w = m[y], D = ue(w) && w.name;
            if (D === "Boolean") {
              _ = !0;
              break;
            } else D === "String" && (x = !1);
          }
        else
          _ = ue(m) && m.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = _, p[
          1
          /* shouldCastTrue */
        ] = x, (_ || ve(p, "default")) && a.push(d);
      }
    }
  const u = [l, a];
  return be(e) && s.set(e, u), u;
}
function Mi(e) {
  return e[0] !== "$" && !Tn(e);
}
const ei = (e) => e === "_" || e === "_ctx" || e === "$stable", ti = (e) => oe(e) ? e.map(mt) : [mt(e)], Ac = (e, t, n) => {
  if (t._n)
    return t;
  const s = Ws((...o) => ti(t(...o)), n);
  return s._c = !1, s;
}, ca = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (ei(o)) continue;
    const i = e[o];
    if (ue(i))
      t[o] = Ac(o, i, s);
    else if (i != null) {
      const l = ti(i);
      t[o] = () => l;
    }
  }
}, ua = (e, t) => {
  const n = ti(t);
  e.slots.default = () => n;
}, da = (e, t, n) => {
  for (const s in t)
    (n || !ei(s)) && (e[s] = t[s]);
}, kc = (e, t, n) => {
  const s = e.slots = ia();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (da(s, t, n), n && fl(s, "_", o, !0)) : ca(t, s);
  } else t && ua(e, t);
}, Dc = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, l = xe;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? i = !1 : da(o, t, n) : (i = !t.$stable, ca(t, o)), l = t;
  } else t && (ua(e, t), l = { default: 1 });
  if (i)
    for (const a in o)
      !ei(a) && l[a] == null && delete o[a];
}, je = Nc;
function Ec(e) {
  return Tc(e);
}
function Tc(e, t) {
  const n = Hs();
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
    setScopeId: p = gt,
    insertStaticContent: m
  } = e, _ = (h, b, k, j = null, B = null, $ = null, X = void 0, K = null, G = !!b.dynamicChildren) => {
    if (h === b)
      return;
    h && !Zt(h, b) && (j = Gt(h), _e(h, B, $, !0), h = null), b.patchFlag === -2 && (G = !1, b.dynamicChildren = null);
    const { type: V, ref: ie, shapeFlag: J } = b;
    switch (V) {
      case qs:
        x(h, b, k, j);
        break;
      case He:
        y(h, b, k, j);
        break;
      case ro:
        h == null && w(b, k, j, X);
        break;
      case fe:
        A(
          h,
          b,
          k,
          j,
          B,
          $,
          X,
          K,
          G
        );
        break;
      default:
        J & 1 ? S(
          h,
          b,
          k,
          j,
          B,
          $,
          X,
          K,
          G
        ) : J & 6 ? N(
          h,
          b,
          k,
          j,
          B,
          $,
          X,
          K,
          G
        ) : (J & 64 || J & 128) && V.process(
          h,
          b,
          k,
          j,
          B,
          $,
          X,
          K,
          G,
          Re
        );
    }
    ie != null && B ? On(ie, h && h.ref, $, b || h, !b) : ie == null && h && h.ref != null && On(h.ref, null, $, h, !0);
  }, x = (h, b, k, j) => {
    if (h == null)
      s(
        b.el = a(b.children),
        k,
        j
      );
    else {
      const B = b.el = h.el;
      b.children !== h.children && u(B, b.children);
    }
  }, y = (h, b, k, j) => {
    h == null ? s(
      b.el = r(b.children || ""),
      k,
      j
    ) : b.el = h.el;
  }, w = (h, b, k, j) => {
    [h.el, h.anchor] = m(
      h.children,
      b,
      k,
      j,
      h.el,
      h.anchor
    );
  }, D = ({ el: h, anchor: b }, k, j) => {
    let B;
    for (; h && h !== b; )
      B = f(h), s(h, k, j), h = B;
    s(b, k, j);
  }, v = ({ el: h, anchor: b }) => {
    let k;
    for (; h && h !== b; )
      k = f(h), o(h), h = k;
    o(b);
  }, S = (h, b, k, j, B, $, X, K, G) => {
    if (b.type === "svg" ? X = "svg" : b.type === "math" && (X = "mathml"), h == null)
      E(
        b,
        k,
        j,
        B,
        $,
        X,
        K,
        G
      );
    else {
      const V = h.el && h.el._isVueCE ? h.el : null;
      try {
        V && V._beginPatch(), I(
          h,
          b,
          B,
          $,
          X,
          K,
          G
        );
      } finally {
        V && V._endPatch();
      }
    }
  }, E = (h, b, k, j, B, $, X, K) => {
    let G, V;
    const { props: ie, shapeFlag: J, transition: ne, dirs: ce } = h;
    if (G = h.el = l(
      h.type,
      $,
      ie && ie.is,
      ie
    ), J & 8 ? c(G, h.children) : J & 16 && O(
      h.children,
      G,
      null,
      j,
      B,
      ao(h, $),
      X,
      K
    ), ce && zt(h, null, j, "created"), T(G, h, h.scopeId, X, j), ie) {
      for (const Se in ie)
        Se !== "value" && !Tn(Se) && i(G, Se, null, ie[Se], $, j);
      "value" in ie && i(G, "value", null, ie.value, $), (V = ie.onVnodeBeforeMount) && dt(V, j, h);
    }
    ce && zt(h, null, j, "beforeMount");
    const he = Rc(B, ne);
    he && ne.beforeEnter(G), s(G, b, k), ((V = ie && ie.onVnodeMounted) || he || ce) && je(() => {
      try {
        V && dt(V, j, h), he && ne.enter(G), ce && zt(h, null, j, "mounted");
      } finally {
      }
    }, B);
  }, T = (h, b, k, j, B) => {
    if (k && p(h, k), j)
      for (let $ = 0; $ < j.length; $++)
        p(h, j[$]);
    if (B) {
      let $ = B.subTree;
      if (b === $ || ma($.type) && ($.ssContent === b || $.ssFallback === b)) {
        const X = B.vnode;
        T(
          h,
          X,
          X.scopeId,
          X.slotScopeIds,
          B.parent
        );
      }
    }
  }, O = (h, b, k, j, B, $, X, K, G = 0) => {
    for (let V = G; V < h.length; V++) {
      const ie = h[V] = K ? Lt(h[V]) : mt(h[V]);
      _(
        null,
        ie,
        b,
        k,
        j,
        B,
        $,
        X,
        K
      );
    }
  }, I = (h, b, k, j, B, $, X) => {
    const K = b.el = h.el;
    let { patchFlag: G, dynamicChildren: V, dirs: ie } = b;
    G |= h.patchFlag & 16;
    const J = h.props || xe, ne = b.props || xe;
    let ce;
    if (k && Kt(k, !1), (ce = ne.onVnodeBeforeUpdate) && dt(ce, k, b, h), ie && zt(b, h, k, "beforeUpdate"), k && Kt(k, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    V && (!h.dynamicChildren || h.dynamicChildren.length !== V.length) && (G = 0, X = !1, V = null), (J.innerHTML && ne.innerHTML == null || J.textContent && ne.textContent == null) && c(K, ""), V ? z(
      h.dynamicChildren,
      V,
      K,
      k,
      j,
      ao(b, B),
      $
    ) : X || C(
      h,
      b,
      K,
      null,
      k,
      j,
      ao(b, B),
      $,
      !1
    ), G > 0) {
      if (G & 16)
        R(K, J, ne, k, B);
      else if (G & 2 && J.class !== ne.class && i(K, "class", null, ne.class, B), G & 4 && i(K, "style", J.style, ne.style, B), G & 8) {
        const he = b.dynamicProps;
        for (let Se = 0; Se < he.length; Se++) {
          const we = he[Se], De = J[we], Pe = ne[we];
          (Pe !== De || we === "value") && i(K, we, De, Pe, B, k);
        }
      }
      G & 1 && h.children !== b.children && c(K, b.children);
    } else !X && V == null && R(K, J, ne, k, B);
    ((ce = ne.onVnodeUpdated) || ie) && je(() => {
      ce && dt(ce, k, b, h), ie && zt(b, h, k, "updated");
    }, j);
  }, z = (h, b, k, j, B, $, X) => {
    for (let K = 0; K < b.length; K++) {
      const G = h[K], V = b[K], ie = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        G.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (G.type === fe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Zt(G, V) || // - In the case of a component, it could contain anything.
        G.shapeFlag & 198) ? d(G.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          k
        )
      );
      _(
        G,
        V,
        ie,
        null,
        j,
        B,
        $,
        X,
        !0
      );
    }
  }, R = (h, b, k, j, B) => {
    if (b !== k) {
      if (b !== xe)
        for (const $ in b)
          !Tn($) && !($ in k) && i(
            h,
            $,
            b[$],
            null,
            B,
            j
          );
      for (const $ in k) {
        if (Tn($)) continue;
        const X = k[$], K = b[$];
        X !== K && $ !== "value" && i(h, $, K, X, B, j);
      }
      "value" in k && i(h, "value", b.value, k.value, B);
    }
  }, A = (h, b, k, j, B, $, X, K, G) => {
    const V = b.el = h ? h.el : a(""), ie = b.anchor = h ? h.anchor : a("");
    let { patchFlag: J, dynamicChildren: ne, slotScopeIds: ce } = b;
    ce && (K = K ? K.concat(ce) : ce), h == null ? (s(V, k, j), s(ie, k, j), O(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      k,
      ie,
      B,
      $,
      X,
      K,
      G
    )) : J > 0 && J & 64 && ne && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren && h.dynamicChildren.length === ne.length ? (z(
      h.dynamicChildren,
      ne,
      k,
      B,
      $,
      X,
      K
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || B && b === B.subTree) && ni(
      h,
      b,
      !0
      /* shallow */
    )) : C(
      h,
      b,
      k,
      ie,
      B,
      $,
      X,
      K,
      G
    );
  }, N = (h, b, k, j, B, $, X, K, G) => {
    b.slotScopeIds = K, h == null ? b.shapeFlag & 512 ? B.ctx.activate(
      b,
      k,
      j,
      X,
      G
    ) : Q(
      b,
      k,
      j,
      B,
      $,
      X,
      G
    ) : H(h, b, G);
  }, Q = (h, b, k, j, B, $, X) => {
    const K = h.component = jc(
      h,
      j,
      B
    );
    if (ns(h) && (K.ctx.renderer = Re), Wc(K, !1, X), K.asyncDep) {
      if (B && B.registerDep(K, W, X), !h.el) {
        const G = K.subTree = Y(He);
        y(null, G, b, k), h.placeholder = G.el;
      }
    } else
      W(
        K,
        h,
        b,
        k,
        B,
        $,
        X
      );
  }, H = (h, b, k) => {
    const j = b.component = h.component;
    if (Cc(h, b, k))
      if (j.asyncDep && !j.asyncResolved) {
        F(j, b, k);
        return;
      } else
        j.next = b, j.update();
    else
      b.el = h.el, j.vnode = b;
  }, W = (h, b, k, j, B, $, X) => {
    const K = () => {
      if (h.isMounted) {
        let { next: J, bu: ne, u: ce, parent: he, vnode: Se } = h;
        {
          const ct = fa(h);
          if (ct) {
            J && (J.el = Se.el, F(h, J, X)), ct.asyncDep.then(() => {
              je(() => {
                h.isUnmounted || V();
              }, B);
            });
            return;
          }
        }
        let we = J, De;
        Kt(h, !1), J ? (J.el = Se.el, F(h, J, X)) : J = Se, ne && ms(ne), (De = J.props && J.props.onVnodeBeforeUpdate) && dt(De, he, J, Se), Kt(h, !0);
        const Pe = Ci(h), rt = h.subTree;
        h.subTree = Pe, _(
          rt,
          Pe,
          // parent may have changed if it's in a teleport
          d(rt.el),
          // anchor may have changed if it's in a fragment
          Gt(rt),
          h,
          B,
          $
        ), J.el = Pe.el, we === null && Fc(h, Pe.el), ce && je(ce, B), (De = J.props && J.props.onVnodeUpdated) && je(
          () => dt(De, he, J, Se),
          B
        );
      } else {
        let J;
        const { el: ne, props: ce } = b, { bm: he, m: Se, parent: we, root: De, type: Pe } = h, rt = gn(b);
        Kt(h, !1), he && ms(he), !rt && (J = ce && ce.onVnodeBeforeMount) && dt(J, we, b), Kt(h, !0);
        {
          De.ce && De.ce._hasShadowRoot() && De.ce._injectChildStyle(
            Pe,
            h.parent ? h.parent.type : void 0
          );
          const ct = h.subTree = Ci(h);
          _(
            null,
            ct,
            k,
            j,
            h,
            B,
            $
          ), b.el = ct.el;
        }
        if (Se && je(Se, B), !rt && (J = ce && ce.onVnodeMounted)) {
          const ct = b;
          je(
            () => dt(J, we, ct),
            B
          );
        }
        (b.shapeFlag & 256 || we && gn(we.vnode) && we.vnode.shapeFlag & 256) && h.a && je(h.a, B), h.isMounted = !0, b = k = j = null;
      }
    };
    h.scope.on();
    const G = h.effect = new vl(K);
    h.scope.off();
    const V = h.update = G.run.bind(G), ie = h.job = G.runIfDirty.bind(G);
    ie.i = h, ie.id = h.uid, G.scheduler = () => Qo(ie), Kt(h, !0), V();
  }, F = (h, b, k) => {
    b.component = h;
    const j = h.vnode.props;
    h.vnode = b, h.next = null, Lc(h, b.props, j, k), Dc(h, b.children, k), vt(), fi(h), yt();
  }, C = (h, b, k, j, B, $, X, K, G = !1) => {
    const V = h && h.children, ie = h ? h.shapeFlag : 0, J = b.children, { patchFlag: ne, shapeFlag: ce } = b;
    if (ne > 0) {
      if (ne & 128) {
        Z(
          V,
          J,
          k,
          j,
          B,
          $,
          X,
          K,
          G
        );
        return;
      } else if (ne & 256) {
        M(
          V,
          J,
          k,
          j,
          B,
          $,
          X,
          K,
          G
        );
        return;
      }
    }
    ce & 8 ? (ie & 16 && ke(V, B, $), J !== V && c(k, J)) : ie & 16 ? ce & 16 ? Z(
      V,
      J,
      k,
      j,
      B,
      $,
      X,
      K,
      G
    ) : ke(V, B, $, !0) : (ie & 8 && c(k, ""), ce & 16 && O(
      J,
      k,
      j,
      B,
      $,
      X,
      K,
      G
    ));
  }, M = (h, b, k, j, B, $, X, K, G) => {
    h = h || pn, b = b || pn;
    const V = h.length, ie = b.length, J = Math.min(V, ie);
    let ne;
    for (ne = 0; ne < J; ne++) {
      const ce = b[ne] = G ? Lt(b[ne]) : mt(b[ne]);
      _(
        h[ne],
        ce,
        k,
        null,
        B,
        $,
        X,
        K,
        G
      );
    }
    V > ie ? ke(
      h,
      B,
      $,
      !0,
      !1,
      J
    ) : O(
      b,
      k,
      j,
      B,
      $,
      X,
      K,
      G,
      J
    );
  }, Z = (h, b, k, j, B, $, X, K, G) => {
    let V = 0;
    const ie = b.length;
    let J = h.length - 1, ne = ie - 1;
    for (; V <= J && V <= ne; ) {
      const ce = h[V], he = b[V] = G ? Lt(b[V]) : mt(b[V]);
      if (Zt(ce, he))
        _(
          ce,
          he,
          k,
          null,
          B,
          $,
          X,
          K,
          G
        );
      else
        break;
      V++;
    }
    for (; V <= J && V <= ne; ) {
      const ce = h[J], he = b[ne] = G ? Lt(b[ne]) : mt(b[ne]);
      if (Zt(ce, he))
        _(
          ce,
          he,
          k,
          null,
          B,
          $,
          X,
          K,
          G
        );
      else
        break;
      J--, ne--;
    }
    if (V > J) {
      if (V <= ne) {
        const ce = ne + 1, he = ce < ie ? b[ce].el : j;
        for (; V <= ne; )
          _(
            null,
            b[V] = G ? Lt(b[V]) : mt(b[V]),
            k,
            he,
            B,
            $,
            X,
            K,
            G
          ), V++;
      }
    } else if (V > ne)
      for (; V <= J; )
        _e(h[V], B, $, !0), V++;
    else {
      const ce = V, he = V, Se = /* @__PURE__ */ new Map();
      for (V = he; V <= ne; V++) {
        const Xe = b[V] = G ? Lt(b[V]) : mt(b[V]);
        Xe.key != null && Se.set(Xe.key, V);
      }
      let we, De = 0;
      const Pe = ne - he + 1;
      let rt = !1, ct = 0;
      const Cn = new Array(Pe);
      for (V = 0; V < Pe; V++) Cn[V] = 0;
      for (V = ce; V <= J; V++) {
        const Xe = h[V];
        if (De >= Pe) {
          _e(Xe, B, $, !0);
          continue;
        }
        let ut;
        if (Xe.key != null)
          ut = Se.get(Xe.key);
        else
          for (we = he; we <= ne; we++)
            if (Cn[we - he] === 0 && Zt(Xe, b[we])) {
              ut = we;
              break;
            }
        ut === void 0 ? _e(Xe, B, $, !0) : (Cn[ut - he] = V + 1, ut >= ct ? ct = ut : rt = !0, _(
          Xe,
          b[ut],
          k,
          null,
          B,
          $,
          X,
          K,
          G
        ), De++);
      }
      const ii = rt ? Pc(Cn) : pn;
      for (we = ii.length - 1, V = Pe - 1; V >= 0; V--) {
        const Xe = he + V, ut = b[Xe], li = b[Xe + 1], ai = Xe + 1 < ie ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          li.el || pa(li)
        ) : j;
        Cn[V] === 0 ? _(
          null,
          ut,
          k,
          ai,
          B,
          $,
          X,
          K,
          G
        ) : rt && (we < 0 || V !== ii[we] ? te(ut, k, ai, 2) : we--);
      }
    }
  }, te = (h, b, k, j, B = null) => {
    const { el: $, type: X, transition: K, children: G, shapeFlag: V } = h;
    if (V & 6) {
      te(h.component.subTree, b, k, j);
      return;
    }
    if (V & 128) {
      h.suspense.move(b, k, j);
      return;
    }
    if (V & 64) {
      X.move(h, b, k, Re);
      return;
    }
    if (X === fe) {
      s($, b, k);
      for (let J = 0; J < G.length; J++)
        te(G[J], b, k, j);
      s(h.anchor, b, k);
      return;
    }
    if (X === ro) {
      D(h, b, k);
      return;
    }
    if (j !== 2 && V & 1 && K)
      if (j === 0)
        K.persisted && !$[nt] ? s($, b, k) : (K.beforeEnter($), s($, b, k), je(() => K.enter($), B));
      else {
        const { leave: J, delayLeave: ne, afterLeave: ce } = K, he = () => {
          h.ctx.isUnmounted ? o($) : s($, b, k);
        }, Se = () => {
          const we = $._isLeaving || !!$[nt];
          $._isLeaving && $[nt](
            !0
            /* cancelled */
          ), K.persisted && !we ? he() : J($, () => {
            he(), ce && ce();
          });
        };
        ne ? ne($, he, Se) : Se();
      }
    else
      s($, b, k);
  }, _e = (h, b, k, j = !1, B = !1) => {
    const {
      type: $,
      props: X,
      ref: K,
      children: G,
      dynamicChildren: V,
      shapeFlag: ie,
      patchFlag: J,
      dirs: ne,
      cacheIndex: ce,
      memo: he
    } = h;
    if (J === -2 && (B = !1), K != null && (vt(), On(K, null, k, h, !0), yt()), ce != null && (b.renderCache[ce] = void 0), ie & 256) {
      b.ctx.deactivate(h);
      return;
    }
    const Se = ie & 1 && ne, we = !gn(h);
    let De;
    if (we && (De = X && X.onVnodeBeforeUnmount) && dt(De, b, h), ie & 6)
      Ve(h.component, k, j);
    else {
      if (ie & 128) {
        h.suspense.unmount(k, j);
        return;
      }
      Se && zt(h, null, b, "beforeUnmount"), ie & 64 ? h.type.remove(
        h,
        b,
        k,
        Re,
        j
      ) : V && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !V.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      ($ !== fe || J > 0 && J & 64) ? ke(
        V,
        b,
        k,
        !1,
        !0
      ) : ($ === fe && J & 384 || !B && ie & 16) && ke(G, b, k), j && et(h);
    }
    const Pe = he != null && ce == null;
    (we && (De = X && X.onVnodeUnmounted) || Se || Pe) && je(() => {
      De && dt(De, b, h), Se && zt(h, null, b, "unmounted"), Pe && (h.el = null);
    }, k);
  }, et = (h) => {
    const { type: b, el: k, anchor: j, transition: B } = h;
    if (b === fe) {
      re(k, j);
      return;
    }
    if (b === ro) {
      v(h);
      return;
    }
    const $ = () => {
      o(k), B && !B.persisted && B.afterLeave && B.afterLeave();
    };
    if (h.shapeFlag & 1 && B && !B.persisted) {
      const { leave: X, delayLeave: K } = B, G = () => X(k, $);
      K ? K(h.el, $, G) : G();
    } else
      $();
  }, re = (h, b) => {
    let k;
    for (; h !== b; )
      k = f(h), o(h), h = k;
    o(b);
  }, Ve = (h, b, k) => {
    const { bum: j, scope: B, job: $, subTree: X, um: K, m: G, a: V } = h;
    Li(G), Li(V), j && ms(j), B.stop(), $ && ($.flags |= 8, _e(X, h, b, k)), K && je(K, b), je(() => {
      h.isUnmounted = !0;
    }, b);
  }, ke = (h, b, k, j = !1, B = !1, $ = 0) => {
    for (let X = $; X < h.length; X++)
      _e(h[X], b, k, j, B);
  }, Gt = (h) => {
    if (h.shapeFlag & 6)
      return Gt(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const b = f(h.anchor || h.el), k = b && b[Ul];
    return k ? f(k) : b;
  };
  let de = !1;
  const qe = (h, b, k) => {
    let j;
    h == null ? b._vnode && (_e(b._vnode, null, null, !0), j = b._vnode.component) : _(
      b._vnode || null,
      h,
      b,
      null,
      null,
      null,
      k
    ), b._vnode = h, de || (de = !0, fi(j), Ol(), de = !1);
  }, Re = {
    p: _,
    um: _e,
    m: te,
    r: et,
    mt: Q,
    mc: O,
    pc: C,
    pbc: z,
    n: Gt,
    o: e
  };
  return {
    render: qe,
    hydrate: void 0,
    createApp: bc(qe)
  };
}
function ao({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Kt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Rc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ni(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (oe(s) && oe(o))
    for (let i = 0; i < s.length; i++) {
      const l = s[i];
      let a = o[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[i] = Lt(o[i]), a.el = l.el), !n && a.patchFlag !== -2 && ni(l, a)), a.type === qs && (a.patchFlag === -1 && (a = o[i] = Lt(a)), a.el = l.el), a.type === He && !a.el && (a.el = l.el);
    }
}
function Pc(e) {
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
function fa(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : fa(t);
}
function Li(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function pa(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? pa(t.subTree) : null;
}
const ma = (e) => e.__isSuspense;
function Nc(e, t) {
  t && t.pendingBranch ? oe(e) ? t.effects.push(...e) : t.effects.push(e) : $r(e);
}
const fe = /* @__PURE__ */ Symbol.for("v-fgt"), qs = /* @__PURE__ */ Symbol.for("v-txt"), He = /* @__PURE__ */ Symbol.for("v-cmt"), ro = /* @__PURE__ */ Symbol.for("v-stc"), Vn = [];
let Ye = null;
function L(e = !1) {
  Vn.push(Ye = e ? null : []);
}
function Oc() {
  Vn.pop(), Ye = Vn[Vn.length - 1] || null;
}
let Xn = 1;
function Fs(e, t = !1) {
  Xn += e, e < 0 && Ye && t && (Ye.hasOnce = !0);
}
function ha(e) {
  return e.dynamicChildren = Xn > 0 ? Ye || pn : null, Oc(), Xn > 0 && Ye && Ye.push(e), e;
}
function P(e, t, n, s, o, i) {
  return ha(
    U(
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
  return ha(
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
function Zt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ga = ({ key: e }) => e ?? null, hs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Le(e) || /* @__PURE__ */ ye(e) || ue(e) ? { i: Oe, r: e, k: t, f: !!n } : e : null);
function U(e, t = null, n = null, s = 0, o = null, i = e === fe ? 0 : 1, l = !1, a = !1) {
  const r = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ga(t),
    ref: t && hs(t),
    scopeId: Vl,
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
    ctx: Oe
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
const Y = $c;
function $c(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === Jl) && (e = He), Yn(e)) {
    const a = Vt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ms(a, n), Xn > 0 && !i && Ye && (a.shapeFlag & 6 ? Ye[Ye.indexOf(e)] = a : Ye.push(a)), a.patchFlag = -2, a;
  }
  if (Xc(e) && (e = e.__vccOpts), t) {
    t = Vc(t);
    let { class: a, style: r } = t;
    a && !Le(a) && (t.class = ge(a)), be(r) && (/* @__PURE__ */ js(r) && !oe(r) && (r = Te({}, r)), t.style = Ge(r));
  }
  const l = Le(e) ? 1 : ma(e) ? 128 : jl(e) ? 64 : be(e) ? 4 : ue(e) ? 2 : 0;
  return U(
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
function Vc(e) {
  return e ? /* @__PURE__ */ js(e) || la(e) ? Te({}, e) : e : null;
}
function Vt(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: l, children: a, transition: r } = e, u = t ? Bc(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && ga(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? oe(i) ? i.concat(hs(t)) : [i, hs(t)] : hs(t)
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
    patchFlag: t && e.type !== fe ? l === -1 ? 16 : l | 16 : l,
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
function ko(e = " ", t = 0) {
  return Y(qs, null, e, t);
}
function se(e = "", t = !1) {
  return t ? (L(), Ie(He, null, e)) : Y(He, null, e);
}
function mt(e) {
  return e == null || typeof e == "boolean" ? Y(He) : oe(e) ? Y(
    fe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Yn(e) ? Lt(e) : Y(qs, null, String(e));
}
function Lt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Vt(e);
}
function Ms(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (oe(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Ms(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !la(t) ? t._ctx = Oe : o === 3 && Oe && (Oe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ue(t)) {
    if (s & 65) {
      Ms(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Oe }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [ko(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Bc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = ge([t.class, s.class]));
      else if (o === "style")
        t.style = Ge([t.style, s.style]);
      else if (Rs(o)) {
        const i = t[o], l = s[o];
        l && i !== l && !(oe(i) && i.includes(l)) ? t[o] = i ? [].concat(i, l) : l : l == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ps(o) && (t[o] = l);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function dt(e, t, n, s = null) {
  st(e, t, 7, [
    n,
    s
  ]);
}
const Hc = ta();
let Uc = 0;
function jc(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Hc, i = {
    uid: Uc++,
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
    scope: new gl(
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
    propsOptions: ra(s, o),
    emitsOptions: na(s, o),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = yc.bind(null, i), e.ce && e.ce(i), i;
}
let Ne = null;
const si = () => Ne || Oe;
let Ls, Do;
{
  const e = Hs(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((l) => l(i)) : o[0](i);
    };
  };
  Ls = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ne = n
  ), Do = t(
    "__VUE_SSR_SETTERS__",
    (n) => vn = n
  );
}
const ss = (e) => {
  const t = Ne;
  return Ls(e), e.scope.on(), () => {
    e.scope.off(), Ls(t);
  };
}, Ii = () => {
  Ne && Ne.scope.off(), Ls(null);
};
function _a(e) {
  return e.vnode.shapeFlag & 4;
}
let vn = !1;
function Wc(e, t = !1, n = !1) {
  t && Do(t);
  const { props: s, children: o } = e.vnode, i = _a(e);
  Mc(e, s, i, t), kc(e, o, n || t);
  const l = i ? Gc(e, t) : void 0;
  return t && Do(!1), l;
}
function Gc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, dc);
  const { setup: s } = n;
  if (s) {
    vt();
    const o = e.setupContext = s.length > 1 ? Kc(e) : null, i = ss(e), l = es(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), a = cl(l);
    if (yt(), i(), (a || e.sp) && !gn(e) && Zo(e), a) {
      if (l.then(Ii, Ii), t)
        return l.then((r) => {
          Ai(e, r);
        }).catch((r) => {
          ts(r, e, 0);
        });
      e.asyncDep = l;
    } else
      Ai(e, l);
  } else
    ba(e);
}
function Ai(e, t, n) {
  ue(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : be(t) && (e.setupState = Tl(t)), ba(e);
}
function ba(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || gt);
  {
    const o = ss(e);
    vt();
    try {
      fc(e);
    } finally {
      yt(), o();
    }
  }
}
const zc = {
  get(e, t) {
    return Be(e, "get", ""), e[t];
  }
};
function Kc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, zc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Xs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Tl(Jo(e.exposed)), {
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
function qc(e, t = !0) {
  return ue(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Xc(e) {
  return ue(e) && "__vccOpts" in e;
}
const q = (e, t) => /* @__PURE__ */ Tr(e, t, vn);
function va(e, t, n) {
  try {
    Fs(-1);
    const s = arguments.length;
    return s === 2 ? be(t) && !oe(t) ? Yn(t) ? Y(e, null, [t]) : Y(e, t) : Y(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Yn(n) && (n = [n]), Y(e, t, n));
  } finally {
    Fs(1);
  }
}
const Yc = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Eo;
const ki = typeof window < "u" && window.trustedTypes;
if (ki)
  try {
    Eo = /* @__PURE__ */ ki.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ya = Eo ? (e) => Eo.createHTML(e) : (e) => e, Jc = "http://www.w3.org/2000/svg", Qc = "http://www.w3.org/1998/Math/MathML", Ft = typeof document < "u" ? document : null, Di = Ft && /* @__PURE__ */ Ft.createElement("template"), Zc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? Ft.createElementNS(Jc, e) : t === "mathml" ? Ft.createElementNS(Qc, e) : n ? Ft.createElement(e, { is: n }) : Ft.createElement(e);
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
      Di.innerHTML = ya(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Di.content;
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
}, Tt = "transition", Ln = "animation", Jn = /* @__PURE__ */ Symbol("_vtc"), wa = {
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
}, eu = /* @__PURE__ */ Te(
  {},
  Gl,
  wa
), tu = (e) => (e.displayName = "Transition", e.props = eu, e), nu = /* @__PURE__ */ tu(
  (e, { slots: t }) => va(Xr, su(e), t)
), qt = (e, t = []) => {
  oe(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ei = (e) => e ? oe(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function su(e) {
  const t = {};
  for (const A in e)
    A in wa || (t[A] = e[A]);
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
  } = e, m = ou(o), _ = m && m[0], x = m && m[1], {
    onBeforeEnter: y,
    onEnter: w,
    onEnterCancelled: D,
    onLeave: v,
    onLeaveCancelled: S,
    onBeforeAppear: E = y,
    onAppear: T = w,
    onAppearCancelled: O = D
  } = t, I = (A, N, Q, H) => {
    A._enterCancelled = H, Xt(A, N ? c : a), Xt(A, N ? u : l), Q && Q();
  }, z = (A, N) => {
    A._isLeaving = !1, Xt(A, d), Xt(A, p), Xt(A, f), N && N();
  }, R = (A) => (N, Q) => {
    const H = A ? T : w, W = () => I(N, A, Q);
    qt(H, [N, W]), Ti(() => {
      Xt(N, A ? r : i), Ct(N, A ? c : a), Ei(H) || Ri(N, s, _, W);
    });
  };
  return Te(t, {
    onBeforeEnter(A) {
      qt(y, [A]), Ct(A, i), Ct(A, l);
    },
    onBeforeAppear(A) {
      qt(E, [A]), Ct(A, r), Ct(A, u);
    },
    onEnter: R(!1),
    onAppear: R(!0),
    onLeave(A, N) {
      A._isLeaving = !0;
      const Q = () => z(A, N);
      Ct(A, d), A._enterCancelled ? (Ct(A, f), Oi(A)) : (Oi(A), Ct(A, f)), Ti(() => {
        A._isLeaving && (Xt(A, d), Ct(A, p), Ei(v) || Ri(A, s, x, Q));
      }), qt(v, [A, Q]);
    },
    onEnterCancelled(A) {
      I(A, !1, void 0, !0), qt(D, [A]);
    },
    onAppearCancelled(A) {
      I(A, !0, void 0, !0), qt(O, [A]);
    },
    onLeaveCancelled(A) {
      z(A), qt(S, [A]);
    }
  });
}
function ou(e) {
  if (e == null)
    return null;
  if (be(e))
    return [co(e.enter), co(e.leave)];
  {
    const t = co(e);
    return [t, t];
  }
}
function co(e) {
  return Ya(e);
}
function Ct(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Jn] || (e[Jn] = /* @__PURE__ */ new Set())).add(t);
}
function Xt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Jn];
  n && (n.delete(t), n.size || (e[Jn] = void 0));
}
function Ti(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let iu = 0;
function Ri(e, t, n, s) {
  const o = e._endId = ++iu, i = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: l, timeout: a, propCount: r } = lu(e, t);
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
function lu(e, t) {
  const n = window.getComputedStyle(e), s = (m) => (n[m] || "").split(", "), o = s(`${Tt}Delay`), i = s(`${Tt}Duration`), l = Pi(o, i), a = s(`${Ln}Delay`), r = s(`${Ln}Duration`), u = Pi(a, r);
  let c = null, d = 0, f = 0;
  t === Tt ? l > 0 && (c = Tt, d = l, f = i.length) : t === Ln ? u > 0 && (c = Ln, d = u, f = r.length) : (d = Math.max(l, u), c = d > 0 ? l > u ? Tt : Ln : null, f = c ? c === Tt ? i.length : r.length : 0);
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
function Pi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Ni(n) + Ni(e[s])));
}
function Ni(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Oi(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function au(e, t, n) {
  const s = e[Jn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Is = /* @__PURE__ */ Symbol("_vod"), Sa = /* @__PURE__ */ Symbol("_vsh"), As = {
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
  e.style.display = t ? e[Is] : "none", e[Sa] = !t;
}
const ru = /* @__PURE__ */ Symbol(""), cu = /(?:^|;)\s*display\s*:/;
function uu(e, t, n) {
  const s = e.style, o = Le(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (Le(t))
        for (const l of t.split(";")) {
          const a = l.slice(0, l.indexOf(":")).trim();
          n[a] == null && Dn(s, a, "");
        }
      else
        for (const l in t)
          n[l] == null && Dn(s, l, "");
    for (const l in n) {
      l === "display" && (i = !0);
      const a = n[l];
      a != null ? fu(
        e,
        l,
        !Le(t) && t ? t[l] : void 0,
        a
      ) || Dn(s, l, a) : Dn(s, l, "");
    }
  } else if (o) {
    if (t !== n) {
      const l = s[ru];
      l && (n += ";" + l), s.cssText = n, i = cu.test(n);
    }
  } else t && e.removeAttribute("style");
  Is in e && (e[Is] = i ? s.display : "", e[Sa] && (s.display = "none"));
}
const $i = /\s*!important$/;
function Dn(e, t, n) {
  if (oe(n))
    n.forEach((s) => Dn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = du(e, t);
    $i.test(n) ? e.setProperty(
      Bt(s),
      n.replace($i, ""),
      "important"
    ) : e[s] = n;
  }
}
const Vi = ["Webkit", "Moz", "ms"], uo = {};
function du(e, t) {
  const n = uo[t];
  if (n)
    return n;
  let s = ze(t);
  if (s !== "filter" && s in e)
    return uo[t] = s;
  s = Vs(s);
  for (let o = 0; o < Vi.length; o++) {
    const i = Vi[o] + s;
    if (i in e)
      return uo[t] = i;
  }
  return t;
}
function fu(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Le(s) && n === s;
}
const Bi = "http://www.w3.org/1999/xlink";
function Hi(e, t, n, s, o, i = nr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Bi, t.slice(6, t.length)) : e.setAttributeNS(Bi, t, n) : n == null || i && !pl(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ze(n) ? String(n) : n
  );
}
function Ui(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ya(n) : n);
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
    a === "boolean" ? n = pl(n) : n == null && a === "string" ? (n = "", l = !0) : a === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(o || t);
}
function en(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function pu(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const ji = /* @__PURE__ */ Symbol("_vei");
function mu(e, t, n, s, o = null) {
  const i = e[ji] || (e[ji] = {}), l = i[t];
  if (s && l)
    l.value = s;
  else {
    const [a, r] = _u(t);
    if (s) {
      const u = i[t] = yu(
        s,
        o
      );
      en(e, a, u, r);
    } else l && (pu(e, a, l, r), i[t] = void 0);
  }
}
const hu = /(Once|Passive|Capture)$/, gu = /^on:?(?:Once|Passive|Capture)$/;
function _u(e) {
  let t, n;
  for (; (n = e.match(hu)) && !gu.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Bt(e.slice(2)), t];
}
let fo = 0;
const bu = /* @__PURE__ */ Promise.resolve(), vu = () => fo || (bu.then(() => fo = 0), fo = Date.now());
function yu(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const o = n.value;
    if (oe(o)) {
      const i = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        i.call(s), s._stopped = !0;
      };
      const l = o.slice(), a = [s];
      for (let r = 0; r < l.length && !s._stopped; r++) {
        const u = l[r];
        u && st(
          u,
          t,
          5,
          a
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
  return n.value = e, n.attached = vu(), n;
}
const Wi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, wu = (e, t, n, s, o, i) => {
  const l = o === "svg";
  t === "class" ? au(e, s, l) : t === "style" ? uu(e, n, s) : Rs(t) ? Ps(t) || mu(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Su(e, t, s, l)) ? (Ui(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Hi(e, t, s, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (xu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Le(s))) ? Ui(e, ze(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Hi(e, t, s, l));
};
function Su(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Wi(t) && ue(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Wi(t) && Le(n) ? !1 : t in e;
}
function xu(e, t) {
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
  return oe(t) ? (n) => ms(t, n) : t;
};
function Cu(e) {
  e.target.composing = !0;
}
function Gi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const _n = /* @__PURE__ */ Symbol("_assign");
function zi(e, t, n) {
  return t && (e = e.trim()), n && (e = Bs(e)), e;
}
const bt = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[_n] = ks(o);
    const i = s || o.props && o.props.type === "number";
    en(e, t ? "change" : "input", (l) => {
      l.target.composing || e[_n](zi(e.value, n, i));
    }), (n || i) && en(e, "change", () => {
      e.value = zi(e.value, n, i);
    }), t || (en(e, "compositionstart", Cu), en(e, "compositionend", Gi), en(e, "change", Gi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: i } }, l) {
    if (e[_n] = ks(l), e.composing) return;
    const a = (i || e.type === "number") && !/^0\d/.test(e.value) ? Bs(e.value) : e.value, r = t ?? "";
    if (a === r)
      return;
    const u = e.getRootNode();
    (u instanceof Document || u instanceof ShadowRoot) && u.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === r) || (e.value = r);
  }
}, Fu = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = Ns(t);
    en(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? Bs(Ds(l)) : Ds(l)
      );
      e[_n](
        e.multiple ? o ? new Set(i) : i : i[0]
      ), e._assigning = !0, Sn(() => {
        e._assigning = !1;
      });
    }), e[_n] = ks(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ki(e, t);
  },
  beforeUpdate(e, t, n) {
    e[_n] = ks(n);
  },
  updated(e, { value: t }) {
    e._assigning || Ki(e, t);
  }
};
function Ki(e, t) {
  const n = e.multiple, s = oe(t);
  if (!(n && !s && !Ns(t))) {
    for (let o = 0, i = e.options.length; o < i; o++) {
      const l = e.options[o], a = Ds(l);
      if (n)
        if (s) {
          const r = typeof a;
          r === "string" || r === "number" ? l.selected = t.some((u) => String(u) === String(a)) : l.selected = or(t, a) > -1;
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
const Mu = ["ctrl", "shift", "alt", "meta"], Lu = {
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
  exact: (e, t) => Mu.some((n) => e[`${n}Key`] && !t.includes(n))
}, Es = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...i) => {
    for (let l = 0; l < t.length; l++) {
      const a = Lu[t[l]];
      if (a && a(o, t)) return;
    }
    return e(o, ...i);
  });
}, Iu = {
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
      (l) => l === i || Iu[l] === i
    ))
      return e(o);
  });
}, Au = /* @__PURE__ */ Te({ patchProp: wu }, Zc);
let qi;
function xa() {
  return qi || (qi = Ec(Au));
}
const Xi = (...e) => {
  xa().render(...e);
}, Ys = (...e) => {
  const t = xa().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = Du(s);
    if (!o) return;
    const i = t._component;
    !ue(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const l = n(o, !1, ku(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), l;
  }, t;
};
function ku(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Du(e) {
  return Le(e) ? document.querySelector(e) : e;
}
const Js = {
  accent: "#f08a45",
  accentInk: "#fff",
  panel: "#171b22",
  panelAlt: "#222934",
  text: "#e8edf3",
  muted: "#9ca8b5",
  danger: "#ef6666",
  ok: "#62c987"
}, Eu = {
  accent: "#c9682c",
  accentInk: "#fff",
  panel: "#eef1f5",
  panelAlt: "#e2e6ec",
  text: "#1c2430",
  muted: "#5b6572",
  danger: "#c94b4b",
  ok: "#3f8f5f"
}, Tu = {
  accent: "#00e5ff",
  accentInk: "#fff",
  panel: "#0a0e1a",
  panelAlt: "#131a2e",
  text: "#dff9ff",
  muted: "#5f7d94",
  danger: "#ff2e63",
  ok: "#00ff9f"
}, Ru = {
  accent: "#d4a017",
  accentInk: "#fff",
  panel: "#1a1712",
  panelAlt: "#26221a",
  text: "#e8dcc0",
  muted: "#8a7d5f",
  danger: "#9a3324",
  ok: "#8fbf3f"
}, Pu = {
  accent: "#d5ff40",
  accentInk: "#14150f",
  panel: "#181916",
  panelAlt: "#232620",
  text: "#edf2e2",
  muted: "#8b9483",
  danger: "#ff5c72",
  ok: "#3ed98c"
}, Nu = {
  default: Js,
  cyberpunk: Tu,
  fallout: Ru,
  travelmate: Pu
}, It = { ...Js };
let Bn = null, Hn = null;
function To(e) {
  return `--fil-accent:${e.accent};--fil-accent-ink:${e.accentInk};--fil-panel:${e.panel};--fil-panel-alt:${e.panelAlt};--fil-text:${e.text};--fil-muted:${e.muted};--fil-danger:${e.danger};--fil-ok:${e.ok};`;
}
const Ou = {
  default: "",
  cyberpunk: `
[data-fil-theme="cyberpunk"] .comfy-node-header{box-shadow:0 0 12px var(--fil-accent);}
[data-fil-theme="cyberpunk"] .fil-w-seg.active,
[data-fil-theme="cyberpunk"] .fil-combo-trigger.open,
[data-fil-theme="cyberpunk"] .fil-combo-trigger:focus-visible{box-shadow:0 0 6px var(--fil-accent),0 0 14px var(--fil-accent);}
[data-fil-theme="cyberpunk"] .fil-node-shell [class$="-root"]{border:1px solid rgba(0,229,255,0.18);}
`,
  fallout: `
[data-fil-theme="fallout"] .fil-node-shell [class$="-root"]{
  background-image:repeating-linear-gradient(0deg,rgba(0,0,0,0.12) 0px,rgba(0,0,0,0.12) 1px,transparent 1px,transparent 3px);
  border:1px solid rgba(212,160,23,0.2);
}
[data-fil-theme="fallout"] .comfy-node-header{text-shadow:0 0 4px rgba(212,160,23,0.55);}
`,
  travelmate: `
[data-fil-theme="travelmate"] .fil-node-shell [class$="-root"]{border:none;box-shadow:none;}
[data-fil-theme="travelmate"] .fil-w-seg.active,
[data-fil-theme="travelmate"] .fil-combo-trigger.open,
[data-fil-theme="travelmate"] .fil-combo-trigger:focus-visible{box-shadow:0 0 6px var(--fil-accent),0 0 14px var(--fil-accent);}
`
}, $u = "--fil-surface-bg:rgba(100,180,220,0.06);--fil-surface-border:rgba(0,255,255,0.18);--fil-surface-radius:20px;--fil-surface-blur:10px;--fil-surface-shadow:0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08);--fil-glass-bg:rgba(50,80,120,0.18);--fil-glass-border:rgba(0,150,200,0.35);--fil-field-radius:10px;--fil-pill-radius:17px;--fil-pill-bg:rgba(255,255,255,0.06);--fil-pill-border:rgba(0,150,200,0.4);", Vu = "--fil-surface-bg:rgba(70,130,170,0.08);--fil-surface-border:rgba(40,120,160,0.28);--fil-surface-radius:20px;--fil-surface-blur:10px;--fil-surface-shadow:0 8px 24px rgba(40,60,90,0.18), inset 0 1px 0 rgba(255,255,255,0.5);--fil-glass-bg:rgba(120,160,200,0.16);--fil-glass-border:rgba(40,120,160,0.3);--fil-field-radius:10px;--fil-pill-radius:17px;--fil-pill-bg:rgba(30,60,90,0.06);--fil-pill-border:rgba(40,120,160,0.35);";
function Bu() {
  if (typeof document > "u" || document.getElementById("fil-brand-vars")) return;
  const e = document.createElement("style");
  e.id = "fil-brand-vars", e.textContent = `:root{${To(Js)}--fil-radius:8px;--fil-node-pad:3px;--fil-node-gap:4px;--fil-row-pad:4px 6px;--fil-input-border:rgba(240,138,69,0.35);${$u}}
.comfy-theme-light{${To(Eu)}--fil-input-border:rgba(201,104,44,0.35);${Vu}}
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
function Ca(e) {
  const t = Nu[e] ?? Js;
  Object.assign(It, t), !(typeof document > "u") && (document.documentElement.dataset.filTheme = e, Bn && (Bn.textContent = e === "default" ? "" : `:root{${To(t)}}`), Hn && (Hn.textContent = Ou[e] ?? ""));
}
const Hu = {
  class: "fil-color-picker",
  role: "group",
  "aria-label": "Color picker"
}, Uu = { class: "fil-cp-hex-row" }, ju = {
  class: "fil-cp-presets",
  role: "listbox",
  "aria-label": "Preset colors"
}, Wu = ["aria-selected", "aria-label", "title", "onClick"], Gu = /* @__PURE__ */ Ce({
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
    ], s = e, o = t, i = q(() => s.presets ?? n);
    function l(N) {
      o("update:modelValue", N);
    }
    function a(N) {
      return Math.min(1, Math.max(0, N));
    }
    function r(N) {
      const Q = /^#?([0-9a-f]{6})$/i.exec(N.trim());
      if (!Q) return null;
      const H = parseInt(Q[1], 16);
      return [H >> 16 & 255, H >> 8 & 255, H & 255];
    }
    function u(N, Q, H) {
      const W = (F) => Math.round(a(F / 255) * 255).toString(16).padStart(2, "0");
      return `#${W(N)}${W(Q)}${W(H)}`;
    }
    function c(N, Q, H) {
      const W = N / 255, F = Q / 255, C = H / 255, M = Math.max(W, F, C), Z = Math.min(W, F, C), te = M - Z;
      let _e = 0;
      te !== 0 && (M === W ? _e = (F - C) / te % 6 : M === F ? _e = (C - W) / te + 2 : _e = (W - F) / te + 4, _e *= 60, _e < 0 && (_e += 360));
      const et = M === 0 ? 0 : te / M;
      return [_e, et, M];
    }
    function d(N, Q, H) {
      const W = H * Q, F = W * (1 - Math.abs(N / 60 % 2 - 1)), C = H - W;
      let [M, Z, te] = [0, 0, 0];
      return N < 60 ? [M, Z, te] = [W, F, 0] : N < 120 ? [M, Z, te] = [F, W, 0] : N < 180 ? [M, Z, te] = [0, W, F] : N < 240 ? [M, Z, te] = [0, F, W] : N < 300 ? [M, Z, te] = [F, 0, W] : [M, Z, te] = [W, 0, F], [(M + C) * 255, (Z + C) * 255, (te + C) * 255];
    }
    const f = /* @__PURE__ */ ae(0), p = /* @__PURE__ */ ae(0), m = /* @__PURE__ */ ae(0), _ = /* @__PURE__ */ ae(s.modelValue);
    function x(N) {
      const Q = r(N);
      if (!Q) return;
      const [H, W, F] = c(...Q);
      f.value = H, p.value = W, m.value = F, _.value = u(...Q);
    }
    $e(() => s.modelValue, (N) => x(N), { immediate: !0 });
    const y = q(() => u(...d(f.value, p.value, m.value)));
    function w() {
      o("update:modelValue", y.value), _.value = y.value;
    }
    function D() {
      const N = r(_.value);
      if (!N) {
        _.value = y.value;
        return;
      }
      const [Q, H, W] = c(...N);
      f.value = Q, p.value = H, m.value = W, o("update:modelValue", u(...N));
    }
    const v = /* @__PURE__ */ ae(null), S = /* @__PURE__ */ ae(null);
    function E(N) {
      const Q = v.value;
      if (!Q) return;
      const H = Q.getBoundingClientRect();
      p.value = a((N.clientX - H.left) / H.width), m.value = a(1 - (N.clientY - H.top) / H.height), w();
    }
    function T(N) {
      const Q = S.value;
      if (!Q) return;
      const H = Q.getBoundingClientRect();
      f.value = a((N.clientX - H.left) / H.width) * 360, w();
    }
    function O(N) {
      N.preventDefault(), E(N);
      const Q = (W) => E(W), H = () => {
        window.removeEventListener("pointermove", Q), window.removeEventListener("pointerup", H);
      };
      window.addEventListener("pointermove", Q), window.addEventListener("pointerup", H);
    }
    function I(N) {
      N.preventDefault(), T(N);
      const Q = (W) => T(W), H = () => {
        window.removeEventListener("pointermove", Q), window.removeEventListener("pointerup", H);
      };
      window.addEventListener("pointermove", Q), window.addEventListener("pointerup", H);
    }
    const z = q(() => `hsl(${f.value}, 100%, 50%)`), R = q(() => ({
      left: `${p.value * 100}%`,
      top: `${(1 - m.value) * 100}%`
    })), A = q(() => ({ left: `${f.value / 360 * 100}%` }));
    return (N, Q) => (L(), P("div", Hu, [
      U("div", {
        ref_key: "svRef",
        ref: v,
        class: "fil-cp-sv",
        style: Ge({ background: z.value }),
        onPointerdown: O
      }, [
        Q[1] || (Q[1] = U("div", { class: "fil-cp-sv-white" }, null, -1)),
        Q[2] || (Q[2] = U("div", { class: "fil-cp-sv-black" }, null, -1)),
        U("div", {
          class: "fil-cp-sv-thumb",
          style: Ge(R.value)
        }, null, 4)
      ], 36),
      U("div", {
        ref_key: "hueRef",
        ref: S,
        class: "fil-cp-hue",
        onPointerdown: I
      }, [
        U("div", {
          class: "fil-cp-hue-thumb",
          style: Ge(A.value)
        }, null, 4)
      ], 544),
      U("div", Uu, [
        U("span", {
          class: "fil-cp-swatch",
          style: Ge({ background: y.value })
        }, null, 4),
        Ke(U("input", {
          "onUpdate:modelValue": Q[0] || (Q[0] = (H) => _.value = H),
          class: "fil-cp-hex-input",
          type: "text",
          spellcheck: "false",
          "aria-label": "Hex color",
          onKeydown: gs(D, ["enter"]),
          onBlur: D
        }, null, 544), [
          [bt, _.value]
        ])
      ]),
      U("div", ju, [
        (L(!0), P(fe, null, Ae(i.value, (H) => (L(), P("button", {
          key: H,
          class: ge(["fil-color-swatch", { "is-active": e.modelValue === H }]),
          style: Ge({ "--swatch": H }),
          "aria-selected": e.modelValue === H,
          "aria-label": H,
          title: H,
          onClick: (W) => l(H)
        }, null, 14, Wu))), 128))
      ])
    ]));
  }
}), Me = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, zu = /* @__PURE__ */ Me(Gu, [["__scopeId", "data-v-c4d5f476"]]), Yi = "__fil_color_picker_popup__";
function Ku(e) {
  return [
    {
      content: "Change color…",
      callback: (t, n, s) => qu(e, s)
    }
  ];
}
function qu(e, t) {
  const n = document.getElementById(Yi);
  n && n.remove();
  const s = document.createElement("div");
  s.id = Yi;
  const o = 176, i = 260, l = t ? Math.min(t.clientX, window.innerWidth - o - 8) : window.innerWidth / 2 - o / 2, a = t ? Math.min(t.clientY, window.innerHeight - i - 8) : window.innerHeight / 2 - i / 2;
  s.style.cssText = `position:fixed;z-index:10001;top:${Math.max(8, a)}px;left:${Math.max(8, l)}px;`, document.body.appendChild(s);
  function r(p) {
    e.color = p, e.__fx && (e.__fx.color = p), e.properties = e.properties || {}, e.properties.fil_custom_color = !0, u();
  }
  function u() {
    Xi(null, s), s.remove(), document.removeEventListener("mousedown", c, !0), document.removeEventListener("keydown", d, !0);
  }
  function c(p) {
    s.contains(p.target) || u();
  }
  function d(p) {
    p.key === "Escape" && u();
  }
  const f = va(zu, {
    modelValue: e.color ?? "#78716c",
    "onUpdate:modelValue": (p) => r(p)
  });
  Xi(f, s), document.addEventListener("mousedown", c, !0), document.addEventListener("keydown", d, !0), Sn(() => {
    var p;
    (p = s.querySelector(".fil-color-swatch")) == null || p.focus();
  });
}
const Xu = "fil";
function wt(e, t = {}) {
  const s = e.prototype;
  if (s._filStyled) return;
  s._filStyled = !0, t.minSize && (s.minSize = t.minSize), s._filFamily = t.family ?? Xu, s._filDescription = t.description ?? "", t.badges && (s.badges = t.badges), s.color = It.accent, s.bgcolor = It.panelAlt;
  const o = s.onNodeCreated;
  s.onNodeCreated = function(...l) {
    const a = o == null ? void 0 : o.apply(this, l);
    return this.color = It.accent, this.bgcolor = It.panelAlt, a;
  }, s.onDrawTitleBar = function(l, a, r, u, c) {
    var m;
    const d = ((m = globalThis.LiteGraph) == null ? void 0 : m.ROUND_RADIUS) ?? 8, f = !!this.collapsed;
    l.fillStyle = It.panel, l.beginPath(), l.roundRect(0, -a, r[0], a, f ? [d] : [d, d, 0, 0]), l.fill();
    const p = 3;
    l.fillStyle = c || It.accent, l.beginPath(), l.roundRect(0, -a, p, a, f ? [d, 0, 0, d] : [d, 0, 0, 0]), l.fill();
  };
  const i = s.getExtraMenuOptions;
  s.getExtraMenuOptions = function(...l) {
    const a = i == null ? void 0 : i.apply(this, l), r = l[1];
    return Array.isArray(r) && r.push(null, ...Ku(this)), a;
  };
}
function Yu(e) {
  var s, o, i;
  const t = (s = e.graph) == null ? void 0 : s._nodes;
  if (!t) return;
  for (const l of t)
    l._filFamily && ((o = l.properties) != null && o.fil_custom_color || (l.color = It.accent, l.bgcolor = It.panelAlt));
  const n = e.canvas;
  (i = n == null ? void 0 : n.setDirty) == null || i.call(n, !0, !0);
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Fa;
const Qs = (e) => Fa = e, Ma = (
  /* istanbul ignore next */
  Symbol()
);
function Ro(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Un;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Un || (Un = {}));
function La() {
  const e = _l(!0), t = e.run(() => /* @__PURE__ */ ae({}));
  let n = [], s = [];
  const o = Jo({
    install(i) {
      Qs(o), o._a = i, i.provide(Ma, o), i.config.globalProperties.$pinia = o, s.forEach((l) => n.push(l)), s = [];
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
const Ia = () => {
};
function Ji(e, t, n, s = Ia) {
  e.push(t);
  const o = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), s());
  };
  return !n && bl() && ir(o), o;
}
function dn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Ju = (e) => e(), Qi = Symbol(), po = Symbol();
function Po(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], o = e[n];
    Ro(o) && Ro(s) && e.hasOwnProperty(n) && !/* @__PURE__ */ ye(s) && !/* @__PURE__ */ _t(s) ? e[n] = Po(o, s) : e[n] = s;
  }
  return e;
}
const Qu = (
  /* istanbul ignore next */
  Symbol()
);
function Zu(e) {
  return !Ro(e) || !e.hasOwnProperty(Qu);
}
const { assign: Pt } = Object;
function ed(e) {
  return !!(/* @__PURE__ */ ye(e) && e.effect);
}
function td(e, t, n, s) {
  const { state: o, actions: i, getters: l } = t, a = n.state.value[e];
  let r;
  function u() {
    a || (n.state.value[e] = o ? o() : {});
    const c = /* @__PURE__ */ Ir(n.state.value[e]);
    return Pt(c, i, Object.keys(l || {}).reduce((d, f) => (d[f] = Jo(q(() => {
      Qs(n);
      const p = n._s.get(e);
      return l[f].call(p, p);
    })), d), {}));
  }
  return r = Aa(e, u, t, n, s, !0), r;
}
function Aa(e, t, n = {}, s, o, i) {
  let l;
  const a = Pt({ actions: {} }, n), r = { deep: !0 };
  let u, c, d = [], f = [], p;
  const m = s.state.value[e];
  !i && !m && (s.state.value[e] = {});
  let _;
  function x(O) {
    let I;
    u = c = !1, typeof O == "function" ? (O(s.state.value[e]), I = {
      type: Un.patchFunction,
      storeId: e,
      events: p
    }) : (Po(s.state.value[e], O), I = {
      type: Un.patchObject,
      payload: O,
      storeId: e,
      events: p
    });
    const z = _ = Symbol();
    Sn().then(() => {
      _ === z && (u = !0);
    }), c = !0, dn(d, I, s.state.value[e]);
  }
  const y = i ? function() {
    const { state: I } = n, z = I ? I() : {};
    this.$patch((R) => {
      Pt(R, z);
    });
  } : (
    /* istanbul ignore next */
    Ia
  );
  function w() {
    l.stop(), d = [], f = [], s._s.delete(e);
  }
  const D = (O, I = "") => {
    if (Qi in O)
      return O[po] = I, O;
    const z = function() {
      Qs(s);
      const R = Array.from(arguments), A = [], N = [];
      function Q(F) {
        A.push(F);
      }
      function H(F) {
        N.push(F);
      }
      dn(f, {
        args: R,
        name: z[po],
        store: S,
        after: Q,
        onError: H
      });
      let W;
      try {
        W = O.apply(this && this.$id === e ? this : S, R);
      } catch (F) {
        throw dn(N, F), F;
      }
      return W instanceof Promise ? W.then((F) => (dn(A, F), F)).catch((F) => (dn(N, F), Promise.reject(F))) : (dn(A, W), W);
    };
    return z[Qi] = !0, z[po] = I, z;
  }, v = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Ji.bind(null, f),
    $patch: x,
    $reset: y,
    $subscribe(O, I = {}) {
      const z = Ji(d, O, I.detached, () => R()), R = l.run(() => $e(() => s.state.value[e], (A) => {
        (I.flush === "sync" ? c : u) && O({
          storeId: e,
          type: Un.direct,
          events: p
        }, A);
      }, Pt({}, r, I)));
      return z;
    },
    $dispose: w
  }, S = /* @__PURE__ */ an(v);
  s._s.set(e, S);
  const T = (s._a && s._a.runWithContext || Ju)(() => s._e.run(() => (l = _l()).run(() => t({ action: D }))));
  for (const O in T) {
    const I = T[O];
    if (/* @__PURE__ */ ye(I) && !ed(I) || /* @__PURE__ */ _t(I))
      i || (m && Zu(I) && (/* @__PURE__ */ ye(I) ? I.value = m[O] : Po(I, m[O])), s.state.value[e][O] = I);
    else if (typeof I == "function") {
      const z = D(I, O);
      T[O] = z, a.actions[O] = I;
    }
  }
  return Pt(S, T), Pt(/* @__PURE__ */ me(S), T), Object.defineProperty(S, "$state", {
    get: () => s.state.value[e],
    set: (O) => {
      x((I) => {
        Pt(I, O);
      });
    }
  }), s._p.forEach((O) => {
    Pt(S, l.run(() => O({
      store: S,
      app: s._a,
      pinia: s,
      options: a
    })));
  }), m && i && n.hydrate && n.hydrate(S.$state, m), u = !0, c = !0, S;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function oi(e, t, n) {
  let s, o;
  const i = typeof t == "function";
  typeof e == "string" ? (s = e, o = i ? n : t) : (o = e, s = e.id);
  function l(a, r) {
    const u = Br();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (u ? Nn(Ma, null) : null), a && Qs(a), a = Fa, a._s.has(s) || (i ? Aa(s, t, o, a) : td(s, o, a)), a._s.get(s);
  }
  return l.$id = s, l;
}
function nd(e) {
  {
    const t = /* @__PURE__ */ me(e), n = {};
    for (const s in t) {
      const o = t[s];
      o.effect ? n[s] = // ...
      q({
        get: () => e[s],
        set(i) {
          e[s] = i;
        }
      }) : (/* @__PURE__ */ ye(o) || /* @__PURE__ */ _t(o)) && (n[s] = // ---
      /* @__PURE__ */ Dr(e, s));
    }
    return n;
  }
}
let tn = null;
function sd(e) {
  return tn || (tn = La(), tn);
}
function Zs() {
  return tn || (tn = La()), tn;
}
const od = { class: "fil-node-shell" }, id = /* @__PURE__ */ Ce({
  __name: "FilNodeShell",
  props: {
    root: {},
    state: {},
    comfyClass: {}
  },
  setup(e) {
    return (t, n) => (L(), P("div", od, [
      (L(), Ie(rc(e.root), { state: e.state }, null, 8, ["state"]))
    ]));
  }
}), ld = /* @__PURE__ */ Me(id, [["__scopeId", "data-v-15f48dad"]]);
function No(e, t, n) {
  const s = Math.abs(n) >= Math.abs(t), o = getComputedStyle(e);
  if (s) {
    const i = o.overflowY;
    if ((i === "auto" || i === "scroll") && e.scrollHeight > e.clientHeight + 1) {
      const l = e.scrollTop <= 0, a = e.scrollTop + e.clientHeight >= e.scrollHeight - 1;
      if (n < 0 && !l || n > 0 && !a) return !0;
    }
  } else {
    const i = o.overflowX;
    if ((i === "auto" || i === "scroll") && e.scrollWidth > e.clientWidth + 1) {
      const l = e.scrollLeft <= 0, a = e.scrollLeft + e.clientWidth >= e.scrollWidth - 1;
      if (t < 0 && !l || t > 0 && !a) return !0;
    }
  }
  return !1;
}
function ka(e, t, n, s = null) {
  let o = e instanceof Element ? e : null;
  for (; o && o !== s; ) {
    if (No(o, t, n)) return !0;
    o = o.parentElement;
  }
  return !1;
}
function ad(e, t, n, s) {
  const o = (i) => {
    const l = i.getBoundingClientRect();
    return l.width > 0 && l.height > 0 && e >= l.left && e <= l.right && t >= l.top && t <= l.bottom;
  };
  for (const i of document.querySelectorAll(".dom-widget"))
    if (o(i)) {
      if (No(i, n, s)) return i;
      for (const l of i.querySelectorAll("*"))
        if (o(l) && No(l, n, s)) return l;
    }
  return null;
}
const rd = "__filVueMounted";
function Ut(e, t, n, s) {
  const o = e;
  if (typeof o.addDOMWidget != "function")
    return console.warn(`[FiL_Design_ImageMind] domWidgetHost: node.addDOMWidget not available for "${t}" — ComfyUI core too old?`), null;
  const i = document.createElement("div");
  i.className = "fil-vue-host", i.style.width = "100%", i.style.boxSizing = "border-box", i.style.height = "auto", i[rd] = !0, i.addEventListener(
    "wheel",
    (w) => {
      var v, S;
      if (ka(w.target, w.deltaX, w.deltaY, i.parentElement)) return;
      const D = (S = (v = globalThis.app) == null ? void 0 : v.canvas) == null ? void 0 : S.canvas;
      D instanceof HTMLCanvasElement && (w.preventDefault(), D.dispatchEvent(new WheelEvent("wheel", {
        deltaX: w.deltaX,
        deltaY: w.deltaY,
        deltaZ: w.deltaZ,
        deltaMode: w.deltaMode,
        clientX: w.clientX,
        clientY: w.clientY,
        bubbles: !0,
        cancelable: !0
      })));
    },
    { passive: !1 }
  );
  const l = /* @__PURE__ */ an(s.state);
  let a = s.height;
  const r = () => {
    const w = i.firstElementChild;
    return !w || w.clientHeight === 0 || (a = Math.ceil(w.scrollHeight / 4) * 4), a;
  }, u = o.addDOMWidget(t, "custom", i, {
    hideOnZoom: !0,
    getValue: () => l,
    setValue: (w) => {
      w && typeof w == "object" && Object.assign(l, w);
    },
    getHeight: r,
    ...s.onDraw ? { onDraw: s.onDraw } : {}
  }), c = Ys(ld, { root: n, state: l, comfyClass: o.comfyClass ?? "default" }).use(Zs());
  c.mount(i);
  function d() {
    var I, z;
    if (r(), !o.computeSize || !o.setSize || !o.size) return;
    const [w, D] = o.size, [, v] = o.computeSize(), [S, E] = o.minSize ?? [0, 0], T = Math.max(w, S), O = Math.max(v, E);
    T === w && Math.abs(O - D) < 2 || (o.setSize([T, O]), (z = (I = o.graph) == null ? void 0 : I.setDirtyCanvas) == null || z.call(I, !0, !0));
  }
  let f = 0;
  const p = new ResizeObserver(() => {
    f || (f = requestAnimationFrame(() => {
      f = 0, d();
    }));
  });
  p.observe(i);
  let m = 20;
  (function w() {
    d(), m-- > 0 && requestAnimationFrame(w);
  })();
  const _ = setInterval(d, 400), x = { widget: u, host: i, app: c, state: l, unmount: y };
  function y() {
    p.disconnect(), f && cancelAnimationFrame(f), clearInterval(_);
    try {
      this.app.unmount();
    } catch (w) {
      console.warn(`[FiL_Design_ImageMind] unmount failed for "${t}":`, w);
    }
    for (; this.host.firstChild; ) this.host.removeChild(this.host.firstChild);
  }
  return x.unmount = y.bind(x), o._filVueApps ?? (o._filVueApps = {}), o._filVueApps[t] = x, x;
}
function jt(e) {
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
function le(e, t) {
  const n = e;
  if (n.widgets)
    return n.widgets.find((s) => s.name === t);
}
function cn(e, t) {
  return new Proxy({ ...t }, {
    set(n, s, o) {
      n[s] = o;
      const i = le(e, String(s));
      return i && (i.value = o), !0;
    }
  });
}
function pe(e, t, n) {
  if (!e) return n;
  const s = e.value;
  return t === "number" && typeof s == "number" && Number.isFinite(s) || t === "boolean" && typeof s == "boolean" || t === "string" && typeof s == "string" ? s : (console.warn(
    `[FiL_Design_ImageMind] widget "${e.name}" had a corrupted value (expected ${t}) — resetting to default. This usually means the workflow was saved with an older version of this node.`
  ), e.value = n, n);
}
const Zi = 4, cd = {
  info: 3500,
  success: 3e3,
  warning: 5e3,
  error: 6e3
};
let ud = 1;
const Ot = /* @__PURE__ */ oi("fil/toast", () => {
  const e = /* @__PURE__ */ ae([]), t = /* @__PURE__ */ ae([]);
  function n(u, c, d = {}) {
    const f = {
      id: ud++,
      level: u,
      text: c == null ? "" : String(c),
      timeout: d.timeout ?? cd[u],
      sticky: !!d.sticky,
      action: d.action ?? null
    };
    return e.value.length < Zi ? e.value.push(f) : t.value.push(f), f;
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
    e.value = e.value.filter((c) => c.id !== u), t.value.length > 0 && e.value.length < Zi && e.value.push(t.value.shift());
  }
  function r() {
    e.value = [], t.value = [];
  }
  return { items: e, queue: t, info: s, success: o, warning: i, error: l, push: n, dismiss: a, dismissAll: r };
});
function dd() {
  var t, n;
  return ((n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.toast) ?? null;
}
function cs(e, t) {
  const n = dd();
  if (n != null && n.addAlert && (e === "info" || e === "success" || e === "warning" || e === "error"))
    try {
      n.addAlert(t);
      return;
    } catch (s) {
      console.warn("[FiL_Design_ImageMind toast] extensionManager.toast failed:", s);
    }
  Ot().push(e, t, {});
}
const Qe = {
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
}, fd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  toast: Qe,
  useToastStore: Ot
}, Symbol.toStringTag, { value: "Module" }));
function el() {
  var t, n, s, o, i, l, a, r;
  return !!(((o = (s = (n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.setting) == null ? void 0 : s.get) == null ? void 0 : o.call(s, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? ((r = (a = (l = (i = globalThis.app) == null ? void 0 : i.ui) == null ? void 0 : l.settings) == null ? void 0 : a.getSettingValue) == null ? void 0 : r.call(a, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? !0);
}
function tl() {
  function e(s, o, i, l) {
  }
  function t(s, o, i, l) {
    el() && Qe.success("Connected");
  }
  function n(s, o) {
    el() && Qe.info("Disconnected");
  }
  return { onConnectionsChange: e, onConnect: t, onDisconnect: n };
}
function St(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype, n = t.onNodeCreated;
  t.onNodeCreated = function(...i) {
    const l = n == null ? void 0 : n.apply(this, i);
    return this.color, l;
  };
  const s = t.onConnect;
  t.onConnect = function(...i) {
    const { onConnect: l } = tl();
    return l(...i), s == null ? void 0 : s.apply(this, i);
  };
  const o = t.onDisconnect;
  t.onDisconnect = function(...i) {
    const { onDisconnect: l } = tl();
    return l(...i), o == null ? void 0 : o.apply(this, i);
  };
}
const pd = /* @__PURE__ */ Ht(() => Promise.resolve().then(() => Nm)), md = {
  id: "FiLSeed",
  register(e, t) {
    wt(e, {
      minSize: [240, 90],
      family: "value",
      description: "Fixed or randomized seed with copy and reuse buttons.",
      badges: [{ text: "seed" }]
    });
    const s = e.prototype, o = s.onNodeCreated;
    s.onNodeCreated = function(...a) {
      const r = o == null ? void 0 : o.apply(this, a), u = this, c = le(u, "seed"), d = pe(c, "number", 0);
      c && (c.hidden = !0);
      const f = le(u, "control_after_generate");
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
      return u._filSeedState = p, Ut(u, "fil_seed_view", pd, { state: p, height: 52 }), r;
    };
    const i = s.onConfigure;
    s.onConfigure = function(...a) {
      const r = i == null ? void 0 : i.apply(this, a), u = this, c = u._filSeedState;
      return c && (c.nodeState.seed = pe(le(u, "seed"), "number", 0)), r;
    };
    const l = s.onRemoved;
    s.onRemoved = function(...a) {
      return jt(this), l == null ? void 0 : l.apply(this, a);
    }, St(e);
  }
}, hd = /* @__PURE__ */ Ht(() => Promise.resolve().then(() => zm)), gd = {
  id: "FiLProviderLoader",
  register(e, t) {
    wt(e, {
      // Height kept LOW on purpose — computeSize() (~350px real content)
      // always wins via Math.max in domWidgetHost.ts, so a buffer above it
      // here would just be dead space at the bottom. Width is the actual
      // reason this floor exists (computeSize()'s own width guess ignores it).
      minSize: [280, 250],
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
      const u = i == null ? void 0 : i.apply(this, r), c = this, d = pe(le(c, "provider"), "string", "ollama"), f = pe(le(c, "model"), "string", "(loading...)"), p = pe(le(c, "temperature"), "number", 0.7), m = pe(le(c, "max_tokens"), "number", 0), _ = pe(le(c, "rate_limit_ms"), "number", 100), x = pe(le(c, "max_image_side"), "number", 1024);
      for (const w of ["provider", "model", "refresh_models", "temperature", "max_tokens", "rate_limit_ms", "seed", "control_after_generate", "max_image_side"]) {
        const D = le(c, w);
        D && (D.hidden = !0);
      }
      const y = {
        nodeState: cn(c, {
          provider: d,
          model: f,
          temperature: p,
          max_tokens: m,
          rate_limit_ms: _,
          max_image_side: x
        }),
        initialValues: {
          provider: d,
          model: f,
          temperature: p,
          max_tokens: m,
          rate_limit_ms: _,
          max_image_side: x
        },
        ui: {}
      };
      return Object.defineProperty(y, "node", { value: c, enumerable: !1, configurable: !0 }), c._filProviderState = y, Ut(c, "fil_provider_view", hd, { state: y, height: 340 }), u;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...r) {
      const u = l == null ? void 0 : l.apply(this, r), c = this, d = c._filProviderState;
      if (!d) return u;
      const f = d.nodeState;
      for (const { name: p, kind: m, fallback: _ } of o)
        f[p] = pe(le(c, p), m, _);
      return u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...r) {
      return jt(this), a == null ? void 0 : a.apply(this, r);
    }, St(e);
  }
}, _d = /* @__PURE__ */ Ht(() => Promise.resolve().then(() => rh)), bd = {
  id: "FiLOpticScanner",
  register(e, t) {
    wt(e, {
      // Height kept LOW on purpose — computeSize() (~660px real content)
      // always wins via Math.max in domWidgetHost.ts, so a buffer above it
      // here would just be dead space at the bottom. Width is the actual
      // reason this floor exists (computeSize()'s own width guess ignores it).
      minSize: [380, 300],
      family: "llm",
      description: "Image analysis or text-idea expansion into a generation prompt.",
      badges: [{ text: "LLM", color: "#7c5cfc", text_color: "#fff" }]
    });
    const s = e.prototype, o = [
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
        const w = le(c, y);
        if (!w) continue;
        const D = pe(w, "string", "");
        d[y] = D, f[y] = D, w.hidden = !0;
      }
      const p = le(c, "seed"), m = le(c, "control_after_generate"), _ = pe(p, "number", -1);
      p && (p.hidden = !0), m && (m.hidden = !0), d.seed = _, f.seed = _, f.seed_mode = "random";
      const x = {
        nodeState: cn(c, f),
        initialValues: d,
        ui: {},
        lastRunSeed: null
      };
      return c._filScannerSeedState = x, Ut(c, "fil_scanner_view", _d, { state: x, height: 460 }), u;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...r) {
      const u = l == null ? void 0 : l.apply(this, r), c = this, d = c._filScannerSeedState;
      if (!d) return u;
      for (const f of o) {
        const p = le(c, f);
        p && (d.nodeState[f] = pe(p, "string", ""));
      }
      return d.nodeState.seed = pe(le(c, "seed"), "number", -1), u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...r) {
      return jt(this), a == null ? void 0 : a.apply(this, r);
    }, St(e);
  }
}, vd = /* @__PURE__ */ Ht(() => Promise.resolve().then(() => gh)), yd = {
  id: "FiLNeuroCleaner",
  register(e, t) {
    wt(e, {
      // Height kept LOW on purpose — computeSize() (~740px real content)
      // always wins via Math.max in domWidgetHost.ts (plus the polling
      // backstop added there, since this specific node's ResizeObserver was
      // observed to silently stop firing), so a buffer above it here would
      // just be dead space at the bottom. Width is the actual reason this
      // floor exists (computeSize()'s own width guess ignores it).
      minSize: [300, 300],
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
        const _ = le(c, m), x = pe(_, "boolean", o[m]);
        d[m] = x, f[m] = x, _ && (_.hidden = !0);
      }
      const p = { nodeState: cn(c, d), initialValues: f, ui: {} };
      return c._filCleanerState = p, Ut(c, "fil_cleaner_view", vd, { state: p, height: 460 }), u;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...r) {
      const u = l == null ? void 0 : l.apply(this, r), c = this, d = c._filCleanerState;
      if (!d) return u;
      for (const f of Object.keys(o))
        d.nodeState[f] = pe(le(c, f), "boolean", o[f]);
      return u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...r) {
      return jt(this), a == null ? void 0 : a.apply(this, r);
    }, St(e);
  }
}, wd = /* @__PURE__ */ Ht(() => Promise.resolve().then(() => xh)), Sd = {
  id: "FiLBeforeAfterCompare",
  register(e, t) {
    wt(e, {
      minSize: [340, 500],
      family: "image",
      description: "Before/after viewer (wipe, side-by-side, overlay, difference) with optional output resizing.",
      badges: [{ text: "compare", color: "#62c987", text_color: "#1a1a1a" }]
    });
    const s = e.prototype, o = s.onNodeCreated;
    s.onNodeCreated = function(...a) {
      const r = o == null ? void 0 : o.apply(this, a), u = this, c = le(u, "swap"), d = le(u, "resize_mode"), f = le(u, "max_resolution"), p = {
        swap: pe(c, "boolean", !1),
        resize_mode: pe(d, "string", "Off"),
        max_resolution: pe(f, "number", 4096)
      };
      for (const y of [c, d, f])
        y && (y.hidden = !0);
      const m = {
        nodeState: cn(u, p),
        initialValues: { ...p },
        ui: {
          compare_mode: "wipe",
          compare_position: 0.5,
          compare_opacity: 0.5,
          settings_collapsed: !0
        }
      };
      u._filCompareState = m;
      const _ = Ut(u, "fil_compare_view", wd, { state: m, height: 380 }), x = u.onExecuted;
      return u.onExecuted = function(y) {
        const w = x == null ? void 0 : x.apply(this, [y]), D = y;
        return _ && D && (_.state.ui.compare_images = { a: D.a_images ?? [], b: D.b_images ?? [] }), w;
      }, r;
    };
    const i = s.onConfigure;
    s.onConfigure = function(...a) {
      const r = i == null ? void 0 : i.apply(this, a), u = this, c = u._filCompareState;
      return c && (c.nodeState.swap = pe(le(u, "swap"), "boolean", !1), c.nodeState.resize_mode = pe(le(u, "resize_mode"), "string", "Off"), c.nodeState.max_resolution = pe(le(u, "max_resolution"), "number", 4096)), r;
    };
    const l = s.onRemoved;
    s.onRemoved = function(...a) {
      return jt(this), l == null ? void 0 : l.apply(this, a);
    }, St(e);
  }
}, xd = /* @__PURE__ */ Ht(() => Promise.resolve().then(() => Ga)), Cd = {
  id: "FiLUpscaleTileCalc",
  register(e, t) {
    wt(e, {
      // Height is deliberately LOW here — it only has to cover the very
      // first paint before Vue mounts. computeSize() reliably reports the
      // real content height once mounted (~790px for the 20 outputs + full
      // panel) and always wins via Math.max in domWidgetHost.ts, so an
      // above-content buffer here would just show up as permanent dead
      // space at the bottom of the node — width is the actual reason this
      // floor exists (computeSize()'s own width guess ignores it entirely).
      minSize: [340, 300],
      family: "image",
      description: "Tile dimensions, grid preview, denoise, latent-size calculation.",
      badges: [{ text: "upscale", color: "#62c987", text_color: "#1a1a1a" }]
    });
    const s = e.prototype, o = {
      upscale_factor: 2,
      tile_size: 1024,
      tile_overlap: 64,
      manual_tile_cols: 0,
      manual_tile_rows: 0
    }, i = {
      auto_overlap: !1,
      auto_mode: !1,
      non_square_tiles: !1,
      auto_fix_thin_edges: !1
    }, l = { auto_profile: "Balanced" }, a = s.onNodeCreated;
    s.onNodeCreated = function(...c) {
      const d = a == null ? void 0 : a.apply(this, c), f = this, p = {}, m = {};
      for (const x of Object.keys(o)) {
        const y = le(f, x);
        if (!y) continue;
        const w = pe(y, "number", o[x]);
        p[x] = w, m[x] = w, y.hidden = !0;
      }
      for (const x of Object.keys(i)) {
        const y = le(f, x);
        if (!y) continue;
        const w = pe(y, "boolean", i[x]);
        p[x] = w, m[x] = w, y.hidden = !0;
      }
      for (const x of Object.keys(l)) {
        const y = le(f, x);
        if (!y) continue;
        const w = pe(y, "string", l[x]);
        p[x] = w, m[x] = w, y.hidden = !0;
      }
      const _ = { nodeState: cn(f, p), initialValues: m, ui: {} };
      return f._filUpscaleState = _, Ut(f, "fil_upscale_view", xd, { state: _, height: 420 }), d;
    };
    const r = s.onConfigure;
    s.onConfigure = function(...c) {
      const d = r == null ? void 0 : r.apply(this, c), f = this, p = f._filUpscaleState;
      if (!p) return d;
      for (const m of Object.keys(o))
        p.nodeState[m] = pe(le(f, m), "number", o[m]);
      for (const m of Object.keys(i))
        p.nodeState[m] = pe(le(f, m), "boolean", i[m]);
      for (const m of Object.keys(l))
        p.nodeState[m] = pe(le(f, m), "string", l[m]);
      return d;
    };
    const u = s.onRemoved;
    s.onRemoved = function(...c) {
      return jt(this), u == null ? void 0 : u.apply(this, c);
    }, St(e);
  }
}, Fd = /* @__PURE__ */ Ht(() => Promise.resolve().then(() => Ga)), Md = {
  id: "FiLUpscaleSimple",
  register(e, t) {
    wt(e, {
      // Height is deliberately LOW — see upscale.ts's identical note. Only
      // needs to cover the very first paint; computeSize() (~470px for this
      // panel) always wins via Math.max in domWidgetHost.ts, so a buffer
      // here would just be permanent dead space at the bottom of the node.
      minSize: [340, 300],
      family: "image",
      description: "Upscale + tile an image through a required model — same tiling controls as Advanced.",
      badges: [{ text: "upscale", color: "#62c987", text_color: "#1a1a1a" }]
    });
    const s = e.prototype, o = {
      upscale_factor: 2,
      tile_size: 1024,
      tile_overlap: 64,
      manual_tile_cols: 0,
      manual_tile_rows: 0
    }, i = {
      auto_overlap: !1,
      auto_mode: !1,
      non_square_tiles: !1,
      auto_fix_thin_edges: !1
    }, l = { auto_profile: "Balanced" }, a = s.onNodeCreated;
    s.onNodeCreated = function(...c) {
      const d = a == null ? void 0 : a.apply(this, c), f = this, p = {}, m = {};
      for (const x of Object.keys(o)) {
        const y = le(f, x);
        if (!y) continue;
        const w = pe(y, "number", o[x]);
        p[x] = w, m[x] = w, y.hidden = !0;
      }
      for (const x of Object.keys(i)) {
        const y = le(f, x);
        if (!y) continue;
        const w = pe(y, "boolean", i[x]);
        p[x] = w, m[x] = w, y.hidden = !0;
      }
      for (const x of Object.keys(l)) {
        const y = le(f, x);
        if (!y) continue;
        const w = pe(y, "string", l[x]);
        p[x] = w, m[x] = w, y.hidden = !0;
      }
      const _ = { nodeState: cn(f, p), initialValues: m, ui: {} };
      return f._filUpscaleState = _, Ut(f, "fil_upscale_simple_view", Fd, { state: _, height: 420 }), d;
    };
    const r = s.onConfigure;
    s.onConfigure = function(...c) {
      const d = r == null ? void 0 : r.apply(this, c), f = this, p = f._filUpscaleState;
      if (!p) return d;
      for (const m of Object.keys(o))
        p.nodeState[m] = pe(le(f, m), "number", o[m]);
      for (const m of Object.keys(i))
        p.nodeState[m] = pe(le(f, m), "boolean", i[m]);
      for (const m of Object.keys(l))
        p.nodeState[m] = pe(le(f, m), "string", l[m]);
      return d;
    };
    const u = s.onRemoved;
    s.onRemoved = function(...c) {
      return jt(this), u == null ? void 0 : u.apply(this, c);
    }, St(e);
  }
}, Ld = {
  id: "FiLKSampler",
  register(e, t) {
    wt(e, {
      minSize: [270, 260],
      family: "sampling",
      description: "Full sampler/scheduler set, passthrough outputs, preview, HighRes-fix script.",
      badges: [{ text: "sampler", color: "#7aa2f7", text_color: "#0b0e14" }]
    }), St(e);
  }
}, Id = /* @__PURE__ */ Ht(() => Promise.resolve().then(() => Hh)), Oo = {
  upscale_by: 1.25,
  denoise: 0.56,
  iterations: 1,
  strength: 1,
  seed: 0,
  hires_steps: 12
}, $o = {
  upscale_type: "latent",
  hires_ckpt_name: "(use same)",
  latent_upscaler: "nearest-exact",
  pixel_upscaler: "",
  control_net_name: "",
  preprocessor: "none"
}, Vo = {
  use_same_seed: !0,
  use_controlnet: !1
}, Ad = [
  ...Object.keys(Oo),
  ...Object.keys($o),
  ...Object.keys(Vo)
], kd = {
  id: "FiLHighResFix",
  register(e, t) {
    wt(e, {
      // Height kept LOW on purpose — computeSize() (~430px real content)
      // always wins via Math.max in domWidgetHost.ts, so a buffer above it
      // here would just be dead space at the bottom. Width is the actual
      // reason this floor exists (computeSize()'s own width guess ignores it).
      minSize: [320, 300],
      family: "sampling",
      description: "Latent/pixel upscale + re-sample settings, packed into a script for FiLKSampler.",
      badges: [{ text: "hires", color: "#bb9af7", text_color: "#0b0e14" }]
    });
    const s = e.prototype, o = (r, u) => {
      for (const c of Object.keys(Oo))
        u[c] = pe(le(r, c), "number", Oo[c]);
      for (const c of Object.keys($o))
        u[c] = pe(le(r, c), "string", $o[c]);
      for (const c of Object.keys(Vo))
        u[c] = pe(le(r, c), "boolean", Vo[c]);
    }, i = s.onNodeCreated;
    s.onNodeCreated = function(...r) {
      const u = i == null ? void 0 : i.apply(this, r), c = this, d = {};
      o(c, d);
      for (const m of Ad) {
        const _ = le(c, m);
        _ && (_.hidden = !0);
      }
      const f = le(c, "control_after_generate");
      f && (f.hidden = !0, f.value = "fixed"), d.seed_mode = "random";
      const p = {
        nodeState: cn(c, d),
        initialValues: { ...d },
        ui: {},
        lastRunSeed: null
      };
      return Object.defineProperty(p, "node", { value: c, enumerable: !1, configurable: !0 }), c._filHiResFixState = p, Ut(c, "fil_hiresfix_view", Id, { state: p, height: 420 }), u;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...r) {
      const u = l == null ? void 0 : l.apply(this, r), c = this, d = c._filHiResFixState;
      return d && o(c, d.nodeState), u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...r) {
      return jt(this), a == null ? void 0 : a.apply(this, r);
    }, St(e);
  }
}, Dd = {
  id: "FiLNoiseControl",
  register(e, t) {
    wt(e, {
      minSize: [270, 220],
      family: "sampling",
      description: "RNG source + seed-variation script for FiLKSampler.",
      badges: [{ text: "script", color: "#7aa2f7", text_color: "#0b0e14" }]
    }), St(e);
  }
}, Ed = [
  md,
  gd,
  bd,
  yd,
  Sd,
  Cd,
  Md,
  Ld,
  kd,
  Dd
], Da = Object.fromEntries(
  Ed.map((e) => [e.id, e])
), us = /* @__PURE__ */ ae({});
let nl = !1;
const Ts = /* @__PURE__ */ oi("fil/help", () => {
  const e = /* @__PURE__ */ ae(null);
  function t(a) {
    for (const [r, u] of Object.entries(a))
      us.value[r] = u;
  }
  function n() {
    nl || (nl = !0, Promise.resolve().then(() => jh).then(({ HELP_DEFAULTS: a }) => t(a)).catch((a) => console.warn("[FiL_Design_ImageMind] help defaults import failed:", a)));
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
}), Td = {
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
function Ea(e) {
  return Td[e];
}
const Rd = ["title", "aria-label", "innerHTML"], Pd = /* @__PURE__ */ Ce({
  name: "FilIcon",
  __name: "FilIcon",
  props: {
    name: {},
    size: { default: 16 },
    title: {}
  },
  setup(e) {
    return (t, n) => (L(), P("span", {
      class: "fil-icon",
      style: Ge({ width: e.size + "px", height: e.size + "px" }),
      title: e.title,
      role: "img",
      "aria-label": e.title ?? e.name,
      innerHTML: g(Ea)(e.name)
    }, null, 12, Rd));
  }
}), yn = /* @__PURE__ */ Me(Pd, [["__scopeId", "data-v-dfb78d9f"]]), Nd = ["aria-label"], Od = { class: "fil-modal-header" }, $d = { class: "fil-modal-title" }, Vd = { class: "fil-modal-body" }, Bd = /* @__PURE__ */ Ce({
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
    const n = e, s = t, o = /* @__PURE__ */ ae(null), i = /* @__PURE__ */ ae(null);
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
    return $e(
      () => n.open,
      (d) => {
        var f;
        d ? (i.value = document.activeElement, Sn(() => {
          var m;
          (m = (o.value ? c(o.value) : [])[0] || o.value) == null || m.focus();
        })) : ((f = i.value) == null || f.focus(), i.value = null);
      }
    ), rn(() => {
      document.addEventListener("keydown", r);
    }), xn(() => {
      document.removeEventListener("keydown", r);
    }), (d, f) => (L(), Ie(Wl, { to: "body" }, [
      Y(nu, { name: "fil-modal" }, {
        default: Ws(() => [
          e.open ? (L(), P("div", {
            key: 0,
            ref_key: "modalRef",
            ref: o,
            class: "fil-modal-backdrop",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title || "Dialog",
            onClick: a
          }, [
            U("div", {
              class: "fil-modal-panel",
              style: Ge({ maxWidth: e.width })
            }, [
              U("div", Od, [
                U("span", $d, ee(e.title), 1),
                U("button", {
                  class: "fil-modal-close",
                  title: "Close",
                  onClick: l
                }, [
                  Y(yn, {
                    name: "close",
                    size: 14
                  })
                ])
              ]),
              U("div", Vd, [
                uc(d.$slots, "default", {}, void 0, !0)
              ])
            ], 4)
          ], 8, Nd)) : se("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Ta = /* @__PURE__ */ Me(Bd, [["__scopeId", "data-v-00452928"]]), Hd = { class: "fil-help-title" }, Ud = {
  key: 0,
  class: "fil-help-body"
}, jd = { key: 1 }, Wd = {
  key: 2,
  class: "fil-help-table"
}, Gd = {
  key: 3,
  class: "fil-help-code"
}, zd = {
  key: 1,
  class: "fil-help-empty"
}, Kd = /* @__PURE__ */ Ce({
  __name: "FilHelpPopup",
  setup(e) {
    const t = Ts(), n = q(() => {
      const o = t.activeHelpId;
      return o ? t.get(o) ?? null : null;
    }), s = q({
      get: () => t.activeHelpId !== null,
      set: (o) => {
        o || t.value_close();
      }
    });
    return $e(n, (o) => {
      o || t.value_close();
    }), (o, i) => (L(), Ie(Ta, {
      open: s.value,
      "onUpdate:open": i[0] || (i[0] = (l) => s.value = l),
      title: "FiL LLM Help",
      width: "600px",
      onClose: i[1] || (i[1] = (l) => g(t).value_close())
    }, {
      default: Ws(() => {
        var l;
        return [
          n.value ? (L(), P(fe, { key: 0 }, [
            U("h2", Hd, ee(n.value.title), 1),
            n.value.body ? (L(), P("p", Ud, ee(n.value.body), 1)) : se("", !0),
            (l = n.value.bullets) != null && l.length ? (L(), P("ul", jd, [
              (L(!0), P(fe, null, Ae(n.value.bullets, (a, r) => (L(), P("li", {
                key: r,
                class: "fil-help-bullet"
              }, [
                Y(yn, {
                  name: "chevronRight",
                  size: 12
                }),
                U("span", null, ee(a), 1)
              ]))), 128))
            ])) : se("", !0),
            n.value.table ? (L(), P("table", Wd, [
              U("thead", null, [
                U("tr", null, [
                  (L(!0), P(fe, null, Ae(n.value.table.headers, (a) => (L(), P("th", { key: a }, ee(a), 1))), 128))
                ])
              ]),
              U("tbody", null, [
                (L(!0), P(fe, null, Ae(n.value.table.rows, (a, r) => (L(), P("tr", { key: r }, [
                  (L(!0), P(fe, null, Ae(a, (u, c) => (L(), P("td", { key: c }, ee(u), 1))), 128))
                ]))), 128))
              ])
            ])) : se("", !0),
            n.value.code ? (L(), P("pre", Gd, [
              U("code", null, ee(n.value.code), 1)
            ])) : se("", !0)
          ], 64)) : (L(), P("p", zd, "No help available for this node."))
        ];
      }),
      _: 1
    }, 8, ["open"]));
  }
}), qd = /* @__PURE__ */ Me(Kd, [["__scopeId", "data-v-536c1547"]]);
let mo = null;
function Xd(e) {
  if (mo) return;
  const t = document.createElement("div");
  t.id = "__fil_help_popup_host", document.body.appendChild(t), mo = Ys(qd).use(Zs()), mo.mount(t), console.info("[FiL_Design_ImageMind] help popup mounted");
}
function Yd() {
  var o, i, l, a, r, u, c, d;
  const e = globalThis, t = "FiL_Design_ImageMind.RunButton.AnimationDuration", n = ((a = (l = (i = (o = e.app) == null ? void 0 : o.extensionManager) == null ? void 0 : i.setting) == null ? void 0 : l.get) == null ? void 0 : a.call(l, t, "Normal")) ?? ((d = (c = (u = (r = globalThis.app) == null ? void 0 : r.ui) == null ? void 0 : u.settings) == null ? void 0 : c.getSettingValue) == null ? void 0 : d.call(c, t, "Normal")) ?? "Normal";
  return { Fast: 200, Normal: 400, Slow: 600 }[String(n)] || 400;
}
function Jd(e, t) {
  var u, c, d, f, p, m, _, x, y, w;
  if (!(((f = (d = (c = (u = globalThis.app) == null ? void 0 : u.extensionManager) == null ? void 0 : c.setting) == null ? void 0 : d.get) == null ? void 0 : f.call(d, "FiL_Design_ImageMind.RunButton.Enabled", !0)) ?? ((x = (_ = (m = (p = globalThis.app) == null ? void 0 : p.ui) == null ? void 0 : m.settings) == null ? void 0 : _.getSettingValue) == null ? void 0 : x.call(_, "FiL_Design_ImageMind.RunButton.Enabled", !0)) ?? !0)) return;
  const o = (w = (y = e == null ? void 0 : e.canvas) == null ? void 0 : y.nodeEls) == null ? void 0 : w[t];
  if (!o) return;
  const i = o.querySelector(".comfy-node-header");
  if (!i) return;
  const l = Yd(), a = i.style.background, r = Math.max(60, l * 0.3);
  i.style.transition = `background ${r}ms ease`, i.style.background = "var(--fil-accent, #7c3aed)", setTimeout(() => {
    i.style.background = a;
  }, l);
}
function Qd(e) {
  const t = e.api;
  if (typeof (t == null ? void 0 : t.addEventListener) != "function") {
    console.warn("[FiL_Design_ImageMind] run button FX: api not available, skipping");
    return;
  }
  t.addEventListener("executing", (n) => {
    const s = n.detail, o = s && typeof s == "object" ? s.node : s;
    (typeof o == "string" || typeof o == "number") && Jd({ canvas: e.canvas }, o);
  }), console.info("[FiL_Design_ImageMind] run button FX installed (api executing hook)");
}
const Ra = "FiL_Design_ImageMind", Mt = "/fil_design_imagemind", ln = `[${Ra}]`, Zd = `${Ra}.UI`;
async function Pa(e) {
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
function sl(e) {
  var o;
  const n = `/view?${new URLSearchParams({
    filename: e.filename,
    type: e.type || "temp",
    subfolder: e.subfolder || ""
  }).toString()}`, s = globalThis;
  return (o = s.api) != null && o.apiURL ? s.api.apiURL(n) : n;
}
function Na() {
  var t;
  const e = globalThis;
  if ((t = e.api) != null && t.fetchApi) return (n, s) => e.api.fetchApi(n, s);
  if (e.fetch) return e.fetch.bind(globalThis);
  throw new Error(`${ln} no HTTP transport (api.fetchApi or window.fetch undefined)`);
}
async function En(e) {
  const t = await Na()(e);
  return Pa(t);
}
async function _s(e, t) {
  const n = await Na()(e, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  });
  return Pa(n);
}
const Jt = {
  loadAccounts: () => En(`${Mt}/auth`),
  saveAccounts: (e) => _s(`${Mt}/auth`, {
    accounts: e
  }),
  loadModels: (e, t = !1) => En(`${Mt}/models/${encodeURIComponent(e)}${t ? "?force=1" : ""}`),
  probe: (e, t = "") => _s(`${Mt}/provider_probe`, { provider: e, model: t }),
  listProviders: () => En(`${Mt}/providers`),
  saveCompareImage: (e) => _s(`${Mt}/compare/save`, { image: e }),
  nodeContracts: () => En(`${Mt}/node_contracts`)
};
function Bo(e, t, n) {
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
const ef = "FiL_Design_ImageMind.Language", Oa = "en", jn = /* @__PURE__ */ an({
  lang: Oa,
  translations: {},
  loaded: !1
});
let ol = null;
async function tf(e) {
  try {
    const t = await En(`/fil_design_imagemind/locale/${encodeURIComponent(e)}`);
    jn.translations = t, jn.lang = e;
  } catch (t) {
    console.warn(`[FiL_Design_ImageMind] failed to load locale "${e}":`, t);
  } finally {
    jn.loaded = !0;
  }
}
function nf() {
  if (ol) return;
  const e = Bo(ef, Oa);
  ol = tf(e);
}
function Wt() {
  nf();
  function e(t, n) {
    return jn.translations[t] ?? n;
  }
  return { t: e, state: /* @__PURE__ */ vs(jn) };
}
const sf = ["onMouseenter", "onMouseleave"], of = { class: "fil-toast-text" }, lf = ["onClick"], af = ["aria-label", "onClick"], rf = /* @__PURE__ */ Ce({
  __name: "FilToastStack",
  setup(e) {
    const { t } = Wt(), n = Ot(), { items: s } = nd(n), o = /* @__PURE__ */ ae(null), i = /* @__PURE__ */ new Map(), l = {
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
    const d = q(() => s.value);
    return rn(() => {
      for (const f of s.value) a(f);
    }), xn(() => {
      for (const f of i.values()) clearTimeout(f);
      i.clear();
    }), (f, p) => (L(), P("div", {
      ref_key: "root",
      ref: o,
      class: "fil-toast-stack",
      role: "status",
      "aria-live": "polite"
    }, [
      (L(!0), P(fe, null, Ae(d.value, (m) => (L(), P("div", {
        key: m.id,
        class: ge(["fil-toast", `fil-toast-${m.level}`]),
        style: Ge({ "--toast-color": l[m.level] }),
        onMouseenter: (_) => r(m),
        onMouseleave: (_) => u(m)
      }, [
        p[0] || (p[0] = U("span", {
          class: "fil-toast-dot",
          "aria-hidden": "true"
        }, null, -1)),
        U("span", of, ee(m.text), 1),
        m.action ? (L(), P("button", {
          key: 0,
          type: "button",
          class: "fil-toast-action",
          onClick: Es((_) => {
            m.action.onClick(_), c(m);
          }, ["stop"])
        }, ee(m.action.label), 9, lf)) : se("", !0),
        U("button", {
          type: "button",
          class: "fil-toast-close",
          "aria-label": g(t)("toast_close", "Close"),
          onClick: Es((_) => c(m), ["stop"])
        }, " × ", 8, af)
      ], 46, sf))), 128))
    ], 512));
  }
}), cf = /* @__PURE__ */ Me(rf, [["__scopeId", "data-v-08cc58fa"]]);
let ho = null;
function uf() {
  if (ho) return;
  const e = document.createElement("div");
  document.body.appendChild(e), ho = Ys(cf).use(Zs()), ho.mount(e);
  const t = globalThis;
  Promise.resolve().then(() => fd).then(({ toast: n }) => {
    t.__filToast = n, console.info("[FiL_Design_ImageMind] toast stack mounted");
  }).catch((n) => console.warn("[FiL_Design_ImageMind] toast store import failed:", n));
}
const df = "FiL_Design_ImageMind.Shortcuts.Enabled", ff = "__cheatsheet__", pf = [
  "#comfy-search-input",
  'input[name="search"]',
  'input[aria-label="Search"]',
  "#search-input",
  'input[placeholder*="search" i]'
], mf = [
  {
    id: "FiL_Design_ImageMind.helpCheatsheet",
    label: "FiL_Design_ImageMind — Keyboard cheatsheet",
    icon: "?",
    function: Ho
  },
  {
    id: "FiL_Design_ImageMind.focusSearch",
    label: "FiL_Design_ImageMind — Focus add-node search",
    icon: "/",
    function: $a
  }
], hf = [
  { commandId: "FiL_Design_ImageMind.helpCheatsheet", combo: { key: "?", shift: !0 } },
  // NB: Ctrl+Shift+K is reserved by core (Workspace.ToggleBottomPanel) — binding it
  // via the native API throws a duplicate-keybinding error, so we don't register it.
  { commandId: "FiL_Design_ImageMind.focusSearch", combo: { key: "/" } }
];
function gf(e) {
  if (!e || typeof e != "object") return !1;
  const t = String(e.tagName || "").toLowerCase();
  return t === "input" || t === "textarea" || t === "select" || e.isContentEditable === !0;
}
function _f() {
  for (const e of pf) {
    const t = document.querySelector(e);
    if (t) return t;
  }
  return null;
}
function Ho() {
  var t;
  const e = Ts();
  e.ensureHelpDefaultsInjected(), (t = e.value_open) == null || t.call(e, ff);
}
function $a() {
  const e = _f();
  if (!e) {
    Qe.info("ComfyUI search field not found");
    return;
  }
  try {
    e.focus(), "select" in e && e.select();
  } catch {
  }
}
function bf(e) {
  if (!!e.extensionManager) {
    console.info("[FiL_Design_ImageMind] shortcuts registered via native commands API");
    return;
  }
  window.addEventListener("keydown", (n) => vf(n, e), !0), console.info("[FiL_Design_ImageMind] shortcuts installed (fallback keydown handler)");
}
function vf(e, t) {
  var i, l, a, r, u, c, d, f, p;
  let n = !0;
  try {
    n = !!(((r = (a = (l = (i = globalThis.app) == null ? void 0 : i.extensionManager) == null ? void 0 : l.setting) == null ? void 0 : a.get) == null ? void 0 : r.call(a, df, !0)) ?? !0);
  } catch {
  }
  if (!n) return;
  const s = e.target, o = gf(s);
  if (e.key === "Escape") {
    try {
      const m = Ts();
      (u = m.value_close) == null || u.call(m);
    } catch {
    }
    o && ((c = s.blur) == null || c.call(s)), (d = e.preventDefault) == null || d.call(e);
    return;
  }
  if (!o) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "K" || e.key === "k")) {
      Ho(), e.preventDefault();
      return;
    }
    if (e.key === "?" || e.shiftKey && e.key === "/") {
      if (e.shiftKey) Ho();
      else {
        const m = t.canvas, _ = (m == null ? void 0 : m.selected_nodes) ?? {}, x = Object.values(_).filter(Boolean);
        if (x.length === 1) {
          const y = ((f = x[0]) == null ? void 0 : f.comfyClass) ?? "default", w = Ts();
          w.ensureHelpDefaultsInjected(), (p = w.value_open) == null || p.call(w, y);
        } else
          Qe.info("Select exactly one FiL_Design_ImageMind node, then press ?");
      }
      e.preventDefault();
      return;
    }
    e.key === "/" && !e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey && ($a(), e.preventDefault());
  }
}
function yf(e) {
  bf(e);
}
let il = !1;
function wf() {
  il || typeof window > "u" || (il = !0, window.addEventListener(
    "wheel",
    (e) => {
      if (e.ctrlKey || e.metaKey) return;
      if (ka(e.target, e.deltaX, e.deltaY)) {
        e.stopImmediatePropagation();
        return;
      }
      if (!(e.target instanceof HTMLCanvasElement)) return;
      const t = ad(e.clientX, e.clientY, e.deltaX, e.deltaY);
      if (!t) return;
      e.preventDefault(), e.stopImmediatePropagation();
      const n = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? t.clientHeight : 1;
      t.scrollBy({ left: e.deltaX * n, top: e.deltaY * n });
    },
    { capture: !0, passive: !1 }
  ), console.info("[FiL_Design_ImageMind] global scroll guard installed"));
}
const Sf = 3e5, xf = ["ollama", "lmstudio", "openai", "google", "groq", "openrouter", "cloudflare"], Wn = xf, Va = /* @__PURE__ */ oi("fil/providers", () => {
  const e = /* @__PURE__ */ ae({}), t = /* @__PURE__ */ ae({}), n = /* @__PURE__ */ ae({}), s = /* @__PURE__ */ ae({}), o = /* @__PURE__ */ ae(null), i = q(() => Object.fromEntries(
    Object.entries(e.value).filter(([, y]) => (y == null ? void 0 : y.configured) || (y == null ? void 0 : y.account_id) || (y == null ? void 0 : y.base_url))
  ));
  async function l() {
    try {
      const y = await Jt.loadAccounts();
      e.value = y.accounts || {}, o.value = null;
    } catch (y) {
      o.value = y instanceof Error ? y.message : String(y);
    }
  }
  async function a(y, w) {
    try {
      const D = await Jt.saveAccounts({ [y]: w });
      e.value = D.accounts || {}, o.value = null, c(y, !0);
    } catch (D) {
      throw o.value = D instanceof Error ? D.message : String(D), D;
    }
  }
  async function r(y) {
    const w = await Jt.saveAccounts({
      [y]: { delete: !0 }
    });
    e.value = w.accounts || {};
  }
  async function u(y) {
    await a(y, {});
    try {
      await r(y);
    } catch (w) {
      o.value = w instanceof Error ? w.message : String(w);
    }
  }
  async function c(y, w = !1) {
    const D = t.value[y];
    if (D && !w && !D.error && D.cachedAt > 0 && Date.now() - D.cachedAt < Sf)
      return D.list;
    D ? D.loading = !0 : t.value[y] = { list: [], visionModels: [], cachedAt: 0, loading: !0 };
    try {
      const v = await Jt.loadModels(y, w), S = v.models || [];
      return t.value[y] = {
        list: S,
        visionModels: v.vision_models || [],
        cachedAt: Date.now(),
        loading: !1
      }, v.status && v.status !== "available" && (t.value[y].error = v.message || v.status), S;
    } catch (v) {
      const S = v instanceof Error ? v.message : String(v);
      throw t.value[y] = {
        list: [],
        visionModels: [],
        cachedAt: 0,
        loading: !1,
        error: S
      }, o.value = S, v;
    }
  }
  function d(y) {
    const w = t.value[y];
    if (!(w != null && w.cachedAt)) return null;
    const D = Date.now() - w.cachedAt, v = Math.floor(D / 1e3);
    return v < 60 ? `${v}s` : v < 3600 ? `${Math.floor(v / 60)}m` : `${Math.floor(v / 3600)}h`;
  }
  async function f(y, w = "") {
    try {
      const D = await Jt.probe(y, w);
      return n.value[y] = D, D;
    } catch (D) {
      o.value = D instanceof Error ? D.message : String(D);
      return;
    }
  }
  async function p() {
    try {
      const y = await Jt.listProviders();
      s.value = y.providers || {};
    } catch {
    }
  }
  function m(y) {
    var w;
    return ((w = t.value[y]) == null ? void 0 : w.list) ?? [];
  }
  function _(y) {
    var w;
    return ((w = t.value[y]) == null ? void 0 : w.visionModels) ?? [];
  }
  function x(y) {
    var w;
    return !!((w = t.value[y]) != null && w.loading);
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
    modelsFor: m,
    visionModelsFor: _,
    isLoading: x,
    cachedAgeLabel: d
  };
}), Cf = ["title", "disabled", "aria-disabled"], Ff = {
  key: 0,
  class: "fil-w-btn-spinner"
}, Mf = ["innerHTML"], Lf = { key: 2 }, If = /* @__PURE__ */ Ce({
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
    const n = e, s = q(() => n.icon ? Ea(n.icon) : ""), o = t, i = q(() => [
      "fil-w-btn",
      n.variant === "accent" && "fil-w-btn-accent",
      n.variant === "danger" && "fil-w-btn-danger",
      n.variant === "icon" && "fil-w-btn-icon",
      n.variant === "full" && "fil-w-btn-full",
      n.variant === "sm" && "fil-w-btn-sm",
      n.flashing && "is-flashing",
      n.loading && "is-loading"
    ]), l = q(() => n.disabled || n.loading);
    function a(r) {
      l.value || o("click", r);
    }
    return (r, u) => (L(), P("button", {
      class: ge(i.value),
      title: e.title,
      disabled: l.value,
      "aria-disabled": l.value || void 0,
      onClick: a
    }, [
      e.loading ? (L(), P("span", Ff)) : se("", !0),
      e.icon && !e.loading ? (L(), P("span", {
        key: 1,
        class: "fil-w-btn-glyph",
        innerHTML: s.value
      }, null, 8, Mf)) : se("", !0),
      e.label ? (L(), P("span", Lf, ee(e.loading ? "" : e.label), 1)) : se("", !0)
    ], 10, Cf));
  }
}), ot = /* @__PURE__ */ Me(If, [["__scopeId", "data-v-1c6537e0"]]), Ba = {
  ollama: "Ollama",
  lmstudio: "LM Studio",
  openai: "OpenAI",
  groq: "Groq",
  google: "Google AI",
  openrouter: "OpenRouter",
  cloudflare: "Cloudflare"
}, Ha = {
  ollama: "provider-ollama",
  lmstudio: "provider-lmstudio",
  openai: "provider-openai",
  groq: "provider-groq",
  google: "provider-google",
  openrouter: "provider-openrouter",
  cloudflare: "provider-cloudflare"
}, Af = { class: "fil-pm-root" }, kf = ["onClick"], Df = { class: "fil-pm-icon" }, Ef = { class: "fil-pm-name" }, Tf = {
  key: 0,
  class: "fil-pm-disp"
}, Rf = ["title"], Pf = { class: "fil-pm-fields" }, Nf = { class: "fil-pm-field" }, Of = ["onUpdate:modelValue", "placeholder", "onKeydown"], $f = { class: "fil-pm-field" }, Vf = ["onUpdate:modelValue", "onKeydown"], Bf = {
  key: 0,
  class: "fil-pm-field"
}, Hf = ["onUpdate:modelValue", "onKeydown"], Uf = { class: "fil-pm-actions" }, jf = {
  key: 0,
  class: "fil-pm-age"
}, Wf = {
  key: 0,
  class: "fil-pm-err"
}, Gf = {
  key: 1,
  class: "fil-pm-err"
}, zf = {
  key: 2,
  class: "fil-pm-models"
}, Kf = {
  key: 0,
  class: "fil-pm-vision-badge",
  title: "Vision-capable"
}, qf = {
  key: 3,
  class: "fil-pm-err fil-pm-global-err"
}, Xf = /* @__PURE__ */ Ce({
  __name: "ProviderManager",
  setup(e) {
    const t = Va(), n = /* @__PURE__ */ ae({}), s = /* @__PURE__ */ ae({}), o = /* @__PURE__ */ ae({}), i = /* @__PURE__ */ ae({}), l = /* @__PURE__ */ ae({});
    rn(async () => {
      await Promise.all([t.loadAccounts(), t.loadDisplayNames()]);
      for (const v of Wn) {
        const S = t.accounts[v];
        n.value[v] = {
          // Stored keys are never echoed back by GET /fil_design_imagemind/auth (write-only
          // by the security contract) — the field always starts empty and the
          // `configured` flag drives the "a key is saved" UI state instead.
          key: "",
          base_url: (S == null ? void 0 : S.base_url) ?? "",
          account_id: (S == null ? void 0 : S.account_id) ?? ""
        };
      }
      for (const v of Wn) {
        const S = t.accounts[v];
        (S != null && S.configured || S != null && S.local || S != null && S.base_url) && y(v);
      }
    });
    const a = Ba, r = Ha;
    function u(v) {
      return { "fil-pm-has-val": v.length > 0 };
    }
    function c(v) {
      return v === "cloudflare";
    }
    function d(v) {
      var O;
      const S = t.accounts[v], E = t.modelsByProvider[v], T = ((E == null ? void 0 : E.list.length) ?? 0) > 0 && !(E != null && E.error);
      return ((O = t.probeState[v]) == null ? void 0 : O.status) === "available" || o.value[v] || T ? "connected" : S != null && S.configured || S != null && S.local || S != null && S.base_url ? "configured" : "off";
    }
    const f = {
      connected: "Connected",
      configured: "Configured",
      off: "Not connected"
    };
    function p(v) {
      return d(v) === "off" && !l.value[v];
    }
    function m(v) {
      d(v) === "off" && (l.value[v] = !l.value[v]);
    }
    async function _(v) {
      const S = n.value[v];
      await t.saveAccount(v, {
        key: S.key || null,
        base_url: S.base_url || null,
        account_id: S.account_id || null
      }), S.key = "";
    }
    async function x(v) {
      n.value[v] = { key: "", base_url: "", account_id: "" }, await t.deleteAccount(v);
    }
    async function y(v) {
      s.value[v] = !0, o.value[v] = !1;
      try {
        const S = await t.probe(v, "");
        o.value[v] = (S == null ? void 0 : S.status) === "available";
      } finally {
        s.value[v] = !1;
      }
    }
    async function w(v) {
      i.value[v] = !0;
      try {
        await t.loadModels(v, !0);
      } finally {
        i.value[v] = !1;
      }
    }
    const D = (v) => {
      const S = n.value[v], E = t.accounts[v];
      return S.key !== "" ? !0 : S.base_url !== ((E == null ? void 0 : E.base_url) ?? "") || S.account_id !== ((E == null ? void 0 : E.account_id) ?? "");
    };
    return (v, S) => (L(), P("div", Af, [
      (L(!0), P(fe, null, Ae(g(Wn), (E) => {
        var T, O, I, z, R, A;
        return L(), P("div", {
          key: E,
          class: ge(["fil-pm-card", { "fil-pm-card--collapsed": p(E) }])
        }, [
          U("div", {
            class: ge(["fil-pm-header", { "fil-pm-header--clickable": d(E) === "off" }]),
            onClick: (N) => m(E)
          }, [
            U("span", Df, [
              Y(yn, {
                name: g(r)[E],
                size: 20
              }, null, 8, ["name"])
            ]),
            U("span", Ef, ee(g(a)[E]), 1),
            g(t).displayNames[E] ? (L(), P("span", Tf, "(" + ee(g(t).displayNames[E]) + ")", 1)) : se("", !0),
            U("span", {
              class: ge(["fil-pm-status", `fil-pm-status--${d(E)}`]),
              title: f[d(E)]
            }, [
              S[0] || (S[0] = U("span", { class: "fil-pm-dot" }, null, -1)),
              ko(" " + ee(f[d(E)]), 1)
            ], 10, Rf),
            d(E) === "off" ? (L(), P("span", {
              key: 1,
              class: ge(["fil-pm-chevron", { "fil-pm-chevron--open": l.value[E] }])
            }, [
              Y(yn, {
                name: "chevronRight",
                size: 12
              })
            ], 2)) : se("", !0)
          ], 10, kf),
          p(E) ? se("", !0) : (L(), P(fe, { key: 0 }, [
            U("div", Pf, [
              U("label", Nf, [
                S[1] || (S[1] = U("span", { class: "fil-pm-field-label" }, "API Key", -1)),
                Ke(U("input", {
                  "onUpdate:modelValue": (N) => n.value[E].key = N,
                  type: "password",
                  class: ge(["fil-pm-input", u(n.value[E].key)]),
                  placeholder: (T = g(t).accounts[E]) != null && T.configured ? "•••••••• (saved)" : "sk-...",
                  onKeydown: gs((N) => _(E), ["enter"])
                }, null, 42, Of), [
                  [bt, n.value[E].key]
                ])
              ]),
              U("label", $f, [
                S[2] || (S[2] = U("span", { class: "fil-pm-field-label" }, "Base URL", -1)),
                Ke(U("input", {
                  "onUpdate:modelValue": (N) => n.value[E].base_url = N,
                  type: "text",
                  class: ge(["fil-pm-input", u(n.value[E].base_url)]),
                  placeholder: "http://localhost:11434",
                  onKeydown: gs((N) => _(E), ["enter"])
                }, null, 42, Vf), [
                  [bt, n.value[E].base_url]
                ])
              ]),
              c(E) ? (L(), P("label", Bf, [
                S[3] || (S[3] = U("span", { class: "fil-pm-field-label" }, "Account ID", -1)),
                Ke(U("input", {
                  "onUpdate:modelValue": (N) => n.value[E].account_id = N,
                  type: "text",
                  class: ge(["fil-pm-input", u(n.value[E].account_id)]),
                  onKeydown: gs((N) => _(E), ["enter"])
                }, null, 42, Hf), [
                  [bt, n.value[E].account_id]
                ])
              ])) : se("", !0)
            ]),
            U("div", Uf, [
              Y(ot, {
                variant: "accent",
                label: D(E) ? "Save" : "Saved",
                disabled: !D(E),
                onClick: (N) => _(E)
              }, null, 8, ["label", "disabled", "onClick"]),
              !D(E) && g(t).cachedAgeLabel(E) ? (L(), P("span", jf, ee(g(t).cachedAgeLabel(E)) + " ago ", 1)) : se("", !0),
              Y(ot, {
                variant: "danger",
                label: "Delete",
                disabled: !((O = g(t).accounts[E]) != null && O.configured) && !((I = g(t).accounts[E]) != null && I.base_url),
                onClick: (N) => x(E)
              }, null, 8, ["disabled", "onClick"]),
              Y(ot, {
                variant: "standard",
                label: "Probe",
                loading: s.value[E],
                flashing: o.value[E],
                disabled: !((z = g(t).accounts[E]) != null && z.local) && !((R = g(t).accounts[E]) != null && R.configured) && !n.value[E].key && !n.value[E].base_url,
                onClick: (N) => y(E)
              }, null, 8, ["loading", "flashing", "disabled", "onClick"]),
              Y(ot, {
                variant: "standard",
                label: "Load Models",
                loading: i.value[E],
                onClick: (N) => w(E)
              }, null, 8, ["loading", "onClick"])
            ]),
            (A = g(t).modelsByProvider[E]) != null && A.error ? (L(), P("div", Wf, ee(g(t).modelsByProvider[E].error), 1)) : se("", !0),
            g(t).probeState[E] && g(t).probeState[E].status !== "available" ? (L(), P("div", Gf, ee(g(t).probeState[E].message), 1)) : se("", !0),
            g(t).modelsFor(E).length > 0 ? (L(), P("div", zf, [
              (L(!0), P(fe, null, Ae(g(t).modelsFor(E), (N) => (L(), P("span", {
                class: "fil-pm-model-tag",
                key: N
              }, [
                ko(ee(N) + " ", 1),
                g(t).visionModelsFor(E).includes(N) ? (L(), P("span", Kf, "👁")) : se("", !0)
              ]))), 128))
            ])) : se("", !0),
            g(t).lastError ? (L(), P("div", qf, ee(g(t).lastError), 1)) : se("", !0)
          ], 64))
        ], 2);
      }), 128))
    ]));
  }
}), Yf = /* @__PURE__ */ Me(Xf, [["__scopeId", "data-v-ae1b468d"]]);
let go = null;
function Jf(e) {
  go || (go = Ys(Yf).use(Zs()), go.mount(e), console.info("[FiL_Design_ImageMind] provider manager mounted"));
}
function Qf(e) {
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
    render: (n) => Jf(n)
  }), console.info("[FiL_Design_ImageMind] provider manager sidebar tab registered");
}
const Zf = [
  {
    id: "FiL_Design_ImageMind.NodeTitles.AdaptiveColor",
    name: "Adaptive title text color",
    type: "boolean",
    defaultValue: !0,
    category: ["FiL_Design_ImageMind", "Node titles"],
    tooltip: "Compute node title text color (white/dark) from the title bar color via YIQ luminance."
  }
], ep = [
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
], tp = [
  {
    id: "FiL_Design_ImageMind.ConnectionFX.ShowToasts",
    name: "Show connection toasts",
    type: "boolean",
    defaultValue: !1,
    category: ["FiL_Design_ImageMind", "Connection FX", "Feedback"],
    tooltip: "Show toast notifications when connecting/disconnecting wires."
  }
], np = [
  {
    id: "FiL_Design_ImageMind.Shortcuts.Enabled",
    name: "Keyboard shortcuts",
    type: "boolean",
    defaultValue: !0,
    tooltip: "Esc — close popup / unfocus field. ? — help for the selected FiL_Design_ImageMind node. Shift+? or Ctrl+Shift+K — full shortcuts cheatsheet. / — focus node search.",
    category: ["FiL_Design_ImageMind", "Shortcuts"]
  }
], sp = [
  {
    id: "FiL_Design_ImageMind.Language",
    name: "Language",
    type: "combo",
    defaultValue: "en",
    options: ["en", "ru"],
    tooltip: "UI language for FiL_Design_ImageMind node tooltips and labels (English / Russian).",
    category: ["FiL_Design_ImageMind", "Language"]
  }
], Ua = {
  Default: "default",
  Cyberpunk: "cyberpunk",
  Fallout: "fallout",
  Travelmate: "travelmate"
};
function op(e) {
  const t = Ua[String(e)] ?? "default";
  Ca(t);
  const n = globalThis.app;
  n && Yu(n);
}
const ip = [
  {
    id: "FiL_Design_ImageMind.Theme",
    name: "Node theme",
    type: "combo",
    defaultValue: "Default",
    options: ["Default", "Cyberpunk", "Fallout", "Travelmate"],
    category: ["FiL_Design_ImageMind", "Appearance", "Theme"],
    tooltip: "Recolors every FiL_Design_ImageMind node panel and adds a small themed flourish (neon glow for Cyberpunk, a CRT scanline texture for Fallout, acid-lime glow for Travelmate). Applies instantly, no reload.",
    onChange: op
  }
];
function lp(e) {
  const t = e("FiL_Design_ImageMind.Theme", "Default");
  Ca(Ua[t] ?? "default");
}
function ja(e) {
  _s(`${Mt}/log_level`, { level: String(e) }).catch(() => {
  });
}
const ap = [
  {
    id: "FiL_Design_ImageMind.Logging.Level",
    name: "Log level",
    type: "combo",
    defaultValue: "WARNING",
    options: ["DEBUG", "INFO", "WARNING", "ERROR"],
    category: ["FiL_Design_ImageMind", "Logging"],
    tooltip: "Python backend log verbosity for this node pack.",
    onChange: ja
  }
];
function rp(e) {
  const t = e("FiL_Design_ImageMind.Logging.Level", "WARNING");
  ja(t);
}
const cp = [
  ...Zf,
  ...ep,
  ...tp,
  ...np,
  ...sp,
  ...ip,
  ...ap
];
wf();
function _o(e, t, n, s) {
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
function up(e, t, n, s, o) {
  var l;
  if (typeof e != "object" || e === null || n.id == null) return;
  const i = e[String(n.id)];
  if (!(!i || i.class_type !== t || !i.inputs))
    for (const a of o) {
      const r = (l = n.inputs) == null ? void 0 : l.find((c) => c.name === a);
      if (r && r.link != null) continue;
      const u = s[a];
      u !== void 0 && (i.inputs[a] = u);
    }
}
function dp(e) {
  var t, n;
  try {
    const s = globalThis.app, o = ((t = s == null ? void 0 : s.graph) == null ? void 0 : t._nodes) ?? [];
    for (const i of o) {
      const l = i;
      if (l.comfyClass === "FiLSeed" && l._filSeedState) {
        _o(e, "FiLSeed", l.id, l._filSeedState);
        continue;
      }
      if (l.comfyClass === "FiLHighResFix" && l._filHiResFixState) {
        l._filHiResFixState.nodeState.use_same_seed === !1 && _o(e, "FiLHighResFix", l.id, l._filHiResFixState);
        continue;
      }
      if (l.comfyClass === "FiLOpticScanner") {
        l._filScannerSeedState && (_o(e, "FiLOpticScanner", l.id, l._filScannerSeedState), up(
          e,
          "FiLOpticScanner",
          l,
          l._filScannerSeedState.nodeState,
          ["prompt", "negative_prompt", "custom_style"]
        ));
        const a = (n = l.inputs) == null ? void 0 : n.find((r) => r.name === "config");
        (!a || a.link == null) && console.warn(`${ln} Optic Scanner #${l.id} has no Provider Loader wired to its "config" slot — execution will fail.`);
      }
    }
  } catch (s) {
    console.warn(`${ln} preflight fallback:`, s);
  }
  return e;
}
function fp(e) {
  return {
    name: Zd,
    // Declarative settings — registered BEFORE setup so the panel renders
    // even if a later installer throws.
    settings: cp,
    // Declarative shortcuts — modern ComfyUI registers these through its
    // native command palette / keybinding system. The keydown fallback in
    // installShortcuts only kicks in when this API is unavailable.
    commands: mf,
    keybindings: hf,
    async setup() {
      const t = [
        () => Xd(),
        () => Qd(e),
        () => uf(),
        () => yf(e),
        () => Qf(e),
        () => lp((n, s) => Bo(n, s, e)),
        () => rp((n, s) => Bo(n, s, e))
      ];
      for (const n of t)
        try {
          n();
        } catch (s) {
          console.warn(`${ln} installer ${n.name || "anonymous"} failed:`, s);
        }
    },
    getCustomWidgets() {
      return { fil_compare: { serialize: !1 } };
    },
    async beforeRegisterNodeDef(t, n) {
      const s = Da[n.name];
      if (s)
        try {
          await s.register(t, n);
        } catch (o) {
          console.warn(`${ln} failed to register "${n.name}":`, o);
        }
    },
    async graphToPrompt(t) {
      return dp(t);
    }
  };
}
async function pp() {
  if (typeof fetch > "u") return;
  let e;
  try {
    e = await fetch(`${Mt}/node_contracts`);
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
  const n = new Set(Object.keys(t.node_ids ?? {})), s = new Set(Object.keys(Da));
  for (const o of n)
    s.has(o) || console.warn(`${ln} server expects "${o}" but local JS does not register it`);
  for (const o of s)
    n.has(o) || console.warn(`${ln} JS registers "${o}" but server does not expose a contract`);
}
Bu();
sd();
pp().catch((e) => {
  console.warn("[FiL_Design_ImageMind] contract self-check failed:", e);
});
const Wa = fp(al);
al.registerExtension(Wa);
console.info(`[FiL_Design_ImageMind] extension registered as "${Wa.name}"`);
const mp = ["aria-checked", "disabled", "title", "onClick"], hp = /* @__PURE__ */ Ce({
  __name: "FilChipGrid",
  props: {
    options: {},
    modelValue: {},
    columns: { default: 3 },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = q(() => ({
      gridTemplateColumns: `repeat(${Math.max(1, n.columns)}, minmax(0, 1fr))`
    }));
    function i(l) {
      n.disabled || l !== n.modelValue && s("update:modelValue", l);
    }
    return (l, a) => (L(), P("div", {
      class: "fil-w-chips",
      style: Ge(o.value),
      role: "radiogroup"
    }, [
      (L(!0), P(fe, null, Ae(e.options, (r) => (L(), P("button", {
        key: r,
        type: "button",
        role: "radio",
        class: ge(["fil-w-chip", { active: r === e.modelValue, disabled: e.disabled }]),
        "aria-checked": r === e.modelValue,
        disabled: e.disabled,
        title: r,
        onClick: (u) => i(r)
      }, ee(r), 11, mp))), 128))
    ], 4));
  }
}), ll = /* @__PURE__ */ Me(hp, [["__scopeId", "data-v-3c07d909"]]), gp = { class: "fil-w-chiplist" }, _p = ["placeholder", "aria-label", "disabled"], bp = {
  class: "fil-w-chip-scroll",
  role: "radiogroup"
}, vp = ["aria-checked", "disabled", "title", "onClick"], yp = {
  key: 0,
  class: "fil-w-chip-empty"
}, wp = /* @__PURE__ */ Ce({
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
    const n = e, s = t, o = /* @__PURE__ */ ae(""), i = q(() => {
      const a = o.value.trim().toLowerCase();
      return a ? n.options.filter((r) => r.toLowerCase().includes(a)) : n.options;
    });
    function l(a) {
      n.disabled || a !== n.modelValue && s("update:modelValue", a);
    }
    return (a, r) => (L(), P("div", gp, [
      e.searchable ? Ke((L(), P("input", {
        key: 0,
        "onUpdate:modelValue": r[0] || (r[0] = (u) => o.value = u),
        class: "fil-w-search",
        type: "search",
        placeholder: e.placeholder,
        "aria-label": e.placeholder,
        disabled: e.disabled,
        spellcheck: "false"
      }, null, 8, _p)), [
        [bt, o.value]
      ]) : se("", !0),
      U("div", bp, [
        (L(!0), P(fe, null, Ae(i.value, (u) => (L(), P("button", {
          key: u,
          type: "button",
          role: "radio",
          class: ge(["fil-w-chip", { active: u === e.modelValue, disabled: e.disabled }]),
          "aria-checked": u === e.modelValue,
          disabled: e.disabled,
          title: u,
          onClick: (c) => l(u)
        }, ee(u), 11, vp))), 128)),
        i.value.length === 0 ? (L(), P("div", yp, ee(o.value ? "No matches" : "Empty"), 1)) : se("", !0)
      ])
    ]));
  }
}), Sp = /* @__PURE__ */ Me(wp, [["__scopeId", "data-v-5ccf2e00"]]), xp = ["title"], Cp = {
  key: 0,
  class: "fil-combo-label"
}, Fp = ["disabled", "aria-expanded"], Mp = { class: "fil-combo-trigger-label" }, Lp = {
  key: 1,
  class: "fil-combo-badge"
}, Ip = ["placeholder"], Ap = { class: "fil-combo-list" }, kp = ["aria-selected", "onMouseenter", "onClick"], Dp = { class: "fil-combo-option-label" }, Ep = {
  key: 1,
  class: "fil-combo-badge"
}, Tp = {
  key: 0,
  class: "fil-combo-empty"
}, Rp = /* @__PURE__ */ Ce({
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
    const n = e, s = t, o = /* @__PURE__ */ ae(!1), i = /* @__PURE__ */ ae(""), l = /* @__PURE__ */ ae(0), a = /* @__PURE__ */ ae(null), r = /* @__PURE__ */ ae(null), u = /* @__PURE__ */ ae(null), c = /* @__PURE__ */ ae({}), d = q(() => n.options.find((T) => T.value === n.modelValue)), f = q(() => {
      if (!n.searchable || !i.value.trim()) return n.options;
      const T = i.value.trim().toLowerCase();
      return n.options.filter((O) => (O.label ?? O.value).toLowerCase().includes(T));
    });
    function p(T) {
      return T.label ?? T.value;
    }
    function m() {
      const T = a.value;
      if (!T) return;
      const O = T.getBoundingClientRect(), I = window.innerHeight, z = 260, R = I - O.bottom, A = R < z && O.top > R;
      c.value = {
        left: `${O.left}px`,
        width: `${O.width}px`,
        ...A ? { bottom: `${I - O.top + 4}px` } : { top: `${O.bottom + 4}px` }
      };
    }
    function _(T) {
      var I;
      const O = T.target;
      O instanceof Element && ((I = r.value) != null && I.contains(O)) || y();
    }
    function x() {
      n.disabled || (o.value = !0, i.value = "", l.value = Math.max(
        0,
        f.value.findIndex((T) => T.value === n.modelValue)
      ), Sn(() => {
        var T;
        m(), n.searchable && ((T = u.value) == null || T.focus()), window.addEventListener("resize", _), window.addEventListener("scroll", _, !0), document.addEventListener("mousedown", w, !0);
      }));
    }
    function y() {
      o.value && (o.value = !1, window.removeEventListener("resize", _), window.removeEventListener("scroll", _, !0), document.removeEventListener("mousedown", w, !0));
    }
    function w(T) {
      var I, z;
      const O = T.target;
      (I = a.value) != null && I.contains(O) || (z = r.value) != null && z.contains(O) || y();
    }
    function D() {
      o.value ? y() : x();
    }
    function v(T) {
      var O;
      s("update:modelValue", T.value), y(), (O = a.value) == null || O.focus();
    }
    function S(T) {
      if (!n.disabled) {
        if (!o.value && (T.key === "ArrowDown" || T.key === "ArrowUp" || T.key === "Enter" || T.key === " ")) {
          T.preventDefault(), x();
          return;
        }
        o.value && E(T);
      }
    }
    function E(T) {
      var I;
      const O = f.value;
      if (T.key === "ArrowDown")
        T.preventDefault(), l.value = O.length ? (l.value + 1) % O.length : 0;
      else if (T.key === "ArrowUp")
        T.preventDefault(), l.value = O.length ? (l.value - 1 + O.length) % O.length : 0;
      else if (T.key === "Enter") {
        T.preventDefault();
        const z = O[l.value];
        z && v(z);
      } else T.key === "Escape" && (T.preventDefault(), y(), (I = a.value) == null || I.focus());
    }
    return $e(i, () => {
      l.value = 0;
    }), xn(() => {
      window.removeEventListener("resize", _), window.removeEventListener("scroll", _, !0), document.removeEventListener("mousedown", w, !0);
    }), (T, O) => {
      var I, z;
      return L(), P("div", {
        class: "fil-combo",
        title: e.title
      }, [
        e.label ? (L(), P("label", Cp, ee(e.label), 1)) : se("", !0),
        U("button", {
          ref_key: "triggerRef",
          ref: a,
          type: "button",
          class: ge(["fil-combo-trigger", { open: o.value, disabled: e.disabled }]),
          disabled: e.disabled,
          "aria-expanded": o.value,
          "aria-haspopup": "listbox",
          onClick: D,
          onKeydown: S
        }, [
          (I = d.value) != null && I.icon ? (L(), Ie(yn, {
            key: 0,
            name: d.value.icon,
            size: 16
          }, null, 8, ["name"])) : se("", !0),
          U("span", Mp, ee(d.value ? p(d.value) : e.modelValue), 1),
          (z = d.value) != null && z.badge ? (L(), P("span", Lp, ee(d.value.badge), 1)) : se("", !0),
          O[1] || (O[1] = U("span", { class: "fil-combo-chevron" }, "▾", -1))
        ], 42, Fp),
        (L(), Ie(Wl, { to: "body" }, [
          o.value ? (L(), P("div", {
            key: 0,
            ref_key: "panelRef",
            ref: r,
            class: "fil-combo-panel",
            style: Ge(c.value),
            role: "listbox",
            onKeydown: E
          }, [
            e.searchable ? Ke((L(), P("input", {
              key: 0,
              ref_key: "searchRef",
              ref: u,
              "onUpdate:modelValue": O[0] || (O[0] = (R) => i.value = R),
              type: "search",
              class: "fil-combo-search",
              placeholder: e.placeholder,
              spellcheck: "false"
            }, null, 8, Ip)), [
              [bt, i.value]
            ]) : se("", !0),
            U("div", Ap, [
              (L(!0), P(fe, null, Ae(f.value, (R, A) => (L(), P("button", {
                key: R.value,
                type: "button",
                class: ge(["fil-combo-option", { active: A === l.value, selected: R.value === e.modelValue }]),
                role: "option",
                "aria-selected": R.value === e.modelValue,
                onMouseenter: (N) => l.value = A,
                onClick: (N) => v(R)
              }, [
                R.icon ? (L(), Ie(yn, {
                  key: 0,
                  name: R.icon,
                  size: 16
                }, null, 8, ["name"])) : se("", !0),
                U("span", Dp, ee(p(R)), 1),
                R.badge ? (L(), P("span", Ep, ee(R.badge), 1)) : se("", !0)
              ], 42, kp))), 128)),
              f.value.length === 0 ? (L(), P("div", Tp, "No matches")) : se("", !0)
            ])
          ], 36)) : se("", !0)
        ]))
      ], 8, xp);
    };
  }
}), Uo = /* @__PURE__ */ Me(Rp, [["__scopeId", "data-v-73f94a33"]]), Pp = ["data-ok", "data-err"], Np = /* @__PURE__ */ Ce({
  __name: "FilInfo",
  props: {
    text: {},
    ok: { type: Boolean },
    err: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (L(), P("div", {
      class: "fil-w-info",
      "data-ok": e.ok || void 0,
      "data-err": e.err || void 0
    }, ee(e.text), 9, Pp));
  }
}), bo = /* @__PURE__ */ Me(Np, [["__scopeId", "data-v-851660c1"]]), Op = ["title"], $p = {
  key: 0,
  class: "fil-w-numfield-label"
}, Vp = { class: "fil-w-num-wrap" }, Bp = ["disabled", "min", "max", "step", "aria-label"], Hp = { class: "fil-w-num-step" }, Up = ["disabled"], jp = ["disabled"], Wp = /* @__PURE__ */ Ce({
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
    const n = e, s = t, o = q(() => n.modelValue), i = /* @__PURE__ */ ae(r(o.value));
    $e(o, (_) => {
      l.value || (i.value = r(_));
    });
    let l = /* @__PURE__ */ ae(!1), a = null;
    function r(_) {
      return Number.isFinite(_) ? String(_) : "";
    }
    function u(_) {
      const x = (_ || "").trim();
      if (x === "" || !/^[0-9+\-*/(). ]+$/.test(x.replace(/\^/g, "**"))) return null;
      try {
        const y = new Function(`"use strict"; return (${x});`), w = Number(y());
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
      let x = _;
      n.min != null && x < n.min && (x = n.min), n.max != null && x > n.max && (x = n.max), x !== o.value && s("update:modelValue", x), i.value = r(x);
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
      let x = o.value + _ * (n.step || 1);
      n.min != null && x < n.min && (x = n.min), n.max != null && x > n.max && (x = n.max), s("update:modelValue", x), i.value = r(x);
    }
    return (_, x) => (L(), P("div", {
      class: ge(["fil-w-numfield", { "no-label": !e.label }]),
      title: e.title
    }, [
      e.label ? (L(), P("label", $p, ee(e.label), 1)) : se("", !0),
      U("div", Vp, [
        Ke(U("input", {
          "onUpdate:modelValue": x[0] || (x[0] = (y) => i.value = y),
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
        }, null, 40, Bp), [
          [bt, i.value]
        ]),
        U("div", Hp, [
          U("button", {
            type: "button",
            class: "fil-w-num-btn",
            tabindex: "-1",
            "aria-label": "Increment",
            disabled: e.disabled || e.max != null && e.modelValue >= e.max,
            onMousedown: x[1] || (x[1] = Es(() => {
            }, ["prevent"])),
            onClick: x[2] || (x[2] = (y) => m(y.shiftKey ? 10 : 1))
          }, "▲", 40, Up),
          U("button", {
            type: "button",
            class: "fil-w-num-btn",
            tabindex: "-1",
            "aria-label": "Decrement",
            disabled: e.disabled || e.min != null && e.modelValue <= e.min,
            onMousedown: x[3] || (x[3] = Es(() => {
            }, ["prevent"])),
            onClick: x[4] || (x[4] = (y) => m(y.shiftKey ? -10 : -1))
          }, "▼", 40, jp)
        ])
      ])
    ], 10, Op));
  }
}), nn = /* @__PURE__ */ Me(Wp, [["__scopeId", "data-v-5fe162a0"]]), Gp = ["aria-expanded", "disabled"], zp = { class: "fil-w-section-arrow" }, Kp = { class: "fil-w-section-title" }, qp = /* @__PURE__ */ Ce({
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
    const i = q(() => n.modelValue ? "▶" : "▼");
    return (l, a) => (L(), P("button", {
      type: "button",
      class: ge(["fil-w-section", { collapsible: e.collapsible, collapsed: e.modelValue }]),
      "aria-expanded": !e.modelValue,
      disabled: !e.collapsible,
      onClick: o
    }, [
      U("span", zp, ee(i.value), 1),
      U("span", Kp, ee(e.title), 1)
    ], 10, Gp));
  }
}), wn = /* @__PURE__ */ Me(qp, [["__scopeId", "data-v-686d0388"]]), Xp = ["title"], Yp = {
  key: 0,
  class: "fil-w-segmented-label"
}, Jp = ["aria-label"], Qp = ["aria-pressed", "disabled", "tabindex", "onClick", "onKeydown"], Zp = /* @__PURE__ */ Ce({
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
    const n = e, s = t, o = q(() => n.modelValue), i = /* @__PURE__ */ ae([]);
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
    return (u, c) => (L(), P("div", {
      class: "fil-w-segmented",
      title: e.title
    }, [
      e.label ? (L(), P("label", Yp, ee(e.label), 1)) : se("", !0),
      U("div", {
        class: ge(["fil-w-pill", { disabled: e.disabled }]),
        role: "group",
        "aria-label": e.label
      }, [
        (L(!0), P(fe, null, Ae(e.options, (d, f) => (L(), P("button", {
          key: d,
          ref_for: !0,
          ref: (p) => {
            p && (i.value[f] = p);
          },
          type: "button",
          class: ge(["fil-w-seg", { active: d === o.value }]),
          "aria-pressed": d === o.value,
          disabled: e.disabled,
          tabindex: d === o.value ? 0 : -1,
          onClick: (p) => a(d),
          onKeydown: (p) => r(p, f)
        }, ee(l(d)), 43, Qp))), 128))
      ], 10, Jp)
    ], 8, Xp));
  }
}), $t = /* @__PURE__ */ Me(Zp, [["__scopeId", "data-v-738d9e4d"]]), em = ["title"], tm = {
  key: 0,
  class: "fil-w-select-label"
}, nm = ["disabled", "aria-label"], sm = ["value"], om = /* @__PURE__ */ Ce({
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
    const n = e, s = t, o = q({
      get: () => n.modelValue,
      set: (i) => s("update:modelValue", i)
    });
    return (i, l) => (L(), P("div", {
      class: "fil-w-select",
      title: e.title
    }, [
      e.label ? (L(), P("label", tm, ee(e.label), 1)) : se("", !0),
      Ke(U("select", {
        "onUpdate:modelValue": l[0] || (l[0] = (a) => o.value = a),
        class: "fil-w-select-input",
        disabled: e.disabled,
        "aria-label": e.label,
        onChange: l[1] || (l[1] = (a) => s("update:modelValue", a.target.value))
      }, [
        (L(!0), P(fe, null, Ae(e.options, (a) => (L(), P("option", {
          key: a,
          value: a
        }, ee(a), 9, sm))), 128))
      ], 40, nm), [
        [Fu, o.value]
      ])
    ], 8, em));
  }
}), ds = /* @__PURE__ */ Me(om, [["__scopeId", "data-v-77c303be"]]), im = ["title"], lm = {
  key: 0,
  class: "fil-w-slider-label"
}, am = { class: "fil-w-slider-row" }, rm = ["value", "min", "max", "step", "disabled", "aria-label"], cm = /* @__PURE__ */ Ce({
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
    const n = e, s = t, o = q(() => {
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
    return (a, r) => (L(), P("div", {
      class: "fil-w-slider",
      title: e.title
    }, [
      e.label ? (L(), P("label", lm, ee(e.label), 1)) : se("", !0),
      U("div", am, [
        U("input", {
          type: "range",
          class: "fil-w-slider-range",
          value: o.value,
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label,
          onInput: i
        }, null, 40, rm),
        Y(nn, {
          "model-value": o.value,
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label,
          "onUpdate:modelValue": l
        }, null, 8, ["model-value", "min", "max", "step", "disabled", "aria-label"])
      ])
    ], 8, im));
  }
}), it = /* @__PURE__ */ Me(cm, [["__scopeId", "data-v-785fba56"]]), um = {
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
}, hm = { class: "fil-style-picker" }, gm = { class: "fil-style-cats" }, _m = ["onClick"], bm = { class: "fil-style-grid" }, vm = ["title", "onClick"], ym = { class: "fil-style-tile-preview" }, wm = ["src"], Sm = {
  key: 1,
  class: "fil-style-tile-placeholder"
}, xm = { class: "fil-style-tile-label" }, Cm = {
  key: 0,
  class: "fil-style-empty"
}, fs = "__all__", Fm = /* @__PURE__ */ Ce({
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
    const l = q(() => {
      const f = /* @__PURE__ */ new Set(), p = [];
      for (const m of n.styles) {
        const _ = o(m);
        _ && !f.has(_) && (f.add(_), p.push(_));
      }
      return p;
    }), a = /* @__PURE__ */ ae(fs), r = /* @__PURE__ */ ae(""), u = q(() => {
      const f = r.value.trim().toLowerCase();
      return n.styles.filter((p) => a.value !== fs && o(p) !== a.value ? !1 : f ? p.toLowerCase().includes(f) : !0);
    });
    function c(f) {
      return mm[f];
    }
    function d(f) {
      s("select", f);
    }
    return (f, p) => (L(), P("div", hm, [
      U("div", gm, [
        U("button", {
          type: "button",
          class: ge(["fil-style-cat", { active: a.value === fs }]),
          onClick: p[0] || (p[0] = (m) => a.value = fs)
        }, " All ", 2),
        (L(!0), P(fe, null, Ae(l.value, (m) => (L(), P("button", {
          key: m,
          type: "button",
          class: ge(["fil-style-cat", { active: a.value === m }]),
          onClick: (_) => a.value = m
        }, ee(m), 11, _m))), 128))
      ]),
      Ke(U("input", {
        "onUpdate:modelValue": p[1] || (p[1] = (m) => r.value = m),
        type: "search",
        class: "fil-style-search",
        placeholder: "Search styles…",
        "aria-label": "Search styles",
        spellcheck: "false"
      }, null, 512), [
        [bt, r.value]
      ]),
      U("div", bm, [
        (L(!0), P(fe, null, Ae(u.value, (m) => (L(), P("button", {
          key: m,
          type: "button",
          class: ge(["fil-style-tile", { active: m === e.modelValue }]),
          title: m,
          onClick: (_) => d(m)
        }, [
          U("span", ym, [
            c(m) ? (L(), P("img", {
              key: 0,
              src: c(m),
              class: "fil-style-tile-img",
              alt: ""
            }, null, 8, wm)) : (L(), P("span", Sm, ee(i(m).split(" ")[0]), 1))
          ]),
          U("span", xm, ee(i(m)), 1)
        ], 10, vm))), 128)),
        u.value.length === 0 ? (L(), P("div", Cm, "No matches")) : se("", !0)
      ])
    ]));
  }
}), Mm = /* @__PURE__ */ Me(Fm, [["__scopeId", "data-v-7f1dfd99"]]), Lm = ["title"], Im = {
  key: 0,
  class: "fil-w-toggle-label"
}, Am = ["aria-checked", "aria-label", "disabled"], km = /* @__PURE__ */ Ce({
  __name: "FilToggle",
  props: {
    modelValue: {},
    label: {},
    title: {},
    disabled: { type: Boolean },
    bare: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = t;
    function o() {
      n.disabled || s("update:modelValue", n.modelValue === "ON" ? "OFF" : "ON");
    }
    return (i, l) => (L(), P("div", {
      class: ge(["fil-w-toggle", { bare: e.bare }]),
      title: e.title
    }, [
      e.label ? (L(), P("label", Im, ee(e.label), 1)) : se("", !0),
      U("button", {
        type: "button",
        class: ge(["fil-w-switch", { on: e.modelValue === "ON" }]),
        role: "switch",
        "aria-checked": e.modelValue === "ON",
        "aria-label": e.label,
        disabled: e.disabled,
        onClick: o
      }, [...l[0] || (l[0] = [
        U("span", { class: "fil-w-switch-thumb" }, null, -1)
      ])], 10, Am)
    ], 10, Lm));
  }
}), ps = /* @__PURE__ */ Me(km, [["__scopeId", "data-v-d39b7896"]]), Dm = { class: "fil-seed-root" }, Em = ["readonly", "title"], Tm = { class: "fil-seed-actions" }, Rm = /* @__PURE__ */ Ce({
  __name: "Seed",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Wt(), s = q({
      get: () => t.state.nodeState.mode ?? "random",
      set: (u) => {
        t.state.nodeState.mode = u;
      }
    }), o = q({
      get: () => Number(t.state.nodeState.seed ?? 0) || 0,
      set: (u) => {
        t.state.nodeState.seed = u;
      }
    });
    $e(
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
        Qe.warning("No last-run seed recorded yet");
        return;
      }
      o.value = t.state.lastRunSeed, s.value = "fixed";
    }
    function a() {
      const u = Math.floor(Math.random() * 1e9) & 2147483647;
      o.value = u, s.value = "fixed";
    }
    const r = q({
      get: () => s.value === "fixed" ? `${o.value}` : "random",
      set: (u) => {
        const c = parseInt(String(u).replace(/[^0-9]/g, ""), 10);
        Number.isNaN(c) || (o.value = c, s.value = "fixed");
      }
    });
    return (u, c) => (L(), P("div", Dm, [
      Ke(U("input", {
        "onUpdate:modelValue": c[0] || (c[0] = (d) => r.value = d),
        type: "text",
        class: "fil-seed-display",
        readonly: s.value === "random",
        title: s.value === "fixed" ? g(n)("sd_locked", "Locked seed") : g(n)("sd_auto_random", "Auto-random"),
        "aria-label": "Seed value"
      }, null, 8, Em), [
        [bt, r.value]
      ]),
      U("div", Tm, [
        Y(g(ot), {
          label: "🔀",
          variant: "standard",
          title: g(n)("sd_mode", "Random generates a new seed each run."),
          onClick: i
        }, null, 8, ["title"]),
        Y(g(ot), {
          label: "♻️",
          variant: "standard",
          title: g(n)("sd_use_last", "Reuse the seed from the last executed run."),
          onClick: l
        }, null, 8, ["title"]),
        Y(g(ot), {
          label: "🎲",
          variant: "accent",
          title: g(n)("sd_new_fixed", "Generate a new random fixed seed."),
          onClick: a
        }, null, 8, ["title"])
      ])
    ]));
  }
}), Pm = /* @__PURE__ */ Me(Rm, [["__scopeId", "data-v-90901c4f"]]), Nm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pm
}, Symbol.toStringTag, { value: "Module" })), Om = { class: "fil-provider-root" }, $m = { class: "fil-provider-row" }, Vm = {
  key: 0,
  class: "fil-model-filter-bar"
}, Bm = { class: "fil-model-filter-wrap" }, Hm = ["placeholder"], Um = { class: "fil-model-count" }, jm = 3e5, Wm = /* @__PURE__ */ Ce({
  __name: "ProviderLoader",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, n = Va(), { t: s } = Wt(), o = /* @__PURE__ */ ae("");
    function i(R, A) {
      return {
        get: () => t.state.nodeState[R] ?? A,
        set: (N) => {
          t.state.nodeState[R] = N;
        }
      };
    }
    const l = q(() => String(i("provider", "ollama").get()));
    function a(R) {
      i("provider", "ollama").set(R), o.value = "";
      const A = n.modelsFor(R);
      A.length ? (u(A[0]), I(), n.loadModels(R)) : (m.nodeState.model = "(loading...)", z());
    }
    const r = q(() => String(i("model", "(loading...)").get()));
    function u(R) {
      i("model", "(loading...)").set(R);
    }
    const c = q(() => Number(i("temperature", 0.7).get())), d = q(() => Number(i("max_tokens", 0).get())), f = q(() => Number(i("rate_limit_ms", 100).get())), p = q(() => Number(i("max_image_side", 1024).get())), m = t.state, _ = q(() => {
      const R = n.modelsFor(l.value);
      return R.length ? R : ["(no models)"];
    }), x = q(() => n.modelsFor(l.value).length > 0), y = q(() => {
      const R = _.value;
      if (!o.value || !x.value) return R;
      const A = o.value.toLowerCase();
      return R.filter((N) => N.toLowerCase().includes(A));
    }), w = q(() => {
      if (!x.value) return "";
      const R = n.modelsFor(l.value).length, A = y.value.length;
      return A === R ? `${R}` : `${A} of ${R}`;
    }), D = q(
      () => Wn.map((R) => ({ value: R, label: Ba[R] ?? R, icon: Ha[R] }))
    ), v = q(() => {
      const R = n.visionModelsFor(l.value);
      return y.value.map((A) => ({
        value: A,
        badge: R.includes(A) ? "👁" : void 0
      }));
    }), S = q(() => n.isLoading(l.value)), E = q(() => n.probeState[l.value]), T = q(() => n.cachedAgeLabel(l.value));
    let O = null;
    $e(() => t.state.nodeState, () => {
    }, { deep: !0 });
    function I() {
      const R = t.state.node;
      if (!R) return;
      const A = le(R, "model");
      if (!A) return;
      const N = n.modelsFor(l.value), Q = N.length ? N : ["(no models)"];
      A.options && (A.options.values = Q);
    }
    async function z() {
      try {
        await n.loadModels(l.value, !0);
        const R = n.modelsFor(l.value);
        u(R[0] ?? "(no models)"), I();
      } catch (R) {
        Qe.error(R instanceof Error ? R.message : String(R));
      }
    }
    return rn(async () => {
      n.loadDisplayNames();
      const R = n.modelsFor(l.value);
      if (R.length)
        r.value === "(loading...)" && u(R[0] ?? "(no models)"), I(), n.loadModels(l.value);
      else
        try {
          await n.loadModels(l.value);
          const A = n.modelsFor(l.value);
          r.value === "(loading...)" && u(A[0] ?? "(no models)"), I();
        } catch (A) {
          Qe.error(A instanceof Error ? A.message : String(A));
        }
      O = setInterval(() => {
        n.loadModels(l.value, !0);
      }, jm);
    }), zs(() => {
      O && clearInterval(O);
    }), (R, A) => (L(), P("div", Om, [
      Y(g(Uo), {
        options: D.value,
        "model-value": l.value,
        label: g(s)("lbl_provider", "🔌 Provider"),
        title: g(s)("tt_provider", "LLM provider to use — local (Ollama, LM Studio) or cloud."),
        "onUpdate:modelValue": a
      }, null, 8, ["options", "model-value", "label", "title"]),
      U("div", $m, [
        Y(g(Uo), {
          options: v.value,
          "model-value": r.value,
          label: g(s)("lbl_model", "🧠 Model"),
          title: g(s)("tt_model", "Choose which model to use. If the list is empty, refresh it or check the provider account."),
          "onUpdate:modelValue": u
        }, null, 8, ["options", "model-value", "label", "title"]),
        Y(g(ot), {
          label: "↻",
          title: g(s)("tt_refresh", "Reload the model list. Use after adding a new model or API key."),
          disabled: S.value || g(m).ui.refreshing === !0,
          onClick: z
        }, null, 8, ["title", "disabled"])
      ]),
      x.value ? (L(), P("div", Vm, [
        U("div", Bm, [
          Ke(U("input", {
            "onUpdate:modelValue": A[0] || (A[0] = (N) => o.value = N),
            type: "text",
            class: "fil-model-filter",
            placeholder: g(s)("prov_search_models", "Search models…")
          }, null, 8, Hm), [
            [bt, o.value]
          ])
        ]),
        U("span", Um, ee(w.value), 1)
      ])) : se("", !0),
      S.value ? (L(), Ie(g(bo), {
        key: 1,
        text: g(s)("prov_loading_models", "Loading models…")
      }, null, 8, ["text"])) : E.value && E.value.status && E.value.status !== "available" ? (L(), Ie(g(bo), {
        key: 2,
        err: !0,
        text: E.value.message || E.value.status
      }, null, 8, ["text"])) : T.value ? (L(), Ie(g(bo), {
        key: 3,
        text: `${g(s)("prov_models_updated", "Models updated")}: ${T.value}`
      }, null, 8, ["text"])) : se("", !0),
      Y(g(it), {
        "model-value": c.value,
        min: 0,
        max: 2,
        step: 0.05,
        label: g(s)("lbl_temperature", "🌡️ Temperature"),
        title: g(s)("tt_temperature", "Sampling temperature — higher is more creative, lower is more deterministic."),
        "onUpdate:modelValue": A[1] || (A[1] = (N) => g(m).nodeState.temperature = N)
      }, null, 8, ["model-value", "label", "title"]),
      Y(g(it), {
        "model-value": d.value,
        min: 0,
        max: 65536,
        step: 1,
        label: g(s)("lbl_max_tokens", "🔢 Max tokens"),
        title: g(s)("tt_provider_max_tokens", "Maximum tokens in the response. 0 = provider default (no explicit limit)."),
        "onUpdate:modelValue": A[2] || (A[2] = (N) => g(m).nodeState.max_tokens = N)
      }, null, 8, ["model-value", "label", "title"]),
      Y(g(it), {
        "model-value": f.value,
        min: 0,
        max: 5e3,
        step: 10,
        label: g(s)("lbl_rate_limit", "⏱️ Rate limit"),
        title: g(s)("tt_rate_limit", "Minimum delay between requests to this provider, to avoid rate limiting."),
        "onUpdate:modelValue": A[3] || (A[3] = (N) => g(m).nodeState.rate_limit_ms = N)
      }, null, 8, ["model-value", "label", "title"]),
      Y(g(it), {
        "model-value": p.value,
        min: 128,
        max: 4096,
        step: 64,
        label: g(s)("lbl_max_image_side", "🖼️ Max image side"),
        title: g(s)("tt_max_image_side", "Images are downscaled so their longest side does not exceed this value."),
        "onUpdate:modelValue": A[4] || (A[4] = (N) => g(m).nodeState.max_image_side = N)
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), Gm = /* @__PURE__ */ Me(Wm, [["__scopeId", "data-v-2aa7b099"]]), zm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gm
}, Symbol.toStringTag, { value: "Module" })), Km = {
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
}, qm = { class: "fil-scanner-root" }, Xm = ["title"], Ym = ["value", "placeholder", "onInput"], Jm = ["value", "placeholder", "onInput"], Qm = { class: "fil-section-block" }, Zm = ["title"], eh = { class: "fil-scanner-seed" }, th = { class: "fil-scanner-seed-row" }, nh = ["value", "readonly", "title"], sh = ["title"], oh = ["title"], ih = ["title"], lh = /* @__PURE__ */ Ce({
  __name: "OpticScanner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Wt(), s = Km.FiLOpticScanner, o = (s == null ? void 0 : s.inputs.required) ?? [], i = {
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
    function r(H) {
      const W = i[H];
      return W ? n(W[0], W[1]) : H.toUpperCase();
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
    function c(H) {
      const W = u[H.name];
      return W ? n(W, H.tooltip || "") : H.tooltip || "";
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
    function f(H) {
      if (H.label) return H.label;
      const W = d[H.name] || "", F = H.name.replace(/_/g, " ").replace(/\b\w/g, (C) => C.toUpperCase());
      return W ? `${W} ${F}` : F;
    }
    const p = /* @__PURE__ */ an({}), m = {
      photo_style: { emoji: "📷", labelKey: "scn_style_photo_label", labelFallback: "Photo" },
      nsfw_photo_style: { emoji: "🔞", labelKey: "scn_style_nsfw_photo_label", labelFallback: "NSFW Photo" },
      art_style: { emoji: "🎨", labelKey: "scn_style_art_label", labelFallback: "Art" },
      nsfw_art_style: { emoji: "🔞", labelKey: "scn_style_nsfw_art_label", labelFallback: "NSFW Art" }
    };
    function _(H) {
      const W = m[H], F = W ? `${W.emoji} ${n(W.labelKey, W.labelFallback)}: ` : "", C = String(v(H, "None") || "None");
      if (C === "None") return `${F}${n("scn_style_none", "None")}`;
      const M = C.indexOf("/"), Z = M === -1 ? C : C.slice(M + 1);
      return `${F}${Z}`;
    }
    function x(H) {
      p[H] = !0;
    }
    function y(H, W) {
      S(H, W), p[H] = !1;
    }
    const w = q(() => {
      var W;
      const H = {};
      for (const F of o) (H[W = F.section || "_"] ?? (H[W] = [])).push(F);
      return H;
    }), D = q(() => {
      const H = w.value.styles || [], W = [];
      for (let F = 0; F < H.length; F += 2) W.push(H.slice(F, F + 2));
      return W;
    });
    function v(H, W = "") {
      return t.state.nodeState[H] ?? t.state.initialValues[H] ?? W;
    }
    function S(H, W) {
      t.state.nodeState[H] = W;
    }
    const E = /* @__PURE__ */ new Set(["agent", "output", "advanced"]);
    function T(H) {
      const W = t.state.ui[`collapsed_${H}`];
      return W === void 0 ? E.has(H) : !!W;
    }
    function O(H, W) {
      t.state.ui[`collapsed_${H}`] = W;
    }
    $e(() => t.state.nodeState, () => {
    }, { deep: !0 });
    const I = q({
      get: () => t.state.nodeState.seed_mode ?? "random",
      set: (H) => {
        t.state.nodeState.seed_mode = H;
      }
    }), z = q({
      get: () => Number(t.state.nodeState.seed ?? -1) || -1,
      set: (H) => {
        t.state.nodeState.seed = H;
      }
    }), R = q(() => I.value === "fixed" ? `${z.value}` : "random");
    function A() {
      I.value = "random";
    }
    function N() {
      if (t.state.lastRunSeed == null) {
        Qe.warning("No last-run seed recorded yet");
        return;
      }
      z.value = t.state.lastRunSeed, I.value = "fixed";
    }
    function Q() {
      const H = Math.floor(Math.random() * 1e9) & 2147483647;
      z.value = H, I.value = "fixed";
    }
    return (H, W) => (L(), P("div", qm, [
      (L(!0), P(fe, null, Ae(w.value, (F, C) => (L(), P(fe, { key: C }, [
        C !== "styles" ? (L(), P("div", {
          key: 0,
          class: "fil-section-block",
          style: Ge({ "--fil-accent": l[String(C)] })
        }, [
          C !== "_" && C !== "prompt" ? (L(), Ie(g(wn), {
            key: 0,
            title: r(String(C)),
            "model-value": T(String(C)),
            "onUpdate:modelValue": (M) => O(String(C), M)
          }, null, 8, ["title", "model-value", "onUpdate:modelValue"])) : se("", !0),
          (L(!0), P(fe, null, Ae(F, (M) => Ke((L(), P("div", {
            key: M.name,
            class: "fil-w-row",
            title: c(M)
          }, [
            M.kind === "chip_grid" ? (L(), Ie(g(ll), {
              key: 0,
              options: M.values || [],
              "model-value": String(v(M.name, "")),
              columns: M.columns ?? 3,
              "onUpdate:modelValue": (Z) => S(M.name, Z)
            }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"])) : M.kind === "chip_list" ? (L(), Ie(g(Sp), {
              key: 1,
              options: M.values || [],
              "model-value": v(M.name, null),
              searchable: M.searchable ?? !0,
              "onUpdate:modelValue": (Z) => S(M.name, Z)
            }, null, 8, ["options", "model-value", "searchable", "onUpdate:modelValue"])) : M.kind === "segmented" ? (L(), Ie(g($t), {
              key: 2,
              options: M.options || [],
              "model-value": String(v(M.name, "")),
              label: f(M),
              "onUpdate:modelValue": (Z) => S(M.name, Z)
            }, null, 8, ["options", "model-value", "label", "onUpdate:modelValue"])) : M.kind === "string" && g(a).has(M.name) ? (L(), P("textarea", {
              key: 3,
              class: "fil-w-textarea",
              value: String(v(M.name, "")),
              placeholder: f(M),
              onInput: (Z) => S(M.name, Z.target.value)
            }, null, 40, Ym)) : M.kind === "string" ? (L(), P("input", {
              key: 4,
              type: "text",
              class: "fil-w-input",
              value: String(v(M.name, "")),
              placeholder: f(M),
              onInput: (Z) => S(M.name, Z.target.value)
            }, null, 40, Jm)) : (L(), Ie(g(ll), {
              key: 5,
              options: M.values || [],
              "model-value": String(v(M.name, "")),
              columns: M.columns ?? 3,
              "onUpdate:modelValue": (Z) => S(M.name, Z)
            }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"]))
          ], 8, Xm)), [
            [As, C === "_" || C === "prompt" || !T(String(C))]
          ])), 128))
        ], 4)) : se("", !0)
      ], 64))), 128)),
      U("div", {
        class: "fil-section-block",
        style: Ge({ "--fil-accent": l.advanced })
      }, [
        Y(g(wn), {
          title: r("advanced"),
          "model-value": T("advanced"),
          "onUpdate:modelValue": W[0] || (W[0] = (F) => O("advanced", F))
        }, null, 8, ["title", "model-value"]),
        Ke(U("div", Qm, [
          (L(!0), P(fe, null, Ae(D.value, (F, C) => (L(), P("div", {
            key: `style-pair-${C}`,
            class: "fil-style-pair-row"
          }, [
            (L(!0), P(fe, null, Ae(F, (M) => (L(), P("div", {
              key: M.name,
              class: "fil-style-pair-item",
              title: c(M)
            }, [
              Y(g(ot), {
                variant: "full",
                label: _(M.name),
                onClick: (Z) => x(M.name)
              }, null, 8, ["label", "onClick"]),
              Y(g(Ta), {
                open: !!p[M.name],
                title: f(M),
                width: "640px",
                "onUpdate:open": (Z) => p[M.name] = Z
              }, {
                default: Ws(() => [
                  Y(g(Mm), {
                    styles: M.values || [],
                    "model-value": String(v(M.name, "None")),
                    onSelect: (Z) => y(M.name, Z)
                  }, null, 8, ["styles", "model-value", "onSelect"])
                ]),
                _: 2
              }, 1032, ["open", "title", "onUpdate:open"])
            ], 8, Zm))), 128))
          ]))), 128))
        ], 512), [
          [As, !T("advanced")]
        ])
      ], 4),
      U("div", eh, [
        U("div", th, [
          U("input", {
            value: R.value,
            type: "text",
            class: ge(["fil-scanner-seed-field", { "is-random": I.value === "random" }]),
            readonly: I.value === "random",
            "aria-label": "Seed value",
            title: I.value === "fixed" ? g(n)("scn_seed_locked", "Locked seed") : g(n)("scn_seed_auto_random", "Auto-random — a new seed is generated each run"),
            onInput: W[1] || (W[1] = (F) => z.value = Number(F.target.value) || 0)
          }, null, 42, nh),
          U("button", {
            type: "button",
            class: ge(["fil-scanner-seed-pill", { active: I.value === "random" }]),
            title: g(n)("scn_seed_mode_tt", "Random generates a new seed each run."),
            onClick: A
          }, ee(g(n)("scn_seed_random", "Random")), 11, sh),
          U("button", {
            type: "button",
            class: "fil-scanner-seed-pill",
            title: t.state.lastRunSeed != null ? `${g(n)("scn_seed_use_last_prefix", "Reuse the last run's seed:")} ${t.state.lastRunSeed}` : g(n)("scn_seed_use_last_tt", "Reuse the seed from the last executed run."),
            onClick: N
          }, ee(g(n)("scn_seed_use_last", "Use last")), 9, oh),
          U("button", {
            type: "button",
            class: "fil-scanner-seed-pill fil-scanner-seed-pill-accent",
            title: g(n)("scn_seed_new_fixed_tt", "Generate a new random fixed seed."),
            onClick: Q
          }, ee(g(n)("scn_seed_new_fixed", "New fixed")), 9, ih)
        ])
      ])
    ]));
  }
}), ah = /* @__PURE__ */ Me(lh, [["__scopeId", "data-v-875167a9"]]), rh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ah
}, Symbol.toStringTag, { value: "Module" })), ch = { class: "fil-cleaner-root" }, uh = ["aria-pressed", "title", "onClick"], dh = { class: "fil-cleaner-label" }, fh = ["aria-pressed", "title", "onClick"], ph = { class: "fil-cleaner-label" }, mh = /* @__PURE__ */ Ce({
  __name: "NeuroCleaner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Wt(), s = [
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
    return $e(() => t.state.nodeState, () => {
    }, { deep: !0 }), (d, f) => (L(), P("div", ch, [
      Y(g(wn), {
        title: g(n)("nc_section_vram", "🎮 VRAM / Models"),
        "model-value": u("vram"),
        "onUpdate:modelValue": f[0] || (f[0] = (p) => c("vram", p))
      }, null, 8, ["title", "model-value"]),
      (L(), P(fe, null, Ae(s, (p) => Ke(U("button", {
        key: p.name,
        type: "button",
        class: ge(["fil-cleaner-row", { active: l(p.name, p.defaultOn) }]),
        "aria-pressed": l(p.name, p.defaultOn),
        title: i(p.name, p.label),
        onClick: (m) => a(p.name, p.defaultOn)
      }, [
        f[2] || (f[2] = U("span", { class: "fil-cleaner-dot" }, null, -1)),
        U("span", dh, ee(g(n)(`nc_lbl_${p.name}`, p.label)), 1)
      ], 10, uh), [
        [As, !u("vram")]
      ])), 64)),
      Y(g(wn), {
        title: g(n)("nc_section_ram", "💾 RAM / Cache (advanced)"),
        "model-value": u("ram"),
        "onUpdate:modelValue": f[1] || (f[1] = (p) => c("ram", p))
      }, null, 8, ["title", "model-value"]),
      (L(), P(fe, null, Ae(o, (p) => Ke(U("button", {
        key: p.name,
        type: "button",
        class: ge(["fil-cleaner-row", { active: l(p.name, p.defaultOn) }]),
        "aria-pressed": l(p.name, p.defaultOn),
        title: i(p.name, p.label),
        onClick: (m) => a(p.name, p.defaultOn)
      }, [
        f[3] || (f[3] = U("span", { class: "fil-cleaner-dot" }, null, -1)),
        U("span", ph, ee(g(n)(`nc_lbl_${p.name}`, p.label)), 1)
      ], 10, fh), [
        [As, !u("ram")]
      ])), 64))
    ]));
  }
}), hh = /* @__PURE__ */ Me(mh, [["__scopeId", "data-v-1f9cbf0d"]]), gh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hh
}, Symbol.toStringTag, { value: "Module" }));
function vo(e) {
  return Math.min(1, Math.max(0, e));
}
const _h = { class: "fil-cmp-root" }, bh = {
  key: 0,
  class: "fil-cmp-placeholder"
}, vh = { class: "fil-cmp-save-row" }, yh = {
  key: 2,
  class: "fil-cmp-settings"
}, wh = /* @__PURE__ */ Ce({
  __name: "BeforeAfterCompare",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Wt(), s = q({
      get: () => t.state.ui.compare_mode ?? "wipe",
      set: (F) => {
        t.state.ui.compare_mode = F, A();
      }
    }), o = q({
      get: () => Number(t.state.ui.compare_position ?? 0.5),
      set: (F) => {
        t.state.ui.compare_position = vo(F), A();
      }
    }), i = q({
      get: () => Number(t.state.ui.compare_opacity ?? 0.5),
      set: (F) => {
        t.state.ui.compare_opacity = vo(F), A();
      }
    }), l = q({
      get: () => t.state.ui.settings_collapsed !== !1,
      set: (F) => {
        t.state.ui.settings_collapsed = F;
      }
    }), a = q(() => [
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
    }, c = q(() => t.state.nodeState.swap ? "ON" : "OFF");
    function d(F) {
      t.state.nodeState.swap = F === "ON";
    }
    const f = q(() => String(t.state.nodeState.resize_mode ?? "Off"));
    function p(F) {
      t.state.nodeState.resize_mode = F;
    }
    const m = q(() => Number(t.state.nodeState.max_resolution ?? 4096) || 4096);
    function _(F) {
      t.state.nodeState.max_resolution = F;
    }
    const x = q(() => f.value !== "Off"), y = q(() => t.state.ui.compare_images ?? {}), w = /* @__PURE__ */ ae(null), D = /* @__PURE__ */ ae(null), v = /* @__PURE__ */ ae(!1), S = q(() => !!w.value || !!D.value);
    function E(F) {
      return new Promise((C, M) => {
        const Z = new Image();
        Z.onload = () => C(Z), Z.onerror = () => M(new Error("image load failed")), Z.src = F;
      });
    }
    const T = /* @__PURE__ */ ae(null), O = /* @__PURE__ */ ae(null);
    let I = 0, z = null;
    $e(
      () => t.state.ui.compare_images,
      async (F) => {
        var te, _e;
        const C = F ?? {}, M = (te = C.a) == null ? void 0 : te[0], Z = (_e = C.b) == null ? void 0 : _e[0];
        v.value = !1, w.value = null, D.value = null;
        try {
          M && (w.value = await E(sl(M))), Z && (D.value = await E(sl(Z)));
        } catch {
          v.value = !0;
        }
        A();
      },
      { deep: !0, immediate: !0 }
    ), $e([s, o, i], () => A());
    function R(F, C, M, Z) {
      if (!M || !Z) return { x: 0, y: 0, w: F, h: C };
      const te = F / C, _e = M / Z;
      let et, re;
      return _e > te ? (et = F, re = F / _e) : (re = C, et = C * _e), { x: (F - et) / 2, y: (C - re) / 2, w: et, h: re };
    }
    function A() {
      I || (I = requestAnimationFrame(() => {
        I = 0, N();
      }));
    }
    function N() {
      const F = O.value, C = T.value;
      if (!F || !C) return;
      const M = window.devicePixelRatio || 1, Z = C.clientWidth, te = C.clientHeight;
      if (Z <= 0 || te <= 0) return;
      const _e = Math.round(Z * M), et = Math.round(te * M);
      (F.width !== _e || F.height !== et) && (F.width = _e, F.height = et);
      const re = F.getContext("2d");
      if (!re) return;
      re.setTransform(M, 0, 0, M, 0, 0), re.clearRect(0, 0, Z, te);
      const Ve = w.value, ke = D.value;
      if (!Ve && !ke) return;
      if (s.value === "side-by-side") {
        const qe = Z / 2;
        if (Ve) {
          const Re = R(qe, te, Ve.naturalWidth, Ve.naturalHeight);
          re.drawImage(Ve, Re.x, Re.y, Re.w, Re.h);
        }
        if (ke) {
          const Re = R(qe, te, ke.naturalWidth, ke.naturalHeight);
          re.drawImage(ke, qe + Re.x, Re.y, Re.w, Re.h);
        }
        re.strokeStyle = "rgba(255,255,255,0.2)", re.beginPath(), re.moveTo(qe, 0), re.lineTo(qe, te), re.stroke();
        return;
      }
      const Gt = Ve ?? ke, de = R(Z, te, Gt.naturalWidth, Gt.naturalHeight);
      if (s.value === "before") {
        Ve && re.drawImage(Ve, de.x, de.y, de.w, de.h);
        return;
      }
      if (s.value === "after") {
        ke && re.drawImage(ke, de.x, de.y, de.w, de.h);
        return;
      }
      if (s.value === "overlay") {
        Ve && re.drawImage(Ve, de.x, de.y, de.w, de.h), ke && (re.save(), re.globalAlpha = i.value, re.drawImage(ke, de.x, de.y, de.w, de.h), re.restore());
        return;
      }
      if (s.value === "difference") {
        Ve && re.drawImage(Ve, de.x, de.y, de.w, de.h), ke && (re.save(), re.globalCompositeOperation = "difference", re.drawImage(ke, de.x, de.y, de.w, de.h), re.restore());
        return;
      }
      if (Ve && re.drawImage(Ve, de.x, de.y, de.w, de.h), ke) {
        const qe = de.x + de.w * o.value;
        re.save(), re.beginPath(), re.rect(qe, de.y, de.x + de.w - qe, de.h), re.clip(), re.drawImage(ke, de.x, de.y, de.w, de.h), re.restore();
        const Re = getComputedStyle(C).getPropertyValue("--fil-accent").trim() || "#e8724c";
        re.save(), re.strokeStyle = Re, re.lineWidth = 2, re.shadowColor = Re, re.shadowBlur = 6, re.beginPath(), re.moveTo(qe, de.y), re.lineTo(qe, de.y + de.h), re.stroke(), re.restore();
      }
    }
    function Q(F) {
      const C = T.value;
      if (!C) return;
      const M = C.getBoundingClientRect();
      o.value = vo((F.clientX - M.left) / M.width);
    }
    function H(F) {
      if (s.value !== "wipe") return;
      Q(F);
      const C = (Z) => Q(Z), M = () => {
        window.removeEventListener("pointermove", C), window.removeEventListener("pointerup", M);
      };
      window.addEventListener("pointermove", C), window.addEventListener("pointerup", M);
    }
    rn(() => {
      z = new ResizeObserver(() => A()), T.value && z.observe(T.value), A();
    }), xn(() => {
      z == null || z.disconnect(), I && cancelAnimationFrame(I);
    });
    async function W(F) {
      var M, Z;
      const C = F === "a" ? (M = y.value.a) == null ? void 0 : M[0] : (Z = y.value.b) == null ? void 0 : Z[0];
      if (!C) {
        Qe.warning(n("cmp_no_preview", "Run the node to see a preview"));
        return;
      }
      try {
        const te = await Jt.saveCompareImage(C);
        Qe.success(`${n("cmp_saved", "Saved to output")}: ${te.image.filename}`);
      } catch (te) {
        Qe.warning(te instanceof Error ? te.message : "Save failed");
      }
    }
    return (F, C) => {
      var M, Z;
      return L(), P("div", _h, [
        Y(g(Uo), {
          options: a.value,
          "model-value": s.value,
          label: g(n)("lbl_mode", "⚙️ Mode"),
          title: g(n)("cmp_view_mode", "How to compare the two images."),
          "onUpdate:modelValue": C[0] || (C[0] = (te) => s.value = te)
        }, null, 8, ["options", "model-value", "label", "title"]),
        U("div", {
          ref_key: "wrapRef",
          ref: T,
          class: "fil-cmp-canvas-wrap"
        }, [
          U("canvas", {
            ref_key: "canvasRef",
            ref: O,
            class: ge(["fil-cmp-canvas", { "is-wipe": s.value === "wipe" }]),
            onPointerdown: H
          }, null, 34),
          S.value ? se("", !0) : (L(), P("div", bh, ee(v.value ? g(n)("cmp_load_error", "Could not load preview images") : g(n)("cmp_no_preview", "Run the node to see a preview")), 1))
        ], 512),
        s.value === "wipe" ? (L(), Ie(g(it), {
          key: 0,
          "model-value": o.value,
          min: 0,
          max: 1,
          step: 0.01,
          label: g(n)("cmp_position", "Position"),
          "onUpdate:modelValue": C[1] || (C[1] = (te) => o.value = te)
        }, null, 8, ["model-value", "label"])) : se("", !0),
        s.value === "overlay" ? (L(), Ie(g(it), {
          key: 1,
          "model-value": i.value,
          min: 0,
          max: 1,
          step: 0.01,
          label: g(n)("cmp_opacity", "Opacity"),
          "onUpdate:modelValue": C[2] || (C[2] = (te) => i.value = te)
        }, null, 8, ["model-value", "label"])) : se("", !0),
        U("div", vh, [
          Y(g(ot), {
            variant: "sm",
            label: g(n)("cmp_save_before", "💾 Save before"),
            disabled: !((M = y.value.a) != null && M.length),
            onClick: C[3] || (C[3] = (te) => W("a"))
          }, null, 8, ["label", "disabled"]),
          Y(g(ot), {
            variant: "sm",
            label: g(n)("cmp_save_after", "💾 Save after"),
            disabled: !((Z = y.value.b) != null && Z.length),
            onClick: C[4] || (C[4] = (te) => W("b"))
          }, null, 8, ["label", "disabled"])
        ]),
        Y(g(wn), {
          title: g(n)("cmp_settings", "Settings"),
          modelValue: l.value,
          "onUpdate:modelValue": C[5] || (C[5] = (te) => l.value = te)
        }, null, 8, ["title", "modelValue"]),
        l.value ? se("", !0) : (L(), P("div", yh, [
          Y(g($t), {
            options: ["ON", "OFF"],
            "option-labels": { ON: g(n)("cmp_swap_on_label", "🔄 Swapped"), OFF: g(n)("cmp_swap_off_label", "↔️ Normal") },
            "model-value": c.value,
            label: g(n)("lbl_swap", "🔁 Swap before/after"),
            title: g(n)("cmp_swap", "Swap which image is shown as before/after."),
            "onUpdate:modelValue": d
          }, null, 8, ["option-labels", "model-value", "label", "title"]),
          Y(g($t), {
            options: [...r],
            "option-labels": u,
            "model-value": f.value,
            label: g(n)("lbl_resize_mode", "🖥️ Resize mode"),
            title: g(n)("cmp_resize_mode", "Off keeps images untouched. Preview modes downscale for a lighter preview and, optionally, output."),
            "onUpdate:modelValue": p
          }, null, 8, ["options", "model-value", "label", "title"]),
          x.value ? (L(), Ie(g(it), {
            key: 0,
            "model-value": m.value,
            min: 256,
            max: 8192,
            step: 64,
            label: g(n)("lbl_max_resolution", "🖼️ Max resolution"),
            title: g(n)("cmp_max_resolution", "Maximum width or height used when resizing is enabled."),
            "onUpdate:modelValue": _
          }, null, 8, ["model-value", "label", "title"])) : se("", !0)
        ]))
      ]);
    };
  }
}), Sh = /* @__PURE__ */ Me(wh, [["__scopeId", "data-v-2abe5720"]]), xh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sh
}, Symbol.toStringTag, { value: "Module" })), Ch = { class: "fil-up-root" }, Fh = { class: "fil-up-row fil-up-row-overlap" }, Mh = ["title"], Lh = ["title"], Ih = { class: "fil-up-row" }, Ah = ["title"], kh = ["title"], Dh = /* @__PURE__ */ Ce({
  __name: "UpscaleTileCalc",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Wt(), s = ["Low VRAM", "Balanced", "High VRAM", "Max Quality", "Ultra Quality"], o = {
      "Low VRAM": "🪫 Low VRAM",
      Balanced: "⚖️ Balanced",
      "High VRAM": "🔋 High VRAM",
      "Max Quality": "💎 Max Quality",
      "Ultra Quality": "👑 Ultra Quality"
    };
    function i(D, v) {
      return q({
        get: () => Number(t.state.nodeState[D] ?? t.state.initialValues[D] ?? v) || v,
        set: (S) => {
          t.state.nodeState[D] = S;
        }
      });
    }
    function l(D, v) {
      return q({
        get: () => t.state.nodeState[D] ?? t.state.initialValues[D] ?? v ? "ON" : "OFF",
        set: (S) => {
          t.state.nodeState[D] = S === "ON";
        }
      });
    }
    const a = i("upscale_factor", 2), r = i("tile_size", 1024), u = i("tile_overlap", 64), c = i("manual_tile_cols", 0), d = i("manual_tile_rows", 0), f = l("auto_overlap", !1), p = l("auto_mode", !1), m = l("non_square_tiles", !1), _ = l("auto_fix_thin_edges", !1), x = q({
      get: () => String(t.state.nodeState.auto_profile ?? t.state.initialValues.auto_profile ?? "Balanced"),
      set: (D) => {
        t.state.nodeState.auto_profile = D;
      }
    });
    function y(D) {
      return !!t.state.ui[`collapsed_${D}`];
    }
    function w(D, v) {
      t.state.ui[`collapsed_${D}`] = v;
    }
    return $e(() => t.state.nodeState, () => {
    }, { deep: !0 }), (D, v) => (L(), P("div", Ch, [
      Y(g(it), {
        "model-value": g(a),
        min: 0.1,
        max: 8,
        step: 0.25,
        label: g(n)("lbl_upscale_factor", "🔍 Upscale factor"),
        title: g(n)("utc_factor", "Upscale multiplier."),
        "onUpdate:modelValue": v[0] || (v[0] = (S) => a.value = S)
      }, null, 8, ["model-value", "label", "title"]),
      Y(g(wn), {
        title: g(n)("utc_section_auto", "⚙️ Auto / advanced"),
        "model-value": y("auto"),
        "onUpdate:modelValue": v[1] || (v[1] = (S) => w("auto", S))
      }, null, 8, ["title", "model-value"]),
      y("auto") ? se("", !0) : (L(), P(fe, { key: 0 }, [
        Y(g(ps), {
          "model-value": g(p),
          label: g(n)("lbl_full_auto", "🤖 Full auto"),
          title: g(n)("utc_auto_mode", "Pick tile size/overlap automatically from the selected VRAM profile."),
          "onUpdate:modelValue": v[2] || (v[2] = (S) => p.value = S)
        }, null, 8, ["model-value", "label", "title"]),
        g(p) === "ON" ? (L(), Ie(g($t), {
          key: 0,
          options: [...s],
          "option-labels": o,
          "model-value": x.value,
          label: g(n)("lbl_auto_profile", "🎚️ Auto profile"),
          title: g(n)("utc_auto_profile", "VRAM/quality profile used when Full Auto is on."),
          "onUpdate:modelValue": v[3] || (v[3] = (S) => x.value = S)
        }, null, 8, ["options", "model-value", "label", "title"])) : se("", !0),
        g(p) === "OFF" ? (L(), P(fe, { key: 1 }, [
          U("div", Fh, [
            U("label", {
              class: "fil-w-label",
              title: g(n)("utc_tile_size", "Base tile size.")
            }, ee(g(n)("lbl_tile_size", "🔲 Tile size")), 9, Mh),
            Y(g(nn), {
              modelValue: g(r),
              "onUpdate:modelValue": v[4] || (v[4] = (S) => /* @__PURE__ */ ye(r) ? r.value = S : null),
              min: 64,
              max: 2048,
              step: 64
            }, null, 8, ["modelValue"]),
            U("label", {
              class: "fil-w-label",
              title: g(n)("utc_overlap", "Tile overlap.")
            }, ee(g(n)("lbl_overlap", "🧵 Overlap")), 9, Lh),
            Y(g(nn), {
              modelValue: g(u),
              "onUpdate:modelValue": v[5] || (v[5] = (S) => /* @__PURE__ */ ye(u) ? u.value = S : null),
              min: 0,
              max: 512,
              step: 8,
              disabled: g(f) === "ON"
            }, null, 8, ["modelValue", "disabled"]),
            Y(g(ps), {
              bare: "",
              "model-value": g(f),
              label: g(n)("lbl_auto_overlap", "🧵 Auto"),
              title: g(n)("utc_auto_overlap", "Derive overlap automatically from tile size (~12.5%) instead of the fixed value above."),
              "onUpdate:modelValue": v[6] || (v[6] = (S) => f.value = S)
            }, null, 8, ["model-value", "label", "title"])
          ]),
          U("div", Ih, [
            U("label", {
              class: "fil-w-label",
              title: g(n)("utc_manual_cols", "Force this many tile columns. 0 = compute from tile size.")
            }, ee(g(n)("lbl_manual_cols", "↔️ Cols")), 9, Ah),
            Y(g(nn), {
              modelValue: g(c),
              "onUpdate:modelValue": v[7] || (v[7] = (S) => /* @__PURE__ */ ye(c) ? c.value = S : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"]),
            U("label", {
              class: "fil-w-label",
              title: g(n)("utc_manual_rows", "Force this many tile rows. 0 = compute from tile size.")
            }, ee(g(n)("lbl_manual_rows", "↕️ Rows")), 9, kh),
            Y(g(nn), {
              modelValue: g(d),
              "onUpdate:modelValue": v[8] || (v[8] = (S) => /* @__PURE__ */ ye(d) ? d.value = S : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"])
          ]),
          Y(g(ps), {
            "model-value": g(_),
            label: g(n)("lbl_auto_fix_edges", "🩹 Auto-fix thin edges"),
            title: g(n)("utc_auto_fix_edges", "Shrink tile_size to the next standard size instead of just warning when the grid would leave a thin edge tile."),
            "onUpdate:modelValue": v[9] || (v[9] = (S) => _.value = S)
          }, null, 8, ["model-value", "label", "title"])
        ], 64)) : se("", !0)
      ], 64)),
      Y(g(ps), {
        "model-value": g(m),
        label: g(n)("lbl_non_square", "📐 Non-square tiles"),
        title: g(n)("utc_non_square", "Allow rectangular tiles instead of forcing square ones."),
        "onUpdate:modelValue": v[10] || (v[10] = (S) => m.value = S)
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), Eh = /* @__PURE__ */ Me(Dh, [["__scopeId", "data-v-ff1dd2df"]]), Ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Eh
}, Symbol.toStringTag, { value: "Module" })), Th = { class: "fil-hrf-root" }, Rh = {
  key: 2,
  class: "fil-hrf-seed-row"
}, Ph = ["value", "readonly", "title"], Nh = ["title"], Oh = ["title"], $h = ["title"], Vh = /* @__PURE__ */ Ce({
  __name: "HiResFix",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Wt();
    function s(F, C) {
      return q({
        get: () => Number(t.state.nodeState[F] ?? t.state.initialValues[F] ?? C) || C,
        set: (M) => {
          t.state.nodeState[F] = M;
        }
      });
    }
    function o(F, C) {
      return q({
        get: () => String(t.state.nodeState[F] ?? t.state.initialValues[F] ?? C),
        set: (M) => {
          t.state.nodeState[F] = M;
        }
      });
    }
    function i(F, C) {
      return q({
        get: () => t.state.nodeState[F] ?? t.state.initialValues[F] ?? C ? "ON" : "OFF",
        set: (M) => {
          t.state.nodeState[F] = M === "ON";
        }
      });
    }
    function l(F, C) {
      var _e;
      const M = t.state.node, Z = M ? le(M, F) : null, te = (_e = Z == null ? void 0 : Z.options) == null ? void 0 : _e.values;
      return Array.isArray(te) && te.length ? te : C;
    }
    const a = o("upscale_type", "latent"), r = o("hires_ckpt_name", "(use same)"), u = o("latent_upscaler", "nearest-exact"), c = o("pixel_upscaler", ""), d = s("upscale_by", 1.25), f = i("use_same_seed", !0), p = s("denoise", 0.56), m = s("hires_steps", 12), _ = s("iterations", 1), x = i("use_controlnet", !1), y = o("control_net_name", ""), w = s("strength", 1), D = o("preprocessor", "none"), v = q(() => l("hires_ckpt_name", ["(use same)"])), S = ["nearest-exact", "bilinear", "area", "bicubic", "bislerp"], E = q(() => l("pixel_upscaler", ["(none)"])), T = q(() => l("control_net_name", ["(none)"])), O = q(() => l("preprocessor", ["none", "canny"])), I = q(() => a.value === "latent"), z = q(() => a.value === "pixel" || a.value === "both"), R = q({
      get: () => t.state.nodeState.seed_mode ?? "random",
      set: (F) => {
        t.state.nodeState.seed_mode = F;
      }
    }), A = q({
      get: () => Number(t.state.nodeState.seed ?? 0) || 0,
      // Write the native seed widget directly, not just nodeState: the
      // createSyncedNodeState mirror doesn't reach the seed widget (its value is
      // a prototype accessor tied to control_after_generate's linked-widget
      // machinery, unlike the plain numeric widgets), so a fixed seed set only
      // via nodeState never reaches the queued prompt. Direct assignment sticks.
      set: (F) => {
        t.state.nodeState.seed = F;
        const C = t.state.node ? le(t.state.node, "seed") : null;
        C && (C.value = F);
      }
    }), N = q(() => R.value === "fixed" ? `${A.value}` : "random");
    $e([f, R], ([F, C]) => {
      const M = t.state.node, Z = M ? le(M, "control_after_generate") : null;
      Z && (Z.value = F === "ON" || C === "fixed" ? "fixed" : "randomize");
    }, { immediate: !0 });
    function Q() {
      R.value = "random";
    }
    function H() {
      const F = t.state.node, C = F ? le(F, "seed") : null, M = C && Number.isFinite(Number(C.value)) ? Number(C.value) : t.state.lastRunSeed;
      if (M == null || !Number.isFinite(M)) {
        Qe.warning("No last-run seed recorded yet");
        return;
      }
      A.value = M, R.value = "fixed";
    }
    function W() {
      const F = Math.floor(Math.random() * 1e9) & 2147483647;
      A.value = F, R.value = "fixed";
    }
    return (F, C) => (L(), P("div", Th, [
      Y(g($t), {
        options: ["latent", "pixel", "both"],
        "option-labels": { latent: "🌀 latent", pixel: "🖼️ pixel", both: "🔀 both" },
        "model-value": g(a),
        label: g(n)("lbl_upscale_type", "⬆️ Upscale type"),
        title: g(n)("hrf_upscale_type", "Upscale in latent space, pixel space, or both."),
        "onUpdate:modelValue": C[0] || (C[0] = (M) => a.value = M)
      }, null, 8, ["model-value", "label", "title"]),
      I.value ? (L(), Ie(g(ds), {
        key: 0,
        options: S,
        "model-value": g(u),
        label: g(n)("lbl_latent_up", "🌀 Latent upscaler"),
        title: g(n)("hrf_latent_up", "Latent upscale method."),
        "onUpdate:modelValue": C[1] || (C[1] = (M) => u.value = M)
      }, null, 8, ["model-value", "label", "title"])) : se("", !0),
      z.value ? (L(), Ie(g(ds), {
        key: 1,
        options: E.value,
        "model-value": g(c),
        label: g(n)("lbl_pixel_up", "🖼️ Pixel upscaler"),
        title: g(n)("hrf_pixel_up", "Pixel upscale model (from upscale_models)."),
        "onUpdate:modelValue": C[2] || (C[2] = (M) => c.value = M)
      }, null, 8, ["options", "model-value", "label", "title"])) : se("", !0),
      Y(g(ds), {
        options: v.value,
        "model-value": g(r),
        label: g(n)("lbl_hires_ckpt", "📦 Hires checkpoint"),
        title: g(n)("hrf_ckpt", "Checkpoint for the hires pass. (use same) reuses the base model."),
        "onUpdate:modelValue": C[3] || (C[3] = (M) => r.value = M)
      }, null, 8, ["options", "model-value", "label", "title"]),
      Y(g(it), {
        "model-value": g(d),
        min: 0.01,
        max: 8,
        step: 0.05,
        label: g(n)("lbl_upscale_by", "🔍 Upscale by"),
        title: g(n)("hrf_upscale_by", "Upscale multiplier."),
        "onUpdate:modelValue": C[4] || (C[4] = (M) => d.value = M)
      }, null, 8, ["model-value", "label", "title"]),
      Y(g(it), {
        "model-value": g(p),
        min: 0,
        max: 1,
        step: 0.01,
        label: g(n)("lbl_hrf_denoise", "💧 Denoise"),
        title: g(n)("hrf_denoise", "Denoise strength for the hires re-sample."),
        "onUpdate:modelValue": C[5] || (C[5] = (M) => p.value = M)
      }, null, 8, ["model-value", "label", "title"]),
      Y(g(nn), {
        modelValue: g(m),
        "onUpdate:modelValue": C[6] || (C[6] = (M) => /* @__PURE__ */ ye(m) ? m.value = M : null),
        min: 1,
        max: 1e4,
        step: 1,
        label: g(n)("lbl_hires_steps", "🪜 Hires steps"),
        title: g(n)("hrf_steps", "Steps for the hires re-sample.")
      }, null, 8, ["modelValue", "label", "title"]),
      Y(g(nn), {
        modelValue: g(_),
        "onUpdate:modelValue": C[7] || (C[7] = (M) => /* @__PURE__ */ ye(_) ? _.value = M : null),
        min: 0,
        max: 5,
        step: 1,
        label: g(n)("lbl_iterations", "🔁 Iterations"),
        title: g(n)("hrf_iterations", "How many upscale+resample passes to run.")
      }, null, 8, ["modelValue", "label", "title"]),
      Y(g($t), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "♻️ same seed", OFF: "🎲 own" },
        "model-value": g(f),
        label: g(n)("lbl_use_same_seed", "🌱 Seed source"),
        title: g(n)("hrf_same_seed", "Reuse the samplers seed for the hires pass."),
        "onUpdate:modelValue": C[8] || (C[8] = (M) => f.value = M)
      }, null, 8, ["model-value", "label", "title"]),
      g(f) === "OFF" ? (L(), P("div", Rh, [
        U("input", {
          value: N.value,
          type: "text",
          class: ge(["fil-hrf-seed-field", { "is-random": R.value === "random" }]),
          readonly: R.value === "random",
          "aria-label": "Hires seed value",
          title: R.value === "fixed" ? g(n)("hrf_seed_locked", "Locked hires seed") : g(n)("hrf_seed_auto_random", "Auto-random — a new hires seed is generated each run"),
          onInput: C[9] || (C[9] = (M) => A.value = Number(M.target.value) || 0)
        }, null, 42, Ph),
        U("button", {
          type: "button",
          class: ge(["fil-hrf-seed-pill", { active: R.value === "random" }]),
          title: g(n)("hrf_seed_mode_tt", "Random generates a new hires seed each run."),
          onClick: Q
        }, ee(g(n)("hrf_seed_random", "Random")), 11, Nh),
        U("button", {
          type: "button",
          class: "fil-hrf-seed-pill",
          title: t.state.lastRunSeed != null ? `${g(n)("hrf_seed_use_last_prefix", "Reuse the last run's hires seed:")} ${t.state.lastRunSeed}` : g(n)("hrf_seed_use_last_tt", "Reuse the hires seed from the last executed run."),
          onClick: H
        }, ee(g(n)("hrf_seed_use_last", "Use last")), 9, Oh),
        U("button", {
          type: "button",
          class: "fil-hrf-seed-pill fil-hrf-seed-pill-accent",
          title: g(n)("hrf_seed_new_fixed_tt", "Generate a new random fixed hires seed."),
          onClick: W
        }, ee(g(n)("hrf_seed_new_fixed", "New fixed")), 9, $h)
      ])) : se("", !0),
      Y(g($t), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "🕹️ ON", OFF: "OFF" },
        "model-value": g(x),
        label: g(n)("lbl_use_cn", "🕹️ Use ControlNet"),
        title: g(n)("hrf_use_cn", "Guide the hires pass with a ControlNet. Tile ControlNets work without a preprocessor."),
        "onUpdate:modelValue": C[10] || (C[10] = (M) => x.value = M)
      }, null, 8, ["model-value", "label", "title"]),
      g(x) === "ON" ? (L(), P(fe, { key: 3 }, [
        Y(g(ds), {
          options: T.value,
          "model-value": g(y),
          label: g(n)("lbl_cn_name", "🧩 ControlNet model"),
          title: g(n)("hrf_cn_name", "ControlNet model to apply."),
          "onUpdate:modelValue": C[11] || (C[11] = (M) => y.value = M)
        }, null, 8, ["options", "model-value", "label", "title"]),
        Y(g(it), {
          "model-value": g(w),
          min: 0,
          max: 10,
          step: 0.01,
          label: g(n)("lbl_cn_strength", "💪 Strength"),
          title: g(n)("hrf_cn_strength", "ControlNet strength."),
          "onUpdate:modelValue": C[12] || (C[12] = (M) => w.value = M)
        }, null, 8, ["model-value", "label", "title"]),
        Y(g($t), {
          options: O.value,
          "option-labels": { none: "🚫 none", canny: "🪞 canny" },
          "model-value": g(D),
          label: g(n)("lbl_cn_preproc", "🧪 Preprocessor"),
          title: g(n)("hrf_cn_preproc", "Preprocess the ControlNet hint image. 'none' feeds the raw upscaled image (right for tile ControlNets)."),
          "onUpdate:modelValue": C[13] || (C[13] = (M) => D.value = M)
        }, null, 8, ["options", "model-value", "label", "title"])
      ], 64)) : se("", !0)
    ]));
  }
}), Bh = /* @__PURE__ */ Me(Vh, [["__scopeId", "data-v-48578e7c"]]), Hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bh
}, Symbol.toStringTag, { value: "Module" })), Uh = {
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
      "Optional latent input mirrors image/tiles: latent + latent_tiles out, same grid, bislerp resize.",
      "Wire outputs into KSampler-tile-aware upscale nodes."
    ]
  },
  FiLUpscaleSimple: {
    id: "FiLUpscaleSimple",
    title: "FiL Upscale Simple",
    body: "Upscale + tile crop with the same tiling controls as Advanced, through a required model.",
    bullets: [
      "Same widget panel as Upscaler Advanced (factor, tile size/overlap, auto mode, manual grid).",
      "upscale_model is required; optional latent input adds latent + latent_tiles outputs.",
      "Delegates to Upscaler Advanced internally — one source of truth for the tiling math."
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
  },
  FiLNoiseControl: {
    id: "FiLNoiseControl",
    title: "FiL Noise Control",
    body: "Packs an RNG source and optional seed-variation blend into a script for FiL KSampler.",
    bullets: [
      "Outputs a `script` — wire it into the KSampler `script` slot, not into a latent.",
      "RNG source: 'gpu' can better match Automatic1111-style noise for the same seed.",
      "Seed variation blends a second seed's noise in at the given weight (0 = base only, 1 = variation only)."
    ],
    rows: [
      { label: "RNG source", desc: "Device the initial noise is drawn on (cpu/gpu)." },
      { label: "Weight", desc: "Variation strength — how much of the second seed's noise to blend in." }
    ]
  }
}, jh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HELP_DEFAULTS: Uh
}, Symbol.toStringTag, { value: "Module" }));
//# sourceMappingURL=fil_design_imagemind.js.map
