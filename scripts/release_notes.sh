#!/usr/bin/env bash
#
# Print the CHANGELOG section for one version — the body of its GitHub release.
#
# Two workflows need this: the tag push that publishes a new version, and the
# manual backfill for a tag that was pushed before releases were created at
# all. Keeping the extraction here means the notes cannot drift between them.
#
#   scripts/release_notes.sh v1.1.2 > release-notes.md
#
# The argument is a tag (`v1.1.2`) or a bare version (`1.1.2`). Missing
# sections are not an error: an unreleased tag still deserves a release page,
# so a placeholder is printed and the caller carries on.
set -euo pipefail

TAG="${1:?usage: release_notes.sh <tag>}"
VERSION="${TAG#v}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

NOTES=$(awk -v v="$VERSION" '
  # The trailing group keeps 1.1.2 from matching a 1.1.20 heading.
  $0 ~ "^## " v "( |$)" { found = 1; next }
  found && /^## / { exit }
  found { print }
' "$ROOT/CHANGELOG.md")

# Trim the blank lines the section boundaries leave at both ends.
NOTES=$(printf '%s\n' "$NOTES" | sed -e '/./,$!d' | tac | sed -e '/./,$!d' | tac)

if [ -z "$NOTES" ]; then
  echo "CHANGELOG.md has no section for $VERSION — see the file for what changed."
  exit 0
fi

printf '%s\n' "$NOTES"
