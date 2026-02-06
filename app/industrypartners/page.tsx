"use client"

import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'

export default function IndustryPartnersPage() {
    return (
        <div className="bg-black min-h-screen text-white pt-24 pb-24">
            <div className="container mx-auto px-4 md:px-8">
                {/* Hero Section */}
                <FadeIn>
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Turn Business Challenges Into Innovation
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8">
                            Partner with YETI&apos;s entrepreneurial students to solve real problems and discover future talent.
                        </p>
                        <Button
                            href="mailto:sandra@yeti-dresden.org"
                            variant="solid"
                        >
                            Become a Partner
                        </Button>
                    </div>
                </FadeIn>

                {/* Why Partner with YETI Section */}
                <section className="mb-32">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">What You Gain</h2>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <FadeIn delay={0.1}>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
                                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Top Talent Access</h3>
                                <p className="text-white/70 leading-relaxed">
                                    Skilled students across tech, business, and engineering ready to tackle your toughest challenges.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
                                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Fresh Solutions</h3>
                                <p className="text-white/70 leading-relaxed">
                                    Innovative approaches using design thinking to solve industry problems creatively.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
                                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Future Talent Pipeline</h3>
                                <p className="text-white/70 leading-relaxed">
                                    Early access to future founders and leaders—build relationships with exceptional talent.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
                                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Brand Visibility</h3>
                                <p className="text-white/70 leading-relaxed">
                                    Position your company at the forefront of innovation among students and the ecosystem.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* How the Partnership Works Section */}
                <section className="mb-32">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
                        </div>
                    </FadeIn>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {[
                                {
                                    number: "01",
                                    title: "Share Your Challenge",
                                    description: "Bring a real business problem or opportunity you'd like to explore."
                                },
                                {
                                    number: "02",
                                    title: "Student Teams Collaborate",
                                    description: "Dedicated teams work on your project, applying design thinking and innovative approaches."
                                },
                                {
                                    number: "03",
                                    title: "Regular Check-ins",
                                    description: "Stay engaged through feedback loops and mentoring sessions."
                                },
                                {
                                    number: "04",
                                    title: "Demo Day Results",
                                    description: "Teams present final solutions at our flagship event with 150+ ecosystem attendees."
                                }
                            ].map((step, index) => (
                                <FadeIn key={index} delay={index * 0.1}>
                                    <div className="flex gap-6 items-start">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                                                <span className="text-2xl font-bold text-primary">{step.number}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1 pt-2">
                                            <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                            <p className="text-white/70 leading-relaxed text-lg">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Demo Day Section */}
                <section className="mb-32">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Demo Day Benefits</h2>
                        </div>
                    </FadeIn>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <FadeIn delay={0.1}>
                                <div className="text-center p-8 bg-white/5 border border-white/10 rounded-lg">
                                    <div className="text-5xl font-bold text-primary mb-3">150+</div>
                                    <p className="text-white/80 text-lg">Attendees from the ecosystem</p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <div className="text-center p-8 bg-white/5 border border-white/10 rounded-lg">
                                    <div className="text-5xl font-bold text-primary mb-3">Your Stand</div>
                                    <p className="text-white/80 text-lg">Get a stand with logo & visibility</p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.3}>
                                <div className="text-center p-8 bg-white/5 border border-white/10 rounded-lg">
                                    <div className="text-5xl font-bold text-primary mb-3">Premium</div>
                                    <p className="text-white/80 text-lg">Exposure to talent and innovation</p>
                                </div>
                            </FadeIn>
                        </div>

                        <FadeIn delay={0.4}>
                            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
                                <h3 className="text-2xl font-bold mb-6 text-center">Partner Perks</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Logo on all Demo Day materials",
                                        "On-site booth or display",
                                        "Mentions during ceremonies",
                                        "Social media promotion"
                                    ].map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-white/80">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Call to Action Section */}
                <FadeIn>
                    <div className="border-t border-white/10 pt-16 text-center">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Ready to Partner?
                        </h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Get fresh innovation, early talent access, and meaningful brand presence.
                        </p>
                        <Button
                            href="mailto:sandra@yeti-dresden.org"
                            variant="solid"
                        >
                            Become a Partner
                        </Button>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}
