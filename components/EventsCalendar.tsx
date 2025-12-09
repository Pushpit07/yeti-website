"use client"

import { useState, useMemo } from "react"
import Link from "next/link"

// --- Types ---
type CalendarEvent = {
    slug: string
    title: string
    date?: string
    location?: string
    sponsoredBy?: string
    registrationStartDate?: string
    registrationEndDate?: string
}

// --- Date Parsing Helper ---
function parseDate(input?: string): Date | null {
    if (!input) return null
    const raw = input.trim()
    if (!raw) return null

    const native = new Date(raw)
    if (!isNaN(native.getTime())) return native

    const lower = raw.toLowerCase().replace(",", "")
    const dmY = lower.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{2,4})$/)
    if (dmY) {
        const day = parseInt(dmY[1], 10)
        const month = parseInt(dmY[2], 10) - 1
        let year = parseInt(dmY[3], 10)
        if (year < 100) year = 2000 + year
        return new Date(year, month, day)
    }

    const monthNames: Record<string, number> = {
        jan: 0, january: 0, feb: 1, february: 1, mar: 2, march: 2,
        apr: 3, april: 3, may: 4, jun: 5, june: 5, jul: 6, july: 6,
        aug: 7, august: 7, sep: 8, sept: 8, september: 8, oct: 9, october: 9,
        nov: 10, november: 10, dec: 11, december: 11,
    }
    const parts = lower.split(/\s+/)
    if (parts.length >= 2) {
        const day = parseInt(parts[0], 10)
        const monthStr = parts[1]
        const month = monthNames[monthStr]
        if (!isNaN(day) && month !== undefined) {
            let year = new Date().getFullYear()
            if (parts[2]) year = parseInt(parts[2], 10) < 100 ? 2000 + parseInt(parts[2], 10) : parseInt(parts[2], 10)
            return new Date(year, month, day)
        }
    }
    return null
}

export function EventsCalendar({ events }: { events: CalendarEvent[] }) {
    const [currentDate, setCurrentDate] = useState(new Date())

    // Normalize events
    const eventsByDate = useMemo(() => {
        const map = new Map<string, CalendarEvent[]>()
        events.forEach((event) => {
            const parsed = parseDate(event.date)
            if (parsed) {
                const key = `${parsed.getFullYear()}-${String(parsed.getMonth() + 1).padStart(2, "0")}-${String(parsed.getDate()).padStart(2, "0")}`
                if (!map.has(key)) map.set(key, [])
                map.get(key)!.push(event)
            }
        })
        return map
    }, [events])

    // Navigation
    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
    }
    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
    }

    // Grid Generation
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDayOfMonth = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const days = []
    for (let i = 0; i < firstDayOfMonth; i++) days.push(null)
    for (let i = 1; i <= daysInMonth; i++) days.push(i)

    const monthName = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })

    return (
        <div className="w-full bg-white rounded-3xl border border-neutral-200 shadow-sm overflow-hidden p-8 md:p-12 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* --- LEFT SIDE: Rich Text & Features --- */}
                <div className="space-y-8">
                    <div className="space-y-2">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs">Your Schedule</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                            Don&apos;t Miss a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-black">Moment.</span>
                        </h2>
                    </div>

                    <div className="grid gap-6">
                        {/* Feature 1 */}
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-xl">
                                🚀
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-black">Demo Days</h4>
                                <p className="text-sm text-neutral-600 leading-relaxed">
                                    Witness the latest innovations from our top startups and teams.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-xl">
                                🤝
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-black">Networking</h4>
                                <p className="text-sm text-neutral-600 leading-relaxed">
                                    Connect with entrepreneurs, investors, and industry mentors.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-xl">
                                💡
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-black">Workshops</h4>
                                <p className="text-sm text-neutral-600 leading-relaxed">
                                    Hands-on sessions to sharpen your skills and build your toolkit.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-2 flex items-center gap-3 text-sm text-neutral-400 font-medium">
                        <div className="h-px w-12 bg-neutral-200"></div>
                        Select a highlighted date to see details
                    </div>
                </div>

                {/* --- RIGHT SIDE: Compact Calendar --- */}
                <div className="w-full max-w-sm mx-auto lg:ml-auto bg-neutral-50/50 p-6 rounded-2xl border border-neutral-100">
                    {/* Calendar Header */}
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-black">{monthName}</h2>
                        <div className="flex gap-1.5">
                            <button onClick={handlePrevMonth} className="p-2 bg-white shadow-sm rounded-full hover:bg-neutral-100 border border-neutral-200 text-neutral-600 transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button onClick={handleNextMonth} className="p-2 bg-white shadow-sm rounded-full hover:bg-neutral-100 border border-neutral-200 text-neutral-600 transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-y-2 gap-x-1">
                        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                            <div key={day} className="text-[10px] font-bold text-neutral-400 uppercase text-center mb-1">
                                {day}
                            </div>
                        ))}

                        {days.map((day, idx) => {
                            if (!day) return <div key={`empty-${idx}`} className="h-9 w-full" />

                            const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
                            const dayEvents = eventsByDate.get(dateKey) || []
                            const hasEvents = dayEvents.length > 0

                            return (
                                <div key={day} className="relative group h-9 w-full flex items-center justify-center">
                                    <div
                                        className={`h-8 w-8 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 relative z-10
                      ${hasEvents
                                                ? "bg-black text-white cursor-pointer shadow-lg hover:bg-primary hover:shadow-primary/30 hover:scale-110"
                                                : "text-neutral-500 hover:bg-neutral-200/50 cursor-default"}`}
                                    >
                                        {day}
                                    </div>

                                    {/* Indicator dot for events */}
                                    {hasEvents && (
                                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full z-20" />
                                    )}

                                    {/* TOOLTIP POPUP */}
                                    {hasEvents && (
                                        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute z-50 right-0 lg:left-1/2 lg:-translate-x-1/2 top-full mt-3 w-[280px] bg-white text-left p-2 rounded-xl shadow-2xl border border-neutral-100 transition-all duration-200 origin-top transform scale-95 group-hover:scale-100">

                                            {/* Arrow */}
                                            <div className="hidden lg:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-t border-l border-neutral-100"></div>

                                            <div className="relative space-y-1 max-h-[240px] overflow-y-auto custom-scrollbar">
                                                {dayEvents.map((evt) => (
                                                    <Link
                                                        key={evt.slug}
                                                        href={`/events/${evt.slug}`}
                                                        className="block p-3 rounded-lg hover:bg-neutral-50 transition-colors group/link"
                                                    >
                                                        <h3 className="font-bold text-sm text-black group-hover/link:text-primary transition-colors leading-tight mb-1.5">
                                                            {evt.title}
                                                        </h3>

                                                        <div className="space-y-1.5">
                                                            {/* Location */}
                                                            {evt.location && (
                                                                <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                                                                    <svg className="w-3.5 h-3.5 flex-shrink-0 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                                    <span className="truncate">{evt.location}</span>
                                                                </div>
                                                            )}

                                                            {/* Dates */}
                                                            {(evt.registrationStartDate || evt.registrationEndDate) && (
                                                                <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-neutral-100 text-neutral-500 uppercase tracking-wide">
                                                                    Reg: {evt.registrationStartDate || 'Now'}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}