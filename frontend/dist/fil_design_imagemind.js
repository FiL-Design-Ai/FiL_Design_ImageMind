(function(){try{var s=document.createElement("style");s.textContent=".fil-color-picker[data-v-969386c1]{display:flex;flex-direction:column;gap:8px;padding:8px;width:176px;box-sizing:border-box}.fil-cp-sv[data-v-969386c1]{position:relative;width:100%;height:100px;border-radius:4px;cursor:crosshair;touch-action:none}.fil-cp-sv-white[data-v-969386c1]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to right,#fff,#fff0);border-radius:4px}.fil-cp-sv-black[data-v-969386c1]{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to top,#000,#0000);border-radius:4px}.fil-cp-sv-thumb[data-v-969386c1]{position:absolute;width:10px;height:10px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hue[data-v-969386c1]{position:relative;width:100%;height:12px;border-radius:6px;background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red);cursor:pointer;touch-action:none}.fil-cp-hue-thumb[data-v-969386c1]{position:absolute;top:50%;width:12px;height:12px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #0006;transform:translate(-50%,-50%);pointer-events:none}.fil-cp-hex-row[data-v-969386c1]{display:flex;align-items:center;gap:6px}.fil-cp-swatch[data-v-969386c1]{width:22px;height:22px;border-radius:4px;border:1px solid rgba(255,255,255,.25);flex-shrink:0}.fil-cp-hex-input[data-v-969386c1]{flex:1;min-width:0;height:22px;box-sizing:border-box;border-radius:4px;border:1px solid rgba(255,255,255,.2);background:#00000040;color:#f2f2f2;font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:12px;padding:0 6px;outline:none}.fil-cp-hex-input[data-v-969386c1]:focus{border-color:#ffffff80}.fil-cp-presets[data-v-969386c1]{display:grid;grid-template-columns:repeat(5,1fr);gap:4px}.fil-color-swatch[data-v-969386c1]{width:24px;height:24px;border-radius:4px;border:2px solid transparent;background:var(--swatch);cursor:pointer;transition:border-color .08s,transform .08s;outline:none;box-sizing:border-box}.fil-color-swatch[data-v-969386c1]:hover{border-color:#ffffff80;transform:scale(1.15)}.fil-color-swatch.is-active[data-v-969386c1]{border-color:#fff;box-shadow:0 0 0 1px var(--swatch)}.fil-node-shell[data-v-cb614e72]{position:relative;width:100%;box-sizing:border-box;height:100%}.fil-icon[data-v-dfb78d9f]{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;line-height:0}.fil-icon[data-v-dfb78d9f] svg{width:100%;height:100%}.fil-modal-backdrop[data-v-952a8f2d]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000;display:flex;align-items:center;justify-content:center;background:#0000008c;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.fil-modal-panel[data-v-952a8f2d]{width:90%;max-height:80vh;background:var(--fil-panel);border:1px solid var(--fil-border);border-radius:10px;box-shadow:0 20px 60px #00000080;display:flex;flex-direction:column;overflow:hidden}.fil-modal-header[data-v-952a8f2d]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--fil-border)}.fil-modal-title[data-v-952a8f2d]{font-size:14px;font-weight:600;color:var(--fil-text)}.fil-modal-close[data-v-952a8f2d]{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;border:none;background:transparent;color:var(--fil-muted);cursor:pointer;transition:background .08s,color .08s}.fil-modal-close[data-v-952a8f2d]:hover{background:#ffffff14;color:var(--fil-text)}.fil-modal-body[data-v-952a8f2d]{flex:1;overflow-y:auto;padding:16px}.fil-modal-enter-active[data-v-952a8f2d],.fil-modal-leave-active[data-v-952a8f2d]{transition:opacity .15s ease}.fil-modal-enter-from[data-v-952a8f2d],.fil-modal-leave-to[data-v-952a8f2d]{opacity:0}.fil-modal-enter-active .fil-modal-panel[data-v-952a8f2d],.fil-modal-leave-active .fil-modal-panel[data-v-952a8f2d]{transition:transform .15s ease}.fil-modal-enter-from .fil-modal-panel[data-v-952a8f2d],.fil-modal-leave-to .fil-modal-panel[data-v-952a8f2d]{transform:scale(.95) translateY(8px)}.fil-help-title[data-v-bfee41d7]{margin:0 0 12px;font-size:16px;font-weight:700;color:var(--fil-text)}.fil-help-body[data-v-bfee41d7]{margin:0 0 12px;font-size:13px;line-height:1.6;color:var(--fil-muted)}.fil-help-bullet[data-v-bfee41d7]{display:flex;gap:6px;align-items:flex-start;margin-bottom:6px;font-size:13px;color:var(--fil-muted)}.fil-help-bullet>span[data-v-bfee41d7]{flex:1}.fil-help-table[data-v-bfee41d7]{width:100%;border-collapse:collapse;margin-top:8px;font-size:12px}.fil-help-table th[data-v-bfee41d7],.fil-help-table td[data-v-bfee41d7]{text-align:left;padding:6px 10px;border-bottom:1px solid var(--fil-border)}.fil-help-table th[data-v-bfee41d7]{font-weight:600;color:var(--fil-text)}.fil-help-table td[data-v-bfee41d7]{color:var(--fil-muted)}.fil-help-code[data-v-bfee41d7]{background:#0000004d;border-radius:6px;padding:12px;margin-top:10px;overflow-x:auto;font-size:12px;color:var(--fil-muted)}.fil-help-empty[data-v-bfee41d7]{color:var(--fil-muted);font-size:13px}.fil-w-btn[data-v-75e79c80]{box-sizing:border-box;padding:var(--fil-row-pad);border-radius:6px;background:var(--fil-surface-1);border:1px solid var(--fil-border);color:var(--fil-text);font-family:ui-sans-serif,system-ui,sans-serif;font-size:12px;cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;display:inline-flex;align-items:center;justify-content:center;gap:6px}.fil-w-btn[data-v-75e79c80]:hover:not(:disabled){background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink)}.fil-w-btn[data-v-75e79c80]:active{transform:translateY(1px)}.fil-w-btn[data-v-75e79c80]:disabled{opacity:.4;cursor:default}.fil-w-btn-accent[data-v-75e79c80]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink)}.fil-w-btn-danger[data-v-75e79c80]{color:var(--fil-danger)}.fil-w-btn-danger[data-v-75e79c80]:hover:not(:disabled){background:var(--fil-danger);border-color:var(--fil-danger);color:#fff}.fil-w-btn-sm[data-v-75e79c80]{padding:4px 8px;font-size:11px}.fil-w-btn-full[data-v-75e79c80]{width:100%;display:block}.fil-w-btn-icon[data-v-75e79c80]{display:inline-flex;align-items:center;justify-content:center;gap:5px}.fil-w-btn-glyph[data-v-75e79c80] svg{width:14px;height:14px}.fil-w-btn.is-flashing[data-v-75e79c80],.fil-w-btn.is-flashing[data-v-75e79c80]:hover{background:var(--fil-ok);border-color:var(--fil-ok);color:#fff}.fil-w-btn.is-loading[data-v-75e79c80]{cursor:wait}.fil-w-btn[data-v-75e79c80]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-btn-spinner[data-v-75e79c80]{display:inline-block;width:12px;height:12px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:fil-w-spin-75e79c80 .6s linear infinite}@keyframes fil-w-spin-75e79c80{to{transform:rotate(360deg)}}.fil-pm-root[data-v-7fb01658]{display:flex;flex-direction:column;gap:12px;padding:4px 0}.fil-pm-card[data-v-7fb01658]{background:var(--fil-surface-1);border:1px solid var(--fil-border);border-radius:8px;padding:12px}.fil-pm-header[data-v-7fb01658]{display:flex;align-items:center;gap:8px;margin-bottom:10px}.fil-pm-card--collapsed[data-v-7fb01658]{padding:8px 12px}.fil-pm-card--collapsed .fil-pm-header[data-v-7fb01658]{margin-bottom:0}.fil-pm-header--clickable[data-v-7fb01658]{cursor:pointer}.fil-pm-header--clickable:hover .fil-pm-name[data-v-7fb01658]{color:var(--fil-accent)}.fil-pm-chevron[data-v-7fb01658]{display:inline-flex;align-items:center;color:#fff6;transition:transform .12s ease}.fil-pm-chevron--open[data-v-7fb01658]{transform:rotate(90deg)}.fil-pm-icon[data-v-7fb01658]{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px}.fil-pm-name[data-v-7fb01658]{font-weight:600;font-size:14px;color:var(--fil-text)}.fil-pm-disp[data-v-7fb01658]{font-size:11px;color:#ffffff80}.fil-pm-status[data-v-7fb01658]{margin-left:auto;display:inline-flex;align-items:center;gap:5px;font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#fff6;white-space:nowrap}.fil-pm-dot[data-v-7fb01658]{width:8px;height:8px;border-radius:50%;background:currentColor;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 22%,transparent)}.fil-pm-status--connected[data-v-7fb01658]{color:var(--fil-ok)}.fil-pm-status--configured[data-v-7fb01658]{color:var(--fil-accent)}.fil-pm-status--off[data-v-7fb01658]{color:var(--fil-muted)}.fil-pm-fields[data-v-7fb01658]{display:flex;flex-direction:column;gap:8px;margin-bottom:10px}.fil-pm-field[data-v-7fb01658]{display:flex;flex-direction:column;gap:3px}.fil-pm-field-label[data-v-7fb01658]{font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:#ffffff80}.fil-pm-input[data-v-7fb01658]{width:100%;box-sizing:border-box;height:32px;background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:6px;padding:7px 8px;color:var(--fil-text);font-family:ui-monospace,monospace;font-size:13px;outline:none;transition:border-color .08s}.fil-pm-input[data-v-7fb01658]:focus{border-color:var(--fil-accent)}.fil-pm-input.fil-pm-has-val[data-v-7fb01658]{border-color:var(--fil-border)}.fil-pm-actions[data-v-7fb01658]{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}.fil-pm-models[data-v-7fb01658]{display:flex;flex-wrap:wrap;gap:4px}.fil-pm-model-tag[data-v-7fb01658]{display:inline-flex;align-items:center;gap:3px;background:var(--fil-surface-2);border-radius:4px;padding:2px 6px;font-size:11px;color:#ffffffbf;white-space:nowrap}.fil-pm-vision-badge[data-v-7fb01658]{font-size:10px;line-height:1}.fil-pm-err[data-v-7fb01658]{font-size:11px;color:var(--fil-danger);margin-top:4px}.fil-pm-age[data-v-7fb01658]{font-size:10px;color:#fff6;align-self:center}.fil-w-chips[data-v-7625192b]{display:grid;gap:5px;width:100%}.fil-w-chip[data-v-7625192b]{box-sizing:border-box;background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-7625192b]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text)}.fil-w-chip.active[data-v-7625192b]{background:var(--fil-panel-alt);color:var(--fil-accent);border-color:var(--fil-accent);font-weight:500;box-shadow:0 0 8px color-mix(in srgb,var(--fil-accent) 55%,transparent)}.fil-w-chip.disabled[data-v-7625192b]{opacity:.5;cursor:default}.fil-w-chip[data-v-7625192b]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chiplist[data-v-6cab4842]{display:flex;flex-direction:column;gap:5px;width:100%}.fil-w-search[data-v-6cab4842]{box-sizing:border-box;width:100%;padding:5px 8px;background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:5px;color:var(--fil-text);font-family:inherit;font-size:11px;outline:none}.fil-w-search[data-v-6cab4842]:focus{border-color:var(--fil-accent)}.fil-w-search[data-v-6cab4842]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-chip-scroll[data-v-6cab4842]{display:grid;gap:3px;max-height:200px;overflow-y:auto;overflow-x:hidden;padding-right:2px}.fil-w-chip-scroll[data-v-6cab4842]::-webkit-scrollbar{width:5px}.fil-w-chip-scroll[data-v-6cab4842]::-webkit-scrollbar-thumb{background:var(--fil-muted);border-radius:3px}.fil-w-chip-scroll[data-v-6cab4842]::-webkit-scrollbar-track{background:transparent}.fil-w-chip[data-v-6cab4842]{box-sizing:border-box;background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:5px;padding:6px 4px;font-size:10px;color:var(--fil-text);cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-w-chip[data-v-6cab4842]:hover:not(.disabled){border-color:var(--fil-accent);color:var(--fil-text)}.fil-w-chip.active[data-v-6cab4842]{background:var(--fil-accent);color:var(--fil-accent-ink);border-color:var(--fil-accent);font-weight:500}.fil-w-chip.disabled[data-v-6cab4842]{opacity:.5;cursor:default}.fil-w-chip[data-v-6cab4842]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-chip-empty[data-v-6cab4842]{padding:8px;text-align:center;color:var(--fil-muted);font-size:11px}.fil-combo[data-v-fa1a3804]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap);width:100%}.fil-combo-label[data-v-fa1a3804]{grid-column:1;font-size:11px;color:var(--fil-muted);font-family:inherit}.fil-combo-trigger[data-v-fa1a3804]{grid-column:2;width:100%;box-sizing:border-box;height:var(--fil-control-h);display:flex;align-items:center;gap:6px;background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:6px;padding:5px 8px;color:var(--fil-text);font-family:inherit;font-size:12px;outline:none;cursor:pointer;text-align:left;-moz-appearance:none;appearance:none;-webkit-appearance:none}.fil-combo-trigger.open[data-v-fa1a3804],.fil-combo-trigger[data-v-fa1a3804]:focus-visible{border-color:var(--fil-accent);outline:2px solid var(--fil-accent);outline-offset:1px}.fil-combo-trigger.disabled[data-v-fa1a3804]{opacity:.5;cursor:default}.fil-combo-trigger-label[data-v-fa1a3804]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-chevron[data-v-fa1a3804]{font-size:9px;color:var(--fil-muted);flex-shrink:0}.fil-combo-badge[data-v-fa1a3804]{flex-shrink:0;font-size:9px;line-height:1;padding:2px 5px;border-radius:999px;background:var(--fil-accent);color:var(--fil-accent-ink);font-weight:600}.fil-combo-panel[data-v-fa1a3804]{position:fixed;z-index:10001;box-sizing:border-box;background:var(--fil-panel);border:1px solid var(--fil-border);border-radius:8px;box-shadow:0 12px 32px #0006;display:flex;flex-direction:column;overflow:hidden;padding:6px}.fil-combo-search[data-v-fa1a3804]{box-sizing:border-box;width:100%;margin-bottom:6px;padding:6px 8px;background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:5px;color:var(--fil-text);font-family:inherit;font-size:12px;outline:none}.fil-combo-search[data-v-fa1a3804]:focus{border-color:var(--fil-accent)}.fil-combo-list[data-v-fa1a3804]{display:flex;flex-direction:column;gap:2px;max-height:240px;overflow-y:auto}.fil-combo-option[data-v-fa1a3804]{display:flex;align-items:center;gap:6px;width:100%;box-sizing:border-box;padding:6px 8px;border-radius:5px;border:none;background:transparent;color:var(--fil-text);font-family:inherit;font-size:12px;text-align:left;cursor:pointer;outline:none}.fil-combo-option.active[data-v-fa1a3804]{background:var(--fil-surface-2)}.fil-combo-option.selected[data-v-fa1a3804]{color:var(--fil-accent);font-weight:600}.fil-combo-option-label[data-v-fa1a3804]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-combo-empty[data-v-fa1a3804]{padding:10px;text-align:center;color:var(--fil-muted);font-size:12px}.fil-w-info[data-v-be74f393]{font-size:11px;line-height:1.5;color:var(--fil-muted);text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.fil-w-info[data-ok][data-v-be74f393]{color:var(--fil-ok)}.fil-w-info[data-err][data-v-be74f393]{color:var(--fil-danger)}.fil-w-numfield[data-v-3e158373]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap);width:100%}.fil-w-numfield.no-label[data-v-3e158373]{display:contents}.fil-w-numfield-label[data-v-3e158373]{grid-column:1;font-size:11px;color:var(--fil-muted);font-family:inherit}.fil-w-numfield:not(.no-label) .fil-w-num-wrap[data-v-3e158373]{grid-column:2}.fil-w-num-wrap[data-v-3e158373]{position:relative;width:100%;min-width:0}.fil-w-num[data-v-3e158373]{width:100%;box-sizing:border-box;height:var(--fil-control-h);background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:6px;padding:7px 20px 7px 8px;color:var(--fil-text);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:14px;text-align:left;outline:none;transition:border-color .08s}.fil-w-num[data-v-3e158373]:focus{border-color:var(--fil-accent)}.fil-w-num[data-v-3e158373]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-num[data-v-3e158373]:disabled{opacity:.5}.fil-w-num-step[data-v-3e158373]{position:absolute;top:1px;right:1px;bottom:1px;width:17px;display:flex;flex-direction:column;border-left:1px solid var(--fil-border);overflow:hidden;border-radius:0 5px 5px 0}.fil-w-num-btn[data-v-3e158373]{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;border:none;background:transparent;color:var(--fil-muted);font-size:7px;line-height:1;cursor:pointer;padding:0;transition:color .08s,background .08s}.fil-w-num-btn[data-v-3e158373]:last-child{border-top:1px solid var(--fil-border)}.fil-w-num-btn[data-v-3e158373]:hover:not(:disabled){color:var(--fil-accent);background:var(--fil-surface-2)}.fil-w-num-btn[data-v-3e158373]:disabled{opacity:.3;cursor:default}.fil-w-seedrow[data-v-62e357cd]{display:flex;gap:6px;min-width:0}.fil-w-seedrow-field[data-v-62e357cd]{flex:1.3;min-width:0;box-sizing:border-box;height:var(--fil-control-h-lg);background:var(--fil-inset);border:1px solid var(--fil-border);border-radius:var(--fil-pill-radius);padding:0 12px;color:var(--fil-text);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:13px;text-align:center;outline:none;transition:border-color .08s}.fil-w-seedrow-field[data-v-62e357cd]:focus{border-color:var(--fil-accent)}.fil-w-seedrow-field[data-v-62e357cd]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-seedrow-field.is-random[data-v-62e357cd]{color:var(--fil-muted);font-style:italic}.fil-w-seedrow-pill[data-v-62e357cd]{flex:1;min-width:0;box-sizing:border-box;height:var(--fil-control-h-lg);padding:0 8px;border-radius:var(--fil-pill-radius);border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-text);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:background .08s,border-color .08s,color .08s;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none}.fil-w-seedrow-pill[data-v-62e357cd]:hover{background:var(--fil-surface-3)}.fil-w-seedrow-pill[data-v-62e357cd]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-seedrow-pill.active[data-v-62e357cd]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink)}.fil-w-seedrow-pill.is-accent[data-v-62e357cd]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink);font-weight:700}.fil-w-seedrow-pill.is-accent[data-v-62e357cd]:hover{filter:brightness(1.08);background:var(--fil-accent)}.fil-w-section[data-v-7c27965b]{box-sizing:border-box;width:100%;padding:var(--fil-row-pad);border:none;border-radius:5px;background:var(--fil-surface-1);color:var(--fil-muted);font-family:inherit;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;cursor:pointer;text-align:left;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s;display:flex;align-items:center;gap:6px}.fil-w-section[data-v-7c27965b]:hover:not(:disabled){background:var(--fil-surface-2);color:var(--fil-text)}.fil-w-section[data-v-7c27965b]:disabled{cursor:default}.fil-w-section[data-v-7c27965b]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-section-arrow[data-v-7c27965b]{display:inline-block;width:8px;font-size:9px;color:var(--fil-accent)}.fil-w-segmented[data-v-80a17629]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap);width:100%}.fil-w-segmented-label[data-v-80a17629]{grid-column:1;font-size:11px;color:var(--fil-muted);font-family:inherit}.fil-w-pill[data-v-80a17629]{grid-column:2;display:flex;gap:0;min-width:0;background:var(--fil-surface-2);border-radius:7px;padding:3px}.fil-w-pill.disabled[data-v-80a17629]{opacity:.5}.fil-w-seg[data-v-80a17629]{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center;padding:6px;border:none;border-radius:5px;background:transparent;font-family:inherit;font-size:12px;color:var(--fil-muted);cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,color .08s}.fil-w-seg[data-v-80a17629]:hover:not(.active){color:var(--fil-text)}.fil-w-seg.active[data-v-80a17629]{background:var(--fil-accent);color:var(--fil-accent-ink);font-weight:500}.fil-w-seg[data-v-80a17629]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-w-select[data-v-f303e789]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap);width:100%}.fil-w-select-label[data-v-f303e789]{grid-column:1;font-size:11px;color:var(--fil-muted);font-family:inherit}.fil-w-select-input[data-v-f303e789]{grid-column:2;width:100%;box-sizing:border-box;height:var(--fil-control-h);background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:6px;padding:5px 8px;color:var(--fil-text);font-family:inherit;font-size:12px;outline:none;cursor:pointer}.fil-w-select-input[data-v-f303e789]:focus{border-color:var(--fil-accent)}.fil-w-select-input[data-v-f303e789]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-select-input[data-v-f303e789]:disabled{opacity:.5;cursor:default}.fil-w-slider[data-v-bcb4fa2a]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap);width:100%}.fil-w-slider-label[data-v-bcb4fa2a]{grid-column:1;font-size:11px;color:var(--fil-muted);font-family:inherit}.fil-w-slider-row[data-v-bcb4fa2a]{grid-column:2;display:flex;align-items:center;gap:6px;min-width:0}.fil-w-slider-range[data-v-bcb4fa2a]{flex:1 1 auto;min-width:0;max-width:220px;accent-color:var(--fil-accent);cursor:pointer}.fil-w-slider-range[data-v-bcb4fa2a]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-slider-row[data-v-bcb4fa2a] .fil-w-num-wrap{width:70px;flex:none}.fil-style-picker[data-v-572f1dc7]{display:flex;flex-direction:column;gap:10px}.fil-style-cats[data-v-572f1dc7]{display:flex;flex-wrap:wrap;gap:6px}.fil-style-cat[data-v-572f1dc7]{box-sizing:border-box;padding:5px 10px;border-radius:999px;border:1px solid var(--fil-border);background:var(--fil-surface-1);color:var(--fil-text);font-size:11px;cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-cat[data-v-572f1dc7]:hover{border-color:var(--fil-accent)}.fil-style-cat.active[data-v-572f1dc7]{background:var(--fil-accent);border-color:var(--fil-accent);color:var(--fil-accent-ink);font-weight:500}.fil-style-cat[data-v-572f1dc7]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-style-search-wrap[data-v-572f1dc7]{position:relative;width:100%}.fil-style-search[data-v-572f1dc7]{box-sizing:border-box;width:100%;padding:7px 28px 7px 10px;background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:6px;color:var(--fil-text);font-family:inherit;font-size:12px;outline:none}.fil-style-search[data-v-572f1dc7]:focus{border-color:var(--fil-accent)}.fil-style-search-clear[data-v-572f1dc7]{position:absolute;right:6px;top:50%;transform:translateY(-50%);width:18px;height:18px;border-radius:50%;border:none;background:var(--fil-surface-3);color:#bbb;font-size:13px;line-height:1;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .12s ease}.fil-style-search-clear[data-v-572f1dc7]:hover{background:#ff4b4b4d;color:var(--fil-danger)}.fil-style-grid[data-v-572f1dc7]{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:8px;max-height:50vh;overflow-y:auto;padding-right:2px}.fil-style-tile[data-v-572f1dc7]{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px 6px;border-radius:8px;border:1px solid var(--fil-border);background:var(--fil-panel-alt);color:var(--fil-text);cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .08s,border-color .08s,color .08s}.fil-style-tile[data-v-572f1dc7]:hover{border-color:var(--fil-accent);color:var(--fil-text)}.fil-style-tile.active[data-v-572f1dc7]{border-color:var(--fil-accent);background:color-mix(in srgb,var(--fil-accent) 14%,transparent)}.fil-style-tile[data-v-572f1dc7]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.fil-style-tile-preview[data-v-572f1dc7]{width:100%;aspect-ratio:1;border-radius:6px;background:var(--fil-surface-1);display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:22px}.fil-style-tile-img[data-v-572f1dc7]{width:100%;height:100%;object-fit:cover}.fil-style-tile-label[data-v-572f1dc7]{font-size:10px;text-align:center;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.fil-style-empty[data-v-572f1dc7]{grid-column:1 / -1;padding:20px;text-align:center;color:var(--fil-muted);font-size:12px}.fil-style-selected-bar[data-v-572f1dc7]{display:flex;flex-wrap:wrap;gap:6px;padding:6px;border-radius:6px;background:color-mix(in srgb,var(--fil-accent) 6%,transparent);border:1px solid color-mix(in srgb,var(--fil-accent) 20%,transparent)}.fil-style-chip[data-v-572f1dc7]{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:999px;background:var(--fil-accent);color:var(--fil-accent-ink);font-size:11px;font-weight:600}.fil-chip-text[data-v-572f1dc7]{max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fil-chip-remove[data-v-572f1dc7]{display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:50%;border:none;background:#0003;color:var(--fil-accent-ink);font-size:12px;line-height:1;cursor:pointer;padding:0;transition:background .08s,color .08s}.fil-chip-remove[data-v-572f1dc7]:hover{background:var(--fil-danger);color:#fff}.fil-w-textarea-row[data-v-f3b21190]{display:flex;flex-direction:column;gap:3px;min-width:0}.fil-w-textarea-label[data-v-f3b21190]{font-size:11px;color:var(--fil-muted);font-family:inherit}.fil-w-textarea[data-v-f3b21190]{box-sizing:border-box;width:100%;min-height:40px;padding:8px 10px;background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:var(--fil-field-radius);color:var(--fil-text);font-family:inherit;font-size:12px;resize:vertical;outline:none;transition:border-color .08s}.fil-w-textarea[data-v-f3b21190]::placeholder{color:color-mix(in srgb,var(--fil-text) 30%,transparent);font-style:italic}.fil-w-textarea[data-v-f3b21190]:focus{border-color:var(--fil-accent)}.fil-w-textarea[data-v-f3b21190]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-textarea[data-v-f3b21190]:disabled{opacity:.5}.fil-w-textarea.is-linked[data-v-f3b21190]{border-style:dashed;border-color:var(--fil-accent);color:var(--fil-muted);cursor:not-allowed}.fil-w-text[data-v-d656e366]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap);width:100%}.fil-w-text-label[data-v-d656e366]{grid-column:1;font-size:11px;color:var(--fil-muted);font-family:inherit}.fil-w-text-input[data-v-d656e366]{grid-column:2;width:100%;box-sizing:border-box;height:var(--fil-control-h);background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:6px;padding:5px 8px;color:var(--fil-text);font-family:inherit;font-size:12px;outline:none;transition:border-color .08s}.fil-w-text-input[data-v-d656e366]::placeholder{color:color-mix(in srgb,var(--fil-text) 30%,transparent);font-style:italic}.fil-w-text-input[data-v-d656e366]:focus{border-color:var(--fil-accent)}.fil-w-text-input[data-v-d656e366]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px}.fil-w-text-input[data-v-d656e366]:disabled{opacity:.5}.fil-toast-stack[data-v-dc02ac3b]{position:fixed;right:20px;bottom:20px;z-index:100001;display:flex;flex-direction:column;gap:8px;pointer-events:none;max-width:min(360px,90vw)}.fil-toast[data-v-dc02ac3b]{pointer-events:auto;display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:8px;background:var(--fil-panel);color:var(--fil-text);border:1px solid var(--fil-panel-alt);border-left:3px solid var(--toast-color, var(--fil-muted));box-shadow:0 6px 22px #0000006b;font:12.5px/1.45 system-ui,sans-serif;animation:fil-toast-in-dc02ac3b .18s cubic-bezier(.2,.7,.3,1)}@keyframes fil-toast-in-dc02ac3b{0%{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}.fil-toast-dot[data-v-dc02ac3b]{flex:none;width:8px;height:8px;margin-top:4px;border-radius:50%;background:var(--toast-color, var(--fil-muted))}.fil-toast-text[data-v-dc02ac3b]{flex:1;min-width:0;align-self:center}.fil-toast-action[data-v-dc02ac3b]{flex:none;cursor:pointer;padding:4px 8px;border-radius:4px;background:var(--fil-surface-2);color:inherit;border:none;font:inherit;transition:background .12s}.fil-toast-action[data-v-dc02ac3b]:hover{background:var(--fil-surface-3)}.fil-toast-close[data-v-dc02ac3b]{flex:none;align-self:flex-start;cursor:pointer;width:18px;height:18px;padding:0;border:none;background:none;color:var(--fil-muted);opacity:.6;transition:opacity .12s;font-size:16px;line-height:18px}.fil-toast-close[data-v-dc02ac3b]:hover{opacity:1}.fil-w-toggle[data-v-c41e86e9]{display:grid;grid-template-columns:minmax(auto,max-content) minmax(60px,1fr);align-items:center;gap:var(--fil-node-gap);width:100%}.fil-w-toggle-label[data-v-c41e86e9]{grid-column:1;font-size:11px;color:var(--fil-muted);font-family:inherit}.fil-w-toggle.bare[data-v-c41e86e9]{display:flex;width:auto;gap:4px}.fil-w-toggle.bare .fil-w-toggle-label[data-v-c41e86e9]{font-size:10px;white-space:nowrap}.fil-w-switch[data-v-c41e86e9]{grid-column:2;justify-self:start;width:36px;height:20px;padding:2px;box-sizing:border-box;border:none;border-radius:10px;background:var(--fil-surface-3);cursor:pointer;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;transition:background .12s}.fil-w-switch.on[data-v-c41e86e9]{background:var(--fil-accent)}.fil-w-switch[data-v-c41e86e9]:disabled{opacity:.5;cursor:default}.fil-w-switch[data-v-c41e86e9]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:2px}.fil-w-switch-thumb[data-v-c41e86e9]{display:block;width:16px;height:16px;border-radius:50%;background:#fff;transition:transform .12s}.fil-w-switch.on .fil-w-switch-thumb[data-v-c41e86e9]{transform:translate(16px)}div.fil-seed-root[data-v-dca90760]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:row;align-items:center;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text);font-family:ui-sans-serif,system-ui,sans-serif;background:transparent;border:none;border-radius:0;box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none}.fil-seed-display[data-v-dca90760]{flex:1;min-width:0;box-sizing:border-box;height:var(--fil-control-h-lg);background:var(--fil-glass-bg);border:1px solid var(--fil-glass-border);border-radius:var(--fil-field-radius);padding:6px 8px;color:var(--fil-text);font-family:ui-monospace,Cascadia Code,Consolas,monospace;font-size:19px;text-align:center;outline:none;transition:border-color .08s}.fil-seed-display[data-v-dca90760]:focus{border-color:var(--fil-accent)}.fil-seed-display[readonly][data-v-dca90760]{color:var(--fil-muted);font-style:italic}.fil-seed-actions[data-v-dca90760]{display:flex;gap:5px;flex-shrink:0}.fil-seed-actions[data-v-dca90760] .fil-w-btn{padding:0;width:var(--fil-control-h-lg);height:var(--fil-control-h-lg);font-size:16px}.picker-container[data-v-41a05b02]{display:flex;flex-direction:column;gap:12px;color:var(--fil-text)}.provider-tabs[data-v-41a05b02]{display:flex;gap:6px;overflow-x:auto;padding-bottom:6px;scrollbar-width:thin}.tab-btn[data-v-41a05b02]{display:flex;align-items:center;gap:6px;padding:7px 10px;border-radius:8px;border:1px solid var(--fil-pill-border);background:var(--fil-pill-bg);color:var(--fil-muted);font-size:12px;cursor:pointer;white-space:nowrap;flex-shrink:0;transition:all .15s ease}.tab-btn[data-v-41a05b02]:hover{background:var(--fil-surface-2);color:var(--fil-text)}.tab-btn.active[data-v-41a05b02]{background:var(--fil-panel-alt);border-color:var(--fil-accent);color:var(--fil-accent);font-weight:600}.tab-badge[data-v-41a05b02]{font-size:10px;background:var(--fil-pill-bg);padding:1px 5px;border-radius:99px}.provider-status-bar[data-v-41a05b02]{display:flex;justify-content:space-between;align-items:center;background:#0003;padding:8px 12px;border-radius:6px;font-size:12px}.status-info[data-v-41a05b02]{display:flex;align-items:center;gap:8px}.provider-name[data-v-41a05b02]{font-weight:600}.status-badge[data-v-41a05b02]{font-size:11px;padding:2px 6px;border-radius:4px}.status-badge.online[data-v-41a05b02]{color:var(--fil-ok)}.status-badge.loading[data-v-41a05b02]{color:var(--fil-accent)}.status-badge.error[data-v-41a05b02]{color:var(--fil-danger)}.age-label[data-v-41a05b02]{font-size:10px;color:var(--fil-muted)}.filter-controls[data-v-41a05b02]{display:flex;flex-direction:column;gap:8px}.search-input-wrap[data-v-41a05b02]{position:relative;display:flex;align-items:center}.search-icon[data-v-41a05b02]{position:absolute;left:10px;color:var(--fil-muted)}.search-input[data-v-41a05b02]{width:100%;box-sizing:border-box;height:var(--fil-control-h);padding:6px 30px;background:var(--fil-panel-alt);border:1px solid var(--fil-border);border-radius:var(--fil-field-radius);color:var(--fil-text);font-size:12px;outline:none}.search-input[data-v-41a05b02]:focus{border-color:var(--fil-accent)}.clear-search[data-v-41a05b02]{position:absolute;right:10px;background:none;border:none;color:var(--fil-muted);cursor:pointer}.filter-segments[data-v-41a05b02]{display:flex;gap:8px;min-width:0}.filter-segments[data-v-41a05b02]>*{flex:1;min-width:0}.models-list-wrapper[data-v-41a05b02]{height:320px;overflow-y:auto;background:var(--fil-inset);border-radius:8px;border:1px solid var(--fil-border);padding:8px}.empty-state[data-v-41a05b02]{display:flex;align-items:center;justify-content:center;height:100%;color:var(--fil-muted);font-size:12px}.models-container.list[data-v-41a05b02]{display:flex;flex-direction:column;gap:6px}.models-container.grid[data-v-41a05b02]{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:8px}.models-container.grid .model-card[data-v-41a05b02]{flex-direction:column;align-items:flex-start;gap:8px;padding:10px 12px}.models-container.grid .model-main[data-v-41a05b02]{width:100%}.models-container.grid .model-tags[data-v-41a05b02]{width:100%;justify-content:flex-start}.model-card[data-v-41a05b02]{display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:var(--fil-surface-1);border:1px solid var(--fil-border);border-radius:6px;cursor:pointer;transition:all .12s ease;width:100%;box-sizing:border-box;text-align:left;font:inherit;color:inherit;-moz-appearance:none;appearance:none;-webkit-appearance:none}.model-card[data-v-41a05b02]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:-2px}.model-card[data-v-41a05b02]:hover{background:var(--fil-surface-2);border-color:var(--fil-border)}.model-card.selected[data-v-41a05b02]{background:#f08a4526;border-color:var(--fil-accent)}.model-main[data-v-41a05b02]{display:flex;align-items:center;gap:8px;min-width:0}.type-icon[data-v-41a05b02]{font-size:14px}.model-name[data-v-41a05b02]{font-size:12px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.model-tags[data-v-41a05b02]{display:flex;gap:4px;flex-shrink:0}.tag[data-v-41a05b02]{font-size:9px;padding:2px 6px;border-radius:4px;font-weight:600;text-transform:uppercase}.tag.vision[data-v-41a05b02]{background:#f08a4526;color:var(--fil-accent)}.tag.text[data-v-41a05b02],.tag.local[data-v-41a05b02],.tag.free[data-v-41a05b02],.tag.paid[data-v-41a05b02]{background:var(--fil-pill-bg);color:var(--fil-muted)}.picker-footer[data-v-41a05b02]{display:flex;justify-content:space-between;align-items:center;padding-top:8px}.selection-summary[data-v-41a05b02]{font-size:12px}.selection-summary .muted[data-v-41a05b02]{color:var(--fil-muted)}.footer-actions[data-v-41a05b02]{display:flex;gap:8px}.fil-provider-root[data-v-c7c57ca2]{width:100%;box-sizing:border-box;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text);font-family:ui-sans-serif,system-ui,sans-serif;min-width:0}.picker-trigger-btn[data-v-c7c57ca2]{display:flex;flex-direction:column;gap:6px;width:100%;box-sizing:border-box;padding:8px 10px;background:var(--fil-panel-alt);border:1px solid var(--fil-pill-border);border-radius:var(--fil-field-radius);color:var(--fil-text);cursor:pointer;text-align:left;transition:border-color .15s ease,background .15s ease;outline:none}.picker-trigger-btn[data-v-c7c57ca2]:hover{border-color:var(--fil-accent);background:var(--fil-pill-bg)}.picker-trigger-btn[data-v-c7c57ca2]:focus-visible{outline:2px solid var(--fil-accent);outline-offset:1px;border-color:var(--fil-accent)}.trigger-header[data-v-c7c57ca2]{display:flex;justify-content:space-between;align-items:center;width:100%}.provider-badge[data-v-c7c57ca2]{display:flex;align-items:center;gap:6px;font-weight:600;font-size:13px;color:var(--fil-accent)}.open-icon[data-v-c7c57ca2]{font-size:11px;background:var(--fil-pill-bg);padding:2px 6px;border-radius:4px;color:var(--fil-text)}.trigger-model[data-v-c7c57ca2]{display:flex;align-items:center;gap:6px;font-size:12px;min-width:0}.model-label[data-v-c7c57ca2]{color:var(--fil-muted);flex-shrink:0}.model-name[data-v-c7c57ca2]{font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}.fil-scanner-root[data-v-a2b7305d]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text);font-family:ui-sans-serif,system-ui,sans-serif;width:100%;box-sizing:border-box;min-width:0;height:100%}.fil-section-block[data-v-a2b7305d]{display:flex;flex-direction:column;gap:5px;min-width:0}.fil-section-block.is-growable[data-v-a2b7305d]{flex:1 1 auto;min-height:0}.fil-w-row[data-v-a2b7305d]{display:flex;flex-direction:column;gap:3px;min-width:0}.fil-w-row.is-growable[data-v-a2b7305d]{flex:1 1 auto;min-height:0}.fil-w-row[data-v-a2b7305d] .fil-w-textarea{min-height:48px}.fil-w-row.is-growable[data-v-a2b7305d] .fil-w-textarea{flex:1 1 auto;height:auto}.fil-single-style-block[data-v-a2b7305d]{margin-top:2px}.fil-unified-style-modal[data-v-a2b7305d]{display:flex;flex-direction:column;gap:12px;padding:4px 0}.fil-style-tab-bar[data-v-a2b7305d]{display:flex;gap:6px;background:#0000004d;padding:4px;border-radius:8px;border:1px solid var(--fil-border)}.fil-style-tab-btn[data-v-a2b7305d]{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;height:var(--fil-control-h-lg);border-radius:6px;border:1px solid transparent;background:transparent;color:var(--fil-muted);font-size:12px;font-weight:600;cursor:pointer;transition:all .12s ease}.fil-style-tab-btn[data-v-a2b7305d]:hover{color:var(--fil-text);background:var(--fil-surface-2)}.fil-style-tab-btn.active[data-v-a2b7305d]{background:var(--fil-accent);color:var(--fil-accent-ink);border-color:var(--fil-accent);font-weight:700;box-shadow:0 0 10px color-mix(in srgb,var(--fil-accent) 30%,transparent)}.fil-tab-badge[data-v-a2b7305d]{font-size:10px;color:#0f8}.fil-style-tab-btn.active .fil-tab-badge[data-v-a2b7305d]{color:var(--fil-accent-ink)}.fil-style-picker-body[data-v-a2b7305d]{min-height:320px;max-height:480px;overflow-y:auto}.fil-style-modal-footer[data-v-a2b7305d]{display:flex;justify-content:flex-end;border-top:1px solid var(--fil-border);padding-top:8px}.fil-clear-styles-btn[data-v-a2b7305d]{padding:6px 12px;border-radius:6px;border:1px solid rgba(255,75,75,.3);background:#ff4b4b1a;color:var(--fil-danger);font-size:12px;font-weight:600;cursor:pointer;transition:all .12s ease}.fil-clear-styles-btn[data-v-a2b7305d]:hover{background:#ff4b4b40;border-color:var(--fil-danger);color:#fff}.fil-style-picker-btn[data-v-a2b7305d]{flex:2;box-sizing:border-box;min-height:36px;border-radius:var(--fil-pill-radius);background:linear-gradient(135deg,#00f0ff14,#ff00ff14);border:1px solid rgba(0,240,255,.2);color:var(--fil-text);font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s cubic-bezier(.4,0,.2,1);box-shadow:0 0 10px #00f0ff0d}.fil-style-picker-btn[data-v-a2b7305d]:hover{background:linear-gradient(135deg,#00f0ff26,#ff00ff26);border-color:#00f0ff80;box-shadow:0 0 15px #00f0ff26;color:#fff}.fil-style-picker-btn.has-styles[data-v-a2b7305d]{background:linear-gradient(135deg,#00f0ff33,#f0f3);border:1px solid rgba(0,240,255,.6);color:#fff;box-shadow:0 0 20px #00f0ff40,inset 0 0 8px #f0f3;text-shadow:0 0 8px rgba(0,240,255,.6);animation:pulse-neon-a2b7305d 2.5s infinite alternate}@keyframes pulse-neon-a2b7305d{0%{box-shadow:0 0 15px #00f0ff33,inset 0 0 5px #ff00ff26}to{box-shadow:0 0 25px #00f0ff73,inset 0 0 15px #ff00ff59;border-color:#00f0ffe6}}.fil-cleaner-root[data-v-aca28d85],.fil-up-root[data-v-d0c34d54]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text);font-family:ui-sans-serif,system-ui,sans-serif}.fil-up-row[data-v-d0c34d54]{display:grid;grid-template-columns:minmax(auto,max-content) 64px minmax(auto,max-content) 64px;align-items:center;gap:var(--fil-node-gap)}.fil-up-row-overlap[data-v-d0c34d54]{grid-template-columns:minmax(auto,max-content) 64px minmax(auto,max-content) 64px auto}.fil-w-label[data-v-d0c34d54]{font-size:11px;color:var(--fil-muted)}.fil-hrf-root[data-v-1976136c],.fil-style-mixer-root[data-v-87c8a7d7],.fil-color-wizard-root[data-v-f30ae2c2]{width:100%;box-sizing:border-box;min-width:0;display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text);font-family:ui-sans-serif,system-ui,sans-serif}.fil-cw-presets-block[data-v-f30ae2c2]{display:flex;flex-direction:column;gap:6px;padding:8px 10px;background:#0000004d;border:1px solid var(--fil-border);border-radius:8px}.fil-cw-presets-title[data-v-f30ae2c2]{font-size:11px;font-weight:700;color:var(--fil-accent);text-transform:uppercase;letter-spacing:.5px}.fil-cw-presets-grid[data-v-f30ae2c2]{display:grid;grid-template-columns:1fr 1fr;gap:6px}.fil-cw-preset-btn[data-v-f30ae2c2]{height:28px;border-radius:6px;border:1px solid var(--fil-border);background:var(--fil-surface-1);color:var(--fil-text);font-size:11px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .12s ease}.fil-cw-preset-btn[data-v-f30ae2c2]:hover{background:var(--fil-surface-3);border-color:var(--fil-accent)}.fil-cw-preset-btn.warm[data-v-f30ae2c2]:hover{border-color:#fa0;color:#fa0}.fil-cw-preset-btn.cool[data-v-f30ae2c2]:hover{border-color:#00f0ff;color:#00f0ff}.fil-cw-preset-btn.skin[data-v-f30ae2c2]:hover{border-color:#f7a;color:#f7a}.fil-cw-preset-btn.contrast[data-v-f30ae2c2]:hover{border-color:#fa0;color:#fa0}.fil-cw-slider-group[data-v-f30ae2c2]{display:flex;flex-direction:column;gap:6px}.fil-switch-panel[data-v-06454708]{display:flex;align-items:center;justify-content:center;padding:6px 10px;width:100%;box-sizing:border-box}.fil-switch-btn[data-v-06454708]{display:inline-flex;align-items:center;justify-content:center;gap:8px;width:100%;height:36px;border-radius:8px;font-family:inherit;font-size:13px;font-weight:700;letter-spacing:.05em;cursor:pointer;transition:all .2s cubic-bezier(.4,0,.2,1);outline:none;-webkit-user-select:none;user-select:none;box-shadow:0 2px 8px #0000004d}.fil-switch-btn.is-on[data-v-06454708]{background:linear-gradient(135deg,#10b98140,#38bdf840);border:1px solid rgba(56,189,248,.7);color:#38bdf8;box-shadow:0 0 12px #38bdf84d,inset 0 0 6px #38bdf833}.fil-switch-btn.is-on[data-v-06454708]:hover{background:linear-gradient(135deg,#10b98166,#38bdf866);border-color:#38bdf8;box-shadow:0 0 18px #38bdf880,inset 0 0 10px #38bdf84d}.fil-switch-btn.is-off[data-v-06454708]{background:linear-gradient(135deg,#ef444426,#1e293b99);border:1px solid rgba(239,68,68,.4);color:#f87171;box-shadow:0 0 6px #ef444426}.fil-switch-btn.is-off[data-v-06454708]:hover{background:linear-gradient(135deg,#ef44444d,#1e293bcc);border-color:#f87171;box-shadow:0 0 12px #ef44444d}.fil-switch-icon[data-v-06454708]{font-size:14px}.fil-switch-text[data-v-06454708]{text-transform:uppercase}.fil-ds-root[data-v-a83f0384]{display:flex;flex-direction:column;gap:var(--fil-node-gap);padding:var(--fil-node-pad);color:var(--fil-text);font-family:ui-sans-serif,system-ui,sans-serif;width:100%;box-sizing:border-box;min-width:0}\n";document.head.appendChild(s);}catch(e){}})();
import { app as Fs } from "/scripts/app.js";
/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Jo(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Se = {}, xn = [], kt = () => {
}, Ms = () => !1, jl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), zl = (e) => e.startsWith("onUpdate:"), Te = Object.assign, Qo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, pr = Object.prototype.hasOwnProperty, Ae = (e, t) => pr.call(e, t), re = Array.isArray, Cn = (e) => ul(e) === "[object Map]", Kl = (e) => ul(e) === "[object Set]", wi = (e) => ul(e) === "[object Date]", he = (e) => typeof e == "function", Ie = (e) => typeof e == "string", at = (e) => typeof e == "symbol", ke = (e) => e !== null && typeof e == "object", Ls = (e) => (ke(e) || he(e)) && he(e.then) && he(e.catch), Is = Object.prototype.toString, ul = (e) => Is.call(e), mr = (e) => ul(e).slice(8, -1), Ds = (e) => ul(e) === "[object Object]", ql = (e) => Ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Kn = /* @__PURE__ */ Jo(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Xl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, hr = /-\w/g, Ke = Xl(
  (e) => e.replace(hr, (t) => t.slice(1).toUpperCase())
), gr = /\B([A-Z])/g, Ut = Xl(
  (e) => e.replace(gr, "-$1").toLowerCase()
), Yl = Xl((e) => e.charAt(0).toUpperCase() + e.slice(1)), co = Xl(
  (e) => e ? `on${Yl(e)}` : ""
), He = (e, t) => !Object.is(e, t), xl = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Ps = (e, t, n, l = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: l,
    value: n
  });
}, Jl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, _r = (e) => {
  const t = Ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Si;
const Ql = () => Si || (Si = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ct(e) {
  if (re(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const l = e[n], o = Ie(l) ? wr(l) : ct(l);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (Ie(e) || ke(e))
    return e;
}
const br = /;(?![^(]*\))/g, vr = /:([^]+)/, yr = /\/\*[^]*?\*\//g;
function wr(e) {
  const t = {};
  return e.replace(yr, "").split(br).forEach((n) => {
    if (n) {
      const l = n.split(vr);
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
const Sr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xr = /* @__PURE__ */ Jo(Sr);
function Ns(e) {
  return !!e || e === "";
}
function Cr(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let l = 0; n && l < e.length; l++)
    n = cl(e[l], t[l]);
  return n;
}
function cl(e, t) {
  if (e === t) return !0;
  let n = wi(e), l = wi(t);
  if (n || l)
    return n && l ? e.getTime() === t.getTime() : !1;
  if (n = at(e), l = at(t), n || l)
    return e === t;
  if (n = re(e), l = re(t), n || l)
    return n && l ? Cr(e, t) : !1;
  if (n = ke(e), l = ke(t), n || l) {
    if (!n || !l)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), r = t.hasOwnProperty(s);
      if (a && !r || !a && r || !cl(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ar(e, t) {
  return e.findIndex((n) => cl(n, t));
}
const Rs = (e) => !!(e && e.__v_isRef === !0), Y = (e) => Ie(e) ? e : e == null ? "" : re(e) || ke(e) && (e.toString === Is || !he(e.toString)) ? Rs(e) ? Y(e.value) : JSON.stringify(e, Ts, 2) : String(e), Ts = (e, t) => Rs(t) ? Ts(e, t.value) : Cn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [l, o], i) => (n[fo(l, i) + " =>"] = o, n),
    {}
  )
} : Kl(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => fo(n))
} : at(t) ? fo(t) : ke(t) && !re(t) && !Ds(t) ? String(t) : t, fo = (e, t = "") => {
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
class Es {
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
function Vs(e) {
  return new Es(e);
}
function Os() {
  return Ee;
}
function kr(e, t = !1) {
  Ee && Ee.cleanups.push(e);
}
let Le;
const po = /* @__PURE__ */ new WeakSet();
class $s {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ee && (Ee.active ? Ee.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, po.has(this) && (po.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Hs(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, xi(this), Us(this);
    const t = Le, n = pt;
    Le = this, pt = !0;
    try {
      return this.fn();
    } finally {
      Gs(this), Le = t, pt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ti(t);
      this.deps = this.depsTail = void 0, xi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? po.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Mo(this) && this.run();
  }
  get dirty() {
    return Mo(this);
  }
}
let Bs = 0, qn, Xn;
function Hs(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Xn, Xn = e;
    return;
  }
  e.next = qn, qn = e;
}
function Zo() {
  Bs++;
}
function ei() {
  if (--Bs > 0)
    return;
  if (Xn) {
    let t = Xn;
    for (Xn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; qn; ) {
    let t = qn;
    for (qn = void 0; t; ) {
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
function Us(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Gs(e) {
  let t, n = e.depsTail, l = n;
  for (; l; ) {
    const o = l.prevDep;
    l.version === -1 ? (l === n && (n = o), ti(l), Fr(l)) : t = l, l.dep.activeLink = l.prevActiveLink, l.prevActiveLink = void 0, l = o;
  }
  e.deps = t, e.depsTail = n;
}
function Mo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ws(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ws(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === nl) || (e.globalVersion = nl, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Mo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Le, l = pt;
  Le = e, pt = !0;
  try {
    Us(e);
    const o = e.fn(e._value);
    (t.version === 0 || He(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Le = n, pt = l, Gs(e), e.flags &= -3;
  }
}
function ti(e, t = !1) {
  const { dep: n, prevSub: l, nextSub: o } = e;
  if (l && (l.nextSub = o, e.prevSub = void 0), o && (o.prevSub = l, e.nextSub = void 0), n.subs === e && (n.subs = l, !l && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      ti(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Fr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let pt = !0;
const js = [];
function Vt() {
  js.push(pt), pt = !1;
}
function Ot() {
  const e = js.pop();
  pt = e === void 0 ? !0 : e;
}
function xi(e) {
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
let nl = 0;
class Mr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Zl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Le || !pt || Le === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Le)
      n = this.activeLink = new Mr(Le, this), Le.deps ? (n.prevDep = Le.depsTail, Le.depsTail.nextDep = n, Le.depsTail = n) : Le.deps = Le.depsTail = n, zs(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const l = n.nextDep;
      l.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = l), n.prevDep = Le.depsTail, n.nextDep = void 0, Le.depsTail.nextDep = n, Le.depsTail = n, Le.deps === n && (Le.deps = l);
    }
    return n;
  }
  trigger(t) {
    this.version++, nl++, this.notify(t);
  }
  notify(t) {
    Zo();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ei();
    }
  }
}
function zs(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let l = t.deps; l; l = l.nextDep)
        zs(l);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ml = /* @__PURE__ */ new WeakMap(), dn = /* @__PURE__ */ Symbol(
  ""
), Lo = /* @__PURE__ */ Symbol(
  ""
), ll = /* @__PURE__ */ Symbol(
  ""
);
function We(e, t, n) {
  if (pt && Le) {
    let l = Ml.get(e);
    l || Ml.set(e, l = /* @__PURE__ */ new Map());
    let o = l.get(n);
    o || (l.set(n, o = new Zl()), o.map = l, o.key = n), o.track();
  }
}
function Nt(e, t, n, l, o, i) {
  const s = Ml.get(e);
  if (!s) {
    nl++;
    return;
  }
  const a = (r) => {
    r && r.trigger();
  };
  if (Zo(), t === "clear")
    s.forEach(a);
  else {
    const r = re(e), d = r && ql(n);
    if (r && n === "length") {
      const u = Number(l);
      s.forEach((f, p) => {
        (p === "length" || p === ll || !at(p) && p >= u) && a(f);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && a(s.get(n)), d && a(s.get(ll)), t) {
        case "add":
          r ? d && a(s.get("length")) : (a(s.get(dn)), Cn(e) && a(s.get(Lo)));
          break;
        case "delete":
          r || (a(s.get(dn)), Cn(e) && a(s.get(Lo)));
          break;
        case "set":
          Cn(e) && a(s.get(dn));
          break;
      }
  }
  ei();
}
function Lr(e, t) {
  const n = Ml.get(e);
  return n && n.get(t);
}
function gn(e) {
  const t = /* @__PURE__ */ ye(e);
  return t === e ? t : (We(t, "iterate", ll), /* @__PURE__ */ it(e) ? t : t.map(mt));
}
function eo(e) {
  return We(e = /* @__PURE__ */ ye(e), "iterate", ll), e;
}
function Ct(e, t) {
  return /* @__PURE__ */ $t(e) ? Dn(/* @__PURE__ */ Tt(e) ? mt(t) : t) : mt(t);
}
const Ir = {
  __proto__: null,
  [Symbol.iterator]() {
    return mo(this, Symbol.iterator, (e) => Ct(this, e));
  },
  concat(...e) {
    return gn(this).concat(
      ...e.map((t) => re(t) ? gn(t) : t)
    );
  },
  entries() {
    return mo(this, "entries", (e) => (e[1] = Ct(this, e[1]), e));
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
    return ho(this, "includes", e);
  },
  indexOf(...e) {
    return ho(this, "indexOf", e);
  },
  join(e) {
    return gn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ho(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ft(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Vn(this, "pop");
  },
  push(...e) {
    return Vn(this, "push", e);
  },
  reduce(e, ...t) {
    return Ci(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ci(this, "reduceRight", e, t);
  },
  shift() {
    return Vn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ft(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Vn(this, "splice", e);
  },
  toReversed() {
    return gn(this).toReversed();
  },
  toSorted(e) {
    return gn(this).toSorted(e);
  },
  toSpliced(...e) {
    return gn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Vn(this, "unshift", e);
  },
  values() {
    return mo(this, "values", (e) => Ct(this, e));
  }
};
function mo(e, t, n) {
  const l = eo(e), o = l[t]();
  return l !== e && !/* @__PURE__ */ it(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = n(i.value)), i;
  }), o;
}
const Dr = Array.prototype;
function Ft(e, t, n, l, o, i) {
  const s = eo(e), a = s !== e && !/* @__PURE__ */ it(e), r = s[t];
  if (r !== Dr[t]) {
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
function Ci(e, t, n, l) {
  const o = eo(e), i = o !== e && !/* @__PURE__ */ it(e);
  let s = n, a = !1;
  o !== e && (i ? (a = l.length === 0, s = function(d, u, f) {
    return a && (a = !1, d = Ct(e, d)), n.call(this, d, Ct(e, u), f, e);
  }) : n.length > 3 && (s = function(d, u, f) {
    return n.call(this, d, u, f, e);
  }));
  const r = o[t](s, ...l);
  return a ? Ct(e, r) : r;
}
function ho(e, t, n) {
  const l = /* @__PURE__ */ ye(e);
  We(l, "iterate", ll);
  const o = l[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ to(n[0]) ? (n[0] = /* @__PURE__ */ ye(n[0]), l[t](...n)) : o;
}
function Vn(e, t, n = []) {
  Vt(), Zo();
  const l = (/* @__PURE__ */ ye(e))[t].apply(e, n);
  return ei(), Ot(), l;
}
const Pr = /* @__PURE__ */ Jo("__proto__,__v_isRef,__isVue"), Ks = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(at)
);
function Nr(e) {
  at(e) || (e = String(e));
  const t = /* @__PURE__ */ ye(this);
  return We(t, "has", e), t.hasOwnProperty(e);
}
class qs {
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
      return l === (o ? i ? Gr : Qs : i ? Js : Ys).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(l) ? t : void 0;
    const s = re(t);
    if (!o) {
      let r;
      if (s && (r = Ir[n]))
        return r;
      if (n === "hasOwnProperty")
        return Nr;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ se(t) ? t : l
    );
    if ((at(n) ? Ks.has(n) : Pr(n)) || (o || We(t, "get", n), i))
      return a;
    if (/* @__PURE__ */ se(a)) {
      const r = s && ql(n) ? a : a.value;
      return o && ke(r) ? /* @__PURE__ */ Ll(r) : r;
    }
    return ke(a) ? o ? /* @__PURE__ */ Ll(a) : /* @__PURE__ */ Gt(a) : a;
  }
}
class Xs extends qs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, l, o) {
    let i = t[n];
    const s = re(t) && ql(n);
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
    return (!at(n) || !Ks.has(n)) && We(t, "has", n), l;
  }
  ownKeys(t) {
    return We(
      t,
      "iterate",
      re(t) ? "length" : dn
    ), Reflect.ownKeys(t);
  }
}
class Rr extends qs {
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
const Tr = /* @__PURE__ */ new Xs(), Er = /* @__PURE__ */ new Rr(), Vr = /* @__PURE__ */ new Xs(!0);
const Io = (e) => e, hl = (e) => Reflect.getPrototypeOf(e);
function Or(e, t, n) {
  return function(...l) {
    const o = this.__v_raw, i = /* @__PURE__ */ ye(o), s = Cn(i), a = e === "entries" || e === Symbol.iterator && s, r = e === "keys" && s, d = o[e](...l), u = n ? Io : t ? Dn : mt;
    return !t && We(
      i,
      "iterate",
      r ? Lo : dn
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
function gl(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function $r(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, s = /* @__PURE__ */ ye(i), a = /* @__PURE__ */ ye(o);
      e || (He(o, a) && We(s, "get", o), We(s, "get", a));
      const { has: r } = hl(s), d = t ? Io : e ? Dn : mt;
      if (r.call(s, o))
        return d(i.get(o));
      if (r.call(s, a))
        return d(i.get(a));
      i !== s && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && We(/* @__PURE__ */ ye(o), "iterate", dn), o.size;
    },
    has(o) {
      const i = this.__v_raw, s = /* @__PURE__ */ ye(i), a = /* @__PURE__ */ ye(o);
      return e || (He(o, a) && We(s, "has", o), We(s, "has", a)), o === a ? i.has(o) : i.has(o) || i.has(a);
    },
    forEach(o, i) {
      const s = this, a = s.__v_raw, r = /* @__PURE__ */ ye(a), d = t ? Io : e ? Dn : mt;
      return !e && We(r, "iterate", dn), a.forEach((u, f) => o.call(i, d(u), d(f), s));
    }
  };
  return Te(
    n,
    e ? {
      add: gl("add"),
      set: gl("set"),
      delete: gl("delete"),
      clear: gl("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ ye(this), s = hl(i), a = /* @__PURE__ */ ye(o), r = !t && !/* @__PURE__ */ it(o) && !/* @__PURE__ */ $t(o) ? a : o;
        return s.has.call(i, r) || He(o, r) && s.has.call(i, o) || He(a, r) && s.has.call(i, a) || (i.add(r), Nt(i, "add", r, r)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ it(i) && !/* @__PURE__ */ $t(i) && (i = /* @__PURE__ */ ye(i));
        const s = /* @__PURE__ */ ye(this), { has: a, get: r } = hl(s);
        let d = a.call(s, o);
        d || (o = /* @__PURE__ */ ye(o), d = a.call(s, o));
        const u = r.call(s, o);
        return s.set(o, i), d ? He(i, u) && Nt(s, "set", o, i) : Nt(s, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ ye(this), { has: s, get: a } = hl(i);
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
    n[o] = Or(o, e, t);
  }), n;
}
function ni(e, t) {
  const n = $r(e, t);
  return (l, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? l : Reflect.get(
    Ae(n, o) && o in l ? n : l,
    o,
    i
  );
}
const Br = {
  get: /* @__PURE__ */ ni(!1, !1)
}, Hr = {
  get: /* @__PURE__ */ ni(!1, !0)
}, Ur = {
  get: /* @__PURE__ */ ni(!0, !1)
};
const Ys = /* @__PURE__ */ new WeakMap(), Js = /* @__PURE__ */ new WeakMap(), Qs = /* @__PURE__ */ new WeakMap(), Gr = /* @__PURE__ */ new WeakMap();
function Wr(e) {
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
  return /* @__PURE__ */ $t(e) ? e : li(
    e,
    !1,
    Tr,
    Br,
    Ys
  );
}
// @__NO_SIDE_EFFECTS__
function jr(e) {
  return li(
    e,
    !1,
    Vr,
    Hr,
    Js
  );
}
// @__NO_SIDE_EFFECTS__
function Ll(e) {
  return li(
    e,
    !0,
    Er,
    Ur,
    Qs
  );
}
function li(e, t, n, l, o) {
  if (!ke(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const s = Wr(mr(e));
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
function to(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ye(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ye(t) : e;
}
function oi(e) {
  return !Ae(e, "__v_skip") && Object.isExtensible(e) && Ps(e, "__v_skip", !0), e;
}
const mt = (e) => ke(e) ? /* @__PURE__ */ Gt(e) : e, Dn = (e) => ke(e) ? /* @__PURE__ */ Ll(e) : e;
// @__NO_SIDE_EFFECTS__
function se(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ce(e) {
  return zr(e, !1);
}
function zr(e, t) {
  return /* @__PURE__ */ se(e) ? e : new Kr(e, t);
}
class Kr {
  constructor(t, n) {
    this.dep = new Zl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ye(t), this._value = n ? t : mt(t), this.__v_isShallow = n;
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
const qr = {
  get: (e, t, n) => t === "__v_raw" ? e : c(Reflect.get(e, t, n)),
  set: (e, t, n, l) => {
    const o = e[t];
    return /* @__PURE__ */ se(o) && !/* @__PURE__ */ se(n) ? (o.value = n, !0) : Reflect.set(e, t, n, l);
  }
};
function Zs(e) {
  return /* @__PURE__ */ Tt(e) ? e : new Proxy(e, qr);
}
class Xr {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Zl(), { get: l, set: o } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = l, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Yr(e) {
  return new Xr(e);
}
// @__NO_SIDE_EFFECTS__
function Jr(e) {
  const t = re(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Zr(e, n);
  return t;
}
class Qr {
  constructor(t, n, l) {
    this._object = t, this._defaultValue = l, this.__v_isRef = !0, this._value = void 0, this._key = at(n) ? n : String(n), this._raw = /* @__PURE__ */ ye(t);
    let o = !0, i = t;
    if (!re(t) || at(this._key) || !ql(this._key))
      do
        o = !/* @__PURE__ */ to(i) || /* @__PURE__ */ it(i);
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
    return Lr(this._raw, this._key);
  }
}
function Zr(e, t, n) {
  return new Qr(e, t, n);
}
class eu {
  constructor(t, n, l) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Zl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = nl - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = l;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Le !== this)
      return Hs(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ws(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function tu(e, t, n = !1) {
  let l, o;
  return he(e) ? l = e : (l = e.get, o = e.set), new eu(l, o, n);
}
const _l = {}, Il = /* @__PURE__ */ new WeakMap();
let on;
function nu(e, t = !1, n = on) {
  if (n) {
    let l = Il.get(n);
    l || Il.set(n, l = []), l.push(e);
  }
}
function lu(e, t, n = Se) {
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
  const A = Os(), x = () => {
    u.stop(), A && A.active && Qo(A.effects, u);
  };
  if (i && t) {
    const v = t;
    t = (...y) => {
      const w = v(...y);
      return x(), w;
    };
  }
  let S = _ ? new Array(e.length).fill(_l) : _l;
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
              S === _l ? void 0 : _ && S[0] === _l ? [] : S,
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
  return a && a(k), u = new $s(f), u.scheduler = s ? () => s(k, !1) : k, g = (v) => nu(v, !1, u), p = u.onStop = () => {
    const v = Il.get(u);
    if (v) {
      if (r)
        r(v, 4);
      else
        for (const y of v) y();
      Il.delete(u);
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
  else if (Kl(e) || Cn(e))
    e.forEach((l) => {
      Rt(l, t, n);
    });
  else if (Ds(e)) {
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
function dl(e, t, n, l) {
  try {
    return l ? e(...l) : e();
  } catch (o) {
    fl(o, t, n);
  }
}
function ft(e, t, n, l) {
  if (he(e)) {
    const o = dl(e, t, n, l);
    return o && Ls(o) && o.catch((i) => {
      fl(i, t, n);
    }), o;
  }
  if (re(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(ft(e[i], t, n, l));
    return o;
  }
}
function fl(e, t, n, l = !0) {
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
      Vt(), dl(i, null, 10, [
        e,
        r,
        d
      ]), Ot();
      return;
    }
  }
  ou(e, n, o, l, s);
}
function ou(e, t, n, l = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Je = [];
let xt = -1;
const An = [];
let Xt = null, yn = 0;
const ea = /* @__PURE__ */ Promise.resolve();
let Dl = null;
function Nn(e) {
  const t = Dl || ea;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function iu(e) {
  let t = xt + 1, n = Je.length;
  for (; t < n; ) {
    const l = t + n >>> 1, o = Je[l], i = ol(o);
    i < e || i === e && o.flags & 2 ? t = l + 1 : n = l;
  }
  return t;
}
function ii(e) {
  if (!(e.flags & 1)) {
    const t = ol(e), n = Je[Je.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ol(n) ? Je.push(e) : Je.splice(iu(t), 0, e), e.flags |= 1, ta();
  }
}
function ta() {
  Dl || (Dl = ea.then(la));
}
function su(e) {
  re(e) ? An.push(...e) : Xt && e.id === -1 ? Xt.splice(yn + 1, 0, e) : e.flags & 1 || (An.push(e), e.flags |= 1), ta();
}
function Ai(e, t, n = xt + 1) {
  for (; n < Je.length; n++) {
    const l = Je[n];
    if (l && l.flags & 2) {
      if (e && l.id !== e.uid)
        continue;
      Je.splice(n, 1), n--, l.flags & 4 && (l.flags &= -2), l(), l.flags & 4 || (l.flags &= -2);
    }
  }
}
function na(e) {
  if (An.length) {
    const t = [...new Set(An)].sort(
      (n, l) => ol(n) - ol(l)
    );
    if (An.length = 0, Xt) {
      Xt.push(...t);
      return;
    }
    for (Xt = t, yn = 0; yn < Xt.length; yn++) {
      const n = Xt[yn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Xt = null, yn = 0;
  }
}
const ol = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function la(e) {
  try {
    for (xt = 0; xt < Je.length; xt++) {
      const t = Je[xt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), dl(
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
    xt = -1, Je.length = 0, na(), Dl = null, (Je.length || An.length) && la();
  }
}
let Ge = null, oa = null;
function Pl(e) {
  const t = Ge;
  return Ge = e, oa = e && e.type.__scopeId || null, t;
}
function Jt(e, t = Ge, n) {
  if (!t || e._n)
    return e;
  const l = (...o) => {
    l._d && El(-1);
    const i = Pl(t), s = Et.length;
    let a;
    try {
      a = e(...o);
    } finally {
      for (let r = Et.length; r > s; r--) di();
      Pl(i), l._d && El(1);
    }
    return a;
  };
  return l._n = !0, l._c = !0, l._d = !0, l;
}
function Qe(e, t) {
  if (Ge === null)
    return e;
  const n = ao(Ge), l = e.dirs || (e.dirs = []);
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
function au(e, t) {
  if (Ue) {
    let n = Ue.provides;
    const l = Ue.parent && Ue.parent.provides;
    l === n && (n = Ue.provides = Object.create(l)), n[e] = t;
  }
}
function Yn(e, t, n = !1) {
  const l = so();
  if (l || fn) {
    let o = fn ? fn._context.provides : l ? l.parent == null || l.ce ? l.vnode.appContext && l.vnode.appContext.provides : l.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && he(t) ? t.call(l && l.proxy) : t;
  }
}
function ru() {
  return !!(so() || fn);
}
const uu = /* @__PURE__ */ Symbol.for("v-scx"), cu = () => Yn(uu);
function du(e, t) {
  return si(
    e,
    null,
    { flush: "sync" }
  );
}
function $e(e, t, n) {
  return si(e, t, n);
}
function si(e, t, n = Se) {
  const { immediate: l, deep: o, flush: i, once: s } = n, a = Te({}, n), r = t && l || !t && i !== "post";
  let d;
  if (Pn) {
    if (i === "sync") {
      const g = cu();
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
    m ? g() : ii(g);
  }), a.augmentJob = (g) => {
    t && (g.flags |= 4), f && (g.flags |= 2, u && (g.id = u.uid, g.i = u));
  };
  const p = lu(e, t, a);
  return Pn && (d ? d.push(p) : r && p()), p;
}
function fu(e, t, n) {
  const l = this.proxy, o = Ie(e) ? e.includes(".") ? ia(l, e) : () => l[e] : e.bind(l, l);
  let i;
  he(t) ? i = t : (i = t.handler, n = t);
  const s = ml(this), a = si(o, i.bind(l), n);
  return s(), a;
}
function ia(e, t) {
  const n = t.split(".");
  return () => {
    let l = e;
    for (let o = 0; o < n.length && l; o++)
      l = l[n[o]];
    return l;
  };
}
const Kt = /* @__PURE__ */ new WeakMap(), sa = /* @__PURE__ */ Symbol("_vte"), aa = (e) => e.__isTeleport, sn = (e) => e && (e.disabled || e.disabled === ""), pu = (e) => e && (e.defer || e.defer === ""), ki = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Fi = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Do = (e, t) => {
  const n = e && e.to;
  return Ie(n) ? t ? t(n) : null : n;
}, mu = {
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
      const B = sn(T.props), O = T.target = Do(T.props, m), E = Po(O, T, _, g);
      O && (s !== "svg" && ki(O) ? s = "svg" : s !== "mathml" && Fi(O) && (s = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(O), B || (v(T, O, E), Un(T, !1)));
    }, w = (T) => {
      const B = () => {
        if (Kt.get(T) === B) {
          if (Kt.delete(T), sn(T.props)) {
            const O = x(T.el) || n;
            v(T, O, T.anchor), Un(T, !0);
          }
          y(T);
        }
      };
      Kt.set(T, B), Ye(B, i);
    };
    if (e == null) {
      const T = t.el = _(""), B = t.anchor = _("");
      if (g(T, n, l), g(B, n, l), pu(t.props) || i && i.pendingBranch) {
        w(t);
        return;
      }
      S && (v(t, n, B), Un(t, !0)), y();
    } else {
      t.el = e.el;
      const T = t.anchor = e.anchor, B = Kt.get(e);
      if (B) {
        B.flags |= 8, Kt.delete(e), w(t);
        return;
      }
      t.targetStart = e.targetStart;
      const O = t.target = e.target, E = t.targetAnchor = e.targetAnchor, K = sn(e.props), F = K ? n : O, V = K ? T : E;
      if (s === "svg" || ki(O) ? s = "svg" : (s === "mathml" || Fi(O)) && (s = "mathml"), k ? (p(
        e.dynamicChildren,
        k,
        F,
        o,
        i,
        s,
        a
      ), ci(e, t, !0)) : r || f(
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
        K ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : bl(
          t,
          n,
          T,
          d,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const H = Do(t.props, m);
        H && (t.target = H, bl(
          t,
          H,
          null,
          d,
          0
        ));
      } else K && bl(
        t,
        O,
        E,
        d,
        1
      );
      Un(t, S);
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
  move: bl,
  hydrate: hu
};
function bl(e, t, n, { o: { insert: l }, m: o }, i = 2) {
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
function hu(e, t, n, l, o, i, {
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
  const m = t.target = Do(
    t.props,
    r
  ), _ = sn(t.props);
  if (m) {
    const A = m._lpa || m.firstChild;
    t.shapeFlag & 16 && (_ ? (g(e, t), p(m, A), t.targetAnchor || Po(
      m,
      t,
      u,
      d,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      a(e) === m ? e : null
    )) : (t.anchor = s(e), p(m, A), t.targetAnchor || Po(m, t, u, d), f(
      A && s(A),
      t,
      m,
      n,
      l,
      o,
      i
    ))), Un(t, _);
  } else _ && t.shapeFlag & 16 && (g(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const ra = mu;
function Un(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let l, o;
    for (t ? (l = e.el, o = e.anchor) : (l = e.targetStart, o = e.targetAnchor); l && l !== o; )
      l.nodeType === 1 && l.setAttribute("data-v-owner", n.uid), l = l.nextSibling;
    n.ut();
  }
}
function Po(e, t, n, l, o = null) {
  const i = t.targetStart = n(""), s = t.targetAnchor = n("");
  return i[sa] = s, e && (l(i, e, o), l(s, e, o)), s;
}
const ut = /* @__PURE__ */ Symbol("_leaveCb"), On = /* @__PURE__ */ Symbol("_enterCb");
function gu() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return mn(() => {
    e.isMounted = !0;
  }), Rn(() => {
    e.isUnmounting = !0;
  }), e;
}
const rt = [Function, Array], ua = {
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
}, ca = (e) => {
  const t = e.subTree;
  return t.component ? ca(t.component) : t;
}, _u = {
  name: "BaseTransition",
  props: ua,
  setup(e, { slots: t }) {
    const n = so(), l = gu();
    return () => {
      const o = t.default && pa(t.default(), !0), i = o && o.length ? da(o) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? ne() : void 0
      );
      if (!i)
        return;
      const s = /* @__PURE__ */ ye(e), { mode: a } = s;
      if (l.isLeaving)
        return go(i);
      const r = Mi(i);
      if (!r)
        return go(i);
      let d = No(
        r,
        s,
        l,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (f) => d = f
      );
      r.type !== ze && il(r, d);
      let u = n.subTree && Mi(n.subTree);
      if (u && u.type !== ze && !an(u, r) && ca(n).type !== ze) {
        let f = No(
          u,
          s,
          l,
          n
        );
        if (il(u, f), a === "out-in" && r.type !== ze)
          return l.isLeaving = !0, f.afterLeave = () => {
            l.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, u = void 0;
          }, go(i);
        a === "in-out" && r.type !== ze ? f.delayLeave = (p, g, m) => {
          const _ = fa(
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
function da(e) {
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
const bu = _u;
function fa(e, t) {
  const { leavingVNodes: n } = e;
  let l = n.get(t.type);
  return l || (l = /* @__PURE__ */ Object.create(null), n.set(t.type, l)), l;
}
function No(e, t, n, l, o) {
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
  } = t, v = String(e.key), y = fa(n, e), w = (O, E) => {
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
      O[On] = (N) => {
        V || (V = !0, N ? w(F, [O]) : w(K, [O]), B.delayedLeave && B.delayedLeave(), O[On] = void 0);
      };
      const H = O[On].bind(null, !1);
      E ? T(E, [O, H]) : H();
    },
    leave(O, E) {
      const K = String(e.key);
      if (O[On] && O[On](
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
      const E = No(
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
function go(e) {
  if (pl(e))
    return e = Qt(e), e.children = null, e;
}
function Mi(e) {
  if (!pl(e))
    return aa(e.type) && e.children ? da(e.children) : e;
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
function il(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, il(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function pa(e, t = !1, n) {
  let l = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let s = e[i];
    const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : i);
    s.type === fe ? (s.patchFlag & 128 && o++, l = l.concat(
      pa(s.children, t, a)
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
function ai(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Li(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Nl = /* @__PURE__ */ new WeakMap();
function Jn(e, t, n, l, o = !1) {
  if (re(e)) {
    e.forEach(
      (_, A) => Jn(
        _,
        t && (re(t) ? t[A] : t),
        n,
        l,
        o
      )
    );
    return;
  }
  if (kn(l) && !o) {
    l.shapeFlag & 512 && l.type.__asyncResolved && l.component.subTree.component && Jn(e, t, n, l.component.subTree);
    return;
  }
  const i = l.shapeFlag & 4 ? ao(l.component) : l.el, s = o ? null : i, { i: a, r } = e, d = t && t.r, u = a.refs === Se ? a.refs = {} : a.refs, f = a.setupState, p = /* @__PURE__ */ ye(f), g = f === Se ? Ms : (_) => Li(u, _) ? !1 : Ae(p, _), m = (_, A) => !(A && Li(u, A));
  if (d != null && d !== r) {
    if (Ii(t), Ie(d))
      u[d] = null, g(d) && (f[d] = null);
    else if (/* @__PURE__ */ se(d)) {
      const _ = t;
      m(d, _.k) && (d.value = null), _.k && (u[_.k] = null);
    }
  }
  if (he(r))
    dl(r, a, 12, [s, u]);
  else {
    const _ = Ie(r), A = /* @__PURE__ */ se(r);
    if (_ || A) {
      const x = () => {
        if (e.f) {
          const S = _ ? g(r) ? f[r] : u[r] : m() || !e.k ? r.value : u[e.k];
          if (o)
            re(S) && Qo(S, i);
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
          x(), Nl.delete(e);
        };
        S.id = -1, Nl.set(e, S), Ye(S, n);
      } else
        Ii(e), x();
    }
  }
}
function Ii(e) {
  const t = Nl.get(e);
  t && (t.flags |= 8, Nl.delete(e));
}
const Di = (e) => e.nodeType === 8;
Ql().requestIdleCallback;
Ql().cancelIdleCallback;
function vu(e, t) {
  if (Di(e) && e.data === "[") {
    let n = 1, l = e.nextSibling;
    for (; l; ) {
      if (l.nodeType === 1) {
        if (t(l) === !1)
          break;
      } else if (Di(l))
        if (l.data === "]") {
          if (--n === 0) break;
        } else l.data === "[" && n++;
      l = l.nextSibling;
    }
  } else
    t(e);
}
const kn = (e) => !!e.type.__asyncLoader;
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
          (w) => vu(m, w)
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
      if (ai(m), u)
        return () => vl(u, m);
      const _ = (y) => {
        d = null, fl(
          y,
          m,
          13,
          !l
        );
      };
      if (a && m.suspense || Pn)
        return g().then((y) => () => vl(y, m)).catch((y) => (_(y), () => l ? R(l, {
          error: y
        }) : null));
      const A = /* @__PURE__ */ ce(!1), x = /* @__PURE__ */ ce(), S = /* @__PURE__ */ ce(!!o);
      let k, v;
      return lo(() => {
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
        m.isUnmounted || (A.value = !0, m.parent && pl(m.parent.vnode) && m.parent.update());
      }).catch((y) => {
        if (m.isUnmounted) {
          d = null;
          return;
        }
        _(y), x.value = y;
      }), () => {
        if (A.value && u)
          return vl(u, m);
        if (x.value && l)
          return R(l, {
            error: x.value
          });
        if (n && !S.value)
          return vl(
            n,
            m
          );
      };
    }
  });
}
function vl(e, t) {
  const { ref: n, props: l, children: o, ce: i } = t.vnode, s = R(e, l, o);
  return s.ref = n, s.ce = i, delete t.vnode.ce, s;
}
const pl = (e) => e.type.__isKeepAlive;
function yu(e, t) {
  ma(e, "a", t);
}
function wu(e, t) {
  ma(e, "da", t);
}
function ma(e, t, n = Ue) {
  const l = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (no(t, l, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      pl(o.parent.vnode) && Su(l, t, n, o), o = o.parent;
  }
}
function Su(e, t, n, l) {
  const o = no(
    t,
    e,
    l,
    !0
    /* prepend */
  );
  lo(() => {
    Qo(l[t], o);
  }, n);
}
function no(e, t, n = Ue, l = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
      Vt();
      const a = ml(n), r = ft(t, n, e, s);
      return a(), Ot(), r;
    });
    return l ? o.unshift(i) : o.push(i), i;
  }
}
const Wt = (e) => (t, n = Ue) => {
  (!Pn || e === "sp") && no(e, (...l) => t(...l), n);
}, xu = Wt("bm"), mn = Wt("m"), Cu = Wt(
  "bu"
), Au = Wt("u"), Rn = Wt(
  "bum"
), lo = Wt("um"), ku = Wt(
  "sp"
), Fu = Wt("rtg"), Mu = Wt("rtc");
function Lu(e, t = Ue) {
  no("ec", e, t);
}
const Iu = "components", ha = /* @__PURE__ */ Symbol.for("v-ndc");
function Du(e) {
  return Ie(e) ? Pu(Iu, e, !1) || e : e || ha;
}
function Pu(e, t, n = !0, l = !1) {
  const o = Ge || Ue;
  if (o) {
    const i = o.type;
    {
      const a = hc(
        i,
        !1
      );
      if (a && (a === t || a === Ke(t) || a === Yl(Ke(t))))
        return i;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Pi(o[e] || i[e], t) || // global registration
      Pi(o.appContext[e], t)
    );
    return !s && l ? i : s;
  }
}
function Pi(e, t) {
  return e && (e[t] || e[Ke(t)] || e[Yl(Ke(t))]);
}
function Ne(e, t, n, l) {
  let o;
  const i = n, s = re(e);
  if (s || Ie(e)) {
    const a = s && /* @__PURE__ */ Tt(e);
    let r = !1, d = !1;
    a && (r = !/* @__PURE__ */ it(e), d = /* @__PURE__ */ $t(e), e = eo(e)), o = new Array(e.length);
    for (let u = 0, f = e.length; u < f; u++)
      o[u] = t(
        r ? d ? Dn(mt(e[u])) : mt(e[u]) : e[u],
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
function Nu(e, t, n = {}, l, o, i) {
  if (Ge.ce || Ge.parent && kn(Ge.parent) && Ge.parent.ce) {
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
    const d = s && ga(s(n)), u = n.key || i || // slot content array of a dynamic conditional slot may have a branch
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
    for (let u = Et.length; u > a; u--) di();
    throw d;
  } finally {
    s && s._c && (s._d = !0);
  }
  return r;
}
function ga(e) {
  return e.some((t) => al(t) ? !(t.type === ze || t.type === fe && !ga(t.children)) : !0) ? e : null;
}
const Ro = (e) => e ? Ea(e) ? ao(e) : Ro(e.parent) : null, Qn = (
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
    $parent: (e) => Ro(e.parent),
    $root: (e) => Ro(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ba(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ii(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Nn.bind(e.proxy)),
    $watch: (e) => fu.bind(e)
  })
), _o = (e, t) => e !== Se && !e.__isScriptSetup && Ae(e, t), Ru = {
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
        if (_o(l, t))
          return s[t] = 1, l[t];
        if (o !== Se && Ae(o, t))
          return s[t] = 2, o[t];
        if (Ae(i, t))
          return s[t] = 3, i[t];
        if (n !== Se && Ae(n, t))
          return s[t] = 4, n[t];
        To && (s[t] = 0);
      }
    }
    const d = Qn[t];
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
    return _o(o, t) ? (o[t] = n, !0) : l !== Se && Ae(l, t) ? (l[t] = n, !0) : Ae(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: l, appContext: o, props: i, type: s }
  }, a) {
    let r;
    return !!(n[a] || e !== Se && a[0] !== "$" && Ae(e, a) || _o(t, a) || Ae(i, a) || Ae(l, a) || Ae(Qn, a) || Ae(o.config.globalProperties, a) || (r = s.__cssModules) && r[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ae(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Rl(e) {
  return re(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function qe(e, t) {
  return !e || !t ? e || t : re(e) && re(t) ? e.concat(t) : Te({}, Rl(e), Rl(t));
}
let To = !0;
function Tu(e) {
  const t = ba(e), n = e.proxy, l = e.ctx;
  To = !1, t.beforeCreate && Ni(t.beforeCreate, e, "bc");
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
  if (d && Eu(d, l, null), s)
    for (const I in s) {
      const L = s[I];
      he(L) && (l[I] = L.bind(n));
    }
  if (o) {
    const I = o.call(n, n);
    ke(I) && (e.data = /* @__PURE__ */ Gt(I));
  }
  if (To = !0, i)
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
      _a(a[I], l, n, I);
  if (r) {
    const I = he(r) ? r.call(n) : r;
    Reflect.ownKeys(I).forEach((L) => {
      au(L, I[L]);
    });
  }
  u && Ni(u, e, "c");
  function $(I, L) {
    re(L) ? L.forEach((U) => I(U.bind(n))) : L && I(L.bind(n));
  }
  if ($(xu, f), $(mn, p), $(Cu, g), $(Au, m), $(yu, _), $(wu, A), $(Lu, B), $(Mu, w), $(Fu, T), $(Rn, S), $(lo, v), $(ku, O), re(E))
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
  y && e.render === kt && (e.render = y), K != null && (e.inheritAttrs = K), F && (e.components = F), V && (e.directives = V), O && ai(e);
}
function Eu(e, t, n = kt) {
  re(e) && (e = Eo(e));
  for (const l in e) {
    const o = e[l];
    let i;
    ke(o) ? "default" in o ? i = Yn(
      o.from || l,
      o.default,
      !0
    ) : i = Yn(o.from || l) : i = Yn(o), /* @__PURE__ */ se(i) ? Object.defineProperty(t, l, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (s) => i.value = s
    }) : t[l] = i;
  }
}
function Ni(e, t, n) {
  ft(
    re(e) ? e.map((l) => l.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function _a(e, t, n, l) {
  let o = l.includes(".") ? ia(n, l) : () => n[l];
  if (Ie(e)) {
    const i = t[e];
    he(i) && $e(o, i);
  } else if (he(e))
    $e(o, e.bind(n));
  else if (ke(e))
    if (re(e))
      e.forEach((i) => _a(i, t, n, l));
    else {
      const i = he(e.handler) ? e.handler.bind(n) : t[e.handler];
      he(i) && $e(o, i, e);
    }
}
function ba(e) {
  const t = e.type, { mixins: n, extends: l } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = i.get(t);
  let r;
  return a ? r = a : !o.length && !n && !l ? r = t : (r = {}, o.length && o.forEach(
    (d) => Tl(r, d, s, !0)
  ), Tl(r, t, s)), ke(t) && i.set(t, r), r;
}
function Tl(e, t, n, l = !1) {
  const { mixins: o, extends: i } = t;
  i && Tl(e, i, n, !0), o && o.forEach(
    (s) => Tl(e, s, n, !0)
  );
  for (const s in t)
    if (!(l && s === "expose")) {
      const a = Vu[s] || n && n[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const Vu = {
  data: Ri,
  props: Ti,
  emits: Ti,
  // objects
  methods: Gn,
  computed: Gn,
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
  components: Gn,
  directives: Gn,
  // watch
  watch: $u,
  // provide / inject
  provide: Ri,
  inject: Ou
};
function Ri(e, t) {
  return t ? e ? function() {
    return Te(
      he(e) ? e.call(this, this) : e,
      he(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ou(e, t) {
  return Gn(Eo(e), Eo(t));
}
function Eo(e) {
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
function Gn(e, t) {
  return e ? Te(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ti(e, t) {
  return e ? re(e) && re(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Te(
    /* @__PURE__ */ Object.create(null),
    Rl(e),
    Rl(t ?? {})
  ) : t;
}
function $u(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Te(/* @__PURE__ */ Object.create(null), e);
  for (const l in t)
    n[l] = Xe(e[l], t[l]);
  return n;
}
function va() {
  return {
    app: null,
    config: {
      isNativeTag: Ms,
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
let Bu = 0;
function Hu(e, t) {
  return function(l, o = null) {
    he(l) || (l = Te({}, l)), o != null && !ke(o) && (o = null);
    const i = va(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let r = !1;
    const d = i.app = {
      _uid: Bu++,
      _component: l,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: _c,
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
          return g.appContext = i, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(g, u, p), r = !0, d._container = u, u.__vue_app__ = d, ao(g.component);
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
        const f = fn;
        fn = d;
        try {
          return u();
        } finally {
          fn = f;
        }
      }
    };
    return d;
  };
}
let fn = null;
function nt(e, t, n = Se) {
  const l = so(), o = Ke(t), i = Ut(t), s = ya(e, o), a = Yr((r, d) => {
    let u, f = Se, p;
    return du(() => {
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
const ya = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ke(t)}Modifiers`] || e[`${Ut(t)}Modifiers`];
function Uu(e, t, ...n) {
  if (e.isUnmounted) return;
  const l = e.vnode.props || Se;
  let o = n;
  const i = t.startsWith("update:"), s = i && ya(l, t.slice(7));
  s && (s.trim && (o = n.map((u) => Ie(u) ? u.trim() : u)), s.number && (o = n.map(Jl)));
  let a, r = l[a = co(t)] || // also try camelCase event handler (#2249)
  l[a = co(Ke(t))];
  !r && i && (r = l[a = co(Ut(t))]), r && ft(
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
const Gu = /* @__PURE__ */ new WeakMap();
function wa(e, t, n = !1) {
  const l = n ? Gu : t.emitsCache, o = l.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let s = {}, a = !1;
  if (!he(e)) {
    const r = (d) => {
      const u = wa(d, t, !0);
      u && (a = !0, Te(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
  }
  return !i && !a ? (ke(e) && l.set(e, null), null) : (re(i) ? i.forEach((r) => s[r] = null) : Te(s, i), ke(e) && l.set(e, s), s);
}
function oo(e, t) {
  return !e || !jl(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ae(e, t[0].toLowerCase() + t.slice(1)) || Ae(e, Ut(t)) || Ae(e, t));
}
function Ei(e) {
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
  } = e, A = Pl(e);
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
      ), S = t.props ? a : Wu(a);
    }
  } catch (v) {
    Et.length = 0, fl(v, e, 1), x = R(ze);
  }
  let k = x;
  if (S && _ !== !1) {
    const v = Object.keys(S), { shapeFlag: y } = k;
    v.length && y & 7 && (i && v.some(zl) && (S = ju(
      S,
      i
    )), k = Qt(k, S, !1, !0));
  }
  return n.dirs && (k = Qt(k, null, !1, !0), k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs), n.transition && il(k, n.transition), x = k, Pl(A), x;
}
const Wu = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || jl(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ju = (e, t) => {
  const n = {};
  for (const l in e)
    (!zl(l) || !(l.slice(9) in t)) && (n[l] = e[l]);
  return n;
};
function zu(e, t, n) {
  const { props: l, children: o, component: i } = e, { props: s, children: a, patchFlag: r } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && r >= 0) {
    if (r & 1024)
      return !0;
    if (r & 16)
      return l ? Vi(l, s, d) : !!s;
    if (r & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const p = u[f];
        if (Sa(s, l, p) && !oo(d, p))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : l === s ? !1 : l ? s ? Vi(l, s, d) : !0 : !!s;
  return !1;
}
function Vi(e, t, n) {
  const l = Object.keys(t);
  if (l.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < l.length; o++) {
    const i = l[o];
    if (Sa(t, e, i) && !oo(n, i))
      return !0;
  }
  return !1;
}
function Sa(e, t, n) {
  const l = e[n], o = t[n];
  return n === "style" && ke(l) && ke(o) ? !cl(l, o) : l !== o;
}
function Ku({ vnode: e, parent: t, suspense: n }, l) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = l, e = o), o === e)
      (e = t.vnode).el = l, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = l);
}
const xa = {}, Ca = () => Object.create(xa), Aa = (e) => Object.getPrototypeOf(e) === xa;
function qu(e, t, n, l = !1) {
  const o = {}, i = Ca();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ka(e, t, o, i);
  for (const s in e.propsOptions[0])
    s in o || (o[s] = void 0);
  n ? e.props = l ? o : /* @__PURE__ */ jr(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function Xu(e, t, n, l) {
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
        if (oo(e.emitsOptions, p))
          continue;
        const g = t[p];
        if (r)
          if (Ae(i, p))
            g !== i[p] && (i[p] = g, d = !0);
          else {
            const m = Ke(p);
            o[m] = Vo(
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
    ka(e, t, o, i) && (d = !0);
    let u;
    for (const f in a)
      (!t || // for camelCase
      !Ae(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Ut(f)) === f || !Ae(t, u))) && (r ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[f] = Vo(
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
function ka(e, t, n, l) {
  const [o, i] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let r in t) {
      if (Kn(r))
        continue;
      const d = t[r];
      let u;
      o && Ae(o, u = Ke(r)) ? !i || !i.includes(u) ? n[u] = d : (a || (a = {}))[u] = d : oo(e.emitsOptions, r) || (!(r in l) || d !== l[r]) && (l[r] = d, s = !0);
    }
  if (i) {
    const r = /* @__PURE__ */ ye(n), d = a || Se;
    for (let u = 0; u < i.length; u++) {
      const f = i[u];
      n[f] = Vo(
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
function Vo(e, t, n, l, o, i) {
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
          const u = ml(o);
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
const Yu = /* @__PURE__ */ new WeakMap();
function Fa(e, t, n = !1) {
  const l = n ? Yu : t.propsCache, o = l.get(e);
  if (o)
    return o;
  const i = e.props, s = {}, a = [];
  let r = !1;
  if (!he(e)) {
    const u = (f) => {
      r = !0;
      const [p, g] = Fa(f, t, !0);
      Te(s, p), g && a.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !r)
    return ke(e) && l.set(e, xn), xn;
  if (re(i))
    for (let u = 0; u < i.length; u++) {
      const f = Ke(i[u]);
      Oi(f) && (s[f] = Se);
    }
  else if (i)
    for (const u in i) {
      const f = Ke(u);
      if (Oi(f)) {
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
function Oi(e) {
  return e[0] !== "$" && !Kn(e);
}
const ri = (e) => e === "_" || e === "_ctx" || e === "$stable", ui = (e) => re(e) ? e.map(At) : [At(e)], Ju = (e, t, n) => {
  if (t._n)
    return t;
  const l = Jt((...o) => ui(t(...o)), n);
  return l._c = !1, l;
}, Ma = (e, t, n) => {
  const l = e._ctx;
  for (const o in e) {
    if (ri(o)) continue;
    const i = e[o];
    if (he(i))
      t[o] = Ju(o, i, l);
    else if (i != null) {
      const s = ui(i);
      t[o] = () => s;
    }
  }
}, La = (e, t) => {
  const n = ui(t);
  e.slots.default = () => n;
}, Ia = (e, t, n) => {
  for (const l in t)
    (n || !ri(l)) && (e[l] = t[l]);
}, Qu = (e, t, n) => {
  const l = e.slots = Ca();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Ia(l, t, n), n && Ps(l, "_", o, !0)) : Ma(t, l);
  } else t && La(e, t);
}, Zu = (e, t, n) => {
  const { vnode: l, slots: o } = e;
  let i = !0, s = Se;
  if (l.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? i = !1 : Ia(o, t, n) : (i = !t.$stable, Ma(t, o)), s = t;
  } else t && (La(e, t), s = { default: 1 });
  if (i)
    for (const a in o)
      !ri(a) && s[a] == null && delete o[a];
}, Ye = oc;
function ec(e) {
  return tc(e);
}
function tc(e, t) {
  const n = Ql();
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
    h && !an(h, b) && (z = hn(h), ae(h, j, G, !0), h = null), b.patchFlag === -2 && (X = !1, b.dynamicChildren = null);
    const { type: W, ref: de, shapeFlag: te } = b;
    switch (W) {
      case io:
        A(h, b, P, z);
        break;
      case ze:
        x(h, b, P, z);
        break;
      case vo:
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
    de != null && j ? Jn(de, h && h.ref, G, b || h, !b) : de == null && h && h.ref != null && Jn(h.ref, null, G, h, !0);
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
      bo(h, G),
      ee,
      J
    ), pe && en(h, null, z, "created"), T(X, h, h.scopeId, ee, z), de) {
      for (const Me in de)
        Me !== "value" && !Kn(Me) && i(X, Me, null, de[Me], G, z);
      "value" in de && i(X, "value", null, de.value, G), (W = de.onVnodeBeforeMount) && St(W, z, h);
    }
    pe && en(h, null, z, "beforeMount");
    const ve = nc(j, ue);
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
      if (b === G || Na(G.type) && (G.ssContent === b || G.ssFallback === b)) {
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
      bo(b, j),
      G
    ) : ee || L(
      h,
      b,
      J,
      null,
      P,
      z,
      bo(b, j),
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
          !Kn(G) && !(G in P) && i(
            h,
            G,
            b[G],
            null,
            j,
            z
          );
      for (const G in P) {
        if (Kn(G)) continue;
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
    (b.key != null || j && b === j.subTree) && ci(
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
    const J = h.component = cc(
      h,
      z,
      j
    );
    if (pl(h) && (J.ctx.renderer = me), dc(J, !1, ee), J.asyncDep) {
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
    if (zu(h, b, P))
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
          const yt = Da(h);
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
        tn(h, !1), te ? (te.el = Me.el, I(h, te, ee)) : te = Me, ue && xl(ue), (Re = te.props && te.props.onVnodeBeforeUpdate) && St(Re, ve, te, Me), tn(h, !0);
        const Be = Ei(h), vt = h.subTree;
        h.subTree = Be, _(
          vt,
          Be,
          // parent may have changed if it's in a teleport
          f(vt.el),
          // anchor may have changed if it's in a fragment
          hn(vt),
          h,
          j,
          G
        ), te.el = Be.el, Fe === null && Ku(h, Be.el), pe && Ye(pe, j), (Re = te.props && te.props.onVnodeUpdated) && Ye(
          () => St(Re, ve, te, Me),
          j
        );
      } else {
        let te;
        const { el: ue, props: pe } = b, { bm: ve, m: Me, parent: Fe, root: Re, type: Be } = h, vt = kn(b);
        tn(h, !1), ve && xl(ve), !vt && (te = pe && pe.onVnodeBeforeMount) && St(te, Fe, b), tn(h, !0);
        {
          Re.ce && Re.ce._hasShadowRoot() && Re.ce._injectChildStyle(
            Be,
            h.parent ? h.parent.type : void 0
          );
          const yt = h.subTree = Ei(h);
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
        (b.shapeFlag & 256 || Fe && kn(Fe.vnode) && Fe.vnode.shapeFlag & 256) && h.a && Ye(h.a, j), h.isMounted = !0, b = P = z = null;
      }
    };
    h.scope.on();
    const X = h.effect = new $s(J);
    h.scope.off();
    const W = h.update = X.run.bind(X), de = h.job = X.runIfDirty.bind(X);
    de.i = h, de.id = h.uid, X.scheduler = () => ii(de), tn(h, !0), W();
  }, I = (h, b, P) => {
    b.component = h;
    const z = h.vnode.props;
    h.vnode = b, h.next = null, Xu(h, b.props, z, P), Zu(h, b.children, P), Vt(), Ai(h), Ot();
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
    h = h || xn, b = b || xn;
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
      const En = new Array(Be);
      for (W = 0; W < Be; W++) En[W] = 0;
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
            if (En[Fe - ve] === 0 && an(lt, b[Fe])) {
              wt = Fe;
              break;
            }
        wt === void 0 ? ae(lt, j, G, !0) : (En[wt - ve] = W + 1, wt >= yt ? yt = wt : vt = !0, _(
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
      const bi = vt ? lc(En) : xn;
      for (Fe = bi.length - 1, W = Be - 1; W >= 0; W--) {
        const lt = ve + W, wt = b[lt], vi = b[lt + 1], yi = lt + 1 < de ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          vi.el || Pa(vi)
        ) : z;
        En[W] === 0 ? _(
          null,
          wt,
          P,
          yi,
          j,
          G,
          ee,
          J,
          X
        ) : vt && (Fe < 0 || W !== bi[Fe] ? De(wt, P, yi, 2) : Fe--);
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
    if (ee === vo) {
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
    if (te === -2 && (j = !1), J != null && (Vt(), Jn(J, null, P, h, !0), Ot()), pe != null && (b.renderCache[pe] = void 0), de & 256) {
      b.ctx.deactivate(h);
      return;
    }
    const Me = de & 1 && ue, Fe = !kn(h);
    let Re;
    if (Fe && (Re = ee && ee.onVnodeBeforeUnmount) && St(Re, b, h), de & 6)
      Tn(h.component, P, z);
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
    if (b === vo) {
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
  }, Tn = (h, b, P) => {
    const { bum: z, scope: j, job: G, subTree: ee, um: J, m: X, a: W } = h;
    $i(X), $i(W), z && xl(z), j.stop(), G && (G.flags |= 8, ae(ee, h, b, P)), J && Ye(J, b), Ye(() => {
      h.isUnmounted = !0;
    }, b);
  }, Zt = (h, b, P, z = !1, j = !1, G = 0) => {
    for (let ee = G; ee < h.length; ee++)
      ae(h[ee], b, P, z, j);
  }, hn = (h) => {
    if (h.shapeFlag & 6)
      return hn(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const b = p(h.anchor || h.el), P = b && b[sa];
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
    ), b._vnode = h, Q || (Q = !0, Ai(z), na(), Q = !1);
  }, me = {
    p: _,
    um: ae,
    m: De,
    r: Z,
    mt: H,
    mc: B,
    pc: L,
    pbc: E,
    n: hn,
    o: e
  };
  return {
    render: le,
    hydrate: void 0,
    createApp: Hu(le)
  };
}
function bo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function tn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function nc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ci(e, t, n = !1) {
  const l = e.children, o = t.children;
  if (re(l) && re(o))
    for (let i = 0; i < l.length; i++) {
      const s = l[i];
      let a = o[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[i] = It(o[i]), a.el = s.el), !n && a.patchFlag !== -2 && ci(s, a)), a.type === io && (a.patchFlag === -1 && (a = o[i] = It(a)), a.el = s.el), a.type === ze && !a.el && (a.el = s.el);
    }
}
function lc(e) {
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
function Da(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Da(t);
}
function $i(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Pa(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Pa(t.subTree) : null;
}
const Na = (e) => e.__isSuspense;
function oc(e, t) {
  t && t.pendingBranch ? re(e) ? t.effects.push(...e) : t.effects.push(e) : su(e);
}
const fe = /* @__PURE__ */ Symbol.for("v-fgt"), io = /* @__PURE__ */ Symbol.for("v-txt"), ze = /* @__PURE__ */ Symbol.for("v-cmt"), vo = /* @__PURE__ */ Symbol.for("v-stc"), Et = [];
let ot = null;
function C(e = !1) {
  Et.push(ot = e ? null : []);
}
function di() {
  Et.pop(), ot = Et[Et.length - 1] || null;
}
let sl = 1;
function El(e, t = !1) {
  sl += e, e < 0 && ot && t && (ot.hasOnce = !0);
}
function Ra(e) {
  return e.dynamicChildren = sl > 0 ? ot || xn : null, di(), sl > 0 && ot && ot.push(e), e;
}
function M(e, t, n, l, o, i) {
  return Ra(
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
  return Ra(
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
function al(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function an(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ta = ({ key: e }) => e ?? null, Cl = ({
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
    key: t && Ta(t),
    ref: t && Cl(t),
    scopeId: oa,
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
  return a ? (Ol(r, n), i & 128 && e.normalize(r)) : n && (r.shapeFlag |= Ie(n) ? 8 : 16), sl > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  ot && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (r.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  r.patchFlag !== 32 && ot.push(r), r;
}
const R = ic;
function ic(e, t = null, n = null, l = 0, o = null, i = !1) {
  if ((!e || e === ha) && (e = ze), al(e)) {
    const a = Qt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ol(a, n), sl > 0 && !i && ot && (a.shapeFlag & 6 ? ot[ot.indexOf(e)] = a : ot.push(a)), a.patchFlag = -2, a;
  }
  if (gc(e) && (e = e.__vccOpts), t) {
    t = sc(t);
    let { class: a, style: r } = t;
    a && !Ie(a) && (t.class = _e(a)), ke(r) && (/* @__PURE__ */ to(r) && !re(r) && (r = Te({}, r)), t.style = ct(r));
  }
  const s = Ie(e) ? 1 : Na(e) ? 128 : aa(e) ? 64 : ke(e) ? 4 : he(e) ? 2 : 0;
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
function sc(e) {
  return e ? /* @__PURE__ */ to(e) || Aa(e) ? Te({}, e) : e : null;
}
function Qt(e, t, n = !1, l = !1) {
  const { props: o, ref: i, patchFlag: s, children: a, transition: r } = e, d = t ? ac(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Ta(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? re(i) ? i.concat(Cl(t)) : [i, Cl(t)] : Cl(t)
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
  return r && l && il(
    u,
    r.clone(u)
  ), u;
}
function Vl(e = " ", t = 0) {
  return R(io, null, e, t);
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
  ) : al(e) ? It(e) : R(io, null, String(e));
}
function It(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qt(e);
}
function Ol(e, t) {
  let n = 0;
  const { shapeFlag: l } = e;
  if (t == null)
    t = null;
  else if (re(t))
    n = 16;
  else if (typeof t == "object")
    if (l & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Ol(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Aa(t) ? t._ctx = Ge : o === 3 && Ge && (Ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (he(t)) {
    if (l & 65) {
      Ol(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ge }, n = 32;
  } else
    t = String(t), l & 64 ? (n = 16, t = [Vl(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function ac(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const l = e[n];
    for (const o in l)
      if (o === "class")
        t.class !== l.class && (t.class = _e([t.class, l.class]));
      else if (o === "style")
        t.style = ct([t.style, l.style]);
      else if (jl(o)) {
        const i = t[o], s = l[o];
        s && i !== s && !(re(i) && i.includes(s)) ? t[o] = i ? [].concat(i, s) : s : s == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !zl(o) && (t[o] = s);
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
const rc = va();
let uc = 0;
function cc(e, t, n) {
  const l = e.type, o = (t ? t.appContext : e.appContext) || rc, i = {
    uid: uc++,
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
    scope: new Es(
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
    propsOptions: Fa(l, o),
    emitsOptions: wa(l, o),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Uu.bind(null, i), e.ce && e.ce(i), i;
}
let Ue = null;
const so = () => Ue || Ge;
let $l, Oo;
{
  const e = Ql(), t = (n, l) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(l), (i) => {
      o.length > 1 ? o.forEach((s) => s(i)) : o[0](i);
    };
  };
  $l = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ue = n
  ), Oo = t(
    "__VUE_SSR_SETTERS__",
    (n) => Pn = n
  );
}
const ml = (e) => {
  const t = Ue;
  return $l(e), e.scope.on(), () => {
    e.scope.off(), $l(t);
  };
}, Bi = () => {
  Ue && Ue.scope.off(), $l(null);
};
function Ea(e) {
  return e.vnode.shapeFlag & 4;
}
let Pn = !1;
function dc(e, t = !1, n = !1) {
  t && Oo(t);
  const { props: l, children: o } = e.vnode, i = Ea(e);
  qu(e, l, i, t), Qu(e, o, n || t);
  const s = i ? fc(e, t) : void 0;
  return t && Oo(!1), s;
}
function fc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ru);
  const { setup: l } = n;
  if (l) {
    Vt();
    const o = e.setupContext = l.length > 1 ? mc(e) : null, i = ml(e), s = dl(
      l,
      e,
      0,
      [
        e.props,
        o
      ]
    ), a = Ls(s);
    if (Ot(), i(), (a || e.sp) && !kn(e) && ai(e), a) {
      if (s.then(Bi, Bi), t)
        return s.then((r) => {
          Hi(e, r);
        }).catch((r) => {
          fl(r, e, 0);
        });
      e.asyncDep = s;
    } else
      Hi(e, s);
  } else
    Va(e);
}
function Hi(e, t, n) {
  he(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ke(t) && (e.setupState = Zs(t)), Va(e);
}
function Va(e, t, n) {
  const l = e.type;
  e.render || (e.render = l.render || kt);
  {
    const o = ml(e);
    Vt();
    try {
      Tu(e);
    } finally {
      Ot(), o();
    }
  }
}
const pc = {
  get(e, t) {
    return We(e, "get", ""), e[t];
  }
};
function mc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, pc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ao(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Zs(oi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Qn)
        return Qn[n](e);
    },
    has(t, n) {
      return n in t || n in Qn;
    }
  })) : e.proxy;
}
function hc(e, t = !0) {
  return he(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function gc(e) {
  return he(e) && "__vccOpts" in e;
}
const q = (e, t) => /* @__PURE__ */ tu(e, t, Pn);
function Oa(e, t, n) {
  try {
    El(-1);
    const l = arguments.length;
    return l === 2 ? ke(t) && !re(t) ? al(t) ? R(e, null, [t]) : R(e, t) : R(e, null, t) : (l > 3 ? n = Array.prototype.slice.call(arguments, 2) : l === 3 && al(n) && (n = [n]), R(e, t, n));
  } finally {
    El(1);
  }
}
const _c = "3.5.40";
/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let $o;
const Ui = typeof window < "u" && window.trustedTypes;
if (Ui)
  try {
    $o = /* @__PURE__ */ Ui.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const $a = $o ? (e) => $o.createHTML(e) : (e) => e, bc = "http://www.w3.org/2000/svg", vc = "http://www.w3.org/1998/Math/MathML", Lt = typeof document < "u" ? document : null, Gi = Lt && /* @__PURE__ */ Lt.createElement("template"), yc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, l) => {
    const o = t === "svg" ? Lt.createElementNS(bc, e) : t === "mathml" ? Lt.createElementNS(vc, e) : n ? Lt.createElement(e, { is: n }) : Lt.createElement(e);
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
      Gi.innerHTML = $a(
        l === "svg" ? `<svg>${e}</svg>` : l === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Gi.content;
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
}, zt = "transition", $n = "animation", rl = /* @__PURE__ */ Symbol("_vtc"), Ba = {
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
}, wc = /* @__PURE__ */ Te(
  {},
  ua,
  Ba
), Sc = (e) => (e.displayName = "Transition", e.props = wc, e), xc = /* @__PURE__ */ Sc(
  (e, { slots: t }) => Oa(bu, Cc(e), t)
), nn = (e, t = []) => {
  re(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Wi = (e) => e ? re(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Cc(e) {
  const t = {};
  for (const F in e)
    F in Ba || (t[F] = e[F]);
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
  } = e, m = Ac(o), _ = m && m[0], A = m && m[1], {
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
    nn(N, [V, $]), ji(() => {
      ln(V, F ? r : i), Mt(V, F ? u : a), Wi(N) || zi(V, l, _, $);
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
      Mt(F, f), F._enterCancelled ? (Mt(F, p), Xi(F)) : (Xi(F), Mt(F, p)), ji(() => {
        F._isLeaving && (ln(F, f), Mt(F, g), Wi(v) || zi(F, l, A, H));
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
function Ac(e) {
  if (e == null)
    return null;
  if (ke(e))
    return [yo(e.enter), yo(e.leave)];
  {
    const t = yo(e);
    return [t, t];
  }
}
function yo(e) {
  return _r(e);
}
function Mt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[rl] || (e[rl] = /* @__PURE__ */ new Set())).add(t);
}
function ln(e, t) {
  t.split(/\s+/).forEach((l) => l && e.classList.remove(l));
  const n = e[rl];
  n && (n.delete(t), n.size || (e[rl] = void 0));
}
function ji(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let kc = 0;
function zi(e, t, n, l) {
  const o = e._endId = ++kc, i = () => {
    o === e._endId && l();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: s, timeout: a, propCount: r } = Fc(e, t);
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
function Fc(e, t) {
  const n = window.getComputedStyle(e), l = (m) => (n[m] || "").split(", "), o = l(`${zt}Delay`), i = l(`${zt}Duration`), s = Ki(o, i), a = l(`${$n}Delay`), r = l(`${$n}Duration`), d = Ki(a, r);
  let u = null, f = 0, p = 0;
  t === zt ? s > 0 && (u = zt, f = s, p = i.length) : t === $n ? d > 0 && (u = $n, f = d, p = r.length) : (f = Math.max(s, d), u = f > 0 ? s > d ? zt : $n : null, p = u ? u === zt ? i.length : r.length : 0);
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
function Ki(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, l) => qi(n) + qi(e[l])));
}
function qi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Xi(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Mc(e, t, n) {
  const l = e[rl];
  l && (t = (t ? [t, ...l] : [...l]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Bl = /* @__PURE__ */ Symbol("_vod"), Ha = /* @__PURE__ */ Symbol("_vsh"), Lc = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Bl] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Bn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: l }) {
    !t != !n && (l ? t ? (l.beforeEnter(e), Bn(e, !0), l.enter(e)) : l.leave(e, () => {
      Bn(e, !1);
    }) : Bn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Bn(e, t);
  }
};
function Bn(e, t) {
  e.style.display = t ? e[Bl] : "none", e[Ha] = !t;
}
const Ic = /* @__PURE__ */ Symbol(""), Dc = /(?:^|;)\s*display\s*:/;
function Pc(e, t, n) {
  const l = e.style, o = Ie(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (Ie(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          n[a] == null && Wn(l, a, "");
        }
      else
        for (const s in t)
          n[s] == null && Wn(l, s, "");
    for (const s in n) {
      s === "display" && (i = !0);
      const a = n[s];
      a != null ? Rc(
        e,
        s,
        !Ie(t) && t ? t[s] : void 0,
        a
      ) || Wn(l, s, a) : Wn(l, s, "");
    }
  } else if (o) {
    if (t !== n) {
      const s = l[Ic];
      s && (n += ";" + s), l.cssText = n, i = Dc.test(n);
    }
  } else t && e.removeAttribute("style");
  Bl in e && (e[Bl] = i ? l.display : "", e[Ha] && (l.display = "none"));
}
const Yi = /\s*!important$/;
function Wn(e, t, n) {
  if (re(n))
    n.forEach((l) => Wn(e, t, l));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const l = Nc(e, t);
    Yi.test(n) ? e.setProperty(
      Ut(l),
      n.replace(Yi, ""),
      "important"
    ) : e[l] = n;
  }
}
const Ji = ["Webkit", "Moz", "ms"], wo = {};
function Nc(e, t) {
  const n = wo[t];
  if (n)
    return n;
  let l = Ke(t);
  if (l !== "filter" && l in e)
    return wo[t] = l;
  l = Yl(l);
  for (let o = 0; o < Ji.length; o++) {
    const i = Ji[o] + l;
    if (i in e)
      return wo[t] = i;
  }
  return t;
}
function Rc(e, t, n, l) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ie(l) && n === l;
}
const Qi = "http://www.w3.org/1999/xlink";
function Zi(e, t, n, l, o, i = xr(t)) {
  l && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Qi, t.slice(6, t.length)) : e.setAttributeNS(Qi, t, n) : n == null || i && !Ns(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : at(n) ? String(n) : n
  );
}
function es(e, t, n, l, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? $a(n) : n);
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
    a === "boolean" ? n = Ns(n) : n == null && a === "string" ? (n = "", s = !0) : a === "number" && (n = 0, s = !0);
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
function Tc(e, t, n, l) {
  e.removeEventListener(t, n, l);
}
const ts = /* @__PURE__ */ Symbol("_vei");
function Ec(e, t, n, l, o = null) {
  const i = e[ts] || (e[ts] = {}), s = i[t];
  if (l && s)
    s.value = l;
  else {
    const [a, r] = $c(t);
    if (l) {
      const d = i[t] = Uc(
        l,
        o
      );
      rn(e, a, d, r);
    } else s && (Tc(e, a, s, r), i[t] = void 0);
  }
}
const Vc = /(Once|Passive|Capture)$/, Oc = /^on:?(?:Once|Passive|Capture)$/;
function $c(e) {
  let t, n;
  for (; (n = e.match(Vc)) && !Oc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Ut(e.slice(2)), t];
}
let So = 0;
const Bc = /* @__PURE__ */ Promise.resolve(), Hc = () => So || (Bc.then(() => So = 0), So = Date.now());
function Uc(e, t) {
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
  return n.value = e, n.attached = Hc(), n;
}
const ns = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Gc = (e, t, n, l, o, i) => {
  const s = o === "svg";
  t === "class" ? Mc(e, l, s) : t === "style" ? Pc(e, n, l) : jl(t) ? zl(t) || Ec(e, t, n, l, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Wc(e, t, l, s)) ? (es(e, t, l), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Zi(e, t, l, s, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (jc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ie(l))) ? es(e, Ke(t), l, i, t) : (t === "true-value" ? e._trueValue = l : t === "false-value" && (e._falseValue = l), Zi(e, t, l, s));
};
function Wc(e, t, n, l) {
  if (l)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ns(t) && he(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return ns(t) && Ie(n) ? !1 : t in e;
}
function jc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const l = Ke(t);
  return Array.isArray(n) ? n.some((o) => Ke(o) === l) : Object.keys(n).some((o) => Ke(o) === l);
}
const Hl = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return re(t) ? (n) => xl(t, n) : t;
};
function zc(e) {
  e.target.composing = !0;
}
function ls(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Fn = /* @__PURE__ */ Symbol("_assign");
function os(e, t, n) {
  return t && (e = e.trim()), n && (e = Jl(e)), e;
}
const st = {
  created(e, { modifiers: { lazy: t, trim: n, number: l } }, o) {
    e[Fn] = Hl(o);
    const i = l || o.props && o.props.type === "number";
    rn(e, t ? "change" : "input", (s) => {
      s.target.composing || e[Fn](os(e.value, n, i));
    }), (n || i) && rn(e, "change", () => {
      e.value = os(e.value, n, i);
    }), t || (rn(e, "compositionstart", zc), rn(e, "compositionend", ls), rn(e, "change", ls));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: l, trim: o, number: i } }, s) {
    if (e[Fn] = Hl(s), e.composing) return;
    const a = (i || e.type === "number") && !/^0\d/.test(e.value) ? Jl(e.value) : e.value, r = t ?? "";
    if (a === r)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (l && t === n || o && e.value.trim() === r) || (e.value = r);
  }
}, Kc = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, l) {
    e._modelValue = t, rn(e, "change", () => {
      const o = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Jl(Ul(i)) : Ul(i)
      );
      e[Fn](
        e.multiple ? Kl(e._modelValue) ? new Set(o) : o : o[0]
      ), e._assigning = !0, Nn(() => {
        e._assigning = !1;
      });
    }), e[Fn] = Hl(l);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    is(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Fn] = Hl(n);
  },
  updated(e, { value: t }) {
    e._assigning || is(e, t);
  }
};
function is(e, t) {
  const n = e.multiple, l = re(t);
  if (!(n && !l && !Kl(t))) {
    for (let o = 0, i = e.options.length; o < i; o++) {
      const s = e.options[o], a = Ul(s);
      if (n)
        if (l) {
          const r = typeof a;
          r === "string" || r === "number" ? s.selected = t.some((d) => String(d) === String(a)) : s.selected = Ar(t, a) > -1;
        } else
          s.selected = t.has(a);
      else if (cl(Ul(s), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Ul(e) {
  return "_value" in e ? e._value : e.value;
}
const qc = ["ctrl", "shift", "alt", "meta"], Xc = {
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
  exact: (e, t) => qc.some((n) => e[`${n}Key`] && !t.includes(n))
}, Bo = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), l = t.join(".");
  return n[l] || (n[l] = (o, ...i) => {
    for (let s = 0; s < t.length; s++) {
      const a = Xc[t[s]];
      if (a && a(o, t)) return;
    }
    return e(o, ...i);
  });
}, Yc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Al = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), l = t.join(".");
  return n[l] || (n[l] = (o) => {
    if (!("key" in o))
      return;
    const i = Ut(o.key);
    if (t.some(
      (s) => s === i || Yc[s] === i
    ))
      return e(o);
  });
}, Jc = /* @__PURE__ */ Te({ patchProp: Gc }, yc);
let ss;
function Ua() {
  return ss || (ss = ec(Jc));
}
const as = (...e) => {
  Ua().render(...e);
}, fi = (...e) => {
  const t = Ua().createApp(...e), { mount: n } = t;
  return t.mount = (l) => {
    const o = Zc(l);
    if (!o) return;
    const i = t._component;
    !he(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const s = n(o, !1, Qc(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), s;
  }, t;
};
function Qc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Zc(e) {
  return Ie(e) ? document.querySelector(e) : e;
}
const ro = {
  accent: "#f08a45",
  accentInk: "#241206",
  // 7.24:1 on #f08a45 (white was 2.49:1)
  panel: "#171b22",
  panelAlt: "#222934",
  text: "#e8edf3",
  muted: "#9ca8b5",
  danger: "#ef6666",
  ok: "#62c987"
}, ed = {
  accent: "#c9682c",
  accentInk: "#1c1006",
  // 4.88:1 on #c9682c (white was 3.82:1)
  panel: "#eef1f5",
  panelAlt: "#e2e6ec",
  text: "#1c2430",
  muted: "#5b6572",
  danger: "#c94b4b",
  ok: "#3f8f5f"
}, td = {
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
}, nd = {
  accent: "#d4a017",
  accentInk: "#1a1712",
  // 7.52:1 on #d4a017 (white was 2.38:1)
  panel: "#1a1712",
  panelAlt: "#26221a",
  text: "#e8dcc0",
  muted: "#a09272",
  // 5.83:1 on the panel; the old #8a7d5f sat at 4.41:1
  danger: "#9a3324",
  ok: "#8fbf3f"
}, ld = {
  accent: "#14b13b",
  accentInk: "#0c190c",
  panel: "#0a110a",
  panelAlt: "#121e12",
  text: "#4af626",
  muted: "#3fa845",
  // 6.29:1 on the panel; the old #2e7d32 sat at 3.73:1
  danger: "#d32f2f",
  ok: "#14b13b"
}, od = {
  accent: "#d5ff40",
  accentInk: "#14150f",
  panel: "#181916",
  panelAlt: "#232620",
  text: "#edf2e2",
  muted: "#8b9483",
  danger: "#ff5c72",
  ok: "#3ed98c"
}, id = {
  accent: "#f66744",
  accentInk: "#1a0d08",
  // 6.28:1 on #f66744 (white was 3.03:1)
  panel: "#171718",
  panelAlt: "#242628",
  text: "#e0e0e0",
  muted: "#888888",
  danger: "#d46060",
  ok: "#4ade80"
}, sd = {
  default: ro,
  cyberpunk: td,
  fallout: nd,
  travelmate: od,
  pipboy: ld,
  pixaroma: id
}, Dt = { ...ro };
let Zn = null, el = null;
function Ho(e) {
  return `--fil-accent:${e.accent};--fil-accent-ink:${e.accentInk};--fil-panel:${e.panel};--fil-panel-alt:${e.panelAlt};--fil-text:${e.text};--fil-muted:${e.muted};--fil-border:color-mix(in srgb,${e.muted} 55%,transparent);--fil-danger:${e.danger};--fil-ok:${e.ok};`;
}
const ad = {
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
}, rd = "--fil-surface-bg:rgba(100,180,220,0.06);--fil-surface-border:rgba(0,255,255,0.18);--fil-surface-radius:20px;--fil-surface-blur:10px;--fil-surface-shadow:0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08);--fil-glass-bg:rgba(50,80,120,0.18);--fil-glass-border:rgba(0,150,200,0.35);--fil-field-radius:10px;--fil-pill-radius:17px;--fil-pill-bg:rgba(255,255,255,0.06);--fil-pill-border:rgba(0,150,200,0.4);", ud = "--fil-surface-1:rgba(255,255,255,0.04);--fil-surface-2:rgba(255,255,255,0.08);--fil-surface-3:rgba(255,255,255,0.14);--fil-inset:rgba(0,0,0,0.35);", cd = "--fil-surface-1:rgba(28,36,48,0.05);--fil-surface-2:rgba(28,36,48,0.09);--fil-surface-3:rgba(28,36,48,0.16);--fil-inset:rgba(255,255,255,0.6);", dd = "--fil-surface-bg:rgba(70,130,170,0.08);--fil-surface-border:rgba(40,120,160,0.28);--fil-surface-radius:20px;--fil-surface-blur:10px;--fil-surface-shadow:0 8px 24px rgba(40,60,90,0.18), inset 0 1px 0 rgba(255,255,255,0.5);--fil-glass-bg:rgba(120,160,200,0.16);--fil-glass-border:rgba(40,120,160,0.3);--fil-field-radius:10px;--fil-pill-radius:17px;--fil-pill-bg:rgba(30,60,90,0.06);--fil-pill-border:rgba(40,120,160,0.35);";
function fd() {
  if (typeof document > "u" || document.getElementById("fil-brand-vars")) return;
  const e = document.createElement("style");
  e.id = "fil-brand-vars", e.textContent = `:root{${Ho(ro)}--fil-radius:8px;--fil-node-pad:6px 8px 14px 8px;--fil-node-gap:4px;--fil-row-pad:4px 6px;--fil-control-h:30px;--fil-control-h-lg:34px;--fil-input-border:rgba(240,138,69,0.35);${rd}${ud}}
.comfy-theme-light{${Ho(ed)}--fil-input-border:rgba(201,104,44,0.35);${dd}${cd}}
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
}`, document.head.appendChild(e), Zn = document.createElement("style"), Zn.id = "fil-theme-vars", document.head.appendChild(Zn), el = document.createElement("style"), el.id = "fil-theme-effects", document.head.appendChild(el);
}
function Ga(e) {
  const t = sd[e] ?? ro;
  Object.assign(Dt, t), !(typeof document > "u") && (document.documentElement.dataset.filTheme = e, Zn && (Zn.textContent = e === "default" ? "" : `:root{${Ho(t)}}`), el && (el.textContent = ad[e] ?? ""));
}
const pd = {
  class: "fil-color-picker",
  role: "group",
  "aria-label": "Color picker"
}, md = { class: "fil-cp-hex-row" }, hd = {
  class: "fil-cp-presets",
  role: "listbox",
  "aria-label": "Preset colors"
}, gd = ["aria-selected", "aria-label", "title", "onClick"], _d = /* @__PURE__ */ we({
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
    return (F, V) => (C(), M("div", pd, [
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
      D("div", md, [
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
          onKeydown: Al(S, ["enter"]),
          onBlur: S
        }, null, 544), [
          [st, m.value]
        ])
      ]),
      D("div", hd, [
        (C(!0), M(fe, null, Ne(o.value, (H) => (C(), M("button", {
          key: H,
          class: _e(["fil-color-swatch", { "is-active": l.value === H }]),
          style: ct({ "--swatch": H }),
          "aria-selected": l.value === H,
          "aria-label": H,
          title: H,
          onClick: (N) => i(H)
        }, null, 14, gd))), 128))
      ])
    ]));
  }
}), xe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, bd = /* @__PURE__ */ xe(_d, [["__scopeId", "data-v-969386c1"]]), rs = "__fil_color_picker_popup__";
let _n = null;
function vd(e) {
  return [
    {
      content: "Change color…",
      callback: (t, n, l) => yd(e, l)
    }
  ];
}
function yd(e, t) {
  var p;
  _n == null || _n(), (p = document.getElementById(rs)) == null || p.remove();
  const n = document.createElement("div");
  n.id = rs;
  const l = 176, o = 260, i = t ? Math.min(t.clientX, window.innerWidth - l - 8) : window.innerWidth / 2 - l / 2, s = t ? Math.min(t.clientY, window.innerHeight - o - 8) : window.innerHeight / 2 - o / 2;
  n.style.cssText = `position:fixed;z-index:10001;top:${Math.max(8, s)}px;left:${Math.max(8, i)}px;`, document.body.appendChild(n);
  function a(g) {
    e.color = g, e.__fx && (e.__fx.color = g), e.properties = e.properties || {}, e.properties.fil_custom_color = !0, r();
  }
  function r() {
    as(null, n), n.remove(), document.removeEventListener("mousedown", d, !0), document.removeEventListener("keydown", u, !0), _n === r && (_n = null);
  }
  function d(g) {
    n.contains(g.target) || r();
  }
  function u(g) {
    g.key === "Escape" && r();
  }
  const f = Oa(bd, {
    modelValue: e.color ?? "#78716c",
    "onUpdate:modelValue": (g) => a(g)
  });
  as(f, n), document.addEventListener("mousedown", d, !0), document.addEventListener("keydown", u, !0), _n = r, Nn(() => {
    var g;
    (g = n.querySelector(".fil-color-swatch")) == null || g.focus();
  });
}
const wd = "fil";
function Ze(e, t = {}) {
  const l = e.prototype;
  if (l._filStyled) return;
  l._filStyled = !0, t.minSize && (l.minSize = t.minSize), l._filFamily = t.family ?? wd, l._filDescription = t.description ?? "", t.badges && (l.badges = t.badges), l.color = Dt.accent, l.bgcolor = Dt.panelAlt;
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
    return Array.isArray(r) && r.push(null, ...vd(this)), a;
  };
}
function Sd(e) {
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
let Wa;
const uo = (e) => Wa = e, ja = (
  /* istanbul ignore next */
  Symbol()
);
function Uo(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var tl;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(tl || (tl = {}));
function za() {
  const e = Vs(!0), t = e.run(() => /* @__PURE__ */ ce({}));
  let n = [], l = [];
  const o = oi({
    install(i) {
      uo(o), o._a = i, i.provide(ja, o), i.config.globalProperties.$pinia = o, l.forEach((s) => n.push(s)), l = [];
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
const Ka = () => {
};
function us(e, t, n, l = Ka) {
  e.push(t);
  const o = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), l());
  };
  return !n && Os() && kr(o), o;
}
function bn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const xd = (e) => e(), cs = Symbol(), xo = Symbol();
function Go(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, l) => e.set(l, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const l = t[n], o = e[n];
    Uo(o) && Uo(l) && e.hasOwnProperty(n) && !/* @__PURE__ */ se(l) && !/* @__PURE__ */ Tt(l) ? e[n] = Go(o, l) : e[n] = l;
  }
  return e;
}
const Cd = (
  /* istanbul ignore next */
  Symbol()
);
function Ad(e) {
  return !Uo(e) || !e.hasOwnProperty(Cd);
}
const { assign: qt } = Object;
function kd(e) {
  return !!(/* @__PURE__ */ se(e) && e.effect);
}
function Fd(e, t, n, l) {
  const { state: o, actions: i, getters: s } = t, a = n.state.value[e];
  let r;
  function d() {
    a || (n.state.value[e] = o ? o() : {});
    const u = /* @__PURE__ */ Jr(n.state.value[e]);
    return qt(u, i, Object.keys(s || {}).reduce((f, p) => (f[p] = oi(q(() => {
      uo(n);
      const g = n._s.get(e);
      return s[p].call(g, g);
    })), f), {}));
  }
  return r = qa(e, d, t, n, l, !0), r;
}
function qa(e, t, n = {}, l, o, i) {
  let s;
  const a = qt({ actions: {} }, n), r = { deep: !0 };
  let d, u, f = [], p = [], g;
  const m = l.state.value[e];
  !i && !m && (l.state.value[e] = {});
  let _;
  function A(B) {
    let O;
    d = u = !1, typeof B == "function" ? (B(l.state.value[e]), O = {
      type: tl.patchFunction,
      storeId: e,
      events: g
    }) : (Go(l.state.value[e], B), O = {
      type: tl.patchObject,
      payload: B,
      storeId: e,
      events: g
    });
    const E = _ = Symbol();
    Nn().then(() => {
      _ === E && (d = !0);
    }), u = !0, bn(f, O, l.state.value[e]);
  }
  const x = i ? function() {
    const { state: O } = n, E = O ? O() : {};
    this.$patch((K) => {
      qt(K, E);
    });
  } : (
    /* istanbul ignore next */
    Ka
  );
  function S() {
    s.stop(), f = [], p = [], l._s.delete(e);
  }
  const k = (B, O = "") => {
    if (cs in B)
      return B[xo] = O, B;
    const E = function() {
      uo(l);
      const K = Array.from(arguments), F = [], V = [];
      function H(I) {
        F.push(I);
      }
      function N(I) {
        V.push(I);
      }
      bn(p, {
        args: K,
        name: E[xo],
        store: y,
        after: H,
        onError: N
      });
      let $;
      try {
        $ = B.apply(this && this.$id === e ? this : y, K);
      } catch (I) {
        throw bn(V, I), I;
      }
      return $ instanceof Promise ? $.then((I) => (bn(F, I), I)).catch((I) => (bn(V, I), Promise.reject(I))) : (bn(F, $), $);
    };
    return E[cs] = !0, E[xo] = O, E;
  }, v = {
    _p: l,
    // _s: scope,
    $id: e,
    $onAction: us.bind(null, p),
    $patch: A,
    $reset: x,
    $subscribe(B, O = {}) {
      const E = us(f, B, O.detached, () => K()), K = s.run(() => $e(() => l.state.value[e], (F) => {
        (O.flush === "sync" ? u : d) && B({
          storeId: e,
          type: tl.direct,
          events: g
        }, F);
      }, qt({}, r, O)));
      return E;
    },
    $dispose: S
  }, y = /* @__PURE__ */ Gt(v);
  l._s.set(e, y);
  const T = (l._a && l._a.runWithContext || xd)(() => l._e.run(() => (s = Vs()).run(() => t({ action: k }))));
  for (const B in T) {
    const O = T[B];
    if (/* @__PURE__ */ se(O) && !kd(O) || /* @__PURE__ */ Tt(O))
      i || (m && Ad(O) && (/* @__PURE__ */ se(O) ? O.value = m[B] : Go(O, m[B])), l.state.value[e][B] = O);
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
function pi(e, t, n) {
  let l, o;
  const i = typeof t == "function";
  typeof e == "string" ? (l = e, o = i ? n : t) : (o = e, l = e.id);
  function s(a, r) {
    const d = ru();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (d ? Yn(ja, null) : null), a && uo(a), a = Wa, a._s.has(l) || (i ? qa(l, t, o, a) : Fd(l, o, a)), a._s.get(l);
  }
  return s.$id = l, s;
}
let un = null;
function Md(e) {
  return un || (un = za(), un);
}
function mi() {
  return un || (un = za()), un;
}
const Ld = { class: "fil-node-shell" }, Id = /* @__PURE__ */ we({
  __name: "FilNodeShell",
  props: {
    root: {},
    state: {},
    comfyClass: {}
  },
  setup(e) {
    return (t, n) => (C(), M("div", Ld, [
      (C(), Ce(Du(e.root), { state: e.state }, null, 8, ["state"]))
    ]));
  }
}), Dd = /* @__PURE__ */ xe(Id, [["__scopeId", "data-v-cb614e72"]]);
function Wo(e, t, n) {
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
function Xa(e, t, n, l = null) {
  let o = e instanceof Element ? e : null;
  for (; o && o !== l; ) {
    if (Wo(o, t, n)) return !0;
    o = o.parentElement;
  }
  return !1;
}
function Pd(e, t, n, l) {
  const o = (i) => {
    const s = i.getBoundingClientRect();
    return s.width > 0 && s.height > 0 && e >= s.left && e <= s.right && t >= s.top && t <= s.bottom;
  };
  for (const i of document.querySelectorAll(".dom-widget"))
    if (o(i)) {
      if (Wo(i, n, l)) return i;
      for (const s of i.querySelectorAll("*"))
        if (o(s) && Wo(s, n, l)) return s;
    }
  return null;
}
function Nd(e, t) {
  for (let n = e; n; n = Object.getPrototypeOf(n)) {
    const l = Object.getOwnPropertyDescriptor(n, t);
    if (l) return !!(l.writable || l.set);
  }
  return !0;
}
const Rd = "__filVueMounted";
function gt(e, t, n, l) {
  const o = e;
  if (typeof o.addDOMWidget != "function")
    return console.warn(`[FiL_Design_ImageMind] domWidgetHost: node.addDOMWidget not available for "${t}" — ComfyUI core too old?`), null;
  const i = document.createElement("div");
  i.className = "fil-vue-host", i.style.width = "100%", i.style.boxSizing = "border-box", i.style.height = "auto", i[Rd] = !0, i.addEventListener(
    "wheel",
    (E) => {
      var F, V;
      if (Xa(E.target, E.deltaX, E.deltaY, i.parentElement)) return;
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
    f && (Nd(f, "height") && (f.height = a), f.computeSize = () => [i.clientWidth || 380, a]);
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
  const A = fi(Dd, { root: n, state: s, comfyClass: o.comfyClass ?? "default" }).use(mi());
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
const ds = 4, Td = {
  info: 3500,
  success: 3e3,
  warning: 5e3,
  error: 6e3
};
let Ed = 1;
const wn = /* @__PURE__ */ pi("fil/toast", () => {
  const e = /* @__PURE__ */ ce([]), t = /* @__PURE__ */ ce([]);
  function n(d, u, f = {}) {
    const p = {
      id: Ed++,
      level: d,
      text: u == null ? "" : String(u),
      timeout: f.timeout ?? Td[d],
      sticky: !!f.sticky,
      action: f.action ?? null
    };
    return e.value.length < ds ? e.value.push(p) : t.value.push(p), p;
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
    e.value = e.value.filter((u) => u.id !== d), t.value.length > 0 && e.value.length < ds && e.value.push(t.value.shift());
  }
  function r() {
    e.value = [], t.value = [];
  }
  return { items: e, queue: t, info: l, success: o, warning: i, error: s, push: n, dismiss: a, dismissAll: r };
});
function Vd() {
  var t, n;
  return ((n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.toast) ?? null;
}
function yl(e, t) {
  const n = Vd();
  if (n != null && n.addAlert && (e === "info" || e === "success" || e === "warning" || e === "error"))
    try {
      n.addAlert(t);
      return;
    } catch (l) {
      console.warn("[FiL_Design_ImageMind toast] extensionManager.toast failed:", l);
    }
  wn().push(e, t, {});
}
const Bt = {
  info: (e) => yl("info", e),
  success: (e) => yl("success", e),
  warning: (e) => yl("warning", e),
  error: (e) => yl("error", e),
  // Direct Pinia access for Vue components that want actions/sticky/toasts.
  infoRich: (e, t) => wn().info(e, t),
  successRich: (e, t) => wn().success(e, t),
  warningRich: (e, t) => wn().warning(e, t),
  errorRich: (e, t) => wn().error(e, t),
  dismissAll: () => wn().dismissAll()
};
function fs() {
  var t, n, l, o, i, s, a, r;
  return !!(((o = (l = (n = (t = globalThis.app) == null ? void 0 : t.extensionManager) == null ? void 0 : n.setting) == null ? void 0 : l.get) == null ? void 0 : o.call(l, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? ((r = (a = (s = (i = globalThis.app) == null ? void 0 : i.ui) == null ? void 0 : s.settings) == null ? void 0 : a.getSettingValue) == null ? void 0 : r.call(a, "FiL_Design_ImageMind.ConnectionFX.ShowToasts", !0)) ?? !0);
}
function ps() {
  function e(l, o, i, s) {
  }
  function t(l, o, i, s) {
    fs() && Bt.success("Connected");
  }
  function n(l, o) {
    fs() && Bt.info("Disconnected");
  }
  return { onConnectionsChange: e, onConnect: t, onDisconnect: n };
}
function et(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype, n = t.onConnect;
  t.onConnect = function(...o) {
    const { onConnect: i } = ps();
    return i(...o), n == null ? void 0 : n.apply(this, o);
  };
  const l = t.onDisconnect;
  t.onDisconnect = function(...o) {
    const { onDisconnect: i } = ps();
    return i(...o), l == null ? void 0 : l.apply(this, o);
  };
}
const Od = /* @__PURE__ */ ht(() => Promise.resolve().then(() => Nh)), $d = {
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
      return Object.defineProperty(g, "node", { value: d, enumerable: !1, configurable: !0 }), d._filSeedState = g, gt(d, "fil_seed_view", Od, { state: g, height: 52 }), r;
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
}, Bd = /* @__PURE__ */ ht(() => Promise.resolve().then(() => kg)), Hd = {
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
      return Object.defineProperty(x, "node", { value: u, enumerable: !1, configurable: !0 }), u._filProviderState = x, gt(u, "fil_provider_view", Bd, { state: x, height: 180 }), d;
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
}, Ud = 10, Gd = 20;
function ms(e, t) {
  var o;
  const n = e;
  let l = 0;
  for (const i of t) {
    const s = (o = n.inputs) == null ? void 0 : o.find((r) => r.name === i);
    if (!s) continue;
    s.alwaysVisible = !0;
    const a = ie(e, i);
    a && (a.y = Gd * (l + 1)), l += 1;
  }
  Ya(n);
}
function Wd(e, t) {
  var s, a;
  const n = Kd(), l = (s = e.pos) == null ? void 0 : s[1], o = (a = e.size) == null ? void 0 : a[1];
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
    const g = Math.round(p - Ud);
    u.y !== g && (u.y = g, i = !0);
  }
  (i || zd(e, t)) && Ya(e);
}
function jd(e, t) {
  var o;
  const n = e, l = {};
  for (const i of t) {
    const s = (o = n.inputs) == null ? void 0 : o.find((a) => a.name === i);
    l[i] = (s == null ? void 0 : s.link) != null;
  }
  return l;
}
function zd(e, t) {
  return t.some(({ name: n }) => {
    var o, i;
    const l = (i = (o = e.inputs) == null ? void 0 : o.find((s) => s.name === n)) == null ? void 0 : i.boundingRect;
    return !l || !l[2] || !l[3];
  });
}
function Kd() {
  var o;
  const e = (o = globalThis.app) == null ? void 0 : o.canvas, t = e == null ? void 0 : e.canvas, n = e == null ? void 0 : e.ds;
  return !(t instanceof HTMLCanvasElement) || !(n != null && n.offset) ? null : { scale: n.scale || 1, offsetY: n.offset[1] ?? 0, canvasTop: t.getBoundingClientRect().top };
}
function Ya(e) {
  var t, n;
  e._widgetSlotsDirty = !0, (n = (t = e.graph) == null ? void 0 : t.setDirtyCanvas) == null || n.call(t, !0, !0);
}
const Ja = "fil_state";
function qd(e, t) {
  var o;
  const n = e, l = (o = n.onSerialize) == null ? void 0 : o.bind(n);
  n.onSerialize = (i) => {
    l == null || l(i);
    try {
      i[Ja] = JSON.parse(JSON.stringify({
        nodeState: { ...t.nodeState },
        ui: { ...t.ui },
        lastRunSeed: t.lastRunSeed ?? null
      }));
    } catch (s) {
      console.warn("[FiL_Design_ImageMind] could not serialize panel state:", s);
    }
  };
}
function Xd(e, t) {
  const n = t == null ? void 0 : t[Ja];
  if (!n || typeof n != "object") return !1;
  const l = n, o = /* @__PURE__ */ Gt(e);
  if (l.nodeState && typeof l.nodeState == "object")
    for (const [i, s] of Object.entries(l.nodeState))
      o.nodeState[i] = s;
  return l.ui && typeof l.ui == "object" && Object.assign(o.ui, l.ui), l.lastRunSeed !== void 0 && (o.lastRunSeed = l.lastRunSeed), !0;
}
const Yd = /* @__PURE__ */ ht(() => Promise.resolve().then(() => Ug)), hs = ["prompt", "negative_prompt", "custom_style"], Qa = "fil_scanner_view";
function gs(e) {
  for (const t of e.widgets || [])
    t.name !== Qa && (t.hidden = !0);
}
const Jd = {
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
      p.seed_mode = "random", gs(u);
      const g = {
        nodeState: jt(u, p),
        initialValues: f,
        ui: {},
        lastRunSeed: null
      };
      return Object.defineProperty(g, "node", { value: u, enumerable: !1, configurable: !0 }), u._filScannerSeedState = g, qd(u, g), ms(u, hs), gt(u, Qa, Yd, { state: g, height: 580, growable: !0 }), d;
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
      return Xd(f, r[0]), gs(u), ms(u, hs), d;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return _t(this), a == null ? void 0 : a.apply(this, r);
    }, et(e);
  }
}, Qd = /* @__PURE__ */ ht(() => Promise.resolve().then(() => zg)), Zd = {
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
      return u._filCleanerState = g, gt(u, "fil_cleaner_view", Qd, { state: g, height: 185 }), d;
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
}, ef = /* @__PURE__ */ ht(() => Promise.resolve().then(() => fr)), tf = {
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
      return p._filUpscaleState = _, gt(p, "fil_upscale_view", ef, { state: _, height: 420 }), f;
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
}, nf = /* @__PURE__ */ ht(() => Promise.resolve().then(() => fr)), lf = {
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
      return p._filUpscaleState = _, gt(p, "fil_upscale_simple_view", nf, { state: _, height: 420 }), f;
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
}, of = {
  id: "FiLTileAssembly",
  register(e, t) {
    Ze(e, {
      minSize: [270, 200],
      family: "image",
      description: "Recombines processed tiles back into one image, feathered across the real overlap zones.",
      badges: [{ text: "tile", color: "#62c987", text_color: "#1a1a1a" }]
    }), et(e);
  }
}, sf = {
  id: "FiLKSampler",
  register(e, t) {
    Ze(e, {
      minSize: [270, 260],
      family: "sampling",
      description: "Full sampler/scheduler set, passthrough outputs, preview, HighRes-fix script.",
      badges: [{ text: "sampler", color: "#7aa2f7", text_color: "#0b0e14" }]
    }), et(e);
  }
}, af = /* @__PURE__ */ ht(() => Promise.resolve().then(() => i_)), jo = {
  upscale_by: 1.25,
  denoise: 0.56,
  iterations: 1,
  strength: 1,
  seed: 0,
  hires_steps: 12
}, zo = {
  upscale_type: "latent",
  hires_ckpt_name: "(use same)",
  latent_upscaler: "nearest-exact",
  pixel_upscaler: "",
  control_net_name: "",
  preprocessor: "none"
}, Ko = {
  use_same_seed: !0,
  use_controlnet: !1
}, rf = [
  ...Object.keys(jo),
  ...Object.keys(zo),
  ...Object.keys(Ko)
], uf = {
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
    const l = e.prototype, o = (r, d) => {
      for (const u of Object.keys(jo))
        d[u] = be(ie(r, u), "number", jo[u]);
      for (const u of Object.keys(zo))
        d[u] = be(ie(r, u), "string", zo[u]);
      for (const u of Object.keys(Ko))
        d[u] = be(ie(r, u), "boolean", Ko[u]);
    }, i = l.onNodeCreated;
    l.onNodeCreated = function(...r) {
      const d = i == null ? void 0 : i.apply(this, r), u = this, f = {};
      o(u, f);
      for (const m of rf) {
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
      return Object.defineProperty(g, "node", { value: u, enumerable: !1, configurable: !0 }), u._filHiResFixState = g, gt(u, "fil_hiresfix_view", af, { state: g, height: 420 }), d;
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
}, cf = {
  id: "FiLNoiseControl",
  register(e, t) {
    Ze(e, {
      minSize: [270, 220],
      family: "sampling",
      description: "RNG source + seed-variation script for FiLKSampler.",
      badges: [{ text: "script", color: "#7aa2f7", text_color: "#0b0e14" }]
    }), et(e);
  }
}, df = {
  id: "FiLImageDecomposer",
  register(e, t) {
    Ze(e, {
      minSize: [300, 240],
      family: "llm",
      description: "Decomposes image or prompt into distinct visual layers.",
      badges: [{ text: "vision", color: "#bb9af7", text_color: "#0b0e14" }]
    }), et(e);
  }
}, ff = /* @__PURE__ */ ht(() => Promise.resolve().then(() => u_)), _s = [
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
function Co(e) {
  if (!e) return;
  const t = e._filStyleMixerState;
  if (t != null && t.ui && (t.ui.slotVersion = (t.ui.slotVersion ?? 0) + 1), !e._allInputs && Array.isArray(e.inputs) && (e._allInputs = [...e.inputs]), !e._allInputs) return;
  const n = (s) => {
    const a = e._allInputs.find((r) => r && r.name === s);
    return !!(a && a.link != null);
  }, l = n("image_2"), o = n("image_3"), i = /* @__PURE__ */ new Set();
  i.add("config"), i.add("fusion_mode"), i.add("base_prompt"), i.add("image_1"), i.add("image_2"), l && i.add("image_3"), o && i.add("image_4"), e.inputs = e._allInputs.filter((s) => s && i.has(s.name)), typeof e.setSize == "function" && typeof e.computeSize == "function" && e.setSize(e.computeSize()), typeof e.setDirtyCanvas == "function" && e.setDirtyCanvas(!0, !0);
}
const pf = {
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
      for (const _ of _s) {
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
      return u._filStyleMixerState = m, gt(u, "fil_style_mixer_view", ff, { state: m, height: 480 }), Co(this), d;
    };
    const i = l.onConfigure;
    l.onConfigure = function(...r) {
      const d = i == null ? void 0 : i.apply(this, r), u = this, f = u._filStyleMixerState;
      if (f)
        for (const p of _s) {
          const g = ie(u, p);
          if (!g) continue;
          const m = p.includes("weight") ? "number" : "string", _ = m === "number" ? 0.5 : "(None)";
          f.nodeState[p] = be(g, m, _);
        }
      return Co(this), d;
    };
    const s = l.onConnectionsChange;
    l.onConnectionsChange = function(r, d, u, f, p) {
      const g = s == null ? void 0 : s.apply(this, [r, d, u, f, p]);
      return (r === 1 || (r == null ? void 0 : r.name) === "input") && Co(this), g;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return _t(this), a == null ? void 0 : a.apply(this, r);
    }, et(e);
  }
}, mf = /* @__PURE__ */ ht(() => Promise.resolve().then(() => w_)), bs = [
  "method",
  "strength",
  "saturate",
  "temperature",
  "tint",
  "preserve_skin"
], hf = {
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
      for (const m of bs) {
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
      return d._filColorWizardState = g, gt(d, "fil_color_wizard_view", mf, { state: g, height: 320 }), r;
    };
    const i = l.onConfigure;
    l.onConfigure = function(...a) {
      const r = i == null ? void 0 : i.apply(this, a), d = this, u = d._filColorWizardState;
      if (u)
        for (const f of bs) {
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
}, gf = /* @__PURE__ */ ht(() => Promise.resolve().then(() => k_));
function Ao(e) {
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
const _f = {
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
      return Object.defineProperty(g, "node", { value: u, enumerable: !1, configurable: !0 }), u._filSwitchState = g, gt(u, "fil_switch_view", gf, { state: g, height: 46 }), Ao(u), d;
    };
    const i = l.onConfigure;
    l.onConfigure = function(...r) {
      const d = i == null ? void 0 : i.apply(this, r), u = this, f = u._filSwitchState;
      return f && (f.nodeState.enable = be(ie(u, "enable"), "boolean", !0)), Ao(u), d;
    };
    const s = l.onConnectionsChange;
    l.onConnectionsChange = function(...r) {
      const d = s == null ? void 0 : s.apply(this, r);
      return Ao(this), d;
    };
    const a = l.onRemoved;
    l.onRemoved = function(...r) {
      return _t(this), a == null ? void 0 : a.apply(this, r);
    }, et(e);
  }
}, bf = /* @__PURE__ */ ht(() => Promise.resolve().then(() => I_)), Za = "fil_dataset_forge_view", vf = {
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
}, yf = {
  repeats: 10,
  caption_max_words: 60,
  bucket_step: 64,
  jpg_quality: 95,
  seed: -1
}, wf = { dry_run: !1 };
function vs(e) {
  for (const t of e.widgets || [])
    t.name !== Za && (t.hidden = !0);
}
function ys(e) {
  const t = ie(e, "control_after_generate");
  t && (t.value = "fixed");
}
function ws(e, t) {
  for (const [n, l] of Object.entries(vf))
    e[n] = be(ie(t, n), "string", l);
  for (const [n, l] of Object.entries(yf))
    e[n] = be(ie(t, n), "number", l);
  for (const [n, l] of Object.entries(wf))
    e[n] = be(ie(t, n), "boolean", l);
}
const Sf = {
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
      ws(u, d), ys(d), vs(d);
      const f = {
        nodeState: jt(d, u),
        initialValues: { ...u },
        ui: {}
      };
      return Object.defineProperty(f, "node", { value: d, enumerable: !1, configurable: !0 }), d._filDatasetForgeState = f, gt(d, Za, bf, { state: f, height: 420 }), r;
    };
    const i = l.onConfigure;
    l.onConfigure = function(...a) {
      const r = i == null ? void 0 : i.apply(this, a), d = this, u = d._filDatasetForgeState;
      return u && (ws(u.nodeState, d), ys(d), vs(d)), r;
    };
    const s = l.onRemoved;
    l.onRemoved = function(...a) {
      return _t(this), s == null ? void 0 : s.apply(this, a);
    }, et(e);
  }
}, xf = [
  $d,
  Hd,
  Jd,
  Zd,
  tf,
  lf,
  of,
  sf,
  uf,
  cf,
  df,
  pf,
  hf,
  _f,
  Sf
], er = Object.fromEntries(
  xf.map((e) => [e.id, e])
), wl = /* @__PURE__ */ ce({});
let Ss = !1;
const Gl = /* @__PURE__ */ pi("fil/help", () => {
  const e = /* @__PURE__ */ ce(null);
  function t(a) {
    for (const [r, d] of Object.entries(a))
      wl.value[r] = d;
  }
  function n() {
    Ss || (Ss = !0, Promise.resolve().then(() => P_).then(({ HELP_DEFAULTS: a }) => t(a)).catch((a) => console.warn("[FiL_Design_ImageMind] help defaults import failed:", a)));
  }
  function l(a) {
    return wl.value[a];
  }
  function o() {
    return Object.values(wl.value);
  }
  function i(a) {
    n(), e.value = a;
  }
  function s() {
    e.value = null;
  }
  return {
    registry: wl,
    activeHelpId: e,
    ensureHelpDefaultsInjected: n,
    registerAll: t,
    get: l,
    list: o,
    value_open: i,
    value_close: s
  };
}), Cf = {
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
function tr(e) {
  return Cf[e];
}
const Af = ["title", "aria-label", "innerHTML"], kf = /* @__PURE__ */ we({
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
      innerHTML: c(tr)(e.name)
    }, null, 12, Af));
  }
}), Ht = /* @__PURE__ */ xe(kf, [["__scopeId", "data-v-dfb78d9f"]]), Ff = ["aria-label"], Mf = { class: "fil-modal-header" }, Lf = { class: "fil-modal-title" }, If = { class: "fil-modal-body" }, Df = /* @__PURE__ */ we({
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
        p ? (s.value = document.activeElement, Nn(() => {
          var _;
          (_ = (i.value ? f(i.value) : [])[0] || i.value) == null || _.focus();
        })) : ((g = s.value) == null || g.focus(), s.value = null);
      }
    ), mn(() => {
      document.addEventListener("keydown", d);
    }), Rn(() => {
      document.removeEventListener("keydown", d);
    }), (p, g) => (C(), Ce(ra, { to: "body" }, [
      R(xc, { name: "fil-modal" }, {
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
              D("div", Mf, [
                D("span", Lf, Y(e.title), 1),
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
              D("div", If, [
                Nu(p.$slots, "default", {}, void 0, !0)
              ])
            ], 4)
          ], 8, Ff)) : ne("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Mn = /* @__PURE__ */ xe(Df, [["__scopeId", "data-v-952a8f2d"]]), Pf = { class: "fil-help-title" }, Nf = {
  key: 0,
  class: "fil-help-body"
}, Rf = { key: 1 }, Tf = {
  key: 2,
  class: "fil-help-table"
}, Ef = {
  key: 3,
  class: "fil-help-code"
}, Vf = {
  key: 1,
  class: "fil-help-empty"
}, Of = /* @__PURE__ */ we({
  __name: "FilHelpPopup",
  setup(e) {
    const t = Gl(), n = q(() => {
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
    }), (o, i) => (C(), Ce(Mn, {
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
            D("h2", Pf, Y(n.value.title), 1),
            n.value.body ? (C(), M("p", Nf, Y(n.value.body), 1)) : ne("", !0),
            (s = n.value.bullets) != null && s.length ? (C(), M("ul", Rf, [
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
            n.value.table ? (C(), M("table", Tf, [
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
            n.value.code ? (C(), M("pre", Ef, [
              D("code", null, Y(n.value.code), 1)
            ])) : ne("", !0)
          ], 64)) : (C(), M("p", Vf, "No help available for this node."))
        ];
      }),
      _: 1
    }, 8, ["open"]));
  }
}), $f = /* @__PURE__ */ xe(Of, [["__scopeId", "data-v-bfee41d7"]]);
let ko = null;
function Bf(e) {
  if (ko) return;
  const t = document.createElement("div");
  t.id = "__fil_help_popup_host", document.body.appendChild(t), ko = fi($f).use(mi()), ko.mount(t), console.info("[FiL_Design_ImageMind] help popup mounted");
}
const Hf = "FiL_Design_ImageMind.Shortcuts.Enabled", Uf = "__cheatsheet__", Gf = [
  "#comfy-search-input",
  'input[name="search"]',
  'input[aria-label="Search"]',
  "#search-input",
  'input[placeholder*="search" i]'
], Wf = [
  {
    id: "FiL_Design_ImageMind.helpCheatsheet",
    label: "FiL_Design_ImageMind — Keyboard cheatsheet",
    icon: "?",
    function: qo
  },
  {
    id: "FiL_Design_ImageMind.focusSearch",
    label: "FiL_Design_ImageMind — Focus add-node search",
    icon: "/",
    function: nr
  }
], jf = [
  { commandId: "FiL_Design_ImageMind.helpCheatsheet", combo: { key: "?", shift: !0 } },
  // NB: Ctrl+Shift+K is reserved by core (Workspace.ToggleBottomPanel) — binding it
  // via the native API throws a duplicate-keybinding error, so we don't register it.
  { commandId: "FiL_Design_ImageMind.focusSearch", combo: { key: "/" } }
];
function zf(e) {
  if (!e || typeof e != "object") return !1;
  const t = String(e.tagName || "").toLowerCase();
  return t === "input" || t === "textarea" || t === "select" || e.isContentEditable === !0;
}
function Kf() {
  for (const e of Gf) {
    const t = document.querySelector(e);
    if (t) return t;
  }
  return null;
}
function qo() {
  var t;
  const e = Gl();
  e.ensureHelpDefaultsInjected(), (t = e.value_open) == null || t.call(e, Uf);
}
function nr() {
  const e = Kf();
  if (!e) {
    Bt.info("ComfyUI search field not found");
    return;
  }
  try {
    e.focus(), "select" in e && e.select();
  } catch {
  }
}
function qf(e) {
  if (!!e.extensionManager) {
    console.info("[FiL_Design_ImageMind] shortcuts registered via native commands API");
    return;
  }
  window.addEventListener("keydown", (n) => Xf(n, e), !0), console.info("[FiL_Design_ImageMind] shortcuts installed (fallback keydown handler)");
}
function Xf(e, t) {
  var i, s, a, r, d, u, f, p, g;
  let n = !0;
  try {
    n = !!(((r = (a = (s = (i = globalThis.app) == null ? void 0 : i.extensionManager) == null ? void 0 : s.setting) == null ? void 0 : a.get) == null ? void 0 : r.call(a, Hf, !0)) ?? !0);
  } catch {
  }
  if (!n) return;
  const l = e.target, o = zf(l);
  if (e.key === "Escape") {
    try {
      const m = Gl();
      (d = m.value_close) == null || d.call(m);
    } catch {
    }
    o && ((u = l.blur) == null || u.call(l)), (f = e.preventDefault) == null || f.call(e);
    return;
  }
  if (!o) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "K" || e.key === "k")) {
      qo(), e.preventDefault();
      return;
    }
    if (e.key === "?" || e.shiftKey && e.key === "/") {
      if (e.shiftKey) qo();
      else {
        const m = t.canvas, _ = (m == null ? void 0 : m.selected_nodes) ?? {}, A = Object.values(_).filter(Boolean);
        if (A.length === 1) {
          const x = ((p = A[0]) == null ? void 0 : p.comfyClass) ?? "default", S = Gl();
          S.ensureHelpDefaultsInjected(), (g = S.value_open) == null || g.call(S, x);
        } else
          Bt.info("Select exactly one FiL_Design_ImageMind node, then press ?");
      }
      e.preventDefault();
      return;
    }
    e.key === "/" && !e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey && (nr(), e.preventDefault());
  }
}
function Yf(e) {
  qf(e);
}
let xs = !1;
function Jf() {
  xs || typeof window > "u" || (xs = !0, window.addEventListener(
    "wheel",
    (e) => {
      if (e.ctrlKey || e.metaKey) return;
      if (Xa(e.target, e.deltaX, e.deltaY)) {
        e.stopImmediatePropagation();
        return;
      }
      if (!(e.target instanceof HTMLCanvasElement)) return;
      const t = Pd(e.clientX, e.clientY, e.deltaX, e.deltaY);
      if (!t) return;
      e.preventDefault(), e.stopImmediatePropagation();
      const n = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? t.clientHeight : 1;
      t.scrollBy({ left: e.deltaX * n, top: e.deltaY * n });
    },
    { capture: !0, passive: !1 }
  ), console.info("[FiL_Design_ImageMind] global scroll guard installed"));
}
const lr = "FiL_Design_ImageMind", Ln = "🎨 FiL ImageMind", Yt = "/fil_design_imagemind", pn = `[${lr}]`, Qf = `${lr}.UI`;
async function or(e) {
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
function ir() {
  var t;
  const e = globalThis;
  if ((t = e.api) != null && t.fetchApi) return (n, l) => e.api.fetchApi(n, l);
  if (e.fetch) return e.fetch.bind(globalThis);
  throw new Error(`${pn} no HTTP transport (api.fetchApi or window.fetch undefined)`);
}
async function jn(e) {
  const t = await ir()(e);
  return or(t);
}
async function Xo(e, t) {
  const n = await ir()(e, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  });
  return or(n);
}
const vn = {
  loadAccounts: () => jn(`${Yt}/auth`),
  saveAccounts: (e) => Xo(`${Yt}/auth`, {
    accounts: e
  }),
  loadModels: (e, t = !1) => jn(`${Yt}/models/${encodeURIComponent(e)}${t ? "?force=1" : ""}`),
  probe: (e, t = "") => Xo(`${Yt}/provider_probe`, { provider: e, model: t }),
  listProviders: () => jn(`${Yt}/providers`),
  nodeContracts: () => jn(`${Yt}/node_contracts`)
}, Zf = 3e5, ep = ["ollama", "lmstudio", "openai", "google", "groq", "openrouter", "cloudflare"], Sn = ep, hi = /* @__PURE__ */ pi("fil/providers", () => {
  const e = /* @__PURE__ */ ce({}), t = /* @__PURE__ */ ce({}), n = /* @__PURE__ */ ce({}), l = /* @__PURE__ */ ce({}), o = /* @__PURE__ */ ce(null), i = q(() => Object.fromEntries(
    Object.entries(e.value).filter(([, x]) => (x == null ? void 0 : x.configured) || (x == null ? void 0 : x.account_id) || (x == null ? void 0 : x.base_url))
  ));
  async function s() {
    try {
      const x = await vn.loadAccounts();
      e.value = x.accounts || {}, o.value = null;
    } catch (x) {
      o.value = x instanceof Error ? x.message : String(x);
    }
  }
  async function a(x, S) {
    try {
      const k = await vn.saveAccounts({ [x]: S });
      e.value = k.accounts || {}, o.value = null, u(x, !0);
    } catch (k) {
      throw o.value = k instanceof Error ? k.message : String(k), k;
    }
  }
  async function r(x) {
    const S = await vn.saveAccounts({
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
    if (k && !S && !k.error && k.cachedAt > 0 && Date.now() - k.cachedAt < Zf)
      return k.list;
    k ? k.loading = !0 : t.value[x] = { list: [], visionModels: [], cachedAt: 0, loading: !0 };
    try {
      const v = await vn.loadModels(x, S), y = v.models || [];
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
      const k = await vn.probe(x, S);
      return n.value[x] = k, k;
    } catch (k) {
      o.value = k instanceof Error ? k.message : String(k);
      return;
    }
  }
  async function g() {
    try {
      const x = await vn.listProviders();
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
    PROVIDER_LIST: Sn,
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
}), tp = ["title", "disabled", "aria-disabled"], np = {
  key: 0,
  class: "fil-w-btn-spinner"
}, lp = ["innerHTML"], op = { key: 2 }, ip = /* @__PURE__ */ we({
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
    const n = e, l = q(() => n.icon ? tr(n.icon) : ""), o = t, i = q(() => [
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
      e.loading ? (C(), M("span", np)) : ne("", !0),
      e.icon && !e.loading ? (C(), M("span", {
        key: 1,
        class: "fil-w-btn-glyph",
        innerHTML: l.value
      }, null, 8, lp)) : ne("", !0),
      e.label ? (C(), M("span", op, Y(e.loading ? "" : e.label), 1)) : ne("", !0)
    ], 10, tp));
  }
}), tt = /* @__PURE__ */ xe(ip, [["__scopeId", "data-v-75e79c80"]]), Wl = {
  ollama: "Ollama",
  lmstudio: "LM Studio",
  openai: "OpenAI",
  groq: "Groq",
  google: "Google AI",
  openrouter: "OpenRouter",
  cloudflare: "Cloudflare"
}, gi = {
  ollama: "provider-ollama",
  lmstudio: "provider-lmstudio",
  openai: "provider-openai",
  groq: "provider-groq",
  google: "provider-google",
  openrouter: "provider-openrouter",
  cloudflare: "provider-cloudflare"
}, sp = { class: "fil-pm-root" }, ap = ["onClick"], rp = { class: "fil-pm-icon" }, up = { class: "fil-pm-name" }, cp = {
  key: 0,
  class: "fil-pm-disp"
}, dp = ["title"], fp = { class: "fil-pm-fields" }, pp = { class: "fil-pm-field" }, mp = ["onUpdate:modelValue", "placeholder", "onKeydown"], hp = { class: "fil-pm-field" }, gp = ["onUpdate:modelValue", "onKeydown"], _p = {
  key: 0,
  class: "fil-pm-field"
}, bp = ["onUpdate:modelValue", "onKeydown"], vp = { class: "fil-pm-actions" }, yp = {
  key: 0,
  class: "fil-pm-age"
}, wp = {
  key: 0,
  class: "fil-pm-err"
}, Sp = {
  key: 1,
  class: "fil-pm-err"
}, xp = {
  key: 2,
  class: "fil-pm-models"
}, Cp = {
  key: 0,
  class: "fil-pm-vision-badge",
  title: "Vision-capable"
}, Ap = {
  key: 3,
  class: "fil-pm-err fil-pm-global-err"
}, kp = /* @__PURE__ */ we({
  __name: "ProviderManager",
  setup(e) {
    const t = hi(), n = /* @__PURE__ */ ce(
      Object.fromEntries(Sn.map((v) => [v, { key: "", base_url: "", account_id: "" }]))
    ), l = /* @__PURE__ */ ce({}), o = /* @__PURE__ */ ce({}), i = /* @__PURE__ */ ce({}), s = /* @__PURE__ */ ce({});
    mn(async () => {
      await Promise.all([t.loadAccounts(), t.loadDisplayNames()]);
      for (const v of Sn) {
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
      for (const v of Sn) {
        const y = t.accounts[v];
        (y != null && y.configured || y != null && y.local || y != null && y.base_url) && x(v);
      }
    });
    const a = Wl, r = gi;
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
    return (v, y) => (C(), M("div", sp, [
      (C(!0), M(fe, null, Ne(c(Sn), (w) => {
        var T, B, O, E, K, F;
        return C(), M("div", {
          key: w,
          class: _e(["fil-pm-card", { "fil-pm-card--collapsed": g(w) }])
        }, [
          D("div", {
            class: _e(["fil-pm-header", { "fil-pm-header--clickable": f(w) === "off" }]),
            onClick: (V) => m(w)
          }, [
            D("span", rp, [
              R(Ht, {
                name: c(r)[w],
                size: 20
              }, null, 8, ["name"])
            ]),
            D("span", up, Y(c(a)[w]), 1),
            c(t).displayNames[w] ? (C(), M("span", cp, "(" + Y(c(t).displayNames[w]) + ")", 1)) : ne("", !0),
            D("span", {
              class: _e(["fil-pm-status", `fil-pm-status--${f(w)}`]),
              title: p[f(w)]
            }, [
              y[0] || (y[0] = D("span", { class: "fil-pm-dot" }, null, -1)),
              Vl(" " + Y(p[f(w)]), 1)
            ], 10, dp),
            f(w) === "off" ? (C(), M("span", {
              key: 1,
              class: _e(["fil-pm-chevron", { "fil-pm-chevron--open": s.value[w] }])
            }, [
              R(Ht, {
                name: "chevronRight",
                size: 12
              })
            ], 2)) : ne("", !0)
          ], 10, ap),
          g(w) ? ne("", !0) : (C(), M(fe, { key: 0 }, [
            D("div", fp, [
              D("label", pp, [
                y[1] || (y[1] = D("span", { class: "fil-pm-field-label" }, "API Key", -1)),
                Qe(D("input", {
                  "onUpdate:modelValue": (V) => n.value[w].key = V,
                  type: "password",
                  class: _e(["fil-pm-input", d(n.value[w].key)]),
                  placeholder: (T = c(t).accounts[w]) != null && T.configured ? "•••••••• (saved)" : "sk-...",
                  onKeydown: Al((V) => _(w), ["enter"])
                }, null, 42, mp), [
                  [st, n.value[w].key]
                ])
              ]),
              D("label", hp, [
                y[2] || (y[2] = D("span", { class: "fil-pm-field-label" }, "Base URL", -1)),
                Qe(D("input", {
                  "onUpdate:modelValue": (V) => n.value[w].base_url = V,
                  type: "text",
                  class: _e(["fil-pm-input", d(n.value[w].base_url)]),
                  placeholder: "http://localhost:11434",
                  onKeydown: Al((V) => _(w), ["enter"])
                }, null, 42, gp), [
                  [st, n.value[w].base_url]
                ])
              ]),
              u(w) ? (C(), M("label", _p, [
                y[3] || (y[3] = D("span", { class: "fil-pm-field-label" }, "Account ID", -1)),
                Qe(D("input", {
                  "onUpdate:modelValue": (V) => n.value[w].account_id = V,
                  type: "text",
                  class: _e(["fil-pm-input", d(n.value[w].account_id)]),
                  onKeydown: Al((V) => _(w), ["enter"])
                }, null, 42, bp), [
                  [st, n.value[w].account_id]
                ])
              ])) : ne("", !0)
            ]),
            D("div", vp, [
              R(tt, {
                variant: "accent",
                label: k(w) ? "Save" : "Saved",
                disabled: !k(w),
                onClick: (V) => _(w)
              }, null, 8, ["label", "disabled", "onClick"]),
              !k(w) && c(t).cachedAgeLabel(w) ? (C(), M("span", yp, Y(c(t).cachedAgeLabel(w)) + " ago ", 1)) : ne("", !0),
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
            (F = c(t).modelsByProvider[w]) != null && F.error ? (C(), M("div", wp, Y(c(t).modelsByProvider[w].error), 1)) : ne("", !0),
            c(t).probeState[w] && c(t).probeState[w].status !== "available" ? (C(), M("div", Sp, Y(c(t).probeState[w].message), 1)) : ne("", !0),
            c(t).modelsFor(w).length > 0 ? (C(), M("div", xp, [
              (C(!0), M(fe, null, Ne(c(t).modelsFor(w), (V) => (C(), M("span", {
                class: "fil-pm-model-tag",
                key: V
              }, [
                Vl(Y(V) + " ", 1),
                c(t).visionModelsFor(w).includes(V) ? (C(), M("span", Cp, "👁")) : ne("", !0)
              ]))), 128))
            ])) : ne("", !0),
            c(t).lastError ? (C(), M("div", Ap, Y(c(t).lastError), 1)) : ne("", !0)
          ], 64))
        ], 2);
      }), 128))
    ]));
  }
}), Fp = /* @__PURE__ */ xe(kp, [["__scopeId", "data-v-7fb01658"]]);
let Hn = null;
function Mp(e) {
  Hn && (Hn.unmount(), Hn = null), Hn = fi(Fp).use(mi()), Hn.mount(e), console.info("[FiL_Design_ImageMind] provider manager mounted");
}
function Lp(e) {
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
    render: (n) => Mp(n)
  }), console.info("[FiL_Design_ImageMind] provider manager sidebar tab registered");
}
const Ip = [
  {
    id: "FiL_Design_ImageMind.DefaultProvider",
    name: "Default LLM Provider",
    type: "combo",
    defaultValue: "Ollama",
    options: ["Ollama", "LM Studio", "Groq", "Google AI", "OpenRouter", "Cloudflare"],
    category: [Ln, "General"],
    tooltip: "Default AI Provider pre-selected in new Provider Loader nodes."
  },
  {
    id: "FiL_Design_ImageMind.RequestTimeout",
    name: "Request Timeout (seconds)",
    type: "number",
    defaultValue: 60,
    attrs: { min: 5, max: 600, step: 5 },
    category: [Ln, "Network"],
    tooltip: "Global timeout in seconds for API calls to local/cloud LLM providers."
  },
  {
    id: "FiL_Design_ImageMind.AutoCleanVRAM",
    name: "Auto VRAM cleanup on completion",
    type: "boolean",
    defaultValue: !1,
    category: [Ln, "Performance"],
    tooltip: "Automatically purge empty torch cache and PyTorch VRAM after node execution."
  }
], Dp = [
  {
    id: "FiL_Design_ImageMind.Language",
    name: "Language",
    type: "combo",
    defaultValue: "en",
    options: ["en", "ru"],
    tooltip: "UI language for FiL_Design_ImageMind node tooltips and labels (English / Russian).",
    category: [Ln, "Language"]
  }
];
function sr(e) {
  Xo(`${Yt}/log_level`, { level: String(e) }).catch(() => {
  });
}
const Pp = [
  {
    id: "FiL_Design_ImageMind.Logging.Level",
    name: "Log level",
    type: "combo",
    defaultValue: "WARNING",
    options: ["DEBUG", "INFO", "WARNING", "ERROR"],
    category: [Ln, "Logging"],
    tooltip: "Python backend log verbosity for this node pack.",
    onChange: sr
  }
];
function Np(e) {
  const t = e("FiL_Design_ImageMind.Logging.Level", "WARNING");
  sr(t);
}
const ar = {
  Default: "default",
  Cyberpunk: "cyberpunk",
  Fallout: "fallout",
  Pipboy: "pipboy",
  "FiL Green": "travelmate",
  Pixaroma: "pixaroma"
};
function Rp(e) {
  const t = ar[String(e)] ?? "default";
  Ga(t);
  const n = globalThis.app;
  n && Sd(n);
}
const Tp = [
  {
    id: "FiL_Design_ImageMind.Theme",
    name: "Node theme",
    type: "combo",
    defaultValue: "Default",
    options: ["Default", "Cyberpunk", "Fallout", "Pipboy", "FiL Green", "Pixaroma"],
    category: [Ln, "Appearance", "Theme"],
    tooltip: "Recolors every FiL_Design_ImageMind node panel and adds a small themed flourish (neon glow for Cyberpunk, a CRT scanline texture for Pipboy and Fallout, acid-lime glow for Travelmate). Pixaroma matches the ComfyUI-Pixaroma node pack's own colors. Applies instantly, no reload.",
    onChange: Rp
  }
];
function Ep(e) {
  const t = e("FiL_Design_ImageMind.Theme", "Default");
  Ga(ar[t] ?? "default");
}
const Vp = [
  ...Ip,
  ...Dp,
  ...Pp,
  ...Tp
];
function Yo(e, t, n) {
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
Jf();
function Op(e) {
  var t, n;
  try {
    const l = globalThis.app, o = ((t = l == null ? void 0 : l.graph) == null ? void 0 : t._nodes) ?? [];
    for (const i of o) {
      const s = i;
      if (s.comfyClass === "FiLOpticScanner") {
        const a = (n = s.inputs) == null ? void 0 : n.find((r) => r.name === "config");
        (!a || a.link == null) && console.warn(`${pn} Optic Scanner #${s.id} has no Provider Loader wired to its "config" slot — execution will fail.`);
      }
    }
  } catch (l) {
    console.warn(`${pn} preflight fallback:`, l);
  }
  return e;
}
function $p(e) {
  return {
    name: Qf,
    // Declarative settings — registered BEFORE setup so the panel renders
    // even if a later installer throws.
    settings: Vp,
    // Declarative shortcuts — modern ComfyUI registers these through its
    // native command palette / keybinding system. The keydown fallback in
    // installShortcuts only kicks in when this API is unavailable.
    commands: Wf,
    keybindings: jf,
    async setup() {
      const t = [
        () => Bf(),
        () => Yf(e),
        () => Lp(e),
        () => Np((n, l) => Yo(n, l, e)),
        () => Ep((n, l) => Yo(n, l, e))
      ];
      for (const n of t)
        try {
          n();
        } catch (l) {
          console.warn(`${pn} installer ${n.name || "anonymous"} failed:`, l);
        }
    },
    getCustomWidgets() {
      return {};
    },
    async beforeRegisterNodeDef(t, n) {
      const l = er[n.name];
      if (l)
        try {
          await l.register(t, n);
        } catch (o) {
          console.warn(`${pn} failed to register "${n.name}":`, o);
        }
    },
    async graphToPrompt(t) {
      return Op(t);
    }
  };
}
async function Bp() {
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
  const n = new Set(Object.keys(t.node_ids ?? {})), l = new Set(Object.keys(er));
  for (const o of n)
    l.has(o) || console.warn(`${pn} server expects "${o}" but local JS does not register it`);
  for (const o of l)
    n.has(o) || console.warn(`${pn} JS registers "${o}" but server does not expose a contract`);
}
fd();
Md();
Bp().catch((e) => {
  console.warn("[FiL_Design_ImageMind] contract self-check failed:", e);
});
const rr = $p(Fs);
Fs.registerExtension(rr);
console.info(`[FiL_Design_ImageMind] extension registered as "${rr.name}"`);
const Hp = ["aria-checked", "disabled", "title", "onClick"], Up = /* @__PURE__ */ we({
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
      }, Y(a), 11, Hp))), 128))
    ], 4));
  }
}), Cs = /* @__PURE__ */ xe(Up, [["__scopeId", "data-v-7625192b"]]), Gp = { class: "fil-w-chiplist" }, Wp = ["placeholder", "aria-label", "disabled"], jp = {
  class: "fil-w-chip-scroll",
  role: "radiogroup"
}, zp = ["aria-checked", "disabled", "title", "onClick"], Kp = {
  key: 0,
  class: "fil-w-chip-empty"
}, qp = /* @__PURE__ */ we({
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
    return (s, a) => (C(), M("div", Gp, [
      e.searchable ? Qe((C(), M("input", {
        key: 0,
        "onUpdate:modelValue": a[0] || (a[0] = (r) => l.value = r),
        class: "fil-w-search",
        type: "search",
        placeholder: e.placeholder,
        "aria-label": e.placeholder,
        disabled: e.disabled,
        spellcheck: "false"
      }, null, 8, Wp)), [
        [st, l.value]
      ]) : ne("", !0),
      D("div", jp, [
        (C(!0), M(fe, null, Ne(o.value, (r) => (C(), M("button", {
          key: r,
          type: "button",
          role: "radio",
          class: _e(["fil-w-chip", { active: r === n.value, disabled: e.disabled }]),
          "aria-checked": r === n.value,
          disabled: e.disabled,
          title: r,
          onClick: (d) => i(r)
        }, Y(r), 11, zp))), 128)),
        o.value.length === 0 ? (C(), M("div", Kp, Y(l.value ? "No matches" : "Empty"), 1)) : ne("", !0)
      ])
    ]));
  }
}), Xp = /* @__PURE__ */ xe(qp, [["__scopeId", "data-v-6cab4842"]]), Yp = ["title"], Jp = {
  key: 0,
  class: "fil-combo-label"
}, Qp = ["disabled", "aria-expanded"], Zp = { class: "fil-combo-trigger-label" }, em = {
  key: 1,
  class: "fil-combo-badge"
}, tm = ["placeholder"], nm = { class: "fil-combo-list" }, lm = ["aria-selected", "onMouseenter", "onClick"], om = { class: "fil-combo-option-label" }, im = {
  key: 1,
  class: "fil-combo-badge"
}, sm = {
  key: 0,
  class: "fil-combo-empty"
}, am = /* @__PURE__ */ we({
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
      ), Nn(() => {
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
    }), Rn(() => {
      window.removeEventListener("resize", m), window.removeEventListener("scroll", m, !0), document.removeEventListener("mousedown", x, !0);
    }), (w, T) => {
      var B, O;
      return C(), M("div", {
        class: "fil-combo",
        title: e.title
      }, [
        e.label ? (C(), M("label", Jp, Y(e.label), 1)) : ne("", !0),
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
          D("span", Zp, Y(u.value ? p(u.value) : n.value), 1),
          (O = u.value) != null && O.badge ? (C(), M("span", em, Y(u.value.badge), 1)) : ne("", !0),
          T[1] || (T[1] = D("span", { class: "fil-combo-chevron" }, "▾", -1))
        ], 42, Qp),
        (C(), Ce(ra, { to: "body" }, [
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
            }, null, 8, tm)), [
              [st, o.value]
            ]) : ne("", !0),
            D("div", nm, [
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
                D("span", om, Y(p(E)), 1),
                E.badge ? (C(), M("span", im, Y(E.badge), 1)) : ne("", !0)
              ], 42, lm))), 128)),
              f.value.length === 0 ? (C(), M("div", sm, "No matches")) : ne("", !0)
            ])
          ], 36)) : ne("", !0)
        ]))
      ], 8, Yp);
    };
  }
}), ur = /* @__PURE__ */ xe(am, [["__scopeId", "data-v-fa1a3804"]]), rm = ["data-ok", "data-err"], um = /* @__PURE__ */ we({
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
    }, Y(e.text), 9, rm));
  }
}), In = /* @__PURE__ */ xe(um, [["__scopeId", "data-v-be74f393"]]), cm = ["title"], dm = {
  key: 0,
  class: "fil-w-numfield-label"
}, fm = { class: "fil-w-num-wrap" }, pm = ["disabled", "min", "max", "step", "aria-label"], mm = { class: "fil-w-num-step" }, hm = ["disabled"], gm = ["disabled"], _m = /* @__PURE__ */ we({
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
      e.label ? (C(), M("label", dm, Y(e.label), 1)) : ne("", !0),
      D("div", fm, [
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
        }, null, 40, pm), [
          [st, o.value]
        ]),
        D("div", mm, [
          D("button", {
            type: "button",
            class: "fil-w-num-btn",
            tabindex: "-1",
            "aria-label": "Increment",
            disabled: e.disabled || e.max != null && n.value >= e.max,
            onMousedown: _[1] || (_[1] = Bo(() => {
            }, ["prevent"])),
            onClick: _[2] || (_[2] = (A) => g(A.shiftKey ? 10 : 1))
          }, "▲", 40, hm),
          D("button", {
            type: "button",
            class: "fil-w-num-btn",
            tabindex: "-1",
            "aria-label": "Decrement",
            disabled: e.disabled || e.min != null && n.value <= e.min,
            onMousedown: _[3] || (_[3] = Bo(() => {
            }, ["prevent"])),
            onClick: _[4] || (_[4] = (A) => g(A.shiftKey ? -10 : -1))
          }, "▼", 40, gm)
        ])
      ])
    ], 10, cm));
  }
}), dt = /* @__PURE__ */ xe(_m, [["__scopeId", "data-v-3e158373"]]), bm = { class: "fil-w-seedrow" }, vm = ["value", "readonly", "aria-label", "title"], ym = ["title"], wm = ["title"], Sm = ["title"], xm = /* @__PURE__ */ we({
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
    return (o, i) => (C(), M("div", bm, [
      D("input", {
        value: e.display,
        type: "text",
        class: _e(["fil-w-seedrow-field", { "is-random": e.mode === "random" }]),
        readonly: e.mode === "random",
        "aria-label": e.fieldAriaLabel,
        title: e.fieldTitle,
        onInput: l
      }, null, 42, vm),
      D("button", {
        type: "button",
        class: _e(["fil-w-seedrow-pill", { active: e.mode === "random" }]),
        title: e.titles.random,
        onClick: i[0] || (i[0] = (s) => n("random"))
      }, Y(e.labels.random), 11, ym),
      D("button", {
        type: "button",
        class: "fil-w-seedrow-pill",
        title: e.titles.useLast,
        onClick: i[1] || (i[1] = (s) => n("use-last"))
      }, Y(e.labels.useLast), 9, wm),
      D("button", {
        type: "button",
        class: "fil-w-seedrow-pill is-accent",
        title: e.titles.newFixed,
        onClick: i[2] || (i[2] = (s) => n("new-fixed"))
      }, Y(e.labels.newFixed), 9, Sm)
    ]));
  }
}), cr = /* @__PURE__ */ xe(xm, [["__scopeId", "data-v-62e357cd"]]), Cm = ["aria-expanded", "disabled"], Am = { class: "fil-w-section-arrow" }, km = { class: "fil-w-section-title" }, Fm = /* @__PURE__ */ we({
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
      D("span", Am, Y(o.value), 1),
      D("span", km, Y(e.title), 1)
    ], 10, Cm));
  }
}), Ve = /* @__PURE__ */ xe(Fm, [["__scopeId", "data-v-7c27965b"]]), Mm = ["title"], Lm = {
  key: 0,
  class: "fil-w-segmented-label"
}, Im = ["aria-label"], Dm = ["aria-pressed", "disabled", "tabindex", "onClick", "onKeydown"], Pm = /* @__PURE__ */ we({
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
      e.label ? (C(), M("label", Lm, Y(e.label), 1)) : ne("", !0),
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
        }, Y(o(d)), 43, Dm))), 128))
      ], 10, Im)
    ], 8, Mm));
  }
}), je = /* @__PURE__ */ xe(Pm, [["__scopeId", "data-v-80a17629"]]), Nm = ["title"], Rm = {
  key: 0,
  class: "fil-w-select-label"
}, Tm = ["disabled", "aria-label"], Em = ["value"], Vm = /* @__PURE__ */ we({
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
      e.label ? (C(), M("label", Rm, Y(e.label), 1)) : ne("", !0),
      Qe(D("select", {
        "onUpdate:modelValue": l[0] || (l[0] = (o) => t.value = o),
        class: "fil-w-select-input",
        disabled: e.disabled,
        "aria-label": e.label
      }, [
        (C(!0), M(fe, null, Ne(e.options, (o) => (C(), M("option", {
          key: o,
          value: o
        }, Y(o), 9, Em))), 128))
      ], 8, Tm), [
        [Kc, t.value]
      ])
    ], 8, Nm));
  }
}), zn = /* @__PURE__ */ xe(Vm, [["__scopeId", "data-v-f303e789"]]), Om = ["title"], $m = {
  key: 0,
  class: "fil-w-slider-label"
}, Bm = { class: "fil-w-slider-row" }, Hm = ["value", "min", "max", "step", "disabled", "aria-label"], Um = /* @__PURE__ */ we({
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
      e.label ? (C(), M("label", $m, Y(e.label), 1)) : ne("", !0),
      D("div", Bm, [
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
        }, null, 40, Hm),
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
    ], 8, Om));
  }
}), Oe = /* @__PURE__ */ xe(Um, [["__scopeId", "data-v-bcb4fa2a"]]), Gm = {
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
}, Wm = {}, jm = {}, zm = {}, Km = {
  ...Gm,
  ...Wm,
  ...jm,
  ...zm
}, qm = "FiL_Design_ImageMind.Language", dr = "en", Pt = /* @__PURE__ */ Gt({
  lang: dr,
  translations: {},
  loaded: !1
});
let As = null;
async function Xm(e) {
  try {
    const t = await jn(`/fil_design_imagemind/locale/${encodeURIComponent(e)}`);
    Pt.translations = t, Pt.lang = e;
  } catch (t) {
    console.warn(`[FiL_Design_ImageMind] failed to load locale "${e}":`, t);
  } finally {
    Pt.loaded = !0;
  }
}
function Ym() {
  if (As) return;
  const e = Yo(qm, dr);
  As = Xm(e);
}
function Jm(e, t, n, l) {
  const o = e % 10, i = e % 100;
  return o === 1 && i !== 11 ? t : o >= 2 && o <= 4 && (i < 10 || i >= 20) ? n : l;
}
function bt() {
  Ym();
  function e(n, l) {
    return Pt.translations[n] ?? l;
  }
  function t(n, l, o, i, s) {
    const a = Pt.translations[`${n}_one`] ?? o, r = Pt.translations[`${n}_few`] ?? i, d = Pt.translations[`${n}_many`] ?? s;
    return Pt.lang === "ru" ? Jm(l, a, r, d) : l === 1 ? a : d;
  }
  return { t: e, tPlural: t, state: /* @__PURE__ */ Ll(Pt) };
}
const Qm = { class: "fil-style-picker" }, Zm = {
  key: 0,
  class: "fil-style-selected-bar"
}, eh = { class: "fil-chip-text" }, th = ["onClick"], nh = { class: "fil-style-cats" }, lh = ["onClick"], oh = { class: "fil-style-search-wrap" }, ih = ["placeholder", "aria-label"], sh = ["title"], ah = { class: "fil-style-grid" }, rh = ["title", "onClick"], uh = { class: "fil-style-tile-preview" }, ch = ["src"], dh = {
  key: 1,
  class: "fil-style-tile-placeholder"
}, fh = { class: "fil-style-tile-label" }, ph = {
  key: 0,
  class: "fil-style-empty"
}, Sl = "__all__", mh = /* @__PURE__ */ we({
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
    }), p = /* @__PURE__ */ ce(Sl), g = /* @__PURE__ */ ce(""), m = q(() => {
      const S = g.value.trim().toLowerCase();
      return l.styles.filter((k) => p.value !== Sl && s(k) !== p.value ? !1 : S ? k.toLowerCase().includes(S) : !0);
    });
    function _(S) {
      return Km[S];
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
    return (S, k) => (C(), M("div", Qm, [
      r.value.length > 0 ? (C(), M("div", Zm, [
        (C(!0), M(fe, null, Ne(r.value, (v) => (C(), M("span", {
          key: v,
          class: "fil-style-chip"
        }, [
          D("span", eh, Y(a(v)), 1),
          D("button", {
            type: "button",
            class: "fil-chip-remove",
            title: "Remove style",
            onClick: Bo((y) => A(v), ["stop"])
          }, "×", 8, th)
        ]))), 128))
      ])) : ne("", !0),
      D("div", nh, [
        D("button", {
          type: "button",
          class: _e(["fil-style-cat", { active: p.value === Sl }]),
          onClick: k[0] || (k[0] = (v) => p.value = Sl)
        }, Y(c(n)("fsp_all_categories", "All")), 3),
        (C(!0), M(fe, null, Ne(f.value, (v) => (C(), M("button", {
          key: v,
          type: "button",
          class: _e(["fil-style-cat", { active: p.value === v }]),
          onClick: (y) => p.value = v
        }, Y(v), 11, lh))), 128))
      ]),
      D("div", oh, [
        Qe(D("input", {
          "onUpdate:modelValue": k[1] || (k[1] = (v) => g.value = v),
          type: "search",
          class: "fil-style-search",
          placeholder: c(n)("fsp_search_placeholder", "Search styles…"),
          "aria-label": c(n)("fsp_search_aria", "Search styles"),
          spellcheck: "false"
        }, null, 8, ih), [
          [st, g.value]
        ]),
        g.value.trim().length > 0 ? (C(), M("button", {
          key: 0,
          type: "button",
          class: "fil-style-search-clear",
          title: c(n)("fsp_clear_search", "Clear search"),
          onClick: k[2] || (k[2] = (v) => g.value = "")
        }, " × ", 8, sh)) : ne("", !0)
      ]),
      D("div", ah, [
        (C(!0), M(fe, null, Ne(m.value, (v) => (C(), M("button", {
          key: v,
          type: "button",
          class: _e(["fil-style-tile", { active: u(v) }]),
          title: v,
          onClick: (y) => x(v)
        }, [
          D("span", uh, [
            _(v) ? (C(), M("img", {
              key: 0,
              src: _(v),
              class: "fil-style-tile-img",
              alt: ""
            }, null, 8, ch)) : (C(), M("span", dh, Y(a(v).split(" ")[0]), 1))
          ]),
          D("span", fh, Y(a(v)), 1)
        ], 10, rh))), 128)),
        m.value.length === 0 ? (C(), M("div", ph, "No matches")) : ne("", !0)
      ])
    ]));
  }
}), kl = /* @__PURE__ */ xe(mh, [["__scopeId", "data-v-572f1dc7"]]), hh = ["title"], gh = { class: "fil-w-textarea-label" }, _h = ["placeholder", "rows", "disabled", "readonly"], bh = ["title", "placeholder", "rows", "disabled", "readonly"], vh = /* @__PURE__ */ we({
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
      D("label", gh, Y(e.label), 1),
      Qe(D("textarea", {
        "onUpdate:modelValue": l[0] || (l[0] = (o) => t.value = o),
        class: _e(["fil-w-textarea", { "is-linked": e.linked }]),
        placeholder: e.placeholder,
        rows: e.rows,
        disabled: e.disabled,
        readonly: e.readonly || e.linked
      }, null, 10, _h), [
        [st, t.value]
      ])
    ], 8, hh)) : Qe((C(), M("textarea", {
      key: 1,
      "onUpdate:modelValue": l[1] || (l[1] = (o) => t.value = o),
      class: _e(["fil-w-textarea", { "is-linked": e.linked }]),
      title: e.title,
      placeholder: e.placeholder,
      rows: e.rows,
      disabled: e.disabled,
      readonly: e.readonly || e.linked
    }, null, 10, bh)), [
      [st, t.value]
    ]);
  }
}), Fl = /* @__PURE__ */ xe(vh, [["__scopeId", "data-v-f3b21190"]]), yh = ["title"], wh = {
  key: 0,
  class: "fil-w-text-label"
}, Sh = ["placeholder", "disabled", "aria-label"], xh = /* @__PURE__ */ we({
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
      e.label ? (C(), M("label", wh, Y(e.label), 1)) : ne("", !0),
      Qe(D("input", {
        "onUpdate:modelValue": l[0] || (l[0] = (o) => t.value = o),
        type: "text",
        class: "fil-w-text-input",
        placeholder: e.placeholder,
        disabled: e.disabled,
        "aria-label": e.label
      }, null, 8, Sh), [
        [st, t.value]
      ])
    ], 8, yh));
  }
}), Fo = /* @__PURE__ */ xe(xh, [["__scopeId", "data-v-d656e366"]]), Ch = ["title"], Ah = {
  key: 0,
  class: "fil-w-toggle-label"
}, kh = ["aria-checked", "aria-label", "disabled"], Fh = /* @__PURE__ */ we({
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
      e.label ? (C(), M("label", Ah, Y(e.label), 1)) : ne("", !0),
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
      ])], 10, kh)
    ], 10, Ch));
  }
}), cn = /* @__PURE__ */ xe(Fh, [["__scopeId", "data-v-c41e86e9"]]), Mh = { class: "fil-seed-root" }, Lh = ["readonly", "title", "aria-label"], Ih = { class: "fil-seed-actions" }, Dh = /* @__PURE__ */ we({
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
    return (d, u) => (C(), M("div", Mh, [
      Qe(D("input", {
        "onUpdate:modelValue": u[0] || (u[0] = (f) => r.value = f),
        type: "text",
        class: "fil-seed-display",
        readonly: l.value === "random",
        title: l.value === "fixed" ? c(n)("sd_locked", "Locked seed") : c(n)("sd_auto_random", "Auto-random"),
        "aria-label": c(n)("sd_aria_seed_value", "Seed value")
      }, null, 8, Lh), [
        [st, r.value]
      ]),
      D("div", Ih, [
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
}), Ph = /* @__PURE__ */ xe(Dh, [["__scopeId", "data-v-dca90760"]]), Nh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ph
}, Symbol.toStringTag, { value: "Module" })), Rh = { class: "picker-container" }, Th = { class: "provider-tabs" }, Eh = ["onClick"], Vh = { class: "tab-label" }, Oh = {
  key: 0,
  class: "tab-badge"
}, $h = { class: "provider-status-bar" }, Bh = { class: "status-info" }, Hh = { class: "provider-name" }, Uh = {
  key: 0,
  class: "status-badge loading"
}, Gh = {
  key: 1,
  class: "status-badge error"
}, Wh = {
  key: 2,
  class: "status-badge online"
}, jh = {
  key: 3,
  class: "age-label"
}, zh = { class: "filter-controls" }, Kh = { class: "search-input-wrap" }, qh = ["placeholder"], Xh = ["title"], Yh = { class: "filter-segments" }, Jh = { class: "models-list-wrapper" }, Qh = {
  key: 0,
  class: "empty-state"
}, Zh = {
  key: 1,
  class: "empty-state"
}, eg = ["aria-pressed", "onClick"], tg = { class: "model-main" }, ng = { class: "type-icon" }, lg = ["title"], og = { class: "model-tags" }, ig = {
  key: 0,
  class: "tag vision"
}, sg = {
  key: 1,
  class: "tag text"
}, ag = {
  key: 2,
  class: "tag local"
}, rg = {
  key: 3,
  class: "tag free"
}, ug = {
  key: 4,
  class: "tag paid"
}, cg = { class: "picker-footer" }, dg = { class: "selection-summary" }, fg = { key: 0 }, pg = {
  key: 1,
  class: "muted"
}, mg = { class: "footer-actions" }, ks = "fil_model_picker_view_mode", hg = /* @__PURE__ */ we({
  __name: "ProviderModelPicker",
  props: {
    open: { type: Boolean, default: !1 },
    provider: { default: "ollama" },
    model: { default: "" }
  },
  emits: ["update:open", "select"],
  setup(e, { emit: t }) {
    const n = e, l = t, o = hi(), { t: i, tPlural: s } = bt(), a = /* @__PURE__ */ ce(n.provider), r = /* @__PURE__ */ ce(n.model), d = /* @__PURE__ */ ce(""), u = /* @__PURE__ */ ce("all"), f = /* @__PURE__ */ ce("all"), p = /* @__PURE__ */ ce(
      localStorage.getItem(ks) || "list"
    );
    function g(I) {
      p.value = I;
      try {
        localStorage.setItem(ks, I);
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
    return (I, L) => (C(), Ce(Mn, {
      open: e.open,
      width: "860px",
      title: c(i)("pmp_title", "🔌 Choose Provider & Model"),
      "onUpdate:open": L[6] || (L[6] = (U) => l("update:open", U)),
      onClose: $
    }, {
      default: Jt(() => [
        D("div", Rh, [
          D("div", Th, [
            (C(!0), M(fe, null, Ne(c(Sn), (U) => (C(), M("button", {
              key: U,
              type: "button",
              class: _e(["tab-btn", { active: U === a.value }]),
              onClick: (ge) => y(U)
            }, [
              R(Ht, {
                name: c(gi)[U],
                size: 18
              }, null, 8, ["name"]),
              D("span", Vh, Y(c(Wl)[U] ?? U), 1),
              c(o).modelsFor(U).length ? (C(), M("span", Oh, Y(c(o).modelsFor(U).length), 1)) : ne("", !0)
            ], 10, Eh))), 128))
          ]),
          D("div", $h, [
            D("div", Bh, [
              D("span", Hh, Y(c(Wl)[a.value] ?? a.value), 1),
              B.value ? (C(), M("span", Uh, "⏳ " + Y(c(i)("pmp_loading", "Loading...")), 1)) : O.value && O.value.status && O.value.status !== "available" ? (C(), M("span", Gh, " ⚠️ " + Y(O.value.message || O.value.status), 1)) : (C(), M("span", Wh, " ● " + Y(c(i)("pmp_online", "Online")) + " (" + Y(w.value.length) + " " + Y(c(s)("prov_models", w.value.length, "model", "models", "models")) + ") ", 1)),
              E.value ? (C(), M("span", jh, Y(c(i)("pmp_updated", "Updated")) + ": " + Y(E.value), 1)) : ne("", !0)
            ]),
            R(tt, {
              variant: "sm",
              label: c(i)("pmp_refresh", "↻ Refresh"),
              loading: B.value,
              title: c(i)("tt_refresh", "Reload models list"),
              onClick: L[0] || (L[0] = (U) => v(!0))
            }, null, 8, ["label", "loading", "title"])
          ]),
          D("div", zh, [
            D("div", Kh, [
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
              }, null, 8, qh), [
                [st, d.value]
              ]),
              d.value ? (C(), M("button", {
                key: 0,
                type: "button",
                class: "clear-search",
                title: c(i)("tt_clear_search", "Clear search"),
                onClick: L[2] || (L[2] = (U) => d.value = "")
              }, "✕", 8, Xh)) : ne("", !0)
            ]),
            D("div", Yh, [
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
          D("div", Jh, [
            B.value && !w.value.length ? (C(), M("div", Qh, [
              R(In, {
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
                D("div", tg, [
                  D("span", ng, Y(F(U) ? "👁" : "📝"), 1),
                  D("span", {
                    class: "model-name",
                    title: U
                  }, Y(U), 9, lg)
                ]),
                D("div", og, [
                  F(U) ? (C(), M("span", ig, Y(c(i)("pmp_tag_vision", "Vision")), 1)) : (C(), M("span", sg, Y(c(i)("pmp_tag_text", "Text")), 1)),
                  K(U, a.value) === "local" ? (C(), M("span", ag, Y(c(i)("pmp_tag_local", "Local")), 1)) : K(U, a.value) === "free" ? (C(), M("span", rg, Y(c(i)("pmp_tag_free", "Free")), 1)) : (C(), M("span", ug, Y(c(i)("pmp_tag_paid", "Paid")), 1))
                ])
              ], 10, eg))), 128))
            ], 2)) : (C(), M("div", Zh, [
              D("span", null, Y(c(i)("pmp_no_match", "No models matching criteria")), 1)
            ]))
          ]),
          D("div", cg, [
            D("div", dg, [
              r.value ? (C(), M("span", fg, [
                Vl(Y(c(i)("pmp_selected", "Selected")) + ": ", 1),
                D("strong", null, Y(r.value), 1)
              ])) : (C(), M("span", pg, Y(c(i)("pmp_none_selected", "No model selected")), 1))
            ]),
            D("div", mg, [
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
}), gg = /* @__PURE__ */ xe(hg, [["__scopeId", "data-v-41a05b02"]]), _g = { class: "fil-provider-root" }, bg = { class: "trigger-header" }, vg = { class: "provider-badge" }, yg = { class: "provider-title" }, wg = { class: "trigger-model" }, Sg = ["title"], xg = 3e5, Cg = /* @__PURE__ */ we({
  __name: "ProviderLoader",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, n = hi(), { t: l } = bt(), o = /* @__PURE__ */ ce(!1);
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
    return mn(async () => {
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
      }, xg);
    }), lo(() => {
      S && clearInterval(S);
    }), (y, w) => (C(), M("div", _g, [
      D("button", {
        type: "button",
        class: "picker-trigger-btn",
        onClick: w[0] || (w[0] = (T) => o.value = !0)
      }, [
        D("div", bg, [
          D("div", vg, [
            R(c(Ht), {
              name: c(gi)[s.value],
              size: 16
            }, null, 8, ["name"]),
            D("span", yg, Y(c(Wl)[s.value] ?? s.value), 1)
          ]),
          w[6] || (w[6] = D("span", { class: "open-icon" }, "⚙️ Choose", -1))
        ]),
        D("div", wg, [
          w[7] || (w[7] = D("span", { class: "model-label" }, "🧠 Model:", -1)),
          D("span", {
            class: "model-name",
            title: r.value
          }, Y(r.value), 9, Sg)
        ])
      ]),
      _.value ? (C(), Ce(c(In), {
        key: 0,
        text: c(l)("prov_loading_models", "Loading models…")
      }, null, 8, ["text"])) : A.value && A.value.status && A.value.status !== "available" ? (C(), Ce(c(In), {
        key: 1,
        err: !0,
        text: A.value.message || A.value.status
      }, null, 8, ["text"])) : x.value ? (C(), Ce(c(In), {
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
      R(gg, {
        open: o.value,
        "onUpdate:open": w[5] || (w[5] = (T) => o.value = T),
        provider: s.value,
        model: r.value,
        onSelect: v
      }, null, 8, ["open", "provider", "model"])
    ]));
  }
}), Ag = /* @__PURE__ */ xe(Cg, [["__scopeId", "data-v-c7c57ca2"]]), kg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ag
}, Symbol.toStringTag, { value: "Module" })), _i = {
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
}, Fg = { class: "fil-scanner-root" }, Mg = {
  key: 0,
  class: "fil-w-row fil-single-style-block"
}, Lg = { style: { display: "flex", gap: "4px", "margin-bottom": "3px" } }, Ig = { style: { display: "flex", "margin-bottom": "6px" } }, Dg = { class: "fil-unified-style-modal" }, Pg = { class: "fil-style-tab-bar" }, Ng = ["onClick"], Rg = { class: "fil-tab-icon" }, Tg = { class: "fil-tab-title" }, Eg = {
  key: 0,
  class: "fil-tab-badge"
}, Vg = { class: "fil-style-picker-body" }, Og = { class: "fil-style-modal-footer" }, $g = ["title"], Bg = /* @__PURE__ */ we({
  __name: "OpticScanner",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = bt(), l = _i.FiLOpticScanner, o = [
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
      Wd(Q, f.map((me) => ({ name: me, el: g[me] })));
      const le = jd(Q, f);
      f.some((me) => le[me] !== !!x.value[me]) && (x.value = le);
    }
    let y = 0;
    mn(() => {
      v(), y = window.setInterval(v, 300);
    }), Rn(() => {
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
    function Tn() {
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
    function hn() {
      const Q = Math.floor(Math.random() * 1e9) & 2147483647;
      Z.value = Q, ae.value = "fixed";
    }
    return (Q, le) => (C(), M("div", Fg, [
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
            h.name === "response_format" ? (C(), M("div", Mg, [
              D("div", Lg, [
                D("button", {
                  class: _e(["fil-style-picker-btn", { "has-styles": E.value > 0 }]),
                  onClick: le[0] || (le[0] = (b) => w.value = !0)
                }, Y(O.value), 3)
              ]),
              D("div", Ig, [
                R(c(tt), {
                  variant: "standard",
                  label: "🧹 Clear Style",
                  onClick: N,
                  style: { flex: "1" }
                })
              ]),
              R(c(Mn), {
                open: w.value,
                title: c(n)("scn_unified_style_title", "🎨 Style Selection"),
                width: "680px",
                "onUpdate:open": le[2] || (le[2] = (b) => w.value = b)
              }, {
                default: Jt(() => [
                  D("div", Dg, [
                    D("div", Pg, [
                      (C(), M(fe, null, Ne(K, (b) => D("button", {
                        key: b.id,
                        type: "button",
                        class: _e(["fil-style-tab-btn", { active: T.value === b.id, "has-value": F(b.id) !== "None" }]),
                        onClick: (P) => T.value = b.id
                      }, [
                        D("span", Rg, Y(b.icon), 1),
                        D("span", Tg, Y(c(n)(b.labelKey, b.fallback)), 1),
                        F(b.id) !== "None" ? (C(), M("span", Eg, "✓")) : ne("", !0)
                      ], 10, Ng)), 64))
                    ]),
                    D("div", Vg, [
                      R(c(kl), {
                        styles: H(T.value),
                        "model-value": F(T.value),
                        multi: !0,
                        onSelect: le[1] || (le[1] = (b) => V(T.value, b))
                      }, null, 8, ["styles", "model-value"])
                    ]),
                    D("div", Og, [
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
              h.name === "prompt" || h.name === "negative_prompt" || h.name === "custom_style" ? (C(), Ce(c(Fl), {
                key: 0,
                ref_for: !0,
                ref: (b) => m(h.name, b),
                "model-value": String(I(h.name, "")),
                linked: S(h.name),
                placeholder: S(h.name) ? c(n)("scn_field_linked", "🔗 Text comes from the connected node") : u(h),
                rows: 2,
                "onUpdate:modelValue": (b) => L(h.name, b)
              }, null, 8, ["model-value", "linked", "placeholder", "onUpdate:modelValue"])) : h.kind === "chip_grid" ? (C(), Ce(c(Cs), {
                key: 1,
                options: h.values || [],
                "model-value": String(I(h.name, "")),
                columns: h.columns ?? 3,
                "onUpdate:modelValue": (b) => L(h.name, b)
              }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"])) : h.kind === "chip_list" ? (C(), Ce(c(Xp), {
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
              }, null, 8, ["options", "model-value", "label", "onUpdate:modelValue"])) : (C(), Ce(c(Cs), {
                key: 4,
                options: h.values || [],
                "model-value": String(I(h.name, "")),
                columns: h.columns ?? 3,
                "onUpdate:modelValue": (b) => L(h.name, b)
              }, null, 8, ["options", "model-value", "columns", "onUpdate:modelValue"]))
            ], 10, $g), [
              [Lc, Pe === "_" || Pe === "prompt" || !ge(String(Pe))]
            ])
          ], 64))), 128))
        ], 2)) : ne("", !0)
      ], 64))), 128)),
      R(c(cr), {
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
        onRandom: Tn,
        onUseLast: Zt,
        onNewFixed: hn
      }, null, 8, ["display", "mode", "field-aria-label", "field-title", "labels", "titles"])
    ]));
  }
}), Hg = /* @__PURE__ */ xe(Bg, [["__scopeId", "data-v-a2b7305d"]]), Ug = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hg
}, Symbol.toStringTag, { value: "Module" })), Gg = { class: "fil-cleaner-root" }, Wg = /* @__PURE__ */ we({
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
    return (s, a) => (C(), M("div", Gg, [
      (C(!0), M(fe, null, Ne(l.value, (r) => (C(), Ce(c(cn), {
        key: r.name,
        "model-value": o(r.name, r.defaultOn) ? "ON" : "OFF",
        label: r.label,
        "onUpdate:modelValue": (d) => i(r.name, d === "ON")
      }, null, 8, ["model-value", "label", "onUpdate:modelValue"]))), 128))
    ]));
  }
}), jg = /* @__PURE__ */ xe(Wg, [["__scopeId", "data-v-aca28d85"]]), zg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jg
}, Symbol.toStringTag, { value: "Module" })), Kg = { class: "fil-up-root" }, qg = { class: "fil-up-row fil-up-row-overlap" }, Xg = ["title"], Yg = ["title"], Jg = { class: "fil-up-row" }, Qg = ["title"], Zg = ["title"], e_ = /* @__PURE__ */ we({
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
    }, { deep: !0 }), (k, v) => (C(), M("div", Kg, [
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
        R(c(cn), {
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
          D("div", qg, [
            D("label", {
              class: "fil-w-label",
              title: c(n)("utc_tile_size", "Base tile size.")
            }, Y(c(n)("lbl_tile_size", "🔲 Tile size")), 9, Xg),
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
            }, Y(c(n)("lbl_overlap", "🧵 Overlap")), 9, Yg),
            R(c(dt), {
              modelValue: c(d),
              "onUpdate:modelValue": v[5] || (v[5] = (y) => /* @__PURE__ */ se(d) ? d.value = y : null),
              min: 0,
              max: 512,
              step: 8,
              disabled: c(p) === "ON"
            }, null, 8, ["modelValue", "disabled"]),
            R(c(cn), {
              bare: "",
              "model-value": c(p),
              label: c(n)("lbl_auto_overlap", "🧵 Auto"),
              title: c(n)("utc_auto_overlap", "Derive overlap automatically from tile size (~12.5%) instead of the fixed value above."),
              "onUpdate:modelValue": v[6] || (v[6] = (y) => p.value = y)
            }, null, 8, ["model-value", "label", "title"])
          ]),
          D("div", Jg, [
            D("label", {
              class: "fil-w-label",
              title: c(n)("utc_manual_cols", "Force this many tile columns. 0 = compute from tile size.")
            }, Y(c(n)("lbl_manual_cols", "↔️ Cols")), 9, Qg),
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
            }, Y(c(n)("lbl_manual_rows", "↕️ Rows")), 9, Zg),
            R(c(dt), {
              modelValue: c(f),
              "onUpdate:modelValue": v[8] || (v[8] = (y) => /* @__PURE__ */ se(f) ? f.value = y : null),
              min: 0,
              max: 64,
              step: 1
            }, null, 8, ["modelValue"])
          ]),
          R(c(cn), {
            "model-value": c(_),
            label: c(n)("lbl_auto_fix_edges", "🩹 Auto-fix thin edges"),
            title: c(n)("utc_auto_fix_edges", "Shrink tile_size to the next standard size instead of just warning when the grid would leave a thin edge tile."),
            "onUpdate:modelValue": v[9] || (v[9] = (y) => _.value = y)
          }, null, 8, ["model-value", "label", "title"])
        ], 64)) : ne("", !0)
      ], 64)),
      R(c(cn), {
        "model-value": c(m),
        label: c(n)("lbl_non_square", "📐 Non-square tiles"),
        title: c(n)("utc_non_square", "Allow rectangular tiles instead of forcing square ones."),
        "onUpdate:modelValue": v[10] || (v[10] = (y) => m.value = y)
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), t_ = /* @__PURE__ */ xe(e_, [["__scopeId", "data-v-d0c34d54"]]), fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: t_
}, Symbol.toStringTag, { value: "Module" })), n_ = { class: "fil-hrf-root" }, l_ = /* @__PURE__ */ we({
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
    return (I, L) => (C(), M("div", n_, [
      R(c(je), {
        options: ["latent", "pixel", "both"],
        "option-labels": { latent: "🌀 latent", pixel: "🖼️ pixel", both: "🔀 both" },
        "model-value": c(a),
        label: c(n)("lbl_upscale_type", "⬆️ Upscale type"),
        title: c(n)("hrf_upscale_type", "Upscale in latent space, pixel space, or both."),
        "onUpdate:modelValue": L[0] || (L[0] = (U) => a.value = U)
      }, null, 8, ["model-value", "label", "title"]),
      O.value ? (C(), Ce(c(zn), {
        key: 0,
        options: y,
        "model-value": c(d),
        label: c(n)("lbl_latent_up", "🌀 Latent upscaler"),
        title: c(n)("hrf_latent_up", "Latent upscale method."),
        "onUpdate:modelValue": L[1] || (L[1] = (U) => d.value = U)
      }, null, 8, ["model-value", "label", "title"])) : ne("", !0),
      E.value ? (C(), Ce(c(zn), {
        key: 1,
        options: w.value,
        "model-value": c(u),
        label: c(n)("lbl_pixel_up", "🖼️ Pixel upscaler"),
        title: c(n)("hrf_pixel_up", "Pixel upscale model (from upscale_models)."),
        "onUpdate:modelValue": L[2] || (L[2] = (U) => u.value = U)
      }, null, 8, ["options", "model-value", "label", "title"])) : ne("", !0),
      R(c(zn), {
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
      c(p) === "OFF" ? (C(), Ce(c(cr), {
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
        R(c(zn), {
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
}), o_ = /* @__PURE__ */ xe(l_, [["__scopeId", "data-v-1976136c"]]), i_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: o_
}, Symbol.toStringTag, { value: "Module" })), s_ = { class: "fil-style-mixer-root" }, a_ = /* @__PURE__ */ we({
  __name: "StyleMixer",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = bt(), l = _i.FiLStyleMixer, o = (l == null ? void 0 : l.inputs.required.find((H) => H.name === "fusion_mode")) || (l == null ? void 0 : l.inputs.optional.find((H) => H.name === "fusion_mode")), i = q(
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
    return (H, N) => (C(), M("div", s_, [
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
        R(c(Mn), {
          open: k.value,
          title: c(n)("sm_pick_style_1", "Select Primary Style 1"),
          width: "680px",
          "onUpdate:open": N[6] || (N[6] = ($) => k.value = $)
        }, {
          default: Jt(() => [
            R(c(kl), {
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
        R(c(Mn), {
          open: v.value,
          title: c(n)("sm_pick_style_2", "Select Secondary Style 2"),
          width: "680px",
          "onUpdate:open": N[11] || (N[11] = ($) => v.value = $)
        }, {
          default: Jt(() => [
            R(c(kl), {
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
        R(c(Mn), {
          open: y.value,
          title: c(n)("sm_pick_style_3", "Select Tertiary Style 3"),
          width: "680px",
          "onUpdate:open": N[16] || (N[16] = ($) => y.value = $)
        }, {
          default: Jt(() => [
            R(c(kl), {
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
}), r_ = /* @__PURE__ */ xe(a_, [["__scopeId", "data-v-87c8a7d7"]]), u_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: r_
}, Symbol.toStringTag, { value: "Module" })), c_ = { class: "fil-color-wizard-root" }, d_ = { class: "fil-cw-presets-block" }, f_ = { class: "fil-cw-presets-title" }, p_ = { class: "fil-cw-presets-grid" }, m_ = ["title"], h_ = ["title"], g_ = ["title"], __ = ["title"], b_ = { class: "fil-cw-slider-group" }, v_ = /* @__PURE__ */ we({
  __name: "ColorWizard",
  props: {
    state: {}
  },
  setup(e) {
    const t = e, { t: n } = bt(), l = _i.FiLColorWizard, o = (l == null ? void 0 : l.inputs.required.find((g) => g.name === "method")) || (l == null ? void 0 : l.inputs.optional.find((g) => g.name === "method")), i = q(
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
    return (g, m) => (C(), M("div", c_, [
      D("div", d_, [
        D("div", f_, Y(c(n)("cw_presets", "⚡ Quick Presets")), 1),
        D("div", p_, [
          D("button", {
            type: "button",
            class: "fil-cw-preset-btn warm",
            title: c(n)("cw_preset_warm_tt", "Warm Sunny Tone"),
            onClick: m[0] || (m[0] = (_) => p("warm"))
          }, Y(c(n)("cw_preset_warm", "☀️ Warm Sun")), 9, m_),
          D("button", {
            type: "button",
            class: "fil-cw-preset-btn cool",
            title: c(n)("cw_preset_cool_tt", "Cool Sci-Fi Cyberpunk Tone"),
            onClick: m[1] || (m[1] = (_) => p("cool"))
          }, Y(c(n)("cw_preset_cool", "🧊 Cool Sci-Fi")), 9, h_),
          D("button", {
            type: "button",
            class: "fil-cw-preset-btn skin",
            title: c(n)("cw_preset_skin_tt", "Natural Skin Preservation"),
            onClick: m[2] || (m[2] = (_) => p("skin"))
          }, Y(c(n)("cw_preset_skin", "👤 Skin Protect")), 9, g_),
          D("button", {
            type: "button",
            class: "fil-cw-preset-btn contrast",
            title: c(n)("cw_preset_contrast_tt", "Punchy LAB Contrast"),
            onClick: m[3] || (m[3] = (_) => p("contrast"))
          }, Y(c(n)("cw_preset_contrast", "⚡ Contrast")), 9, __)
        ])
      ]),
      R(c(Ve), {
        title: c(n)("cw_section_method", "⚙️ Method")
      }, null, 8, ["title"]),
      R(c(ur), {
        modelValue: c(a),
        "onUpdate:modelValue": m[4] || (m[4] = (_) => /* @__PURE__ */ se(a) ? a.value = _ : null),
        options: i.value,
        title: c(n)("tt_cw_method", "Correction algorithm.")
      }, null, 8, ["modelValue", "options", "title"]),
      R(c(Ve), {
        title: c(n)("cw_section_adjust", "🎛️ Adjustments")
      }, null, 8, ["title"]),
      D("div", b_, [
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
      R(c(cn), {
        "model-value": c(f) ? "ON" : "OFF",
        label: c(n)("cw_preserve_skin", "🛡️ Preserve Skin Tones"),
        title: c(n)("tt_cw_preserve_skin", "Preserve skin tones."),
        "onUpdate:modelValue": m[8] || (m[8] = (_) => f.value = _ === "ON")
      }, null, 8, ["model-value", "label", "title"])
    ]));
  }
}), y_ = /* @__PURE__ */ xe(v_, [["__scopeId", "data-v-f30ae2c2"]]), w_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: y_
}, Symbol.toStringTag, { value: "Module" })), S_ = { class: "fil-switch-panel" }, x_ = { class: "fil-switch-text" }, C_ = /* @__PURE__ */ we({
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
    ), (o, i) => (C(), M("div", S_, [
      D("button", {
        type: "button",
        class: _e(["fil-switch-btn", { "is-on": n.value, "is-off": !n.value }]),
        onClick: l
      }, [
        D("span", x_, Y(n.value ? "ON" : "OFF"), 1)
      ], 2)
    ]));
  }
}), A_ = /* @__PURE__ */ xe(C_, [["__scopeId", "data-v-06454708"]]), k_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: A_
}, Symbol.toStringTag, { value: "Module" })), F_ = { class: "fil-ds-root" }, M_ = /* @__PURE__ */ we({
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
      const ae = t.state.node, Z = (oe = ae == null ? void 0 : ae.inputs) == null ? void 0 : oe.find((Tn) => Tn.name === "config");
      E.value = Z != null && Z.link != null;
    }
    let F = 0;
    mn(() => {
      K(), F = window.setInterval(K, 300);
    }), Rn(() => {
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
    return (ae, Z) => (C(), M("div", F_, [
      R(c(Ve), {
        title: c(n)("dsp_section_identity", "1️⃣ Who / what is this"),
        collapsible: !1
      }, null, 8, ["title"]),
      R(c(Fo), {
        modelValue: c(r),
        "onUpdate:modelValue": Z[0] || (Z[0] = (oe) => /* @__PURE__ */ se(r) ? r.value = oe : null),
        label: c(n)("dsp_label_dataset_name", "🏷️ Dataset name"),
        title: c(n)("ds_name", ""),
        placeholder: "my_lora"
      }, null, 8, ["modelValue", "label", "title"]),
      R(c(Fo), {
        modelValue: c(d),
        "onUpdate:modelValue": Z[1] || (Z[1] = (oe) => /* @__PURE__ */ se(d) ? d.value = oe : null),
        label: c(n)("dsp_label_trigger", "🔑 Trigger word"),
        title: c(n)("ds_trigger", ""),
        placeholder: "ohwx"
      }, null, 8, ["modelValue", "label", "title"]),
      R(c(Fo), {
        modelValue: c(u),
        "onUpdate:modelValue": Z[2] || (Z[2] = (oe) => /* @__PURE__ */ se(u) ? u.value = oe : null),
        label: c(n)("dsp_label_class", "🧍 Class"),
        title: c(n)("ds_class", ""),
        placeholder: "woman"
      }, null, 8, ["modelValue", "label", "title"]),
      R(c(In), {
        text: `${c(n)("dsp_preview_folder", "📁 Will create:")} ${_.value}`
      }, null, 8, ["text"]),
      R(c(Ve), {
        title: c(n)("dsp_section_format", "2️⃣ File format"),
        collapsible: !1
      }, null, 8, ["title"]),
      R(c(ur), {
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
      O.value && !E.value ? (C(), Ce(c(In), {
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
      R(c(Fl), {
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
          R(c(Fl), {
            modelValue: c(T),
            "onUpdate:modelValue": Z[12] || (Z[12] = (oe) => /* @__PURE__ */ se(T) ? T.value = oe : null),
            title: c(n)("ds_dont_caption", ""),
            label: c(n)("dsp_label_dont_caption", "🚫 Never mention"),
            placeholder: c(n)("dsp_ph_dont_caption", "her face, red hair — belongs to the trigger word")
          }, null, 8, ["modelValue", "title", "label", "placeholder"]),
          R(c(Fl), {
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
      R(c(cn), {
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
        R(c(zn), {
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
}), L_ = /* @__PURE__ */ xe(M_, [["__scopeId", "data-v-a83f0384"]]), I_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: L_
}, Symbol.toStringTag, { value: "Module" })), D_ = {
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
}, P_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HELP_DEFAULTS: D_
}, Symbol.toStringTag, { value: "Module" }));
//# sourceMappingURL=fil_design_imagemind.js.map
