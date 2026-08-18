"""The range check the host stops doing on our behalf.

ComfyUI validates every numeric input against the ``min``/``max`` its schema
declares — but it skips that check entirely for any node whose
``validate_inputs()`` accepts ``**kwargs`` (``execution.py``: ``if x not in
validate_function_inputs and not validate_has_kwargs``). It is all-or-nothing
per node: one ``**kwargs`` and *every* input on that node loses its range
check, not just the ones the function names.

Three of our nodes are in exactly that position — they take ``config`` and
ignore the rest, which is what the ``**kwargs`` is for. That silence has cost
us once already: Optic Scanner's "New fixed" button drew a seed roughly 9000×
its declared maximum, and the value went all the way to the provider API,
which cannot represent it and quietly substitutes one of its own. A fixed seed
that produced a different answer on every run.

The frontend now draws inside the declared range, but a value can also arrive
over a wire from any node in the graph, and that path never touches our panel.
So the check is restored here, read off the very same schema the host would
have read it from — nothing to keep in sync by hand.
"""

from typing import Any, Optional

_RANGES: dict[str, dict[str, tuple[Optional[float], Optional[float]]]] = {}


def _declared_ranges(node_class: type) -> dict[str, tuple[Optional[float], Optional[float]]]:
    """``{input name: (min, max)}`` for every input of ``node_class`` that has one.

    Cached per class: ``define_schema()`` rebuilds its option lists on every
    call (the scanner's run to a few thousand style entries), and validation
    runs once per node per queued prompt.
    """
    key = getattr(node_class, "__name__", str(node_class))
    cached = _RANGES.get(key)
    if cached is not None:
        return cached

    ranges: dict[str, tuple[Optional[float], Optional[float]]] = {}
    try:
        inputs = node_class.define_schema().inputs or []
    except Exception:
        # A schema we cannot read is not a reason to refuse the prompt — the
        # host's own type checks still ran before this point.
        inputs = []
    for spec in inputs:
        low = getattr(spec, "min", None)
        high = getattr(spec, "max", None)
        if low is None and high is None:
            continue
        name = getattr(spec, "id", None)
        if name:
            ranges[str(name)] = (low, high)

    _RANGES[key] = ranges
    return ranges


def numeric_range_error(node_class: type, values: dict[str, Any]) -> Optional[str]:
    """The first out-of-range input as a message, or ``None`` when all are fine.

    ``values`` is what ``validate_inputs()`` was handed. Inputs fed by a wire
    arrive as ``None`` (the host assembles this call with no execution list, so
    upstream outputs are not available yet) and are skipped — their value is not
    knowable until the graph runs, and the node's own code has to cope with it
    either way.
    """
    ranges = _declared_ranges(node_class)
    for name, value in values.items():
        bounds = ranges.get(name)
        if bounds is None or value is None:
            continue
        # `bool` is an `int` in Python; a boolean input has no declared range,
        # so it never reaches here — but be explicit rather than rely on that.
        if isinstance(value, bool) or not isinstance(value, (int, float)):
            continue
        low, high = bounds
        if low is not None and value < low:
            return f"{name}: {value} is below the minimum of {low}"
        if high is not None and value > high:
            return f"{name}: {value} is above the maximum of {high}"
    return None
