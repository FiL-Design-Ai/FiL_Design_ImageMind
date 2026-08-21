"""One module per node, each exporting its `CONTRACT`.

`registry.py` used to hold all nineteen in one 900-line file that imported
from eight modules under `common/` — so editing one node's widgets touched the
file every other node's contract was read from, and every import of the
registry paid for all of them.
"""
