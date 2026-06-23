"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { getCalApi } from "@calcom/embed-react"

type BookingOption = {
  label: string
  namespace: string
  calLink: string
}

type Room = {
  id: string
  title: string
  capacity: string
  description: string
  longDescription?: string
  features: string[]
  images: string[]
  options: BookingOption[]
}

const rooms: Room[] = [
  {
    id: "offer-1",
    title: "Board Meeting Room",
    capacity: "Up to 20 people",
    description:
      "The Board Meeting Room at Villa Möckel is ideal for meetings, workshops, strategy sessions, and creative brainstorming sessions for up to 20 people.",
    longDescription: `The price is €120.00 net for bookings under 4.5 hours and €200.00 net for bookings of 4.5 hours or more, plus 19% VAT in each case.

INCLUDED
- Board meeting room for up to 20 people
- Projector
- High-speed Wi-Fi
- Creative materials such as flip charts, Post-its, and markers
- Coffee, cocoa, tea, and filtered and sparkling water
- Use of the fully equipped kitchen
- Access to the garden and terrace for breaks and informal conversations

ADDRESS AND USEFUL INFORMATION
Leubnitzer Str. 28, 01069 Dresden. The villa is located about a 7-minute walk from Dresden Central Station. Catering and self-catering are available. Special rates for industry partners are available upon request.`,
    features: ["Meetings", "Workshops", "Strategy sessions", "Brainstorming"],
    images: [
      "/images/rooms/board-room-1.jpg",
      "/images/rooms/board-room-2.jpg",
      "/images/rooms/board-room-3.jpg",
    ],
    options: [
      {
        label: "Book 4 Hours",
        namespace: "offer-1",
        calLink: "yeti-fellowship/offer-1",
      },
      {
        label: "Book 8 Hours",
        namespace: "offer-1-board-meeting-room-8-hours",
        calLink: "yeti-fellowship/offer-1-board-meeting-room-8-hours",
      },
    ],
  },
  {
    id: "offer-2",
    title: "Board Meeting Room + Main Hall",
    capacity: "Up to 40 people",
    description:
      "The Main Hall at Villa Möckel is ideal for keynotes, pitches, panel discussions, off-site meetings, and larger team events for up to 40 people. The Board Meeting Room from Offer 1 is also included.",
    longDescription: `The price is €360.00 (net) for bookings under 5 hours and €700.00 (net) for bookings of 5 hours or more, plus 19% VAT in each case.

INCLUDED
- Main Hall for up to 40 people
- Board Meeting Room for up to 20 people
- Projector or large screen
- High-speed Wi-Fi
- Creative materials such as flip charts, Post-its, and markers
- Coffee, cocoa, tea, and filtered and sparkling water
- Use of the fully equipped kitchen
- Access to the garden and terrace for breaks and informal conversations

ADDRESS AND USEFUL INFORMATION
Leubnitzer Str. 28, 01069 Dresden. The villa is located about a 7-minute walk from Dresden Central Station. Catering and self-catering are available. Special rates for industry partners are available upon request.`,
    features: ["Keynotes", "Pitches", "Panel discussions", "Team events"],
    images: [
      "/images/rooms/main-hall-1.jpg",
      "/images/rooms/main-hall-2.jpg",
      "/images/rooms/main-hall-3.jpg",
      "/images/rooms/main-hall-4.jpg",
      "/images/rooms/main-hall-5.jpg",
    ],
    options: [
      {
        label: "Book 4 Hours",
        namespace: "offer-2",
        calLink: "yeti-fellowship/offer-2",
      },
      {
        label: "Book 8 Hours",
        namespace: "offer-2-board-meeting-room-main-hall-8-hours",
        calLink: "yeti-fellowship/offer-2-board-meeting-room-main-hall-8-hours",
      },
    ],
  },
]

const addOns: Room[] = [
  {
    id: "add-on-1",
    title: "Add-on 1 — Extra Rooms",
    capacity: "Bookable with Offer 1 or Offer 2",
    description:
      "Additional meeting rooms can be booked in conjunction with Offer 1 or Offer 2. They are suitable for breakout sessions, small groups, parallel sessions, or confidential discussions.",
    longDescription: `The price (per additional room) is €80.00 net for bookings under 4.5 hours and €140.00 net for bookings of 4.5 hours or more, plus 19% VAT in each case.

INCLUDED
- Additional meeting rooms for breakout sessions and small groups

Use only in conjunction with Offer 1 or Offer 2.`,
    features: ["Breakout sessions", "Small groups", "Parallel sessions", "Confidential discussions"],
    images: [
      "/images/rooms/extra-room-1.jpg",
      "/images/rooms/extra-room-2.jpg",
      "/images/rooms/extra-room-3.jpg",
    ],
    options: [
      {
        label: "Book 4 Hours",
        namespace: "add-on-1",
        calLink: "yeti-fellowship/add-on-1",
      },
      {
        label: "Book 8 Hours",
        namespace: "add-on-1-extra-rooms-8-hours",
        calLink: "yeti-fellowship/add-on-1-extra-rooms-8-hours",
      },
    ],
  },
  {
    id: "add-on-2",
    title: "Add-on 2 — BBQ",
    capacity: "Bookable with Offer 1 or Offer 2",
    description:
      "The BBQ Add-On can be booked in addition to Offer 1 or Offer 2 and is ideal as a closing activity or break during off-site meetings, workshops, and team events.",
    longDescription: `The price is €50.00 net, plus 19% VAT. For the BBQ Add-On, there is no separate price listed for bookings under 5 hours or 5 hours or more.

INCLUDED
- Gas grill
- Terrace

Use only in conjunction with Offer 1 or Offer 2.`,
    features: ["Closing activity", "Off-sites", "Workshops", "Team events"],
    images: [],
    options: [
      {
        label: "Book 4 Hours",
        namespace: "add-on-2",
        calLink: "yeti-fellowship/add-on-2",
      },
      {
        label: "Book 8 Hours",
        namespace: "add-on-2-bbq-8-hours",
        calLink: "yeti-fellowship/add-on-2-bbq-8-hours",
      },
    ],
  },
]

const CAL_EMBED_JS_URL = "https://app.cal.eu/embed/embed.js"
const CAL_ORIGIN = "https://app.cal.eu"

function RoomArticle({ room, reverse }: { room: Room; reverse: boolean }) {
  const [expanded, setExpanded] = useState(false)
  const hasMore = Boolean(room.longDescription && room.longDescription.trim().length > 0)

  return (
    <article
      className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image gallery */}
      <div className="grid grid-cols-2 gap-3">
        {room.images.length === 0 ? (
          <div className="col-span-2 aspect-[4/3] rounded-2xl overflow-hidden border border-dashed border-white/15 bg-neutral-900 flex items-center justify-center text-neutral-500">
            <span className="text-sm">Images coming soon</span>
          </div>
        ) : (
          <>
            <div className="col-span-2 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
              <Image
                src={room.images[0]}
                alt={`${room.title} — main`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                priority={false}
              />
            </div>
            {room.images.slice(1).map((src, i) => (
              <div
                key={src}
                className="relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-neutral-900"
              >
                <Image
                  src={src}
                  alt={`${room.title} — ${i + 2}`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </>
        )}
      </div>

      {/* Info + booking */}
      <div>
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
          <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
            {room.capacity}
          </span>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold mb-3 tracking-tight">{room.title}</h2>

        <p className="text-sm md:text-base text-neutral-400 leading-relaxed mb-2">
          {room.description}
        </p>

        {hasMore && expanded && (
          <p className="text-sm md:text-base text-neutral-400 leading-relaxed mb-2 whitespace-pre-line">
            {room.longDescription}
          </p>
        )}

        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="text-xs font-bold tracking-widest text-primary uppercase hover:underline mb-4"
            aria-expanded={expanded}
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}

        <ul className="flex flex-wrap gap-1.5 mb-5 mt-2">
          {room.features.map((f) => (
            <li
              key={f}
              className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300"
            >
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2.5">
          {room.options.map((opt, i) => (
            <button
              key={opt.namespace}
              data-cal-namespace={opt.namespace}
              data-cal-link={opt.calLink}
              data-cal-origin={CAL_ORIGIN}
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:gap-4 ${
                i === 0
                  ? "bg-primary text-black hover:bg-primary/90"
                  : "bg-white/5 text-white border border-white/15 hover:bg-white/10"
              }`}
            >
              <span>{opt.label}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function RoomsDraftPage() {
  useEffect(() => {
    ;(async () => {
      for (const room of [...rooms, ...addOns]) {
        for (const opt of room.options) {
          const cal = await getCalApi({
            namespace: opt.namespace,
            embedJsUrl: CAL_EMBED_JS_URL,
          })
          cal("ui", { hideEventTypeDetails: false, layout: "month_view" })
        }
      }
    })()
  }, [])

  return (
    <div className="font-sans bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-10 md:pt-20 md:pb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-white uppercase">
              Villa Möckel
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Book a <span className="text-primary">Room</span>
          </h1>

          <p className="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Pick a space, pick a slot — host meetings, workshops, off-sites, and large team
            events at our headquarter.
          </p>
        </div>
      </section>

      {/* Rooms */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8 md:mb-12">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Offers
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mt-1 tracking-tight">Main Rooms</h2>
          </div>

          <div className="space-y-12 md:space-y-16">
            {rooms.map((room, idx) => (
              <RoomArticle key={room.id} room={room} reverse={idx % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-12 md:py-16 relative border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8 md:mb-12">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Add-ons
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mt-1 tracking-tight">
              Extend your booking
            </h2>
            <p className="text-sm md:text-base text-neutral-400 leading-relaxed mt-2 max-w-2xl">
              Combine with Offer 1 or Offer 2 — extra breakout rooms and BBQ catering.
            </p>
          </div>

          <div className="space-y-12 md:space-y-16">
            {addOns.map((room, idx) => (
              <RoomArticle key={room.id} room={room} reverse={idx % 2 === 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
