'use client'

import { usePathname } from 'next/navigation'
import { HeaderClient } from './HeaderClient'

export function DynamicHeader() {
  const pathname = usePathname()
  const isEventDetailPage = pathname.startsWith('/events/') && pathname !== '/events'

  return (
    <HeaderClient
      nav={{
        main: [
          { label: "What is YETI?", href: "/wtf" },
          {
            label: "Location",
            children: [
              {
                label: "Dresden",
                children: [
                  { label: "Overview", href: "/dresden" },
                  { label: "HQ", href: "/hq" },
                  { label: "Makerspace", href: "/makerspace" },
                  { label: "Apply", href: "/application/dresden" },
                ]
              },
              {
                label: "Leipzig",
                children: [
                  { label: "Overview", href: "/leipzig" },
                  { label: "Apply", href: "/application/leipzig" },
                ]
              },
            ]
          },
          { label: "Blog", href: "/blogs" },
          { label: "Projects", href: "/projects" },
          {
            label: "Contributors",
            href: "/contributors",
            children: [
              { label: "Ober Yetis", href: "/contributors/ober-yetis" },
              { label: "Yeti Board", href: "/contributors/board" },
              { label: "Sponsors", href: "/contributors/sponsors" },
              { label: "Mentors", href: "/contributors/mentors" },
              { label: "Fireside Chats", href: "/contributors/fireside-chats" }
            ]
          },
          { label: "Events", href: "/events" }
        ],
        footer: [
          { label: "Legal Notice", href: "/legal-notice" },
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Impressum", href: "/impressum" },
          { label: "Datenschutz", href: "/datenschutz" }
        ]
      }}
      title="YETI"
      variant={isEventDetailPage ? 'black' : 'default'}
    />
  )
}
