import logging
import random
import threading
import time
from typing import Any, Dict, Optional
from urllib.parse import urlparse

import requests

from .config import get_config

from .brand import BRAND

logger = logging.getLogger(f"{BRAND}.Network")

# Default retry policy. Override per-call via request(..., retry_statuses=...,
# no_retry_statuses=..., retry_delay_base=...).
_DEFAULT_RETRY_STATUSES = {429, 502, 503, 504}
_DEFAULT_NO_RETRY_STATUSES = {400, 401, 403, 404}
_DEFAULT_RETRY_DELAY_BASE = 0.5


class HTTPClient:
    def __init__(self, max_retries: Optional[int] = None, default_timeout: Optional[int] = None):
        self.config = get_config()
        self.max_retries = 3 if max_retries is None else max_retries
        self.default_timeout = 60 if default_timeout is None else default_timeout
        self._session = requests.Session()
        adapter = requests.adapters.HTTPAdapter(pool_connections=50, pool_maxsize=50, max_retries=0)
        self._session.mount("http://", adapter)
        self._session.mount("https://", adapter)

    def request(self, method: str, url: str, **kwargs: Any) -> requests.Response:
        timeout = kwargs.pop("timeout", self.default_timeout)
        quiet = kwargs.pop("quiet", False)
        max_retries = kwargs.pop("max_retries", self.max_retries)
        retry_statuses = set(kwargs.pop("retry_statuses", _DEFAULT_RETRY_STATUSES))
        no_retry_statuses = set(kwargs.pop("no_retry_statuses", _DEFAULT_NO_RETRY_STATUSES))
        retry_delay_base = kwargs.pop("retry_delay_base", _DEFAULT_RETRY_DELAY_BASE)

        if "verify" not in kwargs:
            parsed = urlparse(url)
            kwargs["verify"] = parsed.scheme == "https" and parsed.hostname not in ("localhost", "127.0.0.1", "::1")

        if "proxies" not in kwargs:
            proxy = self.config.get_proxy(url)
            if proxy:
                kwargs["proxies"] = {"http": proxy, "https": proxy}

        for attempt in range(max_retries + 1):
            try:
                if attempt > 0:
                    # Exponential backoff + small jitter (improvement over backup:
                    # the backup had no jitter, which caused synchronized retry
                    # storms against rate-limited endpoints).
                    wait_time = retry_delay_base * (2 ** (attempt - 1))
                    wait_time += random.uniform(0, 0.25 * retry_delay_base)
                    if not quiet:
                        logger.warning("Retry %s/%s for %s in %.2fs", attempt, max_retries, url, wait_time)
                    time.sleep(wait_time)

                response = self._session.request(method, url, timeout=timeout, **kwargs)

                if response.status_code >= 400:
                    if response.status_code in no_retry_statuses:
                        response.raise_for_status()
                    if response.status_code in retry_statuses and attempt < max_retries:
                        # Honor Retry-After header if present (Google sends this on 429).
                        # Cap at 65 s to avoid hanging ComfyUI queue indefinitely.
                        retry_after_raw = response.headers.get("Retry-After", "")
                        try:
                            retry_after_sec = min(float(retry_after_raw), 65.0) if retry_after_raw else None
                        except ValueError:
                            retry_after_sec = None
                        if retry_after_sec and retry_after_sec > retry_delay_base:
                            if not quiet:
                                logger.warning("Retry-After: %.0fs — waiting before retry %s/%s", retry_after_sec, attempt + 1, max_retries)
                            time.sleep(retry_after_sec)
                        continue
                    response.raise_for_status()
                return response

            except (requests.exceptions.ConnectionError, requests.exceptions.Timeout) as exc:
                if attempt < max_retries:
                    if not quiet:
                        logger.warning("Network error on %s: %s", url, exc)
                    continue
                if not quiet:
                    logger.error("Failed all %s attempts for %s: %s", max_retries + 1, url, exc)
                raise
            except requests.exceptions.HTTPError:
                raise

        raise RuntimeError(f"HTTPClient exhausted retries for {url}")

    def get(self, url: str, **kwargs: Any) -> requests.Response:
        return self.request("GET", url, **kwargs)

    def post(self, url: str, **kwargs: Any) -> requests.Response:
        return self.request("POST", url, **kwargs)

    def close(self) -> None:
        self._session.close()


# What a 429 costs the next request when the provider names no delay of its
# own. Google's free tier allows 15 requests a minute — 4s apart — and the
# Provider Loader ships with 100ms, so a Dataset Forge run over a folder used
# to walk straight into the wall around the sixteenth image.
RATE_LIMIT_PENALTY_MS = 4000
RATE_LIMIT_PENALTY_CEILING_MS = 30000
# How long a penalty stands without a fresh 429. Long enough to carry a batch
# through, short enough that one bad minute does not slow the whole session.
RATE_LIMIT_PENALTY_TTL_S = 120.0


def retry_after_seconds(response: Any) -> Optional[float]:
    """The provider's own answer to "how long should I wait", if it gives one.

    Preferred over any table of tier limits: the account's real quota is not
    knowable from here, and guessing it either throttles a paid account or
    fails to protect a free one.
    """
    try:
        raw = (response.headers or {}).get("Retry-After")
    except Exception:
        return None
    if not raw:
        return None
    try:
        return max(0.0, float(str(raw).strip()))
    except (TypeError, ValueError):
        return None


class RateLimiter:
    """Per-provider request spacing that widens when a provider pushes back.

    The spacing used to be one clock for every provider at once, so a slow
    pace chosen for Google also held up Groq, and a 429 changed nothing at all
    — the next request went out at the same rate that had just been refused.
    """

    def __init__(self, default_ms: int = 100):
        self._lock = threading.Lock()
        self._last: Dict[str, float] = {}
        self._penalty: Dict[str, tuple] = {}
        self._default = default_ms

    def _penalty_ms(self, key: str) -> int:
        amount, expires = self._penalty.get(key, (0, 0.0))
        if not amount or time.time() >= expires:
            return 0
        return int(amount)

    def wait_if_needed(self, ms: Optional[int] = None, provider: str = "") -> None:
        key = (provider or "").strip().lower()
        requested = ms if ms is not None else self._default
        wait_s = 0.0
        with self._lock:
            # Reserve the send slot, then sleep OUTSIDE the lock. Holding the
            # lock across time.sleep serialized every provider (and penalize())
            # for the whole wait, not just this one.
            interval = max(requested, self._penalty_ms(key)) / 1000.0
            elapsed = time.time() - self._last.get(key, 0.0)
            if elapsed < interval:
                wait_s = min(interval - elapsed, 5.0)
            self._last[key] = time.time() + wait_s
        if wait_s > 0:
            time.sleep(wait_s)

    def penalize(self, provider: str, retry_after_s: Optional[float] = None) -> int:
        """Widen this provider's spacing after it answered 429.

        Repeats double the wait rather than reapplying the same one: a limit
        that was hit twice is not being respected by the current pace.
        """
        key = (provider or "").strip().lower()
        with self._lock:
            asked = int((retry_after_s or 0) * 1000)
            current = self._penalty_ms(key)
            widened = max(asked, current * 2, RATE_LIMIT_PENALTY_MS)
            widened = min(widened, RATE_LIMIT_PENALTY_CEILING_MS)
            self._penalty[key] = (widened, time.time() + RATE_LIMIT_PENALTY_TTL_S)
            return widened
