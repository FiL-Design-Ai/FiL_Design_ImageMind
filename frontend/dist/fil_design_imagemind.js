(function(){try{var s=document.createElement("style");s.textContent=".fil-color-picker[data-v-969386c1]{display:flex;flex-direction:column;gap:8px;padding:8px;width:176px;box-sizing:border-box}.fil-cp-sv[data-v-969386c1]{position:relative;width:100%;height:100px;border-radius:4px;cursor:crosshair;touch-action:none}.fil-cp-sv-white[data-v-969386c1]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to right,#fff,#fff0);border-radius:4px}.fil-cp-sv-black[data-v-969386c1]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to top,#000,#0000);border-radius:4px}.fil-cp-sv-thumb[data-v-969386c1]{position:absolute;width:10px;height:10px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hue[data-v-969386c1]{position:relative;width:100%;height:12px;border-radius:6px;background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red);cursor:pointer;touch-action:none}.fil-cp-hue-thumb[data-v-969386c1]{position:absolute;top:50%;width:12px;height:12px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hex-row[data-v-969386c1]{display:flex;align-items:center;gap:6px}.fil-cp-swatch[data-v-969386c1]{width:22px;height:22px;border-radius:4px;border:1px solid rgba(255,255,255,.25);flex-shrink:0}.fil-cp-hex-input[data-v-969386c1]{flex:1;min-width:0;height:22px;box-sizing:border-box;border-radius:4px;border:1px solid rgba(255,255,255,.2);background:#00000040;color:#f2f2f2;font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:12px;padding:0 6px;outline:none}.fil-cp-hex-input[data-v-969386c1]:focus{border-color:#ffffff80}.fil-cp-presets[data-v-969386c1]{display:grid;grid-template-columns:repeat(5,1fr);gap:4px}.fil-color-swatch[data-v-969386c1]{width:24px;height:24px;border-radius:4px;border:2px solid transparent;background:var(--swatch);cursor:pointer;transition:border-color .08s,transform .08s;outline:none;box-sizing:border-box}.fil-color-swatch[data-v-969386c1]:hover{border-color:#ffffff80;transform:scale(1.15)}.fil-color-swatch.is-active[data-v-969386c1]{border-color:#fff;box-shadow:0 0 0 1px var(--swatch)}.fil-node-shell[data-v-cb614e72]{position:relative;width:100%;box-sizing:border-box;height:100%}.fil-icon[data-v-dfb78d9f]{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;line-height:0}.fil-icon[data-v-dfb78d9f] svg{width:100%;height:100%}.fil-modal-backdrop[data-v-0b20f2bd]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000;display:flex;align-items:center;justify-content:center;background:#0000008c;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.fil-modal-panel[data-v-0b20f2bd]{width:90%;max-height:80vh;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:10px;box-shadow:0 20px 60px #00000080;display:flex;flex-direction:column;overflow:hidden}.fil-modal-header[data-v-0b20f2bd]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08)}.fil-modal-title[data-v-0b20f2bd]{font-size:14px;font-weight:600;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-close[data-v-0b20f2bd]{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;border:none;background:transparent;color:var(--fil-muted, rgba(255, 255, 255, .5));cursor:pointer;transition:background .08s,color .08s}.fil-modal-close[data-v-0b20f2bd]:hover{background:#ffffff14;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-body[data-v-0b20f2bd]{flex:1;overflow-y:auto;padding:16px}.fil-modal-enter-active[data-v-0b20f2bd],.fil-modal-leave-active[data-v-0b20f2bd]{transition:opacity .15s ease}.fil-modal-enter-from[data-v-0b20f2bd],.fil-modal-leave-to[data-v-0b20f2bd]{opacity:0}.fil-modal-enter-active .fil-modal-panel[data-v-0b20f2bd],.fil-modal-leave-active .fil-modal-panel[data-v-0b20f2bd]{transition:transform .15s ease}.fil-modal-enter-from .fil-modal-panel[data-v-0b20f2bd],.fil-modal-leave-to .fil-modal-panel[data-v-0b20f2bd]{transform:scale(.95) translateY(8px)}.fil-help-title[data-v-536c1547]{margin:0 0 12px;font-size:16px;font-weight:700;color:var(--fil-text, rgba(255,255,255,.9))}.fil-help-body[data-v-536c1547]{margin:0 0 12px;font-size:13px;line-height:1.6;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet[data-v-536c1547]{display:flex;gap:6px;align-items:flex-start;margin-bottom:6px;font-size:13px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet>span[data-v-536c1547]{flex:1}.fil-help-table[data-v-536c1547]{width:100%;border-collapse:collapse;margin-top:8px;font-size:12px}.fil-help-table th[data-v-536c1547],.fil-help-table td[data-v-536c1547]{text-align:left;padding:6px 10px;border-bottom:1px solid rgba(255,255,255,.06)}.fil-help-table th[data-v-536c1547]{font-weight:600;color:var(--fil-text, rgba(255,255,255,.85))}.fil-help-table td[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.6))}.fil-help-code[data-v-536c1547]{background:#0000004d;border-radius:6px;padding:12px;margin-top:10px;overflow-x:auto;font-size:12px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-empty[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.4));font-size:13px}.fil-w-btn[data-v-1c6537e0]{box-sizing:border-box;padding:var(--fil-row-pad);border-radius:6px;background:#ffffff0d;border:1px solid rgba(255,255,255,.14);color:var(--fil-text, rgba(255, 255, 255, .85));font-family:ui-sans-serif,system-ui,sans-serif;font-size:12px;cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;display:inline-flex;align-items:center;justify-content:center;gap:6px}.fil-w-btn[data-v-1c6537e0]:hover:not(:disabled){background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #fff)}.fil-w-btn[data-v-1c6537e0]:active{transform:translateY(1px)}.fil-w-btn[data-v-1c6537e0]:disabled{opacity:.4;cursor:default}.fil-w-btn-accent[data-v-1c6537e0]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #fff)}.fil-w-btn-danger[data-v-1c6537e0]{color:var(--fil-danger, #ef6666)}.fil-w-btn-danger[data-v-1c6537e0]:hover:not(:disabled){background:var(--fil-danger, #ef6666);border-color:var(--fil-danger, #ef6666);color:#fff}.fil-w-btn-sm[data-v-1c6537e0]{padding:4px 8px;font-size:11px}.fil-w-btn-full[data-v-1c6537e0]{width:100%;display:block}.fil-w-btn-icon[data-v-1c6537e0]{display:inline-flex;align-items:center;justify-content:center;gap:5px}.fil-w-btn-glyph[data-v-1c6537e0] svg{width:14px;height:14px}.fil-w-btn.is-flashing[data-v-1c6537e0],.fil-w-btn.is-flashing[data-v-1c6537e0]:hover{background:var(--fil-ok, #62c987);border-color:var(--fil-ok, #62c987);color:#fff}.fil-w-btn.is-loading[data-v-1c6537e0]{cursor:wait}.fil-w-btn[data-v-1c6537e0]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-btn-spinner[data-v-1c6537e0]{display:inline-block;width:12px;height:12px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:fil-w-spin-1c6537e0 .6s linear infinite}@keyframes fil-w-spin-1c6537e0{to{transform:rotate(360deg)}}.fil-pm-root[data-v-329149a3]{display:flex;flex-direction:column;gap:12px;padding:4px 0}.fil-pm-card[data-v-329149a3]{background:#ffffff08;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:12px}.fil-pm-header[data-v-329149a3]{display:flex;align-items:center;gap:8px;margin-bottom:10px}.fil-pm-card--collapsed[data-v-329149a3]{padding:8px 12px}.fil-pm-card--collapsed .fil-pm-header[data-v-329149a3]{margin-bottom:0}.fil-pm-header--clickable[data-v-329149a3]{cursor:pointer}.fil-pm-header--clickable:hover .fil-pm-name[data-v-329149a3]{color:var(--fil-accent, #7c5cfc)}.fil-pm-chevron[data-v-329149a3]{display:inline-flex;align-items:center;color:#fff6;transition:transform .12s ease}.fil-pm-chevron--open[data-v-329149a3]{transform:rotate(90deg)}.fil-pm-icon[data-v-329149a3]{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px}.fil-pm-name[data-v-329149a3]{font-weight:600;font-size:14px;color:var(--fil-text, #f2f2f2)}.fil-pm-disp[data-v-329149a3]{font-size:11px;color:#ffffff80}.fil-pm-status[data-v-329149a3]{margin-left:auto;display:inline-flex;align-items:center;gap:5px;font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#fff6;white-space:nowrap}.fil-pm-dot[data-v-329149a3]{width:8px;height:8px;border-radius:50%;background:currentColor;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 22%,transparent)}.fil-pm-status--connected[data-v-329149a3]{color:var(--fil-success, #4ade80)}.fil-pm-status--configured[data-v-329149a3]{color:var(--fil-warning, #fbbf24)}.fil-pm-status--off[data-v-329149a3]{color:#ffffff4d}.fil-pm-fields[data-v-329149a3]{display:flex;flex-direction:column;gap:8px;margin-bottom:10px}.fil-pm-field[data-v-329149a3]{display:flex;flex-direction:column;gap:3px}.fil-pm-field-label[data-v-329149a3]{font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#ffffff80}.fil-pm-input[data-v-329149a3]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,monospace;font-size:13px;outline:none;transition:border-color .08s}.fil-pm-input[data-v-329149a3]:focus{border-color:var(--fil-accent)}.fil-pm-input.fil-pm-has-val[data-v-329149a3]{border-color:var(--fil-muted, #555)}.fil-pm-actions[data-v-329149a3]{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}.fil-pm-models[data-v-329149a3]{display:flex;flex-wrap:wrap;gap:4px}.fil-pm-model-tag[data-v-329149a3]{display:inline-flex;align-items:center;gap:3px;background:#ffffff12;border-radius:4px;padding:2px 6px;font-size:11px;color:#ffffffbf;white-space:nowrap}.fil-pm-vision-badge[data-v-329149a3]{font-size:10px;line-height:1}.fil-pm-err[data-v-329149a3]{font-size:11px;color:var(--fil-danger, #ef6666);margin-top:4px}.fil-pm-age[data-v-329149a3]{font-size:10px;color:#fff6;align-self:center}.fil-w-chips[data-v-9c6ca5d1]{display:grid;gap:5px;width:100%}.fil-w-chip[data-v-9c6ca5d1]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-9c6ca5d1]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-9c6ca5d1]{background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-accent);border-color:var(--fil-accent);font-weight:500;box-shadow:0 0 8px color-mix(in srgb,var(--fil-accent) 55%,transparent)}.fil-w-chip.disabled[data-v-9c6ca5d1]{opacity:.5;cursor:default}.fil-w-chip[data-v-9c6ca5d1]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chiplist[data-v-3c9e19df]{display:flex;flex-direction:column;gap:5px;width:100%}.fil-w-search[data-v-3c9e19df]{box-sizing:border-box;width:100%;padding:5px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:11px;outline:none}.fil-w-search[data-v-3c9e19df]:focus{border-color:var(--fil-accent)}.fil-w-search[data-v-3c9e19df]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-chip-scroll[data-v-3c9e19df]{display:grid;gap:3px;max-height:200px;overflow-y:auto;overflow-x:hidden;padding-right:2px}.fil-w-chip-scroll[data-v-3c9e19df]::-webkit-scrollbar{width:5px}.fil-w-chip-scroll[data-v-3c9e19df]::-webkit-scrollbar-thumb{background:var(--fil-muted, #555);border-radius:3px}.fil-w-chip-scroll[data-v-3c9e19df]::-webkit-scrollbar-track{background:transparent}.fil-w-chip[data-v-3c9e19df]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-3c9e19df]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-3c9e19df]{background:var(--fil-accent);color:var(--fil-accent-ink, #fff);border-color:var(--fil-accent);font-weight:500}.fil-w-chip.disabled[data-v-3c9e19df]{opacity:.5;cursor:default}.fil-w-chip[data-v-3c9e19df]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chip-empty[data-v-3c9e19df]{padding:8px;text-align:center;color:var(--fil-muted, #666);font-size:11px}.fil-combo[data-v-82542923]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-combo-label[data-v-82542923]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-combo-trigger[data-v-82542923]{grid-column:2;width:100%;box-sizing:border-box;height:30px;display:flex;align-items:center;gap:6px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer;text-align:left;-moz-appearance:none;appearance:none;-webkit-appearance:none}.fil-combo-trigger.open[data-v-82542923],.fil-combo-trigger[data-v-82542923]:focus-visible{border-color:var(--fil-accent);outline:2px solid var(--fil-accent);outline-offset:1px}.fil-combo-trigger.disabled[data-v-82542923]{opacity:.5;cursor:default}.fil-combo-trigger-label[data-v-82542923]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-chevron[data-v-82542923]{font-size:9px;color:var(--fil-muted, rgba(255, 255, 255, .5));flex-shrink:0}.fil-combo-badge[data-v-82542923]{flex-shrink:0;font-size:9px;line-height:1;padding:2px 5px;border-radius:999px;background:var(--fil-accent);color:var(--fil-accent-ink, #fff);font-weight:600}.fil-combo-panel[data-v-82542923]{position:fixed;z-index:10001;box-sizing:border-box;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:8px;box-shadow:0 12px 32px #0006;display:flex;flex-direction:column;overflow:hidden;padding:6px}.fil-combo-search[data-v-82542923]{box-sizing:border-box;width:100%;margin-bottom:6px;padding:6px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-combo-search[data-v-82542923]:focus{border-color:var(--fil-accent)}.fil-combo-list[data-v-82542923]{display:flex;flex-direction:column;gap:2px;max-height:240px;overflow-y:auto}.fil-combo-option[data-v-82542923]{display:flex;align-items:center;gap:6px;width:100%;box-sizing:border-box;padding:6px 8px;border-radius:5px;border:none;background:transparent;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;text-align:left;cursor:pointer;outline:none}.fil-combo-option.active[data-v-82542923]{background:#ffffff14}.fil-combo-option.selected[data-v-82542923]{color:var(--fil-accent);font-weight:600}.fil-combo-option-label[data-v-82542923]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-empty[data-v-82542923]{padding:10px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-w-info[data-v-851660c1]{font-size:11px;line-height:1.5;color:#ffffff73;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.fil-w-info[data-ok][data-v-851660c1]{color:var(--fil-ok, #62c987)}.fil-w-info[data-err][data-v-851660c1]{color:var(--fil-danger, #ef6666)}.fil-w-numfield[data-v-2f843ba1]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-numfield.no-label[data-v-2f843ba1]{display:contents}.fil-w-numfield-label[data-v-2f843ba1]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-numfield:not(.no-label) .fil-w-num-wrap[data-v-2f843ba1]{grid-column:2}.fil-w-num-wrap[data-v-2f843ba1]{position:relative;width:100%;min-width:0}.fil-w-num[data-v-2f843ba1]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 20px 7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:14px;text-align:left;outline:none;transition:border-color .08s}.fil-w-num[data-v-2f843ba1]:focus{border-color:var(--fil-accent)}.fil-w-num[data-v-2f843ba1]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-num[data-v-2f843ba1]:disabled{opacity:.5}.fil-w-num-step[data-v-2f843ba1]{position:absolute;top:1px;right:1px;bottom:1px;width:17px;display:flex;flex-direction:column;border-left:1px solid var(--fil-muted, #3a3d40);overflow:hidden;border-radius:0 5px 5px 0}.fil-w-num-btn[data-v-2f843ba1]{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;border:none;background:transparent;color:var(--fil-muted, rgba(255, 255, 255, .55));font-size:7px;line-height:1;cursor:pointer;padding:0;transition:color .08s,background .08s}.fil-w-num-btn[data-v-2f843ba1]:last-child{border-top:1px solid var(--fil-muted, #3a3d40)}.fil-w-num-btn[data-v-2f843ba1]:hover:not(:disabled){color:var(--fil-accent);background:#ffffff12}.fil-w-num-btn[data-v-2f843ba1]:disabled{opacity:.3;cursor:default}.fil-w-section[data-v-4b760ea4]{box-sizing:border-box;width:100%;padding:var(--fil-row-pad);border:none;border-radius:5px;background:#ffffff0a;color:var(--fil-muted, rgba(255, 255, 255, .7));font-family:inherit;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;cursor:pointer;text-align:left;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s;display:flex;align-items:center;gap:6px}.fil-w-section[data-v-4b760ea4]:hover:not(:disabled){background:#ffffff14;color:#fff}.fil-w-section[data-v-4b760ea4]:disabled{cursor:default}.fil-w-section[data-v-4b760ea4]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-section-arrow[data-v-4b760ea4]{display:inline-block;width:8px;font-size:9px;color:var(--fil-accent)}.fil-w-segmented[data-v-765cf0ce]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-segmented-label[data-v-765cf0ce]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-pill[data-v-765cf0ce]{grid-column:2;display:flex;gap:0;min-width:0;background:#ffffff0f;border-radius:7px;padding:3px}.fil-w-pill.disabled[data-v-765cf0ce]{opacity:.5}.fil-w-seg[data-v-765cf0ce]{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center;padding:6px;border:none;border-radius:5px;background:transparent;font-family:inherit;font-size:12px;color:var(--fil-muted, rgba(255, 255, 255, .55));cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s}.fil-w-seg[data-v-765cf0ce]:hover:not(.active){color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-w-seg.active[data-v-765cf0ce]{background:var(--fil-accent);color:var(--fil-accent-ink, #fff);font-weight:500}.fil-w-seg[data-v-765cf0ce]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-select[data-v-a878baba]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-select-label[data-v-a878baba]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-select-input[data-v-a878baba]{grid-column:2;width:100%;box-sizing:border-box;height:30px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer}.fil-w-select-input[data-v-a878baba]:focus{border-color:var(--fil-accent)}.fil-w-select-input[data-v-a878baba]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-select-input[data-v-a878baba]:disabled{opacity:.5;cursor:default}.fil-w-slider[data-v-c8e1921a]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-slider-label[data-v-c8e1921a]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-slider-row[data-v-c8e1921a]{grid-column:2;display:flex;align-items:center;gap:6px;min-width:0}.fil-w-slider-range[data-v-c8e1921a]{flex:1 1 auto;min-width:0;max-width:220px;accent-color:var(--fil-accent);cursor:pointer}.fil-w-slider-range[data-v-c8e1921a]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-slider-row[data-v-c8e1921a] .fil-w-num-wrap{width:70px;flex:none}.fil-style-picker[data-v-41b37d4d]{display:flex;flex-direction:column;gap:10px}.fil-style-cats[data-v-41b37d4d]{display:flex;flex-wrap:wrap;gap:6px}.fil-style-cat[data-v-41b37d4d]{box-sizing:border-box;padding:5px 10px;border-radius:999px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .2));background:#ffffff0a;color:var(--fil-text, rgba(255, 255, 255, .8));font-size:11px;cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-cat[data-v-41b37d4d]:hover{border-color:var(--fil-accent)}.fil-style-cat.active[data-v-41b37d4d]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #fff);font-weight:500}.fil-style-cat[data-v-41b37d4d]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-style-search-wrap[data-v-41b37d4d]{position:relative;width:100%}.fil-style-search[data-v-41b37d4d]{box-sizing:border-box;width:100%;padding:7px 28px 7px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-style-search[data-v-41b37d4d]:focus{border-color:var(--fil-accent)}.fil-style-search-clear[data-v-41b37d4d]{position:absolute;right:6px;top:50%;transform:translateY(-50%);width:18px;height:18px;border-radius:50%;border:none;background:#ffffff1f;color:#bbb;font-size:13px;line-height:1;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .12s ease}.fil-style-search-clear[data-v-41b37d4d]:hover{background:#ff4b4b4d;color:var(--fil-danger, #ff6b6b)}.fil-style-grid[data-v-41b37d4d]{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:8px;max-height:50vh;overflow-y:auto;padding-right:2px}.fil-style-tile[data-v-41b37d4d]{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px 6px;border-radius:8px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .14));background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-tile[data-v-41b37d4d]:hover{border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-style-tile.active[data-v-41b37d4d]{border-color:var(--fil-accent);background:color-mix(in srgb,var(--fil-accent) 14%,transparent)}.fil-style-tile[data-v-41b37d4d]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-style-tile-preview[data-v-41b37d4d]{width:100%;aspect-ratio:1;border-radius:6px;background:#ffffff0d;display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:22px}.fil-style-tile-img[data-v-41b37d4d]{width:100%;height:100%;object-fit:cover}.fil-style-tile-label[data-v-41b37d4d]{font-size:10px;text-align:center;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.fil-style-empty[data-v-41b37d4d]{grid-column:1 / -1;padding:20px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-style-selected-bar[data-v-41b37d4d]{display:flex;flex-wrap:wrap;gap:6px;padding:6px;border-radius:6px;background:color-mix(in srgb,var(--fil-accent, #00f0ff) 6%,transparent);border:1px solid color-mix(in srgb,var(--fil-accent, #00f0ff) 20%,transparent)}.fil-style-chip[data-v-41b37d4d]{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:999px;background:var(--fil-accent, #00f0ff);color:var(--fil-accent-ink, #12151a);font-size:11px;font-weight:600}.fil-chip-text[data-v-41b37d4d]{max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-chip-remove[data-v-41b37d4d]{display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:50%;border:none;background:#0003;color:var(--fil-accent-ink, #12151a);font-size:12px;line-height:1;cursor:pointer;padding:0;transition:background .08s,color .08s}.fil-chip-remove[data-v-41b37d4d]:hover{background:var(--fil-danger, #ff4b4b);color:#fff}.fil-toast-stack[data-v-f6279127]{position:fixed;right:20px;bottom:20px;z-index:100001;display:flex;flex-direction:column;gap:8px;pointer-events:none;max-width:min(360px,90vw)}.fil-toast[data-v-f6279127]{pointer-events:auto;display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:8px;background:var(--fil-panel, #171b22);color:var(--fil-text, #e8edf3);border:1px solid var(--fil-panel-alt, #2a3041);border-left:3px solid var(--toast-color, var(--fil-muted));box-shadow:0 6px 22px #0000006b;font:12.5px/1.45 system-ui,sans-serif;animation:fil-toast-in-f6279127 .18s cubic-bezier(.2,.7,.3,1)}@keyframes fil-toast-in-f6279127{0%{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}.fil-toast-dot[data-v-f6279127]{flex:none;width:8px;height:8px;margin-top:4px;border-radius:50%;background:var(--toast-color, var(--fil-muted))}.fil-toast-text[data-v-f6279127]{flex:1;min-width:0;align-self:center}.fil-toast-action[data-v-f6279127]{flex:none;cursor:pointer;padding:4px 8px;border-radius:4px;background:#ffffff0f;color:inherit;border:none;font:inherit;transition:background .12s}.fil-toast-action[data-v-f6279127]:hover{background:#ffffff24}.fil-toast-close[data-v-f6279127]{flex:none;align-self:flex-start;cursor:pointer;width:18px;height:18px;padding:0;border:none;background:none;color:var(--fil-muted);opacity:.6;transition:opacity .12s;font-size:16px;line-height:18px}.fil-toast-close[data-v-f6279127]:hover{opacity:1}.fil-w-toggle[data-v-9d64f497]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-toggle-label[data-v-9d64f497]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-toggle.bare[data-v-9d64f497]{display:flex;width:auto;gap:4px}.fil-w-toggle.bare .fil-w-toggle-label[data-v-9d64f497]{font-size:10px;white-space:nowrap}.fil-w-switch[data-v-9d64f497]{grid-column:2;justify-self:start;width:36px;height:20px;padding:2px;box-sizing:border-box;border:none;border-radius:10px;background:#ffffff24;cursor:pointer;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .12s}.fil-w-switch.on[data-v-9d64f497]{background:var(--fil-accent)}.fil-w-switch[data-v-9d64f497]:disabled{opacity:.5;cursor:default}.fil-w-switch[data-v-9d64f497]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-switch-thumb[data-v-9d64f497]{display:block;width:16px;height:16px;border-radius:50%;background:#fff;transition:transform .12s}.fil-w-switch.on .fil-w-switch-thumb[data-v-9d64f497]{transform:translate(16px)}div.fil-seed-root[data-v-d9d8deb9]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:row;align-items:center;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;background:transparent;border:none;border-radius:0;box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none}.fil-seed-display[data-v-d9d8deb9]{flex:1;min-width:0;box-sizing:border-box;height:34px;background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);padding:6px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:19px;text-align:center;outline:none;transition:border-color .08s}.fil-seed-display[data-v-d9d8deb9]:focus{border-color:var(--fil-accent)}.fil-seed-display[readonly][data-v-d9d8deb9]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-seed-actions[data-v-d9d8deb9]{display:flex;gap:5px;flex-shrink:0}.fil-seed-actions[data-v-d9d8deb9] .fil-w-btn{padding:0;width:34px;height:34px;font-size:16px}.picker-container[data-v-8dfe2da3]{display:flex;flex-direction:column;gap:12px;color:var(--fil-text, #e8edf3)}.provider-tabs[data-v-8dfe2da3]{display:flex;gap:6px;overflow-x:auto;padding-bottom:6px;scrollbar-width:thin}.tab-btn[data-v-8dfe2da3]{display:flex;align-items:center;gap:6px;padding:7px 10px;border-radius:8px;border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-muted, #9ca8b5);font-size:12px;cursor:pointer;white-space:nowrap;flex-shrink:0;transition:all .15s ease}.tab-btn[data-v-8dfe2da3]:hover{background:#ffffff14;color:var(--fil-text, #e8edf3)}.tab-btn.active[data-v-8dfe2da3]{background:var(--fil-panel-alt, #222934);border-color:var(--fil-accent, #f08a45);color:var(--fil-accent, #f08a45);font-weight:600}.tab-badge[data-v-8dfe2da3]{font-size:10px;background:var(--fil-pill-bg);padding:1px 5px;border-radius:99px}.provider-status-bar[data-v-8dfe2da3]{display:flex;justify-content:space-between;align-items:center;background:#0003;padding:8px 12px;border-radius:6px;font-size:12px}.status-info[data-v-8dfe2da3]{display:flex;align-items:center;gap:8px}.provider-name[data-v-8dfe2da3]{font-weight:600}.status-badge[data-v-8dfe2da3]{font-size:11px;padding:2px 6px;border-radius:4px}.status-badge.online[data-v-8dfe2da3]{color:var(--fil-ok, #62c987)}.status-badge.loading[data-v-8dfe2da3]{color:var(--fil-accent, #f08a45)}.status-badge.error[data-v-8dfe2da3]{color:var(--fil-danger, #ef6666)}.age-label[data-v-8dfe2da3]{font-size:10px;color:var(--fil-muted, #9ca8b5)}.filter-controls[data-v-8dfe2da3]{display:flex;flex-direction:column;gap:8px}.search-input-wrap[data-v-8dfe2da3]{position:relative;display:flex;align-items:center}.search-icon[data-v-8dfe2da3]{position:absolute;left:10px;color:var(--fil-muted, #9ca8b5)}.search-input[data-v-8dfe2da3]{width:100%;box-sizing:border-box;height:32px;padding:6px 30px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:var(--fil-field-radius, 6px);color:var(--fil-text, #e8edf3);font-size:12px;outline:none}.search-input[data-v-8dfe2da3]:focus{border-color:var(--fil-accent, #f08a45)}.clear-search[data-v-8dfe2da3]{position:absolute;right:10px;background:none;border:none;color:var(--fil-muted, #9ca8b5);cursor:pointer}.filter-segments[data-v-8dfe2da3]{display:flex;gap:8px;min-width:0}.filter-segments[data-v-8dfe2da3]>*{flex:1;min-width:0}.models-list-wrapper[data-v-8dfe2da3]{height:320px;overflow-y:auto;background:#00000026;border-radius:8px;border:1px solid rgba(255,255,255,.06);padding:8px}.empty-state[data-v-8dfe2da3]{display:flex;align-items:center;justify-content:center;height:100%;color:var(--fil-muted, #9ca8b5);font-size:12px}.models-container.list[data-v-8dfe2da3]{display:flex;flex-direction:column;gap:6px}.models-container.grid[data-v-8dfe2da3]{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:8px}.models-container.grid .model-card[data-v-8dfe2da3]{flex-direction:column;align-items:flex-start;gap:8px;padding:10px 12px}.models-container.grid .model-main[data-v-8dfe2da3]{width:100%}.models-container.grid .model-tags[data-v-8dfe2da3]{width:100%;justify-content:flex-start}.model-card[data-v-8dfe2da3]{display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:#ffffff08;border:1px solid rgba(255,255,255,.06);border-radius:6px;cursor:pointer;transition:all .12s ease;width:100%;box-sizing:border-box;text-align:left;font:inherit;color:inherit;-moz-appearance:none;appearance:none;-webkit-appearance:none}.model-card[data-v-8dfe2da3]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.model-card[data-v-8dfe2da3]:hover{background:#ffffff12;border-color:#ffffff26}.model-card.selected[data-v-8dfe2da3]{background:#f08a4526;border-color:var(--fil-accent, #f08a45)}.model-main[data-v-8dfe2da3]{display:flex;align-items:center;gap:8px;min-width:0}.type-icon[data-v-8dfe2da3]{font-size:14px}.model-name[data-v-8dfe2da3]{font-size:12px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.model-tags[data-v-8dfe2da3]{display:flex;gap:4px;flex-shrink:0}.tag[data-v-8dfe2da3]{font-size:9px;padding:2px 6px;border-radius:4px;font-weight:600;text-transform:uppercase}.tag.vision[data-v-8dfe2da3]{background:#f08a4526;color:var(--fil-accent, #f08a45)}.tag.text[data-v-8dfe2da3],.tag.local[data-v-8dfe2da3],.tag.free[data-v-8dfe2da3],.tag.paid[data-v-8dfe2da3]{background:var(--fil-pill-bg);color:var(--fil-muted, #9ca8b5)}.picker-footer[data-v-8dfe2da3]{display:flex;justify-content:space-between;align-items:center;padding-top:8px}.selection-summary[data-v-8dfe2da3]{font-size:12px}.selection-summary .muted[data-v-8dfe2da3]{color:var(--fil-muted, #9ca8b5)}.footer-actions[data-v-8dfe2da3]{display:flex;gap:8px}.fil-provider-root[data-v-f8a6b931]{width:100%;box-sizing:border-box;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;min-width:0}.picker-trigger-btn[data-v-f8a6b931]{display:flex;flex-direction:column;gap:6px;width:100%;box-sizing:border-box;padding:8px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-pill-border);border-radius:var(--fil-field-radius, 8px);color:var(--fil-text, #f2f2f2);cursor:pointer;text-align:left;transition:border-color .15s ease,background .15s ease;outline:none}.picker-trigger-btn[data-v-f8a6b931]:hover{border-color:var(--fil-accent, #f08a45);background:var(--fil-pill-bg)}.picker-trigger-btn[data-v-f8a6b931]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px;border-color:var(--fil-accent)}.trigger-header[data-v-f8a6b931]{display:flex;justify-content:space-between;align-items:center;width:100%}.provider-badge[data-v-f8a6b931]{display:flex;align-items:center;gap:6px;font-weight:600;font-size:13px;color:var(--fil-accent, #f08a45)}.open-icon[data-v-f8a6b931]{font-size:11px;background:var(--fil-pill-bg);padding:2px 6px;border-radius:4px;color:var(--fil-text, #e8edf3)}.trigger-model[data-v-f8a6b931]{display:flex;align-items:center;gap:6px;font-size:12px;min-width:0}.model-label[data-v-f8a6b931]{color:var(--fil-muted, #9ca8b5);flex-shrink:0}.model-name[data-v-f8a6b931]{font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.fil-scanner-root[data-v-43c316b1]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;width:100%;box-sizing:border-box;min-width:0;height:100%}.fil-section-block[data-v-43c316b1]{display:flex;flex-direction:column;gap:5px;min-width:0}.fil-section-block.is-growable[data-v-43c316b1]{flex:1 1 auto;min-height:0}.fil-w-row[data-v-43c316b1]{display:flex;flex-direction:column;gap:3px;min-width:0}.fil-w-row.is-growable[data-v-43c316b1]{flex:1 1 auto;min-height:0}.fil-w-row.is-growable>.fil-scanner-textarea[data-v-43c316b1]{flex:1 1 auto;height:auto}.fil-scanner-textarea[data-v-43c316b1]{box-sizing:border-box;width:100%;min-height:48px;padding:8px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;resize:vertical;outline:none}.fil-scanner-textarea[data-v-43c316b1]:focus{border-color:var(--fil-accent, #00f0ff)}.fil-scanner-textarea.is-linked[data-v-43c316b1]{border-style:dashed;border-color:var(--fil-accent, #00f0ff);color:var(--fil-muted, #9ca8b5);cursor:not-allowed}.fil-single-style-block[data-v-43c316b1]{margin-top:2px}.fil-unified-style-modal[data-v-43c316b1]{display:flex;flex-direction:column;gap:12px;padding:4px 0}.fil-style-tab-bar[data-v-43c316b1]{display:flex;gap:6px;background:#0000004d;padding:4px;border-radius:8px;border:1px solid rgba(255,255,255,.08)}.fil-style-tab-btn[data-v-43c316b1]{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;height:34px;border-radius:6px;border:1px solid transparent;background:transparent;color:var(--fil-muted, #9ca8b5);font-size:12px;font-weight:600;cursor:pointer;transition:all .12s ease}.fil-style-tab-btn[data-v-43c316b1]:hover{color:var(--fil-text, #ffffff);background:#ffffff0f}.fil-style-tab-btn.active[data-v-43c316b1]{background:var(--fil-accent, #00f0ff);color:var(--fil-accent-ink, #12151a);border-color:var(--fil-accent, #00f0ff);font-weight:700;box-shadow:0 0 10px color-mix(in srgb,var(--fil-accent, #00f0ff) 30%,transparent)}.fil-tab-badge[data-v-43c316b1]{font-size:10px;color:#0f8}.fil-style-tab-btn.active .fil-tab-badge[data-v-43c316b1]{color:var(--fil-accent-ink, #12151a)}.fil-style-picker-body[data-v-43c316b1]{min-height:320px;max-height:480px;overflow-y:auto}.fil-style-modal-footer[data-v-43c316b1]{display:flex;justify-content:flex-end;border-top:1px solid rgba(255,255,255,.08);padding-top:8px}.fil-clear-styles-btn[data-v-43c316b1]{padding:6px 12px;border-radius:6px;border:1px solid rgba(255,75,75,.3);background:#ff4b4b1a;color:var(--fil-danger, #ff6b6b);font-size:12px;font-weight:600;cursor:pointer;transition:all .12s ease}.fil-clear-styles-btn[data-v-43c316b1]:hover{background:#ff4b4b40;border-color:var(--fil-danger, #ff4b4b);color:#fff}.fil-scanner-seed-row[data-v-43c316b1]{display:flex;gap:6px;min-width:0}.fil-scanner-seed-field[data-v-43c316b1]{flex:1.3;min-width:0;box-sizing:border-box;height:34px;background:#00000059;border:1px solid rgba(255,255,255,.08);border-radius:var(--fil-pill-radius);padding:0 12px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:13px;text-align:center;outline:none;transition:border-color .08s}.fil-scanner-seed-field[data-v-43c316b1]:focus{border-color:var(--fil-accent)}.fil-scanner-seed-field.is-random[data-v-43c316b1]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-scanner-seed-pill[data-v-43c316b1]{flex:1;min-width:0;box-sizing:border-box;height:34px;padding:0 8px;border-radius:var(--fil-pill-radius);border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-text, #e8edf3);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none}.fil-scanner-seed-pill[data-v-43c316b1]:hover{background:#ffffff1f}.fil-scanner-seed-pill.active[data-v-43c316b1]{background:#ffffff29;border-color:#fff3}.fil-scanner-seed-pill[data-v-43c316b1]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-scanner-seed-pill-accent[data-v-43c316b1]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #241206);font-weight:700}.fil-scanner-seed-pill-accent[data-v-43c316b1]:hover{filter:brightness(1.08);background:var(--fil-accent)}.fil-cleaner-root[data-v-3d68b764],.fil-up-root[data-v-57658737]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-up-row[data-v-57658737]{display:grid;grid-template-columns:minmax(auto,max-content) 64px minmax(auto,max-content) 64px;align-items:center;gap:var(--fil-node-gap)}.fil-up-row-overlap[data-v-57658737]{grid-template-columns:minmax(auto,max-content) 64px minmax(auto,max-content) 64px auto}.fil-w-label[data-v-57658737]{font-size:11px;color:var(--fil-muted, rgba(255,255,255,.55))}.fil-hrf-root[data-v-2a443f87]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-hrf-seed-row[data-v-2a443f87]{display:flex;gap:6px;min-width:0}.fil-hrf-seed-field[data-v-2a443f87]{flex:1.3;min-width:0;box-sizing:border-box;height:34px;background:#00000059;border:1px solid rgba(255,255,255,.08);border-radius:var(--fil-pill-radius);padding:0 12px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:13px;text-align:center;outline:none;transition:border-color .08s}.fil-hrf-seed-field[data-v-2a443f87]:focus{border-color:var(--fil-accent)}.fil-hrf-seed-field.is-random[data-v-2a443f87]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-hrf-seed-pill[data-v-2a443f87]{flex:1;min-width:0;box-sizing:border-box;height:34px;padding:0 8px;border-radius:var(--fil-pill-radius);border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-text, #e8edf3);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none}.fil-hrf-seed-pill[data-v-2a443f87]:hover{background:#ffffff1f}.fil-hrf-seed-pill.active[data-v-2a443f87]{background:#ffffff29;border-color:#fff3}.fil-hrf-seed-pill[data-v-2a443f87]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-hrf-seed-pill-accent[data-v-2a443f87]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #241206);font-weight:700}.fil-hrf-seed-pill-accent[data-v-2a443f87]:hover{filter:brightness(1.08);background:var(--fil-accent)}.fil-style-mixer-root[data-v-6e95ae42],.fil-color-wizard-root[data-v-3228ee08]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cw-presets-block[data-v-3228ee08]{display:flex;flex-direction:column;gap:6px;padding:8px 10px;background:#0000004d;border:1px solid rgba(255,255,255,.08);border-radius:8px}.fil-cw-presets-title[data-v-3228ee08]{font-size:11px;font-weight:700;color:var(--fil-accent, #00f0ff);text-transform:uppercase;letter-spacing:.5px}.fil-cw-presets-grid[data-v-3228ee08]{display:grid;grid-template-columns:1fr 1fr;gap:6px}.fil-cw-preset-btn[data-v-3228ee08]{height:28px;border-radius:6px;border:1px solid rgba(255,255,255,.1);background:#ffffff0a;color:var(--fil-text, #ddd);font-size:11px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .12s ease}.fil-cw-preset-btn[data-v-3228ee08]:hover{background:#ffffff1f;border-color:var(--fil-accent, #00f0ff)}.fil-cw-preset-btn.warm[data-v-3228ee08]:hover{border-color:#fa0;color:#fa0}.fil-cw-preset-btn.cool[data-v-3228ee08]:hover{border-color:#00f0ff;color:#00f0ff}.fil-cw-preset-btn.skin[data-v-3228ee08]:hover{border-color:#f7a;color:#f7a}.fil-cw-preset-btn.contrast[data-v-3228ee08]:hover{border-color:#fa0;color:#fa0}.fil-cw-slider-group[data-v-3228ee08]{display:flex;flex-direction:column;gap:6px}\n";document.head.appendChild(s);}catch(e){}})();
import { app as ws } from "/scripts/app.js";
/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ki(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const be = {}, yn = [], vt = () => {
}, Ss = () => !1, Gl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Wl = (e) => e.startsWith("onUpdate:"), Ne = Object.assign, qi = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, lr = Object.prototype.hasOwnProperty, ye = (e, t) => lr.call(e, t), le = Array.isArray, wn = (e) => ll(e) === "[object Map]", jl = (e) => ll(e) === "[object Set]", bo = (e) => ll(e) === "[object Date]", ce = (e) => typeof e == "function", Le = (e) => typeof e == "string", Ze = (e) => typeof e == "symbol", we = (e) => e !== null && typeof e == "object", xs = (e) => (we(e) || ce(e)) && ce(e.then) && ce(e.catch), Cs = Object.prototype.toString, ll = (e) => Cs.call(e), ir = (e) => ll(e).slice(8, -1), As = (e) => ll(e) === "[object Object]", zl = (e) => Le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Hn = /* @__PURE__ */ Ki(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Kl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, or = /-\w/g, We = Kl(
  (e) => e.replace(or, (t) => t.slice(1).toUpperCase())
), sr = /\B([A-Z])/g, Ot = Kl(
  (e) => e.replace(sr, "-$1").toLowerCase()
), ql = Kl((e) => e.charAt(0).toUpperCase() + e.slice(1)), ci = Kl(
  (e) => e ? `on${ql(e)}` : ""
), Oe = (e, t) => !Object.is(e, t), yl = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Ms = (e, t, n, l = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: l,
    value: n
  });
}, Xl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ar = (e) => {
  const t = Le(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let vo;
const Yl = () => vo || (vo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ot(e) {
  if (le(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const l = e[n], i = Le(l) ? dr(l) : ot(l);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Le(e) || we(e))
    return e;
}
const rr = /;(?![^(]*\))/g, ur = /:([^]+)/, cr = /\/\*[^]*?\*\//g;
function dr(e) {
  const t = {};
  return e.replace(cr, "").split(rr).forEach((n) => {
    if (n) {
      const l = n.split(ur);
      l.length > 1 && (t[l[0].trim()] = l[1].trim());
    }
  }), t;
}
function he(e) {
  let t = "";
  if (Le(e))
    t = e;
  else if (le(e))
    for (let n = 0; n < e.length; n++) {
      const l = he(e[n]);
      l && (t += l + " ");
    }
  else if (we(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const fr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", pr = /* @__PURE__ */ Ki(fr);
function ks(e) {
  return !!e || e === "";
}
function mr(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let l = 0; n && l < e.length; l++)
    n = il(e[l], t[l]);
  return n;
}
function il(e, t) {
  if (e === t) return !0;
  let n = bo(e), l = bo(t);
  if (n || l)
    return n && l ? e.getTime() === t.getTime() : !1;
  if (n = Ze(e), l = Ze(t), n || l)
    return e === t;
  if (n = le(e), l = le(t), n || l)
    return n && l ? mr(e, t) : !1;
  if (n = we(e), l = we(t), n || l) {
    if (!n || !l)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), r = t.hasOwnProperty(s);
      if (a && !r || !a && r || !il(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function hr(e, t) {
  return e.findIndex((n) => il(n, t));
}
const Fs = (e) => !!(e && e.__v_isRef === !0), X = (e) => Le(e) ? e : e == null ? "" : le(e) || we(e) && (e.toString === Cs || !ce(e.toString)) ? Fs(e) ? X(e.value) : JSON.stringify(e, Ls, 2) : String(e), Ls = (e, t) => Fs(t) ? Ls(e, t.value) : wn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [l, i], o) => (n[di(l, o) + " =>"] = i, n),
    {}
  )
} : jl(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => di(n))
} : Ze(t) ? di(t) : we(t) && !le(t) && !As(t) ? String(t) : t, di = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ze(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Te;
class Is {
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
function Ds(e) {
  return new Is(e);
}
function Ps() {
  return Te;
}
function gr(e, t = !1) {
  Te && Te.cleanups.push(e);
}
let Fe;
const fi = /* @__PURE__ */ new WeakSet();
class Rs {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Te && (Te.active ? Te.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, fi.has(this) && (fi.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ts(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, yo(this), Es(this);
    const t = Fe, n = ut;
    Fe = this, ut = !0;
    try {
      return this.fn();
    } finally {
      Vs(this), Fe = t, ut = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ji(t);
      this.deps = this.depsTail = void 0, yo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? fi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ai(this) && this.run();
  }
  get dirty() {
    return Ai(this);
  }
}
let Ns = 0, Un, Gn;
function Ts(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Gn, Gn = e;
    return;
  }
  e.next = Un, Un = e;
}
function Xi() {
  Ns++;
}
function Yi() {
  if (--Ns > 0)
    return;
  if (Gn) {
    let t = Gn;
    for (Gn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Un; ) {
    let t = Un;
    for (Un = void 0; t; ) {
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
function Es(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Vs(e) {
  let t, n = e.depsTail, l = n;
  for (; l; ) {
    const i = l.prevDep;
    l.version === -1 ? (l === n && (n = i), Ji(l), _r(l)) : t = l, l.dep.activeLink = l.prevActiveLink, l.prevActiveLink = void 0, l = i;
  }
  e.deps = t, e.depsTail = n;
}
function Ai(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Os(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Os(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Yn) || (e.globalVersion = Yn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ai(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Fe, l = ut;
  Fe = e, ut = !0;
  try {
    Es(e);
    const i = e.fn(e._value);
    (t.version === 0 || Oe(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Fe = n, ut = l, Vs(e), e.flags &= -3;
  }
}
function Ji(e, t = !1) {
  const { dep: n, prevSub: l, nextSub: i } = e;
  if (l && (l.nextSub = i, e.prevSub = void 0), i && (i.prevSub = l, e.nextSub = void 0), n.subs === e && (n.subs = l, !l && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Ji(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function _r(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ut = !0;
const $s = [];
function Rt() {
  $s.push(ut), ut = !1;
}
function Nt() {
  const e = $s.pop();
  ut = e === void 0 ? !0 : e;
}
function yo(e) {
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
let Yn = 0;
class br {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Jl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Fe || !ut || Fe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Fe)
      n = this.activeLink = new br(Fe, this), Fe.deps ? (n.prevDep = Fe.depsTail, Fe.depsTail.nextDep = n, Fe.depsTail = n) : Fe.deps = Fe.depsTail = n, Bs(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const l = n.nextDep;
      l.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = l), n.prevDep = Fe.depsTail, n.nextDep = void 0, Fe.depsTail.nextDep = n, Fe.depsTail = n, Fe.deps === n && (Fe.deps = l);
    }
    return n;
  }
  trigger(t) {
    this.version++, Yn++, this.notify(t);
  }
  notify(t) {
    Xi();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Yi();
    }
  }
}
function Bs(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let l = t.deps; l; l = l.nextDep)
        Bs(l);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ml = /* @__PURE__ */ new WeakMap(), un = /* @__PURE__ */ Symbol(
  ""
), Mi = /* @__PURE__ */ Symbol(
  ""
), Jn = /* @__PURE__ */ Symbol(
  ""
);
function Ue(e, t, n) {
  if (ut && Fe) {
    let l = Ml.get(e);
    l || Ml.set(e, l = /* @__PURE__ */ new Map());
    let i = l.get(n);
    i || (l.set(n, i = new Jl()), i.map = l, i.key = n), i.track();
  }
}
function Lt(e, t, n, l, i, o) {
  const s = Ml.get(e);
  if (!s) {
    Yn++;
    return;
  }
  const a = (r) => {
    r && r.trigger();
  };
  if (Xi(), t === "clear")
    s.forEach(a);
  else {
    const r = le(e), c = r && zl(n);
    if (r && n === "length") {
      const u = Number(l);
      s.forEach((d, m) => {
        (m === "length" || m === Jn || !Ze(m) && m >= u) && a(d);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && a(s.get(n)), c && a(s.get(Jn)), t) {
        case "add":
          r ? c && a(s.get("length")) : (a(s.get(un)), wn(e) && a(s.get(Mi)));
          break;
        case "delete":
          r || (a(s.get(un)), wn(e) && a(s.get(Mi)));
          break;
        case "set":
          wn(e) && a(s.get(un));
          break;
      }
  }
  Yi();
}
function vr(e, t) {
  const n = Ml.get(e);
  return n && n.get(t);
}
function fn(e) {
  const t = /* @__PURE__ */ _e(e);
  return t === e ? t : (Ue(t, "iterate", Jn), /* @__PURE__ */ Qe(e) ? t : t.map(ct));
}
function Ql(e) {
  return Ue(e = /* @__PURE__ */ _e(e), "iterate", Jn), e;
}
function gt(e, t) {
  return /* @__PURE__ */ Tt(e) ? kn(/* @__PURE__ */ Dt(e) ? ct(t) : t) : ct(t);
}
const yr = {
  __proto__: null,
  [Symbol.iterator]() {
    return pi(this, Symbol.iterator, (e) => gt(this, e));
  },
  concat(...e) {
    return fn(this).concat(
      ...e.map((t) => le(t) ? fn(t) : t)
    );
  },
  entries() {
    return pi(this, "entries", (e) => (e[1] = gt(this, e[1]), e));
  },
  every(e, t) {
    return St(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return St(
      this,
      "filter",
      e,
      t,
      (n) => n.map((l) => gt(this, l)),
      arguments
    );
  },
  find(e, t) {
    return St(
      this,
      "find",
      e,
      t,
      (n) => gt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return St(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return St(
      this,
      "findLast",
      e,
      t,
      (n) => gt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return St(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return St(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return mi(this, "includes", e);
  },
  indexOf(...e) {
    return mi(this, "indexOf", e);
  },
  join(e) {
    return fn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return mi(this, "lastIndexOf", e);
  },
  map(e, t) {
    return St(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Pn(this, "pop");
  },
  push(...e) {
    return Pn(this, "push", e);
  },
  reduce(e, ...t) {
    return wo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return wo(this, "reduceRight", e, t);
  },
  shift() {
    return Pn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return St(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Pn(this, "splice", e);
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
    return Pn(this, "unshift", e);
  },
  values() {
    return pi(this, "values", (e) => gt(this, e));
  }
};
function pi(e, t, n) {
  const l = Ql(e), i = l[t]();
  return l !== e && !/* @__PURE__ */ Qe(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const wr = Array.prototype;
function St(e, t, n, l, i, o) {
  const s = Ql(e), a = s !== e && !/* @__PURE__ */ Qe(e), r = s[t];
  if (r !== wr[t]) {
    const d = r.apply(e, o);
    return a ? ct(d) : d;
  }
  let c = n;
  s !== e && (a ? c = function(d, m) {
    return n.call(this, gt(e, d), m, e);
  } : n.length > 2 && (c = function(d, m) {
    return n.call(this, d, m, e);
  }));
  const u = r.call(s, c, l);
  return a && i ? i(u) : u;
}
function wo(e, t, n, l) {
  const i = Ql(e), o = i !== e && !/* @__PURE__ */ Qe(e);
  let s = n, a = !1;
  i !== e && (o ? (a = l.length === 0, s = function(c, u, d) {
    return a && (a = !1, c = gt(e, c)), n.call(this, c, gt(e, u), d, e);
  }) : n.length > 3 && (s = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }));
  const r = i[t](s, ...l);
  return a ? gt(e, r) : r;
}
function mi(e, t, n) {
  const l = /* @__PURE__ */ _e(e);
  Ue(l, "iterate", Jn);
  const i = l[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Zl(n[0]) ? (n[0] = /* @__PURE__ */ _e(n[0]), l[t](...n)) : i;
}
function Pn(e, t, n = []) {
  Rt(), Xi();
  const l = (/* @__PURE__ */ _e(e))[t].apply(e, n);
  return Yi(), Nt(), l;
}
const Sr = /* @__PURE__ */ Ki("__proto__,__v_isRef,__isVue"), Hs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ze)
);
function xr(e) {
  Ze(e) || (e = String(e));
  const t = /* @__PURE__ */ _e(this);
  return Ue(t, "has", e), t.hasOwnProperty(e);
}
class Us {
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
      return l === (i ? o ? Rr : zs : o ? js : Ws).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(l) ? t : void 0;
    const s = le(t);
    if (!i) {
      let r;
      if (s && (r = yr[n]))
        return r;
      if (n === "hasOwnProperty")
        return xr;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ fe(t) ? t : l
    );
    if ((Ze(n) ? Hs.has(n) : Sr(n)) || (i || Ue(t, "get", n), o))
      return a;
    if (/* @__PURE__ */ fe(a)) {
      const r = s && zl(n) ? a : a.value;
      return i && we(r) ? /* @__PURE__ */ kl(r) : r;
    }
    return we(a) ? i ? /* @__PURE__ */ kl(a) : /* @__PURE__ */ Xt(a) : a;
  }
}
class Gs extends Us {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, l, i) {
    let o = t[n];
    const s = le(t) && zl(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Tt(o);
      if (!/* @__PURE__ */ Qe(l) && !/* @__PURE__ */ Tt(l) && (o = /* @__PURE__ */ _e(o), l = /* @__PURE__ */ _e(l)), !s && /* @__PURE__ */ fe(o) && !/* @__PURE__ */ fe(l))
        return c || (o.value = l), !0;
    }
    const a = s ? Number(n) < t.length : ye(t, n), r = Reflect.set(
      t,
      n,
      l,
      /* @__PURE__ */ fe(t) ? t : i
    );
    return t === /* @__PURE__ */ _e(i) && r && (a ? Oe(l, o) && Lt(t, "set", n, l) : Lt(t, "add", n, l)), r;
  }
  deleteProperty(t, n) {
    const l = ye(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && l && Lt(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const l = Reflect.has(t, n);
    return (!Ze(n) || !Hs.has(n)) && Ue(t, "has", n), l;
  }
  ownKeys(t) {
    return Ue(
      t,
      "iterate",
      le(t) ? "length" : un
    ), Reflect.ownKeys(t);
  }
}
class Cr extends Us {
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
const Ar = /* @__PURE__ */ new Gs(), Mr = /* @__PURE__ */ new Cr(), kr = /* @__PURE__ */ new Gs(!0);
const ki = (e) => e, dl = (e) => Reflect.getPrototypeOf(e);
function Fr(e, t, n) {
  return function(...l) {
    const i = this.__v_raw, o = /* @__PURE__ */ _e(i), s = wn(o), a = e === "entries" || e === Symbol.iterator && s, r = e === "keys" && s, c = i[e](...l), u = n ? ki : t ? kn : ct;
    return !t && Ue(
      o,
      "iterate",
      r ? Mi : un
    ), Ne(
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
function fl(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Lr(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ _e(o), a = /* @__PURE__ */ _e(i);
      e || (Oe(i, a) && Ue(s, "get", i), Ue(s, "get", a));
      const { has: r } = dl(s), c = t ? ki : e ? kn : ct;
      if (r.call(s, i))
        return c(o.get(i));
      if (r.call(s, a))
        return c(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ue(/* @__PURE__ */ _e(i), "iterate", un), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ _e(o), a = /* @__PURE__ */ _e(i);
      return e || (Oe(i, a) && Ue(s, "has", i), Ue(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const s = this, a = s.__v_raw, r = /* @__PURE__ */ _e(a), c = t ? ki : e ? kn : ct;
      return !e && Ue(r, "iterate", un), a.forEach((u, d) => i.call(o, c(u), c(d), s));
    }
  };
  return Ne(
    n,
    e ? {
      add: fl("add"),
      set: fl("set"),
      delete: fl("delete"),
      clear: fl("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ _e(this), s = dl(o), a = /* @__PURE__ */ _e(i), r = !t && !/* @__PURE__ */ Qe(i) && !/* @__PURE__ */ Tt(i) ? a : i;
        return s.has.call(o, r) || Oe(i, r) && s.has.call(o, i) || Oe(a, r) && s.has.call(o, a) || (o.add(r), Lt(o, "add", r, r)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Qe(o) && !/* @__PURE__ */ Tt(o) && (o = /* @__PURE__ */ _e(o));
        const s = /* @__PURE__ */ _e(this), { has: a, get: r } = dl(s);
        let c = a.call(s, i);
        c || (i = /* @__PURE__ */ _e(i), c = a.call(s, i));
        const u = r.call(s, i);
        return s.set(i, o), c ? Oe(o, u) && Lt(s, "set", i, o) : Lt(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ _e(this), { has: s, get: a } = dl(o);
        let r = s.call(o, i);
        r || (i = /* @__PURE__ */ _e(i), r = s.call(o, i)), a && a.call(o, i);
        const c = o.delete(i);
        return r && Lt(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ _e(this), o = i.size !== 0, s = i.clear();
        return o && Lt(
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
    n[i] = Fr(i, e, t);
  }), n;
}
function Qi(e, t) {
  const n = Lr(e, t);
  return (l, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? l : Reflect.get(
    ye(n, i) && i in l ? n : l,
    i,
    o
  );
}
const Ir = {
  get: /* @__PURE__ */ Qi(!1, !1)
}, Dr = {
  get: /* @__PURE__ */ Qi(!1, !0)
}, Pr = {
  get: /* @__PURE__ */ Qi(!0, !1)
};
const Ws = /* @__PURE__ */ new WeakMap(), js = /* @__PURE__ */ new WeakMap(), zs = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ new WeakMap();
function Nr(e) {
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
function Xt(e) {
  return /* @__PURE__ */ Tt(e) ? e : Zi(
    e,
    !1,
    Ar,
    Ir,
    Ws
  );
}
// @__NO_SIDE_EFFECTS__
function Tr(e) {
  return Zi(
    e,
    !1,
    kr,
    Dr,
    js
  );
}
// @__NO_SIDE_EFFECTS__
function kl(e) {
  return Zi(
    e,
    !0,
    Mr,
    Pr,
    zs
  );
}
function Zi(e, t, n, l, i) {
  if (!we(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const s = Nr(ir(e));
  if (s === 0)
    return e;
  const a = new Proxy(
    e,
    s === 2 ? l : n
  );
  return i.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function Dt(e) {
  return /* @__PURE__ */ Tt(e) ? /* @__PURE__ */ Dt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Tt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Zl(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function _e(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ _e(t) : e;
}
function eo(e) {
  return !ye(e, "__v_skip") && Object.isExtensible(e) && Ms(e, "__v_skip", !0), e;
}
const ct = (e) => we(e) ? /* @__PURE__ */ Xt(e) : e, kn = (e) => we(e) ? /* @__PURE__ */ kl(e) : e;
// @__NO_SIDE_EFFECTS__
function fe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function se(e) {
  return Er(e, !1);
}
function Er(e, t) {
  return /* @__PURE__ */ fe(e) ? e : new Vr(e, t);
}
class Vr {
  constructor(t, n) {
    this.dep = new Jl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ _e(t), this._value = n ? t : ct(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, l = this.__v_isShallow || /* @__PURE__ */ Qe(t) || /* @__PURE__ */ Tt(t);
    t = l ? t : /* @__PURE__ */ _e(t), Oe(t, n) && (this._rawValue = t, this._value = l ? t : ct(t), this.dep.trigger());
  }
}
function f(e) {
  return /* @__PURE__ */ fe(e) ? e.value : e;
}
const Or = {
  get: (e, t, n) => t === "__v_raw" ? e : f(Reflect.get(e, t, n)),
  set: (e, t, n, l) => {
    const i = e[t];
    return /* @__PURE__ */ fe(i) && !/* @__PURE__ */ fe(n) ? (i.value = n, !0) : Reflect.set(e, t, n, l);
  }
};
function Ks(e) {
  return /* @__PURE__ */ Dt(e) ? e : new Proxy(e, Or);
}
class $r {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Jl(), { get: l, set: i } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = l, this._set = i;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Br(e) {
  return new $r(e);
}
// @__NO_SIDE_EFFECTS__
function Hr(e) {
  const t = le(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Gr(e, n);
  return t;
}
class Ur {
  constructor(t, n, l) {
    this._object = t, this._defaultValue = l, this.__v_isRef = !0, this._value = void 0, this._key = Ze(n) ? n : String(n), this._raw = /* @__PURE__ */ _e(t);
    let i = !0, o = t;
    if (!le(t) || Ze(this._key) || !zl(this._key))
      do
        i = !/* @__PURE__ */ Zl(o) || /* @__PURE__ */ Qe(o);
      while (i && (o = o.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = f(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ fe(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ fe(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return vr(this._raw, this._key);
  }
}
function Gr(e, t, n) {
  return new Ur(e, t, n);
}
class Wr {
  constructor(t, n, l) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Jl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Yn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = l;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Fe !== this)
      return Ts(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Os(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function jr(e, t, n = !1) {
  let l, i;
  return ce(e) ? l = e : (l = e.get, i = e.set), new Wr(l, i, n);
}
const pl = {}, Fl = /* @__PURE__ */ new WeakMap();
let nn;
function zr(e, t = !1, n = nn) {
  if (n) {
    let l = Fl.get(n);
    l || Fl.set(n, l = []), l.push(e);
  }
}
function Kr(e, t, n = be) {
  const { immediate: l, deep: i, once: o, scheduler: s, augmentJob: a, call: r } = n, c = (b) => i ? b : /* @__PURE__ */ Qe(b) || i === !1 || i === 0 ? It(b, 1) : It(b);
  let u, d, m, g, p = !1, _ = !1;
  if (/* @__PURE__ */ fe(e) ? (d = () => e.value, p = /* @__PURE__ */ Qe(e)) : /* @__PURE__ */ Dt(e) ? (d = () => c(e), p = !0) : le(e) ? (_ = !0, p = e.some((b) => /* @__PURE__ */ Dt(b) || /* @__PURE__ */ Qe(b)), d = () => e.map((b) => {
    if (/* @__PURE__ */ fe(b))
      return b.value;
    if (/* @__PURE__ */ Dt(b))
      return c(b);
    if (ce(b))
      return r ? r(b, 2) : b();
  })) : ce(e) ? t ? d = r ? () => r(e, 2) : e : d = () => {
    if (m) {
      Rt();
      try {
        m();
      } finally {
        Nt();
      }
    }
    const b = nn;
    nn = u;
    try {
      return r ? r(e, 3, [g]) : e(g);
    } finally {
      nn = b;
    }
  } : d = vt, t && i) {
    const b = d, v = i === !0 ? 1 / 0 : i;
    d = () => It(b(), v);
  }
  const k = Ps(), x = () => {
    u.stop(), k && k.active && qi(k.effects, u);
  };
  if (o && t) {
    const b = t;
    t = (...v) => {
      const y = b(...v);
      return x(), y;
    };
  }
  let S = _ ? new Array(e.length).fill(pl) : pl;
  const M = (b) => {
    if (!(!(u.flags & 1) || !u.dirty && !b))
      if (t) {
        const v = u.run();
        if (b || i || p || (_ ? v.some((y, T) => Oe(y, S[T])) : Oe(v, S))) {
          m && m();
          const y = nn;
          nn = u;
          try {
            const T = [
              v,
              // pass undefined as the old value when it's changed for the first time
              S === pl ? void 0 : _ && S[0] === pl ? [] : S,
              g
            ];
            S = v, r ? r(t, 3, T) : (
              // @ts-expect-error
              t(...T)
            );
          } finally {
            nn = y;
          }
        }
      } else
        u.run();
  };
  return a && a(M), u = new Rs(d), u.scheduler = s ? () => s(M, !1) : M, g = (b) => zr(b, !1, u), m = u.onStop = () => {
    const b = Fl.get(u);
    if (b) {
      if (r)
        r(b, 4);
      else
        for (const v of b) v();
      Fl.delete(u);
    }
  }, t ? l ? M(!0) : S = u.run() : s ? s(M.bind(null, !0), !0) : u.run(), x.pause = u.pause.bind(u), x.resume = u.resume.bind(u), x.stop = x, x;
}
function It(e, t = 1 / 0, n) {
  if (t <= 0 || !we(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ fe(e))
    It(e.value, t, n);
  else if (le(e))
    for (let l = 0; l < e.length; l++)
      It(e[l], t, n);
  else if (jl(e) || wn(e))
    e.forEach((l) => {
      It(l, t, n);
    });
  else if (As(e)) {
    for (const l in e)
      It(e[l], t, n);
    for (const l of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, l) && It(e[l], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ol(e, t, n, l) {
  try {
    return l ? e(...l) : e();
  } catch (i) {
    sl(i, t, n);
  }
}
function at(e, t, n, l) {
  if (ce(e)) {
    const i = ol(e, t, n, l);
    return i && xs(i) && i.catch((o) => {
      sl(o, t, n);
    }), i;
  }
  if (le(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(at(e[o], t, n, l));
    return i;
  }
}
function sl(e, t, n, l = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || be;
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
      Rt(), ol(o, null, 10, [
        e,
        r,
        c
      ]), Nt();
      return;
    }
  }
  qr(e, n, i, l, s);
}
function qr(e, t, n, l = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Ke = [];
let ht = -1;
const Sn = [];
let zt = null, gn = 0;
const qs = /* @__PURE__ */ Promise.resolve();
let Ll = null;
function Ln(e) {
  const t = Ll || qs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Xr(e) {
  let t = ht + 1, n = Ke.length;
  for (; t < n; ) {
    const l = t + n >>> 1, i = Ke[l], o = Qn(i);
    o < e || o === e && i.flags & 2 ? t = l + 1 : n = l;
  }
  return t;
}
function to(e) {
  if (!(e.flags & 1)) {
    const t = Qn(e), n = Ke[Ke.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Qn(n) ? Ke.push(e) : Ke.splice(Xr(t), 0, e), e.flags |= 1, Xs();
  }
}
function Xs() {
  Ll || (Ll = qs.then(Js));
}
function Yr(e) {
  le(e) ? Sn.push(...e) : zt && e.id === -1 ? zt.splice(gn + 1, 0, e) : e.flags & 1 || (Sn.push(e), e.flags |= 1), Xs();
}
function So(e, t, n = ht + 1) {
  for (; n < Ke.length; n++) {
    const l = Ke[n];
    if (l && l.flags & 2) {
      if (e && l.id !== e.uid)
        continue;
      Ke.splice(n, 1), n--, l.flags & 4 && (l.flags &= -2), l(), l.flags & 4 || (l.flags &= -2);
    }
  }
}
function Ys(e) {
  if (Sn.length) {
    const t = [...new Set(Sn)].sort(
      (n, l) => Qn(n) - Qn(l)
    );
    if (Sn.length = 0, zt) {
      zt.push(...t);
      return;
    }
    for (zt = t, gn = 0; gn < zt.length; gn++) {
      const n = zt[gn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    zt = null, gn = 0;
  }
}
const Qn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Js(e) {
  try {
    for (ht = 0; ht < Ke.length; ht++) {
      const t = Ke[ht];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ol(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ht < Ke.length; ht++) {
      const t = Ke[ht];
      t && (t.flags &= -2);
    }
    ht = -1, Ke.length = 0, Ys(), Ll = null, (Ke.length || Sn.length) && Js();
  }
}
let Be = null, Qs = null;
function Il(e) {
  const t = Be;
  return Be = e, Qs = e && e.type.__scopeId || null, t;
}
function Kt(e, t = Be, n) {
  if (!t || e._n)
    return e;
  const l = (...i) => {
    l._d && Nl(-1);
    const o = Il(t), s = Pt.length;
    let a;
    try {
      a = e(...i);
    } finally {
      for (let r = Pt.length; r > s; r--) ao();
      Il(o), l._d && Nl(1);
    }
    return a;
  };
  return l._n = !0, l._c = !0, l._d = !0, l;
}
function st(e, t) {
  if (Be === null)
    return e;
  const n = oi(Be), l = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, a, r = be] = t[i];
    o && (ce(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && It(s), l.push({
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
function Qt(e, t, n, l) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    o && (a.oldValue = o[s].value);
    let r = a.dir[l];
    r && (Rt(), at(r, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Nt());
  }
}
function Jr(e, t) {
  if ($e) {
    let n = $e.provides;
    const l = $e.parent && $e.parent.provides;
    l === n && (n = $e.provides = Object.create(l)), n[e] = t;
  }
}
function Wn(e, t, n = !1) {
  const l = ii();
  if (l || cn) {
    let i = cn ? cn._context.provides : l ? l.parent == null || l.ce ? l.vnode.appContext && l.vnode.appContext.provides : l.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && ce(t) ? t.call(l && l.proxy) : t;
  }
}
function Qr() {
  return !!(ii() || cn);
}
const Zr = /* @__PURE__ */ Symbol.for("v-scx"), eu = () => Wn(Zr);
function tu(e, t) {
  return no(
    e,
    null,
    { flush: "sync" }
  );
}
function He(e, t, n) {
  return no(e, t, n);
}
function no(e, t, n = be) {
  const { immediate: l, deep: i, flush: o, once: s } = n, a = Ne({}, n), r = t && l || !t && o !== "post";
  let c;
  if (Fn) {
    if (o === "sync") {
      const g = eu();
      c = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!r) {
      const g = () => {
      };
      return g.stop = vt, g.resume = vt, g.pause = vt, g;
    }
  }
  const u = $e;
  a.call = (g, p, _) => at(g, u, p, _);
  let d = !1;
  o === "post" ? a.scheduler = (g) => {
    ze(g, u && u.suspense);
  } : o !== "sync" && (d = !0, a.scheduler = (g, p) => {
    p ? g() : to(g);
  }), a.augmentJob = (g) => {
    t && (g.flags |= 4), d && (g.flags |= 2, u && (g.id = u.uid, g.i = u));
  };
  const m = Kr(e, t, a);
  return Fn && (c ? c.push(m) : r && m()), m;
}
function nu(e, t, n) {
  const l = this.proxy, i = Le(e) ? e.includes(".") ? Zs(l, e) : () => l[e] : e.bind(l, l);
  let o;
  ce(t) ? o = t : (o = t.handler, n = t);
  const s = ul(this), a = no(i, o.bind(l), n);
  return s(), a;
}
function Zs(e, t) {
  const n = t.split(".");
  return () => {
    let l = e;
    for (let i = 0; i < n.length && l; i++)
      l = l[n[i]];
    return l;
  };
}
const Wt = /* @__PURE__ */ new WeakMap(), ea = /* @__PURE__ */ Symbol("_vte"), ta = (e) => e.__isTeleport, ln = (e) => e && (e.disabled || e.disabled === ""), lu = (e) => e && (e.defer || e.defer === ""), xo = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Co = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Fi = (e, t) => {
  const n = e && e.to;
  return Le(n) ? t ? t(n) : null : n;
}, iu = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, l, i, o, s, a, r, c) {
    const {
      mc: u,
      pc: d,
      pbc: m,
      o: { insert: g, querySelector: p, createText: _, createComment: k, parentNode: x }
    } = c, S = ln(t.props);
    let { dynamicChildren: M } = t;
    const b = (T, W, E) => {
      T.shapeFlag & 16 && u(
        T.children,
        W,
        E,
        i,
        o,
        s,
        a,
        r
      );
    }, v = (T = t) => {
      const W = ln(T.props), E = T.target = Fi(T.props, p), V = Li(E, T, _, g);
      E && (s !== "svg" && xo(E) ? s = "svg" : s !== "mathml" && Co(E) && (s = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(E), W || (b(T, E, V), Vn(T, !1)));
    }, y = (T) => {
      const W = () => {
        if (Wt.get(T) === W) {
          if (Wt.delete(T), ln(T.props)) {
            const E = x(T.el) || n;
            b(T, E, T.anchor), Vn(T, !0);
          }
          v(T);
        }
      };
      Wt.set(T, W), ze(W, o);
    };
    if (e == null) {
      const T = t.el = _(""), W = t.anchor = _("");
      if (g(T, n, l), g(W, n, l), lu(t.props) || o && o.pendingBranch) {
        y(t);
        return;
      }
      S && (b(t, n, W), Vn(t, !0)), v();
    } else {
      t.el = e.el;
      const T = t.anchor = e.anchor, W = Wt.get(e);
      if (W) {
        W.flags |= 8, Wt.delete(e), y(t);
        return;
      }
      t.targetStart = e.targetStart;
      const E = t.target = e.target, V = t.targetAnchor = e.targetAnchor, K = ln(e.props), A = K ? n : E, O = K ? T : V;
      if (s === "svg" || xo(E) ? s = "svg" : (s === "mathml" || Co(E)) && (s = "mathml"), M ? (m(
        e.dynamicChildren,
        M,
        A,
        i,
        o,
        s,
        a
      ), so(e, t, !0)) : r || d(
        e,
        t,
        A,
        O,
        i,
        o,
        s,
        a,
        !1
      ), S)
        K ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ml(
          t,
          n,
          T,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const $ = Fi(t.props, p);
        $ && (t.target = $, ml(
          t,
          $,
          null,
          c,
          0
        ));
      } else K && ml(
        t,
        E,
        V,
        c,
        1
      );
      Vn(t, S);
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
    } = e, g = ln(m), p = o || !g, _ = Wt.get(e);
    if (_ && (_.flags |= 8, Wt.delete(e)), d && (i(c), i(u)), o && i(r), !_ && (g || d) && s & 16)
      for (let k = 0; k < a.length; k++) {
        const x = a[k];
        l(
          x,
          t,
          n,
          p,
          !!x.dynamicChildren
        );
      }
  },
  move: ml,
  hydrate: ou
};
function ml(e, t, n, { o: { insert: l }, m: i }, o = 2) {
  o === 0 && l(e.targetAnchor, t, n);
  const { el: s, anchor: a, shapeFlag: r, children: c, props: u } = e, d = o === 2;
  if (d && l(s, t, n), !Wt.has(e) && (!d || ln(u)) && r & 16)
    for (let m = 0; m < c.length; m++)
      i(
        c[m],
        t,
        n,
        2
      );
  d && l(a, t, n);
}
function ou(e, t, n, l, i, o, {
  o: { nextSibling: s, parentNode: a, querySelector: r, insert: c, createText: u }
}, d) {
  function m(k, x) {
    let S = x;
    for (; S; ) {
      if (S && S.nodeType === 8) {
        if (S.data === "teleport start anchor")
          t.targetStart = S;
        else if (S.data === "teleport anchor") {
          t.targetAnchor = S, k._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      S = s(S);
    }
  }
  function g(k, x) {
    x.anchor = d(
      s(k),
      x,
      a(k),
      n,
      l,
      i,
      o
    );
  }
  const p = t.target = Fi(
    t.props,
    r
  ), _ = ln(t.props);
  if (p) {
    const k = p._lpa || p.firstChild;
    t.shapeFlag & 16 && (_ ? (g(e, t), m(p, k), t.targetAnchor || Li(
      p,
      t,
      u,
      c,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      a(e) === p ? e : null
    )) : (t.anchor = s(e), m(p, k), t.targetAnchor || Li(p, t, u, c), d(
      k && s(k),
      t,
      p,
      n,
      l,
      i,
      o
    ))), Vn(t, _);
  } else _ && t.shapeFlag & 16 && (g(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const na = iu;
function Vn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let l, i;
    for (t ? (l = e.el, i = e.anchor) : (l = e.targetStart, i = e.targetAnchor); l && l !== i; )
      l.nodeType === 1 && l.setAttribute("data-v-owner", n.uid), l = l.nextSibling;
    n.ut();
  }
}
function Li(e, t, n, l, i = null) {
  const o = t.targetStart = n(""), s = t.targetAnchor = n("");
  return o[ea] = s, e && (l(o, e, i), l(s, e, i)), s;
}
const it = /* @__PURE__ */ Symbol("_leaveCb"), Rn = /* @__PURE__ */ Symbol("_enterCb");
function su() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return In(() => {
    e.isMounted = !0;
  }), rl(() => {
    e.isUnmounting = !0;
  }), e;
}
const nt = [Function, Array], la = {
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
}, ia = (e) => {
  const t = e.subTree;
  return t.component ? ia(t.component) : t;
}, au = {
  name: "BaseTransition",
  props: la,
  setup(e, { slots: t }) {
    const n = ii(), l = su();
    return () => {
      const i = t.default && aa(t.default(), !0), o = i && i.length ? oa(i) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? te() : void 0
      );
      if (!o)
        return;
      const s = /* @__PURE__ */ _e(e), { mode: a } = s;
      if (l.isLeaving)
        return hi(o);
      const r = Ao(o);
      if (!r)
        return hi(o);
      let c = Ii(
        r,
        s,
        l,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => c = d
      );
      r.type !== Ge && Zn(r, c);
      let u = n.subTree && Ao(n.subTree);
      if (u && u.type !== Ge && !on(u, r) && ia(n).type !== Ge) {
        let d = Ii(
          u,
          s,
          l,
          n
        );
        if (Zn(u, d), a === "out-in" && r.type !== Ge)
          return l.isLeaving = !0, d.afterLeave = () => {
            l.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, u = void 0;
          }, hi(o);
        a === "in-out" && r.type !== Ge ? d.delayLeave = (m, g, p) => {
          const _ = sa(
            l,
            u
          );
          _[String(u.key)] = u, m[it] = () => {
            g(), m[it] = void 0, delete c.delayedLeave, u = void 0;
          }, c.delayedLeave = () => {
            p(), delete c.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return o;
    };
  }
};
function oa(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ge) {
        t = n;
        break;
      }
  }
  return t;
}
const ru = au;
function sa(e, t) {
  const { leavingVNodes: n } = e;
  let l = n.get(t.type);
  return l || (l = /* @__PURE__ */ Object.create(null), n.set(t.type, l)), l;
}
function Ii(e, t, n, l, i) {
  const {
    appear: o,
    mode: s,
    persisted: a = !1,
    onBeforeEnter: r,
    onEnter: c,
    onAfterEnter: u,
    onEnterCancelled: d,
    onBeforeLeave: m,
    onLeave: g,
    onAfterLeave: p,
    onLeaveCancelled: _,
    onBeforeAppear: k,
    onAppear: x,
    onAfterAppear: S,
    onAppearCancelled: M
  } = t, b = String(e.key), v = sa(n, e), y = (E, V) => {
    E && at(
      E,
      l,
      9,
      V
    );
  }, T = (E, V) => {
    const K = V[1];
    y(E, V), le(E) ? E.every((A) => A.length <= 1) && K() : E.length <= 1 && K();
  }, W = {
    mode: s,
    persisted: a,
    beforeEnter(E) {
      let V = r;
      if (!n.isMounted)
        if (o)
          V = k || r;
        else
          return;
      E[it] && E[it](
        !0
        /* cancelled */
      );
      const K = v[b];
      K && on(e, K) && K.el[it] && K.el[it](), y(V, [E]);
    },
    enter(E) {
      if (v[b] === e) return;
      let V = c, K = u, A = d;
      if (!n.isMounted)
        if (o)
          V = x || c, K = S || u, A = M || d;
        else
          return;
      let O = !1;
      E[Rn] = (R) => {
        O || (O = !0, R ? y(A, [E]) : y(K, [E]), W.delayedLeave && W.delayedLeave(), E[Rn] = void 0);
      };
      const $ = E[Rn].bind(null, !1);
      V ? T(V, [E, $]) : $();
    },
    leave(E, V) {
      const K = String(e.key);
      if (E[Rn] && E[Rn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return V();
      y(m, [E]);
      let A = !1;
      E[it] = ($) => {
        A || (A = !0, V(), $ ? y(_, [E]) : y(p, [E]), E[it] = void 0, v[K] === e && delete v[K]);
      };
      const O = E[it].bind(null, !1);
      v[K] = e, g ? T(g, [E, O]) : O();
    },
    clone(E) {
      const V = Ii(
        E,
        t,
        n,
        l,
        i
      );
      return i && i(V), V;
    }
  };
  return W;
}
function hi(e) {
  if (al(e))
    return e = qt(e), e.children = null, e;
}
function Ao(e) {
  if (!al(e))
    return ta(e.type) && e.children ? oa(e.children) : e;
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
function Zn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Zn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function aa(e, t = !1, n) {
  let l = [], i = 0;
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : o);
    s.type === ue ? (s.patchFlag & 128 && i++, l = l.concat(
      aa(s.children, t, a)
    )) : (t || s.type !== Ge) && l.push(a != null ? qt(s, { key: a }) : s);
  }
  if (i > 1)
    for (let o = 0; o < l.length; o++)
      l[o].patchFlag = -2;
  return l;
}
// @__NO_SIDE_EFFECTS__
function Ce(e, t) {
  return ce(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ne({ name: e.name }, t, { setup: e })
  ) : e;
}
function lo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Mo(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Dl = /* @__PURE__ */ new WeakMap();
function jn(e, t, n, l, i = !1) {
  if (le(e)) {
    e.forEach(
      (_, k) => jn(
        _,
        t && (le(t) ? t[k] : t),
        n,
        l,
        i
      )
    );
    return;
  }
  if (xn(l) && !i) {
    l.shapeFlag & 512 && l.type.__asyncResolved && l.component.subTree.component && jn(e, t, n, l.component.subTree);
    return;
  }
  const o = l.shapeFlag & 4 ? oi(l.component) : l.el, s = i ? null : o, { i: a, r } = e, c = t && t.r, u = a.refs === be ? a.refs = {} : a.refs, d = a.setupState, m = /* @__PURE__ */ _e(d), g = d === be ? Ss : (_) => Mo(u, _) ? !1 : ye(m, _), p = (_, k) => !(k && Mo(u, k));
  if (c != null && c !== r) {
    if (ko(t), Le(c))
      u[c] = null, g(c) && (d[c] = null);
    else if (/* @__PURE__ */ fe(c)) {
      const _ = t;
      p(c, _.k) && (c.value = null), _.k && (u[_.k] = null);
    }
  }
  if (ce(r))
    ol(r, a, 12, [s, u]);
  else {
    const _ = Le(r), k = /* @__PURE__ */ fe(r);
    if (_ || k) {
      const x = () => {
        if (e.f) {
          const S = _ ? g(r) ? d[r] : u[r] : p() || !e.k ? r.value : u[e.k];
          if (i)
            le(S) && qi(S, o);
          else if (le(S))
            S.includes(o) || S.push(o);
          else if (_)
            u[r] = [o], g(r) && (d[r] = u[r]);
          else {
            const M = [o];
            p(r, e.k) && (r.value = M), e.k && (u[e.k] = M);
          }
        } else _ ? (u[r] = s, g(r) && (d[r] = s)) : k && (p(r, e.k) && (r.value = s), e.k && (u[e.k] = s));
      };
      if (s) {
        const S = () => {
          x(), Dl.delete(e);
        };
        S.id = -1, Dl.set(e, S), ze(S, n);
      } else
        ko(e), x();
    }
  }
}
function ko(e) {
  const t = Dl.get(e);
  t && (t.flags |= 8, Dl.delete(e));
}
const Fo = (e) => e.nodeType === 8;
Yl().requestIdleCallback;
Yl().cancelIdleCallback;
function uu(e, t) {
  if (Fo(e) && e.data === "[") {
    let n = 1, l = e.nextSibling;
    for (; l; ) {
      if (l.nodeType === 1) {
        if (t(l) === !1)
          break;
      } else if (Fo(l))
        if (l.data === "]") {
          if (--n === 0) break;
        } else l.data === "[" && n++;
      l = l.nextSibling;
    }
  } else
    t(e);
}
const xn = (e) => !!e.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function $t(e) {
  ce(e) && (e = { loader: e });
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
  const m = () => (d++, c = null, g()), g = () => {
    let p;
    return c || (p = c = t().catch((_) => {
      if (_ = _ instanceof Error ? _ : new Error(String(_)), r)
        return new Promise((k, x) => {
          r(_, () => k(m()), () => x(_), d + 1);
        });
      throw _;
    }).then((_) => p !== c && c ? c : (_ && (_.__esModule || _[Symbol.toStringTag] === "Module") && (_ = _.default), u = _, _)));
  };
  return /* @__PURE__ */ Ce({
    name: "AsyncComponentWrapper",
    __asyncLoader: g,
    __asyncHydrate(p, _, k) {
      const x = p.isConnected;
      let S = !1;
      (_.bu || (_.bu = [])).push(() => S = !0);
      const M = () => {
        S || !p.parentNode || x && !p.isConnected || k();
      }, b = o ? () => {
        const v = o(
          M,
          (y) => uu(p, y)
        );
        v && (_.bum || (_.bum = [])).push(v);
      } : M;
      u ? b() : g().then(() => !_.isUnmounted && b());
    },
    get __asyncResolved() {
      return u;
    },
    setup() {
      const p = $e;
      if (lo(p), u)
        return () => hl(u, p);
      const _ = (v) => {
        c = null, sl(
          v,
          p,
          13,
          !l
        );
      };
      if (a && p.suspense || Fn)
        return g().then((v) => () => hl(v, p)).catch((v) => (_(v), () => l ? j(l, {
          error: v
        }) : null));
      const k = /* @__PURE__ */ se(!1), x = /* @__PURE__ */ se(), S = /* @__PURE__ */ se(!!i);
      let M, b;
      return ti(() => {
        M != null && clearTimeout(M), b != null && clearTimeout(b);
      }), i && (b = setTimeout(() => {
        p.isUnmounted || (S.value = !1);
      }, i)), s != null && (M = setTimeout(() => {
        if (!p.isUnmounted && !k.value && !x.value) {
          const v = new Error(
            `Async component timed out after ${s}ms.`
          );
          _(v), x.value = v;
        }
      }, s)), g().then(() => {
        p.isUnmounted || (k.value = !0, p.parent && al(p.parent.vnode) && p.parent.update());
      }).catch((v) => {
        if (p.isUnmounted) {
          c = null;
          return;
        }
        _(v), x.value = v;
      }), () => {
        if (k.value && u)
          return hl(u, p);
        if (x.value && l)
          return j(l, {
            error: x.value
          });
        if (n && !S.value)
          return hl(
            n,
            p
          );
      };
    }
  });
}
function hl(e, t) {
  const { ref: n, props: l, children: i, ce: o } = t.vnode, s = j(e, l, i);
  return s.ref = n, s.ce = o, delete t.vnode.ce, s;
}
const al = (e) => e.type.__isKeepAlive;
function cu(e, t) {
  ra(e, "a", t);
}
function du(e, t) {
  ra(e, "da", t);
}
function ra(e, t, n = $e) {
  const l = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (ei(t, l, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      al(i.parent.vnode) && fu(l, t, n, i), i = i.parent;
  }
}
function fu(e, t, n, l) {
  const i = ei(
    t,
    e,
    l,
    !0
    /* prepend */
  );
  ti(() => {
    qi(l[t], i);
  }, n);
}
function ei(e, t, n = $e, l = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...s) => {
      Rt();
      const a = ul(n), r = at(t, n, e, s);
      return a(), Nt(), r;
    });
    return l ? i.unshift(o) : i.push(o), o;
  }
}
const Bt = (e) => (t, n = $e) => {
  (!Fn || e === "sp") && ei(e, (...l) => t(...l), n);
}, pu = Bt("bm"), In = Bt("m"), mu = Bt(
  "bu"
), hu = Bt("u"), rl = Bt(
  "bum"
), ti = Bt("um"), gu = Bt(
  "sp"
), _u = Bt("rtg"), bu = Bt("rtc");
function vu(e, t = $e) {
  ei("ec", e, t);
}
const yu = "components", ua = /* @__PURE__ */ Symbol.for("v-ndc");
function wu(e) {
  return Le(e) ? Su(yu, e, !1) || e : e || ua;
}
function Su(e, t, n = !0, l = !1) {
  const i = Be || $e;
  if (i) {
    const o = i.type;
    {
      const a = oc(
        o,
        !1
      );
      if (a && (a === t || a === We(t) || a === ql(We(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Lo(i[e] || o[e], t) || // global registration
      Lo(i.appContext[e], t)
    );
    return !s && l ? o : s;
  }
}
function Lo(e, t) {
  return e && (e[t] || e[We(t)] || e[ql(We(t))]);
}
function De(e, t, n, l) {
  let i;
  const o = n, s = le(e);
  if (s || Le(e)) {
    const a = s && /* @__PURE__ */ Dt(e);
    let r = !1, c = !1;
    a && (r = !/* @__PURE__ */ Qe(e), c = /* @__PURE__ */ Tt(e), e = Ql(e)), i = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      i[u] = t(
        r ? c ? kn(ct(e[u])) : ct(e[u]) : e[u],
        u,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++)
      i[a] = t(a + 1, a, void 0, o);
  } else if (we(e))
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
function xu(e, t, n = {}, l, i, o) {
  if (Be.ce || Be.parent && xn(Be.parent) && Be.parent.ce) {
    const c = n, u = Object.keys(c).length > 0;
    return C(), Me(
      ue,
      null,
      [j("slot", c, l)],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const a = Pt.length;
  C();
  let r;
  try {
    const c = s && ca(s(n)), u = n.key || o || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    c && c.key;
    r = Me(
      ue,
      {
        key: (u && !Ze(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!c && l ? "_fb" : "")
      },
      c || (l ? l() : []),
      c && e._ === 1 ? 64 : -2
    );
  } catch (c) {
    for (let u = Pt.length; u > a; u--) ao();
    throw c;
  } finally {
    s && s._c && (s._d = !0);
  }
  return r;
}
function ca(e) {
  return e.some((t) => tl(t) ? !(t.type === Ge || t.type === ue && !ca(t.children)) : !0) ? e : null;
}
const Di = (e) => e ? Ia(e) ? oi(e) : Di(e.parent) : null, zn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ne(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Di(e.parent),
    $root: (e) => Di(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => fa(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      to(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ln.bind(e.proxy)),
    $watch: (e) => nu.bind(e)
  })
), gi = (e, t) => e !== be && !e.__isScriptSetup && ye(e, t), Cu = {
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
        if (gi(l, t))
          return s[t] = 1, l[t];
        if (i !== be && ye(i, t))
          return s[t] = 2, i[t];
        if (ye(o, t))
          return s[t] = 3, o[t];
        if (n !== be && ye(n, t))
          return s[t] = 4, n[t];
        Pi && (s[t] = 0);
      }
    }
    const c = zn[t];
    let u, d;
    if (c)
      return t === "$attrs" && Ue(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = a.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== be && ye(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      d = r.config.globalProperties, ye(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: l, setupState: i, ctx: o } = e;
    return gi(i, t) ? (i[t] = n, !0) : l !== be && ye(l, t) ? (l[t] = n, !0) : ye(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: l, appContext: i, props: o, type: s }
  }, a) {
    let r;
    return !!(n[a] || e !== be && a[0] !== "$" && ye(e, a) || gi(t, a) || ye(o, a) || ye(l, a) || ye(zn, a) || ye(i.config.globalProperties, a) || (r = s.__cssModules) && r[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ye(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Pl(e) {
  return le(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Xe(e, t) {
  return !e || !t ? e || t : le(e) && le(t) ? e.concat(t) : Ne({}, Pl(e), Pl(t));
}
let Pi = !0;
function Au(e) {
  const t = fa(e), n = e.proxy, l = e.ctx;
  Pi = !1, t.beforeCreate && Io(t.beforeCreate, e, "bc");
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
    beforeUpdate: g,
    updated: p,
    activated: _,
    deactivated: k,
    beforeDestroy: x,
    beforeUnmount: S,
    destroyed: M,
    unmounted: b,
    render: v,
    renderTracked: y,
    renderTriggered: T,
    errorCaptured: W,
    serverPrefetch: E,
    // public API
    expose: V,
    inheritAttrs: K,
    // assets
    components: A,
    directives: O,
    filters: $
  } = t;
  if (c && Mu(c, l, null), s)
    for (const P in s) {
      const I = s[P];
      ce(I) && (l[P] = I.bind(n));
    }
  if (i) {
    const P = i.call(n, n);
    we(P) && (e.data = /* @__PURE__ */ Xt(P));
  }
  if (Pi = !0, o)
    for (const P in o) {
      const I = o[P], H = ce(I) ? I.bind(n, n) : ce(I.get) ? I.get.bind(n, n) : vt, me = !ce(I) && ce(I.set) ? I.set.bind(n) : vt, Se = Q({
        get: H,
        set: me
      });
      Object.defineProperty(l, P, {
        enumerable: !0,
        configurable: !0,
        get: () => Se.value,
        set: (Pe) => Se.value = Pe
      });
    }
  if (a)
    for (const P in a)
      da(a[P], l, n, P);
  if (r) {
    const P = ce(r) ? r.call(n) : r;
    Reflect.ownKeys(P).forEach((I) => {
      Jr(I, P[I]);
    });
  }
  u && Io(u, e, "c");
  function N(P, I) {
    le(I) ? I.forEach((H) => P(H.bind(n))) : I && P(I.bind(n));
  }
  if (N(pu, d), N(In, m), N(mu, g), N(hu, p), N(cu, _), N(du, k), N(vu, W), N(bu, y), N(_u, T), N(rl, S), N(ti, b), N(gu, E), le(V))
    if (V.length) {
      const P = e.exposed || (e.exposed = {});
      V.forEach((I) => {
        Object.defineProperty(P, I, {
          get: () => n[I],
          set: (H) => n[I] = H,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  v && e.render === vt && (e.render = v), K != null && (e.inheritAttrs = K), A && (e.components = A), O && (e.directives = O), E && lo(e);
}
function Mu(e, t, n = vt) {
  le(e) && (e = Ri(e));
  for (const l in e) {
    const i = e[l];
    let o;
    we(i) ? "default" in i ? o = Wn(
      i.from || l,
      i.default,
      !0
    ) : o = Wn(i.from || l) : o = Wn(i), /* @__PURE__ */ fe(o) ? Object.defineProperty(t, l, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[l] = o;
  }
}
function Io(e, t, n) {
  at(
    le(e) ? e.map((l) => l.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function da(e, t, n, l) {
  let i = l.includes(".") ? Zs(n, l) : () => n[l];
  if (Le(e)) {
    const o = t[e];
    ce(o) && He(i, o);
  } else if (ce(e))
    He(i, e.bind(n));
  else if (we(e))
    if (le(e))
      e.forEach((o) => da(o, t, n, l));
    else {
      const o = ce(e.handler) ? e.handler.bind(n) : t[e.handler];
      ce(o) && He(i, o, e);
    }
}
function fa(e) {
  const t = e.type, { mixins: n, extends: l } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = o.get(t);
  let r;
  return a ? r = a : !i.length && !n && !l ? r = t : (r = {}, i.length && i.forEach(
    (c) => Rl(r, c, s, !0)
  ), Rl(r, t, s)), we(t) && o.set(t, r), r;
}
function Rl(e, t, n, l = !1) {
  const { mixins: i, extends: o } = t;
  o && Rl(e, o, n, !0), i && i.forEach(
    (s) => Rl(e, s, n, !0)
  );
  for (const s in t)
    if (!(l && s === "expose")) {
      const a = ku[s] || n && n[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const ku = {
  data: Do,
  props: Po,
  emits: Po,
  // objects
  methods: On,
  computed: On,
  // lifecycle
  beforeCreate: je,
  created: je,
  beforeMount: je,
  mounted: je,
  beforeUpdate: je,
  updated: je,
  beforeDestroy: je,
  beforeUnmount: je,
  destroyed: je,
  unmounted: je,
  activated: je,
  deactivated: je,
  errorCaptured: je,
  serverPrefetch: je,
  // assets
  components: On,
  directives: On,
  // watch
  watch: Lu,
  // provide / inject
  provide: Do,
  inject: Fu
};
function Do(e, t) {
  return t ? e ? function() {
    return Ne(
      ce(e) ? e.call(this, this) : e,
      ce(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Fu(e, t) {
  return On(Ri(e), Ri(t));
}
function Ri(e) {
  if (le(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function je(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function On(e, t) {
  return e ? Ne(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Po(e, t) {
  return e ? le(e) && le(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ne(
    /* @__PURE__ */ Object.create(null),
    Pl(e),
    Pl(t ?? {})
  ) : t;
}
function Lu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ne(/* @__PURE__ */ Object.create(null), e);
  for (const l in t)
    n[l] = je(e[l], t[l]);
  return n;
}
function pa() {
  return {
    app: null,
    config: {
      isNativeTag: Ss,
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
let Iu = 0;
function Du(e, t) {
  return function(l, i = null) {
    ce(l) || (l = Ne({}, l)), i != null && !we(i) && (i = null);
    const o = pa(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let r = !1;
    const c = o.app = {
      _uid: Iu++,
      _component: l,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: ac,
      get config() {
        return o.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return s.has(u) || (u && ce(u.install) ? (s.add(u), u.install(c, ...d)) : ce(u) && (s.add(u), u(c, ...d))), c;
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
          const g = c._ceVNode || j(l, i);
          return g.appContext = o, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(g, u, m), r = !0, c._container = u, u.__vue_app__ = c, oi(g.component);
        }
      },
      onUnmount(u) {
        a.push(u);
      },
      unmount() {
        r && (at(
          a,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, d) {
        return o.provides[u] = d, c;
      },
      runWithContext(u) {
        const d = cn;
        cn = c;
        try {
          return u();
        } finally {
          cn = d;
        }
      }
    };
    return c;
  };
}
let cn = null;
function rt(e, t, n = be) {
  const l = ii(), i = We(t), o = Ot(t), s = ma(e, i), a = Br((r, c) => {
    let u, d = be, m;
    return tu(() => {
      const g = e[i];
      Oe(u, g) && (u = g, c());
    }), {
      get() {
        return r(), n.get ? n.get(u) : u;
      },
      set(g) {
        const p = n.set ? n.set(g) : g;
        if (!Oe(p, u) && !(d !== be && Oe(g, d)))
          return;
        const _ = l.vnode.props, k = !!(_ && // check if parent has passed v-model
        (t in _ || i in _ || o in _) && (`onUpdate:${t}` in _ || `onUpdate:${i}` in _ || `onUpdate:${o}` in _));
        k || (u = g, c()), l.emit(`update:${t}`, p), Oe(g, d) && (Oe(g, p) && !Oe(p, m) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        k && d !== be && !Oe(p, u)) && c(), d = g, m = p;
      }
    };
  });
  return a[Symbol.iterator] = () => {
    let r = 0;
    return {
      next() {
        return r < 2 ? { value: r++ ? s || be : a, done: !1 } : { done: !0 };
      }
    };
  }, a;
}
const ma = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${We(t)}Modifiers`] || e[`${Ot(t)}Modifiers`];
function Pu(e, t, ...n) {
  if (e.isUnmounted) return;
  const l = e.vnode.props || be;
  let i = n;
  const o = t.startsWith("update:"), s = o && ma(l, t.slice(7));
  s && (s.trim && (i = n.map((u) => Le(u) ? u.trim() : u)), s.number && (i = n.map(Xl)));
  let a, r = l[a = ci(t)] || // also try camelCase event handler (#2249)
  l[a = ci(We(t))];
  !r && o && (r = l[a = ci(Ot(t))]), r && at(
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
    e.emitted[a] = !0, at(
      c,
      e,
      6,
      i
    );
  }
}
const Ru = /* @__PURE__ */ new WeakMap();
function ha(e, t, n = !1) {
  const l = n ? Ru : t.emitsCache, i = l.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, a = !1;
  if (!ce(e)) {
    const r = (c) => {
      const u = ha(c, t, !0);
      u && (a = !0, Ne(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
  }
  return !o && !a ? (we(e) && l.set(e, null), null) : (le(o) ? o.forEach((r) => s[r] = null) : Ne(s, o), we(e) && l.set(e, s), s);
}
function ni(e, t) {
  return !e || !Gl(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ye(e, t[0].toLowerCase() + t.slice(1)) || ye(e, Ot(t)) || ye(e, t));
}
function Ro(e) {
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
    setupState: g,
    ctx: p,
    inheritAttrs: _
  } = e, k = Il(e);
  let x, S;
  try {
    if (n.shapeFlag & 4) {
      const b = i || l, v = b;
      x = _t(
        c.call(
          v,
          b,
          u,
          d,
          g,
          m,
          p
        )
      ), S = a;
    } else {
      const b = t;
      x = _t(
        b.length > 1 ? b(
          d,
          { attrs: a, slots: s, emit: r }
        ) : b(
          d,
          null
        )
      ), S = t.props ? a : Nu(a);
    }
  } catch (b) {
    Pt.length = 0, sl(b, e, 1), x = j(Ge);
  }
  let M = x;
  if (S && _ !== !1) {
    const b = Object.keys(S), { shapeFlag: v } = M;
    b.length && v & 7 && (o && b.some(Wl) && (S = Tu(
      S,
      o
    )), M = qt(M, S, !1, !0));
  }
  return n.dirs && (M = qt(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs), n.transition && Zn(M, n.transition), x = M, Il(k), x;
}
const Nu = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Gl(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Tu = (e, t) => {
  const n = {};
  for (const l in e)
    (!Wl(l) || !(l.slice(9) in t)) && (n[l] = e[l]);
  return n;
};
function Eu(e, t, n) {
  const { props: l, children: i, component: o } = e, { props: s, children: a, patchFlag: r } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && r >= 0) {
    if (r & 1024)
      return !0;
    if (r & 16)
      return l ? No(l, s, c) : !!s;
    if (r & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const m = u[d];
        if (ga(s, l, m) && !ni(c, m))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : l === s ? !1 : l ? s ? No(l, s, c) : !0 : !!s;
  return !1;
}
function No(e, t, n) {
  const l = Object.keys(t);
  if (l.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < l.length; i++) {
    const o = l[i];
    if (ga(t, e, o) && !ni(n, o))
      return !0;
  }
  return !1;
}
function ga(e, t, n) {
  const l = e[n], i = t[n];
  return n === "style" && we(l) && we(i) ? !il(l, i) : l !== i;
}
function Vu({ vnode: e, parent: t, suspense: n }, l) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = l, e = i), i === e)
      (e = t.vnode).el = l, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = l);
}
const _a = {}, ba = () => Object.create(_a), va = (e) => Object.getPrototypeOf(e) === _a;
function Ou(e, t, n, l = !1) {
  const i = {}, o = ba();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ya(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  n ? e.props = l ? i : /* @__PURE__ */ Tr(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function $u(e, t, n, l) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, a = /* @__PURE__ */ _e(i), [r] = e.propsOptions;
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
        if (ni(e.emitsOptions, m))
          continue;
        const g = t[m];
        if (r)
          if (ye(o, m))
            g !== o[m] && (o[m] = g, c = !0);
          else {
            const p = We(m);
            i[p] = Ni(
              r,
              a,
              p,
              g,
              e,
              !1
            );
          }
        else
          g !== o[m] && (o[m] = g, c = !0);
      }
    }
  } else {
    ya(e, t, i, o) && (c = !0);
    let u;
    for (const d in a)
      (!t || // for camelCase
      !ye(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Ot(d)) === d || !ye(t, u))) && (r ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (i[d] = Ni(
        r,
        a,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (o !== a)
      for (const d in o)
        (!t || !ye(t, d)) && (delete o[d], c = !0);
  }
  c && Lt(e.attrs, "set", "");
}
function ya(e, t, n, l) {
  const [i, o] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let r in t) {
      if (Hn(r))
        continue;
      const c = t[r];
      let u;
      i && ye(i, u = We(r)) ? !o || !o.includes(u) ? n[u] = c : (a || (a = {}))[u] = c : ni(e.emitsOptions, r) || (!(r in l) || c !== l[r]) && (l[r] = c, s = !0);
    }
  if (o) {
    const r = /* @__PURE__ */ _e(n), c = a || be;
    for (let u = 0; u < o.length; u++) {
      const d = o[u];
      n[d] = Ni(
        i,
        r,
        d,
        c[d],
        e,
        !ye(c, d)
      );
    }
  }
  return s;
}
function Ni(e, t, n, l, i, o) {
  const s = e[n];
  if (s != null) {
    const a = ye(s, "default");
    if (a && l === void 0) {
      const r = s.default;
      if (s.type !== Function && !s.skipFactory && ce(r)) {
        const { propsDefaults: c } = i;
        if (n in c)
          l = c[n];
        else {
          const u = ul(i);
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
    ] && (l === "" || l === Ot(n)) && (l = !0));
  }
  return l;
}
const Bu = /* @__PURE__ */ new WeakMap();
function wa(e, t, n = !1) {
  const l = n ? Bu : t.propsCache, i = l.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, a = [];
  let r = !1;
  if (!ce(e)) {
    const u = (d) => {
      r = !0;
      const [m, g] = wa(d, t, !0);
      Ne(s, m), g && a.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !r)
    return we(e) && l.set(e, yn), yn;
  if (le(o))
    for (let u = 0; u < o.length; u++) {
      const d = We(o[u]);
      To(d) && (s[d] = be);
    }
  else if (o)
    for (const u in o) {
      const d = We(u);
      if (To(d)) {
        const m = o[u], g = s[d] = le(m) || ce(m) ? { type: m } : Ne({}, m), p = g.type;
        let _ = !1, k = !0;
        if (le(p))
          for (let x = 0; x < p.length; ++x) {
            const S = p[x], M = ce(S) && S.name;
            if (M === "Boolean") {
              _ = !0;
              break;
            } else M === "String" && (k = !1);
          }
        else
          _ = ce(p) && p.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = _, g[
          1
          /* shouldCastTrue */
        ] = k, (_ || ye(g, "default")) && a.push(d);
      }
    }
  const c = [s, a];
  return we(e) && l.set(e, c), c;
}
function To(e) {
  return e[0] !== "$" && !Hn(e);
}
const io = (e) => e === "_" || e === "_ctx" || e === "$stable", oo = (e) => le(e) ? e.map(_t) : [_t(e)], Hu = (e, t, n) => {
  if (t._n)
    return t;
  const l = Kt((...i) => oo(t(...i)), n);
  return l._c = !1, l;
}, Sa = (e, t, n) => {
  const l = e._ctx;
  for (const i in e) {
    if (io(i)) continue;
    const o = e[i];
    if (ce(o))
      t[i] = Hu(i, o, l);
    else if (o != null) {
      const s = oo(o);
      t[i] = () => s;
    }
  }
}, xa = (e, t) => {
  const n = oo(t);
  e.slots.default = () => n;
}, Ca = (e, t, n) => {
  for (const l in t)
    (n || !io(l)) && (e[l] = t[l]);
}, Uu = (e, t, n) => {
  const l = e.slots = ba();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Ca(l, t, n), n && Ms(l, "_", i, !0)) : Sa(t, l);
  } else t && xa(e, t);
}, Gu = (e, t, n) => {
  const { vnode: l, slots: i } = e;
  let o = !0, s = be;
  if (l.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = !1 : Ca(i, t, n) : (o = !t.$stable, Sa(t, i)), s = t;
  } else t && (xa(e, t), s = { default: 1 });
  if (o)
    for (const a in i)
      !io(a) && s[a] == null && delete i[a];
}, ze = qu;
function Wu(e) {
  return ju(e);
}
function ju(e, t) {
  const n = Yl();
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
    setScopeId: g = vt,
    insertStaticContent: p
  } = e, _ = (h, w, D, z = null, G = null, B = null, Z = void 0, Y = null, q = !!w.dynamicChildren) => {
    if (h === w)
      return;
    h && !on(h, w) && (z = J(h), Pe(h, G, B, !0), h = null), w.patchFlag === -2 && (q = !1, w.dynamicChildren = null);
    const { type: U, ref: ae, shapeFlag: ee } = w;
    switch (U) {
      case li:
        k(h, w, D, z);
        break;
      case Ge:
        x(h, w, D, z);
        break;
      case bi:
        h == null && S(w, D, z, Z);
        break;
      case ue:
        A(
          h,
          w,
          D,
          z,
          G,
          B,
          Z,
          Y,
          q
        );
        break;
      default:
        ee & 1 ? v(
          h,
          w,
          D,
          z,
          G,
          B,
          Z,
          Y,
          q
        ) : ee & 6 ? O(
          h,
          w,
          D,
          z,
          G,
          B,
          Z,
          Y,
          q
        ) : (ee & 64 || ee & 128) && U.process(
          h,
          w,
          D,
          z,
          G,
          B,
          Z,
          Y,
          q,
          Ie
        );
    }
    ae != null && G ? jn(ae, h && h.ref, B, w || h, !w) : ae == null && h && h.ref != null && jn(h.ref, null, B, h, !0);
  }, k = (h, w, D, z) => {
    if (h == null)
      l(
        w.el = a(w.children),
        D,
        z
      );
    else {
      const G = w.el = h.el;
      w.children !== h.children && c(G, w.children);
    }
  }, x = (h, w, D, z) => {
    h == null ? l(
      w.el = r(w.children || ""),
      D,
      z
    ) : w.el = h.el;
  }, S = (h, w, D, z) => {
    [h.el, h.anchor] = p(
      h.children,
      w,
      D,
      z,
      h.el,
      h.anchor
    );
  }, M = ({ el: h, anchor: w }, D, z) => {
    let G;
    for (; h && h !== w; )
      G = m(h), l(h, D, z), h = G;
    l(w, D, z);
  }, b = ({ el: h, anchor: w }) => {
    let D;
    for (; h && h !== w; )
      D = m(h), i(h), h = D;
    i(w);
  }, v = (h, w, D, z, G, B, Z, Y, q) => {
    if (w.type === "svg" ? Z = "svg" : w.type === "math" && (Z = "mathml"), h == null)
      y(
        w,
        D,
        z,
        G,
        B,
        Z,
        Y,
        q
      );
    else {
      const U = h.el && h.el._isVueCE ? h.el : null;
      try {
        U && U._beginPatch(), E(
          h,
          w,
          G,
          B,
          Z,
          Y,
          q
        );
      } finally {
        U && U._endPatch();
      }
    }
  }, y = (h, w, D, z, G, B, Z, Y) => {
    let q, U;
    const { props: ae, shapeFlag: ee, transition: ie, dirs: re } = h;
    if (q = h.el = s(
      h.type,
      B,
      ae && ae.is,
      ae
    ), ee & 8 ? u(q, h.children) : ee & 16 && W(
      h.children,
      q,
      null,
      z,
      G,
      _i(h, B),
      Z,
      Y
    ), re && Qt(h, null, z, "created"), T(q, h, h.scopeId, Z, z), ae) {
      for (const Ae in ae)
        Ae !== "value" && !Hn(Ae) && o(q, Ae, null, ae[Ae], B, z);
      "value" in ae && o(q, "value", null, ae.value, B), (U = ae.onVnodeBeforeMount) && mt(U, z, h);
    }
    re && Qt(h, null, z, "beforeMount");
    const ge = zu(G, ie);
    ge && ie.beforeEnter(q), l(q, w, D), ((U = ae && ae.onVnodeMounted) || ge || re) && ze(() => {
      try {
        U && mt(U, z, h), ge && ie.enter(q), re && Qt(h, null, z, "mounted");
      } finally {
      }
    }, G);
  }, T = (h, w, D, z, G) => {
    if (D && g(h, D), z)
      for (let B = 0; B < z.length; B++)
        g(h, z[B]);
    if (G) {
      let B = G.subTree;
      if (w === B || ka(B.type) && (B.ssContent === w || B.ssFallback === w)) {
        const Z = G.vnode;
        T(
          h,
          Z,
          Z.scopeId,
          Z.slotScopeIds,
          G.parent
        );
      }
    }
  }, W = (h, w, D, z, G, B, Z, Y, q = 0) => {
    for (let U = q; U < h.length; U++) {
      const ae = h[U] = Y ? Mt(h[U]) : _t(h[U]);
      _(
        null,
        ae,
        w,
        D,
        z,
        G,
        B,
        Z,
        Y
      );
    }
  }, E = (h, w, D, z, G, B, Z) => {
    const Y = w.el = h.el;
    let { patchFlag: q, dynamicChildren: U, dirs: ae } = w;
    q |= h.patchFlag & 16;
    const ee = h.props || be, ie = w.props || be;
    let re;
    if (D && Zt(D, !1), (re = ie.onVnodeBeforeUpdate) && mt(re, D, w, h), ae && Qt(w, h, D, "beforeUpdate"), D && Zt(D, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    U && (!h.dynamicChildren || h.dynamicChildren.length !== U.length) && (q = 0, Z = !1, U = null), (ee.innerHTML && ie.innerHTML == null || ee.textContent && ie.textContent == null) && u(Y, ""), U ? V(
      h.dynamicChildren,
      U,
      Y,
      D,
      z,
      _i(w, G),
      B
    ) : Z || I(
      h,
      w,
      Y,
      null,
      D,
      z,
      _i(w, G),
      B,
      !1
    ), q > 0) {
      if (q & 16)
        K(Y, ee, ie, D, G);
      else if (q & 2 && ee.class !== ie.class && o(Y, "class", null, ie.class, G), q & 4 && o(Y, "style", ee.style, ie.style, G), q & 8) {
        const ge = w.dynamicProps;
        for (let Ae = 0; Ae < ge.length; Ae++) {
          const xe = ge[Ae], Re = ee[xe], Ve = ie[xe];
          (Ve !== Re || xe === "value") && o(Y, xe, Re, Ve, G, D);
        }
      }
      q & 1 && h.children !== w.children && u(Y, w.children);
    } else !Z && U == null && K(Y, ee, ie, D, G);
    ((re = ie.onVnodeUpdated) || ae) && ze(() => {
      re && mt(re, D, w, h), ae && Qt(w, h, D, "updated");
    }, z);
  }, V = (h, w, D, z, G, B, Z) => {
    for (let Y = 0; Y < w.length; Y++) {
      const q = h[Y], U = w[Y], ae = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        q.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (q.type === ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !on(q, U) || // - In the case of a component, it could contain anything.
        q.shapeFlag & 198) ? d(q.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          D
        )
      );
      _(
        q,
        U,
        ae,
        null,
        z,
        G,
        B,
        Z,
        !0
      );
    }
  }, K = (h, w, D, z, G) => {
    if (w !== D) {
      if (w !== be)
        for (const B in w)
          !Hn(B) && !(B in D) && o(
            h,
            B,
            w[B],
            null,
            G,
            z
          );
      for (const B in D) {
        if (Hn(B)) continue;
        const Z = D[B], Y = w[B];
        Z !== Y && B !== "value" && o(h, B, Y, Z, G, z);
      }
      "value" in D && o(h, "value", w.value, D.value, G);
    }
  }, A = (h, w, D, z, G, B, Z, Y, q) => {
    const U = w.el = h ? h.el : a(""), ae = w.anchor = h ? h.anchor : a("");
    let { patchFlag: ee, dynamicChildren: ie, slotScopeIds: re } = w;
    re && (Y = Y ? Y.concat(re) : re), h == null ? (l(U, D, z), l(ae, D, z), W(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      D,
      ae,
      G,
      B,
      Z,
      Y,
      q
    )) : ee > 0 && ee & 64 && ie && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren && h.dynamicChildren.length === ie.length ? (V(
      h.dynamicChildren,
      ie,
      D,
      G,
      B,
      Z,
      Y
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || G && w === G.subTree) && so(
      h,
      w,
      !0
      /* shallow */
    )) : I(
      h,
      w,
      D,
      ae,
      G,
      B,
      Z,
      Y,
      q
    );
  }, O = (h, w, D, z, G, B, Z, Y, q) => {
    w.slotScopeIds = Y, h == null ? w.shapeFlag & 512 ? G.ctx.activate(
      w,
      D,
      z,
      Z,
      q
    ) : $(
      w,
      D,
      z,
      G,
      B,
      Z,
      q
    ) : R(h, w, q);
  }, $ = (h, w, D, z, G, B, Z) => {
    const Y = h.component = ec(
      h,
      z,
      G
    );
    if (al(h) && (Y.ctx.renderer = Ie), tc(Y, !1, Z), Y.asyncDep) {
      if (G && G.registerDep(Y, N, Z), !h.el) {
        const q = Y.subTree = j(Ge);
        x(null, q, w, D), h.placeholder = q.el;
      }
    } else
      N(
        Y,
        h,
        w,
        D,
        G,
        B,
        Z
      );
  }, R = (h, w, D) => {
    const z = w.component = h.component;
    if (Eu(h, w, D))
      if (z.asyncDep && !z.asyncResolved) {
        P(z, w, D);
        return;
      } else
        z.next = w, z.update();
    else
      w.el = h.el, z.vnode = w;
  }, N = (h, w, D, z, G, B, Z) => {
    const Y = () => {
      if (h.isMounted) {
        let { next: ee, bu: ie, u: re, parent: ge, vnode: Ae } = h;
        {
          const ft = Aa(h);
          if (ft) {
            ee && (ee.el = Ae.el, P(h, ee, Z)), ft.asyncDep.then(() => {
              ze(() => {
                h.isUnmounted || U();
              }, G);
            });
            return;
          }
        }
        let xe = ee, Re;
        Zt(h, !1), ee ? (ee.el = Ae.el, P(h, ee, Z)) : ee = Ae, ie && yl(ie), (Re = ee.props && ee.props.onVnodeBeforeUpdate) && mt(Re, ge, ee, Ae), Zt(h, !0);
        const Ve = Ro(h), dt = h.subTree;
        h.subTree = Ve, _(
          dt,
          Ve,
          // parent may have changed if it's in a teleport
          d(dt.el),
          // anchor may have changed if it's in a fragment
          J(dt),
          h,
          G,
          B
        ), ee.el = Ve.el, xe === null && Vu(h, Ve.el), re && ze(re, G), (Re = ee.props && ee.props.onVnodeUpdated) && ze(
          () => mt(Re, ge, ee, Ae),
          G
        );
      } else {
        let ee;
        const { el: ie, props: re } = w, { bm: ge, m: Ae, parent: xe, root: Re, type: Ve } = h, dt = xn(w);
        Zt(h, !1), ge && yl(ge), !dt && (ee = re && re.onVnodeBeforeMount) && mt(ee, xe, w), Zt(h, !0);
        {
          Re.ce && Re.ce._hasShadowRoot() && Re.ce._injectChildStyle(
            Ve,
            h.parent ? h.parent.type : void 0
          );
          const ft = h.subTree = Ro(h);
          _(
            null,
            ft,
            D,
            z,
            h,
            G,
            B
          ), w.el = ft.el;
        }
        if (Ae && ze(Ae, G), !dt && (ee = re && re.onVnodeMounted)) {
          const ft = w;
          ze(
            () => mt(ee, xe, ft),
            G
          );
        }
        (w.shapeFlag & 256 || xe && xn(xe.vnode) && xe.vnode.shapeFlag & 256) && h.a && ze(h.a, G), h.isMounted = !0, w = D = z = null;
      }
    };
    h.scope.on();
    const q = h.effect = new Rs(Y);
    h.scope.off();
    const U = h.update = q.run.bind(q), ae = h.job = q.runIfDirty.bind(q);
    ae.i = h, ae.id = h.uid, q.scheduler = () => to(ae), Zt(h, !0), U();
  }, P = (h, w, D) => {
    w.component = h;
    const z = h.vnode.props;
    h.vnode = w, h.next = null, $u(h, w.props, z, D), Gu(h, w.children, D), Rt(), So(h), Nt();
  }, I = (h, w, D, z, G, B, Z, Y, q = !1) => {
    const U = h && h.children, ae = h ? h.shapeFlag : 0, ee = w.children, { patchFlag: ie, shapeFlag: re } = w;
    if (ie > 0) {
      if (ie & 128) {
        me(
          U,
          ee,
          D,
          z,
          G,
          B,
          Z,
          Y,
          q
        );
        return;
      } else if (ie & 256) {
        H(
          U,
          ee,
          D,
          z,
          G,
          B,
          Z,
          Y,
          q
        );
        return;
      }
    }
    re & 8 ? (ae & 16 && Jt(U, G, B), ee !== U && u(D, ee)) : ae & 16 ? re & 16 ? me(
      U,
      ee,
      D,
      z,
      G,
      B,
      Z,
      Y,
      q
    ) : Jt(U, G, B, !0) : (ae & 8 && u(D, ""), re & 16 && W(
      ee,
      D,
      z,
      G,
      B,
      Z,
      Y,
      q
    ));
  }, H = (h, w, D, z, G, B, Z, Y, q) => {
    h = h || yn, w = w || yn;
    const U = h.length, ae = w.length, ee = Math.min(U, ae);
    let ie;
    for (ie = 0; ie < ee; ie++) {
      const re = w[ie] = q ? Mt(w[ie]) : _t(w[ie]);
      _(
        h[ie],
        re,
        D,
        null,
        G,
        B,
        Z,
        Y,
        q
      );
    }
    U > ae ? Jt(
      h,
      G,
      B,
      !0,
      !1,
      ee
    ) : W(
      w,
      D,
      z,
      G,
      B,
      Z,
      Y,
      q,
      ee
    );
  }, me = (h, w, D, z, G, B, Z, Y, q) => {
    let U = 0;
    const ae = w.length;
    let ee = h.length - 1, ie = ae - 1;
    for (; U <= ee && U <= ie; ) {
      const re = h[U], ge = w[U] = q ? Mt(w[U]) : _t(w[U]);
      if (on(re, ge))
        _(
          re,
          ge,
          D,
          null,
          G,
          B,
          Z,
          Y,
          q
        );
      else
        break;
      U++;
    }
    for (; U <= ee && U <= ie; ) {
      const re = h[ee], ge = w[ie] = q ? Mt(w[ie]) : _t(w[ie]);
      if (on(re, ge))
        _(
          re,
          ge,
          D,
          null,
          G,
          B,
          Z,
          Y,
          q
        );
      else
        break;
      ee--, ie--;
    }
    if (U > ee) {
      if (U <= ie) {
        const re = ie + 1, ge = re < ae ? w[re].el : z;
        for (; U <= ie; )
          _(
            null,
            w[U] = q ? Mt(w[U]) : _t(w[U]),
            D,
            ge,
            G,
            B,
            Z,
            Y,
            q
          ), U++;
      }
    } else if (U > ie)
      for (; U <= ee; )
        Pe(h[U], G, B, !0), U++;
    else {
      const re = U, ge = U, Ae = /* @__PURE__ */ new Map();
      for (U = ge; U <= ie; U++) {
        const Ye = w[U] = q ? Mt(w[U]) : _t(w[U]);
        Ye.key != null && Ae.set(Ye.key, U);
      }
      let xe, Re = 0;
      const Ve = ie - ge + 1;
      let dt = !1, ft = 0;
      const Dn = new Array(Ve);
      for (U = 0; U < Ve; U++) Dn[U] = 0;
      for (U = re; U <= ee; U++) {
        const Ye = h[U];
        if (Re >= Ve) {
          Pe(Ye, G, B, !0);
          continue;
        }
        let pt;
        if (Ye.key != null)
          pt = Ae.get(Ye.key);
        else
          for (xe = ge; xe <= ie; xe++)
            if (Dn[xe - ge] === 0 && on(Ye, w[xe])) {
              pt = xe;
              break;
            }
        pt === void 0 ? Pe(Ye, G, B, !0) : (Dn[pt - ge] = U + 1, pt >= ft ? ft = pt : dt = !0, _(
          Ye,
          w[pt],
          D,
          null,
          G,
          B,
          Z,
          Y,
          q
        ), Re++);
      }
      const ho = dt ? Ku(Dn) : yn;
      for (xe = ho.length - 1, U = Ve - 1; U >= 0; U--) {
        const Ye = ge + U, pt = w[Ye], go = w[Ye + 1], _o = Ye + 1 < ae ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          go.el || Ma(go)
        ) : z;
        Dn[U] === 0 ? _(
          null,
          pt,
          D,
          _o,
          G,
          B,
          Z,
          Y,
          q
        ) : dt && (xe < 0 || U !== ho[xe] ? Se(pt, D, _o, 2) : xe--);
      }
    }
  }, Se = (h, w, D, z, G = null) => {
    const { el: B, type: Z, transition: Y, children: q, shapeFlag: U } = h;
    if (U & 6) {
      Se(h.component.subTree, w, D, z);
      return;
    }
    if (U & 128) {
      h.suspense.move(w, D, z);
      return;
    }
    if (U & 64) {
      Z.move(h, w, D, Ie);
      return;
    }
    if (Z === ue) {
      l(B, w, D);
      for (let ee = 0; ee < q.length; ee++)
        Se(q[ee], w, D, z);
      l(h.anchor, w, D);
      return;
    }
    if (Z === bi) {
      M(h, w, D);
      return;
    }
    if (z !== 2 && U & 1 && Y)
      if (z === 0)
        Y.persisted && !B[it] ? l(B, w, D) : (Y.beforeEnter(B), l(B, w, D), ze(() => Y.enter(B), G));
      else {
        const { leave: ee, delayLeave: ie, afterLeave: re } = Y, ge = () => {
          h.ctx.isUnmounted ? i(B) : l(B, w, D);
        }, Ae = () => {
          const xe = B._isLeaving || !!B[it];
          B._isLeaving && B[it](
            !0
            /* cancelled */
          ), Y.persisted && !xe ? ge() : ee(B, () => {
            ge(), re && re();
          });
        };
        ie ? ie(B, ge, Ae) : Ae();
      }
    else
      l(B, w, D);
  }, Pe = (h, w, D, z = !1, G = !1) => {
    const {
      type: B,
      props: Z,
      ref: Y,
      children: q,
      dynamicChildren: U,
      shapeFlag: ae,
      patchFlag: ee,
      dirs: ie,
      cacheIndex: re,
      memo: ge
    } = h;
    if (ee === -2 && (G = !1), Y != null && (Rt(), jn(Y, null, D, h, !0), Nt()), re != null && (w.renderCache[re] = void 0), ae & 256) {
      w.ctx.deactivate(h);
      return;
    }
    const Ae = ae & 1 && ie, xe = !xn(h);
    let Re;
    if (xe && (Re = Z && Z.onVnodeBeforeUnmount) && mt(Re, w, h), ae & 6)
      ui(h.component, D, z);
    else {
      if (ae & 128) {
        h.suspense.unmount(D, z);
        return;
      }
      Ae && Qt(h, null, w, "beforeUnmount"), ae & 64 ? h.type.remove(
        h,
        w,
        D,
        Ie,
        z
      ) : U && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !U.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (B !== ue || ee > 0 && ee & 64) ? Jt(
        U,
        w,
        D,
        !1,
        !0
      ) : (B === ue && ee & 384 || !G && ae & 16) && Jt(q, w, D), z && cl(h);
    }
    const Ve = ge != null && re == null;
    (xe && (Re = Z && Z.onVnodeUnmounted) || Ae || Ve) && ze(() => {
      Re && mt(Re, w, h), Ae && Qt(h, null, w, "unmounted"), Ve && (h.el = null);
    }, D);
  }, cl = (h) => {
    const { type: w, el: D, anchor: z, transition: G } = h;
    if (w === ue) {
      ri(D, z);
      return;
    }
    if (w === bi) {
      b(h);
      return;
    }
    const B = () => {
      i(D), G && !G.persisted && G.afterLeave && G.afterLeave();
    };
    if (h.shapeFlag & 1 && G && !G.persisted) {
      const { leave: Z, delayLeave: Y } = G, q = () => Z(D, B);
      Y ? Y(h.el, B, q) : q();
    } else
      B();
  }, ri = (h, w) => {
    let D;
    for (; h !== w; )
      D = m(h), i(h), h = D;
    i(w);
  }, ui = (h, w, D) => {
    const { bum: z, scope: G, job: B, subTree: Z, um: Y, m: q, a: U } = h;
    Eo(q), Eo(U), z && yl(z), G.stop(), B && (B.flags |= 8, Pe(Z, h, w, D)), Y && ze(Y, w), ze(() => {
      h.isUnmounted = !0;
    }, w);
  }, Jt = (h, w, D, z = !1, G = !1, B = 0) => {
    for (let Z = B; Z < h.length; Z++)
      Pe(h[Z], w, D, z, G);
  }, J = (h) => {
    if (h.shapeFlag & 6)
      return J(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const w = m(h.anchor || h.el), D = w && w[ea];
    return D ? m(D) : w;
  };
  let ne = !1;
  const pe = (h, w, D) => {
    let z;
    h == null ? w._vnode && (Pe(w._vnode, null, null, !0), z = w._vnode.component) : _(
      w._vnode || null,
      h,
      w,
      null,
      null,
      null,
      D
    ), w._vnode = h, ne || (ne = !0, So(z), Ys(), ne = !1);
  }, Ie = {
    p: _,
    um: Pe,
    m: Se,
    r: cl,
    mt: $,
    mc: W,
    pc: I,
    pbc: V,
    n: J,
    o: e
  };
  return {
    render: pe,
    hydrate: void 0,
    createApp: Du(pe)
  };
}
function _i({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Zt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function zu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function so(e, t, n = !1) {
  const l = e.children, i = t.children;
  if (le(l) && le(i))
    for (let o = 0; o < l.length; o++) {
      const s = l[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = Mt(i[o]), a.el = s.el), !n && a.patchFlag !== -2 && so(s, a)), a.type === li && (a.patchFlag === -1 && (a = i[o] = Mt(a)), a.el = s.el), a.type === Ge && !a.el && (a.el = s.el);
    }
}
function Ku(e) {
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
function Aa(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Aa(t);
}
function Eo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ma(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ma(t.subTree) : null;
}
const ka = (e) => e.__isSuspense;
function qu(e, t) {
  t && t.pendingBranch ? le(e) ? t.effects.push(...e) : t.effects.push(e) : Yr(e);
}
const ue = /* @__PURE__ */ Symbol.for("v-fgt"), li = /* @__PURE__ */ Symbol.for("v-txt"), Ge = /* @__PURE__ */ Symbol.for("v-cmt"), bi = /* @__PURE__ */ Symbol.for("v-stc"), Pt = [];
let Je = null;
function C(e = !1) {
  Pt.push(Je = e ? null : []);
}
function ao() {
  Pt.pop(), Je = Pt[Pt.length - 1] || null;
}
let el = 1;
function Nl(e, t = !1) {
  el += e, e < 0 && Je && t && (Je.hasOnce = !0);
}
function Fa(e) {
  return e.dynamicChildren = el > 0 ? Je || yn : null, ao(), el > 0 && Je && Je.push(e), e;
}
function F(e, t, n, l, i, o) {
  return Fa(
    L(
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
function Me(e, t, n, l, i) {
  return Fa(
    j(
      e,
      t,
      n,
      l,
      i,
      !0
    )
  );
}
function tl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function on(e, t) {
  return e.type === t.type && e.key === t.key;
}
const La = ({ key: e }) => e ?? null, wl = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Le(e) || /* @__PURE__ */ fe(e) || ce(e) ? { i: Be, r: e, k: t, f: !!n } : e : null);
function L(e, t = null, n = null, l = 0, i = null, o = e === ue ? 0 : 1, s = !1, a = !1) {
  const r = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && La(t),
    ref: t && wl(t),
    scopeId: Qs,
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
    ctx: Be
  };
  return a ? (El(r, n), o & 128 && e.normalize(r)) : n && (r.shapeFlag |= Le(n) ? 8 : 16), el > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Je && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (r.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  r.patchFlag !== 32 && Je.push(r), r;
}
const j = Xu;
function Xu(e, t = null, n = null, l = 0, i = null, o = !1) {
  if ((!e || e === ua) && (e = Ge), tl(e)) {
    const a = qt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && El(a, n), el > 0 && !o && Je && (a.shapeFlag & 6 ? Je[Je.indexOf(e)] = a : Je.push(a)), a.patchFlag = -2, a;
  }
  if (sc(e) && (e = e.__vccOpts), t) {
    t = Yu(t);
    let { class: a, style: r } = t;
    a && !Le(a) && (t.class = he(a)), we(r) && (/* @__PURE__ */ Zl(r) && !le(r) && (r = Ne({}, r)), t.style = ot(r));
  }
  const s = Le(e) ? 1 : ka(e) ? 128 : ta(e) ? 64 : we(e) ? 4 : ce(e) ? 2 : 0;
  return L(
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
function Yu(e) {
  return e ? /* @__PURE__ */ Zl(e) || va(e) ? Ne({}, e) : e : null;
}
function qt(e, t, n = !1, l = !1) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: r } = e, c = t ? Ju(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && La(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? le(o) ? o.concat(wl(t)) : [o, wl(t)] : wl(t)
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
    ssContent: e.ssContent && qt(e.ssContent),
    ssFallback: e.ssFallback && qt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return r && l && Zn(
    u,
    r.clone(u)
  ), u;
}
function Tl(e = " ", t = 0) {
  return j(li, null, e, t);
}
function te(e = "", t = !1) {
  return t ? (C(), Me(Ge, null, e)) : j(Ge, null, e);
}
function _t(e) {
  return e == null || typeof e == "boolean" ? j(Ge) : le(e) ? j(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : tl(e) ? Mt(e) : j(li, null, String(e));
}
function Mt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : qt(e);
}
function El(e, t) {
  let n = 0;
  const { shapeFlag: l } = e;
  if (t == null)
    t = null;
  else if (le(t))
    n = 16;
  else if (typeof t == "object")
    if (l & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), El(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !va(t) ? t._ctx = Be : i === 3 && Be && (Be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ce(t)) {
    if (l & 65) {
      El(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Be }, n = 32;
  } else
    t = String(t), l & 64 ? (n = 16, t = [Tl(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Ju(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const l = e[n];
    for (const i in l)
      if (i === "class")
        t.class !== l.class && (t.class = he([t.class, l.class]));
      else if (i === "style")
        t.style = ot([t.style, l.style]);
      else if (Gl(i)) {
        const o = t[i], s = l[i];
        s && o !== s && !(le(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Wl(i) && (t[i] = s);
      } else i !== "" && (t[i] = l[i]);
  }
  return t;
}
function mt(e, t, n, l = null) {
  at(e, t, 7, [
    n,
    l
  ]);
}
const Qu = pa();
let Zu = 0;
function ec(e, t, n) {
  const l = e.type, i = (t ? t.appContext : e.appContext) || Qu, o = {
    uid: Zu++,
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
    scope: new Is(
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
    propsOptions: wa(l, i),
    emitsOptions: ha(l, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: be,
    // inheritAttrs
    inheritAttrs: l.inheritAttrs,
    // state
    ctx: be,
    data: be,
    props: be,
    attrs: be,
    slots: be,
    refs: be,
    setupState: be,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Pu.bind(null, o), e.ce && e.ce(o), o;
}
let $e = null;
const ii = () => $e || Be;
let Vl, Ti;
{
  const e = Yl(), t = (n, l) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(l), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  Vl = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => $e = n
  ), Ti = t(
    "__VUE_SSR_SETTERS__",
    (n) => Fn = n
  );
}
const ul = (e) => {
  const t = $e;
  return Vl(e), e.scope.on(), () => {
    e.scope.off(), Vl(t);
  };
}, Vo = () => {
  $e && $e.scope.off(), Vl(null);
};
function Ia(e) {
  return e.vnode.shapeFlag & 4;
}
let Fn = !1;
function tc(e, t = !1, n = !1) {
  t && Ti(t);
  const { props: l, children: i } = e.vnode, o = Ia(e);
  Ou(e, l, o, t), Uu(e, i, n || t);
  const s = o ? nc(e, t) : void 0;
  return t && Ti(!1), s;
}
function nc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Cu);
  const { setup: l } = n;
  if (l) {
    Rt();
    const i = e.setupContext = l.length > 1 ? ic(e) : null, o = ul(e), s = ol(
      l,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = xs(s);
    if (Nt(), o(), (a || e.sp) && !xn(e) && lo(e), a) {
      if (s.then(Vo, Vo), t)
        return s.then((r) => {
          Oo(e, r);
        }).catch((r) => {
          sl(r, e, 0);
        });
      e.asyncDep = s;
    } else
      Oo(e, s);
  } else
    Da(e);
}
function Oo(e, t, n) {
  ce(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : we(t) && (e.setupState = Ks(t)), Da(e);
}
function Da(e, t, n) {
  const l = e.type;
  e.render || (e.render = l.render || vt);
  {
    const i = ul(e);
    Rt();
    try {
      Au(e);
    } finally {
      Nt(), i();
    }
  }
}
const lc = {
  get(e, t) {
    return Ue(e, "get", ""), e[t];
  }
};
function ic(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, lc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function oi(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ks(eo(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in zn)
        return zn[n](e);
    },
    has(t, n) {
      return n in t || n in zn;
    }
  })) : e.proxy;
}
function oc(e, t = !0) {
  return ce(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function sc(e) {
  return ce(e) && "__vccOpts" in e;
}
const Q = (e, t) => /* @__PURE__ */ jr(e, t, Fn);
function Pa(e, t, n) {
  try {
    Nl(-1);
    const l = arguments.length;
    return l === 2 ? we(t) && !le(t) ? tl(t) ? j(e, null, [t]) : j(e, t) : j(e, null, t) : (l > 3 ? n = Array.prototype.slice.call(arguments, 2) : l === 3 && tl(n) && (n = [n]), j(e, t, n));
  } finally {
    Nl(1);
  }
}
const ac = "3.5.40";
/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ei;
const $o = typeof window < "u" && window.trustedTypes;
if ($o)
  try {
    Ei = /* @__PURE__ */ $o.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ra = Ei ? (e) => Ei.createHTML(e) : (e) => e, rc = "http://www.w3.org/2000/svg", uc = "http://www.w3.org/1998/Math/MathML", Ct = typeof document < "u" ? document : null, Bo = Ct && /* @__PURE__ */ Ct.createElement("template"), cc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, l) => {
    const i = t === "svg" ? Ct.createElementNS(rc, e) : t === "mathml" ? Ct.createElementNS(uc, e) : n ? Ct.createElement(e, { is: n }) : Ct.createElement(e);
    return e === "select" && l && l.multiple != null && i.setAttribute("multiple", l.multiple), i;
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
  insertStaticContent(e, t, n, l, i, o) {
    const s = n ? n.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Bo.innerHTML = Ra(
        l === "svg" ? `<svg>${e}</svg>` : l === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Bo.content;
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
}, Gt = "transition", Nn = "animation", nl = /* @__PURE__ */ Symbol("_vtc"), Na = {
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
}, dc = /* @__PURE__ */ Ne(
  {},
  la,
  Na
), fc = (e) => (e.displayName = "Transition", e.props = dc, e), pc = /* @__PURE__ */ fc(
  (e, { slots: t }) => Pa(ru, mc(e), t)
), en = (e, t = []) => {
  le(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ho = (e) => e ? le(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function mc(e) {
  const t = {};
  for (const A in e)
    A in Na || (t[A] = e[A]);
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
    leaveToClass: g = `${n}-leave-to`
  } = e, p = hc(i), _ = p && p[0], k = p && p[1], {
    onBeforeEnter: x,
    onEnter: S,
    onEnterCancelled: M,
    onLeave: b,
    onLeaveCancelled: v,
    onBeforeAppear: y = x,
    onAppear: T = S,
    onAppearCancelled: W = M
  } = t, E = (A, O, $, R) => {
    A._enterCancelled = R, tn(A, O ? u : a), tn(A, O ? c : s), $ && $();
  }, V = (A, O) => {
    A._isLeaving = !1, tn(A, d), tn(A, g), tn(A, m), O && O();
  }, K = (A) => (O, $) => {
    const R = A ? T : S, N = () => E(O, A, $);
    en(R, [O, N]), Uo(() => {
      tn(O, A ? r : o), xt(O, A ? u : a), Ho(R) || Go(O, l, _, N);
    });
  };
  return Ne(t, {
    onBeforeEnter(A) {
      en(x, [A]), xt(A, o), xt(A, s);
    },
    onBeforeAppear(A) {
      en(y, [A]), xt(A, r), xt(A, c);
    },
    onEnter: K(!1),
    onAppear: K(!0),
    onLeave(A, O) {
      A._isLeaving = !0;
      const $ = () => V(A, O);
      xt(A, d), A._enterCancelled ? (xt(A, m), zo(A)) : (zo(A), xt(A, m)), Uo(() => {
        A._isLeaving && (tn(A, d), xt(A, g), Ho(b) || Go(A, l, k, $));
      }), en(b, [A, $]);
    },
    onEnterCancelled(A) {
      E(A, !1, void 0, !0), en(M, [A]);
    },
    onAppearCancelled(A) {
      E(A, !0, void 0, !0), en(W, [A]);
    },
    onLeaveCancelled(A) {
      V(A), en(v, [A]);
    }
  });
}
function hc(e) {
  if (e == null)
    return null;
  if (we(e))
    return [vi(e.enter), vi(e.leave)];
  {
    const t = vi(e);
    return [t, t];
  }
}
function vi(e) {
  return ar(e);
}
function xt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[nl] || (e[nl] = /* @__PURE__ */ new Set())).add(t);
}
function tn(e, t) {
  t.split(/\s+/).forEach((l) => l && e.classList.remove(l));
  const n = e[nl];
  n && (n.delete(t), n.size || (e[nl] = void 0));
}
function Uo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let gc = 0;
function Go(e, t, n, l) {
  const i = e._endId = ++gc, o = () => {
    i === e._endId && l();
  };
  if (n != null)
    return setTimeout(o, n);
  const { type: s, timeout: a, propCount: r } = _c(e, t);
  if (!s)
    return l();
  const c = s + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(c, m), o();
  }, m = (g) => {
    g.target === e && ++u >= r && d();
  };
  setTimeout(() => {
    u < r && d();
  }, a + 1), e.addEventListener(c, m);
}
function _c(e, t) {
  const n = window.getComputedStyle(e), l = (p) => (n[p] || "").split(", "), i = l(`${Gt}Delay`), o = l(`${Gt}Duration`), s = Wo(i, o), a = l(`${Nn}Delay`), r = l(`${Nn}Duration`), c = Wo(a, r);
  let u = null, d = 0, m = 0;
  t === Gt ? s > 0 && (u = Gt, d = s, m = o.length) : t === Nn ? c > 0 && (u = Nn, d = c, m = r.length) : (d = Math.max(s, c), u = d > 0 ? s > c ? Gt : Nn : null, m = u ? u === Gt ? o.length : r.length : 0);
  const g = u === Gt && /\b(?:transform|all)(?:,|$)/.test(
    l(`${Gt}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: m,
    hasTransform: g
  };
}
function Wo(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, l) => jo(n) + jo(e[l])));
}
function jo(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function zo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function bc(e, t, n) {
  const l = e[nl];
  l && (t = (t ? [t, ...l] : [...l]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ol = /* @__PURE__ */ Symbol("_vod"), Ta = /* @__PURE__ */ Symbol("_vsh"), vc = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ol] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Tn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: l }) {
    !t != !n && (l ? t ? (l.beforeEnter(e), Tn(e, !0), l.enter(e)) : l.leave(e, () => {
      Tn(e, !1);
    }) : Tn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Tn(e, t);
  }
};
function Tn(e, t) {
  e.style.display = t ? e[Ol] : "none", e[Ta] = !t;
}
const yc = /* @__PURE__ */ Symbol(""), wc = /(?:^|;)\s*display\s*:/;
function Sc(e, t, n) {
  const l = e.style, i = Le(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (Le(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          n[a] == null && $n(l, a, "");
        }
      else
        for (const s in t)
          n[s] == null && $n(l, s, "");
    for (const s in n) {
      s === "display" && (o = !0);
      const a = n[s];
      a != null ? Cc(
        e,
        s,
        !Le(t) && t ? t[s] : void 0,
        a
      ) || $n(l, s, a) : $n(l, s, "");
    }
  } else if (i) {
    if (t !== n) {
      const s = l[yc];
      s && (n += ";" + s), l.cssText = n, o = wc.test(n);
    }
  } else t && e.removeAttribute("style");
  Ol in e && (e[Ol] = o ? l.display : "", e[Ta] && (l.display = "none"));
}
const Ko = /\s*!important$/;
function $n(e, t, n) {
  if (le(n))
    n.forEach((l) => $n(e, t, l));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const l = xc(e, t);
    Ko.test(n) ? e.setProperty(
      Ot(l),
      n.replace(Ko, ""),
      "important"
    ) : e[l] = n;
  }
}
const qo = ["Webkit", "Moz", "ms"], yi = {};
function xc(e, t) {
  const n = yi[t];
  if (n)
    return n;
  let l = We(t);
  if (l !== "filter" && l in e)
    return yi[t] = l;
  l = ql(l);
  for (let i = 0; i < qo.length; i++) {
    const o = qo[i] + l;
    if (o in e)
      return yi[t] = o;
  }
  return t;
}
function Cc(e, t, n, l) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Le(l) && n === l;
}
const Xo = "http://www.w3.org/1999/xlink";
function Yo(e, t, n, l, i, o = pr(t)) {
  l && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Xo, t.slice(6, t.length)) : e.setAttributeNS(Xo, t, n) : n == null || o && !ks(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Ze(n) ? String(n) : n
  );
}
function Jo(e, t, n, l, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ra(n) : n);
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
    a === "boolean" ? n = ks(n) : n == null && a === "string" ? (n = "", s = !0) : a === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function sn(e, t, n, l) {
  e.addEventListener(t, n, l);
}
function Ac(e, t, n, l) {
  e.removeEventListener(t, n, l);
}
const Qo = /* @__PURE__ */ Symbol("_vei");
function Mc(e, t, n, l, i = null) {
  const o = e[Qo] || (e[Qo] = {}), s = o[t];
  if (l && s)
    s.value = l;
  else {
    const [a, r] = Lc(t);
    if (l) {
      const c = o[t] = Pc(
        l,
        i
      );
      sn(e, a, c, r);
    } else s && (Ac(e, a, s, r), o[t] = void 0);
  }
}
const kc = /(Once|Passive|Capture)$/, Fc = /^on:?(?:Once|Passive|Capture)$/;
function Lc(e) {
  let t, n;
  for (; (n = e.match(kc)) && !Fc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Ot(e.slice(2)), t];
}
let wi = 0;
const Ic = /* @__PURE__ */ Promise.resolve(), Dc = () => wi || (Ic.then(() => wi = 0), wi = Date.now());
function Pc(e, t) {
  const n = (l) => {
    if (!l._vts)
      l._vts = Date.now();
    else if (l._vts <= n.attached)
      return;
    const i = n.value;
    if (le(i)) {
      const o = l.stopImmediatePropagation;
      l.stopImmediatePropagation = () => {
        o.call(l), l._stopped = !0;
      };
      const s = i.slice(), a = [l];
      for (let r = 0; r < s.length && !l._stopped; r++) {
        const c = s[r];
        c && at(
          c,
          t,
          5,
          a
        );
      }
    } else
      at(
        i,
        t,
        5,
        [l]
      );
  };
  return n.value = e, n.attached = Dc(), n;
}
const Zo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Rc = (e, t, n, l, i, o) => {
  const s = i === "svg";
  t === "class" ? bc(e, l, s) : t === "style" ? Sc(e, n, l) : Gl(t) ? Wl(t) || Mc(e, t, n, l, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Nc(e, t, l, s)) ? (Jo(e, t, l), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Yo(e, t, l, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Tc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Le(l))) ? Jo(e, We(t), l, o, t) : (t === "true-value" ? e._trueValue = l : t === "false-value" && (e._falseValue = l), Yo(e, t, l, s));
};
function Nc(e, t, n, l) {
  if (l)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Zo(t) && ce(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Zo(t) && Le(n) ? !1 : t in e;
}
function Tc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const l = We(t);
  return Array.isArray(n) ? n.some((i) => We(i) === l) : Object.keys(n).some((i) => We(i) === l);
}
const $l = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return le(t) ? (n) => yl(t, n) : t;
};
function Ec(e) {
  e.target.composing = !0;
}
function es(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Cn = /* @__PURE__ */ Symbol("_assign");
function ts(e, t, n) {
  return t && (e = e.trim()), n && (e = Xl(e)), e;
}
const yt = {
  created(e, { modifiers: { lazy: t, trim: n, number: l } }, i) {
    e[Cn] = $l(i);
    const o = l || i.props && i.props.type === "number";
    sn(e, t ? "change" : "input", (s) => {
      s.target.composing || e[Cn](ts(e.value, n, o));
    }), (n || o) && sn(e, "change", () => {
      e.value = ts(e.value, n, o);
    }), t || (sn(e, "compositionstart", Ec), sn(e, "compositionend", es), sn(e, "change", es));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: l, trim: i, number: o } }, s) {
    if (e[Cn] = $l(s), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? Xl(e.value) : e.value, r = t ?? "";
    if (a === r)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (l && t === n || i && e.value.trim() === r) || (e.value = r);
  }
}, Vc = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, l) {
    e._modelValue = t, sn(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? Xl(Bl(o)) : Bl(o)
      );
      e[Cn](
        e.multiple ? jl(e._modelValue) ? new Set(i) : i : i[0]
      ), e._assigning = !0, Ln(() => {
        e._assigning = !1;
      });
    }), e[Cn] = $l(l);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ns(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Cn] = $l(n);
  },
  updated(e, { value: t }) {
    e._assigning || ns(e, t);
  }
};
function ns(e, t) {
  const n = e.multiple, l = le(t);
  if (!(n && !l && !jl(t))) {
    for (let i = 0, o = e.options.length; i < o; i++) {
      const s = e.options[i], a = Bl(s);
      if (n)
        if (l) {
          const r = typeof a;
          r === "string" || r === "number" ? s.selected = t.some((c) => String(c) === String(a)) : s.selected = hr(t, a) > -1;
        } else
          s.selected = t.has(a);
      else if (il(Bl(s), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Bl(e) {
  return "_value" in e ? e._value : e.value;
}
const Oc = ["ctrl", "shift", "alt", "meta"], $c = {
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
  exact: (e, t) => Oc.some((n) => e[`${n}Key`] && !t.includes(n))
}, Vi = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), l = t.join(".");
  return n[l] || (n[l] = (i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const a = $c[t[s]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  });
}, Bc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Sl = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), l = t.join(".");
  return n[l] || (n[l] = (i) => {
    if (!("key" in i))
      return;
    const o = Ot(i.key);
    if (t.some(
      (s) => s === o || Bc[s] === o
    ))
      return e(i);
  });
}, Hc = /* @__PURE__ */ Ne({ patchProp: Rc }, cc);
let ls;
function Ea() {
  return ls || (ls = Wu(Hc));
}
const is = (...e) => {
  Ea().render(...e);
}, ro = (...e) => {
  const t = Ea().createApp(...e), { mount: n } = t;
  return t.mount = (l) => {
    const i = Gc(l);
    if (!i) return;
    const o = t._component;
    !ce(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = n(i, !1, Uc(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
};
function Uc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Gc(e) {
  return Le(e) ? document.querySelector(e) : e;
}
const si = {
  accent: "#f08a45",
  accentInk: "#fff",
  panel: "#171b22",
  panelAlt: "#222934",
  text: "#e8edf3",
  muted: "#9ca8b5",
  danger: "#ef6666",
  ok: "#62c987"
}, Wc = {
  accent: "#c9682c",
  accentInk: "#fff",
  panel: "#eef1f5",
  panelAlt: "#e2e6ec",
  text: "#1c2430",
  muted: "#5b6572",
  danger: "#c94b4b",
  ok: "#3f8f5f"
}, jc = {
  accent: "#00e5ff",
  accentInk: "#fff",
  panel: "#0a0e1a",
  panelAlt: "#131a2e",
  text: "#dff9ff",
  muted: "#5f7d94",
  danger: "#ff2e63",
  ok: "#00ff9f"
}, zc = {
  accent: "#d4a017",
  accentInk: "#fff",
  panel: "#1a1712",
  panelAlt: "#26221a",
  text: "#e8dcc0",
  muted: "#8a7d5f",
  danger: "#9a3324",
  ok: "#8fbf3f"
}, Kc = {
  accent: "#14b13b",
  accentInk: "#0c190c",
  panel: "#0a110a",
  panelAlt: "#121e12",
  text: "#4af626",
  muted: "#2e7d32",
  danger: "#d32f2f",
  ok: "#14b13b"
}, qc = {
  accent: "#d5ff40",
  accentInk: "#14150f",
  panel: "#181916",
  panelAlt: "#232620",
  text: "#edf2e2",
  muted: "#8b9483",
  danger: "#ff5c72",
  ok: "#3ed98c"
}, Xc = {
  default: si,
  cyberpunk: jc,
  fallout: zc,
  travelmate: qc,
  pipboy: Kc
}, kt = { ...si };
let Kn = null, qn = null;
function Oi(e) {
  return `--fil-accent:${e.accent};--fil-accent-ink:${e.accentInk};--fil-panel:${e.panel};--fil-panel-alt:${e.panelAlt};--fil-text:${e.text};--fil-muted:${e.muted};--fil-danger:${e.danger};--fil-ok:${e.ok};`;
}
const Yc = {
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
}, Jc = "--fil-surface-bg:rgba(100,180,220,0.06);--fil-surface-border:rgba(0,255,255,0.18);--fil-surface-radius:20px;--fil-surface-blur:10px;--fil-surface-shadow:0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08);--fil-glass-bg:rgba(50,80,120,0.18);--fil-glass-border:rgba(0,150,200,0.35);--fil-field-radius:10px;--fil-pill-radius:17px;--fil-pill-bg:rgba(255,255,255,0.06);--fil-pill-border:rgba(0,150,200,0.4);", Qc = "--fil-surface-bg:rgba(70,130,170,0.08);--fil-surface-border:rgba(40,120,160,0.28);--fil-surface-radius:20px;--fil-surface-blur:10px;--fil-surface-shadow:0 8px 24px rgba(40,60,90,0.18), inset 0 1px 0 rgba(255,255,255,0.5);--fil-glass-bg:rgba(120,160,200,0.16);--fil-glass-border:rgba(40,120,160,0.3);--fil-field-radius:10px;--fil-pill-radius:17px;--fil-pill-bg:rgba(30,60,90,0.06);--fil-pill-border:rgba(40,120,160,0.35);";
function Zc() {
  if (typeof document > "u" || document.getElementById("fil-brand-vars")) return;
  const e = document.createElement("style");
  e.id = "fil-brand-vars", e.textContent = `:root{${Oi(si)}--fil-radius:8px;--fil-node-pad:6px 8px 14px 8px;--fil-node-gap:4px;--fil-row-pad:4px 6px;--fil-input-border:rgba(240,138,69,0.35);${Jc}}
.comfy-theme-light{${Oi(Wc)}--fil-input-border:rgba(201,104,44,0.35);${Qc}}
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
}`, document.head.appendChild(e), Kn = document.createElement("style"), Kn.id = "fil-theme-vars", document.head.appendChild(Kn), qn = document.createElement("style"), qn.id = "fil-theme-effects", document.head.appendChild(qn);
}
function Va(e) {
  const t = Xc[e] ?? si;
  Object.assign(kt, t), !(typeof document > "u") && (document.documentElement.dataset.filTheme = e, Kn && (Kn.textContent = e === "default" ? "" : `:root{${Oi(t)}}`), qn && (qn.textContent = Yc[e] ?? ""));
}
const ed = {
  class: "fil-color-picker",
  role: "group",
  "aria-label": "Color picker"
}, td = { class: "fil-cp-hex-row" }, nd = {
  class: "fil-cp-presets",
  role: "listbox",
  "aria-label": "Preset colors"
}, ld = ["aria-selected", "aria-label", "title", "onClick"], id = /* @__PURE__ */ Ce({
  __name: "FilColorPicker",
  props: /* @__PURE__ */ Xe({
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
    ], n = e, l = rt(e, "modelValue"), i = Q(() => n.presets ?? t);
    function o(A) {
      l.value = A;
    }
    function s(A) {
      return Math.min(1, Math.max(0, A));
    }
    function a(A) {
      const O = /^#?([0-9a-f]{6})$/i.exec(A.trim());
      if (!O) return null;
      const $ = parseInt(O[1], 16);
      return [$ >> 16 & 255, $ >> 8 & 255, $ & 255];
    }
    function r(A, O, $) {
      const R = (N) => Math.round(s(N / 255) * 255).toString(16).padStart(2, "0");
      return `#${R(A)}${R(O)}${R($)}`;
    }
    function c(A, O, $) {
      const R = A / 255, N = O / 255, P = $ / 255, I = Math.max(R, N, P), H = Math.min(R, N, P), me = I - H;
      let Se = 0;
      me !== 0 && (I === R ? Se = (N - P) / me % 6 : I === N ? Se = (P - R) / me + 2 : Se = (R - N) / me + 4, Se *= 60, Se < 0 && (Se += 360));
      const Pe = I === 0 ? 0 : me / I;
      return [Se, Pe, I];
    }
    function u(A, O, $) {
      const R = $ * O, N = R * (1 - Math.abs(A / 60 % 2 - 1)), P = $ - R;
      let [I, H, me] = [0, 0, 0];
      return A < 60 ? [I, H, me] = [R, N, 0] : A < 120 ? [I, H, me] = [N, R, 0] : A < 180 ? [I, H, me] = [0, R, N] : A < 240 ? [I, H, me] = [0, N, R] : A < 300 ? [I, H, me] = [N, 0, R] : [I, H, me] = [R, 0, N], [(I + P) * 255, (H + P) * 255, (me + P) * 255];
    }
    const d = /* @__PURE__ */ se(0), m = /* @__PURE__ */ se(0), g = /* @__PURE__ */ se(0), p = /* @__PURE__ */ se(l.value);
    function _(A) {
      const O = a(A);
      if (!O) return;
      const [$, R, N] = c(...O);
      d.value = $, m.value = R, g.value = N, p.value = r(...O);
    }
    He(l, (A) => _(A), { immediate: !0 });
    const k = Q(() => r(...u(d.value, m.value, g.value)));
    function x() {
      l.value = k.value, p.value = k.value;
    }
    function S() {
      const A = a(p.value);
      if (!A) {
        p.value = k.value;
        return;
      }
      const [O, $, R] = c(...A);
      d.value = O, m.value = $, g.value = R, l.value = r(...A);
    }
    const M = /* @__PURE__ */ se(null), b = /* @__PURE__ */ se(null);
    function v(A) {
      const O = M.value;
      if (!O) return;
      const $ = O.getBoundingClientRect();
      m.value = s((A.clientX - $.left) / $.width), g.value = s(1 - (A.clientY - $.top) / $.height), x();
    }
    function y(A) {
      const O = b.value;
      if (!O) return;
      const $ = O.getBoundingClientRect();
      d.value = s((A.clientX - $.left) / $.width) * 360, x();
    }
    function T(A) {
      A.preventDefault(), v(A);
      const O = (R) => v(R), $ = () => {
        window.removeEventListener("pointermove", O), window.removeEventListener("pointerup", $);
      };
      window.addEventListener("pointermove", O), window.addEventListener("pointerup", $);
    }
    function W(A) {
      A.preventDefault(), y(A);
      const O = (R) => y(R), $ = () => {
        window.removeEventListener("pointermove", O), window.removeEventListener("pointerup", $);
      };
      window.addEventListener("pointermove", O), window.addEventListener("pointerup", $);
    }
    const E = Q(() => `hsl(${d.value}, 100%, 50%)`), V = Q(() => ({
      left: `${m.value * 100}%`,
      top: `${(1 - g.value) * 100}%`
    })), K = Q(() => ({ left: `${d.value / 360 * 100}%` }));
    return (A, O) => (C(), F("div", ed, [
      L("div", {
        ref_key: "svRef",
        ref: M,
        class: "fil-cp-sv",
        style: ot({ background: E.value }),
        onPointerdown: T
      }, [
        O[1] || (O[1] = L("div", { class: "fil-cp-sv-white" }, null, -1)),
        O[2] || (O[2] = L("div", { class: "fil-cp-sv-black" }, null, -1)),
        L("div", {
          class: "fil-cp-sv-thumb",
          style: ot(V.value)
        }, null, 4)
      ], 36),
      L("div", {
        ref_key: "hueRef",
        ref: b,
        class: "fil-cp-hue",
        onPointerdown: W
      }, [
        L("div", {
          class: "fil-cp-hue-thumb",
          style: ot(K.value)
        }, null, 4)
      ], 544),
      L("div", td, [
        L("span", {
          class: "fil-cp-swatch",
          style: ot({ background: k.value })
        }, null, 4),
        st(L("input", {
          "onUpdate:modelValue": O[0] || (O[0] = ($) => p.value = $),
          class: "fil-cp-hex-input",
          type: "text",
          spellcheck: "false",
          "aria-label": "Hex color",
          onKeydown: Sl(S, ["enter"]),
          onBlur: S
        }, null, 544), [
          [yt, p.value]
        ])
      ]),
      L("div", nd, [
        (C(!0), F(ue, null, De(i.value, ($) => (C(), F("button", {
          key: $,
          class: he(["fil-color-swatch", { "is-active": l.value === $ }]),
          style: ot({ "--swatch": $ }),
          "aria-selected": l.value === $,
          "aria-label": $,
          title: $,
          onClick: (R) => o($)
        }, null, 14, ld))), 128))
      ])
    ]));
  }
}), ke = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, i] of t)
    n[l] = i;
  return n;
}, od = /* @__PURE__ */ ke(id, [["__scopeId", "data-v-969386c1"]]), os = "__fil_color_picker_popup__";
let pn = null;
function sd(e) {
  return [
    {
      content: "Change color…",
      callback: (t, n, l) => ad(e, l)
    }
  ];
}
function ad(e, t) {
  var m;
  pn == null || pn(), (m = document.getElementById(os)) == null || m.remove();
  const n = document.createElement("div");
  n.id = os;
  const l = 176, i = 260, o = t ? Math.min(t.clientX, window.innerWidth - l - 8) : window.innerWidth / 2 - l / 2, s = t ? Math.min(t.clientY, window.innerHeight - i - 8) : window.innerHeight / 2 - i / 2;
  n.style.cssText = `position:fixed;z-index:10001;top:${Math.max(8, s)}px;left:${Math.max(8, o)}px;`, document.body.appendChild(n);
  function a(g) {
    e.color = g, e.__fx && (e.__fx.color = g), e.properties = e.properties || {}, e.properties.fil_custom_color = !0, r();
  }
  function r() {
    is(null, n), n.remove(), document.removeEventListener("mousedown", c, !0), document.removeEventListener("keydown", u, !0), pn === r && (pn = null);
  }
  function c(g) {
    n.contains(g.target) || r();
  }
  function u(g) {
    g.key === "Escape" && r();
  }
  const d = Pa(od, {
    modelValue: e.color ?? "#78716c",
    "onUpdate:modelValue": (g) => a(g)
  });
  is(d, n), document.addEventListener("mousedown", c, !0), document.addEventListener("keydown", u, !0), pn = r, Ln(() => {
    var g;
    (g = n.querySelector(".fil-color-swatch")) == null || g.focus();
  });
}
const rd = "fil";
function et(e, t = {}) {
  const l = e.prototype;
  if (l._filStyled) return;
  l._filStyled = !0, t.minSize && (l.minSize = t.minSize), l._filFamily = t.family ?? rd, l._filDescription = t.description ?? "", t.badges && (l.badges = t.badges), l.color = kt.accent, l.bgcolor = kt.panelAlt;
  const i = l.onNodeCreated;
  l.onNodeCreated = function(...s) {
    const a = i == null ? void 0 : i.apply(this, s);
    return this.color = kt.accent, this.bgcolor = kt.panelAlt, a;
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
    s.fillStyle = kt.panel, s.beginPath(), s.roundRect(0, -a, r[0], a, m ? [d] : [d, d, 0, 0]), s.fill();
    const g = 3;
    s.fillStyle = u || kt.accent, s.beginPath(), s.roundRect(0, -a, g, a, m ? [d, 0, 0, d] : [d, 0, 0, 0]), s.fill();
  };
  const o = l.getExtraMenuOptions;
  l.getExtraMenuOptions = function(...s) {
    const a = o == null ? void 0 : o.apply(this, s), r = s[1];
    return Array.isArray(r) && r.push(null, ...sd(this)), a;
  };
}
function ud(e) {
  var l, i, o;
  const t = (l = e.graph) == null ? void 0 : l._nodes;
  if (!t) return;
  for (const s of t)
    s._filFamily && ((i = s.properties) != null && i.fil_custom_color || (s.color = kt.accent, s.bgcolor = kt.panelAlt));
  const n = e.canvas;
  (o = n == null ? void 0 : n.setDirty) == null || o.call(n, !0, !0);
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Oa;
const ai = (e) => Oa = e, $a = (
  /* istanbul ignore next */
  Symbol()
);
function $i(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Xn;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Xn || (Xn = {}));
function Ba() {
  const e = Ds(!0), t = e.run(() => /* @__PURE__ */ se({}));
  let n = [], l = [];
  const i = eo({
    install(o) {
      ai(i), i._a = o, o.provide($a, i), o.config.globalProperties.$pinia = i, l.forEach((s) => n.push(s)), l = [];
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
const Ha = () => {
};
function ss(e, t, n, l = Ha) {
  e.push(t);
  const i = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), l());
  };
  return !n && Ps() && gr(i), i;
}
function mn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const cd = (e) => e(), as = Symbol(), Si = Symbol();
function Bi(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, l) => e.set(l, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const l = t[n], i = e[n];
    $i(i) && $i(l) && e.hasOwnProperty(n) && !/* @__PURE__ */ fe(l) && !/* @__PURE__ */ Dt(l) ? e[n] = Bi(i, l) : e[n] = l;
  }
  return e;
}
const dd = (
  /* istanbul ignore next */
  Symbol()
);
function fd(e) {
  return !$i(e) || !e.hasOwnProperty(dd);
}
const { assign: jt } = Object;
function pd(e) {
  return !!(/* @__PURE__ */ fe(e) && e.effect);
}
function md(e, t, n, l) {
  const { state: i, actions: o, getters: s } = t, a = n.state.value[e];
  let r;
  function c() {
    a || (n.state.value[e] = i ? i() : {});
    const u = /* @__PURE__ */ Hr(n.state.value[e]);
    return jt(u, o, Object.keys(s || {}).reduce((d, m) => (d[m] = eo(Q(() => {
      ai(n);
      const g = n._s.get(e);
      return s[m].call(g, g);
    })), d), {}));
  }
  return r = Ua(e, c, t, n, l, !0), r;
}
function Ua(e, t, n = {}, l, i, o) {
  let s;
  const a = jt({ actions: {} }, n), r = { deep: !0 };
  let c, u, d = [], m = [], g;
  const p = l.state.value[e];
  !o && !p && (l.state.value[e] = {});
  let _;
  function k(W) {
    let E;
    c = u = !1, typeof W == "function" ? (W(l.state.value[e]), E = {
      type: Xn.patchFunction,
      storeId: e,
      events: g
    }) : (Bi(l.state.value[e], W), E = {
      type: Xn.patchObject,
      payload: W,
      storeId: e,
      events: g
    });
    const V = _ = Symbol();
    Ln().then(() => {
      _ === V && (c = !0);
    }), u = !0, mn(d, E, l.state.value[e]);
  }
  const x = o ? function() {
    const { state: E } = n, V = E ? E() : {};
    this.$patch((K) => {
      jt(K, V);
    });
  } : (
    /* istanbul ignore next */
    Ha
  );
  function S() {
    s.stop(), d = [], m = [], l._s.delete(e);
  }
  const M = (W, E = "") => {
    if (as in W)
      return W[Si] = E, W;
    const V = function() {
      ai(l);
      const K = Array.from(arguments), A = [], O = [];
      function $(P) {
        A.push(P);
      }
      function R(P) {
        O.push(P);
      }
      mn(m, {
        args: K,
        name: V[Si],
        store: v,
        after: $,
        onError: R
      });
      let N;
      try {
        N = W.apply(this && this.$id === e ? this : v, K);
      } catch (P) {
        throw mn(O, P), P;
      }
      return N instanceof Promise ? N.then((P) => (mn(A, P), P)).catch((P) => (mn(O, P), Promise.reject(P))) : (mn(A, N), N);
    };
    return V[as] = !0, V[Si] = E, V;
  }, b = {
    _p: l,
    // _s: scope,
    $id: e,
    $onAction: ss.bind(null, m),
    $patch: k,
    $reset: x,
    $subscribe(W, E = {}) {
      const V = ss(d, W, E.detached, () => K()), K = s.run(() => He(() => l.state.value[e], (A) => {
        (E.flush === "sync" ? u : c) && W({
          storeId: e,
          type: Xn.direct,
          events: g
        }, A);
      }, jt({}, r, E)));
      return V;
    },
    $dispose: S
  }, v = /* @__PURE__ */ Xt(b);
  l._s.set(e, v);
  const T = (l._a && l._a.runWithContext || cd)(() => l._e.run(() => (s = Ds()).run(() => t({ action: M }))));
  for (const W in T) {
    const E = T[W];
    if (/* @__PURE__ */ fe(E) && !pd(E) || /* @__PURE__ */ Dt(E))
      o || (p && fd(E) && (/* @__PURE__ */ fe(E) ? E.value = p[W] : Bi(E, p[W])), l.state.value[e][W] = E);
    else if (typeof E == "function") {
      const V = M(E, W);
      T[W] = V, a.actions[W] = E;
    }
  }
  return jt(v, T), jt(/* @__PURE__ */ _e(v), T), Object.defineProperty(v, "$state", {
    get: () => l.state.value[e],
    set: (W) => {
      k((E) => {
        jt(E, W);
      });
    }
  }), l._p.forEach((W) => {
    jt(v, s.run(() => W({
      store: v,
      app: l._a,
      pinia: l,
      options: a
    })));
  }), p && o && n.hydrate && n.hydrate(v.$state, p), c = !0, u = !0, v;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function uo(e, t, n) {
  let l, i;
  const o = typeof t == "function";
  typeof e == "string" ? (l = e, i = o ? n : t) : (i = e, l = e.id);
  function s(a, r) {
    const c = Qr();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (c ? Wn($a, null) : null), a && ai(a), a = Oa, a._s.has(l) || (o ? Ua(l, t, i, a) : md(l, i, a)), a._s.get(l);
  }
  return s.$id = l, s;
}
let an = null;
function hd(e) {
  return an || (an = Ba(), an);
}
function co() {
  return an || (an = Ba()), an;
}
const gd = { class: "fil-node-shell" }, _d = /* @__PURE__ */ Ce({
  __name: "FilNodeShell",
  props: {
    root: {},
    state: {},
    comfyClass: {}
  },
  setup(e) {
    return (t, n) => (C(), F("div", gd, [
      (C(), Me(wu(e.root), { state: e.state }, null, 8, ["state"]))
    ]));
  }
}), bd = /* @__PURE__ */ ke(_d, [["__scopeId", "data-v-cb614e72"]]);
function Hi(e, t, n) {
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
function Ga(e, t, n, l = null) {
  let i = e instanceof Element ? e : null;
  for (; i && i !== l; ) {
    if (Hi(i, t, n)) return !0;
    i = i.parentElement;
  }
  return !1;
}
function vd(e, t, n, l) {
  const i = (o) => {
    const s = o.getBoundingClientRect();
    return s.width > 0 && s.height > 0 && e >= s.left && e <= s.right && t >= s.top && t <= s.bottom;
  };
  for (const o of document.querySelectorAll(".dom-widget"))
    if (i(o)) {
      if (Hi(o, n, l)) return o;
      for (const s of o.querySelectorAll("*"))
        if (i(s) && Hi(s, n, l)) return s;
    }
  return null;
}
function yd(e, t) {
  for (let n = e; n; n = Object.getPrototypeOf(n)) {
    const l = Object.getOwnPropertyDescriptor(n, t);
    if (l) return !!(l.writable || l.set);
  }
  return !0;
}
const wd = "__filVueMounted";
function Ht(e, t, n, l) {
  const i = e;
  if (typeof i.addDOMWidget != "function")
    return console.warn(`[FiL_Design_ImageMind] domWidgetHost: node.addDOMWidget not available for "${t}" — ComfyUI core too old?`), null;
  const o = document.createElement("div");
  o.className = "fil-vue-host", o.style.width = "100%", o.style.boxSizing = "border-box", o.style.height = "auto", o[wd] = !0, o.addEventListener(
    "wheel",
    (V) => {
      var A, O;
      if (Ga(V.target, V.deltaX, V.deltaY, o.parentElement)) return;
      const K = (O = (A = globalThis.app) == null ? void 0 : A.canvas) == null ? void 0 : O.canvas;
      K instanceof HTMLCanvasElement && (V.preventDefault(), K.dispatchEvent(new WheelEvent("wheel", {
        deltaX: V.deltaX,
        deltaY: V.deltaY,
        deltaZ: V.deltaZ,
        deltaMode: V.deltaMode,
        clientX: V.clientX,
        clientY: V.clientY,
        bubbles: !0,
        cancelable: !0
      })));
    },
    { passive: !1 }
  );
  const s = /* @__PURE__ */ Xt(l.state);
  let a = l.height, r = l.height, c = 0, u = !1, d;
  const m = () => {
    d && (yd(d, "height") && (d.height = a), d.computeSize = () => [o.clientWidth || 380, a]);
  }, g = () => {
    const V = o.firstElementChild;
    return !V || V.clientHeight === 0 || l.growable || (a = Math.ceil(V.scrollHeight / 4) * 4, r = a, m()), a;
  }, p = () => {
    const V = o.firstElementChild;
    if (!V || V.clientHeight === 0) return !1;
    const K = o.style.height;
    return o.style.height = "auto", r = Math.ceil(V.scrollHeight / 4) * 4, o.style.height = K, !0;
  }, _ = () => {
    a = r + c, o.style.height = `${a}px`, m();
  };
  d = i.addDOMWidget(t, "custom", o, {
    hideOnZoom: !0,
    getValue: () => s,
    setValue: (V) => {
      if (V && typeof V == "object") {
        const K = V, A = s;
        K.nodeState && typeof K.nodeState == "object" && A.nodeState && Object.assign(A.nodeState, K.nodeState), K.ui && typeof K.ui == "object" && A.ui && Object.assign(A.ui, K.ui);
        for (const [O, $] of Object.entries(K))
          O !== "nodeState" && O !== "ui" && (A[O] = $);
      }
    },
    getHeight: g,
    ...l.onDraw ? { onDraw: l.onDraw } : {}
  });
  const k = ro(bd, { root: n, state: s, comfyClass: i.comfyClass ?? "default" }).use(co());
  if (k.mount(o), l.growable && typeof i.computeSize == "function" && typeof i.setSize == "function") {
    const V = i.computeSize.bind(i), K = i.setSize.bind(i), A = () => Math.max(0, V()[1] - c);
    i.computeSize = () => [V()[0], A()], i.setSize = (O) => {
      u || (c = Math.max(0, O[1] - A()), _(), O = [O[0], V()[1]]), K(O);
    };
  }
  function x() {
    var I, H;
    if (l.growable) {
      M();
      return;
    }
    if (g(), !i.computeSize || !i.setSize || !i.size) return;
    const [V, K] = i.size, [, A] = i.computeSize(), [O, $] = i.minSize ?? [0, 0], R = Math.max(V, O), N = a + 35, P = Math.max(A, N, $);
    R === V && Math.abs(P - K) < 2 || (i.setSize([R, P]), (H = (I = i.graph) == null ? void 0 : I.setDirtyCanvas) == null || H.call(I, !0, !0));
  }
  let S = !1;
  function M() {
    var P, I;
    if (!p() || !i.computeSize || !i.setSize || !i.size) return;
    const [V, K] = i.size, [A, O] = i.minSize ?? [0, 0], $ = Math.max(i.computeSize()[1], O);
    S || (c = Math.max(0, K - $), S = !0), _();
    const R = Math.max(V, A), N = $ + c;
    if (!(R === V && Math.abs(N - K) < 2)) {
      u = !0;
      try {
        i.setSize([R, N]);
      } finally {
        u = !1;
      }
      (I = (P = i.graph) == null ? void 0 : P.setDirtyCanvas) == null || I.call(P, !0, !0);
    }
  }
  let b = 0;
  const v = new ResizeObserver(() => {
    b || (b = requestAnimationFrame(() => {
      b = 0, x();
    }));
  });
  v.observe(o);
  let y = 20;
  (function V() {
    x(), y-- > 0 && requestAnimationFrame(V);
  })();
  const T = setInterval(x, 400), W = { widget: d, host: o, app: k, state: s, unmount: E };
  function E() {
    v.disconnect(), b && cancelAnimationFrame(b), clearInterval(T);
    try {
      this.app.unmount();
    } catch (V) {
      console.warn(`[FiL_Design_ImageMind] unmount failed for "${t}":`, V);
    }
    for (; this.host.firstChild; ) this.host.removeChild(this.host.firstChild);
  }
  return W.unmount = E.bind(W), i._filVueApps ?? (i._filVueApps = {}), i._filVueApps[t] = W, W;
}
function Ut(e) {
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
function Yt(e, t) {
  return new Proxy({ ...t }, {
    set(n, l, i) {
      n[l] = i;
      const o = oe(e, String(l));
      return o && (o.value = i), !0;
    }
  });
}
function ve(e, t, n) {
  if (!e) return n;
  const l = e.value;
  return t === "number" && typeof l == "number" && Number.isFinite(l) || t === "boolean" && typeof l == "boolean" || t === "string" && typeof l == "string" ? l : (console.warn(
    `[FiL_Design_ImageMind] widget "${e.name}" had a corrupted value (expected ${t}) — resetting to default. This usually means the workflow was saved with an older version of this node.`
  ), e.value = n, n);
}
const rs = 4, Sd = {
  info: 3500,
  success: 3e3,
  warning: 5e3,
  error: 6e3
};
let xd = 1;
const _n = /* @__PURE__ */ uo("fil/toast", () => {
  const e = /* @__PURE__ */ se([]), t = /* @__PURE__ */ se([]);
  function n(c, u, d = {}) {
    const m = {
      id: xd++,
      level: c,
      text: u == null ? "" : String(u),
      timeout: d.timeout ?? Sd[c],
      sticky: !!d.sticky,
      action: d.action ?? null
    };
    return e.value.length < rs ? e.value.push(m) : t.value.push(m), m;
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
    e.value = e.value.filter((u) => u.id !== c), t.value.length > 0 && e.value.length < rs && e.value.push(t.value.shift());
  }
  function r() {
    e.value = [], t.value = [];
  }
  return { items: e, queue: t, info: l, success: i, warning: o, error: s, push: n, dismiss: a, dismissAll: r };
});
function Cd() {
  var t, n;
  return ((n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.toast) ?? null;
}
function gl(e, t) {
  const n = Cd();
  if (n != null && n.addAlert && (e === "info" || e === "success" || e === "warning" || e === "error"))
    try {
      n.addAlert(t);
      return;
    } catch (l) {
      console.warn("[FiL_Design_ImageMind toast] extensionManager.toast failed:", l);
    }
  _n().push(e, t, {});
}
const Et = {
  info: (e) => gl("info", e),
  success: (e) => gl("success", e),
  warning: (e) => gl("warning", e),
  error: (e) => gl("error", e),
  // Direct Pinia access for Vue components that want actions/sticky/toasts.
  infoRich: (e, t) => _n().info(e, t),
  successRich: (e, t) => _n().success(e, t),
  warningRich: (e, t) => _n().warning(e, t),
  errorRich: (e, t) => _n().error(e, t),
  dismissAll: () => _n().dismissAll()
};
function us() {
  var t, n, l, i, o, s, a, r;
  return !!(((i = (l = (n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.setting) == null ? void 0 : l.get) == null ? void 0 : i.call(l, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? ((r = (a = (s = (o = globalThis.app) == null ? void 0 : o.ui) == null ? void 0 : s.settings) == null ? void 0 : a.getSettingValue) == null ? void 0 : r.call(a, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? !0);
}
function cs() {
  function e(l, i, o, s) {
  }
  function t(l, i, o, s) {
    us() && Et.success("Connected");
  }
  function n(l, i) {
    us() && Et.info("Disconnected");
  }
  return { onConnectionsChange: e, onConnect: t, onDisconnect: n };
}
function tt(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype, n = t.onConnect;
  t.onConnect = function(...i) {
    const { onConnect: o } = cs();
    return o(...i), n == null ? void 0 : n.apply(this, i);
  };
  const l = t.onDisconnect;
  t.onDisconnect = function(...i) {
    const { onDisconnect: o } = cs();
    return o(...i), l == null ? void 0 : l.apply(this, i);
  };
}
const Ad = /* @__PURE__ */ $t(() => Promise.resolve().then(() => Jm)), Md = {
  id: "FiLSeed",
  register(e, t) {
    et(e, {
      minSize: [240, 90],
      family: "value",
      description: "Fixed or randomized seed with copy and reuse buttons.",
      badges: [{ text: "seed" }]
    });
    const l = e.prototype, i = l.onNodeCreated;
    l.onNodeCreated = function(...a) {
      const r = i == null ? void 0 : i.apply(this, a), c = this, u = oe(c, "seed"), d = ve(u, "number", 0);
      u && (u.hidden = !0);
      const m = oe(c, "control_after_generate");
      m && (m.hidden = !0);
      const g = {
        nodeState: {
          mode: "random",
          seed: d
        },
        initialValues: { seed: d },
        ui: {},
        lastRunSeed: null
      };
      return Object.defineProperty(g, "node", { value: c, enumerable: !1, configurable: !0 }), c._filSeedState = g, Ht(c, "fil_seed_view", Ad, { state: g, height: 52 }), r;
    };
    const o = l.onConfigure;
    l.onConfigure = function(...a) {
      const r = o == null ? void 0 : o.apply(this, a), c = this, u = c._filSeedState;
      return u && (u.nodeState.seed = ve(oe(c, "seed"), "number", 0)), r;
    };
    const s = l.onRemoved;
    l.onRemoved = function(...a) {
      return Ut(this), s == null ? void 0 : s.apply(this, a);
    }, tt(e);
  }
}, kd = /* @__PURE__ */ $t(() => Promise.resolve().then(() => Wh)), Fd = {
  id: "FiLProviderLoader",
  register(e, t) {
    et(e, {
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
      const c = o == null ? void 0 : o.apply(this, r), u = this, d = ve(oe(u, "provider"), "string", "ollama"), m = ve(oe(u, "model"), "string", "(loading...)"), g = ve(oe(u, "temperature"), "number", 0.7), p = ve(oe(u, "max_tokens"), "number", 0), _ = ve(oe(u, "rate_limit_ms"), "number", 100), k = ve(oe(u, "max_image_side"), "number", 1024);
      for (const S of ["provider", "model", "refresh_models", "temperature", "max_tokens", "rate_limit_ms", "max_image_side"]) {
        const M = oe(u, S);
        M && (M.hidden = !0);
      }
      const x = {
        nodeState: Yt(u, {
          provider: d,
          model: m,
          temperature: g,
          max_tokens: p,
          rate_limit_ms: _,
          max_image_side: k
        }),
        initialValues: {
          provider: d,
          model: m,
          temperature: g,
          max_tokens: p,
          rate_limit_ms: _,
          max_image_side: k
        },
        ui: {}
      };
      return Object.defineProperty(x, "node", { value: u, enumerable: !1, configurable: !0 }), u._filProviderState = x, Ht(u, "fil_provider_view", kd, { state: x, height: 180 }), c;
    };
    const s = l.onConfigure;
    l.onConfigure = function(...r) {
      const c = s == null ? void 0 : s.apply(this, r), u = this, d = u._filProviderState;
      if (!d) return c;
      const m = d.nodeState;
      for (const { name: g, kind: p, fallback: _ } of i)
        m[g] = ve(oe(u, g), p, _);
      return c;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return Ut(this), a == null ? void 0 : a.apply(this, r);
    }, tt(e);
  }
}, Ld = 10, Id = 20;
function ds(e, t) {
  var i;
  const n = e;
  let l = 0;
  for (const o of t) {
    const s = (i = n.inputs) == null ? void 0 : i.find((r) => r.name === o);
    if (!s) continue;
    s.alwaysVisible = !0;
    const a = oe(e, o);
    a && typeof a.y != "number" && (a.y = Id * (l + 1)), l += 1;
  }
  Wa(n);
}
function Dd(e, t) {
  var s, a;
  const n = Nd(), l = (s = e.pos) == null ? void 0 : s[1], i = (a = e.size) == null ? void 0 : a[1];
  if (!n || l == null || i == null) return;
  let o = !1;
  for (const { name: r, el: c } of t) {
    if (!c) continue;
    const u = oe(e, r);
    if (!u) continue;
    const d = c.getBoundingClientRect();
    if (d.height === 0) continue;
    const m = (d.top + d.height / 2 - n.canvasTop) / n.scale - n.offsetY - l;
    if (m < 0 || m > i) continue;
    const g = Math.round(m - Ld);
    u.y !== g && (u.y = g, o = !0);
  }
  (o || Rd(e, t)) && Wa(e);
}
function Pd(e, t) {
  var i;
  const n = e, l = {};
  for (const o of t) {
    const s = (i = n.inputs) == null ? void 0 : i.find((a) => a.name === o);
    l[o] = (s == null ? void 0 : s.link) != null;
  }
  return l;
}
function Rd(e, t) {
  return t.some(({ name: n }) => {
    var i, o;
    const l = (o = (i = e.inputs) == null ? void 0 : i.find((s) => s.name === n)) == null ? void 0 : o.boundingRect;
    return !l || !l[2] || !l[3];
  });
}
function Nd() {
  var i;
  const e = (i = globalThis.app) == null ? void 0 : i.canvas, t = e == null ? void 0 : e.canvas, n = e == null ? void 0 : e.ds;
  return !(t instanceof HTMLCanvasElement) || !(n != null && n.offset) ? null : { scale: n.scale || 1, offsetY: n.offset[1] ?? 0, canvasTop: t.getBoundingClientRect().top };
}
function Wa(e) {
  var t, n;
  e._widgetSlotsDirty = !0, (n = (t = e.graph) == null ? void 0 : t.setDirtyCanvas) == null || n.call(t, !0, !0);
}
const Td = /* @__PURE__ */ $t(() => Promise.resolve().then(() => fg)), fs = ["prompt", "negative_prompt", "custom_style"], ja = "fil_scanner_view";
function ps(e) {
  for (const t of e.widgets || [])
    t.name !== ja && (t.hidden = !0);
}
const Ed = {
  id: "FiLOpticScanner",
  register(e, t) {
    et(e, {
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
        const k = p === "seed", S = ve(_, k ? "number" : "string", k ? -1 : "");
        d[p] = S, m[p] = S, _.hidden = !0;
      }
      m.seed_mode = "random", ps(u);
      const g = {
        nodeState: Yt(u, m),
        initialValues: d,
        ui: {},
        lastRunSeed: null
      };
      return Object.defineProperty(g, "node", { value: u, enumerable: !1, configurable: !0 }), u._filScannerSeedState = g, ds(u, fs), Ht(u, ja, Td, { state: g, height: 580, growable: !0 }), c;
    };
    const s = l.onConfigure;
    l.onConfigure = function(...r) {
      const c = s == null ? void 0 : s.apply(this, r), u = this, d = u._filScannerSeedState;
      if (!d) return c;
      for (const m of i) {
        const g = oe(u, m);
        if (!g) continue;
        const p = m === "seed", _ = p ? -1 : "";
        d.nodeState[m] = ve(g, p ? "number" : "string", _), g.hidden = !0;
      }
      return ps(u), ds(u, fs), c;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return Ut(this), a == null ? void 0 : a.apply(this, r);
    }, tt(e);
  }
}, Vd = /* @__PURE__ */ $t(() => Promise.resolve().then(() => gg)), Od = {
  id: "FiLNeuroCleaner",
  register(e, t) {
    et(e, {
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
        const _ = oe(u, p), k = ve(_, "boolean", i[p]);
        d[p] = k, m[p] = k, _ && (_.hidden = !0);
      }
      const g = { nodeState: Yt(u, d), initialValues: m, ui: {} };
      return u._filCleanerState = g, Ht(u, "fil_cleaner_view", Vd, { state: g, height: 185 }), c;
    };
    const s = l.onConfigure;
    l.onConfigure = function(...r) {
      const c = s == null ? void 0 : s.apply(this, r), u = this, d = u._filCleanerState;
      if (!d) return c;
      for (const m of Object.keys(i))
        d.nodeState[m] = ve(oe(u, m), "boolean", i[m]);
      return c;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return Ut(this), a == null ? void 0 : a.apply(this, r);
    }, tt(e);
  }
}, $d = /* @__PURE__ */ $t(() => Promise.resolve().then(() => nr)), Bd = {
  id: "FiLUpscaleTileCalc",
  register(e, t) {
    et(e, {
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
      const d = a == null ? void 0 : a.apply(this, u), m = this, g = {}, p = {};
      for (const k of Object.keys(i)) {
        const x = oe(m, k);
        if (!x) continue;
        const S = ve(x, "number", i[k]);
        g[k] = S, p[k] = S, x.hidden = !0;
      }
      for (const k of Object.keys(o)) {
        const x = oe(m, k);
        if (!x) continue;
        const S = ve(x, "boolean", o[k]);
        g[k] = S, p[k] = S, x.hidden = !0;
      }
      for (const k of Object.keys(s)) {
        const x = oe(m, k);
        if (!x) continue;
        const S = ve(x, "string", s[k]);
        g[k] = S, p[k] = S, x.hidden = !0;
      }
      const _ = { nodeState: Yt(m, g), initialValues: p, ui: {} };
      return m._filUpscaleState = _, Ht(m, "fil_upscale_view", $d, { state: _, height: 420 }), d;
    };
    const r = l.onConfigure;
    l.onConfigure = function(...u) {
      const d = r == null ? void 0 : r.apply(this, u), m = this, g = m._filUpscaleState;
      if (!g) return d;
      for (const p of Object.keys(i))
        g.nodeState[p] = ve(oe(m, p), "number", i[p]);
      for (const p of Object.keys(o))
        g.nodeState[p] = ve(oe(m, p), "boolean", o[p]);
      for (const p of Object.keys(s))
        g.nodeState[p] = ve(oe(m, p), "string", s[p]);
      return d;
    };
    const c = l.onRemoved;
    l.onRemoved = function(...u) {
      return Ut(this), c == null ? void 0 : c.apply(this, u);
    }, tt(e);
  }
}, Hd = /* @__PURE__ */ $t(() => Promise.resolve().then(() => nr)), Ud = {
  id: "FiLUpscaleSimple",
  register(e, t) {
    et(e, {
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
      const d = a == null ? void 0 : a.apply(this, u), m = this, g = {}, p = {};
      for (const k of Object.keys(i)) {
        const x = oe(m, k);
        if (!x) continue;
        const S = ve(x, "number", i[k]);
        g[k] = S, p[k] = S, x.hidden = !0;
      }
      for (const k of Object.keys(o)) {
        const x = oe(m, k);
        if (!x) continue;
        const S = ve(x, "boolean", o[k]);
        g[k] = S, p[k] = S, x.hidden = !0;
      }
      for (const k of Object.keys(s)) {
        const x = oe(m, k);
        if (!x) continue;
        const S = ve(x, "string", s[k]);
        g[k] = S, p[k] = S, x.hidden = !0;
      }
      const _ = { nodeState: Yt(m, g), initialValues: p, ui: {} };
      return m._filUpscaleState = _, Ht(m, "fil_upscale_simple_view", Hd, { state: _, height: 420 }), d;
    };
    const r = l.onConfigure;
    l.onConfigure = function(...u) {
      const d = r == null ? void 0 : r.apply(this, u), m = this, g = m._filUpscaleState;
      if (!g) return d;
      for (const p of Object.keys(i))
        g.nodeState[p] = ve(oe(m, p), "number", i[p]);
      for (const p of Object.keys(o))
        g.nodeState[p] = ve(oe(m, p), "boolean", o[p]);
      for (const p of Object.keys(s))
        g.nodeState[p] = ve(oe(m, p), "string", s[p]);
      return d;
    };
    const c = l.onRemoved;
    l.onRemoved = function(...u) {
      return Ut(this), c == null ? void 0 : c.apply(this, u);
    }, tt(e);
  }
}, Gd = {
  id: "FiLTileAssembly",
  register(e, t) {
    et(e, {
      minSize: [270, 200],
      family: "image",
      description: "Recombines processed tiles back into one image, feathered across the real overlap zones.",
      badges: [{ text: "tile", color: "#62c987", text_color: "#1a1a1a" }]
    }), tt(e);
  }
}, Wd = {
  id: "FiLKSampler",
  register(e, t) {
    et(e, {
      minSize: [270, 260],
      family: "sampling",
      description: "Full sampler/scheduler set, passthrough outputs, preview, HighRes-fix script.",
      badges: [{ text: "sampler", color: "#7aa2f7", text_color: "#0b0e14" }]
    }), tt(e);
  }
}, jd = /* @__PURE__ */ $t(() => Promise.resolve().then(() => Ng)), Ui = {
  upscale_by: 1.25,
  denoise: 0.56,
  iterations: 1,
  strength: 1,
  seed: 0,
  hires_steps: 12
}, Gi = {
  upscale_type: "latent",
  hires_ckpt_name: "(use same)",
  latent_upscaler: "nearest-exact",
  pixel_upscaler: "",
  control_net_name: "",
  preprocessor: "none"
}, Wi = {
  use_same_seed: !0,
  use_controlnet: !1
}, zd = [
  ...Object.keys(Ui),
  ...Object.keys(Gi),
  ...Object.keys(Wi)
], Kd = {
  id: "FiLHighResFix",
  register(e, t) {
    et(e, {
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
      for (const u of Object.keys(Ui))
        c[u] = ve(oe(r, u), "number", Ui[u]);
      for (const u of Object.keys(Gi))
        c[u] = ve(oe(r, u), "string", Gi[u]);
      for (const u of Object.keys(Wi))
        c[u] = ve(oe(r, u), "boolean", Wi[u]);
    }, o = l.onNodeCreated;
    l.onNodeCreated = function(...r) {
      const c = o == null ? void 0 : o.apply(this, r), u = this, d = {};
      i(u, d);
      for (const p of zd) {
        const _ = oe(u, p);
        _ && (_.hidden = !0);
      }
      const m = oe(u, "control_after_generate");
      m && (m.hidden = !0, m.value = "fixed"), d.seed_mode = "random";
      const g = {
        nodeState: Yt(u, d),
        initialValues: { ...d },
        ui: {},
        lastRunSeed: null
      };
      return Object.defineProperty(g, "node", { value: u, enumerable: !1, configurable: !0 }), u._filHiResFixState = g, Ht(u, "fil_hiresfix_view", jd, { state: g, height: 420 }), c;
    };
    const s = l.onConfigure;
    l.onConfigure = function(...r) {
      const c = s == null ? void 0 : s.apply(this, r), u = this, d = u._filHiResFixState;
      return d && i(u, d.nodeState), c;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return Ut(this), a == null ? void 0 : a.apply(this, r);
    }, tt(e);
  }
}, qd = {
  id: "FiLNoiseControl",
  register(e, t) {
    et(e, {
      minSize: [270, 220],
      family: "sampling",
      description: "RNG source + seed-variation script for FiLKSampler.",
      badges: [{ text: "script", color: "#7aa2f7", text_color: "#0b0e14" }]
    }), tt(e);
  }
}, Xd = {
  id: "FiLImageDecomposer",
  register(e, t) {
    et(e, {
      minSize: [300, 240],
      family: "llm",
      description: "Decomposes image or prompt into distinct visual layers.",
      badges: [{ text: "vision", color: "#bb9af7", text_color: "#0b0e14" }]
    }), tt(e);
  }
}, Yd = /* @__PURE__ */ $t(() => Promise.resolve().then(() => Og)), ms = [
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
function xi(e) {
  if (!e) return;
  const t = e._filStyleMixerState;
  if (t != null && t.ui && (t.ui.slotVersion = (t.ui.slotVersion ?? 0) + 1), !e._allInputs && Array.isArray(e.inputs) && (e._allInputs = [...e.inputs]), !e._allInputs) return;
  const n = (s) => {
    const a = e._allInputs.find((r) => r && r.name === s);
    return !!(a && a.link != null);
  }, l = n("image_2"), i = n("image_3"), o = /* @__PURE__ */ new Set();
  o.add("config"), o.add("fusion_mode"), o.add("base_prompt"), o.add("image_1"), o.add("image_2"), l && o.add("image_3"), i && o.add("image_4"), e.inputs = e._allInputs.filter((s) => s && o.has(s.name)), typeof e.setSize == "function" && typeof e.computeSize == "function" && e.setSize(e.computeSize()), typeof e.setDirtyCanvas == "function" && e.setDirtyCanvas(!0, !0);
}
const Jd = {
  id: "FiLStyleMixer",
  register(e, t) {
    et(e, {
      minSize: [380, 320],
      family: "base",
      description: "Blends visual styles and reference images with weighted influence sliders and optional Vision LLM fusion.",
      badges: [{ text: "styles", color: "#e0af68", text_color: "#0b0e14" }]
    });
    const l = e.prototype, i = l.onNodeCreated;
    l.onNodeCreated = function(...r) {
      const c = i == null ? void 0 : i.apply(this, r), u = this, d = {}, m = {};
      for (const _ of ms) {
        const k = oe(u, _);
        if (!k) continue;
        const x = _.includes("weight") ? "number" : "string", M = ve(k, x, x === "number" ? 0.5 : "(None)");
        d[_] = M, m[_] = M, k.hidden = !0;
      }
      const g = {
        nodeState: Yt(u, m),
        initialValues: d,
        ui: { slotVersion: 0 }
      };
      Object.defineProperty(g, "node", { value: u, enumerable: !1, configurable: !0 });
      const p = /* @__PURE__ */ Xt(g);
      return u._filStyleMixerState = p, Ht(u, "fil_style_mixer_view", Yd, { state: p, height: 480 }), xi(this), c;
    };
    const o = l.onConfigure;
    l.onConfigure = function(...r) {
      const c = o == null ? void 0 : o.apply(this, r), u = this, d = u._filStyleMixerState;
      if (d)
        for (const m of ms) {
          const g = oe(u, m);
          if (!g) continue;
          const p = m.includes("weight") ? "number" : "string", _ = p === "number" ? 0.5 : "(None)";
          d.nodeState[m] = ve(g, p, _);
        }
      return xi(this), c;
    };
    const s = l.onConnectionsChange;
    l.onConnectionsChange = function(r, c, u, d, m) {
      const g = s == null ? void 0 : s.apply(this, [r, c, u, d, m]);
      return (r === 1 || (r == null ? void 0 : r.name) === "input") && xi(this), g;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return Ut(this), a == null ? void 0 : a.apply(this, r);
    }, tt(e);
  }
}, Qd = /* @__PURE__ */ $t(() => Promise.resolve().then(() => Yg)), hs = [
  "method",
  "strength",
  "saturate",
  "temperature",
  "tint",
  "preserve_skin"
], Zd = {
  id: "FiLColorWizard",
  register(e, t) {
    et(e, {
      minSize: [320, 310],
      family: "image",
      description: "Automatic color correction: white balance, LAB contrast, and skin protection with quick presets.",
      badges: [{ text: "color", color: "#f7768e", text_color: "#0b0e14" }]
    });
    const l = e.prototype, i = l.onNodeCreated;
    l.onNodeCreated = function(...a) {
      const r = i == null ? void 0 : i.apply(this, a), c = this, u = {}, d = {};
      for (const p of hs) {
        const _ = oe(c, p);
        if (!_) continue;
        const k = p === "preserve_skin" ? "boolean" : p === "method" ? "string" : "number", S = ve(_, k, k === "boolean" ? !1 : k === "number" ? 0 : "Full Auto");
        u[p] = S, d[p] = S, _.hidden = !0;
      }
      const m = {
        nodeState: Yt(c, d),
        initialValues: u,
        ui: {}
      };
      Object.defineProperty(m, "node", { value: c, enumerable: !1, configurable: !0 });
      const g = /* @__PURE__ */ Xt(m);
      return c._filColorWizardState = g, Ht(c, "fil_color_wizard_view", Qd, { state: g, height: 320 }), r;
    };
    const o = l.onConfigure;
    l.onConfigure = function(...a) {
      const r = o == null ? void 0 : o.apply(this, a), c = this, u = c._filColorWizardState;
      if (u)
        for (const d of hs) {
          const m = oe(c, d);
          if (!m) continue;
          const g = d === "preserve_skin" ? "boolean" : d === "method" ? "string" : "number", p = g === "boolean" ? !1 : g === "number" ? 0 : "Full Auto";
          u.nodeState[d] = ve(m, g, p);
        }
      return r;
    };
    const s = l.onRemoved;
    l.onRemoved = function(...a) {
      return Ut(this), s == null ? void 0 : s.apply(this, a);
    }, tt(e);
  }
}, ef = [
  Md,
  Fd,
  Ed,
  Od,
  Bd,
  Ud,
  Gd,
  Wd,
  Kd,
  qd,
  Xd,
  Jd,
  Zd
], za = Object.fromEntries(
  ef.map((e) => [e.id, e])
), _l = /* @__PURE__ */ se({});
let gs = !1;
const Hl = /* @__PURE__ */ uo("fil/help", () => {
  const e = /* @__PURE__ */ se(null);
  function t(a) {
    for (const [r, c] of Object.entries(a))
      _l.value[r] = c;
  }
  function n() {
    gs || (gs = !0, Promise.resolve().then(() => Qg).then(({ HELP_DEFAULTS: a }) => t(a)).catch((a) => console.warn("[FiL_Design_ImageMind] help defaults import failed:", a)));
  }
  function l(a) {
    return _l.value[a];
  }
  function i() {
    return Object.values(_l.value);
  }
  function o(a) {
    n(), e.value = a;
  }
  function s() {
    e.value = null;
  }
  return {
    registry: _l,
    activeHelpId: e,
    ensureHelpDefaultsInjected: n,
    registerAll: t,
    get: l,
    list: i,
    value_open: o,
    value_close: s
  };
}), tf = {
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
function Ka(e) {
  return tf[e];
}
const nf = ["title", "aria-label", "innerHTML"], lf = /* @__PURE__ */ Ce({
  name: "FilIcon",
  __name: "FilIcon",
  props: {
    name: {},
    size: { default: 16 },
    title: {}
  },
  setup(e) {
    return (t, n) => (C(), F("span", {
      class: "fil-icon",
      style: ot({ width: e.size + "px", height: e.size + "px" }),
      title: e.title,
      role: "img",
      "aria-label": e.title ?? e.name,
      innerHTML: f(Ka)(e.name)
    }, null, 12, nf));
  }
}), Vt = /* @__PURE__ */ ke(lf, [["__scopeId", "data-v-dfb78d9f"]]), of = ["aria-label"], sf = { class: "fil-modal-header" }, af = { class: "fil-modal-title" }, rf = { class: "fil-modal-body" }, uf = /* @__PURE__ */ Ce({
  __name: "FilModal",
  props: /* @__PURE__ */ Xe({
    title: {},
    width: { default: "520px" },
    closeOnEsc: { type: Boolean, default: !0 },
    closeOnBackdrop: { type: Boolean, default: !0 }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: /* @__PURE__ */ Xe(["close"], ["update:open"]),
  setup(e, { emit: t }) {
    const n = e, l = rt(e, "open"), i = t, o = /* @__PURE__ */ se(null), s = /* @__PURE__ */ se(null);
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
      const g = d(o.value);
      if (!g.length) {
        m.preventDefault();
        return;
      }
      const p = g[0], _ = g[g.length - 1];
      m.shiftKey ? document.activeElement === p && (m.preventDefault(), _.focus()) : document.activeElement === _ && (m.preventDefault(), p.focus());
    }
    function d(m) {
      return Array.from(
        m.querySelectorAll(
          'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((g) => !g.disabled && g.offsetParent !== null);
    }
    return He(
      l,
      (m) => {
        var g;
        m ? (s.value = document.activeElement, Ln(() => {
          var _;
          (_ = (o.value ? d(o.value) : [])[0] || o.value) == null || _.focus();
        })) : ((g = s.value) == null || g.focus(), s.value = null);
      }
    ), In(() => {
      document.addEventListener("keydown", c);
    }), rl(() => {
      document.removeEventListener("keydown", c);
    }), (m, g) => (C(), Me(na, { to: "body" }, [
      j(pc, { name: "fil-modal" }, {
        default: Kt(() => [
          l.value ? (C(), F("div", {
            key: 0,
            ref_key: "modalRef",
            ref: o,
            class: "fil-modal-backdrop",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title || "Dialog",
            onClick: r
          }, [
            L("div", {
              class: "fil-modal-panel",
              style: ot({ maxWidth: e.width })
            }, [
              L("div", sf, [
                L("span", af, X(e.title), 1),
                L("button", {
                  class: "fil-modal-close",
                  title: "Close",
                  onClick: a
                }, [
                  j(Vt, {
                    name: "close",
                    size: 14
                  })
                ])
              ]),
              L("div", rf, [
                xu(m.$slots, "default", {}, void 0, !0)
              ])
            ], 4)
          ], 8, of)) : te("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), An = /* @__PURE__ */ ke(uf, [["__scopeId", "data-v-0b20f2bd"]]), cf = { class: "fil-help-title" }, df = {
  key: 0,
  class: "fil-help-body"
}, ff = { key: 1 }, pf = {
  key: 2,
  class: "fil-help-table"
}, mf = {
  key: 3,
  class: "fil-help-code"
}, hf = {
  key: 1,
  class: "fil-help-empty"
}, gf = /* @__PURE__ */ Ce({
  __name: "FilHelpPopup",
  setup(e) {
    const t = Hl(), n = Q(() => {
      const i = t.activeHelpId;
      return i ? t.get(i) ?? null : null;
    }), l = Q({
      get: () => t.activeHelpId !== null,
      set: (i) => {
        i || t.value_close();
      }
    });
    return He(n, (i) => {
      i || t.value_close();
    }), (i, o) => (C(), Me(An, {
      open: l.value,
      "onUpdate:open": o[0] || (o[0] = (s) => l.value = s),
      title: "FiL LLM Help",
      width: "600px",
      onClose: o[1] || (o[1] = (s) => f(t).value_close())
    }, {
      default: Kt(() => {
        var s;
        return [
          n.value ? (C(), F(ue, { key: 0 }, [
            L("h2", cf, X(n.value.title), 1),
            n.value.body ? (C(), F("p", df, X(n.value.body), 1)) : te("", !0),
            (s = n.value.bullets) != null && s.length ? (C(), F("ul", ff, [
              (C(!0), F(ue, null, De(n.value.bullets, (a, r) => (C(), F("li", {
                key: r,
                class: "fil-help-bullet"
              }, [
                j(Vt, {
                  name: "chevronRight",
                  size: 12
                }),
                L("span", null, X(a), 1)
              ]))), 128))
            ])) : te("", !0),
            n.value.table ? (C(), F("table", pf, [
              L("thead", null, [
                L("tr", null, [
                  (C(!0), F(ue, null, De(n.value.table.headers, (a) => (C(), F("th", { key: a }, X(a), 1))), 128))
                ])
              ]),
              L("tbody", null, [
                (C(!0), F(ue, null, De(n.value.table.rows, (a, r) => (C(), F("tr", { key: r }, [
                  (C(!0), F(ue, null, De(a, (c, u) => (C(), F("td", { key: u }, X(c), 1))), 128))
                ]))), 128))
              ])
            ])) : te("", !0),
            n.value.code ? (C(), F("pre", mf, [
              L("code", null, X(n.value.code), 1)
            ])) : te("", !0)
          ], 64)) : (C(), F("p", hf, "No help available for this node."))
        ];
      }),
      _: 1
    }, 8, ["open"]));
  }
}), _f = /* @__PURE__ */ ke(gf, [["__scopeId", "data-v-536c1547"]]);
let Ci = null;
function bf(e) {
  if (Ci) return;
  const t = document.createElement("div");
  t.id = "__fil_help_popup_host", document.body.appendChild(t), Ci = ro(_f).use(co()), Ci.mount(t), console.info("[FiL_Design_ImageMind] help popup mounted");
}
const vf = "FiL_Design_ImageMind.Shortcuts.Enabled", yf = "__cheatsheet__", wf = [
  "#comfy-search-input",
  'input[name="search"]',
  'input[aria-label="Search"]',
  "#search-input",
  'input[placeholder*="search" i]'
], Sf = [
  {
    id: "FiL_Design_ImageMind.helpCheatsheet",
    label: "FiL_Design_ImageMind — Keyboard cheatsheet",
    icon: "?",
    function: ji
  },
  {
    id: "FiL_Design_ImageMind.focusSearch",
    label: "FiL_Design_ImageMind — Focus add-node search",
    icon: "/",
    function: qa
  }
], xf = [
  { commandId: "FiL_Design_ImageMind.helpCheatsheet", combo: { key: "?", shift: !0 } },
  // NB: Ctrl+Shift+K is reserved by core (Workspace.ToggleBottomPanel) — binding it
  // via the native API throws a duplicate-keybinding error, so we don't register it.
  { commandId: "FiL_Design_ImageMind.focusSearch", combo: { key: "/" } }
];
function Cf(e) {
  if (!e || typeof e != "object") return !1;
  const t = String(e.tagName || "").toLowerCase();
  return t === "input" || t === "textarea" || t === "select" || e.isContentEditable === !0;
}
function Af() {
  for (const e of wf) {
    const t = document.querySelector(e);
    if (t) return t;
  }
  return null;
}
function ji() {
  var t;
  const e = Hl();
  e.ensureHelpDefaultsInjected(), (t = e.value_open) == null || t.call(e, yf);
}
function qa() {
  const e = Af();
  if (!e) {
    Et.info("ComfyUI search field not found");
    return;
  }
  try {
    e.focus(), "select" in e && e.select();
  } catch {
  }
}
function Mf(e) {
  if (!!e.extensionManager) {
    console.info("[FiL_Design_ImageMind] shortcuts registered via native commands API");
    return;
  }
  window.addEventListener("keydown", (n) => kf(n, e), !0), console.info("[FiL_Design_ImageMind] shortcuts installed (fallback keydown handler)");
}
function kf(e, t) {
  var o, s, a, r, c, u, d, m, g;
  let n = !0;
  try {
    n = !!(((r = (a = (s = (o = globalThis.app) == null ? void 0 : o.extensionManager) == null ? void 0 : s.setting) == null ? void 0 : a.get) == null ? void 0 : r.call(a, vf, !0)) ?? !0);
  } catch {
  }
  if (!n) return;
  const l = e.target, i = Cf(l);
  if (e.key === "Escape") {
    try {
      const p = Hl();
      (c = p.value_close) == null || c.call(p);
    } catch {
    }
    i && ((u = l.blur) == null || u.call(l)), (d = e.preventDefault) == null || d.call(e);
    return;
  }
  if (!i) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "K" || e.key === "k")) {
      ji(), e.preventDefault();
      return;
    }
    if (e.key === "?" || e.shiftKey && e.key === "/") {
      if (e.shiftKey) ji();
      else {
        const p = t.canvas, _ = (p == null ? void 0 : p.selected_nodes) ?? {}, k = Object.values(_).filter(Boolean);
        if (k.length === 1) {
          const x = ((m = k[0]) == null ? void 0 : m.comfyClass) ?? "default", S = Hl();
          S.ensureHelpDefaultsInjected(), (g = S.value_open) == null || g.call(S, x);
        } else
          Et.info("Select exactly one FiL_Design_ImageMind node, then press ?");
      }
      e.preventDefault();
      return;
    }
    e.key === "/" && !e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey && (qa(), e.preventDefault());
  }
}
function Ff(e) {
  Mf(e);
}
let _s = !1;
function Lf() {
  _s || typeof window > "u" || (_s = !0, window.addEventListener(
    "wheel",
    (e) => {
      if (e.ctrlKey || e.metaKey) return;
      if (Ga(e.target, e.deltaX, e.deltaY)) {
        e.stopImmediatePropagation();
        return;
      }
      if (!(e.target instanceof HTMLCanvasElement)) return;
      const t = vd(e.clientX, e.clientY, e.deltaX, e.deltaY);
      if (!t) return;
      e.preventDefault(), e.stopImmediatePropagation();
      const n = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? t.clientHeight : 1;
      t.scrollBy({ left: e.deltaX * n, top: e.deltaY * n });
    },
    { capture: !0, passive: !1 }
  ), console.info("[FiL_Design_ImageMind] global scroll guard installed"));
}
const Xa = "FiL_Design_ImageMind", Mn = "🎨 FiL ImageMind", At = "/fil_design_imagemind", dn = `[${Xa}]`, If = `${Xa}.UI`;
async function Ya(e) {
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
function Ja() {
  var t;
  const e = globalThis;
  if ((t = e.api) != null && t.fetchApi) return (n, l) => e.api.fetchApi(n, l);
  if (e.fetch) return e.fetch.bind(globalThis);
  throw new Error(`${dn} no HTTP transport (api.fetchApi or window.fetch undefined)`);
}
async function Bn(e) {
  const t = await Ja()(e);
  return Ya(t);
}
async function xl(e, t) {
  const n = await Ja()(e, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  });
  return Ya(n);
}
const hn = {
  loadAccounts: () => Bn(`${At}/auth`),
  saveAccounts: (e) => xl(`${At}/auth`, {
    accounts: e
  }),
  loadModels: (e, t = !1) => Bn(`${At}/models/${encodeURIComponent(e)}${t ? "?force=1" : ""}`),
  probe: (e, t = "") => xl(`${At}/provider_probe`, { provider: e, model: t }),
  listProviders: () => Bn(`${At}/providers`),
  saveCompareImage: (e) => xl(`${At}/compare/save`, { image: e }),
  nodeContracts: () => Bn(`${At}/node_contracts`)
}, Df = 3e5, Pf = ["ollama", "lmstudio", "openai", "google", "groq", "openrouter", "cloudflare"], bn = Pf, fo = /* @__PURE__ */ uo("fil/providers", () => {
  const e = /* @__PURE__ */ se({}), t = /* @__PURE__ */ se({}), n = /* @__PURE__ */ se({}), l = /* @__PURE__ */ se({}), i = /* @__PURE__ */ se(null), o = Q(() => Object.fromEntries(
    Object.entries(e.value).filter(([, x]) => (x == null ? void 0 : x.configured) || (x == null ? void 0 : x.account_id) || (x == null ? void 0 : x.base_url))
  ));
  async function s() {
    try {
      const x = await hn.loadAccounts();
      e.value = x.accounts || {}, i.value = null;
    } catch (x) {
      i.value = x instanceof Error ? x.message : String(x);
    }
  }
  async function a(x, S) {
    try {
      const M = await hn.saveAccounts({ [x]: S });
      e.value = M.accounts || {}, i.value = null, u(x, !0);
    } catch (M) {
      throw i.value = M instanceof Error ? M.message : String(M), M;
    }
  }
  async function r(x) {
    const S = await hn.saveAccounts({
      [x]: { delete: !0 }
    });
    e.value = S.accounts || {};
  }
  async function c(x) {
    await a(x, {});
    try {
      await r(x);
    } catch (S) {
      i.value = S instanceof Error ? S.message : String(S);
    }
  }
  async function u(x, S = !1) {
    const M = t.value[x];
    if (M && !S && !M.error && M.cachedAt > 0 && Date.now() - M.cachedAt < Df)
      return M.list;
    M ? M.loading = !0 : t.value[x] = { list: [], visionModels: [], cachedAt: 0, loading: !0 };
    try {
      const b = await hn.loadModels(x, S), v = b.models || [];
      return t.value[x] = {
        list: v,
        visionModels: b.vision_models || [],
        cachedAt: Date.now(),
        loading: !1
      }, b.status && b.status !== "available" && (t.value[x].error = b.message || b.status), v;
    } catch (b) {
      const v = b instanceof Error ? b.message : String(b);
      throw t.value[x] = {
        list: [],
        visionModels: [],
        cachedAt: 0,
        loading: !1,
        error: v
      }, i.value = v, b;
    }
  }
  function d(x, S) {
    const M = t.value[x];
    if (!(M != null && M.cachedAt)) return null;
    const b = S ?? ((T, W) => W), v = Date.now() - M.cachedAt, y = Math.floor(v / 1e3);
    return y < 60 ? `${y}${b("unit_seconds_short", "s")}` : y < 3600 ? `${Math.floor(y / 60)}${b("unit_minutes_short", "m")}` : `${Math.floor(y / 3600)}${b("unit_hours_short", "h")}`;
  }
  async function m(x, S = "") {
    try {
      const M = await hn.probe(x, S);
      return n.value[x] = M, M;
    } catch (M) {
      i.value = M instanceof Error ? M.message : String(M);
      return;
    }
  }
  async function g() {
    try {
      const x = await hn.listProviders();
      l.value = x.providers || {};
    } catch {
    }
  }
  function p(x) {
    var S;
    return ((S = t.value[x]) == null ? void 0 : S.list) ?? [];
  }
  function _(x) {
    var S;
    return ((S = t.value[x]) == null ? void 0 : S.visionModels) ?? [];
  }
  function k(x) {
    var S;
    return !!((S = t.value[x]) != null && S.loading);
  }
  return {
    accounts: e,
    modelsByProvider: t,
    probeState: n,
    displayNames: l,
    lastError: i,
    configuredProviders: o,
    PROVIDER_LIST: bn,
    loadAccounts: s,
    saveAccount: a,
    deleteAccount: c,
    deleteAccountRaw: r,
    loadModels: u,
    probe: m,
    loadDisplayNames: g,
    modelsFor: p,
    visionModelsFor: _,
    isLoading: k,
    cachedAgeLabel: d
  };
}), Rf = ["title", "disabled", "aria-disabled"], Nf = {
  key: 0,
  class: "fil-w-btn-spinner"
}, Tf = ["innerHTML"], Ef = { key: 2 }, Vf = /* @__PURE__ */ Ce({
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
    const n = e, l = Q(() => n.icon ? Ka(n.icon) : ""), i = t, o = Q(() => [
      "fil-w-btn",
      n.variant === "accent" && "fil-w-btn-accent",
      n.variant === "danger" && "fil-w-btn-danger",
      n.variant === "icon" && "fil-w-btn-icon",
      n.variant === "full" && "fil-w-btn-full",
      n.variant === "sm" && "fil-w-btn-sm",
      n.flashing && "is-flashing",
      n.loading && "is-loading"
    ]), s = Q(() => n.disabled || n.loading);
    function a(r) {
      s.value || i("click", r);
    }
    return (r, c) => (C(), F("button", {
      class: he(o.value),
      title: e.title,
      disabled: s.value,
      "aria-disabled": s.value || void 0,
      onClick: a
    }, [
      e.loading ? (C(), F("span", Nf)) : te("", !0),
      e.icon && !e.loading ? (C(), F("span", {
        key: 1,
        class: "fil-w-btn-glyph",
        innerHTML: l.value
      }, null, 8, Tf)) : te("", !0),
      e.label ? (C(), F("span", Ef, X(e.loading ? "" : e.label), 1)) : te("", !0)
    ], 10, Rf));
  }
}), qe = /* @__PURE__ */ ke(Vf, [["__scopeId", "data-v-1c6537e0"]]), Ul = {
  ollama: "Ollama",
  lmstudio: "LM Studio",
  openai: "OpenAI",
  groq: "Groq",
  google: "Google AI",
  openrouter: "OpenRouter",
  cloudflare: "Cloudflare"
}, po = {
  ollama: "provider-ollama",
  lmstudio: "provider-lmstudio",
  openai: "provider-openai",
  groq: "provider-groq",
  google: "provider-google",
  openrouter: "provider-openrouter",
  cloudflare: "provider-cloudflare"
}, Of = { class: "fil-pm-root" }, $f = ["onClick"], Bf = { class: "fil-pm-icon" }, Hf = { class: "fil-pm-name" }, Uf = {
  key: 0,
  class: "fil-pm-disp"
}, Gf = ["title"], Wf = { class: "fil-pm-fields" }, jf = { class: "fil-pm-field" }, zf = ["onUpdate:modelValue", "placeholder", "onKeydown"], Kf = { class: "fil-pm-field" }, qf = ["onUpdate:modelValue", "onKeydown"], Xf = {
  key: 0,
  class: "fil-pm-field"
}, Yf = ["onUpdate:modelValue", "onKeydown"], Jf = { class: "fil-pm-actions" }, Qf = {
  key: 0,
  class: "fil-pm-age"
}, Zf = {
  key: 0,
  class: "fil-pm-err"
}, ep = {
  key: 1,
  class: "fil-pm-err"
}, tp = {
  key: 2,
  class: "fil-pm-models"
}, np = {
  key: 0,
  class: "fil-pm-vision-badge",
  title: "Vision-capable"
}, lp = {
  key: 3,
  class: "fil-pm-err fil-pm-global-err"
}, ip = /* @__PURE__ */ Ce({
  __name: "ProviderManager",
  setup(e) {
    const t = fo(), n = /* @__PURE__ */ se(
      Object.fromEntries(bn.map((b) => [b, { key: "", base_url: "", account_id: "" }]))
    ), l = /* @__PURE__ */ se({}), i = /* @__PURE__ */ se({}), o = /* @__PURE__ */ se({}), s = /* @__PURE__ */ se({});
    In(async () => {
      await Promise.all([t.loadAccounts(), t.loadDisplayNames()]);
      for (const b of bn) {
        const v = t.accounts[b];
        n.value[b] = {
          // Stored keys are never echoed back by GET /fil_design_imagemind/auth (write-only
          // by the security contract) — the field always starts empty and the
          // `configured` flag drives the "a key is saved" UI state instead.
          key: "",
          base_url: (v == null ? void 0 : v.base_url) ?? "",
          account_id: (v == null ? void 0 : v.account_id) ?? ""
        };
      }
      for (const b of bn) {
        const v = t.accounts[b];
        (v != null && v.configured || v != null && v.local || v != null && v.base_url) && x(b);
      }
    });
    const a = Ul, r = po;
    function c(b) {
      return { "fil-pm-has-val": b.length > 0 };
    }
    function u(b) {
      return b === "cloudflare";
    }
    function d(b) {
      var W;
      const v = t.accounts[b], y = t.modelsByProvider[b], T = ((y == null ? void 0 : y.list.length) ?? 0) > 0 && !(y != null && y.error);
      return ((W = t.probeState[b]) == null ? void 0 : W.status) === "available" || i.value[b] || T ? "connected" : v != null && v.configured || v != null && v.local || v != null && v.base_url ? "configured" : "off";
    }
    const m = {
      connected: "Connected",
      configured: "Configured",
      off: "Not connected"
    };
    function g(b) {
      return d(b) === "off" && !s.value[b];
    }
    function p(b) {
      d(b) === "off" && (s.value[b] = !s.value[b]);
    }
    async function _(b) {
      const v = n.value[b];
      await t.saveAccount(b, {
        key: v.key || null,
        base_url: v.base_url || null,
        account_id: v.account_id || null
      }), v.key = "";
    }
    async function k(b) {
      n.value[b] = { key: "", base_url: "", account_id: "" }, await t.deleteAccount(b);
    }
    async function x(b) {
      l.value[b] = !0, i.value[b] = !1;
      try {
        const v = await t.probe(b, "");
        i.value[b] = (v == null ? void 0 : v.status) === "available";
      } finally {
        l.value[b] = !1;
      }
    }
    async function S(b) {
      o.value[b] = !0;
      try {
        await t.loadModels(b, !0);
      } finally {
        o.value[b] = !1;
      }
    }
    const M = (b) => {
      const v = n.value[b];
      if (!v) return !1;
      const y = t.accounts[b];
      return v.key !== "" ? !0 : v.base_url !== ((y == null ? void 0 : y.base_url) ?? "") || v.account_id !== ((y == null ? void 0 : y.account_id) ?? "");
    };
    return (b, v) => (C(), F("div", Of, [
      (C(!0), F(ue, null, De(f(bn), (y) => {
        var T, W, E, V, K, A;
        return C(), F("div", {
          key: y,
          class: he(["fil-pm-card", { "fil-pm-card--collapsed": g(y) }])
        }, [
          L("div", {
            class: he(["fil-pm-header", { "fil-pm-header--clickable": d(y) === "off" }]),
            onClick: (O) => p(y)
          }, [
            L("span", Bf, [
              j(Vt, {
                name: f(r)[y],
                size: 20
              }, null, 8, ["name"])
            ]),
            L("span", Hf, X(f(a)[y]), 1),
            f(t).displayNames[y] ? (C(), F("span", Uf, "(" + X(f(t).displayNames[y]) + ")", 1)) : te("", !0),
            L("span", {
              class: he(["fil-pm-status", `fil-pm-status--${d(y)}`]),
              title: m[d(y)]
            }, [
              v[0] || (v[0] = L("span", { class: "fil-pm-dot" }, null, -1)),
              Tl(" " + X(m[d(y)]), 1)
            ], 10, Gf),
            d(y) === "off" ? (C(), F("span", {
              key: 1,
              class: he(["fil-pm-chevron", { "fil-pm-chevron--open": s.value[y] }])
            }, [
              j(Vt, {
                name: "chevronRight",
                size: 12
              })
            ], 2)) : te("", !0)
          ], 10, $f),
          g(y) ? te("", !0) : (C(), F(ue, { key: 0 }, [
            L("div", Wf, [
              L("label", jf, [
                v[1] || (v[1] = L("span", { class: "fil-pm-field-label" }, "API Key", -1)),
                st(L("input", {
                  "onUpdate:modelValue": (O) => n.value[y].key = O,
                  type: "password",
                  class: he(["fil-pm-input", c(n.value[y].key)]),
                  placeholder: (T = f(t).accounts[y]) != null && T.configured ? "•••••••• (saved)" : "sk-...",
                  onKeydown: Sl((O) => _(y), ["enter"])
                }, null, 42, zf), [
                  [yt, n.value[y].key]
                ])
              ]),
              L("label", Kf, [
                v[2] || (v[2] = L("span", { class: "fil-pm-field-label" }, "Base URL", -1)),
                st(L("input", {
                  "onUpdate:modelValue": (O) => n.value[y].base_url = O,
                  type: "text",
                  class: he(["fil-pm-input", c(n.value[y].base_url)]),
                  placeholder: "http://localhost:11434",
                  onKeydown: Sl((O) => _(y), ["enter"])
                }, null, 42, qf), [
                  [yt, n.value[y].base_url]
                ])
              ]),
              u(y) ? (C(), F("label", Xf, [
                v[3] || (v[3] = L("span", { class: "fil-pm-field-label" }, "Account ID", -1)),
                st(L("input", {
                  "onUpdate:modelValue": (O) => n.value[y].account_id = O,
                  type: "text",
                  class: he(["fil-pm-input", c(n.value[y].account_id)]),
                  onKeydown: Sl((O) => _(y), ["enter"])
                }, null, 42, Yf), [
                  [yt, n.value[y].account_id]
                ])
              ])) : te("", !0)
            ]),
            L("div", Jf, [
              j(qe, {
                variant: "accent",
                label: M(y) ? "Save" : "Saved",
                disabled: !M(y),
                onClick: (O) => _(y)
              }, null, 8, ["label", "disabled", "onClick"]),
              !M(y) && f(t).cachedAgeLabel(y) ? (C(), F("span", Qf, X(f(t).cachedAgeLabel(y)) + " ago ", 1)) : te("", !0),
              j(qe, {
                variant: "danger",
                label: "Delete",
                disabled: !((W = f(t).accounts[y]) != null && W.configured) && !((E = f(t).accounts[y]) != null && E.base_url),
                onClick: (O) => k(y)
              }, null, 8, ["disabled", "onClick"]),
              j(qe, {
                variant: "standard",
                label: "Probe",
                loading: l.value[y],
                flashing: i.value[y],
                disabled: !((V = f(t).accounts[y]) != null && V.local) && !((K = f(t).accounts[y]) != null && K.configured) && !n.value[y].key && !n.value[y].base_url,
                onClick: (O) => x(y)
              }, null, 8, ["loading", "flashing", "disabled", "onClick"]),
              j(qe, {
                variant: "standard",
                label: "Load Models",
                loading: o.value[y],
                onClick: (O) => S(y)
              }, null, 8, ["loading", "onClick"])
            ]),
            (A = f(t).modelsByProvider[y]) != null && A.error ? (C(), F("div", Zf, X(f(t).modelsByProvider[y].error), 1)) : te("", !0),
            f(t).probeState[y] && f(t).probeState[y].status !== "available" ? (C(), F("div", ep, X(f(t).probeState[y].message), 1)) : te("", !0),
            f(t).modelsFor(y).length > 0 ? (C(), F("div", tp, [
              (C(!0), F(ue, null, De(f(t).modelsFor(y), (O) => (C(), F("span", {
                class: "fil-pm-model-tag",
                key: O
              }, [
                Tl(X(O) + " ", 1),
                f(t).visionModelsFor(y).includes(O) ? (C(), F("span", np, "👁")) : te("", !0)
              ]))), 128))
            ])) : te("", !0),
            f(t).lastError ? (C(), F("div", lp, X(f(t).lastError), 1)) : te("", !0)
          ], 64))
        ], 2);
      }), 128))
    ]));
  }
}), op = /* @__PURE__ */ ke(ip, [["__scopeId", "data-v-329149a3"]]);
let En = null;
function sp(e) {
  En && (En.unmount(), En = null), En = ro(op).use(co()), En.mount(e), console.info("[FiL_Design_ImageMind] provider manager mounted");
}
function ap(e) {
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
    render: (n) => sp(n)
  }), console.info("[FiL_Design_ImageMind] provider manager sidebar tab registered");
}
const rp = [
  {
    id: "FiL_Design_ImageMind.DefaultProvider",
    name: "Default LLM Provider",
    type: "combo",
    defaultValue: "Ollama",
    options: ["Ollama", "LM Studio", "Groq", "Google AI", "OpenRouter", "Cloudflare"],
    category: [Mn, "General"],
    tooltip: "Default AI Provider pre-selected in new Provider Loader nodes."
  },
  {
    id: "FiL_Design_ImageMind.RequestTimeout",
    name: "Request Timeout (seconds)",
    type: "number",
    defaultValue: 60,
    attrs: { min: 5, max: 600, step: 5 },
    category: [Mn, "Network"],
    tooltip: "Global timeout in seconds for API calls to local/cloud LLM providers."
  },
  {
    id: "FiL_Design_ImageMind.AutoCleanVRAM",
    name: "Auto VRAM cleanup on completion",
    type: "boolean",
    defaultValue: !1,
    category: [Mn, "Performance"],
    tooltip: "Automatically purge empty torch cache and PyTorch VRAM after node execution."
  }
], up = [
  {
    id: "FiL_Design_ImageMind.Language",
    name: "Language",
    type: "combo",
    defaultValue: "en",
    options: ["en", "ru"],
    tooltip: "UI language for FiL_Design_ImageMind node tooltips and labels (English / Russian).",
    category: [Mn, "Language"]
  }
];
function Qa(e) {
  xl(`${At}/log_level`, { level: String(e) }).catch(() => {
  });
}
const cp = [
  {
    id: "FiL_Design_ImageMind.Logging.Level",
    name: "Log level",
    type: "combo",
    defaultValue: "WARNING",
    options: ["DEBUG", "INFO", "WARNING", "ERROR"],
    category: [Mn, "Logging"],
    tooltip: "Python backend log verbosity for this node pack.",
    onChange: Qa
  }
];
function dp(e) {
  const t = e("FiL_Design_ImageMind.Logging.Level", "WARNING");
  Qa(t);
}
const Za = {
  Default: "default",
  Cyberpunk: "cyberpunk",
  Fallout: "fallout",
  Pipboy: "pipboy",
  "FiL Green": "travelmate"
};
function fp(e) {
  const t = Za[String(e)] ?? "default";
  Va(t);
  const n = globalThis.app;
  n && ud(n);
}
const pp = [
  {
    id: "FiL_Design_ImageMind.Theme",
    name: "Node theme",
    type: "combo",
    defaultValue: "Default",
    options: ["Default", "Cyberpunk", "Fallout", "Pipboy", "FiL Green"],
    category: [Mn, "Appearance", "Theme"],
    tooltip: "Recolors every FiL_Design_ImageMind node panel and adds a small themed flourish (neon glow for Cyberpunk, a CRT scanline texture for Pipboy and Fallout, acid-lime glow for Travelmate). Applies instantly, no reload.",
    onChange: fp
  }
];
function mp(e) {
  const t = e("FiL_Design_ImageMind.Theme", "Default");
  Va(Za[t] ?? "default");
}
const hp = [
  ...rp,
  ...up,
  ...cp,
  ...pp
];
function zi(e, t, n) {
  var i, o, s, a, r, c, u, d;
  const l = n ?? globalThis;
  try {
    const m = (s = (o = (i = l.app) == null ? void 0 : i.extensionManager) == null ? void 0 : o.setting) == null ? void 0 : s.get;
    if (typeof m == "function") return m(e, t);
    const g = ((r = (a = l.ui) == null ? void 0 : a.settings) == null ? void 0 : r.getSettingValue) ?? ((d = (u = (c = globalThis.app) == null ? void 0 : c.ui) == null ? void 0 : u.settings) == null ? void 0 : d.getSettingValue);
    if (typeof g == "function") return g(e, t);
  } catch (m) {
    console.warn(`[FiL_Design_ImageMind] setting read failed for "${e}":`, m);
  }
  return t;
}
Lf();
function gp(e) {
  var t, n;
  try {
    const l = globalThis.app, i = ((t = l == null ? void 0 : l.graph) == null ? void 0 : t._nodes) ?? [];
    for (const o of i) {
      const s = o;
      if (s.comfyClass === "FiLOpticScanner") {
        const a = (n = s.inputs) == null ? void 0 : n.find((r) => r.name === "config");
        (!a || a.link == null) && console.warn(`${dn} Optic Scanner #${s.id} has no Provider Loader wired to its "config" slot — execution will fail.`);
      }
    }
  } catch (l) {
    console.warn(`${dn} preflight fallback:`, l);
  }
  return e;
}
function _p(e) {
  return {
    name: If,
    // Declarative settings — registered BEFORE setup so the panel renders
    // even if a later installer throws.
    settings: hp,
    // Declarative shortcuts — modern ComfyUI registers these through its
    // native command palette / keybinding system. The keydown fallback in
    // installShortcuts only kicks in when this API is unavailable.
    commands: Sf,
    keybindings: xf,
    async setup() {
      const t = [
        () => bf(),
        () => Ff(e),
        () => ap(e),
        () => dp((n, l) => zi(n, l, e)),
        () => mp((n, l) => zi(n, l, e))
      ];
      for (const n of t)
        try {
          n();
        } catch (l) {
          console.warn(`${dn} installer ${n.name || "anonymous"} failed:`, l);
        }
    },
    getCustomWidgets() {
      return {};
    },
    async beforeRegisterNodeDef(t, n) {
      const l = za[n.name];
      if (l)
        try {
          await l.register(t, n);
        } catch (i) {
          console.warn(`${dn} failed to register "${n.name}":`, i);
        }
    },
    async graphToPrompt(t) {
      return gp(t);
    }
  };
}
async function bp() {
  if (typeof fetch > "u") return;
  let e;
  try {
    e = await fetch(`${At}/node_contracts`);
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
  const n = new Set(Object.keys(t.node_ids ?? {})), l = new Set(Object.keys(za));
  for (const i of n)
    l.has(i) || console.warn(`${dn} server expects "${i}" but local JS does not register it`);
  for (const i of l)
    n.has(i) || console.warn(`${dn} JS registers "${i}" but server does not expose a contract`);
}
Zc();
hd();
bp().catch((e) => {
  console.warn("[FiL_Design_ImageMind] contract self-check failed:", e);
});
const er = _p(ws);
ws.registerExtension(er);
console.info(`[FiL_Design_ImageMind] extension registered as "${er.name}"`);
const vp = ["aria-checked", "disabled", "title", "onClick"], yp = /* @__PURE__ */ Ce({
  __name: "FilChipGrid",
  props: /* @__PURE__ */ Xe({
    options: {},
    columns: { default: 3 },
    disabled: { type: Boolean }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = rt(e, "modelValue"), l = Q(() => ({
      gridTemplateColumns: `repeat(${Math.max(1, t.columns)}, minmax(0, 1fr))`
    }));
    function i(o) {
      t.disabled || o !== n.value && (n.value = o);
    }
    return (o, s) => (C(), F("div", {
      class: "fil-w-chips",
      style: ot(l.value),
      role: "radiogroup"
    }, [
      (C(!0), F(ue, null, De(e.options, (a) => (C(), F("button", {
        key: a,
        type: "button",
        role: "radio",
        class: he(["fil-w-chip", { active: a === n.value, disabled: e.disabled }]),
        "aria-checked": a === n.value,
        disabled: e.disabled,
        title: a,
        onClick: (r) => i(a)
      }, X(a), 11, vp))), 128))
    ], 4));
  }
}), bs = /* @__PURE__ */ ke(yp, [["__scopeId", "data-v-9c6ca5d1"]]), wp = { class: "fil-w-chiplist" }, Sp = ["placeholder", "aria-label", "disabled"], xp = {
  class: "fil-w-chip-scroll",
  role: "radiogroup"
}, Cp = ["aria-checked", "disabled", "title", "onClick"], Ap = {
  key: 0,
  class: "fil-w-chip-empty"
}, Mp = /* @__PURE__ */ Ce({
  __name: "FilChipList",
  props: /* @__PURE__ */ Xe({
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
    const t = e, n = rt(e, "modelValue"), l = /* @__PURE__ */ se(""), i = Q(() => {
      const s = l.value.trim().toLowerCase();
      return s ? t.options.filter((a) => a.toLowerCase().includes(s)) : t.options;
    });
    function o(s) {
      t.disabled || s !== n.value && (n.value = s);
    }
    return (s, a) => (C(), F("div", wp, [
      e.searchable ? st((C(), F("input", {
        key: 0,
        "onUpdate:modelValue": a[0] || (a[0] = (r) => l.value = r),
        class: "fil-w-search",
        type: "search",
        placeholder: e.placeholder,
        "aria-label": e.placeholder,
        disabled: e.disabled,
        spellcheck: "false"
      }, null, 8, Sp)), [
        [yt, l.value]
      ]) : te("", !0),
      L("div", xp, [
        (C(!0), F(ue, null, De(i.value, (r) => (C(), F("button", {
          key: r,
          type: "button",
          role: "radio",
          class: he(["fil-w-chip", { active: r === n.value, disabled: e.disabled }]),
          "aria-checked": r === n.value,
          disabled: e.disabled,
          title: r,
          onClick: (c) => o(r)
        }, X(r), 11, Cp))), 128)),
        i.value.length === 0 ? (C(), F("div", Ap, X(l.value ? "No matches" : "Empty"), 1)) : te("", !0)
      ])
    ]));
  }
}), kp = /* @__PURE__ */ ke(Mp, [["__scopeId", "data-v-3c9e19df"]]), Fp = ["title"], Lp = {
  key: 0,
  class: "fil-combo-label"
}, Ip = ["disabled", "aria-expanded"], Dp = { class: "fil-combo-trigger-label" }, Pp = {
  key: 1,
  class: "fil-combo-badge"
}, Rp = ["placeholder"], Np = { class: "fil-combo-list" }, Tp = ["aria-selected", "onMouseenter", "onClick"], Ep = { class: "fil-combo-option-label" }, Vp = {
  key: 1,
  class: "fil-combo-badge"
}, Op = {
  key: 0,
  class: "fil-combo-empty"
}, $p = /* @__PURE__ */ Ce({
  __name: "FilComboBox",
  props: /* @__PURE__ */ Xe({
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
    const t = e, n = rt(e, "modelValue"), l = /* @__PURE__ */ se(!1), i = /* @__PURE__ */ se(""), o = /* @__PURE__ */ se(0), s = /* @__PURE__ */ se(null), a = /* @__PURE__ */ se(null), r = /* @__PURE__ */ se(null), c = /* @__PURE__ */ se({}), u = Q(() => t.options.find((y) => y.value === n.value)), d = Q(() => {
      if (!t.searchable || !i.value.trim()) return t.options;
      const y = i.value.trim().toLowerCase();
      return t.options.filter((T) => (T.label ?? T.value).toLowerCase().includes(y));
    });
    function m(y) {
      return y.label ?? y.value;
    }
    function g() {
      const y = s.value;
      if (!y) return;
      const T = y.getBoundingClientRect(), W = window.innerHeight, E = 260, V = W - T.bottom, K = V < E && T.top > V;
      c.value = {
        left: `${T.left}px`,
        width: `${T.width}px`,
        ...K ? { bottom: `${W - T.top + 4}px` } : { top: `${T.bottom + 4}px` }
      };
    }
    function p(y) {
      var W;
      const T = y.target;
      T instanceof Element && ((W = a.value) != null && W.contains(T)) || k();
    }
    function _() {
      t.disabled || (l.value = !0, i.value = "", o.value = Math.max(
        0,
        d.value.findIndex((y) => y.value === n.value)
      ), Ln(() => {
        var y;
        g(), t.searchable && ((y = r.value) == null || y.focus()), window.addEventListener("resize", p), window.addEventListener("scroll", p, !0), document.addEventListener("mousedown", x, !0);
      }));
    }
    function k() {
      l.value && (l.value = !1, window.removeEventListener("resize", p), window.removeEventListener("scroll", p, !0), document.removeEventListener("mousedown", x, !0));
    }
    function x(y) {
      var W, E;
      const T = y.target;
      (W = s.value) != null && W.contains(T) || (E = a.value) != null && E.contains(T) || k();
    }
    function S() {
      l.value ? k() : _();
    }
    function M(y) {
      var T;
      n.value = y.value, k(), (T = s.value) == null || T.focus();
    }
    function b(y) {
      if (!t.disabled) {
        if (!l.value && (y.key === "ArrowDown" || y.key === "ArrowUp" || y.key === "Enter" || y.key === " ")) {
          y.preventDefault(), _();
          return;
        }
        l.value && v(y);
      }
    }
    function v(y) {
      var W;
      const T = d.value;
      if (y.key === "ArrowDown")
        y.preventDefault(), o.value = T.length ? (o.value + 1) % T.length : 0;
      else if (y.key === "ArrowUp")
        y.preventDefault(), o.value = T.length ? (o.value - 1 + T.length) % T.length : 0;
      else if (y.key === "Enter") {
        y.preventDefault();
        const E = T[o.value];
        E && M(E);
      } else y.key === "Escape" && (y.preventDefault(), k(), (W = s.value) == null || W.focus());
    }
    return He(i, () => {
      o.value = 0;
    }), rl(() => {
      window.removeEventListener("resize", p), window.removeEventListener("scroll", p, !0), document.removeEventListener("mousedown", x, !0);
    }), (y, T) => {
      var W, E;
      return C(), F("div", {
        class: "fil-combo",
        title: e.title
      }, [
        e.label ? (C(), F("label", Lp, X(e.label), 1)) : te("", !0),
        L("button", {
          ref_key: "triggerRef",
          ref: s,
          type: "button",
          class: he(["fil-combo-trigger", { open: l.value, disabled: e.disabled }]),
          disabled: e.disabled,
          "aria-expanded": l.value,
          "aria-haspopup": "listbox",
          onClick: S,
          onKeydown: b
        }, [
          (W = u.value) != null && W.icon ? (C(), Me(Vt, {
            key: 0,
            name: u.value.icon,
            size: 16
          }, null, 8, ["name"])) : te("", !0),
          L("span", Dp, X(u.value ? m(u.value) : n.value), 1),
          (E = u.value) != null && E.badge ? (C(), F("span", Pp, X(u.value.badge), 1)) : te("", !0),
          T[1] || (T[1] = L("span", { class: "fil-combo-chevron" }, "▾", -1))
        ], 42, Ip),
        (C(), Me(na, { to: "body" }, [
          l.value ? (C(), F("div", {
            key: 0,
            ref_key: "panelRef",
            ref: a,
            class: "fil-combo-panel",
            style: ot(c.value),
            role: "listbox",
            onKeydown: v
          }, [
            e.searchable ? st((C(), F("input", {
              key: 0,
              ref_key: "searchRef",
              ref: r,
              "onUpdate:modelValue": T[0] || (T[0] = (V) => i.value = V),
              type: "search",
              class: "fil-combo-search",
              placeholder: e.placeholder,
              spellcheck: "false"
            }, null, 8, Rp)), [
              [yt, i.value]
            ]) : te("", !0),
            L("div", Np, [
              (C(!0), F(ue, null, De(d.value, (V, K) => (C(), F("button", {
                key: V.value,
                type: "button",
                class: he(["fil-combo-option", { active: K === o.value, selected: V.value === n.value }]),
                role: "option",
                "aria-selected": V.value === n.value,
                onMouseenter: (A) => o.value = K,
                onClick: (A) => M(V)
              }, [
                V.icon ? (C(), Me(Vt, {
                  key: 0,
                  name: V.icon,
                  size: 16
                }, null, 8, ["name"])) : te("", !0),
                L("span", Ep, X(m(V)), 1),
                V.badge ? (C(), F("span", Vp, X(V.badge), 1)) : te("", !0)
              ], 42, Tp))), 128)),
              d.value.length === 0 ? (C(), F("div", Op, "No matches")) : te("", !0)
            ])
          ], 36)) : te("", !0)
        ]))
      ], 8, Fp);
    };
  }
}), Bp = /* @__PURE__ */ ke($p, [["__scopeId", "data-v-82542923"]]), Hp = ["data-ok", "data-err"], Up = /* @__PURE__ */ Ce({
  __name: "FilInfo",
  props: {
    text: {},
    ok: { type: Boolean },
    err: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (C(), F("div", {
      class: "fil-w-info",
      "data-ok": e.ok || void 0,
      "data-err": e.err || void 0
    }, X(e.text), 9, Hp));
  }
}), Cl = /* @__PURE__ */ ke(Up, [["__scopeId", "data-v-851660c1"]]), Gp = ["title"], Wp = {
  key: 0,
  class: "fil-w-numfield-label"
}, jp = { class: "fil-w-num-wrap" }, zp = ["disabled", "min", "max", "step", "aria-label"], Kp = { class: "fil-w-num-step" }, qp = ["disabled"], Xp = ["disabled"], Yp = /* @__PURE__ */ Ce({
  __name: "FilNumberInput",
  props: /* @__PURE__ */ Xe({
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
    const t = e, n = rt(e, "modelValue"), l = Q(() => n.value), i = /* @__PURE__ */ se(a(l.value));
    He(l, (p) => {
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
        const k = new Function(`"use strict"; return (${_});`), x = Number(k());
        return Number.isFinite(x) ? x : null;
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
      p.key === "Enter" ? (p.preventDefault(), c(r(i.value)), p.target.blur()) : p.key === "Escape" ? (p.preventDefault(), s !== null && (i.value = s), p.target.blur()) : p.key === "ArrowUp" ? (p.preventDefault(), g(p.shiftKey ? 10 : 1)) : p.key === "ArrowDown" && (p.preventDefault(), g(p.shiftKey ? -10 : -1));
    }
    function g(p) {
      let _ = l.value + p * (t.step || 1);
      t.min != null && _ < t.min && (_ = t.min), t.max != null && _ > t.max && (_ = t.max), n.value = _, i.value = a(_);
    }
    return (p, _) => (C(), F("div", {
      class: he(["fil-w-numfield", { "no-label": !e.label }]),
      title: e.title
    }, [
      e.label ? (C(), F("label", Wp, X(e.label), 1)) : te("", !0),
      L("div", jp, [
        st(L("input", {
          "onUpdate:modelValue": _[0] || (_[0] = (k) => i.value = k),
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
        }, null, 40, zp), [
          [yt, i.value]
        ]),
        L("div", Kp, [
          L("button", {
            type: "button",
            class: "fil-w-num-btn",
            tabindex: "-1",
            "aria-label": "Increment",
            disabled: e.disabled || e.max != null && n.value >= e.max,
            onMousedown: _[1] || (_[1] = Vi(() => {
            }, ["prevent"])),
            onClick: _[2] || (_[2] = (k) => g(k.shiftKey ? 10 : 1))
          }, "▲", 40, qp),
          L("button", {
            type: "button",
            class: "fil-w-num-btn",
            tabindex: "-1",
            "aria-label": "Decrement",
            disabled: e.disabled || e.min != null && n.value <= e.min,
            onMousedown: _[3] || (_[3] = Vi(() => {
            }, ["prevent"])),
            onClick: _[4] || (_[4] = (k) => g(k.shiftKey ? -10 : -1))
          }, "▼", 40, Xp)
        ])
      ])
    ], 10, Gp));
  }
}), rn = /* @__PURE__ */ ke(Yp, [["__scopeId", "data-v-2f843ba1"]]), Jp = ["aria-expanded", "disabled"], Qp = { class: "fil-w-section-arrow" }, Zp = { class: "fil-w-section-title" }, em = /* @__PURE__ */ Ce({
  __name: "FilSection",
  props: /* @__PURE__ */ Xe({
    title: {},
    collapsible: { type: Boolean, default: !0 }
  }, {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = rt(e, "modelValue");
    function l() {
      t.collapsible && (n.value = !n.value);
    }
    const i = Q(() => n.value ? "▶" : "▼");
    return (o, s) => (C(), F("button", {
      type: "button",
      class: he(["fil-w-section", { collapsible: e.collapsible, collapsed: n.value }]),
      "aria-expanded": !n.value,
      disabled: !e.collapsible,
      onClick: l
    }, [
      L("span", Qp, X(i.value), 1),
      L("span", Zp, X(e.title), 1)
    ], 10, Jp));
  }
}), lt = /* @__PURE__ */ ke(em, [["__scopeId", "data-v-4b760ea4"]]), tm = ["title"], nm = {
  key: 0,
  class: "fil-w-segmented-label"
}, lm = ["aria-label"], im = ["aria-pressed", "disabled", "tabindex", "onClick", "onKeydown"], om = /* @__PURE__ */ Ce({
  __name: "FilSegmented",
  props: /* @__PURE__ */ Xe({
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
    const t = e, n = rt(e, "modelValue"), l = /* @__PURE__ */ se([]);
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
    return (a, r) => (C(), F("div", {
      class: "fil-w-segmented",
      title: e.title
    }, [
      e.label ? (C(), F("label", nm, X(e.label), 1)) : te("", !0),
      L("div", {
        class: he(["fil-w-pill", { disabled: e.disabled }]),
        role: "group",
        "aria-label": e.label
      }, [
        (C(!0), F(ue, null, De(e.options, (c, u) => (C(), F("button", {
          key: c,
          ref_for: !0,
          ref: (d) => {
            d && (l.value[u] = d);
          },
          type: "button",
          class: he(["fil-w-seg", { active: c === n.value }]),
          "aria-pressed": c === n.value,
          disabled: e.disabled,
          tabindex: c === n.value ? 0 : -1,
          onClick: (d) => o(c),
          onKeydown: (d) => s(d, u)
        }, X(i(c)), 43, im))), 128))
      ], 10, lm)
    ], 8, tm));
  }
}), bt = /* @__PURE__ */ ke(om, [["__scopeId", "data-v-765cf0ce"]]), sm = ["title"], am = {
  key: 0,
  class: "fil-w-select-label"
}, rm = ["disabled", "aria-label"], um = ["value"], cm = /* @__PURE__ */ Ce({
  __name: "FilSelect",
  props: /* @__PURE__ */ Xe({
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
    const t = rt(e, "modelValue");
    return (n, l) => (C(), F("div", {
      class: "fil-w-select",
      title: e.title
    }, [
      e.label ? (C(), F("label", am, X(e.label), 1)) : te("", !0),
      st(L("select", {
        "onUpdate:modelValue": l[0] || (l[0] = (i) => t.value = i),
        class: "fil-w-select-input",
        disabled: e.disabled,
        "aria-label": e.label
      }, [
        (C(!0), F(ue, null, De(e.options, (i) => (C(), F("option", {
          key: i,
          value: i
        }, X(i), 9, um))), 128))
      ], 8, rm), [
        [Vc, t.value]
      ])
    ], 8, sm));
  }
}), bl = /* @__PURE__ */ ke(cm, [["__scopeId", "data-v-a878baba"]]), dm = ["title"], fm = {
  key: 0,
  class: "fil-w-slider-label"
}, pm = { class: "fil-w-slider-row" }, mm = ["value", "min", "max", "step", "disabled", "aria-label"], hm = /* @__PURE__ */ Ce({
  __name: "FilSlider",
  props: /* @__PURE__ */ Xe({
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
    const t = e, n = rt(e, "modelValue"), l = Q({
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
    return (o, s) => (C(), F("div", {
      class: "fil-w-slider",
      title: e.title
    }, [
      e.label ? (C(), F("label", fm, X(e.label), 1)) : te("", !0),
      L("div", pm, [
        L("input", {
          type: "range",
          class: "fil-w-slider-range",
          value: l.value,
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label,
          onInput: i
        }, null, 40, mm),
        j(rn, {
          modelValue: l.value,
          "onUpdate:modelValue": s[0] || (s[0] = (a) => l.value = a),
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label
        }, null, 8, ["modelValue", "min", "max", "step", "disabled", "aria-label"])
      ])
    ], 8, dm));
  }
}), Ee = /* @__PURE__ */ ke(hm, [["__scopeId", "data-v-c8e1921a"]]), gm = {
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
}, _m = {}, bm = {}, vm = {}, ym = {
  ...gm,
  ..._m,
  ...bm,
  ...vm
}, wm = "FiL_Design_ImageMind.Language", tr = "en", Ft = /* @__PURE__ */ Xt({
  lang: tr,
  translations: {},
  loaded: !1
});
let vs = null;
async function Sm(e) {
  try {
    const t = await Bn(`/fil_design_imagemind/locale/${encodeURIComponent(e)}`);
    Ft.translations = t, Ft.lang = e;
  } catch (t) {
    console.warn(`[FiL_Design_ImageMind] failed to load locale "${e}":`, t);
  } finally {
    Ft.loaded = !0;
  }
}
function xm() {
  if (vs) return;
  const e = zi(wm, tr);
  vs = Sm(e);
}
function Cm(e, t, n, l) {
  const i = e % 10, o = e % 100;
  return i === 1 && o !== 11 ? t : i >= 2 && i <= 4 && (o < 10 || o >= 20) ? n : l;
}
function wt() {
  xm();
  function e(n, l) {
    return Ft.translations[n] ?? l;
  }
  function t(n, l, i, o, s) {
    const a = Ft.translations[`${n}_one`] ?? i, r = Ft.translations[`${n}_few`] ?? o, c = Ft.translations[`${n}_many`] ?? s;
    return Ft.lang === "ru" ? Cm(l, a, r, c) : l === 1 ? a : c;
  }
  return { t: e, tPlural: t, state: /* @__PURE__ */ kl(Ft) };
}
const Am = { class: "fil-style-picker" }, Mm = {
  key: 0,
  class: "fil-style-selected-bar"
}, km = { class: "fil-chip-text" }, Fm = ["onClick"], Lm = { class: "fil-style-cats" }, Im = ["onClick"], Dm = { class: "fil-style-search-wrap" }, Pm = ["placeholder", "aria-label"], Rm = ["title"], Nm = { class: "fil-style-grid" }, Tm = ["title", "onClick"], Em = { class: "fil-style-tile-preview" }, Vm = ["src"], Om = {
  key: 1,
  class: "fil-style-tile-placeholder"
}, $m = { class: "fil-style-tile-label" }, Bm = {
  key: 0,
  class: "fil-style-empty"
}, vl = "__all__", Hm = /* @__PURE__ */ Ce({
  __name: "FilStylePicker",
  props: /* @__PURE__ */ Xe({
    styles: {},
    multi: { type: Boolean, default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Xe(["select"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const { t: n } = wt(), l = e, i = rt(e, "modelValue"), o = t;
    function s(S) {
      const M = S.indexOf("/");
      return M === -1 ? "" : S.slice(0, M);
    }
    function a(S) {
      const M = S.indexOf("/");
      return M === -1 ? S : S.slice(M + 1);
    }
    const r = Q(() => {
      const S = i.value || "";
      return !S || S === "None" ? [] : S.split("|").map((M) => M.trim()).filter((M) => M && M !== "None");
    }), c = Q(() => new Set(r.value));
    function u(S) {
      return c.value.has(S);
    }
    const d = Q(() => {
      const S = /* @__PURE__ */ new Set(), M = [];
      for (const b of l.styles) {
        const v = s(b);
        v && !S.has(v) && (S.add(v), M.push(v));
      }
      return M;
    }), m = /* @__PURE__ */ se(vl), g = /* @__PURE__ */ se(""), p = Q(() => {
      const S = g.value.trim().toLowerCase();
      return l.styles.filter((M) => m.value !== vl && s(M) !== m.value ? !1 : S ? M.toLowerCase().includes(S) : !0);
    });
    function _(S) {
      return ym[S];
    }
    function k(S) {
      const M = r.value.filter((v) => v !== S), b = M.length > 0 ? M.join(" | ") : "None";
      i.value = b, o("select", b);
    }
    function x(S) {
      if (l.multi) {
        let M;
        c.value.has(S) ? M = r.value.filter((v) => v !== S) : M = [...r.value, S];
        const b = M.length > 0 ? M.join(" | ") : "None";
        i.value = b, o("select", b);
      } else {
        const M = i.value === S ? "None" : S;
        i.value = M, o("select", M);
      }
    }
    return (S, M) => (C(), F("div", Am, [
      r.value.length > 0 ? (C(), F("div", Mm, [
        (C(!0), F(ue, null, De(r.value, (b) => (C(), F("span", {
          key: b,
          class: "fil-style-chip"
        }, [
          L("span", km, X(a(b)), 1),
          L("button", {
            type: "button",
            class: "fil-chip-remove",
            title: "Remove style",
            onClick: Vi((v) => k(b), ["stop"])
          }, "×", 8, Fm)
        ]))), 128))
      ])) : te("", !0),
      L("div", Lm, [
        L("button", {
          type: "button",
          class: he(["fil-style-cat", { active: m.value === vl }]),
          onClick: M[0] || (M[0] = (b) => m.value = vl)
        }, X(f(n)("fsp_all_categories", "All")), 3),
        (C(!0), F(ue, null, De(d.value, (b) => (C(), F("button", {
          key: b,
          type: "button",
          class: he(["fil-style-cat", { active: m.value === b }]),
          onClick: (v) => m.value = b
        }, X(b), 11, Im))), 128))
      ]),
      L("div", Dm, [
        st(L("input", {
          "onUpdate:modelValue": M[1] || (M[1] = (b) => g.value = b),
          type: "search",
          class: "fil-style-search",
          placeholder: f(n)("fsp_search_placeholder", "Search styles…"),
          "aria-label": f(n)("fsp_search_aria", "Search styles"),
          spellcheck: "false"
        }, null, 8, Pm), [
          [yt, g.value]
        ]),
        g.value.trim().length > 0 ? (C(), F("button", {
          key: 0,
          type: "button",
          class: "fil-style-search-clear",
          title: f(n)("fsp_clear_search", "Clear search"),
          onClick: M[2] || (M[2] = (b) => g.value = "")
        }, " × ", 8, Rm)) : te("", !0)
      ]),
      L("div", Nm, [
        (C(!0), F(ue, null, De(p.value, (b) => (C(), F("button", {
          key: b,
          type: "button",
          class: he(["fil-style-tile", { active: u(b) }]),
          title: b,
          onClick: (v) => x(b)
        }, [
          L("span", Em, [
            _(b) ? (C(), F("img", {
              key: 0,
              src: _(b),
              class: "fil-style-tile-img",
              alt: ""
            }, null, 8, Vm)) : (C(), F("span", Om, X(a(b).split(" ")[0]), 1))
          ]),
          L("span", $m, X(a(b)), 1)
        ], 10, Tm))), 128)),
        p.value.length === 0 ? (C(), F("div", Bm, "No matches")) : te("", !0)
      ])
    ]));
  }
}), Al = /* @__PURE__ */ ke(Hm, [["__scopeId", "data-v-41b37d4d"]]), Um = ["title"], Gm = {
  key: 0,
  class: "fil-w-toggle-label"
}, Wm = ["aria-checked", "aria-label", "disabled"], jm = /* @__PURE__ */ Ce({
  __name: "FilToggle",
  props: /* @__PURE__ */ Xe({
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
    const t = e, n = rt(e, "modelValue");
    function l() {
      t.disabled || (n.value = n.value === "ON" ? "OFF" : "ON");
    }
    return (i, o) => (C(), F("div", {
      class: he(["fil-w-toggle", { bare: e.bare }]),
      title: e.title
    }, [
      e.label ? (C(), F("label", Gm, X(e.label), 1)) : te("", !0),
      L("button", {
        type: "button",
        class: he(["fil-w-switch", { on: n.value === "ON" }]),
        role: "switch",
        "aria-checked": n.value === "ON",
        "aria-label": e.label,
        disabled: e.disabled,
        onClick: l
      }, [...o[0] || (o[0] = [
        L("span", { class: "fil-w-switch-thumb" }, null, -1)
      ])], 10, Wm)
    ], 10, Um));
  }
}), vn = /* @__PURE__ */ ke(jm, [["__scopeId", "data-v-9d64f497"]]), zm = { class: "fil-seed-root" }, Km = ["readonly", "title", "aria-label"], qm = { class: "fil-seed-actions" }, Xm = /* @__PURE__ */ Ce({
  __name: "Seed",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = wt(), l = Q({
      get: () => t.state.nodeState.mode ?? "random",
      set: (c) => {
        t.state.nodeState.mode = c;
      }
    }), i = Q({
      get: () => Number(t.state.nodeState.seed ?? 0) || 0,
      // Write the native seed widget directly, not just nodeState — a fixed
      // seed set only via nodeState can fail to reach the queued prompt.
      set: (c) => {
        t.state.nodeState.seed = c;
        const u = t.state.node ? oe(t.state.node, "seed") : null;
        u && (u.value = c);
      }
    });
    He(l, (c) => {
      const u = t.state.node, d = u ? oe(u, "control_after_generate") : null;
      d && (d.value = c === "fixed" ? "fixed" : "randomize");
    }, { immediate: !0 }), He(
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
        Et.warning(n("sd_no_last_seed", "No last-run seed recorded yet"));
        return;
      }
      i.value = d, l.value = "fixed";
    }
    function a() {
      const c = Math.floor(Math.random() * 1e9) & 2147483647;
      i.value = c, l.value = "fixed";
    }
    const r = Q({
      get: () => l.value === "fixed" ? `${i.value}` : "random",
      set: (c) => {
        const u = parseInt(String(c).replace(/[^0-9]/g, ""), 10);
        Number.isNaN(u) || (i.value = u, l.value = "fixed");
      }
    });
    return (c, u) => (C(), F("div", zm, [
      st(L("input", {
        "onUpdate:modelValue": u[0] || (u[0] = (d) => r.value = d),
        type: "text",
        class: "fil-seed-display",
        readonly: l.value === "random",
        title: l.value === "fixed" ? f(n)("sd_locked", "Locked seed") : f(n)("sd_auto_random", "Auto-random"),
        "aria-label": f(n)("sd_aria_seed_value", "Seed value")
      }, null, 8, Km), [
        [yt, r.value]
      ]),
      L("div", qm, [
        j(f(qe), {
          label: "🔀",
          variant: "standard",
          title: f(n)("sd_mode", "Random generates a new seed each run."),
          onClick: o
        }, null, 8, ["title"]),
        j(f(qe), {
          label: "♻️",
          variant: "standard",
          title: f(n)("sd_use_last", "Reuse the seed from the last executed run."),
          onClick: s
        }, null, 8, ["title"]),
        j(f(qe), {
          label: "🎲",
          variant: "accent",
          title: f(n)("sd_new_fixed", "Generate a new random fixed seed."),
          onClick: a
        }, null, 8, ["title"])
      ])
    ]));
  }
}), Ym = /* @__PURE__ */ ke(Xm, [["__scopeId", "data-v-d9d8deb9"]]), Jm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ym
}, Symbol.toStringTag, { value: "Module" })), Qm = { class: "picker-container" }, Zm = { class: "provider-tabs" }, eh = ["onClick"], th = { class: "tab-label" }, nh = {
  key: 0,
  class: "tab-badge"
}, lh = { class: "provider-status-bar" }, ih = { class: "status-info" }, oh = { class: "provider-name" }, sh = {
  key: 0,
  class: "status-badge loading"
}, ah = {
  key: 1,
  class: "status-badge error"
}, rh = {
  key: 2,
  class: "status-badge online"
}, uh = {
  key: 3,
  class: "age-label"
}, ch = { class: "filter-controls" }, dh = { class: "search-input-wrap" }, fh = ["placeholder"], ph = ["title"], mh = { class: "filter-segments" }, hh = { class: "models-list-wrapper" }, gh = {
  key: 0,
  class: "empty-state"
}, _h = {
  key: 1,
  class: "empty-state"
}, bh = ["aria-pressed", "onClick"], vh = { class: "model-main" }, yh = { class: "type-icon" }, wh = ["title"], Sh = { class: "model-tags" }, xh = {
  key: 0,
  class: "tag vision"
}, Ch = {
  key: 1,
  class: "tag text"
}, Ah = {
  key: 2,
  class: "tag local"
}, Mh = {
  key: 3,
  class: "tag free"
}, kh = {
  key: 4,
  class: "tag paid"
}, Fh = { class: "picker-footer" }, Lh = { class: "selection-summary" }, Ih = { key: 0 }, Dh = {
  key: 1,
  class: "muted"
}, Ph = { class: "footer-actions" }, ys = "fil_model_picker_view_mode", Rh = /* @__PURE__ */ Ce({
  __name: "ProviderModelPicker",
  props: {
    open: { type: Boolean, default: !1 },
    provider: { default: "ollama" },
    model: { default: "" }
  },
  emits: ["update:open", "select"],
  setup(e, { emit: t }) {
    const n = e, l = t, i = fo(), { t: o, tPlural: s } = wt(), a = /* @__PURE__ */ se(n.provider), r = /* @__PURE__ */ se(n.model), c = /* @__PURE__ */ se(""), u = /* @__PURE__ */ se("all"), d = /* @__PURE__ */ se("all"), m = /* @__PURE__ */ se(
      localStorage.getItem(ys) || "list"
    );
    function g(P) {
      m.value = P;
      try {
        localStorage.setItem(ys, P);
      } catch {
      }
    }
    const p = ["all", "vision", "text"], _ = Q(() => ({
      all: o("pmp_all_types", "All Types"),
      vision: o("pmp_tag_vision_opt", "👁 Vision"),
      text: o("pmp_tag_text_opt", "📝 Text")
    })), k = Q(() => ({
      all: o("pmp_all_tiers", "All Tiers"),
      local: o("pmp_tier_local", "💻 Local"),
      free: o("pmp_tier_free", "🆓 Free"),
      paid: o("pmp_tier_paid", "💎 Paid")
    })), x = ["list", "grid"], S = Q(() => ({
      list: o("pmp_view_list", "☰ List"),
      grid: o("pmp_view_grid", "⊞ Tiles")
    })), M = Q(
      () => a.value === "ollama" || a.value === "lmstudio" ? ["all", "local"] : ["all", "free", "paid"]
    );
    He(
      () => n.open,
      (P) => {
        P && (a.value = n.provider || "ollama", r.value = n.model || "", c.value = "", u.value = "all", d.value = "all", b());
      }
    );
    async function b(P = !1) {
      try {
        await i.loadModels(a.value, P);
      } catch (I) {
        Et.error(I instanceof Error ? I.message : String(I));
      }
    }
    function v(P) {
      a.value = P, c.value = "", d.value = "all";
      const I = i.modelsFor(P);
      I.length > 0 ? r.value = I[0] : r.value = "", b();
    }
    const y = Q(() => i.modelsFor(a.value)), T = Q(() => i.visionModelsFor(a.value)), W = Q(() => i.isLoading(a.value)), E = Q(() => i.probeState[a.value]), V = Q(() => i.cachedAgeLabel(a.value, o));
    function K(P, I) {
      return I === "ollama" || I === "lmstudio" ? "local" : P.toLowerCase().includes(":free") ? "free" : "paid";
    }
    function A(P) {
      return T.value.includes(P);
    }
    const O = Q(() => {
      let P = y.value;
      const I = c.value.trim().toLowerCase(), H = a.value;
      return I && (P = P.filter((me) => me.toLowerCase().includes(I))), u.value === "vision" ? P = P.filter((me) => A(me)) : u.value === "text" && (P = P.filter((me) => !A(me))), d.value !== "all" && (P = P.filter((me) => K(me, H) === d.value)), P;
    });
    function $(P) {
      r.value = P;
    }
    function R() {
      r.value && (l("select", { provider: a.value, model: r.value }), l("update:open", !1));
    }
    function N() {
      l("update:open", !1);
    }
    return (P, I) => (C(), Me(An, {
      open: e.open,
      width: "860px",
      title: f(o)("pmp_title", "🔌 Choose Provider & Model"),
      "onUpdate:open": I[6] || (I[6] = (H) => l("update:open", H)),
      onClose: N
    }, {
      default: Kt(() => [
        L("div", Qm, [
          L("div", Zm, [
            (C(!0), F(ue, null, De(f(bn), (H) => (C(), F("button", {
              key: H,
              type: "button",
              class: he(["tab-btn", { active: H === a.value }]),
              onClick: (me) => v(H)
            }, [
              j(Vt, {
                name: f(po)[H],
                size: 18
              }, null, 8, ["name"]),
              L("span", th, X(f(Ul)[H] ?? H), 1),
              f(i).modelsFor(H).length ? (C(), F("span", nh, X(f(i).modelsFor(H).length), 1)) : te("", !0)
            ], 10, eh))), 128))
          ]),
          L("div", lh, [
            L("div", ih, [
              L("span", oh, X(f(Ul)[a.value] ?? a.value), 1),
              W.value ? (C(), F("span", sh, "⏳ " + X(f(o)("pmp_loading", "Loading...")), 1)) : E.value && E.value.status && E.value.status !== "available" ? (C(), F("span", ah, " ⚠️ " + X(E.value.message || E.value.status), 1)) : (C(), F("span", rh, " ● " + X(f(o)("pmp_online", "Online")) + " (" + X(y.value.length) + " " + X(f(s)("prov_models", y.value.length, "model", "models", "models")) + ") ", 1)),
              V.value ? (C(), F("span", uh, X(f(o)("pmp_updated", "Updated")) + ": " + X(V.value), 1)) : te("", !0)
            ]),
            j(qe, {
              variant: "sm",
              label: f(o)("pmp_refresh", "↻ Refresh"),
              loading: W.value,
              title: f(o)("tt_refresh", "Reload models list"),
              onClick: I[0] || (I[0] = (H) => b(!0))
            }, null, 8, ["label", "loading", "title"])
          ]),
          L("div", ch, [
            L("div", dh, [
              j(Vt, {
                name: "search",
                size: 14,
                class: "search-icon"
              }),
              st(L("input", {
                "onUpdate:modelValue": I[1] || (I[1] = (H) => c.value = H),
                type: "text",
                class: "search-input",
                placeholder: f(o)("pmp_search", "Search models...")
              }, null, 8, fh), [
                [yt, c.value]
              ]),
              c.value ? (C(), F("button", {
                key: 0,
                type: "button",
                class: "clear-search",
                title: f(o)("tt_clear_search", "Clear search"),
                onClick: I[2] || (I[2] = (H) => c.value = "")
              }, "✕", 8, ph)) : te("", !0)
            ]),
            L("div", mh, [
              j(bt, {
                options: [...p],
                "option-labels": _.value,
                "model-value": u.value,
                "onUpdate:modelValue": I[3] || (I[3] = (H) => u.value = H)
              }, null, 8, ["options", "option-labels", "model-value"]),
              j(bt, {
                options: M.value,
                "option-labels": k.value,
                "model-value": d.value,
                "onUpdate:modelValue": I[4] || (I[4] = (H) => d.value = H)
              }, null, 8, ["options", "option-labels", "model-value"]),
              j(bt, {
                options: [...x],
                "option-labels": S.value,
                "model-value": m.value,
                "onUpdate:modelValue": I[5] || (I[5] = (H) => g(H))
              }, null, 8, ["options", "option-labels", "model-value"])
            ])
          ]),
          L("div", hh, [
            W.value && !y.value.length ? (C(), F("div", gh, [
              j(Cl, {
                text: f(o)("pmp_loading_provider", "Loading models from provider...")
              }, null, 8, ["text"])
            ])) : O.value.length ? (C(), F("div", {
              key: 2,
              class: he(["models-container", m.value])
            }, [
              (C(!0), F(ue, null, De(O.value, (H) => (C(), F("button", {
                key: H,
                type: "button",
                class: he(["model-card", { selected: H === r.value }]),
                "aria-pressed": H === r.value,
                onClick: (me) => $(H)
              }, [
                L("div", vh, [
                  L("span", yh, X(A(H) ? "👁" : "📝"), 1),
                  L("span", {
                    class: "model-name",
                    title: H
                  }, X(H), 9, wh)
                ]),
                L("div", Sh, [
                  A(H) ? (C(), F("span", xh, X(f(o)("pmp_tag_vision", "Vision")), 1)) : (C(), F("span", Ch, X(f(o)("pmp_tag_text", "Text")), 1)),
                  K(H, a.value) === "local" ? (C(), F("span", Ah, X(f(o)("pmp_tag_local", "Local")), 1)) : K(H, a.value) === "free" ? (C(), F("span", Mh, X(f(o)("pmp_tag_free", "Free")), 1)) : (C(), F("span", kh, X(f(o)("pmp_tag_paid", "Paid")), 1))
                ])
              ], 10, bh))), 128))
            ], 2)) : (C(), F("div", _h, [
              L("span", null, X(f(o)("pmp_no_match", "No models matching criteria")), 1)
            ]))
          ]),
          L("div", Fh, [
            L("div", Lh, [
              r.value ? (C(), F("span", Ih, [
                Tl(X(f(o)("pmp_selected", "Selected")) + ": ", 1),
                L("strong", null, X(r.value), 1)
              ])) : (C(), F("span", Dh, X(f(o)("pmp_none_selected", "No model selected")), 1))
            ]),
            L("div", Ph, [
              j(qe, {
                label: f(o)("pmp_cancel", "Cancel"),
                title: f(o)("pmp_cancel_tt", "Close without changing the model"),
                onClick: N
              }, null, 8, ["label", "title"]),
              j(qe, {
                variant: "accent",
                label: f(o)("pmp_apply", "✔ Apply Selection"),
                title: f(o)("pmp_apply_tt", "Use the selected model"),
                disabled: !r.value,
                onClick: R
              }, null, 8, ["label", "title", "disabled"])
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["open", "title"]));
  }
}), Nh = /* @__PURE__ */ ke(Rh, [["__scopeId", "data-v-8dfe2da3"]]), Th = { class: "fil-provider-root" }, Eh = { class: "trigger-header" }, Vh = { class: "provider-badge" }, Oh = { class: "provider-title" }, $h = { class: "trigger-model" }, Bh = ["title"], Hh = 3e5, Uh = /* @__PURE__ */ Ce({
  __name: "ProviderLoader",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, n = fo(), { t: l } = wt(), i = /* @__PURE__ */ se(!1);
    function o(v, y) {
      return {
        get: () => t.state.nodeState[v] ?? y,
        set: (T) => {
          t.state.nodeState[v] = T;
        }
      };
    }
    const s = Q(() => String(o("provider", "ollama").get()));
    function a(v) {
      o("provider", "ollama").set(v), M();
    }
    const r = Q(() => String(o("model", "(loading...)").get()));
    function c(v) {
      o("model", "(loading...)").set(v), M();
    }
    const u = Q(() => Number(o("temperature", 0.7).get())), d = Q(() => Number(o("max_tokens", 0).get())), m = Q(() => Number(o("rate_limit_ms", 100).get())), g = Q(() => Number(o("max_image_side", 1024).get())), p = t.state, _ = Q(() => n.isLoading(s.value)), k = Q(() => n.probeState[s.value]), x = Q(() => n.cachedAgeLabel(s.value, l));
    let S = null;
    He(() => t.state.nodeState, () => {
    }, { deep: !0 });
    function M() {
      const v = t.state.node;
      if (!v) return;
      const y = oe(v, "model");
      if (!y) return;
      const T = n.modelsFor(s.value), W = T.length ? T : ["(no models)"];
      y.options && (y.options.values = W);
    }
    function b(v) {
      a(v.provider), c(v.model);
    }
    return In(async () => {
      n.loadDisplayNames();
      const v = n.modelsFor(s.value);
      if (v.length)
        r.value === "(loading...)" && c(v[0] ?? "(no models)"), M(), n.loadModels(s.value);
      else
        try {
          await n.loadModels(s.value);
          const y = n.modelsFor(s.value);
          r.value === "(loading...)" && c(y[0] ?? "(no models)"), M();
        } catch (y) {
          Et.error(y instanceof Error ? y.message : String(y));
        }
      S = setInterval(() => {
        n.loadModels(s.value, !0);
      }, Hh);
    }), ti(() => {
      S && clearInterval(S);
    }), (v, y) => (C(), F("div", Th, [
      L("button", {
        type: "button",
        class: "picker-trigger-btn",
        onClick: y[0] || (y[0] = (T) => i.value = !0)
      }, [
        L("div", Eh, [
          L("div", Vh, [
            j(f(Vt), {
              name: f(po)[s.value],
              size: 16
            }, null, 8, ["name"]),
            L("span", Oh, X(f(Ul)[s.value] ?? s.value), 1)
          ]),
          y[6] || (y[6] = L("span", { class: "open-icon" }, "⚙️ Choose", -1))
        ]),
        L("div", $h, [
          y[7] || (y[7] = L("span", { class: "model-label" }, "🧠 Model:", -1)),
          L("span", {
            class: "model-name",
            title: r.value
          }, X(r.value), 9, Bh)
        ])
      ]),
      _.value ? (C(), Me(f(Cl), {
        key: 0,
        text: f(l)("prov_loading_models", "Loading models…")
      }, null, 8, ["text"])) : k.value && k.value.status && k.value.status !== "available" ? (C(), Me(f(Cl), {
        key: 1,
        err: !0,
        text: k.value.message || k.value.status
      }, null, 8, ["text"])) : x.value ? (C(), Me(f(Cl), {
        key: 2,
        text: `${f(l)("prov_models_updated", "Models updated")}: ${x.value}`
      }, null, 8, ["text"])) : te("", !0),
      j(f(Ee), {
        "model-value": u.value,
        min: 0,
        max: 2,
        step: 0.05,
        label: f(l)("lbl_temperature", "🌡️ Temperature"),
        title: f(l)("tt_temperature", "Sampling temperature — higher is more creative, lower is more deterministic."),
        "onUpdate:modelValue": y[1] || (y[1] = (T) => f(p).nodeState.temperature = T)
      }, null, 8, ["model-value", "label", "title"]),
      j(f(Ee), {
        "model-value": d.value,
        min: 0,
        max: 65536,
        step: 1,
        label: f(l)("lbl_max_tokens", "🔢 Max tokens"),
        title: f(l)("tt_provider_max_tokens", "Maximum tokens in the response. 0 = provider default (no explicit limit)."),
        "onUpdate:modelValue": y[2] || (y[2] = (T) => f(p).nodeState.max_tokens = T)
      }, null, 8, ["model-value", "label", "title"]),
      j(f(Ee), {
        "model-value": m.value,
        min: 0,
        max: 5e3,
        step: 10,
        label: f(l)("lbl_rate_limit", "⏱️ Rate limit"),
        title: f(l)("tt_rate_limit", "Minimum delay between requests to this provider, to avoid rate limiting."),
        "onUpdate:modelValue": y[3] || (y[3] = (T) => f(p).nodeState.rate_limit_ms = T)
      }, null, 8, ["model-value", "label", "title"]),
      j(f(Ee), {
        "model-value": g.value,
        min: 128,
        max: 4096,
        step: 64,
        label: f(l)("lbl_max_image_side", "🖼️ Max image side"),
        title: f(l)("tt_max_image_side", "Images are downscaled so their longest side does not exceed this value."),
        "onUpdate:modelValue": y[4] || (y[4] = (T) => f(p).nodeState.max_image_side = T)
      }, null, 8, ["model-value", "label", "title"]),
      j(Nh, {
        open: i.value,
        "onUpdate:open": y[5] || (y[5] = (T) => i.value = T),
        provider: s.value,
        model: r.value,
        onSelect: b
      }, null, 8, ["open", "provider", "model"])
    ]));
  }
}), Gh = /* @__PURE__ */ ke(Uh, [["__scopeId", "data-v-f8a6b931"]]), Wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gh
}, Symbol.toStringTag, { value: "Module" })), mo = {
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
}, jh = { class: "fil-scanner-root" }, zh = {
  key: 0,
  class: "fil-w-row fil-single-style-block"
}, Kh = { style: { display: "flex", gap: "4px", "margin-bottom": "3px" } }, qh = { style: { display: "flex", "margin-bottom": "6px" } }, Xh = { class: "fil-unified-style-modal" }, Yh = { class: "fil-style-tab-bar" }, Jh = ["onClick"], Qh = { class: "fil-tab-icon" }, Zh = { class: "fil-tab-title" }, eg = {
  key: 0,
  class: "fil-tab-badge"
}, tg = { class: "fil-style-picker-body" }, ng = { class: "fil-style-modal-footer" }, lg = ["title"], ig = ["value", "placeholder", "readonly", "onInput"], og = { class: "fil-scanner-seed-row" }, sg = ["value", "readonly", "aria-label", "title"], ag = ["title"], rg = ["title"], ug = ["title"], cg = /* @__PURE__ */ Ce({
  __name: "OpticScanner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = wt(), l = mo.FiLOpticScanner, i = (l == null ? void 0 : l.inputs.required) ?? [], o = {
      prompt: ["scn_section_prompt", "📝 Prompt/Text"],
      agent: ["scn_section_agent", "🕵️ Agent"],
      model: ["scn_section_model", "🧠 Model"],
      output: ["scn_section_output", "📤 Output"],
      advanced: ["scn_section_advanced", "🎨 Style"],
      actions: ["scn_section_actions", "⚡ Actions"]
    };
    function s(J) {
      const ne = o[J];
      return ne ? n(ne[0], ne[1]) : J.toUpperCase();
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
    function r(J) {
      const ne = a[J.name];
      return ne ? n(ne, J.tooltip || "") : J.tooltip || "";
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
    function u(J) {
      if (J.label) return J.label;
      const ne = c[J.name] || "", pe = J.name.replace(/_/g, " ").replace(/\b\w/g, (Ie) => Ie.toUpperCase());
      return ne ? `${ne} ${pe}` : pe;
    }
    const d = ["prompt", "negative_prompt", "custom_style"], m = /* @__PURE__ */ new Set(["prompt", "negative_prompt"]), g = {};
    function p(J, ne) {
      g[J] = ne ?? null;
    }
    function _(J) {
      return d.includes(J);
    }
    function k(J) {
      return m.has(J);
    }
    const x = /* @__PURE__ */ se({});
    function S(J) {
      return !!x.value[J];
    }
    function M(J) {
      return S(J.name) ? n("scn_field_linked_tt", "Driven by the connected input — disconnect it to type here.") : r(J);
    }
    function b() {
      const J = t.state.node;
      if (!J) return;
      Dd(J, d.map((pe) => ({ name: pe, el: g[pe] })));
      const ne = Pd(J, d);
      d.some((pe) => ne[pe] !== !!x.value[pe]) && (x.value = ne);
    }
    let v = 0;
    In(() => {
      b(), v = window.setInterval(b, 300);
    }), rl(() => {
      v && window.clearInterval(v);
    });
    const y = /* @__PURE__ */ se(!1), T = /* @__PURE__ */ se("photo_style");
    function W(J) {
      return !J || J === "None" ? [] : J.split("|").map((pe) => pe.trim()).filter((pe) => pe && pe !== "None").map((pe) => {
        const Ie = pe.indexOf("/");
        return (Ie === -1 ? pe : pe.slice(Ie + 1)).replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}\s]+/gu, "").trim();
      });
    }
    const E = Q(() => {
      const J = [], ne = W(String(N("photo_style", "None"))), pe = W(String(N("nsfw_photo_style", "None"))), Ie = W(String(N("art_style", "None"))), de = W(String(N("nsfw_art_style", "None")));
      for (const h of ne) J.push(`📷 ${h}`);
      for (const h of pe) J.push(`🔞 ${h}`);
      for (const h of Ie) J.push(`🎨 ${h}`);
      for (const h of de) J.push(`🔞 ${h}`);
      return J.length === 0 ? n("scn_style_button_none", "🎨 Style: None") : J.join(" | ");
    }), V = [
      { id: "photo_style", icon: "📷", labelKey: "scn_style_photo_label", fallback: "Photo" },
      { id: "nsfw_photo_style", icon: "🔞", labelKey: "scn_style_nsfw_photo_label", fallback: "NSFW Photo" },
      { id: "art_style", icon: "🎨", labelKey: "scn_style_art_label", fallback: "Art" },
      { id: "nsfw_art_style", icon: "🔞", labelKey: "scn_style_nsfw_art_label", fallback: "NSFW Art" }
    ];
    function K(J) {
      return String(N(J, "None") || "None");
    }
    function A(J, ne) {
      P(J, ne);
    }
    function O(J) {
      const ne = i.find((pe) => pe.name === J);
      return (ne == null ? void 0 : ne.values) || [];
    }
    function $() {
      P("photo_style", "None"), P("nsfw_photo_style", "None"), P("art_style", "None"), P("nsfw_art_style", "None");
    }
    const R = Q(() => {
      var ne;
      const J = {};
      for (const pe of i) (J[ne = pe.section || "_"] ?? (J[ne] = [])).push(pe);
      return J;
    });
    function N(J, ne = "") {
      return t.state.nodeState[J] ?? t.state.initialValues[J] ?? ne;
    }
    function P(J, ne) {
      t.state.nodeState[J] = ne;
    }
    const I = /* @__PURE__ */ new Set(["agent", "output", "advanced"]);
    function H(J) {
      const ne = t.state.ui[`collapsed_${J}`];
      return ne === void 0 ? I.has(J) : !!ne;
    }
    function me(J, ne) {
      t.state.ui[`collapsed_${J}`] = ne;
    }
    He(() => t.state.nodeState, () => {
    }, { deep: !0 });
    const Se = Q({
      get: () => t.state.nodeState.seed_mode ?? "random",
      set: (J) => {
        t.state.nodeState.seed_mode = J;
      }
    }), Pe = Q({
      get: () => Number(t.state.nodeState.seed ?? -1) || -1,
      // Write the native seed widget directly, not just nodeState: the
      // createSyncedNodeState mirror doesn't reach the seed widget the same way
      // control_after_generate expects, so a fixed seed set only via nodeState
      // can fail to reach the queued prompt. Direct assignment sticks.
      set: (J) => {
        t.state.nodeState.seed = J;
        const ne = t.state.node ? oe(t.state.node, "seed") : null;
        ne && (ne.value = J);
      }
    }), cl = Q(() => Se.value === "fixed" ? `${Pe.value}` : "random");
    He(Se, (J) => {
      const ne = t.state.node, pe = ne ? oe(ne, "control_after_generate") : null;
      pe && (pe.value = J === "fixed" ? "fixed" : "randomize");
    }, { immediate: !0 });
    function ri() {
      Se.value = "random";
    }
    function ui() {
      const J = t.state.node, ne = J ? oe(J, "seed") : null, pe = ne && Number.isFinite(Number(ne.value)) ? Number(ne.value) : t.state.lastRunSeed;
      if (pe == null || !Number.isFinite(pe)) {
        Et.warning(n("sd_no_last_seed", "No last-run seed recorded yet"));
        return;
      }
      Pe.value = pe, Se.value = "fixed";
    }
    function Jt() {
      const J = Math.floor(Math.random() * 1e9) & 2147483647;
      Pe.value = J, Se.value = "fixed";
    }
    return (J, ne) => (C(), F("div", jh, [
      (C(!0), F(ue, null, De(R.value, (pe, Ie) => (C(), F(ue, { key: Ie }, [
        Ie !== "styles" ? (C(), F("div", {
          key: 0,
          class: he(["fil-section-block", { "is-growable": Ie === "prompt" }])
        }, [
          Ie !== "_" && Ie !== "prompt" ? (C(), Me(f(lt), {
            key: 0,
            title: s(String(Ie)),
            "model-value": H(String(Ie)),
            "onUpdate:modelValue": (de) => me(String(Ie), de)
          }, null, 8, ["title", "model-value", "onUpdate:modelValue"])) : te("", !0),
          (C(!0), F(ue, null, De(pe, (de) => (C(), F(ue, {
            key: de.name
          }, [
            de.name === "response_format" ? (C(), F("div", zh, [
              L("div", Kh, [
                j(f(qe), {
                  variant: "full",
                  label: E.value,
                  onClick: ne[0] || (ne[0] = (h) => y.value = !0),
                  style: { flex: "2" }
                }, null, 8, ["label"])
              ]),
              L("div", qh, [
                j(f(qe), {
                  variant: "standard",
                  label: "🧹 Clear Style",
                  onClick: $,
                  style: { flex: "1" }
                })
              ]),
              j(f(An), {
                open: y.value,
                title: f(n)("scn_unified_style_title", "🎨 Style Selection"),
                width: "680px",
                "onUpdate:open": ne[2] || (ne[2] = (h) => y.value = h)
              }, {
                default: Kt(() => [
                  L("div", Xh, [
                    L("div", Yh, [
                      (C(), F(ue, null, De(V, (h) => L("button", {
                        key: h.id,
                        type: "button",
                        class: he(["fil-style-tab-btn", { active: T.value === h.id, "has-value": K(h.id) !== "None" }]),
                        onClick: (w) => T.value = h.id
                      }, [
                        L("span", Qh, X(h.icon), 1),
                        L("span", Zh, X(f(n)(h.labelKey, h.fallback)), 1),
                        K(h.id) !== "None" ? (C(), F("span", eg, "✓")) : te("", !0)
                      ], 10, Jh)), 64))
                    ]),
                    L("div", tg, [
                      j(f(Al), {
                        styles: O(T.value),
                        "model-value": K(T.value),
                        multi: !0,
                        onSelect: ne[1] || (ne[1] = (h) => A(T.value, h))
                      }, null, 8, ["styles", "model-value"])
                    ]),
                    L("div", ng, [
                      L("button", {
                        type: "button",
                        class: "fil-clear-styles-btn",
                        onClick: $
                      }, X(f(n)("scn_clear_all_styles", "🗑️ Clear all styles")), 1)
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["open", "title"])
            ])) : te("", !0),
            st(L("div", {
              class: he(["fil-w-row", { "is-growable": k(de.name), "is-linked": _(de.name) && S(de.name) }]),
              title: _(de.name) ? M(de) : r(de)
            }, [
              de.name === "prompt" || de.name === "negative_prompt" || de.name === "custom_style" ? (C(), F("textarea", {
                key: 0,
                ref_for: !0,
                ref: (h) => p(de.name, h),
                value: String(N(de.name, "")),
                class: he(["fil-scanner-textarea", { "is-linked": S(de.name) }]),
                placeholder: S(de.name) ? f(n)("scn_field_linked", "🔗 Text comes from the connected node") : u(de),
                readonly: S(de.name),
                rows: "2",
                onInput: (h) => P(de.name, h.target.value)
              }, null, 42, ig)) : de.kind === "chip_grid" ? (C(), Me(f(bs), {
                key: 1,
                options: de.values || [],
                "model-value": String(N(de.name, "")),
                columns: de.columns ?? 3,
                "onUpdate:modelValue": (h) => P(de.name, h)
              }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"])) : de.kind === "chip_list" ? (C(), Me(f(kp), {
                key: 2,
                options: de.values || [],
                "model-value": N(de.name, null),
                searchable: de.searchable ?? !0,
                "onUpdate:modelValue": (h) => P(de.name, h)
              }, null, 8, ["options", "model-value", "searchable", "onUpdate:modelValue"])) : de.kind === "segmented" ? (C(), Me(f(bt), {
                key: 3,
                options: de.options || [],
                "model-value": String(N(de.name, "")),
                label: u(de),
                "onUpdate:modelValue": (h) => P(de.name, h)
              }, null, 8, ["options", "model-value", "label", "onUpdate:modelValue"])) : (C(), Me(f(bs), {
                key: 4,
                options: de.values || [],
                "model-value": String(N(de.name, "")),
                columns: de.columns ?? 3,
                "onUpdate:modelValue": (h) => P(de.name, h)
              }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"]))
            ], 10, lg), [
              [vc, Ie === "_" || Ie === "prompt" || !H(String(Ie))]
            ])
          ], 64))), 128))
        ], 2)) : te("", !0)
      ], 64))), 128)),
      L("div", og, [
        L("input", {
          value: cl.value,
          type: "text",
          class: he(["fil-scanner-seed-field", { "is-random": Se.value === "random" }]),
          readonly: Se.value === "random",
          "aria-label": f(n)("sd_aria_seed_value", "Seed value"),
          title: Se.value === "fixed" ? f(n)("scn_seed_locked", "Locked seed") : f(n)("scn_seed_auto_random", "Auto-random — a new seed is generated each run"),
          onInput: ne[3] || (ne[3] = (pe) => Pe.value = Number(pe.target.value) || 0)
        }, null, 42, sg),
        L("button", {
          type: "button",
          class: he(["fil-scanner-seed-pill", { active: Se.value === "random" }]),
          title: f(n)("scn_seed_mode_tt", "Random generates a new seed each run."),
          onClick: ri
        }, X(f(n)("scn_seed_random", "Random")), 11, ag),
        L("button", {
          type: "button",
          class: "fil-scanner-seed-pill",
          title: t.state.lastRunSeed != null ? `${f(n)("scn_seed_use_last_prefix", "Reuse the last run's seed:")} ${t.state.lastRunSeed}` : f(n)("scn_seed_use_last_tt", "Reuse the seed from the last executed run."),
          onClick: ui
        }, X(f(n)("scn_seed_use_last", "Use last")), 9, rg),
        L("button", {
          type: "button",
          class: "fil-scanner-seed-pill fil-scanner-seed-pill-accent",
          title: f(n)("scn_seed_new_fixed_tt", "Generate a new random fixed seed."),
          onClick: Jt
        }, X(f(n)("scn_seed_new_fixed", "New fixed")), 9, ug)
      ])
    ]));
  }
}), dg = /* @__PURE__ */ ke(cg, [["__scopeId", "data-v-43c316b1"]]), fg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dg
}, Symbol.toStringTag, { value: "Module" })), pg = { class: "fil-cleaner-root" }, mg = /* @__PURE__ */ Ce({
  __name: "NeuroCleaner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = wt(), l = Q(() => [
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
    return (s, a) => (C(), F("div", pg, [
      (C(!0), F(ue, null, De(l.value, (r) => (C(), Me(f(vn), {
        key: r.name,
        "model-value": i(r.name, r.defaultOn) ? "ON" : "OFF",
        label: r.label,
        "onUpdate:modelValue": (c) => o(r.name, c === "ON")
      }, null, 8, ["model-value", "label", "onUpdate:modelValue"]))), 128))
    ]));
  }
}), hg = /* @__PURE__ */ ke(mg, [["__scopeId", "data-v-3d68b764"]]), gg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hg
}, Symbol.toStringTag, { value: "Module" })), _g = { class: "fil-up-root" }, bg = { class: "fil-up-row fil-up-row-overlap" }, vg = ["title"], yg = ["title"], wg = { class: "fil-up-row" }, Sg = ["title"], xg = ["title"], Cg = /* @__PURE__ */ Ce({
  __name: "UpscaleTileCalc",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = wt(), l = ["Low VRAM", "Balanced", "High VRAM", "Max Quality", "Ultra Quality"], i = {
      "Low VRAM": "🪫 Low VRAM",
      Balanced: "⚖️ Balanced",
      "High VRAM": "🔋 High VRAM",
      "Max Quality": "💎 Max Quality",
      "Ultra Quality": "👑 Ultra Quality"
    };
    function o(M, b) {
      return Q({
        get: () => Number(t.state.nodeState[M] ?? t.state.initialValues[M] ?? b) || b,
        set: (v) => {
          t.state.nodeState[M] = v;
        }
      });
    }
    function s(M, b) {
      return Q({
        get: () => t.state.nodeState[M] ?? t.state.initialValues[M] ?? b ? "ON" : "OFF",
        set: (v) => {
          t.state.nodeState[M] = v === "ON";
        }
      });
    }
    const a = o("upscale_factor", 2), r = o("tile_size", 1024), c = o("tile_overlap", 64), u = o("manual_tile_cols", 0), d = o("manual_tile_rows", 0), m = s("auto_overlap", !1), g = s("auto_mode", !1), p = s("non_square_tiles", !1), _ = s("auto_fix_thin_edges", !1), k = Q({
      get: () => String(t.state.nodeState.auto_profile ?? t.state.initialValues.auto_profile ?? "Balanced"),
      set: (M) => {
        t.state.nodeState.auto_profile = M;
      }
    });
    function x(M) {
      return !!t.state.ui[`collapsed_${M}`];
    }
    function S(M, b) {
      t.state.ui[`collapsed_${M}`] = b;
    }
    return He(() => t.state.nodeState, () => {
    }, { deep: !0 }), (M, b) => (C(), F("div", _g, [
      j(f(Ee), {
        "model-value": f(a),
        min: 0.1,
        max: 8,
        step: 0.25,
        label: f(n)("lbl_upscale_factor", "🔍 Upscale factor"),
        title: f(n)("utc_factor", "Upscale multiplier."),
        "onUpdate:modelValue": b[0] || (b[0] = (v) => a.value = v)
      }, null, 8, ["model-value", "label", "title"]),
      j(f(lt), {
        title: f(n)("utc_section_auto", "⚙️ Auto / advanced"),
        "model-value": x("auto"),
        "onUpdate:modelValue": b[1] || (b[1] = (v) => S("auto", v))
      }, null, 8, ["title", "model-value"]),
      x("auto") ? te("", !0) : (C(), F(ue, { key: 0 }, [
        j(f(vn), {
          "model-value": f(g),
          label: f(n)("lbl_full_auto", "🤖 Full auto"),
          title: f(n)("utc_auto_mode", "Pick tile size/overlap automatically from the selected VRAM profile."),
          "onUpdate:modelValue": b[2] || (b[2] = (v) => g.value = v)
        }, null, 8, ["model-value", "label", "title"]),
        f(g) === "ON" ? (C(), Me(f(bt), {
          key: 0,
          options: [...l],
          "option-labels": i,
          "model-value": k.value,
          label: f(n)("lbl_auto_profile", "🎚️ Auto profile"),
          title: f(n)("utc_auto_profile", "VRAM/quality profile used when Full Auto is on."),
          "onUpdate:modelValue": b[3] || (b[3] = (v) => k.value = v)
        }, null, 8, ["options", "model-value", "label", "title"])) : te("", !0),
        f(g) === "OFF" ? (C(), F(ue, { key: 1 }, [
          L("div", bg, [
            L("label", {
              class: "fil-w-label",
              title: f(n)("utc_tile_size", "Base tile size.")
            }, X(f(n)("lbl_tile_size", "🔲 Tile size")), 9, vg),
            j(f(rn), {
              modelValue: f(r),
              "onUpdate:modelValue": b[4] || (b[4] = (v) => /* @__PURE__ */ fe(r) ? r.value = v : null),
              min: 64,
              max: 2048,
              step: 64
            }, null, 8, ["modelValue"]),
            L("label", {
              class: "fil-w-label",
              title: f(n)("utc_overlap", "Tile overlap.")
            }, X(f(n)("lbl_overlap", "🧵 Overlap")), 9, yg),
            j(f(rn), {
              modelValue: f(c),
              "onUpdate:modelValue": b[5] || (b[5] = (v) => /* @__PURE__ */ fe(c) ? c.value = v : null),
              min: 0,
              max: 512,
              step: 8,
              disabled: f(m) === "ON"
            }, null, 8, ["modelValue", "disabled"]),
            j(f(vn), {
              bare: "",
              "model-value": f(m),
              label: f(n)("lbl_auto_overlap", "🧵 Auto"),
              title: f(n)("utc_auto_overlap", "Derive overlap automatically from tile size (~12.5%) instead of the fixed value above."),
              "onUpdate:modelValue": b[6] || (b[6] = (v) => m.value = v)
            }, null, 8, ["model-value", "label", "title"])
          ]),
          L("div", wg, [
            L("label", {
              class: "fil-w-label",
              title: f(n)("utc_manual_cols", "Force this many tile columns. 0 = compute from tile size.")
            }, X(f(n)("lbl_manual_cols", "↔️ Cols")), 9, Sg),
            j(f(rn), {
              modelValue: f(u),
              "onUpdate:modelValue": b[7] || (b[7] = (v) => /* @__PURE__ */ fe(u) ? u.value = v : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"]),
            L("label", {
              class: "fil-w-label",
              title: f(n)("utc_manual_rows", "Force this many tile rows. 0 = compute from tile size.")
            }, X(f(n)("lbl_manual_rows", "↕️ Rows")), 9, xg),
            j(f(rn), {
              modelValue: f(d),
              "onUpdate:modelValue": b[8] || (b[8] = (v) => /* @__PURE__ */ fe(d) ? d.value = v : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"])
          ]),
          j(f(vn), {
            "model-value": f(_),
            label: f(n)("lbl_auto_fix_edges", "🩹 Auto-fix thin edges"),
            title: f(n)("utc_auto_fix_edges", "Shrink tile_size to the next standard size instead of just warning when the grid would leave a thin edge tile."),
            "onUpdate:modelValue": b[9] || (b[9] = (v) => _.value = v)
          }, null, 8, ["model-value", "label", "title"])
        ], 64)) : te("", !0)
      ], 64)),
      j(f(vn), {
        "model-value": f(p),
        label: f(n)("lbl_non_square", "📐 Non-square tiles"),
        title: f(n)("utc_non_square", "Allow rectangular tiles instead of forcing square ones."),
        "onUpdate:modelValue": b[10] || (b[10] = (v) => p.value = v)
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), Ag = /* @__PURE__ */ ke(Cg, [["__scopeId", "data-v-57658737"]]), nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ag
}, Symbol.toStringTag, { value: "Module" })), Mg = { class: "fil-hrf-root" }, kg = {
  key: 2,
  class: "fil-hrf-seed-row"
}, Fg = ["value", "readonly", "aria-label", "title"], Lg = ["title"], Ig = ["title"], Dg = ["title"], Pg = /* @__PURE__ */ Ce({
  __name: "HiResFix",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = wt();
    function l(P, I) {
      return Q({
        get: () => Number(t.state.nodeState[P] ?? t.state.initialValues[P] ?? I) || I,
        set: (H) => {
          t.state.nodeState[P] = H;
        }
      });
    }
    function i(P, I) {
      return Q({
        get: () => String(t.state.nodeState[P] ?? t.state.initialValues[P] ?? I),
        set: (H) => {
          t.state.nodeState[P] = H;
        }
      });
    }
    function o(P, I) {
      return Q({
        get: () => t.state.nodeState[P] ?? t.state.initialValues[P] ?? I ? "ON" : "OFF",
        set: (H) => {
          t.state.nodeState[P] = H === "ON";
        }
      });
    }
    function s(P, I) {
      var Pe;
      const H = t.state.node, me = H ? oe(H, P) : null, Se = (Pe = me == null ? void 0 : me.options) == null ? void 0 : Pe.values;
      return Array.isArray(Se) && Se.length ? Se : I;
    }
    const a = i("upscale_type", "latent"), r = i("hires_ckpt_name", "(use same)"), c = i("latent_upscaler", "nearest-exact"), u = i("pixel_upscaler", ""), d = l("upscale_by", 1.25), m = o("use_same_seed", !0), g = l("denoise", 0.56), p = l("hires_steps", 12), _ = l("iterations", 1), k = o("use_controlnet", !1), x = i("control_net_name", ""), S = l("strength", 1), M = i("preprocessor", "none"), b = Q(() => s("hires_ckpt_name", ["(use same)"])), v = ["nearest-exact", "bilinear", "area", "bicubic", "bislerp"], y = Q(() => s("pixel_upscaler", ["(none)"])), T = Q(() => s("control_net_name", ["(none)"])), W = Q(() => s("preprocessor", ["none", "canny"])), E = Q(() => a.value === "latent"), V = Q(() => a.value === "pixel" || a.value === "both"), K = Q({
      get: () => t.state.nodeState.seed_mode ?? "random",
      set: (P) => {
        t.state.nodeState.seed_mode = P;
      }
    }), A = Q({
      get: () => Number(t.state.nodeState.seed ?? 0) || 0,
      // Write the native seed widget directly, not just nodeState: the
      // createSyncedNodeState mirror doesn't reach the seed widget (its value is
      // a prototype accessor tied to control_after_generate's linked-widget
      // machinery, unlike the plain numeric widgets), so a fixed seed set only
      // via nodeState never reaches the queued prompt. Direct assignment sticks.
      set: (P) => {
        t.state.nodeState.seed = P;
        const I = t.state.node ? oe(t.state.node, "seed") : null;
        I && (I.value = P);
      }
    }), O = Q(() => K.value === "fixed" ? `${A.value}` : "random");
    He([m, K], ([P, I]) => {
      const H = t.state.node, me = H ? oe(H, "control_after_generate") : null;
      me && (me.value = P === "ON" || I === "fixed" ? "fixed" : "randomize");
    }, { immediate: !0 });
    function $() {
      K.value = "random";
    }
    function R() {
      const P = t.state.node, I = P ? oe(P, "seed") : null, H = I && Number.isFinite(Number(I.value)) ? Number(I.value) : t.state.lastRunSeed;
      if (H == null || !Number.isFinite(H)) {
        Et.warning(n("sd_no_last_seed", "No last-run seed recorded yet"));
        return;
      }
      A.value = H, K.value = "fixed";
    }
    function N() {
      const P = Math.floor(Math.random() * 1e9) & 2147483647;
      A.value = P, K.value = "fixed";
    }
    return (P, I) => (C(), F("div", Mg, [
      j(f(bt), {
        options: ["latent", "pixel", "both"],
        "option-labels": { latent: "🌀 latent", pixel: "🖼️ pixel", both: "🔀 both" },
        "model-value": f(a),
        label: f(n)("lbl_upscale_type", "⬆️ Upscale type"),
        title: f(n)("hrf_upscale_type", "Upscale in latent space, pixel space, or both."),
        "onUpdate:modelValue": I[0] || (I[0] = (H) => a.value = H)
      }, null, 8, ["model-value", "label", "title"]),
      E.value ? (C(), Me(f(bl), {
        key: 0,
        options: v,
        "model-value": f(c),
        label: f(n)("lbl_latent_up", "🌀 Latent upscaler"),
        title: f(n)("hrf_latent_up", "Latent upscale method."),
        "onUpdate:modelValue": I[1] || (I[1] = (H) => c.value = H)
      }, null, 8, ["model-value", "label", "title"])) : te("", !0),
      V.value ? (C(), Me(f(bl), {
        key: 1,
        options: y.value,
        "model-value": f(u),
        label: f(n)("lbl_pixel_up", "🖼️ Pixel upscaler"),
        title: f(n)("hrf_pixel_up", "Pixel upscale model (from upscale_models)."),
        "onUpdate:modelValue": I[2] || (I[2] = (H) => u.value = H)
      }, null, 8, ["options", "model-value", "label", "title"])) : te("", !0),
      j(f(bl), {
        options: b.value,
        "model-value": f(r),
        label: f(n)("lbl_hires_ckpt", "📦 Hires checkpoint"),
        title: f(n)("hrf_ckpt", "Checkpoint for the hires pass. (use same) reuses the base model."),
        "onUpdate:modelValue": I[3] || (I[3] = (H) => r.value = H)
      }, null, 8, ["options", "model-value", "label", "title"]),
      j(f(Ee), {
        "model-value": f(d),
        min: 0.01,
        max: 8,
        step: 0.05,
        label: f(n)("lbl_upscale_by", "🔍 Upscale by"),
        title: f(n)("hrf_upscale_by", "Upscale multiplier."),
        "onUpdate:modelValue": I[4] || (I[4] = (H) => d.value = H)
      }, null, 8, ["model-value", "label", "title"]),
      j(f(Ee), {
        "model-value": f(g),
        min: 0,
        max: 1,
        step: 0.01,
        label: f(n)("lbl_hrf_denoise", "💧 Denoise"),
        title: f(n)("hrf_denoise", "Denoise strength for the hires re-sample."),
        "onUpdate:modelValue": I[5] || (I[5] = (H) => g.value = H)
      }, null, 8, ["model-value", "label", "title"]),
      j(f(rn), {
        modelValue: f(p),
        "onUpdate:modelValue": I[6] || (I[6] = (H) => /* @__PURE__ */ fe(p) ? p.value = H : null),
        min: 1,
        max: 1e4,
        step: 1,
        label: f(n)("lbl_hires_steps", "🪜 Hires steps"),
        title: f(n)("hrf_steps", "Steps for the hires re-sample.")
      }, null, 8, ["modelValue", "label", "title"]),
      j(f(rn), {
        modelValue: f(_),
        "onUpdate:modelValue": I[7] || (I[7] = (H) => /* @__PURE__ */ fe(_) ? _.value = H : null),
        min: 0,
        max: 5,
        step: 1,
        label: f(n)("lbl_iterations", "🔁 Iterations"),
        title: f(n)("hrf_iterations", "How many upscale+resample passes to run.")
      }, null, 8, ["modelValue", "label", "title"]),
      j(f(bt), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "♻️ same seed", OFF: "🎲 own" },
        "model-value": f(m),
        label: f(n)("lbl_use_same_seed", "🌱 Seed source"),
        title: f(n)("hrf_same_seed", "Reuse the samplers seed for the hires pass."),
        "onUpdate:modelValue": I[8] || (I[8] = (H) => m.value = H)
      }, null, 8, ["model-value", "label", "title"]),
      f(m) === "OFF" ? (C(), F("div", kg, [
        L("input", {
          value: O.value,
          type: "text",
          class: he(["fil-hrf-seed-field", { "is-random": K.value === "random" }]),
          readonly: K.value === "random",
          "aria-label": f(n)("hrf_aria_seed_value", "Hires seed value"),
          title: K.value === "fixed" ? f(n)("hrf_seed_locked", "Locked hires seed") : f(n)("hrf_seed_auto_random", "Auto-random — a new hires seed is generated each run"),
          onInput: I[9] || (I[9] = (H) => A.value = Number(H.target.value) || 0)
        }, null, 42, Fg),
        L("button", {
          type: "button",
          class: he(["fil-hrf-seed-pill", { active: K.value === "random" }]),
          title: f(n)("hrf_seed_mode_tt", "Random generates a new hires seed each run."),
          onClick: $
        }, X(f(n)("hrf_seed_random", "Random")), 11, Lg),
        L("button", {
          type: "button",
          class: "fil-hrf-seed-pill",
          title: t.state.lastRunSeed != null ? `${f(n)("hrf_seed_use_last_prefix", "Reuse the last run's hires seed:")} ${t.state.lastRunSeed}` : f(n)("hrf_seed_use_last_tt", "Reuse the hires seed from the last executed run."),
          onClick: R
        }, X(f(n)("hrf_seed_use_last", "Use last")), 9, Ig),
        L("button", {
          type: "button",
          class: "fil-hrf-seed-pill fil-hrf-seed-pill-accent",
          title: f(n)("hrf_seed_new_fixed_tt", "Generate a new random fixed hires seed."),
          onClick: N
        }, X(f(n)("hrf_seed_new_fixed", "New fixed")), 9, Dg)
      ])) : te("", !0),
      j(f(bt), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "🕹️ ON", OFF: "OFF" },
        "model-value": f(k),
        label: f(n)("lbl_use_cn", "🕹️ Use ControlNet"),
        title: f(n)("hrf_use_cn", "Guide the hires pass with a ControlNet. Tile ControlNets work without a preprocessor."),
        "onUpdate:modelValue": I[10] || (I[10] = (H) => k.value = H)
      }, null, 8, ["model-value", "label", "title"]),
      f(k) === "ON" ? (C(), F(ue, { key: 3 }, [
        j(f(bl), {
          options: T.value,
          "model-value": f(x),
          label: f(n)("lbl_cn_name", "🧩 ControlNet model"),
          title: f(n)("hrf_cn_name", "ControlNet model to apply."),
          "onUpdate:modelValue": I[11] || (I[11] = (H) => x.value = H)
        }, null, 8, ["options", "model-value", "label", "title"]),
        j(f(Ee), {
          "model-value": f(S),
          min: 0,
          max: 10,
          step: 0.01,
          label: f(n)("lbl_cn_strength", "💪 Strength"),
          title: f(n)("hrf_cn_strength", "ControlNet strength."),
          "onUpdate:modelValue": I[12] || (I[12] = (H) => S.value = H)
        }, null, 8, ["model-value", "label", "title"]),
        j(f(bt), {
          options: W.value,
          "option-labels": { none: "🚫 none", canny: "🪞 canny" },
          "model-value": f(M),
          label: f(n)("lbl_cn_preproc", "🧪 Preprocessor"),
          title: f(n)("hrf_cn_preproc", "Preprocess the ControlNet hint image. 'none' feeds the raw upscaled image (right for tile ControlNets)."),
          "onUpdate:modelValue": I[13] || (I[13] = (H) => M.value = H)
        }, null, 8, ["options", "model-value", "label", "title"])
      ], 64)) : te("", !0)
    ]));
  }
}), Rg = /* @__PURE__ */ ke(Pg, [["__scopeId", "data-v-2a443f87"]]), Ng = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rg
}, Symbol.toStringTag, { value: "Module" })), Tg = { class: "fil-style-mixer-root" }, Eg = /* @__PURE__ */ Ce({
  __name: "StyleMixer",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = wt(), l = mo.FiLStyleMixer, i = (l == null ? void 0 : l.inputs.required.find(($) => $.name === "fusion_mode")) || (l == null ? void 0 : l.inputs.optional.find(($) => $.name === "fusion_mode")), o = Q(
      () => {
        var $;
        return ($ = i == null ? void 0 : i.values) != null && $.length ? i.values : ["Weighted Stack (Fast)"];
      }
    ), s = Q(() => ({
      "Weighted Stack (Fast)": n("sm_fusion_fast", "⚡ Fast Stack"),
      "Smart LLM Fusion (Gen-Mix)": n("sm_fusion_smart", "🧬 Smart LLM Fusion")
    }));
    function a($, R) {
      return Q({
        get: () => t.state.nodeState[$] ?? R,
        set: (N) => {
          t.state.nodeState[$] = N;
          const P = t.state.node ? oe(t.state.node, $) : null;
          P && (P.value = N);
        }
      });
    }
    const r = a("fusion_mode", "Weighted Stack (Fast)"), c = a("style_1", "(None)"), u = a("weight_1", 1), d = a("style_2", "(None)"), m = a("weight_2", 0.5), g = a("style_3", "(None)"), p = a("weight_3", 0.3), _ = a("img_weight_1", 0.8), k = a("img_weight_2", 0.6), x = a("img_weight_3", 0.4), S = a("img_weight_4", 0.2), M = /* @__PURE__ */ se(!1), b = /* @__PURE__ */ se(!1), v = /* @__PURE__ */ se(!1), y = Q(() => t.state.ui.slotVersion ?? 0);
    function T($) {
      y.value;
      const R = t.state.node;
      if (!(R != null && R._allInputs)) return !1;
      const N = R._allInputs.find((P) => P.name === $);
      return !!(N && N.link != null);
    }
    const W = Q(() => T("image_2")), E = Q(() => T("image_3"));
    function V($) {
      var N;
      if (!t.state.node) return [];
      const R = oe(t.state.node, $);
      return ((N = R == null ? void 0 : R.options) == null ? void 0 : N.values) || (R == null ? void 0 : R.values) || [];
    }
    function K($, R) {
      if (!$ || $ === "(None)" || $ === "None") return `${R}: ${n("sm_none", "(None)")}`;
      const N = $.indexOf("/"), P = N === -1 ? $ : $.slice(N + 1);
      return `${R}: ${P}`;
    }
    function A($) {
      return !!t.state.ui[`collapsed_${$}`];
    }
    function O($, R) {
      t.state.ui[`collapsed_${$}`] = R;
    }
    return ($, R) => (C(), F("div", Tg, [
      j(f(lt), {
        title: f(n)("sm_section_fusion", "🔀 Fusion Mode"),
        "model-value": A("fusion"),
        "onUpdate:modelValue": R[0] || (R[0] = (N) => O("fusion", N))
      }, null, 8, ["title", "model-value"]),
      A("fusion") ? te("", !0) : (C(), Me(f(bt), {
        key: 0,
        modelValue: f(r),
        "onUpdate:modelValue": R[1] || (R[1] = (N) => /* @__PURE__ */ fe(r) ? r.value = N : null),
        options: o.value,
        "option-labels": s.value,
        title: f(n)("sm_fusion_tt", "Fast Stack just weights the descriptions. Smart Fusion asks the Vision LLM to synthesize one prompt.")
      }, null, 8, ["modelValue", "options", "option-labels", "title"])),
      j(f(lt), {
        title: f(n)("sm_section_style_1", "🎨 Primary Style (Style 1)"),
        "model-value": A("style1"),
        "onUpdate:modelValue": R[2] || (R[2] = (N) => O("style1", N))
      }, null, 8, ["title", "model-value"]),
      A("style1") ? te("", !0) : (C(), F(ue, { key: 1 }, [
        j(f(qe), {
          variant: "full",
          label: K(f(c), f(n)("sm_style_1", "Style 1")),
          onClick: R[3] || (R[3] = (N) => M.value = !0)
        }, null, 8, ["label"]),
        j(f(Ee), {
          modelValue: f(u),
          "onUpdate:modelValue": R[4] || (R[4] = (N) => /* @__PURE__ */ fe(u) ? u.value = N : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: f(n)("sm_style_1_weight", "Style 1 Weight")
        }, null, 8, ["modelValue", "label"]),
        j(f(An), {
          open: M.value,
          title: f(n)("sm_pick_style_1", "Select Primary Style 1"),
          width: "680px",
          "onUpdate:open": R[6] || (R[6] = (N) => M.value = N)
        }, {
          default: Kt(() => [
            j(f(Al), {
              styles: V("style_1"),
              "model-value": f(c),
              onSelect: R[5] || (R[5] = (N) => {
                c.value = N, M.value = !1;
              })
            }, null, 8, ["styles", "model-value"])
          ]),
          _: 1
        }, 8, ["open", "title"])
      ], 64)),
      j(f(lt), {
        title: f(n)("sm_section_style_2", "🧪 Secondary Style (Style 2)"),
        "model-value": A("style2"),
        "onUpdate:modelValue": R[7] || (R[7] = (N) => O("style2", N))
      }, null, 8, ["title", "model-value"]),
      A("style2") ? te("", !0) : (C(), F(ue, { key: 2 }, [
        j(f(qe), {
          variant: "full",
          label: K(f(d), f(n)("sm_style_2", "Style 2")),
          onClick: R[8] || (R[8] = (N) => b.value = !0)
        }, null, 8, ["label"]),
        j(f(Ee), {
          modelValue: f(m),
          "onUpdate:modelValue": R[9] || (R[9] = (N) => /* @__PURE__ */ fe(m) ? m.value = N : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: f(n)("sm_style_2_weight", "Style 2 Weight")
        }, null, 8, ["modelValue", "label"]),
        j(f(An), {
          open: b.value,
          title: f(n)("sm_pick_style_2", "Select Secondary Style 2"),
          width: "680px",
          "onUpdate:open": R[11] || (R[11] = (N) => b.value = N)
        }, {
          default: Kt(() => [
            j(f(Al), {
              styles: V("style_2"),
              "model-value": f(d),
              onSelect: R[10] || (R[10] = (N) => {
                d.value = N, b.value = !1;
              })
            }, null, 8, ["styles", "model-value"])
          ]),
          _: 1
        }, 8, ["open", "title"])
      ], 64)),
      j(f(lt), {
        title: f(n)("sm_section_style_3", "✨ Tertiary Style (Style 3)"),
        "model-value": A("style3"),
        "onUpdate:modelValue": R[12] || (R[12] = (N) => O("style3", N))
      }, null, 8, ["title", "model-value"]),
      A("style3") ? te("", !0) : (C(), F(ue, { key: 3 }, [
        j(f(qe), {
          variant: "full",
          label: K(f(g), f(n)("sm_style_3", "Style 3")),
          onClick: R[13] || (R[13] = (N) => v.value = !0)
        }, null, 8, ["label"]),
        j(f(Ee), {
          modelValue: f(p),
          "onUpdate:modelValue": R[14] || (R[14] = (N) => /* @__PURE__ */ fe(p) ? p.value = N : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: f(n)("sm_style_3_weight", "Style 3 Weight")
        }, null, 8, ["modelValue", "label"]),
        j(f(An), {
          open: v.value,
          title: f(n)("sm_pick_style_3", "Select Tertiary Style 3"),
          width: "680px",
          "onUpdate:open": R[16] || (R[16] = (N) => v.value = N)
        }, {
          default: Kt(() => [
            j(f(Al), {
              styles: V("style_3"),
              "model-value": f(g),
              onSelect: R[15] || (R[15] = (N) => {
                g.value = N, v.value = !1;
              })
            }, null, 8, ["styles", "model-value"])
          ]),
          _: 1
        }, 8, ["open", "title"])
      ], 64)),
      j(f(lt), {
        title: f(n)("sm_section_image_1", "🖼️ Image 1 Influence"),
        "model-value": A("image1"),
        "onUpdate:modelValue": R[17] || (R[17] = (N) => O("image1", N))
      }, null, 8, ["title", "model-value"]),
      A("image1") ? te("", !0) : (C(), Me(f(Ee), {
        key: 4,
        modelValue: f(_),
        "onUpdate:modelValue": R[18] || (R[18] = (N) => /* @__PURE__ */ fe(_) ? _.value = N : null),
        min: 0,
        max: 1,
        step: 0.05,
        label: f(n)("sm_image_1_weight", "Image 1 Weight")
      }, null, 8, ["modelValue", "label"])),
      j(f(lt), {
        title: f(n)("sm_section_image_2", "🖼️ Image 2 Influence"),
        "model-value": A("image2"),
        "onUpdate:modelValue": R[19] || (R[19] = (N) => O("image2", N))
      }, null, 8, ["title", "model-value"]),
      A("image2") ? te("", !0) : (C(), Me(f(Ee), {
        key: 5,
        modelValue: f(k),
        "onUpdate:modelValue": R[20] || (R[20] = (N) => /* @__PURE__ */ fe(k) ? k.value = N : null),
        min: 0,
        max: 1,
        step: 0.05,
        label: f(n)("sm_image_2_weight", "Image 2 Weight")
      }, null, 8, ["modelValue", "label"])),
      W.value ? (C(), F(ue, { key: 6 }, [
        j(f(lt), {
          title: f(n)("sm_section_image_3", "🖼️ Image 3 Influence"),
          "model-value": A("image3"),
          "onUpdate:modelValue": R[21] || (R[21] = (N) => O("image3", N))
        }, null, 8, ["title", "model-value"]),
        A("image3") ? te("", !0) : (C(), Me(f(Ee), {
          key: 0,
          modelValue: f(x),
          "onUpdate:modelValue": R[22] || (R[22] = (N) => /* @__PURE__ */ fe(x) ? x.value = N : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: f(n)("sm_image_3_weight", "Image 3 Weight")
        }, null, 8, ["modelValue", "label"]))
      ], 64)) : te("", !0),
      E.value ? (C(), F(ue, { key: 7 }, [
        j(f(lt), {
          title: f(n)("sm_section_image_4", "🖼️ Image 4 Influence"),
          "model-value": A("image4"),
          "onUpdate:modelValue": R[23] || (R[23] = (N) => O("image4", N))
        }, null, 8, ["title", "model-value"]),
        A("image4") ? te("", !0) : (C(), Me(f(Ee), {
          key: 0,
          modelValue: f(S),
          "onUpdate:modelValue": R[24] || (R[24] = (N) => /* @__PURE__ */ fe(S) ? S.value = N : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: f(n)("sm_image_4_weight", "Image 4 Weight")
        }, null, 8, ["modelValue", "label"]))
      ], 64)) : te("", !0)
    ]));
  }
}), Vg = /* @__PURE__ */ ke(Eg, [["__scopeId", "data-v-6e95ae42"]]), Og = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vg
}, Symbol.toStringTag, { value: "Module" })), $g = { class: "fil-color-wizard-root" }, Bg = { class: "fil-cw-presets-block" }, Hg = { class: "fil-cw-presets-title" }, Ug = { class: "fil-cw-presets-grid" }, Gg = ["title"], Wg = ["title"], jg = ["title"], zg = ["title"], Kg = { class: "fil-cw-slider-group" }, qg = /* @__PURE__ */ Ce({
  __name: "ColorWizard",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = wt(), l = mo.FiLColorWizard, i = (l == null ? void 0 : l.inputs.required.find((g) => g.name === "method")) || (l == null ? void 0 : l.inputs.optional.find((g) => g.name === "method")), o = Q(
      () => {
        var g;
        return ((g = i == null ? void 0 : i.values) != null && g.length ? i.values : ["Full Auto"]).map((p) => ({ value: p }));
      }
    );
    function s(g, p) {
      return Q({
        get: () => t.state.nodeState[g] ?? p,
        set: (_) => {
          t.state.nodeState[g] = _;
          const k = t.state.node ? oe(t.state.node, g) : null;
          k && (k.value = _);
        }
      });
    }
    const a = s("method", "Full Auto"), r = s("strength", 0.8), c = s("temperature", 0), u = s("tint", 0), d = s("preserve_skin", !1);
    function m(g) {
      g === "warm" ? (a.value = "Full Auto", c.value = 0.35, u.value = 0, r.value = 0.8, d.value = !0) : g === "cool" ? (a.value = "Full Auto", c.value = -0.35, u.value = 0.15, r.value = 0.85, d.value = !1) : g === "skin" ? (a.value = "White Patch", c.value = 0.05, u.value = 0, r.value = 0.75, d.value = !0) : g === "contrast" && (a.value = "LAB Enhance", c.value = 0, u.value = 0, r.value = 0.9, d.value = !1);
    }
    return (g, p) => (C(), F("div", $g, [
      L("div", Bg, [
        L("div", Hg, X(f(n)("cw_presets", "⚡ Quick Presets")), 1),
        L("div", Ug, [
          L("button", {
            type: "button",
            class: "fil-cw-preset-btn warm",
            title: f(n)("cw_preset_warm_tt", "Warm Sunny Tone"),
            onClick: p[0] || (p[0] = (_) => m("warm"))
          }, X(f(n)("cw_preset_warm", "☀️ Warm Sun")), 9, Gg),
          L("button", {
            type: "button",
            class: "fil-cw-preset-btn cool",
            title: f(n)("cw_preset_cool_tt", "Cool Sci-Fi Cyberpunk Tone"),
            onClick: p[1] || (p[1] = (_) => m("cool"))
          }, X(f(n)("cw_preset_cool", "🧊 Cool Sci-Fi")), 9, Wg),
          L("button", {
            type: "button",
            class: "fil-cw-preset-btn skin",
            title: f(n)("cw_preset_skin_tt", "Natural Skin Preservation"),
            onClick: p[2] || (p[2] = (_) => m("skin"))
          }, X(f(n)("cw_preset_skin", "👤 Skin Protect")), 9, jg),
          L("button", {
            type: "button",
            class: "fil-cw-preset-btn contrast",
            title: f(n)("cw_preset_contrast_tt", "Punchy LAB Contrast"),
            onClick: p[3] || (p[3] = (_) => m("contrast"))
          }, X(f(n)("cw_preset_contrast", "⚡ Contrast")), 9, zg)
        ])
      ]),
      j(f(lt), {
        title: f(n)("cw_section_method", "⚙️ Method")
      }, null, 8, ["title"]),
      j(f(Bp), {
        modelValue: f(a),
        "onUpdate:modelValue": p[4] || (p[4] = (_) => /* @__PURE__ */ fe(a) ? a.value = _ : null),
        options: o.value,
        title: f(n)("tt_cw_method", "Correction algorithm.")
      }, null, 8, ["modelValue", "options", "title"]),
      j(f(lt), {
        title: f(n)("cw_section_adjust", "🎛️ Adjustments")
      }, null, 8, ["title"]),
      L("div", Kg, [
        j(f(Ee), {
          modelValue: f(r),
          "onUpdate:modelValue": p[5] || (p[5] = (_) => /* @__PURE__ */ fe(r) ? r.value = _ : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: f(n)("cw_strength", "Correction Strength"),
          title: f(n)("tt_cw_strength", "Correction strength (0 = no change).")
        }, null, 8, ["modelValue", "label", "title"]),
        j(f(Ee), {
          modelValue: f(c),
          "onUpdate:modelValue": p[6] || (p[6] = (_) => /* @__PURE__ */ fe(c) ? c.value = _ : null),
          min: -1,
          max: 1,
          step: 0.05,
          label: f(n)("cw_temperature", "Temperature (Warm/Cool)"),
          title: f(n)("tt_cw_temperature", "Colour temperature.")
        }, null, 8, ["modelValue", "label", "title"]),
        j(f(Ee), {
          modelValue: f(u),
          "onUpdate:modelValue": p[7] || (p[7] = (_) => /* @__PURE__ */ fe(u) ? u.value = _ : null),
          min: -1,
          max: 1,
          step: 0.05,
          label: f(n)("cw_tint", "Tint (Green/Magenta)"),
          title: f(n)("tt_cw_tint", "Colour tint.")
        }, null, 8, ["modelValue", "label", "title"])
      ]),
      j(f(vn), {
        "model-value": f(d) ? "ON" : "OFF",
        label: f(n)("cw_preserve_skin", "🛡️ Preserve Skin Tones"),
        title: f(n)("tt_cw_preserve_skin", "Preserve skin tones."),
        "onUpdate:modelValue": p[8] || (p[8] = (_) => d.value = _ === "ON")
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), Xg = /* @__PURE__ */ ke(qg, [["__scopeId", "data-v-3228ee08"]]), Yg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xg
}, Symbol.toStringTag, { value: "Module" })), Jg = {
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
}, Qg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HELP_DEFAULTS: Jg
}, Symbol.toStringTag, { value: "Module" }));
//# sourceMappingURL=fil_design_imagemind.js.map
