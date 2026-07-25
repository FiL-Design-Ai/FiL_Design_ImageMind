(function(){try{var s=document.createElement("style");s.textContent=".fil-color-picker[data-v-969386c1]{display:flex;flex-direction:column;gap:8px;padding:8px;width:176px;box-sizing:border-box}.fil-cp-sv[data-v-969386c1]{position:relative;width:100%;height:100px;border-radius:4px;cursor:crosshair;touch-action:none}.fil-cp-sv-white[data-v-969386c1]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to right,#fff,#fff0);border-radius:4px}.fil-cp-sv-black[data-v-969386c1]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to top,#000,#0000);border-radius:4px}.fil-cp-sv-thumb[data-v-969386c1]{position:absolute;width:10px;height:10px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hue[data-v-969386c1]{position:relative;width:100%;height:12px;border-radius:6px;background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red);cursor:pointer;touch-action:none}.fil-cp-hue-thumb[data-v-969386c1]{position:absolute;top:50%;width:12px;height:12px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hex-row[data-v-969386c1]{display:flex;align-items:center;gap:6px}.fil-cp-swatch[data-v-969386c1]{width:22px;height:22px;border-radius:4px;border:1px solid rgba(255,255,255,.25);flex-shrink:0}.fil-cp-hex-input[data-v-969386c1]{flex:1;min-width:0;height:22px;box-sizing:border-box;border-radius:4px;border:1px solid rgba(255,255,255,.2);background:#00000040;color:#f2f2f2;font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:12px;padding:0 6px;outline:none}.fil-cp-hex-input[data-v-969386c1]:focus{border-color:#ffffff80}.fil-cp-presets[data-v-969386c1]{display:grid;grid-template-columns:repeat(5,1fr);gap:4px}.fil-color-swatch[data-v-969386c1]{width:24px;height:24px;border-radius:4px;border:2px solid transparent;background:var(--swatch);cursor:pointer;transition:border-color .08s,transform .08s;outline:none;box-sizing:border-box}.fil-color-swatch[data-v-969386c1]:hover{border-color:#ffffff80;transform:scale(1.15)}.fil-color-swatch.is-active[data-v-969386c1]{border-color:#fff;box-shadow:0 0 0 1px var(--swatch)}.fil-node-shell[data-v-e0e8284c]{position:relative;width:100%;box-sizing:border-box}.fil-icon[data-v-dfb78d9f]{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;line-height:0}.fil-icon[data-v-dfb78d9f] svg{width:100%;height:100%}.fil-modal-backdrop[data-v-0b20f2bd]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000;display:flex;align-items:center;justify-content:center;background:#0000008c;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.fil-modal-panel[data-v-0b20f2bd]{width:90%;max-height:80vh;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:10px;box-shadow:0 20px 60px #00000080;display:flex;flex-direction:column;overflow:hidden}.fil-modal-header[data-v-0b20f2bd]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08)}.fil-modal-title[data-v-0b20f2bd]{font-size:14px;font-weight:600;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-close[data-v-0b20f2bd]{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;border:none;background:transparent;color:var(--fil-muted, rgba(255, 255, 255, .5));cursor:pointer;transition:background .08s,color .08s}.fil-modal-close[data-v-0b20f2bd]:hover{background:#ffffff14;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-body[data-v-0b20f2bd]{flex:1;overflow-y:auto;padding:16px}.fil-modal-enter-active[data-v-0b20f2bd],.fil-modal-leave-active[data-v-0b20f2bd]{transition:opacity .15s ease}.fil-modal-enter-from[data-v-0b20f2bd],.fil-modal-leave-to[data-v-0b20f2bd]{opacity:0}.fil-modal-enter-active .fil-modal-panel[data-v-0b20f2bd],.fil-modal-leave-active .fil-modal-panel[data-v-0b20f2bd]{transition:transform .15s ease}.fil-modal-enter-from .fil-modal-panel[data-v-0b20f2bd],.fil-modal-leave-to .fil-modal-panel[data-v-0b20f2bd]{transform:scale(.95) translateY(8px)}.fil-help-title[data-v-536c1547]{margin:0 0 12px;font-size:16px;font-weight:700;color:var(--fil-text, rgba(255,255,255,.9))}.fil-help-body[data-v-536c1547]{margin:0 0 12px;font-size:13px;line-height:1.6;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet[data-v-536c1547]{display:flex;gap:6px;align-items:flex-start;margin-bottom:6px;font-size:13px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet>span[data-v-536c1547]{flex:1}.fil-help-table[data-v-536c1547]{width:100%;border-collapse:collapse;margin-top:8px;font-size:12px}.fil-help-table th[data-v-536c1547],.fil-help-table td[data-v-536c1547]{text-align:left;padding:6px 10px;border-bottom:1px solid rgba(255,255,255,.06)}.fil-help-table th[data-v-536c1547]{font-weight:600;color:var(--fil-text, rgba(255,255,255,.85))}.fil-help-table td[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.6))}.fil-help-code[data-v-536c1547]{background:#0000004d;border-radius:6px;padding:12px;margin-top:10px;overflow-x:auto;font-size:12px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-empty[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.4));font-size:13px}.fil-w-btn[data-v-1c6537e0]{box-sizing:border-box;padding:var(--fil-row-pad);border-radius:6px;background:#ffffff0d;border:1px solid rgba(255,255,255,.14);color:var(--fil-text, rgba(255, 255, 255, .85));font-family:ui-sans-serif,system-ui,sans-serif;font-size:12px;cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;display:inline-flex;align-items:center;justify-content:center;gap:6px}.fil-w-btn[data-v-1c6537e0]:hover:not(:disabled){background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #fff)}.fil-w-btn[data-v-1c6537e0]:active{transform:translateY(1px)}.fil-w-btn[data-v-1c6537e0]:disabled{opacity:.4;cursor:default}.fil-w-btn-accent[data-v-1c6537e0]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #fff)}.fil-w-btn-danger[data-v-1c6537e0]{color:var(--fil-danger, #ef6666)}.fil-w-btn-danger[data-v-1c6537e0]:hover:not(:disabled){background:var(--fil-danger, #ef6666);border-color:var(--fil-danger, #ef6666);color:#fff}.fil-w-btn-sm[data-v-1c6537e0]{padding:4px 8px;font-size:11px}.fil-w-btn-full[data-v-1c6537e0]{width:100%;display:block}.fil-w-btn-icon[data-v-1c6537e0]{display:inline-flex;align-items:center;justify-content:center;gap:5px}.fil-w-btn-glyph[data-v-1c6537e0] svg{width:14px;height:14px}.fil-w-btn.is-flashing[data-v-1c6537e0],.fil-w-btn.is-flashing[data-v-1c6537e0]:hover{background:var(--fil-ok, #62c987);border-color:var(--fil-ok, #62c987);color:#fff}.fil-w-btn.is-loading[data-v-1c6537e0]{cursor:wait}.fil-w-btn[data-v-1c6537e0]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-btn-spinner[data-v-1c6537e0]{display:inline-block;width:12px;height:12px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:fil-w-spin-1c6537e0 .6s linear infinite}@keyframes fil-w-spin-1c6537e0{to{transform:rotate(360deg)}}.fil-pm-root[data-v-329149a3]{display:flex;flex-direction:column;gap:12px;padding:4px 0}.fil-pm-card[data-v-329149a3]{background:#ffffff08;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:12px}.fil-pm-header[data-v-329149a3]{display:flex;align-items:center;gap:8px;margin-bottom:10px}.fil-pm-card--collapsed[data-v-329149a3]{padding:8px 12px}.fil-pm-card--collapsed .fil-pm-header[data-v-329149a3]{margin-bottom:0}.fil-pm-header--clickable[data-v-329149a3]{cursor:pointer}.fil-pm-header--clickable:hover .fil-pm-name[data-v-329149a3]{color:var(--fil-accent, #7c5cfc)}.fil-pm-chevron[data-v-329149a3]{display:inline-flex;align-items:center;color:#fff6;transition:transform .12s ease}.fil-pm-chevron--open[data-v-329149a3]{transform:rotate(90deg)}.fil-pm-icon[data-v-329149a3]{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px}.fil-pm-name[data-v-329149a3]{font-weight:600;font-size:14px;color:var(--fil-text, #f2f2f2)}.fil-pm-disp[data-v-329149a3]{font-size:11px;color:#ffffff80}.fil-pm-status[data-v-329149a3]{margin-left:auto;display:inline-flex;align-items:center;gap:5px;font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#fff6;white-space:nowrap}.fil-pm-dot[data-v-329149a3]{width:8px;height:8px;border-radius:50%;background:currentColor;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 22%,transparent)}.fil-pm-status--connected[data-v-329149a3]{color:var(--fil-success, #4ade80)}.fil-pm-status--configured[data-v-329149a3]{color:var(--fil-warning, #fbbf24)}.fil-pm-status--off[data-v-329149a3]{color:#ffffff4d}.fil-pm-fields[data-v-329149a3]{display:flex;flex-direction:column;gap:8px;margin-bottom:10px}.fil-pm-field[data-v-329149a3]{display:flex;flex-direction:column;gap:3px}.fil-pm-field-label[data-v-329149a3]{font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#ffffff80}.fil-pm-input[data-v-329149a3]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,monospace;font-size:13px;outline:none;transition:border-color .08s}.fil-pm-input[data-v-329149a3]:focus{border-color:var(--fil-accent)}.fil-pm-input.fil-pm-has-val[data-v-329149a3]{border-color:var(--fil-muted, #555)}.fil-pm-actions[data-v-329149a3]{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}.fil-pm-models[data-v-329149a3]{display:flex;flex-wrap:wrap;gap:4px}.fil-pm-model-tag[data-v-329149a3]{display:inline-flex;align-items:center;gap:3px;background:#ffffff12;border-radius:4px;padding:2px 6px;font-size:11px;color:#ffffffbf;white-space:nowrap}.fil-pm-vision-badge[data-v-329149a3]{font-size:10px;line-height:1}.fil-pm-err[data-v-329149a3]{font-size:11px;color:var(--fil-danger, #ef6666);margin-top:4px}.fil-pm-age[data-v-329149a3]{font-size:10px;color:#fff6;align-self:center}.fil-w-chips[data-v-9c6ca5d1]{display:grid;gap:5px;width:100%}.fil-w-chip[data-v-9c6ca5d1]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-9c6ca5d1]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-9c6ca5d1]{background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-accent);border-color:var(--fil-accent);font-weight:500;box-shadow:0 0 8px color-mix(in srgb,var(--fil-accent) 55%,transparent)}.fil-w-chip.disabled[data-v-9c6ca5d1]{opacity:.5;cursor:default}.fil-w-chip[data-v-9c6ca5d1]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chiplist[data-v-3c9e19df]{display:flex;flex-direction:column;gap:5px;width:100%}.fil-w-search[data-v-3c9e19df]{box-sizing:border-box;width:100%;padding:5px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:11px;outline:none}.fil-w-search[data-v-3c9e19df]:focus{border-color:var(--fil-accent)}.fil-w-search[data-v-3c9e19df]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-chip-scroll[data-v-3c9e19df]{display:grid;gap:3px;max-height:200px;overflow-y:auto;overflow-x:hidden;padding-right:2px}.fil-w-chip-scroll[data-v-3c9e19df]::-webkit-scrollbar{width:5px}.fil-w-chip-scroll[data-v-3c9e19df]::-webkit-scrollbar-thumb{background:var(--fil-muted, #555);border-radius:3px}.fil-w-chip-scroll[data-v-3c9e19df]::-webkit-scrollbar-track{background:transparent}.fil-w-chip[data-v-3c9e19df]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-3c9e19df]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-3c9e19df]{background:var(--fil-accent);color:var(--fil-accent-ink, #fff);border-color:var(--fil-accent);font-weight:500}.fil-w-chip.disabled[data-v-3c9e19df]{opacity:.5;cursor:default}.fil-w-chip[data-v-3c9e19df]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chip-empty[data-v-3c9e19df]{padding:8px;text-align:center;color:var(--fil-muted, #666);font-size:11px}.fil-combo[data-v-82542923]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-combo-label[data-v-82542923]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-combo-trigger[data-v-82542923]{grid-column:2;width:100%;box-sizing:border-box;height:30px;display:flex;align-items:center;gap:6px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer;text-align:left;-moz-appearance:none;appearance:none;-webkit-appearance:none}.fil-combo-trigger.open[data-v-82542923],.fil-combo-trigger[data-v-82542923]:focus-visible{border-color:var(--fil-accent);outline:2px solid var(--fil-accent);outline-offset:1px}.fil-combo-trigger.disabled[data-v-82542923]{opacity:.5;cursor:default}.fil-combo-trigger-label[data-v-82542923]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-chevron[data-v-82542923]{font-size:9px;color:var(--fil-muted, rgba(255, 255, 255, .5));flex-shrink:0}.fil-combo-badge[data-v-82542923]{flex-shrink:0;font-size:9px;line-height:1;padding:2px 5px;border-radius:999px;background:var(--fil-accent);color:var(--fil-accent-ink, #fff);font-weight:600}.fil-combo-panel[data-v-82542923]{position:fixed;z-index:10001;box-sizing:border-box;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:8px;box-shadow:0 12px 32px #0006;display:flex;flex-direction:column;overflow:hidden;padding:6px}.fil-combo-search[data-v-82542923]{box-sizing:border-box;width:100%;margin-bottom:6px;padding:6px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-combo-search[data-v-82542923]:focus{border-color:var(--fil-accent)}.fil-combo-list[data-v-82542923]{display:flex;flex-direction:column;gap:2px;max-height:240px;overflow-y:auto}.fil-combo-option[data-v-82542923]{display:flex;align-items:center;gap:6px;width:100%;box-sizing:border-box;padding:6px 8px;border-radius:5px;border:none;background:transparent;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;text-align:left;cursor:pointer;outline:none}.fil-combo-option.active[data-v-82542923]{background:#ffffff14}.fil-combo-option.selected[data-v-82542923]{color:var(--fil-accent);font-weight:600}.fil-combo-option-label[data-v-82542923]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-empty[data-v-82542923]{padding:10px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-w-info[data-v-851660c1]{font-size:11px;line-height:1.5;color:#ffffff73;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.fil-w-info[data-ok][data-v-851660c1]{color:var(--fil-ok, #62c987)}.fil-w-info[data-err][data-v-851660c1]{color:var(--fil-danger, #ef6666)}.fil-w-numfield[data-v-2f843ba1]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-numfield.no-label[data-v-2f843ba1]{display:contents}.fil-w-numfield-label[data-v-2f843ba1]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-numfield:not(.no-label) .fil-w-num-wrap[data-v-2f843ba1]{grid-column:2}.fil-w-num-wrap[data-v-2f843ba1]{position:relative;width:100%;min-width:0}.fil-w-num[data-v-2f843ba1]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 20px 7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:14px;text-align:left;outline:none;transition:border-color .08s}.fil-w-num[data-v-2f843ba1]:focus{border-color:var(--fil-accent)}.fil-w-num[data-v-2f843ba1]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-num[data-v-2f843ba1]:disabled{opacity:.5}.fil-w-num-step[data-v-2f843ba1]{position:absolute;top:1px;right:1px;bottom:1px;width:17px;display:flex;flex-direction:column;border-left:1px solid var(--fil-muted, #3a3d40);overflow:hidden;border-radius:0 5px 5px 0}.fil-w-num-btn[data-v-2f843ba1]{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;border:none;background:transparent;color:var(--fil-muted, rgba(255, 255, 255, .55));font-size:7px;line-height:1;cursor:pointer;padding:0;transition:color .08s,background .08s}.fil-w-num-btn[data-v-2f843ba1]:last-child{border-top:1px solid var(--fil-muted, #3a3d40)}.fil-w-num-btn[data-v-2f843ba1]:hover:not(:disabled){color:var(--fil-accent);background:#ffffff12}.fil-w-num-btn[data-v-2f843ba1]:disabled{opacity:.3;cursor:default}.fil-w-section[data-v-4b760ea4]{box-sizing:border-box;width:100%;padding:var(--fil-row-pad);border:none;border-radius:5px;background:#ffffff0a;color:var(--fil-muted, rgba(255, 255, 255, .7));font-family:inherit;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;cursor:pointer;text-align:left;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s;display:flex;align-items:center;gap:6px}.fil-w-section[data-v-4b760ea4]:hover:not(:disabled){background:#ffffff14;color:#fff}.fil-w-section[data-v-4b760ea4]:disabled{cursor:default}.fil-w-section[data-v-4b760ea4]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-section-arrow[data-v-4b760ea4]{display:inline-block;width:8px;font-size:9px;color:var(--fil-accent)}.fil-w-segmented[data-v-765cf0ce]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-segmented-label[data-v-765cf0ce]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-pill[data-v-765cf0ce]{grid-column:2;display:flex;gap:0;min-width:0;background:#ffffff0f;border-radius:7px;padding:3px}.fil-w-pill.disabled[data-v-765cf0ce]{opacity:.5}.fil-w-seg[data-v-765cf0ce]{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center;padding:6px;border:none;border-radius:5px;background:transparent;font-family:inherit;font-size:12px;color:var(--fil-muted, rgba(255, 255, 255, .55));cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s}.fil-w-seg[data-v-765cf0ce]:hover:not(.active){color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-w-seg.active[data-v-765cf0ce]{background:var(--fil-accent);color:var(--fil-accent-ink, #fff);font-weight:500}.fil-w-seg[data-v-765cf0ce]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-select[data-v-a878baba]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-select-label[data-v-a878baba]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-select-input[data-v-a878baba]{grid-column:2;width:100%;box-sizing:border-box;height:30px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer}.fil-w-select-input[data-v-a878baba]:focus{border-color:var(--fil-accent)}.fil-w-select-input[data-v-a878baba]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-select-input[data-v-a878baba]:disabled{opacity:.5;cursor:default}.fil-w-slider[data-v-c8e1921a]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-slider-label[data-v-c8e1921a]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-slider-row[data-v-c8e1921a]{grid-column:2;display:flex;align-items:center;gap:6px;min-width:0}.fil-w-slider-range[data-v-c8e1921a]{flex:1 1 auto;min-width:0;max-width:220px;accent-color:var(--fil-accent);cursor:pointer}.fil-w-slider-range[data-v-c8e1921a]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-slider-row[data-v-c8e1921a] .fil-w-num-wrap{width:70px;flex:none}.fil-style-picker[data-v-89c1e9fe]{display:flex;flex-direction:column;gap:10px}.fil-style-cats[data-v-89c1e9fe]{display:flex;flex-wrap:wrap;gap:6px}.fil-style-cat[data-v-89c1e9fe]{box-sizing:border-box;padding:5px 10px;border-radius:999px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .2));background:#ffffff0a;color:var(--fil-text, rgba(255, 255, 255, .8));font-size:11px;cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-cat[data-v-89c1e9fe]:hover{border-color:var(--fil-accent)}.fil-style-cat.active[data-v-89c1e9fe]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #fff);font-weight:500}.fil-style-cat[data-v-89c1e9fe]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-style-search-wrap[data-v-89c1e9fe]{position:relative;width:100%}.fil-style-search[data-v-89c1e9fe]{box-sizing:border-box;width:100%;padding:7px 28px 7px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-style-search[data-v-89c1e9fe]:focus{border-color:var(--fil-accent)}.fil-style-search-clear[data-v-89c1e9fe]{position:absolute;right:6px;top:50%;transform:translateY(-50%);width:18px;height:18px;border-radius:50%;border:none;background:#ffffff1f;color:#bbb;font-size:13px;line-height:1;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .12s ease}.fil-style-search-clear[data-v-89c1e9fe]:hover{background:#ff4b4b4d;color:var(--fil-danger, #ff6b6b)}.fil-style-grid[data-v-89c1e9fe]{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:8px;max-height:50vh;overflow-y:auto;padding-right:2px}.fil-style-tile[data-v-89c1e9fe]{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px 6px;border-radius:8px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .14));background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-tile[data-v-89c1e9fe]:hover{border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-style-tile.active[data-v-89c1e9fe]{border-color:var(--fil-accent);background:color-mix(in srgb,var(--fil-accent) 14%,transparent)}.fil-style-tile[data-v-89c1e9fe]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-style-tile-preview[data-v-89c1e9fe]{width:100%;aspect-ratio:1;border-radius:6px;background:#ffffff0d;display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:22px}.fil-style-tile-img[data-v-89c1e9fe]{width:100%;height:100%;object-fit:cover}.fil-style-tile-label[data-v-89c1e9fe]{font-size:10px;text-align:center;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.fil-style-empty[data-v-89c1e9fe]{grid-column:1 / -1;padding:20px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-style-selected-bar[data-v-89c1e9fe]{display:flex;flex-wrap:wrap;gap:6px;padding:6px;border-radius:6px;background:color-mix(in srgb,var(--fil-accent, #00f0ff) 6%,transparent);border:1px solid color-mix(in srgb,var(--fil-accent, #00f0ff) 20%,transparent)}.fil-style-chip[data-v-89c1e9fe]{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:999px;background:var(--fil-accent, #00f0ff);color:var(--fil-accent-ink, #12151a);font-size:11px;font-weight:600}.fil-chip-text[data-v-89c1e9fe]{max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-chip-remove[data-v-89c1e9fe]{display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:50%;border:none;background:#0003;color:var(--fil-accent-ink, #12151a);font-size:12px;line-height:1;cursor:pointer;padding:0;transition:background .08s,color .08s}.fil-chip-remove[data-v-89c1e9fe]:hover{background:var(--fil-danger, #ff4b4b);color:#fff}.fil-toast-stack[data-v-f6279127]{position:fixed;right:20px;bottom:20px;z-index:100001;display:flex;flex-direction:column;gap:8px;pointer-events:none;max-width:min(360px,90vw)}.fil-toast[data-v-f6279127]{pointer-events:auto;display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:8px;background:var(--fil-panel, #171b22);color:var(--fil-text, #e8edf3);border:1px solid var(--fil-panel-alt, #2a3041);border-left:3px solid var(--toast-color, var(--fil-muted));box-shadow:0 6px 22px #0000006b;font:12.5px/1.45 system-ui,sans-serif;animation:fil-toast-in-f6279127 .18s cubic-bezier(.2,.7,.3,1)}@keyframes fil-toast-in-f6279127{0%{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}.fil-toast-dot[data-v-f6279127]{flex:none;width:8px;height:8px;margin-top:4px;border-radius:50%;background:var(--toast-color, var(--fil-muted))}.fil-toast-text[data-v-f6279127]{flex:1;min-width:0;align-self:center}.fil-toast-action[data-v-f6279127]{flex:none;cursor:pointer;padding:4px 8px;border-radius:4px;background:#ffffff0f;color:inherit;border:none;font:inherit;transition:background .12s}.fil-toast-action[data-v-f6279127]:hover{background:#ffffff24}.fil-toast-close[data-v-f6279127]{flex:none;align-self:flex-start;cursor:pointer;width:18px;height:18px;padding:0;border:none;background:none;color:var(--fil-muted);opacity:.6;transition:opacity .12s;font-size:16px;line-height:18px}.fil-toast-close[data-v-f6279127]:hover{opacity:1}.fil-w-toggle[data-v-9d64f497]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-toggle-label[data-v-9d64f497]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-toggle.bare[data-v-9d64f497]{display:flex;width:auto;gap:4px}.fil-w-toggle.bare .fil-w-toggle-label[data-v-9d64f497]{font-size:10px;white-space:nowrap}.fil-w-switch[data-v-9d64f497]{grid-column:2;justify-self:start;width:36px;height:20px;padding:2px;box-sizing:border-box;border:none;border-radius:10px;background:#ffffff24;cursor:pointer;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .12s}.fil-w-switch.on[data-v-9d64f497]{background:var(--fil-accent)}.fil-w-switch[data-v-9d64f497]:disabled{opacity:.5;cursor:default}.fil-w-switch[data-v-9d64f497]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-switch-thumb[data-v-9d64f497]{display:block;width:16px;height:16px;border-radius:50%;background:#fff;transition:transform .12s}.fil-w-switch.on .fil-w-switch-thumb[data-v-9d64f497]{transform:translate(16px)}div.fil-seed-root[data-v-820f3e21]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:row;align-items:center;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;background:transparent;border:none;border-radius:0;box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none}.fil-seed-display[data-v-820f3e21]{flex:1;min-width:0;box-sizing:border-box;height:34px;background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);padding:6px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:19px;text-align:center;outline:none;transition:border-color .08s}.fil-seed-display[data-v-820f3e21]:focus{border-color:var(--fil-accent)}.fil-seed-display[readonly][data-v-820f3e21]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-seed-actions[data-v-820f3e21]{display:flex;gap:5px;flex-shrink:0}.fil-seed-actions[data-v-820f3e21] .fil-w-btn{padding:0;width:34px;height:34px;font-size:16px}.picker-container[data-v-d6437604]{display:flex;flex-direction:column;gap:12px;color:var(--fil-text, #e8edf3)}.provider-tabs[data-v-d6437604]{display:flex;gap:6px;overflow-x:auto;padding-bottom:6px;scrollbar-width:thin}.tab-btn[data-v-d6437604]{display:flex;align-items:center;gap:6px;padding:7px 10px;border-radius:8px;border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-muted, #9ca8b5);font-size:12px;cursor:pointer;white-space:nowrap;flex-shrink:0;transition:all .15s ease}.tab-btn[data-v-d6437604]:hover{background:#ffffff14;color:var(--fil-text, #e8edf3)}.tab-btn.active[data-v-d6437604]{background:var(--fil-panel-alt, #222934);border-color:var(--fil-accent, #f08a45);color:var(--fil-accent, #f08a45);font-weight:600}.tab-badge[data-v-d6437604]{font-size:10px;background:var(--fil-pill-bg);padding:1px 5px;border-radius:99px}.provider-status-bar[data-v-d6437604]{display:flex;justify-content:space-between;align-items:center;background:#0003;padding:8px 12px;border-radius:6px;font-size:12px}.status-info[data-v-d6437604]{display:flex;align-items:center;gap:8px}.provider-name[data-v-d6437604]{font-weight:600}.status-badge[data-v-d6437604]{font-size:11px;padding:2px 6px;border-radius:4px}.status-badge.online[data-v-d6437604]{color:var(--fil-ok, #62c987)}.status-badge.loading[data-v-d6437604]{color:var(--fil-accent, #f08a45)}.status-badge.error[data-v-d6437604]{color:var(--fil-danger, #ef6666)}.age-label[data-v-d6437604]{font-size:10px;color:var(--fil-muted, #9ca8b5)}.filter-controls[data-v-d6437604]{display:flex;flex-direction:column;gap:8px}.search-input-wrap[data-v-d6437604]{position:relative;display:flex;align-items:center}.search-icon[data-v-d6437604]{position:absolute;left:10px;color:var(--fil-muted, #9ca8b5)}.search-input[data-v-d6437604]{width:100%;box-sizing:border-box;height:32px;padding:6px 30px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:var(--fil-field-radius, 6px);color:var(--fil-text, #e8edf3);font-size:12px;outline:none}.search-input[data-v-d6437604]:focus{border-color:var(--fil-accent, #f08a45)}.clear-search[data-v-d6437604]{position:absolute;right:10px;background:none;border:none;color:var(--fil-muted, #9ca8b5);cursor:pointer}.filter-segments[data-v-d6437604]{display:flex;gap:8px;min-width:0}.filter-segments[data-v-d6437604]>*{flex:1;min-width:0}.models-list-wrapper[data-v-d6437604]{height:320px;overflow-y:auto;background:#00000026;border-radius:8px;border:1px solid rgba(255,255,255,.06);padding:8px}.empty-state[data-v-d6437604]{display:flex;align-items:center;justify-content:center;height:100%;color:var(--fil-muted, #9ca8b5);font-size:12px}.models-container.list[data-v-d6437604]{display:flex;flex-direction:column;gap:6px}.models-container.grid[data-v-d6437604]{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:8px}.models-container.grid .model-card[data-v-d6437604]{flex-direction:column;align-items:flex-start;gap:8px;padding:10px 12px}.models-container.grid .model-main[data-v-d6437604]{width:100%}.models-container.grid .model-tags[data-v-d6437604]{width:100%;justify-content:flex-start}.model-card[data-v-d6437604]{display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:#ffffff08;border:1px solid rgba(255,255,255,.06);border-radius:6px;cursor:pointer;transition:all .12s ease;width:100%;box-sizing:border-box;text-align:left;font:inherit;color:inherit;-moz-appearance:none;appearance:none;-webkit-appearance:none}.model-card[data-v-d6437604]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.model-card[data-v-d6437604]:hover{background:#ffffff12;border-color:#ffffff26}.model-card.selected[data-v-d6437604]{background:#f08a4526;border-color:var(--fil-accent, #f08a45)}.model-main[data-v-d6437604]{display:flex;align-items:center;gap:8px;min-width:0}.type-icon[data-v-d6437604]{font-size:14px}.model-name[data-v-d6437604]{font-size:12px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.model-tags[data-v-d6437604]{display:flex;gap:4px;flex-shrink:0}.tag[data-v-d6437604]{font-size:9px;padding:2px 6px;border-radius:4px;font-weight:600;text-transform:uppercase}.tag.vision[data-v-d6437604]{background:#f08a4526;color:var(--fil-accent, #f08a45)}.tag.text[data-v-d6437604],.tag.local[data-v-d6437604],.tag.free[data-v-d6437604],.tag.paid[data-v-d6437604]{background:var(--fil-pill-bg);color:var(--fil-muted, #9ca8b5)}.picker-footer[data-v-d6437604]{display:flex;justify-content:space-between;align-items:center;padding-top:8px}.selection-summary[data-v-d6437604]{font-size:12px}.selection-summary .muted[data-v-d6437604]{color:var(--fil-muted, #9ca8b5)}.footer-actions[data-v-d6437604]{display:flex;gap:8px}.fil-provider-root[data-v-1a9a11d7]{width:100%;box-sizing:border-box;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;min-width:0}.picker-trigger-btn[data-v-1a9a11d7]{display:flex;flex-direction:column;gap:6px;width:100%;box-sizing:border-box;padding:8px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-pill-border);border-radius:var(--fil-field-radius, 8px);color:var(--fil-text, #f2f2f2);cursor:pointer;text-align:left;transition:border-color .15s ease,background .15s ease;outline:none}.picker-trigger-btn[data-v-1a9a11d7]:hover{border-color:var(--fil-accent, #f08a45);background:var(--fil-pill-bg)}.picker-trigger-btn[data-v-1a9a11d7]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px;border-color:var(--fil-accent)}.trigger-header[data-v-1a9a11d7]{display:flex;justify-content:space-between;align-items:center;width:100%}.provider-badge[data-v-1a9a11d7]{display:flex;align-items:center;gap:6px;font-weight:600;font-size:13px;color:var(--fil-accent, #f08a45)}.open-icon[data-v-1a9a11d7]{font-size:11px;background:var(--fil-pill-bg);padding:2px 6px;border-radius:4px;color:var(--fil-text, #e8edf3)}.trigger-model[data-v-1a9a11d7]{display:flex;align-items:center;gap:6px;font-size:12px;min-width:0}.model-label[data-v-1a9a11d7]{color:var(--fil-muted, #9ca8b5);flex-shrink:0}.model-name[data-v-1a9a11d7]{font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.fil-scanner-root[data-v-bd04f211]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;width:100%;box-sizing:border-box;min-width:0}.fil-section-block[data-v-bd04f211]{display:flex;flex-direction:column;gap:5px;min-width:0}.fil-w-row[data-v-bd04f211]{display:flex;flex-direction:column;gap:3px;min-width:0}.fil-scanner-textarea[data-v-bd04f211]{box-sizing:border-box;width:100%;padding:8px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;resize:vertical;outline:none}.fil-scanner-textarea[data-v-bd04f211]:focus{border-color:var(--fil-accent, #00f0ff)}.fil-scanner-input[data-v-bd04f211]{box-sizing:border-box;width:100%;padding:7px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-scanner-input[data-v-bd04f211]:focus{border-color:var(--fil-accent, #00f0ff)}.fil-single-style-block[data-v-bd04f211]{margin-top:2px}.fil-unified-style-modal[data-v-bd04f211]{display:flex;flex-direction:column;gap:12px;padding:4px 0}.fil-style-tab-bar[data-v-bd04f211]{display:flex;gap:6px;background:#0000004d;padding:4px;border-radius:8px;border:1px solid rgba(255,255,255,.08)}.fil-style-tab-btn[data-v-bd04f211]{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;height:34px;border-radius:6px;border:1px solid transparent;background:transparent;color:var(--fil-muted, #9ca8b5);font-size:12px;font-weight:600;cursor:pointer;transition:all .12s ease}.fil-style-tab-btn[data-v-bd04f211]:hover{color:var(--fil-text, #ffffff);background:#ffffff0f}.fil-style-tab-btn.active[data-v-bd04f211]{background:var(--fil-accent, #00f0ff);color:var(--fil-accent-ink, #12151a);border-color:var(--fil-accent, #00f0ff);font-weight:700;box-shadow:0 0 10px color-mix(in srgb,var(--fil-accent, #00f0ff) 30%,transparent)}.fil-tab-badge[data-v-bd04f211]{font-size:10px;color:#0f8}.fil-style-tab-btn.active .fil-tab-badge[data-v-bd04f211]{color:var(--fil-accent-ink, #12151a)}.fil-style-picker-body[data-v-bd04f211]{min-height:320px;max-height:480px;overflow-y:auto}.fil-style-modal-footer[data-v-bd04f211]{display:flex;justify-content:flex-end;border-top:1px solid rgba(255,255,255,.08);padding-top:8px}.fil-clear-styles-btn[data-v-bd04f211]{padding:6px 12px;border-radius:6px;border:1px solid rgba(255,75,75,.3);background:#ff4b4b1a;color:var(--fil-danger, #ff6b6b);font-size:12px;font-weight:600;cursor:pointer;transition:all .12s ease}.fil-clear-styles-btn[data-v-bd04f211]:hover{background:#ff4b4b40;border-color:var(--fil-danger, #ff4b4b);color:#fff}.fil-scanner-seed-row[data-v-bd04f211]{display:flex;gap:6px;min-width:0}.fil-scanner-seed-field[data-v-bd04f211]{flex:1.3;min-width:0;box-sizing:border-box;height:34px;background:#00000059;border:1px solid rgba(255,255,255,.08);border-radius:var(--fil-pill-radius);padding:0 12px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:13px;text-align:center;outline:none;transition:border-color .08s}.fil-scanner-seed-field[data-v-bd04f211]:focus{border-color:var(--fil-accent)}.fil-scanner-seed-field.is-random[data-v-bd04f211]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-scanner-seed-pill[data-v-bd04f211]{flex:1;min-width:0;box-sizing:border-box;height:34px;padding:0 8px;border-radius:var(--fil-pill-radius);border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-text, #e8edf3);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none}.fil-scanner-seed-pill[data-v-bd04f211]:hover{background:#ffffff1f}.fil-scanner-seed-pill.active[data-v-bd04f211]{background:#ffffff29;border-color:#fff3}.fil-scanner-seed-pill[data-v-bd04f211]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-scanner-seed-pill-accent[data-v-bd04f211]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #241206);font-weight:700}.fil-scanner-seed-pill-accent[data-v-bd04f211]:hover{filter:brightness(1.08);background:var(--fil-accent)}.fil-cleaner-root[data-v-3d68b764],.fil-up-root[data-v-57658737]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-up-row[data-v-57658737]{display:grid;grid-template-columns:minmax(auto,max-content) 64px minmax(auto,max-content) 64px;align-items:center;gap:var(--fil-node-gap)}.fil-up-row-overlap[data-v-57658737]{grid-template-columns:minmax(auto,max-content) 64px minmax(auto,max-content) 64px auto}.fil-w-label[data-v-57658737]{font-size:11px;color:var(--fil-muted, rgba(255,255,255,.55))}.fil-hrf-root[data-v-30b15350]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-hrf-seed-row[data-v-30b15350]{display:flex;gap:6px;min-width:0}.fil-hrf-seed-field[data-v-30b15350]{flex:1.3;min-width:0;box-sizing:border-box;height:34px;background:#00000059;border:1px solid rgba(255,255,255,.08);border-radius:var(--fil-pill-radius);padding:0 12px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:13px;text-align:center;outline:none;transition:border-color .08s}.fil-hrf-seed-field[data-v-30b15350]:focus{border-color:var(--fil-accent)}.fil-hrf-seed-field.is-random[data-v-30b15350]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-hrf-seed-pill[data-v-30b15350]{flex:1;min-width:0;box-sizing:border-box;height:34px;padding:0 8px;border-radius:var(--fil-pill-radius);border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-text, #e8edf3);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none}.fil-hrf-seed-pill[data-v-30b15350]:hover{background:#ffffff1f}.fil-hrf-seed-pill.active[data-v-30b15350]{background:#ffffff29;border-color:#fff3}.fil-hrf-seed-pill[data-v-30b15350]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-hrf-seed-pill-accent[data-v-30b15350]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #241206);font-weight:700}.fil-hrf-seed-pill-accent[data-v-30b15350]:hover{filter:brightness(1.08);background:var(--fil-accent)}.fil-style-mixer-root[data-v-022d49e2],.fil-color-wizard-root[data-v-3228ee08]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cw-presets-block[data-v-3228ee08]{display:flex;flex-direction:column;gap:6px;padding:8px 10px;background:#0000004d;border:1px solid rgba(255,255,255,.08);border-radius:8px}.fil-cw-presets-title[data-v-3228ee08]{font-size:11px;font-weight:700;color:var(--fil-accent, #00f0ff);text-transform:uppercase;letter-spacing:.5px}.fil-cw-presets-grid[data-v-3228ee08]{display:grid;grid-template-columns:1fr 1fr;gap:6px}.fil-cw-preset-btn[data-v-3228ee08]{height:28px;border-radius:6px;border:1px solid rgba(255,255,255,.1);background:#ffffff0a;color:var(--fil-text, #ddd);font-size:11px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .12s ease}.fil-cw-preset-btn[data-v-3228ee08]:hover{background:#ffffff1f;border-color:var(--fil-accent, #00f0ff)}.fil-cw-preset-btn.warm[data-v-3228ee08]:hover{border-color:#fa0;color:#fa0}.fil-cw-preset-btn.cool[data-v-3228ee08]:hover{border-color:#00f0ff;color:#00f0ff}.fil-cw-preset-btn.skin[data-v-3228ee08]:hover{border-color:#f7a;color:#f7a}.fil-cw-preset-btn.contrast[data-v-3228ee08]:hover{border-color:#fa0;color:#fa0}.fil-cw-slider-group[data-v-3228ee08]{display:flex;flex-direction:column;gap:6px}\n";document.head.appendChild(s);}catch(e){}})();
import { app as hs } from "/scripts/app.js";
/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ui(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const he = {}, pn = [], mt = () => {
}, gs = () => !1, Vl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), $l = (e) => e.startsWith("onUpdate:"), ke = Object.assign, Gi = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ja = Object.prototype.hasOwnProperty, _e = (e, t) => Ja.call(e, t), te = Array.isArray, mn = (e) => Qn(e) === "[object Map]", Bl = (e) => Qn(e) === "[object Set]", ho = (e) => Qn(e) === "[object Date]", ue = (e) => typeof e == "function", Ce = (e) => typeof e == "string", qe = (e) => typeof e == "symbol", be = (e) => e !== null && typeof e == "object", _s = (e) => (be(e) || ue(e)) && ue(e.then) && ue(e.catch), bs = Object.prototype.toString, Qn = (e) => bs.call(e), Qa = (e) => Qn(e).slice(8, -1), vs = (e) => Qn(e) === "[object Object]", Hl = (e) => Ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Tn = /* @__PURE__ */ Ui(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ul = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Za = /-\w/g, $e = Ul(
  (e) => e.replace(Za, (t) => t.slice(1).toUpperCase())
), er = /\B([A-Z])/g, Dt = Ul(
  (e) => e.replace(er, "-$1").toLowerCase()
), Gl = Ul((e) => e.charAt(0).toUpperCase() + e.slice(1)), oi = Ul(
  (e) => e ? `on${Gl(e)}` : ""
), Pe = (e, t) => !Object.is(e, t), hl = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ys = (e, t, n, l = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: l,
    value: n
  });
}, Wl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, tr = (e) => {
  const t = Ce(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let go;
const jl = () => go || (go = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function et(e) {
  if (te(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const l = e[n], i = Ce(l) ? or(l) : et(l);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Ce(e) || be(e))
    return e;
}
const nr = /;(?![^(]*\))/g, lr = /:([^]+)/, ir = /\/\*[^]*?\*\//g;
function or(e) {
  const t = {};
  return e.replace(ir, "").split(nr).forEach((n) => {
    if (n) {
      const l = n.split(lr);
      l.length > 1 && (t[l[0].trim()] = l[1].trim());
    }
  }), t;
}
function me(e) {
  let t = "";
  if (Ce(e))
    t = e;
  else if (te(e))
    for (let n = 0; n < e.length; n++) {
      const l = me(e[n]);
      l && (t += l + " ");
    }
  else if (be(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const sr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ar = /* @__PURE__ */ Ui(sr);
function ws(e) {
  return !!e || e === "";
}
function rr(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let l = 0; n && l < e.length; l++)
    n = Zn(e[l], t[l]);
  return n;
}
function Zn(e, t) {
  if (e === t) return !0;
  let n = ho(e), l = ho(t);
  if (n || l)
    return n && l ? e.getTime() === t.getTime() : !1;
  if (n = qe(e), l = qe(t), n || l)
    return e === t;
  if (n = te(e), l = te(t), n || l)
    return n && l ? rr(e, t) : !1;
  if (n = be(e), l = be(t), n || l) {
    if (!n || !l)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), r = t.hasOwnProperty(s);
      if (a && !r || !a && r || !Zn(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ur(e, t) {
  return e.findIndex((n) => Zn(n, t));
}
const Ss = (e) => !!(e && e.__v_isRef === !0), z = (e) => Ce(e) ? e : e == null ? "" : te(e) || be(e) && (e.toString === bs || !ue(e.toString)) ? Ss(e) ? z(e.value) : JSON.stringify(e, xs, 2) : String(e), xs = (e, t) => Ss(t) ? xs(e, t.value) : mn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [l, i], o) => (n[si(l, o) + " =>"] = i, n),
    {}
  )
} : Bl(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => si(n))
} : qe(t) ? si(t) : be(t) && !te(t) && !vs(t) ? String(t) : t, si = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    qe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Le;
class Cs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Le && (Le.active ? (this.parent = Le, this.index = (Le.scopes || (Le.scopes = [])).push(
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
      if (this.scopes) {
        const l = this.scopes.slice();
        for (t = 0, n = l.length; t < n; t++)
          l[t].pause();
      }
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
      if (this.scopes) {
        const i = this.scopes.slice();
        for (t = 0, n = i.length; t < n; t++)
          i[t].resume();
      }
      const l = this.effects.slice();
      for (t = 0, n = l.length; t < n; t++)
        l[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Le;
      try {
        return Le = this, t();
      } finally {
        Le = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Le, Le = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Le === this)
        Le = this.prevScope;
      else {
        let t = Le;
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
        const i = this.scopes.slice();
        for (n = 0, l = i.length; n < l; n++)
          i[n].stop(!0);
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
function As(e) {
  return new Cs(e);
}
function Ms() {
  return Le;
}
function cr(e, t = !1) {
  Le && Le.cleanups.push(e);
}
let xe;
const ai = /* @__PURE__ */ new WeakSet();
class Fs {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Le && (Le.active ? Le.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ai.has(this) && (ai.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ls(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, _o(this), Is(this);
    const t = xe, n = it;
    xe = this, it = !0;
    try {
      return this.fn();
    } finally {
      Ds(this), xe = t, it = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ki(t);
      this.deps = this.depsTail = void 0, _o(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ai.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    yi(this) && this.run();
  }
  get dirty() {
    return yi(this);
  }
}
let ks = 0, En, On;
function Ls(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = On, On = e;
    return;
  }
  e.next = En, En = e;
}
function Wi() {
  ks++;
}
function ji() {
  if (--ks > 0)
    return;
  if (On) {
    let t = On;
    for (On = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; En; ) {
    let t = En;
    for (En = void 0; t; ) {
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
function Is(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ds(e) {
  let t, n = e.depsTail, l = n;
  for (; l; ) {
    const i = l.prevDep;
    l.version === -1 ? (l === n && (n = i), Ki(l), dr(l)) : t = l, l.dep.activeLink = l.prevActiveLink, l.prevActiveLink = void 0, l = i;
  }
  e.deps = t, e.depsTail = n;
}
function yi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ps(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ps(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === jn) || (e.globalVersion = jn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !yi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = xe, l = it;
  xe = e, it = !0;
  try {
    Is(e);
    const i = e.fn(e._value);
    (t.version === 0 || Pe(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    xe = n, it = l, Ds(e), e.flags &= -3;
  }
}
function Ki(e, t = !1) {
  const { dep: n, prevSub: l, nextSub: i } = e;
  if (l && (l.nextSub = i, e.prevSub = void 0), i && (i.prevSub = l, e.nextSub = void 0), n.subs === e && (n.subs = l, !l && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Ki(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function dr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let it = !0;
const Rs = [];
function Mt() {
  Rs.push(it), it = !1;
}
function Ft() {
  const e = Rs.pop();
  it = e === void 0 ? !0 : e;
}
function _o(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = xe;
    xe = void 0;
    try {
      t();
    } finally {
      xe = n;
    }
  }
}
let jn = 0;
class fr {
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
    if (!xe || !it || xe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== xe)
      n = this.activeLink = new fr(xe, this), xe.deps ? (n.prevDep = xe.depsTail, xe.depsTail.nextDep = n, xe.depsTail = n) : xe.deps = xe.depsTail = n, Ns(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const l = n.nextDep;
      l.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = l), n.prevDep = xe.depsTail, n.nextDep = void 0, xe.depsTail.nextDep = n, xe.depsTail = n, xe.deps === n && (xe.deps = l);
    }
    return n;
  }
  trigger(t) {
    this.version++, jn++, this.notify(t);
  }
  notify(t) {
    Wi();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ji();
    }
  }
}
function Ns(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let l = t.deps; l; l = l.nextDep)
        Ns(l);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const wl = /* @__PURE__ */ new WeakMap(), tn = /* @__PURE__ */ Symbol(
  ""
), wi = /* @__PURE__ */ Symbol(
  ""
), Kn = /* @__PURE__ */ Symbol(
  ""
);
function Oe(e, t, n) {
  if (it && xe) {
    let l = wl.get(e);
    l || wl.set(e, l = /* @__PURE__ */ new Map());
    let i = l.get(n);
    i || (l.set(n, i = new Kl()), i.map = l, i.key = n), i.track();
  }
}
function St(e, t, n, l, i, o) {
  const s = wl.get(e);
  if (!s) {
    jn++;
    return;
  }
  const a = (r) => {
    r && r.trigger();
  };
  if (Wi(), t === "clear")
    s.forEach(a);
  else {
    const r = te(e), c = r && Hl(n);
    if (r && n === "length") {
      const u = Number(l);
      s.forEach((d, m) => {
        (m === "length" || m === Kn || !qe(m) && m >= u) && a(d);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && a(s.get(n)), c && a(s.get(Kn)), t) {
        case "add":
          r ? c && a(s.get("length")) : (a(s.get(tn)), mn(e) && a(s.get(wi)));
          break;
        case "delete":
          r || (a(s.get(tn)), mn(e) && a(s.get(wi)));
          break;
        case "set":
          mn(e) && a(s.get(tn));
          break;
      }
  }
  ji();
}
function pr(e, t) {
  const n = wl.get(e);
  return n && n.get(t);
}
function on(e) {
  const t = /* @__PURE__ */ pe(e);
  return t === e ? t : (Oe(t, "iterate", Kn), /* @__PURE__ */ ze(e) ? t : t.map(ot));
}
function zl(e) {
  return Oe(e = /* @__PURE__ */ pe(e), "iterate", Kn), e;
}
function dt(e, t) {
  return /* @__PURE__ */ kt(e) ? yn(/* @__PURE__ */ Ct(e) ? ot(t) : t) : ot(t);
}
const mr = {
  __proto__: null,
  [Symbol.iterator]() {
    return ri(this, Symbol.iterator, (e) => dt(this, e));
  },
  concat(...e) {
    return on(this).concat(
      ...e.map((t) => te(t) ? on(t) : t)
    );
  },
  entries() {
    return ri(this, "entries", (e) => (e[1] = dt(this, e[1]), e));
  },
  every(e, t) {
    return gt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return gt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((l) => dt(this, l)),
      arguments
    );
  },
  find(e, t) {
    return gt(
      this,
      "find",
      e,
      t,
      (n) => dt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return gt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return gt(
      this,
      "findLast",
      e,
      t,
      (n) => dt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return gt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return gt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ui(this, "includes", e);
  },
  indexOf(...e) {
    return ui(this, "indexOf", e);
  },
  join(e) {
    return on(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ui(this, "lastIndexOf", e);
  },
  map(e, t) {
    return gt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Mn(this, "pop");
  },
  push(...e) {
    return Mn(this, "push", e);
  },
  reduce(e, ...t) {
    return bo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return bo(this, "reduceRight", e, t);
  },
  shift() {
    return Mn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return gt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Mn(this, "splice", e);
  },
  toReversed() {
    return on(this).toReversed();
  },
  toSorted(e) {
    return on(this).toSorted(e);
  },
  toSpliced(...e) {
    return on(this).toSpliced(...e);
  },
  unshift(...e) {
    return Mn(this, "unshift", e);
  },
  values() {
    return ri(this, "values", (e) => dt(this, e));
  }
};
function ri(e, t, n) {
  const l = zl(e), i = l[t]();
  return l !== e && !/* @__PURE__ */ ze(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const hr = Array.prototype;
function gt(e, t, n, l, i, o) {
  const s = zl(e), a = s !== e && !/* @__PURE__ */ ze(e), r = s[t];
  if (r !== hr[t]) {
    const d = r.apply(e, o);
    return a ? ot(d) : d;
  }
  let c = n;
  s !== e && (a ? c = function(d, m) {
    return n.call(this, dt(e, d), m, e);
  } : n.length > 2 && (c = function(d, m) {
    return n.call(this, d, m, e);
  }));
  const u = r.call(s, c, l);
  return a && i ? i(u) : u;
}
function bo(e, t, n, l) {
  const i = zl(e), o = i !== e && !/* @__PURE__ */ ze(e);
  let s = n, a = !1;
  i !== e && (o ? (a = l.length === 0, s = function(c, u, d) {
    return a && (a = !1, c = dt(e, c)), n.call(this, c, dt(e, u), d, e);
  }) : n.length > 3 && (s = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }));
  const r = i[t](s, ...l);
  return a ? dt(e, r) : r;
}
function ui(e, t, n) {
  const l = /* @__PURE__ */ pe(e);
  Oe(l, "iterate", Kn);
  const i = l[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ ql(n[0]) ? (n[0] = /* @__PURE__ */ pe(n[0]), l[t](...n)) : i;
}
function Mn(e, t, n = []) {
  Mt(), Wi();
  const l = (/* @__PURE__ */ pe(e))[t].apply(e, n);
  return ji(), Ft(), l;
}
const gr = /* @__PURE__ */ Ui("__proto__,__v_isRef,__isVue"), Ts = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(qe)
);
function _r(e) {
  qe(e) || (e = String(e));
  const t = /* @__PURE__ */ pe(this);
  return Oe(t, "has", e), t.hasOwnProperty(e);
}
class Es {
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
      return l === (i ? o ? Fr : Bs : o ? $s : Vs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(l) ? t : void 0;
    const s = te(t);
    if (!i) {
      let r;
      if (s && (r = mr[n]))
        return r;
      if (n === "hasOwnProperty")
        return _r;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ de(t) ? t : l
    );
    if ((qe(n) ? Ts.has(n) : gr(n)) || (i || Oe(t, "get", n), o))
      return a;
    if (/* @__PURE__ */ de(a)) {
      const r = s && Hl(n) ? a : a.value;
      return i && be(r) ? /* @__PURE__ */ Sl(r) : r;
    }
    return be(a) ? i ? /* @__PURE__ */ Sl(a) : /* @__PURE__ */ Gt(a) : a;
  }
}
class Os extends Es {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, l, i) {
    let o = t[n];
    const s = te(t) && Hl(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ kt(o);
      if (!/* @__PURE__ */ ze(l) && !/* @__PURE__ */ kt(l) && (o = /* @__PURE__ */ pe(o), l = /* @__PURE__ */ pe(l)), !s && /* @__PURE__ */ de(o) && !/* @__PURE__ */ de(l))
        return c || (o.value = l), !0;
    }
    const a = s ? Number(n) < t.length : _e(t, n), r = Reflect.set(
      t,
      n,
      l,
      /* @__PURE__ */ de(t) ? t : i
    );
    return t === /* @__PURE__ */ pe(i) && r && (a ? Pe(l, o) && St(t, "set", n, l) : St(t, "add", n, l)), r;
  }
  deleteProperty(t, n) {
    const l = _e(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && l && St(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const l = Reflect.has(t, n);
    return (!qe(n) || !Ts.has(n)) && Oe(t, "has", n), l;
  }
  ownKeys(t) {
    return Oe(
      t,
      "iterate",
      te(t) ? "length" : tn
    ), Reflect.ownKeys(t);
  }
}
class br extends Es {
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
const vr = /* @__PURE__ */ new Os(), yr = /* @__PURE__ */ new br(), wr = /* @__PURE__ */ new Os(!0);
const Si = (e) => e, sl = (e) => Reflect.getPrototypeOf(e);
function Sr(e, t, n) {
  return function(...l) {
    const i = this.__v_raw, o = /* @__PURE__ */ pe(i), s = mn(o), a = e === "entries" || e === Symbol.iterator && s, r = e === "keys" && s, c = i[e](...l), u = n ? Si : t ? yn : ot;
    return !t && Oe(
      o,
      "iterate",
      r ? wi : tn
    ), ke(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: d, done: m } = c.next();
          return m ? { value: d, done: m } : {
            value: a ? [u(d[0]), u(d[1])] : u(d),
            done: m
          };
        }
      }
    );
  };
}
function al(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function xr(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ pe(o), a = /* @__PURE__ */ pe(i);
      e || (Pe(i, a) && Oe(s, "get", i), Oe(s, "get", a));
      const { has: r } = sl(s), c = t ? Si : e ? yn : ot;
      if (r.call(s, i))
        return c(o.get(i));
      if (r.call(s, a))
        return c(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Oe(/* @__PURE__ */ pe(i), "iterate", tn), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ pe(o), a = /* @__PURE__ */ pe(i);
      return e || (Pe(i, a) && Oe(s, "has", i), Oe(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const s = this, a = s.__v_raw, r = /* @__PURE__ */ pe(a), c = t ? Si : e ? yn : ot;
      return !e && Oe(r, "iterate", tn), a.forEach((u, d) => i.call(o, c(u), c(d), s));
    }
  };
  return ke(
    n,
    e ? {
      add: al("add"),
      set: al("set"),
      delete: al("delete"),
      clear: al("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ pe(this), s = sl(o), a = /* @__PURE__ */ pe(i), r = !t && !/* @__PURE__ */ ze(i) && !/* @__PURE__ */ kt(i) ? a : i;
        return s.has.call(o, r) || Pe(i, r) && s.has.call(o, i) || Pe(a, r) && s.has.call(o, a) || (o.add(r), St(o, "add", r, r)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ ze(o) && !/* @__PURE__ */ kt(o) && (o = /* @__PURE__ */ pe(o));
        const s = /* @__PURE__ */ pe(this), { has: a, get: r } = sl(s);
        let c = a.call(s, i);
        c || (i = /* @__PURE__ */ pe(i), c = a.call(s, i));
        const u = r.call(s, i);
        return s.set(i, o), c ? Pe(o, u) && St(s, "set", i, o) : St(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ pe(this), { has: s, get: a } = sl(o);
        let r = s.call(o, i);
        r || (i = /* @__PURE__ */ pe(i), r = s.call(o, i)), a && a.call(o, i);
        const c = o.delete(i);
        return r && St(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ pe(this), o = i.size !== 0, s = i.clear();
        return o && St(
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
    n[i] = Sr(i, e, t);
  }), n;
}
function zi(e, t) {
  const n = xr(e, t);
  return (l, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? l : Reflect.get(
    _e(n, i) && i in l ? n : l,
    i,
    o
  );
}
const Cr = {
  get: /* @__PURE__ */ zi(!1, !1)
}, Ar = {
  get: /* @__PURE__ */ zi(!1, !0)
}, Mr = {
  get: /* @__PURE__ */ zi(!0, !1)
};
const Vs = /* @__PURE__ */ new WeakMap(), $s = /* @__PURE__ */ new WeakMap(), Bs = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ new WeakMap();
function kr(e) {
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
function Gt(e) {
  return /* @__PURE__ */ kt(e) ? e : qi(
    e,
    !1,
    vr,
    Cr,
    Vs
  );
}
// @__NO_SIDE_EFFECTS__
function Lr(e) {
  return qi(
    e,
    !1,
    wr,
    Ar,
    $s
  );
}
// @__NO_SIDE_EFFECTS__
function Sl(e) {
  return qi(
    e,
    !0,
    yr,
    Mr,
    Bs
  );
}
function qi(e, t, n, l, i) {
  if (!be(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const s = kr(Qa(e));
  if (s === 0)
    return e;
  const a = new Proxy(
    e,
    s === 2 ? l : n
  );
  return i.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function Ct(e) {
  return /* @__PURE__ */ kt(e) ? /* @__PURE__ */ Ct(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function kt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ze(e) {
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
function Xi(e) {
  return !_e(e, "__v_skip") && Object.isExtensible(e) && ys(e, "__v_skip", !0), e;
}
const ot = (e) => be(e) ? /* @__PURE__ */ Gt(e) : e, yn = (e) => be(e) ? /* @__PURE__ */ Sl(e) : e;
// @__NO_SIDE_EFFECTS__
function de(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function se(e) {
  return Ir(e, !1);
}
function Ir(e, t) {
  return /* @__PURE__ */ de(e) ? e : new Dr(e, t);
}
class Dr {
  constructor(t, n) {
    this.dep = new Kl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ pe(t), this._value = n ? t : ot(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, l = this.__v_isShallow || /* @__PURE__ */ ze(t) || /* @__PURE__ */ kt(t);
    t = l ? t : /* @__PURE__ */ pe(t), Pe(t, n) && (this._rawValue = t, this._value = l ? t : ot(t), this.dep.trigger());
  }
}
function f(e) {
  return /* @__PURE__ */ de(e) ? e.value : e;
}
const Pr = {
  get: (e, t, n) => t === "__v_raw" ? e : f(Reflect.get(e, t, n)),
  set: (e, t, n, l) => {
    const i = e[t];
    return /* @__PURE__ */ de(i) && !/* @__PURE__ */ de(n) ? (i.value = n, !0) : Reflect.set(e, t, n, l);
  }
};
function Hs(e) {
  return /* @__PURE__ */ Ct(e) ? e : new Proxy(e, Pr);
}
class Rr {
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
function Nr(e) {
  return new Rr(e);
}
// @__NO_SIDE_EFFECTS__
function Tr(e) {
  const t = te(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Or(e, n);
  return t;
}
class Er {
  constructor(t, n, l) {
    this._object = t, this._defaultValue = l, this.__v_isRef = !0, this._value = void 0, this._key = qe(n) ? n : String(n), this._raw = /* @__PURE__ */ pe(t);
    let i = !0, o = t;
    if (!te(t) || qe(this._key) || !Hl(this._key))
      do
        i = !/* @__PURE__ */ ql(o) || /* @__PURE__ */ ze(o);
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
    return pr(this._raw, this._key);
  }
}
function Or(e, t, n) {
  return new Er(e, t, n);
}
class Vr {
  constructor(t, n, l) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Kl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = jn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = l;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    xe !== this)
      return Ls(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ps(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function $r(e, t, n = !1) {
  let l, i;
  return ue(e) ? l = e : (l = e.get, i = e.set), new Vr(l, i, n);
}
const rl = {}, xl = /* @__PURE__ */ new WeakMap();
let Xt;
function Br(e, t = !1, n = Xt) {
  if (n) {
    let l = xl.get(n);
    l || xl.set(n, l = []), l.push(e);
  }
}
function Hr(e, t, n = he) {
  const { immediate: l, deep: i, once: o, scheduler: s, augmentJob: a, call: r } = n, c = (v) => i ? v : /* @__PURE__ */ ze(v) || i === !1 || i === 0 ? xt(v, 1) : xt(v);
  let u, d, m, h, p = !1, _ = !1;
  if (/* @__PURE__ */ de(e) ? (d = () => e.value, p = /* @__PURE__ */ ze(e)) : /* @__PURE__ */ Ct(e) ? (d = () => c(e), p = !0) : te(e) ? (_ = !0, p = e.some((v) => /* @__PURE__ */ Ct(v) || /* @__PURE__ */ ze(v)), d = () => e.map((v) => {
    if (/* @__PURE__ */ de(v))
      return v.value;
    if (/* @__PURE__ */ Ct(v))
      return c(v);
    if (ue(v))
      return r ? r(v, 2) : v();
  })) : ue(e) ? t ? d = r ? () => r(e, 2) : e : d = () => {
    if (m) {
      Mt();
      try {
        m();
      } finally {
        Ft();
      }
    }
    const v = Xt;
    Xt = u;
    try {
      return r ? r(e, 3, [h]) : e(h);
    } finally {
      Xt = v;
    }
  } : d = mt, t && i) {
    const v = d, y = i === !0 ? 1 / 0 : i;
    d = () => xt(v(), y);
  }
  const A = Ms(), w = () => {
    u.stop(), A && A.active && Gi(A.effects, u);
  };
  if (o && t) {
    const v = t;
    t = (...y) => {
      const S = v(...y);
      return w(), S;
    };
  }
  let b = _ ? new Array(e.length).fill(rl) : rl;
  const C = (v) => {
    if (!(!(u.flags & 1) || !u.dirty && !v))
      if (t) {
        const y = u.run();
        if (v || i || p || (_ ? y.some((S, T) => Pe(S, b[T])) : Pe(y, b))) {
          m && m();
          const S = Xt;
          Xt = u;
          try {
            const T = [
              y,
              // pass undefined as the old value when it's changed for the first time
              b === rl ? void 0 : _ && b[0] === rl ? [] : b,
              h
            ];
            b = y, r ? r(t, 3, T) : (
              // @ts-expect-error
              t(...T)
            );
          } finally {
            Xt = S;
          }
        }
      } else
        u.run();
  };
  return a && a(C), u = new Fs(d), u.scheduler = s ? () => s(C, !1) : C, h = (v) => Br(v, !1, u), m = u.onStop = () => {
    const v = xl.get(u);
    if (v) {
      if (r)
        r(v, 4);
      else
        for (const y of v) y();
      xl.delete(u);
    }
  }, t ? l ? C(!0) : b = u.run() : s ? s(C.bind(null, !0), !0) : u.run(), w.pause = u.pause.bind(u), w.resume = u.resume.bind(u), w.stop = w, w;
}
function xt(e, t = 1 / 0, n) {
  if (t <= 0 || !be(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ de(e))
    xt(e.value, t, n);
  else if (te(e))
    for (let l = 0; l < e.length; l++)
      xt(e[l], t, n);
  else if (Bl(e) || mn(e))
    e.forEach((l) => {
      xt(l, t, n);
    });
  else if (vs(e)) {
    for (const l in e)
      xt(e[l], t, n);
    for (const l of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, l) && xt(e[l], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function el(e, t, n, l) {
  try {
    return l ? e(...l) : e();
  } catch (i) {
    tl(i, t, n);
  }
}
function nt(e, t, n, l) {
  if (ue(e)) {
    const i = el(e, t, n, l);
    return i && _s(i) && i.catch((o) => {
      tl(o, t, n);
    }), i;
  }
  if (te(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(nt(e[o], t, n, l));
    return i;
  }
}
function tl(e, t, n, l = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || he;
  if (t) {
    let a = t.parent;
    const r = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, r, c) === !1)
            return;
      }
      a = a.parent;
    }
    if (o) {
      Mt(), el(o, null, 10, [
        e,
        r,
        c
      ]), Ft();
      return;
    }
  }
  Ur(e, n, i, l, s);
}
function Ur(e, t, n, l = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Ue = [];
let ct = -1;
const hn = [];
let Bt = null, un = 0;
const Us = /* @__PURE__ */ Promise.resolve();
let Cl = null;
function Sn(e) {
  const t = Cl || Us;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Gr(e) {
  let t = ct + 1, n = Ue.length;
  for (; t < n; ) {
    const l = t + n >>> 1, i = Ue[l], o = zn(i);
    o < e || o === e && i.flags & 2 ? t = l + 1 : n = l;
  }
  return t;
}
function Yi(e) {
  if (!(e.flags & 1)) {
    const t = zn(e), n = Ue[Ue.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= zn(n) ? Ue.push(e) : Ue.splice(Gr(t), 0, e), e.flags |= 1, Gs();
  }
}
function Gs() {
  Cl || (Cl = Us.then(js));
}
function Wr(e) {
  te(e) ? hn.push(...e) : Bt && e.id === -1 ? Bt.splice(un + 1, 0, e) : e.flags & 1 || (hn.push(e), e.flags |= 1), Gs();
}
function vo(e, t, n = ct + 1) {
  for (; n < Ue.length; n++) {
    const l = Ue[n];
    if (l && l.flags & 2) {
      if (e && l.id !== e.uid)
        continue;
      Ue.splice(n, 1), n--, l.flags & 4 && (l.flags &= -2), l(), l.flags & 4 || (l.flags &= -2);
    }
  }
}
function Ws(e) {
  if (hn.length) {
    const t = [...new Set(hn)].sort(
      (n, l) => zn(n) - zn(l)
    );
    if (hn.length = 0, Bt) {
      Bt.push(...t);
      return;
    }
    for (Bt = t, un = 0; un < Bt.length; un++) {
      const n = Bt[un];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Bt = null, un = 0;
  }
}
const zn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function js(e) {
  try {
    for (ct = 0; ct < Ue.length; ct++) {
      const t = Ue[ct];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), el(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ct < Ue.length; ct++) {
      const t = Ue[ct];
      t && (t.flags &= -2);
    }
    ct = -1, Ue.length = 0, Ws(), Cl = null, (Ue.length || hn.length) && js();
  }
}
let Ne = null, Ks = null;
function Al(e) {
  const t = Ne;
  return Ne = e, Ks = e && e.type.__scopeId || null, t;
}
function Ht(e, t = Ne, n) {
  if (!t || e._n)
    return e;
  const l = (...i) => {
    l._d && Ll(-1);
    const o = Al(t), s = At.length;
    let a;
    try {
      a = e(...i);
    } finally {
      for (let r = At.length; r > s; r--) no();
      Al(o), l._d && Ll(1);
    }
    return a;
  };
  return l._n = !0, l._c = !0, l._d = !0, l;
}
function tt(e, t) {
  if (Ne === null)
    return e;
  const n = ti(Ne), l = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, a, r = he] = t[i];
    o && (ue(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && xt(s), l.push({
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
function jt(e, t, n, l) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    o && (a.oldValue = o[s].value);
    let r = a.dir[l];
    r && (Mt(), nt(r, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Ft());
  }
}
function jr(e, t) {
  if (Re) {
    let n = Re.provides;
    const l = Re.parent && Re.parent.provides;
    l === n && (n = Re.provides = Object.create(l)), n[e] = t;
  }
}
function Vn(e, t, n = !1) {
  const l = ei();
  if (l || nn) {
    let i = nn ? nn._context.provides : l ? l.parent == null || l.ce ? l.vnode.appContext && l.vnode.appContext.provides : l.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && ue(t) ? t.call(l && l.proxy) : t;
  }
}
function Kr() {
  return !!(ei() || nn);
}
const zr = /* @__PURE__ */ Symbol.for("v-scx"), qr = () => Vn(zr);
function Xr(e, t) {
  return Ji(
    e,
    null,
    { flush: "sync" }
  );
}
function Te(e, t, n) {
  return Ji(e, t, n);
}
function Ji(e, t, n = he) {
  const { immediate: l, deep: i, flush: o, once: s } = n, a = ke({}, n), r = t && l || !t && o !== "post";
  let c;
  if (wn) {
    if (o === "sync") {
      const h = qr();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!r) {
      const h = () => {
      };
      return h.stop = mt, h.resume = mt, h.pause = mt, h;
    }
  }
  const u = Re;
  a.call = (h, p, _) => nt(h, u, p, _);
  let d = !1;
  o === "post" ? a.scheduler = (h) => {
    He(h, u && u.suspense);
  } : o !== "sync" && (d = !0, a.scheduler = (h, p) => {
    p ? h() : Yi(h);
  }), a.augmentJob = (h) => {
    t && (h.flags |= 4), d && (h.flags |= 2, u && (h.id = u.uid, h.i = u));
  };
  const m = Hr(e, t, a);
  return wn && (c ? c.push(m) : r && m()), m;
}
function Yr(e, t, n) {
  const l = this.proxy, i = Ce(e) ? e.includes(".") ? zs(l, e) : () => l[e] : e.bind(l, l);
  let o;
  ue(t) ? o = t : (o = t.handler, n = t);
  const s = il(this), a = Ji(i, o.bind(l), n);
  return s(), a;
}
function zs(e, t) {
  const n = t.split(".");
  return () => {
    let l = e;
    for (let i = 0; i < n.length && l; i++)
      l = l[n[i]];
    return l;
  };
}
const Vt = /* @__PURE__ */ new WeakMap(), qs = /* @__PURE__ */ Symbol("_vte"), Xs = (e) => e.__isTeleport, Yt = (e) => e && (e.disabled || e.disabled === ""), Jr = (e) => e && (e.defer || e.defer === ""), yo = (e) => typeof SVGElement < "u" && e instanceof SVGElement, wo = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, xi = (e, t) => {
  const n = e && e.to;
  return Ce(n) ? t ? t(n) : null : n;
}, Qr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, l, i, o, s, a, r, c) {
    const {
      mc: u,
      pc: d,
      pbc: m,
      o: { insert: h, querySelector: p, createText: _, createComment: A, parentNode: w }
    } = c, b = Yt(t.props);
    let { dynamicChildren: C } = t;
    const v = (T, G, E) => {
      T.shapeFlag & 16 && u(
        T.children,
        G,
        E,
        i,
        o,
        s,
        a,
        r
      );
    }, y = (T = t) => {
      const G = Yt(T.props), E = T.target = xi(T.props, p), W = Ci(E, T, _, h);
      E && (s !== "svg" && yo(E) ? s = "svg" : s !== "mathml" && wo(E) && (s = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(E), G || (v(T, E, W), Dn(T, !1)));
    }, S = (T) => {
      const G = () => {
        if (Vt.get(T) === G) {
          if (Vt.delete(T), Yt(T.props)) {
            const E = w(T.el) || n;
            v(T, E, T.anchor), Dn(T, !0);
          }
          y(T);
        }
      };
      Vt.set(T, G), He(G, o);
    };
    if (e == null) {
      const T = t.el = _(""), G = t.anchor = _("");
      if (h(T, n, l), h(G, n, l), Jr(t.props) || o && o.pendingBranch) {
        S(t);
        return;
      }
      b && (v(t, n, G), Dn(t, !0)), y();
    } else {
      t.el = e.el;
      const T = t.anchor = e.anchor, G = Vt.get(e);
      if (G) {
        G.flags |= 8, Vt.delete(e), S(t);
        return;
      }
      t.targetStart = e.targetStart;
      const E = t.target = e.target, W = t.targetAnchor = e.targetAnchor, J = Yt(e.props), L = J ? n : E, I = J ? T : W;
      if (s === "svg" || yo(E) ? s = "svg" : (s === "mathml" || wo(E)) && (s = "mathml"), C ? (m(
        e.dynamicChildren,
        C,
        L,
        i,
        o,
        s,
        a
      ), to(e, t, !0)) : r || d(
        e,
        t,
        L,
        I,
        i,
        o,
        s,
        a,
        !1
      ), b)
        J ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ul(
          t,
          n,
          T,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const O = xi(t.props, p);
        O && (t.target = O, ul(
          t,
          O,
          null,
          c,
          0
        ));
      } else J && ul(
        t,
        E,
        W,
        c,
        1
      );
      Dn(t, b);
    }
  },
  remove(e, t, n, { um: l, o: { remove: i } }, o) {
    const {
      shapeFlag: s,
      children: a,
      anchor: r,
      targetStart: c,
      targetAnchor: u,
      target: d,
      props: m
    } = e, h = Yt(m), p = o || !h, _ = Vt.get(e);
    if (_ && (_.flags |= 8, Vt.delete(e)), d && (i(c), i(u)), o && i(r), !_ && (h || d) && s & 16)
      for (let A = 0; A < a.length; A++) {
        const w = a[A];
        l(
          w,
          t,
          n,
          p,
          !!w.dynamicChildren
        );
      }
  },
  move: ul,
  hydrate: Zr
};
function ul(e, t, n, { o: { insert: l }, m: i }, o = 2) {
  o === 0 && l(e.targetAnchor, t, n);
  const { el: s, anchor: a, shapeFlag: r, children: c, props: u } = e, d = o === 2;
  if (d && l(s, t, n), !Vt.has(e) && (!d || Yt(u)) && r & 16)
    for (let m = 0; m < c.length; m++)
      i(
        c[m],
        t,
        n,
        2
      );
  d && l(a, t, n);
}
function Zr(e, t, n, l, i, o, {
  o: { nextSibling: s, parentNode: a, querySelector: r, insert: c, createText: u }
}, d) {
  function m(A, w) {
    let b = w;
    for (; b; ) {
      if (b && b.nodeType === 8) {
        if (b.data === "teleport start anchor")
          t.targetStart = b;
        else if (b.data === "teleport anchor") {
          t.targetAnchor = b, A._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      b = s(b);
    }
  }
  function h(A, w) {
    w.anchor = d(
      s(A),
      w,
      a(A),
      n,
      l,
      i,
      o
    );
  }
  const p = t.target = xi(
    t.props,
    r
  ), _ = Yt(t.props);
  if (p) {
    const A = p._lpa || p.firstChild;
    t.shapeFlag & 16 && (_ ? (h(e, t), m(p, A), t.targetAnchor || Ci(
      p,
      t,
      u,
      c,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      a(e) === p ? e : null
    )) : (t.anchor = s(e), m(p, A), t.targetAnchor || Ci(p, t, u, c), d(
      A && s(A),
      t,
      p,
      n,
      l,
      i,
      o
    ))), Dn(t, _);
  } else _ && t.shapeFlag & 16 && (h(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const Ys = Qr;
function Dn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let l, i;
    for (t ? (l = e.el, i = e.anchor) : (l = e.targetStart, i = e.targetAnchor); l && l !== i; )
      l.nodeType === 1 && l.setAttribute("data-v-owner", n.uid), l = l.nextSibling;
    n.ut();
  }
}
function Ci(e, t, n, l, i = null) {
  const o = t.targetStart = n(""), s = t.targetAnchor = n("");
  return o[qs] = s, e && (l(o, e, i), l(s, e, i)), s;
}
const Ze = /* @__PURE__ */ Symbol("_leaveCb"), Fn = /* @__PURE__ */ Symbol("_enterCb");
function eu() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ll(() => {
    e.isMounted = !0;
  }), Yl(() => {
    e.isUnmounting = !0;
  }), e;
}
const Je = [Function, Array], Js = {
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
}, Qs = (e) => {
  const t = e.subTree;
  return t.component ? Qs(t.component) : t;
}, tu = {
  name: "BaseTransition",
  props: Js,
  setup(e, { slots: t }) {
    const n = ei(), l = eu();
    return () => {
      const i = t.default && ta(t.default(), !0), o = i && i.length ? Zs(i) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? ee() : void 0
      );
      if (!o)
        return;
      const s = /* @__PURE__ */ pe(e), { mode: a } = s;
      if (l.isLeaving)
        return ci(o);
      const r = So(o);
      if (!r)
        return ci(o);
      let c = Ai(
        r,
        s,
        l,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => c = d
      );
      r.type !== Ve && qn(r, c);
      let u = n.subTree && So(n.subTree);
      if (u && u.type !== Ve && !Jt(u, r) && Qs(n).type !== Ve) {
        let d = Ai(
          u,
          s,
          l,
          n
        );
        if (qn(u, d), a === "out-in" && r.type !== Ve)
          return l.isLeaving = !0, d.afterLeave = () => {
            l.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, u = void 0;
          }, ci(o);
        a === "in-out" && r.type !== Ve ? d.delayLeave = (m, h, p) => {
          const _ = ea(
            l,
            u
          );
          _[String(u.key)] = u, m[Ze] = () => {
            h(), m[Ze] = void 0, delete c.delayedLeave, u = void 0;
          }, c.delayedLeave = () => {
            p(), delete c.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return o;
    };
  }
};
function Zs(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ve) {
        t = n;
        break;
      }
  }
  return t;
}
const nu = tu;
function ea(e, t) {
  const { leavingVNodes: n } = e;
  let l = n.get(t.type);
  return l || (l = /* @__PURE__ */ Object.create(null), n.set(t.type, l)), l;
}
function Ai(e, t, n, l, i) {
  const {
    appear: o,
    mode: s,
    persisted: a = !1,
    onBeforeEnter: r,
    onEnter: c,
    onAfterEnter: u,
    onEnterCancelled: d,
    onBeforeLeave: m,
    onLeave: h,
    onAfterLeave: p,
    onLeaveCancelled: _,
    onBeforeAppear: A,
    onAppear: w,
    onAfterAppear: b,
    onAppearCancelled: C
  } = t, v = String(e.key), y = ea(n, e), S = (E, W) => {
    E && nt(
      E,
      l,
      9,
      W
    );
  }, T = (E, W) => {
    const J = W[1];
    S(E, W), te(E) ? E.every((L) => L.length <= 1) && J() : E.length <= 1 && J();
  }, G = {
    mode: s,
    persisted: a,
    beforeEnter(E) {
      let W = r;
      if (!n.isMounted)
        if (o)
          W = A || r;
        else
          return;
      E[Ze] && E[Ze](
        !0
        /* cancelled */
      );
      const J = y[v];
      J && Jt(e, J) && J.el[Ze] && J.el[Ze](), S(W, [E]);
    },
    enter(E) {
      if (y[v] === e) return;
      let W = c, J = u, L = d;
      if (!n.isMounted)
        if (o)
          W = w || c, J = b || u, L = C || d;
        else
          return;
      let I = !1;
      E[Fn] = (ne) => {
        I || (I = !0, ne ? S(L, [E]) : S(J, [E]), G.delayedLeave && G.delayedLeave(), E[Fn] = void 0);
      };
      const O = E[Fn].bind(null, !1);
      W ? T(W, [E, O]) : O();
    },
    leave(E, W) {
      const J = String(e.key);
      if (E[Fn] && E[Fn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return W();
      S(m, [E]);
      let L = !1;
      E[Ze] = (O) => {
        L || (L = !0, W(), O ? S(_, [E]) : S(p, [E]), E[Ze] = void 0, y[J] === e && delete y[J]);
      };
      const I = E[Ze].bind(null, !1);
      y[J] = e, h ? T(h, [E, I]) : I();
    },
    clone(E) {
      const W = Ai(
        E,
        t,
        n,
        l,
        i
      );
      return i && i(W), W;
    }
  };
  return G;
}
function ci(e) {
  if (nl(e))
    return e = Ut(e), e.children = null, e;
}
function So(e) {
  if (!nl(e))
    return Xs(e.type) && e.children ? Zs(e.children) : e;
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
function ta(e, t = !1, n) {
  let l = [], i = 0;
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : o);
    s.type === ce ? (s.patchFlag & 128 && i++, l = l.concat(
      ta(s.children, t, a)
    )) : (t || s.type !== Ve) && l.push(a != null ? Ut(s, { key: a }) : s);
  }
  if (i > 1)
    for (let o = 0; o < l.length; o++)
      l[o].patchFlag = -2;
  return l;
}
// @__NO_SIDE_EFFECTS__
function ye(e, t) {
  return ue(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ke({ name: e.name }, t, { setup: e })
  ) : e;
}
function Qi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function xo(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Ml = /* @__PURE__ */ new WeakMap();
function $n(e, t, n, l, i = !1) {
  if (te(e)) {
    e.forEach(
      (_, A) => $n(
        _,
        t && (te(t) ? t[A] : t),
        n,
        l,
        i
      )
    );
    return;
  }
  if (gn(l) && !i) {
    l.shapeFlag & 512 && l.type.__asyncResolved && l.component.subTree.component && $n(e, t, n, l.component.subTree);
    return;
  }
  const o = l.shapeFlag & 4 ? ti(l.component) : l.el, s = i ? null : o, { i: a, r } = e, c = t && t.r, u = a.refs === he ? a.refs = {} : a.refs, d = a.setupState, m = /* @__PURE__ */ pe(d), h = d === he ? gs : (_) => xo(u, _) ? !1 : _e(m, _), p = (_, A) => !(A && xo(u, A));
  if (c != null && c !== r) {
    if (Co(t), Ce(c))
      u[c] = null, h(c) && (d[c] = null);
    else if (/* @__PURE__ */ de(c)) {
      const _ = t;
      p(c, _.k) && (c.value = null), _.k && (u[_.k] = null);
    }
  }
  if (ue(r))
    el(r, a, 12, [s, u]);
  else {
    const _ = Ce(r), A = /* @__PURE__ */ de(r);
    if (_ || A) {
      const w = () => {
        if (e.f) {
          const b = _ ? h(r) ? d[r] : u[r] : p() || !e.k ? r.value : u[e.k];
          if (i)
            te(b) && Gi(b, o);
          else if (te(b))
            b.includes(o) || b.push(o);
          else if (_)
            u[r] = [o], h(r) && (d[r] = u[r]);
          else {
            const C = [o];
            p(r, e.k) && (r.value = C), e.k && (u[e.k] = C);
          }
        } else _ ? (u[r] = s, h(r) && (d[r] = s)) : A && (p(r, e.k) && (r.value = s), e.k && (u[e.k] = s));
      };
      if (s) {
        const b = () => {
          w(), Ml.delete(e);
        };
        b.id = -1, Ml.set(e, b), He(b, n);
      } else
        Co(e), w();
    }
  }
}
function Co(e) {
  const t = Ml.get(e);
  t && (t.flags |= 8, Ml.delete(e));
}
const Ao = (e) => e.nodeType === 8;
jl().requestIdleCallback;
jl().cancelIdleCallback;
function lu(e, t) {
  if (Ao(e) && e.data === "[") {
    let n = 1, l = e.nextSibling;
    for (; l; ) {
      if (l.nodeType === 1) {
        if (t(l) === !1)
          break;
      } else if (Ao(l))
        if (l.data === "]") {
          if (--n === 0) break;
        } else l.data === "[" && n++;
      l = l.nextSibling;
    }
  } else
    t(e);
}
const gn = (e) => !!e.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function Pt(e) {
  ue(e) && (e = { loader: e });
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
  let c = null, u, d = 0;
  const m = () => (d++, c = null, h()), h = () => {
    let p;
    return c || (p = c = t().catch((_) => {
      if (_ = _ instanceof Error ? _ : new Error(String(_)), r)
        return new Promise((A, w) => {
          r(_, () => A(m()), () => w(_), d + 1);
        });
      throw _;
    }).then((_) => p !== c && c ? c : (_ && (_.__esModule || _[Symbol.toStringTag] === "Module") && (_ = _.default), u = _, _)));
  };
  return /* @__PURE__ */ ye({
    name: "AsyncComponentWrapper",
    __asyncLoader: h,
    __asyncHydrate(p, _, A) {
      const w = p.isConnected;
      let b = !1;
      (_.bu || (_.bu = [])).push(() => b = !0);
      const C = () => {
        b || !p.parentNode || w && !p.isConnected || A();
      }, v = o ? () => {
        const y = o(
          C,
          (S) => lu(p, S)
        );
        y && (_.bum || (_.bum = [])).push(y);
      } : C;
      u ? v() : h().then(() => !_.isUnmounted && v());
    },
    get __asyncResolved() {
      return u;
    },
    setup() {
      const p = Re;
      if (Qi(p), u)
        return () => cl(u, p);
      const _ = (y) => {
        c = null, tl(
          y,
          p,
          13,
          !l
        );
      };
      if (a && p.suspense || wn)
        return h().then((y) => () => cl(y, p)).catch((y) => (_(y), () => l ? $(l, {
          error: y
        }) : null));
      const A = /* @__PURE__ */ se(!1), w = /* @__PURE__ */ se(), b = /* @__PURE__ */ se(!!i);
      let C, v;
      return Jl(() => {
        C != null && clearTimeout(C), v != null && clearTimeout(v);
      }), i && (v = setTimeout(() => {
        p.isUnmounted || (b.value = !1);
      }, i)), s != null && (C = setTimeout(() => {
        if (!p.isUnmounted && !A.value && !w.value) {
          const y = new Error(
            `Async component timed out after ${s}ms.`
          );
          _(y), w.value = y;
        }
      }, s)), h().then(() => {
        p.isUnmounted || (A.value = !0, p.parent && nl(p.parent.vnode) && p.parent.update());
      }).catch((y) => {
        if (p.isUnmounted) {
          c = null;
          return;
        }
        _(y), w.value = y;
      }), () => {
        if (A.value && u)
          return cl(u, p);
        if (w.value && l)
          return $(l, {
            error: w.value
          });
        if (n && !b.value)
          return cl(
            n,
            p
          );
      };
    }
  });
}
function cl(e, t) {
  const { ref: n, props: l, children: i, ce: o } = t.vnode, s = $(e, l, i);
  return s.ref = n, s.ce = o, delete t.vnode.ce, s;
}
const nl = (e) => e.type.__isKeepAlive;
function iu(e, t) {
  na(e, "a", t);
}
function ou(e, t) {
  na(e, "da", t);
}
function na(e, t, n = Re) {
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
      nl(i.parent.vnode) && su(l, t, n, i), i = i.parent;
  }
}
function su(e, t, n, l) {
  const i = Xl(
    t,
    e,
    l,
    !0
    /* prepend */
  );
  Jl(() => {
    Gi(l[t], i);
  }, n);
}
function Xl(e, t, n = Re, l = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...s) => {
      Mt();
      const a = il(n), r = nt(t, n, e, s);
      return a(), Ft(), r;
    });
    return l ? i.unshift(o) : i.push(o), o;
  }
}
const Rt = (e) => (t, n = Re) => {
  (!wn || e === "sp") && Xl(e, (...l) => t(...l), n);
}, au = Rt("bm"), ll = Rt("m"), ru = Rt(
  "bu"
), uu = Rt("u"), Yl = Rt(
  "bum"
), Jl = Rt("um"), cu = Rt(
  "sp"
), du = Rt("rtg"), fu = Rt("rtc");
function pu(e, t = Re) {
  Xl("ec", e, t);
}
const mu = "components", la = /* @__PURE__ */ Symbol.for("v-ndc");
function hu(e) {
  return Ce(e) ? gu(mu, e, !1) || e : e || la;
}
function gu(e, t, n = !0, l = !1) {
  const i = Ne || Re;
  if (i) {
    const o = i.type;
    {
      const a = Zu(
        o,
        !1
      );
      if (a && (a === t || a === $e(t) || a === Gl($e(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Mo(i[e] || o[e], t) || // global registration
      Mo(i.appContext[e], t)
    );
    return !s && l ? o : s;
  }
}
function Mo(e, t) {
  return e && (e[t] || e[$e(t)] || e[Gl($e(t))]);
}
function Me(e, t, n, l) {
  let i;
  const o = n, s = te(e);
  if (s || Ce(e)) {
    const a = s && /* @__PURE__ */ Ct(e);
    let r = !1, c = !1;
    a && (r = !/* @__PURE__ */ ze(e), c = /* @__PURE__ */ kt(e), e = zl(e)), i = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      i[u] = t(
        r ? c ? yn(ot(e[u])) : ot(e[u]) : e[u],
        u,
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
      for (let r = 0, c = a.length; r < c; r++) {
        const u = a[r];
        i[r] = t(e[u], u, r, o);
      }
    }
  else
    i = [];
  return i;
}
function _u(e, t, n = {}, l, i, o) {
  if (Ne.ce || Ne.parent && gn(Ne.parent) && Ne.parent.ce) {
    const c = n, u = Object.keys(c).length > 0;
    return F(), Ae(
      ce,
      null,
      [$("slot", c, l)],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const a = At.length;
  F();
  let r;
  try {
    const c = s && ia(s(n)), u = n.key || o || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    c && c.key;
    r = Ae(
      ce,
      {
        key: (u && !qe(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!c && l ? "_fb" : "")
      },
      c || (l ? l() : []),
      c && e._ === 1 ? 64 : -2
    );
  } catch (c) {
    for (let u = At.length; u > a; u--) no();
    throw c;
  } finally {
    s && s._c && (s._d = !0);
  }
  return r;
}
function ia(e) {
  return e.some((t) => Yn(t) ? !(t.type === Ve || t.type === ce && !ia(t.children)) : !0) ? e : null;
}
const Mi = (e) => e ? Ca(e) ? ti(e) : Mi(e.parent) : null, Bn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ke(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Mi(e.parent),
    $root: (e) => Mi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => sa(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Yi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Sn.bind(e.proxy)),
    $watch: (e) => Yr.bind(e)
  })
), di = (e, t) => e !== he && !e.__isScriptSetup && _e(e, t), bu = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: l, data: i, props: o, accessCache: s, type: a, appContext: r } = e;
    if (t[0] !== "$") {
      const m = s[t];
      if (m !== void 0)
        switch (m) {
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
        if (di(l, t))
          return s[t] = 1, l[t];
        if (i !== he && _e(i, t))
          return s[t] = 2, i[t];
        if (_e(o, t))
          return s[t] = 3, o[t];
        if (n !== he && _e(n, t))
          return s[t] = 4, n[t];
        Fi && (s[t] = 0);
      }
    }
    const c = Bn[t];
    let u, d;
    if (c)
      return t === "$attrs" && Oe(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = a.__cssModules) && (u = u[t])
    )
      return u;
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
    return di(i, t) ? (i[t] = n, !0) : l !== he && _e(l, t) ? (l[t] = n, !0) : _e(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: l, appContext: i, props: o, type: s }
  }, a) {
    let r;
    return !!(n[a] || e !== he && a[0] !== "$" && _e(e, a) || di(t, a) || _e(o, a) || _e(l, a) || _e(Bn, a) || _e(i.config.globalProperties, a) || (r = s.__cssModules) && r[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : _e(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Fl(e) {
  return te(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function We(e, t) {
  return !e || !t ? e || t : te(e) && te(t) ? e.concat(t) : ke({}, Fl(e), Fl(t));
}
let Fi = !0;
function vu(e) {
  const t = sa(e), n = e.proxy, l = e.ctx;
  Fi = !1, t.beforeCreate && Fo(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: s,
    watch: a,
    provide: r,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: m,
    beforeUpdate: h,
    updated: p,
    activated: _,
    deactivated: A,
    beforeDestroy: w,
    beforeUnmount: b,
    destroyed: C,
    unmounted: v,
    render: y,
    renderTracked: S,
    renderTriggered: T,
    errorCaptured: G,
    serverPrefetch: E,
    // public API
    expose: W,
    inheritAttrs: J,
    // assets
    components: L,
    directives: I,
    filters: O
  } = t;
  if (c && yu(c, l, null), s)
    for (const k in s) {
      const M = s[k];
      ue(M) && (l[k] = M.bind(n));
    }
  if (i) {
    const k = i.call(n, n);
    be(k) && (e.data = /* @__PURE__ */ Gt(k));
  }
  if (Fi = !0, o)
    for (const k in o) {
      const M = o[k], j = ue(M) ? M.bind(n, n) : ue(M.get) ? M.get.bind(n, n) : mt, Z = !ue(M) && ue(M.set) ? M.set.bind(n) : mt, le = X({
        get: j,
        set: Z
      });
      Object.defineProperty(l, k, {
        enumerable: !0,
        configurable: !0,
        get: () => le.value,
        set: (Ee) => le.value = Ee
      });
    }
  if (a)
    for (const k in a)
      oa(a[k], l, n, k);
  if (r) {
    const k = ue(r) ? r.call(n) : r;
    Reflect.ownKeys(k).forEach((M) => {
      jr(M, k[M]);
    });
  }
  u && Fo(u, e, "c");
  function R(k, M) {
    te(M) ? M.forEach((j) => k(j.bind(n))) : M && k(M.bind(n));
  }
  if (R(au, d), R(ll, m), R(ru, h), R(uu, p), R(iu, _), R(ou, A), R(pu, G), R(fu, S), R(du, T), R(Yl, b), R(Jl, v), R(cu, E), te(W))
    if (W.length) {
      const k = e.exposed || (e.exposed = {});
      W.forEach((M) => {
        Object.defineProperty(k, M, {
          get: () => n[M],
          set: (j) => n[M] = j,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  y && e.render === mt && (e.render = y), J != null && (e.inheritAttrs = J), L && (e.components = L), I && (e.directives = I), E && Qi(e);
}
function yu(e, t, n = mt) {
  te(e) && (e = ki(e));
  for (const l in e) {
    const i = e[l];
    let o;
    be(i) ? "default" in i ? o = Vn(
      i.from || l,
      i.default,
      !0
    ) : o = Vn(i.from || l) : o = Vn(i), /* @__PURE__ */ de(o) ? Object.defineProperty(t, l, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[l] = o;
  }
}
function Fo(e, t, n) {
  nt(
    te(e) ? e.map((l) => l.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function oa(e, t, n, l) {
  let i = l.includes(".") ? zs(n, l) : () => n[l];
  if (Ce(e)) {
    const o = t[e];
    ue(o) && Te(i, o);
  } else if (ue(e))
    Te(i, e.bind(n));
  else if (be(e))
    if (te(e))
      e.forEach((o) => oa(o, t, n, l));
    else {
      const o = ue(e.handler) ? e.handler.bind(n) : t[e.handler];
      ue(o) && Te(i, o, e);
    }
}
function sa(e) {
  const t = e.type, { mixins: n, extends: l } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = o.get(t);
  let r;
  return a ? r = a : !i.length && !n && !l ? r = t : (r = {}, i.length && i.forEach(
    (c) => kl(r, c, s, !0)
  ), kl(r, t, s)), be(t) && o.set(t, r), r;
}
function kl(e, t, n, l = !1) {
  const { mixins: i, extends: o } = t;
  o && kl(e, o, n, !0), i && i.forEach(
    (s) => kl(e, s, n, !0)
  );
  for (const s in t)
    if (!(l && s === "expose")) {
      const a = wu[s] || n && n[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const wu = {
  data: ko,
  props: Lo,
  emits: Lo,
  // objects
  methods: Pn,
  computed: Pn,
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
  components: Pn,
  directives: Pn,
  // watch
  watch: xu,
  // provide / inject
  provide: ko,
  inject: Su
};
function ko(e, t) {
  return t ? e ? function() {
    return ke(
      ue(e) ? e.call(this, this) : e,
      ue(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Su(e, t) {
  return Pn(ki(e), ki(t));
}
function ki(e) {
  if (te(e)) {
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
function Pn(e, t) {
  return e ? ke(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Lo(e, t) {
  return e ? te(e) && te(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ke(
    /* @__PURE__ */ Object.create(null),
    Fl(e),
    Fl(t ?? {})
  ) : t;
}
function xu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ke(/* @__PURE__ */ Object.create(null), e);
  for (const l in t)
    n[l] = Be(e[l], t[l]);
  return n;
}
function aa() {
  return {
    app: null,
    config: {
      isNativeTag: gs,
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
let Cu = 0;
function Au(e, t) {
  return function(l, i = null) {
    ue(l) || (l = ke({}, l)), i != null && !be(i) && (i = null);
    const o = aa(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let r = !1;
    const c = o.app = {
      _uid: Cu++,
      _component: l,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: tc,
      get config() {
        return o.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return s.has(u) || (u && ue(u.install) ? (s.add(u), u.install(c, ...d)) : ue(u) && (s.add(u), u(c, ...d))), c;
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), c;
      },
      component(u, d) {
        return d ? (o.components[u] = d, c) : o.components[u];
      },
      directive(u, d) {
        return d ? (o.directives[u] = d, c) : o.directives[u];
      },
      mount(u, d, m) {
        if (!r) {
          const h = c._ceVNode || $(l, i);
          return h.appContext = o, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(h, u, m), r = !0, c._container = u, u.__vue_app__ = c, ti(h.component);
        }
      },
      onUnmount(u) {
        a.push(u);
      },
      unmount() {
        r && (nt(
          a,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, d) {
        return o.provides[u] = d, c;
      },
      runWithContext(u) {
        const d = nn;
        nn = c;
        try {
          return u();
        } finally {
          nn = d;
        }
      }
    };
    return c;
  };
}
let nn = null;
function lt(e, t, n = he) {
  const l = ei(), i = $e(t), o = Dt(t), s = ra(e, i), a = Nr((r, c) => {
    let u, d = he, m;
    return Xr(() => {
      const h = e[i];
      Pe(u, h) && (u = h, c());
    }), {
      get() {
        return r(), n.get ? n.get(u) : u;
      },
      set(h) {
        const p = n.set ? n.set(h) : h;
        if (!Pe(p, u) && !(d !== he && Pe(h, d)))
          return;
        const _ = l.vnode.props, A = !!(_ && // check if parent has passed v-model
        (t in _ || i in _ || o in _) && (`onUpdate:${t}` in _ || `onUpdate:${i}` in _ || `onUpdate:${o}` in _));
        A || (u = h, c()), l.emit(`update:${t}`, p), Pe(h, d) && (Pe(h, p) && !Pe(p, m) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        A && d !== he && !Pe(p, u)) && c(), d = h, m = p;
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
const ra = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${$e(t)}Modifiers`] || e[`${Dt(t)}Modifiers`];
function Mu(e, t, ...n) {
  if (e.isUnmounted) return;
  const l = e.vnode.props || he;
  let i = n;
  const o = t.startsWith("update:"), s = o && ra(l, t.slice(7));
  s && (s.trim && (i = n.map((u) => Ce(u) ? u.trim() : u)), s.number && (i = n.map(Wl)));
  let a, r = l[a = oi(t)] || // also try camelCase event handler (#2249)
  l[a = oi($e(t))];
  !r && o && (r = l[a = oi(Dt(t))]), r && nt(
    r,
    e,
    6,
    i
  );
  const c = l[a + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, nt(
      c,
      e,
      6,
      i
    );
  }
}
const Fu = /* @__PURE__ */ new WeakMap();
function ua(e, t, n = !1) {
  const l = n ? Fu : t.emitsCache, i = l.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, a = !1;
  if (!ue(e)) {
    const r = (c) => {
      const u = ua(c, t, !0);
      u && (a = !0, ke(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
  }
  return !o && !a ? (be(e) && l.set(e, null), null) : (te(o) ? o.forEach((r) => s[r] = null) : ke(s, o), be(e) && l.set(e, s), s);
}
function Ql(e, t) {
  return !e || !Vl(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), _e(e, t[0].toLowerCase() + t.slice(1)) || _e(e, Dt(t)) || _e(e, t));
}
function Io(e) {
  const {
    type: t,
    vnode: n,
    proxy: l,
    withProxy: i,
    propsOptions: [o],
    slots: s,
    attrs: a,
    emit: r,
    render: c,
    renderCache: u,
    props: d,
    data: m,
    setupState: h,
    ctx: p,
    inheritAttrs: _
  } = e, A = Al(e);
  let w, b;
  try {
    if (n.shapeFlag & 4) {
      const v = i || l, y = v;
      w = ft(
        c.call(
          y,
          v,
          u,
          d,
          h,
          m,
          p
        )
      ), b = a;
    } else {
      const v = t;
      w = ft(
        v.length > 1 ? v(
          d,
          { attrs: a, slots: s, emit: r }
        ) : v(
          d,
          null
        )
      ), b = t.props ? a : ku(a);
    }
  } catch (v) {
    At.length = 0, tl(v, e, 1), w = $(Ve);
  }
  let C = w;
  if (b && _ !== !1) {
    const v = Object.keys(b), { shapeFlag: y } = C;
    v.length && y & 7 && (o && v.some($l) && (b = Lu(
      b,
      o
    )), C = Ut(C, b, !1, !0));
  }
  return n.dirs && (C = Ut(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs), n.transition && qn(C, n.transition), w = C, Al(A), w;
}
const ku = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Vl(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Lu = (e, t) => {
  const n = {};
  for (const l in e)
    (!$l(l) || !(l.slice(9) in t)) && (n[l] = e[l]);
  return n;
};
function Iu(e, t, n) {
  const { props: l, children: i, component: o } = e, { props: s, children: a, patchFlag: r } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && r >= 0) {
    if (r & 1024)
      return !0;
    if (r & 16)
      return l ? Do(l, s, c) : !!s;
    if (r & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const m = u[d];
        if (ca(s, l, m) && !Ql(c, m))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : l === s ? !1 : l ? s ? Do(l, s, c) : !0 : !!s;
  return !1;
}
function Do(e, t, n) {
  const l = Object.keys(t);
  if (l.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < l.length; i++) {
    const o = l[i];
    if (ca(t, e, o) && !Ql(n, o))
      return !0;
  }
  return !1;
}
function ca(e, t, n) {
  const l = e[n], i = t[n];
  return n === "style" && be(l) && be(i) ? !Zn(l, i) : l !== i;
}
function Du({ vnode: e, parent: t, suspense: n }, l) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = l, e = i), i === e)
      (e = t.vnode).el = l, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = l);
}
const da = {}, fa = () => Object.create(da), pa = (e) => Object.getPrototypeOf(e) === da;
function Pu(e, t, n, l = !1) {
  const i = {}, o = fa();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ma(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  n ? e.props = l ? i : /* @__PURE__ */ Lr(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function Ru(e, t, n, l) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, a = /* @__PURE__ */ pe(i), [r] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (l || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let m = u[d];
        if (Ql(e.emitsOptions, m))
          continue;
        const h = t[m];
        if (r)
          if (_e(o, m))
            h !== o[m] && (o[m] = h, c = !0);
          else {
            const p = $e(m);
            i[p] = Li(
              r,
              a,
              p,
              h,
              e,
              !1
            );
          }
        else
          h !== o[m] && (o[m] = h, c = !0);
      }
    }
  } else {
    ma(e, t, i, o) && (c = !0);
    let u;
    for (const d in a)
      (!t || // for camelCase
      !_e(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Dt(d)) === d || !_e(t, u))) && (r ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (i[d] = Li(
        r,
        a,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (o !== a)
      for (const d in o)
        (!t || !_e(t, d)) && (delete o[d], c = !0);
  }
  c && St(e.attrs, "set", "");
}
function ma(e, t, n, l) {
  const [i, o] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let r in t) {
      if (Tn(r))
        continue;
      const c = t[r];
      let u;
      i && _e(i, u = $e(r)) ? !o || !o.includes(u) ? n[u] = c : (a || (a = {}))[u] = c : Ql(e.emitsOptions, r) || (!(r in l) || c !== l[r]) && (l[r] = c, s = !0);
    }
  if (o) {
    const r = /* @__PURE__ */ pe(n), c = a || he;
    for (let u = 0; u < o.length; u++) {
      const d = o[u];
      n[d] = Li(
        i,
        r,
        d,
        c[d],
        e,
        !_e(c, d)
      );
    }
  }
  return s;
}
function Li(e, t, n, l, i, o) {
  const s = e[n];
  if (s != null) {
    const a = _e(s, "default");
    if (a && l === void 0) {
      const r = s.default;
      if (s.type !== Function && !s.skipFactory && ue(r)) {
        const { propsDefaults: c } = i;
        if (n in c)
          l = c[n];
        else {
          const u = il(i);
          l = c[n] = r.call(
            null,
            t
          ), u();
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
    ] && (l === "" || l === Dt(n)) && (l = !0));
  }
  return l;
}
const Nu = /* @__PURE__ */ new WeakMap();
function ha(e, t, n = !1) {
  const l = n ? Nu : t.propsCache, i = l.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, a = [];
  let r = !1;
  if (!ue(e)) {
    const u = (d) => {
      r = !0;
      const [m, h] = ha(d, t, !0);
      ke(s, m), h && a.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !r)
    return be(e) && l.set(e, pn), pn;
  if (te(o))
    for (let u = 0; u < o.length; u++) {
      const d = $e(o[u]);
      Po(d) && (s[d] = he);
    }
  else if (o)
    for (const u in o) {
      const d = $e(u);
      if (Po(d)) {
        const m = o[u], h = s[d] = te(m) || ue(m) ? { type: m } : ke({}, m), p = h.type;
        let _ = !1, A = !0;
        if (te(p))
          for (let w = 0; w < p.length; ++w) {
            const b = p[w], C = ue(b) && b.name;
            if (C === "Boolean") {
              _ = !0;
              break;
            } else C === "String" && (A = !1);
          }
        else
          _ = ue(p) && p.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = _, h[
          1
          /* shouldCastTrue */
        ] = A, (_ || _e(h, "default")) && a.push(d);
      }
    }
  const c = [s, a];
  return be(e) && l.set(e, c), c;
}
function Po(e) {
  return e[0] !== "$" && !Tn(e);
}
const Zi = (e) => e === "_" || e === "_ctx" || e === "$stable", eo = (e) => te(e) ? e.map(ft) : [ft(e)], Tu = (e, t, n) => {
  if (t._n)
    return t;
  const l = Ht((...i) => eo(t(...i)), n);
  return l._c = !1, l;
}, ga = (e, t, n) => {
  const l = e._ctx;
  for (const i in e) {
    if (Zi(i)) continue;
    const o = e[i];
    if (ue(o))
      t[i] = Tu(i, o, l);
    else if (o != null) {
      const s = eo(o);
      t[i] = () => s;
    }
  }
}, _a = (e, t) => {
  const n = eo(t);
  e.slots.default = () => n;
}, ba = (e, t, n) => {
  for (const l in t)
    (n || !Zi(l)) && (e[l] = t[l]);
}, Eu = (e, t, n) => {
  const l = e.slots = fa();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (ba(l, t, n), n && ys(l, "_", i, !0)) : ga(t, l);
  } else t && _a(e, t);
}, Ou = (e, t, n) => {
  const { vnode: l, slots: i } = e;
  let o = !0, s = he;
  if (l.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = !1 : ba(i, t, n) : (o = !t.$stable, ga(t, i)), s = t;
  } else t && (_a(e, t), s = { default: 1 });
  if (o)
    for (const a in i)
      !Zi(a) && s[a] == null && delete i[a];
}, He = Uu;
function Vu(e) {
  return $u(e);
}
function $u(e, t) {
  const n = jl();
  n.__VUE__ = !0;
  const {
    insert: l,
    remove: i,
    patchProp: o,
    createElement: s,
    createText: a,
    createComment: r,
    setText: c,
    setElementText: u,
    parentNode: d,
    nextSibling: m,
    setScopeId: h = mt,
    insertStaticContent: p
  } = e, _ = (g, x, N, U = null, H = null, V = null, Y = void 0, q = null, K = !!x.dynamicChildren) => {
    if (g === x)
      return;
    g && !Jt(g, x) && (U = ol(g), Ee(g, H, V, !0), g = null), x.patchFlag === -2 && (K = !1, x.dynamicChildren = null);
    const { type: B, ref: ae, shapeFlag: Q } = x;
    switch (B) {
      case Zl:
        A(g, x, N, U);
        break;
      case Ve:
        w(g, x, N, U);
        break;
      case pi:
        g == null && b(x, N, U, Y);
        break;
      case ce:
        L(
          g,
          x,
          N,
          U,
          H,
          V,
          Y,
          q,
          K
        );
        break;
      default:
        Q & 1 ? y(
          g,
          x,
          N,
          U,
          H,
          V,
          Y,
          q,
          K
        ) : Q & 6 ? I(
          g,
          x,
          N,
          U,
          H,
          V,
          Y,
          q,
          K
        ) : (Q & 64 || Q & 128) && B.process(
          g,
          x,
          N,
          U,
          H,
          V,
          Y,
          q,
          K,
          Cn
        );
    }
    ae != null && H ? $n(ae, g && g.ref, V, x || g, !x) : ae == null && g && g.ref != null && $n(g.ref, null, V, g, !0);
  }, A = (g, x, N, U) => {
    if (g == null)
      l(
        x.el = a(x.children),
        N,
        U
      );
    else {
      const H = x.el = g.el;
      x.children !== g.children && c(H, x.children);
    }
  }, w = (g, x, N, U) => {
    g == null ? l(
      x.el = r(x.children || ""),
      N,
      U
    ) : x.el = g.el;
  }, b = (g, x, N, U) => {
    [g.el, g.anchor] = p(
      g.children,
      x,
      N,
      U,
      g.el,
      g.anchor
    );
  }, C = ({ el: g, anchor: x }, N, U) => {
    let H;
    for (; g && g !== x; )
      H = m(g), l(g, N, U), g = H;
    l(x, N, U);
  }, v = ({ el: g, anchor: x }) => {
    let N;
    for (; g && g !== x; )
      N = m(g), i(g), g = N;
    i(x);
  }, y = (g, x, N, U, H, V, Y, q, K) => {
    if (x.type === "svg" ? Y = "svg" : x.type === "math" && (Y = "mathml"), g == null)
      S(
        x,
        N,
        U,
        H,
        V,
        Y,
        q,
        K
      );
    else {
      const B = g.el && g.el._isVueCE ? g.el : null;
      try {
        B && B._beginPatch(), E(
          g,
          x,
          H,
          V,
          Y,
          q,
          K
        );
      } finally {
        B && B._endPatch();
      }
    }
  }, S = (g, x, N, U, H, V, Y, q) => {
    let K, B;
    const { props: ae, shapeFlag: Q, transition: ie, dirs: re } = g;
    if (K = g.el = s(
      g.type,
      V,
      ae && ae.is,
      ae
    ), Q & 8 ? u(K, g.children) : Q & 16 && G(
      g.children,
      K,
      null,
      U,
      H,
      fi(g, V),
      Y,
      q
    ), re && jt(g, null, U, "created"), T(K, g, g.scopeId, Y, U), ae) {
      for (const we in ae)
        we !== "value" && !Tn(we) && o(K, we, null, ae[we], V, U);
      "value" in ae && o(K, "value", null, ae.value, V), (B = ae.onVnodeBeforeMount) && ut(B, U, g);
    }
    re && jt(g, null, U, "beforeMount");
    const fe = Bu(H, ie);
    fe && ie.beforeEnter(K), l(K, x, N), ((B = ae && ae.onVnodeMounted) || fe || re) && He(() => {
      try {
        B && ut(B, U, g), fe && ie.enter(K), re && jt(g, null, U, "mounted");
      } finally {
      }
    }, H);
  }, T = (g, x, N, U, H) => {
    if (N && h(g, N), U)
      for (let V = 0; V < U.length; V++)
        h(g, U[V]);
    if (H) {
      let V = H.subTree;
      if (x === V || wa(V.type) && (V.ssContent === x || V.ssFallback === x)) {
        const Y = H.vnode;
        T(
          g,
          Y,
          Y.scopeId,
          Y.slotScopeIds,
          H.parent
        );
      }
    }
  }, G = (g, x, N, U, H, V, Y, q, K = 0) => {
    for (let B = K; B < g.length; B++) {
      const ae = g[B] = q ? yt(g[B]) : ft(g[B]);
      _(
        null,
        ae,
        x,
        N,
        U,
        H,
        V,
        Y,
        q
      );
    }
  }, E = (g, x, N, U, H, V, Y) => {
    const q = x.el = g.el;
    let { patchFlag: K, dynamicChildren: B, dirs: ae } = x;
    K |= g.patchFlag & 16;
    const Q = g.props || he, ie = x.props || he;
    let re;
    if (N && Kt(N, !1), (re = ie.onVnodeBeforeUpdate) && ut(re, N, x, g), ae && jt(x, g, N, "beforeUpdate"), N && Kt(N, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    B && (!g.dynamicChildren || g.dynamicChildren.length !== B.length) && (K = 0, Y = !1, B = null), (Q.innerHTML && ie.innerHTML == null || Q.textContent && ie.textContent == null) && u(q, ""), B ? W(
      g.dynamicChildren,
      B,
      q,
      N,
      U,
      fi(x, H),
      V
    ) : Y || M(
      g,
      x,
      q,
      null,
      N,
      U,
      fi(x, H),
      V,
      !1
    ), K > 0) {
      if (K & 16)
        J(q, Q, ie, N, H);
      else if (K & 2 && Q.class !== ie.class && o(q, "class", null, ie.class, H), K & 4 && o(q, "style", Q.style, ie.style, H), K & 8) {
        const fe = x.dynamicProps;
        for (let we = 0; we < fe.length; we++) {
          const ve = fe[we], Fe = Q[ve], De = ie[ve];
          (De !== Fe || ve === "value") && o(q, ve, Fe, De, H, N);
        }
      }
      K & 1 && g.children !== x.children && u(q, x.children);
    } else !Y && B == null && J(q, Q, ie, N, H);
    ((re = ie.onVnodeUpdated) || ae) && He(() => {
      re && ut(re, N, x, g), ae && jt(x, g, N, "updated");
    }, U);
  }, W = (g, x, N, U, H, V, Y) => {
    for (let q = 0; q < x.length; q++) {
      const K = g[q], B = x[q], ae = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        K.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (K.type === ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Jt(K, B) || // - In the case of a component, it could contain anything.
        K.shapeFlag & 198) ? d(K.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          N
        )
      );
      _(
        K,
        B,
        ae,
        null,
        U,
        H,
        V,
        Y,
        !0
      );
    }
  }, J = (g, x, N, U, H) => {
    if (x !== N) {
      if (x !== he)
        for (const V in x)
          !Tn(V) && !(V in N) && o(
            g,
            V,
            x[V],
            null,
            H,
            U
          );
      for (const V in N) {
        if (Tn(V)) continue;
        const Y = N[V], q = x[V];
        Y !== q && V !== "value" && o(g, V, q, Y, H, U);
      }
      "value" in N && o(g, "value", x.value, N.value, H);
    }
  }, L = (g, x, N, U, H, V, Y, q, K) => {
    const B = x.el = g ? g.el : a(""), ae = x.anchor = g ? g.anchor : a("");
    let { patchFlag: Q, dynamicChildren: ie, slotScopeIds: re } = x;
    re && (q = q ? q.concat(re) : re), g == null ? (l(B, N, U), l(ae, N, U), G(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      x.children || [],
      N,
      ae,
      H,
      V,
      Y,
      q,
      K
    )) : Q > 0 && Q & 64 && ie && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren && g.dynamicChildren.length === ie.length ? (W(
      g.dynamicChildren,
      ie,
      N,
      H,
      V,
      Y,
      q
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (x.key != null || H && x === H.subTree) && to(
      g,
      x,
      !0
      /* shallow */
    )) : M(
      g,
      x,
      N,
      ae,
      H,
      V,
      Y,
      q,
      K
    );
  }, I = (g, x, N, U, H, V, Y, q, K) => {
    x.slotScopeIds = q, g == null ? x.shapeFlag & 512 ? H.ctx.activate(
      x,
      N,
      U,
      Y,
      K
    ) : O(
      x,
      N,
      U,
      H,
      V,
      Y,
      K
    ) : ne(g, x, K);
  }, O = (g, x, N, U, H, V, Y) => {
    const q = g.component = qu(
      g,
      U,
      H
    );
    if (nl(g) && (q.ctx.renderer = Cn), Xu(q, !1, Y), q.asyncDep) {
      if (H && H.registerDep(q, R, Y), !g.el) {
        const K = q.subTree = $(Ve);
        w(null, K, x, N), g.placeholder = K.el;
      }
    } else
      R(
        q,
        g,
        x,
        N,
        H,
        V,
        Y
      );
  }, ne = (g, x, N) => {
    const U = x.component = g.component;
    if (Iu(g, x, N))
      if (U.asyncDep && !U.asyncResolved) {
        k(U, x, N);
        return;
      } else
        U.next = x, U.update();
    else
      x.el = g.el, U.vnode = x;
  }, R = (g, x, N, U, H, V, Y) => {
    const q = () => {
      if (g.isMounted) {
        let { next: Q, bu: ie, u: re, parent: fe, vnode: we } = g;
        {
          const at = va(g);
          if (at) {
            Q && (Q.el = we.el, k(g, Q, Y)), at.asyncDep.then(() => {
              He(() => {
                g.isUnmounted || B();
              }, H);
            });
            return;
          }
        }
        let ve = Q, Fe;
        Kt(g, !1), Q ? (Q.el = we.el, k(g, Q, Y)) : Q = we, ie && hl(ie), (Fe = Q.props && Q.props.onVnodeBeforeUpdate) && ut(Fe, fe, Q, we), Kt(g, !0);
        const De = Io(g), st = g.subTree;
        g.subTree = De, _(
          st,
          De,
          // parent may have changed if it's in a teleport
          d(st.el),
          // anchor may have changed if it's in a fragment
          ol(st),
          g,
          H,
          V
        ), Q.el = De.el, ve === null && Du(g, De.el), re && He(re, H), (Fe = Q.props && Q.props.onVnodeUpdated) && He(
          () => ut(Fe, fe, Q, we),
          H
        );
      } else {
        let Q;
        const { el: ie, props: re } = x, { bm: fe, m: we, parent: ve, root: Fe, type: De } = g, st = gn(x);
        Kt(g, !1), fe && hl(fe), !st && (Q = re && re.onVnodeBeforeMount) && ut(Q, ve, x), Kt(g, !0);
        {
          Fe.ce && Fe.ce._hasShadowRoot() && Fe.ce._injectChildStyle(
            De,
            g.parent ? g.parent.type : void 0
          );
          const at = g.subTree = Io(g);
          _(
            null,
            at,
            N,
            U,
            g,
            H,
            V
          ), x.el = at.el;
        }
        if (we && He(we, H), !st && (Q = re && re.onVnodeMounted)) {
          const at = x;
          He(
            () => ut(Q, ve, at),
            H
          );
        }
        (x.shapeFlag & 256 || ve && gn(ve.vnode) && ve.vnode.shapeFlag & 256) && g.a && He(g.a, H), g.isMounted = !0, x = N = U = null;
      }
    };
    g.scope.on();
    const K = g.effect = new Fs(q);
    g.scope.off();
    const B = g.update = K.run.bind(K), ae = g.job = K.runIfDirty.bind(K);
    ae.i = g, ae.id = g.uid, K.scheduler = () => Yi(ae), Kt(g, !0), B();
  }, k = (g, x, N) => {
    x.component = g;
    const U = g.vnode.props;
    g.vnode = x, g.next = null, Ru(g, x.props, U, N), Ou(g, x.children, N), Mt(), vo(g), Ft();
  }, M = (g, x, N, U, H, V, Y, q, K = !1) => {
    const B = g && g.children, ae = g ? g.shapeFlag : 0, Q = x.children, { patchFlag: ie, shapeFlag: re } = x;
    if (ie > 0) {
      if (ie & 128) {
        Z(
          B,
          Q,
          N,
          U,
          H,
          V,
          Y,
          q,
          K
        );
        return;
      } else if (ie & 256) {
        j(
          B,
          Q,
          N,
          U,
          H,
          V,
          Y,
          q,
          K
        );
        return;
      }
    }
    re & 8 ? (ae & 16 && xn(B, H, V), Q !== B && u(N, Q)) : ae & 16 ? re & 16 ? Z(
      B,
      Q,
      N,
      U,
      H,
      V,
      Y,
      q,
      K
    ) : xn(B, H, V, !0) : (ae & 8 && u(N, ""), re & 16 && G(
      Q,
      N,
      U,
      H,
      V,
      Y,
      q,
      K
    ));
  }, j = (g, x, N, U, H, V, Y, q, K) => {
    g = g || pn, x = x || pn;
    const B = g.length, ae = x.length, Q = Math.min(B, ae);
    let ie;
    for (ie = 0; ie < Q; ie++) {
      const re = x[ie] = K ? yt(x[ie]) : ft(x[ie]);
      _(
        g[ie],
        re,
        N,
        null,
        H,
        V,
        Y,
        q,
        K
      );
    }
    B > ae ? xn(
      g,
      H,
      V,
      !0,
      !1,
      Q
    ) : G(
      x,
      N,
      U,
      H,
      V,
      Y,
      q,
      K,
      Q
    );
  }, Z = (g, x, N, U, H, V, Y, q, K) => {
    let B = 0;
    const ae = x.length;
    let Q = g.length - 1, ie = ae - 1;
    for (; B <= Q && B <= ie; ) {
      const re = g[B], fe = x[B] = K ? yt(x[B]) : ft(x[B]);
      if (Jt(re, fe))
        _(
          re,
          fe,
          N,
          null,
          H,
          V,
          Y,
          q,
          K
        );
      else
        break;
      B++;
    }
    for (; B <= Q && B <= ie; ) {
      const re = g[Q], fe = x[ie] = K ? yt(x[ie]) : ft(x[ie]);
      if (Jt(re, fe))
        _(
          re,
          fe,
          N,
          null,
          H,
          V,
          Y,
          q,
          K
        );
      else
        break;
      Q--, ie--;
    }
    if (B > Q) {
      if (B <= ie) {
        const re = ie + 1, fe = re < ae ? x[re].el : U;
        for (; B <= ie; )
          _(
            null,
            x[B] = K ? yt(x[B]) : ft(x[B]),
            N,
            fe,
            H,
            V,
            Y,
            q,
            K
          ), B++;
      }
    } else if (B > ie)
      for (; B <= Q; )
        Ee(g[B], H, V, !0), B++;
    else {
      const re = B, fe = B, we = /* @__PURE__ */ new Map();
      for (B = fe; B <= ie; B++) {
        const je = x[B] = K ? yt(x[B]) : ft(x[B]);
        je.key != null && we.set(je.key, B);
      }
      let ve, Fe = 0;
      const De = ie - fe + 1;
      let st = !1, at = 0;
      const An = new Array(De);
      for (B = 0; B < De; B++) An[B] = 0;
      for (B = re; B <= Q; B++) {
        const je = g[B];
        if (Fe >= De) {
          Ee(je, H, V, !0);
          continue;
        }
        let rt;
        if (je.key != null)
          rt = we.get(je.key);
        else
          for (ve = fe; ve <= ie; ve++)
            if (An[ve - fe] === 0 && Jt(je, x[ve])) {
              rt = ve;
              break;
            }
        rt === void 0 ? Ee(je, H, V, !0) : (An[rt - fe] = B + 1, rt >= at ? at = rt : st = !0, _(
          je,
          x[rt],
          N,
          null,
          H,
          V,
          Y,
          q,
          K
        ), Fe++);
      }
      const fo = st ? Hu(An) : pn;
      for (ve = fo.length - 1, B = De - 1; B >= 0; B--) {
        const je = fe + B, rt = x[je], po = x[je + 1], mo = je + 1 < ae ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          po.el || ya(po)
        ) : U;
        An[B] === 0 ? _(
          null,
          rt,
          N,
          mo,
          H,
          V,
          Y,
          q,
          K
        ) : st && (ve < 0 || B !== fo[ve] ? le(rt, N, mo, 2) : ve--);
      }
    }
  }, le = (g, x, N, U, H = null) => {
    const { el: V, type: Y, transition: q, children: K, shapeFlag: B } = g;
    if (B & 6) {
      le(g.component.subTree, x, N, U);
      return;
    }
    if (B & 128) {
      g.suspense.move(x, N, U);
      return;
    }
    if (B & 64) {
      Y.move(g, x, N, Cn);
      return;
    }
    if (Y === ce) {
      l(V, x, N);
      for (let Q = 0; Q < K.length; Q++)
        le(K[Q], x, N, U);
      l(g.anchor, x, N);
      return;
    }
    if (Y === pi) {
      C(g, x, N);
      return;
    }
    if (U !== 2 && B & 1 && q)
      if (U === 0)
        q.persisted && !V[Ze] ? l(V, x, N) : (q.beforeEnter(V), l(V, x, N), He(() => q.enter(V), H));
      else {
        const { leave: Q, delayLeave: ie, afterLeave: re } = q, fe = () => {
          g.ctx.isUnmounted ? i(V) : l(V, x, N);
        }, we = () => {
          const ve = V._isLeaving || !!V[Ze];
          V._isLeaving && V[Ze](
            !0
            /* cancelled */
          ), q.persisted && !ve ? fe() : Q(V, () => {
            fe(), re && re();
          });
        };
        ie ? ie(V, fe, we) : we();
      }
    else
      l(V, x, N);
  }, Ee = (g, x, N, U = !1, H = !1) => {
    const {
      type: V,
      props: Y,
      ref: q,
      children: K,
      dynamicChildren: B,
      shapeFlag: ae,
      patchFlag: Q,
      dirs: ie,
      cacheIndex: re,
      memo: fe
    } = g;
    if (Q === -2 && (H = !1), q != null && (Mt(), $n(q, null, N, g, !0), Ft()), re != null && (x.renderCache[re] = void 0), ae & 256) {
      x.ctx.deactivate(g);
      return;
    }
    const we = ae & 1 && ie, ve = !gn(g);
    let Fe;
    if (ve && (Fe = Y && Y.onVnodeBeforeUnmount) && ut(Fe, x, g), ae & 6)
      Ya(g.component, N, U);
    else {
      if (ae & 128) {
        g.suspense.unmount(N, U);
        return;
      }
      we && jt(g, null, x, "beforeUnmount"), ae & 64 ? g.type.remove(
        g,
        x,
        N,
        Cn,
        U
      ) : B && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !B.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (V !== ce || Q > 0 && Q & 64) ? xn(
        B,
        x,
        N,
        !1,
        !0
      ) : (V === ce && Q & 384 || !H && ae & 16) && xn(K, x, N), U && uo(g);
    }
    const De = fe != null && re == null;
    (ve && (Fe = Y && Y.onVnodeUnmounted) || we || De) && He(() => {
      Fe && ut(Fe, x, g), we && jt(g, null, x, "unmounted"), De && (g.el = null);
    }, N);
  }, uo = (g) => {
    const { type: x, el: N, anchor: U, transition: H } = g;
    if (x === ce) {
      Xa(N, U);
      return;
    }
    if (x === pi) {
      v(g);
      return;
    }
    const V = () => {
      i(N), H && !H.persisted && H.afterLeave && H.afterLeave();
    };
    if (g.shapeFlag & 1 && H && !H.persisted) {
      const { leave: Y, delayLeave: q } = H, K = () => Y(N, V);
      q ? q(g.el, V, K) : K();
    } else
      V();
  }, Xa = (g, x) => {
    let N;
    for (; g !== x; )
      N = m(g), i(g), g = N;
    i(x);
  }, Ya = (g, x, N) => {
    const { bum: U, scope: H, job: V, subTree: Y, um: q, m: K, a: B } = g;
    Ro(K), Ro(B), U && hl(U), H.stop(), V && (V.flags |= 8, Ee(Y, g, x, N)), q && He(q, x), He(() => {
      g.isUnmounted = !0;
    }, x);
  }, xn = (g, x, N, U = !1, H = !1, V = 0) => {
    for (let Y = V; Y < g.length; Y++)
      Ee(g[Y], x, N, U, H);
  }, ol = (g) => {
    if (g.shapeFlag & 6)
      return ol(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const x = m(g.anchor || g.el), N = x && x[qs];
    return N ? m(N) : x;
  };
  let ii = !1;
  const co = (g, x, N) => {
    let U;
    g == null ? x._vnode && (Ee(x._vnode, null, null, !0), U = x._vnode.component) : _(
      x._vnode || null,
      g,
      x,
      null,
      null,
      null,
      N
    ), x._vnode = g, ii || (ii = !0, vo(U), Ws(), ii = !1);
  }, Cn = {
    p: _,
    um: Ee,
    m: le,
    r: uo,
    mt: O,
    mc: G,
    pc: M,
    pbc: W,
    n: ol,
    o: e
  };
  return {
    render: co,
    hydrate: void 0,
    createApp: Au(co)
  };
}
function fi({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Kt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Bu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function to(e, t, n = !1) {
  const l = e.children, i = t.children;
  if (te(l) && te(i))
    for (let o = 0; o < l.length; o++) {
      const s = l[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = yt(i[o]), a.el = s.el), !n && a.patchFlag !== -2 && to(s, a)), a.type === Zl && (a.patchFlag === -1 && (a = i[o] = yt(a)), a.el = s.el), a.type === Ve && !a.el && (a.el = s.el);
    }
}
function Hu(e) {
  const t = e.slice(), n = [0];
  let l, i, o, s, a;
  const r = e.length;
  for (l = 0; l < r; l++) {
    const c = e[l];
    if (c !== 0) {
      if (i = n[n.length - 1], e[i] < c) {
        t[l] = i, n.push(l);
        continue;
      }
      for (o = 0, s = n.length - 1; o < s; )
        a = o + s >> 1, e[n[a]] < c ? o = a + 1 : s = a;
      c < e[n[o]] && (o > 0 && (t[l] = n[o - 1]), n[o] = l);
    }
  }
  for (o = n.length, s = n[o - 1]; o-- > 0; )
    n[o] = s, s = t[s];
  return n;
}
function va(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : va(t);
}
function Ro(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ya(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ya(t.subTree) : null;
}
const wa = (e) => e.__isSuspense;
function Uu(e, t) {
  t && t.pendingBranch ? te(e) ? t.effects.push(...e) : t.effects.push(e) : Wr(e);
}
const ce = /* @__PURE__ */ Symbol.for("v-fgt"), Zl = /* @__PURE__ */ Symbol.for("v-txt"), Ve = /* @__PURE__ */ Symbol.for("v-cmt"), pi = /* @__PURE__ */ Symbol.for("v-stc"), At = [];
let Ke = null;
function F(e = !1) {
  At.push(Ke = e ? null : []);
}
function no() {
  At.pop(), Ke = At[At.length - 1] || null;
}
let Xn = 1;
function Ll(e, t = !1) {
  Xn += e, e < 0 && Ke && t && (Ke.hasOnce = !0);
}
function Sa(e) {
  return e.dynamicChildren = Xn > 0 ? Ke || pn : null, no(), Xn > 0 && Ke && Ke.push(e), e;
}
function P(e, t, n, l, i, o) {
  return Sa(
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
function Ae(e, t, n, l, i) {
  return Sa(
    $(
      e,
      t,
      n,
      l,
      i,
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
const xa = ({ key: e }) => e ?? null, gl = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ce(e) || /* @__PURE__ */ de(e) || ue(e) ? { i: Ne, r: e, k: t, f: !!n } : e : null);
function D(e, t = null, n = null, l = 0, i = null, o = e === ce ? 0 : 1, s = !1, a = !1) {
  const r = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && xa(t),
    ref: t && gl(t),
    scopeId: Ks,
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
  return a ? (Dl(r, n), o & 128 && e.normalize(r)) : n && (r.shapeFlag |= Ce(n) ? 8 : 16), Xn > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Ke && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (r.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  r.patchFlag !== 32 && Ke.push(r), r;
}
const $ = Gu;
function Gu(e, t = null, n = null, l = 0, i = null, o = !1) {
  if ((!e || e === la) && (e = Ve), Yn(e)) {
    const a = Ut(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Dl(a, n), Xn > 0 && !o && Ke && (a.shapeFlag & 6 ? Ke[Ke.indexOf(e)] = a : Ke.push(a)), a.patchFlag = -2, a;
  }
  if (ec(e) && (e = e.__vccOpts), t) {
    t = Wu(t);
    let { class: a, style: r } = t;
    a && !Ce(a) && (t.class = me(a)), be(r) && (/* @__PURE__ */ ql(r) && !te(r) && (r = ke({}, r)), t.style = et(r));
  }
  const s = Ce(e) ? 1 : wa(e) ? 128 : Xs(e) ? 64 : be(e) ? 4 : ue(e) ? 2 : 0;
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
function Wu(e) {
  return e ? /* @__PURE__ */ ql(e) || pa(e) ? ke({}, e) : e : null;
}
function Ut(e, t, n = !1, l = !1) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: r } = e, c = t ? ju(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && xa(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? te(o) ? o.concat(gl(t)) : [o, gl(t)] : gl(t)
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
    patchFlag: t && e.type !== ce ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && Ut(e.ssContent),
    ssFallback: e.ssFallback && Ut(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return r && l && qn(
    u,
    r.clone(u)
  ), u;
}
function Il(e = " ", t = 0) {
  return $(Zl, null, e, t);
}
function ee(e = "", t = !1) {
  return t ? (F(), Ae(Ve, null, e)) : $(Ve, null, e);
}
function ft(e) {
  return e == null || typeof e == "boolean" ? $(Ve) : te(e) ? $(
    ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Yn(e) ? yt(e) : $(Zl, null, String(e));
}
function yt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ut(e);
}
function Dl(e, t) {
  let n = 0;
  const { shapeFlag: l } = e;
  if (t == null)
    t = null;
  else if (te(t))
    n = 16;
  else if (typeof t == "object")
    if (l & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Dl(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !pa(t) ? t._ctx = Ne : i === 3 && Ne && (Ne.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ue(t)) {
    if (l & 65) {
      Dl(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ne }, n = 32;
  } else
    t = String(t), l & 64 ? (n = 16, t = [Il(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function ju(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const l = e[n];
    for (const i in l)
      if (i === "class")
        t.class !== l.class && (t.class = me([t.class, l.class]));
      else if (i === "style")
        t.style = et([t.style, l.style]);
      else if (Vl(i)) {
        const o = t[i], s = l[i];
        s && o !== s && !(te(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !$l(i) && (t[i] = s);
      } else i !== "" && (t[i] = l[i]);
  }
  return t;
}
function ut(e, t, n, l = null) {
  nt(e, t, 7, [
    n,
    l
  ]);
}
const Ku = aa();
let zu = 0;
function qu(e, t, n) {
  const l = e.type, i = (t ? t.appContext : e.appContext) || Ku, o = {
    uid: zu++,
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
    scope: new Cs(
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
    propsOptions: ha(l, i),
    emitsOptions: ua(l, i),
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Mu.bind(null, o), e.ce && e.ce(o), o;
}
let Re = null;
const ei = () => Re || Ne;
let Pl, Ii;
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
  ), Ii = t(
    "__VUE_SSR_SETTERS__",
    (n) => wn = n
  );
}
const il = (e) => {
  const t = Re;
  return Pl(e), e.scope.on(), () => {
    e.scope.off(), Pl(t);
  };
}, No = () => {
  Re && Re.scope.off(), Pl(null);
};
function Ca(e) {
  return e.vnode.shapeFlag & 4;
}
let wn = !1;
function Xu(e, t = !1, n = !1) {
  t && Ii(t);
  const { props: l, children: i } = e.vnode, o = Ca(e);
  Pu(e, l, o, t), Eu(e, i, n || t);
  const s = o ? Yu(e, t) : void 0;
  return t && Ii(!1), s;
}
function Yu(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, bu);
  const { setup: l } = n;
  if (l) {
    Mt();
    const i = e.setupContext = l.length > 1 ? Qu(e) : null, o = il(e), s = el(
      l,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = _s(s);
    if (Ft(), o(), (a || e.sp) && !gn(e) && Qi(e), a) {
      if (s.then(No, No), t)
        return s.then((r) => {
          To(e, r);
        }).catch((r) => {
          tl(r, e, 0);
        });
      e.asyncDep = s;
    } else
      To(e, s);
  } else
    Aa(e);
}
function To(e, t, n) {
  ue(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : be(t) && (e.setupState = Hs(t)), Aa(e);
}
function Aa(e, t, n) {
  const l = e.type;
  e.render || (e.render = l.render || mt);
  {
    const i = il(e);
    Mt();
    try {
      vu(e);
    } finally {
      Ft(), i();
    }
  }
}
const Ju = {
  get(e, t) {
    return Oe(e, "get", ""), e[t];
  }
};
function Qu(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ju),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ti(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Hs(Xi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Bn)
        return Bn[n](e);
    },
    has(t, n) {
      return n in t || n in Bn;
    }
  })) : e.proxy;
}
function Zu(e, t = !0) {
  return ue(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ec(e) {
  return ue(e) && "__vccOpts" in e;
}
const X = (e, t) => /* @__PURE__ */ $r(e, t, wn);
function Ma(e, t, n) {
  try {
    Ll(-1);
    const l = arguments.length;
    return l === 2 ? be(t) && !te(t) ? Yn(t) ? $(e, null, [t]) : $(e, t) : $(e, null, t) : (l > 3 ? n = Array.prototype.slice.call(arguments, 2) : l === 3 && Yn(n) && (n = [n]), $(e, t, n));
  } finally {
    Ll(1);
  }
}
const tc = "3.5.40";
/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Di;
const Eo = typeof window < "u" && window.trustedTypes;
if (Eo)
  try {
    Di = /* @__PURE__ */ Eo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Fa = Di ? (e) => Di.createHTML(e) : (e) => e, nc = "http://www.w3.org/2000/svg", lc = "http://www.w3.org/1998/Math/MathML", bt = typeof document < "u" ? document : null, Oo = bt && /* @__PURE__ */ bt.createElement("template"), ic = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, l) => {
    const i = t === "svg" ? bt.createElementNS(nc, e) : t === "mathml" ? bt.createElementNS(lc, e) : n ? bt.createElement(e, { is: n }) : bt.createElement(e);
    return e === "select" && l && l.multiple != null && i.setAttribute("multiple", l.multiple), i;
  },
  createText: (e) => bt.createTextNode(e),
  createComment: (e) => bt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => bt.querySelector(e),
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
      Oo.innerHTML = Fa(
        l === "svg" ? `<svg>${e}</svg>` : l === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Oo.content;
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
}, Ot = "transition", kn = "animation", Jn = /* @__PURE__ */ Symbol("_vtc"), ka = {
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
}, oc = /* @__PURE__ */ ke(
  {},
  Js,
  ka
), sc = (e) => (e.displayName = "Transition", e.props = oc, e), ac = /* @__PURE__ */ sc(
  (e, { slots: t }) => Ma(nu, rc(e), t)
), zt = (e, t = []) => {
  te(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Vo = (e) => e ? te(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function rc(e) {
  const t = {};
  for (const L in e)
    L in ka || (t[L] = e[L]);
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
    appearActiveClass: c = s,
    appearToClass: u = a,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: m = `${n}-leave-active`,
    leaveToClass: h = `${n}-leave-to`
  } = e, p = uc(i), _ = p && p[0], A = p && p[1], {
    onBeforeEnter: w,
    onEnter: b,
    onEnterCancelled: C,
    onLeave: v,
    onLeaveCancelled: y,
    onBeforeAppear: S = w,
    onAppear: T = b,
    onAppearCancelled: G = C
  } = t, E = (L, I, O, ne) => {
    L._enterCancelled = ne, qt(L, I ? u : a), qt(L, I ? c : s), O && O();
  }, W = (L, I) => {
    L._isLeaving = !1, qt(L, d), qt(L, h), qt(L, m), I && I();
  }, J = (L) => (I, O) => {
    const ne = L ? T : b, R = () => E(I, L, O);
    zt(ne, [I, R]), $o(() => {
      qt(I, L ? r : o), _t(I, L ? u : a), Vo(ne) || Bo(I, l, _, R);
    });
  };
  return ke(t, {
    onBeforeEnter(L) {
      zt(w, [L]), _t(L, o), _t(L, s);
    },
    onBeforeAppear(L) {
      zt(S, [L]), _t(L, r), _t(L, c);
    },
    onEnter: J(!1),
    onAppear: J(!0),
    onLeave(L, I) {
      L._isLeaving = !0;
      const O = () => W(L, I);
      _t(L, d), L._enterCancelled ? (_t(L, m), Go(L)) : (Go(L), _t(L, m)), $o(() => {
        L._isLeaving && (qt(L, d), _t(L, h), Vo(v) || Bo(L, l, A, O));
      }), zt(v, [L, O]);
    },
    onEnterCancelled(L) {
      E(L, !1, void 0, !0), zt(C, [L]);
    },
    onAppearCancelled(L) {
      E(L, !0, void 0, !0), zt(G, [L]);
    },
    onLeaveCancelled(L) {
      W(L), zt(y, [L]);
    }
  });
}
function uc(e) {
  if (e == null)
    return null;
  if (be(e))
    return [mi(e.enter), mi(e.leave)];
  {
    const t = mi(e);
    return [t, t];
  }
}
function mi(e) {
  return tr(e);
}
function _t(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Jn] || (e[Jn] = /* @__PURE__ */ new Set())).add(t);
}
function qt(e, t) {
  t.split(/\s+/).forEach((l) => l && e.classList.remove(l));
  const n = e[Jn];
  n && (n.delete(t), n.size || (e[Jn] = void 0));
}
function $o(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let cc = 0;
function Bo(e, t, n, l) {
  const i = e._endId = ++cc, o = () => {
    i === e._endId && l();
  };
  if (n != null)
    return setTimeout(o, n);
  const { type: s, timeout: a, propCount: r } = dc(e, t);
  if (!s)
    return l();
  const c = s + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(c, m), o();
  }, m = (h) => {
    h.target === e && ++u >= r && d();
  };
  setTimeout(() => {
    u < r && d();
  }, a + 1), e.addEventListener(c, m);
}
function dc(e, t) {
  const n = window.getComputedStyle(e), l = (p) => (n[p] || "").split(", "), i = l(`${Ot}Delay`), o = l(`${Ot}Duration`), s = Ho(i, o), a = l(`${kn}Delay`), r = l(`${kn}Duration`), c = Ho(a, r);
  let u = null, d = 0, m = 0;
  t === Ot ? s > 0 && (u = Ot, d = s, m = o.length) : t === kn ? c > 0 && (u = kn, d = c, m = r.length) : (d = Math.max(s, c), u = d > 0 ? s > c ? Ot : kn : null, m = u ? u === Ot ? o.length : r.length : 0);
  const h = u === Ot && /\b(?:transform|all)(?:,|$)/.test(
    l(`${Ot}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: m,
    hasTransform: h
  };
}
function Ho(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, l) => Uo(n) + Uo(e[l])));
}
function Uo(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Go(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function fc(e, t, n) {
  const l = e[Jn];
  l && (t = (t ? [t, ...l] : [...l]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Rl = /* @__PURE__ */ Symbol("_vod"), La = /* @__PURE__ */ Symbol("_vsh"), pc = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Rl] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ln(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: l }) {
    !t != !n && (l ? t ? (l.beforeEnter(e), Ln(e, !0), l.enter(e)) : l.leave(e, () => {
      Ln(e, !1);
    }) : Ln(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ln(e, t);
  }
};
function Ln(e, t) {
  e.style.display = t ? e[Rl] : "none", e[La] = !t;
}
const mc = /* @__PURE__ */ Symbol(""), hc = /(?:^|;)\s*display\s*:/;
function gc(e, t, n) {
  const l = e.style, i = Ce(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (Ce(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          n[a] == null && Rn(l, a, "");
        }
      else
        for (const s in t)
          n[s] == null && Rn(l, s, "");
    for (const s in n) {
      s === "display" && (o = !0);
      const a = n[s];
      a != null ? bc(
        e,
        s,
        !Ce(t) && t ? t[s] : void 0,
        a
      ) || Rn(l, s, a) : Rn(l, s, "");
    }
  } else if (i) {
    if (t !== n) {
      const s = l[mc];
      s && (n += ";" + s), l.cssText = n, o = hc.test(n);
    }
  } else t && e.removeAttribute("style");
  Rl in e && (e[Rl] = o ? l.display : "", e[La] && (l.display = "none"));
}
const Wo = /\s*!important$/;
function Rn(e, t, n) {
  if (te(n))
    n.forEach((l) => Rn(e, t, l));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const l = _c(e, t);
    Wo.test(n) ? e.setProperty(
      Dt(l),
      n.replace(Wo, ""),
      "important"
    ) : e[l] = n;
  }
}
const jo = ["Webkit", "Moz", "ms"], hi = {};
function _c(e, t) {
  const n = hi[t];
  if (n)
    return n;
  let l = $e(t);
  if (l !== "filter" && l in e)
    return hi[t] = l;
  l = Gl(l);
  for (let i = 0; i < jo.length; i++) {
    const o = jo[i] + l;
    if (o in e)
      return hi[t] = o;
  }
  return t;
}
function bc(e, t, n, l) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ce(l) && n === l;
}
const Ko = "http://www.w3.org/1999/xlink";
function zo(e, t, n, l, i, o = ar(t)) {
  l && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ko, t.slice(6, t.length)) : e.setAttributeNS(Ko, t, n) : n == null || o && !ws(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : qe(n) ? String(n) : n
  );
}
function qo(e, t, n, l, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Fa(n) : n);
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
    a === "boolean" ? n = ws(n) : n == null && a === "string" ? (n = "", s = !0) : a === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function Qt(e, t, n, l) {
  e.addEventListener(t, n, l);
}
function vc(e, t, n, l) {
  e.removeEventListener(t, n, l);
}
const Xo = /* @__PURE__ */ Symbol("_vei");
function yc(e, t, n, l, i = null) {
  const o = e[Xo] || (e[Xo] = {}), s = o[t];
  if (l && s)
    s.value = l;
  else {
    const [a, r] = xc(t);
    if (l) {
      const c = o[t] = Mc(
        l,
        i
      );
      Qt(e, a, c, r);
    } else s && (vc(e, a, s, r), o[t] = void 0);
  }
}
const wc = /(Once|Passive|Capture)$/, Sc = /^on:?(?:Once|Passive|Capture)$/;
function xc(e) {
  let t, n;
  for (; (n = e.match(wc)) && !Sc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Dt(e.slice(2)), t];
}
let gi = 0;
const Cc = /* @__PURE__ */ Promise.resolve(), Ac = () => gi || (Cc.then(() => gi = 0), gi = Date.now());
function Mc(e, t) {
  const n = (l) => {
    if (!l._vts)
      l._vts = Date.now();
    else if (l._vts <= n.attached)
      return;
    const i = n.value;
    if (te(i)) {
      const o = l.stopImmediatePropagation;
      l.stopImmediatePropagation = () => {
        o.call(l), l._stopped = !0;
      };
      const s = i.slice(), a = [l];
      for (let r = 0; r < s.length && !l._stopped; r++) {
        const c = s[r];
        c && nt(
          c,
          t,
          5,
          a
        );
      }
    } else
      nt(
        i,
        t,
        5,
        [l]
      );
  };
  return n.value = e, n.attached = Ac(), n;
}
const Yo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Fc = (e, t, n, l, i, o) => {
  const s = i === "svg";
  t === "class" ? fc(e, l, s) : t === "style" ? gc(e, n, l) : Vl(t) ? $l(t) || yc(e, t, n, l, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : kc(e, t, l, s)) ? (qo(e, t, l), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && zo(e, t, l, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Lc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ce(l))) ? qo(e, $e(t), l, o, t) : (t === "true-value" ? e._trueValue = l : t === "false-value" && (e._falseValue = l), zo(e, t, l, s));
};
function kc(e, t, n, l) {
  if (l)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Yo(t) && ue(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Yo(t) && Ce(n) ? !1 : t in e;
}
function Lc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const l = $e(t);
  return Array.isArray(n) ? n.some((i) => $e(i) === l) : Object.keys(n).some((i) => $e(i) === l);
}
const Nl = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return te(t) ? (n) => hl(t, n) : t;
};
function Ic(e) {
  e.target.composing = !0;
}
function Jo(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const _n = /* @__PURE__ */ Symbol("_assign");
function Qo(e, t, n) {
  return t && (e = e.trim()), n && (e = Wl(e)), e;
}
const ht = {
  created(e, { modifiers: { lazy: t, trim: n, number: l } }, i) {
    e[_n] = Nl(i);
    const o = l || i.props && i.props.type === "number";
    Qt(e, t ? "change" : "input", (s) => {
      s.target.composing || e[_n](Qo(e.value, n, o));
    }), (n || o) && Qt(e, "change", () => {
      e.value = Qo(e.value, n, o);
    }), t || (Qt(e, "compositionstart", Ic), Qt(e, "compositionend", Jo), Qt(e, "change", Jo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: l, trim: i, number: o } }, s) {
    if (e[_n] = Nl(s), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? Wl(e.value) : e.value, r = t ?? "";
    if (a === r)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (l && t === n || i && e.value.trim() === r) || (e.value = r);
  }
}, Dc = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, l) {
    e._modelValue = t, Qt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? Wl(Tl(o)) : Tl(o)
      );
      e[_n](
        e.multiple ? Bl(e._modelValue) ? new Set(i) : i : i[0]
      ), e._assigning = !0, Sn(() => {
        e._assigning = !1;
      });
    }), e[_n] = Nl(l);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Zo(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[_n] = Nl(n);
  },
  updated(e, { value: t }) {
    e._assigning || Zo(e, t);
  }
};
function Zo(e, t) {
  const n = e.multiple, l = te(t);
  if (!(n && !l && !Bl(t))) {
    for (let i = 0, o = e.options.length; i < o; i++) {
      const s = e.options[i], a = Tl(s);
      if (n)
        if (l) {
          const r = typeof a;
          r === "string" || r === "number" ? s.selected = t.some((c) => String(c) === String(a)) : s.selected = ur(t, a) > -1;
        } else
          s.selected = t.has(a);
      else if (Zn(Tl(s), t)) {
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
const Pc = ["ctrl", "shift", "alt", "meta"], Rc = {
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
  exact: (e, t) => Pc.some((n) => e[`${n}Key`] && !t.includes(n))
}, Pi = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), l = t.join(".");
  return n[l] || (n[l] = (i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const a = Rc[t[s]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  });
}, Nc = {
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
    const o = Dt(i.key);
    if (t.some(
      (s) => s === o || Nc[s] === o
    ))
      return e(i);
  });
}, Tc = /* @__PURE__ */ ke({ patchProp: Fc }, ic);
let es;
function Ia() {
  return es || (es = Vu(Tc));
}
const ts = (...e) => {
  Ia().render(...e);
}, lo = (...e) => {
  const t = Ia().createApp(...e), { mount: n } = t;
  return t.mount = (l) => {
    const i = Oc(l);
    if (!i) return;
    const o = t._component;
    !ue(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = n(i, !1, Ec(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
};
function Ec(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Oc(e) {
  return Ce(e) ? document.querySelector(e) : e;
}
const ni = {
  accent: "#f08a45",
  accentInk: "#fff",
  panel: "#171b22",
  panelAlt: "#222934",
  text: "#e8edf3",
  muted: "#9ca8b5",
  danger: "#ef6666",
  ok: "#62c987"
}, Vc = {
  accent: "#c9682c",
  accentInk: "#fff",
  panel: "#eef1f5",
  panelAlt: "#e2e6ec",
  text: "#1c2430",
  muted: "#5b6572",
  danger: "#c94b4b",
  ok: "#3f8f5f"
}, $c = {
  accent: "#00e5ff",
  accentInk: "#fff",
  panel: "#0a0e1a",
  panelAlt: "#131a2e",
  text: "#dff9ff",
  muted: "#5f7d94",
  danger: "#ff2e63",
  ok: "#00ff9f"
}, Bc = {
  accent: "#d4a017",
  accentInk: "#fff",
  panel: "#1a1712",
  panelAlt: "#26221a",
  text: "#e8dcc0",
  muted: "#8a7d5f",
  danger: "#9a3324",
  ok: "#8fbf3f"
}, Hc = {
  accent: "#14b13b",
  accentInk: "#0c190c",
  panel: "#0a110a",
  panelAlt: "#121e12",
  text: "#4af626",
  muted: "#2e7d32",
  danger: "#d32f2f",
  ok: "#14b13b"
}, Uc = {
  accent: "#d5ff40",
  accentInk: "#14150f",
  panel: "#181916",
  panelAlt: "#232620",
  text: "#edf2e2",
  muted: "#8b9483",
  danger: "#ff5c72",
  ok: "#3ed98c"
}, Gc = {
  default: ni,
  cyberpunk: $c,
  fallout: Bc,
  travelmate: Uc,
  pipboy: Hc
}, wt = { ...ni };
let Hn = null, Un = null;
function Ri(e) {
  return `--fil-accent:${e.accent};--fil-accent-ink:${e.accentInk};--fil-panel:${e.panel};--fil-panel-alt:${e.panelAlt};--fil-text:${e.text};--fil-muted:${e.muted};--fil-danger:${e.danger};--fil-ok:${e.ok};`;
}
const Wc = {
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
}, jc = "--fil-surface-bg:rgba(100,180,220,0.06);--fil-surface-border:rgba(0,255,255,0.18);--fil-surface-radius:20px;--fil-surface-blur:10px;--fil-surface-shadow:0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08);--fil-glass-bg:rgba(50,80,120,0.18);--fil-glass-border:rgba(0,150,200,0.35);--fil-field-radius:10px;--fil-pill-radius:17px;--fil-pill-bg:rgba(255,255,255,0.06);--fil-pill-border:rgba(0,150,200,0.4);", Kc = "--fil-surface-bg:rgba(70,130,170,0.08);--fil-surface-border:rgba(40,120,160,0.28);--fil-surface-radius:20px;--fil-surface-blur:10px;--fil-surface-shadow:0 8px 24px rgba(40,60,90,0.18), inset 0 1px 0 rgba(255,255,255,0.5);--fil-glass-bg:rgba(120,160,200,0.16);--fil-glass-border:rgba(40,120,160,0.3);--fil-field-radius:10px;--fil-pill-radius:17px;--fil-pill-bg:rgba(30,60,90,0.06);--fil-pill-border:rgba(40,120,160,0.35);";
function zc() {
  if (typeof document > "u" || document.getElementById("fil-brand-vars")) return;
  const e = document.createElement("style");
  e.id = "fil-brand-vars", e.textContent = `:root{${Ri(ni)}--fil-radius:8px;--fil-node-pad:6px 8px 14px 8px;--fil-node-gap:4px;--fil-row-pad:4px 6px;--fil-input-border:rgba(240,138,69,0.35);${jc}}
.comfy-theme-light{${Ri(Vc)}--fil-input-border:rgba(201,104,44,0.35);${Kc}}
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
function Da(e) {
  const t = Gc[e] ?? ni;
  Object.assign(wt, t), !(typeof document > "u") && (document.documentElement.dataset.filTheme = e, Hn && (Hn.textContent = e === "default" ? "" : `:root{${Ri(t)}}`), Un && (Un.textContent = Wc[e] ?? ""));
}
const qc = {
  class: "fil-color-picker",
  role: "group",
  "aria-label": "Color picker"
}, Xc = { class: "fil-cp-hex-row" }, Yc = {
  class: "fil-cp-presets",
  role: "listbox",
  "aria-label": "Preset colors"
}, Jc = ["aria-selected", "aria-label", "title", "onClick"], Qc = /* @__PURE__ */ ye({
  __name: "FilColorPicker",
  props: /* @__PURE__ */ We({
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
    ], n = e, l = lt(e, "modelValue"), i = X(() => n.presets ?? t);
    function o(L) {
      l.value = L;
    }
    function s(L) {
      return Math.min(1, Math.max(0, L));
    }
    function a(L) {
      const I = /^#?([0-9a-f]{6})$/i.exec(L.trim());
      if (!I) return null;
      const O = parseInt(I[1], 16);
      return [O >> 16 & 255, O >> 8 & 255, O & 255];
    }
    function r(L, I, O) {
      const ne = (R) => Math.round(s(R / 255) * 255).toString(16).padStart(2, "0");
      return `#${ne(L)}${ne(I)}${ne(O)}`;
    }
    function c(L, I, O) {
      const ne = L / 255, R = I / 255, k = O / 255, M = Math.max(ne, R, k), j = Math.min(ne, R, k), Z = M - j;
      let le = 0;
      Z !== 0 && (M === ne ? le = (R - k) / Z % 6 : M === R ? le = (k - ne) / Z + 2 : le = (ne - R) / Z + 4, le *= 60, le < 0 && (le += 360));
      const Ee = M === 0 ? 0 : Z / M;
      return [le, Ee, M];
    }
    function u(L, I, O) {
      const ne = O * I, R = ne * (1 - Math.abs(L / 60 % 2 - 1)), k = O - ne;
      let [M, j, Z] = [0, 0, 0];
      return L < 60 ? [M, j, Z] = [ne, R, 0] : L < 120 ? [M, j, Z] = [R, ne, 0] : L < 180 ? [M, j, Z] = [0, ne, R] : L < 240 ? [M, j, Z] = [0, R, ne] : L < 300 ? [M, j, Z] = [R, 0, ne] : [M, j, Z] = [ne, 0, R], [(M + k) * 255, (j + k) * 255, (Z + k) * 255];
    }
    const d = /* @__PURE__ */ se(0), m = /* @__PURE__ */ se(0), h = /* @__PURE__ */ se(0), p = /* @__PURE__ */ se(l.value);
    function _(L) {
      const I = a(L);
      if (!I) return;
      const [O, ne, R] = c(...I);
      d.value = O, m.value = ne, h.value = R, p.value = r(...I);
    }
    Te(l, (L) => _(L), { immediate: !0 });
    const A = X(() => r(...u(d.value, m.value, h.value)));
    function w() {
      l.value = A.value, p.value = A.value;
    }
    function b() {
      const L = a(p.value);
      if (!L) {
        p.value = A.value;
        return;
      }
      const [I, O, ne] = c(...L);
      d.value = I, m.value = O, h.value = ne, l.value = r(...L);
    }
    const C = /* @__PURE__ */ se(null), v = /* @__PURE__ */ se(null);
    function y(L) {
      const I = C.value;
      if (!I) return;
      const O = I.getBoundingClientRect();
      m.value = s((L.clientX - O.left) / O.width), h.value = s(1 - (L.clientY - O.top) / O.height), w();
    }
    function S(L) {
      const I = v.value;
      if (!I) return;
      const O = I.getBoundingClientRect();
      d.value = s((L.clientX - O.left) / O.width) * 360, w();
    }
    function T(L) {
      L.preventDefault(), y(L);
      const I = (ne) => y(ne), O = () => {
        window.removeEventListener("pointermove", I), window.removeEventListener("pointerup", O);
      };
      window.addEventListener("pointermove", I), window.addEventListener("pointerup", O);
    }
    function G(L) {
      L.preventDefault(), S(L);
      const I = (ne) => S(ne), O = () => {
        window.removeEventListener("pointermove", I), window.removeEventListener("pointerup", O);
      };
      window.addEventListener("pointermove", I), window.addEventListener("pointerup", O);
    }
    const E = X(() => `hsl(${d.value}, 100%, 50%)`), W = X(() => ({
      left: `${m.value * 100}%`,
      top: `${(1 - h.value) * 100}%`
    })), J = X(() => ({ left: `${d.value / 360 * 100}%` }));
    return (L, I) => (F(), P("div", qc, [
      D("div", {
        ref_key: "svRef",
        ref: C,
        class: "fil-cp-sv",
        style: et({ background: E.value }),
        onPointerdown: T
      }, [
        I[1] || (I[1] = D("div", { class: "fil-cp-sv-white" }, null, -1)),
        I[2] || (I[2] = D("div", { class: "fil-cp-sv-black" }, null, -1)),
        D("div", {
          class: "fil-cp-sv-thumb",
          style: et(W.value)
        }, null, 4)
      ], 36),
      D("div", {
        ref_key: "hueRef",
        ref: v,
        class: "fil-cp-hue",
        onPointerdown: G
      }, [
        D("div", {
          class: "fil-cp-hue-thumb",
          style: et(J.value)
        }, null, 4)
      ], 544),
      D("div", Xc, [
        D("span", {
          class: "fil-cp-swatch",
          style: et({ background: A.value })
        }, null, 4),
        tt(D("input", {
          "onUpdate:modelValue": I[0] || (I[0] = (O) => p.value = O),
          class: "fil-cp-hex-input",
          type: "text",
          spellcheck: "false",
          "aria-label": "Hex color",
          onKeydown: _l(b, ["enter"]),
          onBlur: b
        }, null, 544), [
          [ht, p.value]
        ])
      ]),
      D("div", Yc, [
        (F(!0), P(ce, null, Me(i.value, (O) => (F(), P("button", {
          key: O,
          class: me(["fil-color-swatch", { "is-active": l.value === O }]),
          style: et({ "--swatch": O }),
          "aria-selected": l.value === O,
          "aria-label": O,
          title: O,
          onClick: (ne) => o(O)
        }, null, 14, Jc))), 128))
      ])
    ]));
  }
}), Se = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, i] of t)
    n[l] = i;
  return n;
}, Zc = /* @__PURE__ */ Se(Qc, [["__scopeId", "data-v-969386c1"]]), ns = "__fil_color_picker_popup__";
let sn = null;
function ed(e) {
  return [
    {
      content: "Change color…",
      callback: (t, n, l) => td(e, l)
    }
  ];
}
function td(e, t) {
  var m;
  sn == null || sn(), (m = document.getElementById(ns)) == null || m.remove();
  const n = document.createElement("div");
  n.id = ns;
  const l = 176, i = 260, o = t ? Math.min(t.clientX, window.innerWidth - l - 8) : window.innerWidth / 2 - l / 2, s = t ? Math.min(t.clientY, window.innerHeight - i - 8) : window.innerHeight / 2 - i / 2;
  n.style.cssText = `position:fixed;z-index:10001;top:${Math.max(8, s)}px;left:${Math.max(8, o)}px;`, document.body.appendChild(n);
  function a(h) {
    e.color = h, e.__fx && (e.__fx.color = h), e.properties = e.properties || {}, e.properties.fil_custom_color = !0, r();
  }
  function r() {
    ts(null, n), n.remove(), document.removeEventListener("mousedown", c, !0), document.removeEventListener("keydown", u, !0), sn === r && (sn = null);
  }
  function c(h) {
    n.contains(h.target) || r();
  }
  function u(h) {
    h.key === "Escape" && r();
  }
  const d = Ma(Zc, {
    modelValue: e.color ?? "#78716c",
    "onUpdate:modelValue": (h) => a(h)
  });
  ts(d, n), document.addEventListener("mousedown", c, !0), document.addEventListener("keydown", u, !0), sn = r, Sn(() => {
    var h;
    (h = n.querySelector(".fil-color-swatch")) == null || h.focus();
  });
}
const nd = "fil";
function Xe(e, t = {}) {
  const l = e.prototype;
  if (l._filStyled) return;
  l._filStyled = !0, t.minSize && (l.minSize = t.minSize), l._filFamily = t.family ?? nd, l._filDescription = t.description ?? "", t.badges && (l.badges = t.badges), l.color = wt.accent, l.bgcolor = wt.panelAlt;
  const i = l.onNodeCreated;
  l.onNodeCreated = function(...s) {
    const a = i == null ? void 0 : i.apply(this, s);
    return this.color = wt.accent, this.bgcolor = wt.panelAlt, a;
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
        const c = this.widgets || [], u = c.filter((d) => !d.hidden);
        this.widgets = u;
        try {
          a.apply(this, [r]);
        } finally {
          this.widgets = c;
        }
      };
    }
  }), l.onDrawTitleBar = function(s, a, r, c, u) {
    var p;
    const d = ((p = globalThis.LiteGraph) == null ? void 0 : p.ROUND_RADIUS) ?? 8, m = !!this.collapsed;
    s.fillStyle = wt.panel, s.beginPath(), s.roundRect(0, -a, r[0], a, m ? [d] : [d, d, 0, 0]), s.fill();
    const h = 3;
    s.fillStyle = u || wt.accent, s.beginPath(), s.roundRect(0, -a, h, a, m ? [d, 0, 0, d] : [d, 0, 0, 0]), s.fill();
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
    s._filFamily && ((i = s.properties) != null && i.fil_custom_color || (s.color = wt.accent, s.bgcolor = wt.panelAlt));
  const n = e.canvas;
  (o = n == null ? void 0 : n.setDirty) == null || o.call(n, !0, !0);
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Pa;
const li = (e) => Pa = e, Ra = (
  /* istanbul ignore next */
  Symbol()
);
function Ni(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Gn;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Gn || (Gn = {}));
function Na() {
  const e = As(!0), t = e.run(() => /* @__PURE__ */ se({}));
  let n = [], l = [];
  const i = Xi({
    install(o) {
      li(i), i._a = o, o.provide(Ra, i), o.config.globalProperties.$pinia = i, l.forEach((s) => n.push(s)), l = [];
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
const Ta = () => {
};
function ls(e, t, n, l = Ta) {
  e.push(t);
  const i = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), l());
  };
  return !n && Ms() && cr(i), i;
}
function an(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const id = (e) => e(), is = Symbol(), _i = Symbol();
function Ti(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, l) => e.set(l, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const l = t[n], i = e[n];
    Ni(i) && Ni(l) && e.hasOwnProperty(n) && !/* @__PURE__ */ de(l) && !/* @__PURE__ */ Ct(l) ? e[n] = Ti(i, l) : e[n] = l;
  }
  return e;
}
const od = (
  /* istanbul ignore next */
  Symbol()
);
function sd(e) {
  return !Ni(e) || !e.hasOwnProperty(od);
}
const { assign: $t } = Object;
function ad(e) {
  return !!(/* @__PURE__ */ de(e) && e.effect);
}
function rd(e, t, n, l) {
  const { state: i, actions: o, getters: s } = t, a = n.state.value[e];
  let r;
  function c() {
    a || (n.state.value[e] = i ? i() : {});
    const u = /* @__PURE__ */ Tr(n.state.value[e]);
    return $t(u, o, Object.keys(s || {}).reduce((d, m) => (d[m] = Xi(X(() => {
      li(n);
      const h = n._s.get(e);
      return s[m].call(h, h);
    })), d), {}));
  }
  return r = Ea(e, c, t, n, l, !0), r;
}
function Ea(e, t, n = {}, l, i, o) {
  let s;
  const a = $t({ actions: {} }, n), r = { deep: !0 };
  let c, u, d = [], m = [], h;
  const p = l.state.value[e];
  !o && !p && (l.state.value[e] = {});
  let _;
  function A(G) {
    let E;
    c = u = !1, typeof G == "function" ? (G(l.state.value[e]), E = {
      type: Gn.patchFunction,
      storeId: e,
      events: h
    }) : (Ti(l.state.value[e], G), E = {
      type: Gn.patchObject,
      payload: G,
      storeId: e,
      events: h
    });
    const W = _ = Symbol();
    Sn().then(() => {
      _ === W && (c = !0);
    }), u = !0, an(d, E, l.state.value[e]);
  }
  const w = o ? function() {
    const { state: E } = n, W = E ? E() : {};
    this.$patch((J) => {
      $t(J, W);
    });
  } : (
    /* istanbul ignore next */
    Ta
  );
  function b() {
    s.stop(), d = [], m = [], l._s.delete(e);
  }
  const C = (G, E = "") => {
    if (is in G)
      return G[_i] = E, G;
    const W = function() {
      li(l);
      const J = Array.from(arguments), L = [], I = [];
      function O(k) {
        L.push(k);
      }
      function ne(k) {
        I.push(k);
      }
      an(m, {
        args: J,
        name: W[_i],
        store: y,
        after: O,
        onError: ne
      });
      let R;
      try {
        R = G.apply(this && this.$id === e ? this : y, J);
      } catch (k) {
        throw an(I, k), k;
      }
      return R instanceof Promise ? R.then((k) => (an(L, k), k)).catch((k) => (an(I, k), Promise.reject(k))) : (an(L, R), R);
    };
    return W[is] = !0, W[_i] = E, W;
  }, v = {
    _p: l,
    // _s: scope,
    $id: e,
    $onAction: ls.bind(null, m),
    $patch: A,
    $reset: w,
    $subscribe(G, E = {}) {
      const W = ls(d, G, E.detached, () => J()), J = s.run(() => Te(() => l.state.value[e], (L) => {
        (E.flush === "sync" ? u : c) && G({
          storeId: e,
          type: Gn.direct,
          events: h
        }, L);
      }, $t({}, r, E)));
      return W;
    },
    $dispose: b
  }, y = /* @__PURE__ */ Gt(v);
  l._s.set(e, y);
  const T = (l._a && l._a.runWithContext || id)(() => l._e.run(() => (s = As()).run(() => t({ action: C }))));
  for (const G in T) {
    const E = T[G];
    if (/* @__PURE__ */ de(E) && !ad(E) || /* @__PURE__ */ Ct(E))
      o || (p && sd(E) && (/* @__PURE__ */ de(E) ? E.value = p[G] : Ti(E, p[G])), l.state.value[e][G] = E);
    else if (typeof E == "function") {
      const W = C(E, G);
      T[G] = W, a.actions[G] = E;
    }
  }
  return $t(y, T), $t(/* @__PURE__ */ pe(y), T), Object.defineProperty(y, "$state", {
    get: () => l.state.value[e],
    set: (G) => {
      A((E) => {
        $t(E, G);
      });
    }
  }), l._p.forEach((G) => {
    $t(y, s.run(() => G({
      store: y,
      app: l._a,
      pinia: l,
      options: a
    })));
  }), p && o && n.hydrate && n.hydrate(y.$state, p), c = !0, u = !0, y;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function io(e, t, n) {
  let l, i;
  const o = typeof t == "function";
  typeof e == "string" ? (l = e, i = o ? n : t) : (i = e, l = e.id);
  function s(a, r) {
    const c = Kr();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (c ? Vn(Ra, null) : null), a && li(a), a = Pa, a._s.has(l) || (o ? Ea(l, t, i, a) : rd(l, i, a)), a._s.get(l);
  }
  return s.$id = l, s;
}
let Zt = null;
function ud(e) {
  return Zt || (Zt = Na(), Zt);
}
function oo() {
  return Zt || (Zt = Na()), Zt;
}
const cd = { class: "fil-node-shell" }, dd = /* @__PURE__ */ ye({
  __name: "FilNodeShell",
  props: {
    root: {},
    state: {},
    comfyClass: {}
  },
  setup(e) {
    return (t, n) => (F(), P("div", cd, [
      (F(), Ae(hu(e.root), { state: e.state }, null, 8, ["state"]))
    ]));
  }
}), fd = /* @__PURE__ */ Se(dd, [["__scopeId", "data-v-e0e8284c"]]);
function Ei(e, t, n) {
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
function Oa(e, t, n, l = null) {
  let i = e instanceof Element ? e : null;
  for (; i && i !== l; ) {
    if (Ei(i, t, n)) return !0;
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
      if (Ei(o, n, l)) return o;
      for (const s of o.querySelectorAll("*"))
        if (i(s) && Ei(s, n, l)) return s;
    }
  return null;
}
function md(e, t) {
  for (let n = e; n; n = Object.getPrototypeOf(n)) {
    const l = Object.getOwnPropertyDescriptor(n, t);
    if (l) return !!(l.writable || l.set);
  }
  return !0;
}
const hd = "__filVueMounted";
function Nt(e, t, n, l) {
  const i = e;
  if (typeof i.addDOMWidget != "function")
    return console.warn(`[FiL_Design_ImageMind] domWidgetHost: node.addDOMWidget not available for "${t}" — ComfyUI core too old?`), null;
  const o = document.createElement("div");
  o.className = "fil-vue-host", o.style.width = "100%", o.style.boxSizing = "border-box", o.style.height = "auto", o[hd] = !0, o.addEventListener(
    "wheel",
    (b) => {
      var v, y;
      if (Oa(b.target, b.deltaX, b.deltaY, o.parentElement)) return;
      const C = (y = (v = globalThis.app) == null ? void 0 : v.canvas) == null ? void 0 : y.canvas;
      C instanceof HTMLCanvasElement && (b.preventDefault(), C.dispatchEvent(new WheelEvent("wheel", {
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
  const s = /* @__PURE__ */ Gt(l.state);
  let a = l.height, r;
  const c = () => {
    const b = o.firstElementChild;
    return !b || b.clientHeight === 0 || (a = Math.ceil(b.scrollHeight / 4) * 4, r && (md(r, "height") && (r.height = a), r.computeSize = () => [o.clientWidth || 380, a])), a;
  };
  r = i.addDOMWidget(t, "custom", o, {
    hideOnZoom: !0,
    getValue: () => s,
    setValue: (b) => {
      if (b && typeof b == "object") {
        const C = b, v = s;
        C.nodeState && typeof C.nodeState == "object" && v.nodeState && Object.assign(v.nodeState, C.nodeState), C.ui && typeof C.ui == "object" && v.ui && Object.assign(v.ui, C.ui);
        for (const [y, S] of Object.entries(C))
          y !== "nodeState" && y !== "ui" && (v[y] = S);
      }
    },
    getHeight: c,
    ...l.onDraw ? { onDraw: l.onDraw } : {}
  });
  const u = lo(fd, { root: n, state: s, comfyClass: i.comfyClass ?? "default" }).use(oo());
  u.mount(o);
  function d() {
    var W, J;
    if (c(), !i.computeSize || !i.setSize || !i.size) return;
    const [b, C] = i.size, [, v] = i.computeSize(), [y, S] = i.minSize ?? [0, 0], T = Math.max(b, y), G = a + 35, E = Math.max(v, G, S);
    T === b && Math.abs(E - C) < 2 || (i.setSize([T, E]), (J = (W = i.graph) == null ? void 0 : W.setDirtyCanvas) == null || J.call(W, !0, !0));
  }
  let m = 0;
  const h = new ResizeObserver(() => {
    m || (m = requestAnimationFrame(() => {
      m = 0, d();
    }));
  });
  h.observe(o);
  let p = 20;
  (function b() {
    d(), p-- > 0 && requestAnimationFrame(b);
  })();
  const _ = setInterval(d, 400), A = { widget: r, host: o, app: u, state: s, unmount: w };
  function w() {
    h.disconnect(), m && cancelAnimationFrame(m), clearInterval(_);
    try {
      this.app.unmount();
    } catch (b) {
      console.warn(`[FiL_Design_ImageMind] unmount failed for "${t}":`, b);
    }
    for (; this.host.firstChild; ) this.host.removeChild(this.host.firstChild);
  }
  return A.unmount = w.bind(A), i._filVueApps ?? (i._filVueApps = {}), i._filVueApps[t] = A, A;
}
function Tt(e) {
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
function oe(e, t) {
  const n = e;
  if (n.widgets)
    return n.widgets.find((l) => l.name === t);
}
function Wt(e, t) {
  return new Proxy({ ...t }, {
    set(n, l, i) {
      n[l] = i;
      const o = oe(e, String(l));
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
const os = 4, gd = {
  info: 3500,
  success: 3e3,
  warning: 5e3,
  error: 6e3
};
let _d = 1;
const cn = /* @__PURE__ */ io("fil/toast", () => {
  const e = /* @__PURE__ */ se([]), t = /* @__PURE__ */ se([]);
  function n(c, u, d = {}) {
    const m = {
      id: _d++,
      level: c,
      text: u == null ? "" : String(u),
      timeout: d.timeout ?? gd[c],
      sticky: !!d.sticky,
      action: d.action ?? null
    };
    return e.value.length < os ? e.value.push(m) : t.value.push(m), m;
  }
  function l(c, u) {
    return n("info", c, u);
  }
  function i(c, u) {
    return n("success", c, u);
  }
  function o(c, u) {
    return n("warning", c, u);
  }
  function s(c, u) {
    return n("error", c, u);
  }
  function a(c) {
    e.value = e.value.filter((u) => u.id !== c), t.value.length > 0 && e.value.length < os && e.value.push(t.value.shift());
  }
  function r() {
    e.value = [], t.value = [];
  }
  return { items: e, queue: t, info: l, success: i, warning: o, error: s, push: n, dismiss: a, dismissAll: r };
});
function bd() {
  var t, n;
  return ((n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.toast) ?? null;
}
function dl(e, t) {
  const n = bd();
  if (n != null && n.addAlert && (e === "info" || e === "success" || e === "warning" || e === "error"))
    try {
      n.addAlert(t);
      return;
    } catch (l) {
      console.warn("[FiL_Design_ImageMind toast] extensionManager.toast failed:", l);
    }
  cn().push(e, t, {});
}
const Lt = {
  info: (e) => dl("info", e),
  success: (e) => dl("success", e),
  warning: (e) => dl("warning", e),
  error: (e) => dl("error", e),
  // Direct Pinia access for Vue components that want actions/sticky/toasts.
  infoRich: (e, t) => cn().info(e, t),
  successRich: (e, t) => cn().success(e, t),
  warningRich: (e, t) => cn().warning(e, t),
  errorRich: (e, t) => cn().error(e, t),
  dismissAll: () => cn().dismissAll()
};
function ss() {
  var t, n, l, i, o, s, a, r;
  return !!(((i = (l = (n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.setting) == null ? void 0 : l.get) == null ? void 0 : i.call(l, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? ((r = (a = (s = (o = globalThis.app) == null ? void 0 : o.ui) == null ? void 0 : s.settings) == null ? void 0 : a.getSettingValue) == null ? void 0 : r.call(a, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? !0);
}
function as() {
  function e(l, i, o, s) {
  }
  function t(l, i, o, s) {
    ss() && Lt.success("Connected");
  }
  function n(l, i) {
    ss() && Lt.info("Disconnected");
  }
  return { onConnectionsChange: e, onConnect: t, onDisconnect: n };
}
function Ye(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype, n = t.onConnect;
  t.onConnect = function(...i) {
    const { onConnect: o } = as();
    return o(...i), n == null ? void 0 : n.apply(this, i);
  };
  const l = t.onDisconnect;
  t.onDisconnect = function(...i) {
    const { onDisconnect: o } = as();
    return o(...i), l == null ? void 0 : l.apply(this, i);
  };
}
const vd = /* @__PURE__ */ Pt(() => Promise.resolve().then(() => Em)), yd = {
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
      const r = i == null ? void 0 : i.apply(this, a), c = this, u = oe(c, "seed"), d = ge(u, "number", 0);
      u && (u.hidden = !0);
      const m = oe(c, "control_after_generate");
      m && (m.hidden = !0);
      const h = {
        nodeState: {
          mode: "random",
          seed: d
        },
        initialValues: { seed: d },
        ui: {},
        lastRunSeed: null
      };
      return Object.defineProperty(h, "node", { value: c, enumerable: !1, configurable: !0 }), c._filSeedState = h, Nt(c, "fil_seed_view", vd, { state: h, height: 52 }), r;
    };
    const o = l.onConfigure;
    l.onConfigure = function(...a) {
      const r = o == null ? void 0 : o.apply(this, a), c = this, u = c._filSeedState;
      return u && (u.nodeState.seed = ge(oe(c, "seed"), "number", 0)), r;
    };
    const s = l.onRemoved;
    l.onRemoved = function(...a) {
      return Tt(this), s == null ? void 0 : s.apply(this, a);
    }, Ye(e);
  }
}, wd = /* @__PURE__ */ Pt(() => Promise.resolve().then(() => Lh)), Sd = {
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
      const c = o == null ? void 0 : o.apply(this, r), u = this, d = ge(oe(u, "provider"), "string", "ollama"), m = ge(oe(u, "model"), "string", "(loading...)"), h = ge(oe(u, "temperature"), "number", 0.7), p = ge(oe(u, "max_tokens"), "number", 0), _ = ge(oe(u, "rate_limit_ms"), "number", 100), A = ge(oe(u, "max_image_side"), "number", 1024);
      for (const b of ["provider", "model", "refresh_models", "temperature", "max_tokens", "rate_limit_ms", "max_image_side"]) {
        const C = oe(u, b);
        C && (C.hidden = !0);
      }
      const w = {
        nodeState: Wt(u, {
          provider: d,
          model: m,
          temperature: h,
          max_tokens: p,
          rate_limit_ms: _,
          max_image_side: A
        }),
        initialValues: {
          provider: d,
          model: m,
          temperature: h,
          max_tokens: p,
          rate_limit_ms: _,
          max_image_side: A
        },
        ui: {}
      };
      return Object.defineProperty(w, "node", { value: u, enumerable: !1, configurable: !0 }), u._filProviderState = w, Nt(u, "fil_provider_view", wd, { state: w, height: 180 }), c;
    };
    const s = l.onConfigure;
    l.onConfigure = function(...r) {
      const c = s == null ? void 0 : s.apply(this, r), u = this, d = u._filProviderState;
      if (!d) return c;
      const m = d.nodeState;
      for (const { name: h, kind: p, fallback: _ } of i)
        m[h] = ge(oe(u, h), p, _);
      return c;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return Tt(this), a == null ? void 0 : a.apply(this, r);
    }, Ye(e);
  }
}, xd = /* @__PURE__ */ Pt(() => Promise.resolve().then(() => Zh)), Cd = {
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
      const c = o == null ? void 0 : o.apply(this, r), u = this, d = {}, m = {};
      for (const p of i) {
        const _ = oe(u, p);
        if (!_) continue;
        const A = p === "seed", b = ge(_, A ? "number" : "string", A ? -1 : "");
        d[p] = b, m[p] = b, _.hidden = !0;
      }
      m.seed_mode = "random";
      for (const p of u.widgets || [])
        p.hidden = !0;
      const h = {
        nodeState: Wt(u, m),
        initialValues: d,
        ui: {},
        lastRunSeed: null
      };
      return Object.defineProperty(h, "node", { value: u, enumerable: !1, configurable: !0 }), u._filScannerSeedState = h, Nt(u, "fil_scanner_view", xd, { state: h, height: 580 }), c;
    };
    const s = l.onConfigure;
    l.onConfigure = function(...r) {
      const c = s == null ? void 0 : s.apply(this, r), u = this, d = u._filScannerSeedState;
      if (!d) return c;
      for (const m of i) {
        const h = oe(u, m);
        if (!h) continue;
        const p = m === "seed", _ = p ? -1 : "";
        d.nodeState[m] = ge(h, p ? "number" : "string", _), h.hidden = !0;
      }
      for (const m of u.widgets || [])
        m.hidden = !0;
      return c;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return Tt(this), a == null ? void 0 : a.apply(this, r);
    }, Ye(e);
  }
}, Ad = /* @__PURE__ */ Pt(() => Promise.resolve().then(() => lg)), Md = {
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
      const c = o == null ? void 0 : o.apply(this, r), u = this, d = {}, m = {};
      for (const p of Object.keys(i)) {
        const _ = oe(u, p), A = ge(_, "boolean", i[p]);
        d[p] = A, m[p] = A, _ && (_.hidden = !0);
      }
      const h = { nodeState: Wt(u, d), initialValues: m, ui: {} };
      return u._filCleanerState = h, Nt(u, "fil_cleaner_view", Ad, { state: h, height: 185 }), c;
    };
    const s = l.onConfigure;
    l.onConfigure = function(...r) {
      const c = s == null ? void 0 : s.apply(this, r), u = this, d = u._filCleanerState;
      if (!d) return c;
      for (const m of Object.keys(i))
        d.nodeState[m] = ge(oe(u, m), "boolean", i[m]);
      return c;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return Tt(this), a == null ? void 0 : a.apply(this, r);
    }, Ye(e);
  }
}, Fd = /* @__PURE__ */ Pt(() => Promise.resolve().then(() => qa)), kd = {
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
    l.onNodeCreated = function(...u) {
      const d = a == null ? void 0 : a.apply(this, u), m = this, h = {}, p = {};
      for (const A of Object.keys(i)) {
        const w = oe(m, A);
        if (!w) continue;
        const b = ge(w, "number", i[A]);
        h[A] = b, p[A] = b, w.hidden = !0;
      }
      for (const A of Object.keys(o)) {
        const w = oe(m, A);
        if (!w) continue;
        const b = ge(w, "boolean", o[A]);
        h[A] = b, p[A] = b, w.hidden = !0;
      }
      for (const A of Object.keys(s)) {
        const w = oe(m, A);
        if (!w) continue;
        const b = ge(w, "string", s[A]);
        h[A] = b, p[A] = b, w.hidden = !0;
      }
      const _ = { nodeState: Wt(m, h), initialValues: p, ui: {} };
      return m._filUpscaleState = _, Nt(m, "fil_upscale_view", Fd, { state: _, height: 420 }), d;
    };
    const r = l.onConfigure;
    l.onConfigure = function(...u) {
      const d = r == null ? void 0 : r.apply(this, u), m = this, h = m._filUpscaleState;
      if (!h) return d;
      for (const p of Object.keys(i))
        h.nodeState[p] = ge(oe(m, p), "number", i[p]);
      for (const p of Object.keys(o))
        h.nodeState[p] = ge(oe(m, p), "boolean", o[p]);
      for (const p of Object.keys(s))
        h.nodeState[p] = ge(oe(m, p), "string", s[p]);
      return d;
    };
    const c = l.onRemoved;
    l.onRemoved = function(...u) {
      return Tt(this), c == null ? void 0 : c.apply(this, u);
    }, Ye(e);
  }
}, Ld = /* @__PURE__ */ Pt(() => Promise.resolve().then(() => qa)), Id = {
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
    l.onNodeCreated = function(...u) {
      const d = a == null ? void 0 : a.apply(this, u), m = this, h = {}, p = {};
      for (const A of Object.keys(i)) {
        const w = oe(m, A);
        if (!w) continue;
        const b = ge(w, "number", i[A]);
        h[A] = b, p[A] = b, w.hidden = !0;
      }
      for (const A of Object.keys(o)) {
        const w = oe(m, A);
        if (!w) continue;
        const b = ge(w, "boolean", o[A]);
        h[A] = b, p[A] = b, w.hidden = !0;
      }
      for (const A of Object.keys(s)) {
        const w = oe(m, A);
        if (!w) continue;
        const b = ge(w, "string", s[A]);
        h[A] = b, p[A] = b, w.hidden = !0;
      }
      const _ = { nodeState: Wt(m, h), initialValues: p, ui: {} };
      return m._filUpscaleState = _, Nt(m, "fil_upscale_simple_view", Ld, { state: _, height: 420 }), d;
    };
    const r = l.onConfigure;
    l.onConfigure = function(...u) {
      const d = r == null ? void 0 : r.apply(this, u), m = this, h = m._filUpscaleState;
      if (!h) return d;
      for (const p of Object.keys(i))
        h.nodeState[p] = ge(oe(m, p), "number", i[p]);
      for (const p of Object.keys(o))
        h.nodeState[p] = ge(oe(m, p), "boolean", o[p]);
      for (const p of Object.keys(s))
        h.nodeState[p] = ge(oe(m, p), "string", s[p]);
      return d;
    };
    const c = l.onRemoved;
    l.onRemoved = function(...u) {
      return Tt(this), c == null ? void 0 : c.apply(this, u);
    }, Ye(e);
  }
}, Dd = {
  id: "FiLTileAssembly",
  register(e, t) {
    Xe(e, {
      minSize: [270, 200],
      family: "image",
      description: "Recombines processed tiles back into one image, feathered across the real overlap zones.",
      badges: [{ text: "tile", color: "#62c987", text_color: "#1a1a1a" }]
    }), Ye(e);
  }
}, Pd = {
  id: "FiLKSampler",
  register(e, t) {
    Xe(e, {
      minSize: [270, 260],
      family: "sampling",
      description: "Full sampler/scheduler set, passthrough outputs, preview, HighRes-fix script.",
      badges: [{ text: "sampler", color: "#7aa2f7", text_color: "#0b0e14" }]
    }), Ye(e);
  }
}, Rd = /* @__PURE__ */ Pt(() => Promise.resolve().then(() => wg)), Oi = {
  upscale_by: 1.25,
  denoise: 0.56,
  iterations: 1,
  strength: 1,
  seed: 0,
  hires_steps: 12
}, Vi = {
  upscale_type: "latent",
  hires_ckpt_name: "(use same)",
  latent_upscaler: "nearest-exact",
  pixel_upscaler: "",
  control_net_name: "",
  preprocessor: "none"
}, $i = {
  use_same_seed: !0,
  use_controlnet: !1
}, Nd = [
  ...Object.keys(Oi),
  ...Object.keys(Vi),
  ...Object.keys($i)
], Td = {
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
    const l = e.prototype, i = (r, c) => {
      for (const u of Object.keys(Oi))
        c[u] = ge(oe(r, u), "number", Oi[u]);
      for (const u of Object.keys(Vi))
        c[u] = ge(oe(r, u), "string", Vi[u]);
      for (const u of Object.keys($i))
        c[u] = ge(oe(r, u), "boolean", $i[u]);
    }, o = l.onNodeCreated;
    l.onNodeCreated = function(...r) {
      const c = o == null ? void 0 : o.apply(this, r), u = this, d = {};
      i(u, d);
      for (const p of Nd) {
        const _ = oe(u, p);
        _ && (_.hidden = !0);
      }
      const m = oe(u, "control_after_generate");
      m && (m.hidden = !0, m.value = "fixed"), d.seed_mode = "random";
      const h = {
        nodeState: Wt(u, d),
        initialValues: { ...d },
        ui: {},
        lastRunSeed: null
      };
      return Object.defineProperty(h, "node", { value: u, enumerable: !1, configurable: !0 }), u._filHiResFixState = h, Nt(u, "fil_hiresfix_view", Rd, { state: h, height: 420 }), c;
    };
    const s = l.onConfigure;
    l.onConfigure = function(...r) {
      const c = s == null ? void 0 : s.apply(this, r), u = this, d = u._filHiResFixState;
      return d && i(u, d.nodeState), c;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return Tt(this), a == null ? void 0 : a.apply(this, r);
    }, Ye(e);
  }
}, Ed = {
  id: "FiLNoiseControl",
  register(e, t) {
    Xe(e, {
      minSize: [270, 220],
      family: "sampling",
      description: "RNG source + seed-variation script for FiLKSampler.",
      badges: [{ text: "script", color: "#7aa2f7", text_color: "#0b0e14" }]
    }), Ye(e);
  }
}, Od = {
  id: "FiLImageDecomposer",
  register(e, t) {
    Xe(e, {
      minSize: [300, 240],
      family: "llm",
      description: "Decomposes image or prompt into distinct visual layers.",
      badges: [{ text: "vision", color: "#bb9af7", text_color: "#0b0e14" }]
    }), Ye(e);
  }
}, Vd = /* @__PURE__ */ Pt(() => Promise.resolve().then(() => Ag)), rs = [
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
function bi(e) {
  if (!e) return;
  const t = e._filStyleMixerState;
  if (t != null && t.ui && (t.ui.slotVersion = (t.ui.slotVersion ?? 0) + 1), !e._allInputs && Array.isArray(e.inputs) && (e._allInputs = [...e.inputs]), !e._allInputs) return;
  const n = (s) => {
    const a = e._allInputs.find((r) => r && r.name === s);
    return !!(a && a.link != null);
  }, l = n("image_2"), i = n("image_3"), o = /* @__PURE__ */ new Set();
  o.add("config"), o.add("fusion_mode"), o.add("base_prompt"), o.add("image_1"), o.add("image_2"), l && o.add("image_3"), i && o.add("image_4"), e.inputs = e._allInputs.filter((s) => s && o.has(s.name)), typeof e.setSize == "function" && typeof e.computeSize == "function" && e.setSize(e.computeSize()), typeof e.setDirtyCanvas == "function" && e.setDirtyCanvas(!0, !0);
}
const $d = {
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
      const c = i == null ? void 0 : i.apply(this, r), u = this, d = {}, m = {};
      for (const _ of rs) {
        const A = oe(u, _);
        if (!A) continue;
        const w = _.includes("weight") ? "number" : "string", C = ge(A, w, w === "number" ? 0.5 : "(None)");
        d[_] = C, m[_] = C, A.hidden = !0;
      }
      const h = {
        nodeState: Wt(u, m),
        initialValues: d,
        ui: { slotVersion: 0 }
      };
      Object.defineProperty(h, "node", { value: u, enumerable: !1, configurable: !0 });
      const p = /* @__PURE__ */ Gt(h);
      return u._filStyleMixerState = p, Nt(u, "fil_style_mixer_view", Vd, { state: p, height: 480 }), bi(this), c;
    };
    const o = l.onConfigure;
    l.onConfigure = function(...r) {
      const c = o == null ? void 0 : o.apply(this, r), u = this, d = u._filStyleMixerState;
      if (d)
        for (const m of rs) {
          const h = oe(u, m);
          if (!h) continue;
          const p = m.includes("weight") ? "number" : "string", _ = p === "number" ? 0.5 : "(None)";
          d.nodeState[m] = ge(h, p, _);
        }
      return bi(this), c;
    };
    const s = l.onConnectionsChange;
    l.onConnectionsChange = function(r, c, u, d, m) {
      const h = s == null ? void 0 : s.apply(this, [r, c, u, d, m]);
      return (r === 1 || (r == null ? void 0 : r.name) === "input") && bi(this), h;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return Tt(this), a == null ? void 0 : a.apply(this, r);
    }, Ye(e);
  }
}, Bd = /* @__PURE__ */ Pt(() => Promise.resolve().then(() => Og)), us = [
  "method",
  "strength",
  "saturate",
  "temperature",
  "tint",
  "preserve_skin"
], Hd = {
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
      const r = i == null ? void 0 : i.apply(this, a), c = this, u = {}, d = {};
      for (const p of us) {
        const _ = oe(c, p);
        if (!_) continue;
        const A = p === "preserve_skin" ? "boolean" : p === "method" ? "string" : "number", b = ge(_, A, A === "boolean" ? !1 : A === "number" ? 0 : "Full Auto");
        u[p] = b, d[p] = b, _.hidden = !0;
      }
      const m = {
        nodeState: Wt(c, d),
        initialValues: u,
        ui: {}
      };
      Object.defineProperty(m, "node", { value: c, enumerable: !1, configurable: !0 });
      const h = /* @__PURE__ */ Gt(m);
      return c._filColorWizardState = h, Nt(c, "fil_color_wizard_view", Bd, { state: h, height: 320 }), r;
    };
    const o = l.onConfigure;
    l.onConfigure = function(...a) {
      const r = o == null ? void 0 : o.apply(this, a), c = this, u = c._filColorWizardState;
      if (u)
        for (const d of us) {
          const m = oe(c, d);
          if (!m) continue;
          const h = d === "preserve_skin" ? "boolean" : d === "method" ? "string" : "number", p = h === "boolean" ? !1 : h === "number" ? 0 : "Full Auto";
          u.nodeState[d] = ge(m, h, p);
        }
      return r;
    };
    const s = l.onRemoved;
    l.onRemoved = function(...a) {
      return Tt(this), s == null ? void 0 : s.apply(this, a);
    }, Ye(e);
  }
}, Ud = [
  yd,
  Sd,
  Cd,
  Md,
  kd,
  Id,
  Dd,
  Pd,
  Td,
  Ed,
  Od,
  $d,
  Hd
], Va = Object.fromEntries(
  Ud.map((e) => [e.id, e])
), fl = /* @__PURE__ */ se({});
let cs = !1;
const El = /* @__PURE__ */ io("fil/help", () => {
  const e = /* @__PURE__ */ se(null);
  function t(a) {
    for (const [r, c] of Object.entries(a))
      fl.value[r] = c;
  }
  function n() {
    cs || (cs = !0, Promise.resolve().then(() => $g).then(({ HELP_DEFAULTS: a }) => t(a)).catch((a) => console.warn("[FiL_Design_ImageMind] help defaults import failed:", a)));
  }
  function l(a) {
    return fl.value[a];
  }
  function i() {
    return Object.values(fl.value);
  }
  function o(a) {
    n(), e.value = a;
  }
  function s() {
    e.value = null;
  }
  return {
    registry: fl,
    activeHelpId: e,
    ensureHelpDefaultsInjected: n,
    registerAll: t,
    get: l,
    list: i,
    value_open: o,
    value_close: s
  };
}), Gd = {
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
function $a(e) {
  return Gd[e];
}
const Wd = ["title", "aria-label", "innerHTML"], jd = /* @__PURE__ */ ye({
  name: "FilIcon",
  __name: "FilIcon",
  props: {
    name: {},
    size: { default: 16 },
    title: {}
  },
  setup(e) {
    return (t, n) => (F(), P("span", {
      class: "fil-icon",
      style: et({ width: e.size + "px", height: e.size + "px" }),
      title: e.title,
      role: "img",
      "aria-label": e.title ?? e.name,
      innerHTML: f($a)(e.name)
    }, null, 12, Wd));
  }
}), It = /* @__PURE__ */ Se(jd, [["__scopeId", "data-v-dfb78d9f"]]), Kd = ["aria-label"], zd = { class: "fil-modal-header" }, qd = { class: "fil-modal-title" }, Xd = { class: "fil-modal-body" }, Yd = /* @__PURE__ */ ye({
  __name: "FilModal",
  props: /* @__PURE__ */ We({
    title: {},
    width: { default: "520px" },
    closeOnEsc: { type: Boolean, default: !0 },
    closeOnBackdrop: { type: Boolean, default: !0 }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: /* @__PURE__ */ We(["close"], ["update:open"]),
  setup(e, { emit: t }) {
    const n = e, l = lt(e, "open"), i = t, o = /* @__PURE__ */ se(null), s = /* @__PURE__ */ se(null);
    function a() {
      l.value = !1, i("close");
    }
    function r(m) {
      n.closeOnBackdrop && m.target === m.currentTarget && a();
    }
    function c(m) {
      n.closeOnEsc && m.key === "Escape" && a(), m.key === "Tab" && u(m);
    }
    function u(m) {
      if (!o.value) return;
      const h = d(o.value);
      if (!h.length) {
        m.preventDefault();
        return;
      }
      const p = h[0], _ = h[h.length - 1];
      m.shiftKey ? document.activeElement === p && (m.preventDefault(), _.focus()) : document.activeElement === _ && (m.preventDefault(), p.focus());
    }
    function d(m) {
      return Array.from(
        m.querySelectorAll(
          'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((h) => !h.disabled && h.offsetParent !== null);
    }
    return Te(
      l,
      (m) => {
        var h;
        m ? (s.value = document.activeElement, Sn(() => {
          var _;
          (_ = (o.value ? d(o.value) : [])[0] || o.value) == null || _.focus();
        })) : ((h = s.value) == null || h.focus(), s.value = null);
      }
    ), ll(() => {
      document.addEventListener("keydown", c);
    }), Yl(() => {
      document.removeEventListener("keydown", c);
    }), (m, h) => (F(), Ae(Ys, { to: "body" }, [
      $(ac, { name: "fil-modal" }, {
        default: Ht(() => [
          l.value ? (F(), P("div", {
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
              style: et({ maxWidth: e.width })
            }, [
              D("div", zd, [
                D("span", qd, z(e.title), 1),
                D("button", {
                  class: "fil-modal-close",
                  title: "Close",
                  onClick: a
                }, [
                  $(It, {
                    name: "close",
                    size: 14
                  })
                ])
              ]),
              D("div", Xd, [
                _u(m.$slots, "default", {}, void 0, !0)
              ])
            ], 4)
          ], 8, Kd)) : ee("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), bn = /* @__PURE__ */ Se(Yd, [["__scopeId", "data-v-0b20f2bd"]]), Jd = { class: "fil-help-title" }, Qd = {
  key: 0,
  class: "fil-help-body"
}, Zd = { key: 1 }, ef = {
  key: 2,
  class: "fil-help-table"
}, tf = {
  key: 3,
  class: "fil-help-code"
}, nf = {
  key: 1,
  class: "fil-help-empty"
}, lf = /* @__PURE__ */ ye({
  __name: "FilHelpPopup",
  setup(e) {
    const t = El(), n = X(() => {
      const i = t.activeHelpId;
      return i ? t.get(i) ?? null : null;
    }), l = X({
      get: () => t.activeHelpId !== null,
      set: (i) => {
        i || t.value_close();
      }
    });
    return Te(n, (i) => {
      i || t.value_close();
    }), (i, o) => (F(), Ae(bn, {
      open: l.value,
      "onUpdate:open": o[0] || (o[0] = (s) => l.value = s),
      title: "FiL LLM Help",
      width: "600px",
      onClose: o[1] || (o[1] = (s) => f(t).value_close())
    }, {
      default: Ht(() => {
        var s;
        return [
          n.value ? (F(), P(ce, { key: 0 }, [
            D("h2", Jd, z(n.value.title), 1),
            n.value.body ? (F(), P("p", Qd, z(n.value.body), 1)) : ee("", !0),
            (s = n.value.bullets) != null && s.length ? (F(), P("ul", Zd, [
              (F(!0), P(ce, null, Me(n.value.bullets, (a, r) => (F(), P("li", {
                key: r,
                class: "fil-help-bullet"
              }, [
                $(It, {
                  name: "chevronRight",
                  size: 12
                }),
                D("span", null, z(a), 1)
              ]))), 128))
            ])) : ee("", !0),
            n.value.table ? (F(), P("table", ef, [
              D("thead", null, [
                D("tr", null, [
                  (F(!0), P(ce, null, Me(n.value.table.headers, (a) => (F(), P("th", { key: a }, z(a), 1))), 128))
                ])
              ]),
              D("tbody", null, [
                (F(!0), P(ce, null, Me(n.value.table.rows, (a, r) => (F(), P("tr", { key: r }, [
                  (F(!0), P(ce, null, Me(a, (c, u) => (F(), P("td", { key: u }, z(c), 1))), 128))
                ]))), 128))
              ])
            ])) : ee("", !0),
            n.value.code ? (F(), P("pre", tf, [
              D("code", null, z(n.value.code), 1)
            ])) : ee("", !0)
          ], 64)) : (F(), P("p", nf, "No help available for this node."))
        ];
      }),
      _: 1
    }, 8, ["open"]));
  }
}), of = /* @__PURE__ */ Se(lf, [["__scopeId", "data-v-536c1547"]]);
let vi = null;
function sf(e) {
  if (vi) return;
  const t = document.createElement("div");
  t.id = "__fil_help_popup_host", document.body.appendChild(t), vi = lo(of).use(oo()), vi.mount(t), console.info("[FiL_Design_ImageMind] help popup mounted");
}
const af = "FiL_Design_ImageMind.Shortcuts.Enabled", rf = "__cheatsheet__", uf = [
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
    function: Bi
  },
  {
    id: "FiL_Design_ImageMind.focusSearch",
    label: "FiL_Design_ImageMind — Focus add-node search",
    icon: "/",
    function: Ba
  }
], df = [
  { commandId: "FiL_Design_ImageMind.helpCheatsheet", combo: { key: "?", shift: !0 } },
  // NB: Ctrl+Shift+K is reserved by core (Workspace.ToggleBottomPanel) — binding it
  // via the native API throws a duplicate-keybinding error, so we don't register it.
  { commandId: "FiL_Design_ImageMind.focusSearch", combo: { key: "/" } }
];
function ff(e) {
  if (!e || typeof e != "object") return !1;
  const t = String(e.tagName || "").toLowerCase();
  return t === "input" || t === "textarea" || t === "select" || e.isContentEditable === !0;
}
function pf() {
  for (const e of uf) {
    const t = document.querySelector(e);
    if (t) return t;
  }
  return null;
}
function Bi() {
  var t;
  const e = El();
  e.ensureHelpDefaultsInjected(), (t = e.value_open) == null || t.call(e, rf);
}
function Ba() {
  const e = pf();
  if (!e) {
    Lt.info("ComfyUI search field not found");
    return;
  }
  try {
    e.focus(), "select" in e && e.select();
  } catch {
  }
}
function mf(e) {
  if (!!e.extensionManager) {
    console.info("[FiL_Design_ImageMind] shortcuts registered via native commands API");
    return;
  }
  window.addEventListener("keydown", (n) => hf(n, e), !0), console.info("[FiL_Design_ImageMind] shortcuts installed (fallback keydown handler)");
}
function hf(e, t) {
  var o, s, a, r, c, u, d, m, h;
  let n = !0;
  try {
    n = !!(((r = (a = (s = (o = globalThis.app) == null ? void 0 : o.extensionManager) == null ? void 0 : s.setting) == null ? void 0 : a.get) == null ? void 0 : r.call(a, af, !0)) ?? !0);
  } catch {
  }
  if (!n) return;
  const l = e.target, i = ff(l);
  if (e.key === "Escape") {
    try {
      const p = El();
      (c = p.value_close) == null || c.call(p);
    } catch {
    }
    i && ((u = l.blur) == null || u.call(l)), (d = e.preventDefault) == null || d.call(e);
    return;
  }
  if (!i) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "K" || e.key === "k")) {
      Bi(), e.preventDefault();
      return;
    }
    if (e.key === "?" || e.shiftKey && e.key === "/") {
      if (e.shiftKey) Bi();
      else {
        const p = t.canvas, _ = (p == null ? void 0 : p.selected_nodes) ?? {}, A = Object.values(_).filter(Boolean);
        if (A.length === 1) {
          const w = ((m = A[0]) == null ? void 0 : m.comfyClass) ?? "default", b = El();
          b.ensureHelpDefaultsInjected(), (h = b.value_open) == null || h.call(b, w);
        } else
          Lt.info("Select exactly one FiL_Design_ImageMind node, then press ?");
      }
      e.preventDefault();
      return;
    }
    e.key === "/" && !e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey && (Ba(), e.preventDefault());
  }
}
function gf(e) {
  mf(e);
}
let ds = !1;
function _f() {
  ds || typeof window > "u" || (ds = !0, window.addEventListener(
    "wheel",
    (e) => {
      if (e.ctrlKey || e.metaKey) return;
      if (Oa(e.target, e.deltaX, e.deltaY)) {
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
const Ha = "FiL_Design_ImageMind", vn = "🎨 FiL ImageMind", vt = "/fil_design_imagemind", ln = `[${Ha}]`, bf = `${Ha}.UI`;
async function Ua(e) {
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
function Ga() {
  var t;
  const e = globalThis;
  if ((t = e.api) != null && t.fetchApi) return (n, l) => e.api.fetchApi(n, l);
  if (e.fetch) return e.fetch.bind(globalThis);
  throw new Error(`${ln} no HTTP transport (api.fetchApi or window.fetch undefined)`);
}
async function Nn(e) {
  const t = await Ga()(e);
  return Ua(t);
}
async function bl(e, t) {
  const n = await Ga()(e, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  });
  return Ua(n);
}
const rn = {
  loadAccounts: () => Nn(`${vt}/auth`),
  saveAccounts: (e) => bl(`${vt}/auth`, {
    accounts: e
  }),
  loadModels: (e, t = !1) => Nn(`${vt}/models/${encodeURIComponent(e)}${t ? "?force=1" : ""}`),
  probe: (e, t = "") => bl(`${vt}/provider_probe`, { provider: e, model: t }),
  listProviders: () => Nn(`${vt}/providers`),
  saveCompareImage: (e) => bl(`${vt}/compare/save`, { image: e }),
  nodeContracts: () => Nn(`${vt}/node_contracts`)
}, vf = 3e5, yf = ["ollama", "lmstudio", "openai", "google", "groq", "openrouter", "cloudflare"], dn = yf, so = /* @__PURE__ */ io("fil/providers", () => {
  const e = /* @__PURE__ */ se({}), t = /* @__PURE__ */ se({}), n = /* @__PURE__ */ se({}), l = /* @__PURE__ */ se({}), i = /* @__PURE__ */ se(null), o = X(() => Object.fromEntries(
    Object.entries(e.value).filter(([, w]) => (w == null ? void 0 : w.configured) || (w == null ? void 0 : w.account_id) || (w == null ? void 0 : w.base_url))
  ));
  async function s() {
    try {
      const w = await rn.loadAccounts();
      e.value = w.accounts || {}, i.value = null;
    } catch (w) {
      i.value = w instanceof Error ? w.message : String(w);
    }
  }
  async function a(w, b) {
    try {
      const C = await rn.saveAccounts({ [w]: b });
      e.value = C.accounts || {}, i.value = null, u(w, !0);
    } catch (C) {
      throw i.value = C instanceof Error ? C.message : String(C), C;
    }
  }
  async function r(w) {
    const b = await rn.saveAccounts({
      [w]: { delete: !0 }
    });
    e.value = b.accounts || {};
  }
  async function c(w) {
    await a(w, {});
    try {
      await r(w);
    } catch (b) {
      i.value = b instanceof Error ? b.message : String(b);
    }
  }
  async function u(w, b = !1) {
    const C = t.value[w];
    if (C && !b && !C.error && C.cachedAt > 0 && Date.now() - C.cachedAt < vf)
      return C.list;
    C ? C.loading = !0 : t.value[w] = { list: [], visionModels: [], cachedAt: 0, loading: !0 };
    try {
      const v = await rn.loadModels(w, b), y = v.models || [];
      return t.value[w] = {
        list: y,
        visionModels: v.vision_models || [],
        cachedAt: Date.now(),
        loading: !1
      }, v.status && v.status !== "available" && (t.value[w].error = v.message || v.status), y;
    } catch (v) {
      const y = v instanceof Error ? v.message : String(v);
      throw t.value[w] = {
        list: [],
        visionModels: [],
        cachedAt: 0,
        loading: !1,
        error: y
      }, i.value = y, v;
    }
  }
  function d(w) {
    const b = t.value[w];
    if (!(b != null && b.cachedAt)) return null;
    const C = Date.now() - b.cachedAt, v = Math.floor(C / 1e3);
    return v < 60 ? `${v}s` : v < 3600 ? `${Math.floor(v / 60)}m` : `${Math.floor(v / 3600)}h`;
  }
  async function m(w, b = "") {
    try {
      const C = await rn.probe(w, b);
      return n.value[w] = C, C;
    } catch (C) {
      i.value = C instanceof Error ? C.message : String(C);
      return;
    }
  }
  async function h() {
    try {
      const w = await rn.listProviders();
      l.value = w.providers || {};
    } catch {
    }
  }
  function p(w) {
    var b;
    return ((b = t.value[w]) == null ? void 0 : b.list) ?? [];
  }
  function _(w) {
    var b;
    return ((b = t.value[w]) == null ? void 0 : b.visionModels) ?? [];
  }
  function A(w) {
    var b;
    return !!((b = t.value[w]) != null && b.loading);
  }
  return {
    accounts: e,
    modelsByProvider: t,
    probeState: n,
    displayNames: l,
    lastError: i,
    configuredProviders: o,
    PROVIDER_LIST: dn,
    loadAccounts: s,
    saveAccount: a,
    deleteAccount: c,
    deleteAccountRaw: r,
    loadModels: u,
    probe: m,
    loadDisplayNames: h,
    modelsFor: p,
    visionModelsFor: _,
    isLoading: A,
    cachedAgeLabel: d
  };
}), wf = ["title", "disabled", "aria-disabled"], Sf = {
  key: 0,
  class: "fil-w-btn-spinner"
}, xf = ["innerHTML"], Cf = { key: 2 }, Af = /* @__PURE__ */ ye({
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
    const n = e, l = X(() => n.icon ? $a(n.icon) : ""), i = t, o = X(() => [
      "fil-w-btn",
      n.variant === "accent" && "fil-w-btn-accent",
      n.variant === "danger" && "fil-w-btn-danger",
      n.variant === "icon" && "fil-w-btn-icon",
      n.variant === "full" && "fil-w-btn-full",
      n.variant === "sm" && "fil-w-btn-sm",
      n.flashing && "is-flashing",
      n.loading && "is-loading"
    ]), s = X(() => n.disabled || n.loading);
    function a(r) {
      s.value || i("click", r);
    }
    return (r, c) => (F(), P("button", {
      class: me(o.value),
      title: e.title,
      disabled: s.value,
      "aria-disabled": s.value || void 0,
      onClick: a
    }, [
      e.loading ? (F(), P("span", Sf)) : ee("", !0),
      e.icon && !e.loading ? (F(), P("span", {
        key: 1,
        class: "fil-w-btn-glyph",
        innerHTML: l.value
      }, null, 8, xf)) : ee("", !0),
      e.label ? (F(), P("span", Cf, z(e.loading ? "" : e.label), 1)) : ee("", !0)
    ], 10, wf));
  }
}), Ge = /* @__PURE__ */ Se(Af, [["__scopeId", "data-v-1c6537e0"]]), Ol = {
  ollama: "Ollama",
  lmstudio: "LM Studio",
  openai: "OpenAI",
  groq: "Groq",
  google: "Google AI",
  openrouter: "OpenRouter",
  cloudflare: "Cloudflare"
}, ao = {
  ollama: "provider-ollama",
  lmstudio: "provider-lmstudio",
  openai: "provider-openai",
  groq: "provider-groq",
  google: "provider-google",
  openrouter: "provider-openrouter",
  cloudflare: "provider-cloudflare"
}, Mf = { class: "fil-pm-root" }, Ff = ["onClick"], kf = { class: "fil-pm-icon" }, Lf = { class: "fil-pm-name" }, If = {
  key: 0,
  class: "fil-pm-disp"
}, Df = ["title"], Pf = { class: "fil-pm-fields" }, Rf = { class: "fil-pm-field" }, Nf = ["onUpdate:modelValue", "placeholder", "onKeydown"], Tf = { class: "fil-pm-field" }, Ef = ["onUpdate:modelValue", "onKeydown"], Of = {
  key: 0,
  class: "fil-pm-field"
}, Vf = ["onUpdate:modelValue", "onKeydown"], $f = { class: "fil-pm-actions" }, Bf = {
  key: 0,
  class: "fil-pm-age"
}, Hf = {
  key: 0,
  class: "fil-pm-err"
}, Uf = {
  key: 1,
  class: "fil-pm-err"
}, Gf = {
  key: 2,
  class: "fil-pm-models"
}, Wf = {
  key: 0,
  class: "fil-pm-vision-badge",
  title: "Vision-capable"
}, jf = {
  key: 3,
  class: "fil-pm-err fil-pm-global-err"
}, Kf = /* @__PURE__ */ ye({
  __name: "ProviderManager",
  setup(e) {
    const t = so(), n = /* @__PURE__ */ se(
      Object.fromEntries(dn.map((v) => [v, { key: "", base_url: "", account_id: "" }]))
    ), l = /* @__PURE__ */ se({}), i = /* @__PURE__ */ se({}), o = /* @__PURE__ */ se({}), s = /* @__PURE__ */ se({});
    ll(async () => {
      await Promise.all([t.loadAccounts(), t.loadDisplayNames()]);
      for (const v of dn) {
        const y = t.accounts[v];
        n.value[v] = {
          // Stored keys are never echoed back by GET /fil_design_imagemind/auth (write-only
          // by the security contract) — the field always starts empty and the
          // `configured` flag drives the "a key is saved" UI state instead.
          key: "",
          base_url: (y == null ? void 0 : y.base_url) ?? "",
          account_id: (y == null ? void 0 : y.account_id) ?? ""
        };
      }
      for (const v of dn) {
        const y = t.accounts[v];
        (y != null && y.configured || y != null && y.local || y != null && y.base_url) && w(v);
      }
    });
    const a = Ol, r = ao;
    function c(v) {
      return { "fil-pm-has-val": v.length > 0 };
    }
    function u(v) {
      return v === "cloudflare";
    }
    function d(v) {
      var G;
      const y = t.accounts[v], S = t.modelsByProvider[v], T = ((S == null ? void 0 : S.list.length) ?? 0) > 0 && !(S != null && S.error);
      return ((G = t.probeState[v]) == null ? void 0 : G.status) === "available" || i.value[v] || T ? "connected" : y != null && y.configured || y != null && y.local || y != null && y.base_url ? "configured" : "off";
    }
    const m = {
      connected: "Connected",
      configured: "Configured",
      off: "Not connected"
    };
    function h(v) {
      return d(v) === "off" && !s.value[v];
    }
    function p(v) {
      d(v) === "off" && (s.value[v] = !s.value[v]);
    }
    async function _(v) {
      const y = n.value[v];
      await t.saveAccount(v, {
        key: y.key || null,
        base_url: y.base_url || null,
        account_id: y.account_id || null
      }), y.key = "";
    }
    async function A(v) {
      n.value[v] = { key: "", base_url: "", account_id: "" }, await t.deleteAccount(v);
    }
    async function w(v) {
      l.value[v] = !0, i.value[v] = !1;
      try {
        const y = await t.probe(v, "");
        i.value[v] = (y == null ? void 0 : y.status) === "available";
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
    const C = (v) => {
      const y = n.value[v];
      if (!y) return !1;
      const S = t.accounts[v];
      return y.key !== "" ? !0 : y.base_url !== ((S == null ? void 0 : S.base_url) ?? "") || y.account_id !== ((S == null ? void 0 : S.account_id) ?? "");
    };
    return (v, y) => (F(), P("div", Mf, [
      (F(!0), P(ce, null, Me(f(dn), (S) => {
        var T, G, E, W, J, L;
        return F(), P("div", {
          key: S,
          class: me(["fil-pm-card", { "fil-pm-card--collapsed": h(S) }])
        }, [
          D("div", {
            class: me(["fil-pm-header", { "fil-pm-header--clickable": d(S) === "off" }]),
            onClick: (I) => p(S)
          }, [
            D("span", kf, [
              $(It, {
                name: f(r)[S],
                size: 20
              }, null, 8, ["name"])
            ]),
            D("span", Lf, z(f(a)[S]), 1),
            f(t).displayNames[S] ? (F(), P("span", If, "(" + z(f(t).displayNames[S]) + ")", 1)) : ee("", !0),
            D("span", {
              class: me(["fil-pm-status", `fil-pm-status--${d(S)}`]),
              title: m[d(S)]
            }, [
              y[0] || (y[0] = D("span", { class: "fil-pm-dot" }, null, -1)),
              Il(" " + z(m[d(S)]), 1)
            ], 10, Df),
            d(S) === "off" ? (F(), P("span", {
              key: 1,
              class: me(["fil-pm-chevron", { "fil-pm-chevron--open": s.value[S] }])
            }, [
              $(It, {
                name: "chevronRight",
                size: 12
              })
            ], 2)) : ee("", !0)
          ], 10, Ff),
          h(S) ? ee("", !0) : (F(), P(ce, { key: 0 }, [
            D("div", Pf, [
              D("label", Rf, [
                y[1] || (y[1] = D("span", { class: "fil-pm-field-label" }, "API Key", -1)),
                tt(D("input", {
                  "onUpdate:modelValue": (I) => n.value[S].key = I,
                  type: "password",
                  class: me(["fil-pm-input", c(n.value[S].key)]),
                  placeholder: (T = f(t).accounts[S]) != null && T.configured ? "•••••••• (saved)" : "sk-...",
                  onKeydown: _l((I) => _(S), ["enter"])
                }, null, 42, Nf), [
                  [ht, n.value[S].key]
                ])
              ]),
              D("label", Tf, [
                y[2] || (y[2] = D("span", { class: "fil-pm-field-label" }, "Base URL", -1)),
                tt(D("input", {
                  "onUpdate:modelValue": (I) => n.value[S].base_url = I,
                  type: "text",
                  class: me(["fil-pm-input", c(n.value[S].base_url)]),
                  placeholder: "http://localhost:11434",
                  onKeydown: _l((I) => _(S), ["enter"])
                }, null, 42, Ef), [
                  [ht, n.value[S].base_url]
                ])
              ]),
              u(S) ? (F(), P("label", Of, [
                y[3] || (y[3] = D("span", { class: "fil-pm-field-label" }, "Account ID", -1)),
                tt(D("input", {
                  "onUpdate:modelValue": (I) => n.value[S].account_id = I,
                  type: "text",
                  class: me(["fil-pm-input", c(n.value[S].account_id)]),
                  onKeydown: _l((I) => _(S), ["enter"])
                }, null, 42, Vf), [
                  [ht, n.value[S].account_id]
                ])
              ])) : ee("", !0)
            ]),
            D("div", $f, [
              $(Ge, {
                variant: "accent",
                label: C(S) ? "Save" : "Saved",
                disabled: !C(S),
                onClick: (I) => _(S)
              }, null, 8, ["label", "disabled", "onClick"]),
              !C(S) && f(t).cachedAgeLabel(S) ? (F(), P("span", Bf, z(f(t).cachedAgeLabel(S)) + " ago ", 1)) : ee("", !0),
              $(Ge, {
                variant: "danger",
                label: "Delete",
                disabled: !((G = f(t).accounts[S]) != null && G.configured) && !((E = f(t).accounts[S]) != null && E.base_url),
                onClick: (I) => A(S)
              }, null, 8, ["disabled", "onClick"]),
              $(Ge, {
                variant: "standard",
                label: "Probe",
                loading: l.value[S],
                flashing: i.value[S],
                disabled: !((W = f(t).accounts[S]) != null && W.local) && !((J = f(t).accounts[S]) != null && J.configured) && !n.value[S].key && !n.value[S].base_url,
                onClick: (I) => w(S)
              }, null, 8, ["loading", "flashing", "disabled", "onClick"]),
              $(Ge, {
                variant: "standard",
                label: "Load Models",
                loading: o.value[S],
                onClick: (I) => b(S)
              }, null, 8, ["loading", "onClick"])
            ]),
            (L = f(t).modelsByProvider[S]) != null && L.error ? (F(), P("div", Hf, z(f(t).modelsByProvider[S].error), 1)) : ee("", !0),
            f(t).probeState[S] && f(t).probeState[S].status !== "available" ? (F(), P("div", Uf, z(f(t).probeState[S].message), 1)) : ee("", !0),
            f(t).modelsFor(S).length > 0 ? (F(), P("div", Gf, [
              (F(!0), P(ce, null, Me(f(t).modelsFor(S), (I) => (F(), P("span", {
                class: "fil-pm-model-tag",
                key: I
              }, [
                Il(z(I) + " ", 1),
                f(t).visionModelsFor(S).includes(I) ? (F(), P("span", Wf, "👁")) : ee("", !0)
              ]))), 128))
            ])) : ee("", !0),
            f(t).lastError ? (F(), P("div", jf, z(f(t).lastError), 1)) : ee("", !0)
          ], 64))
        ], 2);
      }), 128))
    ]));
  }
}), zf = /* @__PURE__ */ Se(Kf, [["__scopeId", "data-v-329149a3"]]);
let In = null;
function qf(e) {
  In && (In.unmount(), In = null), In = lo(zf).use(oo()), In.mount(e), console.info("[FiL_Design_ImageMind] provider manager mounted");
}
function Xf(e) {
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
    render: (n) => qf(n)
  }), console.info("[FiL_Design_ImageMind] provider manager sidebar tab registered");
}
const Yf = [
  {
    id: "FiL_Design_ImageMind.DefaultProvider",
    name: "Default LLM Provider",
    type: "combo",
    defaultValue: "Ollama",
    options: ["Ollama", "LM Studio", "Groq", "Google AI", "OpenRouter", "Cloudflare"],
    category: [vn, "General"],
    tooltip: "Default AI Provider pre-selected in new Provider Loader nodes."
  },
  {
    id: "FiL_Design_ImageMind.RequestTimeout",
    name: "Request Timeout (seconds)",
    type: "number",
    defaultValue: 60,
    attrs: { min: 5, max: 600, step: 5 },
    category: [vn, "Network"],
    tooltip: "Global timeout in seconds for API calls to local/cloud LLM providers."
  },
  {
    id: "FiL_Design_ImageMind.AutoCleanVRAM",
    name: "Auto VRAM cleanup on completion",
    type: "boolean",
    defaultValue: !1,
    category: [vn, "Performance"],
    tooltip: "Automatically purge empty torch cache and PyTorch VRAM after node execution."
  }
], Jf = [
  {
    id: "FiL_Design_ImageMind.Language",
    name: "Language",
    type: "combo",
    defaultValue: "en",
    options: ["en", "ru"],
    tooltip: "UI language for FiL_Design_ImageMind node tooltips and labels (English / Russian).",
    category: [vn, "Language"]
  }
];
function Wa(e) {
  bl(`${vt}/log_level`, { level: String(e) }).catch(() => {
  });
}
const Qf = [
  {
    id: "FiL_Design_ImageMind.Logging.Level",
    name: "Log level",
    type: "combo",
    defaultValue: "WARNING",
    options: ["DEBUG", "INFO", "WARNING", "ERROR"],
    category: [vn, "Logging"],
    tooltip: "Python backend log verbosity for this node pack.",
    onChange: Wa
  }
];
function Zf(e) {
  const t = e("FiL_Design_ImageMind.Logging.Level", "WARNING");
  Wa(t);
}
const ja = {
  Default: "default",
  Cyberpunk: "cyberpunk",
  Fallout: "fallout",
  Pipboy: "pipboy",
  "FiL Green": "travelmate"
};
function ep(e) {
  const t = ja[String(e)] ?? "default";
  Da(t);
  const n = globalThis.app;
  n && ld(n);
}
const tp = [
  {
    id: "FiL_Design_ImageMind.Theme",
    name: "Node theme",
    type: "combo",
    defaultValue: "Default",
    options: ["Default", "Cyberpunk", "Fallout", "Pipboy", "FiL Green"],
    category: [vn, "Appearance", "Theme"],
    tooltip: "Recolors every FiL_Design_ImageMind node panel and adds a small themed flourish (neon glow for Cyberpunk, a CRT scanline texture for Pipboy and Fallout, acid-lime glow for Travelmate). Applies instantly, no reload.",
    onChange: ep
  }
];
function np(e) {
  const t = e("FiL_Design_ImageMind.Theme", "Default");
  Da(ja[t] ?? "default");
}
const lp = [
  ...Yf,
  ...Jf,
  ...Qf,
  ...tp
];
function Hi(e, t, n) {
  var i, o, s, a, r, c, u, d;
  const l = n ?? globalThis;
  try {
    const m = (s = (o = (i = l.app) == null ? void 0 : i.extensionManager) == null ? void 0 : o.setting) == null ? void 0 : s.get;
    if (typeof m == "function") return m(e, t);
    const h = ((r = (a = l.ui) == null ? void 0 : a.settings) == null ? void 0 : r.getSettingValue) ?? ((d = (u = (c = globalThis.app) == null ? void 0 : c.ui) == null ? void 0 : u.settings) == null ? void 0 : d.getSettingValue);
    if (typeof h == "function") return h(e, t);
  } catch (m) {
    console.warn(`[FiL_Design_ImageMind] setting read failed for "${e}":`, m);
  }
  return t;
}
_f();
function ip(e) {
  var t, n;
  try {
    const l = globalThis.app, i = ((t = l == null ? void 0 : l.graph) == null ? void 0 : t._nodes) ?? [];
    for (const o of i) {
      const s = o;
      if (s.comfyClass === "FiLOpticScanner") {
        const a = (n = s.inputs) == null ? void 0 : n.find((r) => r.name === "config");
        (!a || a.link == null) && console.warn(`${ln} Optic Scanner #${s.id} has no Provider Loader wired to its "config" slot — execution will fail.`);
      }
    }
  } catch (l) {
    console.warn(`${ln} preflight fallback:`, l);
  }
  return e;
}
function op(e) {
  return {
    name: bf,
    // Declarative settings — registered BEFORE setup so the panel renders
    // even if a later installer throws.
    settings: lp,
    // Declarative shortcuts — modern ComfyUI registers these through its
    // native command palette / keybinding system. The keydown fallback in
    // installShortcuts only kicks in when this API is unavailable.
    commands: cf,
    keybindings: df,
    async setup() {
      const t = [
        () => sf(),
        () => gf(e),
        () => Xf(e),
        () => Zf((n, l) => Hi(n, l, e)),
        () => np((n, l) => Hi(n, l, e))
      ];
      for (const n of t)
        try {
          n();
        } catch (l) {
          console.warn(`${ln} installer ${n.name || "anonymous"} failed:`, l);
        }
    },
    getCustomWidgets() {
      return {};
    },
    async beforeRegisterNodeDef(t, n) {
      const l = Va[n.name];
      if (l)
        try {
          await l.register(t, n);
        } catch (i) {
          console.warn(`${ln} failed to register "${n.name}":`, i);
        }
    },
    async graphToPrompt(t) {
      return ip(t);
    }
  };
}
async function sp() {
  if (typeof fetch > "u") return;
  let e;
  try {
    e = await fetch(`${vt}/node_contracts`);
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
  const n = new Set(Object.keys(t.node_ids ?? {})), l = new Set(Object.keys(Va));
  for (const i of n)
    l.has(i) || console.warn(`${ln} server expects "${i}" but local JS does not register it`);
  for (const i of l)
    n.has(i) || console.warn(`${ln} JS registers "${i}" but server does not expose a contract`);
}
zc();
ud();
sp().catch((e) => {
  console.warn("[FiL_Design_ImageMind] contract self-check failed:", e);
});
const Ka = op(hs);
hs.registerExtension(Ka);
console.info(`[FiL_Design_ImageMind] extension registered as "${Ka.name}"`);
const ap = ["aria-checked", "disabled", "title", "onClick"], rp = /* @__PURE__ */ ye({
  __name: "FilChipGrid",
  props: /* @__PURE__ */ We({
    options: {},
    columns: { default: 3 },
    disabled: { type: Boolean }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = lt(e, "modelValue"), l = X(() => ({
      gridTemplateColumns: `repeat(${Math.max(1, t.columns)}, minmax(0, 1fr))`
    }));
    function i(o) {
      t.disabled || o !== n.value && (n.value = o);
    }
    return (o, s) => (F(), P("div", {
      class: "fil-w-chips",
      style: et(l.value),
      role: "radiogroup"
    }, [
      (F(!0), P(ce, null, Me(e.options, (a) => (F(), P("button", {
        key: a,
        type: "button",
        role: "radio",
        class: me(["fil-w-chip", { active: a === n.value, disabled: e.disabled }]),
        "aria-checked": a === n.value,
        disabled: e.disabled,
        title: a,
        onClick: (r) => i(a)
      }, z(a), 11, ap))), 128))
    ], 4));
  }
}), fs = /* @__PURE__ */ Se(rp, [["__scopeId", "data-v-9c6ca5d1"]]), up = { class: "fil-w-chiplist" }, cp = ["placeholder", "aria-label", "disabled"], dp = {
  class: "fil-w-chip-scroll",
  role: "radiogroup"
}, fp = ["aria-checked", "disabled", "title", "onClick"], pp = {
  key: 0,
  class: "fil-w-chip-empty"
}, mp = /* @__PURE__ */ ye({
  __name: "FilChipList",
  props: /* @__PURE__ */ We({
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
    const t = e, n = lt(e, "modelValue"), l = /* @__PURE__ */ se(""), i = X(() => {
      const s = l.value.trim().toLowerCase();
      return s ? t.options.filter((a) => a.toLowerCase().includes(s)) : t.options;
    });
    function o(s) {
      t.disabled || s !== n.value && (n.value = s);
    }
    return (s, a) => (F(), P("div", up, [
      e.searchable ? tt((F(), P("input", {
        key: 0,
        "onUpdate:modelValue": a[0] || (a[0] = (r) => l.value = r),
        class: "fil-w-search",
        type: "search",
        placeholder: e.placeholder,
        "aria-label": e.placeholder,
        disabled: e.disabled,
        spellcheck: "false"
      }, null, 8, cp)), [
        [ht, l.value]
      ]) : ee("", !0),
      D("div", dp, [
        (F(!0), P(ce, null, Me(i.value, (r) => (F(), P("button", {
          key: r,
          type: "button",
          role: "radio",
          class: me(["fil-w-chip", { active: r === n.value, disabled: e.disabled }]),
          "aria-checked": r === n.value,
          disabled: e.disabled,
          title: r,
          onClick: (c) => o(r)
        }, z(r), 11, fp))), 128)),
        i.value.length === 0 ? (F(), P("div", pp, z(l.value ? "No matches" : "Empty"), 1)) : ee("", !0)
      ])
    ]));
  }
}), hp = /* @__PURE__ */ Se(mp, [["__scopeId", "data-v-3c9e19df"]]), gp = ["title"], _p = {
  key: 0,
  class: "fil-combo-label"
}, bp = ["disabled", "aria-expanded"], vp = { class: "fil-combo-trigger-label" }, yp = {
  key: 1,
  class: "fil-combo-badge"
}, wp = ["placeholder"], Sp = { class: "fil-combo-list" }, xp = ["aria-selected", "onMouseenter", "onClick"], Cp = { class: "fil-combo-option-label" }, Ap = {
  key: 1,
  class: "fil-combo-badge"
}, Mp = {
  key: 0,
  class: "fil-combo-empty"
}, Fp = /* @__PURE__ */ ye({
  __name: "FilComboBox",
  props: /* @__PURE__ */ We({
    options: {},
    searchable: { type: Boolean, default: !1 },
    placeholder: { default: "Search…" },
    disabled: { type: Boolean },
    label: {},
    title: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = lt(e, "modelValue"), l = /* @__PURE__ */ se(!1), i = /* @__PURE__ */ se(""), o = /* @__PURE__ */ se(0), s = /* @__PURE__ */ se(null), a = /* @__PURE__ */ se(null), r = /* @__PURE__ */ se(null), c = /* @__PURE__ */ se({}), u = X(() => t.options.find((S) => S.value === n.value)), d = X(() => {
      if (!t.searchable || !i.value.trim()) return t.options;
      const S = i.value.trim().toLowerCase();
      return t.options.filter((T) => (T.label ?? T.value).toLowerCase().includes(S));
    });
    function m(S) {
      return S.label ?? S.value;
    }
    function h() {
      const S = s.value;
      if (!S) return;
      const T = S.getBoundingClientRect(), G = window.innerHeight, E = 260, W = G - T.bottom, J = W < E && T.top > W;
      c.value = {
        left: `${T.left}px`,
        width: `${T.width}px`,
        ...J ? { bottom: `${G - T.top + 4}px` } : { top: `${T.bottom + 4}px` }
      };
    }
    function p(S) {
      var G;
      const T = S.target;
      T instanceof Element && ((G = a.value) != null && G.contains(T)) || A();
    }
    function _() {
      t.disabled || (l.value = !0, i.value = "", o.value = Math.max(
        0,
        d.value.findIndex((S) => S.value === n.value)
      ), Sn(() => {
        var S;
        h(), t.searchable && ((S = r.value) == null || S.focus()), window.addEventListener("resize", p), window.addEventListener("scroll", p, !0), document.addEventListener("mousedown", w, !0);
      }));
    }
    function A() {
      l.value && (l.value = !1, window.removeEventListener("resize", p), window.removeEventListener("scroll", p, !0), document.removeEventListener("mousedown", w, !0));
    }
    function w(S) {
      var G, E;
      const T = S.target;
      (G = s.value) != null && G.contains(T) || (E = a.value) != null && E.contains(T) || A();
    }
    function b() {
      l.value ? A() : _();
    }
    function C(S) {
      var T;
      n.value = S.value, A(), (T = s.value) == null || T.focus();
    }
    function v(S) {
      if (!t.disabled) {
        if (!l.value && (S.key === "ArrowDown" || S.key === "ArrowUp" || S.key === "Enter" || S.key === " ")) {
          S.preventDefault(), _();
          return;
        }
        l.value && y(S);
      }
    }
    function y(S) {
      var G;
      const T = d.value;
      if (S.key === "ArrowDown")
        S.preventDefault(), o.value = T.length ? (o.value + 1) % T.length : 0;
      else if (S.key === "ArrowUp")
        S.preventDefault(), o.value = T.length ? (o.value - 1 + T.length) % T.length : 0;
      else if (S.key === "Enter") {
        S.preventDefault();
        const E = T[o.value];
        E && C(E);
      } else S.key === "Escape" && (S.preventDefault(), A(), (G = s.value) == null || G.focus());
    }
    return Te(i, () => {
      o.value = 0;
    }), Yl(() => {
      window.removeEventListener("resize", p), window.removeEventListener("scroll", p, !0), document.removeEventListener("mousedown", w, !0);
    }), (S, T) => {
      var G, E;
      return F(), P("div", {
        class: "fil-combo",
        title: e.title
      }, [
        e.label ? (F(), P("label", _p, z(e.label), 1)) : ee("", !0),
        D("button", {
          ref_key: "triggerRef",
          ref: s,
          type: "button",
          class: me(["fil-combo-trigger", { open: l.value, disabled: e.disabled }]),
          disabled: e.disabled,
          "aria-expanded": l.value,
          "aria-haspopup": "listbox",
          onClick: b,
          onKeydown: v
        }, [
          (G = u.value) != null && G.icon ? (F(), Ae(It, {
            key: 0,
            name: u.value.icon,
            size: 16
          }, null, 8, ["name"])) : ee("", !0),
          D("span", vp, z(u.value ? m(u.value) : n.value), 1),
          (E = u.value) != null && E.badge ? (F(), P("span", yp, z(u.value.badge), 1)) : ee("", !0),
          T[1] || (T[1] = D("span", { class: "fil-combo-chevron" }, "▾", -1))
        ], 42, bp),
        (F(), Ae(Ys, { to: "body" }, [
          l.value ? (F(), P("div", {
            key: 0,
            ref_key: "panelRef",
            ref: a,
            class: "fil-combo-panel",
            style: et(c.value),
            role: "listbox",
            onKeydown: y
          }, [
            e.searchable ? tt((F(), P("input", {
              key: 0,
              ref_key: "searchRef",
              ref: r,
              "onUpdate:modelValue": T[0] || (T[0] = (W) => i.value = W),
              type: "search",
              class: "fil-combo-search",
              placeholder: e.placeholder,
              spellcheck: "false"
            }, null, 8, wp)), [
              [ht, i.value]
            ]) : ee("", !0),
            D("div", Sp, [
              (F(!0), P(ce, null, Me(d.value, (W, J) => (F(), P("button", {
                key: W.value,
                type: "button",
                class: me(["fil-combo-option", { active: J === o.value, selected: W.value === n.value }]),
                role: "option",
                "aria-selected": W.value === n.value,
                onMouseenter: (L) => o.value = J,
                onClick: (L) => C(W)
              }, [
                W.icon ? (F(), Ae(It, {
                  key: 0,
                  name: W.icon,
                  size: 16
                }, null, 8, ["name"])) : ee("", !0),
                D("span", Cp, z(m(W)), 1),
                W.badge ? (F(), P("span", Ap, z(W.badge), 1)) : ee("", !0)
              ], 42, xp))), 128)),
              d.value.length === 0 ? (F(), P("div", Mp, "No matches")) : ee("", !0)
            ])
          ], 36)) : ee("", !0)
        ]))
      ], 8, gp);
    };
  }
}), kp = /* @__PURE__ */ Se(Fp, [["__scopeId", "data-v-82542923"]]), Lp = ["data-ok", "data-err"], Ip = /* @__PURE__ */ ye({
  __name: "FilInfo",
  props: {
    text: {},
    ok: { type: Boolean },
    err: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (F(), P("div", {
      class: "fil-w-info",
      "data-ok": e.ok || void 0,
      "data-err": e.err || void 0
    }, z(e.text), 9, Lp));
  }
}), vl = /* @__PURE__ */ Se(Ip, [["__scopeId", "data-v-851660c1"]]), Dp = ["title"], Pp = {
  key: 0,
  class: "fil-w-numfield-label"
}, Rp = { class: "fil-w-num-wrap" }, Np = ["disabled", "min", "max", "step", "aria-label"], Tp = { class: "fil-w-num-step" }, Ep = ["disabled"], Op = ["disabled"], Vp = /* @__PURE__ */ ye({
  __name: "FilNumberInput",
  props: /* @__PURE__ */ We({
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
    const t = e, n = lt(e, "modelValue"), l = X(() => n.value), i = /* @__PURE__ */ se(a(l.value));
    Te(l, (p) => {
      o.value || (i.value = a(p));
    });
    let o = /* @__PURE__ */ se(!1), s = null;
    function a(p) {
      return Number.isFinite(p) ? String(p) : "";
    }
    function r(p) {
      const _ = (p || "").trim();
      if (_ === "" || !/^[0-9+\-*/(). ]+$/.test(_.replace(/\^/g, "**"))) return null;
      try {
        const A = new Function(`"use strict"; return (${_});`), w = Number(A());
        return Number.isFinite(w) ? w : null;
      } catch {
        return null;
      }
    }
    function c(p) {
      if (p === null) {
        i.value = a(l.value);
        return;
      }
      let _ = p;
      t.min != null && _ < t.min && (_ = t.min), t.max != null && _ > t.max && (_ = t.max), _ !== l.value && (n.value = _), i.value = a(_);
    }
    function u() {
      o.value = !0, s = i.value;
    }
    function d() {
      o.value = !1, c(r(i.value)), s = null;
    }
    function m(p) {
      p.key === "Enter" ? (p.preventDefault(), c(r(i.value)), p.target.blur()) : p.key === "Escape" ? (p.preventDefault(), s !== null && (i.value = s), p.target.blur()) : p.key === "ArrowUp" ? (p.preventDefault(), h(p.shiftKey ? 10 : 1)) : p.key === "ArrowDown" && (p.preventDefault(), h(p.shiftKey ? -10 : -1));
    }
    function h(p) {
      let _ = l.value + p * (t.step || 1);
      t.min != null && _ < t.min && (_ = t.min), t.max != null && _ > t.max && (_ = t.max), n.value = _, i.value = a(_);
    }
    return (p, _) => (F(), P("div", {
      class: me(["fil-w-numfield", { "no-label": !e.label }]),
      title: e.title
    }, [
      e.label ? (F(), P("label", Pp, z(e.label), 1)) : ee("", !0),
      D("div", Rp, [
        tt(D("input", {
          "onUpdate:modelValue": _[0] || (_[0] = (A) => i.value = A),
          type: "text",
          class: "fil-w-num",
          inputmode: "numeric",
          disabled: e.disabled,
          min: e.min ?? void 0,
          max: e.max ?? void 0,
          step: e.step ?? void 0,
          "aria-label": e.ariaLabel ?? e.label,
          onFocus: u,
          onBlur: d,
          onKeydown: m
        }, null, 40, Np), [
          [ht, i.value]
        ]),
        D("div", Tp, [
          D("button", {
            type: "button",
            class: "fil-w-num-btn",
            tabindex: "-1",
            "aria-label": "Increment",
            disabled: e.disabled || e.max != null && n.value >= e.max,
            onMousedown: _[1] || (_[1] = Pi(() => {
            }, ["prevent"])),
            onClick: _[2] || (_[2] = (A) => h(A.shiftKey ? 10 : 1))
          }, "▲", 40, Ep),
          D("button", {
            type: "button",
            class: "fil-w-num-btn",
            tabindex: "-1",
            "aria-label": "Decrement",
            disabled: e.disabled || e.min != null && n.value <= e.min,
            onMousedown: _[3] || (_[3] = Pi(() => {
            }, ["prevent"])),
            onClick: _[4] || (_[4] = (A) => h(A.shiftKey ? -10 : -1))
          }, "▼", 40, Op)
        ])
      ])
    ], 10, Dp));
  }
}), en = /* @__PURE__ */ Se(Vp, [["__scopeId", "data-v-2f843ba1"]]), $p = ["aria-expanded", "disabled"], Bp = { class: "fil-w-section-arrow" }, Hp = { class: "fil-w-section-title" }, Up = /* @__PURE__ */ ye({
  __name: "FilSection",
  props: /* @__PURE__ */ We({
    title: {},
    collapsible: { type: Boolean, default: !0 }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = lt(e, "modelValue");
    function l() {
      t.collapsible && (n.value = !n.value);
    }
    const i = X(() => n.value ? "▶" : "▼");
    return (o, s) => (F(), P("button", {
      type: "button",
      class: me(["fil-w-section", { collapsible: e.collapsible, collapsed: n.value }]),
      "aria-expanded": !n.value,
      disabled: !e.collapsible,
      onClick: l
    }, [
      D("span", Bp, z(i.value), 1),
      D("span", Hp, z(e.title), 1)
    ], 10, $p));
  }
}), Qe = /* @__PURE__ */ Se(Up, [["__scopeId", "data-v-4b760ea4"]]), Gp = ["title"], Wp = {
  key: 0,
  class: "fil-w-segmented-label"
}, jp = ["aria-label"], Kp = ["aria-pressed", "disabled", "tabindex", "onClick", "onKeydown"], zp = /* @__PURE__ */ ye({
  __name: "FilSegmented",
  props: /* @__PURE__ */ We({
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
    const t = e, n = lt(e, "modelValue"), l = /* @__PURE__ */ se([]);
    function i(a) {
      var r;
      return ((r = t.optionLabels) == null ? void 0 : r[a]) ?? a;
    }
    function o(a) {
      t.disabled || a !== n.value && (n.value = a);
    }
    function s(a, r) {
      var u, d;
      const c = t.options;
      if (a.key === "ArrowRight" || a.key === "ArrowDown") {
        a.preventDefault();
        const m = c[(r + 1) % c.length];
        o(m), (u = l.value[(r + 1) % c.length]) == null || u.focus();
      } else if (a.key === "ArrowLeft" || a.key === "ArrowUp") {
        a.preventDefault();
        const m = c[(r - 1 + c.length) % c.length];
        o(m), (d = l.value[(r - 1 + c.length) % c.length]) == null || d.focus();
      }
    }
    return (a, r) => (F(), P("div", {
      class: "fil-w-segmented",
      title: e.title
    }, [
      e.label ? (F(), P("label", Wp, z(e.label), 1)) : ee("", !0),
      D("div", {
        class: me(["fil-w-pill", { disabled: e.disabled }]),
        role: "group",
        "aria-label": e.label
      }, [
        (F(!0), P(ce, null, Me(e.options, (c, u) => (F(), P("button", {
          key: c,
          ref_for: !0,
          ref: (d) => {
            d && (l.value[u] = d);
          },
          type: "button",
          class: me(["fil-w-seg", { active: c === n.value }]),
          "aria-pressed": c === n.value,
          disabled: e.disabled,
          tabindex: c === n.value ? 0 : -1,
          onClick: (d) => o(c),
          onKeydown: (d) => s(d, u)
        }, z(i(c)), 43, Kp))), 128))
      ], 10, jp)
    ], 8, Gp));
  }
}), pt = /* @__PURE__ */ Se(zp, [["__scopeId", "data-v-765cf0ce"]]), qp = ["title"], Xp = {
  key: 0,
  class: "fil-w-select-label"
}, Yp = ["disabled", "aria-label"], Jp = ["value"], Qp = /* @__PURE__ */ ye({
  __name: "FilSelect",
  props: /* @__PURE__ */ We({
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
    const t = lt(e, "modelValue");
    return (n, l) => (F(), P("div", {
      class: "fil-w-select",
      title: e.title
    }, [
      e.label ? (F(), P("label", Xp, z(e.label), 1)) : ee("", !0),
      tt(D("select", {
        "onUpdate:modelValue": l[0] || (l[0] = (i) => t.value = i),
        class: "fil-w-select-input",
        disabled: e.disabled,
        "aria-label": e.label
      }, [
        (F(!0), P(ce, null, Me(e.options, (i) => (F(), P("option", {
          key: i,
          value: i
        }, z(i), 9, Jp))), 128))
      ], 8, Yp), [
        [Dc, t.value]
      ])
    ], 8, qp));
  }
}), pl = /* @__PURE__ */ Se(Qp, [["__scopeId", "data-v-a878baba"]]), Zp = ["title"], em = {
  key: 0,
  class: "fil-w-slider-label"
}, tm = { class: "fil-w-slider-row" }, nm = ["value", "min", "max", "step", "disabled", "aria-label"], lm = /* @__PURE__ */ ye({
  __name: "FilSlider",
  props: /* @__PURE__ */ We({
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
    const t = e, n = lt(e, "modelValue"), l = X({
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
    return (o, s) => (F(), P("div", {
      class: "fil-w-slider",
      title: e.title
    }, [
      e.label ? (F(), P("label", em, z(e.label), 1)) : ee("", !0),
      D("div", tm, [
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
        }, null, 40, nm),
        $(en, {
          modelValue: l.value,
          "onUpdate:modelValue": s[0] || (s[0] = (a) => l.value = a),
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label
        }, null, 8, ["modelValue", "min", "max", "step", "disabled", "aria-label"])
      ])
    ], 8, Zp));
  }
}), Ie = /* @__PURE__ */ Se(lm, [["__scopeId", "data-v-c8e1921a"]]), im = {
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
}, om = {}, sm = {}, am = {}, rm = {
  ...im,
  ...om,
  ...sm,
  ...am
}, um = { class: "fil-style-picker" }, cm = {
  key: 0,
  class: "fil-style-selected-bar"
}, dm = { class: "fil-chip-text" }, fm = ["onClick"], pm = { class: "fil-style-cats" }, mm = ["onClick"], hm = { class: "fil-style-search-wrap" }, gm = { class: "fil-style-grid" }, _m = ["title", "onClick"], bm = { class: "fil-style-tile-preview" }, vm = ["src"], ym = {
  key: 1,
  class: "fil-style-tile-placeholder"
}, wm = { class: "fil-style-tile-label" }, Sm = {
  key: 0,
  class: "fil-style-empty"
}, ml = "__all__", xm = /* @__PURE__ */ ye({
  __name: "FilStylePicker",
  props: /* @__PURE__ */ We({
    styles: {},
    multi: { type: Boolean, default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ We(["select"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = e, l = lt(e, "modelValue"), i = t;
    function o(w) {
      const b = w.indexOf("/");
      return b === -1 ? "" : w.slice(0, b);
    }
    function s(w) {
      const b = w.indexOf("/");
      return b === -1 ? w : w.slice(b + 1);
    }
    const a = X(() => {
      const w = l.value || "";
      return !w || w === "None" ? [] : w.split("|").map((b) => b.trim()).filter((b) => b && b !== "None");
    }), r = X(() => new Set(a.value));
    function c(w) {
      return r.value.has(w);
    }
    const u = X(() => {
      const w = /* @__PURE__ */ new Set(), b = [];
      for (const C of n.styles) {
        const v = o(C);
        v && !w.has(v) && (w.add(v), b.push(v));
      }
      return b;
    }), d = /* @__PURE__ */ se(ml), m = /* @__PURE__ */ se(""), h = X(() => {
      const w = m.value.trim().toLowerCase();
      return n.styles.filter((b) => d.value !== ml && o(b) !== d.value ? !1 : w ? b.toLowerCase().includes(w) : !0);
    });
    function p(w) {
      return rm[w];
    }
    function _(w) {
      const b = a.value.filter((v) => v !== w), C = b.length > 0 ? b.join(" | ") : "None";
      l.value = C, i("select", C);
    }
    function A(w) {
      if (n.multi) {
        let b;
        r.value.has(w) ? b = a.value.filter((v) => v !== w) : b = [...a.value, w];
        const C = b.length > 0 ? b.join(" | ") : "None";
        l.value = C, i("select", C);
      } else {
        const b = l.value === w ? "None" : w;
        l.value = b, i("select", b);
      }
    }
    return (w, b) => (F(), P("div", um, [
      a.value.length > 0 ? (F(), P("div", cm, [
        (F(!0), P(ce, null, Me(a.value, (C) => (F(), P("span", {
          key: C,
          class: "fil-style-chip"
        }, [
          D("span", dm, z(s(C)), 1),
          D("button", {
            type: "button",
            class: "fil-chip-remove",
            title: "Remove style",
            onClick: Pi((v) => _(C), ["stop"])
          }, "×", 8, fm)
        ]))), 128))
      ])) : ee("", !0),
      D("div", pm, [
        D("button", {
          type: "button",
          class: me(["fil-style-cat", { active: d.value === ml }]),
          onClick: b[0] || (b[0] = (C) => d.value = ml)
        }, " All ", 2),
        (F(!0), P(ce, null, Me(u.value, (C) => (F(), P("button", {
          key: C,
          type: "button",
          class: me(["fil-style-cat", { active: d.value === C }]),
          onClick: (v) => d.value = C
        }, z(C), 11, mm))), 128))
      ]),
      D("div", hm, [
        tt(D("input", {
          "onUpdate:modelValue": b[1] || (b[1] = (C) => m.value = C),
          type: "search",
          class: "fil-style-search",
          placeholder: "Search styles…",
          "aria-label": "Search styles",
          spellcheck: "false"
        }, null, 512), [
          [ht, m.value]
        ]),
        m.value.trim().length > 0 ? (F(), P("button", {
          key: 0,
          type: "button",
          class: "fil-style-search-clear",
          title: "Clear search",
          onClick: b[2] || (b[2] = (C) => m.value = "")
        }, " × ")) : ee("", !0)
      ]),
      D("div", gm, [
        (F(!0), P(ce, null, Me(h.value, (C) => (F(), P("button", {
          key: C,
          type: "button",
          class: me(["fil-style-tile", { active: c(C) }]),
          title: C,
          onClick: (v) => A(C)
        }, [
          D("span", bm, [
            p(C) ? (F(), P("img", {
              key: 0,
              src: p(C),
              class: "fil-style-tile-img",
              alt: ""
            }, null, 8, vm)) : (F(), P("span", ym, z(s(C).split(" ")[0]), 1))
          ]),
          D("span", wm, z(s(C)), 1)
        ], 10, _m))), 128)),
        h.value.length === 0 ? (F(), P("div", Sm, "No matches")) : ee("", !0)
      ])
    ]));
  }
}), yl = /* @__PURE__ */ Se(xm, [["__scopeId", "data-v-89c1e9fe"]]), Cm = "FiL_Design_ImageMind.Language", za = "en", Wn = /* @__PURE__ */ Gt({
  lang: za,
  translations: {},
  loaded: !1
});
let ps = null;
async function Am(e) {
  try {
    const t = await Nn(`/fil_design_imagemind/locale/${encodeURIComponent(e)}`);
    Wn.translations = t, Wn.lang = e;
  } catch (t) {
    console.warn(`[FiL_Design_ImageMind] failed to load locale "${e}":`, t);
  } finally {
    Wn.loaded = !0;
  }
}
function Mm() {
  if (ps) return;
  const e = Hi(Cm, za);
  ps = Am(e);
}
function Et() {
  Mm();
  function e(t, n) {
    return Wn.translations[t] ?? n;
  }
  return { t: e, state: /* @__PURE__ */ Sl(Wn) };
}
const Fm = ["title"], km = {
  key: 0,
  class: "fil-w-toggle-label"
}, Lm = ["aria-checked", "aria-label", "disabled"], Im = /* @__PURE__ */ ye({
  __name: "FilToggle",
  props: /* @__PURE__ */ We({
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
    const t = e, n = lt(e, "modelValue");
    function l() {
      t.disabled || (n.value = n.value === "ON" ? "OFF" : "ON");
    }
    return (i, o) => (F(), P("div", {
      class: me(["fil-w-toggle", { bare: e.bare }]),
      title: e.title
    }, [
      e.label ? (F(), P("label", km, z(e.label), 1)) : ee("", !0),
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
      ])], 10, Lm)
    ], 10, Fm));
  }
}), fn = /* @__PURE__ */ Se(Im, [["__scopeId", "data-v-9d64f497"]]), Dm = { class: "fil-seed-root" }, Pm = ["readonly", "title"], Rm = { class: "fil-seed-actions" }, Nm = /* @__PURE__ */ ye({
  __name: "Seed",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Et(), l = X({
      get: () => t.state.nodeState.mode ?? "random",
      set: (c) => {
        t.state.nodeState.mode = c;
      }
    }), i = X({
      get: () => Number(t.state.nodeState.seed ?? 0) || 0,
      // Write the native seed widget directly, not just nodeState — a fixed
      // seed set only via nodeState can fail to reach the queued prompt.
      set: (c) => {
        t.state.nodeState.seed = c;
        const u = t.state.node ? oe(t.state.node, "seed") : null;
        u && (u.value = c);
      }
    });
    Te(l, (c) => {
      const u = t.state.node, d = u ? oe(u, "control_after_generate") : null;
      d && (d.value = c === "fixed" ? "fixed" : "randomize");
    }, { immediate: !0 }), Te(
      () => t.state.nodeState,
      (c) => {
        typeof c.mode == "string" && (l.value = c.mode), typeof c.seed == "number" && (i.value = Number(c.seed));
      },
      { deep: !0 }
    );
    function o() {
      l.value = "random";
    }
    function s() {
      const c = t.state.node, u = c ? oe(c, "seed") : null, d = u && Number.isFinite(Number(u.value)) ? Number(u.value) : t.state.lastRunSeed;
      if (d == null || !Number.isFinite(d)) {
        Lt.warning("No last-run seed recorded yet");
        return;
      }
      i.value = d, l.value = "fixed";
    }
    function a() {
      const c = Math.floor(Math.random() * 1e9) & 2147483647;
      i.value = c, l.value = "fixed";
    }
    const r = X({
      get: () => l.value === "fixed" ? `${i.value}` : "random",
      set: (c) => {
        const u = parseInt(String(c).replace(/[^0-9]/g, ""), 10);
        Number.isNaN(u) || (i.value = u, l.value = "fixed");
      }
    });
    return (c, u) => (F(), P("div", Dm, [
      tt(D("input", {
        "onUpdate:modelValue": u[0] || (u[0] = (d) => r.value = d),
        type: "text",
        class: "fil-seed-display",
        readonly: l.value === "random",
        title: l.value === "fixed" ? f(n)("sd_locked", "Locked seed") : f(n)("sd_auto_random", "Auto-random"),
        "aria-label": "Seed value"
      }, null, 8, Pm), [
        [ht, r.value]
      ]),
      D("div", Rm, [
        $(f(Ge), {
          label: "🔀",
          variant: "standard",
          title: f(n)("sd_mode", "Random generates a new seed each run."),
          onClick: o
        }, null, 8, ["title"]),
        $(f(Ge), {
          label: "♻️",
          variant: "standard",
          title: f(n)("sd_use_last", "Reuse the seed from the last executed run."),
          onClick: s
        }, null, 8, ["title"]),
        $(f(Ge), {
          label: "🎲",
          variant: "accent",
          title: f(n)("sd_new_fixed", "Generate a new random fixed seed."),
          onClick: a
        }, null, 8, ["title"])
      ])
    ]));
  }
}), Tm = /* @__PURE__ */ Se(Nm, [["__scopeId", "data-v-820f3e21"]]), Em = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tm
}, Symbol.toStringTag, { value: "Module" })), Om = { class: "picker-container" }, Vm = { class: "provider-tabs" }, $m = ["onClick"], Bm = { class: "tab-label" }, Hm = {
  key: 0,
  class: "tab-badge"
}, Um = { class: "provider-status-bar" }, Gm = { class: "status-info" }, Wm = { class: "provider-name" }, jm = {
  key: 0,
  class: "status-badge loading"
}, Km = {
  key: 1,
  class: "status-badge error"
}, zm = {
  key: 2,
  class: "status-badge online"
}, qm = {
  key: 3,
  class: "age-label"
}, Xm = { class: "filter-controls" }, Ym = { class: "search-input-wrap" }, Jm = ["placeholder"], Qm = ["title"], Zm = { class: "filter-segments" }, eh = { class: "models-list-wrapper" }, th = {
  key: 0,
  class: "empty-state"
}, nh = {
  key: 1,
  class: "empty-state"
}, lh = ["aria-pressed", "onClick"], ih = { class: "model-main" }, oh = { class: "type-icon" }, sh = ["title"], ah = { class: "model-tags" }, rh = {
  key: 0,
  class: "tag vision"
}, uh = {
  key: 1,
  class: "tag text"
}, ch = {
  key: 2,
  class: "tag local"
}, dh = {
  key: 3,
  class: "tag free"
}, fh = {
  key: 4,
  class: "tag paid"
}, ph = { class: "picker-footer" }, mh = { class: "selection-summary" }, hh = { key: 0 }, gh = {
  key: 1,
  class: "muted"
}, _h = { class: "footer-actions" }, ms = "fil_model_picker_view_mode", bh = /* @__PURE__ */ ye({
  __name: "ProviderModelPicker",
  props: {
    open: { type: Boolean, default: !1 },
    provider: { default: "ollama" },
    model: { default: "" }
  },
  emits: ["update:open", "select"],
  setup(e, { emit: t }) {
    const n = e, l = t, i = so(), { t: o } = Et(), s = /* @__PURE__ */ se(n.provider), a = /* @__PURE__ */ se(n.model), r = /* @__PURE__ */ se(""), c = /* @__PURE__ */ se("all"), u = /* @__PURE__ */ se("all"), d = /* @__PURE__ */ se(
      localStorage.getItem(ms) || "list"
    );
    function m(R) {
      d.value = R;
      try {
        localStorage.setItem(ms, R);
      } catch {
      }
    }
    const h = ["all", "vision", "text"], p = X(() => ({
      all: o("pmp_all_types", "All Types"),
      vision: o("pmp_tag_vision_opt", "👁 Vision"),
      text: o("pmp_tag_text_opt", "📝 Text")
    })), _ = X(() => ({
      all: o("pmp_all_tiers", "All Tiers"),
      local: o("pmp_tier_local", "💻 Local"),
      free: o("pmp_tier_free", "🆓 Free"),
      paid: o("pmp_tier_paid", "💎 Paid")
    })), A = ["list", "grid"], w = X(() => ({
      list: o("pmp_view_list", "☰ List"),
      grid: o("pmp_view_grid", "⊞ Tiles")
    })), b = X(
      () => s.value === "ollama" || s.value === "lmstudio" ? ["all", "local"] : ["all", "free", "paid"]
    );
    Te(
      () => n.open,
      (R) => {
        R && (s.value = n.provider || "ollama", a.value = n.model || "", r.value = "", c.value = "all", u.value = "all", C());
      }
    );
    async function C(R = !1) {
      try {
        await i.loadModels(s.value, R);
      } catch (k) {
        Lt.error(k instanceof Error ? k.message : String(k));
      }
    }
    function v(R) {
      s.value = R, r.value = "", u.value = "all";
      const k = i.modelsFor(R);
      k.length > 0 ? a.value = k[0] : a.value = "", C();
    }
    const y = X(() => i.modelsFor(s.value)), S = X(() => i.visionModelsFor(s.value)), T = X(() => i.isLoading(s.value)), G = X(() => i.probeState[s.value]), E = X(() => i.cachedAgeLabel(s.value));
    function W(R, k) {
      return k === "ollama" || k === "lmstudio" ? "local" : R.toLowerCase().includes(":free") ? "free" : "paid";
    }
    function J(R) {
      return S.value.includes(R);
    }
    const L = X(() => {
      let R = y.value;
      const k = r.value.trim().toLowerCase(), M = s.value;
      return k && (R = R.filter((j) => j.toLowerCase().includes(k))), c.value === "vision" ? R = R.filter((j) => J(j)) : c.value === "text" && (R = R.filter((j) => !J(j))), u.value !== "all" && (R = R.filter((j) => W(j, M) === u.value)), R;
    });
    function I(R) {
      a.value = R;
    }
    function O() {
      a.value && (l("select", { provider: s.value, model: a.value }), l("update:open", !1));
    }
    function ne() {
      l("update:open", !1);
    }
    return (R, k) => (F(), Ae(bn, {
      open: e.open,
      width: "860px",
      title: f(o)("pmp_title", "🔌 Choose Provider & Model"),
      "onUpdate:open": k[6] || (k[6] = (M) => l("update:open", M)),
      onClose: ne
    }, {
      default: Ht(() => [
        D("div", Om, [
          D("div", Vm, [
            (F(!0), P(ce, null, Me(f(dn), (M) => (F(), P("button", {
              key: M,
              type: "button",
              class: me(["tab-btn", { active: M === s.value }]),
              onClick: (j) => v(M)
            }, [
              $(It, {
                name: f(ao)[M],
                size: 18
              }, null, 8, ["name"]),
              D("span", Bm, z(f(Ol)[M] ?? M), 1),
              f(i).modelsFor(M).length ? (F(), P("span", Hm, z(f(i).modelsFor(M).length), 1)) : ee("", !0)
            ], 10, $m))), 128))
          ]),
          D("div", Um, [
            D("div", Gm, [
              D("span", Wm, z(f(Ol)[s.value] ?? s.value), 1),
              T.value ? (F(), P("span", jm, "⏳ " + z(f(o)("pmp_loading", "Loading...")), 1)) : G.value && G.value.status && G.value.status !== "available" ? (F(), P("span", Km, " ⚠️ " + z(G.value.message || G.value.status), 1)) : (F(), P("span", zm, " ● " + z(f(o)("pmp_online", "Online")) + " (" + z(y.value.length) + " " + z(f(o)("prov_models", "models")) + ") ", 1)),
              E.value ? (F(), P("span", qm, z(f(o)("pmp_updated", "Updated")) + ": " + z(E.value), 1)) : ee("", !0)
            ]),
            $(Ge, {
              variant: "sm",
              label: f(o)("pmp_refresh", "↻ Refresh"),
              loading: T.value,
              title: f(o)("tt_refresh", "Reload models list"),
              onClick: k[0] || (k[0] = (M) => C(!0))
            }, null, 8, ["label", "loading", "title"])
          ]),
          D("div", Xm, [
            D("div", Ym, [
              $(It, {
                name: "search",
                size: 14,
                class: "search-icon"
              }),
              tt(D("input", {
                "onUpdate:modelValue": k[1] || (k[1] = (M) => r.value = M),
                type: "text",
                class: "search-input",
                placeholder: f(o)("pmp_search", "Search models...")
              }, null, 8, Jm), [
                [ht, r.value]
              ]),
              r.value ? (F(), P("button", {
                key: 0,
                type: "button",
                class: "clear-search",
                title: f(o)("tt_clear_search", "Clear search"),
                onClick: k[2] || (k[2] = (M) => r.value = "")
              }, "✕", 8, Qm)) : ee("", !0)
            ]),
            D("div", Zm, [
              $(pt, {
                options: [...h],
                "option-labels": p.value,
                "model-value": c.value,
                "onUpdate:modelValue": k[3] || (k[3] = (M) => c.value = M)
              }, null, 8, ["options", "option-labels", "model-value"]),
              $(pt, {
                options: b.value,
                "option-labels": _.value,
                "model-value": u.value,
                "onUpdate:modelValue": k[4] || (k[4] = (M) => u.value = M)
              }, null, 8, ["options", "option-labels", "model-value"]),
              $(pt, {
                options: [...A],
                "option-labels": w.value,
                "model-value": d.value,
                "onUpdate:modelValue": k[5] || (k[5] = (M) => m(M))
              }, null, 8, ["options", "option-labels", "model-value"])
            ])
          ]),
          D("div", eh, [
            T.value && !y.value.length ? (F(), P("div", th, [
              $(vl, {
                text: f(o)("pmp_loading_provider", "Loading models from provider...")
              }, null, 8, ["text"])
            ])) : L.value.length ? (F(), P("div", {
              key: 2,
              class: me(["models-container", d.value])
            }, [
              (F(!0), P(ce, null, Me(L.value, (M) => (F(), P("button", {
                key: M,
                type: "button",
                class: me(["model-card", { selected: M === a.value }]),
                "aria-pressed": M === a.value,
                onClick: (j) => I(M)
              }, [
                D("div", ih, [
                  D("span", oh, z(J(M) ? "👁" : "📝"), 1),
                  D("span", {
                    class: "model-name",
                    title: M
                  }, z(M), 9, sh)
                ]),
                D("div", ah, [
                  J(M) ? (F(), P("span", rh, z(f(o)("pmp_tag_vision", "Vision")), 1)) : (F(), P("span", uh, z(f(o)("pmp_tag_text", "Text")), 1)),
                  W(M, s.value) === "local" ? (F(), P("span", ch, z(f(o)("pmp_tag_local", "Local")), 1)) : W(M, s.value) === "free" ? (F(), P("span", dh, z(f(o)("pmp_tag_free", "Free")), 1)) : (F(), P("span", fh, z(f(o)("pmp_tag_paid", "Paid")), 1))
                ])
              ], 10, lh))), 128))
            ], 2)) : (F(), P("div", nh, [
              D("span", null, z(f(o)("pmp_no_match", "No models matching criteria")), 1)
            ]))
          ]),
          D("div", ph, [
            D("div", mh, [
              a.value ? (F(), P("span", hh, [
                Il(z(f(o)("pmp_selected", "Selected")) + ": ", 1),
                D("strong", null, z(a.value), 1)
              ])) : (F(), P("span", gh, z(f(o)("pmp_none_selected", "No model selected")), 1))
            ]),
            D("div", _h, [
              $(Ge, {
                label: f(o)("pmp_cancel", "Cancel"),
                title: f(o)("pmp_cancel_tt", "Close without changing the model"),
                onClick: ne
              }, null, 8, ["label", "title"]),
              $(Ge, {
                variant: "accent",
                label: f(o)("pmp_apply", "✔ Apply Selection"),
                title: f(o)("pmp_apply_tt", "Use the selected model"),
                disabled: !a.value,
                onClick: O
              }, null, 8, ["label", "title", "disabled"])
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["open", "title"]));
  }
}), vh = /* @__PURE__ */ Se(bh, [["__scopeId", "data-v-d6437604"]]), yh = { class: "fil-provider-root" }, wh = { class: "trigger-header" }, Sh = { class: "provider-badge" }, xh = { class: "provider-title" }, Ch = { class: "trigger-model" }, Ah = ["title"], Mh = 3e5, Fh = /* @__PURE__ */ ye({
  __name: "ProviderLoader",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, n = so(), { t: l } = Et(), i = /* @__PURE__ */ se(!1);
    function o(y, S) {
      return {
        get: () => t.state.nodeState[y] ?? S,
        set: (T) => {
          t.state.nodeState[y] = T;
        }
      };
    }
    const s = X(() => String(o("provider", "ollama").get()));
    function a(y) {
      o("provider", "ollama").set(y), C();
    }
    const r = X(() => String(o("model", "(loading...)").get()));
    function c(y) {
      o("model", "(loading...)").set(y), C();
    }
    const u = X(() => Number(o("temperature", 0.7).get())), d = X(() => Number(o("max_tokens", 0).get())), m = X(() => Number(o("rate_limit_ms", 100).get())), h = X(() => Number(o("max_image_side", 1024).get())), p = t.state, _ = X(() => n.isLoading(s.value)), A = X(() => n.probeState[s.value]), w = X(() => n.cachedAgeLabel(s.value));
    let b = null;
    Te(() => t.state.nodeState, () => {
    }, { deep: !0 });
    function C() {
      const y = t.state.node;
      if (!y) return;
      const S = oe(y, "model");
      if (!S) return;
      const T = n.modelsFor(s.value), G = T.length ? T : ["(no models)"];
      S.options && (S.options.values = G);
    }
    function v(y) {
      a(y.provider), c(y.model);
    }
    return ll(async () => {
      n.loadDisplayNames();
      const y = n.modelsFor(s.value);
      if (y.length)
        r.value === "(loading...)" && c(y[0] ?? "(no models)"), C(), n.loadModels(s.value);
      else
        try {
          await n.loadModels(s.value);
          const S = n.modelsFor(s.value);
          r.value === "(loading...)" && c(S[0] ?? "(no models)"), C();
        } catch (S) {
          Lt.error(S instanceof Error ? S.message : String(S));
        }
      b = setInterval(() => {
        n.loadModels(s.value, !0);
      }, Mh);
    }), Jl(() => {
      b && clearInterval(b);
    }), (y, S) => (F(), P("div", yh, [
      D("button", {
        type: "button",
        class: "picker-trigger-btn",
        onClick: S[0] || (S[0] = (T) => i.value = !0)
      }, [
        D("div", wh, [
          D("div", Sh, [
            $(f(It), {
              name: f(ao)[s.value],
              size: 16
            }, null, 8, ["name"]),
            D("span", xh, z(f(Ol)[s.value] ?? s.value), 1)
          ]),
          S[6] || (S[6] = D("span", { class: "open-icon" }, "⚙️ Choose", -1))
        ]),
        D("div", Ch, [
          S[7] || (S[7] = D("span", { class: "model-label" }, "🧠 Model:", -1)),
          D("span", {
            class: "model-name",
            title: r.value
          }, z(r.value), 9, Ah)
        ])
      ]),
      _.value ? (F(), Ae(f(vl), {
        key: 0,
        text: f(l)("prov_loading_models", "Loading models…")
      }, null, 8, ["text"])) : A.value && A.value.status && A.value.status !== "available" ? (F(), Ae(f(vl), {
        key: 1,
        err: !0,
        text: A.value.message || A.value.status
      }, null, 8, ["text"])) : w.value ? (F(), Ae(f(vl), {
        key: 2,
        text: `${f(l)("prov_models_updated", "Models updated")}: ${w.value}`
      }, null, 8, ["text"])) : ee("", !0),
      $(f(Ie), {
        "model-value": u.value,
        min: 0,
        max: 2,
        step: 0.05,
        label: f(l)("lbl_temperature", "🌡️ Temperature"),
        title: f(l)("tt_temperature", "Sampling temperature — higher is more creative, lower is more deterministic."),
        "onUpdate:modelValue": S[1] || (S[1] = (T) => f(p).nodeState.temperature = T)
      }, null, 8, ["model-value", "label", "title"]),
      $(f(Ie), {
        "model-value": d.value,
        min: 0,
        max: 65536,
        step: 1,
        label: f(l)("lbl_max_tokens", "🔢 Max tokens"),
        title: f(l)("tt_provider_max_tokens", "Maximum tokens in the response. 0 = provider default (no explicit limit)."),
        "onUpdate:modelValue": S[2] || (S[2] = (T) => f(p).nodeState.max_tokens = T)
      }, null, 8, ["model-value", "label", "title"]),
      $(f(Ie), {
        "model-value": m.value,
        min: 0,
        max: 5e3,
        step: 10,
        label: f(l)("lbl_rate_limit", "⏱️ Rate limit"),
        title: f(l)("tt_rate_limit", "Minimum delay between requests to this provider, to avoid rate limiting."),
        "onUpdate:modelValue": S[3] || (S[3] = (T) => f(p).nodeState.rate_limit_ms = T)
      }, null, 8, ["model-value", "label", "title"]),
      $(f(Ie), {
        "model-value": h.value,
        min: 128,
        max: 4096,
        step: 64,
        label: f(l)("lbl_max_image_side", "🖼️ Max image side"),
        title: f(l)("tt_max_image_side", "Images are downscaled so their longest side does not exceed this value."),
        "onUpdate:modelValue": S[4] || (S[4] = (T) => f(p).nodeState.max_image_side = T)
      }, null, 8, ["model-value", "label", "title"]),
      $(vh, {
        open: i.value,
        "onUpdate:open": S[5] || (S[5] = (T) => i.value = T),
        provider: s.value,
        model: r.value,
        onSelect: v
      }, null, 8, ["open", "provider", "model"])
    ]));
  }
}), kh = /* @__PURE__ */ Se(Fh, [["__scopeId", "data-v-1a9a11d7"]]), Lh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kh
}, Symbol.toStringTag, { value: "Module" })), ro = {
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
}, Ih = { class: "fil-scanner-root" }, Dh = {
  key: 0,
  class: "fil-section-block"
}, Ph = {
  key: 0,
  class: "fil-w-row fil-single-style-block"
}, Rh = { style: { display: "flex", gap: "4px", "margin-bottom": "3px" } }, Nh = { style: { display: "flex", "margin-bottom": "6px" } }, Th = { class: "fil-unified-style-modal" }, Eh = { class: "fil-style-tab-bar" }, Oh = ["onClick"], Vh = { class: "fil-tab-icon" }, $h = { class: "fil-tab-title" }, Bh = {
  key: 0,
  class: "fil-tab-badge"
}, Hh = { class: "fil-style-picker-body" }, Uh = { class: "fil-style-modal-footer" }, Gh = ["title"], Wh = ["value", "placeholder", "onInput"], jh = ["value", "placeholder", "onInput"], Kh = { class: "fil-scanner-seed-row" }, zh = ["value", "readonly", "title"], qh = ["title"], Xh = ["title"], Yh = ["title"], Jh = /* @__PURE__ */ ye({
  __name: "OpticScanner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Et(), l = ro.FiLOpticScanner, i = (l == null ? void 0 : l.inputs.required) ?? [], o = {
      prompt: ["scn_section_prompt", "📝 Prompt/Text"],
      agent: ["scn_section_agent", "🕵️ Agent"],
      model: ["scn_section_model", "🧠 Model"],
      output: ["scn_section_output", "📤 Output"],
      advanced: ["scn_section_advanced", "🎨 Style"],
      actions: ["scn_section_actions", "⚡ Actions"]
    };
    function s(R) {
      const k = o[R];
      return k ? n(k[0], k[1]) : R.toUpperCase();
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
    function r(R) {
      const k = a[R.name];
      return k ? n(k, R.tooltip || "") : R.tooltip || "";
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
    function u(R) {
      if (R.label) return R.label;
      const k = c[R.name] || "", M = R.name.replace(/_/g, " ").replace(/\b\w/g, (j) => j.toUpperCase());
      return k ? `${k} ${M}` : M;
    }
    const d = /* @__PURE__ */ se(!1), m = /* @__PURE__ */ se("photo_style");
    function h(R) {
      return !R || R === "None" ? [] : R.split("|").map((M) => M.trim()).filter((M) => M && M !== "None").map((M) => {
        const j = M.indexOf("/");
        return (j === -1 ? M : M.slice(j + 1)).replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}\s]+/gu, "").trim();
      });
    }
    const p = X(() => {
      const R = [], k = h(String(y("photo_style", "None"))), M = h(String(y("nsfw_photo_style", "None"))), j = h(String(y("art_style", "None"))), Z = h(String(y("nsfw_art_style", "None")));
      for (const le of k) R.push(`📷 ${le}`);
      for (const le of M) R.push(`🔞 ${le}`);
      for (const le of j) R.push(`🎨 ${le}`);
      for (const le of Z) R.push(`🔞 ${le}`);
      return R.length === 0 ? n("scn_style_button_none", "🎨 Style: None") : R.join(" | ");
    }), _ = [
      { id: "photo_style", icon: "📷", labelKey: "scn_style_photo_label", fallback: "Photo" },
      { id: "nsfw_photo_style", icon: "🔞", labelKey: "scn_style_nsfw_photo_label", fallback: "NSFW Photo" },
      { id: "art_style", icon: "🎨", labelKey: "scn_style_art_label", fallback: "Art" },
      { id: "nsfw_art_style", icon: "🔞", labelKey: "scn_style_nsfw_art_label", fallback: "NSFW Art" }
    ];
    function A(R) {
      return String(y(R, "None") || "None");
    }
    function w(R, k) {
      S(R, k);
    }
    function b(R) {
      const k = i.find((M) => M.name === R);
      return (k == null ? void 0 : k.values) || [];
    }
    function C() {
      S("photo_style", "None"), S("nsfw_photo_style", "None"), S("art_style", "None"), S("nsfw_art_style", "None");
    }
    const v = X(() => {
      var k;
      const R = {};
      for (const M of i) (R[k = M.section || "_"] ?? (R[k] = [])).push(M);
      return R;
    });
    function y(R, k = "") {
      return t.state.nodeState[R] ?? t.state.initialValues[R] ?? k;
    }
    function S(R, k) {
      t.state.nodeState[R] = k;
    }
    const T = /* @__PURE__ */ new Set(["agent", "output", "advanced"]);
    function G(R) {
      const k = t.state.ui[`collapsed_${R}`];
      return k === void 0 ? T.has(R) : !!k;
    }
    function E(R, k) {
      t.state.ui[`collapsed_${R}`] = k;
    }
    Te(() => t.state.nodeState, () => {
    }, { deep: !0 });
    const W = X({
      get: () => t.state.nodeState.seed_mode ?? "random",
      set: (R) => {
        t.state.nodeState.seed_mode = R;
      }
    }), J = X({
      get: () => Number(t.state.nodeState.seed ?? -1) || -1,
      // Write the native seed widget directly, not just nodeState: the
      // createSyncedNodeState mirror doesn't reach the seed widget the same way
      // control_after_generate expects, so a fixed seed set only via nodeState
      // can fail to reach the queued prompt. Direct assignment sticks.
      set: (R) => {
        t.state.nodeState.seed = R;
        const k = t.state.node ? oe(t.state.node, "seed") : null;
        k && (k.value = R);
      }
    }), L = X(() => W.value === "fixed" ? `${J.value}` : "random");
    Te(W, (R) => {
      const k = t.state.node, M = k ? oe(k, "control_after_generate") : null;
      M && (M.value = R === "fixed" ? "fixed" : "randomize");
    }, { immediate: !0 });
    function I() {
      W.value = "random";
    }
    function O() {
      const R = t.state.node, k = R ? oe(R, "seed") : null, M = k && Number.isFinite(Number(k.value)) ? Number(k.value) : t.state.lastRunSeed;
      if (M == null || !Number.isFinite(M)) {
        Lt.warning("No last-run seed recorded yet");
        return;
      }
      J.value = M, W.value = "fixed";
    }
    function ne() {
      const R = Math.floor(Math.random() * 1e9) & 2147483647;
      J.value = R, W.value = "fixed";
    }
    return (R, k) => (F(), P("div", Ih, [
      (F(!0), P(ce, null, Me(v.value, (M, j) => (F(), P(ce, { key: j }, [
        j !== "styles" ? (F(), P("div", Dh, [
          j !== "_" && j !== "prompt" ? (F(), Ae(f(Qe), {
            key: 0,
            title: s(String(j)),
            "model-value": G(String(j)),
            "onUpdate:modelValue": (Z) => E(String(j), Z)
          }, null, 8, ["title", "model-value", "onUpdate:modelValue"])) : ee("", !0),
          (F(!0), P(ce, null, Me(M, (Z) => (F(), P(ce, {
            key: Z.name
          }, [
            Z.name === "response_format" ? (F(), P("div", Ph, [
              D("div", Rh, [
                $(f(Ge), {
                  variant: "full",
                  label: p.value,
                  onClick: k[0] || (k[0] = (le) => d.value = !0),
                  style: { flex: "2" }
                }, null, 8, ["label"])
              ]),
              D("div", Nh, [
                $(f(Ge), {
                  variant: "standard",
                  label: "🧹 Clear Style",
                  onClick: C,
                  style: { flex: "1" }
                })
              ]),
              $(f(bn), {
                open: d.value,
                title: f(n)("scn_unified_style_title", "🎨 Style Selection"),
                width: "680px",
                "onUpdate:open": k[2] || (k[2] = (le) => d.value = le)
              }, {
                default: Ht(() => [
                  D("div", Th, [
                    D("div", Eh, [
                      (F(), P(ce, null, Me(_, (le) => D("button", {
                        key: le.id,
                        type: "button",
                        class: me(["fil-style-tab-btn", { active: m.value === le.id, "has-value": A(le.id) !== "None" }]),
                        onClick: (Ee) => m.value = le.id
                      }, [
                        D("span", Vh, z(le.icon), 1),
                        D("span", $h, z(f(n)(le.labelKey, le.fallback)), 1),
                        A(le.id) !== "None" ? (F(), P("span", Bh, "✓")) : ee("", !0)
                      ], 10, Oh)), 64))
                    ]),
                    D("div", Hh, [
                      $(f(yl), {
                        styles: b(m.value),
                        "model-value": A(m.value),
                        multi: !0,
                        onSelect: k[1] || (k[1] = (le) => w(m.value, le))
                      }, null, 8, ["styles", "model-value"])
                    ]),
                    D("div", Uh, [
                      D("button", {
                        type: "button",
                        class: "fil-clear-styles-btn",
                        onClick: C
                      }, z(f(n)("scn_clear_all_styles", "🗑️ Clear all styles")), 1)
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["open", "title"])
            ])) : ee("", !0),
            tt(D("div", {
              class: "fil-w-row",
              title: r(Z)
            }, [
              Z.name === "prompt" || Z.name === "negative_prompt" ? (F(), P("textarea", {
                key: 0,
                value: String(y(Z.name, "")),
                class: "fil-scanner-textarea",
                placeholder: u(Z),
                rows: "2",
                onInput: (le) => S(Z.name, le.target.value)
              }, null, 40, Wh)) : Z.name === "custom_style" ? (F(), P("input", {
                key: 1,
                value: String(y(Z.name, "")),
                type: "text",
                class: "fil-scanner-input",
                placeholder: u(Z),
                onInput: (le) => S(Z.name, le.target.value)
              }, null, 40, jh)) : Z.kind === "chip_grid" ? (F(), Ae(f(fs), {
                key: 2,
                options: Z.values || [],
                "model-value": String(y(Z.name, "")),
                columns: Z.columns ?? 3,
                "onUpdate:modelValue": (le) => S(Z.name, le)
              }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"])) : Z.kind === "chip_list" ? (F(), Ae(f(hp), {
                key: 3,
                options: Z.values || [],
                "model-value": y(Z.name, null),
                searchable: Z.searchable ?? !0,
                "onUpdate:modelValue": (le) => S(Z.name, le)
              }, null, 8, ["options", "model-value", "searchable", "onUpdate:modelValue"])) : Z.kind === "segmented" ? (F(), Ae(f(pt), {
                key: 4,
                options: Z.options || [],
                "model-value": String(y(Z.name, "")),
                label: u(Z),
                "onUpdate:modelValue": (le) => S(Z.name, le)
              }, null, 8, ["options", "model-value", "label", "onUpdate:modelValue"])) : (F(), Ae(f(fs), {
                key: 5,
                options: Z.values || [],
                "model-value": String(y(Z.name, "")),
                columns: Z.columns ?? 3,
                "onUpdate:modelValue": (le) => S(Z.name, le)
              }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"]))
            ], 8, Gh), [
              [pc, j === "_" || j === "prompt" || !G(String(j))]
            ])
          ], 64))), 128))
        ])) : ee("", !0)
      ], 64))), 128)),
      D("div", Kh, [
        D("input", {
          value: L.value,
          type: "text",
          class: me(["fil-scanner-seed-field", { "is-random": W.value === "random" }]),
          readonly: W.value === "random",
          "aria-label": "Seed value",
          title: W.value === "fixed" ? f(n)("scn_seed_locked", "Locked seed") : f(n)("scn_seed_auto_random", "Auto-random — a new seed is generated each run"),
          onInput: k[3] || (k[3] = (M) => J.value = Number(M.target.value) || 0)
        }, null, 42, zh),
        D("button", {
          type: "button",
          class: me(["fil-scanner-seed-pill", { active: W.value === "random" }]),
          title: f(n)("scn_seed_mode_tt", "Random generates a new seed each run."),
          onClick: I
        }, z(f(n)("scn_seed_random", "Random")), 11, qh),
        D("button", {
          type: "button",
          class: "fil-scanner-seed-pill",
          title: t.state.lastRunSeed != null ? `${f(n)("scn_seed_use_last_prefix", "Reuse the last run's seed:")} ${t.state.lastRunSeed}` : f(n)("scn_seed_use_last_tt", "Reuse the seed from the last executed run."),
          onClick: O
        }, z(f(n)("scn_seed_use_last", "Use last")), 9, Xh),
        D("button", {
          type: "button",
          class: "fil-scanner-seed-pill fil-scanner-seed-pill-accent",
          title: f(n)("scn_seed_new_fixed_tt", "Generate a new random fixed seed."),
          onClick: ne
        }, z(f(n)("scn_seed_new_fixed", "New fixed")), 9, Yh)
      ])
    ]));
  }
}), Qh = /* @__PURE__ */ Se(Jh, [["__scopeId", "data-v-bd04f211"]]), Zh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qh
}, Symbol.toStringTag, { value: "Module" })), eg = { class: "fil-cleaner-root" }, tg = /* @__PURE__ */ ye({
  __name: "NeuroCleaner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Et(), l = X(() => [
      { name: "clean_vram", label: n("cln_flush_vram", "🧹 Flush GPU Cache"), defaultOn: !0 },
      { name: "unload_diffusion", label: n("cln_unload_diffusion", "🌀 Unload Diffusion (FLUX/SD)"), defaultOn: !0 },
      { name: "unload_clip", label: n("cln_unload_clip", "📎 Unload CLIP / Text Encoder"), defaultOn: !1 },
      { name: "unload_vae", label: n("cln_unload_vae", "🖼️ Unload VAE"), defaultOn: !1 },
      { name: "unload_control", label: n("cln_unload_control", "🎛️ Unload ControlNet / Adapter"), defaultOn: !1 }
    ]);
    function i(s, a) {
      const r = t.state.nodeState[s];
      return typeof r == "boolean" ? r : a;
    }
    function o(s, a) {
      t.state.nodeState[s] = a;
    }
    return (s, a) => (F(), P("div", eg, [
      (F(!0), P(ce, null, Me(l.value, (r) => (F(), Ae(f(fn), {
        key: r.name,
        "model-value": i(r.name, r.defaultOn) ? "ON" : "OFF",
        label: r.label,
        "onUpdate:modelValue": (c) => o(r.name, c === "ON")
      }, null, 8, ["model-value", "label", "onUpdate:modelValue"]))), 128))
    ]));
  }
}), ng = /* @__PURE__ */ Se(tg, [["__scopeId", "data-v-3d68b764"]]), lg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ng
}, Symbol.toStringTag, { value: "Module" })), ig = { class: "fil-up-root" }, og = { class: "fil-up-row fil-up-row-overlap" }, sg = ["title"], ag = ["title"], rg = { class: "fil-up-row" }, ug = ["title"], cg = ["title"], dg = /* @__PURE__ */ ye({
  __name: "UpscaleTileCalc",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Et(), l = ["Low VRAM", "Balanced", "High VRAM", "Max Quality", "Ultra Quality"], i = {
      "Low VRAM": "🪫 Low VRAM",
      Balanced: "⚖️ Balanced",
      "High VRAM": "🔋 High VRAM",
      "Max Quality": "💎 Max Quality",
      "Ultra Quality": "👑 Ultra Quality"
    };
    function o(C, v) {
      return X({
        get: () => Number(t.state.nodeState[C] ?? t.state.initialValues[C] ?? v) || v,
        set: (y) => {
          t.state.nodeState[C] = y;
        }
      });
    }
    function s(C, v) {
      return X({
        get: () => t.state.nodeState[C] ?? t.state.initialValues[C] ?? v ? "ON" : "OFF",
        set: (y) => {
          t.state.nodeState[C] = y === "ON";
        }
      });
    }
    const a = o("upscale_factor", 2), r = o("tile_size", 1024), c = o("tile_overlap", 64), u = o("manual_tile_cols", 0), d = o("manual_tile_rows", 0), m = s("auto_overlap", !1), h = s("auto_mode", !1), p = s("non_square_tiles", !1), _ = s("auto_fix_thin_edges", !1), A = X({
      get: () => String(t.state.nodeState.auto_profile ?? t.state.initialValues.auto_profile ?? "Balanced"),
      set: (C) => {
        t.state.nodeState.auto_profile = C;
      }
    });
    function w(C) {
      return !!t.state.ui[`collapsed_${C}`];
    }
    function b(C, v) {
      t.state.ui[`collapsed_${C}`] = v;
    }
    return Te(() => t.state.nodeState, () => {
    }, { deep: !0 }), (C, v) => (F(), P("div", ig, [
      $(f(Ie), {
        "model-value": f(a),
        min: 0.1,
        max: 8,
        step: 0.25,
        label: f(n)("lbl_upscale_factor", "🔍 Upscale factor"),
        title: f(n)("utc_factor", "Upscale multiplier."),
        "onUpdate:modelValue": v[0] || (v[0] = (y) => a.value = y)
      }, null, 8, ["model-value", "label", "title"]),
      $(f(Qe), {
        title: f(n)("utc_section_auto", "⚙️ Auto / advanced"),
        "model-value": w("auto"),
        "onUpdate:modelValue": v[1] || (v[1] = (y) => b("auto", y))
      }, null, 8, ["title", "model-value"]),
      w("auto") ? ee("", !0) : (F(), P(ce, { key: 0 }, [
        $(f(fn), {
          "model-value": f(h),
          label: f(n)("lbl_full_auto", "🤖 Full auto"),
          title: f(n)("utc_auto_mode", "Pick tile size/overlap automatically from the selected VRAM profile."),
          "onUpdate:modelValue": v[2] || (v[2] = (y) => h.value = y)
        }, null, 8, ["model-value", "label", "title"]),
        f(h) === "ON" ? (F(), Ae(f(pt), {
          key: 0,
          options: [...l],
          "option-labels": i,
          "model-value": A.value,
          label: f(n)("lbl_auto_profile", "🎚️ Auto profile"),
          title: f(n)("utc_auto_profile", "VRAM/quality profile used when Full Auto is on."),
          "onUpdate:modelValue": v[3] || (v[3] = (y) => A.value = y)
        }, null, 8, ["options", "model-value", "label", "title"])) : ee("", !0),
        f(h) === "OFF" ? (F(), P(ce, { key: 1 }, [
          D("div", og, [
            D("label", {
              class: "fil-w-label",
              title: f(n)("utc_tile_size", "Base tile size.")
            }, z(f(n)("lbl_tile_size", "🔲 Tile size")), 9, sg),
            $(f(en), {
              modelValue: f(r),
              "onUpdate:modelValue": v[4] || (v[4] = (y) => /* @__PURE__ */ de(r) ? r.value = y : null),
              min: 64,
              max: 2048,
              step: 64
            }, null, 8, ["modelValue"]),
            D("label", {
              class: "fil-w-label",
              title: f(n)("utc_overlap", "Tile overlap.")
            }, z(f(n)("lbl_overlap", "🧵 Overlap")), 9, ag),
            $(f(en), {
              modelValue: f(c),
              "onUpdate:modelValue": v[5] || (v[5] = (y) => /* @__PURE__ */ de(c) ? c.value = y : null),
              min: 0,
              max: 512,
              step: 8,
              disabled: f(m) === "ON"
            }, null, 8, ["modelValue", "disabled"]),
            $(f(fn), {
              bare: "",
              "model-value": f(m),
              label: f(n)("lbl_auto_overlap", "🧵 Auto"),
              title: f(n)("utc_auto_overlap", "Derive overlap automatically from tile size (~12.5%) instead of the fixed value above."),
              "onUpdate:modelValue": v[6] || (v[6] = (y) => m.value = y)
            }, null, 8, ["model-value", "label", "title"])
          ]),
          D("div", rg, [
            D("label", {
              class: "fil-w-label",
              title: f(n)("utc_manual_cols", "Force this many tile columns. 0 = compute from tile size.")
            }, z(f(n)("lbl_manual_cols", "↔️ Cols")), 9, ug),
            $(f(en), {
              modelValue: f(u),
              "onUpdate:modelValue": v[7] || (v[7] = (y) => /* @__PURE__ */ de(u) ? u.value = y : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"]),
            D("label", {
              class: "fil-w-label",
              title: f(n)("utc_manual_rows", "Force this many tile rows. 0 = compute from tile size.")
            }, z(f(n)("lbl_manual_rows", "↕️ Rows")), 9, cg),
            $(f(en), {
              modelValue: f(d),
              "onUpdate:modelValue": v[8] || (v[8] = (y) => /* @__PURE__ */ de(d) ? d.value = y : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"])
          ]),
          $(f(fn), {
            "model-value": f(_),
            label: f(n)("lbl_auto_fix_edges", "🩹 Auto-fix thin edges"),
            title: f(n)("utc_auto_fix_edges", "Shrink tile_size to the next standard size instead of just warning when the grid would leave a thin edge tile."),
            "onUpdate:modelValue": v[9] || (v[9] = (y) => _.value = y)
          }, null, 8, ["model-value", "label", "title"])
        ], 64)) : ee("", !0)
      ], 64)),
      $(f(fn), {
        "model-value": f(p),
        label: f(n)("lbl_non_square", "📐 Non-square tiles"),
        title: f(n)("utc_non_square", "Allow rectangular tiles instead of forcing square ones."),
        "onUpdate:modelValue": v[10] || (v[10] = (y) => p.value = y)
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), fg = /* @__PURE__ */ Se(dg, [["__scopeId", "data-v-57658737"]]), qa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fg
}, Symbol.toStringTag, { value: "Module" })), pg = { class: "fil-hrf-root" }, mg = {
  key: 2,
  class: "fil-hrf-seed-row"
}, hg = ["value", "readonly", "title"], gg = ["title"], _g = ["title"], bg = ["title"], vg = /* @__PURE__ */ ye({
  __name: "HiResFix",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Et();
    function l(k, M) {
      return X({
        get: () => Number(t.state.nodeState[k] ?? t.state.initialValues[k] ?? M) || M,
        set: (j) => {
          t.state.nodeState[k] = j;
        }
      });
    }
    function i(k, M) {
      return X({
        get: () => String(t.state.nodeState[k] ?? t.state.initialValues[k] ?? M),
        set: (j) => {
          t.state.nodeState[k] = j;
        }
      });
    }
    function o(k, M) {
      return X({
        get: () => t.state.nodeState[k] ?? t.state.initialValues[k] ?? M ? "ON" : "OFF",
        set: (j) => {
          t.state.nodeState[k] = j === "ON";
        }
      });
    }
    function s(k, M) {
      var Ee;
      const j = t.state.node, Z = j ? oe(j, k) : null, le = (Ee = Z == null ? void 0 : Z.options) == null ? void 0 : Ee.values;
      return Array.isArray(le) && le.length ? le : M;
    }
    const a = i("upscale_type", "latent"), r = i("hires_ckpt_name", "(use same)"), c = i("latent_upscaler", "nearest-exact"), u = i("pixel_upscaler", ""), d = l("upscale_by", 1.25), m = o("use_same_seed", !0), h = l("denoise", 0.56), p = l("hires_steps", 12), _ = l("iterations", 1), A = o("use_controlnet", !1), w = i("control_net_name", ""), b = l("strength", 1), C = i("preprocessor", "none"), v = X(() => s("hires_ckpt_name", ["(use same)"])), y = ["nearest-exact", "bilinear", "area", "bicubic", "bislerp"], S = X(() => s("pixel_upscaler", ["(none)"])), T = X(() => s("control_net_name", ["(none)"])), G = X(() => s("preprocessor", ["none", "canny"])), E = X(() => a.value === "latent"), W = X(() => a.value === "pixel" || a.value === "both"), J = X({
      get: () => t.state.nodeState.seed_mode ?? "random",
      set: (k) => {
        t.state.nodeState.seed_mode = k;
      }
    }), L = X({
      get: () => Number(t.state.nodeState.seed ?? 0) || 0,
      // Write the native seed widget directly, not just nodeState: the
      // createSyncedNodeState mirror doesn't reach the seed widget (its value is
      // a prototype accessor tied to control_after_generate's linked-widget
      // machinery, unlike the plain numeric widgets), so a fixed seed set only
      // via nodeState never reaches the queued prompt. Direct assignment sticks.
      set: (k) => {
        t.state.nodeState.seed = k;
        const M = t.state.node ? oe(t.state.node, "seed") : null;
        M && (M.value = k);
      }
    }), I = X(() => J.value === "fixed" ? `${L.value}` : "random");
    Te([m, J], ([k, M]) => {
      const j = t.state.node, Z = j ? oe(j, "control_after_generate") : null;
      Z && (Z.value = k === "ON" || M === "fixed" ? "fixed" : "randomize");
    }, { immediate: !0 });
    function O() {
      J.value = "random";
    }
    function ne() {
      const k = t.state.node, M = k ? oe(k, "seed") : null, j = M && Number.isFinite(Number(M.value)) ? Number(M.value) : t.state.lastRunSeed;
      if (j == null || !Number.isFinite(j)) {
        Lt.warning("No last-run seed recorded yet");
        return;
      }
      L.value = j, J.value = "fixed";
    }
    function R() {
      const k = Math.floor(Math.random() * 1e9) & 2147483647;
      L.value = k, J.value = "fixed";
    }
    return (k, M) => (F(), P("div", pg, [
      $(f(pt), {
        options: ["latent", "pixel", "both"],
        "option-labels": { latent: "🌀 latent", pixel: "🖼️ pixel", both: "🔀 both" },
        "model-value": f(a),
        label: f(n)("lbl_upscale_type", "⬆️ Upscale type"),
        title: f(n)("hrf_upscale_type", "Upscale in latent space, pixel space, or both."),
        "onUpdate:modelValue": M[0] || (M[0] = (j) => a.value = j)
      }, null, 8, ["model-value", "label", "title"]),
      E.value ? (F(), Ae(f(pl), {
        key: 0,
        options: y,
        "model-value": f(c),
        label: f(n)("lbl_latent_up", "🌀 Latent upscaler"),
        title: f(n)("hrf_latent_up", "Latent upscale method."),
        "onUpdate:modelValue": M[1] || (M[1] = (j) => c.value = j)
      }, null, 8, ["model-value", "label", "title"])) : ee("", !0),
      W.value ? (F(), Ae(f(pl), {
        key: 1,
        options: S.value,
        "model-value": f(u),
        label: f(n)("lbl_pixel_up", "🖼️ Pixel upscaler"),
        title: f(n)("hrf_pixel_up", "Pixel upscale model (from upscale_models)."),
        "onUpdate:modelValue": M[2] || (M[2] = (j) => u.value = j)
      }, null, 8, ["options", "model-value", "label", "title"])) : ee("", !0),
      $(f(pl), {
        options: v.value,
        "model-value": f(r),
        label: f(n)("lbl_hires_ckpt", "📦 Hires checkpoint"),
        title: f(n)("hrf_ckpt", "Checkpoint for the hires pass. (use same) reuses the base model."),
        "onUpdate:modelValue": M[3] || (M[3] = (j) => r.value = j)
      }, null, 8, ["options", "model-value", "label", "title"]),
      $(f(Ie), {
        "model-value": f(d),
        min: 0.01,
        max: 8,
        step: 0.05,
        label: f(n)("lbl_upscale_by", "🔍 Upscale by"),
        title: f(n)("hrf_upscale_by", "Upscale multiplier."),
        "onUpdate:modelValue": M[4] || (M[4] = (j) => d.value = j)
      }, null, 8, ["model-value", "label", "title"]),
      $(f(Ie), {
        "model-value": f(h),
        min: 0,
        max: 1,
        step: 0.01,
        label: f(n)("lbl_hrf_denoise", "💧 Denoise"),
        title: f(n)("hrf_denoise", "Denoise strength for the hires re-sample."),
        "onUpdate:modelValue": M[5] || (M[5] = (j) => h.value = j)
      }, null, 8, ["model-value", "label", "title"]),
      $(f(en), {
        modelValue: f(p),
        "onUpdate:modelValue": M[6] || (M[6] = (j) => /* @__PURE__ */ de(p) ? p.value = j : null),
        min: 1,
        max: 1e4,
        step: 1,
        label: f(n)("lbl_hires_steps", "🪜 Hires steps"),
        title: f(n)("hrf_steps", "Steps for the hires re-sample.")
      }, null, 8, ["modelValue", "label", "title"]),
      $(f(en), {
        modelValue: f(_),
        "onUpdate:modelValue": M[7] || (M[7] = (j) => /* @__PURE__ */ de(_) ? _.value = j : null),
        min: 0,
        max: 5,
        step: 1,
        label: f(n)("lbl_iterations", "🔁 Iterations"),
        title: f(n)("hrf_iterations", "How many upscale+resample passes to run.")
      }, null, 8, ["modelValue", "label", "title"]),
      $(f(pt), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "♻️ same seed", OFF: "🎲 own" },
        "model-value": f(m),
        label: f(n)("lbl_use_same_seed", "🌱 Seed source"),
        title: f(n)("hrf_same_seed", "Reuse the samplers seed for the hires pass."),
        "onUpdate:modelValue": M[8] || (M[8] = (j) => m.value = j)
      }, null, 8, ["model-value", "label", "title"]),
      f(m) === "OFF" ? (F(), P("div", mg, [
        D("input", {
          value: I.value,
          type: "text",
          class: me(["fil-hrf-seed-field", { "is-random": J.value === "random" }]),
          readonly: J.value === "random",
          "aria-label": "Hires seed value",
          title: J.value === "fixed" ? f(n)("hrf_seed_locked", "Locked hires seed") : f(n)("hrf_seed_auto_random", "Auto-random — a new hires seed is generated each run"),
          onInput: M[9] || (M[9] = (j) => L.value = Number(j.target.value) || 0)
        }, null, 42, hg),
        D("button", {
          type: "button",
          class: me(["fil-hrf-seed-pill", { active: J.value === "random" }]),
          title: f(n)("hrf_seed_mode_tt", "Random generates a new hires seed each run."),
          onClick: O
        }, z(f(n)("hrf_seed_random", "Random")), 11, gg),
        D("button", {
          type: "button",
          class: "fil-hrf-seed-pill",
          title: t.state.lastRunSeed != null ? `${f(n)("hrf_seed_use_last_prefix", "Reuse the last run's hires seed:")} ${t.state.lastRunSeed}` : f(n)("hrf_seed_use_last_tt", "Reuse the hires seed from the last executed run."),
          onClick: ne
        }, z(f(n)("hrf_seed_use_last", "Use last")), 9, _g),
        D("button", {
          type: "button",
          class: "fil-hrf-seed-pill fil-hrf-seed-pill-accent",
          title: f(n)("hrf_seed_new_fixed_tt", "Generate a new random fixed hires seed."),
          onClick: R
        }, z(f(n)("hrf_seed_new_fixed", "New fixed")), 9, bg)
      ])) : ee("", !0),
      $(f(pt), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "🕹️ ON", OFF: "OFF" },
        "model-value": f(A),
        label: f(n)("lbl_use_cn", "🕹️ Use ControlNet"),
        title: f(n)("hrf_use_cn", "Guide the hires pass with a ControlNet. Tile ControlNets work without a preprocessor."),
        "onUpdate:modelValue": M[10] || (M[10] = (j) => A.value = j)
      }, null, 8, ["model-value", "label", "title"]),
      f(A) === "ON" ? (F(), P(ce, { key: 3 }, [
        $(f(pl), {
          options: T.value,
          "model-value": f(w),
          label: f(n)("lbl_cn_name", "🧩 ControlNet model"),
          title: f(n)("hrf_cn_name", "ControlNet model to apply."),
          "onUpdate:modelValue": M[11] || (M[11] = (j) => w.value = j)
        }, null, 8, ["options", "model-value", "label", "title"]),
        $(f(Ie), {
          "model-value": f(b),
          min: 0,
          max: 10,
          step: 0.01,
          label: f(n)("lbl_cn_strength", "💪 Strength"),
          title: f(n)("hrf_cn_strength", "ControlNet strength."),
          "onUpdate:modelValue": M[12] || (M[12] = (j) => b.value = j)
        }, null, 8, ["model-value", "label", "title"]),
        $(f(pt), {
          options: G.value,
          "option-labels": { none: "🚫 none", canny: "🪞 canny" },
          "model-value": f(C),
          label: f(n)("lbl_cn_preproc", "🧪 Preprocessor"),
          title: f(n)("hrf_cn_preproc", "Preprocess the ControlNet hint image. 'none' feeds the raw upscaled image (right for tile ControlNets)."),
          "onUpdate:modelValue": M[13] || (M[13] = (j) => C.value = j)
        }, null, 8, ["options", "model-value", "label", "title"])
      ], 64)) : ee("", !0)
    ]));
  }
}), yg = /* @__PURE__ */ Se(vg, [["__scopeId", "data-v-30b15350"]]), wg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yg
}, Symbol.toStringTag, { value: "Module" })), Sg = { class: "fil-style-mixer-root" }, xg = /* @__PURE__ */ ye({
  __name: "StyleMixer",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Et(), l = ro.FiLStyleMixer, i = (l == null ? void 0 : l.inputs.required.find((L) => L.name === "fusion_mode")) || (l == null ? void 0 : l.inputs.optional.find((L) => L.name === "fusion_mode")), o = X(
      () => {
        var L;
        return (L = i == null ? void 0 : i.values) != null && L.length ? i.values : ["Weighted Stack (Fast)"];
      }
    ), s = X(() => ({
      "Weighted Stack (Fast)": n("sm_fusion_fast", "⚡ Fast Stack"),
      "Smart LLM Fusion (Gen-Mix)": n("sm_fusion_smart", "🧬 Smart LLM Fusion")
    }));
    function a(L, I) {
      return X({
        get: () => t.state.nodeState[L] ?? I,
        set: (O) => {
          t.state.nodeState[L] = O;
          const ne = t.state.node ? oe(t.state.node, L) : null;
          ne && (ne.value = O);
        }
      });
    }
    const r = a("fusion_mode", "Weighted Stack (Fast)"), c = a("style_1", "(None)"), u = a("weight_1", 1), d = a("style_2", "(None)"), m = a("weight_2", 0.5), h = a("style_3", "(None)"), p = a("weight_3", 0.3), _ = a("img_weight_1", 0.8), A = a("img_weight_2", 0.6), w = a("img_weight_3", 0.4), b = a("img_weight_4", 0.2), C = /* @__PURE__ */ se(!1), v = /* @__PURE__ */ se(!1), y = /* @__PURE__ */ se(!1), S = X(() => t.state.ui.slotVersion ?? 0);
    function T(L) {
      S.value;
      const I = t.state.node;
      if (!(I != null && I._allInputs)) return !1;
      const O = I._allInputs.find((ne) => ne.name === L);
      return !!(O && O.link != null);
    }
    const G = X(() => T("image_2")), E = X(() => T("image_3"));
    function W(L) {
      var O;
      if (!t.state.node) return [];
      const I = oe(t.state.node, L);
      return ((O = I == null ? void 0 : I.options) == null ? void 0 : O.values) || (I == null ? void 0 : I.values) || [];
    }
    function J(L, I) {
      if (!L || L === "(None)" || L === "None") return `${I}: ${n("sm_none", "(None)")}`;
      const O = L.indexOf("/"), ne = O === -1 ? L : L.slice(O + 1);
      return `${I}: ${ne}`;
    }
    return (L, I) => (F(), P("div", Sg, [
      $(f(Qe), {
        title: f(n)("sm_section_fusion", "🔀 Fusion Mode")
      }, null, 8, ["title"]),
      $(f(pt), {
        modelValue: f(r),
        "onUpdate:modelValue": I[0] || (I[0] = (O) => /* @__PURE__ */ de(r) ? r.value = O : null),
        options: o.value,
        "option-labels": s.value,
        title: f(n)("sm_fusion_tt", "Fast Stack just weights the descriptions. Smart Fusion asks the Vision LLM to synthesize one prompt.")
      }, null, 8, ["modelValue", "options", "option-labels", "title"]),
      $(f(Qe), {
        title: f(n)("sm_section_style_1", "🎨 Primary Style (Style 1)")
      }, null, 8, ["title"]),
      $(f(Ge), {
        variant: "full",
        label: J(f(c), f(n)("sm_style_1", "Style 1")),
        onClick: I[1] || (I[1] = (O) => C.value = !0)
      }, null, 8, ["label"]),
      $(f(Ie), {
        modelValue: f(u),
        "onUpdate:modelValue": I[2] || (I[2] = (O) => /* @__PURE__ */ de(u) ? u.value = O : null),
        min: 0,
        max: 1,
        step: 0.05,
        label: f(n)("sm_style_1_weight", "Style 1 Weight")
      }, null, 8, ["modelValue", "label"]),
      $(f(bn), {
        open: C.value,
        title: f(n)("sm_pick_style_1", "Select Primary Style 1"),
        width: "680px",
        "onUpdate:open": I[4] || (I[4] = (O) => C.value = O)
      }, {
        default: Ht(() => [
          $(f(yl), {
            styles: W("style_1"),
            "model-value": f(c),
            onSelect: I[3] || (I[3] = (O) => {
              c.value = O, C.value = !1;
            })
          }, null, 8, ["styles", "model-value"])
        ]),
        _: 1
      }, 8, ["open", "title"]),
      $(f(Qe), {
        title: f(n)("sm_section_style_2", "🧪 Secondary Style (Style 2)")
      }, null, 8, ["title"]),
      $(f(Ge), {
        variant: "full",
        label: J(f(d), f(n)("sm_style_2", "Style 2")),
        onClick: I[5] || (I[5] = (O) => v.value = !0)
      }, null, 8, ["label"]),
      $(f(Ie), {
        modelValue: f(m),
        "onUpdate:modelValue": I[6] || (I[6] = (O) => /* @__PURE__ */ de(m) ? m.value = O : null),
        min: 0,
        max: 1,
        step: 0.05,
        label: f(n)("sm_style_2_weight", "Style 2 Weight")
      }, null, 8, ["modelValue", "label"]),
      $(f(bn), {
        open: v.value,
        title: f(n)("sm_pick_style_2", "Select Secondary Style 2"),
        width: "680px",
        "onUpdate:open": I[8] || (I[8] = (O) => v.value = O)
      }, {
        default: Ht(() => [
          $(f(yl), {
            styles: W("style_2"),
            "model-value": f(d),
            onSelect: I[7] || (I[7] = (O) => {
              d.value = O, v.value = !1;
            })
          }, null, 8, ["styles", "model-value"])
        ]),
        _: 1
      }, 8, ["open", "title"]),
      $(f(Qe), {
        title: f(n)("sm_section_style_3", "✨ Tertiary Style (Style 3)")
      }, null, 8, ["title"]),
      $(f(Ge), {
        variant: "full",
        label: J(f(h), f(n)("sm_style_3", "Style 3")),
        onClick: I[9] || (I[9] = (O) => y.value = !0)
      }, null, 8, ["label"]),
      $(f(Ie), {
        modelValue: f(p),
        "onUpdate:modelValue": I[10] || (I[10] = (O) => /* @__PURE__ */ de(p) ? p.value = O : null),
        min: 0,
        max: 1,
        step: 0.05,
        label: f(n)("sm_style_3_weight", "Style 3 Weight")
      }, null, 8, ["modelValue", "label"]),
      $(f(bn), {
        open: y.value,
        title: f(n)("sm_pick_style_3", "Select Tertiary Style 3"),
        width: "680px",
        "onUpdate:open": I[12] || (I[12] = (O) => y.value = O)
      }, {
        default: Ht(() => [
          $(f(yl), {
            styles: W("style_3"),
            "model-value": f(h),
            onSelect: I[11] || (I[11] = (O) => {
              h.value = O, y.value = !1;
            })
          }, null, 8, ["styles", "model-value"])
        ]),
        _: 1
      }, 8, ["open", "title"]),
      $(f(Qe), {
        title: f(n)("sm_section_image_1", "🖼️ Image 1 Influence")
      }, null, 8, ["title"]),
      $(f(Ie), {
        modelValue: f(_),
        "onUpdate:modelValue": I[13] || (I[13] = (O) => /* @__PURE__ */ de(_) ? _.value = O : null),
        min: 0,
        max: 1,
        step: 0.05,
        label: f(n)("sm_image_1_weight", "Image 1 Weight")
      }, null, 8, ["modelValue", "label"]),
      $(f(Qe), {
        title: f(n)("sm_section_image_2", "🖼️ Image 2 Influence")
      }, null, 8, ["title"]),
      $(f(Ie), {
        modelValue: f(A),
        "onUpdate:modelValue": I[14] || (I[14] = (O) => /* @__PURE__ */ de(A) ? A.value = O : null),
        min: 0,
        max: 1,
        step: 0.05,
        label: f(n)("sm_image_2_weight", "Image 2 Weight")
      }, null, 8, ["modelValue", "label"]),
      G.value ? (F(), P(ce, { key: 0 }, [
        $(f(Qe), {
          title: f(n)("sm_section_image_3", "🖼️ Image 3 Influence")
        }, null, 8, ["title"]),
        $(f(Ie), {
          modelValue: f(w),
          "onUpdate:modelValue": I[15] || (I[15] = (O) => /* @__PURE__ */ de(w) ? w.value = O : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: f(n)("sm_image_3_weight", "Image 3 Weight")
        }, null, 8, ["modelValue", "label"])
      ], 64)) : ee("", !0),
      E.value ? (F(), P(ce, { key: 1 }, [
        $(f(Qe), {
          title: f(n)("sm_section_image_4", "🖼️ Image 4 Influence")
        }, null, 8, ["title"]),
        $(f(Ie), {
          modelValue: f(b),
          "onUpdate:modelValue": I[16] || (I[16] = (O) => /* @__PURE__ */ de(b) ? b.value = O : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: f(n)("sm_image_4_weight", "Image 4 Weight")
        }, null, 8, ["modelValue", "label"])
      ], 64)) : ee("", !0)
    ]));
  }
}), Cg = /* @__PURE__ */ Se(xg, [["__scopeId", "data-v-022d49e2"]]), Ag = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cg
}, Symbol.toStringTag, { value: "Module" })), Mg = { class: "fil-color-wizard-root" }, Fg = { class: "fil-cw-presets-block" }, kg = { class: "fil-cw-presets-title" }, Lg = { class: "fil-cw-presets-grid" }, Ig = ["title"], Dg = ["title"], Pg = ["title"], Rg = ["title"], Ng = { class: "fil-cw-slider-group" }, Tg = /* @__PURE__ */ ye({
  __name: "ColorWizard",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = Et(), l = ro.FiLColorWizard, i = (l == null ? void 0 : l.inputs.required.find((h) => h.name === "method")) || (l == null ? void 0 : l.inputs.optional.find((h) => h.name === "method")), o = X(
      () => {
        var h;
        return ((h = i == null ? void 0 : i.values) != null && h.length ? i.values : ["Full Auto"]).map((p) => ({ value: p }));
      }
    );
    function s(h, p) {
      return X({
        get: () => t.state.nodeState[h] ?? p,
        set: (_) => {
          t.state.nodeState[h] = _;
          const A = t.state.node ? oe(t.state.node, h) : null;
          A && (A.value = _);
        }
      });
    }
    const a = s("method", "Full Auto"), r = s("strength", 0.8), c = s("temperature", 0), u = s("tint", 0), d = s("preserve_skin", !1);
    function m(h) {
      h === "warm" ? (a.value = "Full Auto", c.value = 0.35, u.value = 0, r.value = 0.8, d.value = !0) : h === "cool" ? (a.value = "Full Auto", c.value = -0.35, u.value = 0.15, r.value = 0.85, d.value = !1) : h === "skin" ? (a.value = "White Patch", c.value = 0.05, u.value = 0, r.value = 0.75, d.value = !0) : h === "contrast" && (a.value = "LAB Enhance", c.value = 0, u.value = 0, r.value = 0.9, d.value = !1);
    }
    return (h, p) => (F(), P("div", Mg, [
      D("div", Fg, [
        D("div", kg, z(f(n)("cw_presets", "⚡ Quick Presets")), 1),
        D("div", Lg, [
          D("button", {
            type: "button",
            class: "fil-cw-preset-btn warm",
            title: f(n)("cw_preset_warm_tt", "Warm Sunny Tone"),
            onClick: p[0] || (p[0] = (_) => m("warm"))
          }, z(f(n)("cw_preset_warm", "☀️ Warm Sun")), 9, Ig),
          D("button", {
            type: "button",
            class: "fil-cw-preset-btn cool",
            title: f(n)("cw_preset_cool_tt", "Cool Sci-Fi Cyberpunk Tone"),
            onClick: p[1] || (p[1] = (_) => m("cool"))
          }, z(f(n)("cw_preset_cool", "🧊 Cool Sci-Fi")), 9, Dg),
          D("button", {
            type: "button",
            class: "fil-cw-preset-btn skin",
            title: f(n)("cw_preset_skin_tt", "Natural Skin Preservation"),
            onClick: p[2] || (p[2] = (_) => m("skin"))
          }, z(f(n)("cw_preset_skin", "👤 Skin Protect")), 9, Pg),
          D("button", {
            type: "button",
            class: "fil-cw-preset-btn contrast",
            title: f(n)("cw_preset_contrast_tt", "Punchy LAB Contrast"),
            onClick: p[3] || (p[3] = (_) => m("contrast"))
          }, z(f(n)("cw_preset_contrast", "⚡ Contrast")), 9, Rg)
        ])
      ]),
      $(f(Qe), {
        title: f(n)("cw_section_method", "⚙️ Method")
      }, null, 8, ["title"]),
      $(f(kp), {
        modelValue: f(a),
        "onUpdate:modelValue": p[4] || (p[4] = (_) => /* @__PURE__ */ de(a) ? a.value = _ : null),
        options: o.value,
        title: f(n)("tt_cw_method", "Correction algorithm.")
      }, null, 8, ["modelValue", "options", "title"]),
      $(f(Qe), {
        title: f(n)("cw_section_adjust", "🎛️ Adjustments")
      }, null, 8, ["title"]),
      D("div", Ng, [
        $(f(Ie), {
          modelValue: f(r),
          "onUpdate:modelValue": p[5] || (p[5] = (_) => /* @__PURE__ */ de(r) ? r.value = _ : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: f(n)("cw_strength", "Correction Strength"),
          title: f(n)("tt_cw_strength", "Correction strength (0 = no change).")
        }, null, 8, ["modelValue", "label", "title"]),
        $(f(Ie), {
          modelValue: f(c),
          "onUpdate:modelValue": p[6] || (p[6] = (_) => /* @__PURE__ */ de(c) ? c.value = _ : null),
          min: -1,
          max: 1,
          step: 0.05,
          label: f(n)("cw_temperature", "Temperature (Warm/Cool)"),
          title: f(n)("tt_cw_temperature", "Colour temperature.")
        }, null, 8, ["modelValue", "label", "title"]),
        $(f(Ie), {
          modelValue: f(u),
          "onUpdate:modelValue": p[7] || (p[7] = (_) => /* @__PURE__ */ de(u) ? u.value = _ : null),
          min: -1,
          max: 1,
          step: 0.05,
          label: f(n)("cw_tint", "Tint (Green/Magenta)"),
          title: f(n)("tt_cw_tint", "Colour tint.")
        }, null, 8, ["modelValue", "label", "title"])
      ]),
      $(f(fn), {
        "model-value": f(d) ? "ON" : "OFF",
        label: f(n)("cw_preserve_skin", "🛡️ Preserve Skin Tones"),
        title: f(n)("tt_cw_preserve_skin", "Preserve skin tones."),
        "onUpdate:modelValue": p[8] || (p[8] = (_) => d.value = _ === "ON")
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), Eg = /* @__PURE__ */ Se(Tg, [["__scopeId", "data-v-3228ee08"]]), Og = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Eg
}, Symbol.toStringTag, { value: "Module" })), Vg = {
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
}, $g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HELP_DEFAULTS: Vg
}, Symbol.toStringTag, { value: "Module" }));
//# sourceMappingURL=fil_design_imagemind.js.map
