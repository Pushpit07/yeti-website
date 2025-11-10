'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { Navigation } from '@/lib/types'

export function HeaderClient({ nav, title }: { nav: Navigation; title: string }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-white/10 bg-black/95 backdrop-blur-sm'
          : 'border-white/20 bg-white/5 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className={`font-semibold transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>
          {title}
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

