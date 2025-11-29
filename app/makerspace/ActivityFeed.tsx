// app/makerspace/ActivityFeed.tsx
"use client"

import { useState } from "react"
import Image from "next/image"
import { type MakerspaceActivity } from "@/lib/sheets"
import { convertGoogleDriveLink } from "@/lib/utils"

export function ActivityFeed({ activities }: { activities: MakerspaceActivity[] }) {
    const [selectedActivity, setSelectedActivity] = useState<MakerspaceActivity | null>(null)

    return (
        <>
            {/* --- The Grid --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activities.map((item, idx) => (
                    <div
                        key={idx + item.activity}
                        onClick={() => setSelectedActivity(item)}
                        className="group cursor-pointer flex flex-col bg-neutral-900/50 border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
                    >
                        {/* Image Area */}
                        <div className="relative w-full h-64 bg-neutral-800 overflow-hidden">
                            <Image
                                src={convertGoogleDriveLink(item.imageLink)}
                                alt={item.activity}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="bg-black/80 backdrop-blur border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    {item.machine}
                                </span>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                {item.activity}
                            </h3>

                            {/* Truncate text to 3 lines */}
                            <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3 mb-4">
                                {item.about}
                            </p>

                            {/* Read More Link */}
                            <div className="mt-auto flex items-center text-primary text-sm font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                Read full story &rarr;
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- The Modal (Popup) --- */}
            {selectedActivity && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={() => setSelectedActivity(null)}
                >
                    <div
                        className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-700 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedActivity(null)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black rounded-full text-white flex items-center justify-center transition-colors"
                        >
                            ✕
                        </button>

                        <div className="grid md:grid-cols-2">
                            {/* Modal Image */}
                            <div className="relative h-64 md:h-auto min-h-[300px]">
                                <Image
                                    src={convertGoogleDriveLink(selectedActivity.imageLink)}
                                    alt={selectedActivity.activity}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Modal Content */}
                            <div className="p-8 md:p-10 max-h-[80vh] overflow-y-auto">
                                <div className="mb-6">
                                    <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">
                                        Built with {selectedActivity.machine}
                                    </span>
                                    <h2 className="text-3xl font-bold text-white">
                                        {selectedActivity.activity}
                                    </h2>
                                </div>
                                <div className="prose prose-invert prose-p:text-neutral-300">
                                    <p className="whitespace-pre-wrap leading-relaxed">
                                        {selectedActivity.about}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}