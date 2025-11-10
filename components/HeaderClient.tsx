'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Navigation } from '@/lib/types'

export function HeaderClient({ nav, title, variant = 'default' }: { nav: Navigation; title: string; variant?: 'default' | 'black' }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isBlackVariant = variant === 'black'

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        isBlackVariant
          ? 'border-white/10 bg-black'
          : scrolled
          ? 'border-white/10 bg-black/95 backdrop-blur-sm'
          : 'border-white/5 bg-black/5 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-16 w-full items-center justify-between px-8 md:px-12 lg:px-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/white-transparent.png"
            alt={title}
            width={120}
            height={40}
            className="h-13 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.main.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative flex items-center">
                <button className={`text-sm hover:underline ${scrolled ? 'text-white' : 'text-white'}`}>
                  {item.label}
                </button>
                <div
                  className={`invisible absolute right-0 top-full z-10 mt-2 min-w-40 rounded-md border p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100 ${
                    scrolled ? 'border-white/10 bg-black' : 'border-white/20 bg-black'
                  }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href ?? '#'}
                      className="block rounded px-3 py-1.5 text-sm text-white hover:bg-white/20"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href ?? '#'}
                className={`text-sm hover:underline ${scrolled ? 'text-white' : 'text-white'}`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  )
}

