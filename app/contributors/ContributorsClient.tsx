"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Users, Shield, Globe, Mic, Heart, GraduationCap } from "lucide-react"

export function ContributorsClient() {
    return (
        <div className="font-sans bg-black min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-black text-white py-20 md:py-28 overflow-hidden">
                {/* Blue gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <motion.h1
                        className="text-4xl font-bold md:text-6xl mb-6 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        YETI Contributors
                    </motion.h1>
                    <motion.p
                        className="max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    >
                        The YETI network is structured much like a startup itself, with dedicated leaders, teams, and mentors working together to create an exceptional entrepreneurial ecosystem.
                    </motion.p>
                </div>
            </section>

            {/* Structure Section */}
            <section className="bg-neutral-50 text-black py-16">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">
                            How YETI Works
                        </h2>
                        <p className="text-neutral-600 max-w-3xl mx-auto">
                            Our organizational structure brings together leadership, internal teams, and external expertise
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {/* Leadership Card */}
                        <motion.div
                            className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 flex flex-col hover:shadow-md transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                                <Shield className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Leadership</h3>
                            <ul className="space-y-2 text-neutral-600 text-sm leading-relaxed flex-grow">
                                <li>
                                    <Link href="/contributors/ober-yetis" className="text-primary font-semibold hover:underline">OberYetis (OYs)</Link> act as program directors, planning activities and overseeing teams.
                                </li>
                                <li>
                                    The <Link href="/contributors/board" className="text-primary font-semibold hover:underline">YETI Board</Link> provides strategic guidance and governance.
                                </li>
                            </ul>
                        </motion.div>

                        {/* Internal Teams Card */}
                        <motion.div
                            className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 flex flex-col hover:shadow-md transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                                <Users className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Internal Teams</h3>
                            <ul className="space-y-2 text-neutral-600 text-sm leading-relaxed flex-grow">
                                <li>
                                    Every YETI contributes to internal teams (IT, Events, Networking, Social Media).
                                </li>
                                <li>
                                    Led by <strong>Team Leads</strong> and supported by <strong>Semester Leads</strong> for hands-on leadership experience.
                                </li>
                            </ul>
                        </motion.div>

                        {/* External Network Card */}
                        <motion.div
                            className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 flex flex-col hover:shadow-md transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                                <Globe className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">External Network</h3>
                            <ul className="space-y-2 text-neutral-600 text-sm leading-relaxed flex-grow">
                                <li>
                                    Entrepreneurs and experts host workshops and join <Link href="/contributors/fireside-chats" className="text-primary font-semibold hover:underline">Fireside Chats</Link>.
                                </li>
                                <li>
                                    Many serve as <strong>Mentors</strong>, providing personal guidance to every YETI.
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Get to Know Section - REDESIGNED */}
            <section className="bg-black text-white py-16 border-t border-white/10">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">
                                Our Community
                            </h2>
                            <p className="text-white/60 max-w-xl">
                                Explore the people and partners who make YETI possible
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            {
                                title: "Ober Yetis",
                                desc: "Leadership",
                                href: "/contributors/ober-yetis",
                                icon: <Shield className="w-5 h-5" />,
                                color: "from-blue-500/20 to-cyan-500/20",
                                hoverColor: "group-hover:from-blue-500/40 group-hover:to-cyan-500/40"
                            },
                            {
                                title: "Yeti Board",
                                desc: "Advisory",
                                href: "/contributors/board",
                                icon: <Users className="w-5 h-5" />,
                                color: "from-purple-500/20 to-pink-500/20",
                                hoverColor: "group-hover:from-purple-500/40 group-hover:to-pink-500/40"
                            },
                            {
                                title: "Mentors",
                                desc: "Guides",
                                href: "", // Navigation disabled as per request
                                icon: <GraduationCap className="w-5 h-5" />,
                                color: "from-emerald-500/20 to-teal-500/20",
                                hoverColor: "group-hover:from-emerald-500/40 group-hover:to-teal-500/40"
                            },
                            {
                                title: "Sponsors",
                                desc: "Partners",
                                href: "/contributors/sponsors",
                                icon: <Heart className="w-5 h-5" />,
                                color: "from-amber-500/20 to-orange-500/20",
                                hoverColor: "group-hover:from-amber-500/40 group-hover:to-orange-500/40"
                            },
                            {
                                title: "Speakers",
                                desc: "Insights",
                                href: "/contributors/fireside-chats",
                                icon: <Mic className="w-5 h-5" />,
                                color: "from-red-500/20 to-rose-500/20",
                                hoverColor: "group-hover:from-red-500/40 group-hover:to-rose-500/40"
                            }
                        ].map((item, index) => {
                            const CardContent = (
                                <motion.div
                                    className="group relative h-full bg-neutral-900/40 border border-white/10 rounded-xl p-5 hover:bg-neutral-800/60 transition-all duration-300 overflow-hidden flex flex-col items-start justify-between min-h-[140px]"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ y: item.href ? -2 : 0 }}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-30 ${item.hoverColor} transition-all duration-500`} />

                                    <div className="relative z-10 p-2 rounded-lg bg-white/10 text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>

                                    <div className="relative z-10 w-full">
                                        <h3 className={`font-bold text-white text-lg leading-tight mb-1 ${item.href ? 'group-hover:text-primary' : ''} transition-colors`}>
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center justify-between w-full">
                                            <p className="text-white/50 text-xs font-medium uppercase tracking-wide">
                                                {item.desc}
                                            </p>
                                            {item.href && <ArrowRight className="w-3 h-3 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />}
                                        </div>
                                    </div>
                                </motion.div>
                            )

                            return item.href ? (
                                <Link key={item.title} href={item.href} className="block h-full">
                                    {CardContent}
                                </Link>
                            ) : (
                                <div key={item.title} className="block h-full cursor-default">
                                    {CardContent}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
