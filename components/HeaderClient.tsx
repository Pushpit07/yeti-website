'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Navigation } from '@/lib/types'
import { ApplyNowButton } from './ApplyNowButton'

export function HeaderClient({ nav, title, variant = 'default' }: { nav: Navigation; title: string; variant?: 'default' | 'black' }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [locationDropdownHovered, setLocationDropdownHovered] = useState(false)
  const [forceHideLocationDropdown, setForceHideLocationDropdown] = useState(false)

  // Open "Apply" dropdown by default when mobile menu opens
  useEffect(() => {
    if (mobileMenuOpen) {
      setOpenDropdown('Apply')
    } else {
      setOpenDropdown(null)
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
        setOpenDropdown(null)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileMenuOpen])

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setOpenDropdown(null)
  }

  const isBlackVariant = variant === 'black'

  return (
    <>
      {/* Blur overlay when Location dropdown is open */}
      {locationDropdownHovered && (
        <div className="fixed inset-0 top-16 bg-black/20 backdrop-blur-sm z-40 transition-opacity" />
      )}

      <header
        className={`fixed left-0 right-0 top-0 z-50 border-b ${mobileMenuOpen || locationDropdownHovered ? '' : 'transition-all duration-300'
          } ${mobileMenuOpen
            ? 'border-white/10 bg-black'
            : isBlackVariant
              ? 'border-white/10 bg-black'
              : locationDropdownHovered
                ? 'border-white/10 bg-black'
                : scrolled
                  ? 'border-white/10 bg-black/95 backdrop-blur-sm'
                  : 'border-white/5 bg-black/5 backdrop-blur-md'
          }`}
      >
      <div className="mx-auto flex h-16 w-full items-center justify-between px-4 md:px-12 lg:px-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/white-transparent.png"
            alt={title}
            width={120}
            height={40}
            className="h-13 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.main.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="group relative flex items-center"
                onMouseEnter={() => {
                  if (item.label === 'Location') {
                    setLocationDropdownHovered(true)
                    setForceHideLocationDropdown(false)
                  }
                }}
                onMouseLeave={() => {
                  if (item.label === 'Location') {
                    setLocationDropdownHovered(false)
                    setForceHideLocationDropdown(false)
                  }
                }}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 text-sm hover:underline ${scrolled ? 'text-white' : 'text-white'}`}
                  >
                    {item.label}
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                ) : (
                  <button className={`flex items-center gap-1 text-sm hover:underline ${scrolled ? 'text-white' : 'text-white'}`}>
                    {item.label}
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
                {item.label === 'Location' ? (
                  <>
                    {/* Invisible connector to maintain hover */}
                    <div className={`${forceHideLocationDropdown ? 'hidden' : 'invisible group-hover:visible'} absolute left-0 top-full w-full h-full z-50`}
                      onMouseEnter={() => {
                        setLocationDropdownHovered(true)
                        setForceHideLocationDropdown(false)
                      }}
                      onMouseLeave={() => {
                        setLocationDropdownHovered(false)
                        setForceHideLocationDropdown(false)
                      }}
                    />
                    {/* Full-width dropdown */}
                    <div
                      className={`${forceHideLocationDropdown ? 'hidden' : 'invisible group-hover:visible group-hover:opacity-100'} fixed left-0 right-0 top-16 z-50 opacity-0 transition-all pointer-events-none`}
                      onMouseEnter={() => {
                        setLocationDropdownHovered(true)
                        setForceHideLocationDropdown(false)
                      }}
                      onMouseLeave={() => {
                        setLocationDropdownHovered(false)
                        setForceHideLocationDropdown(false)
                      }}
                    >
                      <div className={`${scrolled ? 'border-white/10 bg-black' : 'border-white/20 bg-black'} border-t shadow-lg pointer-events-auto`}>
                        <div className="mx-auto max-w-7xl px-4 py-6 md:px-12 lg:px-16">
                          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                          {item.children.map((child) => (
                            child.children ? (
                              <div key={child.label} className="space-y-2">
                                {child.href ? (
                                  <Link
                                    href={child.href}
                                    className="block rounded px-3 py-2 text-base font-semibold text-white hover:bg-white/20"
                                    onClick={() => {
                                      setLocationDropdownHovered(false)
                                      setForceHideLocationDropdown(true)
                                    }}
                                  >
                                    {child.label}
                                  </Link>
                                ) : (
                                  <div className="block rounded px-3 py-2 text-base font-semibold text-white">
                                    {child.label}
                                  </div>
                                )}
                                <div className="ml-4 space-y-1 border-l-2 border-white/20 pl-4">
                                  {child.children.map((nestedChild) => (
                                    <Link
                                      key={nestedChild.label}
                                      href={nestedChild.href ?? '#'}
                                      className="block rounded px-3 py-1.5 text-sm text-white/80 hover:bg-white/20 hover:text-white"
                                      onClick={() => {
                                        setLocationDropdownHovered(false)
                                        setForceHideLocationDropdown(true)
                                      }}
                                    >
                                      {nestedChild.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <Link
                                key={child.label}
                                href={child.href ?? '#'}
                                className="block rounded px-3 py-2 text-base text-white hover:bg-white/20"
                                onClick={() => {
                                  setLocationDropdownHovered(false)
                                  setForceHideLocationDropdown(true)
                                }}
                              >
                                {child.label}
                              </Link>
                            )
                          ))}
                        </div>
                      </div>
                    </div>
                    </div>
                  </>
                ) : (
                  <div
                    className={`invisible absolute right-0 top-full z-10 pt-5 min-w-40 opacity-0 transition-all group-hover:visible group-hover:opacity-100`}
                  >
                    <div className={`rounded-md border p-2 shadow-lg ${scrolled ? 'border-white/10 bg-black' : 'border-white/20 bg-black'}`}>
                    {item.children.map((child) => (
                      child.children ? (
                        <div key={child.label}>
                          <Link
                            href={child.href ?? '#'}
                            className="block rounded px-3 py-1.5 text-sm text-white hover:bg-white/20"
                          >
                            {child.label}
                          </Link>
                          {child.children.map((nestedChild) => (
                            <Link
                              key={nestedChild.label}
                              href={nestedChild.href ?? '#'}
                              className="block rounded px-3 py-1.5 pl-6 text-sm text-white/80 hover:bg-white/20 hover:text-white"
                            >
                              {nestedChild.label}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          key={child.label}
                          href={child.href ?? '#'}
                          className="block rounded px-3 py-1.5 text-sm text-white hover:bg-white/20"
                        >
                          {child.label}
                        </Link>
                      )
                    ))}
                    </div>
                  </div>
                )}
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
          {/* Apply Now Button */}
          <ApplyNowButton className="ml-2" />
        </nav>

        {/* Mobile: Apply Now Button and Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ApplyNowButton />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="flex h-6 w-7 flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-white ${mobileMenuOpen ? 'translate-y-[11px] rotate-45' : ''
                  }`}
              />
              <span
                className={`block h-0.5 w-full bg-white ${mobileMenuOpen ? 'opacity-0' : ''
                  }`}
              />
              <span
                className={`block h-0.5 w-full bg-white ${mobileMenuOpen ? '-translate-y-[11px] -rotate-45' : ''
                  }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Mobile Navigation Drawer - Full Screen */}
          <nav className="fixed inset-x-0 bottom-0 top-16 z-100 overflow-y-auto bg-black md:hidden">
            <div className="px-4 py-6">
              {/* Mobile Apply Now Button */}
              <div className="mb-4 pb-4 border-b border-white/20">
                <ApplyNowButton className="w-full justify-center" />
              </div>
              {nav.main.map((item) =>
                item.children ? (
                  <div key={item.label} className="mb-2">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-base font-medium text-white transition-colors hover:bg-white/10"
                      aria-expanded={openDropdown === item.label}
                    >
                      {item.label}
                      <svg
                        className={`h-5 w-5 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <div className="ml-4 mt-1 space-y-1 border-l border-white/20 pl-4">
                        {item.children.map((child) => (
                          child.children ? (
                            <div key={child.label}>
                              {child.href ? (
                                <Link
                                  href={child.href}
                                  onClick={closeMobileMenu}
                                  className="block rounded-lg px-4 py-2.5 text-sm text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                                >
                                  {child.label}
                                </Link>
                              ) : (
                                <div className="block rounded-lg px-4 py-2.5 text-sm text-white/90 font-semibold">
                                  {child.label}
                                </div>
                              )}
                              {child.children.map((nestedChild) => (
                                <Link
                                  key={nestedChild.label}
                                  href={nestedChild.href ?? '#'}
                                  onClick={closeMobileMenu}
                                  className="block rounded-lg px-4 py-2.5 pl-8 text-xs text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                                >
                                  {nestedChild.label}
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <Link
                              key={child.label}
                              href={child.href ?? '#'}
                              onClick={closeMobileMenu}
                              className="block rounded-lg px-4 py-2.5 text-sm text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                            >
                              {child.label}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href ?? '#'}
                    onClick={closeMobileMenu}
                    className="mb-2 block rounded-lg px-4 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </nav>
        </>
      )}
    </header>
    </>
  )
}

