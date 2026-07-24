(function(){try{var s=document.createElement("style");s.textContent=".fil-color-picker[data-v-c4d5f476]{display:flex;flex-direction:column;gap:8px;padding:8px;width:176px;box-sizing:border-box}.fil-cp-sv[data-v-c4d5f476]{position:relative;width:100%;height:100px;border-radius:4px;cursor:crosshair;touch-action:none}.fil-cp-sv-white[data-v-c4d5f476]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to right,#fff,#fff0);border-radius:4px}.fil-cp-sv-black[data-v-c4d5f476]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to top,#000,#0000);border-radius:4px}.fil-cp-sv-thumb[data-v-c4d5f476]{position:absolute;width:10px;height:10px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hue[data-v-c4d5f476]{position:relative;width:100%;height:12px;border-radius:6px;background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red);cursor:pointer;touch-action:none}.fil-cp-hue-thumb[data-v-c4d5f476]{position:absolute;top:50%;width:12px;height:12px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hex-row[data-v-c4d5f476]{display:flex;align-items:center;gap:6px}.fil-cp-swatch[data-v-c4d5f476]{width:22px;height:22px;border-radius:4px;border:1px solid rgba(255,255,255,.25);flex-shrink:0}.fil-cp-hex-input[data-v-c4d5f476]{flex:1;min-width:0;height:22px;box-sizing:border-box;border-radius:4px;border:1px solid rgba(255,255,255,.2);background:#00000040;color:#f2f2f2;font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:12px;padding:0 6px;outline:none}.fil-cp-hex-input[data-v-c4d5f476]:focus{border-color:#ffffff80}.fil-cp-presets[data-v-c4d5f476]{display:grid;grid-template-columns:repeat(5,1fr);gap:4px}.fil-color-swatch[data-v-c4d5f476]{width:24px;height:24px;border-radius:4px;border:2px solid transparent;background:var(--swatch);cursor:pointer;transition:border-color .08s,transform .08s;outline:none;box-sizing:border-box}.fil-color-swatch[data-v-c4d5f476]:hover{border-color:#ffffff80;transform:scale(1.15)}.fil-color-swatch.is-active[data-v-c4d5f476]{border-color:#fff;box-shadow:0 0 0 1px var(--swatch)}.fil-node-shell[data-v-15f48dad]{position:relative}.fil-icon[data-v-dfb78d9f]{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;line-height:0}.fil-icon[data-v-dfb78d9f] svg{width:100%;height:100%}.fil-modal-backdrop[data-v-00452928]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000;display:flex;align-items:center;justify-content:center;background:#0000008c;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.fil-modal-panel[data-v-00452928]{width:90%;max-height:80vh;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:10px;box-shadow:0 20px 60px #00000080;display:flex;flex-direction:column;overflow:hidden}.fil-modal-header[data-v-00452928]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08)}.fil-modal-title[data-v-00452928]{font-size:14px;font-weight:600;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-close[data-v-00452928]{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;border:none;background:transparent;color:var(--fil-muted, rgba(255, 255, 255, .5));cursor:pointer;transition:background .08s,color .08s}.fil-modal-close[data-v-00452928]:hover{background:#ffffff14;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-body[data-v-00452928]{flex:1;overflow-y:auto;padding:16px}.fil-modal-enter-active[data-v-00452928],.fil-modal-leave-active[data-v-00452928]{transition:opacity .15s ease}.fil-modal-enter-from[data-v-00452928],.fil-modal-leave-to[data-v-00452928]{opacity:0}.fil-modal-enter-active .fil-modal-panel[data-v-00452928],.fil-modal-leave-active .fil-modal-panel[data-v-00452928]{transition:transform .15s ease}.fil-modal-enter-from .fil-modal-panel[data-v-00452928],.fil-modal-leave-to .fil-modal-panel[data-v-00452928]{transform:scale(.95) translateY(8px)}.fil-help-title[data-v-536c1547]{margin:0 0 12px;font-size:16px;font-weight:700;color:var(--fil-text, rgba(255,255,255,.9))}.fil-help-body[data-v-536c1547]{margin:0 0 12px;font-size:13px;line-height:1.6;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet[data-v-536c1547]{display:flex;gap:6px;align-items:flex-start;margin-bottom:6px;font-size:13px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet>span[data-v-536c1547]{flex:1}.fil-help-table[data-v-536c1547]{width:100%;border-collapse:collapse;margin-top:8px;font-size:12px}.fil-help-table th[data-v-536c1547],.fil-help-table td[data-v-536c1547]{text-align:left;padding:6px 10px;border-bottom:1px solid rgba(255,255,255,.06)}.fil-help-table th[data-v-536c1547]{font-weight:600;color:var(--fil-text, rgba(255,255,255,.85))}.fil-help-table td[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.6))}.fil-help-code[data-v-536c1547]{background:#0000004d;border-radius:6px;padding:12px;margin-top:10px;overflow-x:auto;font-size:12px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-empty[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.4));font-size:13px}.fil-toast-stack[data-v-08cc58fa]{position:fixed;right:20px;bottom:20px;z-index:100001;display:flex;flex-direction:column;gap:8px;pointer-events:none;max-width:min(360px,90vw)}.fil-toast[data-v-08cc58fa]{pointer-events:auto;display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:8px;background:var(--fil-panel, #171b22);color:var(--fil-text, #e8edf3);border:1px solid var(--fil-panel-alt, #2a3041);border-left:3px solid var(--toast-color, var(--fil-muted));box-shadow:0 6px 22px #0000006b;font:12.5px/1.45 system-ui,sans-serif;animation:fil-toast-in-08cc58fa .18s cubic-bezier(.2,.7,.3,1)}@keyframes fil-toast-in-08cc58fa{0%{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}.fil-toast-dot[data-v-08cc58fa]{flex:none;width:8px;height:8px;margin-top:4px;border-radius:50%;background:var(--toast-color, var(--fil-muted))}.fil-toast-text[data-v-08cc58fa]{flex:1;min-width:0;align-self:center}.fil-toast-action[data-v-08cc58fa]{flex:none;cursor:pointer;padding:4px 8px;border-radius:4px;background:#ffffff0f;color:inherit;border:none;font:inherit;transition:background .12s}.fil-toast-action[data-v-08cc58fa]:hover{background:#ffffff24}.fil-toast-close[data-v-08cc58fa]{flex:none;align-self:flex-start;cursor:pointer;width:18px;height:18px;padding:0;border:none;background:none;color:var(--fil-muted);opacity:.6;transition:opacity .12s;font-size:16px;line-height:18px}.fil-toast-close[data-v-08cc58fa]:hover{opacity:1}.fil-w-btn[data-v-1c6537e0]{box-sizing:border-box;padding:var(--fil-row-pad);border-radius:6px;background:#ffffff0d;border:1px solid rgba(255,255,255,.14);color:var(--fil-text, rgba(255, 255, 255, .85));font-family:ui-sans-serif,system-ui,sans-serif;font-size:12px;cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;display:inline-flex;align-items:center;justify-content:center;gap:6px}.fil-w-btn[data-v-1c6537e0]:hover:not(:disabled){background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #fff)}.fil-w-btn[data-v-1c6537e0]:active{transform:translateY(1px)}.fil-w-btn[data-v-1c6537e0]:disabled{opacity:.4;cursor:default}.fil-w-btn-accent[data-v-1c6537e0]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #fff)}.fil-w-btn-danger[data-v-1c6537e0]{color:var(--fil-danger, #ef6666)}.fil-w-btn-danger[data-v-1c6537e0]:hover:not(:disabled){background:var(--fil-danger, #ef6666);border-color:var(--fil-danger, #ef6666);color:#fff}.fil-w-btn-sm[data-v-1c6537e0]{padding:4px 8px;font-size:11px}.fil-w-btn-full[data-v-1c6537e0]{width:100%;display:block}.fil-w-btn-icon[data-v-1c6537e0]{display:inline-flex;align-items:center;justify-content:center;gap:5px}.fil-w-btn-glyph[data-v-1c6537e0] svg{width:14px;height:14px}.fil-w-btn.is-flashing[data-v-1c6537e0],.fil-w-btn.is-flashing[data-v-1c6537e0]:hover{background:var(--fil-ok, #62c987);border-color:var(--fil-ok, #62c987);color:#fff}.fil-w-btn.is-loading[data-v-1c6537e0]{cursor:wait}.fil-w-btn[data-v-1c6537e0]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-btn-spinner[data-v-1c6537e0]{display:inline-block;width:12px;height:12px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:fil-w-spin-1c6537e0 .6s linear infinite}@keyframes fil-w-spin-1c6537e0{to{transform:rotate(360deg)}}.fil-pm-root[data-v-ae1b468d]{display:flex;flex-direction:column;gap:12px;padding:4px 0}.fil-pm-card[data-v-ae1b468d]{background:#ffffff08;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:12px}.fil-pm-header[data-v-ae1b468d]{display:flex;align-items:center;gap:8px;margin-bottom:10px}.fil-pm-card--collapsed[data-v-ae1b468d]{padding:8px 12px}.fil-pm-card--collapsed .fil-pm-header[data-v-ae1b468d]{margin-bottom:0}.fil-pm-header--clickable[data-v-ae1b468d]{cursor:pointer}.fil-pm-header--clickable:hover .fil-pm-name[data-v-ae1b468d]{color:var(--fil-accent, #7c5cfc)}.fil-pm-chevron[data-v-ae1b468d]{display:inline-flex;align-items:center;color:#fff6;transition:transform .12s ease}.fil-pm-chevron--open[data-v-ae1b468d]{transform:rotate(90deg)}.fil-pm-icon[data-v-ae1b468d]{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px}.fil-pm-name[data-v-ae1b468d]{font-weight:600;font-size:14px;color:var(--fil-text, #f2f2f2)}.fil-pm-disp[data-v-ae1b468d]{font-size:11px;color:#ffffff80}.fil-pm-status[data-v-ae1b468d]{margin-left:auto;display:inline-flex;align-items:center;gap:5px;font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#fff6;white-space:nowrap}.fil-pm-dot[data-v-ae1b468d]{width:8px;height:8px;border-radius:50%;background:currentColor;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 22%,transparent)}.fil-pm-status--connected[data-v-ae1b468d]{color:var(--fil-success, #4ade80)}.fil-pm-status--configured[data-v-ae1b468d]{color:var(--fil-warning, #fbbf24)}.fil-pm-status--off[data-v-ae1b468d]{color:#ffffff4d}.fil-pm-fields[data-v-ae1b468d]{display:flex;flex-direction:column;gap:8px;margin-bottom:10px}.fil-pm-field[data-v-ae1b468d]{display:flex;flex-direction:column;gap:3px}.fil-pm-field-label[data-v-ae1b468d]{font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#ffffff80}.fil-pm-input[data-v-ae1b468d]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,monospace;font-size:13px;outline:none;transition:border-color .08s}.fil-pm-input[data-v-ae1b468d]:focus{border-color:var(--fil-accent)}.fil-pm-input.fil-pm-has-val[data-v-ae1b468d]{border-color:var(--fil-muted, #555)}.fil-pm-actions[data-v-ae1b468d]{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}.fil-pm-models[data-v-ae1b468d]{display:flex;flex-wrap:wrap;gap:4px}.fil-pm-model-tag[data-v-ae1b468d]{display:inline-flex;align-items:center;gap:3px;background:#ffffff12;border-radius:4px;padding:2px 6px;font-size:11px;color:#ffffffbf;white-space:nowrap}.fil-pm-vision-badge[data-v-ae1b468d]{font-size:10px;line-height:1}.fil-pm-err[data-v-ae1b468d]{font-size:11px;color:var(--fil-danger, #ef6666);margin-top:4px}.fil-pm-age[data-v-ae1b468d]{font-size:10px;color:#fff6;align-self:center}.fil-w-chips[data-v-3c07d909]{display:grid;gap:5px;width:100%}.fil-w-chip[data-v-3c07d909]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-3c07d909]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-3c07d909]{background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-accent);border-color:var(--fil-accent);font-weight:500;box-shadow:0 0 8px color-mix(in srgb,var(--fil-accent) 55%,transparent)}.fil-w-chip.disabled[data-v-3c07d909]{opacity:.5;cursor:default}.fil-w-chip[data-v-3c07d909]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chiplist[data-v-5ccf2e00]{display:flex;flex-direction:column;gap:5px;width:100%}.fil-w-search[data-v-5ccf2e00]{box-sizing:border-box;width:100%;padding:5px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:11px;outline:none}.fil-w-search[data-v-5ccf2e00]:focus{border-color:var(--fil-accent)}.fil-w-search[data-v-5ccf2e00]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-chip-scroll[data-v-5ccf2e00]{display:grid;gap:3px;max-height:200px;overflow-y:auto;overflow-x:hidden;padding-right:2px}.fil-w-chip-scroll[data-v-5ccf2e00]::-webkit-scrollbar{width:5px}.fil-w-chip-scroll[data-v-5ccf2e00]::-webkit-scrollbar-thumb{background:var(--fil-muted, #555);border-radius:3px}.fil-w-chip-scroll[data-v-5ccf2e00]::-webkit-scrollbar-track{background:transparent}.fil-w-chip[data-v-5ccf2e00]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-5ccf2e00]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-5ccf2e00]{background:var(--fil-accent);color:var(--fil-accent-ink, #fff);border-color:var(--fil-accent);font-weight:500}.fil-w-chip.disabled[data-v-5ccf2e00]{opacity:.5;cursor:default}.fil-w-chip[data-v-5ccf2e00]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chip-empty[data-v-5ccf2e00]{padding:8px;text-align:center;color:var(--fil-muted, #666);font-size:11px}.fil-combo[data-v-73f94a33]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-combo-label[data-v-73f94a33]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-combo-trigger[data-v-73f94a33]{grid-column:2;width:100%;box-sizing:border-box;height:30px;display:flex;align-items:center;gap:6px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer;text-align:left;-moz-appearance:none;appearance:none;-webkit-appearance:none}.fil-combo-trigger.open[data-v-73f94a33],.fil-combo-trigger[data-v-73f94a33]:focus-visible{border-color:var(--fil-accent);outline:2px solid var(--fil-accent);outline-offset:1px}.fil-combo-trigger.disabled[data-v-73f94a33]{opacity:.5;cursor:default}.fil-combo-trigger-label[data-v-73f94a33]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-chevron[data-v-73f94a33]{font-size:9px;color:var(--fil-muted, rgba(255, 255, 255, .5));flex-shrink:0}.fil-combo-badge[data-v-73f94a33]{flex-shrink:0;font-size:9px;line-height:1;padding:2px 5px;border-radius:999px;background:var(--fil-accent);color:var(--fil-accent-ink, #fff);font-weight:600}.fil-combo-panel[data-v-73f94a33]{position:fixed;z-index:10001;box-sizing:border-box;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:8px;box-shadow:0 12px 32px #0006;display:flex;flex-direction:column;overflow:hidden;padding:6px}.fil-combo-search[data-v-73f94a33]{box-sizing:border-box;width:100%;margin-bottom:6px;padding:6px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-combo-search[data-v-73f94a33]:focus{border-color:var(--fil-accent)}.fil-combo-list[data-v-73f94a33]{display:flex;flex-direction:column;gap:2px;max-height:240px;overflow-y:auto}.fil-combo-option[data-v-73f94a33]{display:flex;align-items:center;gap:6px;width:100%;box-sizing:border-box;padding:6px 8px;border-radius:5px;border:none;background:transparent;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;text-align:left;cursor:pointer;outline:none}.fil-combo-option.active[data-v-73f94a33]{background:#ffffff14}.fil-combo-option.selected[data-v-73f94a33]{color:var(--fil-accent);font-weight:600}.fil-combo-option-label[data-v-73f94a33]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-empty[data-v-73f94a33]{padding:10px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-w-info[data-v-851660c1]{font-size:11px;line-height:1.5;color:#ffffff73;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.fil-w-info[data-ok][data-v-851660c1]{color:var(--fil-ok, #62c987)}.fil-w-info[data-err][data-v-851660c1]{color:var(--fil-danger, #ef6666)}.fil-w-numfield[data-v-5fe162a0]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-numfield.no-label[data-v-5fe162a0]{display:contents}.fil-w-numfield-label[data-v-5fe162a0]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-numfield:not(.no-label) .fil-w-num-wrap[data-v-5fe162a0]{grid-column:2}.fil-w-num-wrap[data-v-5fe162a0]{position:relative;width:100%;min-width:0}.fil-w-num[data-v-5fe162a0]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 20px 7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:14px;text-align:left;outline:none;transition:border-color .08s}.fil-w-num[data-v-5fe162a0]:focus{border-color:var(--fil-accent)}.fil-w-num[data-v-5fe162a0]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-num[data-v-5fe162a0]:disabled{opacity:.5}.fil-w-num-step[data-v-5fe162a0]{position:absolute;top:1px;right:1px;bottom:1px;width:17px;display:flex;flex-direction:column;border-left:1px solid var(--fil-muted, #3a3d40);overflow:hidden;border-radius:0 5px 5px 0}.fil-w-num-btn[data-v-5fe162a0]{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;border:none;background:transparent;color:var(--fil-muted, rgba(255, 255, 255, .55));font-size:7px;line-height:1;cursor:pointer;padding:0;transition:color .08s,background .08s}.fil-w-num-btn[data-v-5fe162a0]:last-child{border-top:1px solid var(--fil-muted, #3a3d40)}.fil-w-num-btn[data-v-5fe162a0]:hover:not(:disabled){color:var(--fil-accent);background:#ffffff12}.fil-w-num-btn[data-v-5fe162a0]:disabled{opacity:.3;cursor:default}.fil-w-section[data-v-686d0388]{box-sizing:border-box;width:100%;padding:var(--fil-row-pad);border:none;border-radius:5px;background:#ffffff0a;color:var(--fil-muted, rgba(255, 255, 255, .7));font-family:inherit;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;cursor:pointer;text-align:left;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s;display:flex;align-items:center;gap:6px}.fil-w-section[data-v-686d0388]:hover:not(:disabled){background:#ffffff14;color:#fff}.fil-w-section[data-v-686d0388]:disabled{cursor:default}.fil-w-section[data-v-686d0388]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-section-arrow[data-v-686d0388]{display:inline-block;width:8px;font-size:9px;color:var(--fil-accent)}.fil-w-segmented[data-v-738d9e4d]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-segmented-label[data-v-738d9e4d]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-pill[data-v-738d9e4d]{grid-column:2;display:flex;gap:0;min-width:0;background:#ffffff0f;border-radius:7px;padding:3px}.fil-w-pill.disabled[data-v-738d9e4d]{opacity:.5}.fil-w-seg[data-v-738d9e4d]{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center;padding:6px;border:none;border-radius:5px;background:transparent;font-family:inherit;font-size:12px;color:var(--fil-muted, rgba(255, 255, 255, .55));cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s}.fil-w-seg[data-v-738d9e4d]:hover:not(.active){color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-w-seg.active[data-v-738d9e4d]{background:var(--fil-accent);color:var(--fil-accent-ink, #fff);font-weight:500}.fil-w-seg[data-v-738d9e4d]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-select[data-v-77c303be]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-select-label[data-v-77c303be]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-select-input[data-v-77c303be]{grid-column:2;width:100%;box-sizing:border-box;height:30px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer}.fil-w-select-input[data-v-77c303be]:focus{border-color:var(--fil-accent)}.fil-w-select-input[data-v-77c303be]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-select-input[data-v-77c303be]:disabled{opacity:.5;cursor:default}.fil-w-slider[data-v-785fba56]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-slider-label[data-v-785fba56]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-slider-row[data-v-785fba56]{grid-column:2;display:flex;align-items:center;gap:6px;min-width:0}.fil-w-slider-range[data-v-785fba56]{flex:1 1 auto;min-width:0;max-width:220px;accent-color:var(--fil-accent);cursor:pointer}.fil-w-slider-range[data-v-785fba56]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-slider-row[data-v-785fba56] .fil-w-num-wrap{width:70px;flex:none}.fil-style-picker[data-v-057d3fa5]{display:flex;flex-direction:column;gap:10px}.fil-style-cats[data-v-057d3fa5]{display:flex;flex-wrap:wrap;gap:6px}.fil-style-cat[data-v-057d3fa5]{box-sizing:border-box;padding:5px 10px;border-radius:999px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .2));background:#ffffff0a;color:var(--fil-text, rgba(255, 255, 255, .8));font-size:11px;cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-cat[data-v-057d3fa5]:hover{border-color:var(--fil-accent)}.fil-style-cat.active[data-v-057d3fa5]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #fff);font-weight:500}.fil-style-cat[data-v-057d3fa5]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-style-search[data-v-057d3fa5]{box-sizing:border-box;width:100%;padding:7px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-style-search[data-v-057d3fa5]:focus{border-color:var(--fil-accent)}.fil-style-grid[data-v-057d3fa5]{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:8px;max-height:50vh;overflow-y:auto;padding-right:2px}.fil-style-tile[data-v-057d3fa5]{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px 6px;border-radius:8px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .14));background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-tile[data-v-057d3fa5]:hover{border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-style-tile.active[data-v-057d3fa5]{border-color:var(--fil-accent);background:color-mix(in srgb,var(--fil-accent) 14%,transparent)}.fil-style-tile[data-v-057d3fa5]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-style-tile-preview[data-v-057d3fa5]{width:100%;aspect-ratio:1;border-radius:6px;background:#ffffff0d;display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:22px}.fil-style-tile-img[data-v-057d3fa5]{width:100%;height:100%;object-fit:cover}.fil-style-tile-label[data-v-057d3fa5]{font-size:10px;text-align:center;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.fil-style-empty[data-v-057d3fa5]{grid-column:1 / -1;padding:20px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-w-toggle[data-v-d39b7896]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-toggle-label[data-v-d39b7896]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-toggle.bare[data-v-d39b7896]{display:flex;width:auto;gap:4px}.fil-w-toggle.bare .fil-w-toggle-label[data-v-d39b7896]{font-size:10px;white-space:nowrap}.fil-w-switch[data-v-d39b7896]{grid-column:2;justify-self:start;width:36px;height:20px;padding:2px;box-sizing:border-box;border:none;border-radius:10px;background:#ffffff24;cursor:pointer;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .12s}.fil-w-switch.on[data-v-d39b7896]{background:var(--fil-accent)}.fil-w-switch[data-v-d39b7896]:disabled{opacity:.5;cursor:default}.fil-w-switch[data-v-d39b7896]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-switch-thumb[data-v-d39b7896]{display:block;width:16px;height:16px;border-radius:50%;background:#fff;transition:transform .12s}.fil-w-switch.on .fil-w-switch-thumb[data-v-d39b7896]{transform:translate(16px)}div.fil-seed-root[data-v-9971583a]{display:flex;flex-direction:row;align-items:center;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;background:transparent;border:none;border-radius:0;box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none}.fil-seed-display[data-v-9971583a]{flex:1;min-width:0;box-sizing:border-box;height:34px;background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);padding:6px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:19px;text-align:center;outline:none;transition:border-color .08s}.fil-seed-display[data-v-9971583a]:focus{border-color:var(--fil-accent)}.fil-seed-display[readonly][data-v-9971583a]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-seed-actions[data-v-9971583a]{display:flex;gap:5px;flex-shrink:0}.fil-seed-actions[data-v-9971583a] .fil-w-btn{padding:0;width:34px;height:34px;font-size:16px}.picker-container[data-v-a16c02ab]{display:flex;flex-direction:column;gap:12px;color:var(--fil-text, #e8edf3)}.provider-tabs[data-v-a16c02ab]{display:flex;gap:6px;overflow-x:auto;padding-bottom:6px;scrollbar-width:thin}.tab-btn[data-v-a16c02ab]{display:flex;align-items:center;gap:6px;padding:7px 10px;border-radius:8px;border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-muted, #9ca8b5);font-size:12px;cursor:pointer;white-space:nowrap;flex-shrink:0;transition:all .15s ease}.tab-btn[data-v-a16c02ab]:hover{background:#ffffff14;color:var(--fil-text, #e8edf3)}.tab-btn.active[data-v-a16c02ab]{background:var(--fil-panel-alt, #222934);border-color:var(--fil-accent, #f08a45);color:var(--fil-accent, #f08a45);font-weight:600}.tab-badge[data-v-a16c02ab]{font-size:10px;background:var(--fil-pill-bg);padding:1px 5px;border-radius:99px}.provider-status-bar[data-v-a16c02ab]{display:flex;justify-content:space-between;align-items:center;background:#0003;padding:8px 12px;border-radius:6px;font-size:12px}.status-info[data-v-a16c02ab]{display:flex;align-items:center;gap:8px}.provider-name[data-v-a16c02ab]{font-weight:600}.status-badge[data-v-a16c02ab]{font-size:11px;padding:2px 6px;border-radius:4px}.status-badge.online[data-v-a16c02ab]{color:var(--fil-ok, #62c987)}.status-badge.loading[data-v-a16c02ab]{color:var(--fil-accent, #f08a45)}.status-badge.error[data-v-a16c02ab]{color:var(--fil-danger, #ef6666)}.age-label[data-v-a16c02ab]{font-size:10px;color:var(--fil-muted, #9ca8b5)}.filter-controls[data-v-a16c02ab]{display:flex;flex-direction:column;gap:8px}.search-input-wrap[data-v-a16c02ab]{position:relative;display:flex;align-items:center}.search-icon[data-v-a16c02ab]{position:absolute;left:10px;color:var(--fil-muted, #9ca8b5)}.search-input[data-v-a16c02ab]{width:100%;box-sizing:border-box;height:32px;padding:6px 30px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:var(--fil-field-radius, 6px);color:var(--fil-text, #e8edf3);font-size:12px;outline:none}.search-input[data-v-a16c02ab]:focus{border-color:var(--fil-accent, #f08a45)}.clear-search[data-v-a16c02ab]{position:absolute;right:10px;background:none;border:none;color:var(--fil-muted, #9ca8b5);cursor:pointer}.filter-segments[data-v-a16c02ab]{display:flex;gap:8px;min-width:0}.filter-segments[data-v-a16c02ab]>*{flex:1;min-width:0}.models-list-wrapper[data-v-a16c02ab]{height:320px;overflow-y:auto;background:#00000026;border-radius:8px;border:1px solid rgba(255,255,255,.06);padding:8px}.empty-state[data-v-a16c02ab]{display:flex;align-items:center;justify-content:center;height:100%;color:var(--fil-muted, #9ca8b5);font-size:12px}.models-container.list[data-v-a16c02ab]{display:flex;flex-direction:column;gap:6px}.models-container.grid[data-v-a16c02ab]{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:8px}.models-container.grid .model-card[data-v-a16c02ab]{flex-direction:column;align-items:flex-start;gap:8px;padding:10px 12px}.models-container.grid .model-main[data-v-a16c02ab]{width:100%}.models-container.grid .model-tags[data-v-a16c02ab]{width:100%;justify-content:flex-start}.model-card[data-v-a16c02ab]{display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:#ffffff08;border:1px solid rgba(255,255,255,.06);border-radius:6px;cursor:pointer;transition:all .12s ease}.model-card[data-v-a16c02ab]:hover{background:#ffffff12;border-color:#ffffff26}.model-card.selected[data-v-a16c02ab]{background:#f08a4526;border-color:var(--fil-accent, #f08a45)}.model-main[data-v-a16c02ab]{display:flex;align-items:center;gap:8px;min-width:0}.type-icon[data-v-a16c02ab]{font-size:14px}.model-name[data-v-a16c02ab]{font-size:12px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.model-tags[data-v-a16c02ab]{display:flex;gap:4px;flex-shrink:0}.tag[data-v-a16c02ab]{font-size:9px;padding:2px 6px;border-radius:4px;font-weight:600;text-transform:uppercase}.tag.vision[data-v-a16c02ab]{background:#f08a4526;color:var(--fil-accent, #f08a45)}.tag.text[data-v-a16c02ab],.tag.local[data-v-a16c02ab],.tag.free[data-v-a16c02ab],.tag.paid[data-v-a16c02ab]{background:var(--fil-pill-bg);color:var(--fil-muted, #9ca8b5)}.picker-footer[data-v-a16c02ab]{display:flex;justify-content:space-between;align-items:center;padding-top:8px}.selection-summary[data-v-a16c02ab]{font-size:12px}.selection-summary .muted[data-v-a16c02ab]{color:var(--fil-muted, #9ca8b5)}.footer-actions[data-v-a16c02ab]{display:flex;gap:8px}.fil-provider-root[data-v-1a5b41f9]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;min-width:0}.picker-trigger-btn[data-v-1a5b41f9]{display:flex;flex-direction:column;gap:6px;width:100%;box-sizing:border-box;padding:8px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-pill-border);border-radius:var(--fil-field-radius, 8px);color:var(--fil-text, #f2f2f2);cursor:pointer;text-align:left;transition:border-color .15s ease,background .15s ease;outline:none}.picker-trigger-btn[data-v-1a5b41f9]:hover{border-color:var(--fil-accent, #f08a45);background:var(--fil-pill-bg)}.picker-trigger-btn[data-v-1a5b41f9]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px;border-color:var(--fil-accent)}.trigger-header[data-v-1a5b41f9]{display:flex;justify-content:space-between;align-items:center;width:100%}.provider-badge[data-v-1a5b41f9]{display:flex;align-items:center;gap:6px;font-weight:600;font-size:13px;color:var(--fil-accent, #f08a45)}.open-icon[data-v-1a5b41f9]{font-size:11px;background:var(--fil-pill-bg);padding:2px 6px;border-radius:4px;color:var(--fil-text, #e8edf3)}.trigger-model[data-v-1a5b41f9]{display:flex;align-items:center;gap:6px;font-size:12px;min-width:0}.model-label[data-v-1a5b41f9]{color:var(--fil-muted, #9ca8b5);flex-shrink:0}.model-name[data-v-1a5b41f9]{font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.fil-scanner-root[data-v-ab7f694f]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;width:100%;box-sizing:border-box;min-width:0}.fil-section-block[data-v-ab7f694f]{display:flex;flex-direction:column;gap:5px;min-width:0}.fil-w-row[data-v-ab7f694f]{display:flex;flex-direction:column;gap:3px;min-width:0}.fil-style-pair-row[data-v-ab7f694f]{display:flex;gap:4px;min-width:0}.fil-style-pair-item[data-v-ab7f694f]{flex:1;min-width:0}.fil-scanner-seed-row[data-v-ab7f694f]{display:flex;gap:6px;min-width:0}.fil-scanner-seed-field[data-v-ab7f694f]{flex:1.3;min-width:0;box-sizing:border-box;height:34px;background:#00000059;border:1px solid rgba(255,255,255,.08);border-radius:var(--fil-pill-radius);padding:0 12px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:13px;text-align:center;outline:none;transition:border-color .08s}.fil-scanner-seed-field[data-v-ab7f694f]:focus{border-color:var(--fil-accent)}.fil-scanner-seed-field.is-random[data-v-ab7f694f]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-scanner-seed-pill[data-v-ab7f694f]{flex:1;min-width:0;box-sizing:border-box;height:34px;padding:0 8px;border-radius:var(--fil-pill-radius);border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-text, #e8edf3);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none}.fil-scanner-seed-pill[data-v-ab7f694f]:hover{background:#ffffff1f}.fil-scanner-seed-pill.active[data-v-ab7f694f]{background:#ffffff29;border-color:#fff3}.fil-scanner-seed-pill[data-v-ab7f694f]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-scanner-seed-pill-accent[data-v-ab7f694f]{background:var(--fil-accent);border-color:var(--fil-accent);color:#241206;font-weight:700}.fil-scanner-seed-pill-accent[data-v-ab7f694f]:hover{filter:brightness(1.08);background:var(--fil-accent)}.fil-cleaner-root[data-v-88b84a03]{display:flex;flex-direction:column;gap:6px;padding:var(--fil-node-pad, 8px);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cleaner-row[data-v-88b84a03]{all:unset;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:6px 10px;border-radius:var(--fil-field-radius, 6px);border:1px solid var(--fil-glass-border, rgba(255, 255, 255, .08));background:var(--fil-glass-bg, rgba(255, 255, 255, .04));cursor:pointer;-webkit-user-select:none;user-select:none;transition:background .12s,border-color .12s}.fil-cleaner-row[data-v-88b84a03]:hover{background:#ffffff14}.fil-cleaner-row.active[data-v-88b84a03]{border-color:var(--fil-accent);background:color-mix(in srgb,var(--fil-accent) 14%,transparent)}.fil-cleaner-dot[data-v-88b84a03]{width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,.3);flex:none;transition:border-color .12s,background .12s;display:flex;align-items:center;justify-content:center}.fil-cleaner-dot[data-v-88b84a03]:after{content:\"✓\";font-size:10px;line-height:1;color:var(--fil-accent-ink, #fff);opacity:0;transition:opacity .12s}.fil-cleaner-row.active .fil-cleaner-dot[data-v-88b84a03]{background:var(--fil-accent);border-color:var(--fil-accent)}.fil-cleaner-row.active .fil-cleaner-dot[data-v-88b84a03]:after{opacity:1}.fil-cleaner-label[data-v-88b84a03]{flex:1;font-size:12px;font-weight:500}.fil-cmp-root[data-v-2abe5720]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cmp-canvas-wrap[data-v-2abe5720]{position:relative;width:100%;height:220px;border-radius:var(--fil-field-radius);border:1px solid var(--fil-glass-border);overflow:hidden;background:linear-gradient(45deg,rgba(255,255,255,.04) 25%,transparent 25%,transparent 75%,rgba(255,255,255,.04) 75%) 0 0/16px 16px,linear-gradient(45deg,rgba(255,255,255,.04) 25%,transparent 25%,transparent 75%,rgba(255,255,255,.04) 75%) 8px 8px/16px 16px,#0d0f13}.fil-cmp-canvas[data-v-2abe5720]{display:block;width:100%;height:100%;touch-action:none}.fil-cmp-canvas.is-wipe[data-v-2abe5720]{cursor:ew-resize}.fil-cmp-placeholder[data-v-2abe5720]{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;text-align:center;padding:12px;color:var(--fil-muted, rgba(255, 255, 255, .5));font-size:12px;pointer-events:none}.fil-cmp-save-row[data-v-2abe5720]{display:grid;grid-template-columns:1fr 1fr;gap:5px}.fil-cmp-settings[data-v-2abe5720]{display:flex;flex-direction:column;gap:5px}.fil-up-root[data-v-ff1dd2df]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-up-row[data-v-ff1dd2df]{display:grid;grid-template-columns:minmax(auto,max-content) 64px minmax(auto,max-content) 64px;align-items:center;gap:var(--fil-node-gap)}.fil-up-row-overlap[data-v-ff1dd2df]{grid-template-columns:minmax(auto,max-content) 64px minmax(auto,max-content) 64px auto}.fil-w-label[data-v-ff1dd2df]{font-size:11px;color:var(--fil-muted, rgba(255,255,255,.55))}.fil-hrf-root[data-v-48578e7c]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-hrf-seed-row[data-v-48578e7c]{display:flex;gap:6px;min-width:0}.fil-hrf-seed-field[data-v-48578e7c]{flex:1.3;min-width:0;box-sizing:border-box;height:34px;background:#00000059;border:1px solid rgba(255,255,255,.08);border-radius:var(--fil-pill-radius);padding:0 12px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:13px;text-align:center;outline:none;transition:border-color .08s}.fil-hrf-seed-field[data-v-48578e7c]:focus{border-color:var(--fil-accent)}.fil-hrf-seed-field.is-random[data-v-48578e7c]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-hrf-seed-pill[data-v-48578e7c]{flex:1;min-width:0;box-sizing:border-box;height:34px;padding:0 8px;border-radius:var(--fil-pill-radius);border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-text, #e8edf3);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none}.fil-hrf-seed-pill[data-v-48578e7c]:hover{background:#ffffff1f}.fil-hrf-seed-pill.active[data-v-48578e7c]{background:#ffffff29;border-color:#fff3}.fil-hrf-seed-pill[data-v-48578e7c]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-hrf-seed-pill-accent[data-v-48578e7c]{background:var(--fil-accent);border-color:var(--fil-accent);color:#241206;font-weight:700}.fil-hrf-seed-pill-accent[data-v-48578e7c]:hover{filter:brightness(1.08);background:var(--fil-accent)}\n";document.head.appendChild(s);}catch(e){}})();
import { app as ul } from "/scripts/app.js";
/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ho(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ce = {}, mn = [], bt = () => {
}, dl = () => !1, $s = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Vs = (e) => e.startsWith("onUpdate:"), Pe = Object.assign, Uo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, za = Object.prototype.hasOwnProperty, be = (e, t) => za.call(e, t), ie = Array.isArray, hn = (e) => Qn(e) === "[object Map]", Bs = (e) => Qn(e) === "[object Set]", ci = (e) => Qn(e) === "[object Date]", ue = (e) => typeof e == "function", Me = (e) => typeof e == "string", et = (e) => typeof e == "symbol", ve = (e) => e !== null && typeof e == "object", fl = (e) => (ve(e) || ue(e)) && ue(e.then) && ue(e.catch), pl = Object.prototype.toString, Qn = (e) => pl.call(e), Ga = (e) => Qn(e).slice(8, -1), ml = (e) => Qn(e) === "[object Object]", Hs = (e) => Me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Tn = /* @__PURE__ */ Ho(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Us = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ka = /-\w/g, ze = Us(
  (e) => e.replace(Ka, (t) => t.slice(1).toUpperCase())
), qa = /\B([A-Z])/g, Ut = Us(
  (e) => e.replace(qa, "-$1").toLowerCase()
), js = Us((e) => e.charAt(0).toUpperCase() + e.slice(1)), so = Us(
  (e) => e ? `on${js(e)}` : ""
), vt = (e, t) => !Object.is(e, t), hs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, hl = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Ws = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Xa = (e) => {
  const t = Me(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ui;
const zs = () => ui || (ui = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qe(e) {
  if (ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = Me(s) ? Za(s) : qe(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (Me(e) || ve(e))
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
  if (Me(e))
    t = e;
  else if (ie(e))
    for (let n = 0; n < e.length; n++) {
      const s = me(e[n]);
      s && (t += s + " ");
    }
  else if (ve(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const er = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", tr = /* @__PURE__ */ Ho(er);
function gl(e) {
  return !!e || e === "";
}
function nr(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Zn(e[s], t[s]);
  return n;
}
function Zn(e, t) {
  if (e === t) return !0;
  let n = ci(e), s = ci(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = et(e), s = et(t), n || s)
    return e === t;
  if (n = ie(e), s = ie(t), n || s)
    return n && s ? nr(e, t) : !1;
  if (n = ve(e), s = ve(t), n || s) {
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
function sr(e, t) {
  return e.findIndex((n) => Zn(n, t));
}
const _l = (e) => !!(e && e.__v_isRef === !0), Z = (e) => Me(e) ? e : e == null ? "" : ie(e) || ve(e) && (e.toString === pl || !ue(e.toString)) ? _l(e) ? Z(e.value) : JSON.stringify(e, vl, 2) : String(e), vl = (e, t) => _l(t) ? vl(e, t.value) : hn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[oo(s, i) + " =>"] = o, n),
    {}
  )
} : Bs(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => oo(n))
} : et(t) ? oo(t) : ve(t) && !ie(t) && !ml(t) ? String(t) : t, oo = (e, t = "") => {
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
let Ee;
class bl {
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
function yl(e) {
  return new bl(e);
}
function wl() {
  return Ee;
}
function or(e, t = !1) {
  Ee && Ee.cleanups.push(e);
}
let Le;
const io = /* @__PURE__ */ new WeakSet();
class xl {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ee && (Ee.active ? Ee.effects.push(this) : this.flags &= -2);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Cl(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, di(this), Fl(this);
    const t = Le, n = at;
    Le = this, at = !0;
    try {
      return this.fn();
    } finally {
      Ll(this), Le = t, at = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        zo(t);
      this.deps = this.depsTail = void 0, di(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? io.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let Sl = 0, Pn, Rn;
function Cl(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Rn, Rn = e;
    return;
  }
  e.next = Pn, Pn = e;
}
function jo() {
  Sl++;
}
function Wo() {
  if (--Sl > 0)
    return;
  if (Rn) {
    let t = Rn;
    for (Rn = void 0; t; ) {
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
function Fl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ll(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), zo(s), ir(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function yo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ml(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ml(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === zn) || (e.globalVersion = zn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !yo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Le, s = at;
  Le = e, at = !0;
  try {
    Fl(e);
    const o = e.fn(e._value);
    (t.version === 0 || vt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Le = n, at = s, Ll(e), e.flags &= -3;
  }
}
function zo(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      zo(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ir(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let at = !0;
const Il = [];
function xt() {
  Il.push(at), at = !1;
}
function St() {
  const e = Il.pop();
  at = e === void 0 ? !0 : e;
}
function di(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Le;
    Le = void 0;
    try {
      t();
    } finally {
      Le = n;
    }
  }
}
let zn = 0;
class lr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Go {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Le || !at || Le === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Le)
      n = this.activeLink = new lr(Le, this), Le.deps ? (n.prevDep = Le.depsTail, Le.depsTail.nextDep = n, Le.depsTail = n) : Le.deps = Le.depsTail = n, kl(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Le.depsTail, n.nextDep = void 0, Le.depsTail.nextDep = n, Le.depsTail = n, Le.deps === n && (Le.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, zn++, this.notify(t);
  }
  notify(t) {
    jo();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Wo();
    }
  }
}
function kl(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        kl(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ys = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ Symbol(
  ""
), wo = /* @__PURE__ */ Symbol(
  ""
), Gn = /* @__PURE__ */ Symbol(
  ""
);
function Be(e, t, n) {
  if (at && Le) {
    let s = ys.get(e);
    s || ys.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Go()), o.map = s, o.key = n), o.track();
  }
}
function At(e, t, n, s, o, i) {
  const l = ys.get(e);
  if (!l) {
    zn++;
    return;
  }
  const a = (r) => {
    r && r.trigger();
  };
  if (jo(), t === "clear")
    l.forEach(a);
  else {
    const r = ie(e), u = r && Hs(n);
    if (r && n === "length") {
      const c = Number(s);
      l.forEach((d, f) => {
        (f === "length" || f === Gn || !et(f) && f >= c) && a(d);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && a(l.get(n)), u && a(l.get(Gn)), t) {
        case "add":
          r ? u && a(l.get("length")) : (a(l.get(on)), hn(e) && a(l.get(wo)));
          break;
        case "delete":
          r || (a(l.get(on)), hn(e) && a(l.get(wo)));
          break;
        case "set":
          hn(e) && a(l.get(on));
          break;
      }
  }
  Wo();
}
function ar(e, t) {
  const n = ys.get(e);
  return n && n.get(t);
}
function dn(e) {
  const t = /* @__PURE__ */ he(e);
  return t === e ? t : (Be(t, "iterate", Gn), /* @__PURE__ */ Je(e) ? t : t.map(rt));
}
function Gs(e) {
  return Be(e = /* @__PURE__ */ he(e), "iterate", Gn), e;
}
function gt(e, t) {
  return /* @__PURE__ */ Et(e) ? bn(/* @__PURE__ */ yt(e) ? rt(t) : t) : rt(t);
}
const rr = {
  __proto__: null,
  [Symbol.iterator]() {
    return lo(this, Symbol.iterator, (e) => gt(this, e));
  },
  concat(...e) {
    return dn(this).concat(
      ...e.map((t) => ie(t) ? dn(t) : t)
    );
  },
  entries() {
    return lo(this, "entries", (e) => (e[1] = gt(this, e[1]), e));
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
    return ao(this, "includes", e);
  },
  indexOf(...e) {
    return ao(this, "indexOf", e);
  },
  join(e) {
    return dn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ao(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ct(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Cn(this, "pop");
  },
  push(...e) {
    return Cn(this, "push", e);
  },
  reduce(e, ...t) {
    return fi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return fi(this, "reduceRight", e, t);
  },
  shift() {
    return Cn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ct(this, "some", e, t, void 0, arguments);
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
    return lo(this, "values", (e) => gt(this, e));
  }
};
function lo(e, t, n) {
  const s = Gs(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ Je(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = n(i.value)), i;
  }), o;
}
const cr = Array.prototype;
function Ct(e, t, n, s, o, i) {
  const l = Gs(e), a = l !== e && !/* @__PURE__ */ Je(e), r = l[t];
  if (r !== cr[t]) {
    const d = r.apply(e, i);
    return a ? rt(d) : d;
  }
  let u = n;
  l !== e && (a ? u = function(d, f) {
    return n.call(this, gt(e, d), f, e);
  } : n.length > 2 && (u = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const c = r.call(l, u, s);
  return a && o ? o(c) : c;
}
function fi(e, t, n, s) {
  const o = Gs(e), i = o !== e && !/* @__PURE__ */ Je(e);
  let l = n, a = !1;
  o !== e && (i ? (a = s.length === 0, l = function(u, c, d) {
    return a && (a = !1, u = gt(e, u)), n.call(this, u, gt(e, c), d, e);
  }) : n.length > 3 && (l = function(u, c, d) {
    return n.call(this, u, c, d, e);
  }));
  const r = o[t](l, ...s);
  return a ? gt(e, r) : r;
}
function ao(e, t, n) {
  const s = /* @__PURE__ */ he(e);
  Be(s, "iterate", Gn);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Ks(n[0]) ? (n[0] = /* @__PURE__ */ he(n[0]), s[t](...n)) : o;
}
function Cn(e, t, n = []) {
  xt(), jo();
  const s = (/* @__PURE__ */ he(e))[t].apply(e, n);
  return Wo(), St(), s;
}
const ur = /* @__PURE__ */ Ho("__proto__,__v_isRef,__isVue"), Al = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(et)
);
function dr(e) {
  et(e) || (e = String(e));
  const t = /* @__PURE__ */ he(this);
  return Be(t, "has", e), t.hasOwnProperty(e);
}
class Dl {
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
      return s === (o ? i ? wr : Rl : i ? Pl : Tl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = ie(t);
    if (!o) {
      let r;
      if (l && (r = rr[n]))
        return r;
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
    if ((et(n) ? Al.has(n) : ur(n)) || (o || Be(t, "get", n), i))
      return a;
    if (/* @__PURE__ */ ye(a)) {
      const r = l && Hs(n) ? a : a.value;
      return o && ve(r) ? /* @__PURE__ */ ws(r) : r;
    }
    return ve(a) ? o ? /* @__PURE__ */ ws(a) : /* @__PURE__ */ rn(a) : a;
  }
}
class El extends Dl {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    const l = ie(t) && Hs(n);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ Et(i);
      if (!/* @__PURE__ */ Je(s) && !/* @__PURE__ */ Et(s) && (i = /* @__PURE__ */ he(i), s = /* @__PURE__ */ he(s)), !l && /* @__PURE__ */ ye(i) && !/* @__PURE__ */ ye(s))
        return u || (i.value = s), !0;
    }
    const a = l ? Number(n) < t.length : be(t, n), r = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ye(t) ? t : o
    );
    return t === /* @__PURE__ */ he(o) && r && (a ? vt(s, i) && At(t, "set", n, s) : At(t, "add", n, s)), r;
  }
  deleteProperty(t, n) {
    const s = be(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && At(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!et(n) || !Al.has(n)) && Be(t, "has", n), s;
  }
  ownKeys(t) {
    return Be(
      t,
      "iterate",
      ie(t) ? "length" : on
    ), Reflect.ownKeys(t);
  }
}
class fr extends Dl {
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
const pr = /* @__PURE__ */ new El(), mr = /* @__PURE__ */ new fr(), hr = /* @__PURE__ */ new El(!0);
const xo = (e) => e, is = (e) => Reflect.getPrototypeOf(e);
function gr(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = /* @__PURE__ */ he(o), l = hn(i), a = e === "entries" || e === Symbol.iterator && l, r = e === "keys" && l, u = o[e](...s), c = n ? xo : t ? bn : rt;
    return !t && Be(
      i,
      "iterate",
      r ? wo : on
    ), Pe(
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
function _r(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ he(i), a = /* @__PURE__ */ he(o);
      e || (vt(o, a) && Be(l, "get", o), Be(l, "get", a));
      const { has: r } = is(l), u = t ? xo : e ? bn : rt;
      if (r.call(l, o))
        return u(i.get(o));
      if (r.call(l, a))
        return u(i.get(a));
      i !== l && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Be(/* @__PURE__ */ he(o), "iterate", on), o.size;
    },
    has(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ he(i), a = /* @__PURE__ */ he(o);
      return e || (vt(o, a) && Be(l, "has", o), Be(l, "has", a)), o === a ? i.has(o) : i.has(o) || i.has(a);
    },
    forEach(o, i) {
      const l = this, a = l.__v_raw, r = /* @__PURE__ */ he(a), u = t ? xo : e ? bn : rt;
      return !e && Be(r, "iterate", on), a.forEach((c, d) => o.call(i, u(c), u(d), l));
    }
  };
  return Pe(
    n,
    e ? {
      add: ls("add"),
      set: ls("set"),
      delete: ls("delete"),
      clear: ls("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ he(this), l = is(i), a = /* @__PURE__ */ he(o), r = !t && !/* @__PURE__ */ Je(o) && !/* @__PURE__ */ Et(o) ? a : o;
        return l.has.call(i, r) || vt(o, r) && l.has.call(i, o) || vt(a, r) && l.has.call(i, a) || (i.add(r), At(i, "add", r, r)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ Je(i) && !/* @__PURE__ */ Et(i) && (i = /* @__PURE__ */ he(i));
        const l = /* @__PURE__ */ he(this), { has: a, get: r } = is(l);
        let u = a.call(l, o);
        u || (o = /* @__PURE__ */ he(o), u = a.call(l, o));
        const c = r.call(l, o);
        return l.set(o, i), u ? vt(i, c) && At(l, "set", o, i) : At(l, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ he(this), { has: l, get: a } = is(i);
        let r = l.call(i, o);
        r || (o = /* @__PURE__ */ he(o), r = l.call(i, o)), a && a.call(i, o);
        const u = i.delete(o);
        return r && At(i, "delete", o, void 0), u;
      },
      clear() {
        const o = /* @__PURE__ */ he(this), i = o.size !== 0, l = o.clear();
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
    n[o] = gr(o, e, t);
  }), n;
}
function Ko(e, t) {
  const n = _r(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    be(n, o) && o in s ? n : s,
    o,
    i
  );
}
const vr = {
  get: /* @__PURE__ */ Ko(!1, !1)
}, br = {
  get: /* @__PURE__ */ Ko(!1, !0)
}, yr = {
  get: /* @__PURE__ */ Ko(!0, !1)
};
const Tl = /* @__PURE__ */ new WeakMap(), Pl = /* @__PURE__ */ new WeakMap(), Rl = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap();
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
  return /* @__PURE__ */ Et(e) ? e : qo(
    e,
    !1,
    pr,
    vr,
    Tl
  );
}
// @__NO_SIDE_EFFECTS__
function Sr(e) {
  return qo(
    e,
    !1,
    hr,
    br,
    Pl
  );
}
// @__NO_SIDE_EFFECTS__
function ws(e) {
  return qo(
    e,
    !0,
    mr,
    yr,
    Rl
  );
}
function qo(e, t, n, s, o) {
  if (!ve(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const l = xr(Ga(e));
  if (l === 0)
    return e;
  const a = new Proxy(
    e,
    l === 2 ? s : n
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
function Je(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ks(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function he(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ he(t) : e;
}
function Xo(e) {
  return !be(e, "__v_skip") && Object.isExtensible(e) && hl(e, "__v_skip", !0), e;
}
const rt = (e) => ve(e) ? /* @__PURE__ */ rn(e) : e, bn = (e) => ve(e) ? /* @__PURE__ */ ws(e) : e;
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
    this.dep = new Go(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ he(t), this._value = n ? t : rt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Je(t) || /* @__PURE__ */ Et(t);
    t = s ? t : /* @__PURE__ */ he(t), vt(t, n) && (this._rawValue = t, this._value = s ? t : rt(t), this.dep.trigger());
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
function Nl(e) {
  return /* @__PURE__ */ yt(e) ? e : new Proxy(e, Lr);
}
// @__NO_SIDE_EFFECTS__
function Mr(e) {
  const t = ie(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Ol(e, n);
  return t;
}
class Ir {
  constructor(t, n, s) {
    this._object = t, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._key = et(n) ? n : String(n), this._raw = /* @__PURE__ */ he(t);
    let o = !0, i = t;
    if (!ie(t) || et(this._key) || !Hs(this._key))
      do
        o = !/* @__PURE__ */ Ks(i) || /* @__PURE__ */ Je(i);
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
  return /* @__PURE__ */ ye(e) ? e : ue(e) ? new kr(e) : ve(e) && arguments.length > 1 ? Ol(e, t, n) : /* @__PURE__ */ oe(e);
}
function Ol(e, t, n) {
  return new Ir(e, t, n);
}
class Dr {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Go(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = zn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Le !== this)
      return Cl(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ml(this), t && (t.version = this.dep.version), this._value;
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
const as = {}, xs = /* @__PURE__ */ new WeakMap();
let Jt;
function Tr(e, t = !1, n = Jt) {
  if (n) {
    let s = xs.get(n);
    s || xs.set(n, s = []), s.push(e);
  }
}
function Pr(e, t, n = Ce) {
  const { immediate: s, deep: o, once: i, scheduler: l, augmentJob: a, call: r } = n, u = (b) => o ? b : /* @__PURE__ */ Je(b) || o === !1 || o === 0 ? Dt(b, 1) : Dt(b);
  let c, d, f, p, h = !1, _ = !1;
  if (/* @__PURE__ */ ye(e) ? (d = () => e.value, h = /* @__PURE__ */ Je(e)) : /* @__PURE__ */ yt(e) ? (d = () => u(e), h = !0) : ie(e) ? (_ = !0, h = e.some((b) => /* @__PURE__ */ yt(b) || /* @__PURE__ */ Je(b)), d = () => e.map((b) => {
    if (/* @__PURE__ */ ye(b))
      return b.value;
    if (/* @__PURE__ */ yt(b))
      return u(b);
    if (ue(b))
      return r ? r(b, 2) : b();
  })) : ue(e) ? t ? d = r ? () => r(e, 2) : e : d = () => {
    if (f) {
      xt();
      try {
        f();
      } finally {
        St();
      }
    }
    const b = Jt;
    Jt = c;
    try {
      return r ? r(e, 3, [p]) : e(p);
    } finally {
      Jt = b;
    }
  } : d = bt, t && o) {
    const b = d, S = o === !0 ? 1 / 0 : o;
    d = () => Dt(b(), S);
  }
  const F = wl(), w = () => {
    c.stop(), F && F.active && Uo(F.effects, c);
  };
  if (i && t) {
    const b = t;
    t = (...S) => {
      const M = b(...S);
      return w(), M;
    };
  }
  let x = _ ? new Array(e.length).fill(as) : as;
  const I = (b) => {
    if (!(!(c.flags & 1) || !c.dirty && !b))
      if (t) {
        const S = c.run();
        if (b || o || h || (_ ? S.some((M, A) => vt(M, x[A])) : vt(S, x))) {
          f && f();
          const M = Jt;
          Jt = c;
          try {
            const A = [
              S,
              // pass undefined as the old value when it's changed for the first time
              x === as ? void 0 : _ && x[0] === as ? [] : x,
              p
            ];
            x = S, r ? r(t, 3, A) : (
              // @ts-expect-error
              t(...A)
            );
          } finally {
            Jt = M;
          }
        }
      } else
        c.run();
  };
  return a && a(I), c = new xl(d), c.scheduler = l ? () => l(I, !1) : I, p = (b) => Tr(b, !1, c), f = c.onStop = () => {
    const b = xs.get(c);
    if (b) {
      if (r)
        r(b, 4);
      else
        for (const S of b) S();
      xs.delete(c);
    }
  }, t ? s ? I(!0) : x = c.run() : l ? l(I.bind(null, !0), !0) : c.run(), w.pause = c.pause.bind(c), w.resume = c.resume.bind(c), w.stop = w, w;
}
function Dt(e, t = 1 / 0, n) {
  if (t <= 0 || !ve(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ye(e))
    Dt(e.value, t, n);
  else if (ie(e))
    for (let s = 0; s < e.length; s++)
      Dt(e[s], t, n);
  else if (Bs(e) || hn(e))
    e.forEach((s) => {
      Dt(s, t, n);
    });
  else if (ml(e)) {
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
function es(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    ts(o, t, n);
  }
}
function ot(e, t, n, s) {
  if (ue(e)) {
    const o = es(e, t, n, s);
    return o && fl(o) && o.catch((i) => {
      ts(i, t, n);
    }), o;
  }
  if (ie(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(ot(e[i], t, n, s));
    return o;
  }
}
function ts(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: l } = t && t.appContext.config || Ce;
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
      xt(), es(i, null, 10, [
        e,
        r,
        u
      ]), St();
      return;
    }
  }
  Rr(e, n, o, s, l);
}
function Rr(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const We = [];
let ht = -1;
const gn = [];
let Vt = null, pn = 0;
const $l = /* @__PURE__ */ Promise.resolve();
let Ss = null;
function wn(e) {
  const t = Ss || $l;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Nr(e) {
  let t = ht + 1, n = We.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = We[s], i = Kn(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Yo(e) {
  if (!(e.flags & 1)) {
    const t = Kn(e), n = We[We.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Kn(n) ? We.push(e) : We.splice(Nr(t), 0, e), e.flags |= 1, Vl();
  }
}
function Vl() {
  Ss || (Ss = $l.then(Hl));
}
function Or(e) {
  ie(e) ? gn.push(...e) : Vt && e.id === -1 ? Vt.splice(pn + 1, 0, e) : e.flags & 1 || (gn.push(e), e.flags |= 1), Vl();
}
function pi(e, t, n = ht + 1) {
  for (; n < We.length; n++) {
    const s = We[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      We.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Bl(e) {
  if (gn.length) {
    const t = [...new Set(gn)].sort(
      (n, s) => Kn(n) - Kn(s)
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
const Kn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Hl(e) {
  try {
    for (ht = 0; ht < We.length; ht++) {
      const t = We[ht];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), es(
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
    ht = -1, We.length = 0, Bl(), Ss = null, (We.length || gn.length) && Hl();
  }
}
let $e = null, Ul = null;
function Cs(e) {
  const t = $e;
  return $e = e, Ul = e && e.type.__scopeId || null, t;
}
function ns(e, t = $e, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Ms(-1);
    const i = Cs(t);
    let l;
    try {
      l = e(...o);
    } finally {
      Cs(i), s._d && Ms(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Qe(e, t) {
  if ($e === null)
    return e;
  const n = Qs($e), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, l, a, r = Ce] = t[o];
    i && (ue(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Dt(l), s.push({
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
function Kt(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let l = 0; l < o.length; l++) {
    const a = o[l];
    i && (a.oldValue = i[l].value);
    let r = a.dir[s];
    r && (xt(), ot(r, n, 8, [
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
function Nn(e, t, n = !1) {
  const s = ti();
  if (s || ln) {
    let o = ln ? ln._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ue(t) ? t.call(s && s.proxy) : t;
  }
}
function Vr() {
  return !!(ti() || ln);
}
const Br = /* @__PURE__ */ Symbol.for("v-scx"), Hr = () => Nn(Br);
function Te(e, t, n) {
  return jl(e, t, n);
}
function jl(e, t, n = Ce) {
  const { immediate: s, deep: o, flush: i, once: l } = n, a = Pe({}, n), r = t && s || !t && i !== "post";
  let u;
  if (yn) {
    if (i === "sync") {
      const p = Hr();
      u = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!r) {
      const p = () => {
      };
      return p.stop = bt, p.resume = bt, p.pause = bt, p;
    }
  }
  const c = Oe;
  a.call = (p, h, _) => ot(p, c, h, _);
  let d = !1;
  i === "post" ? a.scheduler = (p) => {
    je(p, c && c.suspense);
  } : i !== "sync" && (d = !0, a.scheduler = (p, h) => {
    h ? p() : Yo(p);
  }), a.augmentJob = (p) => {
    t && (p.flags |= 4), d && (p.flags |= 2, c && (p.id = c.uid, p.i = c));
  };
  const f = Pr(e, t, a);
  return yn && (u ? u.push(f) : r && f()), f;
}
function Ur(e, t, n) {
  const s = this.proxy, o = Me(e) ? e.includes(".") ? Wl(s, e) : () => s[e] : e.bind(s, s);
  let i;
  ue(t) ? i = t : (i = t.handler, n = t);
  const l = os(this), a = jl(o, i.bind(s), n);
  return l(), a;
}
function Wl(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const Ot = /* @__PURE__ */ new WeakMap(), zl = /* @__PURE__ */ Symbol("_vte"), Gl = (e) => e.__isTeleport, Zt = (e) => e && (e.disabled || e.disabled === ""), jr = (e) => e && (e.defer || e.defer === ""), mi = (e) => typeof SVGElement < "u" && e instanceof SVGElement, hi = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, So = (e, t) => {
  const n = e && e.to;
  return Me(n) ? t ? t(n) : null : n;
}, Wr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, i, l, a, r, u) {
    const {
      mc: c,
      pc: d,
      pbc: f,
      o: { insert: p, querySelector: h, createText: _, createComment: F, parentNode: w }
    } = u, x = Zt(t.props);
    let { dynamicChildren: I } = t;
    const b = (A, T, E) => {
      A.shapeFlag & 16 && c(
        A.children,
        T,
        E,
        o,
        i,
        l,
        a,
        r
      );
    }, S = (A = t) => {
      const T = Zt(A.props), E = A.target = So(A.props, h), G = Co(E, A, _, p);
      E && (l !== "svg" && mi(E) ? l = "svg" : l !== "mathml" && hi(E) && (l = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(E), T || (b(A, E, G), kn(A, !1)));
    }, M = (A) => {
      const T = () => {
        if (Ot.get(A) === T) {
          if (Ot.delete(A), Zt(A.props)) {
            const E = w(A.el) || n;
            b(A, E, A.anchor), kn(A, !0);
          }
          S(A);
        }
      };
      Ot.set(A, T), je(T, i);
    };
    if (e == null) {
      const A = t.el = _(""), T = t.anchor = _("");
      if (p(A, n, s), p(T, n, s), jr(t.props) || i && i.pendingBranch) {
        M(t);
        return;
      }
      x && (b(t, n, T), kn(t, !0)), S();
    } else {
      t.el = e.el;
      const A = t.anchor = e.anchor, T = Ot.get(e);
      if (T) {
        T.flags |= 8, Ot.delete(e), M(t);
        return;
      }
      t.targetStart = e.targetStart;
      const E = t.target = e.target, G = t.targetAnchor = e.targetAnchor, q = Zt(e.props), U = q ? n : E, j = q ? A : G;
      if (l === "svg" || mi(E) ? l = "svg" : (l === "mathml" || hi(E)) && (l = "mathml"), I ? (f(
        e.dynamicChildren,
        I,
        U,
        o,
        i,
        l,
        a
      ), ei(e, t, !0)) : r || d(
        e,
        t,
        U,
        j,
        o,
        i,
        l,
        a,
        !1
      ), x)
        q ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : rs(
          t,
          n,
          A,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const N = So(t.props, h);
        N && (t.target = N, rs(
          t,
          N,
          null,
          u,
          0
        ));
      } else q && rs(
        t,
        E,
        G,
        u,
        1
      );
      kn(t, x);
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
    } = e, p = Zt(f), h = i || !p, _ = Ot.get(e);
    if (_ && (_.flags |= 8, Ot.delete(e)), d && (o(u), o(c)), i && o(r), !_ && (p || d) && l & 16)
      for (let F = 0; F < a.length; F++) {
        const w = a[F];
        s(
          w,
          t,
          n,
          h,
          !!w.dynamicChildren
        );
      }
  },
  move: rs,
  hydrate: zr
};
function rs(e, t, n, { o: { insert: s }, m: o }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: l, anchor: a, shapeFlag: r, children: u, props: c } = e, d = i === 2;
  if (d && s(l, t, n), !Ot.has(e) && (!d || Zt(c)) && r & 16)
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
  function f(F, w) {
    let x = w;
    for (; x; ) {
      if (x && x.nodeType === 8) {
        if (x.data === "teleport start anchor")
          t.targetStart = x;
        else if (x.data === "teleport anchor") {
          t.targetAnchor = x, F._lpa = t.targetAnchor && l(t.targetAnchor);
          break;
        }
      }
      x = l(x);
    }
  }
  function p(F, w) {
    w.anchor = d(
      l(F),
      w,
      a(F),
      n,
      s,
      o,
      i
    );
  }
  const h = t.target = So(
    t.props,
    r
  ), _ = Zt(t.props);
  if (h) {
    const F = h._lpa || h.firstChild;
    t.shapeFlag & 16 && (_ ? (p(e, t), f(h, F), t.targetAnchor || Co(
      h,
      t,
      c,
      u,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      a(e) === h ? e : null
    )) : (t.anchor = l(e), f(h, F), t.targetAnchor || Co(h, t, c, u), d(
      F && l(F),
      t,
      h,
      n,
      s,
      o,
      i
    ))), kn(t, _);
  } else _ && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = l(e));
  return t.anchor && l(t.anchor);
}
const Kl = Wr;
function kn(e, t) {
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
  return i[zl] = l, e && (s(i, e, o), s(l, e, o)), l;
}
const st = /* @__PURE__ */ Symbol("_leaveCb"), Fn = /* @__PURE__ */ Symbol("_enterCb");
function Gr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return cn(() => {
    e.isMounted = !0;
  }), xn(() => {
    e.isUnmounting = !0;
  }), e;
}
const nt = [Function, Array], ql = {
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
}, Xl = (e) => {
  const t = e.subTree;
  return t.component ? Xl(t.component) : t;
}, Kr = {
  name: "BaseTransition",
  props: ql,
  setup(e, { slots: t }) {
    const n = ti(), s = Gr();
    return () => {
      const o = t.default && Ql(t.default(), !0), i = o && o.length ? Yl(o) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? ee() : void 0
      );
      if (!i)
        return;
      const l = /* @__PURE__ */ he(e), { mode: a } = l;
      if (s.isLeaving)
        return ro(i);
      const r = gi(i);
      if (!r)
        return ro(i);
      let u = Fo(
        r,
        l,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => u = d
      );
      r.type !== He && qn(r, u);
      let c = n.subTree && gi(n.subTree);
      if (c && c.type !== He && !en(c, r) && Xl(n).type !== He) {
        let d = Fo(
          c,
          l,
          s,
          n
        );
        if (qn(c, d), a === "out-in" && r.type !== He)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
          }, ro(i);
        a === "in-out" && r.type !== He ? d.delayLeave = (f, p, h) => {
          const _ = Jl(
            s,
            c
          );
          _[String(c.key)] = c, f[st] = () => {
            p(), f[st] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            h(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return i;
    };
  }
};
function Yl(e) {
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
function Jl(e, t) {
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
    onAfterLeave: h,
    onLeaveCancelled: _,
    onBeforeAppear: F,
    onAppear: w,
    onAfterAppear: x,
    onAppearCancelled: I
  } = t, b = String(e.key), S = Jl(n, e), M = (E, G) => {
    E && ot(
      E,
      s,
      9,
      G
    );
  }, A = (E, G) => {
    const q = G[1];
    M(E, G), ie(E) ? E.every((U) => U.length <= 1) && q() : E.length <= 1 && q();
  }, T = {
    mode: l,
    persisted: a,
    beforeEnter(E) {
      let G = r;
      if (!n.isMounted)
        if (i)
          G = F || r;
        else
          return;
      E[st] && E[st](
        !0
        /* cancelled */
      );
      const q = S[b];
      q && en(e, q) && q.el[st] && q.el[st](), M(G, [E]);
    },
    enter(E) {
      if (S[b] === e) return;
      let G = u, q = c, U = d;
      if (!n.isMounted)
        if (i)
          G = w || u, q = x || c, U = I || d;
        else
          return;
      let j = !1;
      E[Fn] = ($) => {
        j || (j = !0, $ ? M(U, [E]) : M(q, [E]), T.delayedLeave && T.delayedLeave(), E[Fn] = void 0);
      };
      const N = E[Fn].bind(null, !1);
      G ? A(G, [E, N]) : N();
    },
    leave(E, G) {
      const q = String(e.key);
      if (E[Fn] && E[Fn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return G();
      M(f, [E]);
      let U = !1;
      E[st] = (N) => {
        U || (U = !0, G(), N ? M(_, [E]) : M(h, [E]), E[st] = void 0, S[q] === e && delete S[q]);
      };
      const j = E[st].bind(null, !1);
      S[q] = e, p ? A(p, [E, j]) : j();
    },
    clone(E) {
      const G = Fo(
        E,
        t,
        n,
        s,
        o
      );
      return o && o(G), G;
    }
  };
  return T;
}
function ro(e) {
  if (ss(e))
    return e = Ht(e), e.children = null, e;
}
function gi(e) {
  if (!ss(e))
    return Gl(e.type) && e.children ? Yl(e.children) : e;
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
function Ql(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let l = e[i];
    const a = n == null ? l.key : String(n) + String(l.key != null ? l.key : i);
    l.type === fe ? (l.patchFlag & 128 && o++, s = s.concat(
      Ql(l.children, t, a)
    )) : (t || l.type !== He) && s.push(a != null ? Ht(l, { key: a }) : l);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function xe(e, t) {
  return ue(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Pe({ name: e.name }, t, { setup: e })
  ) : e;
}
function Jo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function _i(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Fs = /* @__PURE__ */ new WeakMap();
function On(e, t, n, s, o = !1) {
  if (ie(e)) {
    e.forEach(
      (_, F) => On(
        _,
        t && (ie(t) ? t[F] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (_n(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && On(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Qs(s.component) : s.el, l = o ? null : i, { i: a, r } = e, u = t && t.r, c = a.refs === Ce ? a.refs = {} : a.refs, d = a.setupState, f = /* @__PURE__ */ he(d), p = d === Ce ? dl : (_) => _i(c, _) ? !1 : be(f, _), h = (_, F) => !(F && _i(c, F));
  if (u != null && u !== r) {
    if (vi(t), Me(u))
      c[u] = null, p(u) && (d[u] = null);
    else if (/* @__PURE__ */ ye(u)) {
      const _ = t;
      h(u, _.k) && (u.value = null), _.k && (c[_.k] = null);
    }
  }
  if (ue(r)) {
    xt();
    try {
      es(r, a, 12, [l, c]);
    } finally {
      St();
    }
  } else {
    const _ = Me(r), F = /* @__PURE__ */ ye(r);
    if (_ || F) {
      const w = () => {
        if (e.f) {
          const x = _ ? p(r) ? d[r] : c[r] : h() || !e.k ? r.value : c[e.k];
          if (o)
            ie(x) && Uo(x, i);
          else if (ie(x))
            x.includes(i) || x.push(i);
          else if (_)
            c[r] = [i], p(r) && (d[r] = c[r]);
          else {
            const I = [i];
            h(r, e.k) && (r.value = I), e.k && (c[e.k] = I);
          }
        } else _ ? (c[r] = l, p(r) && (d[r] = l)) : F && (h(r, e.k) && (r.value = l), e.k && (c[e.k] = l));
      };
      if (l) {
        const x = () => {
          w(), Fs.delete(e);
        };
        x.id = -1, Fs.set(e, x), je(x, n);
      } else
        vi(e), w();
    }
  }
}
function vi(e) {
  const t = Fs.get(e);
  t && (t.flags |= 8, Fs.delete(e));
}
const bi = (e) => e.nodeType === 8;
zs().requestIdleCallback;
zs().cancelIdleCallback;
function Xr(e, t) {
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
const _n = (e) => !!e.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function jt(e) {
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
    let h;
    return u || (h = u = t().catch((_) => {
      if (_ = _ instanceof Error ? _ : new Error(String(_)), r)
        return new Promise((F, w) => {
          r(_, () => F(f()), () => w(_), d + 1);
        });
      throw _;
    }).then((_) => h !== u && u ? u : (_ && (_.__esModule || _[Symbol.toStringTag] === "Module") && (_ = _.default), c = _, _)));
  };
  return /* @__PURE__ */ xe({
    name: "AsyncComponentWrapper",
    __asyncLoader: p,
    __asyncHydrate(h, _, F) {
      let w = !1;
      (_.bu || (_.bu = [])).push(() => w = !0);
      const x = () => {
        w || F();
      }, I = i ? () => {
        const b = i(
          x,
          (S) => Xr(h, S)
        );
        b && (_.bum || (_.bum = [])).push(b);
      } : x;
      c ? I() : p().then(() => !_.isUnmounted && I());
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const h = Oe;
      if (Jo(h), c)
        return () => cs(c, h);
      const _ = (S) => {
        u = null, ts(
          S,
          h,
          13,
          !s
        );
      };
      if (a && h.suspense || yn)
        return p().then((S) => () => cs(S, h)).catch((S) => (_(S), () => s ? Y(s, {
          error: S
        }) : null));
      const F = /* @__PURE__ */ oe(!1), w = /* @__PURE__ */ oe(), x = /* @__PURE__ */ oe(!!o);
      let I, b;
      return Xs(() => {
        I != null && clearTimeout(I), b != null && clearTimeout(b);
      }), o && (b = setTimeout(() => {
        h.isUnmounted || (x.value = !1);
      }, o)), l != null && (I = setTimeout(() => {
        if (!h.isUnmounted && !F.value && !w.value) {
          const S = new Error(
            `Async component timed out after ${l}ms.`
          );
          _(S), w.value = S;
        }
      }, l)), p().then(() => {
        h.isUnmounted || (F.value = !0, h.parent && ss(h.parent.vnode) && h.parent.update());
      }).catch((S) => {
        if (h.isUnmounted) {
          u = null;
          return;
        }
        _(S), w.value = S;
      }), () => {
        if (F.value && c)
          return cs(c, h);
        if (w.value && s)
          return Y(s, {
            error: w.value
          });
        if (n && !x.value)
          return cs(
            n,
            h
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
function Yr(e, t) {
  Zl(e, "a", t);
}
function Jr(e, t) {
  Zl(e, "da", t);
}
function Zl(e, t, n = Oe) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (qs(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      ss(o.parent.vnode) && Qr(s, t, n, o), o = o.parent;
  }
}
function Qr(e, t, n, s) {
  const o = qs(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Xs(() => {
    Uo(s[t], o);
  }, n);
}
function qs(e, t, n = Oe, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...l) => {
      xt();
      const a = os(n), r = ot(t, n, e, l);
      return a(), St(), r;
    });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const Pt = (e) => (t, n = Oe) => {
  (!yn || e === "sp") && qs(e, (...s) => t(...s), n);
}, Zr = Pt("bm"), cn = Pt("m"), ec = Pt(
  "bu"
), tc = Pt("u"), xn = Pt(
  "bum"
), Xs = Pt("um"), nc = Pt(
  "sp"
), sc = Pt("rtg"), oc = Pt("rtc");
function ic(e, t = Oe) {
  qs("ec", e, t);
}
const lc = "components", ea = /* @__PURE__ */ Symbol.for("v-ndc");
function ac(e) {
  return Me(e) ? rc(lc, e, !1) || e : e || ea;
}
function rc(e, t, n = !0, s = !1) {
  const o = $e || Oe;
  if (o) {
    const i = o.type;
    {
      const a = Kc(
        i,
        !1
      );
      if (a && (a === t || a === ze(t) || a === js(ze(t))))
        return i;
    }
    const l = (
      // local registration
      // check instance[type] first which is resolved for options API
      yi(o[e] || i[e], t) || // global registration
      yi(o.appContext[e], t)
    );
    return !l && s ? i : l;
  }
}
function yi(e, t) {
  return e && (e[t] || e[ze(t)] || e[js(ze(t))]);
}
function ke(e, t, n, s) {
  let o;
  const i = n, l = ie(e);
  if (l || Me(e)) {
    const a = l && /* @__PURE__ */ yt(e);
    let r = !1, u = !1;
    a && (r = !/* @__PURE__ */ Je(e), u = /* @__PURE__ */ Et(e), e = Gs(e)), o = new Array(e.length);
    for (let c = 0, d = e.length; c < d; c++)
      o[c] = t(
        r ? u ? bn(rt(e[c])) : rt(e[c]) : e[c],
        c,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let a = 0; a < e; a++)
      o[a] = t(a + 1, a, void 0, i);
  } else if (ve(e))
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
function cc(e, t, n = {}, s, o) {
  if ($e.ce || $e.parent && _n($e.parent) && $e.parent.ce) {
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
  const l = i && ta(i(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  l && l.key, r = Ie(
    fe,
    {
      key: (a && !et(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!l && s ? "_fb" : "")
    },
    l || [],
    l && e._ === 1 ? 64 : -2
  );
  return i && i._c && (i._d = !0), r;
}
function ta(e) {
  return e.some((t) => Yn(t) ? !(t.type === He || t.type === fe && !ta(t.children)) : !0) ? e : null;
}
const Lo = (e) => e ? ya(e) ? Qs(e) : Lo(e.parent) : null, $n = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Pe(/* @__PURE__ */ Object.create(null), {
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
      Yo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = wn.bind(e.proxy)),
    $watch: (e) => Ur.bind(e)
  })
), co = (e, t) => e !== Ce && !e.__isScriptSetup && be(e, t), uc = {
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
        if (co(s, t))
          return l[t] = 1, s[t];
        if (o !== Ce && be(o, t))
          return l[t] = 2, o[t];
        if (be(i, t))
          return l[t] = 3, i[t];
        if (n !== Ce && be(n, t))
          return l[t] = 4, n[t];
        Mo && (l[t] = 0);
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
    if (n !== Ce && be(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      d = r.config.globalProperties, be(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return co(o, t) ? (o[t] = n, !0) : s !== Ce && be(s, t) ? (s[t] = n, !0) : be(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: i, type: l }
  }, a) {
    let r;
    return !!(n[a] || e !== Ce && a[0] !== "$" && be(e, a) || co(t, a) || be(i, a) || be(s, a) || be($n, a) || be(o.config.globalProperties, a) || (r = l.__cssModules) && r[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : be(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function wi(e) {
  return ie(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Mo = !0;
function dc(e) {
  const t = sa(e), n = e.proxy, s = e.ctx;
  Mo = !1, t.beforeCreate && xi(t.beforeCreate, e, "bc");
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
    beforeDestroy: w,
    beforeUnmount: x,
    destroyed: I,
    unmounted: b,
    render: S,
    renderTracked: M,
    renderTriggered: A,
    errorCaptured: T,
    serverPrefetch: E,
    // public API
    expose: G,
    inheritAttrs: q,
    // assets
    components: U,
    directives: j,
    filters: N
  } = t;
  if (u && fc(u, s, null), l)
    for (const C in l) {
      const v = l[C];
      ue(v) && (s[C] = v.bind(n));
    }
  if (o) {
    const C = o.call(n, n);
    ve(C) && (e.data = /* @__PURE__ */ rn(C));
  }
  if (Mo = !0, i)
    for (const C in i) {
      const v = i[C], R = ue(v) ? v.bind(n, n) : ue(v.get) ? v.get.bind(n, n) : bt, ae = !ue(v) && ue(v.set) ? v.set.bind(n) : bt, ne = X({
        get: R,
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
  if (r) {
    const C = ue(r) ? r.call(n) : r;
    Reflect.ownKeys(C).forEach((v) => {
      $r(v, C[v]);
    });
  }
  c && xi(c, e, "c");
  function O(C, v) {
    ie(v) ? v.forEach((R) => C(R.bind(n))) : v && C(v.bind(n));
  }
  if (O(Zr, d), O(cn, f), O(ec, p), O(tc, h), O(Yr, _), O(Jr, F), O(ic, T), O(oc, M), O(sc, A), O(xn, x), O(Xs, b), O(nc, E), ie(G))
    if (G.length) {
      const C = e.exposed || (e.exposed = {});
      G.forEach((v) => {
        Object.defineProperty(C, v, {
          get: () => n[v],
          set: (R) => n[v] = R,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === bt && (e.render = S), q != null && (e.inheritAttrs = q), U && (e.components = U), j && (e.directives = j), E && Jo(e);
}
function fc(e, t, n = bt) {
  ie(e) && (e = Io(e));
  for (const s in e) {
    const o = e[s];
    let i;
    ve(o) ? "default" in o ? i = Nn(
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
function xi(e, t, n) {
  ot(
    ie(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function na(e, t, n, s) {
  let o = s.includes(".") ? Wl(n, s) : () => n[s];
  if (Me(e)) {
    const i = t[e];
    ue(i) && Te(o, i);
  } else if (ue(e))
    Te(o, e.bind(n));
  else if (ve(e))
    if (ie(e))
      e.forEach((i) => na(i, t, n, s));
    else {
      const i = ue(e.handler) ? e.handler.bind(n) : t[e.handler];
      ue(i) && Te(o, i, e);
    }
}
function sa(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, a = i.get(t);
  let r;
  return a ? r = a : !o.length && !n && !s ? r = t : (r = {}, o.length && o.forEach(
    (u) => Ls(r, u, l, !0)
  ), Ls(r, t, l)), ve(t) && i.set(t, r), r;
}
function Ls(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && Ls(e, i, n, !0), o && o.forEach(
    (l) => Ls(e, l, n, !0)
  );
  for (const l in t)
    if (!(s && l === "expose")) {
      const a = pc[l] || n && n[l];
      e[l] = a ? a(e[l], t[l]) : t[l];
    }
  return e;
}
const pc = {
  data: Si,
  props: Ci,
  emits: Ci,
  // objects
  methods: An,
  computed: An,
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
  components: An,
  directives: An,
  // watch
  watch: hc,
  // provide / inject
  provide: Si,
  inject: mc
};
function Si(e, t) {
  return t ? e ? function() {
    return Pe(
      ue(e) ? e.call(this, this) : e,
      ue(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function mc(e, t) {
  return An(Io(e), Io(t));
}
function Io(e) {
  if (ie(e)) {
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
function An(e, t) {
  return e ? Pe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ci(e, t) {
  return e ? ie(e) && ie(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Pe(
    /* @__PURE__ */ Object.create(null),
    wi(e),
    wi(t ?? {})
  ) : t;
}
function hc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Pe(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Ue(e[s], t[s]);
  return n;
}
function oa() {
  return {
    app: null,
    config: {
      isNativeTag: dl,
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
    ue(s) || (s = Pe({}, s)), o != null && !ve(o) && (o = null);
    const i = oa(), l = /* @__PURE__ */ new WeakSet(), a = [];
    let r = !1;
    const u = i.app = {
      _uid: gc++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Xc,
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
          return p.appContext = i, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(p, c, f), r = !0, u._container = c, c.__vue_app__ = u, Qs(p.component);
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
const vc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ze(t)}Modifiers`] || e[`${Ut(t)}Modifiers`];
function bc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Ce;
  let o = n;
  const i = t.startsWith("update:"), l = i && vc(s, t.slice(7));
  l && (l.trim && (o = n.map((c) => Me(c) ? c.trim() : c)), l.number && (o = n.map(Ws)));
  let a, r = s[a = so(t)] || // also try camelCase event handler (#2249)
  s[a = so(ze(t))];
  !r && i && (r = s[a = so(Ut(t))]), r && ot(
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
const yc = /* @__PURE__ */ new WeakMap();
function ia(e, t, n = !1) {
  const s = n ? yc : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let l = {}, a = !1;
  if (!ue(e)) {
    const r = (u) => {
      const c = ia(u, t, !0);
      c && (a = !0, Pe(l, c));
    };
    !n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
  }
  return !i && !a ? (ve(e) && s.set(e, null), null) : (ie(i) ? i.forEach((r) => l[r] = null) : Pe(l, i), ve(e) && s.set(e, l), l);
}
function Ys(e, t) {
  return !e || !$s(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), be(e, t[0].toLowerCase() + t.slice(1)) || be(e, Ut(t)) || be(e, t));
}
function Fi(e) {
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
  } = e, F = Cs(e);
  let w, x;
  try {
    if (n.shapeFlag & 4) {
      const b = o || s, S = b;
      w = _t(
        u.call(
          S,
          b,
          c,
          d,
          p,
          f,
          h
        )
      ), x = a;
    } else {
      const b = t;
      w = _t(
        b.length > 1 ? b(
          d,
          { attrs: a, slots: l, emit: r }
        ) : b(
          d,
          null
        )
      ), x = t.props ? a : wc(a);
    }
  } catch (b) {
    Vn.length = 0, ts(b, e, 1), w = Y(He);
  }
  let I = w;
  if (x && _ !== !1) {
    const b = Object.keys(x), { shapeFlag: S } = I;
    b.length && S & 7 && (i && b.some(Vs) && (x = xc(
      x,
      i
    )), I = Ht(I, x, !1, !0));
  }
  return n.dirs && (I = Ht(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && qn(I, n.transition), w = I, Cs(F), w;
}
const wc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || $s(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, xc = (e, t) => {
  const n = {};
  for (const s in e)
    (!Vs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Sc(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: l, children: a, patchFlag: r } = t, u = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && r >= 0) {
    if (r & 1024)
      return !0;
    if (r & 16)
      return s ? Li(s, l, u) : !!l;
    if (r & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (la(l, s, f) && !Ys(u, f))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : s === l ? !1 : s ? l ? Li(s, l, u) : !0 : !!l;
  return !1;
}
function Li(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (la(t, e, i) && !Ys(n, i))
      return !0;
  }
  return !1;
}
function la(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && ve(s) && ve(o) ? !Zn(s, o) : s !== o;
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
  const o = {}, i = ra();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ua(e, t, o, i);
  for (const l in e.propsOptions[0])
    l in o || (o[l] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ Sr(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function Lc(e, t, n, s) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: l }
  } = e, a = /* @__PURE__ */ he(o), [r] = e.propsOptions;
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
        if (Ys(e.emitsOptions, f))
          continue;
        const p = t[f];
        if (r)
          if (be(i, f))
            p !== i[f] && (i[f] = p, u = !0);
          else {
            const h = ze(f);
            o[h] = ko(
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
    ua(e, t, o, i) && (u = !0);
    let c;
    for (const d in a)
      (!t || // for camelCase
      !be(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Ut(d)) === d || !be(t, c))) && (r ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (o[d] = ko(
        r,
        a,
        d,
        void 0,
        e,
        !0
      )) : delete o[d]);
    if (i !== a)
      for (const d in i)
        (!t || !be(t, d)) && (delete i[d], u = !0);
  }
  u && At(e.attrs, "set", "");
}
function ua(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let l = !1, a;
  if (t)
    for (let r in t) {
      if (Tn(r))
        continue;
      const u = t[r];
      let c;
      o && be(o, c = ze(r)) ? !i || !i.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : Ys(e.emitsOptions, r) || (!(r in s) || u !== s[r]) && (s[r] = u, l = !0);
    }
  if (i) {
    const r = /* @__PURE__ */ he(n), u = a || Ce;
    for (let c = 0; c < i.length; c++) {
      const d = i[c];
      n[d] = ko(
        o,
        r,
        d,
        u[d],
        e,
        !be(u, d)
      );
    }
  }
  return l;
}
function ko(e, t, n, s, o, i) {
  const l = e[n];
  if (l != null) {
    const a = be(l, "default");
    if (a && s === void 0) {
      const r = l.default;
      if (l.type !== Function && !l.skipFactory && ue(r)) {
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
    ] && (s === "" || s === Ut(n)) && (s = !0));
  }
  return s;
}
const Mc = /* @__PURE__ */ new WeakMap();
function da(e, t, n = !1) {
  const s = n ? Mc : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, l = {}, a = [];
  let r = !1;
  if (!ue(e)) {
    const c = (d) => {
      r = !0;
      const [f, p] = da(d, t, !0);
      Pe(l, f), p && a.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !r)
    return ve(e) && s.set(e, mn), mn;
  if (ie(i))
    for (let c = 0; c < i.length; c++) {
      const d = ze(i[c]);
      Mi(d) && (l[d] = Ce);
    }
  else if (i)
    for (const c in i) {
      const d = ze(c);
      if (Mi(d)) {
        const f = i[c], p = l[d] = ie(f) || ue(f) ? { type: f } : Pe({}, f), h = p.type;
        let _ = !1, F = !0;
        if (ie(h))
          for (let w = 0; w < h.length; ++w) {
            const x = h[w], I = ue(x) && x.name;
            if (I === "Boolean") {
              _ = !0;
              break;
            } else I === "String" && (F = !1);
          }
        else
          _ = ue(h) && h.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = _, p[
          1
          /* shouldCastTrue */
        ] = F, (_ || be(p, "default")) && a.push(d);
      }
    }
  const u = [l, a];
  return ve(e) && s.set(e, u), u;
}
function Mi(e) {
  return e[0] !== "$" && !Tn(e);
}
const Qo = (e) => e === "_" || e === "_ctx" || e === "$stable", Zo = (e) => ie(e) ? e.map(_t) : [_t(e)], Ic = (e, t, n) => {
  if (t._n)
    return t;
  const s = ns((...o) => Zo(t(...o)), n);
  return s._c = !1, s;
}, fa = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Qo(o)) continue;
    const i = e[o];
    if (ue(i))
      t[o] = Ic(o, i, s);
    else if (i != null) {
      const l = Zo(i);
      t[o] = () => l;
    }
  }
}, pa = (e, t) => {
  const n = Zo(t);
  e.slots.default = () => n;
}, ma = (e, t, n) => {
  for (const s in t)
    (n || !Qo(s)) && (e[s] = t[s]);
}, kc = (e, t, n) => {
  const s = e.slots = ra();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (ma(s, t, n), n && hl(s, "_", o, !0)) : fa(t, s);
  } else t && pa(e, t);
}, Ac = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, l = Ce;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? i = !1 : ma(o, t, n) : (i = !t.$stable, fa(t, o)), l = t;
  } else t && (pa(e, t), l = { default: 1 });
  if (i)
    for (const a in o)
      !Qo(a) && l[a] == null && delete o[a];
}, je = Rc;
function Dc(e) {
  return Ec(e);
}
function Ec(e, t) {
  const n = zs();
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
    setScopeId: p = bt,
    insertStaticContent: h
  } = e, _ = (m, y, D, W = null, H = null, V = null, J = void 0, K = null, z = !!y.dynamicChildren) => {
    if (m === y)
      return;
    m && !en(m, y) && (W = Gt(m), _e(m, H, V, !0), m = null), y.patchFlag === -2 && (z = !1, y.dynamicChildren = null);
    const { type: B, ref: le, shapeFlag: Q } = y;
    switch (B) {
      case Js:
        F(m, y, D, W);
        break;
      case He:
        w(m, y, D, W);
        break;
      case fo:
        m == null && x(y, D, W, J);
        break;
      case fe:
        U(
          m,
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
          m,
          y,
          D,
          W,
          H,
          V,
          J,
          K,
          z
        ) : Q & 6 ? j(
          m,
          y,
          D,
          W,
          H,
          V,
          J,
          K,
          z
        ) : (Q & 64 || Q & 128) && B.process(
          m,
          y,
          D,
          W,
          H,
          V,
          J,
          K,
          z,
          Re
        );
    }
    le != null && H ? On(le, m && m.ref, V, y || m, !y) : le == null && m && m.ref != null && On(m.ref, null, V, m, !0);
  }, F = (m, y, D, W) => {
    if (m == null)
      s(
        y.el = a(y.children),
        D,
        W
      );
    else {
      const H = y.el = m.el;
      y.children !== m.children && u(H, y.children);
    }
  }, w = (m, y, D, W) => {
    m == null ? s(
      y.el = r(y.children || ""),
      D,
      W
    ) : y.el = m.el;
  }, x = (m, y, D, W) => {
    [m.el, m.anchor] = h(
      m.children,
      y,
      D,
      W,
      m.el,
      m.anchor
    );
  }, I = ({ el: m, anchor: y }, D, W) => {
    let H;
    for (; m && m !== y; )
      H = f(m), s(m, D, W), m = H;
    s(y, D, W);
  }, b = ({ el: m, anchor: y }) => {
    let D;
    for (; m && m !== y; )
      D = f(m), o(m), m = D;
    o(y);
  }, S = (m, y, D, W, H, V, J, K, z) => {
    if (y.type === "svg" ? J = "svg" : y.type === "math" && (J = "mathml"), m == null)
      M(
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
      const B = m.el && m.el._isVueCE ? m.el : null;
      try {
        B && B._beginPatch(), E(
          m,
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
  }, M = (m, y, D, W, H, V, J, K) => {
    let z, B;
    const { props: le, shapeFlag: Q, transition: se, dirs: ce } = m;
    if (z = m.el = l(
      m.type,
      V,
      le && le.is,
      le
    ), Q & 8 ? c(z, m.children) : Q & 16 && T(
      m.children,
      z,
      null,
      W,
      H,
      uo(m, V),
      J,
      K
    ), ce && Kt(m, null, W, "created"), A(z, m, m.scopeId, J, W), le) {
      for (const Se in le)
        Se !== "value" && !Tn(Se) && i(z, Se, null, le[Se], V, W);
      "value" in le && i(z, "value", null, le.value, V), (B = le.onVnodeBeforeMount) && mt(B, W, m);
    }
    ce && Kt(m, null, W, "beforeMount");
    const ge = Tc(H, se);
    ge && se.beforeEnter(z), s(z, y, D), ((B = le && le.onVnodeMounted) || ge || ce) && je(() => {
      try {
        B && mt(B, W, m), ge && se.enter(z), ce && Kt(m, null, W, "mounted");
      } finally {
      }
    }, H);
  }, A = (m, y, D, W, H) => {
    if (D && p(m, D), W)
      for (let V = 0; V < W.length; V++)
        p(m, W[V]);
    if (H) {
      let V = H.subTree;
      if (y === V || _a(V.type) && (V.ssContent === y || V.ssFallback === y)) {
        const J = H.vnode;
        A(
          m,
          J,
          J.scopeId,
          J.slotScopeIds,
          H.parent
        );
      }
    }
  }, T = (m, y, D, W, H, V, J, K, z = 0) => {
    for (let B = z; B < m.length; B++) {
      const le = m[B] = K ? It(m[B]) : _t(m[B]);
      _(
        null,
        le,
        y,
        D,
        W,
        H,
        V,
        J,
        K
      );
    }
  }, E = (m, y, D, W, H, V, J) => {
    const K = y.el = m.el;
    let { patchFlag: z, dynamicChildren: B, dirs: le } = y;
    z |= m.patchFlag & 16;
    const Q = m.props || Ce, se = y.props || Ce;
    let ce;
    if (D && qt(D, !1), (ce = se.onVnodeBeforeUpdate) && mt(ce, D, y, m), le && Kt(y, m, D, "beforeUpdate"), D && qt(D, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    B && (!m.dynamicChildren || m.dynamicChildren.length !== B.length) && (z = 0, J = !1, B = null), (Q.innerHTML && se.innerHTML == null || Q.textContent && se.textContent == null) && c(K, ""), B ? G(
      m.dynamicChildren,
      B,
      K,
      D,
      W,
      uo(y, H),
      V
    ) : J || v(
      m,
      y,
      K,
      null,
      D,
      W,
      uo(y, H),
      V,
      !1
    ), z > 0) {
      if (z & 16)
        q(K, Q, se, D, H);
      else if (z & 2 && Q.class !== se.class && i(K, "class", null, se.class, H), z & 4 && i(K, "style", Q.style, se.style, H), z & 8) {
        const ge = y.dynamicProps;
        for (let Se = 0; Se < ge.length; Se++) {
          const we = ge[Se], De = Q[we], Ne = se[we];
          (Ne !== De || we === "value") && i(K, we, De, Ne, H, D);
        }
      }
      z & 1 && m.children !== y.children && c(K, y.children);
    } else !J && B == null && q(K, Q, se, D, H);
    ((ce = se.onVnodeUpdated) || le) && je(() => {
      ce && mt(ce, D, y, m), le && Kt(y, m, D, "updated");
    }, W);
  }, G = (m, y, D, W, H, V, J) => {
    for (let K = 0; K < y.length; K++) {
      const z = m[K], B = y[K], le = (
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
        le,
        null,
        W,
        H,
        V,
        J,
        !0
      );
    }
  }, q = (m, y, D, W, H) => {
    if (y !== D) {
      if (y !== Ce)
        for (const V in y)
          !Tn(V) && !(V in D) && i(
            m,
            V,
            y[V],
            null,
            H,
            W
          );
      for (const V in D) {
        if (Tn(V)) continue;
        const J = D[V], K = y[V];
        J !== K && V !== "value" && i(m, V, K, J, H, W);
      }
      "value" in D && i(m, "value", y.value, D.value, H);
    }
  }, U = (m, y, D, W, H, V, J, K, z) => {
    const B = y.el = m ? m.el : a(""), le = y.anchor = m ? m.anchor : a("");
    let { patchFlag: Q, dynamicChildren: se, slotScopeIds: ce } = y;
    ce && (K = K ? K.concat(ce) : ce), m == null ? (s(B, D, W), s(le, D, W), T(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      y.children || [],
      D,
      le,
      H,
      V,
      J,
      K,
      z
    )) : Q > 0 && Q & 64 && se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren && m.dynamicChildren.length === se.length ? (G(
      m.dynamicChildren,
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
    (y.key != null || H && y === H.subTree) && ei(
      m,
      y,
      !0
      /* shallow */
    )) : v(
      m,
      y,
      D,
      le,
      H,
      V,
      J,
      K,
      z
    );
  }, j = (m, y, D, W, H, V, J, K, z) => {
    y.slotScopeIds = K, m == null ? y.shapeFlag & 512 ? H.ctx.activate(
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
    ) : $(m, y, z);
  }, N = (m, y, D, W, H, V, J) => {
    const K = m.component = Uc(
      m,
      W,
      H
    );
    if (ss(m) && (K.ctx.renderer = Re), jc(K, !1, J), K.asyncDep) {
      if (H && H.registerDep(K, O, J), !m.el) {
        const z = K.subTree = Y(He);
        w(null, z, y, D), m.placeholder = z.el;
      }
    } else
      O(
        K,
        m,
        y,
        D,
        H,
        V,
        J
      );
  }, $ = (m, y, D) => {
    const W = y.component = m.component;
    if (Sc(m, y, D))
      if (W.asyncDep && !W.asyncResolved) {
        C(W, y, D);
        return;
      } else
        W.next = y, W.update();
    else
      y.el = m.el, W.vnode = y;
  }, O = (m, y, D, W, H, V, J) => {
    const K = () => {
      if (m.isMounted) {
        let { next: Q, bu: se, u: ce, parent: ge, vnode: Se } = m;
        {
          const ft = ha(m);
          if (ft) {
            Q && (Q.el = Se.el, C(m, Q, J)), ft.asyncDep.then(() => {
              je(() => {
                m.isUnmounted || B();
              }, H);
            });
            return;
          }
        }
        let we = Q, De;
        qt(m, !1), Q ? (Q.el = Se.el, C(m, Q, J)) : Q = Se, se && hs(se), (De = Q.props && Q.props.onVnodeBeforeUpdate) && mt(De, ge, Q, Se), qt(m, !0);
        const Ne = Fi(m), dt = m.subTree;
        m.subTree = Ne, _(
          dt,
          Ne,
          // parent may have changed if it's in a teleport
          d(dt.el),
          // anchor may have changed if it's in a fragment
          Gt(dt),
          m,
          H,
          V
        ), Q.el = Ne.el, we === null && Cc(m, Ne.el), ce && je(ce, H), (De = Q.props && Q.props.onVnodeUpdated) && je(
          () => mt(De, ge, Q, Se),
          H
        );
      } else {
        let Q;
        const { el: se, props: ce } = y, { bm: ge, m: Se, parent: we, root: De, type: Ne } = m, dt = _n(y);
        qt(m, !1), ge && hs(ge), !dt && (Q = ce && ce.onVnodeBeforeMount) && mt(Q, we, y), qt(m, !0);
        {
          De.ce && De.ce._hasShadowRoot() && De.ce._injectChildStyle(
            Ne,
            m.parent ? m.parent.type : void 0
          );
          const ft = m.subTree = Fi(m);
          _(
            null,
            ft,
            D,
            W,
            m,
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
        (y.shapeFlag & 256 || we && _n(we.vnode) && we.vnode.shapeFlag & 256) && m.a && je(m.a, H), m.isMounted = !0, y = D = W = null;
      }
    };
    m.scope.on();
    const z = m.effect = new xl(K);
    m.scope.off();
    const B = m.update = z.run.bind(z), le = m.job = z.runIfDirty.bind(z);
    le.i = m, le.id = m.uid, z.scheduler = () => Yo(le), qt(m, !0), B();
  }, C = (m, y, D) => {
    y.component = m;
    const W = m.vnode.props;
    m.vnode = y, m.next = null, Lc(m, y.props, W, D), Ac(m, y.children, D), xt(), pi(m), St();
  }, v = (m, y, D, W, H, V, J, K, z = !1) => {
    const B = m && m.children, le = m ? m.shapeFlag : 0, Q = y.children, { patchFlag: se, shapeFlag: ce } = y;
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
        R(
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
    ce & 8 ? (le & 16 && Ae(B, H, V), Q !== B && c(D, Q)) : le & 16 ? ce & 16 ? ae(
      B,
      Q,
      D,
      W,
      H,
      V,
      J,
      K,
      z
    ) : Ae(B, H, V, !0) : (le & 8 && c(D, ""), ce & 16 && T(
      Q,
      D,
      W,
      H,
      V,
      J,
      K,
      z
    ));
  }, R = (m, y, D, W, H, V, J, K, z) => {
    m = m || mn, y = y || mn;
    const B = m.length, le = y.length, Q = Math.min(B, le);
    let se;
    for (se = 0; se < Q; se++) {
      const ce = y[se] = z ? It(y[se]) : _t(y[se]);
      _(
        m[se],
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
    B > le ? Ae(
      m,
      H,
      V,
      !0,
      !1,
      Q
    ) : T(
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
  }, ae = (m, y, D, W, H, V, J, K, z) => {
    let B = 0;
    const le = y.length;
    let Q = m.length - 1, se = le - 1;
    for (; B <= Q && B <= se; ) {
      const ce = m[B], ge = y[B] = z ? It(y[B]) : _t(y[B]);
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
      const ce = m[Q], ge = y[se] = z ? It(y[se]) : _t(y[se]);
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
        const ce = se + 1, ge = ce < le ? y[ce].el : W;
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
        _e(m[B], H, V, !0), B++;
    else {
      const ce = B, ge = B, Se = /* @__PURE__ */ new Map();
      for (B = ge; B <= se; B++) {
        const Ke = y[B] = z ? It(y[B]) : _t(y[B]);
        Ke.key != null && Se.set(Ke.key, B);
      }
      let we, De = 0;
      const Ne = se - ge + 1;
      let dt = !1, ft = 0;
      const Sn = new Array(Ne);
      for (B = 0; B < Ne; B++) Sn[B] = 0;
      for (B = ce; B <= Q; B++) {
        const Ke = m[B];
        if (De >= Ne) {
          _e(Ke, H, V, !0);
          continue;
        }
        let pt;
        if (Ke.key != null)
          pt = Se.get(Ke.key);
        else
          for (we = ge; we <= se; we++)
            if (Sn[we - ge] === 0 && en(Ke, y[we])) {
              pt = we;
              break;
            }
        pt === void 0 ? _e(Ke, H, V, !0) : (Sn[pt - ge] = B + 1, pt >= ft ? ft = pt : dt = !0, _(
          Ke,
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
      const li = dt ? Pc(Sn) : mn;
      for (we = li.length - 1, B = Ne - 1; B >= 0; B--) {
        const Ke = ge + B, pt = y[Ke], ai = y[Ke + 1], ri = Ke + 1 < le ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ai.el || ga(ai)
        ) : W;
        Sn[B] === 0 ? _(
          null,
          pt,
          D,
          ri,
          H,
          V,
          J,
          K,
          z
        ) : dt && (we < 0 || B !== li[we] ? ne(pt, D, ri, 2) : we--);
      }
    }
  }, ne = (m, y, D, W, H = null) => {
    const { el: V, type: J, transition: K, children: z, shapeFlag: B } = m;
    if (B & 6) {
      ne(m.component.subTree, y, D, W);
      return;
    }
    if (B & 128) {
      m.suspense.move(y, D, W);
      return;
    }
    if (B & 64) {
      J.move(m, y, D, Re);
      return;
    }
    if (J === fe) {
      s(V, y, D);
      for (let Q = 0; Q < z.length; Q++)
        ne(z[Q], y, D, W);
      s(m.anchor, y, D);
      return;
    }
    if (J === fo) {
      I(m, y, D);
      return;
    }
    if (W !== 2 && B & 1 && K)
      if (W === 0)
        K.persisted && !V[st] ? s(V, y, D) : (K.beforeEnter(V), s(V, y, D), je(() => K.enter(V), H));
      else {
        const { leave: Q, delayLeave: se, afterLeave: ce } = K, ge = () => {
          m.ctx.isUnmounted ? o(V) : s(V, y, D);
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
  }, _e = (m, y, D, W = !1, H = !1) => {
    const {
      type: V,
      props: J,
      ref: K,
      children: z,
      dynamicChildren: B,
      shapeFlag: le,
      patchFlag: Q,
      dirs: se,
      cacheIndex: ce,
      memo: ge
    } = m;
    if (Q === -2 && (H = !1), K != null && (xt(), On(K, null, D, m, !0), St()), ce != null && (y.renderCache[ce] = void 0), le & 256) {
      y.ctx.deactivate(m);
      return;
    }
    const Se = le & 1 && se, we = !_n(m);
    let De;
    if (we && (De = J && J.onVnodeBeforeUnmount) && mt(De, y, m), le & 6)
      Ve(m.component, D, W);
    else {
      if (le & 128) {
        m.suspense.unmount(D, W);
        return;
      }
      Se && Kt(m, null, y, "beforeUnmount"), le & 64 ? m.type.remove(
        m,
        y,
        D,
        Re,
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
      ) : (V === fe && Q & 384 || !H && le & 16) && Ae(z, y, D), W && tt(m);
    }
    const Ne = ge != null && ce == null;
    (we && (De = J && J.onVnodeUnmounted) || Se || Ne) && je(() => {
      De && mt(De, y, m), Se && Kt(m, null, y, "unmounted"), Ne && (m.el = null);
    }, D);
  }, tt = (m) => {
    const { type: y, el: D, anchor: W, transition: H } = m;
    if (y === fe) {
      re(D, W);
      return;
    }
    if (y === fo) {
      b(m);
      return;
    }
    const V = () => {
      o(D), H && !H.persisted && H.afterLeave && H.afterLeave();
    };
    if (m.shapeFlag & 1 && H && !H.persisted) {
      const { leave: J, delayLeave: K } = H, z = () => J(D, V);
      K ? K(m.el, V, z) : z();
    } else
      V();
  }, re = (m, y) => {
    let D;
    for (; m !== y; )
      D = f(m), o(m), m = D;
    o(y);
  }, Ve = (m, y, D) => {
    const { bum: W, scope: H, job: V, subTree: J, um: K, m: z, a: B } = m;
    Ii(z), Ii(B), W && hs(W), H.stop(), V && (V.flags |= 8, _e(J, m, y, D)), K && je(K, y), je(() => {
      m.isUnmounted = !0;
    }, y);
  }, Ae = (m, y, D, W = !1, H = !1, V = 0) => {
    for (let J = V; J < m.length; J++)
      _e(m[J], y, D, W, H);
  }, Gt = (m) => {
    if (m.shapeFlag & 6)
      return Gt(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const y = f(m.anchor || m.el), D = y && y[zl];
    return D ? f(D) : y;
  };
  let de = !1;
  const Ge = (m, y, D) => {
    let W;
    m == null ? y._vnode && (_e(y._vnode, null, null, !0), W = y._vnode.component) : _(
      y._vnode || null,
      m,
      y,
      null,
      null,
      null,
      D
    ), y._vnode = m, de || (de = !0, pi(W), Bl(), de = !1);
  }, Re = {
    p: _,
    um: _e,
    m: ne,
    r: tt,
    mt: N,
    mc: T,
    pc: v,
    pbc: G,
    n: Gt,
    o: e
  };
  return {
    render: Ge,
    hydrate: void 0,
    createApp: _c(Ge)
  };
}
function uo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function qt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Tc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ei(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (ie(s) && ie(o))
    for (let i = 0; i < s.length; i++) {
      const l = s[i];
      let a = o[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[i] = It(o[i]), a.el = l.el), !n && a.patchFlag !== -2 && ei(l, a)), a.type === Js && (a.patchFlag === -1 && (a = o[i] = It(a)), a.el = l.el), a.type === He && !a.el && (a.el = l.el);
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
function ha(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ha(t);
}
function Ii(e) {
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
function Rc(e, t) {
  t && t.pendingBranch ? ie(e) ? t.effects.push(...e) : t.effects.push(e) : Or(e);
}
const fe = /* @__PURE__ */ Symbol.for("v-fgt"), Js = /* @__PURE__ */ Symbol.for("v-txt"), He = /* @__PURE__ */ Symbol.for("v-cmt"), fo = /* @__PURE__ */ Symbol.for("v-stc"), Vn = [];
let Xe = null;
function L(e = !1) {
  Vn.push(Xe = e ? null : []);
}
function Nc() {
  Vn.pop(), Xe = Vn[Vn.length - 1] || null;
}
let Xn = 1;
function Ms(e, t = !1) {
  Xn += e, e < 0 && Xe && t && (Xe.hasOnce = !0);
}
function va(e) {
  return e.dynamicChildren = Xn > 0 ? Xe || mn : null, Nc(), Xn > 0 && Xe && Xe.push(e), e;
}
function k(e, t, n, s, o, i) {
  return va(
    P(
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
  return va(
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
function en(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ba = ({ key: e }) => e ?? null, gs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Me(e) || /* @__PURE__ */ ye(e) || ue(e) ? { i: $e, r: e, k: t, f: !!n } : e : null);
function P(e, t = null, n = null, s = 0, o = null, i = e === fe ? 0 : 1, l = !1, a = !1) {
  const r = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ba(t),
    ref: t && gs(t),
    scopeId: Ul,
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
    ctx: $e
  };
  return a ? (ks(r, n), i & 128 && e.normalize(r)) : n && (r.shapeFlag |= Me(n) ? 8 : 16), Xn > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  Xe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (r.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  r.patchFlag !== 32 && Xe.push(r), r;
}
const Y = Oc;
function Oc(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === ea) && (e = He), Yn(e)) {
    const a = Ht(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ks(a, n), Xn > 0 && !i && Xe && (a.shapeFlag & 6 ? Xe[Xe.indexOf(e)] = a : Xe.push(a)), a.patchFlag = -2, a;
  }
  if (qc(e) && (e = e.__vccOpts), t) {
    t = $c(t);
    let { class: a, style: r } = t;
    a && !Me(a) && (t.class = me(a)), ve(r) && (/* @__PURE__ */ Ks(r) && !ie(r) && (r = Pe({}, r)), t.style = qe(r));
  }
  const l = Me(e) ? 1 : _a(e) ? 128 : Gl(e) ? 64 : ve(e) ? 4 : ue(e) ? 2 : 0;
  return P(
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
function $c(e) {
  return e ? /* @__PURE__ */ Ks(e) || ca(e) ? Pe({}, e) : e : null;
}
function Ht(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: l, children: a, transition: r } = e, u = t ? Vc(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && ba(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? ie(i) ? i.concat(gs(t)) : [i, gs(t)] : gs(t)
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
    ssContent: e.ssContent && Ht(e.ssContent),
    ssFallback: e.ssFallback && Ht(e.ssFallback),
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
function Is(e = " ", t = 0) {
  return Y(Js, null, e, t);
}
function ee(e = "", t = !1) {
  return t ? (L(), Ie(He, null, e)) : Y(He, null, e);
}
function _t(e) {
  return e == null || typeof e == "boolean" ? Y(He) : ie(e) ? Y(
    fe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Yn(e) ? It(e) : Y(Js, null, String(e));
}
function It(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ht(e);
}
function ks(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (ie(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), ks(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !ca(t) ? t._ctx = $e : o === 3 && $e && ($e.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ue(t)) {
    if (s & 65) {
      ks(e, { default: t });
      return;
    }
    t = { default: t, _ctx: $e }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [Is(t)]) : n = 8;
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
        t.style = qe([t.style, s.style]);
      else if ($s(o)) {
        const i = t[o], l = s[o];
        l && i !== l && !(ie(i) && i.includes(l)) ? t[o] = i ? [].concat(i, l) : l : l == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Vs(o) && (t[o] = l);
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
  const s = e.type, o = (t ? t.appContext : e.appContext) || Bc, i = {
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
    scope: new bl(
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
    emitsOptions: ia(s, o),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = bc.bind(null, i), e.ce && e.ce(i), i;
}
let Oe = null;
const ti = () => Oe || $e;
let As, Ao;
{
  const e = zs(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((l) => l(i)) : o[0](i);
    };
  };
  As = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Oe = n
  ), Ao = t(
    "__VUE_SSR_SETTERS__",
    (n) => yn = n
  );
}
const os = (e) => {
  const t = Oe;
  return As(e), e.scope.on(), () => {
    e.scope.off(), As(t);
  };
}, ki = () => {
  Oe && Oe.scope.off(), As(null);
};
function ya(e) {
  return e.vnode.shapeFlag & 4;
}
let yn = !1;
function jc(e, t = !1, n = !1) {
  t && Ao(t);
  const { props: s, children: o } = e.vnode, i = ya(e);
  Fc(e, s, i, t), kc(e, o, n || t);
  const l = i ? Wc(e, t) : void 0;
  return t && Ao(!1), l;
}
function Wc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, uc);
  const { setup: s } = n;
  if (s) {
    xt();
    const o = e.setupContext = s.length > 1 ? Gc(e) : null, i = os(e), l = es(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), a = fl(l);
    if (St(), i(), (a || e.sp) && !_n(e) && Jo(e), a) {
      if (l.then(ki, ki), t)
        return l.then((r) => {
          Ai(e, r);
        }).catch((r) => {
          ts(r, e, 0);
        });
      e.asyncDep = l;
    } else
      Ai(e, l);
  } else
    wa(e);
}
function Ai(e, t, n) {
  ue(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ve(t) && (e.setupState = Nl(t)), wa(e);
}
function wa(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || bt);
  {
    const o = os(e);
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
function Qs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Nl(Xo(e.exposed)), {
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
function Kc(e, t = !0) {
  return ue(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function qc(e) {
  return ue(e) && "__vccOpts" in e;
}
const X = (e, t) => /* @__PURE__ */ Er(e, t, yn);
function xa(e, t, n) {
  try {
    Ms(-1);
    const s = arguments.length;
    return s === 2 ? ve(t) && !ie(t) ? Yn(t) ? Y(e, null, [t]) : Y(e, t) : Y(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Yn(n) && (n = [n]), Y(e, t, n));
  } finally {
    Ms(1);
  }
}
const Xc = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Do;
const Di = typeof window < "u" && window.trustedTypes;
if (Di)
  try {
    Do = /* @__PURE__ */ Di.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Sa = Do ? (e) => Do.createHTML(e) : (e) => e, Yc = "http://www.w3.org/2000/svg", Jc = "http://www.w3.org/1998/Math/MathML", Lt = typeof document < "u" ? document : null, Ei = Lt && /* @__PURE__ */ Lt.createElement("template"), Qc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? Lt.createElementNS(Yc, e) : t === "mathml" ? Lt.createElementNS(Jc, e) : n ? Lt.createElement(e, { is: n }) : Lt.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => Lt.createTextNode(e),
  createComment: (e) => Lt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Lt.querySelector(e),
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
      Ei.innerHTML = Sa(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Ei.content;
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
}, Nt = "transition", Ln = "animation", Jn = /* @__PURE__ */ Symbol("_vtc"), Ca = {
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
}, Zc = /* @__PURE__ */ Pe(
  {},
  ql,
  Ca
), eu = (e) => (e.displayName = "Transition", e.props = Zc, e), tu = /* @__PURE__ */ eu(
  (e, { slots: t }) => xa(qr, nu(e), t)
), Xt = (e, t = []) => {
  ie(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ti = (e) => e ? ie(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
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
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: l = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: r = i,
    appearActiveClass: u = l,
    appearToClass: c = a,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: f = `${n}-leave-active`,
    leaveToClass: p = `${n}-leave-to`
  } = e, h = su(o), _ = h && h[0], F = h && h[1], {
    onBeforeEnter: w,
    onEnter: x,
    onEnterCancelled: I,
    onLeave: b,
    onLeaveCancelled: S,
    onBeforeAppear: M = w,
    onAppear: A = x,
    onAppearCancelled: T = I
  } = t, E = (U, j, N, $) => {
    U._enterCancelled = $, Yt(U, j ? c : a), Yt(U, j ? u : l), N && N();
  }, G = (U, j) => {
    U._isLeaving = !1, Yt(U, d), Yt(U, p), Yt(U, f), j && j();
  }, q = (U) => (j, N) => {
    const $ = U ? A : x, O = () => E(j, U, N);
    Xt($, [j, O]), Pi(() => {
      Yt(j, U ? r : i), Ft(j, U ? c : a), Ti($) || Ri(j, s, _, O);
    });
  };
  return Pe(t, {
    onBeforeEnter(U) {
      Xt(w, [U]), Ft(U, i), Ft(U, l);
    },
    onBeforeAppear(U) {
      Xt(M, [U]), Ft(U, r), Ft(U, u);
    },
    onEnter: q(!1),
    onAppear: q(!0),
    onLeave(U, j) {
      U._isLeaving = !0;
      const N = () => G(U, j);
      Ft(U, d), U._enterCancelled ? (Ft(U, f), $i(U)) : ($i(U), Ft(U, f)), Pi(() => {
        U._isLeaving && (Yt(U, d), Ft(U, p), Ti(b) || Ri(U, s, F, N));
      }), Xt(b, [U, N]);
    },
    onEnterCancelled(U) {
      E(U, !1, void 0, !0), Xt(I, [U]);
    },
    onAppearCancelled(U) {
      E(U, !0, void 0, !0), Xt(T, [U]);
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
    return [po(e.enter), po(e.leave)];
  {
    const t = po(e);
    return [t, t];
  }
}
function po(e) {
  return Xa(e);
}
function Ft(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Jn] || (e[Jn] = /* @__PURE__ */ new Set())).add(t);
}
function Yt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Jn];
  n && (n.delete(t), n.size || (e[Jn] = void 0));
}
function Pi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ou = 0;
function Ri(e, t, n, s) {
  const o = e._endId = ++ou, i = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: l, timeout: a, propCount: r } = iu(e, t);
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
function iu(e, t) {
  const n = window.getComputedStyle(e), s = (h) => (n[h] || "").split(", "), o = s(`${Nt}Delay`), i = s(`${Nt}Duration`), l = Ni(o, i), a = s(`${Ln}Delay`), r = s(`${Ln}Duration`), u = Ni(a, r);
  let c = null, d = 0, f = 0;
  t === Nt ? l > 0 && (c = Nt, d = l, f = i.length) : t === Ln ? u > 0 && (c = Ln, d = u, f = r.length) : (d = Math.max(l, u), c = d > 0 ? l > u ? Nt : Ln : null, f = c ? c === Nt ? i.length : r.length : 0);
  const p = c === Nt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${Nt}Property`).toString()
  );
  return {
    type: c,
    timeout: d,
    propCount: f,
    hasTransform: p
  };
}
function Ni(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Oi(n) + Oi(e[s])));
}
function Oi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function $i(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function lu(e, t, n) {
  const s = e[Jn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ds = /* @__PURE__ */ Symbol("_vod"), Fa = /* @__PURE__ */ Symbol("_vsh"), Vi = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ds] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Mn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Mn(e, !0), s.enter(e)) : s.leave(e, () => {
      Mn(e, !1);
    }) : Mn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Mn(e, t);
  }
};
function Mn(e, t) {
  e.style.display = t ? e[Ds] : "none", e[Fa] = !t;
}
const au = /* @__PURE__ */ Symbol(""), ru = /(?:^|;)\s*display\s*:/;
function cu(e, t, n) {
  const s = e.style, o = Me(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (Me(t))
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
      a != null ? du(
        e,
        l,
        !Me(t) && t ? t[l] : void 0,
        a
      ) || Dn(s, l, a) : Dn(s, l, "");
    }
  } else if (o) {
    if (t !== n) {
      const l = s[au];
      l && (n += ";" + l), s.cssText = n, i = ru.test(n);
    }
  } else t && e.removeAttribute("style");
  Ds in e && (e[Ds] = i ? s.display : "", e[Fa] && (s.display = "none"));
}
const Bi = /\s*!important$/;
function Dn(e, t, n) {
  if (ie(n))
    n.forEach((s) => Dn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = uu(e, t);
    Bi.test(n) ? e.setProperty(
      Ut(s),
      n.replace(Bi, ""),
      "important"
    ) : e[s] = n;
  }
}
const Hi = ["Webkit", "Moz", "ms"], mo = {};
function uu(e, t) {
  const n = mo[t];
  if (n)
    return n;
  let s = ze(t);
  if (s !== "filter" && s in e)
    return mo[t] = s;
  s = js(s);
  for (let o = 0; o < Hi.length; o++) {
    const i = Hi[o] + s;
    if (i in e)
      return mo[t] = i;
  }
  return t;
}
function du(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Me(s) && n === s;
}
const Ui = "http://www.w3.org/1999/xlink";
function ji(e, t, n, s, o, i = tr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ui, t.slice(6, t.length)) : e.setAttributeNS(Ui, t, n) : n == null || i && !gl(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : et(n) ? String(n) : n
  );
}
function Wi(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Sa(n) : n);
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
    a === "boolean" ? n = gl(n) : n == null && a === "string" ? (n = "", l = !0) : a === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(o || t);
}
function tn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function fu(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const zi = /* @__PURE__ */ Symbol("_vei");
function pu(e, t, n, s, o = null) {
  const i = e[zi] || (e[zi] = {}), l = i[t];
  if (s && l)
    l.value = s;
  else {
    const [a, r] = gu(t);
    if (s) {
      const u = i[t] = bu(
        s,
        o
      );
      tn(e, a, u, r);
    } else l && (fu(e, a, l, r), i[t] = void 0);
  }
}
const mu = /(Once|Passive|Capture)$/, hu = /^on:?(?:Once|Passive|Capture)$/;
function gu(e) {
  let t, n;
  for (; (n = e.match(mu)) && !hu.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Ut(e.slice(2)), t];
}
let ho = 0;
const _u = /* @__PURE__ */ Promise.resolve(), vu = () => ho || (_u.then(() => ho = 0), ho = Date.now());
function bu(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const o = n.value;
    if (ie(o)) {
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
  return n.value = e, n.attached = vu(), n;
}
const Gi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, yu = (e, t, n, s, o, i) => {
  const l = o === "svg";
  t === "class" ? lu(e, s, l) : t === "style" ? cu(e, n, s) : $s(t) ? Vs(t) || pu(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : wu(e, t, s, l)) ? (Wi(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ji(e, t, s, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (xu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Me(s))) ? Wi(e, ze(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), ji(e, t, s, l));
};
function wu(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Gi(t) && ue(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Gi(t) && Me(n) ? !1 : t in e;
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
const Es = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ie(t) ? (n) => hs(t, n) : t;
};
function Su(e) {
  e.target.composing = !0;
}
function Ki(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const vn = /* @__PURE__ */ Symbol("_assign");
function qi(e, t, n) {
  return t && (e = e.trim()), n && (e = Ws(e)), e;
}
const wt = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[vn] = Es(o);
    const i = s || o.props && o.props.type === "number";
    tn(e, t ? "change" : "input", (l) => {
      l.target.composing || e[vn](qi(e.value, n, i));
    }), (n || i) && tn(e, "change", () => {
      e.value = qi(e.value, n, i);
    }), t || (tn(e, "compositionstart", Su), tn(e, "compositionend", Ki), tn(e, "change", Ki));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: i } }, l) {
    if (e[vn] = Es(l), e.composing) return;
    const a = (i || e.type === "number") && !/^0\d/.test(e.value) ? Ws(e.value) : e.value, r = t ?? "";
    if (a === r)
      return;
    const u = e.getRootNode();
    (u instanceof Document || u instanceof ShadowRoot) && u.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === r) || (e.value = r);
  }
}, Cu = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = Bs(t);
    tn(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? Ws(Ts(l)) : Ts(l)
      );
      e[vn](
        e.multiple ? o ? new Set(i) : i : i[0]
      ), e._assigning = !0, wn(() => {
        e._assigning = !1;
      });
    }), e[vn] = Es(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Xi(e, t);
  },
  beforeUpdate(e, t, n) {
    e[vn] = Es(n);
  },
  updated(e, { value: t }) {
    e._assigning || Xi(e, t);
  }
};
function Xi(e, t) {
  const n = e.multiple, s = ie(t);
  if (!(n && !s && !Bs(t))) {
    for (let o = 0, i = e.options.length; o < i; o++) {
      const l = e.options[o], a = Ts(l);
      if (n)
        if (s) {
          const r = typeof a;
          r === "string" || r === "number" ? l.selected = t.some((u) => String(u) === String(a)) : l.selected = sr(t, a) > -1;
        } else
          l.selected = t.has(a);
      else if (Zn(Ts(l), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Ts(e) {
  return "_value" in e ? e._value : e.value;
}
const Fu = ["ctrl", "shift", "alt", "meta"], Lu = {
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
}, Ps = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...i) => {
    for (let l = 0; l < t.length; l++) {
      const a = Lu[t[l]];
      if (a && a(o, t)) return;
    }
    return e(o, ...i);
  });
}, Mu = {
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
    const i = Ut(o.key);
    if (t.some(
      (l) => l === i || Mu[l] === i
    ))
      return e(o);
  });
}, Iu = /* @__PURE__ */ Pe({ patchProp: yu }, Qc);
let Yi;
function La() {
  return Yi || (Yi = Dc(Iu));
}
const Ji = (...e) => {
  La().render(...e);
}, Zs = (...e) => {
  const t = La().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = Au(s);
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
function Au(e) {
  return Me(e) ? document.querySelector(e) : e;
}
const eo = {
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
}, Pu = {
  accent: "#d5ff40",
  accentInk: "#14150f",
  panel: "#181916",
  panelAlt: "#232620",
  text: "#edf2e2",
  muted: "#8b9483",
  danger: "#ff5c72",
  ok: "#3ed98c"
}, Ru = {
  default: eo,
  cyberpunk: Eu,
  fallout: Tu,
  travelmate: Pu
}, kt = { ...eo };
let Bn = null, Hn = null;
function Eo(e) {
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
  e.id = "fil-brand-vars", e.textContent = `:root{${Eo(eo)}--fil-radius:8px;--fil-node-pad:6px 8px 14px 8px;--fil-node-gap:4px;--fil-row-pad:4px 6px;--fil-input-border:rgba(240,138,69,0.35);${Ou}}
.comfy-theme-light{${Eo(Du)}--fil-input-border:rgba(201,104,44,0.35);${$u}}
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
}`, document.head.appendChild(e), Bn = document.createElement("style"), Bn.id = "fil-theme-vars", document.head.appendChild(Bn), Hn = document.createElement("style"), Hn.id = "fil-theme-effects", document.head.appendChild(Hn);
}
function Ma(e) {
  const t = Ru[e] ?? eo;
  Object.assign(kt, t), !(typeof document > "u") && (document.documentElement.dataset.filTheme = e, Bn && (Bn.textContent = e === "default" ? "" : `:root{${Eo(t)}}`), Hn && (Hn.textContent = Nu[e] ?? ""));
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
    ], s = e, o = t, i = X(() => s.presets ?? n);
    function l(j) {
      o("update:modelValue", j);
    }
    function a(j) {
      return Math.min(1, Math.max(0, j));
    }
    function r(j) {
      const N = /^#?([0-9a-f]{6})$/i.exec(j.trim());
      if (!N) return null;
      const $ = parseInt(N[1], 16);
      return [$ >> 16 & 255, $ >> 8 & 255, $ & 255];
    }
    function u(j, N, $) {
      const O = (C) => Math.round(a(C / 255) * 255).toString(16).padStart(2, "0");
      return `#${O(j)}${O(N)}${O($)}`;
    }
    function c(j, N, $) {
      const O = j / 255, C = N / 255, v = $ / 255, R = Math.max(O, C, v), ae = Math.min(O, C, v), ne = R - ae;
      let _e = 0;
      ne !== 0 && (R === O ? _e = (C - v) / ne % 6 : R === C ? _e = (v - O) / ne + 2 : _e = (O - C) / ne + 4, _e *= 60, _e < 0 && (_e += 360));
      const tt = R === 0 ? 0 : ne / R;
      return [_e, tt, R];
    }
    function d(j, N, $) {
      const O = $ * N, C = O * (1 - Math.abs(j / 60 % 2 - 1)), v = $ - O;
      let [R, ae, ne] = [0, 0, 0];
      return j < 60 ? [R, ae, ne] = [O, C, 0] : j < 120 ? [R, ae, ne] = [C, O, 0] : j < 180 ? [R, ae, ne] = [0, O, C] : j < 240 ? [R, ae, ne] = [0, C, O] : j < 300 ? [R, ae, ne] = [C, 0, O] : [R, ae, ne] = [O, 0, C], [(R + v) * 255, (ae + v) * 255, (ne + v) * 255];
    }
    const f = /* @__PURE__ */ oe(0), p = /* @__PURE__ */ oe(0), h = /* @__PURE__ */ oe(0), _ = /* @__PURE__ */ oe(s.modelValue);
    function F(j) {
      const N = r(j);
      if (!N) return;
      const [$, O, C] = c(...N);
      f.value = $, p.value = O, h.value = C, _.value = u(...N);
    }
    Te(() => s.modelValue, (j) => F(j), { immediate: !0 });
    const w = X(() => u(...d(f.value, p.value, h.value)));
    function x() {
      o("update:modelValue", w.value), _.value = w.value;
    }
    function I() {
      const j = r(_.value);
      if (!j) {
        _.value = w.value;
        return;
      }
      const [N, $, O] = c(...j);
      f.value = N, p.value = $, h.value = O, o("update:modelValue", u(...j));
    }
    const b = /* @__PURE__ */ oe(null), S = /* @__PURE__ */ oe(null);
    function M(j) {
      const N = b.value;
      if (!N) return;
      const $ = N.getBoundingClientRect();
      p.value = a((j.clientX - $.left) / $.width), h.value = a(1 - (j.clientY - $.top) / $.height), x();
    }
    function A(j) {
      const N = S.value;
      if (!N) return;
      const $ = N.getBoundingClientRect();
      f.value = a((j.clientX - $.left) / $.width) * 360, x();
    }
    function T(j) {
      j.preventDefault(), M(j);
      const N = (O) => M(O), $ = () => {
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
    const G = X(() => `hsl(${f.value}, 100%, 50%)`), q = X(() => ({
      left: `${p.value * 100}%`,
      top: `${(1 - h.value) * 100}%`
    })), U = X(() => ({ left: `${f.value / 360 * 100}%` }));
    return (j, N) => (L(), k("div", Bu, [
      P("div", {
        ref_key: "svRef",
        ref: b,
        class: "fil-cp-sv",
        style: qe({ background: G.value }),
        onPointerdown: T
      }, [
        N[1] || (N[1] = P("div", { class: "fil-cp-sv-white" }, null, -1)),
        N[2] || (N[2] = P("div", { class: "fil-cp-sv-black" }, null, -1)),
        P("div", {
          class: "fil-cp-sv-thumb",
          style: qe(q.value)
        }, null, 4)
      ], 36),
      P("div", {
        ref_key: "hueRef",
        ref: S,
        class: "fil-cp-hue",
        onPointerdown: E
      }, [
        P("div", {
          class: "fil-cp-hue-thumb",
          style: qe(U.value)
        }, null, 4)
      ], 544),
      P("div", Hu, [
        P("span", {
          class: "fil-cp-swatch",
          style: qe({ background: w.value })
        }, null, 4),
        Qe(P("input", {
          "onUpdate:modelValue": N[0] || (N[0] = ($) => _.value = $),
          class: "fil-cp-hex-input",
          type: "text",
          spellcheck: "false",
          "aria-label": "Hex color",
          onKeydown: _s(I, ["enter"]),
          onBlur: I
        }, null, 544), [
          [wt, _.value]
        ])
      ]),
      P("div", Uu, [
        (L(!0), k(fe, null, ke(i.value, ($) => (L(), k("button", {
          key: $,
          class: me(["fil-color-swatch", { "is-active": e.modelValue === $ }]),
          style: qe({ "--swatch": $ }),
          "aria-selected": e.modelValue === $,
          "aria-label": $,
          title: $,
          onClick: (O) => l($)
        }, null, 14, ju))), 128))
      ])
    ]));
  }
}), Fe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, zu = /* @__PURE__ */ Fe(Wu, [["__scopeId", "data-v-c4d5f476"]]), Qi = "__fil_color_picker_popup__";
function Gu(e) {
  return [
    {
      content: "Change color…",
      callback: (t, n, s) => Ku(e, s)
    }
  ];
}
function Ku(e, t) {
  const n = document.getElementById(Qi);
  n && n.remove();
  const s = document.createElement("div");
  s.id = Qi;
  const o = 176, i = 260, l = t ? Math.min(t.clientX, window.innerWidth - o - 8) : window.innerWidth / 2 - o / 2, a = t ? Math.min(t.clientY, window.innerHeight - i - 8) : window.innerHeight / 2 - i / 2;
  s.style.cssText = `position:fixed;z-index:10001;top:${Math.max(8, a)}px;left:${Math.max(8, l)}px;`, document.body.appendChild(s);
  function r(p) {
    e.color = p, e.__fx && (e.__fx.color = p), e.properties = e.properties || {}, e.properties.fil_custom_color = !0, u();
  }
  function u() {
    Ji(null, s), s.remove(), document.removeEventListener("mousedown", c, !0), document.removeEventListener("keydown", d, !0);
  }
  function c(p) {
    s.contains(p.target) || u();
  }
  function d(p) {
    p.key === "Escape" && u();
  }
  const f = xa(zu, {
    modelValue: e.color ?? "#78716c",
    "onUpdate:modelValue": (p) => r(p)
  });
  Ji(f, s), document.addEventListener("mousedown", c, !0), document.addEventListener("keydown", d, !0), wn(() => {
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
  s.onNodeCreated = function(...l) {
    const a = o == null ? void 0 : o.apply(this, l);
    return this.color = kt.accent, this.bgcolor = kt.panelAlt, a;
  }, Object.getOwnPropertyDescriptor(s, "onResize") || Object.defineProperty(s, "onResize", {
    get() {
      if (this.hasOwnProperty("__filOnResize")) return this.__filOnResize;
      const l = Object.getPrototypeOf(s);
      return l ? l.onResize : void 0;
    },
    set(l) {
      const a = l;
      this.__filOnResize = function(r) {
        if (!a) return;
        const u = this.widgets || [], c = u.filter((d) => !d.hidden);
        this.widgets = c;
        try {
          a.apply(this, [r]);
        } finally {
          this.widgets = u;
        }
      };
    }
  }), s.onDrawTitleBar = function(l, a, r, u, c) {
    var h;
    const d = ((h = globalThis.LiteGraph) == null ? void 0 : h.ROUND_RADIUS) ?? 8, f = !!this.collapsed;
    l.fillStyle = kt.panel, l.beginPath(), l.roundRect(0, -a, r[0], a, f ? [d] : [d, d, 0, 0]), l.fill();
    const p = 3;
    l.fillStyle = c || kt.accent, l.beginPath(), l.roundRect(0, -a, p, a, f ? [d, 0, 0, d] : [d, 0, 0, 0]), l.fill();
  };
  const i = s.getExtraMenuOptions;
  s.getExtraMenuOptions = function(...l) {
    const a = i == null ? void 0 : i.apply(this, l), r = l[1];
    return Array.isArray(r) && r.push(null, ...Gu(this)), a;
  };
}
function Xu(e) {
  var s, o, i;
  const t = (s = e.graph) == null ? void 0 : s._nodes;
  if (!t) return;
  for (const l of t)
    l._filFamily && ((o = l.properties) != null && o.fil_custom_color || (l.color = kt.accent, l.bgcolor = kt.panelAlt));
  const n = e.canvas;
  (i = n == null ? void 0 : n.setDirty) == null || i.call(n, !0, !0);
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Ia;
const to = (e) => Ia = e, ka = (
  /* istanbul ignore next */
  Symbol()
);
function To(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Un;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Un || (Un = {}));
function Aa() {
  const e = yl(!0), t = e.run(() => /* @__PURE__ */ oe({}));
  let n = [], s = [];
  const o = Xo({
    install(i) {
      to(o), o._a = i, i.provide(ka, o), i.config.globalProperties.$pinia = o, s.forEach((l) => n.push(l)), s = [];
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
const Da = () => {
};
function Zi(e, t, n, s = Da) {
  e.push(t);
  const o = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), s());
  };
  return !n && wl() && or(o), o;
}
function fn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Yu = (e) => e(), el = Symbol(), go = Symbol();
function Po(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], o = e[n];
    To(o) && To(s) && e.hasOwnProperty(n) && !/* @__PURE__ */ ye(s) && !/* @__PURE__ */ yt(s) ? e[n] = Po(o, s) : e[n] = s;
  }
  return e;
}
const Ju = (
  /* istanbul ignore next */
  Symbol()
);
function Qu(e) {
  return !To(e) || !e.hasOwnProperty(Ju);
}
const { assign: $t } = Object;
function Zu(e) {
  return !!(/* @__PURE__ */ ye(e) && e.effect);
}
function ed(e, t, n, s) {
  const { state: o, actions: i, getters: l } = t, a = n.state.value[e];
  let r;
  function u() {
    a || (n.state.value[e] = o ? o() : {});
    const c = /* @__PURE__ */ Mr(n.state.value[e]);
    return $t(c, i, Object.keys(l || {}).reduce((d, f) => (d[f] = Xo(X(() => {
      to(n);
      const p = n._s.get(e);
      return l[f].call(p, p);
    })), d), {}));
  }
  return r = Ea(e, u, t, n, s, !0), r;
}
function Ea(e, t, n = {}, s, o, i) {
  let l;
  const a = $t({ actions: {} }, n), r = { deep: !0 };
  let u, c, d = [], f = [], p;
  const h = s.state.value[e];
  !i && !h && (s.state.value[e] = {});
  let _;
  function F(T) {
    let E;
    u = c = !1, typeof T == "function" ? (T(s.state.value[e]), E = {
      type: Un.patchFunction,
      storeId: e,
      events: p
    }) : (Po(s.state.value[e], T), E = {
      type: Un.patchObject,
      payload: T,
      storeId: e,
      events: p
    });
    const G = _ = Symbol();
    wn().then(() => {
      _ === G && (u = !0);
    }), c = !0, fn(d, E, s.state.value[e]);
  }
  const w = i ? function() {
    const { state: E } = n, G = E ? E() : {};
    this.$patch((q) => {
      $t(q, G);
    });
  } : (
    /* istanbul ignore next */
    Da
  );
  function x() {
    l.stop(), d = [], f = [], s._s.delete(e);
  }
  const I = (T, E = "") => {
    if (el in T)
      return T[go] = E, T;
    const G = function() {
      to(s);
      const q = Array.from(arguments), U = [], j = [];
      function N(C) {
        U.push(C);
      }
      function $(C) {
        j.push(C);
      }
      fn(f, {
        args: q,
        name: G[go],
        store: S,
        after: N,
        onError: $
      });
      let O;
      try {
        O = T.apply(this && this.$id === e ? this : S, q);
      } catch (C) {
        throw fn(j, C), C;
      }
      return O instanceof Promise ? O.then((C) => (fn(U, C), C)).catch((C) => (fn(j, C), Promise.reject(C))) : (fn(U, O), O);
    };
    return G[el] = !0, G[go] = E, G;
  }, b = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: Zi.bind(null, f),
    $patch: F,
    $reset: w,
    $subscribe(T, E = {}) {
      const G = Zi(d, T, E.detached, () => q()), q = l.run(() => Te(() => s.state.value[e], (U) => {
        (E.flush === "sync" ? c : u) && T({
          storeId: e,
          type: Un.direct,
          events: p
        }, U);
      }, $t({}, r, E)));
      return G;
    },
    $dispose: x
  }, S = /* @__PURE__ */ rn(b);
  s._s.set(e, S);
  const A = (s._a && s._a.runWithContext || Yu)(() => s._e.run(() => (l = yl()).run(() => t({ action: I }))));
  for (const T in A) {
    const E = A[T];
    if (/* @__PURE__ */ ye(E) && !Zu(E) || /* @__PURE__ */ yt(E))
      i || (h && Qu(E) && (/* @__PURE__ */ ye(E) ? E.value = h[T] : Po(E, h[T])), s.state.value[e][T] = E);
    else if (typeof E == "function") {
      const G = I(E, T);
      A[T] = G, a.actions[T] = E;
    }
  }
  return $t(S, A), $t(/* @__PURE__ */ he(S), A), Object.defineProperty(S, "$state", {
    get: () => s.state.value[e],
    set: (T) => {
      F((E) => {
        $t(E, T);
      });
    }
  }), s._p.forEach((T) => {
    $t(S, l.run(() => T({
      store: S,
      app: s._a,
      pinia: s,
      options: a
    })));
  }), h && i && n.hydrate && n.hydrate(S.$state, h), u = !0, c = !0, S;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ni(e, t, n) {
  let s, o;
  const i = typeof t == "function";
  typeof e == "string" ? (s = e, o = i ? n : t) : (o = e, s = e.id);
  function l(a, r) {
    const u = Vr();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (u ? Nn(ka, null) : null), a && to(a), a = Ia, a._s.has(s) || (i ? Ea(s, t, o, a) : ed(s, o, a)), a._s.get(s);
  }
  return l.$id = s, l;
}
function td(e) {
  {
    const t = /* @__PURE__ */ he(e), n = {};
    for (const s in t) {
      const o = t[s];
      o.effect ? n[s] = // ...
      X({
        get: () => e[s],
        set(i) {
          e[s] = i;
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
function no() {
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
    return (t, n) => (L(), k("div", sd, [
      (L(), Ie(ac(e.root), { state: e.state }, null, 8, ["state"]))
    ]));
  }
}), id = /* @__PURE__ */ Fe(od, [["__scopeId", "data-v-15f48dad"]]);
function Ro(e, t, n) {
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
function Ta(e, t, n, s = null) {
  let o = e instanceof Element ? e : null;
  for (; o && o !== s; ) {
    if (Ro(o, t, n)) return !0;
    o = o.parentElement;
  }
  return !1;
}
function ld(e, t, n, s) {
  const o = (i) => {
    const l = i.getBoundingClientRect();
    return l.width > 0 && l.height > 0 && e >= l.left && e <= l.right && t >= l.top && t <= l.bottom;
  };
  for (const i of document.querySelectorAll(".dom-widget"))
    if (o(i)) {
      if (Ro(i, n, s)) return i;
      for (const l of i.querySelectorAll("*"))
        if (o(l) && Ro(l, n, s)) return l;
    }
  return null;
}
const ad = "__filVueMounted";
function Wt(e, t, n, s) {
  const o = e;
  if (typeof o.addDOMWidget != "function")
    return console.warn(`[FiL_Design_ImageMind] domWidgetHost: node.addDOMWidget not available for "${t}" — ComfyUI core too old?`), null;
  const i = document.createElement("div");
  i.className = "fil-vue-host", i.style.width = "100%", i.style.boxSizing = "border-box", i.style.height = "auto", i[ad] = !0, i.addEventListener(
    "wheel",
    (x) => {
      var b, S;
      if (Ta(x.target, x.deltaX, x.deltaY, i.parentElement)) return;
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
  const l = /* @__PURE__ */ rn(s.state);
  let a = s.height;
  const r = () => {
    const x = i.firstElementChild;
    return !x || x.clientHeight === 0 || (a = Math.ceil(x.scrollHeight / 4) * 4), a;
  }, u = o.addDOMWidget(t, "custom", i, {
    hideOnZoom: !0,
    getValue: () => l,
    setValue: (x) => {
      if (x && typeof x == "object") {
        const I = x, b = l;
        I.nodeState && typeof I.nodeState == "object" && b.nodeState && Object.assign(b.nodeState, I.nodeState), I.ui && typeof I.ui == "object" && b.ui && Object.assign(b.ui, I.ui);
        for (const [S, M] of Object.entries(I))
          S !== "nodeState" && S !== "ui" && (b[S] = M);
      }
    },
    getHeight: r,
    ...s.onDraw ? { onDraw: s.onDraw } : {}
  }), c = Zs(id, { root: n, state: l, comfyClass: o.comfyClass ?? "default" }).use(no());
  c.mount(i);
  function d() {
    var E, G;
    if (r(), !o.computeSize || !o.setSize || !o.size) return;
    const [x, I] = o.size, [, b] = o.computeSize(), [S, M] = o.minSize ?? [0, 0], A = Math.max(x, S), T = Math.max(b, I, M);
    A === x && Math.abs(T - I) < 2 || (o.setSize([A, T]), (G = (E = o.graph) == null ? void 0 : E.setDirtyCanvas) == null || G.call(E, !0, !0));
  }
  let f = 0;
  const p = new ResizeObserver(() => {
    f || (f = requestAnimationFrame(() => {
      f = 0, d();
    }));
  });
  p.observe(i);
  let h = 20;
  (function x() {
    d(), h-- > 0 && requestAnimationFrame(x);
  })();
  const _ = setInterval(d, 400), F = { widget: u, host: i, app: c, state: l, unmount: w };
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
      const i = te(e, String(s));
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
const tl = 4, rd = {
  info: 3500,
  success: 3e3,
  warning: 5e3,
  error: 6e3
};
let cd = 1;
const Bt = /* @__PURE__ */ ni("fil/toast", () => {
  const e = /* @__PURE__ */ oe([]), t = /* @__PURE__ */ oe([]);
  function n(u, c, d = {}) {
    const f = {
      id: cd++,
      level: u,
      text: c == null ? "" : String(c),
      timeout: d.timeout ?? rd[u],
      sticky: !!d.sticky,
      action: d.action ?? null
    };
    return e.value.length < tl ? e.value.push(f) : t.value.push(f), f;
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
    e.value = e.value.filter((c) => c.id !== u), t.value.length > 0 && e.value.length < tl && e.value.push(t.value.shift());
  }
  function r() {
    e.value = [], t.value = [];
  }
  return { items: e, queue: t, info: s, success: o, warning: i, error: l, push: n, dismiss: a, dismissAll: r };
});
function ud() {
  var t, n;
  return ((n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.toast) ?? null;
}
function us(e, t) {
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
  info: (e) => us("info", e),
  success: (e) => us("success", e),
  warning: (e) => us("warning", e),
  error: (e) => us("error", e),
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
function nl() {
  var t, n, s, o, i, l, a, r;
  return !!(((o = (s = (n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.setting) == null ? void 0 : s.get) == null ? void 0 : o.call(s, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? ((r = (a = (l = (i = globalThis.app) == null ? void 0 : i.ui) == null ? void 0 : l.settings) == null ? void 0 : a.getSettingValue) == null ? void 0 : r.call(a, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? !0);
}
function sl() {
  function e(s, o, i, l) {
  }
  function t(s, o, i, l) {
    nl() && Ze.success("Connected");
  }
  function n(s, o) {
    nl() && Ze.info("Disconnected");
  }
  return { onConnectionsChange: e, onConnect: t, onDisconnect: n };
}
function ut(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype, n = t.onNodeCreated;
  t.onNodeCreated = function(...i) {
    const l = n == null ? void 0 : n.apply(this, i);
    return this.color, l;
  };
  const s = t.onConnect;
  t.onConnect = function(...i) {
    const { onConnect: l } = sl();
    return l(...i), s == null ? void 0 : s.apply(this, i);
  };
  const o = t.onDisconnect;
  t.onDisconnect = function(...i) {
    const { onDisconnect: l } = sl();
    return l(...i), o == null ? void 0 : o.apply(this, i);
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
      const r = o == null ? void 0 : o.apply(this, a), u = this, c = te(u, "seed"), d = pe(c, "number", 0);
      c && (c.hidden = !0);
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
      return Object.defineProperty(p, "node", { value: u, enumerable: !1, configurable: !0 }), u._filSeedState = p, Wt(u, "fil_seed_view", fd, { state: p, height: 52 }), r;
    };
    const i = s.onConfigure;
    s.onConfigure = function(...a) {
      const r = i == null ? void 0 : i.apply(this, a), u = this, c = u._filSeedState;
      return c && (c.nodeState.seed = pe(te(u, "seed"), "number", 0)), r;
    };
    const l = s.onRemoved;
    s.onRemoved = function(...a) {
      return zt(this), l == null ? void 0 : l.apply(this, a);
    }, ut(e);
  }
}, md = /* @__PURE__ */ jt(() => Promise.resolve().then(() => Mh)), hd = {
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
    ], i = s.onNodeCreated;
    s.onNodeCreated = function(...r) {
      const u = i == null ? void 0 : i.apply(this, r), c = this, d = pe(te(c, "provider"), "string", "ollama"), f = pe(te(c, "model"), "string", "(loading...)"), p = pe(te(c, "temperature"), "number", 0.7), h = pe(te(c, "max_tokens"), "number", 0), _ = pe(te(c, "rate_limit_ms"), "number", 100), F = pe(te(c, "seed"), "number", -1), w = pe(te(c, "max_image_side"), "number", 1024);
      for (const I of ["provider", "model", "refresh_models", "temperature", "max_tokens", "rate_limit_ms", "seed", "control_after_generate", "max_image_side"]) {
        const b = te(c, I);
        b && (b.hidden = !0);
      }
      const x = {
        nodeState: un(c, {
          provider: d,
          model: f,
          temperature: p,
          max_tokens: h,
          rate_limit_ms: _,
          seed: F,
          max_image_side: w
        }),
        initialValues: {
          provider: d,
          model: f,
          temperature: p,
          max_tokens: h,
          rate_limit_ms: _,
          seed: F,
          max_image_side: w
        },
        ui: {}
      };
      return Object.defineProperty(x, "node", { value: c, enumerable: !1, configurable: !0 }), c._filProviderState = x, Wt(c, "fil_provider_view", md, { state: x, height: 180 }), u;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...r) {
      const u = l == null ? void 0 : l.apply(this, r), c = this, d = c._filProviderState;
      if (!d) return u;
      const f = d.nodeState;
      for (const { name: p, kind: h, fallback: _ } of o)
        f[p] = pe(te(c, p), h, _);
      return u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...r) {
      return zt(this), a == null ? void 0 : a.apply(this, r);
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
    ], i = s.onNodeCreated;
    s.onNodeCreated = function(...r) {
      const u = i == null ? void 0 : i.apply(this, r), c = this, d = {}, f = {};
      for (const w of o) {
        const x = te(c, w);
        if (!x) continue;
        const I = pe(x, "string", "");
        d[w] = I, f[w] = I, x.hidden = !0;
      }
      const p = te(c, "seed"), h = te(c, "control_after_generate"), _ = pe(p, "number", -1);
      p && (p.hidden = !0), h && (h.hidden = !0), d.seed = _, f.seed = _, f.seed_mode = "random";
      const F = {
        nodeState: un(c, f),
        initialValues: d,
        ui: {},
        lastRunSeed: null
      };
      return Object.defineProperty(F, "node", { value: c, enumerable: !1, configurable: !0 }), c._filScannerSeedState = F, Wt(c, "fil_scanner_view", gd, { state: F, height: 460 }), u;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...r) {
      const u = l == null ? void 0 : l.apply(this, r), c = this, d = c._filScannerSeedState;
      if (!d) return u;
      for (const f of o) {
        const p = te(c, f);
        p && (d.nodeState[f] = pe(p, "string", ""));
      }
      return d.nodeState.seed = pe(te(c, "seed"), "number", -1), u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...r) {
      return zt(this), a == null ? void 0 : a.apply(this, r);
    }, ut(e);
  }
}, vd = /* @__PURE__ */ jt(() => Promise.resolve().then(() => qh)), bd = {
  id: "FiLNeuroCleaner",
  register(e, t) {
    ct(e, {
      minSize: [280, 185],
      family: "tool",
      description: "GPU VRAM and loaded model memory cleanup.",
      badges: [{ text: "utility", color: "#888", text_color: "#fff" }]
    });
    const s = e.prototype, o = {
      clean_vram: !0,
      unload_diffusion: !0,
      unload_clip: !1,
      unload_vae: !1,
      unload_control: !1
    }, i = s.onNodeCreated;
    s.onNodeCreated = function(...r) {
      const u = i == null ? void 0 : i.apply(this, r), c = this, d = {}, f = {};
      for (const h of Object.keys(o)) {
        const _ = te(c, h), F = pe(_, "boolean", o[h]);
        d[h] = F, f[h] = F, _ && (_.hidden = !0);
      }
      const p = { nodeState: un(c, d), initialValues: f, ui: {} };
      return c._filCleanerState = p, Wt(c, "fil_cleaner_view", vd, { state: p, height: 185 }), u;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...r) {
      const u = l == null ? void 0 : l.apply(this, r), c = this, d = c._filCleanerState;
      if (!d) return u;
      for (const f of Object.keys(o))
        d.nodeState[f] = pe(te(c, f), "boolean", o[f]);
      return u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...r) {
      return zt(this), a == null ? void 0 : a.apply(this, r);
    }, ut(e);
  }
}, yd = /* @__PURE__ */ jt(() => Promise.resolve().then(() => tg)), wd = {
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
      const r = o == null ? void 0 : o.apply(this, a), u = this, c = te(u, "swap"), d = te(u, "resize_mode"), f = te(u, "max_resolution"), p = {
        swap: pe(c, "boolean", !1),
        resize_mode: pe(d, "string", "Off"),
        max_resolution: pe(f, "number", 4096)
      };
      for (const w of [c, d, f])
        w && (w.hidden = !0);
      const h = {
        nodeState: un(u, p),
        initialValues: { ...p },
        ui: {
          compare_mode: "wipe",
          compare_position: 0.5,
          compare_opacity: 0.5,
          settings_collapsed: !0
        }
      };
      u._filCompareState = h;
      const _ = Wt(u, "fil_compare_view", yd, { state: h, height: 380 }), F = u.onExecuted;
      return u.onExecuted = function(w) {
        const x = F == null ? void 0 : F.apply(this, [w]), I = w;
        return _ && I && (_.state.ui.compare_images = { a: I.a_images ?? [], b: I.b_images ?? [] }), x;
      }, r;
    };
    const i = s.onConfigure;
    s.onConfigure = function(...a) {
      const r = i == null ? void 0 : i.apply(this, a), u = this, c = u._filCompareState;
      return c && (c.nodeState.swap = pe(te(u, "swap"), "boolean", !1), c.nodeState.resize_mode = pe(te(u, "resize_mode"), "string", "Off"), c.nodeState.max_resolution = pe(te(u, "max_resolution"), "number", 4096)), r;
    };
    const l = s.onRemoved;
    s.onRemoved = function(...a) {
      return zt(this), l == null ? void 0 : l.apply(this, a);
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
    }, i = {
      auto_overlap: !1,
      auto_mode: !1,
      non_square_tiles: !1,
      auto_fix_thin_edges: !1
    }, l = { auto_profile: "Balanced" }, a = s.onNodeCreated;
    s.onNodeCreated = function(...c) {
      const d = a == null ? void 0 : a.apply(this, c), f = this, p = {}, h = {};
      for (const F of Object.keys(o)) {
        const w = te(f, F);
        if (!w) continue;
        const x = pe(w, "number", o[F]);
        p[F] = x, h[F] = x, w.hidden = !0;
      }
      for (const F of Object.keys(i)) {
        const w = te(f, F);
        if (!w) continue;
        const x = pe(w, "boolean", i[F]);
        p[F] = x, h[F] = x, w.hidden = !0;
      }
      for (const F of Object.keys(l)) {
        const w = te(f, F);
        if (!w) continue;
        const x = pe(w, "string", l[F]);
        p[F] = x, h[F] = x, w.hidden = !0;
      }
      const _ = { nodeState: un(f, p), initialValues: h, ui: {} };
      return f._filUpscaleState = _, Wt(f, "fil_upscale_view", xd, { state: _, height: 420 }), d;
    };
    const r = s.onConfigure;
    s.onConfigure = function(...c) {
      const d = r == null ? void 0 : r.apply(this, c), f = this, p = f._filUpscaleState;
      if (!p) return d;
      for (const h of Object.keys(o))
        p.nodeState[h] = pe(te(f, h), "number", o[h]);
      for (const h of Object.keys(i))
        p.nodeState[h] = pe(te(f, h), "boolean", i[h]);
      for (const h of Object.keys(l))
        p.nodeState[h] = pe(te(f, h), "string", l[h]);
      return d;
    };
    const u = s.onRemoved;
    s.onRemoved = function(...c) {
      return zt(this), u == null ? void 0 : u.apply(this, c);
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
    }, i = {
      auto_overlap: !1,
      auto_mode: !1,
      non_square_tiles: !1,
      auto_fix_thin_edges: !1
    }, l = { auto_profile: "Balanced" }, a = s.onNodeCreated;
    s.onNodeCreated = function(...c) {
      const d = a == null ? void 0 : a.apply(this, c), f = this, p = {}, h = {};
      for (const F of Object.keys(o)) {
        const w = te(f, F);
        if (!w) continue;
        const x = pe(w, "number", o[F]);
        p[F] = x, h[F] = x, w.hidden = !0;
      }
      for (const F of Object.keys(i)) {
        const w = te(f, F);
        if (!w) continue;
        const x = pe(w, "boolean", i[F]);
        p[F] = x, h[F] = x, w.hidden = !0;
      }
      for (const F of Object.keys(l)) {
        const w = te(f, F);
        if (!w) continue;
        const x = pe(w, "string", l[F]);
        p[F] = x, h[F] = x, w.hidden = !0;
      }
      const _ = { nodeState: un(f, p), initialValues: h, ui: {} };
      return f._filUpscaleState = _, Wt(f, "fil_upscale_simple_view", Cd, { state: _, height: 420 }), d;
    };
    const r = s.onConfigure;
    s.onConfigure = function(...c) {
      const d = r == null ? void 0 : r.apply(this, c), f = this, p = f._filUpscaleState;
      if (!p) return d;
      for (const h of Object.keys(o))
        p.nodeState[h] = pe(te(f, h), "number", o[h]);
      for (const h of Object.keys(i))
        p.nodeState[h] = pe(te(f, h), "boolean", i[h]);
      for (const h of Object.keys(l))
        p.nodeState[h] = pe(te(f, h), "string", l[h]);
      return d;
    };
    const u = s.onRemoved;
    s.onRemoved = function(...c) {
      return zt(this), u == null ? void 0 : u.apply(this, c);
    }, ut(e);
  }
}, Ld = {
  id: "FiLTileAssembly",
  register(e, t) {
    ct(e, {
      minSize: [270, 200],
      family: "image",
      description: "Recombines processed tiles back into one image, feathered across the real overlap zones.",
      badges: [{ text: "tile", color: "#62c987", text_color: "#1a1a1a" }]
    }), ut(e);
  }
}, Md = {
  id: "FiLKSampler",
  register(e, t) {
    ct(e, {
      minSize: [270, 260],
      family: "sampling",
      description: "Full sampler/scheduler set, passthrough outputs, preview, HighRes-fix script.",
      badges: [{ text: "sampler", color: "#7aa2f7", text_color: "#0b0e14" }]
    }), ut(e);
  }
}, Id = /* @__PURE__ */ jt(() => Promise.resolve().then(() => bg)), No = {
  upscale_by: 1.25,
  denoise: 0.56,
  iterations: 1,
  strength: 1,
  seed: 0,
  hires_steps: 12
}, Oo = {
  upscale_type: "latent",
  hires_ckpt_name: "(use same)",
  latent_upscaler: "nearest-exact",
  pixel_upscaler: "",
  control_net_name: "",
  preprocessor: "none"
}, $o = {
  use_same_seed: !0,
  use_controlnet: !1
}, kd = [
  ...Object.keys(No),
  ...Object.keys(Oo),
  ...Object.keys($o)
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
    const s = e.prototype, o = (r, u) => {
      for (const c of Object.keys(No))
        u[c] = pe(te(r, c), "number", No[c]);
      for (const c of Object.keys(Oo))
        u[c] = pe(te(r, c), "string", Oo[c]);
      for (const c of Object.keys($o))
        u[c] = pe(te(r, c), "boolean", $o[c]);
    }, i = s.onNodeCreated;
    s.onNodeCreated = function(...r) {
      const u = i == null ? void 0 : i.apply(this, r), c = this, d = {};
      o(c, d);
      for (const h of kd) {
        const _ = te(c, h);
        _ && (_.hidden = !0);
      }
      const f = te(c, "control_after_generate");
      f && (f.hidden = !0, f.value = "fixed"), d.seed_mode = "random";
      const p = {
        nodeState: un(c, d),
        initialValues: { ...d },
        ui: {},
        lastRunSeed: null
      };
      return Object.defineProperty(p, "node", { value: c, enumerable: !1, configurable: !0 }), c._filHiResFixState = p, Wt(c, "fil_hiresfix_view", Id, { state: p, height: 420 }), u;
    };
    const l = s.onConfigure;
    s.onConfigure = function(...r) {
      const u = l == null ? void 0 : l.apply(this, r), c = this, d = c._filHiResFixState;
      return d && o(c, d.nodeState), u;
    };
    const a = s.onRemoved;
    s.onRemoved = function(...r) {
      return zt(this), a == null ? void 0 : a.apply(this, r);
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
  Ld,
  Md,
  Ad,
  Dd
], Pa = Object.fromEntries(
  Ed.map((e) => [e.id, e])
), ds = /* @__PURE__ */ oe({});
let ol = !1;
const Rs = /* @__PURE__ */ ni("fil/help", () => {
  const e = /* @__PURE__ */ oe(null);
  function t(a) {
    for (const [r, u] of Object.entries(a))
      ds.value[r] = u;
  }
  function n() {
    ol || (ol = !0, Promise.resolve().then(() => wg).then(({ HELP_DEFAULTS: a }) => t(a)).catch((a) => console.warn("[FiL_Design_ImageMind] help defaults import failed:", a)));
  }
  function s(a) {
    return ds.value[a];
  }
  function o() {
    return Object.values(ds.value);
  }
  function i(a) {
    n(), e.value = a;
  }
  function l() {
    e.value = null;
  }
  return {
    registry: ds,
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
function Ra(e) {
  return Td[e];
}
const Pd = ["title", "aria-label", "innerHTML"], Rd = /* @__PURE__ */ xe({
  name: "FilIcon",
  __name: "FilIcon",
  props: {
    name: {},
    size: { default: 16 },
    title: {}
  },
  setup(e) {
    return (t, n) => (L(), k("span", {
      class: "fil-icon",
      style: qe({ width: e.size + "px", height: e.size + "px" }),
      title: e.title,
      role: "img",
      "aria-label": e.title ?? e.name,
      innerHTML: g(Ra)(e.name)
    }, null, 12, Pd));
  }
}), Tt = /* @__PURE__ */ Fe(Rd, [["__scopeId", "data-v-dfb78d9f"]]), Nd = ["aria-label"], Od = { class: "fil-modal-header" }, $d = { class: "fil-modal-title" }, Vd = { class: "fil-modal-body" }, Bd = /* @__PURE__ */ xe({
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
    const n = e, s = t, o = /* @__PURE__ */ oe(null), i = /* @__PURE__ */ oe(null);
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
    return Te(
      () => n.open,
      (d) => {
        var f;
        d ? (i.value = document.activeElement, wn(() => {
          var h;
          (h = (o.value ? c(o.value) : [])[0] || o.value) == null || h.focus();
        })) : ((f = i.value) == null || f.focus(), i.value = null);
      }
    ), cn(() => {
      document.addEventListener("keydown", r);
    }), xn(() => {
      document.removeEventListener("keydown", r);
    }), (d, f) => (L(), Ie(Kl, { to: "body" }, [
      Y(tu, { name: "fil-modal" }, {
        default: ns(() => [
          e.open ? (L(), k("div", {
            key: 0,
            ref_key: "modalRef",
            ref: o,
            class: "fil-modal-backdrop",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title || "Dialog",
            onClick: a
          }, [
            P("div", {
              class: "fil-modal-panel",
              style: qe({ maxWidth: e.width })
            }, [
              P("div", Od, [
                P("span", $d, Z(e.title), 1),
                P("button", {
                  class: "fil-modal-close",
                  title: "Close",
                  onClick: l
                }, [
                  Y(Tt, {
                    name: "close",
                    size: 14
                  })
                ])
              ]),
              P("div", Vd, [
                cc(d.$slots, "default", {}, void 0, !0)
              ])
            ], 4)
          ], 8, Nd)) : ee("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), si = /* @__PURE__ */ Fe(Bd, [["__scopeId", "data-v-00452928"]]), Hd = { class: "fil-help-title" }, Ud = {
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
    const t = Rs(), n = X(() => {
      const o = t.activeHelpId;
      return o ? t.get(o) ?? null : null;
    }), s = X({
      get: () => t.activeHelpId !== null,
      set: (o) => {
        o || t.value_close();
      }
    });
    return Te(n, (o) => {
      o || t.value_close();
    }), (o, i) => (L(), Ie(si, {
      open: s.value,
      "onUpdate:open": i[0] || (i[0] = (l) => s.value = l),
      title: "FiL LLM Help",
      width: "600px",
      onClose: i[1] || (i[1] = (l) => g(t).value_close())
    }, {
      default: ns(() => {
        var l;
        return [
          n.value ? (L(), k(fe, { key: 0 }, [
            P("h2", Hd, Z(n.value.title), 1),
            n.value.body ? (L(), k("p", Ud, Z(n.value.body), 1)) : ee("", !0),
            (l = n.value.bullets) != null && l.length ? (L(), k("ul", jd, [
              (L(!0), k(fe, null, ke(n.value.bullets, (a, r) => (L(), k("li", {
                key: r,
                class: "fil-help-bullet"
              }, [
                Y(Tt, {
                  name: "chevronRight",
                  size: 12
                }),
                P("span", null, Z(a), 1)
              ]))), 128))
            ])) : ee("", !0),
            n.value.table ? (L(), k("table", Wd, [
              P("thead", null, [
                P("tr", null, [
                  (L(!0), k(fe, null, ke(n.value.table.headers, (a) => (L(), k("th", { key: a }, Z(a), 1))), 128))
                ])
              ]),
              P("tbody", null, [
                (L(!0), k(fe, null, ke(n.value.table.rows, (a, r) => (L(), k("tr", { key: r }, [
                  (L(!0), k(fe, null, ke(a, (u, c) => (L(), k("td", { key: c }, Z(u), 1))), 128))
                ]))), 128))
              ])
            ])) : ee("", !0),
            n.value.code ? (L(), k("pre", zd, [
              P("code", null, Z(n.value.code), 1)
            ])) : ee("", !0)
          ], 64)) : (L(), k("p", Gd, "No help available for this node."))
        ];
      }),
      _: 1
    }, 8, ["open"]));
  }
}), qd = /* @__PURE__ */ Fe(Kd, [["__scopeId", "data-v-536c1547"]]);
let _o = null;
function Xd(e) {
  if (_o) return;
  const t = document.createElement("div");
  t.id = "__fil_help_popup_host", document.body.appendChild(t), _o = Zs(qd).use(no()), _o.mount(t), console.info("[FiL_Design_ImageMind] help popup mounted");
}
function Yd() {
  var o, i, l, a, r, u, c, d;
  const e = globalThis, t = "FiL_Design_ImageMind.RunButton.AnimationDuration", n = ((a = (l = (i = (o = e.app) == null ? void 0 : o.extensionManager) == null ? void 0 : i.setting) == null ? void 0 : l.get) == null ? void 0 : a.call(l, t, "Normal")) ?? ((d = (c = (u = (r = globalThis.app) == null ? void 0 : r.ui) == null ? void 0 : u.settings) == null ? void 0 : c.getSettingValue) == null ? void 0 : d.call(c, t, "Normal")) ?? "Normal";
  return { Fast: 200, Normal: 400, Slow: 600 }[String(n)] || 400;
}
function Jd(e, t) {
  var u, c, d, f, p, h, _, F, w, x;
  if (!(((f = (d = (c = (u = globalThis.app) == null ? void 0 : u.extensionManager) == null ? void 0 : c.setting) == null ? void 0 : d.get) == null ? void 0 : f.call(d, "FiL_Design_ImageMind.RunButton.Enabled", !0)) ?? ((F = (_ = (h = (p = globalThis.app) == null ? void 0 : p.ui) == null ? void 0 : h.settings) == null ? void 0 : _.getSettingValue) == null ? void 0 : F.call(_, "FiL_Design_ImageMind.RunButton.Enabled", !0)) ?? !0)) return;
  const o = (x = (w = e == null ? void 0 : e.canvas) == null ? void 0 : w.nodeEls) == null ? void 0 : x[t];
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
const Na = "FiL_Design_ImageMind", Mt = "/fil_design_imagemind", an = `[${Na}]`, Zd = `${Na}.UI`;
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
function il(e) {
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
async function En(e) {
  const t = await $a()(e);
  return Oa(t);
}
async function vs(e, t) {
  const n = await $a()(e, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  });
  return Oa(n);
}
const Qt = {
  loadAccounts: () => En(`${Mt}/auth`),
  saveAccounts: (e) => vs(`${Mt}/auth`, {
    accounts: e
  }),
  loadModels: (e, t = !1) => En(`${Mt}/models/${encodeURIComponent(e)}${t ? "?force=1" : ""}`),
  probe: (e, t = "") => vs(`${Mt}/provider_probe`, { provider: e, model: t }),
  listProviders: () => En(`${Mt}/providers`),
  saveCompareImage: (e) => vs(`${Mt}/compare/save`, { image: e }),
  nodeContracts: () => En(`${Mt}/node_contracts`)
};
function Vo(e, t, n) {
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
const ef = "FiL_Design_ImageMind.Language", Va = "en", jn = /* @__PURE__ */ rn({
  lang: Va,
  translations: {},
  loaded: !1
});
let ll = null;
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
  if (ll) return;
  const e = Vo(ef, Va);
  ll = tf(e);
}
function Rt() {
  nf();
  function e(t, n) {
    return jn.translations[t] ?? n;
  }
  return { t: e, state: /* @__PURE__ */ ws(jn) };
}
const sf = ["onMouseenter", "onMouseleave"], of = { class: "fil-toast-text" }, lf = ["onClick"], af = ["aria-label", "onClick"], rf = /* @__PURE__ */ xe({
  __name: "FilToastStack",
  setup(e) {
    const { t } = Rt(), n = Bt(), { items: s } = td(n), o = /* @__PURE__ */ oe(null), i = /* @__PURE__ */ new Map(), l = {
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
    return cn(() => {
      for (const f of s.value) a(f);
    }), xn(() => {
      for (const f of i.values()) clearTimeout(f);
      i.clear();
    }), (f, p) => (L(), k("div", {
      ref_key: "root",
      ref: o,
      class: "fil-toast-stack",
      role: "status",
      "aria-live": "polite"
    }, [
      (L(!0), k(fe, null, ke(d.value, (h) => (L(), k("div", {
        key: h.id,
        class: me(["fil-toast", `fil-toast-${h.level}`]),
        style: qe({ "--toast-color": l[h.level] }),
        onMouseenter: (_) => r(h),
        onMouseleave: (_) => u(h)
      }, [
        p[0] || (p[0] = P("span", {
          class: "fil-toast-dot",
          "aria-hidden": "true"
        }, null, -1)),
        P("span", of, Z(h.text), 1),
        h.action ? (L(), k("button", {
          key: 0,
          type: "button",
          class: "fil-toast-action",
          onClick: Ps((_) => {
            h.action.onClick(_), c(h);
          }, ["stop"])
        }, Z(h.action.label), 9, lf)) : ee("", !0),
        P("button", {
          type: "button",
          class: "fil-toast-close",
          "aria-label": g(t)("toast_close", "Close"),
          onClick: Ps((_) => c(h), ["stop"])
        }, " × ", 8, af)
      ], 46, sf))), 128))
    ], 512));
  }
}), cf = /* @__PURE__ */ Fe(rf, [["__scopeId", "data-v-08cc58fa"]]);
let vo = null;
function uf() {
  if (vo) return;
  const e = document.createElement("div");
  document.body.appendChild(e), vo = Zs(cf).use(no()), vo.mount(e);
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
    function: Bo
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
function Bo() {
  var t;
  const e = Rs();
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
      const h = Rs();
      (u = h.value_close) == null || u.call(h);
    } catch {
    }
    o && ((c = s.blur) == null || c.call(s)), (d = e.preventDefault) == null || d.call(e);
    return;
  }
  if (!o) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "K" || e.key === "k")) {
      Bo(), e.preventDefault();
      return;
    }
    if (e.key === "?" || e.shiftKey && e.key === "/") {
      if (e.shiftKey) Bo();
      else {
        const h = t.canvas, _ = (h == null ? void 0 : h.selected_nodes) ?? {}, F = Object.values(_).filter(Boolean);
        if (F.length === 1) {
          const w = ((f = F[0]) == null ? void 0 : f.comfyClass) ?? "default", x = Rs();
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
let al = !1;
function wf() {
  al || typeof window > "u" || (al = !0, window.addEventListener(
    "wheel",
    (e) => {
      if (e.ctrlKey || e.metaKey) return;
      if (Ta(e.target, e.deltaX, e.deltaY)) {
        e.stopImmediatePropagation();
        return;
      }
      if (!(e.target instanceof HTMLCanvasElement)) return;
      const t = ld(e.clientX, e.clientY, e.deltaX, e.deltaY);
      if (!t) return;
      e.preventDefault(), e.stopImmediatePropagation();
      const n = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? t.clientHeight : 1;
      t.scrollBy({ left: e.deltaX * n, top: e.deltaY * n });
    },
    { capture: !0, passive: !1 }
  ), console.info("[FiL_Design_ImageMind] global scroll guard installed"));
}
const xf = 3e5, Sf = ["ollama", "lmstudio", "openai", "google", "groq", "openrouter", "cloudflare"], Wn = Sf, oi = /* @__PURE__ */ ni("fil/providers", () => {
  const e = /* @__PURE__ */ oe({}), t = /* @__PURE__ */ oe({}), n = /* @__PURE__ */ oe({}), s = /* @__PURE__ */ oe({}), o = /* @__PURE__ */ oe(null), i = X(() => Object.fromEntries(
    Object.entries(e.value).filter(([, w]) => (w == null ? void 0 : w.configured) || (w == null ? void 0 : w.account_id) || (w == null ? void 0 : w.base_url))
  ));
  async function l() {
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
      e.value = I.accounts || {}, o.value = null, c(w, !0);
    } catch (I) {
      throw o.value = I instanceof Error ? I.message : String(I), I;
    }
  }
  async function r(w) {
    const x = await Qt.saveAccounts({
      [w]: { delete: !0 }
    });
    e.value = x.accounts || {};
  }
  async function u(w) {
    await a(w, {});
    try {
      await r(w);
    } catch (x) {
      o.value = x instanceof Error ? x.message : String(x);
    }
  }
  async function c(w, x = !1) {
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
  function h(w) {
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
}), Cf = ["title", "disabled", "aria-disabled"], Ff = {
  key: 0,
  class: "fil-w-btn-spinner"
}, Lf = ["innerHTML"], Mf = { key: 2 }, If = /* @__PURE__ */ xe({
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
    const n = e, s = X(() => n.icon ? Ra(n.icon) : ""), o = t, i = X(() => [
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
    return (r, u) => (L(), k("button", {
      class: me(i.value),
      title: e.title,
      disabled: l.value,
      "aria-disabled": l.value || void 0,
      onClick: a
    }, [
      e.loading ? (L(), k("span", Ff)) : ee("", !0),
      e.icon && !e.loading ? (L(), k("span", {
        key: 1,
        class: "fil-w-btn-glyph",
        innerHTML: s.value
      }, null, 8, Lf)) : ee("", !0),
      e.label ? (L(), k("span", Mf, Z(e.loading ? "" : e.label), 1)) : ee("", !0)
    ], 10, Cf));
  }
}), Ye = /* @__PURE__ */ Fe(If, [["__scopeId", "data-v-1c6537e0"]]), Ns = {
  ollama: "Ollama",
  lmstudio: "LM Studio",
  openai: "OpenAI",
  groq: "Groq",
  google: "Google AI",
  openrouter: "OpenRouter",
  cloudflare: "Cloudflare"
}, ii = {
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
}, Pf = ["title"], Rf = { class: "fil-pm-fields" }, Nf = { class: "fil-pm-field" }, Of = ["onUpdate:modelValue", "placeholder", "onKeydown"], $f = { class: "fil-pm-field" }, Vf = ["onUpdate:modelValue", "onKeydown"], Bf = {
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
    const t = oi(), n = /* @__PURE__ */ oe({}), s = /* @__PURE__ */ oe({}), o = /* @__PURE__ */ oe({}), i = /* @__PURE__ */ oe({}), l = /* @__PURE__ */ oe({});
    cn(async () => {
      await Promise.all([t.loadAccounts(), t.loadDisplayNames()]);
      for (const b of Wn) {
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
      for (const b of Wn) {
        const S = t.accounts[b];
        (S != null && S.configured || S != null && S.local || S != null && S.base_url) && w(b);
      }
    });
    const a = Ns, r = ii;
    function u(b) {
      return { "fil-pm-has-val": b.length > 0 };
    }
    function c(b) {
      return b === "cloudflare";
    }
    function d(b) {
      var T;
      const S = t.accounts[b], M = t.modelsByProvider[b], A = ((M == null ? void 0 : M.list.length) ?? 0) > 0 && !(M != null && M.error);
      return ((T = t.probeState[b]) == null ? void 0 : T.status) === "available" || o.value[b] || A ? "connected" : S != null && S.configured || S != null && S.local || S != null && S.base_url ? "configured" : "off";
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
      i.value[b] = !0;
      try {
        await t.loadModels(b, !0);
      } finally {
        i.value[b] = !1;
      }
    }
    const I = (b) => {
      const S = n.value[b], M = t.accounts[b];
      return S.key !== "" ? !0 : S.base_url !== ((M == null ? void 0 : M.base_url) ?? "") || S.account_id !== ((M == null ? void 0 : M.account_id) ?? "");
    };
    return (b, S) => (L(), k("div", kf, [
      (L(!0), k(fe, null, ke(g(Wn), (M) => {
        var A, T, E, G, q, U;
        return L(), k("div", {
          key: M,
          class: me(["fil-pm-card", { "fil-pm-card--collapsed": p(M) }])
        }, [
          P("div", {
            class: me(["fil-pm-header", { "fil-pm-header--clickable": d(M) === "off" }]),
            onClick: (j) => h(M)
          }, [
            P("span", Df, [
              Y(Tt, {
                name: g(r)[M],
                size: 20
              }, null, 8, ["name"])
            ]),
            P("span", Ef, Z(g(a)[M]), 1),
            g(t).displayNames[M] ? (L(), k("span", Tf, "(" + Z(g(t).displayNames[M]) + ")", 1)) : ee("", !0),
            P("span", {
              class: me(["fil-pm-status", `fil-pm-status--${d(M)}`]),
              title: f[d(M)]
            }, [
              S[0] || (S[0] = P("span", { class: "fil-pm-dot" }, null, -1)),
              Is(" " + Z(f[d(M)]), 1)
            ], 10, Pf),
            d(M) === "off" ? (L(), k("span", {
              key: 1,
              class: me(["fil-pm-chevron", { "fil-pm-chevron--open": l.value[M] }])
            }, [
              Y(Tt, {
                name: "chevronRight",
                size: 12
              })
            ], 2)) : ee("", !0)
          ], 10, Af),
          p(M) ? ee("", !0) : (L(), k(fe, { key: 0 }, [
            P("div", Rf, [
              P("label", Nf, [
                S[1] || (S[1] = P("span", { class: "fil-pm-field-label" }, "API Key", -1)),
                Qe(P("input", {
                  "onUpdate:modelValue": (j) => n.value[M].key = j,
                  type: "password",
                  class: me(["fil-pm-input", u(n.value[M].key)]),
                  placeholder: (A = g(t).accounts[M]) != null && A.configured ? "•••••••• (saved)" : "sk-...",
                  onKeydown: _s((j) => _(M), ["enter"])
                }, null, 42, Of), [
                  [wt, n.value[M].key]
                ])
              ]),
              P("label", $f, [
                S[2] || (S[2] = P("span", { class: "fil-pm-field-label" }, "Base URL", -1)),
                Qe(P("input", {
                  "onUpdate:modelValue": (j) => n.value[M].base_url = j,
                  type: "text",
                  class: me(["fil-pm-input", u(n.value[M].base_url)]),
                  placeholder: "http://localhost:11434",
                  onKeydown: _s((j) => _(M), ["enter"])
                }, null, 42, Vf), [
                  [wt, n.value[M].base_url]
                ])
              ]),
              c(M) ? (L(), k("label", Bf, [
                S[3] || (S[3] = P("span", { class: "fil-pm-field-label" }, "Account ID", -1)),
                Qe(P("input", {
                  "onUpdate:modelValue": (j) => n.value[M].account_id = j,
                  type: "text",
                  class: me(["fil-pm-input", u(n.value[M].account_id)]),
                  onKeydown: _s((j) => _(M), ["enter"])
                }, null, 42, Hf), [
                  [wt, n.value[M].account_id]
                ])
              ])) : ee("", !0)
            ]),
            P("div", Uf, [
              Y(Ye, {
                variant: "accent",
                label: I(M) ? "Save" : "Saved",
                disabled: !I(M),
                onClick: (j) => _(M)
              }, null, 8, ["label", "disabled", "onClick"]),
              !I(M) && g(t).cachedAgeLabel(M) ? (L(), k("span", jf, Z(g(t).cachedAgeLabel(M)) + " ago ", 1)) : ee("", !0),
              Y(Ye, {
                variant: "danger",
                label: "Delete",
                disabled: !((T = g(t).accounts[M]) != null && T.configured) && !((E = g(t).accounts[M]) != null && E.base_url),
                onClick: (j) => F(M)
              }, null, 8, ["disabled", "onClick"]),
              Y(Ye, {
                variant: "standard",
                label: "Probe",
                loading: s.value[M],
                flashing: o.value[M],
                disabled: !((G = g(t).accounts[M]) != null && G.local) && !((q = g(t).accounts[M]) != null && q.configured) && !n.value[M].key && !n.value[M].base_url,
                onClick: (j) => w(M)
              }, null, 8, ["loading", "flashing", "disabled", "onClick"]),
              Y(Ye, {
                variant: "standard",
                label: "Load Models",
                loading: i.value[M],
                onClick: (j) => x(M)
              }, null, 8, ["loading", "onClick"])
            ]),
            (U = g(t).modelsByProvider[M]) != null && U.error ? (L(), k("div", Wf, Z(g(t).modelsByProvider[M].error), 1)) : ee("", !0),
            g(t).probeState[M] && g(t).probeState[M].status !== "available" ? (L(), k("div", zf, Z(g(t).probeState[M].message), 1)) : ee("", !0),
            g(t).modelsFor(M).length > 0 ? (L(), k("div", Gf, [
              (L(!0), k(fe, null, ke(g(t).modelsFor(M), (j) => (L(), k("span", {
                class: "fil-pm-model-tag",
                key: j
              }, [
                Is(Z(j) + " ", 1),
                g(t).visionModelsFor(M).includes(j) ? (L(), k("span", Kf, "👁")) : ee("", !0)
              ]))), 128))
            ])) : ee("", !0),
            g(t).lastError ? (L(), k("div", qf, Z(g(t).lastError), 1)) : ee("", !0)
          ], 64))
        ], 2);
      }), 128))
    ]));
  }
}), Yf = /* @__PURE__ */ Fe(Xf, [["__scopeId", "data-v-ae1b468d"]]);
let In = null;
function Jf(e) {
  In && (In.unmount(), In = null), In = Zs(Yf).use(no()), In.mount(e), console.info("[FiL_Design_ImageMind] provider manager mounted");
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
  Ma(t);
  const n = globalThis.app;
  n && Xu(n);
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
  Ma(Ha[t] ?? "default");
}
function Ua(e) {
  vs(`${Mt}/log_level`, { level: String(e) }).catch(() => {
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
  ...ip,
  ...ap
];
wf();
function up(e) {
  var t, n;
  try {
    const s = globalThis.app, o = ((t = s == null ? void 0 : s.graph) == null ? void 0 : t._nodes) ?? [];
    for (const i of o) {
      const l = i;
      if (l.comfyClass === "FiLOpticScanner") {
        const a = (n = l.inputs) == null ? void 0 : n.find((r) => r.name === "config");
        (!a || a.link == null) && console.warn(`${an} Optic Scanner #${l.id} has no Provider Loader wired to its "config" slot — execution will fail.`);
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
        () => lp((n, s) => Vo(n, s, e)),
        () => rp((n, s) => Vo(n, s, e))
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
      const s = Pa[n.name];
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
  const n = new Set(Object.keys(t.node_ids ?? {})), s = new Set(Object.keys(Pa));
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
const ja = dp(ul);
ul.registerExtension(ja);
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
    const n = e, s = t, o = X(() => ({
      gridTemplateColumns: `repeat(${Math.max(1, n.columns)}, minmax(0, 1fr))`
    }));
    function i(l) {
      n.disabled || l !== n.modelValue && s("update:modelValue", l);
    }
    return (l, a) => (L(), k("div", {
      class: "fil-w-chips",
      style: qe(o.value),
      role: "radiogroup"
    }, [
      (L(!0), k(fe, null, ke(e.options, (r) => (L(), k("button", {
        key: r,
        type: "button",
        role: "radio",
        class: me(["fil-w-chip", { active: r === e.modelValue, disabled: e.disabled }]),
        "aria-checked": r === e.modelValue,
        disabled: e.disabled,
        title: r,
        onClick: (u) => i(r)
      }, Z(r), 11, pp))), 128))
    ], 4));
  }
}), rl = /* @__PURE__ */ Fe(mp, [["__scopeId", "data-v-3c07d909"]]), hp = { class: "fil-w-chiplist" }, gp = ["placeholder", "aria-label", "disabled"], _p = {
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
    const n = e, s = t, o = /* @__PURE__ */ oe(""), i = X(() => {
      const a = o.value.trim().toLowerCase();
      return a ? n.options.filter((r) => r.toLowerCase().includes(a)) : n.options;
    });
    function l(a) {
      n.disabled || a !== n.modelValue && s("update:modelValue", a);
    }
    return (a, r) => (L(), k("div", hp, [
      e.searchable ? Qe((L(), k("input", {
        key: 0,
        "onUpdate:modelValue": r[0] || (r[0] = (u) => o.value = u),
        class: "fil-w-search",
        type: "search",
        placeholder: e.placeholder,
        "aria-label": e.placeholder,
        disabled: e.disabled,
        spellcheck: "false"
      }, null, 8, gp)), [
        [wt, o.value]
      ]) : ee("", !0),
      P("div", _p, [
        (L(!0), k(fe, null, ke(i.value, (u) => (L(), k("button", {
          key: u,
          type: "button",
          role: "radio",
          class: me(["fil-w-chip", { active: u === e.modelValue, disabled: e.disabled }]),
          "aria-checked": u === e.modelValue,
          disabled: e.disabled,
          title: u,
          onClick: (c) => l(u)
        }, Z(u), 11, vp))), 128)),
        i.value.length === 0 ? (L(), k("div", bp, Z(o.value ? "No matches" : "Empty"), 1)) : ee("", !0)
      ])
    ]));
  }
}), wp = /* @__PURE__ */ Fe(yp, [["__scopeId", "data-v-5ccf2e00"]]), xp = ["title"], Sp = {
  key: 0,
  class: "fil-combo-label"
}, Cp = ["disabled", "aria-expanded"], Fp = { class: "fil-combo-trigger-label" }, Lp = {
  key: 1,
  class: "fil-combo-badge"
}, Mp = ["placeholder"], Ip = { class: "fil-combo-list" }, kp = ["aria-selected", "onMouseenter", "onClick"], Ap = { class: "fil-combo-option-label" }, Dp = {
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
    const n = e, s = t, o = /* @__PURE__ */ oe(!1), i = /* @__PURE__ */ oe(""), l = /* @__PURE__ */ oe(0), a = /* @__PURE__ */ oe(null), r = /* @__PURE__ */ oe(null), u = /* @__PURE__ */ oe(null), c = /* @__PURE__ */ oe({}), d = X(() => n.options.find((A) => A.value === n.modelValue)), f = X(() => {
      if (!n.searchable || !i.value.trim()) return n.options;
      const A = i.value.trim().toLowerCase();
      return n.options.filter((T) => (T.label ?? T.value).toLowerCase().includes(A));
    });
    function p(A) {
      return A.label ?? A.value;
    }
    function h() {
      const A = a.value;
      if (!A) return;
      const T = A.getBoundingClientRect(), E = window.innerHeight, G = 260, q = E - T.bottom, U = q < G && T.top > q;
      c.value = {
        left: `${T.left}px`,
        width: `${T.width}px`,
        ...U ? { bottom: `${E - T.top + 4}px` } : { top: `${T.bottom + 4}px` }
      };
    }
    function _(A) {
      var E;
      const T = A.target;
      T instanceof Element && ((E = r.value) != null && E.contains(T)) || w();
    }
    function F() {
      n.disabled || (o.value = !0, i.value = "", l.value = Math.max(
        0,
        f.value.findIndex((A) => A.value === n.modelValue)
      ), wn(() => {
        var A;
        h(), n.searchable && ((A = u.value) == null || A.focus()), window.addEventListener("resize", _), window.addEventListener("scroll", _, !0), document.addEventListener("mousedown", x, !0);
      }));
    }
    function w() {
      o.value && (o.value = !1, window.removeEventListener("resize", _), window.removeEventListener("scroll", _, !0), document.removeEventListener("mousedown", x, !0));
    }
    function x(A) {
      var E, G;
      const T = A.target;
      (E = a.value) != null && E.contains(T) || (G = r.value) != null && G.contains(T) || w();
    }
    function I() {
      o.value ? w() : F();
    }
    function b(A) {
      var T;
      s("update:modelValue", A.value), w(), (T = a.value) == null || T.focus();
    }
    function S(A) {
      if (!n.disabled) {
        if (!o.value && (A.key === "ArrowDown" || A.key === "ArrowUp" || A.key === "Enter" || A.key === " ")) {
          A.preventDefault(), F();
          return;
        }
        o.value && M(A);
      }
    }
    function M(A) {
      var E;
      const T = f.value;
      if (A.key === "ArrowDown")
        A.preventDefault(), l.value = T.length ? (l.value + 1) % T.length : 0;
      else if (A.key === "ArrowUp")
        A.preventDefault(), l.value = T.length ? (l.value - 1 + T.length) % T.length : 0;
      else if (A.key === "Enter") {
        A.preventDefault();
        const G = T[l.value];
        G && b(G);
      } else A.key === "Escape" && (A.preventDefault(), w(), (E = a.value) == null || E.focus());
    }
    return Te(i, () => {
      l.value = 0;
    }), xn(() => {
      window.removeEventListener("resize", _), window.removeEventListener("scroll", _, !0), document.removeEventListener("mousedown", x, !0);
    }), (A, T) => {
      var E, G;
      return L(), k("div", {
        class: "fil-combo",
        title: e.title
      }, [
        e.label ? (L(), k("label", Sp, Z(e.label), 1)) : ee("", !0),
        P("button", {
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
          (E = d.value) != null && E.icon ? (L(), Ie(Tt, {
            key: 0,
            name: d.value.icon,
            size: 16
          }, null, 8, ["name"])) : ee("", !0),
          P("span", Fp, Z(d.value ? p(d.value) : e.modelValue), 1),
          (G = d.value) != null && G.badge ? (L(), k("span", Lp, Z(d.value.badge), 1)) : ee("", !0),
          T[1] || (T[1] = P("span", { class: "fil-combo-chevron" }, "▾", -1))
        ], 42, Cp),
        (L(), Ie(Kl, { to: "body" }, [
          o.value ? (L(), k("div", {
            key: 0,
            ref_key: "panelRef",
            ref: r,
            class: "fil-combo-panel",
            style: qe(c.value),
            role: "listbox",
            onKeydown: M
          }, [
            e.searchable ? Qe((L(), k("input", {
              key: 0,
              ref_key: "searchRef",
              ref: u,
              "onUpdate:modelValue": T[0] || (T[0] = (q) => i.value = q),
              type: "search",
              class: "fil-combo-search",
              placeholder: e.placeholder,
              spellcheck: "false"
            }, null, 8, Mp)), [
              [wt, i.value]
            ]) : ee("", !0),
            P("div", Ip, [
              (L(!0), k(fe, null, ke(f.value, (q, U) => (L(), k("button", {
                key: q.value,
                type: "button",
                class: me(["fil-combo-option", { active: U === l.value, selected: q.value === e.modelValue }]),
                role: "option",
                "aria-selected": q.value === e.modelValue,
                onMouseenter: (j) => l.value = U,
                onClick: (j) => b(q)
              }, [
                q.icon ? (L(), Ie(Tt, {
                  key: 0,
                  name: q.icon,
                  size: 16
                }, null, 8, ["name"])) : ee("", !0),
                P("span", Ap, Z(p(q)), 1),
                q.badge ? (L(), k("span", Dp, Z(q.badge), 1)) : ee("", !0)
              ], 42, kp))), 128)),
              f.value.length === 0 ? (L(), k("div", Ep, "No matches")) : ee("", !0)
            ])
          ], 36)) : ee("", !0)
        ]))
      ], 8, xp);
    };
  }
}), Pp = /* @__PURE__ */ Fe(Tp, [["__scopeId", "data-v-73f94a33"]]), Rp = ["data-ok", "data-err"], Np = /* @__PURE__ */ xe({
  __name: "FilInfo",
  props: {
    text: {},
    ok: { type: Boolean },
    err: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (L(), k("div", {
      class: "fil-w-info",
      "data-ok": e.ok || void 0,
      "data-err": e.err || void 0
    }, Z(e.text), 9, Rp));
  }
}), bs = /* @__PURE__ */ Fe(Np, [["__scopeId", "data-v-851660c1"]]), Op = ["title"], $p = {
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
    const n = e, s = t, o = X(() => n.modelValue), i = /* @__PURE__ */ oe(r(o.value));
    Te(o, (_) => {
      l.value || (i.value = r(_));
    });
    let l = /* @__PURE__ */ oe(!1), a = null;
    function r(_) {
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
    return (_, F) => (L(), k("div", {
      class: me(["fil-w-numfield", { "no-label": !e.label }]),
      title: e.title
    }, [
      e.label ? (L(), k("label", $p, Z(e.label), 1)) : ee("", !0),
      P("div", Vp, [
        Qe(P("input", {
          "onUpdate:modelValue": F[0] || (F[0] = (w) => i.value = w),
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
          [wt, i.value]
        ]),
        P("div", Hp, [
          P("button", {
            type: "button",
            class: "fil-w-num-btn",
            tabindex: "-1",
            "aria-label": "Increment",
            disabled: e.disabled || e.max != null && e.modelValue >= e.max,
            onMousedown: F[1] || (F[1] = Ps(() => {
            }, ["prevent"])),
            onClick: F[2] || (F[2] = (w) => h(w.shiftKey ? 10 : 1))
          }, "▲", 40, Up),
          P("button", {
            type: "button",
            class: "fil-w-num-btn",
            tabindex: "-1",
            "aria-label": "Decrement",
            disabled: e.disabled || e.min != null && e.modelValue <= e.min,
            onMousedown: F[3] || (F[3] = Ps(() => {
            }, ["prevent"])),
            onClick: F[4] || (F[4] = (w) => h(w.shiftKey ? -10 : -1))
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
    const i = X(() => n.modelValue ? "▶" : "▼");
    return (l, a) => (L(), k("button", {
      type: "button",
      class: me(["fil-w-section", { collapsible: e.collapsible, collapsed: e.modelValue }]),
      "aria-expanded": !e.modelValue,
      disabled: !e.collapsible,
      onClick: o
    }, [
      P("span", Gp, Z(i.value), 1),
      P("span", Kp, Z(e.title), 1)
    ], 10, zp));
  }
}), Os = /* @__PURE__ */ Fe(qp, [["__scopeId", "data-v-686d0388"]]), Xp = ["title"], Yp = {
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
    const n = e, s = t, o = X(() => n.modelValue), i = /* @__PURE__ */ oe([]);
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
    return (u, c) => (L(), k("div", {
      class: "fil-w-segmented",
      title: e.title
    }, [
      e.label ? (L(), k("label", Yp, Z(e.label), 1)) : ee("", !0),
      P("div", {
        class: me(["fil-w-pill", { disabled: e.disabled }]),
        role: "group",
        "aria-label": e.label
      }, [
        (L(!0), k(fe, null, ke(e.options, (d, f) => (L(), k("button", {
          key: d,
          ref_for: !0,
          ref: (p) => {
            p && (i.value[f] = p);
          },
          type: "button",
          class: me(["fil-w-seg", { active: d === o.value }]),
          "aria-pressed": d === o.value,
          disabled: e.disabled,
          tabindex: d === o.value ? 0 : -1,
          onClick: (p) => a(d),
          onKeydown: (p) => r(p, f)
        }, Z(l(d)), 43, Qp))), 128))
      ], 10, Jp)
    ], 8, Xp));
  }
}), it = /* @__PURE__ */ Fe(Zp, [["__scopeId", "data-v-738d9e4d"]]), em = ["title"], tm = {
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
    const n = e, s = t, o = X({
      get: () => n.modelValue,
      set: (i) => s("update:modelValue", i)
    });
    return (i, l) => (L(), k("div", {
      class: "fil-w-select",
      title: e.title
    }, [
      e.label ? (L(), k("label", tm, Z(e.label), 1)) : ee("", !0),
      Qe(P("select", {
        "onUpdate:modelValue": l[0] || (l[0] = (a) => o.value = a),
        class: "fil-w-select-input",
        disabled: e.disabled,
        "aria-label": e.label,
        onChange: l[1] || (l[1] = (a) => s("update:modelValue", a.target.value))
      }, [
        (L(!0), k(fe, null, ke(e.options, (a) => (L(), k("option", {
          key: a,
          value: a
        }, Z(a), 9, sm))), 128))
      ], 40, nm), [
        [Cu, o.value]
      ])
    ], 8, em));
  }
}), fs = /* @__PURE__ */ Fe(om, [["__scopeId", "data-v-77c303be"]]), im = ["title"], lm = {
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
    return (a, r) => (L(), k("div", {
      class: "fil-w-slider",
      title: e.title
    }, [
      e.label ? (L(), k("label", lm, Z(e.label), 1)) : ee("", !0),
      P("div", am, [
        P("input", {
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
        Y(sn, {
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
}), lt = /* @__PURE__ */ Fe(cm, [["__scopeId", "data-v-785fba56"]]), um = {
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
}, ps = "__all__", Fm = /* @__PURE__ */ xe({
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
    }), a = /* @__PURE__ */ oe(ps), r = /* @__PURE__ */ oe(""), u = X(() => {
      const f = r.value.trim().toLowerCase();
      return n.styles.filter((p) => a.value !== ps && o(p) !== a.value ? !1 : f ? p.toLowerCase().includes(f) : !0);
    });
    function c(f) {
      return mm[f];
    }
    function d(f) {
      s("select", f);
    }
    return (f, p) => (L(), k("div", hm, [
      P("div", gm, [
        P("button", {
          type: "button",
          class: me(["fil-style-cat", { active: a.value === ps }]),
          onClick: p[0] || (p[0] = (h) => a.value = ps)
        }, " All ", 2),
        (L(!0), k(fe, null, ke(l.value, (h) => (L(), k("button", {
          key: h,
          type: "button",
          class: me(["fil-style-cat", { active: a.value === h }]),
          onClick: (_) => a.value = h
        }, Z(h), 11, _m))), 128))
      ]),
      Qe(P("input", {
        "onUpdate:modelValue": p[1] || (p[1] = (h) => r.value = h),
        type: "search",
        class: "fil-style-search",
        placeholder: "Search styles…",
        "aria-label": "Search styles",
        spellcheck: "false"
      }, null, 512), [
        [wt, r.value]
      ]),
      P("div", vm, [
        (L(!0), k(fe, null, ke(u.value, (h) => (L(), k("button", {
          key: h,
          type: "button",
          class: me(["fil-style-tile", { active: h === e.modelValue }]),
          title: h,
          onClick: (_) => d(h)
        }, [
          P("span", ym, [
            c(h) ? (L(), k("img", {
              key: 0,
              src: c(h),
              class: "fil-style-tile-img",
              alt: ""
            }, null, 8, wm)) : (L(), k("span", xm, Z(i(h).split(" ")[0]), 1))
          ]),
          P("span", Sm, Z(i(h)), 1)
        ], 10, bm))), 128)),
        u.value.length === 0 ? (L(), k("div", Cm, "No matches")) : ee("", !0)
      ])
    ]));
  }
}), Lm = /* @__PURE__ */ Fe(Fm, [["__scopeId", "data-v-057d3fa5"]]), Mm = ["title"], Im = {
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
    return (i, l) => (L(), k("div", {
      class: me(["fil-w-toggle", { bare: e.bare }]),
      title: e.title
    }, [
      e.label ? (L(), k("label", Im, Z(e.label), 1)) : ee("", !0),
      P("button", {
        type: "button",
        class: me(["fil-w-switch", { on: e.modelValue === "ON" }]),
        role: "switch",
        "aria-checked": e.modelValue === "ON",
        "aria-label": e.label,
        disabled: e.disabled,
        onClick: o
      }, [...l[0] || (l[0] = [
        P("span", { class: "fil-w-switch-thumb" }, null, -1)
      ])], 10, km)
    ], 10, Mm));
  }
}), ms = /* @__PURE__ */ Fe(Am, [["__scopeId", "data-v-d39b7896"]]), Dm = { class: "fil-seed-root" }, Em = ["readonly", "title"], Tm = { class: "fil-seed-actions" }, Pm = /* @__PURE__ */ xe({
  __name: "Seed",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Rt(), s = X({
      get: () => t.state.nodeState.mode ?? "random",
      set: (u) => {
        t.state.nodeState.mode = u;
      }
    }), o = X({
      get: () => Number(t.state.nodeState.seed ?? 0) || 0,
      // Write the native seed widget directly, not just nodeState — a fixed
      // seed set only via nodeState can fail to reach the queued prompt.
      set: (u) => {
        t.state.nodeState.seed = u;
        const c = t.state.node ? te(t.state.node, "seed") : null;
        c && (c.value = u);
      }
    });
    Te(s, (u) => {
      const c = t.state.node, d = c ? te(c, "control_after_generate") : null;
      d && (d.value = u === "fixed" ? "fixed" : "randomize");
    }, { immediate: !0 }), Te(
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
      const u = t.state.node, c = u ? te(u, "seed") : null, d = c && Number.isFinite(Number(c.value)) ? Number(c.value) : t.state.lastRunSeed;
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
    const r = X({
      get: () => s.value === "fixed" ? `${o.value}` : "random",
      set: (u) => {
        const c = parseInt(String(u).replace(/[^0-9]/g, ""), 10);
        Number.isNaN(c) || (o.value = c, s.value = "fixed");
      }
    });
    return (u, c) => (L(), k("div", Dm, [
      Qe(P("input", {
        "onUpdate:modelValue": c[0] || (c[0] = (d) => r.value = d),
        type: "text",
        class: "fil-seed-display",
        readonly: s.value === "random",
        title: s.value === "fixed" ? g(n)("sd_locked", "Locked seed") : g(n)("sd_auto_random", "Auto-random"),
        "aria-label": "Seed value"
      }, null, 8, Em), [
        [wt, r.value]
      ]),
      P("div", Tm, [
        Y(g(Ye), {
          label: "🔀",
          variant: "standard",
          title: g(n)("sd_mode", "Random generates a new seed each run."),
          onClick: i
        }, null, 8, ["title"]),
        Y(g(Ye), {
          label: "♻️",
          variant: "standard",
          title: g(n)("sd_use_last", "Reuse the seed from the last executed run."),
          onClick: l
        }, null, 8, ["title"]),
        Y(g(Ye), {
          label: "🎲",
          variant: "accent",
          title: g(n)("sd_new_fixed", "Generate a new random fixed seed."),
          onClick: a
        }, null, 8, ["title"])
      ])
    ]));
  }
}), Rm = /* @__PURE__ */ Fe(Pm, [["__scopeId", "data-v-9971583a"]]), Nm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rm
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
}, th = ["onClick"], nh = { class: "model-main" }, sh = { class: "type-icon" }, oh = ["title"], ih = { class: "model-tags" }, lh = {
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
}, hh = { class: "footer-actions" }, cl = "fil_model_picker_view_mode", gh = /* @__PURE__ */ xe({
  __name: "ProviderModelPicker",
  props: {
    open: { type: Boolean, default: !1 },
    provider: { default: "ollama" },
    model: { default: "" }
  },
  emits: ["update:open", "select"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = oi(), { t: i } = Rt(), l = /* @__PURE__ */ oe(n.provider), a = /* @__PURE__ */ oe(n.model), r = /* @__PURE__ */ oe(""), u = /* @__PURE__ */ oe("all"), c = /* @__PURE__ */ oe("all"), d = /* @__PURE__ */ oe(
      localStorage.getItem(cl) || "list"
    );
    function f(O) {
      d.value = O;
      try {
        localStorage.setItem(cl, O);
      } catch {
      }
    }
    const p = ["all", "vision", "text"], h = { all: "All Types", vision: "👁 Vision", text: "📝 Text" }, _ = { all: "All Tiers", local: "💻 Local", free: "🆓 Free", paid: "💎 Paid" }, F = ["list", "grid"], w = { list: "☰ List", grid: "⊞ Tiles" }, x = X(
      () => l.value === "ollama" || l.value === "lmstudio" ? ["all", "local"] : ["all", "free", "paid"]
    );
    Te(
      () => n.open,
      (O) => {
        O && (l.value = n.provider || "ollama", a.value = n.model || "", r.value = "", u.value = "all", c.value = "all", I());
      }
    );
    async function I(O = !1) {
      try {
        await o.loadModels(l.value, O);
      } catch (C) {
        Ze.error(C instanceof Error ? C.message : String(C));
      }
    }
    function b(O) {
      l.value = O, r.value = "", c.value = "all";
      const C = o.modelsFor(O);
      C.length > 0 ? a.value = C[0] : a.value = "", I();
    }
    const S = X(() => o.modelsFor(l.value)), M = X(() => o.visionModelsFor(l.value)), A = X(() => o.isLoading(l.value)), T = X(() => o.probeState[l.value]), E = X(() => o.cachedAgeLabel(l.value));
    function G(O, C) {
      return C === "ollama" || C === "lmstudio" ? "local" : O.toLowerCase().includes(":free") ? "free" : "paid";
    }
    function q(O) {
      return M.value.includes(O);
    }
    const U = X(() => {
      let O = S.value;
      const C = r.value.trim().toLowerCase(), v = l.value;
      return C && (O = O.filter((R) => R.toLowerCase().includes(C))), u.value === "vision" ? O = O.filter((R) => q(R)) : u.value === "text" && (O = O.filter((R) => !q(R))), c.value !== "all" && (O = O.filter((R) => G(R, v) === c.value)), O;
    });
    function j(O) {
      a.value = O;
    }
    function N() {
      a.value && (s("select", { provider: l.value, model: a.value }), s("update:open", !1));
    }
    function $() {
      s("update:open", !1);
    }
    return (O, C) => (L(), Ie(si, {
      open: e.open,
      width: "860px",
      title: "🔌 Choose Provider & Model",
      "onUpdate:open": C[6] || (C[6] = (v) => s("update:open", v)),
      onClose: $
    }, {
      default: ns(() => [
        P("div", Om, [
          P("div", $m, [
            (L(!0), k(fe, null, ke(g(Wn), (v) => (L(), k("button", {
              key: v,
              type: "button",
              class: me(["tab-btn", { active: v === l.value }]),
              onClick: (R) => b(v)
            }, [
              Y(Tt, {
                name: g(ii)[v],
                size: 18
              }, null, 8, ["name"]),
              P("span", Bm, Z(g(Ns)[v] ?? v), 1),
              g(o).modelsFor(v).length ? (L(), k("span", Hm, Z(g(o).modelsFor(v).length), 1)) : ee("", !0)
            ], 10, Vm))), 128))
          ]),
          P("div", Um, [
            P("div", jm, [
              P("span", Wm, Z(g(Ns)[l.value] ?? l.value), 1),
              A.value ? (L(), k("span", zm, "⏳ Loading...")) : T.value && T.value.status && T.value.status !== "available" ? (L(), k("span", Gm, " ⚠️ " + Z(T.value.message || T.value.status), 1)) : (L(), k("span", Km, " ● Online (" + Z(S.value.length) + " " + Z(g(i)("prov_models", "models")) + ") ", 1)),
              E.value ? (L(), k("span", qm, "Updated: " + Z(E.value), 1)) : ee("", !0)
            ]),
            Y(Ye, {
              variant: "sm",
              label: "↻ Refresh",
              loading: A.value,
              title: "Reload models list",
              onClick: C[0] || (C[0] = (v) => I(!0))
            }, null, 8, ["loading"])
          ]),
          P("div", Xm, [
            P("div", Ym, [
              Y(Tt, {
                name: "search",
                size: 14,
                class: "search-icon"
              }),
              Qe(P("input", {
                "onUpdate:modelValue": C[1] || (C[1] = (v) => r.value = v),
                type: "text",
                class: "search-input",
                placeholder: "Search models..."
              }, null, 512), [
                [wt, r.value]
              ]),
              r.value ? (L(), k("button", {
                key: 0,
                class: "clear-search",
                onClick: C[2] || (C[2] = (v) => r.value = "")
              }, "✕")) : ee("", !0)
            ]),
            P("div", Jm, [
              Y(it, {
                options: [...p],
                "option-labels": h,
                "model-value": u.value,
                "onUpdate:modelValue": C[3] || (C[3] = (v) => u.value = v)
              }, null, 8, ["options", "model-value"]),
              Y(it, {
                options: x.value,
                "option-labels": _,
                "model-value": c.value,
                "onUpdate:modelValue": C[4] || (C[4] = (v) => c.value = v)
              }, null, 8, ["options", "model-value"]),
              Y(it, {
                options: [...F],
                "option-labels": w,
                "model-value": d.value,
                "onUpdate:modelValue": C[5] || (C[5] = (v) => f(v))
              }, null, 8, ["options", "model-value"])
            ])
          ]),
          P("div", Qm, [
            A.value && !S.value.length ? (L(), k("div", Zm, [
              Y(bs, { text: "Loading models from provider..." })
            ])) : U.value.length ? (L(), k("div", {
              key: 2,
              class: me(["models-container", d.value])
            }, [
              (L(!0), k(fe, null, ke(U.value, (v) => (L(), k("div", {
                key: v,
                class: me(["model-card", { selected: v === a.value }]),
                onClick: (R) => j(v)
              }, [
                P("div", nh, [
                  P("span", sh, Z(q(v) ? "👁" : "📝"), 1),
                  P("span", {
                    class: "model-name",
                    title: v
                  }, Z(v), 9, oh)
                ]),
                P("div", ih, [
                  q(v) ? (L(), k("span", lh, "Vision")) : (L(), k("span", ah, "Text")),
                  G(v, l.value) === "local" ? (L(), k("span", rh, "Local")) : G(v, l.value) === "free" ? (L(), k("span", ch, "Free")) : (L(), k("span", uh, "Paid"))
                ])
              ], 10, th))), 128))
            ], 2)) : (L(), k("div", eh, [...C[7] || (C[7] = [
              P("span", null, "No models matching criteria", -1)
            ])]))
          ]),
          P("div", dh, [
            P("div", fh, [
              a.value ? (L(), k("span", ph, [
                C[8] || (C[8] = Is("Selected: ", -1)),
                P("strong", null, Z(a.value), 1)
              ])) : (L(), k("span", mh, "No model selected"))
            ]),
            P("div", hh, [
              Y(Ye, {
                label: "Cancel",
                onClick: $
              }),
              Y(Ye, {
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
    const t = e, n = oi(), { t: s } = Rt(), o = /* @__PURE__ */ oe(!1);
    function i(S, M) {
      return {
        get: () => t.state.nodeState[S] ?? M,
        set: (A) => {
          t.state.nodeState[S] = A;
        }
      };
    }
    const l = X(() => String(i("provider", "ollama").get()));
    function a(S) {
      i("provider", "ollama").set(S), I();
    }
    const r = X(() => String(i("model", "(loading...)").get()));
    function u(S) {
      i("model", "(loading...)").set(S), I();
    }
    const c = X(() => Number(i("temperature", 0.7).get())), d = X(() => Number(i("max_tokens", 0).get())), f = X(() => Number(i("rate_limit_ms", 100).get())), p = X(() => Number(i("max_image_side", 1024).get())), h = t.state, _ = X(() => n.isLoading(l.value)), F = X(() => n.probeState[l.value]), w = X(() => n.cachedAgeLabel(l.value));
    let x = null;
    Te(() => t.state.nodeState, () => {
    }, { deep: !0 });
    function I() {
      const S = t.state.node;
      if (!S) return;
      const M = te(S, "model");
      if (!M) return;
      const A = n.modelsFor(l.value), T = A.length ? A : ["(no models)"];
      M.options && (M.options.values = T);
    }
    function b(S) {
      a(S.provider), u(S.model);
    }
    return cn(async () => {
      n.loadDisplayNames();
      const S = n.modelsFor(l.value);
      if (S.length)
        r.value === "(loading...)" && u(S[0] ?? "(no models)"), I(), n.loadModels(l.value);
      else
        try {
          await n.loadModels(l.value);
          const M = n.modelsFor(l.value);
          r.value === "(loading...)" && u(M[0] ?? "(no models)"), I();
        } catch (M) {
          Ze.error(M instanceof Error ? M.message : String(M));
        }
      x = setInterval(() => {
        n.loadModels(l.value, !0);
      }, Ch);
    }), Xs(() => {
      x && clearInterval(x);
    }), (S, M) => (L(), k("div", vh, [
      P("button", {
        type: "button",
        class: "picker-trigger-btn",
        onClick: M[0] || (M[0] = (A) => o.value = !0)
      }, [
        P("div", bh, [
          P("div", yh, [
            Y(g(Tt), {
              name: g(ii)[l.value],
              size: 16
            }, null, 8, ["name"]),
            P("span", wh, Z(g(Ns)[l.value] ?? l.value), 1)
          ]),
          M[6] || (M[6] = P("span", { class: "open-icon" }, "⚙️ Choose", -1))
        ]),
        P("div", xh, [
          M[7] || (M[7] = P("span", { class: "model-label" }, "🧠 Model:", -1)),
          P("span", {
            class: "model-name",
            title: r.value
          }, Z(r.value), 9, Sh)
        ])
      ]),
      _.value ? (L(), Ie(g(bs), {
        key: 0,
        text: g(s)("prov_loading_models", "Loading models…")
      }, null, 8, ["text"])) : F.value && F.value.status && F.value.status !== "available" ? (L(), Ie(g(bs), {
        key: 1,
        err: !0,
        text: F.value.message || F.value.status
      }, null, 8, ["text"])) : w.value ? (L(), Ie(g(bs), {
        key: 2,
        text: `${g(s)("prov_models_updated", "Models updated")}: ${w.value}`
      }, null, 8, ["text"])) : ee("", !0),
      Y(g(lt), {
        "model-value": c.value,
        min: 0,
        max: 2,
        step: 0.05,
        label: g(s)("lbl_temperature", "🌡️ Temperature"),
        title: g(s)("tt_temperature", "Sampling temperature — higher is more creative, lower is more deterministic."),
        "onUpdate:modelValue": M[1] || (M[1] = (A) => g(h).nodeState.temperature = A)
      }, null, 8, ["model-value", "label", "title"]),
      Y(g(lt), {
        "model-value": d.value,
        min: 0,
        max: 65536,
        step: 1,
        label: g(s)("lbl_max_tokens", "🔢 Max tokens"),
        title: g(s)("tt_provider_max_tokens", "Maximum tokens in the response. 0 = provider default (no explicit limit)."),
        "onUpdate:modelValue": M[2] || (M[2] = (A) => g(h).nodeState.max_tokens = A)
      }, null, 8, ["model-value", "label", "title"]),
      Y(g(lt), {
        "model-value": f.value,
        min: 0,
        max: 5e3,
        step: 10,
        label: g(s)("lbl_rate_limit", "⏱️ Rate limit"),
        title: g(s)("tt_rate_limit", "Minimum delay between requests to this provider, to avoid rate limiting."),
        "onUpdate:modelValue": M[3] || (M[3] = (A) => g(h).nodeState.rate_limit_ms = A)
      }, null, 8, ["model-value", "label", "title"]),
      Y(g(lt), {
        "model-value": p.value,
        min: 128,
        max: 4096,
        step: 64,
        label: g(s)("lbl_max_image_side", "🖼️ Max image side"),
        title: g(s)("tt_max_image_side", "Images are downscaled so their longest side does not exceed this value."),
        "onUpdate:modelValue": M[4] || (M[4] = (A) => g(h).nodeState.max_image_side = A)
      }, null, 8, ["model-value", "label", "title"]),
      Y(_h, {
        open: o.value,
        "onUpdate:open": M[5] || (M[5] = (A) => o.value = A),
        provider: l.value,
        model: r.value,
        onSelect: b
      }, null, 8, ["open", "provider", "model"])
    ]));
  }
}), Lh = /* @__PURE__ */ Fe(Fh, [["__scopeId", "data-v-1a5b41f9"]]), Mh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lh
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
}, Dh = ["title"], Eh = { class: "fil-section-block" }, Th = { class: "fil-section-block" }, Ph = ["title"], Rh = { class: "fil-scanner-seed-row" }, Nh = ["value", "readonly", "title"], Oh = ["title"], $h = ["title"], Vh = ["title"], Bh = /* @__PURE__ */ xe({
  __name: "OpticScanner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Rt(), s = Ih.FiLOpticScanner, o = (s == null ? void 0 : s.inputs.required) ?? [], i = {
      prompt: ["scn_section_prompt", "📝 Prompt/Text"],
      agent: ["scn_section_agent", "🕵️ Agent"],
      model: ["scn_section_model", "🧠 Model"],
      output: ["scn_section_output", "📤 Output"],
      advanced: ["scn_section_advanced", "🎨 Style"],
      actions: ["scn_section_actions", "⚡ Actions"]
    }, l = /* @__PURE__ */ new Set(["prompt", "negative_prompt", "custom_style"]);
    function a(N) {
      const $ = i[N];
      return $ ? n($[0], $[1]) : N.toUpperCase();
    }
    const r = {
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
      const $ = r[N.name];
      return $ ? n($, N.tooltip || "") : N.tooltip || "";
    }
    const c = {
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
      const $ = c[N.name] || "", O = N.name.replace(/_/g, " ").replace(/\b\w/g, (C) => C.toUpperCase());
      return $ ? `${$} ${O}` : O;
    }
    const f = /* @__PURE__ */ rn({}), p = {
      photo_style: { emoji: "📷", labelKey: "scn_style_photo_label", labelFallback: "Photo" },
      nsfw_photo_style: { emoji: "🔞", labelKey: "scn_style_nsfw_photo_label", labelFallback: "NSFW Photo" },
      art_style: { emoji: "🎨", labelKey: "scn_style_art_label", labelFallback: "Art" },
      nsfw_art_style: { emoji: "🔞", labelKey: "scn_style_nsfw_art_label", labelFallback: "NSFW Art" }
    };
    function h(N) {
      const $ = p[N], O = $ ? `${$.emoji} ${n($.labelKey, $.labelFallback)}: ` : "", C = String(I(N, "None") || "None");
      if (C === "None") return `${O}${n("scn_style_none", "None")}`;
      const v = C.indexOf("/"), R = v === -1 ? C : C.slice(v + 1);
      return `${O}${R}`;
    }
    function _(N) {
      f[N] = !0;
    }
    function F(N, $) {
      b(N, $), f[N] = !1;
    }
    const w = X(() => {
      var $;
      const N = {};
      for (const O of o) (N[$ = O.section || "_"] ?? (N[$] = [])).push(O);
      return N;
    }), x = X(() => {
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
    function M(N) {
      const $ = t.state.ui[`collapsed_${N}`];
      return $ === void 0 ? S.has(N) : !!$;
    }
    function A(N, $) {
      t.state.ui[`collapsed_${N}`] = $;
    }
    Te(() => t.state.nodeState, () => {
    }, { deep: !0 });
    const T = X({
      get: () => t.state.nodeState.seed_mode ?? "random",
      set: (N) => {
        t.state.nodeState.seed_mode = N;
      }
    }), E = X({
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
    }), G = X(() => T.value === "fixed" ? `${E.value}` : "random");
    Te(T, (N) => {
      const $ = t.state.node, O = $ ? te($, "control_after_generate") : null;
      O && (O.value = N === "fixed" ? "fixed" : "randomize");
    }, { immediate: !0 });
    function q() {
      T.value = "random";
    }
    function U() {
      const N = t.state.node, $ = N ? te(N, "seed") : null, O = $ && Number.isFinite(Number($.value)) ? Number($.value) : t.state.lastRunSeed;
      if (O == null || !Number.isFinite(O)) {
        Ze.warning("No last-run seed recorded yet");
        return;
      }
      E.value = O, T.value = "fixed";
    }
    function j() {
      const N = Math.floor(Math.random() * 1e9) & 2147483647;
      E.value = N, T.value = "fixed";
    }
    return (N, $) => (L(), k("div", kh, [
      (L(!0), k(fe, null, ke(w.value, (O, C) => (L(), k(fe, { key: C }, [
        C !== "styles" ? (L(), k("div", Ah, [
          C !== "_" && C !== "prompt" ? (L(), Ie(g(Os), {
            key: 0,
            title: a(String(C)),
            "model-value": M(String(C)),
            "onUpdate:modelValue": (v) => A(String(C), v)
          }, null, 8, ["title", "model-value", "onUpdate:modelValue"])) : ee("", !0),
          (L(!0), k(fe, null, ke(O, (v) => (L(), k(fe, {
            key: v.name
          }, [
            g(l).has(v.name) ? ee("", !0) : Qe((L(), k("div", {
              key: 0,
              class: "fil-w-row",
              title: u(v)
            }, [
              v.kind === "chip_grid" ? (L(), Ie(g(rl), {
                key: 0,
                options: v.values || [],
                "model-value": String(I(v.name, "")),
                columns: v.columns ?? 3,
                "onUpdate:modelValue": (R) => b(v.name, R)
              }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"])) : v.kind === "chip_list" ? (L(), Ie(g(wp), {
                key: 1,
                options: v.values || [],
                "model-value": I(v.name, null),
                searchable: v.searchable ?? !0,
                "onUpdate:modelValue": (R) => b(v.name, R)
              }, null, 8, ["options", "model-value", "searchable", "onUpdate:modelValue"])) : v.kind === "segmented" ? (L(), Ie(g(it), {
                key: 2,
                options: v.options || [],
                "model-value": String(I(v.name, "")),
                label: d(v),
                "onUpdate:modelValue": (R) => b(v.name, R)
              }, null, 8, ["options", "model-value", "label", "onUpdate:modelValue"])) : (L(), Ie(g(rl), {
                key: 3,
                options: v.values || [],
                "model-value": String(I(v.name, "")),
                columns: v.columns ?? 3,
                "onUpdate:modelValue": (R) => b(v.name, R)
              }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"]))
            ], 8, Dh)), [
              [Vi, C === "_" || C === "prompt" || !M(String(C))]
            ])
          ], 64))), 128))
        ])) : ee("", !0)
      ], 64))), 128)),
      P("div", Eh, [
        Y(g(Os), {
          title: a("advanced"),
          "model-value": M("advanced"),
          "onUpdate:modelValue": $[0] || ($[0] = (O) => A("advanced", O))
        }, null, 8, ["title", "model-value"]),
        Qe(P("div", Th, [
          (L(!0), k(fe, null, ke(x.value, (O, C) => (L(), k("div", {
            key: `style-pair-${C}`,
            class: "fil-style-pair-row"
          }, [
            (L(!0), k(fe, null, ke(O, (v) => (L(), k("div", {
              key: v.name,
              class: "fil-style-pair-item",
              title: u(v)
            }, [
              Y(g(Ye), {
                variant: "full",
                label: h(v.name),
                onClick: (R) => _(v.name)
              }, null, 8, ["label", "onClick"]),
              Y(g(si), {
                open: !!f[v.name],
                title: d(v),
                width: "640px",
                "onUpdate:open": (R) => f[v.name] = R
              }, {
                default: ns(() => [
                  Y(g(Lm), {
                    styles: v.values || [],
                    "model-value": String(I(v.name, "None")),
                    onSelect: (R) => F(v.name, R)
                  }, null, 8, ["styles", "model-value", "onSelect"])
                ]),
                _: 2
              }, 1032, ["open", "title", "onUpdate:open"])
            ], 8, Ph))), 128))
          ]))), 128))
        ], 512), [
          [Vi, !M("advanced")]
        ])
      ]),
      P("div", Rh, [
        P("input", {
          value: G.value,
          type: "text",
          class: me(["fil-scanner-seed-field", { "is-random": T.value === "random" }]),
          readonly: T.value === "random",
          "aria-label": "Seed value",
          title: T.value === "fixed" ? g(n)("scn_seed_locked", "Locked seed") : g(n)("scn_seed_auto_random", "Auto-random — a new seed is generated each run"),
          onInput: $[1] || ($[1] = (O) => E.value = Number(O.target.value) || 0)
        }, null, 42, Nh),
        P("button", {
          type: "button",
          class: me(["fil-scanner-seed-pill", { active: T.value === "random" }]),
          title: g(n)("scn_seed_mode_tt", "Random generates a new seed each run."),
          onClick: q
        }, Z(g(n)("scn_seed_random", "Random")), 11, Oh),
        P("button", {
          type: "button",
          class: "fil-scanner-seed-pill",
          title: t.state.lastRunSeed != null ? `${g(n)("scn_seed_use_last_prefix", "Reuse the last run's seed:")} ${t.state.lastRunSeed}` : g(n)("scn_seed_use_last_tt", "Reuse the seed from the last executed run."),
          onClick: U
        }, Z(g(n)("scn_seed_use_last", "Use last")), 9, $h),
        P("button", {
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
}, Symbol.toStringTag, { value: "Module" })), jh = { class: "fil-cleaner-root" }, Wh = ["aria-pressed", "onClick"], zh = { class: "fil-cleaner-label" }, Gh = /* @__PURE__ */ xe({
  __name: "NeuroCleaner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Rt(), s = [
      { name: "clean_vram", label: "🧹 Flush GPU Cache", defaultOn: !0 },
      { name: "unload_diffusion", label: "🌀 Unload Diffusion (FLUX/SD)", defaultOn: !0 },
      { name: "unload_clip", label: "📎 Unload CLIP / Text Encoder", defaultOn: !1 },
      { name: "unload_vae", label: "🖼️ Unload VAE", defaultOn: !1 },
      { name: "unload_control", label: "🎛️ Unload ControlNet / Adapter", defaultOn: !1 }
    ];
    function o(l, a) {
      const r = t.state.nodeState[l];
      return typeof r == "boolean" ? r : a;
    }
    function i(l, a) {
      t.state.nodeState[l] = !o(l, a);
    }
    return (l, a) => (L(), k("div", jh, [
      (L(), k(fe, null, ke(s, (r) => P("button", {
        key: r.name,
        type: "button",
        class: me(["fil-cleaner-row", { active: o(r.name, r.defaultOn) }]),
        "aria-pressed": o(r.name, r.defaultOn),
        onClick: (u) => i(r.name, r.defaultOn)
      }, [
        a[0] || (a[0] = P("span", { class: "fil-cleaner-dot" }, null, -1)),
        P("span", zh, Z(g(n)(`nc_${r.name}`, r.label)), 1)
      ], 10, Wh)), 64))
    ]));
  }
}), Kh = /* @__PURE__ */ Fe(Gh, [["__scopeId", "data-v-88b84a03"]]), qh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kh
}, Symbol.toStringTag, { value: "Module" }));
function bo(e) {
  return Math.min(1, Math.max(0, e));
}
const Xh = { class: "fil-cmp-root" }, Yh = {
  key: 0,
  class: "fil-cmp-placeholder"
}, Jh = { class: "fil-cmp-save-row" }, Qh = {
  key: 2,
  class: "fil-cmp-settings"
}, Zh = /* @__PURE__ */ xe({
  __name: "BeforeAfterCompare",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Rt(), s = X({
      get: () => t.state.ui.compare_mode ?? "wipe",
      set: (C) => {
        t.state.ui.compare_mode = C, U();
      }
    }), o = X({
      get: () => Number(t.state.ui.compare_position ?? 0.5),
      set: (C) => {
        t.state.ui.compare_position = bo(C), U();
      }
    }), i = X({
      get: () => Number(t.state.ui.compare_opacity ?? 0.5),
      set: (C) => {
        t.state.ui.compare_opacity = bo(C), U();
      }
    }), l = X({
      get: () => t.state.ui.settings_collapsed !== !1,
      set: (C) => {
        t.state.ui.settings_collapsed = C;
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
    function d(C) {
      t.state.nodeState.swap = C === "ON";
    }
    const f = X(() => String(t.state.nodeState.resize_mode ?? "Off"));
    function p(C) {
      t.state.nodeState.resize_mode = C;
    }
    const h = X(() => Number(t.state.nodeState.max_resolution ?? 4096) || 4096);
    function _(C) {
      t.state.nodeState.max_resolution = C;
    }
    const F = X(() => f.value !== "Off"), w = X(() => t.state.ui.compare_images ?? {}), x = /* @__PURE__ */ oe(null), I = /* @__PURE__ */ oe(null), b = /* @__PURE__ */ oe(!1), S = X(() => !!x.value || !!I.value);
    function M(C) {
      return new Promise((v, R) => {
        const ae = new Image();
        ae.onload = () => v(ae), ae.onerror = () => R(new Error("image load failed")), ae.src = C;
      });
    }
    const A = /* @__PURE__ */ oe(null), T = /* @__PURE__ */ oe(null);
    let E = 0, G = null;
    Te(
      () => t.state.ui.compare_images,
      async (C) => {
        var ne, _e;
        const v = C ?? {}, R = (ne = v.a) == null ? void 0 : ne[0], ae = (_e = v.b) == null ? void 0 : _e[0];
        b.value = !1, x.value = null, I.value = null;
        try {
          R && (x.value = await M(il(R))), ae && (I.value = await M(il(ae)));
        } catch {
          b.value = !0;
        }
        U();
      },
      { deep: !0, immediate: !0 }
    ), Te([s, o, i], () => U());
    function q(C, v, R, ae) {
      if (!R || !ae) return { x: 0, y: 0, w: C, h: v };
      const ne = C / v, _e = R / ae;
      let tt, re;
      return _e > ne ? (tt = C, re = C / _e) : (re = v, tt = v * _e), { x: (C - tt) / 2, y: (v - re) / 2, w: tt, h: re };
    }
    function U() {
      E || (E = requestAnimationFrame(() => {
        E = 0, j();
      }));
    }
    function j() {
      const C = T.value, v = A.value;
      if (!C || !v) return;
      const R = window.devicePixelRatio || 1, ae = v.clientWidth, ne = v.clientHeight;
      if (ae <= 0 || ne <= 0) return;
      const _e = Math.round(ae * R), tt = Math.round(ne * R);
      (C.width !== _e || C.height !== tt) && (C.width = _e, C.height = tt);
      const re = C.getContext("2d");
      if (!re) return;
      re.setTransform(R, 0, 0, R, 0, 0), re.clearRect(0, 0, ae, ne);
      const Ve = x.value, Ae = I.value;
      if (!Ve && !Ae) return;
      if (s.value === "side-by-side") {
        const Ge = ae / 2;
        if (Ve) {
          const Re = q(Ge, ne, Ve.naturalWidth, Ve.naturalHeight);
          re.drawImage(Ve, Re.x, Re.y, Re.w, Re.h);
        }
        if (Ae) {
          const Re = q(Ge, ne, Ae.naturalWidth, Ae.naturalHeight);
          re.drawImage(Ae, Ge + Re.x, Re.y, Re.w, Re.h);
        }
        re.strokeStyle = "rgba(255,255,255,0.2)", re.beginPath(), re.moveTo(Ge, 0), re.lineTo(Ge, ne), re.stroke();
        return;
      }
      const Gt = Ve ?? Ae, de = q(ae, ne, Gt.naturalWidth, Gt.naturalHeight);
      if (s.value === "before") {
        Ve && re.drawImage(Ve, de.x, de.y, de.w, de.h);
        return;
      }
      if (s.value === "after") {
        Ae && re.drawImage(Ae, de.x, de.y, de.w, de.h);
        return;
      }
      if (s.value === "overlay") {
        Ve && re.drawImage(Ve, de.x, de.y, de.w, de.h), Ae && (re.save(), re.globalAlpha = i.value, re.drawImage(Ae, de.x, de.y, de.w, de.h), re.restore());
        return;
      }
      if (s.value === "difference") {
        Ve && re.drawImage(Ve, de.x, de.y, de.w, de.h), Ae && (re.save(), re.globalCompositeOperation = "difference", re.drawImage(Ae, de.x, de.y, de.w, de.h), re.restore());
        return;
      }
      if (Ve && re.drawImage(Ve, de.x, de.y, de.w, de.h), Ae) {
        const Ge = de.x + de.w * o.value;
        re.save(), re.beginPath(), re.rect(Ge, de.y, de.x + de.w - Ge, de.h), re.clip(), re.drawImage(Ae, de.x, de.y, de.w, de.h), re.restore();
        const Re = getComputedStyle(v).getPropertyValue("--fil-accent").trim() || "#e8724c";
        re.save(), re.strokeStyle = Re, re.lineWidth = 2, re.shadowColor = Re, re.shadowBlur = 6, re.beginPath(), re.moveTo(Ge, de.y), re.lineTo(Ge, de.y + de.h), re.stroke(), re.restore();
      }
    }
    function N(C) {
      const v = A.value;
      if (!v) return;
      const R = v.getBoundingClientRect();
      o.value = bo((C.clientX - R.left) / R.width);
    }
    function $(C) {
      if (s.value !== "wipe") return;
      N(C);
      const v = (ae) => N(ae), R = () => {
        window.removeEventListener("pointermove", v), window.removeEventListener("pointerup", R);
      };
      window.addEventListener("pointermove", v), window.addEventListener("pointerup", R);
    }
    cn(() => {
      G = new ResizeObserver(() => U()), A.value && G.observe(A.value), U();
    }), xn(() => {
      G == null || G.disconnect(), E && cancelAnimationFrame(E);
    });
    async function O(C) {
      var R, ae;
      const v = C === "a" ? (R = w.value.a) == null ? void 0 : R[0] : (ae = w.value.b) == null ? void 0 : ae[0];
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
      var R, ae;
      return L(), k("div", Xh, [
        Y(g(Pp), {
          options: a.value,
          "model-value": s.value,
          label: g(n)("lbl_mode", "⚙️ Mode"),
          title: g(n)("cmp_view_mode", "How to compare the two images."),
          "onUpdate:modelValue": v[0] || (v[0] = (ne) => s.value = ne)
        }, null, 8, ["options", "model-value", "label", "title"]),
        P("div", {
          ref_key: "wrapRef",
          ref: A,
          class: "fil-cmp-canvas-wrap"
        }, [
          P("canvas", {
            ref_key: "canvasRef",
            ref: T,
            class: me(["fil-cmp-canvas", { "is-wipe": s.value === "wipe" }]),
            onPointerdown: $
          }, null, 34),
          S.value ? ee("", !0) : (L(), k("div", Yh, Z(b.value ? g(n)("cmp_load_error", "Could not load preview images") : g(n)("cmp_no_preview", "Run the node to see a preview")), 1))
        ], 512),
        s.value === "wipe" ? (L(), Ie(g(lt), {
          key: 0,
          "model-value": o.value,
          min: 0,
          max: 1,
          step: 0.01,
          label: g(n)("cmp_position", "Position"),
          "onUpdate:modelValue": v[1] || (v[1] = (ne) => o.value = ne)
        }, null, 8, ["model-value", "label"])) : ee("", !0),
        s.value === "overlay" ? (L(), Ie(g(lt), {
          key: 1,
          "model-value": i.value,
          min: 0,
          max: 1,
          step: 0.01,
          label: g(n)("cmp_opacity", "Opacity"),
          "onUpdate:modelValue": v[2] || (v[2] = (ne) => i.value = ne)
        }, null, 8, ["model-value", "label"])) : ee("", !0),
        P("div", Jh, [
          Y(g(Ye), {
            variant: "sm",
            label: g(n)("cmp_save_before", "💾 Save before"),
            disabled: !((R = w.value.a) != null && R.length),
            onClick: v[3] || (v[3] = (ne) => O("a"))
          }, null, 8, ["label", "disabled"]),
          Y(g(Ye), {
            variant: "sm",
            label: g(n)("cmp_save_after", "💾 Save after"),
            disabled: !((ae = w.value.b) != null && ae.length),
            onClick: v[4] || (v[4] = (ne) => O("b"))
          }, null, 8, ["label", "disabled"])
        ]),
        Y(g(Os), {
          title: g(n)("cmp_settings", "Settings"),
          modelValue: l.value,
          "onUpdate:modelValue": v[5] || (v[5] = (ne) => l.value = ne)
        }, null, 8, ["title", "modelValue"]),
        l.value ? ee("", !0) : (L(), k("div", Qh, [
          Y(g(it), {
            options: ["ON", "OFF"],
            "option-labels": { ON: g(n)("cmp_swap_on_label", "🔄 Swapped"), OFF: g(n)("cmp_swap_off_label", "↔️ Normal") },
            "model-value": c.value,
            label: g(n)("lbl_swap", "🔁 Swap before/after"),
            title: g(n)("cmp_swap", "Swap which image is shown as before/after."),
            "onUpdate:modelValue": d
          }, null, 8, ["option-labels", "model-value", "label", "title"]),
          Y(g(it), {
            options: [...r],
            "option-labels": u,
            "model-value": f.value,
            label: g(n)("lbl_resize_mode", "🖥️ Resize mode"),
            title: g(n)("cmp_resize_mode", "Off keeps images untouched. Preview modes downscale for a lighter preview and, optionally, output."),
            "onUpdate:modelValue": p
          }, null, 8, ["options", "model-value", "label", "title"]),
          F.value ? (L(), Ie(g(lt), {
            key: 0,
            "model-value": h.value,
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
}), eg = /* @__PURE__ */ Fe(Zh, [["__scopeId", "data-v-2abe5720"]]), tg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: eg
}, Symbol.toStringTag, { value: "Module" })), ng = { class: "fil-up-root" }, sg = { class: "fil-up-row fil-up-row-overlap" }, og = ["title"], ig = ["title"], lg = { class: "fil-up-row" }, ag = ["title"], rg = ["title"], cg = /* @__PURE__ */ xe({
  __name: "UpscaleTileCalc",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Rt(), s = ["Low VRAM", "Balanced", "High VRAM", "Max Quality", "Ultra Quality"], o = {
      "Low VRAM": "🪫 Low VRAM",
      Balanced: "⚖️ Balanced",
      "High VRAM": "🔋 High VRAM",
      "Max Quality": "💎 Max Quality",
      "Ultra Quality": "👑 Ultra Quality"
    };
    function i(I, b) {
      return X({
        get: () => Number(t.state.nodeState[I] ?? t.state.initialValues[I] ?? b) || b,
        set: (S) => {
          t.state.nodeState[I] = S;
        }
      });
    }
    function l(I, b) {
      return X({
        get: () => t.state.nodeState[I] ?? t.state.initialValues[I] ?? b ? "ON" : "OFF",
        set: (S) => {
          t.state.nodeState[I] = S === "ON";
        }
      });
    }
    const a = i("upscale_factor", 2), r = i("tile_size", 1024), u = i("tile_overlap", 64), c = i("manual_tile_cols", 0), d = i("manual_tile_rows", 0), f = l("auto_overlap", !1), p = l("auto_mode", !1), h = l("non_square_tiles", !1), _ = l("auto_fix_thin_edges", !1), F = X({
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
    return Te(() => t.state.nodeState, () => {
    }, { deep: !0 }), (I, b) => (L(), k("div", ng, [
      Y(g(lt), {
        "model-value": g(a),
        min: 0.1,
        max: 8,
        step: 0.25,
        label: g(n)("lbl_upscale_factor", "🔍 Upscale factor"),
        title: g(n)("utc_factor", "Upscale multiplier."),
        "onUpdate:modelValue": b[0] || (b[0] = (S) => a.value = S)
      }, null, 8, ["model-value", "label", "title"]),
      Y(g(Os), {
        title: g(n)("utc_section_auto", "⚙️ Auto / advanced"),
        "model-value": w("auto"),
        "onUpdate:modelValue": b[1] || (b[1] = (S) => x("auto", S))
      }, null, 8, ["title", "model-value"]),
      w("auto") ? ee("", !0) : (L(), k(fe, { key: 0 }, [
        Y(g(ms), {
          "model-value": g(p),
          label: g(n)("lbl_full_auto", "🤖 Full auto"),
          title: g(n)("utc_auto_mode", "Pick tile size/overlap automatically from the selected VRAM profile."),
          "onUpdate:modelValue": b[2] || (b[2] = (S) => p.value = S)
        }, null, 8, ["model-value", "label", "title"]),
        g(p) === "ON" ? (L(), Ie(g(it), {
          key: 0,
          options: [...s],
          "option-labels": o,
          "model-value": F.value,
          label: g(n)("lbl_auto_profile", "🎚️ Auto profile"),
          title: g(n)("utc_auto_profile", "VRAM/quality profile used when Full Auto is on."),
          "onUpdate:modelValue": b[3] || (b[3] = (S) => F.value = S)
        }, null, 8, ["options", "model-value", "label", "title"])) : ee("", !0),
        g(p) === "OFF" ? (L(), k(fe, { key: 1 }, [
          P("div", sg, [
            P("label", {
              class: "fil-w-label",
              title: g(n)("utc_tile_size", "Base tile size.")
            }, Z(g(n)("lbl_tile_size", "🔲 Tile size")), 9, og),
            Y(g(sn), {
              modelValue: g(r),
              "onUpdate:modelValue": b[4] || (b[4] = (S) => /* @__PURE__ */ ye(r) ? r.value = S : null),
              min: 64,
              max: 2048,
              step: 64
            }, null, 8, ["modelValue"]),
            P("label", {
              class: "fil-w-label",
              title: g(n)("utc_overlap", "Tile overlap.")
            }, Z(g(n)("lbl_overlap", "🧵 Overlap")), 9, ig),
            Y(g(sn), {
              modelValue: g(u),
              "onUpdate:modelValue": b[5] || (b[5] = (S) => /* @__PURE__ */ ye(u) ? u.value = S : null),
              min: 0,
              max: 512,
              step: 8,
              disabled: g(f) === "ON"
            }, null, 8, ["modelValue", "disabled"]),
            Y(g(ms), {
              bare: "",
              "model-value": g(f),
              label: g(n)("lbl_auto_overlap", "🧵 Auto"),
              title: g(n)("utc_auto_overlap", "Derive overlap automatically from tile size (~12.5%) instead of the fixed value above."),
              "onUpdate:modelValue": b[6] || (b[6] = (S) => f.value = S)
            }, null, 8, ["model-value", "label", "title"])
          ]),
          P("div", lg, [
            P("label", {
              class: "fil-w-label",
              title: g(n)("utc_manual_cols", "Force this many tile columns. 0 = compute from tile size.")
            }, Z(g(n)("lbl_manual_cols", "↔️ Cols")), 9, ag),
            Y(g(sn), {
              modelValue: g(c),
              "onUpdate:modelValue": b[7] || (b[7] = (S) => /* @__PURE__ */ ye(c) ? c.value = S : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"]),
            P("label", {
              class: "fil-w-label",
              title: g(n)("utc_manual_rows", "Force this many tile rows. 0 = compute from tile size.")
            }, Z(g(n)("lbl_manual_rows", "↕️ Rows")), 9, rg),
            Y(g(sn), {
              modelValue: g(d),
              "onUpdate:modelValue": b[8] || (b[8] = (S) => /* @__PURE__ */ ye(d) ? d.value = S : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"])
          ]),
          Y(g(ms), {
            "model-value": g(_),
            label: g(n)("lbl_auto_fix_edges", "🩹 Auto-fix thin edges"),
            title: g(n)("utc_auto_fix_edges", "Shrink tile_size to the next standard size instead of just warning when the grid would leave a thin edge tile."),
            "onUpdate:modelValue": b[9] || (b[9] = (S) => _.value = S)
          }, null, 8, ["model-value", "label", "title"])
        ], 64)) : ee("", !0)
      ], 64)),
      Y(g(ms), {
        "model-value": g(h),
        label: g(n)("lbl_non_square", "📐 Non-square tiles"),
        title: g(n)("utc_non_square", "Allow rectangular tiles instead of forcing square ones."),
        "onUpdate:modelValue": b[10] || (b[10] = (S) => h.value = S)
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), ug = /* @__PURE__ */ Fe(cg, [["__scopeId", "data-v-ff1dd2df"]]), Wa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ug
}, Symbol.toStringTag, { value: "Module" })), dg = { class: "fil-hrf-root" }, fg = {
  key: 2,
  class: "fil-hrf-seed-row"
}, pg = ["value", "readonly", "title"], mg = ["title"], hg = ["title"], gg = ["title"], _g = /* @__PURE__ */ xe({
  __name: "HiResFix",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Rt();
    function s(C, v) {
      return X({
        get: () => Number(t.state.nodeState[C] ?? t.state.initialValues[C] ?? v) || v,
        set: (R) => {
          t.state.nodeState[C] = R;
        }
      });
    }
    function o(C, v) {
      return X({
        get: () => String(t.state.nodeState[C] ?? t.state.initialValues[C] ?? v),
        set: (R) => {
          t.state.nodeState[C] = R;
        }
      });
    }
    function i(C, v) {
      return X({
        get: () => t.state.nodeState[C] ?? t.state.initialValues[C] ?? v ? "ON" : "OFF",
        set: (R) => {
          t.state.nodeState[C] = R === "ON";
        }
      });
    }
    function l(C, v) {
      var _e;
      const R = t.state.node, ae = R ? te(R, C) : null, ne = (_e = ae == null ? void 0 : ae.options) == null ? void 0 : _e.values;
      return Array.isArray(ne) && ne.length ? ne : v;
    }
    const a = o("upscale_type", "latent"), r = o("hires_ckpt_name", "(use same)"), u = o("latent_upscaler", "nearest-exact"), c = o("pixel_upscaler", ""), d = s("upscale_by", 1.25), f = i("use_same_seed", !0), p = s("denoise", 0.56), h = s("hires_steps", 12), _ = s("iterations", 1), F = i("use_controlnet", !1), w = o("control_net_name", ""), x = s("strength", 1), I = o("preprocessor", "none"), b = X(() => l("hires_ckpt_name", ["(use same)"])), S = ["nearest-exact", "bilinear", "area", "bicubic", "bislerp"], M = X(() => l("pixel_upscaler", ["(none)"])), A = X(() => l("control_net_name", ["(none)"])), T = X(() => l("preprocessor", ["none", "canny"])), E = X(() => a.value === "latent"), G = X(() => a.value === "pixel" || a.value === "both"), q = X({
      get: () => t.state.nodeState.seed_mode ?? "random",
      set: (C) => {
        t.state.nodeState.seed_mode = C;
      }
    }), U = X({
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
    }), j = X(() => q.value === "fixed" ? `${U.value}` : "random");
    Te([f, q], ([C, v]) => {
      const R = t.state.node, ae = R ? te(R, "control_after_generate") : null;
      ae && (ae.value = C === "ON" || v === "fixed" ? "fixed" : "randomize");
    }, { immediate: !0 });
    function N() {
      q.value = "random";
    }
    function $() {
      const C = t.state.node, v = C ? te(C, "seed") : null, R = v && Number.isFinite(Number(v.value)) ? Number(v.value) : t.state.lastRunSeed;
      if (R == null || !Number.isFinite(R)) {
        Ze.warning("No last-run seed recorded yet");
        return;
      }
      U.value = R, q.value = "fixed";
    }
    function O() {
      const C = Math.floor(Math.random() * 1e9) & 2147483647;
      U.value = C, q.value = "fixed";
    }
    return (C, v) => (L(), k("div", dg, [
      Y(g(it), {
        options: ["latent", "pixel", "both"],
        "option-labels": { latent: "🌀 latent", pixel: "🖼️ pixel", both: "🔀 both" },
        "model-value": g(a),
        label: g(n)("lbl_upscale_type", "⬆️ Upscale type"),
        title: g(n)("hrf_upscale_type", "Upscale in latent space, pixel space, or both."),
        "onUpdate:modelValue": v[0] || (v[0] = (R) => a.value = R)
      }, null, 8, ["model-value", "label", "title"]),
      E.value ? (L(), Ie(g(fs), {
        key: 0,
        options: S,
        "model-value": g(u),
        label: g(n)("lbl_latent_up", "🌀 Latent upscaler"),
        title: g(n)("hrf_latent_up", "Latent upscale method."),
        "onUpdate:modelValue": v[1] || (v[1] = (R) => u.value = R)
      }, null, 8, ["model-value", "label", "title"])) : ee("", !0),
      G.value ? (L(), Ie(g(fs), {
        key: 1,
        options: M.value,
        "model-value": g(c),
        label: g(n)("lbl_pixel_up", "🖼️ Pixel upscaler"),
        title: g(n)("hrf_pixel_up", "Pixel upscale model (from upscale_models)."),
        "onUpdate:modelValue": v[2] || (v[2] = (R) => c.value = R)
      }, null, 8, ["options", "model-value", "label", "title"])) : ee("", !0),
      Y(g(fs), {
        options: b.value,
        "model-value": g(r),
        label: g(n)("lbl_hires_ckpt", "📦 Hires checkpoint"),
        title: g(n)("hrf_ckpt", "Checkpoint for the hires pass. (use same) reuses the base model."),
        "onUpdate:modelValue": v[3] || (v[3] = (R) => r.value = R)
      }, null, 8, ["options", "model-value", "label", "title"]),
      Y(g(lt), {
        "model-value": g(d),
        min: 0.01,
        max: 8,
        step: 0.05,
        label: g(n)("lbl_upscale_by", "🔍 Upscale by"),
        title: g(n)("hrf_upscale_by", "Upscale multiplier."),
        "onUpdate:modelValue": v[4] || (v[4] = (R) => d.value = R)
      }, null, 8, ["model-value", "label", "title"]),
      Y(g(lt), {
        "model-value": g(p),
        min: 0,
        max: 1,
        step: 0.01,
        label: g(n)("lbl_hrf_denoise", "💧 Denoise"),
        title: g(n)("hrf_denoise", "Denoise strength for the hires re-sample."),
        "onUpdate:modelValue": v[5] || (v[5] = (R) => p.value = R)
      }, null, 8, ["model-value", "label", "title"]),
      Y(g(sn), {
        modelValue: g(h),
        "onUpdate:modelValue": v[6] || (v[6] = (R) => /* @__PURE__ */ ye(h) ? h.value = R : null),
        min: 1,
        max: 1e4,
        step: 1,
        label: g(n)("lbl_hires_steps", "🪜 Hires steps"),
        title: g(n)("hrf_steps", "Steps for the hires re-sample.")
      }, null, 8, ["modelValue", "label", "title"]),
      Y(g(sn), {
        modelValue: g(_),
        "onUpdate:modelValue": v[7] || (v[7] = (R) => /* @__PURE__ */ ye(_) ? _.value = R : null),
        min: 0,
        max: 5,
        step: 1,
        label: g(n)("lbl_iterations", "🔁 Iterations"),
        title: g(n)("hrf_iterations", "How many upscale+resample passes to run.")
      }, null, 8, ["modelValue", "label", "title"]),
      Y(g(it), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "♻️ same seed", OFF: "🎲 own" },
        "model-value": g(f),
        label: g(n)("lbl_use_same_seed", "🌱 Seed source"),
        title: g(n)("hrf_same_seed", "Reuse the samplers seed for the hires pass."),
        "onUpdate:modelValue": v[8] || (v[8] = (R) => f.value = R)
      }, null, 8, ["model-value", "label", "title"]),
      g(f) === "OFF" ? (L(), k("div", fg, [
        P("input", {
          value: j.value,
          type: "text",
          class: me(["fil-hrf-seed-field", { "is-random": q.value === "random" }]),
          readonly: q.value === "random",
          "aria-label": "Hires seed value",
          title: q.value === "fixed" ? g(n)("hrf_seed_locked", "Locked hires seed") : g(n)("hrf_seed_auto_random", "Auto-random — a new hires seed is generated each run"),
          onInput: v[9] || (v[9] = (R) => U.value = Number(R.target.value) || 0)
        }, null, 42, pg),
        P("button", {
          type: "button",
          class: me(["fil-hrf-seed-pill", { active: q.value === "random" }]),
          title: g(n)("hrf_seed_mode_tt", "Random generates a new hires seed each run."),
          onClick: N
        }, Z(g(n)("hrf_seed_random", "Random")), 11, mg),
        P("button", {
          type: "button",
          class: "fil-hrf-seed-pill",
          title: t.state.lastRunSeed != null ? `${g(n)("hrf_seed_use_last_prefix", "Reuse the last run's hires seed:")} ${t.state.lastRunSeed}` : g(n)("hrf_seed_use_last_tt", "Reuse the hires seed from the last executed run."),
          onClick: $
        }, Z(g(n)("hrf_seed_use_last", "Use last")), 9, hg),
        P("button", {
          type: "button",
          class: "fil-hrf-seed-pill fil-hrf-seed-pill-accent",
          title: g(n)("hrf_seed_new_fixed_tt", "Generate a new random fixed hires seed."),
          onClick: O
        }, Z(g(n)("hrf_seed_new_fixed", "New fixed")), 9, gg)
      ])) : ee("", !0),
      Y(g(it), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "🕹️ ON", OFF: "OFF" },
        "model-value": g(F),
        label: g(n)("lbl_use_cn", "🕹️ Use ControlNet"),
        title: g(n)("hrf_use_cn", "Guide the hires pass with a ControlNet. Tile ControlNets work without a preprocessor."),
        "onUpdate:modelValue": v[10] || (v[10] = (R) => F.value = R)
      }, null, 8, ["model-value", "label", "title"]),
      g(F) === "ON" ? (L(), k(fe, { key: 3 }, [
        Y(g(fs), {
          options: A.value,
          "model-value": g(w),
          label: g(n)("lbl_cn_name", "🧩 ControlNet model"),
          title: g(n)("hrf_cn_name", "ControlNet model to apply."),
          "onUpdate:modelValue": v[11] || (v[11] = (R) => w.value = R)
        }, null, 8, ["options", "model-value", "label", "title"]),
        Y(g(lt), {
          "model-value": g(x),
          min: 0,
          max: 10,
          step: 0.01,
          label: g(n)("lbl_cn_strength", "💪 Strength"),
          title: g(n)("hrf_cn_strength", "ControlNet strength."),
          "onUpdate:modelValue": v[12] || (v[12] = (R) => x.value = R)
        }, null, 8, ["model-value", "label", "title"]),
        Y(g(it), {
          options: T.value,
          "option-labels": { none: "🚫 none", canny: "🪞 canny" },
          "model-value": g(I),
          label: g(n)("lbl_cn_preproc", "🧪 Preprocessor"),
          title: g(n)("hrf_cn_preproc", "Preprocess the ControlNet hint image. 'none' feeds the raw upscaled image (right for tile ControlNets)."),
          "onUpdate:modelValue": v[13] || (v[13] = (R) => I.value = R)
        }, null, 8, ["options", "model-value", "label", "title"])
      ], 64)) : ee("", !0)
    ]));
  }
}), vg = /* @__PURE__ */ Fe(_g, [["__scopeId", "data-v-48578e7c"]]), bg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vg
}, Symbol.toStringTag, { value: "Module" })), yg = {
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
}, wg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HELP_DEFAULTS: yg
}, Symbol.toStringTag, { value: "Module" }));
//# sourceMappingURL=fil_design_imagemind.js.map
