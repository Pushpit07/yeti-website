import { CACHE_TTL, CacheKey } from "./config";

type CacheEntry<T> = {
    data: T;
    fetchedAt: number;
    expiresAt: number;
};

// In-memory cache to avoid repeated JSON.parse calls within the same session
const memoryCache = new Map<string, CacheEntry<unknown>>();

// Promise map to deduplicate inflight requests
const inFlightRequests = new Map<string, Promise<unknown>>();

/**
 * Generates a namespaced key for localStorage
 */
function getStorageKey(key: string) {
    return `portfolio_cache:${key}`;
}

/**
 * Clears all portfolio-related cache from localStorage
 */
export function clearAllCache() {
    if (typeof window === "undefined") return;

    const toRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith("portfolio_cache:")) {
            toRemove.push(key);
        }
    }

    toRemove.forEach((k) => localStorage.removeItem(k));
    memoryCache.clear();
    console.log("🧹 Cache cleared!");
}

/**
 * Invalidates a specific cache key
 */
export function invalidateCache(key: string) {
    if (typeof window === "undefined") return;
    localStorage.removeItem(getStorageKey(key));
    memoryCache.delete(key);
}

/**
 * Determine TTL for a given key.
 * Strategies:
 * 1. Exact match in CACHE_TTL
 * 2. Partial match (e.g. "projects_v2" matches "projects") - Optional enhancement
 * 3. Default
 */
function getTTL(key: string): number {
    if (key in CACHE_TTL) {
        return CACHE_TTL[key as keyof typeof CACHE_TTL];
    }
    return CACHE_TTL.default;
}

/**
 * Main Fetcher with Stale-While-Revalidate Strategy
 */
export async function fetchWithTTLCache<T>(
    key: string,
    fetcher: () => Promise<T>,
    options: { force?: boolean } = {}
): Promise<{ data: T; isStale: boolean; fromCache: boolean }> {
    // Server-side guard: always fetch fresh
    if (typeof window === "undefined") {
        const data = await fetcher();
        return { data, isStale: false, fromCache: false };
    }

    // Check for force bypass or debug query param
    const urlParams = new URLSearchParams(window.location.search);
    const forceRefresh = options.force || urlParams.get("nocache") === "1";

    if (forceRefresh) {
        const data = await fetchAndCache(key, fetcher);
        return { data, isStale: false, fromCache: false };
    }

    const storageKey = getStorageKey(key);

    // 1. Try Memory Cache
    let cached = memoryCache.get(key);

    // 2. Try LocalStorage if memory miss
    if (!cached) {
        try {
            const raw = localStorage.getItem(storageKey);
            if (raw) {
                cached = JSON.parse(raw);
                // Hydrate memory cache
                if (cached) memoryCache.set(key, cached);
            }
        } catch (e) {
            console.warn("Cache parse error", e);
            localStorage.removeItem(storageKey);
        }
    }

    const now = Date.now();

    // 3. Cache Hit
    if (cached) {
        const isExpired = now > cached.expiresAt;

        if (!isExpired) {
            // fresh
            return { data: cached.data as T, isStale: false, fromCache: true };
        } else {
            // stale - return data immediately, but trigger revalidation
            // We don't await this, just verify it runs
            revalidateInBackground(key, fetcher).catch((err) =>
                console.error("Background revalidation failed", err)
            );

            return { data: cached.data as T, isStale: true, fromCache: true };
        }
    }

    // 4. Cache Miss - Fetch & Wait
    const data = await fetchAndCache(key, fetcher);
    return { data, isStale: false, fromCache: false };
}

/**
 * Fetch wrapper that handles deduplication and caching
 */
async function fetchAndCache<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
    // Deduplicate inflight requests
    if (inFlightRequests.has(key)) {
        return inFlightRequests.get(key) as Promise<T>;
    }

    const promise = (async () => {
        try {
            const data = await fetcher();
            const ttl = getTTL(key);
            const now = Date.now();

            const entry: CacheEntry<T> = {
                data,
                fetchedAt: now,
                expiresAt: now + ttl,
            };

            // Save to persistence
            memoryCache.set(key, entry);
            localStorage.setItem(getStorageKey(key), JSON.stringify(entry));

            console.log(`[Cache] Updated ${key} (TTL: ${ttl / 60000}m)`);
            return data;
        } finally {
            inFlightRequests.delete(key);
        }
    })();

    inFlightRequests.set(key, promise);
    return promise;
}

/**
 * Background revalidator (helper for SWR)
 */
async function revalidateInBackground<T>(key: string, fetcher: () => Promise<T>) {
    console.log(`[Cache] Background revalidating ${key}...`);
    await fetchAndCache(key, fetcher);
    // Optional: Emit an event here if you want to notify listeners of deep updates
    // For now, next page load or polling hook usage will pick it up
}
