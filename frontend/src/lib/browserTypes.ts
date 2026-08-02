/**
 * The shapes `FilBrowser` speaks.
 *
 * Deliberately domain-free. A model and a style have nothing in common, so the
 * two pickers map their own data down to these and look the picked `id` back
 * up — rather than the browser learning about providers, tiers, vision flags
 * and style categories, which is how a shared component turns back into two.
 *
 * Kept out of the component file so a wrapper can import the types without
 * pulling a `.vue` into its type graph.
 */

/** A small coloured label on a card — "Vision", "Free", "Local". */
export interface BrowserTag {
  label: string;
  /** Picks the tint. Anything unknown falls back to the neutral one. */
  tone?: "accent" | "neutral" | "ok" | "warn";
  title?: string;
}

/** One row or card in the middle column. */
export interface BrowserItem {
  /** Unique, and what every event reports back. */
  id: string;
  /** The main line. */
  label: string;
  /** The quieter second line: a category, a folder, a date. */
  sub?: string;
  /** Emoji shown before the label when there is no preview picture. */
  icon?: string;
  /** Image source for the tile. Falls back to `icon` when absent. */
  preview?: string;
  tags?: BrowserTag[];
  /** Full text for the tooltip when the label is shortened. */
  title?: string;
  /**
   * Marks a card as one of the things currently CHOSEN, for a browser that
   * picks several at once. Separate from the selection cursor, which is a
   * single card and only says what the detail pane is describing.
   */
  checked?: boolean;
}

/** One clickable line in the left column. */
export interface BrowserSidebarRow {
  id: string;
  label: string;
  /** Shown right-aligned. `null` and `undefined` both mean "no number". */
  count?: number | null;
  /** Colour swatch before the label — real groups use it, facets do not. */
  dot?: string | null;
  /** An emoji, for rows whose meaning fits in one. */
  icon?: string | null;
  /**
   * A drawn icon from the pack's own set, for rows where an emoji will not do —
   * the provider logos. Kept as a plain string so this module does not drag the
   * icon registry into every file that imports a type.
   */
  iconName?: string | null;
  /** Nesting depth for a tree; 0 is top level. */
  indent?: number;
  title?: string;
  /** Reads as an action rather than a filter ("+ New folder"). */
  muted?: boolean;
}

/** A stack of rows under an optional heading. */
export interface BrowserSidebarSection {
  id: string;
  /** Omitted on the first block — a heading over the very first rows is noise. */
  heading?: string | null;
  rows: BrowserSidebarRow[];
}
