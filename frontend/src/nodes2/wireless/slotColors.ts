/**
 * Colouring the transmitter's own sockets to match what is plugged into them.
 *
 * A `FiLChannel` input is declared ANY (`"*"`) so it can take anything — but
 * both render paths colour a slot from its declared *type*, and a wildcard
 * type gets a flat neutral tone: classic canvas resolves an unset
 * `color_on`/`color_off` through `colorContext.getConnectedColor(this.type)`
 * (`lib/litegraph/src/node/SlotBase.ts:46`), and the Vue-node dot renders
 * `slotData.type === '*' ? [''] : getSlotColor(type)`
 * (`renderer/extensions/vueNodes/components/SlotConnectionDot.vue:33`). Both
 * already know how to colour a real type; they just never see one, because
 * ours never changes past `"*"`.
 *
 * The fix is the same trick `nodes2/nodes/switch.ts` uses for its own
 * mirrored output: once a link exists, borrow the real type from whatever is
 * on the other end and write it onto our slot. Purely cosmetic — the backend
 * validates the connection against the schema's declared ANY type at connect
 * time and never re-reads this object, so nothing here can change what a
 * prompt accepts.
 *
 * The label text is not touched here. Core's Vue-node row draws it with a
 * fixed theme class (`InputSlot.vue`, `text-node-component-slot-text`), the
 * same component every node on the canvas shares — recolouring it would mean
 * patching a shared host component, exactly what `CLAUDE.md`'s "Работа со
 * стыком ComfyUI" section asks to be argued for before doing, not assumed.
 */

import { resolveLinkOrigin } from "./graphAccess";
import { isChannelValueInput } from "./types";
import type { WirelessGraph, WirelessNode, WirelessSlot } from "./types";

/** LiteGraph's own "nothing plugged in" type — restored on disconnect. */
const WILDCARD_TYPE = "*";

/**
 * Match every wired value slot's colour to its real source, and hand a slot
 * back its wildcard look the moment it empties.
 *
 * The reset on disconnect matters as much as the colouring itself: without
 * it, an emptied slot would keep the type of whatever it used to carry, and a
 * later connection of a *different* type would be judged (and coloured)
 * against that stale type instead of the wildcard it actually is.
 *
 * Returns true when something changed, so the caller knows whether to ask the
 * canvas to redraw.
 */
export function applySlotColors(graph: WirelessGraph, node: WirelessNode): boolean {
  let changed = false;

  for (const slot of (node.inputs ?? []) as WirelessSlot[]) {
    if (!slot || !isChannelValueInput(slot.name)) continue;

    if (slot.link == null) {
      if (slot.type !== WILDCARD_TYPE) {
        slot.type = WILDCARD_TYPE;
        changed = true;
      }
      continue;
    }

    const origin = resolveLinkOrigin(graph, slot.link);
    if (!origin || slot.type === origin.type) continue;
    slot.type = origin.type;
    changed = true;
  }

  return changed;
}
