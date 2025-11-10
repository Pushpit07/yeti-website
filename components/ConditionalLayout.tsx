'use client'

import { usePathname } from 'next/navigation'
import { SkipToContent } from './SkipToContent'

export function ConditionalLayout({
  children,
  header,
  footer,
}: {
  children: React.ReactNode
  header: React.ReactNode
  footer: React.ReactNode
}) {
  const pathname = usePathname()
  const isLandingPage = pathname === '/'

  if (isLandingPage) {
    return <>{children}</>
  }

  return (
    <>
      <SkipToContent />
      {header}
      <main id="content">{children}</main>
      {footer}
    </>
  )
}

