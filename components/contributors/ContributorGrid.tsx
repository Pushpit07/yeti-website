'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Linkedin } from 'lucide-react'

export type ContributorItem = {
    id: string
    name: string
    role?: string
    company?: string
    description?: string
    image: string
    linkedin?: string
}

export function ContributorGrid({ items }: { items: ContributorItem[] }) {
    const [selectedItem, setSelectedItem] = useState<ContributorItem | null>(null)

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        onClick={() => setSelectedItem(item)}
                        className="group relative bg-neutral-900/40 backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.15)] hover:-translate-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                        {/* Image Aspect Ratio Container */}
                        <div className="relative aspect-[3/4] w-full overflow-hidden">
                            {item.image ? (
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-neutral-800 text-neutral-600">
                                    No Image
                                </div>
                            )}

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-500">
                                <h3 className="text-xl font-bold text-white mb-1 leading-tight drop-shadow-md">{item.name}</h3>
                                {(item.role || item.company) && (
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {item.role && (
                                            <span className="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md border border-white/10 text-xs font-medium text-white shadow-sm">
                                                {item.role}
                                            </span>
                                        )}
                                        {item.company && !item.role && (
                                            <span className="text-white/80 text-sm font-medium line-clamp-2 drop-shadow-sm">
                                                {item.company}
                                            </span>
                                        )}
                                    </div>
                                )}
                                {/* LinkedIn Icon */}
                                {item.linkedin && (
                                    <div className="flex">
                                        <a
                                            href={item.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-[#0A66C2] hover:text-white text-white transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-transparent hover:scale-110 shadow-lg"
                                        >
                                            <Linkedin size={16} />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                        {/* Backdrop - INSTANT CLOSE */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0 } }} // Duration 0 = Instant
                            onClick={() => setSelectedItem(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />

                        {/* Modal Content - INSTANT CLOSE */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0 } }} // Duration 0 = Instant
                            transition={{ duration: 0.2 }} // Only applies to opening
                            className="relative w-full max-w-5xl bg-neutral-900/95 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10"
                            >
                                <X size={24} />
                            </button>

                            {/* Left: Image */}
                            <div className="relative w-full md:w-1/2 h-72 md:h-auto bg-neutral-900/50 flex items-center justify-center p-4">
                                {selectedItem.image ? (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={selectedItem.image}
                                            alt={selectedItem.name}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-neutral-800 text-neutral-600">
                                        No Image
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent md:hidden pointer-events-none" />
                            </div>

                            {/* Right: Details */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">{selectedItem.name}</h2>
                                        {(selectedItem.role || selectedItem.company) && (
                                            <p className="text-xl text-primary font-medium flex flex-wrap gap-2 items-center">
                                                {selectedItem.role}
                                                {selectedItem.role && selectedItem.company && <span className="text-white/30">|</span>}
                                                {selectedItem.company}
                                            </p>
                                        )}
                                    </div>

                                    {selectedItem.description && (
                                        <div className="prose prose-invert prose-lg max-w-none text-white/80 leading-relaxed font-light">
                                            <p>{selectedItem.description}</p>
                                        </div>
                                    )}

                                    {selectedItem.linkedin && (
                                        <div className="pt-2">
                                            <a
                                                href={selectedItem.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0A66C2] text-white font-semibold hover:bg-[#004182] transition-all hover:scale-105 shadow-lg shadow-blue-900/30"
                                            >
                                                <Linkedin size={22} />
                                                Connect on LinkedIn
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}