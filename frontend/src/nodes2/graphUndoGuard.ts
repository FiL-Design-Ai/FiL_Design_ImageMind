/**
 * Keeps ComfyUI's global Ctrl+Z out of text the user is still typing in a FiL
 * panel.
 *
 * The seam is the host's own: `changeTracker.ts` opens its `keydown` listener
 * with `if (app.constructor.maskeditor_is_opended?.()) return`, a static the
 * mask editor was meant to raise while it owns the keyboard. It is declared
 * `static maskeditor_is_opended: (() => void) | null = null` on `ComfyApp` and
 * nothing in the current frontend ever assigns it — the layer editor moved to
 * `isDialogOpen(LAYER_EDITOR_DIALOG_KEY)` — so the slot is free for an
 * extension, and using it beats patching anything.
 *
 * What it is actually worth: that same handler already bails on
 * `activeEl.tagName === 'INPUT'` and on `activeEl.type === 'textarea'`, but
 * only while auto-queue is off or set to `instant`. The gap this closes is
 * therefore narrow and real — auto-queue in `change` mode, `contenteditable`,
 * and the moments when focus sits on a listbox row or a dialog rather than on
 * an input, which is exactly where a combo panel or a modal lives.
 */

const HOOK = "maskeditor_is_opended";

/** Editors that exist while the graph's undo must stay out of the way. */
const EDITOR_SELECTOR = ".fil-modal-backdrop, .fil-combo-panel";

/** Roots a FiL text field lives under; focus anywhere else is not ours. */
const PANEL_SELECTOR = ".fil-vue-host, .fil-modal-backdrop, .fil-combo-panel";

type AliveCheck = () => boolean;

interface Token {
  isAlive: AliveCheck;
}

const _tokens = new Set<Token>();
let _prevHook: (() => boolean) | null = null;
let _ourHook: (() => boolean) | null = null;

function _anyAlive(): boolean {
  for (const t of _tokens) {
    try {
      if (t.isAlive()) return true;
    } catch {
      // a throwing isAlive counts as dead — a broken panel must not be able to
      // freeze undo for the whole canvas
    }
  }
  return false;
}

/**
 * Hands the hook back to whoever held it before us.
 *
 * Only ever called once the last token is gone. It deliberately does NOT run
 * when a Ctrl+Z simply finds nothing alive: an earlier version released there,
 * which disarmed the guard permanently on the first undo pressed over the
 * canvas — every keystroke typed afterwards was unprotected, and nothing said
 * so.
 */
function _release(): void {
  const C = (globalThis as { app?: { constructor?: Record<string, unknown> } }).app?.constructor;
  // Someone else may have claimed the slot after us; overwriting their hook
  // with our stale predecessor would be worse than leaving it alone.
  if (C && _ourHook && C[HOOK] === _ourHook) {
    C[HOOK] = _prevHook;
  }
  _ourHook = null;
  _prevHook = null;
}

/**
 * Register an editor or input with the shared guard.
 * @param isAlive true while that editor is focused or open.
 * @returns an uninstall for this registration alone.
 */
export function installGraphUndoGuard(isAlive: AliveCheck): () => void {
  const app = (globalThis as { app?: { constructor?: Record<string, unknown> } }).app;
  const C = app?.constructor;
  if (!C || !(HOOK in C)) return () => {};

  const token: Token = { isAlive };
  _tokens.add(token);

  if (!_ourHook) {
    const previous = C[HOOK];
    _prevHook = typeof previous === "function" ? (previous as () => boolean) : null;
    _ourHook = function () {
      if (_anyAlive()) return true;
      // Not ours to block — let whoever held the slot before answer.
      try {
        return _prevHook ? Boolean(_prevHook()) : false;
      } catch {
        return false;
      }
    };
    C[HOOK] = _ourHook;
  }

  return function uninstall() {
    if (!_tokens.delete(token)) return;
    if (_tokens.size === 0) _release();
  };
}

/**
 * Guards every FiL panel at once, for the lifetime of the tab.
 *
 * One registration rather than one per panel: the state it reports is read
 * from the document at the moment the host asks, so there is nothing per-panel
 * to keep in sync. Idempotent — a second call adds no second token.
 */
let _globalUninstall: (() => void) | null = null;

export function installGlobalUndoGuardListener(): () => void {
  if (typeof document === "undefined") return () => {};
  if (_globalUninstall) return _globalUninstall;

  const uninstall = installGraphUndoGuard(() => {
    // An open combo panel or modal owns the keyboard whether or not focus
    // landed on a text field inside it.
    if (document.querySelector(EDITOR_SELECTOR)) return true;

    const active = document.activeElement as HTMLElement | null;
    if (!active) return false;
    const isTextField =
      active.tagName === "INPUT" ||
      active.tagName === "TEXTAREA" ||
      active.isContentEditable;
    return isTextField && Boolean(active.closest(PANEL_SELECTOR));
  });

  _globalUninstall = () => {
    _globalUninstall = null;
    uninstall();
  };
  return _globalUninstall;
}
