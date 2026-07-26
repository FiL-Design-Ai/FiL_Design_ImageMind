(function(){try{var s=document.createElement("style");s.textContent=".fil-color-picker[data-v-969386c1]{display:flex;flex-direction:column;gap:8px;padding:8px;width:176px;box-sizing:border-box}.fil-cp-sv[data-v-969386c1]{position:relative;width:100%;height:100px;border-radius:4px;cursor:crosshair;touch-action:none}.fil-cp-sv-white[data-v-969386c1]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to right,#fff,#fff0);border-radius:4px}.fil-cp-sv-black[data-v-969386c1]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to top,#000,#0000);border-radius:4px}.fil-cp-sv-thumb[data-v-969386c1]{position:absolute;width:10px;height:10px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hue[data-v-969386c1]{position:relative;width:100%;height:12px;border-radius:6px;background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red);cursor:pointer;touch-action:none}.fil-cp-hue-thumb[data-v-969386c1]{position:absolute;top:50%;width:12px;height:12px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hex-row[data-v-969386c1]{display:flex;align-items:center;gap:6px}.fil-cp-swatch[data-v-969386c1]{width:22px;height:22px;border-radius:4px;border:1px solid rgba(255,255,255,.25);flex-shrink:0}.fil-cp-hex-input[data-v-969386c1]{flex:1;min-width:0;height:22px;box-sizing:border-box;border-radius:4px;border:1px solid rgba(255,255,255,.2);background:#00000040;color:#f2f2f2;font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:12px;padding:0 6px;outline:none}.fil-cp-hex-input[data-v-969386c1]:focus{border-color:#ffffff80}.fil-cp-presets[data-v-969386c1]{display:grid;grid-template-columns:repeat(5,1fr);gap:4px}.fil-color-swatch[data-v-969386c1]{width:24px;height:24px;border-radius:4px;border:2px solid transparent;background:var(--swatch);cursor:pointer;transition:border-color .08s,transform .08s;outline:none;box-sizing:border-box}.fil-color-swatch[data-v-969386c1]:hover{border-color:#ffffff80;transform:scale(1.15)}.fil-color-swatch.is-active[data-v-969386c1]{border-color:#fff;box-shadow:0 0 0 1px var(--swatch)}.fil-node-shell[data-v-cb614e72]{position:relative;width:100%;box-sizing:border-box;height:100%}.fil-icon[data-v-dfb78d9f]{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;line-height:0}.fil-icon[data-v-dfb78d9f] svg{width:100%;height:100%}.fil-modal-backdrop[data-v-0b20f2bd]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000;display:flex;align-items:center;justify-content:center;background:#0000008c;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.fil-modal-panel[data-v-0b20f2bd]{width:90%;max-height:80vh;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:10px;box-shadow:0 20px 60px #00000080;display:flex;flex-direction:column;overflow:hidden}.fil-modal-header[data-v-0b20f2bd]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08)}.fil-modal-title[data-v-0b20f2bd]{font-size:14px;font-weight:600;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-close[data-v-0b20f2bd]{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;border:none;background:transparent;color:var(--fil-muted, rgba(255, 255, 255, .5));cursor:pointer;transition:background .08s,color .08s}.fil-modal-close[data-v-0b20f2bd]:hover{background:#ffffff14;color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-modal-body[data-v-0b20f2bd]{flex:1;overflow-y:auto;padding:16px}.fil-modal-enter-active[data-v-0b20f2bd],.fil-modal-leave-active[data-v-0b20f2bd]{transition:opacity .15s ease}.fil-modal-enter-from[data-v-0b20f2bd],.fil-modal-leave-to[data-v-0b20f2bd]{opacity:0}.fil-modal-enter-active .fil-modal-panel[data-v-0b20f2bd],.fil-modal-leave-active .fil-modal-panel[data-v-0b20f2bd]{transition:transform .15s ease}.fil-modal-enter-from .fil-modal-panel[data-v-0b20f2bd],.fil-modal-leave-to .fil-modal-panel[data-v-0b20f2bd]{transform:scale(.95) translateY(8px)}.fil-help-title[data-v-536c1547]{margin:0 0 12px;font-size:16px;font-weight:700;color:var(--fil-text, rgba(255,255,255,.9))}.fil-help-body[data-v-536c1547]{margin:0 0 12px;font-size:13px;line-height:1.6;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet[data-v-536c1547]{display:flex;gap:6px;align-items:flex-start;margin-bottom:6px;font-size:13px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-bullet>span[data-v-536c1547]{flex:1}.fil-help-table[data-v-536c1547]{width:100%;border-collapse:collapse;margin-top:8px;font-size:12px}.fil-help-table th[data-v-536c1547],.fil-help-table td[data-v-536c1547]{text-align:left;padding:6px 10px;border-bottom:1px solid rgba(255,255,255,.06)}.fil-help-table th[data-v-536c1547]{font-weight:600;color:var(--fil-text, rgba(255,255,255,.85))}.fil-help-table td[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.6))}.fil-help-code[data-v-536c1547]{background:#0000004d;border-radius:6px;padding:12px;margin-top:10px;overflow-x:auto;font-size:12px;color:var(--fil-text-secondary, rgba(255,255,255,.65))}.fil-help-empty[data-v-536c1547]{color:var(--fil-text-secondary, rgba(255,255,255,.4));font-size:13px}.fil-w-btn[data-v-1c6537e0]{box-sizing:border-box;padding:var(--fil-row-pad);border-radius:6px;background:#ffffff0d;border:1px solid rgba(255,255,255,.14);color:var(--fil-text, rgba(255, 255, 255, .85));font-family:ui-sans-serif,system-ui,sans-serif;font-size:12px;cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;display:inline-flex;align-items:center;justify-content:center;gap:6px}.fil-w-btn[data-v-1c6537e0]:hover:not(:disabled){background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #fff)}.fil-w-btn[data-v-1c6537e0]:active{transform:translateY(1px)}.fil-w-btn[data-v-1c6537e0]:disabled{opacity:.4;cursor:default}.fil-w-btn-accent[data-v-1c6537e0]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #fff)}.fil-w-btn-danger[data-v-1c6537e0]{color:var(--fil-danger, #ef6666)}.fil-w-btn-danger[data-v-1c6537e0]:hover:not(:disabled){background:var(--fil-danger, #ef6666);border-color:var(--fil-danger, #ef6666);color:#fff}.fil-w-btn-sm[data-v-1c6537e0]{padding:4px 8px;font-size:11px}.fil-w-btn-full[data-v-1c6537e0]{width:100%;display:block}.fil-w-btn-icon[data-v-1c6537e0]{display:inline-flex;align-items:center;justify-content:center;gap:5px}.fil-w-btn-glyph[data-v-1c6537e0] svg{width:14px;height:14px}.fil-w-btn.is-flashing[data-v-1c6537e0],.fil-w-btn.is-flashing[data-v-1c6537e0]:hover{background:var(--fil-ok, #62c987);border-color:var(--fil-ok, #62c987);color:#fff}.fil-w-btn.is-loading[data-v-1c6537e0]{cursor:wait}.fil-w-btn[data-v-1c6537e0]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-btn-spinner[data-v-1c6537e0]{display:inline-block;width:12px;height:12px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:fil-w-spin-1c6537e0 .6s linear infinite}@keyframes fil-w-spin-1c6537e0{to{transform:rotate(360deg)}}.fil-pm-root[data-v-329149a3]{display:flex;flex-direction:column;gap:12px;padding:4px 0}.fil-pm-card[data-v-329149a3]{background:#ffffff08;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:12px}.fil-pm-header[data-v-329149a3]{display:flex;align-items:center;gap:8px;margin-bottom:10px}.fil-pm-card--collapsed[data-v-329149a3]{padding:8px 12px}.fil-pm-card--collapsed .fil-pm-header[data-v-329149a3]{margin-bottom:0}.fil-pm-header--clickable[data-v-329149a3]{cursor:pointer}.fil-pm-header--clickable:hover .fil-pm-name[data-v-329149a3]{color:var(--fil-accent, #7c5cfc)}.fil-pm-chevron[data-v-329149a3]{display:inline-flex;align-items:center;color:#fff6;transition:transform .12s ease}.fil-pm-chevron--open[data-v-329149a3]{transform:rotate(90deg)}.fil-pm-icon[data-v-329149a3]{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px}.fil-pm-name[data-v-329149a3]{font-weight:600;font-size:14px;color:var(--fil-text, #f2f2f2)}.fil-pm-disp[data-v-329149a3]{font-size:11px;color:#ffffff80}.fil-pm-status[data-v-329149a3]{margin-left:auto;display:inline-flex;align-items:center;gap:5px;font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#fff6;white-space:nowrap}.fil-pm-dot[data-v-329149a3]{width:8px;height:8px;border-radius:50%;background:currentColor;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 22%,transparent)}.fil-pm-status--connected[data-v-329149a3]{color:var(--fil-success, #4ade80)}.fil-pm-status--configured[data-v-329149a3]{color:var(--fil-warning, #fbbf24)}.fil-pm-status--off[data-v-329149a3]{color:#ffffff4d}.fil-pm-fields[data-v-329149a3]{display:flex;flex-direction:column;gap:8px;margin-bottom:10px}.fil-pm-field[data-v-329149a3]{display:flex;flex-direction:column;gap:3px}.fil-pm-field-label[data-v-329149a3]{font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#ffffff80}.fil-pm-input[data-v-329149a3]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,monospace;font-size:13px;outline:none;transition:border-color .08s}.fil-pm-input[data-v-329149a3]:focus{border-color:var(--fil-accent)}.fil-pm-input.fil-pm-has-val[data-v-329149a3]{border-color:var(--fil-muted, #555)}.fil-pm-actions[data-v-329149a3]{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}.fil-pm-models[data-v-329149a3]{display:flex;flex-wrap:wrap;gap:4px}.fil-pm-model-tag[data-v-329149a3]{display:inline-flex;align-items:center;gap:3px;background:#ffffff12;border-radius:4px;padding:2px 6px;font-size:11px;color:#ffffffbf;white-space:nowrap}.fil-pm-vision-badge[data-v-329149a3]{font-size:10px;line-height:1}.fil-pm-err[data-v-329149a3]{font-size:11px;color:var(--fil-danger, #ef6666);margin-top:4px}.fil-pm-age[data-v-329149a3]{font-size:10px;color:#fff6;align-self:center}.fil-w-chips[data-v-9c6ca5d1]{display:grid;gap:5px;width:100%}.fil-w-chip[data-v-9c6ca5d1]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-9c6ca5d1]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-9c6ca5d1]{background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-accent);border-color:var(--fil-accent);font-weight:500;box-shadow:0 0 8px color-mix(in srgb,var(--fil-accent) 55%,transparent)}.fil-w-chip.disabled[data-v-9c6ca5d1]{opacity:.5;cursor:default}.fil-w-chip[data-v-9c6ca5d1]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chiplist[data-v-3c9e19df]{display:flex;flex-direction:column;gap:5px;width:100%}.fil-w-search[data-v-3c9e19df]{box-sizing:border-box;width:100%;padding:5px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:11px;outline:none}.fil-w-search[data-v-3c9e19df]:focus{border-color:var(--fil-accent)}.fil-w-search[data-v-3c9e19df]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-chip-scroll[data-v-3c9e19df]{display:grid;gap:3px;max-height:200px;overflow-y:auto;overflow-x:hidden;padding-right:2px}.fil-w-chip-scroll[data-v-3c9e19df]::-webkit-scrollbar{width:5px}.fil-w-chip-scroll[data-v-3c9e19df]::-webkit-scrollbar-thumb{background:var(--fil-muted, #555);border-radius:3px}.fil-w-chip-scroll[data-v-3c9e19df]::-webkit-scrollbar-track{background:transparent}.fil-w-chip[data-v-3c9e19df]{box-sizing:border-box;background:var(--fil-panel-alt, #1d1d1d);border:1px solid var(--fil-muted, #444);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-3c9e19df]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-w-chip.active[data-v-3c9e19df]{background:var(--fil-accent);color:var(--fil-accent-ink, #fff);border-color:var(--fil-accent);font-weight:500}.fil-w-chip.disabled[data-v-3c9e19df]{opacity:.5;cursor:default}.fil-w-chip[data-v-3c9e19df]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chip-empty[data-v-3c9e19df]{padding:8px;text-align:center;color:var(--fil-muted, #666);font-size:11px}.fil-combo[data-v-82542923]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-combo-label[data-v-82542923]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-combo-trigger[data-v-82542923]{grid-column:2;width:100%;box-sizing:border-box;height:30px;display:flex;align-items:center;gap:6px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer;text-align:left;-moz-appearance:none;appearance:none;-webkit-appearance:none}.fil-combo-trigger.open[data-v-82542923],.fil-combo-trigger[data-v-82542923]:focus-visible{border-color:var(--fil-accent);outline:2px solid var(--fil-accent);outline-offset:1px}.fil-combo-trigger.disabled[data-v-82542923]{opacity:.5;cursor:default}.fil-combo-trigger-label[data-v-82542923]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-chevron[data-v-82542923]{font-size:9px;color:var(--fil-muted, rgba(255, 255, 255, .5));flex-shrink:0}.fil-combo-badge[data-v-82542923]{flex-shrink:0;font-size:9px;line-height:1;padding:2px 5px;border-radius:999px;background:var(--fil-accent);color:var(--fil-accent-ink, #fff);font-weight:600}.fil-combo-panel[data-v-82542923]{position:fixed;z-index:10001;box-sizing:border-box;background:var(--fil-panel, #1e1e2e);border:1px solid rgba(255,255,255,.12);border-radius:8px;box-shadow:0 12px 32px #0006;display:flex;flex-direction:column;overflow:hidden;padding:6px}.fil-combo-search[data-v-82542923]{box-sizing:border-box;width:100%;margin-bottom:6px;padding:6px 8px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:5px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-combo-search[data-v-82542923]:focus{border-color:var(--fil-accent)}.fil-combo-list[data-v-82542923]{display:flex;flex-direction:column;gap:2px;max-height:240px;overflow-y:auto}.fil-combo-option[data-v-82542923]{display:flex;align-items:center;gap:6px;width:100%;box-sizing:border-box;padding:6px 8px;border-radius:5px;border:none;background:transparent;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;text-align:left;cursor:pointer;outline:none}.fil-combo-option.active[data-v-82542923]{background:#ffffff14}.fil-combo-option.selected[data-v-82542923]{color:var(--fil-accent);font-weight:600}.fil-combo-option-label[data-v-82542923]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-empty[data-v-82542923]{padding:10px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-w-info[data-v-851660c1]{font-size:11px;line-height:1.5;color:#ffffff73;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.fil-w-info[data-ok][data-v-851660c1]{color:var(--fil-ok, #62c987)}.fil-w-info[data-err][data-v-851660c1]{color:var(--fil-danger, #ef6666)}.fil-w-numfield[data-v-2f843ba1]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-numfield.no-label[data-v-2f843ba1]{display:contents}.fil-w-numfield-label[data-v-2f843ba1]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-numfield:not(.no-label) .fil-w-num-wrap[data-v-2f843ba1]{grid-column:2}.fil-w-num-wrap[data-v-2f843ba1]{position:relative;width:100%;min-width:0}.fil-w-num[data-v-2f843ba1]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:7px 20px 7px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:14px;text-align:left;outline:none;transition:border-color .08s}.fil-w-num[data-v-2f843ba1]:focus{border-color:var(--fil-accent)}.fil-w-num[data-v-2f843ba1]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-num[data-v-2f843ba1]:disabled{opacity:.5}.fil-w-num-step[data-v-2f843ba1]{position:absolute;top:1px;right:1px;bottom:1px;width:17px;display:flex;flex-direction:column;border-left:1px solid var(--fil-muted, #3a3d40);overflow:hidden;border-radius:0 5px 5px 0}.fil-w-num-btn[data-v-2f843ba1]{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;border:none;background:transparent;color:var(--fil-muted, rgba(255, 255, 255, .55));font-size:7px;line-height:1;cursor:pointer;padding:0;transition:color .08s,background .08s}.fil-w-num-btn[data-v-2f843ba1]:last-child{border-top:1px solid var(--fil-muted, #3a3d40)}.fil-w-num-btn[data-v-2f843ba1]:hover:not(:disabled){color:var(--fil-accent);background:#ffffff12}.fil-w-num-btn[data-v-2f843ba1]:disabled{opacity:.3;cursor:default}.fil-w-section[data-v-4b760ea4]{box-sizing:border-box;width:100%;padding:var(--fil-row-pad);border:none;border-radius:5px;background:#ffffff0a;color:var(--fil-muted, rgba(255, 255, 255, .7));font-family:inherit;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;cursor:pointer;text-align:left;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s;display:flex;align-items:center;gap:6px}.fil-w-section[data-v-4b760ea4]:hover:not(:disabled){background:#ffffff14;color:#fff}.fil-w-section[data-v-4b760ea4]:disabled{cursor:default}.fil-w-section[data-v-4b760ea4]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-section-arrow[data-v-4b760ea4]{display:inline-block;width:8px;font-size:9px;color:var(--fil-accent)}.fil-w-segmented[data-v-765cf0ce]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-segmented-label[data-v-765cf0ce]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-pill[data-v-765cf0ce]{grid-column:2;display:flex;gap:0;min-width:0;background:#ffffff0f;border-radius:7px;padding:3px}.fil-w-pill.disabled[data-v-765cf0ce]{opacity:.5}.fil-w-seg[data-v-765cf0ce]{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center;padding:6px;border:none;border-radius:5px;background:transparent;font-family:inherit;font-size:12px;color:var(--fil-muted, rgba(255, 255, 255, .55));cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s}.fil-w-seg[data-v-765cf0ce]:hover:not(.active){color:var(--fil-text, rgba(255, 255, 255, .85))}.fil-w-seg.active[data-v-765cf0ce]{background:var(--fil-accent);color:var(--fil-accent-ink, #fff);font-weight:500}.fil-w-seg[data-v-765cf0ce]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-select[data-v-a878baba]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-select-label[data-v-a878baba]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-select-input[data-v-a878baba]{grid-column:2;width:100%;box-sizing:border-box;height:30px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;padding:5px 8px;color:var(--fil-text, #f2f2f2);font-family:inherit;font-size:12px;outline:none;cursor:pointer}.fil-w-select-input[data-v-a878baba]:focus{border-color:var(--fil-accent)}.fil-w-select-input[data-v-a878baba]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-select-input[data-v-a878baba]:disabled{opacity:.5;cursor:default}.fil-w-slider[data-v-c8e1921a]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-slider-label[data-v-c8e1921a]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-slider-row[data-v-c8e1921a]{grid-column:2;display:flex;align-items:center;gap:6px;min-width:0}.fil-w-slider-range[data-v-c8e1921a]{flex:1 1 auto;min-width:0;max-width:220px;accent-color:var(--fil-accent);cursor:pointer}.fil-w-slider-range[data-v-c8e1921a]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-slider-row[data-v-c8e1921a] .fil-w-num-wrap{width:70px;flex:none}.fil-style-picker[data-v-41b37d4d]{display:flex;flex-direction:column;gap:10px}.fil-style-cats[data-v-41b37d4d]{display:flex;flex-wrap:wrap;gap:6px}.fil-style-cat[data-v-41b37d4d]{box-sizing:border-box;padding:5px 10px;border-radius:999px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .2));background:#ffffff0a;color:var(--fil-text, rgba(255, 255, 255, .8));font-size:11px;cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-cat[data-v-41b37d4d]:hover{border-color:var(--fil-accent)}.fil-style-cat.active[data-v-41b37d4d]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #fff);font-weight:500}.fil-style-cat[data-v-41b37d4d]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-style-search-wrap[data-v-41b37d4d]{position:relative;width:100%}.fil-style-search[data-v-41b37d4d]{box-sizing:border-box;width:100%;padding:7px 28px 7px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;outline:none}.fil-style-search[data-v-41b37d4d]:focus{border-color:var(--fil-accent)}.fil-style-search-clear[data-v-41b37d4d]{position:absolute;right:6px;top:50%;transform:translateY(-50%);width:18px;height:18px;border-radius:50%;border:none;background:#ffffff1f;color:#bbb;font-size:13px;line-height:1;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .12s ease}.fil-style-search-clear[data-v-41b37d4d]:hover{background:#ff4b4b4d;color:var(--fil-danger, #ff6b6b)}.fil-style-grid[data-v-41b37d4d]{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:8px;max-height:50vh;overflow-y:auto;padding-right:2px}.fil-style-tile[data-v-41b37d4d]{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px 6px;border-radius:8px;border:1px solid var(--fil-muted, rgba(255, 255, 255, .14));background:var(--fil-panel-alt, #1d1d1d);color:var(--fil-text, #ccc);cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-tile[data-v-41b37d4d]:hover{border-color:var(--fil-accent);color:var(--fil-text, #fff)}.fil-style-tile.active[data-v-41b37d4d]{border-color:var(--fil-accent);background:color-mix(in srgb,var(--fil-accent) 14%,transparent)}.fil-style-tile[data-v-41b37d4d]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-style-tile-preview[data-v-41b37d4d]{width:100%;aspect-ratio:1;border-radius:6px;background:#ffffff0d;display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:22px}.fil-style-tile-img[data-v-41b37d4d]{width:100%;height:100%;object-fit:cover}.fil-style-tile-label[data-v-41b37d4d]{font-size:10px;text-align:center;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.fil-style-empty[data-v-41b37d4d]{grid-column:1 / -1;padding:20px;text-align:center;color:var(--fil-muted, #666);font-size:12px}.fil-style-selected-bar[data-v-41b37d4d]{display:flex;flex-wrap:wrap;gap:6px;padding:6px;border-radius:6px;background:color-mix(in srgb,var(--fil-accent, #00f0ff) 6%,transparent);border:1px solid color-mix(in srgb,var(--fil-accent, #00f0ff) 20%,transparent)}.fil-style-chip[data-v-41b37d4d]{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:999px;background:var(--fil-accent, #00f0ff);color:var(--fil-accent-ink, #12151a);font-size:11px;font-weight:600}.fil-chip-text[data-v-41b37d4d]{max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-chip-remove[data-v-41b37d4d]{display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:50%;border:none;background:#0003;color:var(--fil-accent-ink, #12151a);font-size:12px;line-height:1;cursor:pointer;padding:0;transition:background .08s,color .08s}.fil-chip-remove[data-v-41b37d4d]:hover{background:var(--fil-danger, #ff4b4b);color:#fff}.fil-toast-stack[data-v-f6279127]{position:fixed;right:20px;bottom:20px;z-index:100001;display:flex;flex-direction:column;gap:8px;pointer-events:none;max-width:min(360px,90vw)}.fil-toast[data-v-f6279127]{pointer-events:auto;display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:8px;background:var(--fil-panel, #171b22);color:var(--fil-text, #e8edf3);border:1px solid var(--fil-panel-alt, #2a3041);border-left:3px solid var(--toast-color, var(--fil-muted));box-shadow:0 6px 22px #0000006b;font:12.5px/1.45 system-ui,sans-serif;animation:fil-toast-in-f6279127 .18s cubic-bezier(.2,.7,.3,1)}@keyframes fil-toast-in-f6279127{0%{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}.fil-toast-dot[data-v-f6279127]{flex:none;width:8px;height:8px;margin-top:4px;border-radius:50%;background:var(--toast-color, var(--fil-muted))}.fil-toast-text[data-v-f6279127]{flex:1;min-width:0;align-self:center}.fil-toast-action[data-v-f6279127]{flex:none;cursor:pointer;padding:4px 8px;border-radius:4px;background:#ffffff0f;color:inherit;border:none;font:inherit;transition:background .12s}.fil-toast-action[data-v-f6279127]:hover{background:#ffffff24}.fil-toast-close[data-v-f6279127]{flex:none;align-self:flex-start;cursor:pointer;width:18px;height:18px;padding:0;border:none;background:none;color:var(--fil-muted);opacity:.6;transition:opacity .12s;font-size:16px;line-height:18px}.fil-toast-close[data-v-f6279127]:hover{opacity:1}.fil-w-toggle[data-v-9d64f497]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap, 6px);width:100%}.fil-w-toggle-label[data-v-9d64f497]{grid-column:1;font-size:11px;color:var(--fil-muted, rgba(255, 255, 255, .55));font-family:inherit}.fil-w-toggle.bare[data-v-9d64f497]{display:flex;width:auto;gap:4px}.fil-w-toggle.bare .fil-w-toggle-label[data-v-9d64f497]{font-size:10px;white-space:nowrap}.fil-w-switch[data-v-9d64f497]{grid-column:2;justify-self:start;width:36px;height:20px;padding:2px;box-sizing:border-box;border:none;border-radius:10px;background:#ffffff24;cursor:pointer;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .12s}.fil-w-switch.on[data-v-9d64f497]{background:var(--fil-accent)}.fil-w-switch[data-v-9d64f497]:disabled{opacity:.5;cursor:default}.fil-w-switch[data-v-9d64f497]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-switch-thumb[data-v-9d64f497]{display:block;width:16px;height:16px;border-radius:50%;background:#fff;transition:transform .12s}.fil-w-switch.on .fil-w-switch-thumb[data-v-9d64f497]{transform:translate(16px)}div.fil-seed-root[data-v-d9d8deb9]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:row;align-items:center;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;background:transparent;border:none;border-radius:0;box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none}.fil-seed-display[data-v-d9d8deb9]{flex:1;min-width:0;box-sizing:border-box;height:34px;background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);padding:6px 8px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:19px;text-align:center;outline:none;transition:border-color .08s}.fil-seed-display[data-v-d9d8deb9]:focus{border-color:var(--fil-accent)}.fil-seed-display[readonly][data-v-d9d8deb9]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-seed-actions[data-v-d9d8deb9]{display:flex;gap:5px;flex-shrink:0}.fil-seed-actions[data-v-d9d8deb9] .fil-w-btn{padding:0;width:34px;height:34px;font-size:16px}.picker-container[data-v-8dfe2da3]{display:flex;flex-direction:column;gap:12px;color:var(--fil-text, #e8edf3)}.provider-tabs[data-v-8dfe2da3]{display:flex;gap:6px;overflow-x:auto;padding-bottom:6px;scrollbar-width:thin}.tab-btn[data-v-8dfe2da3]{display:flex;align-items:center;gap:6px;padding:7px 10px;border-radius:8px;border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-muted, #9ca8b5);font-size:12px;cursor:pointer;white-space:nowrap;flex-shrink:0;transition:all .15s ease}.tab-btn[data-v-8dfe2da3]:hover{background:#ffffff14;color:var(--fil-text, #e8edf3)}.tab-btn.active[data-v-8dfe2da3]{background:var(--fil-panel-alt, #222934);border-color:var(--fil-accent, #f08a45);color:var(--fil-accent, #f08a45);font-weight:600}.tab-badge[data-v-8dfe2da3]{font-size:10px;background:var(--fil-pill-bg);padding:1px 5px;border-radius:99px}.provider-status-bar[data-v-8dfe2da3]{display:flex;justify-content:space-between;align-items:center;background:#0003;padding:8px 12px;border-radius:6px;font-size:12px}.status-info[data-v-8dfe2da3]{display:flex;align-items:center;gap:8px}.provider-name[data-v-8dfe2da3]{font-weight:600}.status-badge[data-v-8dfe2da3]{font-size:11px;padding:2px 6px;border-radius:4px}.status-badge.online[data-v-8dfe2da3]{color:var(--fil-ok, #62c987)}.status-badge.loading[data-v-8dfe2da3]{color:var(--fil-accent, #f08a45)}.status-badge.error[data-v-8dfe2da3]{color:var(--fil-danger, #ef6666)}.age-label[data-v-8dfe2da3]{font-size:10px;color:var(--fil-muted, #9ca8b5)}.filter-controls[data-v-8dfe2da3]{display:flex;flex-direction:column;gap:8px}.search-input-wrap[data-v-8dfe2da3]{position:relative;display:flex;align-items:center}.search-icon[data-v-8dfe2da3]{position:absolute;left:10px;color:var(--fil-muted, #9ca8b5)}.search-input[data-v-8dfe2da3]{width:100%;box-sizing:border-box;height:32px;padding:6px 30px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:var(--fil-field-radius, 6px);color:var(--fil-text, #e8edf3);font-size:12px;outline:none}.search-input[data-v-8dfe2da3]:focus{border-color:var(--fil-accent, #f08a45)}.clear-search[data-v-8dfe2da3]{position:absolute;right:10px;background:none;border:none;color:var(--fil-muted, #9ca8b5);cursor:pointer}.filter-segments[data-v-8dfe2da3]{display:flex;gap:8px;min-width:0}.filter-segments[data-v-8dfe2da3]>*{flex:1;min-width:0}.models-list-wrapper[data-v-8dfe2da3]{height:320px;overflow-y:auto;background:#00000026;border-radius:8px;border:1px solid rgba(255,255,255,.06);padding:8px}.empty-state[data-v-8dfe2da3]{display:flex;align-items:center;justify-content:center;height:100%;color:var(--fil-muted, #9ca8b5);font-size:12px}.models-container.list[data-v-8dfe2da3]{display:flex;flex-direction:column;gap:6px}.models-container.grid[data-v-8dfe2da3]{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:8px}.models-container.grid .model-card[data-v-8dfe2da3]{flex-direction:column;align-items:flex-start;gap:8px;padding:10px 12px}.models-container.grid .model-main[data-v-8dfe2da3]{width:100%}.models-container.grid .model-tags[data-v-8dfe2da3]{width:100%;justify-content:flex-start}.model-card[data-v-8dfe2da3]{display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:#ffffff08;border:1px solid rgba(255,255,255,.06);border-radius:6px;cursor:pointer;transition:all .12s ease;width:100%;box-sizing:border-box;text-align:left;font:inherit;color:inherit;-moz-appearance:none;appearance:none;-webkit-appearance:none}.model-card[data-v-8dfe2da3]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.model-card[data-v-8dfe2da3]:hover{background:#ffffff12;border-color:#ffffff26}.model-card.selected[data-v-8dfe2da3]{background:#f08a4526;border-color:var(--fil-accent, #f08a45)}.model-main[data-v-8dfe2da3]{display:flex;align-items:center;gap:8px;min-width:0}.type-icon[data-v-8dfe2da3]{font-size:14px}.model-name[data-v-8dfe2da3]{font-size:12px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.model-tags[data-v-8dfe2da3]{display:flex;gap:4px;flex-shrink:0}.tag[data-v-8dfe2da3]{font-size:9px;padding:2px 6px;border-radius:4px;font-weight:600;text-transform:uppercase}.tag.vision[data-v-8dfe2da3]{background:#f08a4526;color:var(--fil-accent, #f08a45)}.tag.text[data-v-8dfe2da3],.tag.local[data-v-8dfe2da3],.tag.free[data-v-8dfe2da3],.tag.paid[data-v-8dfe2da3]{background:var(--fil-pill-bg);color:var(--fil-muted, #9ca8b5)}.picker-footer[data-v-8dfe2da3]{display:flex;justify-content:space-between;align-items:center;padding-top:8px}.selection-summary[data-v-8dfe2da3]{font-size:12px}.selection-summary .muted[data-v-8dfe2da3]{color:var(--fil-muted, #9ca8b5)}.footer-actions[data-v-8dfe2da3]{display:flex;gap:8px}.fil-provider-root[data-v-f8a6b931]{width:100%;box-sizing:border-box;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;min-width:0}.picker-trigger-btn[data-v-f8a6b931]{display:flex;flex-direction:column;gap:6px;width:100%;box-sizing:border-box;padding:8px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-pill-border);border-radius:var(--fil-field-radius, 8px);color:var(--fil-text, #f2f2f2);cursor:pointer;text-align:left;transition:border-color .15s ease,background .15s ease;outline:none}.picker-trigger-btn[data-v-f8a6b931]:hover{border-color:var(--fil-accent, #f08a45);background:var(--fil-pill-bg)}.picker-trigger-btn[data-v-f8a6b931]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px;border-color:var(--fil-accent)}.trigger-header[data-v-f8a6b931]{display:flex;justify-content:space-between;align-items:center;width:100%}.provider-badge[data-v-f8a6b931]{display:flex;align-items:center;gap:6px;font-weight:600;font-size:13px;color:var(--fil-accent, #f08a45)}.open-icon[data-v-f8a6b931]{font-size:11px;background:var(--fil-pill-bg);padding:2px 6px;border-radius:4px;color:var(--fil-text, #e8edf3)}.trigger-model[data-v-f8a6b931]{display:flex;align-items:center;gap:6px;font-size:12px;min-width:0}.model-label[data-v-f8a6b931]{color:var(--fil-muted, #9ca8b5);flex-shrink:0}.model-name[data-v-f8a6b931]{font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.fil-scanner-root[data-v-93b777e9]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif;width:100%;box-sizing:border-box;min-width:0;height:100%}.fil-section-block[data-v-93b777e9]{display:flex;flex-direction:column;gap:5px;min-width:0}.fil-section-block.is-growable[data-v-93b777e9]{flex:1 1 auto;min-height:0}.fil-w-row[data-v-93b777e9]{display:flex;flex-direction:column;gap:3px;min-width:0}.fil-w-row.is-growable[data-v-93b777e9]{flex:1 1 auto;min-height:0}.fil-w-row.is-growable>.fil-scanner-textarea[data-v-93b777e9]{flex:1 1 auto;height:auto}.fil-scanner-textarea[data-v-93b777e9]{box-sizing:border-box;width:100%;min-height:48px;padding:8px 10px;background:var(--fil-panel-alt, #171819);border:1px solid var(--fil-muted, #3a3d40);border-radius:6px;color:var(--fil-text, #ddd);font-family:inherit;font-size:12px;resize:vertical;outline:none}.fil-scanner-textarea[data-v-93b777e9]:focus{border-color:var(--fil-accent, #00f0ff)}.fil-scanner-textarea.is-linked[data-v-93b777e9]{border-style:dashed;border-color:var(--fil-accent, #00f0ff);color:var(--fil-muted, #9ca8b5);cursor:not-allowed}.fil-single-style-block[data-v-93b777e9]{margin-top:2px}.fil-unified-style-modal[data-v-93b777e9]{display:flex;flex-direction:column;gap:12px;padding:4px 0}.fil-style-tab-bar[data-v-93b777e9]{display:flex;gap:6px;background:#0000004d;padding:4px;border-radius:8px;border:1px solid rgba(255,255,255,.08)}.fil-style-tab-btn[data-v-93b777e9]{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;height:34px;border-radius:6px;border:1px solid transparent;background:transparent;color:var(--fil-muted, #9ca8b5);font-size:12px;font-weight:600;cursor:pointer;transition:all .12s ease}.fil-style-tab-btn[data-v-93b777e9]:hover{color:var(--fil-text, #ffffff);background:#ffffff0f}.fil-style-tab-btn.active[data-v-93b777e9]{background:var(--fil-accent, #00f0ff);color:var(--fil-accent-ink, #12151a);border-color:var(--fil-accent, #00f0ff);font-weight:700;box-shadow:0 0 10px color-mix(in srgb,var(--fil-accent, #00f0ff) 30%,transparent)}.fil-tab-badge[data-v-93b777e9]{font-size:10px;color:#0f8}.fil-style-tab-btn.active .fil-tab-badge[data-v-93b777e9]{color:var(--fil-accent-ink, #12151a)}.fil-style-picker-body[data-v-93b777e9]{min-height:320px;max-height:480px;overflow-y:auto}.fil-style-modal-footer[data-v-93b777e9]{display:flex;justify-content:flex-end;border-top:1px solid rgba(255,255,255,.08);padding-top:8px}.fil-clear-styles-btn[data-v-93b777e9]{padding:6px 12px;border-radius:6px;border:1px solid rgba(255,75,75,.3);background:#ff4b4b1a;color:var(--fil-danger, #ff6b6b);font-size:12px;font-weight:600;cursor:pointer;transition:all .12s ease}.fil-clear-styles-btn[data-v-93b777e9]:hover{background:#ff4b4b40;border-color:var(--fil-danger, #ff4b4b);color:#fff}.fil-scanner-seed-row[data-v-93b777e9]{display:flex;gap:6px;min-width:0}.fil-scanner-seed-field[data-v-93b777e9]{flex:1.3;min-width:0;box-sizing:border-box;height:34px;background:#00000059;border:1px solid rgba(255,255,255,.08);border-radius:var(--fil-pill-radius);padding:0 12px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:13px;text-align:center;outline:none;transition:border-color .08s}.fil-scanner-seed-field[data-v-93b777e9]:focus{border-color:var(--fil-accent)}.fil-scanner-seed-field.is-random[data-v-93b777e9]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-scanner-seed-pill[data-v-93b777e9]{flex:1;min-width:0;box-sizing:border-box;height:34px;padding:0 8px;border-radius:var(--fil-pill-radius);border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-text, #e8edf3);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none}.fil-scanner-seed-pill[data-v-93b777e9]:hover{background:#ffffff1f}.fil-scanner-seed-pill.active[data-v-93b777e9]{background:#ffffff29;border-color:#fff3}.fil-scanner-seed-pill[data-v-93b777e9]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-scanner-seed-pill.active[data-v-93b777e9]{background:var(--fil-accent);color:var(--fil-accent-ink, #12151a)}.fil-scanner-seed-pill-accent[data-v-93b777e9]{color:var(--fil-accent)}.fil-scanner-seed-pill-accent[data-v-93b777e9]:hover{background:#00f0ff1a}.fil-style-picker-btn[data-v-93b777e9]{flex:2;box-sizing:border-box;min-height:36px;border-radius:var(--fil-pill-radius, 6px);background:linear-gradient(135deg,#00f0ff14,#ff00ff14);border:1px solid rgba(0,240,255,.2);color:var(--fil-text, #e8edf3);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s cubic-bezier(.4,0,.2,1);box-shadow:0 0 10px #00f0ff0d}.fil-style-picker-btn[data-v-93b777e9]:hover{background:linear-gradient(135deg,#00f0ff26,#ff00ff26);border-color:#00f0ff80;box-shadow:0 0 15px #00f0ff26;color:#fff}.fil-style-picker-btn.has-styles[data-v-93b777e9]{background:linear-gradient(135deg,#00f0ff33,#f0f3);border:1px solid rgba(0,240,255,.6);color:#fff;box-shadow:0 0 20px #00f0ff40,inset 0 0 8px #f0f3;text-shadow:0 0 8px rgba(0,240,255,.6);animation:pulse-neon-93b777e9 2.5s infinite alternate}@keyframes pulse-neon-93b777e9{0%{box-shadow:0 0 15px #00f0ff33,inset 0 0 5px #ff00ff26}to{box-shadow:0 0 25px #00f0ff73,inset 0 0 15px #ff00ff59;border-color:#00f0ffe6}}.fil-cleaner-root[data-v-3d68b764],.fil-up-root[data-v-57658737]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-up-row[data-v-57658737]{display:grid;grid-template-columns:minmax(auto,max-content) 64px minmax(auto,max-content) 64px;align-items:center;gap:var(--fil-node-gap)}.fil-up-row-overlap[data-v-57658737]{grid-template-columns:minmax(auto,max-content) 64px minmax(auto,max-content) 64px auto}.fil-w-label[data-v-57658737]{font-size:11px;color:var(--fil-muted, rgba(255,255,255,.55))}.fil-hrf-root[data-v-2a443f87]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-hrf-seed-row[data-v-2a443f87]{display:flex;gap:6px;min-width:0}.fil-hrf-seed-field[data-v-2a443f87]{flex:1.3;min-width:0;box-sizing:border-box;height:34px;background:#00000059;border:1px solid rgba(255,255,255,.08);border-radius:var(--fil-pill-radius);padding:0 12px;color:var(--fil-text, #f2f2f2);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:13px;text-align:center;outline:none;transition:border-color .08s}.fil-hrf-seed-field[data-v-2a443f87]:focus{border-color:var(--fil-accent)}.fil-hrf-seed-field.is-random[data-v-2a443f87]{color:var(--fil-muted, #9ca8b5);font-style:italic}.fil-hrf-seed-pill[data-v-2a443f87]{flex:1;min-width:0;box-sizing:border-box;height:34px;padding:0 8px;border-radius:var(--fil-pill-radius);border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-text, #e8edf3);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none}.fil-hrf-seed-pill[data-v-2a443f87]:hover{background:#ffffff1f}.fil-hrf-seed-pill.active[data-v-2a443f87]{background:#ffffff29;border-color:#fff3}.fil-hrf-seed-pill[data-v-2a443f87]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-hrf-seed-pill-accent[data-v-2a443f87]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink, #241206);font-weight:700}.fil-hrf-seed-pill-accent[data-v-2a443f87]:hover{filter:brightness(1.08);background:var(--fil-accent)}.fil-style-mixer-root[data-v-6e95ae42],.fil-color-wizard-root[data-v-3228ee08]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text, #e8edf3);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cw-presets-block[data-v-3228ee08]{display:flex;flex-direction:column;gap:6px;padding:8px 10px;background:#0000004d;border:1px solid rgba(255,255,255,.08);border-radius:8px}.fil-cw-presets-title[data-v-3228ee08]{font-size:11px;font-weight:700;color:var(--fil-accent, #00f0ff);text-transform:uppercase;letter-spacing:.5px}.fil-cw-presets-grid[data-v-3228ee08]{display:grid;grid-template-columns:1fr 1fr;gap:6px}.fil-cw-preset-btn[data-v-3228ee08]{height:28px;border-radius:6px;border:1px solid rgba(255,255,255,.1);background:#ffffff0a;color:var(--fil-text, #ddd);font-size:11px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .12s ease}.fil-cw-preset-btn[data-v-3228ee08]:hover{background:#ffffff1f;border-color:var(--fil-accent, #00f0ff)}.fil-cw-preset-btn.warm[data-v-3228ee08]:hover{border-color:#fa0;color:#fa0}.fil-cw-preset-btn.cool[data-v-3228ee08]:hover{border-color:#00f0ff;color:#00f0ff}.fil-cw-preset-btn.skin[data-v-3228ee08]:hover{border-color:#f7a;color:#f7a}.fil-cw-preset-btn.contrast[data-v-3228ee08]:hover{border-color:#fa0;color:#fa0}.fil-cw-slider-group[data-v-3228ee08]{display:flex;flex-direction:column;gap:6px}\n";document.head.appendChild(s);}catch(e){}})();
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
const _e = {}, wn = [], bt = () => {
}, Ss = () => !1, Gl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Wl = (e) => e.startsWith("onUpdate:"), Re = Object.assign, qi = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, lr = Object.prototype.hasOwnProperty, ve = (e, t) => lr.call(e, t), le = Array.isArray, Sn = (e) => il(e) === "[object Map]", jl = (e) => il(e) === "[object Set]", bo = (e) => il(e) === "[object Date]", de = (e) => typeof e == "function", Fe = (e) => typeof e == "string", Qe = (e) => typeof e == "symbol", ye = (e) => e !== null && typeof e == "object", xs = (e) => (ye(e) || de(e)) && de(e.then) && de(e.catch), Cs = Object.prototype.toString, il = (e) => Cs.call(e), ir = (e) => il(e).slice(8, -1), As = (e) => il(e) === "[object Object]", zl = (e) => Fe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Un = /* @__PURE__ */ Ki(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Kl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, or = /-\w/g, Ge = Kl(
  (e) => e.replace(or, (t) => t.slice(1).toUpperCase())
), sr = /\B([A-Z])/g, Vt = Kl(
  (e) => e.replace(sr, "-$1").toLowerCase()
), ql = Kl((e) => e.charAt(0).toUpperCase() + e.slice(1)), ci = Kl(
  (e) => e ? `on${ql(e)}` : ""
), Ve = (e, t) => !Object.is(e, t), yl = (e, ...t) => {
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
  const t = Fe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let vo;
const Yl = () => vo || (vo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function it(e) {
  if (le(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const l = e[n], i = Fe(l) ? dr(l) : it(l);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Fe(e) || ye(e))
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
function me(e) {
  let t = "";
  if (Fe(e))
    t = e;
  else if (le(e))
    for (let n = 0; n < e.length; n++) {
      const l = me(e[n]);
      l && (t += l + " ");
    }
  else if (ye(e))
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
    n = ol(e[l], t[l]);
  return n;
}
function ol(e, t) {
  if (e === t) return !0;
  let n = bo(e), l = bo(t);
  if (n || l)
    return n && l ? e.getTime() === t.getTime() : !1;
  if (n = Qe(e), l = Qe(t), n || l)
    return e === t;
  if (n = le(e), l = le(t), n || l)
    return n && l ? mr(e, t) : !1;
  if (n = ye(e), l = ye(t), n || l) {
    if (!n || !l)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), r = t.hasOwnProperty(s);
      if (a && !r || !a && r || !ol(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function hr(e, t) {
  return e.findIndex((n) => ol(n, t));
}
const Fs = (e) => !!(e && e.__v_isRef === !0), X = (e) => Fe(e) ? e : e == null ? "" : le(e) || ye(e) && (e.toString === Cs || !de(e.toString)) ? Fs(e) ? X(e.value) : JSON.stringify(e, Ls, 2) : String(e), Ls = (e, t) => Fs(t) ? Ls(e, t.value) : Sn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [l, i], o) => (n[di(l, o) + " =>"] = i, n),
    {}
  )
} : jl(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => di(n))
} : Qe(t) ? di(t) : ye(t) && !le(t) && !As(t) ? String(t) : t, di = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Qe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ne;
class Is {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ne && (Ne.active ? (this.parent = Ne, this.index = (Ne.scopes || (Ne.scopes = [])).push(
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
      const n = Ne;
      try {
        return Ne = this, t();
      } finally {
        Ne = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ne, Ne = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ne === this)
        Ne = this.prevScope;
      else {
        let t = Ne;
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
  return Ne;
}
function gr(e, t = !1) {
  Ne && Ne.cleanups.push(e);
}
let Me;
const fi = /* @__PURE__ */ new WeakSet();
class Rs {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ne && (Ne.active ? Ne.effects.push(this) : this.flags &= -2);
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
    const t = Me, n = rt;
    Me = this, rt = !0;
    try {
      return this.fn();
    } finally {
      Vs(this), Me = t, rt = n, this.flags &= -3;
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
let Ns = 0, Gn, Wn;
function Ts(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Wn, Wn = e;
    return;
  }
  e.next = Gn, Gn = e;
}
function Xi() {
  Ns++;
}
function Yi() {
  if (--Ns > 0)
    return;
  if (Wn) {
    let t = Wn;
    for (Wn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Gn; ) {
    let t = Gn;
    for (Gn = void 0; t; ) {
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Jn) || (e.globalVersion = Jn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ai(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Me, l = rt;
  Me = e, rt = !0;
  try {
    Es(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ve(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Me = n, rt = l, Vs(e), e.flags &= -3;
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
let rt = !0;
const $s = [];
function Pt() {
  $s.push(rt), rt = !1;
}
function Rt() {
  const e = $s.pop();
  rt = e === void 0 ? !0 : e;
}
function yo(e) {
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
let Jn = 0;
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
    if (!Me || !rt || Me === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Me)
      n = this.activeLink = new br(Me, this), Me.deps ? (n.prevDep = Me.depsTail, Me.depsTail.nextDep = n, Me.depsTail = n) : Me.deps = Me.depsTail = n, Bs(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const l = n.nextDep;
      l.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = l), n.prevDep = Me.depsTail, n.nextDep = void 0, Me.depsTail.nextDep = n, Me.depsTail = n, Me.deps === n && (Me.deps = l);
    }
    return n;
  }
  trigger(t) {
    this.version++, Jn++, this.notify(t);
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
), Qn = /* @__PURE__ */ Symbol(
  ""
);
function He(e, t, n) {
  if (rt && Me) {
    let l = Ml.get(e);
    l || Ml.set(e, l = /* @__PURE__ */ new Map());
    let i = l.get(n);
    i || (l.set(n, i = new Jl()), i.map = l, i.key = n), i.track();
  }
}
function Ft(e, t, n, l, i, o) {
  const s = Ml.get(e);
  if (!s) {
    Jn++;
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
      s.forEach((d, h) => {
        (h === "length" || h === Qn || !Qe(h) && h >= u) && a(d);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && a(s.get(n)), c && a(s.get(Qn)), t) {
        case "add":
          r ? c && a(s.get("length")) : (a(s.get(un)), Sn(e) && a(s.get(Mi)));
          break;
        case "delete":
          r || (a(s.get(un)), Sn(e) && a(s.get(Mi)));
          break;
        case "set":
          Sn(e) && a(s.get(un));
          break;
      }
  }
  Yi();
}
function vr(e, t) {
  const n = Ml.get(e);
  return n && n.get(t);
}
function pn(e) {
  const t = /* @__PURE__ */ ge(e);
  return t === e ? t : (He(t, "iterate", Qn), /* @__PURE__ */ Je(e) ? t : t.map(ut));
}
function Ql(e) {
  return He(e = /* @__PURE__ */ ge(e), "iterate", Qn), e;
}
function ht(e, t) {
  return /* @__PURE__ */ Nt(e) ? Fn(/* @__PURE__ */ It(e) ? ut(t) : t) : ut(t);
}
const yr = {
  __proto__: null,
  [Symbol.iterator]() {
    return pi(this, Symbol.iterator, (e) => ht(this, e));
  },
  concat(...e) {
    return pn(this).concat(
      ...e.map((t) => le(t) ? pn(t) : t)
    );
  },
  entries() {
    return pi(this, "entries", (e) => (e[1] = ht(this, e[1]), e));
  },
  every(e, t) {
    return wt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return wt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((l) => ht(this, l)),
      arguments
    );
  },
  find(e, t) {
    return wt(
      this,
      "find",
      e,
      t,
      (n) => ht(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return wt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return wt(
      this,
      "findLast",
      e,
      t,
      (n) => ht(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return wt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return wt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return mi(this, "includes", e);
  },
  indexOf(...e) {
    return mi(this, "indexOf", e);
  },
  join(e) {
    return pn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return mi(this, "lastIndexOf", e);
  },
  map(e, t) {
    return wt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Rn(this, "pop");
  },
  push(...e) {
    return Rn(this, "push", e);
  },
  reduce(e, ...t) {
    return wo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return wo(this, "reduceRight", e, t);
  },
  shift() {
    return Rn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return wt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Rn(this, "splice", e);
  },
  toReversed() {
    return pn(this).toReversed();
  },
  toSorted(e) {
    return pn(this).toSorted(e);
  },
  toSpliced(...e) {
    return pn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Rn(this, "unshift", e);
  },
  values() {
    return pi(this, "values", (e) => ht(this, e));
  }
};
function pi(e, t, n) {
  const l = Ql(e), i = l[t]();
  return l !== e && !/* @__PURE__ */ Je(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const wr = Array.prototype;
function wt(e, t, n, l, i, o) {
  const s = Ql(e), a = s !== e && !/* @__PURE__ */ Je(e), r = s[t];
  if (r !== wr[t]) {
    const d = r.apply(e, o);
    return a ? ut(d) : d;
  }
  let c = n;
  s !== e && (a ? c = function(d, h) {
    return n.call(this, ht(e, d), h, e);
  } : n.length > 2 && (c = function(d, h) {
    return n.call(this, d, h, e);
  }));
  const u = r.call(s, c, l);
  return a && i ? i(u) : u;
}
function wo(e, t, n, l) {
  const i = Ql(e), o = i !== e && !/* @__PURE__ */ Je(e);
  let s = n, a = !1;
  i !== e && (o ? (a = l.length === 0, s = function(c, u, d) {
    return a && (a = !1, c = ht(e, c)), n.call(this, c, ht(e, u), d, e);
  }) : n.length > 3 && (s = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }));
  const r = i[t](s, ...l);
  return a ? ht(e, r) : r;
}
function mi(e, t, n) {
  const l = /* @__PURE__ */ ge(e);
  He(l, "iterate", Qn);
  const i = l[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Zl(n[0]) ? (n[0] = /* @__PURE__ */ ge(n[0]), l[t](...n)) : i;
}
function Rn(e, t, n = []) {
  Pt(), Xi();
  const l = (/* @__PURE__ */ ge(e))[t].apply(e, n);
  return Yi(), Rt(), l;
}
const Sr = /* @__PURE__ */ Ki("__proto__,__v_isRef,__isVue"), Hs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qe)
);
function xr(e) {
  Qe(e) || (e = String(e));
  const t = /* @__PURE__ */ ge(this);
  return He(t, "has", e), t.hasOwnProperty(e);
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
    if ((Qe(n) ? Hs.has(n) : Sr(n)) || (i || He(t, "get", n), o))
      return a;
    if (/* @__PURE__ */ fe(a)) {
      const r = s && zl(n) ? a : a.value;
      return i && ye(r) ? /* @__PURE__ */ kl(r) : r;
    }
    return ye(a) ? i ? /* @__PURE__ */ kl(a) : /* @__PURE__ */ Xt(a) : a;
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
      const c = /* @__PURE__ */ Nt(o);
      if (!/* @__PURE__ */ Je(l) && !/* @__PURE__ */ Nt(l) && (o = /* @__PURE__ */ ge(o), l = /* @__PURE__ */ ge(l)), !s && /* @__PURE__ */ fe(o) && !/* @__PURE__ */ fe(l))
        return c || (o.value = l), !0;
    }
    const a = s ? Number(n) < t.length : ve(t, n), r = Reflect.set(
      t,
      n,
      l,
      /* @__PURE__ */ fe(t) ? t : i
    );
    return t === /* @__PURE__ */ ge(i) && r && (a ? Ve(l, o) && Ft(t, "set", n, l) : Ft(t, "add", n, l)), r;
  }
  deleteProperty(t, n) {
    const l = ve(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && l && Ft(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const l = Reflect.has(t, n);
    return (!Qe(n) || !Hs.has(n)) && He(t, "has", n), l;
  }
  ownKeys(t) {
    return He(
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
    const i = this.__v_raw, o = /* @__PURE__ */ ge(i), s = Sn(o), a = e === "entries" || e === Symbol.iterator && s, r = e === "keys" && s, c = i[e](...l), u = n ? ki : t ? Fn : ut;
    return !t && He(
      o,
      "iterate",
      r ? Mi : un
    ), Re(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: d, done: h } = c.next();
          return h ? { value: d, done: h } : {
            value: a ? [u(d[0]), u(d[1])] : u(d),
            done: h
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
      const o = this.__v_raw, s = /* @__PURE__ */ ge(o), a = /* @__PURE__ */ ge(i);
      e || (Ve(i, a) && He(s, "get", i), He(s, "get", a));
      const { has: r } = dl(s), c = t ? ki : e ? Fn : ut;
      if (r.call(s, i))
        return c(o.get(i));
      if (r.call(s, a))
        return c(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && He(/* @__PURE__ */ ge(i), "iterate", un), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ ge(o), a = /* @__PURE__ */ ge(i);
      return e || (Ve(i, a) && He(s, "has", i), He(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const s = this, a = s.__v_raw, r = /* @__PURE__ */ ge(a), c = t ? ki : e ? Fn : ut;
      return !e && He(r, "iterate", un), a.forEach((u, d) => i.call(o, c(u), c(d), s));
    }
  };
  return Re(
    n,
    e ? {
      add: fl("add"),
      set: fl("set"),
      delete: fl("delete"),
      clear: fl("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ ge(this), s = dl(o), a = /* @__PURE__ */ ge(i), r = !t && !/* @__PURE__ */ Je(i) && !/* @__PURE__ */ Nt(i) ? a : i;
        return s.has.call(o, r) || Ve(i, r) && s.has.call(o, i) || Ve(a, r) && s.has.call(o, a) || (o.add(r), Ft(o, "add", r, r)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Je(o) && !/* @__PURE__ */ Nt(o) && (o = /* @__PURE__ */ ge(o));
        const s = /* @__PURE__ */ ge(this), { has: a, get: r } = dl(s);
        let c = a.call(s, i);
        c || (i = /* @__PURE__ */ ge(i), c = a.call(s, i));
        const u = r.call(s, i);
        return s.set(i, o), c ? Ve(o, u) && Ft(s, "set", i, o) : Ft(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ ge(this), { has: s, get: a } = dl(o);
        let r = s.call(o, i);
        r || (i = /* @__PURE__ */ ge(i), r = s.call(o, i)), a && a.call(o, i);
        const c = o.delete(i);
        return r && Ft(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ ge(this), o = i.size !== 0, s = i.clear();
        return o && Ft(
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
    ve(n, i) && i in l ? n : l,
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
  return /* @__PURE__ */ Nt(e) ? e : Zi(
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
  if (!ye(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
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
function It(e) {
  return /* @__PURE__ */ Nt(e) ? /* @__PURE__ */ It(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Nt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Zl(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ge(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ge(t) : e;
}
function eo(e) {
  return !ve(e, "__v_skip") && Object.isExtensible(e) && Ms(e, "__v_skip", !0), e;
}
const ut = (e) => ye(e) ? /* @__PURE__ */ Xt(e) : e, Fn = (e) => ye(e) ? /* @__PURE__ */ kl(e) : e;
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
    this.dep = new Jl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ge(t), this._value = n ? t : ut(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, l = this.__v_isShallow || /* @__PURE__ */ Je(t) || /* @__PURE__ */ Nt(t);
    t = l ? t : /* @__PURE__ */ ge(t), Ve(t, n) && (this._rawValue = t, this._value = l ? t : ut(t), this.dep.trigger());
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
  return /* @__PURE__ */ It(e) ? e : new Proxy(e, Or);
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
    this._object = t, this._defaultValue = l, this.__v_isRef = !0, this._value = void 0, this._key = Qe(n) ? n : String(n), this._raw = /* @__PURE__ */ ge(t);
    let i = !0, o = t;
    if (!le(t) || Qe(this._key) || !zl(this._key))
      do
        i = !/* @__PURE__ */ Zl(o) || /* @__PURE__ */ Je(o);
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
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Jl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Jn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = l;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Me !== this)
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
  return de(e) ? l = e : (l = e.get, i = e.set), new Wr(l, i, n);
}
const pl = {}, Fl = /* @__PURE__ */ new WeakMap();
let ln;
function zr(e, t = !1, n = ln) {
  if (n) {
    let l = Fl.get(n);
    l || Fl.set(n, l = []), l.push(e);
  }
}
function Kr(e, t, n = _e) {
  const { immediate: l, deep: i, once: o, scheduler: s, augmentJob: a, call: r } = n, c = (v) => i ? v : /* @__PURE__ */ Je(v) || i === !1 || i === 0 ? Lt(v, 1) : Lt(v);
  let u, d, h, g, m = !1, _ = !1;
  if (/* @__PURE__ */ fe(e) ? (d = () => e.value, m = /* @__PURE__ */ Je(e)) : /* @__PURE__ */ It(e) ? (d = () => c(e), m = !0) : le(e) ? (_ = !0, m = e.some((v) => /* @__PURE__ */ It(v) || /* @__PURE__ */ Je(v)), d = () => e.map((v) => {
    if (/* @__PURE__ */ fe(v))
      return v.value;
    if (/* @__PURE__ */ It(v))
      return c(v);
    if (de(v))
      return r ? r(v, 2) : v();
  })) : de(e) ? t ? d = r ? () => r(e, 2) : e : d = () => {
    if (h) {
      Pt();
      try {
        h();
      } finally {
        Rt();
      }
    }
    const v = ln;
    ln = u;
    try {
      return r ? r(e, 3, [g]) : e(g);
    } finally {
      ln = v;
    }
  } : d = bt, t && i) {
    const v = d, y = i === !0 ? 1 / 0 : i;
    d = () => Lt(v(), y);
  }
  const k = Ps(), x = () => {
    u.stop(), k && k.active && qi(k.effects, u);
  };
  if (o && t) {
    const v = t;
    t = (...y) => {
      const w = v(...y);
      return x(), w;
    };
  }
  let S = _ ? new Array(e.length).fill(pl) : pl;
  const M = (v) => {
    if (!(!(u.flags & 1) || !u.dirty && !v))
      if (t) {
        const y = u.run();
        if (v || i || m || (_ ? y.some((w, N) => Ve(w, S[N])) : Ve(y, S))) {
          h && h();
          const w = ln;
          ln = u;
          try {
            const N = [
              y,
              // pass undefined as the old value when it's changed for the first time
              S === pl ? void 0 : _ && S[0] === pl ? [] : S,
              g
            ];
            S = y, r ? r(t, 3, N) : (
              // @ts-expect-error
              t(...N)
            );
          } finally {
            ln = w;
          }
        }
      } else
        u.run();
  };
  return a && a(M), u = new Rs(d), u.scheduler = s ? () => s(M, !1) : M, g = (v) => zr(v, !1, u), h = u.onStop = () => {
    const v = Fl.get(u);
    if (v) {
      if (r)
        r(v, 4);
      else
        for (const y of v) y();
      Fl.delete(u);
    }
  }, t ? l ? M(!0) : S = u.run() : s ? s(M.bind(null, !0), !0) : u.run(), x.pause = u.pause.bind(u), x.resume = u.resume.bind(u), x.stop = x, x;
}
function Lt(e, t = 1 / 0, n) {
  if (t <= 0 || !ye(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ fe(e))
    Lt(e.value, t, n);
  else if (le(e))
    for (let l = 0; l < e.length; l++)
      Lt(e[l], t, n);
  else if (jl(e) || Sn(e))
    e.forEach((l) => {
      Lt(l, t, n);
    });
  else if (As(e)) {
    for (const l in e)
      Lt(e[l], t, n);
    for (const l of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, l) && Lt(e[l], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function sl(e, t, n, l) {
  try {
    return l ? e(...l) : e();
  } catch (i) {
    al(i, t, n);
  }
}
function st(e, t, n, l) {
  if (de(e)) {
    const i = sl(e, t, n, l);
    return i && xs(i) && i.catch((o) => {
      al(o, t, n);
    }), i;
  }
  if (le(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(st(e[o], t, n, l));
    return i;
  }
}
function al(e, t, n, l = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || _e;
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
      Pt(), sl(o, null, 10, [
        e,
        r,
        c
      ]), Rt();
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
const ze = [];
let mt = -1;
const xn = [];
let jt = null, _n = 0;
const qs = /* @__PURE__ */ Promise.resolve();
let Ll = null;
function In(e) {
  const t = Ll || qs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Xr(e) {
  let t = mt + 1, n = ze.length;
  for (; t < n; ) {
    const l = t + n >>> 1, i = ze[l], o = Zn(i);
    o < e || o === e && i.flags & 2 ? t = l + 1 : n = l;
  }
  return t;
}
function to(e) {
  if (!(e.flags & 1)) {
    const t = Zn(e), n = ze[ze.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Zn(n) ? ze.push(e) : ze.splice(Xr(t), 0, e), e.flags |= 1, Xs();
  }
}
function Xs() {
  Ll || (Ll = qs.then(Js));
}
function Yr(e) {
  le(e) ? xn.push(...e) : jt && e.id === -1 ? jt.splice(_n + 1, 0, e) : e.flags & 1 || (xn.push(e), e.flags |= 1), Xs();
}
function So(e, t, n = mt + 1) {
  for (; n < ze.length; n++) {
    const l = ze[n];
    if (l && l.flags & 2) {
      if (e && l.id !== e.uid)
        continue;
      ze.splice(n, 1), n--, l.flags & 4 && (l.flags &= -2), l(), l.flags & 4 || (l.flags &= -2);
    }
  }
}
function Ys(e) {
  if (xn.length) {
    const t = [...new Set(xn)].sort(
      (n, l) => Zn(n) - Zn(l)
    );
    if (xn.length = 0, jt) {
      jt.push(...t);
      return;
    }
    for (jt = t, _n = 0; _n < jt.length; _n++) {
      const n = jt[_n];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    jt = null, _n = 0;
  }
}
const Zn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Js(e) {
  try {
    for (mt = 0; mt < ze.length; mt++) {
      const t = ze[mt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), sl(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; mt < ze.length; mt++) {
      const t = ze[mt];
      t && (t.flags &= -2);
    }
    mt = -1, ze.length = 0, Ys(), Ll = null, (ze.length || xn.length) && Js();
  }
}
let $e = null, Qs = null;
function Il(e) {
  const t = $e;
  return $e = e, Qs = e && e.type.__scopeId || null, t;
}
function Kt(e, t = $e, n) {
  if (!t || e._n)
    return e;
  const l = (...i) => {
    l._d && Nl(-1);
    const o = Il(t), s = Dt.length;
    let a;
    try {
      a = e(...i);
    } finally {
      for (let r = Dt.length; r > s; r--) ao();
      Il(o), l._d && Nl(1);
    }
    return a;
  };
  return l._n = !0, l._c = !0, l._d = !0, l;
}
function ot(e, t) {
  if ($e === null)
    return e;
  const n = oi($e), l = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, a, r = _e] = t[i];
    o && (de(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Lt(s), l.push({
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
function Zt(e, t, n, l) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    o && (a.oldValue = o[s].value);
    let r = a.dir[l];
    r && (Pt(), st(r, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Rt());
  }
}
function Jr(e, t) {
  if (Oe) {
    let n = Oe.provides;
    const l = Oe.parent && Oe.parent.provides;
    l === n && (n = Oe.provides = Object.create(l)), n[e] = t;
  }
}
function jn(e, t, n = !1) {
  const l = ii();
  if (l || cn) {
    let i = cn ? cn._context.provides : l ? l.parent == null || l.ce ? l.vnode.appContext && l.vnode.appContext.provides : l.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && de(t) ? t.call(l && l.proxy) : t;
  }
}
function Qr() {
  return !!(ii() || cn);
}
const Zr = /* @__PURE__ */ Symbol.for("v-scx"), eu = () => jn(Zr);
function tu(e, t) {
  return no(
    e,
    null,
    { flush: "sync" }
  );
}
function Be(e, t, n) {
  return no(e, t, n);
}
function no(e, t, n = _e) {
  const { immediate: l, deep: i, flush: o, once: s } = n, a = Re({}, n), r = t && l || !t && o !== "post";
  let c;
  if (Ln) {
    if (o === "sync") {
      const g = eu();
      c = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!r) {
      const g = () => {
      };
      return g.stop = bt, g.resume = bt, g.pause = bt, g;
    }
  }
  const u = Oe;
  a.call = (g, m, _) => st(g, u, m, _);
  let d = !1;
  o === "post" ? a.scheduler = (g) => {
    je(g, u && u.suspense);
  } : o !== "sync" && (d = !0, a.scheduler = (g, m) => {
    m ? g() : to(g);
  }), a.augmentJob = (g) => {
    t && (g.flags |= 4), d && (g.flags |= 2, u && (g.id = u.uid, g.i = u));
  };
  const h = Kr(e, t, a);
  return Ln && (c ? c.push(h) : r && h()), h;
}
function nu(e, t, n) {
  const l = this.proxy, i = Fe(e) ? e.includes(".") ? Zs(l, e) : () => l[e] : e.bind(l, l);
  let o;
  de(t) ? o = t : (o = t.handler, n = t);
  const s = cl(this), a = no(i, o.bind(l), n);
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
const Gt = /* @__PURE__ */ new WeakMap(), ea = /* @__PURE__ */ Symbol("_vte"), ta = (e) => e.__isTeleport, on = (e) => e && (e.disabled || e.disabled === ""), lu = (e) => e && (e.defer || e.defer === ""), xo = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Co = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Fi = (e, t) => {
  const n = e && e.to;
  return Fe(n) ? t ? t(n) : null : n;
}, iu = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, l, i, o, s, a, r, c) {
    const {
      mc: u,
      pc: d,
      pbc: h,
      o: { insert: g, querySelector: m, createText: _, createComment: k, parentNode: x }
    } = c, S = on(t.props);
    let { dynamicChildren: M } = t;
    const v = (N, $, T) => {
      N.shapeFlag & 16 && u(
        N.children,
        $,
        T,
        i,
        o,
        s,
        a,
        r
      );
    }, y = (N = t) => {
      const $ = on(N.props), T = N.target = Fi(N.props, m), E = Li(T, N, _, g);
      T && (s !== "svg" && xo(T) ? s = "svg" : s !== "mathml" && Co(T) && (s = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(T), $ || (v(N, T, E), On(N, !1)));
    }, w = (N) => {
      const $ = () => {
        if (Gt.get(N) === $) {
          if (Gt.delete(N), on(N.props)) {
            const T = x(N.el) || n;
            v(N, T, N.anchor), On(N, !0);
          }
          y(N);
        }
      };
      Gt.set(N, $), je($, o);
    };
    if (e == null) {
      const N = t.el = _(""), $ = t.anchor = _("");
      if (g(N, n, l), g($, n, l), lu(t.props) || o && o.pendingBranch) {
        w(t);
        return;
      }
      S && (v(t, n, $), On(t, !0)), y();
    } else {
      t.el = e.el;
      const N = t.anchor = e.anchor, $ = Gt.get(e);
      if ($) {
        $.flags |= 8, Gt.delete(e), w(t);
        return;
      }
      t.targetStart = e.targetStart;
      const T = t.target = e.target, E = t.targetAnchor = e.targetAnchor, K = on(e.props), C = K ? n : T, V = K ? N : E;
      if (s === "svg" || xo(T) ? s = "svg" : (s === "mathml" || Co(T)) && (s = "mathml"), M ? (h(
        e.dynamicChildren,
        M,
        C,
        i,
        o,
        s,
        a
      ), so(e, t, !0)) : r || d(
        e,
        t,
        C,
        V,
        i,
        o,
        s,
        a,
        !1
      ), S)
        K ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ml(
          t,
          n,
          N,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const H = Fi(t.props, m);
        H && (t.target = H, ml(
          t,
          H,
          null,
          c,
          0
        ));
      } else K && ml(
        t,
        T,
        E,
        c,
        1
      );
      On(t, S);
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
      props: h
    } = e, g = on(h), m = o || !g, _ = Gt.get(e);
    if (_ && (_.flags |= 8, Gt.delete(e)), d && (i(c), i(u)), o && i(r), !_ && (g || d) && s & 16)
      for (let k = 0; k < a.length; k++) {
        const x = a[k];
        l(
          x,
          t,
          n,
          m,
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
  if (d && l(s, t, n), !Gt.has(e) && (!d || on(u)) && r & 16)
    for (let h = 0; h < c.length; h++)
      i(
        c[h],
        t,
        n,
        2
      );
  d && l(a, t, n);
}
function ou(e, t, n, l, i, o, {
  o: { nextSibling: s, parentNode: a, querySelector: r, insert: c, createText: u }
}, d) {
  function h(k, x) {
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
  const m = t.target = Fi(
    t.props,
    r
  ), _ = on(t.props);
  if (m) {
    const k = m._lpa || m.firstChild;
    t.shapeFlag & 16 && (_ ? (g(e, t), h(m, k), t.targetAnchor || Li(
      m,
      t,
      u,
      c,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      a(e) === m ? e : null
    )) : (t.anchor = s(e), h(m, k), t.targetAnchor || Li(m, t, u, c), d(
      k && s(k),
      t,
      m,
      n,
      l,
      i,
      o
    ))), On(t, _);
  } else _ && t.shapeFlag & 16 && (g(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const na = iu;
function On(e, t) {
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
const lt = /* @__PURE__ */ Symbol("_leaveCb"), Nn = /* @__PURE__ */ Symbol("_enterCb");
function su() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Dn(() => {
    e.isMounted = !0;
  }), ul(() => {
    e.isUnmounting = !0;
  }), e;
}
const tt = [Function, Array], la = {
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
      const s = /* @__PURE__ */ ge(e), { mode: a } = s;
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
      r.type !== Ue && el(r, c);
      let u = n.subTree && Ao(n.subTree);
      if (u && u.type !== Ue && !sn(u, r) && ia(n).type !== Ue) {
        let d = Ii(
          u,
          s,
          l,
          n
        );
        if (el(u, d), a === "out-in" && r.type !== Ue)
          return l.isLeaving = !0, d.afterLeave = () => {
            l.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, u = void 0;
          }, hi(o);
        a === "in-out" && r.type !== Ue ? d.delayLeave = (h, g, m) => {
          const _ = sa(
            l,
            u
          );
          _[String(u.key)] = u, h[lt] = () => {
            g(), h[lt] = void 0, delete c.delayedLeave, u = void 0;
          }, c.delayedLeave = () => {
            m(), delete c.delayedLeave, u = void 0;
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
      if (n.type !== Ue) {
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
    onBeforeLeave: h,
    onLeave: g,
    onAfterLeave: m,
    onLeaveCancelled: _,
    onBeforeAppear: k,
    onAppear: x,
    onAfterAppear: S,
    onAppearCancelled: M
  } = t, v = String(e.key), y = sa(n, e), w = (T, E) => {
    T && st(
      T,
      l,
      9,
      E
    );
  }, N = (T, E) => {
    const K = E[1];
    w(T, E), le(T) ? T.every((C) => C.length <= 1) && K() : T.length <= 1 && K();
  }, $ = {
    mode: s,
    persisted: a,
    beforeEnter(T) {
      let E = r;
      if (!n.isMounted)
        if (o)
          E = k || r;
        else
          return;
      T[lt] && T[lt](
        !0
        /* cancelled */
      );
      const K = y[v];
      K && sn(e, K) && K.el[lt] && K.el[lt](), w(E, [T]);
    },
    enter(T) {
      if (y[v] === e) return;
      let E = c, K = u, C = d;
      if (!n.isMounted)
        if (o)
          E = x || c, K = S || u, C = M || d;
        else
          return;
      let V = !1;
      T[Nn] = (R) => {
        V || (V = !0, R ? w(C, [T]) : w(K, [T]), $.delayedLeave && $.delayedLeave(), T[Nn] = void 0);
      };
      const H = T[Nn].bind(null, !1);
      E ? N(E, [T, H]) : H();
    },
    leave(T, E) {
      const K = String(e.key);
      if (T[Nn] && T[Nn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return E();
      w(h, [T]);
      let C = !1;
      T[lt] = (H) => {
        C || (C = !0, E(), H ? w(_, [T]) : w(m, [T]), T[lt] = void 0, y[K] === e && delete y[K]);
      };
      const V = T[lt].bind(null, !1);
      y[K] = e, g ? N(g, [T, V]) : V();
    },
    clone(T) {
      const E = Ii(
        T,
        t,
        n,
        l,
        i
      );
      return i && i(E), E;
    }
  };
  return $;
}
function hi(e) {
  if (rl(e))
    return e = qt(e), e.children = null, e;
}
function Ao(e) {
  if (!rl(e))
    return ta(e.type) && e.children ? oa(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && de(n.default))
      return n.default();
  }
}
function el(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, el(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function aa(e, t = !1, n) {
  let l = [], i = 0;
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : o);
    s.type === ce ? (s.patchFlag & 128 && i++, l = l.concat(
      aa(s.children, t, a)
    )) : (t || s.type !== Ue) && l.push(a != null ? qt(s, { key: a }) : s);
  }
  if (i > 1)
    for (let o = 0; o < l.length; o++)
      l[o].patchFlag = -2;
  return l;
}
// @__NO_SIDE_EFFECTS__
function xe(e, t) {
  return de(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Re({ name: e.name }, t, { setup: e })
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
function zn(e, t, n, l, i = !1) {
  if (le(e)) {
    e.forEach(
      (_, k) => zn(
        _,
        t && (le(t) ? t[k] : t),
        n,
        l,
        i
      )
    );
    return;
  }
  if (Cn(l) && !i) {
    l.shapeFlag & 512 && l.type.__asyncResolved && l.component.subTree.component && zn(e, t, n, l.component.subTree);
    return;
  }
  const o = l.shapeFlag & 4 ? oi(l.component) : l.el, s = i ? null : o, { i: a, r } = e, c = t && t.r, u = a.refs === _e ? a.refs = {} : a.refs, d = a.setupState, h = /* @__PURE__ */ ge(d), g = d === _e ? Ss : (_) => Mo(u, _) ? !1 : ve(h, _), m = (_, k) => !(k && Mo(u, k));
  if (c != null && c !== r) {
    if (ko(t), Fe(c))
      u[c] = null, g(c) && (d[c] = null);
    else if (/* @__PURE__ */ fe(c)) {
      const _ = t;
      m(c, _.k) && (c.value = null), _.k && (u[_.k] = null);
    }
  }
  if (de(r))
    sl(r, a, 12, [s, u]);
  else {
    const _ = Fe(r), k = /* @__PURE__ */ fe(r);
    if (_ || k) {
      const x = () => {
        if (e.f) {
          const S = _ ? g(r) ? d[r] : u[r] : m() || !e.k ? r.value : u[e.k];
          if (i)
            le(S) && qi(S, o);
          else if (le(S))
            S.includes(o) || S.push(o);
          else if (_)
            u[r] = [o], g(r) && (d[r] = u[r]);
          else {
            const M = [o];
            m(r, e.k) && (r.value = M), e.k && (u[e.k] = M);
          }
        } else _ ? (u[r] = s, g(r) && (d[r] = s)) : k && (m(r, e.k) && (r.value = s), e.k && (u[e.k] = s));
      };
      if (s) {
        const S = () => {
          x(), Dl.delete(e);
        };
        S.id = -1, Dl.set(e, S), je(S, n);
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
const Cn = (e) => !!e.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function Ot(e) {
  de(e) && (e = { loader: e });
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
  const h = () => (d++, c = null, g()), g = () => {
    let m;
    return c || (m = c = t().catch((_) => {
      if (_ = _ instanceof Error ? _ : new Error(String(_)), r)
        return new Promise((k, x) => {
          r(_, () => k(h()), () => x(_), d + 1);
        });
      throw _;
    }).then((_) => m !== c && c ? c : (_ && (_.__esModule || _[Symbol.toStringTag] === "Module") && (_ = _.default), u = _, _)));
  };
  return /* @__PURE__ */ xe({
    name: "AsyncComponentWrapper",
    __asyncLoader: g,
    __asyncHydrate(m, _, k) {
      const x = m.isConnected;
      let S = !1;
      (_.bu || (_.bu = [])).push(() => S = !0);
      const M = () => {
        S || !m.parentNode || x && !m.isConnected || k();
      }, v = o ? () => {
        const y = o(
          M,
          (w) => uu(m, w)
        );
        y && (_.bum || (_.bum = [])).push(y);
      } : M;
      u ? v() : g().then(() => !_.isUnmounted && v());
    },
    get __asyncResolved() {
      return u;
    },
    setup() {
      const m = Oe;
      if (lo(m), u)
        return () => hl(u, m);
      const _ = (y) => {
        c = null, al(
          y,
          m,
          13,
          !l
        );
      };
      if (a && m.suspense || Ln)
        return g().then((y) => () => hl(y, m)).catch((y) => (_(y), () => l ? j(l, {
          error: y
        }) : null));
      const k = /* @__PURE__ */ se(!1), x = /* @__PURE__ */ se(), S = /* @__PURE__ */ se(!!i);
      let M, v;
      return ti(() => {
        M != null && clearTimeout(M), v != null && clearTimeout(v);
      }), i && (v = setTimeout(() => {
        m.isUnmounted || (S.value = !1);
      }, i)), s != null && (M = setTimeout(() => {
        if (!m.isUnmounted && !k.value && !x.value) {
          const y = new Error(
            `Async component timed out after ${s}ms.`
          );
          _(y), x.value = y;
        }
      }, s)), g().then(() => {
        m.isUnmounted || (k.value = !0, m.parent && rl(m.parent.vnode) && m.parent.update());
      }).catch((y) => {
        if (m.isUnmounted) {
          c = null;
          return;
        }
        _(y), x.value = y;
      }), () => {
        if (k.value && u)
          return hl(u, m);
        if (x.value && l)
          return j(l, {
            error: x.value
          });
        if (n && !S.value)
          return hl(
            n,
            m
          );
      };
    }
  });
}
function hl(e, t) {
  const { ref: n, props: l, children: i, ce: o } = t.vnode, s = j(e, l, i);
  return s.ref = n, s.ce = o, delete t.vnode.ce, s;
}
const rl = (e) => e.type.__isKeepAlive;
function cu(e, t) {
  ra(e, "a", t);
}
function du(e, t) {
  ra(e, "da", t);
}
function ra(e, t, n = Oe) {
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
      rl(i.parent.vnode) && fu(l, t, n, i), i = i.parent;
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
function ei(e, t, n = Oe, l = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...s) => {
      Pt();
      const a = cl(n), r = st(t, n, e, s);
      return a(), Rt(), r;
    });
    return l ? i.unshift(o) : i.push(o), o;
  }
}
const $t = (e) => (t, n = Oe) => {
  (!Ln || e === "sp") && ei(e, (...l) => t(...l), n);
}, pu = $t("bm"), Dn = $t("m"), mu = $t(
  "bu"
), hu = $t("u"), ul = $t(
  "bum"
), ti = $t("um"), gu = $t(
  "sp"
), _u = $t("rtg"), bu = $t("rtc");
function vu(e, t = Oe) {
  ei("ec", e, t);
}
const yu = "components", ua = /* @__PURE__ */ Symbol.for("v-ndc");
function wu(e) {
  return Fe(e) ? Su(yu, e, !1) || e : e || ua;
}
function Su(e, t, n = !0, l = !1) {
  const i = $e || Oe;
  if (i) {
    const o = i.type;
    {
      const a = oc(
        o,
        !1
      );
      if (a && (a === t || a === Ge(t) || a === ql(Ge(t))))
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
  return e && (e[t] || e[Ge(t)] || e[ql(Ge(t))]);
}
function De(e, t, n, l) {
  let i;
  const o = n, s = le(e);
  if (s || Fe(e)) {
    const a = s && /* @__PURE__ */ It(e);
    let r = !1, c = !1;
    a && (r = !/* @__PURE__ */ Je(e), c = /* @__PURE__ */ Nt(e), e = Ql(e)), i = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      i[u] = t(
        r ? c ? Fn(ut(e[u])) : ut(e[u]) : e[u],
        u,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++)
      i[a] = t(a + 1, a, void 0, o);
  } else if (ye(e))
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
  if ($e.ce || $e.parent && Cn($e.parent) && $e.parent.ce) {
    const c = n, u = Object.keys(c).length > 0;
    return A(), Se(
      ce,
      null,
      [j("slot", c, l)],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const a = Dt.length;
  A();
  let r;
  try {
    const c = s && ca(s(n)), u = n.key || o || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    c && c.key;
    r = Se(
      ce,
      {
        key: (u && !Qe(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!c && l ? "_fb" : "")
      },
      c || (l ? l() : []),
      c && e._ === 1 ? 64 : -2
    );
  } catch (c) {
    for (let u = Dt.length; u > a; u--) ao();
    throw c;
  } finally {
    s && s._c && (s._d = !0);
  }
  return r;
}
function ca(e) {
  return e.some((t) => nl(t) ? !(t.type === Ue || t.type === ce && !ca(t.children)) : !0) ? e : null;
}
const Di = (e) => e ? Ia(e) ? oi(e) : Di(e.parent) : null, Kn = (
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
    $parent: (e) => Di(e.parent),
    $root: (e) => Di(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => fa(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      to(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = In.bind(e.proxy)),
    $watch: (e) => nu.bind(e)
  })
), gi = (e, t) => e !== _e && !e.__isScriptSetup && ve(e, t), Cu = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: l, data: i, props: o, accessCache: s, type: a, appContext: r } = e;
    if (t[0] !== "$") {
      const h = s[t];
      if (h !== void 0)
        switch (h) {
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
        if (i !== _e && ve(i, t))
          return s[t] = 2, i[t];
        if (ve(o, t))
          return s[t] = 3, o[t];
        if (n !== _e && ve(n, t))
          return s[t] = 4, n[t];
        Pi && (s[t] = 0);
      }
    }
    const c = Kn[t];
    let u, d;
    if (c)
      return t === "$attrs" && He(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = a.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== _e && ve(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      d = r.config.globalProperties, ve(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: l, setupState: i, ctx: o } = e;
    return gi(i, t) ? (i[t] = n, !0) : l !== _e && ve(l, t) ? (l[t] = n, !0) : ve(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: l, appContext: i, props: o, type: s }
  }, a) {
    let r;
    return !!(n[a] || e !== _e && a[0] !== "$" && ve(e, a) || gi(t, a) || ve(o, a) || ve(l, a) || ve(Kn, a) || ve(i.config.globalProperties, a) || (r = s.__cssModules) && r[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ve(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Pl(e) {
  return le(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function qe(e, t) {
  return !e || !t ? e || t : le(e) && le(t) ? e.concat(t) : Re({}, Pl(e), Pl(t));
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
    mounted: h,
    beforeUpdate: g,
    updated: m,
    activated: _,
    deactivated: k,
    beforeDestroy: x,
    beforeUnmount: S,
    destroyed: M,
    unmounted: v,
    render: y,
    renderTracked: w,
    renderTriggered: N,
    errorCaptured: $,
    serverPrefetch: T,
    // public API
    expose: E,
    inheritAttrs: K,
    // assets
    components: C,
    directives: V,
    filters: H
  } = t;
  if (c && Mu(c, l, null), s)
    for (const D in s) {
      const F = s[D];
      de(F) && (l[D] = F.bind(n));
    }
  if (i) {
    const D = i.call(n, n);
    ye(D) && (e.data = /* @__PURE__ */ Xt(D));
  }
  if (Pi = !0, o)
    for (const D in o) {
      const F = o[D], G = de(F) ? F.bind(n, n) : de(F.get) ? F.get.bind(n, n) : bt, pe = !de(F) && de(F.set) ? F.set.bind(n) : bt, Le = Q({
        get: G,
        set: pe
      });
      Object.defineProperty(l, D, {
        enumerable: !0,
        configurable: !0,
        get: () => Le.value,
        set: (ke) => Le.value = ke
      });
    }
  if (a)
    for (const D in a)
      da(a[D], l, n, D);
  if (r) {
    const D = de(r) ? r.call(n) : r;
    Reflect.ownKeys(D).forEach((F) => {
      Jr(F, D[F]);
    });
  }
  u && Io(u, e, "c");
  function O(D, F) {
    le(F) ? F.forEach((G) => D(G.bind(n))) : F && D(F.bind(n));
  }
  if (O(pu, d), O(Dn, h), O(mu, g), O(hu, m), O(cu, _), O(du, k), O(vu, $), O(bu, w), O(_u, N), O(ul, S), O(ti, v), O(gu, T), le(E))
    if (E.length) {
      const D = e.exposed || (e.exposed = {});
      E.forEach((F) => {
        Object.defineProperty(D, F, {
          get: () => n[F],
          set: (G) => n[F] = G,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  y && e.render === bt && (e.render = y), K != null && (e.inheritAttrs = K), C && (e.components = C), V && (e.directives = V), T && lo(e);
}
function Mu(e, t, n = bt) {
  le(e) && (e = Ri(e));
  for (const l in e) {
    const i = e[l];
    let o;
    ye(i) ? "default" in i ? o = jn(
      i.from || l,
      i.default,
      !0
    ) : o = jn(i.from || l) : o = jn(i), /* @__PURE__ */ fe(o) ? Object.defineProperty(t, l, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[l] = o;
  }
}
function Io(e, t, n) {
  st(
    le(e) ? e.map((l) => l.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function da(e, t, n, l) {
  let i = l.includes(".") ? Zs(n, l) : () => n[l];
  if (Fe(e)) {
    const o = t[e];
    de(o) && Be(i, o);
  } else if (de(e))
    Be(i, e.bind(n));
  else if (ye(e))
    if (le(e))
      e.forEach((o) => da(o, t, n, l));
    else {
      const o = de(e.handler) ? e.handler.bind(n) : t[e.handler];
      de(o) && Be(i, o, e);
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
  ), Rl(r, t, s)), ye(t) && o.set(t, r), r;
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
  methods: $n,
  computed: $n,
  // lifecycle
  beforeCreate: We,
  created: We,
  beforeMount: We,
  mounted: We,
  beforeUpdate: We,
  updated: We,
  beforeDestroy: We,
  beforeUnmount: We,
  destroyed: We,
  unmounted: We,
  activated: We,
  deactivated: We,
  errorCaptured: We,
  serverPrefetch: We,
  // assets
  components: $n,
  directives: $n,
  // watch
  watch: Lu,
  // provide / inject
  provide: Do,
  inject: Fu
};
function Do(e, t) {
  return t ? e ? function() {
    return Re(
      de(e) ? e.call(this, this) : e,
      de(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Fu(e, t) {
  return $n(Ri(e), Ri(t));
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
function We(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function $n(e, t) {
  return e ? Re(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Po(e, t) {
  return e ? le(e) && le(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Re(
    /* @__PURE__ */ Object.create(null),
    Pl(e),
    Pl(t ?? {})
  ) : t;
}
function Lu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Re(/* @__PURE__ */ Object.create(null), e);
  for (const l in t)
    n[l] = We(e[l], t[l]);
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
    de(l) || (l = Re({}, l)), i != null && !ye(i) && (i = null);
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
        return s.has(u) || (u && de(u.install) ? (s.add(u), u.install(c, ...d)) : de(u) && (s.add(u), u(c, ...d))), c;
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
      mount(u, d, h) {
        if (!r) {
          const g = c._ceVNode || j(l, i);
          return g.appContext = o, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(g, u, h), r = !0, c._container = u, u.__vue_app__ = c, oi(g.component);
        }
      },
      onUnmount(u) {
        a.push(u);
      },
      unmount() {
        r && (st(
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
function at(e, t, n = _e) {
  const l = ii(), i = Ge(t), o = Vt(t), s = ma(e, i), a = Br((r, c) => {
    let u, d = _e, h;
    return tu(() => {
      const g = e[i];
      Ve(u, g) && (u = g, c());
    }), {
      get() {
        return r(), n.get ? n.get(u) : u;
      },
      set(g) {
        const m = n.set ? n.set(g) : g;
        if (!Ve(m, u) && !(d !== _e && Ve(g, d)))
          return;
        const _ = l.vnode.props, k = !!(_ && // check if parent has passed v-model
        (t in _ || i in _ || o in _) && (`onUpdate:${t}` in _ || `onUpdate:${i}` in _ || `onUpdate:${o}` in _));
        k || (u = g, c()), l.emit(`update:${t}`, m), Ve(g, d) && (Ve(g, m) && !Ve(m, h) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        k && d !== _e && !Ve(m, u)) && c(), d = g, h = m;
      }
    };
  });
  return a[Symbol.iterator] = () => {
    let r = 0;
    return {
      next() {
        return r < 2 ? { value: r++ ? s || _e : a, done: !1 } : { done: !0 };
      }
    };
  }, a;
}
const ma = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ge(t)}Modifiers`] || e[`${Vt(t)}Modifiers`];
function Pu(e, t, ...n) {
  if (e.isUnmounted) return;
  const l = e.vnode.props || _e;
  let i = n;
  const o = t.startsWith("update:"), s = o && ma(l, t.slice(7));
  s && (s.trim && (i = n.map((u) => Fe(u) ? u.trim() : u)), s.number && (i = n.map(Xl)));
  let a, r = l[a = ci(t)] || // also try camelCase event handler (#2249)
  l[a = ci(Ge(t))];
  !r && o && (r = l[a = ci(Vt(t))]), r && st(
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
    e.emitted[a] = !0, st(
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
  if (!de(e)) {
    const r = (c) => {
      const u = ha(c, t, !0);
      u && (a = !0, Re(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
  }
  return !o && !a ? (ye(e) && l.set(e, null), null) : (le(o) ? o.forEach((r) => s[r] = null) : Re(s, o), ye(e) && l.set(e, s), s);
}
function ni(e, t) {
  return !e || !Gl(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ve(e, t[0].toLowerCase() + t.slice(1)) || ve(e, Vt(t)) || ve(e, t));
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
    data: h,
    setupState: g,
    ctx: m,
    inheritAttrs: _
  } = e, k = Il(e);
  let x, S;
  try {
    if (n.shapeFlag & 4) {
      const v = i || l, y = v;
      x = gt(
        c.call(
          y,
          v,
          u,
          d,
          g,
          h,
          m
        )
      ), S = a;
    } else {
      const v = t;
      x = gt(
        v.length > 1 ? v(
          d,
          { attrs: a, slots: s, emit: r }
        ) : v(
          d,
          null
        )
      ), S = t.props ? a : Nu(a);
    }
  } catch (v) {
    Dt.length = 0, al(v, e, 1), x = j(Ue);
  }
  let M = x;
  if (S && _ !== !1) {
    const v = Object.keys(S), { shapeFlag: y } = M;
    v.length && y & 7 && (o && v.some(Wl) && (S = Tu(
      S,
      o
    )), M = qt(M, S, !1, !0));
  }
  return n.dirs && (M = qt(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs), n.transition && el(M, n.transition), x = M, Il(k), x;
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
        const h = u[d];
        if (ga(s, l, h) && !ni(c, h))
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
  return n === "style" && ye(l) && ye(i) ? !ol(l, i) : l !== i;
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
  } = e, a = /* @__PURE__ */ ge(i), [r] = e.propsOptions;
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
        let h = u[d];
        if (ni(e.emitsOptions, h))
          continue;
        const g = t[h];
        if (r)
          if (ve(o, h))
            g !== o[h] && (o[h] = g, c = !0);
          else {
            const m = Ge(h);
            i[m] = Ni(
              r,
              a,
              m,
              g,
              e,
              !1
            );
          }
        else
          g !== o[h] && (o[h] = g, c = !0);
      }
    }
  } else {
    ya(e, t, i, o) && (c = !0);
    let u;
    for (const d in a)
      (!t || // for camelCase
      !ve(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Vt(d)) === d || !ve(t, u))) && (r ? n && // for camelCase
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
        (!t || !ve(t, d)) && (delete o[d], c = !0);
  }
  c && Ft(e.attrs, "set", "");
}
function ya(e, t, n, l) {
  const [i, o] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let r in t) {
      if (Un(r))
        continue;
      const c = t[r];
      let u;
      i && ve(i, u = Ge(r)) ? !o || !o.includes(u) ? n[u] = c : (a || (a = {}))[u] = c : ni(e.emitsOptions, r) || (!(r in l) || c !== l[r]) && (l[r] = c, s = !0);
    }
  if (o) {
    const r = /* @__PURE__ */ ge(n), c = a || _e;
    for (let u = 0; u < o.length; u++) {
      const d = o[u];
      n[d] = Ni(
        i,
        r,
        d,
        c[d],
        e,
        !ve(c, d)
      );
    }
  }
  return s;
}
function Ni(e, t, n, l, i, o) {
  const s = e[n];
  if (s != null) {
    const a = ve(s, "default");
    if (a && l === void 0) {
      const r = s.default;
      if (s.type !== Function && !s.skipFactory && de(r)) {
        const { propsDefaults: c } = i;
        if (n in c)
          l = c[n];
        else {
          const u = cl(i);
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
    ] && (l === "" || l === Vt(n)) && (l = !0));
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
  if (!de(e)) {
    const u = (d) => {
      r = !0;
      const [h, g] = wa(d, t, !0);
      Re(s, h), g && a.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !r)
    return ye(e) && l.set(e, wn), wn;
  if (le(o))
    for (let u = 0; u < o.length; u++) {
      const d = Ge(o[u]);
      To(d) && (s[d] = _e);
    }
  else if (o)
    for (const u in o) {
      const d = Ge(u);
      if (To(d)) {
        const h = o[u], g = s[d] = le(h) || de(h) ? { type: h } : Re({}, h), m = g.type;
        let _ = !1, k = !0;
        if (le(m))
          for (let x = 0; x < m.length; ++x) {
            const S = m[x], M = de(S) && S.name;
            if (M === "Boolean") {
              _ = !0;
              break;
            } else M === "String" && (k = !1);
          }
        else
          _ = de(m) && m.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = _, g[
          1
          /* shouldCastTrue */
        ] = k, (_ || ve(g, "default")) && a.push(d);
      }
    }
  const c = [s, a];
  return ye(e) && l.set(e, c), c;
}
function To(e) {
  return e[0] !== "$" && !Un(e);
}
const io = (e) => e === "_" || e === "_ctx" || e === "$stable", oo = (e) => le(e) ? e.map(gt) : [gt(e)], Hu = (e, t, n) => {
  if (t._n)
    return t;
  const l = Kt((...i) => oo(t(...i)), n);
  return l._c = !1, l;
}, Sa = (e, t, n) => {
  const l = e._ctx;
  for (const i in e) {
    if (io(i)) continue;
    const o = e[i];
    if (de(o))
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
  let o = !0, s = _e;
  if (l.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = !1 : Ca(i, t, n) : (o = !t.$stable, Sa(t, i)), s = t;
  } else t && (xa(e, t), s = { default: 1 });
  if (o)
    for (const a in i)
      !io(a) && s[a] == null && delete i[a];
}, je = qu;
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
    nextSibling: h,
    setScopeId: g = bt,
    insertStaticContent: m
  } = e, _ = (p, b, P, z = null, W = null, B = null, Z = void 0, Y = null, q = !!b.dynamicChildren) => {
    if (p === b)
      return;
    p && !sn(p, b) && (z = fn(p), ke(p, W, B, !0), p = null), b.patchFlag === -2 && (q = !1, b.dynamicChildren = null);
    const { type: U, ref: ae, shapeFlag: ee } = b;
    switch (U) {
      case li:
        k(p, b, P, z);
        break;
      case Ue:
        x(p, b, P, z);
        break;
      case bi:
        p == null && S(b, P, z, Z);
        break;
      case ce:
        C(
          p,
          b,
          P,
          z,
          W,
          B,
          Z,
          Y,
          q
        );
        break;
      default:
        ee & 1 ? y(
          p,
          b,
          P,
          z,
          W,
          B,
          Z,
          Y,
          q
        ) : ee & 6 ? V(
          p,
          b,
          P,
          z,
          W,
          B,
          Z,
          Y,
          q
        ) : (ee & 64 || ee & 128) && U.process(
          p,
          b,
          P,
          z,
          W,
          B,
          Z,
          Y,
          q,
          re
        );
    }
    ae != null && W ? zn(ae, p && p.ref, B, b || p, !b) : ae == null && p && p.ref != null && zn(p.ref, null, B, p, !0);
  }, k = (p, b, P, z) => {
    if (p == null)
      l(
        b.el = a(b.children),
        P,
        z
      );
    else {
      const W = b.el = p.el;
      b.children !== p.children && c(W, b.children);
    }
  }, x = (p, b, P, z) => {
    p == null ? l(
      b.el = r(b.children || ""),
      P,
      z
    ) : b.el = p.el;
  }, S = (p, b, P, z) => {
    [p.el, p.anchor] = m(
      p.children,
      b,
      P,
      z,
      p.el,
      p.anchor
    );
  }, M = ({ el: p, anchor: b }, P, z) => {
    let W;
    for (; p && p !== b; )
      W = h(p), l(p, P, z), p = W;
    l(b, P, z);
  }, v = ({ el: p, anchor: b }) => {
    let P;
    for (; p && p !== b; )
      P = h(p), i(p), p = P;
    i(b);
  }, y = (p, b, P, z, W, B, Z, Y, q) => {
    if (b.type === "svg" ? Z = "svg" : b.type === "math" && (Z = "mathml"), p == null)
      w(
        b,
        P,
        z,
        W,
        B,
        Z,
        Y,
        q
      );
    else {
      const U = p.el && p.el._isVueCE ? p.el : null;
      try {
        U && U._beginPatch(), T(
          p,
          b,
          W,
          B,
          Z,
          Y,
          q
        );
      } finally {
        U && U._endPatch();
      }
    }
  }, w = (p, b, P, z, W, B, Z, Y) => {
    let q, U;
    const { props: ae, shapeFlag: ee, transition: ie, dirs: ue } = p;
    if (q = p.el = s(
      p.type,
      B,
      ae && ae.is,
      ae
    ), ee & 8 ? u(q, p.children) : ee & 16 && $(
      p.children,
      q,
      null,
      z,
      W,
      _i(p, B),
      Z,
      Y
    ), ue && Zt(p, null, z, "created"), N(q, p, p.scopeId, Z, z), ae) {
      for (const Ce in ae)
        Ce !== "value" && !Un(Ce) && o(q, Ce, null, ae[Ce], B, z);
      "value" in ae && o(q, "value", null, ae.value, B), (U = ae.onVnodeBeforeMount) && pt(U, z, p);
    }
    ue && Zt(p, null, z, "beforeMount");
    const he = zu(W, ie);
    he && ie.beforeEnter(q), l(q, b, P), ((U = ae && ae.onVnodeMounted) || he || ue) && je(() => {
      try {
        U && pt(U, z, p), he && ie.enter(q), ue && Zt(p, null, z, "mounted");
      } finally {
      }
    }, W);
  }, N = (p, b, P, z, W) => {
    if (P && g(p, P), z)
      for (let B = 0; B < z.length; B++)
        g(p, z[B]);
    if (W) {
      let B = W.subTree;
      if (b === B || ka(B.type) && (B.ssContent === b || B.ssFallback === b)) {
        const Z = W.vnode;
        N(
          p,
          Z,
          Z.scopeId,
          Z.slotScopeIds,
          W.parent
        );
      }
    }
  }, $ = (p, b, P, z, W, B, Z, Y, q = 0) => {
    for (let U = q; U < p.length; U++) {
      const ae = p[U] = Y ? At(p[U]) : gt(p[U]);
      _(
        null,
        ae,
        b,
        P,
        z,
        W,
        B,
        Z,
        Y
      );
    }
  }, T = (p, b, P, z, W, B, Z) => {
    const Y = b.el = p.el;
    let { patchFlag: q, dynamicChildren: U, dirs: ae } = b;
    q |= p.patchFlag & 16;
    const ee = p.props || _e, ie = b.props || _e;
    let ue;
    if (P && en(P, !1), (ue = ie.onVnodeBeforeUpdate) && pt(ue, P, b, p), ae && Zt(b, p, P, "beforeUpdate"), P && en(P, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    U && (!p.dynamicChildren || p.dynamicChildren.length !== U.length) && (q = 0, Z = !1, U = null), (ee.innerHTML && ie.innerHTML == null || ee.textContent && ie.textContent == null) && u(Y, ""), U ? E(
      p.dynamicChildren,
      U,
      Y,
      P,
      z,
      _i(b, W),
      B
    ) : Z || F(
      p,
      b,
      Y,
      null,
      P,
      z,
      _i(b, W),
      B,
      !1
    ), q > 0) {
      if (q & 16)
        K(Y, ee, ie, P, W);
      else if (q & 2 && ee.class !== ie.class && o(Y, "class", null, ie.class, W), q & 4 && o(Y, "style", ee.style, ie.style, W), q & 8) {
        const he = b.dynamicProps;
        for (let Ce = 0; Ce < he.length; Ce++) {
          const we = he[Ce], Pe = ee[we], Ee = ie[we];
          (Ee !== Pe || we === "value") && o(Y, we, Pe, Ee, W, P);
        }
      }
      q & 1 && p.children !== b.children && u(Y, b.children);
    } else !Z && U == null && K(Y, ee, ie, P, W);
    ((ue = ie.onVnodeUpdated) || ae) && je(() => {
      ue && pt(ue, P, b, p), ae && Zt(b, p, P, "updated");
    }, z);
  }, E = (p, b, P, z, W, B, Z) => {
    for (let Y = 0; Y < b.length; Y++) {
      const q = p[Y], U = b[Y], ae = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        q.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (q.type === ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !sn(q, U) || // - In the case of a component, it could contain anything.
        q.shapeFlag & 198) ? d(q.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          P
        )
      );
      _(
        q,
        U,
        ae,
        null,
        z,
        W,
        B,
        Z,
        !0
      );
    }
  }, K = (p, b, P, z, W) => {
    if (b !== P) {
      if (b !== _e)
        for (const B in b)
          !Un(B) && !(B in P) && o(
            p,
            B,
            b[B],
            null,
            W,
            z
          );
      for (const B in P) {
        if (Un(B)) continue;
        const Z = P[B], Y = b[B];
        Z !== Y && B !== "value" && o(p, B, Y, Z, W, z);
      }
      "value" in P && o(p, "value", b.value, P.value, W);
    }
  }, C = (p, b, P, z, W, B, Z, Y, q) => {
    const U = b.el = p ? p.el : a(""), ae = b.anchor = p ? p.anchor : a("");
    let { patchFlag: ee, dynamicChildren: ie, slotScopeIds: ue } = b;
    ue && (Y = Y ? Y.concat(ue) : ue), p == null ? (l(U, P, z), l(ae, P, z), $(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      P,
      ae,
      W,
      B,
      Z,
      Y,
      q
    )) : ee > 0 && ee & 64 && ie && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === ie.length ? (E(
      p.dynamicChildren,
      ie,
      P,
      W,
      B,
      Z,
      Y
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || W && b === W.subTree) && so(
      p,
      b,
      !0
      /* shallow */
    )) : F(
      p,
      b,
      P,
      ae,
      W,
      B,
      Z,
      Y,
      q
    );
  }, V = (p, b, P, z, W, B, Z, Y, q) => {
    b.slotScopeIds = Y, p == null ? b.shapeFlag & 512 ? W.ctx.activate(
      b,
      P,
      z,
      Z,
      q
    ) : H(
      b,
      P,
      z,
      W,
      B,
      Z,
      q
    ) : R(p, b, q);
  }, H = (p, b, P, z, W, B, Z) => {
    const Y = p.component = ec(
      p,
      z,
      W
    );
    if (rl(p) && (Y.ctx.renderer = re), tc(Y, !1, Z), Y.asyncDep) {
      if (W && W.registerDep(Y, O, Z), !p.el) {
        const q = Y.subTree = j(Ue);
        x(null, q, b, P), p.placeholder = q.el;
      }
    } else
      O(
        Y,
        p,
        b,
        P,
        W,
        B,
        Z
      );
  }, R = (p, b, P) => {
    const z = b.component = p.component;
    if (Eu(p, b, P))
      if (z.asyncDep && !z.asyncResolved) {
        D(z, b, P);
        return;
      } else
        z.next = b, z.update();
    else
      b.el = p.el, z.vnode = b;
  }, O = (p, b, P, z, W, B, Z) => {
    const Y = () => {
      if (p.isMounted) {
        let { next: ee, bu: ie, u: ue, parent: he, vnode: Ce } = p;
        {
          const dt = Aa(p);
          if (dt) {
            ee && (ee.el = Ce.el, D(p, ee, Z)), dt.asyncDep.then(() => {
              je(() => {
                p.isUnmounted || U();
              }, W);
            });
            return;
          }
        }
        let we = ee, Pe;
        en(p, !1), ee ? (ee.el = Ce.el, D(p, ee, Z)) : ee = Ce, ie && yl(ie), (Pe = ee.props && ee.props.onVnodeBeforeUpdate) && pt(Pe, he, ee, Ce), en(p, !0);
        const Ee = Ro(p), ct = p.subTree;
        p.subTree = Ee, _(
          ct,
          Ee,
          // parent may have changed if it's in a teleport
          d(ct.el),
          // anchor may have changed if it's in a fragment
          fn(ct),
          p,
          W,
          B
        ), ee.el = Ee.el, we === null && Vu(p, Ee.el), ue && je(ue, W), (Pe = ee.props && ee.props.onVnodeUpdated) && je(
          () => pt(Pe, he, ee, Ce),
          W
        );
      } else {
        let ee;
        const { el: ie, props: ue } = b, { bm: he, m: Ce, parent: we, root: Pe, type: Ee } = p, ct = Cn(b);
        en(p, !1), he && yl(he), !ct && (ee = ue && ue.onVnodeBeforeMount) && pt(ee, we, b), en(p, !0);
        {
          Pe.ce && Pe.ce._hasShadowRoot() && Pe.ce._injectChildStyle(
            Ee,
            p.parent ? p.parent.type : void 0
          );
          const dt = p.subTree = Ro(p);
          _(
            null,
            dt,
            P,
            z,
            p,
            W,
            B
          ), b.el = dt.el;
        }
        if (Ce && je(Ce, W), !ct && (ee = ue && ue.onVnodeMounted)) {
          const dt = b;
          je(
            () => pt(ee, we, dt),
            W
          );
        }
        (b.shapeFlag & 256 || we && Cn(we.vnode) && we.vnode.shapeFlag & 256) && p.a && je(p.a, W), p.isMounted = !0, b = P = z = null;
      }
    };
    p.scope.on();
    const q = p.effect = new Rs(Y);
    p.scope.off();
    const U = p.update = q.run.bind(q), ae = p.job = q.runIfDirty.bind(q);
    ae.i = p, ae.id = p.uid, q.scheduler = () => to(ae), en(p, !0), U();
  }, D = (p, b, P) => {
    b.component = p;
    const z = p.vnode.props;
    p.vnode = b, p.next = null, $u(p, b.props, z, P), Gu(p, b.children, P), Pt(), So(p), Rt();
  }, F = (p, b, P, z, W, B, Z, Y, q = !1) => {
    const U = p && p.children, ae = p ? p.shapeFlag : 0, ee = b.children, { patchFlag: ie, shapeFlag: ue } = b;
    if (ie > 0) {
      if (ie & 128) {
        pe(
          U,
          ee,
          P,
          z,
          W,
          B,
          Z,
          Y,
          q
        );
        return;
      } else if (ie & 256) {
        G(
          U,
          ee,
          P,
          z,
          W,
          B,
          Z,
          Y,
          q
        );
        return;
      }
    }
    ue & 8 ? (ae & 16 && Qt(U, W, B), ee !== U && u(P, ee)) : ae & 16 ? ue & 16 ? pe(
      U,
      ee,
      P,
      z,
      W,
      B,
      Z,
      Y,
      q
    ) : Qt(U, W, B, !0) : (ae & 8 && u(P, ""), ue & 16 && $(
      ee,
      P,
      z,
      W,
      B,
      Z,
      Y,
      q
    ));
  }, G = (p, b, P, z, W, B, Z, Y, q) => {
    p = p || wn, b = b || wn;
    const U = p.length, ae = b.length, ee = Math.min(U, ae);
    let ie;
    for (ie = 0; ie < ee; ie++) {
      const ue = b[ie] = q ? At(b[ie]) : gt(b[ie]);
      _(
        p[ie],
        ue,
        P,
        null,
        W,
        B,
        Z,
        Y,
        q
      );
    }
    U > ae ? Qt(
      p,
      W,
      B,
      !0,
      !1,
      ee
    ) : $(
      b,
      P,
      z,
      W,
      B,
      Z,
      Y,
      q,
      ee
    );
  }, pe = (p, b, P, z, W, B, Z, Y, q) => {
    let U = 0;
    const ae = b.length;
    let ee = p.length - 1, ie = ae - 1;
    for (; U <= ee && U <= ie; ) {
      const ue = p[U], he = b[U] = q ? At(b[U]) : gt(b[U]);
      if (sn(ue, he))
        _(
          ue,
          he,
          P,
          null,
          W,
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
      const ue = p[ee], he = b[ie] = q ? At(b[ie]) : gt(b[ie]);
      if (sn(ue, he))
        _(
          ue,
          he,
          P,
          null,
          W,
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
        const ue = ie + 1, he = ue < ae ? b[ue].el : z;
        for (; U <= ie; )
          _(
            null,
            b[U] = q ? At(b[U]) : gt(b[U]),
            P,
            he,
            W,
            B,
            Z,
            Y,
            q
          ), U++;
      }
    } else if (U > ie)
      for (; U <= ee; )
        ke(p[U], W, B, !0), U++;
    else {
      const ue = U, he = U, Ce = /* @__PURE__ */ new Map();
      for (U = he; U <= ie; U++) {
        const Xe = b[U] = q ? At(b[U]) : gt(b[U]);
        Xe.key != null && Ce.set(Xe.key, U);
      }
      let we, Pe = 0;
      const Ee = ie - he + 1;
      let ct = !1, dt = 0;
      const Pn = new Array(Ee);
      for (U = 0; U < Ee; U++) Pn[U] = 0;
      for (U = ue; U <= ee; U++) {
        const Xe = p[U];
        if (Pe >= Ee) {
          ke(Xe, W, B, !0);
          continue;
        }
        let ft;
        if (Xe.key != null)
          ft = Ce.get(Xe.key);
        else
          for (we = he; we <= ie; we++)
            if (Pn[we - he] === 0 && sn(Xe, b[we])) {
              ft = we;
              break;
            }
        ft === void 0 ? ke(Xe, W, B, !0) : (Pn[ft - he] = U + 1, ft >= dt ? dt = ft : ct = !0, _(
          Xe,
          b[ft],
          P,
          null,
          W,
          B,
          Z,
          Y,
          q
        ), Pe++);
      }
      const ho = ct ? Ku(Pn) : wn;
      for (we = ho.length - 1, U = Ee - 1; U >= 0; U--) {
        const Xe = he + U, ft = b[Xe], go = b[Xe + 1], _o = Xe + 1 < ae ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          go.el || Ma(go)
        ) : z;
        Pn[U] === 0 ? _(
          null,
          ft,
          P,
          _o,
          W,
          B,
          Z,
          Y,
          q
        ) : ct && (we < 0 || U !== ho[we] ? Le(ft, P, _o, 2) : we--);
      }
    }
  }, Le = (p, b, P, z, W = null) => {
    const { el: B, type: Z, transition: Y, children: q, shapeFlag: U } = p;
    if (U & 6) {
      Le(p.component.subTree, b, P, z);
      return;
    }
    if (U & 128) {
      p.suspense.move(b, P, z);
      return;
    }
    if (U & 64) {
      Z.move(p, b, P, re);
      return;
    }
    if (Z === ce) {
      l(B, b, P);
      for (let ee = 0; ee < q.length; ee++)
        Le(q[ee], b, P, z);
      l(p.anchor, b, P);
      return;
    }
    if (Z === bi) {
      M(p, b, P);
      return;
    }
    if (z !== 2 && U & 1 && Y)
      if (z === 0)
        Y.persisted && !B[lt] ? l(B, b, P) : (Y.beforeEnter(B), l(B, b, P), je(() => Y.enter(B), W));
      else {
        const { leave: ee, delayLeave: ie, afterLeave: ue } = Y, he = () => {
          p.ctx.isUnmounted ? i(B) : l(B, b, P);
        }, Ce = () => {
          const we = B._isLeaving || !!B[lt];
          B._isLeaving && B[lt](
            !0
            /* cancelled */
          ), Y.persisted && !we ? he() : ee(B, () => {
            he(), ue && ue();
          });
        };
        ie ? ie(B, he, Ce) : Ce();
      }
    else
      l(B, b, P);
  }, ke = (p, b, P, z = !1, W = !1) => {
    const {
      type: B,
      props: Z,
      ref: Y,
      children: q,
      dynamicChildren: U,
      shapeFlag: ae,
      patchFlag: ee,
      dirs: ie,
      cacheIndex: ue,
      memo: he
    } = p;
    if (ee === -2 && (W = !1), Y != null && (Pt(), zn(Y, null, P, p, !0), Rt()), ue != null && (b.renderCache[ue] = void 0), ae & 256) {
      b.ctx.deactivate(p);
      return;
    }
    const Ce = ae & 1 && ie, we = !Cn(p);
    let Pe;
    if (we && (Pe = Z && Z.onVnodeBeforeUnmount) && pt(Pe, b, p), ae & 6)
      ui(p.component, P, z);
    else {
      if (ae & 128) {
        p.suspense.unmount(P, z);
        return;
      }
      Ce && Zt(p, null, b, "beforeUnmount"), ae & 64 ? p.type.remove(
        p,
        b,
        P,
        re,
        z
      ) : U && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !U.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (B !== ce || ee > 0 && ee & 64) ? Qt(
        U,
        b,
        P,
        !1,
        !0
      ) : (B === ce && ee & 384 || !W && ae & 16) && Qt(q, b, P), z && Jt(p);
    }
    const Ee = he != null && ue == null;
    (we && (Pe = Z && Z.onVnodeUnmounted) || Ce || Ee) && je(() => {
      Pe && pt(Pe, b, p), Ce && Zt(p, null, b, "unmounted"), Ee && (p.el = null);
    }, P);
  }, Jt = (p) => {
    const { type: b, el: P, anchor: z, transition: W } = p;
    if (b === ce) {
      ri(P, z);
      return;
    }
    if (b === bi) {
      v(p);
      return;
    }
    const B = () => {
      i(P), W && !W.persisted && W.afterLeave && W.afterLeave();
    };
    if (p.shapeFlag & 1 && W && !W.persisted) {
      const { leave: Z, delayLeave: Y } = W, q = () => Z(P, B);
      Y ? Y(p.el, B, q) : q();
    } else
      B();
  }, ri = (p, b) => {
    let P;
    for (; p !== b; )
      P = h(p), i(p), p = P;
    i(b);
  }, ui = (p, b, P) => {
    const { bum: z, scope: W, job: B, subTree: Z, um: Y, m: q, a: U } = p;
    Eo(q), Eo(U), z && yl(z), W.stop(), B && (B.flags |= 8, ke(Z, p, b, P)), Y && je(Y, b), je(() => {
      p.isUnmounted = !0;
    }, b);
  }, Qt = (p, b, P, z = !1, W = !1, B = 0) => {
    for (let Z = B; Z < p.length; Z++)
      ke(p[Z], b, P, z, W);
  }, fn = (p) => {
    if (p.shapeFlag & 6)
      return fn(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const b = h(p.anchor || p.el), P = b && b[ea];
    return P ? h(P) : b;
  };
  let J = !1;
  const ne = (p, b, P) => {
    let z;
    p == null ? b._vnode && (ke(b._vnode, null, null, !0), z = b._vnode.component) : _(
      b._vnode || null,
      p,
      b,
      null,
      null,
      null,
      P
    ), b._vnode = p, J || (J = !0, So(z), Ys(), J = !1);
  }, re = {
    p: _,
    um: ke,
    m: Le,
    r: Jt,
    mt: H,
    mc: $,
    pc: F,
    pbc: E,
    n: fn,
    o: e
  };
  return {
    render: ne,
    hydrate: void 0,
    createApp: Du(ne)
  };
}
function _i({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function en({ effect: e, job: t }, n) {
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
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = At(i[o]), a.el = s.el), !n && a.patchFlag !== -2 && so(s, a)), a.type === li && (a.patchFlag === -1 && (a = i[o] = At(a)), a.el = s.el), a.type === Ue && !a.el && (a.el = s.el);
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
const ce = /* @__PURE__ */ Symbol.for("v-fgt"), li = /* @__PURE__ */ Symbol.for("v-txt"), Ue = /* @__PURE__ */ Symbol.for("v-cmt"), bi = /* @__PURE__ */ Symbol.for("v-stc"), Dt = [];
let Ye = null;
function A(e = !1) {
  Dt.push(Ye = e ? null : []);
}
function ao() {
  Dt.pop(), Ye = Dt[Dt.length - 1] || null;
}
let tl = 1;
function Nl(e, t = !1) {
  tl += e, e < 0 && Ye && t && (Ye.hasOnce = !0);
}
function Fa(e) {
  return e.dynamicChildren = tl > 0 ? Ye || wn : null, ao(), tl > 0 && Ye && Ye.push(e), e;
}
function L(e, t, n, l, i, o) {
  return Fa(
    I(
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
function Se(e, t, n, l, i) {
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
function nl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function sn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const La = ({ key: e }) => e ?? null, wl = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Fe(e) || /* @__PURE__ */ fe(e) || de(e) ? { i: $e, r: e, k: t, f: !!n } : e : null);
function I(e, t = null, n = null, l = 0, i = null, o = e === ce ? 0 : 1, s = !1, a = !1) {
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
    ctx: $e
  };
  return a ? (El(r, n), o & 128 && e.normalize(r)) : n && (r.shapeFlag |= Fe(n) ? 8 : 16), tl > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Ye && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (r.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  r.patchFlag !== 32 && Ye.push(r), r;
}
const j = Xu;
function Xu(e, t = null, n = null, l = 0, i = null, o = !1) {
  if ((!e || e === ua) && (e = Ue), nl(e)) {
    const a = qt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && El(a, n), tl > 0 && !o && Ye && (a.shapeFlag & 6 ? Ye[Ye.indexOf(e)] = a : Ye.push(a)), a.patchFlag = -2, a;
  }
  if (sc(e) && (e = e.__vccOpts), t) {
    t = Yu(t);
    let { class: a, style: r } = t;
    a && !Fe(a) && (t.class = me(a)), ye(r) && (/* @__PURE__ */ Zl(r) && !le(r) && (r = Re({}, r)), t.style = it(r));
  }
  const s = Fe(e) ? 1 : ka(e) ? 128 : ta(e) ? 64 : ye(e) ? 4 : de(e) ? 2 : 0;
  return I(
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
  return e ? /* @__PURE__ */ Zl(e) || va(e) ? Re({}, e) : e : null;
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
    ssContent: e.ssContent && qt(e.ssContent),
    ssFallback: e.ssFallback && qt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return r && l && el(
    u,
    r.clone(u)
  ), u;
}
function Tl(e = " ", t = 0) {
  return j(li, null, e, t);
}
function te(e = "", t = !1) {
  return t ? (A(), Se(Ue, null, e)) : j(Ue, null, e);
}
function gt(e) {
  return e == null || typeof e == "boolean" ? j(Ue) : le(e) ? j(
    ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : nl(e) ? At(e) : j(li, null, String(e));
}
function At(e) {
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
      !i && !va(t) ? t._ctx = $e : i === 3 && $e && ($e.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (de(t)) {
    if (l & 65) {
      El(e, { default: t });
      return;
    }
    t = { default: t, _ctx: $e }, n = 32;
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
        t.class !== l.class && (t.class = me([t.class, l.class]));
      else if (i === "style")
        t.style = it([t.style, l.style]);
      else if (Gl(i)) {
        const o = t[i], s = l[i];
        s && o !== s && !(le(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Wl(i) && (t[i] = s);
      } else i !== "" && (t[i] = l[i]);
  }
  return t;
}
function pt(e, t, n, l = null) {
  st(e, t, 7, [
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
    propsDefaults: _e,
    // inheritAttrs
    inheritAttrs: l.inheritAttrs,
    // state
    ctx: _e,
    data: _e,
    props: _e,
    attrs: _e,
    slots: _e,
    refs: _e,
    setupState: _e,
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
let Oe = null;
const ii = () => Oe || $e;
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
    (n) => Oe = n
  ), Ti = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ln = n
  );
}
const cl = (e) => {
  const t = Oe;
  return Vl(e), e.scope.on(), () => {
    e.scope.off(), Vl(t);
  };
}, Vo = () => {
  Oe && Oe.scope.off(), Vl(null);
};
function Ia(e) {
  return e.vnode.shapeFlag & 4;
}
let Ln = !1;
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
    Pt();
    const i = e.setupContext = l.length > 1 ? ic(e) : null, o = cl(e), s = sl(
      l,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = xs(s);
    if (Rt(), o(), (a || e.sp) && !Cn(e) && lo(e), a) {
      if (s.then(Vo, Vo), t)
        return s.then((r) => {
          Oo(e, r);
        }).catch((r) => {
          al(r, e, 0);
        });
      e.asyncDep = s;
    } else
      Oo(e, s);
  } else
    Da(e);
}
function Oo(e, t, n) {
  de(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ye(t) && (e.setupState = Ks(t)), Da(e);
}
function Da(e, t, n) {
  const l = e.type;
  e.render || (e.render = l.render || bt);
  {
    const i = cl(e);
    Pt();
    try {
      Au(e);
    } finally {
      Rt(), i();
    }
  }
}
const lc = {
  get(e, t) {
    return He(e, "get", ""), e[t];
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
      if (n in Kn)
        return Kn[n](e);
    },
    has(t, n) {
      return n in t || n in Kn;
    }
  })) : e.proxy;
}
function oc(e, t = !0) {
  return de(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function sc(e) {
  return de(e) && "__vccOpts" in e;
}
const Q = (e, t) => /* @__PURE__ */ jr(e, t, Ln);
function Pa(e, t, n) {
  try {
    Nl(-1);
    const l = arguments.length;
    return l === 2 ? ye(t) && !le(t) ? nl(t) ? j(e, null, [t]) : j(e, t) : j(e, null, t) : (l > 3 ? n = Array.prototype.slice.call(arguments, 2) : l === 3 && nl(n) && (n = [n]), j(e, t, n));
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
const Ra = Ei ? (e) => Ei.createHTML(e) : (e) => e, rc = "http://www.w3.org/2000/svg", uc = "http://www.w3.org/1998/Math/MathML", xt = typeof document < "u" ? document : null, Bo = xt && /* @__PURE__ */ xt.createElement("template"), cc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, l) => {
    const i = t === "svg" ? xt.createElementNS(rc, e) : t === "mathml" ? xt.createElementNS(uc, e) : n ? xt.createElement(e, { is: n }) : xt.createElement(e);
    return e === "select" && l && l.multiple != null && i.setAttribute("multiple", l.multiple), i;
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
}, Ut = "transition", Tn = "animation", ll = /* @__PURE__ */ Symbol("_vtc"), Na = {
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
}, dc = /* @__PURE__ */ Re(
  {},
  la,
  Na
), fc = (e) => (e.displayName = "Transition", e.props = dc, e), pc = /* @__PURE__ */ fc(
  (e, { slots: t }) => Pa(ru, mc(e), t)
), tn = (e, t = []) => {
  le(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ho = (e) => e ? le(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function mc(e) {
  const t = {};
  for (const C in e)
    C in Na || (t[C] = e[C]);
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
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: g = `${n}-leave-to`
  } = e, m = hc(i), _ = m && m[0], k = m && m[1], {
    onBeforeEnter: x,
    onEnter: S,
    onEnterCancelled: M,
    onLeave: v,
    onLeaveCancelled: y,
    onBeforeAppear: w = x,
    onAppear: N = S,
    onAppearCancelled: $ = M
  } = t, T = (C, V, H, R) => {
    C._enterCancelled = R, nn(C, V ? u : a), nn(C, V ? c : s), H && H();
  }, E = (C, V) => {
    C._isLeaving = !1, nn(C, d), nn(C, g), nn(C, h), V && V();
  }, K = (C) => (V, H) => {
    const R = C ? N : S, O = () => T(V, C, H);
    tn(R, [V, O]), Uo(() => {
      nn(V, C ? r : o), St(V, C ? u : a), Ho(R) || Go(V, l, _, O);
    });
  };
  return Re(t, {
    onBeforeEnter(C) {
      tn(x, [C]), St(C, o), St(C, s);
    },
    onBeforeAppear(C) {
      tn(w, [C]), St(C, r), St(C, c);
    },
    onEnter: K(!1),
    onAppear: K(!0),
    onLeave(C, V) {
      C._isLeaving = !0;
      const H = () => E(C, V);
      St(C, d), C._enterCancelled ? (St(C, h), zo(C)) : (zo(C), St(C, h)), Uo(() => {
        C._isLeaving && (nn(C, d), St(C, g), Ho(v) || Go(C, l, k, H));
      }), tn(v, [C, H]);
    },
    onEnterCancelled(C) {
      T(C, !1, void 0, !0), tn(M, [C]);
    },
    onAppearCancelled(C) {
      T(C, !0, void 0, !0), tn($, [C]);
    },
    onLeaveCancelled(C) {
      E(C), tn(y, [C]);
    }
  });
}
function hc(e) {
  if (e == null)
    return null;
  if (ye(e))
    return [vi(e.enter), vi(e.leave)];
  {
    const t = vi(e);
    return [t, t];
  }
}
function vi(e) {
  return ar(e);
}
function St(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[ll] || (e[ll] = /* @__PURE__ */ new Set())).add(t);
}
function nn(e, t) {
  t.split(/\s+/).forEach((l) => l && e.classList.remove(l));
  const n = e[ll];
  n && (n.delete(t), n.size || (e[ll] = void 0));
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
    e.removeEventListener(c, h), o();
  }, h = (g) => {
    g.target === e && ++u >= r && d();
  };
  setTimeout(() => {
    u < r && d();
  }, a + 1), e.addEventListener(c, h);
}
function _c(e, t) {
  const n = window.getComputedStyle(e), l = (m) => (n[m] || "").split(", "), i = l(`${Ut}Delay`), o = l(`${Ut}Duration`), s = Wo(i, o), a = l(`${Tn}Delay`), r = l(`${Tn}Duration`), c = Wo(a, r);
  let u = null, d = 0, h = 0;
  t === Ut ? s > 0 && (u = Ut, d = s, h = o.length) : t === Tn ? c > 0 && (u = Tn, d = c, h = r.length) : (d = Math.max(s, c), u = d > 0 ? s > c ? Ut : Tn : null, h = u ? u === Ut ? o.length : r.length : 0);
  const g = u === Ut && /\b(?:transform|all)(?:,|$)/.test(
    l(`${Ut}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: h,
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
  const l = e[ll];
  l && (t = (t ? [t, ...l] : [...l]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ol = /* @__PURE__ */ Symbol("_vod"), Ta = /* @__PURE__ */ Symbol("_vsh"), vc = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ol] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : En(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: l }) {
    !t != !n && (l ? t ? (l.beforeEnter(e), En(e, !0), l.enter(e)) : l.leave(e, () => {
      En(e, !1);
    }) : En(e, t));
  },
  beforeUnmount(e, { value: t }) {
    En(e, t);
  }
};
function En(e, t) {
  e.style.display = t ? e[Ol] : "none", e[Ta] = !t;
}
const yc = /* @__PURE__ */ Symbol(""), wc = /(?:^|;)\s*display\s*:/;
function Sc(e, t, n) {
  const l = e.style, i = Fe(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (Fe(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          n[a] == null && Bn(l, a, "");
        }
      else
        for (const s in t)
          n[s] == null && Bn(l, s, "");
    for (const s in n) {
      s === "display" && (o = !0);
      const a = n[s];
      a != null ? Cc(
        e,
        s,
        !Fe(t) && t ? t[s] : void 0,
        a
      ) || Bn(l, s, a) : Bn(l, s, "");
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
function Bn(e, t, n) {
  if (le(n))
    n.forEach((l) => Bn(e, t, l));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const l = xc(e, t);
    Ko.test(n) ? e.setProperty(
      Vt(l),
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
  let l = Ge(t);
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
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Fe(l) && n === l;
}
const Xo = "http://www.w3.org/1999/xlink";
function Yo(e, t, n, l, i, o = pr(t)) {
  l && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Xo, t.slice(6, t.length)) : e.setAttributeNS(Xo, t, n) : n == null || o && !ks(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Qe(n) ? String(n) : n
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
function an(e, t, n, l) {
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
      an(e, a, c, r);
    } else s && (Ac(e, a, s, r), o[t] = void 0);
  }
}
const kc = /(Once|Passive|Capture)$/, Fc = /^on:?(?:Once|Passive|Capture)$/;
function Lc(e) {
  let t, n;
  for (; (n = e.match(kc)) && !Fc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Vt(e.slice(2)), t];
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
        c && st(
          c,
          t,
          5,
          a
        );
      }
    } else
      st(
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
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Fe(l))) ? Jo(e, Ge(t), l, o, t) : (t === "true-value" ? e._trueValue = l : t === "false-value" && (e._falseValue = l), Yo(e, t, l, s));
};
function Nc(e, t, n, l) {
  if (l)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Zo(t) && de(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Zo(t) && Fe(n) ? !1 : t in e;
}
function Tc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const l = Ge(t);
  return Array.isArray(n) ? n.some((i) => Ge(i) === l) : Object.keys(n).some((i) => Ge(i) === l);
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
const An = /* @__PURE__ */ Symbol("_assign");
function ts(e, t, n) {
  return t && (e = e.trim()), n && (e = Xl(e)), e;
}
const vt = {
  created(e, { modifiers: { lazy: t, trim: n, number: l } }, i) {
    e[An] = $l(i);
    const o = l || i.props && i.props.type === "number";
    an(e, t ? "change" : "input", (s) => {
      s.target.composing || e[An](ts(e.value, n, o));
    }), (n || o) && an(e, "change", () => {
      e.value = ts(e.value, n, o);
    }), t || (an(e, "compositionstart", Ec), an(e, "compositionend", es), an(e, "change", es));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: l, trim: i, number: o } }, s) {
    if (e[An] = $l(s), e.composing) return;
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
    e._modelValue = t, an(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? Xl(Bl(o)) : Bl(o)
      );
      e[An](
        e.multiple ? jl(e._modelValue) ? new Set(i) : i : i[0]
      ), e._assigning = !0, In(() => {
        e._assigning = !1;
      });
    }), e[An] = $l(l);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ns(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[An] = $l(n);
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
      else if (ol(Bl(s), t)) {
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
    const o = Vt(i.key);
    if (t.some(
      (s) => s === o || Bc[s] === o
    ))
      return e(i);
  });
}, Hc = /* @__PURE__ */ Re({ patchProp: Rc }, cc);
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
    !de(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
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
  return Fe(e) ? document.querySelector(e) : e;
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
}, Mt = { ...si };
let qn = null, Xn = null;
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
}`, document.head.appendChild(e), qn = document.createElement("style"), qn.id = "fil-theme-vars", document.head.appendChild(qn), Xn = document.createElement("style"), Xn.id = "fil-theme-effects", document.head.appendChild(Xn);
}
function Va(e) {
  const t = Xc[e] ?? si;
  Object.assign(Mt, t), !(typeof document > "u") && (document.documentElement.dataset.filTheme = e, qn && (qn.textContent = e === "default" ? "" : `:root{${Oi(t)}}`), Xn && (Xn.textContent = Yc[e] ?? ""));
}
const ed = {
  class: "fil-color-picker",
  role: "group",
  "aria-label": "Color picker"
}, td = { class: "fil-cp-hex-row" }, nd = {
  class: "fil-cp-presets",
  role: "listbox",
  "aria-label": "Preset colors"
}, ld = ["aria-selected", "aria-label", "title", "onClick"], id = /* @__PURE__ */ xe({
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
    ], n = e, l = at(e, "modelValue"), i = Q(() => n.presets ?? t);
    function o(C) {
      l.value = C;
    }
    function s(C) {
      return Math.min(1, Math.max(0, C));
    }
    function a(C) {
      const V = /^#?([0-9a-f]{6})$/i.exec(C.trim());
      if (!V) return null;
      const H = parseInt(V[1], 16);
      return [H >> 16 & 255, H >> 8 & 255, H & 255];
    }
    function r(C, V, H) {
      const R = (O) => Math.round(s(O / 255) * 255).toString(16).padStart(2, "0");
      return `#${R(C)}${R(V)}${R(H)}`;
    }
    function c(C, V, H) {
      const R = C / 255, O = V / 255, D = H / 255, F = Math.max(R, O, D), G = Math.min(R, O, D), pe = F - G;
      let Le = 0;
      pe !== 0 && (F === R ? Le = (O - D) / pe % 6 : F === O ? Le = (D - R) / pe + 2 : Le = (R - O) / pe + 4, Le *= 60, Le < 0 && (Le += 360));
      const ke = F === 0 ? 0 : pe / F;
      return [Le, ke, F];
    }
    function u(C, V, H) {
      const R = H * V, O = R * (1 - Math.abs(C / 60 % 2 - 1)), D = H - R;
      let [F, G, pe] = [0, 0, 0];
      return C < 60 ? [F, G, pe] = [R, O, 0] : C < 120 ? [F, G, pe] = [O, R, 0] : C < 180 ? [F, G, pe] = [0, R, O] : C < 240 ? [F, G, pe] = [0, O, R] : C < 300 ? [F, G, pe] = [O, 0, R] : [F, G, pe] = [R, 0, O], [(F + D) * 255, (G + D) * 255, (pe + D) * 255];
    }
    const d = /* @__PURE__ */ se(0), h = /* @__PURE__ */ se(0), g = /* @__PURE__ */ se(0), m = /* @__PURE__ */ se(l.value);
    function _(C) {
      const V = a(C);
      if (!V) return;
      const [H, R, O] = c(...V);
      d.value = H, h.value = R, g.value = O, m.value = r(...V);
    }
    Be(l, (C) => _(C), { immediate: !0 });
    const k = Q(() => r(...u(d.value, h.value, g.value)));
    function x() {
      l.value = k.value, m.value = k.value;
    }
    function S() {
      const C = a(m.value);
      if (!C) {
        m.value = k.value;
        return;
      }
      const [V, H, R] = c(...C);
      d.value = V, h.value = H, g.value = R, l.value = r(...C);
    }
    const M = /* @__PURE__ */ se(null), v = /* @__PURE__ */ se(null);
    function y(C) {
      const V = M.value;
      if (!V) return;
      const H = V.getBoundingClientRect();
      h.value = s((C.clientX - H.left) / H.width), g.value = s(1 - (C.clientY - H.top) / H.height), x();
    }
    function w(C) {
      const V = v.value;
      if (!V) return;
      const H = V.getBoundingClientRect();
      d.value = s((C.clientX - H.left) / H.width) * 360, x();
    }
    function N(C) {
      C.preventDefault(), y(C);
      const V = (R) => y(R), H = () => {
        window.removeEventListener("pointermove", V), window.removeEventListener("pointerup", H);
      };
      window.addEventListener("pointermove", V), window.addEventListener("pointerup", H);
    }
    function $(C) {
      C.preventDefault(), w(C);
      const V = (R) => w(R), H = () => {
        window.removeEventListener("pointermove", V), window.removeEventListener("pointerup", H);
      };
      window.addEventListener("pointermove", V), window.addEventListener("pointerup", H);
    }
    const T = Q(() => `hsl(${d.value}, 100%, 50%)`), E = Q(() => ({
      left: `${h.value * 100}%`,
      top: `${(1 - g.value) * 100}%`
    })), K = Q(() => ({ left: `${d.value / 360 * 100}%` }));
    return (C, V) => (A(), L("div", ed, [
      I("div", {
        ref_key: "svRef",
        ref: M,
        class: "fil-cp-sv",
        style: it({ background: T.value }),
        onPointerdown: N
      }, [
        V[1] || (V[1] = I("div", { class: "fil-cp-sv-white" }, null, -1)),
        V[2] || (V[2] = I("div", { class: "fil-cp-sv-black" }, null, -1)),
        I("div", {
          class: "fil-cp-sv-thumb",
          style: it(E.value)
        }, null, 4)
      ], 36),
      I("div", {
        ref_key: "hueRef",
        ref: v,
        class: "fil-cp-hue",
        onPointerdown: $
      }, [
        I("div", {
          class: "fil-cp-hue-thumb",
          style: it(K.value)
        }, null, 4)
      ], 544),
      I("div", td, [
        I("span", {
          class: "fil-cp-swatch",
          style: it({ background: k.value })
        }, null, 4),
        ot(I("input", {
          "onUpdate:modelValue": V[0] || (V[0] = (H) => m.value = H),
          class: "fil-cp-hex-input",
          type: "text",
          spellcheck: "false",
          "aria-label": "Hex color",
          onKeydown: Sl(S, ["enter"]),
          onBlur: S
        }, null, 544), [
          [vt, m.value]
        ])
      ]),
      I("div", nd, [
        (A(!0), L(ce, null, De(i.value, (H) => (A(), L("button", {
          key: H,
          class: me(["fil-color-swatch", { "is-active": l.value === H }]),
          style: it({ "--swatch": H }),
          "aria-selected": l.value === H,
          "aria-label": H,
          title: H,
          onClick: (R) => o(H)
        }, null, 14, ld))), 128))
      ])
    ]));
  }
}), Ae = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, i] of t)
    n[l] = i;
  return n;
}, od = /* @__PURE__ */ Ae(id, [["__scopeId", "data-v-969386c1"]]), os = "__fil_color_picker_popup__";
let mn = null;
function sd(e) {
  return [
    {
      content: "Change color…",
      callback: (t, n, l) => ad(e, l)
    }
  ];
}
function ad(e, t) {
  var h;
  mn == null || mn(), (h = document.getElementById(os)) == null || h.remove();
  const n = document.createElement("div");
  n.id = os;
  const l = 176, i = 260, o = t ? Math.min(t.clientX, window.innerWidth - l - 8) : window.innerWidth / 2 - l / 2, s = t ? Math.min(t.clientY, window.innerHeight - i - 8) : window.innerHeight / 2 - i / 2;
  n.style.cssText = `position:fixed;z-index:10001;top:${Math.max(8, s)}px;left:${Math.max(8, o)}px;`, document.body.appendChild(n);
  function a(g) {
    e.color = g, e.__fx && (e.__fx.color = g), e.properties = e.properties || {}, e.properties.fil_custom_color = !0, r();
  }
  function r() {
    is(null, n), n.remove(), document.removeEventListener("mousedown", c, !0), document.removeEventListener("keydown", u, !0), mn === r && (mn = null);
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
  is(d, n), document.addEventListener("mousedown", c, !0), document.addEventListener("keydown", u, !0), mn = r, In(() => {
    var g;
    (g = n.querySelector(".fil-color-swatch")) == null || g.focus();
  });
}
const rd = "fil";
function Ze(e, t = {}) {
  const l = e.prototype;
  if (l._filStyled) return;
  l._filStyled = !0, t.minSize && (l.minSize = t.minSize), l._filFamily = t.family ?? rd, l._filDescription = t.description ?? "", t.badges && (l.badges = t.badges), l.color = Mt.accent, l.bgcolor = Mt.panelAlt;
  const i = l.onNodeCreated;
  l.onNodeCreated = function(...s) {
    const a = i == null ? void 0 : i.apply(this, s);
    return this.color = Mt.accent, this.bgcolor = Mt.panelAlt, a;
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
    var m;
    const d = ((m = globalThis.LiteGraph) == null ? void 0 : m.ROUND_RADIUS) ?? 8, h = !!this.collapsed;
    s.fillStyle = Mt.panel, s.beginPath(), s.roundRect(0, -a, r[0], a, h ? [d] : [d, d, 0, 0]), s.fill();
    const g = 3;
    s.fillStyle = u || Mt.accent, s.beginPath(), s.roundRect(0, -a, g, a, h ? [d, 0, 0, d] : [d, 0, 0, 0]), s.fill();
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
    s._filFamily && ((i = s.properties) != null && i.fil_custom_color || (s.color = Mt.accent, s.bgcolor = Mt.panelAlt));
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
var Yn;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Yn || (Yn = {}));
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
function hn(e, ...t) {
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
    $i(i) && $i(l) && e.hasOwnProperty(n) && !/* @__PURE__ */ fe(l) && !/* @__PURE__ */ It(l) ? e[n] = Bi(i, l) : e[n] = l;
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
const { assign: Wt } = Object;
function pd(e) {
  return !!(/* @__PURE__ */ fe(e) && e.effect);
}
function md(e, t, n, l) {
  const { state: i, actions: o, getters: s } = t, a = n.state.value[e];
  let r;
  function c() {
    a || (n.state.value[e] = i ? i() : {});
    const u = /* @__PURE__ */ Hr(n.state.value[e]);
    return Wt(u, o, Object.keys(s || {}).reduce((d, h) => (d[h] = eo(Q(() => {
      ai(n);
      const g = n._s.get(e);
      return s[h].call(g, g);
    })), d), {}));
  }
  return r = Ua(e, c, t, n, l, !0), r;
}
function Ua(e, t, n = {}, l, i, o) {
  let s;
  const a = Wt({ actions: {} }, n), r = { deep: !0 };
  let c, u, d = [], h = [], g;
  const m = l.state.value[e];
  !o && !m && (l.state.value[e] = {});
  let _;
  function k($) {
    let T;
    c = u = !1, typeof $ == "function" ? ($(l.state.value[e]), T = {
      type: Yn.patchFunction,
      storeId: e,
      events: g
    }) : (Bi(l.state.value[e], $), T = {
      type: Yn.patchObject,
      payload: $,
      storeId: e,
      events: g
    });
    const E = _ = Symbol();
    In().then(() => {
      _ === E && (c = !0);
    }), u = !0, hn(d, T, l.state.value[e]);
  }
  const x = o ? function() {
    const { state: T } = n, E = T ? T() : {};
    this.$patch((K) => {
      Wt(K, E);
    });
  } : (
    /* istanbul ignore next */
    Ha
  );
  function S() {
    s.stop(), d = [], h = [], l._s.delete(e);
  }
  const M = ($, T = "") => {
    if (as in $)
      return $[Si] = T, $;
    const E = function() {
      ai(l);
      const K = Array.from(arguments), C = [], V = [];
      function H(D) {
        C.push(D);
      }
      function R(D) {
        V.push(D);
      }
      hn(h, {
        args: K,
        name: E[Si],
        store: y,
        after: H,
        onError: R
      });
      let O;
      try {
        O = $.apply(this && this.$id === e ? this : y, K);
      } catch (D) {
        throw hn(V, D), D;
      }
      return O instanceof Promise ? O.then((D) => (hn(C, D), D)).catch((D) => (hn(V, D), Promise.reject(D))) : (hn(C, O), O);
    };
    return E[as] = !0, E[Si] = T, E;
  }, v = {
    _p: l,
    // _s: scope,
    $id: e,
    $onAction: ss.bind(null, h),
    $patch: k,
    $reset: x,
    $subscribe($, T = {}) {
      const E = ss(d, $, T.detached, () => K()), K = s.run(() => Be(() => l.state.value[e], (C) => {
        (T.flush === "sync" ? u : c) && $({
          storeId: e,
          type: Yn.direct,
          events: g
        }, C);
      }, Wt({}, r, T)));
      return E;
    },
    $dispose: S
  }, y = /* @__PURE__ */ Xt(v);
  l._s.set(e, y);
  const N = (l._a && l._a.runWithContext || cd)(() => l._e.run(() => (s = Ds()).run(() => t({ action: M }))));
  for (const $ in N) {
    const T = N[$];
    if (/* @__PURE__ */ fe(T) && !pd(T) || /* @__PURE__ */ It(T))
      o || (m && fd(T) && (/* @__PURE__ */ fe(T) ? T.value = m[$] : Bi(T, m[$])), l.state.value[e][$] = T);
    else if (typeof T == "function") {
      const E = M(T, $);
      N[$] = E, a.actions[$] = T;
    }
  }
  return Wt(y, N), Wt(/* @__PURE__ */ ge(y), N), Object.defineProperty(y, "$state", {
    get: () => l.state.value[e],
    set: ($) => {
      k((T) => {
        Wt(T, $);
      });
    }
  }), l._p.forEach(($) => {
    Wt(y, s.run(() => $({
      store: y,
      app: l._a,
      pinia: l,
      options: a
    })));
  }), m && o && n.hydrate && n.hydrate(y.$state, m), c = !0, u = !0, y;
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
    a || (c ? jn($a, null) : null), a && ai(a), a = Oa, a._s.has(l) || (o ? Ua(l, t, i, a) : md(l, i, a)), a._s.get(l);
  }
  return s.$id = l, s;
}
let rn = null;
function hd(e) {
  return rn || (rn = Ba(), rn);
}
function co() {
  return rn || (rn = Ba()), rn;
}
const gd = { class: "fil-node-shell" }, _d = /* @__PURE__ */ xe({
  __name: "FilNodeShell",
  props: {
    root: {},
    state: {},
    comfyClass: {}
  },
  setup(e) {
    return (t, n) => (A(), L("div", gd, [
      (A(), Se(wu(e.root), { state: e.state }, null, 8, ["state"]))
    ]));
  }
}), bd = /* @__PURE__ */ Ae(_d, [["__scopeId", "data-v-cb614e72"]]);
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
function Bt(e, t, n, l) {
  const i = e;
  if (typeof i.addDOMWidget != "function")
    return console.warn(`[FiL_Design_ImageMind] domWidgetHost: node.addDOMWidget not available for "${t}" — ComfyUI core too old?`), null;
  const o = document.createElement("div");
  o.className = "fil-vue-host", o.style.width = "100%", o.style.boxSizing = "border-box", o.style.height = "auto", o[wd] = !0, o.addEventListener(
    "wheel",
    (E) => {
      var C, V;
      if (Ga(E.target, E.deltaX, E.deltaY, o.parentElement)) return;
      const K = (V = (C = globalThis.app) == null ? void 0 : C.canvas) == null ? void 0 : V.canvas;
      K instanceof HTMLCanvasElement && (E.preventDefault(), K.dispatchEvent(new WheelEvent("wheel", {
        deltaX: E.deltaX,
        deltaY: E.deltaY,
        deltaZ: E.deltaZ,
        deltaMode: E.deltaMode,
        clientX: E.clientX,
        clientY: E.clientY,
        bubbles: !0,
        cancelable: !0
      })));
    },
    { passive: !1 }
  );
  const s = /* @__PURE__ */ Xt(l.state);
  let a = l.height, r = l.height, c = 0, u = !1, d;
  const h = () => {
    d && (yd(d, "height") && (d.height = a), d.computeSize = () => [o.clientWidth || 380, a]);
  }, g = () => {
    const E = o.firstElementChild;
    return !E || E.clientHeight === 0 || l.growable || (a = Math.ceil(E.scrollHeight / 4) * 4, r = a, h()), a;
  }, m = () => {
    const E = o.firstElementChild;
    if (!E || E.clientHeight === 0) return !1;
    const K = o.style.height;
    return o.style.height = "auto", r = Math.ceil(E.scrollHeight / 4) * 4, o.style.height = K, !0;
  }, _ = () => {
    a = r + c, o.style.height = `${a}px`, h();
  };
  d = i.addDOMWidget(t, "custom", o, {
    hideOnZoom: !0,
    getValue: () => s,
    setValue: (E) => {
      if (E && typeof E == "object") {
        const K = E, C = s;
        K.nodeState && typeof K.nodeState == "object" && C.nodeState && Object.assign(C.nodeState, K.nodeState), K.ui && typeof K.ui == "object" && C.ui && Object.assign(C.ui, K.ui);
        for (const [V, H] of Object.entries(K))
          V !== "nodeState" && V !== "ui" && (C[V] = H);
      }
    },
    getHeight: g,
    ...l.onDraw ? { onDraw: l.onDraw } : {}
  });
  const k = ro(bd, { root: n, state: s, comfyClass: i.comfyClass ?? "default" }).use(co());
  if (k.mount(o), l.growable && typeof i.computeSize == "function" && typeof i.setSize == "function") {
    const E = i.computeSize.bind(i), K = i.setSize.bind(i), C = () => Math.max(0, E()[1] - c);
    i.computeSize = () => [E()[0], C()], i.setSize = (V) => {
      u || (c = Math.max(0, V[1] - C()), _(), V = [V[0], E()[1]]), K(V);
    };
  }
  function x() {
    var F, G;
    if (l.growable) {
      M();
      return;
    }
    if (g(), !i.computeSize || !i.setSize || !i.size) return;
    const [E, K] = i.size, [, C] = i.computeSize(), [V, H] = i.minSize ?? [0, 0], R = Math.max(E, V), O = a + 35, D = Math.max(C, O, H);
    R === E && Math.abs(D - K) < 2 || (i.setSize([R, D]), (G = (F = i.graph) == null ? void 0 : F.setDirtyCanvas) == null || G.call(F, !0, !0));
  }
  let S = !1;
  function M() {
    var D, F;
    if (!m() || !i.computeSize || !i.setSize || !i.size) return;
    const [E, K] = i.size, [C, V] = i.minSize ?? [0, 0], H = Math.max(i.computeSize()[1], V);
    S || (c = Math.max(0, K - H), S = !0), _();
    const R = Math.max(E, C), O = H + c;
    if (!(R === E && Math.abs(O - K) < 2)) {
      u = !0;
      try {
        i.setSize([R, O]);
      } finally {
        u = !1;
      }
      (F = (D = i.graph) == null ? void 0 : D.setDirtyCanvas) == null || F.call(D, !0, !0);
    }
  }
  let v = 0;
  const y = new ResizeObserver(() => {
    v || (v = requestAnimationFrame(() => {
      v = 0, x();
    }));
  });
  y.observe(o);
  let w = 20;
  (function E() {
    x(), w-- > 0 && requestAnimationFrame(E);
  })();
  const N = setInterval(x, 400), $ = { widget: d, host: o, app: k, state: s, unmount: T };
  function T() {
    y.disconnect(), v && cancelAnimationFrame(v), clearInterval(N);
    try {
      this.app.unmount();
    } catch (E) {
      console.warn(`[FiL_Design_ImageMind] unmount failed for "${t}":`, E);
    }
    for (; this.host.firstChild; ) this.host.removeChild(this.host.firstChild);
  }
  return $.unmount = T.bind($), i._filVueApps ?? (i._filVueApps = {}), i._filVueApps[t] = $, $;
}
function Ht(e) {
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
function be(e, t, n) {
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
const bn = /* @__PURE__ */ uo("fil/toast", () => {
  const e = /* @__PURE__ */ se([]), t = /* @__PURE__ */ se([]);
  function n(c, u, d = {}) {
    const h = {
      id: xd++,
      level: c,
      text: u == null ? "" : String(u),
      timeout: d.timeout ?? Sd[c],
      sticky: !!d.sticky,
      action: d.action ?? null
    };
    return e.value.length < rs ? e.value.push(h) : t.value.push(h), h;
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
  bn().push(e, t, {});
}
const Tt = {
  info: (e) => gl("info", e),
  success: (e) => gl("success", e),
  warning: (e) => gl("warning", e),
  error: (e) => gl("error", e),
  // Direct Pinia access for Vue components that want actions/sticky/toasts.
  infoRich: (e, t) => bn().info(e, t),
  successRich: (e, t) => bn().success(e, t),
  warningRich: (e, t) => bn().warning(e, t),
  errorRich: (e, t) => bn().error(e, t),
  dismissAll: () => bn().dismissAll()
};
function us() {
  var t, n, l, i, o, s, a, r;
  return !!(((i = (l = (n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.setting) == null ? void 0 : l.get) == null ? void 0 : i.call(l, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? ((r = (a = (s = (o = globalThis.app) == null ? void 0 : o.ui) == null ? void 0 : s.settings) == null ? void 0 : a.getSettingValue) == null ? void 0 : r.call(a, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? !0);
}
function cs() {
  function e(l, i, o, s) {
  }
  function t(l, i, o, s) {
    us() && Tt.success("Connected");
  }
  function n(l, i) {
    us() && Tt.info("Disconnected");
  }
  return { onConnectionsChange: e, onConnect: t, onDisconnect: n };
}
function et(e) {
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
const Ad = /* @__PURE__ */ Ot(() => Promise.resolve().then(() => Jm)), Md = {
  id: "FiLSeed",
  register(e, t) {
    Ze(e, {
      minSize: [240, 90],
      family: "value",
      description: "Fixed or randomized seed with copy and reuse buttons.",
      badges: [{ text: "seed" }]
    });
    const l = e.prototype, i = l.onNodeCreated;
    l.onNodeCreated = function(...a) {
      const r = i == null ? void 0 : i.apply(this, a), c = this, u = oe(c, "seed"), d = be(u, "number", 0);
      u && (u.hidden = !0);
      const h = oe(c, "control_after_generate");
      h && (h.hidden = !0);
      const g = {
        nodeState: {
          mode: "random",
          seed: d
        },
        initialValues: { seed: d },
        ui: {},
        lastRunSeed: null
      };
      return Object.defineProperty(g, "node", { value: c, enumerable: !1, configurable: !0 }), c._filSeedState = g, Bt(c, "fil_seed_view", Ad, { state: g, height: 52 }), r;
    };
    const o = l.onConfigure;
    l.onConfigure = function(...a) {
      const r = o == null ? void 0 : o.apply(this, a), c = this, u = c._filSeedState;
      return u && (u.nodeState.seed = be(oe(c, "seed"), "number", 0)), r;
    };
    const s = l.onRemoved;
    l.onRemoved = function(...a) {
      return Ht(this), s == null ? void 0 : s.apply(this, a);
    }, et(e);
  }
}, kd = /* @__PURE__ */ Ot(() => Promise.resolve().then(() => Wh)), Fd = {
  id: "FiLProviderLoader",
  register(e, t) {
    Ze(e, {
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
      const c = o == null ? void 0 : o.apply(this, r), u = this, d = be(oe(u, "provider"), "string", "ollama"), h = be(oe(u, "model"), "string", "(loading...)"), g = be(oe(u, "temperature"), "number", 0.7), m = be(oe(u, "max_tokens"), "number", 0), _ = be(oe(u, "rate_limit_ms"), "number", 100), k = be(oe(u, "max_image_side"), "number", 1024);
      for (const S of ["provider", "model", "refresh_models", "temperature", "max_tokens", "rate_limit_ms", "max_image_side"]) {
        const M = oe(u, S);
        M && (M.hidden = !0);
      }
      const x = {
        nodeState: Yt(u, {
          provider: d,
          model: h,
          temperature: g,
          max_tokens: m,
          rate_limit_ms: _,
          max_image_side: k
        }),
        initialValues: {
          provider: d,
          model: h,
          temperature: g,
          max_tokens: m,
          rate_limit_ms: _,
          max_image_side: k
        },
        ui: {}
      };
      return Object.defineProperty(x, "node", { value: u, enumerable: !1, configurable: !0 }), u._filProviderState = x, Bt(u, "fil_provider_view", kd, { state: x, height: 180 }), c;
    };
    const s = l.onConfigure;
    l.onConfigure = function(...r) {
      const c = s == null ? void 0 : s.apply(this, r), u = this, d = u._filProviderState;
      if (!d) return c;
      const h = d.nodeState;
      for (const { name: g, kind: m, fallback: _ } of i)
        h[g] = be(oe(u, g), m, _);
      return c;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return Ht(this), a == null ? void 0 : a.apply(this, r);
    }, et(e);
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
    a && (a.y = Id * (l + 1)), l += 1;
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
    const h = (d.top + d.height / 2 - n.canvasTop) / n.scale - n.offsetY - l;
    if (h < 0 || h > i) continue;
    const g = Math.round(h - Ld);
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
const Td = /* @__PURE__ */ Ot(() => Promise.resolve().then(() => fg)), fs = ["prompt", "negative_prompt", "custom_style", "width", "height"], ja = "fil_scanner_view";
function ps(e) {
  for (const t of e.widgets || [])
    t.name !== ja && (t.hidden = !0);
}
const Ed = {
  id: "FiLOpticScanner",
  register(e, t) {
    Ze(e, {
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
      "control_after_generate",
      "width",
      "height"
    ], o = l.onNodeCreated;
    l.onNodeCreated = function(...r) {
      const c = o == null ? void 0 : o.apply(this, r), u = this, d = {}, h = {};
      for (const m of i) {
        const _ = oe(u, m);
        if (!_) continue;
        const k = m === "seed" || m === "width" || m === "height", S = be(_, k ? "number" : "string", m === "seed" ? -1 : k ? 0 : "");
        d[m] = S, h[m] = S, _.hidden = !0;
      }
      h.seed_mode = "random", ps(u);
      const g = {
        nodeState: Yt(u, h),
        initialValues: d,
        ui: {},
        lastRunSeed: null
      };
      return Object.defineProperty(g, "node", { value: u, enumerable: !1, configurable: !0 }), u._filScannerSeedState = g, ds(u, fs), Bt(u, ja, Td, { state: g, height: 580, growable: !0 }), c;
    };
    const s = l.onConfigure;
    l.onConfigure = function(...r) {
      const c = s == null ? void 0 : s.apply(this, r), u = this, d = u._filScannerSeedState;
      if (!d) return c;
      for (const h of i) {
        const g = oe(u, h);
        if (!g) continue;
        const m = h === "seed" || h === "width" || h === "height", _ = h === "seed" ? -1 : m ? 0 : "";
        d.nodeState[h] = be(g, m ? "number" : "string", _), g.hidden = !0;
      }
      return ps(u), ds(u, fs), c;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return Ht(this), a == null ? void 0 : a.apply(this, r);
    }, et(e);
  }
}, Vd = /* @__PURE__ */ Ot(() => Promise.resolve().then(() => gg)), Od = {
  id: "FiLNeuroCleaner",
  register(e, t) {
    Ze(e, {
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
      const c = o == null ? void 0 : o.apply(this, r), u = this, d = {}, h = {};
      for (const m of Object.keys(i)) {
        const _ = oe(u, m), k = be(_, "boolean", i[m]);
        d[m] = k, h[m] = k, _ && (_.hidden = !0);
      }
      const g = { nodeState: Yt(u, d), initialValues: h, ui: {} };
      return u._filCleanerState = g, Bt(u, "fil_cleaner_view", Vd, { state: g, height: 185 }), c;
    };
    const s = l.onConfigure;
    l.onConfigure = function(...r) {
      const c = s == null ? void 0 : s.apply(this, r), u = this, d = u._filCleanerState;
      if (!d) return c;
      for (const h of Object.keys(i))
        d.nodeState[h] = be(oe(u, h), "boolean", i[h]);
      return c;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return Ht(this), a == null ? void 0 : a.apply(this, r);
    }, et(e);
  }
}, $d = /* @__PURE__ */ Ot(() => Promise.resolve().then(() => nr)), Bd = {
  id: "FiLUpscaleTileCalc",
  register(e, t) {
    Ze(e, {
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
      const d = a == null ? void 0 : a.apply(this, u), h = this, g = {}, m = {};
      for (const k of Object.keys(i)) {
        const x = oe(h, k);
        if (!x) continue;
        const S = be(x, "number", i[k]);
        g[k] = S, m[k] = S, x.hidden = !0;
      }
      for (const k of Object.keys(o)) {
        const x = oe(h, k);
        if (!x) continue;
        const S = be(x, "boolean", o[k]);
        g[k] = S, m[k] = S, x.hidden = !0;
      }
      for (const k of Object.keys(s)) {
        const x = oe(h, k);
        if (!x) continue;
        const S = be(x, "string", s[k]);
        g[k] = S, m[k] = S, x.hidden = !0;
      }
      const _ = { nodeState: Yt(h, g), initialValues: m, ui: {} };
      return h._filUpscaleState = _, Bt(h, "fil_upscale_view", $d, { state: _, height: 420 }), d;
    };
    const r = l.onConfigure;
    l.onConfigure = function(...u) {
      const d = r == null ? void 0 : r.apply(this, u), h = this, g = h._filUpscaleState;
      if (!g) return d;
      for (const m of Object.keys(i))
        g.nodeState[m] = be(oe(h, m), "number", i[m]);
      for (const m of Object.keys(o))
        g.nodeState[m] = be(oe(h, m), "boolean", o[m]);
      for (const m of Object.keys(s))
        g.nodeState[m] = be(oe(h, m), "string", s[m]);
      return d;
    };
    const c = l.onRemoved;
    l.onRemoved = function(...u) {
      return Ht(this), c == null ? void 0 : c.apply(this, u);
    }, et(e);
  }
}, Hd = /* @__PURE__ */ Ot(() => Promise.resolve().then(() => nr)), Ud = {
  id: "FiLUpscaleSimple",
  register(e, t) {
    Ze(e, {
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
      const d = a == null ? void 0 : a.apply(this, u), h = this, g = {}, m = {};
      for (const k of Object.keys(i)) {
        const x = oe(h, k);
        if (!x) continue;
        const S = be(x, "number", i[k]);
        g[k] = S, m[k] = S, x.hidden = !0;
      }
      for (const k of Object.keys(o)) {
        const x = oe(h, k);
        if (!x) continue;
        const S = be(x, "boolean", o[k]);
        g[k] = S, m[k] = S, x.hidden = !0;
      }
      for (const k of Object.keys(s)) {
        const x = oe(h, k);
        if (!x) continue;
        const S = be(x, "string", s[k]);
        g[k] = S, m[k] = S, x.hidden = !0;
      }
      const _ = { nodeState: Yt(h, g), initialValues: m, ui: {} };
      return h._filUpscaleState = _, Bt(h, "fil_upscale_simple_view", Hd, { state: _, height: 420 }), d;
    };
    const r = l.onConfigure;
    l.onConfigure = function(...u) {
      const d = r == null ? void 0 : r.apply(this, u), h = this, g = h._filUpscaleState;
      if (!g) return d;
      for (const m of Object.keys(i))
        g.nodeState[m] = be(oe(h, m), "number", i[m]);
      for (const m of Object.keys(o))
        g.nodeState[m] = be(oe(h, m), "boolean", o[m]);
      for (const m of Object.keys(s))
        g.nodeState[m] = be(oe(h, m), "string", s[m]);
      return d;
    };
    const c = l.onRemoved;
    l.onRemoved = function(...u) {
      return Ht(this), c == null ? void 0 : c.apply(this, u);
    }, et(e);
  }
}, Gd = {
  id: "FiLTileAssembly",
  register(e, t) {
    Ze(e, {
      minSize: [270, 200],
      family: "image",
      description: "Recombines processed tiles back into one image, feathered across the real overlap zones.",
      badges: [{ text: "tile", color: "#62c987", text_color: "#1a1a1a" }]
    }), et(e);
  }
}, Wd = {
  id: "FiLKSampler",
  register(e, t) {
    Ze(e, {
      minSize: [270, 260],
      family: "sampling",
      description: "Full sampler/scheduler set, passthrough outputs, preview, HighRes-fix script.",
      badges: [{ text: "sampler", color: "#7aa2f7", text_color: "#0b0e14" }]
    }), et(e);
  }
}, jd = /* @__PURE__ */ Ot(() => Promise.resolve().then(() => Ng)), Ui = {
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
    Ze(e, {
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
        c[u] = be(oe(r, u), "number", Ui[u]);
      for (const u of Object.keys(Gi))
        c[u] = be(oe(r, u), "string", Gi[u]);
      for (const u of Object.keys(Wi))
        c[u] = be(oe(r, u), "boolean", Wi[u]);
    }, o = l.onNodeCreated;
    l.onNodeCreated = function(...r) {
      const c = o == null ? void 0 : o.apply(this, r), u = this, d = {};
      i(u, d);
      for (const m of zd) {
        const _ = oe(u, m);
        _ && (_.hidden = !0);
      }
      const h = oe(u, "control_after_generate");
      h && (h.hidden = !0, h.value = "fixed"), d.seed_mode = "random";
      const g = {
        nodeState: Yt(u, d),
        initialValues: { ...d },
        ui: {},
        lastRunSeed: null
      };
      return Object.defineProperty(g, "node", { value: u, enumerable: !1, configurable: !0 }), u._filHiResFixState = g, Bt(u, "fil_hiresfix_view", jd, { state: g, height: 420 }), c;
    };
    const s = l.onConfigure;
    l.onConfigure = function(...r) {
      const c = s == null ? void 0 : s.apply(this, r), u = this, d = u._filHiResFixState;
      return d && i(u, d.nodeState), c;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return Ht(this), a == null ? void 0 : a.apply(this, r);
    }, et(e);
  }
}, qd = {
  id: "FiLNoiseControl",
  register(e, t) {
    Ze(e, {
      minSize: [270, 220],
      family: "sampling",
      description: "RNG source + seed-variation script for FiLKSampler.",
      badges: [{ text: "script", color: "#7aa2f7", text_color: "#0b0e14" }]
    }), et(e);
  }
}, Xd = {
  id: "FiLImageDecomposer",
  register(e, t) {
    Ze(e, {
      minSize: [300, 240],
      family: "llm",
      description: "Decomposes image or prompt into distinct visual layers.",
      badges: [{ text: "vision", color: "#bb9af7", text_color: "#0b0e14" }]
    }), et(e);
  }
}, Yd = /* @__PURE__ */ Ot(() => Promise.resolve().then(() => Og)), ms = [
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
    Ze(e, {
      minSize: [380, 320],
      family: "base",
      description: "Blends visual styles and reference images with weighted influence sliders and optional Vision LLM fusion.",
      badges: [{ text: "styles", color: "#e0af68", text_color: "#0b0e14" }]
    });
    const l = e.prototype, i = l.onNodeCreated;
    l.onNodeCreated = function(...r) {
      const c = i == null ? void 0 : i.apply(this, r), u = this, d = {}, h = {};
      for (const _ of ms) {
        const k = oe(u, _);
        if (!k) continue;
        const x = _.includes("weight") ? "number" : "string", M = be(k, x, x === "number" ? 0.5 : "(None)");
        d[_] = M, h[_] = M, k.hidden = !0;
      }
      const g = {
        nodeState: Yt(u, h),
        initialValues: d,
        ui: { slotVersion: 0 }
      };
      Object.defineProperty(g, "node", { value: u, enumerable: !1, configurable: !0 });
      const m = /* @__PURE__ */ Xt(g);
      return u._filStyleMixerState = m, Bt(u, "fil_style_mixer_view", Yd, { state: m, height: 480 }), xi(this), c;
    };
    const o = l.onConfigure;
    l.onConfigure = function(...r) {
      const c = o == null ? void 0 : o.apply(this, r), u = this, d = u._filStyleMixerState;
      if (d)
        for (const h of ms) {
          const g = oe(u, h);
          if (!g) continue;
          const m = h.includes("weight") ? "number" : "string", _ = m === "number" ? 0.5 : "(None)";
          d.nodeState[h] = be(g, m, _);
        }
      return xi(this), c;
    };
    const s = l.onConnectionsChange;
    l.onConnectionsChange = function(r, c, u, d, h) {
      const g = s == null ? void 0 : s.apply(this, [r, c, u, d, h]);
      return (r === 1 || (r == null ? void 0 : r.name) === "input") && xi(this), g;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return Ht(this), a == null ? void 0 : a.apply(this, r);
    }, et(e);
  }
}, Qd = /* @__PURE__ */ Ot(() => Promise.resolve().then(() => Yg)), hs = [
  "method",
  "strength",
  "saturate",
  "temperature",
  "tint",
  "preserve_skin"
], Zd = {
  id: "FiLColorWizard",
  register(e, t) {
    Ze(e, {
      minSize: [320, 310],
      family: "image",
      description: "Automatic color correction: white balance, LAB contrast, and skin protection with quick presets.",
      badges: [{ text: "color", color: "#f7768e", text_color: "#0b0e14" }]
    });
    const l = e.prototype, i = l.onNodeCreated;
    l.onNodeCreated = function(...a) {
      const r = i == null ? void 0 : i.apply(this, a), c = this, u = {}, d = {};
      for (const m of hs) {
        const _ = oe(c, m);
        if (!_) continue;
        const k = m === "preserve_skin" ? "boolean" : m === "method" ? "string" : "number", S = be(_, k, k === "boolean" ? !1 : k === "number" ? 0 : "Full Auto");
        u[m] = S, d[m] = S, _.hidden = !0;
      }
      const h = {
        nodeState: Yt(c, d),
        initialValues: u,
        ui: {}
      };
      Object.defineProperty(h, "node", { value: c, enumerable: !1, configurable: !0 });
      const g = /* @__PURE__ */ Xt(h);
      return c._filColorWizardState = g, Bt(c, "fil_color_wizard_view", Qd, { state: g, height: 320 }), r;
    };
    const o = l.onConfigure;
    l.onConfigure = function(...a) {
      const r = o == null ? void 0 : o.apply(this, a), c = this, u = c._filColorWizardState;
      if (u)
        for (const d of hs) {
          const h = oe(c, d);
          if (!h) continue;
          const g = d === "preserve_skin" ? "boolean" : d === "method" ? "string" : "number", m = g === "boolean" ? !1 : g === "number" ? 0 : "Full Auto";
          u.nodeState[d] = be(h, g, m);
        }
      return r;
    };
    const s = l.onRemoved;
    l.onRemoved = function(...a) {
      return Ht(this), s == null ? void 0 : s.apply(this, a);
    }, et(e);
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
const nf = ["title", "aria-label", "innerHTML"], lf = /* @__PURE__ */ xe({
  name: "FilIcon",
  __name: "FilIcon",
  props: {
    name: {},
    size: { default: 16 },
    title: {}
  },
  setup(e) {
    return (t, n) => (A(), L("span", {
      class: "fil-icon",
      style: it({ width: e.size + "px", height: e.size + "px" }),
      title: e.title,
      role: "img",
      "aria-label": e.title ?? e.name,
      innerHTML: f(Ka)(e.name)
    }, null, 12, nf));
  }
}), Et = /* @__PURE__ */ Ae(lf, [["__scopeId", "data-v-dfb78d9f"]]), of = ["aria-label"], sf = { class: "fil-modal-header" }, af = { class: "fil-modal-title" }, rf = { class: "fil-modal-body" }, uf = /* @__PURE__ */ xe({
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
    const n = e, l = at(e, "open"), i = t, o = /* @__PURE__ */ se(null), s = /* @__PURE__ */ se(null);
    function a() {
      l.value = !1, i("close");
    }
    function r(h) {
      n.closeOnBackdrop && h.target === h.currentTarget && a();
    }
    function c(h) {
      n.closeOnEsc && h.key === "Escape" && a(), h.key === "Tab" && u(h);
    }
    function u(h) {
      if (!o.value) return;
      const g = d(o.value);
      if (!g.length) {
        h.preventDefault();
        return;
      }
      const m = g[0], _ = g[g.length - 1];
      h.shiftKey ? document.activeElement === m && (h.preventDefault(), _.focus()) : document.activeElement === _ && (h.preventDefault(), m.focus());
    }
    function d(h) {
      return Array.from(
        h.querySelectorAll(
          'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((g) => !g.disabled && g.offsetParent !== null);
    }
    return Be(
      l,
      (h) => {
        var g;
        h ? (s.value = document.activeElement, In(() => {
          var _;
          (_ = (o.value ? d(o.value) : [])[0] || o.value) == null || _.focus();
        })) : ((g = s.value) == null || g.focus(), s.value = null);
      }
    ), Dn(() => {
      document.addEventListener("keydown", c);
    }), ul(() => {
      document.removeEventListener("keydown", c);
    }), (h, g) => (A(), Se(na, { to: "body" }, [
      j(pc, { name: "fil-modal" }, {
        default: Kt(() => [
          l.value ? (A(), L("div", {
            key: 0,
            ref_key: "modalRef",
            ref: o,
            class: "fil-modal-backdrop",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title || "Dialog",
            onClick: r
          }, [
            I("div", {
              class: "fil-modal-panel",
              style: it({ maxWidth: e.width })
            }, [
              I("div", sf, [
                I("span", af, X(e.title), 1),
                I("button", {
                  class: "fil-modal-close",
                  title: "Close",
                  onClick: a
                }, [
                  j(Et, {
                    name: "close",
                    size: 14
                  })
                ])
              ]),
              I("div", rf, [
                xu(h.$slots, "default", {}, void 0, !0)
              ])
            ], 4)
          ], 8, of)) : te("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Mn = /* @__PURE__ */ Ae(uf, [["__scopeId", "data-v-0b20f2bd"]]), cf = { class: "fil-help-title" }, df = {
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
}, gf = /* @__PURE__ */ xe({
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
    return Be(n, (i) => {
      i || t.value_close();
    }), (i, o) => (A(), Se(Mn, {
      open: l.value,
      "onUpdate:open": o[0] || (o[0] = (s) => l.value = s),
      title: "FiL LLM Help",
      width: "600px",
      onClose: o[1] || (o[1] = (s) => f(t).value_close())
    }, {
      default: Kt(() => {
        var s;
        return [
          n.value ? (A(), L(ce, { key: 0 }, [
            I("h2", cf, X(n.value.title), 1),
            n.value.body ? (A(), L("p", df, X(n.value.body), 1)) : te("", !0),
            (s = n.value.bullets) != null && s.length ? (A(), L("ul", ff, [
              (A(!0), L(ce, null, De(n.value.bullets, (a, r) => (A(), L("li", {
                key: r,
                class: "fil-help-bullet"
              }, [
                j(Et, {
                  name: "chevronRight",
                  size: 12
                }),
                I("span", null, X(a), 1)
              ]))), 128))
            ])) : te("", !0),
            n.value.table ? (A(), L("table", pf, [
              I("thead", null, [
                I("tr", null, [
                  (A(!0), L(ce, null, De(n.value.table.headers, (a) => (A(), L("th", { key: a }, X(a), 1))), 128))
                ])
              ]),
              I("tbody", null, [
                (A(!0), L(ce, null, De(n.value.table.rows, (a, r) => (A(), L("tr", { key: r }, [
                  (A(!0), L(ce, null, De(a, (c, u) => (A(), L("td", { key: u }, X(c), 1))), 128))
                ]))), 128))
              ])
            ])) : te("", !0),
            n.value.code ? (A(), L("pre", mf, [
              I("code", null, X(n.value.code), 1)
            ])) : te("", !0)
          ], 64)) : (A(), L("p", hf, "No help available for this node."))
        ];
      }),
      _: 1
    }, 8, ["open"]));
  }
}), _f = /* @__PURE__ */ Ae(gf, [["__scopeId", "data-v-536c1547"]]);
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
    Tt.info("ComfyUI search field not found");
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
  var o, s, a, r, c, u, d, h, g;
  let n = !0;
  try {
    n = !!(((r = (a = (s = (o = globalThis.app) == null ? void 0 : o.extensionManager) == null ? void 0 : s.setting) == null ? void 0 : a.get) == null ? void 0 : r.call(a, vf, !0)) ?? !0);
  } catch {
  }
  if (!n) return;
  const l = e.target, i = Cf(l);
  if (e.key === "Escape") {
    try {
      const m = Hl();
      (c = m.value_close) == null || c.call(m);
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
        const m = t.canvas, _ = (m == null ? void 0 : m.selected_nodes) ?? {}, k = Object.values(_).filter(Boolean);
        if (k.length === 1) {
          const x = ((h = k[0]) == null ? void 0 : h.comfyClass) ?? "default", S = Hl();
          S.ensureHelpDefaultsInjected(), (g = S.value_open) == null || g.call(S, x);
        } else
          Tt.info("Select exactly one FiL_Design_ImageMind node, then press ?");
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
const Xa = "FiL_Design_ImageMind", kn = "🎨 FiL ImageMind", Ct = "/fil_design_imagemind", dn = `[${Xa}]`, If = `${Xa}.UI`;
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
async function Hn(e) {
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
const gn = {
  loadAccounts: () => Hn(`${Ct}/auth`),
  saveAccounts: (e) => xl(`${Ct}/auth`, {
    accounts: e
  }),
  loadModels: (e, t = !1) => Hn(`${Ct}/models/${encodeURIComponent(e)}${t ? "?force=1" : ""}`),
  probe: (e, t = "") => xl(`${Ct}/provider_probe`, { provider: e, model: t }),
  listProviders: () => Hn(`${Ct}/providers`),
  saveCompareImage: (e) => xl(`${Ct}/compare/save`, { image: e }),
  nodeContracts: () => Hn(`${Ct}/node_contracts`)
}, Df = 3e5, Pf = ["ollama", "lmstudio", "openai", "google", "groq", "openrouter", "cloudflare"], vn = Pf, fo = /* @__PURE__ */ uo("fil/providers", () => {
  const e = /* @__PURE__ */ se({}), t = /* @__PURE__ */ se({}), n = /* @__PURE__ */ se({}), l = /* @__PURE__ */ se({}), i = /* @__PURE__ */ se(null), o = Q(() => Object.fromEntries(
    Object.entries(e.value).filter(([, x]) => (x == null ? void 0 : x.configured) || (x == null ? void 0 : x.account_id) || (x == null ? void 0 : x.base_url))
  ));
  async function s() {
    try {
      const x = await gn.loadAccounts();
      e.value = x.accounts || {}, i.value = null;
    } catch (x) {
      i.value = x instanceof Error ? x.message : String(x);
    }
  }
  async function a(x, S) {
    try {
      const M = await gn.saveAccounts({ [x]: S });
      e.value = M.accounts || {}, i.value = null, u(x, !0);
    } catch (M) {
      throw i.value = M instanceof Error ? M.message : String(M), M;
    }
  }
  async function r(x) {
    const S = await gn.saveAccounts({
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
      const v = await gn.loadModels(x, S), y = v.models || [];
      return t.value[x] = {
        list: y,
        visionModels: v.vision_models || [],
        cachedAt: Date.now(),
        loading: !1
      }, v.status && v.status !== "available" && (t.value[x].error = v.message || v.status), y;
    } catch (v) {
      const y = v instanceof Error ? v.message : String(v);
      throw t.value[x] = {
        list: [],
        visionModels: [],
        cachedAt: 0,
        loading: !1,
        error: y
      }, i.value = y, v;
    }
  }
  function d(x, S) {
    const M = t.value[x];
    if (!(M != null && M.cachedAt)) return null;
    const v = S ?? ((N, $) => $), y = Date.now() - M.cachedAt, w = Math.floor(y / 1e3);
    return w < 60 ? `${w}${v("unit_seconds_short", "s")}` : w < 3600 ? `${Math.floor(w / 60)}${v("unit_minutes_short", "m")}` : `${Math.floor(w / 3600)}${v("unit_hours_short", "h")}`;
  }
  async function h(x, S = "") {
    try {
      const M = await gn.probe(x, S);
      return n.value[x] = M, M;
    } catch (M) {
      i.value = M instanceof Error ? M.message : String(M);
      return;
    }
  }
  async function g() {
    try {
      const x = await gn.listProviders();
      l.value = x.providers || {};
    } catch {
    }
  }
  function m(x) {
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
    PROVIDER_LIST: vn,
    loadAccounts: s,
    saveAccount: a,
    deleteAccount: c,
    deleteAccountRaw: r,
    loadModels: u,
    probe: h,
    loadDisplayNames: g,
    modelsFor: m,
    visionModelsFor: _,
    isLoading: k,
    cachedAgeLabel: d
  };
}), Rf = ["title", "disabled", "aria-disabled"], Nf = {
  key: 0,
  class: "fil-w-btn-spinner"
}, Tf = ["innerHTML"], Ef = { key: 2 }, Vf = /* @__PURE__ */ xe({
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
    return (r, c) => (A(), L("button", {
      class: me(o.value),
      title: e.title,
      disabled: s.value,
      "aria-disabled": s.value || void 0,
      onClick: a
    }, [
      e.loading ? (A(), L("span", Nf)) : te("", !0),
      e.icon && !e.loading ? (A(), L("span", {
        key: 1,
        class: "fil-w-btn-glyph",
        innerHTML: l.value
      }, null, 8, Tf)) : te("", !0),
      e.label ? (A(), L("span", Ef, X(e.loading ? "" : e.label), 1)) : te("", !0)
    ], 10, Rf));
  }
}), Ke = /* @__PURE__ */ Ae(Vf, [["__scopeId", "data-v-1c6537e0"]]), Ul = {
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
}, ip = /* @__PURE__ */ xe({
  __name: "ProviderManager",
  setup(e) {
    const t = fo(), n = /* @__PURE__ */ se(
      Object.fromEntries(vn.map((v) => [v, { key: "", base_url: "", account_id: "" }]))
    ), l = /* @__PURE__ */ se({}), i = /* @__PURE__ */ se({}), o = /* @__PURE__ */ se({}), s = /* @__PURE__ */ se({});
    Dn(async () => {
      await Promise.all([t.loadAccounts(), t.loadDisplayNames()]);
      for (const v of vn) {
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
      for (const v of vn) {
        const y = t.accounts[v];
        (y != null && y.configured || y != null && y.local || y != null && y.base_url) && x(v);
      }
    });
    const a = Ul, r = po;
    function c(v) {
      return { "fil-pm-has-val": v.length > 0 };
    }
    function u(v) {
      return v === "cloudflare";
    }
    function d(v) {
      var $;
      const y = t.accounts[v], w = t.modelsByProvider[v], N = ((w == null ? void 0 : w.list.length) ?? 0) > 0 && !(w != null && w.error);
      return (($ = t.probeState[v]) == null ? void 0 : $.status) === "available" || i.value[v] || N ? "connected" : y != null && y.configured || y != null && y.local || y != null && y.base_url ? "configured" : "off";
    }
    const h = {
      connected: "Connected",
      configured: "Configured",
      off: "Not connected"
    };
    function g(v) {
      return d(v) === "off" && !s.value[v];
    }
    function m(v) {
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
    async function k(v) {
      n.value[v] = { key: "", base_url: "", account_id: "" }, await t.deleteAccount(v);
    }
    async function x(v) {
      l.value[v] = !0, i.value[v] = !1;
      try {
        const y = await t.probe(v, "");
        i.value[v] = (y == null ? void 0 : y.status) === "available";
      } finally {
        l.value[v] = !1;
      }
    }
    async function S(v) {
      o.value[v] = !0;
      try {
        await t.loadModels(v, !0);
      } finally {
        o.value[v] = !1;
      }
    }
    const M = (v) => {
      const y = n.value[v];
      if (!y) return !1;
      const w = t.accounts[v];
      return y.key !== "" ? !0 : y.base_url !== ((w == null ? void 0 : w.base_url) ?? "") || y.account_id !== ((w == null ? void 0 : w.account_id) ?? "");
    };
    return (v, y) => (A(), L("div", Of, [
      (A(!0), L(ce, null, De(f(vn), (w) => {
        var N, $, T, E, K, C;
        return A(), L("div", {
          key: w,
          class: me(["fil-pm-card", { "fil-pm-card--collapsed": g(w) }])
        }, [
          I("div", {
            class: me(["fil-pm-header", { "fil-pm-header--clickable": d(w) === "off" }]),
            onClick: (V) => m(w)
          }, [
            I("span", Bf, [
              j(Et, {
                name: f(r)[w],
                size: 20
              }, null, 8, ["name"])
            ]),
            I("span", Hf, X(f(a)[w]), 1),
            f(t).displayNames[w] ? (A(), L("span", Uf, "(" + X(f(t).displayNames[w]) + ")", 1)) : te("", !0),
            I("span", {
              class: me(["fil-pm-status", `fil-pm-status--${d(w)}`]),
              title: h[d(w)]
            }, [
              y[0] || (y[0] = I("span", { class: "fil-pm-dot" }, null, -1)),
              Tl(" " + X(h[d(w)]), 1)
            ], 10, Gf),
            d(w) === "off" ? (A(), L("span", {
              key: 1,
              class: me(["fil-pm-chevron", { "fil-pm-chevron--open": s.value[w] }])
            }, [
              j(Et, {
                name: "chevronRight",
                size: 12
              })
            ], 2)) : te("", !0)
          ], 10, $f),
          g(w) ? te("", !0) : (A(), L(ce, { key: 0 }, [
            I("div", Wf, [
              I("label", jf, [
                y[1] || (y[1] = I("span", { class: "fil-pm-field-label" }, "API Key", -1)),
                ot(I("input", {
                  "onUpdate:modelValue": (V) => n.value[w].key = V,
                  type: "password",
                  class: me(["fil-pm-input", c(n.value[w].key)]),
                  placeholder: (N = f(t).accounts[w]) != null && N.configured ? "•••••••• (saved)" : "sk-...",
                  onKeydown: Sl((V) => _(w), ["enter"])
                }, null, 42, zf), [
                  [vt, n.value[w].key]
                ])
              ]),
              I("label", Kf, [
                y[2] || (y[2] = I("span", { class: "fil-pm-field-label" }, "Base URL", -1)),
                ot(I("input", {
                  "onUpdate:modelValue": (V) => n.value[w].base_url = V,
                  type: "text",
                  class: me(["fil-pm-input", c(n.value[w].base_url)]),
                  placeholder: "http://localhost:11434",
                  onKeydown: Sl((V) => _(w), ["enter"])
                }, null, 42, qf), [
                  [vt, n.value[w].base_url]
                ])
              ]),
              u(w) ? (A(), L("label", Xf, [
                y[3] || (y[3] = I("span", { class: "fil-pm-field-label" }, "Account ID", -1)),
                ot(I("input", {
                  "onUpdate:modelValue": (V) => n.value[w].account_id = V,
                  type: "text",
                  class: me(["fil-pm-input", c(n.value[w].account_id)]),
                  onKeydown: Sl((V) => _(w), ["enter"])
                }, null, 42, Yf), [
                  [vt, n.value[w].account_id]
                ])
              ])) : te("", !0)
            ]),
            I("div", Jf, [
              j(Ke, {
                variant: "accent",
                label: M(w) ? "Save" : "Saved",
                disabled: !M(w),
                onClick: (V) => _(w)
              }, null, 8, ["label", "disabled", "onClick"]),
              !M(w) && f(t).cachedAgeLabel(w) ? (A(), L("span", Qf, X(f(t).cachedAgeLabel(w)) + " ago ", 1)) : te("", !0),
              j(Ke, {
                variant: "danger",
                label: "Delete",
                disabled: !(($ = f(t).accounts[w]) != null && $.configured) && !((T = f(t).accounts[w]) != null && T.base_url),
                onClick: (V) => k(w)
              }, null, 8, ["disabled", "onClick"]),
              j(Ke, {
                variant: "standard",
                label: "Probe",
                loading: l.value[w],
                flashing: i.value[w],
                disabled: !((E = f(t).accounts[w]) != null && E.local) && !((K = f(t).accounts[w]) != null && K.configured) && !n.value[w].key && !n.value[w].base_url,
                onClick: (V) => x(w)
              }, null, 8, ["loading", "flashing", "disabled", "onClick"]),
              j(Ke, {
                variant: "standard",
                label: "Load Models",
                loading: o.value[w],
                onClick: (V) => S(w)
              }, null, 8, ["loading", "onClick"])
            ]),
            (C = f(t).modelsByProvider[w]) != null && C.error ? (A(), L("div", Zf, X(f(t).modelsByProvider[w].error), 1)) : te("", !0),
            f(t).probeState[w] && f(t).probeState[w].status !== "available" ? (A(), L("div", ep, X(f(t).probeState[w].message), 1)) : te("", !0),
            f(t).modelsFor(w).length > 0 ? (A(), L("div", tp, [
              (A(!0), L(ce, null, De(f(t).modelsFor(w), (V) => (A(), L("span", {
                class: "fil-pm-model-tag",
                key: V
              }, [
                Tl(X(V) + " ", 1),
                f(t).visionModelsFor(w).includes(V) ? (A(), L("span", np, "👁")) : te("", !0)
              ]))), 128))
            ])) : te("", !0),
            f(t).lastError ? (A(), L("div", lp, X(f(t).lastError), 1)) : te("", !0)
          ], 64))
        ], 2);
      }), 128))
    ]));
  }
}), op = /* @__PURE__ */ Ae(ip, [["__scopeId", "data-v-329149a3"]]);
let Vn = null;
function sp(e) {
  Vn && (Vn.unmount(), Vn = null), Vn = ro(op).use(co()), Vn.mount(e), console.info("[FiL_Design_ImageMind] provider manager mounted");
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
    category: [kn, "General"],
    tooltip: "Default AI Provider pre-selected in new Provider Loader nodes."
  },
  {
    id: "FiL_Design_ImageMind.RequestTimeout",
    name: "Request Timeout (seconds)",
    type: "number",
    defaultValue: 60,
    attrs: { min: 5, max: 600, step: 5 },
    category: [kn, "Network"],
    tooltip: "Global timeout in seconds for API calls to local/cloud LLM providers."
  },
  {
    id: "FiL_Design_ImageMind.AutoCleanVRAM",
    name: "Auto VRAM cleanup on completion",
    type: "boolean",
    defaultValue: !1,
    category: [kn, "Performance"],
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
    category: [kn, "Language"]
  }
];
function Qa(e) {
  xl(`${Ct}/log_level`, { level: String(e) }).catch(() => {
  });
}
const cp = [
  {
    id: "FiL_Design_ImageMind.Logging.Level",
    name: "Log level",
    type: "combo",
    defaultValue: "WARNING",
    options: ["DEBUG", "INFO", "WARNING", "ERROR"],
    category: [kn, "Logging"],
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
    category: [kn, "Appearance", "Theme"],
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
    const h = (s = (o = (i = l.app) == null ? void 0 : i.extensionManager) == null ? void 0 : o.setting) == null ? void 0 : s.get;
    if (typeof h == "function") return h(e, t);
    const g = ((r = (a = l.ui) == null ? void 0 : a.settings) == null ? void 0 : r.getSettingValue) ?? ((d = (u = (c = globalThis.app) == null ? void 0 : c.ui) == null ? void 0 : u.settings) == null ? void 0 : d.getSettingValue);
    if (typeof g == "function") return g(e, t);
  } catch (h) {
    console.warn(`[FiL_Design_ImageMind] setting read failed for "${e}":`, h);
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
    e = await fetch(`${Ct}/node_contracts`);
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
const vp = ["aria-checked", "disabled", "title", "onClick"], yp = /* @__PURE__ */ xe({
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
    const t = e, n = at(e, "modelValue"), l = Q(() => ({
      gridTemplateColumns: `repeat(${Math.max(1, t.columns)}, minmax(0, 1fr))`
    }));
    function i(o) {
      t.disabled || o !== n.value && (n.value = o);
    }
    return (o, s) => (A(), L("div", {
      class: "fil-w-chips",
      style: it(l.value),
      role: "radiogroup"
    }, [
      (A(!0), L(ce, null, De(e.options, (a) => (A(), L("button", {
        key: a,
        type: "button",
        role: "radio",
        class: me(["fil-w-chip", { active: a === n.value, disabled: e.disabled }]),
        "aria-checked": a === n.value,
        disabled: e.disabled,
        title: a,
        onClick: (r) => i(a)
      }, X(a), 11, vp))), 128))
    ], 4));
  }
}), bs = /* @__PURE__ */ Ae(yp, [["__scopeId", "data-v-9c6ca5d1"]]), wp = { class: "fil-w-chiplist" }, Sp = ["placeholder", "aria-label", "disabled"], xp = {
  class: "fil-w-chip-scroll",
  role: "radiogroup"
}, Cp = ["aria-checked", "disabled", "title", "onClick"], Ap = {
  key: 0,
  class: "fil-w-chip-empty"
}, Mp = /* @__PURE__ */ xe({
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
    const t = e, n = at(e, "modelValue"), l = /* @__PURE__ */ se(""), i = Q(() => {
      const s = l.value.trim().toLowerCase();
      return s ? t.options.filter((a) => a.toLowerCase().includes(s)) : t.options;
    });
    function o(s) {
      t.disabled || s !== n.value && (n.value = s);
    }
    return (s, a) => (A(), L("div", wp, [
      e.searchable ? ot((A(), L("input", {
        key: 0,
        "onUpdate:modelValue": a[0] || (a[0] = (r) => l.value = r),
        class: "fil-w-search",
        type: "search",
        placeholder: e.placeholder,
        "aria-label": e.placeholder,
        disabled: e.disabled,
        spellcheck: "false"
      }, null, 8, Sp)), [
        [vt, l.value]
      ]) : te("", !0),
      I("div", xp, [
        (A(!0), L(ce, null, De(i.value, (r) => (A(), L("button", {
          key: r,
          type: "button",
          role: "radio",
          class: me(["fil-w-chip", { active: r === n.value, disabled: e.disabled }]),
          "aria-checked": r === n.value,
          disabled: e.disabled,
          title: r,
          onClick: (c) => o(r)
        }, X(r), 11, Cp))), 128)),
        i.value.length === 0 ? (A(), L("div", Ap, X(l.value ? "No matches" : "Empty"), 1)) : te("", !0)
      ])
    ]));
  }
}), kp = /* @__PURE__ */ Ae(Mp, [["__scopeId", "data-v-3c9e19df"]]), Fp = ["title"], Lp = {
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
}, $p = /* @__PURE__ */ xe({
  __name: "FilComboBox",
  props: /* @__PURE__ */ qe({
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
    const t = e, n = at(e, "modelValue"), l = /* @__PURE__ */ se(!1), i = /* @__PURE__ */ se(""), o = /* @__PURE__ */ se(0), s = /* @__PURE__ */ se(null), a = /* @__PURE__ */ se(null), r = /* @__PURE__ */ se(null), c = /* @__PURE__ */ se({}), u = Q(() => t.options.find((w) => w.value === n.value)), d = Q(() => {
      if (!t.searchable || !i.value.trim()) return t.options;
      const w = i.value.trim().toLowerCase();
      return t.options.filter((N) => (N.label ?? N.value).toLowerCase().includes(w));
    });
    function h(w) {
      return w.label ?? w.value;
    }
    function g() {
      const w = s.value;
      if (!w) return;
      const N = w.getBoundingClientRect(), $ = window.innerHeight, T = 260, E = $ - N.bottom, K = E < T && N.top > E;
      c.value = {
        left: `${N.left}px`,
        width: `${N.width}px`,
        ...K ? { bottom: `${$ - N.top + 4}px` } : { top: `${N.bottom + 4}px` }
      };
    }
    function m(w) {
      var $;
      const N = w.target;
      N instanceof Element && (($ = a.value) != null && $.contains(N)) || k();
    }
    function _() {
      t.disabled || (l.value = !0, i.value = "", o.value = Math.max(
        0,
        d.value.findIndex((w) => w.value === n.value)
      ), In(() => {
        var w;
        g(), t.searchable && ((w = r.value) == null || w.focus()), window.addEventListener("resize", m), window.addEventListener("scroll", m, !0), document.addEventListener("mousedown", x, !0);
      }));
    }
    function k() {
      l.value && (l.value = !1, window.removeEventListener("resize", m), window.removeEventListener("scroll", m, !0), document.removeEventListener("mousedown", x, !0));
    }
    function x(w) {
      var $, T;
      const N = w.target;
      ($ = s.value) != null && $.contains(N) || (T = a.value) != null && T.contains(N) || k();
    }
    function S() {
      l.value ? k() : _();
    }
    function M(w) {
      var N;
      n.value = w.value, k(), (N = s.value) == null || N.focus();
    }
    function v(w) {
      if (!t.disabled) {
        if (!l.value && (w.key === "ArrowDown" || w.key === "ArrowUp" || w.key === "Enter" || w.key === " ")) {
          w.preventDefault(), _();
          return;
        }
        l.value && y(w);
      }
    }
    function y(w) {
      var $;
      const N = d.value;
      if (w.key === "ArrowDown")
        w.preventDefault(), o.value = N.length ? (o.value + 1) % N.length : 0;
      else if (w.key === "ArrowUp")
        w.preventDefault(), o.value = N.length ? (o.value - 1 + N.length) % N.length : 0;
      else if (w.key === "Enter") {
        w.preventDefault();
        const T = N[o.value];
        T && M(T);
      } else w.key === "Escape" && (w.preventDefault(), k(), ($ = s.value) == null || $.focus());
    }
    return Be(i, () => {
      o.value = 0;
    }), ul(() => {
      window.removeEventListener("resize", m), window.removeEventListener("scroll", m, !0), document.removeEventListener("mousedown", x, !0);
    }), (w, N) => {
      var $, T;
      return A(), L("div", {
        class: "fil-combo",
        title: e.title
      }, [
        e.label ? (A(), L("label", Lp, X(e.label), 1)) : te("", !0),
        I("button", {
          ref_key: "triggerRef",
          ref: s,
          type: "button",
          class: me(["fil-combo-trigger", { open: l.value, disabled: e.disabled }]),
          disabled: e.disabled,
          "aria-expanded": l.value,
          "aria-haspopup": "listbox",
          onClick: S,
          onKeydown: v
        }, [
          ($ = u.value) != null && $.icon ? (A(), Se(Et, {
            key: 0,
            name: u.value.icon,
            size: 16
          }, null, 8, ["name"])) : te("", !0),
          I("span", Dp, X(u.value ? h(u.value) : n.value), 1),
          (T = u.value) != null && T.badge ? (A(), L("span", Pp, X(u.value.badge), 1)) : te("", !0),
          N[1] || (N[1] = I("span", { class: "fil-combo-chevron" }, "▾", -1))
        ], 42, Ip),
        (A(), Se(na, { to: "body" }, [
          l.value ? (A(), L("div", {
            key: 0,
            ref_key: "panelRef",
            ref: a,
            class: "fil-combo-panel",
            style: it(c.value),
            role: "listbox",
            onKeydown: y
          }, [
            e.searchable ? ot((A(), L("input", {
              key: 0,
              ref_key: "searchRef",
              ref: r,
              "onUpdate:modelValue": N[0] || (N[0] = (E) => i.value = E),
              type: "search",
              class: "fil-combo-search",
              placeholder: e.placeholder,
              spellcheck: "false"
            }, null, 8, Rp)), [
              [vt, i.value]
            ]) : te("", !0),
            I("div", Np, [
              (A(!0), L(ce, null, De(d.value, (E, K) => (A(), L("button", {
                key: E.value,
                type: "button",
                class: me(["fil-combo-option", { active: K === o.value, selected: E.value === n.value }]),
                role: "option",
                "aria-selected": E.value === n.value,
                onMouseenter: (C) => o.value = K,
                onClick: (C) => M(E)
              }, [
                E.icon ? (A(), Se(Et, {
                  key: 0,
                  name: E.icon,
                  size: 16
                }, null, 8, ["name"])) : te("", !0),
                I("span", Ep, X(h(E)), 1),
                E.badge ? (A(), L("span", Vp, X(E.badge), 1)) : te("", !0)
              ], 42, Tp))), 128)),
              d.value.length === 0 ? (A(), L("div", Op, "No matches")) : te("", !0)
            ])
          ], 36)) : te("", !0)
        ]))
      ], 8, Fp);
    };
  }
}), Bp = /* @__PURE__ */ Ae($p, [["__scopeId", "data-v-82542923"]]), Hp = ["data-ok", "data-err"], Up = /* @__PURE__ */ xe({
  __name: "FilInfo",
  props: {
    text: {},
    ok: { type: Boolean },
    err: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (A(), L("div", {
      class: "fil-w-info",
      "data-ok": e.ok || void 0,
      "data-err": e.err || void 0
    }, X(e.text), 9, Hp));
  }
}), Cl = /* @__PURE__ */ Ae(Up, [["__scopeId", "data-v-851660c1"]]), Gp = ["title"], Wp = {
  key: 0,
  class: "fil-w-numfield-label"
}, jp = { class: "fil-w-num-wrap" }, zp = ["disabled", "min", "max", "step", "aria-label"], Kp = { class: "fil-w-num-step" }, qp = ["disabled"], Xp = ["disabled"], Yp = /* @__PURE__ */ xe({
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
    const t = e, n = at(e, "modelValue"), l = Q(() => n.value), i = /* @__PURE__ */ se(a(l.value));
    Be(l, (m) => {
      o.value || (i.value = a(m));
    });
    let o = /* @__PURE__ */ se(!1), s = null;
    function a(m) {
      return Number.isFinite(m) ? String(m) : "";
    }
    function r(m) {
      const _ = (m || "").trim();
      if (_ === "" || !/^[0-9+\-*/(). ]+$/.test(_.replace(/\^/g, "**"))) return null;
      try {
        const k = new Function(`"use strict"; return (${_});`), x = Number(k());
        return Number.isFinite(x) ? x : null;
      } catch {
        return null;
      }
    }
    function c(m) {
      if (m === null) {
        i.value = a(l.value);
        return;
      }
      let _ = m;
      t.min != null && _ < t.min && (_ = t.min), t.max != null && _ > t.max && (_ = t.max), _ !== l.value && (n.value = _), i.value = a(_);
    }
    function u() {
      o.value = !0, s = i.value;
    }
    function d() {
      o.value = !1, c(r(i.value)), s = null;
    }
    function h(m) {
      m.key === "Enter" ? (m.preventDefault(), c(r(i.value)), m.target.blur()) : m.key === "Escape" ? (m.preventDefault(), s !== null && (i.value = s), m.target.blur()) : m.key === "ArrowUp" ? (m.preventDefault(), g(m.shiftKey ? 10 : 1)) : m.key === "ArrowDown" && (m.preventDefault(), g(m.shiftKey ? -10 : -1));
    }
    function g(m) {
      let _ = l.value + m * (t.step || 1);
      t.min != null && _ < t.min && (_ = t.min), t.max != null && _ > t.max && (_ = t.max), n.value = _, i.value = a(_);
    }
    return (m, _) => (A(), L("div", {
      class: me(["fil-w-numfield", { "no-label": !e.label }]),
      title: e.title
    }, [
      e.label ? (A(), L("label", Wp, X(e.label), 1)) : te("", !0),
      I("div", jp, [
        ot(I("input", {
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
          onKeydown: h
        }, null, 40, zp), [
          [vt, i.value]
        ]),
        I("div", Kp, [
          I("button", {
            type: "button",
            class: "fil-w-num-btn",
            tabindex: "-1",
            "aria-label": "Increment",
            disabled: e.disabled || e.max != null && n.value >= e.max,
            onMousedown: _[1] || (_[1] = Vi(() => {
            }, ["prevent"])),
            onClick: _[2] || (_[2] = (k) => g(k.shiftKey ? 10 : 1))
          }, "▲", 40, qp),
          I("button", {
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
}), zt = /* @__PURE__ */ Ae(Yp, [["__scopeId", "data-v-2f843ba1"]]), Jp = ["aria-expanded", "disabled"], Qp = { class: "fil-w-section-arrow" }, Zp = { class: "fil-w-section-title" }, em = /* @__PURE__ */ xe({
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
    const t = e, n = at(e, "modelValue");
    function l() {
      t.collapsible && (n.value = !n.value);
    }
    const i = Q(() => n.value ? "▶" : "▼");
    return (o, s) => (A(), L("button", {
      type: "button",
      class: me(["fil-w-section", { collapsible: e.collapsible, collapsed: n.value }]),
      "aria-expanded": !n.value,
      disabled: !e.collapsible,
      onClick: l
    }, [
      I("span", Qp, X(i.value), 1),
      I("span", Zp, X(e.title), 1)
    ], 10, Jp));
  }
}), nt = /* @__PURE__ */ Ae(em, [["__scopeId", "data-v-4b760ea4"]]), tm = ["title"], nm = {
  key: 0,
  class: "fil-w-segmented-label"
}, lm = ["aria-label"], im = ["aria-pressed", "disabled", "tabindex", "onClick", "onKeydown"], om = /* @__PURE__ */ xe({
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
    const t = e, n = at(e, "modelValue"), l = /* @__PURE__ */ se([]);
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
        const h = c[(r + 1) % c.length];
        o(h), (u = l.value[(r + 1) % c.length]) == null || u.focus();
      } else if (a.key === "ArrowLeft" || a.key === "ArrowUp") {
        a.preventDefault();
        const h = c[(r - 1 + c.length) % c.length];
        o(h), (d = l.value[(r - 1 + c.length) % c.length]) == null || d.focus();
      }
    }
    return (a, r) => (A(), L("div", {
      class: "fil-w-segmented",
      title: e.title
    }, [
      e.label ? (A(), L("label", nm, X(e.label), 1)) : te("", !0),
      I("div", {
        class: me(["fil-w-pill", { disabled: e.disabled }]),
        role: "group",
        "aria-label": e.label
      }, [
        (A(!0), L(ce, null, De(e.options, (c, u) => (A(), L("button", {
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
        }, X(i(c)), 43, im))), 128))
      ], 10, lm)
    ], 8, tm));
  }
}), _t = /* @__PURE__ */ Ae(om, [["__scopeId", "data-v-765cf0ce"]]), sm = ["title"], am = {
  key: 0,
  class: "fil-w-select-label"
}, rm = ["disabled", "aria-label"], um = ["value"], cm = /* @__PURE__ */ xe({
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
    const t = at(e, "modelValue");
    return (n, l) => (A(), L("div", {
      class: "fil-w-select",
      title: e.title
    }, [
      e.label ? (A(), L("label", am, X(e.label), 1)) : te("", !0),
      ot(I("select", {
        "onUpdate:modelValue": l[0] || (l[0] = (i) => t.value = i),
        class: "fil-w-select-input",
        disabled: e.disabled,
        "aria-label": e.label
      }, [
        (A(!0), L(ce, null, De(e.options, (i) => (A(), L("option", {
          key: i,
          value: i
        }, X(i), 9, um))), 128))
      ], 8, rm), [
        [Vc, t.value]
      ])
    ], 8, sm));
  }
}), bl = /* @__PURE__ */ Ae(cm, [["__scopeId", "data-v-a878baba"]]), dm = ["title"], fm = {
  key: 0,
  class: "fil-w-slider-label"
}, pm = { class: "fil-w-slider-row" }, mm = ["value", "min", "max", "step", "disabled", "aria-label"], hm = /* @__PURE__ */ xe({
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
    const t = e, n = at(e, "modelValue"), l = Q({
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
    return (o, s) => (A(), L("div", {
      class: "fil-w-slider",
      title: e.title
    }, [
      e.label ? (A(), L("label", fm, X(e.label), 1)) : te("", !0),
      I("div", pm, [
        I("input", {
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
        j(zt, {
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
}), Te = /* @__PURE__ */ Ae(hm, [["__scopeId", "data-v-c8e1921a"]]), gm = {
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
}, wm = "FiL_Design_ImageMind.Language", tr = "en", kt = /* @__PURE__ */ Xt({
  lang: tr,
  translations: {},
  loaded: !1
});
let vs = null;
async function Sm(e) {
  try {
    const t = await Hn(`/fil_design_imagemind/locale/${encodeURIComponent(e)}`);
    kt.translations = t, kt.lang = e;
  } catch (t) {
    console.warn(`[FiL_Design_ImageMind] failed to load locale "${e}":`, t);
  } finally {
    kt.loaded = !0;
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
function yt() {
  xm();
  function e(n, l) {
    return kt.translations[n] ?? l;
  }
  function t(n, l, i, o, s) {
    const a = kt.translations[`${n}_one`] ?? i, r = kt.translations[`${n}_few`] ?? o, c = kt.translations[`${n}_many`] ?? s;
    return kt.lang === "ru" ? Cm(l, a, r, c) : l === 1 ? a : c;
  }
  return { t: e, tPlural: t, state: /* @__PURE__ */ kl(kt) };
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
}, vl = "__all__", Hm = /* @__PURE__ */ xe({
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
    const { t: n } = yt(), l = e, i = at(e, "modelValue"), o = t;
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
      for (const v of l.styles) {
        const y = s(v);
        y && !S.has(y) && (S.add(y), M.push(y));
      }
      return M;
    }), h = /* @__PURE__ */ se(vl), g = /* @__PURE__ */ se(""), m = Q(() => {
      const S = g.value.trim().toLowerCase();
      return l.styles.filter((M) => h.value !== vl && s(M) !== h.value ? !1 : S ? M.toLowerCase().includes(S) : !0);
    });
    function _(S) {
      return ym[S];
    }
    function k(S) {
      const M = r.value.filter((y) => y !== S), v = M.length > 0 ? M.join(" | ") : "None";
      i.value = v, o("select", v);
    }
    function x(S) {
      if (l.multi) {
        let M;
        c.value.has(S) ? M = r.value.filter((y) => y !== S) : M = [...r.value, S];
        const v = M.length > 0 ? M.join(" | ") : "None";
        i.value = v, o("select", v);
      } else {
        const M = i.value === S ? "None" : S;
        i.value = M, o("select", M);
      }
    }
    return (S, M) => (A(), L("div", Am, [
      r.value.length > 0 ? (A(), L("div", Mm, [
        (A(!0), L(ce, null, De(r.value, (v) => (A(), L("span", {
          key: v,
          class: "fil-style-chip"
        }, [
          I("span", km, X(a(v)), 1),
          I("button", {
            type: "button",
            class: "fil-chip-remove",
            title: "Remove style",
            onClick: Vi((y) => k(v), ["stop"])
          }, "×", 8, Fm)
        ]))), 128))
      ])) : te("", !0),
      I("div", Lm, [
        I("button", {
          type: "button",
          class: me(["fil-style-cat", { active: h.value === vl }]),
          onClick: M[0] || (M[0] = (v) => h.value = vl)
        }, X(f(n)("fsp_all_categories", "All")), 3),
        (A(!0), L(ce, null, De(d.value, (v) => (A(), L("button", {
          key: v,
          type: "button",
          class: me(["fil-style-cat", { active: h.value === v }]),
          onClick: (y) => h.value = v
        }, X(v), 11, Im))), 128))
      ]),
      I("div", Dm, [
        ot(I("input", {
          "onUpdate:modelValue": M[1] || (M[1] = (v) => g.value = v),
          type: "search",
          class: "fil-style-search",
          placeholder: f(n)("fsp_search_placeholder", "Search styles…"),
          "aria-label": f(n)("fsp_search_aria", "Search styles"),
          spellcheck: "false"
        }, null, 8, Pm), [
          [vt, g.value]
        ]),
        g.value.trim().length > 0 ? (A(), L("button", {
          key: 0,
          type: "button",
          class: "fil-style-search-clear",
          title: f(n)("fsp_clear_search", "Clear search"),
          onClick: M[2] || (M[2] = (v) => g.value = "")
        }, " × ", 8, Rm)) : te("", !0)
      ]),
      I("div", Nm, [
        (A(!0), L(ce, null, De(m.value, (v) => (A(), L("button", {
          key: v,
          type: "button",
          class: me(["fil-style-tile", { active: u(v) }]),
          title: v,
          onClick: (y) => x(v)
        }, [
          I("span", Em, [
            _(v) ? (A(), L("img", {
              key: 0,
              src: _(v),
              class: "fil-style-tile-img",
              alt: ""
            }, null, 8, Vm)) : (A(), L("span", Om, X(a(v).split(" ")[0]), 1))
          ]),
          I("span", $m, X(a(v)), 1)
        ], 10, Tm))), 128)),
        m.value.length === 0 ? (A(), L("div", Bm, "No matches")) : te("", !0)
      ])
    ]));
  }
}), Al = /* @__PURE__ */ Ae(Hm, [["__scopeId", "data-v-41b37d4d"]]), Um = ["title"], Gm = {
  key: 0,
  class: "fil-w-toggle-label"
}, Wm = ["aria-checked", "aria-label", "disabled"], jm = /* @__PURE__ */ xe({
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
    const t = e, n = at(e, "modelValue");
    function l() {
      t.disabled || (n.value = n.value === "ON" ? "OFF" : "ON");
    }
    return (i, o) => (A(), L("div", {
      class: me(["fil-w-toggle", { bare: e.bare }]),
      title: e.title
    }, [
      e.label ? (A(), L("label", Gm, X(e.label), 1)) : te("", !0),
      I("button", {
        type: "button",
        class: me(["fil-w-switch", { on: n.value === "ON" }]),
        role: "switch",
        "aria-checked": n.value === "ON",
        "aria-label": e.label,
        disabled: e.disabled,
        onClick: l
      }, [...o[0] || (o[0] = [
        I("span", { class: "fil-w-switch-thumb" }, null, -1)
      ])], 10, Wm)
    ], 10, Um));
  }
}), yn = /* @__PURE__ */ Ae(jm, [["__scopeId", "data-v-9d64f497"]]), zm = { class: "fil-seed-root" }, Km = ["readonly", "title", "aria-label"], qm = { class: "fil-seed-actions" }, Xm = /* @__PURE__ */ xe({
  __name: "Seed",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = yt(), l = Q({
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
    Be(l, (c) => {
      const u = t.state.node, d = u ? oe(u, "control_after_generate") : null;
      d && (d.value = c === "fixed" ? "fixed" : "randomize");
    }, { immediate: !0 }), Be(
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
        Tt.warning(n("sd_no_last_seed", "No last-run seed recorded yet"));
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
    return (c, u) => (A(), L("div", zm, [
      ot(I("input", {
        "onUpdate:modelValue": u[0] || (u[0] = (d) => r.value = d),
        type: "text",
        class: "fil-seed-display",
        readonly: l.value === "random",
        title: l.value === "fixed" ? f(n)("sd_locked", "Locked seed") : f(n)("sd_auto_random", "Auto-random"),
        "aria-label": f(n)("sd_aria_seed_value", "Seed value")
      }, null, 8, Km), [
        [vt, r.value]
      ]),
      I("div", qm, [
        j(f(Ke), {
          label: "🔀",
          variant: "standard",
          title: f(n)("sd_mode", "Random generates a new seed each run."),
          onClick: o
        }, null, 8, ["title"]),
        j(f(Ke), {
          label: "♻️",
          variant: "standard",
          title: f(n)("sd_use_last", "Reuse the seed from the last executed run."),
          onClick: s
        }, null, 8, ["title"]),
        j(f(Ke), {
          label: "🎲",
          variant: "accent",
          title: f(n)("sd_new_fixed", "Generate a new random fixed seed."),
          onClick: a
        }, null, 8, ["title"])
      ])
    ]));
  }
}), Ym = /* @__PURE__ */ Ae(Xm, [["__scopeId", "data-v-d9d8deb9"]]), Jm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
}, Ph = { class: "footer-actions" }, ys = "fil_model_picker_view_mode", Rh = /* @__PURE__ */ xe({
  __name: "ProviderModelPicker",
  props: {
    open: { type: Boolean, default: !1 },
    provider: { default: "ollama" },
    model: { default: "" }
  },
  emits: ["update:open", "select"],
  setup(e, { emit: t }) {
    const n = e, l = t, i = fo(), { t: o, tPlural: s } = yt(), a = /* @__PURE__ */ se(n.provider), r = /* @__PURE__ */ se(n.model), c = /* @__PURE__ */ se(""), u = /* @__PURE__ */ se("all"), d = /* @__PURE__ */ se("all"), h = /* @__PURE__ */ se(
      localStorage.getItem(ys) || "list"
    );
    function g(D) {
      h.value = D;
      try {
        localStorage.setItem(ys, D);
      } catch {
      }
    }
    const m = ["all", "vision", "text"], _ = Q(() => ({
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
    Be(
      () => n.open,
      (D) => {
        D && (a.value = n.provider || "ollama", r.value = n.model || "", c.value = "", u.value = "all", d.value = "all", v());
      }
    );
    async function v(D = !1) {
      try {
        await i.loadModels(a.value, D);
      } catch (F) {
        Tt.error(F instanceof Error ? F.message : String(F));
      }
    }
    function y(D) {
      a.value = D, c.value = "", d.value = "all";
      const F = i.modelsFor(D);
      F.length > 0 ? r.value = F[0] : r.value = "", v();
    }
    const w = Q(() => i.modelsFor(a.value)), N = Q(() => i.visionModelsFor(a.value)), $ = Q(() => i.isLoading(a.value)), T = Q(() => i.probeState[a.value]), E = Q(() => i.cachedAgeLabel(a.value, o));
    function K(D, F) {
      return F === "ollama" || F === "lmstudio" ? "local" : D.toLowerCase().includes(":free") ? "free" : "paid";
    }
    function C(D) {
      return N.value.includes(D);
    }
    const V = Q(() => {
      let D = w.value;
      const F = c.value.trim().toLowerCase(), G = a.value;
      return F && (D = D.filter((pe) => pe.toLowerCase().includes(F))), u.value === "vision" ? D = D.filter((pe) => C(pe)) : u.value === "text" && (D = D.filter((pe) => !C(pe))), d.value !== "all" && (D = D.filter((pe) => K(pe, G) === d.value)), D;
    });
    function H(D) {
      r.value = D;
    }
    function R() {
      r.value && (l("select", { provider: a.value, model: r.value }), l("update:open", !1));
    }
    function O() {
      l("update:open", !1);
    }
    return (D, F) => (A(), Se(Mn, {
      open: e.open,
      width: "860px",
      title: f(o)("pmp_title", "🔌 Choose Provider & Model"),
      "onUpdate:open": F[6] || (F[6] = (G) => l("update:open", G)),
      onClose: O
    }, {
      default: Kt(() => [
        I("div", Qm, [
          I("div", Zm, [
            (A(!0), L(ce, null, De(f(vn), (G) => (A(), L("button", {
              key: G,
              type: "button",
              class: me(["tab-btn", { active: G === a.value }]),
              onClick: (pe) => y(G)
            }, [
              j(Et, {
                name: f(po)[G],
                size: 18
              }, null, 8, ["name"]),
              I("span", th, X(f(Ul)[G] ?? G), 1),
              f(i).modelsFor(G).length ? (A(), L("span", nh, X(f(i).modelsFor(G).length), 1)) : te("", !0)
            ], 10, eh))), 128))
          ]),
          I("div", lh, [
            I("div", ih, [
              I("span", oh, X(f(Ul)[a.value] ?? a.value), 1),
              $.value ? (A(), L("span", sh, "⏳ " + X(f(o)("pmp_loading", "Loading...")), 1)) : T.value && T.value.status && T.value.status !== "available" ? (A(), L("span", ah, " ⚠️ " + X(T.value.message || T.value.status), 1)) : (A(), L("span", rh, " ● " + X(f(o)("pmp_online", "Online")) + " (" + X(w.value.length) + " " + X(f(s)("prov_models", w.value.length, "model", "models", "models")) + ") ", 1)),
              E.value ? (A(), L("span", uh, X(f(o)("pmp_updated", "Updated")) + ": " + X(E.value), 1)) : te("", !0)
            ]),
            j(Ke, {
              variant: "sm",
              label: f(o)("pmp_refresh", "↻ Refresh"),
              loading: $.value,
              title: f(o)("tt_refresh", "Reload models list"),
              onClick: F[0] || (F[0] = (G) => v(!0))
            }, null, 8, ["label", "loading", "title"])
          ]),
          I("div", ch, [
            I("div", dh, [
              j(Et, {
                name: "search",
                size: 14,
                class: "search-icon"
              }),
              ot(I("input", {
                "onUpdate:modelValue": F[1] || (F[1] = (G) => c.value = G),
                type: "text",
                class: "search-input",
                placeholder: f(o)("pmp_search", "Search models...")
              }, null, 8, fh), [
                [vt, c.value]
              ]),
              c.value ? (A(), L("button", {
                key: 0,
                type: "button",
                class: "clear-search",
                title: f(o)("tt_clear_search", "Clear search"),
                onClick: F[2] || (F[2] = (G) => c.value = "")
              }, "✕", 8, ph)) : te("", !0)
            ]),
            I("div", mh, [
              j(_t, {
                options: [...m],
                "option-labels": _.value,
                "model-value": u.value,
                "onUpdate:modelValue": F[3] || (F[3] = (G) => u.value = G)
              }, null, 8, ["options", "option-labels", "model-value"]),
              j(_t, {
                options: M.value,
                "option-labels": k.value,
                "model-value": d.value,
                "onUpdate:modelValue": F[4] || (F[4] = (G) => d.value = G)
              }, null, 8, ["options", "option-labels", "model-value"]),
              j(_t, {
                options: [...x],
                "option-labels": S.value,
                "model-value": h.value,
                "onUpdate:modelValue": F[5] || (F[5] = (G) => g(G))
              }, null, 8, ["options", "option-labels", "model-value"])
            ])
          ]),
          I("div", hh, [
            $.value && !w.value.length ? (A(), L("div", gh, [
              j(Cl, {
                text: f(o)("pmp_loading_provider", "Loading models from provider...")
              }, null, 8, ["text"])
            ])) : V.value.length ? (A(), L("div", {
              key: 2,
              class: me(["models-container", h.value])
            }, [
              (A(!0), L(ce, null, De(V.value, (G) => (A(), L("button", {
                key: G,
                type: "button",
                class: me(["model-card", { selected: G === r.value }]),
                "aria-pressed": G === r.value,
                onClick: (pe) => H(G)
              }, [
                I("div", vh, [
                  I("span", yh, X(C(G) ? "👁" : "📝"), 1),
                  I("span", {
                    class: "model-name",
                    title: G
                  }, X(G), 9, wh)
                ]),
                I("div", Sh, [
                  C(G) ? (A(), L("span", xh, X(f(o)("pmp_tag_vision", "Vision")), 1)) : (A(), L("span", Ch, X(f(o)("pmp_tag_text", "Text")), 1)),
                  K(G, a.value) === "local" ? (A(), L("span", Ah, X(f(o)("pmp_tag_local", "Local")), 1)) : K(G, a.value) === "free" ? (A(), L("span", Mh, X(f(o)("pmp_tag_free", "Free")), 1)) : (A(), L("span", kh, X(f(o)("pmp_tag_paid", "Paid")), 1))
                ])
              ], 10, bh))), 128))
            ], 2)) : (A(), L("div", _h, [
              I("span", null, X(f(o)("pmp_no_match", "No models matching criteria")), 1)
            ]))
          ]),
          I("div", Fh, [
            I("div", Lh, [
              r.value ? (A(), L("span", Ih, [
                Tl(X(f(o)("pmp_selected", "Selected")) + ": ", 1),
                I("strong", null, X(r.value), 1)
              ])) : (A(), L("span", Dh, X(f(o)("pmp_none_selected", "No model selected")), 1))
            ]),
            I("div", Ph, [
              j(Ke, {
                label: f(o)("pmp_cancel", "Cancel"),
                title: f(o)("pmp_cancel_tt", "Close without changing the model"),
                onClick: O
              }, null, 8, ["label", "title"]),
              j(Ke, {
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
}), Nh = /* @__PURE__ */ Ae(Rh, [["__scopeId", "data-v-8dfe2da3"]]), Th = { class: "fil-provider-root" }, Eh = { class: "trigger-header" }, Vh = { class: "provider-badge" }, Oh = { class: "provider-title" }, $h = { class: "trigger-model" }, Bh = ["title"], Hh = 3e5, Uh = /* @__PURE__ */ xe({
  __name: "ProviderLoader",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, n = fo(), { t: l } = yt(), i = /* @__PURE__ */ se(!1);
    function o(y, w) {
      return {
        get: () => t.state.nodeState[y] ?? w,
        set: (N) => {
          t.state.nodeState[y] = N;
        }
      };
    }
    const s = Q(() => String(o("provider", "ollama").get()));
    function a(y) {
      o("provider", "ollama").set(y), M();
    }
    const r = Q(() => String(o("model", "(loading...)").get()));
    function c(y) {
      o("model", "(loading...)").set(y), M();
    }
    const u = Q(() => Number(o("temperature", 0.7).get())), d = Q(() => Number(o("max_tokens", 0).get())), h = Q(() => Number(o("rate_limit_ms", 100).get())), g = Q(() => Number(o("max_image_side", 1024).get())), m = t.state, _ = Q(() => n.isLoading(s.value)), k = Q(() => n.probeState[s.value]), x = Q(() => n.cachedAgeLabel(s.value, l));
    let S = null;
    Be(() => t.state.nodeState, () => {
    }, { deep: !0 });
    function M() {
      const y = t.state.node;
      if (!y) return;
      const w = oe(y, "model");
      if (!w) return;
      const N = n.modelsFor(s.value), $ = N.length ? N : ["(no models)"];
      w.options && (w.options.values = $);
    }
    function v(y) {
      a(y.provider), c(y.model);
    }
    return Dn(async () => {
      n.loadDisplayNames();
      const y = n.modelsFor(s.value);
      if (y.length)
        r.value === "(loading...)" && c(y[0] ?? "(no models)"), M(), n.loadModels(s.value);
      else
        try {
          await n.loadModels(s.value);
          const w = n.modelsFor(s.value);
          r.value === "(loading...)" && c(w[0] ?? "(no models)"), M();
        } catch (w) {
          Tt.error(w instanceof Error ? w.message : String(w));
        }
      S = setInterval(() => {
        n.loadModels(s.value, !0);
      }, Hh);
    }), ti(() => {
      S && clearInterval(S);
    }), (y, w) => (A(), L("div", Th, [
      I("button", {
        type: "button",
        class: "picker-trigger-btn",
        onClick: w[0] || (w[0] = (N) => i.value = !0)
      }, [
        I("div", Eh, [
          I("div", Vh, [
            j(f(Et), {
              name: f(po)[s.value],
              size: 16
            }, null, 8, ["name"]),
            I("span", Oh, X(f(Ul)[s.value] ?? s.value), 1)
          ]),
          w[6] || (w[6] = I("span", { class: "open-icon" }, "⚙️ Choose", -1))
        ]),
        I("div", $h, [
          w[7] || (w[7] = I("span", { class: "model-label" }, "🧠 Model:", -1)),
          I("span", {
            class: "model-name",
            title: r.value
          }, X(r.value), 9, Bh)
        ])
      ]),
      _.value ? (A(), Se(f(Cl), {
        key: 0,
        text: f(l)("prov_loading_models", "Loading models…")
      }, null, 8, ["text"])) : k.value && k.value.status && k.value.status !== "available" ? (A(), Se(f(Cl), {
        key: 1,
        err: !0,
        text: k.value.message || k.value.status
      }, null, 8, ["text"])) : x.value ? (A(), Se(f(Cl), {
        key: 2,
        text: `${f(l)("prov_models_updated", "Models updated")}: ${x.value}`
      }, null, 8, ["text"])) : te("", !0),
      j(f(Te), {
        "model-value": u.value,
        min: 0,
        max: 2,
        step: 0.05,
        label: f(l)("lbl_temperature", "🌡️ Temperature"),
        title: f(l)("tt_temperature", "Sampling temperature — higher is more creative, lower is more deterministic."),
        "onUpdate:modelValue": w[1] || (w[1] = (N) => f(m).nodeState.temperature = N)
      }, null, 8, ["model-value", "label", "title"]),
      j(f(Te), {
        "model-value": d.value,
        min: 0,
        max: 65536,
        step: 1,
        label: f(l)("lbl_max_tokens", "🔢 Max tokens"),
        title: f(l)("tt_provider_max_tokens", "Maximum tokens in the response. 0 = provider default (no explicit limit)."),
        "onUpdate:modelValue": w[2] || (w[2] = (N) => f(m).nodeState.max_tokens = N)
      }, null, 8, ["model-value", "label", "title"]),
      j(f(Te), {
        "model-value": h.value,
        min: 0,
        max: 5e3,
        step: 10,
        label: f(l)("lbl_rate_limit", "⏱️ Rate limit"),
        title: f(l)("tt_rate_limit", "Minimum delay between requests to this provider, to avoid rate limiting."),
        "onUpdate:modelValue": w[3] || (w[3] = (N) => f(m).nodeState.rate_limit_ms = N)
      }, null, 8, ["model-value", "label", "title"]),
      j(f(Te), {
        "model-value": g.value,
        min: 128,
        max: 4096,
        step: 64,
        label: f(l)("lbl_max_image_side", "🖼️ Max image side"),
        title: f(l)("tt_max_image_side", "Images are downscaled so their longest side does not exceed this value."),
        "onUpdate:modelValue": w[4] || (w[4] = (N) => f(m).nodeState.max_image_side = N)
      }, null, 8, ["model-value", "label", "title"]),
      j(Nh, {
        open: i.value,
        "onUpdate:open": w[5] || (w[5] = (N) => i.value = N),
        provider: s.value,
        model: r.value,
        onSelect: v
      }, null, 8, ["open", "provider", "model"])
    ]));
  }
}), Gh = /* @__PURE__ */ Ae(Uh, [["__scopeId", "data-v-f8a6b931"]]), Wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
      ],
      optional: [
        {
          name: "width",
          kind: "number",
          label: null,
          default: 0,
          tooltip: null,
          values: null,
          columns: null,
          searchable: null,
          multiline: null,
          min: 0,
          max: 16384,
          step: 8,
          units: null,
          options: null,
          section: "format",
          visible_when: null,
          visible_when_value: null
        },
        {
          name: "height",
          kind: "number",
          label: null,
          default: 0,
          tooltip: null,
          values: null,
          columns: null,
          searchable: null,
          multiline: null,
          min: 0,
          max: 16384,
          step: 8,
          units: null,
          options: null,
          section: "format",
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
}, tg = { class: "fil-style-picker-body" }, ng = { class: "fil-style-modal-footer" }, lg = ["title"], ig = ["value", "placeholder", "readonly", "onInput"], og = { class: "fil-scanner-seed-row" }, sg = ["value", "readonly", "aria-label", "title"], ag = ["title"], rg = ["title"], ug = ["title"], cg = /* @__PURE__ */ xe({
  __name: "OpticScanner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = yt(), l = mo.FiLOpticScanner, i = [
      ...(l == null ? void 0 : l.inputs.required) ?? [],
      ...(l == null ? void 0 : l.inputs.optional) ?? []
    ], o = {
      prompt: ["scn_section_prompt", "📝 Prompt/Text"],
      agent: ["scn_section_agent", "🕵️ Agent"],
      model: ["scn_section_model", "🧠 Model"],
      output: ["scn_section_output", "📤 Output"],
      advanced: ["scn_section_advanced", "🎨 Style"],
      format: ["scn_section_format", "📐 Target format"],
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
      response_format: "tt_response_format",
      width: "tt_width",
      height: "tt_height"
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
      // width/height deliberately have none: ComfyUI's canvas font has no emoji
      // glyph for ↔️/↕️ and draws an empty box instead. The 📐 section header
      // carries the icon for both fields.
    };
    function u(J) {
      if (J.label) return J.label;
      const ne = c[J.name] || "", re = J.name.replace(/_/g, " ").replace(/\b\w/g, (Ie) => Ie.toUpperCase());
      return ne ? `${ne} ${re}` : re;
    }
    const d = ["prompt", "negative_prompt", "custom_style", "width", "height"], h = /* @__PURE__ */ new Set(["prompt", "negative_prompt"]), g = {};
    function m(J, ne) {
      const re = ne;
      g[J] = (re == null ? void 0 : re.$el) instanceof HTMLElement ? re.$el : re;
    }
    function _(J) {
      return d.includes(J);
    }
    function k(J) {
      return h.has(J);
    }
    const x = /* @__PURE__ */ se({});
    function S(J) {
      return !!x.value[J];
    }
    function M(J) {
      return S(J.name) ? n("scn_field_linked_tt", "Driven by the connected input — disconnect it to type here.") : r(J);
    }
    function v() {
      const J = t.state.node;
      if (!J) return;
      Dd(J, d.map((re) => ({ name: re, el: g[re] })));
      const ne = Pd(J, d);
      d.some((re) => ne[re] !== !!x.value[re]) && (x.value = ne);
    }
    let y = 0;
    Dn(() => {
      v(), y = window.setInterval(v, 300);
    }), ul(() => {
      y && window.clearInterval(y);
    });
    const w = /* @__PURE__ */ se(!1), N = /* @__PURE__ */ se("photo_style");
    function $(J) {
      return !J || J === "None" ? [] : J.split("|").map((re) => re.trim()).filter((re) => re && re !== "None").map((re) => {
        const Ie = re.indexOf("/");
        return (Ie === -1 ? re : re.slice(Ie + 1)).replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}\s]+/gu, "").trim();
      });
    }
    const T = Q(() => {
      const J = [], ne = $(String(D("photo_style", "None"))), re = $(String(D("nsfw_photo_style", "None"))), Ie = $(String(D("art_style", "None"))), p = $(String(D("nsfw_art_style", "None")));
      for (const b of ne) J.push(`📷 ${b}`);
      for (const b of re) J.push(`🔞 ${b}`);
      for (const b of Ie) J.push(`🎨 ${b}`);
      for (const b of p) J.push(`🔞 ${b}`);
      return J.length === 0 ? n("scn_style_button_none", "🎨 Style: None") : J.join(" | ");
    }), E = Q(() => {
      const J = $(String(D("photo_style", "None"))), ne = $(String(D("nsfw_photo_style", "None"))), re = $(String(D("art_style", "None"))), Ie = $(String(D("nsfw_art_style", "None")));
      return J.length + ne.length + re.length + Ie.length;
    }), K = [
      { id: "photo_style", icon: "📷", labelKey: "scn_style_photo_label", fallback: "Photo" },
      { id: "nsfw_photo_style", icon: "🔞", labelKey: "scn_style_nsfw_photo_label", fallback: "NSFW Photo" },
      { id: "art_style", icon: "🎨", labelKey: "scn_style_art_label", fallback: "Art" },
      { id: "nsfw_art_style", icon: "🔞", labelKey: "scn_style_nsfw_art_label", fallback: "NSFW Art" }
    ];
    function C(J) {
      return String(D(J, "None") || "None");
    }
    function V(J, ne) {
      F(J, ne);
    }
    function H(J) {
      const ne = i.find((re) => re.name === J);
      return (ne == null ? void 0 : ne.values) || [];
    }
    function R() {
      F("photo_style", "None"), F("nsfw_photo_style", "None"), F("art_style", "None"), F("nsfw_art_style", "None");
    }
    const O = Q(() => {
      var ne;
      const J = {};
      for (const re of i) (J[ne = re.section || "_"] ?? (J[ne] = [])).push(re);
      return J;
    });
    function D(J, ne = "") {
      return t.state.nodeState[J] ?? t.state.initialValues[J] ?? ne;
    }
    function F(J, ne) {
      t.state.nodeState[J] = ne;
    }
    const G = /* @__PURE__ */ new Set(["agent", "output", "advanced"]);
    function pe(J) {
      const ne = t.state.ui[`collapsed_${J}`];
      return ne === void 0 ? G.has(J) : !!ne;
    }
    function Le(J, ne) {
      t.state.ui[`collapsed_${J}`] = ne;
    }
    Be(() => t.state.nodeState, () => {
    }, { deep: !0 });
    const ke = Q({
      get: () => t.state.nodeState.seed_mode ?? "random",
      set: (J) => {
        t.state.nodeState.seed_mode = J;
      }
    }), Jt = Q({
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
    }), ri = Q(() => ke.value === "fixed" ? `${Jt.value}` : "random");
    Be(ke, (J) => {
      const ne = t.state.node, re = ne ? oe(ne, "control_after_generate") : null;
      re && (re.value = J === "fixed" ? "fixed" : "randomize");
    }, { immediate: !0 });
    function ui() {
      ke.value = "random";
    }
    function Qt() {
      const J = t.state.node, ne = J ? oe(J, "seed") : null, re = ne && Number.isFinite(Number(ne.value)) ? Number(ne.value) : t.state.lastRunSeed;
      if (re == null || !Number.isFinite(re)) {
        Tt.warning(n("sd_no_last_seed", "No last-run seed recorded yet"));
        return;
      }
      Jt.value = re, ke.value = "fixed";
    }
    function fn() {
      const J = Math.floor(Math.random() * 1e9) & 2147483647;
      Jt.value = J, ke.value = "fixed";
    }
    return (J, ne) => (A(), L("div", jh, [
      (A(!0), L(ce, null, De(O.value, (re, Ie) => (A(), L(ce, { key: Ie }, [
        Ie !== "styles" ? (A(), L("div", {
          key: 0,
          class: me(["fil-section-block", { "is-growable": Ie === "prompt" }])
        }, [
          Ie !== "_" && Ie !== "prompt" ? (A(), Se(f(nt), {
            key: 0,
            title: s(String(Ie)),
            "model-value": pe(String(Ie)),
            "onUpdate:modelValue": (p) => Le(String(Ie), p)
          }, null, 8, ["title", "model-value", "onUpdate:modelValue"])) : te("", !0),
          (A(!0), L(ce, null, De(re, (p) => (A(), L(ce, {
            key: p.name
          }, [
            p.name === "response_format" ? (A(), L("div", zh, [
              I("div", Kh, [
                I("button", {
                  class: me(["fil-style-picker-btn", { "has-styles": E.value > 0 }]),
                  onClick: ne[0] || (ne[0] = (b) => w.value = !0)
                }, X(T.value), 3)
              ]),
              I("div", qh, [
                j(f(Ke), {
                  variant: "standard",
                  label: "🧹 Clear Style",
                  onClick: R,
                  style: { flex: "1" }
                })
              ]),
              j(f(Mn), {
                open: w.value,
                title: f(n)("scn_unified_style_title", "🎨 Style Selection"),
                width: "680px",
                "onUpdate:open": ne[2] || (ne[2] = (b) => w.value = b)
              }, {
                default: Kt(() => [
                  I("div", Xh, [
                    I("div", Yh, [
                      (A(), L(ce, null, De(K, (b) => I("button", {
                        key: b.id,
                        type: "button",
                        class: me(["fil-style-tab-btn", { active: N.value === b.id, "has-value": C(b.id) !== "None" }]),
                        onClick: (P) => N.value = b.id
                      }, [
                        I("span", Qh, X(b.icon), 1),
                        I("span", Zh, X(f(n)(b.labelKey, b.fallback)), 1),
                        C(b.id) !== "None" ? (A(), L("span", eg, "✓")) : te("", !0)
                      ], 10, Jh)), 64))
                    ]),
                    I("div", tg, [
                      j(f(Al), {
                        styles: H(N.value),
                        "model-value": C(N.value),
                        multi: !0,
                        onSelect: ne[1] || (ne[1] = (b) => V(N.value, b))
                      }, null, 8, ["styles", "model-value"])
                    ]),
                    I("div", ng, [
                      I("button", {
                        type: "button",
                        class: "fil-clear-styles-btn",
                        onClick: R
                      }, X(f(n)("scn_clear_all_styles", "🗑️ Clear all styles")), 1)
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["open", "title"])
            ])) : te("", !0),
            ot(I("div", {
              class: me(["fil-w-row", { "is-growable": k(p.name), "is-linked": _(p.name) && S(p.name) }]),
              title: _(p.name) ? M(p) : r(p)
            }, [
              p.name === "prompt" || p.name === "negative_prompt" || p.name === "custom_style" ? (A(), L("textarea", {
                key: 0,
                ref_for: !0,
                ref: (b) => m(p.name, b),
                value: String(D(p.name, "")),
                class: me(["fil-scanner-textarea", { "is-linked": S(p.name) }]),
                placeholder: S(p.name) ? f(n)("scn_field_linked", "🔗 Text comes from the connected node") : u(p),
                readonly: S(p.name),
                rows: "2",
                onInput: (b) => F(p.name, b.target.value)
              }, null, 42, ig)) : p.kind === "chip_grid" ? (A(), Se(f(bs), {
                key: 1,
                options: p.values || [],
                "model-value": String(D(p.name, "")),
                columns: p.columns ?? 3,
                "onUpdate:modelValue": (b) => F(p.name, b)
              }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"])) : p.kind === "chip_list" ? (A(), Se(f(kp), {
                key: 2,
                options: p.values || [],
                "model-value": D(p.name, null),
                searchable: p.searchable ?? !0,
                "onUpdate:modelValue": (b) => F(p.name, b)
              }, null, 8, ["options", "model-value", "searchable", "onUpdate:modelValue"])) : p.kind === "segmented" ? (A(), Se(f(_t), {
                key: 3,
                options: p.options || [],
                "model-value": String(D(p.name, "")),
                label: u(p),
                "onUpdate:modelValue": (b) => F(p.name, b)
              }, null, 8, ["options", "model-value", "label", "onUpdate:modelValue"])) : p.name === "width" || p.name === "height" ? (A(), Se(f(zt), {
                key: 4,
                ref_for: !0,
                ref: (b) => m(p.name, b),
                label: u(p),
                "model-value": Number(D(p.name, 0)),
                min: p.min || 0,
                max: p.max || 16384,
                step: p.step || 8,
                disabled: S(p.name),
                "onUpdate:modelValue": (b) => F(p.name, b),
                class: me({ "is-linked": S(p.name) })
              }, null, 8, ["label", "model-value", "min", "max", "step", "disabled", "onUpdate:modelValue", "class"])) : (A(), Se(f(bs), {
                key: 5,
                options: p.values || [],
                "model-value": String(D(p.name, "")),
                columns: p.columns ?? 3,
                "onUpdate:modelValue": (b) => F(p.name, b)
              }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"]))
            ], 10, lg), [
              [vc, Ie === "_" || Ie === "prompt" || !pe(String(Ie))]
            ])
          ], 64))), 128))
        ], 2)) : te("", !0)
      ], 64))), 128)),
      I("div", og, [
        I("input", {
          value: ri.value,
          type: "text",
          class: me(["fil-scanner-seed-field", { "is-random": ke.value === "random" }]),
          readonly: ke.value === "random",
          "aria-label": f(n)("sd_aria_seed_value", "Seed value"),
          title: ke.value === "fixed" ? f(n)("scn_seed_locked", "Locked seed") : f(n)("scn_seed_auto_random", "Auto-random — a new seed is generated each run"),
          onInput: ne[3] || (ne[3] = (re) => Jt.value = Number(re.target.value) || 0)
        }, null, 42, sg),
        I("button", {
          type: "button",
          class: me(["fil-scanner-seed-pill", { active: ke.value === "random" }]),
          title: f(n)("scn_seed_mode_tt", "Random generates a new seed each run."),
          onClick: ui
        }, X(f(n)("scn_seed_random", "Random")), 11, ag),
        I("button", {
          type: "button",
          class: "fil-scanner-seed-pill",
          title: t.state.lastRunSeed != null ? `${f(n)("scn_seed_use_last_prefix", "Reuse the last run's seed:")} ${t.state.lastRunSeed}` : f(n)("scn_seed_use_last_tt", "Reuse the seed from the last executed run."),
          onClick: Qt
        }, X(f(n)("scn_seed_use_last", "Use last")), 9, rg),
        I("button", {
          type: "button",
          class: "fil-scanner-seed-pill fil-scanner-seed-pill-accent",
          title: f(n)("scn_seed_new_fixed_tt", "Generate a new random fixed seed."),
          onClick: fn
        }, X(f(n)("scn_seed_new_fixed", "New fixed")), 9, ug)
      ])
    ]));
  }
}), dg = /* @__PURE__ */ Ae(cg, [["__scopeId", "data-v-93b777e9"]]), fg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dg
}, Symbol.toStringTag, { value: "Module" })), pg = { class: "fil-cleaner-root" }, mg = /* @__PURE__ */ xe({
  __name: "NeuroCleaner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = yt(), l = Q(() => [
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
    return (s, a) => (A(), L("div", pg, [
      (A(!0), L(ce, null, De(l.value, (r) => (A(), Se(f(yn), {
        key: r.name,
        "model-value": i(r.name, r.defaultOn) ? "ON" : "OFF",
        label: r.label,
        "onUpdate:modelValue": (c) => o(r.name, c === "ON")
      }, null, 8, ["model-value", "label", "onUpdate:modelValue"]))), 128))
    ]));
  }
}), hg = /* @__PURE__ */ Ae(mg, [["__scopeId", "data-v-3d68b764"]]), gg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hg
}, Symbol.toStringTag, { value: "Module" })), _g = { class: "fil-up-root" }, bg = { class: "fil-up-row fil-up-row-overlap" }, vg = ["title"], yg = ["title"], wg = { class: "fil-up-row" }, Sg = ["title"], xg = ["title"], Cg = /* @__PURE__ */ xe({
  __name: "UpscaleTileCalc",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = yt(), l = ["Low VRAM", "Balanced", "High VRAM", "Max Quality", "Ultra Quality"], i = {
      "Low VRAM": "🪫 Low VRAM",
      Balanced: "⚖️ Balanced",
      "High VRAM": "🔋 High VRAM",
      "Max Quality": "💎 Max Quality",
      "Ultra Quality": "👑 Ultra Quality"
    };
    function o(M, v) {
      return Q({
        get: () => Number(t.state.nodeState[M] ?? t.state.initialValues[M] ?? v) || v,
        set: (y) => {
          t.state.nodeState[M] = y;
        }
      });
    }
    function s(M, v) {
      return Q({
        get: () => t.state.nodeState[M] ?? t.state.initialValues[M] ?? v ? "ON" : "OFF",
        set: (y) => {
          t.state.nodeState[M] = y === "ON";
        }
      });
    }
    const a = o("upscale_factor", 2), r = o("tile_size", 1024), c = o("tile_overlap", 64), u = o("manual_tile_cols", 0), d = o("manual_tile_rows", 0), h = s("auto_overlap", !1), g = s("auto_mode", !1), m = s("non_square_tiles", !1), _ = s("auto_fix_thin_edges", !1), k = Q({
      get: () => String(t.state.nodeState.auto_profile ?? t.state.initialValues.auto_profile ?? "Balanced"),
      set: (M) => {
        t.state.nodeState.auto_profile = M;
      }
    });
    function x(M) {
      return !!t.state.ui[`collapsed_${M}`];
    }
    function S(M, v) {
      t.state.ui[`collapsed_${M}`] = v;
    }
    return Be(() => t.state.nodeState, () => {
    }, { deep: !0 }), (M, v) => (A(), L("div", _g, [
      j(f(Te), {
        "model-value": f(a),
        min: 0.1,
        max: 8,
        step: 0.25,
        label: f(n)("lbl_upscale_factor", "🔍 Upscale factor"),
        title: f(n)("utc_factor", "Upscale multiplier."),
        "onUpdate:modelValue": v[0] || (v[0] = (y) => a.value = y)
      }, null, 8, ["model-value", "label", "title"]),
      j(f(nt), {
        title: f(n)("utc_section_auto", "⚙️ Auto / advanced"),
        "model-value": x("auto"),
        "onUpdate:modelValue": v[1] || (v[1] = (y) => S("auto", y))
      }, null, 8, ["title", "model-value"]),
      x("auto") ? te("", !0) : (A(), L(ce, { key: 0 }, [
        j(f(yn), {
          "model-value": f(g),
          label: f(n)("lbl_full_auto", "🤖 Full auto"),
          title: f(n)("utc_auto_mode", "Pick tile size/overlap automatically from the selected VRAM profile."),
          "onUpdate:modelValue": v[2] || (v[2] = (y) => g.value = y)
        }, null, 8, ["model-value", "label", "title"]),
        f(g) === "ON" ? (A(), Se(f(_t), {
          key: 0,
          options: [...l],
          "option-labels": i,
          "model-value": k.value,
          label: f(n)("lbl_auto_profile", "🎚️ Auto profile"),
          title: f(n)("utc_auto_profile", "VRAM/quality profile used when Full Auto is on."),
          "onUpdate:modelValue": v[3] || (v[3] = (y) => k.value = y)
        }, null, 8, ["options", "model-value", "label", "title"])) : te("", !0),
        f(g) === "OFF" ? (A(), L(ce, { key: 1 }, [
          I("div", bg, [
            I("label", {
              class: "fil-w-label",
              title: f(n)("utc_tile_size", "Base tile size.")
            }, X(f(n)("lbl_tile_size", "🔲 Tile size")), 9, vg),
            j(f(zt), {
              modelValue: f(r),
              "onUpdate:modelValue": v[4] || (v[4] = (y) => /* @__PURE__ */ fe(r) ? r.value = y : null),
              min: 64,
              max: 2048,
              step: 64
            }, null, 8, ["modelValue"]),
            I("label", {
              class: "fil-w-label",
              title: f(n)("utc_overlap", "Tile overlap.")
            }, X(f(n)("lbl_overlap", "🧵 Overlap")), 9, yg),
            j(f(zt), {
              modelValue: f(c),
              "onUpdate:modelValue": v[5] || (v[5] = (y) => /* @__PURE__ */ fe(c) ? c.value = y : null),
              min: 0,
              max: 512,
              step: 8,
              disabled: f(h) === "ON"
            }, null, 8, ["modelValue", "disabled"]),
            j(f(yn), {
              bare: "",
              "model-value": f(h),
              label: f(n)("lbl_auto_overlap", "🧵 Auto"),
              title: f(n)("utc_auto_overlap", "Derive overlap automatically from tile size (~12.5%) instead of the fixed value above."),
              "onUpdate:modelValue": v[6] || (v[6] = (y) => h.value = y)
            }, null, 8, ["model-value", "label", "title"])
          ]),
          I("div", wg, [
            I("label", {
              class: "fil-w-label",
              title: f(n)("utc_manual_cols", "Force this many tile columns. 0 = compute from tile size.")
            }, X(f(n)("lbl_manual_cols", "↔️ Cols")), 9, Sg),
            j(f(zt), {
              modelValue: f(u),
              "onUpdate:modelValue": v[7] || (v[7] = (y) => /* @__PURE__ */ fe(u) ? u.value = y : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"]),
            I("label", {
              class: "fil-w-label",
              title: f(n)("utc_manual_rows", "Force this many tile rows. 0 = compute from tile size.")
            }, X(f(n)("lbl_manual_rows", "↕️ Rows")), 9, xg),
            j(f(zt), {
              modelValue: f(d),
              "onUpdate:modelValue": v[8] || (v[8] = (y) => /* @__PURE__ */ fe(d) ? d.value = y : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"])
          ]),
          j(f(yn), {
            "model-value": f(_),
            label: f(n)("lbl_auto_fix_edges", "🩹 Auto-fix thin edges"),
            title: f(n)("utc_auto_fix_edges", "Shrink tile_size to the next standard size instead of just warning when the grid would leave a thin edge tile."),
            "onUpdate:modelValue": v[9] || (v[9] = (y) => _.value = y)
          }, null, 8, ["model-value", "label", "title"])
        ], 64)) : te("", !0)
      ], 64)),
      j(f(yn), {
        "model-value": f(m),
        label: f(n)("lbl_non_square", "📐 Non-square tiles"),
        title: f(n)("utc_non_square", "Allow rectangular tiles instead of forcing square ones."),
        "onUpdate:modelValue": v[10] || (v[10] = (y) => m.value = y)
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), Ag = /* @__PURE__ */ Ae(Cg, [["__scopeId", "data-v-57658737"]]), nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ag
}, Symbol.toStringTag, { value: "Module" })), Mg = { class: "fil-hrf-root" }, kg = {
  key: 2,
  class: "fil-hrf-seed-row"
}, Fg = ["value", "readonly", "aria-label", "title"], Lg = ["title"], Ig = ["title"], Dg = ["title"], Pg = /* @__PURE__ */ xe({
  __name: "HiResFix",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = yt();
    function l(D, F) {
      return Q({
        get: () => Number(t.state.nodeState[D] ?? t.state.initialValues[D] ?? F) || F,
        set: (G) => {
          t.state.nodeState[D] = G;
        }
      });
    }
    function i(D, F) {
      return Q({
        get: () => String(t.state.nodeState[D] ?? t.state.initialValues[D] ?? F),
        set: (G) => {
          t.state.nodeState[D] = G;
        }
      });
    }
    function o(D, F) {
      return Q({
        get: () => t.state.nodeState[D] ?? t.state.initialValues[D] ?? F ? "ON" : "OFF",
        set: (G) => {
          t.state.nodeState[D] = G === "ON";
        }
      });
    }
    function s(D, F) {
      var ke;
      const G = t.state.node, pe = G ? oe(G, D) : null, Le = (ke = pe == null ? void 0 : pe.options) == null ? void 0 : ke.values;
      return Array.isArray(Le) && Le.length ? Le : F;
    }
    const a = i("upscale_type", "latent"), r = i("hires_ckpt_name", "(use same)"), c = i("latent_upscaler", "nearest-exact"), u = i("pixel_upscaler", ""), d = l("upscale_by", 1.25), h = o("use_same_seed", !0), g = l("denoise", 0.56), m = l("hires_steps", 12), _ = l("iterations", 1), k = o("use_controlnet", !1), x = i("control_net_name", ""), S = l("strength", 1), M = i("preprocessor", "none"), v = Q(() => s("hires_ckpt_name", ["(use same)"])), y = ["nearest-exact", "bilinear", "area", "bicubic", "bislerp"], w = Q(() => s("pixel_upscaler", ["(none)"])), N = Q(() => s("control_net_name", ["(none)"])), $ = Q(() => s("preprocessor", ["none", "canny"])), T = Q(() => a.value === "latent"), E = Q(() => a.value === "pixel" || a.value === "both"), K = Q({
      get: () => t.state.nodeState.seed_mode ?? "random",
      set: (D) => {
        t.state.nodeState.seed_mode = D;
      }
    }), C = Q({
      get: () => Number(t.state.nodeState.seed ?? 0) || 0,
      // Write the native seed widget directly, not just nodeState: the
      // createSyncedNodeState mirror doesn't reach the seed widget (its value is
      // a prototype accessor tied to control_after_generate's linked-widget
      // machinery, unlike the plain numeric widgets), so a fixed seed set only
      // via nodeState never reaches the queued prompt. Direct assignment sticks.
      set: (D) => {
        t.state.nodeState.seed = D;
        const F = t.state.node ? oe(t.state.node, "seed") : null;
        F && (F.value = D);
      }
    }), V = Q(() => K.value === "fixed" ? `${C.value}` : "random");
    Be([h, K], ([D, F]) => {
      const G = t.state.node, pe = G ? oe(G, "control_after_generate") : null;
      pe && (pe.value = D === "ON" || F === "fixed" ? "fixed" : "randomize");
    }, { immediate: !0 });
    function H() {
      K.value = "random";
    }
    function R() {
      const D = t.state.node, F = D ? oe(D, "seed") : null, G = F && Number.isFinite(Number(F.value)) ? Number(F.value) : t.state.lastRunSeed;
      if (G == null || !Number.isFinite(G)) {
        Tt.warning(n("sd_no_last_seed", "No last-run seed recorded yet"));
        return;
      }
      C.value = G, K.value = "fixed";
    }
    function O() {
      const D = Math.floor(Math.random() * 1e9) & 2147483647;
      C.value = D, K.value = "fixed";
    }
    return (D, F) => (A(), L("div", Mg, [
      j(f(_t), {
        options: ["latent", "pixel", "both"],
        "option-labels": { latent: "🌀 latent", pixel: "🖼️ pixel", both: "🔀 both" },
        "model-value": f(a),
        label: f(n)("lbl_upscale_type", "⬆️ Upscale type"),
        title: f(n)("hrf_upscale_type", "Upscale in latent space, pixel space, or both."),
        "onUpdate:modelValue": F[0] || (F[0] = (G) => a.value = G)
      }, null, 8, ["model-value", "label", "title"]),
      T.value ? (A(), Se(f(bl), {
        key: 0,
        options: y,
        "model-value": f(c),
        label: f(n)("lbl_latent_up", "🌀 Latent upscaler"),
        title: f(n)("hrf_latent_up", "Latent upscale method."),
        "onUpdate:modelValue": F[1] || (F[1] = (G) => c.value = G)
      }, null, 8, ["model-value", "label", "title"])) : te("", !0),
      E.value ? (A(), Se(f(bl), {
        key: 1,
        options: w.value,
        "model-value": f(u),
        label: f(n)("lbl_pixel_up", "🖼️ Pixel upscaler"),
        title: f(n)("hrf_pixel_up", "Pixel upscale model (from upscale_models)."),
        "onUpdate:modelValue": F[2] || (F[2] = (G) => u.value = G)
      }, null, 8, ["options", "model-value", "label", "title"])) : te("", !0),
      j(f(bl), {
        options: v.value,
        "model-value": f(r),
        label: f(n)("lbl_hires_ckpt", "📦 Hires checkpoint"),
        title: f(n)("hrf_ckpt", "Checkpoint for the hires pass. (use same) reuses the base model."),
        "onUpdate:modelValue": F[3] || (F[3] = (G) => r.value = G)
      }, null, 8, ["options", "model-value", "label", "title"]),
      j(f(Te), {
        "model-value": f(d),
        min: 0.01,
        max: 8,
        step: 0.05,
        label: f(n)("lbl_upscale_by", "🔍 Upscale by"),
        title: f(n)("hrf_upscale_by", "Upscale multiplier."),
        "onUpdate:modelValue": F[4] || (F[4] = (G) => d.value = G)
      }, null, 8, ["model-value", "label", "title"]),
      j(f(Te), {
        "model-value": f(g),
        min: 0,
        max: 1,
        step: 0.01,
        label: f(n)("lbl_hrf_denoise", "💧 Denoise"),
        title: f(n)("hrf_denoise", "Denoise strength for the hires re-sample."),
        "onUpdate:modelValue": F[5] || (F[5] = (G) => g.value = G)
      }, null, 8, ["model-value", "label", "title"]),
      j(f(zt), {
        modelValue: f(m),
        "onUpdate:modelValue": F[6] || (F[6] = (G) => /* @__PURE__ */ fe(m) ? m.value = G : null),
        min: 1,
        max: 1e4,
        step: 1,
        label: f(n)("lbl_hires_steps", "🪜 Hires steps"),
        title: f(n)("hrf_steps", "Steps for the hires re-sample.")
      }, null, 8, ["modelValue", "label", "title"]),
      j(f(zt), {
        modelValue: f(_),
        "onUpdate:modelValue": F[7] || (F[7] = (G) => /* @__PURE__ */ fe(_) ? _.value = G : null),
        min: 0,
        max: 5,
        step: 1,
        label: f(n)("lbl_iterations", "🔁 Iterations"),
        title: f(n)("hrf_iterations", "How many upscale+resample passes to run.")
      }, null, 8, ["modelValue", "label", "title"]),
      j(f(_t), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "♻️ same seed", OFF: "🎲 own" },
        "model-value": f(h),
        label: f(n)("lbl_use_same_seed", "🌱 Seed source"),
        title: f(n)("hrf_same_seed", "Reuse the samplers seed for the hires pass."),
        "onUpdate:modelValue": F[8] || (F[8] = (G) => h.value = G)
      }, null, 8, ["model-value", "label", "title"]),
      f(h) === "OFF" ? (A(), L("div", kg, [
        I("input", {
          value: V.value,
          type: "text",
          class: me(["fil-hrf-seed-field", { "is-random": K.value === "random" }]),
          readonly: K.value === "random",
          "aria-label": f(n)("hrf_aria_seed_value", "Hires seed value"),
          title: K.value === "fixed" ? f(n)("hrf_seed_locked", "Locked hires seed") : f(n)("hrf_seed_auto_random", "Auto-random — a new hires seed is generated each run"),
          onInput: F[9] || (F[9] = (G) => C.value = Number(G.target.value) || 0)
        }, null, 42, Fg),
        I("button", {
          type: "button",
          class: me(["fil-hrf-seed-pill", { active: K.value === "random" }]),
          title: f(n)("hrf_seed_mode_tt", "Random generates a new hires seed each run."),
          onClick: H
        }, X(f(n)("hrf_seed_random", "Random")), 11, Lg),
        I("button", {
          type: "button",
          class: "fil-hrf-seed-pill",
          title: t.state.lastRunSeed != null ? `${f(n)("hrf_seed_use_last_prefix", "Reuse the last run's hires seed:")} ${t.state.lastRunSeed}` : f(n)("hrf_seed_use_last_tt", "Reuse the hires seed from the last executed run."),
          onClick: R
        }, X(f(n)("hrf_seed_use_last", "Use last")), 9, Ig),
        I("button", {
          type: "button",
          class: "fil-hrf-seed-pill fil-hrf-seed-pill-accent",
          title: f(n)("hrf_seed_new_fixed_tt", "Generate a new random fixed hires seed."),
          onClick: O
        }, X(f(n)("hrf_seed_new_fixed", "New fixed")), 9, Dg)
      ])) : te("", !0),
      j(f(_t), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "🕹️ ON", OFF: "OFF" },
        "model-value": f(k),
        label: f(n)("lbl_use_cn", "🕹️ Use ControlNet"),
        title: f(n)("hrf_use_cn", "Guide the hires pass with a ControlNet. Tile ControlNets work without a preprocessor."),
        "onUpdate:modelValue": F[10] || (F[10] = (G) => k.value = G)
      }, null, 8, ["model-value", "label", "title"]),
      f(k) === "ON" ? (A(), L(ce, { key: 3 }, [
        j(f(bl), {
          options: N.value,
          "model-value": f(x),
          label: f(n)("lbl_cn_name", "🧩 ControlNet model"),
          title: f(n)("hrf_cn_name", "ControlNet model to apply."),
          "onUpdate:modelValue": F[11] || (F[11] = (G) => x.value = G)
        }, null, 8, ["options", "model-value", "label", "title"]),
        j(f(Te), {
          "model-value": f(S),
          min: 0,
          max: 10,
          step: 0.01,
          label: f(n)("lbl_cn_strength", "💪 Strength"),
          title: f(n)("hrf_cn_strength", "ControlNet strength."),
          "onUpdate:modelValue": F[12] || (F[12] = (G) => S.value = G)
        }, null, 8, ["model-value", "label", "title"]),
        j(f(_t), {
          options: $.value,
          "option-labels": { none: "🚫 none", canny: "🪞 canny" },
          "model-value": f(M),
          label: f(n)("lbl_cn_preproc", "🧪 Preprocessor"),
          title: f(n)("hrf_cn_preproc", "Preprocess the ControlNet hint image. 'none' feeds the raw upscaled image (right for tile ControlNets)."),
          "onUpdate:modelValue": F[13] || (F[13] = (G) => M.value = G)
        }, null, 8, ["options", "model-value", "label", "title"])
      ], 64)) : te("", !0)
    ]));
  }
}), Rg = /* @__PURE__ */ Ae(Pg, [["__scopeId", "data-v-2a443f87"]]), Ng = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rg
}, Symbol.toStringTag, { value: "Module" })), Tg = { class: "fil-style-mixer-root" }, Eg = /* @__PURE__ */ xe({
  __name: "StyleMixer",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = yt(), l = mo.FiLStyleMixer, i = (l == null ? void 0 : l.inputs.required.find((H) => H.name === "fusion_mode")) || (l == null ? void 0 : l.inputs.optional.find((H) => H.name === "fusion_mode")), o = Q(
      () => {
        var H;
        return (H = i == null ? void 0 : i.values) != null && H.length ? i.values : ["Weighted Stack (Fast)"];
      }
    ), s = Q(() => ({
      "Weighted Stack (Fast)": n("sm_fusion_fast", "⚡ Fast Stack"),
      "Smart LLM Fusion (Gen-Mix)": n("sm_fusion_smart", "🧬 Smart LLM Fusion")
    }));
    function a(H, R) {
      return Q({
        get: () => t.state.nodeState[H] ?? R,
        set: (O) => {
          t.state.nodeState[H] = O;
          const D = t.state.node ? oe(t.state.node, H) : null;
          D && (D.value = O);
        }
      });
    }
    const r = a("fusion_mode", "Weighted Stack (Fast)"), c = a("style_1", "(None)"), u = a("weight_1", 1), d = a("style_2", "(None)"), h = a("weight_2", 0.5), g = a("style_3", "(None)"), m = a("weight_3", 0.3), _ = a("img_weight_1", 0.8), k = a("img_weight_2", 0.6), x = a("img_weight_3", 0.4), S = a("img_weight_4", 0.2), M = /* @__PURE__ */ se(!1), v = /* @__PURE__ */ se(!1), y = /* @__PURE__ */ se(!1), w = Q(() => t.state.ui.slotVersion ?? 0);
    function N(H) {
      w.value;
      const R = t.state.node;
      if (!(R != null && R._allInputs)) return !1;
      const O = R._allInputs.find((D) => D.name === H);
      return !!(O && O.link != null);
    }
    const $ = Q(() => N("image_2")), T = Q(() => N("image_3"));
    function E(H) {
      var O;
      if (!t.state.node) return [];
      const R = oe(t.state.node, H);
      return ((O = R == null ? void 0 : R.options) == null ? void 0 : O.values) || (R == null ? void 0 : R.values) || [];
    }
    function K(H, R) {
      if (!H || H === "(None)" || H === "None") return `${R}: ${n("sm_none", "(None)")}`;
      const O = H.indexOf("/"), D = O === -1 ? H : H.slice(O + 1);
      return `${R}: ${D}`;
    }
    function C(H) {
      return !!t.state.ui[`collapsed_${H}`];
    }
    function V(H, R) {
      t.state.ui[`collapsed_${H}`] = R;
    }
    return (H, R) => (A(), L("div", Tg, [
      j(f(nt), {
        title: f(n)("sm_section_fusion", "🔀 Fusion Mode"),
        "model-value": C("fusion"),
        "onUpdate:modelValue": R[0] || (R[0] = (O) => V("fusion", O))
      }, null, 8, ["title", "model-value"]),
      C("fusion") ? te("", !0) : (A(), Se(f(_t), {
        key: 0,
        modelValue: f(r),
        "onUpdate:modelValue": R[1] || (R[1] = (O) => /* @__PURE__ */ fe(r) ? r.value = O : null),
        options: o.value,
        "option-labels": s.value,
        title: f(n)("sm_fusion_tt", "Fast Stack just weights the descriptions. Smart Fusion asks the Vision LLM to synthesize one prompt.")
      }, null, 8, ["modelValue", "options", "option-labels", "title"])),
      j(f(nt), {
        title: f(n)("sm_section_style_1", "🎨 Primary Style (Style 1)"),
        "model-value": C("style1"),
        "onUpdate:modelValue": R[2] || (R[2] = (O) => V("style1", O))
      }, null, 8, ["title", "model-value"]),
      C("style1") ? te("", !0) : (A(), L(ce, { key: 1 }, [
        j(f(Ke), {
          variant: "full",
          label: K(f(c), f(n)("sm_style_1", "Style 1")),
          onClick: R[3] || (R[3] = (O) => M.value = !0)
        }, null, 8, ["label"]),
        j(f(Te), {
          modelValue: f(u),
          "onUpdate:modelValue": R[4] || (R[4] = (O) => /* @__PURE__ */ fe(u) ? u.value = O : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: f(n)("sm_style_1_weight", "Style 1 Weight")
        }, null, 8, ["modelValue", "label"]),
        j(f(Mn), {
          open: M.value,
          title: f(n)("sm_pick_style_1", "Select Primary Style 1"),
          width: "680px",
          "onUpdate:open": R[6] || (R[6] = (O) => M.value = O)
        }, {
          default: Kt(() => [
            j(f(Al), {
              styles: E("style_1"),
              "model-value": f(c),
              onSelect: R[5] || (R[5] = (O) => {
                c.value = O, M.value = !1;
              })
            }, null, 8, ["styles", "model-value"])
          ]),
          _: 1
        }, 8, ["open", "title"])
      ], 64)),
      j(f(nt), {
        title: f(n)("sm_section_style_2", "🧪 Secondary Style (Style 2)"),
        "model-value": C("style2"),
        "onUpdate:modelValue": R[7] || (R[7] = (O) => V("style2", O))
      }, null, 8, ["title", "model-value"]),
      C("style2") ? te("", !0) : (A(), L(ce, { key: 2 }, [
        j(f(Ke), {
          variant: "full",
          label: K(f(d), f(n)("sm_style_2", "Style 2")),
          onClick: R[8] || (R[8] = (O) => v.value = !0)
        }, null, 8, ["label"]),
        j(f(Te), {
          modelValue: f(h),
          "onUpdate:modelValue": R[9] || (R[9] = (O) => /* @__PURE__ */ fe(h) ? h.value = O : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: f(n)("sm_style_2_weight", "Style 2 Weight")
        }, null, 8, ["modelValue", "label"]),
        j(f(Mn), {
          open: v.value,
          title: f(n)("sm_pick_style_2", "Select Secondary Style 2"),
          width: "680px",
          "onUpdate:open": R[11] || (R[11] = (O) => v.value = O)
        }, {
          default: Kt(() => [
            j(f(Al), {
              styles: E("style_2"),
              "model-value": f(d),
              onSelect: R[10] || (R[10] = (O) => {
                d.value = O, v.value = !1;
              })
            }, null, 8, ["styles", "model-value"])
          ]),
          _: 1
        }, 8, ["open", "title"])
      ], 64)),
      j(f(nt), {
        title: f(n)("sm_section_style_3", "✨ Tertiary Style (Style 3)"),
        "model-value": C("style3"),
        "onUpdate:modelValue": R[12] || (R[12] = (O) => V("style3", O))
      }, null, 8, ["title", "model-value"]),
      C("style3") ? te("", !0) : (A(), L(ce, { key: 3 }, [
        j(f(Ke), {
          variant: "full",
          label: K(f(g), f(n)("sm_style_3", "Style 3")),
          onClick: R[13] || (R[13] = (O) => y.value = !0)
        }, null, 8, ["label"]),
        j(f(Te), {
          modelValue: f(m),
          "onUpdate:modelValue": R[14] || (R[14] = (O) => /* @__PURE__ */ fe(m) ? m.value = O : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: f(n)("sm_style_3_weight", "Style 3 Weight")
        }, null, 8, ["modelValue", "label"]),
        j(f(Mn), {
          open: y.value,
          title: f(n)("sm_pick_style_3", "Select Tertiary Style 3"),
          width: "680px",
          "onUpdate:open": R[16] || (R[16] = (O) => y.value = O)
        }, {
          default: Kt(() => [
            j(f(Al), {
              styles: E("style_3"),
              "model-value": f(g),
              onSelect: R[15] || (R[15] = (O) => {
                g.value = O, y.value = !1;
              })
            }, null, 8, ["styles", "model-value"])
          ]),
          _: 1
        }, 8, ["open", "title"])
      ], 64)),
      j(f(nt), {
        title: f(n)("sm_section_image_1", "🖼️ Image 1 Influence"),
        "model-value": C("image1"),
        "onUpdate:modelValue": R[17] || (R[17] = (O) => V("image1", O))
      }, null, 8, ["title", "model-value"]),
      C("image1") ? te("", !0) : (A(), Se(f(Te), {
        key: 4,
        modelValue: f(_),
        "onUpdate:modelValue": R[18] || (R[18] = (O) => /* @__PURE__ */ fe(_) ? _.value = O : null),
        min: 0,
        max: 1,
        step: 0.05,
        label: f(n)("sm_image_1_weight", "Image 1 Weight")
      }, null, 8, ["modelValue", "label"])),
      j(f(nt), {
        title: f(n)("sm_section_image_2", "🖼️ Image 2 Influence"),
        "model-value": C("image2"),
        "onUpdate:modelValue": R[19] || (R[19] = (O) => V("image2", O))
      }, null, 8, ["title", "model-value"]),
      C("image2") ? te("", !0) : (A(), Se(f(Te), {
        key: 5,
        modelValue: f(k),
        "onUpdate:modelValue": R[20] || (R[20] = (O) => /* @__PURE__ */ fe(k) ? k.value = O : null),
        min: 0,
        max: 1,
        step: 0.05,
        label: f(n)("sm_image_2_weight", "Image 2 Weight")
      }, null, 8, ["modelValue", "label"])),
      $.value ? (A(), L(ce, { key: 6 }, [
        j(f(nt), {
          title: f(n)("sm_section_image_3", "🖼️ Image 3 Influence"),
          "model-value": C("image3"),
          "onUpdate:modelValue": R[21] || (R[21] = (O) => V("image3", O))
        }, null, 8, ["title", "model-value"]),
        C("image3") ? te("", !0) : (A(), Se(f(Te), {
          key: 0,
          modelValue: f(x),
          "onUpdate:modelValue": R[22] || (R[22] = (O) => /* @__PURE__ */ fe(x) ? x.value = O : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: f(n)("sm_image_3_weight", "Image 3 Weight")
        }, null, 8, ["modelValue", "label"]))
      ], 64)) : te("", !0),
      T.value ? (A(), L(ce, { key: 7 }, [
        j(f(nt), {
          title: f(n)("sm_section_image_4", "🖼️ Image 4 Influence"),
          "model-value": C("image4"),
          "onUpdate:modelValue": R[23] || (R[23] = (O) => V("image4", O))
        }, null, 8, ["title", "model-value"]),
        C("image4") ? te("", !0) : (A(), Se(f(Te), {
          key: 0,
          modelValue: f(S),
          "onUpdate:modelValue": R[24] || (R[24] = (O) => /* @__PURE__ */ fe(S) ? S.value = O : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: f(n)("sm_image_4_weight", "Image 4 Weight")
        }, null, 8, ["modelValue", "label"]))
      ], 64)) : te("", !0)
    ]));
  }
}), Vg = /* @__PURE__ */ Ae(Eg, [["__scopeId", "data-v-6e95ae42"]]), Og = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vg
}, Symbol.toStringTag, { value: "Module" })), $g = { class: "fil-color-wizard-root" }, Bg = { class: "fil-cw-presets-block" }, Hg = { class: "fil-cw-presets-title" }, Ug = { class: "fil-cw-presets-grid" }, Gg = ["title"], Wg = ["title"], jg = ["title"], zg = ["title"], Kg = { class: "fil-cw-slider-group" }, qg = /* @__PURE__ */ xe({
  __name: "ColorWizard",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = yt(), l = mo.FiLColorWizard, i = (l == null ? void 0 : l.inputs.required.find((g) => g.name === "method")) || (l == null ? void 0 : l.inputs.optional.find((g) => g.name === "method")), o = Q(
      () => {
        var g;
        return ((g = i == null ? void 0 : i.values) != null && g.length ? i.values : ["Full Auto"]).map((m) => ({ value: m }));
      }
    );
    function s(g, m) {
      return Q({
        get: () => t.state.nodeState[g] ?? m,
        set: (_) => {
          t.state.nodeState[g] = _;
          const k = t.state.node ? oe(t.state.node, g) : null;
          k && (k.value = _);
        }
      });
    }
    const a = s("method", "Full Auto"), r = s("strength", 0.8), c = s("temperature", 0), u = s("tint", 0), d = s("preserve_skin", !1);
    function h(g) {
      g === "warm" ? (a.value = "Full Auto", c.value = 0.35, u.value = 0, r.value = 0.8, d.value = !0) : g === "cool" ? (a.value = "Full Auto", c.value = -0.35, u.value = 0.15, r.value = 0.85, d.value = !1) : g === "skin" ? (a.value = "White Patch", c.value = 0.05, u.value = 0, r.value = 0.75, d.value = !0) : g === "contrast" && (a.value = "LAB Enhance", c.value = 0, u.value = 0, r.value = 0.9, d.value = !1);
    }
    return (g, m) => (A(), L("div", $g, [
      I("div", Bg, [
        I("div", Hg, X(f(n)("cw_presets", "⚡ Quick Presets")), 1),
        I("div", Ug, [
          I("button", {
            type: "button",
            class: "fil-cw-preset-btn warm",
            title: f(n)("cw_preset_warm_tt", "Warm Sunny Tone"),
            onClick: m[0] || (m[0] = (_) => h("warm"))
          }, X(f(n)("cw_preset_warm", "☀️ Warm Sun")), 9, Gg),
          I("button", {
            type: "button",
            class: "fil-cw-preset-btn cool",
            title: f(n)("cw_preset_cool_tt", "Cool Sci-Fi Cyberpunk Tone"),
            onClick: m[1] || (m[1] = (_) => h("cool"))
          }, X(f(n)("cw_preset_cool", "🧊 Cool Sci-Fi")), 9, Wg),
          I("button", {
            type: "button",
            class: "fil-cw-preset-btn skin",
            title: f(n)("cw_preset_skin_tt", "Natural Skin Preservation"),
            onClick: m[2] || (m[2] = (_) => h("skin"))
          }, X(f(n)("cw_preset_skin", "👤 Skin Protect")), 9, jg),
          I("button", {
            type: "button",
            class: "fil-cw-preset-btn contrast",
            title: f(n)("cw_preset_contrast_tt", "Punchy LAB Contrast"),
            onClick: m[3] || (m[3] = (_) => h("contrast"))
          }, X(f(n)("cw_preset_contrast", "⚡ Contrast")), 9, zg)
        ])
      ]),
      j(f(nt), {
        title: f(n)("cw_section_method", "⚙️ Method")
      }, null, 8, ["title"]),
      j(f(Bp), {
        modelValue: f(a),
        "onUpdate:modelValue": m[4] || (m[4] = (_) => /* @__PURE__ */ fe(a) ? a.value = _ : null),
        options: o.value,
        title: f(n)("tt_cw_method", "Correction algorithm.")
      }, null, 8, ["modelValue", "options", "title"]),
      j(f(nt), {
        title: f(n)("cw_section_adjust", "🎛️ Adjustments")
      }, null, 8, ["title"]),
      I("div", Kg, [
        j(f(Te), {
          modelValue: f(r),
          "onUpdate:modelValue": m[5] || (m[5] = (_) => /* @__PURE__ */ fe(r) ? r.value = _ : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: f(n)("cw_strength", "Correction Strength"),
          title: f(n)("tt_cw_strength", "Correction strength (0 = no change).")
        }, null, 8, ["modelValue", "label", "title"]),
        j(f(Te), {
          modelValue: f(c),
          "onUpdate:modelValue": m[6] || (m[6] = (_) => /* @__PURE__ */ fe(c) ? c.value = _ : null),
          min: -1,
          max: 1,
          step: 0.05,
          label: f(n)("cw_temperature", "Temperature (Warm/Cool)"),
          title: f(n)("tt_cw_temperature", "Colour temperature.")
        }, null, 8, ["modelValue", "label", "title"]),
        j(f(Te), {
          modelValue: f(u),
          "onUpdate:modelValue": m[7] || (m[7] = (_) => /* @__PURE__ */ fe(u) ? u.value = _ : null),
          min: -1,
          max: 1,
          step: 0.05,
          label: f(n)("cw_tint", "Tint (Green/Magenta)"),
          title: f(n)("tt_cw_tint", "Colour tint.")
        }, null, 8, ["modelValue", "label", "title"])
      ]),
      j(f(yn), {
        "model-value": f(d) ? "ON" : "OFF",
        label: f(n)("cw_preserve_skin", "🛡️ Preserve Skin Tones"),
        title: f(n)("tt_cw_preserve_skin", "Preserve skin tones."),
        "onUpdate:modelValue": m[8] || (m[8] = (_) => d.value = _ === "ON")
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), Xg = /* @__PURE__ */ Ae(qg, [["__scopeId", "data-v-3228ee08"]]), Yg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
