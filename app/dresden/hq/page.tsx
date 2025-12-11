import { getLocationData, getMediaContent } from "@/lib/sheets"
import { Section } from "@/components/Section"
import Image from "next/image"
import { HQGallery } from "@/components/HQGallery"

export const dynamic = "force-static"
export const revalidate = 60

export const metadata = {
    title: "Dresden HQ | YETI",
    description:
        "Visit our headquarters in Dresden - the heart of the YETI community, complete with a full makerspace.",
}

export default async function DresdenHQPage() {
    const locationDataArray = await getLocationData("Dresden")
    const mediaContent = await getMediaContent()
    const locationData = locationDataArray[0] || {
        location: "Dresden",
        hqAddress: "Leubnitzer Str. 28, 01069 Dresden, Germany",
        emailId: "info@yeti-dresden.org",
        hqContent: "",
    }

    return (
        <div className="font-sans">
            {/* Hero Section with Image */}
            <section className="relative bg-black text-white overflow-hidden">
                <div className="relative w-full h-screen">
                    <div className="absolute inset-0">
                        <img
                            src="/hq.jpg"
                            alt="YETI Dresden HQ"
                            className="w-full h-full object-cover"
                            style={{ objectPosition: "center" }}
                        />
                    </div>

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/50" />
                    {/* Bottom-to-top black gradient overlay */}
                    <div
                        className="pointer-events-none absolute inset-0 z-10"
                        style={{
                            background:
                                "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.0) 60%)",
                        }}
                    />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 z-20 px-4">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
                            YETI Dresden HQ
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 text-center max-w-3xl">
                            Where innovation happens
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="relative bg-black text-white pt-16 md:pt-32 pb-32 md:pb-48 min-h-[800px] md:min-h-[1000px] overflow-hidden">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold text-center leading-tight mb-16">
                            Your{" "}
                            <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                                home base
                            </span>{" "}
                            for entrepreneurship
                        </h2>

                        <div className="space-y-8">
                            {/* YETI HQ is more than just an office */}
                            <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                    <span className="text-2xl">🏢</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-white">More than an office</h3>
                                    <p className="text-lg text-white/80 leading-relaxed">
                                        YETI HQ is the <strong className="text-primary">beating heart</strong> of our entrepreneurial community in Dresden.
                                    </p>
                                </div>
                            </div>

                            {/* Central Location */}
                            <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                    <span className="text-2xl">📍</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-white">Central Dresden location</h3>
                                    <p className="text-lg text-white/80 leading-relaxed">
                                        Located in the center of Dresden, our headquarters provides the perfect environment for collaboration, innovation, and growth.
                                    </p>
                                </div>
                            </div>

                            {/* Thursday Sessions */}
                            <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-white">Thursdays are YETI days</h3>
                                    <p className="text-lg text-white/80 leading-relaxed">
                                        Every Thursday, the HQ comes alive with <strong className="text-primary">workshops, pitches, and networking sessions</strong> – the creative chaos that comes with building the future.
                                    </p>
                                </div>
                            </div>

                            {/* Open All Week */}
                            <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                    <span className="text-2xl">🔑</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-white">Always accessible</h3>
                                    <p className="text-lg text-white/80 leading-relaxed">
                                        Open all week for YETIs to work, meet, and make things happen.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Happy YETI Images */}
                <div className="absolute bottom-0 left-0 pointer-events-none">
                    <div className="relative w-[200px] h-[200px] md:w-[450px] md:h-[450px]">
                        <Image
                            src="/happy-yeti/2.png"
                            alt="Happy YETI"
                            fill
                            className="object-contain object-bottom opacity-20"
                        />
                    </div>
                </div>

                <div className="absolute bottom-0 right-0 pointer-events-none -mb-10">
                    <div className="relative w-[200px] h-[200px] md:w-[450px] md:h-[450px]">
                        <Image
                            src="/happy-yeti/1.png"
                            alt="Happy YETI"
                            fill
                            className="object-contain object-bottom opacity-20"
                        />
                    </div>
                </div>
            </section>

            {/* HQGallery */}
            <HQGallery images={mediaContent.dresdenHQ} locationName="Dresden" />

            {/* Makerspace Section */}
            <Section className="bg-neutral-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 bg-black rounded-2xl overflow-hidden shadow-2xl">
                        {/* Content Column */}
                        <div className="flex flex-col justify-center p-8 md:p-12 text-white">
                            <div className="text-4xl mb-4">🛠️</div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Our{" "}
                                <span className="underline decoration-wavy underline-offset-8 decoration-primary">
                                    Makerspace
                                </span>
                            </h2>
                            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                                YETI Dresden HQ is fully equipped with a Makerspace where your ideas take
                                physical form. Whether you&apos;re building a hardware
                                prototype, creating a product demo, or just
                                experimenting—we&apos;ve got the tools and space you need.
                            </p>
                            <div className="flex">
                                <a
                                    href="/dresden/makerspace"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-colors gap-2"
                                >
                                    Explore the Makerspace
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="ml-2 inline-block"
                                        aria-hidden="true"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="relative w-full min-h-[300px] md:min-h-full">
                            <Image
                                src="/hq.jpg"
                                alt="YETI Dresden Makerspace"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Location & Contact */}
            <div id="contact" className="bg-neutral-50">
                <Section>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                            Visit{" "}
                            <span className="underline decoration-wavy underline-offset-8 decoration-primary">
                                us
                            </span>
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Address Card */}
                            <div className="bg-white rounded-2xl border-2 border-border p-8">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="text-3xl">📍</span>
                                    Location
                                </h3>
                                <div className="space-y-4 text-lg">
                                    <div>
                                        <p className="font-bold">YETI Dresden HQ</p>
                                        <p className="text-muted-foreground whitespace-pre-line">{locationData.hqAddress}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            Easily accessible by public transport (Tram lines 3, 8 to
                                            Reichenbachstraße)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Access Card */}
                            <div className="bg-white rounded-2xl border-2 border-border p-8">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="text-3xl">🕐</span>
                                    Access
                                </h3>
                                <div className="space-y-4 text-lg">
                                    <div>
                                        <p className="font-bold">Thursday (YETI Day)</p>
                                        <p className="text-muted-foreground">
                                            All day access & events
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-bold">Other weekdays</p>
                                        <p className="text-muted-foreground">
                                            Open for YETI members
                                        </p>
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Want to visit? Drop us a message at{" "}
                                        <a
                                            href={`mailto:${locationData.emailId}`}
                                            className="text-primary font-semibold hover:underline"
                                        >
                                            {locationData.emailId}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-12 bg-black text-white rounded-2xl p-8 md:p-12 text-center">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Want to experience YETI Dresden HQ?
                            </h3>
                            <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
                                Join us for a Thursday session or apply to become part of the
                                Dresden community!
                            </p>
                            <a
                                href="/application/dresden"
                                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-colors gap-2"
                            >
                                Apply now
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="ml-2 inline-block"
                                    aria-hidden="true"
                                >
                                    <path d="M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </Section>
            </div>
        </div>
    )
}
