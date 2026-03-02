'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function BackgroundVideo({ src }: { src: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isVideo = src.match(/\.(mp4|webm|ogg)$/i) !== null

  if (!isVideo) {
    return (
      <div className="absolute inset-0 h-full w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt="Background Media"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center" }}
          loading="lazy"
          decoding="async"
        />
      </div>
    )
  }

  return (
    <video
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      style={{ objectPosition: "center" }}
      autoPlay
      muted
      loop
      playsInline
      src={src}
      preload="none"
    />
  )
}

