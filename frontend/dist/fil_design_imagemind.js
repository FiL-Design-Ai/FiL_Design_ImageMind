(function(){try{var s=document.createElement("style");s.textContent=".fil-color-picker[data-v-969386c1]{display:flex;flex-direction:column;gap:8px;padding:8px;width:176px;box-sizing:border-box}.fil-cp-sv[data-v-969386c1]{position:relative;width:100%;height:100px;border-radius:4px;cursor:crosshair;touch-action:none}.fil-cp-sv-white[data-v-969386c1]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to right,#fff,#fff0);border-radius:4px}.fil-cp-sv-black[data-v-969386c1]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to top,#000,#0000);border-radius:4px}.fil-cp-sv-thumb[data-v-969386c1]{position:absolute;width:10px;height:10px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hue[data-v-969386c1]{position:relative;width:100%;height:12px;border-radius:6px;background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red);cursor:pointer;touch-action:none}.fil-cp-hue-thumb[data-v-969386c1]{position:absolute;top:50%;width:12px;height:12px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hex-row[data-v-969386c1]{display:flex;align-items:center;gap:6px}.fil-cp-swatch[data-v-969386c1]{width:22px;height:22px;border-radius:4px;border:1px solid rgba(255,255,255,.25);flex-shrink:0}.fil-cp-hex-input[data-v-969386c1]{flex:1;min-width:0;height:22px;box-sizing:border-box;border-radius:4px;border:1px solid rgba(255,255,255,.2);background:#00000040;color:#f2f2f2;font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:12px;padding:0 6px;outline:none}.fil-cp-hex-input[data-v-969386c1]:focus{border-color:#ffffff80}.fil-cp-presets[data-v-969386c1]{display:grid;grid-template-columns:repeat(5,1fr);gap:4px}.fil-color-swatch[data-v-969386c1]{width:24px;height:24px;border-radius:4px;border:2px solid transparent;background:var(--swatch);cursor:pointer;transition:border-color .08s,transform .08s;outline:none;box-sizing:border-box}.fil-color-swatch[data-v-969386c1]:hover{border-color:#ffffff80;transform:scale(1.15)}.fil-color-swatch.is-active[data-v-969386c1]{border-color:#fff;box-shadow:0 0 0 1px var(--swatch)}.fil-node-shell[data-v-e0e8284c]{position:relative;width:100%;box-sizing:border-box}.fil-icon[data-v-dfb78d9f]{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;line-height:0}.fil-icon[data-v-dfb78d9f] svg{width:100%;height:100%}.fil-modal-backdrop[data-v-0b20f2bd]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000;display:flex;align-items:center;justify-content:center;background:#0000008c;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.fil-modal-panel[data-v-0b20f2bd]{width:90%;max-height:80vh;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:10px;box-shadow:0 20px 60px #00000080;display:flex;flex-direction:column;overflow:hidden}.fil-modal-header[data-v-0b20f2bd]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08)}.fil-modal-title[data-v-0b20f2bd]{font-size:14px;font-weight:600;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-close[data-v-0b20f2bd]{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;border:none;background:transparent;color:var(--fil-muted, rgba(255, 255, 255, .5));cursor:pointer;transition:background .08s,color .08s}.fil-modal-close[data-v-0b20f2bd]:hover{background:#ffffff14;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-body[data-v-0b20f2bd]{flex:1;overflow-y:auto;padding:16px}.fil-modal-enter-active[data-v-0b20f2bd],.fil-modal-leave-active[data-v-0b20f2bd]{transition:opacity .15s ease}.fil-modal-enter-from[data-v-0b20f2bd],.fil-modal-leave-to[data-v-0b20f2bd]{opacity:0}.fil-modal-enter-active .fil-modal-panel[data-v-0b20f2bd],.fil-modal-leave-active .fil-modal-panel[data-v-0b20f2bd]{transition:transform .15s ease}.fil-modal-enter-from .fil-modal-panel[data-v-0b20f2bd],.fil-modal-leave-to .fil-modal-panel[data-v-0b20f2bd]{transform:scale(.95) translateY(8px)}.fil-help-title[data-v-536c1547]{margin:0 0 12px;font-size:16px;font-weight:700;color:var(--fil-text, rgba(255,255,255,.9))}.fil-help-body[data-v-536c1547]{margin:0 0 12px;font-size:13px;line-height:1.6;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet[data-v-536c1547]{display:flex;gap:6px;align-items:flex-start;margin-bottom:6px;font-size:13px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet>span[data-v-536c1547]{flex:1}.fil-help-table[data-v-536c1547]{width:100%;border-collapse:collapse;margin-top:8px;font-size:12px}.fil-help-table th[data-v-536c1547],.fil-help-table td[data-v-536c1547]{text-align:left;padding:6px 10px;border-bottom:1px solid rgba(255,255,255,.06)}.fil-help-table th[data-v-536c1547]{font-weight:600;color:var(--fil-text, rgba(255,255,255,.85))}.fil-help-table td[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.6))}.fil-help-code[data-v-536c1547]{background:#0000004d;border-radius:6px;padding:12px;margin-top:10px;overflow-x:auto;font-size:12px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-empty[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.4));font-size:13px}.fil-w-btn[data-v-1c6537e0]{box-sizing:border-box;padding:var(--fil-row-pad);border-radius:6px;background:#ffffff0d;border:1px solid rgba(255,255,255,.14);color:var(--fil-text, rgba(255, 255, 255, .85));font-family:ui-sans-serif,system-ui,sans-serif;font-size:12px;cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;display:inline-flex;align-items:center;justify-content:center;gap:6px}.fil-w-btn[data-v-1c6537e0]:hover:not(:disabled){background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #fff)}.fil-w-btn[data-v-1c6537e0]:active{transform:translateY(1px)}.fil-w-btn[data-v-1c6537e0]:disabled{opacity:.4;cursor:default}.fil-w-btn-accent[data-v-1c6537e0]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #fff)}.fil-w-btn-danger[data-v-1c6537e0]{color:var(--fil-danger, #ef6666)}.fil-w-btn-danger[data-v-1c6537e0]:hover:not(:disabled){background:var(--fil-danger, #ef6666);border-color:var(--fil-danger, #ef6666);color:#fff}.fil-w-btn-sm[data-v-1c6537e0]{padding:4px 8px;font-size:11px}.fil-w-btn-full[data-v-1c6537e0]{width:100%;display:block}.fil-w-btn-icon[data-v-1c6537e0]{display:inline-flex;align-items:center;justify-content:center;gap:5px}.fil-w-btn-glyph[data-v-1c6537e0] svg{width:14px;height:14px}.fil-w-btn.is-flashing[data-v-1c6537e0],.fil-w-btn.is-flashing[data-v-1c6537e0]:hover{background:var(--fil-ok, #62c987);border-color:var(--fil-ok, #62c987);color:#fff}.fil-w-btn.is-loading[data-v-1c6537e0]{cursor:wait}.fil-w-btn[data-v-1c6537e0]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-btn-spinner[data-v-1c6537e0]{display:inline-block;width:12px;height:12px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:fil-w-spin-1c6537e0 .6s linear infinite}@keyframes fil-w-spin-1c6537e0{to{transform:rotate(360deg)}}.fil-pm-root[data-v-329149a3]{display:flex;flex-direction:column;gap:12px;padding:4px 0}.fil-pm-card[data-v-329149a3]{background:#ffffff08;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:12px}.fil-pm-header[data-v-329149a3]{display:flex;align-items:center;gap:8px;margin-bottom:10px}.fil-pm-card--collapsed[data-v-329149a3]{padding:8px 12px}.fil-pm-card--collapsed .fil-pm-header[data-v-329149a3]{margin-bottom:0}.fil-pm-header--clickable[data-v-329149a3]{cursor:pointer}.fil-pm-header--clickable:hover .fil-pm-name[data-v-329149a3]{color:var(--fil-accent, #7c5cfc)}.fil-pm-chevron[data-v-329149a3]{display:inline-flex;align-items:center;color:#fff6;transition:transform .12s ease}.fil-pm-chevron--open[data-v-329149a3]{transform:rotate(90deg)}.fil-pm-icon[data-v-329149a3]{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px}.fil-pm-name[data-v-329149a3]{font-weight:600;font-size:14px;color:var(--fil-text, #f2f2f2)}.fil-pm-disp[data-v-329149a3]{font-size:11px;color:#ffffff80}.fil-pm-status[data-v-329149a3]{margin-left:auto;display:inline-flex;align-items:center;gap:5px;font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#fff6;white-space:nowrap}.fil-pm-dot[data-v-329149a3]{width:8px;height:8px;border-radius:50%;background:currentColor;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 22%,transparent)}.fil-pm-status--connected[data-v-329149a3]{color:var(--fil-success, #4ade80)}.fil-pm-status--configured[data-v-329149a3]{color:var(--fil-warning, #fbbf24)}.fil-pm-status--off[data-v-329149a3]{color:#ffffff4d}.fil-pm-fields[data-v-329149a3]{display:flex;flex-direction:column;gap:8px;margin-bottom:10px}.fil-pm-field[data-v-329149a3]{display:flex;flex-direction:column;gap:3px}.fil-pm-field-label[data-v-329149a3]{font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#ffffff80}.fil-pm-input[data-v-329149a3]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,monospace;font-size:13px;outline:none;transition:border-color .08s}.fil-pm-input[data-v-329149a3]:focus{border-color:var(--fil-accent)}.fil-pm-input.fil-pm-has-val[data-v-329149a3]{border-color:var(--fil-muted, #555)}.fil-pm-actions[data-v-329149a3]{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}.fil-pm-models[data-v-329149a3]{display:flex;flex-wrap:wrap;gap:4px}.fil-pm-model-tag[data-v-329149a3]{display:inline-flex;align-items:center;gap:3px;background:#ffffff12;border-radius:4px;padding:2px 6px;font-size:11px;color:#ffffffbf;white-space:nowrap}.fil-pm-vision-badge[data-v-329149a3]{font-size:10px;line-height:1}.fil-pm-err[data-v-329149a3]{font-size:11px;color:var(--fil-danger, #ef6666);margin-top:4px}.fil-pm-age[data-v-329149a3]{font-size:10px;color:#fff6;align-self:center}.fil-w-chips[data-v-9c6ca5d1]{display:grid;gap:5px;width:100%}.fil-w-chip[data-v-9c6ca5d1]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-9c6ca5d1]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-9c6ca5d1]{background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-accent);border-color:var(--fil-accent);font-weight:500;box-shadow:0 0 8px color-mix(in srgb,var(--fil-accent) 55%,transparent)}.fil-w-chip.disabled[data-v-9c6ca5d1]{opacity:.5;cursor:default}.fil-w-chip[data-v-9c6ca5d1]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chiplist[data-v-3c9e19df]{display:flex;flex-direction:column;gap:5px;width:100%}.fil-w-search[data-v-3c9e19df]{box-sizing:border-box;width:100%;padding:5px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:11px;outline:none}.fil-w-search[data-v-3c9e19df]:focus{border-color:var(--fil-accent)}.fil-w-search[data-v-3c9e19df]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-chip-scroll[data-v-3c9e19df]{display:grid;gap:3px;max-height:200px;overflow-y:auto;overflow-x:hidden;padding-right:2px}.fil-w-chip-scroll[data-v-3c9e19df]::-webkit-scrollbar{width:5px}.fil-w-chip-scroll[data-v-3c9e19df]::-webkit-scrollbar-thumb{background:var(--fil-muted, #555);border-radius:3px}.fil-w-chip-scroll[data-v-3c9e19df]::-webkit-scrollbar-track{background:transparent}.fil-w-chip[data-v-3c9e19df]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-3c9e19df]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-3c9e19df]{background:var(--fil-accent);color:var(--fil-accent-ink, #fff);border-color:var(--fil-accent);font-weight:500}.fil-w-chip.disabled[data-v-3c9e19df]{opacity:.5;cursor:default}.fil-w-chip[data-v-3c9e19df]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chip-empty[data-v-3c9e19df]{padding:8px;text-align:center;color:var(--fil-muted, #666);font-size:11px}.fil-combo[data-v-82542923]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-combo-label[data-v-82542923]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-combo-trigger[data-v-82542923]{grid-column:2;width:100%;box-sizing:border-box;height:30px;display:flex;align-items:center;gap:6px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer;text-align:left;-moz-appearance:none;appearance:none;-webkit-appearance:none}.fil-combo-trigger.open[data-v-82542923],.fil-combo-trigger[data-v-82542923]:focus-visible{border-color:var(--fil-accent);outline:2px solid var(--fil-accent);outline-offset:1px}.fil-combo-trigger.disabled[data-v-82542923]{opacity:.5;cursor:default}.fil-combo-trigger-label[data-v-82542923]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-chevron[data-v-82542923]{font-size:9px;color:var(--fil-muted, rgba(255, 255, 255, .5));flex-shrink:0}.fil-combo-badge[data-v-82542923]{flex-shrink:0;font-size:9px;line-height:1;padding:2px 5px;border-radius:999px;background:var(--fil-accent);color:var(--fil-accent-ink, #fff);font-weight:600}.fil-combo-panel[data-v-82542923]{position:fixed;z-index:10001;box-sizing:border-box;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:8px;box-shadow:0 12px 32px #0006;display:flex;flex-direction:column;overflow:hidden;padding:6px}.fil-combo-search[data-v-82542923]{box-sizing:border-box;width:100%;margin-bottom:6px;padding:6px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-combo-search[data-v-82542923]:focus{border-color:var(--fil-accent)}.fil-combo-list[data-v-82542923]{display:flex;flex-direction:column;gap:2px;max-height:240px;overflow-y:auto}.fil-combo-option[data-v-82542923]{display:flex;align-items:center;gap:6px;width:100%;box-sizing:border-box;padding:6px 8px;border-radius:5px;border:none;background:transparent;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;text-align:left;cursor:pointer;outline:none}.fil-combo-option.active[data-v-82542923]{background:#ffffff14}.fil-combo-option.selected[data-v-82542923]{color:var(--fil-accent);font-weight:600}.fil-combo-option-label[data-v-82542923]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-empty[data-v-82542923]{padding:10px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-w-info[data-v-851660c1]{font-size:11px;line-height:1.5;color:#ffffff73;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.fil-w-info[data-ok][data-v-851660c1]{color:var(--fil-ok, #62c987)}.fil-w-info[data-err][data-v-851660c1]{color:var(--fil-danger, #ef6666)}.fil-w-numfield[data-v-2f843ba1]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-numfield.no-label[data-v-2f843ba1]{display:contents}.fil-w-numfield-label[data-v-2f843ba1]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-numfield:not(.no-label) .fil-w-num-wrap[data-v-2f843ba1]{grid-column:2}.fil-w-num-wrap[data-v-2f843ba1]{position:relative;width:100%;min-width:0}.fil-w-num[data-v-2f843ba1]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 20px 7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:14px;text-align:left;outline:none;transition:border-color .08s}.fil-w-num[data-v-2f843ba1]:focus{border-color:var(--fil-accent)}.fil-w-num[data-v-2f843ba1]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-num[data-v-2f843ba1]:disabled{opacity:.5}.fil-w-num-step[data-v-2f843ba1]{position:absolute;top:1px;right:1px;bottom:1px;width:17px;display:flex;flex-direction:column;border-left:1px solid var(--fil-muted, #3a3d40);overflow:hidden;border-radius:0 5px 5px 0}.fil-w-num-btn[data-v-2f843ba1]{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;border:none;background:transparent;color:var(--fil-muted, rgba(255, 255, 255, .55));font-size:7px;line-height:1;cursor:pointer;padding:0;transition:color .08s,background .08s}.fil-w-num-btn[data-v-2f843ba1]:last-child{border-top:1px solid var(--fil-muted, #3a3d40)}.fil-w-num-btn[data-v-2f843ba1]:hover:not(:disabled){color:var(--fil-accent);background:#ffffff12}.fil-w-num-btn[data-v-2f843ba1]:disabled{opacity:.3;cursor:default}.fil-w-section[data-v-4b760ea4]{box-sizing:border-box;width:100%;padding:var(--fil-row-pad);border:none;border-radius:5px;background:#ffffff0a;color:var(--fil-muted, rgba(255, 255, 255, .7));font-family:inherit;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;cursor:pointer;text-align:left;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s;display:flex;align-items:center;gap:6px}.fil-w-section[data-v-4b760ea4]:hover:not(:disabled){background:#ffffff14;color:#fff}.fil-w-section[data-v-4b760ea4]:disabled{cursor:default}.fil-w-section[data-v-4b760ea4]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-section-arrow[data-v-4b760ea4]{display:inline-block;width:8px;font-size:9px;color:var(--fil-accent)}.fil-w-segmented[data-v-765cf0ce]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-segmented-label[data-v-765cf0ce]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-pill[data-v-765cf0ce]{grid-column:2;display:flex;gap:0;min-width:0;background:#ffffff0f;border-radius:7px;padding:3px}.fil-w-pill.disabled[data-v-765cf0ce]{opacity:.5}.fil-w-seg[data-v-765cf0ce]{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center;padding:6px;border:none;border-radius:5px;background:transparent;font-family:inherit;font-size:12px;color:var(--fil-muted, rgba(255, 255, 255, .55));cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s}.fil-w-seg[data-v-765cf0ce]:hover:not(.active){color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-w-seg.active[data-v-765cf0ce]{background:var(--fil-accent);color:var(--fil-accent-ink, #fff);font-weight:500}.fil-w-seg[data-v-765cf0ce]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-select[data-v-a878baba]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-select-label[data-v-a878baba]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-select-input[data-v-a878baba]{grid-column:2;width:100%;box-sizing:border-box;height:30px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer}.fil-w-select-input[data-v-a878baba]:focus{border-color:var(--fil-accent)}.fil-w-select-input[data-v-a878baba]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-select-input[data-v-a878baba]:disabled{opacity:.5;cursor:default}.fil-w-slider[data-v-c8e1921a]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-slider-label[data-v-c8e1921a]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-slider-row[data-v-c8e1921a]{grid-column:2;display:flex;align-items:center;gap:6px;min-width:0}.fil-w-slider-range[data-v-c8e1921a]{flex:1 1 auto;min-width:0;max-width:220px;accent-color:var(--fil-accent);cursor:pointer}.fil-w-slider-range[data-v-c8e1921a]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-slider-row[data-v-c8e1921a] .fil-w-num-wrap{width:70px;flex:none}.fil-style-picker[data-v-89c1e9fe]{display:flex;flex-direction:column;gap:10px}.fil-style-cats[data-v-89c1e9fe]{display:flex;flex-wrap:wrap;gap:6px}.fil-style-cat[data-v-89c1e9fe]{box-sizing:border-box;padding:5px 10px;border-radius:999px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .2));background:#ffffff0a;color:var(--fil-text, rgba(255, 255, 255, .8));font-size:11px;cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-cat[data-v-89c1e9fe]:hover{border-color:var(--fil-accent)}.fil-style-cat.active[data-v-89c1e9fe]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #fff);font-weight:500}.fil-style-cat[data-v-89c1e9fe]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-style-search-wrap[data-v-89c1e9fe]{position:relative;width:100%}.fil-style-search[data-v-89c1e9fe]{box-sizing:border-box;width:100%;padding:7px 28px 7px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-style-search[data-v-89c1e9fe]:focus{border-color:var(--fil-accent)}.fil-style-search-clear[data-v-89c1e9fe]{position:absolute;right:6px;top:50%;transform:translateY(-50%);width:18px;height:18px;border-radius:50%;border:none;background:#ffffff1f;color:#bbb;font-size:13px;line-height:1;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .12s ease}.fil-style-search-clear[data-v-89c1e9fe]:hover{background:#ff4b4b4d;color:var(--fil-danger, #ff6b6b)}.fil-style-grid[data-v-89c1e9fe]{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:8px;max-height:50vh;overflow-y:auto;padding-right:2px}.fil-style-tile[data-v-89c1e9fe]{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px 6px;border-radius:8px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .14));background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-tile[data-v-89c1e9fe]:hover{border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-style-tile.active[data-v-89c1e9fe]{border-color:var(--fil-accent);background:color-mix(in srgb,var(--fil-accent) 14%,transparent)}.fil-style-tile[data-v-89c1e9fe]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-style-tile-preview[data-v-89c1e9fe]{width:100%;aspect-ratio:1;border-radius:6px;background:#ffffff0d;display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:22px}.fil-style-tile-img[data-v-89c1e9fe]{width:100%;height:100%;object-fit:cover}.fil-style-tile-label[data-v-89c1e9fe]{font-size:10px;text-align:center;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.fil-style-empty[data-v-89c1e9fe]{grid-column:1 / -1;padding:20px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-style-selected-bar[data-v-89c1e9fe]{display:flex;flex-wrap:wrap;gap:6px;padding:6px;border-radius:6px;background:color-mix(in srgb,var(--fil-accent, #00f0ff) 6%,transparent);border:1px solid color-mix(in srgb,var(--fil-accent, #00f0ff) 20%,transparent)}.fil-style-chip[data-v-89c1e9fe]{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:999px;background:var(--fil-accent, #00f0ff);color:var(--fil-accent-ink, #12151a);font-size:11px;font-weight:600}.fil-chip-text[data-v-89c1e9fe]{max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-chip-remove[data-v-89c1e9fe]{display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:50%;border:none;background:#0003;color:var(--fil-accent-ink, #12151a);font-size:12px;line-height:1;cursor:pointer;padding:0;transition:background .08s,color .08s}.fil-chip-remove[data-v-89c1e9fe]:hover{background:var(--fil-danger, #ff4b4b);color:#fff}.fil-toast-stack[data-v-f6279127]{position:fixed;right:20px;bottom:20px;z-index:100001;display:flex;flex-direction:column;gap:8px;pointer-events:none;max-width:min(360px,90vw)}.fil-toast[data-v-f6279127]{pointer-events:auto;display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:8px;background:var(--fil-panel, #171b22);color:var(--fil-text, #e8edf3);border:1px solid var(--fil-panel-alt, #2a3041);border-left:3px solid var(--toast-color, var(--fil-muted));box-shadow:0 6px 22px #0000006b;font:12.5px/1.45 system-ui,sans-serif;animation:fil-toast-in-f6279127 .18s cubic-bezier(.2,.7,.3,1)}@keyframes fil-toast-in-f6279127{0%{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}.fil-toast-dot[data-v-f6279127]{flex:none;width:8px;height:8px;margin-top:4px;border-radius:50%;background:var(--toast-color, var(--fil-muted))}.fil-toast-text[data-v-f6279127]{flex:1;min-width:0;align-self:center}.fil-toast-action[data-v-f6279127]{flex:none;cursor:pointer;padding:4px 8px;border-radius:4px;background:#ffffff0f;color:inherit;border:none;font:inherit;transition:background .12s}.fil-toast-action[data-v-f6279127]:hover{background:#ffffff24}.fil-toast-close[data-v-f6279127]{flex:none;align-self:flex-start;cursor:pointer;width:18px;height:18px;padding:0;border:none;background:none;color:var(--fil-muted);opacity:.6;transition:opacity .12s;font-size:16px;line-height:18px}.fil-toast-close[data-v-f6279127]:hover{opacity:1}.fil-w-toggle[data-v-9d64f497]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-toggle-label[data-v-9d64f497]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-toggle.bare[data-v-9d64f497]{display:flex;width:auto;gap:4px}.fil-w-toggle.bare .fil-w-toggle-label[data-v-9d64f497]{font-size:10px;white-space:nowrap}.fil-w-switch[data-v-9d64f497]{grid-column:2;justify-self:start;width:36px;height:20px;padding:2px;box-sizing:border-box;border:none;border-radius:10px;background:#ffffff24;cursor:pointer;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .12s}.fil-w-switch.on[data-v-9d64f497]{background:var(--fil-accent)}.fil-w-switch[data-v-9d64f497]:disabled{opacity:.5;cursor:default}.fil-w-switch[data-v-9d64f497]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-switch-thumb[data-v-9d64f497]{display:block;width:16px;height:16px;border-radius:50%;background:#fff;transition:transform .12s}.fil-w-switch.on .fil-w-switch-thumb[data-v-9d64f497]{transform:translate(16px)}div.fil-seed-root[data-v-820f3e21]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:row;align-items:center;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;background:transparent;border:none;border-radius:0;box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none}.fil-seed-display[data-v-820f3e21]{flex:1;min-width:0;box-sizing:border-box;height:34px;background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);padding:6px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:19px;text-align:center;outline:none;transition:border-color .08s}.fil-seed-display[data-v-820f3e21]:focus{border-color:var(--fil-accent)}.fil-seed-display[readonly][data-v-820f3e21]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-seed-actions[data-v-820f3e21]{display:flex;gap:5px;flex-shrink:0}.fil-seed-actions[data-v-820f3e21] .fil-w-btn{padding:0;width:34px;height:34px;font-size:16px}.picker-container[data-v-2a40c6e8]{display:flex;flex-direction:column;gap:12px;color:var(--fil-text, #e8edf3)}.provider-tabs[data-v-2a40c6e8]{display:flex;gap:6px;overflow-x:auto;padding-bottom:6px;scrollbar-width:thin}.tab-btn[data-v-2a40c6e8]{display:flex;align-items:center;gap:6px;padding:7px 10px;border-radius:8px;border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-muted, #9ca8b5);font-size:12px;cursor:pointer;white-space:nowrap;flex-shrink:0;transition:all .15s ease}.tab-btn[data-v-2a40c6e8]:hover{background:#ffffff14;color:var(--fil-text, #e8edf3)}.tab-btn.active[data-v-2a40c6e8]{background:var(--fil-panel-alt, #222934);border-color:var(--fil-accent, #f08a45);color:var(--fil-accent, #f08a45);font-weight:600}.tab-badge[data-v-2a40c6e8]{font-size:10px;background:var(--fil-pill-bg);padding:1px 5px;border-radius:99px}.provider-status-bar[data-v-2a40c6e8]{display:flex;justify-content:space-between;align-items:center;background:#0003;padding:8px 12px;border-radius:6px;font-size:12px}.status-info[data-v-2a40c6e8]{display:flex;align-items:center;gap:8px}.provider-name[data-v-2a40c6e8]{font-weight:600}.status-badge[data-v-2a40c6e8]{font-size:11px;padding:2px 6px;border-radius:4px}.status-badge.online[data-v-2a40c6e8]{color:var(--fil-ok, #62c987)}.status-badge.loading[data-v-2a40c6e8]{color:var(--fil-accent, #f08a45)}.status-badge.error[data-v-2a40c6e8]{color:var(--fil-danger, #ef6666)}.age-label[data-v-2a40c6e8]{font-size:10px;color:var(--fil-muted, #9ca8b5)}.filter-controls[data-v-2a40c6e8]{display:flex;flex-direction:column;gap:8px}.search-input-wrap[data-v-2a40c6e8]{position:relative;display:flex;align-items:center}.search-icon[data-v-2a40c6e8]{position:absolute;left:10px;color:var(--fil-muted, #9ca8b5)}.search-input[data-v-2a40c6e8]{width:100%;box-sizing:border-box;height:32px;padding:6px 30px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:var(--fil-field-radius, 6px);color:var(--fil-text, #e8edf3);font-size:12px;outline:none}.search-input[data-v-2a40c6e8]:focus{border-color:var(--fil-accent, #f08a45)}.clear-search[data-v-2a40c6e8]{position:absolute;right:10px;background:none;border:none;color:var(--fil-muted, #9ca8b5);cursor:pointer}.filter-segments[data-v-2a40c6e8]{display:flex;gap:8px;min-width:0}.filter-segments[data-v-2a40c6e8]>*{flex:1;min-width:0}.models-list-wrapper[data-v-2a40c6e8]{height:320px;overflow-y:auto;background:#00000026;border-radius:8px;border:1px solid rgba(255,255,255,.06);padding:8px}.empty-state[data-v-2a40c6e8]{display:flex;align-items:center;justify-content:center;height:100%;color:var(--fil-muted, #9ca8b5);font-size:12px}.models-container.list[data-v-2a40c6e8]{display:flex;flex-direction:column;gap:6px}.models-container.grid[data-v-2a40c6e8]{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:8px}.models-container.grid .model-card[data-v-2a40c6e8]{flex-direction:column;align-items:flex-start;gap:8px;padding:10px 12px}.models-container.grid .model-main[data-v-2a40c6e8]{width:100%}.models-container.grid .model-tags[data-v-2a40c6e8]{width:100%;justify-content:flex-start}.model-card[data-v-2a40c6e8]{display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:#ffffff08;border:1px solid rgba(255,255,255,.06);border-radius:6px;cursor:pointer;transition:all .12s ease;width:100%;box-sizing:border-box;text-align:left;font:inherit;color:inherit;-moz-appearance:none;appearance:none;-webkit-appearance:none}.model-card[data-v-2a40c6e8]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.model-card[data-v-2a40c6e8]:hover{background:#ffffff12;border-color:#ffffff26}.model-card.selected[data-v-2a40c6e8]{background:#f08a4526;border-color:var(--fil-accent, #f08a45)}.model-main[data-v-2a40c6e8]{display:flex;align-items:center;gap:8px;min-width:0}.type-icon[data-v-2a40c6e8]{font-size:14px}.model-name[data-v-2a40c6e8]{font-size:12px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.model-tags[data-v-2a40c6e8]{display:flex;gap:4px;flex-shrink:0}.tag[data-v-2a40c6e8]{font-size:9px;padding:2px 6px;border-radius:4px;font-weight:600;text-transform:uppercase}.tag.vision[data-v-2a40c6e8]{background:#f08a4526;color:var(--fil-accent, #f08a45)}.tag.text[data-v-2a40c6e8],.tag.local[data-v-2a40c6e8],.tag.free[data-v-2a40c6e8],.tag.paid[data-v-2a40c6e8]{background:var(--fil-pill-bg);color:var(--fil-muted, #9ca8b5)}.picker-footer[data-v-2a40c6e8]{display:flex;justify-content:space-between;align-items:center;padding-top:8px}.selection-summary[data-v-2a40c6e8]{font-size:12px}.selection-summary .muted[data-v-2a40c6e8]{color:var(--fil-muted, #9ca8b5)}.footer-actions[data-v-2a40c6e8]{display:flex;gap:8px}.fil-provider-root[data-v-1a9a11d7]{width:100%;box-sizing:border-box;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;min-width:0}.picker-trigger-btn[data-v-1a9a11d7]{display:flex;flex-direction:column;gap:6px;width:100%;box-sizing:border-box;padding:8px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-pill-border);border-radius:var(--fil-field-radius, 8px);color:var(--fil-text, #f2f2f2);cursor:pointer;text-align:left;transition:border-color .15s ease,background .15s ease;outline:none}.picker-trigger-btn[data-v-1a9a11d7]:hover{border-color:var(--fil-accent, #f08a45);background:var(--fil-pill-bg)}.picker-trigger-btn[data-v-1a9a11d7]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px;border-color:var(--fil-accent)}.trigger-header[data-v-1a9a11d7]{display:flex;justify-content:space-between;align-items:center;width:100%}.provider-badge[data-v-1a9a11d7]{display:flex;align-items:center;gap:6px;font-weight:600;font-size:13px;color:var(--fil-accent, #f08a45)}.open-icon[data-v-1a9a11d7]{font-size:11px;background:var(--fil-pill-bg);padding:2px 6px;border-radius:4px;color:var(--fil-text, #e8edf3)}.trigger-model[data-v-1a9a11d7]{display:flex;align-items:center;gap:6px;font-size:12px;min-width:0}.model-label[data-v-1a9a11d7]{color:var(--fil-muted, #9ca8b5);flex-shrink:0}.model-name[data-v-1a9a11d7]{font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.fil-scanner-root[data-v-bd04f211]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;width:100%;box-sizing:border-box;min-width:0}.fil-section-block[data-v-bd04f211]{display:flex;flex-direction:column;gap:5px;min-width:0}.fil-w-row[data-v-bd04f211]{display:flex;flex-direction:column;gap:3px;min-width:0}.fil-scanner-textarea[data-v-bd04f211]{box-sizing:border-box;width:100%;padding:8px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;resize:vertical;outline:none}.fil-scanner-textarea[data-v-bd04f211]:focus{border-color:var(--fil-accent, #00f0ff)}.fil-scanner-input[data-v-bd04f211]{box-sizing:border-box;width:100%;padding:7px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-scanner-input[data-v-bd04f211]:focus{border-color:var(--fil-accent, #00f0ff)}.fil-single-style-block[data-v-bd04f211]{margin-top:2px}.fil-unified-style-modal[data-v-bd04f211]{display:flex;flex-direction:column;gap:12px;padding:4px 0}.fil-style-tab-bar[data-v-bd04f211]{display:flex;gap:6px;background:#0000004d;padding:4px;border-radius:8px;border:1px solid rgba(255,255,255,.08)}.fil-style-tab-btn[data-v-bd04f211]{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;height:34px;border-radius:6px;border:1px solid transparent;background:transparent;color:var(--fil-muted, #9ca8b5);font-size:12px;font-weight:600;cursor:pointer;transition:all .12s ease}.fil-style-tab-btn[data-v-bd04f211]:hover{color:var(--fil-text, #ffffff);background:#ffffff0f}.fil-style-tab-btn.active[data-v-bd04f211]{background:var(--fil-accent, #00f0ff);color:var(--fil-accent-ink, #12151a);border-color:var(--fil-accent, #00f0ff);font-weight:700;box-shadow:0 0 10px color-mix(in srgb,var(--fil-accent, #00f0ff) 30%,transparent)}.fil-tab-badge[data-v-bd04f211]{font-size:10px;color:#0f8}.fil-style-tab-btn.active .fil-tab-badge[data-v-bd04f211]{color:var(--fil-accent-ink, #12151a)}.fil-style-picker-body[data-v-bd04f211]{min-height:320px;max-height:480px;overflow-y:auto}.fil-style-modal-footer[data-v-bd04f211]{display:flex;justify-content:flex-end;border-top:1px solid rgba(255,255,255,.08);padding-top:8px}.fil-clear-styles-btn[data-v-bd04f211]{padding:6px 12px;border-radius:6px;border:1px solid rgba(255,75,75,.3);background:#ff4b4b1a;color:var(--fil-danger, #ff6b6b);font-size:12px;font-weight:600;cursor:pointer;transition:all .12s ease}.fil-clear-styles-btn[data-v-bd04f211]:hover{background:#ff4b4b40;border-color:var(--fil-danger, #ff4b4b);color:#fff}.fil-scanner-seed-row[data-v-bd04f211]{display:flex;gap:6px;min-width:0}.fil-scanner-seed-field[data-v-bd04f211]{flex:1.3;min-width:0;box-sizing:border-box;height:34px;background:#00000059;border:1px solid rgba(255,255,255,.08);border-radius:var(--fil-pill-radius);padding:0 12px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:13px;text-align:center;outline:none;transition:border-color .08s}.fil-scanner-seed-field[data-v-bd04f211]:focus{border-color:var(--fil-accent)}.fil-scanner-seed-field.is-random[data-v-bd04f211]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-scanner-seed-pill[data-v-bd04f211]{flex:1;min-width:0;box-sizing:border-box;height:34px;padding:0 8px;border-radius:var(--fil-pill-radius);border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-text, #e8edf3);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none}.fil-scanner-seed-pill[data-v-bd04f211]:hover{background:#ffffff1f}.fil-scanner-seed-pill.active[data-v-bd04f211]{background:#ffffff29;border-color:#fff3}.fil-scanner-seed-pill[data-v-bd04f211]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-scanner-seed-pill-accent[data-v-bd04f211]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #241206);font-weight:700}.fil-scanner-seed-pill-accent[data-v-bd04f211]:hover{filter:brightness(1.08);background:var(--fil-accent)}.fil-cleaner-root[data-v-a216fc35]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cleaner-row[data-v-a216fc35]{all:unset;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:6px 10px;border-radius:var(--fil-field-radius, 6px);border:1px solid var(--fil-glass-border, rgba(255, 255, 255, .08));background:var(--fil-glass-bg, rgba(255, 255, 255, .04));cursor:pointer;-webkit-user-select:none;user-select:none;transition:background .12s,border-color .12s}.fil-cleaner-row[data-v-a216fc35]:hover{background:#ffffff14}.fil-cleaner-row.active[data-v-a216fc35]{border-color:var(--fil-accent);background:color-mix(in srgb,var(--fil-accent) 14%,transparent)}.fil-cleaner-dot[data-v-a216fc35]{width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,.3);flex:none;transition:border-color .12s,background .12s;display:flex;align-items:center;justify-content:center}.fil-cleaner-dot[data-v-a216fc35]:after{content:\"✓\";font-size:10px;line-height:1;color:var(--fil-accent-ink, #fff);opacity:0;transition:opacity .12s}.fil-cleaner-row.active .fil-cleaner-dot[data-v-a216fc35]{background:var(--fil-accent);border-color:var(--fil-accent)}.fil-cleaner-row.active .fil-cleaner-dot[data-v-a216fc35]:after{opacity:1}.fil-cleaner-label[data-v-a216fc35]{flex:1;font-size:12px;font-weight:500}.fil-up-root[data-v-57658737]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-up-row[data-v-57658737]{display:grid;grid-template-columns:minmax(auto,max-content) 64px minmax(auto,max-content) 64px;align-items:center;gap:var(--fil-node-gap)}.fil-up-row-overlap[data-v-57658737]{grid-template-columns:minmax(auto,max-content) 64px minmax(auto,max-content) 64px auto}.fil-w-label[data-v-57658737]{font-size:11px;color:var(--fil-muted, rgba(255,255,255,.55))}.fil-hrf-root[data-v-30b15350]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-hrf-seed-row[data-v-30b15350]{display:flex;gap:6px;min-width:0}.fil-hrf-seed-field[data-v-30b15350]{flex:1.3;min-width:0;box-sizing:border-box;height:34px;background:#00000059;border:1px solid rgba(255,255,255,.08);border-radius:var(--fil-pill-radius);padding:0 12px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:13px;text-align:center;outline:none;transition:border-color .08s}.fil-hrf-seed-field[data-v-30b15350]:focus{border-color:var(--fil-accent)}.fil-hrf-seed-field.is-random[data-v-30b15350]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-hrf-seed-pill[data-v-30b15350]{flex:1;min-width:0;box-sizing:border-box;height:34px;padding:0 8px;border-radius:var(--fil-pill-radius);border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-text, #e8edf3);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none}.fil-hrf-seed-pill[data-v-30b15350]:hover{background:#ffffff1f}.fil-hrf-seed-pill.active[data-v-30b15350]{background:#ffffff29;border-color:#fff3}.fil-hrf-seed-pill[data-v-30b15350]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-hrf-seed-pill-accent[data-v-30b15350]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #241206);font-weight:700}.fil-hrf-seed-pill-accent[data-v-30b15350]:hover{filter:brightness(1.08);background:var(--fil-accent)}.fil-style-mixer-root[data-v-e9fc8064],.fil-color-wizard-root[data-v-790416d3]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cw-presets-block[data-v-790416d3]{display:flex;flex-direction:column;gap:6px;padding:8px 10px;background:#0000004d;border:1px solid rgba(255,255,255,.08);border-radius:8px}.fil-cw-presets-title[data-v-790416d3]{font-size:11px;font-weight:700;color:var(--fil-accent, #00f0ff);text-transform:uppercase;letter-spacing:.5px}.fil-cw-presets-grid[data-v-790416d3]{display:grid;grid-template-columns:1fr 1fr;gap:6px}.fil-cw-preset-btn[data-v-790416d3]{height:28px;border-radius:6px;border:1px solid rgba(255,255,255,.1);background:#ffffff0a;color:var(--fil-text, #ddd);font-size:11px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .12s ease}.fil-cw-preset-btn[data-v-790416d3]:hover{background:#ffffff1f;border-color:var(--fil-accent, #00f0ff)}.fil-cw-preset-btn.warm[data-v-790416d3]:hover{border-color:#fa0;color:#fa0}.fil-cw-preset-btn.cool[data-v-790416d3]:hover{border-color:#00f0ff;color:#00f0ff}.fil-cw-preset-btn.skin[data-v-790416d3]:hover{border-color:#f7a;color:#f7a}.fil-cw-preset-btn.contrast[data-v-790416d3]:hover{border-color:#fa0;color:#fa0}.fil-cw-slider-group[data-v-790416d3]{display:flex;flex-direction:column;gap:6px}.fil-cw-toggle-row[data-v-790416d3]{display:flex;align-items:center;justify-content:space-between;padding:6px 10px;background:#ffffff08;border-radius:6px;border:1px solid rgba(255,255,255,.06)}.fil-cw-toggle-label[data-v-790416d3]{font-size:12px;font-weight:600}.fil-cw-toggle-btn[data-v-790416d3]{height:24px;padding:0 12px;border-radius:12px;border:1px solid rgba(255,255,255,.15);background:#ffffff0f;color:var(--fil-muted, #aaa);font-size:10px;font-weight:700;cursor:pointer;transition:all .12s ease}.fil-cw-toggle-btn.active[data-v-790416d3]{background:var(--fil-accent, #00f0ff);border-color:var(--fil-accent, #00f0ff);color:var(--fil-accent-ink, #12151a);box-shadow:0 0 8px color-mix(in srgb,var(--fil-accent, #00f0ff) 40%,transparent)}\n";document.head.appendChild(s);}catch(e){}})();
import { app as ms } from "/scripts/app.js";
/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Hi(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const he = {}, dn = [], mt = () => {
}, hs = () => !1, Vl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), $l = (e) => e.startsWith("onUpdate:"), Fe = Object.assign, Ui = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Xa = Object.prototype.hasOwnProperty, _e = (e, t) => Xa.call(e, t), ee = Array.isArray, fn = (e) => Yn(e) === "[object Map]", Bl = (e) => Yn(e) === "[object Set]", mo = (e) => Yn(e) === "[object Date]", re = (e) => typeof e == "function", Ce = (e) => typeof e == "string", ze = (e) => typeof e == "symbol", be = (e) => e !== null && typeof e == "object", gs = (e) => (be(e) || re(e)) && re(e.then) && re(e.catch), _s = Object.prototype.toString, Yn = (e) => _s.call(e), Ya = (e) => Yn(e).slice(8, -1), bs = (e) => Yn(e) === "[object Object]", Hl = (e) => Ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Pn = /* @__PURE__ */ Hi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ul = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ja = /-\w/g, Ve = Ul(
  (e) => e.replace(Ja, (t) => t.slice(1).toUpperCase())
), Qa = /\B([A-Z])/g, Lt = Ul(
  (e) => e.replace(Qa, "-$1").toLowerCase()
), Gl = Ul((e) => e.charAt(0).toUpperCase() + e.slice(1)), ii = Ul(
  (e) => e ? `on${Gl(e)}` : ""
), Pe = (e, t) => !Object.is(e, t), hl = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, vs = (e, t, n, l = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: l,
    value: n
  });
}, Wl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Za = (e) => {
  const t = Ce(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ho;
const jl = () => ho || (ho = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function tt(e) {
  if (ee(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const l = e[n], i = Ce(l) ? lr(l) : tt(l);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Ce(e) || be(e))
    return e;
}
const er = /;(?![^(]*\))/g, tr = /:([^]+)/, nr = /\/\*[^]*?\*\//g;
function lr(e) {
  const t = {};
  return e.replace(nr, "").split(er).forEach((n) => {
    if (n) {
      const l = n.split(tr);
      l.length > 1 && (t[l[0].trim()] = l[1].trim());
    }
  }), t;
}
function me(e) {
  let t = "";
  if (Ce(e))
    t = e;
  else if (ee(e))
    for (let n = 0; n < e.length; n++) {
      const l = me(e[n]);
      l && (t += l + " ");
    }
  else if (be(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ir = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", or = /* @__PURE__ */ Hi(ir);
function ys(e) {
  return !!e || e === "";
}
function sr(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let l = 0; n && l < e.length; l++)
    n = Jn(e[l], t[l]);
  return n;
}
function Jn(e, t) {
  if (e === t) return !0;
  let n = mo(e), l = mo(t);
  if (n || l)
    return n && l ? e.getTime() === t.getTime() : !1;
  if (n = ze(e), l = ze(t), n || l)
    return e === t;
  if (n = ee(e), l = ee(t), n || l)
    return n && l ? sr(e, t) : !1;
  if (n = be(e), l = be(t), n || l) {
    if (!n || !l)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), r = t.hasOwnProperty(s);
      if (a && !r || !a && r || !Jn(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ar(e, t) {
  return e.findIndex((n) => Jn(n, t));
}
const ws = (e) => !!(e && e.__v_isRef === !0), z = (e) => Ce(e) ? e : e == null ? "" : ee(e) || be(e) && (e.toString === _s || !re(e.toString)) ? ws(e) ? z(e.value) : JSON.stringify(e, Ss, 2) : String(e), Ss = (e, t) => ws(t) ? Ss(e, t.value) : fn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [l, i], o) => (n[oi(l, o) + " =>"] = i, n),
    {}
  )
} : Bl(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => oi(n))
} : ze(t) ? oi(t) : be(t) && !ee(t) && !bs(t) ? String(t) : t, oi = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ze(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ke;
class xs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ke && (ke.active ? (this.parent = ke, this.index = (ke.scopes || (ke.scopes = [])).push(
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
      const n = ke;
      try {
        return ke = this, t();
      } finally {
        ke = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ke, ke = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ke === this)
        ke = this.prevScope;
      else {
        let t = ke;
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
      let n, l;
      for (n = 0, l = this.effects.length; n < l; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, l = this.cleanups.length; n < l; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, l = this.scopes.length; n < l; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Cs(e) {
  return new xs(e);
}
function As() {
  return ke;
}
function rr(e, t = !1) {
  ke && ke.cleanups.push(e);
}
let Se;
const si = /* @__PURE__ */ new WeakSet();
class Ms {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ke && (ke.active ? ke.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, si.has(this) && (si.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ks(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, go(this), Ls(this);
    const t = Se, n = lt;
    Se = this, lt = !0;
    try {
      return this.fn();
    } finally {
      Is(this), Se = t, lt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ji(t);
      this.deps = this.depsTail = void 0, go(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? si.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    vi(this) && this.run();
  }
  get dirty() {
    return vi(this);
  }
}
let Fs = 0, Rn, Nn;
function ks(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Nn, Nn = e;
    return;
  }
  e.next = Rn, Rn = e;
}
function Gi() {
  Fs++;
}
function Wi() {
  if (--Fs > 0)
    return;
  if (Nn) {
    let t = Nn;
    for (Nn = void 0; t; ) {
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
        } catch (l) {
          e || (e = l);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Ls(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Is(e) {
  let t, n = e.depsTail, l = n;
  for (; l; ) {
    const i = l.prevDep;
    l.version === -1 ? (l === n && (n = i), ji(l), cr(l)) : t = l, l.dep.activeLink = l.prevActiveLink, l.prevActiveLink = void 0, l = i;
  }
  e.deps = t, e.depsTail = n;
}
function vi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ds(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ds(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Gn) || (e.globalVersion = Gn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !vi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Se, l = lt;
  Se = e, lt = !0;
  try {
    Ls(e);
    const i = e.fn(e._value);
    (t.version === 0 || Pe(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Se = n, lt = l, Is(e), e.flags &= -3;
  }
}
function ji(e, t = !1) {
  const { dep: n, prevSub: l, nextSub: i } = e;
  if (l && (l.nextSub = i, e.prevSub = void 0), i && (i.prevSub = l, e.nextSub = void 0), n.subs === e && (n.subs = l, !l && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      ji(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function cr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let lt = !0;
const Ps = [];
function ht() {
  Ps.push(lt), lt = !1;
}
function gt() {
  const e = Ps.pop();
  lt = e === void 0 ? !0 : e;
}
function go(e) {
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
let Gn = 0;
class ur {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Kl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Se || !lt || Se === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Se)
      n = this.activeLink = new ur(Se, this), Se.deps ? (n.prevDep = Se.depsTail, Se.depsTail.nextDep = n, Se.depsTail = n) : Se.deps = Se.depsTail = n, Rs(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const l = n.nextDep;
      l.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = l), n.prevDep = Se.depsTail, n.nextDep = void 0, Se.depsTail.nextDep = n, Se.depsTail = n, Se.deps === n && (Se.deps = l);
    }
    return n;
  }
  trigger(t) {
    this.version++, Gn++, this.notify(t);
  }
  notify(t) {
    Gi();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Wi();
    }
  }
}
function Rs(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let l = t.deps; l; l = l.nextDep)
        Rs(l);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const wl = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ Symbol(
  ""
), yi = /* @__PURE__ */ Symbol(
  ""
), Wn = /* @__PURE__ */ Symbol(
  ""
);
function Ee(e, t, n) {
  if (lt && Se) {
    let l = wl.get(e);
    l || wl.set(e, l = /* @__PURE__ */ new Map());
    let i = l.get(n);
    i || (l.set(n, i = new Kl()), i.map = l, i.key = n), i.track();
  }
}
function xt(e, t, n, l, i, o) {
  const s = wl.get(e);
  if (!s) {
    Gn++;
    return;
  }
  const a = (r) => {
    r && r.trigger();
  };
  if (Gi(), t === "clear")
    s.forEach(a);
  else {
    const r = ee(e), u = r && Hl(n);
    if (r && n === "length") {
      const c = Number(l);
      s.forEach((d, p) => {
        (p === "length" || p === Wn || !ze(p) && p >= c) && a(d);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && a(s.get(n)), u && a(s.get(Wn)), t) {
        case "add":
          r ? u && a(s.get("length")) : (a(s.get(Zt)), fn(e) && a(s.get(yi)));
          break;
        case "delete":
          r || (a(s.get(Zt)), fn(e) && a(s.get(yi)));
          break;
        case "set":
          fn(e) && a(s.get(Zt));
          break;
      }
  }
  Wi();
}
function dr(e, t) {
  const n = wl.get(e);
  return n && n.get(t);
}
function ln(e) {
  const t = /* @__PURE__ */ pe(e);
  return t === e ? t : (Ee(t, "iterate", Wn), /* @__PURE__ */ Ke(e) ? t : t.map(ot));
}
function zl(e) {
  return Ee(e = /* @__PURE__ */ pe(e), "iterate", Wn), e;
}
function ft(e, t) {
  return /* @__PURE__ */ Ft(e) ? bn(/* @__PURE__ */ At(e) ? ot(t) : t) : ot(t);
}
const fr = {
  __proto__: null,
  [Symbol.iterator]() {
    return ai(this, Symbol.iterator, (e) => ft(this, e));
  },
  concat(...e) {
    return ln(this).concat(
      ...e.map((t) => ee(t) ? ln(t) : t)
    );
  },
  entries() {
    return ai(this, "entries", (e) => (e[1] = ft(this, e[1]), e));
  },
  every(e, t) {
    return _t(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return _t(
      this,
      "filter",
      e,
      t,
      (n) => n.map((l) => ft(this, l)),
      arguments
    );
  },
  find(e, t) {
    return _t(
      this,
      "find",
      e,
      t,
      (n) => ft(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return _t(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return _t(
      this,
      "findLast",
      e,
      t,
      (n) => ft(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return _t(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return _t(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ri(this, "includes", e);
  },
  indexOf(...e) {
    return ri(this, "indexOf", e);
  },
  join(e) {
    return ln(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ri(this, "lastIndexOf", e);
  },
  map(e, t) {
    return _t(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return xn(this, "pop");
  },
  push(...e) {
    return xn(this, "push", e);
  },
  reduce(e, ...t) {
    return _o(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return _o(this, "reduceRight", e, t);
  },
  shift() {
    return xn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return _t(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return xn(this, "splice", e);
  },
  toReversed() {
    return ln(this).toReversed();
  },
  toSorted(e) {
    return ln(this).toSorted(e);
  },
  toSpliced(...e) {
    return ln(this).toSpliced(...e);
  },
  unshift(...e) {
    return xn(this, "unshift", e);
  },
  values() {
    return ai(this, "values", (e) => ft(this, e));
  }
};
function ai(e, t, n) {
  const l = zl(e), i = l[t]();
  return l !== e && !/* @__PURE__ */ Ke(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const pr = Array.prototype;
function _t(e, t, n, l, i, o) {
  const s = zl(e), a = s !== e && !/* @__PURE__ */ Ke(e), r = s[t];
  if (r !== pr[t]) {
    const d = r.apply(e, o);
    return a ? ot(d) : d;
  }
  let u = n;
  s !== e && (a ? u = function(d, p) {
    return n.call(this, ft(e, d), p, e);
  } : n.length > 2 && (u = function(d, p) {
    return n.call(this, d, p, e);
  }));
  const c = r.call(s, u, l);
  return a && i ? i(c) : c;
}
function _o(e, t, n, l) {
  const i = zl(e), o = i !== e && !/* @__PURE__ */ Ke(e);
  let s = n, a = !1;
  i !== e && (o ? (a = l.length === 0, s = function(u, c, d) {
    return a && (a = !1, u = ft(e, u)), n.call(this, u, ft(e, c), d, e);
  }) : n.length > 3 && (s = function(u, c, d) {
    return n.call(this, u, c, d, e);
  }));
  const r = i[t](s, ...l);
  return a ? ft(e, r) : r;
}
function ri(e, t, n) {
  const l = /* @__PURE__ */ pe(e);
  Ee(l, "iterate", Wn);
  const i = l[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ ql(n[0]) ? (n[0] = /* @__PURE__ */ pe(n[0]), l[t](...n)) : i;
}
function xn(e, t, n = []) {
  ht(), Gi();
  const l = (/* @__PURE__ */ pe(e))[t].apply(e, n);
  return Wi(), gt(), l;
}
const mr = /* @__PURE__ */ Hi("__proto__,__v_isRef,__isVue"), Ns = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ze)
);
function hr(e) {
  ze(e) || (e = String(e));
  const t = /* @__PURE__ */ pe(this);
  return Ee(t, "has", e), t.hasOwnProperty(e);
}
class Ts {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, l) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return l === (i ? o ? Ar : $s : o ? Vs : Os).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(l) ? t : void 0;
    const s = ee(t);
    if (!i) {
      let r;
      if (s && (r = fr[n]))
        return r;
      if (n === "hasOwnProperty")
        return hr;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ de(t) ? t : l
    );
    if ((ze(n) ? Ns.has(n) : mr(n)) || (i || Ee(t, "get", n), o))
      return a;
    if (/* @__PURE__ */ de(a)) {
      const r = s && Hl(n) ? a : a.value;
      return i && be(r) ? /* @__PURE__ */ Sl(r) : r;
    }
    return be(a) ? i ? /* @__PURE__ */ Sl(a) : /* @__PURE__ */ Ht(a) : a;
  }
}
class Es extends Ts {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, l, i) {
    let o = t[n];
    const s = ee(t) && Hl(n);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ Ft(o);
      if (!/* @__PURE__ */ Ke(l) && !/* @__PURE__ */ Ft(l) && (o = /* @__PURE__ */ pe(o), l = /* @__PURE__ */ pe(l)), !s && /* @__PURE__ */ de(o) && !/* @__PURE__ */ de(l))
        return u || (o.value = l), !0;
    }
    const a = s ? Number(n) < t.length : _e(t, n), r = Reflect.set(
      t,
      n,
      l,
      /* @__PURE__ */ de(t) ? t : i
    );
    return t === /* @__PURE__ */ pe(i) && r && (a ? Pe(l, o) && xt(t, "set", n, l) : xt(t, "add", n, l)), r;
  }
  deleteProperty(t, n) {
    const l = _e(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && l && xt(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const l = Reflect.has(t, n);
    return (!ze(n) || !Ns.has(n)) && Ee(t, "has", n), l;
  }
  ownKeys(t) {
    return Ee(
      t,
      "iterate",
      ee(t) ? "length" : Zt
    ), Reflect.ownKeys(t);
  }
}
class gr extends Ts {
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
const _r = /* @__PURE__ */ new Es(), br = /* @__PURE__ */ new gr(), vr = /* @__PURE__ */ new Es(!0);
const wi = (e) => e, ol = (e) => Reflect.getPrototypeOf(e);
function yr(e, t, n) {
  return function(...l) {
    const i = this.__v_raw, o = /* @__PURE__ */ pe(i), s = fn(o), a = e === "entries" || e === Symbol.iterator && s, r = e === "keys" && s, u = i[e](...l), c = n ? wi : t ? bn : ot;
    return !t && Ee(
      o,
      "iterate",
      r ? yi : Zt
    ), Fe(
      // inheriting all iterator properties
      Object.create(u),
      {
        // iterator protocol
        next() {
          const { value: d, done: p } = u.next();
          return p ? { value: d, done: p } : {
            value: a ? [c(d[0]), c(d[1])] : c(d),
            done: p
          };
        }
      }
    );
  };
}
function sl(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function wr(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ pe(o), a = /* @__PURE__ */ pe(i);
      e || (Pe(i, a) && Ee(s, "get", i), Ee(s, "get", a));
      const { has: r } = ol(s), u = t ? wi : e ? bn : ot;
      if (r.call(s, i))
        return u(o.get(i));
      if (r.call(s, a))
        return u(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ee(/* @__PURE__ */ pe(i), "iterate", Zt), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ pe(o), a = /* @__PURE__ */ pe(i);
      return e || (Pe(i, a) && Ee(s, "has", i), Ee(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const s = this, a = s.__v_raw, r = /* @__PURE__ */ pe(a), u = t ? wi : e ? bn : ot;
      return !e && Ee(r, "iterate", Zt), a.forEach((c, d) => i.call(o, u(c), u(d), s));
    }
  };
  return Fe(
    n,
    e ? {
      add: sl("add"),
      set: sl("set"),
      delete: sl("delete"),
      clear: sl("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ pe(this), s = ol(o), a = /* @__PURE__ */ pe(i), r = !t && !/* @__PURE__ */ Ke(i) && !/* @__PURE__ */ Ft(i) ? a : i;
        return s.has.call(o, r) || Pe(i, r) && s.has.call(o, i) || Pe(a, r) && s.has.call(o, a) || (o.add(r), xt(o, "add", r, r)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Ke(o) && !/* @__PURE__ */ Ft(o) && (o = /* @__PURE__ */ pe(o));
        const s = /* @__PURE__ */ pe(this), { has: a, get: r } = ol(s);
        let u = a.call(s, i);
        u || (i = /* @__PURE__ */ pe(i), u = a.call(s, i));
        const c = r.call(s, i);
        return s.set(i, o), u ? Pe(o, c) && xt(s, "set", i, o) : xt(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ pe(this), { has: s, get: a } = ol(o);
        let r = s.call(o, i);
        r || (i = /* @__PURE__ */ pe(i), r = s.call(o, i)), a && a.call(o, i);
        const u = o.delete(i);
        return r && xt(o, "delete", i, void 0), u;
      },
      clear() {
        const i = /* @__PURE__ */ pe(this), o = i.size !== 0, s = i.clear();
        return o && xt(
          i,
          "clear",
          void 0,
          void 0
        ), s;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = yr(i, e, t);
  }), n;
}
function Ki(e, t) {
  const n = wr(e, t);
  return (l, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? l : Reflect.get(
    _e(n, i) && i in l ? n : l,
    i,
    o
  );
}
const Sr = {
  get: /* @__PURE__ */ Ki(!1, !1)
}, xr = {
  get: /* @__PURE__ */ Ki(!1, !0)
}, Cr = {
  get: /* @__PURE__ */ Ki(!0, !1)
};
const Os = /* @__PURE__ */ new WeakMap(), Vs = /* @__PURE__ */ new WeakMap(), $s = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap();
function Mr(e) {
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
function Ht(e) {
  return /* @__PURE__ */ Ft(e) ? e : zi(
    e,
    !1,
    _r,
    Sr,
    Os
  );
}
// @__NO_SIDE_EFFECTS__
function Fr(e) {
  return zi(
    e,
    !1,
    vr,
    xr,
    Vs
  );
}
// @__NO_SIDE_EFFECTS__
function Sl(e) {
  return zi(
    e,
    !0,
    br,
    Cr,
    $s
  );
}
function zi(e, t, n, l, i) {
  if (!be(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const s = Mr(Ya(e));
  if (s === 0)
    return e;
  const a = new Proxy(
    e,
    s === 2 ? l : n
  );
  return i.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function At(e) {
  return /* @__PURE__ */ Ft(e) ? /* @__PURE__ */ At(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ft(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ql(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ pe(t) : e;
}
function qi(e) {
  return !_e(e, "__v_skip") && Object.isExtensible(e) && vs(e, "__v_skip", !0), e;
}
const ot = (e) => be(e) ? /* @__PURE__ */ Ht(e) : e, bn = (e) => be(e) ? /* @__PURE__ */ Sl(e) : e;
// @__NO_SIDE_EFFECTS__
function de(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ce(e) {
  return kr(e, !1);
}
function kr(e, t) {
  return /* @__PURE__ */ de(e) ? e : new Lr(e, t);
}
class Lr {
  constructor(t, n) {
    this.dep = new Kl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ pe(t), this._value = n ? t : ot(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, l = this.__v_isShallow || /* @__PURE__ */ Ke(t) || /* @__PURE__ */ Ft(t);
    t = l ? t : /* @__PURE__ */ pe(t), Pe(t, n) && (this._rawValue = t, this._value = l ? t : ot(t), this.dep.trigger());
  }
}
function f(e) {
  return /* @__PURE__ */ de(e) ? e.value : e;
}
const Ir = {
  get: (e, t, n) => t === "__v_raw" ? e : f(Reflect.get(e, t, n)),
  set: (e, t, n, l) => {
    const i = e[t];
    return /* @__PURE__ */ de(i) && !/* @__PURE__ */ de(n) ? (i.value = n, !0) : Reflect.set(e, t, n, l);
  }
};
function Bs(e) {
  return /* @__PURE__ */ At(e) ? e : new Proxy(e, Ir);
}
class Dr {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Kl(), { get: l, set: i } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = l, this._set = i;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Pr(e) {
  return new Dr(e);
}
// @__NO_SIDE_EFFECTS__
function Rr(e) {
  const t = ee(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Tr(e, n);
  return t;
}
class Nr {
  constructor(t, n, l) {
    this._object = t, this._defaultValue = l, this.__v_isRef = !0, this._value = void 0, this._key = ze(n) ? n : String(n), this._raw = /* @__PURE__ */ pe(t);
    let i = !0, o = t;
    if (!ee(t) || ze(this._key) || !Hl(this._key))
      do
        i = !/* @__PURE__ */ ql(o) || /* @__PURE__ */ Ke(o);
      while (i && (o = o.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = f(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ de(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ de(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return dr(this._raw, this._key);
  }
}
function Tr(e, t, n) {
  return new Nr(e, t, n);
}
class Er {
  constructor(t, n, l) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Kl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Gn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = l;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Se !== this)
      return ks(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ds(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Or(e, t, n = !1) {
  let l, i;
  return re(e) ? l = e : (l = e.get, i = e.set), new Er(l, i, n);
}
const al = {}, xl = /* @__PURE__ */ new WeakMap();
let zt;
function Vr(e, t = !1, n = zt) {
  if (n) {
    let l = xl.get(n);
    l || xl.set(n, l = []), l.push(e);
  }
}
function $r(e, t, n = he) {
  const { immediate: l, deep: i, once: o, scheduler: s, augmentJob: a, call: r } = n, u = (v) => i ? v : /* @__PURE__ */ Ke(v) || i === !1 || i === 0 ? Ct(v, 1) : Ct(v);
  let c, d, p, h, m = !1, _ = !1;
  if (/* @__PURE__ */ de(e) ? (d = () => e.value, m = /* @__PURE__ */ Ke(e)) : /* @__PURE__ */ At(e) ? (d = () => u(e), m = !0) : ee(e) ? (_ = !0, m = e.some((v) => /* @__PURE__ */ At(v) || /* @__PURE__ */ Ke(v)), d = () => e.map((v) => {
    if (/* @__PURE__ */ de(v))
      return v.value;
    if (/* @__PURE__ */ At(v))
      return u(v);
    if (re(v))
      return r ? r(v, 2) : v();
  })) : re(e) ? t ? d = r ? () => r(e, 2) : e : d = () => {
    if (p) {
      ht();
      try {
        p();
      } finally {
        gt();
      }
    }
    const v = zt;
    zt = c;
    try {
      return r ? r(e, 3, [h]) : e(h);
    } finally {
      zt = v;
    }
  } : d = mt, t && i) {
    const v = d, w = i === !0 ? 1 / 0 : i;
    d = () => Ct(v(), w);
  }
  const C = As(), y = () => {
    c.stop(), C && C.active && Ui(C.effects, c);
  };
  if (o && t) {
    const v = t;
    t = (...w) => {
      const F = v(...w);
      return y(), F;
    };
  }
  let b = _ ? new Array(e.length).fill(al) : al;
  const x = (v) => {
    if (!(!(c.flags & 1) || !c.dirty && !v))
      if (t) {
        const w = c.run();
        if (v || i || m || (_ ? w.some((F, G) => Pe(F, b[G])) : Pe(w, b))) {
          p && p();
          const F = zt;
          zt = c;
          try {
            const G = [
              w,
              // pass undefined as the old value when it's changed for the first time
              b === al ? void 0 : _ && b[0] === al ? [] : b,
              h
            ];
            b = w, r ? r(t, 3, G) : (
              // @ts-expect-error
              t(...G)
            );
          } finally {
            zt = F;
          }
        }
      } else
        c.run();
  };
  return a && a(x), c = new Ms(d), c.scheduler = s ? () => s(x, !1) : x, h = (v) => Vr(v, !1, c), p = c.onStop = () => {
    const v = xl.get(c);
    if (v) {
      if (r)
        r(v, 4);
      else
        for (const w of v) w();
      xl.delete(c);
    }
  }, t ? l ? x(!0) : b = c.run() : s ? s(x.bind(null, !0), !0) : c.run(), y.pause = c.pause.bind(c), y.resume = c.resume.bind(c), y.stop = y, y;
}
function Ct(e, t = 1 / 0, n) {
  if (t <= 0 || !be(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ de(e))
    Ct(e.value, t, n);
  else if (ee(e))
    for (let l = 0; l < e.length; l++)
      Ct(e[l], t, n);
  else if (Bl(e) || fn(e))
    e.forEach((l) => {
      Ct(l, t, n);
    });
  else if (bs(e)) {
    for (const l in e)
      Ct(e[l], t, n);
    for (const l of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, l) && Ct(e[l], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Qn(e, t, n, l) {
  try {
    return l ? e(...l) : e();
  } catch (i) {
    Zn(i, t, n);
  }
}
function et(e, t, n, l) {
  if (re(e)) {
    const i = Qn(e, t, n, l);
    return i && gs(i) && i.catch((o) => {
      Zn(o, t, n);
    }), i;
  }
  if (ee(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(et(e[o], t, n, l));
    return i;
  }
}
function Zn(e, t, n, l = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || he;
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
    if (o) {
      ht(), Qn(o, null, 10, [
        e,
        r,
        u
      ]), gt();
      return;
    }
  }
  Br(e, n, i, l, s);
}
function Br(e, t, n, l = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Ue = [];
let dt = -1;
const pn = [];
let Vt = null, rn = 0;
const Hs = /* @__PURE__ */ Promise.resolve();
let Cl = null;
function el(e) {
  const t = Cl || Hs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Hr(e) {
  let t = dt + 1, n = Ue.length;
  for (; t < n; ) {
    const l = t + n >>> 1, i = Ue[l], o = jn(i);
    o < e || o === e && i.flags & 2 ? t = l + 1 : n = l;
  }
  return t;
}
function Xi(e) {
  if (!(e.flags & 1)) {
    const t = jn(e), n = Ue[Ue.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= jn(n) ? Ue.push(e) : Ue.splice(Hr(t), 0, e), e.flags |= 1, Us();
  }
}
function Us() {
  Cl || (Cl = Hs.then(Ws));
}
function Ur(e) {
  ee(e) ? pn.push(...e) : Vt && e.id === -1 ? Vt.splice(rn + 1, 0, e) : e.flags & 1 || (pn.push(e), e.flags |= 1), Us();
}
function bo(e, t, n = dt + 1) {
  for (; n < Ue.length; n++) {
    const l = Ue[n];
    if (l && l.flags & 2) {
      if (e && l.id !== e.uid)
        continue;
      Ue.splice(n, 1), n--, l.flags & 4 && (l.flags &= -2), l(), l.flags & 4 || (l.flags &= -2);
    }
  }
}
function Gs(e) {
  if (pn.length) {
    const t = [...new Set(pn)].sort(
      (n, l) => jn(n) - jn(l)
    );
    if (pn.length = 0, Vt) {
      Vt.push(...t);
      return;
    }
    for (Vt = t, rn = 0; rn < Vt.length; rn++) {
      const n = Vt[rn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Vt = null, rn = 0;
  }
}
const jn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ws(e) {
  try {
    for (dt = 0; dt < Ue.length; dt++) {
      const t = Ue[dt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Qn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; dt < Ue.length; dt++) {
      const t = Ue[dt];
      t && (t.flags &= -2);
    }
    dt = -1, Ue.length = 0, Gs(), Cl = null, (Ue.length || pn.length) && Ws();
  }
}
let Ne = null, js = null;
function Al(e) {
  const t = Ne;
  return Ne = e, js = e && e.type.__scopeId || null, t;
}
function $t(e, t = Ne, n) {
  if (!t || e._n)
    return e;
  const l = (...i) => {
    l._d && Ll(-1);
    const o = Al(t);
    let s;
    try {
      s = e(...i);
    } finally {
      Al(o), l._d && Ll(1);
    }
    return s;
  };
  return l._n = !0, l._c = !0, l._d = !0, l;
}
function it(e, t) {
  if (Ne === null)
    return e;
  const n = ei(Ne), l = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, a, r = he] = t[i];
    o && (re(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Ct(s), l.push({
      dir: o,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: a,
      modifiers: r
    }));
  }
  return e;
}
function Gt(e, t, n, l) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    o && (a.oldValue = o[s].value);
    let r = a.dir[l];
    r && (ht(), et(r, n, 8, [
      e.el,
      a,
      e,
      t
    ]), gt());
  }
}
function Gr(e, t) {
  if (Re) {
    let n = Re.provides;
    const l = Re.parent && Re.parent.provides;
    l === n && (n = Re.provides = Object.create(l)), n[e] = t;
  }
}
function Tn(e, t, n = !1) {
  const l = Zl();
  if (l || en) {
    let i = en ? en._context.provides : l ? l.parent == null || l.ce ? l.vnode.appContext && l.vnode.appContext.provides : l.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && re(t) ? t.call(l && l.proxy) : t;
  }
}
function Wr() {
  return !!(Zl() || en);
}
const jr = /* @__PURE__ */ Symbol.for("v-scx"), Kr = () => Tn(jr);
function zr(e, t) {
  return Yi(
    e,
    null,
    { flush: "sync" }
  );
}
function $e(e, t, n) {
  return Yi(e, t, n);
}
function Yi(e, t, n = he) {
  const { immediate: l, deep: i, flush: o, once: s } = n, a = Fe({}, n), r = t && l || !t && o !== "post";
  let u;
  if (vn) {
    if (o === "sync") {
      const h = Kr();
      u = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!r) {
      const h = () => {
      };
      return h.stop = mt, h.resume = mt, h.pause = mt, h;
    }
  }
  const c = Re;
  a.call = (h, m, _) => et(h, c, m, _);
  let d = !1;
  o === "post" ? a.scheduler = (h) => {
    He(h, c && c.suspense);
  } : o !== "sync" && (d = !0, a.scheduler = (h, m) => {
    m ? h() : Xi(h);
  }), a.augmentJob = (h) => {
    t && (h.flags |= 4), d && (h.flags |= 2, c && (h.id = c.uid, h.i = c));
  };
  const p = $r(e, t, a);
  return vn && (u ? u.push(p) : r && p()), p;
}
function qr(e, t, n) {
  const l = this.proxy, i = Ce(e) ? e.includes(".") ? Ks(l, e) : () => l[e] : e.bind(l, l);
  let o;
  re(t) ? o = t : (o = t.handler, n = t);
  const s = ll(this), a = Yi(i, o.bind(l), n);
  return s(), a;
}
function Ks(e, t) {
  const n = t.split(".");
  return () => {
    let l = e;
    for (let i = 0; i < n.length && l; i++)
      l = l[n[i]];
    return l;
  };
}
const Et = /* @__PURE__ */ new WeakMap(), zs = /* @__PURE__ */ Symbol("_vte"), qs = (e) => e.__isTeleport, qt = (e) => e && (e.disabled || e.disabled === ""), Xr = (e) => e && (e.defer || e.defer === ""), vo = (e) => typeof SVGElement < "u" && e instanceof SVGElement, yo = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Si = (e, t) => {
  const n = e && e.to;
  return Ce(n) ? t ? t(n) : null : n;
}, Yr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, l, i, o, s, a, r, u) {
    const {
      mc: c,
      pc: d,
      pbc: p,
      o: { insert: h, querySelector: m, createText: _, createComment: C, parentNode: y }
    } = u, b = qt(t.props);
    let { dynamicChildren: x } = t;
    const v = (G, j, $) => {
      G.shapeFlag & 16 && c(
        G.children,
        j,
        $,
        i,
        o,
        s,
        a,
        r
      );
    }, w = (G = t) => {
      const j = qt(G.props), $ = G.target = Si(G.props, m), q = xi($, G, _, h);
      $ && (s !== "svg" && vo($) ? s = "svg" : s !== "mathml" && yo($) && (s = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add($), j || (v(G, $, q), kn(G, !1)));
    }, F = (G) => {
      const j = () => {
        if (Et.get(G) === j) {
          if (Et.delete(G), qt(G.props)) {
            const $ = y(G.el) || n;
            v(G, $, G.anchor), kn(G, !0);
          }
          w(G);
        }
      };
      Et.set(G, j), He(j, o);
    };
    if (e == null) {
      const G = t.el = _(""), j = t.anchor = _("");
      if (h(G, n, l), h(j, n, l), Xr(t.props) || o && o.pendingBranch) {
        F(t);
        return;
      }
      b && (v(t, n, j), kn(t, !0)), w();
    } else {
      t.el = e.el;
      const G = t.anchor = e.anchor, j = Et.get(e);
      if (j) {
        j.flags |= 8, Et.delete(e), F(t);
        return;
      }
      t.targetStart = e.targetStart;
      const $ = t.target = e.target, q = t.targetAnchor = e.targetAnchor, Q = qt(e.props), k = Q ? n : $, L = Q ? G : q;
      if (s === "svg" || vo($) ? s = "svg" : (s === "mathml" || yo($)) && (s = "mathml"), x ? (p(
        e.dynamicChildren,
        x,
        k,
        i,
        o,
        s,
        a
      ), to(e, t, !0)) : r || d(
        e,
        t,
        k,
        L,
        i,
        o,
        s,
        a,
        !1
      ), b)
        Q ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : rl(
          t,
          n,
          G,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const T = Si(t.props, m);
        T && (t.target = T, rl(
          t,
          T,
          null,
          u,
          0
        ));
      } else Q && rl(
        t,
        $,
        q,
        u,
        1
      );
      kn(t, b);
    }
  },
  remove(e, t, n, { um: l, o: { remove: i } }, o) {
    const {
      shapeFlag: s,
      children: a,
      anchor: r,
      targetStart: u,
      targetAnchor: c,
      target: d,
      props: p
    } = e, h = qt(p), m = o || !h, _ = Et.get(e);
    if (_ && (_.flags |= 8, Et.delete(e)), d && (i(u), i(c)), o && i(r), !_ && (h || d) && s & 16)
      for (let C = 0; C < a.length; C++) {
        const y = a[C];
        l(
          y,
          t,
          n,
          m,
          !!y.dynamicChildren
        );
      }
  },
  move: rl,
  hydrate: Jr
};
function rl(e, t, n, { o: { insert: l }, m: i }, o = 2) {
  o === 0 && l(e.targetAnchor, t, n);
  const { el: s, anchor: a, shapeFlag: r, children: u, props: c } = e, d = o === 2;
  if (d && l(s, t, n), !Et.has(e) && (!d || qt(c)) && r & 16)
    for (let p = 0; p < u.length; p++)
      i(
        u[p],
        t,
        n,
        2
      );
  d && l(a, t, n);
}
function Jr(e, t, n, l, i, o, {
  o: { nextSibling: s, parentNode: a, querySelector: r, insert: u, createText: c }
}, d) {
  function p(C, y) {
    let b = y;
    for (; b; ) {
      if (b && b.nodeType === 8) {
        if (b.data === "teleport start anchor")
          t.targetStart = b;
        else if (b.data === "teleport anchor") {
          t.targetAnchor = b, C._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      b = s(b);
    }
  }
  function h(C, y) {
    y.anchor = d(
      s(C),
      y,
      a(C),
      n,
      l,
      i,
      o
    );
  }
  const m = t.target = Si(
    t.props,
    r
  ), _ = qt(t.props);
  if (m) {
    const C = m._lpa || m.firstChild;
    t.shapeFlag & 16 && (_ ? (h(e, t), p(m, C), t.targetAnchor || xi(
      m,
      t,
      c,
      u,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      a(e) === m ? e : null
    )) : (t.anchor = s(e), p(m, C), t.targetAnchor || xi(m, t, c, u), d(
      C && s(C),
      t,
      m,
      n,
      l,
      i,
      o
    ))), kn(t, _);
  } else _ && t.shapeFlag & 16 && (h(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const Qr = Yr;
function kn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let l, i;
    for (t ? (l = e.el, i = e.anchor) : (l = e.targetStart, i = e.targetAnchor); l && l !== i; )
      l.nodeType === 1 && l.setAttribute("data-v-owner", n.uid), l = l.nextSibling;
    n.ut();
  }
}
function xi(e, t, n, l, i = null) {
  const o = t.targetStart = n(""), s = t.targetAnchor = n("");
  return o[zs] = s, e && (l(o, e, i), l(s, e, i)), s;
}
const Ze = /* @__PURE__ */ Symbol("_leaveCb"), Cn = /* @__PURE__ */ Symbol("_enterCb");
function Zr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return nl(() => {
    e.isMounted = !0;
  }), Qi(() => {
    e.isUnmounting = !0;
  }), e;
}
const Je = [Function, Array], Xs = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Je,
  onEnter: Je,
  onAfterEnter: Je,
  onEnterCancelled: Je,
  // leave
  onBeforeLeave: Je,
  onLeave: Je,
  onAfterLeave: Je,
  onLeaveCancelled: Je,
  // appear
  onBeforeAppear: Je,
  onAppear: Je,
  onAfterAppear: Je,
  onAppearCancelled: Je
}, Ys = (e) => {
  const t = e.subTree;
  return t.component ? Ys(t.component) : t;
}, ec = {
  name: "BaseTransition",
  props: Xs,
  setup(e, { slots: t }) {
    const n = Zl(), l = Zr();
    return () => {
      const i = t.default && Zs(t.default(), !0), o = i && i.length ? Js(i) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? ae() : void 0
      );
      if (!o)
        return;
      const s = /* @__PURE__ */ pe(e), { mode: a } = s;
      if (l.isLeaving)
        return ci(o);
      const r = wo(o);
      if (!r)
        return ci(o);
      let u = Ci(
        r,
        s,
        l,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => u = d
      );
      r.type !== Oe && Kn(r, u);
      let c = n.subTree && wo(n.subTree);
      if (c && c.type !== Oe && !Xt(c, r) && Ys(n).type !== Oe) {
        let d = Ci(
          c,
          s,
          l,
          n
        );
        if (Kn(c, d), a === "out-in" && r.type !== Oe)
          return l.isLeaving = !0, d.afterLeave = () => {
            l.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
          }, ci(o);
        a === "in-out" && r.type !== Oe ? d.delayLeave = (p, h, m) => {
          const _ = Qs(
            l,
            c
          );
          _[String(c.key)] = c, p[Ze] = () => {
            h(), p[Ze] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            m(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return o;
    };
  }
};
function Js(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Oe) {
        t = n;
        break;
      }
  }
  return t;
}
const tc = ec;
function Qs(e, t) {
  const { leavingVNodes: n } = e;
  let l = n.get(t.type);
  return l || (l = /* @__PURE__ */ Object.create(null), n.set(t.type, l)), l;
}
function Ci(e, t, n, l, i) {
  const {
    appear: o,
    mode: s,
    persisted: a = !1,
    onBeforeEnter: r,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: d,
    onBeforeLeave: p,
    onLeave: h,
    onAfterLeave: m,
    onLeaveCancelled: _,
    onBeforeAppear: C,
    onAppear: y,
    onAfterAppear: b,
    onAppearCancelled: x
  } = t, v = String(e.key), w = Qs(n, e), F = ($, q) => {
    $ && et(
      $,
      l,
      9,
      q
    );
  }, G = ($, q) => {
    const Q = q[1];
    F($, q), ee($) ? $.every((k) => k.length <= 1) && Q() : $.length <= 1 && Q();
  }, j = {
    mode: s,
    persisted: a,
    beforeEnter($) {
      let q = r;
      if (!n.isMounted)
        if (o)
          q = C || r;
        else
          return;
      $[Ze] && $[Ze](
        !0
        /* cancelled */
      );
      const Q = w[v];
      Q && Xt(e, Q) && Q.el[Ze] && Q.el[Ze](), F(q, [$]);
    },
    enter($) {
      if (w[v] === e) return;
      let q = u, Q = c, k = d;
      if (!n.isMounted)
        if (o)
          q = y || u, Q = b || c, k = x || d;
        else
          return;
      let L = !1;
      $[Cn] = (te) => {
        L || (L = !0, te ? F(k, [$]) : F(Q, [$]), j.delayedLeave && j.delayedLeave(), $[Cn] = void 0);
      };
      const T = $[Cn].bind(null, !1);
      q ? G(q, [$, T]) : T();
    },
    leave($, q) {
      const Q = String(e.key);
      if ($[Cn] && $[Cn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return q();
      F(p, [$]);
      let k = !1;
      $[Ze] = (T) => {
        k || (k = !0, q(), T ? F(_, [$]) : F(m, [$]), $[Ze] = void 0, w[Q] === e && delete w[Q]);
      };
      const L = $[Ze].bind(null, !1);
      w[Q] = e, h ? G(h, [$, L]) : L();
    },
    clone($) {
      const q = Ci(
        $,
        t,
        n,
        l,
        i
      );
      return i && i(q), q;
    }
  };
  return j;
}
function ci(e) {
  if (tl(e))
    return e = Bt(e), e.children = null, e;
}
function wo(e) {
  if (!tl(e))
    return qs(e.type) && e.children ? Js(e.children) : e;
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
function Kn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Kn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Zs(e, t = !1, n) {
  let l = [], i = 0;
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : o);
    s.type === ue ? (s.patchFlag & 128 && i++, l = l.concat(
      Zs(s.children, t, a)
    )) : (t || s.type !== Oe) && l.push(a != null ? Bt(s, { key: a }) : s);
  }
  if (i > 1)
    for (let o = 0; o < l.length; o++)
      l[o].patchFlag = -2;
  return l;
}
// @__NO_SIDE_EFFECTS__
function we(e, t) {
  return re(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Fe({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ji(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function So(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Ml = /* @__PURE__ */ new WeakMap();
function En(e, t, n, l, i = !1) {
  if (ee(e)) {
    e.forEach(
      (_, C) => En(
        _,
        t && (ee(t) ? t[C] : t),
        n,
        l,
        i
      )
    );
    return;
  }
  if (mn(l) && !i) {
    l.shapeFlag & 512 && l.type.__asyncResolved && l.component.subTree.component && En(e, t, n, l.component.subTree);
    return;
  }
  const o = l.shapeFlag & 4 ? ei(l.component) : l.el, s = i ? null : o, { i: a, r } = e, u = t && t.r, c = a.refs === he ? a.refs = {} : a.refs, d = a.setupState, p = /* @__PURE__ */ pe(d), h = d === he ? hs : (_) => So(c, _) ? !1 : _e(p, _), m = (_, C) => !(C && So(c, C));
  if (u != null && u !== r) {
    if (xo(t), Ce(u))
      c[u] = null, h(u) && (d[u] = null);
    else if (/* @__PURE__ */ de(u)) {
      const _ = t;
      m(u, _.k) && (u.value = null), _.k && (c[_.k] = null);
    }
  }
  if (re(r)) {
    ht();
    try {
      Qn(r, a, 12, [s, c]);
    } finally {
      gt();
    }
  } else {
    const _ = Ce(r), C = /* @__PURE__ */ de(r);
    if (_ || C) {
      const y = () => {
        if (e.f) {
          const b = _ ? h(r) ? d[r] : c[r] : m() || !e.k ? r.value : c[e.k];
          if (i)
            ee(b) && Ui(b, o);
          else if (ee(b))
            b.includes(o) || b.push(o);
          else if (_)
            c[r] = [o], h(r) && (d[r] = c[r]);
          else {
            const x = [o];
            m(r, e.k) && (r.value = x), e.k && (c[e.k] = x);
          }
        } else _ ? (c[r] = s, h(r) && (d[r] = s)) : C && (m(r, e.k) && (r.value = s), e.k && (c[e.k] = s));
      };
      if (s) {
        const b = () => {
          y(), Ml.delete(e);
        };
        b.id = -1, Ml.set(e, b), He(b, n);
      } else
        xo(e), y();
    }
  }
}
function xo(e) {
  const t = Ml.get(e);
  t && (t.flags |= 8, Ml.delete(e));
}
const Co = (e) => e.nodeType === 8;
jl().requestIdleCallback;
jl().cancelIdleCallback;
function nc(e, t) {
  if (Co(e) && e.data === "[") {
    let n = 1, l = e.nextSibling;
    for (; l; ) {
      if (l.nodeType === 1) {
        if (t(l) === !1)
          break;
      } else if (Co(l))
        if (l.data === "]") {
          if (--n === 0) break;
        } else l.data === "[" && n++;
      l = l.nextSibling;
    }
  } else
    t(e);
}
const mn = (e) => !!e.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function It(e) {
  re(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: l,
    delay: i = 200,
    hydrate: o,
    timeout: s,
    // undefined = never times out
    suspensible: a = !0,
    onError: r
  } = e;
  let u = null, c, d = 0;
  const p = () => (d++, u = null, h()), h = () => {
    let m;
    return u || (m = u = t().catch((_) => {
      if (_ = _ instanceof Error ? _ : new Error(String(_)), r)
        return new Promise((C, y) => {
          r(_, () => C(p()), () => y(_), d + 1);
        });
      throw _;
    }).then((_) => m !== u && u ? u : (_ && (_.__esModule || _[Symbol.toStringTag] === "Module") && (_ = _.default), c = _, _)));
  };
  return /* @__PURE__ */ we({
    name: "AsyncComponentWrapper",
    __asyncLoader: h,
    __asyncHydrate(m, _, C) {
      let y = !1;
      (_.bu || (_.bu = [])).push(() => y = !0);
      const b = () => {
        y || C();
      }, x = o ? () => {
        const v = o(
          b,
          (w) => nc(m, w)
        );
        v && (_.bum || (_.bum = [])).push(v);
      } : b;
      c ? x() : h().then(() => !_.isUnmounted && x());
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const m = Re;
      if (Ji(m), c)
        return () => cl(c, m);
      const _ = (w) => {
        u = null, Zn(
          w,
          m,
          13,
          !l
        );
      };
      if (a && m.suspense || vn)
        return h().then((w) => () => cl(w, m)).catch((w) => (_(w), () => l ? V(l, {
          error: w
        }) : null));
      const C = /* @__PURE__ */ ce(!1), y = /* @__PURE__ */ ce(), b = /* @__PURE__ */ ce(!!i);
      let x, v;
      return Yl(() => {
        x != null && clearTimeout(x), v != null && clearTimeout(v);
      }), i && (v = setTimeout(() => {
        m.isUnmounted || (b.value = !1);
      }, i)), s != null && (x = setTimeout(() => {
        if (!m.isUnmounted && !C.value && !y.value) {
          const w = new Error(
            `Async component timed out after ${s}ms.`
          );
          _(w), y.value = w;
        }
      }, s)), h().then(() => {
        m.isUnmounted || (C.value = !0, m.parent && tl(m.parent.vnode) && m.parent.update());
      }).catch((w) => {
        if (m.isUnmounted) {
          u = null;
          return;
        }
        _(w), y.value = w;
      }), () => {
        if (C.value && c)
          return cl(c, m);
        if (y.value && l)
          return V(l, {
            error: y.value
          });
        if (n && !b.value)
          return cl(
            n,
            m
          );
      };
    }
  });
}
function cl(e, t) {
  const { ref: n, props: l, children: i, ce: o } = t.vnode, s = V(e, l, i);
  return s.ref = n, s.ce = o, delete t.vnode.ce, s;
}
const tl = (e) => e.type.__isKeepAlive;
function lc(e, t) {
  ea(e, "a", t);
}
function ic(e, t) {
  ea(e, "da", t);
}
function ea(e, t, n = Re) {
  const l = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Xl(t, l, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      tl(i.parent.vnode) && oc(l, t, n, i), i = i.parent;
  }
}
function oc(e, t, n, l) {
  const i = Xl(
    t,
    e,
    l,
    !0
    /* prepend */
  );
  Yl(() => {
    Ui(l[t], i);
  }, n);
}
function Xl(e, t, n = Re, l = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...s) => {
      ht();
      const a = ll(n), r = et(t, n, e, s);
      return a(), gt(), r;
    });
    return l ? i.unshift(o) : i.push(o), o;
  }
}
const Dt = (e) => (t, n = Re) => {
  (!vn || e === "sp") && Xl(e, (...l) => t(...l), n);
}, sc = Dt("bm"), nl = Dt("m"), ac = Dt(
  "bu"
), rc = Dt("u"), Qi = Dt(
  "bum"
), Yl = Dt("um"), cc = Dt(
  "sp"
), uc = Dt("rtg"), dc = Dt("rtc");
function fc(e, t = Re) {
  Xl("ec", e, t);
}
const pc = "components", ta = /* @__PURE__ */ Symbol.for("v-ndc");
function mc(e) {
  return Ce(e) ? hc(pc, e, !1) || e : e || ta;
}
function hc(e, t, n = !0, l = !1) {
  const i = Ne || Re;
  if (i) {
    const o = i.type;
    {
      const a = Zc(
        o,
        !1
      );
      if (a && (a === t || a === Ve(t) || a === Gl(Ve(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ao(i[e] || o[e], t) || // global registration
      Ao(i.appContext[e], t)
    );
    return !s && l ? o : s;
  }
}
function Ao(e, t) {
  return e && (e[t] || e[Ve(t)] || e[Gl(Ve(t))]);
}
function Me(e, t, n, l) {
  let i;
  const o = n, s = ee(e);
  if (s || Ce(e)) {
    const a = s && /* @__PURE__ */ At(e);
    let r = !1, u = !1;
    a && (r = !/* @__PURE__ */ Ke(e), u = /* @__PURE__ */ Ft(e), e = zl(e)), i = new Array(e.length);
    for (let c = 0, d = e.length; c < d; c++)
      i[c] = t(
        r ? u ? bn(ot(e[c])) : ot(e[c]) : e[c],
        c,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++)
      i[a] = t(a + 1, a, void 0, o);
  } else if (be(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (a, r) => t(a, r, void 0, o)
      );
    else {
      const a = Object.keys(e);
      i = new Array(a.length);
      for (let r = 0, u = a.length; r < u; r++) {
        const c = a[r];
        i[r] = t(e[c], c, r, o);
      }
    }
  else
    i = [];
  return i;
}
function gc(e, t, n = {}, l, i) {
  if (Ne.ce || Ne.parent && mn(Ne.parent) && Ne.parent.ce) {
    const u = Object.keys(n).length > 0;
    return I(), Ie(
      ue,
      null,
      [V("slot", n, l)],
      u ? -2 : 64
    );
  }
  let o = e[t];
  o && o._c && (o._d = !1), I();
  const s = o && na(o(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  s && s.key, r = Ie(
    ue,
    {
      key: (a && !ze(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!s && l ? "_fb" : "")
    },
    s || [],
    s && e._ === 1 ? 64 : -2
  );
  return o && o._c && (o._d = !0), r;
}
function na(e) {
  return e.some((t) => qn(t) ? !(t.type === Oe || t.type === ue && !na(t.children)) : !0) ? e : null;
}
const Ai = (e) => e ? Sa(e) ? ei(e) : Ai(e.parent) : null, On = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ai(e.parent),
    $root: (e) => Ai(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ia(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Xi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = el.bind(e.proxy)),
    $watch: (e) => qr.bind(e)
  })
), ui = (e, t) => e !== he && !e.__isScriptSetup && _e(e, t), _c = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: l, data: i, props: o, accessCache: s, type: a, appContext: r } = e;
    if (t[0] !== "$") {
      const p = s[t];
      if (p !== void 0)
        switch (p) {
          case 1:
            return l[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (ui(l, t))
          return s[t] = 1, l[t];
        if (i !== he && _e(i, t))
          return s[t] = 2, i[t];
        if (_e(o, t))
          return s[t] = 3, o[t];
        if (n !== he && _e(n, t))
          return s[t] = 4, n[t];
        Mi && (s[t] = 0);
      }
    }
    const u = On[t];
    let c, d;
    if (u)
      return t === "$attrs" && Ee(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (c = a.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== he && _e(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      d = r.config.globalProperties, _e(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: l, setupState: i, ctx: o } = e;
    return ui(i, t) ? (i[t] = n, !0) : l !== he && _e(l, t) ? (l[t] = n, !0) : _e(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: l, appContext: i, props: o, type: s }
  }, a) {
    let r;
    return !!(n[a] || e !== he && a[0] !== "$" && _e(e, a) || ui(t, a) || _e(o, a) || _e(l, a) || _e(On, a) || _e(i.config.globalProperties, a) || (r = s.__cssModules) && r[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : _e(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Fl(e) {
  return ee(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function qe(e, t) {
  return !e || !t ? e || t : ee(e) && ee(t) ? e.concat(t) : Fe({}, Fl(e), Fl(t));
}
let Mi = !0;
function bc(e) {
  const t = ia(e), n = e.proxy, l = e.ctx;
  Mi = !1, t.beforeCreate && Mo(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: s,
    watch: a,
    provide: r,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: d,
    mounted: p,
    beforeUpdate: h,
    updated: m,
    activated: _,
    deactivated: C,
    beforeDestroy: y,
    beforeUnmount: b,
    destroyed: x,
    unmounted: v,
    render: w,
    renderTracked: F,
    renderTriggered: G,
    errorCaptured: j,
    serverPrefetch: $,
    // public API
    expose: q,
    inheritAttrs: Q,
    // assets
    components: k,
    directives: L,
    filters: T
  } = t;
  if (u && vc(u, l, null), s)
    for (const M in s) {
      const A = s[M];
      re(A) && (l[M] = A.bind(n));
    }
  if (i) {
    const M = i.call(n, n);
    be(M) && (e.data = /* @__PURE__ */ Ht(M));
  }
  if (Mi = !0, o)
    for (const M in o) {
      const A = o[M], U = re(A) ? A.bind(n, n) : re(A.get) ? A.get.bind(n, n) : mt, Z = !re(A) && re(A.set) ? A.set.bind(n) : mt, ne = J({
        get: U,
        set: Z
      });
      Object.defineProperty(l, M, {
        enumerable: !0,
        configurable: !0,
        get: () => ne.value,
        set: (Te) => ne.value = Te
      });
    }
  if (a)
    for (const M in a)
      la(a[M], l, n, M);
  if (r) {
    const M = re(r) ? r.call(n) : r;
    Reflect.ownKeys(M).forEach((A) => {
      Gr(A, M[A]);
    });
  }
  c && Mo(c, e, "c");
  function P(M, A) {
    ee(A) ? A.forEach((U) => M(U.bind(n))) : A && M(A.bind(n));
  }
  if (P(sc, d), P(nl, p), P(ac, h), P(rc, m), P(lc, _), P(ic, C), P(fc, j), P(dc, F), P(uc, G), P(Qi, b), P(Yl, v), P(cc, $), ee(q))
    if (q.length) {
      const M = e.exposed || (e.exposed = {});
      q.forEach((A) => {
        Object.defineProperty(M, A, {
          get: () => n[A],
          set: (U) => n[A] = U,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  w && e.render === mt && (e.render = w), Q != null && (e.inheritAttrs = Q), k && (e.components = k), L && (e.directives = L), $ && Ji(e);
}
function vc(e, t, n = mt) {
  ee(e) && (e = Fi(e));
  for (const l in e) {
    const i = e[l];
    let o;
    be(i) ? "default" in i ? o = Tn(
      i.from || l,
      i.default,
      !0
    ) : o = Tn(i.from || l) : o = Tn(i), /* @__PURE__ */ de(o) ? Object.defineProperty(t, l, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[l] = o;
  }
}
function Mo(e, t, n) {
  et(
    ee(e) ? e.map((l) => l.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function la(e, t, n, l) {
  let i = l.includes(".") ? Ks(n, l) : () => n[l];
  if (Ce(e)) {
    const o = t[e];
    re(o) && $e(i, o);
  } else if (re(e))
    $e(i, e.bind(n));
  else if (be(e))
    if (ee(e))
      e.forEach((o) => la(o, t, n, l));
    else {
      const o = re(e.handler) ? e.handler.bind(n) : t[e.handler];
      re(o) && $e(i, o, e);
    }
}
function ia(e) {
  const t = e.type, { mixins: n, extends: l } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = o.get(t);
  let r;
  return a ? r = a : !i.length && !n && !l ? r = t : (r = {}, i.length && i.forEach(
    (u) => kl(r, u, s, !0)
  ), kl(r, t, s)), be(t) && o.set(t, r), r;
}
function kl(e, t, n, l = !1) {
  const { mixins: i, extends: o } = t;
  o && kl(e, o, n, !0), i && i.forEach(
    (s) => kl(e, s, n, !0)
  );
  for (const s in t)
    if (!(l && s === "expose")) {
      const a = yc[s] || n && n[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const yc = {
  data: Fo,
  props: ko,
  emits: ko,
  // objects
  methods: Ln,
  computed: Ln,
  // lifecycle
  beforeCreate: Be,
  created: Be,
  beforeMount: Be,
  mounted: Be,
  beforeUpdate: Be,
  updated: Be,
  beforeDestroy: Be,
  beforeUnmount: Be,
  destroyed: Be,
  unmounted: Be,
  activated: Be,
  deactivated: Be,
  errorCaptured: Be,
  serverPrefetch: Be,
  // assets
  components: Ln,
  directives: Ln,
  // watch
  watch: Sc,
  // provide / inject
  provide: Fo,
  inject: wc
};
function Fo(e, t) {
  return t ? e ? function() {
    return Fe(
      re(e) ? e.call(this, this) : e,
      re(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function wc(e, t) {
  return Ln(Fi(e), Fi(t));
}
function Fi(e) {
  if (ee(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Be(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ln(e, t) {
  return e ? Fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ko(e, t) {
  return e ? ee(e) && ee(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Fe(
    /* @__PURE__ */ Object.create(null),
    Fl(e),
    Fl(t ?? {})
  ) : t;
}
function Sc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Fe(/* @__PURE__ */ Object.create(null), e);
  for (const l in t)
    n[l] = Be(e[l], t[l]);
  return n;
}
function oa() {
  return {
    app: null,
    config: {
      isNativeTag: hs,
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
let xc = 0;
function Cc(e, t) {
  return function(l, i = null) {
    re(l) || (l = Fe({}, l)), i != null && !be(i) && (i = null);
    const o = oa(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let r = !1;
    const u = o.app = {
      _uid: xc++,
      _component: l,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: tu,
      get config() {
        return o.config;
      },
      set config(c) {
      },
      use(c, ...d) {
        return s.has(c) || (c && re(c.install) ? (s.add(c), c.install(u, ...d)) : re(c) && (s.add(c), c(u, ...d))), u;
      },
      mixin(c) {
        return o.mixins.includes(c) || o.mixins.push(c), u;
      },
      component(c, d) {
        return d ? (o.components[c] = d, u) : o.components[c];
      },
      directive(c, d) {
        return d ? (o.directives[c] = d, u) : o.directives[c];
      },
      mount(c, d, p) {
        if (!r) {
          const h = u._ceVNode || V(l, i);
          return h.appContext = o, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(h, c, p), r = !0, u._container = c, c.__vue_app__ = u, ei(h.component);
        }
      },
      onUnmount(c) {
        a.push(c);
      },
      unmount() {
        r && (et(
          a,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, d) {
        return o.provides[c] = d, u;
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
function st(e, t, n = he) {
  const l = Zl(), i = Ve(t), o = Lt(t), s = sa(e, i), a = Pr((r, u) => {
    let c, d = he, p;
    return zr(() => {
      const h = e[i];
      Pe(c, h) && (c = h, u());
    }), {
      get() {
        return r(), n.get ? n.get(c) : c;
      },
      set(h) {
        const m = n.set ? n.set(h) : h;
        if (!Pe(m, c) && !(d !== he && Pe(h, d)))
          return;
        const _ = l.vnode.props, C = !!(_ && // check if parent has passed v-model
        (t in _ || i in _ || o in _) && (`onUpdate:${t}` in _ || `onUpdate:${i}` in _ || `onUpdate:${o}` in _));
        C || (c = h, u()), l.emit(`update:${t}`, m), Pe(h, d) && (Pe(h, m) && !Pe(m, p) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        C && d !== he && !Pe(m, c)) && u(), d = h, p = m;
      }
    };
  });
  return a[Symbol.iterator] = () => {
    let r = 0;
    return {
      next() {
        return r < 2 ? { value: r++ ? s || he : a, done: !1 } : { done: !0 };
      }
    };
  }, a;
}
const sa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ve(t)}Modifiers`] || e[`${Lt(t)}Modifiers`];
function Ac(e, t, ...n) {
  if (e.isUnmounted) return;
  const l = e.vnode.props || he;
  let i = n;
  const o = t.startsWith("update:"), s = o && sa(l, t.slice(7));
  s && (s.trim && (i = n.map((c) => Ce(c) ? c.trim() : c)), s.number && (i = n.map(Wl)));
  let a, r = l[a = ii(t)] || // also try camelCase event handler (#2249)
  l[a = ii(Ve(t))];
  !r && o && (r = l[a = ii(Lt(t))]), r && et(
    r,
    e,
    6,
    i
  );
  const u = l[a + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, et(
      u,
      e,
      6,
      i
    );
  }
}
const Mc = /* @__PURE__ */ new WeakMap();
function aa(e, t, n = !1) {
  const l = n ? Mc : t.emitsCache, i = l.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, a = !1;
  if (!re(e)) {
    const r = (u) => {
      const c = aa(u, t, !0);
      c && (a = !0, Fe(s, c));
    };
    !n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
  }
  return !o && !a ? (be(e) && l.set(e, null), null) : (ee(o) ? o.forEach((r) => s[r] = null) : Fe(s, o), be(e) && l.set(e, s), s);
}
function Jl(e, t) {
  return !e || !Vl(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), _e(e, t[0].toLowerCase() + t.slice(1)) || _e(e, Lt(t)) || _e(e, t));
}
function Lo(e) {
  const {
    type: t,
    vnode: n,
    proxy: l,
    withProxy: i,
    propsOptions: [o],
    slots: s,
    attrs: a,
    emit: r,
    render: u,
    renderCache: c,
    props: d,
    data: p,
    setupState: h,
    ctx: m,
    inheritAttrs: _
  } = e, C = Al(e);
  let y, b;
  try {
    if (n.shapeFlag & 4) {
      const v = i || l, w = v;
      y = pt(
        u.call(
          w,
          v,
          c,
          d,
          h,
          p,
          m
        )
      ), b = a;
    } else {
      const v = t;
      y = pt(
        v.length > 1 ? v(
          d,
          { attrs: a, slots: s, emit: r }
        ) : v(
          d,
          null
        )
      ), b = t.props ? a : Fc(a);
    }
  } catch (v) {
    Vn.length = 0, Zn(v, e, 1), y = V(Oe);
  }
  let x = y;
  if (b && _ !== !1) {
    const v = Object.keys(b), { shapeFlag: w } = x;
    v.length && w & 7 && (o && v.some($l) && (b = kc(
      b,
      o
    )), x = Bt(x, b, !1, !0));
  }
  return n.dirs && (x = Bt(x, null, !1, !0), x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs), n.transition && Kn(x, n.transition), y = x, Al(C), y;
}
const Fc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Vl(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, kc = (e, t) => {
  const n = {};
  for (const l in e)
    (!$l(l) || !(l.slice(9) in t)) && (n[l] = e[l]);
  return n;
};
function Lc(e, t, n) {
  const { props: l, children: i, component: o } = e, { props: s, children: a, patchFlag: r } = t, u = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && r >= 0) {
    if (r & 1024)
      return !0;
    if (r & 16)
      return l ? Io(l, s, u) : !!s;
    if (r & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const p = c[d];
        if (ra(s, l, p) && !Jl(u, p))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : l === s ? !1 : l ? s ? Io(l, s, u) : !0 : !!s;
  return !1;
}
function Io(e, t, n) {
  const l = Object.keys(t);
  if (l.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < l.length; i++) {
    const o = l[i];
    if (ra(t, e, o) && !Jl(n, o))
      return !0;
  }
  return !1;
}
function ra(e, t, n) {
  const l = e[n], i = t[n];
  return n === "style" && be(l) && be(i) ? !Jn(l, i) : l !== i;
}
function Ic({ vnode: e, parent: t, suspense: n }, l) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = l, e = i), i === e)
      (e = t.vnode).el = l, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = l);
}
const ca = {}, ua = () => Object.create(ca), da = (e) => Object.getPrototypeOf(e) === ca;
function Dc(e, t, n, l = !1) {
  const i = {}, o = ua();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), fa(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  n ? e.props = l ? i : /* @__PURE__ */ Fr(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function Pc(e, t, n, l) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, a = /* @__PURE__ */ pe(i), [r] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (l || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let p = c[d];
        if (Jl(e.emitsOptions, p))
          continue;
        const h = t[p];
        if (r)
          if (_e(o, p))
            h !== o[p] && (o[p] = h, u = !0);
          else {
            const m = Ve(p);
            i[m] = ki(
              r,
              a,
              m,
              h,
              e,
              !1
            );
          }
        else
          h !== o[p] && (o[p] = h, u = !0);
      }
    }
  } else {
    fa(e, t, i, o) && (u = !0);
    let c;
    for (const d in a)
      (!t || // for camelCase
      !_e(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Lt(d)) === d || !_e(t, c))) && (r ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (i[d] = ki(
        r,
        a,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (o !== a)
      for (const d in o)
        (!t || !_e(t, d)) && (delete o[d], u = !0);
  }
  u && xt(e.attrs, "set", "");
}
function fa(e, t, n, l) {
  const [i, o] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let r in t) {
      if (Pn(r))
        continue;
      const u = t[r];
      let c;
      i && _e(i, c = Ve(r)) ? !o || !o.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : Jl(e.emitsOptions, r) || (!(r in l) || u !== l[r]) && (l[r] = u, s = !0);
    }
  if (o) {
    const r = /* @__PURE__ */ pe(n), u = a || he;
    for (let c = 0; c < o.length; c++) {
      const d = o[c];
      n[d] = ki(
        i,
        r,
        d,
        u[d],
        e,
        !_e(u, d)
      );
    }
  }
  return s;
}
function ki(e, t, n, l, i, o) {
  const s = e[n];
  if (s != null) {
    const a = _e(s, "default");
    if (a && l === void 0) {
      const r = s.default;
      if (s.type !== Function && !s.skipFactory && re(r)) {
        const { propsDefaults: u } = i;
        if (n in u)
          l = u[n];
        else {
          const c = ll(i);
          l = u[n] = r.call(
            null,
            t
          ), c();
        }
      } else
        l = r;
      i.ce && i.ce._setProp(n, l);
    }
    s[
      0
      /* shouldCast */
    ] && (o && !a ? l = !1 : s[
      1
      /* shouldCastTrue */
    ] && (l === "" || l === Lt(n)) && (l = !0));
  }
  return l;
}
const Rc = /* @__PURE__ */ new WeakMap();
function pa(e, t, n = !1) {
  const l = n ? Rc : t.propsCache, i = l.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, a = [];
  let r = !1;
  if (!re(e)) {
    const c = (d) => {
      r = !0;
      const [p, h] = pa(d, t, !0);
      Fe(s, p), h && a.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!o && !r)
    return be(e) && l.set(e, dn), dn;
  if (ee(o))
    for (let c = 0; c < o.length; c++) {
      const d = Ve(o[c]);
      Do(d) && (s[d] = he);
    }
  else if (o)
    for (const c in o) {
      const d = Ve(c);
      if (Do(d)) {
        const p = o[c], h = s[d] = ee(p) || re(p) ? { type: p } : Fe({}, p), m = h.type;
        let _ = !1, C = !0;
        if (ee(m))
          for (let y = 0; y < m.length; ++y) {
            const b = m[y], x = re(b) && b.name;
            if (x === "Boolean") {
              _ = !0;
              break;
            } else x === "String" && (C = !1);
          }
        else
          _ = re(m) && m.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = _, h[
          1
          /* shouldCastTrue */
        ] = C, (_ || _e(h, "default")) && a.push(d);
      }
    }
  const u = [s, a];
  return be(e) && l.set(e, u), u;
}
function Do(e) {
  return e[0] !== "$" && !Pn(e);
}
const Zi = (e) => e === "_" || e === "_ctx" || e === "$stable", eo = (e) => ee(e) ? e.map(pt) : [pt(e)], Nc = (e, t, n) => {
  if (t._n)
    return t;
  const l = $t((...i) => eo(t(...i)), n);
  return l._c = !1, l;
}, ma = (e, t, n) => {
  const l = e._ctx;
  for (const i in e) {
    if (Zi(i)) continue;
    const o = e[i];
    if (re(o))
      t[i] = Nc(i, o, l);
    else if (o != null) {
      const s = eo(o);
      t[i] = () => s;
    }
  }
}, ha = (e, t) => {
  const n = eo(t);
  e.slots.default = () => n;
}, ga = (e, t, n) => {
  for (const l in t)
    (n || !Zi(l)) && (e[l] = t[l]);
}, Tc = (e, t, n) => {
  const l = e.slots = ua();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (ga(l, t, n), n && vs(l, "_", i, !0)) : ma(t, l);
  } else t && ha(e, t);
}, Ec = (e, t, n) => {
  const { vnode: l, slots: i } = e;
  let o = !0, s = he;
  if (l.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = !1 : ga(i, t, n) : (o = !t.$stable, ma(t, i)), s = t;
  } else t && (ha(e, t), s = { default: 1 });
  if (o)
    for (const a in i)
      !Zi(a) && s[a] == null && delete i[a];
}, He = Hc;
function Oc(e) {
  return Vc(e);
}
function Vc(e, t) {
  const n = jl();
  n.__VUE__ = !0;
  const {
    insert: l,
    remove: i,
    patchProp: o,
    createElement: s,
    createText: a,
    createComment: r,
    setText: u,
    setElementText: c,
    parentNode: d,
    nextSibling: p,
    setScopeId: h = mt,
    insertStaticContent: m
  } = e, _ = (g, S, R, H = null, B = null, E = null, X = void 0, K = null, W = !!S.dynamicChildren) => {
    if (g === S)
      return;
    g && !Xt(g, S) && (H = il(g), Te(g, B, E, !0), g = null), S.patchFlag === -2 && (W = !1, S.dynamicChildren = null);
    const { type: O, ref: oe, shapeFlag: Y } = S;
    switch (O) {
      case Ql:
        C(g, S, R, H);
        break;
      case Oe:
        y(g, S, R, H);
        break;
      case fi:
        g == null && b(S, R, H, X);
        break;
      case ue:
        k(
          g,
          S,
          R,
          H,
          B,
          E,
          X,
          K,
          W
        );
        break;
      default:
        Y & 1 ? w(
          g,
          S,
          R,
          H,
          B,
          E,
          X,
          K,
          W
        ) : Y & 6 ? L(
          g,
          S,
          R,
          H,
          B,
          E,
          X,
          K,
          W
        ) : (Y & 64 || Y & 128) && O.process(
          g,
          S,
          R,
          H,
          B,
          E,
          X,
          K,
          W,
          wn
        );
    }
    oe != null && B ? En(oe, g && g.ref, E, S || g, !S) : oe == null && g && g.ref != null && En(g.ref, null, E, g, !0);
  }, C = (g, S, R, H) => {
    if (g == null)
      l(
        S.el = a(S.children),
        R,
        H
      );
    else {
      const B = S.el = g.el;
      S.children !== g.children && u(B, S.children);
    }
  }, y = (g, S, R, H) => {
    g == null ? l(
      S.el = r(S.children || ""),
      R,
      H
    ) : S.el = g.el;
  }, b = (g, S, R, H) => {
    [g.el, g.anchor] = m(
      g.children,
      S,
      R,
      H,
      g.el,
      g.anchor
    );
  }, x = ({ el: g, anchor: S }, R, H) => {
    let B;
    for (; g && g !== S; )
      B = p(g), l(g, R, H), g = B;
    l(S, R, H);
  }, v = ({ el: g, anchor: S }) => {
    let R;
    for (; g && g !== S; )
      R = p(g), i(g), g = R;
    i(S);
  }, w = (g, S, R, H, B, E, X, K, W) => {
    if (S.type === "svg" ? X = "svg" : S.type === "math" && (X = "mathml"), g == null)
      F(
        S,
        R,
        H,
        B,
        E,
        X,
        K,
        W
      );
    else {
      const O = g.el && g.el._isVueCE ? g.el : null;
      try {
        O && O._beginPatch(), $(
          g,
          S,
          B,
          E,
          X,
          K,
          W
        );
      } finally {
        O && O._endPatch();
      }
    }
  }, F = (g, S, R, H, B, E, X, K) => {
    let W, O;
    const { props: oe, shapeFlag: Y, transition: le, dirs: se } = g;
    if (W = g.el = s(
      g.type,
      E,
      oe && oe.is,
      oe
    ), Y & 8 ? c(W, g.children) : Y & 16 && j(
      g.children,
      W,
      null,
      H,
      B,
      di(g, E),
      X,
      K
    ), se && Gt(g, null, H, "created"), G(W, g, g.scopeId, X, H), oe) {
      for (const ye in oe)
        ye !== "value" && !Pn(ye) && o(W, ye, null, oe[ye], E, H);
      "value" in oe && o(W, "value", null, oe.value, E), (O = oe.onVnodeBeforeMount) && ut(O, H, g);
    }
    se && Gt(g, null, H, "beforeMount");
    const fe = $c(B, le);
    fe && le.beforeEnter(W), l(W, S, R), ((O = oe && oe.onVnodeMounted) || fe || se) && He(() => {
      try {
        O && ut(O, H, g), fe && le.enter(W), se && Gt(g, null, H, "mounted");
      } finally {
      }
    }, B);
  }, G = (g, S, R, H, B) => {
    if (R && h(g, R), H)
      for (let E = 0; E < H.length; E++)
        h(g, H[E]);
    if (B) {
      let E = B.subTree;
      if (S === E || va(E.type) && (E.ssContent === S || E.ssFallback === S)) {
        const X = B.vnode;
        G(
          g,
          X,
          X.scopeId,
          X.slotScopeIds,
          B.parent
        );
      }
    }
  }, j = (g, S, R, H, B, E, X, K, W = 0) => {
    for (let O = W; O < g.length; O++) {
      const oe = g[O] = K ? wt(g[O]) : pt(g[O]);
      _(
        null,
        oe,
        S,
        R,
        H,
        B,
        E,
        X,
        K
      );
    }
  }, $ = (g, S, R, H, B, E, X) => {
    const K = S.el = g.el;
    let { patchFlag: W, dynamicChildren: O, dirs: oe } = S;
    W |= g.patchFlag & 16;
    const Y = g.props || he, le = S.props || he;
    let se;
    if (R && Wt(R, !1), (se = le.onVnodeBeforeUpdate) && ut(se, R, S, g), oe && Gt(S, g, R, "beforeUpdate"), R && Wt(R, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    O && (!g.dynamicChildren || g.dynamicChildren.length !== O.length) && (W = 0, X = !1, O = null), (Y.innerHTML && le.innerHTML == null || Y.textContent && le.textContent == null) && c(K, ""), O ? q(
      g.dynamicChildren,
      O,
      K,
      R,
      H,
      di(S, B),
      E
    ) : X || A(
      g,
      S,
      K,
      null,
      R,
      H,
      di(S, B),
      E,
      !1
    ), W > 0) {
      if (W & 16)
        Q(K, Y, le, R, B);
      else if (W & 2 && Y.class !== le.class && o(K, "class", null, le.class, B), W & 4 && o(K, "style", Y.style, le.style, B), W & 8) {
        const fe = S.dynamicProps;
        for (let ye = 0; ye < fe.length; ye++) {
          const ve = fe[ye], Ae = Y[ve], De = le[ve];
          (De !== Ae || ve === "value") && o(K, ve, Ae, De, B, R);
        }
      }
      W & 1 && g.children !== S.children && c(K, S.children);
    } else !X && O == null && Q(K, Y, le, R, B);
    ((se = le.onVnodeUpdated) || oe) && He(() => {
      se && ut(se, R, S, g), oe && Gt(S, g, R, "updated");
    }, H);
  }, q = (g, S, R, H, B, E, X) => {
    for (let K = 0; K < S.length; K++) {
      const W = g[K], O = S[K], oe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        W.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (W.type === ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xt(W, O) || // - In the case of a component, it could contain anything.
        W.shapeFlag & 198) ? d(W.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          R
        )
      );
      _(
        W,
        O,
        oe,
        null,
        H,
        B,
        E,
        X,
        !0
      );
    }
  }, Q = (g, S, R, H, B) => {
    if (S !== R) {
      if (S !== he)
        for (const E in S)
          !Pn(E) && !(E in R) && o(
            g,
            E,
            S[E],
            null,
            B,
            H
          );
      for (const E in R) {
        if (Pn(E)) continue;
        const X = R[E], K = S[E];
        X !== K && E !== "value" && o(g, E, K, X, B, H);
      }
      "value" in R && o(g, "value", S.value, R.value, B);
    }
  }, k = (g, S, R, H, B, E, X, K, W) => {
    const O = S.el = g ? g.el : a(""), oe = S.anchor = g ? g.anchor : a("");
    let { patchFlag: Y, dynamicChildren: le, slotScopeIds: se } = S;
    se && (K = K ? K.concat(se) : se), g == null ? (l(O, R, H), l(oe, R, H), j(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      S.children || [],
      R,
      oe,
      B,
      E,
      X,
      K,
      W
    )) : Y > 0 && Y & 64 && le && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren && g.dynamicChildren.length === le.length ? (q(
      g.dynamicChildren,
      le,
      R,
      B,
      E,
      X,
      K
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (S.key != null || B && S === B.subTree) && to(
      g,
      S,
      !0
      /* shallow */
    )) : A(
      g,
      S,
      R,
      oe,
      B,
      E,
      X,
      K,
      W
    );
  }, L = (g, S, R, H, B, E, X, K, W) => {
    S.slotScopeIds = K, g == null ? S.shapeFlag & 512 ? B.ctx.activate(
      S,
      R,
      H,
      X,
      W
    ) : T(
      S,
      R,
      H,
      B,
      E,
      X,
      W
    ) : te(g, S, W);
  }, T = (g, S, R, H, B, E, X) => {
    const K = g.component = qc(
      g,
      H,
      B
    );
    if (tl(g) && (K.ctx.renderer = wn), Xc(K, !1, X), K.asyncDep) {
      if (B && B.registerDep(K, P, X), !g.el) {
        const W = K.subTree = V(Oe);
        y(null, W, S, R), g.placeholder = W.el;
      }
    } else
      P(
        K,
        g,
        S,
        R,
        B,
        E,
        X
      );
  }, te = (g, S, R) => {
    const H = S.component = g.component;
    if (Lc(g, S, R))
      if (H.asyncDep && !H.asyncResolved) {
        M(H, S, R);
        return;
      } else
        H.next = S, H.update();
    else
      S.el = g.el, H.vnode = S;
  }, P = (g, S, R, H, B, E, X) => {
    const K = () => {
      if (g.isMounted) {
        let { next: Y, bu: le, u: se, parent: fe, vnode: ye } = g;
        {
          const rt = _a(g);
          if (rt) {
            Y && (Y.el = ye.el, M(g, Y, X)), rt.asyncDep.then(() => {
              He(() => {
                g.isUnmounted || O();
              }, B);
            });
            return;
          }
        }
        let ve = Y, Ae;
        Wt(g, !1), Y ? (Y.el = ye.el, M(g, Y, X)) : Y = ye, le && hl(le), (Ae = Y.props && Y.props.onVnodeBeforeUpdate) && ut(Ae, fe, Y, ye), Wt(g, !0);
        const De = Lo(g), at = g.subTree;
        g.subTree = De, _(
          at,
          De,
          // parent may have changed if it's in a teleport
          d(at.el),
          // anchor may have changed if it's in a fragment
          il(at),
          g,
          B,
          E
        ), Y.el = De.el, ve === null && Ic(g, De.el), se && He(se, B), (Ae = Y.props && Y.props.onVnodeUpdated) && He(
          () => ut(Ae, fe, Y, ye),
          B
        );
      } else {
        let Y;
        const { el: le, props: se } = S, { bm: fe, m: ye, parent: ve, root: Ae, type: De } = g, at = mn(S);
        Wt(g, !1), fe && hl(fe), !at && (Y = se && se.onVnodeBeforeMount) && ut(Y, ve, S), Wt(g, !0);
        {
          Ae.ce && Ae.ce._hasShadowRoot() && Ae.ce._injectChildStyle(
            De,
            g.parent ? g.parent.type : void 0
          );
          const rt = g.subTree = Lo(g);
          _(
            null,
            rt,
            R,
            H,
            g,
            B,
            E
          ), S.el = rt.el;
        }
        if (ye && He(ye, B), !at && (Y = se && se.onVnodeMounted)) {
          const rt = S;
          He(
            () => ut(Y, ve, rt),
            B
          );
        }
        (S.shapeFlag & 256 || ve && mn(ve.vnode) && ve.vnode.shapeFlag & 256) && g.a && He(g.a, B), g.isMounted = !0, S = R = H = null;
      }
    };
    g.scope.on();
    const W = g.effect = new Ms(K);
    g.scope.off();
    const O = g.update = W.run.bind(W), oe = g.job = W.runIfDirty.bind(W);
    oe.i = g, oe.id = g.uid, W.scheduler = () => Xi(oe), Wt(g, !0), O();
  }, M = (g, S, R) => {
    S.component = g;
    const H = g.vnode.props;
    g.vnode = S, g.next = null, Pc(g, S.props, H, R), Ec(g, S.children, R), ht(), bo(g), gt();
  }, A = (g, S, R, H, B, E, X, K, W = !1) => {
    const O = g && g.children, oe = g ? g.shapeFlag : 0, Y = S.children, { patchFlag: le, shapeFlag: se } = S;
    if (le > 0) {
      if (le & 128) {
        Z(
          O,
          Y,
          R,
          H,
          B,
          E,
          X,
          K,
          W
        );
        return;
      } else if (le & 256) {
        U(
          O,
          Y,
          R,
          H,
          B,
          E,
          X,
          K,
          W
        );
        return;
      }
    }
    se & 8 ? (oe & 16 && yn(O, B, E), Y !== O && c(R, Y)) : oe & 16 ? se & 16 ? Z(
      O,
      Y,
      R,
      H,
      B,
      E,
      X,
      K,
      W
    ) : yn(O, B, E, !0) : (oe & 8 && c(R, ""), se & 16 && j(
      Y,
      R,
      H,
      B,
      E,
      X,
      K,
      W
    ));
  }, U = (g, S, R, H, B, E, X, K, W) => {
    g = g || dn, S = S || dn;
    const O = g.length, oe = S.length, Y = Math.min(O, oe);
    let le;
    for (le = 0; le < Y; le++) {
      const se = S[le] = W ? wt(S[le]) : pt(S[le]);
      _(
        g[le],
        se,
        R,
        null,
        B,
        E,
        X,
        K,
        W
      );
    }
    O > oe ? yn(
      g,
      B,
      E,
      !0,
      !1,
      Y
    ) : j(
      S,
      R,
      H,
      B,
      E,
      X,
      K,
      W,
      Y
    );
  }, Z = (g, S, R, H, B, E, X, K, W) => {
    let O = 0;
    const oe = S.length;
    let Y = g.length - 1, le = oe - 1;
    for (; O <= Y && O <= le; ) {
      const se = g[O], fe = S[O] = W ? wt(S[O]) : pt(S[O]);
      if (Xt(se, fe))
        _(
          se,
          fe,
          R,
          null,
          B,
          E,
          X,
          K,
          W
        );
      else
        break;
      O++;
    }
    for (; O <= Y && O <= le; ) {
      const se = g[Y], fe = S[le] = W ? wt(S[le]) : pt(S[le]);
      if (Xt(se, fe))
        _(
          se,
          fe,
          R,
          null,
          B,
          E,
          X,
          K,
          W
        );
      else
        break;
      Y--, le--;
    }
    if (O > Y) {
      if (O <= le) {
        const se = le + 1, fe = se < oe ? S[se].el : H;
        for (; O <= le; )
          _(
            null,
            S[O] = W ? wt(S[O]) : pt(S[O]),
            R,
            fe,
            B,
            E,
            X,
            K,
            W
          ), O++;
      }
    } else if (O > le)
      for (; O <= Y; )
        Te(g[O], B, E, !0), O++;
    else {
      const se = O, fe = O, ye = /* @__PURE__ */ new Map();
      for (O = fe; O <= le; O++) {
        const We = S[O] = W ? wt(S[O]) : pt(S[O]);
        We.key != null && ye.set(We.key, O);
      }
      let ve, Ae = 0;
      const De = le - fe + 1;
      let at = !1, rt = 0;
      const Sn = new Array(De);
      for (O = 0; O < De; O++) Sn[O] = 0;
      for (O = se; O <= Y; O++) {
        const We = g[O];
        if (Ae >= De) {
          Te(We, B, E, !0);
          continue;
        }
        let ct;
        if (We.key != null)
          ct = ye.get(We.key);
        else
          for (ve = fe; ve <= le; ve++)
            if (Sn[ve - fe] === 0 && Xt(We, S[ve])) {
              ct = ve;
              break;
            }
        ct === void 0 ? Te(We, B, E, !0) : (Sn[ct - fe] = O + 1, ct >= rt ? rt = ct : at = !0, _(
          We,
          S[ct],
          R,
          null,
          B,
          E,
          X,
          K,
          W
        ), Ae++);
      }
      const uo = at ? Bc(Sn) : dn;
      for (ve = uo.length - 1, O = De - 1; O >= 0; O--) {
        const We = fe + O, ct = S[We], fo = S[We + 1], po = We + 1 < oe ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          fo.el || ba(fo)
        ) : H;
        Sn[O] === 0 ? _(
          null,
          ct,
          R,
          po,
          B,
          E,
          X,
          K,
          W
        ) : at && (ve < 0 || O !== uo[ve] ? ne(ct, R, po, 2) : ve--);
      }
    }
  }, ne = (g, S, R, H, B = null) => {
    const { el: E, type: X, transition: K, children: W, shapeFlag: O } = g;
    if (O & 6) {
      ne(g.component.subTree, S, R, H);
      return;
    }
    if (O & 128) {
      g.suspense.move(S, R, H);
      return;
    }
    if (O & 64) {
      X.move(g, S, R, wn);
      return;
    }
    if (X === ue) {
      l(E, S, R);
      for (let Y = 0; Y < W.length; Y++)
        ne(W[Y], S, R, H);
      l(g.anchor, S, R);
      return;
    }
    if (X === fi) {
      x(g, S, R);
      return;
    }
    if (H !== 2 && O & 1 && K)
      if (H === 0)
        K.persisted && !E[Ze] ? l(E, S, R) : (K.beforeEnter(E), l(E, S, R), He(() => K.enter(E), B));
      else {
        const { leave: Y, delayLeave: le, afterLeave: se } = K, fe = () => {
          g.ctx.isUnmounted ? i(E) : l(E, S, R);
        }, ye = () => {
          const ve = E._isLeaving || !!E[Ze];
          E._isLeaving && E[Ze](
            !0
            /* cancelled */
          ), K.persisted && !ve ? fe() : Y(E, () => {
            fe(), se && se();
          });
        };
        le ? le(E, fe, ye) : ye();
      }
    else
      l(E, S, R);
  }, Te = (g, S, R, H = !1, B = !1) => {
    const {
      type: E,
      props: X,
      ref: K,
      children: W,
      dynamicChildren: O,
      shapeFlag: oe,
      patchFlag: Y,
      dirs: le,
      cacheIndex: se,
      memo: fe
    } = g;
    if (Y === -2 && (B = !1), K != null && (ht(), En(K, null, R, g, !0), gt()), se != null && (S.renderCache[se] = void 0), oe & 256) {
      S.ctx.deactivate(g);
      return;
    }
    const ye = oe & 1 && le, ve = !mn(g);
    let Ae;
    if (ve && (Ae = X && X.onVnodeBeforeUnmount) && ut(Ae, S, g), oe & 6)
      qa(g.component, R, H);
    else {
      if (oe & 128) {
        g.suspense.unmount(R, H);
        return;
      }
      ye && Gt(g, null, S, "beforeUnmount"), oe & 64 ? g.type.remove(
        g,
        S,
        R,
        wn,
        H
      ) : O && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !O.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== ue || Y > 0 && Y & 64) ? yn(
        O,
        S,
        R,
        !1,
        !0
      ) : (E === ue && Y & 384 || !B && oe & 16) && yn(W, S, R), H && ro(g);
    }
    const De = fe != null && se == null;
    (ve && (Ae = X && X.onVnodeUnmounted) || ye || De) && He(() => {
      Ae && ut(Ae, S, g), ye && Gt(g, null, S, "unmounted"), De && (g.el = null);
    }, R);
  }, ro = (g) => {
    const { type: S, el: R, anchor: H, transition: B } = g;
    if (S === ue) {
      za(R, H);
      return;
    }
    if (S === fi) {
      v(g);
      return;
    }
    const E = () => {
      i(R), B && !B.persisted && B.afterLeave && B.afterLeave();
    };
    if (g.shapeFlag & 1 && B && !B.persisted) {
      const { leave: X, delayLeave: K } = B, W = () => X(R, E);
      K ? K(g.el, E, W) : W();
    } else
      E();
  }, za = (g, S) => {
    let R;
    for (; g !== S; )
      R = p(g), i(g), g = R;
    i(S);
  }, qa = (g, S, R) => {
    const { bum: H, scope: B, job: E, subTree: X, um: K, m: W, a: O } = g;
    Po(W), Po(O), H && hl(H), B.stop(), E && (E.flags |= 8, Te(X, g, S, R)), K && He(K, S), He(() => {
      g.isUnmounted = !0;
    }, S);
  }, yn = (g, S, R, H = !1, B = !1, E = 0) => {
    for (let X = E; X < g.length; X++)
      Te(g[X], S, R, H, B);
  }, il = (g) => {
    if (g.shapeFlag & 6)
      return il(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const S = p(g.anchor || g.el), R = S && S[zs];
    return R ? p(R) : S;
  };
  let li = !1;
  const co = (g, S, R) => {
    let H;
    g == null ? S._vnode && (Te(S._vnode, null, null, !0), H = S._vnode.component) : _(
      S._vnode || null,
      g,
      S,
      null,
      null,
      null,
      R
    ), S._vnode = g, li || (li = !0, bo(H), Gs(), li = !1);
  }, wn = {
    p: _,
    um: Te,
    m: ne,
    r: ro,
    mt: T,
    mc: j,
    pc: A,
    pbc: q,
    n: il,
    o: e
  };
  return {
    render: co,
    hydrate: void 0,
    createApp: Cc(co)
  };
}
function di({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Wt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function $c(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function to(e, t, n = !1) {
  const l = e.children, i = t.children;
  if (ee(l) && ee(i))
    for (let o = 0; o < l.length; o++) {
      const s = l[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = wt(i[o]), a.el = s.el), !n && a.patchFlag !== -2 && to(s, a)), a.type === Ql && (a.patchFlag === -1 && (a = i[o] = wt(a)), a.el = s.el), a.type === Oe && !a.el && (a.el = s.el);
    }
}
function Bc(e) {
  const t = e.slice(), n = [0];
  let l, i, o, s, a;
  const r = e.length;
  for (l = 0; l < r; l++) {
    const u = e[l];
    if (u !== 0) {
      if (i = n[n.length - 1], e[i] < u) {
        t[l] = i, n.push(l);
        continue;
      }
      for (o = 0, s = n.length - 1; o < s; )
        a = o + s >> 1, e[n[a]] < u ? o = a + 1 : s = a;
      u < e[n[o]] && (o > 0 && (t[l] = n[o - 1]), n[o] = l);
    }
  }
  for (o = n.length, s = n[o - 1]; o-- > 0; )
    n[o] = s, s = t[s];
  return n;
}
function _a(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : _a(t);
}
function Po(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ba(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ba(t.subTree) : null;
}
const va = (e) => e.__isSuspense;
function Hc(e, t) {
  t && t.pendingBranch ? ee(e) ? t.effects.push(...e) : t.effects.push(e) : Ur(e);
}
const ue = /* @__PURE__ */ Symbol.for("v-fgt"), Ql = /* @__PURE__ */ Symbol.for("v-txt"), Oe = /* @__PURE__ */ Symbol.for("v-cmt"), fi = /* @__PURE__ */ Symbol.for("v-stc"), Vn = [];
let je = null;
function I(e = !1) {
  Vn.push(je = e ? null : []);
}
function Uc() {
  Vn.pop(), je = Vn[Vn.length - 1] || null;
}
let zn = 1;
function Ll(e, t = !1) {
  zn += e, e < 0 && je && t && (je.hasOnce = !0);
}
function ya(e) {
  return e.dynamicChildren = zn > 0 ? je || dn : null, Uc(), zn > 0 && je && je.push(e), e;
}
function N(e, t, n, l, i, o) {
  return ya(
    D(
      e,
      t,
      n,
      l,
      i,
      o,
      !0
    )
  );
}
function Ie(e, t, n, l, i) {
  return ya(
    V(
      e,
      t,
      n,
      l,
      i,
      !0
    )
  );
}
function qn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Xt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const wa = ({ key: e }) => e ?? null, gl = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ce(e) || /* @__PURE__ */ de(e) || re(e) ? { i: Ne, r: e, k: t, f: !!n } : e : null);
function D(e, t = null, n = null, l = 0, i = null, o = e === ue ? 0 : 1, s = !1, a = !1) {
  const r = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && wa(t),
    ref: t && gl(t),
    scopeId: js,
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
    shapeFlag: o,
    patchFlag: l,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Ne
  };
  return a ? (Dl(r, n), o & 128 && e.normalize(r)) : n && (r.shapeFlag |= Ce(n) ? 8 : 16), zn > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  je && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (r.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  r.patchFlag !== 32 && je.push(r), r;
}
const V = Gc;
function Gc(e, t = null, n = null, l = 0, i = null, o = !1) {
  if ((!e || e === ta) && (e = Oe), qn(e)) {
    const a = Bt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Dl(a, n), zn > 0 && !o && je && (a.shapeFlag & 6 ? je[je.indexOf(e)] = a : je.push(a)), a.patchFlag = -2, a;
  }
  if (eu(e) && (e = e.__vccOpts), t) {
    t = Wc(t);
    let { class: a, style: r } = t;
    a && !Ce(a) && (t.class = me(a)), be(r) && (/* @__PURE__ */ ql(r) && !ee(r) && (r = Fe({}, r)), t.style = tt(r));
  }
  const s = Ce(e) ? 1 : va(e) ? 128 : qs(e) ? 64 : be(e) ? 4 : re(e) ? 2 : 0;
  return D(
    e,
    t,
    n,
    l,
    i,
    s,
    o,
    !0
  );
}
function Wc(e) {
  return e ? /* @__PURE__ */ ql(e) || da(e) ? Fe({}, e) : e : null;
}
function Bt(e, t, n = !1, l = !1) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: r } = e, u = t ? jc(i || {}, t) : i, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && wa(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? ee(o) ? o.concat(gl(t)) : [o, gl(t)] : gl(t)
    ) : o,
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
    patchFlag: t && e.type !== ue ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && Bt(e.ssContent),
    ssFallback: e.ssFallback && Bt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return r && l && Kn(
    c,
    r.clone(c)
  ), c;
}
function Il(e = " ", t = 0) {
  return V(Ql, null, e, t);
}
function ae(e = "", t = !1) {
  return t ? (I(), Ie(Oe, null, e)) : V(Oe, null, e);
}
function pt(e) {
  return e == null || typeof e == "boolean" ? V(Oe) : ee(e) ? V(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : qn(e) ? wt(e) : V(Ql, null, String(e));
}
function wt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bt(e);
}
function Dl(e, t) {
  let n = 0;
  const { shapeFlag: l } = e;
  if (t == null)
    t = null;
  else if (ee(t))
    n = 16;
  else if (typeof t == "object")
    if (l & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Dl(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !da(t) ? t._ctx = Ne : i === 3 && Ne && (Ne.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (re(t)) {
    if (l & 65) {
      Dl(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ne }, n = 32;
  } else
    t = String(t), l & 64 ? (n = 16, t = [Il(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function jc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const l = e[n];
    for (const i in l)
      if (i === "class")
        t.class !== l.class && (t.class = me([t.class, l.class]));
      else if (i === "style")
        t.style = tt([t.style, l.style]);
      else if (Vl(i)) {
        const o = t[i], s = l[i];
        s && o !== s && !(ee(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !$l(i) && (t[i] = s);
      } else i !== "" && (t[i] = l[i]);
  }
  return t;
}
function ut(e, t, n, l = null) {
  et(e, t, 7, [
    n,
    l
  ]);
}
const Kc = oa();
let zc = 0;
function qc(e, t, n) {
  const l = e.type, i = (t ? t.appContext : e.appContext) || Kc, o = {
    uid: zc++,
    vnode: e,
    type: l,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new xs(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: pa(l, i),
    emitsOptions: aa(l, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: he,
    // inheritAttrs
    inheritAttrs: l.inheritAttrs,
    // state
    ctx: he,
    data: he,
    props: he,
    attrs: he,
    slots: he,
    refs: he,
    setupState: he,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Ac.bind(null, o), e.ce && e.ce(o), o;
}
let Re = null;
const Zl = () => Re || Ne;
let Pl, Li;
{
  const e = jl(), t = (n, l) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(l), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  Pl = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Re = n
  ), Li = t(
    "__VUE_SSR_SETTERS__",
    (n) => vn = n
  );
}
const ll = (e) => {
  const t = Re;
  return Pl(e), e.scope.on(), () => {
    e.scope.off(), Pl(t);
  };
}, Ro = () => {
  Re && Re.scope.off(), Pl(null);
};
function Sa(e) {
  return e.vnode.shapeFlag & 4;
}
let vn = !1;
function Xc(e, t = !1, n = !1) {
  t && Li(t);
  const { props: l, children: i } = e.vnode, o = Sa(e);
  Dc(e, l, o, t), Tc(e, i, n || t);
  const s = o ? Yc(e, t) : void 0;
  return t && Li(!1), s;
}
function Yc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, _c);
  const { setup: l } = n;
  if (l) {
    ht();
    const i = e.setupContext = l.length > 1 ? Qc(e) : null, o = ll(e), s = Qn(
      l,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = gs(s);
    if (gt(), o(), (a || e.sp) && !mn(e) && Ji(e), a) {
      if (s.then(Ro, Ro), t)
        return s.then((r) => {
          No(e, r);
        }).catch((r) => {
          Zn(r, e, 0);
        });
      e.asyncDep = s;
    } else
      No(e, s);
  } else
    xa(e);
}
function No(e, t, n) {
  re(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : be(t) && (e.setupState = Bs(t)), xa(e);
}
function xa(e, t, n) {
  const l = e.type;
  e.render || (e.render = l.render || mt);
  {
    const i = ll(e);
    ht();
    try {
      bc(e);
    } finally {
      gt(), i();
    }
  }
}
const Jc = {
  get(e, t) {
    return Ee(e, "get", ""), e[t];
  }
};
function Qc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Jc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ei(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Bs(qi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in On)
        return On[n](e);
    },
    has(t, n) {
      return n in t || n in On;
    }
  })) : e.proxy;
}
function Zc(e, t = !0) {
  return re(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function eu(e) {
  return re(e) && "__vccOpts" in e;
}
const J = (e, t) => /* @__PURE__ */ Or(e, t, vn);
function Ca(e, t, n) {
  try {
    Ll(-1);
    const l = arguments.length;
    return l === 2 ? be(t) && !ee(t) ? qn(t) ? V(e, null, [t]) : V(e, t) : V(e, null, t) : (l > 3 ? n = Array.prototype.slice.call(arguments, 2) : l === 3 && qn(n) && (n = [n]), V(e, t, n));
  } finally {
    Ll(1);
  }
}
const tu = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ii;
const To = typeof window < "u" && window.trustedTypes;
if (To)
  try {
    Ii = /* @__PURE__ */ To.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Aa = Ii ? (e) => Ii.createHTML(e) : (e) => e, nu = "http://www.w3.org/2000/svg", lu = "http://www.w3.org/1998/Math/MathML", vt = typeof document < "u" ? document : null, Eo = vt && /* @__PURE__ */ vt.createElement("template"), iu = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, l) => {
    const i = t === "svg" ? vt.createElementNS(nu, e) : t === "mathml" ? vt.createElementNS(lu, e) : n ? vt.createElement(e, { is: n }) : vt.createElement(e);
    return e === "select" && l && l.multiple != null && i.setAttribute("multiple", l.multiple), i;
  },
  createText: (e) => vt.createTextNode(e),
  createComment: (e) => vt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => vt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, l, i, o) {
    const s = n ? n.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Eo.innerHTML = Aa(
        l === "svg" ? `<svg>${e}</svg>` : l === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Eo.content;
      if (l === "svg" || l === "mathml") {
        const r = a.firstChild;
        for (; r.firstChild; )
          a.appendChild(r.firstChild);
        a.removeChild(r);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Tt = "transition", An = "animation", Xn = /* @__PURE__ */ Symbol("_vtc"), Ma = {
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
}, ou = /* @__PURE__ */ Fe(
  {},
  Xs,
  Ma
), su = (e) => (e.displayName = "Transition", e.props = ou, e), au = /* @__PURE__ */ su(
  (e, { slots: t }) => Ca(tc, ru(e), t)
), jt = (e, t = []) => {
  ee(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Oo = (e) => e ? ee(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ru(e) {
  const t = {};
  for (const k in e)
    k in Ma || (t[k] = e[k]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: l,
    duration: i,
    enterFromClass: o = `${n}-enter-from`,
    enterActiveClass: s = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: r = o,
    appearActiveClass: u = s,
    appearToClass: c = a,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: h = `${n}-leave-to`
  } = e, m = cu(i), _ = m && m[0], C = m && m[1], {
    onBeforeEnter: y,
    onEnter: b,
    onEnterCancelled: x,
    onLeave: v,
    onLeaveCancelled: w,
    onBeforeAppear: F = y,
    onAppear: G = b,
    onAppearCancelled: j = x
  } = t, $ = (k, L, T, te) => {
    k._enterCancelled = te, Kt(k, L ? c : a), Kt(k, L ? u : s), T && T();
  }, q = (k, L) => {
    k._isLeaving = !1, Kt(k, d), Kt(k, h), Kt(k, p), L && L();
  }, Q = (k) => (L, T) => {
    const te = k ? G : b, P = () => $(L, k, T);
    jt(te, [L, P]), Vo(() => {
      Kt(L, k ? r : o), bt(L, k ? c : a), Oo(te) || $o(L, l, _, P);
    });
  };
  return Fe(t, {
    onBeforeEnter(k) {
      jt(y, [k]), bt(k, o), bt(k, s);
    },
    onBeforeAppear(k) {
      jt(F, [k]), bt(k, r), bt(k, u);
    },
    onEnter: Q(!1),
    onAppear: Q(!0),
    onLeave(k, L) {
      k._isLeaving = !0;
      const T = () => q(k, L);
      bt(k, d), k._enterCancelled ? (bt(k, p), Uo(k)) : (Uo(k), bt(k, p)), Vo(() => {
        k._isLeaving && (Kt(k, d), bt(k, h), Oo(v) || $o(k, l, C, T));
      }), jt(v, [k, T]);
    },
    onEnterCancelled(k) {
      $(k, !1, void 0, !0), jt(x, [k]);
    },
    onAppearCancelled(k) {
      $(k, !0, void 0, !0), jt(j, [k]);
    },
    onLeaveCancelled(k) {
      q(k), jt(w, [k]);
    }
  });
}
function cu(e) {
  if (e == null)
    return null;
  if (be(e))
    return [pi(e.enter), pi(e.leave)];
  {
    const t = pi(e);
    return [t, t];
  }
}
function pi(e) {
  return Za(e);
}
function bt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Xn] || (e[Xn] = /* @__PURE__ */ new Set())).add(t);
}
function Kt(e, t) {
  t.split(/\s+/).forEach((l) => l && e.classList.remove(l));
  const n = e[Xn];
  n && (n.delete(t), n.size || (e[Xn] = void 0));
}
function Vo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let uu = 0;
function $o(e, t, n, l) {
  const i = e._endId = ++uu, o = () => {
    i === e._endId && l();
  };
  if (n != null)
    return setTimeout(o, n);
  const { type: s, timeout: a, propCount: r } = du(e, t);
  if (!s)
    return l();
  const u = s + "end";
  let c = 0;
  const d = () => {
    e.removeEventListener(u, p), o();
  }, p = (h) => {
    h.target === e && ++c >= r && d();
  };
  setTimeout(() => {
    c < r && d();
  }, a + 1), e.addEventListener(u, p);
}
function du(e, t) {
  const n = window.getComputedStyle(e), l = (m) => (n[m] || "").split(", "), i = l(`${Tt}Delay`), o = l(`${Tt}Duration`), s = Bo(i, o), a = l(`${An}Delay`), r = l(`${An}Duration`), u = Bo(a, r);
  let c = null, d = 0, p = 0;
  t === Tt ? s > 0 && (c = Tt, d = s, p = o.length) : t === An ? u > 0 && (c = An, d = u, p = r.length) : (d = Math.max(s, u), c = d > 0 ? s > u ? Tt : An : null, p = c ? c === Tt ? o.length : r.length : 0);
  const h = c === Tt && /\b(?:transform|all)(?:,|$)/.test(
    l(`${Tt}Property`).toString()
  );
  return {
    type: c,
    timeout: d,
    propCount: p,
    hasTransform: h
  };
}
function Bo(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, l) => Ho(n) + Ho(e[l])));
}
function Ho(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Uo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function fu(e, t, n) {
  const l = e[Xn];
  l && (t = (t ? [t, ...l] : [...l]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Rl = /* @__PURE__ */ Symbol("_vod"), Fa = /* @__PURE__ */ Symbol("_vsh"), pu = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Rl] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Mn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: l }) {
    !t != !n && (l ? t ? (l.beforeEnter(e), Mn(e, !0), l.enter(e)) : l.leave(e, () => {
      Mn(e, !1);
    }) : Mn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Mn(e, t);
  }
};
function Mn(e, t) {
  e.style.display = t ? e[Rl] : "none", e[Fa] = !t;
}
const mu = /* @__PURE__ */ Symbol(""), hu = /(?:^|;)\s*display\s*:/;
function gu(e, t, n) {
  const l = e.style, i = Ce(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (Ce(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          n[a] == null && In(l, a, "");
        }
      else
        for (const s in t)
          n[s] == null && In(l, s, "");
    for (const s in n) {
      s === "display" && (o = !0);
      const a = n[s];
      a != null ? bu(
        e,
        s,
        !Ce(t) && t ? t[s] : void 0,
        a
      ) || In(l, s, a) : In(l, s, "");
    }
  } else if (i) {
    if (t !== n) {
      const s = l[mu];
      s && (n += ";" + s), l.cssText = n, o = hu.test(n);
    }
  } else t && e.removeAttribute("style");
  Rl in e && (e[Rl] = o ? l.display : "", e[Fa] && (l.display = "none"));
}
const Go = /\s*!important$/;
function In(e, t, n) {
  if (ee(n))
    n.forEach((l) => In(e, t, l));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const l = _u(e, t);
    Go.test(n) ? e.setProperty(
      Lt(l),
      n.replace(Go, ""),
      "important"
    ) : e[l] = n;
  }
}
const Wo = ["Webkit", "Moz", "ms"], mi = {};
function _u(e, t) {
  const n = mi[t];
  if (n)
    return n;
  let l = Ve(t);
  if (l !== "filter" && l in e)
    return mi[t] = l;
  l = Gl(l);
  for (let i = 0; i < Wo.length; i++) {
    const o = Wo[i] + l;
    if (o in e)
      return mi[t] = o;
  }
  return t;
}
function bu(e, t, n, l) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ce(l) && n === l;
}
const jo = "http://www.w3.org/1999/xlink";
function Ko(e, t, n, l, i, o = or(t)) {
  l && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(jo, t.slice(6, t.length)) : e.setAttributeNS(jo, t, n) : n == null || o && !ys(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : ze(n) ? String(n) : n
  );
}
function zo(e, t, n, l, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Aa(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, r = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== r || !("_value" in e)) && (e.value = r), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = ys(n) : n == null && a === "string" ? (n = "", s = !0) : a === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function Yt(e, t, n, l) {
  e.addEventListener(t, n, l);
}
function vu(e, t, n, l) {
  e.removeEventListener(t, n, l);
}
const qo = /* @__PURE__ */ Symbol("_vei");
function yu(e, t, n, l, i = null) {
  const o = e[qo] || (e[qo] = {}), s = o[t];
  if (l && s)
    s.value = l;
  else {
    const [a, r] = xu(t);
    if (l) {
      const u = o[t] = Mu(
        l,
        i
      );
      Yt(e, a, u, r);
    } else s && (vu(e, a, s, r), o[t] = void 0);
  }
}
const wu = /(Once|Passive|Capture)$/, Su = /^on:?(?:Once|Passive|Capture)$/;
function xu(e) {
  let t, n;
  for (; (n = e.match(wu)) && !Su.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Lt(e.slice(2)), t];
}
let hi = 0;
const Cu = /* @__PURE__ */ Promise.resolve(), Au = () => hi || (Cu.then(() => hi = 0), hi = Date.now());
function Mu(e, t) {
  const n = (l) => {
    if (!l._vts)
      l._vts = Date.now();
    else if (l._vts <= n.attached)
      return;
    const i = n.value;
    if (ee(i)) {
      const o = l.stopImmediatePropagation;
      l.stopImmediatePropagation = () => {
        o.call(l), l._stopped = !0;
      };
      const s = i.slice(), a = [l];
      for (let r = 0; r < s.length && !l._stopped; r++) {
        const u = s[r];
        u && et(
          u,
          t,
          5,
          a
        );
      }
    } else
      et(
        i,
        t,
        5,
        [l]
      );
  };
  return n.value = e, n.attached = Au(), n;
}
const Xo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Fu = (e, t, n, l, i, o) => {
  const s = i === "svg";
  t === "class" ? fu(e, l, s) : t === "style" ? gu(e, n, l) : Vl(t) ? $l(t) || yu(e, t, n, l, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ku(e, t, l, s)) ? (zo(e, t, l), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ko(e, t, l, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Lu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ce(l))) ? zo(e, Ve(t), l, o, t) : (t === "true-value" ? e._trueValue = l : t === "false-value" && (e._falseValue = l), Ko(e, t, l, s));
};
function ku(e, t, n, l) {
  if (l)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Xo(t) && re(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Xo(t) && Ce(n) ? !1 : t in e;
}
function Lu(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const l = Ve(t);
  return Array.isArray(n) ? n.some((i) => Ve(i) === l) : Object.keys(n).some((i) => Ve(i) === l);
}
const Nl = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ee(t) ? (n) => hl(t, n) : t;
};
function Iu(e) {
  e.target.composing = !0;
}
function Yo(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const hn = /* @__PURE__ */ Symbol("_assign");
function Jo(e, t, n) {
  return t && (e = e.trim()), n && (e = Wl(e)), e;
}
const Mt = {
  created(e, { modifiers: { lazy: t, trim: n, number: l } }, i) {
    e[hn] = Nl(i);
    const o = l || i.props && i.props.type === "number";
    Yt(e, t ? "change" : "input", (s) => {
      s.target.composing || e[hn](Jo(e.value, n, o));
    }), (n || o) && Yt(e, "change", () => {
      e.value = Jo(e.value, n, o);
    }), t || (Yt(e, "compositionstart", Iu), Yt(e, "compositionend", Yo), Yt(e, "change", Yo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: l, trim: i, number: o } }, s) {
    if (e[hn] = Nl(s), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? Wl(e.value) : e.value, r = t ?? "";
    if (a === r)
      return;
    const u = e.getRootNode();
    (u instanceof Document || u instanceof ShadowRoot) && u.activeElement === e && e.type !== "range" && (l && t === n || i && e.value.trim() === r) || (e.value = r);
  }
}, Du = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, l) {
    const i = Bl(t);
    Yt(e, "change", () => {
      const o = Array.prototype.filter.call(e.options, (s) => s.selected).map(
        (s) => n ? Wl(Tl(s)) : Tl(s)
      );
      e[hn](
        e.multiple ? i ? new Set(o) : o : o[0]
      ), e._assigning = !0, el(() => {
        e._assigning = !1;
      });
    }), e[hn] = Nl(l);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Qo(e, t);
  },
  beforeUpdate(e, t, n) {
    e[hn] = Nl(n);
  },
  updated(e, { value: t }) {
    e._assigning || Qo(e, t);
  }
};
function Qo(e, t) {
  const n = e.multiple, l = ee(t);
  if (!(n && !l && !Bl(t))) {
    for (let i = 0, o = e.options.length; i < o; i++) {
      const s = e.options[i], a = Tl(s);
      if (n)
        if (l) {
          const r = typeof a;
          r === "string" || r === "number" ? s.selected = t.some((u) => String(u) === String(a)) : s.selected = ar(t, a) > -1;
        } else
          s.selected = t.has(a);
      else if (Jn(Tl(s), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Tl(e) {
  return "_value" in e ? e._value : e.value;
}
const Pu = ["ctrl", "shift", "alt", "meta"], Ru = {
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
  exact: (e, t) => Pu.some((n) => e[`${n}Key`] && !t.includes(n))
}, Di = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), l = t.join(".");
  return n[l] || (n[l] = (i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const a = Ru[t[s]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  });
}, Nu = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, _l = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), l = t.join(".");
  return n[l] || (n[l] = (i) => {
    if (!("key" in i))
      return;
    const o = Lt(i.key);
    if (t.some(
      (s) => s === o || Nu[s] === o
    ))
      return e(i);
  });
}, Tu = /* @__PURE__ */ Fe({ patchProp: Fu }, iu);
let Zo;
function ka() {
  return Zo || (Zo = Oc(Tu));
}
const es = (...e) => {
  ka().render(...e);
}, no = (...e) => {
  const t = ka().createApp(...e), { mount: n } = t;
  return t.mount = (l) => {
    const i = Ou(l);
    if (!i) return;
    const o = t._component;
    !re(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = n(i, !1, Eu(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
};
function Eu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ou(e) {
  return Ce(e) ? document.querySelector(e) : e;
}
const ti = {
  accent: "#f08a45",
  accentInk: "#fff",
  panel: "#171b22",
  panelAlt: "#222934",
  text: "#e8edf3",
  muted: "#9ca8b5",
  danger: "#ef6666",
  ok: "#62c987"
}, Vu = {
  accent: "#c9682c",
  accentInk: "#fff",
  panel: "#eef1f5",
  panelAlt: "#e2e6ec",
  text: "#1c2430",
  muted: "#5b6572",
  danger: "#c94b4b",
  ok: "#3f8f5f"
}, $u = {
  accent: "#00e5ff",
  accentInk: "#fff",
  panel: "#0a0e1a",
  panelAlt: "#131a2e",
  text: "#dff9ff",
  muted: "#5f7d94",
  danger: "#ff2e63",
  ok: "#00ff9f"
}, Bu = {
  accent: "#d4a017",
  accentInk: "#fff",
  panel: "#1a1712",
  panelAlt: "#26221a",
  text: "#e8dcc0",
  muted: "#8a7d5f",
  danger: "#9a3324",
  ok: "#8fbf3f"
}, Hu = {
  accent: "#14b13b",
  accentInk: "#0c190c",
  panel: "#0a110a",
  panelAlt: "#121e12",
  text: "#4af626",
  muted: "#2e7d32",
  danger: "#d32f2f",
  ok: "#14b13b"
}, Uu = {
  accent: "#d5ff40",
  accentInk: "#14150f",
  panel: "#181916",
  panelAlt: "#232620",
  text: "#edf2e2",
  muted: "#8b9483",
  danger: "#ff5c72",
  ok: "#3ed98c"
}, Gu = {
  default: ti,
  cyberpunk: $u,
  fallout: Bu,
  travelmate: Uu,
  pipboy: Hu
}, St = { ...ti };
let $n = null, Bn = null;
function Pi(e) {
  return `--fil-accent:${e.accent};--fil-accent-ink:${e.accentInk};--fil-panel:${e.panel};--fil-panel-alt:${e.panelAlt};--fil-text:${e.text};--fil-muted:${e.muted};--fil-danger:${e.danger};--fil-ok:${e.ok};`;
}
const Wu = {
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
  pipboy: `
[data-fil-theme="pipboy"] .fil-node-shell [class$="-root"]{
  background-image:repeating-linear-gradient(0deg,rgba(0,0,0,0.2) 0px,rgba(0,0,0,0.2) 1px,transparent 1px,transparent 3px);
  border:1px solid rgba(20,177,59,0.3);
}
[data-fil-theme="pipboy"] .comfy-node-header{text-shadow:0 0 4px rgba(20,177,59,0.75);}
`,
  travelmate: `
[data-fil-theme="travelmate"] .fil-node-shell [class$="-root"]{border:none;box-shadow:none;}
[data-fil-theme="travelmate"] .fil-w-seg.active,
[data-fil-theme="travelmate"] .fil-combo-trigger.open,
[data-fil-theme="travelmate"] .fil-combo-trigger:focus-visible{box-shadow:0 0 6px var(--fil-accent),0 0 14px var(--fil-accent);}
`
}, ju = "--fil-surface-bg:rgba(100,180,220,0.06);--fil-surface-border:rgba(0,255,255,0.18);--fil-surface-radius:20px;--fil-surface-blur:10px;--fil-surface-shadow:0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08);--fil-glass-bg:rgba(50,80,120,0.18);--fil-glass-border:rgba(0,150,200,0.35);--fil-field-radius:10px;--fil-pill-radius:17px;--fil-pill-bg:rgba(255,255,255,0.06);--fil-pill-border:rgba(0,150,200,0.4);", Ku = "--fil-surface-bg:rgba(70,130,170,0.08);--fil-surface-border:rgba(40,120,160,0.28);--fil-surface-radius:20px;--fil-surface-blur:10px;--fil-surface-shadow:0 8px 24px rgba(40,60,90,0.18), inset 0 1px 0 rgba(255,255,255,0.5);--fil-glass-bg:rgba(120,160,200,0.16);--fil-glass-border:rgba(40,120,160,0.3);--fil-field-radius:10px;--fil-pill-radius:17px;--fil-pill-bg:rgba(30,60,90,0.06);--fil-pill-border:rgba(40,120,160,0.35);";
function zu() {
  if (typeof document > "u" || document.getElementById("fil-brand-vars")) return;
  const e = document.createElement("style");
  e.id = "fil-brand-vars", e.textContent = `:root{${Pi(ti)}--fil-radius:8px;--fil-node-pad:6px 8px 14px 8px;--fil-node-gap:4px;--fil-row-pad:4px 6px;--fil-input-border:rgba(240,138,69,0.35);${ju}}
.comfy-theme-light{${Pi(Vu)}--fil-input-border:rgba(201,104,44,0.35);${Ku}}
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
}`, document.head.appendChild(e), $n = document.createElement("style"), $n.id = "fil-theme-vars", document.head.appendChild($n), Bn = document.createElement("style"), Bn.id = "fil-theme-effects", document.head.appendChild(Bn);
}
function La(e) {
  const t = Gu[e] ?? ti;
  Object.assign(St, t), !(typeof document > "u") && (document.documentElement.dataset.filTheme = e, $n && ($n.textContent = e === "default" ? "" : `:root{${Pi(t)}}`), Bn && (Bn.textContent = Wu[e] ?? ""));
}
const qu = {
  class: "fil-color-picker",
  role: "group",
  "aria-label": "Color picker"
}, Xu = { class: "fil-cp-hex-row" }, Yu = {
  class: "fil-cp-presets",
  role: "listbox",
  "aria-label": "Preset colors"
}, Ju = ["aria-selected", "aria-label", "title", "onClick"], Qu = /* @__PURE__ */ we({
  __name: "FilColorPicker",
  props: /* @__PURE__ */ qe({
    presets: {}
  }, {
    modelValue: { default: "#78716c" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = [
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
    ], n = e, l = st(e, "modelValue"), i = J(() => n.presets ?? t);
    function o(k) {
      l.value = k;
    }
    function s(k) {
      return Math.min(1, Math.max(0, k));
    }
    function a(k) {
      const L = /^#?([0-9a-f]{6})$/i.exec(k.trim());
      if (!L) return null;
      const T = parseInt(L[1], 16);
      return [T >> 16 & 255, T >> 8 & 255, T & 255];
    }
    function r(k, L, T) {
      const te = (P) => Math.round(s(P / 255) * 255).toString(16).padStart(2, "0");
      return `#${te(k)}${te(L)}${te(T)}`;
    }
    function u(k, L, T) {
      const te = k / 255, P = L / 255, M = T / 255, A = Math.max(te, P, M), U = Math.min(te, P, M), Z = A - U;
      let ne = 0;
      Z !== 0 && (A === te ? ne = (P - M) / Z % 6 : A === P ? ne = (M - te) / Z + 2 : ne = (te - P) / Z + 4, ne *= 60, ne < 0 && (ne += 360));
      const Te = A === 0 ? 0 : Z / A;
      return [ne, Te, A];
    }
    function c(k, L, T) {
      const te = T * L, P = te * (1 - Math.abs(k / 60 % 2 - 1)), M = T - te;
      let [A, U, Z] = [0, 0, 0];
      return k < 60 ? [A, U, Z] = [te, P, 0] : k < 120 ? [A, U, Z] = [P, te, 0] : k < 180 ? [A, U, Z] = [0, te, P] : k < 240 ? [A, U, Z] = [0, P, te] : k < 300 ? [A, U, Z] = [P, 0, te] : [A, U, Z] = [te, 0, P], [(A + M) * 255, (U + M) * 255, (Z + M) * 255];
    }
    const d = /* @__PURE__ */ ce(0), p = /* @__PURE__ */ ce(0), h = /* @__PURE__ */ ce(0), m = /* @__PURE__ */ ce(l.value);
    function _(k) {
      const L = a(k);
      if (!L) return;
      const [T, te, P] = u(...L);
      d.value = T, p.value = te, h.value = P, m.value = r(...L);
    }
    $e(l, (k) => _(k), { immediate: !0 });
    const C = J(() => r(...c(d.value, p.value, h.value)));
    function y() {
      l.value = C.value, m.value = C.value;
    }
    function b() {
      const k = a(m.value);
      if (!k) {
        m.value = C.value;
        return;
      }
      const [L, T, te] = u(...k);
      d.value = L, p.value = T, h.value = te, l.value = r(...k);
    }
    const x = /* @__PURE__ */ ce(null), v = /* @__PURE__ */ ce(null);
    function w(k) {
      const L = x.value;
      if (!L) return;
      const T = L.getBoundingClientRect();
      p.value = s((k.clientX - T.left) / T.width), h.value = s(1 - (k.clientY - T.top) / T.height), y();
    }
    function F(k) {
      const L = v.value;
      if (!L) return;
      const T = L.getBoundingClientRect();
      d.value = s((k.clientX - T.left) / T.width) * 360, y();
    }
    function G(k) {
      k.preventDefault(), w(k);
      const L = (te) => w(te), T = () => {
        window.removeEventListener("pointermove", L), window.removeEventListener("pointerup", T);
      };
      window.addEventListener("pointermove", L), window.addEventListener("pointerup", T);
    }
    function j(k) {
      k.preventDefault(), F(k);
      const L = (te) => F(te), T = () => {
        window.removeEventListener("pointermove", L), window.removeEventListener("pointerup", T);
      };
      window.addEventListener("pointermove", L), window.addEventListener("pointerup", T);
    }
    const $ = J(() => `hsl(${d.value}, 100%, 50%)`), q = J(() => ({
      left: `${p.value * 100}%`,
      top: `${(1 - h.value) * 100}%`
    })), Q = J(() => ({ left: `${d.value / 360 * 100}%` }));
    return (k, L) => (I(), N("div", qu, [
      D("div", {
        ref_key: "svRef",
        ref: x,
        class: "fil-cp-sv",
        style: tt({ background: $.value }),
        onPointerdown: G
      }, [
        L[1] || (L[1] = D("div", { class: "fil-cp-sv-white" }, null, -1)),
        L[2] || (L[2] = D("div", { class: "fil-cp-sv-black" }, null, -1)),
        D("div", {
          class: "fil-cp-sv-thumb",
          style: tt(q.value)
        }, null, 4)
      ], 36),
      D("div", {
        ref_key: "hueRef",
        ref: v,
        class: "fil-cp-hue",
        onPointerdown: j
      }, [
        D("div", {
          class: "fil-cp-hue-thumb",
          style: tt(Q.value)
        }, null, 4)
      ], 544),
      D("div", Xu, [
        D("span", {
          class: "fil-cp-swatch",
          style: tt({ background: C.value })
        }, null, 4),
        it(D("input", {
          "onUpdate:modelValue": L[0] || (L[0] = (T) => m.value = T),
          class: "fil-cp-hex-input",
          type: "text",
          spellcheck: "false",
          "aria-label": "Hex color",
          onKeydown: _l(b, ["enter"]),
          onBlur: b
        }, null, 544), [
          [Mt, m.value]
        ])
      ]),
      D("div", Yu, [
        (I(!0), N(ue, null, Me(i.value, (T) => (I(), N("button", {
          key: T,
          class: me(["fil-color-swatch", { "is-active": l.value === T }]),
          style: tt({ "--swatch": T }),
          "aria-selected": l.value === T,
          "aria-label": T,
          title: T,
          onClick: (te) => o(T)
        }, null, 14, Ju))), 128))
      ])
    ]));
  }
}), xe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, i] of t)
    n[l] = i;
  return n;
}, Zu = /* @__PURE__ */ xe(Qu, [["__scopeId", "data-v-969386c1"]]), ts = "__fil_color_picker_popup__";
let on = null;
function ed(e) {
  return [
    {
      content: "Change color…",
      callback: (t, n, l) => td(e, l)
    }
  ];
}
function td(e, t) {
  var p;
  on == null || on(), (p = document.getElementById(ts)) == null || p.remove();
  const n = document.createElement("div");
  n.id = ts;
  const l = 176, i = 260, o = t ? Math.min(t.clientX, window.innerWidth - l - 8) : window.innerWidth / 2 - l / 2, s = t ? Math.min(t.clientY, window.innerHeight - i - 8) : window.innerHeight / 2 - i / 2;
  n.style.cssText = `position:fixed;z-index:10001;top:${Math.max(8, s)}px;left:${Math.max(8, o)}px;`, document.body.appendChild(n);
  function a(h) {
    e.color = h, e.__fx && (e.__fx.color = h), e.properties = e.properties || {}, e.properties.fil_custom_color = !0, r();
  }
  function r() {
    es(null, n), n.remove(), document.removeEventListener("mousedown", u, !0), document.removeEventListener("keydown", c, !0), on === r && (on = null);
  }
  function u(h) {
    n.contains(h.target) || r();
  }
  function c(h) {
    h.key === "Escape" && r();
  }
  const d = Ca(Zu, {
    modelValue: e.color ?? "#78716c",
    "onUpdate:modelValue": (h) => a(h)
  });
  es(d, n), document.addEventListener("mousedown", u, !0), document.addEventListener("keydown", c, !0), on = r, el(() => {
    var h;
    (h = n.querySelector(".fil-color-swatch")) == null || h.focus();
  });
}
const nd = "fil";
function Xe(e, t = {}) {
  const l = e.prototype;
  if (l._filStyled) return;
  l._filStyled = !0, t.minSize && (l.minSize = t.minSize), l._filFamily = t.family ?? nd, l._filDescription = t.description ?? "", t.badges && (l.badges = t.badges), l.color = St.accent, l.bgcolor = St.panelAlt;
  const i = l.onNodeCreated;
  l.onNodeCreated = function(...s) {
    const a = i == null ? void 0 : i.apply(this, s);
    return this.color = St.accent, this.bgcolor = St.panelAlt, a;
  }, Object.getOwnPropertyDescriptor(l, "onResize") || Object.defineProperty(l, "onResize", {
    get() {
      if (Object.prototype.hasOwnProperty.call(this, "__filOnResize")) return this.__filOnResize;
      const s = Object.getPrototypeOf(l);
      return s ? s.onResize : void 0;
    },
    set(s) {
      const a = s;
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
  }), l.onDrawTitleBar = function(s, a, r, u, c) {
    var m;
    const d = ((m = globalThis.LiteGraph) == null ? void 0 : m.ROUND_RADIUS) ?? 8, p = !!this.collapsed;
    s.fillStyle = St.panel, s.beginPath(), s.roundRect(0, -a, r[0], a, p ? [d] : [d, d, 0, 0]), s.fill();
    const h = 3;
    s.fillStyle = c || St.accent, s.beginPath(), s.roundRect(0, -a, h, a, p ? [d, 0, 0, d] : [d, 0, 0, 0]), s.fill();
  };
  const o = l.getExtraMenuOptions;
  l.getExtraMenuOptions = function(...s) {
    const a = o == null ? void 0 : o.apply(this, s), r = s[1];
    return Array.isArray(r) && r.push(null, ...ed(this)), a;
  };
}
function ld(e) {
  var l, i, o;
  const t = (l = e.graph) == null ? void 0 : l._nodes;
  if (!t) return;
  for (const s of t)
    s._filFamily && ((i = s.properties) != null && i.fil_custom_color || (s.color = St.accent, s.bgcolor = St.panelAlt));
  const n = e.canvas;
  (o = n == null ? void 0 : n.setDirty) == null || o.call(n, !0, !0);
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Ia;
const ni = (e) => Ia = e, Da = (
  /* istanbul ignore next */
  Symbol()
);
function Ri(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Hn;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Hn || (Hn = {}));
function Pa() {
  const e = Cs(!0), t = e.run(() => /* @__PURE__ */ ce({}));
  let n = [], l = [];
  const i = qi({
    install(o) {
      ni(i), i._a = o, o.provide(Da, i), o.config.globalProperties.$pinia = i, l.forEach((s) => n.push(s)), l = [];
    },
    use(o) {
      return this._a ? n.push(o) : l.push(o), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return i;
}
const Ra = () => {
};
function ns(e, t, n, l = Ra) {
  e.push(t);
  const i = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), l());
  };
  return !n && As() && rr(i), i;
}
function sn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const id = (e) => e(), ls = Symbol(), gi = Symbol();
function Ni(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, l) => e.set(l, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const l = t[n], i = e[n];
    Ri(i) && Ri(l) && e.hasOwnProperty(n) && !/* @__PURE__ */ de(l) && !/* @__PURE__ */ At(l) ? e[n] = Ni(i, l) : e[n] = l;
  }
  return e;
}
const od = (
  /* istanbul ignore next */
  Symbol()
);
function sd(e) {
  return !Ri(e) || !e.hasOwnProperty(od);
}
const { assign: Ot } = Object;
function ad(e) {
  return !!(/* @__PURE__ */ de(e) && e.effect);
}
function rd(e, t, n, l) {
  const { state: i, actions: o, getters: s } = t, a = n.state.value[e];
  let r;
  function u() {
    a || (n.state.value[e] = i ? i() : {});
    const c = /* @__PURE__ */ Rr(n.state.value[e]);
    return Ot(c, o, Object.keys(s || {}).reduce((d, p) => (d[p] = qi(J(() => {
      ni(n);
      const h = n._s.get(e);
      return s[p].call(h, h);
    })), d), {}));
  }
  return r = Na(e, u, t, n, l, !0), r;
}
function Na(e, t, n = {}, l, i, o) {
  let s;
  const a = Ot({ actions: {} }, n), r = { deep: !0 };
  let u, c, d = [], p = [], h;
  const m = l.state.value[e];
  !o && !m && (l.state.value[e] = {});
  let _;
  function C(j) {
    let $;
    u = c = !1, typeof j == "function" ? (j(l.state.value[e]), $ = {
      type: Hn.patchFunction,
      storeId: e,
      events: h
    }) : (Ni(l.state.value[e], j), $ = {
      type: Hn.patchObject,
      payload: j,
      storeId: e,
      events: h
    });
    const q = _ = Symbol();
    el().then(() => {
      _ === q && (u = !0);
    }), c = !0, sn(d, $, l.state.value[e]);
  }
  const y = o ? function() {
    const { state: $ } = n, q = $ ? $() : {};
    this.$patch((Q) => {
      Ot(Q, q);
    });
  } : (
    /* istanbul ignore next */
    Ra
  );
  function b() {
    s.stop(), d = [], p = [], l._s.delete(e);
  }
  const x = (j, $ = "") => {
    if (ls in j)
      return j[gi] = $, j;
    const q = function() {
      ni(l);
      const Q = Array.from(arguments), k = [], L = [];
      function T(M) {
        k.push(M);
      }
      function te(M) {
        L.push(M);
      }
      sn(p, {
        args: Q,
        name: q[gi],
        store: w,
        after: T,
        onError: te
      });
      let P;
      try {
        P = j.apply(this && this.$id === e ? this : w, Q);
      } catch (M) {
        throw sn(L, M), M;
      }
      return P instanceof Promise ? P.then((M) => (sn(k, M), M)).catch((M) => (sn(L, M), Promise.reject(M))) : (sn(k, P), P);
    };
    return q[ls] = !0, q[gi] = $, q;
  }, v = {
    _p: l,
    // _s: scope,
    $id: e,
    $onAction: ns.bind(null, p),
    $patch: C,
    $reset: y,
    $subscribe(j, $ = {}) {
      const q = ns(d, j, $.detached, () => Q()), Q = s.run(() => $e(() => l.state.value[e], (k) => {
        ($.flush === "sync" ? c : u) && j({
          storeId: e,
          type: Hn.direct,
          events: h
        }, k);
      }, Ot({}, r, $)));
      return q;
    },
    $dispose: b
  }, w = /* @__PURE__ */ Ht(v);
  l._s.set(e, w);
  const G = (l._a && l._a.runWithContext || id)(() => l._e.run(() => (s = Cs()).run(() => t({ action: x }))));
  for (const j in G) {
    const $ = G[j];
    if (/* @__PURE__ */ de($) && !ad($) || /* @__PURE__ */ At($))
      o || (m && sd($) && (/* @__PURE__ */ de($) ? $.value = m[j] : Ni($, m[j])), l.state.value[e][j] = $);
    else if (typeof $ == "function") {
      const q = x($, j);
      G[j] = q, a.actions[j] = $;
    }
  }
  return Ot(w, G), Ot(/* @__PURE__ */ pe(w), G), Object.defineProperty(w, "$state", {
    get: () => l.state.value[e],
    set: (j) => {
      C(($) => {
        Ot($, j);
      });
    }
  }), l._p.forEach((j) => {
    Ot(w, s.run(() => j({
      store: w,
      app: l._a,
      pinia: l,
      options: a
    })));
  }), m && o && n.hydrate && n.hydrate(w.$state, m), u = !0, c = !0, w;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function lo(e, t, n) {
  let l, i;
  const o = typeof t == "function";
  typeof e == "string" ? (l = e, i = o ? n : t) : (i = e, l = e.id);
  function s(a, r) {
    const u = Wr();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (u ? Tn(Da, null) : null), a && ni(a), a = Ia, a._s.has(l) || (o ? Na(l, t, i, a) : rd(l, i, a)), a._s.get(l);
  }
  return s.$id = l, s;
}
let Jt = null;
function cd(e) {
  return Jt || (Jt = Pa(), Jt);
}
function io() {
  return Jt || (Jt = Pa()), Jt;
}
const ud = { class: "fil-node-shell" }, dd = /* @__PURE__ */ we({
  __name: "FilNodeShell",
  props: {
    root: {},
    state: {},
    comfyClass: {}
  },
  setup(e) {
    return (t, n) => (I(), N("div", ud, [
      (I(), Ie(mc(e.root), { state: e.state }, null, 8, ["state"]))
    ]));
  }
}), fd = /* @__PURE__ */ xe(dd, [["__scopeId", "data-v-e0e8284c"]]);
function Ti(e, t, n) {
  const l = Math.abs(n) >= Math.abs(t), i = getComputedStyle(e);
  if (l) {
    const o = i.overflowY;
    if ((o === "auto" || o === "scroll") && e.scrollHeight > e.clientHeight + 1) {
      const s = e.scrollTop <= 0, a = e.scrollTop + e.clientHeight >= e.scrollHeight - 1;
      if (n < 0 && !s || n > 0 && !a) return !0;
    }
  } else {
    const o = i.overflowX;
    if ((o === "auto" || o === "scroll") && e.scrollWidth > e.clientWidth + 1) {
      const s = e.scrollLeft <= 0, a = e.scrollLeft + e.clientWidth >= e.scrollWidth - 1;
      if (t < 0 && !s || t > 0 && !a) return !0;
    }
  }
  return !1;
}
function Ta(e, t, n, l = null) {
  let i = e instanceof Element ? e : null;
  for (; i && i !== l; ) {
    if (Ti(i, t, n)) return !0;
    i = i.parentElement;
  }
  return !1;
}
function pd(e, t, n, l) {
  const i = (o) => {
    const s = o.getBoundingClientRect();
    return s.width > 0 && s.height > 0 && e >= s.left && e <= s.right && t >= s.top && t <= s.bottom;
  };
  for (const o of document.querySelectorAll(".dom-widget"))
    if (i(o)) {
      if (Ti(o, n, l)) return o;
      for (const s of o.querySelectorAll("*"))
        if (i(s) && Ti(s, n, l)) return s;
    }
  return null;
}
const md = "__filVueMounted";
function Pt(e, t, n, l) {
  const i = e;
  if (typeof i.addDOMWidget != "function")
    return console.warn(`[FiL_Design_ImageMind] domWidgetHost: node.addDOMWidget not available for "${t}" — ComfyUI core too old?`), null;
  const o = document.createElement("div");
  o.className = "fil-vue-host", o.style.width = "100%", o.style.boxSizing = "border-box", o.style.height = "auto", o[md] = !0, o.addEventListener(
    "wheel",
    (b) => {
      var v, w;
      if (Ta(b.target, b.deltaX, b.deltaY, o.parentElement)) return;
      const x = (w = (v = globalThis.app) == null ? void 0 : v.canvas) == null ? void 0 : w.canvas;
      x instanceof HTMLCanvasElement && (b.preventDefault(), x.dispatchEvent(new WheelEvent("wheel", {
        deltaX: b.deltaX,
        deltaY: b.deltaY,
        deltaZ: b.deltaZ,
        deltaMode: b.deltaMode,
        clientX: b.clientX,
        clientY: b.clientY,
        bubbles: !0,
        cancelable: !0
      })));
    },
    { passive: !1 }
  );
  const s = /* @__PURE__ */ Ht(l.state);
  let a = l.height, r;
  const u = () => {
    const b = o.firstElementChild;
    return !b || b.clientHeight === 0 || (a = Math.ceil(b.scrollHeight / 4) * 4, r && (r.height = a, r.computeSize = () => [o.clientWidth || 380, a])), a;
  };
  r = i.addDOMWidget(t, "custom", o, {
    hideOnZoom: !0,
    getValue: () => s,
    setValue: (b) => {
      if (b && typeof b == "object") {
        const x = b, v = s;
        x.nodeState && typeof x.nodeState == "object" && v.nodeState && Object.assign(v.nodeState, x.nodeState), x.ui && typeof x.ui == "object" && v.ui && Object.assign(v.ui, x.ui);
        for (const [w, F] of Object.entries(x))
          w !== "nodeState" && w !== "ui" && (v[w] = F);
      }
    },
    getHeight: u,
    ...l.onDraw ? { onDraw: l.onDraw } : {}
  });
  const c = no(fd, { root: n, state: s, comfyClass: i.comfyClass ?? "default" }).use(io());
  c.mount(o);
  function d() {
    var q, Q;
    if (u(), !i.computeSize || !i.setSize || !i.size) return;
    const [b, x] = i.size, [, v] = i.computeSize(), [w, F] = i.minSize ?? [0, 0], G = Math.max(b, w), j = a + 35, $ = Math.max(v, j, F);
    G === b && Math.abs($ - x) < 2 || (i.setSize([G, $]), (Q = (q = i.graph) == null ? void 0 : q.setDirtyCanvas) == null || Q.call(q, !0, !0));
  }
  let p = 0;
  const h = new ResizeObserver(() => {
    p || (p = requestAnimationFrame(() => {
      p = 0, d();
    }));
  });
  h.observe(o);
  let m = 20;
  (function b() {
    d(), m-- > 0 && requestAnimationFrame(b);
  })();
  const _ = setInterval(d, 400), C = { widget: r, host: o, app: c, state: s, unmount: y };
  function y() {
    h.disconnect(), p && cancelAnimationFrame(p), clearInterval(_);
    try {
      this.app.unmount();
    } catch (b) {
      console.warn(`[FiL_Design_ImageMind] unmount failed for "${t}":`, b);
    }
    for (; this.host.firstChild; ) this.host.removeChild(this.host.firstChild);
  }
  return C.unmount = y.bind(C), i._filVueApps ?? (i._filVueApps = {}), i._filVueApps[t] = C, C;
}
function Rt(e) {
  const t = e;
  if (t._filVueApps)
    for (const n of Object.keys(t._filVueApps)) {
      try {
        t._filVueApps[n].unmount();
      } catch (l) {
        console.warn(`[FiL_Design_ImageMind] unmount failed for "${n}":`, l);
      }
      delete t._filVueApps[n];
    }
}
function ie(e, t) {
  const n = e;
  if (n.widgets)
    return n.widgets.find((l) => l.name === t);
}
function Ut(e, t) {
  return new Proxy({ ...t }, {
    set(n, l, i) {
      n[l] = i;
      const o = ie(e, String(l));
      return o && (o.value = i), !0;
    }
  });
}
function ge(e, t, n) {
  if (!e) return n;
  const l = e.value;
  return t === "number" && typeof l == "number" && Number.isFinite(l) || t === "boolean" && typeof l == "boolean" || t === "string" && typeof l == "string" ? l : (console.warn(
    `[FiL_Design_ImageMind] widget "${e.name}" had a corrupted value (expected ${t}) — resetting to default. This usually means the workflow was saved with an older version of this node.`
  ), e.value = n, n);
}
const is = 4, hd = {
  info: 3500,
  success: 3e3,
  warning: 5e3,
  error: 6e3
};
let gd = 1;
const cn = /* @__PURE__ */ lo("fil/toast", () => {
  const e = /* @__PURE__ */ ce([]), t = /* @__PURE__ */ ce([]);
  function n(u, c, d = {}) {
    const p = {
      id: gd++,
      level: u,
      text: c == null ? "" : String(c),
      timeout: d.timeout ?? hd[u],
      sticky: !!d.sticky,
      action: d.action ?? null
    };
    return e.value.length < is ? e.value.push(p) : t.value.push(p), p;
  }
  function l(u, c) {
    return n("info", u, c);
  }
  function i(u, c) {
    return n("success", u, c);
  }
  function o(u, c) {
    return n("warning", u, c);
  }
  function s(u, c) {
    return n("error", u, c);
  }
  function a(u) {
    e.value = e.value.filter((c) => c.id !== u), t.value.length > 0 && e.value.length < is && e.value.push(t.value.shift());
  }
  function r() {
    e.value = [], t.value = [];
  }
  return { items: e, queue: t, info: l, success: i, warning: o, error: s, push: n, dismiss: a, dismissAll: r };
});
function _d() {
  var t, n;
  return ((n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.toast) ?? null;
}
function ul(e, t) {
  const n = _d();
  if (n != null && n.addAlert && (e === "info" || e === "success" || e === "warning" || e === "error"))
    try {
      n.addAlert(t);
      return;
    } catch (l) {
      console.warn("[FiL_Design_ImageMind toast] extensionManager.toast failed:", l);
    }
  cn().push(e, t, {});
}
const kt = {
  info: (e) => ul("info", e),
  success: (e) => ul("success", e),
  warning: (e) => ul("warning", e),
  error: (e) => ul("error", e),
  // Direct Pinia access for Vue components that want actions/sticky/toasts.
  infoRich: (e, t) => cn().info(e, t),
  successRich: (e, t) => cn().success(e, t),
  warningRich: (e, t) => cn().warning(e, t),
  errorRich: (e, t) => cn().error(e, t),
  dismissAll: () => cn().dismissAll()
};
function os() {
  var t, n, l, i, o, s, a, r;
  return !!(((i = (l = (n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.setting) == null ? void 0 : l.get) == null ? void 0 : i.call(l, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? ((r = (a = (s = (o = globalThis.app) == null ? void 0 : o.ui) == null ? void 0 : s.settings) == null ? void 0 : a.getSettingValue) == null ? void 0 : r.call(a, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? !0);
}
function ss() {
  function e(l, i, o, s) {
  }
  function t(l, i, o, s) {
    os() && kt.success("Connected");
  }
  function n(l, i) {
    os() && kt.info("Disconnected");
  }
  return { onConnectionsChange: e, onConnect: t, onDisconnect: n };
}
function Ye(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype, n = t.onConnect;
  t.onConnect = function(...i) {
    const { onConnect: o } = ss();
    return o(...i), n == null ? void 0 : n.apply(this, i);
  };
  const l = t.onDisconnect;
  t.onDisconnect = function(...i) {
    const { onDisconnect: o } = ss();
    return o(...i), l == null ? void 0 : l.apply(this, i);
  };
}
const bd = /* @__PURE__ */ It(() => Promise.resolve().then(() => Sm)), vd = {
  id: "FiLSeed",
  register(e, t) {
    Xe(e, {
      minSize: [240, 90],
      family: "value",
      description: "Fixed or randomized seed with copy and reuse buttons.",
      badges: [{ text: "seed" }]
    });
    const l = e.prototype, i = l.onNodeCreated;
    l.onNodeCreated = function(...a) {
      const r = i == null ? void 0 : i.apply(this, a), u = this, c = ie(u, "seed"), d = ge(c, "number", 0);
      c && (c.hidden = !0);
      const p = ie(u, "control_after_generate");
      p && (p.hidden = !0);
      const h = {
        nodeState: {
          mode: "random",
          seed: d
        },
        initialValues: { seed: d },
        ui: {},
        lastRunSeed: null
      };
      return Object.defineProperty(h, "node", { value: u, enumerable: !1, configurable: !0 }), u._filSeedState = h, Pt(u, "fil_seed_view", bd, { state: h, height: 52 }), r;
    };
    const o = l.onConfigure;
    l.onConfigure = function(...a) {
      const r = o == null ? void 0 : o.apply(this, a), u = this, c = u._filSeedState;
      return c && (c.nodeState.seed = ge(ie(u, "seed"), "number", 0)), r;
    };
    const s = l.onRemoved;
    l.onRemoved = function(...a) {
      return Rt(this), s == null ? void 0 : s.apply(this, a);
    }, Ye(e);
  }
}, yd = /* @__PURE__ */ It(() => Promise.resolve().then(() => hh)), wd = {
  id: "FiLProviderLoader",
  register(e, t) {
    Xe(e, {
      // Height kept LOW on purpose — computeSize() (~350px real content)
      // always wins via Math.max in domWidgetHost.ts, so a buffer above it
      // here would just be dead space at the bottom. Width is the actual
      // reason this floor exists (computeSize()'s own width guess ignores it).
      minSize: [280, 250],
      family: "llm",
      description: "Provider and model runtime configuration.",
      badges: [{ text: "API key", color: "#d4a04a", text_color: "#1a1a1a" }]
    });
    const l = e.prototype, i = [
      { name: "provider", kind: "string", fallback: "ollama" },
      { name: "model", kind: "string", fallback: "(loading...)" },
      { name: "temperature", kind: "number", fallback: 0.7 },
      { name: "max_tokens", kind: "number", fallback: 0 },
      { name: "rate_limit_ms", kind: "number", fallback: 100 },
      { name: "max_image_side", kind: "number", fallback: 1024 }
    ], o = l.onNodeCreated;
    l.onNodeCreated = function(...r) {
      const u = o == null ? void 0 : o.apply(this, r), c = this, d = ge(ie(c, "provider"), "string", "ollama"), p = ge(ie(c, "model"), "string", "(loading...)"), h = ge(ie(c, "temperature"), "number", 0.7), m = ge(ie(c, "max_tokens"), "number", 0), _ = ge(ie(c, "rate_limit_ms"), "number", 100), C = ge(ie(c, "max_image_side"), "number", 1024);
      for (const b of ["provider", "model", "refresh_models", "temperature", "max_tokens", "rate_limit_ms", "max_image_side"]) {
        const x = ie(c, b);
        x && (x.hidden = !0);
      }
      const y = {
        nodeState: Ut(c, {
          provider: d,
          model: p,
          temperature: h,
          max_tokens: m,
          rate_limit_ms: _,
          max_image_side: C
        }),
        initialValues: {
          provider: d,
          model: p,
          temperature: h,
          max_tokens: m,
          rate_limit_ms: _,
          max_image_side: C
        },
        ui: {}
      };
      return Object.defineProperty(y, "node", { value: c, enumerable: !1, configurable: !0 }), c._filProviderState = y, Pt(c, "fil_provider_view", yd, { state: y, height: 180 }), u;
    };
    const s = l.onConfigure;
    l.onConfigure = function(...r) {
      const u = s == null ? void 0 : s.apply(this, r), c = this, d = c._filProviderState;
      if (!d) return u;
      const p = d.nodeState;
      for (const { name: h, kind: m, fallback: _ } of i)
        p[h] = ge(ie(c, h), m, _);
      return u;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return Rt(this), a == null ? void 0 : a.apply(this, r);
    }, Ye(e);
  }
}, Sd = /* @__PURE__ */ It(() => Promise.resolve().then(() => $h)), xd = {
  id: "FiLOpticScanner",
  register(e, t) {
    Xe(e, {
      // Height kept LOW on purpose — computeSize() (~660px real content)
      // always wins via Math.max in domWidgetHost.ts, so a buffer above it
      // here would just be dead space at the bottom. Width is the actual
      // reason this floor exists (computeSize()'s own width guess ignores it).
      minSize: [380, 300],
      family: "llm",
      description: "Image analysis or text-idea expansion into a generation prompt.",
      badges: [{ text: "LLM", color: "#7c5cfc", text_color: "#fff" }]
    });
    const l = e.prototype, i = [
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
      "nsfw_art_style",
      "seed",
      "control_after_generate"
    ], o = l.onNodeCreated;
    l.onNodeCreated = function(...r) {
      const u = o == null ? void 0 : o.apply(this, r), c = this, d = {}, p = {};
      for (const m of i) {
        const _ = ie(c, m);
        if (!_) continue;
        const C = m === "seed", b = ge(_, C ? "number" : "string", C ? -1 : "");
        d[m] = b, p[m] = b, _.hidden = !0;
      }
      p.seed_mode = "random";
      for (const m of c.widgets || [])
        m.hidden = !0;
      const h = {
        nodeState: Ut(c, p),
        initialValues: d,
        ui: {},
        lastRunSeed: null
      };
      return Object.defineProperty(h, "node", { value: c, enumerable: !1, configurable: !0 }), c._filScannerSeedState = h, Pt(c, "fil_scanner_view", Sd, { state: h, height: 580 }), u;
    };
    const s = l.onConfigure;
    l.onConfigure = function(...r) {
      const u = s == null ? void 0 : s.apply(this, r), c = this, d = c._filScannerSeedState;
      if (!d) return u;
      for (const p of i) {
        const h = ie(c, p);
        if (!h) continue;
        const m = p === "seed", _ = m ? -1 : "";
        d.nodeState[p] = ge(h, m ? "number" : "string", _), h.hidden = !0;
      }
      for (const p of c.widgets || [])
        p.hidden = !0;
      return u;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return Rt(this), a == null ? void 0 : a.apply(this, r);
    }, Ye(e);
  }
}, Cd = /* @__PURE__ */ It(() => Promise.resolve().then(() => jh)), Ad = {
  id: "FiLNeuroCleaner",
  register(e, t) {
    Xe(e, {
      minSize: [280, 185],
      family: "tool",
      description: "GPU VRAM and loaded model memory cleanup.",
      badges: [{ text: "utility", color: "#888", text_color: "#fff" }]
    });
    const l = e.prototype, i = {
      clean_vram: !0,
      unload_diffusion: !0,
      unload_clip: !1,
      unload_vae: !1,
      unload_control: !1
    }, o = l.onNodeCreated;
    l.onNodeCreated = function(...r) {
      const u = o == null ? void 0 : o.apply(this, r), c = this, d = {}, p = {};
      for (const m of Object.keys(i)) {
        const _ = ie(c, m), C = ge(_, "boolean", i[m]);
        d[m] = C, p[m] = C, _ && (_.hidden = !0);
      }
      const h = { nodeState: Ut(c, d), initialValues: p, ui: {} };
      return c._filCleanerState = h, Pt(c, "fil_cleaner_view", Cd, { state: h, height: 185 }), u;
    };
    const s = l.onConfigure;
    l.onConfigure = function(...r) {
      const u = s == null ? void 0 : s.apply(this, r), c = this, d = c._filCleanerState;
      if (!d) return u;
      for (const p of Object.keys(i))
        d.nodeState[p] = ge(ie(c, p), "boolean", i[p]);
      return u;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return Rt(this), a == null ? void 0 : a.apply(this, r);
    }, Ye(e);
  }
}, Md = /* @__PURE__ */ It(() => Promise.resolve().then(() => Ka)), Fd = {
  id: "FiLUpscaleTileCalc",
  register(e, t) {
    Xe(e, {
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
    const l = e.prototype, i = {
      upscale_factor: 2,
      tile_size: 1024,
      tile_overlap: 64,
      manual_tile_cols: 0,
      manual_tile_rows: 0
    }, o = {
      auto_overlap: !1,
      auto_mode: !1,
      non_square_tiles: !1,
      auto_fix_thin_edges: !1
    }, s = { auto_profile: "Balanced" }, a = l.onNodeCreated;
    l.onNodeCreated = function(...c) {
      const d = a == null ? void 0 : a.apply(this, c), p = this, h = {}, m = {};
      for (const C of Object.keys(i)) {
        const y = ie(p, C);
        if (!y) continue;
        const b = ge(y, "number", i[C]);
        h[C] = b, m[C] = b, y.hidden = !0;
      }
      for (const C of Object.keys(o)) {
        const y = ie(p, C);
        if (!y) continue;
        const b = ge(y, "boolean", o[C]);
        h[C] = b, m[C] = b, y.hidden = !0;
      }
      for (const C of Object.keys(s)) {
        const y = ie(p, C);
        if (!y) continue;
        const b = ge(y, "string", s[C]);
        h[C] = b, m[C] = b, y.hidden = !0;
      }
      const _ = { nodeState: Ut(p, h), initialValues: m, ui: {} };
      return p._filUpscaleState = _, Pt(p, "fil_upscale_view", Md, { state: _, height: 420 }), d;
    };
    const r = l.onConfigure;
    l.onConfigure = function(...c) {
      const d = r == null ? void 0 : r.apply(this, c), p = this, h = p._filUpscaleState;
      if (!h) return d;
      for (const m of Object.keys(i))
        h.nodeState[m] = ge(ie(p, m), "number", i[m]);
      for (const m of Object.keys(o))
        h.nodeState[m] = ge(ie(p, m), "boolean", o[m]);
      for (const m of Object.keys(s))
        h.nodeState[m] = ge(ie(p, m), "string", s[m]);
      return d;
    };
    const u = l.onRemoved;
    l.onRemoved = function(...c) {
      return Rt(this), u == null ? void 0 : u.apply(this, c);
    }, Ye(e);
  }
}, kd = /* @__PURE__ */ It(() => Promise.resolve().then(() => Ka)), Ld = {
  id: "FiLUpscaleSimple",
  register(e, t) {
    Xe(e, {
      // Height is deliberately LOW — see upscale.ts's identical note. Only
      // needs to cover the very first paint; computeSize() (~470px for this
      // panel) always wins via Math.max in domWidgetHost.ts, so a buffer
      // here would just be permanent dead space at the bottom of the node.
      minSize: [340, 300],
      family: "image",
      description: "Upscale + tile an image through a required model — same tiling controls as Advanced.",
      badges: [{ text: "upscale", color: "#62c987", text_color: "#1a1a1a" }]
    });
    const l = e.prototype, i = {
      upscale_factor: 2,
      tile_size: 1024,
      tile_overlap: 64,
      manual_tile_cols: 0,
      manual_tile_rows: 0
    }, o = {
      auto_overlap: !1,
      auto_mode: !1,
      non_square_tiles: !1,
      auto_fix_thin_edges: !1
    }, s = { auto_profile: "Balanced" }, a = l.onNodeCreated;
    l.onNodeCreated = function(...c) {
      const d = a == null ? void 0 : a.apply(this, c), p = this, h = {}, m = {};
      for (const C of Object.keys(i)) {
        const y = ie(p, C);
        if (!y) continue;
        const b = ge(y, "number", i[C]);
        h[C] = b, m[C] = b, y.hidden = !0;
      }
      for (const C of Object.keys(o)) {
        const y = ie(p, C);
        if (!y) continue;
        const b = ge(y, "boolean", o[C]);
        h[C] = b, m[C] = b, y.hidden = !0;
      }
      for (const C of Object.keys(s)) {
        const y = ie(p, C);
        if (!y) continue;
        const b = ge(y, "string", s[C]);
        h[C] = b, m[C] = b, y.hidden = !0;
      }
      const _ = { nodeState: Ut(p, h), initialValues: m, ui: {} };
      return p._filUpscaleState = _, Pt(p, "fil_upscale_simple_view", kd, { state: _, height: 420 }), d;
    };
    const r = l.onConfigure;
    l.onConfigure = function(...c) {
      const d = r == null ? void 0 : r.apply(this, c), p = this, h = p._filUpscaleState;
      if (!h) return d;
      for (const m of Object.keys(i))
        h.nodeState[m] = ge(ie(p, m), "number", i[m]);
      for (const m of Object.keys(o))
        h.nodeState[m] = ge(ie(p, m), "boolean", o[m]);
      for (const m of Object.keys(s))
        h.nodeState[m] = ge(ie(p, m), "string", s[m]);
      return d;
    };
    const u = l.onRemoved;
    l.onRemoved = function(...c) {
      return Rt(this), u == null ? void 0 : u.apply(this, c);
    }, Ye(e);
  }
}, Id = {
  id: "FiLTileAssembly",
  register(e, t) {
    Xe(e, {
      minSize: [270, 200],
      family: "image",
      description: "Recombines processed tiles back into one image, feathered across the real overlap zones.",
      badges: [{ text: "tile", color: "#62c987", text_color: "#1a1a1a" }]
    }), Ye(e);
  }
}, Dd = {
  id: "FiLKSampler",
  register(e, t) {
    Xe(e, {
      minSize: [270, 260],
      family: "sampling",
      description: "Full sampler/scheduler set, passthrough outputs, preview, HighRes-fix script.",
      badges: [{ text: "sampler", color: "#7aa2f7", text_color: "#0b0e14" }]
    }), Ye(e);
  }
}, Pd = /* @__PURE__ */ It(() => Promise.resolve().then(() => cg)), Ei = {
  upscale_by: 1.25,
  denoise: 0.56,
  iterations: 1,
  strength: 1,
  seed: 0,
  hires_steps: 12
}, Oi = {
  upscale_type: "latent",
  hires_ckpt_name: "(use same)",
  latent_upscaler: "nearest-exact",
  pixel_upscaler: "",
  control_net_name: "",
  preprocessor: "none"
}, Vi = {
  use_same_seed: !0,
  use_controlnet: !1
}, Rd = [
  ...Object.keys(Ei),
  ...Object.keys(Oi),
  ...Object.keys(Vi)
], Nd = {
  id: "FiLHighResFix",
  register(e, t) {
    Xe(e, {
      // Height kept LOW on purpose — computeSize() (~430px real content)
      // always wins via Math.max in domWidgetHost.ts, so a buffer above it
      // here would just be dead space at the bottom. Width is the actual
      // reason this floor exists (computeSize()'s own width guess ignores it).
      minSize: [320, 300],
      family: "sampling",
      description: "Latent/pixel upscale + re-sample settings, packed into a script for FiLKSampler.",
      badges: [{ text: "hires", color: "#bb9af7", text_color: "#0b0e14" }]
    });
    const l = e.prototype, i = (r, u) => {
      for (const c of Object.keys(Ei))
        u[c] = ge(ie(r, c), "number", Ei[c]);
      for (const c of Object.keys(Oi))
        u[c] = ge(ie(r, c), "string", Oi[c]);
      for (const c of Object.keys(Vi))
        u[c] = ge(ie(r, c), "boolean", Vi[c]);
    }, o = l.onNodeCreated;
    l.onNodeCreated = function(...r) {
      const u = o == null ? void 0 : o.apply(this, r), c = this, d = {};
      i(c, d);
      for (const m of Rd) {
        const _ = ie(c, m);
        _ && (_.hidden = !0);
      }
      const p = ie(c, "control_after_generate");
      p && (p.hidden = !0, p.value = "fixed"), d.seed_mode = "random";
      const h = {
        nodeState: Ut(c, d),
        initialValues: { ...d },
        ui: {},
        lastRunSeed: null
      };
      return Object.defineProperty(h, "node", { value: c, enumerable: !1, configurable: !0 }), c._filHiResFixState = h, Pt(c, "fil_hiresfix_view", Pd, { state: h, height: 420 }), u;
    };
    const s = l.onConfigure;
    l.onConfigure = function(...r) {
      const u = s == null ? void 0 : s.apply(this, r), c = this, d = c._filHiResFixState;
      return d && i(c, d.nodeState), u;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return Rt(this), a == null ? void 0 : a.apply(this, r);
    }, Ye(e);
  }
}, Td = {
  id: "FiLNoiseControl",
  register(e, t) {
    Xe(e, {
      minSize: [270, 220],
      family: "sampling",
      description: "RNG source + seed-variation script for FiLKSampler.",
      badges: [{ text: "script", color: "#7aa2f7", text_color: "#0b0e14" }]
    }), Ye(e);
  }
}, Ed = {
  id: "FiLImageDecomposer",
  register(e, t) {
    Xe(e, {
      minSize: [300, 240],
      family: "llm",
      description: "Decomposes image or prompt into distinct visual layers.",
      badges: [{ text: "vision", color: "#bb9af7", text_color: "#0b0e14" }]
    }), Ye(e);
  }
}, Od = /* @__PURE__ */ It(() => Promise.resolve().then(() => pg)), as = [
  "fusion_mode",
  "img_weight_1",
  "img_focus_1",
  "img_weight_2",
  "img_focus_2",
  "img_weight_3",
  "img_focus_3",
  "img_weight_4",
  "img_focus_4",
  "style_1",
  "weight_1",
  "style_2",
  "weight_2",
  "style_3",
  "weight_3"
];
function _i(e) {
  if (!e) return;
  const t = e._filStyleMixerState;
  if (t != null && t.ui && (t.ui.slotVersion = (t.ui.slotVersion ?? 0) + 1), !e._allInputs && Array.isArray(e.inputs) && (e._allInputs = [...e.inputs]), !e._allInputs) return;
  const n = (s) => {
    const a = e._allInputs.find((r) => r && r.name === s);
    return !!(a && a.link != null);
  }, l = n("image_2"), i = n("image_3"), o = /* @__PURE__ */ new Set();
  o.add("config"), o.add("fusion_mode"), o.add("base_prompt"), o.add("image_1"), o.add("image_2"), l && o.add("image_3"), i && o.add("image_4"), e.inputs = e._allInputs.filter((s) => s && o.has(s.name)), typeof e.setSize == "function" && typeof e.computeSize == "function" && e.setSize(e.computeSize()), typeof e.setDirtyCanvas == "function" && e.setDirtyCanvas(!0, !0);
}
const Vd = {
  id: "FiLStyleMixer",
  register(e, t) {
    Xe(e, {
      minSize: [380, 320],
      family: "base",
      description: "Blends visual styles and reference images with weighted influence sliders and optional Vision LLM fusion.",
      badges: [{ text: "styles", color: "#e0af68", text_color: "#0b0e14" }]
    });
    const l = e.prototype, i = l.onNodeCreated;
    l.onNodeCreated = function(...r) {
      const u = i == null ? void 0 : i.apply(this, r), c = this, d = {}, p = {};
      for (const _ of as) {
        const C = ie(c, _);
        if (!C) continue;
        const y = _.includes("weight") ? "number" : "string", x = ge(C, y, y === "number" ? 0.5 : "(None)");
        d[_] = x, p[_] = x, C.hidden = !0;
      }
      const h = {
        nodeState: Ut(c, p),
        initialValues: d,
        ui: { slotVersion: 0 }
      };
      Object.defineProperty(h, "node", { value: c, enumerable: !1, configurable: !0 });
      const m = /* @__PURE__ */ Ht(h);
      return c._filStyleMixerState = m, Pt(c, "fil_style_mixer_view", Od, { state: m, height: 480 }), _i(this), u;
    };
    const o = l.onConfigure;
    l.onConfigure = function(...r) {
      const u = o == null ? void 0 : o.apply(this, r), c = this, d = c._filStyleMixerState;
      if (d)
        for (const p of as) {
          const h = ie(c, p);
          if (!h) continue;
          const m = p.includes("weight") ? "number" : "string", _ = m === "number" ? 0.5 : "(None)";
          d.nodeState[p] = ge(h, m, _);
        }
      return _i(this), u;
    };
    const s = l.onConnectionsChange;
    l.onConnectionsChange = function(r, u, c, d, p) {
      const h = s == null ? void 0 : s.apply(this, [r, u, c, d, p]);
      return (r === 1 || (r == null ? void 0 : r.name) === "input") && _i(this), h;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return Rt(this), a == null ? void 0 : a.apply(this, r);
    }, Ye(e);
  }
}, $d = /* @__PURE__ */ It(() => Promise.resolve().then(() => kg)), rs = [
  "method",
  "strength",
  "saturate",
  "temperature",
  "tint",
  "preserve_skin"
], Bd = {
  id: "FiLColorWizard",
  register(e, t) {
    Xe(e, {
      minSize: [320, 310],
      family: "image",
      description: "Automatic color correction: white balance, LAB contrast, and skin protection with quick presets.",
      badges: [{ text: "color", color: "#f7768e", text_color: "#0b0e14" }]
    });
    const l = e.prototype, i = l.onNodeCreated;
    l.onNodeCreated = function(...a) {
      const r = i == null ? void 0 : i.apply(this, a), u = this, c = {}, d = {};
      for (const m of rs) {
        const _ = ie(u, m);
        if (!_) continue;
        const C = m === "preserve_skin" ? "boolean" : m === "method" ? "string" : "number", b = ge(_, C, C === "boolean" ? !1 : C === "number" ? 0 : "Full Auto");
        c[m] = b, d[m] = b, _.hidden = !0;
      }
      const p = {
        nodeState: Ut(u, d),
        initialValues: c,
        ui: {}
      };
      Object.defineProperty(p, "node", { value: u, enumerable: !1, configurable: !0 });
      const h = /* @__PURE__ */ Ht(p);
      return u._filColorWizardState = h, Pt(u, "fil_color_wizard_view", $d, { state: h, height: 320 }), r;
    };
    const o = l.onConfigure;
    l.onConfigure = function(...a) {
      const r = o == null ? void 0 : o.apply(this, a), u = this, c = u._filColorWizardState;
      if (c)
        for (const d of rs) {
          const p = ie(u, d);
          if (!p) continue;
          const h = d === "preserve_skin" ? "boolean" : d === "method" ? "string" : "number", m = h === "boolean" ? !1 : h === "number" ? 0 : "Full Auto";
          c.nodeState[d] = ge(p, h, m);
        }
      return r;
    };
    const s = l.onRemoved;
    l.onRemoved = function(...a) {
      return Rt(this), s == null ? void 0 : s.apply(this, a);
    }, Ye(e);
  }
}, Hd = [
  vd,
  wd,
  xd,
  Ad,
  Fd,
  Ld,
  Id,
  Dd,
  Nd,
  Td,
  Ed,
  Vd,
  Bd
], Ea = Object.fromEntries(
  Hd.map((e) => [e.id, e])
), dl = /* @__PURE__ */ ce({});
let cs = !1;
const El = /* @__PURE__ */ lo("fil/help", () => {
  const e = /* @__PURE__ */ ce(null);
  function t(a) {
    for (const [r, u] of Object.entries(a))
      dl.value[r] = u;
  }
  function n() {
    cs || (cs = !0, Promise.resolve().then(() => Ig).then(({ HELP_DEFAULTS: a }) => t(a)).catch((a) => console.warn("[FiL_Design_ImageMind] help defaults import failed:", a)));
  }
  function l(a) {
    return dl.value[a];
  }
  function i() {
    return Object.values(dl.value);
  }
  function o(a) {
    n(), e.value = a;
  }
  function s() {
    e.value = null;
  }
  return {
    registry: dl,
    activeHelpId: e,
    ensureHelpDefaultsInjected: n,
    registerAll: t,
    get: l,
    list: i,
    value_open: o,
    value_close: s
  };
}), Ud = {
  // Common actions
  close: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>',
  info: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>',
  search: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>',
  warning: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>',
  chevronRight: '<svg viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>',
  // Provider logos (simple letter-based SVGs, no background — brand-coloured glyphs)
  "provider-ollama": '<svg viewBox="0 0 16 16" fill="none"><text x="8" y="12" text-anchor="middle" font-size="12" font-weight="700" fill="#8b7bb5" font-family="sans-serif">O</text></svg>',
  "provider-lmstudio": '<svg viewBox="0 0 16 16" fill="none"><text x="8" y="11" text-anchor="middle" font-size="9" font-weight="700" fill="#5aa0e9" font-family="sans-serif">LM</text></svg>',
  "provider-openai": '<svg viewBox="0 0 16 16" fill="none"><text x="8" y="11" text-anchor="middle" font-size="9" font-weight="700" fill="#1abb95" font-family="sans-serif">AI</text></svg>',
  "provider-groq": '<svg viewBox="0 0 16 16" fill="none"><text x="8" y="12" text-anchor="middle" font-size="12" font-weight="700" fill="#f97316" font-family="sans-serif">G</text></svg>',
  "provider-google": '<svg viewBox="0 0 16 16" fill="none"><text x="8" y="11" text-anchor="middle" font-size="10" font-weight="700" fill="#5a95f4" font-family="sans-serif">G+</text></svg>',
  "provider-openrouter": '<svg viewBox="0 0 16 16" fill="none"><text x="8" y="11" text-anchor="middle" font-size="9" font-weight="700" fill="#9b7cf6" font-family="sans-serif">OR</text></svg>',
  "provider-cloudflare": '<svg viewBox="0 0 16 16" fill="none"><text x="8" y="11" text-anchor="middle" font-size="9" font-weight="700" fill="#f38020" font-family="sans-serif">CF</text></svg>'
};
function Oa(e) {
  return Ud[e];
}
const Gd = ["title", "aria-label", "innerHTML"], Wd = /* @__PURE__ */ we({
  name: "FilIcon",
  __name: "FilIcon",
  props: {
    name: {},
    size: { default: 16 },
    title: {}
  },
  setup(e) {
    return (t, n) => (I(), N("span", {
      class: "fil-icon",
      style: tt({ width: e.size + "px", height: e.size + "px" }),
      title: e.title,
      role: "img",
      "aria-label": e.title ?? e.name,
      innerHTML: f(Oa)(e.name)
    }, null, 12, Gd));
  }
}), tn = /* @__PURE__ */ xe(Wd, [["__scopeId", "data-v-dfb78d9f"]]), jd = ["aria-label"], Kd = { class: "fil-modal-header" }, zd = { class: "fil-modal-title" }, qd = { class: "fil-modal-body" }, Xd = /* @__PURE__ */ we({
  __name: "FilModal",
  props: /* @__PURE__ */ qe({
    title: {},
    width: { default: "520px" },
    closeOnEsc: { type: Boolean, default: !0 },
    closeOnBackdrop: { type: Boolean, default: !0 }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: /* @__PURE__ */ qe(["close"], ["update:open"]),
  setup(e, { emit: t }) {
    const n = e, l = st(e, "open"), i = t, o = /* @__PURE__ */ ce(null), s = /* @__PURE__ */ ce(null);
    function a() {
      l.value = !1, i("close");
    }
    function r(p) {
      n.closeOnBackdrop && p.target === p.currentTarget && a();
    }
    function u(p) {
      n.closeOnEsc && p.key === "Escape" && a(), p.key === "Tab" && c(p);
    }
    function c(p) {
      if (!o.value) return;
      const h = d(o.value);
      if (!h.length) {
        p.preventDefault();
        return;
      }
      const m = h[0], _ = h[h.length - 1];
      p.shiftKey ? document.activeElement === m && (p.preventDefault(), _.focus()) : document.activeElement === _ && (p.preventDefault(), m.focus());
    }
    function d(p) {
      return Array.from(
        p.querySelectorAll(
          'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((h) => !h.disabled && h.offsetParent !== null);
    }
    return $e(
      l,
      (p) => {
        var h;
        p ? (s.value = document.activeElement, el(() => {
          var _;
          (_ = (o.value ? d(o.value) : [])[0] || o.value) == null || _.focus();
        })) : ((h = s.value) == null || h.focus(), s.value = null);
      }
    ), nl(() => {
      document.addEventListener("keydown", u);
    }), Qi(() => {
      document.removeEventListener("keydown", u);
    }), (p, h) => (I(), Ie(Qr, { to: "body" }, [
      V(au, { name: "fil-modal" }, {
        default: $t(() => [
          l.value ? (I(), N("div", {
            key: 0,
            ref_key: "modalRef",
            ref: o,
            class: "fil-modal-backdrop",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title || "Dialog",
            onClick: r
          }, [
            D("div", {
              class: "fil-modal-panel",
              style: tt({ maxWidth: e.width })
            }, [
              D("div", Kd, [
                D("span", zd, z(e.title), 1),
                D("button", {
                  class: "fil-modal-close",
                  title: "Close",
                  onClick: a
                }, [
                  V(tn, {
                    name: "close",
                    size: 14
                  })
                ])
              ]),
              D("div", qd, [
                gc(p.$slots, "default", {}, void 0, !0)
              ])
            ], 4)
          ], 8, jd)) : ae("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), gn = /* @__PURE__ */ xe(Xd, [["__scopeId", "data-v-0b20f2bd"]]), Yd = { class: "fil-help-title" }, Jd = {
  key: 0,
  class: "fil-help-body"
}, Qd = { key: 1 }, Zd = {
  key: 2,
  class: "fil-help-table"
}, ef = {
  key: 3,
  class: "fil-help-code"
}, tf = {
  key: 1,
  class: "fil-help-empty"
}, nf = /* @__PURE__ */ we({
  __name: "FilHelpPopup",
  setup(e) {
    const t = El(), n = J(() => {
      const i = t.activeHelpId;
      return i ? t.get(i) ?? null : null;
    }), l = J({
      get: () => t.activeHelpId !== null,
      set: (i) => {
        i || t.value_close();
      }
    });
    return $e(n, (i) => {
      i || t.value_close();
    }), (i, o) => (I(), Ie(gn, {
      open: l.value,
      "onUpdate:open": o[0] || (o[0] = (s) => l.value = s),
      title: "FiL LLM Help",
      width: "600px",
      onClose: o[1] || (o[1] = (s) => f(t).value_close())
    }, {
      default: $t(() => {
        var s;
        return [
          n.value ? (I(), N(ue, { key: 0 }, [
            D("h2", Yd, z(n.value.title), 1),
            n.value.body ? (I(), N("p", Jd, z(n.value.body), 1)) : ae("", !0),
            (s = n.value.bullets) != null && s.length ? (I(), N("ul", Qd, [
              (I(!0), N(ue, null, Me(n.value.bullets, (a, r) => (I(), N("li", {
                key: r,
                class: "fil-help-bullet"
              }, [
                V(tn, {
                  name: "chevronRight",
                  size: 12
                }),
                D("span", null, z(a), 1)
              ]))), 128))
            ])) : ae("", !0),
            n.value.table ? (I(), N("table", Zd, [
              D("thead", null, [
                D("tr", null, [
                  (I(!0), N(ue, null, Me(n.value.table.headers, (a) => (I(), N("th", { key: a }, z(a), 1))), 128))
                ])
              ]),
              D("tbody", null, [
                (I(!0), N(ue, null, Me(n.value.table.rows, (a, r) => (I(), N("tr", { key: r }, [
                  (I(!0), N(ue, null, Me(a, (u, c) => (I(), N("td", { key: c }, z(u), 1))), 128))
                ]))), 128))
              ])
            ])) : ae("", !0),
            n.value.code ? (I(), N("pre", ef, [
              D("code", null, z(n.value.code), 1)
            ])) : ae("", !0)
          ], 64)) : (I(), N("p", tf, "No help available for this node."))
        ];
      }),
      _: 1
    }, 8, ["open"]));
  }
}), lf = /* @__PURE__ */ xe(nf, [["__scopeId", "data-v-536c1547"]]);
let bi = null;
function of(e) {
  if (bi) return;
  const t = document.createElement("div");
  t.id = "__fil_help_popup_host", document.body.appendChild(t), bi = no(lf).use(io()), bi.mount(t), console.info("[FiL_Design_ImageMind] help popup mounted");
}
const sf = "FiL_Design_ImageMind.Shortcuts.Enabled", af = "__cheatsheet__", rf = [
  "#comfy-search-input",
  'input[name="search"]',
  'input[aria-label="Search"]',
  "#search-input",
  'input[placeholder*="search" i]'
], cf = [
  {
    id: "FiL_Design_ImageMind.helpCheatsheet",
    label: "FiL_Design_ImageMind — Keyboard cheatsheet",
    icon: "?",
    function: $i
  },
  {
    id: "FiL_Design_ImageMind.focusSearch",
    label: "FiL_Design_ImageMind — Focus add-node search",
    icon: "/",
    function: Va
  }
], uf = [
  { commandId: "FiL_Design_ImageMind.helpCheatsheet", combo: { key: "?", shift: !0 } },
  // NB: Ctrl+Shift+K is reserved by core (Workspace.ToggleBottomPanel) — binding it
  // via the native API throws a duplicate-keybinding error, so we don't register it.
  { commandId: "FiL_Design_ImageMind.focusSearch", combo: { key: "/" } }
];
function df(e) {
  if (!e || typeof e != "object") return !1;
  const t = String(e.tagName || "").toLowerCase();
  return t === "input" || t === "textarea" || t === "select" || e.isContentEditable === !0;
}
function ff() {
  for (const e of rf) {
    const t = document.querySelector(e);
    if (t) return t;
  }
  return null;
}
function $i() {
  var t;
  const e = El();
  e.ensureHelpDefaultsInjected(), (t = e.value_open) == null || t.call(e, af);
}
function Va() {
  const e = ff();
  if (!e) {
    kt.info("ComfyUI search field not found");
    return;
  }
  try {
    e.focus(), "select" in e && e.select();
  } catch {
  }
}
function pf(e) {
  if (!!e.extensionManager) {
    console.info("[FiL_Design_ImageMind] shortcuts registered via native commands API");
    return;
  }
  window.addEventListener("keydown", (n) => mf(n, e), !0), console.info("[FiL_Design_ImageMind] shortcuts installed (fallback keydown handler)");
}
function mf(e, t) {
  var o, s, a, r, u, c, d, p, h;
  let n = !0;
  try {
    n = !!(((r = (a = (s = (o = globalThis.app) == null ? void 0 : o.extensionManager) == null ? void 0 : s.setting) == null ? void 0 : a.get) == null ? void 0 : r.call(a, sf, !0)) ?? !0);
  } catch {
  }
  if (!n) return;
  const l = e.target, i = df(l);
  if (e.key === "Escape") {
    try {
      const m = El();
      (u = m.value_close) == null || u.call(m);
    } catch {
    }
    i && ((c = l.blur) == null || c.call(l)), (d = e.preventDefault) == null || d.call(e);
    return;
  }
  if (!i) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "K" || e.key === "k")) {
      $i(), e.preventDefault();
      return;
    }
    if (e.key === "?" || e.shiftKey && e.key === "/") {
      if (e.shiftKey) $i();
      else {
        const m = t.canvas, _ = (m == null ? void 0 : m.selected_nodes) ?? {}, C = Object.values(_).filter(Boolean);
        if (C.length === 1) {
          const y = ((p = C[0]) == null ? void 0 : p.comfyClass) ?? "default", b = El();
          b.ensureHelpDefaultsInjected(), (h = b.value_open) == null || h.call(b, y);
        } else
          kt.info("Select exactly one FiL_Design_ImageMind node, then press ?");
      }
      e.preventDefault();
      return;
    }
    e.key === "/" && !e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey && (Va(), e.preventDefault());
  }
}
function hf(e) {
  pf(e);
}
let us = !1;
function gf() {
  us || typeof window > "u" || (us = !0, window.addEventListener(
    "wheel",
    (e) => {
      if (e.ctrlKey || e.metaKey) return;
      if (Ta(e.target, e.deltaX, e.deltaY)) {
        e.stopImmediatePropagation();
        return;
      }
      if (!(e.target instanceof HTMLCanvasElement)) return;
      const t = pd(e.clientX, e.clientY, e.deltaX, e.deltaY);
      if (!t) return;
      e.preventDefault(), e.stopImmediatePropagation();
      const n = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? t.clientHeight : 1;
      t.scrollBy({ left: e.deltaX * n, top: e.deltaY * n });
    },
    { capture: !0, passive: !1 }
  ), console.info("[FiL_Design_ImageMind] global scroll guard installed"));
}
const $a = "FiL_Design_ImageMind", _n = "🎨 FiL ImageMind", yt = "/fil_design_imagemind", nn = `[${$a}]`, _f = `${$a}.UI`;
async function Ba(e) {
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
function Ha() {
  var t;
  const e = globalThis;
  if ((t = e.api) != null && t.fetchApi) return (n, l) => e.api.fetchApi(n, l);
  if (e.fetch) return e.fetch.bind(globalThis);
  throw new Error(`${nn} no HTTP transport (api.fetchApi or window.fetch undefined)`);
}
async function Dn(e) {
  const t = await Ha()(e);
  return Ba(t);
}
async function bl(e, t) {
  const n = await Ha()(e, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  });
  return Ba(n);
}
const an = {
  loadAccounts: () => Dn(`${yt}/auth`),
  saveAccounts: (e) => bl(`${yt}/auth`, {
    accounts: e
  }),
  loadModels: (e, t = !1) => Dn(`${yt}/models/${encodeURIComponent(e)}${t ? "?force=1" : ""}`),
  probe: (e, t = "") => bl(`${yt}/provider_probe`, { provider: e, model: t }),
  listProviders: () => Dn(`${yt}/providers`),
  saveCompareImage: (e) => bl(`${yt}/compare/save`, { image: e }),
  nodeContracts: () => Dn(`${yt}/node_contracts`)
}, bf = 3e5, vf = ["ollama", "lmstudio", "openai", "google", "groq", "openrouter", "cloudflare"], un = vf, oo = /* @__PURE__ */ lo("fil/providers", () => {
  const e = /* @__PURE__ */ ce({}), t = /* @__PURE__ */ ce({}), n = /* @__PURE__ */ ce({}), l = /* @__PURE__ */ ce({}), i = /* @__PURE__ */ ce(null), o = J(() => Object.fromEntries(
    Object.entries(e.value).filter(([, y]) => (y == null ? void 0 : y.configured) || (y == null ? void 0 : y.account_id) || (y == null ? void 0 : y.base_url))
  ));
  async function s() {
    try {
      const y = await an.loadAccounts();
      e.value = y.accounts || {}, i.value = null;
    } catch (y) {
      i.value = y instanceof Error ? y.message : String(y);
    }
  }
  async function a(y, b) {
    try {
      const x = await an.saveAccounts({ [y]: b });
      e.value = x.accounts || {}, i.value = null, c(y, !0);
    } catch (x) {
      throw i.value = x instanceof Error ? x.message : String(x), x;
    }
  }
  async function r(y) {
    const b = await an.saveAccounts({
      [y]: { delete: !0 }
    });
    e.value = b.accounts || {};
  }
  async function u(y) {
    await a(y, {});
    try {
      await r(y);
    } catch (b) {
      i.value = b instanceof Error ? b.message : String(b);
    }
  }
  async function c(y, b = !1) {
    const x = t.value[y];
    if (x && !b && !x.error && x.cachedAt > 0 && Date.now() - x.cachedAt < bf)
      return x.list;
    x ? x.loading = !0 : t.value[y] = { list: [], visionModels: [], cachedAt: 0, loading: !0 };
    try {
      const v = await an.loadModels(y, b), w = v.models || [];
      return t.value[y] = {
        list: w,
        visionModels: v.vision_models || [],
        cachedAt: Date.now(),
        loading: !1
      }, v.status && v.status !== "available" && (t.value[y].error = v.message || v.status), w;
    } catch (v) {
      const w = v instanceof Error ? v.message : String(v);
      throw t.value[y] = {
        list: [],
        visionModels: [],
        cachedAt: 0,
        loading: !1,
        error: w
      }, i.value = w, v;
    }
  }
  function d(y) {
    const b = t.value[y];
    if (!(b != null && b.cachedAt)) return null;
    const x = Date.now() - b.cachedAt, v = Math.floor(x / 1e3);
    return v < 60 ? `${v}s` : v < 3600 ? `${Math.floor(v / 60)}m` : `${Math.floor(v / 3600)}h`;
  }
  async function p(y, b = "") {
    try {
      const x = await an.probe(y, b);
      return n.value[y] = x, x;
    } catch (x) {
      i.value = x instanceof Error ? x.message : String(x);
      return;
    }
  }
  async function h() {
    try {
      const y = await an.listProviders();
      l.value = y.providers || {};
    } catch {
    }
  }
  function m(y) {
    var b;
    return ((b = t.value[y]) == null ? void 0 : b.list) ?? [];
  }
  function _(y) {
    var b;
    return ((b = t.value[y]) == null ? void 0 : b.visionModels) ?? [];
  }
  function C(y) {
    var b;
    return !!((b = t.value[y]) != null && b.loading);
  }
  return {
    accounts: e,
    modelsByProvider: t,
    probeState: n,
    displayNames: l,
    lastError: i,
    configuredProviders: o,
    PROVIDER_LIST: un,
    loadAccounts: s,
    saveAccount: a,
    deleteAccount: u,
    deleteAccountRaw: r,
    loadModels: c,
    probe: p,
    loadDisplayNames: h,
    modelsFor: m,
    visionModelsFor: _,
    isLoading: C,
    cachedAgeLabel: d
  };
}), yf = ["title", "disabled", "aria-disabled"], wf = {
  key: 0,
  class: "fil-w-btn-spinner"
}, Sf = ["innerHTML"], xf = { key: 2 }, Cf = /* @__PURE__ */ we({
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
    const n = e, l = J(() => n.icon ? Oa(n.icon) : ""), i = t, o = J(() => [
      "fil-w-btn",
      n.variant === "accent" && "fil-w-btn-accent",
      n.variant === "danger" && "fil-w-btn-danger",
      n.variant === "icon" && "fil-w-btn-icon",
      n.variant === "full" && "fil-w-btn-full",
      n.variant === "sm" && "fil-w-btn-sm",
      n.flashing && "is-flashing",
      n.loading && "is-loading"
    ]), s = J(() => n.disabled || n.loading);
    function a(r) {
      s.value || i("click", r);
    }
    return (r, u) => (I(), N("button", {
      class: me(o.value),
      title: e.title,
      disabled: s.value,
      "aria-disabled": s.value || void 0,
      onClick: a
    }, [
      e.loading ? (I(), N("span", wf)) : ae("", !0),
      e.icon && !e.loading ? (I(), N("span", {
        key: 1,
        class: "fil-w-btn-glyph",
        innerHTML: l.value
      }, null, 8, Sf)) : ae("", !0),
      e.label ? (I(), N("span", xf, z(e.loading ? "" : e.label), 1)) : ae("", !0)
    ], 10, yf));
  }
}), Ge = /* @__PURE__ */ xe(Cf, [["__scopeId", "data-v-1c6537e0"]]), Ol = {
  ollama: "Ollama",
  lmstudio: "LM Studio",
  openai: "OpenAI",
  groq: "Groq",
  google: "Google AI",
  openrouter: "OpenRouter",
  cloudflare: "Cloudflare"
}, so = {
  ollama: "provider-ollama",
  lmstudio: "provider-lmstudio",
  openai: "provider-openai",
  groq: "provider-groq",
  google: "provider-google",
  openrouter: "provider-openrouter",
  cloudflare: "provider-cloudflare"
}, Af = { class: "fil-pm-root" }, Mf = ["onClick"], Ff = { class: "fil-pm-icon" }, kf = { class: "fil-pm-name" }, Lf = {
  key: 0,
  class: "fil-pm-disp"
}, If = ["title"], Df = { class: "fil-pm-fields" }, Pf = { class: "fil-pm-field" }, Rf = ["onUpdate:modelValue", "placeholder", "onKeydown"], Nf = { class: "fil-pm-field" }, Tf = ["onUpdate:modelValue", "onKeydown"], Ef = {
  key: 0,
  class: "fil-pm-field"
}, Of = ["onUpdate:modelValue", "onKeydown"], Vf = { class: "fil-pm-actions" }, $f = {
  key: 0,
  class: "fil-pm-age"
}, Bf = {
  key: 0,
  class: "fil-pm-err"
}, Hf = {
  key: 1,
  class: "fil-pm-err"
}, Uf = {
  key: 2,
  class: "fil-pm-models"
}, Gf = {
  key: 0,
  class: "fil-pm-vision-badge",
  title: "Vision-capable"
}, Wf = {
  key: 3,
  class: "fil-pm-err fil-pm-global-err"
}, jf = /* @__PURE__ */ we({
  __name: "ProviderManager",
  setup(e) {
    const t = oo(), n = /* @__PURE__ */ ce(
      Object.fromEntries(un.map((v) => [v, { key: "", base_url: "", account_id: "" }]))
    ), l = /* @__PURE__ */ ce({}), i = /* @__PURE__ */ ce({}), o = /* @__PURE__ */ ce({}), s = /* @__PURE__ */ ce({});
    nl(async () => {
      await Promise.all([t.loadAccounts(), t.loadDisplayNames()]);
      for (const v of un) {
        const w = t.accounts[v];
        n.value[v] = {
          // Stored keys are never echoed back by GET /fil_design_imagemind/auth (write-only
          // by the security contract) — the field always starts empty and the
          // `configured` flag drives the "a key is saved" UI state instead.
          key: "",
          base_url: (w == null ? void 0 : w.base_url) ?? "",
          account_id: (w == null ? void 0 : w.account_id) ?? ""
        };
      }
      for (const v of un) {
        const w = t.accounts[v];
        (w != null && w.configured || w != null && w.local || w != null && w.base_url) && y(v);
      }
    });
    const a = Ol, r = so;
    function u(v) {
      return { "fil-pm-has-val": v.length > 0 };
    }
    function c(v) {
      return v === "cloudflare";
    }
    function d(v) {
      var j;
      const w = t.accounts[v], F = t.modelsByProvider[v], G = ((F == null ? void 0 : F.list.length) ?? 0) > 0 && !(F != null && F.error);
      return ((j = t.probeState[v]) == null ? void 0 : j.status) === "available" || i.value[v] || G ? "connected" : w != null && w.configured || w != null && w.local || w != null && w.base_url ? "configured" : "off";
    }
    const p = {
      connected: "Connected",
      configured: "Configured",
      off: "Not connected"
    };
    function h(v) {
      return d(v) === "off" && !s.value[v];
    }
    function m(v) {
      d(v) === "off" && (s.value[v] = !s.value[v]);
    }
    async function _(v) {
      const w = n.value[v];
      await t.saveAccount(v, {
        key: w.key || null,
        base_url: w.base_url || null,
        account_id: w.account_id || null
      }), w.key = "";
    }
    async function C(v) {
      n.value[v] = { key: "", base_url: "", account_id: "" }, await t.deleteAccount(v);
    }
    async function y(v) {
      l.value[v] = !0, i.value[v] = !1;
      try {
        const w = await t.probe(v, "");
        i.value[v] = (w == null ? void 0 : w.status) === "available";
      } finally {
        l.value[v] = !1;
      }
    }
    async function b(v) {
      o.value[v] = !0;
      try {
        await t.loadModels(v, !0);
      } finally {
        o.value[v] = !1;
      }
    }
    const x = (v) => {
      const w = n.value[v];
      if (!w) return !1;
      const F = t.accounts[v];
      return w.key !== "" ? !0 : w.base_url !== ((F == null ? void 0 : F.base_url) ?? "") || w.account_id !== ((F == null ? void 0 : F.account_id) ?? "");
    };
    return (v, w) => (I(), N("div", Af, [
      (I(!0), N(ue, null, Me(f(un), (F) => {
        var G, j, $, q, Q, k;
        return I(), N("div", {
          key: F,
          class: me(["fil-pm-card", { "fil-pm-card--collapsed": h(F) }])
        }, [
          D("div", {
            class: me(["fil-pm-header", { "fil-pm-header--clickable": d(F) === "off" }]),
            onClick: (L) => m(F)
          }, [
            D("span", Ff, [
              V(tn, {
                name: f(r)[F],
                size: 20
              }, null, 8, ["name"])
            ]),
            D("span", kf, z(f(a)[F]), 1),
            f(t).displayNames[F] ? (I(), N("span", Lf, "(" + z(f(t).displayNames[F]) + ")", 1)) : ae("", !0),
            D("span", {
              class: me(["fil-pm-status", `fil-pm-status--${d(F)}`]),
              title: p[d(F)]
            }, [
              w[0] || (w[0] = D("span", { class: "fil-pm-dot" }, null, -1)),
              Il(" " + z(p[d(F)]), 1)
            ], 10, If),
            d(F) === "off" ? (I(), N("span", {
              key: 1,
              class: me(["fil-pm-chevron", { "fil-pm-chevron--open": s.value[F] }])
            }, [
              V(tn, {
                name: "chevronRight",
                size: 12
              })
            ], 2)) : ae("", !0)
          ], 10, Mf),
          h(F) ? ae("", !0) : (I(), N(ue, { key: 0 }, [
            D("div", Df, [
              D("label", Pf, [
                w[1] || (w[1] = D("span", { class: "fil-pm-field-label" }, "API Key", -1)),
                it(D("input", {
                  "onUpdate:modelValue": (L) => n.value[F].key = L,
                  type: "password",
                  class: me(["fil-pm-input", u(n.value[F].key)]),
                  placeholder: (G = f(t).accounts[F]) != null && G.configured ? "•••••••• (saved)" : "sk-...",
                  onKeydown: _l((L) => _(F), ["enter"])
                }, null, 42, Rf), [
                  [Mt, n.value[F].key]
                ])
              ]),
              D("label", Nf, [
                w[2] || (w[2] = D("span", { class: "fil-pm-field-label" }, "Base URL", -1)),
                it(D("input", {
                  "onUpdate:modelValue": (L) => n.value[F].base_url = L,
                  type: "text",
                  class: me(["fil-pm-input", u(n.value[F].base_url)]),
                  placeholder: "http://localhost:11434",
                  onKeydown: _l((L) => _(F), ["enter"])
                }, null, 42, Tf), [
                  [Mt, n.value[F].base_url]
                ])
              ]),
              c(F) ? (I(), N("label", Ef, [
                w[3] || (w[3] = D("span", { class: "fil-pm-field-label" }, "Account ID", -1)),
                it(D("input", {
                  "onUpdate:modelValue": (L) => n.value[F].account_id = L,
                  type: "text",
                  class: me(["fil-pm-input", u(n.value[F].account_id)]),
                  onKeydown: _l((L) => _(F), ["enter"])
                }, null, 42, Of), [
                  [Mt, n.value[F].account_id]
                ])
              ])) : ae("", !0)
            ]),
            D("div", Vf, [
              V(Ge, {
                variant: "accent",
                label: x(F) ? "Save" : "Saved",
                disabled: !x(F),
                onClick: (L) => _(F)
              }, null, 8, ["label", "disabled", "onClick"]),
              !x(F) && f(t).cachedAgeLabel(F) ? (I(), N("span", $f, z(f(t).cachedAgeLabel(F)) + " ago ", 1)) : ae("", !0),
              V(Ge, {
                variant: "danger",
                label: "Delete",
                disabled: !((j = f(t).accounts[F]) != null && j.configured) && !(($ = f(t).accounts[F]) != null && $.base_url),
                onClick: (L) => C(F)
              }, null, 8, ["disabled", "onClick"]),
              V(Ge, {
                variant: "standard",
                label: "Probe",
                loading: l.value[F],
                flashing: i.value[F],
                disabled: !((q = f(t).accounts[F]) != null && q.local) && !((Q = f(t).accounts[F]) != null && Q.configured) && !n.value[F].key && !n.value[F].base_url,
                onClick: (L) => y(F)
              }, null, 8, ["loading", "flashing", "disabled", "onClick"]),
              V(Ge, {
                variant: "standard",
                label: "Load Models",
                loading: o.value[F],
                onClick: (L) => b(F)
              }, null, 8, ["loading", "onClick"])
            ]),
            (k = f(t).modelsByProvider[F]) != null && k.error ? (I(), N("div", Bf, z(f(t).modelsByProvider[F].error), 1)) : ae("", !0),
            f(t).probeState[F] && f(t).probeState[F].status !== "available" ? (I(), N("div", Hf, z(f(t).probeState[F].message), 1)) : ae("", !0),
            f(t).modelsFor(F).length > 0 ? (I(), N("div", Uf, [
              (I(!0), N(ue, null, Me(f(t).modelsFor(F), (L) => (I(), N("span", {
                class: "fil-pm-model-tag",
                key: L
              }, [
                Il(z(L) + " ", 1),
                f(t).visionModelsFor(F).includes(L) ? (I(), N("span", Gf, "👁")) : ae("", !0)
              ]))), 128))
            ])) : ae("", !0),
            f(t).lastError ? (I(), N("div", Wf, z(f(t).lastError), 1)) : ae("", !0)
          ], 64))
        ], 2);
      }), 128))
    ]));
  }
}), Kf = /* @__PURE__ */ xe(jf, [["__scopeId", "data-v-329149a3"]]);
let Fn = null;
function zf(e) {
  Fn && (Fn.unmount(), Fn = null), Fn = no(Kf).use(io()), Fn.mount(e), console.info("[FiL_Design_ImageMind] provider manager mounted");
}
function qf(e) {
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
    render: (n) => zf(n)
  }), console.info("[FiL_Design_ImageMind] provider manager sidebar tab registered");
}
const Xf = [
  {
    id: "FiL_Design_ImageMind.DefaultProvider",
    name: "Default LLM Provider",
    type: "combo",
    defaultValue: "Ollama",
    options: ["Ollama", "LM Studio", "Groq", "Google AI", "OpenRouter", "Cloudflare"],
    category: [_n, "General"],
    tooltip: "Default AI Provider pre-selected in new Provider Loader nodes."
  },
  {
    id: "FiL_Design_ImageMind.RequestTimeout",
    name: "Request Timeout (seconds)",
    type: "number",
    defaultValue: 60,
    attrs: { min: 5, max: 600, step: 5 },
    category: [_n, "Network"],
    tooltip: "Global timeout in seconds for API calls to local/cloud LLM providers."
  },
  {
    id: "FiL_Design_ImageMind.AutoCleanVRAM",
    name: "Auto VRAM cleanup on completion",
    type: "boolean",
    defaultValue: !1,
    category: [_n, "Performance"],
    tooltip: "Automatically purge empty torch cache and PyTorch VRAM after node execution."
  }
], Yf = [
  {
    id: "FiL_Design_ImageMind.Language",
    name: "Language",
    type: "combo",
    defaultValue: "en",
    options: ["en", "ru"],
    tooltip: "UI language for FiL_Design_ImageMind node tooltips and labels (English / Russian).",
    category: [_n, "Language"]
  }
];
function Ua(e) {
  bl(`${yt}/log_level`, { level: String(e) }).catch(() => {
  });
}
const Jf = [
  {
    id: "FiL_Design_ImageMind.Logging.Level",
    name: "Log level",
    type: "combo",
    defaultValue: "WARNING",
    options: ["DEBUG", "INFO", "WARNING", "ERROR"],
    category: [_n, "Logging"],
    tooltip: "Python backend log verbosity for this node pack.",
    onChange: Ua
  }
];
function Qf(e) {
  const t = e("FiL_Design_ImageMind.Logging.Level", "WARNING");
  Ua(t);
}
const Ga = {
  Default: "default",
  Cyberpunk: "cyberpunk",
  Fallout: "fallout",
  Pipboy: "pipboy",
  "FiL Green": "travelmate"
};
function Zf(e) {
  const t = Ga[String(e)] ?? "default";
  La(t);
  const n = globalThis.app;
  n && ld(n);
}
const ep = [
  {
    id: "FiL_Design_ImageMind.Theme",
    name: "Node theme",
    type: "combo",
    defaultValue: "Default",
    options: ["Default", "Cyberpunk", "Fallout", "Pipboy", "FiL Green"],
    category: [_n, "Appearance", "Theme"],
    tooltip: "Recolors every FiL_Design_ImageMind node panel and adds a small themed flourish (neon glow for Cyberpunk, a CRT scanline texture for Pipboy and Fallout, acid-lime glow for Travelmate). Applies instantly, no reload.",
    onChange: Zf
  }
];
function tp(e) {
  const t = e("FiL_Design_ImageMind.Theme", "Default");
  La(Ga[t] ?? "default");
}
const np = [
  ...Xf,
  ...Yf,
  ...Jf,
  ...ep
];
function Bi(e, t, n) {
  var i, o, s, a, r, u, c, d;
  const l = n ?? globalThis;
  try {
    const p = (s = (o = (i = l.app) == null ? void 0 : i.extensionManager) == null ? void 0 : o.setting) == null ? void 0 : s.get;
    if (typeof p == "function") return p(e, t);
    const h = ((r = (a = l.ui) == null ? void 0 : a.settings) == null ? void 0 : r.getSettingValue) ?? ((d = (c = (u = globalThis.app) == null ? void 0 : u.ui) == null ? void 0 : c.settings) == null ? void 0 : d.getSettingValue);
    if (typeof h == "function") return h(e, t);
  } catch (p) {
    console.warn(`[FiL_Design_ImageMind] setting read failed for "${e}":`, p);
  }
  return t;
}
gf();
function lp(e) {
  var t, n;
  try {
    const l = globalThis.app, i = ((t = l == null ? void 0 : l.graph) == null ? void 0 : t._nodes) ?? [];
    for (const o of i) {
      const s = o;
      if (s.comfyClass === "FiLOpticScanner") {
        const a = (n = s.inputs) == null ? void 0 : n.find((r) => r.name === "config");
        (!a || a.link == null) && console.warn(`${nn} Optic Scanner #${s.id} has no Provider Loader wired to its "config" slot — execution will fail.`);
      }
    }
  } catch (l) {
    console.warn(`${nn} preflight fallback:`, l);
  }
  return e;
}
function ip(e) {
  return {
    name: _f,
    // Declarative settings — registered BEFORE setup so the panel renders
    // even if a later installer throws.
    settings: np,
    // Declarative shortcuts — modern ComfyUI registers these through its
    // native command palette / keybinding system. The keydown fallback in
    // installShortcuts only kicks in when this API is unavailable.
    commands: cf,
    keybindings: uf,
    async setup() {
      const t = [
        () => of(),
        () => hf(e),
        () => qf(e),
        () => Qf((n, l) => Bi(n, l, e)),
        () => tp((n, l) => Bi(n, l, e))
      ];
      for (const n of t)
        try {
          n();
        } catch (l) {
          console.warn(`${nn} installer ${n.name || "anonymous"} failed:`, l);
        }
    },
    getCustomWidgets() {
      return {};
    },
    async beforeRegisterNodeDef(t, n) {
      const l = Ea[n.name];
      if (l)
        try {
          await l.register(t, n);
        } catch (i) {
          console.warn(`${nn} failed to register "${n.name}":`, i);
        }
    },
    async graphToPrompt(t) {
      return lp(t);
    }
  };
}
async function op() {
  if (typeof fetch > "u") return;
  let e;
  try {
    e = await fetch(`${yt}/node_contracts`);
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
  const n = new Set(Object.keys(t.node_ids ?? {})), l = new Set(Object.keys(Ea));
  for (const i of n)
    l.has(i) || console.warn(`${nn} server expects "${i}" but local JS does not register it`);
  for (const i of l)
    n.has(i) || console.warn(`${nn} JS registers "${i}" but server does not expose a contract`);
}
zu();
cd();
op().catch((e) => {
  console.warn("[FiL_Design_ImageMind] contract self-check failed:", e);
});
const Wa = ip(ms);
ms.registerExtension(Wa);
console.info(`[FiL_Design_ImageMind] extension registered as "${Wa.name}"`);
const sp = ["aria-checked", "disabled", "title", "onClick"], ap = /* @__PURE__ */ we({
  __name: "FilChipGrid",
  props: /* @__PURE__ */ qe({
    options: {},
    columns: { default: 3 },
    disabled: { type: Boolean }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = st(e, "modelValue"), l = J(() => ({
      gridTemplateColumns: `repeat(${Math.max(1, t.columns)}, minmax(0, 1fr))`
    }));
    function i(o) {
      t.disabled || o !== n.value && (n.value = o);
    }
    return (o, s) => (I(), N("div", {
      class: "fil-w-chips",
      style: tt(l.value),
      role: "radiogroup"
    }, [
      (I(!0), N(ue, null, Me(e.options, (a) => (I(), N("button", {
        key: a,
        type: "button",
        role: "radio",
        class: me(["fil-w-chip", { active: a === n.value, disabled: e.disabled }]),
        "aria-checked": a === n.value,
        disabled: e.disabled,
        title: a,
        onClick: (r) => i(a)
      }, z(a), 11, sp))), 128))
    ], 4));
  }
}), ds = /* @__PURE__ */ xe(ap, [["__scopeId", "data-v-9c6ca5d1"]]), rp = { class: "fil-w-chiplist" }, cp = ["placeholder", "aria-label", "disabled"], up = {
  class: "fil-w-chip-scroll",
  role: "radiogroup"
}, dp = ["aria-checked", "disabled", "title", "onClick"], fp = {
  key: 0,
  class: "fil-w-chip-empty"
}, pp = /* @__PURE__ */ we({
  __name: "FilChipList",
  props: /* @__PURE__ */ qe({
    options: {},
    searchable: { type: Boolean, default: !0 },
    disabled: { type: Boolean },
    placeholder: { default: "Search…" }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = st(e, "modelValue"), l = /* @__PURE__ */ ce(""), i = J(() => {
      const s = l.value.trim().toLowerCase();
      return s ? t.options.filter((a) => a.toLowerCase().includes(s)) : t.options;
    });
    function o(s) {
      t.disabled || s !== n.value && (n.value = s);
    }
    return (s, a) => (I(), N("div", rp, [
      e.searchable ? it((I(), N("input", {
        key: 0,
        "onUpdate:modelValue": a[0] || (a[0] = (r) => l.value = r),
        class: "fil-w-search",
        type: "search",
        placeholder: e.placeholder,
        "aria-label": e.placeholder,
        disabled: e.disabled,
        spellcheck: "false"
      }, null, 8, cp)), [
        [Mt, l.value]
      ]) : ae("", !0),
      D("div", up, [
        (I(!0), N(ue, null, Me(i.value, (r) => (I(), N("button", {
          key: r,
          type: "button",
          role: "radio",
          class: me(["fil-w-chip", { active: r === n.value, disabled: e.disabled }]),
          "aria-checked": r === n.value,
          disabled: e.disabled,
          title: r,
          onClick: (u) => o(r)
        }, z(r), 11, dp))), 128)),
        i.value.length === 0 ? (I(), N("div", fp, z(l.value ? "No matches" : "Empty"), 1)) : ae("", !0)
      ])
    ]));
  }
}), mp = /* @__PURE__ */ xe(pp, [["__scopeId", "data-v-3c9e19df"]]), hp = ["data-ok", "data-err"], gp = /* @__PURE__ */ we({
  __name: "FilInfo",
  props: {
    text: {},
    ok: { type: Boolean },
    err: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (I(), N("div", {
      class: "fil-w-info",
      "data-ok": e.ok || void 0,
      "data-err": e.err || void 0
    }, z(e.text), 9, hp));
  }
}), vl = /* @__PURE__ */ xe(gp, [["__scopeId", "data-v-851660c1"]]), _p = ["title"], bp = {
  key: 0,
  class: "fil-w-numfield-label"
}, vp = { class: "fil-w-num-wrap" }, yp = ["disabled", "min", "max", "step", "aria-label"], wp = { class: "fil-w-num-step" }, Sp = ["disabled"], xp = ["disabled"], Cp = /* @__PURE__ */ we({
  __name: "FilNumberInput",
  props: /* @__PURE__ */ qe({
    min: {},
    max: {},
    step: { default: 1 },
    disabled: { type: Boolean },
    ariaLabel: {},
    label: {},
    title: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = st(e, "modelValue"), l = J(() => n.value), i = /* @__PURE__ */ ce(a(l.value));
    $e(l, (m) => {
      o.value || (i.value = a(m));
    });
    let o = /* @__PURE__ */ ce(!1), s = null;
    function a(m) {
      return Number.isFinite(m) ? String(m) : "";
    }
    function r(m) {
      const _ = (m || "").trim();
      if (_ === "" || !/^[0-9+\-*/(). ]+$/.test(_.replace(/\^/g, "**"))) return null;
      try {
        const C = new Function(`"use strict"; return (${_});`), y = Number(C());
        return Number.isFinite(y) ? y : null;
      } catch {
        return null;
      }
    }
    function u(m) {
      if (m === null) {
        i.value = a(l.value);
        return;
      }
      let _ = m;
      t.min != null && _ < t.min && (_ = t.min), t.max != null && _ > t.max && (_ = t.max), _ !== l.value && (n.value = _), i.value = a(_);
    }
    function c() {
      o.value = !0, s = i.value;
    }
    function d() {
      o.value = !1, u(r(i.value)), s = null;
    }
    function p(m) {
      m.key === "Enter" ? (m.preventDefault(), u(r(i.value)), m.target.blur()) : m.key === "Escape" ? (m.preventDefault(), s !== null && (i.value = s), m.target.blur()) : m.key === "ArrowUp" ? (m.preventDefault(), h(m.shiftKey ? 10 : 1)) : m.key === "ArrowDown" && (m.preventDefault(), h(m.shiftKey ? -10 : -1));
    }
    function h(m) {
      let _ = l.value + m * (t.step || 1);
      t.min != null && _ < t.min && (_ = t.min), t.max != null && _ > t.max && (_ = t.max), n.value = _, i.value = a(_);
    }
    return (m, _) => (I(), N("div", {
      class: me(["fil-w-numfield", { "no-label": !e.label }]),
      title: e.title
    }, [
      e.label ? (I(), N("label", bp, z(e.label), 1)) : ae("", !0),
      D("div", vp, [
        it(D("input", {
          "onUpdate:modelValue": _[0] || (_[0] = (C) => i.value = C),
          type: "text",
          class: "fil-w-num",
          inputmode: "numeric",
          disabled: e.disabled,
          min: e.min ?? void 0,
          max: e.max ?? void 0,
          step: e.step ?? void 0,
          "aria-label": e.ariaLabel ?? e.label,
          onFocus: c,
          onBlur: d,
          onKeydown: p
        }, null, 40, yp), [
          [Mt, i.value]
        ]),
        D("div", wp, [
          D("button", {
            type: "button",
            class: "fil-w-num-btn",
            tabindex: "-1",
            "aria-label": "Increment",
            disabled: e.disabled || e.max != null && n.value >= e.max,
            onMousedown: _[1] || (_[1] = Di(() => {
            }, ["prevent"])),
            onClick: _[2] || (_[2] = (C) => h(C.shiftKey ? 10 : 1))
          }, "▲", 40, Sp),
          D("button", {
            type: "button",
            class: "fil-w-num-btn",
            tabindex: "-1",
            "aria-label": "Decrement",
            disabled: e.disabled || e.min != null && n.value <= e.min,
            onMousedown: _[3] || (_[3] = Di(() => {
            }, ["prevent"])),
            onClick: _[4] || (_[4] = (C) => h(C.shiftKey ? -10 : -1))
          }, "▼", 40, xp)
        ])
      ])
    ], 10, _p));
  }
}), Qt = /* @__PURE__ */ xe(Cp, [["__scopeId", "data-v-2f843ba1"]]), Ap = ["aria-expanded", "disabled"], Mp = { class: "fil-w-section-arrow" }, Fp = { class: "fil-w-section-title" }, kp = /* @__PURE__ */ we({
  __name: "FilSection",
  props: /* @__PURE__ */ qe({
    title: {},
    collapsible: { type: Boolean, default: !0 }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = st(e, "modelValue");
    function l() {
      t.collapsible && (n.value = !n.value);
    }
    const i = J(() => n.value ? "▶" : "▼");
    return (o, s) => (I(), N("button", {
      type: "button",
      class: me(["fil-w-section", { collapsible: e.collapsible, collapsed: n.value }]),
      "aria-expanded": !n.value,
      disabled: !e.collapsible,
      onClick: l
    }, [
      D("span", Mp, z(i.value), 1),
      D("span", Fp, z(e.title), 1)
    ], 10, Ap));
  }
}), Qe = /* @__PURE__ */ xe(kp, [["__scopeId", "data-v-4b760ea4"]]), Lp = ["title"], Ip = {
  key: 0,
  class: "fil-w-segmented-label"
}, Dp = ["aria-label"], Pp = ["aria-pressed", "disabled", "tabindex", "onClick", "onKeydown"], Rp = /* @__PURE__ */ we({
  __name: "FilSegmented",
  props: /* @__PURE__ */ qe({
    options: {},
    label: {},
    title: {},
    disabled: { type: Boolean },
    optionLabels: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = st(e, "modelValue"), l = /* @__PURE__ */ ce([]);
    function i(a) {
      var r;
      return ((r = t.optionLabels) == null ? void 0 : r[a]) ?? a;
    }
    function o(a) {
      t.disabled || a !== n.value && (n.value = a);
    }
    function s(a, r) {
      var c, d;
      const u = t.options;
      if (a.key === "ArrowRight" || a.key === "ArrowDown") {
        a.preventDefault();
        const p = u[(r + 1) % u.length];
        o(p), (c = l.value[(r + 1) % u.length]) == null || c.focus();
      } else if (a.key === "ArrowLeft" || a.key === "ArrowUp") {
        a.preventDefault();
        const p = u[(r - 1 + u.length) % u.length];
        o(p), (d = l.value[(r - 1 + u.length) % u.length]) == null || d.focus();
      }
    }
    return (a, r) => (I(), N("div", {
      class: "fil-w-segmented",
      title: e.title
    }, [
      e.label ? (I(), N("label", Ip, z(e.label), 1)) : ae("", !0),
      D("div", {
        class: me(["fil-w-pill", { disabled: e.disabled }]),
        role: "group",
        "aria-label": e.label
      }, [
        (I(!0), N(ue, null, Me(e.options, (u, c) => (I(), N("button", {
          key: u,
          ref_for: !0,
          ref: (d) => {
            d && (l.value[c] = d);
          },
          type: "button",
          class: me(["fil-w-seg", { active: u === n.value }]),
          "aria-pressed": u === n.value,
          disabled: e.disabled,
          tabindex: u === n.value ? 0 : -1,
          onClick: (d) => o(u),
          onKeydown: (d) => s(d, c)
        }, z(i(u)), 43, Pp))), 128))
      ], 10, Dp)
    ], 8, Lp));
  }
}), nt = /* @__PURE__ */ xe(Rp, [["__scopeId", "data-v-765cf0ce"]]), Np = ["title"], Tp = {
  key: 0,
  class: "fil-w-select-label"
}, Ep = ["disabled", "aria-label"], Op = ["value"], Vp = /* @__PURE__ */ we({
  __name: "FilSelect",
  props: /* @__PURE__ */ qe({
    options: {},
    label: {},
    title: {},
    disabled: { type: Boolean }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = st(e, "modelValue");
    return (n, l) => (I(), N("div", {
      class: "fil-w-select",
      title: e.title
    }, [
      e.label ? (I(), N("label", Tp, z(e.label), 1)) : ae("", !0),
      it(D("select", {
        "onUpdate:modelValue": l[0] || (l[0] = (i) => t.value = i),
        class: "fil-w-select-input",
        disabled: e.disabled,
        "aria-label": e.label
      }, [
        (I(!0), N(ue, null, Me(e.options, (i) => (I(), N("option", {
          key: i,
          value: i
        }, z(i), 9, Op))), 128))
      ], 8, Ep), [
        [Du, t.value]
      ])
    ], 8, Np));
  }
}), fl = /* @__PURE__ */ xe(Vp, [["__scopeId", "data-v-a878baba"]]), $p = ["title"], Bp = {
  key: 0,
  class: "fil-w-slider-label"
}, Hp = { class: "fil-w-slider-row" }, Up = ["value", "min", "max", "step", "disabled", "aria-label"], Gp = /* @__PURE__ */ we({
  __name: "FilSlider",
  props: /* @__PURE__ */ qe({
    min: {},
    max: {},
    step: { default: 0.05 },
    label: {},
    title: {},
    disabled: { type: Boolean }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = st(e, "modelValue"), l = J({
      get: () => {
        let o = n.value;
        return o < t.min && (o = t.min), o > t.max && (o = t.max), o;
      },
      set: (o) => {
        let s = o;
        s < t.min && (s = t.min), s > t.max && (s = t.max), n.value = s;
      }
    });
    function i(o) {
      const s = Number(o.target.value);
      l.value = s;
    }
    return (o, s) => (I(), N("div", {
      class: "fil-w-slider",
      title: e.title
    }, [
      e.label ? (I(), N("label", Bp, z(e.label), 1)) : ae("", !0),
      D("div", Hp, [
        D("input", {
          type: "range",
          class: "fil-w-slider-range",
          value: l.value,
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label,
          onInput: i
        }, null, 40, Up),
        V(Qt, {
          modelValue: l.value,
          "onUpdate:modelValue": s[0] || (s[0] = (a) => l.value = a),
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label
        }, null, 8, ["modelValue", "min", "max", "step", "disabled", "aria-label"])
      ])
    ], 8, $p));
  }
}), Le = /* @__PURE__ */ xe(Gp, [["__scopeId", "data-v-c8e1921a"]]), Wp = {
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
}, jp = {}, Kp = {}, zp = {}, qp = {
  ...Wp,
  ...jp,
  ...Kp,
  ...zp
}, Xp = { class: "fil-style-picker" }, Yp = {
  key: 0,
  class: "fil-style-selected-bar"
}, Jp = { class: "fil-chip-text" }, Qp = ["onClick"], Zp = { class: "fil-style-cats" }, em = ["onClick"], tm = { class: "fil-style-search-wrap" }, nm = { class: "fil-style-grid" }, lm = ["title", "onClick"], im = { class: "fil-style-tile-preview" }, om = ["src"], sm = {
  key: 1,
  class: "fil-style-tile-placeholder"
}, am = { class: "fil-style-tile-label" }, rm = {
  key: 0,
  class: "fil-style-empty"
}, pl = "__all__", cm = /* @__PURE__ */ we({
  __name: "FilStylePicker",
  props: /* @__PURE__ */ qe({
    styles: {},
    multi: { type: Boolean, default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ qe(["select"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = e, l = st(e, "modelValue"), i = t;
    function o(y) {
      const b = y.indexOf("/");
      return b === -1 ? "" : y.slice(0, b);
    }
    function s(y) {
      const b = y.indexOf("/");
      return b === -1 ? y : y.slice(b + 1);
    }
    const a = J(() => {
      const y = l.value || "";
      return !y || y === "None" ? [] : y.split("|").map((b) => b.trim()).filter((b) => b && b !== "None");
    }), r = J(() => new Set(a.value));
    function u(y) {
      return r.value.has(y);
    }
    const c = J(() => {
      const y = /* @__PURE__ */ new Set(), b = [];
      for (const x of n.styles) {
        const v = o(x);
        v && !y.has(v) && (y.add(v), b.push(v));
      }
      return b;
    }), d = /* @__PURE__ */ ce(pl), p = /* @__PURE__ */ ce(""), h = J(() => {
      const y = p.value.trim().toLowerCase();
      return n.styles.filter((b) => d.value !== pl && o(b) !== d.value ? !1 : y ? b.toLowerCase().includes(y) : !0);
    });
    function m(y) {
      return qp[y];
    }
    function _(y) {
      const b = a.value.filter((v) => v !== y), x = b.length > 0 ? b.join(" | ") : "None";
      l.value = x, i("select", x);
    }
    function C(y) {
      if (n.multi) {
        let b;
        r.value.has(y) ? b = a.value.filter((v) => v !== y) : b = [...a.value, y];
        const x = b.length > 0 ? b.join(" | ") : "None";
        l.value = x, i("select", x);
      } else {
        const b = l.value === y ? "None" : y;
        l.value = b, i("select", b);
      }
    }
    return (y, b) => (I(), N("div", Xp, [
      a.value.length > 0 ? (I(), N("div", Yp, [
        (I(!0), N(ue, null, Me(a.value, (x) => (I(), N("span", {
          key: x,
          class: "fil-style-chip"
        }, [
          D("span", Jp, z(s(x)), 1),
          D("button", {
            type: "button",
            class: "fil-chip-remove",
            title: "Remove style",
            onClick: Di((v) => _(x), ["stop"])
          }, "×", 8, Qp)
        ]))), 128))
      ])) : ae("", !0),
      D("div", Zp, [
        D("button", {
          type: "button",
          class: me(["fil-style-cat", { active: d.value === pl }]),
          onClick: b[0] || (b[0] = (x) => d.value = pl)
        }, " All ", 2),
        (I(!0), N(ue, null, Me(c.value, (x) => (I(), N("button", {
          key: x,
          type: "button",
          class: me(["fil-style-cat", { active: d.value === x }]),
          onClick: (v) => d.value = x
        }, z(x), 11, em))), 128))
      ]),
      D("div", tm, [
        it(D("input", {
          "onUpdate:modelValue": b[1] || (b[1] = (x) => p.value = x),
          type: "search",
          class: "fil-style-search",
          placeholder: "Search styles…",
          "aria-label": "Search styles",
          spellcheck: "false"
        }, null, 512), [
          [Mt, p.value]
        ]),
        p.value.trim().length > 0 ? (I(), N("button", {
          key: 0,
          type: "button",
          class: "fil-style-search-clear",
          title: "Clear search",
          onClick: b[2] || (b[2] = (x) => p.value = "")
        }, " × ")) : ae("", !0)
      ]),
      D("div", nm, [
        (I(!0), N(ue, null, Me(h.value, (x) => (I(), N("button", {
          key: x,
          type: "button",
          class: me(["fil-style-tile", { active: u(x) }]),
          title: x,
          onClick: (v) => C(x)
        }, [
          D("span", im, [
            m(x) ? (I(), N("img", {
              key: 0,
              src: m(x),
              class: "fil-style-tile-img",
              alt: ""
            }, null, 8, om)) : (I(), N("span", sm, z(s(x).split(" ")[0]), 1))
          ]),
          D("span", am, z(s(x)), 1)
        ], 10, lm))), 128)),
        h.value.length === 0 ? (I(), N("div", rm, "No matches")) : ae("", !0)
      ])
    ]));
  }
}), yl = /* @__PURE__ */ xe(cm, [["__scopeId", "data-v-89c1e9fe"]]), um = "FiL_Design_ImageMind.Language", ja = "en", Un = /* @__PURE__ */ Ht({
  lang: ja,
  translations: {},
  loaded: !1
});
let fs = null;
async function dm(e) {
  try {
    const t = await Dn(`/fil_design_imagemind/locale/${encodeURIComponent(e)}`);
    Un.translations = t, Un.lang = e;
  } catch (t) {
    console.warn(`[FiL_Design_ImageMind] failed to load locale "${e}":`, t);
  } finally {
    Un.loaded = !0;
  }
}
function fm() {
  if (fs) return;
  const e = Bi(um, ja);
  fs = dm(e);
}
function Nt() {
  fm();
  function e(t, n) {
    return Un.translations[t] ?? n;
  }
  return { t: e, state: /* @__PURE__ */ Sl(Un) };
}
const pm = ["title"], mm = {
  key: 0,
  class: "fil-w-toggle-label"
}, hm = ["aria-checked", "aria-label", "disabled"], gm = /* @__PURE__ */ we({
  __name: "FilToggle",
  props: /* @__PURE__ */ qe({
    label: {},
    title: {},
    disabled: { type: Boolean },
    bare: { type: Boolean }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = st(e, "modelValue");
    function l() {
      t.disabled || (n.value = n.value === "ON" ? "OFF" : "ON");
    }
    return (i, o) => (I(), N("div", {
      class: me(["fil-w-toggle", { bare: e.bare }]),
      title: e.title
    }, [
      e.label ? (I(), N("label", mm, z(e.label), 1)) : ae("", !0),
      D("button", {
        type: "button",
        class: me(["fil-w-switch", { on: n.value === "ON" }]),
        role: "switch",
        "aria-checked": n.value === "ON",
        "aria-label": e.label,
        disabled: e.disabled,
        onClick: l
      }, [...o[0] || (o[0] = [
        D("span", { class: "fil-w-switch-thumb" }, null, -1)
      ])], 10, hm)
    ], 10, pm));
  }
}), ml = /* @__PURE__ */ xe(gm, [["__scopeId", "data-v-9d64f497"]]), _m = { class: "fil-seed-root" }, bm = ["readonly", "title"], vm = { class: "fil-seed-actions" }, ym = /* @__PURE__ */ we({
  __name: "Seed",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Nt(), l = J({
      get: () => t.state.nodeState.mode ?? "random",
      set: (u) => {
        t.state.nodeState.mode = u;
      }
    }), i = J({
      get: () => Number(t.state.nodeState.seed ?? 0) || 0,
      // Write the native seed widget directly, not just nodeState — a fixed
      // seed set only via nodeState can fail to reach the queued prompt.
      set: (u) => {
        t.state.nodeState.seed = u;
        const c = t.state.node ? ie(t.state.node, "seed") : null;
        c && (c.value = u);
      }
    });
    $e(l, (u) => {
      const c = t.state.node, d = c ? ie(c, "control_after_generate") : null;
      d && (d.value = u === "fixed" ? "fixed" : "randomize");
    }, { immediate: !0 }), $e(
      () => t.state.nodeState,
      (u) => {
        typeof u.mode == "string" && (l.value = u.mode), typeof u.seed == "number" && (i.value = Number(u.seed));
      },
      { deep: !0 }
    );
    function o() {
      l.value = "random";
    }
    function s() {
      const u = t.state.node, c = u ? ie(u, "seed") : null, d = c && Number.isFinite(Number(c.value)) ? Number(c.value) : t.state.lastRunSeed;
      if (d == null || !Number.isFinite(d)) {
        kt.warning("No last-run seed recorded yet");
        return;
      }
      i.value = d, l.value = "fixed";
    }
    function a() {
      const u = Math.floor(Math.random() * 1e9) & 2147483647;
      i.value = u, l.value = "fixed";
    }
    const r = J({
      get: () => l.value === "fixed" ? `${i.value}` : "random",
      set: (u) => {
        const c = parseInt(String(u).replace(/[^0-9]/g, ""), 10);
        Number.isNaN(c) || (i.value = c, l.value = "fixed");
      }
    });
    return (u, c) => (I(), N("div", _m, [
      it(D("input", {
        "onUpdate:modelValue": c[0] || (c[0] = (d) => r.value = d),
        type: "text",
        class: "fil-seed-display",
        readonly: l.value === "random",
        title: l.value === "fixed" ? f(n)("sd_locked", "Locked seed") : f(n)("sd_auto_random", "Auto-random"),
        "aria-label": "Seed value"
      }, null, 8, bm), [
        [Mt, r.value]
      ]),
      D("div", vm, [
        V(f(Ge), {
          label: "🔀",
          variant: "standard",
          title: f(n)("sd_mode", "Random generates a new seed each run."),
          onClick: o
        }, null, 8, ["title"]),
        V(f(Ge), {
          label: "♻️",
          variant: "standard",
          title: f(n)("sd_use_last", "Reuse the seed from the last executed run."),
          onClick: s
        }, null, 8, ["title"]),
        V(f(Ge), {
          label: "🎲",
          variant: "accent",
          title: f(n)("sd_new_fixed", "Generate a new random fixed seed."),
          onClick: a
        }, null, 8, ["title"])
      ])
    ]));
  }
}), wm = /* @__PURE__ */ xe(ym, [["__scopeId", "data-v-820f3e21"]]), Sm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wm
}, Symbol.toStringTag, { value: "Module" })), xm = { class: "picker-container" }, Cm = { class: "provider-tabs" }, Am = ["onClick"], Mm = { class: "tab-label" }, Fm = {
  key: 0,
  class: "tab-badge"
}, km = { class: "provider-status-bar" }, Lm = { class: "status-info" }, Im = { class: "provider-name" }, Dm = {
  key: 0,
  class: "status-badge loading"
}, Pm = {
  key: 1,
  class: "status-badge error"
}, Rm = {
  key: 2,
  class: "status-badge online"
}, Nm = {
  key: 3,
  class: "age-label"
}, Tm = { class: "filter-controls" }, Em = { class: "search-input-wrap" }, Om = ["placeholder"], Vm = ["title"], $m = { class: "filter-segments" }, Bm = { class: "models-list-wrapper" }, Hm = {
  key: 0,
  class: "empty-state"
}, Um = {
  key: 1,
  class: "empty-state"
}, Gm = ["aria-pressed", "onClick"], Wm = { class: "model-main" }, jm = { class: "type-icon" }, Km = ["title"], zm = { class: "model-tags" }, qm = {
  key: 0,
  class: "tag vision"
}, Xm = {
  key: 1,
  class: "tag text"
}, Ym = {
  key: 2,
  class: "tag local"
}, Jm = {
  key: 3,
  class: "tag free"
}, Qm = {
  key: 4,
  class: "tag paid"
}, Zm = { class: "picker-footer" }, eh = { class: "selection-summary" }, th = { key: 0 }, nh = {
  key: 1,
  class: "muted"
}, lh = { class: "footer-actions" }, ps = "fil_model_picker_view_mode", ih = /* @__PURE__ */ we({
  __name: "ProviderModelPicker",
  props: {
    open: { type: Boolean, default: !1 },
    provider: { default: "ollama" },
    model: { default: "" }
  },
  emits: ["update:open", "select"],
  setup(e, { emit: t }) {
    const n = e, l = t, i = oo(), { t: o } = Nt(), s = /* @__PURE__ */ ce(n.provider), a = /* @__PURE__ */ ce(n.model), r = /* @__PURE__ */ ce(""), u = /* @__PURE__ */ ce("all"), c = /* @__PURE__ */ ce("all"), d = /* @__PURE__ */ ce(
      localStorage.getItem(ps) || "list"
    );
    function p(P) {
      d.value = P;
      try {
        localStorage.setItem(ps, P);
      } catch {
      }
    }
    const h = ["all", "vision", "text"], m = {
      all: o("pmp_all_types", "All Types"),
      vision: o("pmp_tag_vision_opt", "👁 Vision"),
      text: o("pmp_tag_text_opt", "📝 Text")
    }, _ = {
      all: o("pmp_all_tiers", "All Tiers"),
      local: o("pmp_tier_local", "💻 Local"),
      free: o("pmp_tier_free", "🆓 Free"),
      paid: o("pmp_tier_paid", "💎 Paid")
    }, C = ["list", "grid"], y = {
      list: o("pmp_view_list", "☰ List"),
      grid: o("pmp_view_grid", "⊞ Tiles")
    }, b = J(
      () => s.value === "ollama" || s.value === "lmstudio" ? ["all", "local"] : ["all", "free", "paid"]
    );
    $e(
      () => n.open,
      (P) => {
        P && (s.value = n.provider || "ollama", a.value = n.model || "", r.value = "", u.value = "all", c.value = "all", x());
      }
    );
    async function x(P = !1) {
      try {
        await i.loadModels(s.value, P);
      } catch (M) {
        kt.error(M instanceof Error ? M.message : String(M));
      }
    }
    function v(P) {
      s.value = P, r.value = "", c.value = "all";
      const M = i.modelsFor(P);
      M.length > 0 ? a.value = M[0] : a.value = "", x();
    }
    const w = J(() => i.modelsFor(s.value)), F = J(() => i.visionModelsFor(s.value)), G = J(() => i.isLoading(s.value)), j = J(() => i.probeState[s.value]), $ = J(() => i.cachedAgeLabel(s.value));
    function q(P, M) {
      return M === "ollama" || M === "lmstudio" ? "local" : P.toLowerCase().includes(":free") ? "free" : "paid";
    }
    function Q(P) {
      return F.value.includes(P);
    }
    const k = J(() => {
      let P = w.value;
      const M = r.value.trim().toLowerCase(), A = s.value;
      return M && (P = P.filter((U) => U.toLowerCase().includes(M))), u.value === "vision" ? P = P.filter((U) => Q(U)) : u.value === "text" && (P = P.filter((U) => !Q(U))), c.value !== "all" && (P = P.filter((U) => q(U, A) === c.value)), P;
    });
    function L(P) {
      a.value = P;
    }
    function T() {
      a.value && (l("select", { provider: s.value, model: a.value }), l("update:open", !1));
    }
    function te() {
      l("update:open", !1);
    }
    return (P, M) => (I(), Ie(gn, {
      open: e.open,
      width: "860px",
      title: f(o)("pmp_title", "🔌 Choose Provider & Model"),
      "onUpdate:open": M[6] || (M[6] = (A) => l("update:open", A)),
      onClose: te
    }, {
      default: $t(() => [
        D("div", xm, [
          D("div", Cm, [
            (I(!0), N(ue, null, Me(f(un), (A) => (I(), N("button", {
              key: A,
              type: "button",
              class: me(["tab-btn", { active: A === s.value }]),
              onClick: (U) => v(A)
            }, [
              V(tn, {
                name: f(so)[A],
                size: 18
              }, null, 8, ["name"]),
              D("span", Mm, z(f(Ol)[A] ?? A), 1),
              f(i).modelsFor(A).length ? (I(), N("span", Fm, z(f(i).modelsFor(A).length), 1)) : ae("", !0)
            ], 10, Am))), 128))
          ]),
          D("div", km, [
            D("div", Lm, [
              D("span", Im, z(f(Ol)[s.value] ?? s.value), 1),
              G.value ? (I(), N("span", Dm, "⏳ " + z(f(o)("pmp_loading", "Loading...")), 1)) : j.value && j.value.status && j.value.status !== "available" ? (I(), N("span", Pm, " ⚠️ " + z(j.value.message || j.value.status), 1)) : (I(), N("span", Rm, " ● " + z(f(o)("pmp_online", "Online")) + " (" + z(w.value.length) + " " + z(f(o)("prov_models", "models")) + ") ", 1)),
              $.value ? (I(), N("span", Nm, z(f(o)("pmp_updated", "Updated")) + ": " + z($.value), 1)) : ae("", !0)
            ]),
            V(Ge, {
              variant: "sm",
              label: f(o)("pmp_refresh", "↻ Refresh"),
              loading: G.value,
              title: f(o)("tt_refresh", "Reload models list"),
              onClick: M[0] || (M[0] = (A) => x(!0))
            }, null, 8, ["label", "loading", "title"])
          ]),
          D("div", Tm, [
            D("div", Em, [
              V(tn, {
                name: "search",
                size: 14,
                class: "search-icon"
              }),
              it(D("input", {
                "onUpdate:modelValue": M[1] || (M[1] = (A) => r.value = A),
                type: "text",
                class: "search-input",
                placeholder: f(o)("pmp_search", "Search models...")
              }, null, 8, Om), [
                [Mt, r.value]
              ]),
              r.value ? (I(), N("button", {
                key: 0,
                type: "button",
                class: "clear-search",
                title: f(o)("tt_clear_search", "Clear search"),
                onClick: M[2] || (M[2] = (A) => r.value = "")
              }, "✕", 8, Vm)) : ae("", !0)
            ]),
            D("div", $m, [
              V(nt, {
                options: [...h],
                "option-labels": m,
                "model-value": u.value,
                "onUpdate:modelValue": M[3] || (M[3] = (A) => u.value = A)
              }, null, 8, ["options", "model-value"]),
              V(nt, {
                options: b.value,
                "option-labels": _,
                "model-value": c.value,
                "onUpdate:modelValue": M[4] || (M[4] = (A) => c.value = A)
              }, null, 8, ["options", "model-value"]),
              V(nt, {
                options: [...C],
                "option-labels": y,
                "model-value": d.value,
                "onUpdate:modelValue": M[5] || (M[5] = (A) => p(A))
              }, null, 8, ["options", "model-value"])
            ])
          ]),
          D("div", Bm, [
            G.value && !w.value.length ? (I(), N("div", Hm, [
              V(vl, {
                text: f(o)("pmp_loading_provider", "Loading models from provider...")
              }, null, 8, ["text"])
            ])) : k.value.length ? (I(), N("div", {
              key: 2,
              class: me(["models-container", d.value])
            }, [
              (I(!0), N(ue, null, Me(k.value, (A) => (I(), N("button", {
                key: A,
                type: "button",
                class: me(["model-card", { selected: A === a.value }]),
                "aria-pressed": A === a.value,
                onClick: (U) => L(A)
              }, [
                D("div", Wm, [
                  D("span", jm, z(Q(A) ? "👁" : "📝"), 1),
                  D("span", {
                    class: "model-name",
                    title: A
                  }, z(A), 9, Km)
                ]),
                D("div", zm, [
                  Q(A) ? (I(), N("span", qm, z(f(o)("pmp_tag_vision", "Vision")), 1)) : (I(), N("span", Xm, z(f(o)("pmp_tag_text", "Text")), 1)),
                  q(A, s.value) === "local" ? (I(), N("span", Ym, z(f(o)("pmp_tag_local", "Local")), 1)) : q(A, s.value) === "free" ? (I(), N("span", Jm, z(f(o)("pmp_tag_free", "Free")), 1)) : (I(), N("span", Qm, z(f(o)("pmp_tag_paid", "Paid")), 1))
                ])
              ], 10, Gm))), 128))
            ], 2)) : (I(), N("div", Um, [
              D("span", null, z(f(o)("pmp_no_match", "No models matching criteria")), 1)
            ]))
          ]),
          D("div", Zm, [
            D("div", eh, [
              a.value ? (I(), N("span", th, [
                Il(z(f(o)("pmp_selected", "Selected")) + ": ", 1),
                D("strong", null, z(a.value), 1)
              ])) : (I(), N("span", nh, z(f(o)("pmp_none_selected", "No model selected")), 1))
            ]),
            D("div", lh, [
              V(Ge, {
                label: f(o)("pmp_cancel", "Cancel"),
                title: f(o)("pmp_cancel_tt", "Close without changing the model"),
                onClick: te
              }, null, 8, ["label", "title"]),
              V(Ge, {
                variant: "accent",
                label: f(o)("pmp_apply", "✔ Apply Selection"),
                title: f(o)("pmp_apply_tt", "Use the selected model"),
                disabled: !a.value,
                onClick: T
              }, null, 8, ["label", "title", "disabled"])
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["open", "title"]));
  }
}), oh = /* @__PURE__ */ xe(ih, [["__scopeId", "data-v-2a40c6e8"]]), sh = { class: "fil-provider-root" }, ah = { class: "trigger-header" }, rh = { class: "provider-badge" }, ch = { class: "provider-title" }, uh = { class: "trigger-model" }, dh = ["title"], fh = 3e5, ph = /* @__PURE__ */ we({
  __name: "ProviderLoader",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, n = oo(), { t: l } = Nt(), i = /* @__PURE__ */ ce(!1);
    function o(w, F) {
      return {
        get: () => t.state.nodeState[w] ?? F,
        set: (G) => {
          t.state.nodeState[w] = G;
        }
      };
    }
    const s = J(() => String(o("provider", "ollama").get()));
    function a(w) {
      o("provider", "ollama").set(w), x();
    }
    const r = J(() => String(o("model", "(loading...)").get()));
    function u(w) {
      o("model", "(loading...)").set(w), x();
    }
    const c = J(() => Number(o("temperature", 0.7).get())), d = J(() => Number(o("max_tokens", 0).get())), p = J(() => Number(o("rate_limit_ms", 100).get())), h = J(() => Number(o("max_image_side", 1024).get())), m = t.state, _ = J(() => n.isLoading(s.value)), C = J(() => n.probeState[s.value]), y = J(() => n.cachedAgeLabel(s.value));
    let b = null;
    $e(() => t.state.nodeState, () => {
    }, { deep: !0 });
    function x() {
      const w = t.state.node;
      if (!w) return;
      const F = ie(w, "model");
      if (!F) return;
      const G = n.modelsFor(s.value), j = G.length ? G : ["(no models)"];
      F.options && (F.options.values = j);
    }
    function v(w) {
      a(w.provider), u(w.model);
    }
    return nl(async () => {
      n.loadDisplayNames();
      const w = n.modelsFor(s.value);
      if (w.length)
        r.value === "(loading...)" && u(w[0] ?? "(no models)"), x(), n.loadModels(s.value);
      else
        try {
          await n.loadModels(s.value);
          const F = n.modelsFor(s.value);
          r.value === "(loading...)" && u(F[0] ?? "(no models)"), x();
        } catch (F) {
          kt.error(F instanceof Error ? F.message : String(F));
        }
      b = setInterval(() => {
        n.loadModels(s.value, !0);
      }, fh);
    }), Yl(() => {
      b && clearInterval(b);
    }), (w, F) => (I(), N("div", sh, [
      D("button", {
        type: "button",
        class: "picker-trigger-btn",
        onClick: F[0] || (F[0] = (G) => i.value = !0)
      }, [
        D("div", ah, [
          D("div", rh, [
            V(f(tn), {
              name: f(so)[s.value],
              size: 16
            }, null, 8, ["name"]),
            D("span", ch, z(f(Ol)[s.value] ?? s.value), 1)
          ]),
          F[6] || (F[6] = D("span", { class: "open-icon" }, "⚙️ Choose", -1))
        ]),
        D("div", uh, [
          F[7] || (F[7] = D("span", { class: "model-label" }, "🧠 Model:", -1)),
          D("span", {
            class: "model-name",
            title: r.value
          }, z(r.value), 9, dh)
        ])
      ]),
      _.value ? (I(), Ie(f(vl), {
        key: 0,
        text: f(l)("prov_loading_models", "Loading models…")
      }, null, 8, ["text"])) : C.value && C.value.status && C.value.status !== "available" ? (I(), Ie(f(vl), {
        key: 1,
        err: !0,
        text: C.value.message || C.value.status
      }, null, 8, ["text"])) : y.value ? (I(), Ie(f(vl), {
        key: 2,
        text: `${f(l)("prov_models_updated", "Models updated")}: ${y.value}`
      }, null, 8, ["text"])) : ae("", !0),
      V(f(Le), {
        "model-value": c.value,
        min: 0,
        max: 2,
        step: 0.05,
        label: f(l)("lbl_temperature", "🌡️ Temperature"),
        title: f(l)("tt_temperature", "Sampling temperature — higher is more creative, lower is more deterministic."),
        "onUpdate:modelValue": F[1] || (F[1] = (G) => f(m).nodeState.temperature = G)
      }, null, 8, ["model-value", "label", "title"]),
      V(f(Le), {
        "model-value": d.value,
        min: 0,
        max: 65536,
        step: 1,
        label: f(l)("lbl_max_tokens", "🔢 Max tokens"),
        title: f(l)("tt_provider_max_tokens", "Maximum tokens in the response. 0 = provider default (no explicit limit)."),
        "onUpdate:modelValue": F[2] || (F[2] = (G) => f(m).nodeState.max_tokens = G)
      }, null, 8, ["model-value", "label", "title"]),
      V(f(Le), {
        "model-value": p.value,
        min: 0,
        max: 5e3,
        step: 10,
        label: f(l)("lbl_rate_limit", "⏱️ Rate limit"),
        title: f(l)("tt_rate_limit", "Minimum delay between requests to this provider, to avoid rate limiting."),
        "onUpdate:modelValue": F[3] || (F[3] = (G) => f(m).nodeState.rate_limit_ms = G)
      }, null, 8, ["model-value", "label", "title"]),
      V(f(Le), {
        "model-value": h.value,
        min: 128,
        max: 4096,
        step: 64,
        label: f(l)("lbl_max_image_side", "🖼️ Max image side"),
        title: f(l)("tt_max_image_side", "Images are downscaled so their longest side does not exceed this value."),
        "onUpdate:modelValue": F[4] || (F[4] = (G) => f(m).nodeState.max_image_side = G)
      }, null, 8, ["model-value", "label", "title"]),
      V(oh, {
        open: i.value,
        "onUpdate:open": F[5] || (F[5] = (G) => i.value = G),
        provider: s.value,
        model: r.value,
        onSelect: v
      }, null, 8, ["open", "provider", "model"])
    ]));
  }
}), mh = /* @__PURE__ */ xe(ph, [["__scopeId", "data-v-1a9a11d7"]]), hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mh
}, Symbol.toStringTag, { value: "Module" })), ao = {
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
          multiline: null,
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
          multiline: null,
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
          multiline: null,
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
          multiline: null,
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
          default: "🌐 Universal",
          tooltip: null,
          values: [
            "⚪ None",
            "🌐 Universal",
            "👤 Portrait",
            "📦 Products",
            "🌿 Nature & Landscape",
            "🎨 Art & Illustration",
            "🔬 Ultra Detailed Expert",
            "🎬 Cinematic Master",
            "🔞 18+",
            "👗 Fashion",
            "🐾 Animals",
            "🎭 Character Performance Agent",
            "🏛 Architecture",
            "🪑 Interior",
            "🌆 City",
            "🚗 Transport",
            "🍽 Food",
            "📱 Gadgets",
            "🎮 Games",
            "📐 Composition Agent",
            "💡 Lighting & Color Agent",
            "🏷 Professional Tagger"
          ],
          columns: 3,
          searchable: null,
          multiline: null,
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
          multiline: null,
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
          multiline: null,
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
          multiline: null,
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
          multiline: null,
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
          multiline: null,
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
          multiline: null,
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
          multiline: null,
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
          multiline: null,
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
  },
  FiLStyleMixer: {
    inputs: {
      required: [
        {
          name: "base_prompt",
          kind: "string",
          label: "Base Prompt",
          default: "",
          tooltip: null,
          values: null,
          columns: null,
          searchable: null,
          multiline: !0,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: null,
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "style_1",
          kind: "chip_list",
          label: "Style 1",
          default: "(None)",
          tooltip: null,
          values: [
            "(None)",
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
            "🗺️ СЦЕНЫ/🛀 Floating Bath",
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
          multiline: null,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: null,
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "weight_1",
          kind: "slider",
          label: "Weight 1",
          default: 1,
          tooltip: null,
          values: null,
          columns: null,
          searchable: null,
          multiline: null,
          min: 0,
          max: 1,
          step: 0.05,
          units: null,
          options: null,
          section: null,
          visible_when: null,
          visible_when_value: null
        }
      ],
      optional: [
        {
          name: "fusion_mode",
          kind: "combo",
          label: "Fusion Mode",
          default: "Weighted Stack (Fast)",
          tooltip: null,
          values: [
            "Weighted Stack (Fast)",
            "Smart LLM Fusion (Gen-Mix)"
          ],
          columns: null,
          searchable: null,
          multiline: null,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: null,
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "img_focus_1",
          kind: "combo",
          label: "Image 1 Focus",
          default: "Auto / General",
          tooltip: null,
          values: [
            "Auto / General",
            "Style & Texture",
            "Color & Lighting",
            "Subject & Composition",
            "Mood & Atmosphere"
          ],
          columns: null,
          searchable: null,
          multiline: null,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: null,
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "img_weight_1",
          kind: "slider",
          label: "Image 1 Weight",
          default: 0.8,
          tooltip: null,
          values: null,
          columns: null,
          searchable: null,
          multiline: null,
          min: 0,
          max: 1,
          step: 0.05,
          units: null,
          options: null,
          section: null,
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "img_focus_2",
          kind: "combo",
          label: "Image 2 Focus",
          default: "Auto / General",
          tooltip: null,
          values: [
            "Auto / General",
            "Style & Texture",
            "Color & Lighting",
            "Subject & Composition",
            "Mood & Atmosphere"
          ],
          columns: null,
          searchable: null,
          multiline: null,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: null,
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "img_weight_2",
          kind: "slider",
          label: "Image 2 Weight",
          default: 0.6,
          tooltip: null,
          values: null,
          columns: null,
          searchable: null,
          multiline: null,
          min: 0,
          max: 1,
          step: 0.05,
          units: null,
          options: null,
          section: null,
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "img_focus_3",
          kind: "combo",
          label: "Image 3 Focus",
          default: "Auto / General",
          tooltip: null,
          values: [
            "Auto / General",
            "Style & Texture",
            "Color & Lighting",
            "Subject & Composition",
            "Mood & Atmosphere"
          ],
          columns: null,
          searchable: null,
          multiline: null,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: null,
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "img_weight_3",
          kind: "slider",
          label: "Image 3 Weight",
          default: 0.4,
          tooltip: null,
          values: null,
          columns: null,
          searchable: null,
          multiline: null,
          min: 0,
          max: 1,
          step: 0.05,
          units: null,
          options: null,
          section: null,
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "img_focus_4",
          kind: "combo",
          label: "Image 4 Focus",
          default: "Auto / General",
          tooltip: null,
          values: [
            "Auto / General",
            "Style & Texture",
            "Color & Lighting",
            "Subject & Composition",
            "Mood & Atmosphere"
          ],
          columns: null,
          searchable: null,
          multiline: null,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: null,
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "img_weight_4",
          kind: "slider",
          label: "Image 4 Weight",
          default: 0.2,
          tooltip: null,
          values: null,
          columns: null,
          searchable: null,
          multiline: null,
          min: 0,
          max: 1,
          step: 0.05,
          units: null,
          options: null,
          section: null,
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "style_2",
          kind: "chip_list",
          label: "Style 2",
          default: "(None)",
          tooltip: null,
          values: [
            "(None)",
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
            "🗺️ СЦЕНЫ/🛀 Floating Bath",
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
          multiline: null,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: null,
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "weight_2",
          kind: "slider",
          label: "Weight 2",
          default: 0.5,
          tooltip: null,
          values: null,
          columns: null,
          searchable: null,
          multiline: null,
          min: 0,
          max: 1,
          step: 0.05,
          units: null,
          options: null,
          section: null,
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "style_3",
          kind: "chip_list",
          label: "Style 3",
          default: "(None)",
          tooltip: null,
          values: [
            "(None)",
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
            "🗺️ СЦЕНЫ/🛀 Floating Bath",
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
          multiline: null,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: null,
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "weight_3",
          kind: "slider",
          label: "Weight 3",
          default: 0.3,
          tooltip: null,
          values: null,
          columns: null,
          searchable: null,
          multiline: null,
          min: 0,
          max: 1,
          step: 0.05,
          units: null,
          options: null,
          section: null,
          visible_when: null,
          visible_when_value: null
        }
      ]
    }
  },
  FiLColorWizard: {
    inputs: {
      required: [
        {
          name: "method",
          kind: "combo",
          label: "Method",
          default: "Full Auto",
          tooltip: null,
          values: [
            "Full Auto",
            "Gray World",
            "White Patch",
            "Channel Stretch",
            "LAB Enhance"
          ],
          columns: null,
          searchable: null,
          multiline: null,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: null,
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "strength",
          kind: "slider",
          label: "Strength",
          default: 0.8,
          tooltip: null,
          values: null,
          columns: null,
          searchable: null,
          multiline: null,
          min: 0,
          max: 1,
          step: 0.05,
          units: null,
          options: null,
          section: null,
          visible_when: null,
          visible_when_value: null
        }
      ],
      optional: [
        {
          name: "saturate",
          kind: "number",
          label: "Saturate",
          default: 0.5,
          tooltip: null,
          values: null,
          columns: null,
          searchable: null,
          multiline: null,
          min: 0,
          max: 5,
          step: 0.1,
          units: null,
          options: null,
          section: "advanced",
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "temperature",
          kind: "slider",
          label: "Temperature",
          default: 0,
          tooltip: null,
          values: null,
          columns: null,
          searchable: null,
          multiline: null,
          min: -1,
          max: 1,
          step: 0.05,
          units: null,
          options: null,
          section: "advanced",
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "tint",
          kind: "slider",
          label: "Tint",
          default: 0,
          tooltip: null,
          values: null,
          columns: null,
          searchable: null,
          multiline: null,
          min: -1,
          max: 1,
          step: 0.05,
          units: null,
          options: null,
          section: "advanced",
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "preserve_skin",
          kind: "boolean",
          label: "Preserve skin",
          default: !1,
          tooltip: null,
          values: null,
          columns: null,
          searchable: null,
          multiline: null,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: "advanced",
          visible_when: null,
          visible_when_value: null
        }
      ]
    }
  }
}, gh = { class: "fil-scanner-root" }, _h = {
  key: 0,
  class: "fil-section-block"
}, bh = {
  key: 0,
  class: "fil-w-row fil-single-style-block"
}, vh = { style: { display: "flex", gap: "4px", "margin-bottom": "3px" } }, yh = { style: { display: "flex", "margin-bottom": "6px" } }, wh = { class: "fil-unified-style-modal" }, Sh = { class: "fil-style-tab-bar" }, xh = ["onClick"], Ch = { class: "fil-tab-icon" }, Ah = { class: "fil-tab-title" }, Mh = {
  key: 0,
  class: "fil-tab-badge"
}, Fh = { class: "fil-style-picker-body" }, kh = { class: "fil-style-modal-footer" }, Lh = ["title"], Ih = ["value", "placeholder", "onInput"], Dh = ["value", "placeholder", "onInput"], Ph = { class: "fil-scanner-seed-row" }, Rh = ["value", "readonly", "title"], Nh = ["title"], Th = ["title"], Eh = ["title"], Oh = /* @__PURE__ */ we({
  __name: "OpticScanner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Nt(), l = ao.FiLOpticScanner, i = (l == null ? void 0 : l.inputs.required) ?? [], o = {
      prompt: ["scn_section_prompt", "📝 Prompt/Text"],
      agent: ["scn_section_agent", "🕵️ Agent"],
      model: ["scn_section_model", "🧠 Model"],
      output: ["scn_section_output", "📤 Output"],
      advanced: ["scn_section_advanced", "🎨 Style"],
      actions: ["scn_section_actions", "⚡ Actions"]
    };
    function s(P) {
      const M = o[P];
      return M ? n(M[0], M[1]) : P.toUpperCase();
    }
    const a = {
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
    function r(P) {
      const M = a[P.name];
      return M ? n(M, P.tooltip || "") : P.tooltip || "";
    }
    const u = {
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
    function c(P) {
      if (P.label) return P.label;
      const M = u[P.name] || "", A = P.name.replace(/_/g, " ").replace(/\b\w/g, (U) => U.toUpperCase());
      return M ? `${M} ${A}` : A;
    }
    const d = /* @__PURE__ */ ce(!1), p = /* @__PURE__ */ ce("photo_style");
    function h(P) {
      return !P || P === "None" ? [] : P.split("|").map((A) => A.trim()).filter((A) => A && A !== "None").map((A) => {
        const U = A.indexOf("/");
        return (U === -1 ? A : A.slice(U + 1)).replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}\s]+/gu, "").trim();
      });
    }
    const m = J(() => {
      const P = [], M = h(String(w("photo_style", "None"))), A = h(String(w("nsfw_photo_style", "None"))), U = h(String(w("art_style", "None"))), Z = h(String(w("nsfw_art_style", "None")));
      for (const ne of M) P.push(`📷 ${ne}`);
      for (const ne of A) P.push(`🔞 ${ne}`);
      for (const ne of U) P.push(`🎨 ${ne}`);
      for (const ne of Z) P.push(`🔞 ${ne}`);
      return P.length === 0 ? n("scn_style_button_none", "🎨 Style: None") : P.join(" | ");
    }), _ = [
      { id: "photo_style", icon: "📷", labelKey: "scn_style_photo_label", fallback: "Photo" },
      { id: "nsfw_photo_style", icon: "🔞", labelKey: "scn_style_nsfw_photo_label", fallback: "NSFW Photo" },
      { id: "art_style", icon: "🎨", labelKey: "scn_style_art_label", fallback: "Art" },
      { id: "nsfw_art_style", icon: "🔞", labelKey: "scn_style_nsfw_art_label", fallback: "NSFW Art" }
    ];
    function C(P) {
      return String(w(P, "None") || "None");
    }
    function y(P, M) {
      F(P, M);
    }
    function b(P) {
      const M = i.find((A) => A.name === P);
      return (M == null ? void 0 : M.values) || [];
    }
    function x() {
      F("photo_style", "None"), F("nsfw_photo_style", "None"), F("art_style", "None"), F("nsfw_art_style", "None");
    }
    const v = J(() => {
      var M;
      const P = {};
      for (const A of i) (P[M = A.section || "_"] ?? (P[M] = [])).push(A);
      return P;
    });
    function w(P, M = "") {
      return t.state.nodeState[P] ?? t.state.initialValues[P] ?? M;
    }
    function F(P, M) {
      t.state.nodeState[P] = M;
    }
    const G = /* @__PURE__ */ new Set(["agent", "output", "advanced"]);
    function j(P) {
      const M = t.state.ui[`collapsed_${P}`];
      return M === void 0 ? G.has(P) : !!M;
    }
    function $(P, M) {
      t.state.ui[`collapsed_${P}`] = M;
    }
    $e(() => t.state.nodeState, () => {
    }, { deep: !0 });
    const q = J({
      get: () => t.state.nodeState.seed_mode ?? "random",
      set: (P) => {
        t.state.nodeState.seed_mode = P;
      }
    }), Q = J({
      get: () => Number(t.state.nodeState.seed ?? -1) || -1,
      // Write the native seed widget directly, not just nodeState: the
      // createSyncedNodeState mirror doesn't reach the seed widget the same way
      // control_after_generate expects, so a fixed seed set only via nodeState
      // can fail to reach the queued prompt. Direct assignment sticks.
      set: (P) => {
        t.state.nodeState.seed = P;
        const M = t.state.node ? ie(t.state.node, "seed") : null;
        M && (M.value = P);
      }
    }), k = J(() => q.value === "fixed" ? `${Q.value}` : "random");
    $e(q, (P) => {
      const M = t.state.node, A = M ? ie(M, "control_after_generate") : null;
      A && (A.value = P === "fixed" ? "fixed" : "randomize");
    }, { immediate: !0 });
    function L() {
      q.value = "random";
    }
    function T() {
      const P = t.state.node, M = P ? ie(P, "seed") : null, A = M && Number.isFinite(Number(M.value)) ? Number(M.value) : t.state.lastRunSeed;
      if (A == null || !Number.isFinite(A)) {
        kt.warning("No last-run seed recorded yet");
        return;
      }
      Q.value = A, q.value = "fixed";
    }
    function te() {
      const P = Math.floor(Math.random() * 1e9) & 2147483647;
      Q.value = P, q.value = "fixed";
    }
    return (P, M) => (I(), N("div", gh, [
      (I(!0), N(ue, null, Me(v.value, (A, U) => (I(), N(ue, { key: U }, [
        U !== "styles" ? (I(), N("div", _h, [
          U !== "_" && U !== "prompt" ? (I(), Ie(f(Qe), {
            key: 0,
            title: s(String(U)),
            "model-value": j(String(U)),
            "onUpdate:modelValue": (Z) => $(String(U), Z)
          }, null, 8, ["title", "model-value", "onUpdate:modelValue"])) : ae("", !0),
          (I(!0), N(ue, null, Me(A, (Z) => (I(), N(ue, {
            key: Z.name
          }, [
            Z.name === "response_format" ? (I(), N("div", bh, [
              D("div", vh, [
                V(f(Ge), {
                  variant: "full",
                  label: m.value,
                  onClick: M[0] || (M[0] = (ne) => d.value = !0),
                  style: { flex: "2" }
                }, null, 8, ["label"])
              ]),
              D("div", yh, [
                V(f(Ge), {
                  variant: "standard",
                  label: "🧹 Clear Style",
                  onClick: x,
                  style: { flex: "1" }
                })
              ]),
              V(f(gn), {
                open: d.value,
                title: f(n)("scn_unified_style_title", "🎨 Style Selection"),
                width: "680px",
                "onUpdate:open": M[2] || (M[2] = (ne) => d.value = ne)
              }, {
                default: $t(() => [
                  D("div", wh, [
                    D("div", Sh, [
                      (I(), N(ue, null, Me(_, (ne) => D("button", {
                        key: ne.id,
                        type: "button",
                        class: me(["fil-style-tab-btn", { active: p.value === ne.id, "has-value": C(ne.id) !== "None" }]),
                        onClick: (Te) => p.value = ne.id
                      }, [
                        D("span", Ch, z(ne.icon), 1),
                        D("span", Ah, z(f(n)(ne.labelKey, ne.fallback)), 1),
                        C(ne.id) !== "None" ? (I(), N("span", Mh, "✓")) : ae("", !0)
                      ], 10, xh)), 64))
                    ]),
                    D("div", Fh, [
                      V(f(yl), {
                        styles: b(p.value),
                        "model-value": C(p.value),
                        multi: !0,
                        onSelect: M[1] || (M[1] = (ne) => y(p.value, ne))
                      }, null, 8, ["styles", "model-value"])
                    ]),
                    D("div", kh, [
                      D("button", {
                        type: "button",
                        class: "fil-clear-styles-btn",
                        onClick: x
                      }, z(f(n)("scn_clear_all_styles", "🗑️ Clear all styles")), 1)
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["open", "title"])
            ])) : ae("", !0),
            it(D("div", {
              class: "fil-w-row",
              title: r(Z)
            }, [
              Z.name === "prompt" || Z.name === "negative_prompt" ? (I(), N("textarea", {
                key: 0,
                value: String(w(Z.name, "")),
                class: "fil-scanner-textarea",
                placeholder: c(Z),
                rows: "2",
                onInput: (ne) => F(Z.name, ne.target.value)
              }, null, 40, Ih)) : Z.name === "custom_style" ? (I(), N("input", {
                key: 1,
                value: String(w(Z.name, "")),
                type: "text",
                class: "fil-scanner-input",
                placeholder: c(Z),
                onInput: (ne) => F(Z.name, ne.target.value)
              }, null, 40, Dh)) : Z.kind === "chip_grid" ? (I(), Ie(f(ds), {
                key: 2,
                options: Z.values || [],
                "model-value": String(w(Z.name, "")),
                columns: Z.columns ?? 3,
                "onUpdate:modelValue": (ne) => F(Z.name, ne)
              }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"])) : Z.kind === "chip_list" ? (I(), Ie(f(mp), {
                key: 3,
                options: Z.values || [],
                "model-value": w(Z.name, null),
                searchable: Z.searchable ?? !0,
                "onUpdate:modelValue": (ne) => F(Z.name, ne)
              }, null, 8, ["options", "model-value", "searchable", "onUpdate:modelValue"])) : Z.kind === "segmented" ? (I(), Ie(f(nt), {
                key: 4,
                options: Z.options || [],
                "model-value": String(w(Z.name, "")),
                label: c(Z),
                "onUpdate:modelValue": (ne) => F(Z.name, ne)
              }, null, 8, ["options", "model-value", "label", "onUpdate:modelValue"])) : (I(), Ie(f(ds), {
                key: 5,
                options: Z.values || [],
                "model-value": String(w(Z.name, "")),
                columns: Z.columns ?? 3,
                "onUpdate:modelValue": (ne) => F(Z.name, ne)
              }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"]))
            ], 8, Lh), [
              [pu, U === "_" || U === "prompt" || !j(String(U))]
            ])
          ], 64))), 128))
        ])) : ae("", !0)
      ], 64))), 128)),
      D("div", Ph, [
        D("input", {
          value: k.value,
          type: "text",
          class: me(["fil-scanner-seed-field", { "is-random": q.value === "random" }]),
          readonly: q.value === "random",
          "aria-label": "Seed value",
          title: q.value === "fixed" ? f(n)("scn_seed_locked", "Locked seed") : f(n)("scn_seed_auto_random", "Auto-random — a new seed is generated each run"),
          onInput: M[3] || (M[3] = (A) => Q.value = Number(A.target.value) || 0)
        }, null, 42, Rh),
        D("button", {
          type: "button",
          class: me(["fil-scanner-seed-pill", { active: q.value === "random" }]),
          title: f(n)("scn_seed_mode_tt", "Random generates a new seed each run."),
          onClick: L
        }, z(f(n)("scn_seed_random", "Random")), 11, Nh),
        D("button", {
          type: "button",
          class: "fil-scanner-seed-pill",
          title: t.state.lastRunSeed != null ? `${f(n)("scn_seed_use_last_prefix", "Reuse the last run's seed:")} ${t.state.lastRunSeed}` : f(n)("scn_seed_use_last_tt", "Reuse the seed from the last executed run."),
          onClick: T
        }, z(f(n)("scn_seed_use_last", "Use last")), 9, Th),
        D("button", {
          type: "button",
          class: "fil-scanner-seed-pill fil-scanner-seed-pill-accent",
          title: f(n)("scn_seed_new_fixed_tt", "Generate a new random fixed seed."),
          onClick: te
        }, z(f(n)("scn_seed_new_fixed", "New fixed")), 9, Eh)
      ])
    ]));
  }
}), Vh = /* @__PURE__ */ xe(Oh, [["__scopeId", "data-v-bd04f211"]]), $h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vh
}, Symbol.toStringTag, { value: "Module" })), Bh = { class: "fil-cleaner-root" }, Hh = ["aria-pressed", "onClick"], Uh = { class: "fil-cleaner-label" }, Gh = /* @__PURE__ */ we({
  __name: "NeuroCleaner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Nt(), l = [
      { name: "clean_vram", label: n("cln_flush_vram", "🧹 Flush GPU Cache"), defaultOn: !0 },
      { name: "unload_diffusion", label: n("cln_unload_diffusion", "🌀 Unload Diffusion (FLUX/SD)"), defaultOn: !0 },
      { name: "unload_clip", label: n("cln_unload_clip", "📎 Unload CLIP / Text Encoder"), defaultOn: !1 },
      { name: "unload_vae", label: n("cln_unload_vae", "🖼️ Unload VAE"), defaultOn: !1 },
      { name: "unload_control", label: n("cln_unload_control", "🎛️ Unload ControlNet / Adapter"), defaultOn: !1 }
    ];
    function i(s, a) {
      const r = t.state.nodeState[s];
      return typeof r == "boolean" ? r : a;
    }
    function o(s, a) {
      t.state.nodeState[s] = !i(s, a);
    }
    return (s, a) => (I(), N("div", Bh, [
      (I(), N(ue, null, Me(l, (r) => D("button", {
        key: r.name,
        type: "button",
        class: me(["fil-cleaner-row", { active: i(r.name, r.defaultOn) }]),
        "aria-pressed": i(r.name, r.defaultOn),
        onClick: (u) => o(r.name, r.defaultOn)
      }, [
        a[0] || (a[0] = D("span", { class: "fil-cleaner-dot" }, null, -1)),
        D("span", Uh, z(f(n)(`nc_${r.name}`, r.label)), 1)
      ], 10, Hh)), 64))
    ]));
  }
}), Wh = /* @__PURE__ */ xe(Gh, [["__scopeId", "data-v-a216fc35"]]), jh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wh
}, Symbol.toStringTag, { value: "Module" })), Kh = { class: "fil-up-root" }, zh = { class: "fil-up-row fil-up-row-overlap" }, qh = ["title"], Xh = ["title"], Yh = { class: "fil-up-row" }, Jh = ["title"], Qh = ["title"], Zh = /* @__PURE__ */ we({
  __name: "UpscaleTileCalc",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Nt(), l = ["Low VRAM", "Balanced", "High VRAM", "Max Quality", "Ultra Quality"], i = {
      "Low VRAM": "🪫 Low VRAM",
      Balanced: "⚖️ Balanced",
      "High VRAM": "🔋 High VRAM",
      "Max Quality": "💎 Max Quality",
      "Ultra Quality": "👑 Ultra Quality"
    };
    function o(x, v) {
      return J({
        get: () => Number(t.state.nodeState[x] ?? t.state.initialValues[x] ?? v) || v,
        set: (w) => {
          t.state.nodeState[x] = w;
        }
      });
    }
    function s(x, v) {
      return J({
        get: () => t.state.nodeState[x] ?? t.state.initialValues[x] ?? v ? "ON" : "OFF",
        set: (w) => {
          t.state.nodeState[x] = w === "ON";
        }
      });
    }
    const a = o("upscale_factor", 2), r = o("tile_size", 1024), u = o("tile_overlap", 64), c = o("manual_tile_cols", 0), d = o("manual_tile_rows", 0), p = s("auto_overlap", !1), h = s("auto_mode", !1), m = s("non_square_tiles", !1), _ = s("auto_fix_thin_edges", !1), C = J({
      get: () => String(t.state.nodeState.auto_profile ?? t.state.initialValues.auto_profile ?? "Balanced"),
      set: (x) => {
        t.state.nodeState.auto_profile = x;
      }
    });
    function y(x) {
      return !!t.state.ui[`collapsed_${x}`];
    }
    function b(x, v) {
      t.state.ui[`collapsed_${x}`] = v;
    }
    return $e(() => t.state.nodeState, () => {
    }, { deep: !0 }), (x, v) => (I(), N("div", Kh, [
      V(f(Le), {
        "model-value": f(a),
        min: 0.1,
        max: 8,
        step: 0.25,
        label: f(n)("lbl_upscale_factor", "🔍 Upscale factor"),
        title: f(n)("utc_factor", "Upscale multiplier."),
        "onUpdate:modelValue": v[0] || (v[0] = (w) => a.value = w)
      }, null, 8, ["model-value", "label", "title"]),
      V(f(Qe), {
        title: f(n)("utc_section_auto", "⚙️ Auto / advanced"),
        "model-value": y("auto"),
        "onUpdate:modelValue": v[1] || (v[1] = (w) => b("auto", w))
      }, null, 8, ["title", "model-value"]),
      y("auto") ? ae("", !0) : (I(), N(ue, { key: 0 }, [
        V(f(ml), {
          "model-value": f(h),
          label: f(n)("lbl_full_auto", "🤖 Full auto"),
          title: f(n)("utc_auto_mode", "Pick tile size/overlap automatically from the selected VRAM profile."),
          "onUpdate:modelValue": v[2] || (v[2] = (w) => h.value = w)
        }, null, 8, ["model-value", "label", "title"]),
        f(h) === "ON" ? (I(), Ie(f(nt), {
          key: 0,
          options: [...l],
          "option-labels": i,
          "model-value": C.value,
          label: f(n)("lbl_auto_profile", "🎚️ Auto profile"),
          title: f(n)("utc_auto_profile", "VRAM/quality profile used when Full Auto is on."),
          "onUpdate:modelValue": v[3] || (v[3] = (w) => C.value = w)
        }, null, 8, ["options", "model-value", "label", "title"])) : ae("", !0),
        f(h) === "OFF" ? (I(), N(ue, { key: 1 }, [
          D("div", zh, [
            D("label", {
              class: "fil-w-label",
              title: f(n)("utc_tile_size", "Base tile size.")
            }, z(f(n)("lbl_tile_size", "🔲 Tile size")), 9, qh),
            V(f(Qt), {
              modelValue: f(r),
              "onUpdate:modelValue": v[4] || (v[4] = (w) => /* @__PURE__ */ de(r) ? r.value = w : null),
              min: 64,
              max: 2048,
              step: 64
            }, null, 8, ["modelValue"]),
            D("label", {
              class: "fil-w-label",
              title: f(n)("utc_overlap", "Tile overlap.")
            }, z(f(n)("lbl_overlap", "🧵 Overlap")), 9, Xh),
            V(f(Qt), {
              modelValue: f(u),
              "onUpdate:modelValue": v[5] || (v[5] = (w) => /* @__PURE__ */ de(u) ? u.value = w : null),
              min: 0,
              max: 512,
              step: 8,
              disabled: f(p) === "ON"
            }, null, 8, ["modelValue", "disabled"]),
            V(f(ml), {
              bare: "",
              "model-value": f(p),
              label: f(n)("lbl_auto_overlap", "🧵 Auto"),
              title: f(n)("utc_auto_overlap", "Derive overlap automatically from tile size (~12.5%) instead of the fixed value above."),
              "onUpdate:modelValue": v[6] || (v[6] = (w) => p.value = w)
            }, null, 8, ["model-value", "label", "title"])
          ]),
          D("div", Yh, [
            D("label", {
              class: "fil-w-label",
              title: f(n)("utc_manual_cols", "Force this many tile columns. 0 = compute from tile size.")
            }, z(f(n)("lbl_manual_cols", "↔️ Cols")), 9, Jh),
            V(f(Qt), {
              modelValue: f(c),
              "onUpdate:modelValue": v[7] || (v[7] = (w) => /* @__PURE__ */ de(c) ? c.value = w : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"]),
            D("label", {
              class: "fil-w-label",
              title: f(n)("utc_manual_rows", "Force this many tile rows. 0 = compute from tile size.")
            }, z(f(n)("lbl_manual_rows", "↕️ Rows")), 9, Qh),
            V(f(Qt), {
              modelValue: f(d),
              "onUpdate:modelValue": v[8] || (v[8] = (w) => /* @__PURE__ */ de(d) ? d.value = w : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"])
          ]),
          V(f(ml), {
            "model-value": f(_),
            label: f(n)("lbl_auto_fix_edges", "🩹 Auto-fix thin edges"),
            title: f(n)("utc_auto_fix_edges", "Shrink tile_size to the next standard size instead of just warning when the grid would leave a thin edge tile."),
            "onUpdate:modelValue": v[9] || (v[9] = (w) => _.value = w)
          }, null, 8, ["model-value", "label", "title"])
        ], 64)) : ae("", !0)
      ], 64)),
      V(f(ml), {
        "model-value": f(m),
        label: f(n)("lbl_non_square", "📐 Non-square tiles"),
        title: f(n)("utc_non_square", "Allow rectangular tiles instead of forcing square ones."),
        "onUpdate:modelValue": v[10] || (v[10] = (w) => m.value = w)
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), eg = /* @__PURE__ */ xe(Zh, [["__scopeId", "data-v-57658737"]]), Ka = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: eg
}, Symbol.toStringTag, { value: "Module" })), tg = { class: "fil-hrf-root" }, ng = {
  key: 2,
  class: "fil-hrf-seed-row"
}, lg = ["value", "readonly", "title"], ig = ["title"], og = ["title"], sg = ["title"], ag = /* @__PURE__ */ we({
  __name: "HiResFix",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Nt();
    function l(M, A) {
      return J({
        get: () => Number(t.state.nodeState[M] ?? t.state.initialValues[M] ?? A) || A,
        set: (U) => {
          t.state.nodeState[M] = U;
        }
      });
    }
    function i(M, A) {
      return J({
        get: () => String(t.state.nodeState[M] ?? t.state.initialValues[M] ?? A),
        set: (U) => {
          t.state.nodeState[M] = U;
        }
      });
    }
    function o(M, A) {
      return J({
        get: () => t.state.nodeState[M] ?? t.state.initialValues[M] ?? A ? "ON" : "OFF",
        set: (U) => {
          t.state.nodeState[M] = U === "ON";
        }
      });
    }
    function s(M, A) {
      var Te;
      const U = t.state.node, Z = U ? ie(U, M) : null, ne = (Te = Z == null ? void 0 : Z.options) == null ? void 0 : Te.values;
      return Array.isArray(ne) && ne.length ? ne : A;
    }
    const a = i("upscale_type", "latent"), r = i("hires_ckpt_name", "(use same)"), u = i("latent_upscaler", "nearest-exact"), c = i("pixel_upscaler", ""), d = l("upscale_by", 1.25), p = o("use_same_seed", !0), h = l("denoise", 0.56), m = l("hires_steps", 12), _ = l("iterations", 1), C = o("use_controlnet", !1), y = i("control_net_name", ""), b = l("strength", 1), x = i("preprocessor", "none"), v = J(() => s("hires_ckpt_name", ["(use same)"])), w = ["nearest-exact", "bilinear", "area", "bicubic", "bislerp"], F = J(() => s("pixel_upscaler", ["(none)"])), G = J(() => s("control_net_name", ["(none)"])), j = J(() => s("preprocessor", ["none", "canny"])), $ = J(() => a.value === "latent"), q = J(() => a.value === "pixel" || a.value === "both"), Q = J({
      get: () => t.state.nodeState.seed_mode ?? "random",
      set: (M) => {
        t.state.nodeState.seed_mode = M;
      }
    }), k = J({
      get: () => Number(t.state.nodeState.seed ?? 0) || 0,
      // Write the native seed widget directly, not just nodeState: the
      // createSyncedNodeState mirror doesn't reach the seed widget (its value is
      // a prototype accessor tied to control_after_generate's linked-widget
      // machinery, unlike the plain numeric widgets), so a fixed seed set only
      // via nodeState never reaches the queued prompt. Direct assignment sticks.
      set: (M) => {
        t.state.nodeState.seed = M;
        const A = t.state.node ? ie(t.state.node, "seed") : null;
        A && (A.value = M);
      }
    }), L = J(() => Q.value === "fixed" ? `${k.value}` : "random");
    $e([p, Q], ([M, A]) => {
      const U = t.state.node, Z = U ? ie(U, "control_after_generate") : null;
      Z && (Z.value = M === "ON" || A === "fixed" ? "fixed" : "randomize");
    }, { immediate: !0 });
    function T() {
      Q.value = "random";
    }
    function te() {
      const M = t.state.node, A = M ? ie(M, "seed") : null, U = A && Number.isFinite(Number(A.value)) ? Number(A.value) : t.state.lastRunSeed;
      if (U == null || !Number.isFinite(U)) {
        kt.warning("No last-run seed recorded yet");
        return;
      }
      k.value = U, Q.value = "fixed";
    }
    function P() {
      const M = Math.floor(Math.random() * 1e9) & 2147483647;
      k.value = M, Q.value = "fixed";
    }
    return (M, A) => (I(), N("div", tg, [
      V(f(nt), {
        options: ["latent", "pixel", "both"],
        "option-labels": { latent: "🌀 latent", pixel: "🖼️ pixel", both: "🔀 both" },
        "model-value": f(a),
        label: f(n)("lbl_upscale_type", "⬆️ Upscale type"),
        title: f(n)("hrf_upscale_type", "Upscale in latent space, pixel space, or both."),
        "onUpdate:modelValue": A[0] || (A[0] = (U) => a.value = U)
      }, null, 8, ["model-value", "label", "title"]),
      $.value ? (I(), Ie(f(fl), {
        key: 0,
        options: w,
        "model-value": f(u),
        label: f(n)("lbl_latent_up", "🌀 Latent upscaler"),
        title: f(n)("hrf_latent_up", "Latent upscale method."),
        "onUpdate:modelValue": A[1] || (A[1] = (U) => u.value = U)
      }, null, 8, ["model-value", "label", "title"])) : ae("", !0),
      q.value ? (I(), Ie(f(fl), {
        key: 1,
        options: F.value,
        "model-value": f(c),
        label: f(n)("lbl_pixel_up", "🖼️ Pixel upscaler"),
        title: f(n)("hrf_pixel_up", "Pixel upscale model (from upscale_models)."),
        "onUpdate:modelValue": A[2] || (A[2] = (U) => c.value = U)
      }, null, 8, ["options", "model-value", "label", "title"])) : ae("", !0),
      V(f(fl), {
        options: v.value,
        "model-value": f(r),
        label: f(n)("lbl_hires_ckpt", "📦 Hires checkpoint"),
        title: f(n)("hrf_ckpt", "Checkpoint for the hires pass. (use same) reuses the base model."),
        "onUpdate:modelValue": A[3] || (A[3] = (U) => r.value = U)
      }, null, 8, ["options", "model-value", "label", "title"]),
      V(f(Le), {
        "model-value": f(d),
        min: 0.01,
        max: 8,
        step: 0.05,
        label: f(n)("lbl_upscale_by", "🔍 Upscale by"),
        title: f(n)("hrf_upscale_by", "Upscale multiplier."),
        "onUpdate:modelValue": A[4] || (A[4] = (U) => d.value = U)
      }, null, 8, ["model-value", "label", "title"]),
      V(f(Le), {
        "model-value": f(h),
        min: 0,
        max: 1,
        step: 0.01,
        label: f(n)("lbl_hrf_denoise", "💧 Denoise"),
        title: f(n)("hrf_denoise", "Denoise strength for the hires re-sample."),
        "onUpdate:modelValue": A[5] || (A[5] = (U) => h.value = U)
      }, null, 8, ["model-value", "label", "title"]),
      V(f(Qt), {
        modelValue: f(m),
        "onUpdate:modelValue": A[6] || (A[6] = (U) => /* @__PURE__ */ de(m) ? m.value = U : null),
        min: 1,
        max: 1e4,
        step: 1,
        label: f(n)("lbl_hires_steps", "🪜 Hires steps"),
        title: f(n)("hrf_steps", "Steps for the hires re-sample.")
      }, null, 8, ["modelValue", "label", "title"]),
      V(f(Qt), {
        modelValue: f(_),
        "onUpdate:modelValue": A[7] || (A[7] = (U) => /* @__PURE__ */ de(_) ? _.value = U : null),
        min: 0,
        max: 5,
        step: 1,
        label: f(n)("lbl_iterations", "🔁 Iterations"),
        title: f(n)("hrf_iterations", "How many upscale+resample passes to run.")
      }, null, 8, ["modelValue", "label", "title"]),
      V(f(nt), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "♻️ same seed", OFF: "🎲 own" },
        "model-value": f(p),
        label: f(n)("lbl_use_same_seed", "🌱 Seed source"),
        title: f(n)("hrf_same_seed", "Reuse the samplers seed for the hires pass."),
        "onUpdate:modelValue": A[8] || (A[8] = (U) => p.value = U)
      }, null, 8, ["model-value", "label", "title"]),
      f(p) === "OFF" ? (I(), N("div", ng, [
        D("input", {
          value: L.value,
          type: "text",
          class: me(["fil-hrf-seed-field", { "is-random": Q.value === "random" }]),
          readonly: Q.value === "random",
          "aria-label": "Hires seed value",
          title: Q.value === "fixed" ? f(n)("hrf_seed_locked", "Locked hires seed") : f(n)("hrf_seed_auto_random", "Auto-random — a new hires seed is generated each run"),
          onInput: A[9] || (A[9] = (U) => k.value = Number(U.target.value) || 0)
        }, null, 42, lg),
        D("button", {
          type: "button",
          class: me(["fil-hrf-seed-pill", { active: Q.value === "random" }]),
          title: f(n)("hrf_seed_mode_tt", "Random generates a new hires seed each run."),
          onClick: T
        }, z(f(n)("hrf_seed_random", "Random")), 11, ig),
        D("button", {
          type: "button",
          class: "fil-hrf-seed-pill",
          title: t.state.lastRunSeed != null ? `${f(n)("hrf_seed_use_last_prefix", "Reuse the last run's hires seed:")} ${t.state.lastRunSeed}` : f(n)("hrf_seed_use_last_tt", "Reuse the hires seed from the last executed run."),
          onClick: te
        }, z(f(n)("hrf_seed_use_last", "Use last")), 9, og),
        D("button", {
          type: "button",
          class: "fil-hrf-seed-pill fil-hrf-seed-pill-accent",
          title: f(n)("hrf_seed_new_fixed_tt", "Generate a new random fixed hires seed."),
          onClick: P
        }, z(f(n)("hrf_seed_new_fixed", "New fixed")), 9, sg)
      ])) : ae("", !0),
      V(f(nt), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "🕹️ ON", OFF: "OFF" },
        "model-value": f(C),
        label: f(n)("lbl_use_cn", "🕹️ Use ControlNet"),
        title: f(n)("hrf_use_cn", "Guide the hires pass with a ControlNet. Tile ControlNets work without a preprocessor."),
        "onUpdate:modelValue": A[10] || (A[10] = (U) => C.value = U)
      }, null, 8, ["model-value", "label", "title"]),
      f(C) === "ON" ? (I(), N(ue, { key: 3 }, [
        V(f(fl), {
          options: G.value,
          "model-value": f(y),
          label: f(n)("lbl_cn_name", "🧩 ControlNet model"),
          title: f(n)("hrf_cn_name", "ControlNet model to apply."),
          "onUpdate:modelValue": A[11] || (A[11] = (U) => y.value = U)
        }, null, 8, ["options", "model-value", "label", "title"]),
        V(f(Le), {
          "model-value": f(b),
          min: 0,
          max: 10,
          step: 0.01,
          label: f(n)("lbl_cn_strength", "💪 Strength"),
          title: f(n)("hrf_cn_strength", "ControlNet strength."),
          "onUpdate:modelValue": A[12] || (A[12] = (U) => b.value = U)
        }, null, 8, ["model-value", "label", "title"]),
        V(f(nt), {
          options: j.value,
          "option-labels": { none: "🚫 none", canny: "🪞 canny" },
          "model-value": f(x),
          label: f(n)("lbl_cn_preproc", "🧪 Preprocessor"),
          title: f(n)("hrf_cn_preproc", "Preprocess the ControlNet hint image. 'none' feeds the raw upscaled image (right for tile ControlNets)."),
          "onUpdate:modelValue": A[13] || (A[13] = (U) => x.value = U)
        }, null, 8, ["options", "model-value", "label", "title"])
      ], 64)) : ae("", !0)
    ]));
  }
}), rg = /* @__PURE__ */ xe(ag, [["__scopeId", "data-v-30b15350"]]), cg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rg
}, Symbol.toStringTag, { value: "Module" })), ug = { class: "fil-style-mixer-root" }, dg = /* @__PURE__ */ we({
  __name: "StyleMixer",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Nt(), l = ao.FiLStyleMixer, i = (l == null ? void 0 : l.inputs.required.find((k) => k.name === "fusion_mode")) || (l == null ? void 0 : l.inputs.optional.find((k) => k.name === "fusion_mode")), o = J(
      () => {
        var k;
        return (k = i == null ? void 0 : i.values) != null && k.length ? i.values : ["Weighted Stack (Fast)"];
      }
    ), s = {
      "Weighted Stack (Fast)": "⚡ Fast Stack",
      "Smart LLM Fusion (Gen-Mix)": "🧬 Smart LLM Fusion"
    };
    function a(k, L) {
      return J({
        get: () => t.state.nodeState[k] ?? L,
        set: (T) => {
          t.state.nodeState[k] = T;
          const te = t.state.node ? ie(t.state.node, k) : null;
          te && (te.value = T);
        }
      });
    }
    const r = a("fusion_mode", "Weighted Stack (Fast)"), u = a("style_1", "(None)"), c = a("weight_1", 1), d = a("style_2", "(None)"), p = a("weight_2", 0.5), h = a("style_3", "(None)"), m = a("weight_3", 0.3), _ = a("img_weight_1", 0.8), C = a("img_weight_2", 0.6), y = a("img_weight_3", 0.4), b = a("img_weight_4", 0.2), x = /* @__PURE__ */ ce(!1), v = /* @__PURE__ */ ce(!1), w = /* @__PURE__ */ ce(!1), F = J(() => t.state.ui.slotVersion ?? 0);
    function G(k) {
      F.value;
      const L = t.state.node;
      if (!(L != null && L._allInputs)) return !1;
      const T = L._allInputs.find((te) => te.name === k);
      return !!(T && T.link != null);
    }
    const j = J(() => G("image_2")), $ = J(() => G("image_3"));
    function q(k) {
      var T;
      if (!t.state.node) return [];
      const L = ie(t.state.node, k);
      return ((T = L == null ? void 0 : L.options) == null ? void 0 : T.values) || (L == null ? void 0 : L.values) || [];
    }
    function Q(k, L) {
      if (!k || k === "(None)" || k === "None") return `${L}: ${n("sm_none", "(None)")}`;
      const T = k.indexOf("/"), te = T === -1 ? k : k.slice(T + 1);
      return `${L}: ${te}`;
    }
    return (k, L) => (I(), N("div", ug, [
      V(f(Qe), {
        title: f(n)("sm_section_fusion", "🔀 Fusion Mode")
      }, null, 8, ["title"]),
      V(f(nt), {
        modelValue: f(r),
        "onUpdate:modelValue": L[0] || (L[0] = (T) => /* @__PURE__ */ de(r) ? r.value = T : null),
        options: o.value,
        "option-labels": s,
        title: f(n)("sm_fusion_tt", "Fast Stack just weights the descriptions. Smart Fusion asks the Vision LLM to synthesize one prompt.")
      }, null, 8, ["modelValue", "options", "title"]),
      V(f(Qe), {
        title: f(n)("sm_section_style_1", "🎨 Primary Style (Style 1)")
      }, null, 8, ["title"]),
      V(f(Ge), {
        variant: "full",
        label: Q(f(u), f(n)("sm_style_1", "Style 1")),
        onClick: L[1] || (L[1] = (T) => x.value = !0)
      }, null, 8, ["label"]),
      V(f(Le), {
        modelValue: f(c),
        "onUpdate:modelValue": L[2] || (L[2] = (T) => /* @__PURE__ */ de(c) ? c.value = T : null),
        min: 0,
        max: 1,
        step: 0.05,
        label: f(n)("sm_style_1_weight", "Style 1 Weight")
      }, null, 8, ["modelValue", "label"]),
      V(f(gn), {
        open: x.value,
        title: f(n)("sm_pick_style_1", "Select Primary Style 1"),
        width: "680px",
        "onUpdate:open": L[4] || (L[4] = (T) => x.value = T)
      }, {
        default: $t(() => [
          V(f(yl), {
            styles: q("style_1"),
            "model-value": f(u),
            onSelect: L[3] || (L[3] = (T) => {
              u.value = T, x.value = !1;
            })
          }, null, 8, ["styles", "model-value"])
        ]),
        _: 1
      }, 8, ["open", "title"]),
      V(f(Qe), {
        title: f(n)("sm_section_style_2", "🧪 Secondary Style (Style 2)")
      }, null, 8, ["title"]),
      V(f(Ge), {
        variant: "full",
        label: Q(f(d), f(n)("sm_style_2", "Style 2")),
        onClick: L[5] || (L[5] = (T) => v.value = !0)
      }, null, 8, ["label"]),
      V(f(Le), {
        modelValue: f(p),
        "onUpdate:modelValue": L[6] || (L[6] = (T) => /* @__PURE__ */ de(p) ? p.value = T : null),
        min: 0,
        max: 1,
        step: 0.05,
        label: f(n)("sm_style_2_weight", "Style 2 Weight")
      }, null, 8, ["modelValue", "label"]),
      V(f(gn), {
        open: v.value,
        title: f(n)("sm_pick_style_2", "Select Secondary Style 2"),
        width: "680px",
        "onUpdate:open": L[8] || (L[8] = (T) => v.value = T)
      }, {
        default: $t(() => [
          V(f(yl), {
            styles: q("style_2"),
            "model-value": f(d),
            onSelect: L[7] || (L[7] = (T) => {
              d.value = T, v.value = !1;
            })
          }, null, 8, ["styles", "model-value"])
        ]),
        _: 1
      }, 8, ["open", "title"]),
      V(f(Qe), {
        title: f(n)("sm_section_style_3", "✨ Tertiary Style (Style 3)")
      }, null, 8, ["title"]),
      V(f(Ge), {
        variant: "full",
        label: Q(f(h), f(n)("sm_style_3", "Style 3")),
        onClick: L[9] || (L[9] = (T) => w.value = !0)
      }, null, 8, ["label"]),
      V(f(Le), {
        modelValue: f(m),
        "onUpdate:modelValue": L[10] || (L[10] = (T) => /* @__PURE__ */ de(m) ? m.value = T : null),
        min: 0,
        max: 1,
        step: 0.05,
        label: f(n)("sm_style_3_weight", "Style 3 Weight")
      }, null, 8, ["modelValue", "label"]),
      V(f(gn), {
        open: w.value,
        title: f(n)("sm_pick_style_3", "Select Tertiary Style 3"),
        width: "680px",
        "onUpdate:open": L[12] || (L[12] = (T) => w.value = T)
      }, {
        default: $t(() => [
          V(f(yl), {
            styles: q("style_3"),
            "model-value": f(h),
            onSelect: L[11] || (L[11] = (T) => {
              h.value = T, w.value = !1;
            })
          }, null, 8, ["styles", "model-value"])
        ]),
        _: 1
      }, 8, ["open", "title"]),
      V(f(Qe), {
        title: f(n)("sm_section_image_1", "🖼️ Image 1 Influence")
      }, null, 8, ["title"]),
      V(f(Le), {
        modelValue: f(_),
        "onUpdate:modelValue": L[13] || (L[13] = (T) => /* @__PURE__ */ de(_) ? _.value = T : null),
        min: 0,
        max: 1,
        step: 0.05,
        label: f(n)("sm_image_1_weight", "Image 1 Weight")
      }, null, 8, ["modelValue", "label"]),
      V(f(Qe), {
        title: f(n)("sm_section_image_2", "🖼️ Image 2 Influence")
      }, null, 8, ["title"]),
      V(f(Le), {
        modelValue: f(C),
        "onUpdate:modelValue": L[14] || (L[14] = (T) => /* @__PURE__ */ de(C) ? C.value = T : null),
        min: 0,
        max: 1,
        step: 0.05,
        label: f(n)("sm_image_2_weight", "Image 2 Weight")
      }, null, 8, ["modelValue", "label"]),
      j.value ? (I(), N(ue, { key: 0 }, [
        V(f(Qe), {
          title: f(n)("sm_section_image_3", "🖼️ Image 3 Influence")
        }, null, 8, ["title"]),
        V(f(Le), {
          modelValue: f(y),
          "onUpdate:modelValue": L[15] || (L[15] = (T) => /* @__PURE__ */ de(y) ? y.value = T : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: f(n)("sm_image_3_weight", "Image 3 Weight")
        }, null, 8, ["modelValue", "label"])
      ], 64)) : ae("", !0),
      $.value ? (I(), N(ue, { key: 1 }, [
        V(f(Qe), {
          title: f(n)("sm_section_image_4", "🖼️ Image 4 Influence")
        }, null, 8, ["title"]),
        V(f(Le), {
          modelValue: f(b),
          "onUpdate:modelValue": L[16] || (L[16] = (T) => /* @__PURE__ */ de(b) ? b.value = T : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: f(n)("sm_image_4_weight", "Image 4 Weight")
        }, null, 8, ["modelValue", "label"])
      ], 64)) : ae("", !0)
    ]));
  }
}), fg = /* @__PURE__ */ xe(dg, [["__scopeId", "data-v-e9fc8064"]]), pg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fg
}, Symbol.toStringTag, { value: "Module" })), mg = { class: "fil-color-wizard-root" }, hg = { class: "fil-cw-presets-block" }, gg = { class: "fil-cw-presets-title" }, _g = { class: "fil-cw-presets-grid" }, bg = ["title"], vg = ["title"], yg = ["title"], wg = ["title"], Sg = { class: "fil-cw-slider-group" }, xg = { class: "fil-cw-toggle-row" }, Cg = { class: "fil-cw-toggle-label" }, Ag = ["title", "aria-pressed"], Mg = /* @__PURE__ */ we({
  __name: "ColorWizard",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Nt(), l = ao.FiLColorWizard, i = (l == null ? void 0 : l.inputs.required.find((h) => h.name === "method")) || (l == null ? void 0 : l.inputs.optional.find((h) => h.name === "method")), o = J(
      () => {
        var h;
        return (h = i == null ? void 0 : i.values) != null && h.length ? i.values : ["Full Auto"];
      }
    );
    function s(h, m) {
      return J({
        get: () => t.state.nodeState[h] ?? m,
        set: (_) => {
          t.state.nodeState[h] = _;
          const C = t.state.node ? ie(t.state.node, h) : null;
          C && (C.value = _);
        }
      });
    }
    const a = s("method", "Full Auto"), r = s("strength", 0.8), u = s("temperature", 0), c = s("tint", 0), d = s("preserve_skin", !1);
    function p(h) {
      h === "warm" ? (a.value = "Full Auto", u.value = 0.35, c.value = 0, r.value = 0.8, d.value = !0) : h === "cool" ? (a.value = "Full Auto", u.value = -0.35, c.value = 0.15, r.value = 0.85, d.value = !1) : h === "skin" ? (a.value = "White Patch", u.value = 0.05, c.value = 0, r.value = 0.75, d.value = !0) : h === "contrast" && (a.value = "LAB Enhance", u.value = 0, c.value = 0, r.value = 0.9, d.value = !1);
    }
    return (h, m) => (I(), N("div", mg, [
      D("div", hg, [
        D("div", gg, z(f(n)("cw_presets", "⚡ Quick Presets")), 1),
        D("div", _g, [
          D("button", {
            type: "button",
            class: "fil-cw-preset-btn warm",
            title: f(n)("cw_preset_warm_tt", "Warm Sunny Tone"),
            onClick: m[0] || (m[0] = (_) => p("warm"))
          }, z(f(n)("cw_preset_warm", "☀️ Warm Sun")), 9, bg),
          D("button", {
            type: "button",
            class: "fil-cw-preset-btn cool",
            title: f(n)("cw_preset_cool_tt", "Cool Sci-Fi Cyberpunk Tone"),
            onClick: m[1] || (m[1] = (_) => p("cool"))
          }, z(f(n)("cw_preset_cool", "🧊 Cool Sci-Fi")), 9, vg),
          D("button", {
            type: "button",
            class: "fil-cw-preset-btn skin",
            title: f(n)("cw_preset_skin_tt", "Natural Skin Preservation"),
            onClick: m[2] || (m[2] = (_) => p("skin"))
          }, z(f(n)("cw_preset_skin", "👤 Skin Protect")), 9, yg),
          D("button", {
            type: "button",
            class: "fil-cw-preset-btn contrast",
            title: f(n)("cw_preset_contrast_tt", "Punchy LAB Contrast"),
            onClick: m[3] || (m[3] = (_) => p("contrast"))
          }, z(f(n)("cw_preset_contrast", "⚡ Contrast")), 9, wg)
        ])
      ]),
      V(f(Qe), {
        title: f(n)("cw_section_method", "⚙️ Method")
      }, null, 8, ["title"]),
      V(f(nt), {
        modelValue: f(a),
        "onUpdate:modelValue": m[4] || (m[4] = (_) => /* @__PURE__ */ de(a) ? a.value = _ : null),
        options: o.value,
        title: f(n)("tt_cw_method", "Correction algorithm.")
      }, null, 8, ["modelValue", "options", "title"]),
      V(f(Qe), {
        title: f(n)("cw_section_adjust", "🎛️ Adjustments")
      }, null, 8, ["title"]),
      D("div", Sg, [
        V(f(Le), {
          modelValue: f(r),
          "onUpdate:modelValue": m[5] || (m[5] = (_) => /* @__PURE__ */ de(r) ? r.value = _ : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: f(n)("cw_strength", "Correction Strength"),
          title: f(n)("tt_cw_strength", "Correction strength (0 = no change).")
        }, null, 8, ["modelValue", "label", "title"]),
        V(f(Le), {
          modelValue: f(u),
          "onUpdate:modelValue": m[6] || (m[6] = (_) => /* @__PURE__ */ de(u) ? u.value = _ : null),
          min: -1,
          max: 1,
          step: 0.05,
          label: f(n)("cw_temperature", "Temperature (Warm/Cool)"),
          title: f(n)("tt_cw_temperature", "Colour temperature.")
        }, null, 8, ["modelValue", "label", "title"]),
        V(f(Le), {
          modelValue: f(c),
          "onUpdate:modelValue": m[7] || (m[7] = (_) => /* @__PURE__ */ de(c) ? c.value = _ : null),
          min: -1,
          max: 1,
          step: 0.05,
          label: f(n)("cw_tint", "Tint (Green/Magenta)"),
          title: f(n)("tt_cw_tint", "Colour tint.")
        }, null, 8, ["modelValue", "label", "title"])
      ]),
      D("div", xg, [
        D("span", Cg, z(f(n)("cw_preserve_skin", "🛡️ Preserve Skin Tones")), 1),
        D("button", {
          type: "button",
          class: me(["fil-cw-toggle-btn", { active: f(d) }]),
          title: f(n)("tt_cw_preserve_skin", "Preserve skin tones."),
          "aria-pressed": f(d),
          onClick: m[8] || (m[8] = (_) => d.value = !f(d))
        }, z(f(d) ? f(n)("cw_on", "ON") : f(n)("cw_off", "OFF")), 11, Ag)
      ])
    ]));
  }
}), Fg = /* @__PURE__ */ xe(Mg, [["__scopeId", "data-v-790416d3"]]), kg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fg
}, Symbol.toStringTag, { value: "Module" })), Lg = {
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
}, Ig = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HELP_DEFAULTS: Lg
}, Symbol.toStringTag, { value: "Module" }));
//# sourceMappingURL=fil_design_imagemind.js.map
