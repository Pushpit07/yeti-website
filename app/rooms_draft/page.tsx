"use client"

import { useEffect } from "react"
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
    features: ["Meetings", "Workshops", "Strategy sessions", "Brainstorming"],
    images: ["/images/rooms/board-room-1.jpg", "/images/rooms/board-room-2.jpg"],
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
    features: ["Keynotes", "Pitches", "Panel discussions", "Team events"],
    images: ["/images/rooms/main-hall-1.jpg", "/images/rooms/main-hall-2.jpg"],
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
    features: ["Breakout sessions", "Small groups", "Parallel sessions", "Confidential discussions"],
    images: ["/images/rooms/extra-rooms-1.jpg", "/images/rooms/extra-rooms-2.jpg"],
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
    features: ["Closing activity", "Off-sites", "Workshops", "Team events"],
    images: ["/images/rooms/bbq-1.jpg", "/images/rooms/bbq-2.jpg"],
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
  return (
    <article
      className={`grid md:grid-cols-2 gap-10 md:gap-14 items-center ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image gallery */}
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-2 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 flex items-center justify-center text-neutral-600">
          <span className="text-sm">Image: {room.images[0]}</span>
        </div>
        <div className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-neutral-900 flex items-center justify-center text-neutral-600">
          <span className="text-xs">Image: {room.images[1]}</span>
        </div>
        <div className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-neutral-900 flex items-center justify-center text-neutral-600">
          <span className="text-xs">+ more</span>
        </div>
      </div>

      {/* Info + booking */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">
            {room.capacity}
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">{room.title}</h2>

        <p className="text-base md:text-lg text-neutral-400 leading-relaxed mb-6">
          {room.description}
        </p>

        <ul className="flex flex-wrap gap-2 mb-8">
          {room.features.map((f) => (
            <li
              key={f}
              className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300"
            >
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3">
          {room.options.map((opt, i) => (
            <button
              key={opt.namespace}
              data-cal-namespace={opt.namespace}
              data-cal-link={opt.calLink}
              data-cal-origin={CAL_ORIGIN}
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold transition-all duration-300 hover:gap-5 ${
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
      <section className="relative min-h-[60vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-white uppercase">
              Villa Möckel
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Book a <span className="text-primary">Room</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Pick a space, pick a slot — host meetings, workshops, off-sites, and large team
            events at our headquarter.
          </p>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 md:mb-20">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Offers
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight">Main Rooms</h2>
          </div>

          <div className="space-y-20 md:space-y-28">
            {rooms.map((room, idx) => (
              <RoomArticle key={room.id} room={room} reverse={idx % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 md:py-24 relative border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 md:mb-20">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Add-ons
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight">
              Extend your booking
            </h2>
            <p className="text-base md:text-lg text-neutral-400 leading-relaxed mt-4 max-w-2xl">
              Combine with Offer 1 or Offer 2 — extra breakout rooms and BBQ catering.
            </p>
          </div>

          <div className="space-y-20 md:space-y-28">
            {addOns.map((room, idx) => (
              <RoomArticle key={room.id} room={room} reverse={idx % 2 === 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
