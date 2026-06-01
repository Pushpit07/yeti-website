'use client'

import Link from "next/link"
import Image from "next/image"

import type { ContactInfo } from "@/lib/sheets"

const footerSections = [
  {
    title: "About",
    links: [
      { name: "What is YETI?", href: "/wtf" },
      { name: "How it started?", href: "/how-it-started" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Events", href: "/events" },
      { name: "Contributors", href: "/contributors" },
      { name: "Projects", href: "/projects" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Legal Notice", href: "/legal-notice" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Impressum", href: "/impressum" },
      { name: "Datenschutz", href: "/datenschutz" },
    ],
  },
];

export function FooterClient({
  address,
  email,
  contactInfo = []
}: {
  address?: string
  email?: string
  contactInfo?: ContactInfo[]
}) {
  const getLink = (medium: string, fallback: string) => {
    const found = contactInfo.find(c => c.medium.toLowerCase().includes(medium.toLowerCase()))
    return found?.address || fallback
  }

  const linkedinLink = getLink("linkedin", "https://www.linkedin.com/company/yeti-dresden/")
  const instagramLink = getLink("insta", "https://www.instagram.com/yeti_dresden/")
  const youtubeLink = getLink("youtube", "https://www.youtube.com/@YETI-program")
  const whatsappLink = getLink("what", "https://chat.whatsapp.com/Gf290Qt4NEp7Chb070Dxmp")

  return (
    <footer className="relative bg-black text-neutral-500 overflow-hidden">
      {/* Content - Above watermark */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 sm:mb-12 pb-8">
          {/* Logo and Info */}
          <div className="mb-6 lg:mb-0">
            <Link href="/" aria-label="Home" className="inline-block">
              <Image
                src="/white-transparent.png"
                alt="YETI Logo"
                className="h-16 w-auto mb-2"
                style={{ maxWidth: 160 }}
                width={160}
                height={48}
                priority
              />
            </Link>
            <p className="mt-1 text-xs text-neutral-500">
              ©{new Date().getFullYear()} YETI Dresden. All rights reserved.
            </p>
            {address && (
              <p className="mt-2 text-sm text-neutral-400">{address}</p>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="mt-1 text-sm text-neutral-400 hover:text-white transition-colors duration-200 inline-block"
              >
                {email}
              </a>
            )}

            {/* Social Icons - shown on all sizes, below the email */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-[#0077b5] transition-colors duration-200"
                aria-label="Follow us on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
             <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-pink-500 transition-colors duration-200"
              aria-label="Follow us on Instagram"
            >

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
              <a
                href={youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-red-500 transition-colors duration-200"
                aria-label="Subscribe on YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-[#25D366] transition-colors duration-200"
                aria-label="Join our WhatsApp Community"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Main Grid Layout — center column */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-20 mb-12 lg:mb-0">
            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-neutral-500 font-semibold mb-4 text-sm">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Support / Donate widget (Stiftung Thomas Kirchner Bildungsförderung via Gooding) — rightmost column */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right mb-8 lg:mb-0">
            <h3 className="text-neutral-300 font-semibold mb-1 text-sm uppercase tracking-wider">
              Support YETI
            </h3>
            <p className="text-xs text-neutral-500 mb-4 max-w-sm">
              Empower the next generation of entrepreneurs.
            </p>
            <iframe
              width="300"
              height="250"
              name="Gooding Banner-Widget"
              id="Gooding Banner-Widget"
              sandbox="allow-top-navigation allow-forms allow-popups-to-escape-sandbox allow-same-origin allow-popups allow-scripts"
              frameBorder="0"
              allowTransparency
              scrolling="yes"
              title="Gooding Banner-Widget"
              loading="lazy"
              src="https://erweiterungen.gooding.de/app/widget/stiftung-thomas-kirchner-bildungsfoerderungs-ggmbh-145651/medium-rectangle/tab/0/donations/1/v/1780176712.jm%252B%252BJ%252B9FlW%252F4rGW4I8I9JIDfuYd4lZtiKhy5sEzx9o2dl07djxTZN9P%252F38fKYy04KwbnarNzro81hZuVUGKsZPNwgPR%252F3qCJxappcsMGTt6By64u43pDOU%252F1%252B84vlde9gr2akvIIH%252FYee9DJ9yDr%252BJilSWSs8WzehXsOfev4FJQ%253D"
              className="rounded-xl bg-white/5"
            />
          </div>
        </div>
      </div>

      {/* Large Watermark Text with Logo - Behind content */}
      <div className="w-full flex justify-center items-center text-center pointer-events-none select-none overflow-hidden">
        <div className="relative flex items-center justify-center w-full">
          <div
            className="font-black leading-none bg-gradient-to-b from-neutral-700/60 to-neutral-950 bg-clip-text text-transparent px-4"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.02)",
              fontSize: "clamp(4.5rem, 18vw, 26rem)",
              letterSpacing: "0.0005em"
            }}
          >
            YETI
          </div>
          <div className="ml-4 relative" style={{ width: "clamp(4.5rem, 18vw, 26rem)", height: "clamp(4.5rem, 18vw, 26rem)" }}>
            <Image
              src="/happy-yeti/1.png"
              alt="Happy YETI"
              fill
              className="object-contain opacity-30"
            />
          </div>
        </div>
      </div>

      {/* Black overlay gradient from bottom to top */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
    </footer>
  )
}
