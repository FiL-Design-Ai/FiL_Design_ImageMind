(function(){try{var s=document.createElement("style");s.textContent=".fil-color-picker[data-v-c4d5f476]{display:flex;flex-direction:column;gap:8px;padding:8px;width:176px;box-sizing:border-box}.fil-cp-sv[data-v-c4d5f476]{position:relative;width:100%;height:100px;border-radius:4px;cursor:crosshair;touch-action:none}.fil-cp-sv-white[data-v-c4d5f476]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to right,#fff,#fff0);border-radius:4px}.fil-cp-sv-black[data-v-c4d5f476]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to top,#000,#0000);border-radius:4px}.fil-cp-sv-thumb[data-v-c4d5f476]{position:absolute;width:10px;height:10px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hue[data-v-c4d5f476]{position:relative;width:100%;height:12px;border-radius:6px;background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red);cursor:pointer;touch-action:none}.fil-cp-hue-thumb[data-v-c4d5f476]{position:absolute;top:50%;width:12px;height:12px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hex-row[data-v-c4d5f476]{display:flex;align-items:center;gap:6px}.fil-cp-swatch[data-v-c4d5f476]{width:22px;height:22px;border-radius:4px;border:1px solid rgba(255,255,255,.25);flex-shrink:0}.fil-cp-hex-input[data-v-c4d5f476]{flex:1;min-width:0;height:22px;box-sizing:border-box;border-radius:4px;border:1px solid rgba(255,255,255,.2);background:#00000040;color:#f2f2f2;font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:12px;padding:0 6px;outline:none}.fil-cp-hex-input[data-v-c4d5f476]:focus{border-color:#ffffff80}.fil-cp-presets[data-v-c4d5f476]{display:grid;grid-template-columns:repeat(5,1fr);gap:4px}.fil-color-swatch[data-v-c4d5f476]{width:24px;height:24px;border-radius:4px;border:2px solid transparent;background:var(--swatch);cursor:pointer;transition:border-color .08s,transform .08s;outline:none;box-sizing:border-box}.fil-color-swatch[data-v-c4d5f476]:hover{border-color:#ffffff80;transform:scale(1.15)}.fil-color-swatch.is-active[data-v-c4d5f476]{border-color:#fff;box-shadow:0 0 0 1px var(--swatch)}.fil-node-shell[data-v-15f48dad]{position:relative}.fil-icon[data-v-dfb78d9f]{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;line-height:0}.fil-icon[data-v-dfb78d9f] svg{width:100%;height:100%}.fil-modal-backdrop[data-v-00452928]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000;display:flex;align-items:center;justify-content:center;background:#0000008c;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.fil-modal-panel[data-v-00452928]{width:90%;max-height:80vh;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:10px;box-shadow:0 20px 60px #00000080;display:flex;flex-direction:column;overflow:hidden}.fil-modal-header[data-v-00452928]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08)}.fil-modal-title[data-v-00452928]{font-size:14px;font-weight:600;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-close[data-v-00452928]{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;border:none;background:transparent;color:var(--fil-muted, rgba(255, 255, 255, .5));cursor:pointer;transition:background .08s,color .08s}.fil-modal-close[data-v-00452928]:hover{background:#ffffff14;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-body[data-v-00452928]{flex:1;overflow-y:auto;padding:16px}.fil-modal-enter-active[data-v-00452928],.fil-modal-leave-active[data-v-00452928]{transition:opacity .15s ease}.fil-modal-enter-from[data-v-00452928],.fil-modal-leave-to[data-v-00452928]{opacity:0}.fil-modal-enter-active .fil-modal-panel[data-v-00452928],.fil-modal-leave-active .fil-modal-panel[data-v-00452928]{transition:transform .15s ease}.fil-modal-enter-from .fil-modal-panel[data-v-00452928],.fil-modal-leave-to .fil-modal-panel[data-v-00452928]{transform:scale(.95) translateY(8px)}.fil-help-title[data-v-536c1547]{margin:0 0 12px;font-size:16px;font-weight:700;color:var(--fil-text, rgba(255,255,255,.9))}.fil-help-body[data-v-536c1547]{margin:0 0 12px;font-size:13px;line-height:1.6;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet[data-v-536c1547]{display:flex;gap:6px;align-items:flex-start;margin-bottom:6px;font-size:13px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet>span[data-v-536c1547]{flex:1}.fil-help-table[data-v-536c1547]{width:100%;border-collapse:collapse;margin-top:8px;font-size:12px}.fil-help-table th[data-v-536c1547],.fil-help-table td[data-v-536c1547]{text-align:left;padding:6px 10px;border-bottom:1px solid rgba(255,255,255,.06)}.fil-help-table th[data-v-536c1547]{font-weight:600;color:var(--fil-text, rgba(255,255,255,.85))}.fil-help-table td[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.6))}.fil-help-code[data-v-536c1547]{background:#0000004d;border-radius:6px;padding:12px;margin-top:10px;overflow-x:auto;font-size:12px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-empty[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.4));font-size:13px}.fil-toast-stack[data-v-08cc58fa]{position:fixed;right:20px;bottom:20px;z-index:100001;display:flex;flex-direction:column;gap:8px;pointer-events:none;max-width:min(360px,90vw)}.fil-toast[data-v-08cc58fa]{pointer-events:auto;display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:8px;background:var(--fil-panel, #171b22);color:var(--fil-text, #e8edf3);border:1px solid var(--fil-panel-alt, #2a3041);border-left:3px solid var(--toast-color, var(--fil-muted));box-shadow:0 6px 22px #0000006b;font:12.5px/1.45 system-ui,sans-serif;animation:fil-toast-in-08cc58fa .18s cubic-bezier(.2,.7,.3,1)}@keyframes fil-toast-in-08cc58fa{0%{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}.fil-toast-dot[data-v-08cc58fa]{flex:none;width:8px;height:8px;margin-top:4px;border-radius:50%;background:var(--toast-color, var(--fil-muted))}.fil-toast-text[data-v-08cc58fa]{flex:1;min-width:0;align-self:center}.fil-toast-action[data-v-08cc58fa]{flex:none;cursor:pointer;padding:4px 8px;border-radius:4px;background:#ffffff0f;color:inherit;border:none;font:inherit;transition:background .12s}.fil-toast-action[data-v-08cc58fa]:hover{background:#ffffff24}.fil-toast-close[data-v-08cc58fa]{flex:none;align-self:flex-start;cursor:pointer;width:18px;height:18px;padding:0;border:none;background:none;color:var(--fil-muted);opacity:.6;transition:opacity .12s;font-size:16px;line-height:18px}.fil-toast-close[data-v-08cc58fa]:hover{opacity:1}.fil-w-btn[data-v-1c6537e0]{box-sizing:border-box;padding:var(--fil-row-pad);border-radius:6px;background:#ffffff0d;border:1px solid rgba(255,255,255,.14);color:var(--fil-text, rgba(255, 255, 255, .85));font-family:ui-sans-serif,system-ui,sans-serif;font-size:12px;cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;display:inline-flex;align-items:center;justify-content:center;gap:6px}.fil-w-btn[data-v-1c6537e0]:hover:not(:disabled){background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #fff)}.fil-w-btn[data-v-1c6537e0]:active{transform:translateY(1px)}.fil-w-btn[data-v-1c6537e0]:disabled{opacity:.4;cursor:default}.fil-w-btn-accent[data-v-1c6537e0]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #fff)}.fil-w-btn-danger[data-v-1c6537e0]{color:var(--fil-danger, #ef6666)}.fil-w-btn-danger[data-v-1c6537e0]:hover:not(:disabled){background:var(--fil-danger, #ef6666);border-color:var(--fil-danger, #ef6666);color:#fff}.fil-w-btn-sm[data-v-1c6537e0]{padding:4px 8px;font-size:11px}.fil-w-btn-full[data-v-1c6537e0]{width:100%;display:block}.fil-w-btn-icon[data-v-1c6537e0]{display:inline-flex;align-items:center;justify-content:center;gap:5px}.fil-w-btn-glyph[data-v-1c6537e0] svg{width:14px;height:14px}.fil-w-btn.is-flashing[data-v-1c6537e0],.fil-w-btn.is-flashing[data-v-1c6537e0]:hover{background:var(--fil-ok, #62c987);border-color:var(--fil-ok, #62c987);color:#fff}.fil-w-btn.is-loading[data-v-1c6537e0]{cursor:wait}.fil-w-btn[data-v-1c6537e0]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-btn-spinner[data-v-1c6537e0]{display:inline-block;width:12px;height:12px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:fil-w-spin-1c6537e0 .6s linear infinite}@keyframes fil-w-spin-1c6537e0{to{transform:rotate(360deg)}}.fil-pm-root[data-v-ae1b468d]{display:flex;flex-direction:column;gap:12px;padding:4px 0}.fil-pm-card[data-v-ae1b468d]{background:#ffffff08;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:12px}.fil-pm-header[data-v-ae1b468d]{display:flex;align-items:center;gap:8px;margin-bottom:10px}.fil-pm-card--collapsed[data-v-ae1b468d]{padding:8px 12px}.fil-pm-card--collapsed .fil-pm-header[data-v-ae1b468d]{margin-bottom:0}.fil-pm-header--clickable[data-v-ae1b468d]{cursor:pointer}.fil-pm-header--clickable:hover .fil-pm-name[data-v-ae1b468d]{color:var(--fil-accent, #7c5cfc)}.fil-pm-chevron[data-v-ae1b468d]{display:inline-flex;align-items:center;color:#fff6;transition:transform .12s ease}.fil-pm-chevron--open[data-v-ae1b468d]{transform:rotate(90deg)}.fil-pm-icon[data-v-ae1b468d]{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px}.fil-pm-name[data-v-ae1b468d]{font-weight:600;font-size:14px;color:var(--fil-text, #f2f2f2)}.fil-pm-disp[data-v-ae1b468d]{font-size:11px;color:#ffffff80}.fil-pm-status[data-v-ae1b468d]{margin-left:auto;display:inline-flex;align-items:center;gap:5px;font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#fff6;white-space:nowrap}.fil-pm-dot[data-v-ae1b468d]{width:8px;height:8px;border-radius:50%;background:currentColor;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 22%,transparent)}.fil-pm-status--connected[data-v-ae1b468d]{color:var(--fil-success, #4ade80)}.fil-pm-status--configured[data-v-ae1b468d]{color:var(--fil-warning, #fbbf24)}.fil-pm-status--off[data-v-ae1b468d]{color:#ffffff4d}.fil-pm-fields[data-v-ae1b468d]{display:flex;flex-direction:column;gap:8px;margin-bottom:10px}.fil-pm-field[data-v-ae1b468d]{display:flex;flex-direction:column;gap:3px}.fil-pm-field-label[data-v-ae1b468d]{font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#ffffff80}.fil-pm-input[data-v-ae1b468d]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,monospace;font-size:13px;outline:none;transition:border-color .08s}.fil-pm-input[data-v-ae1b468d]:focus{border-color:var(--fil-accent)}.fil-pm-input.fil-pm-has-val[data-v-ae1b468d]{border-color:var(--fil-muted, #555)}.fil-pm-actions[data-v-ae1b468d]{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}.fil-pm-models[data-v-ae1b468d]{display:flex;flex-wrap:wrap;gap:4px}.fil-pm-model-tag[data-v-ae1b468d]{display:inline-flex;align-items:center;gap:3px;background:#ffffff12;border-radius:4px;padding:2px 6px;font-size:11px;color:#ffffffbf;white-space:nowrap}.fil-pm-vision-badge[data-v-ae1b468d]{font-size:10px;line-height:1}.fil-pm-err[data-v-ae1b468d]{font-size:11px;color:var(--fil-danger, #ef6666);margin-top:4px}.fil-pm-age[data-v-ae1b468d]{font-size:10px;color:#fff6;align-self:center}.fil-w-chips[data-v-3c07d909]{display:grid;gap:5px;width:100%}.fil-w-chip[data-v-3c07d909]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-3c07d909]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-3c07d909]{background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-accent);border-color:var(--fil-accent);font-weight:500;box-shadow:0 0 8px color-mix(in srgb,var(--fil-accent) 55%,transparent)}.fil-w-chip.disabled[data-v-3c07d909]{opacity:.5;cursor:default}.fil-w-chip[data-v-3c07d909]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chiplist[data-v-5ccf2e00]{display:flex;flex-direction:column;gap:5px;width:100%}.fil-w-search[data-v-5ccf2e00]{box-sizing:border-box;width:100%;padding:5px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:11px;outline:none}.fil-w-search[data-v-5ccf2e00]:focus{border-color:var(--fil-accent)}.fil-w-search[data-v-5ccf2e00]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-chip-scroll[data-v-5ccf2e00]{display:grid;gap:3px;max-height:200px;overflow-y:auto;overflow-x:hidden;padding-right:2px}.fil-w-chip-scroll[data-v-5ccf2e00]::-webkit-scrollbar{width:5px}.fil-w-chip-scroll[data-v-5ccf2e00]::-webkit-scrollbar-thumb{background:var(--fil-muted, #555);border-radius:3px}.fil-w-chip-scroll[data-v-5ccf2e00]::-webkit-scrollbar-track{background:transparent}.fil-w-chip[data-v-5ccf2e00]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-5ccf2e00]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-5ccf2e00]{background:var(--fil-accent);color:var(--fil-accent-ink, #fff);border-color:var(--fil-accent);font-weight:500}.fil-w-chip.disabled[data-v-5ccf2e00]{opacity:.5;cursor:default}.fil-w-chip[data-v-5ccf2e00]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chip-empty[data-v-5ccf2e00]{padding:8px;text-align:center;color:var(--fil-muted, #666);font-size:11px}.fil-combo[data-v-73f94a33]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-combo-label[data-v-73f94a33]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-combo-trigger[data-v-73f94a33]{grid-column:2;width:100%;box-sizing:border-box;height:30px;display:flex;align-items:center;gap:6px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer;text-align:left;-moz-appearance:none;appearance:none;-webkit-appearance:none}.fil-combo-trigger.open[data-v-73f94a33],.fil-combo-trigger[data-v-73f94a33]:focus-visible{border-color:var(--fil-accent);outline:2px solid var(--fil-accent);outline-offset:1px}.fil-combo-trigger.disabled[data-v-73f94a33]{opacity:.5;cursor:default}.fil-combo-trigger-label[data-v-73f94a33]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-chevron[data-v-73f94a33]{font-size:9px;color:var(--fil-muted, rgba(255, 255, 255, .5));flex-shrink:0}.fil-combo-badge[data-v-73f94a33]{flex-shrink:0;font-size:9px;line-height:1;padding:2px 5px;border-radius:999px;background:var(--fil-accent);color:var(--fil-accent-ink, #fff);font-weight:600}.fil-combo-panel[data-v-73f94a33]{position:fixed;z-index:10001;box-sizing:border-box;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:8px;box-shadow:0 12px 32px #0006;display:flex;flex-direction:column;overflow:hidden;padding:6px}.fil-combo-search[data-v-73f94a33]{box-sizing:border-box;width:100%;margin-bottom:6px;padding:6px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-combo-search[data-v-73f94a33]:focus{border-color:var(--fil-accent)}.fil-combo-list[data-v-73f94a33]{display:flex;flex-direction:column;gap:2px;max-height:240px;overflow-y:auto}.fil-combo-option[data-v-73f94a33]{display:flex;align-items:center;gap:6px;width:100%;box-sizing:border-box;padding:6px 8px;border-radius:5px;border:none;background:transparent;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;text-align:left;cursor:pointer;outline:none}.fil-combo-option.active[data-v-73f94a33]{background:#ffffff14}.fil-combo-option.selected[data-v-73f94a33]{color:var(--fil-accent);font-weight:600}.fil-combo-option-label[data-v-73f94a33]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-empty[data-v-73f94a33]{padding:10px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-w-info[data-v-851660c1]{font-size:11px;line-height:1.5;color:#ffffff73;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.fil-w-info[data-ok][data-v-851660c1]{color:var(--fil-ok, #62c987)}.fil-w-info[data-err][data-v-851660c1]{color:var(--fil-danger, #ef6666)}.fil-w-numfield[data-v-5fe162a0]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-numfield.no-label[data-v-5fe162a0]{display:contents}.fil-w-numfield-label[data-v-5fe162a0]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-numfield:not(.no-label) .fil-w-num-wrap[data-v-5fe162a0]{grid-column:2}.fil-w-num-wrap[data-v-5fe162a0]{position:relative;width:100%;min-width:0}.fil-w-num[data-v-5fe162a0]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 20px 7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:14px;text-align:left;outline:none;transition:border-color .08s}.fil-w-num[data-v-5fe162a0]:focus{border-color:var(--fil-accent)}.fil-w-num[data-v-5fe162a0]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-num[data-v-5fe162a0]:disabled{opacity:.5}.fil-w-num-step[data-v-5fe162a0]{position:absolute;top:1px;right:1px;bottom:1px;width:17px;display:flex;flex-direction:column;border-left:1px solid var(--fil-muted, #3a3d40);overflow:hidden;border-radius:0 5px 5px 0}.fil-w-num-btn[data-v-5fe162a0]{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;border:none;background:transparent;color:var(--fil-muted, rgba(255, 255, 255, .55));font-size:7px;line-height:1;cursor:pointer;padding:0;transition:color .08s,background .08s}.fil-w-num-btn[data-v-5fe162a0]:last-child{border-top:1px solid var(--fil-muted, #3a3d40)}.fil-w-num-btn[data-v-5fe162a0]:hover:not(:disabled){color:var(--fil-accent);background:#ffffff12}.fil-w-num-btn[data-v-5fe162a0]:disabled{opacity:.3;cursor:default}.fil-w-section[data-v-686d0388]{box-sizing:border-box;width:100%;padding:var(--fil-row-pad);border:none;border-radius:5px;background:#ffffff0a;color:var(--fil-muted, rgba(255, 255, 255, .7));font-family:inherit;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;cursor:pointer;text-align:left;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s;display:flex;align-items:center;gap:6px}.fil-w-section[data-v-686d0388]:hover:not(:disabled){background:#ffffff14;color:#fff}.fil-w-section[data-v-686d0388]:disabled{cursor:default}.fil-w-section[data-v-686d0388]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-section-arrow[data-v-686d0388]{display:inline-block;width:8px;font-size:9px;color:var(--fil-accent)}.fil-w-segmented[data-v-738d9e4d]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-segmented-label[data-v-738d9e4d]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-pill[data-v-738d9e4d]{grid-column:2;display:flex;gap:0;min-width:0;background:#ffffff0f;border-radius:7px;padding:3px}.fil-w-pill.disabled[data-v-738d9e4d]{opacity:.5}.fil-w-seg[data-v-738d9e4d]{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center;padding:6px;border:none;border-radius:5px;background:transparent;font-family:inherit;font-size:12px;color:var(--fil-muted, rgba(255, 255, 255, .55));cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s}.fil-w-seg[data-v-738d9e4d]:hover:not(.active){color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-w-seg.active[data-v-738d9e4d]{background:var(--fil-accent);color:var(--fil-accent-ink, #fff);font-weight:500}.fil-w-seg[data-v-738d9e4d]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-select[data-v-77c303be]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-select-label[data-v-77c303be]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-select-input[data-v-77c303be]{grid-column:2;width:100%;box-sizing:border-box;height:30px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer}.fil-w-select-input[data-v-77c303be]:focus{border-color:var(--fil-accent)}.fil-w-select-input[data-v-77c303be]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-select-input[data-v-77c303be]:disabled{opacity:.5;cursor:default}.fil-w-slider[data-v-785fba56]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-slider-label[data-v-785fba56]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-slider-row[data-v-785fba56]{grid-column:2;display:flex;align-items:center;gap:6px;min-width:0}.fil-w-slider-range[data-v-785fba56]{flex:1 1 auto;min-width:0;max-width:220px;accent-color:var(--fil-accent);cursor:pointer}.fil-w-slider-range[data-v-785fba56]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-slider-row[data-v-785fba56] .fil-w-num-wrap{width:70px;flex:none}.fil-style-picker[data-v-7f1dfd99]{display:flex;flex-direction:column;gap:10px}.fil-style-cats[data-v-7f1dfd99]{display:flex;flex-wrap:wrap;gap:6px}.fil-style-cat[data-v-7f1dfd99]{box-sizing:border-box;padding:5px 10px;border-radius:999px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .2));background:#ffffff0a;color:var(--fil-text, rgba(255, 255, 255, .8));font-size:11px;cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-cat[data-v-7f1dfd99]:hover{border-color:var(--fil-accent)}.fil-style-cat.active[data-v-7f1dfd99]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #fff);font-weight:500}.fil-style-cat[data-v-7f1dfd99]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-style-search[data-v-7f1dfd99]{box-sizing:border-box;width:100%;padding:7px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-style-search[data-v-7f1dfd99]:focus{border-color:var(--fil-accent)}.fil-style-grid[data-v-7f1dfd99]{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:8px;max-height:50vh;overflow-y:auto;padding-right:2px}.fil-style-tile[data-v-7f1dfd99]{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px 6px;border-radius:8px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .14));background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-tile[data-v-7f1dfd99]:hover{border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-style-tile.active[data-v-7f1dfd99]{border-color:var(--fil-accent);background:#f68a4524}.fil-style-tile[data-v-7f1dfd99]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-style-tile-preview[data-v-7f1dfd99]{width:100%;aspect-ratio:1;border-radius:6px;background:#ffffff0d;display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:22px}.fil-style-tile-img[data-v-7f1dfd99]{width:100%;height:100%;object-fit:cover}.fil-style-tile-label[data-v-7f1dfd99]{font-size:10px;text-align:center;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.fil-style-empty[data-v-7f1dfd99]{grid-column:1 / -1;padding:20px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-w-toggle[data-v-d39b7896]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-toggle-label[data-v-d39b7896]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-toggle.bare[data-v-d39b7896]{display:flex;width:auto;gap:4px}.fil-w-toggle.bare .fil-w-toggle-label[data-v-d39b7896]{font-size:10px;white-space:nowrap}.fil-w-switch[data-v-d39b7896]{grid-column:2;justify-self:start;width:36px;height:20px;padding:2px;box-sizing:border-box;border:none;border-radius:10px;background:#ffffff24;cursor:pointer;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .12s}.fil-w-switch.on[data-v-d39b7896]{background:var(--fil-accent)}.fil-w-switch[data-v-d39b7896]:disabled{opacity:.5;cursor:default}.fil-w-switch[data-v-d39b7896]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-switch-thumb[data-v-d39b7896]{display:block;width:16px;height:16px;border-radius:50%;background:#fff;transition:transform .12s}.fil-w-switch.on .fil-w-switch-thumb[data-v-d39b7896]{transform:translate(16px)}div.fil-seed-root[data-v-9971583a]{display:flex;flex-direction:row;align-items:center;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;background:transparent;border:none;border-radius:0;box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none}.fil-seed-display[data-v-9971583a]{flex:1;min-width:0;box-sizing:border-box;height:34px;background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);padding:6px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:19px;text-align:center;outline:none;transition:border-color .08s}.fil-seed-display[data-v-9971583a]:focus{border-color:var(--fil-accent)}.fil-seed-display[readonly][data-v-9971583a]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-seed-actions[data-v-9971583a]{display:flex;gap:5px;flex-shrink:0}.fil-seed-actions[data-v-9971583a] .fil-w-btn{padding:0;width:34px;height:34px;font-size:16px}.picker-container[data-v-a16c02ab]{display:flex;flex-direction:column;gap:12px;color:var(--fil-text, #e8edf3)}.provider-tabs[data-v-a16c02ab]{display:flex;gap:6px;overflow-x:auto;padding-bottom:6px;scrollbar-width:thin}.tab-btn[data-v-a16c02ab]{display:flex;align-items:center;gap:6px;padding:7px 10px;border-radius:8px;border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-muted, #9ca8b5);font-size:12px;cursor:pointer;white-space:nowrap;flex-shrink:0;transition:all .15s ease}.tab-btn[data-v-a16c02ab]:hover{background:#ffffff14;color:var(--fil-text, #e8edf3)}.tab-btn.active[data-v-a16c02ab]{background:var(--fil-panel-alt, #222934);border-color:var(--fil-accent, #f08a45);color:var(--fil-accent, #f08a45);font-weight:600}.tab-badge[data-v-a16c02ab]{font-size:10px;background:var(--fil-pill-bg);padding:1px 5px;border-radius:99px}.provider-status-bar[data-v-a16c02ab]{display:flex;justify-content:space-between;align-items:center;background:#0003;padding:8px 12px;border-radius:6px;font-size:12px}.status-info[data-v-a16c02ab]{display:flex;align-items:center;gap:8px}.provider-name[data-v-a16c02ab]{font-weight:600}.status-badge[data-v-a16c02ab]{font-size:11px;padding:2px 6px;border-radius:4px}.status-badge.online[data-v-a16c02ab]{color:var(--fil-ok, #62c987)}.status-badge.loading[data-v-a16c02ab]{color:var(--fil-accent, #f08a45)}.status-badge.error[data-v-a16c02ab]{color:var(--fil-danger, #ef6666)}.age-label[data-v-a16c02ab]{font-size:10px;color:var(--fil-muted, #9ca8b5)}.filter-controls[data-v-a16c02ab]{display:flex;flex-direction:column;gap:8px}.search-input-wrap[data-v-a16c02ab]{position:relative;display:flex;align-items:center}.search-icon[data-v-a16c02ab]{position:absolute;left:10px;color:var(--fil-muted, #9ca8b5)}.search-input[data-v-a16c02ab]{width:100%;box-sizing:border-box;height:32px;padding:6px 30px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:var(--fil-field-radius, 6px);color:var(--fil-text, #e8edf3);font-size:12px;outline:none}.search-input[data-v-a16c02ab]:focus{border-color:var(--fil-accent, #f08a45)}.clear-search[data-v-a16c02ab]{position:absolute;right:10px;background:none;border:none;color:var(--fil-muted, #9ca8b5);cursor:pointer}.filter-segments[data-v-a16c02ab]{display:flex;gap:8px;min-width:0}.filter-segments[data-v-a16c02ab]>*{flex:1;min-width:0}.models-list-wrapper[data-v-a16c02ab]{height:320px;overflow-y:auto;background:#00000026;border-radius:8px;border:1px solid rgba(255,255,255,.06);padding:8px}.empty-state[data-v-a16c02ab]{display:flex;align-items:center;justify-content:center;height:100%;color:var(--fil-muted, #9ca8b5);font-size:12px}.models-container.list[data-v-a16c02ab]{display:flex;flex-direction:column;gap:6px}.models-container.grid[data-v-a16c02ab]{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:8px}.models-container.grid .model-card[data-v-a16c02ab]{flex-direction:column;align-items:flex-start;gap:8px;padding:10px 12px}.models-container.grid .model-main[data-v-a16c02ab]{width:100%}.models-container.grid .model-tags[data-v-a16c02ab]{width:100%;justify-content:flex-start}.model-card[data-v-a16c02ab]{display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:#ffffff08;border:1px solid rgba(255,255,255,.06);border-radius:6px;cursor:pointer;transition:all .12s ease}.model-card[data-v-a16c02ab]:hover{background:#ffffff12;border-color:#ffffff26}.model-card.selected[data-v-a16c02ab]{background:#f08a4526;border-color:var(--fil-accent, #f08a45)}.model-main[data-v-a16c02ab]{display:flex;align-items:center;gap:8px;min-width:0}.type-icon[data-v-a16c02ab]{font-size:14px}.model-name[data-v-a16c02ab]{font-size:12px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.model-tags[data-v-a16c02ab]{display:flex;gap:4px;flex-shrink:0}.tag[data-v-a16c02ab]{font-size:9px;padding:2px 6px;border-radius:4px;font-weight:600;text-transform:uppercase}.tag.vision[data-v-a16c02ab]{background:#f08a4526;color:var(--fil-accent, #f08a45)}.tag.text[data-v-a16c02ab],.tag.local[data-v-a16c02ab],.tag.free[data-v-a16c02ab],.tag.paid[data-v-a16c02ab]{background:var(--fil-pill-bg);color:var(--fil-muted, #9ca8b5)}.picker-footer[data-v-a16c02ab]{display:flex;justify-content:space-between;align-items:center;padding-top:8px}.selection-summary[data-v-a16c02ab]{font-size:12px}.selection-summary .muted[data-v-a16c02ab]{color:var(--fil-muted, #9ca8b5)}.footer-actions[data-v-a16c02ab]{display:flex;gap:8px}.fil-provider-root[data-v-1a5b41f9]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;min-width:0}.picker-trigger-btn[data-v-1a5b41f9]{display:flex;flex-direction:column;gap:6px;width:100%;box-sizing:border-box;padding:8px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-pill-border);border-radius:var(--fil-field-radius, 8px);color:var(--fil-text, #f2f2f2);cursor:pointer;text-align:left;transition:border-color .15s ease,background .15s ease;outline:none}.picker-trigger-btn[data-v-1a5b41f9]:hover{border-color:var(--fil-accent, #f08a45);background:var(--fil-pill-bg)}.picker-trigger-btn[data-v-1a5b41f9]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px;border-color:var(--fil-accent)}.trigger-header[data-v-1a5b41f9]{display:flex;justify-content:space-between;align-items:center;width:100%}.provider-badge[data-v-1a5b41f9]{display:flex;align-items:center;gap:6px;font-weight:600;font-size:13px;color:var(--fil-accent, #f08a45)}.open-icon[data-v-1a5b41f9]{font-size:11px;background:var(--fil-pill-bg);padding:2px 6px;border-radius:4px;color:var(--fil-text, #e8edf3)}.trigger-model[data-v-1a5b41f9]{display:flex;align-items:center;gap:6px;font-size:12px;min-width:0}.model-label[data-v-1a5b41f9]{color:var(--fil-muted, #9ca8b5);flex-shrink:0}.model-name[data-v-1a5b41f9]{font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.fil-scanner-root[data-v-ab7f694f]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;width:100%;box-sizing:border-box;min-width:0}.fil-section-block[data-v-ab7f694f]{display:flex;flex-direction:column;gap:5px;min-width:0}.fil-w-row[data-v-ab7f694f]{display:flex;flex-direction:column;gap:3px;min-width:0}.fil-style-pair-row[data-v-ab7f694f]{display:flex;gap:4px;min-width:0}.fil-style-pair-item[data-v-ab7f694f]{flex:1;min-width:0}.fil-scanner-seed-row[data-v-ab7f694f]{display:flex;gap:6px;min-width:0}.fil-scanner-seed-field[data-v-ab7f694f]{flex:1.3;min-width:0;box-sizing:border-box;height:34px;background:#00000059;border:1px solid rgba(255,255,255,.08);border-radius:var(--fil-pill-radius);padding:0 12px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:13px;text-align:center;outline:none;transition:border-color .08s}.fil-scanner-seed-field[data-v-ab7f694f]:focus{border-color:var(--fil-accent)}.fil-scanner-seed-field.is-random[data-v-ab7f694f]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-scanner-seed-pill[data-v-ab7f694f]{flex:1;min-width:0;box-sizing:border-box;height:34px;padding:0 8px;border-radius:var(--fil-pill-radius);border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-text, #e8edf3);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none}.fil-scanner-seed-pill[data-v-ab7f694f]:hover{background:#ffffff1f}.fil-scanner-seed-pill.active[data-v-ab7f694f]{background:#ffffff29;border-color:#fff3}.fil-scanner-seed-pill[data-v-ab7f694f]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-scanner-seed-pill-accent[data-v-ab7f694f]{background:var(--fil-accent);border-color:var(--fil-accent);color:#241206;font-weight:700}.fil-scanner-seed-pill-accent[data-v-ab7f694f]:hover{filter:brightness(1.08);background:var(--fil-accent)}.fil-cleaner-root[data-v-1f9cbf0d]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cleaner-row[data-v-1f9cbf0d]{all:unset;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:var(--fil-row-pad);border-radius:var(--fil-field-radius);border:1px solid var(--fil-glass-border);background:var(--fil-glass-bg);cursor:pointer;-webkit-user-select:none;user-select:none;transition:background .08s,border-color .08s}.fil-cleaner-row[data-v-1f9cbf0d]:hover{background:#ffffff14}.fil-cleaner-row.active[data-v-1f9cbf0d]{border-color:var(--fil-accent);background:#f68a451f}.fil-cleaner-dot[data-v-1f9cbf0d]{width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,.3);flex:none;transition:border-color .08s,background .08s;display:flex;align-items:center;justify-content:center}.fil-cleaner-dot[data-v-1f9cbf0d]:after{content:\"✓\";font-size:10px;line-height:1;color:var(--fil-accent-ink, #fff);opacity:0;transition:opacity .08s}.fil-cleaner-row.active .fil-cleaner-dot[data-v-1f9cbf0d]{background:var(--fil-accent);border-color:var(--fil-accent)}.fil-cleaner-row.active .fil-cleaner-dot[data-v-1f9cbf0d]:after{opacity:1}.fil-cleaner-label[data-v-1f9cbf0d]{flex:1;font-size:12px}.fil-cmp-root[data-v-2abe5720]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cmp-canvas-wrap[data-v-2abe5720]{position:relative;width:100%;height:220px;border-radius:var(--fil-field-radius);border:1px solid var(--fil-glass-border);overflow:hidden;background:linear-gradient(45deg,rgba(255,255,255,.04) 25%,transparent 25%,transparent 75%,rgba(255,255,255,.04) 75%) 0 0/16px 16px,linear-gradient(45deg,rgba(255,255,255,.04) 25%,transparent 25%,transparent 75%,rgba(255,255,255,.04) 75%) 8px 8px/16px 16px,#0d0f13}.fil-cmp-canvas[data-v-2abe5720]{display:block;width:100%;height:100%;touch-action:none}.fil-cmp-canvas.is-wipe[data-v-2abe5720]{cursor:ew-resize}.fil-cmp-placeholder[data-v-2abe5720]{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;text-align:center;padding:12px;color:var(--fil-muted, rgba(255, 255, 255, .5));font-size:12px;pointer-events:none}.fil-cmp-save-row[data-v-2abe5720]{display:grid;grid-template-columns:1fr 1fr;gap:5px}.fil-cmp-settings[data-v-2abe5720]{display:flex;flex-direction:column;gap:5px}.fil-up-root[data-v-ff1dd2df]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-up-row[data-v-ff1dd2df]{display:grid;grid-template-columns:minmax(auto,max-content) 64px minmax(auto,max-content) 64px;align-items:center;gap:var(--fil-node-gap)}.fil-up-row-overlap[data-v-ff1dd2df]{grid-template-columns:minmax(auto,max-content) 64px minmax(auto,max-content) 64px auto}.fil-w-label[data-v-ff1dd2df]{font-size:11px;color:var(--fil-muted, rgba(255,255,255,.55))}.fil-hrf-root[data-v-48578e7c]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-hrf-seed-row[data-v-48578e7c]{display:flex;gap:6px;min-width:0}.fil-hrf-seed-field[data-v-48578e7c]{flex:1.3;min-width:0;box-sizing:border-box;height:34px;background:#00000059;border:1px solid rgba(255,255,255,.08);border-radius:var(--fil-pill-radius);padding:0 12px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:13px;text-align:center;outline:none;transition:border-color .08s}.fil-hrf-seed-field[data-v-48578e7c]:focus{border-color:var(--fil-accent)}.fil-hrf-seed-field.is-random[data-v-48578e7c]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-hrf-seed-pill[data-v-48578e7c]{flex:1;min-width:0;box-sizing:border-box;height:34px;padding:0 8px;border-radius:var(--fil-pill-radius);border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-text, #e8edf3);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none}.fil-hrf-seed-pill[data-v-48578e7c]:hover{background:#ffffff1f}.fil-hrf-seed-pill.active[data-v-48578e7c]{background:#ffffff29;border-color:#fff3}.fil-hrf-seed-pill[data-v-48578e7c]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-hrf-seed-pill-accent[data-v-48578e7c]{background:var(--fil-accent);border-color:var(--fil-accent);color:#241206;font-weight:700}.fil-hrf-seed-pill-accent[data-v-48578e7c]:hover{filter:brightness(1.08);background:var(--fil-accent)}\n";document.head.appendChild(s);}catch(e){}})();
import { app as ui } from "/scripts/app.js";
/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Uo(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ce = {}, mn = [], bt = () => {
}, di = () => !1, Vs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Bs = (e) => e.startsWith("onUpdate:"), Re = Object.assign, jo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, za = Object.prototype.hasOwnProperty, be = (e, t) => za.call(e, t), le = Array.isArray, hn = (e) => Zn(e) === "[object Map]", Hs = (e) => Zn(e) === "[object Set]", ul = (e) => Zn(e) === "[object Date]", ue = (e) => typeof e == "function", Le = (e) => typeof e == "string", et = (e) => typeof e == "symbol", ve = (e) => e !== null && typeof e == "object", fi = (e) => (ve(e) || ue(e)) && ue(e.then) && ue(e.catch), pi = Object.prototype.toString, Zn = (e) => pi.call(e), Ga = (e) => Zn(e).slice(8, -1), mi = (e) => Zn(e) === "[object Object]", Us = (e) => Le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Rn = /* @__PURE__ */ Uo(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), js = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ka = /-\w/g, ze = js(
  (e) => e.replace(Ka, (t) => t.slice(1).toUpperCase())
), qa = /\B([A-Z])/g, Ut = js(
  (e) => e.replace(qa, "-$1").toLowerCase()
), Ws = js((e) => e.charAt(0).toUpperCase() + e.slice(1)), oo = js(
  (e) => e ? `on${Ws(e)}` : ""
), vt = (e, t) => !Object.is(e, t), gs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, hi = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, zs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Xa = (e) => {
  const t = Le(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let dl;
const Gs = () => dl || (dl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Xe(e) {
  if (le(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = Le(s) ? Za(s) : Xe(s);
      if (o)
        for (const l in o)
          t[l] = o[l];
    }
    return t;
  } else if (Le(e) || ve(e))
    return e;
}
const Ya = /;(?![^(]*\))/g, Ja = /:([^]+)/, Qa = /\/\*[^]*?\*\//g;
function Za(e) {
  const t = {};
  return e.replace(Qa, "").split(Ya).forEach((n) => {
    if (n) {
      const s = n.split(Ja);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function me(e) {
  let t = "";
  if (Le(e))
    t = e;
  else if (le(e))
    for (let n = 0; n < e.length; n++) {
      const s = me(e[n]);
      s && (t += s + " ");
    }
  else if (ve(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const er = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", tr = /* @__PURE__ */ Uo(er);
function gi(e) {
  return !!e || e === "";
}
function nr(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = es(e[s], t[s]);
  return n;
}
function es(e, t) {
  if (e === t) return !0;
  let n = ul(e), s = ul(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = et(e), s = et(t), n || s)
    return e === t;
  if (n = le(e), s = le(t), n || s)
    return n && s ? nr(e, t) : !1;
  if (n = ve(e), s = ve(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, l = Object.keys(t).length;
    if (o !== l)
      return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
      if (a && !c || !a && c || !es(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function sr(e, t) {
  return e.findIndex((n) => es(n, t));
}
const _i = (e) => !!(e && e.__v_isRef === !0), Z = (e) => Le(e) ? e : e == null ? "" : le(e) || ve(e) && (e.toString === pi || !ue(e.toString)) ? _i(e) ? Z(e.value) : JSON.stringify(e, vi, 2) : String(e), vi = (e, t) => _i(t) ? vi(e, t.value) : hn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], l) => (n[lo(s, l) + " =>"] = o, n),
    {}
  )
} : Hs(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => lo(n))
} : et(t) ? lo(t) : ve(t) && !le(t) && !mi(t) ? String(t) : t, lo = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    et(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Te;
class bi {
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
function yi(e) {
  return new bi(e);
}
function wi() {
  return Te;
}
function or(e, t = !1) {
  Te && Te.cleanups.push(e);
}
let Me;
const io = /* @__PURE__ */ new WeakSet();
class xi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Te && (Te.active ? Te.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, io.has(this) && (io.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ci(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, fl(this), Fi(this);
    const t = Me, n = at;
    Me = this, at = !0;
    try {
      return this.fn();
    } finally {
      Mi(this), Me = t, at = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Go(t);
      this.deps = this.depsTail = void 0, fl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? io.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    wo(this) && this.run();
  }
  get dirty() {
    return wo(this);
  }
}
let Si = 0, Pn, Nn;
function Ci(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Nn, Nn = e;
    return;
  }
  e.next = Pn, Pn = e;
}
function Wo() {
  Si++;
}
function zo() {
  if (--Si > 0)
    return;
  if (Nn) {
    let t = Nn;
    for (Nn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Pn; ) {
    let t = Pn;
    for (Pn = void 0; t; ) {
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
function Fi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Mi(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Go(s), lr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function wo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Li(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Li(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Gn) || (e.globalVersion = Gn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !wo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Me, s = at;
  Me = e, at = !0;
  try {
    Fi(e);
    const o = e.fn(e._value);
    (t.version === 0 || vt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Me = n, at = s, Mi(e), e.flags &= -3;
  }
}
function Go(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let l = n.computed.deps; l; l = l.nextDep)
      Go(l, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function lr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let at = !0;
const Ii = [];
function xt() {
  Ii.push(at), at = !1;
}
function St() {
  const e = Ii.pop();
  at = e === void 0 ? !0 : e;
}
function fl(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Me;
    Me = void 0;
    try {
      t();
    } finally {
      Me = n;
    }
  }
}
let Gn = 0;
class ir {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ko {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Me || !at || Me === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Me)
      n = this.activeLink = new ir(Me, this), Me.deps ? (n.prevDep = Me.depsTail, Me.depsTail.nextDep = n, Me.depsTail = n) : Me.deps = Me.depsTail = n, ki(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Me.depsTail, n.nextDep = void 0, Me.depsTail.nextDep = n, Me.depsTail = n, Me.deps === n && (Me.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Gn++, this.notify(t);
  }
  notify(t) {
    Wo();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      zo();
    }
  }
}
function ki(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        ki(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ws = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ Symbol(
  ""
), xo = /* @__PURE__ */ Symbol(
  ""
), Kn = /* @__PURE__ */ Symbol(
  ""
);
function Be(e, t, n) {
  if (at && Me) {
    let s = ws.get(e);
    s || ws.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Ko()), o.map = s, o.key = n), o.track();
  }
}
function At(e, t, n, s, o, l) {
  const i = ws.get(e);
  if (!i) {
    Gn++;
    return;
  }
  const a = (c) => {
    c && c.trigger();
  };
  if (Wo(), t === "clear")
    i.forEach(a);
  else {
    const c = le(e), u = c && Us(n);
    if (c && n === "length") {
      const r = Number(s);
      i.forEach((d, f) => {
        (f === "length" || f === Kn || !et(f) && f >= r) && a(d);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(Kn)), t) {
        case "add":
          c ? u && a(i.get("length")) : (a(i.get(on)), hn(e) && a(i.get(xo)));
          break;
        case "delete":
          c || (a(i.get(on)), hn(e) && a(i.get(xo)));
          break;
        case "set":
          hn(e) && a(i.get(on));
          break;
      }
  }
  zo();
}
function ar(e, t) {
  const n = ws.get(e);
  return n && n.get(t);
}
function dn(e) {
  const t = /* @__PURE__ */ he(e);
  return t === e ? t : (Be(t, "iterate", Kn), /* @__PURE__ */ Qe(e) ? t : t.map(rt));
}
function Ks(e) {
  return Be(e = /* @__PURE__ */ he(e), "iterate", Kn), e;
}
function gt(e, t) {
  return /* @__PURE__ */ Et(e) ? bn(/* @__PURE__ */ yt(e) ? rt(t) : t) : rt(t);
}
const rr = {
  __proto__: null,
  [Symbol.iterator]() {
    return ao(this, Symbol.iterator, (e) => gt(this, e));
  },
  concat(...e) {
    return dn(this).concat(
      ...e.map((t) => le(t) ? dn(t) : t)
    );
  },
  entries() {
    return ao(this, "entries", (e) => (e[1] = gt(this, e[1]), e));
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
      (n) => n.map((s) => gt(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Ct(
      this,
      "find",
      e,
      t,
      (n) => gt(this, n),
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
      (n) => gt(this, n),
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
    return ro(this, "includes", e);
  },
  indexOf(...e) {
    return ro(this, "indexOf", e);
  },
  join(e) {
    return dn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ro(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ct(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Fn(this, "pop");
  },
  push(...e) {
    return Fn(this, "push", e);
  },
  reduce(e, ...t) {
    return pl(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return pl(this, "reduceRight", e, t);
  },
  shift() {
    return Fn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ct(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Fn(this, "splice", e);
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
    return Fn(this, "unshift", e);
  },
  values() {
    return ao(this, "values", (e) => gt(this, e));
  }
};
function ao(e, t, n) {
  const s = Ks(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ Qe(e) && (o._next = o.next, o.next = () => {
    const l = o._next();
    return l.done || (l.value = n(l.value)), l;
  }), o;
}
const cr = Array.prototype;
function Ct(e, t, n, s, o, l) {
  const i = Ks(e), a = i !== e && !/* @__PURE__ */ Qe(e), c = i[t];
  if (c !== cr[t]) {
    const d = c.apply(e, l);
    return a ? rt(d) : d;
  }
  let u = n;
  i !== e && (a ? u = function(d, f) {
    return n.call(this, gt(e, d), f, e);
  } : n.length > 2 && (u = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const r = c.call(i, u, s);
  return a && o ? o(r) : r;
}
function pl(e, t, n, s) {
  const o = Ks(e), l = o !== e && !/* @__PURE__ */ Qe(e);
  let i = n, a = !1;
  o !== e && (l ? (a = s.length === 0, i = function(u, r, d) {
    return a && (a = !1, u = gt(e, u)), n.call(this, u, gt(e, r), d, e);
  }) : n.length > 3 && (i = function(u, r, d) {
    return n.call(this, u, r, d, e);
  }));
  const c = o[t](i, ...s);
  return a ? gt(e, c) : c;
}
function ro(e, t, n) {
  const s = /* @__PURE__ */ he(e);
  Be(s, "iterate", Kn);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ qs(n[0]) ? (n[0] = /* @__PURE__ */ he(n[0]), s[t](...n)) : o;
}
function Fn(e, t, n = []) {
  xt(), Wo();
  const s = (/* @__PURE__ */ he(e))[t].apply(e, n);
  return zo(), St(), s;
}
const ur = /* @__PURE__ */ Uo("__proto__,__v_isRef,__isVue"), Ai = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(et)
);
function dr(e) {
  et(e) || (e = String(e));
  const t = /* @__PURE__ */ he(this);
  return Be(t, "has", e), t.hasOwnProperty(e);
}
class Di {
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
      return s === (o ? l ? wr : Pi : l ? Ri : Ti).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = le(t);
    if (!o) {
      let c;
      if (i && (c = rr[n]))
        return c;
      if (n === "hasOwnProperty")
        return dr;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ye(t) ? t : s
    );
    if ((et(n) ? Ai.has(n) : ur(n)) || (o || Be(t, "get", n), l))
      return a;
    if (/* @__PURE__ */ ye(a)) {
      const c = i && Us(n) ? a : a.value;
      return o && ve(c) ? /* @__PURE__ */ xs(c) : c;
    }
    return ve(a) ? o ? /* @__PURE__ */ xs(a) : /* @__PURE__ */ rn(a) : a;
  }
}
class Ei extends Di {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let l = t[n];
    const i = le(t) && Us(n);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ Et(l);
      if (!/* @__PURE__ */ Qe(s) && !/* @__PURE__ */ Et(s) && (l = /* @__PURE__ */ he(l), s = /* @__PURE__ */ he(s)), !i && /* @__PURE__ */ ye(l) && !/* @__PURE__ */ ye(s))
        return u || (l.value = s), !0;
    }
    const a = i ? Number(n) < t.length : be(t, n), c = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ye(t) ? t : o
    );
    return t === /* @__PURE__ */ he(o) && c && (a ? vt(s, l) && At(t, "set", n, s) : At(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = be(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && At(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!et(n) || !Ai.has(n)) && Be(t, "has", n), s;
  }
  ownKeys(t) {
    return Be(
      t,
      "iterate",
      le(t) ? "length" : on
    ), Reflect.ownKeys(t);
  }
}
class fr extends Di {
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
const pr = /* @__PURE__ */ new Ei(), mr = /* @__PURE__ */ new fr(), hr = /* @__PURE__ */ new Ei(!0);
const So = (e) => e, is = (e) => Reflect.getPrototypeOf(e);
function gr(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, l = /* @__PURE__ */ he(o), i = hn(l), a = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, u = o[e](...s), r = n ? So : t ? bn : rt;
    return !t && Be(
      l,
      "iterate",
      c ? xo : on
    ), Re(
      // inheriting all iterator properties
      Object.create(u),
      {
        // iterator protocol
        next() {
          const { value: d, done: f } = u.next();
          return f ? { value: d, done: f } : {
            value: a ? [r(d[0]), r(d[1])] : r(d),
            done: f
          };
        }
      }
    );
  };
}
function as(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function _r(e, t) {
  const n = {
    get(o) {
      const l = this.__v_raw, i = /* @__PURE__ */ he(l), a = /* @__PURE__ */ he(o);
      e || (vt(o, a) && Be(i, "get", o), Be(i, "get", a));
      const { has: c } = is(i), u = t ? So : e ? bn : rt;
      if (c.call(i, o))
        return u(l.get(o));
      if (c.call(i, a))
        return u(l.get(a));
      l !== i && l.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Be(/* @__PURE__ */ he(o), "iterate", on), o.size;
    },
    has(o) {
      const l = this.__v_raw, i = /* @__PURE__ */ he(l), a = /* @__PURE__ */ he(o);
      return e || (vt(o, a) && Be(i, "has", o), Be(i, "has", a)), o === a ? l.has(o) : l.has(o) || l.has(a);
    },
    forEach(o, l) {
      const i = this, a = i.__v_raw, c = /* @__PURE__ */ he(a), u = t ? So : e ? bn : rt;
      return !e && Be(c, "iterate", on), a.forEach((r, d) => o.call(l, u(r), u(d), i));
    }
  };
  return Re(
    n,
    e ? {
      add: as("add"),
      set: as("set"),
      delete: as("delete"),
      clear: as("clear")
    } : {
      add(o) {
        const l = /* @__PURE__ */ he(this), i = is(l), a = /* @__PURE__ */ he(o), c = !t && !/* @__PURE__ */ Qe(o) && !/* @__PURE__ */ Et(o) ? a : o;
        return i.has.call(l, c) || vt(o, c) && i.has.call(l, o) || vt(a, c) && i.has.call(l, a) || (l.add(c), At(l, "add", c, c)), this;
      },
      set(o, l) {
        !t && !/* @__PURE__ */ Qe(l) && !/* @__PURE__ */ Et(l) && (l = /* @__PURE__ */ he(l));
        const i = /* @__PURE__ */ he(this), { has: a, get: c } = is(i);
        let u = a.call(i, o);
        u || (o = /* @__PURE__ */ he(o), u = a.call(i, o));
        const r = c.call(i, o);
        return i.set(o, l), u ? vt(l, r) && At(i, "set", o, l) : At(i, "add", o, l), this;
      },
      delete(o) {
        const l = /* @__PURE__ */ he(this), { has: i, get: a } = is(l);
        let c = i.call(l, o);
        c || (o = /* @__PURE__ */ he(o), c = i.call(l, o)), a && a.call(l, o);
        const u = l.delete(o);
        return c && At(l, "delete", o, void 0), u;
      },
      clear() {
        const o = /* @__PURE__ */ he(this), l = o.size !== 0, i = o.clear();
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
    n[o] = gr(o, e, t);
  }), n;
}
function qo(e, t) {
  const n = _r(e, t);
  return (s, o, l) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    be(n, o) && o in s ? n : s,
    o,
    l
  );
}
const vr = {
  get: /* @__PURE__ */ qo(!1, !1)
}, br = {
  get: /* @__PURE__ */ qo(!1, !0)
}, yr = {
  get: /* @__PURE__ */ qo(!0, !1)
};
const Ti = /* @__PURE__ */ new WeakMap(), Ri = /* @__PURE__ */ new WeakMap(), Pi = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap();
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
function rn(e) {
  return /* @__PURE__ */ Et(e) ? e : Xo(
    e,
    !1,
    pr,
    vr,
    Ti
  );
}
// @__NO_SIDE_EFFECTS__
function Sr(e) {
  return Xo(
    e,
    !1,
    hr,
    br,
    Ri
  );
}
// @__NO_SIDE_EFFECTS__
function xs(e) {
  return Xo(
    e,
    !0,
    mr,
    yr,
    Pi
  );
}
function Xo(e, t, n, s, o) {
  if (!ve(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const l = o.get(e);
  if (l)
    return l;
  const i = xr(Ga(e));
  if (i === 0)
    return e;
  const a = new Proxy(
    e,
    i === 2 ? s : n
  );
  return o.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function yt(e) {
  return /* @__PURE__ */ Et(e) ? /* @__PURE__ */ yt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Et(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function qs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function he(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ he(t) : e;
}
function Yo(e) {
  return !be(e, "__v_skip") && Object.isExtensible(e) && hi(e, "__v_skip", !0), e;
}
const rt = (e) => ve(e) ? /* @__PURE__ */ rn(e) : e, bn = (e) => ve(e) ? /* @__PURE__ */ xs(e) : e;
// @__NO_SIDE_EFFECTS__
function ye(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function oe(e) {
  return Cr(e, !1);
}
function Cr(e, t) {
  return /* @__PURE__ */ ye(e) ? e : new Fr(e, t);
}
class Fr {
  constructor(t, n) {
    this.dep = new Ko(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ he(t), this._value = n ? t : rt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Qe(t) || /* @__PURE__ */ Et(t);
    t = s ? t : /* @__PURE__ */ he(t), vt(t, n) && (this._rawValue = t, this._value = s ? t : rt(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ ye(e) ? e.value : e;
}
const Mr = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ ye(o) && !/* @__PURE__ */ ye(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Ni(e) {
  return /* @__PURE__ */ yt(e) ? e : new Proxy(e, Mr);
}
// @__NO_SIDE_EFFECTS__
function Lr(e) {
  const t = le(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Oi(e, n);
  return t;
}
class Ir {
  constructor(t, n, s) {
    this._object = t, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._key = et(n) ? n : String(n), this._raw = /* @__PURE__ */ he(t);
    let o = !0, l = t;
    if (!le(t) || et(this._key) || !Us(this._key))
      do
        o = !/* @__PURE__ */ qs(l) || /* @__PURE__ */ Qe(l);
      while (o && (l = l.__v_raw));
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
    return ar(this._raw, this._key);
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
function Ar(e, t, n) {
  return /* @__PURE__ */ ye(e) ? e : ue(e) ? new kr(e) : ve(e) && arguments.length > 1 ? Oi(e, t, n) : /* @__PURE__ */ oe(e);
}
function Oi(e, t, n) {
  return new Ir(e, t, n);
}
class Dr {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ko(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Gn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Me !== this)
      return Ci(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Li(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Er(e, t, n = !1) {
  let s, o;
  return ue(e) ? s = e : (s = e.get, o = e.set), new Dr(s, o, n);
}
const rs = {}, Ss = /* @__PURE__ */ new WeakMap();
let Jt;
function Tr(e, t = !1, n = Jt) {
  if (n) {
    let s = Ss.get(n);
    s || Ss.set(n, s = []), s.push(e);
  }
}
function Rr(e, t, n = Ce) {
  const { immediate: s, deep: o, once: l, scheduler: i, augmentJob: a, call: c } = n, u = (b) => o ? b : /* @__PURE__ */ Qe(b) || o === !1 || o === 0 ? Dt(b, 1) : Dt(b);
  let r, d, f, p, m = !1, _ = !1;
  if (/* @__PURE__ */ ye(e) ? (d = () => e.value, m = /* @__PURE__ */ Qe(e)) : /* @__PURE__ */ yt(e) ? (d = () => u(e), m = !0) : le(e) ? (_ = !0, m = e.some((b) => /* @__PURE__ */ yt(b) || /* @__PURE__ */ Qe(b)), d = () => e.map((b) => {
    if (/* @__PURE__ */ ye(b))
      return b.value;
    if (/* @__PURE__ */ yt(b))
      return u(b);
    if (ue(b))
      return c ? c(b, 2) : b();
  })) : ue(e) ? t ? d = c ? () => c(e, 2) : e : d = () => {
    if (f) {
      xt();
      try {
        f();
      } finally {
        St();
      }
    }
    const b = Jt;
    Jt = r;
    try {
      return c ? c(e, 3, [p]) : e(p);
    } finally {
      Jt = b;
    }
  } : d = bt, t && o) {
    const b = d, S = o === !0 ? 1 / 0 : o;
    d = () => Dt(b(), S);
  }
  const F = wi(), w = () => {
    r.stop(), F && F.active && jo(F.effects, r);
  };
  if (l && t) {
    const b = t;
    t = (...S) => {
      const L = b(...S);
      return w(), L;
    };
  }
  let x = _ ? new Array(e.length).fill(rs) : rs;
  const I = (b) => {
    if (!(!(r.flags & 1) || !r.dirty && !b))
      if (t) {
        const S = r.run();
        if (b || o || m || (_ ? S.some((L, A) => vt(L, x[A])) : vt(S, x))) {
          f && f();
          const L = Jt;
          Jt = r;
          try {
            const A = [
              S,
              // pass undefined as the old value when it's changed for the first time
              x === rs ? void 0 : _ && x[0] === rs ? [] : x,
              p
            ];
            x = S, c ? c(t, 3, A) : (
              // @ts-expect-error
              t(...A)
            );
          } finally {
            Jt = L;
          }
        }
      } else
        r.run();
  };
  return a && a(I), r = new xi(d), r.scheduler = i ? () => i(I, !1) : I, p = (b) => Tr(b, !1, r), f = r.onStop = () => {
    const b = Ss.get(r);
    if (b) {
      if (c)
        c(b, 4);
      else
        for (const S of b) S();
      Ss.delete(r);
    }
  }, t ? s ? I(!0) : x = r.run() : i ? i(I.bind(null, !0), !0) : r.run(), w.pause = r.pause.bind(r), w.resume = r.resume.bind(r), w.stop = w, w;
}
function Dt(e, t = 1 / 0, n) {
  if (t <= 0 || !ve(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ye(e))
    Dt(e.value, t, n);
  else if (le(e))
    for (let s = 0; s < e.length; s++)
      Dt(e[s], t, n);
  else if (Hs(e) || hn(e))
    e.forEach((s) => {
      Dt(s, t, n);
    });
  else if (mi(e)) {
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
function ts(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    ns(o, t, n);
  }
}
function ot(e, t, n, s) {
  if (ue(e)) {
    const o = ts(e, t, n, s);
    return o && fi(o) && o.catch((l) => {
      ns(l, t, n);
    }), o;
  }
  if (le(e)) {
    const o = [];
    for (let l = 0; l < e.length; l++)
      o.push(ot(e[l], t, n, s));
    return o;
  }
}
function ns(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Ce;
  if (t) {
    let a = t.parent;
    const c = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const r = a.ec;
      if (r) {
        for (let d = 0; d < r.length; d++)
          if (r[d](e, c, u) === !1)
            return;
      }
      a = a.parent;
    }
    if (l) {
      xt(), ts(l, null, 10, [
        e,
        c,
        u
      ]), St();
      return;
    }
  }
  Pr(e, n, o, s, i);
}
function Pr(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const We = [];
let ht = -1;
const gn = [];
let Vt = null, pn = 0;
const $i = /* @__PURE__ */ Promise.resolve();
let Cs = null;
function xn(e) {
  const t = Cs || $i;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Nr(e) {
  let t = ht + 1, n = We.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = We[s], l = qn(o);
    l < e || l === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Jo(e) {
  if (!(e.flags & 1)) {
    const t = qn(e), n = We[We.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= qn(n) ? We.push(e) : We.splice(Nr(t), 0, e), e.flags |= 1, Vi();
  }
}
function Vi() {
  Cs || (Cs = $i.then(Hi));
}
function Or(e) {
  le(e) ? gn.push(...e) : Vt && e.id === -1 ? Vt.splice(pn + 1, 0, e) : e.flags & 1 || (gn.push(e), e.flags |= 1), Vi();
}
function ml(e, t, n = ht + 1) {
  for (; n < We.length; n++) {
    const s = We[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      We.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Bi(e) {
  if (gn.length) {
    const t = [...new Set(gn)].sort(
      (n, s) => qn(n) - qn(s)
    );
    if (gn.length = 0, Vt) {
      Vt.push(...t);
      return;
    }
    for (Vt = t, pn = 0; pn < Vt.length; pn++) {
      const n = Vt[pn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Vt = null, pn = 0;
  }
}
const qn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Hi(e) {
  try {
    for (ht = 0; ht < We.length; ht++) {
      const t = We[ht];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ts(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ht < We.length; ht++) {
      const t = We[ht];
      t && (t.flags &= -2);
    }
    ht = -1, We.length = 0, Bi(), Cs = null, (We.length || gn.length) && Hi();
  }
}
let $e = null, Ui = null;
function Fs(e) {
  const t = $e;
  return $e = e, Ui = e && e.type.__scopeId || null, t;
}
function ss(e, t = $e, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Is(-1);
    const l = Fs(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Fs(l), s._d && Is(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Ge(e, t) {
  if ($e === null)
    return e;
  const n = Zs($e), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [l, i, a, c = Ce] = t[o];
    l && (ue(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && Dt(i), s.push({
      dir: l,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: a,
      modifiers: c
    }));
  }
  return e;
}
function Kt(e, t, n, s) {
  const o = e.dirs, l = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const a = o[i];
    l && (a.oldValue = l[i].value);
    let c = a.dir[s];
    c && (xt(), ot(c, n, 8, [
      e.el,
      a,
      e,
      t
    ]), St());
  }
}
function $r(e, t) {
  if (Oe) {
    let n = Oe.provides;
    const s = Oe.parent && Oe.parent.provides;
    s === n && (n = Oe.provides = Object.create(s)), n[e] = t;
  }
}
function On(e, t, n = !1) {
  const s = nl();
  if (s || ln) {
    let o = ln ? ln._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ue(t) ? t.call(s && s.proxy) : t;
  }
}
function Vr() {
  return !!(nl() || ln);
}
const Br = /* @__PURE__ */ Symbol.for("v-scx"), Hr = () => On(Br);
function Ee(e, t, n) {
  return ji(e, t, n);
}
function ji(e, t, n = Ce) {
  const { immediate: s, deep: o, flush: l, once: i } = n, a = Re({}, n), c = t && s || !t && l !== "post";
  let u;
  if (yn) {
    if (l === "sync") {
      const p = Hr();
      u = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!c) {
      const p = () => {
      };
      return p.stop = bt, p.resume = bt, p.pause = bt, p;
    }
  }
  const r = Oe;
  a.call = (p, m, _) => ot(p, r, m, _);
  let d = !1;
  l === "post" ? a.scheduler = (p) => {
    je(p, r && r.suspense);
  } : l !== "sync" && (d = !0, a.scheduler = (p, m) => {
    m ? p() : Jo(p);
  }), a.augmentJob = (p) => {
    t && (p.flags |= 4), d && (p.flags |= 2, r && (p.id = r.uid, p.i = r));
  };
  const f = Rr(e, t, a);
  return yn && (u ? u.push(f) : c && f()), f;
}
function Ur(e, t, n) {
  const s = this.proxy, o = Le(e) ? e.includes(".") ? Wi(s, e) : () => s[e] : e.bind(s, s);
  let l;
  ue(t) ? l = t : (l = t.handler, n = t);
  const i = ls(this), a = ji(o, l.bind(s), n);
  return i(), a;
}
function Wi(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const Ot = /* @__PURE__ */ new WeakMap(), zi = /* @__PURE__ */ Symbol("_vte"), Gi = (e) => e.__isTeleport, Zt = (e) => e && (e.disabled || e.disabled === ""), jr = (e) => e && (e.defer || e.defer === ""), hl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, gl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Co = (e, t) => {
  const n = e && e.to;
  return Le(n) ? t ? t(n) : null : n;
}, Wr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, l, i, a, c, u) {
    const {
      mc: r,
      pc: d,
      pbc: f,
      o: { insert: p, querySelector: m, createText: _, createComment: F, parentNode: w }
    } = u, x = Zt(t.props);
    let { dynamicChildren: I } = t;
    const b = (A, R, E) => {
      A.shapeFlag & 16 && r(
        A.children,
        R,
        E,
        o,
        l,
        i,
        a,
        c
      );
    }, S = (A = t) => {
      const R = Zt(A.props), E = A.target = Co(A.props, m), G = Fo(E, A, _, p);
      E && (i !== "svg" && hl(E) ? i = "svg" : i !== "mathml" && gl(E) && (i = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(E), R || (b(A, E, G), An(A, !1)));
    }, L = (A) => {
      const R = () => {
        if (Ot.get(A) === R) {
          if (Ot.delete(A), Zt(A.props)) {
            const E = w(A.el) || n;
            b(A, E, A.anchor), An(A, !0);
          }
          S(A);
        }
      };
      Ot.set(A, R), je(R, l);
    };
    if (e == null) {
      const A = t.el = _(""), R = t.anchor = _("");
      if (p(A, n, s), p(R, n, s), jr(t.props) || l && l.pendingBranch) {
        L(t);
        return;
      }
      x && (b(t, n, R), An(t, !0)), S();
    } else {
      t.el = e.el;
      const A = t.anchor = e.anchor, R = Ot.get(e);
      if (R) {
        R.flags |= 8, Ot.delete(e), L(t);
        return;
      }
      t.targetStart = e.targetStart;
      const E = t.target = e.target, G = t.targetAnchor = e.targetAnchor, X = Zt(e.props), U = X ? n : E, j = X ? A : G;
      if (i === "svg" || hl(E) ? i = "svg" : (i === "mathml" || gl(E)) && (i = "mathml"), I ? (f(
        e.dynamicChildren,
        I,
        U,
        o,
        l,
        i,
        a
      ), tl(e, t, !0)) : c || d(
        e,
        t,
        U,
        j,
        o,
        l,
        i,
        a,
        !1
      ), x)
        X ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : cs(
          t,
          n,
          A,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const N = Co(t.props, m);
        N && (t.target = N, cs(
          t,
          N,
          null,
          u,
          0
        ));
      } else X && cs(
        t,
        E,
        G,
        u,
        1
      );
      An(t, x);
    }
  },
  remove(e, t, n, { um: s, o: { remove: o } }, l) {
    const {
      shapeFlag: i,
      children: a,
      anchor: c,
      targetStart: u,
      targetAnchor: r,
      target: d,
      props: f
    } = e, p = Zt(f), m = l || !p, _ = Ot.get(e);
    if (_ && (_.flags |= 8, Ot.delete(e)), d && (o(u), o(r)), l && o(c), !_ && (p || d) && i & 16)
      for (let F = 0; F < a.length; F++) {
        const w = a[F];
        s(
          w,
          t,
          n,
          m,
          !!w.dynamicChildren
        );
      }
  },
  move: cs,
  hydrate: zr
};
function cs(e, t, n, { o: { insert: s }, m: o }, l = 2) {
  l === 0 && s(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: c, children: u, props: r } = e, d = l === 2;
  if (d && s(i, t, n), !Ot.has(e) && (!d || Zt(r)) && c & 16)
    for (let f = 0; f < u.length; f++)
      o(
        u[f],
        t,
        n,
        2
      );
  d && s(a, t, n);
}
function zr(e, t, n, s, o, l, {
  o: { nextSibling: i, parentNode: a, querySelector: c, insert: u, createText: r }
}, d) {
  function f(F, w) {
    let x = w;
    for (; x; ) {
      if (x && x.nodeType === 8) {
        if (x.data === "teleport start anchor")
          t.targetStart = x;
        else if (x.data === "teleport anchor") {
          t.targetAnchor = x, F._lpa = t.targetAnchor && i(t.targetAnchor);
          break;
        }
      }
      x = i(x);
    }
  }
  function p(F, w) {
    w.anchor = d(
      i(F),
      w,
      a(F),
      n,
      s,
      o,
      l
    );
  }
  const m = t.target = Co(
    t.props,
    c
  ), _ = Zt(t.props);
  if (m) {
    const F = m._lpa || m.firstChild;
    t.shapeFlag & 16 && (_ ? (p(e, t), f(m, F), t.targetAnchor || Fo(
      m,
      t,
      r,
      u,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      a(e) === m ? e : null
    )) : (t.anchor = i(e), f(m, F), t.targetAnchor || Fo(m, t, r, u), d(
      F && i(F),
      t,
      m,
      n,
      s,
      o,
      l
    ))), An(t, _);
  } else _ && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = i(e));
  return t.anchor && i(t.anchor);
}
const Ki = Wr;
function An(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function Fo(e, t, n, s, o = null) {
  const l = t.targetStart = n(""), i = t.targetAnchor = n("");
  return l[zi] = i, e && (s(l, e, o), s(i, e, o)), i;
}
const st = /* @__PURE__ */ Symbol("_leaveCb"), Mn = /* @__PURE__ */ Symbol("_enterCb");
function Gr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return cn(() => {
    e.isMounted = !0;
  }), Sn(() => {
    e.isUnmounting = !0;
  }), e;
}
const nt = [Function, Array], qi = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: nt,
  onEnter: nt,
  onAfterEnter: nt,
  onEnterCancelled: nt,
  // leave
  onBeforeLeave: nt,
  onLeave: nt,
  onAfterLeave: nt,
  onLeaveCancelled: nt,
  // appear
  onBeforeAppear: nt,
  onAppear: nt,
  onAfterAppear: nt,
  onAppearCancelled: nt
}, Xi = (e) => {
  const t = e.subTree;
  return t.component ? Xi(t.component) : t;
}, Kr = {
  name: "BaseTransition",
  props: qi,
  setup(e, { slots: t }) {
    const n = nl(), s = Gr();
    return () => {
      const o = t.default && Qi(t.default(), !0), l = o && o.length ? Yi(o) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? ee() : void 0
      );
      if (!l)
        return;
      const i = /* @__PURE__ */ he(e), { mode: a } = i;
      if (s.isLeaving)
        return co(l);
      const c = _l(l);
      if (!c)
        return co(l);
      let u = Mo(
        c,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => u = d
      );
      c.type !== He && Xn(c, u);
      let r = n.subTree && _l(n.subTree);
      if (r && r.type !== He && !en(r, c) && Xi(n).type !== He) {
        let d = Mo(
          r,
          i,
          s,
          n
        );
        if (Xn(r, d), a === "out-in" && c.type !== He)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, r = void 0;
          }, co(l);
        a === "in-out" && c.type !== He ? d.delayLeave = (f, p, m) => {
          const _ = Ji(
            s,
            r
          );
          _[String(r.key)] = r, f[st] = () => {
            p(), f[st] = void 0, delete u.delayedLeave, r = void 0;
          }, u.delayedLeave = () => {
            m(), delete u.delayedLeave, r = void 0;
          };
        } : r = void 0;
      } else r && (r = void 0);
      return l;
    };
  }
};
function Yi(e) {
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
const qr = Kr;
function Ji(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Mo(e, t, n, s, o) {
  const {
    appear: l,
    mode: i,
    persisted: a = !1,
    onBeforeEnter: c,
    onEnter: u,
    onAfterEnter: r,
    onEnterCancelled: d,
    onBeforeLeave: f,
    onLeave: p,
    onAfterLeave: m,
    onLeaveCancelled: _,
    onBeforeAppear: F,
    onAppear: w,
    onAfterAppear: x,
    onAppearCancelled: I
  } = t, b = String(e.key), S = Ji(n, e), L = (E, G) => {
    E && ot(
      E,
      s,
      9,
      G
    );
  }, A = (E, G) => {
    const X = G[1];
    L(E, G), le(E) ? E.every((U) => U.length <= 1) && X() : E.length <= 1 && X();
  }, R = {
    mode: i,
    persisted: a,
    beforeEnter(E) {
      let G = c;
      if (!n.isMounted)
        if (l)
          G = F || c;
        else
          return;
      E[st] && E[st](
        !0
        /* cancelled */
      );
      const X = S[b];
      X && en(e, X) && X.el[st] && X.el[st](), L(G, [E]);
    },
    enter(E) {
      if (S[b] === e) return;
      let G = u, X = r, U = d;
      if (!n.isMounted)
        if (l)
          G = w || u, X = x || r, U = I || d;
        else
          return;
      let j = !1;
      E[Mn] = ($) => {
        j || (j = !0, $ ? L(U, [E]) : L(X, [E]), R.delayedLeave && R.delayedLeave(), E[Mn] = void 0);
      };
      const N = E[Mn].bind(null, !1);
      G ? A(G, [E, N]) : N();
    },
    leave(E, G) {
      const X = String(e.key);
      if (E[Mn] && E[Mn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return G();
      L(f, [E]);
      let U = !1;
      E[st] = (N) => {
        U || (U = !0, G(), N ? L(_, [E]) : L(m, [E]), E[st] = void 0, S[X] === e && delete S[X]);
      };
      const j = E[st].bind(null, !1);
      S[X] = e, p ? A(p, [E, j]) : j();
    },
    clone(E) {
      const G = Mo(
        E,
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
function co(e) {
  if (os(e))
    return e = Ht(e), e.children = null, e;
}
function _l(e) {
  if (!os(e))
    return Gi(e.type) && e.children ? Yi(e.children) : e;
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
function Xn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Xn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Qi(e, t = !1, n) {
  let s = [], o = 0;
  for (let l = 0; l < e.length; l++) {
    let i = e[l];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : l);
    i.type === fe ? (i.patchFlag & 128 && o++, s = s.concat(
      Qi(i.children, t, a)
    )) : (t || i.type !== He) && s.push(a != null ? Ht(i, { key: a }) : i);
  }
  if (o > 1)
    for (let l = 0; l < s.length; l++)
      s[l].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function xe(e, t) {
  return ue(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Re({ name: e.name }, t, { setup: e })
  ) : e;
}
function Qo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function vl(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Ms = /* @__PURE__ */ new WeakMap();
function $n(e, t, n, s, o = !1) {
  if (le(e)) {
    e.forEach(
      (_, F) => $n(
        _,
        t && (le(t) ? t[F] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (_n(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && $n(e, t, n, s.component.subTree);
    return;
  }
  const l = s.shapeFlag & 4 ? Zs(s.component) : s.el, i = o ? null : l, { i: a, r: c } = e, u = t && t.r, r = a.refs === Ce ? a.refs = {} : a.refs, d = a.setupState, f = /* @__PURE__ */ he(d), p = d === Ce ? di : (_) => vl(r, _) ? !1 : be(f, _), m = (_, F) => !(F && vl(r, F));
  if (u != null && u !== c) {
    if (bl(t), Le(u))
      r[u] = null, p(u) && (d[u] = null);
    else if (/* @__PURE__ */ ye(u)) {
      const _ = t;
      m(u, _.k) && (u.value = null), _.k && (r[_.k] = null);
    }
  }
  if (ue(c)) {
    xt();
    try {
      ts(c, a, 12, [i, r]);
    } finally {
      St();
    }
  } else {
    const _ = Le(c), F = /* @__PURE__ */ ye(c);
    if (_ || F) {
      const w = () => {
        if (e.f) {
          const x = _ ? p(c) ? d[c] : r[c] : m() || !e.k ? c.value : r[e.k];
          if (o)
            le(x) && jo(x, l);
          else if (le(x))
            x.includes(l) || x.push(l);
          else if (_)
            r[c] = [l], p(c) && (d[c] = r[c]);
          else {
            const I = [l];
            m(c, e.k) && (c.value = I), e.k && (r[e.k] = I);
          }
        } else _ ? (r[c] = i, p(c) && (d[c] = i)) : F && (m(c, e.k) && (c.value = i), e.k && (r[e.k] = i));
      };
      if (i) {
        const x = () => {
          w(), Ms.delete(e);
        };
        x.id = -1, Ms.set(e, x), je(x, n);
      } else
        bl(e), w();
    }
  }
}
function bl(e) {
  const t = Ms.get(e);
  t && (t.flags |= 8, Ms.delete(e));
}
const yl = (e) => e.nodeType === 8;
Gs().requestIdleCallback;
Gs().cancelIdleCallback;
function Xr(e, t) {
  if (yl(e) && e.data === "[") {
    let n = 1, s = e.nextSibling;
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1)
          break;
      } else if (yl(s))
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
function jt(e) {
  ue(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: o = 200,
    hydrate: l,
    timeout: i,
    // undefined = never times out
    suspensible: a = !0,
    onError: c
  } = e;
  let u = null, r, d = 0;
  const f = () => (d++, u = null, p()), p = () => {
    let m;
    return u || (m = u = t().catch((_) => {
      if (_ = _ instanceof Error ? _ : new Error(String(_)), c)
        return new Promise((F, w) => {
          c(_, () => F(f()), () => w(_), d + 1);
        });
      throw _;
    }).then((_) => m !== u && u ? u : (_ && (_.__esModule || _[Symbol.toStringTag] === "Module") && (_ = _.default), r = _, _)));
  };
  return /* @__PURE__ */ xe({
    name: "AsyncComponentWrapper",
    __asyncLoader: p,
    __asyncHydrate(m, _, F) {
      let w = !1;
      (_.bu || (_.bu = [])).push(() => w = !0);
      const x = () => {
        w || F();
      }, I = l ? () => {
        const b = l(
          x,
          (S) => Xr(m, S)
        );
        b && (_.bum || (_.bum = [])).push(b);
      } : x;
      r ? I() : p().then(() => !_.isUnmounted && I());
    },
    get __asyncResolved() {
      return r;
    },
    setup() {
      const m = Oe;
      if (Qo(m), r)
        return () => us(r, m);
      const _ = (S) => {
        u = null, ns(
          S,
          m,
          13,
          !s
        );
      };
      if (a && m.suspense || yn)
        return p().then((S) => () => us(S, m)).catch((S) => (_(S), () => s ? q(s, {
          error: S
        }) : null));
      const F = /* @__PURE__ */ oe(!1), w = /* @__PURE__ */ oe(), x = /* @__PURE__ */ oe(!!o);
      let I, b;
      return Ys(() => {
        I != null && clearTimeout(I), b != null && clearTimeout(b);
      }), o && (b = setTimeout(() => {
        m.isUnmounted || (x.value = !1);
      }, o)), i != null && (I = setTimeout(() => {
        if (!m.isUnmounted && !F.value && !w.value) {
          const S = new Error(
            `Async component timed out after ${i}ms.`
          );
          _(S), w.value = S;
        }
      }, i)), p().then(() => {
        m.isUnmounted || (F.value = !0, m.parent && os(m.parent.vnode) && m.parent.update());
      }).catch((S) => {
        if (m.isUnmounted) {
          u = null;
          return;
        }
        _(S), w.value = S;
      }), () => {
        if (F.value && r)
          return us(r, m);
        if (w.value && s)
          return q(s, {
            error: w.value
          });
        if (n && !x.value)
          return us(
            n,
            m
          );
      };
    }
  });
}
function us(e, t) {
  const { ref: n, props: s, children: o, ce: l } = t.vnode, i = q(e, s, o);
  return i.ref = n, i.ce = l, delete t.vnode.ce, i;
}
const os = (e) => e.type.__isKeepAlive;
function Yr(e, t) {
  Zi(e, "a", t);
}
function Jr(e, t) {
  Zi(e, "da", t);
}
function Zi(e, t, n = Oe) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Xs(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      os(o.parent.vnode) && Qr(s, t, n, o), o = o.parent;
  }
}
function Qr(e, t, n, s) {
  const o = Xs(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Ys(() => {
    jo(s[t], o);
  }, n);
}
function Xs(e, t, n = Oe, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...i) => {
      xt();
      const a = ls(n), c = ot(t, n, e, i);
      return a(), St(), c;
    });
    return s ? o.unshift(l) : o.push(l), l;
  }
}
const Rt = (e) => (t, n = Oe) => {
  (!yn || e === "sp") && Xs(e, (...s) => t(...s), n);
}, Zr = Rt("bm"), cn = Rt("m"), ec = Rt(
  "bu"
), tc = Rt("u"), Sn = Rt(
  "bum"
), Ys = Rt("um"), nc = Rt(
  "sp"
), sc = Rt("rtg"), oc = Rt("rtc");
function lc(e, t = Oe) {
  Xs("ec", e, t);
}
const ic = "components", ea = /* @__PURE__ */ Symbol.for("v-ndc");
function ac(e) {
  return Le(e) ? rc(ic, e, !1) || e : e || ea;
}
function rc(e, t, n = !0, s = !1) {
  const o = $e || Oe;
  if (o) {
    const l = o.type;
    {
      const a = Kc(
        l,
        !1
      );
      if (a && (a === t || a === ze(t) || a === Ws(ze(t))))
        return l;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      wl(o[e] || l[e], t) || // global registration
      wl(o.appContext[e], t)
    );
    return !i && s ? l : i;
  }
}
function wl(e, t) {
  return e && (e[t] || e[ze(t)] || e[Ws(ze(t))]);
}
function ke(e, t, n, s) {
  let o;
  const l = n, i = le(e);
  if (i || Le(e)) {
    const a = i && /* @__PURE__ */ yt(e);
    let c = !1, u = !1;
    a && (c = !/* @__PURE__ */ Qe(e), u = /* @__PURE__ */ Et(e), e = Ks(e)), o = new Array(e.length);
    for (let r = 0, d = e.length; r < d; r++)
      o[r] = t(
        c ? u ? bn(rt(e[r])) : rt(e[r]) : e[r],
        r,
        void 0,
        l
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let a = 0; a < e; a++)
      o[a] = t(a + 1, a, void 0, l);
  } else if (ve(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (a, c) => t(a, c, void 0, l)
      );
    else {
      const a = Object.keys(e);
      o = new Array(a.length);
      for (let c = 0, u = a.length; c < u; c++) {
        const r = a[c];
        o[c] = t(e[r], r, c, l);
      }
    }
  else
    o = [];
  return o;
}
function cc(e, t, n = {}, s, o) {
  if ($e.ce || $e.parent && _n($e.parent) && $e.parent.ce) {
    const u = Object.keys(n).length > 0;
    return M(), Ie(
      fe,
      null,
      [q("slot", n, s)],
      u ? -2 : 64
    );
  }
  let l = e[t];
  l && l._c && (l._d = !1), M();
  const i = l && ta(l(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, c = Ie(
    fe,
    {
      key: (a && !et(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || [],
    i && e._ === 1 ? 64 : -2
  );
  return l && l._c && (l._d = !0), c;
}
function ta(e) {
  return e.some((t) => Jn(t) ? !(t.type === He || t.type === fe && !ta(t.children)) : !0) ? e : null;
}
const Lo = (e) => e ? ya(e) ? Zs(e) : Lo(e.parent) : null, Vn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Re(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Lo(e.parent),
    $root: (e) => Lo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => sa(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Jo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = xn.bind(e.proxy)),
    $watch: (e) => Ur.bind(e)
  })
), uo = (e, t) => e !== Ce && !e.__isScriptSetup && be(e, t), uc = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: l, accessCache: i, type: a, appContext: c } = e;
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
        if (uo(s, t))
          return i[t] = 1, s[t];
        if (o !== Ce && be(o, t))
          return i[t] = 2, o[t];
        if (be(l, t))
          return i[t] = 3, l[t];
        if (n !== Ce && be(n, t))
          return i[t] = 4, n[t];
        Io && (i[t] = 0);
      }
    }
    const u = Vn[t];
    let r, d;
    if (u)
      return t === "$attrs" && Be(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (r = a.__cssModules) && (r = r[t])
    )
      return r;
    if (n !== Ce && be(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      d = c.config.globalProperties, be(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: l } = e;
    return uo(o, t) ? (o[t] = n, !0) : s !== Ce && be(s, t) ? (s[t] = n, !0) : be(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: l, type: i }
  }, a) {
    let c;
    return !!(n[a] || e !== Ce && a[0] !== "$" && be(e, a) || uo(t, a) || be(l, a) || be(s, a) || be(Vn, a) || be(o.config.globalProperties, a) || (c = i.__cssModules) && c[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : be(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function xl(e) {
  return le(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Io = !0;
function dc(e) {
  const t = sa(e), n = e.proxy, s = e.ctx;
  Io = !1, t.beforeCreate && Sl(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: l,
    methods: i,
    watch: a,
    provide: c,
    inject: u,
    // lifecycle
    created: r,
    beforeMount: d,
    mounted: f,
    beforeUpdate: p,
    updated: m,
    activated: _,
    deactivated: F,
    beforeDestroy: w,
    beforeUnmount: x,
    destroyed: I,
    unmounted: b,
    render: S,
    renderTracked: L,
    renderTriggered: A,
    errorCaptured: R,
    serverPrefetch: E,
    // public API
    expose: G,
    inheritAttrs: X,
    // assets
    components: U,
    directives: j,
    filters: N
  } = t;
  if (u && fc(u, s, null), i)
    for (const C in i) {
      const v = i[C];
      ue(v) && (s[C] = v.bind(n));
    }
  if (o) {
    const C = o.call(n, n);
    ve(C) && (e.data = /* @__PURE__ */ rn(C));
  }
  if (Io = !0, l)
    for (const C in l) {
      const v = l[C], P = ue(v) ? v.bind(n, n) : ue(v.get) ? v.get.bind(n, n) : bt, ae = !ue(v) && ue(v.set) ? v.set.bind(n) : bt, ne = Y({
        get: P,
        set: ae
      });
      Object.defineProperty(s, C, {
        enumerable: !0,
        configurable: !0,
        get: () => ne.value,
        set: (_e) => ne.value = _e
      });
    }
  if (a)
    for (const C in a)
      na(a[C], s, n, C);
  if (c) {
    const C = ue(c) ? c.call(n) : c;
    Reflect.ownKeys(C).forEach((v) => {
      $r(v, C[v]);
    });
  }
  r && Sl(r, e, "c");
  function O(C, v) {
    le(v) ? v.forEach((P) => C(P.bind(n))) : v && C(v.bind(n));
  }
  if (O(Zr, d), O(cn, f), O(ec, p), O(tc, m), O(Yr, _), O(Jr, F), O(lc, R), O(oc, L), O(sc, A), O(Sn, x), O(Ys, b), O(nc, E), le(G))
    if (G.length) {
      const C = e.exposed || (e.exposed = {});
      G.forEach((v) => {
        Object.defineProperty(C, v, {
          get: () => n[v],
          set: (P) => n[v] = P,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === bt && (e.render = S), X != null && (e.inheritAttrs = X), U && (e.components = U), j && (e.directives = j), E && Qo(e);
}
function fc(e, t, n = bt) {
  le(e) && (e = ko(e));
  for (const s in e) {
    const o = e[s];
    let l;
    ve(o) ? "default" in o ? l = On(
      o.from || s,
      o.default,
      !0
    ) : l = On(o.from || s) : l = On(o), /* @__PURE__ */ ye(l) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (i) => l.value = i
    }) : t[s] = l;
  }
}
function Sl(e, t, n) {
  ot(
    le(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function na(e, t, n, s) {
  let o = s.includes(".") ? Wi(n, s) : () => n[s];
  if (Le(e)) {
    const l = t[e];
    ue(l) && Ee(o, l);
  } else if (ue(e))
    Ee(o, e.bind(n));
  else if (ve(e))
    if (le(e))
      e.forEach((l) => na(l, t, n, s));
    else {
      const l = ue(e.handler) ? e.handler.bind(n) : t[e.handler];
      ue(l) && Ee(o, l, e);
    }
}
function sa(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: l,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = l.get(t);
  let c;
  return a ? c = a : !o.length && !n && !s ? c = t : (c = {}, o.length && o.forEach(
    (u) => Ls(c, u, i, !0)
  ), Ls(c, t, i)), ve(t) && l.set(t, c), c;
}
function Ls(e, t, n, s = !1) {
  const { mixins: o, extends: l } = t;
  l && Ls(e, l, n, !0), o && o.forEach(
    (i) => Ls(e, i, n, !0)
  );
  for (const i in t)
    if (!(s && i === "expose")) {
      const a = pc[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const pc = {
  data: Cl,
  props: Fl,
  emits: Fl,
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
  watch: hc,
  // provide / inject
  provide: Cl,
  inject: mc
};
function Cl(e, t) {
  return t ? e ? function() {
    return Re(
      ue(e) ? e.call(this, this) : e,
      ue(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function mc(e, t) {
  return Dn(ko(e), ko(t));
}
function ko(e) {
  if (le(e)) {
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
  return e ? Re(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Fl(e, t) {
  return e ? le(e) && le(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Re(
    /* @__PURE__ */ Object.create(null),
    xl(e),
    xl(t ?? {})
  ) : t;
}
function hc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Re(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Ue(e[s], t[s]);
  return n;
}
function oa() {
  return {
    app: null,
    config: {
      isNativeTag: di,
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
let gc = 0;
function _c(e, t) {
  return function(s, o = null) {
    ue(s) || (s = Re({}, s)), o != null && !ve(o) && (o = null);
    const l = oa(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let c = !1;
    const u = l.app = {
      _uid: gc++,
      _component: s,
      _props: o,
      _container: null,
      _context: l,
      _instance: null,
      version: Xc,
      get config() {
        return l.config;
      },
      set config(r) {
      },
      use(r, ...d) {
        return i.has(r) || (r && ue(r.install) ? (i.add(r), r.install(u, ...d)) : ue(r) && (i.add(r), r(u, ...d))), u;
      },
      mixin(r) {
        return l.mixins.includes(r) || l.mixins.push(r), u;
      },
      component(r, d) {
        return d ? (l.components[r] = d, u) : l.components[r];
      },
      directive(r, d) {
        return d ? (l.directives[r] = d, u) : l.directives[r];
      },
      mount(r, d, f) {
        if (!c) {
          const p = u._ceVNode || q(s, o);
          return p.appContext = l, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(p, r, f), c = !0, u._container = r, r.__vue_app__ = u, Zs(p.component);
        }
      },
      onUnmount(r) {
        a.push(r);
      },
      unmount() {
        c && (ot(
          a,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(r, d) {
        return l.provides[r] = d, u;
      },
      runWithContext(r) {
        const d = ln;
        ln = u;
        try {
          return r();
        } finally {
          ln = d;
        }
      }
    };
    return u;
  };
}
let ln = null;
const vc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ze(t)}Modifiers`] || e[`${Ut(t)}Modifiers`];
function bc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Ce;
  let o = n;
  const l = t.startsWith("update:"), i = l && vc(s, t.slice(7));
  i && (i.trim && (o = n.map((r) => Le(r) ? r.trim() : r)), i.number && (o = n.map(zs)));
  let a, c = s[a = oo(t)] || // also try camelCase event handler (#2249)
  s[a = oo(ze(t))];
  !c && l && (c = s[a = oo(Ut(t))]), c && ot(
    c,
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
const yc = /* @__PURE__ */ new WeakMap();
function la(e, t, n = !1) {
  const s = n ? yc : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const l = e.emits;
  let i = {}, a = !1;
  if (!ue(e)) {
    const c = (u) => {
      const r = la(u, t, !0);
      r && (a = !0, Re(i, r));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !l && !a ? (ve(e) && s.set(e, null), null) : (le(l) ? l.forEach((c) => i[c] = null) : Re(i, l), ve(e) && s.set(e, i), i);
}
function Js(e, t) {
  return !e || !Vs(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), be(e, t[0].toLowerCase() + t.slice(1)) || be(e, Ut(t)) || be(e, t));
}
function Ml(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [l],
    slots: i,
    attrs: a,
    emit: c,
    render: u,
    renderCache: r,
    props: d,
    data: f,
    setupState: p,
    ctx: m,
    inheritAttrs: _
  } = e, F = Fs(e);
  let w, x;
  try {
    if (n.shapeFlag & 4) {
      const b = o || s, S = b;
      w = _t(
        u.call(
          S,
          b,
          r,
          d,
          p,
          f,
          m
        )
      ), x = a;
    } else {
      const b = t;
      w = _t(
        b.length > 1 ? b(
          d,
          { attrs: a, slots: i, emit: c }
        ) : b(
          d,
          null
        )
      ), x = t.props ? a : wc(a);
    }
  } catch (b) {
    Bn.length = 0, ns(b, e, 1), w = q(He);
  }
  let I = w;
  if (x && _ !== !1) {
    const b = Object.keys(x), { shapeFlag: S } = I;
    b.length && S & 7 && (l && b.some(Bs) && (x = xc(
      x,
      l
    )), I = Ht(I, x, !1, !0));
  }
  return n.dirs && (I = Ht(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && Xn(I, n.transition), w = I, Fs(F), w;
}
const wc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Vs(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, xc = (e, t) => {
  const n = {};
  for (const s in e)
    (!Bs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Sc(e, t, n) {
  const { props: s, children: o, component: l } = e, { props: i, children: a, patchFlag: c } = t, u = l.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? Ll(s, i, u) : !!i;
    if (c & 8) {
      const r = t.dynamicProps;
      for (let d = 0; d < r.length; d++) {
        const f = r[d];
        if (ia(i, s, f) && !Js(u, f))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : s === i ? !1 : s ? i ? Ll(s, i, u) : !0 : !!i;
  return !1;
}
function Ll(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    if (ia(t, e, l) && !Js(n, l))
      return !0;
  }
  return !1;
}
function ia(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && ve(s) && ve(o) ? !es(s, o) : s !== o;
}
function Cc({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = s, e = o), o === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const aa = {}, ra = () => Object.create(aa), ca = (e) => Object.getPrototypeOf(e) === aa;
function Fc(e, t, n, s = !1) {
  const o = {}, l = ra();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ua(e, t, o, l);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ Sr(o) : e.type.props ? e.props = o : e.props = l, e.attrs = l;
}
function Mc(e, t, n, s) {
  const {
    props: o,
    attrs: l,
    vnode: { patchFlag: i }
  } = e, a = /* @__PURE__ */ he(o), [c] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const r = e.vnode.dynamicProps;
      for (let d = 0; d < r.length; d++) {
        let f = r[d];
        if (Js(e.emitsOptions, f))
          continue;
        const p = t[f];
        if (c)
          if (be(l, f))
            p !== l[f] && (l[f] = p, u = !0);
          else {
            const m = ze(f);
            o[m] = Ao(
              c,
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
    ua(e, t, o, l) && (u = !0);
    let r;
    for (const d in a)
      (!t || // for camelCase
      !be(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((r = Ut(d)) === d || !be(t, r))) && (c ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[r] !== void 0) && (o[d] = Ao(
        c,
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
function ua(e, t, n, s) {
  const [o, l] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let c in t) {
      if (Rn(c))
        continue;
      const u = t[c];
      let r;
      o && be(o, r = ze(c)) ? !l || !l.includes(r) ? n[r] = u : (a || (a = {}))[r] = u : Js(e.emitsOptions, c) || (!(c in s) || u !== s[c]) && (s[c] = u, i = !0);
    }
  if (l) {
    const c = /* @__PURE__ */ he(n), u = a || Ce;
    for (let r = 0; r < l.length; r++) {
      const d = l[r];
      n[d] = Ao(
        o,
        c,
        d,
        u[d],
        e,
        !be(u, d)
      );
    }
  }
  return i;
}
function Ao(e, t, n, s, o, l) {
  const i = e[n];
  if (i != null) {
    const a = be(i, "default");
    if (a && s === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && ue(c)) {
        const { propsDefaults: u } = o;
        if (n in u)
          s = u[n];
        else {
          const r = ls(o);
          s = u[n] = c.call(
            null,
            t
          ), r();
        }
      } else
        s = c;
      o.ce && o.ce._setProp(n, s);
    }
    i[
      0
      /* shouldCast */
    ] && (l && !a ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Ut(n)) && (s = !0));
  }
  return s;
}
const Lc = /* @__PURE__ */ new WeakMap();
function da(e, t, n = !1) {
  const s = n ? Lc : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const l = e.props, i = {}, a = [];
  let c = !1;
  if (!ue(e)) {
    const r = (d) => {
      c = !0;
      const [f, p] = da(d, t, !0);
      Re(i, f), p && a.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
  }
  if (!l && !c)
    return ve(e) && s.set(e, mn), mn;
  if (le(l))
    for (let r = 0; r < l.length; r++) {
      const d = ze(l[r]);
      Il(d) && (i[d] = Ce);
    }
  else if (l)
    for (const r in l) {
      const d = ze(r);
      if (Il(d)) {
        const f = l[r], p = i[d] = le(f) || ue(f) ? { type: f } : Re({}, f), m = p.type;
        let _ = !1, F = !0;
        if (le(m))
          for (let w = 0; w < m.length; ++w) {
            const x = m[w], I = ue(x) && x.name;
            if (I === "Boolean") {
              _ = !0;
              break;
            } else I === "String" && (F = !1);
          }
        else
          _ = ue(m) && m.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = _, p[
          1
          /* shouldCastTrue */
        ] = F, (_ || be(p, "default")) && a.push(d);
      }
    }
  const u = [i, a];
  return ve(e) && s.set(e, u), u;
}
function Il(e) {
  return e[0] !== "$" && !Rn(e);
}
const Zo = (e) => e === "_" || e === "_ctx" || e === "$stable", el = (e) => le(e) ? e.map(_t) : [_t(e)], Ic = (e, t, n) => {
  if (t._n)
    return t;
  const s = ss((...o) => el(t(...o)), n);
  return s._c = !1, s;
}, fa = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Zo(o)) continue;
    const l = e[o];
    if (ue(l))
      t[o] = Ic(o, l, s);
    else if (l != null) {
      const i = el(l);
      t[o] = () => i;
    }
  }
}, pa = (e, t) => {
  const n = el(t);
  e.slots.default = () => n;
}, ma = (e, t, n) => {
  for (const s in t)
    (n || !Zo(s)) && (e[s] = t[s]);
}, kc = (e, t, n) => {
  const s = e.slots = ra();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (ma(s, t, n), n && hi(s, "_", o, !0)) : fa(t, s);
  } else t && pa(e, t);
}, Ac = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let l = !0, i = Ce;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? l = !1 : ma(o, t, n) : (l = !t.$stable, fa(t, o)), i = t;
  } else t && (pa(e, t), i = { default: 1 });
  if (l)
    for (const a in o)
      !Zo(a) && i[a] == null && delete o[a];
}, je = Pc;
function Dc(e) {
  return Ec(e);
}
function Ec(e, t) {
  const n = Gs();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: o,
    patchProp: l,
    createElement: i,
    createText: a,
    createComment: c,
    setText: u,
    setElementText: r,
    parentNode: d,
    nextSibling: f,
    setScopeId: p = bt,
    insertStaticContent: m
  } = e, _ = (h, y, D, W = null, H = null, V = null, J = void 0, K = null, z = !!y.dynamicChildren) => {
    if (h === y)
      return;
    h && !en(h, y) && (W = Gt(h), _e(h, H, V, !0), h = null), y.patchFlag === -2 && (z = !1, y.dynamicChildren = null);
    const { type: B, ref: ie, shapeFlag: Q } = y;
    switch (B) {
      case Qs:
        F(h, y, D, W);
        break;
      case He:
        w(h, y, D, W);
        break;
      case po:
        h == null && x(y, D, W, J);
        break;
      case fe:
        U(
          h,
          y,
          D,
          W,
          H,
          V,
          J,
          K,
          z
        );
        break;
      default:
        Q & 1 ? S(
          h,
          y,
          D,
          W,
          H,
          V,
          J,
          K,
          z
        ) : Q & 6 ? j(
          h,
          y,
          D,
          W,
          H,
          V,
          J,
          K,
          z
        ) : (Q & 64 || Q & 128) && B.process(
          h,
          y,
          D,
          W,
          H,
          V,
          J,
          K,
          z,
          Pe
        );
    }
    ie != null && H ? $n(ie, h && h.ref, V, y || h, !y) : ie == null && h && h.ref != null && $n(h.ref, null, V, h, !0);
  }, F = (h, y, D, W) => {
    if (h == null)
      s(
        y.el = a(y.children),
        D,
        W
      );
    else {
      const H = y.el = h.el;
      y.children !== h.children && u(H, y.children);
    }
  }, w = (h, y, D, W) => {
    h == null ? s(
      y.el = c(y.children || ""),
      D,
      W
    ) : y.el = h.el;
  }, x = (h, y, D, W) => {
    [h.el, h.anchor] = m(
      h.children,
      y,
      D,
      W,
      h.el,
      h.anchor
    );
  }, I = ({ el: h, anchor: y }, D, W) => {
    let H;
    for (; h && h !== y; )
      H = f(h), s(h, D, W), h = H;
    s(y, D, W);
  }, b = ({ el: h, anchor: y }) => {
    let D;
    for (; h && h !== y; )
      D = f(h), o(h), h = D;
    o(y);
  }, S = (h, y, D, W, H, V, J, K, z) => {
    if (y.type === "svg" ? J = "svg" : y.type === "math" && (J = "mathml"), h == null)
      L(
        y,
        D,
        W,
        H,
        V,
        J,
        K,
        z
      );
    else {
      const B = h.el && h.el._isVueCE ? h.el : null;
      try {
        B && B._beginPatch(), E(
          h,
          y,
          H,
          V,
          J,
          K,
          z
        );
      } finally {
        B && B._endPatch();
      }
    }
  }, L = (h, y, D, W, H, V, J, K) => {
    let z, B;
    const { props: ie, shapeFlag: Q, transition: se, dirs: ce } = h;
    if (z = h.el = i(
      h.type,
      V,
      ie && ie.is,
      ie
    ), Q & 8 ? r(z, h.children) : Q & 16 && R(
      h.children,
      z,
      null,
      W,
      H,
      fo(h, V),
      J,
      K
    ), ce && Kt(h, null, W, "created"), A(z, h, h.scopeId, J, W), ie) {
      for (const Se in ie)
        Se !== "value" && !Rn(Se) && l(z, Se, null, ie[Se], V, W);
      "value" in ie && l(z, "value", null, ie.value, V), (B = ie.onVnodeBeforeMount) && mt(B, W, h);
    }
    ce && Kt(h, null, W, "beforeMount");
    const ge = Tc(H, se);
    ge && se.beforeEnter(z), s(z, y, D), ((B = ie && ie.onVnodeMounted) || ge || ce) && je(() => {
      try {
        B && mt(B, W, h), ge && se.enter(z), ce && Kt(h, null, W, "mounted");
      } finally {
      }
    }, H);
  }, A = (h, y, D, W, H) => {
    if (D && p(h, D), W)
      for (let V = 0; V < W.length; V++)
        p(h, W[V]);
    if (H) {
      let V = H.subTree;
      if (y === V || _a(V.type) && (V.ssContent === y || V.ssFallback === y)) {
        const J = H.vnode;
        A(
          h,
          J,
          J.scopeId,
          J.slotScopeIds,
          H.parent
        );
      }
    }
  }, R = (h, y, D, W, H, V, J, K, z = 0) => {
    for (let B = z; B < h.length; B++) {
      const ie = h[B] = K ? It(h[B]) : _t(h[B]);
      _(
        null,
        ie,
        y,
        D,
        W,
        H,
        V,
        J,
        K
      );
    }
  }, E = (h, y, D, W, H, V, J) => {
    const K = y.el = h.el;
    let { patchFlag: z, dynamicChildren: B, dirs: ie } = y;
    z |= h.patchFlag & 16;
    const Q = h.props || Ce, se = y.props || Ce;
    let ce;
    if (D && qt(D, !1), (ce = se.onVnodeBeforeUpdate) && mt(ce, D, y, h), ie && Kt(y, h, D, "beforeUpdate"), D && qt(D, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    B && (!h.dynamicChildren || h.dynamicChildren.length !== B.length) && (z = 0, J = !1, B = null), (Q.innerHTML && se.innerHTML == null || Q.textContent && se.textContent == null) && r(K, ""), B ? G(
      h.dynamicChildren,
      B,
      K,
      D,
      W,
      fo(y, H),
      V
    ) : J || v(
      h,
      y,
      K,
      null,
      D,
      W,
      fo(y, H),
      V,
      !1
    ), z > 0) {
      if (z & 16)
        X(K, Q, se, D, H);
      else if (z & 2 && Q.class !== se.class && l(K, "class", null, se.class, H), z & 4 && l(K, "style", Q.style, se.style, H), z & 8) {
        const ge = y.dynamicProps;
        for (let Se = 0; Se < ge.length; Se++) {
          const we = ge[Se], De = Q[we], Ne = se[we];
          (Ne !== De || we === "value") && l(K, we, De, Ne, H, D);
        }
      }
      z & 1 && h.children !== y.children && r(K, y.children);
    } else !J && B == null && X(K, Q, se, D, H);
    ((ce = se.onVnodeUpdated) || ie) && je(() => {
      ce && mt(ce, D, y, h), ie && Kt(y, h, D, "updated");
    }, W);
  }, G = (h, y, D, W, H, V, J) => {
    for (let K = 0; K < y.length; K++) {
      const z = h[K], B = y[K], ie = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (z.type === fe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !en(z, B) || // - In the case of a component, it could contain anything.
        z.shapeFlag & 198) ? d(z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          D
        )
      );
      _(
        z,
        B,
        ie,
        null,
        W,
        H,
        V,
        J,
        !0
      );
    }
  }, X = (h, y, D, W, H) => {
    if (y !== D) {
      if (y !== Ce)
        for (const V in y)
          !Rn(V) && !(V in D) && l(
            h,
            V,
            y[V],
            null,
            H,
            W
          );
      for (const V in D) {
        if (Rn(V)) continue;
        const J = D[V], K = y[V];
        J !== K && V !== "value" && l(h, V, K, J, H, W);
      }
      "value" in D && l(h, "value", y.value, D.value, H);
    }
  }, U = (h, y, D, W, H, V, J, K, z) => {
    const B = y.el = h ? h.el : a(""), ie = y.anchor = h ? h.anchor : a("");
    let { patchFlag: Q, dynamicChildren: se, slotScopeIds: ce } = y;
    ce && (K = K ? K.concat(ce) : ce), h == null ? (s(B, D, W), s(ie, D, W), R(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      y.children || [],
      D,
      ie,
      H,
      V,
      J,
      K,
      z
    )) : Q > 0 && Q & 64 && se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren && h.dynamicChildren.length === se.length ? (G(
      h.dynamicChildren,
      se,
      D,
      H,
      V,
      J,
      K
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (y.key != null || H && y === H.subTree) && tl(
      h,
      y,
      !0
      /* shallow */
    )) : v(
      h,
      y,
      D,
      ie,
      H,
      V,
      J,
      K,
      z
    );
  }, j = (h, y, D, W, H, V, J, K, z) => {
    y.slotScopeIds = K, h == null ? y.shapeFlag & 512 ? H.ctx.activate(
      y,
      D,
      W,
      J,
      z
    ) : N(
      y,
      D,
      W,
      H,
      V,
      J,
      z
    ) : $(h, y, z);
  }, N = (h, y, D, W, H, V, J) => {
    const K = h.component = Uc(
      h,
      W,
      H
    );
    if (os(h) && (K.ctx.renderer = Pe), jc(K, !1, J), K.asyncDep) {
      if (H && H.registerDep(K, O, J), !h.el) {
        const z = K.subTree = q(He);
        w(null, z, y, D), h.placeholder = z.el;
      }
    } else
      O(
        K,
        h,
        y,
        D,
        H,
        V,
        J
      );
  }, $ = (h, y, D) => {
    const W = y.component = h.component;
    if (Sc(h, y, D))
      if (W.asyncDep && !W.asyncResolved) {
        C(W, y, D);
        return;
      } else
        W.next = y, W.update();
    else
      y.el = h.el, W.vnode = y;
  }, O = (h, y, D, W, H, V, J) => {
    const K = () => {
      if (h.isMounted) {
        let { next: Q, bu: se, u: ce, parent: ge, vnode: Se } = h;
        {
          const ft = ha(h);
          if (ft) {
            Q && (Q.el = Se.el, C(h, Q, J)), ft.asyncDep.then(() => {
              je(() => {
                h.isUnmounted || B();
              }, H);
            });
            return;
          }
        }
        let we = Q, De;
        qt(h, !1), Q ? (Q.el = Se.el, C(h, Q, J)) : Q = Se, se && gs(se), (De = Q.props && Q.props.onVnodeBeforeUpdate) && mt(De, ge, Q, Se), qt(h, !0);
        const Ne = Ml(h), dt = h.subTree;
        h.subTree = Ne, _(
          dt,
          Ne,
          // parent may have changed if it's in a teleport
          d(dt.el),
          // anchor may have changed if it's in a fragment
          Gt(dt),
          h,
          H,
          V
        ), Q.el = Ne.el, we === null && Cc(h, Ne.el), ce && je(ce, H), (De = Q.props && Q.props.onVnodeUpdated) && je(
          () => mt(De, ge, Q, Se),
          H
        );
      } else {
        let Q;
        const { el: se, props: ce } = y, { bm: ge, m: Se, parent: we, root: De, type: Ne } = h, dt = _n(y);
        qt(h, !1), ge && gs(ge), !dt && (Q = ce && ce.onVnodeBeforeMount) && mt(Q, we, y), qt(h, !0);
        {
          De.ce && De.ce._hasShadowRoot() && De.ce._injectChildStyle(
            Ne,
            h.parent ? h.parent.type : void 0
          );
          const ft = h.subTree = Ml(h);
          _(
            null,
            ft,
            D,
            W,
            h,
            H,
            V
          ), y.el = ft.el;
        }
        if (Se && je(Se, H), !dt && (Q = ce && ce.onVnodeMounted)) {
          const ft = y;
          je(
            () => mt(Q, we, ft),
            H
          );
        }
        (y.shapeFlag & 256 || we && _n(we.vnode) && we.vnode.shapeFlag & 256) && h.a && je(h.a, H), h.isMounted = !0, y = D = W = null;
      }
    };
    h.scope.on();
    const z = h.effect = new xi(K);
    h.scope.off();
    const B = h.update = z.run.bind(z), ie = h.job = z.runIfDirty.bind(z);
    ie.i = h, ie.id = h.uid, z.scheduler = () => Jo(ie), qt(h, !0), B();
  }, C = (h, y, D) => {
    y.component = h;
    const W = h.vnode.props;
    h.vnode = y, h.next = null, Mc(h, y.props, W, D), Ac(h, y.children, D), xt(), ml(h), St();
  }, v = (h, y, D, W, H, V, J, K, z = !1) => {
    const B = h && h.children, ie = h ? h.shapeFlag : 0, Q = y.children, { patchFlag: se, shapeFlag: ce } = y;
    if (se > 0) {
      if (se & 128) {
        ae(
          B,
          Q,
          D,
          W,
          H,
          V,
          J,
          K,
          z
        );
        return;
      } else if (se & 256) {
        P(
          B,
          Q,
          D,
          W,
          H,
          V,
          J,
          K,
          z
        );
        return;
      }
    }
    ce & 8 ? (ie & 16 && Ae(B, H, V), Q !== B && r(D, Q)) : ie & 16 ? ce & 16 ? ae(
      B,
      Q,
      D,
      W,
      H,
      V,
      J,
      K,
      z
    ) : Ae(B, H, V, !0) : (ie & 8 && r(D, ""), ce & 16 && R(
      Q,
      D,
      W,
      H,
      V,
      J,
      K,
      z
    ));
  }, P = (h, y, D, W, H, V, J, K, z) => {
    h = h || mn, y = y || mn;
    const B = h.length, ie = y.length, Q = Math.min(B, ie);
    let se;
    for (se = 0; se < Q; se++) {
      const ce = y[se] = z ? It(y[se]) : _t(y[se]);
      _(
        h[se],
        ce,
        D,
        null,
        H,
        V,
        J,
        K,
        z
      );
    }
    B > ie ? Ae(
      h,
      H,
      V,
      !0,
      !1,
      Q
    ) : R(
      y,
      D,
      W,
      H,
      V,
      J,
      K,
      z,
      Q
    );
  }, ae = (h, y, D, W, H, V, J, K, z) => {
    let B = 0;
    const ie = y.length;
    let Q = h.length - 1, se = ie - 1;
    for (; B <= Q && B <= se; ) {
      const ce = h[B], ge = y[B] = z ? It(y[B]) : _t(y[B]);
      if (en(ce, ge))
        _(
          ce,
          ge,
          D,
          null,
          H,
          V,
          J,
          K,
          z
        );
      else
        break;
      B++;
    }
    for (; B <= Q && B <= se; ) {
      const ce = h[Q], ge = y[se] = z ? It(y[se]) : _t(y[se]);
      if (en(ce, ge))
        _(
          ce,
          ge,
          D,
          null,
          H,
          V,
          J,
          K,
          z
        );
      else
        break;
      Q--, se--;
    }
    if (B > Q) {
      if (B <= se) {
        const ce = se + 1, ge = ce < ie ? y[ce].el : W;
        for (; B <= se; )
          _(
            null,
            y[B] = z ? It(y[B]) : _t(y[B]),
            D,
            ge,
            H,
            V,
            J,
            K,
            z
          ), B++;
      }
    } else if (B > se)
      for (; B <= Q; )
        _e(h[B], H, V, !0), B++;
    else {
      const ce = B, ge = B, Se = /* @__PURE__ */ new Map();
      for (B = ge; B <= se; B++) {
        const qe = y[B] = z ? It(y[B]) : _t(y[B]);
        qe.key != null && Se.set(qe.key, B);
      }
      let we, De = 0;
      const Ne = se - ge + 1;
      let dt = !1, ft = 0;
      const Cn = new Array(Ne);
      for (B = 0; B < Ne; B++) Cn[B] = 0;
      for (B = ce; B <= Q; B++) {
        const qe = h[B];
        if (De >= Ne) {
          _e(qe, H, V, !0);
          continue;
        }
        let pt;
        if (qe.key != null)
          pt = Se.get(qe.key);
        else
          for (we = ge; we <= se; we++)
            if (Cn[we - ge] === 0 && en(qe, y[we])) {
              pt = we;
              break;
            }
        pt === void 0 ? _e(qe, H, V, !0) : (Cn[pt - ge] = B + 1, pt >= ft ? ft = pt : dt = !0, _(
          qe,
          y[pt],
          D,
          null,
          H,
          V,
          J,
          K,
          z
        ), De++);
      }
      const al = dt ? Rc(Cn) : mn;
      for (we = al.length - 1, B = Ne - 1; B >= 0; B--) {
        const qe = ge + B, pt = y[qe], rl = y[qe + 1], cl = qe + 1 < ie ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          rl.el || ga(rl)
        ) : W;
        Cn[B] === 0 ? _(
          null,
          pt,
          D,
          cl,
          H,
          V,
          J,
          K,
          z
        ) : dt && (we < 0 || B !== al[we] ? ne(pt, D, cl, 2) : we--);
      }
    }
  }, ne = (h, y, D, W, H = null) => {
    const { el: V, type: J, transition: K, children: z, shapeFlag: B } = h;
    if (B & 6) {
      ne(h.component.subTree, y, D, W);
      return;
    }
    if (B & 128) {
      h.suspense.move(y, D, W);
      return;
    }
    if (B & 64) {
      J.move(h, y, D, Pe);
      return;
    }
    if (J === fe) {
      s(V, y, D);
      for (let Q = 0; Q < z.length; Q++)
        ne(z[Q], y, D, W);
      s(h.anchor, y, D);
      return;
    }
    if (J === po) {
      I(h, y, D);
      return;
    }
    if (W !== 2 && B & 1 && K)
      if (W === 0)
        K.persisted && !V[st] ? s(V, y, D) : (K.beforeEnter(V), s(V, y, D), je(() => K.enter(V), H));
      else {
        const { leave: Q, delayLeave: se, afterLeave: ce } = K, ge = () => {
          h.ctx.isUnmounted ? o(V) : s(V, y, D);
        }, Se = () => {
          const we = V._isLeaving || !!V[st];
          V._isLeaving && V[st](
            !0
            /* cancelled */
          ), K.persisted && !we ? ge() : Q(V, () => {
            ge(), ce && ce();
          });
        };
        se ? se(V, ge, Se) : Se();
      }
    else
      s(V, y, D);
  }, _e = (h, y, D, W = !1, H = !1) => {
    const {
      type: V,
      props: J,
      ref: K,
      children: z,
      dynamicChildren: B,
      shapeFlag: ie,
      patchFlag: Q,
      dirs: se,
      cacheIndex: ce,
      memo: ge
    } = h;
    if (Q === -2 && (H = !1), K != null && (xt(), $n(K, null, D, h, !0), St()), ce != null && (y.renderCache[ce] = void 0), ie & 256) {
      y.ctx.deactivate(h);
      return;
    }
    const Se = ie & 1 && se, we = !_n(h);
    let De;
    if (we && (De = J && J.onVnodeBeforeUnmount) && mt(De, y, h), ie & 6)
      Ve(h.component, D, W);
    else {
      if (ie & 128) {
        h.suspense.unmount(D, W);
        return;
      }
      Se && Kt(h, null, y, "beforeUnmount"), ie & 64 ? h.type.remove(
        h,
        y,
        D,
        Pe,
        W
      ) : B && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !B.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (V !== fe || Q > 0 && Q & 64) ? Ae(
        B,
        y,
        D,
        !1,
        !0
      ) : (V === fe && Q & 384 || !H && ie & 16) && Ae(z, y, D), W && tt(h);
    }
    const Ne = ge != null && ce == null;
    (we && (De = J && J.onVnodeUnmounted) || Se || Ne) && je(() => {
      De && mt(De, y, h), Se && Kt(h, null, y, "unmounted"), Ne && (h.el = null);
    }, D);
  }, tt = (h) => {
    const { type: y, el: D, anchor: W, transition: H } = h;
    if (y === fe) {
      re(D, W);
      return;
    }
    if (y === po) {
      b(h);
      return;
    }
    const V = () => {
      o(D), H && !H.persisted && H.afterLeave && H.afterLeave();
    };
    if (h.shapeFlag & 1 && H && !H.persisted) {
      const { leave: J, delayLeave: K } = H, z = () => J(D, V);
      K ? K(h.el, V, z) : z();
    } else
      V();
  }, re = (h, y) => {
    let D;
    for (; h !== y; )
      D = f(h), o(h), h = D;
    o(y);
  }, Ve = (h, y, D) => {
    const { bum: W, scope: H, job: V, subTree: J, um: K, m: z, a: B } = h;
    kl(z), kl(B), W && gs(W), H.stop(), V && (V.flags |= 8, _e(J, h, y, D)), K && je(K, y), je(() => {
      h.isUnmounted = !0;
    }, y);
  }, Ae = (h, y, D, W = !1, H = !1, V = 0) => {
    for (let J = V; J < h.length; J++)
      _e(h[J], y, D, W, H);
  }, Gt = (h) => {
    if (h.shapeFlag & 6)
      return Gt(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const y = f(h.anchor || h.el), D = y && y[zi];
    return D ? f(D) : y;
  };
  let de = !1;
  const Ke = (h, y, D) => {
    let W;
    h == null ? y._vnode && (_e(y._vnode, null, null, !0), W = y._vnode.component) : _(
      y._vnode || null,
      h,
      y,
      null,
      null,
      null,
      D
    ), y._vnode = h, de || (de = !0, ml(W), Bi(), de = !1);
  }, Pe = {
    p: _,
    um: _e,
    m: ne,
    r: tt,
    mt: N,
    mc: R,
    pc: v,
    pbc: G,
    n: Gt,
    o: e
  };
  return {
    render: Ke,
    hydrate: void 0,
    createApp: _c(Ke)
  };
}
function fo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function qt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Tc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function tl(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (le(s) && le(o))
    for (let l = 0; l < s.length; l++) {
      const i = s[l];
      let a = o[l];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[l] = It(o[l]), a.el = i.el), !n && a.patchFlag !== -2 && tl(i, a)), a.type === Qs && (a.patchFlag === -1 && (a = o[l] = It(a)), a.el = i.el), a.type === He && !a.el && (a.el = i.el);
    }
}
function Rc(e) {
  const t = e.slice(), n = [0];
  let s, o, l, i, a;
  const c = e.length;
  for (s = 0; s < c; s++) {
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
function ha(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ha(t);
}
function kl(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ga(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ga(t.subTree) : null;
}
const _a = (e) => e.__isSuspense;
function Pc(e, t) {
  t && t.pendingBranch ? le(e) ? t.effects.push(...e) : t.effects.push(e) : Or(e);
}
const fe = /* @__PURE__ */ Symbol.for("v-fgt"), Qs = /* @__PURE__ */ Symbol.for("v-txt"), He = /* @__PURE__ */ Symbol.for("v-cmt"), po = /* @__PURE__ */ Symbol.for("v-stc"), Bn = [];
let Ye = null;
function M(e = !1) {
  Bn.push(Ye = e ? null : []);
}
function Nc() {
  Bn.pop(), Ye = Bn[Bn.length - 1] || null;
}
let Yn = 1;
function Is(e, t = !1) {
  Yn += e, e < 0 && Ye && t && (Ye.hasOnce = !0);
}
function va(e) {
  return e.dynamicChildren = Yn > 0 ? Ye || mn : null, Nc(), Yn > 0 && Ye && Ye.push(e), e;
}
function k(e, t, n, s, o, l) {
  return va(
    T(
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
  return va(
    q(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function Jn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function en(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ba = ({ key: e }) => e ?? null, _s = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Le(e) || /* @__PURE__ */ ye(e) || ue(e) ? { i: $e, r: e, k: t, f: !!n } : e : null);
function T(e, t = null, n = null, s = 0, o = null, l = e === fe ? 0 : 1, i = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ba(t),
    ref: t && _s(t),
    scopeId: Ui,
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
    ctx: $e
  };
  return a ? (As(c, n), l & 128 && e.normalize(c)) : n && (c.shapeFlag |= Le(n) ? 8 : 16), Yn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ye && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ye.push(c), c;
}
const q = Oc;
function Oc(e, t = null, n = null, s = 0, o = null, l = !1) {
  if ((!e || e === ea) && (e = He), Jn(e)) {
    const a = Ht(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && As(a, n), Yn > 0 && !l && Ye && (a.shapeFlag & 6 ? Ye[Ye.indexOf(e)] = a : Ye.push(a)), a.patchFlag = -2, a;
  }
  if (qc(e) && (e = e.__vccOpts), t) {
    t = $c(t);
    let { class: a, style: c } = t;
    a && !Le(a) && (t.class = me(a)), ve(c) && (/* @__PURE__ */ qs(c) && !le(c) && (c = Re({}, c)), t.style = Xe(c));
  }
  const i = Le(e) ? 1 : _a(e) ? 128 : Gi(e) ? 64 : ve(e) ? 4 : ue(e) ? 2 : 0;
  return T(
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
function $c(e) {
  return e ? /* @__PURE__ */ qs(e) || ca(e) ? Re({}, e) : e : null;
}
function Ht(e, t, n = !1, s = !1) {
  const { props: o, ref: l, patchFlag: i, children: a, transition: c } = e, u = t ? Vc(o || {}, t) : o, r = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && ba(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && l ? le(l) ? l.concat(_s(t)) : [l, _s(t)] : _s(t)
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
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ht(e.ssContent),
    ssFallback: e.ssFallback && Ht(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && Xn(
    r,
    c.clone(r)
  ), r;
}
function ks(e = " ", t = 0) {
  return q(Qs, null, e, t);
}
function ee(e = "", t = !1) {
  return t ? (M(), Ie(He, null, e)) : q(He, null, e);
}
function _t(e) {
  return e == null || typeof e == "boolean" ? q(He) : le(e) ? q(
    fe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Jn(e) ? It(e) : q(Qs, null, String(e));
}
function It(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ht(e);
}
function As(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (le(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), As(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !ca(t) ? t._ctx = $e : o === 3 && $e && ($e.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ue(t)) {
    if (s & 65) {
      As(e, { default: t });
      return;
    }
    t = { default: t, _ctx: $e }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [ks(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Vc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = me([t.class, s.class]));
      else if (o === "style")
        t.style = Xe([t.style, s.style]);
      else if (Vs(o)) {
        const l = t[o], i = s[o];
        i && l !== i && !(le(l) && l.includes(i)) ? t[o] = l ? [].concat(l, i) : i : i == null && l == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Bs(o) && (t[o] = i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function mt(e, t, n, s = null) {
  ot(e, t, 7, [
    n,
    s
  ]);
}
const Bc = oa();
let Hc = 0;
function Uc(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Bc, l = {
    uid: Hc++,
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
    scope: new bi(
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
    propsOptions: da(s, o),
    emitsOptions: la(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ce,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Ce,
    data: Ce,
    props: Ce,
    attrs: Ce,
    slots: Ce,
    refs: Ce,
    setupState: Ce,
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
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = bc.bind(null, l), e.ce && e.ce(l), l;
}
let Oe = null;
const nl = () => Oe || $e;
let Ds, Do;
{
  const e = Gs(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (l) => {
      o.length > 1 ? o.forEach((i) => i(l)) : o[0](l);
    };
  };
  Ds = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Oe = n
  ), Do = t(
    "__VUE_SSR_SETTERS__",
    (n) => yn = n
  );
}
const ls = (e) => {
  const t = Oe;
  return Ds(e), e.scope.on(), () => {
    e.scope.off(), Ds(t);
  };
}, Al = () => {
  Oe && Oe.scope.off(), Ds(null);
};
function ya(e) {
  return e.vnode.shapeFlag & 4;
}
let yn = !1;
function jc(e, t = !1, n = !1) {
  t && Do(t);
  const { props: s, children: o } = e.vnode, l = ya(e);
  Fc(e, s, l, t), kc(e, o, n || t);
  const i = l ? Wc(e, t) : void 0;
  return t && Do(!1), i;
}
function Wc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, uc);
  const { setup: s } = n;
  if (s) {
    xt();
    const o = e.setupContext = s.length > 1 ? Gc(e) : null, l = ls(e), i = ts(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), a = fi(i);
    if (St(), l(), (a || e.sp) && !_n(e) && Qo(e), a) {
      if (i.then(Al, Al), t)
        return i.then((c) => {
          Dl(e, c);
        }).catch((c) => {
          ns(c, e, 0);
        });
      e.asyncDep = i;
    } else
      Dl(e, i);
  } else
    wa(e);
}
function Dl(e, t, n) {
  ue(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ve(t) && (e.setupState = Ni(t)), wa(e);
}
function wa(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || bt);
  {
    const o = ls(e);
    xt();
    try {
      dc(e);
    } finally {
      St(), o();
    }
  }
}
const zc = {
  get(e, t) {
    return Be(e, "get", ""), e[t];
  }
};
function Gc(e) {
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
function Zs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ni(Yo(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Vn)
        return Vn[n](e);
    },
    has(t, n) {
      return n in t || n in Vn;
    }
  })) : e.proxy;
}
function Kc(e, t = !0) {
  return ue(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function qc(e) {
  return ue(e) && "__vccOpts" in e;
}
const Y = (e, t) => /* @__PURE__ */ Er(e, t, yn);
function xa(e, t, n) {
  try {
    Is(-1);
    const s = arguments.length;
    return s === 2 ? ve(t) && !le(t) ? Jn(t) ? q(e, null, [t]) : q(e, t) : q(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Jn(n) && (n = [n]), q(e, t, n));
  } finally {
    Is(1);
  }
}
const Xc = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Eo;
const El = typeof window < "u" && window.trustedTypes;
if (El)
  try {
    Eo = /* @__PURE__ */ El.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Sa = Eo ? (e) => Eo.createHTML(e) : (e) => e, Yc = "http://www.w3.org/2000/svg", Jc = "http://www.w3.org/1998/Math/MathML", Mt = typeof document < "u" ? document : null, Tl = Mt && /* @__PURE__ */ Mt.createElement("template"), Qc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? Mt.createElementNS(Yc, e) : t === "mathml" ? Mt.createElementNS(Jc, e) : n ? Mt.createElement(e, { is: n }) : Mt.createElement(e);
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
      Tl.innerHTML = Sa(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Tl.content;
      if (s === "svg" || s === "mathml") {
        const c = a.firstChild;
        for (; c.firstChild; )
          a.appendChild(c.firstChild);
        a.removeChild(c);
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
}, Nt = "transition", Ln = "animation", Qn = /* @__PURE__ */ Symbol("_vtc"), Ca = {
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
}, Zc = /* @__PURE__ */ Re(
  {},
  qi,
  Ca
), eu = (e) => (e.displayName = "Transition", e.props = Zc, e), tu = /* @__PURE__ */ eu(
  (e, { slots: t }) => xa(qr, nu(e), t)
), Xt = (e, t = []) => {
  le(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Rl = (e) => e ? le(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function nu(e) {
  const t = {};
  for (const U in e)
    U in Ca || (t[U] = e[U]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: o,
    enterFromClass: l = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: c = l,
    appearActiveClass: u = i,
    appearToClass: r = a,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: f = `${n}-leave-active`,
    leaveToClass: p = `${n}-leave-to`
  } = e, m = su(o), _ = m && m[0], F = m && m[1], {
    onBeforeEnter: w,
    onEnter: x,
    onEnterCancelled: I,
    onLeave: b,
    onLeaveCancelled: S,
    onBeforeAppear: L = w,
    onAppear: A = x,
    onAppearCancelled: R = I
  } = t, E = (U, j, N, $) => {
    U._enterCancelled = $, Yt(U, j ? r : a), Yt(U, j ? u : i), N && N();
  }, G = (U, j) => {
    U._isLeaving = !1, Yt(U, d), Yt(U, p), Yt(U, f), j && j();
  }, X = (U) => (j, N) => {
    const $ = U ? A : x, O = () => E(j, U, N);
    Xt($, [j, O]), Pl(() => {
      Yt(j, U ? c : l), Ft(j, U ? r : a), Rl($) || Nl(j, s, _, O);
    });
  };
  return Re(t, {
    onBeforeEnter(U) {
      Xt(w, [U]), Ft(U, l), Ft(U, i);
    },
    onBeforeAppear(U) {
      Xt(L, [U]), Ft(U, c), Ft(U, u);
    },
    onEnter: X(!1),
    onAppear: X(!0),
    onLeave(U, j) {
      U._isLeaving = !0;
      const N = () => G(U, j);
      Ft(U, d), U._enterCancelled ? (Ft(U, f), Vl(U)) : (Vl(U), Ft(U, f)), Pl(() => {
        U._isLeaving && (Yt(U, d), Ft(U, p), Rl(b) || Nl(U, s, F, N));
      }), Xt(b, [U, N]);
    },
    onEnterCancelled(U) {
      E(U, !1, void 0, !0), Xt(I, [U]);
    },
    onAppearCancelled(U) {
      E(U, !0, void 0, !0), Xt(R, [U]);
    },
    onLeaveCancelled(U) {
      G(U), Xt(S, [U]);
    }
  });
}
function su(e) {
  if (e == null)
    return null;
  if (ve(e))
    return [mo(e.enter), mo(e.leave)];
  {
    const t = mo(e);
    return [t, t];
  }
}
function mo(e) {
  return Xa(e);
}
function Ft(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Qn] || (e[Qn] = /* @__PURE__ */ new Set())).add(t);
}
function Yt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Qn];
  n && (n.delete(t), n.size || (e[Qn] = void 0));
}
function Pl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ou = 0;
function Nl(e, t, n, s) {
  const o = e._endId = ++ou, l = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(l, n);
  const { type: i, timeout: a, propCount: c } = lu(e, t);
  if (!i)
    return s();
  const u = i + "end";
  let r = 0;
  const d = () => {
    e.removeEventListener(u, f), l();
  }, f = (p) => {
    p.target === e && ++r >= c && d();
  };
  setTimeout(() => {
    r < c && d();
  }, a + 1), e.addEventListener(u, f);
}
function lu(e, t) {
  const n = window.getComputedStyle(e), s = (m) => (n[m] || "").split(", "), o = s(`${Nt}Delay`), l = s(`${Nt}Duration`), i = Ol(o, l), a = s(`${Ln}Delay`), c = s(`${Ln}Duration`), u = Ol(a, c);
  let r = null, d = 0, f = 0;
  t === Nt ? i > 0 && (r = Nt, d = i, f = l.length) : t === Ln ? u > 0 && (r = Ln, d = u, f = c.length) : (d = Math.max(i, u), r = d > 0 ? i > u ? Nt : Ln : null, f = r ? r === Nt ? l.length : c.length : 0);
  const p = r === Nt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${Nt}Property`).toString()
  );
  return {
    type: r,
    timeout: d,
    propCount: f,
    hasTransform: p
  };
}
function Ol(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => $l(n) + $l(e[s])));
}
function $l(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Vl(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function iu(e, t, n) {
  const s = e[Qn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Es = /* @__PURE__ */ Symbol("_vod"), Fa = /* @__PURE__ */ Symbol("_vsh"), Ts = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Es] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : In(e, t);
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
  e.style.display = t ? e[Es] : "none", e[Fa] = !t;
}
const au = /* @__PURE__ */ Symbol(""), ru = /(?:^|;)\s*display\s*:/;
function cu(e, t, n) {
  const s = e.style, o = Le(n);
  let l = !1;
  if (n && !o) {
    if (t)
      if (Le(t))
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
      a != null ? du(
        e,
        i,
        !Le(t) && t ? t[i] : void 0,
        a
      ) || En(s, i, a) : En(s, i, "");
    }
  } else if (o) {
    if (t !== n) {
      const i = s[au];
      i && (n += ";" + i), s.cssText = n, l = ru.test(n);
    }
  } else t && e.removeAttribute("style");
  Es in e && (e[Es] = l ? s.display : "", e[Fa] && (s.display = "none"));
}
const Bl = /\s*!important$/;
function En(e, t, n) {
  if (le(n))
    n.forEach((s) => En(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = uu(e, t);
    Bl.test(n) ? e.setProperty(
      Ut(s),
      n.replace(Bl, ""),
      "important"
    ) : e[s] = n;
  }
}
const Hl = ["Webkit", "Moz", "ms"], ho = {};
function uu(e, t) {
  const n = ho[t];
  if (n)
    return n;
  let s = ze(t);
  if (s !== "filter" && s in e)
    return ho[t] = s;
  s = Ws(s);
  for (let o = 0; o < Hl.length; o++) {
    const l = Hl[o] + s;
    if (l in e)
      return ho[t] = l;
  }
  return t;
}
function du(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Le(s) && n === s;
}
const Ul = "http://www.w3.org/1999/xlink";
function jl(e, t, n, s, o, l = tr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ul, t.slice(6, t.length)) : e.setAttributeNS(Ul, t, n) : n == null || l && !gi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    l ? "" : et(n) ? String(n) : n
  );
}
function Wl(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Sa(n) : n);
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const a = l === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = gi(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
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
function fu(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const zl = /* @__PURE__ */ Symbol("_vei");
function pu(e, t, n, s, o = null) {
  const l = e[zl] || (e[zl] = {}), i = l[t];
  if (s && i)
    i.value = s;
  else {
    const [a, c] = gu(t);
    if (s) {
      const u = l[t] = bu(
        s,
        o
      );
      tn(e, a, u, c);
    } else i && (fu(e, a, i, c), l[t] = void 0);
  }
}
const mu = /(Once|Passive|Capture)$/, hu = /^on:?(?:Once|Passive|Capture)$/;
function gu(e) {
  let t, n;
  for (; (n = e.match(mu)) && !hu.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Ut(e.slice(2)), t];
}
let go = 0;
const _u = /* @__PURE__ */ Promise.resolve(), vu = () => go || (_u.then(() => go = 0), go = Date.now());
function bu(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const o = n.value;
    if (le(o)) {
      const l = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        l.call(s), s._stopped = !0;
      };
      const i = o.slice(), a = [s];
      for (let c = 0; c < i.length && !s._stopped; c++) {
        const u = i[c];
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
  return n.value = e, n.attached = vu(), n;
}
const Gl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, yu = (e, t, n, s, o, l) => {
  const i = o === "svg";
  t === "class" ? iu(e, s, i) : t === "style" ? cu(e, n, s) : Vs(t) ? Bs(t) || pu(e, t, n, s, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : wu(e, t, s, i)) ? (Wl(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && jl(e, t, s, i, l, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (xu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Le(s))) ? Wl(e, ze(t), s, l, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), jl(e, t, s, i));
};
function wu(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Gl(t) && ue(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Gl(t) && Le(n) ? !1 : t in e;
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
const Rs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return le(t) ? (n) => gs(t, n) : t;
};
function Su(e) {
  e.target.composing = !0;
}
function Kl(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const vn = /* @__PURE__ */ Symbol("_assign");
function ql(e, t, n) {
  return t && (e = e.trim()), n && (e = zs(e)), e;
}
const wt = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[vn] = Rs(o);
    const l = s || o.props && o.props.type === "number";
    tn(e, t ? "change" : "input", (i) => {
      i.target.composing || e[vn](ql(e.value, n, l));
    }), (n || l) && tn(e, "change", () => {
      e.value = ql(e.value, n, l);
    }), t || (tn(e, "compositionstart", Su), tn(e, "compositionend", Kl), tn(e, "change", Kl));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: l } }, i) {
    if (e[vn] = Rs(i), e.composing) return;
    const a = (l || e.type === "number") && !/^0\d/.test(e.value) ? zs(e.value) : e.value, c = t ?? "";
    if (a === c)
      return;
    const u = e.getRootNode();
    (u instanceof Document || u instanceof ShadowRoot) && u.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === c) || (e.value = c);
  }
}, Cu = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = Hs(t);
    tn(e, "change", () => {
      const l = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? zs(Ps(i)) : Ps(i)
      );
      e[vn](
        e.multiple ? o ? new Set(l) : l : l[0]
      ), e._assigning = !0, xn(() => {
        e._assigning = !1;
      });
    }), e[vn] = Rs(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Xl(e, t);
  },
  beforeUpdate(e, t, n) {
    e[vn] = Rs(n);
  },
  updated(e, { value: t }) {
    e._assigning || Xl(e, t);
  }
};
function Xl(e, t) {
  const n = e.multiple, s = le(t);
  if (!(n && !s && !Hs(t))) {
    for (let o = 0, l = e.options.length; o < l; o++) {
      const i = e.options[o], a = Ps(i);
      if (n)
        if (s) {
          const c = typeof a;
          c === "string" || c === "number" ? i.selected = t.some((u) => String(u) === String(a)) : i.selected = sr(t, a) > -1;
        } else
          i.selected = t.has(a);
      else if (es(Ps(i), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Ps(e) {
  return "_value" in e ? e._value : e.value;
}
const Fu = ["ctrl", "shift", "alt", "meta"], Mu = {
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
  exact: (e, t) => Fu.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ns = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...l) => {
    for (let i = 0; i < t.length; i++) {
      const a = Mu[t[i]];
      if (a && a(o, t)) return;
    }
    return e(o, ...l);
  });
}, Lu = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, vs = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const l = Ut(o.key);
    if (t.some(
      (i) => i === l || Lu[i] === l
    ))
      return e(o);
  });
}, Iu = /* @__PURE__ */ Re({ patchProp: yu }, Qc);
let Yl;
function Ma() {
  return Yl || (Yl = Dc(Iu));
}
const Jl = (...e) => {
  Ma().render(...e);
}, eo = (...e) => {
  const t = Ma().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = Au(s);
    if (!o) return;
    const l = t._component;
    !ue(l) && !l.render && !l.template && (l.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, ku(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function ku(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Au(e) {
  return Le(e) ? document.querySelector(e) : e;
}
const to = {
  accent: "#f08a45",
  accentInk: "#fff",
  panel: "#171b22",
  panelAlt: "#222934",
  text: "#e8edf3",
  muted: "#9ca8b5",
  danger: "#ef6666",
  ok: "#62c987"
}, Du = {
  accent: "#c9682c",
  accentInk: "#fff",
  panel: "#eef1f5",
  panelAlt: "#e2e6ec",
  text: "#1c2430",
  muted: "#5b6572",
  danger: "#c94b4b",
  ok: "#3f8f5f"
}, Eu = {
  accent: "#00e5ff",
  accentInk: "#fff",
  panel: "#0a0e1a",
  panelAlt: "#131a2e",
  text: "#dff9ff",
  muted: "#5f7d94",
  danger: "#ff2e63",
  ok: "#00ff9f"
}, Tu = {
  accent: "#d4a017",
  accentInk: "#fff",
  panel: "#1a1712",
  panelAlt: "#26221a",
  text: "#e8dcc0",
  muted: "#8a7d5f",
  danger: "#9a3324",
  ok: "#8fbf3f"
}, Ru = {
  accent: "#d5ff40",
  accentInk: "#14150f",
  panel: "#181916",
  panelAlt: "#232620",
  text: "#edf2e2",
  muted: "#8b9483",
  danger: "#ff5c72",
  ok: "#3ed98c"
}, Pu = {
  default: to,
  cyberpunk: Eu,
  fallout: Tu,
  travelmate: Ru
}, kt = { ...to };
let Hn = null, Un = null;
function To(e) {
  return `--fil-accent:${e.accent};--fil-accent-ink:${e.accentInk};--fil-panel:${e.panel};--fil-panel-alt:${e.panelAlt};--fil-text:${e.text};--fil-muted:${e.muted};--fil-danger:${e.danger};--fil-ok:${e.ok};`;
}
const Nu = {
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
}, Ou = "--fil-surface-bg:rgba(100,180,220,0.06);--fil-surface-border:rgba(0,255,255,0.18);--fil-surface-radius:20px;--fil-surface-blur:10px;--fil-surface-shadow:0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08);--fil-glass-bg:rgba(50,80,120,0.18);--fil-glass-border:rgba(0,150,200,0.35);--fil-field-radius:10px;--fil-pill-radius:17px;--fil-pill-bg:rgba(255,255,255,0.06);--fil-pill-border:rgba(0,150,200,0.4);", $u = "--fil-surface-bg:rgba(70,130,170,0.08);--fil-surface-border:rgba(40,120,160,0.28);--fil-surface-radius:20px;--fil-surface-blur:10px;--fil-surface-shadow:0 8px 24px rgba(40,60,90,0.18), inset 0 1px 0 rgba(255,255,255,0.5);--fil-glass-bg:rgba(120,160,200,0.16);--fil-glass-border:rgba(40,120,160,0.3);--fil-field-radius:10px;--fil-pill-radius:17px;--fil-pill-bg:rgba(30,60,90,0.06);--fil-pill-border:rgba(40,120,160,0.35);";
function Vu() {
  if (typeof document > "u" || document.getElementById("fil-brand-vars")) return;
  const e = document.createElement("style");
  e.id = "fil-brand-vars", e.textContent = `:root{${To(to)}--fil-radius:8px;--fil-node-pad:6px 8px 14px 8px;--fil-node-gap:4px;--fil-row-pad:4px 6px;--fil-input-border:rgba(240,138,69,0.35);${Ou}}
.comfy-theme-light{${To(Du)}--fil-input-border:rgba(201,104,44,0.35);${$u}}
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
  padding-bottom:14px !important;
}`, document.head.appendChild(e), Hn = document.createElement("style"), Hn.id = "fil-theme-vars", document.head.appendChild(Hn), Un = document.createElement("style"), Un.id = "fil-theme-effects", document.head.appendChild(Un);
}
function La(e) {
  const t = Pu[e] ?? to;
  Object.assign(kt, t), !(typeof document > "u") && (document.documentElement.dataset.filTheme = e, Hn && (Hn.textContent = e === "default" ? "" : `:root{${To(t)}}`), Un && (Un.textContent = Nu[e] ?? ""));
}
const Bu = {
  class: "fil-color-picker",
  role: "group",
  "aria-label": "Color picker"
}, Hu = { class: "fil-cp-hex-row" }, Uu = {
  class: "fil-cp-presets",
  role: "listbox",
  "aria-label": "Preset colors"
}, ju = ["aria-selected", "aria-label", "title", "onClick"], Wu = /* @__PURE__ */ xe({
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
    ], s = e, o = t, l = Y(() => s.presets ?? n);
    function i(j) {
      o("update:modelValue", j);
    }
    function a(j) {
      return Math.min(1, Math.max(0, j));
    }
    function c(j) {
      const N = /^#?([0-9a-f]{6})$/i.exec(j.trim());
      if (!N) return null;
      const $ = parseInt(N[1], 16);
      return [$ >> 16 & 255, $ >> 8 & 255, $ & 255];
    }
    function u(j, N, $) {
      const O = (C) => Math.round(a(C / 255) * 255).toString(16).padStart(2, "0");
      return `#${O(j)}${O(N)}${O($)}`;
    }
    function r(j, N, $) {
      const O = j / 255, C = N / 255, v = $ / 255, P = Math.max(O, C, v), ae = Math.min(O, C, v), ne = P - ae;
      let _e = 0;
      ne !== 0 && (P === O ? _e = (C - v) / ne % 6 : P === C ? _e = (v - O) / ne + 2 : _e = (O - C) / ne + 4, _e *= 60, _e < 0 && (_e += 360));
      const tt = P === 0 ? 0 : ne / P;
      return [_e, tt, P];
    }
    function d(j, N, $) {
      const O = $ * N, C = O * (1 - Math.abs(j / 60 % 2 - 1)), v = $ - O;
      let [P, ae, ne] = [0, 0, 0];
      return j < 60 ? [P, ae, ne] = [O, C, 0] : j < 120 ? [P, ae, ne] = [C, O, 0] : j < 180 ? [P, ae, ne] = [0, O, C] : j < 240 ? [P, ae, ne] = [0, C, O] : j < 300 ? [P, ae, ne] = [C, 0, O] : [P, ae, ne] = [O, 0, C], [(P + v) * 255, (ae + v) * 255, (ne + v) * 255];
    }
    const f = /* @__PURE__ */ oe(0), p = /* @__PURE__ */ oe(0), m = /* @__PURE__ */ oe(0), _ = /* @__PURE__ */ oe(s.modelValue);
    function F(j) {
      const N = c(j);
      if (!N) return;
      const [$, O, C] = r(...N);
      f.value = $, p.value = O, m.value = C, _.value = u(...N);
    }
    Ee(() => s.modelValue, (j) => F(j), { immediate: !0 });
    const w = Y(() => u(...d(f.value, p.value, m.value)));
    function x() {
      o("update:modelValue", w.value), _.value = w.value;
    }
    function I() {
      const j = c(_.value);
      if (!j) {
        _.value = w.value;
        return;
      }
      const [N, $, O] = r(...j);
      f.value = N, p.value = $, m.value = O, o("update:modelValue", u(...j));
    }
    const b = /* @__PURE__ */ oe(null), S = /* @__PURE__ */ oe(null);
    function L(j) {
      const N = b.value;
      if (!N) return;
      const $ = N.getBoundingClientRect();
      p.value = a((j.clientX - $.left) / $.width), m.value = a(1 - (j.clientY - $.top) / $.height), x();
    }
    function A(j) {
      const N = S.value;
      if (!N) return;
      const $ = N.getBoundingClientRect();
      f.value = a((j.clientX - $.left) / $.width) * 360, x();
    }
    function R(j) {
      j.preventDefault(), L(j);
      const N = (O) => L(O), $ = () => {
        window.removeEventListener("pointermove", N), window.removeEventListener("pointerup", $);
      };
      window.addEventListener("pointermove", N), window.addEventListener("pointerup", $);
    }
    function E(j) {
      j.preventDefault(), A(j);
      const N = (O) => A(O), $ = () => {
        window.removeEventListener("pointermove", N), window.removeEventListener("pointerup", $);
      };
      window.addEventListener("pointermove", N), window.addEventListener("pointerup", $);
    }
    const G = Y(() => `hsl(${f.value}, 100%, 50%)`), X = Y(() => ({
      left: `${p.value * 100}%`,
      top: `${(1 - m.value) * 100}%`
    })), U = Y(() => ({ left: `${f.value / 360 * 100}%` }));
    return (j, N) => (M(), k("div", Bu, [
      T("div", {
        ref_key: "svRef",
        ref: b,
        class: "fil-cp-sv",
        style: Xe({ background: G.value }),
        onPointerdown: R
      }, [
        N[1] || (N[1] = T("div", { class: "fil-cp-sv-white" }, null, -1)),
        N[2] || (N[2] = T("div", { class: "fil-cp-sv-black" }, null, -1)),
        T("div", {
          class: "fil-cp-sv-thumb",
          style: Xe(X.value)
        }, null, 4)
      ], 36),
      T("div", {
        ref_key: "hueRef",
        ref: S,
        class: "fil-cp-hue",
        onPointerdown: E
      }, [
        T("div", {
          class: "fil-cp-hue-thumb",
          style: Xe(U.value)
        }, null, 4)
      ], 544),
      T("div", Hu, [
        T("span", {
          class: "fil-cp-swatch",
          style: Xe({ background: w.value })
        }, null, 4),
        Ge(T("input", {
          "onUpdate:modelValue": N[0] || (N[0] = ($) => _.value = $),
          class: "fil-cp-hex-input",
          type: "text",
          spellcheck: "false",
          "aria-label": "Hex color",
          onKeydown: vs(I, ["enter"]),
          onBlur: I
        }, null, 544), [
          [wt, _.value]
        ])
      ]),
      T("div", Uu, [
        (M(!0), k(fe, null, ke(l.value, ($) => (M(), k("button", {
          key: $,
          class: me(["fil-color-swatch", { "is-active": e.modelValue === $ }]),
          style: Xe({ "--swatch": $ }),
          "aria-selected": e.modelValue === $,
          "aria-label": $,
          title: $,
          onClick: (O) => i($)
        }, null, 14, ju))), 128))
      ])
    ]));
  }
}), Fe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, zu = /* @__PURE__ */ Fe(Wu, [["__scopeId", "data-v-c4d5f476"]]), Ql = "__fil_color_picker_popup__";
function Gu(e) {
  return [
    {
      content: "Change color…",
      callback: (t, n, s) => Ku(e, s)
    }
  ];
}
function Ku(e, t) {
  const n = document.getElementById(Ql);
  n && n.remove();
  const s = document.createElement("div");
  s.id = Ql;
  const o = 176, l = 260, i = t ? Math.min(t.clientX, window.innerWidth - o - 8) : window.innerWidth / 2 - o / 2, a = t ? Math.min(t.clientY, window.innerHeight - l - 8) : window.innerHeight / 2 - l / 2;
  s.style.cssText = `position:fixed;z-index:10001;top:${Math.max(8, a)}px;left:${Math.max(8, i)}px;`, document.body.appendChild(s);
  function c(p) {
    e.color = p, e.__fx && (e.__fx.color = p), e.properties = e.properties || {}, e.properties.fil_custom_color = !0, u();
  }
  function u() {
    Jl(null, s), s.remove(), document.removeEventListener("mousedown", r, !0), document.removeEventListener("keydown", d, !0);
  }
  function r(p) {
    s.contains(p.target) || u();
  }
  function d(p) {
    p.key === "Escape" && u();
  }
  const f = xa(zu, {
    modelValue: e.color ?? "#78716c",
    "onUpdate:modelValue": (p) => c(p)
  });
  Jl(f, s), document.addEventListener("mousedown", r, !0), document.addEventListener("keydown", d, !0), xn(() => {
    var p;
    (p = s.querySelector(".fil-color-swatch")) == null || p.focus();
  });
}
const qu = "fil";
function ct(e, t = {}) {
  const s = e.prototype;
  if (s._filStyled) return;
  s._filStyled = !0, t.minSize && (s.minSize = t.minSize), s._filFamily = t.family ?? qu, s._filDescription = t.description ?? "", t.badges && (s.badges = t.badges), s.color = kt.accent, s.bgcolor = kt.panelAlt;
  const o = s.onNodeCreated;
  s.onNodeCreated = function(...i) {
    const a = o == null ? void 0 : o.apply(this, i);
    return this.color = kt.accent, this.bgcolor = kt.panelAlt, a;
  }, Object.getOwnPropertyDescriptor(s, "onResize") || Object.defineProperty(s, "onResize", {
    get() {
      if (this.hasOwnProperty("__filOnResize")) return this.__filOnResize;
      const i = Object.getPrototypeOf(s);
      return i ? i.onResize : void 0;
    },
    set(i) {
      const a = i;
      this.__filOnResize = function(c) {
        if (!a) return;
        const u = this.widgets || [], r = u.filter((d) => !d.hidden);
        this.widgets = r;
        try {
          a.apply(this, [c]);
        } finally {
          this.widgets = u;
        }
      };
    }
  }), s.onDrawTitleBar = function(i, a, c, u, r) {
    var m;
    const d = ((m = globalThis.LiteGraph) == null ? void 0 : m.ROUND_RADIUS) ?? 8, f = !!this.collapsed;
    i.fillStyle = kt.panel, i.beginPath(), i.roundRect(0, -a, c[0], a, f ? [d] : [d, d, 0, 0]), i.fill();
    const p = 3;
    i.fillStyle = r || kt.accent, i.beginPath(), i.roundRect(0, -a, p, a, f ? [d, 0, 0, d] : [d, 0, 0, 0]), i.fill();
  };
  const l = s.getExtraMenuOptions;
  s.getExtraMenuOptions = function(...i) {
    const a = l == null ? void 0 : l.apply(this, i), c = i[1];
    return Array.isArray(c) && c.push(null, ...Gu(this)), a;
  };
}
function Xu(e) {
  var s, o, l;
  const t = (s = e.graph) == null ? void 0 : s._nodes;
  if (!t) return;
  for (const i of t)
    i._filFamily && ((o = i.properties) != null && o.fil_custom_color || (i.color = kt.accent, i.bgcolor = kt.panelAlt));
  const n = e.canvas;
  (l = n == null ? void 0 : n.setDirty) == null || l.call(n, !0, !0);
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Ia;
const no = (e) => Ia = e, ka = (
  /* istanbul ignore next */
  Symbol()
);
function Ro(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var jn;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(jn || (jn = {}));
function Aa() {
  const e = yi(!0), t = e.run(() => /* @__PURE__ */ oe({}));
  let n = [], s = [];
  const o = Yo({
    install(l) {
      no(o), o._a = l, l.provide(ka, o), l.config.globalProperties.$pinia = o, s.forEach((i) => n.push(i)), s = [];
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
const Da = () => {
};
function Zl(e, t, n, s = Da) {
  e.push(t);
  const o = () => {
    const l = e.indexOf(t);
    l > -1 && (e.splice(l, 1), s());
  };
  return !n && wi() && or(o), o;
}
function fn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Yu = (e) => e(), ei = Symbol(), _o = Symbol();
function Po(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], o = e[n];
    Ro(o) && Ro(s) && e.hasOwnProperty(n) && !/* @__PURE__ */ ye(s) && !/* @__PURE__ */ yt(s) ? e[n] = Po(o, s) : e[n] = s;
  }
  return e;
}
const Ju = (
  /* istanbul ignore next */
  Symbol()
);
function Qu(e) {
  return !Ro(e) || !e.hasOwnProperty(Ju);
}
const { assign: $t } = Object;
function Zu(e) {
  return !!(/* @__PURE__ */ ye(e) && e.effect);
}
function ed(e, t, n, s) {
  const { state: o, actions: l, getters: i } = t, a = n.state.value[e];
  let c;
  function u() {
    a || (n.state.value[e] = o ? o() : {});
    const r = /* @__PURE__ */ Lr(n.state.value[e]);
    return $t(r, l, Object.keys(i || {}).reduce((d, f) => (d[f] = Yo(Y(() => {
      no(n);
      const p = n._s.get(e);
      return i[f].call(p, p);
    })), d), {}));
  }
  return c = Ea(e, u, t, n, s, !0), c;
}
function Ea(e, t, n = {}, s, o, l) {
  let i;
  const a = $t({ actions: {} }, n), c = { deep: !0 };
  let u, r, d = [], f = [], p;
  const m = s.state.value[e];
  !l && !m && (s.state.value[e] = {});
  let _;
  function F(R) {
    let E;
    u = r = !1, typeof R == "function" ? (R(s.state.value[e]), E = {
      type: jn.patchFunction,
      storeId: e,
      events: p
    }) : (Po(s.state.value[e], R), E = {
      type: jn.patchObject,
      payload: R,
      storeId: e,
      events: p
    });
    const G = _ = Symbol();
    xn().then(() => {
      _ === G && (u = !0);
    }), r = !0, fn(d, E, s.state.value[e]);
  }
  const w = l ? function() {
    const { state: E } = n, G = E ? E() : {};
    this.$patch((X) => {
      $t(X, G);
    });
  } : (
    /* istanbul ignore next */
    Da
  );
  function x() {
    i.stop(), d = [], f = [], s._s.delete(e);
  }
  const I = (R, E = "") => {
    if (ei in R)
      return R[_o] = E, R;
    const G = function() {
      no(s);
      const X = Array.from(arguments), U = [], j = [];
      function N(C) {
        U.push(C);
      }
      function $(C) {
        j.push(C);
      }
      fn(f, {
        args: X,
        name: G[_o],
        store: S,
        after: N,
        onError: $
      });
      let O;
      try {
        O = R.apply(this && this.$id === e ? this : S, X);
      } catch (C) {
        throw fn(j, C), C;
      }
      return O instanceof Promise ? O.then((C) => (fn(U, C), C)).catch((C) => (fn(j, C), Promise.reject(C))) : (fn(U, O), O);
    };
    return G[ei] = !0, G[_o] = E, G;
  }, b = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Zl.bind(null, f),
    $patch: F,
    $reset: w,
    $subscribe(R, E = {}) {
      const G = Zl(d, R, E.detached, () => X()), X = i.run(() => Ee(() => s.state.value[e], (U) => {
        (E.flush === "sync" ? r : u) && R({
          storeId: e,
          type: jn.direct,
          events: p
        }, U);
      }, $t({}, c, E)));
      return G;
    },
    $dispose: x
  }, S = /* @__PURE__ */ rn(b);
  s._s.set(e, S);
  const A = (s._a && s._a.runWithContext || Yu)(() => s._e.run(() => (i = yi()).run(() => t({ action: I }))));
  for (const R in A) {
    const E = A[R];
    if (/* @__PURE__ */ ye(E) && !Zu(E) || /* @__PURE__ */ yt(E))
      l || (m && Qu(E) && (/* @__PURE__ */ ye(E) ? E.value = m[R] : Po(E, m[R])), s.state.value[e][R] = E);
    else if (typeof E == "function") {
      const G = I(E, R);
      A[R] = G, a.actions[R] = E;
    }
  }
  return $t(S, A), $t(/* @__PURE__ */ he(S), A), Object.defineProperty(S, "$state", {
    get: () => s.state.value[e],
    set: (R) => {
      F((E) => {
        $t(E, R);
      });
    }
  }), s._p.forEach((R) => {
    $t(S, i.run(() => R({
      store: S,
      app: s._a,
      pinia: s,
      options: a
    })));
  }), m && l && n.hydrate && n.hydrate(S.$state, m), u = !0, r = !0, S;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function sl(e, t, n) {
  let s, o;
  const l = typeof t == "function";
  typeof e == "string" ? (s = e, o = l ? n : t) : (o = e, s = e.id);
  function i(a, c) {
    const u = Vr();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (u ? On(ka, null) : null), a && no(a), a = Ia, a._s.has(s) || (l ? Ea(s, t, o, a) : ed(s, o, a)), a._s.get(s);
  }
  return i.$id = s, i;
}
function td(e) {
  {
    const t = /* @__PURE__ */ he(e), n = {};
    for (const s in t) {
      const o = t[s];
      o.effect ? n[s] = // ...
      Y({
        get: () => e[s],
        set(l) {
          e[s] = l;
        }
      }) : (/* @__PURE__ */ ye(o) || /* @__PURE__ */ yt(o)) && (n[s] = // ---
      /* @__PURE__ */ Ar(e, s));
    }
    return n;
  }
}
let nn = null;
function nd(e) {
  return nn || (nn = Aa(), nn);
}
function so() {
  return nn || (nn = Aa()), nn;
}
const sd = { class: "fil-node-shell" }, od = /* @__PURE__ */ xe({
  __name: "FilNodeShell",
  props: {
    root: {},
    state: {},
    comfyClass: {}
  },
  setup(e) {
    return (t, n) => (M(), k("div", sd, [
      (M(), Ie(ac(e.root), { state: e.state }, null, 8, ["state"]))
    ]));
  }
}), ld = /* @__PURE__ */ Fe(od, [["__scopeId", "data-v-15f48dad"]]);
function No(e, t, n) {
  const s = Math.abs(n) >= Math.abs(t), o = getComputedStyle(e);
  if (s) {
    const l = o.overflowY;
    if ((l === "auto" || l === "scroll") && e.scrollHeight > e.clientHeight + 1) {
      const i = e.scrollTop <= 0, a = e.scrollTop + e.clientHeight >= e.scrollHeight - 1;
      if (n < 0 && !i || n > 0 && !a) return !0;
    }
  } else {
    const l = o.overflowX;
    if ((l === "auto" || l === "scroll") && e.scrollWidth > e.clientWidth + 1) {
      const i = e.scrollLeft <= 0, a = e.scrollLeft + e.clientWidth >= e.scrollWidth - 1;
      if (t < 0 && !i || t > 0 && !a) return !0;
    }
  }
  return !1;
}
function Ta(e, t, n, s = null) {
  let o = e instanceof Element ? e : null;
  for (; o && o !== s; ) {
    if (No(o, t, n)) return !0;
    o = o.parentElement;
  }
  return !1;
}
function id(e, t, n, s) {
  const o = (l) => {
    const i = l.getBoundingClientRect();
    return i.width > 0 && i.height > 0 && e >= i.left && e <= i.right && t >= i.top && t <= i.bottom;
  };
  for (const l of document.querySelectorAll(".dom-widget"))
    if (o(l)) {
      if (No(l, n, s)) return l;
      for (const i of l.querySelectorAll("*"))
        if (o(i) && No(i, n, s)) return i;
    }
  return null;
}
const ad = "__filVueMounted";
function Wt(e, t, n, s) {
  const o = e;
  if (typeof o.addDOMWidget != "function")
    return console.warn(`[FiL_Design_ImageMind] domWidgetHost: node.addDOMWidget not available for "${t}" — ComfyUI core too old?`), null;
  const l = document.createElement("div");
  l.className = "fil-vue-host", l.style.width = "100%", l.style.boxSizing = "border-box", l.style.height = "auto", l[ad] = !0, l.addEventListener(
    "wheel",
    (x) => {
      var b, S;
      if (Ta(x.target, x.deltaX, x.deltaY, l.parentElement)) return;
      const I = (S = (b = globalThis.app) == null ? void 0 : b.canvas) == null ? void 0 : S.canvas;
      I instanceof HTMLCanvasElement && (x.preventDefault(), I.dispatchEvent(new WheelEvent("wheel", {
        deltaX: x.deltaX,
        deltaY: x.deltaY,
        deltaZ: x.deltaZ,
        deltaMode: x.deltaMode,
        clientX: x.clientX,
        clientY: x.clientY,
        bubbles: !0,
        cancelable: !0
      })));
    },
    { passive: !1 }
  );
  const i = /* @__PURE__ */ rn(s.state);
  let a = s.height;
  const c = () => {
    const x = l.firstElementChild;
    return !x || x.clientHeight === 0 || (a = Math.ceil(x.scrollHeight / 4) * 4), a;
  }, u = o.addDOMWidget(t, "custom", l, {
    hideOnZoom: !0,
    getValue: () => i,
    setValue: (x) => {
      if (x && typeof x == "object") {
        const I = x, b = i;
        I.nodeState && typeof I.nodeState == "object" && b.nodeState && Object.assign(b.nodeState, I.nodeState), I.ui && typeof I.ui == "object" && b.ui && Object.assign(b.ui, I.ui);
        for (const [S, L] of Object.entries(I))
          S !== "nodeState" && S !== "ui" && (b[S] = L);
      }
    },
    getHeight: c,
    ...s.onDraw ? { onDraw: s.onDraw } : {}
  }), r = eo(ld, { root: n, state: i, comfyClass: o.comfyClass ?? "default" }).use(so());
  r.mount(l);
  function d() {
    var E, G;
    if (c(), !o.computeSize || !o.setSize || !o.size) return;
    const [x, I] = o.size, [, b] = o.computeSize(), [S, L] = o.minSize ?? [0, 0], A = Math.max(x, S), R = Math.max(b, I, L);
    A === x && Math.abs(R - I) < 2 || (o.setSize([A, R]), (G = (E = o.graph) == null ? void 0 : E.setDirtyCanvas) == null || G.call(E, !0, !0));
  }
  let f = 0;
  const p = new ResizeObserver(() => {
    f || (f = requestAnimationFrame(() => {
      f = 0, d();
    }));
  });
  p.observe(l);
  let m = 20;
  (function x() {
    d(), m-- > 0 && requestAnimationFrame(x);
  })();
  const _ = setInterval(d, 400), F = { widget: u, host: l, app: r, state: i, unmount: w };
  function w() {
    p.disconnect(), f && cancelAnimationFrame(f), clearInterval(_);
    try {
      this.app.unmount();
    } catch (x) {
      console.warn(`[FiL_Design_ImageMind] unmount failed for "${t}":`, x);
    }
    for (; this.host.firstChild; ) this.host.removeChild(this.host.firstChild);
  }
  return F.unmount = w.bind(F), o._filVueApps ?? (o._filVueApps = {}), o._filVueApps[t] = F, F;
}
function zt(e) {
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
function te(e, t) {
  const n = e;
  if (n.widgets)
    return n.widgets.find((s) => s.name === t);
}
function un(e, t) {
  return new Proxy({ ...t }, {
    set(n, s, o) {
      n[s] = o;
      const l = te(e, String(s));
      return l && (l.value = o), !0;
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
const ti = 4, rd = {
  info: 3500,
  success: 3e3,
  warning: 5e3,
  error: 6e3
};
let cd = 1;
const Bt = /* @__PURE__ */ sl("fil/toast", () => {
  const e = /* @__PURE__ */ oe([]), t = /* @__PURE__ */ oe([]);
  function n(u, r, d = {}) {
    const f = {
      id: cd++,
      level: u,
      text: r == null ? "" : String(r),
      timeout: d.timeout ?? rd[u],
      sticky: !!d.sticky,
      action: d.action ?? null
    };
    return e.value.length < ti ? e.value.push(f) : t.value.push(f), f;
  }
  function s(u, r) {
    return n("info", u, r);
  }
  function o(u, r) {
    return n("success", u, r);
  }
  function l(u, r) {
    return n("warning", u, r);
  }
  function i(u, r) {
    return n("error", u, r);
  }
  function a(u) {
    e.value = e.value.filter((r) => r.id !== u), t.value.length > 0 && e.value.length < ti && e.value.push(t.value.shift());
  }
  function c() {
    e.value = [], t.value = [];
  }
  return { items: e, queue: t, info: s, success: o, warning: l, error: i, push: n, dismiss: a, dismissAll: c };
});
function ud() {
  var t, n;
  return ((n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.toast) ?? null;
}
function ds(e, t) {
  const n = ud();
  if (n != null && n.addAlert && (e === "info" || e === "success" || e === "warning" || e === "error"))
    try {
      n.addAlert(t);
      return;
    } catch (s) {
      console.warn("[FiL_Design_ImageMind toast] extensionManager.toast failed:", s);
    }
  Bt().push(e, t, {});
}
const Ze = {
  info: (e) => ds("info", e),
  success: (e) => ds("success", e),
  warning: (e) => ds("warning", e),
  error: (e) => ds("error", e),
  // Direct Pinia access for Vue components that want actions/sticky/toasts.
  infoRich: (e, t) => Bt().info(e, t),
  successRich: (e, t) => Bt().success(e, t),
  warningRich: (e, t) => Bt().warning(e, t),
  errorRich: (e, t) => Bt().error(e, t),
  dismissAll: () => Bt().dismissAll()
}, dd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  toast: Ze,
  useToastStore: Bt
}, Symbol.toStringTag, { value: "Module" }));
function ni() {
  var t, n, s, o, l, i, a, c;
  return !!(((o = (s = (n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.setting) == null ? void 0 : s.get) == null ? void 0 : o.call(s, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? ((c = (a = (i = (l = globalThis.app) == null ? void 0 : l.ui) == null ? void 0 : i.settings) == null ? void 0 : a.getSettingValue) == null ? void 0 : c.call(a, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? !0);
}
function si() {
  function e(s, o, l, i) {
  }
  function t(s, o, l, i) {
    ni() && Ze.success("Connected");
  }
  function n(s, o) {
    ni() && Ze.info("Disconnected");
  }
  return { onConnectionsChange: e, onConnect: t, onDisconnect: n };
}
function ut(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype, n = t.onNodeCreated;
  t.onNodeCreated = function(...l) {
    const i = n == null ? void 0 : n.apply(this, l);
    return this.color, i;
  };
  const s = t.onConnect;
  t.onConnect = function(...l) {
    const { onConnect: i } = si();
    return i(...l), s == null ? void 0 : s.apply(this, l);
  };
  const o = t.onDisconnect;
  t.onDisconnect = function(...l) {
    const { onDisconnect: i } = si();
    return i(...l), o == null ? void 0 : o.apply(this, l);
  };
}
const fd = /* @__PURE__ */ jt(() => Promise.resolve().then(() => Nm)), pd = {
  id: "FiLSeed",
  register(e, t) {
    ct(e, {
      minSize: [240, 90],
      family: "value",
      description: "Fixed or randomized seed with copy and reuse buttons.",
      badges: [{ text: "seed" }]
    });
    const s = e.prototype, o = s.onNodeCreated;
    s.onNodeCreated = function(...a) {
      const c = o == null ? void 0 : o.apply(this, a), u = this, r = te(u, "seed"), d = pe(r, "number", 0);
      r && (r.hidden = !0);
      const f = te(u, "control_after_generate");
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
      return Object.defineProperty(p, "node", { value: u, enumerable: !1, configurable: !0 }), u._filSeedState = p, Wt(u, "fil_seed_view", fd, { state: p, height: 52 }), c;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...a) {
      const c = l == null ? void 0 : l.apply(this, a), u = this, r = u._filSeedState;
      return r && (r.nodeState.seed = pe(te(u, "seed"), "number", 0)), c;
    };
    const i = s.onRemoved;
    s.onRemoved = function(...a) {
      return zt(this), i == null ? void 0 : i.apply(this, a);
    }, ut(e);
  }
}, md = /* @__PURE__ */ jt(() => Promise.resolve().then(() => Lh)), hd = {
  id: "FiLProviderLoader",
  register(e, t) {
    ct(e, {
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
      { name: "seed", kind: "number", fallback: -1 },
      { name: "max_image_side", kind: "number", fallback: 1024 }
    ], l = s.onNodeCreated;
    s.onNodeCreated = function(...c) {
      const u = l == null ? void 0 : l.apply(this, c), r = this, d = pe(te(r, "provider"), "string", "ollama"), f = pe(te(r, "model"), "string", "(loading...)"), p = pe(te(r, "temperature"), "number", 0.7), m = pe(te(r, "max_tokens"), "number", 0), _ = pe(te(r, "rate_limit_ms"), "number", 100), F = pe(te(r, "seed"), "number", -1), w = pe(te(r, "max_image_side"), "number", 1024);
      for (const I of ["provider", "model", "refresh_models", "temperature", "max_tokens", "rate_limit_ms", "seed", "control_after_generate", "max_image_side"]) {
        const b = te(r, I);
        b && (b.hidden = !0);
      }
      const x = {
        nodeState: un(r, {
          provider: d,
          model: f,
          temperature: p,
          max_tokens: m,
          rate_limit_ms: _,
          seed: F,
          max_image_side: w
        }),
        initialValues: {
          provider: d,
          model: f,
          temperature: p,
          max_tokens: m,
          rate_limit_ms: _,
          seed: F,
          max_image_side: w
        },
        ui: {}
      };
      return Object.defineProperty(x, "node", { value: r, enumerable: !1, configurable: !0 }), r._filProviderState = x, Wt(r, "fil_provider_view", md, { state: x, height: 180 }), u;
    };
    const i = s.onConfigure;
    s.onConfigure = function(...c) {
      const u = i == null ? void 0 : i.apply(this, c), r = this, d = r._filProviderState;
      if (!d) return u;
      const f = d.nodeState;
      for (const { name: p, kind: m, fallback: _ } of o)
        f[p] = pe(te(r, p), m, _);
      return u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...c) {
      return zt(this), a == null ? void 0 : a.apply(this, c);
    }, ut(e);
  }
}, gd = /* @__PURE__ */ jt(() => Promise.resolve().then(() => Uh)), _d = {
  id: "FiLOpticScanner",
  register(e, t) {
    ct(e, {
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
    ], l = s.onNodeCreated;
    s.onNodeCreated = function(...c) {
      const u = l == null ? void 0 : l.apply(this, c), r = this, d = {}, f = {};
      for (const w of o) {
        const x = te(r, w);
        if (!x) continue;
        const I = pe(x, "string", "");
        d[w] = I, f[w] = I, x.hidden = !0;
      }
      const p = te(r, "seed"), m = te(r, "control_after_generate"), _ = pe(p, "number", -1);
      p && (p.hidden = !0), m && (m.hidden = !0), d.seed = _, f.seed = _, f.seed_mode = "random";
      const F = {
        nodeState: un(r, f),
        initialValues: d,
        ui: {},
        lastRunSeed: null
      };
      return Object.defineProperty(F, "node", { value: r, enumerable: !1, configurable: !0 }), r._filScannerSeedState = F, Wt(r, "fil_scanner_view", gd, { state: F, height: 460 }), u;
    };
    const i = s.onConfigure;
    s.onConfigure = function(...c) {
      const u = i == null ? void 0 : i.apply(this, c), r = this, d = r._filScannerSeedState;
      if (!d) return u;
      for (const f of o) {
        const p = te(r, f);
        p && (d.nodeState[f] = pe(p, "string", ""));
      }
      return d.nodeState.seed = pe(te(r, "seed"), "number", -1), u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...c) {
      return zt(this), a == null ? void 0 : a.apply(this, c);
    }, ut(e);
  }
}, vd = /* @__PURE__ */ jt(() => Promise.resolve().then(() => Yh)), bd = {
  id: "FiLNeuroCleaner",
  register(e, t) {
    ct(e, {
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
    }, l = s.onNodeCreated;
    s.onNodeCreated = function(...c) {
      const u = l == null ? void 0 : l.apply(this, c), r = this, d = {}, f = {};
      for (const m of Object.keys(o)) {
        const _ = te(r, m), F = pe(_, "boolean", o[m]);
        d[m] = F, f[m] = F, _ && (_.hidden = !0);
      }
      const p = { nodeState: un(r, d), initialValues: f, ui: {} };
      return r._filCleanerState = p, Wt(r, "fil_cleaner_view", vd, { state: p, height: 460 }), u;
    };
    const i = s.onConfigure;
    s.onConfigure = function(...c) {
      const u = i == null ? void 0 : i.apply(this, c), r = this, d = r._filCleanerState;
      if (!d) return u;
      for (const f of Object.keys(o))
        d.nodeState[f] = pe(te(r, f), "boolean", o[f]);
      return u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...c) {
      return zt(this), a == null ? void 0 : a.apply(this, c);
    }, ut(e);
  }
}, yd = /* @__PURE__ */ jt(() => Promise.resolve().then(() => sg)), wd = {
  id: "FiLBeforeAfterCompare",
  register(e, t) {
    ct(e, {
      minSize: [340, 500],
      family: "image",
      description: "Before/after viewer (wipe, side-by-side, overlay, difference) with optional output resizing.",
      badges: [{ text: "compare", color: "#62c987", text_color: "#1a1a1a" }]
    });
    const s = e.prototype, o = s.onNodeCreated;
    s.onNodeCreated = function(...a) {
      const c = o == null ? void 0 : o.apply(this, a), u = this, r = te(u, "swap"), d = te(u, "resize_mode"), f = te(u, "max_resolution"), p = {
        swap: pe(r, "boolean", !1),
        resize_mode: pe(d, "string", "Off"),
        max_resolution: pe(f, "number", 4096)
      };
      for (const w of [r, d, f])
        w && (w.hidden = !0);
      const m = {
        nodeState: un(u, p),
        initialValues: { ...p },
        ui: {
          compare_mode: "wipe",
          compare_position: 0.5,
          compare_opacity: 0.5,
          settings_collapsed: !0
        }
      };
      u._filCompareState = m;
      const _ = Wt(u, "fil_compare_view", yd, { state: m, height: 380 }), F = u.onExecuted;
      return u.onExecuted = function(w) {
        const x = F == null ? void 0 : F.apply(this, [w]), I = w;
        return _ && I && (_.state.ui.compare_images = { a: I.a_images ?? [], b: I.b_images ?? [] }), x;
      }, c;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...a) {
      const c = l == null ? void 0 : l.apply(this, a), u = this, r = u._filCompareState;
      return r && (r.nodeState.swap = pe(te(u, "swap"), "boolean", !1), r.nodeState.resize_mode = pe(te(u, "resize_mode"), "string", "Off"), r.nodeState.max_resolution = pe(te(u, "max_resolution"), "number", 4096)), c;
    };
    const i = s.onRemoved;
    s.onRemoved = function(...a) {
      return zt(this), i == null ? void 0 : i.apply(this, a);
    }, ut(e);
  }
}, xd = /* @__PURE__ */ jt(() => Promise.resolve().then(() => Wa)), Sd = {
  id: "FiLUpscaleTileCalc",
  register(e, t) {
    ct(e, {
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
    }, l = {
      auto_overlap: !1,
      auto_mode: !1,
      non_square_tiles: !1,
      auto_fix_thin_edges: !1
    }, i = { auto_profile: "Balanced" }, a = s.onNodeCreated;
    s.onNodeCreated = function(...r) {
      const d = a == null ? void 0 : a.apply(this, r), f = this, p = {}, m = {};
      for (const F of Object.keys(o)) {
        const w = te(f, F);
        if (!w) continue;
        const x = pe(w, "number", o[F]);
        p[F] = x, m[F] = x, w.hidden = !0;
      }
      for (const F of Object.keys(l)) {
        const w = te(f, F);
        if (!w) continue;
        const x = pe(w, "boolean", l[F]);
        p[F] = x, m[F] = x, w.hidden = !0;
      }
      for (const F of Object.keys(i)) {
        const w = te(f, F);
        if (!w) continue;
        const x = pe(w, "string", i[F]);
        p[F] = x, m[F] = x, w.hidden = !0;
      }
      const _ = { nodeState: un(f, p), initialValues: m, ui: {} };
      return f._filUpscaleState = _, Wt(f, "fil_upscale_view", xd, { state: _, height: 420 }), d;
    };
    const c = s.onConfigure;
    s.onConfigure = function(...r) {
      const d = c == null ? void 0 : c.apply(this, r), f = this, p = f._filUpscaleState;
      if (!p) return d;
      for (const m of Object.keys(o))
        p.nodeState[m] = pe(te(f, m), "number", o[m]);
      for (const m of Object.keys(l))
        p.nodeState[m] = pe(te(f, m), "boolean", l[m]);
      for (const m of Object.keys(i))
        p.nodeState[m] = pe(te(f, m), "string", i[m]);
      return d;
    };
    const u = s.onRemoved;
    s.onRemoved = function(...r) {
      return zt(this), u == null ? void 0 : u.apply(this, r);
    }, ut(e);
  }
}, Cd = /* @__PURE__ */ jt(() => Promise.resolve().then(() => Wa)), Fd = {
  id: "FiLUpscaleSimple",
  register(e, t) {
    ct(e, {
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
    }, l = {
      auto_overlap: !1,
      auto_mode: !1,
      non_square_tiles: !1,
      auto_fix_thin_edges: !1
    }, i = { auto_profile: "Balanced" }, a = s.onNodeCreated;
    s.onNodeCreated = function(...r) {
      const d = a == null ? void 0 : a.apply(this, r), f = this, p = {}, m = {};
      for (const F of Object.keys(o)) {
        const w = te(f, F);
        if (!w) continue;
        const x = pe(w, "number", o[F]);
        p[F] = x, m[F] = x, w.hidden = !0;
      }
      for (const F of Object.keys(l)) {
        const w = te(f, F);
        if (!w) continue;
        const x = pe(w, "boolean", l[F]);
        p[F] = x, m[F] = x, w.hidden = !0;
      }
      for (const F of Object.keys(i)) {
        const w = te(f, F);
        if (!w) continue;
        const x = pe(w, "string", i[F]);
        p[F] = x, m[F] = x, w.hidden = !0;
      }
      const _ = { nodeState: un(f, p), initialValues: m, ui: {} };
      return f._filUpscaleState = _, Wt(f, "fil_upscale_simple_view", Cd, { state: _, height: 420 }), d;
    };
    const c = s.onConfigure;
    s.onConfigure = function(...r) {
      const d = c == null ? void 0 : c.apply(this, r), f = this, p = f._filUpscaleState;
      if (!p) return d;
      for (const m of Object.keys(o))
        p.nodeState[m] = pe(te(f, m), "number", o[m]);
      for (const m of Object.keys(l))
        p.nodeState[m] = pe(te(f, m), "boolean", l[m]);
      for (const m of Object.keys(i))
        p.nodeState[m] = pe(te(f, m), "string", i[m]);
      return d;
    };
    const u = s.onRemoved;
    s.onRemoved = function(...r) {
      return zt(this), u == null ? void 0 : u.apply(this, r);
    }, ut(e);
  }
}, Md = {
  id: "FiLTileAssembly",
  register(e, t) {
    ct(e, {
      minSize: [270, 200],
      family: "image",
      description: "Recombines processed tiles back into one image, feathered across the real overlap zones.",
      badges: [{ text: "tile", color: "#62c987", text_color: "#1a1a1a" }]
    }), ut(e);
  }
}, Ld = {
  id: "FiLKSampler",
  register(e, t) {
    ct(e, {
      minSize: [270, 260],
      family: "sampling",
      description: "Full sampler/scheduler set, passthrough outputs, preview, HighRes-fix script.",
      badges: [{ text: "sampler", color: "#7aa2f7", text_color: "#0b0e14" }]
    }), ut(e);
  }
}, Id = /* @__PURE__ */ jt(() => Promise.resolve().then(() => wg)), Oo = {
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
}, kd = [
  ...Object.keys(Oo),
  ...Object.keys($o),
  ...Object.keys(Vo)
], Ad = {
  id: "FiLHighResFix",
  register(e, t) {
    ct(e, {
      // Height kept LOW on purpose — computeSize() (~430px real content)
      // always wins via Math.max in domWidgetHost.ts, so a buffer above it
      // here would just be dead space at the bottom. Width is the actual
      // reason this floor exists (computeSize()'s own width guess ignores it).
      minSize: [320, 300],
      family: "sampling",
      description: "Latent/pixel upscale + re-sample settings, packed into a script for FiLKSampler.",
      badges: [{ text: "hires", color: "#bb9af7", text_color: "#0b0e14" }]
    });
    const s = e.prototype, o = (c, u) => {
      for (const r of Object.keys(Oo))
        u[r] = pe(te(c, r), "number", Oo[r]);
      for (const r of Object.keys($o))
        u[r] = pe(te(c, r), "string", $o[r]);
      for (const r of Object.keys(Vo))
        u[r] = pe(te(c, r), "boolean", Vo[r]);
    }, l = s.onNodeCreated;
    s.onNodeCreated = function(...c) {
      const u = l == null ? void 0 : l.apply(this, c), r = this, d = {};
      o(r, d);
      for (const m of kd) {
        const _ = te(r, m);
        _ && (_.hidden = !0);
      }
      const f = te(r, "control_after_generate");
      f && (f.hidden = !0, f.value = "fixed"), d.seed_mode = "random";
      const p = {
        nodeState: un(r, d),
        initialValues: { ...d },
        ui: {},
        lastRunSeed: null
      };
      return Object.defineProperty(p, "node", { value: r, enumerable: !1, configurable: !0 }), r._filHiResFixState = p, Wt(r, "fil_hiresfix_view", Id, { state: p, height: 420 }), u;
    };
    const i = s.onConfigure;
    s.onConfigure = function(...c) {
      const u = i == null ? void 0 : i.apply(this, c), r = this, d = r._filHiResFixState;
      return d && o(r, d.nodeState), u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...c) {
      return zt(this), a == null ? void 0 : a.apply(this, c);
    }, ut(e);
  }
}, Dd = {
  id: "FiLNoiseControl",
  register(e, t) {
    ct(e, {
      minSize: [270, 220],
      family: "sampling",
      description: "RNG source + seed-variation script for FiLKSampler.",
      badges: [{ text: "script", color: "#7aa2f7", text_color: "#0b0e14" }]
    }), ut(e);
  }
}, Ed = [
  pd,
  hd,
  _d,
  bd,
  wd,
  Sd,
  Fd,
  Md,
  Ld,
  Ad,
  Dd
], Ra = Object.fromEntries(
  Ed.map((e) => [e.id, e])
), fs = /* @__PURE__ */ oe({});
let oi = !1;
const Os = /* @__PURE__ */ sl("fil/help", () => {
  const e = /* @__PURE__ */ oe(null);
  function t(a) {
    for (const [c, u] of Object.entries(a))
      fs.value[c] = u;
  }
  function n() {
    oi || (oi = !0, Promise.resolve().then(() => Sg).then(({ HELP_DEFAULTS: a }) => t(a)).catch((a) => console.warn("[FiL_Design_ImageMind] help defaults import failed:", a)));
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
function Pa(e) {
  return Td[e];
}
const Rd = ["title", "aria-label", "innerHTML"], Pd = /* @__PURE__ */ xe({
  name: "FilIcon",
  __name: "FilIcon",
  props: {
    name: {},
    size: { default: 16 },
    title: {}
  },
  setup(e) {
    return (t, n) => (M(), k("span", {
      class: "fil-icon",
      style: Xe({ width: e.size + "px", height: e.size + "px" }),
      title: e.title,
      role: "img",
      "aria-label": e.title ?? e.name,
      innerHTML: g(Pa)(e.name)
    }, null, 12, Rd));
  }
}), Tt = /* @__PURE__ */ Fe(Pd, [["__scopeId", "data-v-dfb78d9f"]]), Nd = ["aria-label"], Od = { class: "fil-modal-header" }, $d = { class: "fil-modal-title" }, Vd = { class: "fil-modal-body" }, Bd = /* @__PURE__ */ xe({
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
    const n = e, s = t, o = /* @__PURE__ */ oe(null), l = /* @__PURE__ */ oe(null);
    function i() {
      s("update:open", !1), s("close");
    }
    function a(d) {
      n.closeOnBackdrop && d.target === d.currentTarget && i();
    }
    function c(d) {
      n.closeOnEsc && d.key === "Escape" && i(), d.key === "Tab" && u(d);
    }
    function u(d) {
      if (!o.value) return;
      const f = r(o.value);
      if (!f.length) {
        d.preventDefault();
        return;
      }
      const p = f[0], m = f[f.length - 1];
      d.shiftKey ? document.activeElement === p && (d.preventDefault(), m.focus()) : document.activeElement === m && (d.preventDefault(), p.focus());
    }
    function r(d) {
      return Array.from(
        d.querySelectorAll(
          'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((f) => !f.disabled && f.offsetParent !== null);
    }
    return Ee(
      () => n.open,
      (d) => {
        var f;
        d ? (l.value = document.activeElement, xn(() => {
          var m;
          (m = (o.value ? r(o.value) : [])[0] || o.value) == null || m.focus();
        })) : ((f = l.value) == null || f.focus(), l.value = null);
      }
    ), cn(() => {
      document.addEventListener("keydown", c);
    }), Sn(() => {
      document.removeEventListener("keydown", c);
    }), (d, f) => (M(), Ie(Ki, { to: "body" }, [
      q(tu, { name: "fil-modal" }, {
        default: ss(() => [
          e.open ? (M(), k("div", {
            key: 0,
            ref_key: "modalRef",
            ref: o,
            class: "fil-modal-backdrop",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title || "Dialog",
            onClick: a
          }, [
            T("div", {
              class: "fil-modal-panel",
              style: Xe({ maxWidth: e.width })
            }, [
              T("div", Od, [
                T("span", $d, Z(e.title), 1),
                T("button", {
                  class: "fil-modal-close",
                  title: "Close",
                  onClick: i
                }, [
                  q(Tt, {
                    name: "close",
                    size: 14
                  })
                ])
              ]),
              T("div", Vd, [
                cc(d.$slots, "default", {}, void 0, !0)
              ])
            ], 4)
          ], 8, Nd)) : ee("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), ol = /* @__PURE__ */ Fe(Bd, [["__scopeId", "data-v-00452928"]]), Hd = { class: "fil-help-title" }, Ud = {
  key: 0,
  class: "fil-help-body"
}, jd = { key: 1 }, Wd = {
  key: 2,
  class: "fil-help-table"
}, zd = {
  key: 3,
  class: "fil-help-code"
}, Gd = {
  key: 1,
  class: "fil-help-empty"
}, Kd = /* @__PURE__ */ xe({
  __name: "FilHelpPopup",
  setup(e) {
    const t = Os(), n = Y(() => {
      const o = t.activeHelpId;
      return o ? t.get(o) ?? null : null;
    }), s = Y({
      get: () => t.activeHelpId !== null,
      set: (o) => {
        o || t.value_close();
      }
    });
    return Ee(n, (o) => {
      o || t.value_close();
    }), (o, l) => (M(), Ie(ol, {
      open: s.value,
      "onUpdate:open": l[0] || (l[0] = (i) => s.value = i),
      title: "FiL LLM Help",
      width: "600px",
      onClose: l[1] || (l[1] = (i) => g(t).value_close())
    }, {
      default: ss(() => {
        var i;
        return [
          n.value ? (M(), k(fe, { key: 0 }, [
            T("h2", Hd, Z(n.value.title), 1),
            n.value.body ? (M(), k("p", Ud, Z(n.value.body), 1)) : ee("", !0),
            (i = n.value.bullets) != null && i.length ? (M(), k("ul", jd, [
              (M(!0), k(fe, null, ke(n.value.bullets, (a, c) => (M(), k("li", {
                key: c,
                class: "fil-help-bullet"
              }, [
                q(Tt, {
                  name: "chevronRight",
                  size: 12
                }),
                T("span", null, Z(a), 1)
              ]))), 128))
            ])) : ee("", !0),
            n.value.table ? (M(), k("table", Wd, [
              T("thead", null, [
                T("tr", null, [
                  (M(!0), k(fe, null, ke(n.value.table.headers, (a) => (M(), k("th", { key: a }, Z(a), 1))), 128))
                ])
              ]),
              T("tbody", null, [
                (M(!0), k(fe, null, ke(n.value.table.rows, (a, c) => (M(), k("tr", { key: c }, [
                  (M(!0), k(fe, null, ke(a, (u, r) => (M(), k("td", { key: r }, Z(u), 1))), 128))
                ]))), 128))
              ])
            ])) : ee("", !0),
            n.value.code ? (M(), k("pre", zd, [
              T("code", null, Z(n.value.code), 1)
            ])) : ee("", !0)
          ], 64)) : (M(), k("p", Gd, "No help available for this node."))
        ];
      }),
      _: 1
    }, 8, ["open"]));
  }
}), qd = /* @__PURE__ */ Fe(Kd, [["__scopeId", "data-v-536c1547"]]);
let vo = null;
function Xd(e) {
  if (vo) return;
  const t = document.createElement("div");
  t.id = "__fil_help_popup_host", document.body.appendChild(t), vo = eo(qd).use(so()), vo.mount(t), console.info("[FiL_Design_ImageMind] help popup mounted");
}
function Yd() {
  var o, l, i, a, c, u, r, d;
  const e = globalThis, t = "FiL_Design_ImageMind.RunButton.AnimationDuration", n = ((a = (i = (l = (o = e.app) == null ? void 0 : o.extensionManager) == null ? void 0 : l.setting) == null ? void 0 : i.get) == null ? void 0 : a.call(i, t, "Normal")) ?? ((d = (r = (u = (c = globalThis.app) == null ? void 0 : c.ui) == null ? void 0 : u.settings) == null ? void 0 : r.getSettingValue) == null ? void 0 : d.call(r, t, "Normal")) ?? "Normal";
  return { Fast: 200, Normal: 400, Slow: 600 }[String(n)] || 400;
}
function Jd(e, t) {
  var u, r, d, f, p, m, _, F, w, x;
  if (!(((f = (d = (r = (u = globalThis.app) == null ? void 0 : u.extensionManager) == null ? void 0 : r.setting) == null ? void 0 : d.get) == null ? void 0 : f.call(d, "FiL_Design_ImageMind.RunButton.Enabled", !0)) ?? ((F = (_ = (m = (p = globalThis.app) == null ? void 0 : p.ui) == null ? void 0 : m.settings) == null ? void 0 : _.getSettingValue) == null ? void 0 : F.call(_, "FiL_Design_ImageMind.RunButton.Enabled", !0)) ?? !0)) return;
  const o = (x = (w = e == null ? void 0 : e.canvas) == null ? void 0 : w.nodeEls) == null ? void 0 : x[t];
  if (!o) return;
  const l = o.querySelector(".comfy-node-header");
  if (!l) return;
  const i = Yd(), a = l.style.background, c = Math.max(60, i * 0.3);
  l.style.transition = `background ${c}ms ease`, l.style.background = "var(--fil-accent, #7c3aed)", setTimeout(() => {
    l.style.background = a;
  }, i);
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
const Na = "FiL_Design_ImageMind", Lt = "/fil_design_imagemind", an = `[${Na}]`, Zd = `${Na}.UI`;
async function Oa(e) {
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
function li(e) {
  var o;
  const n = `/view?${new URLSearchParams({
    filename: e.filename,
    type: e.type || "temp",
    subfolder: e.subfolder || ""
  }).toString()}`, s = globalThis;
  return (o = s.api) != null && o.apiURL ? s.api.apiURL(n) : n;
}
function $a() {
  var t;
  const e = globalThis;
  if ((t = e.api) != null && t.fetchApi) return (n, s) => e.api.fetchApi(n, s);
  if (e.fetch) return e.fetch.bind(globalThis);
  throw new Error(`${an} no HTTP transport (api.fetchApi or window.fetch undefined)`);
}
async function Tn(e) {
  const t = await $a()(e);
  return Oa(t);
}
async function bs(e, t) {
  const n = await $a()(e, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  });
  return Oa(n);
}
const Qt = {
  loadAccounts: () => Tn(`${Lt}/auth`),
  saveAccounts: (e) => bs(`${Lt}/auth`, {
    accounts: e
  }),
  loadModels: (e, t = !1) => Tn(`${Lt}/models/${encodeURIComponent(e)}${t ? "?force=1" : ""}`),
  probe: (e, t = "") => bs(`${Lt}/provider_probe`, { provider: e, model: t }),
  listProviders: () => Tn(`${Lt}/providers`),
  saveCompareImage: (e) => bs(`${Lt}/compare/save`, { image: e }),
  nodeContracts: () => Tn(`${Lt}/node_contracts`)
};
function Bo(e, t, n) {
  var o, l, i, a, c, u, r, d;
  const s = n ?? globalThis;
  try {
    const f = (i = (l = (o = s.app) == null ? void 0 : o.extensionManager) == null ? void 0 : l.setting) == null ? void 0 : i.get;
    if (typeof f == "function") return f(e, t);
    const p = ((c = (a = s.ui) == null ? void 0 : a.settings) == null ? void 0 : c.getSettingValue) ?? ((d = (r = (u = globalThis.app) == null ? void 0 : u.ui) == null ? void 0 : r.settings) == null ? void 0 : d.getSettingValue);
    if (typeof p == "function") return p(e, t);
  } catch (f) {
    console.warn(`[FiL_Design_ImageMind] setting read failed for "${e}":`, f);
  }
  return t;
}
const ef = "FiL_Design_ImageMind.Language", Va = "en", Wn = /* @__PURE__ */ rn({
  lang: Va,
  translations: {},
  loaded: !1
});
let ii = null;
async function tf(e) {
  try {
    const t = await Tn(`/fil_design_imagemind/locale/${encodeURIComponent(e)}`);
    Wn.translations = t, Wn.lang = e;
  } catch (t) {
    console.warn(`[FiL_Design_ImageMind] failed to load locale "${e}":`, t);
  } finally {
    Wn.loaded = !0;
  }
}
function nf() {
  if (ii) return;
  const e = Bo(ef, Va);
  ii = tf(e);
}
function Pt() {
  nf();
  function e(t, n) {
    return Wn.translations[t] ?? n;
  }
  return { t: e, state: /* @__PURE__ */ xs(Wn) };
}
const sf = ["onMouseenter", "onMouseleave"], of = { class: "fil-toast-text" }, lf = ["onClick"], af = ["aria-label", "onClick"], rf = /* @__PURE__ */ xe({
  __name: "FilToastStack",
  setup(e) {
    const { t } = Pt(), n = Bt(), { items: s } = td(n), o = /* @__PURE__ */ oe(null), l = /* @__PURE__ */ new Map(), i = {
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
    function c(f) {
      const p = l.get(f.id);
      p && (clearTimeout(p), l.delete(f.id));
    }
    function u(f) {
      !l.has(f.id) && !f.sticky && a(f);
    }
    function r(f) {
      n.dismiss(f.id);
    }
    const d = Y(() => s.value);
    return cn(() => {
      for (const f of s.value) a(f);
    }), Sn(() => {
      for (const f of l.values()) clearTimeout(f);
      l.clear();
    }), (f, p) => (M(), k("div", {
      ref_key: "root",
      ref: o,
      class: "fil-toast-stack",
      role: "status",
      "aria-live": "polite"
    }, [
      (M(!0), k(fe, null, ke(d.value, (m) => (M(), k("div", {
        key: m.id,
        class: me(["fil-toast", `fil-toast-${m.level}`]),
        style: Xe({ "--toast-color": i[m.level] }),
        onMouseenter: (_) => c(m),
        onMouseleave: (_) => u(m)
      }, [
        p[0] || (p[0] = T("span", {
          class: "fil-toast-dot",
          "aria-hidden": "true"
        }, null, -1)),
        T("span", of, Z(m.text), 1),
        m.action ? (M(), k("button", {
          key: 0,
          type: "button",
          class: "fil-toast-action",
          onClick: Ns((_) => {
            m.action.onClick(_), r(m);
          }, ["stop"])
        }, Z(m.action.label), 9, lf)) : ee("", !0),
        T("button", {
          type: "button",
          class: "fil-toast-close",
          "aria-label": g(t)("toast_close", "Close"),
          onClick: Ns((_) => r(m), ["stop"])
        }, " × ", 8, af)
      ], 46, sf))), 128))
    ], 512));
  }
}), cf = /* @__PURE__ */ Fe(rf, [["__scopeId", "data-v-08cc58fa"]]);
let bo = null;
function uf() {
  if (bo) return;
  const e = document.createElement("div");
  document.body.appendChild(e), bo = eo(cf).use(so()), bo.mount(e);
  const t = globalThis;
  Promise.resolve().then(() => dd).then(({ toast: n }) => {
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
    function: Ba
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
  const e = Os();
  e.ensureHelpDefaultsInjected(), (t = e.value_open) == null || t.call(e, ff);
}
function Ba() {
  const e = _f();
  if (!e) {
    Ze.info("ComfyUI search field not found");
    return;
  }
  try {
    e.focus(), "select" in e && e.select();
  } catch {
  }
}
function vf(e) {
  if (!!e.extensionManager) {
    console.info("[FiL_Design_ImageMind] shortcuts registered via native commands API");
    return;
  }
  window.addEventListener("keydown", (n) => bf(n, e), !0), console.info("[FiL_Design_ImageMind] shortcuts installed (fallback keydown handler)");
}
function bf(e, t) {
  var l, i, a, c, u, r, d, f, p;
  let n = !0;
  try {
    n = !!(((c = (a = (i = (l = globalThis.app) == null ? void 0 : l.extensionManager) == null ? void 0 : i.setting) == null ? void 0 : a.get) == null ? void 0 : c.call(a, df, !0)) ?? !0);
  } catch {
  }
  if (!n) return;
  const s = e.target, o = gf(s);
  if (e.key === "Escape") {
    try {
      const m = Os();
      (u = m.value_close) == null || u.call(m);
    } catch {
    }
    o && ((r = s.blur) == null || r.call(s)), (d = e.preventDefault) == null || d.call(e);
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
        const m = t.canvas, _ = (m == null ? void 0 : m.selected_nodes) ?? {}, F = Object.values(_).filter(Boolean);
        if (F.length === 1) {
          const w = ((f = F[0]) == null ? void 0 : f.comfyClass) ?? "default", x = Os();
          x.ensureHelpDefaultsInjected(), (p = x.value_open) == null || p.call(x, w);
        } else
          Ze.info("Select exactly one FiL_Design_ImageMind node, then press ?");
      }
      e.preventDefault();
      return;
    }
    e.key === "/" && !e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey && (Ba(), e.preventDefault());
  }
}
function yf(e) {
  vf(e);
}
let ai = !1;
function wf() {
  ai || typeof window > "u" || (ai = !0, window.addEventListener(
    "wheel",
    (e) => {
      if (e.ctrlKey || e.metaKey) return;
      if (Ta(e.target, e.deltaX, e.deltaY)) {
        e.stopImmediatePropagation();
        return;
      }
      if (!(e.target instanceof HTMLCanvasElement)) return;
      const t = id(e.clientX, e.clientY, e.deltaX, e.deltaY);
      if (!t) return;
      e.preventDefault(), e.stopImmediatePropagation();
      const n = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? t.clientHeight : 1;
      t.scrollBy({ left: e.deltaX * n, top: e.deltaY * n });
    },
    { capture: !0, passive: !1 }
  ), console.info("[FiL_Design_ImageMind] global scroll guard installed"));
}
const xf = 3e5, Sf = ["ollama", "lmstudio", "openai", "google", "groq", "openrouter", "cloudflare"], zn = Sf, ll = /* @__PURE__ */ sl("fil/providers", () => {
  const e = /* @__PURE__ */ oe({}), t = /* @__PURE__ */ oe({}), n = /* @__PURE__ */ oe({}), s = /* @__PURE__ */ oe({}), o = /* @__PURE__ */ oe(null), l = Y(() => Object.fromEntries(
    Object.entries(e.value).filter(([, w]) => (w == null ? void 0 : w.configured) || (w == null ? void 0 : w.account_id) || (w == null ? void 0 : w.base_url))
  ));
  async function i() {
    try {
      const w = await Qt.loadAccounts();
      e.value = w.accounts || {}, o.value = null;
    } catch (w) {
      o.value = w instanceof Error ? w.message : String(w);
    }
  }
  async function a(w, x) {
    try {
      const I = await Qt.saveAccounts({ [w]: x });
      e.value = I.accounts || {}, o.value = null, r(w, !0);
    } catch (I) {
      throw o.value = I instanceof Error ? I.message : String(I), I;
    }
  }
  async function c(w) {
    const x = await Qt.saveAccounts({
      [w]: { delete: !0 }
    });
    e.value = x.accounts || {};
  }
  async function u(w) {
    await a(w, {});
    try {
      await c(w);
    } catch (x) {
      o.value = x instanceof Error ? x.message : String(x);
    }
  }
  async function r(w, x = !1) {
    const I = t.value[w];
    if (I && !x && !I.error && I.cachedAt > 0 && Date.now() - I.cachedAt < xf)
      return I.list;
    I ? I.loading = !0 : t.value[w] = { list: [], visionModels: [], cachedAt: 0, loading: !0 };
    try {
      const b = await Qt.loadModels(w, x), S = b.models || [];
      return t.value[w] = {
        list: S,
        visionModels: b.vision_models || [],
        cachedAt: Date.now(),
        loading: !1
      }, b.status && b.status !== "available" && (t.value[w].error = b.message || b.status), S;
    } catch (b) {
      const S = b instanceof Error ? b.message : String(b);
      throw t.value[w] = {
        list: [],
        visionModels: [],
        cachedAt: 0,
        loading: !1,
        error: S
      }, o.value = S, b;
    }
  }
  function d(w) {
    const x = t.value[w];
    if (!(x != null && x.cachedAt)) return null;
    const I = Date.now() - x.cachedAt, b = Math.floor(I / 1e3);
    return b < 60 ? `${b}s` : b < 3600 ? `${Math.floor(b / 60)}m` : `${Math.floor(b / 3600)}h`;
  }
  async function f(w, x = "") {
    try {
      const I = await Qt.probe(w, x);
      return n.value[w] = I, I;
    } catch (I) {
      o.value = I instanceof Error ? I.message : String(I);
      return;
    }
  }
  async function p() {
    try {
      const w = await Qt.listProviders();
      s.value = w.providers || {};
    } catch {
    }
  }
  function m(w) {
    var x;
    return ((x = t.value[w]) == null ? void 0 : x.list) ?? [];
  }
  function _(w) {
    var x;
    return ((x = t.value[w]) == null ? void 0 : x.visionModels) ?? [];
  }
  function F(w) {
    var x;
    return !!((x = t.value[w]) != null && x.loading);
  }
  return {
    accounts: e,
    modelsByProvider: t,
    probeState: n,
    displayNames: s,
    lastError: o,
    configuredProviders: l,
    PROVIDER_LIST: zn,
    loadAccounts: i,
    saveAccount: a,
    deleteAccount: u,
    deleteAccountRaw: c,
    loadModels: r,
    probe: f,
    loadDisplayNames: p,
    modelsFor: m,
    visionModelsFor: _,
    isLoading: F,
    cachedAgeLabel: d
  };
}), Cf = ["title", "disabled", "aria-disabled"], Ff = {
  key: 0,
  class: "fil-w-btn-spinner"
}, Mf = ["innerHTML"], Lf = { key: 2 }, If = /* @__PURE__ */ xe({
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
    const n = e, s = Y(() => n.icon ? Pa(n.icon) : ""), o = t, l = Y(() => [
      "fil-w-btn",
      n.variant === "accent" && "fil-w-btn-accent",
      n.variant === "danger" && "fil-w-btn-danger",
      n.variant === "icon" && "fil-w-btn-icon",
      n.variant === "full" && "fil-w-btn-full",
      n.variant === "sm" && "fil-w-btn-sm",
      n.flashing && "is-flashing",
      n.loading && "is-loading"
    ]), i = Y(() => n.disabled || n.loading);
    function a(c) {
      i.value || o("click", c);
    }
    return (c, u) => (M(), k("button", {
      class: me(l.value),
      title: e.title,
      disabled: i.value,
      "aria-disabled": i.value || void 0,
      onClick: a
    }, [
      e.loading ? (M(), k("span", Ff)) : ee("", !0),
      e.icon && !e.loading ? (M(), k("span", {
        key: 1,
        class: "fil-w-btn-glyph",
        innerHTML: s.value
      }, null, 8, Mf)) : ee("", !0),
      e.label ? (M(), k("span", Lf, Z(e.loading ? "" : e.label), 1)) : ee("", !0)
    ], 10, Cf));
  }
}), Je = /* @__PURE__ */ Fe(If, [["__scopeId", "data-v-1c6537e0"]]), $s = {
  ollama: "Ollama",
  lmstudio: "LM Studio",
  openai: "OpenAI",
  groq: "Groq",
  google: "Google AI",
  openrouter: "OpenRouter",
  cloudflare: "Cloudflare"
}, il = {
  ollama: "provider-ollama",
  lmstudio: "provider-lmstudio",
  openai: "provider-openai",
  groq: "provider-groq",
  google: "provider-google",
  openrouter: "provider-openrouter",
  cloudflare: "provider-cloudflare"
}, kf = { class: "fil-pm-root" }, Af = ["onClick"], Df = { class: "fil-pm-icon" }, Ef = { class: "fil-pm-name" }, Tf = {
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
}, zf = {
  key: 1,
  class: "fil-pm-err"
}, Gf = {
  key: 2,
  class: "fil-pm-models"
}, Kf = {
  key: 0,
  class: "fil-pm-vision-badge",
  title: "Vision-capable"
}, qf = {
  key: 3,
  class: "fil-pm-err fil-pm-global-err"
}, Xf = /* @__PURE__ */ xe({
  __name: "ProviderManager",
  setup(e) {
    const t = ll(), n = /* @__PURE__ */ oe({}), s = /* @__PURE__ */ oe({}), o = /* @__PURE__ */ oe({}), l = /* @__PURE__ */ oe({}), i = /* @__PURE__ */ oe({});
    cn(async () => {
      await Promise.all([t.loadAccounts(), t.loadDisplayNames()]);
      for (const b of zn) {
        const S = t.accounts[b];
        n.value[b] = {
          // Stored keys are never echoed back by GET /fil_design_imagemind/auth (write-only
          // by the security contract) — the field always starts empty and the
          // `configured` flag drives the "a key is saved" UI state instead.
          key: "",
          base_url: (S == null ? void 0 : S.base_url) ?? "",
          account_id: (S == null ? void 0 : S.account_id) ?? ""
        };
      }
      for (const b of zn) {
        const S = t.accounts[b];
        (S != null && S.configured || S != null && S.local || S != null && S.base_url) && w(b);
      }
    });
    const a = $s, c = il;
    function u(b) {
      return { "fil-pm-has-val": b.length > 0 };
    }
    function r(b) {
      return b === "cloudflare";
    }
    function d(b) {
      var R;
      const S = t.accounts[b], L = t.modelsByProvider[b], A = ((L == null ? void 0 : L.list.length) ?? 0) > 0 && !(L != null && L.error);
      return ((R = t.probeState[b]) == null ? void 0 : R.status) === "available" || o.value[b] || A ? "connected" : S != null && S.configured || S != null && S.local || S != null && S.base_url ? "configured" : "off";
    }
    const f = {
      connected: "Connected",
      configured: "Configured",
      off: "Not connected"
    };
    function p(b) {
      return d(b) === "off" && !i.value[b];
    }
    function m(b) {
      d(b) === "off" && (i.value[b] = !i.value[b]);
    }
    async function _(b) {
      const S = n.value[b];
      await t.saveAccount(b, {
        key: S.key || null,
        base_url: S.base_url || null,
        account_id: S.account_id || null
      }), S.key = "";
    }
    async function F(b) {
      n.value[b] = { key: "", base_url: "", account_id: "" }, await t.deleteAccount(b);
    }
    async function w(b) {
      s.value[b] = !0, o.value[b] = !1;
      try {
        const S = await t.probe(b, "");
        o.value[b] = (S == null ? void 0 : S.status) === "available";
      } finally {
        s.value[b] = !1;
      }
    }
    async function x(b) {
      l.value[b] = !0;
      try {
        await t.loadModels(b, !0);
      } finally {
        l.value[b] = !1;
      }
    }
    const I = (b) => {
      const S = n.value[b], L = t.accounts[b];
      return S.key !== "" ? !0 : S.base_url !== ((L == null ? void 0 : L.base_url) ?? "") || S.account_id !== ((L == null ? void 0 : L.account_id) ?? "");
    };
    return (b, S) => (M(), k("div", kf, [
      (M(!0), k(fe, null, ke(g(zn), (L) => {
        var A, R, E, G, X, U;
        return M(), k("div", {
          key: L,
          class: me(["fil-pm-card", { "fil-pm-card--collapsed": p(L) }])
        }, [
          T("div", {
            class: me(["fil-pm-header", { "fil-pm-header--clickable": d(L) === "off" }]),
            onClick: (j) => m(L)
          }, [
            T("span", Df, [
              q(Tt, {
                name: g(c)[L],
                size: 20
              }, null, 8, ["name"])
            ]),
            T("span", Ef, Z(g(a)[L]), 1),
            g(t).displayNames[L] ? (M(), k("span", Tf, "(" + Z(g(t).displayNames[L]) + ")", 1)) : ee("", !0),
            T("span", {
              class: me(["fil-pm-status", `fil-pm-status--${d(L)}`]),
              title: f[d(L)]
            }, [
              S[0] || (S[0] = T("span", { class: "fil-pm-dot" }, null, -1)),
              ks(" " + Z(f[d(L)]), 1)
            ], 10, Rf),
            d(L) === "off" ? (M(), k("span", {
              key: 1,
              class: me(["fil-pm-chevron", { "fil-pm-chevron--open": i.value[L] }])
            }, [
              q(Tt, {
                name: "chevronRight",
                size: 12
              })
            ], 2)) : ee("", !0)
          ], 10, Af),
          p(L) ? ee("", !0) : (M(), k(fe, { key: 0 }, [
            T("div", Pf, [
              T("label", Nf, [
                S[1] || (S[1] = T("span", { class: "fil-pm-field-label" }, "API Key", -1)),
                Ge(T("input", {
                  "onUpdate:modelValue": (j) => n.value[L].key = j,
                  type: "password",
                  class: me(["fil-pm-input", u(n.value[L].key)]),
                  placeholder: (A = g(t).accounts[L]) != null && A.configured ? "•••••••• (saved)" : "sk-...",
                  onKeydown: vs((j) => _(L), ["enter"])
                }, null, 42, Of), [
                  [wt, n.value[L].key]
                ])
              ]),
              T("label", $f, [
                S[2] || (S[2] = T("span", { class: "fil-pm-field-label" }, "Base URL", -1)),
                Ge(T("input", {
                  "onUpdate:modelValue": (j) => n.value[L].base_url = j,
                  type: "text",
                  class: me(["fil-pm-input", u(n.value[L].base_url)]),
                  placeholder: "http://localhost:11434",
                  onKeydown: vs((j) => _(L), ["enter"])
                }, null, 42, Vf), [
                  [wt, n.value[L].base_url]
                ])
              ]),
              r(L) ? (M(), k("label", Bf, [
                S[3] || (S[3] = T("span", { class: "fil-pm-field-label" }, "Account ID", -1)),
                Ge(T("input", {
                  "onUpdate:modelValue": (j) => n.value[L].account_id = j,
                  type: "text",
                  class: me(["fil-pm-input", u(n.value[L].account_id)]),
                  onKeydown: vs((j) => _(L), ["enter"])
                }, null, 42, Hf), [
                  [wt, n.value[L].account_id]
                ])
              ])) : ee("", !0)
            ]),
            T("div", Uf, [
              q(Je, {
                variant: "accent",
                label: I(L) ? "Save" : "Saved",
                disabled: !I(L),
                onClick: (j) => _(L)
              }, null, 8, ["label", "disabled", "onClick"]),
              !I(L) && g(t).cachedAgeLabel(L) ? (M(), k("span", jf, Z(g(t).cachedAgeLabel(L)) + " ago ", 1)) : ee("", !0),
              q(Je, {
                variant: "danger",
                label: "Delete",
                disabled: !((R = g(t).accounts[L]) != null && R.configured) && !((E = g(t).accounts[L]) != null && E.base_url),
                onClick: (j) => F(L)
              }, null, 8, ["disabled", "onClick"]),
              q(Je, {
                variant: "standard",
                label: "Probe",
                loading: s.value[L],
                flashing: o.value[L],
                disabled: !((G = g(t).accounts[L]) != null && G.local) && !((X = g(t).accounts[L]) != null && X.configured) && !n.value[L].key && !n.value[L].base_url,
                onClick: (j) => w(L)
              }, null, 8, ["loading", "flashing", "disabled", "onClick"]),
              q(Je, {
                variant: "standard",
                label: "Load Models",
                loading: l.value[L],
                onClick: (j) => x(L)
              }, null, 8, ["loading", "onClick"])
            ]),
            (U = g(t).modelsByProvider[L]) != null && U.error ? (M(), k("div", Wf, Z(g(t).modelsByProvider[L].error), 1)) : ee("", !0),
            g(t).probeState[L] && g(t).probeState[L].status !== "available" ? (M(), k("div", zf, Z(g(t).probeState[L].message), 1)) : ee("", !0),
            g(t).modelsFor(L).length > 0 ? (M(), k("div", Gf, [
              (M(!0), k(fe, null, ke(g(t).modelsFor(L), (j) => (M(), k("span", {
                class: "fil-pm-model-tag",
                key: j
              }, [
                ks(Z(j) + " ", 1),
                g(t).visionModelsFor(L).includes(j) ? (M(), k("span", Kf, "👁")) : ee("", !0)
              ]))), 128))
            ])) : ee("", !0),
            g(t).lastError ? (M(), k("div", qf, Z(g(t).lastError), 1)) : ee("", !0)
          ], 64))
        ], 2);
      }), 128))
    ]));
  }
}), Yf = /* @__PURE__ */ Fe(Xf, [["__scopeId", "data-v-ae1b468d"]]);
let kn = null;
function Jf(e) {
  kn && (kn.unmount(), kn = null), kn = eo(Yf).use(so()), kn.mount(e), console.info("[FiL_Design_ImageMind] provider manager mounted");
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
], Ha = {
  Default: "default",
  Cyberpunk: "cyberpunk",
  Fallout: "fallout",
  Travelmate: "travelmate"
};
function op(e) {
  const t = Ha[String(e)] ?? "default";
  La(t);
  const n = globalThis.app;
  n && Xu(n);
}
const lp = [
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
function ip(e) {
  const t = e("FiL_Design_ImageMind.Theme", "Default");
  La(Ha[t] ?? "default");
}
function Ua(e) {
  bs(`${Lt}/log_level`, { level: String(e) }).catch(() => {
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
    onChange: Ua
  }
];
function rp(e) {
  const t = e("FiL_Design_ImageMind.Logging.Level", "WARNING");
  Ua(t);
}
const cp = [
  ...Zf,
  ...ep,
  ...tp,
  ...np,
  ...sp,
  ...lp,
  ...ap
];
wf();
function up(e) {
  var t, n;
  try {
    const s = globalThis.app, o = ((t = s == null ? void 0 : s.graph) == null ? void 0 : t._nodes) ?? [];
    for (const l of o) {
      const i = l;
      if (i.comfyClass === "FiLOpticScanner") {
        const a = (n = i.inputs) == null ? void 0 : n.find((c) => c.name === "config");
        (!a || a.link == null) && console.warn(`${an} Optic Scanner #${i.id} has no Provider Loader wired to its "config" slot — execution will fail.`);
      }
    }
  } catch (s) {
    console.warn(`${an} preflight fallback:`, s);
  }
  return e;
}
function dp(e) {
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
        () => ip((n, s) => Bo(n, s, e)),
        () => rp((n, s) => Bo(n, s, e))
      ];
      for (const n of t)
        try {
          n();
        } catch (s) {
          console.warn(`${an} installer ${n.name || "anonymous"} failed:`, s);
        }
    },
    getCustomWidgets() {
      return { fil_compare: { serialize: !1 } };
    },
    async beforeRegisterNodeDef(t, n) {
      const s = Ra[n.name];
      if (s)
        try {
          await s.register(t, n);
        } catch (o) {
          console.warn(`${an} failed to register "${n.name}":`, o);
        }
    },
    async graphToPrompt(t) {
      return up(t);
    }
  };
}
async function fp() {
  if (typeof fetch > "u") return;
  let e;
  try {
    e = await fetch(`${Lt}/node_contracts`);
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
  const n = new Set(Object.keys(t.node_ids ?? {})), s = new Set(Object.keys(Ra));
  for (const o of n)
    s.has(o) || console.warn(`${an} server expects "${o}" but local JS does not register it`);
  for (const o of s)
    n.has(o) || console.warn(`${an} JS registers "${o}" but server does not expose a contract`);
}
Vu();
nd();
fp().catch((e) => {
  console.warn("[FiL_Design_ImageMind] contract self-check failed:", e);
});
const ja = dp(ui);
ui.registerExtension(ja);
console.info(`[FiL_Design_ImageMind] extension registered as "${ja.name}"`);
const pp = ["aria-checked", "disabled", "title", "onClick"], mp = /* @__PURE__ */ xe({
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
    function l(i) {
      n.disabled || i !== n.modelValue && s("update:modelValue", i);
    }
    return (i, a) => (M(), k("div", {
      class: "fil-w-chips",
      style: Xe(o.value),
      role: "radiogroup"
    }, [
      (M(!0), k(fe, null, ke(e.options, (c) => (M(), k("button", {
        key: c,
        type: "button",
        role: "radio",
        class: me(["fil-w-chip", { active: c === e.modelValue, disabled: e.disabled }]),
        "aria-checked": c === e.modelValue,
        disabled: e.disabled,
        title: c,
        onClick: (u) => l(c)
      }, Z(c), 11, pp))), 128))
    ], 4));
  }
}), ri = /* @__PURE__ */ Fe(mp, [["__scopeId", "data-v-3c07d909"]]), hp = { class: "fil-w-chiplist" }, gp = ["placeholder", "aria-label", "disabled"], _p = {
  class: "fil-w-chip-scroll",
  role: "radiogroup"
}, vp = ["aria-checked", "disabled", "title", "onClick"], bp = {
  key: 0,
  class: "fil-w-chip-empty"
}, yp = /* @__PURE__ */ xe({
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
    const n = e, s = t, o = /* @__PURE__ */ oe(""), l = Y(() => {
      const a = o.value.trim().toLowerCase();
      return a ? n.options.filter((c) => c.toLowerCase().includes(a)) : n.options;
    });
    function i(a) {
      n.disabled || a !== n.modelValue && s("update:modelValue", a);
    }
    return (a, c) => (M(), k("div", hp, [
      e.searchable ? Ge((M(), k("input", {
        key: 0,
        "onUpdate:modelValue": c[0] || (c[0] = (u) => o.value = u),
        class: "fil-w-search",
        type: "search",
        placeholder: e.placeholder,
        "aria-label": e.placeholder,
        disabled: e.disabled,
        spellcheck: "false"
      }, null, 8, gp)), [
        [wt, o.value]
      ]) : ee("", !0),
      T("div", _p, [
        (M(!0), k(fe, null, ke(l.value, (u) => (M(), k("button", {
          key: u,
          type: "button",
          role: "radio",
          class: me(["fil-w-chip", { active: u === e.modelValue, disabled: e.disabled }]),
          "aria-checked": u === e.modelValue,
          disabled: e.disabled,
          title: u,
          onClick: (r) => i(u)
        }, Z(u), 11, vp))), 128)),
        l.value.length === 0 ? (M(), k("div", bp, Z(o.value ? "No matches" : "Empty"), 1)) : ee("", !0)
      ])
    ]));
  }
}), wp = /* @__PURE__ */ Fe(yp, [["__scopeId", "data-v-5ccf2e00"]]), xp = ["title"], Sp = {
  key: 0,
  class: "fil-combo-label"
}, Cp = ["disabled", "aria-expanded"], Fp = { class: "fil-combo-trigger-label" }, Mp = {
  key: 1,
  class: "fil-combo-badge"
}, Lp = ["placeholder"], Ip = { class: "fil-combo-list" }, kp = ["aria-selected", "onMouseenter", "onClick"], Ap = { class: "fil-combo-option-label" }, Dp = {
  key: 1,
  class: "fil-combo-badge"
}, Ep = {
  key: 0,
  class: "fil-combo-empty"
}, Tp = /* @__PURE__ */ xe({
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
    const n = e, s = t, o = /* @__PURE__ */ oe(!1), l = /* @__PURE__ */ oe(""), i = /* @__PURE__ */ oe(0), a = /* @__PURE__ */ oe(null), c = /* @__PURE__ */ oe(null), u = /* @__PURE__ */ oe(null), r = /* @__PURE__ */ oe({}), d = Y(() => n.options.find((A) => A.value === n.modelValue)), f = Y(() => {
      if (!n.searchable || !l.value.trim()) return n.options;
      const A = l.value.trim().toLowerCase();
      return n.options.filter((R) => (R.label ?? R.value).toLowerCase().includes(A));
    });
    function p(A) {
      return A.label ?? A.value;
    }
    function m() {
      const A = a.value;
      if (!A) return;
      const R = A.getBoundingClientRect(), E = window.innerHeight, G = 260, X = E - R.bottom, U = X < G && R.top > X;
      r.value = {
        left: `${R.left}px`,
        width: `${R.width}px`,
        ...U ? { bottom: `${E - R.top + 4}px` } : { top: `${R.bottom + 4}px` }
      };
    }
    function _(A) {
      var E;
      const R = A.target;
      R instanceof Element && ((E = c.value) != null && E.contains(R)) || w();
    }
    function F() {
      n.disabled || (o.value = !0, l.value = "", i.value = Math.max(
        0,
        f.value.findIndex((A) => A.value === n.modelValue)
      ), xn(() => {
        var A;
        m(), n.searchable && ((A = u.value) == null || A.focus()), window.addEventListener("resize", _), window.addEventListener("scroll", _, !0), document.addEventListener("mousedown", x, !0);
      }));
    }
    function w() {
      o.value && (o.value = !1, window.removeEventListener("resize", _), window.removeEventListener("scroll", _, !0), document.removeEventListener("mousedown", x, !0));
    }
    function x(A) {
      var E, G;
      const R = A.target;
      (E = a.value) != null && E.contains(R) || (G = c.value) != null && G.contains(R) || w();
    }
    function I() {
      o.value ? w() : F();
    }
    function b(A) {
      var R;
      s("update:modelValue", A.value), w(), (R = a.value) == null || R.focus();
    }
    function S(A) {
      if (!n.disabled) {
        if (!o.value && (A.key === "ArrowDown" || A.key === "ArrowUp" || A.key === "Enter" || A.key === " ")) {
          A.preventDefault(), F();
          return;
        }
        o.value && L(A);
      }
    }
    function L(A) {
      var E;
      const R = f.value;
      if (A.key === "ArrowDown")
        A.preventDefault(), i.value = R.length ? (i.value + 1) % R.length : 0;
      else if (A.key === "ArrowUp")
        A.preventDefault(), i.value = R.length ? (i.value - 1 + R.length) % R.length : 0;
      else if (A.key === "Enter") {
        A.preventDefault();
        const G = R[i.value];
        G && b(G);
      } else A.key === "Escape" && (A.preventDefault(), w(), (E = a.value) == null || E.focus());
    }
    return Ee(l, () => {
      i.value = 0;
    }), Sn(() => {
      window.removeEventListener("resize", _), window.removeEventListener("scroll", _, !0), document.removeEventListener("mousedown", x, !0);
    }), (A, R) => {
      var E, G;
      return M(), k("div", {
        class: "fil-combo",
        title: e.title
      }, [
        e.label ? (M(), k("label", Sp, Z(e.label), 1)) : ee("", !0),
        T("button", {
          ref_key: "triggerRef",
          ref: a,
          type: "button",
          class: me(["fil-combo-trigger", { open: o.value, disabled: e.disabled }]),
          disabled: e.disabled,
          "aria-expanded": o.value,
          "aria-haspopup": "listbox",
          onClick: I,
          onKeydown: S
        }, [
          (E = d.value) != null && E.icon ? (M(), Ie(Tt, {
            key: 0,
            name: d.value.icon,
            size: 16
          }, null, 8, ["name"])) : ee("", !0),
          T("span", Fp, Z(d.value ? p(d.value) : e.modelValue), 1),
          (G = d.value) != null && G.badge ? (M(), k("span", Mp, Z(d.value.badge), 1)) : ee("", !0),
          R[1] || (R[1] = T("span", { class: "fil-combo-chevron" }, "▾", -1))
        ], 42, Cp),
        (M(), Ie(Ki, { to: "body" }, [
          o.value ? (M(), k("div", {
            key: 0,
            ref_key: "panelRef",
            ref: c,
            class: "fil-combo-panel",
            style: Xe(r.value),
            role: "listbox",
            onKeydown: L
          }, [
            e.searchable ? Ge((M(), k("input", {
              key: 0,
              ref_key: "searchRef",
              ref: u,
              "onUpdate:modelValue": R[0] || (R[0] = (X) => l.value = X),
              type: "search",
              class: "fil-combo-search",
              placeholder: e.placeholder,
              spellcheck: "false"
            }, null, 8, Lp)), [
              [wt, l.value]
            ]) : ee("", !0),
            T("div", Ip, [
              (M(!0), k(fe, null, ke(f.value, (X, U) => (M(), k("button", {
                key: X.value,
                type: "button",
                class: me(["fil-combo-option", { active: U === i.value, selected: X.value === e.modelValue }]),
                role: "option",
                "aria-selected": X.value === e.modelValue,
                onMouseenter: (j) => i.value = U,
                onClick: (j) => b(X)
              }, [
                X.icon ? (M(), Ie(Tt, {
                  key: 0,
                  name: X.icon,
                  size: 16
                }, null, 8, ["name"])) : ee("", !0),
                T("span", Ap, Z(p(X)), 1),
                X.badge ? (M(), k("span", Dp, Z(X.badge), 1)) : ee("", !0)
              ], 42, kp))), 128)),
              f.value.length === 0 ? (M(), k("div", Ep, "No matches")) : ee("", !0)
            ])
          ], 36)) : ee("", !0)
        ]))
      ], 8, xp);
    };
  }
}), Rp = /* @__PURE__ */ Fe(Tp, [["__scopeId", "data-v-73f94a33"]]), Pp = ["data-ok", "data-err"], Np = /* @__PURE__ */ xe({
  __name: "FilInfo",
  props: {
    text: {},
    ok: { type: Boolean },
    err: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (M(), k("div", {
      class: "fil-w-info",
      "data-ok": e.ok || void 0,
      "data-err": e.err || void 0
    }, Z(e.text), 9, Pp));
  }
}), ys = /* @__PURE__ */ Fe(Np, [["__scopeId", "data-v-851660c1"]]), Op = ["title"], $p = {
  key: 0,
  class: "fil-w-numfield-label"
}, Vp = { class: "fil-w-num-wrap" }, Bp = ["disabled", "min", "max", "step", "aria-label"], Hp = { class: "fil-w-num-step" }, Up = ["disabled"], jp = ["disabled"], Wp = /* @__PURE__ */ xe({
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
    const n = e, s = t, o = Y(() => n.modelValue), l = /* @__PURE__ */ oe(c(o.value));
    Ee(o, (_) => {
      i.value || (l.value = c(_));
    });
    let i = /* @__PURE__ */ oe(!1), a = null;
    function c(_) {
      return Number.isFinite(_) ? String(_) : "";
    }
    function u(_) {
      const F = (_ || "").trim();
      if (F === "" || !/^[0-9+\-*/(). ]+$/.test(F.replace(/\^/g, "**"))) return null;
      try {
        const w = new Function(`"use strict"; return (${F});`), x = Number(w());
        return Number.isFinite(x) ? x : null;
      } catch {
        return null;
      }
    }
    function r(_) {
      if (_ === null) {
        l.value = c(o.value);
        return;
      }
      let F = _;
      n.min != null && F < n.min && (F = n.min), n.max != null && F > n.max && (F = n.max), F !== o.value && s("update:modelValue", F), l.value = c(F);
    }
    function d() {
      i.value = !0, a = l.value;
    }
    function f() {
      i.value = !1, r(u(l.value)), a = null;
    }
    function p(_) {
      _.key === "Enter" ? (_.preventDefault(), r(u(l.value)), _.target.blur()) : _.key === "Escape" ? (_.preventDefault(), a !== null && (l.value = a), _.target.blur()) : _.key === "ArrowUp" ? (_.preventDefault(), m(_.shiftKey ? 10 : 1)) : _.key === "ArrowDown" && (_.preventDefault(), m(_.shiftKey ? -10 : -1));
    }
    function m(_) {
      let F = o.value + _ * (n.step || 1);
      n.min != null && F < n.min && (F = n.min), n.max != null && F > n.max && (F = n.max), s("update:modelValue", F), l.value = c(F);
    }
    return (_, F) => (M(), k("div", {
      class: me(["fil-w-numfield", { "no-label": !e.label }]),
      title: e.title
    }, [
      e.label ? (M(), k("label", $p, Z(e.label), 1)) : ee("", !0),
      T("div", Vp, [
        Ge(T("input", {
          "onUpdate:modelValue": F[0] || (F[0] = (w) => l.value = w),
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
          [wt, l.value]
        ]),
        T("div", Hp, [
          T("button", {
            type: "button",
            class: "fil-w-num-btn",
            tabindex: "-1",
            "aria-label": "Increment",
            disabled: e.disabled || e.max != null && e.modelValue >= e.max,
            onMousedown: F[1] || (F[1] = Ns(() => {
            }, ["prevent"])),
            onClick: F[2] || (F[2] = (w) => m(w.shiftKey ? 10 : 1))
          }, "▲", 40, Up),
          T("button", {
            type: "button",
            class: "fil-w-num-btn",
            tabindex: "-1",
            "aria-label": "Decrement",
            disabled: e.disabled || e.min != null && e.modelValue <= e.min,
            onMousedown: F[3] || (F[3] = Ns(() => {
            }, ["prevent"])),
            onClick: F[4] || (F[4] = (w) => m(w.shiftKey ? -10 : -1))
          }, "▼", 40, jp)
        ])
      ])
    ], 10, Op));
  }
}), sn = /* @__PURE__ */ Fe(Wp, [["__scopeId", "data-v-5fe162a0"]]), zp = ["aria-expanded", "disabled"], Gp = { class: "fil-w-section-arrow" }, Kp = { class: "fil-w-section-title" }, qp = /* @__PURE__ */ xe({
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
    const l = Y(() => n.modelValue ? "▶" : "▼");
    return (i, a) => (M(), k("button", {
      type: "button",
      class: me(["fil-w-section", { collapsible: e.collapsible, collapsed: e.modelValue }]),
      "aria-expanded": !e.modelValue,
      disabled: !e.collapsible,
      onClick: o
    }, [
      T("span", Gp, Z(l.value), 1),
      T("span", Kp, Z(e.title), 1)
    ], 10, zp));
  }
}), wn = /* @__PURE__ */ Fe(qp, [["__scopeId", "data-v-686d0388"]]), Xp = ["title"], Yp = {
  key: 0,
  class: "fil-w-segmented-label"
}, Jp = ["aria-label"], Qp = ["aria-pressed", "disabled", "tabindex", "onClick", "onKeydown"], Zp = /* @__PURE__ */ xe({
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
    const n = e, s = t, o = Y(() => n.modelValue), l = /* @__PURE__ */ oe([]);
    function i(u) {
      var r;
      return ((r = n.optionLabels) == null ? void 0 : r[u]) ?? u;
    }
    function a(u) {
      n.disabled || u !== o.value && s("update:modelValue", u);
    }
    function c(u, r) {
      var f, p;
      const d = n.options;
      if (u.key === "ArrowRight" || u.key === "ArrowDown") {
        u.preventDefault();
        const m = d[(r + 1) % d.length];
        a(m), (f = l.value[(r + 1) % d.length]) == null || f.focus();
      } else if (u.key === "ArrowLeft" || u.key === "ArrowUp") {
        u.preventDefault();
        const m = d[(r - 1 + d.length) % d.length];
        a(m), (p = l.value[(r - 1 + d.length) % d.length]) == null || p.focus();
      }
    }
    return (u, r) => (M(), k("div", {
      class: "fil-w-segmented",
      title: e.title
    }, [
      e.label ? (M(), k("label", Yp, Z(e.label), 1)) : ee("", !0),
      T("div", {
        class: me(["fil-w-pill", { disabled: e.disabled }]),
        role: "group",
        "aria-label": e.label
      }, [
        (M(!0), k(fe, null, ke(e.options, (d, f) => (M(), k("button", {
          key: d,
          ref_for: !0,
          ref: (p) => {
            p && (l.value[f] = p);
          },
          type: "button",
          class: me(["fil-w-seg", { active: d === o.value }]),
          "aria-pressed": d === o.value,
          disabled: e.disabled,
          tabindex: d === o.value ? 0 : -1,
          onClick: (p) => a(d),
          onKeydown: (p) => c(p, f)
        }, Z(i(d)), 43, Qp))), 128))
      ], 10, Jp)
    ], 8, Xp));
  }
}), lt = /* @__PURE__ */ Fe(Zp, [["__scopeId", "data-v-738d9e4d"]]), em = ["title"], tm = {
  key: 0,
  class: "fil-w-select-label"
}, nm = ["disabled", "aria-label"], sm = ["value"], om = /* @__PURE__ */ xe({
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
      set: (l) => s("update:modelValue", l)
    });
    return (l, i) => (M(), k("div", {
      class: "fil-w-select",
      title: e.title
    }, [
      e.label ? (M(), k("label", tm, Z(e.label), 1)) : ee("", !0),
      Ge(T("select", {
        "onUpdate:modelValue": i[0] || (i[0] = (a) => o.value = a),
        class: "fil-w-select-input",
        disabled: e.disabled,
        "aria-label": e.label,
        onChange: i[1] || (i[1] = (a) => s("update:modelValue", a.target.value))
      }, [
        (M(!0), k(fe, null, ke(e.options, (a) => (M(), k("option", {
          key: a,
          value: a
        }, Z(a), 9, sm))), 128))
      ], 40, nm), [
        [Cu, o.value]
      ])
    ], 8, em));
  }
}), ps = /* @__PURE__ */ Fe(om, [["__scopeId", "data-v-77c303be"]]), lm = ["title"], im = {
  key: 0,
  class: "fil-w-slider-label"
}, am = { class: "fil-w-slider-row" }, rm = ["value", "min", "max", "step", "disabled", "aria-label"], cm = /* @__PURE__ */ xe({
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
    function l(a) {
      const c = Number(a.target.value);
      s("update:modelValue", c);
    }
    function i(a) {
      s("update:modelValue", a);
    }
    return (a, c) => (M(), k("div", {
      class: "fil-w-slider",
      title: e.title
    }, [
      e.label ? (M(), k("label", im, Z(e.label), 1)) : ee("", !0),
      T("div", am, [
        T("input", {
          type: "range",
          class: "fil-w-slider-range",
          value: o.value,
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label,
          onInput: l
        }, null, 40, rm),
        q(sn, {
          "model-value": o.value,
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label,
          "onUpdate:modelValue": i
        }, null, 8, ["model-value", "min", "max", "step", "disabled", "aria-label"])
      ])
    ], 8, lm));
  }
}), it = /* @__PURE__ */ Fe(cm, [["__scopeId", "data-v-785fba56"]]), um = {
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
}, hm = { class: "fil-style-picker" }, gm = { class: "fil-style-cats" }, _m = ["onClick"], vm = { class: "fil-style-grid" }, bm = ["title", "onClick"], ym = { class: "fil-style-tile-preview" }, wm = ["src"], xm = {
  key: 1,
  class: "fil-style-tile-placeholder"
}, Sm = { class: "fil-style-tile-label" }, Cm = {
  key: 0,
  class: "fil-style-empty"
}, ms = "__all__", Fm = /* @__PURE__ */ xe({
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
    const i = Y(() => {
      const f = /* @__PURE__ */ new Set(), p = [];
      for (const m of n.styles) {
        const _ = o(m);
        _ && !f.has(_) && (f.add(_), p.push(_));
      }
      return p;
    }), a = /* @__PURE__ */ oe(ms), c = /* @__PURE__ */ oe(""), u = Y(() => {
      const f = c.value.trim().toLowerCase();
      return n.styles.filter((p) => a.value !== ms && o(p) !== a.value ? !1 : f ? p.toLowerCase().includes(f) : !0);
    });
    function r(f) {
      return mm[f];
    }
    function d(f) {
      s("select", f);
    }
    return (f, p) => (M(), k("div", hm, [
      T("div", gm, [
        T("button", {
          type: "button",
          class: me(["fil-style-cat", { active: a.value === ms }]),
          onClick: p[0] || (p[0] = (m) => a.value = ms)
        }, " All ", 2),
        (M(!0), k(fe, null, ke(i.value, (m) => (M(), k("button", {
          key: m,
          type: "button",
          class: me(["fil-style-cat", { active: a.value === m }]),
          onClick: (_) => a.value = m
        }, Z(m), 11, _m))), 128))
      ]),
      Ge(T("input", {
        "onUpdate:modelValue": p[1] || (p[1] = (m) => c.value = m),
        type: "search",
        class: "fil-style-search",
        placeholder: "Search styles…",
        "aria-label": "Search styles",
        spellcheck: "false"
      }, null, 512), [
        [wt, c.value]
      ]),
      T("div", vm, [
        (M(!0), k(fe, null, ke(u.value, (m) => (M(), k("button", {
          key: m,
          type: "button",
          class: me(["fil-style-tile", { active: m === e.modelValue }]),
          title: m,
          onClick: (_) => d(m)
        }, [
          T("span", ym, [
            r(m) ? (M(), k("img", {
              key: 0,
              src: r(m),
              class: "fil-style-tile-img",
              alt: ""
            }, null, 8, wm)) : (M(), k("span", xm, Z(l(m).split(" ")[0]), 1))
          ]),
          T("span", Sm, Z(l(m)), 1)
        ], 10, bm))), 128)),
        u.value.length === 0 ? (M(), k("div", Cm, "No matches")) : ee("", !0)
      ])
    ]));
  }
}), Mm = /* @__PURE__ */ Fe(Fm, [["__scopeId", "data-v-7f1dfd99"]]), Lm = ["title"], Im = {
  key: 0,
  class: "fil-w-toggle-label"
}, km = ["aria-checked", "aria-label", "disabled"], Am = /* @__PURE__ */ xe({
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
    return (l, i) => (M(), k("div", {
      class: me(["fil-w-toggle", { bare: e.bare }]),
      title: e.title
    }, [
      e.label ? (M(), k("label", Im, Z(e.label), 1)) : ee("", !0),
      T("button", {
        type: "button",
        class: me(["fil-w-switch", { on: e.modelValue === "ON" }]),
        role: "switch",
        "aria-checked": e.modelValue === "ON",
        "aria-label": e.label,
        disabled: e.disabled,
        onClick: o
      }, [...i[0] || (i[0] = [
        T("span", { class: "fil-w-switch-thumb" }, null, -1)
      ])], 10, km)
    ], 10, Lm));
  }
}), hs = /* @__PURE__ */ Fe(Am, [["__scopeId", "data-v-d39b7896"]]), Dm = { class: "fil-seed-root" }, Em = ["readonly", "title"], Tm = { class: "fil-seed-actions" }, Rm = /* @__PURE__ */ xe({
  __name: "Seed",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Pt(), s = Y({
      get: () => t.state.nodeState.mode ?? "random",
      set: (u) => {
        t.state.nodeState.mode = u;
      }
    }), o = Y({
      get: () => Number(t.state.nodeState.seed ?? 0) || 0,
      // Write the native seed widget directly, not just nodeState — a fixed
      // seed set only via nodeState can fail to reach the queued prompt.
      set: (u) => {
        t.state.nodeState.seed = u;
        const r = t.state.node ? te(t.state.node, "seed") : null;
        r && (r.value = u);
      }
    });
    Ee(s, (u) => {
      const r = t.state.node, d = r ? te(r, "control_after_generate") : null;
      d && (d.value = u === "fixed" ? "fixed" : "randomize");
    }, { immediate: !0 }), Ee(
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
      const u = t.state.node, r = u ? te(u, "seed") : null, d = r && Number.isFinite(Number(r.value)) ? Number(r.value) : t.state.lastRunSeed;
      if (d == null || !Number.isFinite(d)) {
        Ze.warning("No last-run seed recorded yet");
        return;
      }
      o.value = d, s.value = "fixed";
    }
    function a() {
      const u = Math.floor(Math.random() * 1e9) & 2147483647;
      o.value = u, s.value = "fixed";
    }
    const c = Y({
      get: () => s.value === "fixed" ? `${o.value}` : "random",
      set: (u) => {
        const r = parseInt(String(u).replace(/[^0-9]/g, ""), 10);
        Number.isNaN(r) || (o.value = r, s.value = "fixed");
      }
    });
    return (u, r) => (M(), k("div", Dm, [
      Ge(T("input", {
        "onUpdate:modelValue": r[0] || (r[0] = (d) => c.value = d),
        type: "text",
        class: "fil-seed-display",
        readonly: s.value === "random",
        title: s.value === "fixed" ? g(n)("sd_locked", "Locked seed") : g(n)("sd_auto_random", "Auto-random"),
        "aria-label": "Seed value"
      }, null, 8, Em), [
        [wt, c.value]
      ]),
      T("div", Tm, [
        q(g(Je), {
          label: "🔀",
          variant: "standard",
          title: g(n)("sd_mode", "Random generates a new seed each run."),
          onClick: l
        }, null, 8, ["title"]),
        q(g(Je), {
          label: "♻️",
          variant: "standard",
          title: g(n)("sd_use_last", "Reuse the seed from the last executed run."),
          onClick: i
        }, null, 8, ["title"]),
        q(g(Je), {
          label: "🎲",
          variant: "accent",
          title: g(n)("sd_new_fixed", "Generate a new random fixed seed."),
          onClick: a
        }, null, 8, ["title"])
      ])
    ]));
  }
}), Pm = /* @__PURE__ */ Fe(Rm, [["__scopeId", "data-v-9971583a"]]), Nm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pm
}, Symbol.toStringTag, { value: "Module" })), Om = { class: "picker-container" }, $m = { class: "provider-tabs" }, Vm = ["onClick"], Bm = { class: "tab-label" }, Hm = {
  key: 0,
  class: "tab-badge"
}, Um = { class: "provider-status-bar" }, jm = { class: "status-info" }, Wm = { class: "provider-name" }, zm = {
  key: 0,
  class: "status-badge loading"
}, Gm = {
  key: 1,
  class: "status-badge error"
}, Km = {
  key: 2,
  class: "status-badge online"
}, qm = {
  key: 3,
  class: "age-label"
}, Xm = { class: "filter-controls" }, Ym = { class: "search-input-wrap" }, Jm = { class: "filter-segments" }, Qm = { class: "models-list-wrapper" }, Zm = {
  key: 0,
  class: "empty-state"
}, eh = {
  key: 1,
  class: "empty-state"
}, th = ["onClick"], nh = { class: "model-main" }, sh = { class: "type-icon" }, oh = ["title"], lh = { class: "model-tags" }, ih = {
  key: 0,
  class: "tag vision"
}, ah = {
  key: 1,
  class: "tag text"
}, rh = {
  key: 2,
  class: "tag local"
}, ch = {
  key: 3,
  class: "tag free"
}, uh = {
  key: 4,
  class: "tag paid"
}, dh = { class: "picker-footer" }, fh = { class: "selection-summary" }, ph = { key: 0 }, mh = {
  key: 1,
  class: "muted"
}, hh = { class: "footer-actions" }, ci = "fil_model_picker_view_mode", gh = /* @__PURE__ */ xe({
  __name: "ProviderModelPicker",
  props: {
    open: { type: Boolean, default: !1 },
    provider: { default: "ollama" },
    model: { default: "" }
  },
  emits: ["update:open", "select"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = ll(), { t: l } = Pt(), i = /* @__PURE__ */ oe(n.provider), a = /* @__PURE__ */ oe(n.model), c = /* @__PURE__ */ oe(""), u = /* @__PURE__ */ oe("all"), r = /* @__PURE__ */ oe("all"), d = /* @__PURE__ */ oe(
      localStorage.getItem(ci) || "list"
    );
    function f(O) {
      d.value = O;
      try {
        localStorage.setItem(ci, O);
      } catch {
      }
    }
    const p = ["all", "vision", "text"], m = { all: "All Types", vision: "👁 Vision", text: "📝 Text" }, _ = { all: "All Tiers", local: "💻 Local", free: "🆓 Free", paid: "💎 Paid" }, F = ["list", "grid"], w = { list: "☰ List", grid: "⊞ Tiles" }, x = Y(
      () => i.value === "ollama" || i.value === "lmstudio" ? ["all", "local"] : ["all", "free", "paid"]
    );
    Ee(
      () => n.open,
      (O) => {
        O && (i.value = n.provider || "ollama", a.value = n.model || "", c.value = "", u.value = "all", r.value = "all", I());
      }
    );
    async function I(O = !1) {
      try {
        await o.loadModels(i.value, O);
      } catch (C) {
        Ze.error(C instanceof Error ? C.message : String(C));
      }
    }
    function b(O) {
      i.value = O, c.value = "", r.value = "all";
      const C = o.modelsFor(O);
      C.length > 0 ? a.value = C[0] : a.value = "", I();
    }
    const S = Y(() => o.modelsFor(i.value)), L = Y(() => o.visionModelsFor(i.value)), A = Y(() => o.isLoading(i.value)), R = Y(() => o.probeState[i.value]), E = Y(() => o.cachedAgeLabel(i.value));
    function G(O, C) {
      return C === "ollama" || C === "lmstudio" ? "local" : O.toLowerCase().includes(":free") ? "free" : "paid";
    }
    function X(O) {
      return L.value.includes(O);
    }
    const U = Y(() => {
      let O = S.value;
      const C = c.value.trim().toLowerCase(), v = i.value;
      return C && (O = O.filter((P) => P.toLowerCase().includes(C))), u.value === "vision" ? O = O.filter((P) => X(P)) : u.value === "text" && (O = O.filter((P) => !X(P))), r.value !== "all" && (O = O.filter((P) => G(P, v) === r.value)), O;
    });
    function j(O) {
      a.value = O;
    }
    function N() {
      a.value && (s("select", { provider: i.value, model: a.value }), s("update:open", !1));
    }
    function $() {
      s("update:open", !1);
    }
    return (O, C) => (M(), Ie(ol, {
      open: e.open,
      width: "860px",
      title: "🔌 Choose Provider & Model",
      "onUpdate:open": C[6] || (C[6] = (v) => s("update:open", v)),
      onClose: $
    }, {
      default: ss(() => [
        T("div", Om, [
          T("div", $m, [
            (M(!0), k(fe, null, ke(g(zn), (v) => (M(), k("button", {
              key: v,
              type: "button",
              class: me(["tab-btn", { active: v === i.value }]),
              onClick: (P) => b(v)
            }, [
              q(Tt, {
                name: g(il)[v],
                size: 18
              }, null, 8, ["name"]),
              T("span", Bm, Z(g($s)[v] ?? v), 1),
              g(o).modelsFor(v).length ? (M(), k("span", Hm, Z(g(o).modelsFor(v).length), 1)) : ee("", !0)
            ], 10, Vm))), 128))
          ]),
          T("div", Um, [
            T("div", jm, [
              T("span", Wm, Z(g($s)[i.value] ?? i.value), 1),
              A.value ? (M(), k("span", zm, "⏳ Loading...")) : R.value && R.value.status && R.value.status !== "available" ? (M(), k("span", Gm, " ⚠️ " + Z(R.value.message || R.value.status), 1)) : (M(), k("span", Km, " ● Online (" + Z(S.value.length) + " " + Z(g(l)("prov_models", "models")) + ") ", 1)),
              E.value ? (M(), k("span", qm, "Updated: " + Z(E.value), 1)) : ee("", !0)
            ]),
            q(Je, {
              variant: "sm",
              label: "↻ Refresh",
              loading: A.value,
              title: "Reload models list",
              onClick: C[0] || (C[0] = (v) => I(!0))
            }, null, 8, ["loading"])
          ]),
          T("div", Xm, [
            T("div", Ym, [
              q(Tt, {
                name: "search",
                size: 14,
                class: "search-icon"
              }),
              Ge(T("input", {
                "onUpdate:modelValue": C[1] || (C[1] = (v) => c.value = v),
                type: "text",
                class: "search-input",
                placeholder: "Search models..."
              }, null, 512), [
                [wt, c.value]
              ]),
              c.value ? (M(), k("button", {
                key: 0,
                class: "clear-search",
                onClick: C[2] || (C[2] = (v) => c.value = "")
              }, "✕")) : ee("", !0)
            ]),
            T("div", Jm, [
              q(lt, {
                options: [...p],
                "option-labels": m,
                "model-value": u.value,
                "onUpdate:modelValue": C[3] || (C[3] = (v) => u.value = v)
              }, null, 8, ["options", "model-value"]),
              q(lt, {
                options: x.value,
                "option-labels": _,
                "model-value": r.value,
                "onUpdate:modelValue": C[4] || (C[4] = (v) => r.value = v)
              }, null, 8, ["options", "model-value"]),
              q(lt, {
                options: [...F],
                "option-labels": w,
                "model-value": d.value,
                "onUpdate:modelValue": C[5] || (C[5] = (v) => f(v))
              }, null, 8, ["options", "model-value"])
            ])
          ]),
          T("div", Qm, [
            A.value && !S.value.length ? (M(), k("div", Zm, [
              q(ys, { text: "Loading models from provider..." })
            ])) : U.value.length ? (M(), k("div", {
              key: 2,
              class: me(["models-container", d.value])
            }, [
              (M(!0), k(fe, null, ke(U.value, (v) => (M(), k("div", {
                key: v,
                class: me(["model-card", { selected: v === a.value }]),
                onClick: (P) => j(v)
              }, [
                T("div", nh, [
                  T("span", sh, Z(X(v) ? "👁" : "📝"), 1),
                  T("span", {
                    class: "model-name",
                    title: v
                  }, Z(v), 9, oh)
                ]),
                T("div", lh, [
                  X(v) ? (M(), k("span", ih, "Vision")) : (M(), k("span", ah, "Text")),
                  G(v, i.value) === "local" ? (M(), k("span", rh, "Local")) : G(v, i.value) === "free" ? (M(), k("span", ch, "Free")) : (M(), k("span", uh, "Paid"))
                ])
              ], 10, th))), 128))
            ], 2)) : (M(), k("div", eh, [...C[7] || (C[7] = [
              T("span", null, "No models matching criteria", -1)
            ])]))
          ]),
          T("div", dh, [
            T("div", fh, [
              a.value ? (M(), k("span", ph, [
                C[8] || (C[8] = ks("Selected: ", -1)),
                T("strong", null, Z(a.value), 1)
              ])) : (M(), k("span", mh, "No model selected"))
            ]),
            T("div", hh, [
              q(Je, {
                label: "Cancel",
                onClick: $
              }),
              q(Je, {
                variant: "accent",
                label: "✔ Apply Selection",
                disabled: !a.value,
                onClick: N
              }, null, 8, ["disabled"])
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["open"]));
  }
}), _h = /* @__PURE__ */ Fe(gh, [["__scopeId", "data-v-a16c02ab"]]), vh = { class: "fil-provider-root" }, bh = { class: "trigger-header" }, yh = { class: "provider-badge" }, wh = { class: "provider-title" }, xh = { class: "trigger-model" }, Sh = ["title"], Ch = 3e5, Fh = /* @__PURE__ */ xe({
  __name: "ProviderLoader",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, n = ll(), { t: s } = Pt(), o = /* @__PURE__ */ oe(!1);
    function l(S, L) {
      return {
        get: () => t.state.nodeState[S] ?? L,
        set: (A) => {
          t.state.nodeState[S] = A;
        }
      };
    }
    const i = Y(() => String(l("provider", "ollama").get()));
    function a(S) {
      l("provider", "ollama").set(S), I();
    }
    const c = Y(() => String(l("model", "(loading...)").get()));
    function u(S) {
      l("model", "(loading...)").set(S), I();
    }
    const r = Y(() => Number(l("temperature", 0.7).get())), d = Y(() => Number(l("max_tokens", 0).get())), f = Y(() => Number(l("rate_limit_ms", 100).get())), p = Y(() => Number(l("max_image_side", 1024).get())), m = t.state, _ = Y(() => n.isLoading(i.value)), F = Y(() => n.probeState[i.value]), w = Y(() => n.cachedAgeLabel(i.value));
    let x = null;
    Ee(() => t.state.nodeState, () => {
    }, { deep: !0 });
    function I() {
      const S = t.state.node;
      if (!S) return;
      const L = te(S, "model");
      if (!L) return;
      const A = n.modelsFor(i.value), R = A.length ? A : ["(no models)"];
      L.options && (L.options.values = R);
    }
    function b(S) {
      a(S.provider), u(S.model);
    }
    return cn(async () => {
      n.loadDisplayNames();
      const S = n.modelsFor(i.value);
      if (S.length)
        c.value === "(loading...)" && u(S[0] ?? "(no models)"), I(), n.loadModels(i.value);
      else
        try {
          await n.loadModels(i.value);
          const L = n.modelsFor(i.value);
          c.value === "(loading...)" && u(L[0] ?? "(no models)"), I();
        } catch (L) {
          Ze.error(L instanceof Error ? L.message : String(L));
        }
      x = setInterval(() => {
        n.loadModels(i.value, !0);
      }, Ch);
    }), Ys(() => {
      x && clearInterval(x);
    }), (S, L) => (M(), k("div", vh, [
      T("button", {
        type: "button",
        class: "picker-trigger-btn",
        onClick: L[0] || (L[0] = (A) => o.value = !0)
      }, [
        T("div", bh, [
          T("div", yh, [
            q(g(Tt), {
              name: g(il)[i.value],
              size: 16
            }, null, 8, ["name"]),
            T("span", wh, Z(g($s)[i.value] ?? i.value), 1)
          ]),
          L[6] || (L[6] = T("span", { class: "open-icon" }, "⚙️ Choose", -1))
        ]),
        T("div", xh, [
          L[7] || (L[7] = T("span", { class: "model-label" }, "🧠 Model:", -1)),
          T("span", {
            class: "model-name",
            title: c.value
          }, Z(c.value), 9, Sh)
        ])
      ]),
      _.value ? (M(), Ie(g(ys), {
        key: 0,
        text: g(s)("prov_loading_models", "Loading models…")
      }, null, 8, ["text"])) : F.value && F.value.status && F.value.status !== "available" ? (M(), Ie(g(ys), {
        key: 1,
        err: !0,
        text: F.value.message || F.value.status
      }, null, 8, ["text"])) : w.value ? (M(), Ie(g(ys), {
        key: 2,
        text: `${g(s)("prov_models_updated", "Models updated")}: ${w.value}`
      }, null, 8, ["text"])) : ee("", !0),
      q(g(it), {
        "model-value": r.value,
        min: 0,
        max: 2,
        step: 0.05,
        label: g(s)("lbl_temperature", "🌡️ Temperature"),
        title: g(s)("tt_temperature", "Sampling temperature — higher is more creative, lower is more deterministic."),
        "onUpdate:modelValue": L[1] || (L[1] = (A) => g(m).nodeState.temperature = A)
      }, null, 8, ["model-value", "label", "title"]),
      q(g(it), {
        "model-value": d.value,
        min: 0,
        max: 65536,
        step: 1,
        label: g(s)("lbl_max_tokens", "🔢 Max tokens"),
        title: g(s)("tt_provider_max_tokens", "Maximum tokens in the response. 0 = provider default (no explicit limit)."),
        "onUpdate:modelValue": L[2] || (L[2] = (A) => g(m).nodeState.max_tokens = A)
      }, null, 8, ["model-value", "label", "title"]),
      q(g(it), {
        "model-value": f.value,
        min: 0,
        max: 5e3,
        step: 10,
        label: g(s)("lbl_rate_limit", "⏱️ Rate limit"),
        title: g(s)("tt_rate_limit", "Minimum delay between requests to this provider, to avoid rate limiting."),
        "onUpdate:modelValue": L[3] || (L[3] = (A) => g(m).nodeState.rate_limit_ms = A)
      }, null, 8, ["model-value", "label", "title"]),
      q(g(it), {
        "model-value": p.value,
        min: 128,
        max: 4096,
        step: 64,
        label: g(s)("lbl_max_image_side", "🖼️ Max image side"),
        title: g(s)("tt_max_image_side", "Images are downscaled so their longest side does not exceed this value."),
        "onUpdate:modelValue": L[4] || (L[4] = (A) => g(m).nodeState.max_image_side = A)
      }, null, 8, ["model-value", "label", "title"]),
      q(_h, {
        open: o.value,
        "onUpdate:open": L[5] || (L[5] = (A) => o.value = A),
        provider: i.value,
        model: c.value,
        onSelect: b
      }, null, 8, ["open", "provider", "model"])
    ]));
  }
}), Mh = /* @__PURE__ */ Fe(Fh, [["__scopeId", "data-v-1a5b41f9"]]), Lh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mh
}, Symbol.toStringTag, { value: "Module" })), Ih = {
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
}, kh = { class: "fil-scanner-root" }, Ah = {
  key: 0,
  class: "fil-section-block"
}, Dh = ["title"], Eh = { class: "fil-section-block" }, Th = { class: "fil-section-block" }, Rh = ["title"], Ph = { class: "fil-scanner-seed-row" }, Nh = ["value", "readonly", "title"], Oh = ["title"], $h = ["title"], Vh = ["title"], Bh = /* @__PURE__ */ xe({
  __name: "OpticScanner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Pt(), s = Ih.FiLOpticScanner, o = (s == null ? void 0 : s.inputs.required) ?? [], l = {
      prompt: ["scn_section_prompt", "📝 Prompt/Text"],
      agent: ["scn_section_agent", "🕵️ Agent"],
      model: ["scn_section_model", "🧠 Model"],
      output: ["scn_section_output", "📤 Output"],
      advanced: ["scn_section_advanced", "🎨 Style"],
      actions: ["scn_section_actions", "⚡ Actions"]
    }, i = /* @__PURE__ */ new Set(["prompt", "negative_prompt", "custom_style"]);
    function a(N) {
      const $ = l[N];
      return $ ? n($[0], $[1]) : N.toUpperCase();
    }
    const c = {
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
    function u(N) {
      const $ = c[N.name];
      return $ ? n($, N.tooltip || "") : N.tooltip || "";
    }
    const r = {
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
    function d(N) {
      if (N.label) return N.label;
      const $ = r[N.name] || "", O = N.name.replace(/_/g, " ").replace(/\b\w/g, (C) => C.toUpperCase());
      return $ ? `${$} ${O}` : O;
    }
    const f = /* @__PURE__ */ rn({}), p = {
      photo_style: { emoji: "📷", labelKey: "scn_style_photo_label", labelFallback: "Photo" },
      nsfw_photo_style: { emoji: "🔞", labelKey: "scn_style_nsfw_photo_label", labelFallback: "NSFW Photo" },
      art_style: { emoji: "🎨", labelKey: "scn_style_art_label", labelFallback: "Art" },
      nsfw_art_style: { emoji: "🔞", labelKey: "scn_style_nsfw_art_label", labelFallback: "NSFW Art" }
    };
    function m(N) {
      const $ = p[N], O = $ ? `${$.emoji} ${n($.labelKey, $.labelFallback)}: ` : "", C = String(I(N, "None") || "None");
      if (C === "None") return `${O}${n("scn_style_none", "None")}`;
      const v = C.indexOf("/"), P = v === -1 ? C : C.slice(v + 1);
      return `${O}${P}`;
    }
    function _(N) {
      f[N] = !0;
    }
    function F(N, $) {
      b(N, $), f[N] = !1;
    }
    const w = Y(() => {
      var $;
      const N = {};
      for (const O of o) (N[$ = O.section || "_"] ?? (N[$] = [])).push(O);
      return N;
    }), x = Y(() => {
      const N = w.value.styles || [], $ = [];
      for (let O = 0; O < N.length; O += 2) $.push(N.slice(O, O + 2));
      return $;
    });
    function I(N, $ = "") {
      return t.state.nodeState[N] ?? t.state.initialValues[N] ?? $;
    }
    function b(N, $) {
      t.state.nodeState[N] = $;
    }
    const S = /* @__PURE__ */ new Set(["agent", "output", "advanced"]);
    function L(N) {
      const $ = t.state.ui[`collapsed_${N}`];
      return $ === void 0 ? S.has(N) : !!$;
    }
    function A(N, $) {
      t.state.ui[`collapsed_${N}`] = $;
    }
    Ee(() => t.state.nodeState, () => {
    }, { deep: !0 });
    const R = Y({
      get: () => t.state.nodeState.seed_mode ?? "random",
      set: (N) => {
        t.state.nodeState.seed_mode = N;
      }
    }), E = Y({
      get: () => Number(t.state.nodeState.seed ?? -1) || -1,
      // Write the native seed widget directly, not just nodeState: the
      // createSyncedNodeState mirror doesn't reach the seed widget the same way
      // control_after_generate expects, so a fixed seed set only via nodeState
      // can fail to reach the queued prompt. Direct assignment sticks.
      set: (N) => {
        t.state.nodeState.seed = N;
        const $ = t.state.node ? te(t.state.node, "seed") : null;
        $ && ($.value = N);
      }
    }), G = Y(() => R.value === "fixed" ? `${E.value}` : "random");
    Ee(R, (N) => {
      const $ = t.state.node, O = $ ? te($, "control_after_generate") : null;
      O && (O.value = N === "fixed" ? "fixed" : "randomize");
    }, { immediate: !0 });
    function X() {
      R.value = "random";
    }
    function U() {
      const N = t.state.node, $ = N ? te(N, "seed") : null, O = $ && Number.isFinite(Number($.value)) ? Number($.value) : t.state.lastRunSeed;
      if (O == null || !Number.isFinite(O)) {
        Ze.warning("No last-run seed recorded yet");
        return;
      }
      E.value = O, R.value = "fixed";
    }
    function j() {
      const N = Math.floor(Math.random() * 1e9) & 2147483647;
      E.value = N, R.value = "fixed";
    }
    return (N, $) => (M(), k("div", kh, [
      (M(!0), k(fe, null, ke(w.value, (O, C) => (M(), k(fe, { key: C }, [
        C !== "styles" ? (M(), k("div", Ah, [
          C !== "_" && C !== "prompt" ? (M(), Ie(g(wn), {
            key: 0,
            title: a(String(C)),
            "model-value": L(String(C)),
            "onUpdate:modelValue": (v) => A(String(C), v)
          }, null, 8, ["title", "model-value", "onUpdate:modelValue"])) : ee("", !0),
          (M(!0), k(fe, null, ke(O, (v) => (M(), k(fe, {
            key: v.name
          }, [
            g(i).has(v.name) ? ee("", !0) : Ge((M(), k("div", {
              key: 0,
              class: "fil-w-row",
              title: u(v)
            }, [
              v.kind === "chip_grid" ? (M(), Ie(g(ri), {
                key: 0,
                options: v.values || [],
                "model-value": String(I(v.name, "")),
                columns: v.columns ?? 3,
                "onUpdate:modelValue": (P) => b(v.name, P)
              }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"])) : v.kind === "chip_list" ? (M(), Ie(g(wp), {
                key: 1,
                options: v.values || [],
                "model-value": I(v.name, null),
                searchable: v.searchable ?? !0,
                "onUpdate:modelValue": (P) => b(v.name, P)
              }, null, 8, ["options", "model-value", "searchable", "onUpdate:modelValue"])) : v.kind === "segmented" ? (M(), Ie(g(lt), {
                key: 2,
                options: v.options || [],
                "model-value": String(I(v.name, "")),
                label: d(v),
                "onUpdate:modelValue": (P) => b(v.name, P)
              }, null, 8, ["options", "model-value", "label", "onUpdate:modelValue"])) : (M(), Ie(g(ri), {
                key: 3,
                options: v.values || [],
                "model-value": String(I(v.name, "")),
                columns: v.columns ?? 3,
                "onUpdate:modelValue": (P) => b(v.name, P)
              }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"]))
            ], 8, Dh)), [
              [Ts, C === "_" || C === "prompt" || !L(String(C))]
            ])
          ], 64))), 128))
        ])) : ee("", !0)
      ], 64))), 128)),
      T("div", Eh, [
        q(g(wn), {
          title: a("advanced"),
          "model-value": L("advanced"),
          "onUpdate:modelValue": $[0] || ($[0] = (O) => A("advanced", O))
        }, null, 8, ["title", "model-value"]),
        Ge(T("div", Th, [
          (M(!0), k(fe, null, ke(x.value, (O, C) => (M(), k("div", {
            key: `style-pair-${C}`,
            class: "fil-style-pair-row"
          }, [
            (M(!0), k(fe, null, ke(O, (v) => (M(), k("div", {
              key: v.name,
              class: "fil-style-pair-item",
              title: u(v)
            }, [
              q(g(Je), {
                variant: "full",
                label: m(v.name),
                onClick: (P) => _(v.name)
              }, null, 8, ["label", "onClick"]),
              q(g(ol), {
                open: !!f[v.name],
                title: d(v),
                width: "640px",
                "onUpdate:open": (P) => f[v.name] = P
              }, {
                default: ss(() => [
                  q(g(Mm), {
                    styles: v.values || [],
                    "model-value": String(I(v.name, "None")),
                    onSelect: (P) => F(v.name, P)
                  }, null, 8, ["styles", "model-value", "onSelect"])
                ]),
                _: 2
              }, 1032, ["open", "title", "onUpdate:open"])
            ], 8, Rh))), 128))
          ]))), 128))
        ], 512), [
          [Ts, !L("advanced")]
        ])
      ]),
      T("div", Ph, [
        T("input", {
          value: G.value,
          type: "text",
          class: me(["fil-scanner-seed-field", { "is-random": R.value === "random" }]),
          readonly: R.value === "random",
          "aria-label": "Seed value",
          title: R.value === "fixed" ? g(n)("scn_seed_locked", "Locked seed") : g(n)("scn_seed_auto_random", "Auto-random — a new seed is generated each run"),
          onInput: $[1] || ($[1] = (O) => E.value = Number(O.target.value) || 0)
        }, null, 42, Nh),
        T("button", {
          type: "button",
          class: me(["fil-scanner-seed-pill", { active: R.value === "random" }]),
          title: g(n)("scn_seed_mode_tt", "Random generates a new seed each run."),
          onClick: X
        }, Z(g(n)("scn_seed_random", "Random")), 11, Oh),
        T("button", {
          type: "button",
          class: "fil-scanner-seed-pill",
          title: t.state.lastRunSeed != null ? `${g(n)("scn_seed_use_last_prefix", "Reuse the last run's seed:")} ${t.state.lastRunSeed}` : g(n)("scn_seed_use_last_tt", "Reuse the seed from the last executed run."),
          onClick: U
        }, Z(g(n)("scn_seed_use_last", "Use last")), 9, $h),
        T("button", {
          type: "button",
          class: "fil-scanner-seed-pill fil-scanner-seed-pill-accent",
          title: g(n)("scn_seed_new_fixed_tt", "Generate a new random fixed seed."),
          onClick: j
        }, Z(g(n)("scn_seed_new_fixed", "New fixed")), 9, Vh)
      ])
    ]));
  }
}), Hh = /* @__PURE__ */ Fe(Bh, [["__scopeId", "data-v-ab7f694f"]]), Uh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hh
}, Symbol.toStringTag, { value: "Module" })), jh = { class: "fil-cleaner-root" }, Wh = ["aria-pressed", "title", "onClick"], zh = { class: "fil-cleaner-label" }, Gh = ["aria-pressed", "title", "onClick"], Kh = { class: "fil-cleaner-label" }, qh = /* @__PURE__ */ xe({
  __name: "NeuroCleaner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Pt(), s = [
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
    const c = /* @__PURE__ */ new Set(["ram"]);
    function u(d) {
      const f = t.state.ui[`collapsed_${d}`];
      return f === void 0 ? c.has(d) : !!f;
    }
    function r(d, f) {
      t.state.ui[`collapsed_${d}`] = f;
    }
    return Ee(() => t.state.nodeState, () => {
    }, { deep: !0 }), (d, f) => (M(), k("div", jh, [
      q(g(wn), {
        title: g(n)("nc_section_vram", "🎮 VRAM / Models"),
        "model-value": u("vram"),
        "onUpdate:modelValue": f[0] || (f[0] = (p) => r("vram", p))
      }, null, 8, ["title", "model-value"]),
      (M(), k(fe, null, ke(s, (p) => Ge(T("button", {
        key: p.name,
        type: "button",
        class: me(["fil-cleaner-row", { active: i(p.name, p.defaultOn) }]),
        "aria-pressed": i(p.name, p.defaultOn),
        title: l(p.name, p.label),
        onClick: (m) => a(p.name, p.defaultOn)
      }, [
        f[2] || (f[2] = T("span", { class: "fil-cleaner-dot" }, null, -1)),
        T("span", zh, Z(g(n)(`nc_lbl_${p.name}`, p.label)), 1)
      ], 10, Wh), [
        [Ts, !u("vram")]
      ])), 64)),
      q(g(wn), {
        title: g(n)("nc_section_ram", "💾 RAM / Cache (advanced)"),
        "model-value": u("ram"),
        "onUpdate:modelValue": f[1] || (f[1] = (p) => r("ram", p))
      }, null, 8, ["title", "model-value"]),
      (M(), k(fe, null, ke(o, (p) => Ge(T("button", {
        key: p.name,
        type: "button",
        class: me(["fil-cleaner-row", { active: i(p.name, p.defaultOn) }]),
        "aria-pressed": i(p.name, p.defaultOn),
        title: l(p.name, p.label),
        onClick: (m) => a(p.name, p.defaultOn)
      }, [
        f[3] || (f[3] = T("span", { class: "fil-cleaner-dot" }, null, -1)),
        T("span", Kh, Z(g(n)(`nc_lbl_${p.name}`, p.label)), 1)
      ], 10, Gh), [
        [Ts, !u("ram")]
      ])), 64))
    ]));
  }
}), Xh = /* @__PURE__ */ Fe(qh, [["__scopeId", "data-v-1f9cbf0d"]]), Yh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xh
}, Symbol.toStringTag, { value: "Module" }));
function yo(e) {
  return Math.min(1, Math.max(0, e));
}
const Jh = { class: "fil-cmp-root" }, Qh = {
  key: 0,
  class: "fil-cmp-placeholder"
}, Zh = { class: "fil-cmp-save-row" }, eg = {
  key: 2,
  class: "fil-cmp-settings"
}, tg = /* @__PURE__ */ xe({
  __name: "BeforeAfterCompare",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Pt(), s = Y({
      get: () => t.state.ui.compare_mode ?? "wipe",
      set: (C) => {
        t.state.ui.compare_mode = C, U();
      }
    }), o = Y({
      get: () => Number(t.state.ui.compare_position ?? 0.5),
      set: (C) => {
        t.state.ui.compare_position = yo(C), U();
      }
    }), l = Y({
      get: () => Number(t.state.ui.compare_opacity ?? 0.5),
      set: (C) => {
        t.state.ui.compare_opacity = yo(C), U();
      }
    }), i = Y({
      get: () => t.state.ui.settings_collapsed !== !1,
      set: (C) => {
        t.state.ui.settings_collapsed = C;
      }
    }), a = Y(() => [
      { value: "before", label: n("cmp_mode_before", "◀ Before") },
      { value: "after", label: n("cmp_mode_after", "After ▶") },
      { value: "wipe", label: n("cmp_mode_wipe", "↔ Wipe") },
      { value: "side-by-side", label: n("cmp_mode_side", "▥ Side-by-side") },
      { value: "overlay", label: n("cmp_mode_overlay", "◐ Overlay") },
      { value: "difference", label: n("cmp_mode_difference", "◈ Difference") }
    ]), c = ["Off", "Preview only", "Preview + output"], u = {
      Off: "🚫 Off",
      "Preview only": "👁️ Preview only",
      "Preview + output": "👁️➡️ Preview + output"
    }, r = Y(() => t.state.nodeState.swap ? "ON" : "OFF");
    function d(C) {
      t.state.nodeState.swap = C === "ON";
    }
    const f = Y(() => String(t.state.nodeState.resize_mode ?? "Off"));
    function p(C) {
      t.state.nodeState.resize_mode = C;
    }
    const m = Y(() => Number(t.state.nodeState.max_resolution ?? 4096) || 4096);
    function _(C) {
      t.state.nodeState.max_resolution = C;
    }
    const F = Y(() => f.value !== "Off"), w = Y(() => t.state.ui.compare_images ?? {}), x = /* @__PURE__ */ oe(null), I = /* @__PURE__ */ oe(null), b = /* @__PURE__ */ oe(!1), S = Y(() => !!x.value || !!I.value);
    function L(C) {
      return new Promise((v, P) => {
        const ae = new Image();
        ae.onload = () => v(ae), ae.onerror = () => P(new Error("image load failed")), ae.src = C;
      });
    }
    const A = /* @__PURE__ */ oe(null), R = /* @__PURE__ */ oe(null);
    let E = 0, G = null;
    Ee(
      () => t.state.ui.compare_images,
      async (C) => {
        var ne, _e;
        const v = C ?? {}, P = (ne = v.a) == null ? void 0 : ne[0], ae = (_e = v.b) == null ? void 0 : _e[0];
        b.value = !1, x.value = null, I.value = null;
        try {
          P && (x.value = await L(li(P))), ae && (I.value = await L(li(ae)));
        } catch {
          b.value = !0;
        }
        U();
      },
      { deep: !0, immediate: !0 }
    ), Ee([s, o, l], () => U());
    function X(C, v, P, ae) {
      if (!P || !ae) return { x: 0, y: 0, w: C, h: v };
      const ne = C / v, _e = P / ae;
      let tt, re;
      return _e > ne ? (tt = C, re = C / _e) : (re = v, tt = v * _e), { x: (C - tt) / 2, y: (v - re) / 2, w: tt, h: re };
    }
    function U() {
      E || (E = requestAnimationFrame(() => {
        E = 0, j();
      }));
    }
    function j() {
      const C = R.value, v = A.value;
      if (!C || !v) return;
      const P = window.devicePixelRatio || 1, ae = v.clientWidth, ne = v.clientHeight;
      if (ae <= 0 || ne <= 0) return;
      const _e = Math.round(ae * P), tt = Math.round(ne * P);
      (C.width !== _e || C.height !== tt) && (C.width = _e, C.height = tt);
      const re = C.getContext("2d");
      if (!re) return;
      re.setTransform(P, 0, 0, P, 0, 0), re.clearRect(0, 0, ae, ne);
      const Ve = x.value, Ae = I.value;
      if (!Ve && !Ae) return;
      if (s.value === "side-by-side") {
        const Ke = ae / 2;
        if (Ve) {
          const Pe = X(Ke, ne, Ve.naturalWidth, Ve.naturalHeight);
          re.drawImage(Ve, Pe.x, Pe.y, Pe.w, Pe.h);
        }
        if (Ae) {
          const Pe = X(Ke, ne, Ae.naturalWidth, Ae.naturalHeight);
          re.drawImage(Ae, Ke + Pe.x, Pe.y, Pe.w, Pe.h);
        }
        re.strokeStyle = "rgba(255,255,255,0.2)", re.beginPath(), re.moveTo(Ke, 0), re.lineTo(Ke, ne), re.stroke();
        return;
      }
      const Gt = Ve ?? Ae, de = X(ae, ne, Gt.naturalWidth, Gt.naturalHeight);
      if (s.value === "before") {
        Ve && re.drawImage(Ve, de.x, de.y, de.w, de.h);
        return;
      }
      if (s.value === "after") {
        Ae && re.drawImage(Ae, de.x, de.y, de.w, de.h);
        return;
      }
      if (s.value === "overlay") {
        Ve && re.drawImage(Ve, de.x, de.y, de.w, de.h), Ae && (re.save(), re.globalAlpha = l.value, re.drawImage(Ae, de.x, de.y, de.w, de.h), re.restore());
        return;
      }
      if (s.value === "difference") {
        Ve && re.drawImage(Ve, de.x, de.y, de.w, de.h), Ae && (re.save(), re.globalCompositeOperation = "difference", re.drawImage(Ae, de.x, de.y, de.w, de.h), re.restore());
        return;
      }
      if (Ve && re.drawImage(Ve, de.x, de.y, de.w, de.h), Ae) {
        const Ke = de.x + de.w * o.value;
        re.save(), re.beginPath(), re.rect(Ke, de.y, de.x + de.w - Ke, de.h), re.clip(), re.drawImage(Ae, de.x, de.y, de.w, de.h), re.restore();
        const Pe = getComputedStyle(v).getPropertyValue("--fil-accent").trim() || "#e8724c";
        re.save(), re.strokeStyle = Pe, re.lineWidth = 2, re.shadowColor = Pe, re.shadowBlur = 6, re.beginPath(), re.moveTo(Ke, de.y), re.lineTo(Ke, de.y + de.h), re.stroke(), re.restore();
      }
    }
    function N(C) {
      const v = A.value;
      if (!v) return;
      const P = v.getBoundingClientRect();
      o.value = yo((C.clientX - P.left) / P.width);
    }
    function $(C) {
      if (s.value !== "wipe") return;
      N(C);
      const v = (ae) => N(ae), P = () => {
        window.removeEventListener("pointermove", v), window.removeEventListener("pointerup", P);
      };
      window.addEventListener("pointermove", v), window.addEventListener("pointerup", P);
    }
    cn(() => {
      G = new ResizeObserver(() => U()), A.value && G.observe(A.value), U();
    }), Sn(() => {
      G == null || G.disconnect(), E && cancelAnimationFrame(E);
    });
    async function O(C) {
      var P, ae;
      const v = C === "a" ? (P = w.value.a) == null ? void 0 : P[0] : (ae = w.value.b) == null ? void 0 : ae[0];
      if (!v) {
        Ze.warning(n("cmp_no_preview", "Run the node to see a preview"));
        return;
      }
      try {
        const ne = await Qt.saveCompareImage(v);
        Ze.success(`${n("cmp_saved", "Saved to output")}: ${ne.image.filename}`);
      } catch (ne) {
        Ze.warning(ne instanceof Error ? ne.message : "Save failed");
      }
    }
    return (C, v) => {
      var P, ae;
      return M(), k("div", Jh, [
        q(g(Rp), {
          options: a.value,
          "model-value": s.value,
          label: g(n)("lbl_mode", "⚙️ Mode"),
          title: g(n)("cmp_view_mode", "How to compare the two images."),
          "onUpdate:modelValue": v[0] || (v[0] = (ne) => s.value = ne)
        }, null, 8, ["options", "model-value", "label", "title"]),
        T("div", {
          ref_key: "wrapRef",
          ref: A,
          class: "fil-cmp-canvas-wrap"
        }, [
          T("canvas", {
            ref_key: "canvasRef",
            ref: R,
            class: me(["fil-cmp-canvas", { "is-wipe": s.value === "wipe" }]),
            onPointerdown: $
          }, null, 34),
          S.value ? ee("", !0) : (M(), k("div", Qh, Z(b.value ? g(n)("cmp_load_error", "Could not load preview images") : g(n)("cmp_no_preview", "Run the node to see a preview")), 1))
        ], 512),
        s.value === "wipe" ? (M(), Ie(g(it), {
          key: 0,
          "model-value": o.value,
          min: 0,
          max: 1,
          step: 0.01,
          label: g(n)("cmp_position", "Position"),
          "onUpdate:modelValue": v[1] || (v[1] = (ne) => o.value = ne)
        }, null, 8, ["model-value", "label"])) : ee("", !0),
        s.value === "overlay" ? (M(), Ie(g(it), {
          key: 1,
          "model-value": l.value,
          min: 0,
          max: 1,
          step: 0.01,
          label: g(n)("cmp_opacity", "Opacity"),
          "onUpdate:modelValue": v[2] || (v[2] = (ne) => l.value = ne)
        }, null, 8, ["model-value", "label"])) : ee("", !0),
        T("div", Zh, [
          q(g(Je), {
            variant: "sm",
            label: g(n)("cmp_save_before", "💾 Save before"),
            disabled: !((P = w.value.a) != null && P.length),
            onClick: v[3] || (v[3] = (ne) => O("a"))
          }, null, 8, ["label", "disabled"]),
          q(g(Je), {
            variant: "sm",
            label: g(n)("cmp_save_after", "💾 Save after"),
            disabled: !((ae = w.value.b) != null && ae.length),
            onClick: v[4] || (v[4] = (ne) => O("b"))
          }, null, 8, ["label", "disabled"])
        ]),
        q(g(wn), {
          title: g(n)("cmp_settings", "Settings"),
          modelValue: i.value,
          "onUpdate:modelValue": v[5] || (v[5] = (ne) => i.value = ne)
        }, null, 8, ["title", "modelValue"]),
        i.value ? ee("", !0) : (M(), k("div", eg, [
          q(g(lt), {
            options: ["ON", "OFF"],
            "option-labels": { ON: g(n)("cmp_swap_on_label", "🔄 Swapped"), OFF: g(n)("cmp_swap_off_label", "↔️ Normal") },
            "model-value": r.value,
            label: g(n)("lbl_swap", "🔁 Swap before/after"),
            title: g(n)("cmp_swap", "Swap which image is shown as before/after."),
            "onUpdate:modelValue": d
          }, null, 8, ["option-labels", "model-value", "label", "title"]),
          q(g(lt), {
            options: [...c],
            "option-labels": u,
            "model-value": f.value,
            label: g(n)("lbl_resize_mode", "🖥️ Resize mode"),
            title: g(n)("cmp_resize_mode", "Off keeps images untouched. Preview modes downscale for a lighter preview and, optionally, output."),
            "onUpdate:modelValue": p
          }, null, 8, ["options", "model-value", "label", "title"]),
          F.value ? (M(), Ie(g(it), {
            key: 0,
            "model-value": m.value,
            min: 256,
            max: 8192,
            step: 64,
            label: g(n)("lbl_max_resolution", "🖼️ Max resolution"),
            title: g(n)("cmp_max_resolution", "Maximum width or height used when resizing is enabled."),
            "onUpdate:modelValue": _
          }, null, 8, ["model-value", "label", "title"])) : ee("", !0)
        ]))
      ]);
    };
  }
}), ng = /* @__PURE__ */ Fe(tg, [["__scopeId", "data-v-2abe5720"]]), sg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ng
}, Symbol.toStringTag, { value: "Module" })), og = { class: "fil-up-root" }, lg = { class: "fil-up-row fil-up-row-overlap" }, ig = ["title"], ag = ["title"], rg = { class: "fil-up-row" }, cg = ["title"], ug = ["title"], dg = /* @__PURE__ */ xe({
  __name: "UpscaleTileCalc",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Pt(), s = ["Low VRAM", "Balanced", "High VRAM", "Max Quality", "Ultra Quality"], o = {
      "Low VRAM": "🪫 Low VRAM",
      Balanced: "⚖️ Balanced",
      "High VRAM": "🔋 High VRAM",
      "Max Quality": "💎 Max Quality",
      "Ultra Quality": "👑 Ultra Quality"
    };
    function l(I, b) {
      return Y({
        get: () => Number(t.state.nodeState[I] ?? t.state.initialValues[I] ?? b) || b,
        set: (S) => {
          t.state.nodeState[I] = S;
        }
      });
    }
    function i(I, b) {
      return Y({
        get: () => t.state.nodeState[I] ?? t.state.initialValues[I] ?? b ? "ON" : "OFF",
        set: (S) => {
          t.state.nodeState[I] = S === "ON";
        }
      });
    }
    const a = l("upscale_factor", 2), c = l("tile_size", 1024), u = l("tile_overlap", 64), r = l("manual_tile_cols", 0), d = l("manual_tile_rows", 0), f = i("auto_overlap", !1), p = i("auto_mode", !1), m = i("non_square_tiles", !1), _ = i("auto_fix_thin_edges", !1), F = Y({
      get: () => String(t.state.nodeState.auto_profile ?? t.state.initialValues.auto_profile ?? "Balanced"),
      set: (I) => {
        t.state.nodeState.auto_profile = I;
      }
    });
    function w(I) {
      return !!t.state.ui[`collapsed_${I}`];
    }
    function x(I, b) {
      t.state.ui[`collapsed_${I}`] = b;
    }
    return Ee(() => t.state.nodeState, () => {
    }, { deep: !0 }), (I, b) => (M(), k("div", og, [
      q(g(it), {
        "model-value": g(a),
        min: 0.1,
        max: 8,
        step: 0.25,
        label: g(n)("lbl_upscale_factor", "🔍 Upscale factor"),
        title: g(n)("utc_factor", "Upscale multiplier."),
        "onUpdate:modelValue": b[0] || (b[0] = (S) => a.value = S)
      }, null, 8, ["model-value", "label", "title"]),
      q(g(wn), {
        title: g(n)("utc_section_auto", "⚙️ Auto / advanced"),
        "model-value": w("auto"),
        "onUpdate:modelValue": b[1] || (b[1] = (S) => x("auto", S))
      }, null, 8, ["title", "model-value"]),
      w("auto") ? ee("", !0) : (M(), k(fe, { key: 0 }, [
        q(g(hs), {
          "model-value": g(p),
          label: g(n)("lbl_full_auto", "🤖 Full auto"),
          title: g(n)("utc_auto_mode", "Pick tile size/overlap automatically from the selected VRAM profile."),
          "onUpdate:modelValue": b[2] || (b[2] = (S) => p.value = S)
        }, null, 8, ["model-value", "label", "title"]),
        g(p) === "ON" ? (M(), Ie(g(lt), {
          key: 0,
          options: [...s],
          "option-labels": o,
          "model-value": F.value,
          label: g(n)("lbl_auto_profile", "🎚️ Auto profile"),
          title: g(n)("utc_auto_profile", "VRAM/quality profile used when Full Auto is on."),
          "onUpdate:modelValue": b[3] || (b[3] = (S) => F.value = S)
        }, null, 8, ["options", "model-value", "label", "title"])) : ee("", !0),
        g(p) === "OFF" ? (M(), k(fe, { key: 1 }, [
          T("div", lg, [
            T("label", {
              class: "fil-w-label",
              title: g(n)("utc_tile_size", "Base tile size.")
            }, Z(g(n)("lbl_tile_size", "🔲 Tile size")), 9, ig),
            q(g(sn), {
              modelValue: g(c),
              "onUpdate:modelValue": b[4] || (b[4] = (S) => /* @__PURE__ */ ye(c) ? c.value = S : null),
              min: 64,
              max: 2048,
              step: 64
            }, null, 8, ["modelValue"]),
            T("label", {
              class: "fil-w-label",
              title: g(n)("utc_overlap", "Tile overlap.")
            }, Z(g(n)("lbl_overlap", "🧵 Overlap")), 9, ag),
            q(g(sn), {
              modelValue: g(u),
              "onUpdate:modelValue": b[5] || (b[5] = (S) => /* @__PURE__ */ ye(u) ? u.value = S : null),
              min: 0,
              max: 512,
              step: 8,
              disabled: g(f) === "ON"
            }, null, 8, ["modelValue", "disabled"]),
            q(g(hs), {
              bare: "",
              "model-value": g(f),
              label: g(n)("lbl_auto_overlap", "🧵 Auto"),
              title: g(n)("utc_auto_overlap", "Derive overlap automatically from tile size (~12.5%) instead of the fixed value above."),
              "onUpdate:modelValue": b[6] || (b[6] = (S) => f.value = S)
            }, null, 8, ["model-value", "label", "title"])
          ]),
          T("div", rg, [
            T("label", {
              class: "fil-w-label",
              title: g(n)("utc_manual_cols", "Force this many tile columns. 0 = compute from tile size.")
            }, Z(g(n)("lbl_manual_cols", "↔️ Cols")), 9, cg),
            q(g(sn), {
              modelValue: g(r),
              "onUpdate:modelValue": b[7] || (b[7] = (S) => /* @__PURE__ */ ye(r) ? r.value = S : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"]),
            T("label", {
              class: "fil-w-label",
              title: g(n)("utc_manual_rows", "Force this many tile rows. 0 = compute from tile size.")
            }, Z(g(n)("lbl_manual_rows", "↕️ Rows")), 9, ug),
            q(g(sn), {
              modelValue: g(d),
              "onUpdate:modelValue": b[8] || (b[8] = (S) => /* @__PURE__ */ ye(d) ? d.value = S : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"])
          ]),
          q(g(hs), {
            "model-value": g(_),
            label: g(n)("lbl_auto_fix_edges", "🩹 Auto-fix thin edges"),
            title: g(n)("utc_auto_fix_edges", "Shrink tile_size to the next standard size instead of just warning when the grid would leave a thin edge tile."),
            "onUpdate:modelValue": b[9] || (b[9] = (S) => _.value = S)
          }, null, 8, ["model-value", "label", "title"])
        ], 64)) : ee("", !0)
      ], 64)),
      q(g(hs), {
        "model-value": g(m),
        label: g(n)("lbl_non_square", "📐 Non-square tiles"),
        title: g(n)("utc_non_square", "Allow rectangular tiles instead of forcing square ones."),
        "onUpdate:modelValue": b[10] || (b[10] = (S) => m.value = S)
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), fg = /* @__PURE__ */ Fe(dg, [["__scopeId", "data-v-ff1dd2df"]]), Wa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fg
}, Symbol.toStringTag, { value: "Module" })), pg = { class: "fil-hrf-root" }, mg = {
  key: 2,
  class: "fil-hrf-seed-row"
}, hg = ["value", "readonly", "title"], gg = ["title"], _g = ["title"], vg = ["title"], bg = /* @__PURE__ */ xe({
  __name: "HiResFix",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Pt();
    function s(C, v) {
      return Y({
        get: () => Number(t.state.nodeState[C] ?? t.state.initialValues[C] ?? v) || v,
        set: (P) => {
          t.state.nodeState[C] = P;
        }
      });
    }
    function o(C, v) {
      return Y({
        get: () => String(t.state.nodeState[C] ?? t.state.initialValues[C] ?? v),
        set: (P) => {
          t.state.nodeState[C] = P;
        }
      });
    }
    function l(C, v) {
      return Y({
        get: () => t.state.nodeState[C] ?? t.state.initialValues[C] ?? v ? "ON" : "OFF",
        set: (P) => {
          t.state.nodeState[C] = P === "ON";
        }
      });
    }
    function i(C, v) {
      var _e;
      const P = t.state.node, ae = P ? te(P, C) : null, ne = (_e = ae == null ? void 0 : ae.options) == null ? void 0 : _e.values;
      return Array.isArray(ne) && ne.length ? ne : v;
    }
    const a = o("upscale_type", "latent"), c = o("hires_ckpt_name", "(use same)"), u = o("latent_upscaler", "nearest-exact"), r = o("pixel_upscaler", ""), d = s("upscale_by", 1.25), f = l("use_same_seed", !0), p = s("denoise", 0.56), m = s("hires_steps", 12), _ = s("iterations", 1), F = l("use_controlnet", !1), w = o("control_net_name", ""), x = s("strength", 1), I = o("preprocessor", "none"), b = Y(() => i("hires_ckpt_name", ["(use same)"])), S = ["nearest-exact", "bilinear", "area", "bicubic", "bislerp"], L = Y(() => i("pixel_upscaler", ["(none)"])), A = Y(() => i("control_net_name", ["(none)"])), R = Y(() => i("preprocessor", ["none", "canny"])), E = Y(() => a.value === "latent"), G = Y(() => a.value === "pixel" || a.value === "both"), X = Y({
      get: () => t.state.nodeState.seed_mode ?? "random",
      set: (C) => {
        t.state.nodeState.seed_mode = C;
      }
    }), U = Y({
      get: () => Number(t.state.nodeState.seed ?? 0) || 0,
      // Write the native seed widget directly, not just nodeState: the
      // createSyncedNodeState mirror doesn't reach the seed widget (its value is
      // a prototype accessor tied to control_after_generate's linked-widget
      // machinery, unlike the plain numeric widgets), so a fixed seed set only
      // via nodeState never reaches the queued prompt. Direct assignment sticks.
      set: (C) => {
        t.state.nodeState.seed = C;
        const v = t.state.node ? te(t.state.node, "seed") : null;
        v && (v.value = C);
      }
    }), j = Y(() => X.value === "fixed" ? `${U.value}` : "random");
    Ee([f, X], ([C, v]) => {
      const P = t.state.node, ae = P ? te(P, "control_after_generate") : null;
      ae && (ae.value = C === "ON" || v === "fixed" ? "fixed" : "randomize");
    }, { immediate: !0 });
    function N() {
      X.value = "random";
    }
    function $() {
      const C = t.state.node, v = C ? te(C, "seed") : null, P = v && Number.isFinite(Number(v.value)) ? Number(v.value) : t.state.lastRunSeed;
      if (P == null || !Number.isFinite(P)) {
        Ze.warning("No last-run seed recorded yet");
        return;
      }
      U.value = P, X.value = "fixed";
    }
    function O() {
      const C = Math.floor(Math.random() * 1e9) & 2147483647;
      U.value = C, X.value = "fixed";
    }
    return (C, v) => (M(), k("div", pg, [
      q(g(lt), {
        options: ["latent", "pixel", "both"],
        "option-labels": { latent: "🌀 latent", pixel: "🖼️ pixel", both: "🔀 both" },
        "model-value": g(a),
        label: g(n)("lbl_upscale_type", "⬆️ Upscale type"),
        title: g(n)("hrf_upscale_type", "Upscale in latent space, pixel space, or both."),
        "onUpdate:modelValue": v[0] || (v[0] = (P) => a.value = P)
      }, null, 8, ["model-value", "label", "title"]),
      E.value ? (M(), Ie(g(ps), {
        key: 0,
        options: S,
        "model-value": g(u),
        label: g(n)("lbl_latent_up", "🌀 Latent upscaler"),
        title: g(n)("hrf_latent_up", "Latent upscale method."),
        "onUpdate:modelValue": v[1] || (v[1] = (P) => u.value = P)
      }, null, 8, ["model-value", "label", "title"])) : ee("", !0),
      G.value ? (M(), Ie(g(ps), {
        key: 1,
        options: L.value,
        "model-value": g(r),
        label: g(n)("lbl_pixel_up", "🖼️ Pixel upscaler"),
        title: g(n)("hrf_pixel_up", "Pixel upscale model (from upscale_models)."),
        "onUpdate:modelValue": v[2] || (v[2] = (P) => r.value = P)
      }, null, 8, ["options", "model-value", "label", "title"])) : ee("", !0),
      q(g(ps), {
        options: b.value,
        "model-value": g(c),
        label: g(n)("lbl_hires_ckpt", "📦 Hires checkpoint"),
        title: g(n)("hrf_ckpt", "Checkpoint for the hires pass. (use same) reuses the base model."),
        "onUpdate:modelValue": v[3] || (v[3] = (P) => c.value = P)
      }, null, 8, ["options", "model-value", "label", "title"]),
      q(g(it), {
        "model-value": g(d),
        min: 0.01,
        max: 8,
        step: 0.05,
        label: g(n)("lbl_upscale_by", "🔍 Upscale by"),
        title: g(n)("hrf_upscale_by", "Upscale multiplier."),
        "onUpdate:modelValue": v[4] || (v[4] = (P) => d.value = P)
      }, null, 8, ["model-value", "label", "title"]),
      q(g(it), {
        "model-value": g(p),
        min: 0,
        max: 1,
        step: 0.01,
        label: g(n)("lbl_hrf_denoise", "💧 Denoise"),
        title: g(n)("hrf_denoise", "Denoise strength for the hires re-sample."),
        "onUpdate:modelValue": v[5] || (v[5] = (P) => p.value = P)
      }, null, 8, ["model-value", "label", "title"]),
      q(g(sn), {
        modelValue: g(m),
        "onUpdate:modelValue": v[6] || (v[6] = (P) => /* @__PURE__ */ ye(m) ? m.value = P : null),
        min: 1,
        max: 1e4,
        step: 1,
        label: g(n)("lbl_hires_steps", "🪜 Hires steps"),
        title: g(n)("hrf_steps", "Steps for the hires re-sample.")
      }, null, 8, ["modelValue", "label", "title"]),
      q(g(sn), {
        modelValue: g(_),
        "onUpdate:modelValue": v[7] || (v[7] = (P) => /* @__PURE__ */ ye(_) ? _.value = P : null),
        min: 0,
        max: 5,
        step: 1,
        label: g(n)("lbl_iterations", "🔁 Iterations"),
        title: g(n)("hrf_iterations", "How many upscale+resample passes to run.")
      }, null, 8, ["modelValue", "label", "title"]),
      q(g(lt), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "♻️ same seed", OFF: "🎲 own" },
        "model-value": g(f),
        label: g(n)("lbl_use_same_seed", "🌱 Seed source"),
        title: g(n)("hrf_same_seed", "Reuse the samplers seed for the hires pass."),
        "onUpdate:modelValue": v[8] || (v[8] = (P) => f.value = P)
      }, null, 8, ["model-value", "label", "title"]),
      g(f) === "OFF" ? (M(), k("div", mg, [
        T("input", {
          value: j.value,
          type: "text",
          class: me(["fil-hrf-seed-field", { "is-random": X.value === "random" }]),
          readonly: X.value === "random",
          "aria-label": "Hires seed value",
          title: X.value === "fixed" ? g(n)("hrf_seed_locked", "Locked hires seed") : g(n)("hrf_seed_auto_random", "Auto-random — a new hires seed is generated each run"),
          onInput: v[9] || (v[9] = (P) => U.value = Number(P.target.value) || 0)
        }, null, 42, hg),
        T("button", {
          type: "button",
          class: me(["fil-hrf-seed-pill", { active: X.value === "random" }]),
          title: g(n)("hrf_seed_mode_tt", "Random generates a new hires seed each run."),
          onClick: N
        }, Z(g(n)("hrf_seed_random", "Random")), 11, gg),
        T("button", {
          type: "button",
          class: "fil-hrf-seed-pill",
          title: t.state.lastRunSeed != null ? `${g(n)("hrf_seed_use_last_prefix", "Reuse the last run's hires seed:")} ${t.state.lastRunSeed}` : g(n)("hrf_seed_use_last_tt", "Reuse the hires seed from the last executed run."),
          onClick: $
        }, Z(g(n)("hrf_seed_use_last", "Use last")), 9, _g),
        T("button", {
          type: "button",
          class: "fil-hrf-seed-pill fil-hrf-seed-pill-accent",
          title: g(n)("hrf_seed_new_fixed_tt", "Generate a new random fixed hires seed."),
          onClick: O
        }, Z(g(n)("hrf_seed_new_fixed", "New fixed")), 9, vg)
      ])) : ee("", !0),
      q(g(lt), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "🕹️ ON", OFF: "OFF" },
        "model-value": g(F),
        label: g(n)("lbl_use_cn", "🕹️ Use ControlNet"),
        title: g(n)("hrf_use_cn", "Guide the hires pass with a ControlNet. Tile ControlNets work without a preprocessor."),
        "onUpdate:modelValue": v[10] || (v[10] = (P) => F.value = P)
      }, null, 8, ["model-value", "label", "title"]),
      g(F) === "ON" ? (M(), k(fe, { key: 3 }, [
        q(g(ps), {
          options: A.value,
          "model-value": g(w),
          label: g(n)("lbl_cn_name", "🧩 ControlNet model"),
          title: g(n)("hrf_cn_name", "ControlNet model to apply."),
          "onUpdate:modelValue": v[11] || (v[11] = (P) => w.value = P)
        }, null, 8, ["options", "model-value", "label", "title"]),
        q(g(it), {
          "model-value": g(x),
          min: 0,
          max: 10,
          step: 0.01,
          label: g(n)("lbl_cn_strength", "💪 Strength"),
          title: g(n)("hrf_cn_strength", "ControlNet strength."),
          "onUpdate:modelValue": v[12] || (v[12] = (P) => x.value = P)
        }, null, 8, ["model-value", "label", "title"]),
        q(g(lt), {
          options: R.value,
          "option-labels": { none: "🚫 none", canny: "🪞 canny" },
          "model-value": g(I),
          label: g(n)("lbl_cn_preproc", "🧪 Preprocessor"),
          title: g(n)("hrf_cn_preproc", "Preprocess the ControlNet hint image. 'none' feeds the raw upscaled image (right for tile ControlNets)."),
          "onUpdate:modelValue": v[13] || (v[13] = (P) => I.value = P)
        }, null, 8, ["options", "model-value", "label", "title"])
      ], 64)) : ee("", !0)
    ]));
  }
}), yg = /* @__PURE__ */ Fe(bg, [["__scopeId", "data-v-48578e7c"]]), wg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yg
}, Symbol.toStringTag, { value: "Module" })), xg = {
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
  FiLTileAssembly: {
    id: "FiLTileAssembly",
    title: "FiL Tile Assembly",
    body: "Recombines a batch of processed tiles back into one image.",
    bullets: [
      "Wire `layout` straight from Upscaler Advanced/Simple's `layout` output — no manual grid setup.",
      "`tiles` must be the same order/count as when they were produced (process each tile, don't reorder).",
      "Overlap zones are feathered automatically from the real tile positions — no extra padding widget."
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
}, Sg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HELP_DEFAULTS: xg
}, Symbol.toStringTag, { value: "Module" }));
//# sourceMappingURL=fil_design_imagemind.js.map
