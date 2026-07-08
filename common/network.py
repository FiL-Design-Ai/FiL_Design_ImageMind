import logging
import random
import threading
import time
from typing import Any, Dict, Iterable, Optional
from urllib.parse import urlparse

import requests

from .config import get_config

logger = logging.getLogger("FiL_LLM.Network")

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


class RateLimiter:
    def __init__(self, default_ms: int = 100):
        self._lock = threading.Lock()
        self._last = 0.0
        self._default = default_ms

    def wait_if_needed(self, ms: Optional[int] = None) -> None:
        interval = (ms if ms is not None else self._default) / 1000.0
        with self._lock:
            elapsed = time.time() - self._last
            if elapsed < interval:
                time.sleep(min(interval - elapsed, 5.0))
            self._last = time.time()
