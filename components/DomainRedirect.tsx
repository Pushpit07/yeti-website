"use client"

import { useEffect } from "react"

export default function DomainRedirect() {
    useEffect(() => {
        // Check if we're on the client side
        if (typeof window !== "undefined") {
            const hostname = window.location.hostname
            const pathname = window.location.pathname

            // If accessing yeti-leipzig.org and not already on /leipzig route
            if (hostname.includes("yeti-leipzig") && pathname === "/") {
                window.location.replace("/leipzig")
            }
        }
    }, [])

    return null
}
