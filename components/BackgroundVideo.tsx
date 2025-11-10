'use client'

import { useEffect, useState } from 'react'

export function BackgroundVideo({ src }: { src: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <video
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      src={src}
      preload="none"
    />
  )
}

