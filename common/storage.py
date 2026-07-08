from __future__ import annotations

import hashlib
import json
import sys
import threading
import time
from collections import OrderedDict
from dataclasses import dataclass, field
from typing import Any, Optional


@dataclass
class CacheEntry:
    key: str
    value: Any
    size_bytes: int
    created_at: float = field(default_factory=time.time)
    expires_at: float = 0.0
    access_count: int = 0
    last_accessed: float = field(default_factory=time.time)

    def is_expired(self) -> bool:
        return time.time() > self.expires_at if self.expires_at > 0 else False

    def touch(self) -> None:
        self.last_accessed = time.time()
        self.access_count += 1


class CacheManager:
    def __init__(self, name: str = "default", max_size_mb: float = 50.0, max_items: int = 500, default_ttl: int = 3600) -> None:
        self.name = name
        self.max_size_bytes = int(max_size_mb * 1024 * 1024)
        self.max_items = max_items
        self.default_ttl = default_ttl
        self._cache: OrderedDict[str, CacheEntry] = OrderedDict()
        self._lock = threading.RLock()

    def get(self, key: str, default: Any = None) -> Any:
        with self._lock:
            if key not in self._cache:
                return default
            entry = self._cache[key]
            if entry.is_expired():
                self._cache.pop(key)
                return default
            entry.touch()
            self._cache.move_to_end(key)
            return entry.value

    def set(self, key: str, value: Any, size_bytes: Optional[int] = None, ttl: Optional[int] = None) -> bool:
        with self._lock:
            size = size_bytes or sys.getsizeof(value)
            if size > self.max_size_bytes:
                return False
            if key in self._cache:
                self._cache.pop(key)
            while (len(self._cache) >= self.max_items) and self._cache:
                self._cache.popitem(last=False)
            now = time.time()
            self._cache[key] = CacheEntry(key, value, size, now, now + (ttl or self.default_ttl))
            return True

    def clear(self) -> None:
        with self._lock:
            self._cache.clear()

    def stats(self) -> dict:
        with self._lock:
            return {"items": len(self._cache), "size_bytes": sum(e.size_bytes for e in self._cache.values())}


class PromptCache:
    def __init__(self) -> None:
        self._manager = CacheManager("prompt_cache", max_size_mb=50.0, max_items=500, default_ttl=3600)

    def _make_key(self, provider: str, model: str, system: str, user: str, image_hash: str = "", seed: int = -1, temperature: float = 0.0) -> str:
        data = {"p": provider, "m": model, "s": system, "u": user, "i": image_hash, "seed": seed, "t": temperature}
        return hashlib.sha256(json.dumps(data, sort_keys=True).encode()).hexdigest()

    def get(self, provider: str, model: str, system: str, user: str, image_hash: str = "", seed: int = -1, temperature: float = 0.0) -> Optional[str]:
        return self._manager.get(self._make_key(provider, model, system, user, image_hash, seed, temperature))

    def set(self, provider: str, model: str, system: str, user: str, response: str, image_hash: str = "", seed: int = -1, temperature: float = 0.0) -> None:
        if response:
            self._manager.set(self._make_key(provider, model, system, user, image_hash, seed, temperature), response, len(response.encode()))

    def clear(self) -> None:
        self._manager.clear()


_global_prompt_cache: Optional[PromptCache] = None


def get_prompt_cache() -> PromptCache:
    global _global_prompt_cache
    if _global_prompt_cache is None:
        _global_prompt_cache = PromptCache()
    return _global_prompt_cache
