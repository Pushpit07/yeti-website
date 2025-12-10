import Link from "next/link"

interface ContactSectionProps {
    hqAddress: string
    emailId: string
    city: string
}

export function ContactSection({ hqAddress, emailId, city }: ContactSectionProps) {
    return (
        <section id="contact" className="bg-black text-white py-16 md:py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get in <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Have questions? Want to visit? We'd love to hear from you.
                    </p>
                </div>

                {/* Contact Info - No cards, just clean layout */}
                <div className="space-y-12 mb-16">
                    {/* Visit Us */}
                    <div className="text-center md:text-left md:flex md:items-start md:gap-6">
                        <div className="text-5xl mb-4 md:mb-0">📍</div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3">Visit Us</h3>
                            <p className="text-white/70 text-lg mb-2">
                                You can visit us with prior appointment at:
                            </p>
                            <p className="text-white text-xl font-medium">
                                {hqAddress}
                            </p>
                        </div>
                    </div>

                    {/* Reach Out */}
                    <div className="text-center md:text-left md:flex md:items-start md:gap-6">
                        <div className="text-5xl mb-4 md:mb-0">✉️</div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3">Reach Out</h3>
                            <p className="text-white/70 text-lg mb-2">
                                For any inquiries, reach us out at:
                            </p>
                            <a
                                href={`mailto:${emailId}`}
                                className="text-primary hover:text-primary-hover text-xl font-medium underline decoration-primary/30 hover:decoration-primary transition-colors"
                            >
                                {emailId}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Blog CTA */}
                <div className="border-t border-white/10 pt-12">
                    <div className="text-center">
                        <div className="inline-block mb-6">
                            <span className="px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/40 rounded-full text-primary font-bold text-sm uppercase tracking-wider">
                                Stories from the Community
                            </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            Read Stories from Our YETIs
                        </h3>
                        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                            Discover journeys, projects, and insights from the YETI {city} community
                        </p>
                        <Link
                            href="/blogs"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-neutral-100 text-black font-bold rounded-full transition-colors gap-2"
                        >
                            Explore Our Blog
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
