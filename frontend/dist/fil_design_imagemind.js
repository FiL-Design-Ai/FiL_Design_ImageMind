(function(){try{var s=document.createElement("style");s.textContent=".fil-color-picker[data-v-969386c1]{display:flex;flex-direction:column;gap:8px;padding:8px;width:176px;box-sizing:border-box}.fil-cp-sv[data-v-969386c1]{position:relative;width:100%;height:100px;border-radius:4px;cursor:crosshair;touch-action:none}.fil-cp-sv-white[data-v-969386c1]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to right,#fff,#fff0);border-radius:4px}.fil-cp-sv-black[data-v-969386c1]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to top,#000,#0000);border-radius:4px}.fil-cp-sv-thumb[data-v-969386c1]{position:absolute;width:10px;height:10px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hue[data-v-969386c1]{position:relative;width:100%;height:12px;border-radius:6px;background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red);cursor:pointer;touch-action:none}.fil-cp-hue-thumb[data-v-969386c1]{position:absolute;top:50%;width:12px;height:12px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hex-row[data-v-969386c1]{display:flex;align-items:center;gap:6px}.fil-cp-swatch[data-v-969386c1]{width:22px;height:22px;border-radius:4px;border:1px solid rgba(255,255,255,.25);flex-shrink:0}.fil-cp-hex-input[data-v-969386c1]{flex:1;min-width:0;height:22px;box-sizing:border-box;border-radius:4px;border:1px solid rgba(255,255,255,.2);background:#00000040;color:#f2f2f2;font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:12px;padding:0 6px;outline:none}.fil-cp-hex-input[data-v-969386c1]:focus{border-color:#ffffff80}.fil-cp-presets[data-v-969386c1]{display:grid;grid-template-columns:repeat(5,1fr);gap:4px}.fil-color-swatch[data-v-969386c1]{width:24px;height:24px;border-radius:4px;border:2px solid transparent;background:var(--swatch);cursor:pointer;transition:border-color .08s,transform .08s;outline:none;box-sizing:border-box}.fil-color-swatch[data-v-969386c1]:hover{border-color:#ffffff80;transform:scale(1.15)}.fil-color-swatch.is-active[data-v-969386c1]{border-color:#fff;box-shadow:0 0 0 1px var(--swatch)}.fil-node-shell[data-v-cb614e72]{position:relative;width:100%;box-sizing:border-box;height:100%}.fil-icon[data-v-dfb78d9f]{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;line-height:0}.fil-icon[data-v-dfb78d9f] svg{width:100%;height:100%}.fil-modal-backdrop[data-v-952a8f2d]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000;display:flex;align-items:center;justify-content:center;background:#0000008c;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.fil-modal-panel[data-v-952a8f2d]{width:90%;max-height:80vh;background:var(--fil-panel);border:1px solid var(--fil-border);border-radius:10px;box-shadow:0 20px 60px #00000080;display:flex;flex-direction:column;overflow:hidden}.fil-modal-header[data-v-952a8f2d]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--fil-border)}.fil-modal-title[data-v-952a8f2d]{font-size:14px;font-weight:600;color:var(--fil-text)}.fil-modal-close[data-v-952a8f2d]{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;border:none;background:transparent;color:var(--fil-muted);cursor:pointer;transition:background .08s,color .08s}.fil-modal-close[data-v-952a8f2d]:hover{background:#ffffff14;color:var(--fil-text)}.fil-modal-body[data-v-952a8f2d]{flex:1;overflow-y:auto;padding:16px}.fil-modal-enter-active[data-v-952a8f2d],.fil-modal-leave-active[data-v-952a8f2d]{transition:opacity .15s ease}.fil-modal-enter-from[data-v-952a8f2d],.fil-modal-leave-to[data-v-952a8f2d]{opacity:0}.fil-modal-enter-active .fil-modal-panel[data-v-952a8f2d],.fil-modal-leave-active .fil-modal-panel[data-v-952a8f2d]{transition:transform .15s ease}.fil-modal-enter-from .fil-modal-panel[data-v-952a8f2d],.fil-modal-leave-to .fil-modal-panel[data-v-952a8f2d]{transform:scale(.95) translateY(8px)}.fil-help-title[data-v-bfee41d7]{margin:0 0 12px;font-size:16px;font-weight:700;color:var(--fil-text)}.fil-help-body[data-v-bfee41d7]{margin:0 0 12px;font-size:13px;line-height:1.6;color:var(--fil-muted)}.fil-help-bullet[data-v-bfee41d7]{display:flex;gap:6px;align-items:flex-start;margin-bottom:6px;font-size:13px;color:var(--fil-muted)}.fil-help-bullet>span[data-v-bfee41d7]{flex:1}.fil-help-table[data-v-bfee41d7]{width:100%;border-collapse:collapse;margin-top:8px;font-size:12px}.fil-help-table th[data-v-bfee41d7],.fil-help-table td[data-v-bfee41d7]{text-align:left;padding:6px 10px;border-bottom:1px solid var(--fil-border)}.fil-help-table th[data-v-bfee41d7]{font-weight:600;color:var(--fil-text)}.fil-help-table td[data-v-bfee41d7]{color:var(--fil-muted)}.fil-help-code[data-v-bfee41d7]{background:#0000004d;border-radius:6px;padding:12px;margin-top:10px;overflow-x:auto;font-size:12px;color:var(--fil-muted)}.fil-help-empty[data-v-bfee41d7]{color:var(--fil-muted);font-size:13px}.fil-w-btn[data-v-75e79c80]{box-sizing:border-box;padding:var(--fil-row-pad);border-radius:6px;background:var(--fil-surface-1);border:1px solid var(--fil-border);color:var(--fil-text);font-family:ui-sans-serif,system-ui,sans-serif;font-size:12px;cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;display:inline-flex;align-items:center;justify-content:center;gap:6px}.fil-w-btn[data-v-75e79c80]:hover:not(:disabled){background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink)}.fil-w-btn[data-v-75e79c80]:active{transform:translateY(1px)}.fil-w-btn[data-v-75e79c80]:disabled{opacity:.4;cursor:default}.fil-w-btn-accent[data-v-75e79c80]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink)}.fil-w-btn-danger[data-v-75e79c80]{color:var(--fil-danger)}.fil-w-btn-danger[data-v-75e79c80]:hover:not(:disabled){background:var(--fil-danger);border-color:var(--fil-danger);color:#fff}.fil-w-btn-sm[data-v-75e79c80]{padding:4px 8px;font-size:11px}.fil-w-btn-full[data-v-75e79c80]{width:100%;display:block}.fil-w-btn-icon[data-v-75e79c80]{display:inline-flex;align-items:center;justify-content:center;gap:5px}.fil-w-btn-glyph[data-v-75e79c80] svg{width:14px;height:14px}.fil-w-btn.is-flashing[data-v-75e79c80],.fil-w-btn.is-flashing[data-v-75e79c80]:hover{background:var(--fil-ok);border-color:var(--fil-ok);color:#fff}.fil-w-btn.is-loading[data-v-75e79c80]{cursor:wait}.fil-w-btn[data-v-75e79c80]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-btn-spinner[data-v-75e79c80]{display:inline-block;width:12px;height:12px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:fil-w-spin-75e79c80 .6s linear infinite}@keyframes fil-w-spin-75e79c80{to{transform:rotate(360deg)}}.fil-pm-root[data-v-5198f2ae]{display:flex;flex-direction:column;gap:12px;padding:4px 0}.fil-pm-card[data-v-5198f2ae]{background:var(--fil-surface-1);border:1px solid var(--fil-border);border-radius:8px;padding:12px}.fil-pm-header[data-v-5198f2ae]{display:flex;align-items:center;gap:8px;margin-bottom:10px}.fil-pm-card--collapsed[data-v-5198f2ae]{padding:8px 12px}.fil-pm-card--collapsed .fil-pm-header[data-v-5198f2ae]{margin-bottom:0}.fil-pm-header--clickable[data-v-5198f2ae]{cursor:pointer}.fil-pm-header--clickable:hover .fil-pm-name[data-v-5198f2ae]{color:var(--fil-accent-text)}.fil-pm-chevron[data-v-5198f2ae]{display:inline-flex;align-items:center;color:#fff6;transition:transform .12s ease}.fil-pm-chevron--open[data-v-5198f2ae]{transform:rotate(90deg)}.fil-pm-icon[data-v-5198f2ae]{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px}.fil-pm-name[data-v-5198f2ae]{font-weight:600;font-size:14px;color:var(--fil-text)}.fil-pm-disp[data-v-5198f2ae]{font-size:11px;color:#ffffff80}.fil-pm-status[data-v-5198f2ae]{margin-left:auto;display:inline-flex;align-items:center;gap:5px;font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#fff6;white-space:nowrap}.fil-pm-dot[data-v-5198f2ae]{width:8px;height:8px;border-radius:50%;background:currentColor;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 22%,transparent)}.fil-pm-status--connected[data-v-5198f2ae]{color:var(--fil-ok)}.fil-pm-status--configured[data-v-5198f2ae]{color:var(--fil-accent-text)}.fil-pm-status--off[data-v-5198f2ae]{color:var(--fil-muted)}.fil-pm-fields[data-v-5198f2ae]{display:flex;flex-direction:column;gap:8px;margin-bottom:10px}.fil-pm-field[data-v-5198f2ae]{display:flex;flex-direction:column;gap:3px}.fil-pm-field-label[data-v-5198f2ae]{font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#ffffff80}.fil-pm-input[data-v-5198f2ae]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:6px;padding:7px 8px;color:var(--fil-text);font-family:ui-monospace,monospace;font-size:13px;outline:none;transition:border-color .08s}.fil-pm-input[data-v-5198f2ae]:focus{border-color:var(--fil-accent)}.fil-pm-input.fil-pm-has-val[data-v-5198f2ae]{border-color:var(--fil-border)}.fil-pm-actions[data-v-5198f2ae]{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}.fil-pm-models[data-v-5198f2ae]{display:flex;flex-wrap:wrap;gap:4px}.fil-pm-model-tag[data-v-5198f2ae]{display:inline-flex;align-items:center;gap:3px;background:var(--fil-surface-2);border-radius:4px;padding:2px 6px;font-size:11px;color:#ffffffbf;white-space:nowrap}.fil-pm-vision-badge[data-v-5198f2ae]{font-size:10px;line-height:1}.fil-pm-err[data-v-5198f2ae]{font-size:11px;color:var(--fil-danger);margin-top:4px}.fil-pm-age[data-v-5198f2ae]{font-size:10px;color:#fff6;align-self:center}.fil-w-chips[data-v-23d693d7]{display:grid;gap:5px;width:100%}.fil-w-chip[data-v-23d693d7]{box-sizing:border-box;background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-23d693d7]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text)}.fil-w-chip.active[data-v-23d693d7]{background:var(--fil-panel-alt);color:var(--fil-accent-text);border-color:var(--fil-accent);font-weight:500;box-shadow:0 0 8px color-mix(in srgb,var(--fil-accent) 55%,transparent)}.fil-w-chip.disabled[data-v-23d693d7]{opacity:.5;cursor:default}.fil-w-chip[data-v-23d693d7]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chiplist[data-v-6cab4842]{display:flex;flex-direction:column;gap:5px;width:100%}.fil-w-search[data-v-6cab4842]{box-sizing:border-box;width:100%;padding:5px 8px;background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:5px;color:var(--fil-text);font-family:inherit;font-size:11px;outline:none}.fil-w-search[data-v-6cab4842]:focus{border-color:var(--fil-accent)}.fil-w-search[data-v-6cab4842]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-chip-scroll[data-v-6cab4842]{display:grid;gap:3px;max-height:200px;overflow-y:auto;overflow-x:hidden;padding-right:2px}.fil-w-chip-scroll[data-v-6cab4842]::-webkit-scrollbar{width:5px}.fil-w-chip-scroll[data-v-6cab4842]::-webkit-scrollbar-thumb{background:var(--fil-muted);border-radius:3px}.fil-w-chip-scroll[data-v-6cab4842]::-webkit-scrollbar-track{background:transparent}.fil-w-chip[data-v-6cab4842]{box-sizing:border-box;background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-6cab4842]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text)}.fil-w-chip.active[data-v-6cab4842]{background:var(--fil-accent);color:var(--fil-accent-ink);border-color:var(--fil-accent);font-weight:500}.fil-w-chip.disabled[data-v-6cab4842]{opacity:.5;cursor:default}.fil-w-chip[data-v-6cab4842]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chip-empty[data-v-6cab4842]{padding:8px;text-align:center;color:var(--fil-muted);font-size:11px}.fil-combo[data-v-605297df]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap);width:100%}.fil-combo-label[data-v-605297df]{grid-column:1;font-size:11px;color:var(--fil-muted);font-family:inherit}.fil-combo-trigger[data-v-605297df]{grid-column:2;width:100%;box-sizing:border-box;height:var(--fil-control-h);display:flex;align-items:center;gap:6px;background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:6px;padding:5px 8px;color:var(--fil-text);font-family:inherit;font-size:12px;outline:none;cursor:pointer;text-align:left;-moz-appearance:none;appearance:none;-webkit-appearance:none}.fil-combo-trigger.open[data-v-605297df],.fil-combo-trigger[data-v-605297df]:focus-visible{border-color:var(--fil-accent);outline:2px solid var(--fil-accent);outline-offset:1px}.fil-combo-trigger.disabled[data-v-605297df]{opacity:.5;cursor:default}.fil-combo-trigger-label[data-v-605297df]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-chevron[data-v-605297df]{font-size:9px;color:var(--fil-muted);flex-shrink:0}.fil-combo-badge[data-v-605297df]{flex-shrink:0;font-size:9px;line-height:1;padding:2px 5px;border-radius:999px;background:var(--fil-accent);color:var(--fil-accent-ink);font-weight:600}.fil-combo-panel[data-v-605297df]{position:fixed;z-index:10001;box-sizing:border-box;background:var(--fil-panel);border:1px solid var(--fil-border);border-radius:8px;box-shadow:0 12px 32px #0006;display:flex;flex-direction:column;overflow:hidden;padding:6px}.fil-combo-search[data-v-605297df]{box-sizing:border-box;width:100%;margin-bottom:6px;padding:6px 8px;background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:5px;color:var(--fil-text);font-family:inherit;font-size:12px;outline:none}.fil-combo-search[data-v-605297df]:focus{border-color:var(--fil-accent)}.fil-combo-list[data-v-605297df]{display:flex;flex-direction:column;gap:2px;max-height:240px;overflow-y:auto}.fil-combo-option[data-v-605297df]{display:flex;align-items:center;gap:6px;width:100%;box-sizing:border-box;padding:6px 8px;border-radius:5px;border:none;background:transparent;color:var(--fil-text);font-family:inherit;font-size:12px;text-align:left;cursor:pointer;outline:none}.fil-combo-option.active[data-v-605297df]{background:var(--fil-surface-2)}.fil-combo-option.selected[data-v-605297df]{color:var(--fil-accent-text);font-weight:600}.fil-combo-option-label[data-v-605297df]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-empty[data-v-605297df]{padding:10px;text-align:center;color:var(--fil-muted);font-size:12px}.fil-w-info[data-v-be74f393]{font-size:11px;line-height:1.5;color:var(--fil-muted);text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.fil-w-info[data-ok][data-v-be74f393]{color:var(--fil-ok)}.fil-w-info[data-err][data-v-be74f393]{color:var(--fil-danger)}.fil-w-numfield[data-v-3e158373]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap);width:100%}.fil-w-numfield.no-label[data-v-3e158373]{display:contents}.fil-w-numfield-label[data-v-3e158373]{grid-column:1;font-size:11px;color:var(--fil-muted);font-family:inherit}.fil-w-numfield:not(.no-label) .fil-w-num-wrap[data-v-3e158373]{grid-column:2}.fil-w-num-wrap[data-v-3e158373]{position:relative;width:100%;min-width:0}.fil-w-num[data-v-3e158373]{width:100%;box-sizing:border-box;height:var(--fil-control-h);background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:6px;padding:7px 20px 7px 8px;color:var(--fil-text);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:14px;text-align:left;outline:none;transition:border-color .08s}.fil-w-num[data-v-3e158373]:focus{border-color:var(--fil-accent)}.fil-w-num[data-v-3e158373]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-num[data-v-3e158373]:disabled{opacity:.5}.fil-w-num-step[data-v-3e158373]{position:absolute;top:1px;right:1px;bottom:1px;width:17px;display:flex;flex-direction:column;border-left:1px solid var(--fil-border);overflow:hidden;border-radius:0 5px 5px 0}.fil-w-num-btn[data-v-3e158373]{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;border:none;background:transparent;color:var(--fil-muted);font-size:7px;line-height:1;cursor:pointer;padding:0;transition:color .08s,background .08s}.fil-w-num-btn[data-v-3e158373]:last-child{border-top:1px solid var(--fil-border)}.fil-w-num-btn[data-v-3e158373]:hover:not(:disabled){color:var(--fil-accent);background:var(--fil-surface-2)}.fil-w-num-btn[data-v-3e158373]:disabled{opacity:.3;cursor:default}.fil-w-seedrow[data-v-5802f079]{display:flex;gap:6px;min-width:0}.fil-w-seedrow-field[data-v-5802f079]{flex:1.3;min-width:0;box-sizing:border-box;height:var(--fil-control-h-lg);background:var(--fil-inset);border:1px solid var(--fil-border);border-radius:var(--fil-pill-radius);padding:0 12px;color:var(--fil-text);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:13px;text-align:center;outline:none;transition:border-color .08s}.fil-w-seedrow-field[data-v-5802f079]:focus{border-color:var(--fil-accent)}.fil-w-seedrow-field[data-v-5802f079]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-seedrow-field.is-random[data-v-5802f079]{color:var(--fil-muted);font-style:italic}.fil-w-seedrow-pill[data-v-5802f079]{flex:1;min-width:0;box-sizing:border-box;height:var(--fil-control-h-lg);padding:0 8px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;border-radius:var(--fil-pill-radius);border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-text);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none}.fil-w-seedrow-pill[data-v-5802f079]:hover{background:var(--fil-surface-3)}.fil-w-seedrow-pill[data-v-5802f079]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-seedrow-pill.active[data-v-5802f079]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink)}.fil-w-seedrow-pill.is-accent[data-v-5802f079]{background:color-mix(in srgb,var(--fil-accent) 12%,transparent);border-color:var(--fil-accent);color:var(--fil-text);font-weight:700}.fil-w-seedrow-pill.is-accent[data-v-5802f079]:hover{background:color-mix(in srgb,var(--fil-accent) 24%,transparent)}.fil-w-section[data-v-7c27965b]{box-sizing:border-box;width:100%;padding:var(--fil-row-pad);border:none;border-radius:5px;background:var(--fil-surface-1);color:var(--fil-muted);font-family:inherit;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;cursor:pointer;text-align:left;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s;display:flex;align-items:center;gap:6px}.fil-w-section[data-v-7c27965b]:hover:not(:disabled){background:var(--fil-surface-2);color:var(--fil-text)}.fil-w-section[data-v-7c27965b]:disabled{cursor:default}.fil-w-section[data-v-7c27965b]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-section-arrow[data-v-7c27965b]{display:inline-block;width:8px;font-size:9px;color:var(--fil-accent)}.fil-w-segmented[data-v-80a17629]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap);width:100%}.fil-w-segmented-label[data-v-80a17629]{grid-column:1;font-size:11px;color:var(--fil-muted);font-family:inherit}.fil-w-pill[data-v-80a17629]{grid-column:2;display:flex;gap:0;min-width:0;background:var(--fil-surface-2);border-radius:7px;padding:3px}.fil-w-pill.disabled[data-v-80a17629]{opacity:.5}.fil-w-seg[data-v-80a17629]{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center;padding:6px;border:none;border-radius:5px;background:transparent;font-family:inherit;font-size:12px;color:var(--fil-muted);cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s}.fil-w-seg[data-v-80a17629]:hover:not(.active){color:var(--fil-text)}.fil-w-seg.active[data-v-80a17629]{background:var(--fil-accent);color:var(--fil-accent-ink);font-weight:500}.fil-w-seg[data-v-80a17629]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-select[data-v-f303e789]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap);width:100%}.fil-w-select-label[data-v-f303e789]{grid-column:1;font-size:11px;color:var(--fil-muted);font-family:inherit}.fil-w-select-input[data-v-f303e789]{grid-column:2;width:100%;box-sizing:border-box;height:var(--fil-control-h);background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:6px;padding:5px 8px;color:var(--fil-text);font-family:inherit;font-size:12px;outline:none;cursor:pointer}.fil-w-select-input[data-v-f303e789]:focus{border-color:var(--fil-accent)}.fil-w-select-input[data-v-f303e789]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-select-input[data-v-f303e789]:disabled{opacity:.5;cursor:default}.fil-w-slider[data-v-bcb4fa2a]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap);width:100%}.fil-w-slider-label[data-v-bcb4fa2a]{grid-column:1;font-size:11px;color:var(--fil-muted);font-family:inherit}.fil-w-slider-row[data-v-bcb4fa2a]{grid-column:2;display:flex;align-items:center;gap:6px;min-width:0}.fil-w-slider-range[data-v-bcb4fa2a]{flex:1 1 auto;min-width:0;max-width:220px;accent-color:var(--fil-accent);cursor:pointer}.fil-w-slider-range[data-v-bcb4fa2a]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-slider-row[data-v-bcb4fa2a] .fil-w-num-wrap{width:70px;flex:none}.fil-style-picker[data-v-572f1dc7]{display:flex;flex-direction:column;gap:10px}.fil-style-cats[data-v-572f1dc7]{display:flex;flex-wrap:wrap;gap:6px}.fil-style-cat[data-v-572f1dc7]{box-sizing:border-box;padding:5px 10px;border-radius:999px;border:1px solid var(--fil-border);background:var(--fil-surface-1);color:var(--fil-text);font-size:11px;cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-cat[data-v-572f1dc7]:hover{border-color:var(--fil-accent)}.fil-style-cat.active[data-v-572f1dc7]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink);font-weight:500}.fil-style-cat[data-v-572f1dc7]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-style-search-wrap[data-v-572f1dc7]{position:relative;width:100%}.fil-style-search[data-v-572f1dc7]{box-sizing:border-box;width:100%;padding:7px 28px 7px 10px;background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:6px;color:var(--fil-text);font-family:inherit;font-size:12px;outline:none}.fil-style-search[data-v-572f1dc7]:focus{border-color:var(--fil-accent)}.fil-style-search-clear[data-v-572f1dc7]{position:absolute;right:6px;top:50%;transform:translateY(-50%);width:18px;height:18px;border-radius:50%;border:none;background:var(--fil-surface-3);color:#bbb;font-size:13px;line-height:1;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .12s ease}.fil-style-search-clear[data-v-572f1dc7]:hover{background:#ff4b4b4d;color:var(--fil-danger)}.fil-style-grid[data-v-572f1dc7]{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:8px;max-height:50vh;overflow-y:auto;padding-right:2px}.fil-style-tile[data-v-572f1dc7]{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px 6px;border-radius:8px;border:1px solid var(--fil-border);background:var(--fil-panel-alt);color:var(--fil-text);cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-tile[data-v-572f1dc7]:hover{border-color:var(--fil-accent);color:var(--fil-text)}.fil-style-tile.active[data-v-572f1dc7]{border-color:var(--fil-accent);background:color-mix(in srgb,var(--fil-accent) 14%,transparent)}.fil-style-tile[data-v-572f1dc7]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-style-tile-preview[data-v-572f1dc7]{width:100%;aspect-ratio:1;border-radius:6px;background:var(--fil-surface-1);display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:22px}.fil-style-tile-img[data-v-572f1dc7]{width:100%;height:100%;object-fit:cover}.fil-style-tile-label[data-v-572f1dc7]{font-size:10px;text-align:center;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.fil-style-empty[data-v-572f1dc7]{grid-column:1 / -1;padding:20px;text-align:center;color:var(--fil-muted);font-size:12px}.fil-style-selected-bar[data-v-572f1dc7]{display:flex;flex-wrap:wrap;gap:6px;padding:6px;border-radius:6px;background:color-mix(in srgb,var(--fil-accent) 6%,transparent);border:1px solid color-mix(in srgb,var(--fil-accent) 20%,transparent)}.fil-style-chip[data-v-572f1dc7]{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:999px;background:var(--fil-accent);color:var(--fil-accent-ink);font-size:11px;font-weight:600}.fil-chip-text[data-v-572f1dc7]{max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-chip-remove[data-v-572f1dc7]{display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:50%;border:none;background:#0003;color:var(--fil-accent-ink);font-size:12px;line-height:1;cursor:pointer;padding:0;transition:background .08s,color .08s}.fil-chip-remove[data-v-572f1dc7]:hover{background:var(--fil-danger);color:#fff}.fil-w-textarea-row[data-v-f3b21190]{display:flex;flex-direction:column;gap:3px;min-width:0}.fil-w-textarea-label[data-v-f3b21190]{font-size:11px;color:var(--fil-muted);font-family:inherit}.fil-w-textarea[data-v-f3b21190]{box-sizing:border-box;width:100%;min-height:40px;padding:8px 10px;background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:var(--fil-field-radius);color:var(--fil-text);font-family:inherit;font-size:12px;resize:vertical;outline:none;transition:border-color .08s}.fil-w-textarea[data-v-f3b21190]::placeholder{color:color-mix(in srgb,var(--fil-text) 30%,transparent);font-style:italic}.fil-w-textarea[data-v-f3b21190]:focus{border-color:var(--fil-accent)}.fil-w-textarea[data-v-f3b21190]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-textarea[data-v-f3b21190]:disabled{opacity:.5}.fil-w-textarea.is-linked[data-v-f3b21190]{border-style:dashed;border-color:var(--fil-accent);color:var(--fil-muted);cursor:not-allowed}.fil-w-text[data-v-d656e366]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap);width:100%}.fil-w-text-label[data-v-d656e366]{grid-column:1;font-size:11px;color:var(--fil-muted);font-family:inherit}.fil-w-text-input[data-v-d656e366]{grid-column:2;width:100%;box-sizing:border-box;height:var(--fil-control-h);background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:6px;padding:5px 8px;color:var(--fil-text);font-family:inherit;font-size:12px;outline:none;transition:border-color .08s}.fil-w-text-input[data-v-d656e366]::placeholder{color:color-mix(in srgb,var(--fil-text) 30%,transparent);font-style:italic}.fil-w-text-input[data-v-d656e366]:focus{border-color:var(--fil-accent)}.fil-w-text-input[data-v-d656e366]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-text-input[data-v-d656e366]:disabled{opacity:.5}.fil-toast-stack[data-v-dc02ac3b]{position:fixed;right:20px;bottom:20px;z-index:100001;display:flex;flex-direction:column;gap:8px;pointer-events:none;max-width:min(360px,90vw)}.fil-toast[data-v-dc02ac3b]{pointer-events:auto;display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:8px;background:var(--fil-panel);color:var(--fil-text);border:1px solid var(--fil-panel-alt);border-left:3px solid var(--toast-color, var(--fil-muted));box-shadow:0 6px 22px #0000006b;font:12.5px/1.45 system-ui,sans-serif;animation:fil-toast-in-dc02ac3b .18s cubic-bezier(.2,.7,.3,1)}@keyframes fil-toast-in-dc02ac3b{0%{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}.fil-toast-dot[data-v-dc02ac3b]{flex:none;width:8px;height:8px;margin-top:4px;border-radius:50%;background:var(--toast-color, var(--fil-muted))}.fil-toast-text[data-v-dc02ac3b]{flex:1;min-width:0;align-self:center}.fil-toast-action[data-v-dc02ac3b]{flex:none;cursor:pointer;padding:4px 8px;border-radius:4px;background:var(--fil-surface-2);color:inherit;border:none;font:inherit;transition:background .12s}.fil-toast-action[data-v-dc02ac3b]:hover{background:var(--fil-surface-3)}.fil-toast-close[data-v-dc02ac3b]{flex:none;align-self:flex-start;cursor:pointer;width:18px;height:18px;padding:0;border:none;background:none;color:var(--fil-muted);opacity:.6;transition:opacity .12s;font-size:16px;line-height:18px}.fil-toast-close[data-v-dc02ac3b]:hover{opacity:1}.fil-w-toggle[data-v-c41e86e9]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap);width:100%}.fil-w-toggle-label[data-v-c41e86e9]{grid-column:1;font-size:11px;color:var(--fil-muted);font-family:inherit}.fil-w-toggle.bare[data-v-c41e86e9]{display:flex;width:auto;gap:4px}.fil-w-toggle.bare .fil-w-toggle-label[data-v-c41e86e9]{font-size:10px;white-space:nowrap}.fil-w-switch[data-v-c41e86e9]{grid-column:2;justify-self:start;width:36px;height:20px;padding:2px;box-sizing:border-box;border:none;border-radius:10px;background:var(--fil-surface-3);cursor:pointer;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .12s}.fil-w-switch.on[data-v-c41e86e9]{background:var(--fil-accent)}.fil-w-switch[data-v-c41e86e9]:disabled{opacity:.5;cursor:default}.fil-w-switch[data-v-c41e86e9]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-switch-thumb[data-v-c41e86e9]{display:block;width:16px;height:16px;border-radius:50%;background:#fff;transition:transform .12s}.fil-w-switch.on .fil-w-switch-thumb[data-v-c41e86e9]{transform:translate(16px)}div.fil-seed-root[data-v-dca90760]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:row;align-items:center;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text);font-family:ui-sans-serif,system-ui,sans-serif;background:transparent;border:none;border-radius:0;box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none}.fil-seed-display[data-v-dca90760]{flex:1;min-width:0;box-sizing:border-box;height:var(--fil-control-h-lg);background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);padding:6px 8px;color:var(--fil-text);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:19px;text-align:center;outline:none;transition:border-color .08s}.fil-seed-display[data-v-dca90760]:focus{border-color:var(--fil-accent)}.fil-seed-display[readonly][data-v-dca90760]{color:var(--fil-muted);font-style:italic}.fil-seed-actions[data-v-dca90760]{display:flex;gap:5px;flex-shrink:0}.fil-seed-actions[data-v-dca90760] .fil-w-btn{padding:0;width:var(--fil-control-h-lg);height:var(--fil-control-h-lg);font-size:16px}.picker-container[data-v-13a51e5a]{display:flex;flex-direction:column;gap:12px;color:var(--fil-text)}.provider-tabs[data-v-13a51e5a]{display:flex;gap:6px;overflow-x:auto;padding-bottom:6px;scrollbar-width:thin}.tab-btn[data-v-13a51e5a]{display:flex;align-items:center;gap:6px;padding:7px 10px;border-radius:8px;border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-muted);font-size:12px;cursor:pointer;white-space:nowrap;flex-shrink:0;transition:all .15s ease}.tab-btn[data-v-13a51e5a]:hover{background:var(--fil-surface-2);color:var(--fil-text)}.tab-btn.active[data-v-13a51e5a]{background:var(--fil-panel-alt);border-color:var(--fil-accent);color:var(--fil-accent-text);font-weight:600}.tab-badge[data-v-13a51e5a]{font-size:10px;background:var(--fil-pill-bg);padding:1px 5px;border-radius:99px}.provider-status-bar[data-v-13a51e5a]{display:flex;justify-content:space-between;align-items:center;background:#0003;padding:8px 12px;border-radius:6px;font-size:12px}.status-info[data-v-13a51e5a]{display:flex;align-items:center;gap:8px}.provider-name[data-v-13a51e5a]{font-weight:600}.status-badge[data-v-13a51e5a]{font-size:11px;padding:2px 6px;border-radius:4px}.status-badge.online[data-v-13a51e5a]{color:var(--fil-ok)}.status-badge.loading[data-v-13a51e5a]{color:var(--fil-accent-text)}.status-badge.error[data-v-13a51e5a]{color:var(--fil-danger)}.age-label[data-v-13a51e5a]{font-size:10px;color:var(--fil-muted)}.filter-controls[data-v-13a51e5a]{display:flex;flex-direction:column;gap:8px}.search-input-wrap[data-v-13a51e5a]{position:relative;display:flex;align-items:center}.search-icon[data-v-13a51e5a]{position:absolute;left:10px;color:var(--fil-muted)}.search-input[data-v-13a51e5a]{width:100%;box-sizing:border-box;height:var(--fil-control-h);padding:6px 30px;background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:var(--fil-field-radius);color:var(--fil-text);font-size:12px;outline:none}.search-input[data-v-13a51e5a]:focus{border-color:var(--fil-accent)}.clear-search[data-v-13a51e5a]{position:absolute;right:10px;background:none;border:none;color:var(--fil-muted);cursor:pointer}.filter-segments[data-v-13a51e5a]{display:flex;gap:8px;min-width:0}.filter-segments[data-v-13a51e5a]>*{flex:1;min-width:0}.models-list-wrapper[data-v-13a51e5a]{height:320px;overflow-y:auto;background:var(--fil-inset);border-radius:8px;border:1px solid var(--fil-border);padding:8px}.empty-state[data-v-13a51e5a]{display:flex;align-items:center;justify-content:center;height:100%;color:var(--fil-muted);font-size:12px}.models-container.list[data-v-13a51e5a]{display:flex;flex-direction:column;gap:6px}.models-container.grid[data-v-13a51e5a]{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:8px}.models-container.grid .model-card[data-v-13a51e5a]{flex-direction:column;align-items:flex-start;gap:8px;padding:10px 12px}.models-container.grid .model-main[data-v-13a51e5a]{width:100%}.models-container.grid .model-tags[data-v-13a51e5a]{width:100%;justify-content:flex-start}.model-card[data-v-13a51e5a]{display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:var(--fil-surface-1);border:1px solid var(--fil-border);border-radius:6px;cursor:pointer;transition:all .12s ease;width:100%;box-sizing:border-box;text-align:left;font:inherit;color:inherit;-moz-appearance:none;appearance:none;-webkit-appearance:none}.model-card[data-v-13a51e5a]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.model-card[data-v-13a51e5a]:hover{background:var(--fil-surface-2);border-color:var(--fil-border)}.model-card.selected[data-v-13a51e5a]{background:#f08a4526;border-color:var(--fil-accent)}.model-main[data-v-13a51e5a]{display:flex;align-items:center;gap:8px;min-width:0}.type-icon[data-v-13a51e5a]{font-size:14px}.model-name[data-v-13a51e5a]{font-size:12px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.model-tags[data-v-13a51e5a]{display:flex;gap:4px;flex-shrink:0}.tag[data-v-13a51e5a]{font-size:9px;padding:2px 6px;border-radius:4px;font-weight:600;text-transform:uppercase}.tag.vision[data-v-13a51e5a]{background:#f08a4526;color:var(--fil-accent-text)}.tag.text[data-v-13a51e5a],.tag.local[data-v-13a51e5a],.tag.free[data-v-13a51e5a],.tag.paid[data-v-13a51e5a]{background:var(--fil-pill-bg);color:var(--fil-muted)}.picker-footer[data-v-13a51e5a]{display:flex;justify-content:space-between;align-items:center;padding-top:8px}.selection-summary[data-v-13a51e5a]{font-size:12px}.selection-summary .muted[data-v-13a51e5a]{color:var(--fil-muted)}.footer-actions[data-v-13a51e5a]{display:flex;gap:8px}.fil-provider-root[data-v-d1f3392e]{width:100%;box-sizing:border-box;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text);font-family:ui-sans-serif,system-ui,sans-serif;min-width:0}.picker-trigger-btn[data-v-d1f3392e]{display:flex;flex-direction:column;gap:6px;width:100%;box-sizing:border-box;padding:8px 10px;background:var(--fil-panel-alt);border:1px solid var(--fil-pill-border);border-radius:var(--fil-field-radius);color:var(--fil-text);cursor:pointer;text-align:left;transition:border-color .15s ease,background .15s ease;outline:none}.picker-trigger-btn[data-v-d1f3392e]:hover{border-color:var(--fil-accent);background:var(--fil-pill-bg)}.picker-trigger-btn[data-v-d1f3392e]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px;border-color:var(--fil-accent)}.trigger-header[data-v-d1f3392e]{display:flex;justify-content:space-between;align-items:center;width:100%}.provider-badge[data-v-d1f3392e]{display:flex;align-items:center;gap:6px;font-weight:600;font-size:13px;color:var(--fil-accent-text)}.open-icon[data-v-d1f3392e]{font-size:11px;background:var(--fil-pill-bg);padding:2px 6px;border-radius:4px;color:var(--fil-text)}.trigger-model[data-v-d1f3392e]{display:flex;align-items:center;gap:6px;font-size:12px;min-width:0}.model-label[data-v-d1f3392e]{color:var(--fil-muted);flex-shrink:0}.model-name[data-v-d1f3392e]{font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.fil-scanner-root[data-v-ffe55d1d]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text);font-family:ui-sans-serif,system-ui,sans-serif;width:100%;box-sizing:border-box;min-width:0;height:100%}.fil-section-block[data-v-ffe55d1d]{display:flex;flex-direction:column;gap:5px;min-width:0}.fil-section-block.is-growable[data-v-ffe55d1d]{flex:1 1 auto;min-height:0}.fil-w-row[data-v-ffe55d1d]{display:flex;flex-direction:column;gap:3px;min-width:0}.fil-w-row.is-growable[data-v-ffe55d1d]{flex:1 1 auto;min-height:0}.fil-w-row[data-v-ffe55d1d] .fil-w-textarea{min-height:48px}.fil-w-row.is-growable[data-v-ffe55d1d] .fil-w-textarea{flex:1 1 auto;height:auto}.fil-single-style-block[data-v-ffe55d1d]{margin-top:2px}.fil-unified-style-modal[data-v-ffe55d1d]{display:flex;flex-direction:column;gap:12px;padding:4px 0}.fil-style-tab-bar[data-v-ffe55d1d]{display:flex;gap:6px;background:var(--fil-inset);padding:4px;border-radius:8px;border:1px solid var(--fil-border)}.fil-style-tab-btn[data-v-ffe55d1d]{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;height:var(--fil-control-h-lg);border-radius:6px;border:1px solid transparent;background:transparent;color:var(--fil-muted);font-size:12px;font-weight:600;cursor:pointer;transition:all .12s ease}.fil-style-tab-btn[data-v-ffe55d1d]:hover{color:var(--fil-text);background:var(--fil-surface-2)}.fil-style-tab-btn.active[data-v-ffe55d1d]{background:var(--fil-accent);color:var(--fil-accent-ink);border-color:var(--fil-accent);font-weight:700;box-shadow:0 0 10px color-mix(in srgb,var(--fil-accent) 30%,transparent)}.fil-tab-badge[data-v-ffe55d1d]{font-size:10px;color:var(--fil-ok)}.fil-style-tab-btn.active .fil-tab-badge[data-v-ffe55d1d]{color:var(--fil-accent-ink)}.fil-style-picker-body[data-v-ffe55d1d]{min-height:320px;max-height:480px;overflow-y:auto}.fil-style-modal-footer[data-v-ffe55d1d]{display:flex;justify-content:flex-end;border-top:1px solid var(--fil-border);padding-top:8px}.fil-clear-styles-btn[data-v-ffe55d1d]{padding:6px 12px;border-radius:6px;border:1px solid color-mix(in srgb,var(--fil-danger) 40%,transparent);background:color-mix(in srgb,var(--fil-danger) 12%,transparent);color:var(--fil-danger);font-size:12px;font-weight:600;cursor:pointer;transition:background .12s,border-color .12s,color .12s}.fil-clear-styles-btn[data-v-ffe55d1d]:hover{background:color-mix(in srgb,var(--fil-danger) 28%,transparent);border-color:var(--fil-danger);color:var(--fil-text)}.fil-clear-styles-btn[data-v-ffe55d1d]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-style-picker-btn[data-v-ffe55d1d]{flex:2;box-sizing:border-box;min-height:var(--fil-control-h-lg);border-radius:var(--fil-pill-radius);background:var(--fil-pill-bg);border:1px solid var(--fil-pill-border);color:var(--fil-text);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .12s,border-color .12s,box-shadow .12s}.fil-style-picker-btn[data-v-ffe55d1d]:hover{background:var(--fil-surface-3);border-color:var(--fil-accent)}.fil-style-picker-btn[data-v-ffe55d1d]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-style-picker-btn.has-styles[data-v-ffe55d1d]{background:color-mix(in srgb,var(--fil-accent) 20%,transparent);border-color:var(--fil-accent);box-shadow:0 0 12px color-mix(in srgb,var(--fil-accent) 25%,transparent)}.fil-style-picker-btn.has-styles[data-v-ffe55d1d]:hover{background:color-mix(in srgb,var(--fil-accent) 32%,transparent)}.fil-cleaner-root[data-v-aca28d85],.fil-up-root[data-v-d0c34d54]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text);font-family:ui-sans-serif,system-ui,sans-serif}.fil-up-row[data-v-d0c34d54]{display:grid;grid-template-columns:minmax(auto,max-content) 64px minmax(auto,max-content) 64px;align-items:center;gap:var(--fil-node-gap)}.fil-up-row-overlap[data-v-d0c34d54]{grid-template-columns:minmax(auto,max-content) 64px minmax(auto,max-content) 64px auto}.fil-w-label[data-v-d0c34d54]{font-size:11px;color:var(--fil-muted)}.fil-hrf-root[data-v-1976136c],.fil-style-mixer-root[data-v-87c8a7d7],.fil-color-wizard-root[data-v-b58e409b]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cw-presets-block[data-v-b58e409b]{display:flex;flex-direction:column;gap:6px;padding:8px 10px;background:#0000004d;border:1px solid var(--fil-border);border-radius:8px}.fil-cw-presets-title[data-v-b58e409b]{font-size:11px;font-weight:700;color:var(--fil-accent-text);text-transform:uppercase;letter-spacing:.5px}.fil-cw-presets-grid[data-v-b58e409b]{display:grid;grid-template-columns:1fr 1fr;gap:6px}.fil-cw-preset-btn[data-v-b58e409b]{height:28px;border-radius:6px;border:1px solid var(--fil-border);background:var(--fil-surface-1);color:var(--fil-text);font-size:11px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .12s ease}.fil-cw-preset-btn[data-v-b58e409b]:hover{background:var(--fil-surface-3);border-color:var(--fil-accent)}.fil-cw-preset-btn.warm[data-v-b58e409b]:hover{border-color:#fa0;color:#fa0}.fil-cw-preset-btn.cool[data-v-b58e409b]:hover{border-color:#00f0ff;color:#00f0ff}.fil-cw-preset-btn.skin[data-v-b58e409b]:hover{border-color:#f7a;color:#f7a}.fil-cw-preset-btn.contrast[data-v-b58e409b]:hover{border-color:#fa0;color:#fa0}.fil-cw-slider-group[data-v-b58e409b]{display:flex;flex-direction:column;gap:6px}.fil-switch-panel[data-v-ebd9f0fd]{display:flex;align-items:center;justify-content:center;padding:6px 10px;width:100%;box-sizing:border-box}.fil-switch-btn[data-v-ebd9f0fd]{display:inline-flex;align-items:center;justify-content:center;gap:8px;width:100%;height:var(--fil-control-h-lg);box-sizing:border-box;border:1px solid transparent;border-radius:var(--fil-field-radius);background:var(--fil-surface-2);color:var(--fil-text);font-family:inherit;font-size:13px;font-weight:700;letter-spacing:.05em;cursor:pointer;transition:background .12s,border-color .12s,box-shadow .12s;outline:none;-webkit-user-select:none;user-select:none;box-shadow:0 2px 8px #00000040}.fil-switch-btn[data-v-ebd9f0fd]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-switch-btn.is-on[data-v-ebd9f0fd]{background:color-mix(in srgb,var(--fil-ok) 18%,transparent);border-color:color-mix(in srgb,var(--fil-ok) 65%,transparent);box-shadow:0 2px 8px #00000040,0 0 10px color-mix(in srgb,var(--fil-ok) 22%,transparent)}.fil-switch-btn.is-on[data-v-ebd9f0fd]:hover{background:color-mix(in srgb,var(--fil-ok) 30%,transparent);border-color:var(--fil-ok)}.fil-switch-btn.is-off[data-v-ebd9f0fd]{background:color-mix(in srgb,var(--fil-danger) 14%,transparent);border-color:color-mix(in srgb,var(--fil-danger) 45%,transparent)}.fil-switch-btn.is-off[data-v-ebd9f0fd]:hover{background:color-mix(in srgb,var(--fil-danger) 26%,transparent);border-color:var(--fil-danger)}.fil-switch-text[data-v-ebd9f0fd]{text-transform:uppercase}.fil-ds-root[data-v-a83f0384]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text);font-family:ui-sans-serif,system-ui,sans-serif;width:100%;box-sizing:border-box;min-width:0}\n";document.head.appendChild(s);}catch(e){}})();
import { app as Ns } from "/scripts/app.js";
/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function ti(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Se = {}, Cn = [], kt = () => {
}, Rs = () => !1, Xl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Yl = (e) => e.startsWith("onUpdate:"), Te = Object.assign, ni = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, xr = Object.prototype.hasOwnProperty, Ae = (e, t) => xr.call(e, t), re = Array.isArray, An = (e) => dl(e) === "[object Map]", Jl = (e) => dl(e) === "[object Set]", ki = (e) => dl(e) === "[object Date]", he = (e) => typeof e == "function", Ie = (e) => typeof e == "string", at = (e) => typeof e == "symbol", ke = (e) => e !== null && typeof e == "object", Ts = (e) => (ke(e) || he(e)) && he(e.then) && he(e.catch), Es = Object.prototype.toString, dl = (e) => Es.call(e), Cr = (e) => dl(e).slice(8, -1), Vs = (e) => dl(e) === "[object Object]", Ql = (e) => Ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, qn = /* @__PURE__ */ ti(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Zl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ar = /-\w/g, Ke = Zl(
  (e) => e.replace(Ar, (t) => t.slice(1).toUpperCase())
), kr = /\B([A-Z])/g, Ut = Zl(
  (e) => e.replace(kr, "-$1").toLowerCase()
), eo = Zl((e) => e.charAt(0).toUpperCase() + e.slice(1)), mo = Zl(
  (e) => e ? `on${eo(e)}` : ""
), He = (e, t) => !Object.is(e, t), kl = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Os = (e, t, n, l = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: l,
    value: n
  });
}, to = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Fr = (e) => {
  const t = Ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Fi;
const no = () => Fi || (Fi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ct(e) {
  if (re(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const l = e[n], o = Ie(l) ? Dr(l) : ct(l);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (Ie(e) || ke(e))
    return e;
}
const Mr = /;(?![^(]*\))/g, Lr = /:([^]+)/, Ir = /\/\*[^]*?\*\//g;
function Dr(e) {
  const t = {};
  return e.replace(Ir, "").split(Mr).forEach((n) => {
    if (n) {
      const l = n.split(Lr);
      l.length > 1 && (t[l[0].trim()] = l[1].trim());
    }
  }), t;
}
function _e(e) {
  let t = "";
  if (Ie(e))
    t = e;
  else if (re(e))
    for (let n = 0; n < e.length; n++) {
      const l = _e(e[n]);
      l && (t += l + " ");
    }
  else if (ke(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Pr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Nr = /* @__PURE__ */ ti(Pr);
function $s(e) {
  return !!e || e === "";
}
function Rr(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let l = 0; n && l < e.length; l++)
    n = fl(e[l], t[l]);
  return n;
}
function fl(e, t) {
  if (e === t) return !0;
  let n = ki(e), l = ki(t);
  if (n || l)
    return n && l ? e.getTime() === t.getTime() : !1;
  if (n = at(e), l = at(t), n || l)
    return e === t;
  if (n = re(e), l = re(t), n || l)
    return n && l ? Rr(e, t) : !1;
  if (n = ke(e), l = ke(t), n || l) {
    if (!n || !l)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), r = t.hasOwnProperty(s);
      if (a && !r || !a && r || !fl(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Tr(e, t) {
  return e.findIndex((n) => fl(n, t));
}
const Bs = (e) => !!(e && e.__v_isRef === !0), Y = (e) => Ie(e) ? e : e == null ? "" : re(e) || ke(e) && (e.toString === Es || !he(e.toString)) ? Bs(e) ? Y(e.value) : JSON.stringify(e, Hs, 2) : String(e), Hs = (e, t) => Bs(t) ? Hs(e, t.value) : An(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [l, o], i) => (n[ho(l, i) + " =>"] = o, n),
    {}
  )
} : Jl(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ho(n))
} : at(t) ? ho(t) : ke(t) && !re(t) && !Vs(t) ? String(t) : t, ho = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    at(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ee;
class Us {
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
        const o = this.scopes.slice();
        for (t = 0, n = o.length; t < n; t++)
          o[t].resume();
      }
      const l = this.effects.slice();
      for (t = 0, n = l.length; t < n; t++)
        l[t].resume();
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
      let n, l;
      for (n = 0, l = this.effects.length; n < l; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, l = this.cleanups.length; n < l; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        const o = this.scopes.slice();
        for (n = 0, l = o.length; n < l; n++)
          o[n].stop(!0);
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
function Gs(e) {
  return new Us(e);
}
function Ws() {
  return Ee;
}
function Er(e, t = !1) {
  Ee && Ee.cleanups.push(e);
}
let Le;
const go = /* @__PURE__ */ new WeakSet();
class js {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ee && (Ee.active ? Ee.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, go.has(this) && (go.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ks(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Mi(this), qs(this);
    const t = Le, n = pt;
    Le = this, pt = !0;
    try {
      return this.fn();
    } finally {
      Xs(this), Le = t, pt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ii(t);
      this.deps = this.depsTail = void 0, Mi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? go.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Do(this) && this.run();
  }
  get dirty() {
    return Do(this);
  }
}
let zs = 0, Xn, Yn;
function Ks(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Yn, Yn = e;
    return;
  }
  e.next = Xn, Xn = e;
}
function li() {
  zs++;
}
function oi() {
  if (--zs > 0)
    return;
  if (Yn) {
    let t = Yn;
    for (Yn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Xn; ) {
    let t = Xn;
    for (Xn = void 0; t; ) {
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
function qs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Xs(e) {
  let t, n = e.depsTail, l = n;
  for (; l; ) {
    const o = l.prevDep;
    l.version === -1 ? (l === n && (n = o), ii(l), Vr(l)) : t = l, l.dep.activeLink = l.prevActiveLink, l.prevActiveLink = void 0, l = o;
  }
  e.deps = t, e.depsTail = n;
}
function Do(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ys(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ys(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ol) || (e.globalVersion = ol, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Do(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Le, l = pt;
  Le = e, pt = !0;
  try {
    qs(e);
    const o = e.fn(e._value);
    (t.version === 0 || He(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Le = n, pt = l, Xs(e), e.flags &= -3;
  }
}
function ii(e, t = !1) {
  const { dep: n, prevSub: l, nextSub: o } = e;
  if (l && (l.nextSub = o, e.prevSub = void 0), o && (o.prevSub = l, e.nextSub = void 0), n.subs === e && (n.subs = l, !l && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      ii(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Vr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let pt = !0;
const Js = [];
function Vt() {
  Js.push(pt), pt = !1;
}
function Ot() {
  const e = Js.pop();
  pt = e === void 0 ? !0 : e;
}
function Mi(e) {
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
let ol = 0;
class Or {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class lo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Le || !pt || Le === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Le)
      n = this.activeLink = new Or(Le, this), Le.deps ? (n.prevDep = Le.depsTail, Le.depsTail.nextDep = n, Le.depsTail = n) : Le.deps = Le.depsTail = n, Qs(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const l = n.nextDep;
      l.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = l), n.prevDep = Le.depsTail, n.nextDep = void 0, Le.depsTail.nextDep = n, Le.depsTail = n, Le.deps === n && (Le.deps = l);
    }
    return n;
  }
  trigger(t) {
    this.version++, ol++, this.notify(t);
  }
  notify(t) {
    li();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      oi();
    }
  }
}
function Qs(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let l = t.deps; l; l = l.nextDep)
        Qs(l);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Dl = /* @__PURE__ */ new WeakMap(), fn = /* @__PURE__ */ Symbol(
  ""
), Po = /* @__PURE__ */ Symbol(
  ""
), il = /* @__PURE__ */ Symbol(
  ""
);
function We(e, t, n) {
  if (pt && Le) {
    let l = Dl.get(e);
    l || Dl.set(e, l = /* @__PURE__ */ new Map());
    let o = l.get(n);
    o || (l.set(n, o = new lo()), o.map = l, o.key = n), o.track();
  }
}
function Nt(e, t, n, l, o, i) {
  const s = Dl.get(e);
  if (!s) {
    ol++;
    return;
  }
  const a = (r) => {
    r && r.trigger();
  };
  if (li(), t === "clear")
    s.forEach(a);
  else {
    const r = re(e), d = r && Ql(n);
    if (r && n === "length") {
      const u = Number(l);
      s.forEach((f, p) => {
        (p === "length" || p === il || !at(p) && p >= u) && a(f);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && a(s.get(n)), d && a(s.get(il)), t) {
        case "add":
          r ? d && a(s.get("length")) : (a(s.get(fn)), An(e) && a(s.get(Po)));
          break;
        case "delete":
          r || (a(s.get(fn)), An(e) && a(s.get(Po)));
          break;
        case "set":
          An(e) && a(s.get(fn));
          break;
      }
  }
  oi();
}
function $r(e, t) {
  const n = Dl.get(e);
  return n && n.get(t);
}
function _n(e) {
  const t = /* @__PURE__ */ ye(e);
  return t === e ? t : (We(t, "iterate", il), /* @__PURE__ */ it(e) ? t : t.map(mt));
}
function oo(e) {
  return We(e = /* @__PURE__ */ ye(e), "iterate", il), e;
}
function Ct(e, t) {
  return /* @__PURE__ */ $t(e) ? Pn(/* @__PURE__ */ Tt(e) ? mt(t) : t) : mt(t);
}
const Br = {
  __proto__: null,
  [Symbol.iterator]() {
    return _o(this, Symbol.iterator, (e) => Ct(this, e));
  },
  concat(...e) {
    return _n(this).concat(
      ...e.map((t) => re(t) ? _n(t) : t)
    );
  },
  entries() {
    return _o(this, "entries", (e) => (e[1] = Ct(this, e[1]), e));
  },
  every(e, t) {
    return Ft(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ft(
      this,
      "filter",
      e,
      t,
      (n) => n.map((l) => Ct(this, l)),
      arguments
    );
  },
  find(e, t) {
    return Ft(
      this,
      "find",
      e,
      t,
      (n) => Ct(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ft(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ft(
      this,
      "findLast",
      e,
      t,
      (n) => Ct(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ft(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ft(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return bo(this, "includes", e);
  },
  indexOf(...e) {
    return bo(this, "indexOf", e);
  },
  join(e) {
    return _n(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return bo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ft(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return On(this, "pop");
  },
  push(...e) {
    return On(this, "push", e);
  },
  reduce(e, ...t) {
    return Li(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Li(this, "reduceRight", e, t);
  },
  shift() {
    return On(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ft(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return On(this, "splice", e);
  },
  toReversed() {
    return _n(this).toReversed();
  },
  toSorted(e) {
    return _n(this).toSorted(e);
  },
  toSpliced(...e) {
    return _n(this).toSpliced(...e);
  },
  unshift(...e) {
    return On(this, "unshift", e);
  },
  values() {
    return _o(this, "values", (e) => Ct(this, e));
  }
};
function _o(e, t, n) {
  const l = oo(e), o = l[t]();
  return l !== e && !/* @__PURE__ */ it(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = n(i.value)), i;
  }), o;
}
const Hr = Array.prototype;
function Ft(e, t, n, l, o, i) {
  const s = oo(e), a = s !== e && !/* @__PURE__ */ it(e), r = s[t];
  if (r !== Hr[t]) {
    const f = r.apply(e, i);
    return a ? mt(f) : f;
  }
  let d = n;
  s !== e && (a ? d = function(f, p) {
    return n.call(this, Ct(e, f), p, e);
  } : n.length > 2 && (d = function(f, p) {
    return n.call(this, f, p, e);
  }));
  const u = r.call(s, d, l);
  return a && o ? o(u) : u;
}
function Li(e, t, n, l) {
  const o = oo(e), i = o !== e && !/* @__PURE__ */ it(e);
  let s = n, a = !1;
  o !== e && (i ? (a = l.length === 0, s = function(d, u, f) {
    return a && (a = !1, d = Ct(e, d)), n.call(this, d, Ct(e, u), f, e);
  }) : n.length > 3 && (s = function(d, u, f) {
    return n.call(this, d, u, f, e);
  }));
  const r = o[t](s, ...l);
  return a ? Ct(e, r) : r;
}
function bo(e, t, n) {
  const l = /* @__PURE__ */ ye(e);
  We(l, "iterate", il);
  const o = l[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ io(n[0]) ? (n[0] = /* @__PURE__ */ ye(n[0]), l[t](...n)) : o;
}
function On(e, t, n = []) {
  Vt(), li();
  const l = (/* @__PURE__ */ ye(e))[t].apply(e, n);
  return oi(), Ot(), l;
}
const Ur = /* @__PURE__ */ ti("__proto__,__v_isRef,__isVue"), Zs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(at)
);
function Gr(e) {
  at(e) || (e = String(e));
  const t = /* @__PURE__ */ ye(this);
  return We(t, "has", e), t.hasOwnProperty(e);
}
class ea {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, l) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return l === (o ? i ? Zr : oa : i ? la : na).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(l) ? t : void 0;
    const s = re(t);
    if (!o) {
      let r;
      if (s && (r = Br[n]))
        return r;
      if (n === "hasOwnProperty")
        return Gr;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ se(t) ? t : l
    );
    if ((at(n) ? Zs.has(n) : Ur(n)) || (o || We(t, "get", n), i))
      return a;
    if (/* @__PURE__ */ se(a)) {
      const r = s && Ql(n) ? a : a.value;
      return o && ke(r) ? /* @__PURE__ */ Pl(r) : r;
    }
    return ke(a) ? o ? /* @__PURE__ */ Pl(a) : /* @__PURE__ */ Gt(a) : a;
  }
}
class ta extends ea {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, l, o) {
    let i = t[n];
    const s = re(t) && Ql(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ $t(i);
      if (!/* @__PURE__ */ it(l) && !/* @__PURE__ */ $t(l) && (i = /* @__PURE__ */ ye(i), l = /* @__PURE__ */ ye(l)), !s && /* @__PURE__ */ se(i) && !/* @__PURE__ */ se(l))
        return d || (i.value = l), !0;
    }
    const a = s ? Number(n) < t.length : Ae(t, n), r = Reflect.set(
      t,
      n,
      l,
      /* @__PURE__ */ se(t) ? t : o
    );
    return t === /* @__PURE__ */ ye(o) && r && (a ? He(l, i) && Nt(t, "set", n, l) : Nt(t, "add", n, l)), r;
  }
  deleteProperty(t, n) {
    const l = Ae(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && l && Nt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const l = Reflect.has(t, n);
    return (!at(n) || !Zs.has(n)) && We(t, "has", n), l;
  }
  ownKeys(t) {
    return We(
      t,
      "iterate",
      re(t) ? "length" : fn
    ), Reflect.ownKeys(t);
  }
}
class Wr extends ea {
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
const jr = /* @__PURE__ */ new ta(), zr = /* @__PURE__ */ new Wr(), Kr = /* @__PURE__ */ new ta(!0);
const No = (e) => e, bl = (e) => Reflect.getPrototypeOf(e);
function qr(e, t, n) {
  return function(...l) {
    const o = this.__v_raw, i = /* @__PURE__ */ ye(o), s = An(i), a = e === "entries" || e === Symbol.iterator && s, r = e === "keys" && s, d = o[e](...l), u = n ? No : t ? Pn : mt;
    return !t && We(
      i,
      "iterate",
      r ? Po : fn
    ), Te(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: f, done: p } = d.next();
          return p ? { value: f, done: p } : {
            value: a ? [u(f[0]), u(f[1])] : u(f),
            done: p
          };
        }
      }
    );
  };
}
function vl(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Xr(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, s = /* @__PURE__ */ ye(i), a = /* @__PURE__ */ ye(o);
      e || (He(o, a) && We(s, "get", o), We(s, "get", a));
      const { has: r } = bl(s), d = t ? No : e ? Pn : mt;
      if (r.call(s, o))
        return d(i.get(o));
      if (r.call(s, a))
        return d(i.get(a));
      i !== s && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && We(/* @__PURE__ */ ye(o), "iterate", fn), o.size;
    },
    has(o) {
      const i = this.__v_raw, s = /* @__PURE__ */ ye(i), a = /* @__PURE__ */ ye(o);
      return e || (He(o, a) && We(s, "has", o), We(s, "has", a)), o === a ? i.has(o) : i.has(o) || i.has(a);
    },
    forEach(o, i) {
      const s = this, a = s.__v_raw, r = /* @__PURE__ */ ye(a), d = t ? No : e ? Pn : mt;
      return !e && We(r, "iterate", fn), a.forEach((u, f) => o.call(i, d(u), d(f), s));
    }
  };
  return Te(
    n,
    e ? {
      add: vl("add"),
      set: vl("set"),
      delete: vl("delete"),
      clear: vl("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ ye(this), s = bl(i), a = /* @__PURE__ */ ye(o), r = !t && !/* @__PURE__ */ it(o) && !/* @__PURE__ */ $t(o) ? a : o;
        return s.has.call(i, r) || He(o, r) && s.has.call(i, o) || He(a, r) && s.has.call(i, a) || (i.add(r), Nt(i, "add", r, r)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ it(i) && !/* @__PURE__ */ $t(i) && (i = /* @__PURE__ */ ye(i));
        const s = /* @__PURE__ */ ye(this), { has: a, get: r } = bl(s);
        let d = a.call(s, o);
        d || (o = /* @__PURE__ */ ye(o), d = a.call(s, o));
        const u = r.call(s, o);
        return s.set(o, i), d ? He(i, u) && Nt(s, "set", o, i) : Nt(s, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ ye(this), { has: s, get: a } = bl(i);
        let r = s.call(i, o);
        r || (o = /* @__PURE__ */ ye(o), r = s.call(i, o)), a && a.call(i, o);
        const d = i.delete(o);
        return r && Nt(i, "delete", o, void 0), d;
      },
      clear() {
        const o = /* @__PURE__ */ ye(this), i = o.size !== 0, s = o.clear();
        return i && Nt(
          o,
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
  ].forEach((o) => {
    n[o] = qr(o, e, t);
  }), n;
}
function si(e, t) {
  const n = Xr(e, t);
  return (l, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? l : Reflect.get(
    Ae(n, o) && o in l ? n : l,
    o,
    i
  );
}
const Yr = {
  get: /* @__PURE__ */ si(!1, !1)
}, Jr = {
  get: /* @__PURE__ */ si(!1, !0)
}, Qr = {
  get: /* @__PURE__ */ si(!0, !1)
};
const na = /* @__PURE__ */ new WeakMap(), la = /* @__PURE__ */ new WeakMap(), oa = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap();
function eu(e) {
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
  return /* @__PURE__ */ $t(e) ? e : ai(
    e,
    !1,
    jr,
    Yr,
    na
  );
}
// @__NO_SIDE_EFFECTS__
function tu(e) {
  return ai(
    e,
    !1,
    Kr,
    Jr,
    la
  );
}
// @__NO_SIDE_EFFECTS__
function Pl(e) {
  return ai(
    e,
    !0,
    zr,
    Qr,
    oa
  );
}
function ai(e, t, n, l, o) {
  if (!ke(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const s = eu(Cr(e));
  if (s === 0)
    return e;
  const a = new Proxy(
    e,
    s === 2 ? l : n
  );
  return o.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function Tt(e) {
  return /* @__PURE__ */ $t(e) ? /* @__PURE__ */ Tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function it(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function io(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ye(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ye(t) : e;
}
function ri(e) {
  return !Ae(e, "__v_skip") && Object.isExtensible(e) && Os(e, "__v_skip", !0), e;
}
const mt = (e) => ke(e) ? /* @__PURE__ */ Gt(e) : e, Pn = (e) => ke(e) ? /* @__PURE__ */ Pl(e) : e;
// @__NO_SIDE_EFFECTS__
function se(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ce(e) {
  return nu(e, !1);
}
function nu(e, t) {
  return /* @__PURE__ */ se(e) ? e : new lu(e, t);
}
class lu {
  constructor(t, n) {
    this.dep = new lo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ye(t), this._value = n ? t : mt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, l = this.__v_isShallow || /* @__PURE__ */ it(t) || /* @__PURE__ */ $t(t);
    t = l ? t : /* @__PURE__ */ ye(t), He(t, n) && (this._rawValue = t, this._value = l ? t : mt(t), this.dep.trigger());
  }
}
function c(e) {
  return /* @__PURE__ */ se(e) ? e.value : e;
}
const ou = {
  get: (e, t, n) => t === "__v_raw" ? e : c(Reflect.get(e, t, n)),
  set: (e, t, n, l) => {
    const o = e[t];
    return /* @__PURE__ */ se(o) && !/* @__PURE__ */ se(n) ? (o.value = n, !0) : Reflect.set(e, t, n, l);
  }
};
function ia(e) {
  return /* @__PURE__ */ Tt(e) ? e : new Proxy(e, ou);
}
class iu {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new lo(), { get: l, set: o } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = l, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function su(e) {
  return new iu(e);
}
// @__NO_SIDE_EFFECTS__
function au(e) {
  const t = re(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = uu(e, n);
  return t;
}
class ru {
  constructor(t, n, l) {
    this._object = t, this._defaultValue = l, this.__v_isRef = !0, this._value = void 0, this._key = at(n) ? n : String(n), this._raw = /* @__PURE__ */ ye(t);
    let o = !0, i = t;
    if (!re(t) || at(this._key) || !Ql(this._key))
      do
        o = !/* @__PURE__ */ io(i) || /* @__PURE__ */ it(i);
      while (o && (i = i.__v_raw));
    this._shallow = o;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = c(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ se(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ se(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return $r(this._raw, this._key);
  }
}
function uu(e, t, n) {
  return new ru(e, t, n);
}
class cu {
  constructor(t, n, l) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new lo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ol - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = l;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Le !== this)
      return Ks(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ys(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function du(e, t, n = !1) {
  let l, o;
  return he(e) ? l = e : (l = e.get, o = e.set), new cu(l, o, n);
}
const yl = {}, Nl = /* @__PURE__ */ new WeakMap();
let on;
function fu(e, t = !1, n = on) {
  if (n) {
    let l = Nl.get(n);
    l || Nl.set(n, l = []), l.push(e);
  }
}
function pu(e, t, n = Se) {
  const { immediate: l, deep: o, once: i, scheduler: s, augmentJob: a, call: r } = n, d = (v) => o ? v : /* @__PURE__ */ it(v) || o === !1 || o === 0 ? Rt(v, 1) : Rt(v);
  let u, f, p, g, m = !1, _ = !1;
  if (/* @__PURE__ */ se(e) ? (f = () => e.value, m = /* @__PURE__ */ it(e)) : /* @__PURE__ */ Tt(e) ? (f = () => d(e), m = !0) : re(e) ? (_ = !0, m = e.some((v) => /* @__PURE__ */ Tt(v) || /* @__PURE__ */ it(v)), f = () => e.map((v) => {
    if (/* @__PURE__ */ se(v))
      return v.value;
    if (/* @__PURE__ */ Tt(v))
      return d(v);
    if (he(v))
      return r ? r(v, 2) : v();
  })) : he(e) ? t ? f = r ? () => r(e, 2) : e : f = () => {
    if (p) {
      Vt();
      try {
        p();
      } finally {
        Ot();
      }
    }
    const v = on;
    on = u;
    try {
      return r ? r(e, 3, [g]) : e(g);
    } finally {
      on = v;
    }
  } : f = kt, t && o) {
    const v = f, y = o === !0 ? 1 / 0 : o;
    f = () => Rt(v(), y);
  }
  const A = Ws(), x = () => {
    u.stop(), A && A.active && ni(A.effects, u);
  };
  if (i && t) {
    const v = t;
    t = (...y) => {
      const w = v(...y);
      return x(), w;
    };
  }
  let S = _ ? new Array(e.length).fill(yl) : yl;
  const k = (v) => {
    if (!(!(u.flags & 1) || !u.dirty && !v))
      if (t) {
        const y = u.run();
        if (v || o || m || (_ ? y.some((w, T) => He(w, S[T])) : He(y, S))) {
          p && p();
          const w = on;
          on = u;
          try {
            const T = [
              y,
              // pass undefined as the old value when it's changed for the first time
              S === yl ? void 0 : _ && S[0] === yl ? [] : S,
              g
            ];
            S = y, r ? r(t, 3, T) : (
              // @ts-expect-error
              t(...T)
            );
          } finally {
            on = w;
          }
        }
      } else
        u.run();
  };
  return a && a(k), u = new js(f), u.scheduler = s ? () => s(k, !1) : k, g = (v) => fu(v, !1, u), p = u.onStop = () => {
    const v = Nl.get(u);
    if (v) {
      if (r)
        r(v, 4);
      else
        for (const y of v) y();
      Nl.delete(u);
    }
  }, t ? l ? k(!0) : S = u.run() : s ? s(k.bind(null, !0), !0) : u.run(), x.pause = u.pause.bind(u), x.resume = u.resume.bind(u), x.stop = x, x;
}
function Rt(e, t = 1 / 0, n) {
  if (t <= 0 || !ke(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ se(e))
    Rt(e.value, t, n);
  else if (re(e))
    for (let l = 0; l < e.length; l++)
      Rt(e[l], t, n);
  else if (Jl(e) || An(e))
    e.forEach((l) => {
      Rt(l, t, n);
    });
  else if (Vs(e)) {
    for (const l in e)
      Rt(e[l], t, n);
    for (const l of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, l) && Rt(e[l], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function pl(e, t, n, l) {
  try {
    return l ? e(...l) : e();
  } catch (o) {
    ml(o, t, n);
  }
}
function ft(e, t, n, l) {
  if (he(e)) {
    const o = pl(e, t, n, l);
    return o && Ts(o) && o.catch((i) => {
      ml(i, t, n);
    }), o;
  }
  if (re(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(ft(e[i], t, n, l));
    return o;
  }
}
function ml(e, t, n, l = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Se;
  if (t) {
    let a = t.parent;
    const r = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let f = 0; f < u.length; f++)
          if (u[f](e, r, d) === !1)
            return;
      }
      a = a.parent;
    }
    if (i) {
      Vt(), pl(i, null, 10, [
        e,
        r,
        d
      ]), Ot();
      return;
    }
  }
  mu(e, n, o, l, s);
}
function mu(e, t, n, l = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Je = [];
let xt = -1;
const kn = [];
let Xt = null, wn = 0;
const sa = /* @__PURE__ */ Promise.resolve();
let Rl = null;
function Rn(e) {
  const t = Rl || sa;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function hu(e) {
  let t = xt + 1, n = Je.length;
  for (; t < n; ) {
    const l = t + n >>> 1, o = Je[l], i = sl(o);
    i < e || i === e && o.flags & 2 ? t = l + 1 : n = l;
  }
  return t;
}
function ui(e) {
  if (!(e.flags & 1)) {
    const t = sl(e), n = Je[Je.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= sl(n) ? Je.push(e) : Je.splice(hu(t), 0, e), e.flags |= 1, aa();
  }
}
function aa() {
  Rl || (Rl = sa.then(ua));
}
function gu(e) {
  re(e) ? kn.push(...e) : Xt && e.id === -1 ? Xt.splice(wn + 1, 0, e) : e.flags & 1 || (kn.push(e), e.flags |= 1), aa();
}
function Ii(e, t, n = xt + 1) {
  for (; n < Je.length; n++) {
    const l = Je[n];
    if (l && l.flags & 2) {
      if (e && l.id !== e.uid)
        continue;
      Je.splice(n, 1), n--, l.flags & 4 && (l.flags &= -2), l(), l.flags & 4 || (l.flags &= -2);
    }
  }
}
function ra(e) {
  if (kn.length) {
    const t = [...new Set(kn)].sort(
      (n, l) => sl(n) - sl(l)
    );
    if (kn.length = 0, Xt) {
      Xt.push(...t);
      return;
    }
    for (Xt = t, wn = 0; wn < Xt.length; wn++) {
      const n = Xt[wn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Xt = null, wn = 0;
  }
}
const sl = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ua(e) {
  try {
    for (xt = 0; xt < Je.length; xt++) {
      const t = Je[xt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), pl(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; xt < Je.length; xt++) {
      const t = Je[xt];
      t && (t.flags &= -2);
    }
    xt = -1, Je.length = 0, ra(), Rl = null, (Je.length || kn.length) && ua();
  }
}
let Ge = null, ca = null;
function Tl(e) {
  const t = Ge;
  return Ge = e, ca = e && e.type.__scopeId || null, t;
}
function Jt(e, t = Ge, n) {
  if (!t || e._n)
    return e;
  const l = (...o) => {
    l._d && $l(-1);
    const i = Tl(t), s = Et.length;
    let a;
    try {
      a = e(...o);
    } finally {
      for (let r = Et.length; r > s; r--) hi();
      Tl(i), l._d && $l(1);
    }
    return a;
  };
  return l._n = !0, l._c = !0, l._d = !0, l;
}
function Qe(e, t) {
  if (Ge === null)
    return e;
  const n = fo(Ge), l = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, s, a, r = Se] = t[o];
    i && (he(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Rt(s), l.push({
      dir: i,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: a,
      modifiers: r
    }));
  }
  return e;
}
function en(e, t, n, l) {
  const o = e.dirs, i = t && t.dirs;
  for (let s = 0; s < o.length; s++) {
    const a = o[s];
    i && (a.oldValue = i[s].value);
    let r = a.dir[l];
    r && (Vt(), ft(r, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Ot());
  }
}
function _u(e, t) {
  if (Ue) {
    let n = Ue.provides;
    const l = Ue.parent && Ue.parent.provides;
    l === n && (n = Ue.provides = Object.create(l)), n[e] = t;
  }
}
function Jn(e, t, n = !1) {
  const l = co();
  if (l || pn) {
    let o = pn ? pn._context.provides : l ? l.parent == null || l.ce ? l.vnode.appContext && l.vnode.appContext.provides : l.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && he(t) ? t.call(l && l.proxy) : t;
  }
}
function bu() {
  return !!(co() || pn);
}
const vu = /* @__PURE__ */ Symbol.for("v-scx"), yu = () => Jn(vu);
function wu(e, t) {
  return ci(
    e,
    null,
    { flush: "sync" }
  );
}
function $e(e, t, n) {
  return ci(e, t, n);
}
function ci(e, t, n = Se) {
  const { immediate: l, deep: o, flush: i, once: s } = n, a = Te({}, n), r = t && l || !t && i !== "post";
  let d;
  if (Nn) {
    if (i === "sync") {
      const g = yu();
      d = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!r) {
      const g = () => {
      };
      return g.stop = kt, g.resume = kt, g.pause = kt, g;
    }
  }
  const u = Ue;
  a.call = (g, m, _) => ft(g, u, m, _);
  let f = !1;
  i === "post" ? a.scheduler = (g) => {
    Ye(g, u && u.suspense);
  } : i !== "sync" && (f = !0, a.scheduler = (g, m) => {
    m ? g() : ui(g);
  }), a.augmentJob = (g) => {
    t && (g.flags |= 4), f && (g.flags |= 2, u && (g.id = u.uid, g.i = u));
  };
  const p = pu(e, t, a);
  return Nn && (d ? d.push(p) : r && p()), p;
}
function Su(e, t, n) {
  const l = this.proxy, o = Ie(e) ? e.includes(".") ? da(l, e) : () => l[e] : e.bind(l, l);
  let i;
  he(t) ? i = t : (i = t.handler, n = t);
  const s = gl(this), a = ci(o, i.bind(l), n);
  return s(), a;
}
function da(e, t) {
  const n = t.split(".");
  return () => {
    let l = e;
    for (let o = 0; o < n.length && l; o++)
      l = l[n[o]];
    return l;
  };
}
const Kt = /* @__PURE__ */ new WeakMap(), fa = /* @__PURE__ */ Symbol("_vte"), pa = (e) => e.__isTeleport, sn = (e) => e && (e.disabled || e.disabled === ""), xu = (e) => e && (e.defer || e.defer === ""), Di = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Pi = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ro = (e, t) => {
  const n = e && e.to;
  return Ie(n) ? t ? t(n) : null : n;
}, Cu = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, l, o, i, s, a, r, d) {
    const {
      mc: u,
      pc: f,
      pbc: p,
      o: { insert: g, querySelector: m, createText: _, createComment: A, parentNode: x }
    } = d, S = sn(t.props);
    let { dynamicChildren: k } = t;
    const v = (T, B, O) => {
      T.shapeFlag & 16 && u(
        T.children,
        B,
        O,
        o,
        i,
        s,
        a,
        r
      );
    }, y = (T = t) => {
      const B = sn(T.props), O = T.target = Ro(T.props, m), E = To(O, T, _, g);
      O && (s !== "svg" && Di(O) ? s = "svg" : s !== "mathml" && Pi(O) && (s = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(O), B || (v(T, O, E), Gn(T, !1)));
    }, w = (T) => {
      const B = () => {
        if (Kt.get(T) === B) {
          if (Kt.delete(T), sn(T.props)) {
            const O = x(T.el) || n;
            v(T, O, T.anchor), Gn(T, !0);
          }
          y(T);
        }
      };
      Kt.set(T, B), Ye(B, i);
    };
    if (e == null) {
      const T = t.el = _(""), B = t.anchor = _("");
      if (g(T, n, l), g(B, n, l), xu(t.props) || i && i.pendingBranch) {
        w(t);
        return;
      }
      S && (v(t, n, B), Gn(t, !0)), y();
    } else {
      t.el = e.el;
      const T = t.anchor = e.anchor, B = Kt.get(e);
      if (B) {
        B.flags |= 8, Kt.delete(e), w(t);
        return;
      }
      t.targetStart = e.targetStart;
      const O = t.target = e.target, E = t.targetAnchor = e.targetAnchor, K = sn(e.props), F = K ? n : O, V = K ? T : E;
      if (s === "svg" || Di(O) ? s = "svg" : (s === "mathml" || Pi(O)) && (s = "mathml"), k ? (p(
        e.dynamicChildren,
        k,
        F,
        o,
        i,
        s,
        a
      ), mi(e, t, !0)) : r || f(
        e,
        t,
        F,
        V,
        o,
        i,
        s,
        a,
        !1
      ), S)
        K ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : wl(
          t,
          n,
          T,
          d,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const H = Ro(t.props, m);
        H && (t.target = H, wl(
          t,
          H,
          null,
          d,
          0
        ));
      } else K && wl(
        t,
        O,
        E,
        d,
        1
      );
      Gn(t, S);
    }
  },
  remove(e, t, n, { um: l, o: { remove: o } }, i) {
    const {
      shapeFlag: s,
      children: a,
      anchor: r,
      targetStart: d,
      targetAnchor: u,
      target: f,
      props: p
    } = e, g = sn(p), m = i || !g, _ = Kt.get(e);
    if (_ && (_.flags |= 8, Kt.delete(e)), f && (o(d), o(u)), i && o(r), !_ && (g || f) && s & 16)
      for (let A = 0; A < a.length; A++) {
        const x = a[A];
        l(
          x,
          t,
          n,
          m,
          !!x.dynamicChildren
        );
      }
  },
  move: wl,
  hydrate: Au
};
function wl(e, t, n, { o: { insert: l }, m: o }, i = 2) {
  i === 0 && l(e.targetAnchor, t, n);
  const { el: s, anchor: a, shapeFlag: r, children: d, props: u } = e, f = i === 2;
  if (f && l(s, t, n), !Kt.has(e) && (!f || sn(u)) && r & 16)
    for (let p = 0; p < d.length; p++)
      o(
        d[p],
        t,
        n,
        2
      );
  f && l(a, t, n);
}
function Au(e, t, n, l, o, i, {
  o: { nextSibling: s, parentNode: a, querySelector: r, insert: d, createText: u }
}, f) {
  function p(A, x) {
    let S = x;
    for (; S; ) {
      if (S && S.nodeType === 8) {
        if (S.data === "teleport start anchor")
          t.targetStart = S;
        else if (S.data === "teleport anchor") {
          t.targetAnchor = S, A._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      S = s(S);
    }
  }
  function g(A, x) {
    x.anchor = f(
      s(A),
      x,
      a(A),
      n,
      l,
      o,
      i
    );
  }
  const m = t.target = Ro(
    t.props,
    r
  ), _ = sn(t.props);
  if (m) {
    const A = m._lpa || m.firstChild;
    t.shapeFlag & 16 && (_ ? (g(e, t), p(m, A), t.targetAnchor || To(
      m,
      t,
      u,
      d,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      a(e) === m ? e : null
    )) : (t.anchor = s(e), p(m, A), t.targetAnchor || To(m, t, u, d), f(
      A && s(A),
      t,
      m,
      n,
      l,
      o,
      i
    ))), Gn(t, _);
  } else _ && t.shapeFlag & 16 && (g(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const ma = Cu;
function Gn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let l, o;
    for (t ? (l = e.el, o = e.anchor) : (l = e.targetStart, o = e.targetAnchor); l && l !== o; )
      l.nodeType === 1 && l.setAttribute("data-v-owner", n.uid), l = l.nextSibling;
    n.ut();
  }
}
function To(e, t, n, l, o = null) {
  const i = t.targetStart = n(""), s = t.targetAnchor = n("");
  return i[fa] = s, e && (l(i, e, o), l(s, e, o)), s;
}
const ut = /* @__PURE__ */ Symbol("_leaveCb"), $n = /* @__PURE__ */ Symbol("_enterCb");
function ku() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return hn(() => {
    e.isMounted = !0;
  }), Tn(() => {
    e.isUnmounting = !0;
  }), e;
}
const rt = [Function, Array], ha = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: rt,
  onEnter: rt,
  onAfterEnter: rt,
  onEnterCancelled: rt,
  // leave
  onBeforeLeave: rt,
  onLeave: rt,
  onAfterLeave: rt,
  onLeaveCancelled: rt,
  // appear
  onBeforeAppear: rt,
  onAppear: rt,
  onAfterAppear: rt,
  onAppearCancelled: rt
}, ga = (e) => {
  const t = e.subTree;
  return t.component ? ga(t.component) : t;
}, Fu = {
  name: "BaseTransition",
  props: ha,
  setup(e, { slots: t }) {
    const n = co(), l = ku();
    return () => {
      const o = t.default && va(t.default(), !0), i = o && o.length ? _a(o) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? ne() : void 0
      );
      if (!i)
        return;
      const s = /* @__PURE__ */ ye(e), { mode: a } = s;
      if (l.isLeaving)
        return vo(i);
      const r = Ni(i);
      if (!r)
        return vo(i);
      let d = Eo(
        r,
        s,
        l,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (f) => d = f
      );
      r.type !== ze && al(r, d);
      let u = n.subTree && Ni(n.subTree);
      if (u && u.type !== ze && !an(u, r) && ga(n).type !== ze) {
        let f = Eo(
          u,
          s,
          l,
          n
        );
        if (al(u, f), a === "out-in" && r.type !== ze)
          return l.isLeaving = !0, f.afterLeave = () => {
            l.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, u = void 0;
          }, vo(i);
        a === "in-out" && r.type !== ze ? f.delayLeave = (p, g, m) => {
          const _ = ba(
            l,
            u
          );
          _[String(u.key)] = u, p[ut] = () => {
            g(), p[ut] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            m(), delete d.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return i;
    };
  }
};
function _a(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ze) {
        t = n;
        break;
      }
  }
  return t;
}
const Mu = Fu;
function ba(e, t) {
  const { leavingVNodes: n } = e;
  let l = n.get(t.type);
  return l || (l = /* @__PURE__ */ Object.create(null), n.set(t.type, l)), l;
}
function Eo(e, t, n, l, o) {
  const {
    appear: i,
    mode: s,
    persisted: a = !1,
    onBeforeEnter: r,
    onEnter: d,
    onAfterEnter: u,
    onEnterCancelled: f,
    onBeforeLeave: p,
    onLeave: g,
    onAfterLeave: m,
    onLeaveCancelled: _,
    onBeforeAppear: A,
    onAppear: x,
    onAfterAppear: S,
    onAppearCancelled: k
  } = t, v = String(e.key), y = ba(n, e), w = (O, E) => {
    O && ft(
      O,
      l,
      9,
      E
    );
  }, T = (O, E) => {
    const K = E[1];
    w(O, E), re(O) ? O.every((F) => F.length <= 1) && K() : O.length <= 1 && K();
  }, B = {
    mode: s,
    persisted: a,
    beforeEnter(O) {
      let E = r;
      if (!n.isMounted)
        if (i)
          E = A || r;
        else
          return;
      O[ut] && O[ut](
        !0
        /* cancelled */
      );
      const K = y[v];
      K && an(e, K) && K.el[ut] && K.el[ut](), w(E, [O]);
    },
    enter(O) {
      if (y[v] === e) return;
      let E = d, K = u, F = f;
      if (!n.isMounted)
        if (i)
          E = x || d, K = S || u, F = k || f;
        else
          return;
      let V = !1;
      O[$n] = (N) => {
        V || (V = !0, N ? w(F, [O]) : w(K, [O]), B.delayedLeave && B.delayedLeave(), O[$n] = void 0);
      };
      const H = O[$n].bind(null, !1);
      E ? T(E, [O, H]) : H();
    },
    leave(O, E) {
      const K = String(e.key);
      if (O[$n] && O[$n](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return E();
      w(p, [O]);
      let F = !1;
      O[ut] = (H) => {
        F || (F = !0, E(), H ? w(_, [O]) : w(m, [O]), O[ut] = void 0, y[K] === e && delete y[K]);
      };
      const V = O[ut].bind(null, !1);
      y[K] = e, g ? T(g, [O, V]) : V();
    },
    clone(O) {
      const E = Eo(
        O,
        t,
        n,
        l,
        o
      );
      return o && o(E), E;
    }
  };
  return B;
}
function vo(e) {
  if (hl(e))
    return e = Qt(e), e.children = null, e;
}
function Ni(e) {
  if (!hl(e))
    return pa(e.type) && e.children ? _a(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && he(n.default))
      return n.default();
  }
}
function al(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, al(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function va(e, t = !1, n) {
  let l = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let s = e[i];
    const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : i);
    s.type === fe ? (s.patchFlag & 128 && o++, l = l.concat(
      va(s.children, t, a)
    )) : (t || s.type !== ze) && l.push(a != null ? Qt(s, { key: a }) : s);
  }
  if (o > 1)
    for (let i = 0; i < l.length; i++)
      l[i].patchFlag = -2;
  return l;
}
// @__NO_SIDE_EFFECTS__
function we(e, t) {
  return he(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Te({ name: e.name }, t, { setup: e })
  ) : e;
}
function di(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ri(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const El = /* @__PURE__ */ new WeakMap();
function Qn(e, t, n, l, o = !1) {
  if (re(e)) {
    e.forEach(
      (_, A) => Qn(
        _,
        t && (re(t) ? t[A] : t),
        n,
        l,
        o
      )
    );
    return;
  }
  if (Fn(l) && !o) {
    l.shapeFlag & 512 && l.type.__asyncResolved && l.component.subTree.component && Qn(e, t, n, l.component.subTree);
    return;
  }
  const i = l.shapeFlag & 4 ? fo(l.component) : l.el, s = o ? null : i, { i: a, r } = e, d = t && t.r, u = a.refs === Se ? a.refs = {} : a.refs, f = a.setupState, p = /* @__PURE__ */ ye(f), g = f === Se ? Rs : (_) => Ri(u, _) ? !1 : Ae(p, _), m = (_, A) => !(A && Ri(u, A));
  if (d != null && d !== r) {
    if (Ti(t), Ie(d))
      u[d] = null, g(d) && (f[d] = null);
    else if (/* @__PURE__ */ se(d)) {
      const _ = t;
      m(d, _.k) && (d.value = null), _.k && (u[_.k] = null);
    }
  }
  if (he(r))
    pl(r, a, 12, [s, u]);
  else {
    const _ = Ie(r), A = /* @__PURE__ */ se(r);
    if (_ || A) {
      const x = () => {
        if (e.f) {
          const S = _ ? g(r) ? f[r] : u[r] : m() || !e.k ? r.value : u[e.k];
          if (o)
            re(S) && ni(S, i);
          else if (re(S))
            S.includes(i) || S.push(i);
          else if (_)
            u[r] = [i], g(r) && (f[r] = u[r]);
          else {
            const k = [i];
            m(r, e.k) && (r.value = k), e.k && (u[e.k] = k);
          }
        } else _ ? (u[r] = s, g(r) && (f[r] = s)) : A && (m(r, e.k) && (r.value = s), e.k && (u[e.k] = s));
      };
      if (s) {
        const S = () => {
          x(), El.delete(e);
        };
        S.id = -1, El.set(e, S), Ye(S, n);
      } else
        Ti(e), x();
    }
  }
}
function Ti(e) {
  const t = El.get(e);
  t && (t.flags |= 8, El.delete(e));
}
const Ei = (e) => e.nodeType === 8;
no().requestIdleCallback;
no().cancelIdleCallback;
function Lu(e, t) {
  if (Ei(e) && e.data === "[") {
    let n = 1, l = e.nextSibling;
    for (; l; ) {
      if (l.nodeType === 1) {
        if (t(l) === !1)
          break;
      } else if (Ei(l))
        if (l.data === "]") {
          if (--n === 0) break;
        } else l.data === "[" && n++;
      l = l.nextSibling;
    }
  } else
    t(e);
}
const Fn = (e) => !!e.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function ht(e) {
  he(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: l,
    delay: o = 200,
    hydrate: i,
    timeout: s,
    // undefined = never times out
    suspensible: a = !0,
    onError: r
  } = e;
  let d = null, u, f = 0;
  const p = () => (f++, d = null, g()), g = () => {
    let m;
    return d || (m = d = t().catch((_) => {
      if (_ = _ instanceof Error ? _ : new Error(String(_)), r)
        return new Promise((A, x) => {
          r(_, () => A(p()), () => x(_), f + 1);
        });
      throw _;
    }).then((_) => m !== d && d ? d : (_ && (_.__esModule || _[Symbol.toStringTag] === "Module") && (_ = _.default), u = _, _)));
  };
  return /* @__PURE__ */ we({
    name: "AsyncComponentWrapper",
    __asyncLoader: g,
    __asyncHydrate(m, _, A) {
      const x = m.isConnected;
      let S = !1;
      (_.bu || (_.bu = [])).push(() => S = !0);
      const k = () => {
        S || !m.parentNode || x && !m.isConnected || A();
      }, v = i ? () => {
        const y = i(
          k,
          (w) => Lu(m, w)
        );
        y && (_.bum || (_.bum = [])).push(y);
      } : k;
      u ? v() : g().then(() => !_.isUnmounted && v());
    },
    get __asyncResolved() {
      return u;
    },
    setup() {
      const m = Ue;
      if (di(m), u)
        return () => Sl(u, m);
      const _ = (y) => {
        d = null, ml(
          y,
          m,
          13,
          !l
        );
      };
      if (a && m.suspense || Nn)
        return g().then((y) => () => Sl(y, m)).catch((y) => (_(y), () => l ? R(l, {
          error: y
        }) : null));
      const A = /* @__PURE__ */ ce(!1), x = /* @__PURE__ */ ce(), S = /* @__PURE__ */ ce(!!o);
      let k, v;
      return ao(() => {
        k != null && clearTimeout(k), v != null && clearTimeout(v);
      }), o && (v = setTimeout(() => {
        m.isUnmounted || (S.value = !1);
      }, o)), s != null && (k = setTimeout(() => {
        if (!m.isUnmounted && !A.value && !x.value) {
          const y = new Error(
            `Async component timed out after ${s}ms.`
          );
          _(y), x.value = y;
        }
      }, s)), g().then(() => {
        m.isUnmounted || (A.value = !0, m.parent && hl(m.parent.vnode) && m.parent.update());
      }).catch((y) => {
        if (m.isUnmounted) {
          d = null;
          return;
        }
        _(y), x.value = y;
      }), () => {
        if (A.value && u)
          return Sl(u, m);
        if (x.value && l)
          return R(l, {
            error: x.value
          });
        if (n && !S.value)
          return Sl(
            n,
            m
          );
      };
    }
  });
}
function Sl(e, t) {
  const { ref: n, props: l, children: o, ce: i } = t.vnode, s = R(e, l, o);
  return s.ref = n, s.ce = i, delete t.vnode.ce, s;
}
const hl = (e) => e.type.__isKeepAlive;
function Iu(e, t) {
  ya(e, "a", t);
}
function Du(e, t) {
  ya(e, "da", t);
}
function ya(e, t, n = Ue) {
  const l = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (so(t, l, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      hl(o.parent.vnode) && Pu(l, t, n, o), o = o.parent;
  }
}
function Pu(e, t, n, l) {
  const o = so(
    t,
    e,
    l,
    !0
    /* prepend */
  );
  ao(() => {
    ni(l[t], o);
  }, n);
}
function so(e, t, n = Ue, l = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
      Vt();
      const a = gl(n), r = ft(t, n, e, s);
      return a(), Ot(), r;
    });
    return l ? o.unshift(i) : o.push(i), i;
  }
}
const Wt = (e) => (t, n = Ue) => {
  (!Nn || e === "sp") && so(e, (...l) => t(...l), n);
}, Nu = Wt("bm"), hn = Wt("m"), Ru = Wt(
  "bu"
), Tu = Wt("u"), Tn = Wt(
  "bum"
), ao = Wt("um"), Eu = Wt(
  "sp"
), Vu = Wt("rtg"), Ou = Wt("rtc");
function $u(e, t = Ue) {
  so("ec", e, t);
}
const Bu = "components", wa = /* @__PURE__ */ Symbol.for("v-ndc");
function Hu(e) {
  return Ie(e) ? Uu(Bu, e, !1) || e : e || wa;
}
function Uu(e, t, n = !0, l = !1) {
  const o = Ge || Ue;
  if (o) {
    const i = o.type;
    {
      const a = Ac(
        i,
        !1
      );
      if (a && (a === t || a === Ke(t) || a === eo(Ke(t))))
        return i;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Vi(o[e] || i[e], t) || // global registration
      Vi(o.appContext[e], t)
    );
    return !s && l ? i : s;
  }
}
function Vi(e, t) {
  return e && (e[t] || e[Ke(t)] || e[eo(Ke(t))]);
}
function Ne(e, t, n, l) {
  let o;
  const i = n, s = re(e);
  if (s || Ie(e)) {
    const a = s && /* @__PURE__ */ Tt(e);
    let r = !1, d = !1;
    a && (r = !/* @__PURE__ */ it(e), d = /* @__PURE__ */ $t(e), e = oo(e)), o = new Array(e.length);
    for (let u = 0, f = e.length; u < f; u++)
      o[u] = t(
        r ? d ? Pn(mt(e[u])) : mt(e[u]) : e[u],
        u,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let a = 0; a < e; a++)
      o[a] = t(a + 1, a, void 0, i);
  } else if (ke(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (a, r) => t(a, r, void 0, i)
      );
    else {
      const a = Object.keys(e);
      o = new Array(a.length);
      for (let r = 0, d = a.length; r < d; r++) {
        const u = a[r];
        o[r] = t(e[u], u, r, i);
      }
    }
  else
    o = [];
  return o;
}
function Gu(e, t, n = {}, l, o, i) {
  if (Ge.ce || Ge.parent && Fn(Ge.parent) && Ge.parent.ce) {
    const d = n, u = Object.keys(d).length > 0;
    return C(), Ce(
      fe,
      null,
      [R("slot", d, l)],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const a = Et.length;
  C();
  let r;
  try {
    const d = s && Sa(s(n)), u = n.key || i || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    d && d.key;
    r = Ce(
      fe,
      {
        key: (u && !at(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!d && l ? "_fb" : "")
      },
      d || (l ? l() : []),
      d && e._ === 1 ? 64 : -2
    );
  } catch (d) {
    for (let u = Et.length; u > a; u--) hi();
    throw d;
  } finally {
    s && s._c && (s._d = !0);
  }
  return r;
}
function Sa(e) {
  return e.some((t) => ul(t) ? !(t.type === ze || t.type === fe && !Sa(t.children)) : !0) ? e : null;
}
const Vo = (e) => e ? Ua(e) ? fo(e) : Vo(e.parent) : null, Zn = (
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
    $parent: (e) => Vo(e.parent),
    $root: (e) => Vo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ca(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ui(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Rn.bind(e.proxy)),
    $watch: (e) => Su.bind(e)
  })
), yo = (e, t) => e !== Se && !e.__isScriptSetup && Ae(e, t), Wu = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: l, data: o, props: i, accessCache: s, type: a, appContext: r } = e;
    if (t[0] !== "$") {
      const p = s[t];
      if (p !== void 0)
        switch (p) {
          case 1:
            return l[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (yo(l, t))
          return s[t] = 1, l[t];
        if (o !== Se && Ae(o, t))
          return s[t] = 2, o[t];
        if (Ae(i, t))
          return s[t] = 3, i[t];
        if (n !== Se && Ae(n, t))
          return s[t] = 4, n[t];
        Oo && (s[t] = 0);
      }
    }
    const d = Zn[t];
    let u, f;
    if (d)
      return t === "$attrs" && We(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = a.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Se && Ae(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      f = r.config.globalProperties, Ae(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: l, setupState: o, ctx: i } = e;
    return yo(o, t) ? (o[t] = n, !0) : l !== Se && Ae(l, t) ? (l[t] = n, !0) : Ae(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: l, appContext: o, props: i, type: s }
  }, a) {
    let r;
    return !!(n[a] || e !== Se && a[0] !== "$" && Ae(e, a) || yo(t, a) || Ae(i, a) || Ae(l, a) || Ae(Zn, a) || Ae(o.config.globalProperties, a) || (r = s.__cssModules) && r[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ae(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Vl(e) {
  return re(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function qe(e, t) {
  return !e || !t ? e || t : re(e) && re(t) ? e.concat(t) : Te({}, Vl(e), Vl(t));
}
let Oo = !0;
function ju(e) {
  const t = Ca(e), n = e.proxy, l = e.ctx;
  Oo = !1, t.beforeCreate && Oi(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: s,
    watch: a,
    provide: r,
    inject: d,
    // lifecycle
    created: u,
    beforeMount: f,
    mounted: p,
    beforeUpdate: g,
    updated: m,
    activated: _,
    deactivated: A,
    beforeDestroy: x,
    beforeUnmount: S,
    destroyed: k,
    unmounted: v,
    render: y,
    renderTracked: w,
    renderTriggered: T,
    errorCaptured: B,
    serverPrefetch: O,
    // public API
    expose: E,
    inheritAttrs: K,
    // assets
    components: F,
    directives: V,
    filters: H
  } = t;
  if (d && zu(d, l, null), s)
    for (const I in s) {
      const L = s[I];
      he(L) && (l[I] = L.bind(n));
    }
  if (o) {
    const I = o.call(n, n);
    ke(I) && (e.data = /* @__PURE__ */ Gt(I));
  }
  if (Oo = !0, i)
    for (const I in i) {
      const L = i[I], U = he(L) ? L.bind(n, n) : he(L.get) ? L.get.bind(n, n) : kt, ge = !he(L) && he(L.set) ? L.set.bind(n) : kt, De = q({
        get: U,
        set: ge
      });
      Object.defineProperty(l, I, {
        enumerable: !0,
        configurable: !0,
        get: () => De.value,
        set: (ae) => De.value = ae
      });
    }
  if (a)
    for (const I in a)
      xa(a[I], l, n, I);
  if (r) {
    const I = he(r) ? r.call(n) : r;
    Reflect.ownKeys(I).forEach((L) => {
      _u(L, I[L]);
    });
  }
  u && Oi(u, e, "c");
  function $(I, L) {
    re(L) ? L.forEach((U) => I(U.bind(n))) : L && I(L.bind(n));
  }
  if ($(Nu, f), $(hn, p), $(Ru, g), $(Tu, m), $(Iu, _), $(Du, A), $($u, B), $(Ou, w), $(Vu, T), $(Tn, S), $(ao, v), $(Eu, O), re(E))
    if (E.length) {
      const I = e.exposed || (e.exposed = {});
      E.forEach((L) => {
        Object.defineProperty(I, L, {
          get: () => n[L],
          set: (U) => n[L] = U,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  y && e.render === kt && (e.render = y), K != null && (e.inheritAttrs = K), F && (e.components = F), V && (e.directives = V), O && di(e);
}
function zu(e, t, n = kt) {
  re(e) && (e = $o(e));
  for (const l in e) {
    const o = e[l];
    let i;
    ke(o) ? "default" in o ? i = Jn(
      o.from || l,
      o.default,
      !0
    ) : i = Jn(o.from || l) : i = Jn(o), /* @__PURE__ */ se(i) ? Object.defineProperty(t, l, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (s) => i.value = s
    }) : t[l] = i;
  }
}
function Oi(e, t, n) {
  ft(
    re(e) ? e.map((l) => l.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function xa(e, t, n, l) {
  let o = l.includes(".") ? da(n, l) : () => n[l];
  if (Ie(e)) {
    const i = t[e];
    he(i) && $e(o, i);
  } else if (he(e))
    $e(o, e.bind(n));
  else if (ke(e))
    if (re(e))
      e.forEach((i) => xa(i, t, n, l));
    else {
      const i = he(e.handler) ? e.handler.bind(n) : t[e.handler];
      he(i) && $e(o, i, e);
    }
}
function Ca(e) {
  const t = e.type, { mixins: n, extends: l } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = i.get(t);
  let r;
  return a ? r = a : !o.length && !n && !l ? r = t : (r = {}, o.length && o.forEach(
    (d) => Ol(r, d, s, !0)
  ), Ol(r, t, s)), ke(t) && i.set(t, r), r;
}
function Ol(e, t, n, l = !1) {
  const { mixins: o, extends: i } = t;
  i && Ol(e, i, n, !0), o && o.forEach(
    (s) => Ol(e, s, n, !0)
  );
  for (const s in t)
    if (!(l && s === "expose")) {
      const a = Ku[s] || n && n[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const Ku = {
  data: $i,
  props: Bi,
  emits: Bi,
  // objects
  methods: Wn,
  computed: Wn,
  // lifecycle
  beforeCreate: Xe,
  created: Xe,
  beforeMount: Xe,
  mounted: Xe,
  beforeUpdate: Xe,
  updated: Xe,
  beforeDestroy: Xe,
  beforeUnmount: Xe,
  destroyed: Xe,
  unmounted: Xe,
  activated: Xe,
  deactivated: Xe,
  errorCaptured: Xe,
  serverPrefetch: Xe,
  // assets
  components: Wn,
  directives: Wn,
  // watch
  watch: Xu,
  // provide / inject
  provide: $i,
  inject: qu
};
function $i(e, t) {
  return t ? e ? function() {
    return Te(
      he(e) ? e.call(this, this) : e,
      he(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function qu(e, t) {
  return Wn($o(e), $o(t));
}
function $o(e) {
  if (re(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Xe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Wn(e, t) {
  return e ? Te(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Bi(e, t) {
  return e ? re(e) && re(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Te(
    /* @__PURE__ */ Object.create(null),
    Vl(e),
    Vl(t ?? {})
  ) : t;
}
function Xu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Te(/* @__PURE__ */ Object.create(null), e);
  for (const l in t)
    n[l] = Xe(e[l], t[l]);
  return n;
}
function Aa() {
  return {
    app: null,
    config: {
      isNativeTag: Rs,
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
let Yu = 0;
function Ju(e, t) {
  return function(l, o = null) {
    he(l) || (l = Te({}, l)), o != null && !ke(o) && (o = null);
    const i = Aa(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let r = !1;
    const d = i.app = {
      _uid: Yu++,
      _component: l,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Fc,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...f) {
        return s.has(u) || (u && he(u.install) ? (s.add(u), u.install(d, ...f)) : he(u) && (s.add(u), u(d, ...f))), d;
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), d;
      },
      component(u, f) {
        return f ? (i.components[u] = f, d) : i.components[u];
      },
      directive(u, f) {
        return f ? (i.directives[u] = f, d) : i.directives[u];
      },
      mount(u, f, p) {
        if (!r) {
          const g = d._ceVNode || R(l, o);
          return g.appContext = i, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(g, u, p), r = !0, d._container = u, u.__vue_app__ = d, fo(g.component);
        }
      },
      onUnmount(u) {
        a.push(u);
      },
      unmount() {
        r && (ft(
          a,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, f) {
        return i.provides[u] = f, d;
      },
      runWithContext(u) {
        const f = pn;
        pn = d;
        try {
          return u();
        } finally {
          pn = f;
        }
      }
    };
    return d;
  };
}
let pn = null;
function nt(e, t, n = Se) {
  const l = co(), o = Ke(t), i = Ut(t), s = ka(e, o), a = su((r, d) => {
    let u, f = Se, p;
    return wu(() => {
      const g = e[o];
      He(u, g) && (u = g, d());
    }), {
      get() {
        return r(), n.get ? n.get(u) : u;
      },
      set(g) {
        const m = n.set ? n.set(g) : g;
        if (!He(m, u) && !(f !== Se && He(g, f)))
          return;
        const _ = l.vnode.props, A = !!(_ && // check if parent has passed v-model
        (t in _ || o in _ || i in _) && (`onUpdate:${t}` in _ || `onUpdate:${o}` in _ || `onUpdate:${i}` in _));
        A || (u = g, d()), l.emit(`update:${t}`, m), He(g, f) && (He(g, m) && !He(m, p) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        A && f !== Se && !He(m, u)) && d(), f = g, p = m;
      }
    };
  });
  return a[Symbol.iterator] = () => {
    let r = 0;
    return {
      next() {
        return r < 2 ? { value: r++ ? s || Se : a, done: !1 } : { done: !0 };
      }
    };
  }, a;
}
const ka = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ke(t)}Modifiers`] || e[`${Ut(t)}Modifiers`];
function Qu(e, t, ...n) {
  if (e.isUnmounted) return;
  const l = e.vnode.props || Se;
  let o = n;
  const i = t.startsWith("update:"), s = i && ka(l, t.slice(7));
  s && (s.trim && (o = n.map((u) => Ie(u) ? u.trim() : u)), s.number && (o = n.map(to)));
  let a, r = l[a = mo(t)] || // also try camelCase event handler (#2249)
  l[a = mo(Ke(t))];
  !r && i && (r = l[a = mo(Ut(t))]), r && ft(
    r,
    e,
    6,
    o
  );
  const d = l[a + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, ft(
      d,
      e,
      6,
      o
    );
  }
}
const Zu = /* @__PURE__ */ new WeakMap();
function Fa(e, t, n = !1) {
  const l = n ? Zu : t.emitsCache, o = l.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let s = {}, a = !1;
  if (!he(e)) {
    const r = (d) => {
      const u = Fa(d, t, !0);
      u && (a = !0, Te(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
  }
  return !i && !a ? (ke(e) && l.set(e, null), null) : (re(i) ? i.forEach((r) => s[r] = null) : Te(s, i), ke(e) && l.set(e, s), s);
}
function ro(e, t) {
  return !e || !Xl(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ae(e, t[0].toLowerCase() + t.slice(1)) || Ae(e, Ut(t)) || Ae(e, t));
}
function Hi(e) {
  const {
    type: t,
    vnode: n,
    proxy: l,
    withProxy: o,
    propsOptions: [i],
    slots: s,
    attrs: a,
    emit: r,
    render: d,
    renderCache: u,
    props: f,
    data: p,
    setupState: g,
    ctx: m,
    inheritAttrs: _
  } = e, A = Tl(e);
  let x, S;
  try {
    if (n.shapeFlag & 4) {
      const v = o || l, y = v;
      x = At(
        d.call(
          y,
          v,
          u,
          f,
          g,
          p,
          m
        )
      ), S = a;
    } else {
      const v = t;
      x = At(
        v.length > 1 ? v(
          f,
          { attrs: a, slots: s, emit: r }
        ) : v(
          f,
          null
        )
      ), S = t.props ? a : ec(a);
    }
  } catch (v) {
    Et.length = 0, ml(v, e, 1), x = R(ze);
  }
  let k = x;
  if (S && _ !== !1) {
    const v = Object.keys(S), { shapeFlag: y } = k;
    v.length && y & 7 && (i && v.some(Yl) && (S = tc(
      S,
      i
    )), k = Qt(k, S, !1, !0));
  }
  return n.dirs && (k = Qt(k, null, !1, !0), k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs), n.transition && al(k, n.transition), x = k, Tl(A), x;
}
const ec = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Xl(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, tc = (e, t) => {
  const n = {};
  for (const l in e)
    (!Yl(l) || !(l.slice(9) in t)) && (n[l] = e[l]);
  return n;
};
function nc(e, t, n) {
  const { props: l, children: o, component: i } = e, { props: s, children: a, patchFlag: r } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && r >= 0) {
    if (r & 1024)
      return !0;
    if (r & 16)
      return l ? Ui(l, s, d) : !!s;
    if (r & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const p = u[f];
        if (Ma(s, l, p) && !ro(d, p))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : l === s ? !1 : l ? s ? Ui(l, s, d) : !0 : !!s;
  return !1;
}
function Ui(e, t, n) {
  const l = Object.keys(t);
  if (l.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < l.length; o++) {
    const i = l[o];
    if (Ma(t, e, i) && !ro(n, i))
      return !0;
  }
  return !1;
}
function Ma(e, t, n) {
  const l = e[n], o = t[n];
  return n === "style" && ke(l) && ke(o) ? !fl(l, o) : l !== o;
}
function lc({ vnode: e, parent: t, suspense: n }, l) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = l, e = o), o === e)
      (e = t.vnode).el = l, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = l);
}
const La = {}, Ia = () => Object.create(La), Da = (e) => Object.getPrototypeOf(e) === La;
function oc(e, t, n, l = !1) {
  const o = {}, i = Ia();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Pa(e, t, o, i);
  for (const s in e.propsOptions[0])
    s in o || (o[s] = void 0);
  n ? e.props = l ? o : /* @__PURE__ */ tu(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function ic(e, t, n, l) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: s }
  } = e, a = /* @__PURE__ */ ye(o), [r] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (l || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let p = u[f];
        if (ro(e.emitsOptions, p))
          continue;
        const g = t[p];
        if (r)
          if (Ae(i, p))
            g !== i[p] && (i[p] = g, d = !0);
          else {
            const m = Ke(p);
            o[m] = Bo(
              r,
              a,
              m,
              g,
              e,
              !1
            );
          }
        else
          g !== i[p] && (i[p] = g, d = !0);
      }
    }
  } else {
    Pa(e, t, o, i) && (d = !0);
    let u;
    for (const f in a)
      (!t || // for camelCase
      !Ae(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Ut(f)) === f || !Ae(t, u))) && (r ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[f] = Bo(
        r,
        a,
        f,
        void 0,
        e,
        !0
      )) : delete o[f]);
    if (i !== a)
      for (const f in i)
        (!t || !Ae(t, f)) && (delete i[f], d = !0);
  }
  d && Nt(e.attrs, "set", "");
}
function Pa(e, t, n, l) {
  const [o, i] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let r in t) {
      if (qn(r))
        continue;
      const d = t[r];
      let u;
      o && Ae(o, u = Ke(r)) ? !i || !i.includes(u) ? n[u] = d : (a || (a = {}))[u] = d : ro(e.emitsOptions, r) || (!(r in l) || d !== l[r]) && (l[r] = d, s = !0);
    }
  if (i) {
    const r = /* @__PURE__ */ ye(n), d = a || Se;
    for (let u = 0; u < i.length; u++) {
      const f = i[u];
      n[f] = Bo(
        o,
        r,
        f,
        d[f],
        e,
        !Ae(d, f)
      );
    }
  }
  return s;
}
function Bo(e, t, n, l, o, i) {
  const s = e[n];
  if (s != null) {
    const a = Ae(s, "default");
    if (a && l === void 0) {
      const r = s.default;
      if (s.type !== Function && !s.skipFactory && he(r)) {
        const { propsDefaults: d } = o;
        if (n in d)
          l = d[n];
        else {
          const u = gl(o);
          l = d[n] = r.call(
            null,
            t
          ), u();
        }
      } else
        l = r;
      o.ce && o.ce._setProp(n, l);
    }
    s[
      0
      /* shouldCast */
    ] && (i && !a ? l = !1 : s[
      1
      /* shouldCastTrue */
    ] && (l === "" || l === Ut(n)) && (l = !0));
  }
  return l;
}
const sc = /* @__PURE__ */ new WeakMap();
function Na(e, t, n = !1) {
  const l = n ? sc : t.propsCache, o = l.get(e);
  if (o)
    return o;
  const i = e.props, s = {}, a = [];
  let r = !1;
  if (!he(e)) {
    const u = (f) => {
      r = !0;
      const [p, g] = Na(f, t, !0);
      Te(s, p), g && a.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !r)
    return ke(e) && l.set(e, Cn), Cn;
  if (re(i))
    for (let u = 0; u < i.length; u++) {
      const f = Ke(i[u]);
      Gi(f) && (s[f] = Se);
    }
  else if (i)
    for (const u in i) {
      const f = Ke(u);
      if (Gi(f)) {
        const p = i[u], g = s[f] = re(p) || he(p) ? { type: p } : Te({}, p), m = g.type;
        let _ = !1, A = !0;
        if (re(m))
          for (let x = 0; x < m.length; ++x) {
            const S = m[x], k = he(S) && S.name;
            if (k === "Boolean") {
              _ = !0;
              break;
            } else k === "String" && (A = !1);
          }
        else
          _ = he(m) && m.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = _, g[
          1
          /* shouldCastTrue */
        ] = A, (_ || Ae(g, "default")) && a.push(f);
      }
    }
  const d = [s, a];
  return ke(e) && l.set(e, d), d;
}
function Gi(e) {
  return e[0] !== "$" && !qn(e);
}
const fi = (e) => e === "_" || e === "_ctx" || e === "$stable", pi = (e) => re(e) ? e.map(At) : [At(e)], ac = (e, t, n) => {
  if (t._n)
    return t;
  const l = Jt((...o) => pi(t(...o)), n);
  return l._c = !1, l;
}, Ra = (e, t, n) => {
  const l = e._ctx;
  for (const o in e) {
    if (fi(o)) continue;
    const i = e[o];
    if (he(i))
      t[o] = ac(o, i, l);
    else if (i != null) {
      const s = pi(i);
      t[o] = () => s;
    }
  }
}, Ta = (e, t) => {
  const n = pi(t);
  e.slots.default = () => n;
}, Ea = (e, t, n) => {
  for (const l in t)
    (n || !fi(l)) && (e[l] = t[l]);
}, rc = (e, t, n) => {
  const l = e.slots = Ia();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Ea(l, t, n), n && Os(l, "_", o, !0)) : Ra(t, l);
  } else t && Ta(e, t);
}, uc = (e, t, n) => {
  const { vnode: l, slots: o } = e;
  let i = !0, s = Se;
  if (l.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? i = !1 : Ea(o, t, n) : (i = !t.$stable, Ra(t, o)), s = t;
  } else t && (Ta(e, t), s = { default: 1 });
  if (i)
    for (const a in o)
      !fi(a) && s[a] == null && delete o[a];
}, Ye = mc;
function cc(e) {
  return dc(e);
}
function dc(e, t) {
  const n = no();
  n.__VUE__ = !0;
  const {
    insert: l,
    remove: o,
    patchProp: i,
    createElement: s,
    createText: a,
    createComment: r,
    setText: d,
    setElementText: u,
    parentNode: f,
    nextSibling: p,
    setScopeId: g = kt,
    insertStaticContent: m
  } = e, _ = (h, b, P, z = null, j = null, G = null, ee = void 0, J = null, X = !!b.dynamicChildren) => {
    if (h === b)
      return;
    h && !an(h, b) && (z = gn(h), ae(h, j, G, !0), h = null), b.patchFlag === -2 && (X = !1, b.dynamicChildren = null);
    const { type: W, ref: de, shapeFlag: te } = b;
    switch (W) {
      case uo:
        A(h, b, P, z);
        break;
      case ze:
        x(h, b, P, z);
        break;
      case So:
        h == null && S(b, P, z, ee);
        break;
      case fe:
        F(
          h,
          b,
          P,
          z,
          j,
          G,
          ee,
          J,
          X
        );
        break;
      default:
        te & 1 ? y(
          h,
          b,
          P,
          z,
          j,
          G,
          ee,
          J,
          X
        ) : te & 6 ? V(
          h,
          b,
          P,
          z,
          j,
          G,
          ee,
          J,
          X
        ) : (te & 64 || te & 128) && W.process(
          h,
          b,
          P,
          z,
          j,
          G,
          ee,
          J,
          X,
          me
        );
    }
    de != null && j ? Qn(de, h && h.ref, G, b || h, !b) : de == null && h && h.ref != null && Qn(h.ref, null, G, h, !0);
  }, A = (h, b, P, z) => {
    if (h == null)
      l(
        b.el = a(b.children),
        P,
        z
      );
    else {
      const j = b.el = h.el;
      b.children !== h.children && d(j, b.children);
    }
  }, x = (h, b, P, z) => {
    h == null ? l(
      b.el = r(b.children || ""),
      P,
      z
    ) : b.el = h.el;
  }, S = (h, b, P, z) => {
    [h.el, h.anchor] = m(
      h.children,
      b,
      P,
      z,
      h.el,
      h.anchor
    );
  }, k = ({ el: h, anchor: b }, P, z) => {
    let j;
    for (; h && h !== b; )
      j = p(h), l(h, P, z), h = j;
    l(b, P, z);
  }, v = ({ el: h, anchor: b }) => {
    let P;
    for (; h && h !== b; )
      P = p(h), o(h), h = P;
    o(b);
  }, y = (h, b, P, z, j, G, ee, J, X) => {
    if (b.type === "svg" ? ee = "svg" : b.type === "math" && (ee = "mathml"), h == null)
      w(
        b,
        P,
        z,
        j,
        G,
        ee,
        J,
        X
      );
    else {
      const W = h.el && h.el._isVueCE ? h.el : null;
      try {
        W && W._beginPatch(), O(
          h,
          b,
          j,
          G,
          ee,
          J,
          X
        );
      } finally {
        W && W._endPatch();
      }
    }
  }, w = (h, b, P, z, j, G, ee, J) => {
    let X, W;
    const { props: de, shapeFlag: te, transition: ue, dirs: pe } = h;
    if (X = h.el = s(
      h.type,
      G,
      de && de.is,
      de
    ), te & 8 ? u(X, h.children) : te & 16 && B(
      h.children,
      X,
      null,
      z,
      j,
      wo(h, G),
      ee,
      J
    ), pe && en(h, null, z, "created"), T(X, h, h.scopeId, ee, z), de) {
      for (const Me in de)
        Me !== "value" && !qn(Me) && i(X, Me, null, de[Me], G, z);
      "value" in de && i(X, "value", null, de.value, G), (W = de.onVnodeBeforeMount) && St(W, z, h);
    }
    pe && en(h, null, z, "beforeMount");
    const ve = fc(j, ue);
    ve && ue.beforeEnter(X), l(X, b, P), ((W = de && de.onVnodeMounted) || ve || pe) && Ye(() => {
      try {
        W && St(W, z, h), ve && ue.enter(X), pe && en(h, null, z, "mounted");
      } finally {
      }
    }, j);
  }, T = (h, b, P, z, j) => {
    if (P && g(h, P), z)
      for (let G = 0; G < z.length; G++)
        g(h, z[G]);
    if (j) {
      let G = j.subTree;
      if (b === G || $a(G.type) && (G.ssContent === b || G.ssFallback === b)) {
        const ee = j.vnode;
        T(
          h,
          ee,
          ee.scopeId,
          ee.slotScopeIds,
          j.parent
        );
      }
    }
  }, B = (h, b, P, z, j, G, ee, J, X = 0) => {
    for (let W = X; W < h.length; W++) {
      const de = h[W] = J ? It(h[W]) : At(h[W]);
      _(
        null,
        de,
        b,
        P,
        z,
        j,
        G,
        ee,
        J
      );
    }
  }, O = (h, b, P, z, j, G, ee) => {
    const J = b.el = h.el;
    let { patchFlag: X, dynamicChildren: W, dirs: de } = b;
    X |= h.patchFlag & 16;
    const te = h.props || Se, ue = b.props || Se;
    let pe;
    if (P && tn(P, !1), (pe = ue.onVnodeBeforeUpdate) && St(pe, P, b, h), de && en(b, h, P, "beforeUpdate"), P && tn(P, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    W && (!h.dynamicChildren || h.dynamicChildren.length !== W.length) && (X = 0, ee = !1, W = null), (te.innerHTML && ue.innerHTML == null || te.textContent && ue.textContent == null) && u(J, ""), W ? E(
      h.dynamicChildren,
      W,
      J,
      P,
      z,
      wo(b, j),
      G
    ) : ee || L(
      h,
      b,
      J,
      null,
      P,
      z,
      wo(b, j),
      G,
      !1
    ), X > 0) {
      if (X & 16)
        K(J, te, ue, P, j);
      else if (X & 2 && te.class !== ue.class && i(J, "class", null, ue.class, j), X & 4 && i(J, "style", te.style, ue.style, j), X & 8) {
        const ve = b.dynamicProps;
        for (let Me = 0; Me < ve.length; Me++) {
          const Fe = ve[Me], Re = te[Fe], Be = ue[Fe];
          (Be !== Re || Fe === "value") && i(J, Fe, Re, Be, j, P);
        }
      }
      X & 1 && h.children !== b.children && u(J, b.children);
    } else !ee && W == null && K(J, te, ue, P, j);
    ((pe = ue.onVnodeUpdated) || de) && Ye(() => {
      pe && St(pe, P, b, h), de && en(b, h, P, "updated");
    }, z);
  }, E = (h, b, P, z, j, G, ee) => {
    for (let J = 0; J < b.length; J++) {
      const X = h[J], W = b[J], de = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        X.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (X.type === fe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !an(X, W) || // - In the case of a component, it could contain anything.
        X.shapeFlag & 198) ? f(X.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          P
        )
      );
      _(
        X,
        W,
        de,
        null,
        z,
        j,
        G,
        ee,
        !0
      );
    }
  }, K = (h, b, P, z, j) => {
    if (b !== P) {
      if (b !== Se)
        for (const G in b)
          !qn(G) && !(G in P) && i(
            h,
            G,
            b[G],
            null,
            j,
            z
          );
      for (const G in P) {
        if (qn(G)) continue;
        const ee = P[G], J = b[G];
        ee !== J && G !== "value" && i(h, G, J, ee, j, z);
      }
      "value" in P && i(h, "value", b.value, P.value, j);
    }
  }, F = (h, b, P, z, j, G, ee, J, X) => {
    const W = b.el = h ? h.el : a(""), de = b.anchor = h ? h.anchor : a("");
    let { patchFlag: te, dynamicChildren: ue, slotScopeIds: pe } = b;
    pe && (J = J ? J.concat(pe) : pe), h == null ? (l(W, P, z), l(de, P, z), B(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      P,
      de,
      j,
      G,
      ee,
      J,
      X
    )) : te > 0 && te & 64 && ue && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren && h.dynamicChildren.length === ue.length ? (E(
      h.dynamicChildren,
      ue,
      P,
      j,
      G,
      ee,
      J
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || j && b === j.subTree) && mi(
      h,
      b,
      !0
      /* shallow */
    )) : L(
      h,
      b,
      P,
      de,
      j,
      G,
      ee,
      J,
      X
    );
  }, V = (h, b, P, z, j, G, ee, J, X) => {
    b.slotScopeIds = J, h == null ? b.shapeFlag & 512 ? j.ctx.activate(
      b,
      P,
      z,
      ee,
      X
    ) : H(
      b,
      P,
      z,
      j,
      G,
      ee,
      X
    ) : N(h, b, X);
  }, H = (h, b, P, z, j, G, ee) => {
    const J = h.component = yc(
      h,
      z,
      j
    );
    if (hl(h) && (J.ctx.renderer = me), wc(J, !1, ee), J.asyncDep) {
      if (j && j.registerDep(J, $, ee), !h.el) {
        const X = J.subTree = R(ze);
        x(null, X, b, P), h.placeholder = X.el;
      }
    } else
      $(
        J,
        h,
        b,
        P,
        j,
        G,
        ee
      );
  }, N = (h, b, P) => {
    const z = b.component = h.component;
    if (nc(h, b, P))
      if (z.asyncDep && !z.asyncResolved) {
        I(z, b, P);
        return;
      } else
        z.next = b, z.update();
    else
      b.el = h.el, z.vnode = b;
  }, $ = (h, b, P, z, j, G, ee) => {
    const J = () => {
      if (h.isMounted) {
        let { next: te, bu: ue, u: pe, parent: ve, vnode: Me } = h;
        {
          const yt = Va(h);
          if (yt) {
            te && (te.el = Me.el, I(h, te, ee)), yt.asyncDep.then(() => {
              Ye(() => {
                h.isUnmounted || W();
              }, j);
            });
            return;
          }
        }
        let Fe = te, Re;
        tn(h, !1), te ? (te.el = Me.el, I(h, te, ee)) : te = Me, ue && kl(ue), (Re = te.props && te.props.onVnodeBeforeUpdate) && St(Re, ve, te, Me), tn(h, !0);
        const Be = Hi(h), vt = h.subTree;
        h.subTree = Be, _(
          vt,
          Be,
          // parent may have changed if it's in a teleport
          f(vt.el),
          // anchor may have changed if it's in a fragment
          gn(vt),
          h,
          j,
          G
        ), te.el = Be.el, Fe === null && lc(h, Be.el), pe && Ye(pe, j), (Re = te.props && te.props.onVnodeUpdated) && Ye(
          () => St(Re, ve, te, Me),
          j
        );
      } else {
        let te;
        const { el: ue, props: pe } = b, { bm: ve, m: Me, parent: Fe, root: Re, type: Be } = h, vt = Fn(b);
        tn(h, !1), ve && kl(ve), !vt && (te = pe && pe.onVnodeBeforeMount) && St(te, Fe, b), tn(h, !0);
        {
          Re.ce && Re.ce._hasShadowRoot() && Re.ce._injectChildStyle(
            Be,
            h.parent ? h.parent.type : void 0
          );
          const yt = h.subTree = Hi(h);
          _(
            null,
            yt,
            P,
            z,
            h,
            j,
            G
          ), b.el = yt.el;
        }
        if (Me && Ye(Me, j), !vt && (te = pe && pe.onVnodeMounted)) {
          const yt = b;
          Ye(
            () => St(te, Fe, yt),
            j
          );
        }
        (b.shapeFlag & 256 || Fe && Fn(Fe.vnode) && Fe.vnode.shapeFlag & 256) && h.a && Ye(h.a, j), h.isMounted = !0, b = P = z = null;
      }
    };
    h.scope.on();
    const X = h.effect = new js(J);
    h.scope.off();
    const W = h.update = X.run.bind(X), de = h.job = X.runIfDirty.bind(X);
    de.i = h, de.id = h.uid, X.scheduler = () => ui(de), tn(h, !0), W();
  }, I = (h, b, P) => {
    b.component = h;
    const z = h.vnode.props;
    h.vnode = b, h.next = null, ic(h, b.props, z, P), uc(h, b.children, P), Vt(), Ii(h), Ot();
  }, L = (h, b, P, z, j, G, ee, J, X = !1) => {
    const W = h && h.children, de = h ? h.shapeFlag : 0, te = b.children, { patchFlag: ue, shapeFlag: pe } = b;
    if (ue > 0) {
      if (ue & 128) {
        ge(
          W,
          te,
          P,
          z,
          j,
          G,
          ee,
          J,
          X
        );
        return;
      } else if (ue & 256) {
        U(
          W,
          te,
          P,
          z,
          j,
          G,
          ee,
          J,
          X
        );
        return;
      }
    }
    pe & 8 ? (de & 16 && Zt(W, j, G), te !== W && u(P, te)) : de & 16 ? pe & 16 ? ge(
      W,
      te,
      P,
      z,
      j,
      G,
      ee,
      J,
      X
    ) : Zt(W, j, G, !0) : (de & 8 && u(P, ""), pe & 16 && B(
      te,
      P,
      z,
      j,
      G,
      ee,
      J,
      X
    ));
  }, U = (h, b, P, z, j, G, ee, J, X) => {
    h = h || Cn, b = b || Cn;
    const W = h.length, de = b.length, te = Math.min(W, de);
    let ue;
    for (ue = 0; ue < te; ue++) {
      const pe = b[ue] = X ? It(b[ue]) : At(b[ue]);
      _(
        h[ue],
        pe,
        P,
        null,
        j,
        G,
        ee,
        J,
        X
      );
    }
    W > de ? Zt(
      h,
      j,
      G,
      !0,
      !1,
      te
    ) : B(
      b,
      P,
      z,
      j,
      G,
      ee,
      J,
      X,
      te
    );
  }, ge = (h, b, P, z, j, G, ee, J, X) => {
    let W = 0;
    const de = b.length;
    let te = h.length - 1, ue = de - 1;
    for (; W <= te && W <= ue; ) {
      const pe = h[W], ve = b[W] = X ? It(b[W]) : At(b[W]);
      if (an(pe, ve))
        _(
          pe,
          ve,
          P,
          null,
          j,
          G,
          ee,
          J,
          X
        );
      else
        break;
      W++;
    }
    for (; W <= te && W <= ue; ) {
      const pe = h[te], ve = b[ue] = X ? It(b[ue]) : At(b[ue]);
      if (an(pe, ve))
        _(
          pe,
          ve,
          P,
          null,
          j,
          G,
          ee,
          J,
          X
        );
      else
        break;
      te--, ue--;
    }
    if (W > te) {
      if (W <= ue) {
        const pe = ue + 1, ve = pe < de ? b[pe].el : z;
        for (; W <= ue; )
          _(
            null,
            b[W] = X ? It(b[W]) : At(b[W]),
            P,
            ve,
            j,
            G,
            ee,
            J,
            X
          ), W++;
      }
    } else if (W > ue)
      for (; W <= te; )
        ae(h[W], j, G, !0), W++;
    else {
      const pe = W, ve = W, Me = /* @__PURE__ */ new Map();
      for (W = ve; W <= ue; W++) {
        const lt = b[W] = X ? It(b[W]) : At(b[W]);
        lt.key != null && Me.set(lt.key, W);
      }
      let Fe, Re = 0;
      const Be = ue - ve + 1;
      let vt = !1, yt = 0;
      const Vn = new Array(Be);
      for (W = 0; W < Be; W++) Vn[W] = 0;
      for (W = pe; W <= te; W++) {
        const lt = h[W];
        if (Re >= Be) {
          ae(lt, j, G, !0);
          continue;
        }
        let wt;
        if (lt.key != null)
          wt = Me.get(lt.key);
        else
          for (Fe = ve; Fe <= ue; Fe++)
            if (Vn[Fe - ve] === 0 && an(lt, b[Fe])) {
              wt = Fe;
              break;
            }
        wt === void 0 ? ae(lt, j, G, !0) : (Vn[wt - ve] = W + 1, wt >= yt ? yt = wt : vt = !0, _(
          lt,
          b[wt],
          P,
          null,
          j,
          G,
          ee,
          J,
          X
        ), Re++);
      }
      const xi = vt ? pc(Vn) : Cn;
      for (Fe = xi.length - 1, W = Be - 1; W >= 0; W--) {
        const lt = ve + W, wt = b[lt], Ci = b[lt + 1], Ai = lt + 1 < de ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ci.el || Oa(Ci)
        ) : z;
        Vn[W] === 0 ? _(
          null,
          wt,
          P,
          Ai,
          j,
          G,
          ee,
          J,
          X
        ) : vt && (Fe < 0 || W !== xi[Fe] ? De(wt, P, Ai, 2) : Fe--);
      }
    }
  }, De = (h, b, P, z, j = null) => {
    const { el: G, type: ee, transition: J, children: X, shapeFlag: W } = h;
    if (W & 6) {
      De(h.component.subTree, b, P, z);
      return;
    }
    if (W & 128) {
      h.suspense.move(b, P, z);
      return;
    }
    if (W & 64) {
      ee.move(h, b, P, me);
      return;
    }
    if (ee === fe) {
      l(G, b, P);
      for (let te = 0; te < X.length; te++)
        De(X[te], b, P, z);
      l(h.anchor, b, P);
      return;
    }
    if (ee === So) {
      k(h, b, P);
      return;
    }
    if (z !== 2 && W & 1 && J)
      if (z === 0)
        J.persisted && !G[ut] ? l(G, b, P) : (J.beforeEnter(G), l(G, b, P), Ye(() => J.enter(G), j));
      else {
        const { leave: te, delayLeave: ue, afterLeave: pe } = J, ve = () => {
          h.ctx.isUnmounted ? o(G) : l(G, b, P);
        }, Me = () => {
          const Fe = G._isLeaving || !!G[ut];
          G._isLeaving && G[ut](
            !0
            /* cancelled */
          ), J.persisted && !Fe ? ve() : te(G, () => {
            ve(), pe && pe();
          });
        };
        ue ? ue(G, ve, Me) : Me();
      }
    else
      l(G, b, P);
  }, ae = (h, b, P, z = !1, j = !1) => {
    const {
      type: G,
      props: ee,
      ref: J,
      children: X,
      dynamicChildren: W,
      shapeFlag: de,
      patchFlag: te,
      dirs: ue,
      cacheIndex: pe,
      memo: ve
    } = h;
    if (te === -2 && (j = !1), J != null && (Vt(), Qn(J, null, P, h, !0), Ot()), pe != null && (b.renderCache[pe] = void 0), de & 256) {
      b.ctx.deactivate(h);
      return;
    }
    const Me = de & 1 && ue, Fe = !Fn(h);
    let Re;
    if (Fe && (Re = ee && ee.onVnodeBeforeUnmount) && St(Re, b, h), de & 6)
      En(h.component, P, z);
    else {
      if (de & 128) {
        h.suspense.unmount(P, z);
        return;
      }
      Me && en(h, null, b, "beforeUnmount"), de & 64 ? h.type.remove(
        h,
        b,
        P,
        me,
        z
      ) : W && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !W.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (G !== fe || te > 0 && te & 64) ? Zt(
        W,
        b,
        P,
        !1,
        !0
      ) : (G === fe && te & 384 || !j && de & 16) && Zt(X, b, P), z && Z(h);
    }
    const Be = ve != null && pe == null;
    (Fe && (Re = ee && ee.onVnodeUnmounted) || Me || Be) && Ye(() => {
      Re && St(Re, b, h), Me && en(h, null, b, "unmounted"), Be && (h.el = null);
    }, P);
  }, Z = (h) => {
    const { type: b, el: P, anchor: z, transition: j } = h;
    if (b === fe) {
      oe(P, z);
      return;
    }
    if (b === So) {
      v(h);
      return;
    }
    const G = () => {
      o(P), j && !j.persisted && j.afterLeave && j.afterLeave();
    };
    if (h.shapeFlag & 1 && j && !j.persisted) {
      const { leave: ee, delayLeave: J } = j, X = () => ee(P, G);
      J ? J(h.el, G, X) : X();
    } else
      G();
  }, oe = (h, b) => {
    let P;
    for (; h !== b; )
      P = p(h), o(h), h = P;
    o(b);
  }, En = (h, b, P) => {
    const { bum: z, scope: j, job: G, subTree: ee, um: J, m: X, a: W } = h;
    Wi(X), Wi(W), z && kl(z), j.stop(), G && (G.flags |= 8, ae(ee, h, b, P)), J && Ye(J, b), Ye(() => {
      h.isUnmounted = !0;
    }, b);
  }, Zt = (h, b, P, z = !1, j = !1, G = 0) => {
    for (let ee = G; ee < h.length; ee++)
      ae(h[ee], b, P, z, j);
  }, gn = (h) => {
    if (h.shapeFlag & 6)
      return gn(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const b = p(h.anchor || h.el), P = b && b[fa];
    return P ? p(P) : b;
  };
  let Q = !1;
  const le = (h, b, P) => {
    let z;
    h == null ? b._vnode && (ae(b._vnode, null, null, !0), z = b._vnode.component) : _(
      b._vnode || null,
      h,
      b,
      null,
      null,
      null,
      P
    ), b._vnode = h, Q || (Q = !0, Ii(z), ra(), Q = !1);
  }, me = {
    p: _,
    um: ae,
    m: De,
    r: Z,
    mt: H,
    mc: B,
    pc: L,
    pbc: E,
    n: gn,
    o: e
  };
  return {
    render: le,
    hydrate: void 0,
    createApp: Ju(le)
  };
}
function wo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function tn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function fc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function mi(e, t, n = !1) {
  const l = e.children, o = t.children;
  if (re(l) && re(o))
    for (let i = 0; i < l.length; i++) {
      const s = l[i];
      let a = o[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[i] = It(o[i]), a.el = s.el), !n && a.patchFlag !== -2 && mi(s, a)), a.type === uo && (a.patchFlag === -1 && (a = o[i] = It(a)), a.el = s.el), a.type === ze && !a.el && (a.el = s.el);
    }
}
function pc(e) {
  const t = e.slice(), n = [0];
  let l, o, i, s, a;
  const r = e.length;
  for (l = 0; l < r; l++) {
    const d = e[l];
    if (d !== 0) {
      if (o = n[n.length - 1], e[o] < d) {
        t[l] = o, n.push(l);
        continue;
      }
      for (i = 0, s = n.length - 1; i < s; )
        a = i + s >> 1, e[n[a]] < d ? i = a + 1 : s = a;
      d < e[n[i]] && (i > 0 && (t[l] = n[i - 1]), n[i] = l);
    }
  }
  for (i = n.length, s = n[i - 1]; i-- > 0; )
    n[i] = s, s = t[s];
  return n;
}
function Va(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Va(t);
}
function Wi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Oa(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Oa(t.subTree) : null;
}
const $a = (e) => e.__isSuspense;
function mc(e, t) {
  t && t.pendingBranch ? re(e) ? t.effects.push(...e) : t.effects.push(e) : gu(e);
}
const fe = /* @__PURE__ */ Symbol.for("v-fgt"), uo = /* @__PURE__ */ Symbol.for("v-txt"), ze = /* @__PURE__ */ Symbol.for("v-cmt"), So = /* @__PURE__ */ Symbol.for("v-stc"), Et = [];
let ot = null;
function C(e = !1) {
  Et.push(ot = e ? null : []);
}
function hi() {
  Et.pop(), ot = Et[Et.length - 1] || null;
}
let rl = 1;
function $l(e, t = !1) {
  rl += e, e < 0 && ot && t && (ot.hasOnce = !0);
}
function Ba(e) {
  return e.dynamicChildren = rl > 0 ? ot || Cn : null, hi(), rl > 0 && ot && ot.push(e), e;
}
function M(e, t, n, l, o, i) {
  return Ba(
    D(
      e,
      t,
      n,
      l,
      o,
      i,
      !0
    )
  );
}
function Ce(e, t, n, l, o) {
  return Ba(
    R(
      e,
      t,
      n,
      l,
      o,
      !0
    )
  );
}
function ul(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function an(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ha = ({ key: e }) => e ?? null, Fl = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ie(e) || /* @__PURE__ */ se(e) || he(e) ? { i: Ge, r: e, k: t, f: !!n } : e : null);
function D(e, t = null, n = null, l = 0, o = null, i = e === fe ? 0 : 1, s = !1, a = !1) {
  const r = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ha(t),
    ref: t && Fl(t),
    scopeId: ca,
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
    patchFlag: l,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Ge
  };
  return a ? (Hl(r, n), i & 128 && e.normalize(r)) : n && (r.shapeFlag |= Ie(n) ? 8 : 16), rl > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  ot && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (r.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  r.patchFlag !== 32 && ot.push(r), r;
}
const R = hc;
function hc(e, t = null, n = null, l = 0, o = null, i = !1) {
  if ((!e || e === wa) && (e = ze), ul(e)) {
    const a = Qt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Hl(a, n), rl > 0 && !i && ot && (a.shapeFlag & 6 ? ot[ot.indexOf(e)] = a : ot.push(a)), a.patchFlag = -2, a;
  }
  if (kc(e) && (e = e.__vccOpts), t) {
    t = gc(t);
    let { class: a, style: r } = t;
    a && !Ie(a) && (t.class = _e(a)), ke(r) && (/* @__PURE__ */ io(r) && !re(r) && (r = Te({}, r)), t.style = ct(r));
  }
  const s = Ie(e) ? 1 : $a(e) ? 128 : pa(e) ? 64 : ke(e) ? 4 : he(e) ? 2 : 0;
  return D(
    e,
    t,
    n,
    l,
    o,
    s,
    i,
    !0
  );
}
function gc(e) {
  return e ? /* @__PURE__ */ io(e) || Da(e) ? Te({}, e) : e : null;
}
function Qt(e, t, n = !1, l = !1) {
  const { props: o, ref: i, patchFlag: s, children: a, transition: r } = e, d = t ? _c(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Ha(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? re(i) ? i.concat(Fl(t)) : [i, Fl(t)] : Fl(t)
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
    patchFlag: t && e.type !== fe ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && Qt(e.ssContent),
    ssFallback: e.ssFallback && Qt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return r && l && al(
    u,
    r.clone(u)
  ), u;
}
function Bl(e = " ", t = 0) {
  return R(uo, null, e, t);
}
function ne(e = "", t = !1) {
  return t ? (C(), Ce(ze, null, e)) : R(ze, null, e);
}
function At(e) {
  return e == null || typeof e == "boolean" ? R(ze) : re(e) ? R(
    fe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ul(e) ? It(e) : R(uo, null, String(e));
}
function It(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qt(e);
}
function Hl(e, t) {
  let n = 0;
  const { shapeFlag: l } = e;
  if (t == null)
    t = null;
  else if (re(t))
    n = 16;
  else if (typeof t == "object")
    if (l & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Hl(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Da(t) ? t._ctx = Ge : o === 3 && Ge && (Ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (he(t)) {
    if (l & 65) {
      Hl(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ge }, n = 32;
  } else
    t = String(t), l & 64 ? (n = 16, t = [Bl(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function _c(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const l = e[n];
    for (const o in l)
      if (o === "class")
        t.class !== l.class && (t.class = _e([t.class, l.class]));
      else if (o === "style")
        t.style = ct([t.style, l.style]);
      else if (Xl(o)) {
        const i = t[o], s = l[o];
        s && i !== s && !(re(i) && i.includes(s)) ? t[o] = i ? [].concat(i, s) : s : s == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Yl(o) && (t[o] = s);
      } else o !== "" && (t[o] = l[o]);
  }
  return t;
}
function St(e, t, n, l = null) {
  ft(e, t, 7, [
    n,
    l
  ]);
}
const bc = Aa();
let vc = 0;
function yc(e, t, n) {
  const l = e.type, o = (t ? t.appContext : e.appContext) || bc, i = {
    uid: vc++,
    vnode: e,
    type: l,
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
    scope: new Us(
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
    propsOptions: Na(l, o),
    emitsOptions: Fa(l, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Se,
    // inheritAttrs
    inheritAttrs: l.inheritAttrs,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Qu.bind(null, i), e.ce && e.ce(i), i;
}
let Ue = null;
const co = () => Ue || Ge;
let Ul, Ho;
{
  const e = no(), t = (n, l) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(l), (i) => {
      o.length > 1 ? o.forEach((s) => s(i)) : o[0](i);
    };
  };
  Ul = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ue = n
  ), Ho = t(
    "__VUE_SSR_SETTERS__",
    (n) => Nn = n
  );
}
const gl = (e) => {
  const t = Ue;
  return Ul(e), e.scope.on(), () => {
    e.scope.off(), Ul(t);
  };
}, ji = () => {
  Ue && Ue.scope.off(), Ul(null);
};
function Ua(e) {
  return e.vnode.shapeFlag & 4;
}
let Nn = !1;
function wc(e, t = !1, n = !1) {
  t && Ho(t);
  const { props: l, children: o } = e.vnode, i = Ua(e);
  oc(e, l, i, t), rc(e, o, n || t);
  const s = i ? Sc(e, t) : void 0;
  return t && Ho(!1), s;
}
function Sc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Wu);
  const { setup: l } = n;
  if (l) {
    Vt();
    const o = e.setupContext = l.length > 1 ? Cc(e) : null, i = gl(e), s = pl(
      l,
      e,
      0,
      [
        e.props,
        o
      ]
    ), a = Ts(s);
    if (Ot(), i(), (a || e.sp) && !Fn(e) && di(e), a) {
      if (s.then(ji, ji), t)
        return s.then((r) => {
          zi(e, r);
        }).catch((r) => {
          ml(r, e, 0);
        });
      e.asyncDep = s;
    } else
      zi(e, s);
  } else
    Ga(e);
}
function zi(e, t, n) {
  he(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ke(t) && (e.setupState = ia(t)), Ga(e);
}
function Ga(e, t, n) {
  const l = e.type;
  e.render || (e.render = l.render || kt);
  {
    const o = gl(e);
    Vt();
    try {
      ju(e);
    } finally {
      Ot(), o();
    }
  }
}
const xc = {
  get(e, t) {
    return We(e, "get", ""), e[t];
  }
};
function Cc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, xc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function fo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ia(ri(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Zn)
        return Zn[n](e);
    },
    has(t, n) {
      return n in t || n in Zn;
    }
  })) : e.proxy;
}
function Ac(e, t = !0) {
  return he(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function kc(e) {
  return he(e) && "__vccOpts" in e;
}
const q = (e, t) => /* @__PURE__ */ du(e, t, Nn);
function Wa(e, t, n) {
  try {
    $l(-1);
    const l = arguments.length;
    return l === 2 ? ke(t) && !re(t) ? ul(t) ? R(e, null, [t]) : R(e, t) : R(e, null, t) : (l > 3 ? n = Array.prototype.slice.call(arguments, 2) : l === 3 && ul(n) && (n = [n]), R(e, t, n));
  } finally {
    $l(1);
  }
}
const Fc = "3.5.40";
/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Uo;
const Ki = typeof window < "u" && window.trustedTypes;
if (Ki)
  try {
    Uo = /* @__PURE__ */ Ki.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ja = Uo ? (e) => Uo.createHTML(e) : (e) => e, Mc = "http://www.w3.org/2000/svg", Lc = "http://www.w3.org/1998/Math/MathML", Lt = typeof document < "u" ? document : null, qi = Lt && /* @__PURE__ */ Lt.createElement("template"), Ic = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, l) => {
    const o = t === "svg" ? Lt.createElementNS(Mc, e) : t === "mathml" ? Lt.createElementNS(Lc, e) : n ? Lt.createElement(e, { is: n }) : Lt.createElement(e);
    return e === "select" && l && l.multiple != null && o.setAttribute("multiple", l.multiple), o;
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
  insertStaticContent(e, t, n, l, o, i) {
    const s = n ? n.previousSibling : t.lastChild;
    if (o && (o === i || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === i || !(o = o.nextSibling)); )
        ;
    else {
      qi.innerHTML = ja(
        l === "svg" ? `<svg>${e}</svg>` : l === "mathml" ? `<math>${e}</math>` : e
      );
      const a = qi.content;
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
}, zt = "transition", Bn = "animation", cl = /* @__PURE__ */ Symbol("_vtc"), za = {
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
}, Dc = /* @__PURE__ */ Te(
  {},
  ha,
  za
), Pc = (e) => (e.displayName = "Transition", e.props = Dc, e), Nc = /* @__PURE__ */ Pc(
  (e, { slots: t }) => Wa(Mu, Rc(e), t)
), nn = (e, t = []) => {
  re(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Xi = (e) => e ? re(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Rc(e) {
  const t = {};
  for (const F in e)
    F in za || (t[F] = e[F]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: l,
    duration: o,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: s = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: r = i,
    appearActiveClass: d = s,
    appearToClass: u = a,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: g = `${n}-leave-to`
  } = e, m = Tc(o), _ = m && m[0], A = m && m[1], {
    onBeforeEnter: x,
    onEnter: S,
    onEnterCancelled: k,
    onLeave: v,
    onLeaveCancelled: y,
    onBeforeAppear: w = x,
    onAppear: T = S,
    onAppearCancelled: B = k
  } = t, O = (F, V, H, N) => {
    F._enterCancelled = N, ln(F, V ? u : a), ln(F, V ? d : s), H && H();
  }, E = (F, V) => {
    F._isLeaving = !1, ln(F, f), ln(F, g), ln(F, p), V && V();
  }, K = (F) => (V, H) => {
    const N = F ? T : S, $ = () => O(V, F, H);
    nn(N, [V, $]), Yi(() => {
      ln(V, F ? r : i), Mt(V, F ? u : a), Xi(N) || Ji(V, l, _, $);
    });
  };
  return Te(t, {
    onBeforeEnter(F) {
      nn(x, [F]), Mt(F, i), Mt(F, s);
    },
    onBeforeAppear(F) {
      nn(w, [F]), Mt(F, r), Mt(F, d);
    },
    onEnter: K(!1),
    onAppear: K(!0),
    onLeave(F, V) {
      F._isLeaving = !0;
      const H = () => E(F, V);
      Mt(F, f), F._enterCancelled ? (Mt(F, p), es(F)) : (es(F), Mt(F, p)), Yi(() => {
        F._isLeaving && (ln(F, f), Mt(F, g), Xi(v) || Ji(F, l, A, H));
      }), nn(v, [F, H]);
    },
    onEnterCancelled(F) {
      O(F, !1, void 0, !0), nn(k, [F]);
    },
    onAppearCancelled(F) {
      O(F, !0, void 0, !0), nn(B, [F]);
    },
    onLeaveCancelled(F) {
      E(F), nn(y, [F]);
    }
  });
}
function Tc(e) {
  if (e == null)
    return null;
  if (ke(e))
    return [xo(e.enter), xo(e.leave)];
  {
    const t = xo(e);
    return [t, t];
  }
}
function xo(e) {
  return Fr(e);
}
function Mt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[cl] || (e[cl] = /* @__PURE__ */ new Set())).add(t);
}
function ln(e, t) {
  t.split(/\s+/).forEach((l) => l && e.classList.remove(l));
  const n = e[cl];
  n && (n.delete(t), n.size || (e[cl] = void 0));
}
function Yi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ec = 0;
function Ji(e, t, n, l) {
  const o = e._endId = ++Ec, i = () => {
    o === e._endId && l();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: s, timeout: a, propCount: r } = Vc(e, t);
  if (!s)
    return l();
  const d = s + "end";
  let u = 0;
  const f = () => {
    e.removeEventListener(d, p), i();
  }, p = (g) => {
    g.target === e && ++u >= r && f();
  };
  setTimeout(() => {
    u < r && f();
  }, a + 1), e.addEventListener(d, p);
}
function Vc(e, t) {
  const n = window.getComputedStyle(e), l = (m) => (n[m] || "").split(", "), o = l(`${zt}Delay`), i = l(`${zt}Duration`), s = Qi(o, i), a = l(`${Bn}Delay`), r = l(`${Bn}Duration`), d = Qi(a, r);
  let u = null, f = 0, p = 0;
  t === zt ? s > 0 && (u = zt, f = s, p = i.length) : t === Bn ? d > 0 && (u = Bn, f = d, p = r.length) : (f = Math.max(s, d), u = f > 0 ? s > d ? zt : Bn : null, p = u ? u === zt ? i.length : r.length : 0);
  const g = u === zt && /\b(?:transform|all)(?:,|$)/.test(
    l(`${zt}Property`).toString()
  );
  return {
    type: u,
    timeout: f,
    propCount: p,
    hasTransform: g
  };
}
function Qi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, l) => Zi(n) + Zi(e[l])));
}
function Zi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function es(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Oc(e, t, n) {
  const l = e[cl];
  l && (t = (t ? [t, ...l] : [...l]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Gl = /* @__PURE__ */ Symbol("_vod"), Ka = /* @__PURE__ */ Symbol("_vsh"), $c = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Gl] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Hn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: l }) {
    !t != !n && (l ? t ? (l.beforeEnter(e), Hn(e, !0), l.enter(e)) : l.leave(e, () => {
      Hn(e, !1);
    }) : Hn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Hn(e, t);
  }
};
function Hn(e, t) {
  e.style.display = t ? e[Gl] : "none", e[Ka] = !t;
}
const Bc = /* @__PURE__ */ Symbol(""), Hc = /(?:^|;)\s*display\s*:/;
function Uc(e, t, n) {
  const l = e.style, o = Ie(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (Ie(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          n[a] == null && jn(l, a, "");
        }
      else
        for (const s in t)
          n[s] == null && jn(l, s, "");
    for (const s in n) {
      s === "display" && (i = !0);
      const a = n[s];
      a != null ? Wc(
        e,
        s,
        !Ie(t) && t ? t[s] : void 0,
        a
      ) || jn(l, s, a) : jn(l, s, "");
    }
  } else if (o) {
    if (t !== n) {
      const s = l[Bc];
      s && (n += ";" + s), l.cssText = n, i = Hc.test(n);
    }
  } else t && e.removeAttribute("style");
  Gl in e && (e[Gl] = i ? l.display : "", e[Ka] && (l.display = "none"));
}
const ts = /\s*!important$/;
function jn(e, t, n) {
  if (re(n))
    n.forEach((l) => jn(e, t, l));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const l = Gc(e, t);
    ts.test(n) ? e.setProperty(
      Ut(l),
      n.replace(ts, ""),
      "important"
    ) : e[l] = n;
  }
}
const ns = ["Webkit", "Moz", "ms"], Co = {};
function Gc(e, t) {
  const n = Co[t];
  if (n)
    return n;
  let l = Ke(t);
  if (l !== "filter" && l in e)
    return Co[t] = l;
  l = eo(l);
  for (let o = 0; o < ns.length; o++) {
    const i = ns[o] + l;
    if (i in e)
      return Co[t] = i;
  }
  return t;
}
function Wc(e, t, n, l) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ie(l) && n === l;
}
const ls = "http://www.w3.org/1999/xlink";
function os(e, t, n, l, o, i = Nr(t)) {
  l && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ls, t.slice(6, t.length)) : e.setAttributeNS(ls, t, n) : n == null || i && !$s(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : at(n) ? String(n) : n
  );
}
function is(e, t, n, l, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ja(n) : n);
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
  let s = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = $s(n) : n == null && a === "string" ? (n = "", s = !0) : a === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(o || t);
}
function rn(e, t, n, l) {
  e.addEventListener(t, n, l);
}
function jc(e, t, n, l) {
  e.removeEventListener(t, n, l);
}
const ss = /* @__PURE__ */ Symbol("_vei");
function zc(e, t, n, l, o = null) {
  const i = e[ss] || (e[ss] = {}), s = i[t];
  if (l && s)
    s.value = l;
  else {
    const [a, r] = Xc(t);
    if (l) {
      const d = i[t] = Qc(
        l,
        o
      );
      rn(e, a, d, r);
    } else s && (jc(e, a, s, r), i[t] = void 0);
  }
}
const Kc = /(Once|Passive|Capture)$/, qc = /^on:?(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t, n;
  for (; (n = e.match(Kc)) && !qc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Ut(e.slice(2)), t];
}
let Ao = 0;
const Yc = /* @__PURE__ */ Promise.resolve(), Jc = () => Ao || (Yc.then(() => Ao = 0), Ao = Date.now());
function Qc(e, t) {
  const n = (l) => {
    if (!l._vts)
      l._vts = Date.now();
    else if (l._vts <= n.attached)
      return;
    const o = n.value;
    if (re(o)) {
      const i = l.stopImmediatePropagation;
      l.stopImmediatePropagation = () => {
        i.call(l), l._stopped = !0;
      };
      const s = o.slice(), a = [l];
      for (let r = 0; r < s.length && !l._stopped; r++) {
        const d = s[r];
        d && ft(
          d,
          t,
          5,
          a
        );
      }
    } else
      ft(
        o,
        t,
        5,
        [l]
      );
  };
  return n.value = e, n.attached = Jc(), n;
}
const as = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Zc = (e, t, n, l, o, i) => {
  const s = o === "svg";
  t === "class" ? Oc(e, l, s) : t === "style" ? Uc(e, n, l) : Xl(t) ? Yl(t) || zc(e, t, n, l, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ed(e, t, l, s)) ? (is(e, t, l), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && os(e, t, l, s, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (td(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ie(l))) ? is(e, Ke(t), l, i, t) : (t === "true-value" ? e._trueValue = l : t === "false-value" && (e._falseValue = l), os(e, t, l, s));
};
function ed(e, t, n, l) {
  if (l)
    return !!(t === "innerHTML" || t === "textContent" || t in e && as(t) && he(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return as(t) && Ie(n) ? !1 : t in e;
}
function td(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const l = Ke(t);
  return Array.isArray(n) ? n.some((o) => Ke(o) === l) : Object.keys(n).some((o) => Ke(o) === l);
}
const Wl = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return re(t) ? (n) => kl(t, n) : t;
};
function nd(e) {
  e.target.composing = !0;
}
function rs(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Mn = /* @__PURE__ */ Symbol("_assign");
function us(e, t, n) {
  return t && (e = e.trim()), n && (e = to(e)), e;
}
const st = {
  created(e, { modifiers: { lazy: t, trim: n, number: l } }, o) {
    e[Mn] = Wl(o);
    const i = l || o.props && o.props.type === "number";
    rn(e, t ? "change" : "input", (s) => {
      s.target.composing || e[Mn](us(e.value, n, i));
    }), (n || i) && rn(e, "change", () => {
      e.value = us(e.value, n, i);
    }), t || (rn(e, "compositionstart", nd), rn(e, "compositionend", rs), rn(e, "change", rs));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: l, trim: o, number: i } }, s) {
    if (e[Mn] = Wl(s), e.composing) return;
    const a = (i || e.type === "number") && !/^0\d/.test(e.value) ? to(e.value) : e.value, r = t ?? "";
    if (a === r)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (l && t === n || o && e.value.trim() === r) || (e.value = r);
  }
}, ld = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, l) {
    e._modelValue = t, rn(e, "change", () => {
      const o = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? to(jl(i)) : jl(i)
      );
      e[Mn](
        e.multiple ? Jl(e._modelValue) ? new Set(o) : o : o[0]
      ), e._assigning = !0, Rn(() => {
        e._assigning = !1;
      });
    }), e[Mn] = Wl(l);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    cs(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Mn] = Wl(n);
  },
  updated(e, { value: t }) {
    e._assigning || cs(e, t);
  }
};
function cs(e, t) {
  const n = e.multiple, l = re(t);
  if (!(n && !l && !Jl(t))) {
    for (let o = 0, i = e.options.length; o < i; o++) {
      const s = e.options[o], a = jl(s);
      if (n)
        if (l) {
          const r = typeof a;
          r === "string" || r === "number" ? s.selected = t.some((d) => String(d) === String(a)) : s.selected = Tr(t, a) > -1;
        } else
          s.selected = t.has(a);
      else if (fl(jl(s), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function jl(e) {
  return "_value" in e ? e._value : e.value;
}
const od = ["ctrl", "shift", "alt", "meta"], id = {
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
  exact: (e, t) => od.some((n) => e[`${n}Key`] && !t.includes(n))
}, Go = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), l = t.join(".");
  return n[l] || (n[l] = (o, ...i) => {
    for (let s = 0; s < t.length; s++) {
      const a = id[t[s]];
      if (a && a(o, t)) return;
    }
    return e(o, ...i);
  });
}, sd = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ml = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), l = t.join(".");
  return n[l] || (n[l] = (o) => {
    if (!("key" in o))
      return;
    const i = Ut(o.key);
    if (t.some(
      (s) => s === i || sd[s] === i
    ))
      return e(o);
  });
}, ad = /* @__PURE__ */ Te({ patchProp: Zc }, Ic);
let ds;
function qa() {
  return ds || (ds = cc(ad));
}
const fs = (...e) => {
  qa().render(...e);
}, gi = (...e) => {
  const t = qa().createApp(...e), { mount: n } = t;
  return t.mount = (l) => {
    const o = ud(l);
    if (!o) return;
    const i = t._component;
    !he(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const s = n(o, !1, rd(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), s;
  }, t;
};
function rd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ud(e) {
  return Ie(e) ? document.querySelector(e) : e;
}
const _l = {
  accent: "#f08a45",
  accentInk: "#241206",
  // 7.24:1 on #f08a45 (white was 2.49:1)
  panel: "#171b22",
  panelAlt: "#222934",
  text: "#e8edf3",
  muted: "#9ca8b5",
  danger: "#ef6666",
  ok: "#62c987"
}, Wo = {
  accent: "#c9682c",
  accentInk: "#1c1006",
  // 4.88:1 on #c9682c (white was 3.82:1)
  panel: "#eef1f5",
  panelAlt: "#e2e6ec",
  text: "#1c2430",
  muted: "#5b6572",
  danger: "#b13a3a",
  // 4.74:1 on panelAlt; #c94b4b sat at 3.65:1
  ok: "#2a7046"
  // 4.78:1 on panelAlt; #3f8f5f sat at 3.16:1
}, cd = {
  accent: "#00e5ff",
  accentInk: "#04222b",
  // 10.76:1 on #00e5ff (white was 1.54:1 — worst of the set)
  panel: "#0a0e1a",
  panelAlt: "#131a2e",
  text: "#dff9ff",
  muted: "#7a9cb5",
  // 6.65:1 on the panel; the old #5f7d94 sat at 4.44:1
  danger: "#ff2e63",
  ok: "#00ff9f"
}, dd = {
  accent: "#d4a017",
  accentInk: "#1a1712",
  // 7.52:1 on #d4a017 (white was 2.38:1)
  panel: "#1a1712",
  panelAlt: "#26221a",
  text: "#e8dcc0",
  muted: "#a09272",
  // 5.83:1 on the panel; the old #8a7d5f sat at 4.41:1
  danger: "#d96a4a",
  // 4.61:1 on panelAlt; #9a3324 sat at 2.17:1 — near-invisible
  ok: "#8fbf3f"
}, fd = {
  accent: "#14b13b",
  accentInk: "#0c190c",
  panel: "#0a110a",
  panelAlt: "#121e12",
  text: "#4af626",
  muted: "#3fa845",
  // 6.29:1 on the panel; the old #2e7d32 sat at 3.73:1
  danger: "#ef5350",
  // 4.94:1 on panelAlt; #d32f2f sat at 3.46:1
  ok: "#14b13b"
}, pd = {
  accent: "#d5ff40",
  accentInk: "#14150f",
  panel: "#181916",
  panelAlt: "#232620",
  text: "#edf2e2",
  muted: "#8b9483",
  danger: "#ff5c72",
  ok: "#3ed98c"
}, md = {
  accent: "#f66744",
  accentInk: "#1a0d08",
  // 6.28:1 on #f66744 (white was 3.03:1)
  panel: "#171718",
  panelAlt: "#242628",
  text: "#e0e0e0",
  muted: "#888888",
  danger: "#e07070",
  // 4.86:1 on panelAlt; #d46060 sat at 4.08:1
  ok: "#4ade80"
}, Xa = {
  default: _l,
  cyberpunk: cd,
  fallout: dd,
  travelmate: pd,
  pipboy: fd,
  pixaroma: md
}, Dt = { ..._l };
let el = null, tl = null, nl = null, un = "default", _i = "dark";
function ps() {
  return un === "default" && _i === "light" ? Wo : Xa[un] ?? _l;
}
function jo(e) {
  return `--fil-accent:${e.accent};--fil-accent-ink:${e.accentInk};--fil-accent-text:color-mix(in srgb,${e.accent} 65%,${e.text});--fil-panel:${e.panel};--fil-panel-alt:${e.panelAlt};--fil-text:${e.text};--fil-muted:${e.muted};--fil-border:color-mix(in srgb,${e.muted} 55%,transparent);--fil-danger:${e.danger};--fil-ok:${e.ok};`;
}
const hd = {
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
`,
  // Pixaroma's own editor chrome is flat panels, no glow/scanline texture —
  // matching that means no flourish here, same as "default".
  pixaroma: ""
}, gd = "--fil-surface-bg:rgba(100,180,220,0.06);--fil-surface-border:rgba(0,255,255,0.18);--fil-surface-radius:20px;--fil-surface-blur:10px;--fil-surface-shadow:0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08);--fil-glass-bg:rgba(50,80,120,0.18);--fil-glass-border:rgba(0,150,200,0.35);--fil-field-radius:10px;--fil-pill-radius:17px;--fil-pill-bg:rgba(255,255,255,0.06);--fil-pill-border:rgba(0,150,200,0.4);", _d = "--fil-surface-1:rgba(255,255,255,0.04);--fil-surface-2:rgba(255,255,255,0.08);--fil-surface-3:rgba(255,255,255,0.14);--fil-inset:rgba(0,0,0,0.35);", bd = "--fil-surface-1:rgba(28,36,48,0.05);--fil-surface-2:rgba(28,36,48,0.09);--fil-surface-3:rgba(28,36,48,0.16);--fil-inset:rgba(255,255,255,0.6);", vd = "--fil-surface-bg:rgba(70,130,170,0.08);--fil-surface-border:rgba(40,120,160,0.28);--fil-surface-radius:20px;--fil-surface-blur:10px;--fil-surface-shadow:0 8px 24px rgba(40,60,90,0.18), inset 0 1px 0 rgba(255,255,255,0.5);--fil-glass-bg:rgba(120,160,200,0.16);--fil-glass-border:rgba(40,120,160,0.3);--fil-field-radius:10px;--fil-pill-radius:17px;--fil-pill-bg:rgba(30,60,90,0.06);--fil-pill-border:rgba(40,120,160,0.35);";
function yd() {
  if (typeof document > "u" || document.getElementById("fil-brand-vars")) return;
  const e = document.createElement("style");
  e.id = "fil-brand-vars", e.textContent = `:root{${jo(_l)}--fil-radius:8px;--fil-node-pad:6px 8px 14px 8px;--fil-node-gap:4px;--fil-row-pad:4px 6px;--fil-control-h:30px;--fil-control-h-lg:34px;--fil-input-border:rgba(240,138,69,0.35);${gd}${_d}}
/* The light palette used to live here under a .comfy-theme-light selector. That
 * class is absent on current ComfyUI builds, so the block never matched — it is
 * emitted into the fil-theme-base tag now, driven by detectComfyBase(). */
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
}`, document.head.appendChild(e), el = document.createElement("style"), el.id = "fil-theme-base", document.head.appendChild(el), tl = document.createElement("style"), tl.id = "fil-theme-vars", document.head.appendChild(tl), nl = document.createElement("style"), nl.id = "fil-theme-effects", document.head.appendChild(nl);
}
function zl() {
  if (typeof document > "u") return "dark";
  const e = getComputedStyle(document.documentElement).getPropertyValue("--bg-color").trim(), t = wd(e);
  return t == null ? "dark" : t > 0.4 ? "light" : "dark";
}
function wd(e) {
  let t = null;
  const n = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e);
  if (n) {
    const s = n[1].length === 3 ? n[1].replace(/./g, (a) => a + a) : n[1];
    t = [parseInt(s.slice(0, 2), 16), parseInt(s.slice(2, 4), 16), parseInt(s.slice(4, 6), 16)];
  } else {
    const s = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(e);
    s && (t = [Number(s[1]), Number(s[2]), Number(s[3])]);
  }
  if (!t) return null;
  const [l, o, i] = t.map((s) => {
    const a = s / 255;
    return a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * l + 0.7152 * o + 0.0722 * i;
}
function Ya(e) {
  _i = e, Qa();
}
function Ja(e) {
  un = e, Qa();
}
function Qa() {
  Object.assign(Dt, ps()), !(typeof document > "u") && (document.documentElement.dataset.filTheme = un, document.documentElement.dataset.filBase = _i, el && (el.textContent = ps() === Wo ? `:root{${jo(Wo)}--fil-input-border:rgba(201,104,44,0.35);${vd}${bd}}` : ""), tl && (tl.textContent = un === "default" ? "" : `:root{${jo(Xa[un] ?? _l)}}`), nl && (nl.textContent = hd[un] ?? ""));
}
const Sd = {
  class: "fil-color-picker",
  role: "group",
  "aria-label": "Color picker"
}, xd = { class: "fil-cp-hex-row" }, Cd = {
  class: "fil-cp-presets",
  role: "listbox",
  "aria-label": "Preset colors"
}, Ad = ["aria-selected", "aria-label", "title", "onClick"], kd = /* @__PURE__ */ we({
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
    ], n = e, l = nt(e, "modelValue"), o = q(() => n.presets ?? t);
    function i(F) {
      l.value = F;
    }
    function s(F) {
      return Math.min(1, Math.max(0, F));
    }
    function a(F) {
      const V = /^#?([0-9a-f]{6})$/i.exec(F.trim());
      if (!V) return null;
      const H = parseInt(V[1], 16);
      return [H >> 16 & 255, H >> 8 & 255, H & 255];
    }
    function r(F, V, H) {
      const N = ($) => Math.round(s($ / 255) * 255).toString(16).padStart(2, "0");
      return `#${N(F)}${N(V)}${N(H)}`;
    }
    function d(F, V, H) {
      const N = F / 255, $ = V / 255, I = H / 255, L = Math.max(N, $, I), U = Math.min(N, $, I), ge = L - U;
      let De = 0;
      ge !== 0 && (L === N ? De = ($ - I) / ge % 6 : L === $ ? De = (I - N) / ge + 2 : De = (N - $) / ge + 4, De *= 60, De < 0 && (De += 360));
      const ae = L === 0 ? 0 : ge / L;
      return [De, ae, L];
    }
    function u(F, V, H) {
      const N = H * V, $ = N * (1 - Math.abs(F / 60 % 2 - 1)), I = H - N;
      let [L, U, ge] = [0, 0, 0];
      return F < 60 ? [L, U, ge] = [N, $, 0] : F < 120 ? [L, U, ge] = [$, N, 0] : F < 180 ? [L, U, ge] = [0, N, $] : F < 240 ? [L, U, ge] = [0, $, N] : F < 300 ? [L, U, ge] = [$, 0, N] : [L, U, ge] = [N, 0, $], [(L + I) * 255, (U + I) * 255, (ge + I) * 255];
    }
    const f = /* @__PURE__ */ ce(0), p = /* @__PURE__ */ ce(0), g = /* @__PURE__ */ ce(0), m = /* @__PURE__ */ ce(l.value);
    function _(F) {
      const V = a(F);
      if (!V) return;
      const [H, N, $] = d(...V);
      f.value = H, p.value = N, g.value = $, m.value = r(...V);
    }
    $e(l, (F) => _(F), { immediate: !0 });
    const A = q(() => r(...u(f.value, p.value, g.value)));
    function x() {
      l.value = A.value, m.value = A.value;
    }
    function S() {
      const F = a(m.value);
      if (!F) {
        m.value = A.value;
        return;
      }
      const [V, H, N] = d(...F);
      f.value = V, p.value = H, g.value = N, l.value = r(...F);
    }
    const k = /* @__PURE__ */ ce(null), v = /* @__PURE__ */ ce(null);
    function y(F) {
      const V = k.value;
      if (!V) return;
      const H = V.getBoundingClientRect();
      p.value = s((F.clientX - H.left) / H.width), g.value = s(1 - (F.clientY - H.top) / H.height), x();
    }
    function w(F) {
      const V = v.value;
      if (!V) return;
      const H = V.getBoundingClientRect();
      f.value = s((F.clientX - H.left) / H.width) * 360, x();
    }
    function T(F) {
      F.preventDefault(), y(F);
      const V = (N) => y(N), H = () => {
        window.removeEventListener("pointermove", V), window.removeEventListener("pointerup", H);
      };
      window.addEventListener("pointermove", V), window.addEventListener("pointerup", H);
    }
    function B(F) {
      F.preventDefault(), w(F);
      const V = (N) => w(N), H = () => {
        window.removeEventListener("pointermove", V), window.removeEventListener("pointerup", H);
      };
      window.addEventListener("pointermove", V), window.addEventListener("pointerup", H);
    }
    const O = q(() => `hsl(${f.value}, 100%, 50%)`), E = q(() => ({
      left: `${p.value * 100}%`,
      top: `${(1 - g.value) * 100}%`
    })), K = q(() => ({ left: `${f.value / 360 * 100}%` }));
    return (F, V) => (C(), M("div", Sd, [
      D("div", {
        ref_key: "svRef",
        ref: k,
        class: "fil-cp-sv",
        style: ct({ background: O.value }),
        onPointerdown: T
      }, [
        V[1] || (V[1] = D("div", { class: "fil-cp-sv-white" }, null, -1)),
        V[2] || (V[2] = D("div", { class: "fil-cp-sv-black" }, null, -1)),
        D("div", {
          class: "fil-cp-sv-thumb",
          style: ct(E.value)
        }, null, 4)
      ], 36),
      D("div", {
        ref_key: "hueRef",
        ref: v,
        class: "fil-cp-hue",
        onPointerdown: B
      }, [
        D("div", {
          class: "fil-cp-hue-thumb",
          style: ct(K.value)
        }, null, 4)
      ], 544),
      D("div", xd, [
        D("span", {
          class: "fil-cp-swatch",
          style: ct({ background: A.value })
        }, null, 4),
        Qe(D("input", {
          "onUpdate:modelValue": V[0] || (V[0] = (H) => m.value = H),
          class: "fil-cp-hex-input",
          type: "text",
          spellcheck: "false",
          "aria-label": "Hex color",
          onKeydown: Ml(S, ["enter"]),
          onBlur: S
        }, null, 544), [
          [st, m.value]
        ])
      ]),
      D("div", Cd, [
        (C(!0), M(fe, null, Ne(o.value, (H) => (C(), M("button", {
          key: H,
          class: _e(["fil-color-swatch", { "is-active": l.value === H }]),
          style: ct({ "--swatch": H }),
          "aria-selected": l.value === H,
          "aria-label": H,
          title: H,
          onClick: (N) => i(H)
        }, null, 14, Ad))), 128))
      ])
    ]));
  }
}), xe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, Fd = /* @__PURE__ */ xe(kd, [["__scopeId", "data-v-969386c1"]]), ms = "__fil_color_picker_popup__";
let bn = null;
function Md(e) {
  return [
    {
      content: "Change color…",
      callback: (t, n, l) => Ld(e, l)
    }
  ];
}
function Ld(e, t) {
  var p;
  bn == null || bn(), (p = document.getElementById(ms)) == null || p.remove();
  const n = document.createElement("div");
  n.id = ms;
  const l = 176, o = 260, i = t ? Math.min(t.clientX, window.innerWidth - l - 8) : window.innerWidth / 2 - l / 2, s = t ? Math.min(t.clientY, window.innerHeight - o - 8) : window.innerHeight / 2 - o / 2;
  n.style.cssText = `position:fixed;z-index:10001;top:${Math.max(8, s)}px;left:${Math.max(8, i)}px;`, document.body.appendChild(n);
  function a(g) {
    e.color = g, e.__fx && (e.__fx.color = g), e.properties = e.properties || {}, e.properties.fil_custom_color = !0, r();
  }
  function r() {
    fs(null, n), n.remove(), document.removeEventListener("mousedown", d, !0), document.removeEventListener("keydown", u, !0), bn === r && (bn = null);
  }
  function d(g) {
    n.contains(g.target) || r();
  }
  function u(g) {
    g.key === "Escape" && r();
  }
  const f = Wa(Fd, {
    modelValue: e.color ?? "#78716c",
    "onUpdate:modelValue": (g) => a(g)
  });
  fs(f, n), document.addEventListener("mousedown", d, !0), document.addEventListener("keydown", u, !0), bn = r, Rn(() => {
    var g;
    (g = n.querySelector(".fil-color-swatch")) == null || g.focus();
  });
}
const Id = "fil";
function Ze(e, t = {}) {
  const l = e.prototype;
  if (l._filStyled) return;
  l._filStyled = !0, t.minSize && (l.minSize = t.minSize), l._filFamily = t.family ?? Id, l._filDescription = t.description ?? "", t.badges && (l.badges = t.badges), l.color = Dt.accent, l.bgcolor = Dt.panelAlt;
  const o = l.onNodeCreated;
  l.onNodeCreated = function(...s) {
    const a = o == null ? void 0 : o.apply(this, s);
    return this.color = Dt.accent, this.bgcolor = Dt.panelAlt, a;
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
        const d = this.widgets || [], u = d.filter((f) => !f.hidden);
        this.widgets = u;
        try {
          a.apply(this, [r]);
        } finally {
          this.widgets = d;
        }
      };
    }
  }), l.onDrawTitleBar = function(s, a, r, d, u) {
    var m;
    const f = ((m = globalThis.LiteGraph) == null ? void 0 : m.ROUND_RADIUS) ?? 8, p = !!this.collapsed;
    s.fillStyle = Dt.panel, s.beginPath(), s.roundRect(0, -a, r[0], a, p ? [f] : [f, f, 0, 0]), s.fill();
    const g = 3;
    s.fillStyle = u || Dt.accent, s.beginPath(), s.roundRect(0, -a, g, a, p ? [f, 0, 0, f] : [f, 0, 0, 0]), s.fill();
  };
  const i = l.getExtraMenuOptions;
  l.getExtraMenuOptions = function(...s) {
    const a = i == null ? void 0 : i.apply(this, s), r = s[1];
    return Array.isArray(r) && r.push(null, ...Md(this)), a;
  };
}
function Za(e) {
  var l, o, i;
  const t = (l = e.graph) == null ? void 0 : l._nodes;
  if (!t) return;
  for (const s of t)
    s._filFamily && ((o = s.properties) != null && o.fil_custom_color || (s.color = Dt.accent, s.bgcolor = Dt.panelAlt));
  const n = e.canvas;
  (i = n == null ? void 0 : n.setDirty) == null || i.call(n, !0, !0);
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let er;
const po = (e) => er = e, tr = (
  /* istanbul ignore next */
  Symbol()
);
function zo(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var ll;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(ll || (ll = {}));
function nr() {
  const e = Gs(!0), t = e.run(() => /* @__PURE__ */ ce({}));
  let n = [], l = [];
  const o = ri({
    install(i) {
      po(o), o._a = i, i.provide(tr, o), i.config.globalProperties.$pinia = o, l.forEach((s) => n.push(s)), l = [];
    },
    use(i) {
      return this._a ? n.push(i) : l.push(i), this;
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
const lr = () => {
};
function hs(e, t, n, l = lr) {
  e.push(t);
  const o = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), l());
  };
  return !n && Ws() && Er(o), o;
}
function vn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Dd = (e) => e(), gs = Symbol(), ko = Symbol();
function Ko(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, l) => e.set(l, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const l = t[n], o = e[n];
    zo(o) && zo(l) && e.hasOwnProperty(n) && !/* @__PURE__ */ se(l) && !/* @__PURE__ */ Tt(l) ? e[n] = Ko(o, l) : e[n] = l;
  }
  return e;
}
const Pd = (
  /* istanbul ignore next */
  Symbol()
);
function Nd(e) {
  return !zo(e) || !e.hasOwnProperty(Pd);
}
const { assign: qt } = Object;
function Rd(e) {
  return !!(/* @__PURE__ */ se(e) && e.effect);
}
function Td(e, t, n, l) {
  const { state: o, actions: i, getters: s } = t, a = n.state.value[e];
  let r;
  function d() {
    a || (n.state.value[e] = o ? o() : {});
    const u = /* @__PURE__ */ au(n.state.value[e]);
    return qt(u, i, Object.keys(s || {}).reduce((f, p) => (f[p] = ri(q(() => {
      po(n);
      const g = n._s.get(e);
      return s[p].call(g, g);
    })), f), {}));
  }
  return r = or(e, d, t, n, l, !0), r;
}
function or(e, t, n = {}, l, o, i) {
  let s;
  const a = qt({ actions: {} }, n), r = { deep: !0 };
  let d, u, f = [], p = [], g;
  const m = l.state.value[e];
  !i && !m && (l.state.value[e] = {});
  let _;
  function A(B) {
    let O;
    d = u = !1, typeof B == "function" ? (B(l.state.value[e]), O = {
      type: ll.patchFunction,
      storeId: e,
      events: g
    }) : (Ko(l.state.value[e], B), O = {
      type: ll.patchObject,
      payload: B,
      storeId: e,
      events: g
    });
    const E = _ = Symbol();
    Rn().then(() => {
      _ === E && (d = !0);
    }), u = !0, vn(f, O, l.state.value[e]);
  }
  const x = i ? function() {
    const { state: O } = n, E = O ? O() : {};
    this.$patch((K) => {
      qt(K, E);
    });
  } : (
    /* istanbul ignore next */
    lr
  );
  function S() {
    s.stop(), f = [], p = [], l._s.delete(e);
  }
  const k = (B, O = "") => {
    if (gs in B)
      return B[ko] = O, B;
    const E = function() {
      po(l);
      const K = Array.from(arguments), F = [], V = [];
      function H(I) {
        F.push(I);
      }
      function N(I) {
        V.push(I);
      }
      vn(p, {
        args: K,
        name: E[ko],
        store: y,
        after: H,
        onError: N
      });
      let $;
      try {
        $ = B.apply(this && this.$id === e ? this : y, K);
      } catch (I) {
        throw vn(V, I), I;
      }
      return $ instanceof Promise ? $.then((I) => (vn(F, I), I)).catch((I) => (vn(V, I), Promise.reject(I))) : (vn(F, $), $);
    };
    return E[gs] = !0, E[ko] = O, E;
  }, v = {
    _p: l,
    // _s: scope,
    $id: e,
    $onAction: hs.bind(null, p),
    $patch: A,
    $reset: x,
    $subscribe(B, O = {}) {
      const E = hs(f, B, O.detached, () => K()), K = s.run(() => $e(() => l.state.value[e], (F) => {
        (O.flush === "sync" ? u : d) && B({
          storeId: e,
          type: ll.direct,
          events: g
        }, F);
      }, qt({}, r, O)));
      return E;
    },
    $dispose: S
  }, y = /* @__PURE__ */ Gt(v);
  l._s.set(e, y);
  const T = (l._a && l._a.runWithContext || Dd)(() => l._e.run(() => (s = Gs()).run(() => t({ action: k }))));
  for (const B in T) {
    const O = T[B];
    if (/* @__PURE__ */ se(O) && !Rd(O) || /* @__PURE__ */ Tt(O))
      i || (m && Nd(O) && (/* @__PURE__ */ se(O) ? O.value = m[B] : Ko(O, m[B])), l.state.value[e][B] = O);
    else if (typeof O == "function") {
      const E = k(O, B);
      T[B] = E, a.actions[B] = O;
    }
  }
  return qt(y, T), qt(/* @__PURE__ */ ye(y), T), Object.defineProperty(y, "$state", {
    get: () => l.state.value[e],
    set: (B) => {
      A((O) => {
        qt(O, B);
      });
    }
  }), l._p.forEach((B) => {
    qt(y, s.run(() => B({
      store: y,
      app: l._a,
      pinia: l,
      options: a
    })));
  }), m && i && n.hydrate && n.hydrate(y.$state, m), d = !0, u = !0, y;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function bi(e, t, n) {
  let l, o;
  const i = typeof t == "function";
  typeof e == "string" ? (l = e, o = i ? n : t) : (o = e, l = e.id);
  function s(a, r) {
    const d = bu();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (d ? Jn(tr, null) : null), a && po(a), a = er, a._s.has(l) || (i ? or(l, t, o, a) : Td(l, o, a)), a._s.get(l);
  }
  return s.$id = l, s;
}
let cn = null;
function Ed(e) {
  return cn || (cn = nr(), cn);
}
function vi() {
  return cn || (cn = nr()), cn;
}
const Vd = { class: "fil-node-shell" }, Od = /* @__PURE__ */ we({
  __name: "FilNodeShell",
  props: {
    root: {},
    state: {},
    comfyClass: {}
  },
  setup(e) {
    return (t, n) => (C(), M("div", Vd, [
      (C(), Ce(Hu(e.root), { state: e.state }, null, 8, ["state"]))
    ]));
  }
}), $d = /* @__PURE__ */ xe(Od, [["__scopeId", "data-v-cb614e72"]]);
function qo(e, t, n) {
  const l = Math.abs(n) >= Math.abs(t), o = getComputedStyle(e);
  if (l) {
    const i = o.overflowY;
    if ((i === "auto" || i === "scroll") && e.scrollHeight > e.clientHeight + 1) {
      const s = e.scrollTop <= 0, a = e.scrollTop + e.clientHeight >= e.scrollHeight - 1;
      if (n < 0 && !s || n > 0 && !a) return !0;
    }
  } else {
    const i = o.overflowX;
    if ((i === "auto" || i === "scroll") && e.scrollWidth > e.clientWidth + 1) {
      const s = e.scrollLeft <= 0, a = e.scrollLeft + e.clientWidth >= e.scrollWidth - 1;
      if (t < 0 && !s || t > 0 && !a) return !0;
    }
  }
  return !1;
}
function ir(e, t, n, l = null) {
  let o = e instanceof Element ? e : null;
  for (; o && o !== l; ) {
    if (qo(o, t, n)) return !0;
    o = o.parentElement;
  }
  return !1;
}
function Bd(e, t, n, l) {
  const o = (i) => {
    const s = i.getBoundingClientRect();
    return s.width > 0 && s.height > 0 && e >= s.left && e <= s.right && t >= s.top && t <= s.bottom;
  };
  for (const i of document.querySelectorAll(".dom-widget"))
    if (o(i)) {
      if (qo(i, n, l)) return i;
      for (const s of i.querySelectorAll("*"))
        if (o(s) && qo(s, n, l)) return s;
    }
  return null;
}
function Hd(e, t) {
  for (let n = e; n; n = Object.getPrototypeOf(n)) {
    const l = Object.getOwnPropertyDescriptor(n, t);
    if (l) return !!(l.writable || l.set);
  }
  return !0;
}
const Ud = "__filVueMounted";
function gt(e, t, n, l) {
  const o = e;
  if (typeof o.addDOMWidget != "function")
    return console.warn(`[FiL_Design_ImageMind] domWidgetHost: node.addDOMWidget not available for "${t}" — ComfyUI core too old?`), null;
  const i = document.createElement("div");
  i.className = "fil-vue-host", i.style.width = "100%", i.style.boxSizing = "border-box", i.style.height = "auto", i[Ud] = !0, i.addEventListener(
    "wheel",
    (E) => {
      var F, V;
      if (ir(E.target, E.deltaX, E.deltaY, i.parentElement)) return;
      const K = (V = (F = globalThis.app) == null ? void 0 : F.canvas) == null ? void 0 : V.canvas;
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
  const s = /* @__PURE__ */ Gt(l.state);
  let a = l.height, r = l.height, d = 0, u = !1, f;
  const p = () => {
    f && (Hd(f, "height") && (f.height = a), f.computeSize = () => [i.clientWidth || 380, a]);
  }, g = () => {
    const E = i.firstElementChild;
    return !E || E.clientHeight === 0 || l.growable || (a = Math.ceil(E.scrollHeight / 4) * 4, r = a, p()), a;
  }, m = () => {
    const E = i.firstElementChild;
    if (!E || E.clientHeight === 0) return !1;
    const K = i.style.height;
    return i.style.height = "auto", r = Math.ceil(E.scrollHeight / 4) * 4, i.style.height = K, !0;
  }, _ = () => {
    a = r + d, i.style.height = `${a}px`, p();
  };
  f = o.addDOMWidget(t, "custom", i, {
    hideOnZoom: !0,
    getValue: () => s,
    setValue: (E) => {
      if (E && typeof E == "object") {
        const K = E, F = s;
        K.nodeState && typeof K.nodeState == "object" && F.nodeState && Object.assign(F.nodeState, K.nodeState), K.ui && typeof K.ui == "object" && F.ui && Object.assign(F.ui, K.ui);
        for (const [V, H] of Object.entries(K))
          V !== "nodeState" && V !== "ui" && (F[V] = H);
      }
    },
    getHeight: g,
    ...l.onDraw ? { onDraw: l.onDraw } : {}
  });
  const A = gi($d, { root: n, state: s, comfyClass: o.comfyClass ?? "default" }).use(vi());
  if (A.mount(i), l.growable && typeof o.computeSize == "function" && typeof o.setSize == "function") {
    const E = o.computeSize.bind(o), K = o.setSize.bind(o), F = () => Math.max(0, E()[1] - d);
    o.computeSize = () => [E()[0], F()], o.setSize = (V) => {
      u || (d = Math.max(0, V[1] - F()), _(), V = [V[0], E()[1]]), K(V);
    };
  }
  function x() {
    var L, U;
    if (l.growable) {
      k();
      return;
    }
    if (g(), !o.computeSize || !o.setSize || !o.size) return;
    const [E, K] = o.size, [, F] = o.computeSize(), [V, H] = o.minSize ?? [0, 0], N = Math.max(E, V), $ = a + 35, I = Math.max(F, $, H);
    N === E && Math.abs(I - K) < 2 || (o.setSize([N, I]), (U = (L = o.graph) == null ? void 0 : L.setDirtyCanvas) == null || U.call(L, !0, !0));
  }
  let S = !1;
  function k() {
    var I, L;
    if (!m() || !o.computeSize || !o.setSize || !o.size) return;
    const [E, K] = o.size, [F, V] = o.minSize ?? [0, 0], H = Math.max(o.computeSize()[1], V);
    S || (d = Math.max(0, K - H), S = !0), _();
    const N = Math.max(E, F), $ = H + d;
    if (!(N === E && Math.abs($ - K) < 2)) {
      u = !0;
      try {
        o.setSize([N, $]);
      } finally {
        u = !1;
      }
      (L = (I = o.graph) == null ? void 0 : I.setDirtyCanvas) == null || L.call(I, !0, !0);
    }
  }
  let v = 0;
  const y = new ResizeObserver(() => {
    v || (v = requestAnimationFrame(() => {
      v = 0, x();
    }));
  });
  y.observe(i);
  let w = 20;
  (function E() {
    x(), w-- > 0 && requestAnimationFrame(E);
  })();
  const T = setInterval(x, 400), B = { widget: f, host: i, app: A, state: s, unmount: O };
  function O() {
    y.disconnect(), v && cancelAnimationFrame(v), clearInterval(T);
    try {
      this.app.unmount();
    } catch (E) {
      console.warn(`[FiL_Design_ImageMind] unmount failed for "${t}":`, E);
    }
    for (; this.host.firstChild; ) this.host.removeChild(this.host.firstChild);
  }
  return B.unmount = O.bind(B), o._filVueApps ?? (o._filVueApps = {}), o._filVueApps[t] = B, B;
}
function _t(e) {
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
function jt(e, t) {
  return new Proxy({ ...t }, {
    set(n, l, o) {
      n[l] = o;
      const i = ie(e, String(l));
      return i && (i.value = o), !0;
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
const _s = 4, Gd = {
  info: 3500,
  success: 3e3,
  warning: 5e3,
  error: 6e3
};
let Wd = 1;
const Sn = /* @__PURE__ */ bi("fil/toast", () => {
  const e = /* @__PURE__ */ ce([]), t = /* @__PURE__ */ ce([]);
  function n(d, u, f = {}) {
    const p = {
      id: Wd++,
      level: d,
      text: u == null ? "" : String(u),
      timeout: f.timeout ?? Gd[d],
      sticky: !!f.sticky,
      action: f.action ?? null
    };
    return e.value.length < _s ? e.value.push(p) : t.value.push(p), p;
  }
  function l(d, u) {
    return n("info", d, u);
  }
  function o(d, u) {
    return n("success", d, u);
  }
  function i(d, u) {
    return n("warning", d, u);
  }
  function s(d, u) {
    return n("error", d, u);
  }
  function a(d) {
    e.value = e.value.filter((u) => u.id !== d), t.value.length > 0 && e.value.length < _s && e.value.push(t.value.shift());
  }
  function r() {
    e.value = [], t.value = [];
  }
  return { items: e, queue: t, info: l, success: o, warning: i, error: s, push: n, dismiss: a, dismissAll: r };
});
function jd() {
  var t, n;
  return ((n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.toast) ?? null;
}
function xl(e, t) {
  const n = jd();
  if (n != null && n.addAlert && (e === "info" || e === "success" || e === "warning" || e === "error"))
    try {
      n.addAlert(t);
      return;
    } catch (l) {
      console.warn("[FiL_Design_ImageMind toast] extensionManager.toast failed:", l);
    }
  Sn().push(e, t, {});
}
const Bt = {
  info: (e) => xl("info", e),
  success: (e) => xl("success", e),
  warning: (e) => xl("warning", e),
  error: (e) => xl("error", e),
  // Direct Pinia access for Vue components that want actions/sticky/toasts.
  infoRich: (e, t) => Sn().info(e, t),
  successRich: (e, t) => Sn().success(e, t),
  warningRich: (e, t) => Sn().warning(e, t),
  errorRich: (e, t) => Sn().error(e, t),
  dismissAll: () => Sn().dismissAll()
};
function bs() {
  var t, n, l, o, i, s, a, r;
  return !!(((o = (l = (n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.setting) == null ? void 0 : l.get) == null ? void 0 : o.call(l, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? ((r = (a = (s = (i = globalThis.app) == null ? void 0 : i.ui) == null ? void 0 : s.settings) == null ? void 0 : a.getSettingValue) == null ? void 0 : r.call(a, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? !0);
}
function vs() {
  function e(l, o, i, s) {
  }
  function t(l, o, i, s) {
    bs() && Bt.success("Connected");
  }
  function n(l, o) {
    bs() && Bt.info("Disconnected");
  }
  return { onConnectionsChange: e, onConnect: t, onDisconnect: n };
}
function et(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype, n = t.onConnect;
  t.onConnect = function(...o) {
    const { onConnect: i } = vs();
    return i(...o), n == null ? void 0 : n.apply(this, o);
  };
  const l = t.onDisconnect;
  t.onDisconnect = function(...o) {
    const { onDisconnect: i } = vs();
    return i(...o), l == null ? void 0 : l.apply(this, o);
  };
}
const zd = /* @__PURE__ */ ht(() => Promise.resolve().then(() => Gh)), Kd = {
  id: "FiLSeed",
  register(e, t) {
    Ze(e, {
      minSize: [240, 90],
      family: "value",
      description: "Fixed or randomized seed with copy and reuse buttons.",
      badges: [{ text: "seed" }]
    });
    const l = e.prototype, o = l.onNodeCreated;
    l.onNodeCreated = function(...a) {
      const r = o == null ? void 0 : o.apply(this, a), d = this, u = ie(d, "seed"), f = be(u, "number", 0);
      u && (u.hidden = !0);
      const p = ie(d, "control_after_generate");
      p && (p.hidden = !0);
      const g = {
        nodeState: {
          mode: "random",
          seed: f
        },
        initialValues: { seed: f },
        ui: {},
        lastRunSeed: null
      };
      return Object.defineProperty(g, "node", { value: d, enumerable: !1, configurable: !0 }), d._filSeedState = g, gt(d, "fil_seed_view", zd, { state: g, height: 52 }), r;
    };
    const i = l.onConfigure;
    l.onConfigure = function(...a) {
      const r = i == null ? void 0 : i.apply(this, a), d = this, u = d._filSeedState;
      return u && (u.nodeState.seed = be(ie(d, "seed"), "number", 0)), r;
    };
    const s = l.onRemoved;
    l.onRemoved = function(...a) {
      return _t(this), s == null ? void 0 : s.apply(this, a);
    }, et(e);
  }
}, qd = /* @__PURE__ */ ht(() => Promise.resolve().then(() => Eg)), Xd = {
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
    const l = e.prototype, o = [
      { name: "provider", kind: "string", fallback: "ollama" },
      { name: "model", kind: "string", fallback: "(loading...)" },
      { name: "temperature", kind: "number", fallback: 0.7 },
      { name: "max_tokens", kind: "number", fallback: 0 },
      { name: "rate_limit_ms", kind: "number", fallback: 100 },
      { name: "max_image_side", kind: "number", fallback: 1024 }
    ], i = l.onNodeCreated;
    l.onNodeCreated = function(...r) {
      const d = i == null ? void 0 : i.apply(this, r), u = this, f = be(ie(u, "provider"), "string", "ollama"), p = be(ie(u, "model"), "string", "(loading...)"), g = be(ie(u, "temperature"), "number", 0.7), m = be(ie(u, "max_tokens"), "number", 0), _ = be(ie(u, "rate_limit_ms"), "number", 100), A = be(ie(u, "max_image_side"), "number", 1024);
      for (const S of ["provider", "model", "refresh_models", "temperature", "max_tokens", "rate_limit_ms", "max_image_side"]) {
        const k = ie(u, S);
        k && (k.hidden = !0);
      }
      const x = {
        nodeState: jt(u, {
          provider: f,
          model: p,
          temperature: g,
          max_tokens: m,
          rate_limit_ms: _,
          max_image_side: A
        }),
        initialValues: {
          provider: f,
          model: p,
          temperature: g,
          max_tokens: m,
          rate_limit_ms: _,
          max_image_side: A
        },
        ui: {}
      };
      return Object.defineProperty(x, "node", { value: u, enumerable: !1, configurable: !0 }), u._filProviderState = x, gt(u, "fil_provider_view", qd, { state: x, height: 180 }), d;
    };
    const s = l.onConfigure;
    l.onConfigure = function(...r) {
      const d = s == null ? void 0 : s.apply(this, r), u = this, f = u._filProviderState;
      if (!f) return d;
      const p = f.nodeState;
      for (const { name: g, kind: m, fallback: _ } of o)
        p[g] = be(ie(u, g), m, _);
      return d;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return _t(this), a == null ? void 0 : a.apply(this, r);
    }, et(e);
  }
}, Yd = 10, Jd = 20;
function ys(e, t) {
  var o;
  const n = e;
  let l = 0;
  for (const i of t) {
    const s = (o = n.inputs) == null ? void 0 : o.find((r) => r.name === i);
    if (!s) continue;
    s.alwaysVisible = !0;
    const a = ie(e, i);
    a && (a.y = Jd * (l + 1)), l += 1;
  }
  sr(n);
}
function Qd(e, t) {
  var s, a;
  const n = tf(), l = (s = e.pos) == null ? void 0 : s[1], o = (a = e.size) == null ? void 0 : a[1];
  if (!n || l == null || o == null) return;
  let i = !1;
  for (const { name: r, el: d } of t) {
    if (!d) continue;
    const u = ie(e, r);
    if (!u) continue;
    const f = d.getBoundingClientRect();
    if (f.height === 0) continue;
    const p = (f.top + f.height / 2 - n.canvasTop) / n.scale - n.offsetY - l;
    if (p < 0 || p > o) continue;
    const g = Math.round(p - Yd);
    u.y !== g && (u.y = g, i = !0);
  }
  (i || ef(e, t)) && sr(e);
}
function Zd(e, t) {
  var o;
  const n = e, l = {};
  for (const i of t) {
    const s = (o = n.inputs) == null ? void 0 : o.find((a) => a.name === i);
    l[i] = (s == null ? void 0 : s.link) != null;
  }
  return l;
}
function ef(e, t) {
  return t.some(({ name: n }) => {
    var o, i;
    const l = (i = (o = e.inputs) == null ? void 0 : o.find((s) => s.name === n)) == null ? void 0 : i.boundingRect;
    return !l || !l[2] || !l[3];
  });
}
function tf() {
  var o;
  const e = (o = globalThis.app) == null ? void 0 : o.canvas, t = e == null ? void 0 : e.canvas, n = e == null ? void 0 : e.ds;
  return !(t instanceof HTMLCanvasElement) || !(n != null && n.offset) ? null : { scale: n.scale || 1, offsetY: n.offset[1] ?? 0, canvasTop: t.getBoundingClientRect().top };
}
function sr(e) {
  var t, n;
  e._widgetSlotsDirty = !0, (n = (t = e.graph) == null ? void 0 : t.setDirtyCanvas) == null || n.call(t, !0, !0);
}
const ar = "fil_state";
function nf(e, t) {
  var o;
  const n = e, l = (o = n.onSerialize) == null ? void 0 : o.bind(n);
  n.onSerialize = (i) => {
    l == null || l(i);
    try {
      i[ar] = JSON.parse(JSON.stringify({
        nodeState: { ...t.nodeState },
        ui: { ...t.ui },
        lastRunSeed: t.lastRunSeed ?? null
      }));
    } catch (s) {
      console.warn("[FiL_Design_ImageMind] could not serialize panel state:", s);
    }
  };
}
function lf(e, t) {
  const n = t == null ? void 0 : t[ar];
  if (!n || typeof n != "object") return !1;
  const l = n, o = /* @__PURE__ */ Gt(e);
  if (l.nodeState && typeof l.nodeState == "object")
    for (const [i, s] of Object.entries(l.nodeState))
      o.nodeState[i] = s;
  return l.ui && typeof l.ui == "object" && Object.assign(o.ui, l.ui), l.lastRunSeed !== void 0 && (o.lastRunSeed = l.lastRunSeed), !0;
}
const of = /* @__PURE__ */ ht(() => Promise.resolve().then(() => Qg)), ws = ["prompt", "negative_prompt", "custom_style"], rr = "fil_scanner_view";
function Ss(e) {
  for (const t of e.widgets || [])
    t.name !== rr && (t.hidden = !0);
}
const sf = {
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
    const l = e.prototype, o = [
      "prompt",
      "negative_prompt",
      "custom_style",
      "agent",
      "agent_focus",
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
    ], i = l.onNodeCreated;
    l.onNodeCreated = function(...r) {
      const d = i == null ? void 0 : i.apply(this, r), u = this, f = {}, p = {};
      for (const m of o) {
        const _ = ie(u, m);
        if (!_) continue;
        const A = m === "seed", S = be(_, A ? "number" : "string", A ? -1 : "");
        f[m] = S, p[m] = S, _.hidden = !0;
      }
      p.seed_mode = "random", Ss(u);
      const g = {
        nodeState: jt(u, p),
        initialValues: f,
        ui: {},
        lastRunSeed: null
      };
      return Object.defineProperty(g, "node", { value: u, enumerable: !1, configurable: !0 }), u._filScannerSeedState = g, nf(u, g), ys(u, ws), gt(u, rr, of, { state: g, height: 580, growable: !0 }), d;
    };
    const s = l.onConfigure;
    l.onConfigure = function(...r) {
      const d = s == null ? void 0 : s.apply(this, r), u = this, f = u._filScannerSeedState;
      if (!f) return d;
      for (const p of o) {
        const g = ie(u, p);
        if (!g) continue;
        const m = p === "seed", _ = m ? -1 : "";
        f.nodeState[p] = be(g, m ? "number" : "string", _), g.hidden = !0;
      }
      return lf(f, r[0]), Ss(u), ys(u, ws), d;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return _t(this), a == null ? void 0 : a.apply(this, r);
    }, et(e);
  }
}, af = /* @__PURE__ */ ht(() => Promise.resolve().then(() => n_)), rf = {
  id: "FiLNeuroCleaner",
  register(e, t) {
    Ze(e, {
      minSize: [280, 185],
      family: "tool",
      description: "GPU VRAM and loaded model memory cleanup.",
      badges: [{ text: "utility", color: "#888", text_color: "#fff" }]
    });
    const l = e.prototype, o = {
      clean_vram: !0,
      unload_diffusion: !0,
      unload_clip: !1,
      unload_vae: !1,
      unload_control: !1
    }, i = l.onNodeCreated;
    l.onNodeCreated = function(...r) {
      const d = i == null ? void 0 : i.apply(this, r), u = this, f = {}, p = {};
      for (const m of Object.keys(o)) {
        const _ = ie(u, m), A = be(_, "boolean", o[m]);
        f[m] = A, p[m] = A, _ && (_.hidden = !0);
      }
      const g = { nodeState: jt(u, f), initialValues: p, ui: {} };
      return u._filCleanerState = g, gt(u, "fil_cleaner_view", af, { state: g, height: 185 }), d;
    };
    const s = l.onConfigure;
    l.onConfigure = function(...r) {
      const d = s == null ? void 0 : s.apply(this, r), u = this, f = u._filCleanerState;
      if (!f) return d;
      for (const p of Object.keys(o))
        f.nodeState[p] = be(ie(u, p), "boolean", o[p]);
      return d;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return _t(this), a == null ? void 0 : a.apply(this, r);
    }, et(e);
  }
}, uf = /* @__PURE__ */ ht(() => Promise.resolve().then(() => Sr)), cf = {
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
    const l = e.prototype, o = {
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
    }, s = { auto_profile: "Balanced" }, a = l.onNodeCreated;
    l.onNodeCreated = function(...u) {
      const f = a == null ? void 0 : a.apply(this, u), p = this, g = {}, m = {};
      for (const A of Object.keys(o)) {
        const x = ie(p, A);
        if (!x) continue;
        const S = be(x, "number", o[A]);
        g[A] = S, m[A] = S, x.hidden = !0;
      }
      for (const A of Object.keys(i)) {
        const x = ie(p, A);
        if (!x) continue;
        const S = be(x, "boolean", i[A]);
        g[A] = S, m[A] = S, x.hidden = !0;
      }
      for (const A of Object.keys(s)) {
        const x = ie(p, A);
        if (!x) continue;
        const S = be(x, "string", s[A]);
        g[A] = S, m[A] = S, x.hidden = !0;
      }
      const _ = { nodeState: jt(p, g), initialValues: m, ui: {} };
      return p._filUpscaleState = _, gt(p, "fil_upscale_view", uf, { state: _, height: 420 }), f;
    };
    const r = l.onConfigure;
    l.onConfigure = function(...u) {
      const f = r == null ? void 0 : r.apply(this, u), p = this, g = p._filUpscaleState;
      if (!g) return f;
      for (const m of Object.keys(o))
        g.nodeState[m] = be(ie(p, m), "number", o[m]);
      for (const m of Object.keys(i))
        g.nodeState[m] = be(ie(p, m), "boolean", i[m]);
      for (const m of Object.keys(s))
        g.nodeState[m] = be(ie(p, m), "string", s[m]);
      return f;
    };
    const d = l.onRemoved;
    l.onRemoved = function(...u) {
      return _t(this), d == null ? void 0 : d.apply(this, u);
    }, et(e);
  }
}, df = /* @__PURE__ */ ht(() => Promise.resolve().then(() => Sr)), ff = {
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
    const l = e.prototype, o = {
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
    }, s = { auto_profile: "Balanced" }, a = l.onNodeCreated;
    l.onNodeCreated = function(...u) {
      const f = a == null ? void 0 : a.apply(this, u), p = this, g = {}, m = {};
      for (const A of Object.keys(o)) {
        const x = ie(p, A);
        if (!x) continue;
        const S = be(x, "number", o[A]);
        g[A] = S, m[A] = S, x.hidden = !0;
      }
      for (const A of Object.keys(i)) {
        const x = ie(p, A);
        if (!x) continue;
        const S = be(x, "boolean", i[A]);
        g[A] = S, m[A] = S, x.hidden = !0;
      }
      for (const A of Object.keys(s)) {
        const x = ie(p, A);
        if (!x) continue;
        const S = be(x, "string", s[A]);
        g[A] = S, m[A] = S, x.hidden = !0;
      }
      const _ = { nodeState: jt(p, g), initialValues: m, ui: {} };
      return p._filUpscaleState = _, gt(p, "fil_upscale_simple_view", df, { state: _, height: 420 }), f;
    };
    const r = l.onConfigure;
    l.onConfigure = function(...u) {
      const f = r == null ? void 0 : r.apply(this, u), p = this, g = p._filUpscaleState;
      if (!g) return f;
      for (const m of Object.keys(o))
        g.nodeState[m] = be(ie(p, m), "number", o[m]);
      for (const m of Object.keys(i))
        g.nodeState[m] = be(ie(p, m), "boolean", i[m]);
      for (const m of Object.keys(s))
        g.nodeState[m] = be(ie(p, m), "string", s[m]);
      return f;
    };
    const d = l.onRemoved;
    l.onRemoved = function(...u) {
      return _t(this), d == null ? void 0 : d.apply(this, u);
    }, et(e);
  }
}, pf = {
  id: "FiLTileAssembly",
  register(e, t) {
    Ze(e, {
      minSize: [270, 200],
      family: "image",
      description: "Recombines processed tiles back into one image, feathered across the real overlap zones.",
      badges: [{ text: "tile", color: "#62c987", text_color: "#1a1a1a" }]
    }), et(e);
  }
}, mf = {
  id: "FiLKSampler",
  register(e, t) {
    Ze(e, {
      minSize: [270, 260],
      family: "sampling",
      description: "Full sampler/scheduler set, passthrough outputs, preview, HighRes-fix script.",
      badges: [{ text: "sampler", color: "#7aa2f7", text_color: "#0b0e14" }]
    }), et(e);
  }
}, hf = /* @__PURE__ */ ht(() => Promise.resolve().then(() => h_)), Xo = {
  upscale_by: 1.25,
  denoise: 0.56,
  iterations: 1,
  strength: 1,
  seed: 0,
  hires_steps: 12
}, Yo = {
  upscale_type: "latent",
  hires_ckpt_name: "(use same)",
  latent_upscaler: "nearest-exact",
  pixel_upscaler: "",
  control_net_name: "",
  preprocessor: "none"
}, Jo = {
  use_same_seed: !0,
  use_controlnet: !1
}, gf = [
  ...Object.keys(Xo),
  ...Object.keys(Yo),
  ...Object.keys(Jo)
], _f = {
  id: "FiLHighResFix",
  register(e, t) {
    Ze(e, {
      // Height kept LOW on purpose — computeSize() (~430px real content)
      // always wins via Math.max in domWidgetHost.ts, so a buffer above it
      // here would just be dead space at the bottom. Width is the actual
      // reason this floor exists (computeSize()'s own width guess ignores it).
      //
      // 380, not 320: the own-seed row is a readout plus three pills, and the
      // Russian captions ("Случайно", "Прошлый", "Новый фикс.") need ~370px
      // before FilSeedRow starts truncating them. Nodes saved narrower are
      // widened to this floor on load.
      minSize: [380, 300],
      family: "sampling",
      description: "Latent/pixel upscale + re-sample settings, packed into a script for FiLKSampler.",
      badges: [{ text: "hires", color: "#bb9af7", text_color: "#0b0e14" }]
    });
    const l = e.prototype, o = (r, d) => {
      for (const u of Object.keys(Xo))
        d[u] = be(ie(r, u), "number", Xo[u]);
      for (const u of Object.keys(Yo))
        d[u] = be(ie(r, u), "string", Yo[u]);
      for (const u of Object.keys(Jo))
        d[u] = be(ie(r, u), "boolean", Jo[u]);
    }, i = l.onNodeCreated;
    l.onNodeCreated = function(...r) {
      const d = i == null ? void 0 : i.apply(this, r), u = this, f = {};
      o(u, f);
      for (const m of gf) {
        const _ = ie(u, m);
        _ && (_.hidden = !0);
      }
      const p = ie(u, "control_after_generate");
      p && (p.hidden = !0, p.value = "fixed"), f.seed_mode = "random";
      const g = {
        nodeState: jt(u, f),
        initialValues: { ...f },
        ui: {},
        lastRunSeed: null
      };
      return Object.defineProperty(g, "node", { value: u, enumerable: !1, configurable: !0 }), u._filHiResFixState = g, gt(u, "fil_hiresfix_view", hf, { state: g, height: 420 }), d;
    };
    const s = l.onConfigure;
    l.onConfigure = function(...r) {
      const d = s == null ? void 0 : s.apply(this, r), u = this, f = u._filHiResFixState;
      return f && o(u, f.nodeState), d;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return _t(this), a == null ? void 0 : a.apply(this, r);
    }, et(e);
  }
}, bf = {
  id: "FiLNoiseControl",
  register(e, t) {
    Ze(e, {
      minSize: [270, 220],
      family: "sampling",
      description: "RNG source + seed-variation script for FiLKSampler.",
      badges: [{ text: "script", color: "#7aa2f7", text_color: "#0b0e14" }]
    }), et(e);
  }
}, vf = {
  id: "FiLImageDecomposer",
  register(e, t) {
    Ze(e, {
      minSize: [300, 240],
      family: "llm",
      description: "Decomposes image or prompt into distinct visual layers.",
      badges: [{ text: "vision", color: "#bb9af7", text_color: "#0b0e14" }]
    }), et(e);
  }
}, yf = /* @__PURE__ */ ht(() => Promise.resolve().then(() => v_)), xs = [
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
function Fo(e) {
  if (!e) return;
  const t = e._filStyleMixerState;
  if (t != null && t.ui && (t.ui.slotVersion = (t.ui.slotVersion ?? 0) + 1), !e._allInputs && Array.isArray(e.inputs) && (e._allInputs = [...e.inputs]), !e._allInputs) return;
  const n = (s) => {
    const a = e._allInputs.find((r) => r && r.name === s);
    return !!(a && a.link != null);
  }, l = n("image_2"), o = n("image_3"), i = /* @__PURE__ */ new Set();
  i.add("config"), i.add("fusion_mode"), i.add("base_prompt"), i.add("image_1"), i.add("image_2"), l && i.add("image_3"), o && i.add("image_4"), e.inputs = e._allInputs.filter((s) => s && i.has(s.name)), typeof e.setSize == "function" && typeof e.computeSize == "function" && e.setSize(e.computeSize()), typeof e.setDirtyCanvas == "function" && e.setDirtyCanvas(!0, !0);
}
const wf = {
  id: "FiLStyleMixer",
  register(e, t) {
    Ze(e, {
      minSize: [380, 320],
      family: "base",
      description: "Blends visual styles and reference images with weighted influence sliders and optional Vision LLM fusion.",
      badges: [{ text: "styles", color: "#e0af68", text_color: "#0b0e14" }]
    });
    const l = e.prototype, o = l.onNodeCreated;
    l.onNodeCreated = function(...r) {
      const d = o == null ? void 0 : o.apply(this, r), u = this, f = {}, p = {};
      for (const _ of xs) {
        const A = ie(u, _);
        if (!A) continue;
        const x = _.includes("weight") ? "number" : "string", k = be(A, x, x === "number" ? 0.5 : "(None)");
        f[_] = k, p[_] = k, A.hidden = !0;
      }
      const g = {
        nodeState: jt(u, p),
        initialValues: f,
        ui: { slotVersion: 0 }
      };
      Object.defineProperty(g, "node", { value: u, enumerable: !1, configurable: !0 });
      const m = /* @__PURE__ */ Gt(g);
      return u._filStyleMixerState = m, gt(u, "fil_style_mixer_view", yf, { state: m, height: 480 }), Fo(this), d;
    };
    const i = l.onConfigure;
    l.onConfigure = function(...r) {
      const d = i == null ? void 0 : i.apply(this, r), u = this, f = u._filStyleMixerState;
      if (f)
        for (const p of xs) {
          const g = ie(u, p);
          if (!g) continue;
          const m = p.includes("weight") ? "number" : "string", _ = m === "number" ? 0.5 : "(None)";
          f.nodeState[p] = be(g, m, _);
        }
      return Fo(this), d;
    };
    const s = l.onConnectionsChange;
    l.onConnectionsChange = function(r, d, u, f, p) {
      const g = s == null ? void 0 : s.apply(this, [r, d, u, f, p]);
      return (r === 1 || (r == null ? void 0 : r.name) === "input") && Fo(this), g;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return _t(this), a == null ? void 0 : a.apply(this, r);
    }, et(e);
  }
}, Sf = /* @__PURE__ */ ht(() => Promise.resolve().then(() => D_)), Cs = [
  "method",
  "strength",
  "saturate",
  "temperature",
  "tint",
  "preserve_skin"
], xf = {
  id: "FiLColorWizard",
  register(e, t) {
    Ze(e, {
      minSize: [320, 310],
      family: "image",
      description: "Automatic color correction: white balance, LAB contrast, and skin protection with quick presets.",
      badges: [{ text: "color", color: "#f7768e", text_color: "#0b0e14" }]
    });
    const l = e.prototype, o = l.onNodeCreated;
    l.onNodeCreated = function(...a) {
      const r = o == null ? void 0 : o.apply(this, a), d = this, u = {}, f = {};
      for (const m of Cs) {
        const _ = ie(d, m);
        if (!_) continue;
        const A = m === "preserve_skin" ? "boolean" : m === "method" ? "string" : "number", S = be(_, A, A === "boolean" ? !1 : A === "number" ? 0 : "Full Auto");
        u[m] = S, f[m] = S, _.hidden = !0;
      }
      const p = {
        nodeState: jt(d, f),
        initialValues: u,
        ui: {}
      };
      Object.defineProperty(p, "node", { value: d, enumerable: !1, configurable: !0 });
      const g = /* @__PURE__ */ Gt(p);
      return d._filColorWizardState = g, gt(d, "fil_color_wizard_view", Sf, { state: g, height: 320 }), r;
    };
    const i = l.onConfigure;
    l.onConfigure = function(...a) {
      const r = i == null ? void 0 : i.apply(this, a), d = this, u = d._filColorWizardState;
      if (u)
        for (const f of Cs) {
          const p = ie(d, f);
          if (!p) continue;
          const g = f === "preserve_skin" ? "boolean" : f === "method" ? "string" : "number", m = g === "boolean" ? !1 : g === "number" ? 0 : "Full Auto";
          u.nodeState[f] = be(p, g, m);
        }
      return r;
    };
    const s = l.onRemoved;
    l.onRemoved = function(...a) {
      return _t(this), s == null ? void 0 : s.apply(this, a);
    }, et(e);
  }
}, Cf = /* @__PURE__ */ ht(() => Promise.resolve().then(() => E_));
function Mo(e) {
  var o, i, s, a, r, d, u, f, p, g;
  if (!((o = e.inputs) != null && o[0]) || !((i = e.outputs) != null && i[0])) return;
  const t = e.inputs[0], n = e.outputs[0], l = t.link;
  if (l != null && ((s = e.graph) != null && s.links)) {
    const m = e.graph.links[l];
    if (m) {
      const _ = (r = (a = e.graph).getNodeById) == null ? void 0 : r.call(a, m.origin_id), A = (d = _ == null ? void 0 : _.outputs) == null ? void 0 : d[m.origin_slot], x = (A == null ? void 0 : A.type) || m.type || "*";
      n.type = x, n.label = x === "*" ? "output" : x.toLowerCase(), t.label = x === "*" ? "input" : x.toLowerCase(), A != null && A.color_on && (n.color_on = A.color_on), A != null && A.color_off && (n.color_off = A.color_off), (f = (u = e.graph).setDirtyCanvas) == null || f.call(u, !0, !0);
      return;
    }
  }
  n.type = "*", n.label = "output", t.label = "input", delete n.color_on, delete n.color_off, (g = (p = e.graph) == null ? void 0 : p.setDirtyCanvas) == null || g.call(p, !0, !0);
}
const Af = {
  id: "FiLSignalSwitch",
  register(e, t) {
    Ze(e, {
      minSize: [220, 52],
      family: "tool",
      description: "Universal signal pass-through toggle ON/OFF.",
      badges: [{ text: "SWITCH", color: "#38bdf8", text_color: "#000" }]
    });
    const l = e.prototype, o = l.onNodeCreated;
    l.onNodeCreated = function(...r) {
      const d = o == null ? void 0 : o.apply(this, r), u = this, f = ie(u, "enable"), p = be(f, "boolean", !0);
      f && (f.hidden = !0);
      const g = {
        nodeState: {
          enable: p
        },
        initialValues: { enable: p },
        ui: {}
      };
      return Object.defineProperty(g, "node", { value: u, enumerable: !1, configurable: !0 }), u._filSwitchState = g, gt(u, "fil_switch_view", Cf, { state: g, height: 46 }), Mo(u), d;
    };
    const i = l.onConfigure;
    l.onConfigure = function(...r) {
      const d = i == null ? void 0 : i.apply(this, r), u = this, f = u._filSwitchState;
      return f && (f.nodeState.enable = be(ie(u, "enable"), "boolean", !0)), Mo(u), d;
    };
    const s = l.onConnectionsChange;
    l.onConnectionsChange = function(...r) {
      const d = s == null ? void 0 : s.apply(this, r);
      return Mo(this), d;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return _t(this), a == null ? void 0 : a.apply(this, r);
    }, et(e);
  }
}, kf = /* @__PURE__ */ ht(() => Promise.resolve().then(() => B_)), ur = "fil_dataset_forge_view", Ff = {
  dataset_name: "my_lora",
  trigger_word: "",
  class_token: "",
  base_resolution: "1024",
  layout: "kohya",
  caption_mode: "natural",
  crop_mode: "center",
  write_mode: "append",
  caption_language: "en",
  captions: "",
  dont_caption: "",
  caption_instruction: "",
  caption_extension: ".txt",
  image_format: "png"
}, Mf = {
  repeats: 10,
  caption_max_words: 60,
  bucket_step: 64,
  jpg_quality: 95,
  seed: -1
}, Lf = { dry_run: !1 };
function As(e) {
  for (const t of e.widgets || [])
    t.name !== ur && (t.hidden = !0);
}
function ks(e) {
  const t = ie(e, "control_after_generate");
  t && (t.value = "fixed");
}
function Fs(e, t) {
  for (const [n, l] of Object.entries(Ff))
    e[n] = be(ie(t, n), "string", l);
  for (const [n, l] of Object.entries(Mf))
    e[n] = be(ie(t, n), "number", l);
  for (const [n, l] of Object.entries(Lf))
    e[n] = be(ie(t, n), "boolean", l);
}
const If = {
  id: "FiLDatasetForge",
  register(e, t) {
    Ze(e, {
      minSize: [360, 460],
      family: "llm",
      description: "Turns an image batch into a LoRA training dataset: aspect buckets, one caption per image, kohya or flat folder on disk.",
      badges: [{ text: "dataset", color: "#c98bf3", text_color: "#1a1a1a" }]
    });
    const l = e.prototype, o = l.onNodeCreated;
    l.onNodeCreated = function(...a) {
      const r = o == null ? void 0 : o.apply(this, a), d = this, u = {};
      Fs(u, d), ks(d), As(d);
      const f = {
        nodeState: jt(d, u),
        initialValues: { ...u },
        ui: {}
      };
      return Object.defineProperty(f, "node", { value: d, enumerable: !1, configurable: !0 }), d._filDatasetForgeState = f, gt(d, ur, kf, { state: f, height: 420 }), r;
    };
    const i = l.onConfigure;
    l.onConfigure = function(...a) {
      const r = i == null ? void 0 : i.apply(this, a), d = this, u = d._filDatasetForgeState;
      return u && (Fs(u.nodeState, d), ks(d), As(d)), r;
    };
    const s = l.onRemoved;
    l.onRemoved = function(...a) {
      return _t(this), s == null ? void 0 : s.apply(this, a);
    }, et(e);
  }
}, Df = [
  Kd,
  Xd,
  sf,
  rf,
  cf,
  ff,
  pf,
  mf,
  _f,
  bf,
  vf,
  wf,
  xf,
  Af,
  If
], cr = Object.fromEntries(
  Df.map((e) => [e.id, e])
), Cl = /* @__PURE__ */ ce({});
let Ms = !1;
const Kl = /* @__PURE__ */ bi("fil/help", () => {
  const e = /* @__PURE__ */ ce(null);
  function t(a) {
    for (const [r, d] of Object.entries(a))
      Cl.value[r] = d;
  }
  function n() {
    Ms || (Ms = !0, Promise.resolve().then(() => U_).then(({ HELP_DEFAULTS: a }) => t(a)).catch((a) => console.warn("[FiL_Design_ImageMind] help defaults import failed:", a)));
  }
  function l(a) {
    return Cl.value[a];
  }
  function o() {
    return Object.values(Cl.value);
  }
  function i(a) {
    n(), e.value = a;
  }
  function s() {
    e.value = null;
  }
  return {
    registry: Cl,
    activeHelpId: e,
    ensureHelpDefaultsInjected: n,
    registerAll: t,
    get: l,
    list: o,
    value_open: i,
    value_close: s
  };
}), Pf = {
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
function dr(e) {
  return Pf[e];
}
const Nf = ["title", "aria-label", "innerHTML"], Rf = /* @__PURE__ */ we({
  name: "FilIcon",
  __name: "FilIcon",
  props: {
    name: {},
    size: { default: 16 },
    title: {}
  },
  setup(e) {
    return (t, n) => (C(), M("span", {
      class: "fil-icon",
      style: ct({ width: e.size + "px", height: e.size + "px" }),
      title: e.title,
      role: "img",
      "aria-label": e.title ?? e.name,
      innerHTML: c(dr)(e.name)
    }, null, 12, Nf));
  }
}), Ht = /* @__PURE__ */ xe(Rf, [["__scopeId", "data-v-dfb78d9f"]]), Tf = ["aria-label"], Ef = { class: "fil-modal-header" }, Vf = { class: "fil-modal-title" }, Of = { class: "fil-modal-body" }, $f = /* @__PURE__ */ we({
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
    const n = e, l = nt(e, "open"), o = t, i = /* @__PURE__ */ ce(null), s = /* @__PURE__ */ ce(null);
    function a() {
      l.value = !1, o("close");
    }
    function r(p) {
      n.closeOnBackdrop && p.target === p.currentTarget && a();
    }
    function d(p) {
      n.closeOnEsc && p.key === "Escape" && a(), p.key === "Tab" && u(p);
    }
    function u(p) {
      if (!i.value) return;
      const g = f(i.value);
      if (!g.length) {
        p.preventDefault();
        return;
      }
      const m = g[0], _ = g[g.length - 1];
      p.shiftKey ? document.activeElement === m && (p.preventDefault(), _.focus()) : document.activeElement === _ && (p.preventDefault(), m.focus());
    }
    function f(p) {
      return Array.from(
        p.querySelectorAll(
          'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((g) => !g.disabled && g.offsetParent !== null);
    }
    return $e(
      l,
      (p) => {
        var g;
        p ? (s.value = document.activeElement, Rn(() => {
          var _;
          (_ = (i.value ? f(i.value) : [])[0] || i.value) == null || _.focus();
        })) : ((g = s.value) == null || g.focus(), s.value = null);
      }
    ), hn(() => {
      document.addEventListener("keydown", d);
    }), Tn(() => {
      document.removeEventListener("keydown", d);
    }), (p, g) => (C(), Ce(ma, { to: "body" }, [
      R(Nc, { name: "fil-modal" }, {
        default: Jt(() => [
          l.value ? (C(), M("div", {
            key: 0,
            ref_key: "modalRef",
            ref: i,
            class: "fil-modal-backdrop",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": e.title || "Dialog",
            onClick: r
          }, [
            D("div", {
              class: "fil-modal-panel",
              style: ct({ maxWidth: e.width })
            }, [
              D("div", Ef, [
                D("span", Vf, Y(e.title), 1),
                D("button", {
                  class: "fil-modal-close",
                  title: "Close",
                  onClick: a
                }, [
                  R(Ht, {
                    name: "close",
                    size: 14
                  })
                ])
              ]),
              D("div", Of, [
                Gu(p.$slots, "default", {}, void 0, !0)
              ])
            ], 4)
          ], 8, Tf)) : ne("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Ln = /* @__PURE__ */ xe($f, [["__scopeId", "data-v-952a8f2d"]]), Bf = { class: "fil-help-title" }, Hf = {
  key: 0,
  class: "fil-help-body"
}, Uf = { key: 1 }, Gf = {
  key: 2,
  class: "fil-help-table"
}, Wf = {
  key: 3,
  class: "fil-help-code"
}, jf = {
  key: 1,
  class: "fil-help-empty"
}, zf = /* @__PURE__ */ we({
  __name: "FilHelpPopup",
  setup(e) {
    const t = Kl(), n = q(() => {
      const o = t.activeHelpId;
      return o ? t.get(o) ?? null : null;
    }), l = q({
      get: () => t.activeHelpId !== null,
      set: (o) => {
        o || t.value_close();
      }
    });
    return $e(n, (o) => {
      o || t.value_close();
    }), (o, i) => (C(), Ce(Ln, {
      open: l.value,
      "onUpdate:open": i[0] || (i[0] = (s) => l.value = s),
      title: "FiL LLM Help",
      width: "600px",
      onClose: i[1] || (i[1] = (s) => c(t).value_close())
    }, {
      default: Jt(() => {
        var s;
        return [
          n.value ? (C(), M(fe, { key: 0 }, [
            D("h2", Bf, Y(n.value.title), 1),
            n.value.body ? (C(), M("p", Hf, Y(n.value.body), 1)) : ne("", !0),
            (s = n.value.bullets) != null && s.length ? (C(), M("ul", Uf, [
              (C(!0), M(fe, null, Ne(n.value.bullets, (a, r) => (C(), M("li", {
                key: r,
                class: "fil-help-bullet"
              }, [
                R(Ht, {
                  name: "chevronRight",
                  size: 12
                }),
                D("span", null, Y(a), 1)
              ]))), 128))
            ])) : ne("", !0),
            n.value.table ? (C(), M("table", Gf, [
              D("thead", null, [
                D("tr", null, [
                  (C(!0), M(fe, null, Ne(n.value.table.headers, (a) => (C(), M("th", { key: a }, Y(a), 1))), 128))
                ])
              ]),
              D("tbody", null, [
                (C(!0), M(fe, null, Ne(n.value.table.rows, (a, r) => (C(), M("tr", { key: r }, [
                  (C(!0), M(fe, null, Ne(a, (d, u) => (C(), M("td", { key: u }, Y(d), 1))), 128))
                ]))), 128))
              ])
            ])) : ne("", !0),
            n.value.code ? (C(), M("pre", Wf, [
              D("code", null, Y(n.value.code), 1)
            ])) : ne("", !0)
          ], 64)) : (C(), M("p", jf, "No help available for this node."))
        ];
      }),
      _: 1
    }, 8, ["open"]));
  }
}), Kf = /* @__PURE__ */ xe(zf, [["__scopeId", "data-v-bfee41d7"]]);
let Lo = null;
function qf(e) {
  if (Lo) return;
  const t = document.createElement("div");
  t.id = "__fil_help_popup_host", document.body.appendChild(t), Lo = gi(Kf).use(vi()), Lo.mount(t), console.info("[FiL_Design_ImageMind] help popup mounted");
}
const Xf = "FiL_Design_ImageMind.Shortcuts.Enabled", Yf = "__cheatsheet__", Jf = [
  "#comfy-search-input",
  'input[name="search"]',
  'input[aria-label="Search"]',
  "#search-input",
  'input[placeholder*="search" i]'
], Qf = [
  {
    id: "FiL_Design_ImageMind.helpCheatsheet",
    label: "FiL_Design_ImageMind — Keyboard cheatsheet",
    icon: "?",
    function: Qo
  },
  {
    id: "FiL_Design_ImageMind.focusSearch",
    label: "FiL_Design_ImageMind — Focus add-node search",
    icon: "/",
    function: fr
  }
], Zf = [
  { commandId: "FiL_Design_ImageMind.helpCheatsheet", combo: { key: "?", shift: !0 } },
  // NB: Ctrl+Shift+K is reserved by core (Workspace.ToggleBottomPanel) — binding it
  // via the native API throws a duplicate-keybinding error, so we don't register it.
  { commandId: "FiL_Design_ImageMind.focusSearch", combo: { key: "/" } }
];
function ep(e) {
  if (!e || typeof e != "object") return !1;
  const t = String(e.tagName || "").toLowerCase();
  return t === "input" || t === "textarea" || t === "select" || e.isContentEditable === !0;
}
function tp() {
  for (const e of Jf) {
    const t = document.querySelector(e);
    if (t) return t;
  }
  return null;
}
function Qo() {
  var t;
  const e = Kl();
  e.ensureHelpDefaultsInjected(), (t = e.value_open) == null || t.call(e, Yf);
}
function fr() {
  const e = tp();
  if (!e) {
    Bt.info("ComfyUI search field not found");
    return;
  }
  try {
    e.focus(), "select" in e && e.select();
  } catch {
  }
}
function np(e) {
  if (!!e.extensionManager) {
    console.info("[FiL_Design_ImageMind] shortcuts registered via native commands API");
    return;
  }
  window.addEventListener("keydown", (n) => lp(n, e), !0), console.info("[FiL_Design_ImageMind] shortcuts installed (fallback keydown handler)");
}
function lp(e, t) {
  var i, s, a, r, d, u, f, p, g;
  let n = !0;
  try {
    n = !!(((r = (a = (s = (i = globalThis.app) == null ? void 0 : i.extensionManager) == null ? void 0 : s.setting) == null ? void 0 : a.get) == null ? void 0 : r.call(a, Xf, !0)) ?? !0);
  } catch {
  }
  if (!n) return;
  const l = e.target, o = ep(l);
  if (e.key === "Escape") {
    try {
      const m = Kl();
      (d = m.value_close) == null || d.call(m);
    } catch {
    }
    o && ((u = l.blur) == null || u.call(l)), (f = e.preventDefault) == null || f.call(e);
    return;
  }
  if (!o) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "K" || e.key === "k")) {
      Qo(), e.preventDefault();
      return;
    }
    if (e.key === "?" || e.shiftKey && e.key === "/") {
      if (e.shiftKey) Qo();
      else {
        const m = t.canvas, _ = (m == null ? void 0 : m.selected_nodes) ?? {}, A = Object.values(_).filter(Boolean);
        if (A.length === 1) {
          const x = ((p = A[0]) == null ? void 0 : p.comfyClass) ?? "default", S = Kl();
          S.ensureHelpDefaultsInjected(), (g = S.value_open) == null || g.call(S, x);
        } else
          Bt.info("Select exactly one FiL_Design_ImageMind node, then press ?");
      }
      e.preventDefault();
      return;
    }
    e.key === "/" && !e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey && (fr(), e.preventDefault());
  }
}
function op(e) {
  np(e);
}
let Ls = !1;
function ip() {
  Ls || typeof window > "u" || (Ls = !0, window.addEventListener(
    "wheel",
    (e) => {
      if (e.ctrlKey || e.metaKey) return;
      if (ir(e.target, e.deltaX, e.deltaY)) {
        e.stopImmediatePropagation();
        return;
      }
      if (!(e.target instanceof HTMLCanvasElement)) return;
      const t = Bd(e.clientX, e.clientY, e.deltaX, e.deltaY);
      if (!t) return;
      e.preventDefault(), e.stopImmediatePropagation();
      const n = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? t.clientHeight : 1;
      t.scrollBy({ left: e.deltaX * n, top: e.deltaY * n });
    },
    { capture: !0, passive: !1 }
  ), console.info("[FiL_Design_ImageMind] global scroll guard installed"));
}
const pr = "FiL_Design_ImageMind", In = "🎨 FiL ImageMind", Yt = "/fil_design_imagemind", mn = `[${pr}]`, sp = `${pr}.UI`;
async function mr(e) {
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
function hr() {
  var t;
  const e = globalThis;
  if ((t = e.api) != null && t.fetchApi) return (n, l) => e.api.fetchApi(n, l);
  if (e.fetch) return e.fetch.bind(globalThis);
  throw new Error(`${mn} no HTTP transport (api.fetchApi or window.fetch undefined)`);
}
async function zn(e) {
  const t = await hr()(e);
  return mr(t);
}
async function Zo(e, t) {
  const n = await hr()(e, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  });
  return mr(n);
}
const yn = {
  loadAccounts: () => zn(`${Yt}/auth`),
  saveAccounts: (e) => Zo(`${Yt}/auth`, {
    accounts: e
  }),
  loadModels: (e, t = !1) => zn(`${Yt}/models/${encodeURIComponent(e)}${t ? "?force=1" : ""}`),
  probe: (e, t = "") => Zo(`${Yt}/provider_probe`, { provider: e, model: t }),
  listProviders: () => zn(`${Yt}/providers`),
  nodeContracts: () => zn(`${Yt}/node_contracts`)
}, ap = 3e5, rp = ["ollama", "lmstudio", "openai", "google", "groq", "openrouter", "cloudflare"], xn = rp, yi = /* @__PURE__ */ bi("fil/providers", () => {
  const e = /* @__PURE__ */ ce({}), t = /* @__PURE__ */ ce({}), n = /* @__PURE__ */ ce({}), l = /* @__PURE__ */ ce({}), o = /* @__PURE__ */ ce(null), i = q(() => Object.fromEntries(
    Object.entries(e.value).filter(([, x]) => (x == null ? void 0 : x.configured) || (x == null ? void 0 : x.account_id) || (x == null ? void 0 : x.base_url))
  ));
  async function s() {
    try {
      const x = await yn.loadAccounts();
      e.value = x.accounts || {}, o.value = null;
    } catch (x) {
      o.value = x instanceof Error ? x.message : String(x);
    }
  }
  async function a(x, S) {
    try {
      const k = await yn.saveAccounts({ [x]: S });
      e.value = k.accounts || {}, o.value = null, u(x, !0);
    } catch (k) {
      throw o.value = k instanceof Error ? k.message : String(k), k;
    }
  }
  async function r(x) {
    const S = await yn.saveAccounts({
      [x]: { delete: !0 }
    });
    e.value = S.accounts || {};
  }
  async function d(x) {
    await a(x, {});
    try {
      await r(x);
    } catch (S) {
      o.value = S instanceof Error ? S.message : String(S);
    }
  }
  async function u(x, S = !1) {
    const k = t.value[x];
    if (k && !S && !k.error && k.cachedAt > 0 && Date.now() - k.cachedAt < ap)
      return k.list;
    k ? k.loading = !0 : t.value[x] = { list: [], visionModels: [], cachedAt: 0, loading: !0 };
    try {
      const v = await yn.loadModels(x, S), y = v.models || [];
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
      }, o.value = y, v;
    }
  }
  function f(x, S) {
    const k = t.value[x];
    if (!(k != null && k.cachedAt)) return null;
    const v = S ?? ((T, B) => B), y = Date.now() - k.cachedAt, w = Math.floor(y / 1e3);
    return w < 60 ? `${w}${v("unit_seconds_short", "s")}` : w < 3600 ? `${Math.floor(w / 60)}${v("unit_minutes_short", "m")}` : `${Math.floor(w / 3600)}${v("unit_hours_short", "h")}`;
  }
  async function p(x, S = "") {
    try {
      const k = await yn.probe(x, S);
      return n.value[x] = k, k;
    } catch (k) {
      o.value = k instanceof Error ? k.message : String(k);
      return;
    }
  }
  async function g() {
    try {
      const x = await yn.listProviders();
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
  function A(x) {
    var S;
    return !!((S = t.value[x]) != null && S.loading);
  }
  return {
    accounts: e,
    modelsByProvider: t,
    probeState: n,
    displayNames: l,
    lastError: o,
    configuredProviders: i,
    PROVIDER_LIST: xn,
    loadAccounts: s,
    saveAccount: a,
    deleteAccount: d,
    deleteAccountRaw: r,
    loadModels: u,
    probe: p,
    loadDisplayNames: g,
    modelsFor: m,
    visionModelsFor: _,
    isLoading: A,
    cachedAgeLabel: f
  };
}), up = ["title", "disabled", "aria-disabled"], cp = {
  key: 0,
  class: "fil-w-btn-spinner"
}, dp = ["innerHTML"], fp = { key: 2 }, pp = /* @__PURE__ */ we({
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
    const n = e, l = q(() => n.icon ? dr(n.icon) : ""), o = t, i = q(() => [
      "fil-w-btn",
      n.variant === "accent" && "fil-w-btn-accent",
      n.variant === "danger" && "fil-w-btn-danger",
      n.variant === "icon" && "fil-w-btn-icon",
      n.variant === "full" && "fil-w-btn-full",
      n.variant === "sm" && "fil-w-btn-sm",
      n.flashing && "is-flashing",
      n.loading && "is-loading"
    ]), s = q(() => n.disabled || n.loading);
    function a(r) {
      s.value || o("click", r);
    }
    return (r, d) => (C(), M("button", {
      class: _e(i.value),
      title: e.title,
      disabled: s.value,
      "aria-disabled": s.value || void 0,
      onClick: a
    }, [
      e.loading ? (C(), M("span", cp)) : ne("", !0),
      e.icon && !e.loading ? (C(), M("span", {
        key: 1,
        class: "fil-w-btn-glyph",
        innerHTML: l.value
      }, null, 8, dp)) : ne("", !0),
      e.label ? (C(), M("span", fp, Y(e.loading ? "" : e.label), 1)) : ne("", !0)
    ], 10, up));
  }
}), tt = /* @__PURE__ */ xe(pp, [["__scopeId", "data-v-75e79c80"]]), ql = {
  ollama: "Ollama",
  lmstudio: "LM Studio",
  openai: "OpenAI",
  groq: "Groq",
  google: "Google AI",
  openrouter: "OpenRouter",
  cloudflare: "Cloudflare"
}, wi = {
  ollama: "provider-ollama",
  lmstudio: "provider-lmstudio",
  openai: "provider-openai",
  groq: "provider-groq",
  google: "provider-google",
  openrouter: "provider-openrouter",
  cloudflare: "provider-cloudflare"
}, mp = { class: "fil-pm-root" }, hp = ["onClick"], gp = { class: "fil-pm-icon" }, _p = { class: "fil-pm-name" }, bp = {
  key: 0,
  class: "fil-pm-disp"
}, vp = ["title"], yp = { class: "fil-pm-fields" }, wp = { class: "fil-pm-field" }, Sp = ["onUpdate:modelValue", "placeholder", "onKeydown"], xp = { class: "fil-pm-field" }, Cp = ["onUpdate:modelValue", "onKeydown"], Ap = {
  key: 0,
  class: "fil-pm-field"
}, kp = ["onUpdate:modelValue", "onKeydown"], Fp = { class: "fil-pm-actions" }, Mp = {
  key: 0,
  class: "fil-pm-age"
}, Lp = {
  key: 0,
  class: "fil-pm-err"
}, Ip = {
  key: 1,
  class: "fil-pm-err"
}, Dp = {
  key: 2,
  class: "fil-pm-models"
}, Pp = {
  key: 0,
  class: "fil-pm-vision-badge",
  title: "Vision-capable"
}, Np = {
  key: 3,
  class: "fil-pm-err fil-pm-global-err"
}, Rp = /* @__PURE__ */ we({
  __name: "ProviderManager",
  setup(e) {
    const t = yi(), n = /* @__PURE__ */ ce(
      Object.fromEntries(xn.map((v) => [v, { key: "", base_url: "", account_id: "" }]))
    ), l = /* @__PURE__ */ ce({}), o = /* @__PURE__ */ ce({}), i = /* @__PURE__ */ ce({}), s = /* @__PURE__ */ ce({});
    hn(async () => {
      await Promise.all([t.loadAccounts(), t.loadDisplayNames()]);
      for (const v of xn) {
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
      for (const v of xn) {
        const y = t.accounts[v];
        (y != null && y.configured || y != null && y.local || y != null && y.base_url) && x(v);
      }
    });
    const a = ql, r = wi;
    function d(v) {
      return { "fil-pm-has-val": v.length > 0 };
    }
    function u(v) {
      return v === "cloudflare";
    }
    function f(v) {
      var B;
      const y = t.accounts[v], w = t.modelsByProvider[v], T = ((w == null ? void 0 : w.list.length) ?? 0) > 0 && !(w != null && w.error);
      return ((B = t.probeState[v]) == null ? void 0 : B.status) === "available" || o.value[v] || T ? "connected" : y != null && y.configured || y != null && y.local || y != null && y.base_url ? "configured" : "off";
    }
    const p = {
      connected: "Connected",
      configured: "Configured",
      off: "Not connected"
    };
    function g(v) {
      return f(v) === "off" && !s.value[v];
    }
    function m(v) {
      f(v) === "off" && (s.value[v] = !s.value[v]);
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
    async function x(v) {
      l.value[v] = !0, o.value[v] = !1;
      try {
        const y = await t.probe(v, "");
        o.value[v] = (y == null ? void 0 : y.status) === "available";
      } finally {
        l.value[v] = !1;
      }
    }
    async function S(v) {
      i.value[v] = !0;
      try {
        await t.loadModels(v, !0);
      } finally {
        i.value[v] = !1;
      }
    }
    const k = (v) => {
      const y = n.value[v];
      if (!y) return !1;
      const w = t.accounts[v];
      return y.key !== "" ? !0 : y.base_url !== ((w == null ? void 0 : w.base_url) ?? "") || y.account_id !== ((w == null ? void 0 : w.account_id) ?? "");
    };
    return (v, y) => (C(), M("div", mp, [
      (C(!0), M(fe, null, Ne(c(xn), (w) => {
        var T, B, O, E, K, F;
        return C(), M("div", {
          key: w,
          class: _e(["fil-pm-card", { "fil-pm-card--collapsed": g(w) }])
        }, [
          D("div", {
            class: _e(["fil-pm-header", { "fil-pm-header--clickable": f(w) === "off" }]),
            onClick: (V) => m(w)
          }, [
            D("span", gp, [
              R(Ht, {
                name: c(r)[w],
                size: 20
              }, null, 8, ["name"])
            ]),
            D("span", _p, Y(c(a)[w]), 1),
            c(t).displayNames[w] ? (C(), M("span", bp, "(" + Y(c(t).displayNames[w]) + ")", 1)) : ne("", !0),
            D("span", {
              class: _e(["fil-pm-status", `fil-pm-status--${f(w)}`]),
              title: p[f(w)]
            }, [
              y[0] || (y[0] = D("span", { class: "fil-pm-dot" }, null, -1)),
              Bl(" " + Y(p[f(w)]), 1)
            ], 10, vp),
            f(w) === "off" ? (C(), M("span", {
              key: 1,
              class: _e(["fil-pm-chevron", { "fil-pm-chevron--open": s.value[w] }])
            }, [
              R(Ht, {
                name: "chevronRight",
                size: 12
              })
            ], 2)) : ne("", !0)
          ], 10, hp),
          g(w) ? ne("", !0) : (C(), M(fe, { key: 0 }, [
            D("div", yp, [
              D("label", wp, [
                y[1] || (y[1] = D("span", { class: "fil-pm-field-label" }, "API Key", -1)),
                Qe(D("input", {
                  "onUpdate:modelValue": (V) => n.value[w].key = V,
                  type: "password",
                  class: _e(["fil-pm-input", d(n.value[w].key)]),
                  placeholder: (T = c(t).accounts[w]) != null && T.configured ? "•••••••• (saved)" : "sk-...",
                  onKeydown: Ml((V) => _(w), ["enter"])
                }, null, 42, Sp), [
                  [st, n.value[w].key]
                ])
              ]),
              D("label", xp, [
                y[2] || (y[2] = D("span", { class: "fil-pm-field-label" }, "Base URL", -1)),
                Qe(D("input", {
                  "onUpdate:modelValue": (V) => n.value[w].base_url = V,
                  type: "text",
                  class: _e(["fil-pm-input", d(n.value[w].base_url)]),
                  placeholder: "http://localhost:11434",
                  onKeydown: Ml((V) => _(w), ["enter"])
                }, null, 42, Cp), [
                  [st, n.value[w].base_url]
                ])
              ]),
              u(w) ? (C(), M("label", Ap, [
                y[3] || (y[3] = D("span", { class: "fil-pm-field-label" }, "Account ID", -1)),
                Qe(D("input", {
                  "onUpdate:modelValue": (V) => n.value[w].account_id = V,
                  type: "text",
                  class: _e(["fil-pm-input", d(n.value[w].account_id)]),
                  onKeydown: Ml((V) => _(w), ["enter"])
                }, null, 42, kp), [
                  [st, n.value[w].account_id]
                ])
              ])) : ne("", !0)
            ]),
            D("div", Fp, [
              R(tt, {
                variant: "accent",
                label: k(w) ? "Save" : "Saved",
                disabled: !k(w),
                onClick: (V) => _(w)
              }, null, 8, ["label", "disabled", "onClick"]),
              !k(w) && c(t).cachedAgeLabel(w) ? (C(), M("span", Mp, Y(c(t).cachedAgeLabel(w)) + " ago ", 1)) : ne("", !0),
              R(tt, {
                variant: "danger",
                label: "Delete",
                disabled: !((B = c(t).accounts[w]) != null && B.configured) && !((O = c(t).accounts[w]) != null && O.base_url),
                onClick: (V) => A(w)
              }, null, 8, ["disabled", "onClick"]),
              R(tt, {
                variant: "standard",
                label: "Probe",
                loading: l.value[w],
                flashing: o.value[w],
                disabled: !((E = c(t).accounts[w]) != null && E.local) && !((K = c(t).accounts[w]) != null && K.configured) && !n.value[w].key && !n.value[w].base_url,
                onClick: (V) => x(w)
              }, null, 8, ["loading", "flashing", "disabled", "onClick"]),
              R(tt, {
                variant: "standard",
                label: "Load Models",
                loading: i.value[w],
                onClick: (V) => S(w)
              }, null, 8, ["loading", "onClick"])
            ]),
            (F = c(t).modelsByProvider[w]) != null && F.error ? (C(), M("div", Lp, Y(c(t).modelsByProvider[w].error), 1)) : ne("", !0),
            c(t).probeState[w] && c(t).probeState[w].status !== "available" ? (C(), M("div", Ip, Y(c(t).probeState[w].message), 1)) : ne("", !0),
            c(t).modelsFor(w).length > 0 ? (C(), M("div", Dp, [
              (C(!0), M(fe, null, Ne(c(t).modelsFor(w), (V) => (C(), M("span", {
                class: "fil-pm-model-tag",
                key: V
              }, [
                Bl(Y(V) + " ", 1),
                c(t).visionModelsFor(w).includes(V) ? (C(), M("span", Pp, "👁")) : ne("", !0)
              ]))), 128))
            ])) : ne("", !0),
            c(t).lastError ? (C(), M("div", Np, Y(c(t).lastError), 1)) : ne("", !0)
          ], 64))
        ], 2);
      }), 128))
    ]));
  }
}), Tp = /* @__PURE__ */ xe(Rp, [["__scopeId", "data-v-5198f2ae"]]);
let Un = null;
function Ep(e) {
  Un && (Un.unmount(), Un = null), Un = gi(Tp).use(vi()), Un.mount(e), console.info("[FiL_Design_ImageMind] provider manager mounted");
}
function Vp(e) {
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
    render: (n) => Ep(n)
  }), console.info("[FiL_Design_ImageMind] provider manager sidebar tab registered");
}
const Op = [
  {
    id: "FiL_Design_ImageMind.DefaultProvider",
    name: "Default LLM Provider",
    type: "combo",
    defaultValue: "Ollama",
    options: ["Ollama", "LM Studio", "Groq", "Google AI", "OpenRouter", "Cloudflare"],
    category: [In, "General"],
    tooltip: "Default AI Provider pre-selected in new Provider Loader nodes."
  },
  {
    id: "FiL_Design_ImageMind.RequestTimeout",
    name: "Request Timeout (seconds)",
    type: "number",
    defaultValue: 60,
    attrs: { min: 5, max: 600, step: 5 },
    category: [In, "Network"],
    tooltip: "Global timeout in seconds for API calls to local/cloud LLM providers."
  },
  {
    id: "FiL_Design_ImageMind.AutoCleanVRAM",
    name: "Auto VRAM cleanup on completion",
    type: "boolean",
    defaultValue: !1,
    category: [In, "Performance"],
    tooltip: "Automatically purge empty torch cache and PyTorch VRAM after node execution."
  }
], $p = [
  {
    id: "FiL_Design_ImageMind.Language",
    name: "Language",
    type: "combo",
    defaultValue: "en",
    options: ["en", "ru"],
    tooltip: "UI language for FiL_Design_ImageMind node tooltips and labels (English / Russian).",
    category: [In, "Language"]
  }
];
function gr(e) {
  Zo(`${Yt}/log_level`, { level: String(e) }).catch(() => {
  });
}
const Bp = [
  {
    id: "FiL_Design_ImageMind.Logging.Level",
    name: "Log level",
    type: "combo",
    defaultValue: "WARNING",
    options: ["DEBUG", "INFO", "WARNING", "ERROR"],
    category: [In, "Logging"],
    tooltip: "Python backend log verbosity for this node pack.",
    onChange: gr
  }
];
function Hp(e) {
  const t = e("FiL_Design_ImageMind.Logging.Level", "WARNING");
  gr(t);
}
const _r = {
  Default: "default",
  Cyberpunk: "cyberpunk",
  Fallout: "fallout",
  Pipboy: "pipboy",
  "FiL Green": "travelmate",
  Pixaroma: "pixaroma"
};
function Up(e) {
  const t = _r[String(e)] ?? "default";
  Ja(t);
  const n = globalThis.app;
  n && Za(n);
}
const Gp = [
  {
    id: "FiL_Design_ImageMind.Theme",
    name: "Node theme",
    type: "combo",
    defaultValue: "Default",
    options: ["Default", "Cyberpunk", "Fallout", "Pipboy", "FiL Green", "Pixaroma"],
    category: [In, "Appearance", "Theme"],
    tooltip: "Recolors every FiL_Design_ImageMind node panel and adds a small themed flourish (neon glow for Cyberpunk, a CRT scanline texture for Pipboy and Fallout, acid-lime glow for Travelmate). Pixaroma matches the ComfyUI-Pixaroma node pack's own colors. Applies instantly, no reload.",
    onChange: Up
  }
];
function Wp() {
  Ya(zl());
  const e = globalThis.app;
  e && Za(e);
}
function jp() {
  if (typeof MutationObserver > "u" || typeof document > "u") return;
  let e = zl();
  new MutationObserver(() => {
    const t = zl();
    t !== e && (e = t, Wp());
  }).observe(document.documentElement, { attributes: !0, attributeFilter: ["style", "class"] });
}
function zp(e) {
  const t = e("FiL_Design_ImageMind.Theme", "Default");
  Ya(zl()), Ja(_r[t] ?? "default"), jp();
}
const Kp = [
  ...Op,
  ...$p,
  ...Bp,
  ...Gp
];
function ei(e, t, n) {
  var o, i, s, a, r, d, u, f;
  const l = n ?? globalThis;
  try {
    const p = (s = (i = (o = l.app) == null ? void 0 : o.extensionManager) == null ? void 0 : i.setting) == null ? void 0 : s.get;
    if (typeof p == "function") return p(e, t);
    const g = ((r = (a = l.ui) == null ? void 0 : a.settings) == null ? void 0 : r.getSettingValue) ?? ((f = (u = (d = globalThis.app) == null ? void 0 : d.ui) == null ? void 0 : u.settings) == null ? void 0 : f.getSettingValue);
    if (typeof g == "function") return g(e, t);
  } catch (p) {
    console.warn(`[FiL_Design_ImageMind] setting read failed for "${e}":`, p);
  }
  return t;
}
ip();
function qp(e) {
  var t, n;
  try {
    const l = globalThis.app, o = ((t = l == null ? void 0 : l.graph) == null ? void 0 : t._nodes) ?? [];
    for (const i of o) {
      const s = i;
      if (s.comfyClass === "FiLOpticScanner") {
        const a = (n = s.inputs) == null ? void 0 : n.find((r) => r.name === "config");
        (!a || a.link == null) && console.warn(`${mn} Optic Scanner #${s.id} has no Provider Loader wired to its "config" slot — execution will fail.`);
      }
    }
  } catch (l) {
    console.warn(`${mn} preflight fallback:`, l);
  }
  return e;
}
function Xp(e) {
  return {
    name: sp,
    // Declarative settings — registered BEFORE setup so the panel renders
    // even if a later installer throws.
    settings: Kp,
    // Declarative shortcuts — modern ComfyUI registers these through its
    // native command palette / keybinding system. The keydown fallback in
    // installShortcuts only kicks in when this API is unavailable.
    commands: Qf,
    keybindings: Zf,
    async setup() {
      const t = [
        () => qf(),
        () => op(e),
        () => Vp(e),
        () => Hp((n, l) => ei(n, l, e)),
        () => zp((n, l) => ei(n, l, e))
      ];
      for (const n of t)
        try {
          n();
        } catch (l) {
          console.warn(`${mn} installer ${n.name || "anonymous"} failed:`, l);
        }
    },
    getCustomWidgets() {
      return {};
    },
    async beforeRegisterNodeDef(t, n) {
      const l = cr[n.name];
      if (l)
        try {
          await l.register(t, n);
        } catch (o) {
          console.warn(`${mn} failed to register "${n.name}":`, o);
        }
    },
    async graphToPrompt(t) {
      return qp(t);
    }
  };
}
async function Yp() {
  if (typeof fetch > "u") return;
  let e;
  try {
    e = await fetch(`${Yt}/node_contracts`);
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
  const n = new Set(Object.keys(t.node_ids ?? {})), l = new Set(Object.keys(cr));
  for (const o of n)
    l.has(o) || console.warn(`${mn} server expects "${o}" but local JS does not register it`);
  for (const o of l)
    n.has(o) || console.warn(`${mn} JS registers "${o}" but server does not expose a contract`);
}
yd();
Ed();
Yp().catch((e) => {
  console.warn("[FiL_Design_ImageMind] contract self-check failed:", e);
});
const br = Xp(Ns);
Ns.registerExtension(br);
console.info(`[FiL_Design_ImageMind] extension registered as "${br.name}"`);
const Jp = ["aria-checked", "disabled", "title", "onClick"], Qp = /* @__PURE__ */ we({
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
    const t = e, n = nt(e, "modelValue"), l = q(() => ({
      gridTemplateColumns: `repeat(${Math.max(1, t.columns)}, minmax(0, 1fr))`
    }));
    function o(i) {
      t.disabled || i !== n.value && (n.value = i);
    }
    return (i, s) => (C(), M("div", {
      class: "fil-w-chips",
      style: ct(l.value),
      role: "radiogroup"
    }, [
      (C(!0), M(fe, null, Ne(e.options, (a) => (C(), M("button", {
        key: a,
        type: "button",
        role: "radio",
        class: _e(["fil-w-chip", { active: a === n.value, disabled: e.disabled }]),
        "aria-checked": a === n.value,
        disabled: e.disabled,
        title: a,
        onClick: (r) => o(a)
      }, Y(a), 11, Jp))), 128))
    ], 4));
  }
}), Is = /* @__PURE__ */ xe(Qp, [["__scopeId", "data-v-23d693d7"]]), Zp = { class: "fil-w-chiplist" }, em = ["placeholder", "aria-label", "disabled"], tm = {
  class: "fil-w-chip-scroll",
  role: "radiogroup"
}, nm = ["aria-checked", "disabled", "title", "onClick"], lm = {
  key: 0,
  class: "fil-w-chip-empty"
}, om = /* @__PURE__ */ we({
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
    const t = e, n = nt(e, "modelValue"), l = /* @__PURE__ */ ce(""), o = q(() => {
      const s = l.value.trim().toLowerCase();
      return s ? t.options.filter((a) => a.toLowerCase().includes(s)) : t.options;
    });
    function i(s) {
      t.disabled || s !== n.value && (n.value = s);
    }
    return (s, a) => (C(), M("div", Zp, [
      e.searchable ? Qe((C(), M("input", {
        key: 0,
        "onUpdate:modelValue": a[0] || (a[0] = (r) => l.value = r),
        class: "fil-w-search",
        type: "search",
        placeholder: e.placeholder,
        "aria-label": e.placeholder,
        disabled: e.disabled,
        spellcheck: "false"
      }, null, 8, em)), [
        [st, l.value]
      ]) : ne("", !0),
      D("div", tm, [
        (C(!0), M(fe, null, Ne(o.value, (r) => (C(), M("button", {
          key: r,
          type: "button",
          role: "radio",
          class: _e(["fil-w-chip", { active: r === n.value, disabled: e.disabled }]),
          "aria-checked": r === n.value,
          disabled: e.disabled,
          title: r,
          onClick: (d) => i(r)
        }, Y(r), 11, nm))), 128)),
        o.value.length === 0 ? (C(), M("div", lm, Y(l.value ? "No matches" : "Empty"), 1)) : ne("", !0)
      ])
    ]));
  }
}), im = /* @__PURE__ */ xe(om, [["__scopeId", "data-v-6cab4842"]]), sm = ["title"], am = {
  key: 0,
  class: "fil-combo-label"
}, rm = ["disabled", "aria-expanded"], um = { class: "fil-combo-trigger-label" }, cm = {
  key: 1,
  class: "fil-combo-badge"
}, dm = ["placeholder"], fm = { class: "fil-combo-list" }, pm = ["aria-selected", "onMouseenter", "onClick"], mm = { class: "fil-combo-option-label" }, hm = {
  key: 1,
  class: "fil-combo-badge"
}, gm = {
  key: 0,
  class: "fil-combo-empty"
}, _m = /* @__PURE__ */ we({
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
    const t = e, n = nt(e, "modelValue"), l = /* @__PURE__ */ ce(!1), o = /* @__PURE__ */ ce(""), i = /* @__PURE__ */ ce(0), s = /* @__PURE__ */ ce(null), a = /* @__PURE__ */ ce(null), r = /* @__PURE__ */ ce(null), d = /* @__PURE__ */ ce({}), u = q(() => t.options.find((w) => w.value === n.value)), f = q(() => {
      if (!t.searchable || !o.value.trim()) return t.options;
      const w = o.value.trim().toLowerCase();
      return t.options.filter((T) => (T.label ?? T.value).toLowerCase().includes(w));
    });
    function p(w) {
      return w.label ?? w.value;
    }
    function g() {
      const w = s.value;
      if (!w) return;
      const T = w.getBoundingClientRect(), B = window.innerHeight, O = 260, E = B - T.bottom, K = E < O && T.top > E;
      d.value = {
        left: `${T.left}px`,
        width: `${T.width}px`,
        ...K ? { bottom: `${B - T.top + 4}px` } : { top: `${T.bottom + 4}px` }
      };
    }
    function m(w) {
      var B;
      const T = w.target;
      T instanceof Element && ((B = a.value) != null && B.contains(T)) || A();
    }
    function _() {
      t.disabled || (l.value = !0, o.value = "", i.value = Math.max(
        0,
        f.value.findIndex((w) => w.value === n.value)
      ), Rn(() => {
        var w;
        g(), t.searchable && ((w = r.value) == null || w.focus()), window.addEventListener("resize", m), window.addEventListener("scroll", m, !0), document.addEventListener("mousedown", x, !0);
      }));
    }
    function A() {
      l.value && (l.value = !1, window.removeEventListener("resize", m), window.removeEventListener("scroll", m, !0), document.removeEventListener("mousedown", x, !0));
    }
    function x(w) {
      var B, O;
      const T = w.target;
      (B = s.value) != null && B.contains(T) || (O = a.value) != null && O.contains(T) || A();
    }
    function S() {
      l.value ? A() : _();
    }
    function k(w) {
      var T;
      n.value = w.value, A(), (T = s.value) == null || T.focus();
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
      var B;
      const T = f.value;
      if (w.key === "ArrowDown")
        w.preventDefault(), i.value = T.length ? (i.value + 1) % T.length : 0;
      else if (w.key === "ArrowUp")
        w.preventDefault(), i.value = T.length ? (i.value - 1 + T.length) % T.length : 0;
      else if (w.key === "Enter") {
        w.preventDefault();
        const O = T[i.value];
        O && k(O);
      } else w.key === "Escape" && (w.preventDefault(), A(), (B = s.value) == null || B.focus());
    }
    return $e(o, () => {
      i.value = 0;
    }), Tn(() => {
      window.removeEventListener("resize", m), window.removeEventListener("scroll", m, !0), document.removeEventListener("mousedown", x, !0);
    }), (w, T) => {
      var B, O;
      return C(), M("div", {
        class: "fil-combo",
        title: e.title
      }, [
        e.label ? (C(), M("label", am, Y(e.label), 1)) : ne("", !0),
        D("button", {
          ref_key: "triggerRef",
          ref: s,
          type: "button",
          class: _e(["fil-combo-trigger", { open: l.value, disabled: e.disabled }]),
          disabled: e.disabled,
          "aria-expanded": l.value,
          "aria-haspopup": "listbox",
          onClick: S,
          onKeydown: v
        }, [
          (B = u.value) != null && B.icon ? (C(), Ce(Ht, {
            key: 0,
            name: u.value.icon,
            size: 16
          }, null, 8, ["name"])) : ne("", !0),
          D("span", um, Y(u.value ? p(u.value) : n.value), 1),
          (O = u.value) != null && O.badge ? (C(), M("span", cm, Y(u.value.badge), 1)) : ne("", !0),
          T[1] || (T[1] = D("span", { class: "fil-combo-chevron" }, "▾", -1))
        ], 42, rm),
        (C(), Ce(ma, { to: "body" }, [
          l.value ? (C(), M("div", {
            key: 0,
            ref_key: "panelRef",
            ref: a,
            class: "fil-combo-panel",
            style: ct(d.value),
            role: "listbox",
            onKeydown: y
          }, [
            e.searchable ? Qe((C(), M("input", {
              key: 0,
              ref_key: "searchRef",
              ref: r,
              "onUpdate:modelValue": T[0] || (T[0] = (E) => o.value = E),
              type: "search",
              class: "fil-combo-search",
              placeholder: e.placeholder,
              spellcheck: "false"
            }, null, 8, dm)), [
              [st, o.value]
            ]) : ne("", !0),
            D("div", fm, [
              (C(!0), M(fe, null, Ne(f.value, (E, K) => (C(), M("button", {
                key: E.value,
                type: "button",
                class: _e(["fil-combo-option", { active: K === i.value, selected: E.value === n.value }]),
                role: "option",
                "aria-selected": E.value === n.value,
                onMouseenter: (F) => i.value = K,
                onClick: (F) => k(E)
              }, [
                E.icon ? (C(), Ce(Ht, {
                  key: 0,
                  name: E.icon,
                  size: 16
                }, null, 8, ["name"])) : ne("", !0),
                D("span", mm, Y(p(E)), 1),
                E.badge ? (C(), M("span", hm, Y(E.badge), 1)) : ne("", !0)
              ], 42, pm))), 128)),
              f.value.length === 0 ? (C(), M("div", gm, "No matches")) : ne("", !0)
            ])
          ], 36)) : ne("", !0)
        ]))
      ], 8, sm);
    };
  }
}), vr = /* @__PURE__ */ xe(_m, [["__scopeId", "data-v-605297df"]]), bm = ["data-ok", "data-err"], vm = /* @__PURE__ */ we({
  __name: "FilInfo",
  props: {
    text: {},
    ok: { type: Boolean },
    err: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (C(), M("div", {
      class: "fil-w-info",
      "data-ok": e.ok || void 0,
      "data-err": e.err || void 0
    }, Y(e.text), 9, bm));
  }
}), Dn = /* @__PURE__ */ xe(vm, [["__scopeId", "data-v-be74f393"]]), ym = ["title"], wm = {
  key: 0,
  class: "fil-w-numfield-label"
}, Sm = { class: "fil-w-num-wrap" }, xm = ["disabled", "min", "max", "step", "aria-label"], Cm = { class: "fil-w-num-step" }, Am = ["disabled"], km = ["disabled"], Fm = /* @__PURE__ */ we({
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
    const t = e, n = nt(e, "modelValue"), l = q(() => n.value), o = /* @__PURE__ */ ce(a(l.value));
    $e(l, (m) => {
      i.value || (o.value = a(m));
    });
    let i = /* @__PURE__ */ ce(!1), s = null;
    function a(m) {
      return Number.isFinite(m) ? String(m) : "";
    }
    function r(m) {
      const _ = (m || "").trim();
      if (_ === "" || !/^[0-9+\-*/(). ]+$/.test(_.replace(/\^/g, "**"))) return null;
      try {
        const A = new Function(`"use strict"; return (${_});`), x = Number(A());
        return Number.isFinite(x) ? x : null;
      } catch {
        return null;
      }
    }
    function d(m) {
      if (m === null) {
        o.value = a(l.value);
        return;
      }
      let _ = m;
      t.min != null && _ < t.min && (_ = t.min), t.max != null && _ > t.max && (_ = t.max), _ !== l.value && (n.value = _), o.value = a(_);
    }
    function u() {
      i.value = !0, s = o.value;
    }
    function f() {
      i.value = !1, d(r(o.value)), s = null;
    }
    function p(m) {
      m.key === "Enter" ? (m.preventDefault(), d(r(o.value)), m.target.blur()) : m.key === "Escape" ? (m.preventDefault(), s !== null && (o.value = s), m.target.blur()) : m.key === "ArrowUp" ? (m.preventDefault(), g(m.shiftKey ? 10 : 1)) : m.key === "ArrowDown" && (m.preventDefault(), g(m.shiftKey ? -10 : -1));
    }
    function g(m) {
      let _ = l.value + m * (t.step || 1);
      t.min != null && _ < t.min && (_ = t.min), t.max != null && _ > t.max && (_ = t.max), n.value = _, o.value = a(_);
    }
    return (m, _) => (C(), M("div", {
      class: _e(["fil-w-numfield", { "no-label": !e.label }]),
      title: e.title
    }, [
      e.label ? (C(), M("label", wm, Y(e.label), 1)) : ne("", !0),
      D("div", Sm, [
        Qe(D("input", {
          "onUpdate:modelValue": _[0] || (_[0] = (A) => o.value = A),
          type: "text",
          class: "fil-w-num",
          inputmode: "numeric",
          disabled: e.disabled,
          min: e.min ?? void 0,
          max: e.max ?? void 0,
          step: e.step ?? void 0,
          "aria-label": e.ariaLabel ?? e.label,
          onFocus: u,
          onBlur: f,
          onKeydown: p
        }, null, 40, xm), [
          [st, o.value]
        ]),
        D("div", Cm, [
          D("button", {
            type: "button",
            class: "fil-w-num-btn",
            tabindex: "-1",
            "aria-label": "Increment",
            disabled: e.disabled || e.max != null && n.value >= e.max,
            onMousedown: _[1] || (_[1] = Go(() => {
            }, ["prevent"])),
            onClick: _[2] || (_[2] = (A) => g(A.shiftKey ? 10 : 1))
          }, "▲", 40, Am),
          D("button", {
            type: "button",
            class: "fil-w-num-btn",
            tabindex: "-1",
            "aria-label": "Decrement",
            disabled: e.disabled || e.min != null && n.value <= e.min,
            onMousedown: _[3] || (_[3] = Go(() => {
            }, ["prevent"])),
            onClick: _[4] || (_[4] = (A) => g(A.shiftKey ? -10 : -1))
          }, "▼", 40, km)
        ])
      ])
    ], 10, ym));
  }
}), dt = /* @__PURE__ */ xe(Fm, [["__scopeId", "data-v-3e158373"]]), Mm = { class: "fil-w-seedrow" }, Lm = ["value", "readonly", "aria-label", "title"], Im = ["title"], Dm = ["title"], Pm = ["title"], Nm = /* @__PURE__ */ we({
  __name: "FilSeedRow",
  props: {
    display: {},
    mode: {},
    fieldAriaLabel: {},
    fieldTitle: {},
    labels: {},
    titles: {}
  },
  emits: ["input-seed", "random", "use-last", "new-fixed"],
  setup(e, { emit: t }) {
    const n = t;
    function l(o) {
      n("input-seed", Number(o.target.value) || 0);
    }
    return (o, i) => (C(), M("div", Mm, [
      D("input", {
        value: e.display,
        type: "text",
        class: _e(["fil-w-seedrow-field", { "is-random": e.mode === "random" }]),
        readonly: e.mode === "random",
        "aria-label": e.fieldAriaLabel,
        title: e.fieldTitle,
        onInput: l
      }, null, 42, Lm),
      D("button", {
        type: "button",
        class: _e(["fil-w-seedrow-pill", { active: e.mode === "random" }]),
        title: e.titles.random,
        onClick: i[0] || (i[0] = (s) => n("random"))
      }, Y(e.labels.random), 11, Im),
      D("button", {
        type: "button",
        class: "fil-w-seedrow-pill",
        title: e.titles.useLast,
        onClick: i[1] || (i[1] = (s) => n("use-last"))
      }, Y(e.labels.useLast), 9, Dm),
      D("button", {
        type: "button",
        class: "fil-w-seedrow-pill is-accent",
        title: e.titles.newFixed,
        onClick: i[2] || (i[2] = (s) => n("new-fixed"))
      }, Y(e.labels.newFixed), 9, Pm)
    ]));
  }
}), yr = /* @__PURE__ */ xe(Nm, [["__scopeId", "data-v-5802f079"]]), Rm = ["aria-expanded", "disabled"], Tm = { class: "fil-w-section-arrow" }, Em = { class: "fil-w-section-title" }, Vm = /* @__PURE__ */ we({
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
    const t = e, n = nt(e, "modelValue");
    function l() {
      t.collapsible && (n.value = !n.value);
    }
    const o = q(() => n.value ? "▶" : "▼");
    return (i, s) => (C(), M("button", {
      type: "button",
      class: _e(["fil-w-section", { collapsible: e.collapsible, collapsed: n.value }]),
      "aria-expanded": !n.value,
      disabled: !e.collapsible,
      onClick: l
    }, [
      D("span", Tm, Y(o.value), 1),
      D("span", Em, Y(e.title), 1)
    ], 10, Rm));
  }
}), Ve = /* @__PURE__ */ xe(Vm, [["__scopeId", "data-v-7c27965b"]]), Om = ["title"], $m = {
  key: 0,
  class: "fil-w-segmented-label"
}, Bm = ["aria-label"], Hm = ["aria-pressed", "disabled", "tabindex", "onClick", "onKeydown"], Um = /* @__PURE__ */ we({
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
    const t = e, n = nt(e, "modelValue"), l = /* @__PURE__ */ ce([]);
    function o(a) {
      var r;
      return ((r = t.optionLabels) == null ? void 0 : r[a]) ?? a;
    }
    function i(a) {
      t.disabled || a !== n.value && (n.value = a);
    }
    function s(a, r) {
      var u, f;
      const d = t.options;
      if (a.key === "ArrowRight" || a.key === "ArrowDown") {
        a.preventDefault();
        const p = d[(r + 1) % d.length];
        i(p), (u = l.value[(r + 1) % d.length]) == null || u.focus();
      } else if (a.key === "ArrowLeft" || a.key === "ArrowUp") {
        a.preventDefault();
        const p = d[(r - 1 + d.length) % d.length];
        i(p), (f = l.value[(r - 1 + d.length) % d.length]) == null || f.focus();
      }
    }
    return (a, r) => (C(), M("div", {
      class: "fil-w-segmented",
      title: e.title
    }, [
      e.label ? (C(), M("label", $m, Y(e.label), 1)) : ne("", !0),
      D("div", {
        class: _e(["fil-w-pill", { disabled: e.disabled }]),
        role: "group",
        "aria-label": e.label
      }, [
        (C(!0), M(fe, null, Ne(e.options, (d, u) => (C(), M("button", {
          key: d,
          ref_for: !0,
          ref: (f) => {
            f && (l.value[u] = f);
          },
          type: "button",
          class: _e(["fil-w-seg", { active: d === n.value }]),
          "aria-pressed": d === n.value,
          disabled: e.disabled,
          tabindex: d === n.value ? 0 : -1,
          onClick: (f) => i(d),
          onKeydown: (f) => s(f, u)
        }, Y(o(d)), 43, Hm))), 128))
      ], 10, Bm)
    ], 8, Om));
  }
}), je = /* @__PURE__ */ xe(Um, [["__scopeId", "data-v-80a17629"]]), Gm = ["title"], Wm = {
  key: 0,
  class: "fil-w-select-label"
}, jm = ["disabled", "aria-label"], zm = ["value"], Km = /* @__PURE__ */ we({
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
    const t = nt(e, "modelValue");
    return (n, l) => (C(), M("div", {
      class: "fil-w-select",
      title: e.title
    }, [
      e.label ? (C(), M("label", Wm, Y(e.label), 1)) : ne("", !0),
      Qe(D("select", {
        "onUpdate:modelValue": l[0] || (l[0] = (o) => t.value = o),
        class: "fil-w-select-input",
        disabled: e.disabled,
        "aria-label": e.label
      }, [
        (C(!0), M(fe, null, Ne(e.options, (o) => (C(), M("option", {
          key: o,
          value: o
        }, Y(o), 9, zm))), 128))
      ], 8, jm), [
        [ld, t.value]
      ])
    ], 8, Gm));
  }
}), Kn = /* @__PURE__ */ xe(Km, [["__scopeId", "data-v-f303e789"]]), qm = ["title"], Xm = {
  key: 0,
  class: "fil-w-slider-label"
}, Ym = { class: "fil-w-slider-row" }, Jm = ["value", "min", "max", "step", "disabled", "aria-label"], Qm = /* @__PURE__ */ we({
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
    const t = e, n = nt(e, "modelValue"), l = q({
      get: () => {
        let i = n.value;
        return i < t.min && (i = t.min), i > t.max && (i = t.max), i;
      },
      set: (i) => {
        let s = i;
        s < t.min && (s = t.min), s > t.max && (s = t.max), n.value = s;
      }
    });
    function o(i) {
      const s = Number(i.target.value);
      l.value = s;
    }
    return (i, s) => (C(), M("div", {
      class: "fil-w-slider",
      title: e.title
    }, [
      e.label ? (C(), M("label", Xm, Y(e.label), 1)) : ne("", !0),
      D("div", Ym, [
        D("input", {
          type: "range",
          class: "fil-w-slider-range",
          value: l.value,
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label,
          onInput: o
        }, null, 40, Jm),
        R(dt, {
          modelValue: l.value,
          "onUpdate:modelValue": s[0] || (s[0] = (a) => l.value = a),
          min: e.min,
          max: e.max,
          step: e.step,
          disabled: e.disabled,
          "aria-label": e.label
        }, null, 8, ["modelValue", "min", "max", "step", "disabled", "aria-label"])
      ])
    ], 8, qm));
  }
}), Oe = /* @__PURE__ */ xe(Qm, [["__scopeId", "data-v-bcb4fa2a"]]), Zm = {
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
}, eh = {}, th = {}, nh = {}, lh = {
  ...Zm,
  ...eh,
  ...th,
  ...nh
}, oh = "FiL_Design_ImageMind.Language", wr = "en", Pt = /* @__PURE__ */ Gt({
  lang: wr,
  translations: {},
  loaded: !1
});
let Ds = null;
async function ih(e) {
  try {
    const t = await zn(`/fil_design_imagemind/locale/${encodeURIComponent(e)}`);
    Pt.translations = t, Pt.lang = e;
  } catch (t) {
    console.warn(`[FiL_Design_ImageMind] failed to load locale "${e}":`, t);
  } finally {
    Pt.loaded = !0;
  }
}
function sh() {
  if (Ds) return;
  const e = ei(oh, wr);
  Ds = ih(e);
}
function ah(e, t, n, l) {
  const o = e % 10, i = e % 100;
  return o === 1 && i !== 11 ? t : o >= 2 && o <= 4 && (i < 10 || i >= 20) ? n : l;
}
function bt() {
  sh();
  function e(n, l) {
    return Pt.translations[n] ?? l;
  }
  function t(n, l, o, i, s) {
    const a = Pt.translations[`${n}_one`] ?? o, r = Pt.translations[`${n}_few`] ?? i, d = Pt.translations[`${n}_many`] ?? s;
    return Pt.lang === "ru" ? ah(l, a, r, d) : l === 1 ? a : d;
  }
  return { t: e, tPlural: t, state: /* @__PURE__ */ Pl(Pt) };
}
const rh = { class: "fil-style-picker" }, uh = {
  key: 0,
  class: "fil-style-selected-bar"
}, ch = { class: "fil-chip-text" }, dh = ["onClick"], fh = { class: "fil-style-cats" }, ph = ["onClick"], mh = { class: "fil-style-search-wrap" }, hh = ["placeholder", "aria-label"], gh = ["title"], _h = { class: "fil-style-grid" }, bh = ["title", "onClick"], vh = { class: "fil-style-tile-preview" }, yh = ["src"], wh = {
  key: 1,
  class: "fil-style-tile-placeholder"
}, Sh = { class: "fil-style-tile-label" }, xh = {
  key: 0,
  class: "fil-style-empty"
}, Al = "__all__", Ch = /* @__PURE__ */ we({
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
    const { t: n } = bt(), l = e, o = nt(e, "modelValue"), i = t;
    function s(S) {
      const k = S.indexOf("/");
      return k === -1 ? "" : S.slice(0, k);
    }
    function a(S) {
      const k = S.indexOf("/");
      return k === -1 ? S : S.slice(k + 1);
    }
    const r = q(() => {
      const S = o.value || "";
      return !S || S === "None" ? [] : S.split("|").map((k) => k.trim()).filter((k) => k && k !== "None");
    }), d = q(() => new Set(r.value));
    function u(S) {
      return d.value.has(S);
    }
    const f = q(() => {
      const S = /* @__PURE__ */ new Set(), k = [];
      for (const v of l.styles) {
        const y = s(v);
        y && !S.has(y) && (S.add(y), k.push(y));
      }
      return k;
    }), p = /* @__PURE__ */ ce(Al), g = /* @__PURE__ */ ce(""), m = q(() => {
      const S = g.value.trim().toLowerCase();
      return l.styles.filter((k) => p.value !== Al && s(k) !== p.value ? !1 : S ? k.toLowerCase().includes(S) : !0);
    });
    function _(S) {
      return lh[S];
    }
    function A(S) {
      const k = r.value.filter((y) => y !== S), v = k.length > 0 ? k.join(" | ") : "None";
      o.value = v, i("select", v);
    }
    function x(S) {
      if (l.multi) {
        let k;
        d.value.has(S) ? k = r.value.filter((y) => y !== S) : k = [...r.value, S];
        const v = k.length > 0 ? k.join(" | ") : "None";
        o.value = v, i("select", v);
      } else {
        const k = o.value === S ? "None" : S;
        o.value = k, i("select", k);
      }
    }
    return (S, k) => (C(), M("div", rh, [
      r.value.length > 0 ? (C(), M("div", uh, [
        (C(!0), M(fe, null, Ne(r.value, (v) => (C(), M("span", {
          key: v,
          class: "fil-style-chip"
        }, [
          D("span", ch, Y(a(v)), 1),
          D("button", {
            type: "button",
            class: "fil-chip-remove",
            title: "Remove style",
            onClick: Go((y) => A(v), ["stop"])
          }, "×", 8, dh)
        ]))), 128))
      ])) : ne("", !0),
      D("div", fh, [
        D("button", {
          type: "button",
          class: _e(["fil-style-cat", { active: p.value === Al }]),
          onClick: k[0] || (k[0] = (v) => p.value = Al)
        }, Y(c(n)("fsp_all_categories", "All")), 3),
        (C(!0), M(fe, null, Ne(f.value, (v) => (C(), M("button", {
          key: v,
          type: "button",
          class: _e(["fil-style-cat", { active: p.value === v }]),
          onClick: (y) => p.value = v
        }, Y(v), 11, ph))), 128))
      ]),
      D("div", mh, [
        Qe(D("input", {
          "onUpdate:modelValue": k[1] || (k[1] = (v) => g.value = v),
          type: "search",
          class: "fil-style-search",
          placeholder: c(n)("fsp_search_placeholder", "Search styles…"),
          "aria-label": c(n)("fsp_search_aria", "Search styles"),
          spellcheck: "false"
        }, null, 8, hh), [
          [st, g.value]
        ]),
        g.value.trim().length > 0 ? (C(), M("button", {
          key: 0,
          type: "button",
          class: "fil-style-search-clear",
          title: c(n)("fsp_clear_search", "Clear search"),
          onClick: k[2] || (k[2] = (v) => g.value = "")
        }, " × ", 8, gh)) : ne("", !0)
      ]),
      D("div", _h, [
        (C(!0), M(fe, null, Ne(m.value, (v) => (C(), M("button", {
          key: v,
          type: "button",
          class: _e(["fil-style-tile", { active: u(v) }]),
          title: v,
          onClick: (y) => x(v)
        }, [
          D("span", vh, [
            _(v) ? (C(), M("img", {
              key: 0,
              src: _(v),
              class: "fil-style-tile-img",
              alt: ""
            }, null, 8, yh)) : (C(), M("span", wh, Y(a(v).split(" ")[0]), 1))
          ]),
          D("span", Sh, Y(a(v)), 1)
        ], 10, bh))), 128)),
        m.value.length === 0 ? (C(), M("div", xh, "No matches")) : ne("", !0)
      ])
    ]));
  }
}), Ll = /* @__PURE__ */ xe(Ch, [["__scopeId", "data-v-572f1dc7"]]), Ah = ["title"], kh = { class: "fil-w-textarea-label" }, Fh = ["placeholder", "rows", "disabled", "readonly"], Mh = ["title", "placeholder", "rows", "disabled", "readonly"], Lh = /* @__PURE__ */ we({
  __name: "FilTextArea",
  props: /* @__PURE__ */ qe({
    label: {},
    title: {},
    placeholder: {},
    rows: { default: 2 },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    linked: { type: Boolean }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = nt(e, "modelValue");
    return (n, l) => e.label ? (C(), M("div", {
      key: 0,
      class: "fil-w-textarea-row",
      title: e.title
    }, [
      D("label", kh, Y(e.label), 1),
      Qe(D("textarea", {
        "onUpdate:modelValue": l[0] || (l[0] = (o) => t.value = o),
        class: _e(["fil-w-textarea", { "is-linked": e.linked }]),
        placeholder: e.placeholder,
        rows: e.rows,
        disabled: e.disabled,
        readonly: e.readonly || e.linked
      }, null, 10, Fh), [
        [st, t.value]
      ])
    ], 8, Ah)) : Qe((C(), M("textarea", {
      key: 1,
      "onUpdate:modelValue": l[1] || (l[1] = (o) => t.value = o),
      class: _e(["fil-w-textarea", { "is-linked": e.linked }]),
      title: e.title,
      placeholder: e.placeholder,
      rows: e.rows,
      disabled: e.disabled,
      readonly: e.readonly || e.linked
    }, null, 10, Mh)), [
      [st, t.value]
    ]);
  }
}), Il = /* @__PURE__ */ xe(Lh, [["__scopeId", "data-v-f3b21190"]]), Ih = ["title"], Dh = {
  key: 0,
  class: "fil-w-text-label"
}, Ph = ["placeholder", "disabled", "aria-label"], Nh = /* @__PURE__ */ we({
  __name: "FilTextInput",
  props: /* @__PURE__ */ qe({
    label: {},
    title: {},
    placeholder: {},
    disabled: { type: Boolean }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = nt(e, "modelValue");
    return (n, l) => (C(), M("div", {
      class: "fil-w-text",
      title: e.title
    }, [
      e.label ? (C(), M("label", Dh, Y(e.label), 1)) : ne("", !0),
      Qe(D("input", {
        "onUpdate:modelValue": l[0] || (l[0] = (o) => t.value = o),
        type: "text",
        class: "fil-w-text-input",
        placeholder: e.placeholder,
        disabled: e.disabled,
        "aria-label": e.label
      }, null, 8, Ph), [
        [st, t.value]
      ])
    ], 8, Ih));
  }
}), Io = /* @__PURE__ */ xe(Nh, [["__scopeId", "data-v-d656e366"]]), Rh = ["title"], Th = {
  key: 0,
  class: "fil-w-toggle-label"
}, Eh = ["aria-checked", "aria-label", "disabled"], Vh = /* @__PURE__ */ we({
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
    const t = e, n = nt(e, "modelValue");
    function l() {
      t.disabled || (n.value = n.value === "ON" ? "OFF" : "ON");
    }
    return (o, i) => (C(), M("div", {
      class: _e(["fil-w-toggle", { bare: e.bare }]),
      title: e.title
    }, [
      e.label ? (C(), M("label", Th, Y(e.label), 1)) : ne("", !0),
      D("button", {
        type: "button",
        class: _e(["fil-w-switch", { on: n.value === "ON" }]),
        role: "switch",
        "aria-checked": n.value === "ON",
        "aria-label": e.label,
        disabled: e.disabled,
        onClick: l
      }, [...i[0] || (i[0] = [
        D("span", { class: "fil-w-switch-thumb" }, null, -1)
      ])], 10, Eh)
    ], 10, Rh));
  }
}), dn = /* @__PURE__ */ xe(Vh, [["__scopeId", "data-v-c41e86e9"]]), Oh = { class: "fil-seed-root" }, $h = ["readonly", "title", "aria-label"], Bh = { class: "fil-seed-actions" }, Hh = /* @__PURE__ */ we({
  __name: "Seed",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = bt(), l = q({
      get: () => t.state.nodeState.mode ?? "random",
      set: (d) => {
        t.state.nodeState.mode = d;
      }
    }), o = q({
      get: () => Number(t.state.nodeState.seed ?? 0) || 0,
      // Write the native seed widget directly, not just nodeState — a fixed
      // seed set only via nodeState can fail to reach the queued prompt.
      set: (d) => {
        t.state.nodeState.seed = d;
        const u = t.state.node ? ie(t.state.node, "seed") : null;
        u && (u.value = d);
      }
    });
    $e(l, (d) => {
      const u = t.state.node, f = u ? ie(u, "control_after_generate") : null;
      f && (f.value = d === "fixed" ? "fixed" : "randomize");
    }, { immediate: !0 }), $e(
      () => t.state.nodeState,
      (d) => {
        typeof d.mode == "string" && (l.value = d.mode), typeof d.seed == "number" && (o.value = Number(d.seed));
      },
      { deep: !0 }
    );
    function i() {
      l.value = "random";
    }
    function s() {
      const d = t.state.node, u = d ? ie(d, "seed") : null, f = u && Number.isFinite(Number(u.value)) ? Number(u.value) : t.state.lastRunSeed;
      if (f == null || !Number.isFinite(f)) {
        Bt.warning(n("sd_no_last_seed", "No last-run seed recorded yet"));
        return;
      }
      o.value = f, l.value = "fixed";
    }
    function a() {
      const d = Math.floor(Math.random() * 1e9) & 2147483647;
      o.value = d, l.value = "fixed";
    }
    const r = q({
      get: () => l.value === "fixed" ? `${o.value}` : "random",
      set: (d) => {
        const u = parseInt(String(d).replace(/[^0-9]/g, ""), 10);
        Number.isNaN(u) || (o.value = u, l.value = "fixed");
      }
    });
    return (d, u) => (C(), M("div", Oh, [
      Qe(D("input", {
        "onUpdate:modelValue": u[0] || (u[0] = (f) => r.value = f),
        type: "text",
        class: "fil-seed-display",
        readonly: l.value === "random",
        title: l.value === "fixed" ? c(n)("sd_locked", "Locked seed") : c(n)("sd_auto_random", "Auto-random"),
        "aria-label": c(n)("sd_aria_seed_value", "Seed value")
      }, null, 8, $h), [
        [st, r.value]
      ]),
      D("div", Bh, [
        R(c(tt), {
          label: "🔀",
          variant: "standard",
          title: c(n)("sd_mode", "Random generates a new seed each run."),
          onClick: i
        }, null, 8, ["title"]),
        R(c(tt), {
          label: "♻️",
          variant: "standard",
          title: c(n)("sd_use_last", "Reuse the seed from the last executed run."),
          onClick: s
        }, null, 8, ["title"]),
        R(c(tt), {
          label: "🎲",
          variant: "accent",
          title: c(n)("sd_new_fixed", "Generate a new random fixed seed."),
          onClick: a
        }, null, 8, ["title"])
      ])
    ]));
  }
}), Uh = /* @__PURE__ */ xe(Hh, [["__scopeId", "data-v-dca90760"]]), Gh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Uh
}, Symbol.toStringTag, { value: "Module" })), Wh = { class: "picker-container" }, jh = { class: "provider-tabs" }, zh = ["onClick"], Kh = { class: "tab-label" }, qh = {
  key: 0,
  class: "tab-badge"
}, Xh = { class: "provider-status-bar" }, Yh = { class: "status-info" }, Jh = { class: "provider-name" }, Qh = {
  key: 0,
  class: "status-badge loading"
}, Zh = {
  key: 1,
  class: "status-badge error"
}, eg = {
  key: 2,
  class: "status-badge online"
}, tg = {
  key: 3,
  class: "age-label"
}, ng = { class: "filter-controls" }, lg = { class: "search-input-wrap" }, og = ["placeholder"], ig = ["title"], sg = { class: "filter-segments" }, ag = { class: "models-list-wrapper" }, rg = {
  key: 0,
  class: "empty-state"
}, ug = {
  key: 1,
  class: "empty-state"
}, cg = ["aria-pressed", "onClick"], dg = { class: "model-main" }, fg = { class: "type-icon" }, pg = ["title"], mg = { class: "model-tags" }, hg = {
  key: 0,
  class: "tag vision"
}, gg = {
  key: 1,
  class: "tag text"
}, _g = {
  key: 2,
  class: "tag local"
}, bg = {
  key: 3,
  class: "tag free"
}, vg = {
  key: 4,
  class: "tag paid"
}, yg = { class: "picker-footer" }, wg = { class: "selection-summary" }, Sg = { key: 0 }, xg = {
  key: 1,
  class: "muted"
}, Cg = { class: "footer-actions" }, Ps = "fil_model_picker_view_mode", Ag = /* @__PURE__ */ we({
  __name: "ProviderModelPicker",
  props: {
    open: { type: Boolean, default: !1 },
    provider: { default: "ollama" },
    model: { default: "" }
  },
  emits: ["update:open", "select"],
  setup(e, { emit: t }) {
    const n = e, l = t, o = yi(), { t: i, tPlural: s } = bt(), a = /* @__PURE__ */ ce(n.provider), r = /* @__PURE__ */ ce(n.model), d = /* @__PURE__ */ ce(""), u = /* @__PURE__ */ ce("all"), f = /* @__PURE__ */ ce("all"), p = /* @__PURE__ */ ce(
      localStorage.getItem(Ps) || "list"
    );
    function g(I) {
      p.value = I;
      try {
        localStorage.setItem(Ps, I);
      } catch {
      }
    }
    const m = ["all", "vision", "text"], _ = q(() => ({
      all: i("pmp_all_types", "All Types"),
      vision: i("pmp_tag_vision_opt", "👁 Vision"),
      text: i("pmp_tag_text_opt", "📝 Text")
    })), A = q(() => ({
      all: i("pmp_all_tiers", "All Tiers"),
      local: i("pmp_tier_local", "💻 Local"),
      free: i("pmp_tier_free", "🆓 Free"),
      paid: i("pmp_tier_paid", "💎 Paid")
    })), x = ["list", "grid"], S = q(() => ({
      list: i("pmp_view_list", "☰ List"),
      grid: i("pmp_view_grid", "⊞ Tiles")
    })), k = q(
      () => a.value === "ollama" || a.value === "lmstudio" ? ["all", "local"] : ["all", "free", "paid"]
    );
    $e(
      () => n.open,
      (I) => {
        I && (a.value = n.provider || "ollama", r.value = n.model || "", d.value = "", u.value = "all", f.value = "all", v());
      }
    );
    async function v(I = !1) {
      try {
        await o.loadModels(a.value, I);
      } catch (L) {
        Bt.error(L instanceof Error ? L.message : String(L));
      }
    }
    function y(I) {
      a.value = I, d.value = "", f.value = "all";
      const L = o.modelsFor(I);
      L.length > 0 ? r.value = L[0] : r.value = "", v();
    }
    const w = q(() => o.modelsFor(a.value)), T = q(() => o.visionModelsFor(a.value)), B = q(() => o.isLoading(a.value)), O = q(() => o.probeState[a.value]), E = q(() => o.cachedAgeLabel(a.value, i));
    function K(I, L) {
      return L === "ollama" || L === "lmstudio" ? "local" : I.toLowerCase().includes(":free") ? "free" : "paid";
    }
    function F(I) {
      return T.value.includes(I);
    }
    const V = q(() => {
      let I = w.value;
      const L = d.value.trim().toLowerCase(), U = a.value;
      return L && (I = I.filter((ge) => ge.toLowerCase().includes(L))), u.value === "vision" ? I = I.filter((ge) => F(ge)) : u.value === "text" && (I = I.filter((ge) => !F(ge))), f.value !== "all" && (I = I.filter((ge) => K(ge, U) === f.value)), I;
    });
    function H(I) {
      r.value = I;
    }
    function N() {
      r.value && (l("select", { provider: a.value, model: r.value }), l("update:open", !1));
    }
    function $() {
      l("update:open", !1);
    }
    return (I, L) => (C(), Ce(Ln, {
      open: e.open,
      width: "860px",
      title: c(i)("pmp_title", "🔌 Choose Provider & Model"),
      "onUpdate:open": L[6] || (L[6] = (U) => l("update:open", U)),
      onClose: $
    }, {
      default: Jt(() => [
        D("div", Wh, [
          D("div", jh, [
            (C(!0), M(fe, null, Ne(c(xn), (U) => (C(), M("button", {
              key: U,
              type: "button",
              class: _e(["tab-btn", { active: U === a.value }]),
              onClick: (ge) => y(U)
            }, [
              R(Ht, {
                name: c(wi)[U],
                size: 18
              }, null, 8, ["name"]),
              D("span", Kh, Y(c(ql)[U] ?? U), 1),
              c(o).modelsFor(U).length ? (C(), M("span", qh, Y(c(o).modelsFor(U).length), 1)) : ne("", !0)
            ], 10, zh))), 128))
          ]),
          D("div", Xh, [
            D("div", Yh, [
              D("span", Jh, Y(c(ql)[a.value] ?? a.value), 1),
              B.value ? (C(), M("span", Qh, "⏳ " + Y(c(i)("pmp_loading", "Loading...")), 1)) : O.value && O.value.status && O.value.status !== "available" ? (C(), M("span", Zh, " ⚠️ " + Y(O.value.message || O.value.status), 1)) : (C(), M("span", eg, " ● " + Y(c(i)("pmp_online", "Online")) + " (" + Y(w.value.length) + " " + Y(c(s)("prov_models", w.value.length, "model", "models", "models")) + ") ", 1)),
              E.value ? (C(), M("span", tg, Y(c(i)("pmp_updated", "Updated")) + ": " + Y(E.value), 1)) : ne("", !0)
            ]),
            R(tt, {
              variant: "sm",
              label: c(i)("pmp_refresh", "↻ Refresh"),
              loading: B.value,
              title: c(i)("tt_refresh", "Reload models list"),
              onClick: L[0] || (L[0] = (U) => v(!0))
            }, null, 8, ["label", "loading", "title"])
          ]),
          D("div", ng, [
            D("div", lg, [
              R(Ht, {
                name: "search",
                size: 14,
                class: "search-icon"
              }),
              Qe(D("input", {
                "onUpdate:modelValue": L[1] || (L[1] = (U) => d.value = U),
                type: "text",
                class: "search-input",
                placeholder: c(i)("pmp_search", "Search models...")
              }, null, 8, og), [
                [st, d.value]
              ]),
              d.value ? (C(), M("button", {
                key: 0,
                type: "button",
                class: "clear-search",
                title: c(i)("tt_clear_search", "Clear search"),
                onClick: L[2] || (L[2] = (U) => d.value = "")
              }, "✕", 8, ig)) : ne("", !0)
            ]),
            D("div", sg, [
              R(je, {
                options: [...m],
                "option-labels": _.value,
                "model-value": u.value,
                "onUpdate:modelValue": L[3] || (L[3] = (U) => u.value = U)
              }, null, 8, ["options", "option-labels", "model-value"]),
              R(je, {
                options: k.value,
                "option-labels": A.value,
                "model-value": f.value,
                "onUpdate:modelValue": L[4] || (L[4] = (U) => f.value = U)
              }, null, 8, ["options", "option-labels", "model-value"]),
              R(je, {
                options: [...x],
                "option-labels": S.value,
                "model-value": p.value,
                "onUpdate:modelValue": L[5] || (L[5] = (U) => g(U))
              }, null, 8, ["options", "option-labels", "model-value"])
            ])
          ]),
          D("div", ag, [
            B.value && !w.value.length ? (C(), M("div", rg, [
              R(Dn, {
                text: c(i)("pmp_loading_provider", "Loading models from provider...")
              }, null, 8, ["text"])
            ])) : V.value.length ? (C(), M("div", {
              key: 2,
              class: _e(["models-container", p.value])
            }, [
              (C(!0), M(fe, null, Ne(V.value, (U) => (C(), M("button", {
                key: U,
                type: "button",
                class: _e(["model-card", { selected: U === r.value }]),
                "aria-pressed": U === r.value,
                onClick: (ge) => H(U)
              }, [
                D("div", dg, [
                  D("span", fg, Y(F(U) ? "👁" : "📝"), 1),
                  D("span", {
                    class: "model-name",
                    title: U
                  }, Y(U), 9, pg)
                ]),
                D("div", mg, [
                  F(U) ? (C(), M("span", hg, Y(c(i)("pmp_tag_vision", "Vision")), 1)) : (C(), M("span", gg, Y(c(i)("pmp_tag_text", "Text")), 1)),
                  K(U, a.value) === "local" ? (C(), M("span", _g, Y(c(i)("pmp_tag_local", "Local")), 1)) : K(U, a.value) === "free" ? (C(), M("span", bg, Y(c(i)("pmp_tag_free", "Free")), 1)) : (C(), M("span", vg, Y(c(i)("pmp_tag_paid", "Paid")), 1))
                ])
              ], 10, cg))), 128))
            ], 2)) : (C(), M("div", ug, [
              D("span", null, Y(c(i)("pmp_no_match", "No models matching criteria")), 1)
            ]))
          ]),
          D("div", yg, [
            D("div", wg, [
              r.value ? (C(), M("span", Sg, [
                Bl(Y(c(i)("pmp_selected", "Selected")) + ": ", 1),
                D("strong", null, Y(r.value), 1)
              ])) : (C(), M("span", xg, Y(c(i)("pmp_none_selected", "No model selected")), 1))
            ]),
            D("div", Cg, [
              R(tt, {
                label: c(i)("pmp_cancel", "Cancel"),
                title: c(i)("pmp_cancel_tt", "Close without changing the model"),
                onClick: $
              }, null, 8, ["label", "title"]),
              R(tt, {
                variant: "accent",
                label: c(i)("pmp_apply", "✔ Apply Selection"),
                title: c(i)("pmp_apply_tt", "Use the selected model"),
                disabled: !r.value,
                onClick: N
              }, null, 8, ["label", "title", "disabled"])
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["open", "title"]));
  }
}), kg = /* @__PURE__ */ xe(Ag, [["__scopeId", "data-v-13a51e5a"]]), Fg = { class: "fil-provider-root" }, Mg = { class: "trigger-header" }, Lg = { class: "provider-badge" }, Ig = { class: "provider-title" }, Dg = { class: "trigger-model" }, Pg = ["title"], Ng = 3e5, Rg = /* @__PURE__ */ we({
  __name: "ProviderLoader",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, n = yi(), { t: l } = bt(), o = /* @__PURE__ */ ce(!1);
    function i(y, w) {
      return {
        get: () => t.state.nodeState[y] ?? w,
        set: (T) => {
          t.state.nodeState[y] = T;
        }
      };
    }
    const s = q(() => String(i("provider", "ollama").get()));
    function a(y) {
      i("provider", "ollama").set(y), k();
    }
    const r = q(() => String(i("model", "(loading...)").get()));
    function d(y) {
      i("model", "(loading...)").set(y), k();
    }
    const u = q(() => Number(i("temperature", 0.7).get())), f = q(() => Number(i("max_tokens", 0).get())), p = q(() => Number(i("rate_limit_ms", 100).get())), g = q(() => Number(i("max_image_side", 1024).get())), m = t.state, _ = q(() => n.isLoading(s.value)), A = q(() => n.probeState[s.value]), x = q(() => n.cachedAgeLabel(s.value, l));
    let S = null;
    $e(() => t.state.nodeState, () => {
    }, { deep: !0 });
    function k() {
      const y = t.state.node;
      if (!y) return;
      const w = ie(y, "model");
      if (!w) return;
      const T = n.modelsFor(s.value), B = T.length ? T : ["(no models)"];
      w.options && (w.options.values = B);
    }
    function v(y) {
      a(y.provider), d(y.model);
    }
    return hn(async () => {
      n.loadDisplayNames();
      const y = n.modelsFor(s.value);
      if (y.length)
        r.value === "(loading...)" && d(y[0] ?? "(no models)"), k(), n.loadModels(s.value);
      else
        try {
          await n.loadModels(s.value);
          const w = n.modelsFor(s.value);
          r.value === "(loading...)" && d(w[0] ?? "(no models)"), k();
        } catch (w) {
          Bt.error(w instanceof Error ? w.message : String(w));
        }
      S = setInterval(() => {
        n.loadModels(s.value, !0);
      }, Ng);
    }), ao(() => {
      S && clearInterval(S);
    }), (y, w) => (C(), M("div", Fg, [
      D("button", {
        type: "button",
        class: "picker-trigger-btn",
        onClick: w[0] || (w[0] = (T) => o.value = !0)
      }, [
        D("div", Mg, [
          D("div", Lg, [
            R(c(Ht), {
              name: c(wi)[s.value],
              size: 16
            }, null, 8, ["name"]),
            D("span", Ig, Y(c(ql)[s.value] ?? s.value), 1)
          ]),
          w[6] || (w[6] = D("span", { class: "open-icon" }, "⚙️ Choose", -1))
        ]),
        D("div", Dg, [
          w[7] || (w[7] = D("span", { class: "model-label" }, "🧠 Model:", -1)),
          D("span", {
            class: "model-name",
            title: r.value
          }, Y(r.value), 9, Pg)
        ])
      ]),
      _.value ? (C(), Ce(c(Dn), {
        key: 0,
        text: c(l)("prov_loading_models", "Loading models…")
      }, null, 8, ["text"])) : A.value && A.value.status && A.value.status !== "available" ? (C(), Ce(c(Dn), {
        key: 1,
        err: !0,
        text: A.value.message || A.value.status
      }, null, 8, ["text"])) : x.value ? (C(), Ce(c(Dn), {
        key: 2,
        text: `${c(l)("prov_models_updated", "Models updated")}: ${x.value}`
      }, null, 8, ["text"])) : ne("", !0),
      R(c(Oe), {
        "model-value": u.value,
        min: 0,
        max: 2,
        step: 0.05,
        label: c(l)("lbl_temperature", "🌡️ Temperature"),
        title: c(l)("tt_temperature", "Sampling temperature — higher is more creative, lower is more deterministic."),
        "onUpdate:modelValue": w[1] || (w[1] = (T) => c(m).nodeState.temperature = T)
      }, null, 8, ["model-value", "label", "title"]),
      R(c(Oe), {
        "model-value": f.value,
        min: 0,
        max: 65536,
        step: 1,
        label: c(l)("lbl_max_tokens", "🔢 Max tokens"),
        title: c(l)("tt_provider_max_tokens", "Maximum tokens in the response. 0 = provider default (no explicit limit)."),
        "onUpdate:modelValue": w[2] || (w[2] = (T) => c(m).nodeState.max_tokens = T)
      }, null, 8, ["model-value", "label", "title"]),
      R(c(Oe), {
        "model-value": p.value,
        min: 0,
        max: 5e3,
        step: 10,
        label: c(l)("lbl_rate_limit", "⏱️ Rate limit"),
        title: c(l)("tt_rate_limit", "Minimum delay between requests to this provider, to avoid rate limiting."),
        "onUpdate:modelValue": w[3] || (w[3] = (T) => c(m).nodeState.rate_limit_ms = T)
      }, null, 8, ["model-value", "label", "title"]),
      R(c(Oe), {
        "model-value": g.value,
        min: 128,
        max: 4096,
        step: 64,
        label: c(l)("lbl_max_image_side", "🖼️ Max image side"),
        title: c(l)("tt_max_image_side", "Images are downscaled so their longest side does not exceed this value."),
        "onUpdate:modelValue": w[4] || (w[4] = (T) => c(m).nodeState.max_image_side = T)
      }, null, 8, ["model-value", "label", "title"]),
      R(kg, {
        open: o.value,
        "onUpdate:open": w[5] || (w[5] = (T) => o.value = T),
        provider: s.value,
        model: r.value,
        onSelect: v
      }, null, 8, ["open", "provider", "model"])
    ]));
  }
}), Tg = /* @__PURE__ */ xe(Rg, [["__scopeId", "data-v-d1f3392e"]]), Eg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tg
}, Symbol.toStringTag, { value: "Module" })), Si = {
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
            "tags",
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
          default: "⚪ None",
          tooltip: null,
          values: [
            "⚪ None",
            "👤 Portrait",
            "📦 Products",
            "🌿 Nature & Landscape",
            "🎨 Art & Illustration",
            "👗 Fashion",
            "🐾 Animals",
            "🏛 Architecture",
            "🪑 Interior",
            "🌆 City",
            "🚗 Transport",
            "🍽 Food",
            "🎮 Games"
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
          name: "agent_focus",
          kind: "chip_grid",
          label: null,
          default: "⚪ None",
          tooltip: null,
          values: [
            "⚪ None",
            "📐 Composition",
            "💡 Lighting & Color",
            "🔬 Ultra Detail",
            "🎬 Cinematic"
          ],
          columns: 3,
          searchable: null,
          multiline: null,
          min: null,
          max: null,
          step: null,
          units: null,
          options: null,
          section: "focus",
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
      optional: []
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
}, Vg = { class: "fil-scanner-root" }, Og = {
  key: 0,
  class: "fil-w-row fil-single-style-block"
}, $g = { style: { display: "flex", gap: "4px", "margin-bottom": "3px" } }, Bg = { style: { display: "flex", "margin-bottom": "6px" } }, Hg = { class: "fil-unified-style-modal" }, Ug = { class: "fil-style-tab-bar" }, Gg = ["onClick"], Wg = { class: "fil-tab-icon" }, jg = { class: "fil-tab-title" }, zg = {
  key: 0,
  class: "fil-tab-badge"
}, Kg = { class: "fil-style-picker-body" }, qg = { class: "fil-style-modal-footer" }, Xg = ["title"], Yg = /* @__PURE__ */ we({
  __name: "OpticScanner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = bt(), l = Si.FiLOpticScanner, o = [
      ...(l == null ? void 0 : l.inputs.required) ?? [],
      ...(l == null ? void 0 : l.inputs.optional) ?? []
    ], i = {
      prompt: ["scn_section_prompt", "📝 Prompt/Text"],
      agent: ["scn_section_agent", "🕵️ Agent"],
      focus: ["scn_section_focus", "🎯 Focus"],
      model: ["scn_section_model", "🧠 Model"],
      output: ["scn_section_output", "📤 Output"],
      advanced: ["scn_section_advanced", "🎨 Style"],
      actions: ["scn_section_actions", "⚡ Actions"]
    };
    function s(Q) {
      const le = i[Q];
      return le ? n(le[0], le[1]) : Q.toUpperCase();
    }
    const a = {
      config: "tt_config",
      agent: "tt_agent",
      agent_focus: "tt_agent_focus",
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
    function r(Q) {
      const le = a[Q.name];
      return le ? n(le, Q.tooltip || "") : Q.tooltip || "";
    }
    const d = {
      prompt: "✍️",
      negative_prompt: "🚫",
      custom_style: "✨",
      response_format: "📋",
      agent: "🕵️",
      agent_focus: "🎯",
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
    function u(Q) {
      if (Q.label) return Q.label;
      const le = d[Q.name] || "", me = Q.name.replace(/_/g, " ").replace(/\b\w/g, (Pe) => Pe.toUpperCase());
      return le ? `${le} ${me}` : me;
    }
    const f = ["prompt", "negative_prompt", "custom_style"], p = /* @__PURE__ */ new Set(["prompt", "negative_prompt"]), g = {};
    function m(Q, le) {
      const me = (le == null ? void 0 : le.$el) ?? le;
      g[Q] = me ?? null;
    }
    function _(Q) {
      return f.includes(Q);
    }
    function A(Q) {
      return p.has(Q);
    }
    const x = /* @__PURE__ */ ce({});
    function S(Q) {
      return !!x.value[Q];
    }
    function k(Q) {
      return S(Q.name) ? n("scn_field_linked_tt", "Driven by the connected input — disconnect it to type here.") : r(Q);
    }
    function v() {
      const Q = t.state.node;
      if (!Q) return;
      Qd(Q, f.map((me) => ({ name: me, el: g[me] })));
      const le = Zd(Q, f);
      f.some((me) => le[me] !== !!x.value[me]) && (x.value = le);
    }
    let y = 0;
    hn(() => {
      v(), y = window.setInterval(v, 300);
    }), Tn(() => {
      y && window.clearInterval(y);
    });
    const w = /* @__PURE__ */ ce(!1), T = /* @__PURE__ */ ce("photo_style");
    function B(Q) {
      return !Q || Q === "None" ? [] : Q.split("|").map((me) => me.trim()).filter((me) => me && me !== "None").map((me) => {
        const Pe = me.indexOf("/");
        return (Pe === -1 ? me : me.slice(Pe + 1)).replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}\s]+/gu, "").trim();
      });
    }
    const O = q(() => {
      const Q = [], le = B(String(I("photo_style", "None"))), me = B(String(I("nsfw_photo_style", "None"))), Pe = B(String(I("art_style", "None"))), h = B(String(I("nsfw_art_style", "None")));
      for (const b of le) Q.push(`📷 ${b}`);
      for (const b of me) Q.push(`🔞 ${b}`);
      for (const b of Pe) Q.push(`🎨 ${b}`);
      for (const b of h) Q.push(`🔞 ${b}`);
      return Q.length === 0 ? n("scn_style_button_none", "🎨 Style: None") : Q.join(" | ");
    }), E = q(() => {
      const Q = B(String(I("photo_style", "None"))), le = B(String(I("nsfw_photo_style", "None"))), me = B(String(I("art_style", "None"))), Pe = B(String(I("nsfw_art_style", "None")));
      return Q.length + le.length + me.length + Pe.length;
    }), K = [
      { id: "photo_style", icon: "📷", labelKey: "scn_style_photo_label", fallback: "Photo" },
      { id: "nsfw_photo_style", icon: "🔞", labelKey: "scn_style_nsfw_photo_label", fallback: "NSFW Photo" },
      { id: "art_style", icon: "🎨", labelKey: "scn_style_art_label", fallback: "Art" },
      { id: "nsfw_art_style", icon: "🔞", labelKey: "scn_style_nsfw_art_label", fallback: "NSFW Art" }
    ];
    function F(Q) {
      return String(I(Q, "None") || "None");
    }
    function V(Q, le) {
      L(Q, le);
    }
    function H(Q) {
      const le = o.find((me) => me.name === Q);
      return (le == null ? void 0 : le.values) || [];
    }
    function N() {
      L("photo_style", "None"), L("nsfw_photo_style", "None"), L("art_style", "None"), L("nsfw_art_style", "None");
    }
    const $ = q(() => {
      var le;
      const Q = {};
      for (const me of o) (Q[le = me.section || "_"] ?? (Q[le] = [])).push(me);
      return Q;
    });
    function I(Q, le = "") {
      return t.state.nodeState[Q] ?? t.state.initialValues[Q] ?? le;
    }
    function L(Q, le) {
      t.state.nodeState[Q] = le;
    }
    const U = /* @__PURE__ */ new Set(["agent", "focus", "output", "advanced"]);
    function ge(Q) {
      const le = t.state.ui[`collapsed_${Q}`];
      return le === void 0 ? U.has(Q) : !!le;
    }
    function De(Q, le) {
      t.state.ui[`collapsed_${Q}`] = le;
    }
    $e(() => t.state.nodeState, () => {
    }, { deep: !0 });
    const ae = q({
      get: () => t.state.nodeState.seed_mode ?? "random",
      set: (Q) => {
        t.state.nodeState.seed_mode = Q;
      }
    }), Z = q({
      get: () => Number(t.state.nodeState.seed ?? -1) || -1,
      // Write the native seed widget directly, not just nodeState: the
      // createSyncedNodeState mirror doesn't reach the seed widget the same way
      // control_after_generate expects, so a fixed seed set only via nodeState
      // can fail to reach the queued prompt. Direct assignment sticks.
      set: (Q) => {
        t.state.nodeState.seed = Q;
        const le = t.state.node ? ie(t.state.node, "seed") : null;
        le && (le.value = Q);
      }
    }), oe = q(() => ae.value === "fixed" ? `${Z.value}` : "random");
    $e(ae, (Q) => {
      const le = t.state.node, me = le ? ie(le, "control_after_generate") : null;
      me && (me.value = Q === "fixed" ? "fixed" : "randomize");
    }, { immediate: !0 });
    function En() {
      ae.value = "random";
    }
    function Zt() {
      const Q = t.state.node, le = Q ? ie(Q, "seed") : null, me = le && Number.isFinite(Number(le.value)) ? Number(le.value) : t.state.lastRunSeed;
      if (me == null || !Number.isFinite(me)) {
        Bt.warning(n("sd_no_last_seed", "No last-run seed recorded yet"));
        return;
      }
      Z.value = me, ae.value = "fixed";
    }
    function gn() {
      const Q = Math.floor(Math.random() * 1e9) & 2147483647;
      Z.value = Q, ae.value = "fixed";
    }
    return (Q, le) => (C(), M("div", Vg, [
      (C(!0), M(fe, null, Ne($.value, (me, Pe) => (C(), M(fe, { key: Pe }, [
        Pe !== "styles" ? (C(), M("div", {
          key: 0,
          class: _e(["fil-section-block", { "is-growable": Pe === "prompt" }])
        }, [
          Pe !== "_" && Pe !== "prompt" ? (C(), Ce(c(Ve), {
            key: 0,
            title: s(String(Pe)),
            "model-value": ge(String(Pe)),
            "onUpdate:modelValue": (h) => De(String(Pe), h)
          }, null, 8, ["title", "model-value", "onUpdate:modelValue"])) : ne("", !0),
          (C(!0), M(fe, null, Ne(me, (h) => (C(), M(fe, {
            key: h.name
          }, [
            h.name === "response_format" ? (C(), M("div", Og, [
              D("div", $g, [
                D("button", {
                  class: _e(["fil-style-picker-btn", { "has-styles": E.value > 0 }]),
                  onClick: le[0] || (le[0] = (b) => w.value = !0)
                }, Y(O.value), 3)
              ]),
              D("div", Bg, [
                R(c(tt), {
                  variant: "standard",
                  label: "🧹 Clear Style",
                  onClick: N,
                  style: { flex: "1" }
                })
              ]),
              R(c(Ln), {
                open: w.value,
                title: c(n)("scn_unified_style_title", "🎨 Style Selection"),
                width: "680px",
                "onUpdate:open": le[2] || (le[2] = (b) => w.value = b)
              }, {
                default: Jt(() => [
                  D("div", Hg, [
                    D("div", Ug, [
                      (C(), M(fe, null, Ne(K, (b) => D("button", {
                        key: b.id,
                        type: "button",
                        class: _e(["fil-style-tab-btn", { active: T.value === b.id, "has-value": F(b.id) !== "None" }]),
                        onClick: (P) => T.value = b.id
                      }, [
                        D("span", Wg, Y(b.icon), 1),
                        D("span", jg, Y(c(n)(b.labelKey, b.fallback)), 1),
                        F(b.id) !== "None" ? (C(), M("span", zg, "✓")) : ne("", !0)
                      ], 10, Gg)), 64))
                    ]),
                    D("div", Kg, [
                      R(c(Ll), {
                        styles: H(T.value),
                        "model-value": F(T.value),
                        multi: !0,
                        onSelect: le[1] || (le[1] = (b) => V(T.value, b))
                      }, null, 8, ["styles", "model-value"])
                    ]),
                    D("div", qg, [
                      D("button", {
                        type: "button",
                        class: "fil-clear-styles-btn",
                        onClick: N
                      }, Y(c(n)("scn_clear_all_styles", "🗑️ Clear all styles")), 1)
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["open", "title"])
            ])) : ne("", !0),
            Qe(D("div", {
              class: _e(["fil-w-row", { "is-growable": A(h.name), "is-linked": _(h.name) && S(h.name) }]),
              title: _(h.name) ? k(h) : r(h)
            }, [
              h.name === "prompt" || h.name === "negative_prompt" || h.name === "custom_style" ? (C(), Ce(c(Il), {
                key: 0,
                ref_for: !0,
                ref: (b) => m(h.name, b),
                "model-value": String(I(h.name, "")),
                linked: S(h.name),
                placeholder: S(h.name) ? c(n)("scn_field_linked", "🔗 Text comes from the connected node") : u(h),
                rows: 2,
                "onUpdate:modelValue": (b) => L(h.name, b)
              }, null, 8, ["model-value", "linked", "placeholder", "onUpdate:modelValue"])) : h.kind === "chip_grid" ? (C(), Ce(c(Is), {
                key: 1,
                options: h.values || [],
                "model-value": String(I(h.name, "")),
                columns: h.columns ?? 3,
                "onUpdate:modelValue": (b) => L(h.name, b)
              }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"])) : h.kind === "chip_list" ? (C(), Ce(c(im), {
                key: 2,
                options: h.values || [],
                "model-value": I(h.name, null),
                searchable: h.searchable ?? !0,
                "onUpdate:modelValue": (b) => L(h.name, b)
              }, null, 8, ["options", "model-value", "searchable", "onUpdate:modelValue"])) : h.kind === "segmented" ? (C(), Ce(c(je), {
                key: 3,
                options: h.options || [],
                "model-value": String(I(h.name, "")),
                label: u(h),
                "onUpdate:modelValue": (b) => L(h.name, b)
              }, null, 8, ["options", "model-value", "label", "onUpdate:modelValue"])) : (C(), Ce(c(Is), {
                key: 4,
                options: h.values || [],
                "model-value": String(I(h.name, "")),
                columns: h.columns ?? 3,
                "onUpdate:modelValue": (b) => L(h.name, b)
              }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"]))
            ], 10, Xg), [
              [$c, Pe === "_" || Pe === "prompt" || !ge(String(Pe))]
            ])
          ], 64))), 128))
        ], 2)) : ne("", !0)
      ], 64))), 128)),
      R(c(yr), {
        display: oe.value,
        mode: ae.value,
        "field-aria-label": c(n)("sd_aria_seed_value", "Seed value"),
        "field-title": ae.value === "fixed" ? c(n)("scn_seed_locked", "Locked seed") : c(n)("scn_seed_auto_random", "Auto-random — a new seed is generated each run"),
        labels: {
          random: c(n)("scn_seed_random", "Random"),
          useLast: c(n)("scn_seed_use_last", "Use last"),
          newFixed: c(n)("scn_seed_new_fixed", "New fixed")
        },
        titles: {
          random: c(n)("scn_seed_mode_tt", "Random generates a new seed each run."),
          useLast: t.state.lastRunSeed != null ? `${c(n)("scn_seed_use_last_prefix", "Reuse the last run's seed:")} ${t.state.lastRunSeed}` : c(n)("scn_seed_use_last_tt", "Reuse the seed from the last executed run."),
          newFixed: c(n)("scn_seed_new_fixed_tt", "Generate a new random fixed seed.")
        },
        onInputSeed: le[3] || (le[3] = (me) => Z.value = me),
        onRandom: En,
        onUseLast: Zt,
        onNewFixed: gn
      }, null, 8, ["display", "mode", "field-aria-label", "field-title", "labels", "titles"])
    ]));
  }
}), Jg = /* @__PURE__ */ xe(Yg, [["__scopeId", "data-v-ffe55d1d"]]), Qg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jg
}, Symbol.toStringTag, { value: "Module" })), Zg = { class: "fil-cleaner-root" }, e_ = /* @__PURE__ */ we({
  __name: "NeuroCleaner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = bt(), l = q(() => [
      { name: "clean_vram", label: n("cln_flush_vram", "🧹 Flush GPU Cache"), defaultOn: !0 },
      { name: "unload_diffusion", label: n("cln_unload_diffusion", "🌀 Unload Diffusion (FLUX/SD)"), defaultOn: !0 },
      { name: "unload_clip", label: n("cln_unload_clip", "📎 Unload CLIP / Text Encoder"), defaultOn: !1 },
      { name: "unload_vae", label: n("cln_unload_vae", "🖼️ Unload VAE"), defaultOn: !1 },
      { name: "unload_control", label: n("cln_unload_control", "🎛️ Unload ControlNet / Adapter"), defaultOn: !1 }
    ]);
    function o(s, a) {
      const r = t.state.nodeState[s];
      return typeof r == "boolean" ? r : a;
    }
    function i(s, a) {
      t.state.nodeState[s] = a;
    }
    return (s, a) => (C(), M("div", Zg, [
      (C(!0), M(fe, null, Ne(l.value, (r) => (C(), Ce(c(dn), {
        key: r.name,
        "model-value": o(r.name, r.defaultOn) ? "ON" : "OFF",
        label: r.label,
        "onUpdate:modelValue": (d) => i(r.name, d === "ON")
      }, null, 8, ["model-value", "label", "onUpdate:modelValue"]))), 128))
    ]));
  }
}), t_ = /* @__PURE__ */ xe(e_, [["__scopeId", "data-v-aca28d85"]]), n_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: t_
}, Symbol.toStringTag, { value: "Module" })), l_ = { class: "fil-up-root" }, o_ = { class: "fil-up-row fil-up-row-overlap" }, i_ = ["title"], s_ = ["title"], a_ = { class: "fil-up-row" }, r_ = ["title"], u_ = ["title"], c_ = /* @__PURE__ */ we({
  __name: "UpscaleTileCalc",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = bt(), l = ["Low VRAM", "Balanced", "High VRAM", "Max Quality", "Ultra Quality"], o = {
      "Low VRAM": "🪫 Low VRAM",
      Balanced: "⚖️ Balanced",
      "High VRAM": "🔋 High VRAM",
      "Max Quality": "💎 Max Quality",
      "Ultra Quality": "👑 Ultra Quality"
    };
    function i(k, v) {
      return q({
        get: () => Number(t.state.nodeState[k] ?? t.state.initialValues[k] ?? v) || v,
        set: (y) => {
          t.state.nodeState[k] = y;
        }
      });
    }
    function s(k, v) {
      return q({
        get: () => t.state.nodeState[k] ?? t.state.initialValues[k] ?? v ? "ON" : "OFF",
        set: (y) => {
          t.state.nodeState[k] = y === "ON";
        }
      });
    }
    const a = i("upscale_factor", 2), r = i("tile_size", 1024), d = i("tile_overlap", 64), u = i("manual_tile_cols", 0), f = i("manual_tile_rows", 0), p = s("auto_overlap", !1), g = s("auto_mode", !1), m = s("non_square_tiles", !1), _ = s("auto_fix_thin_edges", !1), A = q({
      get: () => String(t.state.nodeState.auto_profile ?? t.state.initialValues.auto_profile ?? "Balanced"),
      set: (k) => {
        t.state.nodeState.auto_profile = k;
      }
    });
    function x(k) {
      return !!t.state.ui[`collapsed_${k}`];
    }
    function S(k, v) {
      t.state.ui[`collapsed_${k}`] = v;
    }
    return $e(() => t.state.nodeState, () => {
    }, { deep: !0 }), (k, v) => (C(), M("div", l_, [
      R(c(Oe), {
        "model-value": c(a),
        min: 0.1,
        max: 8,
        step: 0.25,
        label: c(n)("lbl_upscale_factor", "🔍 Upscale factor"),
        title: c(n)("utc_factor", "Upscale multiplier."),
        "onUpdate:modelValue": v[0] || (v[0] = (y) => a.value = y)
      }, null, 8, ["model-value", "label", "title"]),
      R(c(Ve), {
        title: c(n)("utc_section_auto", "⚙️ Auto / advanced"),
        "model-value": x("auto"),
        "onUpdate:modelValue": v[1] || (v[1] = (y) => S("auto", y))
      }, null, 8, ["title", "model-value"]),
      x("auto") ? ne("", !0) : (C(), M(fe, { key: 0 }, [
        R(c(dn), {
          "model-value": c(g),
          label: c(n)("lbl_full_auto", "🤖 Full auto"),
          title: c(n)("utc_auto_mode", "Pick tile size/overlap automatically from the selected VRAM profile."),
          "onUpdate:modelValue": v[2] || (v[2] = (y) => g.value = y)
        }, null, 8, ["model-value", "label", "title"]),
        c(g) === "ON" ? (C(), Ce(c(je), {
          key: 0,
          options: [...l],
          "option-labels": o,
          "model-value": A.value,
          label: c(n)("lbl_auto_profile", "🎚️ Auto profile"),
          title: c(n)("utc_auto_profile", "VRAM/quality profile used when Full Auto is on."),
          "onUpdate:modelValue": v[3] || (v[3] = (y) => A.value = y)
        }, null, 8, ["options", "model-value", "label", "title"])) : ne("", !0),
        c(g) === "OFF" ? (C(), M(fe, { key: 1 }, [
          D("div", o_, [
            D("label", {
              class: "fil-w-label",
              title: c(n)("utc_tile_size", "Base tile size.")
            }, Y(c(n)("lbl_tile_size", "🔲 Tile size")), 9, i_),
            R(c(dt), {
              modelValue: c(r),
              "onUpdate:modelValue": v[4] || (v[4] = (y) => /* @__PURE__ */ se(r) ? r.value = y : null),
              min: 64,
              max: 2048,
              step: 64
            }, null, 8, ["modelValue"]),
            D("label", {
              class: "fil-w-label",
              title: c(n)("utc_overlap", "Tile overlap.")
            }, Y(c(n)("lbl_overlap", "🧵 Overlap")), 9, s_),
            R(c(dt), {
              modelValue: c(d),
              "onUpdate:modelValue": v[5] || (v[5] = (y) => /* @__PURE__ */ se(d) ? d.value = y : null),
              min: 0,
              max: 512,
              step: 8,
              disabled: c(p) === "ON"
            }, null, 8, ["modelValue", "disabled"]),
            R(c(dn), {
              bare: "",
              "model-value": c(p),
              label: c(n)("lbl_auto_overlap", "🧵 Auto"),
              title: c(n)("utc_auto_overlap", "Derive overlap automatically from tile size (~12.5%) instead of the fixed value above."),
              "onUpdate:modelValue": v[6] || (v[6] = (y) => p.value = y)
            }, null, 8, ["model-value", "label", "title"])
          ]),
          D("div", a_, [
            D("label", {
              class: "fil-w-label",
              title: c(n)("utc_manual_cols", "Force this many tile columns. 0 = compute from tile size.")
            }, Y(c(n)("lbl_manual_cols", "↔️ Cols")), 9, r_),
            R(c(dt), {
              modelValue: c(u),
              "onUpdate:modelValue": v[7] || (v[7] = (y) => /* @__PURE__ */ se(u) ? u.value = y : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"]),
            D("label", {
              class: "fil-w-label",
              title: c(n)("utc_manual_rows", "Force this many tile rows. 0 = compute from tile size.")
            }, Y(c(n)("lbl_manual_rows", "↕️ Rows")), 9, u_),
            R(c(dt), {
              modelValue: c(f),
              "onUpdate:modelValue": v[8] || (v[8] = (y) => /* @__PURE__ */ se(f) ? f.value = y : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"])
          ]),
          R(c(dn), {
            "model-value": c(_),
            label: c(n)("lbl_auto_fix_edges", "🩹 Auto-fix thin edges"),
            title: c(n)("utc_auto_fix_edges", "Shrink tile_size to the next standard size instead of just warning when the grid would leave a thin edge tile."),
            "onUpdate:modelValue": v[9] || (v[9] = (y) => _.value = y)
          }, null, 8, ["model-value", "label", "title"])
        ], 64)) : ne("", !0)
      ], 64)),
      R(c(dn), {
        "model-value": c(m),
        label: c(n)("lbl_non_square", "📐 Non-square tiles"),
        title: c(n)("utc_non_square", "Allow rectangular tiles instead of forcing square ones."),
        "onUpdate:modelValue": v[10] || (v[10] = (y) => m.value = y)
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), d_ = /* @__PURE__ */ xe(c_, [["__scopeId", "data-v-d0c34d54"]]), Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: d_
}, Symbol.toStringTag, { value: "Module" })), f_ = { class: "fil-hrf-root" }, p_ = /* @__PURE__ */ we({
  __name: "HiResFix",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = bt();
    function l(I, L) {
      return q({
        get: () => Number(t.state.nodeState[I] ?? t.state.initialValues[I] ?? L) || L,
        set: (U) => {
          t.state.nodeState[I] = U;
        }
      });
    }
    function o(I, L) {
      return q({
        get: () => String(t.state.nodeState[I] ?? t.state.initialValues[I] ?? L),
        set: (U) => {
          t.state.nodeState[I] = U;
        }
      });
    }
    function i(I, L) {
      return q({
        get: () => t.state.nodeState[I] ?? t.state.initialValues[I] ?? L ? "ON" : "OFF",
        set: (U) => {
          t.state.nodeState[I] = U === "ON";
        }
      });
    }
    function s(I, L) {
      var ae;
      const U = t.state.node, ge = U ? ie(U, I) : null, De = (ae = ge == null ? void 0 : ge.options) == null ? void 0 : ae.values;
      return Array.isArray(De) && De.length ? De : L;
    }
    const a = o("upscale_type", "latent"), r = o("hires_ckpt_name", "(use same)"), d = o("latent_upscaler", "nearest-exact"), u = o("pixel_upscaler", ""), f = l("upscale_by", 1.25), p = i("use_same_seed", !0), g = l("denoise", 0.56), m = l("hires_steps", 12), _ = l("iterations", 1), A = i("use_controlnet", !1), x = o("control_net_name", ""), S = l("strength", 1), k = o("preprocessor", "none"), v = q(() => s("hires_ckpt_name", ["(use same)"])), y = ["nearest-exact", "bilinear", "area", "bicubic", "bislerp"], w = q(() => s("pixel_upscaler", ["(none)"])), T = q(() => s("control_net_name", ["(none)"])), B = q(() => s("preprocessor", ["none", "canny"])), O = q(() => a.value === "latent"), E = q(() => a.value === "pixel" || a.value === "both"), K = q({
      get: () => t.state.nodeState.seed_mode ?? "random",
      set: (I) => {
        t.state.nodeState.seed_mode = I;
      }
    }), F = q({
      get: () => Number(t.state.nodeState.seed ?? 0) || 0,
      // Write the native seed widget directly, not just nodeState: the
      // createSyncedNodeState mirror doesn't reach the seed widget (its value is
      // a prototype accessor tied to control_after_generate's linked-widget
      // machinery, unlike the plain numeric widgets), so a fixed seed set only
      // via nodeState never reaches the queued prompt. Direct assignment sticks.
      set: (I) => {
        t.state.nodeState.seed = I;
        const L = t.state.node ? ie(t.state.node, "seed") : null;
        L && (L.value = I);
      }
    }), V = q(() => K.value === "fixed" ? `${F.value}` : "random");
    $e([p, K], ([I, L]) => {
      const U = t.state.node, ge = U ? ie(U, "control_after_generate") : null;
      ge && (ge.value = I === "ON" || L === "fixed" ? "fixed" : "randomize");
    }, { immediate: !0 });
    function H() {
      K.value = "random";
    }
    function N() {
      const I = t.state.node, L = I ? ie(I, "seed") : null, U = L && Number.isFinite(Number(L.value)) ? Number(L.value) : t.state.lastRunSeed;
      if (U == null || !Number.isFinite(U)) {
        Bt.warning(n("sd_no_last_seed", "No last-run seed recorded yet"));
        return;
      }
      F.value = U, K.value = "fixed";
    }
    function $() {
      const I = Math.floor(Math.random() * 1e9) & 2147483647;
      F.value = I, K.value = "fixed";
    }
    return (I, L) => (C(), M("div", f_, [
      R(c(je), {
        options: ["latent", "pixel", "both"],
        "option-labels": { latent: "🌀 latent", pixel: "🖼️ pixel", both: "🔀 both" },
        "model-value": c(a),
        label: c(n)("lbl_upscale_type", "⬆️ Upscale type"),
        title: c(n)("hrf_upscale_type", "Upscale in latent space, pixel space, or both."),
        "onUpdate:modelValue": L[0] || (L[0] = (U) => a.value = U)
      }, null, 8, ["model-value", "label", "title"]),
      O.value ? (C(), Ce(c(Kn), {
        key: 0,
        options: y,
        "model-value": c(d),
        label: c(n)("lbl_latent_up", "🌀 Latent upscaler"),
        title: c(n)("hrf_latent_up", "Latent upscale method."),
        "onUpdate:modelValue": L[1] || (L[1] = (U) => d.value = U)
      }, null, 8, ["model-value", "label", "title"])) : ne("", !0),
      E.value ? (C(), Ce(c(Kn), {
        key: 1,
        options: w.value,
        "model-value": c(u),
        label: c(n)("lbl_pixel_up", "🖼️ Pixel upscaler"),
        title: c(n)("hrf_pixel_up", "Pixel upscale model (from upscale_models)."),
        "onUpdate:modelValue": L[2] || (L[2] = (U) => u.value = U)
      }, null, 8, ["options", "model-value", "label", "title"])) : ne("", !0),
      R(c(Kn), {
        options: v.value,
        "model-value": c(r),
        label: c(n)("lbl_hires_ckpt", "📦 Hires checkpoint"),
        title: c(n)("hrf_ckpt", "Checkpoint for the hires pass. (use same) reuses the base model."),
        "onUpdate:modelValue": L[3] || (L[3] = (U) => r.value = U)
      }, null, 8, ["options", "model-value", "label", "title"]),
      R(c(Oe), {
        "model-value": c(f),
        min: 0.01,
        max: 8,
        step: 0.05,
        label: c(n)("lbl_upscale_by", "🔍 Upscale by"),
        title: c(n)("hrf_upscale_by", "Upscale multiplier."),
        "onUpdate:modelValue": L[4] || (L[4] = (U) => f.value = U)
      }, null, 8, ["model-value", "label", "title"]),
      R(c(Oe), {
        "model-value": c(g),
        min: 0,
        max: 1,
        step: 0.01,
        label: c(n)("lbl_hrf_denoise", "💧 Denoise"),
        title: c(n)("hrf_denoise", "Denoise strength for the hires re-sample."),
        "onUpdate:modelValue": L[5] || (L[5] = (U) => g.value = U)
      }, null, 8, ["model-value", "label", "title"]),
      R(c(dt), {
        modelValue: c(m),
        "onUpdate:modelValue": L[6] || (L[6] = (U) => /* @__PURE__ */ se(m) ? m.value = U : null),
        min: 1,
        max: 1e4,
        step: 1,
        label: c(n)("lbl_hires_steps", "🪜 Hires steps"),
        title: c(n)("hrf_steps", "Steps for the hires re-sample.")
      }, null, 8, ["modelValue", "label", "title"]),
      R(c(dt), {
        modelValue: c(_),
        "onUpdate:modelValue": L[7] || (L[7] = (U) => /* @__PURE__ */ se(_) ? _.value = U : null),
        min: 0,
        max: 5,
        step: 1,
        label: c(n)("lbl_iterations", "🔁 Iterations"),
        title: c(n)("hrf_iterations", "How many upscale+resample passes to run.")
      }, null, 8, ["modelValue", "label", "title"]),
      R(c(je), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "♻️ same seed", OFF: "🎲 own" },
        "model-value": c(p),
        label: c(n)("lbl_use_same_seed", "🌱 Seed source"),
        title: c(n)("hrf_same_seed", "Reuse the samplers seed for the hires pass."),
        "onUpdate:modelValue": L[8] || (L[8] = (U) => p.value = U)
      }, null, 8, ["model-value", "label", "title"]),
      c(p) === "OFF" ? (C(), Ce(c(yr), {
        key: 2,
        display: V.value,
        mode: K.value,
        "field-aria-label": c(n)("hrf_aria_seed_value", "Hires seed value"),
        "field-title": K.value === "fixed" ? c(n)("hrf_seed_locked", "Locked hires seed") : c(n)("hrf_seed_auto_random", "Auto-random — a new hires seed is generated each run"),
        labels: {
          random: c(n)("hrf_seed_random", "Random"),
          useLast: c(n)("hrf_seed_use_last", "Use last"),
          newFixed: c(n)("hrf_seed_new_fixed", "New fixed")
        },
        titles: {
          random: c(n)("hrf_seed_mode_tt", "Random generates a new hires seed each run."),
          useLast: t.state.lastRunSeed != null ? `${c(n)("hrf_seed_use_last_prefix", "Reuse the last run's hires seed:")} ${t.state.lastRunSeed}` : c(n)("hrf_seed_use_last_tt", "Reuse the hires seed from the last executed run."),
          newFixed: c(n)("hrf_seed_new_fixed_tt", "Generate a new random fixed hires seed.")
        },
        onInputSeed: L[9] || (L[9] = (U) => F.value = U),
        onRandom: H,
        onUseLast: N,
        onNewFixed: $
      }, null, 8, ["display", "mode", "field-aria-label", "field-title", "labels", "titles"])) : ne("", !0),
      R(c(je), {
        options: ["ON", "OFF"],
        "option-labels": { ON: "🕹️ ON", OFF: "OFF" },
        "model-value": c(A),
        label: c(n)("lbl_use_cn", "🕹️ Use ControlNet"),
        title: c(n)("hrf_use_cn", "Guide the hires pass with a ControlNet. Tile ControlNets work without a preprocessor."),
        "onUpdate:modelValue": L[10] || (L[10] = (U) => A.value = U)
      }, null, 8, ["model-value", "label", "title"]),
      c(A) === "ON" ? (C(), M(fe, { key: 3 }, [
        R(c(Kn), {
          options: T.value,
          "model-value": c(x),
          label: c(n)("lbl_cn_name", "🧩 ControlNet model"),
          title: c(n)("hrf_cn_name", "ControlNet model to apply."),
          "onUpdate:modelValue": L[11] || (L[11] = (U) => x.value = U)
        }, null, 8, ["options", "model-value", "label", "title"]),
        R(c(Oe), {
          "model-value": c(S),
          min: 0,
          max: 10,
          step: 0.01,
          label: c(n)("lbl_cn_strength", "💪 Strength"),
          title: c(n)("hrf_cn_strength", "ControlNet strength."),
          "onUpdate:modelValue": L[12] || (L[12] = (U) => S.value = U)
        }, null, 8, ["model-value", "label", "title"]),
        R(c(je), {
          options: B.value,
          "option-labels": { none: "🚫 none", canny: "🪞 canny" },
          "model-value": c(k),
          label: c(n)("lbl_cn_preproc", "🧪 Preprocessor"),
          title: c(n)("hrf_cn_preproc", "Preprocess the ControlNet hint image. 'none' feeds the raw upscaled image (right for tile ControlNets)."),
          "onUpdate:modelValue": L[13] || (L[13] = (U) => k.value = U)
        }, null, 8, ["options", "model-value", "label", "title"])
      ], 64)) : ne("", !0)
    ]));
  }
}), m_ = /* @__PURE__ */ xe(p_, [["__scopeId", "data-v-1976136c"]]), h_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: m_
}, Symbol.toStringTag, { value: "Module" })), g_ = { class: "fil-style-mixer-root" }, __ = /* @__PURE__ */ we({
  __name: "StyleMixer",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = bt(), l = Si.FiLStyleMixer, o = (l == null ? void 0 : l.inputs.required.find((H) => H.name === "fusion_mode")) || (l == null ? void 0 : l.inputs.optional.find((H) => H.name === "fusion_mode")), i = q(
      () => {
        var H;
        return (H = o == null ? void 0 : o.values) != null && H.length ? o.values : ["Weighted Stack (Fast)"];
      }
    ), s = q(() => ({
      "Weighted Stack (Fast)": n("sm_fusion_fast", "⚡ Fast Stack"),
      "Smart LLM Fusion (Gen-Mix)": n("sm_fusion_smart", "🧬 Smart LLM Fusion")
    }));
    function a(H, N) {
      return q({
        get: () => t.state.nodeState[H] ?? N,
        set: ($) => {
          t.state.nodeState[H] = $;
          const I = t.state.node ? ie(t.state.node, H) : null;
          I && (I.value = $);
        }
      });
    }
    const r = a("fusion_mode", "Weighted Stack (Fast)"), d = a("style_1", "(None)"), u = a("weight_1", 1), f = a("style_2", "(None)"), p = a("weight_2", 0.5), g = a("style_3", "(None)"), m = a("weight_3", 0.3), _ = a("img_weight_1", 0.8), A = a("img_weight_2", 0.6), x = a("img_weight_3", 0.4), S = a("img_weight_4", 0.2), k = /* @__PURE__ */ ce(!1), v = /* @__PURE__ */ ce(!1), y = /* @__PURE__ */ ce(!1), w = q(() => t.state.ui.slotVersion ?? 0);
    function T(H) {
      w.value;
      const N = t.state.node;
      if (!(N != null && N._allInputs)) return !1;
      const $ = N._allInputs.find((I) => I.name === H);
      return !!($ && $.link != null);
    }
    const B = q(() => T("image_2")), O = q(() => T("image_3"));
    function E(H) {
      var $;
      if (!t.state.node) return [];
      const N = ie(t.state.node, H);
      return (($ = N == null ? void 0 : N.options) == null ? void 0 : $.values) || (N == null ? void 0 : N.values) || [];
    }
    function K(H, N) {
      if (!H || H === "(None)" || H === "None") return `${N}: ${n("sm_none", "(None)")}`;
      const $ = H.indexOf("/"), I = $ === -1 ? H : H.slice($ + 1);
      return `${N}: ${I}`;
    }
    function F(H) {
      return !!t.state.ui[`collapsed_${H}`];
    }
    function V(H, N) {
      t.state.ui[`collapsed_${H}`] = N;
    }
    return (H, N) => (C(), M("div", g_, [
      R(c(Ve), {
        title: c(n)("sm_section_fusion", "🔀 Fusion Mode"),
        "model-value": F("fusion"),
        "onUpdate:modelValue": N[0] || (N[0] = ($) => V("fusion", $))
      }, null, 8, ["title", "model-value"]),
      F("fusion") ? ne("", !0) : (C(), Ce(c(je), {
        key: 0,
        modelValue: c(r),
        "onUpdate:modelValue": N[1] || (N[1] = ($) => /* @__PURE__ */ se(r) ? r.value = $ : null),
        options: i.value,
        "option-labels": s.value,
        title: c(n)("sm_fusion_tt", "Fast Stack just weights the descriptions. Smart Fusion asks the Vision LLM to synthesize one prompt.")
      }, null, 8, ["modelValue", "options", "option-labels", "title"])),
      R(c(Ve), {
        title: c(n)("sm_section_style_1", "🎨 Primary Style (Style 1)"),
        "model-value": F("style1"),
        "onUpdate:modelValue": N[2] || (N[2] = ($) => V("style1", $))
      }, null, 8, ["title", "model-value"]),
      F("style1") ? ne("", !0) : (C(), M(fe, { key: 1 }, [
        R(c(tt), {
          variant: "full",
          label: K(c(d), c(n)("sm_style_1", "Style 1")),
          onClick: N[3] || (N[3] = ($) => k.value = !0)
        }, null, 8, ["label"]),
        R(c(Oe), {
          modelValue: c(u),
          "onUpdate:modelValue": N[4] || (N[4] = ($) => /* @__PURE__ */ se(u) ? u.value = $ : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: c(n)("sm_style_1_weight", "Style 1 Weight")
        }, null, 8, ["modelValue", "label"]),
        R(c(Ln), {
          open: k.value,
          title: c(n)("sm_pick_style_1", "Select Primary Style 1"),
          width: "680px",
          "onUpdate:open": N[6] || (N[6] = ($) => k.value = $)
        }, {
          default: Jt(() => [
            R(c(Ll), {
              styles: E("style_1"),
              "model-value": c(d),
              onSelect: N[5] || (N[5] = ($) => {
                d.value = $, k.value = !1;
              })
            }, null, 8, ["styles", "model-value"])
          ]),
          _: 1
        }, 8, ["open", "title"])
      ], 64)),
      R(c(Ve), {
        title: c(n)("sm_section_style_2", "🧪 Secondary Style (Style 2)"),
        "model-value": F("style2"),
        "onUpdate:modelValue": N[7] || (N[7] = ($) => V("style2", $))
      }, null, 8, ["title", "model-value"]),
      F("style2") ? ne("", !0) : (C(), M(fe, { key: 2 }, [
        R(c(tt), {
          variant: "full",
          label: K(c(f), c(n)("sm_style_2", "Style 2")),
          onClick: N[8] || (N[8] = ($) => v.value = !0)
        }, null, 8, ["label"]),
        R(c(Oe), {
          modelValue: c(p),
          "onUpdate:modelValue": N[9] || (N[9] = ($) => /* @__PURE__ */ se(p) ? p.value = $ : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: c(n)("sm_style_2_weight", "Style 2 Weight")
        }, null, 8, ["modelValue", "label"]),
        R(c(Ln), {
          open: v.value,
          title: c(n)("sm_pick_style_2", "Select Secondary Style 2"),
          width: "680px",
          "onUpdate:open": N[11] || (N[11] = ($) => v.value = $)
        }, {
          default: Jt(() => [
            R(c(Ll), {
              styles: E("style_2"),
              "model-value": c(f),
              onSelect: N[10] || (N[10] = ($) => {
                f.value = $, v.value = !1;
              })
            }, null, 8, ["styles", "model-value"])
          ]),
          _: 1
        }, 8, ["open", "title"])
      ], 64)),
      R(c(Ve), {
        title: c(n)("sm_section_style_3", "✨ Tertiary Style (Style 3)"),
        "model-value": F("style3"),
        "onUpdate:modelValue": N[12] || (N[12] = ($) => V("style3", $))
      }, null, 8, ["title", "model-value"]),
      F("style3") ? ne("", !0) : (C(), M(fe, { key: 3 }, [
        R(c(tt), {
          variant: "full",
          label: K(c(g), c(n)("sm_style_3", "Style 3")),
          onClick: N[13] || (N[13] = ($) => y.value = !0)
        }, null, 8, ["label"]),
        R(c(Oe), {
          modelValue: c(m),
          "onUpdate:modelValue": N[14] || (N[14] = ($) => /* @__PURE__ */ se(m) ? m.value = $ : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: c(n)("sm_style_3_weight", "Style 3 Weight")
        }, null, 8, ["modelValue", "label"]),
        R(c(Ln), {
          open: y.value,
          title: c(n)("sm_pick_style_3", "Select Tertiary Style 3"),
          width: "680px",
          "onUpdate:open": N[16] || (N[16] = ($) => y.value = $)
        }, {
          default: Jt(() => [
            R(c(Ll), {
              styles: E("style_3"),
              "model-value": c(g),
              onSelect: N[15] || (N[15] = ($) => {
                g.value = $, y.value = !1;
              })
            }, null, 8, ["styles", "model-value"])
          ]),
          _: 1
        }, 8, ["open", "title"])
      ], 64)),
      R(c(Ve), {
        title: c(n)("sm_section_image_1", "🖼️ Image 1 Influence"),
        "model-value": F("image1"),
        "onUpdate:modelValue": N[17] || (N[17] = ($) => V("image1", $))
      }, null, 8, ["title", "model-value"]),
      F("image1") ? ne("", !0) : (C(), Ce(c(Oe), {
        key: 4,
        modelValue: c(_),
        "onUpdate:modelValue": N[18] || (N[18] = ($) => /* @__PURE__ */ se(_) ? _.value = $ : null),
        min: 0,
        max: 1,
        step: 0.05,
        label: c(n)("sm_image_1_weight", "Image 1 Weight")
      }, null, 8, ["modelValue", "label"])),
      R(c(Ve), {
        title: c(n)("sm_section_image_2", "🖼️ Image 2 Influence"),
        "model-value": F("image2"),
        "onUpdate:modelValue": N[19] || (N[19] = ($) => V("image2", $))
      }, null, 8, ["title", "model-value"]),
      F("image2") ? ne("", !0) : (C(), Ce(c(Oe), {
        key: 5,
        modelValue: c(A),
        "onUpdate:modelValue": N[20] || (N[20] = ($) => /* @__PURE__ */ se(A) ? A.value = $ : null),
        min: 0,
        max: 1,
        step: 0.05,
        label: c(n)("sm_image_2_weight", "Image 2 Weight")
      }, null, 8, ["modelValue", "label"])),
      B.value ? (C(), M(fe, { key: 6 }, [
        R(c(Ve), {
          title: c(n)("sm_section_image_3", "🖼️ Image 3 Influence"),
          "model-value": F("image3"),
          "onUpdate:modelValue": N[21] || (N[21] = ($) => V("image3", $))
        }, null, 8, ["title", "model-value"]),
        F("image3") ? ne("", !0) : (C(), Ce(c(Oe), {
          key: 0,
          modelValue: c(x),
          "onUpdate:modelValue": N[22] || (N[22] = ($) => /* @__PURE__ */ se(x) ? x.value = $ : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: c(n)("sm_image_3_weight", "Image 3 Weight")
        }, null, 8, ["modelValue", "label"]))
      ], 64)) : ne("", !0),
      O.value ? (C(), M(fe, { key: 7 }, [
        R(c(Ve), {
          title: c(n)("sm_section_image_4", "🖼️ Image 4 Influence"),
          "model-value": F("image4"),
          "onUpdate:modelValue": N[23] || (N[23] = ($) => V("image4", $))
        }, null, 8, ["title", "model-value"]),
        F("image4") ? ne("", !0) : (C(), Ce(c(Oe), {
          key: 0,
          modelValue: c(S),
          "onUpdate:modelValue": N[24] || (N[24] = ($) => /* @__PURE__ */ se(S) ? S.value = $ : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: c(n)("sm_image_4_weight", "Image 4 Weight")
        }, null, 8, ["modelValue", "label"]))
      ], 64)) : ne("", !0)
    ]));
  }
}), b_ = /* @__PURE__ */ xe(__, [["__scopeId", "data-v-87c8a7d7"]]), v_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: b_
}, Symbol.toStringTag, { value: "Module" })), y_ = { class: "fil-color-wizard-root" }, w_ = { class: "fil-cw-presets-block" }, S_ = { class: "fil-cw-presets-title" }, x_ = { class: "fil-cw-presets-grid" }, C_ = ["title"], A_ = ["title"], k_ = ["title"], F_ = ["title"], M_ = { class: "fil-cw-slider-group" }, L_ = /* @__PURE__ */ we({
  __name: "ColorWizard",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = bt(), l = Si.FiLColorWizard, o = (l == null ? void 0 : l.inputs.required.find((g) => g.name === "method")) || (l == null ? void 0 : l.inputs.optional.find((g) => g.name === "method")), i = q(
      () => {
        var g;
        return ((g = o == null ? void 0 : o.values) != null && g.length ? o.values : ["Full Auto"]).map((m) => ({ value: m }));
      }
    );
    function s(g, m) {
      return q({
        get: () => t.state.nodeState[g] ?? m,
        set: (_) => {
          t.state.nodeState[g] = _;
          const A = t.state.node ? ie(t.state.node, g) : null;
          A && (A.value = _);
        }
      });
    }
    const a = s("method", "Full Auto"), r = s("strength", 0.8), d = s("temperature", 0), u = s("tint", 0), f = s("preserve_skin", !1);
    function p(g) {
      g === "warm" ? (a.value = "Full Auto", d.value = 0.35, u.value = 0, r.value = 0.8, f.value = !0) : g === "cool" ? (a.value = "Full Auto", d.value = -0.35, u.value = 0.15, r.value = 0.85, f.value = !1) : g === "skin" ? (a.value = "White Patch", d.value = 0.05, u.value = 0, r.value = 0.75, f.value = !0) : g === "contrast" && (a.value = "LAB Enhance", d.value = 0, u.value = 0, r.value = 0.9, f.value = !1);
    }
    return (g, m) => (C(), M("div", y_, [
      D("div", w_, [
        D("div", S_, Y(c(n)("cw_presets", "⚡ Quick Presets")), 1),
        D("div", x_, [
          D("button", {
            type: "button",
            class: "fil-cw-preset-btn warm",
            title: c(n)("cw_preset_warm_tt", "Warm Sunny Tone"),
            onClick: m[0] || (m[0] = (_) => p("warm"))
          }, Y(c(n)("cw_preset_warm", "☀️ Warm Sun")), 9, C_),
          D("button", {
            type: "button",
            class: "fil-cw-preset-btn cool",
            title: c(n)("cw_preset_cool_tt", "Cool Sci-Fi Cyberpunk Tone"),
            onClick: m[1] || (m[1] = (_) => p("cool"))
          }, Y(c(n)("cw_preset_cool", "🧊 Cool Sci-Fi")), 9, A_),
          D("button", {
            type: "button",
            class: "fil-cw-preset-btn skin",
            title: c(n)("cw_preset_skin_tt", "Natural Skin Preservation"),
            onClick: m[2] || (m[2] = (_) => p("skin"))
          }, Y(c(n)("cw_preset_skin", "👤 Skin Protect")), 9, k_),
          D("button", {
            type: "button",
            class: "fil-cw-preset-btn contrast",
            title: c(n)("cw_preset_contrast_tt", "Punchy LAB Contrast"),
            onClick: m[3] || (m[3] = (_) => p("contrast"))
          }, Y(c(n)("cw_preset_contrast", "⚡ Contrast")), 9, F_)
        ])
      ]),
      R(c(Ve), {
        title: c(n)("cw_section_method", "⚙️ Method")
      }, null, 8, ["title"]),
      R(c(vr), {
        modelValue: c(a),
        "onUpdate:modelValue": m[4] || (m[4] = (_) => /* @__PURE__ */ se(a) ? a.value = _ : null),
        options: i.value,
        title: c(n)("tt_cw_method", "Correction algorithm.")
      }, null, 8, ["modelValue", "options", "title"]),
      R(c(Ve), {
        title: c(n)("cw_section_adjust", "🎛️ Adjustments")
      }, null, 8, ["title"]),
      D("div", M_, [
        R(c(Oe), {
          modelValue: c(r),
          "onUpdate:modelValue": m[5] || (m[5] = (_) => /* @__PURE__ */ se(r) ? r.value = _ : null),
          min: 0,
          max: 1,
          step: 0.05,
          label: c(n)("cw_strength", "Correction Strength"),
          title: c(n)("tt_cw_strength", "Correction strength (0 = no change).")
        }, null, 8, ["modelValue", "label", "title"]),
        R(c(Oe), {
          modelValue: c(d),
          "onUpdate:modelValue": m[6] || (m[6] = (_) => /* @__PURE__ */ se(d) ? d.value = _ : null),
          min: -1,
          max: 1,
          step: 0.05,
          label: c(n)("cw_temperature", "Temperature (Warm/Cool)"),
          title: c(n)("tt_cw_temperature", "Colour temperature.")
        }, null, 8, ["modelValue", "label", "title"]),
        R(c(Oe), {
          modelValue: c(u),
          "onUpdate:modelValue": m[7] || (m[7] = (_) => /* @__PURE__ */ se(u) ? u.value = _ : null),
          min: -1,
          max: 1,
          step: 0.05,
          label: c(n)("cw_tint", "Tint (Green/Magenta)"),
          title: c(n)("tt_cw_tint", "Colour tint.")
        }, null, 8, ["modelValue", "label", "title"])
      ]),
      R(c(dn), {
        "model-value": c(f) ? "ON" : "OFF",
        label: c(n)("cw_preserve_skin", "🛡️ Preserve Skin Tones"),
        title: c(n)("tt_cw_preserve_skin", "Preserve skin tones."),
        "onUpdate:modelValue": m[8] || (m[8] = (_) => f.value = _ === "ON")
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), I_ = /* @__PURE__ */ xe(L_, [["__scopeId", "data-v-b58e409b"]]), D_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: I_
}, Symbol.toStringTag, { value: "Module" })), P_ = { class: "fil-switch-panel" }, N_ = { class: "fil-switch-text" }, R_ = /* @__PURE__ */ we({
  __name: "Switch",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, n = q({
      get: () => !!(t.state.nodeState.enable ?? !0),
      set: (o) => {
        t.state.nodeState.enable = o;
        const i = t.state.node ? ie(t.state.node, "enable") : null;
        i && (i.value = o);
      }
    });
    function l() {
      n.value = !n.value;
    }
    return $e(
      () => t.state.nodeState.enable,
      (o) => {
        if (o !== void 0) {
          const i = !!o;
          n.value !== i && (n.value = i);
        }
      }
    ), (o, i) => (C(), M("div", P_, [
      D("button", {
        type: "button",
        class: _e(["fil-switch-btn", { "is-on": n.value, "is-off": !n.value }]),
        onClick: l
      }, [
        D("span", N_, Y(n.value ? "ON" : "OFF"), 1)
      ], 2)
    ]));
  }
}), T_ = /* @__PURE__ */ xe(R_, [["__scopeId", "data-v-ebd9f0fd"]]), E_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: T_
}, Symbol.toStringTag, { value: "Module" })), V_ = { class: "fil-ds-root" }, O_ = /* @__PURE__ */ we({
  __name: "DatasetForge",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = bt();
    function l(ae, Z = "") {
      return t.state.nodeState[ae] ?? t.state.initialValues[ae] ?? Z;
    }
    function o(ae, Z) {
      t.state.nodeState[ae] = Z;
    }
    function i(ae, Z = "") {
      return q({
        get: () => String(l(ae, Z)),
        set: (oe) => o(ae, oe)
      });
    }
    function s(ae, Z) {
      return q({
        // `Number(x) || fallback` (the pattern the older panels use) would turn a
        // deliberate 0 into the fallback — which for `seed` means a pinned seed of
        // 0 silently reading back as -1, i.e. "let the provider randomize".
        get: () => {
          const oe = Number(l(ae, Z));
          return Number.isFinite(oe) ? oe : Z;
        },
        set: (oe) => o(ae, oe)
      });
    }
    function a(ae, Z) {
      return q({
        get: () => l(ae, Z) ? "ON" : "OFF",
        set: (oe) => o(ae, oe === "ON")
      });
    }
    const r = i("dataset_name", "my_lora"), d = i("trigger_word", ""), u = i("class_token", ""), f = s("repeats", 10), p = i("layout", "kohya");
    function g(ae, Z) {
      return ae.trim().replace(/[^A-Za-z0-9._-]+/g, "_").replace(/^[._ ]+|[._ ]+$/g, "") || Z;
    }
    function m(ae) {
      return ae.replace(/[^A-Za-z0-9._\- ]+/g, "").trim().replace(/\s{2,}/g, " ");
    }
    const _ = q(() => {
      const ae = g(r.value, "my_lora");
      if (p.value === "flat") return `${ae}/`;
      const Z = [m(d.value), m(u.value)].filter(Boolean).join(" ") || "concept";
      return `${ae}/img/${Math.max(1, f.value)}_${Z}/`;
    }), A = q(() => [
      { value: "512", label: n("dsp_res_512", "512 — SD 1.5, fast") },
      { value: "640", label: "640" },
      { value: "768", label: n("dsp_res_768", "768 — SD 1.5, quality") },
      { value: "896", label: "896" },
      { value: "1024", label: n("dsp_res_1024", "1024 — SDXL / Flux") },
      { value: "1152", label: "1152" },
      { value: "1216", label: n("dsp_res_1216", "1216 — high-res") },
      { value: "1536", label: n("dsp_res_1536", "1536 — high-res") }
    ]), x = i("base_resolution", "1024"), S = i("crop_mode", "center"), k = i("caption_mode", "natural"), v = i("caption_language", "en"), y = s("caption_max_words", 60), w = i("captions", ""), T = i("dont_caption", ""), B = i("caption_instruction", ""), O = q(() => k.value !== "none" && !w.value.trim()), E = /* @__PURE__ */ ce(!1);
    function K() {
      var oe;
      const ae = t.state.node, Z = (oe = ae == null ? void 0 : ae.inputs) == null ? void 0 : oe.find((En) => En.name === "config");
      E.value = Z != null && Z.link != null;
    }
    let F = 0;
    hn(() => {
      K(), F = window.setInterval(K, 300);
    }), Tn(() => {
      F && window.clearInterval(F);
    });
    const V = a("dry_run", !1), H = i("write_mode", "append"), N = s("bucket_step", 64), $ = i("caption_extension", ".txt"), I = i("image_format", "png"), L = s("jpg_quality", 95), U = s("seed", -1);
    function ge(ae) {
      const Z = t.state.ui[`collapsed_${ae}`];
      return Z === void 0 ? ae === "advanced" || ae === "caption_tuning" : !!Z;
    }
    function De(ae, Z) {
      t.state.ui[`collapsed_${ae}`] = Z;
    }
    return (ae, Z) => (C(), M("div", V_, [
      R(c(Ve), {
        title: c(n)("dsp_section_identity", "1️⃣ Who / what is this"),
        collapsible: !1
      }, null, 8, ["title"]),
      R(c(Io), {
        modelValue: c(r),
        "onUpdate:modelValue": Z[0] || (Z[0] = (oe) => /* @__PURE__ */ se(r) ? r.value = oe : null),
        label: c(n)("dsp_label_dataset_name", "🏷️ Dataset name"),
        title: c(n)("ds_name", ""),
        placeholder: "my_lora"
      }, null, 8, ["modelValue", "label", "title"]),
      R(c(Io), {
        modelValue: c(d),
        "onUpdate:modelValue": Z[1] || (Z[1] = (oe) => /* @__PURE__ */ se(d) ? d.value = oe : null),
        label: c(n)("dsp_label_trigger", "🔑 Trigger word"),
        title: c(n)("ds_trigger", ""),
        placeholder: "ohwx"
      }, null, 8, ["modelValue", "label", "title"]),
      R(c(Io), {
        modelValue: c(u),
        "onUpdate:modelValue": Z[2] || (Z[2] = (oe) => /* @__PURE__ */ se(u) ? u.value = oe : null),
        label: c(n)("dsp_label_class", "🧍 Class"),
        title: c(n)("ds_class", ""),
        placeholder: "woman"
      }, null, 8, ["modelValue", "label", "title"]),
      R(c(Dn), {
        text: `${c(n)("dsp_preview_folder", "📁 Will create:")} ${_.value}`
      }, null, 8, ["text"]),
      R(c(Ve), {
        title: c(n)("dsp_section_format", "2️⃣ File format"),
        collapsible: !1
      }, null, 8, ["title"]),
      R(c(vr), {
        modelValue: c(x),
        "onUpdate:modelValue": Z[3] || (Z[3] = (oe) => /* @__PURE__ */ se(x) ? x.value = oe : null),
        options: A.value,
        label: c(n)("dsp_label_resolution", "📐 Resolution"),
        title: c(n)("ds_resolution", "")
      }, null, 8, ["modelValue", "options", "label", "title"]),
      R(c(je), {
        modelValue: c(p),
        "onUpdate:modelValue": Z[4] || (Z[4] = (oe) => /* @__PURE__ */ se(p) ? p.value = oe : null),
        options: ["kohya", "flat"],
        "option-labels": { kohya: c(n)("dsp_opt_layout_kohya", "🗂️ kohya"), flat: c(n)("dsp_opt_layout_flat", "📄 Flat") },
        label: c(n)("dsp_label_layout", "📦 Layout"),
        title: c(n)("ds_layout", "")
      }, null, 8, ["modelValue", "option-labels", "label", "title"]),
      R(c(dt), {
        modelValue: c(f),
        "onUpdate:modelValue": Z[5] || (Z[5] = (oe) => /* @__PURE__ */ se(f) ? f.value = oe : null),
        min: 1,
        max: 1e3,
        step: 1,
        label: c(n)("dsp_label_repeats", "🔁 Repeats"),
        title: c(n)("ds_repeats", "")
      }, null, 8, ["modelValue", "label", "title"]),
      R(c(je), {
        modelValue: c(S),
        "onUpdate:modelValue": Z[6] || (Z[6] = (oe) => /* @__PURE__ */ se(S) ? S.value = oe : null),
        options: ["center", "entropy"],
        "option-labels": { center: c(n)("dsp_opt_crop_center", "🎯 Center"), entropy: c(n)("dsp_opt_crop_entropy", "🔬 Detail") },
        label: c(n)("dsp_label_crop", "✂️ Crop"),
        title: c(n)("ds_crop_mode", "")
      }, null, 8, ["modelValue", "option-labels", "label", "title"]),
      R(c(Ve), {
        title: c(n)("dsp_section_captions", "3️⃣ Captions"),
        collapsible: !1
      }, null, 8, ["title"]),
      R(c(je), {
        modelValue: c(k),
        "onUpdate:modelValue": Z[7] || (Z[7] = (oe) => /* @__PURE__ */ se(k) ? k.value = oe : null),
        options: ["natural", "tags", "hybrid", "none"],
        "option-labels": {
          natural: c(n)("dsp_opt_mode_natural", "📝 Text"),
          tags: c(n)("dsp_opt_mode_tags", "🏷️ Tags"),
          hybrid: c(n)("dsp_opt_mode_hybrid", "🔀 Hybrid"),
          none: c(n)("dsp_opt_mode_none", "🚫 No LLM")
        },
        label: c(n)("dsp_label_caption_mode", "✍️ Mode"),
        title: c(n)("ds_caption_mode", "")
      }, null, 8, ["modelValue", "option-labels", "label", "title"]),
      O.value && !E.value ? (C(), Ce(c(Dn), {
        key: 0,
        text: c(n)("dsp_hint_no_config", "⚠️ Connect 🔌 Provider Loader to caption — or fill in captions below"),
        err: ""
      }, null, 8, ["text"])) : ne("", !0),
      c(k) !== "none" ? (C(), M(fe, { key: 1 }, [
        R(c(je), {
          modelValue: c(v),
          "onUpdate:modelValue": Z[8] || (Z[8] = (oe) => /* @__PURE__ */ se(v) ? v.value = oe : null),
          options: ["en", "ru"],
          "option-labels": { en: c(n)("dsp_opt_lang_en", "🇬🇧 EN"), ru: c(n)("dsp_opt_lang_ru", "🇷🇺 RU") },
          label: c(n)("dsp_label_caption_lang", "🌐 Language"),
          title: c(n)("ds_caption_lang", "")
        }, null, 8, ["modelValue", "option-labels", "label", "title"]),
        R(c(dt), {
          modelValue: c(y),
          "onUpdate:modelValue": Z[9] || (Z[9] = (oe) => /* @__PURE__ */ se(y) ? y.value = oe : null),
          min: 4,
          max: 400,
          step: 5,
          label: c(n)("dsp_label_caption_words", "📏 Max words"),
          title: c(n)("ds_caption_words", "")
        }, null, 8, ["modelValue", "label", "title"])
      ], 64)) : ne("", !0),
      R(c(Il), {
        modelValue: c(w),
        "onUpdate:modelValue": Z[10] || (Z[10] = (oe) => /* @__PURE__ */ se(w) ? w.value = oe : null),
        title: c(n)("ds_captions", ""),
        label: c(n)("dsp_label_manual_captions", "📋 Manual captions (optional)"),
        placeholder: c(n)("dsp_ph_manual_captions", "One per image, separated by a line with ---. Skips the LLM when filled.")
      }, null, 8, ["modelValue", "title", "label", "placeholder"]),
      c(k) !== "none" ? (C(), M(fe, { key: 2 }, [
        R(c(Ve), {
          title: c(n)("dsp_section_caption_tuning", "🎛️ Caption tuning"),
          "model-value": ge("caption_tuning"),
          "onUpdate:modelValue": Z[11] || (Z[11] = (oe) => De("caption_tuning", oe))
        }, null, 8, ["title", "model-value"]),
        ge("caption_tuning") ? ne("", !0) : (C(), M(fe, { key: 0 }, [
          R(c(Il), {
            modelValue: c(T),
            "onUpdate:modelValue": Z[12] || (Z[12] = (oe) => /* @__PURE__ */ se(T) ? T.value = oe : null),
            title: c(n)("ds_dont_caption", ""),
            label: c(n)("dsp_label_dont_caption", "🚫 Never mention"),
            placeholder: c(n)("dsp_ph_dont_caption", "her face, red hair — belongs to the trigger word")
          }, null, 8, ["modelValue", "title", "label", "placeholder"]),
          R(c(Il), {
            modelValue: c(B),
            "onUpdate:modelValue": Z[13] || (Z[13] = (oe) => /* @__PURE__ */ se(B) ? B.value = oe : null),
            title: c(n)("ds_caption_instruction", ""),
            label: c(n)("dsp_label_caption_instruction", "💬 Extra instruction")
          }, null, 8, ["modelValue", "title", "label"])
        ], 64))
      ], 64)) : ne("", !0),
      R(c(Ve), {
        title: c(n)("dsp_section_write", "4️⃣ Write to disk"),
        collapsible: !1
      }, null, 8, ["title"]),
      R(c(dn), {
        "model-value": c(V),
        label: c(n)("dsp_label_dry_run", "🧪 Dry run (plan only)"),
        title: c(n)("ds_dry_run", ""),
        "onUpdate:modelValue": Z[14] || (Z[14] = (oe) => V.value = oe)
      }, null, 8, ["model-value", "label", "title"]),
      R(c(je), {
        modelValue: c(H),
        "onUpdate:modelValue": Z[15] || (Z[15] = (oe) => /* @__PURE__ */ se(H) ? H.value = oe : null),
        options: ["append", "overwrite"],
        "option-labels": { append: c(n)("dsp_opt_write_append", "➕ Append"), overwrite: c(n)("dsp_opt_write_overwrite", "♻️ Overwrite") },
        label: c(n)("dsp_label_write_mode", "💾 Mode"),
        title: c(n)("ds_write_mode", "")
      }, null, 8, ["modelValue", "option-labels", "label", "title"]),
      R(c(Ve), {
        title: c(n)("dsp_section_advanced", "⚙️ Technical details"),
        "model-value": ge("advanced"),
        "onUpdate:modelValue": Z[16] || (Z[16] = (oe) => De("advanced", oe))
      }, null, 8, ["title", "model-value"]),
      ge("advanced") ? ne("", !0) : (C(), M(fe, { key: 3 }, [
        R(c(dt), {
          modelValue: c(N),
          "onUpdate:modelValue": Z[17] || (Z[17] = (oe) => /* @__PURE__ */ se(N) ? N.value = oe : null),
          min: 8,
          max: 256,
          step: 8,
          label: c(n)("dsp_label_bucket_step", "📏 Bucket step"),
          title: c(n)("ds_bucket_step", "")
        }, null, 8, ["modelValue", "label", "title"]),
        R(c(Kn), {
          modelValue: c($),
          "onUpdate:modelValue": Z[18] || (Z[18] = (oe) => /* @__PURE__ */ se($) ? $.value = oe : null),
          options: [".txt", ".caption"],
          label: c(n)("dsp_label_caption_ext", "📄 Caption ext."),
          title: c(n)("ds_caption_ext", "")
        }, null, 8, ["modelValue", "label", "title"]),
        R(c(je), {
          modelValue: c(I),
          "onUpdate:modelValue": Z[19] || (Z[19] = (oe) => /* @__PURE__ */ se(I) ? I.value = oe : null),
          options: ["png", "jpg"],
          "option-labels": { png: "PNG", jpg: "JPG" },
          label: c(n)("dsp_label_image_format", "🖼️ File format"),
          title: c(n)("ds_image_format", "")
        }, null, 8, ["modelValue", "label", "title"]),
        c(I) === "jpg" ? (C(), Ce(c(dt), {
          key: 0,
          modelValue: c(L),
          "onUpdate:modelValue": Z[20] || (Z[20] = (oe) => /* @__PURE__ */ se(L) ? L.value = oe : null),
          min: 50,
          max: 100,
          step: 1,
          label: c(n)("dsp_label_jpg_quality", "🎚️ JPG quality"),
          title: c(n)("ds_jpg_quality", "")
        }, null, 8, ["modelValue", "label", "title"])) : ne("", !0),
        R(c(dt), {
          modelValue: c(U),
          "onUpdate:modelValue": Z[21] || (Z[21] = (oe) => /* @__PURE__ */ se(U) ? U.value = oe : null),
          min: -1,
          max: 999999999999,
          step: 1,
          label: c(n)("dsp_label_seed", "🌱 Caption seed"),
          title: c(n)("ds_seed", "")
        }, null, 8, ["modelValue", "label", "title"])
      ], 64))
    ]));
  }
}), $_ = /* @__PURE__ */ xe(O_, [["__scopeId", "data-v-a83f0384"]]), B_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $_
}, Symbol.toStringTag, { value: "Module" })), H_ = {
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
}, U_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HELP_DEFAULTS: H_
}, Symbol.toStringTag, { value: "Module" }));
//# sourceMappingURL=fil_design_imagemind.js.map
