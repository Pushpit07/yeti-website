// app/makerspace/EquipmentGrid.tsx
"use client"

import { useState } from "react"
import Image from "next/image"
import { type Machine } from "@/lib/sheets"
import { convertGoogleDriveLink, cn } from "@/lib/utils"

export function EquipmentGrid({ machines }: { machines: Machine[] }) {
    const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null)

    return (
        <>
            {/* --- 1. Header & Count --- */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-neutral-800 pb-8 gap-6">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        The Arsenal
                    </h2>
                    <p className="text-neutral-400 max-w-xl text-lg">
                        Our full inventory of industrial-grade tools. <br />
                        <span className="text-primary">Click on any tool</span> to view specs and usage details.
                    </p>
                </div>

                {/* Big Visible Count */}
                <div className="flex items-center gap-4 bg-neutral-900 border border-neutral-800 px-6 py-3 rounded-xl">
                    <span className="text-5xl font-bold text-white tracking-tighter">
                        {machines.length}
                    </span>
                    <div className="flex flex-col text-xs font-bold uppercase tracking-widest text-neutral-500">
                        <span>Machines</span>
                        <span className="text-primary">Available</span>
                    </div>
                </div>
            </div>

            {/* --- 2. The "Tool Board" Grid (UPDATED: Bigger Cards) --- */}
            {/* Changed from grid-cols-5 to grid-cols-3 to match Project Cards size */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {machines.map((machine, idx) => (
                    <div
                        key={idx + machine.name}
                        onClick={() => setSelectedMachine(machine)}
                        className="group relative aspect-square cursor-pointer bg-neutral-900 border border-neutral-800 hover:border-primary rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-4 md:inset-8">
                            <Image
                                src={convertGoogleDriveLink(machine.imageLink)}
                                alt={machine.name}
                                fill
                                className="object-contain opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Overlay Title (Always visible at bottom) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90" />

                        <div className="absolute bottom-0 left-0 w-full p-6">
                            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-primary transition-colors">
                                {machine.name}
                            </h3>
                            <p className="text-neutral-500 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                View Details &rarr;
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- 3. The Popup Modal (Unchanged) --- */}
            {selectedMachine && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                    onClick={() => setSelectedMachine(null)}
                >
                    <div
                        className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-700 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200 flex flex-col md:flex-row max-h-[85vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedMachine(null)}
                            className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black text-white p-2 rounded-full transition-colors"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <div className="w-full md:w-1/2 bg-black flex items-center justify-center p-8">
                            <div className="relative w-full h-64 md:h-full min-h-[300px]">
                                <Image
                                    src={convertGoogleDriveLink(selectedMachine.imageLink)}
                                    alt={selectedMachine.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-neutral-900">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                {selectedMachine.name}
                            </h2>

                            <div className="prose prose-invert prose-p:text-neutral-300">
                                {selectedMachine.about.split('\n').map((paragraph, i) => (
                                    paragraph.trim() && (
                                        <p key={i} className="mb-4 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}