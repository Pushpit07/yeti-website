"use client"

import { useState, useEffect } from "react"

export function useSheetData<T>(
    cacheKey: string,
    fetcher: () => Promise<T[]>
) {
    const [data, setData] = useState<T[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isStale, setIsStale] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    // Helper to load data
    const loadData = async (force: boolean = false) => {
        try {
            setIsLoading(true)

            // Dynamic import to avoid SSR issues if this hook is somehow init on server (though it has "use client")
            const { fetchWithTTLCache } = await import("@/lib/cache")

            const result = await fetchWithTTLCache(cacheKey, fetcher, { force })

            setData(result.data)
            setIsStale(result.isStale)
            setError(null)

            // If stale, we might want to automatically re-fetch in background and update?
            // fetchWithTTLCache already triggers background revalidation if stale.
            // But we need to know when that background fetch finishes to update the UI "freshly".
            // Since fetchWithTTLCache doesn't return a "promise of future fresh data" when stale,
            // we'd need a way to subscribe.
            // For simplicity in this v1: 
            // If it returns stale, we can optionally trigger a forced background refresh *if* we want live updates,
            // or just be happy showing stale data until next reload.
            // Requirement says: "return cached data immediately (stale) AND re-fetch in background to update cache + UI."

            if (result.isStale) {
                // The cache module started a background fetch. 
                // We, as the UI, don't know when it finishes unless we poll or await a second promise.
                // Improving `fetchWithTTLCache` to return the background promise would be cleaner,
                // OR we just "force" a refresh here if we want strictly fresh data eventually.
                // But `fetchWithTTLCache` doc said: "return data immediately".

                // Let's do a simple "swr" effect:
                // If stale, we re-run the fetcher cleanly to get fresh data for the UI *after* the fast render.
                fetcher().then(freshData => {
                    setData(freshData)
                    setIsStale(false)
                    // Also update cache
                    import("@/lib/cache").then(mod => {
                        // We use a private internal, or just call fetchWithTTLCache with force=true to update cache?
                        // Actually calling fetchWithTTLCache(..., {force: true}) performs both: fetch + update cache.
                        mod.fetchWithTTLCache(cacheKey, fetcher, { force: true })
                    })
                }).catch(e => console.error("Background refresh failed", e))
            }

        } catch (err) {
            console.error(`Failed to fetch sheet data (${cacheKey}):`, err)
            setError(err instanceof Error ? err : new Error("Unknown error"))
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        loadData(false)
    }, [cacheKey]) // Fetcher dependency removed to avoid infinite loops if fetcher is an inline function

    const refresh = () => loadData(true)

    return { data, isLoading, error, isStale, refresh }
}
