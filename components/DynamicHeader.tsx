'use client'

import { usePathname } from 'next/navigation'
import { HeaderClient } from './HeaderClient'

export function DynamicHeader() {
  const pathname = usePathname()
  const isEventDetailPage = pathname.startsWith('/events/') && pathname !== '/events'
  const isAdminConsole = pathname.startsWith('/adminconsole')

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
                  { label: "Headquarter", href: "/dresden#headquarter" },
                  { label: "Makerspace", href: "/dresden#makerspace" },
                  { label: "Apply", href: "/application/dresden" },
                ]
              },
              {
                label: "Leipzig",
                children: [
                  { label: "Overview", href: "/leipzig" },
                  { label: "Headquarter", href: "/leipzig#headquarter" },
                  { label: "Makerspace", href: "/leipzig#makerspace" },
                  { label: "Apply", href: "/application/leipzig" },
                ]
              },
            ]
          },
          // { label: "Blog", href: "/blogs" },
          { label: "Projects", href: "/projects" },
          {
            label: "Contributors",
            href: "/contributors",
            children: [
              { label: "Ober Yetis", href: "/contributors/ober-yetis" },
              { label: "Yeti Board", href: "/contributors/board" },
              { label: "Our Partners", href: "/contributors/sponsors" },
              //{ label: "Mentors", href: "/contributors/mentors" },
              { label: "Our Speakers", href: "/contributors/fireside-chats" }
            ]
          },

          { label: "Book a room", href: "/rooms" },
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
      variant={(isEventDetailPage || isAdminConsole) ? 'black' : 'default'}
    />
  )
}
