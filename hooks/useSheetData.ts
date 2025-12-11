"use client"

import { useState, useEffect } from "react"

export function useSheetData<T>(fetcher: () => Promise<T[]>) {
    const [data, setData] = useState<T[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        let isMounted = true

        async function loadData() {
            try {
                setIsLoading(true)
                const result = await fetcher()
                if (isMounted) {
                    setData(result)
                    setError(null)
                }
            } catch (err) {
                if (isMounted) {
                    console.error("Failed to fetch sheet data:", err)
                    setError(err instanceof Error ? err : new Error("Unknown error"))
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false)
                }
            }
        }

        loadData()

        return () => {
            isMounted = false
        }
    }, [fetcher])

    return { data, isLoading, error }
}
